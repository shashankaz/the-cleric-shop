"use client";

import { useState } from "react";
import Image from "next/image";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      title: "Stylish Jacket",
      price: 59.99,
      imageUrl:
        "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Classic Sneakers",
      price: 89.99,
      imageUrl:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Vintage Watch",
      price: 129.99,
      imageUrl:
        "https://images.pexels.com/photos/3648220/pexels-photo-3648220.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]);

  const handleRemoveItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen text-2xl">
        Your wishlist is empty!
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-8 md:px-16 py-6 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 flex flex-col items-center justify-between shadow-md"
          >
            <div className="h-40 w-full rounded-md overflow-hidden mb-4">
              <Image
                src={item.imageUrl}
                height={300}
                width={400}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="mt-4 text-red-500 hover:text-red-700"
            >
              Remove from Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
