const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
  type: String,
  style: String,
  color: String,
  src: String,
  stock: Number,
  price: Number
})

const Item = mongoose.model('Item',  ItemSchema)
module.exports =  Item