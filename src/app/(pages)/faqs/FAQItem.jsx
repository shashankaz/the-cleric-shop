import { ChevronDown, ChevronUp } from "lucide-react";

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-300 py-3">
      <div
        className="flex justify-between items-center py-3 cursor-pointer"
        onClick={onToggle}
      >
        <h3 className="text-lg font-medium">{faq.question}</h3>
        <span className="text-xl">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </div>
      {isOpen && (
        <div className="py-2 text-gray-700">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
