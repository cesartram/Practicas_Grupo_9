/*
    ¿Que es un Callback?
        Un callback es una función que se pasa a otra función como parametro
        y se invoca después de que algún evento o proceso ha terminado, de alli 
        el nombre callback que significa: llamar de vuelta.

        Es decir, la funcion receptora cuando es iniciada, recibe una funcion que viene definida 
        en los parametros y es iniciada o llamada dentro de la misma funcion receptora.
*/


// *** EJEMPLO 1 ***

// En este ejemplo, primero definimos una funcion que recibe como parametros un array y una funcion callback, 
// y un nuevo dato.

// creacion de la funcion "agregar_y_mostrar"

function agregar_y_mostrar(miArray, miCallback, nuevoDato){

     // Realizo un proceso con el array recibido como parametro
    miArray.push(nuevoDato);


    // Despues de hacer el proceso ejecuto el callback que es recibido por parametros,
    // este realizara un proceso con los resultados obtenidos en las lineas superiores de la funcion agregar(), 
    // el proceso que realiza el callback se define al iniciar la funcion agregar().
    miCallback();
};



// Defino el array que sera enviado por parametros.
let nombres = ["Key","Eduardo", "Brayan", "Semiramis", "Genesis", "Luis", "Juan", "Diego"];

console.log(nombres);





// Iniciando la funcion agregar_y_mostrar(miArray, miCallback, nuevoDato).
// El primer parametro es el array nombres.
// El segundo parametro es un callback, una funcion.
// Esta funcion va a llamar de vuelta (callback) datos de la funcion "agregar_y_mostrar".



// Metodo 1: Funcion de flecha
agregar_y_mostrar(nombres, ()=>{ console.log(nombres) }, "Marcos");



// Metodo 2: Funcion Anonima
agregar_y_mostrar(nombres, function(){ console.log(nombres) }, "Jean");



// Metodo 3: Funcion declarada

// Declaramos una funcion que se enviara como parametro de otra funcion.
function mostrar(){ console.log(nombres) };

agregar_y_mostrar(nombres, mostrar, "David");






// *** Ejemplo 2 *** (Realizar diferentes operaciones con un callback) 

// En este ejemplo se crea una funcion "operacion" que recibira 2 parametros y un callback,
// en su interior solo hay un retorno, en el cual asignará los 2 parametros (parametro1 y parametro2 ) recibidos dentro 
// del callback y lo ejecuta.

function operacion(parametro1, parametro2, parametroCallback){
    return ( parametroCallback(parametro1,parametro2) );
};



// En esta ocasion el callback suma los 2 parametros que recibe al ser iniciado en la funcion "operacion",
// realiza una logica que es definida en el mismo llamado de la funcion "operacion" y retorna un resultado.

let numero1 = 10;
let numero2 = 2;

operacion(numero1, numero2, function(a, b){  console.log(a + b) } );

operacion(5, 4, function(a,b){ console.log( a - b ) });

operacion(5, 4, function(a,b){ console.log( a * b ) });

operacion(5, 4, function(a,b){ console.log( a / b ) });

operacion(5, 4, function(a,b){ console.log( a ** b ) });

operacion(5, "5", function(a,b){ console.log( a === b ) });

operacion(5, 4, function(a,b){ console.log( a < b ) });

operacion(5, 4, function(a,b){ console.log( a > b ) });

operacion("Hola", "mundo", function(a,b){ console.log(`${a} ${b}!`)} );






// *** EJEMPLO 3 ***
/*
    Crea una función "iterarArray" que reciba un array y un callback. 
    La función debería iterar sobre el array e invocar el callback para cada elemento.

    NOTA: Esto seria un poco similar a la logica del funcionamiento interno de .map()
*/



//              index:0       index:1    index:2   index:3 index:4  index:5
let personas = ["Eduardo", "Semiramis", "Genesis", "Luis", "Juan", "Brayan"];


// Definicion de la funcion que posteriormente s eenviara como parametro, esta funcion sera el callback.
function saludarPersona(persona){
    console.log(persona)
};


// Funcion que emula el comportamiento de .map()

function iterarArray(array, miCallback){

    // En este ejemplo se usa for con un incremento tradicional para utilizar el valor de 
    // la variable "elemento" al realizar el llamado del indice en el array que coincida
    // con el ciclo actual.
    // El ciclo se repetira mientras "elemento" sea menor a la longitud del array.
    for( let elemento = 0; elemento < array.length; elemento++){
        miCallback(`Hola ${array[elemento]}!`);
    };
    
};


// Invocacion de la funcion iterarArray y envio de los parametros, el array(personas) y el callback (la funcion saludarPersona).
iterarArray(personas, saludarPersona);








/*** EJEMPLO 4 ***/
// Elabora una funcion permita añadir elementos a un carrito mediante llamado de callbacks recursivos utilizando funciones asincronas.

let carrito = "Carrito: 🛒";
"📦";
console.log(carrito);


// Funcion que agrega un producto al carrito tras 2 segundos y ejecuta un callback.
function agregarProducto(parametroCallback){
    // setTimeout en esta ocasion va a esperar que transcurran 2 segundos para ejecutar su logica interna.
    setTimeout(()=>{
        // Se añade el producto al carrito
        carrito += "📦";
        
        // Se ejecuta el callback
        parametroCallback();
    },2000) // 2000 representa el tiempo en milisegundos, 2000 = 2 segundos.
};



agregarProducto(
    ()=>{
        console.log(carrito);
        agregarProducto(
            ()=>{
                console.log(carrito);
                agregarProducto(
                    ()=>{
                        console.log(carrito);
                        agregarProducto(
                            ()=>{
                                console.log(carrito);
                                agregarProducto(
                                    ()=>{
                                        console.log(carrito);
                                        agregarProducto(
                                            ()=>{
                                                console.log(carrito);
                                                agregarProducto(
                                                    ()=>{
                                                        console.log(carrito);
                                                        agregarProducto(
                                                            ()=>{
                                                                console.log(carrito);
                                                                agregarProducto(
                                                                    ()=>{
                                                                        console.log(carrito);
                                                                    }
                                                                )
                                                            }
                                                        )
                                                    }
                                                )
                                            }
                                        )
                                    }
                                )
                            }
                        )
                    }
                )
            }
        )
    }
)






/*
    Hay varias razones por las que los callbacks pueden ser difíciles de entender:

    Conceptualización: Los callbacks son un concepto abstracto y pueden ser difíciles 
    de comprender para aquellos que están empezando en programación, incluso para los
    programadores con experiencia, toma algo de tiempo y practica dominarlos.


    Naturaleza asíncrona: Los callbacks son un mecanismo para controlar la asincronía, 
    lo cual puede ser un tema un poco desafiante para algunos programadores.


    Complejidad: A veces, los callbacks pueden ser parte de código complejo y anidado, lo que puede hacer 
    que sea difícil entender qué está sucediendo.


    Ausencia de una estructura definida: Los callbacks no siguen una estructura definida como, por ejemplo, 
    las funciones o los bucles, por lo que a veces pueden ser difíciles de seguir y rastrear.


    Sin embargo, con práctica y estudio, los callbacks pueden ser una herramienta muy útil tanto en JavaScript
    commo en otros lenguajes de programación. 
    
    NOTA: Es importante practicar con ejemplos y código propio para comprender realmente cómo funcionan.

    Te invito a que crees tus propios ejercicios y trates de escribir codigo conforme tu nivel de conocimiento
    lo permita, es normal si las primeras veces no obtienes el resultado deseado y sientes frustracion,
    pero no te rindas por eso, con el tiempo comenzaras a ver como poco a poco el concepto de callback 
    se vuelve parte de tu experiencia.

*/
