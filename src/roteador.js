// ============================================================
// PÁGINAS
// ============================================================

const Inicio = () => /* html */ `
  <section>
    <h1>Início</h1>
    <p>Bem-vindo ao nosso curso!</p>
  </section>
`

const Capitulos = () => /* html */ `
  <section>
    <h1>Capítulos</h1>
    <p>Conheça os capítulos do curso.</p>
  </section>
`

const Resumo = () => /* html */ `
  <section>
    <h1>Resumo</h1>
    <p>Confira o conteúdo que vamos estudar.</p>
  </section>
`

const Aprendizados = () => /* html */ `
  <section>
    <h1>Aprendizados</h1>
    <p>Veja as habilidades que você vai desenvolver.</p>
  </section>
`

const Autor = () => /* html */ `
  <section>
    <h1>Autor</h1>
    <p>Conheça quem preparou o curso.</p>
  </section>
`

const Contato = () => /* html */ `
  <section>
    <h1>Contato</h1>
    <p>Entre em contato com a nossa equipe.</p>
  </section>
`

const NaoEncontrada = () => /* html */ `
  <section>
    <h1>Página não encontrada</h1>
    <p>O endereço informado não existe.</p>
    <a href="#/">Voltar ao início</a>
  </section>
`

// ============================================================
// TABELA DE ROTAS
// ============================================================

const rotas = {
  "/": {
    titulo: "Início",
    renderizar: Inicio,
  },

  "/capitulos": {
    titulo: "Capítulos",
    renderizar: Capitulos,
  },

  "/resumo": {
    titulo: "Resumo",
    renderizar: Resumo,
  },

  "/aprendizados": {
    titulo: "Aprendizados",
    renderizar: Aprendizados,
  },

  "/autor": {
    titulo: "Autor",
    renderizar: Autor,
  },

  "/contato": {
    titulo: "Contato",
    renderizar: Contato,
  },
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================

export const iniciarRoteador = () => {
  const conteudo = document.querySelector("#conteudo")

  if (!conteudo) {
    throw new Error("O elemento #conteudo não foi encontrado.")
  }

  const renderizarRota = (moverFoco = false) => {
    // Remove o #. Se não houver caminho, usa a página inicial.
    const caminho = window.location.hash.slice(1) || "/"

    const rota = Object.hasOwn(rotas, caminho)
      ? rotas[caminho]
      : {
          titulo: "Página não encontrada",
          renderizar: NaoEncontrada,
        }

    conteudo.innerHTML = rota.renderizar()

    document.title = `${rota.titulo} | Tutor`

    // Atualiza os links do cabeçalho e do rodapé.
    document.querySelectorAll("a[data-link]").forEach((link) => {
      const ativo =
        Object.hasOwn(rotas, caminho) &&
        link.getAttribute("href") === `#${caminho}`

      if (ativo) {
        link.setAttribute("aria-current", "page")
      } else {
        link.removeAttribute("aria-current")
      }
    })

    if (moverFoco) {
      conteudo.focus({ preventScroll: true })
      window.scrollTo({ top: 0, behavior: "instant" })
    }
  }

  // Executa ao navegar, inclusive pelos botões voltar e avançar.
  const aoMudarRota = () => renderizarRota(true)

  window.addEventListener("hashchange", aoMudarRota)

  // Exibe a página correspondente ao endereço inicial.
  renderizarRota()

  // Permite remover o listener se precisarmos no futuro.
  return () => {
    window.removeEventListener("hashchange", aoMudarRota)
  }
}
