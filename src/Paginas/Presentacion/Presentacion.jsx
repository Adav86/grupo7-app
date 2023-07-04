import { BsPeople } from "react-icons/bs";
import "./Presentacion.css";

export const Presentacion = () => {
  return (
    <>
      <div className="contenedor-carga container">
        <div
          id="carouselPresentacion"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="primero carousel-item active"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/video-games-collage-Dota-2-Carnival-ART-festival-208769-wallhere.com.jpg)`,
              }}
              data-bs-interval="1000000"
            >
              <img
                src={process.env.PUBLIC_URL + "/img/logo.svg"}
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item " data-bs-interval="200000">
              <div className="container contenido-slider">
                <h3 className="letra text-center mb-5">¿Quienes somos?</h3>
                <p className=" mb-5">
                  Somos una WEB-APP dedicada al universo gamer, donde nuestros
                  usuarios y visitantes podran ver los nuevos lanzamientos,
                  poder chequear en que plataforma corren sus juegos. Nuestros
                  usuarios podras crearce una biblioteca donde puedan saber con
                  que juegos cuentan que juegos desean y cuales les gusta con un
                  simple click.
                </p>
                <div className="d-flex justify-content-center">
                  <div className="icon-target">
                    <BsPeople size={60} fill="#0b72a5" />
                  </div>
                  <h3 className="letra mb-5">People/target</h3>
                </div>
                <ul className="lista-presentacion">
                  <li>Jovenes y adultos de entre 14 y 45 años.</li>
                  <li>
                    No nos importa su clase social solo que pertenezcan a
                    nuestro mundo, GAMER.
                  </li>
                </ul>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="200000">
              <div className="container contenido-slider">
                <h3 className="letra">Nuestra familia tipografica</h3>
                <div className="tipografia text-center">
                  <p className="bold">
                    Fuente principal Rajdhani{" "}
                    <span className="bold">Fuente secundaria Roboto</span>
                  </p>
                  <p>
                    Fuente principal Rajdhani{" "}
                    <span className="medium">Fuente secundaria Roboto</span>
                  </p>
                  <p>
                    Fuente principal Rajdhani{" "}
                    <span className="regular">Fuente secundaria Roboto</span>
                  </p>
                  <p>
                    Fuente principal Rajdhani{" "}
                    <span className="light">Fuente secundaria Roboto</span>
                  </p>
                </div>
                <div>
                  <h3 className="letra">Nuestra paleta cromática</h3>
                  <div className="d-flex justify-content-evenly align-items-center">
                    <div className="primario d-flex flex-column justify-content-center">
                      <p className="texto-p text-center">Primaria</p>
                      <div className="flex-row d-flex align-items-center justify-content-around px-2">
                        <div className="color-verde mx-2">#00ff00</div>
                        <div className="color-violeta mx-2">#161645</div>
                      </div>
                    </div>
                    <div className="secundario d-flex flex-column justify-content-center">
                      <p className="texto-p text-center">Secundaria</p>
                      <div className="flex-row d-flex align-items-center justify-content-around px-2">
                        <div className="color-gris mx-2">
                          <p className="justify-content-center">#e6e6e6</p>
                        </div>
                        <div className="color-oscuro mx-2">#151515</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="200000">
              <div className="container contenido-slider">
                <h3 className="letra">Recursos</h3>
                <h3 className="letra">Api’s</h3>
                <p>
                  Juegos - https://api.rawg.io/docs/
                  <br></br>Traductor
                  -https://translate.googleapis.com/translate_a/single
                </p>
                <div className="">
                  <h3 className="letra">Lenguajes</h3>
                  <div className="col">
                    <img
                      src={process.env.PUBLIC_URL + "/img/html-5_5968267.png"}
                      alt="..."
                      width="75"
                    ></img>
                  </div>
                  <div className="col">
                    <img
                      src={process.env.PUBLIC_URL + "/img/css-3_5968242.png"}
                      alt="..."
                      width="75"
                    ></img>
                  </div>
                  <div className="col">
                    <img
                      src={process.env.PUBLIC_URL + "/img/js_5968292.png"}
                      alt="..."
                      width="75"
                    ></img>
                  </div>
                  <div className="col">
                    <img
                      src={process.env.PUBLIC_URL + "/img/react_1183672.png"}
                      alt="..."
                      width="75"
                    ></img>
                  </div>
                </div>
                <div className="">
                  <h3 className="letra">Herramientas</h3>
                  <div className="row">
                    <div className="col">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/img/illustrator_5968472.png"
                        }
                        alt="..."
                        width="75"
                      ></img>
                    </div>
                    <div className="col">
                      <img
                        src={process.env.PUBLIC_URL + "/img/trello_174874.png"}
                        alt="..."
                        width="75"
                      ></img>
                    </div>
                    <div className="col">
                      <img
                        src={process.env.PUBLIC_URL + "/img/figma_5968705.png"}
                        alt="..."
                        width="75"
                      ></img>
                    </div>
                    <div className="col">
                      <img
                        src={process.env.PUBLIC_URL + "/img/vsc.png"}
                        alt="..."
                        width="75"
                      ></img>
                    </div>
                    <div className="col">
                      <img
                        src={process.env.PUBLIC_URL + "/img/boostrap.png"}
                        alt="..."
                        width="75"
                      ></img>
                    </div>
                    <div className="col">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/img/photoshop_5968520.png"
                        }
                        alt="..."
                        width="75"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="200000">
            <div className="container contenido-slider">
              <h3 className="letra">Bocetos</h3>
              <img
                src={process.env.PUBLIC_URL + "/img/mpv.png"}
                alt="..."
                width="7px"
              ></img>
            </div>
          </div>
          <div className="carousel-item " data-bs-interval="200000">
            <h3 className="letra">Proyecto Final</h3>
            <div className="row ">
              <div className="col">
                <img
                  src={process.env.PUBLIC_URL + "/img/boceto 0.png"}
                  alt="..."
                  width="75"
                ></img>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="200000">
            <h3 className="letra">Bocetos</h3>
            <img
              src={process.env.PUBLIC_URL + "/img/mpv.png"}
              alt="..."
              width="7px"
            ></img>
          </div>
          <div className="carousel-item " data-bs-interval="200000">
            <h3>Producido y desarrollado por</h3>
            <img
              src={process.env.PUBLIC_URL + "/img/nuestro logo.svg"}
              alt="..."
              width="75"
            ></img>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselPresentacion"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselPresentacion"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
