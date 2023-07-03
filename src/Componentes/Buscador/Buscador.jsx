import { ImSearch } from "react-icons/im";
import {useState} from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { Filtros } from "../Filtros/Filtros";
import "./Buscador.css"

export const Buscador = () => {
    const [searchText, setSearchText] = useState("");
    const navegate = useNavigate();
    const location = useLocation();

    const handLeSubmit =(e)=>{
        e.preventDefault()
        navegate(`/search/${searchText}`)
        setSearchText("")
    }

    const siLaPaginaActualEsBusqueda =() =>{
      return location.pathname.includes("search") > 0
    }

  return (
    <form className="d-flex mx-auto" id="buscador"  onSubmit={handLeSubmit}>
      <input value={searchText} onChange={(e=>setSearchText(e.target.value))} className="form-control me-2" type="search" placeholder="¿Con qué te querés enviciar hoy?" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">
        <ImSearch />
      </button>
      {siLaPaginaActualEsBusqueda() ? <Filtros/> : ""}      
    </form>
  );
};
