// Datos de agrupaciones directamente en el JavaScript
const agrupacionesData = {
    "agrupaciones": [
        {
            "id": "orquestacaribe",
            "nombre": "Orquesta Caribe",
            "categoria": "Música",
            "descripcion": "Orquesta de música tropical con más de 15 años de trayectoria en la región.",
            "biografia": "Trayectoria: \n\n La Orquesta Caribe nació en 2008 con el objetivo de preservar y difundir la música tropical de la región. \n\nCarrera: \n\nA lo largo de su trayectoria, han participado en más de 100 eventos culturales y han grabado 3 álbumes de estudio. \n\nEstilo: \n\nSu repertorio incluye desde cumbia y vallenato hasta salsa y merengue, siempre manteniendo un toque caribeño distintivo.",
            "imagen": "images/agrupaciones/orquestacaribe.jpg",
            "portada": "images/agrupaciones/orquestacaribe-portada.jpg",
            "integrantes": [
                { "id": "artista1", "nombre": "Carlos", "apellido": "Gómez", "foto": "images/artistas/carlosgomez.jpg" },
                { "id": "artista2", "nombre": "María", "apellido": "Pérez", "foto": "images/artistas/mariaperez.jpg" },
                { "id": "artista3", "nombre": "Juan", "apellido": "Rodríguez", "foto": "images/artistas/juanrodriguez.jpg" },
                { "id": "artista4", "nombre": "Ana", "apellido": "Martínez", "foto": "images/artistas/anamartinez.jpg" },
                { "id": "artista5", "nombre": "Luis", "apellido": "Torres", "foto": "images/artistas/luistorres.jpg" },
                { "id": "artista6", "nombre": "Paula", "apellido": "Ramírez", "foto": "images/artistas/paularamirez.jpg" },
                { "id": "artista7", "nombre": "Jorge", "apellido": "Díaz", "foto": "images/artistas/jorgediaz.jpg" },
                { "id": "artista8", "nombre": "Sofía", "apellido": "Moreno", "foto": "images/artistas/sofiamoreno.jpg" },
                { "id": "artista9", "nombre": "Andrés", "apellido": "Ruiz", "foto": "images/artistas/andresruiz.jpg" },
                { "id": "artista10", "nombre": "Laura", "apellido": "Castro", "foto": "images/artistas/lauracastro.jpg" },
                { "nombre": "Pedro", "apellido": "López", "foto": "images/artistas/pedrolopez.jpg" },
                { "nombre": "Elena", "apellido": "Vargas", "foto": "images/artistas/elenavargas.jpg" }
            ],
            "anioFundacion": 2008,
            "email": "contacto@orquestacaribe.com",
            "telefono": "123-456-7893",
            "redes": {
                "facebook": "https://facebook.com/orquestacaribe",
                "instagram": "https://instagram.com/orquestacaribe",
                "youtube": "https://youtube.com/orquestacaribe"
            },
            "esDestacada": true,
            "logros": [
                "Ganadores del Festival de Música Tropical 2015",
                "Premio 'Mejor Orquesta Regional' 2018",
                "Presentación en el Carnaval de Barranquilla 2020",
                "3 álbumes de estudio publicados",
                "Más de 100 presentaciones en vivo"
            ],
            "trayectoria": [
                {
                    "anio": "2008",
                    "descripcion": "Fundación de la orquesta",
                    "imagen": "images/agrupaciones/orquestacaribe/galeria/fundacion.jpg"
                },
                {
                    "anio": "2015",
                    "descripcion": "Ganadores del Festival de Música Tropical"
                },
                {
                    "anio": "2018",
                    "descripcion": "Premio 'Mejor Orquesta Regional'",
                    "imagen": "images/agrupaciones/orquestacaribe/galeria/premio.jpg"
                },
                {
                    "anio": "2020",
                    "descripcion": "Presentación en el Carnaval de Barranquilla"
                }
            ],
            "galeria": [
                { "tipo": "imagen", "url": "images/agrupaciones/orquestacaribe/galeria/foto1.jpg", "titulo": "En concierto", "descripcion": "Presentación en el Teatro Municipal" },
                { "tipo": "imagen", "url": "images/agrupaciones/orquestacaribe/galeria/foto2.jpg", "titulo": "Grabación", "descripcion": "Sesión de grabación del último álbum" },
                { "tipo": "video", "url": "https://www.youtube.com/watch?v=1xp0kYWjxVQ&ab_channel=WAITEIRO", "titulo": "Concierto en vivo", "descripcion": "Presentación en el Festival de Música" }
            ],
            "eventos": [
                {
                    "id": "festival-cultural",
                    "titulo": "Festival Cultural de Primavera",
                    "fecha": "2025-08-22",
                    "hora": "16:00",
                    "lugar": "Parque Principal",
                    "enlazado": true
                },
                {
                    "id": "evento-interno",
                    "titulo": "Ensayo General",
                    "fecha": "2025-09-01",
                    "hora": "18:00",
                    "lugar": "Casa de la Cultura",
                    "enlazado": false
                }
            ]
        },
        
        {
            "id": "teatroexperimental",
            "nombre": "Teatro Experimental",
            "categoria": "Teatro",
            "descripcion": "Compañía de teatro que explora nuevas formas de expresión artística.",
            "biografia": "Trayectoria: \n\n El Teatro Experimental fue fundado en 2015 por un grupo de jóvenes actores locales. \n\nCarrera: \n\nHan presentado más de 20 obras originales y adaptaciones de clásicos del teatro. \n\nEstilo: \n\nSu enfoque innovador combina técnicas tradicionales con elementos multimedia y performance art.",
            "imagen": "images/agrupaciones/teatroexperimental.jpg",
            "portada": "images/agrupaciones/teatroexperimental-portada.jpg",
            "integrantes": 8,
            "anioFundacion": 2015,
            "email": "contacto@teatroexperimental.com",
            "telefono": "987-654-3210",
            "redes": {
                "facebook": "https://facebook.com/teatroexperimental",
                "instagram": "https://instagram.com/teatroexperimental"
            },
            "esDestacada": false,
            "logros": [
                "Premio 'Mejor Obra Experimental' 2019",
                "Participación en el Festival Nacional de Teatro 2021",
                "20 obras originales producidas",
                "Talleres de formación teatral para jóvenes"
            ],
            "trayectoria": [
                {
                    "anio": "2015",
                    "descripcion": "Fundación del grupo teatral"
                },
                {
                    "anio": "2019",
                    "descripcion": "Premio 'Mejor Obra Experimental'",
                    "imagen": "images/agrupaciones/teatroexperimental/galeria/premio.jpg"
                },
                {
                    "anio": "2021",
                    "descripcion": "Participación en el Festival Nacional de Teatro"
                }
            ],
            "galeria": [
                { "tipo": "imagen", "url": "images/agrupaciones/teatroexperimental/galeria/foto1.jpg", "titulo": "En escena", "descripcion": "Presentación de 'La Casa de Bernarda Alba'" },
                { "tipo": "imagen", "url": "images/agrupaciones/teatroexperimental/galeria/foto2.jpg", "titulo": "Ensayo", "descripcion": "Preparación para el festival" },
                { "tipo": "video", "url": "https://www.youtube.com/watch?v=ejemplo2", "titulo": "Fragmento de obra", "descripcion": "Escena de 'El Principito'" }
            ],
            "eventos": [
                {
                    "id": "obra-nueva",
                    "titulo": "Estreno: 'Los Sueños de la Ciudad'",
                    "fecha": "2025-09-15",
                    "hora": "19:00",
                    "lugar": "Teatro Municipal",
                    "enlazado": true
                }
            ]
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
            },
            "esDestacada": true
        },
        {
            "id": "coralaguachica",
            "nombre": "Coral Aguachica",
            "categoria": "Música",
            "descripcion": "Coro polifónico que interpreta música clásica y popular.",
            "imagen": "images/agrupaciones/coralaguachica.jpg",
            "integrantes": 20,
            "anioFundacion": 2010,
            "redes": {
                "facebook": "https://facebook.com/coralaguachica",
                "youtube": "https://youtube.com/coralaguachica"
            },
            "esDestacada": true
        },
        {
            "id": "danzacontemporanea",
            "nombre": "Danza Contemporánea",
            "categoria": "Danza",
            "descripcion": "Grupo de danza que fusiona estilos modernos con tradicionales.",
            "imagen": "images/agrupaciones/danzacontemporanea.jpg",
            "integrantes": 10,
            "anioFundacion": 2018,
            "redes": {
                "facebook": "https://facebook.com/danzacontemporanea",
                "instagram": "https://instagram.com/danzacontemporanea"
            },
            "esDestacada": false
        },
        {
            "id": "circourbano",
            "nombre": "Circo Urbano",
            "categoria": "Circo",
            "descripcion": "Compañía de circo contemporáneo que combina acrobacia y teatro.",
            "imagen": "images/agrupaciones/circourbano.jpg",
            "integrantes": 12,
            "anioFundacion": 2019,
            "redes": {
                "facebook": "https://facebook.com/circourbano",
                "instagram": "https://instagram.com/circourbano",
                "youtube": "https://youtube.com/circourbano"
            },
            "esDestacada": false
        },
        {
            "id": "memento",
            "nombre": "Circo Urbano",
            "categoria": "Circo",
            "descripcion": "Compañía de circo contemporáneo que combina acrobacia y teatro.",
            "imagen": "images/agrupaciones/circourbano.jpg",
            "integrantes": 12,
            "anioFundacion": 2019,
            "redes": {
                "facebook": "https://facebook.com/circourbano",
                "instagram": "https://instagram.com/circourbano",
                "youtube": "https://youtube.com/circourbano"
            },
            "esDestacada": false
        }
    ]
};

// Variables para la paginación
let agrupacionesFiltradas = [];
const agrupacionesPorPagina = 6;
let paginaActual = 1;

// Variables globales para la galería
let currentGalleryIndex = 0;
let galleryItems = [];

// Función para crear una tarjeta de agrupación
function crearTarjetaAgrupacion(agrupacion) {
    // Contador de eventos
    const numEventos = agrupacion.eventos ? agrupacion.eventos.length : 0;
    const eventosText = numEventos === 1 ? '1 evento próximo' : `${numEventos} eventos próximos`;
    
    // Determinar la ruta de la imagen basada en la ubicación actual
    const isProfilePage = window.location.pathname.includes('perfil-agrupacion.html');
    const imagenPerfil = isProfilePage ? `../${agrupacion.imagen}` : agrupacion.imagen;

    // Obtener número de integrantes correctamente
    let cantidadIntegrantes = 0;
    if (Array.isArray(agrupacion.integrantes)) {
        cantidadIntegrantes = agrupacion.integrantes.length;
    } else if (typeof agrupacion.integrantes === 'number') {
        cantidadIntegrantes = agrupacion.integrantes;
    }

    return `
        <article class="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div class="relative">
                <img src="${imagenPerfil}" alt="${agrupacion.nombre}" loading="lazy" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                <span class="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded-bl-lg">${agrupacion.categoria}</span>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-gray-800 group-hover:text-indigo-600 transition-colors">${agrupacion.nombre}</h3>
                <p class="text-gray-600 mb-4 line-clamp-2">${agrupacion.descripcion}</p>
                <div class="flex justify-between items-center mb-4">
                    <span class="text-sm text-gray-500">
                        <span class="font-medium">${cantidadIntegrantes}</span> integrantes
                    </span>
                    <span class="text-sm text-gray-500">
                        Desde <span class="font-medium">${agrupacion.anioFundacion || '-'} </span>
                    </span>
                </div>
                ${numEventos > 0 ? `
                <div class="mt-4">
                    <button onclick="mostrarEventosAgrupacionModal('${agrupacion.id}')" class="text-indigo-600 hover:text-indigo-800 text-sm flex items-center">
                        <i class="far fa-calendar-alt mr-1"></i>
                        ${eventosText}
                    </button>
                </div>
                ` : ''}
                <div class="flex justify-between items-center mt-6">
                    <div class="flex space-x-2">
                        ${agrupacion.redes && agrupacion.redes.facebook ? `<a href="${agrupacion.redes.facebook}" target="_blank" class="text-gray-400 hover:text-blue-600 transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                            </svg>
                        </a>` : ''}
                        ${agrupacion.redes && agrupacion.redes.instagram ? `<a href="${agrupacion.redes.instagram}" target="_blank" class="text-gray-400 hover:text-pink-600 transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>` : ''}
                        ${agrupacion.redes && agrupacion.redes.youtube ? `<a href="${agrupacion.redes.youtube}" target="_blank" class="text-gray-400 hover:text-red-600 transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>` : ''}
                    </div>
                    <a href="agrupaciones/perfil-agrupacion.html?id=${agrupacion.id}" class="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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

// Función para mostrar agrupaciones con paginación
function mostrarAgrupaciones() {
    console.log('Mostrando agrupaciones...');
    const agrupacionesContainer = document.getElementById('agrupaciones-container');
    if (!agrupacionesContainer) {
        console.error('No se encontró el contenedor de agrupaciones');
        return;
    }
    
    const inicio = 0;
    const fin = paginaActual * agrupacionesPorPagina;
    const agrupacionesAMostrar = agrupacionesFiltradas.slice(inicio, fin);
    
    // Limpiar el contenedor
    agrupacionesContainer.innerHTML = '';
    
    // Agregar agrupaciones
    agrupacionesAMostrar.forEach(agrupacion => {
        agrupacionesContainer.innerHTML += crearTarjetaAgrupacion(agrupacion);
    });
    
    // Mostrar u ocultar el botón "Cargar más"
    const cargarMasBtn = document.getElementById('cargar-mas');
    if (cargarMasBtn) {
        if (agrupacionesFiltradas.length > agrupacionesPorPagina && agrupacionesFiltradas.length > fin) {
            cargarMasBtn.classList.remove('hidden');
        } else {
            cargarMasBtn.classList.add('hidden');
        }
    }
    
    // Después de mostrar agrupaciones, asignar el evento a los botones
    asignarEventosBotonesAgrupacion();
}

// Función para mostrar agrupaciones destacadas
function mostrarAgrupacionesDestacadas() {
    console.log('Mostrando agrupaciones destacadas...');
    const destacadasContainer = document.getElementById('agrupaciones-destacadas');
    if (!destacadasContainer) {
        console.error('No se encontró el contenedor de agrupaciones destacadas');
        return;
    }

    // Filtrar agrupaciones destacadas
    const agrupacionesDestacadas = agrupacionesData.agrupaciones.filter(agrupacion => agrupacion.esDestacada);

    // Limpiar el contenedor
    destacadasContainer.innerHTML = '';

    // Agregar agrupaciones destacadas
    agrupacionesDestacadas.forEach(agrupacion => {
        destacadasContainer.innerHTML += crearTarjetaAgrupacion(agrupacion);
    });
}

// Función para cargar más agrupaciones
function cargarMasAgrupaciones() {
    paginaActual++;
    mostrarAgrupaciones();
}

// Función para mostrar eventos de una agrupación en un modal
window.mostrarEventosAgrupacionModal = function(agrupacionId) {
    const agrupacion = agrupacionesData.agrupaciones.find(a => a.id === agrupacionId);
    if (!agrupacion || !agrupacion.eventos) return;

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-semibold">Eventos de ${agrupacion.nombre}</h3>
                <button onclick="cerrarModal(this)" 
                        class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="space-y-3">
                ${agrupacion.eventos.map(evento => evento.enlazado ? `
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

// Función para formatear la fecha de los eventos
window.formatearFecha = function(fecha, hora) {
    const fechaObj = new Date(fecha);
    const opciones = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return `${fechaObj.toLocaleDateString('es-ES', opciones)} a las ${hora}`;
}

// Después de mostrar agrupaciones, asignar el evento a los botones
function asignarEventosBotonesAgrupacion() {
    document.querySelectorAll('.btn-eventos-agrupacion').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const id = this.getAttribute('data-agrupacion-id');
            mostrarEventosAgrupacionModal(id);
        });
    });
}

// Inicialización cuando el documento está listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('Inicializando página de agrupaciones...');
    
    // Verificar si estamos en la página de perfil o en la lista de agrupaciones
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    if (id) {
        // Estamos en la página de perfil
        cargarDatosAgrupacion();
    } else {
        // Estamos en la página de lista de agrupaciones
        // Inicializar agrupaciones filtradas con todas las agrupaciones
        agrupacionesFiltradas = [...agrupacionesData.agrupaciones];
        
        // Mostrar agrupaciones iniciales y destacadas
        mostrarAgrupaciones();
        mostrarAgrupacionesDestacadas();
        
        // Configurar botón de cargar más
        const cargarMasBtn = document.getElementById('cargar-mas');
        if (cargarMasBtn) {
            cargarMasBtn.addEventListener('click', cargarMasAgrupaciones);
            // Ocultar el botón inicialmente si no hay suficientes agrupaciones
            if (agrupacionesFiltradas.length <= agrupacionesPorPagina) {
                cargarMasBtn.classList.add('hidden');
            }
        }
    }
});

// Función para abrir el modal de la galería
function openGalleryModal(index) {
    currentGalleryIndex = index;
    const modal = document.getElementById('gallery-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalImageContainer = document.getElementById('modal-image-container');
    const item = galleryItems[currentGalleryIndex];

    if (item.tipo === 'video') {
        const embedUrl = getYoutubeEmbedUrl(item.url);
        modalImageContainer.innerHTML = `<iframe src="${embedUrl}" class="w-full h-full rounded-lg object-cover aspect-video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else {
        modalImageContainer.innerHTML = `<img src="${item.url}" alt="${item.titulo || ''}" class="w-full h-full object-contain rounded-lg">`;
    }

    modalTitle.textContent = item.titulo || '';
    modalDesc.textContent = item.descripcion || '';

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal de la galería
function closeGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    const modalImageContainer = document.getElementById('modal-image-container');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    // Limpiar el contenido del contenedor para pausar el video
    if (modalImageContainer) {
        modalImageContainer.innerHTML = '';
    }
}

// Función para navegar en la galería
function navigateGallery(direction) {
    currentGalleryIndex = (currentGalleryIndex + direction + galleryItems.length) % galleryItems.length;
    openGalleryModal(currentGalleryIndex);
}

// Función para obtener la URL de embed de YouTube
function getYoutubeEmbedUrl(url) {
    // Patrones comunes de URLs de YouTube
    const patterns = [
        // Formato: https://www.youtube.com/watch?v=VIDEO_ID
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/watch\?.*&v=)([^#&?]*).*/,
        // Formato: https://youtu.be/VIDEO_ID
        /youtu\.be\/([^#&?]*)/,
        // Formato: https://www.youtube.com/embed/VIDEO_ID
        /youtube\.com\/embed\/([^#&?]*)/
    ];

    // Intentar cada patrón
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match && match[1]) {
            return `https://www.youtube.com/embed/${match[1]}`;
        }
    }

    // Si no se encuentra un patrón válido, devolver la URL original
    console.warn('URL de YouTube no válida:', url);
    return url;
}

// Event listeners para la galería
document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.getElementById('close-gallery');
    const prevButton = document.getElementById('prev-image');
    const nextButton = document.getElementById('next-image');
    const galleryModal = document.getElementById('gallery-modal');

    if (closeButton) {
        closeButton.addEventListener('click', closeGalleryModal);
    }
    if (prevButton) {
        prevButton.addEventListener('click', () => navigateGallery(-1));
    }
    if (nextButton) {
        nextButton.addEventListener('click', () => navigateGallery(1));
    }

    // Cerrar modal con la tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeGalleryModal();
        } else if (e.key === 'ArrowLeft') {
            navigateGallery(-1);
        } else if (e.key === 'ArrowRight') {
            navigateGallery(1);
        }
    });

    // Cerrar modal al hacer clic fuera del contenido central
    if (galleryModal) {
        galleryModal.addEventListener('click', function(e) {
            if (e.target === galleryModal) {
                closeGalleryModal();
            }
        });
    }
});

// Función para cargar los datos de la agrupación
function cargarDatosAgrupacion() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    if (!id) {
        window.location.href = 'agrupaciones.html';
        return;
    }

    const agrupacion = agrupacionesData.agrupaciones.find(a => a.id === id);
    if (!agrupacion) {
        window.location.href = 'agrupaciones.html';
        return;
    }

    // Actualizar título de la página
    document.title = `${agrupacion.nombre} | Vive Aguachica`;

    // Construir el contenido del perfil
    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    // Limpiar el contenido existente
    mainContent.innerHTML = '';

    // Construir el perfil dinámicamente
    let profileHTML = `
        <!-- Imagen de portada -->
        ${agrupacion.portada || agrupacion.imagen ? `
            <div class="relative h-64 md:h-96">
                <img id="cover-image" src="${agrupacion.portada || agrupacion.imagen}" alt="${agrupacion.nombre}" class="w-full h-full object-cover">
            </div>
        ` : ''}

        <!-- Información principal -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
            <div class="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <div class="flex flex-col md:flex-row gap-6">
                    ${agrupacion.imagen ? `
                        <div class="md:w-1/3">
                            <img id="profile-image" src="${agrupacion.imagen}" alt="${agrupacion.nombre}" class="w-full aspect-square object-cover rounded-lg shadow-md">
                        </div>
                    ` : ''}
                    
                    <div class="md:w-2/3 flex flex-col justify-center">
                        <h1 id="nombre-agrupacion" class="text-3xl font-bold text-gray-900">${agrupacion.nombre}</h1>
                        ${agrupacion.categoria ? `
                            <p id="genero-agrupacion" class="text-lg text-indigo-600 mt-2">${agrupacion.categoria}</p>
                        ` : ''}
                        <!-- Biografía solo en escritorio -->
                        ${agrupacion.biografia ? `
                            <div class="hidden md:block mt-6">
                                <h2 class="text-xl font-bold text-gray-900 mb-2">Biografía</h2>
                                <div class="prose max-w-none text-gray-700">
                                    <p>${agrupacion.biografia}</p>
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>

                <!-- Información general y redes sociales -->
                <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Integrantes -->
                    ${(agrupacion.integrantes && Array.isArray(agrupacion.integrantes)) ? `
                        <div class="bg-white rounded-lg p-6 border border-gray-100">
                            <h2 class="text-xl font-bold text-indigo-800 mb-4">Integrantes</h2>
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                ${agrupacion.integrantes.length > 0 ? agrupacion.integrantes.map(integrante => `
                                    <div class="flex flex-col items-center text-center">
                                        ${integrante.foto ? `
                                            ${integrante.id ? `<a href="artistas/perfil-artista.html?id=${integrante.id}" title="Ver perfil de ${integrante.nombre} ${integrante.apellido}"><img src="${integrante.foto}" alt="${integrante.nombre} ${integrante.apellido}" class="w-16 h-16 rounded-full object-cover border-2 border-indigo-200 hover:border-indigo-500 transition mb-2 shadow-md"></a>` : `<img src="${integrante.foto}" alt="${integrante.nombre} ${integrante.apellido}" class="w-16 h-16 rounded-full object-cover border-2 border-indigo-200 mb-2 shadow-md">`}
                                        ` : ''}
                                        ${integrante.id ? `<a href="artistas/perfil-artista.html?id=${integrante.id}" class="text-indigo-700 hover:underline font-medium">${integrante.nombre} ${integrante.apellido}</a>` : `<span class="text-gray-700 font-medium">${integrante.nombre} ${integrante.apellido}</span>`}
                                    </div>
                                `).join('') : `<span class='text-gray-400'>Sin integrantes registrados</span>`}
                            </div>
                        </div>
                    ` : ''}

                    <!-- Redes sociales -->
                    ${agrupacion.redes ? `
                        <div class="bg-white rounded-lg p-6 border border-gray-100">
                            <h2 class="text-xl font-bold text-indigo-800 mb-4">Redes Sociales</h2>
                            <div class="grid grid-cols-1 gap-3">
                                ${agrupacion.redes.facebook ? `
                                    <a href="${agrupacion.redes.facebook}" target="_blank" class="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors group">
                                        <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                                        </svg>
                                        <span class="text-gray-700 group-hover:text-blue-600">Facebook</span>
                                    </a>
                                ` : ''}
                                ${agrupacion.redes.instagram ? `
                                    <a href="${agrupacion.redes.instagram}" target="_blank" class="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-pink-50 transition-colors group">
                                        <svg class="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                        <span class="text-gray-700 group-hover:text-pink-600">Instagram</span>
                                    </a>
                                ` : ''}
                                ${agrupacion.redes.youtube ? `
                                    <a href="${agrupacion.redes.youtube}" target="_blank" class="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-red-50 transition-colors group">
                                        <svg class="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                        </svg>
                                        <span class="text-gray-700 group-hover:text-red-600">YouTube</span>
                                    </a>
                                ` : ''}
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>

        <!-- Biografía en móvil -->
        ${agrupacion.biografia ? `
            <div class="block md:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div class="bg-white rounded-xl shadow-lg p-6 md:p-8">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">Biografía</h2>
                    <div class="prose max-w-none text-gray-700">
                        <p>${agrupacion.biografia}</p>
                    </div>
                </div>
            </div>
        ` : ''}

        <!-- Logros -->
        ${(agrupacion.logros && agrupacion.logros.length > 0) ? `
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div class="bg-white rounded-xl shadow-lg p-6 md:p-8">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">Logros</h2>
                    <ul class="space-y-3">
                        ${agrupacion.logros.map(logro => `
                            <li class="flex items-start gap-2">
                                <i class="fas fa-trophy text-yellow-500 mt-1"></i>
                                <span>${logro}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        ` : ''}

        <!-- Trayectoria -->
        ${(agrupacion.trayectoria && agrupacion.trayectoria.length > 0) ? `
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div class="bg-white rounded-xl shadow-lg p-6 md:p-8">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">Trayectoria</h2>
                    <div class="space-y-4">
                        ${agrupacion.trayectoria.map(hito => `
                            <div class="relative pl-8 pb-8 last:pb-0">
                                <div class="absolute left-0 top-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
                                <div class="absolute left-2 top-0 w-0.5 h-full bg-indigo-200"></div>
                                <div class="bg-white p-4 rounded-lg shadow-sm">
                                    <span class="text-sm font-medium text-indigo-600">${hito.anio}</span>
                                    <p class="mt-1">${hito.descripcion}</p>
                                    ${hito.imagen ? `
                                        <div class="mt-2 max-w-[200px]">
                                            <img src="${hito.imagen}" alt="${hito.descripcion}" class="w-full h-auto rounded-lg shadow-sm">
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        ` : ''}

        <!-- Galería -->
        ${(agrupacion.galeria && agrupacion.galeria.length > 0) ? `
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div class="bg-white rounded-xl shadow-lg p-6 md:p-8">
                    <h2 class="text-2xl font-bold text-gray-900 mb-6">Galería</h2>
                    <div id="galeria-agrupacion" class="relative">
                        <div class="flex overflow-x-auto gap-4 pb-4 snap-x scrollbar-hide">
                            ${agrupacion.galeria.map((item, idx) => {
                                if (item.tipo === 'video') {
                                    return `<div class="snap-center flex-none w-[280px] sm:w-[320px] md:w-[360px] cursor-pointer group" data-idx="${idx}">
                                        <div class="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden bg-black flex items-center justify-center">
                                            <iframe src="${getYoutubeEmbedUrl(item.url)}" class="w-full h-full rounded-lg object-cover" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        </div>
                                        <div class="mt-2">
                                            <h3 class="font-medium text-gray-900">${item.titulo || 'Video'}</h3>
                                            <p class="text-sm text-gray-500">${item.descripcion || ''}</p>
                                        </div>
                                    </div>`;
                                }
                                return `<div class="snap-center flex-none w-[280px] sm:w-[320px] md:w-[360px] cursor-pointer group" data-idx="${idx}">
                                    <div class="aspect-w-16 aspect-h-9 w-full">
                                        <img src="${item.url}" alt="${item.titulo || ''}" class="w-full h-full object-cover rounded-lg shadow-md">
                                    </div>
                                    <div class="mt-2">
                                        <h3 class="font-medium text-gray-900">${item.titulo || 'Imagen'}</h3>
                                        <p class="text-sm text-gray-500">${item.descripcion || ''}</p>
                                    </div>
                                </div>`;
                            }).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal de la galería -->
            <div id="gallery-modal" class="fixed inset-0 bg-black bg-opacity-90 z-50 hidden">
                <div class="absolute top-4 right-4">
                    <button id="close-gallery" class="text-white hover:text-gray-300 transition-colors">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4">
                    <div id="modal-content" class="relative bg-black rounded-lg overflow-hidden">
                        <div class="aspect-w-16 aspect-h-9 w-full relative">
                            <button id="prev-image" class="absolute left-1 top-1/2 -translate-y-1/2 z-10 text-white bg-black bg-opacity-30 hover:bg-opacity-60 transition-colors p-1 rounded-full opacity-60 hover:opacity-100">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                                </svg>
                            </button>
                            <div id="modal-image-container" class="w-full h-full flex items-center justify-center"></div>
                            <button id="next-image" class="absolute right-1 top-1/2 -translate-y-1/2 z-10 text-white bg-black bg-opacity-30 hover:bg-opacity-60 transition-colors p-1 rounded-full opacity-60 hover:opacity-100">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="modal-title" class="text-white text-xl font-semibold mt-4 text-center"></div>
                    <div id="modal-desc" class="text-gray-300 mt-2 text-center"></div>
                </div>
            </div>
        ` : ''}

        <!-- Eventos -->
        ${(agrupacion.eventos && agrupacion.eventos.length > 0) ? `
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div class="bg-white rounded-xl shadow-lg p-6 md:p-8">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">Próximos eventos</h2>
                    <div class="space-y-4">
                        ${agrupacion.eventos.map(evento => `
                            <div class="bg-white p-4 rounded-lg shadow-md">
                                <h3 class="text-lg font-semibold text-gray-800">${evento.titulo}</h3>
                                <p class="text-gray-600 mt-2">${new Date(evento.fecha).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })} a las ${evento.hora}</p>
                                <p class="text-gray-600">${evento.lugar}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        ` : ''}
    `;

    // Insertar el HTML generado
    mainContent.innerHTML = profileHTML;

    // Inicializar la galería si existe
    if (agrupacion.galeria && agrupacion.galeria.length > 0) {
        galleryItems = agrupacion.galeria;
        const galleryContainer = document.getElementById('galeria-agrupacion');
        if (galleryContainer) {
            galleryContainer.querySelectorAll('[data-idx]').forEach(el => {
                el.addEventListener('click', function() {
                    openGalleryModal(parseInt(this.getAttribute('data-idx')));
                });
            });
        }
    }
} 