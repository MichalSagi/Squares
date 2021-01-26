const express = require("express");
const itemRouter = express.Router();
const Item = require("../models/Item");
const Order = require("../models/Order");
const itemJSON = require("../json/Squares.json");

const insertData = (jsonFile) => {
  for (let item of jsonFile) {
    const newItem = new Item(item);
    newItem.save();
  }
};
// insertData(itemJSON)

itemRouter.get("/items", async (req, res) => {
  await Item.find({}, function (err, items) {
    res.send(items);
  });
});

itemRouter.put("/items/:id", async (req, res) => {
  const itemUpdated = await Item.findOneAndUpdate({ _id: req.params.id }, { stock: req.body.stock, price: req.body.price }, { new: true });
  res.send(itemUpdated);
});

itemRouter.post("/items", function (req, res) {
  const item = new Item(req.body);
  item.save().then((ex) => {
    console.log(ex);
    res.send(ex);
  });
});

itemRouter.post("/shopping", function (req, res) {
  const items = req.body.items;
  const order = new Order({ items });
  order.save().then((ex) => {
    console.log(ex);
    res.send(ex);
  });
});

itemRouter.get("/shopping", async (req, res) => {
  await Order.find({})
    .populate("items")
    .populate("user")
    .exec(function (err, orders) {
      res.send(orders);
    });
});

module.exports = itemRouter;
