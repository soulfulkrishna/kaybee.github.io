import { Shell } from "@/components/Shell";
import { education, experience, highlights, profile, researchAreas, service, skills, languages, certifications, interests } from "@/lib/content";

export const metadata={title:"Resume"};

export default function ResumePage(){
  return <Shell title="RESUME.DOC">
    <div className="resume">
      <h1>{profile.name}</h1>
      <p className="headline">{profile.headline}</p>
      <p>{profile.bio}</p>
      <p><a href={`mailto:${profile.email}`}>{profile.email}</a> · <a href={profile.links.linkedin}>LinkedIn</a> · <a href={profile.links.scholar}>Google Scholar</a> · <a href={profile.links.github}>GitHub</a> · <a href={profile.links.openreview}>OpenReview</a></p>

      <h2>Research interests</h2>
      <p>{researchAreas.join(" · ")}</p>

      <h2>Professional & research experience</h2>
      {experience.map(item=><p key={`${item.org}-${item.period}-${item.role}`}>
        <strong>{item.role} — {item.org}</strong><br/>
        {item.period} · {item.location}<br/>
        {item.note}
      </p>)}

      <h2>Education</h2>
      {education.map(item=><p key={`${item.degree}-${item.school}`}>
        <strong>{item.degree}</strong><br/>
        {item.school} · {item.period}<br/>
        {item.score}
      </p>)}

      <h2>Professional service & leadership</h2>
      <ul>{service.map(item=><li key={item}>{item}</li>)}</ul>

      <h2>Technical skills</h2>
      <p><strong>Quantum:</strong> {skills.quantum.join(" · ")}</p>
      <p><strong>ML / Scientific:</strong> {skills.ml.join(" · ")}</p>
      <p><strong>Programming / Systems:</strong> {skills.systems.join(" · ")}</p>
      <p><strong>Research practice:</strong> {skills.research.join(" · ")}</p>
      <p><strong>Policy / Strategy:</strong> {skills.policy.join(" · ")}</p>

      <h2>Languages</h2>
      <ul>{languages.map(item=><li key={item}>{item}</li>)}</ul>

      <h2>Additional</h2>
      <p>{[...certifications, ...interests].join(" · ")}</p>

      <h2>Selected highlights</h2>
      <ul>{highlights.map(item=><li key={item}>{item}</li>)}</ul>
      <p className="muted">For the full and current publication record, see the Research / Papers section and Google Scholar.</p>
    </div>
  </Shell>
}
