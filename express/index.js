import express from "express";
const app = express();

//importaciones
import router from "./router/index.js";
import saludar from "./midlewares/saludar.js";


// const saludar = (req, res, next) => {
//   console.log("hola como estas");
//   next()
// };

//midlewares
// app.use(saludar)
app.use(router);

app.listen(8080, () => {
  console.log("server con express ok http://localhost:8080");
});
