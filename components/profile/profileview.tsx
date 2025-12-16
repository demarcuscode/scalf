import { cn } from "@/lib/utils";
import React from "react";
import ProfileForm from "./profileform";

interface profileviewprops {
  className?: string;
  user?: any;
}
export default function ProfileView(props: profileviewprops) {
  const fakeprofile = {
    full_name: "marcus",
    avatar_url: "",
    from_country: "ghana",
    contact: "0543304604",
    school: "crown prince",
    course: "physic",
    level: "200",
    budget: "60000",
    bio: "",
  };
  return (
    <div className={cn("", props.className)}>
      <ProfileForm />
    </div>
  );
}
