import { FaFilter } from "react-icons/fa";
import "./Filtros.css";
import { useEffect, useState } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { FiltroFecha } from "./FiltroFecha";
import { FiltroGenero } from "./FiltroGenero";

export const Filtros = () => {
  const location = useLocation();
  const navegate = useNavigate();
  const[filtroEstado, setFiltroEstado] = useState(false);
  
  
  

  return (
    <div className="dropdown posicion-f">
      <button
        className="btn "
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="false"      >
        <FaFilter />
      </button>
      <ul
         className="dropdown-menu dropdown-menu-dark"
        aria-labelledby="dropdownMenuButton1"
      >
        <li className="form-check form-switch px-2">
          <FiltroFecha/>
        </li>
        <li className="form-check form-switch">
          <FiltroGenero/>
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
