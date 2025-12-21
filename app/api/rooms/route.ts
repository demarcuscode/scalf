import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const files = formData.getAll("files") as File[];

  const urls: string[] = [];

  for (const file of files) {
    const blob = await put(
      `hostels/${crypto.randomUUID()}-${file.name}`,
      file,
      { access: "public" }
    );

    urls.push(blob.url);
  }

  return NextResponse.json({ urls });
}
