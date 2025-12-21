"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { hostelDetailsSchema, HostelDetailsValues } from "./schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

type HostelPayload = HostelDetailsValues & {
  images: string[];
};

export function HostelDetailsForm() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  const form = useForm<HostelDetailsValues>({
    resolver: zodResolver(hostelDetailsSchema),
    defaultValues: {
      label: "",
      establishment_year: "",
      number_of_buildings: "",
      description: "",
      owner_name: "",
      owner_contact: "",
    },
  });

  // ✅ IMAGE UPLOAD
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("files", file));

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      console.error("Upload failed");
      setUploading(false);
      return;
    }

    const { urls } = await res.json();
    setImageUrls((prev) => [...prev, ...urls]);
    setUploading(false);
  };

  // ✅ FORM SUBMIT
  const onSubmit = async (data: HostelDetailsValues) => {
    setSaving(true);

    const payload: HostelPayload = {
      ...data,
      images: imageUrls,
    };

    // Insert hostel into Supabase
    const { data: createdHostel, error } = await supabase
      .from("hostels")
      .insert([payload])
      .select("id") // select the inserted ID
      .single();

    // Redirect to /hostel/upload/[id]
    redirect(`/hostel/upload/${createdHostel?.id}`);
  };

  return (
    <Card className="shadow-lg shadow-miprimary">
      <CardHeader className="text-2xl font-bold text-center">
        <CardTitle>Hostel Information</CardTitle>
      </CardHeader>

      <CardContent>
        <form className="grid gap-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <Label className="text-lg">Hostel Name</Label>
            <Input className="py-6 text-lg" {...form.register("label")} />
          </div>

          <div>
            <Label className="text-lg">Description</Label>
            <Textarea
              className="py-6 text-lg"
              {...form.register("description")}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-lg">Estabilishment Year</Label>
              <Input
                type="number"
                className="py-6 text-lg"
                {...form.register("establishment_year")}
              />
            </div>

            <div>
              <Label className="text-lg">Buildings</Label>
              <Input
                type="number"
                className="py-6 text-lg"
                {...form.register("number_of_buildings")}
              />
            </div>
          </div>

          <div>
            <Label className="text-lg">Owner Name</Label>
            <Input className="py-6 text-lg" {...form.register("owner_name")} />
          </div>

          <div>
            <Label className="text-lg">Owner Contact</Label>
            <Input
              className="py-6 text-lg"
              {...form.register("owner_contact")}
            />
          </div>

          {/* IMAGE UPLOAD */}
          <div className="">
            <Label className="text-lg">Hostel Images</Label>
            <Input
              className="py-6"
              type="file"
              accept="image/*"
              multiple
              disabled={uploading}
              onChange={handleImageUpload}
            />

            {uploading && (
              <p className="text-sm text-muted-foreground mt-1">
                Uploading images…
              </p>
            )}

            {imageUrls.length > 0 && (
              <div className="grid grid-cols-3 gap-2 mt-3">
                {imageUrls.map((url) => (
                  <img
                    key={url}
                    src={url}
                    alt="Hostel"
                    className="h-24 w-full rounded object-cover"
                  />
                ))}
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="py-6 text-lg bg-miaccent text-white"
            disabled={uploading || saving}
          >
            {saving ? "Saving..." : "Save Hostel"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
