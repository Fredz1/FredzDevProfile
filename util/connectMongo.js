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

  }
  catch(error) {
    console.error(error)
  }
}

module.exports = connectMongo