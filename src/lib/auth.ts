import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
export const OWNER_EMAIL = "soulfulkrishna@gmail.com";
export async function getOwnerSession() {
  const supabase = await createSupabaseServerClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) return null;
  const { data: owner } = await supabase.from("owner_accounts").select("user_id").eq("user_id", user.id).maybeSingle();
  if (!owner) return null;
  return { supabase, user };
}
export async function requireOwner() {
  const session = await getOwnerSession();
  if (!session) redirect("/owner/login");
  return session;
}
