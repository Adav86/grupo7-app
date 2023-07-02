import "./Presentacion.css";

export const Presentacion = () => {
  return (
    <>
      <div className="contenedor-carga">
        <div
          id="carouselExampleInterval"
          class="carousel slide container"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div
              class="primero carousel-item active"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/video-games-collage-Dota-2-Carnival-ART-festival-208769-wallhere.com.jpg)`,
              }}
              data-bs-interval="10000"
            >
              <img
                src={process.env.PUBLIC_URL + "/img/logo.svg"}
                class="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div class="carousel-item text-center" data-bs-interval="2000">
              <h2 className="letra">¿Quienes somos?</h2>
              <p>
                Somos una WEB-APP dedicada al universo gamer, donde nuestros
                usuarios y vicitantes podran ver los nuevos lanzamientos, poder
                chequear en que plataforma corren sus juegos. Nuestros usuarios
                podras crearce una bibilioteca donde puedan saber con que juegos
                cuentan que juegos desean y cuales les gusta con un simple
                click.
              </p>
              <h2>Público/target</h2>
              <p>
                Jovenes y adultos de entre 14 y 40 años. No nos importa su clase
                social solo que pertenezcan a nuestro mundo, el GAMER
              </p>
            </div>
            <div class="carousel-item">
              <h2>Nuestra familia tipografica</h2>
              <p>
                Fuente principal Rajdhani Fuente secundaria Roboto Fuente
                principal Rajdhani Fuente secundaria Roboto Fuente principal
                Rajdhani Fuente secundaria Roboto Fuente principal Rajdhani
                Fuente secundaria Roboto
              </p>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
