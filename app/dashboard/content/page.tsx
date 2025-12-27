"use client";

import CreateNotifications from "@/components/dashboard/createnotifications";
import { HostelDetailsForm } from "@/components/hostel/hostelform";
import { HostelRoomForm } from "@/components/hostel/hostelroomform";
import React from "react";

export default function page() {
  return (
    <div className="p-6 md:p-16 mt-10">
      <div className="flex flex-col gap-8">
        <CreateNotifications />
        <HostelDetailsForm />
        <HostelRoomForm />
      </div>
    </div>
  );
}
