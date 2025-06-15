const products = [
    {
        id: "fc-1888",
        name: "FC-1888 Trainer"
    },
    {
        id: "fc-2050",
        name: "FC-2050 Light Fighter"
    },
    {
        id: "fc-675",
        name: "FC-675 Bomber"
    },
    {
        id: "fc-4021",
        name: "FC-4021 Interceptor"
    }
];

/**
 * Populates the product name dropdown select element
 * with options from the 'products' array.
 */
function populateProductDropdown() {
    const productNameSelect = document.getElementById('productName'); // Get the select element

    // Ensure the select element exists before proceeding
    if (productNameSelect) {
        // Iterate over each product in the array
        products.forEach(product => {
            const option = document.createElement('option'); // Create a new option element
            option.value = product.id; // Set the option's value to the product's ID
            option.textContent = product.name; // Set the option's visible text to the product's name
            productNameSelect.appendChild(option); // Add the option to the select dropdown
        });
    } else {
        console.error("Product name select element not found.");
    }
}

/**
 * Updates the 'Last Modified' span and 'Current Year' span in the footer.
 */
function updateFooterDates() {
    const lastModifiedSpan = document.getElementById('lastModified');
    const currentYearSpan = document.getElementById('currentYear');

    if (lastModifiedSpan) {
        // document.lastModified already includes "Last Modified: "
        lastModifiedSpan.textContent = `Review Form | ${document.lastModified}`;
    } else {
        console.error("Last modified span element not found in footer.");
    }

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    } else {
        console.error("Current year span element not found in footer.");
    }
}

// Event listener to execute functions once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    populateProductDropdown(); // Call the function to populate the product dropdown
    updateFooterDates();       // Call the function to update the footer dates
});