const mongoose = require('mongoose')

const user = new mongoose.Schema(
  {
    userNum: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    tasks: [
      
    ]
  },
  {
    collection: 'tasks'
  }
)

module.exports = mongoose.models.user || mongoose.model('user', user)