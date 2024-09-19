"use client";

import ProductPageCard from "@/components/ProductPageCard";
import { useState, useEffect } from "react";

const Mens = ({ searchParams }) => {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data.products);
      setOriginalProducts(data.products);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let sortedProducts = [...originalProducts];

    switch (sortOption) {
      case "price-asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        sortedProducts = [...originalProducts];
        break;
      default:
        break;
    }

    setProducts(sortedProducts);
  }, [sortOption, originalProducts]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

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
          <h1 className="text-2xl md:text-3xl font-medium capitalize">
            {searchParams.category.slice(0, -1)}&apos;s Collection
          </h1>
          <select
            aria-label="Sort products by"
            className="border border-gray-300 rounded-md p-2 text-xs sm:text-sm md:text-base"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="" disabled>
              Sort by
            </option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-4 place-items-center">
          {products.map((product, index) => (
            <ProductPageCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mens;
