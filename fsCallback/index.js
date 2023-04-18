const fs = require("fs");

function leer() {
  fs.readFile("./data.txt", "utf-8", (error, contenido) => {
    if (error) {
      console.log(error);
    } else {
      console.log(contenido);
    }
  });
}

leer()
