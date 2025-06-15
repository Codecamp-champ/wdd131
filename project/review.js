document.addEventListener('DOMContentLoaded', () => {
    const reviewCountSpan = document.getElementById('reviewCount'); // Get the span for displaying review count
    let count = parseInt(localStorage.getItem('reviewCount')) || 0; // Retrieve count from localStorage, default to 0 if not found

    // Check if the page was loaded due to a form submission (i.e., has URL parameters)
    // This is a simple heuristic; a more robust solution would involve server-side logic
    // or a specific query parameter from the form.
    if (window.location.search) {
        count++; // Increment the count only if it appears to be a new submission
        localStorage.setItem('reviewCount', count); // Store the updated count back into localStorage
    }

    // Update the displayed review count
    if (reviewCountSpan) {
        reviewCountSpan.textContent = count;
    } else {
        console.error("Review count span element not found.");
    }

    // Update the last modified date in the footer
    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    } else {
        console.error("Last modified span element not found.");
    }
});