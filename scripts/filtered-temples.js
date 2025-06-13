const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Denver Colorado",
    location: "Denver, Colorado",
    dedicated: "1986, October, 24",
    area: 29117,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/denver-colorado-temple/denver-colorado-temple-42455-main.jpg"
},
{
    templeName: "Gilbert Arizona",
    location: "Gilbert, Arizona",
    dedicated: "2014, March, 2",
    area: 85326,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-3802-main.jpg"
},
{
    templeName: "Vancouver British Columbia",
    location: "Vancouver, British Columbia",
    dedicated: "2010, May, 2",
    area: 28165,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/vancouver-british-columbia-temple/vancouver-british-columbia-temple-13064-main.jpg"
},
]
function createTempleCard(temple) {
  const article = document.createElement('article');
  article.classList.add('temple-card');

  const h3 = document.createElement('h3');
  h3.textContent = temple.templeName;

  const locationParagraph = document.createElement('p');
  locationParagraph.textContent = `Location: ${temple.location}`;

  const dedicatedParagraph = document.createElement('p');
  const dedicatedDate = new Date(temple.dedicated);
  dedicatedParagraph.textContent = `Dedicated: ${dedicatedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`;

  const areaParagraph = document.createElement('p');
  areaParagraph.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

  const img = document.createElement('img');
  img.src = temple.imageUrl;
  img.alt = `${temple.templeName} Temple`;
  img.loading = 'lazy'; // Native lazy loading
  img.width = 400;
  img.height = 250;

  article.appendChild(h3);
  article.appendChild(locationParagraph);
  article.appendChild(dedicatedParagraph);
  article.appendChild(areaParagraph);
  article.appendChild(img);

  return article;
}

function displayTemples(filteredTemples) {
  const container = document.getElementById('temple-cards-container');
  container.innerHTML = ''; // Clear existing content

  filteredTemples.forEach(temple => {
      const card = createTempleCard(temple);
      container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const primaryNav = document.getElementById('primary-nav');
  const navLinks = primaryNav.querySelectorAll('a');
  const filterHeading = document.getElementById('filter-heading'); // Get the heading element

  // Toggle navigation menu for small screens
  hamburgerBtn.addEventListener('click', () => {
      primaryNav.classList.toggle('open');
      hamburgerBtn.setAttribute('aria-expanded', primaryNav.classList.contains('open'));
  });

  // Initial display of all temples
  displayTemples(temples);

  // Event listeners for navigation filtering
  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault(); // Prevent default link behavior

          const filterType = link.id;
          let filteredList = [];
          let headingText = "";

          switch (filterType) {
              case 'home-link':
                  filteredList = temples;
                  headingText = "Home";
                  break;
              case 'old-link':
                  // Temples built before 1900
                  filteredList = temples.filter(temple => {
                      const year = parseInt(temple.dedicated.split(',')[0]);
                      return year < 1900;
                  });
                  headingText = "Old Temples";
                  break;
              case 'new-link':
                  // Temples built after 2000
                  filteredList = temples.filter(temple => {
                      const year = parseInt(temple.dedicated.split(',')[0]);
                      return year > 2000;
                  });
                  headingText = "New Temples";
                  break;
              case 'large-link':
                  // Temples larger than 90,000 square feet
                  filteredList = temples.filter(temple => temple.area > 90000);
                  headingText = "Large Temples";
                  break;
              case 'small-link':
                  // Temples smaller than 10,000 square feet
                  filteredList = temples.filter(temple => temple.area < 10000);
                  headingText = "Small Temples";
                  break;
              default:
                  filteredList = temples; // Fallback to all temples
                  headingText = "Home";
                  break;
          }
          displayTemples(filteredList);
          filterHeading.textContent = headingText; // Update the heading text

          // Close the nav on mobile after selection
          if (primaryNav.classList.contains('open')) {
              primaryNav.classList.remove('open');
              hamburgerBtn.setAttribute('aria-expanded', 'false');
          }
      });
  });

  // Footer current year
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear();
  }

  // Footer last modified date
  const lastModifiedSpan = document.getElementById('lastModified');
  if (lastModifiedSpan) {
      lastModifiedSpan.textContent = new Date(document.lastModified).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
      });
  }
});