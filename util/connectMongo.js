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
  }
  catch(error) {
    console.error(error)
  }
}

module.exports = connectMongo