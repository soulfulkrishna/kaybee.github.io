import { Shell } from "@/components/Shell";
import { software } from "@/lib/content";

export const metadata={title:"Research Software"};

export default function SoftwarePage(){
  return <Shell title="SOFTWARE.DIR">
    <h1>Selected Open Research Software</h1>
    <p className="lead">Public code and reproducibility packages associated with selected research directions.</p>
    <div className="cards">
      {software.map(item=><article className="card" key={item.name}>
        <p className="kicker">{item.tag}</p>
        <h2><a href={item.href}>{item.name}</a></h2>
        <p>{item.description}</p>
      </article>)}
    </div>
  </Shell>
}
