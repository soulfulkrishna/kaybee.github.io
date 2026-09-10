export type PublishedProject = {
  slug: string; title: string; summary: string; body: string; technologies: string[];
  source_url: string | null; published_at: string | null;
};
export type PublishedStatus = { id: "main"; building: string; learning: string; exploring: string; updated_at: string; };
