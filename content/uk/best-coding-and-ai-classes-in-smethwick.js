'use strict';
// Smethwick (cg- town page, UK cluster Phase 10, towns band B, row 489). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: why does "find the most similar one" stop
// working when you describe things with too many columns? (distance concentration, the curse of dimensionality.)
// Data (read 30 September 2026): Nomis Census 2021, all 978 output areas in Sandwell (E08000028): TS017 household size
// (8 size shares), TS045 car or van availability (4 shares), TS044 accommodation type (8 shares), TS006 population
// density (log10). 21 columns, each standardised. OA rows sum to 130,315 households (published LAD total 130,246).
// Our run (scratchpad smk/dc.py): for every area, straight-line distance in column space to every other area; ratio =
// nearest / farthest; median over the 978 areas. Real columns (k < 21: median over 30 random choices of k columns):
// 3 columns 0.009; 8: 0.057; 13: 0.092; all 21: 0.135. Independent random columns for 978 made-up points (seed 0):
// 3: 0.043; 8: 0.197; 21: 0.404; 100: 0.673; 1,000: 0.882. Participation ratio of the 21 real columns: 8.8.
// Noise test: nearest neighbour on three real columns (density, no-car share, one-person share), then random columns
// added (median of 10 seeds): +3 columns, 4.8% of areas keep the same nearest neighbour; +10, 0.9%; +100, 0.3%.
// Three chosen columns against all 21: 3.2% keep the same nearest neighbour.
// Lesson family: distance concentration / curse of dimensionality. Screened: "distance concentration" 0 hits in content/;
// "curse of dimensionality" appears only in course and resource curricula, no city page; claimed in claims.txt.
// West Bromwich page (same borough) = tool-using agent and spatial containment; different family, different data.
// Place facts: Sandwell TS001 341,832. ONS 2021 BUA (published): Smethwick 56,340. postcodes.io (Sandwell) suburban
// areas: Bearwood, Cape Hill, Black Patch (B66); West Smethwick, Londonderry, Warley Woods (B67); Rood End (B68).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'SMETHWICK', label: 'Smethwick', blurb: 'Coding and AI classes for Smethwick, with a project showing why similarity search breaks down when areas are described by too many columns.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-smethwick',
  code: 'smk',
  accent: '#7A2E1F',
  accentRationale: 'Smethwick: a dark brick red-brown (9.38:1 contrast), chosen by hand to stand apart from recent accents',
  pageType: 'city',
  place: {
    name: 'Smethwick',
    eyebrow: 'Smethwick, Sandwell, West Midlands',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Sandwell' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'West Midlands', href: '/coding-classes-in-the-west-midlands' },
    { label: 'Birmingham', href: '/coding-classes-in-birmingham' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Smethwick, West Midlands',
  title: 'Coding and AI Classes in Smethwick | Python, Ages 6 to 67',
  description: 'Coding, AI, Python and vibe coding taught live online for Smethwick, Bearwood, Cape Hill and Rood End learners aged 6 to 67. Your first lesson is free.',
  ogDescription: 'Coding and AI classes for Smethwick, with a machine learning project on distance concentration using Sandwell census columns.',
  twitterDescription: 'Smethwick coding, AI, Python and vibe coding classes online, ages 6 to 67. Free first lesson.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Smethwick',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Smethwick and Sandwell, taught live with experiments on real data.'
  },

  h1: 'Coding and AI classes in Smethwick',
  capsuleQ: 'Where can Smethwick learners find the best coding and AI classes?',
  capsule: 'Smethwick is a town of 56,340 people by the ONS built-up area count from the 2021 census, and postcodes.io records Bearwood, Cape Hill, Black Patch, West Smethwick, Londonderry, Warley Woods and Rood End as suburbs around it. From there, children of six, teenagers, parents and retired people up to 67 join our tutors in India by video for coding, AI, Python, vibe coding and maths. Some work one-to-one; most sit in a class of five to ten at one level. Understanding comes first with us: a learner should be able to say why a method works and when it will not. We give the first lesson away and finish it by naming a course. Smethwick\'s project describes 978 small census areas with up to 21 columns each and watches "find the most similar area" slowly stop meaning anything. Monthly fees afterwards are USD 100 for a group seat and USD 150 for private tuition.',
  lead: 'Recommendation engines, search tools and the memory behind many AI chat assistants all rest on one idea: turn each item into a list of numbers, then call two items similar when their lists are close. It feels safe to add more numbers, because more description ought to mean better matches. Often the opposite happens. As columns pile up, every item drifts to roughly the same distance from every other, and the nearest match is barely nearer than the farthest. Mathematicians call this distance concentration, one face of the curse of dimensionality. This project measures it on census columns for Sandwell, the borough Smethwick sits in, and on made-up random columns for contrast.',
  wa: 'Hello Modern Age Coders, I am in Smethwick and would like to book a free coding or AI lesson.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Four Smethwick starting courses',
    intro: 'One per age band. The opening session of any of them is taught live and costs nothing, with no card taken.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Thinking skills first: comparing things fairly, sorting by more than one feature, explaining a choice.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children plan a Scratch game, let an AI suggest code and decide what to keep.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the ground up, reaching arrays, distances and the Smethwick similarity experiment.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How generative AI stores and retrieves meaning, with embeddings, search and agents built in code.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Smethwick in figures',
      h2: 'Smethwick, Bearwood, Cape Hill and West Smethwick',
      intro: 'What the census and the postcode gazetteer record for the town and its borough.',
      body: [
        { kind: 'table', caption: 'Smethwick and Sandwell, Census 2021 (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Smethwick built-up area', '56,340'],
          ['Sandwell borough', '341,832']
        ] },
        { kind: 'p', text: 'These are two separate published counts for two different boundaries. The postcodes.io gazetteer lists Bearwood, Cape Hill and Black Patch under B66, West Smethwick, Londonderry and Warley Woods under B67, and Rood End under B68, each as a suburban area in Sandwell. Learners here follow the English national curriculum, so we ask for a school year from Year 2 to Year 13 or simply an age, and GCSE and A level work is supported when it helps.' },
        { kind: 'callout', h3: 'Other West Midlands pages', p: 'The borough is also covered from <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-west-bromwich">West Bromwich</a>, and there are pages for <a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham</a> and <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">the West Midlands county</a>. Our case for reasoning ahead of tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Smethwick project',
      h2: 'Distance concentration: when every area looks equally far away',
      intro: 'Describe 978 areas with more and more columns, and compare each area\'s nearest match with its farthest.',
      body: [
        { kind: 'p', text: 'From the Nomis API the learner pulls four Census 2021 tables for all 978 output areas in Sandwell: household size, car or van availability, accommodation type and population density. The household-size rows add to 130,315 households (the published borough total is 130,246; small census counts are adjusted, so rows and totals differ a little). Turned into shares, the tables give 21 columns per area, each rescaled so no column dominates. For every area the program finds the closest other area and the most distant one, then divides the first distance by the second. A ratio close to 0 means the nearest match is far nearer than the rest, which is what a similarity search needs. A ratio close to 1 means near and far are almost the same.' },
        { kind: 'table', caption: 'Nearest distance as a fraction of farthest distance, median across 978 areas, our Python run', head: ['Columns used', 'Sandwell census columns', 'Independent random columns'], rows: [
          ['3', '0.01', '0.04'],
          ['8', '0.06', '0.20'],
          ['21', '0.14', '0.40'],
          ['100', 'not available', '0.67'],
          ['1,000', 'not available', '0.88']
        ] },
        { kind: 'p', text: 'Both columns of results rise, so the effect is real in the census data too: with all 21 columns the nearest area is 0.14 of the way to the farthest, against 0.01 with three. The random points are much worse, reaching 0.88 at 1,000 columns, where "nearest" has almost no meaning. The census data resists because its columns overlap. An area with many flats tends to have fewer cars, so the 21 columns carry less than 21 separate pieces of information; one standard measure, the participation ratio, puts it at 8.8. Counting columns is not the same as counting information.' },
        { kind: 'p', text: 'The second experiment is harsher. Using three sensible columns (density, the share of homes with no car, the share of one-person homes), the program records each area\'s nearest neighbour. It then adds three columns of pure random noise and looks again. Only 4.8% of areas keep the same nearest neighbour, and with ten noise columns 0.9% do. A few meaningless columns are enough to scramble the matches. Figures for fewer than 21 census columns are medians over 30 random choices of columns, and the noise results are medians over 10 random seeds.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Sort picture cards by one feature, then by five at once, and see how "most alike" gets harder to agree on.' },
          { h3: 'Ages 11 to 15', p: 'Write a Python distance function and find the closest match for a Smethwick area on two columns, then on ten.' },
          { h3: 'Ages 15 and up', p: 'Reproduce the ratio table with NumPy, add noise columns and explain why correlated columns behave differently.' }
        ] },
        { kind: 'callout', h3: 'Whose numbers these are', p: 'The census counts are Office for National Statistics data served by Nomis under the Open Government Licence. Ratios, medians and the noise experiment are our own calculations, and the random columns are generated by us, not measured anywhere. Areas are compared only on housing, household size, cars and density.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Why it matters for AI',
      h2: 'Vibe coding, AI agents and the limits of "similar"',
      intro: 'Much of what an assistant retrieves is chosen by distance between long lists of numbers.',
      body: [
        { kind: 'table', caption: 'From the Smethwick experiment to AI tools', head: ['What the experiment showed', 'What it means when you build with AI'], rows: [
          ['The ratio climbed from 0.01 to 0.14', 'Extra features can blur a search'],
          ['Random columns reached 0.88', 'Uninformative features blur it fastest'],
          ['21 columns acted like about 9', 'Overlapping features add less than they seem to'],
          ['Three noise columns changed 95% of matches', 'Check what goes into a similarity score'],
          ['Three well chosen columns gave clear matches', 'Fewer, meaningful features often win']
        ] },
        { kind: 'p', text: 'When an AI agent looks something up in its notes, it usually ranks stored passages by this kind of distance, in hundreds or thousands of dimensions. Those dimensions are learned to be informative, which is why it works at all, but the Smethwick result explains why retrieval sometimes returns something oddly unrelated. Vibe coding is building software by telling an AI what you want in plain language; a learner who knows about distance concentration will ask the AI which features its "similar items" function uses, and will test it on a case with a known answer. Agent building is for learners whose Python is already secure, in practice older teens and adults, and we teach Copilot Studio agents in one-to-one lessons only. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents course for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We have no link with the Office for National Statistics, Nomis or postcodes.io; we only read their open data. Every calculation on this page, and any error in one, belongs to Modern Age Coders.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'The route from sorting cards to embeddings',
    intro: 'School year gives us a first guess at the stage. The free lesson corrects it.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Compare, classify and justify, first on paper and then in Scratch.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Build games with an AI helper and test every suggestion.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Arrays, distances and models, alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Generative AI and agents', p: 'Embeddings, retrieval and agents written in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and similarity',
    h2: 'What is the curse of dimensionality, and why does it matter for AI?',
    intro: 'The curse of dimensionality is the way data becomes sparse and distances become nearly equal as the number of features grows, so that methods relying on "nearest" or "most similar" lose their grip.',
    p1: 'Across 978 Sandwell census areas, the nearest match was 0.01 of the distance to the farthest with 3 columns and 0.14 with 21; for random data with 1,000 columns it was 0.88.',
    p2: 'A learner who has produced those numbers will not assume that feeding a model more columns makes it smarter, and will ask which columns earn their place.',
    closer: 'Questions like that come from having written the distance function yourself, which is why Smethwick teenagers still gain from learning to code while AI tools write so much of it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson format',
    h2: 'What a Smethwick learner needs, and what we provide',
    intro: 'Bring a computer with a working camera and microphone. We bring the tutor, the plan and the projects.',
    cells: [
      { h3: 'Learner at the controls', p: 'The student shares their screen and does the building. The tutor questions, hints and waits.' },
      { h3: 'Placed by a real lesson', p: 'We decide the course after watching the learner work for one free session, not from a form.' },
      { h3: 'No charge to try', p: 'That first session is complete and unpaid, and you leave with a named course.' },
      { h3: 'Same-level classmates', p: 'Group classes hold five to ten learners from around the UK who are at one stage.' },
      { h3: 'Term-time rhythm', p: 'Two sessions in most weeks, paused for the Sandwell school holidays you tell us about.' },
      { h3: 'UK time, always', p: 'Tutors shift their own clocks when British Summer Time starts and ends.' }
    ],
    spec: { title: 'Why we teach by video', p: 'Matching by level matters more than matching by postcode. Drawing each class from the whole country lets a Smethwick learner sit with true peers.' }
  },

  fees: {
    h2: 'What Smethwick learners pay',
    intro: 'We publish one price list for every country other than India, and it applies here.',
    first: 'A full first lesson, free, with a course recommendation.',
    group: 'Class of five to ten, roughly eight sessions each month.',
    private: 'Individual tuition, roughly eight sessions each month.',
    closer: 'Prices are quoted in US dollars and we do not list a sterling figure. You are invoiced only once the trial is done and a course and time are agreed; the pricing page explains holidays, missed sessions and switching between group and private.'
  },

  reviewsH2: 'What West Midlands and other UK families say on Google',

  book: {
    h2: 'Reserve a free Smethwick lesson',
    intro: 'Send an age or school year plus whatever the learner is curious about. We might open with a card-sorting puzzle, a Scratch game drafted with an AI, a first Python loop, or a distance calculation on real areas.',
    success: 'Thank you. Your Smethwick request has reached us.'
  },

  faq: {
    h2: 'Smethwick questions answered',
    intro: 'On the similarity project, the courses, vibe coding and how lessons are arranged.',
    items: [
      { q: 'How many people live in Smethwick?', a: 'The ONS built-up area figure for Smethwick at the 2021 census is 56,340. Sandwell borough had 341,832.' },
      { q: 'Are these classes open to learners in Smethwick?', a: 'Yes. Teaching is by live video, so anyone aged 6 to 67 in Smethwick, Bearwood, Cape Hill or elsewhere in Sandwell can join.' },
      { q: 'What is distance concentration?', a: 'It is the tendency, as more features are added, for the distances between data points to become nearly equal, so the nearest point is hardly closer than the farthest.' },
      { q: 'What is a nearest neighbour search?', a: 'It is finding the stored item whose list of numbers is closest to a query. Recommendations and AI retrieval use it constantly.' },
      { q: 'What did the Smethwick project find?', a: 'With 21 census columns the nearest area sat at 0.14 of the distance to the farthest, up from 0.01 with 3 columns, and adding three noise columns changed the nearest match for about 95% of areas.' },
      { q: 'Do children here learn vibe coding?', a: 'Yes. They explain what they want built, read what the AI produces and test it, starting in Scratch and moving to Python.' },
      { q: 'Who can take the AI agents work?', a: 'Learners with secure Python, which usually means older teenagers and adults. Copilot Studio agents are offered one-to-one only.' },
      { q: 'Will lessons help with GCSE computer science?', a: 'They cover the programming and reasoning the course needs. We do not promise any grade.' },
      { q: 'What are the fees?', a: 'The trial lesson is free. A group place is USD 100 a month and private lessons are USD 150 a month.' },
      { q: 'Is there a break for school holidays?', a: 'Yes. Give us the dates and those weeks are left empty.' }
    ]
  },

  next: {
    eyebrow: 'Keep exploring',
    h2: 'Other pages around the West Midlands',
    html: 'Each has a project of its own: <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-west-bromwich">West Bromwich</a> (an agent that must not double-count areas), <a class="cg-inline-link" href="/online-coding-and-python-classes-in-dudley">Dudley</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-walsall">Walsall</a>. For the rest of the country, start at the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Ask us on WhatsApp'
  },

  footerHeading: 'Smethwick and Sandwell',
  footerPlaces: [
    { href: '/coding-classes-in-the-west-midlands', label: 'West Midlands' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-smk .cg-hero-grid { align-items: start; gap: clamp(1.25rem, 3.5vw, 3rem); }
.cg-root.cg-smk .cg-hero h1 { font-weight: 740; letter-spacing: -0.03em; line-height: 1.04; }
.cg-root.cg-smk .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-smk .cg-eyebrow { letter-spacing: 0.12em; font-weight: 650; }
.cg-root.cg-smk .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.022em; }
.cg-root.cg-smk .cg-table caption { font-style: italic; text-align: left; font-size: 0.92rem; }
.cg-root.cg-smk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-smk .cg-table th { border-bottom: 2px solid var(--cg-accent); font-weight: 650; }
.cg-root.cg-smk .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-smk .cg-callout { border-radius: 4px; border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Sandwell (E08000028), Census 2021 TS001 usual residents 341,832. ONS 2021 BUA (published): Smethwick 56,340. English national curriculum, GCSE and A level. postcodes.io (Sandwell) suburban areas: Bearwood, Cape Hill, Black Patch (B66); West Smethwick, Londonderry, Warley Woods (B67); Rood End (B68).',
    localProject: 'Census 2021 TS017, TS045, TS044, TS006 for 978 Sandwell OAs, OA rows sum to 130,315 households (published LAD total 130,246), 21 standardised columns. Median nearest/farthest ratio: real 3 columns 0.009, 8: 0.057, 21: 0.135 (k < 21 median over 30 column draws); random independent 3: 0.043, 8: 0.197, 21: 0.404, 100: 0.673, 1,000: 0.882. Participation ratio 8.8. Noise test on density, no-car share, one-person share: +3 noise columns 4.8% keep nearest neighbour, +10: 0.9%. Lesson family: distance concentration, curse of dimensionality.',
    requiredMentions: [
      '56,340',
      '130,315',
      'Cape Hill',
      'West Smethwick',
      'Rood End',
      'Warley Woods',
      'Black Patch',
      'distance concentration'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS017, TS045, TS044, TS006 and TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS output area lookups and population-weighted centroids, ONS Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places: suburban areas in Sandwell.', url: 'https://api.postcodes.io/places?q=Cape%20Hill' }
    ],
    rejectedClaims: [
      'That Smethwick areas are more or less alike than areas elsewhere: not tested, not claimed.',
      'That real AI embeddings suffer the same ratios: not measured; the page says their dimensions are learned to be informative.',
      'Industrial history, canals and foundries: not read from a source; not claimed.',
      'Any description of who lives in an area beyond housing, household size, cars and density: none used.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
