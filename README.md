# GAP Programming — Sitio oficial

Sitio estático y responsive hecho con HTML, CSS y JavaScript. No necesita instalar dependencias ni compilar.

## Estructura

```
gap-programming-web/
├── index.html          Página única con todas las secciones
├── favicon.ico         Favicon (16, 32 y 48 px)
├── css/
│   └── styles.css      Estilos del sitio
├── js/
│   ├── app.js          Menú, contacto, formulario, filtros del portafolio y videos
│   └── config.js       Datos de contacto (WhatsApp, email, Instagram, Formspree)
├── img/                Logo, favicons, capturas y portadas del portafolio
└── assets/             Videos de las demos (MP4)
```

## Ejecutar localmente

No abras `index.html` con doble clic: algunos navegadores bloquean los videos y otros recursos cuando la página se abre como archivo local. Conviene servir la carpeta con un servidor local:

- **VS Code:** instalá la extensión *Live Server*, hacé clic derecho en `index.html` y elegí *Open with Live Server*.
- **Node.js:** desde la carpeta del proyecto, ejecutá `npx serve .` y abrí la dirección que aparece en la terminal.
- **Python:** desde la carpeta del proyecto, ejecutá `python -m http.server 8000` y abrí `http://localhost:8000`.

## Datos de contacto

Editá `js/config.js`:

- `whatsapp`: número internacional sin símbolos ni espacios, por ejemplo `549381XXXXXXXX`.
- `email`: correo de contacto.
- `instagram`: URL completa del perfil (si queda vacío, el enlace se oculta).
- `formspreeId`: **solo** el ID del formulario, por ejemplo `abcdefgh`, no la URL completa.
- `mensajeWhatsapp`: texto que se precarga al abrir WhatsApp.

Si un dato queda vacío o es inválido, su enlace se oculta y el formulario no envía nada. No se simula un envío exitoso.

### Formspree

1. Creá un formulario en https://formspree.io y verificá el correo receptor.
2. Copiá el ID que aparece después de `/f/`.
3. Pegalo en `formspreeId`, dentro de `js/config.js`.
4. Hacé un envío de prueba y revisá el panel de Formspree y el correo.

## Portafolio

La sección `#proyectos` de `index.html` tiene filtros (Todos, Landing pages, Catálogos web, Sistemas de turnos) que maneja `js/app.js` a partir del atributo `data-category` de cada tarjeta.

| Proyecto | Categoría | Vista previa | Enlace |
|---|---|---|---|
| Motores M | Landing page · demo | `img/motores-m.webp` | https://motoresm.netlify.app |
| ÉTER Studio | Catálogo web autoadministrable | `assets/1114.mp4` (portada `img/eter-studio-poster.jpg`) | Oculto hasta publicar la nueva demo |
| Nórdika Inmobiliaria | Landing page · demo | `img/nordika-inmobiliaria.webp` | https://nordikainmobiliaria.netlify.app |
| Oliva Restaurant | Landing page · demo | `img/oliva-restaurant.webp` | https://olivarestaurant.netlify.app |
| Sistema de Turnos Online | Sistema de turnos · demostración | `assets/WhatsApp Video 2026-11-09 at 23.00.29.mp4` | Sin enlace |

Los colores de cada tarjeta se definen en `css/styles.css`, en las clases `.preview-motores`, `.preview-eter`, `.preview-nordika` y `.preview-oliva`.

### Agregar o actualizar capturas

- Las tarjetas solo muestran la parte superior de la captura dentro del mockup de celular. Alcanza con una imagen WebP de 520 × 1040 px (calidad ~0,88), que pesa menos de 100 KB.
- No subas capturas completas en PNG: pesan varios MB y hacen más lenta la página en celulares.
- Los originales en alta resolución se guardan fuera del proyecto, en la carpeta `gap-programming-respaldos`.

### Video de ÉTER Studio

- Está optimizado (H.264, 1280 × 564, sin audio, unos 3,4 MB). El original se conserva en `gap-programming-respaldos`.
- Se reproduce automáticamente, silenciado y en bucle, solo cuando la tarjeta está visible, y no se descarga antes.
- Si el visitante activó "reducir movimiento" o el ahorro de datos, se muestra solo la portada.
- Para habilitar el botón "Ver sitio" cuando la nueva demo esté publicada, seguí las instrucciones del comentario que está dentro de la tarjeta de ÉTER Studio en `index.html`.

## Logo

- `img/logo-gap.webp` (480 × 480 px) se usa en el header, en Sobre GAP y en el footer.
- Los favicons (`favicon.ico`, `img/favicon-32.png`, `img/apple-touch-icon.png`) se generaron a partir del mismo logo.
- El archivo original en alta resolución (`logo1.png`) se guarda en `gap-programming-respaldos` y no se publica.

## Precios

Los precios publicados están en `index.html` (secciones Servicios, Soporte y Preguntas frecuentes). Son orientativos: actualizalos ahí cuando cambien y verificá que coincidan en todas las secciones.

## Publicar en Netlify

El repositorio es https://github.com/AitanaMJ/gap-programming-web (rama `main`).

**Opción A — Conectar el repositorio (recomendado):**

1. En Netlify, elegí *Add new site → Import an existing project → GitHub* y seleccioná `gap-programming-web`.
2. Configuración: *Branch* `main`, *Build command* vacío, *Publish directory* `.` (la raíz).
3. A partir de ahí, cada `git push` a `main` publica el sitio automáticamente.

**Opción B — Despliegue manual:**

1. Arrastrá la carpeta del proyecto en *Sites → Deploy manually*.
2. Antes, asegurate de que la carpeta no tenga archivos innecesarios: el despliegue manual sube todo lo que haya en ella, incluso lo que está en `.gitignore`.

Después de publicar, probá el sitio en celular, los enlaces de los proyectos y el formulario.

## Importante

- No incluyas testimonios ni clientes ficticios como si fueran reales.
- Los proyectos de demostración están identificados como "DEMO".
- Antes de promocionar el sitio, verificá precios, datos de contacto y que Formspree siga funcionando.
