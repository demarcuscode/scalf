import NavBar from "@/components/general/navbar";

export default function HosetelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      <>{children}</>
    </div>
  );
}
