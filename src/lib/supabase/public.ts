import { createClient } from "@supabase/supabase-js";
import { getPublicSupabaseEnv } from "@/lib/env";
import type { PublishedProject, PublishedStatus } from "@/lib/types";

function client() {
  const env = getPublicSupabaseEnv();
  if (!env) return null;
  return createClient(env.url, env.key, { auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false } });
}
export async function getPublishedProjects(): Promise<PublishedProject[]> {
  const supabase = client(); if (!supabase) return [];
  const { data, error } = await supabase.from("published_projects").select("slug,title,summary,body,technologies,source_url,published_at").order("published_at", { ascending: false, nullsFirst: false });
  if (error) { console.error("published_projects read failed", error.message); return []; }
  return (data ?? []) as PublishedProject[];
}
export async function getPublishedProject(slug: string): Promise<PublishedProject | null> {
  const supabase = client(); if (!supabase) return null;
  const { data, error } = await supabase.from("published_projects").select("slug,title,summary,body,technologies,source_url,published_at").eq("slug", slug).maybeSingle();
  if (error) return null; return data as PublishedProject | null;
}
export async function getPublishedStatus(): Promise<PublishedStatus | null> {
  const supabase = client(); if (!supabase) return null;
  const { data, error } = await supabase.from("published_status").select("id,building,learning,exploring,updated_at").eq("id", "main").maybeSingle();
  if (error) return null; return data as PublishedStatus | null;
}
