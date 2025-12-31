"use client";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import React from "react";

interface roomlistcard {}

export default function Roomlistcard() {
  return (
    <div>
      <div>
        <Card>
          <CardContent>
            <div className="">
              <div>
                <Avatar>
                  <AvatarImage
                    src={"/logo.png"}
                    alt={""}
                    width={500}
                    height={500}
                    className=""
                  />
                </Avatar>
              </div>
              <CardTitle></CardTitle>
              <div></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
