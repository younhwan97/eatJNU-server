// Module
const express = require("express")
const router = express.Router()
const ctrl = require("./placeReview.ctrl")

router.post("/", ctrl.placeReview.post)

module.exports = router