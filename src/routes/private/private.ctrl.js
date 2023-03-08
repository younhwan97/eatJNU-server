const pv  = {
    get: (req, res) => {
        return res.sendFile(
            __dirname + '/private.html'
        )
    }
}

module.exports = {
    pv
}