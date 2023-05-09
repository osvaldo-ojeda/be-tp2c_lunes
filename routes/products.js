import express from "express";
const products = express.Router();

products.get("/", (req, res) => {
  res.send("get all produts");
});

products.get("/:id", (req, res) => {
  res.send("get produt by id");
});
products.post("/", (req, res) => {
  res.send("create pruducts");
});
products.put("/:id", (req, res) => {
  res.send("update products");
});
products.delete("/id", (req, res) => {
  res.send("delete products");
});

export default products;
