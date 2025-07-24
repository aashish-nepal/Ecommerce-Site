"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <header className="sticky-top bg-white shadow-sm">
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          {/* Brand Logo */}
          <Link className="navbar-brand" href="/">
            <Image
              src="/images/mark.png"
              alt="Company Logo"
              width={160}
              height={32}
              priority
              className="d-inline-block align-top"
            />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Content */}
          <div className="collapse navbar-collapse" id="mainNav">
            <div className="d-flex w-100 justify-content-between align-items-center">
              {/* Main Navigation */}
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                {["Home", "Pages", "Shop", "Blog", "Gallery"].map((item) => (
                  <li className="nav-item dropdown mx-2" key={item}>
                    <Link
                      className="nav-link dropdown-toggle text-dark fw-medium"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {item}
                    </Link>
                    <ul className="dropdown-menu border-0 shadow-sm">
                      <li>
                        <Link className="dropdown-item py-2" href="#">
                          {item} Option 1
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item py-2" href="#">
                          {item} Option 2
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item py-2" href="#">
                          {item} Option 3
                        </Link>
                      </li>
                    </ul>
                  </li>
                ))}
                <li className="nav-item mx-2">
                  <Link className="nav-link text-dark fw-medium" href="#">
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Action Icons */}
              <div className="d-flex align-items-center gap-4">
                <Link href="#" className="position-relative text-dark">
                  <i className="bi bi-heart fs-5"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                    0
                  </span>
                </Link>
                
                <Link href="#" className="position-relative text-dark">
                  <i className="bi bi-cart3 fs-5"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                    0
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;