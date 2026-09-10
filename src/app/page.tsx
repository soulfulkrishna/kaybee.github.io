import Link from "next/link";
import { Shell } from "@/components/Shell";
import { PublicStatus } from "@/components/PublicStatus";
import { profile, highlights, researchAreas, software } from "@/lib/content";
import { getPublishedProjects } from "@/lib/supabase/public";

export const revalidate=60;

export default async function Home(){
  const projects=(await getPublishedProjects()).slice(0,4);
  return <Shell title="KRISHNA_BHATIA::HOME">
    <section className="hero">
      <p className="kicker">RESEARCH WORKSTATION / PUBLIC BOOT</p>
      <h1>{profile.name}</h1>
      <p className="headline">{profile.headline}</p>
      <p className="kicker">{profile.signature} · {profile.thesis}</p>
      <p>{profile.bio}</p>
      <div className="command-row">
        <Link className="buttonlike" href="/publications">PAPERS / OUTPUTS</Link>
        <Link className="buttonlike" href="/projects">PROJECTS</Link>
        <Link className="buttonlike" href="/experience">WORK.LOG</Link>
        <Link className="buttonlike" href="/about">ABOUT USER</Link>
      </div>
    </section>

    <div className="grid two">
      <section className="panel">
        <h2>PUBLIC.HIGHLIGHTS</h2>
        <ul>{highlights.map(item=><li key={item}>{item}</li>)}</ul>
      </section>
      <section className="panel">
        <h2>RESEARCH.AREAS</h2>
        <div className="chips">{researchAreas.map(area=><span key={area}>{area}</span>)}</div>
      </section>
    </div>

    <PublicStatus/>

    <section className="panel">
      <div className="panel-heading"><h2>PUBLISHED.PROJECTS</h2><Link href="/projects">VIEW ALL →</Link></div>
      {projects.length?<div className="cards">{projects.map(project=><article className="card" key={project.slug}><h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3><p>{project.summary}</p><small>{project.technologies.join(" · ")}</small></article>)}</div>:<p className="muted">No database-backed project has been explicitly published yet. Private research remains private.</p>}
    </section>

    <section className="panel">
      <div className="panel-heading"><h2>OPEN.RESEARCH.SOFTWARE</h2><Link href="/software">VIEW ALL →</Link></div>
      <div className="cards">{software.slice(0,3).map(item=><article className="card" key={item.name}><h3><a href={item.href}>{item.name}</a></h3><p>{item.description}</p><small>{item.tag}</small></article>)}</div>
    </section>

    <p className="muted">{profile.publicNote}</p>
  </Shell>
}
