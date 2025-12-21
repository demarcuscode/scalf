// import BookingForm from "@/components/profile/bookingform";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return <section className="pt-20 ">{/* <BookingForm /> */}</section>;
}
