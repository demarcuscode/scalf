import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

interface chatidprops {
  className?: string;
  label: string;
  userName: string;
  roomName: string;
  avatar: string;
}
export default function chatId(props: chatidprops) {
  return (
    <div className="">
      <Card className="">
        <CardContent className="">
          <CardTitle className=""></CardTitle>
          <CardDescription className=""></CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
