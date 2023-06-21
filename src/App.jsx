import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Componentes/Header/Header";
import { Inicio } from "./Paginas/Inicio/Inicio";
import { Generos } from "./Paginas/Generos/Generos";
import { DetalleJuego } from "./Paginas/Detalle/Detalle";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/generos" element={<Generos/>}></Route>
        <Route path="/juego/:juegoId" element={<DetalleJuego/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
