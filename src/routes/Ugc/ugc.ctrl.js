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
        let query = "SELECT agree FROM ugc WHERE userId = ?;"
        query = mysql.format(query, [userId])

        // DB 요청
        req.app.get('dbConnection').query(query, (err, result) => {
            if (err) throw err

            console.log(result)
        })
    },

    put: (req, res) => {

    }
}

module.exports = {
    ugc
}