"use client";

import { useState } from "react";
import { Toaster, toast } from "sonner";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!result.error) {
        setEmail("");
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 py-12 sm:py-20 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl text-center mb-4">
        Join Our Newsletter
      </h1>
      <p className="text-sm sm:text-base max-w-2xl mx-auto text-center mb-6">
        Stay updated with our latest offers and products. Subscribe now and get
        10% off your first purchase!
      </p>
      <form
        className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="border p-3 rounded border-gray-300 outline-none w-full sm:w-auto flex-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-gray-900 text-white border border-gray-900 py-3 px-6 rounded mt-4 sm:mt-0"
        >
          Subscribe
        </button>
      </form>

      <Toaster position="top-center" />
    </div>
  );
};

export default Subscribe;
