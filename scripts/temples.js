document.addEventListener('DOMContentLoaded', () => {
    // ... (existing code for current year, last modified, hamburger menu)

    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imgOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px 50px 0px'
    };

    const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // This line loads the image
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

    // ... (existing code for figure count)
});