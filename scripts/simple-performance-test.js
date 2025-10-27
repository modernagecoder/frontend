const http = require('http');
const { performance } = require('perf_hooks');

// Configuration
const BASE_URL = 'http://localhost:8080';

// Test pages
const TEST_PAGES = [
    {
        name: 'Homepage',
        url: `${BASE_URL}/`,
        path: '/'
    },
    {
        name: 'About Page',
        url: `${BASE_URL}/about`,
        path: '/about'
    },
    {
        name: 'Courses Listing',
        url: `${BASE_URL}/courses`,
        path: '/courses'
    },
    {
        name: 'Course Detail',
        url: `${BASE_URL}/courses/python-programming-masterclass-zero-to-advanced`,
        path: '/courses/python-programming-masterclass-zero-to-advanced'
    }
];

// Performance thresholds
const THRESHOLDS = {
    responseTime: 1000, // 1 second for server response
    contentSize: 500000 // 500KB max content size
};

function makeRequest(url) {
    return new Promise((resolve, reject) => {
        const startTime = performance.now();
        
        const req = http.get(url, (res) => {
            let data = '';
            let contentLength = 0;
            
            res.on('data', (chunk) => {
                data += chunk;
                contentLength += chunk.length;
            });
            
            res.on('end', () => {
                const endTime = performance.now();
                const responseTime = endTime - startTime;
                
                resolve({
                    statusCode: res.statusCode,
                    responseTime: Math.round(responseTime),
                    contentLength: contentLength,
                    contentType: res.headers['content-type'],
                    hasViewportMeta: data.includes('name="viewport"'),
                    hasMetaDescription: data.includes('name="description"'),
                    hasTitle: /<title>.*<\/title>/.test(data),
                    hasH1: /<h1[^>]*>/.test(data),
                    imageCount: (data.match(/<img[^>]*>/g) || []).length,
                    linkCount: (data.match(/<a[^>]*>/g) || []).length
                });
            });
        });
        
        req.on('error', (error) => {
            reject(error);
        });
        
        req.setTimeout(10000, () => {
            req.destroy();
            reject(new Error('Request timeout'));
        });
    });
}

async function testPage(page) {
    console.log(`\n🔍 Testing ${page.name}...`);
    console.log(`   URL: ${page.url}`);
    
    try {
        const result = await makeRequest(page.url);
        
        return {
            name: page.name,
            url: page.url,
            ...result
        };
        
    } catch (error) {
        console.error(`   ❌ Error testing ${page.name}:`, error.message);
        return {
            name: page.name,
            url: page.url,
            error: error.message
        };
    }
}

function checkBasicPerformance(result) {
    const issues = [];
    
    if (result.error) {
        return [`Failed to load: ${result.error}`];
    }
    
    if (result.statusCode !== 200) {
        issues.push(`HTTP ${result.statusCode} (expected 200)`);
    }
    
    if (result.responseTime > THRESHOLDS.responseTime) {
        issues.push(`Response time ${result.responseTime}ms > ${THRESHOLDS.responseTime}ms`);
    }
    
    if (result.contentLength > THRESHOLDS.contentSize) {
        issues.push(`Content size ${Math.round(result.contentLength/1024)}KB > ${Math.round(THRESHOLDS.contentSize/1024)}KB`);
    }
    
    if (!result.hasViewportMeta) {
        issues.push(`Missing viewport meta tag`);
    }
    
    if (!result.hasMetaDescription) {
        issues.push(`Missing meta description`);
    }
    
    if (!result.hasTitle) {
        issues.push(`Missing or empty title tag`);
    }
    
    if (!result.hasH1) {
        issues.push(`Missing H1 heading`);
    }
    
    return issues;
}

function formatResults(results) {
    console.log('\n📊 BASIC PERFORMANCE TEST RESULTS');
    console.log('=' .repeat(60));
    
    let allPassed = true;
    
    results.forEach(result => {
        console.log(`\n📄 ${result.name}`);
        console.log(`   URL: ${result.url}`);
        
        if (result.error) {
            console.log(`   ❌ Error: ${result.error}`);
            allPassed = false;
            return;
        }
        
        console.log(`   Status: ${result.statusCode}`);
        console.log(`   Response Time: ${result.responseTime}ms`);
        console.log(`   Content Size: ${Math.round(result.contentLength/1024)}KB`);
        console.log(`   Content Type: ${result.contentType}`);
        console.log(`   Images: ${result.imageCount}`);
        console.log(`   Links: ${result.linkCount}`);
        
        // SEO checks
        console.log(`   SEO Checks:`);
        console.log(`     Viewport Meta: ${result.hasViewportMeta ? '✅' : '❌'}`);
        console.log(`     Meta Description: ${result.hasMetaDescription ? '✅' : '❌'}`);
        console.log(`     Title Tag: ${result.hasTitle ? '✅' : '❌'}`);
        console.log(`     H1 Heading: ${result.hasH1 ? '✅' : '❌'}`);
        
        const issues = checkBasicPerformance(result);
        if (issues.length > 0) {
            console.log(`   ❌ Issues:`);
            issues.forEach(issue => console.log(`      • ${issue}`));
            allPassed = false;
        } else {
            console.log(`   ✅ Basic performance checks passed`);
        }
    });
    
    console.log('\n' + '=' .repeat(60));
    console.log(`\n🎯 SUMMARY`);
    console.log(`   Target Response Time: < ${THRESHOLDS.responseTime}ms`);
    console.log(`   Target Content Size: < ${Math.round(THRESHOLDS.contentSize/1024)}KB`);
    console.log(`   Required: Viewport meta, description, title, H1`);
    
    if (allPassed) {
        console.log(`\n✅ All pages pass basic performance checks!`);
    } else {
        console.log(`\n❌ Some pages need improvements.`);
    }
    
    console.log(`\n⚠️  NOTE: This is a basic performance test.`);
    console.log(`   For full Lighthouse testing with Core Web Vitals,`);
    console.log(`   please install Lighthouse globally or use Chrome DevTools.`);
    
    return allPassed;
}

async function main() {
    console.log('🚀 Starting Basic Performance Tests...');
    console.log(`   Testing ${TEST_PAGES.length} pages`);
    console.log(`   Base URL: ${BASE_URL}`);
    
    // Check if dev server is running
    try {
        await makeRequest(BASE_URL);
    } catch (error) {
        console.error(`\n❌ Development server not accessible at ${BASE_URL}`);
        console.error('   Please make sure the dev server is running with: npm run dev');
        process.exit(1);
    }
    
    const results = [];
    
    // Run tests
    for (const page of TEST_PAGES) {
        const result = await testPage(page);
        results.push(result);
    }
    
    // Format and display results
    const allPassed = formatResults(results);
    
    process.exit(allPassed ? 0 : 1);
}

// Handle errors
process.on('unhandledRejection', (error) => {
    console.error('❌ Unhandled error:', error);
    process.exit(1);
});

if (require.main === module) {
    main();
}

module.exports = { testPage, checkBasicPerformance, formatResults };