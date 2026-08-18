/* ════════════════════════════════════════════════════════
   PORTAFOLIO — main.js
   ────────────────────────────────────────────────────────
   ÍNDICE:
   1. DATOS (Projects/Graphics/Workshops/Texts/Research) ← edita para agregar contenido
   2. _allNavItems() / _openItem() — fuente única de entradas navegables
   3. MAPA DE PÁGINAS
   4. NAVEGACIÓN + TRANSICIONES
   6. GRUPOS COLAPSABLES DEL NAV
   7. MENÚ MÓVIL
   8. RELOJ
   9. BUSCADOR + LISTAS DEL NAV (no editar)
   10. CARGA DE PROYECTOS + NEXT/PREV (no editar)
   11. EXPLORATION MAP (no editar)
   HOME — VISTA "ÍNDICE"
════════════════════════════════════════════════════════ */



/* ════════════════════════════════════════════════════════
   1.1 DATOS DE PROYECTOS
   ────────────────────────────────────────────────────────
   Estos proyectos aparecen en el grid de Projects y en
   el nav lateral. Son independientes de las burbujas.

   ✏️  CÓMO AGREGAR UN PROYECTO:
   a) Copia un bloque y pégalo al final del array
      (el grid siempre muestra el último del array primero,
      o sea: lo más nuevo que subas aparece arriba).
   b) Rellena los campos:
      · title    → nombre en la card y en el nav
      · category → 'series' | 'instalaciones' | 'publicaciones' | 'colaboraciones'
      · tag      → etiqueta corta (ej: 'fotografía')
      · color    → color de la pill (hex)
      · year     → año
      · desc     → descripción breve (2-3 líneas)
      · images   → rutas de imágenes para el slider. Deja [] si no tienes.
      · url      → ruta al HTML del proyecto (opcional, comenta si no existe)
════════════════════════════════════════════════════════ */



const projects = [

  {
    title:    'Radio frecuencia de un bosque en fuego',
    category: 'digital-ecologies',
    tag:      'Sound essay',
    color:    '#1111111f',
    year:     '2025',
    desc:     'Registro del paisaje ribereño y sus memorias de habitación.',
    images:   ['Imagen/Radiofrecuencia/Radiofrecuencia_CSC_08.png'],
    url: 'Proyectos/radiofrecuencia.html',
  },

  {
    title:    'Quorum Sensing',
    category: 'invisible-technologies',
    tag:      'IA essay',
    color:    '#1111111f',
    year:     '2025 - ongoing',
    desc:     'Registro del paisaje ribereño y sus memorias de habitación.',
    images:   [],
    url: 'Proyectos/QuorumSensing.html',
  },

  {
    title:    'Morfologías sintéticas',
    category: 'digital-ecologies',
    tag:      'AR',
    color:    '#1111111f',
    year:     '2025',
    desc:     'Registro del paisaje ribereño y sus memorias de habitación.',
    images:   [],
    url: 'Proyectos/synthmorphologies.html',
  },

  {
    title:    'Ecosistemas de una máquina que sueña',
    category: 'digital-ecologies',
    tag:      'VR',
    color:    '#1111111f',
    year:     '2024',
    desc:     'Registro del paisaje ribereño y sus memorias de habitación.',
    images:   [],
    url: 'Proyectos/ecosistemadeunamaquina.html',
  },
 
  {
    title:    'Cartografías Sensibles ~ DerivaLab',
    category: 'social-interfaces-laboratories',
    tag:      'Relational practice',
    color:    '#1111111f',
    year:     '2025',
    desc:     'Intervención espacial con materiales encontrados en zonas rurales abandonadas.',
    images:   [],
    url: 'Proyectos/derivas.html',
  },




  /* ──────────────────────────────────────────────────
     ✏️  PEGA AQUÍ TU PRÓXIMO PROYECTO:

     {
       title:    'Nombre del proyecto',
       category: 'series',
       tag:      'fotografía',
       color:    '#abc123',
       year:     '2025',
       desc:     'Descripción breve del proyecto.',
       images:   [],
       url: 'Proyectos/nombre.html',
     },
     ────────────────────────────────────────────────── */
];


/* ════════════════════════════════════════════════════════
   1.2 DATOS DE WORKSHPS
   ───────────────────────────────────────────────────────

   ✏️  CÓMO AGREGAR UN Workshop:
   a) Copia un bloque y pégalo al final del array.
   b) Rellena los campos:
      · title    → nombre en la card y en el nav
      · category → 'series' | 'instalaciones' | 'publicaciones' | 'colaboraciones'
      · tag      → etiqueta corta (ej: 'fotografía')
      · color    → color de la pill (hex)
      · year     → año
      · desc     → descripción breve (2-3 líneas)
      · images   → rutas de imágenes para el slider. Deja [] si no tienes.
      · url      → ruta al HTML del proyecto (opcional, comenta si no existe)
════════════════════════════════════════════════════════ */

const graphics = [
  {
    title:    'Thought Forms',      
    color:    '#1111111f',
    year:     '2020 - Ongoing',
    desc:     'Descripción breve.',
    url:      'Graphics/ThoughtForms.html', // opcional
  },
];

/* ════════════════════════════════════════════════════════
   1.2 DATOS DE WORKSHPS
   ───────────────────────────────────────────────────────

   ✏️  CÓMO AGREGAR UN Workshop:
   a) Copia un bloque y pégalo al final del array.
   b) Rellena los campos:
      · title    → nombre en la card y en el nav
      · category → 'series' | 'instalaciones' | 'publicaciones' | 'colaboraciones'
      · tag      → etiqueta corta (ej: 'fotografía')
      · color    → color de la pill (hex)
      · year     → año
      · desc     → descripción breve (2-3 líneas)
      · images   → rutas de imágenes para el slider. Deja [] si no tienes.
      · url      → ruta al HTML del proyecto (opcional, comenta si no existe)
════════════════════════════════════════════════════════ */

const workshops = [
  {
    title:    'Todo está interconectado',
    tag:      'Workshop',
    color:    '#ffcefb',
    year:     '2025',
    desc:     'Descripción breve.',
    url:      'Workshops/wk.html', // opcional
  },
];

/* ════════════════════════════════════════════════════════
   1.3 DATOS DE TEXTOS
   ───────────────────────────────────────────────────────
   Aparecen en la página Texts y, automáticamente, como
   lista hija en el nav lateral (igual que Proyectos).

   ✏️  CÓMO AGREGAR UN TEXTO:
   a) Copia un bloque y pégalo al final del array.
   b) Rellena los campos:
      · title → nombre que se muestra en el nav
      · tag   → etiqueta corta (ej: "Web Essay")
      · color → color de la pill (hex)
      · year  → año (opcional). Si lo dejas vacío '',
                no se muestra fecha en el nav.
      · url   → ruta al HTML del texto (opcional). Si no
                existe aún, deja '' y el click en el nav
                simplemente abre la página Texts.
════════════════════════════════════════════════════════ */
/* ✏️ `standalone: true` marca entradas que NO usan el layout
   .project-split (son ensayos de una sola columna, ver
   Texts/*.html) — se abren en una pestaña nueva en vez de
   embeberse por fetch dentro del portafolio. Ver _openItem()
   y buildNavList() en la sección de navegación. */
const texts = [
  {
    title: 'Escuela de sensibilización tecnológica',
    tag:   'Web Essay',
    color: '#ffdefd',
    year:  '2025',
    url:   'Texts/EST.html', // opcional
    standalone: true,
  },
  {
    title: 'Encuentros sobre el fuego',
    tag:   'Laboratory',
    color: '#ffdefd',
    year:  '2026',
    url:   'Texts/Fuego.html',
    standalone: true,
  },
  {
    title: 'Laboratorios interespecies- cuerpos y ecologías',
    tag:   'Laboratory',
    color: '#ffdefd',
    year:  '2026',
    url:   'Texts/Interespecie.html',
    standalone: true,
  },

  /* ──────────────────────────────────────────────────
     ✏️  PEGA AQUÍ TU PRÓXIMO TEXTO:

     {
       title: 'Nombre del texto',
       tag:   'Web Essay',
       color: '#ffdefd',
       year:  '2026',
       url:   '', // ej: 'Proyectos/mi-texto.html'
     },
     ────────────────────────────────────────────────── */
];

/* ════════════════════════════════════════════════════════
   1.4 DATOS DE RESEARCH
   ────────────────────────────────────────────────────────
   ✏️  Antes este array no existía (la página Research y su
   entrada en el mapa de exploración / grid quedaban vacías,
   aunque el HTML y el CSS ya estaban listos — ver
   research-year-heading/.research-year-group en style.css).
   Sigue el mismo patrón que `texts`: cada entrada abre en
   pestaña nueva.
   ✏️  CÓMO AGREGAR UNA ENTRADA:
   Copia un bloque y pégalo al final del array.
════════════════════════════════════════════════════════ */
const researchItems = [
  {
    title: '[Example research title]',
    tag:   'Research',
    color: '#d8e8ff',
    year:  '2026',
    url:   'Research/investigacion_ejemplo.html',
    standalone: true,
  },

  /* ──────────────────────────────────────────────────
     ✏️  PEGA AQUÍ TU PRÓXIMA ENTRADA DE RESEARCH:

     {
       title: 'Nombre de la investigación',
       tag:   'Research',
       color: '#d8e8ff',
       year:  '2026',
       url:   'Research/nombre.html',
     },
     ────────────────────────────────────────────────── */
];

/* Genera la lista de Research agrupada por año (div#research-list),
   usando las clases .research-year-heading / .research-year-group
   ya definidas en style.css. Si `researchItems` está vacío, muestra
   el mensaje de "en construcción". */
function renderResearchList() {
  const wrap = document.getElementById('research-list');
  if (!wrap) return;
  wrap.innerHTML = '';

  if (!researchItems.length) {
    const p = document.createElement('p');
    p.dataset.i18n = 'under_construction';
    p.textContent = t('under_construction');
    wrap.appendChild(p);
    return;
  }

  /* Agrupa por año conservando el orden de aparición */
  const byYear = {};
  researchItems.forEach(item => {
    const y = item.year || '—';
    (byYear[y] = byYear[y] || []).push(item);
  });

  Object.keys(byYear).sort((a, b) => b.localeCompare(a)).forEach(year => {
    const heading = document.createElement('div');
    heading.className = 'research-year-heading';
    heading.textContent = year;
    wrap.appendChild(heading);

    const group = document.createElement('div');
    group.className = 'research-year-group';
    const ul = document.createElement('ul');
    byYear[year].forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.url || '#';
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = item.title;
      li.appendChild(a);
      ul.appendChild(li);
    });
    group.appendChild(ul);
    wrap.appendChild(group);
  });
}


/* ════════════════════════════════════════════════════════
   2. FUENTE ÚNICA DE ENTRADAS NAVEGABLES
   ────────────────────────────────────────────────────────
   ✏️ Todo lo que se puede visitar en el sitio (Projects,
   Graphics, Texts, Laboratories, Research) sale de esta única
   función — la usan el Exploration Map del Home (sección 11),
   la vista "Índice" (más abajo), el buscador del nav y la
   navegación Next/Previous entre proyectos. Ni las burbujas ni
   el índice duplican datos a mano: si agregas un ítem a
   `projects`/`graphics`/`texts`/`workshops`/`researchItems`,
   aparece automáticamente en los cuatro lugares.

   `standalone: true` (heredado del objeto original vía spread)
   marca entradas que NO usan el layout .project-split (los
   ensayos de Texts/Research) — ver _openItem() más abajo. */
function _allNavItems() {
  return [
    ...projects.map(p => ({ ...p, categoryLabel: t('nav_projects'), tema: p.tag || '—' })),
    ...graphics.map(g => ({ ...g, categoryLabel: t('nav_graphics'), tema: g.tag || '—' })),
    ...texts.map(x => ({ ...x, categoryLabel: t('nav_texts'), tema: x.tag || '—' })),
    ...workshops.map(w => ({ ...w, categoryLabel: t('nav_workshops'), tema: w.tag || '—' })),
    ...researchItems.map(r => ({ ...r, categoryLabel: t('nav_research'), tema: r.tag || '—' })),
  ];
}

/* Abre una entrada respetando su tipo de página: los ensayos
   standalone (Texts/Research) se abren en pestaña nueva; todo
   lo demás (Projects/Graphics/Laboratories) se embebe con
   openProject() como siempre. Punto único usado por el mapa de
   exploración, el índice editorial y el buscador del nav, así
   ninguno de los tres intenta embeber por fetch una página que
   no tiene .project-split. */
function _openItem(item) {
  if (!item || !item.url) return;
  if (item.standalone) {
    window.open(item.url, '_blank', 'noopener');
  } else {
    openProject(item.url, item.title, item.categoryLabel || item.category || '');
  }
}

/* ════════════════════════════════════════════════════════
   3. MAPA DE PÁGINAS
   ────────────────────────────────────────────────────────
   ✏️ Projects / Graphics / Texts / Laboratories son categorías
   "padre": solo agrupan hijos en el acordeón del nav (ver
   toggleGroup()) y NO tienen página propia — por eso no
   aparecen acá. Si agregas una sección nueva CON página propia
   (como Research o About):
   1. Crea <section id="page-NUEVA" class="page"> en index.html
   2. Agrega <li> en el nav con onclick="navigate('nueva')"
   3. Añade aquí: nueva: 'page-nueva',
════════════════════════════════════════════════════════ */
const pageMap = {
  home:     'page-home',
  about:    'page-about',
  research: 'page-research',
  proyecto: 'page-proyecto',
};


/* ════════════════════════════════════════════════════════
   4. NAVEGACIÓN + TRANSICIONES SUAVES
════════════════════════════════════════════════════════ */
function navigate(key) {
  const current = document.querySelector('.page.active, .split-page.active');
  const pageId  = pageMap[key];
  const nextEl  = pageId ? document.getElementById(pageId) : null;
  if (!nextEl || nextEl === current) return;

  const doShow = () => {
    nextEl.classList.add('active');
    void nextEl.offsetHeight;
    nextEl.classList.add('page-enter');
    nextEl.addEventListener('animationend', () => {
      nextEl.classList.remove('page-enter');
    }, { once: true });
  };

  if (current) {
    current.classList.add('page-exit');
    current.addEventListener('animationend', () => {
      current.classList.remove('active', 'page-exit');
      doShow();
    }, { once: true });
  } else {
    doShow();
  }

  document.querySelectorAll('.nav-section').forEach(n => n.classList.remove('active'));
  const navEl = document.getElementById('nav-' + key);
  if (navEl) navEl.classList.add('active');

  /* Si navegamos a cualquier página que no sea la vista de
     un proyecto individual (Home, About, Proyectos, Texts,
     Workshops...), se limpia el resaltado azul del proyecto
     que hubiera quedado abierto antes. Evita el bug de que
     el link del proyecto se quede en azul para siempre. */
  if (key !== 'proyecto') {
    _activeProjectUrl = null;
    _highlightActiveProject();
  }

  const main = document.getElementById('main');
  if (main) main.scrollTop = 0;

  closeMobileNav();
}


/* ════════════════════════════════════════════════════════
   6. GRUPOS COLAPSABLES DEL NAV (ACORDEÓN)
   ────────────────────────────────────────────────────────
   Cada grupo principal (Projects / Graphics / Texts /
   Laboratories) se abre o cierra al hacer clic en su título.
   El id que recibe toggleGroup() debe coincidir con el sufijo
   del <ul>: toggleGroup('nav-proyectos-group') → abre/cierra
   <ul id="children-nav-proyectos-group">.

   ✏️ AJUSTE: solo puede haber UNA categoría principal abierta
   a la vez. Al abrir una, cualquier otra rama que estuviera
   abierta se cierra automáticamente (verdadero acordeón, antes
   cada grupo se abría/cerraba de forma independiente y podían
   quedar varias abiertas al mismo tiempo). */
function toggleGroup(id) {
  const children = document.getElementById('children-' + id);
  if (!children) return;

  const willOpen = !children.classList.contains('open');

  document.querySelectorAll('#left-nav .nav-children.open').forEach(ul => {
    if (ul !== children) ul.classList.remove('open');
  });

  children.classList.toggle('open', willOpen);
}


/* ════════════════════════════════════════════════════════
   7. MENÚ MÓVIL
════════════════════════════════════════════════════════ */
function toggleMobileNav() {
  document.getElementById('left-nav').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('active');
}
function closeMobileNav() {
  document.getElementById('left-nav').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}


/* ════════════════════════════════════════════════════════
   8. RELOJ
════════════════════════════════════════════════════════ */
function updateClock() {
  const now = new Date();
  const h   = String(now.getHours()).padStart(2, '0');
  const m   = String(now.getMinutes()).padStart(2, '0');
  const el  = document.getElementById('clock');
  if (el) el.textContent = h + ':' + m;
}
updateClock();
setInterval(updateClock, 10000);


/* ════════════════════════════════════════════════════════
   9. BUSCADOR + LISTAS DEL NAV
   No editar.
════════════════════════════════════════════════════════ */
/* Quita tildes/diacríticos para que la búsqueda no distinga
   "fotografia" de "fotografía". Se usa tanto en el buscador del
   nav como en el mapa de exploración. */
function _normalizeText(str) {
  return (str || '')
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/* ════════════════════════════════════════════════════════
   BUSCADOR POR PALABRA CLAVE (NAV BAR)
   ────────────────────────────────────────────────────────
   Combina año + palabra clave + tag en una sola caja, sobre
   TODAS las entradas navegables (_allNavItems(): Projects,
   Graphics, Texts, Laboratories, Research) — una sola fuente
   de verdad, sin arreglos duplicados a mano.
════════════════════════════════════════════════════════ */
function initNavSearch() {
  const input   = document.getElementById('nav-search-input');
  const results = document.getElementById('nav-search-results');
  if (!input || !results) return;

  input.addEventListener('input', () => {
    const q = _normalizeText(input.value.trim());
    results.innerHTML = '';
    if (!q) { results.classList.remove('open'); return; }

    const matches = _allNavItems().filter(item =>
      item.url && _normalizeText([item.title, item.year, item.tema].filter(Boolean).join(' ')).includes(q)
    );

    matches.forEach(item => {
      const li = document.createElement('div');
      li.className = 'nav-search-item';
      li.textContent = item.title;
      li.onclick = () => {
        _openItem(item);
        input.value = '';
        results.innerHTML = '';
        results.classList.remove('open');
      };
      results.appendChild(li);
    });

    results.classList.toggle('open', matches.length > 0);
  });
}
initNavSearch();

/* ════════════════════════════════════════════════════════
   9.1 CONSTRUCCIÓN GENÉRICA DE LISTAS DEL NAV
   ────────────────────────────────────────────────────────
   Construye los <li> hijos de un grupo del nav (Projects,
   Graphics, Texts o Laboratories) a partir de un array de
   datos, y actualiza el contador "(n)" del grupo.

   · Si el item tiene `standalone: true` (ensayos de Texts/
     Research), el link es un <a> real con target="_blank":
     abre en pestaña nueva, sin pasar por openProject() (esas
     páginas no tienen .project-split para embeber).
   · Si no, el click abre la página con openProject() (mismo
     mecanismo que un proyecto normal).
════════════════════════════════════════════════════════ */
/* Calcula si conviene texto oscuro o claro sobre un color de
   fondo, para que las pills de año/técnica en el nav siempre
   se lean bien sin importar qué tan claro u oscuro sea el
   color asignado al proyecto. */
function _contrastText(hex) {
  if (!hex) return '#333';
  const c = hex.replace('#', '');
  if (c.length !== 6) return '#333';
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? '#222' : '#fff';
}

function buildNavList(ulSelector, items, countId) {
  const ul = document.querySelector(ulSelector);
  if (ul) {
    ul.innerHTML = '';
    items.forEach((item, i) => {
      const li = document.createElement('li');
      li.className = 'nav-branch' + (i === items.length - 1 ? ' last' : '');

      const a = document.createElement('a');
      a.dataset.url = item.url || '';

      /* Título en su propia línea */
      const title = document.createElement('span');
      title.className = 'nav-branch-title';
      title.textContent = item.title;
      a.appendChild(title);

      /* Fila de pills: año + técnica/categoría (si existen) */
      if (item.year || item.tag) {
        const tagsRow = document.createElement('span');
        tagsRow.className = 'nav-tags';

        if (item.year) {
          const yearTag = document.createElement('span');
          yearTag.className = 'nav-tag nav-tag-year';
          yearTag.textContent = item.year;
          tagsRow.appendChild(yearTag);
        }

        if (item.tag) {
          const techTag = document.createElement('span');
          techTag.className = 'nav-tag nav-tag-cat';
          techTag.textContent = item.tag;
          if (item.color) {
            techTag.style.background = item.color;
            techTag.style.color = _contrastText(item.color);
          }
          tagsRow.appendChild(techTag);
        }

        a.appendChild(tagsRow);
      }

      if (item.url && item.standalone) {
        a.href = item.url;
        a.target = '_blank';
        a.rel = 'noopener';
      } else if (item.url) {
        a.href = '#';
        a.onclick = (e) => { e.preventDefault(); openProject(item.url, item.title, item.category || ''); };
      } else {
        a.href = '#';
        a.setAttribute('aria-disabled', 'true');
      }
      li.appendChild(a);
      ul.appendChild(li);
    });
  }

  if (countId) {
    const countEl = document.getElementById(countId);
    if (countEl) countEl.textContent = `(${items.length})`;
  }
}

function buildNavProjects()  { buildNavList('#children-nav-proyectos-group', projects,  'count-proyectos'); }
function buildNavGraphics()  { buildNavList('#children-nav-graphics-group',  graphics,   'count-graphics'); }
function buildNavTexts()     { buildNavList('#children-nav-texts-group',    texts,      'count-texts'); }
function buildNavWorkshops() { buildNavList('#children-nav-workshops-group', workshops, 'count-workshops'); }

buildNavProjects();
buildNavGraphics();
buildNavTexts();
buildNavWorkshops();
renderResearchList();

/* Aplica los textos fijos (data-i18n) a todo lo que main.js
   acaba de generar (nav, listas). `applyI18n` vive en i18n.js,
   que se carga antes que este archivo. */
if (typeof applyI18n === 'function') applyI18n(document);
if (typeof applyContrastAuto === 'function') applyContrastAuto(document);

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const page = params.get('page');
  if (page && pageMap[page]) navigate(page);
});


/* ════════════════════════════════════════════════════════
   10. CARGA DE PROYECTOS SIN IFRAME
   No editar.
════════════════════════════════════════════════════════ */
let _activeProjectUrl = null;

/* ════════════════════════════════════════════════════════
   SCROLL HINTS — botón/indicador flotante de scroll, contextual
   ────────────────────────────────────────────────────────
   ✏️ Antes el indicador "scroll ↓" siempre se mostraba al abrir
   un proyecto, sin importar si la columna realmente tenía
   contenido por debajo del viewport. Ahora se calcula el
   overflow real (scrollHeight vs clientHeight) y el indicador
   se oculta por completo si no hace falta. El cálculo se repite
   dinámicamente con ResizeObserver (cambios de tamaño por
   imágenes, responsive, etc.) y cuando terminan de cargar las
   imágenes de la columna.
════════════════════════════════════════════════════════ */
function _initScrollHints(container) {
  const cols = container.querySelectorAll('.project-col-text, .project-col-images');
  cols.forEach(col => {
    /* Elimina hints/observers anteriores */
    col.querySelectorAll('.scroll-hint').forEach(el => el.remove());
    if (col._scrollHintRO) { col._scrollHintRO.disconnect(); col._scrollHintRO = null; }

    const hint = document.createElement('div');
    hint.className = 'scroll-hint';
    col.appendChild(hint);

    let hiddenByScroll = false;

    function updateOverflow() {
      /* Margen chico de tolerancia para evitar falsos positivos
         por redondeos de subpíxel. */
      const hasOverflow = (col.scrollHeight - col.clientHeight) > 24;
      hint.classList.toggle('no-overflow', !hasOverflow);
      if (!hasOverflow) {
        hiddenByScroll = false;
        hint.classList.remove('hidden');
      }
    }

    updateOverflow();

    /* Recalcula ante cualquier cambio de tamaño de la columna o
       de su contenido (imágenes, layout responsive, etc.) */
    const ro = new ResizeObserver(() => updateOverflow());
    ro.observe(col);
    col._scrollHintRO = ro;

    col.querySelectorAll('img').forEach(img => {
      if (!img.complete) img.addEventListener('load', updateOverflow, { once: true });
    });

    col.addEventListener('scroll', () => {
      if (!hiddenByScroll && col.scrollTop > 40) {
        hint.classList.add('hidden');
        hiddenByScroll = true;
      } else if (hiddenByScroll && col.scrollTop <= 40) {
        hint.classList.remove('hidden');
        hiddenByScroll = false;
      }
    }, { passive: true });
  });
}

async function openProject(url, title, category) {
  const container = document.getElementById('page-proyecto');
  if (!container) return;

  container.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:center;
                height:100%;font-family:var(--font-mono);font-size:0.7rem;color:#aaa;">
      ${t('loading_label')}
    </div>`;

  navigate('proyecto');

  try {
    const res  = await fetch(url);
    if (!res.ok) throw new Error('Could not load the project');
    const html = await res.text();

    const parser = new DOMParser();
    const doc    = parser.parseFromString(html, 'text/html');
    const frag   = doc.querySelector('.project-split');

    if (!frag) {
      container.innerHTML = `<div class="content-block"><p>Project content not found.</p></div>`;
      return;
    }

    frag.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (href && href.includes('index.html')) {
        a.href = '#';
        const target = new URL(href, window.location.href);
        const pageParam = target.searchParams.get('page');
        a.onclick = (e) => {
          e.preventDefault();
          navigate(pageParam && pageMap[pageParam] ? pageParam : 'home');
        };
      } else if (href && href.endsWith('.html') && !href.startsWith('http')) {
        const matched = _allNavItems().find(it => it.url && it.url.includes(href.split('/').pop()));
        if (matched) {
          a.href = '#';
          a.onclick = (e) => { e.preventDefault(); _openItem(matched); };
        }
      }
    });

    container.innerHTML = '';
    container.appendChild(frag);

    _activeProjectUrl = url;
    _highlightActiveProject();
    container.scrollTop = 0;

    /* Inyecta scroll hints en columnas de proyecto */
    _initScrollHints(container);

    /* Activa el grid filtrable + lightbox si el proyecto lo trae
       (ej: ThoughtForms.html). No hace nada si no existe. */
    _initTFGrid(container);

    /* Navegación persistente Next/Previous entre proyectos —
       ver _buildProjectNav() más abajo. */
    _buildProjectNav(container, url);

    /* ✏️ El fragmento recién inyectado puede traer sus propios
       data-i18n y colores dinámicos que necesitan el chequeo de
       contraste — se aplican acá para que el traductor y el
       detector de contraste cubran también las páginas de
       proyecto cargadas por fetch. */
    if (typeof applyI18n === 'function') applyI18n(container);
    if (typeof applyContrastAuto === 'function') applyContrastAuto(container);

  } catch (err) {
    container.innerHTML = `
      <div class="content-block">
        <p style="color:#e87c5a">Error loading the project.</p>
        <p class="muted">${err.message}</p>
      </div>`;
  }
}

/* ════════════════════════════════════════════════════════
   10.0 NEXT / PREVIOUS ENTRE PROYECTOS
   ────────────────────────────────────────────────────────
   ✏️ Navegación persistente entre entradas del portafolio:
   permite moverse de un proyecto a otro sin volver al menú.
   Solo incluye entradas que usan el layout .project-split
   (Projects, Graphics, Laboratories) — los ensayos standalone
   de Texts/Research no tienen ese layout y abren aparte (ver
   `standalone` en _allNavItems()). El orden es continuo y
   circular: desde el último ítem, "Next" vuelve al primero.
════════════════════════════════════════════════════════ */
function _browsableSplitItems() {
  return _allNavItems().filter(it => it.url && !it.standalone);
}

function _buildProjectNav(container, currentUrl) {
  /* Quita cualquier barra de navegación previa (evita duplicados
     al abrir varios proyectos seguidos dentro del mismo contenedor). */
  container.querySelectorAll(':scope > .project-nav').forEach(el => el.remove());

  const list = _browsableSplitItems();
  const idx  = list.findIndex(it => it.url === currentUrl);
  if (idx === -1 || list.length < 2) return;

  const prev = list[(idx - 1 + list.length) % list.length];
  const next = list[(idx + 1) % list.length];

  const nav = document.createElement('nav');
  nav.className = 'project-nav';
  nav.setAttribute('aria-label', 'Project navigation');

  const prevLink = document.createElement('a');
  prevLink.href = '#';
  prevLink.className = 'project-nav-prev';
  prevLink.innerHTML = `<span class="nav-hint">← Previous</span><span>${prev.title}</span>`;
  prevLink.onclick = (e) => { e.preventDefault(); _openItem(prev); };

  const nextLink = document.createElement('a');
  nextLink.href = '#';
  nextLink.className = 'project-nav-next';
  nextLink.innerHTML = `<span class="nav-hint">Next →</span><span>${next.title}</span>`;
  nextLink.onclick = (e) => { e.preventDefault(); _openItem(next); };

  nav.append(prevLink, nextLink);
  container.appendChild(nav);
}

/* ════════════════════════════════════════════════════════
   10.1 GALERÍA CON FILTRO POR AÑO + LIGHTBOX
   ────────────────────────────────────────────────────────
   Usado por ThoughtForms.html. Busca dentro de `scope`
   (el contenedor del proyecto recién cargado, o `document`
   cuando la página se abre standalone) y conecta:
   · los chips .tf-year-chip  → filtran .tf-grid-item por data-year
   · las miniaturas .tf-grid-item → abren .tf-lightbox con la
     imagen grande (data-full del <img> dentro de la miniatura)

   No editar. Para agregar imágenes o años, edita el HTML
   de ThoughtForms.html (ver comentarios ahí).
════════════════════════════════════════════════════════ */
/* Guarda la referencia al listener de teclado del visor para
   poder quitarlo antes de agregar uno nuevo cada vez que se
   abre el proyecto (evita que se acumulen listeners). */
let _tfKeyHandler = null;

function _initTFGrid(scope) {
  const grid = scope.querySelector('.tf-grid');
  if (!grid) return;

  const filterBar = scope.querySelector('.tf-year-filter');
  let lightbox = scope.querySelector('.tf-lightbox');
  const items  = grid.querySelectorAll('.tf-grid-item');

  /* — Filtro por año — */
  if (filterBar) {
    const chips = filterBar.querySelectorAll('.tf-year-chip');
    chips.forEach(chip => {
      chip.onclick = () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const year = chip.dataset.year;
        items.forEach(item => {
          const show = year === 'all' || item.dataset.year === year;
          item.classList.toggle('hidden-by-filter', !show);
        });
      };
    });
  }

  /* — Lightbox —
     Lo movemos a <body> para que "position:fixed" se calcule
     siempre respecto a la ventana completa. Si se quedara
     anidado adentro de la página del proyecto, cualquier
     ancestro con `transform` (como las animaciones de cambio
     de página) o `overflow:hidden` (el contenedor #main) puede
     recortarlo o desplazarlo, dejando la X o las flechas fuera
     de la vista. Antes de moverlo, borramos cualquier visor
     que haya quedado de una apertura anterior. */
  const stale = document.getElementById('tf-lightbox');
  if (stale && stale !== lightbox) stale.remove();
  if (!lightbox) lightbox = stale;
  if (lightbox && lightbox.parentElement !== document.body) {
    document.body.appendChild(lightbox);
  }
  if (!lightbox) return;
  const lbImg   = lightbox.querySelector('img');
  const lbCap   = lightbox.querySelector('.tf-lightbox-caption');
  const lbClose = lightbox.querySelector('.tf-lightbox-close');
  const lbPrev  = lightbox.querySelector('.tf-lightbox-prev');
  const lbNext  = lightbox.querySelector('.tf-lightbox-next');

  const closeLb = () => lightbox.classList.remove('open');

  /* Lista navegable: solo miniaturas con imagen real y que
     estén visibles según el filtro activo. Se recalcula cada
     vez que se abre el visor, así las flechas respetan el
     filtro por año que la persona tenga seleccionado. */
  let navList  = [];
  let navIndex = -1;

  function buildNavList() {
    navList = Array.from(items).filter(item => {
      const visible = !item.classList.contains('hidden-by-filter');
      const img = item.querySelector('img');
      const hasImg = img && (img.dataset.full || img.src);
      return visible && hasImg;
    });
  }

  function showAt(index) {
    if (!navList.length) return;
    navIndex = ((index % navList.length) + navList.length) % navList.length;
    const item = navList[navIndex];
    const img  = item.querySelector('img');
    lbImg.src  = img.dataset.full || img.src;
    lbImg.alt  = img.alt || '';
    if (lbCap) lbCap.textContent = item.dataset.caption || img.alt || '';
    /* Oculta las flechas si solo hay una imagen para navegar */
    const showNav = navList.length > 1;
    if (lbPrev) lbPrev.style.display = showNav ? '' : 'none';
    if (lbNext) lbNext.style.display = showNav ? '' : 'none';
  }

  items.forEach(item => {
    const img = item.querySelector('img');
    const fullSrc = img && (img.dataset.full || img.src);
    if (!fullSrc) {
      /* Sin imagen real todavía: no abre el visor */
      item.style.cursor = 'default';
      return;
    }
    item.onclick = () => {
      buildNavList();
      showAt(navList.indexOf(item));
      lightbox.classList.add('open');
    };
  });

  if (lbClose) lbClose.onclick = closeLb;
  if (lbPrev)  lbPrev.onclick  = () => showAt(navIndex - 1);
  if (lbNext)  lbNext.onclick  = () => showAt(navIndex + 1);
  lightbox.onclick = e => { if (e.target === lightbox) closeLb(); };

  /* Teclado: Esc cierra, ← → navegan */
  if (_tfKeyHandler) document.removeEventListener('keydown', _tfKeyHandler);
  _tfKeyHandler = e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLb();
    if (e.key === 'ArrowLeft')  showAt(navIndex - 1);
    if (e.key === 'ArrowRight') showAt(navIndex + 1);
  };
  document.addEventListener('keydown', _tfKeyHandler);
}

function _highlightActiveProject() {
  document.querySelectorAll(
    '#children-nav-proyectos-group a, #children-nav-texts-group a, #children-nav-workshops-group a'
  ).forEach(a => {
    const isActive = _activeProjectUrl && a.dataset.url === _activeProjectUrl;
    a.style.color      = isActive ? '#3535c8' : '';
    a.style.fontWeight = isActive ? '500'     : '';
  });
}


/* ════════════════════════════════════════════════════════
   11. EXPLORATION MAP
   ────────────────────────────────────────────────────────
   ✏️ REDISEÑO: la grilla/círculos/imágenes PNG por categoría
   se reemplazaron por una única imagen de referencia (cover.jpg)
   con un ícono minimal por CADA entrada navegable del sitio
   (_allNavItems(): Projects, Graphics, Texts, Laboratories,
   Research), distribuidos en un anillo sobre la imagen —misma
   idea espacial de "mapa" que antes, pero ahora apuntando
   directo a cada pieza en vez de a categorías intermedias.

   · Cada ícono es un <button> real: accesible por teclado,
     con aria-label, y clicable/Enter para abrir el proyecto.
   · Desktop (hover real): pasar el mouse muestra un tooltip
     con título / año / categoría / técnica y agranda el ícono
     levemente. Clic abre el proyecto directo.
   · Touch (sin hover): el primer tap solo revela el tooltip
     (agrega .is-open); un segundo tap sobre el mismo ícono
     recién abre el proyecto — evita activaciones accidentales
     al recorrer el mapa con el dedo. Tocar fuera cierra el
     tooltip abierto.
   · Las posiciones son puramente porcentuales (sin canvas ni
     redibujado en resize): responden solas al tamaño del
     contenedor, tanto en desktop como en mobile.
════════════════════════════════════════════════════════ */
let _mapReady    = false;
let _currentView = 'bubbles';

/* true en dispositivos sin hover real (touch) — decide si el
   primer tap sobre un ícono revela el tooltip en vez de abrir
   el proyecto directamente. */
function _isTouchDevice() {
  return !window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

function _buildExplorationMap() {
  const layer = document.getElementById('map-icons-layer');
  if (!layer) return;
  layer.innerHTML = '';

  const items = _allNavItems().filter(it => it.url);
  const n = items.length;
  if (!n) return;

  items.forEach((item, i) => {
    /* Distribución en anillo: ángulo uniforme por ítem, radio
       elíptico como fracción del contenedor (responde solo al
       tamaño real gracias a que todo está en %). Clamps evitan
       que un ícono quede pegado al borde o tapado por el chrome
       del switch de vistas (arriba a la derecha). */
    const angle = (2 * Math.PI * i / n) - Math.PI / 2;
    let x = 0.5 + 0.40 * Math.cos(angle);
    let y = 0.53 + 0.36 * Math.sin(angle);
    x = Math.min(0.92, Math.max(0.08, x));
    y = Math.min(0.88, Math.max(0.16, y));

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'map-icon';
    btn.style.left = (x * 100) + '%';
    btn.style.top  = (y * 100) + '%';
    btn.setAttribute('aria-label', item.title);

    /* Clases de "flip" para que el tooltip nunca se corte contra
       el borde del contenedor: se abre hacia el lado con más
       espacio libre según en qué cuadrante cae el ícono. */
    btn.classList.add(y < 0.42 ? 'tip-below' : 'tip-above');
    btn.classList.add(x < 0.28 ? 'tip-right' : x > 0.72 ? 'tip-left' : 'tip-center');

    const metaLine = [item.year, item.categoryLabel].filter(Boolean).join(' · ');

    btn.innerHTML = `
      <span class="map-icon-index">${String(i + 1).padStart(2, '0')}</span>
      <span class="map-icon-tip" role="tooltip">
        <span class="map-icon-tip-title">${item.title}</span>
        ${metaLine ? `<span class="map-icon-tip-meta">${metaLine}</span>` : ''}
        ${item.tema ? `<span class="map-icon-tip-meta">${item.tema}</span>` : ''}
        <span class="map-icon-tip-cta">View project →</span>
      </span>`;

    btn.addEventListener('click', (e) => {
      if (_isTouchDevice() && !btn.classList.contains('is-open')) {
        e.preventDefault();
        document.querySelectorAll('.map-icon.is-open').forEach(el => {
          if (el !== btn) el.classList.remove('is-open');
        });
        btn.classList.add('is-open');
        return;
      }
      _openItem(item);
    });

    layer.appendChild(btn);
  });
}

/* Cierra cualquier tooltip abierto por tap al tocar fuera de un
   ícono del mapa (solo relevante en touch, pero inofensivo en
   desktop ya que ahí nada llega a tener .is-open). */
document.addEventListener('click', (e) => {
  if (!e.target.closest('.map-icon')) {
    document.querySelectorAll('.map-icon.is-open').forEach(el => el.classList.remove('is-open'));
  }
});

function initBubbles() {
  const container = document.getElementById('view-bubbles');
  if (!container) return;
  _buildExplorationMap();
  _mapReady = true;
}



function _makeEditorialRow(item) {
  const row = document.createElement(item.url ? 'button' : 'div');
  row.type = item.url ? 'button' : undefined;
  row.className = 'editorial-row';
  if (item.url) {
    row.dataset.clickable = 'true';
    row.onclick = () => _openItem(item);
  }

  const name = document.createElement('span');
  name.className = 'editorial-cell editorial-name';
  name.textContent = item.title;

  const cat = document.createElement('span');
  cat.className = 'editorial-cell editorial-category';
  cat.textContent = item.categoryLabel;

  const tema = document.createElement('span');
  tema.className = 'editorial-cell editorial-tema';
  tema.textContent = item.tema;

  const year = document.createElement('span');
  year.className = 'editorial-cell editorial-year';
  year.textContent = item.year || '';

  row.append(name, cat, tema, year);
  return row;
}

function buildHomeGrid() {
  const wrap = document.getElementById('home-grid');
  if (!wrap) return;
  wrap.innerHTML = '';

  /* Encabezado de columnas — mismas 4 columnas que cada fila,
     para que el usuario entienda qué representa cada dato. */
  const head = document.createElement('div');
  head.className = 'editorial-row editorial-head';
  ['Name', 'Category', 'Theme', 'Year'].forEach((label, i) => {
    const cell = document.createElement('span');
    cell.className = 'editorial-cell ' + ['editorial-name', 'editorial-category', 'editorial-tema', 'editorial-year'][i];
    cell.textContent = label;
    head.appendChild(cell);
  });
  wrap.appendChild(head);

  _allNavItems().forEach(item => wrap.appendChild(_makeEditorialRow(item)));
}

let _gridReady = false;

/* ── Alterna entre las 3 vistas del home: grid | bubbles | split(about) ── */
function setHomeView(v) {
  _currentView = v;

  const viewBubbles = document.getElementById('view-bubbles');
  const viewSplit   = document.getElementById('view-split');
  const viewGrid    = document.getElementById('view-grid');
  const btnBubbles  = document.getElementById('btn-bubbles');
  const btnSplit    = document.getElementById('btn-split');
  const btnGrid     = document.getElementById('btn-grid');

  if (!viewBubbles || !viewSplit) return;

  [viewBubbles, viewSplit, viewGrid].forEach(el => el && el.classList.remove('active'));
  [btnBubbles, btnSplit, btnGrid].forEach(el => el && el.classList.remove('active'));

  if (v === 'bubbles') {
    if (!_mapReady) initBubbles();
    viewBubbles.classList.add('active');
    if (btnBubbles) btnBubbles.classList.add('active');
  } else if (v === 'grid') {
    if (!_gridReady) { buildHomeGrid(); _gridReady = true; }
    if (viewGrid) viewGrid.classList.add('active');
    if (btnGrid) btnGrid.classList.add('active');
  } else {
    viewSplit.classList.add('active');
    if (btnSplit) btnSplit.classList.add('active');
  }
}

/* ════════════════════════════════════════════════════════
   12. RIGHT NAV
   ────────────────────────────────────────────────────────
   ✏️ Por ahora la barra lateral derecha queda con un texto
   placeholder fijo (#right-nav-label en el HTML), igual en
   todas las páginas del sitio — no depende del proyecto o
   sección activa. El generador aleatorio de gradientes que
   estaba acá se dejó pendiente para más adelante.
════════════════════════════════════════════════════════ */

/* ── Inicializa al cargar ── */
document.addEventListener('DOMContentLoaded', () => {
  setHomeView('bubbles');
  /* Si la página abierta directamente trae el grid de
     ThoughtForms (modo standalone), lo inicializa aquí.
     Cuando se abre embebida desde index.html, openProject()
     ya se encarga de llamar a _initTFGrid(). */
  _initTFGrid(document);
  /* Si la página de proyecto se abrió standalone (no embebida
     vía fetch), también necesita el botón flotante de scroll
     contextual y la navegación Next/Previous — openProject()
     ya se encarga de ambos cuando el portafolio la carga
     embebida. La entrada actual se identifica por el nombre de
     archivo de la URL (mismo mecanismo que usa el resto del
     sitio para hacer match contra _allNavItems()). */
  const splitEl = document.querySelector('.project-split');
  if (splitEl) {
    _initScrollHints(document);
    const fileName = window.location.pathname.split('/').pop();
    const match = _allNavItems().find(it => it.url && it.url.endsWith(fileName));
    if (match) {
      const main = document.getElementById('main');
      if (main) _buildProjectNav(main, match.url);
    }
  }
});