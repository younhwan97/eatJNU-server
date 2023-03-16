// Module
const express = require("express")
const router = express.Router()
const ctrl = require("./placeDetail.ctrl")

router.get('/:placeId', ctrl.placeDetail.get)

module.exports = router