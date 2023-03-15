// Module
const express = require("express")
const router = express.Router()
const ctrl = require("./placeReview.ctrl")

router.post("/", ctrl.placeReview.post)

router.get("/report/:user", ctrl.placeReviewReport.get)

router.put("/report/:user/:review", ctrl.placeReviewReport.put)

module.exports = router