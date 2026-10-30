import { whatsappLink, scrollToId, PHONE_DISPLAY, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../config'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <img src="/icones/coco-icon.png" alt="CocoPura" width="30" height="30" />
            CocoPura
          </div>
          <p className="footer-desc">
            Água de coco 100% natural, direto do coqueiral para a sua mesa.
            Frescura, sabor e saúde em cada gole.
          </p>
        </div>
        <div className="footer-col">
          <h4>Produtos</h4>
          <ul>
            <li><a href="#produtos" onClick={(e) => scrollToId(e, '#produtos')}>Coco com Canudo</a></li>
            <li><a href="#produtos" onClick={(e) => scrollToId(e, '#produtos')}>Garrafinha 500ml</a></li>
            <li><a href="#produtos" onClick={(e) => scrollToId(e, '#produtos')}>Garrafa 1L</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contato</h4>
          <ul>
            <li><a href={whatsappLink()} target="_blank" rel="noreferrer">{PHONE_DISPLAY}</a></li>
            <li><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">{INSTAGRAM_HANDLE}</a></li>
            <li><span className="footer-text">Taguatinga Norte — DF</span></li>
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