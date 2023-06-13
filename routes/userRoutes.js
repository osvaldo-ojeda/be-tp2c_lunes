import { Router } from "express";
import UserController from "../Controllers/UserController.js";
const userRoutes = Router();

const userController = new UserController();

userRoutes.get("/", userController.getAllUsers);
userRoutes.get("/:id", userController.getUserById);
userRoutes.post("/login", userController.login);


userRoutes.post("/", userController.createUser);
userRoutes.put("/:id", (req, res) => {
  res.send("get all users");
});
userRoutes.delete("/:id", (req, res) => {
  res.send("get all users");
});

export default userRoutes;
