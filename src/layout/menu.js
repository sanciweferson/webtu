import { getIcon } from "@/components/icons/icones.js"

const CHAVE_MENU = "menu-aberto"

const salvarEstado = (aberto) => {
  try {
    sessionStorage.setItem(CHAVE_MENU, String(aberto))
  } catch {
    // O menu funciona mesmo sem armazenamento.
  }
}

const lerEstado = () => {
  try {
    return sessionStorage.getItem(CHAVE_MENU) === "true"
  } catch {
    return false
  }
}

export const iniciarMenu = () => {
  const header = document.querySelector(".header")
  const botao = document.querySelector("#js-nav-toggle")
  const painel = document.querySelector("#js-nav-aside")
  const overlay = document.querySelector("#js-nav-overlay")

  if (!header || !botao || !painel || !overlay) return

  const desktop = window.matchMedia("(min-width: 64rem)")
  const movimentoReduzido = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  )

  let aberto = false
  let temporizador
  let overflowAnterior = ""
  let elementosBloqueados = []

  // ==========================================================
  // BOTÃO: HAMBÚRGUER / FECHAR
  // ==========================================================

  const atualizarBotao = () => {
    const descricao = aberto ? "Fechar menu" : "Abrir menu"

    botao.innerHTML = getIcon(aberto ? "close" : "hamburger")
    botao.setAttribute("aria-expanded", String(aberto))
    botao.setAttribute("aria-label", descricao)
    botao.title = descricao
  }

  // ==========================================================
  // FOCO E BLOQUEIO DO CONTEÚDO AO FUNDO
  // ==========================================================

  const obterFocaveis = () => {
    const elementos = [
      ...painel.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex="0"]',
      ),
      botao,
    ]

    return elementos.filter((elemento) => elemento.getClientRects().length > 0)
  }

  const bloquearFundo = () => {
    const preservados = [painel, botao, overlay]

    const percorrer = (pai) => {
      for (const elemento of pai.children) {
        if (!(elemento instanceof HTMLElement)) continue

        if (preservados.includes(elemento)) continue

        const contemControle = preservados.some((preservado) =>
          elemento.contains(preservado),
        )

        if (contemControle) {
          percorrer(elemento)
        } else if (!elemento.inert) {
          elemento.inert = true
          elementosBloqueados.push(elemento)
        }
      }
    }

    percorrer(document.body)
  }

  const liberarFundo = () => {
    elementosBloqueados.forEach((elemento) => {
      elemento.inert = false
    })

    elementosBloqueados = []
  }

  // ==========================================================
  // FINALIZAÇÃO DA ANIMAÇÃO DE SAÍDA
  // ==========================================================

  const ocultarPainel = () => {
    painel.hidden = true
    overlay.hidden = true

    painel.inert = false
    painel.removeAttribute("aria-hidden")
  }

  // ==========================================================
  // ABRIR
  // ==========================================================

  const abrirMenu = (restaurar = false) => {
    if (aberto || desktop.matches) return

    clearTimeout(temporizador)

    aberto = true
    overflowAnterior = document.body.style.overflow

    painel.hidden = false
    overlay.hidden = false
    painel.inert = false
    painel.removeAttribute("aria-hidden")

    header.classList.add("menu-aberto")
    atualizarBotao()

    document.body.style.overflow = "hidden"

    if (restaurar) {
      header.classList.add("menu-restaurado")
    }

    // Registra a posição inicial antes de animar.
    void painel.offsetWidth

    painel.classList.add("is-open")
    overlay.classList.add("is-open")

    botao.focus()
    bloquearFundo()
    salvarEstado(true)

    if (restaurar) {
      void painel.offsetWidth
      header.classList.remove("menu-restaurado")
    }
  }

  // ==========================================================
  // FECHAR
  // ==========================================================

  const fecharMenu = (devolverFoco = true, imediato = false) => {
    if (!aberto) return

    clearTimeout(temporizador)
    aberto = false

    liberarFundo()

    if (devolverFoco) {
      botao.focus()
    } else if (
      painel.contains(document.activeElement) ||
      document.activeElement === botao
    ) {
      document.activeElement.blur()
    }

    header.classList.remove("menu-aberto")
    atualizarBotao()

    painel.inert = true
    painel.setAttribute("aria-hidden", "true")

    painel.classList.remove("is-open")
    overlay.classList.remove("is-open")

    document.body.style.overflow = overflowAnterior
    salvarEstado(false)

    if (imediato || movimentoReduzido.matches) {
      ocultarPainel()
    } else {
      temporizador = window.setTimeout(ocultarPainel, 280)
    }
  }

  // ==========================================================
  // EVENTOS
  // ==========================================================

  botao.addEventListener("click", () => {
    if (aberto) {
      fecharMenu()
    } else {
      abrirMenu()
    }
  })

  overlay.addEventListener("click", () => fecharMenu())

  painel.addEventListener("click", (evento) => {
    if (evento.target instanceof Element && evento.target.closest("a[href]")) {
      fecharMenu()
    }
  })

  document.addEventListener("keydown", (evento) => {
    if (!aberto) return

    if (evento.key === "Escape") {
      evento.preventDefault()
      fecharMenu()
      return
    }

    if (evento.key !== "Tab") return

    const focaveis = obterFocaveis()
    const primeiro = focaveis[0]
    const ultimo = focaveis[focaveis.length - 1]
    const atual = document.activeElement

    if (!focaveis.includes(atual)) {
      evento.preventDefault()
      primeiro?.focus()
      return
    }

    if (evento.shiftKey && atual === primeiro) {
      evento.preventDefault()
      ultimo?.focus()
    } else if (!evento.shiftKey && atual === ultimo) {
      evento.preventDefault()
      primeiro?.focus()
    }
  })

  desktop.addEventListener("change", ({ matches }) => {
    if (matches) fecharMenu(false, true)
  })

  // ==========================================================
  // ESTADO INICIAL
  // ==========================================================

  atualizarBotao()

  if (!desktop.matches && lerEstado()) {
    abrirMenu(true)
  }
}
