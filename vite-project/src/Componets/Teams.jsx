// src/Components/Team.jsx
export default function Team() {
  return (
    <section className="care section" id="doctors">
      <div className="container care-grid"><div className="doctor-photo"><img src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=900&q=85" alt="Dr. Maya Patel in the Northstar Dental Studio" /><span className="photo-label">Meet your dentist</span></div><div className="doctor-copy"><p className="eyebrow"><span></span> Your care team</p><h2>Expertise with a <em>human touch.</em></h2><p>Dr. Maya Patel is passionate about making exceptional dentistry feel approachable. She pairs meticulous clinical work with honest guidance, so you always feel informed and at ease.</p><div className="qualifications"><span>DDS, University of Michigan</span><span>Member, ADA & AGD</span></div><ul className="benefits"><li>Experienced dental professionals</li><li>Modern dental technology</li><li>Comfortable environment</li><li>Personalized treatment plans</li></ul><a className="text-link" href="#contact">Get to know our team <span aria-hidden="true">→</span></a></div></div>
    </section>
  )
}

export function Journey() {
  const steps = ['Book appointment', 'Dental consultation', 'Personalized treatment', 'Healthy smile']
  return <section className="journey section"><div className="container"><div className="section-heading centered"><p className="eyebrow"><span></span> Your visit, simplified</p><h2>A better experience, <em>step by step.</em></h2></div><div className="steps">{steps.map((step, index) => <div className="step" key={step}><span>0{index + 1}</span><h3>{step}</h3><p>{['Choose a time that works for you.', 'We listen, assess, and answer every question.', 'A plan tailored to your needs and goals.', 'Leave feeling confident in your care.'][index]}</p></div>)}</div></div></section>
}

export function Testimonials() {
  const reviews = [
    { quote: 'The entire team made me feel comfortable from the moment I walked in. Everything was thoughtful and clear.', name: 'Avery R.', detail: 'Preventive care', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80' },
    { quote: 'Northstar gave me a plan I understood and a smile I am genuinely proud of. The care was exceptional.', name: 'Morgan T.', detail: 'Cosmetic dentistry', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80' },
    { quote: 'Modern, calm, and incredibly kind. I finally look forward to my dental appointments.', name: 'Jordan K.', detail: 'General dentistry', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=120&q=80' },
  ]

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="testimonials-heading">
          <div>
            <p className="eyebrow"><span></span> Patient stories</p>
            <h2>Care that leaves a <em>lasting impression.</em></h2>
            <p className="testimonials-intro">Our patients come to us for expert dentistry and stay for the calm, personal experience.</p>
          </div>
          <div className="rating-card" aria-label="Rated 5 out of 5 by our patients">
            <span className="rating-stars" aria-hidden="true">★★★★★</span>
            <strong>5.0</strong>
            <span className="rating-label">Patient-rated care</span>
          </div>
        </div>
        <div className="reviews">
          {reviews.map((review) => (
            <article className="review" key={review.name}>
              <div className="review-topline"><span className="review-stars" aria-label="5 out of 5 stars">★★★★★</span><span className="verified">✓ Verified visit</span></div>
              <blockquote>“{review.quote}”</blockquote>
              <footer><img src={review.image} alt="" /><span><strong>{review.name}</strong><small>{review.detail}</small></span></footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}