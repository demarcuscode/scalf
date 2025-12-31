"use client";
import NotificationCard from "./notficationcard";

export default function page() {
  return (
    <div className="p-6 space-y-4">
      <NotificationCard
        title="New Booking Request"
        message="A new guest has booked Room 302. Please review."
        time="2 min ago"
        unread
      />

      <NotificationCard
        title="Payment Received"
        message="You received ¢150.00 from Jonathan."
        time="35 min ago"
      />

      <NotificationCard
        title="Chat Message"
        message="Manager: Please update your availability."
        time="Yesterday"
        unread={true}
      />
    </div>
  );
}
