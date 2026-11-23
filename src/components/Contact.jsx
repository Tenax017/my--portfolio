import { ArrowDown, ArrowUpRight, Mail, Github, Linkedin, Sparkles, Send } from 'lucide-react'

export default function Contact() {
  const email = 'torkpandefrancis@gmail.com'
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-glow" />
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">HAVE A PROJECT IN MIND? <span className="heading-line" /></p>
          <h2>Let's make<br />something <span className="serif-accent">great.</span></h2>
          <p className="contact-copy">Have a project, an opportunity, or just want to say hello? My inbox is open. Let's talk about what we can create together.</p>
          <a className="button button-primary contact-button" href={`mailto:${email}?subject=${encodeURIComponent('Let’s work together')}`}>Start a conversation <ArrowUpRight size={17} /></a>
        </div>
        <div className="contact-card">
          <span className="contact-card-icon"><Send size={20} /></span>
          <p className="mono">YOUR NEXT STEP</p>
          <h3>Have a good one in mind?</h3>
          <p>Tell me a little about it. I'll get back to you as soon as I can.</p>
          <a href={`mailto:${email}`} className="contact-email"><Mail size={17} /> {email}</a>
          <div className="contact-socials">
            <a href="https://github.com/Tenax017" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            <a href="https://linkedin.com/in/torkpande" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}