import { useState, useEffect, useRef } from 'react'

const products = [
  {
    id: 0,
    title: 'Coco Inteiro com Canudo',
    subtitle: 'Mais Vendido',
    desc: 'Coco verde fresco, aberto na hora e pronto para consumo. Acompanha canudo biodegradável.',
    price: 'R$ 10,00',
    image: '/image.png',
  },
  {
    id: 1,
    title: 'Garrafinha 500ml',
    subtitle: 'Prático',
    desc: 'Água de coco 100% natural em embalagem prática de 500ml. Ideal para levar para qualquer lugar.',
    price: 'R$ 10,00',
    image: '/image.png',
  },
  {
    id: 2,
    title: 'Garrafa 1 Litro',
    subtitle: 'Família',
    desc: 'Garrafa de 1 litro com água de coco natural. Perfeita para dividir em casa ou no escritório.',
    price: 'R$ 18,00',
    image: '/image.png',
  },
]

function Products() {
  const [activeIndex, setActiveIndex] = useState(null)
  // Controla a revelação via estado do React (em vez de mexer no DOM
  // diretamente), para que a classe "visible" nunca seja perdida quando
  // o componente re-renderiza ao clicar em um produto.
  const [visibleIds, setVisibleIds] = useState(() => new Set())
  const ref = useRef(null)

  // Ouve o clique nos links de produto do rodapé (funciona a qualquer
  // momento, já que o componente fica sempre montado na página).
  useEffect(() => {
    const handleExpandRequest = (e) => {
      const index = Number(e.detail)
      if (Number.isNaN(index) || !products[index]) return
      setActiveIndex(index)
      setVisibleIds((prev) => {
        const id = `product-${products[index].id}`
        if (prev.has(id)) return prev
        const next = new Set(prev)
        next.add(id)
        return next
      })
    }
    window.addEventListener('cocopura:expand-product', handleExpandRequest)
    return () => window.removeEventListener('cocopura:expand-product', handleExpandRequest)
  }, [])

  // Scroll reveal
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

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index))
    setVisibleIds((prev) => {
      const id = `product-${products[index]?.id}`
      if (prev.has(id)) return prev
      const next = new Set(prev)
      next.add(id)
      return next
    })
  }

  return (
    <section className="products-section" id="produtos" ref={ref}>
      <div className="section">
        <div
          className={`section-header reveal ${visibleIds.has('header') ? 'visible' : ''}`}
          data-reveal-id="header"
        >
          <span className="section-tag">Nossos Produtos</span>
          <h2>Escolha o sua opção perfeita</h2>
          <p className="subtitle">
            Clique para expandir e conhecer mais detalhes de cada opção.
          </p>
        </div>
      </div>
      <div className="products-expandable">
        {products.map((p, i) => {
          const revealId = `product-${p.id}`
          return (
            <div
              key={p.id}
              data-reveal-id={revealId}
              className={`product-expandable reveal reveal-delay-${i} ${
                activeIndex === i ? 'active' : ''
              } ${visibleIds.has(revealId) ? 'visible' : ''}`}
              onClick={() => toggle(i)}
              style={{ backgroundImage: `url(${p.image})` }}
            >
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