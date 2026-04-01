// filepath: c:\Users\julie\Programación\Estudio\speciescol1\cuidado.js

// Los 17 Objetivos de Desarrollo Sostenible de la ONU
const objetivosODS = [
    {
        numero: 1,
        titulo: "Fin de la Pobreza",
        descripcion: "Erradicar la pobreza en todas sus formas en todo el mundo",
        detalles: "Para 2030, erradicar la pobreza extrema para todas las personas en el mundo, actualmente medida por un ingreso por persona inferior a 1,25 dólares de los Estados Unidos al día. Garantizar que todos los hombres y mujeres, en particular los pobres y los vulnerables, tengan los mismos derechos a los recursos económicos y acceso a los servicios básicos.",
        imagen: "https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-01.jpg",
        color: "#E5243B",
        link: "https://www.un.org/sustainabledevelopment/es/poverty/"
    },
    {
        numero: 2,
        titulo: "Hambre Cero",
        descripcion: "Poner fin al hambre, lograr la seguridad alimentaria y la mejora de la nutrición",
        detalles: "Para 2030, poner fin al hambre y asegurar el acceso de todas las personas a una alimentación sana, nutritiva y suficiente durante todo el año. Poner fin a todas las formas de malnutrición. Duplicar la productividad agrícola y los ingresos de los productores de alimentos en pequeña escala mediante un acceso seguro y equitativo a las tierras.",
        imagen: "https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-02.jpg",
        color: "#DDA63A",
        link: "https://www.un.org/sustainabledevelopment/es/hunger/"
    },
    {
        numero: 3,
        titulo: "Salud y Bienestar",
        descripcion: "Garantizar una vida sana y promover el bienestar para todos en todas las edades",
        detalles: "Para 2030, reducir la tasa mundial de mortalidad materna. Poner fin a las muertes evitables de recién nacidos y de niños menores de 5 años. Poner fin a las epidemias del SIDA, la tuberculosis, la malaria y las enfermedades tropicales desatendidas. Reducir en un tercio la mortalidad prematura por enfermedades no transmisibles mediante la prevención y el tratamiento.",
        imagen: "https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-03.jpg",
        color: "#4C9F38",
        link: "https://www.un.org/sustainabledevelopment/es/health/"
    },
    {
        numero: 4,
        titulo: "Educación de Calidad",
        descripcion: "Garantizar una educación inclusiva, equitativa y de calidad",
        detalles: "Para 2030, asegurar que todas las niñas y todos los niños terminen la enseñanza primaria y secundaria, que ha de ser gratuita, equitativa y de calidad. Asegurar que todas las niñas y todos los niños tengan acceso a servicios de atención y desarrollo en la primera infancia y educación preescolar de calidad. Eliminar las disparidades de género en la educación.",
        imagen: "https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-04.jpg",
        color: "#C5192D",
        link: "https://www.un.org/sustainabledevelopment/es/education/"
    },
    {
        numero: 5,
        titulo: "Igualdad de Género",
        descripcion: "Lograr la igualdad entre los géneros y empoderar a todas las mujeres y niñas",
        detalles: "Poner fin a todas las formas de discriminación contra todas las mujeres y las niñas en todo el mundo. Eliminar todas las formas de violencia contra todas las mujeres y las niñas en los ámbitos público y privado. Asegurar la participación plena y efectiva de las mujeres y la igualdad de oportunidades de liderazgo a todos los niveles decisorios.",
        imagen: "https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-05.jpg",
        color: "#FF3A21",
        link: "https://www.un.org/sustainabledevelopment/es/gender-equality/"
    },
    {
        numero: 6,
        titulo: "Agua Limpia y Saneamiento",
        descripcion: "Garantizar la disponibilidad de agua y su gestión sostenible y el saneamiento para todos",
        detalles: "Para 2030, lograr el acceso universal y equitativo al agua potable a un precio asequible para todos. Lograr el acceso a servicios de saneamiento e higiene adecuados y equitativos para todos. Mejorar la calidad del agua reduciendo la contaminación, eliminando el vertimiento y minimizando la emisión de productos químicos y materiales peligrosos.",
        imagen: "https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-06.jpg",
        color: "#26BDE2",
        link: "https://www.un.org/sustainabledevelopment/es/water-and-sanitation/"
    },
    {
        numero: 7,
        titulo: "Energía Asequible y No Contaminante",
        descripcion: "Garantizar el acceso a una energía asequible, segura, sostenible y moderna",
        detalles: "Para 2030, garantizar el acceso universal a servicios energéticos asequibles, fiables y modernos. Aumentar considerablemente la proporción de energía renovable en el conjunto de fuentes energéticas. Duplicar la tasa mundial de mejora de la eficiencia energética. Aumentar la cooperación internacional para facilitar el acceso a la investigación en energía limpia.",
        imagen: "https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-07.jpg",
        color: "#FCC30B",
        link: "https://www.un.org/sustainabledevelopment/es/energy/"
    },
    {
        numero: 8,
        titulo: "Trabajo Decente y Crecimiento Económico",
        descripcion: "Promover el crecimiento económico sostenido, inclusivo y sostenible",
        detalles: "Mantener el crecimiento económico per cápita de conformidad con las circunstancias nacionales. Lograr niveles más elevados de productividad económica mediante la diversificación, la modernización tecnológica y la innovación. Para 2030, lograr el empleo pleno y productivo y el trabajo decente para todas las mujeres y los hombres, incluidos los jóvenes.",
        imagen: "https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-08.jpg",
        color: "#A21942",
        link: "https://www.un.org/sustainabledevelopment/es/economic-growth/"
    },
    {
        numero: 9,
        titulo: "Industria, Innovación e Infraestructura",
        descripcion: "Construir infraestructuras resilientes, promover la industrialización inclusiva y sostenible",
        detalles: "Desarrollar infraestructuras fiables, sostenibles, resilientes y de calidad, incluidas infraestructuras regionales y transfronterizas. Promover una industrialización inclusiva y sostenible. Aumentar significativamente el acceso a la tecnología de la información y las comunicaciones. Apoyar el desarrollo de tecnologías, la investigación y la innovación.",
        imagen: "https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2015/09/S_SDG_Icons-01-09.jpg",
        color: "#FD6925",
        link: "https://www.un.org/sustainabledevelopment/es/infrastructure/"
    },
    {
        numero: 10,
        titulo: "Reducción de las Desigualdades",
        descripcion: "Reducir la desigualdad en y entre los países",
        detalles: "Para 2030, lograr progresivamente y mantener el crecimiento de los ingresos del 40% más pobre de la población. Potenciar y promover la inclusión social, económica y política de todas las personas. Garantizar la igualdad de oportunidades y reducir la desigualdad de resultados. Facilitar la migración y la movilidad ordenadas, seguras, regulares y responsables.",
        imagen: "https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-10.jpg",
        color: "#DD1367",
        link: "https://www.un.org/sustainabledevelopment/es/inequality/"
    },
    {
        numero: 11,
        titulo: "Ciudades y Comunidades Sostenibles",
        descripcion: "Lograr que las ciudades sean más inclusivas, seguras, resilientes y sostenibles",
        detalles: "Para 2030, asegurar el acceso de todas las personas a viviendas y servicios básicos adecuados, seguros y asequibles. Proporcionar acceso a sistemas de transporte seguros, asequibles, accesibles y sostenibles para todos. Aumentar la urbanización inclusiva y sostenible. Redoblar los esfuerzos para proteger y salvaguardar el patrimonio cultural y natural del mundo.",
        imagen: "https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-11.jpg",
        color: "#FD9D24",
        link: "https://www.un.org/sustainabledevelopment/es/cities/"
    },
    {
        numero: 12,
        titulo: "Producción y Consumo Responsables",
        descripcion: "Garantizar modalidades de consumo y producción sostenibles",
        detalles: "Aplicar el Marco Decenal de Programas sobre Modalidades de Consumo y Producción Sostenibles. Para 2030, lograr la gestión sostenible y el uso eficiente de los recursos naturales. Reducir a la mitad el desperdicio de alimentos per cápita mundial. Lograr la gestión ecológicamente racional de los productos químicos y de todos los desechos. Reducir la generación de desechos mediante actividades de prevención, reducción, reciclado y reutilización.",
        imagen: "https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2015/09/S_SDG_Icons-01-12.jpg",
        color: "#BF8B2E",
        link: "https://www.un.org/sustainabledevelopment/es/sustainable-consumption-production/"
    },
    {
        numero: 13,
        titulo: "Acción por el Clima",
        descripcion: "Adoptar medidas urgentes para combatir el cambio climático y sus efectos",
        detalles: "Fortalecer la resiliencia y la capacidad de adaptación a los riesgos relacionados con el clima y los desastres naturales. Incorporar medidas relativas al cambio climático en las políticas, estrategias y planes nacionales. Mejorar la educación, la sensibilización y la capacidad humana e institucional respecto de la mitigación del cambio climático, la adaptación a él, la reducción de sus efectos y la alerta temprana.",
        imagen: "https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-13.jpg",
        color: "#3F7E44",
        link: "https://www.un.org/sustainabledevelopment/es/climate-change-2/"
    },
    {
        numero: 14,
        titulo: "Vida Submarina",
        descripcion: "Conservar y utilizar sosteniblemente los océanos, los mares y los recursos marinos",
        detalles: "Para 2025, prevenir y reducir significativamente la contaminación marina de todo tipo. Gestionar y proteger sosteniblemente los ecosistemas marinos y costeros. Minimizar y abordar los efectos de la acidificación de los océanos. Para 2020, reglamentar eficazmente la explotación pesquera y poner fin a la pesca excesiva, la pesca ilegal, no declarada y no reglamentada.",
        imagen: "https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-14.jpg",
        color: "#0A97D9",
        link: "https://www.un.org/sustainabledevelopment/es/oceans/"
    },
    {
        numero: 15,
        titulo: "Vida de Ecosistemas Terrestres",
        descripcion: "Gestionar sosteniblemente los bosques, luchar contra la desertificación, detener e invertir la degradación de las tierras",
        detalles: "Para 2020, velar por la conservación, el restablecimiento y el uso sostenible de los ecosistemas terrestres y los ecosistemas interiores de agua dulce. Promover la gestión sostenible de todos los tipos de bosques, poner fin a la deforestación. Luchar contra la desertificación, rehabilitar las tierras y los suelos degradados. Adoptar medidas urgentes y significativas para reducir la degradación de los hábitats naturales, detener la pérdida de la diversidad biológica.",
        imagen: "https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-15.jpg",
        color: "#56C02B",
        link: "https://www.un.org/sustainabledevelopment/es/biodiversity/"
    },
    {
        numero: 16,
        titulo: "Paz, Justicia e Instituciones Sólidas",
        descripcion: "Promover sociedades justas, pacíficas e inclusivas",
        detalles: "Reducir significativamente todas las formas de violencia y las correspondientes tasas de mortalidad. Poner fin al maltrato, la explotación, la trata y todas las formas de violencia y tortura contra los niños. Promover el estado de derecho y garantizar la igualdad de acceso a la justicia para todos. Crear instituciones eficaces, responsables y transparentes a todos los niveles.",
        imagen: "https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-16.jpg",
        color: "#00689D",
        link: "https://www.un.org/sustainabledevelopment/es/peace-justice/"
    },
    {
        numero: 17,
        titulo: "Alianzas para Lograr los Objetivos",
        descripcion: "Revitalizar la Alianza Mundial para el Desarrollo Sostenible",
        detalles: "Fortalecer la movilización de recursos internos para mejorar la capacidad nacional de recaudar ingresos fiscales. Promover un sistema de comercio multilateral universal, basado en normas, abierto, no discriminatorio y equitativo. Mejorar la cooperación regional e internacional Norte-Sur, Sur-Sur y triangular en materia de ciencia, tecnología e innovación y el acceso a estas.",
        imagen: "https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-17.jpg",
        color: "#19486A",
        link: "https://www.un.org/sustainabledevelopment/es/globalpartnerships/"
    }
];

// Tips de cuidado ambiental
const tipsAmbientales = [
    {
        icon: "bi-recycle",
        titulo: "Regla de las 3R",
        descripcion: "Reduce tu consumo, reutiliza todo lo que puedas y recicla correctamente. Separa los residuos en orgánicos, reciclables (papel, cartón, plástico, vidrio, metal) y no reciclables. El reciclaje de una tonelada de papel salva 17 árboles.",
        categoria: "residuos"
    },
    {
        icon: "bi-droplet",
        titulo: "Ahorra Agua",
        descripcion: "Cierra el grifo mientras te cepillas los dientes (ahorras hasta 12 litros por minuto). Toma duchas cortas de 5 minutos máximo. Repara fugas: un grifo que gotea desperdicia hasta 30 litros diarios. Instala dispositivos ahorradores en grifos y duchas.",
        categoria: "agua"
    },
    {
        icon: "bi-lightning-charge",
        titulo: "Energía Eficiente",
        descripcion: "Cambia a bombillas LED (consumen 80% menos energía). Desconecta aparatos electrónicos cuando no los uses: en modo stand-by siguen consumiendo. Usa electrodomésticos con etiqueta energética A+++ y aprovecha al máximo la luz natural.",
        categoria: "energia"
    },
    {
        icon: "bi-bicycle",
        titulo: "Movilidad Sostenible",
        descripcion: "Usa bicicleta, transporte público o camina cuando sea posible. Comparte tu vehículo con otros (carpooling). Un automóvil emite aproximadamente 120g de CO2 por kilómetro. Considera vehículos eléctricos o híbridos.",
        categoria: "transporte"
    },
    {
        icon: "bi-bag-check",
        titulo: "Consumo Responsable",
        descripcion: "Lleva bolsas reutilizables al hacer compras. Prefiere productos locales y de temporada (menor huella de carbono). Evita el uso de plásticos de un solo uso. Compra solo lo necesario para evitar desperdicio.",
        categoria: "consumo"
    },
    {
        icon: "bi-tree",
        titulo: "Planta Árboles",
        descripcion: "Un árbol absorbe 22 kg de CO2 al año y produce oxígeno para 2 personas. Planta especies nativas en tu comunidad. Apoya proyectos de reforestación. Los bosques albergan el 80% de la biodiversidad terrestre.",
        categoria: "naturaleza"
    },
    {
        icon: "bi-trash",
        titulo: "Reduce Plásticos",
        descripcion: "Evita botellas de plástico: usa una reutilizable. Di no a pitillos, cubiertos y platos desechables. El plástico tarda hasta 500 años en degradarse y contamina océanos. 8 millones de toneladas de plástico llegan al mar anualmente.",
        categoria: "residuos"
    },
    {
        icon: "bi-flower1",
        titulo: "Biodiversidad",
        descripcion: "No compres animales exóticos como mascotas. Respeta áreas protegidas y parques naturales. Crea jardines con plantas nativas que atraigan polinizadores. Denuncia el tráfico ilegal de fauna y flora.",
        categoria: "naturaleza"
    }
];

// Videos educativos recomendados (YouTube embeds)
const videosEducativos = [
    {
        titulo: "¿Qué son los ODS? - Objetivos de Desarrollo Sostenible",
        descripcion: "Introducción completa a los 17 Objetivos de Desarrollo Sostenible de la ONU",
        embedId: "MCKH5xk8X-g",
        duracion: "5:32"
    },
    {
        titulo: "Cambio Climático: La Mayor Amenaza del Siglo XXI",
        descripcion: "Documental sobre el calentamiento global y sus consecuencias",
        embedId: "dcBXDB2fOBo",
        duracion: "15:20"
    },
    {
        titulo: "Economía Circular: El Futuro del Planeta",
        descripcion: "Cómo transformar nuestra economía en un modelo circular sostenible",
        embedId: "zCRKvDyyHmI",
        duracion: "8:45"
    },
    {
        titulo: "Biodiversidad: La Riqueza de la Vida en la Tierra",
        descripcion: "Importancia de conservar la diversidad biológica del planeta",
        embedId: "b6Ua_zWDH6U",
        duracion: "12:15"
    }
];

// Variables globales
let currentODSIndex = 0;
let odsAutoplayInterval;
let isGridView = false;

// Inicializar página
document.addEventListener('DOMContentLoaded', function() {
    cargarODSCarousel();
    cargarODSIndicators();
    cargarTips();
    cargarVideos();
    inicializarNavegacionODS();
    iniciarAutoplayODS();
});

// Cargar ODS en Carousel
function cargarODSCarousel() {
    const container = document.getElementById('odsCarousel');
    
    objetivosODS.forEach((ods, index) => {
        const item = crearODSCarouselItem(ods, index);
        container.appendChild(item);
    });
    
    actualizarCarouselODS();
}

// Crear item de carousel ODS
function crearODSCarouselItem(ods, index) {
    const div = document.createElement('div');
    div.className = 'ods-carousel-item';
    div.dataset.index = index;
    
    div.innerHTML = `
        <a href="${ods.link}" target="_blank" rel="noopener noreferrer" class="ods-image-link">
            <div class="ods-image-container">
                <img src="${ods.imagen}" alt="${ods.titulo}" loading="lazy"
                     onerror="this.src='https://via.placeholder.com/220/${ods.color.replace('#', '')}/FFFFFF?text=ODS+${ods.numero}'">
                <div class="ods-number-badge">${ods.numero}</div>
            </div>
        </a>
        <div class="ods-info-tooltip">
            <h6 class="ods-tooltip-title">${ods.titulo}</h6>
            <p class="ods-tooltip-description">${ods.descripcion}</p>
            <a href="${ods.link}" target="_blank" rel="noopener noreferrer" class="ods-tooltip-link">
                <i class="bi bi-box-arrow-up-right"></i>
                <span>Visitar ONU</span>
            </a>
        </div>
    `;
    
    return div;
}

// Cargar indicadores
function cargarODSIndicators() {
    const container = document.getElementById('odsIndicators');
    
    objetivosODS.forEach((ods, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'ods-indicator';
        indicator.textContent = ods.numero;
        indicator.onclick = () => navegarAODS(index);
        container.appendChild(indicator);
    });
    
    actualizarIndicadores();
}

// Inicializar navegación
function inicializarNavegacionODS() {
    const prevBtn = document.getElementById('odsPrev');
    const nextBtn = document.getElementById('odsNext');
    
    prevBtn.addEventListener('click', () => {
        navegarODS('prev');
    });
    
    nextBtn.addEventListener('click', () => {
        navegarODS('next');
    });
    
    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') navegarODS('prev');
        if (e.key === 'ArrowRight') navegarODS('next');
    });
}

// Navegar en el carousel
function navegarODS(direction) {
    detenerAutoplayODS();
    
    if (direction === 'next') {
        currentODSIndex = (currentODSIndex + 1) % objetivosODS.length;
    } else {
        currentODSIndex = (currentODSIndex - 1 + objetivosODS.length) % objetivosODS.length;
    }
    
    actualizarCarouselODS();
    actualizarIndicadores();
    iniciarAutoplayODS();
}

// Navegar a ODS específico
function navegarAODS(index) {
    detenerAutoplayODS();
    currentODSIndex = index;
    actualizarCarouselODS();
    actualizarIndicadores();
    iniciarAutoplayODS();
}

// Actualizar posición del carousel
function actualizarCarouselODS() {
    const carousel = document.getElementById('odsCarousel');
    const wrapper = carousel.parentElement;
    const items = carousel.querySelectorAll('.ods-carousel-item');
    
    if (!carousel || items.length === 0) return;
    
    // Calcular offset para centrar el item activo
    const itemWidth = 220 + 20; // ancho + gap
    const wrapperWidth = wrapper.offsetWidth;
    
    // Centrar el item activo
    let offset = (wrapperWidth / 2) - (itemWidth / 2) - (currentODSIndex * itemWidth);
    
    // Asegurar que todos los items sean visibles
    const totalWidth = items.length * itemWidth;
    const maxOffset = 0;
    const minOffset = wrapperWidth - totalWidth - 40; // 40px de padding
    
    // Limitar el offset
    if (offset > maxOffset) offset = maxOffset;
    if (offset < minOffset && totalWidth > wrapperWidth) offset = minOffset;
    
    carousel.style.transform = `translateX(${offset}px)`;
    
    // Marcar item activo
    items.forEach((item, index) => {
        if (index === currentODSIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Redimensionar carousel al cambiar tamaño de ventana
window.addEventListener('resize', () => {
    actualizarCarouselODS();
});

// Actualizar indicadores
function actualizarIndicadores() {
    const indicators = document.querySelectorAll('.ods-indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentODSIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Autoplay
function iniciarAutoplayODS() {
    odsAutoplayInterval = setInterval(() => {
        navegarODS('next');
    }, 5000); // Cambiar cada 5 segundos
}

function detenerAutoplayODS() {
    if (odsAutoplayInterval) {
        clearInterval(odsAutoplayInterval);
    }
}

// Toggle entre vista carousel y grid
function toggleODSView() {
    isGridView = !isGridView;
    const carouselContainer = document.querySelector('.ods-carousel-container');
    const indicators = document.querySelector('.ods-indicators');
    const gridView = document.getElementById('odsGridView');
    const toggleText = document.getElementById('viewToggleText');
    
    if (isGridView) {
        carouselContainer.style.display = 'none';
        indicators.style.display = 'none';
        gridView.classList.remove('d-none');
        toggleText.textContent = 'Ver Carousel';
        detenerAutoplayODS();
        cargarODSGrid();
    } else {
        carouselContainer.style.display = 'block';
        indicators.style.display = 'flex';
        gridView.classList.add('d-none');
        toggleText.textContent = 'Ver en Cuadrícula';
        iniciarAutoplayODS();
    }
}

// Cargar grid view
function cargarODSGrid() {
    const container = document.getElementById('odsGridView');
    container.innerHTML = '';
    
    objetivosODS.forEach(ods => {
        const item = document.createElement('div');
        item.className = 'ods-grid-item';
        item.onclick = () => mostrarDetalleODS(ods);
        
        item.innerHTML = `
            <div class="position-relative">
                <img src="${ods.imagen}" alt="${ods.titulo}">
                <div class="ods-number-badge" style="position: absolute; top: 10px; right: 10px; width: 40px; height: 40px; font-size: 1.2rem;">
                    ${ods.numero}
                </div>
            </div>
            <h6 class="fw-bold mt-2 mb-0">${ods.titulo}</h6>
        `;
        
        container.appendChild(item);
    });
}

// Mostrar detalle de ODS en modal
function mostrarDetalleODS(ods) {
    const modal = new bootstrap.Modal(document.getElementById('odsModal'));
    const modalBody = document.getElementById('odsModalBody');
    const modalLabel = document.getElementById('odsModalLabel');
    const odsLink = document.getElementById('odsLink');
    
    modalLabel.textContent = `ODS ${ods.numero}: ${ods.titulo}`;
    odsLink.href = ods.link;
    
    modalBody.innerHTML = `
        <div class="text-center mb-4">
            <img src="${ods.imagen}" alt="${ods.titulo}" class="img-fluid" style="max-width: 250px;">
        </div>
        <h5 style="color: ${ods.color};" class="mb-3">
            <i class="bi bi-bullseye me-2"></i>${ods.titulo}
        </h5>
        <p class="lead mb-3">${ods.descripcion}</p>
        <hr>
        <h6 class="fw-bold mb-3">
            <i class="bi bi-info-circle me-2"></i>Metas Principales:
        </h6>
        <p>${ods.detalles}</p>
        <div class="alert alert-success mt-4" role="alert">
            <i class="bi bi-heart-fill me-2"></i>
            <strong>¿Cómo puedes contribuir?</strong><br>
            Cada acción cuenta. Infórmate, comparte y actúa para alcanzar este objetivo.
        </div>
    `;
    
    modal.show();
}

// Cargar tips
function cargarTips() {
    const container = document.getElementById('tipsContainer');
    
    tipsAmbientales.forEach((tip, index) => {
        const card = document.createElement('div');
        card.className = 'tip-card';
        
        card.innerHTML = `
            <div class="tip-card-number">${index + 1}</div>
            <div class="tip-card-header">
                <div class="tip-card-icon">
                    <i class="${tip.icon}"></i>
                </div>
            </div>
            <div class="tip-card-body">
                <h4>${tip.titulo}</h4>
                <p>${tip.descripcion}</p>
                <span class="tip-card-badge">${tip.categoria}</span>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Cargar videos
function cargarVideos() {
    const container = document.getElementById('videosContainer');
    
    videosEducativos.forEach(video => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-3';
        
        col.innerHTML = `
            <div class="video-card">
                <div class="video-card-embed">
                    <iframe 
                        src="https://www.youtube.com/embed/${video.embedId}" 
                        title="${video.titulo}"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="video-card-body">
                    <h6 class="video-card-title">${video.titulo}</h6>
                    <p class="video-card-description">${video.descripcion}</p>
                    <small class="text-muted">
                        <i class="bi bi-clock me-1"></i>${video.duracion}
                    </small>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    });
}

console.log('SpeciesCol - Cuidado Ambiental cargado correctamente ✓');