"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface testprops {
  message: string;
  author: string;
}
export function TestimonialCard(props: testprops) {
  return (
    <Card className="relative rounded-xl shadow-md p-4 overflow-hidden bg-gray-300">
      {/* Faint Background Quote Icon */}
      <Quote className="absolute top-4 left-4 h-12 w-12 text-gray-300 opacity-20" />

      <CardHeader className="relative z-10 p-0">
        <p className="text-xl text-gray-800 leading-relaxed">
          “{props.message}”
        </p>
      </CardHeader>

      <CardContent className="relative z-10 mt-4 p-0">
        <p className="font-semibold text-lg text-gray-900 text-right">
          — {props.author}
        </p>
      </CardContent>
    </Card>
  );
}
