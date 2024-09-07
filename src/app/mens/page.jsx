"use client";

import ProductPageCard from "@/components/ProductPageCard";
import { useState, useEffect } from "react";

const Mens = () => {
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
      <p className="flex items-center justify-center min-h-screen text-2xl">
        Loading...
      </p>
    );
  }

  return (
    <div className="px-4 sm:px-8 md:px-16 max-w-7xl mx-auto min-h-screen">
      <div></div>
      <div className="py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-medium">Men&apos;s Collection</h1>
          <select
            aria-label="Sort products by"
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="" disabled selected>
              Sort by
            </option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductPageCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mens;
