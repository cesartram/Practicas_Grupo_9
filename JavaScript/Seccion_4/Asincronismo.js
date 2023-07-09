/* 
    ¿Qué es el asincronismo?
    El asincronismo es una técnica que permite a los programas ejecutar tareas de manera no bloqueante. 
    Esto permite que el programa puede continuar con otras tareas mientras se completa una tarea asíncrona, 
    en lugar de bloquearse y esperar a que se complete.

    El asincronismo es fundamental para mejorar la experiencia del usuario y mejorar la eficiencia del 
    programa, especialmente cuando se trata de tareas que pueden tardar un tiempo en completarse, como 
    las solicitudes de red, manejo de Bases de Datos y consumo de API´s.

    Hay varias formas de lograr el asincronismo, como promesas, async-await, setTimeout, setInterval
    y la utilización de eventos, cada uno de estos enfoques ofrece diferentes ventajas y desventajas 
    y puede ser apropiado en función del uso que se le quiera dar.

    Para resumir, el asincronismo es una técnica esencial para mejorar la experiencia del usuario y 
    la eficiencia del programa.
*/



let parrafo = document.getElementById("parrafo");
let imagen = document.getElementById("imagen");


// setTimeout(): Es una funcion asincrona que realiza UNA SOLA ACCION luego de transcurrido el tiempo indicado.
setTimeout(
    ()=>{
        parrafo.innerText = "Este es el perrito3.avif";
        imagen.src = "./IMG/perrito3.avif";
    }, 3000
);


// Asincronismo anidado
setTimeout(
    function(){
        parrafo.innerText = "Este es el perrito4.avif";
        imagen.src = "./IMG/perrito4.avif";
        setTimeout(
            function(){
                parrafo.innerText = "Este es el perrito5.jpg";
                imagen.src = "./IMG/perrito5.jpg";
            }, 3000
        );
    }, 7000
);




// setInterval(): Realiza una accion CADA cierto tiempo indefinidamente.
// O hasta que se detenga usando clearInterval().
let procesoAsincrono = setInterval(()=>{
    let contador = document.getElementById("contador");
    contador.innerText = +(contador.innerText) + 1;
    }, 1000
);



// clearInterval(): Detiene la ejecucion de un setInterval.
setTimeout(
    ()=>{
        clearInterval(procesoAsincrono);
    },15000
);





// Ejercicios para realizar en casa.


// Ejercicio: Crea un contador regresivo que imprima los números del 10 al 1.

// Ejercicio: Crea un temporizador que imprima un mensaje que cambie de color de letra
// y que diga "alerta queda poco tiempo de uso" cada 5 segundos durante 60 segundos.
