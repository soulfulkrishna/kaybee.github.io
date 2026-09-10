import { Shell } from "@/components/Shell";
import { experience, volunteering } from "@/lib/content";

export const metadata={title:"Work.Log"};

export default function ExperiencePage(){
  return <Shell title="WORK.LOG">
    <h1>Experience</h1>
    <p className="lead">Research, industry labs, academic collaboration, policy work and community leadership across quantum AI and scientific computing.</p>
    <div className="timeline">
      {experience.map(item=><article key={`${item.org}-${item.period}-${item.role}`}>
        <div className="timeline-marker"/>
        <div>
          <h2>{item.role}</h2>
          <p><strong>{item.org}</strong> · {item.period}</p>
          <p className="muted">{item.location}</p>
          <p>{item.note}</p>
        </div>
      </article>)}
    </div>

    <section className="panel">
      <h2>VOLUNTEERING / COMMUNITY</h2>
      <div className="records">
        {volunteering.map(item=><div className="record" key={`${item.org}-${item.role}`}>
          <div><strong>{item.role}</strong><span>{item.org}</span></div>
          <span>{item.period}</span>
        </div>)}
      </div>
    </section>
  </Shell>
}
