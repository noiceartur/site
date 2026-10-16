import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Remove o # da URL de forma definitiva
    if (window.history.replaceState) {
      window.history.replaceState(null, null, ' ')
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo" onClick={(e) => scrollTo(e, '#inicio')}>
        <div className="nav-logo-icon">
          <img src="/icones/coco-icon.png" alt="CocoPura" />  {/* ícone do coco */}
        </div>
        CocoPura
      </div>
      <ul className="nav-links">
        <li><a href="#beneficios" onClick={(e) => scrollTo(e, '#beneficios')}>Benefícios</a></li>
        <li><a href="#producao" onClick={(e) => scrollTo(e, '#producao')}>Produção</a></li>
        <li><a href="#produtos" onClick={(e) => scrollTo(e, '#produtos')}>Produtos</a></li>
        <li><a href="#depoimentos" onClick={(e) => scrollTo(e, '#depoimentos')}>Depoimentos</a></li>
        <li><a href="#contato" onClick={(e) => scrollTo(e, '#contato')}>Contato</a></li>
        <li>
          <a className="nav-cta" href="#contato" onClick={(e) => scrollTo(e, '#contato')}>
            Solicitar Orçamento
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar