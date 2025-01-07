
const menuOpen = document.querySelector('.nav-menu-bar')
const menuClose = document.querySelector('.menu-close')
const menu = document.querySelector('.nav-links')
const navLinks = document.querySelectorAll('.nav-link-list li a')
const nav = document.getElementById('nav')

console.log(navLinks.length);
navLinks.forEach(link => {
    link.addEventListener('click', function(){
        menu.classList.remove('menu-open')
    document.documentElement.classList.remove('no-scroll');
        document.body.style.overflowY = 'unset';
    })
})
menuOpen.addEventListener('click', function(){
    menu.classList.add('menu-open')
    document.documentElement.classList.add('no-scroll');
    document.body.style.overflowY = 'hidden';
})
menuClose.addEventListener('click', function(){
    menu.classList.remove('menu-open')
    document.documentElement.classList.remove('no-scroll');
    document.body.style.overflowY = 'unset';
})

let sr = ScrollReveal({ reset: true, duration: 1000, easing: 'ease-in-out', distance: '100px' })

sr.reveal('.nav-cta', {
    distance: '100px',
    origin: 'right',
    reset: false
})
sr.reveal('.nav-links', {
    distance: '100px',
    origin: 'left'
})
sr.reveal('.hero h1, .hero p, .hero-buttons a', {
    distance: '0px',
    opacity: 0,
    duration: 1000,
    delay: 800,
    interval: 500
})
sr.reveal('.features-content',{
    origin: 'left'
})
sr.reveal('.features-image',{
    origin: 'right',
})
sr.reveal('.cta-content, .services-content', {
    opacity: 0.2,
    distance: '0px'
})
sr.reveal('.services-grid > div', {
    scale: 0.1,
    interval: 100,
})
sr.reveal('.testimonial-block', {
    scale: 0.1,
    origin: 'bottom',
    interval: 100,
})

let lastScroll = 0;

window.addEventListener('scroll', function(){
    const currentScroll = this.scrollY;
    const nav = document.querySelector('nav'); // Make sure you have nav defined

    if (currentScroll > 1000) {
        nav.classList.add('fixed-nav');
        
        // Sliding logic
        if (currentScroll < lastScroll) { // Scrolling down
            nav.classList.add('nav-hidden');
        } else { // Scrolling up
            nav.classList.remove('nav-hidden');
        }
    } else {
        nav.classList.remove('fixed-nav');
        nav.classList.remove('nav-hidden');
    }
    
    lastScroll = currentScroll;
});