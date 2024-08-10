"use client";

import React from "react";
import "../../app/Components/Uni.css";

function Header() {
  return (
    <section>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo on the left */}
            <a className="navbar-brand" href="#">
              <img
                src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2020/06/logo_home-1.png"
                alt="Logo"
              />
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
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="d-flex w-100 justify-content-between align-items-center">
                {/* Centered Navigation Links */}
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  {["Home", "Pages", "Shop", "Blogs", "Gallery"].map((item) => (
                    <li className="nav-item dropdown" key={item}>
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {item}
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                  ))}
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Doakn
                    </a>
                  </li>
                </ul>

                {/* Icons on the right */}
                <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center gap-4">
                  <li>
                    <a href="#">
                      <i className="position-relative bi bi-heart">
                        <span className="position-absolute top-2 start-100 translate-middle p-0 bg-warning border border-light rounded-circle">
                          0
                          <span className="visually-hidden"></span>
                        </span>
                      </i>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="position-relative bi bi-basket3">
                        <span className="position-absolute top-2 start-100 translate-middle p-0 bg-warning border border-light rounded-circle">
                          0
                          <span className="visually-hidden">New alerts</span>
                        </span>
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
}

export default Header;
