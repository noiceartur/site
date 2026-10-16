import { useEffect, useRef } from 'react'; 

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = sectionRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

/*  */

return (
    <section className="about-section" id="sobre" ref={sectionRef}>
      {/* Bloco 1 — Benefícios: texto à esquerda, imagem à direita */}
      <div className="feature-block" id="beneficios">
        <div className="feature-text reveal">
          <h3>Benefícios da água de coco</h3>
          <p>
            A água de coco é uma das bebidas mais hidratantes que a natureza oferece.
            Rica em eletrólitos naturais como potássio, sódio e magnésio, ela repõe o
            que o corpo perde durante o dia e ajuda a manter o equilíbrio hídrico sem
            precisar de açúcar ou conservantes.
          </p>
          <p>
            Leve e com poucas calorias, é uma ótima escolha para antes ou depois dos
            treinos, nos dias quentes ou simplesmente como um hábito mais saudável no
            lugar de bebidas industrializadas.
          </p>
          <p>
            Cada gole traz o sabor puro do coco colhido no ponto certo — sem
            processamento industrial, sem aditivos, apenas a água de coco como ela é.
          </p>
        </div>
        <div className="feature-image reveal reveal-delay-1">
          <img src="/imagens/beneficios-agua-coco.jpg" alt="Água de coco fresca e natural" />
        </div>
      </div>

      {/* Bloco 2 — Produção: espelhado (imagem primeiro no HTML = imagem à esquerda) */}
      <div className="feature-block" id="producao">
        <div className="feature-image reveal">
          <img src="/imagens/producao-coco.jpg" alt="Processo de produção da água de coco" />
        </div>
        <div className="feature-text reveal reveal-delay-1">
          <h3>Como produzimos</h3>
          <p>
            O processo começa com a abertura do coco fresco, feita logo após a
            colheita para preservar todo o sabor e os nutrientes da água.
          </p>
          <p>
            Em seguida, a água passa por um processo de filtração e seleção
            cuidadosa, garantindo que apenas o líquido mais puro e de melhor
            qualidade siga para a próxima etapa.
          </p>
          <p>
            Por fim, a água selecionada é envasada diretamente nas garrafinhas,
            prontas para chegar até você com toda a frescura e pureza do coco
            natural.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;