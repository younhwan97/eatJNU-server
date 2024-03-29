const mysql = require('mysql')

const placeDetail = {
    get: (req, res) => {
        // 장소의 아이디 정보를 얻어온다
        const placeId = Number(req.params.placeId)

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
            "openingInfo": "",
            "lat": 0,
            "lon": 0,
            "images": [],
            "reviews": []
        }

        // 비정상적인 값이 왔을 때
        if (!placeId) {
            return res.json(ans)
        }

        // 쿼리 생성
        let query_store = "SELECT * FROM store WHERE store_id = ?;"
        query_store = mysql.format(query_store, [placeId])

        let query_img = "SELECT url FROM image WHERE store_id = ?;"
        query_img = mysql.format(query_img, [placeId])

        let query_review = "SELECT review_id, comment, writing_time, user_id, like_count, store_id FROM review WHERE store_id = ? ORDER BY writing_time DESC;"
        query_review = mysql.format(query_review, [placeId])

        // DB 요청 및 리턴
        req.app.get('dbConnection').query(query_store + query_img + query_review, (err, result) => {
            if (err) throw err

            // 결과 생성
            if (result.length !== 0 && result[0] != null && result[1] != null) {
                const info = result[0][0]

                ans["id"] = info["store_id"] ?? -1
                ans["name"] = info["name"] ?? ""
                ans["likeCount"] = info["like_count"] ?? 0
                ans["reviewCount"] = info["review_count"] ?? 0
                ans["filter"] = info["filter"] ?? ""
                ans["tags"] = info["tags"] ?? ""
                ans["image"] = info["url"] ?? ""
                ans["location"] = info["location"] ?? ""
                ans["number"] = info["number"] ?? ""
                ans["openingInfo"] = info["opening_info"] ?? ""
                ans["lat"] = info["lat"] ?? 0
                ans["lon"] = info["lon"] ?? 0

                for (let i = 0; i < result[1].length; i++) {
                    ans["images"].push({
                        "url": result[1][i]["url"] ?? ""
                    })
                }

                for (let i = 0; i < result[2].length; i++) {
                    ans["reviews"].push({
                        "reviewId": result[2][i]["review_id"] ?? -1,
                        "comment": result[2][i]["comment"] ?? "",
                        "writingTime": result[2][i]["writing_time"] ?? "",
                        "userId": result[2][i]["user_id"] ?? "",
                        "likeCount": result[2][i]["like_count"] ?? 0,
                        "placeId": result[2][i]["store_id"] ?? -1
                    })
                }
            }

            return res.json(ans)
        })
    }
}

module.exports = {
    placeDetail
}