/* 
    ¿Que son Hooks?
    los Hooks son una característica que permite utilizar el estado y otras 
    características de React en componentes funcionales.
    
    ¿Que es el estado?
    El estado es un objeto que contiene la informacion que define un componente en cada momento 
    durante su ciclo de vida.
    
    En pocas palabras podriamos decir que Los Hooks son funciones especiales que se pueden usar para agregar 
    características a los componentes de React.
*/

// Importamos el Hook useState desde el core de React
import {useState} from 'react';

const HookUseState1 = () => {

    /*
        useState(): Es un Hook que permite agregar un estado local a los componentes funcionales. 
        Esto significa que se puede definir un estado inicial en un  componente y actualizarlo en 
        función de ciertas acciones o eventos. 
        
        El Hook useState toma un valor inicial y devuelve una matriz o array con dos elementos,
        el primer elemento es el valor del estado y el segundo es una función para actualizar el estado.
    */

    //    variable, modificador = valor inicial
    const [numero, setNumero] = useState(0);
    /*
        Esto es similar a declarar const numero = 0; y luego incrementarlo mediante una funcion, 
        solo que mas practico.
    */


    // funcion para incrementar el estado de la variable numero
    function incrementar(){
        setNumero(numero + 1);
    };

    return ( 
        <>
            <button onClick={incrementar} >Incrementar</button>
            
            {/* Para interpretar javascript dentro de las etiquetas HTML se deben colocar las llaves {} */}
            <p>Has pulsado: {numero} veces</p>
        </>
    );
}

export default HookUseState1;