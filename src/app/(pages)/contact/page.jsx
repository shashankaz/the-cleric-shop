"use client";

import { useState, useEffect } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      setStatus("Your message has been sent successfully!");

      if (!result.error) {
        setName("");
        setEmail("");
        setMessage("");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="px-4 sm:px-8 md:px-16 max-w-7xl mx-auto min-h-screen py-8">
      <h1 className="text-3xl font-medium mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
        <label htmlFor="name" className="text-lg">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter your name"
          className="w-full px-2 py-2 bg-gray-100 rounded-md outline-none"
        />
        <label htmlFor="email" className="text-lg">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="w-full px-2 py-2 bg-gray-100 rounded-md outline-none"
        />
        <label htmlFor="message" className="text-lg">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="7"
          required
          placeholder="Enter your message"
          className="w-full px-2 py-2 bg-gray-100 rounded-md outline-none resize-none"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="p-3 bg-gray-900 border-gray-900 text-white font-medium rounded-md mt-4"
        >
          Send Message
        </button>
      </form>
      {status && (
        <div className="mt-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-md">
          {status}
        </div>
      )}
    </div>
  );
};

export default Contact;
