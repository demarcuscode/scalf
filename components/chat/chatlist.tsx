"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface chatlistprops {
  className?: string;
  hostels: any;
}

export default function chatlist(props: chatlistprops) {
  return (
    <div className={cn("", props.className)}>
      <div>
        {props.hostels.map((item: any, index: number) => {
          return <div></div>;
        })}
      </div>
    </div>
  );
}
