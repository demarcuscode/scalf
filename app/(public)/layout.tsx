import NavBar from "@/components/general/navbar";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`max-w-[100%] ${poppins.variable} overflow-hidden`}>
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
