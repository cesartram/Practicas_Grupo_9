import { useEffect, useState } from "react";

const ApiSinKeyFetch = () => {

    // Creamos una variable de estado que se cargara con los datos de los personajes que
    // se reciban de la API.
    const [personajes, setPersonajes] = useState([]);
    const [pagina, setPagina] = useState(1);

    // Creamos el efecto secundario (asincrono) el cual ejecutara una busqueda en la API y cargara
    // la variable personajes con los datos obtenidos de la busqueda si se cumple la promesa,
    // sino, mostrara un mensaje de error.
    useEffect(() => {
        // Funcion nativa de JavaScript para realizar peticiones HTTP
        fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
            .then((respuesta) => { return respuesta.json() })
            .then((respuesta) => { 
                setPersonajes(respuesta.results); 
            })
            .catch((error) => { console.log(error) });
    },[pagina]);


    // Solo para asegurarnos de que los datos se recibieron correctamente
    // mostramos en la consola la variable personajes
    console.log(personajes);


    // Estilos en Tailwind
    const estilos = {
        boton: "font-bold bg-green-300 hover:bg-green-500 p-4 rounded-full"
    };


    return ( 
        <main className="min-h-screen bg-slate-300">
            <h1 className="text-4xl font-bold text-center py-8">Consumiendo API con Fetch y React</h1>
            <div className="grid grid-cols-4 gap-8 place-items-center mb-8">
                {
                    personajes.map(
                        (personaje) => (
                            <div key={personaje.id}>
                                <img src={personaje.image} alt={personaje.name} />
                                <p className="text-center font-semibold">{personaje.name}</p>
                                <p className="text-center font-semibold">{personaje.species}</p>
                                <p className="text-center font-semibold">{personaje.status}</p>
                            </div>
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

export default ApiSinKeyFetch;