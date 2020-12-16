const express = require("express");
const itemRouter = express.Router();
const FullBody = require("../models/FullBody");
const Skirt = require("../models/Skirt");
const Hair = require("../models/Hair");
const Blouse = require("../models/Blouse");

// itemRouter.get("/skirts", async (req, res) => {
//   await Skirt.find({}, function (err, skirts) {
//     res.send(skirts);
//   });
// });
// itemRouter.get("/hairs", async (req, res) => {
//   await Hair.find({}, function (err, hairs) {
//     res.send(hairs);
//   });
// });
// itemRouter.get("/blouses", async (req, res) => {
//   await Blouse.find({}, function (err, blouses) {
//     res.send(blouses);
//   });
// });
// itemRouter.get("/fullbodies", async (req, res) => {
//   await FullBody.find({}, function (err, fullBodies) {
//     res.send(fullBodies);
//   });
// });

// itemRouter.post("/skirts", function (req, res) {
//   const skirt = new Skirt( req.body );
//   skirt.save().then((ex) => {
//     console.log(ex);
//     res.send(ex);
//   });
// });

// itemRouter.post("/blouses", function (req, res) {
//   const blouse = new Blouse( req.body );
//   blouse.save().then((ex) => {
//     console.log(ex);
//     res.send(ex);
//   });
// });

// itemRouter.post("/hairs", function (req, res) {
//   const hair = new Hair( req.body );
//   hair.save().then((ex) => {
//     console.log(ex);
//     res.send(ex);
//   });
// });

// itemRouter.post("/fullbodies", function (req, res) {
//   const fullBody = new FullBody( req.body );
//   fullBody.save().then((ex) => {
//     console.log(ex);
//     res.send(ex);
//   });
// });

module.exports = itemRouter;
