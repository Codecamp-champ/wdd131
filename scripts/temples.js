// Footer copyright year
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Footer last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger button functionality
const hamburgerButton = document.getElementById('hamburger-btn');
const primaryNav = document.getElementById('primary-nav');

hamburgerButton.addEventListener('click', () => {
    primaryNav.classList.toggle('open');
    if (primaryNav.classList.contains('open')) {
        hamburgerButton.textContent = 'X';
    } else {
        hamburgerButton.textContent = '☰'; // Or whatever symbol you used
    }
});