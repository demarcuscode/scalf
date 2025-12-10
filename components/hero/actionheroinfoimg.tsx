import Image from "next/image";
import React from "react";

export default function LastImage() {
  return (
    <div className="flex items-center justify-center">
      <Image src="/shadow.png" alt="shadow" width={1000} height={1000} />
    </div>
  );
}
