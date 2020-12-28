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
  const skirt =  await Skirt.findById(req.params.id);
  res.send(skirt);
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
  const hair =  await Hair.findById(req.params.id);
  res.send(hair);
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
  const blouse =  await Blouse.findById(req.params.id);
  res.send(blouse);
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
  const fullbody =  await FullBody.findById(req.params.id);
  res.send(fullbody);
});

itemRouter.post("/fullbodies", function (req, res) {
  const fullBody = new FullBody(req.body);
  fullBody.save().then((ex) => {
    console.log(ex);
    res.send(ex);
  });
});

module.exports = itemRouter;
