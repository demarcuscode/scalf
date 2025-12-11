import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const files = formData.getAll("files") as File[];

  const uploadedFiles = [];

  for (const file of files) {
    const blob = await put(file.name, file, {
      access: "public",
    });

    uploadedFiles.push({
      url: blob.url,
      pathname: blob.pathname,
    });
  }

  return NextResponse.json({ success: true, files: uploadedFiles });
}
