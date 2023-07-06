import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./Detalle.css";

import { juegosApi, traductorApi } from '../../Utilidades/api';
import { LogoCarga } from '../../Componentes/Logo/LogoCarga';
import { obtenerIconoPlataforma } from '../../Utilidades/iconos';
import { FaChevronLeft } from 'react-icons/fa';
import { MeGusta } from '../../Componentes/Iconos/MeGusta/MeGusta';
import { Favorito } from '../../Componentes/Iconos/Favorito/Favorito';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { db } from "../../firebase/config";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore"
import { MEGUSTA, borrarPreferencia, guardarPreferencia, obtenerIdDocDelLocalStorage } from '../../Utilidades/administrador-preferencias';

export const DetalleJuego = () => {

    const [juego, setJuego] = useState(null);
    const [cargando, setCargando] = useState(null);
    const [megusta, setMegusta] = useState(false);
    const [favorito, setFavorito] = useState(false);
    const [authUser, setAuthUser] = useState(null);

    const meGustaCollection = collection(db, "megusta");
    const favoritoCollection = collection(db, "favorito");
    const lateCollection = collection(db, "late");

    const navigate = useNavigate();
    const { juegoId } = useParams();

    const getJuego = async () => {
        setCargando(true);
        await juegosApi(`games/${juegoId}`).then(async res => {
            if (res) {
                const description_raw = res['description_raw']
                    .replace(/\n/g, '')
                    .replace(/\r/g, '')
                    .split(".", 4)
                    .join(',');
                const descripcion = await traductorApi(description_raw);
                setJuego({ ...res, descripcion });
                setCargando(juego && juego.length > 0);
                if (localStorage.getItem('megusta') !== null) {
                    JSON.parse(localStorage.getItem('megusta')).map(megusta => {
                        if (megusta.idJuego === res.id) {
                            setMegusta(megusta.idJuego === res.id);
                        }
                    })
                }
            }
        });
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

    const onFavorito = () => {
        setFavorito(prevFavorito => !prevFavorito);
        console.log("favorito ", favorito);
    }

    const onMeGusta = () => {
        debugger
        if (authUser) {
            const estadoAnterior = megusta;
            setMegusta(!estadoAnterior);
            if (juego && !estadoAnterior) {
                guardarPreferencia(MEGUSTA, juego.id, authUser.email)
            } else {
                const juegoGuardado = obtenerIdDocDelLocalStorage(MEGUSTA, juego.id);
                if (juegoGuardado) {
                    borrarPreferencia(MEGUSTA, juegoGuardado[0].id)
                }
            }
            return true;
        } else {
            alert('Debes loguearte para guardar tus megusta');
            return false;
        }
    }

    useEffect(() => {
        if (cargando === null) {
            getJuego();
        }
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            }
        })

    }, [cargando])

    if (juego && Object.keys(juego).length > 0) {
        return (
            <div className='detalle'>
                <div className="header">
                    <div className="navegacion">
                        <FaChevronLeft onClick={() => navigate(-1)} />
                    </div>
                    <div className="interaccion">
                        <MeGusta clickAction={onMeGusta} seleccionado={megusta} />
                        <Favorito onClick={() => onFavorito()} />
                    </div>
                </div>
                <div className='description'>
                    <img alt={"Imagen del juego " + juego.name} src={juego.background_image ? juego.background_image : `${process.env.PUBLIC_URL}/img/bati-profe.jpg`} />
                    <div className="iconos-plataformas">
                        {obtenerPlataformas(juego.platforms)}
                    </div>
                    <h1>{juego.name}</h1>
                    <p>{juego.descripcion}</p>

                </div>
            </div >
        );
    } else {
        return (
            <LogoCarga />
        )
    }
}
