// Get the hamburger menu and navigation menu elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Add event listener to the hamburger menu
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on both the hamburger and nav-menu
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close the mobile menu when a nav link is clicked
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));
