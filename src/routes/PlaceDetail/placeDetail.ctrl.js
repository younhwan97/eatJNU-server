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
                ans["id"] = result.store_id || -1
                ans["name"] = result.name || ""
                ans["likeCount"] = result.like_count || 0
                ans["reviewCount"] = result.review_count || 0
                ans["filter"] = result.filter || ""
                ans["tags"] = result.tags || ""
                ans["image"] = result.url || ""
                ans["location"] = result.location || ""
                ans["number"] = result.number || ""
                ans["openingInfo"] = result.opening_info || ""
            }

            return res.json(ans)
        })
    }
}

module.exports = {
    placeDetail
}