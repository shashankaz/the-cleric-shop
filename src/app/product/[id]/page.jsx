"use client";

import { Star, Truck, RefreshCcw } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

const images = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/25747100/pexels-photo-25747100/free-photo-of-woman-sitting-at-gas-station.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/7294026/pexels-photo-7294026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/762084/pexels-photo-762084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const ProductPage = ({ params }) => {
  const [activeTab, setActiveTab] = useState("description");
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data.products);
      console.log(products);
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
  }, []);

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
        <div className="h-[452px] w-full md:w-1/2 flex flex-col justify-between">
          <div className="h-[340px] w-full rounded-md overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/1116380/pexels-photo-1116380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              height={1000}
              width={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex justify-between gap-4 mt-4">
            {images.map((image, index) => (
              <div key={index} className="h-24 w-36 rounded-md overflow-hidden">
                <Image
                  src={image.src}
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="min-h-[452px] w-full md:w-1/2 flex flex-col gap-4 px-4 md:px-6">
          <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
          <div className="flex items-center gap-2">
            <div className="flex gap-1 text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="text-sm md:text-base" />
              ))}
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-500">
              ({product.reviews.length} reviews)
            </p>
          </div>
          <h4 className="text-xl md:text-2xl font-bold">${product.price}</h4>
          <p className="text-sm md:text-base text-gray-700">
            {product.shortDescription}
          </p>
          <div>
            <p className="font-semibold text-sm md:text-base">Color</p>
            <div className="flex gap-2 mt-1">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className={`h-6 w-6 rounded-full border ${color
                    .toLowerCase()
                    .split(" ")
                    .join()}`}
                ></button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-sm md:text-base">Size</p>
            <div className="flex gap-2 mt-1">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className="py-2 px-4 border border-black rounded text-sm md:text-base hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button className="border rounded px-4 py-2 text-center bg-black text-white border-black hover:bg-gray-800 text-sm md:text-base">
            Buy Now
          </button>
          <div className="flex justify-between text-gray-700 text-xs sm:text-sm md:text-base">
            {product.shipping.freeShipping && (
              <p className="flex items-center gap-2">
                <Truck size={16} />
                Free shipping
              </p>
            )}
            {product.shipping.returnPolicy && (
              <p className="flex items-center gap-2">
                <RefreshCcw size={16} />
                30-day return policy
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="flex gap-4 mb-4">
          {["description", "comments"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-4 py-2 font-semibold text-sm md:text-base ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === "description" && (
          <div className="text-sm md:text-base text-gray-700">
            {product.description}
          </div>
        )}

        {activeTab === "comments" && (
          <div className="text-sm md:text-base text-gray-700">
            <p>Coming Soon!!</p>
          </div>
        )}
      </div>
      <div className="py-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-medium mb-6">
            Related Products
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 h-72 overflow-hidden">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;