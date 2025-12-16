"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowRightCircle } from "lucide-react";

// Supabase-aligned schema for `hostels` table
const hostelSchema = z.object({
  name: z.string().min(2),
  description: z.string().optional(),
  location: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
  manager_id: z.string().uuid().optional(),
  total_rooms: z.coerce.number().optional(),
  metadata: z.any().optional(),
});

export default function HostelForm() {
  const form = useForm({ resolver: zodResolver(hostelSchema) });

  return (
    <Card className="max-w-full shadow-lg   my-10  md:my-10">
      <CardHeader className="">
        <CardTitle className="capitalize text-xl text-center  text-miprimary tracking-wide uppercase font-bold">
          create or edit hostels
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid gap-6">
          <div className="grid gap-2">
            <Label className="text-base tracking-wide">Hostel Name</Label>
            <Input
              {...form.register("name")}
              className="py-6 shadow-lg"
              placeholder="Hostel Name"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-base tracking-wide">Description</Label>
            <Textarea
              {...form.register("description")}
              placeholder="Description"
              className="py-6 shadow-lg"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-base tracking-wide">Location</Label>
            <Input
              {...form.register("location")}
              placeholder="General Location"
              className="py-6 shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label className="text-base tracking-wide">Address</Label>
              <Input
                className="py-6 shadow-lg"
                {...form.register("address")}
                placeholder="Street Address"
              />
            </div>

            <div className="grid gap-2">
              <Label className="text-base tracking-wide">City</Label>
              <Input
                className="py-6 shadow-lg"
                {...form.register("city")}
                placeholder="City"
              />
            </div>

            <div className="grid gap-2">
              <Label className="text-base tracking-wide">State</Label>
              <Input
                className="py-6 shadow-lg"
                {...form.register("state")}
                placeholder="State/Region"
              />
            </div>

            <div className="grid gap-2">
              <Label className="text-base tracking-wide">Country</Label>
              <Input
                className="py-6 shadow-lg"
                {...form.register("country")}
                placeholder="Country"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label className="text-base tracking-wide">
              Manager ID (profile uuid)
            </Label>
            <Input
              className="py-6 shadow-lg"
              {...form.register("manager_id")}
              placeholder="Manager Profile ID"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-base tracking-wide">Total Rooms</Label>
            <Input
              className="py-6 shadow-lg"
              type="number"
              {...form.register("total_rooms")}
              placeholder="Total Rooms in Hostel"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-miaccent/90 text-white cursor-pointer hover:bg-miaccent  tracking-wide hover:-translate-y-0.5 hover:shadow-misecondary hover:shadow-lg  px-6 py-6 duration-500 ease-out flex items-center capitalize text-lg font-extrabold shadow-lg "
          >
            Save Hostel
            <ArrowRightCircle />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
