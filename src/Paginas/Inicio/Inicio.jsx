import { Miniatura } from "../../Componentes/Miniatura/Miniatura";
import "./Inicio.css";
import { objetoJuego } from "../../Componentes/Miniatura/objetoJuego";
import {Carrusel} from "../../Componentes/Carrusel/Carrusel";

export const Inicio = ()=>{
    return (
       <div>
        <Carrusel/>
        <Miniatura objetoJuego={objetoJuego}/>
        </div> 
    )

}


