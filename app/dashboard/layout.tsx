import { dashboardlinks } from "@/lib/constant";
import Sidebar from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full ">
      <Sidebar />
      <div className="flex-grow w-full ml-10 ">{children}</div>
    </div>
  );
}
