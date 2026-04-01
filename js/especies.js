// Configuración de la API
const API_BASE = 'https://api.inaturalist.org/v1';
const PLACE_ID = 7562; // Colombia en iNaturalist

// Especies representativas de Colombia (datos complementarios)
const especiesDestacadas = [
    {
        nombre: "Jaguar",
        cientifico: "Panthera onca",
        categoria: "Mamífero",
        estado: "Casi Amenazado",
        ubicacion: "Amazonía, Chocó, Llanos Orientales",
        descripcion: "El jaguar es el felino más grande de América y el tercero del mundo. Es un cazador solitario y territorial que habita en selvas y bosques húmedos. Tiene la mordida más fuerte entre los felinos, capaz de perforar el cráneo de sus presas.",
        habitat: "Selvas tropicales, bosques húmedos y zonas ribereñas de Colombia, especialmente en la Amazonía, Chocó y los Llanos Orientales",
        peso: "56-96 kg (machos), 41-70 kg (hembras)",
        longitud: "1.1-1.9 m (sin cola)",
        velocidad: "Hasta 80 km/h en carreras cortas",
        dieta: "Carnívoro: capibaras, pecaríes, tapires, caimanes y peces",
        conservacion: "NT - Casi Amenazado",
        foto: "https://th.bing.com/th/id/OIP.BfLaG0racuGuQ93ENgw9owHaD4?w=327&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3"
    },
    {
        nombre: "Oso de Anteojos",
        cientifico: "Tremarctos ornatus",
        categoria: "Mamífero",
        estado: "Vulnerable",
        ubicacion: "Cordilleras andinas, Páramos",
        descripcion: "También conocido como oso andino, es la única especie de oso que habita en Sudamérica. Se caracteriza por las manchas blancas alrededor de sus ojos que parecen anteojos. Es principalmente herbívoro y juega un papel crucial en la dispersión de semillas.",
        habitat: "Bosques andinos, páramos y zonas montañosas entre 1,000 y 4,750 metros de altitud en las cordilleras colombianas",
        peso: "80-125 kg (machos), 60-80 kg (hembras)",
        longitud: "1.5-1.8 m",
        dieta: "90% vegetales: bromelias, frutos, hojas, bambú; 10% insectos y pequeños mamíferos",
        vida: "20-25 años en vida silvestre",
        conservacion: "VU - Vulnerable",
        foto: "https://tse2.mm.bing.net/th/id/OIP.6nTcGi3x_UILZj_J842IBAHaEK?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        nombre: "Cóndor de los Andes",
        cientifico: "Vultur gryphus",
        categoria: "Ave",
        estado: "Preocupación Menor",
        ubicacion: "Cordilleras andinas, Páramos",
        descripcion: "Ave carroñera emblemática de los Andes y símbolo nacional de Colombia. Es una de las aves voladoras más grandes del mundo, puede volar a alturas de 5,000-6,000 metros y recorrer hasta 300 km diarios en busca de alimento.",
        habitat: "Montañas andinas, páramos y zonas abiertas de gran altitud. Anida en acantilados rocosos inaccesibles",
        envergadura: "2.8-3.3 m",
        peso: "7.5-15 kg",
        vida: "50-70 años (uno de los animales más longevos)",
        dieta: "Carroñero: se alimenta de animales muertos, preferiblemente grandes mamíferos",
        reproduccion: "Pone un solo huevo cada 2 años",
        conservacion: "NT - Casi Amenazado",
        foto: "https://content.nationalgeographic.com.es/medio/2025/07/23/vulturgryphusheadlinnaeus1758_00000000_44614154_250723131734_1280x740.webp"
    },
    {
        nombre: "Delfín Rosado",
        cientifico: "Inia geoffrensis",
        categoria: "Mamífero",
        estado: "En Peligro",
        ubicacion: "Amazonía, Orinoquía",
        descripcion: "Delfín de agua dulce que habita en los ríos de la Amazonía. Su color rosado se intensifica con la edad y es más pronunciado en los machos. Tiene el cerebro más grande entre los delfines de río y es conocido por su inteligencia y curiosidad.",
        habitat: "Ríos Amazonas, Orinoco, Putumayo y sus afluentes. Prefiere aguas turbias y zonas con vegetación acuática",
        longitud: "2-2.5 m",
        peso: "85-185 kg",
        dieta: "Peces (más de 50 especies), crustáceos y tortugas pequeñas",
        vida: "30 años aproximadamente",
        habilidad: "Puede girar su cabeza 90 grados y nadar boca abajo",
        conservacion: "EN - En Peligro",
        foto: "https://grupovierci.brightspotcdn.com/dims4/default/0e5f4db/2147483647/strip/true/crop/2000x1125+0+100/resize/1440x810!/quality/90/?url=https%3A%2F%2Fk2-prod-grupo-vierci.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fadjuntos%2F161%2Fimagenes%2F011%2F060%2F0011060339.jpg"
    },
    {
        nombre: "Rana Dorada Venenosa",
        cientifico: "Phyllobates terribilis",
        categoria: "Anfibio",
        estado: "En Peligro",
        ubicacion: "Chocó, Pacífico",
        descripcion: "Considerada el animal más venenoso del mundo. Su piel brillante contiene suficiente batracotoxina para matar a 10 humanos adultos. Las comunidades indígenas Emberá del Chocó tradicionalmente usaban su veneno para impregnar dardos de caza. Curiosamente, en cautiverio pierden completamente su toxicidad ya que obtienen el veneno de su dieta de hormigas y ácaros específicos de la selva.",
        habitat: "Selvas húmedas del Pacífico colombiano, especialmente en el departamento del Chocó, cerca de arroyos",
        tamano: "4-5 cm de longitud",
        veneno: "1 mg de batracotoxina (letal para humanos)",
        dieta: "Hormigas, termitas, escarabajos y otros pequeños invertebrados",
        colores: "Amarillo, naranja o verde menta",
        vida: "10-15 años",
        conservacion: "EN - En Peligro",
        foto: "https://inaturalist-open-data.s3.amazonaws.com/photos/86411314/original.jpg"
    },
    {
        nombre: "Guacamaya Bandera",
        cientifico: "Ara macao",
        categoria: "Ave",
        estado: "Preocupación Menor",
        ubicacion: "Amazonía, Pacífico",
        descripcion: "Ave emblemática de las selvas tropicales con plumaje rojo, azul y amarillo inconfundible. Son animales monógamos que permanecen con su pareja de por vida, demostrando gran fidelidad y cooperación. Pueden vivir hasta 75 años en cautiverio y son capaces de imitar sonidos humanos. Su potente pico puede romper las nueces más duras de la selva.",
        habitat: "Selvas húmedas tropicales y bosques de galería en la Amazonía y costa Pacífica colombiana",
        longitud: "81-96 cm",
        envergadura: "110-125 cm",
        peso: "900-1,500 gramos",
        dieta: "Frutas, nueces, semillas, néctar e insectos",
        vida: "40-50 años en vida silvestre, hasta 75 en cautiverio",
        conservacion: "LC - Preocupación Menor",
        foto: "https://static.wikia.nocookie.net/republica-colombia/images/c/c6/Guacamaya_Bandera.jpg/revision/latest?cb=20240323185141&path-prefix=es"
    },
    {
        nombre: "Perezoso de Tres Dedos",
        cientifico: "Bradypus variegatus",
        categoria: "Mamífero",
        estado: "Preocupación Menor",
        ubicacion: "Amazonía, Región Andina, Caribe",
        descripcion: "Mamífero arbóreo famoso por su extrema lentitud, considerado el mamífero más lento del mundo. Pasa hasta 20 horas al día durmiendo colgado de los árboles. Su pelaje alberga un ecosistema completo de algas que le dan un tono verdoso y sirve de camuflaje perfecto. Solo desciende al suelo una vez por semana para defecar, momento en que es más vulnerable a depredadores.",
        habitat: "Bosques tropicales y subtropicales desde el nivel del mar hasta 2,400 metros de altitud",
        peso: "2.5-6 kg",
        longitud: "40-75 cm",
        velocidad: "0.24 km/h (el mamífero más lento del mundo)",
        dieta: "Hojas, brotes tiernos y frutas",
        digestion: "Tarda hasta un mes en digerir su comida",
        vida: "25-30 años",
        conservacion: "LC - Preocupación Menor",
        foto: "https://c.files.bbci.co.uk/488E/production/_108547581_mediaitem108545760.jpg"
    },
    {
        nombre: "Tucán Toco",
        cientifico: "Ramphastos toco",
        categoria: "Ave",
        estado: "Preocupación Menor",
        ubicacion: "Amazonía, Llanos Orientales",
        descripcion: "Ave icónica reconocida mundialmente por su enorme pico colorido que representa un tercio de su longitud total. A pesar de su tamaño impresionante, el pico es extremadamente liviano gracias a su estructura ósea hueca rellena de queratina. Funciona como termorregulador corporal, radiando calor excesivo. Son aves muy sociales que viven en grupos pequeños.",
        habitat: "Bosques tropicales, sabanas y áreas abiertas con árboles dispersos",
        longitud: "55-65 cm",
        pico: "15-20 cm de largo",
        peso: "500-860 gramos",
        dieta: "Frutas (principalmente), insectos, huevos y pequeños reptiles",
        vida: "15-20 años",
        conservacion: "LC - Preocupación Menor",
        foto: "https://static.wikia.nocookie.net/reinoanimalia/images/9/96/Tucan_toco_wiki.png/revision/latest?cb=20130303134218&path-prefix=es"
    },
    {
        nombre: "Manatí Amazónico",
        cientifico: "Trichechus inunguis",
        categoria: "Mamífero",
        estado: "Vulnerable",             
        ubicacion: "Amazonía, ríos y lagos",
        descripcion: "El más pequeño y único manatí completamente de agua dulce del mundo. Es un gentil gigante herbívoro que puede consumir hasta el 8% de su peso corporal diariamente en plantas acuáticas. Su nombre científico 'inunguis' significa 'sin uñas', característica única entre los manatíes. Son animales solitarios y tímidos, difíciles de observar en su hábitat natural.",
        habitat: "Ríos, lagos y lagunas de la cuenca amazónica colombiana, especialmente en aguas tranquilas con abundante vegetación",
        longitud: "2.5-3 m",
        peso: "350-500 kg",
        dieta: "100% herbívoro: plantas acuáticas, pastos y algas",
        respiracion: "Puede permanecer sumergido hasta 20 minutos",
        vida: "50-60 años",
        conservacion: "VU - Vulnerable",
        foto: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800"
    },
    {
        nombre: "Puma",
        cientifico: "Puma concolor",
        categoria: "Mamífero",
        estado: "Preocupación Menor",
        ubicacion: "Todas las regiones de Colombia",
        descripcion: "Llamado también león de montaña, es el felino más adaptable de América. Tiene el segundo mayor rango de distribución de cualquier mamífero terrestre del hemisferio occidental. Es un saltador extraordinario, capaz de saltar 5 metros verticalmente y 12 metros horizontalmente. Cazador solitario y territorial, marca su territorio con rasguños en árboles y rocas.",
        habitat: "Diversos: desde selvas tropicales hasta páramos, montañas y zonas áridas, desde 0 hasta 4,800 metros",
        longitud: "1-1.5 m (sin cola)",
        peso: "53-100 kg (machos), 34-48 kg (hembras)",
        salto: "Puede saltar hasta 5 metros verticalmente y 12 metros horizontalmente",
        dieta: "Venados, pecaríes, roedores, aves y ocasionalmente ganado",
        territorio: "50-400 km² por individuo",
        vida: "8-13 años en vida silvestre",
        conservacion: "LC - Preocupación Menor",
        foto: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=800"
    },
    {
        nombre: "Capibara",
        cientifico: "Hydrochoerus hydrochaeris",
        categoria: "Mamífero",
        estado: "Preocupación Menor",
        ubicacion: "Llanos Orientales, Amazonía",
        descripcion: "El roedor más grande del mundo, puede pesar hasta 65 kg. Es un animal altamente social y semiacuático que vive en grupos jerárquizados de hasta 20 individuos liderados por un macho dominante. Tiene membranas interdigitales que lo hacen excelente nadador. Son tan pacíficos que otras especies como aves y monos frecuentemente descansan sobre ellos.",
        habitat: "Humedales, pantanos, ríos y lagos de los Llanos Orientales y la Amazonía colombiana",
        longitud: "1-1.3 m",
        peso: "35-65 kg",
        dieta: "Herbívoro: pastos, plantas acuáticas y cortezas",
        social: "Viven en grupos jerárquicos liderados por un macho dominante",
        natacion: "Excelente nadador, puede dormir en el agua",
        vida: "8-10 años",
        conservacion: "LC - Preocupación Menor",
        foto: "https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?w=800"
    },
    {
        nombre: "Águila Harpía",
        cientifico: "Harpia harpyja",
        categoria: "Ave",
        estado: "Casi Amenazado",
        ubicacion: "Amazonía, Chocó",
        descripcion: "Considerada el águila más poderosa del mundo y el ave rapaz más grande de América. Sus garras son más grandes que las de un oso grizzly, midiendo hasta 13 cm. Es capaz de cazar presas de hasta 7 kg en pleno vuelo, incluyendo perezosos y monos adultos. Necesita extensas áreas de bosque primario para sobrevivir, siendo un indicador de salud del ecosistema.",
        habitat: "Selvas tropicales primarias de la Amazonía y el Chocó, necesita bosques extensos y bien conservados",
        envergadura: "2 metros",
        peso: "4-9 kg (hembras más grandes que machos)",
        garras: "Hasta 13 cm de largo",
        dieta: "Perezosos, monos, iguanas, serpientes y aves grandes",
        caza: "Puede llevar presas de hasta 7 kg en vuelo",
        vida: "25-35 años",
        conservacion: "NT - Casi Amenazado",
        foto: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=800"
    },
    {
        nombre: "Coatí",
        cientifico: "Nasua nasua",
        categoria: "Mamífero",
        estado: "Preocupación Menor",
        ubicacion: "Amazonía, Región Andina",
        descripcion: "Mamífero social de la familia de los mapaches con un hocico largo y flexible ideal para buscar comida en grietas y bajo la corteza de árboles. Las hembras y crías viven en grupos llamados 'bandas' de hasta 30 individuos, mientras los machos adultos son solitarios. Son omnívoros oportunistas y excelentes trepadores con cola larga que usan para equilibrio.",
        habitat: "Bosques tropicales y subtropicales, desde el nivel del mar hasta 2,500 metros",
        longitud: "85-110 cm (incluyendo cola)",
        peso: "3-6 kg",
        dieta: "Omnívoro: frutas, insectos, pequeños vertebrados, huevos y carroña",
        social: "Las hembras y crías viven en grupos llamados 'bandas'",
        vida: "7-8 años en vida silvestre, hasta 14 en cautiverio",
        conservacion: "LC - Preocupación Menor",
        foto: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800"
    },
    {
        nombre: "Mono Aullador Rojo",
        cientifico: "Alouatta seniculus",
        categoria: "Mamífero",
        estado: "Preocupación Menor",
        ubicacion: "Amazonía, Región Andina, Caribe",
        descripcion: "Conocido como el primate más ruidoso del mundo, su potente aullido puede escucharse hasta 5 km de distancia. Los machos poseen un hueso hioides agrandado que funciona como caja de resonancia, amplificando su voz hasta 140 decibeles. Usan estos aullidos al amanecer y atardecer para marcar territorio. Son principalmente folívoros, consumiendo un 75% de hojas.",
        habitat: "Bosques húmedos tropicales, bosques de galería y manglares hasta 3,200 metros",
        longitud: "44-65 cm (sin cola)",
        peso: "4-9 kg",
        dieta: "Hojas (75%), frutas (20%), flores y brotes",
        sonido: "Su aullido alcanza 140 decibeles",
        vida: "15-20 años",
        conservacion: "LC - Preocupación Menor",
        foto: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800"
    },
    {
        nombre: "Anaconda Verde",
        cientifico: "Eunectes murinus",
        categoria: "Reptil",
        estado: "Preocupación Menor",
        ubicacion: "Amazonía, Orinoquía",
        descripcion: "La serpiente más pesada del mundo y una de las más largas, pudiendo superar los 9 metros. Es principalmente acuática y excelente nadadora, pasando la mayor parte del tiempo sumergida en ríos y pantanos. No es venenosa, mata por constricción aplastando lentamente a sus presas. Puede estar sin comer hasta 6 meses después de una comida grande.",
        habitat: "Ríos, pantanos y lagunas de la Amazonía y Orinoquía colombiana",
        longitud: "5-9 metros (las hembras son más grandes)",
        peso: "30-70 kg, hasta 250 kg en casos excepcionales",
        dieta: "Capibaras, pecaríes, caimanes, aves acuáticas, peces y tortugas",
        gestacion: "Ovovivípara: da a luz hasta 40 crías vivas",
        vida: "10-30 años",
        conservacion: "LC - Preocupación Menor",
        foto: "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=800"
    },
    {
        nombre: "Ocelote",
        cientifico: "Leopardus pardalis",
        categoria: "Mamífero",
        estado: "Preocupación Menor",
        ubicacion: "Amazonía, Chocó, Llanos",
        descripcion: "Felino mediano con hermoso patrón de manchas únicas como huellas digitales. Es nocturno y solitario, excelente nadador y trepador. Fue cazado casi hasta la extinción en los años 60-70 por su hermosa piel, con millones de pieles exportadas. Cada ocelote requiere un territorio de hasta 46 km² y marca su área con orina y rasguños.",
        habitat: "Diversos ecosistemas desde selvas hasta zonas semiáridas, hasta 3,000 metros",
        longitud: "70-100 cm (sin cola)",
        peso: "8-16 kg",
        dieta: "Roedores, aves, reptiles, peces y mamíferos pequeños",
        territorio: "3-46 km² dependiendo del hábitat",
        vida: "7-10 años en vida silvestre, hasta 20 en cautiverio",
        conservacion: "LC - Preocupación Menor",
        foto: "https://images.unsplash.com/photo-1606504521577-5b8b8b6c0e3e?w=800"
    },
    {
        nombre: "Oso Hormiguero Gigante",
        cientifico: "Myrmecophaga tridactyla",
        categoria: "Mamífero",
        estado: "Vulnerable",
        ubicacion: "Llanos Orientales, Amazonía",
        descripcion: "El más grande de los cuatro especies de osos hormigueros. Posee garras poderosas de hasta 10 cm que usa para abrir termiteros. Su lengua puede extenderse hasta 60 cm y está cubierta de saliva pegajosa, entrando y saliendo hasta 150 veces por minuto. Consume hasta 30,000 hormigas y termitas diariamente. Es sorprendentemente buen nadador.",
        habitat: "Sabanas, pastizales y bosques de galería en los Llanos y la Amazonía",
        longitud: "1.8-2.4 m (incluyendo cola)",
        peso: "33-41 kg",
        dieta: "Exclusivamente hormigas y termitas",
        lengua: "60 cm de largo, puede entrar y salir 150 veces por minuto",
        vida: "14-16 años",
        conservacion: "VU - Vulnerable",
        foto: "https://images.unsplash.com/photo-1583463269030-14e1f9b7d9c8?w=800"
    },
    {
        nombre: "Tortuga Matamata",
        cientifico: "Chelus fimbriata",
        categoria: "Reptil",
        estado: "Preocupación Menor",
        ubicacion: "Amazonía, Orinoquía",
        descripcion: "Tortuga de agua dulce con apariencia prehistórica única. Su caparazón rugoso y cabeza con apéndices carnosos la hacen parecer corteza o hojas sumergidas, un camuflaje perfecto. No persigue activamente a sus presas; permanece inmóvil y cuando un pez pasa cerca, abre súbitamente su enorme boca creando un vacío que succiona a la víctima. Su cuello es extraordinariamente largo.",
        habitat: "Ríos de corriente lenta y lagunas de la Amazonía y Orinoquía",
        longitud: "40-45 cm de caparazón",
        peso: "15-17 kg",
        dieta: "Carnívora: peces e invertebrados acuáticos",
        tecnica: "Caza por succión usando su cuello extensible",
        vida: "40-75 años",
        conservacion: "LC - Preocupación Menor",
        foto: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=800"
    },
    {
        nombre: "Rana Cristal",
        cientifico: "Centrolenidae",
        categoria: "Anfibio",
        estado: "Variable según especie",
        ubicacion: "Región Andina, bosques nublados",
        descripcion: "Familia extraordinaria de ranas con piel ventral completamente transparente que permite observar sus órganos internos, corazón palpitante y huevos en desarrollo. Colombia posee la mayor diversidad mundial de ranas de cristal con más de 80 especies descritas. Los machos son padres dedicados que cuidan los huevos hasta que eclosionan. Habitan exclusivamente en bosques nublados pristinos cerca de arroyos.",
        habitat: "Bosques nublados andinos cerca de arroyos, entre 400-3,500 metros",
        tamano: "2-3 cm de longitud",
        peculiaridad: "Su piel ventral transparente permite ver su sistema circulatorio",
        dieta: "Insectos pequeños y arácnidos",
        reproduccion: "Ponen huevos en hojas sobre arroyos",
        vida: "10-14 años",
        conservacion: "Variable - Muchas especies amenazadas",
        foto: "https://images.unsplash.com/photo-1564760290292-23341e4df6ec?w=800"
    }
];

// Especies en peligro de extinción
const especiesPeligro = [
    {
        nombre: "Tití Gris",
        cientifico: "Saguinus leucopus",
        categoria: "Mamífero",
        estado: "En Peligro",
        ubicacion: "Valle del Magdalena, Santander",
        descripcion: "Pequeño primate endémico de Colombia que solo habita en el valle medio del río Magdalena. Vive en grupos familiares de 3-9 individuos. Es crucial para la dispersión de semillas y polinización de plantas. Su población ha disminuido más del 80% en las últimas tres generaciones.",
        habitat: "Bosques húmedos y secos tropicales del norte de Colombia, entre 100-1,500 metros de altitud",
        tamano: "20-30 cm (sin cola)",
        peso: "400-550 gramos",
        dieta: "Frutas, insectos, néctar, pequeños vertebrados y exudados de árboles",
        poblacion: "Menos de 2,000 individuos en vida silvestre",
        amenazas: "Deforestación masiva (90% de su hábitat destruido), tráfico ilegal de mascotas y fragmentación del bosque",
        conservacion: "EN - En Peligro",
        foto: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800"
    },
    {
        nombre: "Paujil de Pico Azul",
        cientifico: "Crax alberti",
        categoria: "Ave",
        estado: "Críticamente Amenazado",
        ubicacion: "Córdoba, Antioquia",
        descripcion: "Ave terrestre endémica de Colombia, es una de las aves más amenazadas del mundo. Su población ha disminuido drásticamente por la pérdida de hábitat. Los machos tienen un llamado muy fuerte que se escucha a kilómetros. Solo quedan poblaciones fragmentadas.",
        habitat: "Bosques húmedos de tierras bajas del norte de Colombia, principalmente en Córdoba y Antioquia",
        tamano: "82-92 cm de longitud",
        peso: "3-4 kg",
        dieta: "Frutas caídas, semillas, hojas e insectos",
        poblacion: "Menos de 250 individuos maduros",
        reproduccion: "Pone 2 huevos por temporada",
        amenazas: "Pérdida de hábitat (95% destruido), caza para consumo y captura ilegal",
        conservacion: "CR - Críticamente Amenazado",
        foto: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800"
    },
    {
        nombre: "Cocodrilo del Orinoco",
        cientifico: "Crocodylus intermedius",
        categoria: "Reptil",
        estado: "Críticamente Amenazado",
        ubicacion: "Orinoquía, Llanos Orientales",
        descripcion: "El cocodrilo de agua dulce más amenazado de América y uno de los reptiles más grandes del continente. Puede alcanzar hasta 6 metros de longitud. Estuvo al borde de la extinción en los años 70. Gracias a programas de conservación, su población se está recuperando lentamente.",
        habitat: "Cuencas de los ríos Orinoco, Meta, Arauca y Casanare en los Llanos Orientales",
        longitud: "Hasta 6 metros (machos), 3-4 metros (hembras)",
        peso: "Hasta 635 kg",
        dieta: "Peces, tortugas, aves, mamíferos y otros reptiles",
        vida: "60-80 años",
        poblacion: "Aproximadamente 1,500 individuos",
        amenazas: "Caza histórica por su piel, contaminación, pérdida de hábitat, pesca con dinamita y redes",
        conservacion: "CR - Críticamente Amenazado",
        foto: "https://images.unsplash.com/photo-1551415923-a2297c7fda79?w=800"
    },
    {
        nombre: "Tití Cabeciblanco",
        cientifico: "Saguinus oedipus",
        categoria: "Mamífero",
        estado: "Críticamente Amenazado",
        ubicacion: "Costa Caribe, Atlántico, Bolívar",
        descripcion: "Primate endémico de Colombia con un característico penacho blanco que parece una cresta punk. Uno de los 25 primates más amenazados del mundo. En los años 60-70, más de 40,000 fueron exportados para investigación biomédica. Hoy es el símbolo de la conservación en Colombia.",
        habitat: "Bosques secos tropicales y secundarios del Caribe colombiano (Atlántico, Bolívar y Sucre)",
        tamano: "21-26 cm (sin cola)",
        peso: "410-620 gramos",
        dieta: "Insectos (40%), frutas (35%), néctar (15%) y exudados vegetales",
        social: "Viven en grupos de 3-13 individuos, con cooperación para cuidar crías",
        poblacion: "Menos de 6,000 individuos en vida silvestre",
        amenazas: "Deforestación extrema (95% de hábitat perdido), tráfico ilegal y fragmentación",
        conservacion: "CR - Críticamente Amenazado",
        foto: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800"
    },
    {
        nombre: "Caimán Llanero",
        cientifico: "Crocodylus acutus",
        categoria: "Reptil",
        estado: "Vulnerable",
        ubicacion: "Costa Caribe, Pacífico",
        descripcion: "También conocido como caimán aguja o cocodrilo americano. Es el segundo cocodrilo más grande de América. Tiene un hocico largo y delgado adaptado para cazar peces. Puede tolerar agua salada, lo que le permite moverse entre diferentes cuerpos de agua.",
        habitat: "Ríos, lagunas, ciénagas y estuarios de la costa Caribe y Pacífico colombiano",
        longitud: "3-4 metros en promedio, hasta 6 metros en casos excepcionales",
        peso: "150-250 kg",
        dieta: "Peces, crustáceos, tortugas, aves acuáticas y pequeños mamíferos",
        vida: "70 años aproximadamente",
        amenazas: "Caza histórica, pérdida de humedales, contaminación y conflictos con humanos",
        conservacion: "VU - Vulnerable",
        foto: "https://images.unsplash.com/photo-1562693977-f4e8bc7a3486?w=800"
    },
    {
        nombre: "Tapir de Montaña",
        cientifico: "Tapirus pinchaque",
        categoria: "Mamífero",
        estado: "En Peligro",
        ubicacion: "Cordilleras andinas, Páramos",
        descripcion: "El tapir más pequeño y el único que vive en montañas. Tiene un pelaje denso y oscuro adaptado al frío de los páramos. Es el tapir más amenazado del mundo. Conocido como 'danta de páramo' o 'pinchaque'. Es un importante dispersor de semillas en ecosistemas de alta montaña.",
        habitat: "Bosques andinos y páramos entre 2,000-4,500 metros de altitud en Colombia, Ecuador y Perú",
        longitud: "1.5-1.8 m",
        peso: "130-180 kg",
        dieta: "Herbívoro: hojas, brotes, ramas, helechos y frutos",
        caracteristica: "Labio superior alargado y prensil (como una trompa pequeña)",
        poblacion: "Menos de 2,500 individuos",
        amenazas: "Deforestación de bosques andinos (pérdida del 90% de su hábitat), cacería ilegal para consumo de carne, construcción de carreteras que fragmentan poblaciones, cambio climático que afecta los páramos",
        conservacion: "EN - En Peligro",
        foto: "https://images.unsplash.com/photo-1544025162-60f29f412f3e?w=800"
    },
    {
        nombre: "Mono Araña Café",
        cientifico: "Ateles hybridus",
        categoria: "Mamífero",
        estado: "Críticamente Amenazado",
        ubicacion: "Norte de Colombia, Magdalena",
        descripcion: "Uno de los primates más amenazados de América. Tiene extremidades largas y cola prensil que funciona como una quinta extremidad. Vive en el dosel del bosque y rara vez baja al suelo. Es crucial para la dispersión de semillas de árboles grandes.",
        habitat: "Bosques húmedos tropicales del norte de Colombia y Venezuela, hasta 2,500 metros",
        tamano: "40-60 cm (sin cola)",
        peso: "7-9 kg",
        dieta: "Principalmente frutas (80%), complementado con hojas, flores y corteza",
        poblacion: "Menos de 250 individuos en vida silvestre",
        amenazas: "Deforestación masiva del 90% de su hábitat original, fragmentación del bosque que impide el movimiento entre poblaciones, caza para consumo y tráfico ilegal, tasa de reproducción muy baja (una cría cada 3-4 años)",
        conservacion: "CR - Críticamente Amenazado",
        foto: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800"
    },
    {
        nombre: "Perico Paramuno",
        cientifico: "Leptosittaca branickii",
        categoria: "Ave",
        estado: "Vulnerable",
        ubicacion: "Bosques alto-andinos, Páramos",
        descripcion: "Ave endémica de los Andes del norte. Habita en los bosques de niebla más altos de cualquier loro en el mundo. Depende completamente de los bosques de palmera de cera. Vive en bandadas que pueden superar los 100 individuos.",
        habitat: "Bosques alto-andinos entre 2,400-3,600 metros en Colombia, Ecuador y Perú",
        longitud: "35-40 cm",
        peso: "250-300 gramos",
        dieta: "Semillas de palmera de cera, pinos y alisos",
        poblacion: "Entre 1,500-3,000 individuos",
        amenazas: "Destrucción de bosques de niebla andinos (70% perdidos), tala de palmeras de cera para uso religioso en Semana Santa, quemas y expansión agrícola, cambio climático que afecta los bosques alto-andinos",
        conservacion: "VU - Vulnerable",
        foto: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800"
    },
    {
        nombre: "Nutria Gigante",
        cientifico: "Pteronura brasiliensis",
        categoria: "Mamífero",
        estado: "En Peligro",
        ubicacion: "Amazonía, Orinoquía",
        descripcion: "La nutria más grande del mundo. Altamente social, vive en grupos familiares de hasta 8 individuos. Son extremadamente vocales con al menos 9 tipos de vocalizaciones. Conocidas como 'lobos de río' por su comportamiento grupal al cazar.",
        habitat: "Ríos grandes, lagos y humedales de la Amazonía y Orinoquía colombiana",
        longitud: "1.5-1.8 m (sin cola)",
        peso: "22-32 kg",
        dieta: "Principalmente peces (consume 3-4 kg diarios), también crustáceos y pequeños caimanes",
        poblacion: "Estimada en menos de 5,000 individuos en toda su distribución",
        amenazas: "Caza histórica por su piel que casi las extinguió (1940-1970), contaminación de ríos por mercurio de minería ilegal, destrucción de vegetación ribereña, disminución de poblaciones de peces por sobrepesca, conflictos con pescadores",
        conservacion: "EN - En Peligro",
        foto: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800"
    },
    {
        nombre: "Armadillo Gigante",
        cientifico: "Priodontes maximus",
        categoria: "Mamífero",
        estado: "Vulnerable",
        ubicacion: "Amazonía, Llanos Orientales",
        descripcion: "El armadillo más grande del mundo. Tiene garras enormes en sus patas delanteras, especialmente la del tercer dedo que mide hasta 20 cm. Es nocturno y solitario. Puede cavar madrigueras de 5 metros en pocas horas.",
        habitat: "Bosques tropicales, sabanas y pastizales de la Amazonía y los Llanos",
        longitud: "75-100 cm (sin cola)",
        peso: "19-33 kg",
        dieta: "Hormigas, termitas, lombrices, arañas y larvas de escarabajos",
        poblacion: "Desconocida, pero en declive continuo",
        amenazas: "Pérdida y fragmentación del hábitat por deforestación y expansión agropecuaria, caza para consumo de carne (considerada delicatessen), atropellamientos en carreteras, baja tasa reproductiva (1-2 crías por año)",
        conservacion: "VU - Vulnerable",
        foto: "https://images.unsplash.com/photo-1583463269030-14e1f9b7d9c8?w=800"
    },
    {
        nombre: "Tortuga de Río Magdalena",
        cientifico: "Podocnemis lewyana",
        categoria: "Reptil",
        estado: "Críticamente Amenazado",
        ubicacion: "Río Magdalena y afluentes",
        descripcion: "Tortuga endémica de Colombia que solo habita en la cuenca del río Magdalena. Es la especie de tortuga más amenazada del país. Las hembras migran largas distancias para anidar en las playas del río.",
        habitat: "Río Magdalena y sus afluentes, especialmente zonas con playas arenosas",
        longitud: "25-35 cm de caparazón",
        peso: "5-12 kg",
        dieta: "Omnívora: plantas acuáticas, frutas caídas, peces pequeños e invertebrados",
        poblacion: "Menos de 250 individuos adultos reproductores",
        amenazas: "Captura de huevos para consumo (90% de nidos saqueados), caza de adultos para carne, degradación de playas de anidación por construcción de presas y dragado, contaminación del río, captura para tráfico de mascotas",
        conservacion: "CR - Críticamente Amenazado",
        foto: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=800"
    }
];

// Especies extintas
const especiesExtintas = [
    {
        nombre: "Grebe Colombiano",
        cientifico: "Podiceps andinus",
        categoria: "Ave",
        estado: "Extinto",
        ubicacion: "Lago de Tota, Boyacá (†)",
        descripcion: "Ave acuática endémica de Colombia que solo habitaba en el altiplano cundiboyacense. Era un ave buceadora de 35 cm que vivía en humedales de alta montaña. Era parte importante del ecosistema lacustre. Se declaró oficialmente extinta en 1977 tras años sin avistamientos.",
        habitat: "Lago de Tota (Boyacá), Laguna de Fúquene y humedales de la Sabana de Bogotá, entre 2,500-3,000 metros",
        caracteristicas: "35 cm de longitud, plumaje pardo con cuello rufo, excelente buceador",
        dieta: "Peces pequeños, insectos acuáticos y plantas acuáticas",
        extincion: "1977 (último avistamiento confirmado en 1977)",
        causa: "Introducción de especies invasoras como la trucha arcoíris que depredó sus huevos y compitió por alimento, contaminación de humedales por pesticidas agrícolas, drenaje de humedales para agricultura, cacería y recolección de huevos, desecación progresiva de los humedales",
        ultimoRegistro: "Último espécimen visto en el Lago de Tota en 1977",
        foto: "https://via.placeholder.com/400x300/2d5016/ffffff?text=Grebe+Colombiano"
    },
    {
        nombre: "Pez Graso de Tota",
        cientifico: "Rhizosomichthys totae",
        categoria: "Pez",
        estado: "Extinto",
        ubicacion: "Lago de Tota, Boyacá (†)",
        descripcion: "Pez pequeño endémico exclusivo del Lago de Tota en Boyacá. Era un pez de agua fría adaptado a las condiciones únicas del lago. Desapareció rápidamente tras la introducción de truchas. Nunca fue fotografiado vivo, solo se conservan especímenes de museo.",
        habitat: "Exclusivamente el Lago de Tota, Boyacá, a 3,015 metros sobre el nivel del mar",
        caracteristicas: "Pez pequeño de 6-8 cm, cuerpo alargado adaptado al fondo del lago",
        dieta: "Invertebrados bentónicos y material orgánico del fondo del lago",
        extincion: "Década de 1950 (declarado extinto oficialmente en 1977)",
        causa: "Introducción masiva de trucha arcoíris en 1939 que depredó el pez graso y sus huevos, competencia por recursos con especies introducidas, alteración del ecosistema lacustre por desarrollo agrícola intensivo, contaminación del lago, ausencia de medidas de conservación tempranas",
        ultimoRegistro: "Último espécimen colectado en 1944",
        foto: "https://via.placeholder.com/400x300/2d5016/ffffff?text=Pez+Graso+de+Tota"
    },
    {
        nombre: "Cacique de Santa Marta",
        cientifico: "Macroagelaius subalaris",
        categoria: "Ave",
        estado: "Extinto",
        ubicacion: "Sierra Nevada de Santa Marta (†)",
        descripcion: "Ave endémica de los humedales de la Sierra Nevada de Santa Marta. Era un pájaro negro de tamaño mediano que vivía en colonias. Solo fue descrito científicamente en 1917 y desapareció pocas décadas después. Se extinguió antes de ser completamente estudiado.",
        habitat: "Humedales y ciénagas al pie de la Sierra Nevada de Santa Marta, hasta 500 metros",
        caracteristicas: "Ave negra de 20 cm, vivía en colonias en totorales y juncos",
        dieta: "Insectos, semillas de plantas acuáticas y pequeños invertebrados",
        extincion: "Década de 1940 (último registro en 1941)",
        causa: "Drenaje masivo de ciénagas y humedales para agricultura y ganadería en la región de Santa Marta, destrucción total de su hábitat de totorales, expansión urbana, sin registros desde 1941 a pesar de búsquedas intensivas, pérdida del 95% de humedales en la región",
        ultimoRegistro: "Último espécimen colectado en 1941 en Ciénaga Grande de Santa Marta",
        foto: "https://via.placeholder.com/400x300/2d5016/ffffff?text=Cacique+de+Santa+Marta"
    },
    {
        nombre: "Guacamayo Verde de Santa Marta",
        cientifico: "Ara autocthones",
        categoria: "Ave",
        estado: "Extinto",
        ubicacion: "Sierra Nevada de Santa Marta (†)",
        descripcion: "Guacamayo endémico de la Sierra Nevada de Santa Marta. Era verde con marcas rojas y amarillas. Solo se conoce por descripciones de pobladores locales y algunos informes históricos del siglo XIX. Nunca fue fotografiado ni hay especímenes en museos.",
        habitat: "Bosques montanos de la Sierra Nevada de Santa Marta, entre 800-2,000 metros",
        caracteristicas: "Guacamayo grande, principalmente verde con marcas rojas y amarillas",
        dieta: "Frutas, nueces y semillas de árboles del bosque montano",
        extincion: "Inicios del siglo XX (circa 1900-1920)",
        causa: "Deforestación masiva de los bosques de la Sierra Nevada para café y agricultura, cacería intensiva por colonos y recolección de plumas para comercio, captura para mascotas, conflictos con agricultores, tamaño pequeño de población inicial",
        ultimoRegistro: "Reportes no confirmados hasta 1920, no existen especímenes de museo",
        foto: "https://via.placeholder.com/400x300/2d5016/ffffff?text=Guacamayo+Verde+SM"
    },
    {
        nombre: "Rana Arlequín de Quindío",
        cientifico: "Atelopus quimbaya",
        categoria: "Anfibio",
        estado: "Críticamente Amenazado (Posiblemente Extinto)",
        ubicacion: "Bosques del Quindío (†)",
        descripcion: "Rana venenosa endémica del departamento del Quindío. Era negra con patrones amarillos brillantes. No se ha visto desde 1988 a pesar de búsquedas exhaustivas. Parte del colapso global de anfibios por el hongo quitridio.",
        habitat: "Bosques nublados del Quindío entre 1,900-2,600 metros, cerca de arroyos de montaña",
        caracteristicas: "Rana pequeña de 3-4 cm, negra con patrones amarillos brillantes, piel verrugosa",
        dieta: "Insectos pequeños, ácaros y otros invertebrados",
        extincion: "Último avistamiento en 1988, probablemente extinta",
        causa: "Hongo quitridio (Batrachochytrium dendrobatidis) que causa enfermedad mortal en anfibios, deforestación del 85% de los bosques del Quindío para café, cambio climático que afecta bosques de niebla, contaminación de arroyos por pesticidas, nunca recuperada a pesar de búsquedas intensivas desde 1988",
        ultimoRegistro: "Última observación en 1988 en bosques del municipio de Génova, Quindío",
        foto: "https://via.placeholder.com/400x300/2d5016/ffffff?text=Rana+Arlequin+Quindio"
    },
    {
        nombre: "Pato de los Torrentes Colombiano",
        cientifico: "Merganetta colombiana",
        categoria: "Ave",
        estado: "Extinto",
        ubicacion: "Ríos andinos, Cundinamarca (†)",
        descripcion: "Subespecie de pato que habitaba en ríos torrentosos de los Andes colombianos. Era experto nadador en aguas rápidas. Desapareció por contaminación y alteración de ríos. Último registro en 1952 en río de Cundinamarca.",
        habitat: "Ríos de montaña con corrientes rápidas en los Andes entre 2,000-3,500 metros",
        caracteristicas: "Pato de 40 cm, plumaje gris y blanco, adaptado a nadar en torrentes",
        dieta: "Larvas de insectos acuáticos, pequeños peces y crustáceos de río",
        extincion: "Década de 1950 (último registro en 1952)",
        causa: "Contaminación severa de ríos andinos por minería y agroquímicos, canalización y represamiento de ríos, deforestación de riberas que aumentó sedimentación, cacería, introducción de truchas que compitieron por alimento",
        ultimoRegistro: "Último avistamiento en 1952 en un río de Cundinamarca",
        foto: "https://via.placeholder.com/400x300/2d5016/ffffff?text=Pato+Torrentes"
    }
];

// Variables globales
let todasLasEspecies = [];
let filtroActual = 'all';

// Array de imágenes de fondo para especies
const especiesHeroImages = [
    'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=2070&q=80',
    'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=2070&q=80',
    'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=2070&q=80',
    'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=2070&q=80',
    'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=2070&q=80'
];

let currentEspeciesImageIndex = 0;

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    cargarEspeciesComunes();
    cargarEspeciesPeligro();
    cargarEspeciesExtintas();
    inicializarFiltros();
    inicializarBusqueda();
    inicializarCambioImagenEspecies();
});

// Función para cambiar imagen de fondo en página de especies
function inicializarCambioImagenEspecies() {
    const heroEspecies = document.querySelector('.especies-hero');
    
    if (heroEspecies) {
        // Precargar imágenes
        especiesHeroImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
        
        // Cambiar imagen cada 7 segundos
        setInterval(() => {
            currentEspeciesImageIndex = (currentEspeciesImageIndex + 1) % especiesHeroImages.length;
            const newImage = especiesHeroImages[currentEspeciesImageIndex];
            
            heroEspecies.style.transition = 'background-image 1.5s ease-in-out';
            heroEspecies.style.backgroundImage = `
                linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.45)),
                url('${newImage}')
            `;
            
            console.log('Imagen especies cambiada a:', currentEspeciesImageIndex);
        }, 7000);
    }
}

// Cargar especies comunes
async function cargarEspeciesComunes() {
    const container = document.getElementById('especiesComunesContainer');
    const loading = document.getElementById('loadingComunes');
    
    try {
        // Cargar especies destacadas predefinidas
        especiesDestacadas.forEach(especie => {
            const card = crearCardEspecie(especie, 'comun');
            container.appendChild(card);
        });
        
        loading.style.display = 'none';
        
        // Intentar cargar especies adicionales de la API
        try {
            const response = await fetch(`${API_BASE}/observations/species_counts?place_id=${PLACE_ID}&iconic_taxa=Mammalia,Aves&per_page=6&quality_grade=research`);
            const data = await response.json();
            
            if (data.results && data.results.length > 0) {
                data.results.slice(0, 3).forEach(result => {
                    const especie = {
                        nombre: result.taxon.preferred_common_name || result.taxon.name,
                        cientifico: result.taxon.name,
                        categoria: result.taxon.iconic_taxon_name || 'Animal',
                        estado: 'Común',
                        descripcion: `Especie observada ${result.count} veces en Colombia. ${result.taxon.wikipedia_summary || 'Información adicional disponible en fuentes externas.'}`,
                        habitat: 'Diversos ecosistemas de Colombia',
                        foto: result.taxon.default_photo?.medium_url,
                        link: `https://www.inaturalist.org/taxa/${result.taxon.id}`
                    };
                    
                    const card = crearCardEspecie(especie, 'comun');
                    container.appendChild(card);
                });
            }
        } catch (apiError) {
            console.log('API complementaria no disponible:', apiError);
        }
        
    } catch (error) {
        console.error('Error cargando especies:', error);
        loading.innerHTML = '<p class="text-danger">Error al cargar especies. Por favor, intenta más tarde.</p>';
    }
}

// Cargar especies en peligro
async function cargarEspeciesPeligro() {
    const container = document.getElementById('especiesPeligroContainer');
    const loading = document.getElementById('loadingPeligro');
    
    try {
        especiesPeligro.forEach(especie => {
            const card = crearCardEspecie(especie, 'peligro');
            container.appendChild(card);
        });
        
        loading.style.display = 'none';
    } catch (error) {
        console.error('Error cargando especies en peligro:', error);
        loading.innerHTML = '<p class="text-danger">Error al cargar especies.</p>';
    }
}

// Cargar especies extintas
function cargarEspeciesExtintas() {
    const container = document.getElementById('especiesExtintasContainer');
    
    especiesExtintas.forEach(especie => {
        const card = crearCardEspecie(especie, 'extinto');
        container.appendChild(card);
    });
}

// Crear card de especie
function crearCardEspecie(especie, tipo) {
    const col = document.createElement('div');
    col.className = 'col-md-4 col-lg-3 especie-item';
    col.dataset.categoria = especie.categoria.toLowerCase();
    col.dataset.nombre = especie.nombre.toLowerCase();
    
    // Determinar el estado real basado en el campo 'estado' de la especie
    let tipoReal = tipo;
    let estadoClass = '';
    let estadoTexto = '';
    let estadoIcon = '';
    
    if (especie.estado.includes('Extinto')) {
        tipoReal = 'extinto';
        estadoClass = 'status-extinto';
        estadoTexto = 'Extinto';
        estadoIcon = 'bi-x-circle';
    } else if (especie.estado.includes('Críticamente') || especie.estado.includes('En Peligro')) {
        tipoReal = 'peligro';
        estadoClass = 'status-peligro';
        estadoTexto = 'En Peligro';
        estadoIcon = 'bi-exclamation-triangle';
    } else if (especie.estado.includes('Vulnerable')) {
        tipoReal = 'vulnerable';
        estadoClass = 'status-vulnerable';
        estadoTexto = 'Vulnerable';
        estadoIcon = 'bi-exclamation-circle';
    } else {
        tipoReal = 'comun';
        estadoClass = 'status-comun';
        estadoTexto = 'Común';
        estadoIcon = 'bi-check-circle';
    }
    
    col.dataset.tipo = tipoReal;
    
    // Usar foto real o imagen placeholder mejorada
    const imagenUrl = especie.foto || `https://via.placeholder.com/400x300/198754/ffffff?text=${encodeURIComponent(especie.nombre)}`;
    
    // Crear badge de ubicación si existe
    const ubicacionBadge = especie.ubicacion ? `<div class="especie-ubicacion"><i class="bi bi-geo-alt-fill"></i> ${especie.ubicacion}</div>` : '';
    
    col.innerHTML = `
        <div class="especie-card" onclick="mostrarDetalleEspecie(${JSON.stringify(especie).replace(/"/g, '&quot;')})">
            <div class="especie-card-img">
                <img src="${imagenUrl}" alt="${especie.nombre}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300/2d5016/ffffff?text=${encodeURIComponent(especie.nombre)}'">
                <div class="especie-card-status ${estadoClass}">
                    <i class="bi ${estadoIcon}"></i>
                    ${estadoTexto}
                </div>
                ${ubicacionBadge}
            </div>
            <div class="especie-card-body">
                <h5 class="especie-card-title">${especie.nombre}</h5>
                <p class="especie-card-scientific">${especie.cientifico}</p>
                <p class="especie-card-description">${especie.descripcion}</p>
                <div class="especie-card-footer">
                    <span class="especie-card-category">
                        <i class="bi bi-tag"></i> ${especie.categoria}
                    </span>
                    <span class="especie-card-link">
                        Ver más <i class="bi bi-arrow-right"></i>
                    </span>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Mostrar detalle de especie en modal
function mostrarDetalleEspecie(especie) {
    const modal = new bootstrap.Modal(document.getElementById('especieModal'));
    const modalContent = document.getElementById('modalContent');
    const modalLoading = document.getElementById('modalLoading');
    
    // Mostrar loading
    modalLoading.style.display = 'block';
    modalContent.style.display = 'none';
    
    // Abrir modal
    modal.show();
    
    // Simular carga (puedes agregar llamada a API adicional aquí)
    setTimeout(() => {
        const imagenUrl = especie.foto || `https://via.placeholder.com/800x500/2d5016/ffffff?text=${encodeURIComponent(especie.nombre)}`;
        
        const modalImage = document.getElementById('modalImage');
        modalImage.src = imagenUrl;
        modalImage.alt = especie.nombre;
        modalImage.onerror = function() {
            this.src = 'https://via.placeholder.com/800x500/2d5016/ffffff?text=' + encodeURIComponent(especie.nombre);
        };
        document.getElementById('modalNombre').textContent = especie.nombre;
        document.getElementById('modalNombreCientifico').textContent = especie.cientifico;
        document.getElementById('modalDescripcion').textContent = especie.descripcion;
        document.getElementById('modalHabitat').textContent = especie.habitat || 'Información no disponible';
        
        // Estado
        const modalEstado = document.getElementById('modalEstado');
        modalEstado.textContent = especie.estado;
        modalEstado.className = 'badge ';
        if (especie.estado.includes('Peligro') || especie.estado.includes('Amenazado')) {
            modalEstado.classList.add('bg-danger');
        } else if (especie.estado === 'Extinto') {
            modalEstado.classList.add('bg-dark');
        } else {
            modalEstado.classList.add('bg-success');
        }
        
        // Categoría
        document.getElementById('modalCategoria').textContent = especie.categoria;
        
        // Datos adicionales
        const datosAdicionales = document.getElementById('modalDatosAdicionales');
        datosAdicionales.innerHTML = '';
        
        const datos = [];
        if (especie.peso) datos.push(`<li><strong><i class="bi bi-weight text-success"></i> Peso:</strong> ${especie.peso}</li>`);
        if (especie.longitud) datos.push(`<li><strong><i class="bi bi-rulers text-success"></i> Longitud:</strong> ${especie.longitud}</li>`);
        if (especie.envergadura) datos.push(`<li><strong><i class="bi bi-arrows-expand text-success"></i> Envergadura:</strong> ${especie.envergadura}</li>`);
        if (especie.tamano) datos.push(`<li><strong><i class="bi bi-bounding-box text-success"></i> Tamaño:</strong> ${especie.tamano}</li>`);
        if (especie.dieta) datos.push(`<li><strong><i class="bi bi-egg-fried text-success"></i> Dieta:</strong> ${especie.dieta}</li>`);
        if (especie.vida) datos.push(`<li><strong><i class="bi bi-hourglass-split text-success"></i> Esperanza de vida:</strong> ${especie.vida}</li>`);
        if (especie.velocidad) datos.push(`<li><strong><i class="bi bi-speedometer2 text-success"></i> Velocidad:</strong> ${especie.velocidad}</li>`);
        if (especie.poblacion) datos.push(`<li><strong><i class="bi bi-people text-danger"></i> Población estimada:</strong> ${especie.poblacion}</li>`);
        if (especie.conservacion) datos.push(`<li><strong><i class="bi bi-shield-check text-success"></i> Estado de conservación:</strong> ${especie.conservacion}</li>`);
        if (especie.amenazas) datos.push(`<li><strong><i class="bi bi-exclamation-triangle text-danger"></i> Amenazas:</strong> ${especie.amenazas}</li>`);
        if (especie.social) datos.push(`<li><strong><i class="bi bi-people-fill text-success"></i> Comportamiento social:</strong> ${especie.social}</li>`);
        if (especie.reproduccion) datos.push(`<li><strong><i class="bi bi-heart text-success"></i> Reproducción:</strong> ${especie.reproduccion}</li>`);
        if (especie.extincion) datos.push(`<li><strong><i class="bi bi-calendar-x text-dark"></i> Año de extinción:</strong> ${especie.extincion}</li>`);
        if (especie.causa) datos.push(`<li><strong><i class="bi bi-x-circle text-dark"></i> Causa:</strong> ${especie.causa}</li>`);
        
        datosAdicionales.innerHTML = datos.length > 0 ? datos.join('') : '<li>No hay datos adicionales disponibles</li>';
        
        // Link externo
        const linkExterno = document.getElementById('modalLinkExterno');
        linkExterno.href = especie.link || `https://www.google.com/search?q=${encodeURIComponent(especie.cientifico)}`;
        
        // Ocultar loading y mostrar contenido
        modalLoading.style.display = 'none';
        modalContent.style.display = 'block';
    }, 500);
}

// Inicializar filtros
function inicializarFiltros() {
    const botonesFiltro = document.querySelectorAll('[data-filter]');
    
    console.log('Botones encontrados:', botonesFiltro.length);
    
    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', function() {
            console.log('Filtro clickeado:', this.dataset.filter);
            
            // Actualizar botones activos
            botonesFiltro.forEach(b => {
                b.classList.remove('btn-success', 'btn-warning', 'btn-danger', 'btn-dark', 'active');
                // Restaurar clase outline según el filtro
                const filtro = b.dataset.filter;
                if (filtro === 'vulnerable') {
                    b.classList.add('btn-outline-warning');
                } else if (filtro === 'peligro') {
                    b.classList.add('btn-outline-danger');
                } else if (filtro === 'extinto') {
                    b.classList.add('btn-outline-dark');
                } else {
                    b.classList.add('btn-outline-success');
                }
            });
            
            // Activar botón actual
            const filtro = this.dataset.filter;
            this.classList.remove('btn-outline-success', 'btn-outline-warning', 'btn-outline-danger', 'btn-outline-dark');
            if (filtro === 'vulnerable') {
                this.classList.add('btn-warning', 'active');
            } else if (filtro === 'peligro') {
                this.classList.add('btn-danger', 'active');
            } else if (filtro === 'extinto') {
                this.classList.add('btn-dark', 'active');
            } else {
                this.classList.add('btn-success', 'active');
            }
            
            // Aplicar filtro
            filtroActual = filtro;
            aplicarFiltros();
        });
    });
}

// Inicializar búsqueda
function inicializarBusqueda() {
    // Función deshabilitada - se removió el input de búsqueda
}

// Aplicar filtros
function aplicarFiltros(busqueda = '') {
    console.log('Aplicando filtro:', filtroActual);
    
    const items = document.querySelectorAll('.especie-item');
    let visibleCount = 0;
    
    console.log('Items encontrados:', items.length);
    
    // Referencias a las secciones
    const seccionComunes = document.getElementById('especies-comunes');
    const seccionPeligro = document.getElementById('especies-peligro');
    const seccionExtintas = document.getElementById('especies-extintas');
    
    console.log('Secciones:', seccionComunes ? 'Comunes OK' : 'Comunes NO', 
                seccionPeligro ? 'Peligro OK' : 'Peligro NO',
                seccionExtintas ? 'Extintas OK' : 'Extintas NO');
    
    // Ocultar/mostrar secciones según filtro
    if (seccionComunes && seccionPeligro && seccionExtintas) {
        if (filtroActual === 'all') {
            seccionComunes.style.display = 'block';
            seccionPeligro.style.display = 'block';
            seccionExtintas.style.display = 'block';
        } else if (filtroActual === 'comun' || filtroActual === 'vulnerable') {
            seccionComunes.style.display = 'block';
            seccionPeligro.style.display = 'none';
            seccionExtintas.style.display = 'none';
        } else if (filtroActual === 'peligro') {
            seccionComunes.style.display = 'none';
            seccionPeligro.style.display = 'block';
            seccionExtintas.style.display = 'none';
        } else if (filtroActual === 'extinto') {
            seccionComunes.style.display = 'none';
            seccionPeligro.style.display = 'none';
            seccionExtintas.style.display = 'block';
        }
    }
    
    // Filtrar items dentro de cada sección
    items.forEach(item => {
        const tipo = item.dataset.tipo;
        let mostrar = false;
        
        if (filtroActual === 'all') {
            mostrar = true;
        } else if (filtroActual === 'comun') {
            mostrar = tipo === 'comun';
        } else if (filtroActual === 'vulnerable') {
            mostrar = tipo === 'vulnerable';
        } else if (filtroActual === 'peligro') {
            mostrar = tipo === 'peligro' || tipo === 'vulnerable';
        } else if (filtroActual === 'extinto') {
            mostrar = tipo === 'extinto';
        }
        
        if (mostrar) {
            item.style.display = 'block';
            item.style.animation = 'fadeInUp 0.6s ease-out';
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });
    
    console.log('Items visibles:', visibleCount);
    
    // Mostrar mensaje si no hay resultados
    mostrarMensajeSinResultados(visibleCount);
}

// Mostrar mensaje cuando no hay resultados
function mostrarMensajeSinResultados(count) {
    const containers = ['especiesComunesContainer', 'especiesPeligroContainer', 'especiesExtintasContainer'];
    
    containers.forEach(containerId => {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        // Remover mensajes anteriores
        const oldMsg = container.querySelector('.empty-state');
        if (oldMsg) oldMsg.remove();
        
        // Contar items visibles en este contenedor
        const visibleInContainer = container.querySelectorAll('.especie-item[style*="display: block"]').length;
        
        if (visibleInContainer === 0) {
            const emptyMsg = document.createElement('div');
            emptyMsg.className = 'col-12 empty-state';
            emptyMsg.innerHTML = `
                <i class="bi bi-search"></i>
                <p>No se encontraron especies con los filtros seleccionados</p>
            `;
            container.appendChild(emptyMsg);
        }
    });
}

// Exportar función para uso global
window.mostrarDetalleEspecie = mostrarDetalleEspecie;

console.log('SpecialCol - Especies cargadas correctamente ✓');
