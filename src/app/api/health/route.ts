import { NextResponse } from "next/server";
import { getPublicSupabaseEnv } from "@/lib/env";
export async function GET(){return NextResponse.json({ok:true,app:"kb91-workstation",supabaseConfigured:Boolean(getPublicSupabaseEnv())},{headers:{"Cache-Control":"no-store"}});}
