const placeReview = {
    post: (req, res) => {
        // 유저, 장소, 코멘트 데이터를 얻어온다
        const userId = req.body.userId
        const storeId = req.body.placeId
        const comment = req.body.comment

        // 현재 시간을 생성한다
        let today = new Date();
        today.setHours(today.getHours() + 9);
        const now = today.toISOString().replace('T', ' ').substring(0, 19);

        // 쿼리 생성
        const query = "INSERT INTO review (store_id, comment, writing_time, user_id) VALUES (?, ?, ?, ?);"

        // DB 요청 및 리턴
        req.app.get('dbConnection').query(query, [storeId, comment, now, userId], (err, result) => {
            if (err) throw err

            return res.json({
                "isSuccess": true
            })
        })
    }
}

module.exports = {
    placeReview
}