const express = require('express')
const cors = require('cors')
const dotenv = require("dotenv")
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const connectMongo = require('./util/connectMongo.js')
const mongoose = require('mongoose')
const { checkLoginStatus } = require('./middleware/jwtProtect.js')
var colors = require('colors')
colors.enable()

const server = express()

server.set( 'x-powered-by', false )
server.set( 'trust proxy',  'loopback' )
server.use( morgan('dev') )
server.use( cors( { origin: true, credentials: true, optionsSuccessStatus: 200 } ) )
server.use( cookieParser() )
server.use( express.json() )
server.use( express.urlencoded( { extended: true } ) )

dotenv.config()
//connect to DB
/* connectMongo() */

server.use(
  '/apiv2/user',
  require('./routes/user.js')
)

server.use(
  '/apiv2/taskApp/tasks',
  checkLoginStatus,
  require('./routes/tasks.js')
)

// set server to listen for new requests
server.listen(
  process.env.SERVER_PORT,
  () => {
    mongoose.connection.once(
      'open',
      () => {
        console.log(`MongoDB Connected`.bgGreen.white)
      }
    )
    console.log(`Server listening on port: ${process.env.SERVER_PORT}`.bgGreen.white)
    console.log(`Environment: ${process.env.NODE_ENV}`.bgGreen.white)
  }
)