import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
export async function GET(request:Request){const url=new URL(request.url);const code=url.searchParams.get("code");const rawNext=url.searchParams.get("next");const next=rawNext?.startsWith("/")?rawNext:"/owner";if(code){const supabase=await createSupabaseServerClient();const {error}=await supabase.auth.exchangeCodeForSession(code);if(!error)return NextResponse.redirect(new URL(next,url.origin));}return NextResponse.redirect(new URL("/owner/login?error=callback",url.origin));}
