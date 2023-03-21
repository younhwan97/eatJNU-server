// Module
const express = require("express")
const router = express.Router()
const ctrl = require("./likePlace.ctrl")

router.get("/:userId", ctrl.likePlace.get)

router.get("/detail/:userId", ctrl.likePlace.detail)

router.put('/:userId/:placeId', ctrl.likePlace.put)

router.delete('/:userId/:placeId', ctrl.likePlace.delete)

module.exports = router