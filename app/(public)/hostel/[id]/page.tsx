import { amenities } from "@/components/hero/info";
import Idpagecomp from "@/components/hostel/idpagecomp";
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
  return (
    <div className="">
      <Idpagecomp hostel={hostel} />
    </div>
  );
}
