import http from "http";

const server = http.createServer((peticion, respuesta) => {
  respuesta.end("<h1>Como estan?</h1>");
});

server.listen(8080, () => {
  console.log("servidor ok");
});
