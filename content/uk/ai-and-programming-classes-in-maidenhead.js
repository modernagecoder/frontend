'use strict';
// Maidenhead (cg- town page, UK cluster Phase 8, towns band A, row 319). Keyword slug per the owner's 2026-09-27
// instruction. Spine: why does a flat arch push harder? Anchor (read raw 27 September 2026, Network Rail, "The history of
// the Maidenhead Bridge"): "Isambard Kingdom Brunel's Maidenhead Bridge over the River Thames boasted the flattest yet widest
// brick constructed arches in the world" (Network Rail's claim, attributed); "1839 : 1 July, the Maidenhead Bridge is
// opened"; "1890-1892 : the Maidenhead Bridge is widened on both sides by Sir John Fowler"; "the Thames Navigation
// Commissioners required that neither the channel nor the towpath be obstructed, allowing only one pier in the river";
// "the inclined approaches are only 1 in 1,320, or 0.076 percent"; "two shallow spans over the river, with a rise of only
// 24ft (7.3 meters) and an unprecedented width of 128ft (39 meters)"; "The Great Western Railway directors didn't trust
// Brunel's design and insisted the scaffolding remain in place initially"; the timber frame "was washed away by strong winds
// or a river flood, according to different accounts". Science Museum Group co8712933: J C Bourne lithograph "The Maidenhead
// Bridge", 1846.
// Our model (computed inline; load invented): parabolic arch under a uniform load w = 100 kN per metre, span L = 39 m:
// horizontal thrust H = w L^2 / (8 f), vertical support V = w L / 2 = 1,950 kN. Rise 7.3 m: H 2,604 kN (H/V 1.34). A tall
// parabola rising 19.5 m: H 975 (0.50). Rise 12 m: 1,584 (0.81). Half the real rise, 3.65 m: 5,209 (2.67). Real vs tall:
// 2.67 times the thrust. Rise to span 7.3/39 = 0.187 (24/128 = 0.1875). Gradient 1 in 1,320 = 0.0758 per cent, 0.76 m per
// km. Slip: halving the span twice gives 651 kN, a quarter of the true thrust.
// Lesson family: inverse proportion (arch thrust against rise), ratio and gradient conversion; screened (inverse
// proportion, horizontal thrust, rise-to-span: 0 hits; Denbighshire used arc/chord/sagitta geometry, not forces).
// Place facts: Nomis Census 2021 TS007A, Windsor and Maidenhead E06000040: total 153,498; 10 to 14 10,486 (6.8%; England
// 6.0%); 20 to 24 6,767 (4.4%; 6.0%); 25 to 29 7,981 (5.2%; 6.6%); 40 to 44 11,230 (7.3%; 6.3%); 45 to 49 11,456 (7.5%;
// 6.4%); 50 to 54 11,709 (7.6%; 6.9%). ONS 2021 BUAs: Maidenhead 67,375; Windsor 31,560; Old Windsor and Wraysbury 7,690;
// Cookham 5,215; Datchet 4,810 (Ascot, Marlow cross the boundary). Bands never summed. No schools named.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'MAIDENHEAD', label: 'Maidenhead', blurb: 'AI and programming classes for Maidenhead, with a project on why Brunel\'s flat brick arches push so hard on their banks.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-maidenhead',
  code: 'mdh',
  accent: '#82158A',
  accentRationale: 'Maidenhead: a bright brick-violet from the solver (6.98:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Maidenhead',
    eyebrow: 'Maidenhead, Berkshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Berkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Berkshire', href: '/coding-classes-in-berkshire' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Maidenhead, England',
  title: 'AI and Programming Classes in Maidenhead | Coding for 6 to 67',
  description: 'Online AI, programming, Python and coding classes for Maidenhead, Windsor and Cookham learners aged 6 to 67, taught live by a real teacher. First lesson free.',
  ogDescription: 'Live online AI and programming classes for Maidenhead, and a Python project on why Brunel\'s flat brick arches over the Thames push twice as hard as tall ones.',
  twitterDescription: 'Maidenhead AI, programming and coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Maidenhead',
    description: 'Online AI, programming, Python, engineering maths and mathematics for children, teenagers and adults in Maidenhead and the Royal Borough of Windsor and Maidenhead, taught live in English.'
  },

  h1: 'AI and programming classes in Maidenhead',
  capsuleQ: 'What are the best AI and programming classes in Maidenhead?',
  capsule: 'Maidenhead is the largest built-up area in the Royal Borough of Windsor and Maidenhead, at 67,375 people in the 2021 census, ahead of Windsor at 31,560. The borough has more secondary-age children than England as a whole (10 to 14 year olds at 6.8 per cent against 6.0) and more parents in their forties. Our India-based teachers cover AI, programming, Python and maths in live video lessons for learners from 6 up to 67, either solo or in level-matched classes of five to ten. A free first lesson settles the starting point. The Maidenhead project stands under Brunel\'s railway bridge. If the learner carries on, a place in a class is USD 100 monthly, while a personal tutor is USD 150 monthly.',
  lead: 'Network Rail\'s history of the Maidenhead Bridge explains a hard brief. The Thames Navigation Commissioners would allow only one pier in the river, so Brunel had to cross with two very wide, very flat brick arches: each spans 128 feet, about 39 metres, but rises only 24 feet, about 7.3 metres. Network Rail says they were the flattest yet widest brick arches in the world when the bridge opened on 1 July 1839, and the railway\'s directors distrusted the design so much that they wanted the timber supports left in. Flat arches really are harder work, because they push outwards on their banks much more strongly than tall ones. How much more? This page\'s project calculates it in Python.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Maidenhead.',

  picks: {
    eyebrow: 'Course picks for Maidenhead',
    h2: 'Starting courses Maidenhead families choose',
    intro: 'Match the course to the learner\'s interests; the first live session of each is free, with no card required.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with bridges, trains and building challenges.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Python programming and beginner AI projects built step by step.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Rigorous secondary maths, from proportion to mechanics-style problems.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Programming in Python for adults, from zero to confident scripts.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Maidenhead today',
      h2: 'A borough of teenagers and working parents',
      intro: 'These are borough-level counts from table TS007A of the 2021 census, via Nomis. We show selected bands only and do not total them.',
      body: [
        { kind: 'table', caption: 'Royal Borough of Windsor and Maidenhead against England, selected ages, 2021 census TS007A', head: ['Ages', 'Borough residents', 'Borough share', 'England share'], rows: [
          ['10 to 14', '10,486', '6.8%', '6.0%'],
          ['20 to 24', '6,767', '4.4%', '6.0%'],
          ['25 to 29', '7,981', '5.2%', '6.6%'],
          ['40 to 44', '11,230', '7.3%', '6.3%'],
          ['45 to 49', '11,456', '7.5%', '6.4%'],
          ['50 to 54', '11,709', '7.6%', '6.9%']
        ] },
        { kind: 'p', text: 'The borough counted 153,498 residents in this table. Its built-up areas include Maidenhead, Windsor, Old Windsor and Wraysbury at 7,690, Cookham at 5,215 and Datchet at 4,810. Secondary-age children and parents in their forties and early fifties stand out; people in their twenties are fewer than average. Pupils here learn under the national curriculum for England, and our calendar bends around every family\'s school breaks.' },
        { kind: 'callout', h3: 'Nearby pages', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-berkshire">Berkshire</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East</a> page indexes the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Maidenhead project',
      h2: 'Flatter arch, bigger push',
      intro: 'Horizontal thrust is inversely proportional to the rise.',
      body: [
        { kind: 'p', text: 'An arch carries weight by pushing sideways as well as down. For a simple arch shaped like a parabola and loaded evenly along its length, engineering textbooks give this sideways push, the horizontal thrust, as the load per metre times the span squared, divided by eight times the rise. The learner codes that formula with an invented load of 100 kilonewtons on every metre of the 39 metre span, then tries different rises. Because the rise sits underneath the fraction, halving the rise doubles the thrust: that is inverse proportion.' },
        { kind: 'table', caption: 'Our arch thrust sums for a 39 metre span with an invented load, 27 September 2026', head: ['Arch in our model', 'Rise', 'Sideways thrust', 'Thrust compared with the downward load'], rows: [
          ['A tall arch', '19.5 m', '975 kN', '0.50 times'],
          ['A medium arch', '12 m', '1,584 kN', '0.81 times'],
          ['Maidenhead\'s rise', '7.3 m', '2,604 kN', '1.34 times'],
          ['Half Maidenhead\'s rise', '3.65 m', '5,209 kN', '2.67 times']
        ] },
        { kind: 'p', text: 'With Maidenhead\'s real proportions, a rise of about one fifth of the span, the sideways push is 2.7 times what a tall arch of the same span would exert, and bigger than the weight each side has to hold up. Every bit of that push has to be resisted by the banks and the single pier, which is why a flat arch needs solid foundations and why doubters wanted the timber left in place. The learner also converts the approach gradient Network Rail quotes: 1 in 1,320 is about 0.076 per cent, a climb of only about 76 centimetres in a kilometre.' },
        { kind: 'p', text: 'The slip to test for is mixing up span and half-span. Some versions of the formula use half the span, and plugging a half-span into a full-span formula gives a thrust four times too small, 651 kilonewtons instead of 2,604, which would make any arch look safe. The learner writes a check that doubling the span quadruples the thrust and halving the rise doubles it. Real bridges carry trains, their own shape and uneven loads, so our numbers show the principle, not the bridge\'s actual forces.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Build card arches of different heights under a small weight, see which spread, then make a Scratch bridge game.' },
          { h3: 'Ages 11 to 15', p: 'Code the thrust formula in Python and print how the push changes as the rise shrinks.' },
          { h3: 'Ages 15 and up', p: 'Plot thrust against rise, show the inverse proportion, and write tests for the span mix-up.' }
        ] },
        { kind: 'callout', h3: 'Network Rail facts, our forces', p: 'Dates, dimensions and the gradient come from Network Rail\'s history page. The load and every force in the table are our own illustration, not calculations for the real bridge.' }
      ]
    },
    {
      id: 'the-bridge', tint: 'deep', eyebrow: 'Why the bridge',
      h2: 'Brunel\'s bridge over the Thames',
      intro: 'What Network Rail\'s history page says.',
      body: [
        { kind: 'table', caption: 'The Maidenhead Bridge, from Network Rail\'s history page', head: ['Detail', 'What the page says'], rows: [
          ['Opened', '1 July 1839'],
          ['Arches', 'Two shallow brick spans, each 128 ft (39 m) wide with a rise of only 24 ft (7.3 m)'],
          ['The brief', 'Only one pier allowed in the river, keeping the channel and towpaths clear'],
          ['Approaches', 'Gradients of only 1 in 1,320, or 0.076 per cent'],
          ['Doubters', 'The railway directors insisted the timber supports stay in place at first'],
          ['Widening', 'Widened on both sides in 1890 to 1892 by Sir John Fowler']
        ] },
        { kind: 'p', text: 'Inverse proportion runs through engineering and computing: the more workers share a task, the less each does; the higher a screen\'s resolution, the smaller each pixel. Structural engineers use software built on formulas like this one every day, checking that a design can carry the forces a clever shape creates. A Maidenhead learner who has watched thrust double as the rise halves understands why the most elegant designs are also the most demanding.' },
        { kind: 'p', text: 'Modern Age Coders is independent of Network Rail, the Science Museum Group and the ONS. Their information is theirs; the arch model and any errors are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From card bridges to engineering code',
    intro: 'Bands are approximate; the free lesson places each learner.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Build and test', p: 'Block coding with building and testing challenges.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Programming basics', p: 'Python with ratios, proportion and formulas.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Maths, AI and physics', p: 'Proportion, mechanics-style problems and AI projects alongside GCSE and A level.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Programming and AI', p: 'Adult Python and practical AI, from basics upwards.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and formulas',
    h2: 'An AI can quote an engineering formula. Will it notice the half-span trap?',
    intro: 'A formula used with the wrong measurement fails without any error message.',
    p1: 'Ask a chatbot for the thrust of an arch and it may give a correct formula but plug in half the span, or mix feet with metres. The answer can be four times too small and still look entirely reasonable.',
    p2: 'A Maidenhead learner who has tested how thrust must change when the span doubles knows to check any formula against a rule it must obey.',
    closer: 'Checking a formula against how it must behave is a strong reason for a Maidenhead teenager to keep learning programming in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'From Cookham to Datchet, live online',
    intro: 'Every town and village in the borough joins by video.',
    cells: [
      { h3: 'Code written by the learner', p: 'Nobody types for the student; the teacher reads their screen and steers with questions.' },
      { h3: 'By year and level', p: 'A Year 5 or a Year 12 starts where their year group and the trial lesson point, with exam board names used.' },
      { h3: 'A free trial', p: 'The first lesson costs nothing and ends with a clear recommendation.' },
      { h3: 'Matched groups', p: 'Classes of five to ten learners at one stage, gathered from across the UK.' },
      { h3: 'In term time', p: 'Two lessons a week during term; holidays kept free.' },
      { h3: 'Local time kept', p: 'Clock changes do not move your lesson; our teachers adjust.' }
    ],
    spec: { title: 'Why the groups are online', p: 'Five learners in the borough at one level and one free hour are rarely neighbours. Online, each learner gets the right group.' }
  },

  fees: {
    h2: 'Fees in Maidenhead',
    intro: 'One flat fee for Maidenhead families, the same one we use in every country outside India.',
    first: 'A full lesson free, followed by honest advice.',
    group: 'Roughly eight live lessons a month with five to ten classmates.',
    private: 'Roughly eight live lessons a month with your own tutor.',
    closer: 'All prices are in US dollars, never sterling. No payment is taken before the free lesson has agreed a course and a time each week. The pricing page sets out what happens with holidays, absences and a switch between group and private.'
  },

  reviewsH2: 'What families say about us on Google',

  book: {
    h2: 'Book a free Maidenhead lesson',
    intro: 'Tell us the learner\'s age or year group and one interest. Sample trials: a Scratch bridge builder, a first Python script, an AI mini-project, or the Brunel arch calculation.',
    success: 'Thank you. Your Maidenhead request has arrived.'
  },

  faq: {
    h2: 'Maidenhead questions',
    intro: 'The town, the bridge project and how classes work.',
    items: [
      { q: 'How many people live in Maidenhead?', a: 'The Maidenhead built-up area had 67,375 residents in the 2021 census, and the whole Royal Borough of Windsor and Maidenhead 153,498.' },
      { q: 'Do you teach AI and programming in Maidenhead?', a: 'Yes. We teach AI, programming, Python and coding live online to Maidenhead learners aged 6 to 67.' },
      { q: 'What is the Maidenhead bridge project?', a: 'Learners code the thrust of an arch in Python and see why Brunel\'s flat arches push about 2.7 times as hard as tall ones of the same span.' },
      { q: 'How flat are the Maidenhead Bridge arches?', a: 'Network Rail gives each span as 128 feet wide with a rise of only 24 feet.' },
      { q: 'When did the Maidenhead Bridge open?', a: 'On 1 July 1839, according to Network Rail.' },
      { q: 'Are the classes held in Maidenhead?', a: 'Teaching is entirely by live video, so Windsor, Cookham or central Maidenhead makes no difference.' },
      { q: 'Can Maidenhead teenagers get GCSE and A level help?', a: 'Maths and computing for exam years, yes; understanding comes first and grades are never guaranteed.' },
      { q: 'What ages can join?', a: 'Six to 67.' },
      { q: 'How much are lessons?', a: 'Zero for the opening session. After that: USD 100 per month for group classes, USD 150 per month for one-to-one.' },
      { q: 'Are there lessons in the holidays?', a: 'No. Send your holiday dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More pages near Maidenhead',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-slough">Slough</a> measures Herschel\'s giant mirror, <a class="cg-inline-link" href="/best-coding-class-in-reading">Reading</a> follows a copied tapestry, and the <a class="cg-inline-link" href="/coding-classes-in-berkshire">Berkshire</a> page covers the county. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Maidenhead and Berkshire',
  footerPlaces: [
    { href: '/coding-classes-in-berkshire', label: 'Berkshire' },
    { href: '/best-coding-class-in-slough', label: 'Slough' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' }
  ],

  personalityCss: `
.cg-root.cg-mdh .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-mdh .cg-hero h1 { font-weight: 700; letter-spacing: -0.023em; line-height: 1.06; }
.cg-root.cg-mdh .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; border-radius: 0 12px 12px 0; }
.cg-root.cg-mdh .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mdh .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.018em; }
.cg-root.cg-mdh .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-mdh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mdh .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-mdh .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-mdh .cg-callout { border-left-width: 6px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Maidenhead (Royal Borough of Windsor and Maidenhead, E06000040). Nomis Census 2021 TS007A: total 153,498; 10 to 14 10,486 (6.8%, England 6.0%); 20 to 24 6,767 (4.4%, 6.0%); 25 to 29 7,981 (5.2%, 6.6%); 40 to 44 11,230 (7.3%, 6.3%); 45 to 49 11,456 (7.5%, 6.4%); 50 to 54 11,709 (7.6%, 6.9%). ONS 2021 BUAs: Maidenhead 67,375; Windsor 31,560; Old Windsor and Wraysbury 7,690; Cookham 5,215; Datchet 4,810. Network Rail, The history of the Maidenhead Bridge: "flattest yet widest brick constructed arches in the world"; "1839 : 1 July, the Maidenhead Bridge is opened"; "widened on both sides by Sir John Fowler" 1890-1892; "allowing only one pier in the river"; "1 in 1,320, or 0.076 percent"; "a rise of only 24ft (7.3 meters) and an unprecedented width of 128ft (39 meters)"; directors "insisted the scaffolding remain in place initially".',
    localProject: 'Parabolic arch, invented w = 100 kN/m, L = 39 m: H = wL^2/(8f), V = wL/2 = 1,950 kN. f 7.3: 2,604 kN (1.34 V); f 19.5: 975 (0.50); f 12: 1,584 (0.81); f 3.65: 5,209 (2.67). Real vs tall 2.67x. 1 in 1,320 = 0.0758%, 0.76 m/km. Half-span slip 651 kN. Lesson family: inverse proportion, arch thrust vs rise.',
    requiredMentions: [
      'Maidenhead Bridge',
      'Network Rail',
      'Brunel',
      'John Fowler',
      'horizontal thrust',
      'Cookham',
      'Datchet',
      '67,375',
      '1 in 1,320'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Windsor and Maidenhead and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Network Rail, The history of the Maidenhead Bridge.', url: 'https://www.networkrail.co.uk/who-we-are/our-history/iconic-infrastructure/the-history-of-the-maidenhead-bridge/' },
      { claim: 'Science Museum Group collection, The Maidenhead Bridge lithograph by J C Bourne, 1846 (co8712933).', url: 'https://collection.sciencemuseumgroup.org.uk/objects/co8712933' }
    ],
    rejectedClaims: [
      'Actual loads and forces in the real bridge: not claimed; the load is invented.',
      'Which account of the scaffolding story is true: not decided; attributed as Network Rail tells it.',
      'Ascot and Marlow built-up areas: cross the boundary, not tabulated.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.',
      'Sterling prices: none.'
    ]
  }
};
