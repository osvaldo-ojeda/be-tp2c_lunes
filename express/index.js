import express from "express";

const app = express();
let count = 0;
// app.get("ruta", callback(peticion, respuesta))
app.get("/", (req, res) => {
  //   console.log("🚀 ~ file: index.js:8 ~ app.get ~ res:", res);
  res.send({
    nombre: "osvaldito",
    apellido: "ojeda",
  });
});

app.get("/saludar", (req, res) => {
  res.send({ saludos: "Saludos terricola" });
});

app.post("/", (req, res) => {
  res.send("post a /");
});

app.get("/count", (req, res) => {
  count++;
  res.send({count});
});

app.get("/fecha", (req, res) => {
  res.send(new Date());
});

app.listen(8080, () => {
  console.log("server ok");
});
