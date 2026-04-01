# 🌿 SpeciesCol

<div align="center">
  <img src="img/logo.png" alt="SpeciesCol Logo" width="170" />
  <h3>🦜 Plataforma educativa para visibilizar la biodiversidad colombiana</h3>
  <p><b>💡 Tecnología + 📚 Educación + 🌎 Conservación</b></p>

  <img alt="Estado" src="https://img.shields.io/badge/Estado-Activo-2ea44f">
  <img alt="Version" src="https://img.shields.io/badge/Version-1.2.0-0b7285">
  <img alt="Frontend" src="https://img.shields.io/badge/Frontend-HTML%20CSS%20JS-1f6feb">
  <img alt="Accesibilidad" src="https://img.shields.io/badge/Objetivo-WCAG%202.2%20AA-8250df">
  <img alt="Licencia" src="https://img.shields.io/badge/Licencia-MIT-0969da">
</div>

---

## 👥 Presentado por

- Cristian Eduardo Carvajal Izquierdo
- Ronald Neomar Tapias Rojas
- Sergio Alejandro Uribe Montealegre

---

## 🗂️ Tabla de contenido

- [🚀 Cómo acceder al proyecto](#-cómo-acceder-al-proyecto)
- [📖 Introducción](#-introducción)
- [🎯 Objetivos](#-objetivos)
- [⚠️ Planteamiento del problema](#️-planteamiento-del-problema)
- [🧠 Antecedentes](#-antecedentes)
- [📚 Marco teórico](#-marco-teórico)
- [⚖️ Normatividad](#️-normatividad)
- [🛠️ Materiales y equipos](#️-materiales-y-equipos)
- [📊 Metodología](#-metodología)
- [👥 Población y muestra](#-población-y-muestra)
- [📈 Resultados](#-resultados)
- [✅ Conclusiones](#-conclusiones)
- [🧩 Arquitectura del proyecto](#-arquitectura-del-proyecto)
- [💻 Stack tecnológico](#-stack-tecnológico)
- [🌐 Despliegue](#-despliegue)
- [📚 Referencias bibliográficas](#-referencias-bibliográficas)
- [📎 Anexo](#-anexo)

---

## 🚀 Cómo acceder al proyecto

### ✅ Opción rápida (recomendada)

1. Clona el repositorio:

```bash
git clone https://github.com/Thesergio3434xd-1/SpeciesCol.git
cd SpeciesCol
```

2. Levanta servidor local:

```bash
python -m http.server 5500
```

3. Abre en tu navegador:

```text
http://localhost:5500
```

### ✅ Opción simple

- Abrir directamente el archivo `index.html` en el navegador.

### 🧭 Navegación interna

- Inicio: `index.html`
- Especies: `especies.html`
- Noticias: `noticias.html`
- Cuidado: `cuidado.html`

---

## 📖 Introducción

La pérdida de biodiversidad representa una de las problemáticas ambientales más críticas del siglo XXI. En Colombia se evidencia una disminución preocupante de especies y ecosistemas. La acelerada extinción de fauna y flora no solo impacta el equilibrio ecológico nacional, sino también la memoria histórica y cultural de comunidades que han convivido con esas especies durante generaciones.

Teniendo en cuenta este panorama, la divulgación de información real, clara y accesible sobre especies extintas y amenazadas se convierte en una herramienta clave para fomentar la conciencia ambiental y preservar el patrimonio natural y cultural.

SpeciesCol propone una aplicación web enfocada en documentar y difundir datos sobre especies extintas y en peligro de extinción en Colombia, fortaleciendo el vínculo entre tecnología, educación y sostenibilidad mediante contenido visual, fichas técnicas y recursos pedagógicos.

<div align="center">
  <img src="img/Map.png" alt="Mapa" width="250" />
  <img src="img/llano.png" alt="Llanos" width="250" />
  <img src="img/marino.jpg" alt="Marino" width="250" />
</div>

---

## 🎯 Objetivos

### 🎯 Objetivo general

Desarrollar una aplicación web que documente y divulgue información verídica sobre especies extintas y en peligro de extinción de Colombia, promoviendo la culturización histórica y ambiental.

### 🎯 Objetivos específicos

- Estructurar un repositorio con más de 15 fichas de especies extintas o amenazadas, con datos clave y bibliografía.
- Diseñar recursos pedagógicos accesibles y fáciles de comprender para público general.
- Desarrollar una UI responsive con enfoque WCAG 2.2 AA, permitiendo llegar a fichas clave en máximo 3 clics.

---

## ⚠️ Planteamiento del problema

Reportes globales indican que aproximadamente el 25% de las especies evaluadas se encuentran en categorías de amenaza, lo cual exige medidas urgentes de conservación. En Colombia, existe interés ciudadano por proteger la biodiversidad, pero aún persisten brechas de información y acceso a contenidos confiables.

La pregunta central del proyecto es:

> ¿Se puede aprender y reconocer especies extintas o en peligro de extinción de manera interactiva y centralizada en un solo sitio?

SpeciesCol responde con una plataforma educativa que integra divulgación científica, contexto histórico y navegación intuitiva para facilitar el aprendizaje ambiental.

---

## 🧠 Antecedentes

La evolución tecnológica y el uso de IA han permitido crear herramientas con impacto positivo en conservación de biodiversidad.

Ejemplos relevantes:

- Pytorch-Wildlife como marco colaborativo de aprendizaje profundo para conservación.
- CyberTracker para recolección de datos de biodiversidad con enfoque comunitario e indígena.
- FloraBan como herramienta de reconocimiento y educación ambiental en zonas sin conectividad.
- Iniciativas empresariales como Huawei Tech4All en la Amazonía colombiana.

Estos antecedentes respaldan la necesidad de una plataforma interactiva como SpeciesCol para educación ambiental y divulgación pública.

---

## 📚 Marco teórico

### 1) Estados de conservación y taxones emblemáticos

La clasificación UICN (EX, EW, CR, EN, VU, NT, LC, DD, NE) permite comunicar de forma clara el riesgo de extinción y priorizar acciones.

### 2) Motores de riesgo y extinción

Factores directos e indirectos: cambio de uso del suelo, sobreexplotación, especies invasoras, contaminación, enfermedades, cambio climático, patrones de consumo y fallos de gobernanza.

### 3) Valor de la biodiversidad para la sociedad

La biodiversidad sostiene servicios ecosistémicos de provisión, regulación, soporte y valor cultural, con impacto social y económico.

### 4) Principios y estrategias de conservación

Acciones in situ y ex situ, restauración ecológica, monitoreo continuo y enfoque de mejora basado en evidencia.

### 5) APIs para integrar datos de biodiversidad

La API de iNaturalist facilita observaciones, taxones y datos abiertos en JSON, útiles para enriquecer fichas técnicas y trazabilidad.

### 6) UX, accesibilidad y diseño para la acción

El proyecto adopta lineamientos WCAG 2.2 para mejorar navegación, contraste, foco visible y comprensión de contenido en distintos perfiles de usuario.

---

## ⚖️ Normatividad

Marco legal considerado:

- Ley 1774 de 2016
- Ley 2111 de 2021, Artículo 329
- Ley 2153 de 2021
- Ley 1712 de 2014
- Ley 1581 de 2012

Estas normas orientan el enfoque ético, de protección animal, acceso a información y tratamiento de datos.

---

## 🛠️ Materiales y equipos

### Recursos tecnológicos

- HTML5, CSS3, JavaScript
- Bootstrap 5 y Bootstrap Icons
- Formato JSON para estructura de datos
- Git y GitHub para control de versiones
- Integración de APIs y recursos abiertos de biodiversidad

### Recursos físicos

Desarrollo en dos portátiles. Equipo base de referencia:

- CPU: AMD Ryzen 7 7435HS
- RAM: 16 GB
- Almacenamiento: 500 GB

---

## 📊 Metodología

Enfoque cuantitativo aplicado a validación de usabilidad y aceptación del sitio.

### Método cuantitativo

- Encuesta para medir percepción, utilidad, accesibilidad y nivel de aprendizaje.
- Análisis estadístico descriptivo para identificar patrones de comprensión y navegación.

Herramienta de recolección: Microsoft Forms.

---

## 👥 Población y muestra

- Población objetivo: estudiantes de educación superior en asignaturas relacionadas con ambiente.
- Muestra aplicada: 27 personas (simulación controlada con perfil similar al objetivo).

Rango de edad predominante: 18 a 40 años.

---

## 📈 Resultados

Hallazgos principales:

- Alta satisfacción general con la plataforma.
- Alta percepción de accesibilidad y comodidad de interfaz.
- Buena navegabilidad para llegar a fichas técnicas.
- Elevada intención de recomendación.
- Evidencia de aprendizaje sobre especies extintas y en riesgo.

<div align="center">
  <img src="img/desierto.jpg" alt="Desierto" width="245" />
  <img src="img/paramo.jpg" alt="Paramo" width="245" />
  <img src="img/humedal.jpg" alt="Humedal" width="245" />
</div>

---

## ✅ Conclusiones

SpeciesCol cumple el objetivo de ofrecer una aplicación web de divulgación veraz sobre especies extintas y amenazadas en Colombia.

Aspectos destacados:

- Más de 15 fichas técnicas estructuradas.
- Integración de especies, biomas, regiones, ODS y noticias ambientales.
- Interfaz responsive y experiencia positiva de usuario.

Oportunidades de mejora:

- Ampliar integración de fuentes académicas en tiempo real.
- Incorporar más recursos inmersivos.
- Escalar hacia alianzas institucionales nacionales.

---

## 🧩 Arquitectura del proyecto

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

---

## 💻 Stack tecnológico

| Capa | Tecnología | Propósito |
|---|---|---|
| Estructura | HTML5 | Maquetación del sitio |
| Estilos | CSS3 + Bootstrap 5 | Diseño responsive |
| Lógica | JavaScript ES6 | Interactividad por módulo |
| Visual | SVG + multimedia | Mapa y recursos pedagógicos |
| Datos | JSON + APIs abiertas | Contenido y fichas |
| Versionado | Git + GitHub | Colaboración y despliegue |

---

## 🌐 Despliegue

### GitHub Pages

1. Ir al repositorio.
2. Abrir Settings.
3. Entrar a Pages.
4. Seleccionar Deploy from a branch.
5. Elegir main y root.
6. Guardar.

### Alternativas

- Netlify
- Vercel

---

## 📚 Referencias bibliográficas

- Bedoya-Rodríguez, F., et al. (2025). Knowledge, Attitudes, and Perceptions of Colombians Towards Biodiversity Regarding COP16. MDPI.
- Hernández, A., et al. (2024). Pytorch-Wildlife: A Collaborative Deep Learning Framework for Conservation. arXiv.
- World Wide Web Consortium (2024). Web Content Accessibility Guidelines (WCAG) 2.2.
- Díaz, S., et al. (2019). The global assessment report on biodiversity and ecosystem services. IPBES.
- Convention on Biological Diversity (2022). Kunming-Montreal Global Biodiversity Framework.
- Fjeldså, J. (1993). The decline and probable extinction of the Colombian grebe.
- Flórez, M., et al. (2024). Deep Learning Application for Biodiversity Conservation and Educational Tourism in Natural Reserves.
- Groves, R. M. (2004). Survey Methodology. Wiley.
- Huawei Technologies Co. (2023). Protecting Colombia's Biodiversity with Guardians of the Jungle.
- INaturalist (2023). API Reference.
- IUCN (2012). Red List Categories and Criteria.
- Millennium Ecosystem Assessment (2005). Ecosystems and Human Well-being: Synthesis.
- Secretariat of the Convention on Biological Diversity (2020). Global Biodiversity Outlook 5.
- Selibas, D. (2024). CyberTracker and biodiversity data collection.
- Sourav (2023). Environmental statistics and evidence-based policy.

---

## 📎 Anexo

Incluye evidencias del proceso y de la experiencia del usuario:

- Información general de encuestas.
- Capturas de la Landing Page.
- Componente de regiones y biomas.
- Componente de conservación.
- Página de especies y ficha técnica.
- Página de noticias.
- Página de cuidado.
- Evidencia de encuesta aplicada.

---

<div align="center">
  <b>🌱 SpeciesCol</b><br/>
  Diseñado para aprender, valorar y proteger la biodiversidad de Colombia 🇨🇴
</div>
