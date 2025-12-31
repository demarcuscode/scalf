import { paystack } from "@/lib/paystack";
import { NextResponse } from "next/server";
import crypto from "crypto";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const supabase = await createClient();
  const reference = crypto.randomUUID();
  const { email, amount, subaccount_code, booking_id } = await req.json();

  const d = await supabase.from("payments").insert({
    reference,
    email,
    amount,
    booking_id,
    subaccount_code,
    status: "pending",
  });
  console.log(d);

  const response = await paystack.post("/transaction/initialize", {
    email,
    amount: Number(amount) * 100,
    subaccount: subaccount_code,
    booking_id,
    reference,
    bearer: "subaccount",
    metadata: {
      purpose: "hostel_payment",
    },
  });

  return NextResponse.json(response.data);
}
