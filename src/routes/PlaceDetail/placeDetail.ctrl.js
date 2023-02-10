const placeDetail = {

    get: (req, res) => {
        // 타입 정보를 얻어온다
        let placeId = req.params.id

        console.log(placeId)

        return res.send("123")

    }
}

module.exports = {
    placeDetail
}