# GAP Programming — Sitio oficial

Sitio estático responsive desarrollado con HTML, CSS y JavaScript. No requiere instalación de dependencias ni compilación.

## Abrir localmente
Abrí `index.html` con Live Server en Visual Studio Code, o serví la carpeta desde un servidor local.

## Personalizar contacto
Editá `js/config.js`:
- `whatsapp`: número internacional sin símbolos ni espacios, por ejemplo `549381XXXXXXXX`.
- `email`: tu correo de contacto.
- `instagram`: URL completa de tu Instagram.
- `formspreeId`: **solo** el ID del formulario, por ejemplo `abcdefgh`, NO `https://formspree.io/f/abcdefgh`.

Mientras estos datos estén vacíos, los enlaces correspondientes se ocultan y el formulario no envía datos. No se simula un envío exitoso.

## Formspree
1. Creá un formulario en https://formspree.io y verificá el correo receptor.
2. Copiá el ID que aparece después de `/f/`.
3. Pegalo en `js/config.js`.
4. Probá un envío y comprobá tanto el panel de Formspree como las notificaciones de email.

## Proyectos
El proyecto Viviana Candiriola tiene un enlace público configurado. Los demás proyectos se presentan como demos conceptuales sin inventar enlaces. Si publicás una demo, podés agregar un enlace en la tarjeta correspondiente de `index.html`. Las imágenes de las tarjetas son ilustraciones CSS, no capturas reales. Se recomienda reemplazarlas por capturas auténticas.

## Precios
Los precios publicados son orientativos: landing pages desde $145.000 ARS y catálogos desde $150.000 ARS. Editalos en `index.html` cuando cambien.

## Publicar en Netlify
Arrastrá **toda la carpeta** `gap-programming-web` al despliegue manual de Netlify. `index.html` debe quedar en la raíz. Probá el sitio en celular y el formulario después de publicar.

## Importante
- No incluyas testimonios o clientes ficticios como si fueran reales.
- Actualizá los datos de contacto antes de promocionar el sitio.
- La marca tipográfica de la cabecera está recreada con texto/CSS. En `assets/logo-original.jpg` se incluye el recorte del logo aportado como referencia, para sustituirla por el archivo oficial de marca cuando quieras.


## Portafolio con capturas reales
Las capturas de los cuatro proyectos se encuentran en `assets/proyectos/` (WebP).
Los enlaces están en la sección `#proyectos` de `index.html`. Los filtros funcionan con `js/app.js`.
Las imágenes originales compartidas eran capturas verticales estrechas; para mejorar la calidad en pantallas grandes, reemplazalas en el futuro por capturas de mayor resolución.


## Actualización comercial — noviembre 2026
- Landing Pages: desde $150.000 ARS.
- Catálogos web: desde $160.000 ARS; carrito por WhatsApp opcional según alcance.
- GAP Catálogo Autoadministrable: referencia aproximada USD 250, presupuesto individual.
- GAP Turnos: desde $250.000 ARS, pago único de desarrollo.
- Soporte puntual: $8.000 ARS por solicitud (hasta 3 cambios menores / 45 minutos).
- Mantenimiento Básico: $25.000 ARS por mes, hasta 2 horas.
- Mantenimiento Plus: $45.000 ARS por mes, hasta 4 horas.
- Hosting, dominio, infraestructura y funcionalidades extra se cotizan por separado.
- Antes de publicar, verificar precios, alcance y que el formulario Formspree siga operativo.
