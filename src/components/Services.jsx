import { ArrowUpRight } from 'lucide-react'
import { services } from '../data.js'

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">HOW I CAN HELP <span className="heading-line" /></p>
          <h2>Good work starts<br /><span className="serif-accent">with good people.</span></h2>
        </div>
        <div className="services-list">
          {services.map(service => (
            <a className="service-row" href="#contact" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-arrow"><ArrowUpRight size={20} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}