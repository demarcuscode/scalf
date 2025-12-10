import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/general/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="w-full p-4">
          <NavBar />
          <div className="mt-20">{children}</div>
        </main>
      </body>
    </html>
  );
}
