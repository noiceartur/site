import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { scrollToId } from '../config'

const links = [
  { id: '#beneficios', label: 'Benefícios' },
  { id: '#producao', label: 'Produção' },
  { id: '#produtos', label: 'Produtos' },
  { id: '#depoimentos', label: 'Depoimentos' },
  { id: '#contato', label: 'Contato' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // fecha o menu do celular com a tecla Esc
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const go = (e, id) => {
    scrollToId(e, id)
    setOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="nav-logo" onClick={(e) => go(e, '#inicio')}>
        <div className="nav-logo-icon">
          <img src="/icones/coco-icon.png" alt="CocoPura" />
        </div>
        CocoPura
      </div>

      <button
        className="nav-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <li key={l.id}>
            <a href={l.id} onClick={(e) => go(e, l.id)}>{l.label}</a>
          </li>
        ))}
        <li>
          <a className="nav-cta" href="#contato" onClick={(e) => go(e, '#contato')}>
            Fale Comigo
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar