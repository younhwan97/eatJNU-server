const mysql = require('mysql')

const placeReview = {
    post: (req, res) => {
        // 유저, 장소, 코멘트 데이터를 얻어온다
        const userId = req.body.userId
        const placeId = req.body.placeId
        const comment = req.body.comment

        // 현재 시간을 생성한다
        let today = new Date();
        today.setHours(today.getHours() + 9);
        const now = today.toISOString().replace('T', ' ').substring(0, 19);

        // 쿼리 생성
        let query_review = "INSERT INTO review (store_id, comment, writing_time, user_id) VALUES (?, ?, ?, ?);"
        query_review = mysql.format(query_review, [placeId, comment, now, userId])

        let query_review2 = "SELECT * FROM review WHERE store_id = ?"
        query_review2 = mysql.format(query_review2, placeId)

        // DB 요청 및 리턴
        req.app.get('dbConnection').query(query_review + query_review2, (err, result) => {
            if (err) throw err

            if (result.length >= 2 && result[1] != null) { // 리뷰 개수 업데이트
                let count = result[1].length || 0

                let query_store = "UPDATE store SET review_count = ? WHERE store_id = ?;"
                query_store = mysql.format(query_store, [count, placeId])

                req.app.get('dbConnection').query(query_store, (err, result) => {if (err) throw err})
            }


            return res.json({
                "isSuccess": true
            })
        })
    }
}

module.exports = {
    placeReview
}