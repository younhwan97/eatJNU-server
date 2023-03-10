// fs
const fs = require("fs")

// Express
const express = require('express')
const app = express()
app.use(express.json());

// MySQL
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
connection.connect()

// Setting
app.set('dbConnection', connection)

// Routing
const privateRouter = require("./src/routes/private")
const placeListRouter = require("./src/routes/PlaceList")
const placeDetailRouter = require("./src/routes/PlaceDetail")
const placeReviewRouter = require("./src/routes/PlaceReview")
const likePlaceRouter = require("./src/routes/LikePlace")

app.use("/private", privateRouter)
app.use("/API/PlaceList", placeListRouter)
app.use("/API/PlaceDetail", placeDetailRouter)
app.use("/API/PlaceReview", placeReviewRouter)
app.use("/API/LikePlace", likePlaceRouter)

module.exports = app