"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { House, HousePlus } from "lucide-react";
import Link from "next/link";
import SignInBtn from "./signinbtn";
import Navlist from "./navlist";
import MobileNav from "./menubar";
import { colortheme } from "@/lib/constant";

export default function NavBar() {
  return (
    <section className="text-miaccent w-full  mx-auto h-10 fixed top-0 left-0 z-50 flex items-center  gap-4 justify-between p-4 bg-miprimary ">
      <div className="h-10 md:w-50 object-contain ">
        <Image
          src="/logo-1-primary.png"
          alt="logo"
          width={60}
          height={60}
          className="w-20 md:w-30 h-10 p-2 object-cover"
        />
      </div>
      <div className="object-contain ">
        <MobileNav />
      </div>
    </section>
  );
}
