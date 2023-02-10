const mysql = require('mysql')

const placeDetail = {

    get: (req, res) => {
        // 장소의 아이디 정보를 얻어온다
        const placeId = req.params.id

        // 쿼리 생성
        let query_store = "SELECT * FROM store WHERE store_id = ?;"
        query_store = mysql.format(query_store, placeId)

        let query_img = "SELECT url FROM image WHERE store_id = ?;"
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

            if (result.length !== 0) {
                ans["id"] = result[0][0].store_id || -1
                ans["name"] = result[0][0].name || ""
                ans["likeCount"] = result[0][0].like_count || 0
                ans["reviewCount"] = result[0][0].review_count || 0
                ans["filter"] = result[0][0].filter || ""
                ans["tags"] = result[0][0].tags || ""
                ans["image"] = result[0][0].url || ""
                ans["location"] = result[0][0].location || ""
                ans["number"] = result[0][0].number || ""
                ans["openingInfo"] = result[0][0].opening_info || ""

                for (let i = 0; i < result[1].length; i++)
                    ans["images"].push(result[1][i]["url"])
            }

            console.log(ans)
            return res.json(ans)
        })
    }
}

module.exports = {
    placeDetail
}