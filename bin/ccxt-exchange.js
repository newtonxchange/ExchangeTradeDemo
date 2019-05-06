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
        case "bitmex":
            return new ccxt.bitmex(config);
        case "negociecoins":
            return new ccxt.negociecoins(config);
        case "fcoin":
            return new ccxt.fcoin(config);
        case "okex":
            return new ccxt.okex(config);
        case "coinegg":
            return new ccxt.coinegg(config);
        case "cointiger":
            return new ccxt.cointiger(config);
    }
    throw new Error("Unsupported exchange: " + exchange);
};