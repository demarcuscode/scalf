"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { colortheme } from "@/lib/constant";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useCurrentUserImage } from "@/hooks/use-current-user-image";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const image: any = useCurrentUserImage();
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className={"z-20"}>
      <Sheet>
        {/* Hamburger Button */}

        <SheetTrigger asChild className="">
          <div className="flex items-center gap-2 ">
            <Avatar>
              <AvatarImage src={image as string} alt="" />
            </Avatar>
            <Menu className={`h-10 w-10 -miaccent shadow-lg   z-40  p-2  `} />
          </div>
        </SheetTrigger>

        {/* Slide-Out Menu */}
        <SheetContent side="left" className=" w-75">
          <SheetHeader>
            <SheetTitle>
              <div className="text-center flex justify-center uppercase  font-bold">
                <Image
                  src="/logo-1-primary.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className=""
                />
              </div>
            </SheetTitle>
            <SheetDescription className=" text-center">
              Navigate your dashboard
            </SheetDescription>
          </SheetHeader>

          <nav className=" flex flex-col items-start max-w-[95%] mx-auto space-y-4 gap-4  text-base uppercase group   text-miprimary  hover:misecondary ease-out  hover:text-blue-600 font-medium  p-4 ">
            <Link
              href="/"
              className={`hover:text-miprimary tracking-wide hover:underline hover:underline-miprimary cursor-pointer ${
                pathname == "/"
                  ? "underline underline-miprimary underline-offset-4"
                  : "opacity-50"
              }`}
            >
              Home
            </Link>
            <Link
              href="/hostel"
              className={`hover:text-miprimary tracking-wide hover:underline hover:underline-miprimary cursor-pointer ${
                pathname == "/hostel"
                  ? "underline underline-miprimary underline-offset-4"
                  : "opacity-50"
              }`}
            >
              hostel
            </Link>
            <Link
              href="/chat"
              className={`hover:text-miprimary tracking-wide hover:underline hover:underline-miprimary cursor-pointer ${
                pathname == "/chat"
                  ? "underline underline-miprimary underline-offset-4"
                  : "opacity-50"
              }`}
            >
              chat
            </Link>
            <Link
              href="/bookings"
              className={`hover:text-miprimary tracking-wide hover:underline hover:underline-miprimary cursor-pointer ${
                pathname == "/bookings"
                  ? "underline underline-miprimary underline-offset-4"
                  : "opacity-50"
              }`}
            >
              booking
            </Link>
            <Link
              href="/notifications"
              className={`hover:text-miprimary tracking-wide hover:underline hover:underline-miprimary cursor-pointer ${
                pathname == "/notifications"
                  ? "underline underline-miprimary underline-offset-4"
                  : "opacity-50"
              }`}
            >
              notifications
            </Link>
            <Link
              href="/payments"
              className={`hover:text-miprimary tracking-wide hover:underline hover:underline-miprimary cursor-pointer ${
                pathname == "/payments"
                  ? "underline underline-miprimary underline-offset-4"
                  : "opacity-50"
              }`}
            >
              payments
            </Link>
            <Link
              href="/profile"
              className={`hover:text-miprimary tracking-wide hover:underline hover:underline-miprimary cursor-pointer ${
                pathname == "/profile"
                  ? "underline underline-miprimary underline-offset-4"
                  : "opacity-50"
              }`}
            >
              profile
            </Link>
            <Link
              href="/auth"
              className={`hover:text-miprimary tracking-wide hover:underline hover:underline-miprimary cursor-pointer ${
                pathname == "/auth"
                  ? "underline underline-miprimary"
                  : "opacity-50"
              }`}
            >
              log out
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
