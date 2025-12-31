import { paystack } from "@/lib/paystack";
import { NextResponse } from "next/server";

export async function POST(req: NextResponse) {
  const { email, amount } = await req.json();
  const response = await paystack.post("/transaction/initialize", {
    email,
    amount,
  });
  return NextResponse.json(response.data);
}
