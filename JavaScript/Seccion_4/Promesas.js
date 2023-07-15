/*
    ¿Que son Promesas?
    Las promesas son la forma mas sencilla de manejar la asincronía.

    Pueden tener tres estados: 
        - Pendiente (pending): Cuando se esta ejecutando, es el estado inicial, ni cumplido ni rechazado.
        - Cumplida (fulfilled): Cuando la operacion se realiza satisaftoriamente.
        - Rechazada (rejected): Cuando la operacion fallo.

    Una promesa representa el resultado de una operación que aún no ha finalizado, pero que eventualmente 
    producirá un resultado o un error. Tal como en la vida cotidiana, una promesa es un hecho que estara
    pendiente y que puede cumplirse o no.

    Una vez que una promesa cambia a un estado cumplido o rechazado, su valor se mantiene y NO puede cambiar.


    Una promesa se crea usando la palabra clave new y la función constructora Promise ( new Promise() ).
    La función constructora recibe como argumento o parametro una función que acepta dos callbacks, 
    resolve y reject. 
        - resolve: nombre que se utiliza por convenio, y que se dedica a almacenar una respuesta satisfactoria.
        - reject: nombre que se utiliza por convenio, y que se dedica a almacenar una respuesta de error.

    La función que se pasa a la promesa debe realizar la operación asíncrona y, una vez terminada, 
    llamara a resolve si todo fue bien o a reject si ocurrió algún error.



    Sintaxis: 

    - Con funcion de flecha:
    const miPromesa = new Promise( (resolve,reject)=> { ... } );

    - Con funcion anonima:
    const miPromesa =  new Promise( function(resolve,reject){ ... } ); 



    Una vez creada la promesa, se pueden suscribir a ella los métodos .then y .catch.

    .then: es un metodo que recibe como argumento una función que será llamada cuando la 
    promesa se resuelva (es decir, cuando se llame a resolve) y se le pasará como argumento el resultado 
    de la operación asíncrona. 

    .catch: es un metodo que recibe como argumento una función que será llamada cuando la promesa sea 
    rechazada (es decir, cuando se llame a reject) y se le pasará como argumento el error producido.


    En resumen, las promesas permiten manejar de forma elegante y sencilla la asincronía en JavaScript, 
    permitiendo encadenar operaciones y controlar los errores de manera eficiente.

*/



// Ejemplo 1 (Promesa no asincrona que evalua igualdad de tipo de datos y retorna una respuesta).

const respuestaServidor = {
    status: 200,
    contenido:{
        id: 1,
        nombre: "Diego",
        apellido: "Rodriguez",
        edad: 27
    }
};

let datosRecibidos;


// 
const obtenerDatos = new Promise( (cumplido, fallado)=>{
    if( respuestaServidor.status === 200 ){
        cumplido( respuestaServidor.contenido );
    }else{
        fallado("Se rechazo la promesa, ocurrio algun error que no se esperaba.");
    }
});



obtenerDatos
    .then( data => {
        console.log(`Se recibio el siguiente objeto:`);
        console.log(data);
        datosRecibidos = data;
    })

    .then(
        ()=>{
            let parrafo1 = document.getElementById("parrafo1");
            let parrafo2 = document.getElementById("parrafo2");
            let parrafo3 = document.getElementById("parrafo3");
            let parrafo4 = document.getElementById("parrafo4");

            parrafo1.innerText = `ID: ${datosRecibidos.id}`;
            parrafo2.innerText = `Nombre: ${datosRecibidos.nombre}`;
            parrafo3.innerText = `Apellido: ${datosRecibidos.apellido}`;
            parrafo4.innerText = `Edad: ${datosRecibidos.edad}`;
        }
    )

    .catch(
        error => {
            console.log(`Ups, ocurrio el error: ${error}`);
        }
    );




// Ejemplo 2 (Promesa asincronica, usando setTimeout()).
// Es la misma promesa del ejemplo anterior solo que se ejecuta asincronicamente.


let datosRecibidos2;


// Se define la promesa y se usa setTimeout para emular el retraso que tiene normalmente un servidor.
const obtenerDatos2 = new Promise( (cumplido, fallado)=>{
    setTimeout( ()=>{
        if( respuestaServidor.status === 200 ){
            cumplido( respuestaServidor.contenido );
        }else{
            fallado("Se rechazo la promesa, ocurrio algun error que no se esperaba.");
        }
    },10000)
});



obtenerDatos2
    .then( data => {
        console.log(`Alfin! gracias a Dios se recibio el siguiente objeto despues de 10 segundos:`);
        console.log(data);
        datosRecibidos = data;
    })

    .then(
        ()=>{
            let parrafo1 = document.getElementById("parrafo1.2");
            let parrafo2 = document.getElementById("parrafo2.2");
            let parrafo3 = document.getElementById("parrafo3.2");
            let parrafo4 = document.getElementById("parrafo4.2");

            parrafo1.innerText = `ID: ${datosRecibidos.id}`;
            parrafo2.innerText = `Nombre: ${datosRecibidos.nombre}`;
            parrafo3.innerText = `Apellido: ${datosRecibidos.apellido}`;
            parrafo4.innerText = `Edad: ${datosRecibidos.edad}`;
        }
    )

    .catch(
        error => {
            console.log(`Ups, ocurrio el error: ${error}`);
        }
    );
