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

// Function to populate the product name dropdown
function populateProductDropdown() {
    const productNameSelect = document.getElementById('productName');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id; // Use product.id for the value attribute
        option.textContent = product.name; // Use product.name for the display text
        productNameSelect.appendChild(option);
    });
}

// Function to update the last modified date in the footer
function updateLastModified() {
    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }
}

// Event listener to run functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    populateProductDropdown();
    updateLastModified();
});