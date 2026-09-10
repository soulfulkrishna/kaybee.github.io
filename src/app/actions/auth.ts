"use server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { OWNER_EMAIL } from "@/lib/auth";
import { getSiteUrl } from "@/lib/env";
export async function requestOwnerMagicLink(formData:FormData){
  const email=String(formData.get("email")||"").trim().toLowerCase();
  if(email!==OWNER_EMAIL) redirect("/owner/login?error=not-authorized");
  const h=await headers(); const origin=h.get("origin"); const host=h.get("x-forwarded-host")||h.get("host");
  if(origin&&host&&new URL(origin).host!==host) throw new Error("Invalid request origin.");
  const supabase=await createSupabaseServerClient(); const redirectTo=`${getSiteUrl()}/auth/callback?next=/owner`;
  const {error}=await supabase.auth.signInWithOtp({email,options:{shouldCreateUser:true,emailRedirectTo:redirectTo}});
  if(error) redirect(`/owner/login?error=${encodeURIComponent(error.message.slice(0,120))}`); redirect("/owner/login?sent=1");
}
export async function signOutOwner(){const supabase=await createSupabaseServerClient();await supabase.auth.signOut();redirect("/");}
