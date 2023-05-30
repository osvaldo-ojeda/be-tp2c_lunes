import express from "express";
import routes from "./routes/routes.js";
import connectionDb from "./connectionDb/connectionDb.js";

import "dotenv/config.js";
import Category from "./Models/Category.js";
// import User from "./Models/User.js";


const port = process.env.SERVER_PORT;

const app = express();

//midlewares de rutas
app.use(routes);

await connectionDb.sync({force:false}).then(() => {
  app.listen(port, () => {
    console.log("server ok http://localhost:8080");
  });
});
