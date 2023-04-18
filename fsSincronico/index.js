const fs = require("fs");

// fs.readFileSync

// fs.readFileSync("./notas.tx", "utf-8")

const readNotas = () => {
    try {
     return fs.readFileSync(`./notas.txt`, "utf-8");
    } catch (error) {
      console.log(error);
    }
};

const mostrar= readNotas()
//  console.log("🚀 notas:", notas());

// fs.writeFileSync
const writeNotas=(texto)=>{
    try {
        fs.writeFileSync("./notitas.txt", texto)
    } catch (error) {
        console.log(error);
    }
} 

// writeNotas("hola")

// fs.appendFileSync
const appendNotas=(texto)=>{
    try {
        fs.appendFileSync("./notitas.t", texto)
    } catch (error) {
        console.log(error);
    }
}
// appendNotas("\nhola a toditas")



const fecha= new Date().toLocaleString()


const writeFyH=(nombreArchivo, fecha)=>{
    try {
        fs.writeFileSync(`./${nombreArchivo}.txt`, fecha)
    } catch (error) {
        console.error(error)
    }
}

 writeFyH("fyh", fecha)

const readFyH=(nombreArchivo)=>{
    try {
      const fecha= new Date(fs.readFileSync(`./${nombreArchivo}.txt`, "utf-8"))
      return fecha.toString()
    } catch (error) {
        console.error(error)
    }
}

console.log(readFyH("fyh"))