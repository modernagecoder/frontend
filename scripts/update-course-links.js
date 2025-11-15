#!/usr/bin/env node

/**
 * Update Course Links to Clean URLs
 * 
 * This script updates all course links in your HTML files to use clean URLs
 * instead of the full path with /content/courses/generated/
 * 
 * Before: /content/courses/generated/scratch-programming-complete-course/index.html
 * After:  /courses/scratch-programming-complete-course
 */

const fs = require('fs');
const path = require('path');

class CourseLinkUpdater {
    constructor() {
        this.projectRoot = path.resolve(__dirname, '..');
        this.pagesDir = path.join(this.projectRoot, 'src', 'pages');
        this.coursesDir = path.join(this.projectRoot, 'content', 'courses', 'generated');
        this.updatedFiles = [];
        this.errors = [];
    }

    /**
     * Main execution method
     */
    async update() {
        console.log('🔄 Updating course links to clean URLs...\n');

        try {
            // Update course listing page
            await this.updateCourseListingPage();
            
            // Update individual course pages
            await this.updateIndividualCoursePages();
            
            // Update navigation in all pages
            await this.updateNavigationLinks();
            
            // Summary
            this.printSummary();
            
        } catch (error) {
            console.error('❌ Fatal error:', error.message);
            throw error;
        }
    }

    /**
     * Update the main course listing page (course.html)
     */
    async updateCourseListingPage() {
        const coursePagePath = path.join(this.pagesDir, 'course.html');
        
        if (!fs.existsSync(coursePagePath)) {
            console.log('⚠️  Course listing page not found');
            return;
        }

        let content = fs.readFileSync(coursePagePath, 'utf8');
        let updated = false;

        // Pattern 1: /content/courses/generated/SLUG/index.html
        const pattern1 = /\/content\/courses\/generated\/([a-z0-9-]+)\/index\.html/g;
        if (pattern1.test(content)) {
            content = content.replace(pattern1, '/courses/$1');
            updated = true;
        }

        // Pattern 2: content/courses/generated/SLUG/index.html (without leading slash)
        const pattern2 = /content\/courses\/generated\/([a-z0-9-]+)\/index\.html/g;
        if (pattern2.test(content)) {
            content = content.replace(pattern2, '/courses/$1');
            updated = true;
        }

        if (updated) {
            fs.writeFileSync(coursePagePath, content, 'utf8');
            this.updatedFiles.push('src/pages/course.html');
            console.log('✅ Updated course listing page');
        } else {
            console.log('ℹ️  Course listing page already uses clean URLs');
        }
    }

    /**
     * Update individual course pages
     */
    async updateIndividualCoursePages() {
        if (!fs.existsSync(this.coursesDir)) {
            console.log('⚠️  Courses directory not found');
            return;
        }

        const courseDirs = fs.readdirSync(this.coursesDir)
            .filter(item => {
                const itemPath = path.join(this.coursesDir, item);
                return fs.statSync(itemPath).isDirectory();
            });

        console.log(`\n📚 Updating ${courseDirs.length} course pages...`);

        for (const courseDir of courseDirs) {
            const indexPath = path.join(this.coursesDir, courseDir, 'index.html');
            
            if (!fs.existsSync(indexPath)) {
                continue;
            }

            try {
                let content = fs.readFileSync(indexPath, 'utf8');
                let updated = false;

                // Update internal course links
                const pattern1 = /\/content\/courses\/generated\/([a-z0-9-]+)\/index\.html/g;
                if (pattern1.test(content)) {
                    content = content.replace(pattern1, '/courses/$1');
                    updated = true;
                }

                const pattern2 = /content\/courses\/generated\/([a-z0-9-]+)\/index\.html/g;
                if (pattern2.test(content)) {
                    content = content.replace(pattern2, '/courses/$1');
                    updated = true;
                }

                // Update canonical URL
                const canonicalPattern = /<link rel="canonical" href="https:\/\/learn\.modernagecoders\.com\/content\/courses\/generated\/([a-z0-9-]+)\/index\.html">/g;
                if (canonicalPattern.test(content)) {
                    content = content.replace(canonicalPattern, '<link rel="canonical" href="https://learn.modernagecoders.com/courses/$1">');
                    updated = true;
                }

                // Update Open Graph URL
                const ogUrlPattern = /<meta property="og:url" content="https:\/\/learn\.modernagecoders\.com\/content\/courses\/generated\/([a-z0-9-]+)\/index\.html">/g;
                if (ogUrlPattern.test(content)) {
                    content = content.replace(ogUrlPattern, '<meta property="og:url" content="https://learn.modernagecoders.com/courses/$1">');
                    updated = true;
                }

                // Update Twitter URL
                const twitterUrlPattern = /<meta name="twitter:url" content="https:\/\/learn\.modernagecoders\.com\/content\/courses\/generated\/([a-z0-9-]+)\/index\.html">/g;
                if (twitterUrlPattern.test(content)) {
                    content = content.replace(twitterUrlPattern, '<meta name="twitter:url" content="https://learn.modernagecoders.com/courses/$1">');
                    updated = true;
                }

                if (updated) {
                    fs.writeFileSync(indexPath, content, 'utf8');
                    this.updatedFiles.push(`content/courses/generated/${courseDir}/index.html`);
                    console.log(`  ✓ ${courseDir}`);
                }

            } catch (error) {
                this.errors.push(`Error updating ${courseDir}: ${error.message}`);
                console.error(`  ✗ ${courseDir}: ${error.message}`);
            }
        }
    }

    /**
     * Update navigation links in all pages
     */
    async updateNavigationLinks() {
        console.log('\n🔗 Updating navigation links...');

        const pagesToUpdate = [
            'src/pages/index.html',
            'src/pages/about.html',
            'src/pages/pricing.html',
            'src/pages/contact.html',
            'src/pages/faq.html',
            'src/pages/terms.html',
            'src/pages/privacy.html',
            'src/pages/login.html'
        ];

        for (const pagePath of pagesToUpdate) {
            const fullPath = path.join(this.projectRoot, pagePath);
            
            if (!fs.existsSync(fullPath)) {
                continue;
            }

            try {
                let content = fs.readFileSync(fullPath, 'utf8');
                let updated = false;

                // Update course links
                const pattern = /\/content\/courses\/generated\/([a-z0-9-]+)\/index\.html/g;
                if (pattern.test(content)) {
                    content = content.replace(pattern, '/courses/$1');
                    updated = true;
                }

                if (updated) {
                    fs.writeFileSync(fullPath, content, 'utf8');
                    this.updatedFiles.push(pagePath);
                    console.log(`  ✓ ${pagePath}`);
                }

            } catch (error) {
                this.errors.push(`Error updating ${pagePath}: ${error.message}`);
                console.error(`  ✗ ${pagePath}: ${error.message}`);
            }
        }
    }

    /**
     * Print summary of changes
     */
    printSummary() {
        console.log('\n' + '='.repeat(60));
        console.log('📊 SUMMARY');
        console.log('='.repeat(60));
        console.log(`✅ Files updated: ${this.updatedFiles.length}`);
        console.log(`❌ Errors: ${this.errors.length}`);
        
        if (this.errors.length > 0) {
            console.log('\n⚠️  Errors encountered:');
            this.errors.forEach(error => console.log(`  - ${error}`));
        }
        
        console.log('\n✨ Clean URLs are now active!');
        console.log('\n📝 Next steps:');
        console.log('  1. Test locally: npm run dev');
        console.log('  2. Visit: http://localhost:8080/courses');
        console.log('  3. Click on any course - URL should be /courses/COURSE-NAME');
        console.log('  4. Deploy to production: git push');
        console.log('\n');
    }
}

// Run the updater
const updater = new CourseLinkUpdater();
updater.update().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
