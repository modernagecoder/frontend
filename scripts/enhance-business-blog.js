const fs = require('fs');
const path = require('path');

const blogPath = path.join(__dirname, '../content/blog/data/business-needs-website-mobile-app-2025.json');
const blog = JSON.parse(fs.readFileSync(blogPath, 'utf8'));

// Enhanced content sections
const enhancedSections = [
  {
    "type": "toc"
  },
  {
    "type": "paragraph",
    "text": "In 2025, asking whether your business needs a website is like asking whether it needs a phone number. The answer is obvious—but the reasons go far deeper than just 'being online.' The real question isn't <em>if</em> you should invest in digital presence, but <em>how much</em> you're losing by not having one already."
  },
  {
    "type": "paragraph",
    "text": "A website and mobile app aren't just digital brochures. They're 24/7 salespeople, customer service representatives, and brand ambassadors working tirelessly while you sleep. They're how customers find you, evaluate you, and decide whether to trust you with their hard-earned money. In fact, <strong>88% of consumers who search for a local business on their smartphone visit or call within 24 hours</strong>—but only if they can find you."
  },
