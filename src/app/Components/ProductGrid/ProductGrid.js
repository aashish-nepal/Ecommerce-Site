"use client";
import Link from "next/link";
import PropTypes from 'prop-types';
import './ProductGrid.css'

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.title} 
          className="product-image"
          loading="lazy"
        />
      </div>
      <h3 className="product-title">
        <Link href={`/details/${product.id}`} className="product-link">
          {product.title}
        </Link>
      </h3>
    </article>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default function ProductGrid({ products }) {
  return (
    <section className="product-grid-container">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};