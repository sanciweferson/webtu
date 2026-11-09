import "@/styles/style.css"
import { Header } from "@layout/header/header.js"
import { Footer } from "@layout/footer/footer.js"

import { iniciarTema } from "@/utils/tema.js"
import { iniciarMenu } from "@/layout/menu.js"

document.querySelector("#app").innerHTML = `
  ${Header()}

  <main class="contato" id="conteudo">
    <h1>Entre em contato</h1>

    <p>Envie suas dúvidas ou sugestões para nossa equipe.</p>

    <form id="formulario-contato">
      <label for="nome">Nome</label>
      <input
        id="nome"
        name="nome"
        autocomplete="name"
        required
      >

      <label for="email">E-mail</label>
      <input
        id="email"
        name="email"
        type="email"
        autocomplete="email"
        required
      >

      <label for="mensagem">Mensagem</label>
      <textarea
        id="mensagem"
        name="mensagem"
        rows="5"
        required
      ></textarea>

      <button type="submit">Testar formulário</button>

      <p id="retorno-contato" role="status"></p>
    </form>
  </main>

  ${Footer()}
`

// Na página de contato, as âncoras levam à página inicial.
document.querySelectorAll("a[data-link]").forEach((link) => {
  const caminho = link.getAttribute("href")

  if (caminho?.startsWith("#")) {
    link.setAttribute("href", `./index.html${caminho}`)
  }

  // Contato já está aberto nesta aba.
  if (caminho === "./contato.html") {
    link.removeAttribute("target")
    link.setAttribute("aria-current", "page")

    link.querySelector(".somente-leitor")?.remove()
  }
})

iniciarTema()
iniciarMenu()

const formulario = document.querySelector("#formulario-contato")
const retorno = document.querySelector("#retorno-contato")

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault()

  retorno.textContent = "Formulário validado! O envio ainda não está conectado."
})
