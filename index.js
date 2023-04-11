function uno() {
  console.log("uno");
}
function dos() {
  console.log("dos");
}

function tres() {
  setTimeout(() => {
    console.log("tres");
    return "soy tres";
  }, 1000);
  return 3;
}

function cuatro(param) {
  return new Promise((resolve, reject) => {
    if (param) {
      resolve("Promesa resuelta");
    } else {
      reject("ingresa un valor verdadero");
    }
  });
}

cuatro(true)
  .then((respuesta) => console.log(respuesta))
  .catch((err)=>console.log(err))
  .finally(()=>console.log("promesa finalizada"))

uno();
// setTimeout(() => {
//   return dos();
// }, 0);
setTimeout(dos, 500);
console.log("esto es tres", tres());

// console.log("cuatro", cuatro().then((respuesta)=>console.log(respuesta)));
