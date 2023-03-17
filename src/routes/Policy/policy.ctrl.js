const pv = {
    get: (req, res) => {
        return res.sendFile(
            __dirname + '/policy.html'
        )
    }
}

module.exports = {
    pv
}