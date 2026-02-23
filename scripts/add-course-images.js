#!/usr/bin/env node

/**
 * Script to automatically add image_path to course JSON files
 * Based on course naming patterns
 */

const fs = require('fs');
const path = require('path');

// Mapping of course patterns to image files
const imageMapping = {
    // Python courses
    'python.*college': 'python-college.webp',
    'python.*teens': 'python-teens.webp',
    'python.*kids': 'python-kids.webp',

    // Full-stack courses
    'full-stack.*college': 'full-stack-development-college.webp',
    'full-stack.*teens': 'web-dev-teens.webp',

    // React courses
    'react.*college': 'react-college.webp',
    'react.*teens': 'react-teens.webp',

    // MERN stack
    'mern.*college': 'mern-stack-college.webp',

    // Java courses
    'java.*college': 'java-college.webp',
    'java.*teens': 'java-teens.webp',

    // C++ courses
    'cpp.*college': 'cpp-college.webp',
    'cpp.*teens': 'cpp-teens.webp',

    // AI/ML courses
    'ai-ml.*college': 'ai-ml-college.webp',
    'ai-ml.*teens': 'ai-ml-teens.webp',
    'artificial-intelligence.*college': 'artificial-intelligence.webp',
    'ai-tools.*college': 'ai-tools-college.webp',
    'ai-tools.*kids': 'ai-tools-kids.webp',

    // Data Science
    'data-science.*college': 'data-science.webp',
    'data-analysis.*college': 'data-analysis-college.webp',

    // App Development
    'app-development.*college': 'app-dev-college.webp',
    'app-development.*teens': 'app-dev-teens.webp',
    'app-development.*kids': 'app-dev-kids.webp',
    'block-coding': 'blockly.webp',

    // Game Development
    'game-development.*college': 'game-dev-college.webp',
    'game-development.*teens': 'game-dev-teens.webp',
    'game-development.*kids': 'game-dev-kids.webp',

    // Database
    'mysql.*college': 'database-college.webp',
    'mysql.*teens': 'my-sql.webp',

    // Data Structures
    'data-structures.*college': 'dsa-college.webp',
    'competitive-programming.*college': 'placement-preparation.webp',

    // Web Development
    'backend.*teens': 'backend-teens.webp',
    'frontend.*teens': 'frontend-teens.webp',

    // Kids courses
    'scratch': 'scratch-kids.webp',
    'kids-coding': 'kids-coding.webp',
    'kids-ai-web': 'html-css-kids.webp',
    'problem-solving.*kids': 'problem-solving-kids.webp',
    'problem-solving.*teens': 'problem-solving-teens.webp',
    'microsoft-office.*kids': 'microsoft-office-kids.webp',
    'canva': 'canva-kids.webp',
    'creative-coding': 'creative-coding-kids.webp',
    'creative-media.*teens': 'designing-editing-teens.webp',

    // Mathematics courses
    'elementary-mathematics': 'elementary-maths.webp',
    'middle-school-mathematics': 'middle-school-maths.webp',
    'high-school-mathematics': 'high-school-maths.webp',
    'college-mathematics': 'college-level-maths.webp',
    'olympiad.*mathematics': 'olympiad-competition-maths.webp',
    'data-analytics-mathematics': 'data-analytics-maths.webp',
    'business-finance-mathematics': 'business-finance-maths.webp',

    // Trading
    'algorithmic-trading': 'algo-trading.webp',
};

class CourseImageAdder {
    constructor() {
        this.projectRoot = path.resolve(__dirname, '..');
        this.dataDir = path.join(this.projectRoot, 'content', 'courses', 'data');
        this.publicImagesDir = path.join(this.projectRoot, 'public', 'images');
        this.courseImagesDir = path.join(this.projectRoot, 'content', 'courses', 'images');
    }

    /**
     * Find matching image for a course slug
     */
    findImageForCourse(slug) {
        for (const [pattern, imageName] of Object.entries(imageMapping)) {
            const regex = new RegExp(pattern, 'i');
            if (regex.test(slug)) {
                return imageName;
            }
        }
        return null;
    }

    /**
     * Copy image from public to course images directory
     */
    copyImage(imageName) {
        const sourcePath = path.join(this.publicImagesDir, imageName);
        const destPath = path.join(this.courseImagesDir, imageName);

        if (!fs.existsSync(sourcePath)) {
            console.warn(`  ⚠️  Source image not found: ${imageName}`);
            return false;
        }

        try {
            // Create directory if it doesn't exist
            if (!fs.existsSync(this.courseImagesDir)) {
                fs.mkdirSync(this.courseImagesDir, { recursive: true });
            }

            fs.copyFileSync(sourcePath, destPath);
            return true;
        } catch (error) {
            console.error(`  ❌ Failed to copy ${imageName}:`, error.message);
            return false;
        }
    }

    /**
     * Update course JSON file with image_path
     */
    updateCourseJson(filePath, imageName) {
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            const courseData = JSON.parse(content);

            // Check if image_path already exists
            if (courseData.meta && courseData.meta.image_path) {
                console.log(`  ℹ️  Image path already exists: ${courseData.meta.image_path}`);
                return false;
            }

            // Add image_path to meta
            if (!courseData.meta) {
                courseData.meta = {};
            }
            courseData.meta.image_path = imageName;

            // Write back to file with proper formatting
            fs.writeFileSync(filePath, JSON.stringify(courseData, null, 2), 'utf8');
            return true;
        } catch (error) {
            console.error(`  ❌ Failed to update JSON:`, error.message);
            return false;
        }
    }

    /**
     * Process all course files
     */
    async processAll() {
        console.log('🚀 Adding images to course JSON files...\n');

        const courseFiles = fs.readdirSync(this.dataDir).filter(f => f.endsWith('.json'));

        let updatedCount = 0;
        let skippedCount = 0;
        let errorCount = 0;

        for (const file of courseFiles) {
            const filePath = path.join(this.dataDir, file);
            const courseData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            const slug = courseData.meta?.slug || file.replace('.json', '');

            console.log(`📄 Processing: ${slug}`);

            // Find matching image
            const imageName = this.findImageForCourse(slug);

            if (!imageName) {
                console.log(`  ⚠️  No matching image pattern found`);
                skippedCount++;
                continue;
            }

            console.log(`  🖼️  Matched image: ${imageName}`);

            // Copy image
            if (this.copyImage(imageName)) {
                console.log(`  ✓ Copied image to course images folder`);
            }

            // Update JSON
            if (this.updateCourseJson(filePath, imageName)) {
                console.log(`  ✓ Updated JSON with image_path`);
                updatedCount++;
            } else {
                skippedCount++;
            }

            console.log('');
        }

        console.log('\n📊 Summary:');
        console.log(`  ✅ Updated: ${updatedCount} courses`);
        console.log(`  ⏭️  Skipped: ${skippedCount} courses`);
        console.log(`  ❌ Errors: ${errorCount} courses`);
        console.log('\n💡 Next step: Run "node scripts/generate-courses.js" to regenerate course pages');
    }
}

// Run the script
const adder = new CourseImageAdder();
adder.processAll().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
});
