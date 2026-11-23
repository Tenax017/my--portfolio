import { ArrowUpRight, Code2, Lightbulb, MonitorSmartphone } from 'lucide-react'

const highlights = [
  { icon: Code2, title: 'Clean code', text: 'Maintainable, reusable components built with care.' },
  { icon: Lightbulb, title: 'Curious mindset', text: 'Always learning, testing, and improving the details.' },
  { icon: MonitorSmartphone, title: 'Responsive first', text: 'Experiences that feel right on every screen.' },
]

export default function About() {
  return (
    <section className="section section-soft" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">A LITTLE ABOUT ME <span className="heading-line" /></p>
          <h2>Code with logic.<br /><span className="serif-accent">Design with feeling.</span></h2>
        </div>
        <div className="about-layout">
          <div className="about-intro">
            <p className="large-copy">I'm a web developer who enjoys turning complex ideas into simple, useful, and memorable online experiences.</p>
            <p className="body-copy">My focus is building modern interfaces with React and JavaScript, while keeping usability, performance, and accessibility in mind. I enjoy collaborating with people, solving real problems, and bringing ideas from sketch to screen.</p>
            <a className="text-link" href="#contact">Let's build something meaningful <ArrowUpRight size={16} /></a>
          </div>
          <div className="highlight-list">
            {highlights.map(({ icon: Icon, title, text }, index) => (
              <article className="highlight-item" key={title}>
                <div className="highlight-icon"><Icon size={20} /></div>
                <div><h3>{title}</h3><p>{text}</p></div>
                <span className="highlight-number">0{index + 1}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}