import express from "express";
const app = express();

import routes from "./routes/routes.js";

// ----
// import connection from "./dbConnection/connection.js";

// ----
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static('public'))

app.use(routes);

app.listen(8080, () => {
  console.log("server ok http://localhost:8080");
});
app.on("error", (error) => {
  console.log(error.message);
});
