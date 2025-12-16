"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { RealtimeChat } from "@/components/realtime-chat";
import { supabase } from "@/lib/supabase/client";

export default function Page() {
  const params = useParams<{ id: string }>();
  const roomName = params.id;

  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUsername(data.user?.email ?? "anonymous");
    };

    getUser();
  }, []);

  if (!roomName || !username) return null; // or loading spinner

  return (
    <div>
      <RealtimeChat username={username} roomName={roomName} />
    </div>
  );
}
