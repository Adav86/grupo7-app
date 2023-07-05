export const FiltroGenero = () => {
  return (
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Generos
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div className=" dropdown-item">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" for="flexSwitchCheckDefault">
                PlayStation
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
