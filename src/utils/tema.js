import { getIcon } from "@/components/icons/icones"

const CHAVE_TEMA = "tema"

const lerPreferencia = () => {
  try {
    const tema = localStorage.getItem(CHAVE_TEMA)

    return tema === "claro" || tema === "escuro" ? tema : null
  } catch {
    return null
  }
}

export const iniciarTema = () => {
  const sistema = window.matchMedia("(prefers-color-scheme: dark)")
  const botoes = document.querySelectorAll("[data-theme-toggle]")

  let preferencia = lerPreferencia()

  const aplicarTema = (tema) => {
    document.documentElement.dataset.tema = tema

    const escuro = tema === "escuro"
    const descricao = escuro ? "Ativar tema claro" : "Ativar tema escuro"

    botoes.forEach((botao) => {
      botao.innerHTML = getIcon(escuro ? "sun" : "moon")
      botao.setAttribute("aria-label", descricao)
      botao.title = descricao
    })
  }

  const obterTemaSistema = () => (sistema.matches ? "escuro" : "claro")

  aplicarTema(preferencia ?? obterTemaSistema())

  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      preferencia =
        document.documentElement.dataset.tema === "escuro" ? "claro" : "escuro"

      aplicarTema(preferencia)

      try {
        localStorage.setItem(CHAVE_TEMA, preferencia)
      } catch {
        // O tema continua funcionando sem armazenamento.
      }
    })
  })

  sistema.addEventListener("change", () => {
    if (preferencia === null) {
      aplicarTema(obterTemaSistema())
    }
  })
}
