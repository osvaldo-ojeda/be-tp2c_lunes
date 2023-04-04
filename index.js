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

console.log("🚀 ------------------------------------------------------🚀");
console.log("🚀 datosPersonales:", typeof datosPersonales);
console.log("🚀 datosPersonales:", datosPersonales);
console.log("🚀 copiaFor:", copia);
console.log("🚀 copiaForeach:", copiaForeach(datosPersonales)); //[3][0] = "HULK");
console.log("🚀 copiaMap:", copiaMap(datosPersonales));
console.log("🚀 copiaSlice:", copiaSlice);
console.log("🚀 copiaSlice2:", copiaSlice2);
console.log("🚀 copiaSlice3:", copiaSlice3);
console.log("🚀 copiaSpread:", copiaSpread);
console.log("🚀 copiaObjetAssign:", copiaObjetAssign);
console.log("🚀 ------------------------------------------------------🚀");
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
