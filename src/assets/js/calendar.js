// calendar.js - Versión mejorada
document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    
    if (calendarEl) {
        // Cargar eventos y renderizar calendario
        fetch('data/eventos.json')
            .then(response => response.json())
            .then(events => {
                renderCalendar(new Date().getFullYear(), new Date().getMonth(), events);
                setupCalendarNavigation(events);
            })
            .catch(error => console.error('Error al cargar eventos:', error));
    }
});

function renderCalendar(year, month, events) {
    const calendarEl = document.getElementById('calendar');
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    // Obtener primer día del mes y cuántos días tiene
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Filtrar eventos para este mes
    const monthEvents = events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month;
    });
    
    // Crear encabezado del calendario
    let calendarHTML = `
        <div class="flex justify-between items-center mb-4">
            <button class="prev-month px-3 py-1 rounded hover:bg-gray-100">&lt;</button>
            <h3 class="text-lg font-semibold">${monthNames[month]} ${year}</h3>
            <button class="next-month px-3 py-1 rounded hover:bg-gray-100">&gt;</button>
        </div>
        <div class="grid grid-cols-7 gap-1">
            <div class="text-center font-medium py-2 text-gray-600">Dom</div>
            <div class="text-center font-medium py-2 text-gray-600">Lun</div>
            <div class="text-center font-medium py-2 text-gray-600">Mar</div>
            <div class="text-center font-medium py-2 text-gray-600">Mié</div>
            <div class="text-center font-medium py-2 text-gray-600">Jue</div>
            <div class="text-center font-medium py-2 text-gray-600">Vie</div>
            <div class="text-center font-medium py-2 text-gray-600">Sáb</div>
    `;
    
    // Espacios vacíos para días del mes anterior
    let dayOfWeek = firstDay.getDay();
    for (let i = 0; i < dayOfWeek; i++) {
        calendarHTML += `<div class="h-24 border border-gray-200"></div>`;
    }
    
    // Días del mes
    const today = new Date();
    const currentDate = today.getDate();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    for (let day = 1; day <= daysInMonth; day++) {
        const isToday = day === currentDate && month === currentMonth && year === currentYear;
        const dayEvents = monthEvents.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.getDate() === day;
        });
        
        calendarHTML += `
            <div class="h-24 border border-gray-200 p-1 ${isToday ? 'bg-indigo-50' : ''}">
                <div class="text-right text-sm ${isToday ? 'font-bold text-indigo-700' : ''}">${day}</div>
                ${dayEvents.map(event => `
                    <a href="evento-detalle.html?id=${event.id}" 
                       class="block text-xs mt-1 p-1 bg-indigo-100 text-indigo-800 rounded truncate hover:bg-indigo-200">
                        ${event.name}
                    </a>
                `).join('')}
            </div>
        `;
        
        dayOfWeek++;
        if (dayOfWeek > 6) {
            dayOfWeek = 0;
        }
    }
    
    calendarHTML += `</div>`;
    calendarEl.innerHTML = calendarHTML;
}

function setupCalendarNavigation(events) {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('prev-month')) {
            navigateCalendar(-1, events);
        }
        
        if (e.target.classList.contains('next-month')) {
            navigateCalendar(1, events);
        }
    });
}

function navigateCalendar(direction, events) {
    const currentTitle = document.querySelector('#calendar h3').textContent;
    const [month, year] = currentTitle.split(' ');
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const monthIndex = monthNames.indexOf(month);
    
    let newMonth = monthIndex + direction;
    let newYear = parseInt(year);
    
    if (newMonth < 0) {
        newMonth = 11;
        newYear--;
    } else if (newMonth > 11) {
        newMonth = 0;
        newYear++;
    }
    
    renderCalendar(newYear, newMonth, events);
}