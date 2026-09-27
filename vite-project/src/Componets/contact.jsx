 // src/Components/Contact.jsx
import { useState } from 'react'
export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', date: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' })
  }

  return (
    <section className="contact section" id="contact"><div className="container contact-container"><div className="contact-info"><p className="eyebrow"><span></span> Start your visit</p><h2>Ready to take care of <em>your smile?</em></h2><p>Tell us a little about what you need and our team will be in touch to find the right time for you.</p><div className="contact-details"><a href="tel:+13125550198"><span>Call us</span> (312) 555-0198</a><a href="mailto:hello@northstardental.com"><span>Email us</span> hello@northstardental.com</a><p><span>Find us</span> 1840 North Clark Street, Chicago, IL</p><p><span>Hours</span> Mon–Fri 8am–5pm · Sat by appointment</p></div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}><div className="form-heading"><h3>Request an appointment</h3><p>We’ll respond within one business day.</p></div><div className="form-grid"><label>Full name<input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required /></label><label>Email address<input type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required /></label><label>Phone number<input type="tel" name="phone" placeholder="(000) 000-0000" value={formData.phone} onChange={handleChange} required /></label><label>Service<select name="service" value={formData.service} onChange={handleChange} required><option value="">Select a service</option><option>General dentistry</option><option>Cosmetic dentistry</option><option>Dental implants</option><option>Orthodontics</option></select></label><label>Preferred date<input type="date" name="date" value={formData.date} onChange={handleChange} /></label></div><label>Message<textarea name="message" placeholder="How can we help?" rows="3" value={formData.message} onChange={handleChange}></textarea></label><button type="submit" className="button">{submitted ? 'Request received ✓' : 'Send appointment request'} <span aria-hidden="true">↗</span></button>{submitted && <p className="form-success" role="status">Thank you. We’ll be in touch soon.</p>}
        </form>
      </div>
    </section>
  )
}