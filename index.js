import express from "express";
const app = express();

//importaciones
import routes from "./routes/index.js";
import methodLoger from "./middlewares/methodLoger.js"
import morgan from "morgan"

//midleware
// const method = (req, res, next) => {
//   console.log("🚀 method:", req.method);
//   next();
// };

app.use(methodLoger)
app.use(morgan("tiny"))
app.use(routes);

//server
app.listen(8080, () => {
  console.log("servidor ok http://localhost:8080/");
});
