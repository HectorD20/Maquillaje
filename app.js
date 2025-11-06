// Espera a que todo el HTML esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleccionar los elementos del DOM
    const slides = document.querySelectorAll('.carousel-slide');
    const nextButton = document.querySelector('.arrow-right');
    const prevButton = document.querySelector('.arrow-left');
    
    // 2. Variable para saber qué diapositiva mostrar
    let currentSlide = 0;

    // 3. Función para mostrar la diapositiva
    function showSlide(index) {
        // Primero, oculta todas las diapositivas
        slides.forEach(slide => {
            slide.classList.remove('active-slide');
        });
        
        // Luego, muestra solo la diapositiva que queremos
        slides[index].classList.add('active-slide');
    }

    // 4. Evento para el botón "Siguiente"
    nextButton.addEventListener('click', () => {
        currentSlide++; // Mueve el índice hacia adelante
        
        // Si el índice es mayor que el número de diapositivas, vuelve al inicio
        if (currentSlide >= slides.length) {
            currentSlide = 0; 
        }
        
        showSlide(currentSlide); // Muestra la nueva diapositiva
    });

    // 5. Evento para el botón "Anterior"
    prevButton.addEventListener('click', () => {
        currentSlide--; // Mueve el índice hacia atrás
        
        // Si el índice es menor que 0, ve a la última diapositiva
        if (currentSlide < 0) {
            currentSlide = slides.length - 1; 
        }
        
        showSlide(currentSlide); // Muestra la nueva diapositiva
    });

    // 6. Mostrar la primera diapositiva (índice 0) al cargar la página
    showSlide(0);

});