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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { PlusCircle } from "lucide-react";

// Adjusting the Zod schema for payment_type as required
const bookingSchema = z.object({
  user_id: z.string(),
  hostel_id: z.string(),
  room_type_id: z.string(),
  checkin_date: z.string(),
  checkout_date: z.string(),
  payment_type: z.enum(["semester", "monthly"]), // Now it's required in Zod
});

type BookingFormType = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const form = useForm<BookingFormType>({
    resolver: zodResolver(bookingSchema), // Use the zod schema directly
    // Default value will be managed by the schema
  });

  function onSubmit(values: BookingFormType) {
    console.log(values);
  }

  return (
    <div className="mt-20 max-w-[90%] mx-auto p-6 bg-white shadow-lg border  rounded-lg shadow-misecondary">
      <h2 className="text-xl text-miprimary text-center font-semibold mb-4">
        Make Booking
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 flex flex-col gap-4"
        >
          <FormField
            name="user_id"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>User ID</FormLabel>
                <FormControl>
                  <Input
                    className="py-6 shadow-lg"
                    placeholder="User ID"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="hostel_id"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hostel ID</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Hostel ID"
                    className="py-6 shadow-lg"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="room_type_id"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Room Type ID</FormLabel>
                <FormControl>
                  <Input
                    className="py-6 shadow-lg"
                    placeholder="Room Type ID"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              name="checkin_date"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Check-in Date</FormLabel>
                  <FormControl>
                    <Input type="date" className="py-6 shadow-lg" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="checkout_date"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Check-out Date</FormLabel>
                  <FormControl>
                    <Input className="py-6 shadow-lg" type="date" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            name="payment_type"
            control={form.control}
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Payment Type</FormLabel>
                <Select
                  value={field.value} // Make sure 'value' is used here
                  onValueChange={field.onChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment type" />
                  </SelectTrigger>
                  <SelectContent className="shadow-lg py-6">
                    <SelectItem value="semester">Semester</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <Button className="w-full  bg-miaccent py-6 capitalize hover:bg-miaccent cursor-pointer hover:-translate-y-0.5 hover:ease-out tracking-wide shadow-lg text-white font-bold ">
            Submit Booking
            <PlusCircle size={22} />
          </Button>
        </form>
      </Form>
    </div>
  );
}
