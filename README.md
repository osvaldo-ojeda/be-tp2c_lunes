# clase 4

## Programación sincrónica y asincrónica

### Funciones en Javascript

<image src="https://centrogeo.github.io/JSvis/img/js/funciones.png" alt="Descripción de la imagen">


## funciones con retorno

<image src="https://centrogeo.github.io/JSvis/img/js/return2.png" alt="Descripción de la imagen">


## Declaración de funciones

Con respecto a las funciones, Javascript tiene una serie de características únicas .  Recordamos los métodos para declarar una función:

Estilo clásico:

          function saludar(nombre){
               console.log("Hola", nombre)
          }
          //llamada a la funcion 
          saludar("Pedro")

## Declaracion de una funcion 
JavaScript es un lenguaje con tipado dinámico, lo que significa que no es necesario especificar el tipo de dato de las variables en su declaración. Esto también se aplica a las funciones, ya que no es necesario especificar el tipo de dato que se devuelve ni el tipo de dato de los parámetros que se reciben.

 ### Las funciones también son objetos
En JavaScript, las funciones son tratadas como objetos y se les puede asignar una declaración de función a una variable. Por lo tanto, las funciones pueden ser utilizadas de la misma manera que cualquier otro objeto y pueden ser pasadas como argumentos a otras funciones o asignadas como valores a las propiedades de objetos.

     const saludar= function(nombre){
          console.log("Hola", nombre)
     }



La podemos ejecutar de la misma forma que una función clásica.

### Nueva declaración de funciones
La sintaxis actual para declarar funciones en JavaScript permite declarar únicamente los parámetros y conectarlos con el cuerpo de la función usando el operador "=>" (conocido como flecha gorda o "fat arrow" en inglés).

Nuevo estilo (simplificado):  

     const saludar= (nombre)=>{
          console.log("Hola", nombre)
     }



Llamada a la función:  saludar("Pedro")  

En este ejemplo, la función "saludar" es declarada con un solo parámetro "nombre" y su cuerpo está conectado mediante el operador de flecha gorda. En este caso, la función simplemente imprime un saludo en la consola, pero podría realizar cualquier otra tarea que se desee.

La nueva sintaxis simplificada hace que la declaración de funciones sea más concisa y legible, lo que la hace más fácil de entender para aquellos que no están familiarizados con la sintaxis tradicional de JavaScript. Además, también hace que sea más fácil escribir funciones que devuelven valores, ya que no es necesario usar la palabra clave "return" en este caso.
### Funciones de un solo parámetro

En el caso de que la función reciba un solo parámetro, los paréntesis se vuelven opcionales, pudiendo escribir:

      const saludar= nombre=>{
          console.log("Hola", nombre)
          }




La función se podrá usar de la misma manera que las anteriores

### Funciones de una sola instrucción
En JavaScript, si el cuerpo de una función consiste en una única instrucción, las llaves para delimitar el cuerpo de la función se vuelven opcionales. En su lugar, el cuerpo puede ser escrito en la misma línea de la declaración de la función y el resultado de la única línea de instrucción se devuelve automáticamente como resultado de la función, como si tuviera un "return" adelante.

A esto se le conoce como "return implícito" y es una característica de la sintaxis simplificada de las funciones de flecha en JavaScript. Aquí te muestro un ejemplo:

     const saludar= nombre=> console.log("Hola", nombre)
          

En este caso la función devolvería “undefined” ya que console.log es de tipo void y por lo tanto no devuelve nada

### Return implícito
Un ejemplo de return implícito sería el siguiente:

     const promediar=(a,b)=>(a+b)/2
     const promedio=promediar(4,8)
     console.log(promedio)//6

## Callbacks
La capacidad de pasar funciones como parámetros a otras funciones se conoce como "Callbacks" y es una característica importante de JavaScript. Esto permite escribir código más genérico y reutilizable, ya que las funciones pueden ser diseñadas para trabajar con diferentes tipos de datos y comportamientos.

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


- un callback es una función que se pasa como argumento a otra función.

- La idea detrás de esto es que la función receptora (a la cual se le pasa el callback como argumento) pueda ejecutar la función que se le está pasando como parámetro en un momento específico. El objetivo principal de utilizar un callback es permitir que una función pueda ejecutarse después de que se haya completado una tarea asíncrona, como por ejemplo una solicitud a una API o una operación de lectura / escritura en un archivo.

## Algunas convenciones de los callbaks
- En JavaScript, el callback se suele colocar como el último parámetro en una función que acepta un callback.

- Normalmente, el callback es una función que acepta dos parámetros: un posible error (en caso de que haya ocurrido uno) y el resultado de la operación que se llevó a cabo.

- La función que acepta el callback, generalmente llama a este callback una vez que ha terminado de ejecutar todas sus operaciones.

- Si la operación fue exitosa, la función llamará al callback pasando null como primer parámetro y el resultado obtenido como segundo parámetro.

- Si la operación resultó en un error, la función llamará al callback pasando el error obtenido como primer parámetro y un segundo parámetro que puede ser nulo o contener información adicional sobre el error.

## Callbacks anidados

<image src="https://res.cloudinary.com/practicaldev/image/fetch/s--c0aEZX7m--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b8euo2n7twvgh3dbuatd.jpeg" alt="Descripción de la imagen">

- Es un fragmento de código en el que una función llama a un callback, y este a otro callback, y este a otro, y así sucesivamente.
- Son operaciones encadenadas, en serie.
- Si el nivel de anidamiento es grande, se puede producir el llamado callback hell ó infierno de callbacks. También se conoce como pyramid of doom ó pirámide de la perdición.

### ¡Atención!
A este tipo de estructura de código se le ha denominado callbacks hell o pyramid of doom, ya que las funciones se van encadenando de forma que la indentación del código se vuelve bastante prominente y dificulta la comprensión del mismo.

# Promesas
- En JavaScript, una Promesa es un objeto que encapsula una operación asincrónica y permite definir acciones a tomar después de que se haya completado dicha operación, dependiendo del resultado de la misma. Para ello, se pueden asociar manejadores que actuarán sobre un posible valor (resultado) en caso de éxito, o la razón del fallo (error) en caso de una falla.
- Al igual que con los callbacks, este mecanismo permite definir desde fuera de una función un bloque de código que se ejecutará dentro de esa función, pero a diferencia de los callbacks, en una Promesa se definen dos manejadores en lugar de uno solo. Esto permite evitar la complejidad de los callback hells, que se pueden producir cuando se anidan múltiples callbacks.

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
Cuando escribimos un programa en JavaScript, esperamos que las instrucciones se ejecuten secuencialmente, es decir, comenzando desde la primera línea y avanzando una por una de arriba hacia abajo hasta el final del bloque de código. Si una instrucción es una llamada a otra función, la ejecución se pausa y se procede a ejecutar esa función. Una vez que todas las instrucciones de esa función han sido ejecutadas, el programa retoma su flujo de ejecución a partir del punto en el que se pausó.

Este proceso se conoce como ejecución de código en una sola hebra (single-threaded execution), ya que todas las instrucciones se ejecutan en el mismo hilo de ejecución. Aunque esto puede ser eficiente para programas simples, puede resultar en problemas de rendimiento si se realizan operaciones costosas en términos de tiempo de procesamiento. Es por eso que JavaScript también soporta operaciones asincrónicas, que permiten que el programa continúe ejecutando otras tareas mientras espera que se completen las operaciones asincrónicas.

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

Cuando se está trabajando con funciones en JavaScript y se necesita acceder a recursos externos, como enviar un mensaje por la red o leer un archivo del disco, existen dos formas distintas de hacerlo: en forma bloqueante o en forma no bloqueante.

La forma bloqueante implica que la ejecución de la función se detiene hasta que se complete la operación de acceso al recurso externo. Esto significa que el hilo de ejecución se bloquea y no puede realizar ninguna otra tarea hasta que la operación de acceso al recurso se complete.

Por otro lado, la forma no bloqueante permite que la ejecución de la función continúe de forma inmediata sin esperar a que se complete la operación de acceso al recurso externo. En lugar de detener la ejecución de la función, se realiza una solicitud al recurso externo y se proporciona un manejador (callback) que se ejecutará cuando se complete la operación.
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



