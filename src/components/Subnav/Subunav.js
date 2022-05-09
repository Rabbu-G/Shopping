import React from 'react'

const Subunav = ({setFilter, filterProduct, data}) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link px-5" href="#">
                  Home
                </a>
                <a class="nav-link px-5" href="#" onClick={() => setFilter(data)}>
                  All
                </a>
                <a class="nav-link px-5" href="#" onClick={() => filterProduct("men's clothing")}>
                  Men
                </a>
                <a class="nav-link px-5" href="#" onClick={() => filterProduct("women's clothing")}>
                  Women
                </a>
                <a class="nav-link px-5" href="#" onClick={() => filterProduct("jewelery")}>
                  Kids
                </a>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Subunav