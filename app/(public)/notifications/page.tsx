"use client";
import NotificationCard from "@/app/dashboard/notifications/notficationcard";
import { BellMinus, MailWarning } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function page() {
  const [notices, setNotices] = useState<any>(true);
  const [user, setUser] = useState<any>(null);

  const data = [
    {
      message: "this is new",
      time: "12-04-23",
      title: "crane",
      unread: true,
    },
    {
      message: "this mage",
      time: "12-04-23",
      title: "tiger",
      unread: true,
    },
    {
      message: "is new",
      time: "12-04-23",
      title: "monkey",
      unread: true,
    },
    {
      message: "this new",
      time: "12-04-23",
      title: "panda",
      unread: true,
    },
  ];

  useEffect(() => {}, []);
  if (!notices)
    return (
      <div className="text-4xl flex  w-full justify-center gap-4 text-miprimary font-extrabold  mt-20 text-center  capitalize">
        you have no notifications.
        <BellMinus size={34} />
      </div>
    );
  return (
    <div className="mt-20 p-4 md:p-8">
      <div className="flex flex-col  gap-4">
        {data?.map((item, index) => {
          return <NotificationCard key={index} {...item} />;
        })}
      </div>
    </div>
  );
}
