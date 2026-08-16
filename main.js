/* ════════════════════════════════════════════════════════
   PORTAFOLIO — main.js
   ────────────────────────────────────────────────────────
   ÍNDICE:
   1. DATOS DE PROYECTOS     ← edita para agregar proyectos al grid
   2. BURBUJAS DE INTERESES  ← edita para la vista del home
   3. MAPA DE PÁGINAS
   4. NAVEGACIÓN + TRANSICIONES
   5. SLIDER DE IMÁGENES
   6. GRUPOS COLAPSABLES
   7. MENÚ MÓVIL
   8. RELOJ
   9. GENERACIÓN DE TARJETAS (no editar)
   10. CARGA DE PROYECTOS (no editar)
   11. VISTA BURBUJAS — lógica de dibujo (no editar)
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
    url: 'Proyectos/radio_frecuencia.html',
  },

  {
    title:    'Quorum Sensing',
    category: 'invisible-technologies',
    tag:      'IA essay',
    color:    '#1111111f',
    year:     '2025 - ongoing',
    desc:     'Registro del paisaje ribereño y sus memorias de habitación.',
    images:   [],
    url: 'Proyectos/qvorvm_sensing.html',
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
    url: 'Proyectos/ecosistema_de_una_maquina.html',
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
    tag:      'taller',
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
const texts = [
  {
    title: 'Escuela de sensibilización tecnológica',
    tag:   'Web Essay',
    color: '#ffdefd',
    year:  '2025',
    url:   'Texts/EST.html', // opcional
  },
  {
    title: 'Encuentros sobre el fuego',
    tag:   'Laboratory',
    color: '#ffdefd',
    year:  '2026',
    url:   'Texts/Fuego.html',
  },
  {
    title: 'Laboratorios interespecies- cuerpos y ecologías',
    tag:   'Laboratory',
    color: '#ffdefd',
    year:  '2026',
    url:   'Texts/Interespecie.html',
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
    title: '[Título de investigación de ejemplo]',
    tag:   'Research',
    color: '#d8e8ff',
    year:  '2026',
    url:   'Research/investigacion_ejemplo.html',
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

/* Genera la lista de la página Texts (ul#texts-list) a partir
   del array `texts` — antes esta lista se quedaba vacía porque
   la función no existía aún (el HTML y los comentarios en
   index.html ya la referenciaban). */
function renderTextsList() {
  const ul = document.getElementById('texts-list');
  if (!ul) return;
  ul.innerHTML = '';
  texts.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.url || '#';
    a.target = '_blank';
    a.rel = 'noopener';
    a.style.color = 'inherit';
    a.style.textDecoration = 'none';
    a.textContent = item.title + (item.year ? ` — ${item.year}` : '');
    li.appendChild(a);
    ul.appendChild(li);
  });
}

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
   2. EXPLORATION MAP — categorías del Nav Bar
   ────────────────────────────────────────────────────────
   Vista principal del home. Cada categoría principal del Nav
   Bar se representa como: imagen → números de sus hijos →
   gradiente (ver _buildExplorationOverlay() en la sección 11).
   La correspondencia con el Nav Bar es 1 a 1: exactamente las
   5 categorías principales (`pageMap`), ni una más ni una
   menos, y los números debajo de cada imagen son exactamente
   los hijos de esa categoría (los mismos arrays que alimentan
   `buildNavProjects()`, `buildNavGraphics()`, etc.).

   CAMPOS de bubbleCategories:
   · key      → debe coincidir con el catKey usado en los
                grupos de _categoryChildren() más abajo
   · word     → clave i18n del nombre de la categoría
   · pageKey  → clave de pageMap; si es null (Graphics, sin
                página propia todavía) la imagen/label no
                se comporta como link, solo como etiqueta
   · rx / ry  → posición (0–1) dentro del mapa en desktop
   · hue      → tono base (0–360) del círculo de gradiente
                de esa categoría, para poder distinguirlas
   · img      → (opcional) ruta a una imagen PNG real. Si no
                se define, se genera un placeholder con
                textura orgánica (ver _categoryTexture() en
                la sección 11) — basta con agregar `img` acá
                para reemplazarlo por fotografía real.
════════════════════════════════════════════════════════ */
const bubbleCategories = [
  {
    key: 'proyectos', word: 'map_cat_projects', fallback: 'PROJECTS',
    pageKey: 'proyectos',
    rx: 0.16, ry: 0.32, r: 50,
    img: 'Assets/01_home.png',
  },
  {
    key: 'graphics', word: 'map_cat_graphics', fallback: 'GRAPHICS',
    pageKey: null,
    rx: 0.50, ry: 0.14,
    img: 'Assets/04_home.png',
  },
  {
    key: 'texts', word: 'map_cat_texts', fallback: 'TEXTS',
    pageKey: 'texts',
    rx: 0.84, ry: 0.26,
    img: 'Assets/02_home.png',
  },
  {
    key: 'workshops', word: 'map_cat_workshops', fallback: 'LABORATORIES',
    pageKey: 'workshops',
    rx: 0.37, ry: 0.72,
    img: 'Assets/03_home.png',
  },
  {
    key: 'research', word: 'map_cat_research', fallback: 'RESEARCH',
    pageKey: 'research', hue: 255,
    rx: 0.72, ry: 0.74,
    img: 'Imagen/exploration/research.png',
  },
];

/* Devuelve, para una categoría, la lista de hijos que SÍ tienen
   página propia (mismos arrays que usa el Nav Bar) — cada uno
   se numera 01, 02, 03… debajo de la imagen de su categoría.
   Una sola fuente de verdad: no se duplica nada a mano. */
function _categoryChildren(catKey) {
  const map = {
    proyectos: projects,
    graphics:  graphics,
    texts:     texts,
    workshops: workshops,
    research:  researchItems,
  };
  return (map[catKey] || []).filter(item => item.url);
}

/* ════════════════════════════════════════════════════════
   3. MAPA DE PÁGINAS
   ────────────────────────────────────────────────────────
   ✏️  Si agregas una sección nueva:
   1. Crea <section id="page-NUEVA" class="page"> en index.html
   2. Agrega <li> en el nav con onclick="navigate('nueva')"
   3. Añade aquí: nueva: 'page-nueva',
════════════════════════════════════════════════════════ */
const pageMap = {
  home:      'page-home',
  about:     'page-about',
  texts:     'page-texts',
  graphics:  'page-graphics',
  workshops: 'page-workshops',
  research:  'page-research',
  proyectos: 'page-proyectos',
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
   5. SLIDER DE IMÁGENES EN CARDS
════════════════════════════════════════════════════════ */
function initSlider(card, images) {
  const track   = card.querySelector('.slider-track');
  const dotsEl  = card.querySelector('.slider-dots');
  const btnPrev = card.querySelector('.slider-prev');
  const btnNext = card.querySelector('.slider-next');
  let current   = 0;

  function goTo(index) {
    current = ((index % images.length) + images.length) % images.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsEl.querySelectorAll('.dot').forEach((d, i) =>
      d.classList.toggle('active', i === current)
    );
  }

  if (btnPrev) btnPrev.addEventListener('click', e => { e.stopPropagation(); goTo(current - 1); });
  if (btnNext) btnNext.addEventListener('click', e => { e.stopPropagation(); goTo(current + 1); });

  images.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', e => { e.stopPropagation(); goTo(i); });
    dotsEl.appendChild(dot);
  });

  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
  });
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
   9. GENERACIÓN DE TARJETAS
   No editar.
════════════════════════════════════════════════════════ */
/* Quita tildes/diacríticos para que la búsqueda no distinga
   "fotografia" de "fotografía". Se usa tanto al construir las
   cards como al leer lo que la persona escribe en el buscador. */
function _normalizeText(str) {
  return (str || '')
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function makeCard(p) {
  const card = document.createElement('article');
  card.className = 'card';
  card.dataset.category = p.category;

  const searchableBits = [
    p.title,
    p.desc,
    p.year,
    p.category,
    p.tag,
    ...(p.tags || []).map(t => t.label),
  ];
  card.dataset.search = _normalizeText(searchableBits.filter(Boolean).join(' '));

  if (p.url) {
    card.onclick = () => openProject(p.url, p.title, p.category);
    card.style.cursor = 'pointer';
  } else {
    card.onclick = () => filterCards(p.category);
    card.style.cursor = 'pointer';
  }

  const hasImages = Array.isArray(p.images) && p.images.length > 0;
  const hasSlider = hasImages && p.images.length > 1;

  let thumbHTML = '';
  if (hasImages) {
    const slides = p.images.map(src =>
      `<div class="slide"><img src="${src}" alt="${p.title}" loading="lazy"></div>`
    ).join('');
    const controls = hasSlider
      ? `<button class="slider-prev" aria-label="Anterior">‹</button>
         <button class="slider-next" aria-label="Siguiente">›</button>`
      : '';
    thumbHTML = `
      <div class="card-slider">
        <div class="slider-track">${slides}</div>
        ${controls}
        <div class="slider-dots"></div>
      </div>`;
  } else {
    thumbHTML = `
      <div class="card-thumb">
        <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <path d="M21 15l-5-5L5 21"/>
        </svg>
        <span>${t('card_no_image')}</span>
      </div>`;
  }

  const tagsHTML = (p.tags || [])
    .map(tg => `<span class="pill" style="background:${tg.color}">${tg.label}</span>`)
    .join('');

  card.innerHTML = `
    ${thumbHTML}
    <div class="card-body">
      <div class="tag-row">${tagsHTML}</div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      ${p.url ? `<span class="card-link-hint">${t('card_view_project')}</span>` : ''}
      <span class="card-year">${p.year}</span>
    </div>
  `;

  if (hasSlider) initSlider(card, p.images);
  return card;
}

function filterCards(category) {
  const pageEl = document.getElementById('page-proyectos');
  if (pageEl && !pageEl.classList.contains('active')) {
    navigate('proyectos');
    setTimeout(() => applyFilter(category), 380);
  } else {
    applyFilter(category);
  }
}

/* Estado actual del filtro por categoría y del buscador.
   _renderProyectosGrid() aplica ambos a la vez sobre las cards. */
let _activeCategory = 'all';
let _searchQuery     = '';

/* ════════════════════════════════════════════════════════
   TABS DE PROJECTS — explicación conceptual por área
   ────────────────────────────────────────────────────────
   Texto específico por categoría (no genérico): ayuda a
   entender qué distingue a cada una dentro de la práctica,
   no solo repite el nombre del filtro. Se muestra en
   #tab-intro cada vez que se selecciona una tab (ver
   applyFilter() más abajo).
════════════════════════════════════════════════════════ */
const TAB_INTROS = {
  all: 'Tres áreas de trabajo atraviesan mi práctica. Cada una agrupa proyectos con una pregunta o método en común — selecciona una para ver de qué se trata y filtrar la grilla.',
  'invisible-technologies': 'Proyectos sobre lo que opera sin verse: señales, datos, infraestructuras y sistemas de sensado o inteligencia artificial que median la experiencia por debajo de la percepción cotidiana. La pregunta común: cómo se hace visible —o se deja sentir— una tecnología que normalmente no se nota.',
  'digital-ecologies': 'Proyectos que cruzan ecología y medios digitales: simulaciones, paisajes sonoros y formas de vida sintética. Tratan lo digital como un ecosistema más, con sus propios ciclos, dependencias y relaciones con el entorno físico que representa o extiende.',
  'social-interfaces-laboratories': 'Práctica relacional y situada: trabajo de campo, intervención en espacio público y colaboración comunitaria. Aquí la tecnología —o el dispositivo, o el material— funciona como interfaz entre personas, territorio y memoria compartida.',
};

function applyFilter(category) {
  _activeCategory = category;
  document.querySelectorAll('.chip').forEach(btn => {
    const isActive = btn.dataset.filter === category;
    btn.classList.toggle('active', isActive);
    /* role="tab": refleja el estado seleccionado para lectores
       de pantalla, no solo visualmente. */
    if (btn.getAttribute('role') === 'tab') btn.setAttribute('aria-selected', String(isActive));
  });

  const intro = document.getElementById('tab-intro');
  if (intro) intro.textContent = TAB_INTROS[category] || TAB_INTROS.all;

  _renderProyectosGrid();
}

function _renderProyectosGrid() {
  const cards = document.querySelectorAll('#grid-proyectos .card');
  cards.forEach(c => {
    const matchesCategory = _activeCategory === 'all' || c.dataset.category === _activeCategory;
    const matchesSearch   = !_searchQuery || (c.dataset.search || '').includes(_searchQuery);
    c.style.display = (matchesCategory && matchesSearch) ? '' : 'none';
  });
}

/* ════════════════════════════════════════════════════════
   BUSCADOR POR PALABRA CLAVE (página Proyectos)
   ────────────────────────────────────────────────────────
   Filtra sobre lo ya generado en #grid-proyectos buscando en
   título, tags, descripción, año y categoría (sin tildes).
   Se combina con el chip de categoría activo.
════════════════════════════════════════════════════════ */
function initSearch() {
  const input = document.getElementById('search-proyectos');
  if (!input) return;
  input.addEventListener('input', () => {
    _searchQuery = _normalizeText(input.value.trim());
    _renderProyectosGrid();
  });
}

initNavSearch();   // ← agrega esta línea

/* ════════════════════════════════════════════════════════
   BUSCADOR POR PALABRA CLAVE (NAV BAR)
   ────────────────────────────────────────────────────────
════════════════════════════════════════════════════════ */

function initNavSearch() {
  const input   = document.getElementById('nav-search-input');
  const results = document.getElementById('nav-search-results');
  if (!input || !results) return;

  // Junta todo lo que tiene título + url en un solo arreglo
  const allItems = [
    ...projects.map(p => ({ title: p.title, url: p.url, category: p.category })),
    ...texts.map(t => ({ title: t.title, url: t.url, category: '' })),
    ...workshops.map(w => ({ title: w.title, url: w.url, category: '' })),
  ];

  input.addEventListener('input', () => {
    const q = _normalizeText(input.value.trim());
    results.innerHTML = '';
    if (!q) { results.classList.remove('open'); return; }

    const matches = allItems.filter(item =>
      item.url && _normalizeText(item.title).includes(q)
    );

    matches.forEach(item => {
      const li = document.createElement('div');
      li.className = 'nav-search-item';
      li.textContent = item.title;
      li.onclick = () => {
        openProject(item.url, item.title, item.category);
        input.value = '';
        results.innerHTML = '';
        results.classList.remove('open');
      };
      results.appendChild(li);
    });

    results.classList.toggle('open', matches.length > 0);
  });
}

/* ════════════════════════════════════════════════════════
   9.1 CONSTRUCCIÓN GENÉRICA DE LISTAS DEL NAV
   ────────────────────────────────────────────────────────
   Construye los <li> hijos de un grupo del nav (Proyectos,
   Textos o Workshops) a partir de un array de datos, y
   actualiza el contador "(n)" del grupo correspondiente.

   · Si el item tiene `year`, se muestra "Título — Año".
   · Si el item tiene `url`, el click abre esa página con
     openProject() (igual que un proyecto).
   · Si no tiene `url` pero sí `category`, el click filtra
     el grid de proyectos por esa categoría.
   · Si no tiene ninguna de las dos, el click navega a
     `fallbackPage` (ej: 'texts', 'workshops').
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

function buildNavList(ulSelector, items, fallbackPage, countId) {
  const ul = document.querySelector(ulSelector);
  if (ul) {
    ul.innerHTML = '';
    items.forEach((item, i) => {
      const li = document.createElement('li');
      li.className = 'nav-branch' + (i === items.length - 1 ? ' last' : '');

      const a = document.createElement('a');
      a.href = '#';
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

      if (item.url) {
        a.onclick = (e) => { e.preventDefault(); openProject(item.url, item.title, item.category || ''); };
      } else if (item.category) {
        a.onclick = (e) => { e.preventDefault(); filterCards(item.category); };
      } else {
        a.onclick = (e) => { e.preventDefault(); navigate(fallbackPage); };
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

function buildNavProjects()  { buildNavList('#children-nav-proyectos-group', projects,  'proyectos', 'count-proyectos'); }
function buildNavGraphics()  { buildNavList('#children-nav-graphics-group',     graphics,     'graphics',     'count-graphics'); }
function buildNavTexts()     { buildNavList('#children-nav-texts-group',     texts,     'texts',     'count-texts'); }
function buildNavWorkshops() { buildNavList('#children-nav-workshops-group', workshops, 'workshops', 'count-workshops'); }

function populateGrids() {
  /* Mostramos lo más reciente primero. Como cada proyecto/
     workshop nuevo se pega al FINAL del array (ver comentarios
     en la sección 1), invertimos el orden solo para mostrarlo:
     el nav y demás listas siguen el orden del array tal cual. */
  const projectsByRecent  = [...projects].reverse();
  const workshopsByRecent = [...workshops].reverse();

  const grid = document.getElementById('grid-proyectos');
  if (grid) projectsByRecent.forEach(p => grid.appendChild(makeCard(p)));

  const gridWorkshops = document.getElementById('grid-workshops');
  if (gridWorkshops) workshopsByRecent.forEach(p => gridWorkshops.appendChild(makeCard(p)));
}



function initFilterChips() {
  document.querySelectorAll('.chip').forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
  });
}

populateGrids();
buildNavProjects();
buildNavGraphics();
buildNavTexts();
buildNavWorkshops();
initFilterChips();
/* Texto introductorio inicial de la tab "Todos" (ver TAB_INTROS) */
{
  const introEl = document.getElementById('tab-intro');
  if (introEl) introEl.textContent = TAB_INTROS.all;
}
initSearch();
renderTextsList();
renderResearchList();

/* Aplica los textos fijos (data-i18n) a todo lo que main.js
   acaba de generar (cards, nav, listas). `applyI18n` vive en
   i18n.js, que se carga antes que este archivo. Ya no hay
   selector de idioma, así que esto corre una sola vez. */
if (typeof applyI18n === 'function') applyI18n(document);
if (typeof applyContrastAuto === 'function') applyContrastAuto(document);

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const filter = params.get('filter');
  const page   = params.get('page');
  if (filter) {
    navigate('proyectos');
    setTimeout(() => applyFilter(filter), 50);
  } else if (page && pageMap[page]) {
    navigate(page);
  }
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
    if (!res.ok) throw new Error('No se pudo cargar el proyecto');
    const html = await res.text();

    const parser = new DOMParser();
    const doc    = parser.parseFromString(html, 'text/html');
    const frag   = doc.querySelector('.project-split');

    if (!frag) {
      container.innerHTML = `<div class="content-block"><p>No se encontró contenido del proyecto.</p></div>`;
      return;
    }

    frag.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (href && href.includes('index.html')) {
        a.href = '#';
        const target = new URL(href, window.location.href);
        const pageParam   = target.searchParams.get('page');
        const filterParam = target.searchParams.get('filter');
        a.onclick = (e) => {
          e.preventDefault();
          if (pageParam && pageMap[pageParam]) navigate(pageParam);
          else if (filterParam) { navigate('proyectos'); setTimeout(() => applyFilter(filterParam), 380); }
          else navigate('proyectos');
        };
      } else if (href && href.endsWith('.html') && !href.startsWith('http')) {
        const matchedProject = projects.find(p => p.url && p.url.includes(href.split('/').pop()));
        if (matchedProject) {
          a.href = '#';
          a.onclick = (e) => {
            e.preventDefault();
            openProject(matchedProject.url, matchedProject.title, matchedProject.category);
          };
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

    /* ✏️ El fragmento recién inyectado puede traer sus propios
       data-i18n (o bloques .i18n-es/.i18n-en) y colores dinámicos
       que necesitan el chequeo de contraste — se aplican acá para
       que el traductor y el detector de contraste cubran también
       las páginas de proyecto cargadas por fetch. */
    if (typeof applyI18n === 'function') applyI18n(container);
    if (typeof applyContrastAuto === 'function') applyContrastAuto(container);

  } catch (err) {
    container.innerHTML = `
      <div class="content-block">
        <p style="color:#e87c5a">Error al cargar el proyecto.</p>
        <p class="muted">${err.message}</p>
      </div>`;
  }
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
   11. EXPLORATION MAP — construcción del overlay
   ────────────────────────────────────────────────────────
   La cuadrícula de fondo se sigue dibujando en <canvas> tal
   como antes (_drawGrid, sin cambios). Las categorías ya NO
   se dibujan en el canvas: ahora son elementos HTML reales
   (imagen + label + números + gradiente) en
   #bubble-categories-overlay, construidos por
   _buildExplorationOverlay() — esto permite usar <img>
   verdaderas, mejor accesibilidad (son <a>/<button> reales)
   y que los números de hijos sean clicables uno por uno.
════════════════════════════════════════════════════════ */
let _bubblesReady = false;
let _currentView  = 'bubbles';

/* Dibuja la cuadrícula de fondo (líneas finas sobre blanco).
   No editar — se mantiene igual que antes del rediseño. */
function _drawGrid(ctx, W, H) {
  const spacing = 24;
  ctx.save();
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.07)';
  ctx.lineWidth = 0.8;

  for (let x = 0; x <= W; x += spacing) {
    ctx.beginPath();
    ctx.moveTo(x + 0.5, 0);
    ctx.lineTo(x + 0.5, H);
    ctx.stroke();
  }
  for (let y = 0; y <= H; y += spacing) {
    ctx.beginPath();
    ctx.moveTo(0, y + 0.5);
    ctx.lineTo(W, y + 0.5);
    ctx.stroke();
  }
  ctx.restore();
}

/* ── Placeholder de imagen por categoría ──
   Genera una textura orgánica (blotches irregulares, look de
   "muestra de material") en un canvas offscreen y la devuelve
   como data URL PNG — así cada categoría tiene una <img> PNG
   real aunque todavía no haya fotografía propia. Determinístico
   por `seed` (el hue de la categoría) para que no cambie entre
   renders. ✏️ Para usar una foto real, basta con agregar el
   campo `img: 'ruta/a/imagen.png'` al objeto de la categoría en
   bubbleCategories (sección 2) — si existe, se usa esa en vez
   de generar el placeholder. */
function _categoryTexture(hue, size = 320) {
  const canvas = document.createElement('canvas');
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = `hsl(${hue}, 18%, 93%)`;
  ctx.fillRect(0, 0, size, size);

  /* PRNG determinístico simple (mismo hue → mismo resultado) */
  let seed = hue * 9301 + 49297;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  const blotches = 9;
  for (let i = 0; i < blotches; i++) {
    const cx = rand() * size, cy = rand() * size;
    const r  = size * (0.10 + rand() * 0.22);
    const l  = 30 + rand() * 45;
    const s  = 12 + rand() * 30;
    ctx.beginPath();
    ctx.fillStyle = `hsla(${(hue + i * 17) % 360}, ${s}%, ${l}%, ${0.5 + rand() * 0.4})`;
    ctx.moveTo(cx + r, cy);
    const points = 7;
    for (let p = 1; p <= points; p++) {
      const ang = (p / points) * Math.PI * 2;
      const rr  = r * (0.7 + rand() * 0.5);
      ctx.lineTo(cx + Math.cos(ang) * rr, cy + Math.sin(ang) * rr);
    }
    ctx.closePath();
    ctx.fill();
  }
  return canvas.toDataURL('image/png');
}

/* Construye el overlay HTML del Exploration Map: por cada
   categoría del Nav Bar → gradiente (detrás) + imagen + label,
   números de hijos y líneas que conectan las categorías entre
   sí. Reemplaza por completo el contenido anterior en cada
   llamada (recreado en cada resize). */
function _buildExplorationOverlay(isMobile) {
  const overlay = document.getElementById('bubble-categories-overlay');
  if (!overlay) return;
  overlay.innerHTML = '';
  overlay.classList.toggle('is-mobile', isMobile);

  /* Líneas que interconectan las categorías entre sí (solo en
     desktop, donde las posiciones son absolutas rx/ry). Van en
     un <svg> propio, debajo de los bloques, para que no tapen
     ni imágenes ni texto. */
  let svg = null;
  if (!isMobile) {
    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'category-connections');
    svg.setAttribute('preserveAspectRatio', 'none');
    overlay.appendChild(svg);
  }

  bubbleCategories.forEach((cat, ci) => {
    const children = _categoryChildren(cat.key);

    const block = document.createElement('div');
    block.className = 'category-block';
    if (!isMobile) {
      block.style.left = (cat.rx * 100) + '%';
      block.style.top  = (cat.ry * 100) + '%';
    }

    /* Contenedor imagen+gradiente: el gradiente queda DETRÁS de
       la imagen, como un halo que asoma alrededor del recuadro
       (mismo centro, más grande, z-index menor). */
    const tileStack = document.createElement('div');
    tileStack.className = 'category-tile-stack';

    const gradient = document.createElement('div');
    gradient.className = 'category-gradient';
    gradient.style.background =
      `radial-gradient(circle at 35% 30%, hsl(${cat.hue}, 90%, 78%), hsl(${(cat.hue + 40) % 360}, 85%, 62%) 60%, hsl(${(cat.hue + 80) % 360}, 70%, 45%) 100%)`;
    tileStack.appendChild(gradient);

    /* Imagen (real si `cat.img` existe, si no, placeholder generado).
       Si `cat.img` apunta a un archivo que aún no subiste, cae
       automáticamente en el placeholder para no mostrar un ícono
       de imagen rota. */
    const img = document.createElement('img');
    img.className = 'category-tile';
    img.src = cat.img || _categoryTexture(cat.hue);
    img.alt = t(cat.word) || cat.fallback;
    img.loading = 'lazy';
    if (cat.img) {
      img.onerror = () => { img.onerror = null; img.src = _categoryTexture(cat.hue); };
    }

    /* Label de la categoría, integrado sobre la imagen con fondo
       negro para legibilidad (pedido explícito del spec). */
    const label = document.createElement('div');
    label.className = 'category-label';
    label.textContent = t(cat.word) || cat.fallback;

    const targetId = cat.pageKey && pageMap[cat.pageKey];
    const hasPage  = targetId && document.getElementById(targetId);
    const tileWrap = document.createElement('div');
    tileWrap.className = 'category-tile-wrap';
    if (hasPage) {
      tileWrap.classList.add('is-link');
      tileWrap.onclick = () => navigate(cat.pageKey);
      tileWrap.setAttribute('role', 'button');
      tileWrap.tabIndex = 0;
      tileWrap.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate(cat.pageKey); }
      });
    } else {
      tileWrap.classList.add('bubble-no-link');
    }
    tileWrap.appendChild(img);
    tileWrap.appendChild(label);
    tileStack.appendChild(tileWrap);
    block.appendChild(tileStack);

    /* Números de los hijos — uno por cada elemento real de esa
       categoría en el Nav Bar, en el mismo orden. Cada número es
       clicable y abre su proyecto/entrada correspondiente. */
    if (children.length) {
      const numbers = document.createElement('div');
      numbers.className = 'category-numbers';
      children.forEach((child, i) => {
        const n = document.createElement('button');
        n.type = 'button';
        n.className = 'category-number';
        n.textContent = String(i + 1).padStart(2, '0');
        n.title = child.title;
        n.setAttribute('aria-label', child.title);
        n.onclick = () => openProject(child.url, child.title, t(cat.word) || cat.fallback);
        numbers.appendChild(n);
      });
      block.appendChild(numbers);
    }

    overlay.appendChild(block);
  });

  /* Dibuja las líneas de conexión una vez que los bloques ya
     están posicionados (rx/ry en % del contenedor, así que las
     líneas se calculan en las mismas coordenadas relativas y
     quedan bien incluso si el contenedor cambia de tamaño). */
  if (svg && !isMobile) {
    svg.setAttribute('viewBox', '0 0 100 100');
  const pairs = [
  ['proyectos', 'graphics'],
  ['graphics', 'research'],
  ['research', 'texts'],
  ['proyectos', 'workshops'],
  
];
pairs.forEach(([keyA, keyB]) => {
  const a = bubbleCategories.find(c => c.key === keyA);
  const b = bubbleCategories.find(c => c.key === keyB);
  if (!a || !b) return;
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', a.rx * 100); line.setAttribute('y1', a.ry * 100);
  line.setAttribute('x2', b.rx * 100); line.setAttribute('y2', b.ry * 100);
  line.setAttribute('vector-effect', 'non-scaling-stroke');
  svg.appendChild(line);
});
    
  }
}

function initBubbles() {
  const container = document.getElementById('view-bubbles');
  if (!container) return;

  const canvas = document.getElementById('bubble-canvas');
  if (!canvas) return;

  const W = container.offsetWidth;
  const H = container.offsetHeight;
  if (W === 0 || H === 0) return;

  canvas.width  = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  _drawGrid(ctx, W, H);

  /* Mobile: el overlay pasa a columna estática (ver CSS), así
     que las posiciones rx/ry ya no aplican — se listan las 5
     categorías en orden fijo, priorizando legibilidad sobre
     mantener la posición exacta de desktop (pedido explícito). */
  const isMobile = W < 700;
  _buildExplorationOverlay(isMobile);

  _bubblesReady = true;
}


/* ════════════════════════════════════════════════════════
   HOME — VISTA "ÍNDICE" (3ra opción del switch, antes "grid")
   ────────────────────────────────────────────────────────
   ✏️ CAMBIO: pasó de galería de imágenes a lista/índice
   editorial (una fila por entrada: nombre · categoría · tema
   · año), inspirada en un listado de programas académicos.
   Junta TODAS las entradas del navbar salvo About (Projects,
   Graphics, Texts, Laboratories, Research) — una sola fuente
   de verdad, sin duplicar nada.
════════════════════════════════════════════════════════ */
function _allNavItems() {
  return [
    ...projects.map(p => ({ title: p.title, categoryLabel: t('nav_projects'), tema: p.tag || '—', year: p.year, url: p.url })),
    ...graphics.map(g => ({ title: g.title, categoryLabel: t('nav_graphics'), tema: g.tag || '—', year: g.year, url: g.url })),
    ...texts.map(x => ({ title: x.title, categoryLabel: t('nav_texts'), tema: x.tag || '—', year: x.year, url: x.url })),
    ...workshops.map(w => ({ title: w.title, categoryLabel: t('nav_workshops'), tema: w.tag || '—', year: w.year, url: w.url })),
    ...researchItems.map(r => ({ title: r.title, categoryLabel: t('nav_research'), tema: r.tag || '—', year: r.year, url: r.url })),
  ];
}

/* Una fila del índice: nombre · categoría · tema · año.
   Clicable solo si tiene `url` (todas las entradas actuales
   lo tienen, pero se deja el chequeo por si se agrega una sin
   página propia en el futuro). */
function _makeEditorialRow(item) {
  const row = document.createElement(item.url ? 'button' : 'div');
  row.type = item.url ? 'button' : undefined;
  row.className = 'editorial-row';
  if (item.url) {
    row.dataset.clickable = 'true';
    row.onclick = () => openProject(item.url, item.title, item.categoryLabel);
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
  ['Nombre', 'Categoría', 'Tema', 'Año'].forEach((label, i) => {
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
    if (!_bubblesReady) initBubbles();
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

/* ── Redibuja al cambiar el tamaño de ventana ── */
let _resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(_resizeTimer);
  _resizeTimer = setTimeout(() => {
    _bubblesReady = false;
    if (_currentView === 'bubbles') initBubbles();
  }, 150);
});

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
     contextual — openProject() ya lo hace por su cuenta cuando
     el portafolio la carga embebida. */
  if (document.querySelector('.project-col-text, .project-col-images')) {
    _initScrollHints(document);
  }
});