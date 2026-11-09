import { itensNavegacao } from "@/components/data/navegacao.js"
import { getIcon } from "@/components/icons/icones.js"

const escapeHtml = (valor) => {
  const caracteres = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }

  return String(valor).replace(/[&<>"']/g, (caractere) => caracteres[caractere])
}
const createFooterLink = (item) => {
  const icone = getIcon(item.icone, item.varianteIcone)

  return /* html */ `
    <li class="footer__item">
      <a
        href="${escapeHtml(item.caminho)}"
        class="footer__link"
        ${item.novaAba ? 'target="_blank" rel="noopener noreferrer"' : ""}
        data-link
      >
        ${
          icone
            ? `
          <span class="footer__icon">${icone}</span>
        `
            : ""
        }

        <span>${escapeHtml(item.texto)}</span>

        ${
          item.novaAba
            ? `
          <span class="somente-leitor"> (abre em nova aba)</span>
        `
            : ""
        }
      </a>
    </li>
  `
}

export const Footer = () => {
  const ano = new Date().getFullYear()

  return /* html */ `
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__content">
          <div class="footer__presentation">
            <a
              href="#/"
              class="footer__brand"
              aria-label="Tutor — página inicial"
              data-link
            >
              Tutor
            </a>

            <p class="footer__description">
              Aprenda, desenvolva suas habilidades e
              transforme suas ideias em projetos.
            </p>
          </div>

          <nav
            class="footer__navigation"
            aria-labelledby="footer-navigation-title"
          >
            <h2
              class="footer__title"
              id="footer-navigation-title"
            >
              Explore
            </h2>

            <ul class="footer__list">
              ${itensNavegacao.map(createFooterLink).join("")}
            </ul>
          </nav>
        </div>

        <div class="footer__bottom">
          <p>
            &copy; ${ano} Tutor. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  `
}
