// Dados do negócio num lugar só. Mudou telefone/Instagram? Altere aqui e pronto.
export const WHATSAPP_NUMBER = '5561982756575'
export const PHONE_DISPLAY = '(61) 98275-6575'
export const INSTAGRAM_URL = 'https://www.instagram.com/agua.de.coco.pura/'
export const INSTAGRAM_HANDLE = '@agua.de.coco.pura'

export const DEFAULT_MESSAGE =
  'Olá! Vim pelo site da CocoPura e gostaria de fazer um pedido.'

export const whatsappLink = (message = DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export function scrollToId(e, id) {
  e.preventDefault()
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  // tira o # da URL
  if (window.history.replaceState) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search)
  }
}