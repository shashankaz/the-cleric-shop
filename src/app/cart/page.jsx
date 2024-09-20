"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { Toaster, toast } from "sonner";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";

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

  const handleDelete = async (productId) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/cart/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });
      if (!response.ok) throw new Error("Failed to delete item");
      const data = await response.json();
      setCartItems(data.cart.items);
      toast.success("Item removed from cart successfully");
    } catch (error) {
      setError("Error deleting item from cart");
      toast.error("Failed to remove item from cart");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (productId, quantity) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/cart/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: productId, quantity: quantity }),
      });
      if (!response.ok) throw new Error("Failed to update qunatity");
      const data = await response.json();
      setCartItems(data.cart.items);
      toast.success("Quantity updated successfully");
    } catch (error) {
      setError("Error update qunatity in cart");
      toast.error("Failed to update quantity in cart");
    } finally {
      setLoading(false);
    }
  };

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  const handleCheckout = async () => {
    try {
      setLoading(true);

      const stripe = await stripePromise;

      const response = await fetch("/api/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cartItems }),
      });

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
    } catch (error) {
      toast.error("Failed to create checkout session");
    } finally {
      setLoading(false);
    }
  };

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
              <div className="h-32 w-32 overflow-hidden rounded-md bg-gray-200 animate-pulse">
                {/* {item.product.image ? (
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
                )} */}
              </div>
              <div>
                <Link href={`product/${item.product._id}`}>
                  <h2 className="text-lg font-semibold">{item.product.name}</h2>
                </Link>
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
                  <button
                    onClick={() => {
                      handleUpdate(item.product._id, item.quantity - 1);
                    }}
                    className="border px-2 py-1 rounded text-sm"
                    disabled={item.quantity === 1 || loading}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => {
                      handleUpdate(item.product._id, item.quantity + 1);
                    }}
                    className="border px-2 py-1 rounded text-sm"
                    disabled={loading}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                handleDelete(item.product._id);
              }}
              className="text-red-500 hover:text-red-700"
              disabled={loading}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center pt-4">
        <p className="text-xl font-semibold">Total: ${getTotalPrice()}</p>
        <button
          className="bg-black text-white px-6 py-2 rounded-md"
          disabled={loading}
        >
          Proceed to Checkout
        </button>
      </div>

      <Toaster position="top-center" />
    </div>
  );
};

export default Cart;
