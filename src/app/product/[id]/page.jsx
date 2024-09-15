"use client";

import { useState, useEffect } from "react";
import ProductImageGallery from "./ProductImageGallery";
import ProductDetails from "./ProductDetails";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";
import { useUser } from "@clerk/nextjs";

const ProductPage = ({ params }) => {
  const [activeTab, setActiveTab] = useState("description");
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const { user } = useUser();
  const userId = user?.id;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAddToCart = async () => {
    if (!userId) {
      alert("Please sign in to add items to your cart.");
      return;
    }

    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color before adding to the cart.");
      return;
    }

    try {
      const response = await fetch(`/api/cart/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: product._id,
          name: product.title,
          price: product.price,
          size: selectedSize,
          color: selectedColor,
          freeDelivery: product.shipping.freeShipping,
          quantity: 1,
        }),
      });

      if (response.ok) {
        alert("Product added to cart successfully!");
      } else {
        alert("Failed to add product to cart.");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`/api/products/${params.id}`);
      const data = await response.json();
      setProduct(data.product);
      setLoading(false);
    };

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
      <p className="flex items-center justify-center min-h-screen text-2xl">
        Loading...
      </p>
    );
  }

  return (
    <div className="px-4 sm:px-8 md:px-16 py-6 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row gap-6">
        <ProductImageGallery mainImage={product.mainImage} />
        <ProductDetails
          product={product}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          handleAddToCart={handleAddToCart}
        />
      </div>
      <ProductTabs activeTab={activeTab} handleTabClick={handleTabClick} />
      <RelatedProducts products={products} />
    </div>
  );
};

export default ProductPage;
