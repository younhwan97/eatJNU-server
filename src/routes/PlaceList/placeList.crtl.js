const placeList = {

    type0: (req, res) => {
        // 결과
        let ans = {
            "count": 0,
            "items": []
        }

        // 쿼리 생성
        let query = "SELECT store_id, name, review_count, like_count, tags, filter, url FROM store WHERE area = ?;"

        req.app.get('dbConnection').query(query, 0, (err, result) => {
            if (err) throw err

            if (result.length !== 0) {
                for (let i = 0; i < result.length; i++) {
                    ans["items"].add({
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
    },

    type1: (req, res) => {
        // 결과
        let ans = {
            "count": 0,
            "items": []
        }

        // 쿼리 생성
        let query = "SELECT store_id, name, review_count, like_count, tags, filter, url FROM store WHERE area = ?;"

        req.app.get('dbConnection').query(query, 1, (err, result) => {
            if (err) throw err

            if (result.length !== 0) {
                for (let i = 0; i < result.length; i++) {
                    ans["items"].add({
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
    },

    type2: (req, res) => {
    }
}

module.exports = {
    placeList
}