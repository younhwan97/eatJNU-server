// Module
const express = require("express")
const router = express.Router()
const ctrl = require("./policy.ctrl")

router.get('/', ctrl.pv.get)

module.exports = router