
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {  Carrusel} from "./Componentes/Carrusel";
import { Inicio } from './Paginas/Inicio/Inicio';

function App() {
  return (
    <BrowserRouter>
      <Carrusel/>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
      
export default App;
