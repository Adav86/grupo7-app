import { useState } from "react";
import { useEffect } from "react";
import { LogoCarga } from "../../Componentes/Logo/LogoCarga";
import { Miniatura } from "../../Componentes/Miniatura/Miniatura";
import { juegosApi } from "../../Utilidades/api";
import "./Generos.css"

export const Generos = () => {
  /*  /genres */
  //return <LogoCarga />
  const [generos, setGeneros] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (generos === null) {
      const resultado = juegosApi('genres');
      if (resultado) {
        setGeneros(resultado);
        setCargando(false);
      }
    }
  }, [])

  if (cargando) {
    return (<LogoCarga />)
  } else {
    return ( ''
      /* generos && generos.length > 0 ?
        generos.map((genero, key) => (
          <Miniatura key={key} objetoJuego={genero} />
        ))
        : '' */
    )
  }


};
