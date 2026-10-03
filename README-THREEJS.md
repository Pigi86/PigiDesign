# PigiDesign + Three.js / GLTF

Se integró una workstation 3D en la sección "Mi entorno de trabajo".

Archivos principales:
- `index.html`
- `Stylesheet.css`
- `JavaScript.js`
- `three-workstation.js`
- `assets/workstation-hero.glb`

No se usa React ni Vite. Three.js y GLTFLoader se cargan desde jsDelivr.

La workstation CSS anterior fue reemplazada por el canvas Three.js. El resto del
portfolio mantiene sus funcionalidades existentes.

Para probar localmente, usar Live Server o cualquier servidor HTTP/HTTPS. No abrir
el HTML mediante `file://`, porque el navegador puede bloquear la carga del GLB por CORS.
