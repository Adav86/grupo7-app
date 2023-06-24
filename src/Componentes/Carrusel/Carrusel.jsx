import "./Carrusel.css";


export const Carrusel = ({ sliders }) => {

  if (sliders != null && sliders.length > 0) {
    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-inner">
          {
            sliders.map((slider, key) => (
              <div key={key}
                className={key === 1 ? 'carousel-item active' : 'carousel-item'}
                style={{ backgroundImage: `url(${slider.background_image})` }}
              >
                <div className="title">{slider.name}</div>
                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt purus eget justo dignissim euismod. Donec non quam commodo, consequat orci nec...</div>
                <div className="more">
                  <button class="more-btn" type="button">
                    <strong>VER MÁS</strong>
                    <div id="container-stars">
                      <div id="stars"></div>
                    </div>
                    <div id="glow">
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
        <button button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  }
};