import { BookOpen, Coffee, Droplet, Toilet, Wifi, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";
import Heading3 from "../general/heading3";
import Heading2 from "../general/heading2";

export type Amenity = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

export const amenities: Amenity[] = [
  { id: "wifi", label: "Wi‑Fi", icon: <Wifi className="h-10 w-10" /> },
  {
    id: "study-room",
    label: "Study room",
    icon: <BookOpen className="h-10 w-10" />,
  },

  {
    id: "free-electricity",
    label: "Free electricity",
    icon: <Zap className="h-10 w-10" />,
  },
  {
    id: "attached-washroom",
    label: "Attached washroom",
    icon: <Toilet className="h-10 w-10" />,
  },
  {
    id: "clean-water",
    label: "Clean drinking water",
    icon: <Droplet className="h-10 w-10" />,
  },
  {
    id: "relaxation-spot",
    label: "Relaxation spot",
    icon: <Coffee className="h-10 w-10" />,
  },
];

export default function HeroInfo() {
  return (
    <section className=" md:flex md:justify-center md:max-w-[95%] mx-auto my-10">
      <div className="w-full md:max-w-4xl p-8 bg-gray-300">
        <Heading2
          className=" uppercase"
          text="Eco-friendly student's housing with all essentials included"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  items-center justify-center p-8">
          {amenities.map((item, index) => {
            return <InfolistItem key={index} {...item} />;
          })}
        </div>
      </div>
      <div className=" max-w-full  h-[50vh] object-cover">
        <Image
          src="/info.jpg"
          alt="info"
          width={500}
          height={500}
          className="w-full  h-[50vh] object-cover"
        />
      </div>
    </section>
  );
}

interface infoprops {
  icon: any;
  label: string;
}
const InfolistItem = (props: infoprops) => {
  return (
    <div className="p-4 flex flex-col items-center ">
      <div className="flex items-center flex-col gap-4">
        <div className="rounded-full text-white  bg-blue-400 p-4 w-18">
          {props.icon}
        </div>
        <p className="capitalize text-base text-wrap text-center">
          {props.label}
        </p>
      </div>
    </div>
  );
};
