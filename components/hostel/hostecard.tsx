"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface hostelcardprops {
  label: string;
  city: string;
  price: string;
  rating?: string;
  className?: string;
  imageurl: string;
}

export default function Hostelcard(props: hostelcardprops) {
  return (
    <Card className=" overflow-hidden shadow-lg shadow-misecondary  rounded-lg relative hover:scale-[1.02] p-0 transition-all cursor-pointer">
      <div className="h-[70%] w-full overflow-hidden p-0 rounded-t-lg object-cover ">
        <Image
          src={props.imageurl}
          alt={props.label}
          width={500}
          height={500}
          className="object-cover h-[50vh] w-full rounded-t-lg"
        />
      </div>
      <CardContent className="space-y-2 p-4 flex flex-col rounded-b-lg w-full space-y-4  z-10 ">
        <div className="flex items-end gap-4 w-full justify-between ">
          <CardTitle className="text-2xl capitalize   font-bold relative -top-8  ">
            {props.label}
          </CardTitle>
          <Badge className="p-0 bg-gray-300 text-black text-base pr-3 uppercase relative -top-20">
            {props.rating && (
              <p className=" text-white font-medium bg-misecondary text-base text-white p-4 round-r-full">
                ⭐ {props.rating}
              </p>
            )}
            {parseInt(props.rating as string) >= 2.5
              ? "highly rated"
              : "premium"}
          </Badge>
        </div>

        <div className="flex items-center justify-between  relative -top-5 px-6">
          <CardDescription className="text-base font-bold">
            {new Intl.NumberFormat("en-GH", {
              style: "currency",
              currency: "GHS",
            }).format(parseInt(props.price))}
          </CardDescription>
          <CardDescription className="text-sm capitalize text-misecondary  ">
            {props.city}
          </CardDescription>
        </div>

        <Button className=" w-full bg-miaccent text-white  capitalize text-lg font-extrabold ">
          view
        </Button>
      </CardContent>
    </Card>
  );
}
