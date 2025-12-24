"use client";
import { Button } from "../ui/button";
import {
  Badge,
  BookOpenCheck,
  CheckCircle,
  ChevronLeft,
  ChevronLeftCircle,
  FootprintsIcon,
  Landmark,
  MapPin,
  MessageCircle,
  XCircle,
} from "lucide-react";
import { amenities } from "../hero/info";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";
import { currencyfunc } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

interface idprops {
  hostel: any;
}
export default function Idpagecomp({ hostel }: idprops) {
  const [user, setUser] = useState<any>(null);
  const newPrice = currencyfunc(hostel?.price);
  const router = useRouter();

  useEffect(() => {
    const fetchuser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser((prev: any) => user);
    };
    fetchuser();
  }, []);

  return (
    <div className="relative">
      <div className="max-w-full h-[60vh] relative  object-cover">
        <div className="w-full h-full absolute inset-0 bg-black/70 z-20" />
        {hostel?.imageurl && (
          <Image
            src={hostel?.imageurl as string}
            alt={hostel?.label as string}
            width={1000}
            height={800}
            className="w-full h-[60vh] object-cover"
          />
        )}
      </div>
      <Card className="relative p-0 shadow-none rounded-none h-full">
        <CardContent className="md:flex  gap-8 gap-4 p-4 ">
          <div className="flex flex-col gap-6 py-10  w-full">
            <div className="flex items-center justify-between w-full">
              <CardTitle className="text-4xl font-extrabold  uppercase  text-lg tracking-wide">
                {hostel?.label}
              </CardTitle>
              <Button
                variant={"outline"}
                onClick={() => router.push("/hostel")}
                className="text-lg title text-miaccent font-extrabold "
              >
                <ChevronLeftCircle className="text-lg " size={30} />
                Go back
              </Button>
            </div>

            <CardDescription className="text-lg flex gap-4 ">
              <MapPin />
              {hostel?.city}
            </CardDescription>

            <CardDescription className="flex text-lg gap-4">
              <Landmark />
              {newPrice}
            </CardDescription>
            <CardDescription className=" text-lg flex gap-4">
              <FootprintsIcon />1 mile from main campus
            </CardDescription>
            <CardDescription className="flex text-lg gap-4">
              {true ? (
                <>
                  <CheckCircle />
                  room available
                </>
              ) : (
                <>
                  <XCircle /> no more space
                </>
              )}
            </CardDescription>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2  gap-4 py-10 p-4  ">
        <Button
          onClick={() => router.push(`/bookings/${hostel.id}`)}
          className="w-full py-6 text-lg bg-white hover:bg-FFFFAE hover:ease-out hover:-translate-y-0.5 capitalize text-miprimary  shadow-lg "
        >
          Book
          <BookOpenCheck />
        </Button>
        <Button
          onClick={() => router.push(`/chat/${user.id}}`)}
          className="w-full py-6 hover:bg-miaccent cursor-pointer hover:ease-out hover:-translate-y-0.5  text-lg shadow-lg  bg-miaccent text-white"
        >
          Chat
          <MessageCircle />
        </Button>
      </div>
    </div>
  );
}
