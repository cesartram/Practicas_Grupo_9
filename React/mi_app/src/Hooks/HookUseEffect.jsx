
/* 
    ¿Que son Hooks?
    Los Hooks son funciones que retornan logica, permitiendo: 
    
    - Utilizar el estado y otros aspectos del ciclo de vida de los componentes en los componentes funcionales. 
    - Agregar comportamientos a los componentes. 

    Los Hooks más utilizados son useState, useEffect

    useEffect(): permite agregar efectos secundarios a los componentes funcionales.
    Es comunmente usado para procesos en segundo plano. 
    Un ejemplo de esto podría ser cualquier cosa que cambie el estado o afecte a la interfaz como un Reloj.

    useEffect toma dos argumentos/parametros, el primero es una función(callback) que se ejecuta cuando el componente se inicia 
    y el segundo es una lista de dependencias OPCIONALES que especifican qué variables deben cambiar para 
    que la función se ejecute, debido a esto se suele utilizar junto a useState().

    Dependencias: Las dependencias son un arreglo de valores que se utilizan para determinar cuándo se debe 
    volver a ejecutar la función de efecto secundario. Si alguna de las dependencias cambia, la función de 
    efecto secundario se ejecutará nuevamente.
*/

import { useState, useEffect } from "react";

const HookUseEffect = () => {

    const [contador, setContador] = useState(0); // 0 es el valor inicial de la variable contador

    //Se modifica el titulo del sitio con la funcion de efecto secundario useEffect()
    useEffect(
        function(){
            // Este setTimeout no es necesario pero se coloca en este ejemplo para emular un proceso asincrono
            // que comunmente se ejecuta en segundo plano como un reloj o un llamado a una API.
            setTimeout(function(){
                document.title = `Has pulsado ${contador} veces`;
            },2500);
        },[contador] // Esto es un array de dependencias
    );

    // Las dependencias permiten que se desenlace el efecto secundario.

    function cambiar(){
        setContador(contador + 1)
    };

    return ( 
        <div>
            <p>Has pulsado: {contador} veces</p>
            <button onClick={cambiar}>Incrementar</button>
        </div>
    );
}

export default HookUseEffect;