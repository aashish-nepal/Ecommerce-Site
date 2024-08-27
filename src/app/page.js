"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "../app/Components/Uni.css";
import Image from 'next/image';

function Page() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("electronics");
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // Fetch all products once and store them
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setAllProducts(json));

    // Fetch products based on the active category
    fetch(`https://fakestoreapi.com/products/category/${activeCategory}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [activeCategory]);

  // Filter the women's clothing products for the last section
  const womensClothing = allProducts.filter(
    (product) => product.category === "women's clothing"
  );

  const mensClothing = allProducts.filter(
    (product) => product.category === "men's clothing"
  );

  const electronics = allProducts.filter(
    (product) => product.category === "electronics"
  );

  const jewelery = allProducts.filter(
    (product) => product.category === "jewelery"
  );

  const handleCategoryClick = (category, event) => {
    event.preventDefault();
    setActiveCategory(category);
    window.scrollBy({
      top: 100, // Adjust the value for the desired scroll amount
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
              <div className="btn-group">
                <button
                  className="bt-group btn btn-warning dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  <i className="bi bi-list"></i> Categories
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <div className="btn-group dropend">
                      <button
                        type="button"
                        class="btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Speaker
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="btn-group dropend">
                      <button
                        type="button"
                        className="btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Portable
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="btn-group dropend">
                      <button
                        type="button"
                        className="btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Mobile
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <div className="btn-group dropend">
                      <button
                        type="button"
                        className="btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Light
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <div className="btn-group dropend">
                      <button
                        type="button"
                        className="btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Headphone
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <div class="btn-group dropend">
                      <button
                        type="button"
                        class="btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Google Glass
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <div className="btn-group dropend">
                      <button
                        type="button"
                        className="btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Drone
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <div className="btn-group dropend">
                      <button
                        type="button"
                        className="btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Camera
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <div className="btn-group dropend">
                      <button
                        type="button"
                        className="btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        3d Glass
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
              <form className="d-flex align-items-center gap-3" role="search">
                <input
                  className="form-control p-2"
                  type="search"
                  placeholder="Find products..."
                />
                <div className="btn-group">
                  <button
                    className="bttns bt-group btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    Categories
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Electronics
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Men&apos;s Clothes
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Women&apos;s Clothes
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Jewelery
                      </a>
                    </li>
                  </ul>
                  <button className="btn bttn" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </form>
            </div>

            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end">
              <a className="btnl btn btn-secondary" href="#" role="button">
                BLACK FRIDAY <br />
                <span>Get 45% Off</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center py-4">
          <div className="row">
            {/* Main carousel for large screens */}
            <div className="col-md-8 order-md-1 order-1">
              <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
                </div>
                <div className="carousel-inner py-3 py-md-0">
                  <div className="carousel-item active">
                    <Image
                      src="/images/Front.png"
                      className="d-block w-100 frontimg"
                      alt="img"
                      width={500}
                      height={500} 
                    />
                    <div className="carousel-caption">
                      <h5>Get 50% Off</h5>
                      <h2>SHOP WISE WITH PRICE COMPARISONS</h2>
                      <div className="slink">
                        <a className="aone btn" href="#" role="button">
                          VIEW COLLECTION
                        </a>
                        <a className="atwo btn" href="#" role="button">
                          CATEGORIES
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item active">
                    <Image
                      src="/images/Front.png"
                      className="d-block w-100 frontimg"
                      alt="img"
                      width={500}
                      height={500} 
                    />
                    <div className="carousel-caption">
                      <h5>Get 50% Off</h5>
                      <h2>SHOP WISE WITH PRICE COMPARISONS</h2>
                      <div className="slink">
                        <a
                          className="aone btn btn-sm btn-md"
                          href="#"
                          role="button"
                        >
                          VIEW COLLECTION
                        </a>
                        <a className="atwo btn" href="#" role="button">
                          CATEGORIES
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                  <Image
                      src="/images/Front.png"
                      className="d-block w-100 frontimg"
                      alt="img"
                      width={500}
                      height={500} 
                    />
                    <div className="carousel-caption">
                      <h5>Get 50% Off</h5>
                      <h2>SHOP WISE WITH PRICE COMPARISONS</h2>
                      <div className="slink">
                        <a className="aone btn" href="#" role="button">
                          VIEW COLLECTION
                        </a>
                        <a className="atwo btn" href="#" role="button">
                          CATEGORIES
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            {/* Additional carousels for smaller screens */}
            <div className="col order-md-2 order-2 mb-3 mb-md-0">
              <div id="carouselExample" className="carousel slide mb-3">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <a href="#">
                      <Image
                        src="/images/banner.png"
                        className="d-block w-100 banimg"
                        alt="..."
                        width={200} 
                        height={235}
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div id="carouselExample" className="carousel slide sesilde">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <a href="#">
                      <Image
                        src="/images/banner1.jpg"
                        className="d-block w-100 banimg"
                        alt="..."
                        width={200} 
                        height={235}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center  py-md-5">
          <div className="offer row">
            <div className="col px-0">
              <a href="#">
                <Image
                  className="zoom-img"
                  src="/images/banner2.jpg"
                  alt="img"
                  width={200} 
                  height={250}
                />
              </a>
            </div>
            <div className="col">
              <a href="#">
              <Image
                  className="zoom-img"
                  src="/images/banner3.png"
                  alt="img"
                  width={200} 
                  height={250}
                />
              </a>
            </div>
            <div className="col">
              <a href="#">
              <Image
                  className="zoom-img"
                  src="/images/banner4.jpg"
                  alt="img"
                  width={200} 
                  height={250}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container datanav">
          <h1 className="datah1">Top Categories This Week</h1>
          <ul className="nav">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeCategory === "electronics" ? "active" : ""
                }`}
                aria-current="page"
                href="#"
                onClick={(e) => handleCategoryClick("electronics", e)}
              >
                Electronics
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeCategory === "men's clothing" ? "active" : ""
                }`}
                href="#"
                onClick={(e) => handleCategoryClick("men's clothing", e)}
              >
                Men&apos;s Clothes
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeCategory === "women's clothing" ? "active" : ""
                }`}
                href="#"
                onClick={(e) => handleCategoryClick("women's clothing", e)}
              >
                Women&apos;s Clothes
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeCategory === "jewelery" ? "active" : ""
                }`}
                href="#"
                onClick={(e) => handleCategoryClick("jewelery", e)}
              >
                Jewellery
              </a>
            </li>
          </ul>
        </div>

        <div className="container d-flex flex-wrap justify-content-center">
          {products.map((a) => (
            <div className="datadiv" key={a.id}>
              <img className="dataimg" src={a.image} alt={a.title} />
              <h2 className="datatitle">
                <Link href={`/details/${a.id}`}>{a.title}</Link>
              </h2>
            </div>
          ))}
        </div>
      </section>

      <section className="py-5">
        <div className="container list-border d-flex flex-column flex-md-row">
          <div className="list-group col-md-3 mb-3 mb-md-0 text-center">
            <h3 className="listh3 list-group-item list-group-item-action">
              Women Clothing
            </h3>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-warning"
            >
              Speaker
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-warning"
            >
              Portable
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-warning"
            >
              Mobile
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-warning"
            >
              Light
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-warning"
            >
              Headphone
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-warning"
            >
              Google Glass
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-warning"
            >
              Drone
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-warning"
            >
              Camera
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-warning"
            >
              3d Glass
            </a>
          </div>

          <figure className="figure col-md-2 mb-3 mb-md-0">
            <Image
              src="/images/women.jpg"
              className="figure-img img-fluid"
              alt="..."
              width={200} 
              height={0}
            />
          </figure>

          <div className="container d-flex flex-wrap">
            {womensClothing.map((a) => (
              <div className="datadivtwo" key={a.id}>
                <img className="dataimgtwo" src={a.image} alt={a.title} />
                <h2 className="datatitletwo">
                  <Link href={`/details/${a.id}`}>{a.title}</Link>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container list-border d-flex flex-column flex-md-row">
          <div className="list-group col-md-3 mb-3 mb-md-0 text-center">
            <h3 className="listh3 list-group-item list-group-item-action">
              Men&apos;s Clothing
            </h3>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-success"
            >
              Speaker
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-success"
            >
              Portable
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-success"
            >
              Mobile
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-success"
            >
              Light
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-success"
            >
              Headphone
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-success"
            >
              Google Glass
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-success"
            >
              Drone
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-success"
            >
              Camera
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-success"
            >
              3d Glass
            </a>
          </div>

          <figure className="figure col-md-2 mb-3 mb-md-0">
            <Image
              src="/images/men.png"
              className="figure-img img-fluid"
              alt="..."
              width={200} 
              height={0}
            />
          </figure>

          <div className="container d-flex flex-wrap">
            {mensClothing.map((a) => (
              <div className="datadivtwo" key={a.id}>
                <img className="dataimgtwo" src={a.image} alt={a.title} />
                <h2 className="datatitletwo">
                  <Link href={`/details/${a.id}`}>{a.title}</Link>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container list-border d-flex flex-column flex-md-row">
          <div className="list-group col-md-3 mb-3 mb-md-0 text-center">
            <h3 className="listh3 list-group-item list-group-item-action">
              Electronics
            </h3>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-danger"
            >
              Speaker
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-danger"
            >
              Portable
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-danger"
            >
              Mobile
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-danger"
            >
              Light
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-danger"
            >
              Headphone
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-danger"
            >
              Google Glass
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-danger"
            >
              Drone
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-danger"
            >
              Camera
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-danger"
            >
              3d Glass
            </a>
          </div>

          <figure className="figure col-md-2 mb-3 mb-md-0">
            <Image
              src="/images/electronic.png"
              className="figure-img img-fluid"
              alt="..."
              width={200} 
              height={0}
            />
          </figure>

          <div className="container d-flex flex-wrap">
            {electronics.map((a) => (
              <div className="datadivtwo" key={a.id}>
                <img className="dataimgtwo" src={a.image} alt={a.title} />
                <h2 className="datatitletwo">
                  <Link href={`/details/${a.id}`}>{a.title}</Link>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-5">
        <div className="container list-border d-flex flex-column flex-md-row">
          <div className="list-group col-md-3 mb-3 mb-md-0 text-center">
            <h3 className="listh3 list-group-item list-group-item-action">
              Jewelery
            </h3>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-info"
            >
              Speaker
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-info"
            >
              Portable
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-info"
            >
              Mobile
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-info"
            >
              Light
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-info"
            >
              Headphone
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-info"
            >
              Google Glass
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-info"
            >
              Drone
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-info"
            >
              Camera
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-info"
            >
              3d Glass
            </a>
          </div>

          <figure className="figure col-md-2 mb-3 mb-md-0">
            <Image
              src="/images/jewelery.jpg"
              className="figure-img img-fluid"
              alt="..."
              width={200} 
              height={250}
            />
          </figure>

          <div className="container d-flex flex-wrap">
            {jewelery.map((a) => (
              <div className="datadivtwo" key={a.id}>
                <img className="dataimgtwo" src={a.image} alt={a.title} />
                <h2 className="datatitletwo">
                  <Link href={`/details/${a.id}`}>{a.title}</Link>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
