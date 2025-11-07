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
    'python.*college': 'python-college.png',
    'python.*teens': 'python-teens.png',
    'python.*kids': 'python-kids.png',
    
    // Full-stack courses
    'full-stack.*college': 'full-stack-development-college.jpg',
    'full-stack.*teens': 'web-dev-teens.png',
    
    // React courses
    'react.*college': 'react-college.jpg',
    'react.*teens': 'react-teens.png',
    
    // MERN stack
    'mern.*college': 'mern-stack-college.jpg',
    
    // Java courses
    'java.*college': 'java-college.png',
    'java.*teens': 'java-teens.png',
    
    // C++ courses
    'cpp.*college': 'cpp-college.png',
    'cpp.*teens': 'cpp-teens.png',
    
    // AI/ML courses
    'ai-ml.*college': 'ai-ml-college.jpg',
    'ai-ml.*teens': 'ai-ml-teens.png',
    'artificial-intelligence.*college': 'artificial-intelligence.png',
    'ai-tools.*college': 'ai-tools-college.jpg',
    'ai-tools.*kids': 'ai-tools-kids.png',
    
    // Data Science
    'data-science.*college': 'data-science.png',
    'data-analysis.*college': 'data-analysis-college.jpg',
    
    // App Development
    'app-development.*college': 'app-dev-college.png',
    'app-development.*teens': 'app-dev-teens.png',
    'app-development.*kids': 'app-dev-kids.png',
    'block-coding': 'blockly.png',
    
    // Game Development
    'game-development.*college': 'game-dev-college.png',
    'game-development.*teens': 'game-dev-teens.png',
    'game-development.*kids': 'game-dev-kids.png',
    
    // Database
    'mysql.*college': 'database-college.jpg',
    'mysql.*teens': 'my-sql.png',
    
    // Data Structures
    'data-structures.*college': 'dsa-college.jpg',
    'competitive-programming.*college': 'placement-preparation.png',
    
    // Web Development
    'backend.*teens': 'backend-teens.png',
    'frontend.*teens': 'frontend-teens.png',
    
    // Kids courses
    'scratch': 'scratch-kids.png',
    'kids-coding': 'kids-coding.png',
    'kids-ai-web': 'html-css-kids.png',
    'problem-solving.*kids': 'problem-solving-kids.png',
    'problem-solving.*teens': 'problem-solving-teens.png',
    'microsoft-office.*kids': 'microsoft-office-kids.png',
    'canva': 'canva-kids.png',
    'creative-coding': 'creative-coding-kids.png',
    'creative-media.*teens': 'designing-editing-teens.png',
    
    // Mathematics courses
    'elementary-mathematics': 'elementary-maths.png',
    'middle-school-mathematics': 'middle-school-maths.png',
    'high-school-mathematics': 'high-school-maths.png',
    'college-mathematics': 'college-level-maths.png',
    'olympiad.*mathematics': 'olympiad-competition-maths.png',
    'data-analytics-mathematics': 'data-analytics-maths.png',
    'business-finance-mathematics': 'business-finance-maths.png',
    
    // Trading
    'algorithmic-trading': 'algo-trading.png',
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
