document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // Remove the class when it's out of view
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    // Select all elements you want to animate on scroll
    const elementsToAnimate = document.querySelectorAll('.header, .about, .services, .footer, .service, .advantages-section, .contact-section');

    // Start observing each element
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});


// Получаем элементы
const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');
const mobileMenu = document.getElementById('mobile-menu');

// Открытие меню
menuButton.addEventListener('click', () => {
    mobileMenu.classList.add('active'); // Добавляем класс active для показа меню
});

// Закрытие меню
closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('active'); // Убираем класс active для скрытия меню
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
    }
});




// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeButton = document.getElementById('close-button');
    
    if (menuButton && mobileMenu && closeButton) {
        menuButton.addEventListener('click', function() {
            mobileMenu.style.display = 'block';
        });

        closeButton.addEventListener('click', function() {
            mobileMenu.style.display = 'none';
        });
    }

    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.catalog-tab');
    const programsContent = document.querySelector('.programs-content');
    const holidaysContent = document.querySelector('.holidays-content');

    // Only set up tab switching if we found all necessary elements
    if (tabButtons.length && programsContent && holidaysContent) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all tabs
                tabButtons.forEach(tab => tab.classList.remove('active-tab'));
                
                // Add active class to clicked tab
                this.classList.add('active-tab');
                
                // Show/hide content based on data-category
                const category = this.getAttribute('data-category');
                
                if (category === 'programs') {
                    programsContent.classList.add('active-category');
                    holidaysContent.classList.remove('active-category');
                } else if (category === 'holidays') {
                    holidaysContent.classList.add('active-category');
                    programsContent.classList.remove('active-category');
                }
            });
        });

        // Ensure programs content is visible by default
        programsContent.classList.add('active-category');
        holidaysContent.classList.remove('active-category');
    }
});
