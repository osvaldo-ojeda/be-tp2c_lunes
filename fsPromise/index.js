const { kMaxLength } = require("buffer");
const { error } = require("console");
const fs = require("fs");

// const read = (nombreArchivo) => {
//   return fs.promises
//     .readFile(`./${nombreArchivo}.txt`, "utf-8")
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };
// read("data");

// ------------------
const read = async (nombreArchivo) => {
  try {
    const data = await fs.promises.readFile(`./${nombreArchivo}.txt`, "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
//  read("data");

// const append = (texto) => {
//   return fs.promises
//     .appendFile("./data.txt", `${texto}\n`)
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };

const append = (texto) => {
  return fs.promises.appendFile("./data.txt", `${texto}\n`);
};

append("clase n6")
.then((data) => console.log(data))
.catch((error) => console.log(error));
// -----------------------------

// const append2 = async (texto) => {
//   try {
//     const data = await fs.promises.appendFile("./data.txt", `${texto}\n`);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };





