let api = {
    makeProfitableTrades: async function (crypto_pair, first, second) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: "/trade",
                type: "GET",
                dataType: 'json',
                data: {
                    crypto_pair: crypto_pair,
                    first: first,
                    second: second
                }
            }).done(function (result) {
                if (result.code !== 0) {
                    reject(result.msg);
                    return;
                }
                resolve(result.data);
            });
        });
    },
    getBalance: async function (exchange, api_key, secret_key) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: "/balance",
                type: "GET",
                dataType: 'json',
                data: {
                    exchange: exchange,
                    api_key: api_key,
                    secret_key: secret_key
                }
            }).done(function (result) {
                if (result.code !== 0) {
                    reject(result.msg);
                    return;
                }
                resolve(result.data);
            });
        });
    }
};

let controller = avalon.define({
    $id: 'index',
    crypto_pair: '',
    profit: 0,
    first: {
        id: 'newton',
        name: 'Newton',
        api_key: '',
        secret_key: '',
        trades: [],
        coins: []
    },
    second: {
        id: undefined,
        name: '',
        api_key: '',
        secret_key: '',
        trades: [],
        coins: []
    },
    trades: [],
    process: {
        status: 'Run',
        loop: undefined,
        isRunning: function () {
            return this.loop != null;
        },
        run: async function () {
            try {
                if (this.loop) {
                    await this.loop();
                }
            } catch (e) {
                alert(e);
                this.stop();
            }
        },
        start(process) {
            this.loop = process;
            this.status = "Stop";
        },
        stop() {
            this.loop = undefined;
            this.status = "Run";
        }
    },
    toObject: function (tradeExample, color) {
        let newTrades = [];
        for (let i = 0; i < tradeExample.length; i++) {
            let trade = tradeExample[i];
            newTrades.push({
                price: trade[0],
                quantity: trade[1],
                color: color
            });
        }
        return newTrades;
    },
    toggle: function () {
        if (this.process.isRunning()) {
            this.process.stop();
        } else {
            this.trades.clear();
            this.process.start(async function () {
                let data = await api.makeProfitableTrades(controller.crypto_pair, {
                        exchange: controller.first.id,
                        api_key: controller.first.api_key,
                        secret_key: controller.first.secret_key,
                    },
                    {
                        exchange: controller.second.id,
                        api_key: controller.second.api_key,
                        secret_key: controller.second.secret_key,
                    });
                let firstBids = data.first.bids;
                let secondBids = data.second.bids;
                let firstAsks = data.first.asks;
                let secondAsks = data.second.asks;
                let trades = data.trades;
                controller.first.trades = controller.toObject(firstAsks, "#FF0000").concat(controller.toObject(firstBids, "#00FF00"));
                controller.second.trades = controller.toObject(secondAsks, "#FF0000").concat(controller.toObject(secondBids, "#00FF00"));
                controller.trades.pushArray(trades);
                for (let i = 0; i < trades.length; i++) {
                    controller.profit += trades[i].profit;
                }
            });
        }
    },
    getBalance: async function (exchange) {
        try {
            exchange.coins = await api.getBalance(exchange.id, exchange.api_key, exchange.secret_key);
        } catch (e) {
            alert(e);
        }
    }
});

async function selector(callback, selector) {
    let selected = $(selector + " option:selected");
    callback(selected.val(), selected.text());
    $(selector).change(function () {
        let selected = $(selector + " option:selected");
        callback(selected.val(), selected.text());
    });
}

avalon.ready(async function () {
    await selector(function (val, text) {
        controller.crypto_pair = val;
    }, '#crypto_pair');
    await selector(function (val, text) {
        controller.second.id = val;
        controller.second.name = text;
    }, '#second_exchange');
    setInterval(function () {
        controller.process.run();
    }, 10000);
});