import http from "http";
// console.log("🚀 ----------------------------------🚀")
// console.log("🚀 ~ file: index.js:2 ~ http:", http)
// console.log("🚀 ----------------------------------🚀")

const server = http.createServer((peticion, respuesta) => {
  respuesta.setHeader("Content-Type", "text/html");
  respuesta.end("<h2>hola</h2>");
});

server.listen(8080, () => {
  console.log("server ok http://localhost:8080");
});
