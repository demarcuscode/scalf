"use client";

import { CheckCircle } from "lucide-react";
import { Button } from "../ui/button";

export default function PayButton({
  email,
  amount,
  subaccountCode,
  label,
}: {
  email: string;
  amount: number;
  subaccountCode: string;
  label: string;
}) {
  const pay = async () => {
    const res = await fetch("/api/paystack/initialize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, amount, subaccount_code: subaccountCode }),
    });

    const data = await res.json();
    window.location.href = data.data.authorization_url;
  };

  return (
    <Button
      className="bg-miaccent text-white cursor-pointer shadow-lg hover:bg-miaccent hover:ease-out hover:-translate-y-0.5   py-6 capitalize  tracking-wide font-bold"
      onClick={pay}
    >
      {label}
      <CheckCircle size={22} />
    </Button>
  );
}
