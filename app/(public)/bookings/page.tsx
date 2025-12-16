import BookingCard from "@/components/bookings/bookingcard";
import { bookings } from "@/lib/constant";
import React from "react";

export default function page() {
  return (
    <section className="">
      <div className="pt-20 flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:items-center md:max-w-[80%] md:mx-auto">
        {bookings.map((item, index) => {
          return <BookingCard key={index} hostel={item} />;
        })}
      </div>
    </section>
  );
}
