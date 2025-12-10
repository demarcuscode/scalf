"use client";
import { HighlightText } from "@/components/general/hilight";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="mt-20 items-center justify-center flex flex-col  ">
      <div className="flex  flex-col items-center mt-20">
        <div className="">
          <Image src="/logo-icon.png" alt="logo" width={100} height={100} />
        </div>
        <h2 className="text-5xl mt-20 ">
          Welcome to
          <HighlightText text="scalf.io" className="text-4xl pr-2 capitalize" />
        </h2>
        <p className="text-base capiatalize py-5">
          where you stop looking and start clicking{" "}
        </p>
      </div>
      <Button className="flex p-2 mt-2 items-center bg-white text-black hover:bg-white ">
        <div className=" flex gap-4 h-10 w-10 p-2">
          <Image
            src={"/google.png"}
            alt="google"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
        <p className="text-xl capitalize ">sign in with Google</p>
      </Button>
    </div>
  );
}
