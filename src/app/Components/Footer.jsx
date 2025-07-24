import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Brand Column */}
            <div className="col-12 mb-4">
              <Image
                src="/images/mark.png"
                alt="Marketo Logo"
                width={150}
                height={45}
                className="img-fluid"
                style={{
                  maxHeight: "30px",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>

            {/* Contact Column */}
            <div className="col-12 col-md-4 mb-5 mb-md-0">
              <h2 className="h5 mb-3">Got Questions? Call us 24/7</h2>
              <address className="mb-3">
                <a
                  href="tel:+9779869100969"
                  className="h4 d-block text-decoration-none text-white"
                >
                  +977 9869100969
                </a>
                <p className="mb-3">Kathmandu-4406, Nepal</p>
              </address>
              <button
                type="button"
                className="btn btn-outline-light rounded-0"
                aria-label="View our location on map"
              >
                View On Map
              </button>
            </div>

            {/* Payment Methods Column */}
            <div className="col-12 col-md-4 mb-5 mb-md-0">
              <h2 className="h5 mb-3">We Use Safe Payments</h2>
              <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                <Image
                  src="/images/Skrill.svg"
                  alt="Skrill"
                  width={80}
                  height={40}
                  className="img-fluid"
                />
                <Image
                  src="/images/paypal.png"
                  alt="PayPal"
                  width={100}
                  height={40}
                  className="img-fluid"
                />
                <Image
                  src="/images/American-Exp.png"
                  alt="American Express"
                  width={80}
                  height={40}
                  className="img-fluid"
                />
              </div>
              <p className="text-muted small mb-2">Secured by:</p>
              <div className="d-flex flex-wrap align-items-center gap-3"></div>
            </div>

            {/* Links Column */}
            <div className="col-12 col-md-4">
              <div className="row">
                <div className="col-6">
                  <h3 className="h5 mb-3">Our Stores</h3>
                  <ul className="list-unstyled">
                    {[
                      "New York",
                      "London SF",
                      "Cockfosters BP",
                      "Los Angeles",
                      "Chicago",
                      "Las Vegas",
                      "Albarto",
                    ].map((location) => (
                      <li key={location} className="mb-2">
                        <Link
                          href="#"
                          className="text-white-50 text-decoration-none hover-text-white"
                        >
                          {location}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-6">
                  <h3 className="h5 mb-3">Quick Links</h3>
                  <ul className="list-unstyled">
                    {[
                      "Support Center",
                      "Terms and Conditions",
                      "Shipping",
                      "Privacy Policy",
                      "Help",
                      "Product Returns",
                      "FAQs",
                    ].map((link) => (
                      <li key={link} className="mb-2">
                        <Link
                          href="#"
                          className="text-white-50 text-decoration-none hover-text-white"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <section className="bg-warning text-dark py-3">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="mb-3 mb-md-0">
              <p className="mb-0 small">
                © {currentYear} Aashish Nepal. All Rights Reserved.
              </p>
            </div>
            <div>
              <ul className="list-unstyled d-flex flex-wrap gap-3 mb-0">
                {[
                  { name: "Facebook", icon: "bi-facebook" },
                  { name: "Twitter", icon: "bi-twitter" },
                  { name: "Pinterest", icon: "bi-pinterest" },
                  { name: "Instagram", icon: "bi-instagram" },
                ].map((social) => (
                  <li key={social.name}>
                    <Link
                      href="#"
                      className="text-dark text-decoration-none d-flex align-items-center gap-1 small"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <i className={`bi ${social.icon}`}></i>
                      <span className="d-none d-sm-inline">{social.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
