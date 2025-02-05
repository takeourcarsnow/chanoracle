document.addEventListener('click', (e) => {
    // Carousel navigation
    if (e.target.closest('.carousel-arrow')) {
        const scrollContainer = document.querySelector('.template-scroll');
        const scrollAmount = 200; // Adjust this value as needed
        const direction = e.target.closest('.carousel-arrow').classList.contains('left-arrow') ? -1 : 1;
        scrollContainer.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel scroll
    const scrollContainer = document.querySelector('.template-scroll');
    scrollContainer.addEventListener('scroll', () => {
        const arrows = document.querySelectorAll('.carousel-arrow');
        const scrollLeft = scrollContainer.scrollLeft;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

        arrows[0].style.display = scrollLeft > 0 ? 'flex' : 'none';
        arrows[1].style.display = scrollLeft < maxScroll ? 'flex' : 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.template-scroll');
    let isDragging = false;
    let startX;
    let scrollLeft;

    // Touch events for mobile
    scrollContainer.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches[0].pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2; // The multiplier controls the speed
        scrollContainer.scrollLeft = scrollLeft - walk;
    });

    scrollContainer.addEventListener('touchend', () => {
        isDragging = false;
    });

    // Mouse events for desktop
    scrollContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainer.scrollLeft = scrollLeft - walk;
    });

    scrollContainer.addEventListener('mouseup', () => {
        isDragging = false;
    });

    scrollContainer.addEventListener('mouseleave', () => {
        isDragging = false;
    });
}); 