function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', window.location.href.split('#')[0])
  }

  const goToProduct = (e, index) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('cocopura:expand-product', { detail: index }))
    const el = document.querySelector('#produtos')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', window.location.href.split('#')[0])
    }
  }

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <img src="/icones/coco-icon.png" alt="CocoPura" width="30" height="30" />
            CocoPura
          </div>
          <p className="footer-desc">
            A melhor água de coco do Brasil, direto do coqueiral para a sua mesa.
            Frescura, sabor e saúde em cada gole.
          </p>
        </div>
        <div className="footer-col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#sobre" onClick={(e) => scrollTo(e, '#sobre')}>Sobre Nós</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Nossa Fazenda</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Carreiras</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Blog</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Produtos</h4>
          <ul>
            <li><a href="#produtos" onClick={(e) => goToProduct(e, 0)}>Coco com Canudo</a></li>
            <li><a href="#produtos" onClick={(e) => goToProduct(e, 1)}>Garrafinha 500ml</a></li>
            <li><a href="#produtos" onClick={(e) => goToProduct(e, 2)}>Garrafa 1L</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contato</h4>
          <ul>
            <li><a href="#" onClick={(e) => e.preventDefault()}>WhatsApp</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Instagram</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>contato@cocopura.com</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>(61) 98275-6575</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 CocoPura. Todos os direitos reservados.
      </div>
    </footer>
  )
}

export default Footer