/**
 * Blog Interactive Features
 * Handles accordion, smooth scrolling, and other interactive elements
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all accordions
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.classList.remove('active');
                h.nextElementSibling.classList.remove('active');
            });
            
            // Open clicked accordion if it wasn't active
            if (!isActive) {
                this.classList.add('active');
                content.classList.add('active');
            }
        });
    });
    
    // Smooth scroll for TOC links
    const tocLinks = document.querySelectorAll('.toc-list a');
    
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add copy button to code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        const pre = block.parentElement;
        const wrapper = pre.parentElement;
        
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'code-copy-btn';
        copyButton.innerHTML = '📋 Copy';
        copyButton.setAttribute('aria-label', 'Copy code to clipboard');
        
        // Insert button
        if (wrapper.classList.contains('code-block')) {
            wrapper.style.position = 'relative';
            wrapper.appendChild(copyButton);
        } else {
            pre.style.position = 'relative';
            pre.appendChild(copyButton);
        }
        
        // Copy functionality
        copyButton.addEventListener('click', async function() {
            const code = block.textContent;
            
            try {
                await navigator.clipboard.writeText(code);
                copyButton.innerHTML = '✅ Copied!';
                copyButton.classList.add('copied');
                
                setTimeout(() => {
                    copyButton.innerHTML = '📋 Copy';
                    copyButton.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy code:', err);
                copyButton.innerHTML = '❌ Failed';
                
                setTimeout(() => {
                    copyButton.innerHTML = '📋 Copy';
                }, 2000);
            }
        });
    });
    
    // Reading progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        
        progressBar.style.width = progress + '%';
    });
    
    // Lazy load images with fade-in effect
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Only apply fade effect if image hasn't loaded yet
                if (!img.complete) {
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.5s ease';
                    
                    img.addEventListener('load', function() {
                        img.style.opacity = '1';
                    }, { once: true });
                }
                
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        // Skip if image is already loaded
        if (!img.complete) {
            imageObserver.observe(img);
        }
    });
    
    // Add anchor links to headings
    const headings = document.querySelectorAll('.blog-content h2[id], .blog-content h3[id]');
    
    headings.forEach(heading => {
        const anchor = document.createElement('a');
        anchor.className = 'heading-anchor';
        anchor.href = '#' + heading.id;
        anchor.innerHTML = '#';
        anchor.setAttribute('aria-label', 'Link to this section');
        heading.appendChild(anchor);
    });
    
    // Estimate reading time if not provided
    const content = document.querySelector('.blog-content');
    if (content) {
        const text = content.textContent;
        const wordCount = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // Average reading speed
        
        console.log(`📖 Estimated reading time: ${readingTime} minutes (${wordCount} words)`);
    }
    
});
