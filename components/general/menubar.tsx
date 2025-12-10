"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
  return (
    <div className="z-20">
      <Sheet>
        {/* Hamburger Button */}
        <SheetTrigger className="md:hidden">
          <Menu className="h-7 w-7 text-blue-500" />
        </SheetTrigger>

        {/* Slide-Out Menu */}
        <SheetContent side="left" className="w-72">
          <SheetHeader>
            <SheetTitle className="text-left text-2xl font-bold">
              HostelHub
            </SheetTitle>
            <SheetDescription className="text-left">
              Navigate your dashboard
            </SheetDescription>
          </SheetHeader>

          {/* NAV LINKS */}
          <nav className="mt-2 flex flex-col space-y-4 gap-8 text-lg font-medium  p-8 text-center">
            <Link href="/" className="hover:text-black">
              Home
            </Link>

            <Link href="/payments" className="hover:text-black">
              Payments
            </Link>

            <Link href="/manage-hostel" className="hover:text-black">
              Manage Hostel
            </Link>

            <Link href="/list-hostel" className="hover:text-black">
              List a Hostel
            </Link>

            <Link href="/hostel" className="hover:text-black">
              Book a Hostel
            </Link>

            <Link href="/payment" className="hover:text-black">
              Make Payment
            </Link>

            <Link href="#top-rated" className="hover:text-black">
              Top Rated Hostels
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
