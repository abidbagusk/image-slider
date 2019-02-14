// Get container and slider
const carouselSlide = document.querySelector('.carousel-slide');
const carouselmages = document.querySelectorAll('.carousel-slide img');
// Get button
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter : for monitoring which picture that on
let counter = 1;
// Know width of the image
const size = carouselmages[0].clientWidth;

// Start Image with original one, not duplicate
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Add button listener
nextBtn.addEventListener('click', function () {
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    // add counter while click
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
prevBtn.addEventListener('click', function () {
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    // add counter while click
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});