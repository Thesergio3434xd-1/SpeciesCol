// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Array de imágenes de fondo para el hero
    const heroImages = [
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=2071&q=80',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=2071&q=80',
        'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=2071&q=80',
        'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=2071&q=80',
        'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=2071&q=80',
        'https://images.unsplash.com/photo-1511497584788-876760111969?w=2071&q=80'
    ];
    
    let currentImageIndex = 0;
    const heroSection = document.querySelector('.hero-section');
    
    // Función para cambiar imagen de fondo
    function cambiarImagenHero() {
        if (heroSection) {
            currentImageIndex = (currentImageIndex + 1) % heroImages.length;
            const newImage = heroImages[currentImageIndex];
            
            // Agregar clase de transición
            heroSection.style.transition = 'background-image 1.5s ease-in-out';
            heroSection.style.backgroundImage = `
                linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
                url('${newImage}')
            `;
            
            console.log('Imagen cambiada a:', currentImageIndex);
        }
    }
    
    // Cambiar imagen cada 8 segundos
    setInterval(cambiarImagenHero, 8000);
    
    // Precargar imágenes para transiciones suaves
    heroImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // Efecto de scroll para el navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(25, 135, 84, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(25, 135, 84, 1)';
        }
    });

    // Contador animado para estadísticas
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 segundos
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current).toLocaleString('es-CO');
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString('es-CO');
            }
        };

        updateCounter();
    }

    // Observer para activar contador cuando sea visible
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    if (counter.textContent === '0') {
                        animateCounter(counter);
                    }
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar la sección de estadísticas
    const statsSection = document.querySelector('.bg-success');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // Botón Explorar - Scroll suave a especies
    const btnExplorar = document.getElementById('btnExplorar');
    if (btnExplorar) {
        btnExplorar.addEventListener('click', function() {
            document.getElementById('especies').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }

    // Efecto parallax en hero section
    window.addEventListener('scroll', function() {
        const heroSection = document.querySelector('.hero-section');
        const scrolled = window.pageYOffset;
        if (heroSection) {
            heroSection.style.backgroundPositionY = scrolled * 0.5 + 'px';
        }
    });

    // Botones "Ver más" en las tarjetas
    const verMasBtns = document.querySelectorAll('.card .btn');
    verMasBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const cardTitle = this.closest('.card').querySelector('.card-title').textContent;
            
            // Crear modal dinámicamente
            const modalDiv = document.createElement('div');
            modalDiv.className = 'modal fade';
            modalDiv.id = 'infoModal';
            modalDiv.innerHTML = `
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header bg-success text-white">
                            <h5 class="modal-title">${cardTitle}</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <p>Colombia es uno de los países megadiversos del mundo, albergando aproximadamente el 10% de la biodiversidad del planeta.</p>
                            <p>La conservación de nuestras especies es fundamental para mantener el equilibrio ecológico y garantizar un futuro sostenible.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modalDiv);
            const modal = new bootstrap.Modal(modalDiv);
            modal.show();
            
            // Eliminar modal del DOM cuando se cierre
            modalDiv.addEventListener('hidden.bs.modal', function() {
                modalDiv.remove();
            });
        });
    });

    // Efecto de aparición para las cards al hacer scroll
    const cards = document.querySelectorAll('.hover-card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(20px)';
                    entry.target.style.transition = 'all 0.5s ease';
                    
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 50);
                }, index * 100);
                
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        cardObserver.observe(card);
    });

    // Añadir efecto de ripple a los botones
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    console.log('SpecialCol cargado correctamente ✓');
});
