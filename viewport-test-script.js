// Viewport Testing Script for Mobile Responsiveness
// Tests for horizontal scrolling issues on various mobile viewport sizes

class ViewportTester {
    constructor() {
        this.testResults = [];
        this.viewportSizes = [
            { name: 'iPhone SE', width: 320, height: 568 },
            { name: 'iPhone 12', width: 375, height: 812 },
            { name: 'iPhone 13', width: 390, height: 844 },
            { name: 'iPad', width: 768, height: 1024 }
        ];
    }

    // Test current page for horizontal scroll at different viewport widths
    testCurrentPage() {
        const results = [];
        const originalWidth = window.innerWidth;
        
        this.viewportSizes.forEach(viewport => {
            // Simulate viewport width by checking document dimensions
            const hasHorizontalScroll = this.checkHorizontalScroll(viewport.width);
            const wideElements = this.findWideElements(viewport.width);
            
            results.push({
                viewport: viewport.name,
                width: viewport.width,
                height: viewport.height,
                hasHorizontalScroll: hasHorizontalScroll,
                wideElements: wideElements,
                status: hasHorizontalScroll ? 'FAIL' : 'PASS'
            });
        });
        
        return results;
    }

    checkHorizontalScroll(viewportWidth) {
        // Check if document width exceeds viewport width
        const documentWidth = Math.max(
            document.body.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.clientWidth,
            document.documentElement.scrollWidth,
            document.documentElement.offsetWidth
        );
        
        return documentWidth > viewportWidth;
    }

    findWideElements(viewportWidth) {
        const wideElements = [];
        const allElements = document.querySelectorAll('*');
        
        allElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const computedStyle = window.getComputedStyle(element);
            
            // Check if element is wider than viewport
            if (rect.width > viewportWidth || 
                (computedStyle.minWidth && parseInt(computedStyle.minWidth) > viewportWidth)) {
                
                wideElements.push({
                    tagName: element.tagName,
                    className: element.className,
                    id: element.id,
                    width: rect.width,
                    computedWidth: computedStyle.width,
                    minWidth: computedStyle.minWidth
                });
            }
        });
        
        return wideElements.slice(0, 10); // Limit to first 10 elements
    }

    generateReport() {
        const results = this.testCurrentPage();
        return {
            timestamp: new Date().toISOString(),
            url: window.location.href,
            userAgent: navigator.userAgent,
            results: results,
            summary: this.generateSummary(results)
        };
    }

    generateSummary(results) {
        const total = results.length;
        const passed = results.filter(r => r.status === 'PASS').length;
        const failed = results.filter(r => r.status === 'FAIL').length;
        
        return {
            total: total,
            passed: passed,
            failed: failed,
            passRate: ((passed / total) * 100).toFixed(1) + '%',
            overallStatus: failed === 0 ? 'PASS' : 'FAIL'
        };
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ViewportTester;
}