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
    <section className="text-miaccent w-full max-w-full fixed top-0 left-0    z-50 flex items-center md:items-center gap-4 justify-between p-4 bg-miprimary ">
      <div className="h-10 md:w-50 object-contain">
        <Image
          src="/logo-1-primary.png"
          alt="logo"
          width={80}
          height={80}
          className="w-40 md:w-50 h-10 object-cover"
        />
      </div>
      <div className="object-contain">
        <MobileNav />
      </div>
    </section>
  );
}
