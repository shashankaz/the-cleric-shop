"use client";

import { useState, useEffect } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      setResult(result);

      if (!result.error) {
        setEmail("");
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

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
      {submitted && (
        <p className="text-center mt-8 text-sm sm:text-base">
          {result.message}
        </p>
      )}
    </div>
  );
};

export default Subscribe;
