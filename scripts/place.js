document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Set last modified date in footer
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;

    // Windchill calculation
    const temperature = 5; // Static temperature in Celsius
    const windSpeed = 10;  // Static wind speed in km/h

    // Function to calculate windchill factor
    function calculateWindChill(temp, wind) {
        // Viable Wind Chill Calculations (Metric):
        // Temperature <= 10 °C AND Wind speed > 4.8 km/h
        if (temp <= 10 && wind > 4.8) {
            // Metric Wind Chill Formula (based on Environment Canada)
            // Twc = 13.12 + 0.6215Ta - 11.37V^0.16 + 0.3965TaV^0.16
            // Ta = air temperature in degrees Celsius
            // V = wind speed in km/h
            const windChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
            return windChill.toFixed(1) + ' °C'; // Format to one decimal place
        } else {
            return 'N/A'; // Not applicable
        }
    }

    // Calculate and display windchill
    const windChillResult = calculateWindChill(temperature, windSpeed);
    document.getElementById('windchill-value').textContent = windChillResult;
});