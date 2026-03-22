"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is Hollywood AI?",
    answer:
      "HollywoodAI is designed to help you get high-quality summaries of your favourite movies instantly, without breaking a sweat. With our intuitive interface and powerful features, you can easily digest any movie in just minutes instead of hours.",
  },
  {
    question: "How much does Hollywood AI cost?",
    answer:
      "Get summaries of your favourite movies on your smartphone, tablet or laptop, all for one fixed monthly or yearly fee. Plans range from $19 per month to $190 per year. No extra costs, no contracts.",
  },
  {
    question: "What can I watch on Hollywood AI?",
    answer:
      "Hollywood AI has an extensive library of feature films. Watch as much as you want, at any time that you want.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-3xl mx-auto p-4 sm:p-10 text-white">
      <h2 className="text-2xl font-bold mb-8 tracking-tight text-center sm:text-left">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-white/40 rounded-2xl bg-[#121214] overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-white/2 transition-colors"
              >
                <span className="font-semibold text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <div className="text-blue-400 shrink-0">
                  {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-5 sm:p-6 pt-0 text-zinc-400 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
