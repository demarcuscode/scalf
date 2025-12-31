"use client";
import ChatRoomList from "@/app/dashboard/chat/chatroomlist";
import React from "react";

export default function page() {
  const data = [
    {
      id: "1",
      name: "marcusgideon@gmail.com",
      unread: 2,
      lastMessage: "this is marcus",
      lastMessageTime: "8:32pm",
    },
    {
      id: "2",
      name: "gideon@gmail.com",
      unread: 1,
      lastMessage: "marcus",
      lastMessageTime: "8:32pm",
    },
    {
      id: "3",
      name: "marceon@gmail.com",
      unread: 2,
      lastMessage: "this is marcus dsafajofij ioajio ",
      lastMessageTime: "8:32pm",
    },
    {
      id: "4",
      name: "pricy@gmail.com",
      unread: 2,
      lastMessage: "this is pricy",
      lastMessageTime: "8:32pm",
    },
    {
      id: "5",
      name: "owarecus@gmail.com",
      unread: 2,
      lastMessage: "big boys",
      lastMessageTime: "8:32pm",
    },
  ];
  return (
    <div className="mt-20">
      <div className="p-4">
        <ChatRoomList rooms={data} />
      </div>
    </div>
  );
}
