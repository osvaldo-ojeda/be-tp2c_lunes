let data = ["Juan", "Messi"];

let index = 0;

console.log(data[0]);
console.log(data[index]);

data = "banana";
// console.log("🚀 ----------------------------------🚀");
// console.log("🚀 ~ file: index.js:9 ~ data:", data);
// console.log("🚀 ----------------------------------🚀");

const data2 = ["Osvaldito", "Ojeda"];
// console.log("🚀 ~ file: index.js:15 ~ data2:", data2);
// data2="pomelo"
// data2[0]="Oswald"
// data2[2]=36
// data2[6]=1440
//  data2[-1]=1440
// agregar al final de un Array haciendo push
data2.push("26/11/1986");
// agregar al principio de un Array haciendo unshift
data2.unshift(true);

//quitar del final de un array pop
data2.pop();
//quitar del principio de un array shift
data2.shift();

// console.log("🚀 -------------------------------------🚀");
// console.log("🚀 ~ file: index.js:15 ~ data2:", data2);
// console.log("🚀 ~ esto es para medir la longitud de un array", data2.length);
// // console.log("🚀 ~ file: index.js:15 ~ data2:", data2["-1"])
// console.log("🚀 -------------------------------------🚀");

// convertir un array a un string
let data2Str = data2.toString();
let data2Str2 = data2.join("-");
// console.log("🚀 -------------------------------------------🚀");
// console.log("🚀  tostring:", data2Str);
// console.log("🚀  join:", data2Str2);
// console.log("🚀 -------------------------------------------🚀");

// convertir un string en un aray
let datasplit = data2Str.split("");
// console.log("🚀 splitt", datasplit);

//  -------------------------------
// copia de un Array
let perrita1 = "kuka";
let perrita2 = perrita1;
perrita2 = "canela";
// console.log("🚀 -------------------------------------------🚀")
// console.log("🚀 ~ file: index.js:51 ~ perrita1:", perrita1)
// console.log("🚀 ~ file: index.js:51 ~ perrita2:", perrita2)
// console.log("🚀 -------------------------------------------🚀")

const productos = ["arroz", "leche", "cafe", ["tomate", "naranja"]];
// console.log("🚀 ---------------------------------------------🚀")
// console.log("🚀 ~ file: index.js:52 ~ productos:", productos)
// console.log("🚀 ---------------------------------------------🚀")
const productos2 = productos;
productos2[0] = "fideos";
// console.log("🚀 -----------------------------------------------🚀")
// console.log("🚀 ~ file: index.js:56 ~ productos2:", productos2)
// console.log("🚀 ~ file: index.js:56 ~ productos:", productos)
// console.log("🚀 -----------------------------------------------🚀")

// copia dura
const productos3 = [productos[0], productos[1], productos[2]];
productos3[0] = "manteca";
// console.log("🚀 -----------------------------------------------🚀")
// console.log("🚀 ~ file: index.js:71 ~ productos3:", productos3)
// console.log("🚀 ~ file: index.js:71 ~ productos:", productos)
// console.log("🚀 -----------------------------------------------🚀")

// copia con slice
const productos4 = productos.slice();
// productos4[0]="lechuga"
productos4[3][1] = "pomelo";
// console.log("🚀 -----------------------------------------------🚀")
// console.log("🚀 ~ file: index.js:79 ~ productos4:", productos4)
// console.log("🚀 ~ file: index.js:79 ~ productos:", productos)
// console.log("🚀 -----------------------------------------------🚀")

// copia con spread operator

let productos5 = [...productos];
productos5[0] = "pan";
productos5[3][0] = "";
// console.log("🚀 -----------------------------------------------🚀")
// console.log("🚀 ~ file: index.js:89 ~ productos5:", productos5)
// console.log("🚀 ~ file: index.js:89 ~ productos:", productos)
// console.log("🚀 -----------------------------------------------🚀")

// --------------------------
// bucles
const lista = ["gaspar", "homero", "gart", "gisa", "flanders"];

const listaUP = [];

// for (let i = 0; i < lista.length; i++) {
//   const element = lista[i];
//   listaUP[i] = element.toUpperCase();
// }

// lista.forEach(element => {
//   listaUP.push(element.toUpperCase())
// });
// console.log("🚀 ------------------------------------------🚀");
// console.log("🚀 ~ file: index.js:101 ~ listaUP:", listaUP);
// console.log("🚀 ------------------------------------------🚀");
// ------

// map
// let listaUpMap = lista.map((personaje) => personaje.toLocaleUpperCase());

// let listaUpMap = lista.map(function personaje(personaje) {
//   return personaje.toLocaleUpperCase();
// });

function upperCase(params) {
  return params.toLocaleUpperCase();
}

let listaUpMap = lista.map(upperCase);

console.log(
  "🚀 -------------------------------------------------------------🚀"
);
console.log("🚀 ~ file: index.js:119 ~ listaUpMap ~ listaUpMap:", listaUpMap);
console.log("🚀 ~ file: index.js:119 ~ listaUpMap ~ listaUpMap:", lista);
console.log(
  "🚀 -------------------------------------------------------------🚀"
);
