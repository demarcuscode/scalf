import { dashboardlinks } from "@/lib/constant";
import Sidebar from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full min-h-screen">
      <Sidebar links={dashboardlinks} />
      <div className="flex-grow w-full ml-16 md:ml-20">{children}</div>
    </div>
  );
}
