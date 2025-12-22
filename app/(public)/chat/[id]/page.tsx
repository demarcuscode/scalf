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
  const params = useParams<{ id: string }>();
  const roomName = params.id;
  const [username, setUsername] = useState<string | any>("");

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUsername(data.user?.email ?? "anonymous");
    };
    getUser();
  }, []);

  useEffect(() => {
    const ensureRoomExists = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      // try insert; ignore if already exists
      await supabase.from("chat_rooms").upsert({
        id: roomName,
        created_by: user.id,
      });
    };

    ensureRoomExists();
  }, [roomName]);

  return (
    <div className="p-4 bg-misecondary pt-16 md:p-24">
      <RealtimeChat username={username} roomName={roomName} />
    </div>
  );
}
