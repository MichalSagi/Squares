const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HairSchema = new Schema({
  style: String,
  color: String,
  img: String,
  stock: Number,
})

const Hair = mongoose.model('Hair', HairSchema)
module.exports = Hair