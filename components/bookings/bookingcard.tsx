"use client";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import PayButton from "../general/paybtn";

interface bookingcardprops {
  className?: string;
  hostel: any;
}

export default function BookingCard(props: bookingcardprops) {
  const router = useRouter();
  return (
    <div className={cn("p-4 relative w-full", props.className)}>
      <Card className="w-full shadow-lg relative shadow-misecondary">
        <Edit
          onClick={() => router.push(`/bookings/${props.hostel.id}/edit`)}
          className="absolute cursor-pointer hover:-translate-y-0.5 hover:ease-out  top-3 right-3"
          size={22}
        />
        <CardContent className="flex flex-col gap-2 w-full justify-between">
          <CardTitle className="text-lg text-center font-bold  tracking-wide text-miprimary ">
            Booking{" "}
          </CardTitle>
          <div className=" flex flex-col gap-3">
            <CardDescription className="flex justify-between gap-8">
              <span className="text-left text-lg tracking-wide">applicant</span>
              <span className="text-right text-lg capitalize tracking-wide font-sans">
                {props.hostel.applicant}
              </span>
            </CardDescription>
            <CardDescription className="flex justify-between gap-8">
              <span className="text-left text-lg tracking-wide">
                hostel name
              </span>
              <span className="text-right text-lg capitalize tracking-wide font-sans">
                {props.hostel.hostelName}
              </span>
            </CardDescription>
            <CardDescription className="flex justify-between gap-8">
              <span className="text-left text-lg tracking-wide">
                type of booking
              </span>
              <span className="text-right text-lg capitalize tracking-wide font-sans">
                {props.hostel.type}
              </span>
            </CardDescription>
            <CardDescription className="flex justify-between gap-8">
              <span className="text-left text-lg tracking-wide">course</span>
              <span className="text-right text-lg capitalize tracking-wide font-sans">
                {props.hostel.course}
              </span>
            </CardDescription>
          </div>
          <CardFooter className="flex items-center justify-center text-lg p-4">
            <div className="tracking-wide">{props.hostel.startingDate}</div>
          </CardFooter>
          <div className="w-full grid md:grid-cols-2  gap-4 ">
            <PayButton
              label="make payment"
              amount={5000}
              email="marcuoware@gmail.com"
              subaccountCode="123"
            />
            <Button
              onClick={() =>
                toast.success("you deleted the booking successfully")
              }
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
