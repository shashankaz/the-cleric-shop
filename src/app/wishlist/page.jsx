"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import WishlistItem from "./WishlistItem";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const userId = user?.id;

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await fetch(`/api/wishlist/${userId}`, { method: "GET" });
        const data = await res.json();

        if (res.ok) {
          setWishlistItems(data.wishlist.items);
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error("Failed to fetch wishlist:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchWishlist();
    }
  }, [userId]);

  const handleRemoveItem = async (productId) => {
    try {
      const res = await fetch(`/api/wishlist/${userId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      const data = await res.json();

      if (res.ok) {
        setWishlistItems((prevItems) =>
          prevItems.filter((item) => item.product._id !== productId)
        );
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Failed to remove item from wishlist:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-2xl">
        Loading...
      </div>
    );
  }

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
          <WishlistItem
            key={item.product._id}
            item={item}
            onRemove={handleRemoveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
