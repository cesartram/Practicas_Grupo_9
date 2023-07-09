/* 
    Try - Catch: es una estructura de control de excepciones que permite probar código para 
    detectar errores y, en caso de que se produzca una excepción, ejecutar un bloque de código 
    de manejo de excepciones para manejar el error.

    Try - Catch: se compone de dos bloques principales (try-catch) y un tercer bloque opcional (finally).

    - El bloque "try" contiene el código que se está probando para errores.
    - El bloque "catch" contiene el código que se ejecutará en caso de que se produzca una excepción.

    ¿Qué es una Excepción?
    Una excepción es un evento anormal que ocurre durante la ejecución de un programa y que interrumpe 
    el flujo normal de la ejecución, puede ser tratado para prevenir errores graves con try-catch.
    Esto permite la continuidad ininterrumpida en la ejecucion del codigo en caso de existir
    algun error en el proceso.


    Excepciones comunes:

    - ReferenceError: Se produce cuando se hace referencia a una variable o funcion no definida. 
    (Hoistin)
    
    - TypeError: Se produce cuando un operador o función es invocado en un objeto que no es válido para ese tipo de operación o función. 
    (restar String y Entero)
    
    - SyntaxError: Se produce cuando hay un error de sintaxis en el código. 
    (El mas comun ya sea por falta de llaves "{}", coma "," o punto y coma ";)
*/



//Ejemplo try-catch (Capturar el error al llamar variable no declarada);


// let miVariable = "Diego";
// console.log(miVariable);
// console.log("Hola este es otro mensaje");


try{
    console.log(miVariable);
}catch(error){
    console.log(`Ocurrio el error: ${error}`);
};


console.log("Hola este es otro mensaje");






/*
    "Finally" es una clausula opcional, no es una propiedad ni un método como tal, sino una parte presindible
    de la sintaxis de la estructura de control Try-Catch.
*/

// let persona = {
//     nombre:"Diego",
//     apellido:"Rodriguez"
// }

//Ejemplo try-catch-finally (Accediendo a una propiedad de un objeto);

try{
    console.log(persona.nombre);
}catch(err){
    console.log(`Ocurrio el error -> ${err}`);
}finally{
    console.log("Este mensaje se muestra sin importar lo que suceda con try o catch");
};



// Podemos ejecutar try-catch dentro de una funcion o viceversa.
function verPropiedad(){
    //Intentar hacer:
    try {
        console.log(persona.nombre);
    }
    //Capturar el error/Excepcion que le remite try en caso de que suceda.
    catch(err) {
        console.log(`Ocurrio el error -> ${err}`);
    }finally {
        console.log("La ejecucion no se interrumpio gracias a Try-Catch");
    }
};

verPropiedad();







// Ejercicio 1
// Elabora una funcion que pruebe un bloque y retorne la excepcion en el bloque catch en caso de existir.








// Ejercicio 2
// Realiza una funcion con try-catch que intente multiplicar 2 numeros y en caso de surgir
// una excepcion, el bloque catch mostrara cual fue la excepcion obtenida.
// Sino, una vez finalizado el try-catch la funcion debe retornar un mensaje que diga:
// La multiplicacion de (numero1) x (numero2) = (multiplicar).