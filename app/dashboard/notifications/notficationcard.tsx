"use client";

import { Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface NotificationCardProps {
  title: string;
  message: string;
  time: string;
  unread?: boolean;
}

export default function NotificationCard({
  title,
  message,
  time,
  unread = false,
}: NotificationCardProps) {
  return (
    <Card
      className={cn(
        "shadow-lg shadow-misecondary",
        unread && "shadow-miprimary"
      )}
    >
      <CardContent className="p-4 flex items-start gap-4">
        {/* Icon */}
        <div className="p-2 rounded-full bg-misecondary dark:bg-miprimary">
          <Bell size={40} className="w-10 h-10 text-white dark:text-white" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 ">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-lg font-semibold capitalize tracking-wide">
              {title}
            </h3>

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
