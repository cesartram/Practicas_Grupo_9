// Seleccionamos todos los elementos manipilables en el DOM
let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
let boton4 = document.getElementById("boton4");
let boton5 = document.getElementById("boton5");
let boton6 = document.getElementById("boton6");
let boton7 = document.getElementById("boton7");
let boton8 = document.getElementById("boton8");
let boton9 = document.getElementById("boton9");
let boton0 = document.getElementById("boton0");
let botonPunto = document.getElementById("punto");
let botonSumar = document.getElementById("sumar");
let botonRestar = document.getElementById("restar");
let botonMultiplicar = document.getElementById("multiplicar");
let botonDividir = document.getElementById("dividir");
let botonLimpiar = document.getElementById("limpiar");
let botonRetroceder = document.getElementById("retroceder");
let botonIgual = document.getElementById("igual");
let campoInput = document.getElementsByTagName("input")[0];
let resultado = document.getElementsByTagName("span")[0];


// Manejadores de Eventos (Funciones)

// la función eval() permite evaluar una expresión matemática.
function realizarOperacion(){
    resultado.innerText = eval(campoInput.value);
    
    // Aplicamos recursividad para llamar a la función que limpia en imput.
    limpiar();
};

function retroceder(){
    let contenido = campoInput.value;
    campoInput.value = contenido.slice(0,-1);
};

function limpiar(){
    campoInput.value = "0";
};

function limpiarTodo(){
    campoInput.value = "0";
    resultado.innerText = "0";
};

// Eventos a botones especiales
botonIgual.addEventListener("click", realizarOperacion);
botonPunto.addEventListener("click", ()=> campoInput.value += ".");
botonSumar.addEventListener("click", ()=> campoInput.value += "+");
botonRestar.addEventListener("click", ()=> campoInput.value += "-");
botonMultiplicar.addEventListener("click", ()=> campoInput.value += "*");
botonDividir.addEventListener("click", ()=> campoInput.value += "/");
botonLimpiar.addEventListener("click", limpiarTodo);
botonRetroceder.addEventListener("click", retroceder);

// Eventos a botones numericos
boton0.addEventListener("click", ()=> campoInput.value += "0");
boton1.addEventListener("click", ()=> campoInput.value += "1");
boton2.addEventListener("click", ()=> campoInput.value += "2");
boton3.addEventListener("click", ()=> campoInput.value += "3");
boton4.addEventListener("click", ()=> campoInput.value += "4");
boton5.addEventListener("click", ()=> campoInput.value += "5");
boton6.addEventListener("click", ()=> campoInput.value += "6");
boton7.addEventListener("click", ()=> campoInput.value += "7");
boton8.addEventListener("click", ()=> campoInput.value += "8");
boton9.addEventListener("click", ()=> campoInput.value += "9");