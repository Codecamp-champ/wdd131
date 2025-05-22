document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById("currentYear").textContent = new Date().getFullYear();

    document.getElementById("lastModified").textContent = document.lastModified;

    const hamburgerButton = document.getElementById('hamburger-btn');
    const primaryNav = document.getElementById('primary-nav');

    if (hamburgerButton && primaryNav) {
        hamburgerButton.addEventListener('click', () => {
            primaryNav.classList.toggle('open');
            if (primaryNav.classList.contains('open')) {
                hamburgerButton.textContent = 'X';
            } else {
                hamburgerButton.textContent = '☰';
            }
        });
    }

    const images = document.querySelectorAll('img[data-src]');
    const imgOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px 50px 0px'
    };

    const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.onload = () => {
                    img.removeAttribute('loading');
                };
                observer.unobserve(img);
            }
        });
    }, imgOptions);

    images.forEach(img => {
        imgObserver.observe(img);
    });

});