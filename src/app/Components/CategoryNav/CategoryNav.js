"use client";
import React from 'react';

export default function CategoryNav({ activeCategory, handleCategoryClick }) {
  return (
    <div className="container-fluid py-4 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold text-primary">Top Categories This Week</h2>
        <nav className="d-flex justify-content-center">
          <ul className="nav nav-pills gap-3">
            <li className="nav-item">
              <button
                className={`nav-link ${activeCategory === "electronics" ? "active bg-primary" : "text-dark"}`}
                onClick={(e) => handleCategoryClick("electronics", e)}
              >
                <i className="bi bi-laptop me-2"></i>Electronics
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeCategory === "men's clothing" ? "active bg-primary" : "text-dark"}`}
                onClick={(e) => handleCategoryClick("men's clothing", e)}
              >
                <i className="bi bi-person me-2"></i>Mens
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeCategory === "women's clothing" ? "active bg-primary" : "text-dark"}`}
                onClick={(e) => handleCategoryClick("women's clothing", e)}
              >
                <i className="bi bi-person-heart me-2"></i>Womens
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeCategory === "jewelery" ? "active bg-primary" : "text-dark"}`}
                onClick={(e) => handleCategoryClick("jewelery", e)}
              >
                <i className="bi bi-gem me-2"></i>Jewelery
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}