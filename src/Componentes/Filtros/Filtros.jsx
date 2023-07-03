import { FaFilter } from "react-icons/fa";
import "./Filtros.css";
import { useEffect, useState } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";

export const Filtros = () => {
  const location = useLocation();
  const navegate = useNavigate();
  const [filtroFecha, setFiltroFecha] = useState("");

  const obtenerFiltroFecha = () => {
    const filtroFecha = JSON.parse(sessionStorage.getItem("filtro-fechas"));
    const filtroFechaOrdenado = filtroFecha.sort((a, b) => {
      return Number(a.fecha) - Number(b.fecha);
    });
    setFiltroFecha(filtroFechaOrdenado);
  };

  const cargarFiltros = () => {
    console.log(location);
    if (location.search.includes("filtros") > 0) {
      obtenerFiltroFecha();
    }
  };

  const filtrarPorFecha = (e)=>{

    const filtros = location.search.split('&');
    let filtro = "";
    for (let i = 0; i < filtros.length; i++) {
        filtro = filtros[i].split('=')[0];
        if(filtro.indexOf("fecha") === 0){
            filtros.splice(i, 1);
        }
        
    }
    navegate({
        pathname:location.pathname,
        search: filtros.join('&') + '&fecha=' +  e.target.value
    });
  }

  useEffect(() => {
    cargarFiltros();
  }, [location]);

  return (
    <div className="dropdown posicion-f">
      <button
        className="btn "
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <FaFilter />
      </button>
      <ul
        className="dropdown-menu dropdown-menu-dark"
        aria-labelledby="dropdownMenuButton1"
      >
        <li className="form-check form-switch px-2" >
          <div className=" dropdown-item d-flex row">
            <label for="customRange1" class="form-label">
              Año
            </label>
            {filtroFecha !== "" ? (
              <>
                <input
                  type="range"
                  min={filtroFecha[0].fecha}
                  max={filtroFecha[filtroFecha.length - 1].fecha}
                  step={1}
                  onTouchEnd={(e)=>{
                    filtrarPorFecha(e)
                  }}
                  /* onChanger={(e)=>{
                    filtrarPorFecha(e)
                  }} */
                  class="form-range"
                  id="customRange1"
                />
                <p>
                  {filtroFecha[0].fecha} -{" "}
                  {filtroFecha[filtroFecha.length - 1].fecha}
                </p>
              </>
            ) : (
              ""
            )}
          </div>
        </li>
        <li className="form-check form-switch">
          <div className=" dropdown-item">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              PlayStation
            </label>
          </div>
        </li>
        <li className="form-check form-switch">
          <div className=" dropdown-item">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              Nintendo
            </label>
          </div>
        </li>
        <li className="form-check form-switch">
          <div className=" dropdown-item">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              Pc
            </label>
          </div>
        </li>
        <li className="form-check form-switch">
          <div className=" dropdown-item">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              Porno
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};
