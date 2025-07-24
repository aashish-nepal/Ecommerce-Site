"use client";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import "./CategorySection.css";

const CategorySection = ({ title, products, imageSrc, bgColor = "primary" }) => {
  const categories = [
    "Speaker",
    "Portable",
    "Mobile",
    "Light",
    "Headphone",
    "Google Glass",
    "Drone",
    "Camera",
    "3d Glass",
  ];

  return (
    <section className="category-section">
      <div className="category-container">
        {/* Category Navigation */}
        <aside className="category-navigation">
          <div className="navigation-header">
            <h2 className="category-title">{title}</h2>
          </div>
          <ul className="category-list">
            {categories.map((category, index) => (
              <li key={index} className="category-item">
                <Link
                  href="#"
                  className={`category-link ${bgColor}`}
                  aria-label={`Browse ${category} category`}
                >
                  <span className="link-text">{category}</span>
                  <span className="link-arrow">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content Area */}
        <div className="content-area">
          {/* Promotional Banner */}
          <div className="promotional-banner">
            <div className="banner-inner">
              <Image
                src={imageSrc}
                alt={`Featured ${title}`}
                width={280}
                height={420}
                className="banner-image"
                priority
              />
              <div className="banner-overlay">
                <span className="banner-badge">Featured</span>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="product-grid">
            {products.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-badge">New</div>
                <div className="product-image-container">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="product-image"
                  />
                </div>
                <div className="product-details">
                  <h3 className="product-title">
                    <Link
                      href={`/details/${product.id}`}
                      className="product-link"
                      aria-label={`View ${product.title} details`}
                    >
                      {product.title}
                    </Link>
                  </h3>
                  <div className="product-actions">
                    <button className="quick-view">Quick View</button>
                    <button className="add-to-cart">
                      <span className="cart-icon">+</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

CategorySection.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  imageSrc: PropTypes.string.isRequired,
  bgColor: PropTypes.oneOf(["primary", "secondary", "accent"]),
};

export default CategorySection;