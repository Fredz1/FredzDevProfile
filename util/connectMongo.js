const mongoose = require('mongoose')

const connectMongo = () => {
  try{
    mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    
    mongoose.connection.once(
      'open',
      () => {
        console.log(`Mongo Connected: ${process.env.MONGO_URI}`)
      }
    )
  }
  catch(error) {
    console.error(error)
  }
}

module.exports = connectMongo