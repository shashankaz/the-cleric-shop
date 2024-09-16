"use client";

import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-2xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2 px-4 sm:px-8 md:px-16 py-10 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl mb-4">Trending Products</h1>
        <p className="text-sm sm:text-base max-w-2xl mx-auto">
          Check out what&apos;s hot right now! Shop the trending products
          everyone is talking about.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 h-72 sm:h-80 overflow-hidden">
        {products
          .filter((product) => product.isFeatured)
          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
