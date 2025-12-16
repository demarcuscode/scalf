import { paystack } from "@/lib/paystack";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, amount, subaccount_code } = await req.json();

  const response = await paystack.post("/transaction/initialize", {
    email,
    amount: amount * 100, // Paystack uses kobo
    // subaccount: subaccount_code,
    // bearer: "subaccount",
    metadata: {
      purpose: "hostel_payment",
    },
  });

  return NextResponse.json(response.data);
}
