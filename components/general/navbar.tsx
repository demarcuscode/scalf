"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { House, HousePlus } from "lucide-react";
import Link from "next/link";
import SignInBtn from "./signinbtn";
import Navlist from "./navlist";
import MobileNav from "./menubar";

export default function NavBar() {
  return (
    <section className="fixed top-0 left-0 bg-gray-300 transparent z-50 md:px-16 px-4 w-full flex justify-between items-center p-4 ">
      {/* logo , list your hostel ,  sign in  menubar */}
      <div className="">
        <Image
          src="/logo-1-primary.png"
          alt="logo"
          width={80}
          height={80}
          className=""
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="flex  gap-1 items-end font-bold">
          <HousePlus size={20} className="text-blue-400" />
          <Link href="/" className="text-base text-pretty">
            list your hostel
          </Link>
        </div>
        {<MobileNav />}
      </div>
    </section>
  );
}
