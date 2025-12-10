import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function Map() {
  return (
    <section className="md:max-w-[80%] md:mx-auto mt-20  ">
      <div className=" gap-8 w-full">
        <div className="max-w-full h-[60vh]           w-full  ">
          <Image
            src="/map.jpg"
            alt="map"
            width={900}
            height={500}
            className="w-full h-[60vh] object-cover"
          />
        </div>
        <div className="flex flex-col gap-8 mt-10">
          <h2 className="text-3xl font-extrabold">
            Register with us as Hostel or Homstel
          </h2>
          <div className="text-xl tracking-wide flex flex-col gap-2">
            <li>Steady source of income</li>
            <li>Higher occupancy rates and turnover</li>
            <li>No prior hospitality required to start </li>
            <div className="flex w-full gap-4 text-xl">
              <Button className="bg-blue-400 text-xl text-white ">
                list your hostel
              </Button>
              <Button className="text-blue-400  text-xl font-bold bg-white ">
                learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
