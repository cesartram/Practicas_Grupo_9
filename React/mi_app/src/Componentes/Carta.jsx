import ImagenPH from "../Media/placeholder.png"
import HookUseState1 from "../Hooks/HookUseState1";
import { useState } from "react";

const Carta = (props) => {

    const [tamano, setTamano] = useState(150);
    const [color, setColor] = useState("red");

    const estilos = {
        talla : `w-[${tamano}px] aspect-[1/1]`,
        parrafo: `text-${color}-700`
    };

    function actualizarTalla(evento){
        console.log(evento.target.value);
        setTamano(evento.target.value);
    };

    function actualizarColor(evento){
        console.log(evento.target.value);
        setColor(evento.target.value);
    };

    return ( 
        <div className={props.estilos || "bg-blue-500 font-bold text-xl"}>
            <img className={estilos.talla} src={props.imagen || ImagenPH} alt={props.altText || "Indefinido"} />
            <p className={estilos.parrafo} >nombre: {props.nombre || "Indefinido"}</p>
            <p className={estilos.parrafo} >apellido: {props.apellido || "Indefinido"}</p>
            <p className={estilos.parrafo} >edad: {props.edad || "Indefinido"}</p>
            <p  className={estilos.parrafo} >ciudad: {props.ciudad || "Indefinido"}</p>
            <input type="text" placeholder="Ingrese tamaño" onChange={actualizarTalla}/>
            <input type="text" placeholder="Ingrese color" onChange={actualizarColor}/>
            <HookUseState1/>
        </div>
    );
};



// Sin usar props, solo los nombres de los parametros

// const Carta = ({estilos, imagen, altText, nombre, apellido, edad, ciudad}) => {
//     return ( 
//         <div className={estilos}>
//             <img className="w-[150px] aspect-[1/1]" src={imagen} alt={altText} />
//             <p>nombre: {nombre}</p>
//             <p>apellido: {apellido}</p>
//             <p>edad: {edad}</p>
//             <p>ciudad: {ciudad}</p>
//             <HookUseState1/>
//         </div>
//     );
// };

export default Carta;