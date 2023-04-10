const saludar = require("./functions/saludar");
const { cosas } = require("./utils/cosas");
const reduce= require("./functions/reduce")

const datosPersonales = ["Lionel", "Messi", 33016244, ["hulk"]];

// esto no es copia
const copiaDatosPersonales = datosPersonales;

const copiaHard = [datosPersonales[0], datosPersonales[1], datosPersonales[2]];

// copiando con un bucle

function copiaFor(array) {
  const copia = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // copia[index] = element;
    copia.push(element);
  }
  return copia;
}
const copia = copiaFor(datosPersonales);
//  copia[3][0] = "HULK";

function copiaForeach(array) {
  const copia = [];
  array.forEach((element, index, array) => {
    // console.log("element", element)
    // console.log("index", index)
    // console.log("array", array)
    copia.push(element);
  });
  return copia;
}

function copiaMap(array) {
  return array.map((element, index, array) => {
    // console.log("element", element);
    // console.log("index", index);
    // console.log("array", array);
    return element;
  });
}

const copiaSlice = datosPersonales.slice();
// copiaSlice[3][0] = "HULK";
const copiaSlice2 = datosPersonales.slice(1);
const copiaSlice3 = datosPersonales.slice(1, 2);

const copiaSpread = [...datosPersonales, ...copiaSlice3];
const copiaObjetAssign = Object.assign([], datosPersonales);

// console.log("🚀 ------------------------------------------------------🚀");
// console.log("🚀 datosPersonales:", typeof datosPersonales);
// console.log("🚀 datosPersonales:", datosPersonales);
// console.log("🚀 copiaFor:", copia);
// console.log("🚀 copiaForeach:", copiaForeach(datosPersonales)); //[3][0] = "HULK");
// console.log("🚀 copiaMap:", copiaMap(datosPersonales));
// console.log("🚀 copiaSlice:", copiaSlice);
// console.log("🚀 copiaSlice2:", copiaSlice2);
// console.log("🚀 copiaSlice3:", copiaSlice3);
// console.log("🚀 copiaSpread:", copiaSpread);
// console.log("🚀 copiaObjetAssign:", copiaObjetAssign);
// console.log("🚀 ------------------------------------------------------🚀");
// -----------------
// diferencia entre funcion anomima y arrow anonima
// const miFunction = function () {
//   console.log("miFunction",this);
// };
// miFunction()
// const miFunction2 = () => {
//   console.log("miFunction2", this);
// };
// miFunction2()
// -----------------

// copias profundas

// function deepCopy(obj) {
//     // verifica si los valores son objetos
//     // Si son objetos copio ese objeto a sí mismo
//     // Sino retorno el valor
//     const keys = Object.keys(obj)
//     //console.log(keys)
//     const newObject = {}
//     for (let i = 0; i < keys.length; i++) {
//       const key = keys[i]

//       if (typeof obj[key] === 'object') {
//         newObject[key] = deepCopy(obj[key])
//       } else {
//         newObject[key] = obj[key]
//       }
//     }
//     //console.log("debe retornar", newObject)
//     return newObject
//   }

const JSONStringify = JSON.stringify(datosPersonales); //aca convierto a string
const copyJson = JSON.parse(JSONStringify); //aca lo vuelvo a la normalidad
// console.log("🚀 -------------------------------------------🚀");
// console.log("🚀 datosPersonales:", datosPersonales);
// console.log("🚀 copyJson:", copyJson);
// console.log("🚀 copyJson:", (copyJson[3] = "pepe"));
// console.log("🚀 datosPersonales:", datosPersonales);
// console.log("🚀numero:", typeof JSON.parse(JSON.stringify(new Date())));
// console.log("🚀numero:", typeof JSON.stringify(Date()));
// console.log("🚀numero:", typeof new Date());
// console.log("🚀 -------------------------------------------🚀");

const copiaStructure = structuredClone(datosPersonales);
copiaStructure[3].push("Ronaldo");
// console.log("🚀 --------------------------------------------------------🚀");
// console.log("🚀  datosPersonales:", datosPersonales);
// console.log("🚀  copiaStructure:", copiaStructure);
// console.log("🚀 --------------------------------------------------------🚀");

const obj = {
  nombre: "lionel",
  apellido: "messi",
  dni: 33016244,
  mascota: ["hulk"],
};
let mascota = "mascota";
// const copyObj={...obj}
// const copyObjJson=JSON.parse(JSON.stringify(obj))
// copyObjJson[mascota][0]="pepe"
// console.log("🚀 ------------------------------------------🚀")
// console.log("🚀 obj:", obj)
// console.log("🚀 copyObj:", copyObj)
// console.log("🚀 copyObjJson:", copyObjJson)
// console.log("🚀 ------------------------------------------🚀")

// --------------------------

const numeros = [1, 2, 3, 4, 5];
// esto no
// numeros=[]
// esto es muy hard
// for (let index = numeros.length; index > 0; index--) {
//   numeros.pop();
// }
// esto esta mejor
// numeros.splice(0);
// otra forma
numeros.length = 0;

console.log("🚀 ------------------------------------------🚀");
console.log("🚀 ~ file: index.js:134 ~ numeros:", numeros);
console.log("🚀 ------------------------------------------🚀");

// saludar();

// console.log(module)

// ----------


const objreduce = reduce(cosas);
console.log("🚀 ----------------------------------------------🚀");
console.log("🚀 objreduce:", objreduce);
console.log("🚀 ----------------------------------------------🚀");
