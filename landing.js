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





const container = document.getElementById('video-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let scrollPosition = 0;
const videoWidth = container.querySelector('.video').offsetWidth;
const gap = 20; // Same as CSS gap
const totalWidth = container.scrollWidth;
const visibleWidth = container.offsetWidth;

prevBtn.addEventListener('click', () => {
  scrollPosition = Math.max(scrollPosition - (videoWidth + gap) * 4, 0);
  container.style.transform = `translateX(-${scrollPosition}px)`;
});

nextBtn.addEventListener('click', () => {
  scrollPosition = Math.min(
    scrollPosition + (videoWidth + gap) * 4,
    totalWidth - visibleWidth
  );
  container.style.transform = `translateX(-${scrollPosition}px)`;
});