// Función para obtener el slug del artista de la URL
function getArtistSlug() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Función para formatear fechas
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
}

// Función para obtener el enlace embebido de YouTube
function getYoutubeEmbedUrl(url) {
    if (!url) return '';
    if (url.includes('youtube.com/embed/')) return url;
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
    if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url;
}

// Función para cargar los datos del artista desde artistasData
function loadArtistData() {
    const slug = getArtistSlug();
    if (!slug) return;

    // Busca el artista en la variable artistasData
    if (typeof artistasData === 'undefined' || !artistasData.artistas) return;
    const artista = artistasData.artistas.find(a => a.id === slug);
    if (!artista) {
        if (document.getElementById('artist-name'))
            document.getElementById('artist-name').textContent = 'Artista no encontrado';
        return;
    }

    // Nombre y categoría
    if (document.getElementById('artist-name'))
        document.getElementById('artist-name').textContent = artista.nombre;
    if (document.getElementById('artist-category'))
        document.getElementById('artist-category').textContent = artista.categoria;

    // Imagen de perfil
    if (document.getElementById('profile-image')) {
        document.getElementById('profile-image').src = artista.imagen;
        document.getElementById('profile-image').alt = artista.nombre;
    }

    // Imagen de portada (usa la portada si existe, si no la de perfil)
    if (document.getElementById('cover-image')) {
        document.getElementById('cover-image').src = artista.portada || artista.imagen;
        document.getElementById('cover-image').alt = artista.nombre;
    }

    // Cargar biografía
    const bioElement = document.getElementById('artist-bio');
    if (artista.biografia) {
        // Dividir el texto en párrafos
        const paragraphs = artista.biografia.split('\n\n');
        
        // Crear HTML para cada párrafo
        bioElement.innerHTML = paragraphs.map(paragraph => {
            // Si el párrafo comienza con un título (termina en :)
            if (paragraph.trim().endsWith(':')) {
                return `<h3 class="text-xl font-semibold text-indigo-700 mb-3">${paragraph}</h3>`;
            }
            // Si el párrafo es una lista de puntos
            else if (paragraph.includes('•') || paragraph.includes('-')) {
                const items = paragraph.split(/[•-]/).filter(item => item.trim());
                return `<ul class="list-disc list-inside space-y-2 mb-4">${items.map(item => 
                    `<li class="text-gray-700">${item.trim()}</li>`
                ).join('')}</ul>`;
            }
            // Párrafo normal
            else {
                return `<p class="text-gray-700 mb-4 leading-relaxed">${paragraph}</p>`;
            }
        }).join('');
    } else {
        bioElement.innerHTML = '<p class="text-gray-500 italic">No hay biografía disponible.</p>';
    }

    // Cargar agrupaciones
    const groupsSection = document.getElementById('artist-groups-section');
    const groupsContainer = document.getElementById('artist-groups');

    if (artista.agrupaciones && artista.agrupaciones.length > 0) {
        groupsSection.classList.remove('hidden');
        groupsContainer.innerHTML = artista.agrupaciones.map(grupo =>
            `<a href="/agrupaciones/perfil.html?id=${grupo.id}" class="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full font-medium hover:bg-indigo-200 transition">${grupo.nombre}</a>`
        ).join('');
    } else {
        groupsSection.classList.add('hidden');
    }

    // Logros destacados
    const achievementsContainer = document.getElementById('artist-achievements');
    if (achievementsContainer && artista.logros) {
        achievementsContainer.innerHTML = artista.logros.map(logro => `
            <div class="flex items-start space-x-2">
                <svg class="w-5 h-5 text-indigo-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-gray-700">${logro}</span>
            </div>
        `).join('');
    } else if (achievementsContainer) {
        achievementsContainer.innerHTML = '<p class="text-gray-500 text-sm">No hay logros registrados.</p>';
    }

    // Eventos próximos
    const upcomingEventsContainer = document.getElementById('upcoming-events');
    if (upcomingEventsContainer && artista.eventos && artista.eventos.length > 0) {
        upcomingEventsContainer.innerHTML = artista.eventos.map(evento => {
            if (evento.enlazado) {
                return `
                    <a href="/eventos/evento.html?id=${evento.id}" class="block bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:bg-indigo-50">
                        <h4 class="font-medium text-gray-800">${evento.titulo}</h4>
                        <div class="flex items-center text-sm text-gray-600 mt-1">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>${new Date(evento.fecha).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}</span>
                            <span class="mx-1">•</span>
                            <span>${evento.hora}</span>
                        </div>
                    </a>
                `;
            } else {
                return `
                    <div class="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h4 class="font-medium text-gray-800">${evento.titulo}</h4>
                        <div class="flex items-center text-sm text-gray-600 mt-1">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>${new Date(evento.fecha).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}</span>
                            <span class="mx-1">•</span>
                            <span>${evento.hora}</span>
                        </div>
                    </div>
                `;
            }
        }).join('');
    } else if (upcomingEventsContainer) {
        upcomingEventsContainer.innerHTML = '<p class="text-gray-500 text-sm">No hay eventos próximos.</p>';
    }

    // Galería de contenido en carrusel horizontal con modal ampliable
    const contentContainer = document.getElementById('artist-content');
    if (contentContainer) {
        let items = [];
        if (artista.galeria && artista.galeria.length > 0) {
            items = artista.galeria;
        }
        if (items.length > 0) {
            contentContainer.innerHTML = items.map((item, idx) => {
                if (item.tipo === 'video') {
                    const embedUrl = getYoutubeEmbedUrl(item.url);
                    return `<div class="snap-center min-w-[300px] max-w-xs cursor-pointer group relative" data-idx="${idx}">
                        <div class="aspect-w-16 aspect-h-9 w-full h-48 bg-black rounded-lg overflow-hidden">
                            <iframe src="${embedUrl}" width="400" height="225" class="w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen onerror="this.parentNode.innerHTML='<div class=\'flex flex-col items-center justify-center h-full\'><p class=\'text-white mb-2\'>Video no disponible para inserción.</p><a href='${item.url}' target='_blank' class=\'bg-red-600 text-white px-4 py-2 rounded\'>Ver en YouTube</a></div>';"></iframe>
                        </div>
                        <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553 2.276A1 1 0 0120 13.118V14.88a1 1 0 01-.447.842L15 18v-8z"/></svg>
                        </div>
                    </div>`;
                } else {
                    return `<div class="snap-center min-w-[300px] max-w-xs cursor-pointer group relative" data-idx="${idx}">
                        <img src="${item.url}" alt="${item.titulo || ''}" class="w-full h-48 object-cover rounded-lg shadow-md">
                        <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553 2.276A1 1 0 0120 13.118V14.88a1 1 0 01-.447.842L15 18v-8z"/></svg>
                        </div>
                    </div>`;
                }
            }).join('');

            // Modal ampliable con navegación
            contentContainer.querySelectorAll('[data-idx]').forEach(el => {
                el.addEventListener('click', function() {
                    openGalleryModal(items, parseInt(this.getAttribute('data-idx')));
                });
            });
        } else {
            contentContainer.innerHTML = '<p class="text-gray-500 text-center py-6">No hay contenido multimedia disponible.</p>';
        }
    }

    // Modal de galería ampliada con navegación
    function openGalleryModal(items, idxInicial) {
        let idx = idxInicial;
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50';
        modal.innerHTML = `
            <button id="close-modal" class="absolute top-4 right-4 text-white text-3xl font-bold z-50">&times;</button>
            <button id="prev-modal" class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold z-50">&#8592;</button>
            <button id="next-modal" class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold z-50">&#8594;</button>
            <div class="w-full max-w-2xl flex flex-col items-center px-2">
                <div id="modal-content" class="w-full flex flex-col items-center"></div>
                <div class="mt-4 text-white text-center">
                    <div id="modal-title" class="font-semibold text-lg"></div>
                    <div id="modal-desc" class="text-sm mt-1"></div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        function renderModal(idx) {
            const item = items[idx];
            const modalContent = modal.querySelector('#modal-content');
            if (item.tipo === 'video') {
                const embedUrl = getYoutubeEmbedUrl(item.url);
                modalContent.innerHTML = `<div class="aspect-w-16 aspect-h-9 w-full max-w-[90vw] max-h-[60vh] sm:max-h-[70vh] mx-auto"><iframe src="${embedUrl}" width="880" height="495" class="w-full h-[495px] rounded-lg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen onerror="this.parentNode.innerHTML='<div class=\'flex flex-col items-center justify-center h-full\'><p class=\'text-white mb-2\'>Video no disponible para inserción.</p><a href='${item.url}' target='_blank' class=\'bg-red-600 text-white px-4 py-2 rounded\'>Ver en YouTube</a></div>';"></iframe></div>`;
            } else {
                modalContent.innerHTML = `<img src="${item.url}" alt="${item.titulo || ''}" class="w-full max-w-[90vw] max-h-[60vh] sm:max-h-[70vh] object-contain rounded-lg mx-auto">`;
            }
            modal.querySelector('#modal-title').textContent = item.titulo || '';
            modal.querySelector('#modal-desc').textContent = item.descripcion || '';
        }

        renderModal(idx);

        modal.querySelector('#close-modal').onclick = () => modal.remove();
        modal.querySelector('#prev-modal').onclick = () => {
            idx = (idx - 1 + items.length) % items.length;
            renderModal(idx);
        };
        modal.querySelector('#next-modal').onclick = () => {
            idx = (idx + 1) % items.length;
            renderModal(idx);
        };
        // Cerrar con Escape y navegación con flechas
        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') modal.remove();
            if (e.key === 'ArrowLeft') {
                idx = (idx - 1 + items.length) % items.length;
                renderModal(idx);
            }
            if (e.key === 'ArrowRight') {
                idx = (idx + 1) % items.length;
                renderModal(idx);
            }
        });
        // Permitir cerrar haciendo clic fuera del contenido
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
        // Enfocar para que funcione el escape y flechas
        modal.tabIndex = -1;
        modal.focus();
    }

    // Línea de tiempo visual de trayectoria
    const timelineSection = document.querySelector('section:has(#artist-timeline)');
    const timelineContainer = document.getElementById('artist-timeline');
    if (timelineContainer && artista.trayectoria && artista.trayectoria.length > 0) {
        timelineContainer.innerHTML = artista.trayectoria.map((item, idx) => `
            <div class="timeline-item fade-in" style="animation-delay: ${idx * 0.1}s">
                <div class="flex items-start">
                    <div class="w-20 flex-shrink-0">
                        <span class="text-indigo-600 font-bold">${item.anio}</span>
                    </div>
                    <div class="flex-1">
                        <p class="text-gray-700">${item.descripcion}</p>
                        ${item.imagen ? `<img src="${item.imagen}" alt="${item.descripcion}" class="mt-2 rounded-lg shadow-md w-full max-w-xs">` : ''}
                    </div>
                </div>
            </div>
        `).join('');
        if (timelineSection) timelineSection.style.display = '';
    } else if (timelineSection) {
        timelineSection.style.display = 'none';
    }

    // Influencias
    const influencesSection = document.querySelector('section:has(#artist-influences)');
    const influencesContainer = document.getElementById('artist-influences');
    if (influencesContainer && artista.influencias && artista.influencias.length > 0) {
        influencesContainer.innerHTML = artista.influencias.map((influencia, idx) => `
            <div class="influencia-card fade-in" style="animation-delay: ${idx * 0.1}s">
                <div class="bg-gray-50 p-4 rounded-lg">
                    <h3 class="font-semibold text-gray-800">${influencia.nombre}</h3>
                    <span class="text-sm text-gray-600">${influencia.tipo}</span>
                </div>
            </div>
        `).join('');
        if (influencesSection) influencesSection.style.display = '';
    } else if (influencesSection) {
        influencesSection.style.display = 'none';
    }

    // Proyectos actuales
    const projectsSection = document.querySelector('section:has(#artist-projects)');
    const projectsContainer = document.getElementById('artist-projects');
    if (projectsContainer && artista.proyectos && artista.proyectos.length > 0) {
        projectsContainer.innerHTML = artista.proyectos.map((proyecto, idx) => `
            <div class="proyecto-card fade-in" style="animation-delay: ${idx * 0.1}s">
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    ${proyecto.imagen ? `<img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="w-full h-48 object-cover">` : ''}
                    <div class="p-4">
                        <h3 class="font-bold text-gray-800 mb-2">${proyecto.titulo}</h3>
                        <p class="text-gray-600 text-sm mb-3">${proyecto.descripcion}</p>
                        <div class="flex items-center justify-between">
                            <span class="text-sm font-medium ${proyecto.estado === 'En progreso' ? 'text-indigo-600' : 'text-green-600'}">
                                ${proyecto.estado}
                            </span>
                            <span class="text-sm text-gray-500">
                                ${proyecto.fechaInicio}${proyecto.fechaFin ? ` - ${proyecto.fechaFin}` : ''}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
        if (projectsSection) projectsSection.style.display = '';
    } else if (projectsSection) {
        projectsSection.style.display = 'none';
    }

}

document.addEventListener('DOMContentLoaded', loadArtistData);

function showError(message) {
    // Implementar manejo de errores si es necesario
    console.error(message);
}