// Menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('#mobile-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Validación de formularios
    if (document.forms['contacto']) {
        setupFormValidation();
    }
    
    // Lazy loading para imágenes
    setupLazyLoading();
    
    // Configurar búsqueda
    setupSearch();
});

// Validación de formularios
function setupFormValidation() {
    const form = document.forms['contacto'];
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = form.elements['nombre'].value.trim();
        const email = form.elements['email'].value.trim();
        const mensaje = form.elements['mensaje'].value.trim();
        let isValid = true;
        
        // Validar nombre
        if (nombre === '') {
            showError('nombre', 'Por favor ingresa tu nombre');
            isValid = false;
        } else {
            clearError('nombre');
        }
        
        // Validar email
        if (email === '') {
            showError('email', 'Por favor ingresa tu email');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Por favor ingresa un email válido');
            isValid = false;
        } else {
            clearError('email');
        }
        
        // Validar mensaje
        if (mensaje === '') {
            showError('mensaje', 'Por favor ingresa tu mensaje');
            isValid = false;
        } else {
            clearError('mensaje');
        }
        
        if (isValid) {
            // Aquí iría el código para enviar el formulario
            alert('Formulario enviado correctamente');
            form.reset();
        }
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const errorElement = document.getElementById(`${fieldName}-error`) || createErrorElement(field, fieldName);
    
    field.classList.add('border-red-500');
    errorElement.textContent = message;
    errorElement.classList.remove('hidden');
}

function clearError(fieldName) {
    const field = document.getElementById(fieldName);
    const errorElement = document.getElementById(`${fieldName}-error`);
    
    if (errorElement) {
        field.classList.remove('border-red-500');
        errorElement.classList.add('hidden');
    }
}

function createErrorElement(field, fieldName) {
    const errorElement = document.createElement('p');
    errorElement.id = `${fieldName}-error`;
    errorElement.className = 'mt-1 text-sm text-red-600 hidden';
    field.parentNode.insertBefore(errorElement, field.nextSibling);
    return errorElement;
}

// Lazy loading para imágenes
function setupLazyLoading() {
    const lazyImages = [].slice.call(document.querySelectorAll('img[loading="lazy"]'));
    
    if ('IntersectionObserver' in window) {
        const lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('opacity-0');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
        
        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
            lazyImage.classList.add('opacity-0');
            lazyImage.dataset.src = lazyImage.src;
            lazyImage.src = '';
        });
    }
}

// Configuración del buscador
function setupSearch() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (!searchForm || !searchInput || !searchResults) return;

    // Función para realizar la búsqueda
    async function performSearch(query) {
        if (query.length < 2) {
            searchResults.classList.add('hidden');
            return;
        }

        try {
            const response = await fetch('../data/search-data.json');
            const data = await response.json();
            
            const artistas = data.artistas.filter(artista => 
                artista.nombre.toLowerCase().includes(query.toLowerCase()) ||
                artista.categoria.toLowerCase().includes(query.toLowerCase()) ||
                artista.bio.toLowerCase().includes(query.toLowerCase())
            );

            const eventos = data.eventos.filter(evento => 
                evento.titulo.toLowerCase().includes(query.toLowerCase()) ||
                evento.categoria.toLowerCase().includes(query.toLowerCase()) ||
                evento.descripcion.toLowerCase().includes(query.toLowerCase())
            );

            displaySearchResults(artistas, eventos);
        } catch (error) {
            console.error('Error al realizar la búsqueda:', error);
            searchResults.innerHTML = '<div class="error-message">Error al cargar los resultados</div>';
            searchResults.classList.remove('hidden');
        }
    }

    // Función para mostrar los resultados
    function displaySearchResults(artistas, eventos) {
        if (artistas.length === 0 && eventos.length === 0) {
            searchResults.innerHTML = '<div class="no-results">No se encontraron resultados</div>';
            searchResults.classList.remove('hidden');
            return;
        }

        let html = '';

        if (artistas.length > 0) {
            html += '<div class="p-4 border-b border-gray-200"><h3 class="font-bold text-lg mb-2">Artistas</h3>';
            html += '<div class="space-y-2">';
            artistas.forEach(artista => {
                html += `
                    <a href="../artistas/${artista.id}.html" class="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                        <img src="${artista.imagen}" alt="${artista.nombre}" class="w-12 h-12 rounded-full object-cover">
                        <div>
                            <h4 class="font-semibold">${artista.nombre}</h4>
                            <p class="text-sm text-gray-500">${artista.categoria}</p>
                        </div>
                    </a>
                `;
            });
            html += '</div></div>';
        }

        if (eventos.length > 0) {
            html += '<div class="p-4"><h3 class="font-bold text-lg mb-2">Eventos</h3>';
            html += '<div class="space-y-2">';
            eventos.forEach(evento => {
                html += `
                    <a href="../eventos/${evento.id}.html" class="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                        <img src="${evento.imagen}" alt="${evento.titulo}" class="w-12 h-12 rounded-lg object-cover">
                        <div>
                            <h4 class="font-semibold">${evento.titulo}</h4>
                            <p class="text-sm text-gray-500">${evento.categoria}</p>
                        </div>
                    </a>
                `;
            });
            html += '</div></div>';
        }

        searchResults.innerHTML = html;
        searchResults.classList.remove('hidden');
    }

    // Evento de input con debounce
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            performSearch(e.target.value);
        }, 300);
    });

    // Evento de submit del formulario
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query.length >= 2) {
            performSearch(query);
        }
    });

    // Ocultar resultados al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!searchForm.contains(e.target)) {
            searchResults.classList.add('hidden');
        }
    });
}

// Inicializar el buscador cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    setupSearch();
});

// Slider functionality
document.addEventListener('DOMContentLoaded', () => {
    const slider = {
        items: document.querySelectorAll('.slider-item'),
        indicators: document.querySelectorAll('.indicator'),
        prevBtn: document.querySelector('.slider-control.prev'),
        nextBtn: document.querySelector('.slider-control.next'),
        currentIndex: 0,
        interval: null,

        init() {
            this.setupControls();
            this.startAutoSlide();
        },

        setupControls() {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
            this.nextBtn.addEventListener('click', () => this.nextSlide());

            this.indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => this.goToSlide(index));
            });
        },

        startAutoSlide() {
            this.interval = setInterval(() => this.nextSlide(), 5000);
        },

        stopAutoSlide() {
            clearInterval(this.interval);
        },

        updateSlide() {
            this.items.forEach((item, index) => {
                item.classList.toggle('active', index === this.currentIndex);
            });

            this.indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === this.currentIndex);
            });
        },

        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.items.length;
            this.updateSlide();
        },

        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
            this.updateSlide();
        },

        goToSlide(index) {
            this.currentIndex = index;
            this.updateSlide();
        }
    };

    slider.init();

    // Pausar el slider cuando el mouse está sobre él
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => slider.stopAutoSlide());
    sliderContainer.addEventListener('mouseleave', () => slider.startAutoSlide());
});

// Funcionalidad de filtrado por categorías y carga dinámica
document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const timeButtons = document.querySelectorAll('.time-filter-btn');
    const eventCards = document.querySelectorAll('.grid article');
    const cargarMasBtn = document.getElementById('cargar-mas');
    const EVENTOS_POR_PAGINA = 6;
    let currentCategory = 'todos';
    let currentTimeFilter = 'todos';

    function isEventInTimeRange(eventDate, timeFilter) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const eventDateObj = new Date(eventDate);
        eventDateObj.setHours(0, 0, 0, 0);

        switch(timeFilter) {
            case 'hoy':
                return eventDateObj.getTime() === today.getTime();
            case 'finde':
                const dayOfWeek = today.getDay();
                const daysUntilWeekend = 6 - dayOfWeek;
                const weekendStart = new Date(today);
                weekendStart.setDate(today.getDate() + daysUntilWeekend);
                const weekendEnd = new Date(weekendStart);
                weekendEnd.setDate(weekendStart.getDate() + 1);
                return eventDateObj >= weekendStart && eventDateObj <= weekendEnd;
            case 'mes':
                const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
                const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
                return eventDateObj >= firstDayOfMonth && eventDateObj <= lastDayOfMonth;
            default:
                return true;
        }
    }

    function filterEvents(category, timeFilter) {
        currentCategory = category;
        currentTimeFilter = timeFilter;
        const eventos = Array.from(eventCards);
        let eventosVisibles = eventos.filter(card => {
            const categoryMatch = category === 'todos' || card.getAttribute('data-category') === category;
            const dateMatch = isEventInTimeRange(card.getAttribute('data-date'), timeFilter);
            return categoryMatch && dateMatch;
        });

        // Ocultar todos los eventos primero
        eventos.forEach(card => {
            card.style.display = 'none';
            card.style.opacity = '0';
        });

        // Mostrar solo los primeros 6 eventos de la categoría seleccionada
        eventosVisibles.slice(0, EVENTOS_POR_PAGINA).forEach(card => {
            card.style.display = 'block';
            card.style.opacity = '1';
        });

        // Mostrar u ocultar el botón "Cargar más"
        if (eventosVisibles.length > EVENTOS_POR_PAGINA) {
            cargarMasBtn.classList.remove('hidden');
        } else {
            cargarMasBtn.classList.add('hidden');
        }
    }

    categoryButtons?.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active', 'bg-indigo-100', 'text-indigo-600'));
            button.classList.add('active', 'bg-indigo-100', 'text-indigo-600');
            filterEvents(button.getAttribute('data-category'), currentTimeFilter);
        });
    });

    timeButtons?.forEach(button => {
        button.addEventListener('click', () => {
            timeButtons.forEach(btn => btn.classList.remove('active', 'bg-indigo-100', 'text-indigo-600'));
            button.classList.add('active', 'bg-indigo-100', 'text-indigo-600');
            filterEvents(currentCategory, button.getAttribute('data-time'));
        });
    });

    cargarMasBtn?.addEventListener('click', () => {
        const eventos = Array.from(eventCards);
        const eventosVisibles = eventos.filter(card => {
            const categoryMatch = currentCategory === 'todos' || card.getAttribute('data-category') === currentCategory;
            const dateMatch = isEventInTimeRange(card.getAttribute('data-date'), currentTimeFilter);
            return categoryMatch && dateMatch;
        });
        
        const eventosOcultos = eventosVisibles.filter(card => 
            card.style.display === 'none'
        );

        // Mostrar los siguientes 6 eventos
        eventosOcultos.slice(0, EVENTOS_POR_PAGINA).forEach(card => {
            card.style.display = 'block';
            setTimeout(() => card.style.opacity = '1', 10);
        });

        // Ocultar el botón si no quedan más eventos por mostrar
        if (eventosOcultos.length <= EVENTOS_POR_PAGINA) {
            cargarMasBtn.classList.add('hidden');
        }
    });

    // Inicializar con todos los eventos
    filterEvents('todos', 'todos');
});

// Agregar animación de fadeIn
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Manejo del tema oscuro
document.addEventListener('DOMContentLoaded', () => {
    // Crear botón de cambio de tema
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '🌙';
    document.body.appendChild(themeToggle);

    // Verificar preferencia guardada o preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Aplicar tema inicial
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeToggle.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
    } else if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '☀️';
        localStorage.setItem('theme', 'dark');
    }

    // Manejar clic en el botón
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
    });

    // Escuchar cambios en la preferencia del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            themeToggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
        }
    });

    // Agregar clases de feedback visual a elementos interactivos
    const interactiveElements = document.querySelectorAll('a, button, .card, .event-card, .service-card');
    interactiveElements.forEach(element => {
        element.classList.add('hover-lift', 'click-ripple');
    });
});