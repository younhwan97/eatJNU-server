const placeDetail = {

    get: (req, res) => {
        // 타입 정보를 얻어온다
        let placeId = req.url
        placeId = placeId.substring(1)

        console.log(placeId)

    }
}

module.exports = {
    placeDetail
}