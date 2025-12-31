"use client";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import PayButton from "../general/paybtn";
import { supabase } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { subscribe } from "diagnostics_channel";

interface bookingcardprops {
  className?: string;
  hostel: any;
}

export default function BookingCard(props: bookingcardprops) {
  const [profile, setProfile] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [subcode, setSubcode] = useState<any>(null);
  const charges = 0.005 * parseInt(props.hostel.amount);
  const router = useRouter();
  const createdAt = new Date(props.hostel.created_at);

  // delete a book
  const deleteBooking = async () => {
    if (!props?.hostel?.id) return;
    await supabase.from("hostel_bookings").delete().eq("id", props.hostel.id);
  };

  useEffect(() => {
    const fetchuser = async () => {
      // fetch users
      const { data, error } = await supabase.auth.getUser();
      setUser(data?.user);

      if (!user?.id) return;

      // fetch user's profile for more info
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      setProfile(profile);
    };
    fetchuser();
  }, []);
  useEffect(() => {
    const getsubs = async () => {
      const hostelId = props.hostel.hostel_id;
      // get the subaccount for the hotel
      const subs = await supabase
        .from("hostels")
        .select("*")
        .eq("id", hostelId);

      setSubcode(subs);
    };
  }, []);
  console.log(subcode);

  if (!props?.hostel) {
    return (
      <div className="pt-20 text-2xl mt-20 text-miprimary">
        <p>you have no bookings yet.</p>
      </div>
    );
  }
  return (
    <div className={cn(" relative w-full", props.className)}>
      <Card className="w-full shadow-lg relative shadow-misecondary">
        <Edit
          onClick={() => router.push(`/bookings/${props.hostel.id}/edit`)}
          size={22}
          className="absolute cursor-pointer hover:-translate-y-0.5 hover:ease-out  top-3 right-3"
        />
        <CardHeader>
          <CardTitle className="text-lg text-center font-bold  tracking-wide text-miprimary ">
            Booking{" "}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-2 w-full justify-between">
          <Image
            className="opacity-30 bg-gray-400"
            src={"/logo.png"}
            alt=""
            width={500}
            height={500}
          />
          <div className=" flex flex-col gap-3">
            <CardDescription className="flex justify-between gap-8">
              <span className="text-left text-lg tracking-wide">applicant</span>
              <span className="text-right text-lg capitalize tracking-wide font-sans">
                {props?.hostel?.applicant_name}
              </span>
            </CardDescription>
            <CardDescription className="flex justify-between gap-8">
              <span className="text-left text-lg tracking-wide">
                hostel name
              </span>
              <span className="text-right text-lg capitalize tracking-wide font-sans">
                {props.hostel.hostel_name}
              </span>
            </CardDescription>
            <CardDescription className="flex justify-between gap-8">
              <span className="text-left text-lg tracking-wide">
                type of booking
              </span>
              <span className="text-right text-lg capitalize tracking-wide font-sans">
                {props.hostel.payment_type}
              </span>
            </CardDescription>
            <CardDescription className="flex justify-between gap-8">
              <span className="text-left text-lg tracking-wide">
                reporting date
              </span>
              <span className="text-right text-lg capitalize tracking-wide font-sans">
                {props.hostel.report_date_start}
              </span>
            </CardDescription>

            <CardDescription className="flex justify-between gap-8">
              <span className="text-left text-lg tracking-wide">
                reporting date
              </span>
              <span className="text-right text-lg capitalize tracking-wide font-sans">
                {props.hostel.report_date_start}
              </span>
            </CardDescription>
            <CardDescription className="flex justify-between gap-8">
              <span className="text-left text-lg tracking-wide">
                created at
              </span>
              <span className="text-right text-lg capitalize tracking-wide font-sans">
                {createdAt.toDateString()}
              </span>
            </CardDescription>
          </div>
          <CardFooter className="flex items-center justify-center text-lg p-4">
            <div className="tracking-wide">{props.hostel.report_date_end}</div>
          </CardFooter>
          <div className="w-full grid md:grid-cols-2  gap-4 ">
            <PayButton
              label="make payment"
              amount={props.hostel.amount}
              email={profile?.email}
              subaccount_code={subcode}
              booking_id={props.hostel.id}
            />
            <Button
              onClick={() => {
                deleteBooking();
                toast.success("you deleted the booking successfully");
                router.refresh();
              }}
              className="bg-red-500 text-white  hover:bg-red-500 hover:ease-out hover:-translate-y-0.5 w-full cursor-pointer    py-6 capitalize  tracking-wide font-bold shadow-lg"
            >
              delete
              <Trash2 size={22} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
