/*
    Elabora un algotirmo que permita ingresar una cantidad ilimitada de tareas mediante un input y mostrarlo en una lista, 
    adicionalmente debe permitir marcar una tarea como completada y tambien eliminarla.
*/

// Realizamos la seleccion de los elementos interactuables de nuestro DOM.
let botonAgregar = document.getElementById("botonAgregar");
let listaTareas = document.getElementById("listaTareas");
let inputTarea = document.getElementById("inputTarea");
let tituloDeListaTareas = document.getElementById("tituloDeListaTareas");



// Funcion para actualizar el titulo de la lista de tareas
function actualizarTituloLista(){
    // Actualizamos nuevamente el valor del elemento de la lista de tareas.
    let listaTareas = document.getElementById("listaTareas");
    
    // validamos si la lista de tareas tiene tareas añadidas.
    // Para esto existen al menos 2 maneras de hacerlo.

    // Metodo 1: usando childElementCount, que retorna el número de elementos hijos de un elemento padre.
    if( listaTareas.childElementCount == 1 ){ tituloDeListaTareas.innerText = "Sin Tareas" }
    
    // Metodo 2: usando children que retorna un array de elementos hijos de un elemento padre.
    // Tambien se usa el metodo length para obtener el tamaño del array de elementos hijos.
    // if( listaTareas.children.length == 1 ){ tituloDeListaTareas.innerText = "Sin Tareas" }
};
actualizarTituloLista();



// Funcion para agregar una nueva tarea
function agregar(){

    // Actualizamos el titulo de la lista de tareas
    tituloDeListaTareas.innerText = "Tareas Actuales";


    if(inputTarea.value){

        // Se crean los elementos HTML que componen la nueva tarea
        let cajaDeNuevaTarea = document.createElement('div');
        let contenedorBotones = document.createElement('div');
        let spanTarea = document.createElement('span');
        let spanCompleto = document.createElement('span');
        let spanEliminar = document.createElement('span');
        let botonCompleto = document.createElement('button');
        let botonEliminar = document.createElement('button');

        // Se añaden las clases a los elementos HTML
        cajaDeNuevaTarea.classList.add("flex", "items-center", "justify-between", "gap-2", "bg-white/25", "rounded", "pr-2", "min-w-[50%]");
        contenedorBotones.classList.add("flex", "gap-2");
        spanTarea.classList.add("text-[#023030]", "font-bold", "text-[1.5rem]", "px-2", "py-1");
        spanCompleto.classList.add("material-symbols-outlined");
        spanEliminar.classList.add("material-symbols-outlined");
        botonCompleto.classList.add("flex", "items-center", "bg-white/75", "rounded", "text-[#023030]", "font-bold", "text-lg", "px-2", "py-1", "hover:bg-white/90");
        botonEliminar.classList.add("flex", "items-center", "bg-white/75", "rounded", "text-[#023030]", "font-bold", "text-lg", "px-2", "py-1", "hover:bg-white/90");

        // Se añade el contenido a los elementos HTML
        spanTarea.innerText = inputTarea.value;
        spanCompleto.innerText = "done";
        spanEliminar.innerText = "delete";

        // Se estructuran los elementos HTML en el orden adecuado
        botonCompleto.appendChild(spanCompleto);
        botonEliminar.appendChild(spanEliminar);
        contenedorBotones.appendChild(botonCompleto);
        contenedorBotones.appendChild(botonEliminar);

        // Una vez los elementos estan definidor se añaden al contenedor 
        cajaDeNuevaTarea.appendChild(spanTarea);
        cajaDeNuevaTarea.appendChild(contenedorBotones);
        
        // Se agrega la tarea al contenedor en el HTML
        listaTareas.appendChild(cajaDeNuevaTarea);
        inputTarea.value = "";

        // Evento para el boton Completado
        botonCompleto.addEventListener("click", ()=>{
            spanTarea.classList.add("line-through");
        });

        // Evento para eliminar una tarea (nodo)
        botonEliminar.addEventListener("click", ()=>{
            cajaDeNuevaTarea.remove();
            actualizarTituloLista();
        });
    }
}


// Agregamos el evento al boton de agregar tarea.
botonAgregar.addEventListener("click", agregar);

