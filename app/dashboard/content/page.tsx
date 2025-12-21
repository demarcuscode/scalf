import { Bell, Building, Notebook } from "lucide-react";
import React from "react";
import ContentCard from "./contentcard";

export default function page() {
  const contentlist = [
    {
      label: "add hostel",
      icon: <Building />,
      href: "/hostel/upload/",
    },

    {
      label: "bookings",
      icon: <Notebook />,
      href: "/hostel/upload/",
    },
    {
      label: "create notifications",
      icon: <Bell />,
      href: "/hostel/upload/",
    },
  ];
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 p-4 gap-8">
        {contentlist.map((item, index) => {
          return <ContentCard key={index} {...item} />;
        })}
      </div>
    </div>
  );
}
