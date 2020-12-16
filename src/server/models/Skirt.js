const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SkirtSchema = new Schema({
  style: String,
  color: String,
  img: String,
  stock: Number,
})

const Skirt = mongoose.model('Skirt', SkirtSchema)
module.exports = Skirt