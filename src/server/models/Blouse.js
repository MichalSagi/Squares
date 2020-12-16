const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlouseSchema = new Schema({
  style: String,
  color: String,
  img: String,
  stock: Number,
})

const Blouse = mongoose.model('Blouse',  BlouseSchema)
module.exports =  Blouse