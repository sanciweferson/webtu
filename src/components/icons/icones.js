


const icones = {
  inicio: {
    default: `
      <svg class="icone" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round"
        aria-hidden="true" focusable="false">
        <path d="m3 10 9-7 9 7"/>
        <path d="M5 9v12h14V9"/>
        <path d="M9 21v-8h6v8"/>
      </svg>
    `,
  },

  capitulos: {
    default: `
      <svg class="icone" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round"
        aria-hidden="true" focusable="false">
        <path d="M12 5v16"/>
        <path d="M12 5C9 3 5 3 2 4v15c3-1 7-1 10 2"/>
        <path d="M12 5c3-2 7-2 10-1v15c-3-1-7-1-10 2"/>
      </svg>
    `,
  },

  autor: {
    default: `
      <svg class="icone" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round"
        aria-hidden="true" focusable="false">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 21v-2a8 8 0 0 1 16 0v2"/>
      </svg>
    `,
  },
  resumo: {
    default: `
    <svg class="icone" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true" focusable="false">
      <rect x="5" y="3" width="14" height="18" rx="2"/>
      <path d="M9 7h6M9 12h6M9 17h4"/>
    </svg>
  `,
  },

  aprendizados: {
    default: `
    <svg class="icone" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true" focusable="false">
      <path d="M9 18h6M10 21h4"/>
      <path d="M8 14a6 6 0 1 1 8 0c-1 .8-1 1.5-1 2H9c0-.5 0-1.2-1-2Z"/>
      <path d="m10 9 1.5 1.5L14 8"/>
    </svg>
  `,
  },

  contato: {
    default: `
      <svg class="icone" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round"
        aria-hidden="true" focusable="false">
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <path d="m3 7 9 6 9-6"/>
      </svg>
    `,
  },

  moon: {
    default: `
      <svg class="icone" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round"
        aria-hidden="true" focusable="false">
        <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>
      </svg>
    `,
  },

  sun: {
    default: `
      <svg class="icone" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round"
        aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
        <path d="m4.93 4.93 1.41 1.41"/>
        <path d="m17.66 17.66 1.41 1.41"/>
        <path d="m6.34 17.66-1.41 1.41"/>
        <path d="m19.07 4.93-1.41 1.41"/>
      </svg>
    `,
  },

  hamburger: {
    default: `
      <svg class="icone" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round"
        aria-hidden="true" focusable="false">
        <path d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    `,
  },

  close: {
    default: `
      <svg class="icone" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round"
        aria-hidden="true" focusable="false">
        <path d="m6 6 12 12M18 6 6 18"/>
      </svg>
    `,
  },
}

export function getIcon(id, variant = 'default') {
  if (variant === 'noIcon') return '';

  if (!Object.hasOwn(icones, id)) {
    console.warn(`Ícone "${id}" não encontrado.`);
    return '';
  }

  const icone = icones[id];

  return Object.hasOwn(icone, variant)
    ? icone[variant]
    : icone.default;
}