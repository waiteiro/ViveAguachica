// Datos de artistas directamente en el JavaScript
const artistasData = {
    "artistas": [
        {
            "id": "juanperez",
            "nombre": "Juan Pérez",
            "categoria": "Música",
            "descripcion": "Cantante y compositor de música vallenata con más de 10 años de experiencia.",
            "biografia": "Trayectoria: \n\n Juan Pérez nació en Aguachica, Cesar, en 1990. Desde pequeño mostró un gran interés por la música vallenata, aprendiendo a tocar el acordeón a los 8 años.\n\nCarrera: \n\nSu carrera profesional comenzó en 2010 cuando ganó el Festival de la Leyenda Vallenata en la categoría de aficionados. A lo largo de su trayectoria, ha compuesto más de 50 canciones, muchas de las cuales han sido éxitos en la región.\n\nEstilo: \n\nSu estilo único combina los ritmos tradicionales vallenatos con influencias modernas, creando un sonido distintivo que lo ha llevado a presentarse en importantes escenarios nacionales.",
            "logros": [
                "Ganador del Festival de la Leyenda Vallenata 2010",
                "Premio 'Pilon de Oro' 2018",
                "Premio 'Cacique de Oro' 2020",
                "Más de 50 composiciones registradas",
                "Presentaciones en 15 festivales nacionales"
            ],
            "trayectoria": [
                {
                    "anio": "1990",
                    "descripcion": "Nacimiento en Aguachica, Cesar",
                    "imagen": "images/artistas/juanperez/galeria/nacimiento.jpg"
                },
                {
                    "anio": "1998",
                    "descripcion": "Primeras lecciones de acordeón con su abuelo"
                },
                {
                    "anio": "2010",
                    "descripcion": "Ganador del Festival de la Leyenda Vallenata",
                    "imagen": "images/artistas/juanperez/galeria/festival.jpg"
                },
                {
                    "anio": "2015",
                    "descripcion": "Fundación de la Escuela de Música Vallenata"
                },
                {
                    "anio": "2020",
                    "descripcion": "Premio 'Cacique de Oro' por su contribución al vallenato"
                }
            ],
            "influencias": [
                {
                    "nombre": "Diomedes Díaz",
                    "tipo": "Músico"
                },
                {
                    "nombre": "Rafael Escalona",
                    "tipo": "Compositor"
                },
                {
                    "nombre": "Carlos Vives",
                    "tipo": "Músico"
                },
                {
                    "nombre": "Música Caribe",
                    "tipo": "Género"
                },
                {
                    "nombre": "Jazz",
                    "tipo": "Género"
                }
            ],
            "proyectos": [
                {
                    "titulo": "Nuevo Álbum: 'Raíces y Alas'",
                    "descripcion": "Proyecto discográfico que fusiona vallenato tradicional con sonidos modernos",
                    "estado": "En progreso",
                    "fechaInicio": "Enero 2024",
                    "fechaFin": "Diciembre 2024",
                    "imagen": "images/artistas/juanperez/galeria/proyecto-album.jpg"
                },
                {
                    "titulo": "Escuela de Música Vallenata",
                    "descripcion": "Programa de formación para jóvenes talentos de la región",
                    "estado": "En progreso",
                    "fechaInicio": "Marzo 2023"
                }
            ],
            "imagen": "images/artistas/juanperez/perfil.jpg",
            "portada": "images/artistas/juanperez/portada.jpg",
            "redes": {
                "facebook": "https://facebook.com/juanperez",
                "instagram": "https://instagram.com/juanperez",
                "youtube": "https://youtube.com/juanperez"
            },
            "esNuevoTalento": false,
            "eventos": [
                {
                    "id": "concierto-vallenato",
                    "titulo": "Gran Concierto Vallenato",
                    "fecha": "2025-04-15",
                    "hora": "18:00",
                    "enlazado": true
                }
            ],
            "galeria": [
                { "tipo": "imagen", "url": "images/artistas/juanperez/galeria/foto1.jpg", "titulo": "En el escenario", "descripcion": "Concierto en Aguachica 2023" },
                { "tipo": "imagen", "url": "images/artistas/juanperez/galeria/foto2.jpg", "titulo": "Con fans", "descripcion": "Firma de autógrafos" },
                { "tipo": "video", "url": "https://www.youtube.com/watch?v=b048tnySxAA&ab_channel=WAITEIRO", "titulo": "Entrevista TV", "descripcion": "Entrevista en canal regional" }
            ],
            "contenido": [
                { "titulo": "Premios", "texto": "Ganador del Festival Vallenato 2022 y nominado a los Premios Nacionales de Música." }
            ],
            "agrupaciones": [
                {
                    "id": "orquestacaribe",
                    "nombre": "Orquesta Caribe"
                },
                {
                    "id": "bandaviva",
                    "nombre": "Banda Viva"
                }
            ]
        },
        {
            "id": "mariagarcia",
            "nombre": "María García",
            "categoria": "Danza",
            "descripcion": "Bailarina profesional especializada en danzas folclóricas colombianas. Ha participado en festivales nacionales e internacionales.",
            "biografia": "Trayectoria: \n\n Juan Pérez nació en Aguachica. \n\n prueba: \n\n Todos los días bailo danza",
            "imagen": "images/artistas/mariagarcia.jpg",
            "redes": {
                "facebook": "https://facebook.com/mariagarcia",
                "instagram": "https://instagram.com/mariagarcia"
            },
            "esNuevoTalento": false,
            "eventos": [
                {
                    "id": "festival-danza",
                    "titulo": "Festival Nacional de Danza",
                    "fecha": "2025-06-10",
                    "hora": "19:00",
                    "enlazado": false
                }
            ]
        },
        {
            "id": "carlosrodriguez",
            "nombre": "Carlos Rodríguez",
            "categoria": "Teatro",
            "descripcion": "Actor y director teatral con amplia experiencia en obras locales y nacionales. Fundador de la compañía Teatro Vivo.",
            "imagen": "images/artistas/carlosrodriguez.jpg",
            "redes": {
                "facebook": "https://facebook.com/carlosrodriguez",
                "instagram": "https://instagram.com/carlosrodriguez"
            },
            "esNuevoTalento": false,
            "eventos": [
                {
                    "id": "obra-teatro",
                    "titulo": "Obra: La Vida es Sueño",
                    "fecha": "2025-07-20",
                    "hora": "20:00",
                    "enlazado": true
                }
            ]
        },
        {
            "id": "sonaguachica",
            "nombre": "Son Aguachica",
            "categoria": "Música",
            "descripcion": "Grupo musical que fusiona ritmos tradicionales con sonidos modernos. Reconocidos por su energía en el escenario.",
            "imagen": "images/artistas/sonaguachica.jpg",
            "redes": {
                "facebook": "https://facebook.com/sonaguachica",
                "instagram": "https://instagram.com/sonaguachica",
                "youtube": "https://youtube.com/sonaguachica"
            },
            "esNuevoTalento": true,
            "eventos": [
                {
                    "id": "concierto-sonaguachica",
                    "titulo": "Noche de Fusión",
                    "fecha": "2025-08-05",
                    "hora": "21:00",
                    "enlazado": false
                }
            ]
        },
        {
            "id": "danzaviva",
            "nombre": "Danza Viva",
            "categoria": "Danza",
            "descripcion": "Compañía de danza contemporánea con enfoque en la cultura local. Presentaciones en escenarios nacionales.",
            "imagen": "images/artistas/danzaviva.jpg",
            "redes": {
                "facebook": "https://facebook.com/danzaviva",
                "instagram": "https://instagram.com/danzaviva"
            },
            "esNuevoTalento": false,
            "eventos": [
                {
                    "id": "gala-danza",
                    "titulo": "Gala de Danza Viva",
                    "fecha": "2025-09-12",
                    "hora": "18:30",
                    "enlazado": true
                }
            ]
        },
        {
            "id": "waiteiro",
            "nombre": "Waiteiro",
            "categoria": "Danza",
            "descripcion": "Agrupación de danza tradicional con repertorio de la región Caribe. Más de 15 años de trayectoria.",
            "imagen": "images/artistas/waiteiro.jpg",
            "redes": {
                "facebook": "https://facebook.com/waiteiro",
                "instagram": "https://instagram.com/waiteiro"
            },
            "esNuevoTalento": false,
            "eventos": [
                {
                    "id": "festival-caribe",
                    "titulo": "Festival Caribe Danza",
                    "fecha": "2025-10-01",
                    "hora": "17:00",
                    "enlazado": false
                }
            ]
        },
        {
            "id": "analuz",
            "nombre": "Ana Luz",
            "categoria": "Danza",
            "descripcion": "Joven promesa de la danza contemporánea, destacada por su expresividad y técnica.",
            "imagen": "images/artistas/analuz.jpg",
            "redes": {
                "facebook": "https://facebook.com/analuz",
                "instagram": "https://instagram.com/analuz"
            },
            "esNuevoTalento": true,
            "eventos": [
                {
                    "id": "premio-jovenes",
                    "titulo": "Premio Jóvenes Talentos",
                    "fecha": "2025-11-15",
                    "hora": "19:30",
                    "enlazado": true
                }
            ]
        },
        {
            "id": "marithea",
            "nombre": "María Thea",
            "categoria": "Danza",
            "descripcion": "Bailarina y coreógrafa, reconocida por su innovación en la danza urbana y contemporánea.",
            "imagen": "images/artistas/marithea.jpg",
            "redes": {
                "facebook": "https://facebook.com/marithea",
                "instagram": "https://instagram.com/marithea"
            },
            "esNuevoTalento": true,
            "eventos": [
                {
                    "id": "show-urbano",
                    "titulo": "Show de Danza Urbana",
                    "fecha": "2025-12-03",
                    "hora": "20:00",
                    "enlazado": false
                }
            ]
        },
        {
            "id": "ag",
            "nombre": "Bien Gonorrea",
            "categoria": "Danza",
            "descripcion": "Grupo de danza alternativa con presentaciones en festivales independientes.",
            "imagen": "images/artistas/marithea.jpg",
            "redes": {
                "facebook": "https://facebook.com/marithea",
                "instagram": "https://instagram.com/marithea"
            },
            "esNuevoTalento": false,
            "eventos": [
                {
                    "id": "festival-independiente",
                    "titulo": "Festival Independiente",
                    "fecha": "2026-01-10",
                    "hora": "21:00",
                    "enlazado": false
                }
            ]
        }
    ]
};

// Datos de agrupaciones destacadas
const agrupacionesDestacadas = [
    {
        "id": "orquestacaribe",
        "nombre": "Orquesta Caribe",
        "categoria": "Música",
        "descripcion": "Orquesta de música tropical con más de 15 años de trayectoria en la región.",
        "imagen": "images/agrupaciones/orquestacaribe.jpg",
        "integrantes": 12,
        "anioFundacion": 2008,
        "redes": {
            "facebook": "https://facebook.com/orquestacaribe",
            "instagram": "https://instagram.com/orquestacaribe",
            "youtube": "https://youtube.com/orquestacaribe"
        }
    },
    {
        "id": "folclorvivo",
        "nombre": "Folclor Vivo",
        "categoria": "Danza",
        "descripcion": "Grupo de danza folclórica que preserva y difunde las tradiciones de la región.",
        "imagen": "images/agrupaciones/folclorvivo.jpg",
        "integrantes": 15,
        "anioFundacion": 2012,
        "redes": {
            "facebook": "https://facebook.com/folclorvivo",
            "instagram": "https://instagram.com/folclorvivo"
        }
    },
    {
        "id": "bandamunicipal",
        "nombre": "Banda Municipal",
        "categoria": "Música",
        "descripcion": "Banda oficial de la ciudad que ameniza eventos culturales y cívicos.",
        "imagen": "images/agrupaciones/bandamunicipal.jpg",
        "integrantes": 25,
        "anioFundacion": 1990,
        "redes": {
            "facebook": "https://facebook.com/bandamunicipal",
            "instagram": "https://instagram.com/bandamunicipal"
        }
    }
];

// Variables para la paginación
let artistasFiltrados = [];
const artistasPorPagina = 8;
let paginaActual = 1;

// Función para crear una tarjeta de artista
function crearTarjetaArtista(artista, esNuevoTalento = false) {
    // Contador de eventos
    const numEventos = artista.eventos ? artista.eventos.length : 0;
    const eventosText = numEventos === 1 ? '1 evento próximo' : `${numEventos} eventos próximos`;
    
    return `
        <article class="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div class="relative">
                <img src="${artista.imagen}" alt="${artista.nombre}" loading="lazy" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                <span class="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded-bl-lg">${artista.categoria}</span>
                ${esNuevoTalento ? '<span class="absolute top-0 left-0 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-br-lg">Artista Destacado</span>' : ''}
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-gray-800 group-hover:text-indigo-600 transition-colors">${artista.nombre}</h3>
                <p class="text-gray-600 mb-4 line-clamp-2">${artista.descripcion}</p>
                
                ${artista.eventos && artista.eventos.length > 0 ? `
                    <div class="mt-4">
                        <button onclick="mostrarEventosModal('${artista.id}')" 
                                class="text-indigo-600 hover:text-indigo-800 text-sm flex items-center">
                            <i class="far fa-calendar-alt mr-1"></i>
                            ${eventosText}
                        </button>
                    </div>
                ` : ''}

                <div class="mt-6 flex justify-between items-center">
                    <div class="flex space-x-2">
                        ${artista.redes.facebook ? `<a href="${artista.redes.facebook}" target="_blank" class="text-gray-400 hover:text-blue-600 transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                            </svg>
                        </a>` : ''}
                        ${artista.redes.instagram ? `<a href="${artista.redes.instagram}" target="_blank" class="text-gray-400 hover:text-pink-600 transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                            </svg>
                        </a>` : ''}
                        ${artista.redes.youtube ? `<a href="${artista.redes.youtube}" target="_blank" class="text-gray-400 hover:text-red-600 transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>` : ''}
                    </div>
                    <a href="artistas/perfil.html?id=${artista.id}" class="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Ver perfil
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    `;
}

// Función para mostrar artistas con paginación
function mostrarArtistas() {
    console.log('Mostrando artistas...');
    const artistasContainer = document.getElementById('artistas-container');
    if (!artistasContainer) {
        console.error('No se encontró el contenedor de artistas');
        return;
    }

    // Calcular índices para la paginación
    const inicio = 0;
    const fin = paginaActual * artistasPorPagina;
    
    // Obtener los artistas para la página actual
    const artistasAMostrar = artistasFiltrados.slice(inicio, fin);
    
    // Limpiar el contenedor
    artistasContainer.innerHTML = '';
    
    // Agregar artistas
    artistasAMostrar.forEach(artista => {
        const tarjetaHTML = crearTarjetaArtista(artista, artista.esNuevoTalento);
        artistasContainer.innerHTML += tarjetaHTML;
    });
    
    // Mostrar u ocultar el botón "Cargar más"
    const cargarMasBtn = document.getElementById('cargar-mas');
    if (cargarMasBtn) {
        // Solo mostrar el botón si hay más artistas por mostrar
        const totalArtistas = artistasFiltrados.length;
        const artistasMostrados = artistasAMostrar.length;
        
        if (artistasMostrados < totalArtistas) {
            cargarMasBtn.classList.remove('hidden');
        } else {
            cargarMasBtn.classList.add('hidden');
        }
    }
}

// Función para mostrar nuevos talentos
function mostrarNuevosTalentos() {
    console.log('Mostrando nuevos talentos...');
    const swiperWrapper = document.querySelector('.nuevos-talentos-swiper .swiper-wrapper');
    if (!swiperWrapper) {
        console.error('No se encontró el contenedor de nuevos talentos');
        return;
    }

    // Filtrar artistas que son nuevos talentos
    const nuevosTalentos = artistasData.artistas.filter(artista => artista.esNuevoTalento);

    // Limpiar el contenedor
    swiperWrapper.innerHTML = '';

    // Agregar nuevos talentos al Swiper
    nuevosTalentos.forEach(artista => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = crearTarjetaArtista(artista, false); // No mostrar etiqueta de nuevo en el carrusel
        swiperWrapper.appendChild(slide);
    });
}

// Función para mostrar agrupaciones destacadas
function mostrarAgrupacionesDestacadas() {
    console.log('Mostrando agrupaciones destacadas...');
    const agrupacionesContainer = document.getElementById('agrupaciones-destacadas');
    if (!agrupacionesContainer) {
        console.error('No se encontró el contenedor de agrupaciones destacadas');
        return;
    }

    // Limpiar el contenedor
    agrupacionesContainer.innerHTML = '';

    // Agregar agrupaciones destacadas
    agrupacionesDestacadas.forEach(agrupacion => {
        const tarjetaAgrupacion = document.createElement('div');
        tarjetaAgrupacion.className = 'bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300';
        tarjetaAgrupacion.innerHTML = `
            <div class="relative">
                <img src="${agrupacion.imagen}" alt="${agrupacion.nombre}" loading="lazy" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                <span class="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded-bl-lg">${agrupacion.categoria}</span>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-gray-800 group-hover:text-indigo-600 transition-colors">${agrupacion.nombre}</h3>
                <p class="text-gray-600 mb-4 line-clamp-2">${agrupacion.descripcion}</p>
                <div class="flex justify-between items-center mb-4">
                    <span class="text-sm text-gray-500">
                        <span class="font-medium">${agrupacion.integrantes}</span> integrantes
                    </span>
                    <span class="text-sm text-gray-500">
                        Desde <span class="font-medium">${agrupacion.anioFundacion}</span>
                    </span>
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex space-x-2">
                        ${agrupacion.redes.facebook ? `<a href="${agrupacion.redes.facebook}" target="_blank" class="text-gray-400 hover:text-blue-600 transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                            </svg>
                        </a>` : ''}
                        ${agrupacion.redes.instagram ? `<a href="${agrupacion.redes.instagram}" target="_blank" class="text-gray-400 hover:text-pink-600 transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                            </svg>
                        </a>` : ''}
                        ${agrupacion.redes.youtube ? `<a href="${agrupacion.redes.youtube}" target="_blank" class="text-gray-400 hover:text-red-600 transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>` : ''}
                    </div>
                    <a href="agrupaciones/${agrupacion.id}.html" class="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Ver detalles
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        `;
        agrupacionesContainer.appendChild(tarjetaAgrupacion);
    });
}

// Función para cargar más artistas
function cargarMasArtistas() {
    paginaActual++;
    mostrarArtistas();
}

// Función para mostrar eventos del artista
function mostrarEventosModal(artistaId) {
    const artista = artistasData.artistas.find(a => a.id === artistaId);
    if (!artista || !artista.eventos) return;

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-semibold">Eventos de ${artista.nombre}</h3>
                <button onclick="cerrarModal(this)" 
                        class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="space-y-3">
                ${artista.eventos.map(evento => evento.enlazado ? `
                    <a href="eventos/evento.html?id=${evento.id}" 
                       class="flex items-center p-3 hover:bg-gray-100 rounded-lg transition">
                        <div class="flex-1">
                            <h4 class="font-medium">${evento.titulo}</h4>
                            <div class="text-sm text-gray-500">
                                <span>${formatearFecha(evento.fecha, evento.hora)}</span>
                            </div>
                        </div>
                        <i class="fas fa-chevron-right text-gray-400"></i>
                    </a>
                ` : `
                    <div class="flex items-center p-3 rounded-lg">
                        <div class="flex-1">
                            <h4 class="font-medium">${evento.titulo}</h4>
                            <div class="text-sm text-gray-500">
                                <span>${formatearFecha(evento.fecha, evento.hora)}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Agregar evento para cerrar al hacer clic fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    document.body.appendChild(modal);
}

// Función para cerrar modales
function cerrarModal(button) {
    const modal = button.closest('.fixed');
    if (modal) {
        modal.remove();
    }
}

function formatearFecha(fecha, hora) {
    const fechaObj = new Date(fecha);
    const opciones = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return `${fechaObj.toLocaleDateString('es-ES', opciones)} a las ${hora}`;
}

// --- CARGA DINÁMICA DE PERFIL DE ARTISTA ---
function loadArtistData() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('id');
    if (!slug) return;

    const artista = artistasData.artistas.find(a => a.id === slug);
    if (!artista) {
        if (document.getElementById('artist-name'))
            document.getElementById('artist-name').textContent = 'Artista no encontrado';
        return;
    }

    if (document.getElementById('artist-name'))
        document.getElementById('artist-name').textContent = artista.nombre;
    if (document.getElementById('artist-category'))
        document.getElementById('artist-category').textContent = artista.categoria;
    if (document.getElementById('profile-image')) {
        document.getElementById('profile-image').src = artista.imagen;
        document.getElementById('profile-image').alt = artista.nombre;
    }
    if (document.getElementById('cover-image')) {
        document.getElementById('cover-image').src = artista.portada;
        document.getElementById('cover-image').alt = artista.nombre;
    }
    if (document.getElementById('artist-bio'))
        document.getElementById('artist-bio').textContent = artista.descripcion;
    if (artista.redes) {
        if (document.getElementById('facebook-link') && artista.redes.facebook)
            document.getElementById('facebook-link').href = artista.redes.facebook;
        if (document.getElementById('instagram-link') && artista.redes.instagram)
            document.getElementById('instagram-link').href = artista.redes.instagram;
        if (document.getElementById('youtube-link') && artista.redes.youtube)
            document.getElementById('youtube-link').href = artista.redes.youtube;
    }
    const upcomingEventsContainer = document.getElementById('upcoming-events');
    if (upcomingEventsContainer && artista.eventos && artista.eventos.length > 0) {
        upcomingEventsContainer.innerHTML = artista.eventos.map(evento => `
            <div class="bg-gray-50 p-4 rounded-lg mb-2">
                <h4 class="font-medium text-gray-800">${evento.titulo}</h4>
                <p class="text-sm text-gray-600">${new Date(evento.fecha).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })} a las ${evento.hora}</p>
            </div>
        `).join('');
    } else if (upcomingEventsContainer) {
        upcomingEventsContainer.innerHTML = '<p class="text-gray-500 text-sm">No hay eventos próximos.</p>';
    }

    // Mostrar galería de contenido
    const contentContainer = document.getElementById('artist-content');
    if (contentContainer) {
        if (artista.galeria && artista.galeria.length > 0) {
            contentContainer.innerHTML = artista.galeria.map(item => {
                if (item.tipo === 'video') {
                    return `<div class="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <div class="aspect-w-16 aspect-h-9">
                            <iframe src="${item.url}" class="w-full h-64" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div class="text-white text-center p-4">
                                <h3 class="font-medium">${item.titulo || ''}</h3>
                                <p class="text-sm mt-1">${item.descripcion || ''}</p>
                            </div>
                        </div>
                    </div>`;
                } else {
                    return `<div class="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <img src="${item.url}" alt="${item.titulo || ''}" class="w-full h-64 object-cover">
                        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div class="text-white text-center p-4">
                                <h3 class="font-medium">${item.titulo || ''}</h3>
                                <p class="text-sm mt-1">${item.descripcion || ''}</p>
                            </div>
                        </div>
                    </div>`;
                }
            }).join('');
        } else {
            contentContainer.innerHTML = '<p class="text-gray-500 text-center py-6">No hay contenido multimedia disponible.</p>';
        }
    }

    // Mostrar contenido adicional (debajo de la biografía)
    const bioSection = document.querySelector('.max-w-2xl.mx-auto.bg-white');
    if (bioSection && artista.contenido && artista.contenido.length > 0) {
        let extraContent = '<div class="mt-6">';
        artista.contenido.forEach(item => {
            extraContent += `<div class="mb-4"><h3 class="font-semibold text-gray-800 mb-1">${item.titulo}</h3><p class="text-gray-600">${item.texto}</p></div>`;
        });
        extraContent += '</div>';
        bioSection.insertAdjacentHTML('beforeend', extraContent);
    }
}

// Ejecutar solo si estamos en perfil.html
if (window.location.pathname.includes('perfil.html')) {
    document.addEventListener('DOMContentLoaded', loadArtistData);
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('Inicializando página de artistas...');
    
    // Inicializar artistasFiltrados con todos los artistas
    artistasFiltrados = [...artistasData.artistas];
    
    // Mostrar todas las secciones
    mostrarArtistas();
    mostrarNuevosTalentos();
    mostrarAgrupacionesDestacadas();
    
    // Configurar el botón de "Cargar más"
    const cargarMasBtn = document.getElementById('cargar-mas');
    if (cargarMasBtn) {
        cargarMasBtn.addEventListener('click', cargarMasArtistas);
        // Ocultar el botón inicialmente si no hay más de 8 artistas
        if (artistasFiltrados.length <= artistasPorPagina) {
            cargarMasBtn.classList.add('hidden');
        }
    }
    
    // Inicializar Swiper para nuevos talentos
    const nuevostalentosSwiper = new Swiper('.nuevos-talentos-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });
}); 