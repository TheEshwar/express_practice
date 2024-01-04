const logger = (req, res, next) => {
    console.clear()
    console.log('middleware :- ', req.params);
    next();
    return
    if (req.params.token === 'abc')
        next()
    else {
        res.json({ status: 400, msg: 'INVALID REQUIST - Token is missing.' })
    }
}

module.exports = logger;