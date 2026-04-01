// Mapa de departamentos a regiones naturales de Colombia
const departamentosPorRegion = {
  // REGIÓN CARIBE (Costa Norte)
  "CO-ATL": "caribe",
  "CO-BOL": "caribe", 
  "CO-CES": "caribe",
  "CO-COR": "caribe",
  "CO-LAG": "caribe",
  "CO-MAG": "caribe",
  "CO-SUC": "caribe",
  
  // REGIÓN ANDINA (Centro del país)
  "CO-ANT": "andina",
  "CO-BOY": "andina",
  "CO-CAL": "andina",
  "CO-CUN": "andina",
  "CO-DC": "andina",
  "CO-HUI": "andina",
  "CO-NSA": "andina",
  "CO-QUI": "andina",
  "CO-RIS": "andina",
  "CO-SAN": "andina",
  "CO-TOL": "andina",
  
  // REGIÓN PACÍFICA (Costa Occidental)
  "CO-CHO": "pacifico",
  "CO-CAU": "pacifico",
  "CO-NAR": "pacifico",
  "CO-VAC": "pacifico",
  
  // REGIÓN ORINOQUÍA (Llanos Orientales)
  "CO-ARA": "orinoquia",
  "CO-CAS": "orinoquia",
  "CO-MET": "orinoquia",
  "CO-VID": "orinoquia",
  
  // REGIÓN AMAZONÍA (Sur del país)
  "CO-AMA": "amazonia",
  "CO-CAQ": "amazonia",
  "CO-GUA": "amazonia",
  "CO-GUV": "amazonia",
  "CO-PUT": "amazonia",
  "CO-VAU": "amazonia"
};

// Datos de las 6 regiones naturales de Colombia
const regionesData = {
  caribe: {
    nombre: "Región Caribe",
    icono: "🏖️",
    color: "#fcd34d", // Amarillo dorado brillante
    descripcion: "La región Caribe colombiana es una fascinante combinación de ecosistemas costeros, manglares, ciénagas y la imponente Sierra Nevada de Santa Marta, la montaña costera más alta del mundo. Esta región alberga desde playas paradisíacas hasta bosques secos tropicales únicos.",
    especies: "8,500+ especies documentadas",
    departamentos: "Atlántico, Bolívar, Cesar, Córdoba, La Guajira, Magdalena, Sucre (7 departamentos)",
    biodiversidad: "Ecosistemas marinos, manglares, bosques secos tropicales, ciénagas, lagunas costeras",
    especiesDestacadas: "Jaguar, manatí antillano, caimán aguja, flamencos, loros, guacamayas, tortugas marinas",
    especiesEnPeligro: "Manatí del Caribe (Trichechus manatus), Caimán llanero (Crocodylus intermedius), Tití cabeciblanco (Saguinus oedipus), Águila harpía, Tortuga carey",
    animalesPrincipales: "Iguanas, monos aulladores, perezosos, armadillos, osos hormigueros, cocodrilos, delfines, peces tropicales, cangrejos azules, mariposas morpho",
    biomasDetallados: "Bosque seco tropical (uno de los más amenazados), manglares costeros, ciénagas y humedales, arrecifes coralinos, praderas marinas, bosque de niebla en Sierra Nevada",
    area: "≈ 132.000 km²",
    clima: "Cálido tropical con temperaturas entre 24-30°C. Temporada seca y temporada de lluvias bien marcadas",
    ecosistemasClave: ["Manglares", "Bosque seco", "Lagunas costeras", "Sierra Nevada"],
    amenazas: ["Deforestación del bosque seco tropical (más del 90% perdido)", "Turismo masivo sin control", "Contaminación marina por plásticos", "Sobrepesca de especies comerciales", "Pérdida de manglares por expansión urbana", "Cambio climático y erosión costera"],
    conservacion: "Parque Nacional Natural Tayrona, Santuario de Fauna y Flora Los Flamencos, Vía Parque Isla de Salamanca, Parque Nacional Natural Sierra Nevada de Santa Marta",
    turismo: "Playas paradisíacas, cultura caribe vibrante, avistamiento de aves migratorias, buceo y snorkel, ecoturismo en Sierra Nevada",
    imagen: 'https://images.unsplash.com/photo-1593642634443-44adaa06623a?auto=format&fit=crop&w=800&q=60',
    enlaceInfo: 'https://www.todacolombia.com/regiones-naturales-de-colombia/region-caribe.html'
  },
  andina: {
    nombre: "Región Andina",
    icono: "⛰️",
    color: "#a78bfa", // Púrpura vibrante
    descripcion: "La región Andina es el corazón de Colombia, atravesada por las tres cordilleras (Oriental, Central y Occidental). Alberga los ecosistemas de páramo más extensos del mundo, valles fértiles, bosques de niebla y la zona cafetera. Es la región más poblada y diversa culturalmente del país.",
    especies: "15,000+ especies documentadas",
    departamentos: "Antioquia, Boyacá, Caldas, Cundinamarca, Huila, Norte de Santander, Quindío, Risaralda, Santander, Tolima, Bogotá D.C. (11 departamentos)",
    biodiversidad: "Páramos, bosques andinos, bosques de niebla, valles interandinos, zonas cafeteras",
    especiesDestacadas: "Oso de anteojos, cóndor de los Andes, venado de páramo, puma, colibrí paramuno, águila real",
    especiesEnPeligro: "Oso de anteojos (Tremarctos ornatus), Cóndor andino (Vultur gryphus), Danta de montaña (Tapirus pinchaque), Puma concolor, Mono araña café (Ateles hybridus)",
    animalesPrincipales: "Venados, cusumbos, ardillas, zorros, comadrejas, pumas, dantas de páramo, colibríes (157 especies), loros de montaña, guacharos, ranas de cristal, salamandras",
    biomasDetallados: "Páramos (ecosistema único de alta montaña 3000-4800 msnm), bosque alto andino, bosque de niebla, bosque subandino, valles secos interandinos, humedales de montaña",
    area: "≈ 282.000 km²",
    clima: "Variado según altitud: cálido en valles (24-28°C), templado en zonas medias (18-24°C), frío en alturas (12-18°C), páramo (<12°C)",
    ecosistemasClave: ["Páramos", "Bosques de niebla", "Zona cafetera", "Valles interandinos"],
    amenazas: ["Cambio climático que afecta páramos", "Expansión de frontera agrícola y ganadera", "Minería legal e ilegal", "Urbanización acelerada", "Contaminación de ríos y quebradas", "Pérdida de bosques nativos (75% destruidos)"],
    conservacion: "Parque Nacional Natural Los Nevados, PNN Chingaza, PNN Cocuy, Santuario de Fauna y Flora Otún Quimbaya, múltiples reservas de páramo",
    turismo: "Senderismo en páramos, avistamiento de aves endémicas, cultura cafetera (Paisaje Cultural Cafetero - UNESCO), deportes de montaña, termalismo",
    imagen: 'https://images.unsplash.com/photo-1528830984461-4d6d3f36d60a?auto=format&fit=crop&w=800&q=60',
    enlaceInfo: 'https://www.todacolombia.com/regiones-naturales-de-colombia/region-andina.html'
  },
  pacifico: {
    nombre: "Región Pacífica",
    icono: "🐋",
    color: "#22d3ee", // Cyan brillante
    descripcion: "Una de las zonas más biodiversas y lluviosas del planeta. El Chocó biogeográfico es considerado uno de los 25 'hotspots' de biodiversidad mundial. Recibe entre 8,000 y 13,000 mm de lluvia al año, siendo una de las regiones más húmedas de la Tierra.",
    especies: "12,000+ especies documentadas (muchas aún sin describir)",
    departamentos: "Chocó, Cauca, Nariño, Valle del Cauca (4 departamentos)",
    biodiversidad: "Selva húmeda tropical, manglares del Pacífico, ríos caudalosos, bosques inundables, litoral rocoso",
    especiesDestacadas: "Ballena jorobada, jaguar, puma, nutria gigante, ranas dardo venenosas, águila harpía, tucanes",
    especiesEnPeligro: "Jaguar (Panthera onca), Manatí del Pacífico, Nutria gigante (Pteronura brasiliensis), Rana arlequín (Atelopus), Mono araña (Ateles fusciceps), Águila harpía (Harpia harpyja)",
    animalesPrincipales: "Ranas venenosas (150+ especies), serpientes (boas, anacondas), caimanes, tortugas marinas, delfines, tiburones ballena, mantarrayas, perezosos de tres dedos, monos aulladores, tapires, puercoespines",
    biomasDetallados: "Selva pluvial tropical (la más biodiversa), manglares de mangle rojo y negro, bosques inundables, estuarios, playas de arena negra volcánica, formaciones coralinas",
    area: "≈ 115.000 km²",
    clima: "Extremadamente húmedo tropical. Temperatura 24-28°C constante. Lluvia casi todo el año (8,000-13,000 mm anuales)",
    ecosistemasClave: ["Selva pluvial", "Manglares", "Litoral rocoso", "Bosques inundables"],
    amenazas: ["Minería ilegal de oro y platino", "Tala indiscriminada de maderas preciosas", "Contaminación por mercurio", "Pesca industrial sin control", "Tráfico de fauna silvestre", "Deforestación (30% del bosque perdido)"],
    conservacion: "Parque Nacional Natural Utría, PNN Gorgona, PNN Sanquianga, Reserva Natural Río Ñambí, santuarios de ballenas",
    turismo: "Avistamiento de ballenas jorobadas (julio-noviembre), buceo, surf, selva virgen, cultura afrodescendiente e indígena, gastronomía del Pacífico",
    imagen: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=60',
    enlaceInfo: 'https://www.todacolombia.com/regiones-naturales-de-colombia/region-pacifica.html'
  },
  orinoquia: {
    nombre: "Región Orinoquía",
    icono: "🦌",
    color: "#fb923c", // Naranja intenso
    descripcion: "Los Llanos Orientales son extensas sabanas tropicales que se inundan en época de lluvias y se secan en verano. Es la región de la cultura llanera, el joropo y el coleo. Forma parte de la gran cuenca del río Orinoco compartida con Venezuela.",
    especies: "6,800+ especies documentadas",
    departamentos: "Arauca, Casanare, Meta, Vichada (4 departamentos)",
    biodiversidad: "Sabanas inundables, morichales, bosques de galería, ríos de aguas blancas y negras, humedales estacionales",
    especiesDestacadas: "Venado sabanero, chigüiro (capibara), anaconda llanera, caimán llanero, garzas, toninas (delfines de río)",
    especiesEnPeligro: "Caimán llanero (Crocodylus intermedius) - En peligro crítico, Jaguar, Puma, Delfín rosado (Inia geoffrensis), Oso hormiguero gigante (Myrmecophaga tridactyla), Armadillo gigante",
    animalesPrincipales: "Chigüiros (capibaras - el roedor más grande del mundo), venados sabaneros, cerdos de monte, cachicamos (armadillos), osos palmeros, anacondas (hasta 6 metros), caimanes, babillas, garzas (20+ especies), garzones, patos silvestres, loros",
    biomasDetallados: "Sabanas naturales (gramíneas y palmeras), morichales (bosques de palma moriche), bosques de galería (a orillas de ríos), esteros y humedales estacionales, matas de monte (islas de bosque)",
    area: "≈ 289.000 km²",
    clima: "Tropical de sabana con estacionalidad marcada. Época de lluvias (abril-noviembre) y época seca (diciembre-marzo). Temperatura 24-32°C",
    ecosistemasClave: ["Sabanas", "Bosques de galería", "Morichales", "Humedales estacionales"],
    amenazas: ["Ganadería extensiva sin manejo", "Quemas indiscriminadas de sabana", "Expansión de cultivos agroindustriales (palma, arroz)", "Explotación petrolera", "Contaminación de ríos", "Caza ilegal de chigüiros y venados"],
    conservacion: "Parque Nacional Natural El Tuparro, Reserva Natural Bojonawi, múltiples resguardos indígenas, áreas de protección de morichales",
    turismo: "Safaris llaneros para observar fauna, atardeceres espectaculares, cultura llanera (joropo, coleo), pesca deportiva, avistamiento de aves acuáticas",
    imagen: 'https://images.unsplash.com/photo-1617196034796-73fad06d6339?auto=format&fit=crop&w=800&q=60',
    enlaceInfo: 'https://www.todacolombia.com/regiones-naturales-de-colombia/region-orinoquia.html'
  },
  amazonia: {
    nombre: "Región Amazonía",
    icono: "🌳",
    color: "#34d399", // Verde esmeralda brillante
    descripcion: "El pulmón del mundo y el bosque tropical más grande del planeta. La Amazonía colombiana representa el 42% del territorio nacional y alberga la mayor biodiversidad por metro cuadrado de la Tierra. Es hogar de pueblos indígenas ancestrales y especies aún sin descubrir.",
    especies: "20,000+ especies documentadas (se estima que hay el doble sin identificar)",
    departamentos: "Amazonas, Caquetá, Guainía, Guaviare, Putumayo, Vaupés (6 departamentos)",
    biodiversidad: "Selva tropical húmeda, ríos amazónicos (aguas negras, blancas y claras), bosques inundables (várzea e igapó), terra firme",
    especiesDestacadas: "Delfín rosado, jaguar, puma, anaconda verde, guacamayas, loros, monos (40+ especies), pirarucú, caimán negro",
    especiesEnPeligro: "Jaguar (Panthera onca), Delfín rosado (Inia geoffrensis), Manatí amazónico (Trichechus inunguis), Nutria gigante, Águila harpía, Guacamaya azul, Tapir amazónico, Oso hormiguero gigante",
    animalesPrincipales: "Monos (tití, capuchino, aullador, araña), perezosos, dantas, armadillos gigantes, guacamayas (8 especies), tucanes, anacondas (hasta 9 metros), caimanes negros, boas, tortugas charapa, pirarucús (hasta 3 metros), pirañas, rayas de río, mariposas (1,200+ especies)",
    biomasDetallados: "Bosque de tierra firme (no se inunda), bosque de várzea (inundación estacional), bosque de igapó (permanentemente inundado), sabanas amazónicas, tepuyes (formaciones rocosas antiguas), ríos de aguas negras/blancas/claras",
    area: "≈ 483.000 km² (42% del territorio colombiano)",
    clima: "Ecuatorial lluvioso. Temperatura constante 24-27°C. Humedad relativa 80-90%. Lluvia 2,500-4,000 mm anuales distribuida todo el año",
    ecosistemasClave: ["Selva inundable", "Ríos sinuosos", "Bosque primario", "Terra firme"],
    amenazas: ["Deforestación acelerada (800,000 hectáreas perdidas en 2020-2022)", "Cultivos ilícitos y narcotráfico", "Minería ilegal de oro", "Tráfico de fauna silvestre", "Ganadería extensiva", "Carreteras ilegales", "Cambio climático", "Incendios forestales"],
    conservacion: "Parque Nacional Natural Chiribiquete (el más grande de Colombia - UNESCO), PNN Amacayacu, PNN Cahuinarí, PNN La Paya, Reserva Natural Tanimboca, múltiples resguardos indígenas",
    turismo: "Ecoturismo responsable, avistamiento de delfines rosados, observación de aves exóticas, pesca deportiva, convivencia con comunidades indígenas, canopy en selva, navegación por el río Amazonas",
    imagen: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=60',
    enlaceInfo: 'https://www.minambiente.gov.co/region-amazonica/'
  }
};


// Elementos del DOM
const svg = document.getElementById("svg-id");
const infoCard = document.getElementById("infoCard");
const cardTitle = document.getElementById("cardTitle");
const cardDesc = document.getElementById("cardDesc");
const cardBtn = document.getElementById("cardBtn");
const closeBtn = document.getElementById("closeCard");

// Función para mostrar información de la región
function mostrarInfoRegion(regionKey) {
  const region = regionesData[regionKey];
  if (!region) { console.error('Región inválida'); return; }
  const tags = region.ecosistemasClave.map(t => `<span class=\"badge-tag\">${t}</span>`).join('');
  
  // Construir HTML adicional solo si existen los datos detallados
  let biomasHTML = '';
  let especiesEnPeligroHTML = '';
  let animalesHTML = '';
  let conservacionHTML = '';
  
  if (region.biomasDetallados) {
    biomasHTML = `<div class=\"extra-box\"><h3><i class=\"bi bi-globe-americas\"></i> Biomas y ecosistemas</h3><p>${region.biomasDetallados}</p></div>`;
  }
  
  if (region.especiesEnPeligro) {
    especiesEnPeligroHTML = `<div class=\"extra-box\"><h3><i class=\"bi bi-shield-fill-exclamation text-danger\"></i> Especies en peligro</h3><p>${region.especiesEnPeligro}</p></div>`;
  }
  
  if (region.animalesPrincipales) {
    animalesHTML = `<div class=\"extra-box\"><h3><i class=\"bi bi-bug-fill\"></i> Fauna principal</h3><p>${region.animalesPrincipales}</p></div>`;
  }
  
  if (region.conservacion) {
    conservacionHTML = `<div class=\"extra-box\"><h3><i class=\"bi bi-tree-fill text-success\"></i> Áreas de conservación</h3><p>${region.conservacion}</p></div>`;
  }
  
  // Remover clase de alineación centrada
  infoCard.style.display = 'block';
  infoCard.style.alignItems = '';
  infoCard.style.justifyContent = '';
  
  // Mostrar el botón de cerrar
  closeBtn.style.display = 'flex';
  
  cardTitle.innerHTML = `<span class="region-icon">${region.icono}</span> ${region.nombre}`;
  cardDesc.innerHTML = `
    <div class="region-media">
      <img src='${region.imagen}' alt='Paisaje de ${region.nombre}' loading='lazy'>
      <a class='info-link' href='${region.enlaceInfo}' target='_blank' rel='noopener'><i class="bi bi-box-arrow-up-right"></i> Más información sobre la región</a>
    </div>
    <div class=\"region-description\">
      ${region.descripcion}
    </div>
    <div class=\"region-stats\">
      <ul>
        <li><i class=\"bi bi-geo-alt-fill text-success\"></i><span><strong>Departamentos:</strong> ${region.departamentos}</span></li>
        <li><i class=\"bi bi-tree-fill text-success\"></i><span><strong>Especies registradas:</strong> ${region.especies}</span></li>
        <li><i class=\"bi bi-aspect-ratio text-primary\"></i><span><strong>Extensión:</strong> ${region.area}</span></li>
        <li><i class=\"bi bi-cloud-sun-fill text-warning\"></i><span><strong>Clima:</strong> ${region.clima}</span></li>
      </ul>
    </div>
    <div class=\"region-tags\">${tags}</div>
    <div class=\"region-extra\">
      ${biomasHTML}
      ${animalesHTML}
      <div class=\"extra-box\"><h3><i class=\"bi bi-stars text-warning\"></i> Especies destacadas</h3><p>${region.especiesDestacadas}</p></div>
      ${especiesEnPeligroHTML}
      <div class=\"extra-box\"><h3><i class=\"bi bi-exclamation-triangle-fill text-danger\"></i> Amenazas ambientales</h3><p>${region.amenazas.join(', ')}</p></div>
      ${conservacionHTML}
      <div class="extra-box"><h3><i class="bi bi-camera-fill"></i> Turismo ecológico</h3><p>${region.turismo}</p></div>
    </div>
  `;
  infoCard.classList.add('show');
}

// Función para mostrar el mensaje placeholder inicial
function mostrarMensajeInicial() {
  infoCard.style.display = 'flex';
  infoCard.style.alignItems = 'center';
  infoCard.style.justifyContent = 'center';
  
  // Ocultar el botón de cerrar
  closeBtn.style.display = 'none';
  
  cardTitle.innerHTML = '';
  cardDesc.innerHTML = `
    <div class="info-card-placeholder">
      <i class="bi bi-hand-index-thumb"></i>
      <h3>¡Explora las Regiones de Colombia!</h3>
      <p>Haz clic en cualquier región del mapa para descubrir su biodiversidad, fauna y ecosistemas únicos.</p>
    </div>
  `;
  infoCard.classList.add('show');
}

// Función para cerrar la card
function cerrarInfoCard() {
    infoCard.classList.remove("show");
    // Mostrar mensaje inicial después de un breve delay
    setTimeout(() => {
        mostrarMensajeInicial();
    }, 100);
}

// Posiciones aproximadas para etiquetas de regiones (centros visuales dentro de cada región)
const regionPositions = {
    caribe: { top: '22%', left: '48%' },
    andina: { top: '48%', left: '38%' },
    pacifico: { top: '62%', left: '20%' },
    orinoquia: { top: '42%', left: '68%' },
    amazonia: { top: '78%', left: '55%' }
};

// Función para crear etiquetas de regiones
function crearEtiquetasRegiones() {
    const mapWrapper = document.querySelector('.map-wrapper');
    
    Object.keys(regionesData).forEach(regionKey => {
        const region = regionesData[regionKey];
        const position = regionPositions[regionKey];
        
        const label = document.createElement('div');
        label.className = 'region-label';
        label.textContent = `${region.icono} ${region.nombre}`;
        label.style.top = position.top;
        label.style.left = position.left;
        label.style.transform = 'translate(-50%, -50%)';
        
        mapWrapper.appendChild(label);
    });
}

// Función para colorear departamentos por región
function colorearRegiones() {
    console.log('🎨 Coloreando mapa por regiones...');
    
    Object.keys(departamentosPorRegion).forEach(depId => {
        const path = svg.querySelector(`#${depId}`);
        const regionKey = departamentosPorRegion[depId];
        const region = regionesData[regionKey];
        
        if (path && region) {
            path.style.fill = region.color;
            path.style.opacity = "0.85";
            path.classList.add(`region-${regionKey}`);
            path.dataset.region = regionKey;
            
            console.log(`✓ ${depId} → ${regionKey} (${region.color})`);
        }
    });
}

// Inicializar cuando cargue el DOM
document.addEventListener("DOMContentLoaded", function() {
    console.log('✅ DOM cargado - Inicializando mapa de regiones...');
    
    // Colorear regiones
    setTimeout(() => {
        colorearRegiones();
        crearEtiquetasRegiones();
        mostrarMensajeInicial(); // Mostrar mensaje inicial
    }, 100);
    
    // 1) Click en departamentos (mostrar info de su región)
    svg.addEventListener("click", function(e) {
        if (e.target.tagName === "path" && e.target.id) {
            const depId = e.target.id;
            const regionKey = departamentosPorRegion[depId];
            
            if (regionKey) {
                mostrarInfoRegion(regionKey);
                
                // Highlight de toda la región
                document.querySelectorAll('path').forEach(p => {
                    p.style.opacity = "0.5";
                    p.classList.remove('active');
                });
                
                // Resaltar todos los departamentos de esta región
                Object.keys(departamentosPorRegion).forEach(id => {
                    if (departamentosPorRegion[id] === regionKey) {
                        const p = svg.querySelector(`#${id}`);
                        if (p) {
                            p.style.opacity = "1";
                            p.classList.add('active');
                        }
                    }
                });
            }
        }
    });
    
    // 2) Cerrar card con botón X
    closeBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        cerrarInfoCard();
        document.querySelectorAll('path').forEach(p => {
            p.style.opacity = "0.85";
            p.classList.remove('active');
        });
    });
    
    // 3) Cerrar card al hacer click fuera
    document.addEventListener("click", function(e) {
        if (!e.target.closest(".map-container") && !e.target.closest(".info-card")) {
            document.querySelectorAll('path').forEach(p => {
                p.style.opacity = "0.85";
                p.classList.remove('active');
            });
            infoCard.classList.remove("show");
            setTimeout(() => {
                mostrarMensajeInicial();
            }, 100);
        }
    });
    
    // 4) Evitar que clicks dentro de la card la cierren
    infoCard.addEventListener("click", function(e) {
        e.stopPropagation();
    });
    
    // 5) Hover effects
    svg.addEventListener("mouseover", function(e) {
        if (e.target.tagName === "path" && e.target.dataset.region) {
            const regionKey = e.target.dataset.region;
            const region = regionesData[regionKey];
            
            // Resaltar toda la región en hover
            Object.keys(departamentosPorRegion).forEach(id => {
                if (departamentosPorRegion[id] === regionKey) {
                    const p = svg.querySelector(`#${id}`);
                    if (p) {
                        p.style.filter = "brightness(1.2)";
                        p.style.stroke = "#fff";
                        p.style.strokeWidth = "2";
                    }
                }
            });
            
            // Mostrar nombre de región en cursor
            e.target.setAttribute("title", `${region.icono} ${region.nombre}`);
        }
    });
    
    svg.addEventListener("mouseout", function(e) {
        if (e.target.tagName === "path" && e.target.dataset.region) {
            const regionKey = e.target.dataset.region;
            
            // Quitar highlight
            Object.keys(departamentosPorRegion).forEach(id => {
                if (departamentosPorRegion[id] === regionKey) {
                    const p = svg.querySelector(`#${id}`);
                    if (p && !p.classList.contains('active')) {
                        p.style.filter = "none";
                        p.style.stroke = "#CA1C21";
                        p.style.strokeWidth = "0.5";
                    }
                }
            });
        }
    });
    
    console.log('✅ Mapa de regiones listo!');
});

console.log('✅ Script de mapa de regiones cargado correctamente');