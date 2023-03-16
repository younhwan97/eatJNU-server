const mysql = require('mysql')

const likePlace = {

    get: (req, res) => {
        // 유저 아이디를 정보를 얻어온다
        const userId = req.params.user

        // 쿼리 생성
        const query = "SELECT * FROM like_store WHERE user_id = ?;"

        // 결과
        let ans = {
            "items": []
        }

        // DB 요청
        req.app.get('dbConnection').query(query, userId, (err, result) => {
            if (err) throw err

            if (result.length !== 0) {
                for (let i = 0; i < result.length; i++) {
                    ans["items"].push({
                        "placeId": result[i].store_id
                    })
                }
            }

            return res.json(ans)
        })
    },

    put: (req, res) => {
        // 유저, 장소 아이디 정보를 얻어온다
        const userId = req.params.user
        const placeId = req.params.place

        // 쿼리 생성
        let query_like = "INSERT IGNORE INTO like_store(user_id, store_id) VALUES (?, ?);"
        query_like = mysql.format(query_like, [userId, placeId])

        let query_like2 = "SELECT * FROM like_store WHERE store_id = ?;"
        query_like2 = mysql.format(query_like2, placeId)

        // DB 요청
        req.app.get('dbConnection').query(query_like + query_like2, (err, result) => {
            if (err) throw err

            if (result.length >= 2 && result[1] != null) {
                let count = result[1].length || 0

                let query_store = "UPDATE store SET like_count = ? WHERE store_id = ?;"
                query_store = mysql.format(query_store, [count, placeId])

                req.app.get('dbConnection').query(query_store, (err, result) => {
                    if (err) throw err
                })
            }

            return res.json({
                "isSuccess": true
            })
        })
    },

    delete: (req, res) => {
        // 유저, 장소 아이디 정보를 얻어온다
        const userId = req.params.user
        const placeId = req.params.place

        // 쿼리 생성
        let query_like = "DELETE FROM like_store WHERE user_id = ? AND store_id = ?;"
        query_like = mysql.format(query_like, [userId, placeId])

        let query_like2 = "SELECT * FROM like_store WHERE store_id = ?;"
        query_like2 = mysql.format(query_like2, placeId)

        // DB 요청
        req.app.get('dbConnection').query(query_like + query_like2, (err, result) => {
            if (err) throw err

            if (result.length >= 2 && result[1] != null) {
                let count = result[1].length || 0

                let query_store = "UPDATE store SET like_count = ? WHERE store_id = ?;"
                query_store = mysql.format(query_store, [count, placeId])

                req.app.get('dbConnection').query(query_store, (err, result) => {
                    if (err) throw err
                })
            }

            return res.json({
                "isSuccess": true
            })
        })
    }
}

module.exports = {
    likePlace
}