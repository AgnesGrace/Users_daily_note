const express = require('express')
const path = require('path')
const router = require('./router')
const connectDb = require('./config/db')

require('dotenv').config()
connectDb()
const app = express()
app.use(express.json())

//static folder
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(router)
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`🏄 Server is listening on ${PORT}`)
})
