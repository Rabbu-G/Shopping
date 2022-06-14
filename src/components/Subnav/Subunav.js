import React from 'react'

const Subunav = ({setFilter, filterProduct, data}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {/* <a class="nav-link px-5" href="#">
                  Home
                </a> */}
                <a className="nav-link px-5" href="#" onClick={() => setFilter(data)}>
                  All
                </a>

                <a className="nav-link px-5" href="#" onClick={() => filterProduct("kid's")}>
                  Kids
                </a>

                <a className="nav-link px-5" href="#" onClick={() => filterProduct("men's")}>
                  Men
                </a>
                
                <a className="nav-link px-5" href="#" onClick={() => filterProduct("women's")}>
                  Women
                </a>
                
                <a className="nav-link px-5" href="#" onClick={() => filterProduct("footwares")}>
                  Footwares
                </a>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Subunav