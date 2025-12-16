"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import MobileNav from "./menubar";
import { supabase } from "@/lib/supabase/client";
import SignInBtn from "./signinbtn";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

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
    <section className="text-miaccent w-full  mx-auto h-14 fixed top-0 left-0 z-50 flex items-center gap-4 justify-between p-4 bg-miprimary ">
      <div className="h-10 md:w-50 object-contain rounded-lg ">
        <Image
          src="/logo-1-primary.png"
          alt="logo"
          width={60}
          height={60}
          className="w-20 md:w-30 h-10 p-2 object-cover rounded-lg"
        />
      </div>
      {true ? (
        <div className="flex">
          {/* <Avatar>
            <AvatarImage
              src={user.user_metadata.avatar_ur}
              alt="avatar"
              className="w-10 h-10"
            />
          </Avatar> */}
          <div className="object-contain ">
            <MobileNav />
          </div>
        </div>
      ) : (
        <SignInBtn />
      )}
    </section>
  );
}
