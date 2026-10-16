import { useEffect, useRef } from 'react'

function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    ref.current.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="contact-section" id="contato">
      <div className="section" ref={ref}>
        <div className="section-header reveal">
          <span className="section-tag" style={{ color: '#c9a96e' }}>Contato</span>
          <h2>Fale Comigo</h2>
          <p className="subtitle">
            Entre em contato para fazer seu pedido. Entregas e detalhes são discutidos diretamente.
          </p>
        </div>
        <div className="contact-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '600px', margin: '0 auto' }}>
          <div className="contact-info reveal" style={{ textAlign: 'center' }}>
            <h3>Entre em Contato</h3>
            <p>
              Estou pronto para atender sua demanda, seja para eventos, revenda ou consumo pessoal.
              Vamos conversar!
            </p>
            <div className="contact-detail" style={{ justifyContent: 'center' }}>
              <div className="contact-detail-icon">📱</div>
              <span>(61) 98275-6575</span>
            </div>
            <div className="contact-detail" style={{ justifyContent: 'center' }}>
              <div className="contact-detail-icon">💬</div>
              <span>WhatsApp</span>
            </div>
            <div className="contact-detail" style={{ justifyContent: 'center' }}>
              <div className="contact-detail-icon">📍</div>
              <span>Taguatinga Norte — Distrito Federal</span>
            </div>
            <div className="contact-detail" style={{ justifyContent: 'center' }}>
              <div className="contact-detail-icon">🕐</div>
              <span>Seg — Sáb: 8h às 18h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact