import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/env";
import { getPublishedProjects } from "@/lib/supabase/public";

export default async function sitemap():Promise<MetadataRoute.Sitemap>{
  const base=getSiteUrl();
  const staticRoutes=["","/about","/publications","/projects","/software","/experience","/resume","/contact"].map(path=>({
    url:`${base}${path}`,
    changeFrequency:"monthly" as const,
    priority:path===""?1:0.7
  }));
  const projects=(await getPublishedProjects()).map(p=>({
    url:`${base}/projects/${p.slug}`,
    lastModified:p.published_at||undefined,
    changeFrequency:"monthly" as const,
    priority:0.8
  }));
  return[...staticRoutes,...projects]
}
