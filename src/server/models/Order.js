const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  user: ({ type: Schema.Types.ObjectId, ref: "User"}), 
  status: { type: String, default: "accepted" }
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
