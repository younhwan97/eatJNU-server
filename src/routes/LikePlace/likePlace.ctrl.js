const mysql = require('mysql')
const {json} = require("express");

const likePlace = {

    get: (req, res) => {
        // 유저 아이디를 정보를 얻어온다
        const userId = req.params.user

        console.log(userId)
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
                "placeId" : placeId
            })
        })
    }
}

module.exports = {
    likePlace
}