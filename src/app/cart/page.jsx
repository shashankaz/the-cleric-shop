"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const userId = user?.id;

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`/api/cart/${userId}`);
        const data = await response.json();
        setCartItems(data.cart.items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    if (userId) {
      fetchCartItems();
    }
  }, [userId]);

  if (loading) {
    return (
      <p className="flex items-center justify-center min-h-screen text-2xl">
        Loading...
      </p>
    );
  }

  if (cartItems.length === 0) {
    return (
      <p className="flex items-center justify-center min-h-screen text-2xl">
        Your cart is empty!
      </p>
    );
  }

  const getTotalPrice = () => {
    return cartItems?.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 py-6 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 gap-6">
        {cartItems.map((item) => (
          <div
            key={item.product._id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <div className="h-32 w-32 overflow-hidden rounded-md">
                {item.product.image ? (
                  <Image
                    src={item.product.image}
                    height={1000}
                    width={1000}
                    alt={item.product.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    height={1000}
                    width={1000}
                    alt="Placeholder Image"
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <div>
                <h2 className="text-lg font-semibold">{item.product.name}</h2>
                <p className="text-sm text-gray-600">
                  ${item.product.price} x {item.quantity}
                </p>
                <p className="text-sm text-gray-500">
                  Size: {item.product.size} | Color: {item.product.color}
                </p>
                <p className="text-sm text-gray-500">
                  {item.product.freeDelivery
                    ? "Free Delivery"
                    : "Delivery Charges Apply"}
                </p>
                <div className="flex gap-2 mt-2">
                  <button className="border px-2 py-1 rounded text-sm">
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button className="border px-2 py-1 rounded text-sm">
                    +
                  </button>
                </div>
              </div>
            </div>
            <button className="text-red-500 hover:text-red-700">Remove</button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center pt-4">
        <p className="text-xl font-semibold">Total: ${getTotalPrice()}</p>
        <button className="bg-black text-white px-6 py-2 rounded-md">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;