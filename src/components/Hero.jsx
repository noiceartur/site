function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', window.location.pathname)
  }
  
  return (
    <section className="hero" id="inicio">
      <video
        className="hero-bg"
        autoPlay
        muted
        loop
        playsInline
        poster="/imagens/hero-coqueiral.jpg"
      >
        <source src="/videos/palmeiras-vento-loop.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-badge">
          Fresco direto do coqueiral
        </div>
        <h1>
          Hidratação pura e qualidade <em>premium</em> para seu negócio ou evento
        </h1>
        <p>
          Água de Coco 100% natural, selecionada na origem e processada com os mais rigorosos padrões.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={(e) => scrollTo(e, '#produtos')}>
            Ver Produtos
          </button>
          <button className="btn-secondary" onClick={(e) => scrollTo(e, '#contato')}>
            Falar com Consultor
          </button>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}

export default Hero