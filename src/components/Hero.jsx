import { ArrowDown, ArrowUpRight, Github, Linkedin, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS</div>
          <p className="hero-kicker">HELLO, WORLD. I'M A</p>
          <h1>Creative web<br />developer<span className="accent">.</span></h1>
          <p className="hero-description">I turn ideas into <span className="text-bright">thoughtful digital experiences</span> — combining clean code, playful creativity, and purposeful design.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href="#contact">Get in touch <ArrowDown size={16} /></a>
          </div>
          <div className="hero-socials">
            <span>FIND ME ON</span>
            <a href="https://github.com/Tenax017" target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={18} /></a>
            <a href="https://www.linkedin.com/torkpande" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={18} /></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract creative developer illustration">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="art-card code-card">
            <div className="window-dots"><i /><i /><i /></div>
            <div className="code-line"><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</div>
            <div className="code-line indent"><span className="code-pink">create</span>: <span className="code-green">"with purpose"</span>,</div>
            <div className="code-line indent"><span className="code-pink">design</span>: <span className="code-green">"with curiosity"</span>,</div>
            <div className="code-line indent"><span className="code-pink">coffee</span>: <span className="code-orange">true</span></div>
            <div className="code-line">{'}'}<span className="code-muted">;</span></div>
            <div className="cursor-line" />
          </div>
          <div className="floating-tag tag-react"><span>⚛</span> React.js</div>
          <div className="floating-tag tag-css"><Sparkles size={15} /> Creative CSS</div>
          <div className="art-sphere"><div className="sphere-shine" /><div className="sphere-ring" /></div>
          <div className="art-caption"><span>01 / 04</span><span>BUILDING WHAT'S NEXT</span></div>
        </div>
      </div>
      <div className="container hero-bottom"><span>SCROLL TO EXPLORE</span><div className="scroll-line" /><span className="mono">01 — 06</span></div>
    </section>
  )
}