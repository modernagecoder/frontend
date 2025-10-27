// ====== TESTIMONIALS CAROUSEL FUNCTIONALITY ======

class TestimonialsCarousel {
    constructor() {
        this.track = document.querySelector('.testimonials-track');
        this.cards = document.querySelectorAll('.testimonial-card');
        this.leftArrow = document.querySelector('.carousel-arrow-left');
        this.rightArrow = document.querySelector('.carousel-arrow-right');
        this.dotsContainer = document.querySelector('.carousel-dots');
        
        this.currentIndex = 0;
        this.cardsPerView = this.getCardsPerView();
        this.totalSlides = Math.ceil(this.cards.length / this.cardsPerView);
        this.isAnimating = false;
        this.autoplayInterval = null;
        this.autoplayDelay = 5000;
        
        this.init();
    }
    
    init() {
        if (!this.track || this.cards.length === 0) return;
        
        this.createDots();
        this.updateDots();
        this.attachEventListeners();
        this.startAutoplay();
        
        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                this.handleResize();
            }, 250);
        });
        
        // Pause autoplay on hover
        const container = document.querySelector('.testimonials-carousel-container');
        if (container) {
            container.addEventListener('mouseenter', () => this.stopAutoplay());
            container.addEventListener('mouseleave', () => this.startAutoplay());
        }
        
        // Touch support
        this.addTouchSupport();
    }
    
    getCardsPerView() {
        const width = window.innerWidth;
        if (width < 768) return 1;
        return 2;
    }
    
    createDots() {
        if (!this.dotsContainer) return;
        
        this.dotsContainer.innerHTML = '';
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotsContainer.appendChild(dot);
        }
    }
    
    updateDots() {
        const dots = this.dotsContainer?.querySelectorAll('.carousel-dot');
        if (!dots) return;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    attachEventListeners() {
        if (this.leftArrow) {
            this.leftArrow.addEventListener('click', () => this.prev());
        }
        
        if (this.rightArrow) {
            this.rightArrow.addEventListener('click', () => this.next());
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
    }
    
    addTouchSupport() {
        let touchStartX = 0;
        let touchEndX = 0;
        let touchStartY = 0;
        let touchEndY = 0;
        
        this.track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });
        
        this.track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            this.handleSwipe(touchStartX, touchEndX, touchStartY, touchEndY);
        }, { passive: true });
    }
    
    handleSwipe(startX, endX, startY, endY) {
        const diffX = startX - endX;
        const diffY = Math.abs(startY - endY);
        const threshold = 50;
        
        // Only trigger if horizontal swipe is more significant than vertical
        if (Math.abs(diffX) > threshold && Math.abs(diffX) > diffY) {
            if (diffX > 0) {
                this.next();
            } else {
                this.prev();
            }
        }
    }
    
    goToSlide(index) {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        this.currentIndex = index;
        
        const offset = -this.currentIndex * 100;
        this.track.style.transform = `translateX(${offset}%)`;
        
        this.updateDots();
        this.updateArrows();
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 500);
        
        this.resetAutoplay();
    }
    
    next() {
        if (this.isAnimating) return;
        
        const nextIndex = (this.currentIndex + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }
    
    prev() {
        if (this.isAnimating) return;
        
        const prevIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prevIndex);
    }
    
    updateArrows() {
        // Optional: disable arrows at start/end if you don't want infinite loop
        // For now, we keep infinite loop enabled
    }
    
    handleResize() {
        const newCardsPerView = this.getCardsPerView();
        
        if (newCardsPerView !== this.cardsPerView) {
            this.cardsPerView = newCardsPerView;
            this.totalSlides = Math.ceil(this.cards.length / this.cardsPerView);
            
            // Reset to first slide if current index is out of bounds
            if (this.currentIndex >= this.totalSlides) {
                this.currentIndex = 0;
            }
            
            this.createDots();
            this.goToSlide(this.currentIndex);
        }
    }
    
    startAutoplay() {
        this.stopAutoplay();
        this.autoplayInterval = setInterval(() => {
            this.next();
        }, this.autoplayDelay);
    }
    
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
    
    resetAutoplay() {
        this.stopAutoplay();
        this.startAutoplay();
    }
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const carousel = new TestimonialsCarousel();
});
