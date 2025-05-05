// Lista global de categorías válidas
const categoriasValidas = [
    "Cultura",
    "Deporte",
    "Religión",
    "Educación",
    "Arte",
    "Gastronomía",
    "Música",
    "Salud",
    "Entretenimiento",
    "Moda",
    "Infantil",
    "Político",
    "Mascotas",
    "Ambiental",
    "Tradición",
    "Social",
    "Alternativos",
    "Privados",
    "Otros"
];

// Datos de eventos directamente en el JavaScript
const eventosData = {
    "eventos": [
        {
            "id": "ejemplo-etiquetas",
            "titulo": "Festival Abierto",
            "categoria": "Cultura",
            "descripcion": "Un festival para toda la familia con entrada gratuita y actividades para todos los públicos.",
            "imagen": "eventos/images/evento-ejemplo.jpg",
            "fechaInicio": "2025-09-10",
            "hora": "10:00",
            "lugar": "Parque Central, Aguachica",
            "capacidad": 2000,
            "organizador": {
                "nombre": "Alcaldía de Aguachica",
                "contacto": "info@aguachica.gov.co",
                "telefono": "300-123-4567"
            },
            "publicoDirigido": "Todo público",
            "redes": {
                "facebook": "https://facebook.com/festivalabierto",
                "instagram": "https://instagram.com/festivalabierto"
            },
            "artistas": [
                {
                    "id": "juanperez",
                    "nombre": "Juan Pérez",
                    "tipo": "artista",
                    "imagen": "images/artistas/juanperez.jpg",
                    "rol": "Acordeonista principal"
                },
                {
                    "id": "sonaguachica",
                    "nombre": "Son Aguachica",
                    "tipo": "agrupacion",
                    "imagen": "images/artistas/sonaguachica.jpg",
                    "rol": "Grupo musical"
                }
            ],
            "etiquetas": ["Gratis", "+18"]
        },
        {
            "id": "concierto-vallenato",
            "titulo": "Gran Concierto Vallenato",
            "categoria": "Música",
            "descripcion": "Disfruta de una noche llena de música vallenata con los mejores exponentes de la región. Una experiencia única con artistas reconocidos que te transportarán a través de los sonidos tradicionales del vallenato. No te pierdas esta oportunidad de vivir la auténtica cultura musical de nuestra región.",
            "imagen": "eventos/images/evento1.jpg",
            "fechaInicio": "2025-04-15",
            "fechaFin": "2025-04-15",
            "hora": "18:00",
            "lugar": "Parque Principal, Aguachica",
            "precio": "Gratis",
            "capacidad": 5000,
            "organizador": {
                "nombre": "Fundación Cultural Aguachica",
                "contacto": "fundacion@aguachica.com",
                "telefono": "320-123-4567"
            },
            "etiquetas": ["Gratis", "+18"],
            "publicoDirigido": "Todo público",
            "invitacion": "Ven y disfruta de una noche inolvidable de música vallenata. Trae tu familia y amigos para compartir esta experiencia cultural única.",
            "artistas": [
                {
                    "id": "juanperez",
                    "nombre": "Juan Pérez",
                    "tipo": "artista",
                    "imagen": "images/artistas/juanperez.jpg",
                    "rol": "Acordeonista principal"
                },
                {
                    "id": "sonaguachica",
                    "nombre": "Son Aguachica",
                    "tipo": "agrupacion",
                    "imagen": "images/artistas/sonaguachica.jpg",
                    "rol": "Grupo musical"
                },
                {
                    "id": "mariagarcia",
                    "nombre": "Son Aguachica",
                    "tipo": "agrupacion",
                    "imagen": "images/artistas/sonaguachica.jpg",
                    "rol": "Grupo musical"
                }
                
            ],
            "galeria": [
                {
                    "tipo": "imagen",
                    "url": "eventos/images/galeria/evento1-1.jpg",
                    "titulo": "Concierto anterior",
                    "descripcion": "Presentación del año pasado"
                },
                {
                    "tipo": "imagen",
                    "url": "eventos/images/galeria/evento1-2.jpg",
                    "titulo": "Artistas en escena",
                    "descripcion": "Momento especial del concierto"
                },
                {
                    "tipo": "video",
                    "url": "https://www.youtube.com/watch?v=b048tnySxAA&ab_channel=WAITEIRO",
                    "titulo": "Resumen del evento",
                    "descripcion": "Lo mejor del concierto"
                }
            ],
            "requisitos": [
                "Llegar 30 minutos antes del inicio",
                "No llevar alimentos ni bebidas alcohólicas",
                "Respetar las zonas designadas",
                "Mantener el orden durante el evento"
            ],
            "redes": {
                "facebook": "https://facebook.com",
                "instagram": "https://instagram.com",
                "youtube": "https://youtube.com"
            }
        },
        {
            "id": "obra-magico-mundo",
            "titulo": "Obra: El Mágico Mundo",
            "categoria": "Arte",
            "descripcion": "Obra teatral infantil que transportará a los niños y sus familias a un universo lleno de fantasía y aventuras.",
            "imagen": "eventos/images/evento2.jpg",
            "fechaInicio": "2025-05-20",
            "fechaFin": "2025-05-21",
            "hora": "15:00",
            "lugar": "Casa de la Cultura, Aguachica",
            "precio": "$10,000",
            "capacidad": 200,
            "redes": {
                "facebook": "https://facebook.com",
                "instagram": "https://instagram.com"
            }
        },
        {
            "id": "feria-astronomica",
            "titulo": "Feria Gastronómica",
            "categoria": "Gastronomía",
            "descripcion": "Prueba los platos típicos de la región en esta gran feria gastronómica. Descubre sabores auténticos y tradiciones culinarias.",
            "imagen": "eventos/images/evento3.jpg",
            "fechaInicio": "2025-06-10",
            "fechaFin": "2025-07-11",
            "hora": "Todo el día",
            "lugar": "Plaza de Mercado, Aguachica",
            "precio": "$5,000",
            "capacidad": 1000,
            "redes": {
                "facebook": "https://facebook.com",
                "instagram": "https://instagram.com"
            }
        },
        {
            "id": "torneo-futbol",
            "titulo": "Torneo de Fútbol",
            "categoria": "Deporte",
            "descripcion": "Gran torneo interbarrios de fútbol con premios para los ganadores. Participa y demuestra el talento deportivo de tu barrio.",
            "imagen": "eventos/images/evento4.jpg",
            "fechaInicio": "2025-06-24",
            "fechaFin": "",
            "hora": "08:00",
            "lugar": "Estadio Municipal, Aguachica",
            "precio": "$2,000",
            "capacidad": 500,
            "redes": {
                "facebook": "https://facebook.com",
                "instagram": "https://instagram.com"
            }
        },
        {
            "id": "taller-pintura",
            "titulo": "Taller de Pintura",
            "categoria": "Arte",
            "descripcion": "Aprende técnicas básicas de pintura al óleo con artistas locales. Materiales incluidos en el precio.",
            "imagen": "eventos/images/evento5.jpg",
            "fechaInicio": "2025-07-05",
            "hora": "14:00",
            "lugar": "Galería de Arte, Aguachica",
            "precio": "$15,000",
            "capacidad": 20,
            "redes": {
                "facebook": "https://facebook.com",
                "instagram": "https://instagram.com"
            }
        },
        {
            "id": "conferencia-emprendimiento",
            "titulo": "Conferencia: Emprendimiento",
            "categoria": "Educación",
            "descripcion": "Aprende estrategias para emprender con éxito en la región. Conferencia dictada por expertos en negocios.",
            "imagen": "eventos/images/evento6.jpg",
            "fechaInicio": "2025-07-28",
            "hora": "17:00",
            "lugar": "Casa de la Cultura, Aguachica",
            "precio": "$10,000",
            "capacidad": 200,
            "redes": {
                "facebook": "https://facebook.com/viveaguachica",
                "instagram": "https://instagram.com/viveaguachica"
            }
        },
        {
            "id": "festival-cultural",
            "titulo": "Festival Cultural de Primavera",
            "categoria": "Cultura",
            "descripcion": "Celebra la llegada de la primavera con música en vivo, danzas tradicionales y exposiciones artísticas.",
            "imagen": "eventos/images/evento7.jpg",
            "fechaInicio": "2025-08-22",
            "hora": "16:00",
            "lugar": "Plaza Central, Aguachica",
            "precio": "Gratis",
            "capacidad": 1000,
            "redes": {
                "facebook": "https://facebook.com",
                "instagram": "https://instagram.com"
            }
        },
            {
                "id": "wai1",
                "titulo": "Tamos fine",
                "categoria": "Arte",
                "descripcion": "Obra teatral infantil que transportará a los niños y sus familias a un universo lleno de fantasía y aventuras.",
                "imagen": "eventos/images/evento2.jpg",
                "fechaInicio": "2025-05-03",
                "hora": "15:00",
                "lugar": "Casa de la Cultura, Aguachica",
                "precio": "$10,000",
                "capacidad": 200,
                "redes": {
                    "facebook": "https://facebook.com/tamosfine",
                    "instagram": "https://instagram.com/tamosfine"
                }
            },
            {
                "id": "wai2",
                "titulo": "Vive Aguachica",
                "categoria": "Arte",
                "descripcion": "Obra teatral infantil que transportará a los niños y sus familias a un universo lleno de fantasía y aventuras.",
                "imagen": "eventos/images/evento2.jpg",
                    "fechaInicio": "2025-05-03",
                    "hora": "15:00",
                    "lugar": "Casa de la Cultura, Aguachica",
                    "precio": "$10,000",
                    "capacidad": 200,
                    "redes": {
                        "facebook": "https://facebook.com/viveaguachica",
                        "instagram": "https://instagram.com/viveaguachica"
                    }
        },
        {
            "id": "wai3",
            "titulo": "Vive Aguachica",
            "categoria": "Arte",
            "descripcion": "Obra teatral infantil que transportará a los niños y sus familias a un universo lleno de fantasía y aventuras.",
            "imagen": "eventos/images/evento2.jpg",
                "fechaInicio": "2025-05-04",
                "hora": "15:00",
                "lugar": "Casa de la Cultura, Aguachica",
                "precio": "$10,000",
                "capacidad": 200,
                "redes": {
                    "facebook": "https://facebook.com/viveaguachica",
                    "instagram": "https://instagram.com/viveaguachica"
                }
    },
    {
        "id": "wai4",
        "titulo": "Vive Aguachica",
        "categoria": "Arte",
        "descripcion": "Obra teatral infantil que transportará a los niños y sus familias a un universo lleno de fantasía y aventuras.",
        "imagen": "eventos/images/evento2.jpg",
            "fechaInicio": "2025-05-05",
            "hora": "15:00",
            "lugar": "Casa de la Cultura, Aguachica",
            "precio": "$10,000",
            "capacidad": 200,
            "redes": {
                "facebook": "https://facebook.com/viveaguachica",
                "instagram": "https://instagram.com/viveaguachica"
            }
},
{
    "id": "wai5",
    "titulo": "Vive Aguachica",
    "categoria": "Arte",
    "descripcion": "Obra teatral infantil que transportará a los niños y sus familias a un universo lleno de fantasía y aventuras.",
    "imagen": "eventos/images/evento2.jpg",
        "fechaInicio": "2025-05-05",
        "hora": "15:00",
        "lugar": "Casa de la Cultura, Aguachica",
        "precio": "$10,000",
        "capacidad": 200,
        "redes": {
            "facebook": "https://facebook.com/viveaguachica",
            "instagram": "https://instagram.com/viveaguachica"
        }
},
{
    "id": "wai6",
    "titulo": "Vive Aguachica",
    "categoria": "Arte",
    "descripcion": "Obra teatral infantil que transportará a los niños y sus familias a un universo lleno de fantasía y aventuras.",
    "imagen": "eventos/images/evento2.jpg",
        "fechaInicio": "2025-05-05",
        "hora": "15:00",
        "lugar": "Casa de la Cultura, Aguachica",
        "precio": "$10,000",
        "capacidad": 200,
        "redes": {
            "facebook": "https://facebook.com/viveaguachica",
            "instagram": "https://instagram.com/viveaguachica"
        }
},
    ]
};

// Variables para la paginación y filtros
let eventosFiltrados = [];
const eventosPorPagina = 6;
let paginaActual = 1;
let filtroCategoriaActual = 'todos';
let filtroTiempoActual = 'todos';

// Función para formatear la fecha
function formatearFecha(fecha, hora) {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaObj = new Date(fecha);
    return `${fechaObj.toLocaleDateString('es-ES', opciones)}`;
}

// Función para determinar si un evento ya finalizó
function esEventoCulminado(fechaInicio, fechaFin) {
    const hoy = new Date();
    const fechaFinObj = new Date(fechaFin || fechaInicio); // Si no hay fechaFin, usar fechaInicio
    
    // Ajustar las fechas para comparar solo el día (sin horas)
    hoy.setHours(0, 0, 0, 0);
    fechaFinObj.setHours(0, 0, 0, 0);
    
    // El evento se marca como finalizado al día siguiente de su fecha de fin
    return hoy > fechaFinObj;
}

// Función para verificar si un evento está activo en una fecha específica
function esEventoActivoEnFecha(evento, fecha) {
    const fechaObj = new Date(fecha);
    fechaObj.setHours(0, 0, 0, 0);
    
    const fechaInicio = new Date(evento.fechaInicio);
    fechaInicio.setHours(0, 0, 0, 0);
    
    const fechaFin = new Date(evento.fechaFin || evento.fechaInicio);
    fechaFin.setHours(0, 0, 0, 0);
    
    return fechaObj >= fechaInicio && fechaObj <= fechaFin;
}

// Función para crear una tarjeta de evento
function crearTarjetaEvento(evento) {
    const fechaInicio = new Date(evento.fechaInicio);
    const fechaFin = evento.fechaFin ? new Date(evento.fechaFin) : null;
    const finalizado = esEventoCulminado(evento.fechaInicio, evento.fechaFin);
    
    // Formatear el rango de fechas de manera más concisa
    let fechaTexto = '';
    if (fechaFin && fechaFin.getTime() !== fechaInicio.getTime()) {
        // Si el mes es el mismo, solo mostrar el mes una vez
        if (fechaInicio.getMonth() === fechaFin.getMonth()) {
            fechaTexto = `del ${fechaInicio.getDate()} al ${fechaFin.getDate()} de ${fechaInicio.toLocaleDateString('es-ES', { month: 'long' })}`;
        } else {
            fechaTexto = `del ${fechaInicio.getDate()} de ${fechaInicio.toLocaleDateString('es-ES', { month: 'long' })} al ${fechaFin.getDate()} de ${fechaFin.toLocaleDateString('es-ES', { month: 'long' })}`;
        }
    } else {
        fechaTexto = `${fechaInicio.getDate()} de ${fechaInicio.toLocaleDateString('es-ES', { month: 'long' })}`;
    }
    
    // Contador de artistas/agrupaciones
    const numParticipantes = evento.artistas ? evento.artistas.length : 0;
    const participantesText = numParticipantes === 1 ? '1 participante' : `${numParticipantes} participantes`;
    
    return `
        <article class="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 ${finalizado ? 'opacity-75' : ''}">
            <div class="relative">
                <img src="${evento.imagen}" alt="${evento.titulo}" loading="lazy" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                <span class="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded-bl-lg">${evento.categoria}</span>
                ${finalizado ? '<span class="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-br-lg">Finalizado</span>' : ''}
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-gray-800 group-hover:text-indigo-600 transition-colors">${evento.titulo}</h3>
                <p class="text-gray-600 mb-4 line-clamp-2">${evento.descripcion}</p>
                <div class="flex flex-wrap gap-2 mb-2">
                    ${(evento.etiquetas && Array.isArray(evento.etiquetas)) ? evento.etiquetas.map(etiqueta => `<span class='inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full border border-blue-300 shadow-sm'>${etiqueta}</span>`).join('') : ''}
                </div>
                <div class="flex flex-col space-y-4">
                    <div class="flex items-center text-gray-500">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>${fechaTexto}</span>
                    </div>
                    <div class="flex items-center text-gray-500">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>${evento.hora}</span>
                    </div>
                    <div class="flex items-center text-gray-500">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>${evento.lugar}</span>
                    </div>
                    ${evento.organizador && evento.organizador.nombre ? `
                    <div class="flex items-center text-gray-500">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span><span class="font-semibold">Organiza:</span> ${evento.organizador.nombre}</span>
                    </div>
                    ` : ''}
                </div>

                ${evento.artistas && evento.artistas.length > 0 ? `
                    <div class="mt-4">
                        <button onclick="mostrarParticipantesModal('${evento.id}')" 
                                class="text-indigo-600 hover:text-indigo-800 text-sm flex items-center">
                            <i class="fas fa-users mr-1"></i>
                            ${participantesText}
                        </button>
                    </div>
                ` : ''}

                <div class="mt-6 flex justify-between items-center">
                    <div class="flex space-x-2">
                        ${evento.redes.facebook ? `<a href="${evento.redes.facebook}" target="_blank" class="text-gray-400 hover:text-blue-600 transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                            </svg>
                        </a>` : ''}
                        ${evento.redes.instagram ? `<a href="${evento.redes.instagram}" target="_blank" class="text-gray-400 hover:text-pink-600 transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                            </svg>
                        </a>` : ''}
                        ${evento.redes.youtube ? `<a href="${evento.redes.youtube}" target="_blank" class="text-gray-400 hover:text-red-600 transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>` : ''}
                    </div>
                    <a href="eventos/evento.html?id=${evento.id}" class="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Ver detalles
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    `;
}

// Función para mostrar participantes en un modal
function mostrarParticipantesModal(eventoId) {
    const evento = eventosData.eventos.find(e => e.id === eventoId);
    if (!evento || !evento.artistas) return;

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-semibold">Participantes del Evento</h3>
                <button onclick="cerrarModal(this)" 
                        class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${evento.artistas.map(artista => `
                    <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div class="flex-shrink-0 w-24 h-24">
                            <img src="${artista.imagen}" alt="${artista.nombre}" 
                                class="w-full h-full object-cover rounded-lg">
                        </div>
                        <div class="flex-1">
                            <h4 class="font-medium text-lg">${artista.nombre}</h4>
                            <p class="text-sm text-gray-600">${artista.tipo}</p>
                            <a href="${artista.tipo === 'artista' ? 'artistas/perfil.html?id=' : 'agrupaciones/perfil.html?id='}${artista.id}" 
                               class="mt-2 inline-block text-indigo-600 hover:text-indigo-800 text-sm">
                                Ver perfil completo
                            </a>
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

// Función para mostrar eventos con paginación
function mostrarEventos() {
    const eventosContainer = document.getElementById('eventos-container');
    const cargarMasBtn = document.getElementById('cargar-mas');
    
    // Calcular el rango de eventos a mostrar
    const inicio = (paginaActual - 1) * eventosPorPagina;
    const fin = paginaActual * eventosPorPagina;
    
    // Asegurarnos de que los eventos estén ordenados antes de mostrarlos
    const eventosOrdenados = [...eventosFiltrados].sort((a, b) => {
        const fechaA = new Date(a.fechaInicio);
        const fechaB = new Date(b.fechaInicio);
        fechaA.setHours(0, 0, 0, 0);
        fechaB.setHours(0, 0, 0, 0);
        return fechaA.getTime() - fechaB.getTime();
    });
    
    // Obtener los eventos para la página actual
    const eventosAMostrar = eventosOrdenados.slice(inicio, fin);
    
    // Limpiar el contenedor solo si es la primera página
    if (paginaActual === 1) {
        eventosContainer.innerHTML = '';
    }
    
    // Agregar eventos al contenedor
    eventosAMostrar.forEach(evento => {
        eventosContainer.innerHTML += crearTarjetaEvento(evento);
    });
    
    // Mostrar u ocultar el botón "Cargar más" basado en si hay más eventos
    if (fin < eventosFiltrados.length) {
        cargarMasBtn.classList.remove('hidden');
    } else {
        cargarMasBtn.classList.add('hidden');
    }
}

// Función para cargar más eventos
function cargarMasEventos() {
    // Incrementar la página actual
    paginaActual++;
    
    // Mostrar los siguientes eventos
    mostrarEventos();
    
    // Desplazar la página suavemente hacia abajo
    const eventosContainer = document.getElementById('eventos-container');
    eventosContainer.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

// Función para aplicar todos los filtros
function aplicarFiltros() {
    // Primero filtramos por categoría
    if (filtroCategoriaActual === 'todos') {
        eventosFiltrados = [...eventosData.eventos];
    } else {
        eventosFiltrados = eventosData.eventos.filter(evento => {
            // Normalizar la categoría del evento para comparación
            const categoriaEvento = evento.categoria.charAt(0).toUpperCase() + evento.categoria.slice(1).toLowerCase();
            return categoriaEvento === filtroCategoriaActual;
        });
    }

    // Luego aplicamos el filtro de tiempo
    if (filtroTiempoActual !== 'todos') {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        
        // Lógica para el fin de semana
        const diaActual = hoy.getDay();
        const inicioFinde = new Date(hoy);
        const finFinde = new Date(hoy);
        
        if (diaActual === 0) {
            inicioFinde.setDate(hoy.getDate() - 1);
            finFinde.setDate(hoy.getDate());
        } else if (diaActual === 6) {
            inicioFinde.setDate(hoy.getDate());
            finFinde.setDate(hoy.getDate() + 1);
        } else {
            const diasHastaSabado = 6 - diaActual;
            inicioFinde.setDate(hoy.getDate() + diasHastaSabado);
            finFinde.setDate(hoy.getDate() + diasHastaSabado + 1);
        }
        
        inicioFinde.setHours(0, 0, 0, 0);
        finFinde.setHours(23, 59, 59, 999);

        const inicioDeMes = new Date(hoy.getFullYear(), hoy.getMonth(), 1);
        const finDeMes = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0);

        eventosFiltrados = eventosFiltrados.filter(evento => {
            const finalizado = esEventoCulminado(evento.fechaInicio, evento.fechaFin);
            
            if (finalizado) return false;
            
            switch(filtroTiempoActual) {
                case 'hoy':
                    return esEventoActivoEnFecha(evento, hoy);
                case 'finde':
                    return esEventoActivoEnFecha(evento, inicioFinde) || 
                           esEventoActivoEnFecha(evento, finFinde);
                case 'mes':
                    const fechaInicio = new Date(evento.fechaInicio);
                    const fechaFin = new Date(evento.fechaFin || evento.fechaInicio);
                    return (fechaInicio >= inicioDeMes && fechaInicio <= finDeMes) ||
                           (fechaFin >= inicioDeMes && fechaFin <= finDeMes);
                default:
                    return true;
            }
        });
    }

    // Ordenar eventos por fecha de inicio (más próximos primero)
    eventosFiltrados.sort((a, b) => {
        const fechaA = new Date(a.fechaInicio);
        const fechaB = new Date(b.fechaInicio);
        fechaA.setHours(0, 0, 0, 0);
        fechaB.setHours(0, 0, 0, 0);
        return fechaA.getTime() - fechaB.getTime();
    });

    // Reiniciar paginación
    paginaActual = 1;
    mostrarEventos();
}

// Función para filtrar eventos por categoría
function filtrarEventosPorCategoria(categoria) {
    filtroCategoriaActual = categoria;
    aplicarFiltros();
}

// Función para filtrar eventos por fecha
function filtrarEventosPorFecha(filtro) {
    filtroTiempoActual = filtro;
    aplicarFiltros();
}

// Inicialización cuando el documento está listo
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar eventos filtrados con todos los eventos
    eventosFiltrados = [...eventosData.eventos];
    
    // Mostrar eventos iniciales
    mostrarEventos();
    
    // Configurar botones de filtro de tiempo
    const timeFilterBtns = document.querySelectorAll('.time-filter-btn');
    timeFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase activa de todos los botones
            timeFilterBtns.forEach(b => b.classList.remove('active', 'bg-indigo-100', 'text-indigo-600'));
            btn.classList.add('active', 'bg-indigo-100', 'text-indigo-600');
            
            // Filtrar eventos
            filtrarEventosPorFecha(btn.dataset.time);
        });
    });

    // Configurar botones de categoría
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase activa de todos los botones
            categoryBtns.forEach(b => b.classList.remove('active', 'bg-indigo-100', 'text-indigo-600'));
            btn.classList.add('active', 'bg-indigo-100', 'text-indigo-600');
            
            // Filtrar eventos por categoría
            filtrarEventosPorCategoria(btn.dataset.category);
        });
    });

    // Configurar el botón de cargar más
    const cargarMasBtn = document.getElementById('cargar-mas');
    if (cargarMasBtn) {
        cargarMasBtn.addEventListener('click', cargarMasEventos);
    }
}); 
