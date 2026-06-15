//Shared navigation behavior

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    });

    //Close nav when any link is tapped on mobile
    navLinks.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.classList.remove('open');
        });
    });
}
