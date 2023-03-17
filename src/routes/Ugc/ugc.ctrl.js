const mysql = require('mysql')

const ugc = {
    get: (req, res) => {
        // 유저 아이디를 정보를 얻어온다
        const userId = req.params.userId

        // 비정상적인 값이 왔을 때
        if (!userId) {
            return res.json({
                "isSuccess": false
            })
        }

        // 쿼리 생성
        let query = "SELECT agree FROM ugc WHERE user_id = ?;"
        query = mysql.format(query, [userId])

        // DB 요청
        req.app.get('dbConnection').query(query, (err, result) => {
            if (err) throw err

            if (result.length === 0) {
                query = "INSERT IGNORE INTO ugc(user_id, agree) VALUES (?, ?);"
                query = mysql.format(query, [userId, false])

                req.app.get('dbConnection').query(query, (err) => {
                    if (err) throw err
                })

                res.json({
                    "isSuccess": false
                })
            } else {
                let isSuccess = false
                if (result[0]['agree']) isSuccess = true

                return res.json({
                    "isSuccess": isSuccess
                })
            }
        })
    },

    put: (req, res) => {
        // 유저 아이디를 정보를 얻어온다
        const userId = req.params.userId

        // 비정상적인 값이 왔을 때
        if (!userId) {
            return res.json({
                "isSuccess": false
            })
        }

        // 쿼리 생성
        let query = "UPDATE ugc SET agree = ? WHERE user_id = ?;"
        query = mysql.format(query, [true, userId])

        // DB 요청
        req.app.get('dbConnection').query(query, (err, result) => {
            if (err) throw err

            return res.json({
                "isSuccess": true
            })
        })
    }
}

module.exports = {
    ugc
}