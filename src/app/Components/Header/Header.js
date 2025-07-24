"use client";
import Link from "next/link";
import Image from 'next/image';

export default function Header() {
  return (
    <section className="bg-light py-3 border-bottom">
      <div className="container">
        <div className="row align-items-center">
          {/* Categories Dropdown */}
          <div className="col-md-4 d-none d-md-flex">
            <div className="btn-group">
              <button
                className="btn btn-outline-dark dropdown-toggle fw-medium"
                type="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <i className="bi bi-grid-fill me-2"></i>All Categories
              </button>
              <ul className="dropdown-menu shadow">
                <li>
                  <Link className="dropdown-item py-2 d-flex justify-content-between align-items-center" href="#">
                    Electronics <i className="bi bi-chevron-right"></i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item py-2 d-flex justify-content-between align-items-center" href="#">
                    Fashion <i className="bi bi-chevron-right"></i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item py-2 d-flex justify-content-between align-items-center" href="#">
                    Home & Garden <i className="bi bi-chevron-right"></i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item py-2 d-flex justify-content-between align-items-center" href="#">
                    Beauty <i className="bi bi-chevron-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Search Bar */}
          <div className="col-12 col-md-4 my-2 my-md-0">
            <form className="d-flex" role="search">
              <div className="input-group">
                <select className="form-select border-end-0 bg-light" style={{maxWidth: '120px'}}>
                  <option>All</option>
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Home</option>
                </select>
                <input
                  className="form-control border-start-0 border-end-0 px-3"
                  type="search"
                  placeholder="Search for products..."
                  aria-label="Search"
                />
                <button className="btn btn-dark px-4" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
          </div>

          {/* Promotion */}
          <div className="col-md-4 d-none d-md-flex justify-content-end">
            <Link 
              href="#" 
              className="btn btn-warning px-4 py-2 text-white text-decoration-none text-center"
              style={{background: 'linear-gradient(135deg, #1a1a1a, #333333, #1a1a1a)'}}
            >
              <span className="d-block fw-bold">BLACK FRIDAY</span>
              <small className="fw-normal">Up to 45% Off</small>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}