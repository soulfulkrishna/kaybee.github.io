import { Shell } from "@/components/Shell";
import { profile, publications } from "@/lib/content";

export const metadata={title:"Research / Papers"};

export default function PublicationsPage(){
  return <Shell title="RESEARCH.PAPERS">
    <h1>Research / Papers</h1>
    <p className="lead">Public, accepted, published, presented and openly available research outputs. Confidential and under-review work is excluded.</p>
    <p><a href={profile.links.scholar}>Google Scholar ↗</a> · <a href={profile.links.openreview}>OpenReview ↗</a></p>
    <div className="records">
      {publications.map(item=><article className="card" key={`${item.title}-${item.year}`}>
        <p className="kicker">{item.year} · {item.status}</p>
        <h2><a href={item.href}>{item.title}</a></h2>
        <p>{item.authors}</p>
        <p><strong>{item.venue}</strong></p>
      </article>)}
    </div>
  </Shell>
}
