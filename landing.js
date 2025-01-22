// Intersection Observer for Animations
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    const elementsToAnimate = document.querySelectorAll('.header, .about, .services, .footer, .service, .advantages-section, .contact-section');

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

// Mobile Menu Functionality
const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.add('active'); 
});

closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
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

function updateCarousel() {
    // Get current screen width
    const screenWidth = window.innerWidth;
    
    // Get single video element width including gap
    const videoElement = container.querySelector('.video');
    const videoWidth = videoElement.offsetWidth;
    const gap = 20; // Gap between videos
    
    // Calculate total carousel width
    const totalWidth = container.scrollWidth;
    const visibleWidth = container.offsetWidth;
    
    // Determine number of videos to scroll based on screen size
    let scrollVideos;
    if (screenWidth <= 768) {
        // On mobile, scroll one video at a time
        scrollVideos = 1;
    } else {
        // On desktop, scroll four videos at a time
        scrollVideos = 4;
    }
    
    prevBtn.addEventListener('click', () => {
        // Calculate new scroll position
        const scrollAmount = (videoWidth + gap) * scrollVideos;
        scrollPosition = Math.max(scrollPosition - scrollAmount, 0);
        
        // Apply smooth scrolling
        container.style.transition = 'transform 0.5s ease';
        container.style.transform = `translateX(-${scrollPosition}px)`;
    });
    
    nextBtn.addEventListener('click', () => {
        // Calculate new scroll position
        const scrollAmount = (videoWidth + gap) * scrollVideos;
        const maxScroll = totalWidth - visibleWidth;
        scrollPosition = Math.min(scrollPosition + scrollAmount, maxScroll);
        
        // Apply smooth scrolling
        container.style.transition = 'transform 0.5s ease';
        container.style.transform = `translateX(-${scrollPosition}px)`;
    });
}

// Initialize carousel
updateCarousel();

// Update carousel on window resize
window.addEventListener('resize', updateCarousel);

// Optional: Add touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

container.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50; // Minimum distance for a swipe
    const swipeDistance = touchStartX - touchEndX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // Swipe left - show next
            nextBtn.click();
        } else {
            // Swipe right - show previous
            prevBtn.click();
        }
    }
}

// Mobile Menu Display Toggle
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

    // Tab Switching Functionality
    const tabButtons = document.querySelectorAll('.catalog-tab');
    const programsContent = document.querySelector('.programs-content');
    const holidaysContent = document.querySelector('.holidays-content');

    if (tabButtons.length && programsContent && holidaysContent) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                tabButtons.forEach(tab => tab.classList.remove('active-tab'));
                this.classList.add('active-tab');
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

        programsContent.classList.add('active-category');
        holidaysContent.classList.remove('active-category');
    }
});