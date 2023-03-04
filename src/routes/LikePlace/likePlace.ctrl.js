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
        const query = "INSERT IGNORE INTO like_store(user_id, store_id) VALUES (?, ?);"

        // DB 요청
        req.app.get('dbConnection').query(query, [userId, placeId], (err, result) => {
            if (err) throw err

            return res.json({
                "placeId": placeId
            })
        })
    },

    delete: (req, res) => {
        // 유저, 장소 아이디 정보를 얻어온다
        const userId = req.params.user
        const placeId = req.params.place

        // 쿼리 생성
        const query = "DELETE FROM like_store WHERE user_id = ? AND store_id = ?;"

        // DB 요청
        req.app.get('dbConnection').query(query, [userId, placeId], (err, result) => {
            if (err) throw err

            return res.json({
                "placeId": placeId
            })
        })
    }
}

module.exports = {
    likePlace
}