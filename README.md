# KB/91 Research Workstation — full stack

Production Next.js branch for the KB/91 portfolio. Public pages read only from safe published projections; private research data is accessible only to the verified OWNER account through Supabase Auth + RLS.

## Required Vercel environment variables

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_SITE_URL`

No Supabase service-role key is required or expected by the application.

## Security boundary

`published_projects` and `published_status` are the only database-backed public projections. Private project descriptions, tasks, milestones, blockers, notes, ideas, activity, UUIDs, and private-storage paths are never queried by public routes.
