export function mostrarHero(){
    return `
     <section id="hero" class="bg-success bg-gradient text-white py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold mb-3">
              <iconify-icon
                icon= "mdi:fruit-watermelon"
                class="me-2 text-white">
              </iconify-icon>
              Frutas Frescas
            </h1>
            <p class="lead mb-4">Las mejores frutas seleccionadas directamente del campo a tu mesa. Frescura y calidad garantizada.</p>
            <a href="" class="btn btn-light btn-lg">
              <iconify-icon
                icon= "mdi:shop"
                class="me-2 text-black">
              </iconify-icon>
              Ver Catálogo
            </a>
          </div>
          <div class="col-lg-6 text-center">
            <iconify-icon
              icon="mdi:fruit-grapes"
              class="me-2 text-white-50"
              width="200">
            </iconify-icon>
          </div>
        </div>
      </div>
    </section>
    `
}
export function mostrarCatalogo(){
    return `
    <section id="catalogo" class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold">
            <iconify-icon
              icon= "mdi:fruit-pear"
              class="me-2 text-success">
            </iconify-icon>
            Nuestro catalogo
          </h2>
          <p class="text-muted">Selecciona tus frutas favoritas</p>
        </div>
        <div class="row g-4" id="lista-productos">
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100 shadow-sm">
              <div class="position-relative">
                <img src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop" alt="banana"
                class="card-img-top"
                style="height: 200px; object-fit: cover;">
                <span class="badge bg-success position-absolute top-0 end-0 m-2">Frutas</span>
              </div>
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">Platano</h5>
                <p class="card-text text-muted small flex-grow-1">Plátanos maduros ricos en potasio, ideales para batidos.</p>
                <div class="d-flex justify-content-between align-items-center mt-3 px-2">
                  <span class="fw-bold text-success fs-4">5 PEN</span>
                  <span class="text-muted small">X KG</span>
                </div>
              </div>
              <div class="card-footer bg-white border-top-0 pb-3">
                <div class="d-grid gap-2">
                  <button class="btn btn-outline-success">
                    <iconify-icon
                      icon= "mdi:eye-plus"
                      class="me-1">
                    </iconify-icon>
                    Ver Detaller
                  </button>
                  <button class="btn btn-success">
                    <iconify-icon
                      icon= "mdi:shopping-cart-arrow-down"
                      class="me-1">
                    </iconify-icon>
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `
}