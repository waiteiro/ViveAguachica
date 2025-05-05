document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clases de todos los botones
            categoryButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-indigo-100', 'text-indigo-600');
                btn.classList.add('bg-gray-100', 'text-gray-700');
            });
            
            // Agregar clases solo al botón seleccionado
            this.classList.add('active', 'bg-indigo-100', 'text-indigo-600');
            this.classList.remove('bg-gray-100', 'text-gray-700');
            
            // Filtrar los eventos
            const category = this.getAttribute('data-category');
            filterEvents(category);
        });
    });
    
    function filterEvents(category) {
        const eventos = document.querySelectorAll('#eventos-container article');
        
        eventos.forEach(evento => {
            if (category === 'todos' || evento.getAttribute('data-category') === category) {
                evento.style.display = 'block';
                // Agregar una animación suave
                evento.style.opacity = '0';
                setTimeout(() => {
                    evento.style.opacity = '1';
                }, 50);
            } else {
                evento.style.display = 'none';
            }
        });
    }
}); 