"use client";
import { TestimonialCard } from "@/components/hero/testimonialcard";

const testimonials = [
  {
    message:
      "This app helped me find a hostel in minutes. The experience was smooth and easy.",
    author: "Sarah Owusu",
  },
  {
    message: "Excellent service! The UI is clean and beautiful. I love it.",
    author: "Michael Amankwah",
  },
  {
    message: "Excellent service! The UI is clean and beautiful. I love it.",
    author: "Ansah Debrina",
  },
  {
    message: "Excellent service! The UI is clean and beautiful. I love it.",
    author: "Osei Poku ",
  },
  {
    message: "Excellent service! The UI is clean and beautiful. I love it.",
    author: "Benedicta Asuo",
  },
];

export default function TestimonialsSection() {
  return (
    <div className="w-full  mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold text-center mb-4">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 md:max-w-[95%] md:mx-auto ">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} message={t.message} author={t.author} />
        ))}
      </div>
    </div>
  );
}
