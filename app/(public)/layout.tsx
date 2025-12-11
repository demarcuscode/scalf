import NavBar from "@/components/general/navbar";
import React from "react";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
