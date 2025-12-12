"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusSquare } from "lucide-react";
import Image from "next/image";

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
    <div className="max-w-[90%] md:mx-auto  mt-10  p-4 h-full ">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <div className=" md:flex md:items-center ">
        <div className=" w-full md:max-w-[40%] h-[50vh] object-cover ">
          <video
            loop
            className=" w-full md:w-[40vw] h-[50vh]  object-cover"
            autoPlay={true}
            preload="none"
          >
            <source
              src="https://bez5btbsbycwy9xv.public.blob.vercel-storage.com/mapvideo.mp4"
              type="video/mp4"
              className="w-full  object-cover"
            />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col rounded-lg gap-4"
        >
          {faqs.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="bg-misecondary rounded-lg m-2 w-full p-3"
            >
              <AccordionTrigger className="text-lg text-card">
                {item.question}
              </AccordionTrigger>

              <AccordionContent className="bg-miprimary text-card rounded-lg  p-4 text-lg">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
