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
            <Menu className={`h-10 w-10 -miaccent shadow-lg   z-40  p-2  `} />
          </div>
        </SheetTrigger>

        {/* Slide-Out Menu */}
        <SheetContent side="left" className=" w-100">
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

          {/* NAV LINKS */}
          <nav className="mt-2 flex flex-col space-y-4 gap-4  text-base uppercase group  text-lg  text-miprimary font-bold hover:misecondary ease-out  hover:text-blue-600 font-medium   items-center text-left ">
            <Link href="/" className="hover:text-black">
              Home
            </Link>

            <Link href="/hostel" className="hover:text-black">
              hostel
            </Link>

            <Link href="/admin" className="hover:text-black">
              dashboard
            </Link>

            <Link href="/chat" className="hover:text-black">
              chat
            </Link>

            <Link href="/bookings" className="hover:text-black">
              booking
            </Link>

            <Link href="/features" className="hover:text-black">
              featured
            </Link>
            <Link href="/notifications" className="hover:text-black">
              notifications
            </Link>
            <Link href="/payments" className="hover:text-black">
              payments
            </Link>
            <Link href="/auth" className="hover:text-black">
              Sign In
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
