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
    <div className="max-w-[90%] mx-auto ">
      <Carousel className="w-full">
        <CarouselContent className=" flex gap-4">
          {ratedhostels.map((item, index) => (
            <CarouselItem
              key={index}
              className=" basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis1/3"
            >
              <Hostelcard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex " />
      </Carousel>
    </div>
  );
}
