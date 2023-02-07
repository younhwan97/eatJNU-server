// Module
const express = require("express")
const router = express.Router()
const ctrl = require("./placeList.crtl")

// type = 0
router.get('/0', ctrl.placeList.type0)

// type = 1
router.get('/1', ctrl.placeList.type1)

// type = 2
router.get('/2', ctrl.placeList.type2)

module.exports = router