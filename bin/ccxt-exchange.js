let ccxt = require('ccxt');
let newtonxchange = require('../bin/newtonxchange');

exports.getExchange = function(exchange, config) {
    config.enableRateLimit = true;
    switch (exchange) {
        case "newton":
            return new newtonxchange(config);
        case "huobi":
            return new ccxt.huobipro(config);
        case "binance":
            return new ccxt.binance(config);
        case "bittrex":
            return new ccxt.bittrex(config);
        case "cointiger":
            return new ccxt.cointiger(config);
    }
    throw new Error("Unsupported exchange: " + exchange);
};