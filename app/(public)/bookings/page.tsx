"use client";
import BookingCard from "@/components/bookings/bookingcard";
import { supabase } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export default function page() {
  const [bookings, setBookings] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [hostel, setHostel] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (!user) return;

    // fetch the bookings for that individual
    const fetchbookings = async () => {
      const { data, error } = await supabase
        .from("hostel_bookings")
        .select("*")
        .eq("student_id", user.id);
      setBookings(data);

      // get the hostel
      if (!data) return;
      const fetchhostel = await supabase.from("hostels").select("*");
      setHostel(fetchhostel.data);
    };
    fetchbookings();
  }, [user]);

  return (
    <section className="">
      <div className="pt-20 flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:items-center md:max-w-[80%] md:mx-auto ">
        {bookings?.map((item: any, index: number) => {
          return <BookingCard key={index} hostel={item} />;
        })}
      </div>
    </section>
  );
}
