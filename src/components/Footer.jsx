import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand" href="#home"><span className="brand-mark">T<span>.</span></span><span>Tenax<span className="muted">webServices</span></span></a>
        <p>Designed with curiosity. Built with React.</p>
        <a href="#home" className="back-top">Back to top <ArrowUpRight size={14} /></a>
        <span className="copyright">© {new Date().getFullYear()} — Torkpande Ternenge</span>
      </div>
    </footer>
  )
}