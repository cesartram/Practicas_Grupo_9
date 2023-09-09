/*
    Elabora una app que permita registrar los elementos de un input 
    en un array para luego mostrarlos en pantalla.

    Se debe utilizar selectores, eventos, metodos de arrays.
*/

let boton = document.getElementById("botoncito");
let boton2 = document.getElementById("botoncito2");

// Ejemplo usando querySelector y id
// let boton2 = document.querySelector("#botoncito");


// definimos un array para almacenar los elementos del input
let nombres = [];
let nombres2 = [];
let apellidos = [];
let apellidos2 = [];

boton.addEventListener("click", ()=>{
    
    // Capturamos la informacion del input al momento de presionar el boton.
    let nombre = document.getElementById("nombre");
    let nombre2 = document.getElementById("nombre2");
    let apellido = document.getElementById("apellido");
    let apellido2 = document.getElementById("apellido2");

    // Evaluamos que los imputs de verdad tengan informacion.
    if(nombre.value != "" && nombre2.value != "" && apellido.value != "" && apellido2.value != ""){
        // Se añade el valor de los input nombre al array
        nombres.push(nombre.value);
        nombres2.push(nombre2.value);
        
        // Se añade el valor de los input apellido al array
        apellidos.push(apellido.value);
        apellidos2.push(apellido2.value);
        
        // Se limpian los inputs
        nombre.value = "";
        nombre2.value = "";
        apellido.value = "";
        apellido2.value = "";
    }else{
        alert("Asegurate de llenar el campo");
    };
});

boton2.addEventListener("click", ()=>{
    // mostramos los elemetos del array en el section que esta en blanco en la pagina
    let lista = document.getElementById("lista");
    
    // Etiquetas para crear tablas en HTML
    // table: crea una tabla
    // tr: crea una fila
    // td: crea una celda
    let tabla = document.createElement("table");

    // usando map
    nombres.map(
        (nombre, i)=>{
            let fila = document.createElement("tr");
            let celdaNombre = document.createElement("td");
            let celdaNombre2 = document.createElement("td");
            let celdaApellido = document.createElement("td");
            let celdaApellido2 = document.createElement("td");

            // Añadimos el contenido a las celdas
            celdaNombre.innerText = nombre;
            celdaNombre2.innerText = nombres2[i];
            celdaApellido.innerText = apellidos[i];
            celdaApellido2.innerText = apellidos2[i];

            // Añadimos las celdas a la fila
            fila.appendChild(celdaNombre);
            fila.appendChild(celdaNombre2);
            fila.appendChild(celdaApellido);
            fila.appendChild(celdaApellido2);

            // Añadimos la fila a la tabla
            tabla.appendChild(fila);
        }
    );

    // Añadimos la tabla al section
    lista.appendChild(tabla);

    // Usando forEach
    // nombres.forEach(
    //     (nombre)=>{
    //         console.log(nombre);
    //     }
    // );


    // Usando for of
    // for(let nombre of nombres){
    //     console.log(nombre);
    // };


    // usando un for tradicional
    // for(let i = 0; i < nombres.length; i++){
    //     console.log(nombres[i]);
    // };




});