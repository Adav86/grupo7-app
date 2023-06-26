import { useState } from "react";
import { LogoCarga } from "../../Componentes/Logo/LogoCarga";
import { Miniatura } from "../../Componentes/Miniatura/Miniatura";
import { juegosApi } from "../../Utilidades/api";
import "./Botonera.css";

export const Botonera = ({plataforma}) =>  {

const [juegos, setJuegos] = useState(null);
const [cargando, setCargando] = useState(null);

const getJuegosPorPlataforma = async (plataformas) => {
    setCargando(true);
    await juegosApi("games",{ platforms: plataformas }).then(async (res) => {
      if (res) {
        setJuegos(res);
        setCargando(false);
      }
    });
  };

  const [botonSeleccionado, setBotonSeleccionado] = useState(
    new Array(plataforma.length).fill(false)
  );

  const [listaPlataformas, setListaPlataformas] = useState(null);

  const actualizarBotonera = (posicion) => {
    const actualizarBotonSeleccionado = botonSeleccionado.map((item, index) =>
      index === posicion ? !item : item
    );

    setBotonSeleccionado(actualizarBotonSeleccionado);

    const ListaIdsPlataformas = [];
    let textoLista = ""
    actualizarBotonSeleccionado.map(
      (currentState, index) => {
        if (currentState) {
            ListaIdsPlataformas.push(plataforma[index].id);
        }
        textoLista = ListaIdsPlataformas.join(",");
        return textoLista;
      }
    );

    setListaPlataformas(textoLista);
    getJuegosPorPlataforma(listaPlataformas);
  };

  return (
    <div className="contenedor-botonera">
      <h3>Elegí una plataforma</h3>
      <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        {plataforma.map(({ name, id }, index) => {
          return (
            <div key={index}>
              <div className="plataforma-list-item">
                
                  <input
                    type="checkbox"
                    className="btn-check"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={botonSeleccionado[index]}
                    onChange={() => actualizarBotonera(index)}
                  />
                  <label className="btn btn-outline-secondary" for={`custom-checkbox-${index}`}>{name}</label>
                
              </div>
            </div>
          );
        })}
        <div>
          <div className="plataforma-list-item row">
            <div className="left-section">Total:</div>
            <div className="right-section">{listaPlataformas}</div>
            {
            juegos && juegos.length > 0 ?
              juegos.map((juego, key) => (
                <div className="col-6 col-sm-4 col-lg-3">
                  <Miniatura key={key} objetoJuego={juego} />
                </div>
              ))
              : ''
          }
          </div>
        </div>
      </div>
    </div>
  );
}