
// Browser console script to measure touch targets
// Run this in Chrome DevTools console on each page

function measureTouchTargets() {
    const MIN_SIZE = 44;
    const results = [];
    
    // Interactive element selectors
    const selectors = [
        'button',
        'a[href]',
        'input[type="button"]',
        'input[type="submit"]',
        'input[type="reset"]',
        '[role="button"]',
        'select',
        'textarea',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="tel"]',
        'input[type="password"]',
        'input[type="search"]',
        'input[type="url"]',
        'input[type="number"]'
    ];
    
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        
        elements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            const computedStyle = window.getComputedStyle(element);
            
            // Get actual dimensions including padding
            const width = rect.width;
            const height = rect.height;
            
            const result = {
                selector: selector,
                index: index,
                element: element.tagName.toLowerCase() + (element.className ? '.' + element.className.split(' ').join('.') : ''),
                width: Math.round(width),
                height: Math.round(height),
                meetsMinWidth: width >= MIN_SIZE,
                meetsMinHeight: height >= MIN_SIZE,
                meetsRequirement: width >= MIN_SIZE && height >= MIN_SIZE,
                text: element.textContent?.trim().substring(0, 50) || element.value || element.alt || '[no text]',
                visible: rect.width > 0 && rect.height > 0 && computedStyle.visibility !== 'hidden' && computedStyle.display !== 'none'
            };
            
            results.push(result);
        });
    });
    
    // Filter to only visible elements
    const visibleResults = results.filter(r => r.visible);
    
    // Summary
    const total = visibleResults.length;
    const passing = visibleResults.filter(r => r.meetsRequirement).length;
    const failing = visibleResults.filter(r => !r.meetsRequirement).length;
    
    console.log('=== TOUCH TARGET MEASUREMENT RESULTS ===');
    console.log(`Total interactive elements: ${total}`);
    console.log(`Passing (≥44x44px): ${passing}`);
    console.log(`Failing (<44x44px): ${failing}`);
    console.log(`Pass rate: ${Math.round((passing/total)*100)}%`);
    
    if (failing > 0) {
        console.log('\n=== FAILING ELEMENTS ===');
        visibleResults.filter(r => !r.meetsRequirement).forEach(r => {
            console.log(`❌ ${r.element}: ${r.width}x${r.height}px - "${r.text}"`);
        });
    }
    
    console.log('\n=== ALL RESULTS ===');
    console.table(visibleResults.map(r => ({
        Element: r.element,
        Size: `${r.width}x${r.height}px`,
        Pass: r.meetsRequirement ? '✅' : '❌',
        Text: r.text
    })));
    
    return {
        total,
        passing,
        failing,
        passRate: Math.round((passing/total)*100),
        results: visibleResults
    };
}

// Run the measurement
const touchTargetResults = measureTouchTargets();
