const express = require("express");
const itemRouter = express.Router();
const FullBody = require("../models/FullBody");
const Skirt = require("../models/Skirt");
const Hair = require("../models/Hair");
const Blouse = require("../models/Blouse");

itemRouter.get("/skirts", async (req, res) => {
  await Skirt.find({}, function (err, skirts) {
    res.send(skirts);
  });
});

itemRouter.get("/skirts/:id", async (req, res) => {
  const skirt = await Skirt.findById(req.params.id);
  res.send(skirt);
});

itemRouter.put("/skirts/:id", async (req, res) => {
  const skirtUpdated = await Skirt.findOneAndUpdate({ _id: req.params.id }, { stock: req.body.stock, price: req.body.price }, { new: true });
  res.send(skirtUpdated);
});

itemRouter.post("/skirts", function (req, res) {
  const skirt = new Skirt(req.body);
  skirt.save().then((ex) => {
    console.log(ex);
    res.send(ex);
  });
});

itemRouter.get("/hairs", async (req, res) => {
  await Hair.find({}, function (err, hairs) {
    res.send(hairs);
  });
});

itemRouter.get("/hairs/:id", async (req, res) => {
  const hair = await Hair.findById(req.params.id);
  res.send(hair);
});

itemRouter.put("/hairs/:id", async (req, res) => {
  const hairtUpdated = await Hair.findOneAndUpdate({ _id: req.params.id }, { stock: req.body.stock, price: req.body.price }, { new: true });
  res.send(hairtUpdated);
});

itemRouter.post("/hairs/:id", function (req, res) {
  const hair = new Hair(req.body);
  hair.save().then((ex) => {
    console.log(ex);
    res.send(ex);
  });
});

itemRouter.get("/blouses", async (req, res) => {
  await Blouse.find({}, function (err, blouses) {
    res.send(blouses);
  });
});

itemRouter.get("/blouses/:id", async (req, res) => {
  const blouse = await Blouse.findById(req.params.id);
  res.send(blouse);
});

itemRouter.put("/blouses/:id", async (req, res) => {
  const blouseUpdated = await Blouse.findOneAndUpdate({ _id: req.params.id }, { stock: req.body.stock, price: req.body.price }, { new: true });
  res.send(blouseUpdated);
});

itemRouter.post("/blouses", function (req, res) {
  const blouse = new Blouse(req.body);
  blouse.save().then((ex) => {
    console.log(ex);
    res.send(ex);
  });
});

itemRouter.get("/fullbodies", async (req, res) => {
  await FullBody.find({}, function (err, fullBodies) {
    res.send(fullBodies);
  });
});

itemRouter.get("/fullbodies/:id", async (req, res) => {
  const fullbody = await FullBody.findById(req.params.id);
  res.send(fullbody);
});

itemRouter.put("/fullbodies/:id", async (req, res) => {
  const fullbodyUpdated = await FullBody.findOneAndUpdate({ _id: req.params.id }, { stock: req.body.stock, price: req.body.price }, { new: true });
  res.send(fullbodyUpdated);
});

itemRouter.post("/fullbodies", function (req, res) {
  const fullBody = new FullBody(req.body);
  fullBody.save().then((ex) => {
    console.log(ex);
    res.send(ex);
  });
});

// itemRouter.put("/fullbodies/:id", (req, res) => {
//   const {img } = req.body
//   FullBody.findByIdAndUpdate( req.params.id, { img: newImg }, {new: true}).exec(function(err, fullbody) {
//     res.send({img})
//   })
// });

module.exports = itemRouter;
