/**
 * sitemap-categories.js — the single JS home for "which bucket does this URL belong to".
 *
 * Two consumers, two different groupings, ONE rule set:
 *   - generate-sitemap-html.js  uses category() -> 9 sections, for humans browsing /sitemap
 *   - generate-sitemap-index.js uses cluster()  -> 7 child sitemaps, for GSC diagnosis
 *
 * They are deliberately different shapes: a person browsing wants "Maths tutoring", while
 * GSC is only useful if the buckets match how the site is actually built and grown.
 * cluster() is defined in terms of category(), so the matching rules exist exactly once.
 *
 * NOTE: sitemap.xsl duplicates the category() rules in XSLT because a stylesheet cannot
 * require() JavaScript. If you change the rules here, change them there too — that pair is
 * the only copy that has to be kept in sync by hand.
 */

// first match wins
function category(loc) {
  if (loc.includes('/courses')) return 'courses';
  if (loc.includes('/blog')) return 'blog';
  if (loc.includes('best-coding-class-in-')) return 'city';
  if (loc.includes('coding-classes-in-')) return 'area';
  if (loc.includes('coding-classes-near-')) return 'near';
  if (/java|python|c-plus-plus|javascript|machine-learning|-ai-|ai-ml|artificial-intelligence/.test(loc))
    return 'lang';
  if (loc.includes('math')) return 'math';
  if (loc.includes('resource')) return 'resources';
  return 'other';
}

// 9 human sections -> 7 crawl clusters
const CATEGORY_TO_CLUSTER = {
  courses: 'courses',
  blog: 'blog',
  city: 'cities',
  near: 'cities', // localities are part of the city cluster
  area: 'international', // states, countries and the Gulf hubs
  lang: 'topics',
  math: 'topics',
  resources: 'resources',
  other: 'core', // home, trust pages, hubs
};

function cluster(loc) {
  return CATEGORY_TO_CLUSTER[category(loc)] || 'core';
}

const CLUSTERS = [
  { id: 'core', file: 'sitemap-core.xml', note: 'Home, trust and hub pages' },
  { id: 'courses', file: 'sitemap-courses.xml', note: 'Course catalogue and course pages' },
  { id: 'blog', file: 'sitemap-blog.xml', note: 'Blog posts and articles' },
  { id: 'cities', file: 'sitemap-cities.xml', note: 'City and locality landing pages' },
  { id: 'topics', file: 'sitemap-topics.xml', note: 'Language, AI/ML and maths topic pages' },
  { id: 'international', file: 'sitemap-international.xml', note: 'States, countries and Gulf hubs' },
  // resources already have their own generated sitemap; the index just points at it
  { id: 'resources', file: 'sitemap-resources.xml', note: 'Free resources and guides', external: true },
];

module.exports = { category, cluster, CLUSTERS };
