"use client";
import { FaQuestionCircle } from "react-icons/fa";
import Link from "next/link";

const MiniFAQ = () => {
  const faqs = [
    {
      question: "Is LivingSpot free to use?",
      answer: "Yes! Searching for houses is completely free for tenants.",
    },
    {
      question: "How do I contact a landlord?",
      answer: "You can message landlords directly through our platform.",
    },
    {
      question: "Are listings verified?",
      answer: "We verify most listings, but we recommend tenants conduct due diligence before making any payments.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 mb-10">
          Find quick answers to common questions about using LivingSpot.
        </p>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map(({ question, answer }, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h3 className="flex items-center text-lg font-semibold text-gray-900">
                <FaQuestionCircle className="mr-3 text-red-500 text-xl" />
                {question}
              </h3>
              <p className="mt-2 text-gray-700">{answer}</p>
            </div>
          ))}
        </div>

        {/* View All FAQs Button */}
        <div className="mt-10">
          <Link href="/faq">
            <button className="px-6 py-3 bg-red-500 text-white font-semibold text-lg rounded-full shadow-md transition duration-300 hover:bg-red-600">
              View All FAQs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MiniFAQ;
