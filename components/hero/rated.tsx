"use client";
import { ratedhostels } from "@/lib/constant";
import React from "react";
import Hostelcard from "../hostel/hostecard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Rated() {
  return (
    <div className="w-full max-w-6xl mx-auto py-6">
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {ratedhostels.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Hostelcard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
