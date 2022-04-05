import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
          return (
                    <div>
                      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            {/* <Link className="nav-item" to="/">
              Home
            </Link> */}
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                  </Link>
                </li>


                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/review">
                  Reviews
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/dashboard">
                  Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/blog">
                 Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="">
                  About
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <a className="package-lock.jsonnav-link" href="/">
                    Link
                  </a>
                </li> */}

                 
              </ul>
              <div className="d-flex">
               <button className='btn btn-dark'>Login</button>
              </div>
            </div>
          </div>
        </nav>       
                    </div>
          );
};

export default Header;