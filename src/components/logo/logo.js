

import { escapeHtml,cx } from "@/utils/helpers"
export const Logo =()=>{

  return /* html */ `
  <img src="/images/logo.svg" alt="Tutor"
    width="81"
    height="32">
  `
}



export const createLogo = ({
  href = "/",
  ariaLabel = "Ir para a página inicial",
  className = "",
  svgVariant = "",
} = {}) => {
  const logoSvg = Logo({ className: cx("logo__svg", svgVariant) })
  return /* html */ `
    <a href="${escapeHtml(href)}" data-link="" class="${cx("logo", className)}" aria-label="${escapeHtml(ariaLabel)}">
      ${logoSvg}
    </a>
  `
}

