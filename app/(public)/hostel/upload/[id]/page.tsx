import HostelForm from "@/components/hostel/hostelform";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section className=" p-4 md:max-w-[80%] md:mx-auto pt-10 max-w-full min-h-screen">
      <HostelForm />
    </section>
  );
}
