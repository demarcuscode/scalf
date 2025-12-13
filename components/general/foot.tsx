"use client";

import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="w-full  border-t  bg-miprimary ">
      <div className="p-12  grid grid-cols-2 lg:grid-cols-3  md:max-w-[85%] md:gap-8 md:mx-auto justify-center ">
        {/* Column 1 */}
        <div className=" md:p-8">
          <h3 className="text-2xl font-extrabold  text-white p-4 ">
            Navigation
          </h3>
          <ul className="space-y-2 text-white text-base md:text-lg p-4  flex  flex-col gap-4">
            <li>
              <Link href="/" className="hover:text-misecondary text-white">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/payments"
                className="hover:text-misecondary text-white"
              >
                Payments
              </Link>
            </li>
            <li>
              <Link
                href="/manage-hostel"
                className="hover:text-misecondary text-white"
              >
                Manage Hostel
              </Link>
            </li>
            <li>
              <Link
                href="/list-hostel"
                className="hover:text-misecondary text-white"
              >
                List a Hostel
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-misecondary text-white"
                href="/book-hostel"
              >
                Book a Hostel
              </Link>
            </li>
            <li>
              <Link
                href="/make-payment"
                className="hover:text-misecondary text-white"
              >
                Make Payment
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className=" md:p-8">
          <h3 className="text-2xl font-extrabold  p-4  text-white">Discover</h3>
          <ul className="space-y-2 text-white text-base md:text-lg p-4  flex flex-col gap-4">
            <li>
              <Link
                href="/top-rated"
                className="hover:text-misecondary text-white"
              >
                Top Rated Hostels
              </Link>
            </li>
            <li>
              <Link
                href="/announcements"
                className="hover:text-misecondary text-white"
              >
                Announcements
              </Link>
            </li>
            <li>
              <Link
                href="/more-info"
                className="hover:text-misecondary text-white"
              >
                More Info
              </Link>
            </li>
            <li>
              <Link
                href="/listings"
                className="hover:text-misecondary text-white"
              >
                Listings
              </Link>
            </li>
            <li>
              <Link href="/hostels" className=" text-white">
                Hostels
              </Link>
            </li>
            <li>
              <Link
                href="/apartments"
                className="hover:text-misecondary text-white"
              >
                Apartments
              </Link>
            </li>
          </ul>
        </div>
        {/* Column 3 */}
        <div className=" md:p-8">
          <h3 className="text-2xl font-extrabold  p-4  text-white">Support</h3>
          <ul className="space-y-2  text-base md:text-lg p-4 flex flex-col gap-4">
            <li>
              <Link
                href="/chat-manager"
                className="hover:text-misecondary text-white"
              >
                Chat with a Manager
              </Link>
            </li>
            <li>
              <Link href="/help" className="hover:text-misecondary text-white">
                Help Center
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-misecondary text-white"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-misecondary text-white">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-misecondary text-white"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t py-4 text-center text-sm text-miaccent font-extrabold p-6">
        © {new Date().getFullYear()} HostelHub. All rights reserved.
      </div>
    </footer>
  );
}
