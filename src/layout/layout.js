




// src/layout/layout.js

import { Header } from "@layout/header/header";
import { Footer } from "./footer/footer";
import { Inicio } from "@/pages/inicio";

export function Layout() {
  return /* html */ `
    ${Header()}

      <main class="main" id="conteudo">
        ${Inicio()}
      </main>

    ${Footer()}
  `
}