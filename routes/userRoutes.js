import { Router } from "express";
import User from "../Models/User.js";
// console.log("🚀 ~ file: userRoutes.js:3 ~ User:", User)
const userRoutes = Router();

userRoutes.get("/", (req, res) => {
  res.send("get all users");
});

export default userRoutes;
