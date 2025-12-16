import { paystack } from "@/lib/paystack";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { business_name, settlement_bank, account_number, percentage_charge } =
    body;

  const response = await paystack.post("/subaccount", {
    business_name,
    settlement_bank,
    account_number,
    percentage_charge,
  });

  return NextResponse.json(response.data);
}
