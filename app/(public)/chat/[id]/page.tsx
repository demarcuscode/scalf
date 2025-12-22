"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { RealtimeChat } from "@/components/realtime-chat";
import { supabase } from "@/lib/supabase/client";

interface pageprops {
  params: {
    id: string;
  };
}
export default function Page(props: pageprops) {
  const [username, setUsername] = useState<string | null>(null);
  const params = useParams<{ id: string }>();
  const roomName = params.id;

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUsername(data.user?.email ?? "anonymous");
    };
    getUser();
  }, []);

  if (!roomName || !username) return null; // or loading spinner

  return (
    <div className="p-4 bg-misecondary pt-16">
      <RealtimeChat username={username} roomName={roomName} />
    </div>
  );
}
