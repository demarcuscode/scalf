"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { subaccountSchema, SubaccountValues } from "@/components/hostel/schema";
import { WalletCards } from "lucide-react";

export function WalletForm() {
  const form = useForm<SubaccountValues>({
    resolver: zodResolver(subaccountSchema),
    defaultValues: {
      business_name: "",
      settlement_bank: "",
      account_number: "",
      percentage_charge: 5,
    },
  });

  const onSubmit = async (data: SubaccountValues) => {
    try {
      const res = await fetch("/api/paystack/subaccount", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to create subaccount");

      toast.success("🎉 Subaccount created successfully");
      form.reset();
    } catch (error) {
      toast.error("❌ Could not create subaccount");
      console.error(error);
    }
  };

  return (
    <Card className="w-full ">
      <CardHeader>
        <CardTitle className="text-xl text-center">
          Create Paystack Subaccount
        </CardTitle>
      </CardHeader>

      <CardContent className="">
        <Form {...form}>
          <form
            className="flex flex-col gap-8 "
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* Business Name */}
            <FormField
              control={form.control}
              name="business_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Business Name</FormLabel>
                  <FormControl>
                    <Input
                      className="px-4 py-8 shadow-lg"
                      placeholder="e.g. Sunrise Hostel"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Settlement Bank */}
            <FormField
              control={form.control}
              name="settlement_bank"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Settlement Bank</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          className="px-4 py-8 shadow-lg"
                          placeholder="Select bank"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="px-4 py-8 shadow-lg">
                      {/* Example Ghana banks – replace with Paystack list */}
                      <SelectItem value="MTN">MTN MoMo</SelectItem>
                      <SelectItem value="VOD">Vodafone Cash</SelectItem>
                      <SelectItem value="ATL">AirtelTigo</SelectItem>
                      <SelectItem value="ECO">Ecobank</SelectItem>
                      <SelectItem value="GCB">GCB Bank</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Account Number */}
            <FormField
              control={form.control}
              name="account_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Account Number</FormLabel>
                  <FormControl>
                    <Input
                      className="px-4 py-8 shadow-lg"
                      placeholder="10-digit account number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Percentage Charge */}
            <FormField
              control={form.control}
              name="percentage_charge"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Platform Charge (%)</FormLabel>
                  <FormControl>
                    <Input
                      className="px-4 py-8 shadow-lg"
                      type="number"
                      min={1}
                      max={100}
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-miaccent hover:bg-miaccent  text-white py-8 px-4  text-lg"
            >
              Create Wallet
              <WalletCards size={22} />
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
