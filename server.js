const express = require('express')
const https = require('https')
const fs = require('fs')
const nodemailer = require('nodemailer')
const cors = require('cors')
const dotenv = require("dotenv")
const morgan = require('morgan')
const multer = require('multer')
const cookieParser = require('cookie-parser');
const connectMongo = require('./util/connectMongo')
const { checkLoginStatus } = require('./routes/taskApp/middleware/jwtProtect')


const server = express()

server.set( 'x-powered-by', false )
server.set( 'trust proxy',  process.env.NODE_ENV === 'production' ? true : 'loopback' )
server.use( morgan('dev') )
server.use( cors( { origin: true, credentials: true, optionsSuccessStatus: 200 } ) )
server.use( cookieParser() )
server.use( express.json() )
server.use( express.urlencoded( { extended: true } ) )

dotenv.config()
//connect to DB
connectMongo()

const storage = multer.diskStorage({})

const upload = multer({ 
  storage: storage,
  limits:{
    fileSize: 1024 * 1024 * 1
  },
  }).none()


//nodemailer config
let transporter = nodemailer.createTransport({
  host: process.env.NODEMAILER_SMTP_HOST,
  port: process.env.NODEMAILER_PORT,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD
  }
})

server.use(
  '/apiv2/taskApp/user/',
  require('./routes/taskApp/routes/user')
)

server.use(
  '/apiv2/taskApp/tasks',
  checkLoginStatus,
  require('./routes/taskApp/routes/tasks')
)



// set server to listen for new requests
server.listen(
  process.env.SERVER_PORT,
  () => {
    console.log(`server listening on port: ${process.env.SERVER_PORT}`)
  }
)