import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { juegosApi } from "../../Utilidades/api";
import { LogoCarga } from "../../Componentes/Logo/LogoCarga";
import { Miniatura } from "../../Componentes/Miniatura/Miniatura";
import { FaChevronLeft } from 'react-icons/fa';
import "./Search.css";

export const Search = () => {

  const navegate = useNavigate();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }

  const query = useQuery();
  const search = query.get("search");

  const [juegos, setJuegos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [buscado, setBuscado] = useState("");

  const navi = useNavigate();
  const { searchText } = useParams();
  console.log("buscaste: ", searchText);
  useEffect(() => {
    if (juegos === null) {
      obtenerJuegos()
    }
  }, [cargando]);

  useEffect(() => {
    if (buscado !== searchText) {
      setCargando(true)
      obtenerJuegos()

    }

  }, [searchText]);

  const obtenerJuegos = async () => {
    await juegosApi(`games`, { search: searchText }).then((games) => {
      if (games) {
        setJuegos(games);
        setCargando(false);
        obtenerDataParaFiltro(games);
      }
    });
  };

  const obtenerDataParaFiltro = (games)=>{
    const fechas = [];
    games.map(game=>{
      const anio = game.released.split("-")[0];
      fechas.push({fecha:anio, id:game.id}); 
    }) 
    sessionStorage.setItem('filtro-fechas', JSON.stringify(fechas));
    navegate(`?filtros=true`)
  }

  if (cargando) {
    return <LogoCarga />;
  }

  return (
    <>
      <div className="header">
        <div className="navegacion">
          <FaChevronLeft onClick={() => navi(-1)} />
        </div>
        <h1 className="fuente-principal">Resultados para:{'\n'+searchText}</h1>
      </div>
      <div className="container">
        <div className="row">
          {juegos && juegos.length > 0
            ? juegos.map((juego, key) => (
              <div className="col-6 col-sm-4 col-lg-3 scale-in-center" style={{ animationDelay: `0.${1 + key}s` }}>
                <Miniatura key={key} objetoJuego={juego} />
              </div>
            ))
            : ""}
        </div>
      </div>
    </>
  );
};
