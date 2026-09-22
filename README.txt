# YouTube PWA para Brave

## Instalación en GitHub Pages

1. Creá un repositorio nuevo en GitHub.
2. Subí TODOS los archivos de esta carpeta a la raíz del repositorio.
3. Activá GitHub Pages desde Settings > Pages.
4. Elegí Deploy from a branch, seleccioná `main` y `/ (root)`.
5. Abrí la URL HTTPS de GitHub Pages en Brave.
6. Esperá unos segundos y recargá la página.
7. En el menú de Brave debería aparecer la opción de instalar la aplicación.

## Importante

Esta PWA funciona como un contenedor instalable que abre YouTube.
El contenido de YouTube sigue dependiendo de la conexión a Internet.

No se debe abrir directamente el archivo `index.html` desde el teléfono: para que Brave reconozca la PWA debe servirse mediante HTTPS, por ejemplo con GitHub Pages.
