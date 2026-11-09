import { itensNavegacao } from "@/components/data/navegacao.js"
import { getIcon } from "@/components/icons/icones"
import { createLogo } from "@/components/logo/logo"

import { escapeHtml, cx } from "@/utils/helpers"

const createNavContent = ({ icone, texto, varianteIcone = "default" }) => {
  const svg = getIcon(icone, varianteIcone)

  return /* html */ `
    <span class="nav__link-content">
      ${
        svg
          ? `
        <span class="nav__icon">
          ${svg}
        </span>
      `
          : ""
      }

      <span class="nav__label">
        ${escapeHtml(texto)}
      </span>
    </span>
  `
}

// ============================================================
// ITEM DE NAVEGAÇÃO — SEM SUBMENU
// ============================================================

const createNavItem = (item, variante) => /* html */ `
  <li class="${cx("nav__item", `nav__item--${variante}`)}">
    <a
      href="${escapeHtml(item.caminho)}"
      class="nav__link"
      data-link
    >
      ${createNavContent(item)}
    </a>
  </li>
`

// ============================================================
// LISTA DE NAVEGAÇÃO
// ============================================================

const createNavList = (variante, varianteIcone = "default") => {
  return itensNavegacao
    .map((item) =>
      createNavItem(
        {
          ...item,
          varianteIcone,
        },
        variante,
      ),
    )
    .join("")
}

// ============================================================
// MARCA
// ============================================================


// ============================================================
// BOTÃO DE TEMA
// ============================================================

const createThemeToggle = (variante) => {
  const temaEscuro = document.documentElement.dataset.tema === "escuro"

  const descricao = temaEscuro ? "Ativar tema claro" : "Ativar tema escuro"

  return /* html */ `
    <button
      type="button"
      class="nav__button nav__theme-toggle nav__theme-toggle--${variante}"
      data-theme-toggle
      aria-label="${descricao}"
      title="${descricao}"
    >
      ${getIcon(temaEscuro ? "sun" : "moon")}
    </button>
  `
}

// ============================================================
// BOTÃO DO MENU MOBILE
// O menu.js alterna o ícone entre hamburger e close.
// ============================================================

const createMenuButton = () => /* html */ `
  <button
    type="button"
    class="nav__button nav__menu-toggle"
    id="js-nav-toggle"
    aria-label="Abrir menu"
    aria-expanded="false"
    aria-controls="js-nav-aside"
    title="Abrir menu"
  >
    ${getIcon("hamburger")}
  </button>
`

// ============================================================
// HEADER
// ============================================================

export const Header = () => {
  const desktopNav = createNavList("desktop", "noIcon")
  const mobileNav = createNavList("mobile", "default")

  return /* html */ `
    <header class="header">
      <div class="nav">
        ${createLogo()}

        <nav
          class="nav__desktop"
          aria-label="Navegação principal"
        >
          <ul class="nav__list">
            ${desktopNav}
          </ul>
        </nav>

        <div class="nav__actions">
          ${createThemeToggle("desktop")}
          ${createMenuButton()}
        </div>
      </div>

      <div
        class="nav__drawer-overlay"
        id="js-nav-overlay"
        aria-hidden="true"
        hidden
      ></div>

      <aside
        class="nav__drawer"
        id="js-nav-aside"
        aria-labelledby="drawer-title"
        hidden
      >
        <div class="drawer__header">
          <h2 class="drawer__title" id="drawer-title">
            Menu
          </h2>

          <div class="drawer__actions">
            ${createThemeToggle("mobile")}
          </div>
        </div>

        <nav aria-label="Navegação mobile">
          <ul class="nav__mobile-list">
            ${mobileNav}
          </ul>
        </nav>
      </aside>
    </header>
  `
}
