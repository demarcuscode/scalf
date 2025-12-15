"use client";
import { supabase } from "@/lib/supabase/client";
import { set } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useEffectEvent, useState } from "react";

export default function ChatIcon() {
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchuser = async () => {
      const { data }: any = await supabase.auth.getUser();
      setUser((prev: any) => data.user);
    };
    fetchuser();
  }, []);

  return (
    <Link
      href={`/chat/${user?.id}`}
      className="absolute bottom-5 right-5 z-40 fixed "
    >
      {pathname.startsWith("/hostel/") ? (
        <div
          className={`object-contain w-12 h-12 shadow-lg rounded-full bg-miaccent p-1 flex items-center justify-center hidden`}
        >
          <Image
            src="/icons.png"
            alt="icon"
            width={400}
            height={400}
            className="text-miaccent w-15 h-15  object-contain"
          />
        </div>
      ) : (
        <div className="object-contain w-30 h-25 shadow-lg rounded-full bg-miaccent p-3 flex items-center justify-center">
          <Image
            src="/icons.png"
            alt="icon"
            width={400}
            height={400}
            className="text-miaccent w-20 h-20  object-contain"
          />
        </div>
      )}
    </Link>
  );
}
