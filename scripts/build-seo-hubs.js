/**
 * Build SEO hub pages and inject "Related pages" sections into templated pages.
 *
 * Generates:
 *  - src/pages/coding-classes-in-india.html  (city hub: all best-coding-class-in-* + coding-classes-near-*)
 *  - src/pages/learn-coding-by-class.html    (class hub: all coding-for-class-N, python-for-class-N-cbse, computer-science-class-N, etc.)
 *  - src/pages/learn-coding-by-age.html      (age hub: coding-for-N-year-olds, python-for-N-year-olds)
 *
 * Updates:
 *  - Adds a "Related pages" section (breadcrumb to hub + 4 sibling links) to every templated page
 *    immediately before the footer marker <!-- BEGIN_INLINED_FOOTER -->.
 *  - Idempotent: re-running replaces the existing <!-- BEGIN_RELATED_PAGES --> block.
 *
 * Run:   node scripts/build-seo-hubs.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'src', 'pages');
const SITE = 'https://learn.modernagecoders.com';

const REL_START = '<!-- BEGIN_RELATED_PAGES -->';
const REL_END = '<!-- END_RELATED_PAGES -->';

// ---------------------------------------------------------------------------
// Page inventory (slug => display label). All canonical URLs are /<slug>, no trailing slash.
// ---------------------------------------------------------------------------

const CITIES_MAIN = [
  ['agra', 'Agra'], ['ahmedabad', 'Ahmedabad'], ['amritsar', 'Amritsar'], ['aurangabad', 'Aurangabad'],
  ['bengaluru', 'Bengaluru'], ['bhopal', 'Bhopal'], ['bhubaneswar', 'Bhubaneswar'], ['chandigarh', 'Chandigarh'],
  ['chennai', 'Chennai'], ['coimbatore', 'Coimbatore'], ['dehradun', 'Dehradun'], ['delhi', 'Delhi'],
  ['faridabad', 'Faridabad'], ['gangtok', 'Gangtok'], ['goa', 'Goa'], ['guwahati', 'Guwahati'],
  ['hubli', 'Hubli'], ['hyderabad', 'Hyderabad'], ['imphal', 'Imphal'], ['indore', 'Indore'],
  ['jabalpur', 'Jabalpur'], ['jaipur', 'Jaipur'], ['jodhpur', 'Jodhpur'], ['kanpur', 'Kanpur'],
  ['kochi', 'Kochi'], ['kolkata', 'Kolkata'], ['kozhikode', 'Kozhikode'], ['lucknow', 'Lucknow'],
  ['madurai', 'Madurai'], ['mangalore', 'Mangalore'], ['meerut', 'Meerut'], ['mumbai', 'Mumbai'],
  ['mysore', 'Mysore'], ['nagpur', 'Nagpur'], ['nashik', 'Nashik'], ['patna', 'Patna'],
  ['pune', 'Pune'], ['raipur', 'Raipur'], ['rajkot', 'Rajkot'], ['ranchi', 'Ranchi'],
  ['shimla', 'Shimla'], ['surat', 'Surat'], ['thiruvananthapuram', 'Thiruvananthapuram'], ['trichy', 'Trichy'],
  ['udaipur', 'Udaipur'], ['vadodara', 'Vadodara'], ['varanasi', 'Varanasi'], ['visakhapatnam', 'Visakhapatnam'],
];

const CITIES_KOLKATA_HOWRAH = [
  ['ajc-bose-road-kolkata', 'AJC Bose Road, Kolkata'], ['alipore-kolkata', 'Alipore, Kolkata'],
  ['andul-howrah', 'Andul, Howrah'], ['baguiati-kolkata', 'Baguiati, Kolkata'],
  ['bally-howrah', 'Bally, Howrah'], ['ballygunge-kolkata', 'Ballygunge, Kolkata'],
  ['baranagar-kolkata', 'Baranagar, Kolkata'], ['bhowanipore-kolkata', 'Bhowanipore, Kolkata'],
  ['camac-street-kolkata', 'Camac Street, Kolkata'], ['deshapriya-park-kolkata', 'Deshapriya Park, Kolkata'],
  ['dhakuria-kolkata', 'Dhakuria, Kolkata'], ['domjur-howrah', 'Domjur, Howrah'],
  ['dum-dum-kolkata', 'Dum Dum, Kolkata'], ['elgin-road-kolkata', 'Elgin Road, Kolkata'],
  ['gariahat-kolkata', 'Gariahat, Kolkata'], ['golpark-kolkata', 'Golpark, Kolkata'],
  ['hazra-kolkata', 'Hazra, Kolkata'], ['howrah-city-howrah', 'Howrah City, Howrah'],
  ['jadavpur-kolkata', 'Jadavpur, Kolkata'], ['jodhpur-park-kolkata', 'Jodhpur Park, Kolkata'],
  ['kadamtala-howrah', 'Kadamtala, Howrah'], ['kalighat-kolkata', 'Kalighat, Kolkata'],
  ['kasba-kolkata', 'Kasba, Kolkata'], ['kestopur-kolkata', 'Kestopur, Kolkata'],
  ['lake-gardens-kolkata', 'Lake Gardens, Kolkata'], ['lake-town-kolkata', 'Lake Town, Kolkata'],
  ['lansdowne-kolkata', 'Lansdowne, Kolkata'], ['liluah-howrah', 'Liluah, Howrah'],
  ['loudon-street-kolkata', 'Loudon Street, Kolkata'], ['mandirtala-howrah', 'Mandirtala, Howrah'],
  ['nager-bazar-kolkata', 'Nager Bazar, Kolkata'], ['new-alipore-kolkata', 'New Alipore, Kolkata'],
  ['new-town-kolkata', 'New Town, Kolkata'], ['park-circus-kolkata', 'Park Circus, Kolkata'],
  ['park-street-kolkata', 'Park Street, Kolkata'], ['ramrajatala-howrah', 'Ramrajatala, Howrah'],
  ['rashbehari-kolkata', 'Rashbehari, Kolkata'], ['salt-lake-kolkata', 'Salt Lake, Kolkata'],
  ['santragachi-howrah', 'Santragachi, Howrah'], ['shakespeare-sarani-kolkata', 'Shakespeare Sarani, Kolkata'],
  ['shibpur-howrah', 'Shibpur, Howrah'], ['shyambazar-kolkata', 'Shyambazar, Kolkata'],
  ['southern-avenue-kolkata', 'Southern Avenue, Kolkata'], ['sreebhumi-kolkata', 'Sreebhumi, Kolkata'],
  ['tollygunge-kolkata', 'Tollygunge, Kolkata'], ['uluberia-howrah', 'Uluberia, Howrah'],
  ['vip-road-kolkata', 'VIP Road, Kolkata'],
];

const CLASSES_CORE = [
  ['coding-for-class-4', 'Coding for Class 4'], ['coding-for-class-5', 'Coding for Class 5'],
  ['coding-for-class-6', 'Coding for Class 6'], ['coding-for-class-7', 'Coding for Class 7'],
  ['coding-for-class-8', 'Coding for Class 8'], ['coding-for-class-9', 'Coding for Class 9'],
  ['coding-for-class-10', 'Coding for Class 10'], ['coding-for-class-11', 'Coding for Class 11'],
  ['coding-for-class-12', 'Coding for Class 12'],
];

const CLASSES_PYTHON = [
  ['python-for-class-6', 'Python for Class 6'], ['python-for-class-7', 'Python for Class 7'],
  ['python-for-class-8', 'Python for Class 8'], ['python-for-class-9', 'Python for Class 9'],
  ['python-for-class-10', 'Python for Class 10'],
  ['python-for-class-11-cbse', 'Python for Class 11 (CBSE)'],
  ['python-for-class-12-cbse', 'Python for Class 12 (CBSE)'],
];

const CLASSES_BOARDS = [
  ['computer-science-class-11-cbse', 'Computer Science Class 11 (CBSE)'],
  ['computer-science-class-12-cbse', 'Computer Science Class 12 (CBSE)'],
  ['computer-science-class-11-icse', 'Computer Science Class 11 (ICSE)'],
  ['computer-science-class-12-icse', 'Computer Science Class 12 (ICSE)'],
  ['computer-applications-icse-class-10', 'Computer Applications Class 10 (ICSE)'],
  ['coding-for-cbse-students', 'Coding for CBSE Students'],
  ['coding-for-icse-students', 'Coding for ICSE Students'],
  ['coding-for-igcse-students', 'Coding for IGCSE Students'],
];

const AGES_CODING = [
  ['coding-for-8-year-olds', 'Coding for 8-year-olds'],
  ['coding-for-9-year-olds', 'Coding for 9-year-olds'],
  ['coding-for-10-year-olds', 'Coding for 10-year-olds'],
  ['coding-for-11-year-olds', 'Coding for 11-year-olds'],
  ['coding-for-12-year-olds', 'Coding for 12-year-olds'],
  ['coding-for-13-year-olds', 'Coding for 13-year-olds'],
  ['coding-for-14-year-olds', 'Coding for 14-year-olds'],
  ['coding-for-15-year-olds', 'Coding for 15-year-olds'],
  ['coding-for-16-year-olds', 'Coding for 16-year-olds'],
  ['coding-for-17-year-olds', 'Coding for 17-year-olds'],
];

const AGES_PYTHON = [
  ['python-for-9-year-olds', 'Python for 9-year-olds'],
  ['python-for-10-year-olds', 'Python for 10-year-olds'],
  ['python-for-11-year-olds', 'Python for 11-year-olds'],
  ['python-for-12-year-olds', 'Python for 12-year-olds'],
  ['python-for-13-year-olds', 'Python for 13-year-olds'],
  ['python-for-14-year-olds', 'Python for 14-year-olds'],
  ['python-for-15-year-olds', 'Python for 15-year-olds'],
  ['python-for-16-year-olds', 'Python for 16-year-olds'],
  ['python-for-17-year-olds', 'Python for 17-year-olds'],
  ['python-for-beginners-kids', 'Python for Beginner Kids'],
  ['python-projects-for-kids', 'Python Projects for Kids'],
];

// ---------------------------------------------------------------------------
// Shared styles and components
// ---------------------------------------------------------------------------

const SHARED_CSS = `
*{box-sizing:border-box}
body{margin:0;background:#09090f;color:#e2e8f0;font-family:'Inter',system-ui,-apple-system,sans-serif;line-height:1.6}
.h-wrap{max-width:1180px;margin:0 auto;padding:0 20px}
.h-hero{padding:100px 20px 60px;text-align:center}
.h-tag{display:inline-block;background:rgba(168,85,247,.12);border:1px solid rgba(168,85,247,.35);color:#c4b5fd;padding:8px 18px;border-radius:40px;font-size:12px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;margin-bottom:20px}
.h-hero h1{font-size:clamp(2rem,5vw,3.4rem);font-weight:900;line-height:1.12;color:#fff;margin:0 0 18px;letter-spacing:-.5px}
.h-hero h1 .hl{background:linear-gradient(135deg,#a855f7,#06b6d4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.h-hero p.sub{color:#94a3b8;font-size:1.08rem;max-width:780px;margin:0 auto 28px}
.h-crumb{display:flex;justify-content:center;gap:8px;font-size:13px;color:#64748b;margin-bottom:30px;flex-wrap:wrap}
.h-crumb a{color:#a5b4fc;text-decoration:none}
.h-crumb a:hover{text-decoration:underline}
.h-crumb span{color:#475569}
.h-group{padding:44px 20px}
.h-group h2{font-size:clamp(1.3rem,2.8vw,1.8rem);font-weight:800;color:#fff;margin:0 0 8px}
.h-group .lead{color:#94a3b8;max-width:760px;margin-bottom:26px}
.h-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px;list-style:none;padding:0;margin:0}
.h-grid li{margin:0}
.h-grid a{display:block;padding:14px 18px;background:rgba(255,255,255,.03);border:1px solid rgba(168,85,247,.14);border-radius:10px;color:#e2e8f0;text-decoration:none;font-weight:500;font-size:.95rem;transition:border-color .15s,transform .15s,background .15s}
.h-grid a:hover{border-color:rgba(168,85,247,.5);background:rgba(168,85,247,.08);transform:translateX(4px)}
.h-cta{text-align:center;padding:70px 20px;background:linear-gradient(135deg,rgba(168,85,247,.08),rgba(6,182,212,.05));border-radius:24px;margin:50px 0}
.h-cta h2{color:#fff;font-size:clamp(1.4rem,3vw,2rem);margin:0 0 12px}
.h-cta p{color:#94a3b8;max-width:620px;margin:0 auto 24px}
.h-btn{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,#a855f7,#7c3aed);color:#fff;padding:15px 34px;border-radius:12px;font-weight:700;text-decoration:none;box-shadow:0 8px 24px rgba(168,85,247,.35);transition:transform .2s}
.h-btn:hover{transform:translateY(-2px)}
.h-divider{height:1px;background:rgba(255,255,255,.06);margin:40px 0}
`;

function headHtml({ title, description, canonicalPath, keywords, intro, breadcrumbName }) {
  const canonicalUrl = `${SITE}${canonicalPath}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-N8BM164YJP"></script>
    <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-N8BM164YJP');gtag('config','AW-16910316353');</script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="keywords" content="${keywords}">
    <meta name="author" content="Modern Age Coders">
    <link rel="canonical" href="${canonicalUrl}">

    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
    <meta name="theme-color" content="#a855f7">

    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${SITE}/images/og-modern-age-coders.png">
    <meta property="og:site_name" content="Modern Age Coders">
    <meta property="og:locale" content="en_IN">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${SITE}/images/og-modern-age-coders.png">

    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "url": "${canonicalUrl}",
          "name": "${title.replace(/"/g, "'")}",
          "description": "${intro.replace(/"/g, "'")}",
          "isPartOf": { "@type": "WebSite", "url": "${SITE}", "name": "Modern Age Coders" }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "${SITE}" },
            { "@type": "ListItem", "position": 2, "name": "${breadcrumbName}", "item": "${canonicalUrl}" }
          ]
        }
      ]
    }
    </script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/responsive.css">
    <style>${SHARED_CSS}</style>
</head>
<body>
<div id="nav-placeholder"></div>
`;
}

function renderGroup(heading, lead, items) {
  const links = items
    .map(([slug, label]) => `    <li><a href="/${slug}">${label}</a></li>`)
    .join('\n');
  return `<section class="h-group">
  <div class="h-wrap">
    <h2>${heading}</h2>
    <p class="lead">${lead}</p>
    <ul class="h-grid">
${links}
    </ul>
  </div>
</section>`;
}

function renderHero({ tag, h1, highlight, sub, breadcrumbName }) {
  const h1Html = h1.replace(highlight, `<span class="hl">${highlight}</span>`);
  return `<section class="h-hero">
  <div class="h-wrap">
    <nav class="h-crumb" aria-label="Breadcrumb">
      <a href="/">Home</a><span>/</span><strong>${breadcrumbName}</strong>
    </nav>
    <span class="h-tag">${tag}</span>
    <h1>${h1Html}</h1>
    <p class="sub">${sub}</p>
    <a href="/book-demo" class="h-btn">Book a free demo &rarr;</a>
  </div>
</section>`;
}

function renderCta() {
  return `<section class="h-cta h-wrap">
  <h2>Don't see your city or class? We still teach you.</h2>
  <p>All our classes are live, online and 1-on-1. Every student from anywhere in India or the world gets the same expert-led program. Book a free demo and we'll match you with the right batch.</p>
  <a href="/book-demo" class="h-btn">Book a free demo &rarr;</a>
</section>`;
}

const FOOT = `<div id="footer-placeholder"></div>
<script>
  // Populate copyright year (matches existing footer pattern)
  document.addEventListener('DOMContentLoaded', function(){
    var el = document.getElementById('copyright');
    if (el) el.textContent = '© ' + new Date().getFullYear() + ' Modern Age Coders. All rights reserved.';
  });
</script>
</body>
</html>`;

// ---------------------------------------------------------------------------
// Build hub pages
// ---------------------------------------------------------------------------

function buildCityHub() {
  const intro = "Live online coding and maths classes reaching every major city in India and beyond. Kids, teens and adults learn Scratch, Python, web development, AI and DSA from expert instructors — from anywhere. Find your city below, book a free demo, and join students from 25+ countries and 100+ schools across India.";
  const head = headHtml({
    title: 'Coding Classes in India | 60+ Cities | Modern Age Coders',
    description: 'Live online coding classes for kids, teens and adults in 60+ Indian cities and neighbourhoods. Python, Scratch, Web Dev, AI and DSA. Rated 4.9/5. Book a free demo.',
    canonicalPath: '/coding-classes-in-india',
    keywords: 'coding classes in India, best coding class in India, online coding classes India, coding classes for kids India, coding classes for teens India, programming institute India',
    intro,
    breadcrumbName: 'Coding Classes in India',
  });

  const hero = renderHero({
    tag: 'National Coverage',
    h1: 'Coding Classes Across India',
    highlight: 'Across India',
    sub: intro,
    breadcrumbName: 'Coding Classes in India',
  });

  const mainGroup = renderGroup(
    'Pick your city',
    'All 47 of our dedicated city pages — each with local school references, batch timings and demo sign-up. Classes are live online, so any of these work even if you are in a neighbouring town.',
    CITIES_MAIN.map(([slug, label]) => [`best-coding-class-in-${slug}`, `Best Coding Class in ${label}`]),
  );

  const kolkataGroup = renderGroup(
    'Kolkata & Howrah neighbourhoods',
    'We have a strong in-person community in Kolkata and Howrah with neighbourhood-specific pages. Find the area closest to you.',
    CITIES_KOLKATA_HOWRAH.map(([slug, label]) => [`coding-classes-near-${slug}`, `Coding Classes near ${label}`]),
  );

  const html = head + hero + mainGroup + `<div class="h-wrap"><div class="h-divider"></div></div>` + kolkataGroup + renderCta() + FOOT;
  const out = path.join(PAGES_DIR, 'coding-classes-in-india.html');
  fs.writeFileSync(out, html, 'utf8');
  console.log(`wrote ${out} (${html.length} bytes)`);
}

function buildClassHub() {
  const intro = "Find coding classes aligned to your exact school class (Class 4 through Class 12) and board (CBSE, ICSE, IGCSE). Curriculum is mapped to NCERT and board syllabi for Computer Science and Informatics Practices, plus practical projects for portfolio-building.";
  const head = headHtml({
    title: 'Learn Coding by Class (4–12) | CBSE, ICSE, IGCSE | Modern Age Coders',
    description: 'Coding classes mapped to Class 4-12 CBSE, ICSE and IGCSE syllabi. Python, Computer Science, Computer Applications, projects and board prep. Book a free demo.',
    canonicalPath: '/learn-coding-by-class',
    keywords: 'coding for class 4, coding for class 5, coding for class 6, coding for class 7, coding for class 8, coding for class 9, coding for class 10, coding for class 11, coding for class 12, python for class 10, python for class 11 cbse, python for class 12 cbse, computer science cbse, computer science icse, computer applications icse',
    intro,
    breadcrumbName: 'Learn Coding by Class',
  });

  const hero = renderHero({
    tag: 'Class 4 to 12',
    h1: 'Coding by Class and Board',
    highlight: 'by Class and Board',
    sub: intro,
    breadcrumbName: 'Learn Coding by Class',
  });

  const core = renderGroup(
    'General coding (Class 4–12)',
    'A progressive path from block coding to full-stack projects, aligned to each school year.',
    CLASSES_CORE,
  );
  const python = renderGroup(
    'Python by class (Class 6–12)',
    'Syllabus-aware Python tracks for middle and high school, including CBSE-specific courses for Class 11 and 12.',
    CLASSES_PYTHON,
  );
  const boards = renderGroup(
    'Board-specific Computer Science tracks',
    'Covers CBSE 083, ICSE Computer Applications (Java / BlueJ), CBSE Informatics Practices and IGCSE Computer Science 0478.',
    CLASSES_BOARDS,
  );

  const html = head + hero + core + boards + python + renderCta() + FOOT;
  const out = path.join(PAGES_DIR, 'learn-coding-by-class.html');
  fs.writeFileSync(out, html, 'utf8');
  console.log(`wrote ${out} (${html.length} bytes)`);
}

function buildAgeHub() {
  const intro = "Age-appropriate coding tracks from 8 to 17. Younger students begin with Scratch and project-based exploration; older students dive straight into Python, JavaScript, web development, AI and data structures. Every track is live 1-on-1 with instructors trained in working with that age group.";
  const head = headHtml({
    title: 'Learn Coding by Age (8–17) | Kids & Teen Programming | Modern Age Coders',
    description: 'Age-specific coding classes for kids and teens from 8 to 17. Scratch, Python, AI, web development. Live 1-on-1 instruction rated 4.9/5. Book a free demo.',
    canonicalPath: '/learn-coding-by-age',
    keywords: 'coding for 8 year olds, coding for 9 year olds, coding for 10 year olds, coding for 11 year olds, coding for 12 year olds, coding for 13 year olds, coding for 14 year olds, coding for 15 year olds, coding for 16 year olds, coding for 17 year olds, python for kids by age, python for teens by age, best age to start coding',
    intro,
    breadcrumbName: 'Learn Coding by Age',
  });

  const hero = renderHero({
    tag: 'Ages 8 to 17',
    h1: 'Coding by Age and Stage',
    highlight: 'by Age and Stage',
    sub: intro,
    breadcrumbName: 'Learn Coding by Age',
  });

  const coding = renderGroup(
    'General coding by age',
    'Our recommended starting curriculum for each age — from drag-and-drop Scratch for 8 year olds to full-stack projects for 17 year olds.',
    AGES_CODING,
  );
  const python = renderGroup(
    'Python by age',
    'Once learners are comfortable with logic (typically age 9–10+), Python is the ideal next language. Pick your age to see the right entry point and project track.',
    AGES_PYTHON,
  );

  const html = head + hero + coding + python + renderCta() + FOOT;
  const out = path.join(PAGES_DIR, 'learn-coding-by-age.html');
  fs.writeFileSync(out, html, 'utf8');
  console.log(`wrote ${out} (${html.length} bytes)`);
}

// ---------------------------------------------------------------------------
// Inject "Related pages" blocks into templated pages
// ---------------------------------------------------------------------------

function pickSiblings(allSlugs, currentSlug, n = 4) {
  // Deterministic: pick n slugs that are not the current one, spaced across the list.
  const others = allSlugs.filter((s) => s !== currentSlug);
  const step = Math.max(1, Math.floor(others.length / n));
  const picks = [];
  // Start from an offset derived from current slug so each page gets different siblings.
  const offset = Math.abs(currentSlug.split('').reduce((a, c) => a + c.charCodeAt(0), 0)) % Math.max(1, others.length);
  for (let i = 0; i < n && picks.length < n; i++) {
    const idx = (offset + i * step) % others.length;
    if (!picks.includes(others[idx])) picks.push(others[idx]);
  }
  // Fill if collisions reduced length
  for (let i = 0; picks.length < n && i < others.length; i++) {
    if (!picks.includes(others[i])) picks.push(others[i]);
  }
  return picks;
}

function renderRelatedBlock({ hubSlug, hubLabel, siblings, lookup }) {
  const siblingLinks = siblings
    .map((slug) => `      <li><a href="/${slug}">${lookup[slug] || slug}</a></li>`)
    .join('\n');
  return `${REL_START}
<section aria-label="Related pages" style="background:rgba(168,85,247,.04);border-top:1px solid rgba(168,85,247,.15);border-bottom:1px solid rgba(168,85,247,.15);padding:40px 20px;margin:40px 0 0">
  <div style="max-width:1100px;margin:0 auto">
    <nav aria-label="Breadcrumb" style="font-size:13px;color:#94a3b8;margin-bottom:18px">
      <a href="/" style="color:#a5b4fc;text-decoration:none">Home</a>
      <span style="color:#475569;margin:0 6px">/</span>
      <a href="/${hubSlug}" style="color:#a5b4fc;text-decoration:none">${hubLabel}</a>
    </nav>
    <h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin:0 0 14px">Related pages</h2>
    <ul style="list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px">
${siblingLinks}
    </ul>
    <p style="margin:18px 0 0"><a href="/${hubSlug}" style="color:#a5b4fc;text-decoration:none;font-weight:600">&rarr; See all ${hubLabel.toLowerCase()}</a></p>
  </div>
</section>
${REL_END}
`;
}

function injectRelated(filePath, block) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Remove any existing block (idempotent)
  const existing = new RegExp(`\\s*${REL_START}[\\s\\S]*?${REL_END}\\s*`, 'g');
  content = content.replace(existing, '\n');

  // 2. Insert before the footer marker, placeholder, or raw <footer> tag.
  const footerMarker = '<!-- BEGIN_INLINED_FOOTER -->';
  const footerPlaceholder = '<div id="footer-placeholder"></div>';
  let inserted = false;

  if (content.includes(footerMarker)) {
    content = content.replace(footerMarker, `${block}\n${footerMarker}`);
    inserted = true;
  } else if (content.includes(footerPlaceholder)) {
    content = content.replace(footerPlaceholder, `${block}\n${footerPlaceholder}`);
    inserted = true;
  } else {
    // Fallback: insert immediately before the first <footer ...> tag.
    const footerTagRegex = /(<footer\b[^>]*>)/i;
    if (footerTagRegex.test(content)) {
      content = content.replace(footerTagRegex, `${block}\n$1`);
      inserted = true;
    }
  }

  if (!inserted) {
    console.warn(`  skip ${path.basename(filePath)} — no footer marker found`);
    return false;
  }

  fs.writeFileSync(filePath, content, 'utf8');
  return true;
}

function injectAll() {
  // Build lookup of slug => label for each group so sibling links get nice anchors
  const cityLabel = Object.fromEntries(
    CITIES_MAIN.map(([s, l]) => [`best-coding-class-in-${s}`, `Best Coding Class in ${l}`]).concat(
      CITIES_KOLKATA_HOWRAH.map(([s, l]) => [`coding-classes-near-${s}`, `Coding Classes near ${l}`]),
    ),
  );
  const classLabel = Object.fromEntries(
    [...CLASSES_CORE, ...CLASSES_PYTHON, ...CLASSES_BOARDS].map(([s, l]) => [s, l]),
  );
  const ageLabel = Object.fromEntries(
    [...AGES_CODING, ...AGES_PYTHON].map(([s, l]) => [s, l]),
  );

  const citySlugs = Object.keys(cityLabel);
  const classSlugs = Object.keys(classLabel);
  const ageSlugs = Object.keys(ageLabel);

  let count = 0;

  const process = (slugs, hubSlug, hubLabel, lookup) => {
    slugs.forEach((slug) => {
      const file = path.join(PAGES_DIR, `${slug}.html`);
      if (!fs.existsSync(file)) {
        console.warn(`  missing: ${file}`);
        return;
      }
      const siblings = pickSiblings(slugs, slug, 4);
      const block = renderRelatedBlock({ hubSlug, hubLabel, siblings, lookup });
      if (injectRelated(file, block)) count += 1;
    });
  };

  console.log('\nInjecting "Related pages" blocks...');
  // DEPRECATED: geographic wiring (cities + Kolkata/Howrah localities) is now owned by
  // scripts/build-internal-links.js, which builds a correct state->city->locality graph.
  // The old pickSiblings() linked across a flat hard-coded list (Kolkata -> Bengaluru, etc.).
  // Do NOT re-enable the line below or it will overwrite the correct related blocks.
  // process(citySlugs, 'coding-classes-in-india', 'Coding Classes in India', cityLabel);
  process(classSlugs, 'learn-coding-by-class', 'Learn Coding by Class', classLabel);
  process(ageSlugs, 'learn-coding-by-age', 'Learn Coding by Age', ageLabel);
  console.log(`\nDone. Updated ${count} templated pages.`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  console.log('Building SEO hub pages...');
  // DEPRECATED: buildCityHub() rewrote coding-classes-in-india.html from a stale 48-city
  // list and reset the inlined nav/footer to placeholders. The India hub is now maintained
  // directly and gets its related block from scripts/build-internal-links.js. Leave disabled.
  // buildCityHub();
  buildClassHub();
  buildAgeHub();
  injectAll();
  console.log('\nAll done. Next steps:');
  console.log('  1. Add the 3 hub URLs to sitemap.xml');
  console.log('  2. Add the 3 /coding-classes-in-india, /learn-coding-by-class, /learn-coding-by-age rewrite rules to netlify.toml');
  console.log('  3. Run `npm run build:inline` to inline the nav + updated footer into the new hub pages.');
}

main();
