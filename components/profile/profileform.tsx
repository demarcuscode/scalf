"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormItem,
  FormControl,
  FormLabel,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { toast } from "sonner";

const profileSchema = z.object({
  full_name: z.string().min(2, "Name is too short"),
  from_country: z.string().optional(),
  contact: z.string().optional(),
  school: z.string().optional(),
  course: z.string().optional(),
  level: z.string().optional(),
  budget: z.number().optional(),
  bio: z.string().optional(),
});

type ProfileFormType = z.infer<typeof profileSchema>;

interface pageprops {
  profile: any;
}

export default function ProfileForm() {
  const [user, setUser] = useState<any>();
  const [profile, setProfile] = useState<any>();

  useEffect(() => {
    const fetchuser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchuser();
  }, []);

  useEffect(() => {
    if (!user) return; // Wait until user is fetched

    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) {
        console.log("Error fetching profile:", error);
      } else {
        setProfile(data);
      }
    };

    fetchProfile();
  }, [user]);

  console.log("the profile", profile);
  const form = useForm<ProfileFormType>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      bio: profile?.bio || "",
      budget: profile?.budget || "",
      contact: profile?.contact || "",
      course: profile?.contact || "",
      from_country: profile?.from_country || "",
      full_name: profile?.from_profile || "",
      level: profile?.level || "",
    },
  });

  const onSubmit = async (values: ProfileFormType) => {
    // Insert hostel into Supabase
    form.reset();
    toast.success("😊profile was updated!🔥");
  };

  return (
    <div className="mt-20 shadow-miprimary p-4 bg-white shadow rounded-xl md:max-w-[80%] md:mx-auto">
      <h2 className="text-xl text-center text-misecondary tracking-wide font-semibold mb-4">
        Profile
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <FormField
            name="full_name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    className="py-6 shadow-lg"
                    placeholder="Your full name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Avatar */}

          {/* Grid fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["from_country", "contact", "school", "course", "level"].map(
              (k) => (
                <FormField
                  key={k}
                  name={k as keyof ProfileFormType}
                  control={form.control}
                  render={({ field }: any) => (
                    <FormItem>
                      <FormLabel>{k.replace("_", " ")}</FormLabel>
                      <FormControl>
                        <Input {...field} className="py-6 shadow-lg" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              )
            )}
          </div>

          {/* Budget */}
          <FormField
            name="budget"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget (GHS)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    className="shadow-lg py-6"
                    onChange={(e) =>
                      field.onChange(
                        e.target.value ? Number(e.target.value) : undefined
                      )
                    }
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Bio */}
          <FormField
            name="bio"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about yourself..."
                    {...field}
                    className="py-6 shadow-lg"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Metadata (hidden UX power) */}

          <Button className="w-full py-6 bg-miaccent tracking-wide hover:bg-miaccent hover:-translate-y-0.5 text-lg font-bold tracking-wide">
            save profile
            <PlusCircle />
          </Button>
        </form>
      </Form>
    </div>
  );
}
