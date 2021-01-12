const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FullBodySchema = new Schema({
  style: String,
  color: String,
  img: String,
  stock: Number,
  price: Number
})

const FullBody = mongoose.model('FullBody',  FullBodySchema)
module.exports = FullBody