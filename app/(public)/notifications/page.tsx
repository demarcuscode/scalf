"use client";

import { Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface NotificationCardProps {
  title: string;
  message: string;
  time: string;
  unread?: boolean;
  onClick?: () => void;
}

export default function NotificationCard({
  title,
  message,
  time,
  unread = false,
  onClick,
}: NotificationCardProps) {
  return (
    <Card
      onClick={onClick}
      className={cn(
        "w-full cursor-pointer rounded-xl mt-20 max-w-[90%] mx-auto border bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-all",
        unread && "border-blue-500"
      )}
    >
      <CardContent className="p-4 flex items-start gap-4">
        {/* Icon */}
        <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
          <Bell className="w-5 h-5 text-blue-600 dark:text-blue-300" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-lg font-semibold">{title}</h3>

            <span className="text-xs text-neutral-500">{time}</span>
          </div>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-[250px] truncate">
            {message}
          </p>
        </div>

        {/* Unread Dot */}
        {unread && (
          <span className="w-3 h-3 rounded-full bg-blue-600 shadow-md"></span>
        )}
      </CardContent>
    </Card>
  );
}
