"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { supabase } from "@/lib/supabase/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  notificationSchema,
  NotificationValues,
} from "@/components/hostel/schema";
import { toast } from "sonner";
import { useEffect } from "react";
import { PlusCircle } from "lucide-react";

export default function CreateNotifications() {
  const form = useForm<NotificationValues>({
    resolver: zodResolver(notificationSchema),
    defaultValues: {
      message: "",
      type: "info",
    },
  });

  const onSubmit = async (values: NotificationValues) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      toast.error("Not authenticated");
      return;
    }

    const { error } = await supabase.from("notifications").insert({
      message: values.message,
      type: values.type,
      created_by: user.id,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Notification created");
    form.reset();
  };

  useEffect(() => {
    const setup = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const channel = supabase
        .channel("notifications-realtime")
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "notifications",
          },
          (payload) => {}
        )
        .subscribe();

      setup();
      return () => {
        supabase.removeChannel(channel);
      };
    };
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notification Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter notification message..."
                  {...field}
                  className="shadow-lg py-6"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="bg-miaccent text-white text-lg hover:bg-miaccent"
          type="submit"
        >
          create notification <PlusCircle size={20} />
        </Button>
      </form>
    </Form>
  );
}
