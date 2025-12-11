"use client";
import {
  Home,
  BarChart2,
  MessageSquare,
  CreditCard,
  Bell,
  FileText,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface sideprops {
  children?: any;
}
export default function Sidebar(props: sideprops) {
  const links = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Charts", href: "/charts", icon: BarChart2 },
    { name: "Chat", href: "/chat", icon: MessageSquare },
    { name: "Payments", href: "/payments", icon: CreditCard },
    { name: "Notifications", href: "/notifications", icon: Bell },
    { name: "Content", href: "/content", icon: FileText },
  ];

  return (
    <div className="flex fixed left-0 top-0 p-4 ">
      <aside className="h-screen border-r   flex flex-col p-4 bg-blue-400 h-full rounded-lg items-center">
        {/* Logo */}
        <div className="mb-10 h-10 w-10 object-contain">
          <Image
            src="/logo-icon.png"
            width={500}
            height={500}
            alt="logo"
            className=""
          />
        </div>

        {/* NAV LINKS */}
        <nav className="flex flex-col space-y-10 gap-8  ">
          {links.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              href={href}
              className="flex items-center gap-3 text-gray-700 hover:text-white "
            >
              {/* ICON Visible Always */}
              <Icon className="h-6 w-6 text-white font-extrabold" />

              {/* LABEL hidden on mobile */}
              <span className="hidden md:inline text-lg font-extrabold uppercase">
                {name}
              </span>
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
}
