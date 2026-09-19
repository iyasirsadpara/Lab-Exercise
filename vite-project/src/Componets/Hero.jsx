// src/Components/Hero.jsx
const Hero = () => {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy reveal"><p className="eyebrow"><span></span> Modern dentistry, made personal</p><h1>Your smile,<br /><em>our expertise.</em></h1><p className="hero-lede">Advanced dental care delivered with compassion, precision, and technology that puts your comfort first.</p><div className="hero-actions"><a className="button" href="#contact">Book an appointment <span aria-hidden="true">↗</span></a><a className="text-link" href="#services">Explore our services <span aria-hidden="true">→</span></a></div><div className="trust-row" aria-label="Clinic benefits"><span><b>✦</b> Experienced dentists</span><span><b>✦</b> Modern technology</span><span><b>✦</b> Patient-centered care</span></div></div>
        <div className="hero-visual reveal reveal-delay"><div className="hero-image-wrap"><img src="https://media.istockphoto.com/id/1942685818/photo/satisfied-senior-woman-at-dentists-office-looking-at-camera.jpg?b=1&s=612x612&w=0&k=20&c=aOUJDaMrzDnxqJss_XxT2ARezMcUXTy2JOdY4ROO1AM=" alt="Dentist consulting with a patient in a bright clinic" /><div className="hero-note"><span className="note-icon">✓</span><span><strong>Care you can feel</strong><small>Comfort at every visit</small></span></div></div><div className="hero-outline" aria-hidden="true"></div></div>
      </div>
    </section>
  )
}

export default Hero
