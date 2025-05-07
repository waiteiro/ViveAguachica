// Función para manejar el estado activo del header
document.addEventListener('DOMContentLoaded', function() {
    // Obtener la ruta actual
    const currentPath = window.location.pathname;
    
    // Obtener todos los enlaces del header (tanto móvil como desktop)
    const navLinks = document.querySelectorAll('nav a, #mobile-menu a');
    
    navLinks.forEach(link => {
        // Obtener la ruta del enlace
        const linkPath = link.getAttribute('href');
        
        // Verificar si la ruta actual coincide con la del enlace
        if (currentPath.includes(linkPath.replace('../', '')) || 
            (currentPath.includes('/index.html') && linkPath.includes('/index.html'))) {
            // Remover clases existentes
            link.classList.remove('text-gray-700', 'hover:text-indigo-700');
            // Agregar clases activas
            link.classList.add('text-indigo-700', 'font-medium', 'bg-indigo-50', 'rounded-md', 'px-3', 'py-2');
        } else {
            // Asegurar que los enlaces no activos tengan las clases correctas
            link.classList.remove('text-indigo-700', 'font-medium', 'bg-indigo-50');
            link.classList.add('text-gray-700', 'hover:text-indigo-700');
        }
    });
}); 