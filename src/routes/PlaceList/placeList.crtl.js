const placeList = {
    get: (req, res) => {
        // 타입 정보를 얻어온다
        let type = req.body.type || 0

        // 쿼리 생성
        let query = "SELECT * FROM places type = ?;"

        // 요청
        // connect..

        

    }
}

module.exports = {
    placeList
}