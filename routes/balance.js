let cctx = require('../bin/ccxt-exchange');

module.exports = async function (req, res, next) {
    let params = req.query;
    let exchange = params.exchange;
    let api_key = params.api_key;
    let secret_key = params.secret_key;
    if (!exchange) {
        res.send({
            code: 2,
            msg: "No exchange specified."
        });
        return;
    }
    if (!api_key || !secret_key) {
        res.send({
            code: 3,
            msg: "API and Secret key need to be filled in."
        });
        return;
    }
    let exc = cctx.getExchange(exchange, {
        "apiKey": api_key,
        "secret": secret_key
    });
    res.send({
        code: 0,
        data: (await exc.fetchBalance()).info
    });
};
