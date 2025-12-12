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
        "md:flex md:items-center md:max-w-[90%] md:mx-auto md:jusity-center w-full md:gap-12 md:p-12 ",
        props.className
      )}
    >
      <div className="flex  flex-col gap-4 p-4 md:max-w-lg  ">
        <Heading2
          text="Get access to 500 plus hostels across ghana"
          className=" capitalize  text-left text-4xl  md:text-5xl  tracking-wide leading-0.7 font-bold "
        />
        <Text
          className="text-text text-base  text-left"
          text="We provide clean hygienic students hostels  in affordable prices with safe and secure environments. "
        />
      </div>
      <div className="max-w-full h-[60vh] object-cover ">
        <Image
          src="/hero.png"
          alt="logo"
          width={500}
          height={500}
          className="  bg-blue-400 object-cover"
          priority={true}
        />
      </div>
    </section>
  );
}
