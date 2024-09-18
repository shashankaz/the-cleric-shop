"use client";

import { useState } from "react";
import { faqs } from "./faqs";
import FAQItem from "./FAQItem";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 max-w-7xl mx-auto min-h-screen py-8">
      <h1 className="text-3xl font-medium mb-6">Frequently Asked Questions</h1>
      <div>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
