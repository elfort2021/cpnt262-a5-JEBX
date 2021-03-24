const mongoose = require('mongoose')

const subSchema = mongoose.Schema({
  name: String,
  email: String,
})

module.exports = mongoose.model('Subscriber', subSchema)