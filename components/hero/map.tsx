import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function Map() {
  return (
    <section className="  my-30 w-full ">
      <div className=" gap-8 w-full">
        <div className="max-w-full h-[60vh]  w-full object-contain md:object-cover ">
          <Image
            src="/map.jpg"
            alt="map"
            width={900}
            height={500}
            className="w-full h-[60vh] object-cover"
          />
        </div>
        <div className="flex flex-col gap-8 mt-10 md:max-w-[90%] md:pl-8 p-2">
          <h2 className="text-2xl md:text-5xl font-extrabold text-misecondary">
            Register with us as Hostel or Homstel
          </h2>
          <ul className="text-lg md:text-lg tracking-wide space-y-3 flex flex-col gap-2 md:p-4 ">
            <li>Steady source of income</li>
            <li>Higher occupancy rates and turnover</li>
            <li>No prior hospitality required to start </li>
            <div className="flex w-full gap-4 text-xl">
              <Button className="bg-miaccent/80 text-xl text-white px-8 py-4 cursor-pointer hover:bg-miaccent font-bold tracking-wide hover:-translate-y-0.5 duration-500 ease-out">
                list your hostel
              </Button>
              <Button className="text-miaccent  text-xl font-bold bg-white cursor-pointer hover:bg-miaccent hover:text-misecondary md:px-8 font-bold tracking-wide hover:-translate-y-0.5 duration-500 ease-out ">
                learn more
              </Button>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}
