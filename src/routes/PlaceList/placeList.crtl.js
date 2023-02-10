const placeList = {

    get: (req, res) => {
        // 타입 정보를 얻어온다
        const areaType = req.params.type

        // 쿼리 생성
        const query = "SELECT store_id, name, review_count, like_count, tags, filter, url FROM store WHERE area = ?;"

        // 결과
        let ans = {
            "count": 0,
            "items": []
        }

        // DB 요청 및 리턴
        req.app.get('dbConnection').query(query, areaType, (err, result) => {
            if (err) throw err

            if (result.length !== 0) {
                for (let i = 0; i < result.length; i++) {
                    ans["items"].push({
                        "id": result[i].store_id,
                        "name": result[i].name,
                        "image": result[i].url,
                        "reviewCount": result[i].review_count,
                        "likeCount": result[i].like_count,
                        "tags": result[i].tags,
                        "filter": result[i].filter
                    })
                    ans["count"] += 1
                }
            }

            return res.json(ans)
        })
    }
}

module.exports = {
    placeList
}