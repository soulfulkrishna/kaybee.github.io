import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { getPublicSupabaseEnv } from "@/lib/env";

export async function createSupabaseServerClient() {
  const env = getPublicSupabaseEnv();
  if (!env) throw new Error("Supabase environment is not configured.");
  const cookieStore = await cookies();
  return createServerClient(env.url, env.key, { cookies: {
    getAll() { return cookieStore.getAll(); },
    setAll(cookiesToSet) { try { cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)); } catch {} }
  }});
}
