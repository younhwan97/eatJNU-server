// Module
const express = require("express")
const router = express.Router()
const ctrl = require("./placeDetail.ctrl")

router.get('/:id', ctrl.placeDetail.get)

module.exports = router