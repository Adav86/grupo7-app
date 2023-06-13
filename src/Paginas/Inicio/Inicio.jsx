import "./Inicio.css";
import { useState, useEffect } from "react";
import { juegosApi } from "../../Utilidades/api";
import { CarruselMiniatura } from "../../Componentes/CarruselMiniatura/CarruselMiniatura";

export const Inicio = () => {

    const [listaJuegos, setListaJuegos] = useState([]);

    const getJuegos = async () => {
        const data = await juegosApi('games', { page_size: 8 });
        setListaJuegos(data);
    }

    useEffect(() => {
        if (listaJuegos && listaJuegos.length === 0) {
            getJuegos();
        }
    }, [listaJuegos])

    return (
        <>
            { listaJuegos.length > 0 ? < CarruselMiniatura listadoJuego={listaJuegos} /> : '' }
        </>
    )

}


