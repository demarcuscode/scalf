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
    <div className={cn("shadow-lg", props.className)}>
      <Card className="rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] p-0 transition-all cursor-pointer">
        <div className="h-[50%] w-full overflow-hidden p-0 object-cover">
          <Image
            src={props.imageurl}
            alt={props.label}
            width={500}
            height={500}
            className="object-cover h-[50vh] w-full"
          />
        </div>
        <CardContent className="space-y-2 p-4 flex flex-col w-full gap-2">
          <div className="flex items-center gap-4 w-full justify-between">
            <CardTitle className="text-2xl uppercase  font-bold text-gray-800 tracking-wide text-center ">
              {props.label}
            </CardTitle>
            <Badge className="p-0 bg-gray-300 text-black text-base pr-3 uppercase">
              {props.rating && (
                <p className=" text-white font-medium bg-blue-400 text-base text-white p-4 round-r-full">
                  ⭐ {props.rating}
                </p>
              )}
              {parseInt(props.rating as string) >= 2.5
                ? "highly rated"
                : "premium"}
            </Badge>
          </div>

          <CardDescription className="text-sm capitalize text-gray-500 uppercase">
            {props.city}
          </CardDescription>

          <CardDescription className="text-lg  font-bold ">
            GHC {props.price.padEnd(2, ".00")}
          </CardDescription>

          <Button className=" w-full bg-blue-400 text-white  capitalize text-lg ">
            view
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
