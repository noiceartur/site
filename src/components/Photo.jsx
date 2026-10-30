import { useState } from 'react'

// Mostra a foto; se o arquivo ainda não existir, mostra um bloco verde com o
// ícone do coco (assim o site não fica com imagem quebrada).
function Photo({ src, alt }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="photo-placeholder" role="img" aria-label={alt}>
        <img src="/icones/coco-icon.png" alt="" />
      </div>
    )
  }

  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
}

export default Photo