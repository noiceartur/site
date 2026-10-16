import { useEffect, useRef } from 'react';

const testimonials = [
  {
    stars: '★★★★★',
    text: '"Melhor coco de arapongas"',
    initials: 'SB',
    name: 'Sarah Borba',
    role: 'Integrante do grupo',
  },
  {
    stars: '★★★★★',
    text: '"12/10"',
    initials: 'JK',
    name: 'Jerônimo Kaneko',
    role: 'Integrante do grupo',
  },
  {
    stars: '★★★★★',
    text: '"Essa aqui tá top em👌"',
    initials: 'KG',
    name: 'Karython Gomes',
    role: 'Professor e tutor no Senai',
  },
];

function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    const elements = sectionRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonials-section" id="depoimentos">
      <div className="section" ref={sectionRef}>
        <div className="section-header reveal">
          <span className="section-tag" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>
            Depoimentos
          </span>
          <h2>O que nossos clientes dizem</h2>
          <p className="subtitle">Mais de 10.000 pessoas já experimentaram a diferença da CocoPuro.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className={`testimonial-card reveal reveal-delay-${i}`} key={i}>
              <div className="testimonial-stars">{t.stars}</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
