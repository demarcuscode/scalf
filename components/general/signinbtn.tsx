"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function SignInBtn() {
  const router = useRouter();
  return (
    <div className="">
      <Button
        onClick={() => router.push("/auth")}
        className=" cursor-pointer bg-miaccent text-card text-lg py-6 capitalize tacking-wide font-bold"
      >
        sign in
      </Button>
    </div>
  );
}
