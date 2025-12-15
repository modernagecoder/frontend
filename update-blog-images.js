const fs = require('fs');
const path = require('path');

// Image mapping from blogsimagslinking.md
const imageMapping = {
  "why-coding-is-new-literacy-kids-2025": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_1_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_1_article.png"
  },
  "best-coding-languages-kids-10-18": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_2_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_2_article.png"
  },
  "coding-improves-mathematical-thinking": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_3_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_3_article.png"
  },
  "scratch-vs-python-young-learners": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_4_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_4_article.png"
  },
  "top-coding-games-platforms-kids": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_5_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_5_article.png"
  },
  "robotics-coding-stem-kits-logical-thinking": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_6_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_6_article.png"
  },
  "parents-guide-coding-education-home": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_7_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_7_article.png"
  },
  "common-myths-coding-school-students": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_8_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_8_article.png"
  },
  "best-programming-languages-college-2025": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_9_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_9_article.png"
  },
  "college-students-build-real-world-projects": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_10_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_10_article.png"
  },
  "ai-automation-transforming-small-medium-businesses": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_11_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_11_article.png"
  },
  "ai-engineer-full-stack": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_12_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_12_article.png"
  },
  "app-idea-app-store": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_13_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_13_article.png"
  },
  "best-free-paid-coding-courses-students": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_14_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_14_article.png"
  },
  "blockly-for-kids": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_15_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_15_article.png"
  },
  "business-needs-website-mobile-app-2025": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_16_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_16_article.png"
  },
  "career-transition-non-tech-to-tech": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_17_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_17_article.png"
  },
  "cbse-icse": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_18_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_18_article.png"
  },
  "cloud-computing-explained-business-owners": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_19_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_19_article.png"
  },
  "coding-education-changing-future-india": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_20_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_20_article.png"
  },
  "coding-for-kids-guide": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_21_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_21_article.png"
  },
  "coding-mathematics-engineering-science": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_22_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_22_article.png"
  },
  "coding-new-english": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_23_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_23_article.png"
  },
  "competitive-coding-vs-development-skills": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_24_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_24_article.png"
  },
  "custom-software-vs-ready-made-software": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_25_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_25_article.png"
  },
  "data-analytics-math-business-decisions": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_26_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_26_article.png"
  },
  "data-science-ai-math-skills-professionals": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_27_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_27_article.png"
  },
  "early-exposure-coding-competitive-advantage": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_28_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_28_article.png"
  },
  "javascript-basics": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_29_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_29_article.png"
  },
  "mincecraft-vs-robolox": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_30_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_30_article.png"
  },
  "mobile-apps-increase-customer-engagement": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_31_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_31_article.png"
  },
  "outsourcing-vs-inhouse-software-development": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_32_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_32_article.png"
  },
  "professionals-upskill-coding-without-quitting": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_33_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_33_article.png"
  },
  "project-based-learning-coding": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_34_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_34_article.png"
  },
  "python-for-beginners": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_35_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_35_article.png"
  },
  "role-mathematics-programming-problem-solving": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_36_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_36_article.png"
  },
  "safe-ai-tools": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_37_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_37_article.png"
  },
  "schools-parents-prepare-children-tech-careers": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_38_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_38_article.png"
  },
  "top-10-java-programs-college-students": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_39_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_39_article.png"
  },
  "top-10-java-programs-school-students": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_40_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_40_article.png"
  },
  "top-emerging-tech-skills-2025": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_41_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_41_article.png"
  },
  "what-is-ai-complete-beginners-guide": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_42_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_42_article.png"
  },
  "who-are-modern-age-coders": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_43_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_43_article.png"
  },
  "why-every-teen-should-learn-coding": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_44_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_44_article.png"
  },
  "why-python-most-powerful-skill-professionals": {
    hero: "https://ik.imagekit.io/ysmxsdgmw4/heroimages/item_45_hero.png",
    article: "https://ik.imagekit.io/ysmxsdgmw4/articleimages/item_45_article.png"
  }
};

const blogDataDir = path.join(__dirname, 'content', 'blog', 'data');

// Get all JSON files
const files = fs.readdirSync(blogDataDir).filter(file => file.endsWith('.json'));

let updatedCount = 0;
let notFoundCount = 0;

console.log('Starting blog image update...\n');

files.forEach(file => {
  const filePath = path.join(blogDataDir, file);
  const slug = file.replace('.json', '');
  
  // Check if we have mapping for this slug
  if (imageMapping[slug]) {
    try {
      // Read the JSON file
      const content = fs.readFileSync(filePath, 'utf8');
      const blogData = JSON.parse(content);
      
      // Update hero image
      if (blogData.hero && blogData.hero.featuredImage) {
        const oldHeroUrl = blogData.hero.featuredImage.url;
        blogData.hero.featuredImage.url = imageMapping[slug].hero;
        console.log(`✓ ${slug}`);
        console.log(`  Hero: ${oldHeroUrl}`);
        console.log(`     -> ${imageMapping[slug].hero}`);
      }
      
      // Update article image if it exists in content sections
      if (blogData.content && blogData.content.sections) {
        blogData.content.sections.forEach(section => {
          if (section.type === 'image' && section.url) {
            const oldArticleUrl = section.url;
            section.url = imageMapping[slug].article;
            console.log(`  Article: ${oldArticleUrl}`);
            console.log(`        -> ${imageMapping[slug].article}`);
          }
        });
      }
      
      // Write back to file with proper formatting
      fs.writeFileSync(filePath, JSON.stringify(blogData, null, 2), 'utf8');
      updatedCount++;
      console.log('');
      
    } catch (error) {
      console.error(`✗ Error updating ${slug}: ${error.message}`);
    }
  } else {
    notFoundCount++;
    console.log(`⚠ No mapping found for: ${slug}`);
  }
});

console.log('\n' + '='.repeat(50));
console.log(`Update complete!`);
console.log(`✓ Updated: ${updatedCount} files`);
console.log(`⚠ No mapping: ${notFoundCount} files`);
console.log('='.repeat(50));
