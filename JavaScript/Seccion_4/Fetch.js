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



const buscar = fetch("https://rickandmortyapi.com/api/character/2");

// Esta variable la vamos a cargar cuando se obtengan los datos, es decir, cuando se resuelva la promesa.
let datosObtenidos;


try{

    buscar
        .then(
            (respuesta)=>{
                console.log("Respuesta cruda de la API")
                // Mostramos lo que recibimos antes de convertir el json a objeto.
                console.log(respuesta);

                // Convertimos el json a objeto con la funcion .json().
                return respuesta.json();
            }
        )

        .then(
            (respuestaEnJson)=>{
                let parrafoNombre = document.getElementById("nombre");
                let parrafoStatus = document.getElementById("status");
                let parrafoEspecie = document.getElementById("especie");
                let parrafoGenero = document.getElementById("genero");
                let parrafoLocalizacion = document.getElementById("localizacion");
                let imagenPersonaje = document.getElementById("imagen");

                parrafoNombre.innerText = `Nombre: ${respuestaEnJson.name}`;
                parrafoStatus.innerText = `Status: ${respuestaEnJson.status}`;
                parrafoEspecie.innerText = `Especie: ${respuestaEnJson.species}`;
                parrafoGenero.innerText = `Genero: ${respuestaEnJson.gender}`;
                parrafoLocalizacion.innerText = `Localizacion: ${respuestaEnJson.location.name}`;
                imagenPersonaje.src = respuestaEnJson.image;

                console.log("Esto es el JSON recibido luego de ser transformado a objeto:");
                // Se muestra la respuesta ya convertida a objeto.
                console.log(respuestaEnJson);
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




