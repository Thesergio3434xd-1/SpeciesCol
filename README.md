# SpeciesCol

![Estado](https://img.shields.io/badge/estado-activo-2ea44f)
![Frontend](https://img.shields.io/badge/frontend-HTML%2FCSS%2FJS-0b7285)
![Licencia](https://img.shields.io/badge/licencia-MIT-blue)

Plataforma web educativa sobre biodiversidad en Colombia. El proyecto muestra especies emblematicas, noticias ambientales, acciones de cuidado y un mapa interactivo de departamentos/regiones.

## Vista general

SpeciesCol es un sitio estatico multipagina orientado a divulgacion ambiental.

- Pagina principal con hero dinamico, estadisticas y mapa SVG interactivo.
- Seccion de especies con fichas ampliadas y datos de conservacion.
- Seccion de noticias ambientales (nacionales e internacionales).
- Seccion de cuidado ambiental con ODS, tips y recursos educativos.

## Tecnologias usadas

- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap 5
- Bootstrap Icons
- SVG interactivo (mapa de departamentos)
- APIs publicas para datos de biodiversidad (iNaturalist en modulo de especies)

## Estructura del proyecto

```text
speciescol1/
|-- index.html
|-- especies.html
|-- noticias.html
|-- cuidado.html
|-- css/
|   |-- styles.css
|   |-- mapa-departamentos.css
|   |-- especies.css
|   |-- noticias.css
|   |-- cuidado.css
|-- js/
|   |-- script.js
|   |-- mapa-departamentos.js
|   |-- especies.js
|   |-- noticias.js
|   |-- cuidado.js
|-- img/
|-- README.md
```

## Como se construyo el proyecto

El desarrollo se realizo por modulos, enfocando cada pagina en una funcion del sitio:

1. Diseno base y navegacion
- Se construyo una base visual con Bootstrap para lograr consistencia en navbar, grid, cards y secciones.
- Se creo una navegacion comun entre las cuatro paginas HTML.

2. Pagina principal (index)
- Se desarrollo un hero con rotacion automatica de imagenes.
- Se integro un mapa SVG interactivo de Colombia con logica JS para mostrar informacion por departamento.
- Se agregaron secciones de biomas y contenido introductorio de biodiversidad.

3. Modulo de especies
- Se implemento una galeria de especies emblematicas con fichas de detalle.
- Se estructuraron datos descriptivos (estado, habitat, distribucion, etc.) en JS.
- Se conecto el modulo con fuentes abiertas para enriquecer informacion.

4. Modulo de noticias
- Se organizo un bloque de noticias destacadas y listados por categoria.
- Se aplicaron tarjetas y formatos de lectura rapida para facilitar consulta.

5. Modulo de cuidado
- Se incorporo contenido educativo sobre los 17 ODS.
- Se anadieron tips de accion ambiental y recursos audiovisuales.

6. Refactor de estructura
- Se reorganizaron assets por tipo para mejorar mantenimiento:
  - `css/` para hojas de estilo.
  - `js/` para scripts.
  - `img/` para imagenes.
- Se actualizaron rutas en todos los HTML para mantener el sitio funcional.

## Ejecucion local

Como es un proyecto estatico, puedes abrir `index.html` directamente en el navegador.

Tambien puedes usar un servidor local simple:

```bash
# Python
python -m http.server 5500

# Luego abre
http://localhost:5500
```

## Publicacion recomendada

Opciones sencillas para desplegar:

- GitHub Pages
- Netlify
- Vercel (modo estatico)

## Autor

Proyecto desarrollado para fines academicos y de divulgacion ambiental.

## Licencia

MIT
