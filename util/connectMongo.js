const mongoose = require('mongoose')


const connectMongo = () => {
  try{
    mongoose.connect(
      process.env.MONGO_URI,
      {
        
      }
    )
  }
  catch(error) {
    console.error(error)
  }
}

module.exports = connectMongo