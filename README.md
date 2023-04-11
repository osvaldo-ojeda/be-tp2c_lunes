# clase 4

## Programación sincrónica y asincrónica

## Repaso

### Funciones en Javascript

<image src="https://centrogeo.github.io/JSvis/img/js/funciones.png" alt="Descripción de la imagen">


## funciones con retorno

<image src="https://centrogeo.github.io/JSvis/img/js/return2.png" alt="Descripción de la imagen">


## Declaración de funciones

Las funciones en Javascript tienen varias particularidades con respecto a otros lenguajes. Recordemos las formas para declarar una función:

Estilo clásico:

          function saludar(nombre){
               console.log("Hola", nombre)
          }
          //llamada a la funcion 
          saludar("Pedro")

## Declaracion de una funcion 
 Al ser Javascript un lenguaje que no requiere especificar el tipo de dato de sus variables (tipado dinámico), tampoco es necesario especificar el tipo de dato que devuelven las funciones, ni el tipo de dato de los parámetros que éstas reciben.

 ### Las funciones también son objetos
En JavaScript las funciones se comportan como objetos: es posible asignar una declaración de función a una variable. 

     const saludar= function(nombre){
          console.log("Hola", nombre)
     }



La podemos ejecutar de la misma forma que una función clásica.

### Nueva declaración de funciones
La nueva sintaxis consiste en declarar únicamente los parámetros, y luego conectarlos con el cuerpo de la función mediante el operador => (flecha gorda, o ‘fat arrow’ en inglés). Veamos un ejemplo:

Nuevo estilo (simplificado):  

     const saludar= (nombre)=>{
          console.log("Hola", nombre)
     }



Llamada a la función:  saludar("Pedro")  

### Funciones de un solo parámetro

En el caso de que la función reciba un solo parámetro, los paréntesis se vuelven opcionales, pudiendo escribir:

      const saludar= nombre=>{
          console.log("Hola", nombre)
          }




La función se podrá usar de la misma manera que las anteriores

### Funciones de una sola instrucción
En el caso de que el cuerpo de la función conste de una única instrucción, las llaves se vuelven opcionales, el cuerpo se puede escribir en la misma línea de la declaración y el resultado de computar esa única línea se devuelve como resultado de la función, como si tuviera un “return” adelante. A esto se lo conoce como “return implícito”.

     const saludar= nombre=> console.log("Hola", nombre)
          

En este caso la función devolvería “undefined” ya que console.log es de tipo void y por lo tanto no devuelve nada

### Return implícito
Un ejemplo igualmente trivial pero más ilustrativo de return implícito sería el siguiente:

     const promediar=(a,b)=>(a+b)/2
     const promedio=promediar(4,8)
     console.log(promedio)//6

## Callbacks
Como hemos visto, en Javascript es posible asignar una función a una variable. Esto es porque internamente, las funciones también son objetos (y las variables, referencias a esos objetos). Es por esto que Javascript nos permite hacer que una función reciba como parámetro una referencia a otra función.

     const ejecutarSaludo=fn=>fn()
     const saludar=()=> console.log("Hola")
     ejecutarSaludo(saludo)

## Ejemplos
Y como ya sabemos, donde puedo usar una variable puedo también usar directamente el contenido de esa variable. En el ejemplo, la función ‘ejecutar’ recibe una función anónima, y la ejecuta.

     ejecutarSaludo(()=> console.log("Hola"))

Esto también funciona con funciones anónimas con parámetros

     const ejecutarSaludo=(nombre,fn)=>fn(nombre)
     const saludar=(nombre)=> console.log("Hola", nombre)
     ejecutarSaludo(saludo)


- Un callback es una función que se envía como argumento a otra función.

- La intención es que la función que hace de receptora ejecute la función que se le está pasando por parámetro.

## Callbacks: Algunas convenciones
- El callback siempre es el último parámetro.
- El callback suele ser una función que recibe dos parámetros.
- La función llama al callback al terminar de ejecutar todas sus operaciones.
- Si la operación fue exitosa, la función llamará al callback pasando null como primer parámetro y si generó algún resultado este se pasará como segundo parámetro.
- Si la operación resultó en un error, la función llamará al callback pasando el error obtenido como primer parámetro.

## Callbacks anidados

<image src="https://res.cloudinary.com/practicaldev/image/fetch/s--c0aEZX7m--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b8euo2n7twvgh3dbuatd.jpeg" alt="Descripción de la imagen">

- Es un fragmento de código en el que una función llama a un callback, y este a otro callback, y este a otro, y así sucesivamente.
- Son operaciones encadenadas, en serie.
- Si el nivel de anidamiento es grande, se puede producir el llamado callback hell ó infierno de callbacks. También se conoce como pyramid of doom ó pirámide de la perdición.

### ¡Atención!
A este tipo de estructura de código se le ha denominado callbacks hell o pyramid of doom, ya que las funciones se van encadenando de forma que la indentación del código se vuelve bastante prominente y dificulta la comprensión del mismo.

# Promesas
- Una Promesa es un objeto que encapsula una operación, y que permite definir acciones a tomar luego de finalizada dicha operación, según el resultado de la misma. Para ello, permite asociar manejadores que actuarán sobre un eventual valor (resultado) en caso de éxito, o la razón de falla (error) en caso de una falla.
- Al igual que con los callbacks, este mecanismo permite definir desde afuera de una función un bloque de código que se ejecutará dentro de esa función, dependiendo del resultado. A diferencia de los callbacks, en este caso se definirán dos manejadores en lugar de uno solo. Esto permite evitar callback hells como veremos más adelante.

<image src="https://lenguajejs.com/javascript/asincronia/promesas/promises.png" alt="Descripción de la imagen">
<image src="https://www.freecodecamp.org/news/content/images/2020/06/Ekran-Resmi-2020-06-06-12.21.27.png" alt="Descripción de la imagen">


## crecion de una promesa

          function miPromesa(parametro) {
          return new Promise((resolve, reject) => {
          if (parametro) {
               resolve("La promesa se resolvió correctamente.");
          } else {
               reject("La promesa se rechazó debido al parámetro falso.");
          }
          });
          }

### uso de una promesa si sale bien 

          miPromesa(true)
          .then((respuesta) => console.log(respuesta))
          .catch((error) => console.log(error));
          
          // La promesa se resolvió correctamente.
### uso de una promesa si sale mal 

          miPromesa(false)
          .then((respuesta) => console.log(respuesta))
          .catch((error) => console.log(error));

          // La promesa se rechazó debido al parámetro falso..

## Encadenamiento de promesas
Una llamada a promise.then() devuelve otra promesa, para que podamos llamar al siguiente .then().

      promesa1
          .then((resultado1) => {
          // Hacer algo con resultado1
          return promesa2;
          })
          .then((resultado2) => {
          // Hacer algo con resultado2
          })
          .catch((error) => {
          // Manejar cualquier error
          });
## Sincronismo vs Asincronismo
<image src="https://images.squarespace-cdn.com/content/v1/56cdb491a3360cdd18de5e16/1517393483507-RZWIJ31DBGTTZOC7ME4J/sync_async_es.png?format=1000w" alt="Descripción de la imagen">

## Ejecución Sincrónica: Repasemos
- Cuando escribimos más de una instrucción en un programa, esperamos que las instrucciones se ejecuten comenzando desde la primera línea, una por una, de arriba hacia abajo hasta llegar al final del bloque de código. 
- Si una instrucción es una llamada a otra función, la ejecución se pausa y se procede a ejecutar esa función. 
- Sólo una vez ejecutadas todas las instrucciones de esa función, el programa retomará con el flujo de instrucciones que venía ejecutando antes.

### Ejemplo Ejecución Sincrónica

function suma(a, b) {
  console.log("Sumando...");
  return a + b;
}

function resta(a, b) {
  console.log("Restando...");
  return a - b;
}

function multiplicacion(a, b) {
  console.log("Multiplicando...");
  return a * b;
}

function ejecucionSincronica() {
  const resultadoSuma = suma(2, 3);
  const resultadoResta = resta(resultadoSuma, 1);
  const resultadoMultiplicacion = multiplicacion(resultadoResta, 5);
  console.log(`El resultado final es ${resultadoMultiplicacion}`);
}

ejecucionSincronica();
En este ejemplo, tenemos tres funciones que realizan diferentes operaciones matemáticas: suma, resta y multiplicacion. Cada función imprime un mensaje en la consola para indicar que se está realizando la operación correspondiente.

Luego, tenemos una función llamada ejecucionSincronica que llama a estas tres funciones y utiliza los resultados de una función como entrada para la siguiente. En este caso, estamos sumando 2 y 3, restando 1 al resultado de la suma y multiplicando el resultado de la resta por 5.

Al llamar a ejecucionSincronica, vemos que los mensajes de consola se imprimen en el orden esperado y que el resultado final se calcula correctamente, en un orden específico.

- En todo momento, sólo se están ejecutando las instrucciones de una sola de las funciones a la vez. O sea, debe finalizar una función para poder continuar con la otra.

- El fin de una función marca el inicio de la siguiente, y el fin de ésta, el inicio de la que le sigue, y así sucesivamente, describiendo una secuencia que ocurre en una única línea de tiempo.

## Comportamiento de una función:Bloqueante vs no-bloqueante

Cuando alguna de las instrucciones dentro de una función intente acceder a un recurso que se encuentre fuera del programa (por ejemplo, enviar un mensaje por la red, o leer un archivo del disco) nos encontraremos con dos maneras distintas de hacerlo: en forma bloqueante, o en forma no-bloqueante (blocking o non-blocking).

## Operaciones no-bloqueantes

- En la mayoría de los casos, precisamos que el programa ejecute todas sus operaciones en forma secuencial, y sólo comenzar una instrucción luego de haber terminado la anterior.
- A las operaciones que obligan al programa a esperar a que se finalicen antes de pasar a ejecutar la siguiente instrucción se las conoce como bloqueantes. 
- Este tipo de operaciones permiten que el programa se comporte de la manera más intuitiva.
- Permiten la ejecución de una sola operación en simultáneo.
- A este tipo de ejecución se la conoce como sincrónica. 

## Concepto Ejecución Asincrónica

- Para poder usar funciones que realicen operaciones no bloqueantes debemos aprender a usarlas adecuadamente, sin generar efectos adversos en forma accidental. 
- Cuando el código que se ejecuta en forma sincrónica, establecer el orden de ejecución consiste en decidir qué instrucción escribir primero. 
- Cuando se trata de ejecución asincrónica, sólo sabemos en qué orden comenzarán su ejecución las instrucciones, pero no sabemos en qué momento ni en qué orden terminarán de ejecutarse. 



