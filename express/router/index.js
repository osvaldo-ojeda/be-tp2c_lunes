import { Router } from "express";
const router = Router();

import saludar from "../midlewares/saludar.js";

// router.use(saludar)

router.get("/", (req, res) => {
  res.send("get all users");
});
router.get("/:id", (req, res) => {
  res.send("get user by id");
});
// router.use(saludar)
router.post("/", saludar, (req, res) => {
  res.send("create user");
});
router.put("/:id", (req, res) => {
  res.send("update user by id");
});
router.delete("/:id", (req, res) => {
  res.send("delete user by id");
});

export default router;
