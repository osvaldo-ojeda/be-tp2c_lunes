import { Router } from "express";
const userRoutes = Router();

import connection from "../dbConnection/connection.js";

userRoutes.get("/", (req, res) => {
  res.send("get all users");
});
userRoutes.get("/:id", (req, res) => {
  res.send("get user by id");
});
userRoutes.post("/", (req, res) => {
  const { name, lastName, password, email } = req.body;
  const sql = `INSERT INTO user(name, lastName, password, email) VALUES ("${name}", "${lastName}","${password}", "${email}")`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("result", result);
    res.send("create users");
  });
});
userRoutes.put("/:id", (req, res) => {
  res.send("update user by id");
});

userRoutes.delete("/:id", (req, res) => {
  res.send("delete user by id");
});
export default userRoutes;
