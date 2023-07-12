/*
    Elabora un algotirmo que permita ingresar una cantidad ilimitada de tareas mediante un input y mostrarlo en una lista, 
    adicionalmente debe permitir marcar una tarea como completada y tambien eliminarla.
*/

// Realizamos la seleccion de los elementos interactuables de nuestro DOM.
let botonAgregar = document.getElementById("botonAgregar");
let listaTareas = document.getElementById("listaTareas");
let inputTarea = document.getElementById("inputTarea");



// // Creamos la clase que se utilizara para generar una tarea.
// class Tarea{
//     constructor(nombreTarea){
//         this.nombre = nombreTarea;
//     }
// }


// // Definimos el array que contendra las tareas.
// let arrayDeTareas = [];



// Contador de control de ids
let contador = 0;


// Agregamos el evento al boton de agregar tarea.
botonAgregar.addEventListener("click", ()=>{

    // Incrementamos el contador de control de ids
    contador++;

    if(inputTarea.value){
        let nuevaTarea = document.createElement('div');
        nuevaTarea.innerHTML = `
            <div id="tarea-${contador}" class="flex items-center justify-between gap-2 bg-white/25 rounded pr-2 min-w-[50%]">
                <span id="nombreTarea-${contador}" class="text-[#023030] font-bold text-[1.5rem] px-2 py-1">${inputTarea.value}</span> 
                <div class="flex gap-2">
                    <button id="completado-${contador}" class="flex items-center bg-white/75 rounded text-[#023030] font-bold text-lg px-2 py-1 hover:bg-white/90">
                        <span class="material-symbols-outlined">
                        done
                        </span>
                    </button>
                    <button id="eliminar-${contador}" class="flex items-center bg-white/75 rounded text-[#023030] font-bold text-lg px-2 py-1 hover:bg-white/90">
                        <span class="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </div>
            </div>`;
        listaTareas.appendChild(nuevaTarea);
        inputTarea.value = "";


        // Seleccionamos los botones usando una palabra estatica y concatenando un id dinamico.
        let botonCompletado = document.getElementById(`completado-${contador}`);
        let botonEliminar = document.getElementById(`eliminar-${contador}`);
        
        
        // Agregar eventos a los botones de Accion
        botonCompletado.addEventListener("click", ()=>{
            object.classList.add("line-through");
        });
        
        // Evento para eliminar una tarea (nodo)
        botonEliminar.addEventListener("click", ()=>{
            nuevaTarea.remove();
        });
    
    }
    
});