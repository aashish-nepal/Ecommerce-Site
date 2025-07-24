"use client";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import BannerGrid from "./components/BannerGrid/BannerGrid";
import CategoryNav from "./components/CategoryNav/CategoryNav";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import CategorySection from "./components/CategorySection/CategorySection";


export default function Home() {
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

  const handleCategoryClick = (category, event) => {
    event.preventDefault();
    setActiveCategory(category);
    window.scrollBy({
      top: 100,
      behavior: "smooth",
    });
  };

  // Filter products by category
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

  return (
    <>
      <Header />
      <HeroCarousel />
      <BannerGrid />
      
      <section className="py-5">
        <CategoryNav 
          activeCategory={activeCategory} 
          handleCategoryClick={handleCategoryClick} 
        />
        <ProductGrid products={products} />
      </section>

      <CategorySection 
        title="Women Clothing"
        products={womensClothing}
        imageSrc="/images/women.jpg"
        bgColor="warning"
      />
      
      <CategorySection 
        title="Men's Clothing"
        products={mensClothing}
        imageSrc="/images/men.png"
        bgColor="success"
      />
      
      <CategorySection 
        title="Electronics"
        products={electronics}
        imageSrc="/images/electronic.png"
        bgColor="danger"
      />
      
      <CategorySection 
        title="Jewelery"
        products={jewelery}
        imageSrc="/images/jewelery.jpg"
        bgColor="info"
      />
    </>
  );
}