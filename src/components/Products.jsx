import { useState, useEffect, useRef } from 'react'

// Fotos: coloque os arquivos em public/imagens/produtos/ com estes nomes.
// Enquanto não existirem, o card mostra o fundo verde com o ícone do coco.
const products = [
  {
    id: 0,
    title: 'Coco Inteiro com Canudo',
    subtitle: 'Mais Vendido',
    desc: 'Coco verde fresco, aberto na hora e pronto para consumo. Acompanha canudo biodegradável.',
    price: 'R$ 8,00',
    image: '/imagens/produtos/coco.jpg',
  },
  {
    id: 1,
    title: 'Garrafinha 500ml',
    subtitle: 'Prático',
    desc: 'Água de coco 100% natural em embalagem prática de 500ml. Ideal para levar para qualquer lugar.',
    price: 'R$ 8,00',
    image: '/imagens/produtos/garrafinha-500ml.jpg',
  },
  {
    id: 2,
    title: 'Garrafa 1 Litro',
    subtitle: 'Família',
    desc: 'Garrafa de 1 litro com água de coco natural. Perfeita para dividir em casa ou no escritório.',
    price: 'R$ 15,00',
    image: '/imagens/produtos/garrafa-1l.jpg',
  },
]

function Products() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [failed, setFailed] = useState(() => new Set())
  // A revelação ao rolar é controlada por estado para a classe "visible"
  // não se perder quando o componente re-renderiza ao clicar num produto.
  const [visibleIds, setVisibleIds] = useState(() => new Set())
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.revealId
            setVisibleIds((prev) => {
              if (!id || prev.has(id)) return prev
              const next = new Set(prev)
              next.add(id)
              return next
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const toggle = (index) => setActiveIndex((prev) => (prev === index ? null : index))

  const markFailed = (id) =>
    setFailed((prev) => {
      if (prev.has(id)) return prev
      const next = new Set(prev)
      next.add(id)
      return next
    })

  return (
    <section className="products-section" id="produtos" ref={ref}>
      <div className="section">
        <div
          className={`section-header reveal ${visibleIds.has('header') ? 'visible' : ''}`}
          data-reveal-id="header"
        >
          <span className="section-tag">Nossos Produtos</span>
          <h2>Escolha a sua opção perfeita</h2>
          <p className="subtitle">Conheça as opções e fale comigo para fazer seu pedido.</p>
        </div>
      </div>
      <div className="products-expandable">
        {products.map((p, i) => {
          const revealId = `product-${p.id}`
          const noPhoto = failed.has(p.id)
          return (
            <div
              key={p.id}
              data-reveal-id={revealId}
              className={`product-expandable reveal reveal-delay-${i} ${
                activeIndex === i ? 'active' : ''
              } ${noPhoto ? 'no-photo' : ''} ${visibleIds.has(revealId) ? 'visible' : ''}`}
              onClick={() => toggle(i)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggle(i)}
              role="button"
              tabIndex={0}
            >
              {!noPhoto && (
                <img
                  className="product-expandable-img"
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  onError={() => markFailed(p.id)}
                />
              )}
              <div className="product-expandable-overlay" />
              <div className="product-expandable-content">
                <span className="product-expandable-tag">{p.subtitle}</span>
                <h3>{p.title}</h3>
                <p className="product-expandable-desc">{p.desc}</p>
                <p className="product-expandable-price">{p.price}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Products