const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const dotenv = require("dotenv")
const morgan = require('morgan')
const multer = require('multer')

const server = express()
server.set( 'x-powered-by', false )
server.set( 'trust proxy',  'loopback' )
server.use( morgan('dev') )
server.use( cors( { origin: true, credentials: true, optionsSuccessStatus: 200 } ) )
server.use( express.json() )
server.use( express.urlencoded( { extended: true } ) )
dotenv.config()

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

server.post(
  '/api/contact',
  upload,
  (req, res) => {
    console.log(req.body)
  }
)



// set server to listen for new requests
server.listen(
  process.env.SERVER_PORT,
  () => {
    console.log(`server listening on port: ${process.env.SERVER_PORT}`)
  }
)