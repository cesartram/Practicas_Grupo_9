/* 
    Async-Await es en escencia lo mismo que las promesas, azucar sintactica, es decir es una manera
    mas facil de interpretar las promesas, sin dejar de ser un proceso asincronico.
*/


// Ejemplo 1

//Variable que contiene datos (Simula un servidor)
const datosServidor = [
    {
        nombre:"Diego",
        apellido:"Rodriguez",
        genero:"Hombre",
        imagen: "https://avatars.githubusercontent.com/u/101908524?v=4"
    },
    {
        nombre:"Genesis",
        apellido:"Piñango",
        genero:"Mujer",
        imagen: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/845.jpg"
    },
    {
        nombre:"Ali",
        apellido:"Guerrero",
        genero:"Hombre",
        imagen: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1020.jpg"
    },
    {
        nombre:"Luis",
        apellido:"Zambrano",
        genero:"Hombre",
        imagen: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg"
    },
    {
        nombre:"Eduardo",
        apellido:"Avila",
        genero:"Hombre",
        imagen: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1022.jpg"
    },
    {
        nombre:"Brayan",
        apellido:"Gamboa",
        genero:"Hombre",
        imagen: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1021.jpg"
    },
    {
        nombre:"Semiramis",
        apellido:"Hernandez",
        genero:"Mujer",
        imagen: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/710.jpg"
    }
];



// Promesa de obtencion de datos
function obtenerDatos(){
    // Array que se cargara con los datos obtenidos del servidor, en caso de que se encuentren. 
    // (en este ejemplo se emula con una variable llamada datosServidor)
    let misDatos2= [];

    // El retorno de esta funcion es la respuesta de una promesa que busca los datos en el servidor. 
    // (en este ejemplo se emula con una variable llamada datosServidor)
    return new Promise( (cumplido, fallado)=>{
        // Emulamos el retraso del servidor usando la funcion setTimeout, y le asignamos 5000 milisegundos (5 Segundos)
        setTimeout(()=>{
            // Condicion que evalua si hay datos en el servidor.
            // midiento la longitud de los indice de la variable "datosServidor".
            if( datosServidor.length > 0 ){
                // Se mapea la variable "datosServidor" y se añade cada indice al array misDatos2.
                datosServidor.map(
                    (indiceObtenido)=> { 
                        misDatos2.push(indiceObtenido); 
                    }
                )
                // Cuando se termine de mapear el array misDatos2, se ejecuta la funcion cumplido y se retorna la respuesta de la promesa.
                cumplido( misDatos2 );
            }
            // Si la longitud del array datosServidor es 0, se ejecuta la funcion fallado.
            else{
                // Se ejecuta la funcion fallado y se envia un mensaje de error al cliente (usuario).
                fallado("Se rechazo la promesa, ocurrio algun error que no se esperaba.");
            }
        },5000) // Se asigna 5000 milisegundos (5 Segundos)
    });
};



// Funcion que espera la promesa "obtenerDatos" se cumpla para mostrar los datos
// (Esto simula el tiempo de espera entre el cliente y el servidor).

async function buscarDatos(){
    const datosRecibidos = await obtenerDatos();
    try{
        // console.table(datosRecibidos);
        // console.log(datosRecibidos);
        // console.log(datosRecibidos[0].nombre);
        // console.log(datosRecibidos[0].apellido);
        // console.log(datosRecibidos[0].genero);
        // console.log(datosRecibidos[0].imagen);

        let contenedorDatos = document.getElementById("contenedorDatos");

        datosRecibidos.map(
            (indiceObtenido)=>{
                // Creamos un nuevo div, el cual cargaremos con los pararfos y la imagen
                // que se llenaran con los datos obtenidos del servidor.
                let nuevoDiv = document.createElement("div");

                // Creamos los parrafos y la imagen que se añadiran al div recien creado.
                let nuevoParrafo1 = document.createElement("p");
                let nuevoParrafo2 = document.createElement("p");
                let nuevoParrafo3 = document.createElement("p");
                let imagen = document.createElement("img");


                // Cargamos los elementos que acabamos de crear.
                nuevoParrafo1.innerText = `Nombre: ${indiceObtenido.nombre}`;
                nuevoParrafo2.innerText = `Apellido: ${indiceObtenido.apellido}`;
                nuevoParrafo3.innerText = `Genero: ${indiceObtenido.genero}`;
                imagen.src = indiceObtenido.imagen;


                // Agregamos los elementos ya con contenido asignado al div.
                nuevoDiv.appendChild(imagen);
                nuevoDiv.appendChild(nuevoParrafo1);
                nuevoDiv.appendChild(nuevoParrafo2);
                nuevoDiv.appendChild(nuevoParrafo3);


                // Damos estilos a cada elemento por igual.
                nuevoDiv.classList.add("flex", "flex-col", "items-center", "col-span-1");
                imagen.classList.add("rounded", "w-[250px]");
                nuevoParrafo1.classList.add("font-semibold");
                nuevoParrafo2.classList.add("font-semibold");
                nuevoParrafo3.classList.add("font-semibold");

                // Añadimos el nuevo div que ahora contiene los elementos (img, p, p, p).
                // al section con el id "contenerDatos". 
                contenedorDatos.appendChild(nuevoDiv);
            }
        )



    }catch(error){
        console.error(`Ups, ocurrio el error:`);
        console.error(error);
    }
};


buscarDatos();



console.log("Esto esta originalmente en el codigo despues de las funciones asincronas, sin embargo se muestra de primero en consola.")
console.log("Al igual que esto")
console.log("Al igual que esto tambien")
console.log("y tambien esto")



// <img id="imagen2" src="" alt="imagen">
// <p id="parrafo2.2">Nombre: </p>
// <p id="parrafo3.2">Apellido: </p>
// <p id="parrafo4.2">Edad: </p>