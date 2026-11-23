import { skills } from '../data.js'
import { Braces, Database, GitBranch, Layers3, Server, Sparkles } from 'lucide-react'

const categories = [
  { name: 'Frontend', icon: Layers3, note: 'Interfaces & interaction' },
  { name: 'Backend', icon: Server, note: 'Application logic' },
  { name: 'Database', icon: Database, note: 'Data & persistence' },
  { name: 'Tools', icon: GitBranch, note: 'Workflow & collaboration' },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">MY TOOLKIT <span className="heading-line" /></p><h2>Skills that bring<br /><span className="serif-accent">ideas to life.</span></h2></div>
          <p className="heading-aside">The tools I use to design, build, and ship digital experiences — always growing, always experimenting.</p>
        </div>
        <div className="toolkit-grid">
          {categories.map(({ name, icon: Icon, note }) => (
            <article className="toolkit-card" key={name}>
              <div className="toolkit-top"><span className="toolkit-icon"><Icon size={19} /></span><span className="mono">/{name.toLowerCase()}</span></div>
              <h3>{name}</h3><p>{note}</p>
              <div className="skill-chips">{skills.filter(skill => skill.category === name).map(skill => <span key={skill.name}>{skill.name}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="skills-note"><Sparkles size={17} /><span>Always learning. Currently focused on building better React applications and sharpening my full-stack workflow.</span><Braces size={20} className="note-braces" /></div>
      </div>
    </section>
  )
}