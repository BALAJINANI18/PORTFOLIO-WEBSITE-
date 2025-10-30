// Get all links that start with '#' (internal links)
const navLinks = document.querySelectorAll('.nav-links a');

// --- SMOOTH SCROLLING FUNCTION ---
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Use the scrollIntoView method for smooth scrolling
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// --- SCROLLSPY FUNCTIONALITY FOR ACTIVE NAVBAR LINK ---
const sections = document.querySelectorAll('section[id]'); 

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        // Adjust sectionTop by navbar height (approx 100px)
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            // Determine which section the user is currently in
            if (pageYOffset < sectionTop + sectionHeight) {
                 current = section.getAttribute('id');
            }
        }
    });

    // Apply the 'active' class to the matching navigation link
    navLinks.forEach(link => {
        link.classList.remove('active');
        // Check if the link's href matches the current section's ID
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});