import { useEffect, useState } from "react";

const ApiSinKeyFetch = () => {

    // Creamos una variable de estado que se cargara con los datos de los personajes que
    // se reciban de la API.
    const [personajes, setPersonajes] = useState(["vacio por ahora"]);


    // Creamos el efecto secundario (asincrono) el cual ejecutara una busqueda en la API y cargara
    // la variable personajes con los datos obtenidos de la busqueda si se cumple la promesa,
    // sino, mostrara un mensaje de error.
    useEffect(() => {
        // Funcion nativa de JavaScript para realizar peticiones HTTP
        fetch(`https://rickandmortyapi.com/api/character/`)
            .then((respuesta) => { return respuesta.json() })
            .then((respuesta) => { 
                setPersonajes(respuesta.results); 
            })
            .catch((error) => { console.log(error) });
    },[]);


    // Solo para asegurarnos de que los datos se recibieron correctamente
    // mostramos en la consola la variable personajes
    console.log(personajes);


    return ( 
        <main className="min-h-screen">
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
        </main>
    );
}

export default ApiSinKeyFetch;