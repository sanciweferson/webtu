// src/main.js

import "@/styles/style.css"

import { App } from "./app/app"
import { iniciarMenu } from "./layout/menu"
import { iniciarTema } from "./utils/tema"


document.querySelector("#app").innerHTML = `
${App()}
`
iniciarTema()
iniciarMenu()
