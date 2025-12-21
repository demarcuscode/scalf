"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import MobileNav from "./menubar";
import { supabase } from "@/lib/supabase/client";
import SignInBtn from "./signinbtn";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Menu } from "lucide-react";
import Sidebar from "../dashboard/sidebar";

export default function NavBar() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchuser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser((prev: any) => data.user);
    };
    fetchuser();
  }, []);
  return (
    <section className="text-miaccent w-full  mx-auto h-28 fixed top-0 left-0 z-50 flex items-center gap-4 justify-between p-4 bg-miprimary ">
      <div className="h-15 md:w-50 object-contain rounded-lg ">
        <Image
          src="/logo-1-primary.png"
          alt="logo"
          width={60}
          height={60}
          className="w-25 md:w-30 h-15 p-2 object-cover rounded-lg"
        />
      </div>
      <div className="flex gap-0 flex-row-reverse items-center">
        <MobileNav />
      </div>
    </section>
  );
}
