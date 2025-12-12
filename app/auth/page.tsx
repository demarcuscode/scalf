"use client";
import { HighlightText } from "@/components/general/hilight";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className=" items-center justify-center flex flex-col bg-miprimary h-screen w-full  ">
      <div className="flex  flex-col items-center mt-5">
        <div className="max-w-full w-100 h-50 object-contain p-4">
          <Image
            src="/logo-1-primary.png"
            alt="logo"
            width={100}
            height={100}
            className="w-100 h-20 object-cover"
          />
        </div>
        <h2 className="text-5xl text-white flex gap-2 items-end ">
          Welcome to
          <HighlightText
            text="scalf.io"
            className="text-2xl text-misecondary p-2 capitalize"
          />
        </h2>
        <p className="text-base capiatalize py-5">
          where you stop looking and start clicking{" "}
        </p>
      </div>
      <Button className="flex p-0 round-lg mt-2 items-center bg-white text-black hover:bg-white ">
        <div className=" flex gap-4 h-10 w-10 p-2 bg-miaccent p-0 rounded-lg">
          <Image
            src={"/google.png"}
            alt="google"
            width={100}
            height={100}
            className="object-contain rounded-lg"
          />
        </div>
        <p className="text-xl capitalize bg-card ">sign in with Google</p>
      </Button>
    </div>
  );
}
