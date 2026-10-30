import { useEffect, useRef } from 'react'
import {
  whatsappLink,
  PHONE_DISPLAY,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from '../config'

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
        <div className="contact-grid contact-grid-single">
          <div className="contact-info reveal">
            <h3>Entre em Contato</h3>
            <p>
              Estou pronto para atender sua demanda, seja para eventos, revenda ou consumo pessoal.
              Vamos conversar!
            </p>
            <a className="contact-detail contact-link" href={whatsappLink()} target="_blank" rel="noreferrer">
              <div className="contact-detail-icon icon-plain">
                <img src="/icones/whatsapp.png" alt="WhatsApp" style={{ width: 24, height: 24 }} />
              </div>
              <span className="contact-link-text">{PHONE_DISPLAY}</span>
            </a>
            <a className="contact-detail contact-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <div className="contact-detail-icon icon-plain">
                <img src="/icones/instagram.png" alt="Instagram" style={{ width: 24, height: 24 }} />
              </div>
              <span className="contact-link-text">{INSTAGRAM_HANDLE}</span>
            </a>
            <div className="contact-detail">
              <div className="contact-detail-icon">📍</div>
              <span>Taguatinga Norte — Distrito Federal</span>
            </div>
            <div className="contact-detail">
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