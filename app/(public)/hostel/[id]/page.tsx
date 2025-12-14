import { amenities } from "@/components/hero/info";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { ratedhostels } from "@/lib/constant";
import { currencyfunc } from "@/lib/utils";
import {
  BookOpenCheck,
  CheckCircle,
  ChevronLeftCircle,
  FootprintsIcon,
  Landmark,
  MapPin,
  MessageCircle,
  XCircle,
} from "lucide-react";
import Image from "next/image";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const hostel = ratedhostels.find((item) => item.id == id);
  const newPrice = currencyfunc(hostel?.price);
  return (
    <section className="">
      <div className="relative">
        <div className="max-w-full h-[60vh] relative  object-contain">
          <Image
            src={hostel?.imageurl as string}
            alt={hostel?.label as string}
            width={1000}
            height={1000}
            className="w-full h-[60vh] object-cover"
          />
          <ChevronLeftCircle
            className="z-20 text-card absolute top-12 left-3 "
            size={50}
          />
        </div>
        <Card className="relative p-0 shadow-none rounded-none h-full">
          <CardContent className="md:flex  gap-8 gap-4 p-4 ">
            <div className="flex flex-col gap-6 py-10  ">
              <CardTitle className="text-4xl font-extrabold  uppercase  text-lg tracking-wide">
                {hostel?.label}
              </CardTitle>
              <Badge className="p-0 text-white bg-miprimary shadow-lg text-base pr-3 uppercase absolute z-20 rounded-none -top-10 right-0">
                {hostel?.rating && (
                  <p className=" text-white font-medium bg-misecondary text-base text-white p-4 round-r-full">
                    ⭐ {hostel?.rating}
                  </p>
                )}
                {parseInt(hostel?.rating as string) >= 2.5
                  ? "highly rated"
                  : "premium"}
              </Badge>

              <CardDescription className="text-lg flex gap-4 ">
                <MapPin />
              </CardDescription>

              {hostel?.city}
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
            <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-4 md:ml-40 md:pt-10 md:pl-20 p-4">
              {amenities.map((item: any, index: number) => {
                return (
                  <div
                    className="flex flex-col gap-4  items-center justify-center"
                    key={index}
                  >
                    <div className="rounded-full bg-miprimary p-2 text-white">
                      {item.icon}
                    </div>
                    <p className="text-lg">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2  gap-4 py-10 p-4  ">
          <Button className="w-full py-6 text-lg bg-white capitalize text-miprimary  shadow-lg ">
            book now
            <BookOpenCheck />
          </Button>
          <Button className="w-full py-6  text-lg shadow-lg capitalize bg-miprimary text-white">
            chat manager
            <MessageCircle />
          </Button>
        </div>
      </div>
    </section>
  );
}
