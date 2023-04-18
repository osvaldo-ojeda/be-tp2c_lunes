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
    const data= await fs.promises.readFile(`./${nombreArchivo}.txt`, "utf-8");
    console.log(data)
  } catch (error) {
    console.log(error)
  }
};
read("data");
