"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function ChatIcon() {
  const pathname = usePathname();
  return (
    <div className="absolute bottom-5 right-5 z-40 fixed ">
      {pathname.startsWith("/hostel/") ? (
        <div
          className={`object-contain w-30 h-25 shadow-lg rounded-full bg-miaccent p-3 flex items-center justify-center hidden`}
        >
          <Image
            src="/icons.png"
            alt="icon"
            width={400}
            height={400}
            className="text-miaccent w-20 h-20  object-contain"
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
    </div>
  );
}
