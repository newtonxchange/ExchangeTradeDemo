let cctx = require('../bin/ccxt-exchange');

module.exports = async function (req, res, next) {
    let params = req.query;
    let symbol = params.crypto_pair;
    let first = {
        exchange: params.first.exchange,
        api_key: params.first.api_key,
        secret_key: params.first.secret_key
    };
    let second = {
        exchange: params.second.exchange,
        api_key: params.second.api_key,
        secret_key: params.second.secret_key
    };
    if (!symbol || !params.first || !params.second) {
        res.send({
            code: 2,
            msg: "Invalid parameters."
        });
        return;
    }
    let firstExchange = cctx.getExchange(first.exchange, {
        "apiKey": first.api_key,
        "secret": first.secret_key
    });
    let secondExchange = cctx.getExchange(second.exchange, {
        "apiKey": second.api_key,
        "secret": second.secret_key
    });
    let firstResult = await firstExchange.fetchOrderBook(symbol, 100);
    let secondResult = await secondExchange.fetchOrderBook(symbol, 100);
    await firstResult;
    await secondResult;
    let trades = getProfitableTrades(clone(firstResult.bids), clone(secondResult.asks), true)
        .concat(getProfitableTrades(clone(secondResult.bids), clone(firstResult.asks), false));
    firstResult.bids = firstResult.bids.slice(0, 5);
    secondResult.bids = secondResult.bids.slice(0, 5);
    firstResult.asks = firstResult.asks.slice(0, 5).reverse();
    secondResult.asks = secondResult.asks.slice(0, 5).reverse();
    res.send({
        code: 0,
        data: {
            first: firstResult,
            second: secondResult,
            trades: trades
        }
    });
};

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function getProfitableTrades(bids, asks, first) {
    let buyIndex = 0;
    let sellIndex = 0;
    let trades = [];
    while (true) {
        let highestBid = bids[buyIndex];
        let lowestSell = asks[sellIndex];
        let profit = highestBid[0] - lowestSell[0];
        let quantity = Math.min(highestBid[1], lowestSell[1]);
        if (profit <= 0) {
            break;
        }
        if ((highestBid[1] -= quantity) <= 0) {
            bids.pop();
            buyIndex++;
        }
        if ((lowestSell[1] -= quantity) <= 0) {
            asks.shift();
            sellIndex++;
        }
        trades.push({
            buyPrice: highestBid[0],
            sellPrice: lowestSell[0],
            quantity: quantity,
            profit: profit * quantity,
            first: first
        });
    }
    return trades;
}