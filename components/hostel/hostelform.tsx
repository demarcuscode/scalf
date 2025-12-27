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
import { UploadCloud } from "lucide-react";

type HostelPayload = HostelDetailsValues & {
  images: string[];
};

export function HostelDetailsForm() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [user, setUser] = useState<any>(null);

  const [profile, setProfile] = useState<any>(null);
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
      price: "",
      city: "",
    },
  });

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

  const onSubmit = async (data: HostelDetailsValues) => {
    setSaving(true);

    const payload: HostelPayload = {
      ...data,
      images: imageUrls,
    };

    const { data: createdHostel, error } = await supabase
      .from("hostels")
      .insert([payload])
      .select("id")
      .single();

    form.reset();
    toast.success("😊hostel was listed!🔥");
    redirect("/hostel");
  };

  return (
    <Card className="shadow-lg shadow-miprimary">
      <CardHeader className="text-2xl font-bold text-center">
        <CardTitle>Hostel Information</CardTitle>
      </CardHeader>

      <CardContent>
        <form className="grid gap-2" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col capitalize gap-4  py-5">
            <div>
              <Label className="text-lg py-2">Hostel Name</Label>
              <Input
                placeholder="enter hostel name"
                className="px-4 py-8  text-lg shadow-lg"
                {...form.register("label")}
              />
            </div>

            <div>
              <Label className="text-lg py-2 capitalize">price</Label>
              <Input
                placeholder="enter average pricing "
                className="px-4 py-8  text-lg shadow-lg"
                {...form.register("price")}
              />
            </div>

            <div>
              <Label className="text-lg py-2">location</Label>
              <Input
                placeholder="enter city where the hostel is located"
                className="px-4 py-8 text-lg shadow-lg"
                {...form.register("city")}
              />
            </div>
          </div>

          <div>
            <Label className="text-lg py-2">Description</Label>
            <Textarea
              placeholder="tell us a little about your hostel."
              className="px-4 py-8 text-lg shadow-lg"
              {...form.register("description")}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="text-lg py-2">Estabilishment Year</Label>
              <Input
                placeholder="year hostel was built"
                type="number"
                className="px-4 py-8 text-lg shadow-lg"
                {...form.register("establishment_year")}
              />
            </div>

            <div>
              <Label className="text-lg py-2">Buildings</Label>
              <Input
                placeholder="number of hostel with the same name"
                type="number"
                className="px-4 py-8 text-lg shadow-lg"
                {...form.register("number_of_buildings")}
              />
            </div>
          </div>

          <div>
            <Label className="text-lg py-2">Owner's Name</Label>
            <Input
              placeholder="the name of  the  owner"
              className="px-4 py-8 text-lg shadow-lg"
              {...form.register("owner_name")}
            />
          </div>

          <div>
            <Label className="text-lg py-2">Owner Contact</Label>
            <Input
              placeholder="the phone number of owner"
              className="px-4 py-8 text-lg shadow-lg"
              {...form.register("owner_contact")}
            />
          </div>

          <div className="py-5">
            <Label className="text-lg py-2">Hostel Images</Label>
            <Input
              className="px-4 py-8 text-lg shadow-lg"
              type="file"
              accept="image/*"
              multiple
              disabled={uploading}
              onChange={handleImageUpload}
            />

            {uploading && (
              <p className="text-sm text-muted-foreground mt-1 py-2">
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
            className="py-8 px-4 hover:bg-miaccent text-lg bg-miaccent text-white"
            disabled={uploading || saving}
          >
            {saving ? "Saving..." : "Save Hostel"}
            <UploadCloud size={22} />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
