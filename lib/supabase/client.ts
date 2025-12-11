"use client";

import { createBrowserClient } from "@supabase/ssr";

const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabase_anon_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createBrowserClient(supabase_url, supabase_anon_key);
