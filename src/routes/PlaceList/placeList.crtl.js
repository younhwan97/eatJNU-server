const placeList = {

    type0: (req, res) => {
        // 쿼리 생성
        let query = "SELECT (id, name, review_count, like_count, tags, filter) FROM store WHERE area = ?;"

        req.app.get('dbConnection').query(query, 0, (err, result) => {
            console.log(err)
            console.log(result)
        })

        return res.json(
            {
                "count": 10,
                "items": [
                    {
                        "id": 1,
                        "name": "다원",
                        "image": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMjY0%2FMDAxNjYxNzUzODUxNjQ5.wfRsi5D0fW3qF0jMLlzHfjt3H57luONOVGaEik9gieYg.pKzR9pN_MCvWKJzW4SZP_HMZputo5IQ3yYrHL922LXsg.JPEG.ajfkgkwl153%2FIMG_1527.jpg&type=sc960_832",
                        "reviewCount": 100,
                        "likeCount": 100,
                        "tags": "#가성비 #맛집 #볶음밥 #삼겹살",
                        "filter": "맛집"
                    },
                    {
                        "id": 2,
                        "name": "드림하이빌",
                        "image": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMjY0%2FMDAxNjYxNzUzODUxNjQ5.wfRsi5D0fW3qF0jMLlzHfjt3H57luONOVGaEik9gieYg.pKzR9pN_MCvWKJzW4SZP_HMZputo5IQ3yYrHL922LXsg.JPEG.ajfkgkwl153%2FIMG_1527.jpg&type=sc960_832",
                        "reviewCount": 9999,
                        "likeCount": 9999,
                        "tags": "#나영츄 #바부 #크크",
                        "filter": "맛집"
                    },
                    {
                        "id": 3,
                        "name": "으뜸마루",
                        "image": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMjY0%2FMDAxNjYxNzUzODUxNjQ5.wfRsi5D0fW3qF0jMLlzHfjt3H57luONOVGaEik9gieYg.pKzR9pN_MCvWKJzW4SZP_HMZputo5IQ3yYrHL922LXsg.JPEG.ajfkgkwl153%2FIMG_1527.jpg&type=sc960_832",
                        "reviewCount": 100,
                        "likeCount": 100,
                        "tags": "#가성비 #맛집 #볶음밥 #삼겹살",
                        "filter": "술집"
                    },
                    {
                        "id": 4,
                        "name": "알촌",
                        "image": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMjY0%2FMDAxNjYxNzUzODUxNjQ5.wfRsi5D0fW3qF0jMLlzHfjt3H57luONOVGaEik9gieYg.pKzR9pN_MCvWKJzW4SZP_HMZputo5IQ3yYrHL922LXsg.JPEG.ajfkgkwl153%2FIMG_1527.jpg&type=sc960_832",
                        "reviewCount": 100,
                        "likeCount": 100,
                        "tags": "#가성비 #맛집 #볶음밥 #삼겹살",
                        "filter": "맛집"
                    },
                ]
            }
        )
    },

    type1: (req, res) => {
    },

    type2: (req, res) => {
    }
}

module.exports = {
    placeList
}