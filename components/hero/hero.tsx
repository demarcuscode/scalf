"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Heading2 from "../general/heading2";
import { Text } from "../general/text";
import Image from "next/image";

interface heroprops {
  className?: string;
}
export default function Hero(props: heroprops) {
  return (
    <section
      className={cn(
        "  md:flex md:items-center   md:max-w-[80%] gap-8 p-4 w-full md:justify-center md:items-center  text-white rounded-lg bg-blue-400 md:mx-auto ",
        props.className
      )}
    >
      <div className="md:max-w-lg p-4 flex gap-4 flex-col  ">
        <Heading2
          text="Get access to 500 plus hostels across KNUST"
          className=" uppercase "
        />
        <Text
          className="text-white capitalize "
          text="We provide clean hygienic students hostels  in affordable prices with safe and secure environments. "
        />
      </div>
      <div className="max-w-full h-[50vh] object-contain bg-blue-400">
        <Image
          src="/hero.png"
          alt="logo"
          width={500}
          height={500}
          className="object-contain h-[50vh] bg-blue-400"
          priority={true}
        />
      </div>
    </section>
  );
}
