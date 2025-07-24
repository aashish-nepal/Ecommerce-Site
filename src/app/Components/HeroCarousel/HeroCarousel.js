"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import "./HeroCarousel.css";
import BootstrapClient from "../BootstrapClient"; 

export default function HeroCarousel() {
  const bannerItems = [
    {
      id: 1,
      image: "/images/banner.png",
      alt: "Special offer",
      href: "#"
    },
    {
      id: 2,
      image: "/images/banner1.jpg",
      alt: "New arrivals",
      href: "#"
    }
  ];

  useEffect(() => {
    if (typeof window !== "undefined" && window.bootstrap?.Carousel) {
      const carousel = document.getElementById("carouselExampleCaptions");
      if (carousel) {
        const carouselInstance = new window.bootstrap.Carousel(carousel, {
          interval: 3000,
          ride: "carousel",
          pause: "hover",
        });

        return () => {
          carouselInstance.dispose();
        };
      }
    }
  }, []);

  return (
    <>
    <BootstrapClient />
    <section>
      <div className="container text-center py-4">
        <div className="row">
          {/* Main carousel for large screens */}
          <div className="col-md-8 order-md-1 order-1 carousel-wrapper">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
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
                    width={800}
                    height={500}
                    priority
                  />
                  <div className="carousel-caption">
                    <h5>Get 50% Off</h5>
                    <h2>SHOP WISE WITH PRICE COMPARISONS</h2>
                    <div className="slink">
                      <Link className="aone btn" href="#" role="button">
                        VIEW COLLECTION
                      </Link>
                      <Link className="atwo btn" href="#" role="button">
                        CATEGORIES
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <Image
                    src="/images/Front.png"
                    className="d-block w-100 frontimg"
                    alt="img"
                    width={800}
                    height={500}
                  />
                  <div className="carousel-caption">
                    <h5>Summer Collection</h5>
                    <h2>NEW ARRIVALS JUST FOR YOU</h2>
                    <div className="slink">
                      <Link className="aone btn" href="#" role="button">
                        SHOP NOW
                      </Link>
                      <Link className="atwo btn" href="#" role="button">
                        BROWSE ALL
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <Image
                    src="/images/Front.png"
                    className="d-block w-100 frontimg"
                    alt="img"
                    width={800}
                    height={500}
                  />
                  <div className="carousel-caption">
                    <h5>Limited Time Offer</h5>
                    <h2>PREMIUM QUALITY AT BEST PRICES</h2>
                    <div className="slink">
                      <Link className="aone btn" href="#" role="button">
                        VIEW DEALS
                      </Link>
                      <Link className="atwo btn" href="#" role="button">
                        LEARN MORE
                      </Link>
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
          <div className="col-lg-4 order-lg-2 order-2">
              <div className="d-flex flex-column h-100 gap-3">
                {bannerItems.map((banner) => (
                  <div key={`banner-${banner.id}`} className="position-relative overflow-hidden rounded-3 banner-container">
                    <Link href={banner.href} className="d-block h-100">
                      <Image
                        src={banner.image}
                        className="d-block w-100 h-100 banner-image"
                        alt={banner.alt}
                        width={400}
                        height={285}
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="banner-overlay">
                        <span className="banner-overlay-text">Shop Now</span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  );
}