import express from "express";
const routes = express.Router();
import users from "./users.js";
import products from "./products.js";

routes.use("/users", users);
routes.use("/products", products);


export default routes;
