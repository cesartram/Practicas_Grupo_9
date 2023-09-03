import { useState } from "react";

const HookUseState2 = () => {

    const [nombre, setNombre] = useState("Diego");

    function actualizarNombre(e){
        setNombre(e.target.value);
    };
    
    return ( 
        <>
            <input type="text" onChange={actualizarNombre} placeholder={nombre}/>

            <p>Hola, me llamo {nombre} y vivo en Venezuela</p>
        </>
    );
};

export default HookUseState2;