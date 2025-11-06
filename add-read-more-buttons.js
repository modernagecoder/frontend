// Script to add read more buttons to testimonials
// This can be run in the browser console to add read more buttons to all testimonials

function addReadMoreButtons() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        const blockquote = card.querySelector('blockquote');
        const readMoreContainer = card.querySelector('.read-more-container');
        
        // Only add if there's no read more button already
        if (blockquote && !readMoreContainer) {
            const readMoreHTML = `
                <div class="read-more-container">
                    <button class="read-more-btn" onclick="toggleReadMore(this)">
                        Read More
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M6 9l6 6 6-6"/>
                        </svg>
                    </button>
                </div>
            `;
            
            blockquote.insertAdjacentHTML('afterend', readMoreHTML);
        }
    });
}

// Run the function
addReadMoreButtons();
console.log('Read more buttons added to all testimonials!');