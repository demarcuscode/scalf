import { paystack } from "@/lib/paystack";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { reference: string } }
) {
  const response = await paystack.get(
    `/transaction/verify/${params.reference}`
  );

  return NextResponse.json(response.data);
}
