import ImagenPH from "../Media/placeholder.png"

const Carta = (props) => {
    return ( 
        <div className={props.estilos || "bg-blue-500 font-bold text-xl"}>
            <img className="w-[150px] aspect-[1/1]" src={props.imagen || ImagenPH} alt={props.altText || "Indefinido"} />
            <p>nombre: {props.nombre || "Indefinido"}</p>
            <p>apellido: {props.apellido || "Indefinido"}</p>
            <p>edad: {props.edad || "Indefinido"}</p>
            <p>ciudad: {props.ciudad || "Indefinido"}</p>
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
//         </div>
//     );
// };

export default Carta;