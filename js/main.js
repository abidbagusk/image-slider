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
    // Fix bugs when user click button fast
    if (counter >= carouselmages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    // add counter while click
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
prevBtn.addEventListener('click', function () {
    // Fix bugs when user click button fast
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    // add counter while click
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Loop back image
carouselSlide.addEventListener('transitionend', function () {
    // If image has 'lastClone' id
    if (carouselmages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        // back to lastImage
        counter = carouselmages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselmages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        // back to firstImage
        counter = carouselmages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});