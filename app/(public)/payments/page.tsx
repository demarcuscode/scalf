import { WalletForm } from "@/components/payment/walletform";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="mt-20 md:p-8">
      <div className="grid grid-cols-1 md:flex md:justify-center md:mt-20 md:gap-16 max-w-[80%] mx-auto ">
        <div className="max-w-full object-contain ">
          <Image
            src={"/payment.png"}
            alt="payment pic"
            width={500}
            height={500}
            className="object-contain w-full h-auto"
          />
        </div>
        <WalletForm />
      </div>
    </div>
  );
}
