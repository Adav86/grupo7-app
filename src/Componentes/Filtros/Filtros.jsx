import { FaFilter } from "react-icons/fa";
import "./Filtros.css";

export const Filtros = () => {
  return (
    /* <button className="btn posicion-f" type="submit">
            <FaFilter/>
        </button> */
    <div className="dropdown posicion-f">
      <button className="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      <FaFilter/>
      </button>
      <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
        <li className="form-check form-switch ">
            <div className=" dropdown-item">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" for="flexSwitchCheckDefault">2023</label>
            </div>
        </li>
        <li className="form-check form-switch">
            <div className=" dropdown-item">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" for="flexSwitchCheckDefault">PlayStation</label>
            </div>
        </li>
        <li className="form-check form-switch">
            <div className=" dropdown-item">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" for="flexSwitchCheckDefault">Nintendo</label>
            </div>
        </li>
        <li className="form-check form-switch">
            <div className=" dropdown-item">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" for="flexSwitchCheckDefault">Pc</label>
            </div>
        </li>
        <li className="form-check form-switch">
            <div className=" dropdown-item">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" for="flexSwitchCheckDefault">Porno</label>
            </div>
        </li>
      </ul>
    </div>
  );
};
