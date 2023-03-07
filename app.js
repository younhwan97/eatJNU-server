// fs
const fs = require("fs")

// Express
const express = require('express')
const app = express()

// MySQL
const mysql = require('mysql')
const dbConf = JSON.parse(fs.readFileSync('./config/database.json', 'utf-8'))
const connection = mysql.createConnection({
    host: dbConf.host,
    user: dbConf.user,
    password: dbConf.password,
    database: dbConf.database,
    multipleStatements: true
})
connection.connect()

// Setting
app.set('dbConnection', connection)

// Routing
const placeListRouter = require("./src/routes/PlaceList")
const placeDetailRouter = require("./src/routes/PlaceDetail")
const placeReview = require("./src/routes/PlaceReview")
const likePlaceRouter = require("./src/routes/LikePlace")

app.use("/API/PlaceList", placeListRouter)
app.use("/API/PlaceDetail", placeDetailRouter)
app.use("/API/LikePlace", likePlaceRouter)

module.exports = app