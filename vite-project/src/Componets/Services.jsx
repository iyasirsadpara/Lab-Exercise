// src/Components/Services.jsx
const services = [
  { id: 1, title: 'General dentistry', description: 'Thoughtful preventive care and gentle routine visits for lasting oral health.', image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=700&q=80' },
  { id: 2, title: 'Cosmetic dentistry', description: 'Subtle, natural-looking enhancements designed around your goals.', image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=700&q=80' },
  { id: 3, title: 'Dental implants', description: 'Confident, long-term solutions that look and feel like your own.', image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa2fc?auto=format&fit=crop&w=700&q=80' },
  { id: 4, title: 'Teeth whitening', description: 'Professional whitening for a brighter smile, safely and comfortably.', image: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=700&q=80' },
  { id: 5, title: 'Orthodontics', description: 'Modern alignment options for a healthier, more confident smile.', image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=700&q=80' },
  { id: 6, title: 'Root canal treatment', description: 'Precise, reassuring treatment to protect your natural tooth.', image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=700&q=80' },
]

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-topline"><div><p className="eyebrow"><span></span> What we do</p><h2>Care that goes <em>deeper.</em></h2></div><p>From routine checkups to transformative treatments, every service is shaped around your health and comfort.</p></div>
        <div className="services-grid">
          {services.map(service => (
            <article key={service.id} className="service-card"><img className="service-image" src={service.image} alt={`${service.title} treatment`} /><div className="service-icon" aria-hidden="true">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p><a className="card-link" href="#contact" aria-label={`Learn more about ${service.title}`}>Learn more <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}