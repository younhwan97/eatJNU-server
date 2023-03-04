const mysql = require('mysql')

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

        console.log(userId, placeId)
    }
}

module.exports = {
    likePlace
}