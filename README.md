# clase 3

## copiar un dato complejo 

Copiar un array o un objeto puede ser complicado, ya que se manejan diferente que los datos primitivos.
Hacer esto puede generarnos un error si lo que queremos es mantener nuestro array u objeto original sin cambios.

Hacer 

          let nombre="juan"
          let nombre2=nombre 

          //si modifico nombre2 nombre no se va a ver afectado 


Esto es diferente de lo que ocurre con los objetos y arrays, que se pasan por referencia. Cuando se copia un objeto o un array a una nueva variable, ambas variables apuntan al mismo objeto/array en memoria. Por lo tanto, cualquier cambio que se haga en la nueva variable también se reflejará en el objeto/array original.

     const data=["Maria","Garcia"]
     const newData=data
     //al modificar newData tambien se modificara data

## Podemos copiar un array con los siguientes metodos 

### Puedo copiar un array accediendo a sus indices

      const data=["Maria","Garcia"]
      const newData=[data[0],data[1]]
      //al modificar newData ya no se vera afectada data

Entendiendo esto podriamos utilizar algun bucle para realizar las copias como un for, un foreach, hasta un map o un reduce, pero hay formas mas amigables.

### slice
slice() es un método que se utiliza en JavaScript para crear una copia superficial de un array o una parte del array, sin modificar el array original.

La sintaxis del método slice() es la siguiente:

     array.slice([inicio], [fin])

Donde:
- array: El array original que se va a copiar.
- inicio (opcional): El índice del array donde se va a comenzar a copiar los elementos. El valor predeterminado es 0, lo que significa que se copiará desde el primer elemento.
- fin (opcional): El índice del array donde se va a detener la copia de elementos. El valor predeterminado es el final del array (el índice del último elemento).

El método slice() devuelve un nuevo array que contiene los elementos copiados del array original. Este nuevo array se puede asignar a una variable o utilizar directamente en cualquier otro lugar donde se necesite un array.

Aquí hay algunos ejemplos de cómo usar el método slice():

     const numeros = [1, 2, 3, 4, 5];

     const copiaNumeros = numeros.slice();

     console.log(copiaNumeros); // [1, 2, 3, 4, 5]

     const parteNumeros = numeros.slice(1, 4);

     console.log(parteNumeros); // [2, 3, 4]

En el primer ejemplo, se utiliza slice() para crear una copia del array numeros. La variable copiaNumeros apunta a un nuevo array que contiene los mismos elementos que numeros.

En el segundo ejemplo, se utiliza slice() para crear una parte del array numeros. La variable parteNumeros apunta a un nuevo array que contiene los elementos del array original comenzando en el índice 1 y deteniéndose antes del índice 4.

Para aprender mas consulta [sclice en mdn](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

### spread operators
El operador spread (...) es una característica de JavaScript que se utiliza para expandir un array o un objeto en lugares donde se esperan múltiples argumentos o elementos.

En el caso de los arrays, el operador spread se utiliza para crear una copia superficial del array original y expandir sus elementos en una nueva lista. La sintaxis es la siguiente:

     const arrayOriginal = [1, 2, 3];
     const nuevaLista = [...arrayOriginal];
     console.log(nuevaLista); // [1, 2, 3]

En este ejemplo, el operador spread se utiliza para crear una copia superficial del array arrayOriginal y expandir sus elementos en una nueva lista llamada nuevaLista. La nueva lista es una copia del array original y no afecta el array original.

El operador spread también se puede utilizar para combinar varios arrays en uno solo. La sintaxis es la siguiente:

     const array1 = [1, 2];
     const array2 = [3, 4];
     const arrayCombinado = [...array1, ...array2];
     console.log(arrayCombinado); // [1, 2, 3, 4]

En este ejemplo, el operador spread se utiliza para combinar los elementos de los arrays array1 y array2 en un nuevo array llamado arrayCombinado. La nueva lista contiene los elementos de ambos arrays.

En el caso de los objetos, el operador spread se utiliza para crear una copia superficial del objeto original y mezclarla con otros objetos. La sintaxis es la siguiente:

     const objetoOriginal = { a: 1, b: 2 };
     const nuevoObjeto = { ...objetoOriginal };
     console.log(nuevoObjeto); // { a: 1, b: 2 }

En este ejemplo, el operador spread se utiliza para crear una copia superficial del objeto objetoOriginal y mezclarla con un nuevo objeto llamado nuevoObjeto. El nuevo objeto contiene las propiedades del objeto original.

El operador spread es una herramienta útil en JavaScript para trabajar con arrays y objetos de manera eficiente y elegante. 

Aca hay mas info sobre [spread operators](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

### Objet.assign
Object.assign() es un método estático de JavaScript que se utiliza para copiar los valores de todas las propiedades enumerables de uno o más objetos fuente a un objeto destino. El método devuelve el objeto destino modificado.

La sintaxis del método Object.assign() es la siguiente:

     Object.assign(destino, ...fuentes)
Donde:

- destino: El objeto destino al que se copiarán las propiedades de los objetos fuente.
- fuentes: Uno o más objetos fuente cuyas propiedades se copiarán al objeto destino.

El método Object.assign() copia las propiedades enumerables de los objetos fuente al objeto destino, sobrescribiendo las propiedades existentes si tienen el mismo nombre. Si el objeto destino no existe, se crea uno nuevo.

Aquí hay un ejemplo de cómo utilizar el método Object.assign():

     const array=[1,2,3,4]
     const newArray=Object.assign([],array)
     // y con objetos
     const objetoDestino = { a: 1 };
     const objetoFuente1 = { b: 2 };
     const objetoFuente2 = { c: 3 };

     const resultado = Object.assign(objetoDestino, objetoFuente1, objetoFuente2);

     console.log(resultado); // { a: 1, b: 2, c: 3 }
     console.log(objetoDestino); // { a: 1, b: 2, c: 3 }


En este ejemplo, se utiliza Object.assign() para copiar las propiedades de los objetos objetoFuente1 y objetoFuente2 al objeto objetoDestino. El método devuelve el objeto destino modificado, que contiene las propiedades de ambos objetos fuente.

Es importante tener en cuenta que Object.assign() no copia las propiedades heredadas ni las propiedades no enumerables de los objetos fuente. Además, el método no se utiliza para crear una copia profunda de un objeto, sino solo una copia superficial.

Mas sobre [Objet.assign](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)


### JSON.stringify() y JSON.parse()

JSON.stringify() y JSON.parse() son dos métodos de JavaScript que se utilizan para convertir datos entre formato JSON y formato JavaScript.

JSON.stringify() se utiliza para convertir un objeto JavaScript en una cadena de texto JSON. La sintaxis es la siguiente:

     JSON.stringify(objeto[, replacer[, espacio]])
Donde:

- objeto: El objeto JavaScript que se va a convertir en formato JSON.
- eplacer (opcional): Una función que se utiliza para transformar los valores y las propiedades del objeto antes de la serialización. También se puede utilizar un array para seleccionar las propiedades que se incluirán en la cadena de texto JSON.
- espacio (opcional): Un valor numérico o una cadena de texto que se utiliza para agregar espacios en blanco a la salida con el fin de mejorar la legibilidad.
Aquí hay un ejemplo de cómo utilizar JSON.stringify():

          const objeto = { a: 1, b: 2 };
          const cadenaJSON = JSON.stringify(objeto);

          console.log(cadenaJSON); // {"a":1,"b":2}

En este ejemplo, se utiliza JSON.stringify() para convertir el objeto objeto en una cadena de texto JSON. La cadena resultante se almacena en la variable cadenaJSON.

JSON.parse() se utiliza para convertir una cadena de texto JSON en un objeto JavaScript. La sintaxis es la siguiente:

     JSON.parse(cadena)
Donde:

- cadena: La cadena de texto JSON que se va a convertir en un objeto JavaScript.
Aquí hay un ejemplo de cómo utilizar JSON.parse():

          const cadenaJSON = '{"a":1,"b":2}';
          const objeto = JSON.parse(cadenaJSON);

          console.log(objeto); // { a: 1, b: 2 }
En este ejemplo, se utiliza JSON.parse() para convertir la cadena de texto JSON cadenaJSON en un objeto JavaScript. El objeto resultante se almacena en la variable objeto.

Es importante tener en cuenta que la cadena de texto JSON debe tener una sintaxis válida para poder ser convertida en un objeto JavaScript. Si la cadena no es válida, se producirá un error al utilizar JSON.parse().

### structuredClone

El método structuredClone() es una función que permite crear una copia profunda de un objeto en JavaScript. Esta función es parte de la especificación de Web Workers y se utiliza para transferir objetos entre hilos de ejecución. Aquí te muestro un ejemplo:

     const obj1 = { a: 1, b: { c: 2 } };
     const obj2 = structuredClone(obj1);
     console.log(obj2); // { a: 1, b: { c: 2 } }
En este ejemplo, utilizamos la función structuredClone() para crear una copia profunda del objeto obj1. Esto significa que también se copian las propiedades que son objetos anidados por referencia, creando nuevas instancias de esos objetos.

Es importante tener en cuenta que structuredClone() no funciona con todos los tipos de objetos en JavaScript, y puede haber limitaciones en cuanto a la cantidad o el tamaño de los datos que se pueden clonar. Además, esta función no está disponible en todos los navegadores y entornos de JavaScript, por lo que es importante verificar su compatibilidad antes de utilizarla.

Mas info sobre [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)

# module.export y require

module.exports y require son dos características de Node.js que se utilizan para exportar e importar módulos en una aplicación Node.js.

module.exports es una propiedad del objeto module que se utiliza para exportar un objeto, una función o una variable de un módulo. La sintaxis es la siguiente:

     module.exports = objeto;
Donde objeto puede ser cualquier objeto, función o variable que se desea exportar.

Aquí hay un ejemplo de cómo utilizar module.exports para exportar una función desde un módulo:

     // En el archivo modulo.js
     function sumar(a, b) {
     return a + b;
     }

     module.exports = sumar;

Luego 

     // En el archivo principal
     const sumar = require('./modulo.js');
     console.log(sumar(2, 3)); // 5

En este ejemplo, se define una función sumar en el archivo modulo.js y se exporta utilizando module.exports. En el archivo principal, se utiliza require para importar la función sumar desde el módulo modulo.js y se llama a la función para sumar dos números.

require es una función de Node.js que se utiliza para importar un módulo en una aplicación Node.js. La sintaxis es la siguiente:

     const objeto = require('nombreDelModulo');
Donde nombreDelModulo es el nombre del módulo que se desea importar. Si el módulo es un archivo local, se debe especificar la ruta relativa o absoluta del archivo.

Aquí hay un ejemplo de cómo utilizar require para importar un objeto desde un módulo:

     // En el archivo modulo.js
     const objeto = {
     a: 1,
     b: 2
     };

     module.exports = objeto;

     // En el archivo principal
     const objetoImportado = require('./modulo.js');
     console.log(objetoImportado.a); // 1
     console.log(objetoImportado.b); // 2

En este ejemplo, se define un objeto objeto en el archivo modulo.js y se exporta utilizando module.exports. En el archivo principal, se utiliza require para importar el objeto desde el módulo modulo.js y se accede a sus propiedades.

Mas sobre [module.exports](https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/)