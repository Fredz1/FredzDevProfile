const mongoose = require('mongoose')

const connectMongo = () => {
  try{
    mongoose.connect(
      'mongodb://127.0.0.1:27017/',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )

    mongoose.connection.on('connecting', () => {
      console.log('db: Connecting')
    })

    mongoose.connection.on('connected', () => {
      console.log('db: Connected')
    })

    mongoose.connection.on('disconnected', () => {
      console.log('db: Disconnected')
    })

    mongoose.connection.on('reconnected', () => {
      console.log('db: Reconnected')
    })

    mongoose.connection.on('error', (error) => {
      console.error('db: Connection error:', error)
    })
    
    // Node.js event listener for process exit
    process.on('SIGINT', () => {
      mongoose.connection.close(() => {
        console.log('db: Connection closed due to process termination')
        process.exit(0)
      })
    })
  }
  catch(error) {
    console.error(error)
  }
}

module.exports = connectMongo