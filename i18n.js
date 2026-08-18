/* ════════════════════════════════════════════════════════
   i18n.js
   ────────────────────────────────────────────────────────
   ✏️ El sitio no tiene selector de idioma ni traducción
   multi-idioma (se eliminó en una iteración anterior). Este
   archivo se conserva —con el mismo nombre y la misma API
   (t(), applyI18n())— porque main.js y todas las páginas de
   proyecto lo siguen usando como fuente ÚNICA de los textos
   fijos de la interfaz (vía atributos data-i18n en el HTML).
   Así se evita repetir a mano los mismos textos en index.html
   y en cada página de proyecto. El idioma de la interfaz es
   inglés en su totalidad; el contenido específico de cada
   proyecto (textos, documentación, investigación) que esté
   escrito en español se mantiene tal cual — no vive en este
   diccionario, sino directamente en el HTML de cada proyecto.

   ✏️ LIMPIEZA: se quitaron las claves que solo alimentaban
   páginas ya removidas (Projects/Texts/Workshops como
   landing pages, el sistema anterior de burbujas por
   categoría, y las cards con imagen del grid de Projects) —
   ver README para más contexto de qué se eliminó y por qué.
════════════════════════════════════════════════════════ */

const translations = {
  // ── Top bar / nav principal ──
  nav_home: 'HOME',
  nav_projects: 'PROJECTS',
  nav_graphics: 'GRAPHICS',
  nav_texts: 'TEXTS',
  nav_workshops: 'LABORATORIES',
  nav_research: 'RESEARCH',
  nav_about: 'ABOUT+STATEMENT',
  menu_toggle: 'Menu',

  // ── Buscador ──
  nav_search_placeholder: 'Search…',

  // ── Home ──
  home_view_map: 'Exploration map',
  home_view_grid: 'Index',
  home_view_about: 'About',

  // ── Research / Workshops (placeholder) ──
  research_title: 'Research',
  under_construction: 'Under construction',

  // ── About ──
  about_title: 'Bio',
  about_bio_p1: "Camila S. Caicedo is an artist, experience and interface designer, and independent researcher from Cali, Colombia, based in Osorno, Chile. Her transdisciplinary practice integrates artificial intelligence, bioart, XR experiences, speculative design, UX/UI, net art, drawing, writing, and collective creation labs. Her work explores individual and collective narratives around the relationships between the human and the more-than-human. Through ancestral and contemporary technologies, she creates experiences and interfaces that explore other ways of perceiving, relating to, and inhabiting the world, questioning the structures of consumption and extractivism that run through today's technological systems, and seeking to imagine other forms of coexistence from a vision that empowers the pluriversal. Her practice unfolds through research and experimentation projects that combine artistic creation, technology, and territorial exploration. She also designs spaces for encounter and collective learning where digital tools, sensitive practices, and situated knowledge become means to investigate other ways of relating to our environment.",
  about_cv_link: 'CV under request',

  // ── Footer ──
  footer_updated: 'Updated 07-28-26',
  footer_location: 'Based in Los Lagos, CL',

  // ── Misceláneo ──
  portrait_label: 'portrait',
  page_title: 'Camila S Caicedo - Portfolio',

  // ── Estados de carga ──
  loading_label: 'Loading…',
  back_to_portfolio: '← back to portfolio',
};

/* Helper para pedir un texto desde JS (contenido dinámico).
   Si la clave no existe, devuelve la clave misma para que el
   faltante sea visible y fácil de detectar. */
function t(key) {
  return translations[key] || key;
}

/* Aplica los textos fijos a cualquier nodo del DOM marcado con
   data-i18n / data-i18n-placeholder / data-i18n-title. Se llama
   una sola vez por cada bloque de contenido que main.js genera
   (nav, listas, proyecto cargado por fetch, etc.) — no hay
   selector de idioma, así que esto corre una sola vez por
   bloque de contenido nuevo. */
function applyI18n(root) {
  root = root || document;
  root.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  root.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  root.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.dataset.i18nTitle);
  });
  if (root.matches) {
    if (root.matches('[data-i18n]')) root.textContent = t(root.dataset.i18n);
    if (root.matches('[data-i18n-placeholder]')) root.placeholder = t(root.dataset.i18nPlaceholder);
    if (root.matches('[data-i18n-title]')) root.title = t(root.dataset.i18nTitle);
  }
}

/* Aplica los textos apenas carga el DOM y fija <html lang="en">
   (la interfaz del sitio es en inglés en su totalidad). */
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.setAttribute('lang', 'en');
  applyI18n(document);
  document.title = t('page_title');
});
