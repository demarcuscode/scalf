"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ChatRoom {
  id: string;
  name: string;
  unread: number;
  lastMessage?: string;
  lastMessageTime?: string;
}

interface ChatRoomListProps {
  rooms: ChatRoom[];
}

export default function ChatRoomList({ rooms }: ChatRoomListProps) {
  return (
    <div className="w-full flex flex-col gap-3">
      {rooms.map((room) => (
        <Link
          href={`/chat/${room.id}`}
          key={room.id}
          className={cn(
            "flex items-center justify-between p-4 rounded-xl border shadow-sm bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
          )}
        >
          {/* Left Section */}
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
              <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-300" />
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-semibold">{room.name}</span>

              {room.lastMessage && (
                <span className="text-sm text-neutral-500 truncate max-w-[200px]">
                  {room.lastMessage}
                </span>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-end gap-1">
            {room.unread > 0 && (
              <Badge className="bg-red-600 text-white px-2 py-1 rounded-full text-xs">
                {room.unread}
              </Badge>
            )}

            {room.lastMessageTime && (
              <span className="text-xs text-neutral-400">
                {room.lastMessageTime}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
