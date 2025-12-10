"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusSquare } from "lucide-react";

// FAQ Data
export const faqs = [
  {
    id: "1",
    question: "How do I book a hostel?",
    answer:
      "You can book a hostel directly through our platform by selecting a room, entering your details, and confirming the reservation.",
  },
  {
    id: "2",
    question: "Is there free Wi-Fi available?",
    answer:
      "Yes, all hostels listed provide complimentary high-speed Wi-Fi 24/7.",
  },
  {
    id: "3",
    question: "Can I cancel my booking?",
    answer:
      "Yes, cancellation policies vary depending on the hostel. Please check the policy details before booking.",
  },
  {
    id: "4",
    question: "Are study rooms available?",
    answer:
      "Most hostels include dedicated study rooms. The availability depends on the specific hostel.",
  },
  {
    id: "5",
    question: "Do hostels provide clean drinking water?",
    answer:
      "Yes, all verified hostels must provide filtered drinking water as part of their basic amenities.",
  },
];

export default function FAQ() {
  return (
    <div className="w-full md:max-w-[65%] md:mx-auto p-4 mt-10 md:flex md:justify-between p-4 w-full">
      <h2 className="text-4xl font-extrabold mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <div>
        <Accordion type="single" collapsible className="w-full ">
          {faqs.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="bg-gray-300 m-2 w-full p-2"
            >
              <AccordionTrigger className="text-lg">
                {item.question}
              </AccordionTrigger>

              <AccordionContent className="bg-gray-200 p-4 text-lg">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
