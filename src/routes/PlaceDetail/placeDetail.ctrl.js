const placeDetail = {

    get: (req, res) => {
        // 장소의 아이디 정보를 얻어온다
        const placeId = req.params.id

        // 쿼리 생성
        const query = "SELECT * FROM store WHERE store_id = ?;"

        // 결과
        let ans = {
            "id": -1,
            "name": "",
            "likeCount": 0,
            "reviewCount": 0,
            "filter": "",
            "tags": "",
            "image": "",
            "location": "",
            "number": "",
            "openingInfo": ""
        }

        // DB 요청 및 리턴
        req.app.get('dbConnection').query(query, placeId, (err, result) => {
            if (err) throw err

            if (result.length !== 0) {
                ans["id"] = result[0].store_id || -1
                ans["name"] = result[0].name || ""
                ans["likeCount"] = result[0].like_count || 0
                ans["reviewCount"] = result[0].review_count || 0
                ans["filter"] = result[0].filter || ""
                ans["tags"] = result[0].tags || ""
                ans["image"] = result[0].url || ""
                ans["location"] = result[0].location || ""
                ans["number"] = result[0].number || ""
                ans["openingInfo"] = result[0].opening_info || ""
            }

            return res.json(ans)
        })
    }
}

module.exports = {
    placeDetail
}