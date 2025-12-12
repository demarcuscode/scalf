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

export default function MobileNav() {
  const image: any = useCurrentUserImage();
  return (
    <div className={"z-20"}>
      <Sheet>
        {/* Hamburger Button */}

        <SheetTrigger asChild className="">
          <div className="flex items-center gap-2 ">
            <Avatar>
              <AvatarImage src={image as string} alt="" />
            </Avatar>
            <Menu className={`h-10 w-10 text-miaccent z-40  p-2  `} />
          </div>
        </SheetTrigger>

        {/* Slide-Out Menu */}
        <SheetContent side="left" className=" w-72">
          <SheetHeader>
            <div className="text-center flex justify-center uppercase  font-bold">
              <Image
                src="/logo-1-primary.png"
                alt="logo"
                width={100}
                height={100}
                className=""
              />
            </div>
            <SheetDescription className=" text-center">
              Navigate your dashboard
            </SheetDescription>
          </SheetHeader>

          {/* NAV LINKS */}
          <nav className="mt-2 flex flex-col space-y-4 gap-4  text-base capitalize  text-blue-500 ease-out  hover:text-blue-600 font-medium   text-center">
            <Link href="/" className="hover:text-black">
              Home
            </Link>

            <Link href="/payments" className="hover:text-black">
              hostels
            </Link>

            <Link href="/manage-hostel" className="hover:text-black">
              dashboard
            </Link>

            <Link href="/list-hostel" className="hover:text-black">
              chat
            </Link>

            <Link href="/hostel" className="hover:text-black">
              bookings
            </Link>

            <Link href="/payment" className="hover:text-black">
              featured
            </Link>

            <Link href="#top-rated" className="hover:text-black">
              your
            </Link>

            <Link href="/announcements" className="hover:text-black">
              Announcements
            </Link>

            <Link href="/auth" className="hover:text-black">
              Sign In
            </Link>

            <Link href="/hostel" className="hover:text-black">
              Listings
            </Link>

            <Link href="/hostels" className="hover:text-black">
              Hostels
            </Link>

            <Link href="/apartments" className="hover:text-black">
              Apartments
            </Link>

            <Link href="/chat-manager" className="hover:text-black">
              Chat with Manager
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
