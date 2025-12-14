"use client";
import { ratedhostels } from "@/lib/constant";
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
    <div className="md:max-w-[90%] md:mx-auto  my-30">
      <Carousel className="w-full p-6 md:p-10 shadow-none">
        <CarouselContent className=" flex gap-4 p-4">
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
