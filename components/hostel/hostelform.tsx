"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

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
    <Card className="max-w-3xl mx-auto p-6">
      <CardContent>
        <form className="grid gap-6">
          <div className="grid gap-2">
            <Label>Hostel Name</Label>
            <Input {...form.register("name")} placeholder="Hostel Name" />
          </div>

          <div className="grid gap-2">
            <Label>Description</Label>
            <Textarea
              {...form.register("description")}
              placeholder="Description"
            />
          </div>
          <Input
            {...form.register("location")}
            placeholder="General Location"
          />

          <div className="grid gap-2">
            <Label>Location</Label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>Address</Label>
              <Input
                {...form.register("address")}
                placeholder="Street Address"
              />
            </div>

            <div className="grid gap-2">
              <Label>City</Label>
              <Input {...form.register("city")} placeholder="City" />
            </div>

            <div className="grid gap-2">
              <Label>State</Label>
              <Input {...form.register("state")} placeholder="State/Region" />
            </div>

            <div className="grid gap-2">
              <Label>Country</Label>
              <Input {...form.register("country")} placeholder="Country" />
            </div>
          </div>

          <div className="grid gap-2">
            <Label>Manager ID (profile uuid)</Label>
            <Input
              {...form.register("manager_id")}
              placeholder="Manager Profile ID"
            />
          </div>

          <div className="grid gap-2">
            <Label>Total Rooms</Label>
            <Input
              type="number"
              {...form.register("total_rooms")}
              placeholder="Total Rooms in Hostel"
            />
          </div>

          <Button type="submit" className="w-full">
            Save Hostel
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
