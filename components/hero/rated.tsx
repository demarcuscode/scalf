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

import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

export default function Rated() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size safely (no hydration error)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="md:max-w-[95%] md:mx-auto my-30">
      <Carousel
        className="w-full p-6 md:p-10 shadow-none"
        plugins={
          isMobile
            ? [
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                }),
              ]
            : []
        }
      >
        <CarouselContent className="flex gap-4 p-4">
          {ratedhostels.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3"
            >
              <Hostelcard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons (Desktop only) */}
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}
