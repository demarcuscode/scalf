"use client";

import CreateNotifications from "@/components/dashboard/createnotifications";
import { HostelDetailsForm } from "@/components/hostel/hostelform";
import React from "react";

export default function page() {
  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col gap-8">
        <CreateNotifications />
        <HostelDetailsForm />
      </div>
    </div>
  );
}
