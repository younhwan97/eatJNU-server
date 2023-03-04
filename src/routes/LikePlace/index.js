// Module
const express = require("express")
const router = express.Router()
const ctrl = require("./likePlace.ctrl")

router.get("/:user", ctrl.likePlace.get)

router.put('/:user/:place', ctrl.likePlace.put)

router.delete('/:user/:place', ctrl.likePlace.delete)

module.exports = router