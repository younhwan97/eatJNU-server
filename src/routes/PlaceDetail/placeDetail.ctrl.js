const mysql = require('mysql')

const placeDetail = {

    get: (req, res) => {
        // 장소의 아이디 정보를 얻어온다
        const placeId = req.params.id

        // 쿼리 생성
        let query_store = "SELECT * FROM store WHERE store_id = ?;"
        query_store = mysql.format(query_store, placeId)

        let query_img = "SELECT url, is_menu FROM image WHERE store_id = ?;"
        query_img = mysql.format(query_img, placeId)

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
            "images": []
        }

        // DB 요청 및 리턴
        req.app.get('dbConnection').query(query_store + query_img, (err, result) => {
            if (err) throw err

            if (result.length !== 0 && result[0] != null && result[1] != null) {
                const info = result[0][0]

                ans["id"] = info.store_id || -1
                ans["name"] = info.name || ""
                ans["likeCount"] = info.like_count || 0
                ans["reviewCount"] = info.review_count || 0
                ans["filter"] = info.filter || ""
                ans["tags"] = info.tags || ""
                ans["image"] = info.url || ""
                ans["location"] = info.location || ""
                ans["number"] = info.number || ""
                ans["openingInfo"] = info.opening_info || ""

                for (let i = 0; i < result[1].length; i++) {
                    ans["images"].push({
                            "url": result[1][i]["url"],
                            "isMenu": result[1][i]["is_menu"]
                        }
                    )
                }
            }

            return res.json(ans)
        })
    }
}

module.exports = {
    placeDetail
}