import axios from 'axios';
import { useEffect, useState } from 'react';

const ApiConKeyAxios = () => {

    const [juegos, setJuegos] = useState([]);

    const opciones = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
        params: {
            tag: '3d.mmorpg.fantasy.pvp',
            platform: 'pc'
        },
        headers: {
            'X-RapidAPI-Key': '801c3e0640mshb12ea04d0f4c1b4p10674ajsna508bbea0718',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };


    useEffect(()=>{
        async function obtenerDatos(){
            const response = await axios.request(opciones);
            setJuegos(response.data);
        };
        obtenerDatos();
    },[]);


    return (
        <main>

        </main>
    );
}

export default ApiConKeyAxios;