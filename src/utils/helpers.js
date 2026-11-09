

// src/utils/helpers.js
export const escapeHtml = (str) =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")



export const cx = (...classes) => classes.flat().filter(Boolean).join(" ")
