const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const port = process.env.PORT || 5001

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Add Routes
app.use('')


app.listen(port, () => console.log(`server started on port ${port}`))