const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: String,
  password: String,
  birthday: Date,
  userEmail: String,
  address: {
    country: String,
    city: String,
    street: String,
    apartment: Number,
    zipCode: Number,
  },
  admin :{ type: Boolean, default: 0 },
  favoriteSkirts: [{ type: Schema.Types.ObjectId, ref: "Skirt" }],
  favoriteHairs: [{ type: Schema.Types.ObjectId, ref: "Hair" }],
  favoriteBlouses: [{ type: Schema.Types.ObjectId, ref: "Blouse" }],
  favoriteFullDoll: [{ type: Schema.Types.ObjectId, ref: "FullBody" }],
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
