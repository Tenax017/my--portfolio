import { ArrowUpRight, Github } from 'lucide-react'
import { projects } from '../data.js'

function ProjectArtwork({ project }) {
  return (
    <div className={`project-art project-${project.theme}`}>
      <div className="project-art-label">{project.label}</div>
      {project.theme === 'mint' && <div className="mock-bank"><div className="mock-bank-head"><span>nova<span>bank</span></span><span className="mock-avatar">N</span></div><div className="mock-balance-label">TOTAL BALANCE</div><div className="mock-balance">$24,680<span>.50</span></div><div className="mock-bank-line" /><div className="mock-stats"><span>Income<br /><b>+$4,200</b></span><span>Expenses<br /><b>-$1,280</b></span></div></div>}
      {project.theme === 'orange' && <div className="mock-route"><div className="route-circle">B</div><div className="route-path"><span /><span /><span /></div><div className="route-copy"><b>Move people.</b><br /><span>Connect every stop.</span></div><div className="route-ticket">YOUR NEXT<br />JOURNEY ↗</div></div>}
      {project.theme === 'violet' && <div className="mock-give"><div className="give-star">✳</div><span>GOOD THINGS<br />GROW WHEN<br /><b>WE GIVE.</b></span><div className="give-button">Make an impact ↗</div></div>}
    </div>
  )
}

export default function Projects() {
  return (
    <section className="section section-soft" id="projects">
      <div className="container">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">SELECTED WORK <span className="heading-line" /></p><h2>Ideas made<br /><span className="serif-accent">tangible.</span></h2></div>
          <p className="heading-aside">A selection of concepts and builds that show how I approach problems, product thinking, and the details that make an interface feel right.</p>
        </div>
        <div className="projects-grid">
          {projects.map(project => (
            <article className="project-card" key={project.number}>
              <ProjectArtwork project={project} />
              <div className="project-info">
                <div className="project-meta"><span>{project.number} / {project.type}</span><span className="project-arrow"><ArrowUpRight size={18} /></span></div>
                <h3>{project.title}</h3><p>{project.description}</p>
                <div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
                <div className="project-links">
                  {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a> : <span className="project-placeholder">Add live demo URL</span>}
                  {project.repo ? <a href={project.repo} target="_blank" rel="noreferrer"><Github size={14} /> Source code</a> : <span className="project-placeholder"><Github size={14} /> </span>}
                </div>
              </div>
            </article>
          ))}
        </div>
        {/*<p className="projects-footnote">Project names and visual previews are starter content. Replace descriptions and links with your own verified work before publishing.</p>*/}
      </div>
    </section>
  )
}