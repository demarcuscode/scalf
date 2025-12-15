"use client";
import { Button } from "../ui/button";
import {
  Badge,
  BookOpenCheck,
  CheckCircle,
  ChevronLeftCircle,
  FootprintsIcon,
  Landmark,
  MapPin,
  MessageCircle,
  XCircle,
} from "lucide-react";
import { amenities } from "../hero/info";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";
import { currencyfunc } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface idprops {
  hostel: any;
}
export default function Idpagecomp({ hostel }: idprops) {
  const newPrice = currencyfunc(hostel?.price);
  const router = useRouter();

  return (
    <div className="relative">
      <div className="max-w-full h-[60vh] relative  object-cover">
        <Image
          src={hostel?.imageurl as string}
          alt={hostel?.label as string}
          width={1000}
          height={800}
          className="w-full h-[60vh] object-cover"
        />
        <ChevronLeftCircle
          className="z-20 text-card absolute top-12 left-3 "
          size={50}
        />
      </div>
      <Card className="relative p-0 shadow-none rounded-none h-full">
        <CardContent className="md:flex  gap-8 gap-4 p-4 ">
          <div className="flex flex-col gap-6 py-10  ">
            <CardTitle className="text-4xl font-extrabold  uppercase  text-lg tracking-wide">
              {hostel?.label}
            </CardTitle>

            <Badge className="p-0 text-white bg-miprimary shadow-lg text-base pr-3 uppercase absolute z-20 rounded-none -top-10 right-0 ">
              <div className=" text-white font-medium bg-misecondary text-base text-white p-4 rounded-r-full">
                ⭐ {hostel?.rating}
              </div>
              {hostel?.rating}
            </Badge>
            <CardDescription className="text-lg flex gap-4 ">
              <MapPin />
              {hostel?.city}
            </CardDescription>

            <CardDescription className="flex text-lg gap-4">
              <Landmark />
              {newPrice}
            </CardDescription>
            <CardDescription className=" text-lg flex gap-4">
              <FootprintsIcon />1 mile from main campus
            </CardDescription>
            <CardDescription className="flex text-lg gap-4">
              {true ? (
                <>
                  <CheckCircle />
                  room available
                </>
              ) : (
                <>
                  <XCircle /> no more space
                </>
              )}
            </CardDescription>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-4 md:ml-40 md:pt-10 md:pl-20 p-4">
            {amenities.map((item: any, index: number) => {
              return (
                <div
                  className="flex flex-col gap-4  items-center justify-center"
                  key={index}
                >
                  <div className="rounded-full bg-miprimary p-2 text-white">
                    {item.icon}
                  </div>
                  <p className="text-lg">{item.label}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2  gap-4 py-10 p-4  ">
        <Button className="w-full py-6 text-lg bg-white capitalize text-miprimary  shadow-lg ">
          book now
          <BookOpenCheck />
        </Button>
        <Button className="w-full py-6  text-lg shadow-lg capitalize bg-miprimary text-white">
          chat manager
          <MessageCircle />
        </Button>
      </div>
    </div>
  );
}
