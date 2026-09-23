// Transportes M. Vargas - Main JavaScript

// ==========================================
// MENÚ HAMBURGUESA
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navbarMenu.classList.toggle('active');
        });

        // Cerrar menú al hacer click en un link
        const navLinks = navbarMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarToggle.classList.remove('active');
                navbarMenu.classList.remove('active');
            });
        });
    }
});

// ==========================================
// BOTÓN BACK TO TOP
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        // Mostrar/ocultar botón según scroll
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'flex';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
        
        // Scroll suave al top
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// ==========================================
// CAROUSEL (SOLO PARA INDEX.HTML)
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const carouselElement = document.getElementById('heroCarousel');
    
    if (carouselElement) {
        const progressBar = document.getElementById('carouselProgress');
        
        const carousel = new bootstrap.Carousel(carouselElement, {
            interval: 5000,
            wrap: true,
            ride: 'carousel',
            pause: false
        });

        // Función para reiniciar la barra de progreso
        function resetProgressBar() {
            if (progressBar) {
                progressBar.classList.remove('active');
                void progressBar.offsetWidth; // Forzar reflow
                progressBar.classList.add('active');
            }
        }

        // Iniciar barra de progreso al cargar
        resetProgressBar();

        // Reiniciar barra cuando cambia de slide
        carouselElement.addEventListener('slid.bs.carousel', function() {
            resetProgressBar();
        });

        // Iniciar automáticamente
        carousel.cycle();
    }
});
