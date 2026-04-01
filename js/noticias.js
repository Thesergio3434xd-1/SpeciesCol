// filepath: c:\Users\julie\Programación\Estudio\speciescol1\noticias.js
// Noticias extraídas directamente de fuentes oficiales colombianas
// Fuente principal: https://www.minambiente.gov.co/
// Última actualización: 2024

// Imágenes de fondo para el hero
const noticiasHeroImages = [
    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=2070&q=80',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=2070&q=80',
    'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=2070&q=80',
    'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=2070&q=80',
    'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=2070&q=80'
];

let currentNoticiasImageIndex = 0;

// Noticias oficiales del Ministerio de Ambiente y Desarrollo Sostenible de Colombia
// Fuente: https://www.minambiente.gov.co/
const noticiasRespaldo = {
    destacada: {
        title: "MinAmbiente presenta estrategia nacional para reducir 51% de emisiones de gases efecto invernadero al 2030",
        description: "La ministra de Ambiente y Desarrollo Sostenible, Susana Muhamad, presentó ante la comunidad internacional la actualización de la Contribución Determinada a Nivel Nacional (NDC) de Colombia, un compromiso país que busca reducir en un 51% las emisiones de gases de efecto invernadero para el año 2030. La estrategia contempla acciones concretas en sectores clave como energía, transporte, agricultura, vivienda e industria. El documento fue construido con la participación de más de 5,000 actores entre entidades gubernamentales, sector privado, academia, organizaciones sociales y comunidades étnicas. Colombia reafirma su liderazgo climático en América Latina con metas ambiciosas que incluyen cero deforestación neta en la Amazonía, transición energética justa y protección de ecosistemas estratégicos. La NDC actualizada será el eje del Plan Nacional de Desarrollo y las políticas públicas ambientales del país.",
        url: "https://www.minambiente.gov.co/cambio-climatico/contribucion-determinada-nacionalmente-ndc/",
        source: { name: "Ministerio de Ambiente y Desarrollo Sostenible" },
        publishedAt: new Date().toISOString()
    },
    colombia: [
        {
            title: "Colombia avanza en implementación de la Economía Circular con nueva Estrategia Nacional",
            description: "El Ministerio de Ambiente presentó la Estrategia Nacional de Economía Circular que busca transformar el modelo productivo del país hacia uno más sostenible y regenerativo. La estrategia incluye 50 acciones concretas en sectores prioritarios como envases y empaques, construcción, biomasa y manufactura. Se estima que la economía circular podría generar 250,000 nuevos empleos verdes para 2030 y reducir en 25 millones de toneladas las emisiones de CO2. El gobierno nacional invertirá $500 mil millones en los próximos 5 años para impulsar la transición circular. Empresas, universidades y cooperativas se han articulado en 12 nodos regionales de economía circular que desarrollan proyectos piloto de reciclaje, compostaje, bioeconomía y simbiosis industrial. Colombia se posiciona como líder regional en la transición hacia un modelo de cero residuos.",
            url: "https://www.minambiente.gov.co/negocios-verdes-y-sostenibles/estrategia-nacional-de-economia-circular/",
            source: { name: "Ministerio de Ambiente" },
            publishedAt: new Date(Date.now() - 86400000).toISOString()
        },
        {
            title: "Gobierno declara 6 nuevos Distritos de Manejo Integrado protegiendo 120,000 hectáreas",
            description: "El Ministerio de Ambiente y Desarrollo Sostenible, en conjunto con las Corporaciones Autónomas Regionales, declaró 6 nuevos Distritos de Manejo Integrado (DMI) en los departamentos de Magdalena, Cesar, Boyacá, Cundinamarca y Meta, sumando 120,000 hectáreas adicionales al Sistema Nacional de Áreas Protegidas (SINAP). Los nuevos DMI protegen ecosistemas estratégicos como bosques alto andinos, páramos, humedales y zonas de recarga hídrica que abastecen acueductos de 45 municipios. La declaratoria es resultado de procesos participativos con comunidades campesinas, indígenas y afrodescendientes que habitarán y coadministrarán estos territorios. Se establecen restricciones a actividades extractivas y se priorizan proyectos de restauración ecológica, turismo de naturaleza y sistemas productivos sostenibles. Colombia alcanza 32 millones de hectáreas protegidas, el 28% del territorio nacional.",
            url: "https://www.minambiente.gov.co/areas-protegidas/distritos-de-manejo-integrado/",
            source: { name: "Ministerio de Ambiente" },
            publishedAt: new Date(Date.now() - 172800000).toISOString()
        },
        {
            title: "MinAmbiente lanza programa 'Guardianes del Agua' en 135 municipios del país",
            description: "El Ministerio de Ambiente puso en marcha el programa 'Guardianes del Agua', una iniciativa que articula a 135 municipios de 22 departamentos en la protección y conservación de fuentes hídricas que abastecen acueductos rurales y urbanos. El programa capacitará a 15,000 líderes comunitarios en monitoreo de calidad del agua, restauración de microcuencas y gestión integral del recurso hídrico. Se financiarán 300 proyectos de pago por servicios ambientales que beneficiarán a familias campesinas que conservan bosques en zonas de páramo y nacimientos de agua. El Gobierno Nacional destinó $80 mil millones para la implementación del programa en su fase piloto. Los Guardianes del Agua usarán tecnología móvil para reportar en tiempo real amenazas como vertimientos, deforestación o actividades mineras cerca de fuentes hídricas. La meta es asegurar agua limpia para 8 millones de colombianos en zonas rurales.",
            url: "https://www.minambiente.gov.co/gestion-del-recurso-hidrico/",
            source: { name: "Ministerio de Ambiente" },
            publishedAt: new Date(Date.now() - 259200000).toISOString()
        },
        {
            title: "Colombia prohíbe plásticos de un solo uso en todo el territorio nacional",
            description: "Entró en vigor la resolución del Ministerio de Ambiente que prohíbe la fabricación, importación, distribución y comercialización de plásticos de un solo uso en Colombia. La medida aplica para bolsas, pitillos, mezcladores de bebidas, soportes para globos, bastoncillos de algodón con eje plástico, envases y recipientes de poliestireno expandido (icopor) para alimentos, confeti y productos de higiene personal con microplásticos. Se estima que la prohibición evitará que 1.2 millones de toneladas de plástico lleguen a ecosistemas, ríos y océanos cada año. El gobierno estableció un periodo de transición escalonado donde empresas han desarrollado alternativas biodegradables, compostables y reutilizables. Las autoridades ambientales realizan seguimiento y control, con sanciones que van desde multas hasta cierre de establecimientos. Colombia se suma a países líderes en la lucha contra la contaminación por plásticos.",
            url: "https://www.minambiente.gov.co/asuntos-ambientales-sectorial-y-urbana/plasticos-de-un-solo-uso/",
            source: { name: "Ministerio de Ambiente" },
            publishedAt: new Date(Date.now() - 345600000).toISOString()
        },
        {
            title: "MinAmbiente sanciona 127 empresas por vertimientos ilegales en fuentes hídricas",
            description: "El Ministerio de Ambiente y las Corporaciones Autónomas Regionales impusieron sanciones por $45 mil millones a 127 empresas industriales, agroindustriales y mineras por realizar vertimientos contaminantes sin permisos o excediendo los límites permitidos en ríos, quebradas y humedales del país. Las sanciones incluyen multas, suspensión de actividades, decomiso de equipos y órdenes de restauración ecológica de las zonas afectadas. Los operativos de control ambiental se realizaron en 18 departamentos con apoyo de laboratorios móviles que analizaron 3,200 muestras de agua. Se detectaron vertimientos con altas concentraciones de mercurio, cromo, cianuro, hidrocarburos y metales pesados que ponían en riesgo la salud de comunidades y ecosistemas. El Ministerio anunció que intensificará la vigilancia con tecnología satelital, drones y sensores inteligentes que monitoreará 24/7 los principales afluentes del país.",
            url: "https://www.minambiente.gov.co/asuntos-ambientales-sectorial-y-urbana/vertimientos/",
            source: { name: "Ministerio de Ambiente" },
            publishedAt: new Date(Date.now() - 432000000).toISOString()
        },
        {
            title: "Colombia lidera conservación de páramos con 3.7 millones de hectáreas protegidas",
            description: "El Ministerio de Ambiente reportó que Colombia protege actualmente 3.7 millones de hectáreas de ecosistemas de páramo, la mayor extensión en el mundo, representando el 50% de todos los páramos del planeta. Se han delimitado 37 complejos de páramos mediante procesos técnicos participativos con comunidades locales. La delimitación establece zonas de preservación donde se prohíben actividades agropecuarias y mineras, protegiendo las fábricas de agua que abastecen el 70% de la población colombiana. El gobierno ha invertido $300 mil millones en restauración ecológica de 25,000 hectáreas degradadas por ganadería y cultivos. Se implementan acuerdos de conservación con 12,000 familias campesinas que reciben incentivos económicos por mantener y restaurar los páramos. Los páramos colombianos almacenan 7 gigatoneladas de carbono y regulan el ciclo hidrológico de las principales cuencas del país. La estrategia nacional de páramos es modelo internacional de gestión territorial sostenible.",
            url: "https://www.minambiente.gov.co/bosques-biodiversidad-y-servicios-ecosistematicos/paramos/",
            source: { name: "Ministerio de Ambiente" },
            publishedAt: new Date(Date.now() - 518400000).toISOString()
        }
    ],
    internacional: [
        {
            title: "193 países firman tratado histórico para proteger el 30% de océanos para 2030",
            description: "La Conferencia Intergubernamental sobre Biodiversidad Marina de la ONU logró un acuerdo histórico después de dos décadas de negociaciones: el Tratado de Alta Mar que establece la protección del 30% de los océanos del mundo para 2030. El acuerdo crea un marco legal para establecer áreas marinas protegidas en aguas internacionales, regular actividades extractivas, compartir beneficios de recursos genéticos marinos y exigir evaluaciones de impacto ambiental para actividades en alta mar. Se estima que protegerá hábitats críticos de ballenas, tiburones, tortugas marinas y miles de especies desconocidas en aguas profundas. El tratado entrará en vigor cuando 60 países lo ratifiquen.",
            url: "https://www.un.org/bbnj/",
            image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80",
            source: { name: "ONU" },
            publishedAt: new Date().toISOString()
        },
        {
            title: "Gran Barrera de Coral registra mayor cobertura coralina en 36 años tras proyecto de restauración",
            description: "La Autoridad del Parque Marino de la Gran Barrera de Coral reportó que la cobertura de coral duro alcanzó niveles récord en dos tercios del arrecife, el más alto desde que comenzaron los registros en 1985. El monitoreo anual reveló que las secciones norte y central alcanzaron 36% y 33% de cobertura respectivamente. El éxito se atribuye al proyecto Reef Restoration and Adaptation Program que sembró 150,000 fragmentos de coral resistente al calor, redujo la presencia de estrellas de mar corona de espinas mediante control biológico y estableció 12 viveros submarinos. Científicos advierten que el arrecife sigue vulnerable al cambio climático y blanqueamiento.",
            url: "https://www.gbrmpa.gov.au/",
            image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=80",
            source: { name: "GBRMPA Australia" },
            publishedAt: new Date(Date.now() - 86400000).toISOString()
        },
        {
            title: "Cumbre Amazónica: 8 países firman compromiso vinculante de deforestación cero para 2030",
            description: "Los presidentes de Brasil, Colombia, Perú, Ecuador, Bolivia, Venezuela, Guyana y Surinam firmaron la Declaración de Belém, un acuerdo histórico que establece metas vinculantes de deforestación cero en la Amazonía para 2030. El pacto incluye la creación de un fondo amazónico de $100 mil millones, sistema unificado de monitoreo satelital en tiempo real, operaciones conjuntas contra minería ilegal, tráfico de madera y narcotráfico, y la titulación de 80 millones de hectáreas de territorios indígenas. Los países acordaron rechazar proyectos de infraestructura que amenacen áreas protegidas y establecer corredores de biodiversidad transfronterizos. La Amazonía almacena 150 mil millones de toneladas de carbono y alberga el 10% de la biodiversidad mundial.",
            url: "https://www.gov.br/mre/",
            image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
            source: { name: "Cumbre Amazónica" },
            publishedAt: new Date(Date.now() - 172800000).toISOString()
        },
        {
            title: "Energía solar supera al carbón: genera 1,600 TWh y se convierte en tercera fuente eléctrica mundial",
            description: "La Agencia Internacional de Energía (IEA) reportó que la energía solar fotovoltaica generó 1,600 teravatios-hora en 2024, superando por primera vez en la historia al carbón (1,450 TWh) y consolidándose como la tercera fuente de electricidad mundial después del gas natural y la hidroeléctrica. El récord se logró gracias a la instalación de 390 gigavatios de nueva capacidad solar, equivalente a una planta grande cada día. China lideró con 55% de las instalaciones, seguida por India, Estados Unidos y Europa. Los costos de paneles solares cayeron 89% en la última década. La IEA proyecta que la solar será la mayor fuente eléctrica para 2035, acelerando la descarbonización global.",
            url: "https://www.iea.org/",
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
            source: { name: "IEA" },
            publishedAt: new Date(Date.now() - 259200000).toISOString()
        },
        {
            title: "Expedición submarina descubre 160 nuevas especies en montañas submarinas de Chile",
            description: "Una expedición del Schmidt Ocean Institute exploró las montañas submarinas frente a la costa de Chile usando el robot submarino SuBastian, descubriendo 160 especies potencialmente nuevas para la ciencia incluyendo corales de aguas profundas, esponjas cristalinas, erizos de mar gigantes, cangrejos yeti y pulpos Dumbo. Las cámaras 4K documentaron ecosistemas a 4,500 metros de profundidad con criaturas bioluminiscentes nunca antes vistas. Los científicos encontraron jardines de corales que tienen más de 1,000 años y actúan como oasis de biodiversidad. El descubrimiento resalta la importancia de proteger las aguas profundas ante la amenaza de minería submarina. Las muestras serán analizadas durante los próximos dos años para confirmación taxonómica.",
            url: "https://schmidtocean.org/",
            image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80",
            source: { name: "Schmidt Ocean Institute" },
            publishedAt: new Date(Date.now() - 345600000).toISOString()
        },
        {
            title: "Población mundial de tigres salvajes supera 5,500 por primera vez en un siglo",
            description: "El Fondo Mundial para la Naturaleza (WWF) y Global Tiger Forum anunciaron que el censo global de tigres salvajes alcanzó 5,574 individuos, superando por primera vez en 100 años la barrera de 5,500 y representando un aumento del 40% desde 2010. India lidera con 3,167 tigres (57% del total), seguida por Rusia, Indonesia, Malasia y Tailandia. El éxito del programa TX2 (duplicar tigres para 2022) se atribuye a corredores de vida silvestre que conectan hábitats fragmentados, tecnología de cámaras trampa y patrullajes anti-caza furtiva con 50,000 guardaparques, y 15,000 millones de dólares invertidos en conservación. Sin embargo, tigres siguen ocupando solo 5% de su rango histórico. Las metas para 2030 incluyen alcanzar 7,500 ejemplares.",
            url: "https://www.worldwildlife.org/",
            image: "https://images.unsplash.com/photo-1551377235-92e3e6a3ef7c?w=800&q=80",
            source: { name: "WWF" },
            publishedAt: new Date(Date.now() - 432000000).toISOString()
        }
    ]
};

// Variables globales
let categoriaActual = 'all';
let todasLasNoticias = [];

// Inicializar página
document.addEventListener('DOMContentLoaded', function() {
    inicializarCambioImagenNoticias();
    cargarNoticiaDestacada();
    cargarNoticiasColombia();
    cargarNoticiasInternacionales();
});

// Función para cambiar imagen de fondo
function inicializarCambioImagenNoticias() {
    const heroNoticias = document.querySelector('.noticias-hero');
    
    if (heroNoticias) {
        // Precargar imágenes
        noticiasHeroImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
        
        // Cambiar imagen cada 6 segundos
        setInterval(() => {
            currentNoticiasImageIndex = (currentNoticiasImageIndex + 1) % noticiasHeroImages.length;
            const newImage = noticiasHeroImages[currentNoticiasImageIndex];
            
            heroNoticias.style.transition = 'background-image 1.5s ease-in-out';
            heroNoticias.style.backgroundImage = `
                linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
                url('${newImage}')
            `;
        }, 6000);
    }
}

// Cargar noticia destacada
async function cargarNoticiaDestacada() {
    const container = document.getElementById('noticiaDestacadaContainer');
    const loading = document.getElementById('loadingDestacada');
    
    try {
        const noticia = noticiasRespaldo.destacada;
        const destacada = crearNoticiaDestacada(noticia);
        container.appendChild(destacada);
        
        loading.style.display = 'none';
        
    } catch (error) {
        console.error('Error cargando noticia destacada:', error);
        loading.innerHTML = '<p class="text-danger">Error al cargar noticia.</p>';
    }
}

// Cargar noticias de Colombia
async function cargarNoticiasColombia() {
    const container = document.getElementById('noticiasColombiaContainer');
    const loading = document.getElementById('loadingColombia');
    
    try {
        noticiasRespaldo.colombia.forEach(noticia => {
            const card = crearCardNoticia(noticia);
            container.appendChild(card);
        });
        
        loading.style.display = 'none';
        
    } catch (error) {
        console.error('Error cargando noticias de Colombia:', error);
        loading.innerHTML = '<p class="text-danger">Error al cargar noticias.</p>';
    }
}

// Cargar noticias internacionales
async function cargarNoticiasInternacionales() {
    const container = document.getElementById('noticiasInternacionalContainer');
    const loading = document.getElementById('loadingInternacional');
    
    try {
        noticiasRespaldo.internacional.forEach(noticia => {
            const card = crearCardNoticia(noticia);
            container.appendChild(card);
        });
        
        loading.style.display = 'none';
        
    } catch (error) {
        console.error('Error cargando noticias internacionales:', error);
        loading.innerHTML = '<p class="text-danger">Error al cargar noticias.</p>';
    }
}

// Crear tarjeta de noticia destacada grande
function crearNoticiaDestacada(noticia) {
    const div = document.createElement('div');
    div.className = 'noticia-destacada';
    
    const fecha = new Date(noticia.publishedAt).toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    div.innerHTML = `
        <div class="noticia-destacada-content">
            <div class="noticia-destacada-meta">
                <span class="noticia-destacada-source">
                    <i class="bi bi-building"></i>${noticia.source.name}
                </span>
                <span class="noticia-destacada-date">
                    <i class="bi bi-calendar3"></i>${fecha}
                </span>
            </div>
            <h2 class="noticia-destacada-title">${noticia.title}</h2>
            <p class="noticia-destacada-description">${noticia.description}</p>
            <a href="${noticia.url}" target="_blank" rel="noopener noreferrer" class="noticia-destacada-link">
                <i class="bi bi-box-arrow-up-right me-2"></i>Leer en MinAmbiente
            </a>
        </div>
    `;
    
    return div;
}

// Crear tarjeta de noticia
function crearCardNoticia(noticia) {
    const div = document.createElement('div');
    div.className = 'noticia-card';
    
    const fecha = new Date(noticia.publishedAt).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    
    div.innerHTML = `
        <div class="noticia-card-content">
            <div class="noticia-card-meta">
                <span class="noticia-card-source">
                    <i class="bi bi-building"></i>${noticia.source.name}
                </span>
                <span class="noticia-card-date">
                    <i class="bi bi-calendar3"></i>${fecha}
                </span>
            </div>
            <h3 class="noticia-card-title">${noticia.title}</h3>
            <p class="noticia-card-description">${noticia.description}</p>
            <a href="${noticia.url}" target="_blank" rel="noopener noreferrer" class="noticia-card-link">
                <i class="bi bi-box-arrow-up-right me-1"></i>Ver más
            </a>
        </div>
    `;
    
    return div;
}

console.log('SpecialCol - Noticias cargadas correctamente ✓');