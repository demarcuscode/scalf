"use client";

import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-gray-100 border-t mt-10">
      <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">Navigation</h3>
          <ul className="space-y-2 text-gray-700 text-center flex  flex-col gap-4">
            <li>
              <Link href="/" className="hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/payments" className="hover:text-black">
                Payments
              </Link>
            </li>
            <li>
              <Link href="/manage-hostel" className="hover:text-black">
                Manage Hostel
              </Link>
            </li>
            <li>
              <Link href="/list-hostel" className="hover:text-black">
                List a Hostel
              </Link>
            </li>
            <li>
              <Link href="/book-hostel" className="hover:text-black">
                Book a Hostel
              </Link>
            </li>
            <li>
              <Link href="/make-payment" className="hover:text-black">
                Make Payment
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">Discover</h3>
          <ul className="space-y-2 text-gray-700 text-center flex flex-col gap-4">
            <li>
              <Link href="/top-rated" className="hover:text-black">
                Top Rated Hostels
              </Link>
            </li>
            <li>
              <Link href="/announcements" className="hover:text-black">
                Announcements
              </Link>
            </li>
            <li>
              <Link href="/more-info" className="hover:text-black">
                More Info
              </Link>
            </li>
            <li>
              <Link href="/listings" className="hover:text-black">
                Listings
              </Link>
            </li>
            <li>
              <Link href="/hostels" className="hover:text-black">
                Hostels
              </Link>
            </li>
            <li>
              <Link href="/apartments" className="hover:text-black">
                Apartments
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">Support</h3>
          <ul className="space-y-2 text-gray-700 text-center flex flex-col gap-4">
            <li>
              <Link href="/chat-manager" className="hover:text-black">
                Chat with a Manager
              </Link>
            </li>
            <li>
              <Link href="/help" className="hover:text-black">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-black">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-black">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} HostelHub. All rights reserved.
      </div>
    </footer>
  );
}
