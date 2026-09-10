import { Shell } from "@/components/Shell";
import { profile, researchAreas, researchPrograms, languages } from "@/lib/content";

export const metadata={title:"About"};

export default function AboutPage(){
  return <Shell title="ABOUT.EXE">
    <p className="kicker">{profile.signature}</p>
    <h1>About Krishna</h1>
    <p className="lead">{profile.bio}</p>

    <div className="grid two">
      <section className="panel"><h2>LOCATION</h2><p>{profile.location}</p></section>
      <section className="panel"><h2>CURRENT ROLE</h2><p>Research Associate — QuantumAI Lab, Fractal Analytics</p></section>
    </div>

    <section className="panel">
      <h2>RESEARCH.AREAS</h2>
      <div className="chips">{researchAreas.map(area=><span key={area}>{area}</span>)}</div>
    </section>

    <section className="panel">
      <h2>RESEARCH.PROGRAMME</h2>
      <div className="cards">{researchPrograms.map(program=><article className="card" key={program.title}><p className="kicker">{program.title}</p><h3>{program.subtitle}</h3><p>{program.body}</p></article>)}</div>
    </section>

    <section className="panel">
      <h2>LANGUAGES</h2>
      <ul>{languages.map(language=><li key={language}>{language}</li>)}</ul>
    </section>

    <p>{profile.publicNote}</p>
  </Shell>
}
