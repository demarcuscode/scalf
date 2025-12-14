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
    <Card className="max-w-3xl mx-auto p-6  my-20  md:my-10">
      <CardHeader className="">
        <CardTitle className="capitalize text-xl text-center  tracking-wide uppercase font-bold">
          create or edit hostels
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid gap-6">
          <div className="grid gap-2">
            <Label className="text-lg">Hostel Name</Label>
            <Input
              {...form.register("name")}
              className="py-6"
              placeholder="Hostel Name"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-lg">Description</Label>
            <Textarea
              {...form.register("description")}
              placeholder="Description"
              className="py-6"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-lg">Location</Label>
            <Input
              {...form.register("location")}
              placeholder="General Location"
              className="py-6"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label className="text-lg">Address</Label>
              <Input
                className="py-6"
                {...form.register("address")}
                placeholder="Street Address"
              />
            </div>

            <div className="grid gap-2">
              <Label className="text-lg">City</Label>
              <Input
                className="py-6"
                {...form.register("city")}
                placeholder="City"
              />
            </div>

            <div className="grid gap-2">
              <Label className="text-lg">State</Label>
              <Input
                className="py-6"
                {...form.register("state")}
                placeholder="State/Region"
              />
            </div>

            <div className="grid gap-2">
              <Label className="text-lg">Country</Label>
              <Input
                className="py-6"
                {...form.register("country")}
                placeholder="Country"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label className="text-lg">Manager ID (profile uuid)</Label>
            <Input
              className="py-6"
              {...form.register("manager_id")}
              placeholder="Manager Profile ID"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-lg">Total Rooms</Label>
            <Input
              className="py-6"
              type="number"
              {...form.register("total_rooms")}
              placeholder="Total Rooms in Hostel"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-miaccent/90 text-white cursor-pointer hover:bg-miaccent  tracking-wide hover:-translate-y-0.5 hover:shadow-misecondary hover:shadow-lg  px-6 py-6 duration-500 ease-out  capitalize text-lg font-extrabold shadow-lg "
          >
            Save Hostel
            <ArrowRightCircle />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
