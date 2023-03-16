// fs
const fs = require("fs")

// Express
const express = require('express')
const app = express()
app.use(express.json())

// MySQL & DBConnection
const mysql = require('mysql')
const dbConf = JSON.parse(fs.readFileSync('./config/database.json', 'utf-8'))
const connection = mysql.createConnection({
    host: dbConf.host,
    user: dbConf.user,
    password: dbConf.password,
    database: dbConf.database,
    multipleStatements: true,
    dateStrings: "date"
})
app.set('dbConnection', connection)
connection.connect()

// Routing
const policyRouter = require("./src/routes/policy")
const placeListRouter = require("./src/routes/PlaceList")
const placeDetailRouter = require("./src/routes/PlaceDetail")
const placeReviewRouter = require("./src/routes/PlaceReview")
const likePlaceRouter = require("./src/routes/LikePlace")

app.use("/policy", policyRouter)
app.use("/API/PlaceList", placeListRouter)
app.use("/API/PlaceDetail", placeDetailRouter)
app.use("/API/PlaceReview", placeReviewRouter)
app.use("/API/LikePlace", likePlaceRouter)

module.exports = app