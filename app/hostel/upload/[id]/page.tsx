import HostelForm from "@/components/hostel/hostelform";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section className="p-8 md:p-4 bg-miprimary">
      <div className="flex item-center justify-center mt-10">
        <Image
          src={"/logo-1-primary.png"}
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <div>
        <HostelForm />
      </div>
    </section>
  );
}
