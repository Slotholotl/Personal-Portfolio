/* Function to toggle the hamburger menu and change the icon to 'X' */
function toggleMenu() {
    const menu = document.querySelector(".menu-links");  // Select the dropdown menu
    const icon = document.querySelector(".hamburger-icon");  // Select the hamburger icon
    menu.classList.toggle("open");  // Toggle the 'open' class to expand/collapse menu
    icon.classList.toggle("open");  // Toggle the 'open' class to change icon into 'X'
}
