import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Scalf.io | Stop Looking Start Searching",
  description:
    "Scalf.io is a campus management website that help student find hostels and services just by a click on their mobile phones. As a service provider you can manage your service, receive payments, announce new achievements just by registering with us. Register once and once only.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased relative`}>
        <Analytics />
        <main className="w-full font-sans ">{children}</main>
      </body>
    </html>
  );
}
