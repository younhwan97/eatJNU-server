// Module
const express = require("express")
const router = express.Router()
const ctrl = require("./placeList.crtl")

router.get('', ctrl.placeList.get)

module.exports = router

