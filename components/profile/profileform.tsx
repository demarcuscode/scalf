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

const profileSchema = z.object({
  full_name: z.string().min(2),
  avatar_url: z.string().url().optional(),
  from_country: z.string().optional(),
  contact: z.string().optional(),
  school: z.string().optional(),
  course: z.string().optional(),
  level: z.string().optional(),
  budget: z.number().optional(),
  bio: z.string().optional(),
});

type ProfileFormType = z.infer<typeof profileSchema>;

export default function ProfileForm() {
  const form = useForm<ProfileFormType>({
    resolver: zodResolver(profileSchema),
    defaultValues: {},
  });

  function onSubmit(values: ProfileFormType) {
    console.log(values);
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Profile</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            name="full_name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="avatar_url"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Avatar URL</FormLabel>
                <FormControl>
                  <Input placeholder="Image URL" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["from_country", "contact", "school", "course", "level"].map(
              (k) => (
                <FormField
                  key={k}
                  name={k as any}
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{k.replace("_", " ")}</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              )
            )}
          </div>

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
                    onChange={(e) => field.onChange(+e.target.value)}
                  />
                </FormControl>
              </FormItem>
            )}
          />

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
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button className="w-full">Save Profile</Button>
        </form>
      </Form>
    </div>
  );
}
