import Carta from "../Componentes/Carta";
import imagen1 from "../Media/1.jpg";
import imagen2 from "../Media/2.png";
import imagen3 from "../Media/3.png";
import imagen4 from "../Media/4.png";
import imagen5 from "../Media/5.png";
import imagen6 from "../Media/6.png";
import imagen7 from "../Media/7.jpg";
import imagen8 from "../Media/8.jpg";

const Perfil = () => {

    const estilos = {
        carta8: "bg-pink-500 font-bold text-xl",
        carta2: "bg-orange-500 font-bold text-xl",
        carta3: "bg-blue-500 font-bold text-xl",
        carta4: "bg-green-500 font-bold text-xl", 
        carta5: "bg-yellow-500 font-bold text-xl"
    }

    return ( 
        <main className="min-h-screen">
            <h1>Perfil de usuario</h1>
            <div className="grid grid-cols-4 gap-4">
                {/* Llalamos el componente 8 veces don datos diferentes */}
                <Carta altText="Diego" estilos="bg-red-500 font-bold text-xl" nombre="Diego" apellido="Rodriguez" edad="27"/>
                <Carta imagen={imagen2} estilos={estilos.carta2}  apellido="Gomez" edad="25" ciudad="Caracas"/>
                <Carta estilos={estilos.carta3} nombre="Juan" apellido="Perez" edad="25" ciudad="Santiago de Chile"/>
                <Carta imagen={imagen4} estilos={estilos.carta4} nombre="Diana" edad="20" ciudad="Maracaibo"/>
                <Carta imagen={imagen5} estilos={estilos.carta5} nombre="Daniela" apellido="Gomez" edad="25" ciudad="Caracas"/>
                <Carta estilos={estilos.carta8} nombre="Luis" apellido="Zambrano" ciudad="Maracaibo"/>
                <Carta altText="Diego" estilos="bg-red-500 font-bold text-xl" nombre="Diego" apellido="Rodriguez" edad="27"/>
                <Carta imagen={imagen2} estilos={estilos.carta2}  apellido="Gomez" edad="25" ciudad="Caracas"/>
                <Carta estilos={estilos.carta3} nombre="Juan" apellido="Perez" edad="25" ciudad="Santiago de Chile"/>
                <Carta imagen={imagen4} estilos={estilos.carta4} nombre="Diana" edad="20" ciudad="Maracaibo"/>
                <Carta imagen={imagen5} estilos={estilos.carta5} nombre="Daniela" apellido="Gomez" edad="25" ciudad="Caracas"/>
                <Carta estilos={estilos.carta8} nombre="Luis" apellido="Zambrano" ciudad="Maracaibo"/>
                <Carta altText="Diego" estilos="bg-red-500 font-bold text-xl" nombre="Diego" apellido="Rodriguez" edad="27"/>
                <Carta imagen={imagen2} estilos={estilos.carta2}  apellido="Gomez" edad="25" ciudad="Caracas"/>
                <Carta estilos={estilos.carta3} nombre="Juan" apellido="Perez" edad="25" ciudad="Santiago de Chile"/>
                <Carta imagen={imagen4} estilos={estilos.carta4} nombre="Diana" edad="20" ciudad="Maracaibo"/>
                <Carta imagen={imagen5} estilos={estilos.carta5} nombre="Daniela" apellido="Gomez" edad="25" ciudad="Caracas"/>
                <Carta estilos={estilos.carta8} nombre="Luis" apellido="Zambrano" ciudad="Maracaibo"/>
                <Carta altText="Diego" estilos="bg-red-500 font-bold text-xl" nombre="Diego" apellido="Rodriguez" edad="27"/>
                <Carta imagen={imagen2} estilos={estilos.carta2}  apellido="Gomez" edad="25" ciudad="Caracas"/>
                <Carta estilos={estilos.carta3} nombre="Juan" apellido="Perez" edad="25" ciudad="Santiago de Chile"/>
                <Carta imagen={imagen4} estilos={estilos.carta4} nombre="Diana" edad="20" ciudad="Maracaibo"/>
                <Carta imagen={imagen5} estilos={estilos.carta5} nombre="Daniela" apellido="Gomez" edad="25" ciudad="Caracas"/>
                <Carta estilos={estilos.carta8} nombre="Luis" apellido="Zambrano" ciudad="Maracaibo"/>
                <Carta altText="Diego" estilos="bg-red-500 font-bold text-xl" nombre="Diego" apellido="Rodriguez" edad="27"/>
                <Carta imagen={imagen2} estilos={estilos.carta2}  apellido="Gomez" edad="25" ciudad="Caracas"/>
                <Carta estilos={estilos.carta3} nombre="Juan" apellido="Perez" edad="25" ciudad="Santiago de Chile"/>
                <Carta imagen={imagen4} estilos={estilos.carta4} nombre="Diana" edad="20" ciudad="Maracaibo"/>
                <Carta imagen={imagen5} estilos={estilos.carta5} nombre="Daniela" apellido="Gomez" edad="25" ciudad="Caracas"/>
                <Carta estilos={estilos.carta8} nombre="Luis" apellido="Zambrano" ciudad="Maracaibo"/>
                <Carta altText="Diego" estilos="bg-red-500 font-bold text-xl" nombre="Diego" apellido="Rodriguez" edad="27"/>
                <Carta imagen={imagen2} estilos={estilos.carta2}  apellido="Gomez" edad="25" ciudad="Caracas"/>
                <Carta estilos={estilos.carta3} nombre="Juan" apellido="Perez" edad="25" ciudad="Santiago de Chile"/>
                <Carta imagen={imagen4} estilos={estilos.carta4} nombre="Diana" edad="20" ciudad="Maracaibo"/>
                <Carta imagen={imagen5} estilos={estilos.carta5} nombre="Daniela" apellido="Gomez" edad="25" ciudad="Caracas"/>
                <Carta estilos={estilos.carta8} nombre="Luis" apellido="Zambrano" ciudad="Maracaibo"/>
                <Carta altText="Diego" estilos="bg-red-500 font-bold text-xl" nombre="Diego" apellido="Rodriguez" edad="27"/>
                <Carta imagen={imagen2} estilos={estilos.carta2}  apellido="Gomez" edad="25" ciudad="Caracas"/>
                <Carta estilos={estilos.carta3} nombre="Juan" apellido="Perez" edad="25" ciudad="Santiago de Chile"/>
                <Carta imagen={imagen4} estilos={estilos.carta4} nombre="Diana" edad="20" ciudad="Maracaibo"/>
                <Carta imagen={imagen5} estilos={estilos.carta5} nombre="Daniela" apellido="Gomez" edad="25" ciudad="Caracas"/>
                <Carta estilos={estilos.carta8} nombre="Luis" apellido="Zambrano" ciudad="Maracaibo"/>
                <Carta altText="Diego" estilos="bg-red-500 font-bold text-xl" nombre="Diego" apellido="Rodriguez" edad="27"/>
                <Carta imagen={imagen2} estilos={estilos.carta2}  apellido="Gomez" edad="25" ciudad="Caracas"/>
                <Carta estilos={estilos.carta3} nombre="Juan" apellido="Perez" edad="25" ciudad="Santiago de Chile"/>
                <Carta imagen={imagen4} estilos={estilos.carta4} nombre="Diana" edad="20" ciudad="Maracaibo"/>
                <Carta imagen={imagen5} estilos={estilos.carta5} nombre="Daniela" apellido="Gomez" edad="25" ciudad="Caracas"/>
                <Carta estilos={estilos.carta8} nombre="Luis" apellido="Zambrano" ciudad="Maracaibo"/>
                <Carta altText="Diego" estilos="bg-red-500 font-bold text-xl" nombre="Diego" apellido="Rodriguez" edad="27"/>
                <Carta imagen={imagen2} estilos={estilos.carta2}  apellido="Gomez" edad="25" ciudad="Caracas"/>
                <Carta estilos={estilos.carta3} nombre="Juan" apellido="Perez" edad="25" ciudad="Santiago de Chile"/>
                <Carta imagen={imagen4} estilos={estilos.carta4} nombre="Diana" edad="20" ciudad="Maracaibo"/>
                <Carta imagen={imagen5} estilos={estilos.carta5} nombre="Daniela" apellido="Gomez" edad="25" ciudad="Caracas"/>
                <Carta estilos={estilos.carta8} nombre="Luis" apellido="Zambrano" ciudad="Maracaibo"/>
                <Carta/>
            </div>
            <div>
                <a href="http://github.com/haonter">Ver GitHub</a>
                <a href="http://instagram.com/didacusdev">Ver Instagram 1</a>
                <a href="http://instagram.com/lexpinonline">Ver Instagram 2</a>
            </div>
        </main>
    );
}

export default Perfil;