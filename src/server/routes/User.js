const express = require("express");
const userRouter = express.Router();
const User = require('../models/User')

userRouter.get("/login/:id", async (req, res) => {
  const user = await User.findById(req.params._id);
  res.send(user);
});

userRouter.get('/', async (req, res) => {
  const result = await User.find({})
  res.send(result);
})

userRouter.post("/favorites", async (req, res) => {
  const { userId } = req.body;
//   const response = await dataSources.mongoClient.addFavoriteToUser(
//     userId
//   );
//   res.send(response);
})

userRouter.delete("/favorites", async (req, res) => {
  const { userId } = req.body;
//   const response = await dataSources.mongoClient.removeFavoriteFromUser(
//     userId
//   )
//   res.send(response)
})

module.exports = userRouter;