

// ============================================================
// UTILITÁRIOS VISUAIS
// ============================================================

const tituloSecao = (titulo, descricao = "") => /* html */ `
  <div class="curso__cabecalho">
    <h2>${titulo}</h2>
    <span class="curso__linha" aria-hidden="true"></span>
    ${descricao ? `<p>${descricao}</p>` : ""}
  </div>
`

const desenhos = {
  foguete: `
    <path d="M14 5c3-3 7-3 7-3s0 4-3 7l-7 7-5-5Z"/>
    <path d="m6 11-4 1 4-6 5-1M11 16l1 4 6-4 1-5"/>
    <circle cx="16" cy="7" r="1"/>
    <path d="M6 17c-2 0-3 4-3 4s4-1 4-3"/>
  `,
  mundo: `
    <circle cx="12" cy="12" r="9"/>
    <ellipse cx="12" cy="12" rx="4" ry="9"/>
    <path d="M3 12h18"/>
  `,
  nuvem: `
    <path d="M7 18a5 5 0 0 1-1-10 6 6 0 0 1 11-2
      6 6 0 0 1 0 12Z"/>
  `,
  pessoas: `
    <circle cx="9" cy="8" r="3"/>
    <path d="M3 21v-2a6 6 0 0 1 12 0v2"/>
    <path d="M16 5a3 3 0 0 1 0 6M21 21v-2a6 6 0 0 0-4-5"/>
  `,
  lampada: `
    <path d="M9 18h6M10 21h4"/>
    <path d="M8 14a6 6 0 1 1 8 0c-1 .8-1 1.5-1 2H9
      c0-.5 0-1.2-1-2Z"/>
  `,
  servidor: `
    <rect x="3" y="3" width="18" height="7" rx="2"/>
    <rect x="3" y="14" width="18" height="7" rx="2"/>
    <path d="M7 6.5h.01M7 17.5h.01M12 6.5h5M12 17.5h5"/>
  `,
}

const iconeAprendizado = (nome) => /* html */ `
  <svg
    class="curso__icone"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    ${desenhos[nome]}
  </svg>
`

// ============================================================
// O QUE VOCÊ VAI APRENDER
// ============================================================

const topicos = [
  "Defina objetivos e metas claros",
  "Planeje o layout e os elementos visuais",
  "Esboce conceitos criativos",
  "Crie chamadas para ação eficazes",
  "Escolha modelos HTML de qualidade",
  "Crie apresentações visuais do layout",
  "Domine técnicas de criação de landing pages",
  "Publique seu projeto na internet",
]

export const OQueAprender = () => /* html */ `
  <section class="curso__secao" id="o-que-aprender">
    <div class="curso__container">
      ${tituloSecao(
        "O que você vai aprender?",
        `Embarque em uma jornada de aprendizado com nossos cursos
        em vídeo. Descubra os segredos da criação de vídeos
        e desenvolva suas habilidades.`,
      )}

      <div class="curso__topicos">
        ${topicos
          .map(
            (titulo, indice) => `
          <article class="curso__topico">
            <div class="curso__topico-imagem">
              <img
                src="/images/description-${indice + 1}.jpg"
                alt=""
                loading="lazy"
              >
            </div>

            <h3>${titulo}</h3>
          </article>
        `,
          )
          .join("")}
      </div>
    </div>
  </section>
`

// ============================================================
// CAPÍTULOS
// ============================================================

const capitulos = [
  {
    titulo: "Definição de objetivos claros",
    descricao: `
      Aprenda a definir objetivos e metas para seus projetos
      de vídeo, garantindo foco e direção.
    `,
  },
  {
    titulo: "Estratégias de criação de conteúdo",
    descricao: `
      Explore estratégias eficazes para criar conteúdos
      que se conectem com seu público.
    `,
  },
  {
    titulo: "Fundamentos de programação",
    descricao: `
      Conheça os fundamentos de HTML, CSS e JavaScript
      aplicados às páginas dos seus projetos.
    `,
  },
]

export const Capitulos = () => /* html */ `
  <section class="curso__secao" id="capitulos">
    <div class="curso__container">
      ${tituloSecao(
        "Principais capítulos do curso",
        `Explore os conceitos e as técnicas do curso.
        Cada capítulo foi pensado para desenvolver
        habilidades essenciais à criação de vídeos.`,
      )}

      <div class="curso__capitulos">
        ${capitulos
          .map(
            (capitulo, indice) => `
          <article class="curso__cartao curso__capitulo">
            <img
              src="/images/chapters-icon-${indice + 1}.svg"
              alt=""
              loading="lazy"
            >

            <h3>${capitulo.titulo}</h3>
            <p>${capitulo.descricao}</p>
          </article>
        `,
          )
          .join("")}
      </div>
    </div>
  </section>
`

// ============================================================
// RESUMO
// ============================================================

const resumo = [
  {
    titulo: "Definição de objetivos claros",
    aulas: [
      `Aprenda a estabelecer objetivos claros e alcançáveis
      para seus vídeos, alinhados às suas metas gerais.`,

      `Explore estratégias para definir objetivos específicos
      que orientem seu projeto e contribuam para seu sucesso.`,

      `Entenda a importância de objetivos mensuráveis
      para avaliar a eficácia do seu conteúdo.`,
    ],
  },
  {
    titulo: "Estratégias de criação de conteúdo",
    aulas: [
      `Descubra estratégias para envolver seu público
      e transmitir sua mensagem com clareza.`,

      `Aprenda a produzir vídeos envolventes usando
      narrativas e técnicas visuais que inspirem ação.`,

      `Explore formas de otimizar o processo de criação,
      simplificando a produção e ampliando seu impacto.`,
    ],
  },
  {
    titulo: "Do layout ao HTML e CSS",
    aulas: [
      `Domine a passagem do design para a implementação
      em HTML e CSS, preservando o conceito visual.`,

      `Conheça boas práticas de HTML e CSS, incluindo
      princípios de responsividade e otimização.`,

      `Aprenda a transformar layouts em páginas interativas,
      aplicando estilos e organização visual com CSS.`,
    ],
  },
]

export const Resumo = () => /* html */ `
  <section class="curso__secao curso__secao--suave" id="resumo">
    <div class="curso__container">
      ${tituloSecao("Resumo do curso")}

      <div class="curso__resumo">
        ${resumo
          .map(
            (grupo, indiceGrupo) => `
          <article class="curso__grupo">
            <h3>${grupo.titulo}</h3>

            <ol class="curso__aulas">
              ${grupo.aulas
                .map(
                  (aula, indiceAula) => `
                <li>
                  <span class="curso__numero" aria-hidden="true">
                    ${indiceGrupo + 1}.${indiceAula + 1}
                  </span>
                  <span>${aula}</span>
                </li>
              `,
                )
                .join("")}
            </ol>
          </article>
        `,
          )
          .join("")}
      </div>
    </div>
  </section>
`

// ============================================================
// PÚBLICO
// ============================================================

export const Publico = () => /* html */ `
  <section class="curso__publico" aria-labelledby="publico-titulo">
    <div class="curso__publico-imagem" aria-hidden="true"></div>

    <div class="curso__publico-conteudo">
      <h2 id="publico-titulo">Para quem é este curso?</h2>

      <p>
        Este curso é destinado a quem deseja ampliar seus
        conhecimentos em design, desenvolvimento web e marketing
        digital. Seja você um profissional experiente ou alguém
        começando, encontrará oportunidades para aprender.
      </p>

      <ul class="curso__lista-marcada">
        <li>Designers de sites</li>
        <li>Desenvolvedores web</li>
        <li>Profissionais de marketing</li>
        <li>Empreendedores</li>
        <li>Proprietários de empresas</li>
      </ul>
    </div>
  </section>
`

// ============================================================
// PRINCIPAIS APRENDIZADOS
// ============================================================

const aprendizados = [
  {
    icone: "foguete",
    titulo: "Desenvolvimento de habilidades",
    descricao: "Aprofunde seus conhecimentos em design e desenvolvimento web.",
  },
  {
    icone: "mundo",
    titulo: "Visão global",
    descricao: "Conheça tendências do setor e boas práticas do mercado.",
  },
  {
    icone: "nuvem",
    titulo: "Tecnologia em nuvem",
    descricao: "Explore tecnologias e ferramentas de computação em nuvem.",
  },
  {
    icone: "pessoas",
    titulo: "Conexões profissionais",
    descricao: "Conecte-se com outros profissionais e amplie sua rede.",
  },
  {
    icone: "lampada",
    titulo: "Resolução de problemas",
    descricao:
      "Desenvolva o pensamento crítico e a capacidade de encontrar soluções.",
  },
  {
    icone: "servidor",
    titulo: "Domínio técnico",
    descricao: "Aprimore suas habilidades para acompanhar o universo digital.",
  },
]

export const Aprendizados = () => /* html */ `
  <section class="curso__secao" id="aprendizados">
    <div class="curso__container">
      ${tituloSecao(
        "Principais aprendizados",
        `Conheça algumas das habilidades e perspectivas
        que você poderá desenvolver ao longo do curso.`,
      )}

      <div class="curso__aprendizados">
        ${aprendizados
          .map(
            (item) => `
          <article class="curso__cartao curso__aprendizado">
            ${iconeAprendizado(item.icone)}

            <div>
              <h3>${item.titulo}</h3>
              <p>${item.descricao}</p>
            </div>
          </article>
        `,
          )
          .join("")}
      </div>
    </div>
  </section>
`

// ============================================================
// DETALHES
// ============================================================

export const Detalhes = () => /* html */ `
  <section class="curso__secao" id="detalhes">
    <div class="curso__container curso__duas-colunas">
      <img
        class="curso__ilustracao"
        src="/images/details.png"
        alt="Ilustração de apresentação do curso"
        loading="lazy"
      >

      <div>
        <h2>Detalhes do curso</h2>
        <span class="curso__linha" aria-hidden="true"></span>

        <p>
          Conheça o conteúdo, a estrutura do curso e o que
          esperar ao longo da sua jornada de aprendizado.
        </p>

        <a class="curso__botao" href="#resumo">
          Ver o conteúdo
        </a>
      </div>
    </div>
  </section>
`

// ============================================================
// AUTOR
// ============================================================

export const Autor = () => /* html */ `
  <section class="curso__secao" id="autor">
    <div class="curso__container curso__duas-colunas curso__autor">
      <img
        class="curso__ilustracao"
        src="/images/author.png"
        alt="Imagem do autor apresentada no material do curso"
        loading="lazy"
      >

      <div>
        <h2>Sobre o autor</h2>
        <span class="curso__linha" aria-hidden="true"></span>

        <p>
          Conheça a formação, a experiência e a participação
          do autor na criação do conteúdo do curso.
        </p>

        <ul class="curso__lista-marcada">
          <li><strong>Especialidade:</strong> a informar.</li>
          <li><strong>Experiência:</strong> a informar.</li>
          <li><strong>Habilidades:</strong> a informar.</li>
        </ul>

        <a
          class="curso__botao"
          href="./contato.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Entrar em contato
          <span class="somente-leitor">(abre em nova aba)</span>
        </a>
      </div>
    </div>
  </section>
`

// ============================================================
// ESTATÍSTICAS — DADOS DO MATERIAL DEMONSTRATIVO
// ============================================================

const estatisticas = [
  ["2.000+", "Usuários satisfeitos"],
  ["358", "Problemas resolvidos"],
  ["980", "Avaliações positivas"],
  ["216", "Estudos de caso"],
]

export const Estatisticas = () => /* html */ `
  <section class="curso__estatisticas" aria-labelledby="estatisticas-titulo">
    <div class="curso__container curso__duas-colunas">
      <img
        class="curso__ilustracao"
        src="/images/stats.png"
        alt="Ilustração dos resultados apresentados pelo curso"
        loading="lazy"
      >

      <div>
        <h2 id="estatisticas-titulo">O curso em números</h2>

        <dl class="curso__numeros">
          ${estatisticas
            .map(
              ([numero, descricao]) => `
            <div>
              <dt>${descricao}</dt>
              <dd>${numero}</dd>
            </div>
          `,
            )
            .join("")}
        </dl>

        <p>
          Aprenda a criar landing pages com um curso em vídeo
          que combina planejamento, design e desenvolvimento.
        </p>

        <p class="curso__aviso">
          Números ilustrativos reproduzidos do projeto do curso.
        </p>

        <a class="curso__botao" href="#capitulos">
          Conheça o curso
        </a>
      </div>
    </div>
  </section>
`

// ============================================================
// NEWSLETTER
// ============================================================

export const Newsletter = () => /* html */ `
  <section class="curso__secao" aria-labelledby="newsletter-titulo">
    <div class="curso__container">
      <div class="curso__newsletter">
        <h2 id="newsletter-titulo">Receba nossas novidades</h2>

        <p>
          Fique por dentro de notícias, ofertas e conteúdos
          da nossa plataforma. Faça parte da nossa comunidade!
        </p>

        <form id="formulario-newsletter" class="curso__formulario">
          <label for="newsletter-email">Seu e-mail</label>

          <input
            id="newsletter-email"
            name="email"
            type="email"
            autocomplete="email"
            placeholder="Digite seu e-mail"
            required
          >

          <button class="curso__botao" type="submit">
            Inscrever-se
          </button>

          <p id="newsletter-retorno" role="status"></p>
        </form>
      </div>
    </div>
  </section>
`

export const iniciarNewsletter = () => {
  const formulario = document.querySelector("#formulario-newsletter")
  const retorno = document.querySelector("#newsletter-retorno")

  if (!formulario || !retorno) return

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    retorno.textContent =
      "E-mail validado! Esta demonstração ainda não envia inscrições."
  })
}

// ============================================================
// REDES SOCIAIS
// ============================================================

const redes = [
  ["Facebook", "https://www.facebook.com/"],
  ["Twitter", "https://twitter.com/"],
  ["Instagram", "https://www.instagram.com/"],
  ["LinkedIn", "https://www.linkedin.com/"],
  ["YouTube", "https://www.youtube.com/"],
  ["Pinterest", "https://www.pinterest.com/"],
]

export const RedesSociais = () => /* html */ `
  <section class="curso__redes" aria-labelledby="redes-titulo">
    <div class="curso__container">
      <h2 id="redes-titulo">Acompanhe nossas redes sociais</h2>

      <p>
        Receba novidades e notícias sobre nossos cursos.
      </p>

      <ul class="curso__redes-lista">
        ${redes
          .map(
            ([nome, endereco]) => `
          <li>
            <a
              href="${endereco}"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${nome}
              <span aria-hidden="true">↗</span>
              <span class="somente-leitor">(abre em nova aba)</span>
            </a>
          </li>
        `,
          )
          .join("")}
      </ul>
    </div>
  </section>
`
