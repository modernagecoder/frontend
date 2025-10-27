// Certificate Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.certificate-track');
    const leftArrow = document.querySelector('.certificate-arrow-left');
    const rightArrow = document.querySelector('.certificate-arrow-right');
    const images = document.querySelectorAll('.certificate-image');
    
    if (!track || !leftArrow || !rightArrow || images.length === 0) {
        return;
    }
    
    let currentIndex = 0;
    const totalImages = images.length;
    
    function updateCarousel() {
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
    }
    
    function goToNext() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }
    
    function goToPrevious() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    }
    
    // Arrow click handlers
    rightArrow.addEventListener('click', goToNext);
    leftArrow.addEventListener('click', goToPrevious);
    
    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    track.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                goToNext();
            } else {
                goToPrevious();
            }
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            goToPrevious();
        } else if (e.key === 'ArrowRight') {
            goToNext();
        }
    });
});
