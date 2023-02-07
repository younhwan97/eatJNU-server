const placeList = {

    type0: (req, res) => {
        // 타입 정보를 얻어온다
        let type = req.body.type || 0

        // 쿼리 생성
        let query = "SELECT * FROM places type = ?;"

        // 요청
        // connect..

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
                        "tags": "#가성비 #맛집 #볶음밥 #삼겹살"
                    },
                    {
                        "id": 1,
                        "name": "다원",
                        "image": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMjY0%2FMDAxNjYxNzUzODUxNjQ5.wfRsi5D0fW3qF0jMLlzHfjt3H57luONOVGaEik9gieYg.pKzR9pN_MCvWKJzW4SZP_HMZputo5IQ3yYrHL922LXsg.JPEG.ajfkgkwl153%2FIMG_1527.jpg&type=sc960_832",
                        "reviewCount": 100,
                        "likeCount": 100,
                        "tags": "#가성비 #맛집 #볶음밥 #삼겹살"
                    },
                    {
                        "id": 1,
                        "name": "다원",
                        "image": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMjY0%2FMDAxNjYxNzUzODUxNjQ5.wfRsi5D0fW3qF0jMLlzHfjt3H57luONOVGaEik9gieYg.pKzR9pN_MCvWKJzW4SZP_HMZputo5IQ3yYrHL922LXsg.JPEG.ajfkgkwl153%2FIMG_1527.jpg&type=sc960_832",
                        "reviewCount": 100,
                        "likeCount": 100,
                        "tags": "#가성비 #맛집 #볶음밥 #삼겹살"
                    },
                    {
                        "id": 1,
                        "name": "다원",
                        "image": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMjY0%2FMDAxNjYxNzUzODUxNjQ5.wfRsi5D0fW3qF0jMLlzHfjt3H57luONOVGaEik9gieYg.pKzR9pN_MCvWKJzW4SZP_HMZputo5IQ3yYrHL922LXsg.JPEG.ajfkgkwl153%2FIMG_1527.jpg&type=sc960_832",
                        "reviewCount": 100,
                        "likeCount": 100,
                        "tags": "#가성비 #맛집 #볶음밥 #삼겹살"
                    },
                    {
                        "id": 1,
                        "name": "다원",
                        "image": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMjY0%2FMDAxNjYxNzUzODUxNjQ5.wfRsi5D0fW3qF0jMLlzHfjt3H57luONOVGaEik9gieYg.pKzR9pN_MCvWKJzW4SZP_HMZputo5IQ3yYrHL922LXsg.JPEG.ajfkgkwl153%2FIMG_1527.jpg&type=sc960_832",
                        "reviewCount": 100,
                        "likeCount": 100,
                        "tags": "#가성비 #맛집 #볶음밥 #삼겹살"
                    },
                    {
                        "id": 1,
                        "name": "다원",
                        "image": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMjY0%2FMDAxNjYxNzUzODUxNjQ5.wfRsi5D0fW3qF0jMLlzHfjt3H57luONOVGaEik9gieYg.pKzR9pN_MCvWKJzW4SZP_HMZputo5IQ3yYrHL922LXsg.JPEG.ajfkgkwl153%2FIMG_1527.jpg&type=sc960_832",
                        "reviewCount": 100,
                        "likeCount": 100,
                        "tags": "#가성비 #맛집 #볶음밥 #삼겹살"
                    },
                    {
                        "id": 1,
                        "name": "다원",
                        "image": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMjY0%2FMDAxNjYxNzUzODUxNjQ5.wfRsi5D0fW3qF0jMLlzHfjt3H57luONOVGaEik9gieYg.pKzR9pN_MCvWKJzW4SZP_HMZputo5IQ3yYrHL922LXsg.JPEG.ajfkgkwl153%2FIMG_1527.jpg&type=sc960_832",
                        "reviewCount": 100,
                        "likeCount": 100,
                        "tags": "#가성비 #맛집 #볶음밥 #삼겹살"
                    },
                    {
                        "id": 1,
                        "name": "다원",
                        "image": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMjY0%2FMDAxNjYxNzUzODUxNjQ5.wfRsi5D0fW3qF0jMLlzHfjt3H57luONOVGaEik9gieYg.pKzR9pN_MCvWKJzW4SZP_HMZputo5IQ3yYrHL922LXsg.JPEG.ajfkgkwl153%2FIMG_1527.jpg&type=sc960_832",
                        "reviewCount": 100,
                        "likeCount": 100,
                        "tags": "#가성비 #맛집 #볶음밥 #삼겹살"
                    },
                    {
                        "id": 1,
                        "name": "다원",
                        "image": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMjY0%2FMDAxNjYxNzUzODUxNjQ5.wfRsi5D0fW3qF0jMLlzHfjt3H57luONOVGaEik9gieYg.pKzR9pN_MCvWKJzW4SZP_HMZputo5IQ3yYrHL922LXsg.JPEG.ajfkgkwl153%2FIMG_1527.jpg&type=sc960_832",
                        "reviewCount": 100,
                        "likeCount": 100,
                        "tags": "#가성비 #맛집 #볶음밥 #삼겹살"
                    },
                    {
                        "id": 1,
                        "name": "다원",
                        "image": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMjY0%2FMDAxNjYxNzUzODUxNjQ5.wfRsi5D0fW3qF0jMLlzHfjt3H57luONOVGaEik9gieYg.pKzR9pN_MCvWKJzW4SZP_HMZputo5IQ3yYrHL922LXsg.JPEG.ajfkgkwl153%2FIMG_1527.jpg&type=sc960_832",
                        "reviewCount": 100,
                        "likeCount": 100,
                        "tags": "#가성비 #맛집 #볶음밥 #삼겹살"
                    },
                ]
            }
        )
    },

    type1: (req, res) => {},

    type2: (req, res) => {}
}

module.exports = {
    placeList
}