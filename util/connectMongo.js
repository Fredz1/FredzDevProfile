import mongoose from 'mongoose'


export const connectMongo = () => {
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

//module.exports = connectMongo