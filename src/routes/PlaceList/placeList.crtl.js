const mysql = require('mysql')

const placeList = {
    get: (req, res) => {
        // 타입 정보를 얻어온다
        const areaType = Number(req.params.type) ?? 1

        // 쿼리 생성
        let query = "SELECT store_id, name, review_count, like_count, tags, filter, url FROM store WHERE area = ?;"
        query = mysql.format(query, [areaType])

        // 결과
        let ans = {
            "items": []
        }

        // DB 요청 및 리턴
        req.app.get('dbConnection').query(query, (err, result) => {
            if (err) throw err

            if (result.length !== 0) {
                for (let i = 0; i < result.length; i++) {
                    ans["items"].push({
                        "id": result[i]["store_id"] ?? -1,
                        "name": result[i]["name"] ?? "",
                        "image": result[i]["url"] ?? "",
                        "reviewCount": result[i]["review_count"] ?? 0,
                        "likeCount": result[i]["like_count"] ?? 0,
                        "tags": result[i]["tags"] ?? "",
                        "filter": result[i]["filter"] ?? ""
                    })
                }
            }

            return res.json(ans)
        })
    }
}

module.exports = {
    placeList
}