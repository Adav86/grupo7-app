import { useEffect, useState } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";

export const FiltroFecha = () => {
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
  
  const filtrarPorFecha = (e) => {
    const filtros = location.search.split("&");
    let filtro = "";
    for (let i = 0; i < filtros.length; i++) {
      filtro = filtros[i].split("=")[0];
      if (filtro.indexOf("fecha") === 0) {
        filtros.splice(i, 1);
      }
    }
    navegate({
      pathname: location.pathname,
      search: filtros.join("&") + "&fecha=" + e.target.value,
    });
  };

  const cargarFiltros = () => {
    console.log(location);
    if (location.search.includes("filtros") > 0) {
      obtenerFiltroFecha();
    }
  };

  useEffect(() => {
    cargarFiltros();
  }, [location]);

  return (
    <div className=" dropdown-item d-flex row">
      <label for="customRange1" class="form-label">
        Año
      </label>
      {filtroFecha ? (
        <>
          <input
            type="range"
            min={filtroFecha[0].fecha}
            max={filtroFecha[filtroFecha.length - 1].fecha}
            step={1}
            onTouchEnd={(e) => {
              filtrarPorFecha(e);
            }}
            onMouseUp={(e) => {
              filtrarPorFecha(e);
            }}
            class="form-range"
            id="customRange1"
          />
          <p>
            {filtroFecha[0].fecha} - {filtroFecha[filtroFecha.length - 1].fecha}
          </p>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

