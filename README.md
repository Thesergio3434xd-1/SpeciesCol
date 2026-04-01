# SpeciesCol

<p align="center">
  <img src="img/logo.png" alt="SpeciesCol" width="180">
</p>

<p align="center">
  <img alt="Estado" src="https://img.shields.io/badge/Estado-Activo-2ea44f">
  <img alt="Version" src="https://img.shields.io/badge/Version-1.0.0-0b7285">
  <img alt="Frontend" src="https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-1f6feb">
  <img alt="Accesibilidad" src="https://img.shields.io/badge/Objetivo%20UX-WCAG%202.2%20AA-8250df">
  <img alt="Licencia" src="https://img.shields.io/badge/Licencia-MIT-0969da">
</p>

<p align="center">
  Plataforma web educativa para documentar y divulgar informacion sobre especies extintas y en peligro de extincion en Colombia.
</p>

---

## Presentado por

- Cristian Eduardo Carvajal Izquierdo
- Ronald Neomar Tapias Rojas
- Sergio Alejandro Uribe Montealegre

## Tabla de contenido

- [Introduccion](#introduccion)
- [Objetivos](#objetivos)
- [Planteamiento del problema](#planteamiento-del-problema)
- [Antecedentes](#antecedentes)
- [Marco teorico](#marco-teorico)
- [Normatividad](#normatividad)
- [Materiales y equipos](#materiales-y-equipos)
- [Metodologia](#metodologia)
- [Poblacion y muestra](#poblacion-y-muestra)
- [Resultados](#resultados)
- [Conclusiones](#conclusiones)
- [Arquitectura del proyecto](#arquitectura-del-proyecto)
- [Stack tecnologico](#stack-tecnologico)
- [Instalacion y ejecucion](#instalacion-y-ejecucion)
- [Referencias bibliograficas](#referencias-bibliograficas)

## Introduccion

La perdida de biodiversidad es una de las crisis ambientales mas graves del siglo XXI. En Colombia, la disminucion acelerada de especies y el aumento de fauna amenazada afecta no solo el equilibrio ecosistemico, sino tambien la memoria historica y cultural de comunidades que han convivido con estas especies por generaciones.

SpeciesCol nace como una aplicacion web educativa enfocada en documentar y difundir informacion clara, verificable y accesible sobre especies extintas y en peligro de extincion en el territorio colombiano. La propuesta busca fortalecer el vinculo entre tecnologia, educacion y sostenibilidad mediante recursos visuales, fichas tecnicas y contenidos de sensibilizacion.

<p align="center">
  <img src="img/Map.png" alt="Mapa de Colombia" width="280">
  <img src="img/llano.png" alt="Bioma llano" width="280">
</p>

## Objetivos

### Objetivo general

Desarrollar una aplicacion web que documente y divulgue informacion veridica sobre especies extintas y en peligro de extincion de Colombia, promoviendo la culturizacion historica y la conciencia ambiental.

### Objetivos especificos

- Estructurar un repositorio con mas de 15 fichas de especies extintas o en riesgo, con sus datos clave y bibliografia.
- Disenar recursos pedagogicos accesibles y faciles de comprender para publico general.
- Desarrollar una interfaz responsive orientada a criterios WCAG 2.2 AA en las paginas clave.

## Planteamiento del problema

Distintos reportes internacionales y nacionales advierten una reduccion sostenida de biodiversidad. A nivel social, aunque existe interes por actuar (reciclaje, cuidado de espacios verdes), persiste una brecha de informacion confiable y centralizada.

El proyecto responde a la pregunta:

> Se puede aprender y reconocer especies extintas o amenazadas de manera interactiva y centralizada en un solo sitio?

La respuesta de SpeciesCol es una experiencia digital didactica que integra informacion, contexto historico, recursos visuales y navegacion intuitiva.

## Antecedentes

El proyecto toma como referencia iniciativas y lineas de trabajo en conservacion apoyada por tecnologia:

- Herramientas de IA para fauna y monitoreo (ej. Pytorch-Wildlife).
- Sistemas de participacion comunitaria (ej. CyberTracker).
- Soluciones para reservas naturales y turismo educativo (ej. FloraBan).
- Iniciativas de empresas y cooperacion con comunidades locales en Colombia.

Estas experiencias respaldan la necesidad de una plataforma divulgativa, interactiva y de facil acceso como SpeciesCol.

## Marco teorico

### Estados de conservacion y taxones emblematicos

Se parte de categorias UICN para comunicar de forma comprensible el riesgo de extincion (EX, EW, CR, EN, VU, NT, LC, DD, NE).

### Motores de riesgo y extincion

Se destacan factores directos e indirectos: cambio de uso del suelo, sobreexplotacion, especies invasoras, contaminacion, cambio climatico, patrones de consumo y fallos de gobernanza.

### Valor de la biodiversidad para la sociedad

La biodiversidad sostiene servicios ecosistemicos de provision, regulacion, soporte y valor cultural, con impacto directo en bienestar humano.

### Principios y estrategias de conservacion

El enfoque combina acciones in situ y ex situ, ademas de soluciones basadas en la naturaleza y marcos globales de biodiversidad.

### APIs para integrar datos

La API de iNaturalist permite integrar observaciones y taxones en JSON para enriquecer fichas, trazabilidad y actualizacion de informacion.

### UX, accesibilidad y diseno para la accion

Se prioriza arquitectura clara, legibilidad, navegacion por teclado, foco visible y experiencia responsive alineada con WCAG 2.2.

## Normatividad

Marco legal considerado en el proyecto:

- Ley 1774 de 2016
- Ley 2111 de 2021 (Art. 329)
- Ley 2153 de 2021
- Ley 1712 de 2014
- Ley 1581 de 2012

## Materiales y equipos

### Recursos tecnologicos

- Frontend: HTML, CSS, JavaScript, Bootstrap (CDN)
- Mapa e interaccion visual: SVG y componentes dinamicos
- Fuentes de datos: JSON y APIs abiertas
- Control de versiones: Git y GitHub

### Recursos fisicos

Desarrollo realizado en equipos portatiles de gama media, suficientes para diseno, programacion y pruebas del sitio.

## Metodologia

Se adopto enfoque cuantitativo con:

- Encuesta estructurada para evaluar usabilidad, aprendizaje y percepcion.
- Analisis estadistico descriptivo para validar navegabilidad, claridad y aceptacion.

La informacion obtenida permitio ajustar contenido, estructura y experiencia de uso.

## Poblacion y muestra

Poblacion objetivo: estudiantes de la asignatura de medio ambiente (UCC).

Muestra aplicada: 27 participantes con caracteristicas similares al perfil objetivo (acceso a tecnologia y rango de edad esperado).

## Resultados

Principales hallazgos reportados:

- Alto nivel de satisfaccion general del sitio.
- Percepcion positiva sobre accesibilidad y comodidad de la interfaz.
- Alta intencion de recomendacion del sitio.
- Evidencia de aprendizaje sobre especies extintas y amenazadas.

<p align="center">
  <img src="img/tropical.jpg" alt="Bioma tropical" width="300">
  <img src="img/paramo.jpg" alt="Bioma paramo" width="300">
  <img src="img/marino.jpg" alt="Bioma marino" width="300">
</p>

## Conclusiones

SpeciesCol cumplio el objetivo de construir una plataforma educativa y divulgativa sobre biodiversidad colombiana, con buena aceptacion por parte de usuarios y potencial de crecimiento.

Fortalezas destacadas:

- Fichas tecnicas de especies organizadas y comprensibles.
- Interfaz responsive y visualmente consistente.
- Integracion de contexto ambiental, historico y pedagogico.

Oportunidades futuras:

- Integrar fuentes cientificas adicionales en tiempo real.
- Fortalecer analitica y accesibilidad avanzada.
- Evolucionar el proyecto hacia una iniciativa institucional o de impacto nacional.

## Arquitectura del proyecto

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

## Stack tecnologico

| Capa | Tecnologia |
|---|---|
| Estructura | HTML5 |
| Estilos | CSS3 + Bootstrap 5 |
| Interaccion | JavaScript ES6 |
| Recursos visuales | SVG + imagenes locales |
| Datos | JSON + APIs abiertas |
| Versionado | Git + GitHub |

## Instalacion y ejecucion

Como es un sitio estatico:

1. Clona el repositorio.
2. Abre `index.html` en tu navegador.

Opcional con servidor local:

```bash
python -m http.server 5500
```

Luego abre `http://localhost:5500`.

## Referencias bibliograficas

- Bedoya-Rodriguez, F., et al. (2025). *Knowledge, Attitudes, and Perceptions of Colombians Towards Biodiversity Regarding COP16*. MDPI.
- Hernandez, A., et al. (2024). *Pytorch-Wildlife: A Collaborative Deep Learning Framework for Conservation*. arXiv.
- World Wide Web Consortium (2024). *Web Content Accessibility Guidelines (WCAG) 2.2*.
- Diaz, S., et al. (2019). *The global assessment report on biodiversity and ecosystem services*. IPBES.
- Convention on Biological Diversity (2022). *Kunming-Montreal Global Biodiversity Framework*.
- Florez, M., et al. (2024). *Deep Learning Application for Biodiversity Conservation and Educational Tourism in Natural Reserves*.
- IUCN (2012). *Red List Categories and Criteria*.
- Millennium Ecosystem Assessment (2005). *Ecosystems and Human Well-being: Synthesis*.
- Secretariat of the Convention on Biological Diversity (2020). *Global Biodiversity Outlook 5*.

---

<p align="center">
  <b>SpeciesCol</b><br>
  Tecnologia + Educacion + Conservacion para proteger la biodiversidad de Colombia.
</p>
