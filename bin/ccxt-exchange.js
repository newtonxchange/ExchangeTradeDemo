let ccxt = require('ccxt');
let newtonxchange = require('../bin/newtonxchange');
const { Agent } = require('https')

exports.getExchange = function(exchangeId, config) {
    if (exchangeId === "newton") {
        return new newtonxchange(config);
    }
    const verbose = config.verbose || false;
    const debug = config.debug || false;
    let enableRateLimit = config.enableRateLimit || true;
    const agent = new Agent ({
        ecdhCurve: 'auto',
    });
    try {
        return new (ccxt)[exchangeId]({
            agent,
            verbose,
            enableRateLimit,
            debug,
            timeout: 20000,
        });
    } catch (e) {
        throw new Error("Unsupported exchange: " + exchangeId);
    }
};