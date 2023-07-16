/* 

    fetch() es una función de JavaScript que permite hacer peticiones HTTP (como GET o POST) 
    a un servidor y obtener una respuesta. 
    Esta función retorna una promesa que se resuelve con los datos de la respuesta.

    En resumen, fetch() es una herramienta poderosa y flexible que te permite interactuar con un 
    servidor y obtener datos dinámicos en tu aplicación web.


    Sintaxis:
    fetch("URL") palabra reservada fetch que entre parentesis y comillas contiene la ruta a consultar
    
    .then() contiene una funcion para tratar los datos, en este caso convertir 
    los datos recibidos en un formato json.
    
    .catch() contiene una funcion para tratar los errores, en este caso muestra un mensaje en consola.

*/



const buscar = fetch("https://rickandmortyapi.com/api/character/1");

// Esta variable la vamos a cargar cuando se obtengan los datos, es decir, cuando se resuelva la promesa.
let datosObtenidos;


try{

    buscar
        .then(
            (respuesta)=>{
                // Mostramos lo que recibimos antes de convertir el json a objeto.
                console.log(respuesta);

                // Convertimos el json a objeto.
                return respuesta.json();
            }
        )

        .then(
            (respuesta)=>{
                console.log("Esto es el JSON recibido luego de ser transformado a objeto:");
                // Se muestra la respuesta ya convertida a objeto.
                console.log(respuesta);
            }
        )

        .catch(
            (error)=>{
                console.error(error);
            }
        )



}catch(error){
    console.log("Se rechazo la promesa, ocurrio algun error que no se esperaba.");
    console.log(error);
}