// Module
const express = require("express")
const router = express.Router()
const ctrl = require("./ugc.ctrl")

router.get('/:userId', ctrl.ugc.get)

router.put('/:userId', ctrl.ugc.put)

module.exports = router