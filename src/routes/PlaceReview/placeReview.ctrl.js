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

                req.app.get('dbConnection').query(query_store, (err, result) => {
                    if (err) throw err
                })
            }


            return res.json({
                "isSuccess": true
            })
        })
    },
}

const placeReviewReport = {
    get: (req, res) => {
        // 유저, 장소 아이디 정보를 얻어온다
        const userId = req.params.user

        // 쿼리 생성
        let query = "SELECT review_id FROM report WHERE user_id = ?;"
        query = mysql.format(query, userId)

        // 결과
        let ans = {
            "items": []
        }

        // DB 요청 및 리턴
        req.app.get('dbConnection').query(query, (err, result) => {
            if (err) throw err

            for (let i = 0; i < result.length; i++) {
                ans["items"].push({
                    "reviewId": result[i].review_id
                })
            }

            return res.json(ans)
        })
    },

    put: (req, res) => {
        // 유저, 장소 아이디 정보를 얻어온다
        const userId = req.params.user
        const reviewId = req.params.review

        // 쿼리 생성
        let query_report = "INSERT INTO report (user_id, review_id) VALUES (?, ?);"
        query_report = mysql.format(query_report, [userId, reviewId])

        let query_count = "SELECT * FROM report WHERE review_id = ?;"
        query_count = mysql.format(query_count, reviewId)

        // DB 요청 및 리턴
        req.app.get('dbConnection').query(query_report + query_count, (err, result) => {
            if (err) throw err

            // 신고가 3개 이상 누적된 리뷰일 때, 리뷰를 제거
            if (result.length >= 2 && result[1].length >= 3) {
                let query_review = "DELETE FROM review WHERE review_id = ?;"
                query_review = mysql.format(query_review, reviewId)

                req.app.get('dbConnection').query(query_review, (err, result) => {
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
    placeReview,
    placeReviewReport
}