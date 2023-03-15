// Module
const express = require("express")
const router = express.Router()
const ctrl = require("./placeReview.ctrl")

router.post("/", ctrl.placeReview.post)

router.put("/report/:user/:review", ctrl.placeReviewReport.put)

module.exports = router