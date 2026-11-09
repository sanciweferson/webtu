import { Hero } from "@/components/hero/hero.js"

import {
  OQueAprender,
  Capitulos,
  Resumo,
  Publico,
  Aprendizados,
  Detalhes,
  Autor,
  Estatisticas,
  Newsletter,
  RedesSociais,
} from "@/components/secoes/secoes.js"

export const Inicio = () => {
  return /* html */ `
    ${Hero()}
    ${OQueAprender()}
    ${Capitulos()}
    ${Resumo()}
    ${Publico()}
    ${Aprendizados()}
    ${Detalhes()}
    ${Autor()}
    ${Estatisticas()}
    ${Newsletter()}
    ${RedesSociais()}
  `
}
