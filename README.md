# Camila S Caicedo — Portfolio

Sitio estático (HTML/CSS/JS puro, sin build step ni frameworks). Este README documenta la arquitectura y los cambios hechos sobre el sitio que ya tenías funcionando.

## 1. Arquitectura del sitio

```
/
├── index.html         ← shell del sitio: top-bar, left-nav, right-nav, bottom-bar + <main>
├── style.css           ← estilos globales del shell y de las páginas simples
├── i18n.js              ← diccionario ES/EN + motor de traducción (NUEVO)
├── main.js              ← datos de contenido (proyectos, textos, workshops, research,
│                           burbujas) + toda la lógica: navegación, nav search, filtros,
│                           reloj, nav acordeón, vista burbujas, carga de proyectos por fetch
├── Proyectos/
│   ├── proyectos.css    ← estilos de las páginas de proyecto (layout 2 columnas) y de
│   │                       la galería con lightbox (sección .tf-*, usada por Graphics)
│   ├── derivas.html      ← página de proyecto real
│   ├── qvorvm_sensing.html, morfologia_sintetica.html,
│   │   ecosistema_de_una_maquina.html, radio_frecuencia.html
│   │                     ← páginas de proyecto reales (no se me compartió su contenido,
│   │                       así que no fueron tocadas — deberían llevar el mismo <script
│   │                       src="../i18n.js"> agregado antes de main.js, ver más abajo)
│   └── _plantilla_proyecto.html  ← plantilla dummy para copiar al crear un proyecto nuevo
├── Graphics/
│   └── ThoughtForms.html ← página dummy de Graphics (grid + filtro por año + lightbox)
├── Texts/
│   └── EST.html, Fuego.html, Interespecie.html  ← web essays dummy (abren en pestaña nueva)
├── Research/
│   └── investigacion_ejemplo.html               ← entrada dummy de Research
├── Workshops/
│   └── wk.html                                  ← taller dummy
└── Imagen/, Font/                                ← assets (sin cambios)
```

### Cómo funciona la navegación (sin cambios de fondo)
- `index.html` define una sección `<section class="page">` por cada área del sitio y
  `main.js#navigate(key)` alterna cuál está `.active`, con una animación de entrada/salida.
- Los proyectos individuales NO son secciones fijas: `openProject(url)` hace `fetch()` del
  `.html` del proyecto, extrae el `<div class="project-split">` de adentro y lo inyecta en
  `#page-proyecto`. Por eso cada página de proyecto (`derivas.html`, etc.) funciona tanto
  standalone (si la abres directo) como embebida (cuando el portafolio la carga).
- Los arrays `projects` / `texts` / `workshops` / `graphics` / `researchItems` en `main.js`
  son la única fuente de datos: de ahí salen tanto las cards de las grillas como las ramas
  del nav lateral (`buildNavList()`).

## 2. Qué se hizo en esta iteración

Todo lo pedido en el `.md` de requisitos, sin tocar el layout visual (mismas columnas,
grillas, proporciones y breakpoints):

| # | Requisito | Dónde |
|---|-----------|-------|
| 1 | Comentarios explicando qué/por qué en código nuevo y modificado | Todos los archivos tocados |
| 2 | i18n ES/EN con toggle visible, sin recargar, con persistencia | `i18n.js` (nuevo) + botón `#lang-toggle` en `index.html` + atributos `data-i18n*` |
| 3 | Scrollbars invisibles en todo contenedor con scroll | Bloque nuevo al final de `style.css` (`#left-nav`, `#main`, `.split-text`, `.page-header`, `#nav-search-results`; las columnas de proyecto ya lo tenían en `proyectos.css`) |
| 4 | Buscador global: año + día + palabra clave + tag, combinables | `_matchesAllTokens()` en `main.js` (lógica AND por palabra) aplicada tanto al buscador de la navbar (`initNavSearch`) como al de la página Proyectos (`_renderProyectosGrid`) |
| 5 | Nav siempre visible + expandir/colapsar + acordeón (una rama mayor abierta a la vez) | `toggleGroup()` en `main.js`, usando `data-nav-group` en cada `<li>` de rama mayor |
| 6 | Reloj siempre en horario de Chile | `updateClock()` en `main.js`, usa `Intl.DateTimeFormat` con `timeZone: 'America/Santiago'` en vez de la hora local del navegador |
| Home | El segundo botón del toggle del home ya no muestra el grid: muestra el contenido de About (mismo layout de dos columnas) | `#view-split` en `index.html` |
| Dummies | Archivos placeholder listos para usar en cada carpeta | `Graphics/ThoughtForms.html`, `Texts/*.html`, `Research/investigacion_ejemplo.html`, `Workshops/wk.html`, `Proyectos/_plantilla_proyecto.html` |
| Web Essays / Research | Abren en pestaña nueva, sin hijos en el nav | Campo `newTab: true` en los items de `texts`; `researchItems` + `renderResearchList()` (lista agrupada por año) |

### Bug arreglado de paso
El `<li>` de **Graphics** tenía por error `id="nav-texts"` (duplicado con el `<li>` real de
Texts), lo que rompía el resaltado azul de esa sección al navegar. Se corrigió a
`id="nav-graphics"`. También se quitó un `</div>` suelto sin apertura en el top-bar.

## 3. Cómo agregar contenido (sin tocar código)

Todo sigue el mismo patrón de antes — editar arrays en `main.js`:

- **Proyecto nuevo**: copiar un bloque en `projects` (sección 1.1 de `main.js`), y copiar
  `Proyectos/_plantilla_proyecto.html` con el nombre que uses en `url`.
- **Web essay / Research nuevo**: copiar un bloque en `texts` o `researchItems`
  (recordar `newTab: true` en `texts`), y copiar cualquier archivo de `Texts/*.html` como
  plantilla.
- **Traducción nueva**: agregar la clave en AMBOS objetos (`es` y `en`) de `i18n.js`, y
  marcar el HTML con `data-i18n="tu_clave"` (o llamar `t('tu_clave')` desde JS si el texto
  se genera dinámicamente).
- **Descripciones de proyecto en inglés** (opcional): agregar un campo `desc_en` al
  proyecto en `main.js`; si no existe, se sigue mostrando `desc` (español) — este es el
  único punto de contenido dinámico que quedó pendiente de traducir automáticamente, ver
  sección 4.

## 5. Segunda iteración de cambios (refinamiento)

Sobre la base de la sección 2, se hicieron 4 ajustes puntuales pedidos después de la primera entrega:

| # | Pedido | Qué se hizo |
|---|--------|-------------|
| 1 | Página Projects con el layout exacto del spec (texto + 3 links de área a la izquierda, grid completo a la derecha, sub-secciones como filtro) | `page-proyectos` pasó a ser `split-page` (mismo patrón que Home/About). Los 3 chips de categoría ahora viven en la columna de texto como links verticales; el grid a la derecha muestra todos los proyectos sin filtro por defecto. Las categorías de `projects` en `main.js` se renombraron a `invisible-technologies` / `digital-ecologies` / `social-interfaces-laboratories` (antes eran `series`/`instalaciones`/etc., una taxonomía distinta) |
| 2 | Traductor no cubría todo el texto | Auditoría completa: se agregó `data-i18n` a la bio de About (en ambos lugares donde aparece: el toggle del Home y la página About real), a la lista de la página Texts (que además se volvió dinámica: se genera desde el array `texts` en vez de estar escrita a mano dos veces), a las etiquetas "retrato", al placeholder del right-nav, al bloque oculto legado del nav, y al `<title>` de la pestaña. Se verificó programáticamente que las 36 claves usadas en el HTML existen en ambos diccionarios (ES/EN) sin huecos |
| 3 | Círculos del home como la referencia (glow grandes = subsecciones, chicos = proyectos que contienen; grid de líneas en vez de puntos) | Rediseño completo de la vista de burbujas: `bubbleCategories` (3 círculos grandes con halo de color, radial gradient) representan las 3 áreas de trabajo; los proyectos ya NO se duplican a mano en las burbujas — se toman del mismo array `projects` y se distribuyen automáticamente en anillo alrededor del centro de su categoría (`_layoutProjectSatellites()`). El fondo de puntos se cambió por una grilla de líneas finas (`_drawGrid()`) |
| 4 | Tipografía más moderna, palo seco, tipo Apple/Futura, con juego tipográfico | Se reemplazó Red Hat Mono (monoespaciada) por un par de sans-serif geométricos: **Space Grotesk** para titulares/logo/nombres de proyecto (`--font-serif`) e **Inter** para cuerpo de texto y chrome de UI (`--font-mono`, nombre de variable conservado para no romper el resto del CSS). Cambio aplicado en los 9 archivos HTML del sitio |

### Cómo agregar una categoría nueva en el mapa de burbujas
Solo hace falta tocar `main.js`: agrega un bloque en `bubbleCategories` (sección 2) con una `key` nueva, usa esa misma `key` en el campo `category` de tus proyectos (sección 1.1), y agrega un chip nuevo en `index.html` (Projects) con ese `data-filter`. Los proyectos de esa categoría aparecen solos en su círculo — no hay que tocar las burbujas a mano.


## 6. Tercera iteración (ajustes puntuales — traductor, contraste, home, projects)

| # | Pedido | Qué se hizo |
|---|--------|-------------|
| 1 | Traductor no cubría todo el sitio | `i18n.js` expone ahora `applyI18n(root)`, reusable sobre cualquier nodo (no solo `document`). `main.js` la llama después de generar nav/cards/listas, y de nuevo cada vez que se abre un proyecto por fetch (`openProject()`) o cambia el idioma (evento `languagechange`, que ahora reconstruye nav, grids, listas de Texts/Research, home grid y mapa de burbujas). Las páginas standalone de Texts y Research también cargan `i18n.js` para traducir su link "volver al portafolio". |
| 2 | Detector automático de contraste | Nuevo `contrast.js`: mide luminancia de fondo efectivo vs. color de texto en pills, chips, tiles del grid, burbujas del mapa, etc.; si el contraste es pobre sobre fondo oscuro, agrega `.cw-inverted` (texto claro). Se re-ejecuta con `MutationObserver` (debounced), en resize y en cambio de idioma. Incluido en `index.html` y en todas las páginas de proyecto standalone. |
| 3 | 3ra opción en el switch del Home: "Grid de proyectos" | Nuevo botón `#btn-grid` + vista `#view-grid`. `buildHomeGrid()` en `main.js` junta TODAS las entradas del navbar (`projects`, `graphics`, `texts`, `workshops`, `researchItems`) en una sola cuadrícula: imagen (o color sólido si no hay), nombre, categoría, año. Imagen en blanco y negro por defecto, a color en hover (`.grid-tile-img`, transición 0.55s). |
| 4 | Exploration Map reestructurado | `bubbleWords` (plano) se reemplazó por `bubbleCategories` (las 5 categorías reales del navbar: Projects/Graphics/Texts/Laboratories/Research) + `_buildSatelliteBubbles()`, que genera automáticamente las burbujas hijas desde los mismos arrays de datos — sin duplicar títulos a mano. Cada ítem puede fijar `mapRx`/`mapRy`/`mapR` para posición manual; si no, se ubica en un anillo automático alrededor de su categoría. Las categorías sin página propia (Graphics, por ahora) no son clickeables. |
| 5 | Research / Texts sin contenido en sus páginas | Se agregó el array `researchItems` (antes no existía) y las funciones `renderTextsList()` / `renderResearchList()` (el HTML y CSS ya las esperaban, pero nunca se habían escrito). |
| 6 | Botón flotante de scroll debía ser contextual | `_initScrollHints()` ahora calcula overflow real (`scrollHeight` vs `clientHeight`) con `ResizeObserver` + eventos de carga de imágenes, y oculta el indicador (`.scroll-hint.no-overflow`) cuando el contenido ya cabe sin scroll. |
| 7 | Divisor sobrante en la columna de texto de proyecto | `Proyectos/derivas.html` tenía DOS bloques `.project-text` apilados (contenido en inglés y en español por separado), cada uno con su propio borde — eso generaba una línea divisoria de más. Se fusionaron en un solo bloque, con las dos versiones envueltas en `.i18n-en` / `.i18n-es` (nueva utilidad CSS en `style.css`: el idioma activo, `html[lang]`, decide cuál se muestra — mismo mecanismo que ya usa `setLanguage()`, sin JS adicional). Útil para cualquier proyecto futuro que tenga texto ya redactado en ambos idiomas. |

### Cómo agregar un ítem de Research
Igual que Texts: copia un bloque en `researchItems` (sección 1.4 de `main.js`) y copia `Research/investigacion_ejemplo.html` como plantilla.

### Cómo reposicionar una burbuja hija en el mapa de exploración
Agrega `mapRx` / `mapRy` (0–1) y opcionalmente `mapR` directamente al objeto del proyecto/entrada en su array de datos (`projects`, `graphics`, `texts`, `workshops`, `researchItems`). Si no los agregas, `_buildSatelliteBubbles()` la ubica sola en un anillo automático alrededor de su categoría.

### Cómo escribir un proyecto con texto en dos idiomas sin duplicar el borde
En vez de dos `<div class="project-text">` separados, usa uno solo con dos hijos:
```html
<div class="project-text">
  <div class="i18n-en"><p>English text…</p></div>
  <div class="i18n-es"><p>Texto en español…</p></div>
</div>
```

## 4. Pendiente / decisiones que necesitan tu OK

Para no inventar contenido, dejé fuera de esta iteración una cosa que el `.md` sugiere pero
que implica escribir contenido real que no tengo:

1. **Traducción de las descripciones de proyectos** (`desc`): el motor de i18n ya soporta
   un campo `desc_en` opcional por proyecto (ver sección 3), pero completar esos textos
   requiere que me pases (o redactes) la versión en inglés de cada descripción real; no
   quise inventarlas.
2. Las 4 páginas de proyecto reales que no me compartiste (`qvorvm_sensing.html`,
   `morfologia_sintetica.html`, `ecosistema_de_una_maquina.html`, `radio_frecuencia.html`)
   no fueron modificadas. Si quieres que el toggle de idioma y la tipografía nueva también
   les apliquen cuando se abren standalone (fuera del portafolio), agrégales esta línea
   antes de `<script src="../main.js">`, igual que en `derivas.html`, y actualiza el
   `<link>` de Google Fonts al mismo que usa `derivas.html`:
   ```html
   <script src="../i18n.js"></script>
   ```
3. Ya que `projects` ahora define las 3 categorías reales (`invisible-technologies`,
   `digital-ecologies`, `social-interfaces-laboratories`), revisa que la asignación que hice
   por proyecto tenga sentido para tu criterio curatorial — la hice por mi cuenta a partir
   de la temática de cada uno (ver comentario en `main.js` sección 1.1), y es fácil de
   cambiar: solo hay que editar el campo `category` de cada proyecto.

