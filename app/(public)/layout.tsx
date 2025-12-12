import NavBar from "@/components/general/navbar";
import React from "react";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-[100%] overflow-hidden">
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
