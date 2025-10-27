const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'http://localhost:8080';
const OUTPUT_DIR = 'lighthouse-reports';

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
        url: `${BASE_URL}/courses/javascript-fundamentals`,
        path: '/courses/javascript-fundamentals'
    }
];

// Performance thresholds
const THRESHOLDS = {
    performance: 90,
    lcp: 2500, // 2.5 seconds in milliseconds
    fid: 100,  // 100 milliseconds
    cls: 0.1   // 0.1 cumulative layout shift
};

// Create output directory
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function runLighthouseTest(page) {
    console.log(`\n🔍 Testing ${page.name}...`);
    console.log(`   URL: ${page.url}`);
    
    try {
        // Run Lighthouse with mobile configuration
        const outputPath = path.join(OUTPUT_DIR, `${page.name.toLowerCase().replace(/\s+/g, '-')}.json`);
        
        const command = `npx lighthouse "${page.url}" ` +
            `--output=json ` +
            `--output-path="${outputPath}" ` +
            `--form-factor=mobile ` +
            `--throttling-method=simulate ` +
            `--throttling.cpuSlowdownMultiplier=4 ` +
            `--throttling.rttMs=150 ` +
            `--throttling.throughputKbps=1638.4 ` +
            `--emulated-user-agent="Mozilla/5.0 (Linux; Android 11; moto g power (2022)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36" ` +
            `--chrome-flags="--headless --no-sandbox --disable-dev-shm-usage"`;
        
        console.log('   Running Lighthouse...');
        execSync(command, { stdio: 'pipe' });
        
        // Read and parse results
        const reportData = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
        
        return {
            name: page.name,
            url: page.url,
            performance: Math.round(reportData.categories.performance.score * 100),
            lcp: reportData.audits['largest-contentful-paint'].numericValue,
            fid: reportData.audits['max-potential-fid'].numericValue,
            cls: reportData.audits['cumulative-layout-shift'].numericValue,
            reportPath: outputPath
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

function checkThresholds(result) {
    const issues = [];
    
    if (result.error) {
        return [`Failed to run test: ${result.error}`];
    }
    
    if (result.performance < THRESHOLDS.performance) {
        issues.push(`Performance score ${result.performance} < ${THRESHOLDS.performance}`);
    }
    
    if (result.lcp > THRESHOLDS.lcp) {
        issues.push(`LCP ${Math.round(result.lcp)}ms > ${THRESHOLDS.lcp}ms`);
    }
    
    if (result.fid > THRESHOLDS.fid) {
        issues.push(`FID ${Math.round(result.fid)}ms > ${THRESHOLDS.fid}ms`);
    }
    
    if (result.cls > THRESHOLDS.cls) {
        issues.push(`CLS ${result.cls.toFixed(3)} > ${THRESHOLDS.cls}`);
    }
    
    return issues;
}

function formatResults(results) {
    console.log('\n📊 LIGHTHOUSE MOBILE PERFORMANCE TEST RESULTS');
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
        
        console.log(`   Performance Score: ${result.performance}/100`);
        console.log(`   LCP: ${Math.round(result.lcp)}ms`);
        console.log(`   FID: ${Math.round(result.fid)}ms`);
        console.log(`   CLS: ${result.cls.toFixed(3)}`);
        
        const issues = checkThresholds(result);
        if (issues.length > 0) {
            console.log(`   ❌ Issues:`);
            issues.forEach(issue => console.log(`      • ${issue}`));
            allPassed = false;
        } else {
            console.log(`   ✅ All thresholds met`);
        }
        
        console.log(`   📄 Report: ${result.reportPath}`);
    });
    
    console.log('\n' + '=' .repeat(60));
    console.log(`\n🎯 SUMMARY`);
    console.log(`   Target Performance Score: > ${THRESHOLDS.performance}`);
    console.log(`   Target LCP: < ${THRESHOLDS.lcp}ms`);
    console.log(`   Target FID: < ${THRESHOLDS.fid}ms`);
    console.log(`   Target CLS: < ${THRESHOLDS.cls}`);
    
    if (allPassed) {
        console.log(`\n✅ All pages meet performance thresholds!`);
    } else {
        console.log(`\n❌ Some pages need performance improvements.`);
    }
    
    return allPassed;
}

async function main() {
    console.log('🚀 Starting Lighthouse Mobile Performance Tests...');
    console.log(`   Testing ${TEST_PAGES.length} pages`);
    console.log(`   Base URL: ${BASE_URL}`);
    
    // Check if dev server is running
    try {
        const { execSync } = require('child_process');
        execSync(`curl -s ${BASE_URL}`, { stdio: 'pipe' });
    } catch (error) {
        console.error(`\n❌ Development server not accessible at ${BASE_URL}`);
        console.error('   Please make sure the dev server is running with: npm run dev');
        process.exit(1);
    }
    
    const results = [];
    
    // Run tests sequentially to avoid overwhelming the server
    for (const page of TEST_PAGES) {
        const result = await runLighthouseTest(page);
        results.push(result);
        
        // Small delay between tests
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    // Format and display results
    const allPassed = formatResults(results);
    
    // Save summary report
    const summaryPath = path.join(OUTPUT_DIR, 'performance-summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify({
        timestamp: new Date().toISOString(),
        thresholds: THRESHOLDS,
        results: results,
        allPassed: allPassed
    }, null, 2));
    
    console.log(`\n📄 Summary report saved: ${summaryPath}`);
    
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

module.exports = { runLighthouseTest, checkThresholds, formatResults };