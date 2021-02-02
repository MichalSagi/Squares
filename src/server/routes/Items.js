const express = require("express");
const itemRouter = express.Router();
const Item = require("../models/Item");
const Order = require("../models/Order");
const itemJSON = require("../json/Squares.json");

itemRouter.get("/items", async (req, res) => {
  const items = await Item.find({});
  res.send(items);
});

itemRouter.put("/items/:id", async (req, res) => {
  const itemUpdated = await Item.findOneAndUpdate({ _id: req.params.id }, { stock: req.body.stock, price: req.body.price }, { new: true });
  res.send(itemUpdated);
});

itemRouter.post("/items", async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.send(item);
});

itemRouter.post("/order", async (req, res) => {
  const items = req.body.items;
  const order = new Order({ items });
  await order.save();
  res.send(order);
});

itemRouter.get("/orders", async (req, res) => {
  await Order.find({});
  res.send(orders);
});

module.exports = itemRouter;
