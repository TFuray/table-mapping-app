const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const port = process.env.PORT || 5001
const mainRoutes = require('./routes/main')

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/', mainRoutes)


app.listen(port, () => console.log(`server started on port ${port}`))