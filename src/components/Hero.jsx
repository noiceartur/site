import { scrollToId } from '../config'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <video className="hero-bg" autoPlay muted loop playsInline aria-hidden="true">
        <source src="/videos/palmeiras-vento-loop.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-badge">Fresco direto do coqueiral</div>
        <h1>
          Água de coco <span>100% natural</span>, pura e fresquinha
        </h1>
        <p>
          No coco ou na garrafinha, com todo o sabor do coqueiral.
          Fale comigo e combine seu pedido e a entrega.
        </p>
        <div className="hero-buttons">
          <a className="btn-primary" href="#contato" onClick={(e) => scrollToId(e, '#contato')}>
            Contate-me agora!
          </a>
          <a className="btn-secondary" href="#produtos" onClick={(e) => scrollToId(e, '#produtos')}>
            Ver Produtos
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero