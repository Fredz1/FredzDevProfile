import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import morgan from 'morgan'
import multer from 'multer'
import cookieParser from 'cookie-parser'
import {connectMongo} from './util/connectMongo.js'
import mongoose from 'mongoose'
import { checkLoginStatus } from './routes/taskApp/middleware/jwtProtect.js'
import chalk from 'chalk'


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
connectMongo()    


const storage = multer.diskStorage({})

const upload = multer({ 
  storage: storage,
  limits:{
    fileSize: 1024 * 1024 * 1
  },
  }).none()


server.use(
  `${process.env.NODE_ENV === 'development'? '/apiv2' : '' }/taskApp/user`,
  import('./routes/taskApp/routes/user')
)

server.use(
  `${process.env.NODE_ENV === 'development'? '/apiv2' : '' }/taskApp/tasks`,
  checkLoginStatus,
  import('./routes/taskApp/routes/tasks')
)



// set server to listen for new requests
server.listen(
  process.env.SERVER_PORT,
  () => {
    console.log(chalk.green(`
Server listening on port: ${process.env.SERVER_PORT}
Enviroment: ${process.env.NODE_ENV}
    `))
    mongoose.connection.once(
      'open',
      () => {
        console.log(`Mongo Connected`)
      }
    )
  }
)