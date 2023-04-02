// Module
const express = require("express")
const router = express.Router()
const ctrl = require("./placeReview.ctrl")

router.post("/", ctrl.placeReview.post)

router.delete("/:reviewId/:userId/:placeId", ctrl.placeReview.delete)

router.get("/report/:userId", ctrl.placeReviewReport.get)

router.put("/report/:userId/:reviewId", ctrl.placeReviewReport.put)

module.exports = router