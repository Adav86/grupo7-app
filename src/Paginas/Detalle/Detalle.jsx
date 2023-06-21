import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./Detalle.css";

import { juegosApi, traductorApi } from '../../Utilidades/api';
import { LogoCarga } from '../../Componentes/Logo/LogoCarga';
import { obtenerIconoPlataforma } from '../../Utilidades/iconos';
import { FaChevronLeft } from 'react-icons/fa';
import { BsFillHandThumbsUpFill, BsHandThumbsUp, BsStarFill, BsStar } from 'react-icons/bs';

export const DetalleJuego = () => {

    const [juego, setJuego] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [megusta, setMegusta] = useState(false);
    const [favorito, setFavorito] = useState(false);

    const navigate = useNavigate();
    const { juegoId } = useParams();

    const getJuego = async () => {
        const result = await juegosApi(`games/${juegoId}`);
        /*         const descripcion = await traductorApi(result.description_raw);
                if(descripcion){
                    setJuego({...result, descripcion});
                    setCargando(juego && juego.length > 0);
                } */
        setJuego(result);
        setCargando(juego && juego.length > 0);
    }

    const obtenerPlataformas = (plataformas) => {
        const iconosPlataformas = [];
        plataformas.map(plataforma => {
            const icono = obtenerIconoPlataforma(plataforma.platform.id);
            if (icono) {
                iconosPlataformas.push(icono);
            }
        })
        return iconosPlataformas;
    }

    const onMegusta = () => {
        setMegusta(prevMegusta => !prevMegusta);
        console.log("megusta ", megusta);
    }
    const onFavorito = () => {
        setFavorito(prevFavorito => !prevFavorito);
        console.log("favorito ", favorito);
    }

    useEffect(() => {
        getJuego();
    }, [])

    if (juego && Object.keys(juego).length > 0) {
        return (
            <div className='detalle'>
                <div className="header">
                    <div className="navegacion">
                        <FaChevronLeft onClick={() => navigate(-1)} />
                    </div>
                    <div className="interaccion">
                        <button onClick={() => onMegusta()}>
                            {megusta ? <BsFillHandThumbsUpFill className='megusta' /> : <BsHandThumbsUp />}
                        </button>
                        <button onClick={() => onFavorito()}>
                            {favorito ? <BsStarFill className='favorito' /> : <BsStar />}
                        </button>
                    </div>
                </div>
                <div className='description'>
                    <img src={juego.background_image} />
                    <div className="iconos-plataformas">
                        {obtenerPlataformas(juego.platforms)}
                    </div>
                    <h1>{juego.name}</h1>
                    <p>{juego.description_raw}</p>

                </div>
            </div >
        );
    } else {
        return (
            <LogoCarga />
        )
    }
}
