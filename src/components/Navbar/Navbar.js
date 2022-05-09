import React from "react";
import './Navbar.scss';
import Logo from '../Navbar/logo1.png';
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state)=> state.handle)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="/">
          <img src = {Logo} alt="Logo"
          height='80px'
          width='150px'></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <div className="input-group mx-auto w-75  ">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-info" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  Product
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li> */}
            </ul>
            <div className="buttons">
              <a href="/login" className="btn btn-outline-success">
                 Login
              </a>
              <a href="/cart" className="btn ms-2">
                 Cart ({state.length}) <i className="fa fa-shopping-cart me-1"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
