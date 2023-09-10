import { useEffect, useState } from "react";
import axios from "axios";
import CartaPersonaje from "../Componentes/CartaPersonaje";

const ApiSinKeyAxios = () => {

    const [personajes, setPersonajes] = useState([]);
    const [pagina, setPagina] = useState(1);


    useEffect(()=> { 
        async function obtenerDatos(){
            const respuesta = await axios.get(`https://rickandmortyapi.com/api/character?page=${pagina}`);
            setPersonajes(respuesta.data.results);
            console.log(respuesta);
        }; 
        obtenerDatos();
    },[pagina]);


    // Estilos en Tailwind
    const estilos = {
        boton: "font-bold bg-green-300 hover:bg-green-500 p-4 rounded-full"
    };

    return ( 
        <main className="min-h-screen bg-slate-300">
            <h1 className="text-4xl font-bold text-center py-8">Consumiendo API con Axios y React</h1>
            <div className="grid grid-cols-4 gap-8 place-items-center mb-8">
                {
                    personajes.map(
                        (personaje) => (
                            <CartaPersonaje  propiedad1={personaje.id}  propiedad2={personaje.image} propiedad3={personaje.name}  propiedad4={personaje.species} propiedad5={personaje.status}/>
                        )
                    )
                }
            </div>

            {/* Seccion de Paginacion */}
            <section className="flex justify-center h-[150px]">
                <div className="flex flex-col items-center py-8 gap-4 w-[500px] bg-black/25 rounded-2xl">
                    <p className="font-bold">Paginacion</p>
                    <div className="flex gap-3">
                        {/* Boton de primera pagina */}
                        <button className={estilos.boton} onClick={
                            () => {
                                setPagina(1)
                                console.log(`Pagina anterior: ${pagina}`)
                            }
                        }>Primera</button>

                        {/* Boton de pagina anterior */}
                        <button className={estilos.boton} onClick={
                            () => {
                                (pagina === 1)
                                    ? setPagina(42)
                                    : setPagina(pagina - 1)
                                console.log(`Pagina anterior: ${pagina}`)
                            }
                        }>Anterior</button>

                        {/* Boton de pagina siguiente */}
                        <button className={estilos.boton} onClick={
                            () => {
                                (pagina === 42)
                                ? setPagina(1)
                                : setPagina(pagina + 1)
                                console.log(`Pagina anterior: ${pagina}`)
                            }
                            
                        }>Siguiente</button>

                        {/* Boton de ultima pagina */}
                        <button className={estilos.boton} onClick={
                            () => {
                                setPagina(42)
                                console.log(`Pagina anterior: ${pagina}`)
                            }
                        }>Ultima</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ApiSinKeyAxios;