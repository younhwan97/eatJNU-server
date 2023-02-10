// Module
const express = require("express")
const router = express.Router()
const ctrl = require("./placeDetail.ctrl")

//
router.get('/', ctrl.placeDetail.get)

module.exports = router