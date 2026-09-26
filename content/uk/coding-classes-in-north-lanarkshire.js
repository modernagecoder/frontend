'use strict';
// North Lanarkshire (cg- council area page, UK cluster Phase 7, row 273). One council. Spine: are two colours that are
// far apart in the computer also easy to tell apart by eye? Anchor (read raw 26 September 2026): Historic Environment
// Scotland LB50013, Category A, Shotts, Calderhead Road, Centrelink 5 (former Cummins Engine Company Ltd): "Ahrends,
// Burton & Koralek, 1975-1983. Ove Arup & Partners"; "Distinctive use of primary colours, coding individual units to
// interior and exterior"; "Various exposed services throughout building, painted yellow, but also green or purple";
// "large yellow-painted crushed-coal silo"; "Red-painted Tubular and lattice 2-panel metal gates"; "INTERIOR: approximately
// 50,000 square meters. Built in 5 main units along E-W axis to accommodate specific production flow"; "possibly
// Scotland's only ergonomic factory building"; "one of most significant and important examples of large industrial
// buildings in later 20th century Britain".
// Our model (scratchpad nlk/colour.py; standard web colours, not the factory's actual paints): RGB Euclidean distance vs
// CIELAB delta E (CIE76), D65, sRGB. grey-teal RGB 128.0, dE 30.5; grey-olive RGB 128.0, dE 58.2; yellow-lime RGB 255.0,
// dE 66.3; lime-cyan RGB 255.0, dE 104.6; blue-navy RGB 127.0, dE 56.9; red-maroon 127.0, 51.4. Closest by RGB:
// yellow-orange 90.0; closest by Lab: grey-teal 30.5, purple-navy 34.8, green-olive 39.8. Five colours from 13: greedy in
// RGB (red, cyan, green, yellow, blue) min dE 74.1; greedy in Lab (red, blue, lime, teal, purple) 74.2; exhaustive over
// 1,287 five-colour sets, best (red, blue, lime, cyan, olive) 85.8. WCAG contrast: black on yellow 19.56, white on yellow
// 1.07; black on red 5.25, white on red 4.00; white on blue 8.59; white on green 5.14; white on purple 9.42.
// Lesson family: colour spaces, perceptual distance, greedy vs exhaustive, contrast ratio; screened (colour space, RGB to,
// CIELAB: 0 hits). No colour-vision-deficiency (health) content.
// Place facts: NRS, Scotland's Census 2022 rounded estimates: North Lanarkshire S12000050 341,000; 151,400 households;
// 725.5 per square kilometre; 0 to 14 56,200 (16.5 per cent), 65+ 61,000 (17.9 per cent) by our addition. NRS mid-2020
// localities. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'NORTH LANARKSHIRE', blurb: 'Cumbernauld, Coatbridge, Airdrie, Motherwell and Wishaw, and a Shotts factory lesson on colour codes that computers misjudge.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-north-lanarkshire',
  code: 'nlk',
  accent: '#8A1524',
  accentRationale: 'North Lanarkshire: a signal red for the listing\'s red-painted factory gates, picked by the solver (7.65:1 on the darkest paper tint) and bluer than the Clackmannanshire and Fife reds',
  pageType: 'governorate',
  place: {
    name: 'North Lanarkshire',
    eyebrow: 'North Lanarkshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Glasgow', href: '/best-coding-class-in-glasgow' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'North Lanarkshire',
  title: 'Coding Classes in North Lanarkshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across North Lanarkshire, from Cumbernauld, Coatbridge and Airdrie to Motherwell, Wishaw and Bellshill.',
  ogDescription: 'Coding classes for all of North Lanarkshire, and a Shotts factory project: colour-code five units in Python and learn why RGB distance fools the eye.',
  twitterDescription: 'North Lanarkshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for North Lanarkshire',
    description: 'Ability-placed online coding, Python, colour and design maths and mathematics for children, teenagers and adults across North Lanarkshire, taught live in English.'
  },

  h1: 'Coding classes in North Lanarkshire',
  capsuleQ: 'What are the best coding classes in North Lanarkshire?',
  capsule: 'North Lanarkshire is one of Scotland\'s most populous council areas, with about 341,000 residents in roughly 151,400 households at the 2022 census, at 725.5 people per square kilometre. It has several large towns rather than one centre: Cumbernauld, Coatbridge, Airdrie, Motherwell and Wishaw each have more than 30,000 people, with Bellshill, Viewpark and Kilsyth next. All teaching is live on video from India, and a free first lesson settles each learner\'s starting stage, whether P1, S6 or adult. Learners aged 6 to 67 study coding, Python and maths one-to-one or in groups of five to ten. The North Lanarkshire project comes from a remarkable factory in Shotts. Carry on after that and a shared class is USD 100 per month, while a private teacher is USD 150 per month.',
  lead: 'In Shotts, Historic Environment Scotland lists a former Cummins diesel engine factory at Category A, calling it one of the most significant large industrial buildings of later 20th century Britain. The architects, Ahrends, Burton and Koralek, laid it out as five main units along the production line, and the listing notes their distinctive use of primary colours to code individual units, with exposed services painted yellow, green or purple. Colour coding only works if every colour is easy to tell from every other. A computer stores colours as three numbers, red, green and blue, and it is tempting to measure how different two colours are by the distance between those numbers. This page\'s project tests that idea in Python and finds it misleads.',
  wa: 'Hello Modern Age Coders, we are in North Lanarkshire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for North Lanarkshire',
    h2: 'How North Lanarkshire learners usually begin',
    intro: 'A P2 pupil in Wishaw who loves drawing, a P6 in Cumbernauld ready to type code, an S3 in Coatbridge interested in design, an adult in Motherwell building a portfolio. Each starts with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 11', note: 'Scratch projects with colour, costumes and effects controlled by code.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 13', note: 'A first typed language, including programs that mix and compare colours.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 12 to 18', note: 'Complete Python for teenagers, from lists and loops to image and colour work.' },
      { course: 'full-stack-web-development-masterclass-college', band: 'Adults', note: 'Web development for adults, where colour, contrast and accessibility matter every day.' }
    ]
  },

  sections: [
    {
      id: 'north-lanarkshire', tint: '', eyebrow: 'North Lanarkshire by numbers',
      h2: 'About 341,000 people in North Lanarkshire',
      intro: 'The 341,000 is a 2022 census figure, rounded by National Records of Scotland; the town list below uses a different NRS series dated mid-2020, so the two should not be added together.',
      body: [
        { kind: 'table', caption: 'North Lanarkshire localities above 6,500 people, NRS mid-2020 estimates', head: ['Locality', 'Residents', 'Locality', 'Residents'], rows: [
          ['Cumbernauld', '50,530', 'Viewpark', '15,830'],
          ['Coatbridge', '43,950', 'Kilsyth', '10,380'],
          ['Airdrie', '36,390', 'Shotts', '8,630'],
          ['Motherwell', '32,840', 'Chapelhall', '7,140'],
          ['Wishaw', '30,050', 'Moodiesburn', '6,830'],
          ['Bellshill', '19,700', 'Newarthill', '6,720']
        ] },
        { kind: 'p', text: 'North Lanarkshire has 725.5 residents per square kilometre, more than ten times Scotland\'s 69.8. It is also one of the younger council areas: our sums of the census age bands give 16.5 per cent of residents under 15, above the Scottish 15.3, and 17.9 per cent aged 65 or over, below Scotland\'s 20.1. New Stevenston is the next locality after the table. North Lanarkshire Council sets the school terms; we have not read them, so each family tells us its own dates.' },
        { kind: 'callout', h3: 'Glasgow and the exams', p: 'The city has its own <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> page. For qualifications, see <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a> and <a class="cg-inline-link" href="/national-5-maths-tuition-online">National 5 Maths</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The North Lanarkshire project',
      h2: 'Five units, five colours, one misleading distance',
      intro: 'Red, green and blue numbers, a better colour space, and a check on readable signs.',
      body: [
        { kind: 'p', text: 'The learner starts with thirteen standard web colours, each stored as three numbers from 0 to 255 for red, green and blue. Treating those as a point in a cube, the obvious measure of difference is the straight-line distance between two points. Then the learner converts each colour into CIELAB, a colour space designed so that equal distances look roughly equally different to a human eye, and measures again. The colours are standard ones chosen for the exercise, not the factory\'s actual paints.' },
        { kind: 'table', caption: 'Our colour distances, RGB cube versus CIELAB, 26 September 2026', head: ['Pair', 'RGB distance', 'CIELAB difference', 'What it means'], rows: [
          ['Grey and teal', '128', '30.5', 'Close to the eye'],
          ['Grey and olive', '128', '58.2', 'Twice as distinct'],
          ['Yellow and lime', '255', '66.3', 'Quite similar'],
          ['Lime and cyan', '255', '104.6', 'Very different'],
          ['Blue and navy', '127', '56.9', 'Clearly different']
        ] },
        { kind: 'p', text: 'RGB distance says grey is exactly as far from teal as from olive, 128 either way. CIELAB says teal is only about half as distinct as olive, which the learner can judge by putting the two pairs side by side. Yellow and lime sit as far apart in RGB as lime and cyan, yet look much more alike. The reason is that the eye is far more sensitive to some changes than others, while RGB treats every step of every channel as equal.' },
        { kind: 'p', text: 'Next the learner picks five colours for five factory units, trying to make the closest pair as different as possible. A greedy method, adding at each step whichever colour is furthest from those already chosen, reaches a smallest CIELAB difference of 74.2. Checking all 1,287 possible five-colour sets finds a better answer, red, blue, lime, cyan and olive, at 85.8: greedy is fast, not guaranteed. Finally, labels must be readable. The WCAG contrast ratio, used by web designers, gives white text on yellow just 1.07 to 1, almost invisible, against 19.56 to 1 for black on yellow. White on red scores 4.00, below the 4.5 usually recommended for normal text.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Mix colours in Scratch with number sliders, then test friends on which pairs look most alike.' },
          { h3: 'Ages 11 to 15', p: 'Compute RGB distances between colours in Python and find pairs that the numbers get wrong.' },
          { h3: 'Ages 15 and up', p: 'Convert to CIELAB, compare greedy and exhaustive choices of five colours, and add the contrast ratio check.' }
        ] },
        { kind: 'callout', h3: 'A real listing, standard colours', p: 'The factory facts come from Historic Environment Scotland. The thirteen colours are standard web colours, and every distance and ratio in the table comes from our own program; none describe the paints actually used at Shotts.' }
      ]
    },
    {
      id: 'shotts', tint: 'deep', eyebrow: 'Why the Shotts factory',
      h2: 'A Category A engine works',
      intro: 'What Historic Environment Scotland records.',
      body: [
        { kind: 'table', caption: 'Centrelink 5, former Cummins Engine Company, Shotts, HES listing LB50013', head: ['Listing detail', 'What it records'], rows: [
          ['Design', 'Ahrends, Burton and Koralek, 1975 to 1983, with Ove Arup and Partners'],
          ['Size', 'Approximately 50,000 square metres inside'],
          ['Layout', 'Five main units along an east to west axis, following the production flow'],
          ['Colour', 'Primary colours coding individual units; services painted yellow, green or purple'],
          ['Details', 'A yellow-painted silo and red-painted tubular and lattice gates'],
          ['Significance', 'Possibly Scotland\'s only ergonomic factory building']
        ] },
        { kind: 'p', text: 'Colour decisions made in code are everywhere: charts and dashboards, maps, game interfaces, warning lights and every website. Choosing colours that people can actually tell apart, and text that people can actually read, is now a routine part of software work. A North Lanarkshire student who has caught RGB distance lying knows to measure the way people see.' },
        { kind: 'p', text: 'We have no connection with Historic Environment Scotland, the building\'s owners or North Lanarkshire Council. The listing facts are theirs; the colour calculations and any errors are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From colour sliders to colour science',
    intro: 'The free lesson decides the real starting point; stages are a guide.',
    cols: [
      { band: 'P1 to P4', h3: 'Colours and effects', p: 'Block coding with colours, costumes and simple animations.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'P5 to S2', h3: 'Numbers behind colour', p: 'Typed Python using RGB values, lists and comparisons.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'S3 to S6', h3: 'Design and data', p: 'Colour spaces, charts and larger programs beside National 5, Higher and Advanced Higher courses.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Web and visual work', p: 'Web development and data visualisation for adults.', courses: ['full-stack-web-development-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and design',
    h2: 'An AI can choose a colour palette in seconds. Will people be able to read it?',
    intro: 'Pleasant-looking colours can still fail the test that matters.',
    p1: 'Ask a chatbot for five colours for a dashboard or a map and it will offer something attractive. Whether the closest two can be told apart, or whether white labels on the yellow one can be read at all, usually goes unchecked unless you ask.',
    p2: 'A North Lanarkshire learner who has computed CIELAB differences and contrast ratios can check a palette in seconds instead of trusting it. That is the kind of verification every AI-generated design needs.',
    closer: 'Measuring whether a design really works for the people using it is the reason a North Lanarkshire teenager should still learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'From Cumbernauld to Shotts, lessons at home',
    intro: 'Busy towns and smaller villages across North Lanarkshire join in the same way.',
    cells: [
      { h3: 'Hands on the keyboard', p: 'Learners write and run their own code; the teacher watches the shared screen and helps at the right moment.' },
      { h3: 'P, S and National 5, not years', p: 'Teachers use the Curriculum for Excellence stages that Motherwell and Airdrie schools use, from P1 to Advanced Higher, and teach in English.' },
      { h3: 'A free first lesson', p: 'A proper lesson at no cost, then a clear suggestion for what to take next.' },
      { h3: 'Groups by stage', p: 'Five to ten learners at one stage in each group, with classmates from other countries.' },
      { h3: 'Term time only', p: 'Twice weekly in term, stopping for the school holidays.' },
      { h3: 'UK time that does not shift', p: 'Once booked, your lesson stays at its UK time across the clock changes; our India time teachers adjust.' }
    ],
    spec: { title: 'Why stage matters more than town', p: 'Even in a town the size of Cumbernauld, five learners at one stage free at one time are hard to find. Grouping by stage across a wider pool places a pupil from Chapelhall or Newarthill in a class that fits.' }
  },

  fees: {
    h2: 'Fees in North Lanarkshire',
    intro: 'Airdrie or Kilsyth, the fee is the same, and it matches what we charge in every country outside India.',
    first: 'One full lesson for free, then our recommendation.',
    group: 'About eight lessons a month in a group of five to ten at one stage.',
    private: 'About eight lessons a month with your own teacher.',
    closer: 'Fees are in US dollars, and there is no sterling price list. No money changes hands until the trial lesson has fixed a course and a weekly slot. Holiday breaks, missed sessions and swaps between formats are covered on our pricing page.'
  },

  reviewsH2: 'Google reviewers on our lessons',

  book: {
    h2: 'Book a free North Lanarkshire lesson',
    intro: 'Who is learning, how old are they or what stage are they in, and what do they enjoy? With that we might open with a Scratch animation, a Python program, or the colour project on this page.',
    success: 'Thank you. Your North Lanarkshire request has been received.'
  },

  faq: {
    h2: 'North Lanarkshire questions',
    intro: 'The council area, the colour project and practical details.',
    items: [
      { q: 'What is the population of North Lanarkshire?', a: 'The 2022 census, rounded by NRS, puts it at roughly 341,000 residents in about 151,400 households.' },
      { q: 'What are the biggest towns in North Lanarkshire?', a: 'NRS mid-2020 estimates: Cumbernauld 50,530, Coatbridge 43,950, Airdrie 36,390, Motherwell 32,840 and Wishaw 30,050.' },
      { q: 'What is the Shotts colour project?', a: 'Learners compare how different colours are in RGB numbers and in CIELAB, find pairs RGB gets badly wrong, choose five distinct colours greedily and exhaustively, and check label contrast.' },
      { q: 'What is CIELAB?', a: 'A way of describing colours designed so that equal distances between them look roughly equally different to people, unlike raw red, green and blue numbers.' },
      { q: 'What is the Cummins factory in Shotts?', a: 'A former diesel engine plant by Ahrends, Burton and Koralek, built 1975 to 1983 and listed at Category A by Historic Environment Scotland, noted for colour-coding its units.' },
      { q: 'Do lessons take place in person?', a: 'Never in a hall or centre. A pupil in Bellshill and one in Kilsyth both open the same video link from home.' },
      { q: 'Do you teach National 5 Computing Science?', a: 'Yes, and Higher too, along with maths at both levels. We teach understanding and never promise grades.' },
      { q: 'What ages can join?', a: 'Ages 6 to 67: blocks for young children, Python and exam maths in secondary, and web or Python courses for adults.' },
      { q: 'What does it cost?', a: 'Zero for the trial lesson; then USD 100 monthly in a group of five to ten, or USD 150 monthly on your own with a teacher.' },
      { q: 'What happens in the school holidays?', a: 'We break when your school breaks. Forward the dates North Lanarkshire Council gives your school and those weeks stay lesson-free.' }
    ]
  },

  next: {
    eyebrow: 'More nearby',
    h2: 'Pages around North Lanarkshire',
    html: 'Our <a class="cg-inline-link" href="/coding-classes-in-falkirk">Falkirk</a> page grows seeds at the golden angle, <a class="cg-inline-link" href="/coding-classes-in-east-dunbartonshire">East Dunbartonshire</a> splits a long walk into fair days, and <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> has its own city page. Every other council is on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'North Lanarkshire and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-coding-class-in-glasgow', label: 'Glasgow' },
    { href: '/national-5-computing-science-help', label: 'National 5 Computing Science' }
  ],

  personalityCss: `
.cg-root.cg-nlk .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-nlk .cg-hero h1 { font-weight: 780; letter-spacing: -0.03em; line-height: 1.02; }
.cg-root.cg-nlk .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-nlk .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-nlk .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.021em; }
.cg-root.cg-nlk .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-nlk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nlk .cg-table th { letter-spacing: 0.06em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-nlk .cg-ladder-col { border-top: 6px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-nlk .cg-callout { border-left-width: 6px; border-radius: 0 3px 3px 0; }
`,

  dossier: {
    curriculumAuthority: 'North Lanarkshire (S12000050), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 341,000 (females 175,200, males 165,800); households 151,400; density 725.5 per square kilometre (Scotland 69.8); ages 0 to 14 56,200 (16.5 per cent), 65+ 61,000 (17.9 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Cumbernauld 50,530; Coatbridge 43,950; Airdrie 36,390; Motherwell 32,840; Wishaw 30,050; Bellshill 19,700; Viewpark 15,830; Kilsyth 10,380; Shotts 8,630; Chapelhall 7,140; Moodiesburn 6,830; Newarthill 6,720; New Stevenston 6,070. HES LB50013 (Category A, added 18/11/2004), Shotts, Calderhead Road, Centrelink 5 (former Cummins Engine Company Ltd): "Ahrends, Burton & Koralek, 1975-1983. Ove Arup & Partners"; "Distinctive use of primary colours, coding individual units to interior and exterior"; "Various exposed services throughout building, painted yellow, but also green or purple"; "large yellow-painted crushed-coal silo"; "Red-painted Tubular and lattice 2-panel metal gates"; "approximately 50,000 square meters. Built in 5 main units along E-W axis to accommodate specific production flow"; "possibly Scotland\'s only ergonomic factory building"; "one of most significant and important examples of large industrial buildings in later 20th century Britain".',
    localProject: 'Thirteen standard web colours (plus black and white for contrast). RGB Euclidean vs CIELAB CIE76 dE (sRGB, D65). grey-teal 128.0/30.5; grey-olive 128.0/58.2; yellow-lime 255.0/66.3; lime-cyan 255.0/104.6; blue-navy 127.0/56.9; red-maroon 127.0/51.4. Greedy RGB 5-set min dE 74.1; greedy Lab 74.2; exhaustive 1,287 sets best 85.8 (red, blue, lime, cyan, olive). WCAG: black/yellow 19.56, white/yellow 1.07, black/red 5.25, white/red 4.00, white/blue 8.59, white/green 5.14, white/purple 9.42. Page says colours are not the factory paints. Lesson family: colour spaces, perceptual distance, greedy vs exhaustive, contrast.',
    requiredMentions: [
      '341,000',
      '151,400',
      '725.5',
      'Cumbernauld',
      'Coatbridge',
      'Airdrie',
      'Motherwell',
      'Wishaw',
      'Bellshill',
      'Viewpark',
      'Kilsyth',
      'Shotts',
      'LB50013',
      'CIELAB'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Historic Environment Scotland, LB50013: Shotts, Centrelink 5 (former Cummins Engine Company Ltd).', url: 'https://portal.historicenvironment.scot/designation/LB50013' }
    ],
    rejectedClaims: [
      'The actual paint colours used at Shotts: not in the listing beyond names; not claimed.',
      'Colour-vision deficiency statistics or simulation: health content, excluded.',
      'Current use or occupants of the building: not claimed.',
      'Antonine Wall and Cumbernauld town centre facts: not researched for this page.',
      'Named North Lanarkshire schools and school term dates: none named or read.',
      'That North Lanarkshire is the most populous council after any other: not claimed; page says one of the most populous.'
    ]
  }
};
