'use strict';
// Kirkby (cg- town page, UK cluster Phase 10, towns band B, row 529). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: which Kirkby neighbourhood has the oddest
// shape? Two standard compactness scores, and the boundary detail they are measured on, give different answers.
// (Polsby-Popper score against convex hull ratio; sensitivity to boundary resolution.)
// Data (read 1 October 2026): ONS OA21 to BUA22 lookup: 137 output areas of the Kirkby BUA inside Knowsley (our OA sum
// 43,003 against the published BUA 45,560, so part of the BUA lies outside Knowsley). ONS Output Areas 2021 boundaries,
// full resolution clipped (BFC V8): 38,657 corner points, no multi-part areas; generalised (BGC V2): 2,331 points.
// Our run (scratchpad krb/shape.py, res.py), British National Grid metres: Polsby-Popper 4 pi A / P^2: min 0.131,
// median 0.350, max 0.764. Convex hull ratio A / hull area: min 0.432, median 0.730, max 0.998. Spearman between the
// two 0.913. Lowest PP: E00032611 (0.131), 3rd lowest by hull. Lowest hull ratio: E00032982 (0.432), 6th lowest by PP.
// Ten lowest by each: 7 in common. Largest disagreement: E00172034, 125th by PP, 80th by hull (of 137, lowest first).
// Generalised boundaries: PP median 0.412, hull median 0.757; PP ranks across the two resolutions Spearman 0.98;
// E00032611 still lowest (0.159). OA area median 50,763 m2, largest 4,488,944 m2. Square PP 0.785, circle 1.
// Lesson family: shape compactness scores. Screened: "polsby" 0 hits in content/; claimed in claims.txt. Downpatrick =
// minimum enclosing circle (not used here); Glasgow = coastline box counting; different families.
// Place facts: Knowsley TS001 154,519. ONS 2021 BUA (published): Kirkby 45,560. postcodes.io suburban areas whose
// closest postcode is in the Kirkby BUA: Northwood, Southdene, Tower Hill, Westvale (L32, L33).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'KIRKBY', label: 'Kirkby', blurb: 'Coding and AI classes for Kirkby, with a project that scores the shape of 137 census neighbourhoods two ways and gets two answers.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-kirkby',
  code: 'krb',
  accent: '#6B2B5A',
  accentRationale: 'Kirkby: a dark mulberry (9.91:1 contrast), picked by hand and checked for distance from every accent in use and from the other Merseyside pages',
  pageType: 'city',
  place: {
    name: 'Kirkby',
    eyebrow: 'Kirkby, Knowsley, Merseyside',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Merseyside' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Merseyside', href: '/coding-classes-in-merseyside' },
    { label: 'Liverpool', href: '/best-coding-class-in-liverpool' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Kirkby, Merseyside',
  title: 'Coding and AI Classes in Kirkby, Merseyside | Ages 6 to 67',
  description: 'Live online coding and AI classes for Kirkby, Northwood, Southdene, Tower Hill and Westvale, ages 6 to 67: Python, vibe coding and agents. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Kirkby, with a project that scores neighbourhood shapes two ways.',
  twitterDescription: 'Kirkby coding and AI lessons, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '1 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Kirkby',
    description: 'Online coding, AI, Python and maths lessons for children, teenagers and adults in Kirkby and Knowsley, taught through geometry and data the learner computes for themselves.'
  },

  h1: 'Coding and AI classes in Kirkby',
  capsuleQ: 'Which coding and AI classes are best for Kirkby?',
  capsule: 'The ONS gives the Kirkby built-up area 45,560 usual residents at the 2021 census, and the borough of Knowsley 154,519; a small part of that built-up area lies outside Knowsley. Northwood, Southdene, Tower Hill and Westvale are gazetteer suburbs whose nearest postcodes are inside it. People in Kirkby aged six to 67 learn coding, AI, Python, vibe coding and maths with Modern Age Coders in live online classes. Tutors in India take each class, either privately or with five to ten learners at a matching level, and every project involves calculating something real. Our course advice follows a free first lesson. In the Kirkby project the learner downloads the boundaries of 137 census neighbourhoods, writes two shape scores in Python, and finds that the question "which is the oddest shape?" has more than one honest answer. From then on it is USD 100 each month in a group, or USD 150 each month for one-to-one.',
  lead: 'A circle is as compact as a shape can be. A long thin strip is not. Between those two, deciding which shape is "odder" sounds like a matter of taste, but there are formulas for it, and people use them to judge everything from census areas to land parcels. The trouble is that the standard formulas disagree, and one of them changes its answer depending on how finely the boundary was drawn. Kirkby\'s census neighbourhoods, whose edges follow streets and property lines rather than any geometry, make an ideal test.',
  wa: 'Hello Modern Age Coders, we would love a free coding or AI trial lesson. We are in Kirkby.',

  picks: {
    eyebrow: 'First courses',
    h2: 'Coding and AI courses for Kirkby learners',
    intro: 'A place to begin for each age. Whichever you pick, lesson one is free and no card is needed.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think like a programmer: shapes, measurements and precise instructions.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children: Scratch games built with an AI, then checked and fixed.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths and Python together, including area, perimeter and the Kirkby shape project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from the start to data, geometry and a first AI agent.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Kirkby and Knowsley',
      h2: 'Kirkby, Northwood, Southdene, Tower Hill and Westvale',
      intro: 'Census totals, where the built-up area ends, and the suburb names inside it.',
      body: [
        { kind: 'table', caption: 'People counted at the 2021 census (ONS usual residents)', head: ['Area', 'Population'], rows: [
          ['Kirkby built-up area', '45,560'],
          ['Knowsley borough', '154,519']
        ] },
        { kind: 'p', text: 'Knowsley also contains Huyton, Prescot, Halewood and other places, so the two rows overlap and are not added together. Using the ONS lookup from output areas to built-up areas, the learner finds 137 output areas of the Kirkby built-up area inside Knowsley, holding 43,003 people between them; the rest of the published total lies over the borough edge. postcodes.io lists Northwood and Tower Hill in L33 and Southdene and Westvale in L32 as suburban areas whose nearest postcodes are in the Kirkby built-up area. Local schools follow England\'s national curriculum. Send the year group, anything from Year 2 up to Year 13, and we can tie lessons to GCSE or A level computer science.' },
        { kind: 'callout', h3: 'Merseyside pages', p: 'Try <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-huyton-with-roby">Huyton with Roby</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-st-helens">St Helens</a>, <a class="cg-inline-link" href="/best-coding-class-in-liverpool">Liverpool</a> or the <a class="cg-inline-link" href="/coding-classes-in-merseyside">Merseyside page</a>. We set out why thinking comes before AI tools in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Kirkby project',
      h2: 'Scoring 137 neighbourhood shapes, two ways',
      intro: 'Census boundaries, two formulas, and a check on how much the drawing itself matters.',
      body: [
        { kind: 'p', text: 'Output areas are the smallest areas the census reports on. The learner downloads the full-resolution boundaries of Kirkby\'s 137 from the ONS: 38,657 corner points in British National Grid metres. Their areas range from about 1.7 hectares to 449, with a median near 5.1. Python computes each area with the shoelace formula and each perimeter by adding up the edges.' },
        { kind: 'p', text: 'Score one is the Polsby-Popper score, four pi times the area divided by the perimeter squared. A circle scores 1 and a square about 0.785; long, ragged shapes score low. Score two is the convex hull ratio: stretch an imaginary rubber band round the shape, and divide the shape\'s area by the area inside the band. A shape with no dents scores 1. Both are standard; they simply measure different things. Polsby-Popper punishes a long or wiggly edge, while the hull ratio punishes bites taken out of the outline.' },
        { kind: 'table', caption: 'Two compactness scores for 137 Kirkby output areas, our Python run', head: ['Measure', 'Lowest', 'Median', 'Highest'], rows: [
          ['Polsby-Popper, full-resolution boundaries', '0.131', '0.350', '0.764'],
          ['Convex hull ratio, full-resolution boundaries', '0.432', '0.730', '0.998'],
          ['Polsby-Popper, generalised boundaries', 'n/a', '0.412', 'n/a'],
          ['Convex hull ratio, generalised boundaries', 'n/a', '0.757', 'n/a']
        ] },
        { kind: 'p', text: 'Mostly the two scores agree: ranked from least to most compact, their rank correlation is 0.913. But they crown different winners. The oddest shape by Polsby-Popper, output area E00032611 with a score of 0.131, is only third by hull ratio. The oddest by hull ratio, E00032982 at 0.432, is sixth by Polsby-Popper. Of the ten least compact areas on each list, seven appear on both. The sharpest disagreement is E00172034, 125th of 137 by one score and 80th by the other.' },
        { kind: 'p', text: 'Then the learner repeats everything on the generalised boundaries the ONS also publishes, drawn with 2,331 corner points instead of 38,657. The median Polsby-Popper score jumps from 0.350 to 0.412, because a smoother edge is a shorter one, while the median hull ratio moves only from 0.730 to 0.757. E00032611 is still the oddest, now scoring 0.159. So a single number reported without its formula and its boundary file is not really a result.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Make shapes from the same length of string and find which one holds the most squares.' },
          { h3: 'Ages 11 to 15', p: 'Code the shoelace formula in Python and test it on shapes whose areas you already know.' },
          { h3: 'Ages 15 and up', p: 'Load the ONS boundaries, compute both scores at both resolutions, and compare the rankings.' }
        ] },
        { kind: 'callout', h3: 'Boundaries and credits', p: 'Output area boundaries and the output area to built-up area lookup are from the Office for National Statistics under the Open Government Licence. The convex hulls use SciPy. The areas, perimeters, scores and rankings are all from our own run.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Measurement and AI',
      h2: 'What two shape scores teach about AI answers',
      intro: 'A confident ranking can rest on choices nobody mentioned.',
      body: [
        { kind: 'table', caption: 'From Kirkby boundaries to AI output', head: ['What the scores showed', 'What to ask of AI answers'], rows: [
          ['Two sound formulas named different oddest areas', 'Which definition was used?'],
          ['Seven of ten least compact areas matched', 'How much do the alternatives agree?'],
          ['Smoother boundaries raised one score by 18%', 'What data, at what detail?'],
          ['The hull ratio barely moved', 'Which measures are robust to that choice?'],
          ['Every figure came from our own code', 'Can the result be reproduced?']
        ] },
        { kind: 'p', text: 'Ask an AI chatbot which neighbourhood in a town has the most irregular shape and it may reply with a name and a number, stated with total confidence. Behind that answer sit two decisions, which formula and which boundary file, and a change to either can change the answer. Kirkby learners practise vibe coding with this in mind: they get an AI to draft the geometry code, then check the formula against shapes with known answers and ask what the result depends on. The same scepticism is what makes AI agents trustworthy later. Agents enter the picture once a learner\'s Python stands on its own, commonly around sixth form or in adult life, and Copilot Studio work happens in private lessons alone. Read <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> alongside <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our agents route for UK students</a>.' },
        { kind: 'p', text: 'The Office for National Statistics and postcodes.io have no connection with Modern Age Coders. We used their open data; the analysis is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The journey',
    h2: 'String shapes at seven, computational geometry at seventeen',
    intro: 'Starting points come from the trial lesson, with the school year as a guide only.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Shapes and rules', p: 'Measuring, comparing and giving exact instructions.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Making with code', p: 'Scratch projects built with AI help, then first Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Maths meets Python', p: 'Geometry, statistics and algorithms turned into working code.', courses: ['maths-through-coding', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Data and agents', p: 'Python for real datasets, then agents built on code you understand.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Geometry and AI',
    h2: 'What is a compactness score, and why does it matter when AI gives you a ranking?',
    intro: 'A compactness score is a number that says how close a shape is to a circle or to its own outline without dents, and it matters because different scores and different boundary files rank the same places differently, choices an AI answer seldom reveals.',
    p1: 'For 137 Kirkby output areas the Polsby-Popper median was 0.350 on full-resolution boundaries and 0.412 on generalised ones, and the oddest area by one score was only third by the other.',
    p2: 'A learner who has seen that asks of any ranking, including an AI\'s, which definition and which data produced it.',
    closer: 'For Kirkby teenagers, knowing that every measurement hides a choice is what keeps them in charge of AI tools, and that knowledge comes from coding the measurement yourself.',
    blogAnchor: 'whether learning to code is still worth it in 2026'
  },

  delivery: {
    eyebrow: 'Lesson set-up',
    h2: 'How Kirkby lessons work',
    intro: 'Lessons take place live over video. You need a computer with a keyboard; a tablet on its own is not suitable for Python.',
    cells: [
      { h3: 'Learner does the typing', p: 'Code is written and run by the learner, with the tutor asking why.' },
      { h3: 'Level set by the trial', p: 'We see the learner\'s skills in the free lesson before naming a course.' },
      { h3: 'No payment to try', p: 'The first lesson is free and needs no card.' },
      { h3: 'Classes of five to ten', p: 'Groups share a level, with classmates from across the UK.' },
      { h3: 'About eight a month', p: 'Two lessons a week in term, with Knowsley holidays left free on request.' },
      { h3: 'No clock-change confusion', p: 'Your UK lesson time holds steady all year.' }
    ],
    spec: { title: 'Why lessons are online', p: 'Finding five to ten learners at exactly the same stage is easier across the country than in one town. Video brings them together without travel.' }
  },

  fees: {
    h2: 'Costs for Kirkby learners',
    intro: 'Kirkby families pay the same as every learner we teach outside India.',
    first: 'First lesson: free and full length, with our course advice at the end.',
    group: 'Group class, about eight lessons per month.',
    private: 'Private lessons, about eight per month.',
    closer: 'Everything is priced in US dollars, with no pound equivalent from us. No charge applies before the trial, and billing starts only when you have settled on a course and a weekly time. The pricing page deals with holidays, absences and a switch from group to private or back.'
  },

  reviewsH2: 'Merseyside families and learners across the UK, reviewing us on Google',

  book: {
    h2: 'Ask for a free Kirkby lesson',
    intro: 'Send us an age or school year and one of the learner\'s interests. A trial could be a string-and-squares puzzle, a Scratch game built with AI, a first Python program, or a first shape measured in code.',
    success: 'Thank you. Your Kirkby request is in.'
  },

  faq: {
    h2: 'Kirkby FAQs',
    intro: 'The shape project, compactness, coding, vibe coding and lesson details.',
    items: [
      { q: 'What is the population of Kirkby?', a: 'The ONS gives 45,560 usual residents for the Kirkby built-up area at the 2021 census. Knowsley borough had 154,519.' },
      { q: 'Can learners in Kirkby join these coding and AI classes?', a: 'Yes, everything is taught over live video to anyone from 6 to 67, whether in Kirkby, Northwood, Southdene, Tower Hill, Westvale or elsewhere in Knowsley.' },
      { q: 'What is the Polsby-Popper score?', a: 'Four pi times a shape\'s area divided by its perimeter squared. A circle scores 1, a square about 0.785, and long or ragged shapes score close to 0.' },
      { q: 'What is a convex hull?', a: 'The smallest shape with no dents that contains every point of an outline, like a rubber band stretched round it. The convex hull ratio divides the shape\'s area by the hull\'s.' },
      { q: 'What did the Kirkby project find?', a: 'Across 137 output areas the two scores mostly agreed, with a rank correlation of 0.913, but named different oddest areas. Smoother boundaries raised the median Polsby-Popper score from 0.350 to 0.412.' },
      { q: 'What is vibe coding?', a: 'Vibe coding is describing a program to an AI and then running, reading and correcting what it produces. We teach it with typed Python so learners can check it.' },
      { q: 'When do learners build AI agents?', a: 'When their Python is independent, usually from sixth form or as adults. Copilot Studio agents are one-to-one only.' },
      { q: 'Will this help with GCSE maths or computer science?', a: 'Area, perimeter, formulas and programming all appear on GCSE courses, which is partly why the project uses them. Grades are never promised.' },
      { q: 'How much are lessons?', a: 'The first lesson is free. After that, a group costs USD 100 per month and private tuition USD 150 per month.' },
      { q: 'Do lessons continue in the holidays?', a: 'Only if you want them to. Tell us the dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'In the area',
    h2: 'More Merseyside and North West pages',
    html: 'See <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-huyton-with-roby">Huyton with Roby</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-st-helens">St Helens</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-southport">Southport</a> and <a class="cg-inline-link" href="/best-coding-class-in-liverpool">Liverpool</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> list the rest.',
    waLabel: 'WhatsApp the team'
  },

  footerHeading: 'Kirkby and Merseyside',
  footerPlaces: [
    { href: '/coding-classes-in-merseyside', label: 'Merseyside' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-krb .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 2.9vw, 2.3rem); }
.cg-root.cg-krb .cg-hero h1 { font-weight: 770; letter-spacing: -0.023em; line-height: 1.08; }
.cg-root.cg-krb .cg-capsule { border-left: 2px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-krb .cg-eyebrow { letter-spacing: 0.16em; font-weight: 690; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-krb .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.014em; }
.cg-root.cg-krb .cg-table caption { font-weight: 590; text-align: left; font-size: 0.9rem; }
.cg-root.cg-krb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-krb .cg-table th { font-weight: 740; letter-spacing: 0.012em; }
.cg-root.cg-krb .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.65rem; }
.cg-root.cg-krb .cg-callout { border-left-width: 4px; border-radius: 10px; }
`,

  dossier: {
    curriculumAuthority: 'Knowsley (E08000011), Census 2021 TS001 usual residents 154,519. ONS 2021 BUA (published): Kirkby 45,560 (137 OAs inside Knowsley, our sum 43,003). English national curriculum, GCSE and A level. postcodes.io suburban areas whose closest postcode is in the Kirkby BUA: Northwood, Southdene, Tower Hill, Westvale (L32, L33).',
    localProject: 'ONS OA 2021 boundaries for the 137 Kirkby BUA output areas inside Knowsley. Full resolution (BFC, 38,657 points): Polsby-Popper min 0.131 / median 0.350 / max 0.764; convex hull ratio 0.432 / 0.730 / 0.998; Spearman 0.913. Lowest PP E00032611 (0.131), 3rd by hull; lowest hull E00032982 (0.432), 6th by PP; ten lowest share 7; E00172034 125th vs 80th. Generalised (BGC, 2,331 points): PP median 0.412, hull median 0.757; PP ranks Spearman 0.98 across resolutions. Lesson family: shape compactness scores (Polsby-Popper vs convex hull ratio) and boundary resolution.',
    requiredMentions: [
      '45,560',
      'Northwood',
      'Southdene',
      'Tower Hill',
      'Westvale',
      'Polsby-Popper',
      'E00032611',
      '0.913',
      '38,657'
    ],
    sources: [
      { claim: 'ONS Output Areas (December 2021) boundaries, full resolution clipped (BFC) and generalised (BGC), Open Government Licence.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'ONS output area 2021 to built-up area 2022 lookup; ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'SciPy ConvexHull documentation (area of a two-dimensional hull is returned as volume).', url: 'https://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.ConvexHull.html' },
      { claim: 'postcodes.io places and nearest-postcode lookups for suburban areas in Knowsley.', url: 'https://api.postcodes.io/places?q=Southdene' }
    ],
    rejectedClaims: [
      'What any oddly shaped output area contains (fields, industry, water): not checked, not claimed.',
      'Which neighbouring borough holds the rest of the Kirkby built-up area: not checked; only that part lies outside Knowsley.',
      'That one compactness score is the right one: the page says both are standard and measure different things.',
      'The political history of compactness measures: not discussed.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
