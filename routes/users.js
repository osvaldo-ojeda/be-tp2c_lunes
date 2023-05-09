import express from "express";
const users = express.Router();

users.get("/", (req, res) => {
  // codigo sql o no sql
  res.send("get all users");
});
users.get("/:id", (req, res) => {
  res.send("get user by id");
});
users.post("/", (req, res) => {
  res.send("post/create user");
});
users.put("/:id", (req, res) => {
  res.send("put/update user by id");
});
users.delete("/:id", (req, res) => {
  res.send("delete user by id");
});

export default users
