// Module
const express = require("express")
const router = express.Router()
const ctrl = require("./placeList.crtl")

// type = 0
router.get('/0', ctrl.placeList.get)

// type = 1
router.get('/1', ctrl.placeList.get)

// type = 2
router.get('/2', ctrl.placeList.get)

module.exports = router