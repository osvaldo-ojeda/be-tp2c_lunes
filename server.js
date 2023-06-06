import express from "express";
import routes from "./routes/routes.js";
import connectionDb from "./connectionDb/connectionDb.js";
import "dotenv/config.js";
import cors from "cors";
const port = process.env.SERVER_PORT;
const app = express();

//middleware de aplicacion
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middlewares de rutas
app.use(routes);

await connectionDb.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log("server ok http://localhost:8080");
  });
});
