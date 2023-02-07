// Express
const express = require('express')
const app = express()

// Routing
const placeListRouter = require("./src/routes/PlaceList")

app.use("/API/PlaceList", placeListRouter)

module.exports = app