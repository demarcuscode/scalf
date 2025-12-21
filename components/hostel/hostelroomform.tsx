"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { useState } from "react";

export const roomSchema = z.object({
  room_type: z.string().min(1, "Room type is required"),
  price: z.number().min(0),
});

export type RoomValues = z.infer<typeof roomSchema>;

type Hostel = { id: string; label: string };

type RoomPayload = RoomValues & {
  hostel_id: string;
  image: string;
};

export function HostelRoomForm({ hostel }: { hostel: Hostel }) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const form = useForm<RoomValues>({
    resolver: zodResolver(roomSchema),
    defaultValues: {
      room_type: "1 in 1",
      price: 0,
    },
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("files", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      console.error("Room image upload failed");
      setUploading(false);
      return;
    }

    const { urls } = await res.json();
    setImageUrl(urls[0]);
    setUploading(false);
  };

  const onSubmit = async (data: RoomValues) => {
    if (!imageUrl) {
      form.setError("room_type", { message: "Room image is required" });
      return;
    }

    const payload: RoomPayload = {
      ...data,
      image: imageUrl,
      hostel_id: hostel.id,
    };

    const res = await fetch("/api/rooms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("Failed to save room", err);
      return;
    }

    form.reset();
    setImageUrl(null);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Room – {hostel.label}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            {/* Room Type */}
            <FormField
              control={form.control}
              name="room_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Room Type</FormLabel>
                  <FormControl>
                    <Input placeholder="1 in 1, 2 in 1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Price */}
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Price" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Image Upload */}
            <FormItem>
              <FormLabel>Room Image</FormLabel>
              <Input
                type="file"
                accept="image/*"
                disabled={uploading}
                onChange={handleImageUpload}
              />
              {uploading && (
                <p className="text-sm text-muted-foreground mt-1">
                  Uploading image…
                </p>
              )}
              {imageUrl && (
                <div className="mt-3">
                  <img
                    src={imageUrl}
                    alt="Room"
                    className="h-32 w-full rounded object-cover"
                  />
                </div>
              )}
            </FormItem>

            <Button type="submit" disabled={uploading}>
              Add Room
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
