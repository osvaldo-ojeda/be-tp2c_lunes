// variables
//var
// declarar una variable
var nombre;
console.log("🚀 ~ file: index.js:4 ~ nombre:", nombre);

var nombre = "Shakira";
console.log("🚀 ~ file: index.js:4 ~ nombre:", nombre);

// aca declaro e inicializo la variable
console.log("🚀 ~ file: index.js:8 ~ apellido:", apellido);
var apellido = "Rodriguez";

//let
// console.log("🚀 ~ file: index.js:14 ~ edad:", edad);
// let edad;
let edad = 36;
edad = 37;
console.log("🚀 ~ file: index.js:14 ~ edad:", edad);

//conts
const genero = "Femenino";
// genero="masculino"
console.log("🚀 ~ file: index.js:17 ~ genero:", genero);

// tipos de datos en js
// datos primitivos
// 1- strings o cadenas de texto
let string = "soy un string";

// 2- number
let number = 2987598759;

// 3- BigInt
let bigint = 2344e4;

// 4-Boolean
let boolean = true; // false
console.log("🚀 ~ file: index.js:39 ~ boolean:", boolean);

// 5-undefined
let undefined;
console.log("🚀 ~ file: index.js:42 ~ undefined:", undefined);
// 6-null
let nulo = null;
console.log("🚀 ~ file: index.js:46 ~ nulo:", nulo);
// 7- Symbol

// datos complejos

// 8 Array
const array = [12, "osvaldito", [4], {}];
// array[4]=["hola"]
console.log("🚀 ~ file: index.js:54 ~ array:", array);

// 9 Object
const object = {
  key: "value",
  nombre: "Leonel",
};
console.log("🚀 ~ file: index.js:61 ~ object:", object.key);

// 10 function
saludar(2);
function saludar(params) {
  console.log("🚀 ~ file: index.js:66 ~ saludar ~ params:", params);
}

const caminar = (params) => {
    console.log("🚀 ~ file: index.js:69 ~ params:", params);
};

// saludar();
// saludar(2);
// saludar("hola");
// saludar([34]);

caminar("estoy caminando");
