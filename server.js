import express from "express";
import routes from "./routes/routes.js";
import connectionDb from "./connectionDb/connectionDb.js";
import "dotenv/config.js";
import cors from "cors";
import roleSeed from "./seed/roleSeed.js";
const port = process.env.SERVER_PORT;
const app = express();

//middleware de aplicacion
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middlewares de rutas
app.use(routes);

// ----------------
// import bcrypt from "bcrypt";

// // const salt= await bcrypt.genSalt()
// // console.log("🚀 salt:", salt)
// // // $2b$10$tRu1llUI3uczGu2yb8jbnu

// const hash = await bcrypt.hash("12345",10);
// console.log("🚀 ~ file: server.js:26 ~ hash:", hash)


// const compare= await bcrypt.compare("12345",hash)
// console.log("🚀 ~ file: server.js:29 ~ compare:", compare)
// ----------------

await connectionDb
  .sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log("server ok http://localhost:8080");
    });
  })
  .then(roleSeed);
