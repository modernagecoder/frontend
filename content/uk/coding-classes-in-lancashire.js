'use strict';
// Lancashire (cg- county index, UK cluster Phase 7, row 237). Ceremonial county: Lancashire County Council's twelve
// districts plus the unitaries Blackpool and Blackburn with Darwen. Spine: drawing a picture with lamps that are only
// on or off. Visit Blackpool pages read raw 26 September 2026: Illuminations page ("six miles of traditional festoons,
// tableaux and interactive features"; 2026 season Friday 4 September to Sunday 3 January 2027, "from Starr Gate to Red
// Bank Road"); 25 facts page (1879 "just eight arc lamps"; May 1912 displays for Princess Louise's royal visit; animated
// tableaux by 1932; "one million lamps of various types and styles, and more than 100 miles of festoon"; "micro
// controllers, LEDs, lasers and video"; "more than 500 designs and features"; Lightworks depot, twenty staff all year).
// Our model (scratchpad lan/dither.py, deterministic): a 48 x 96 grid of on/off lamps (4,608) showing a smooth
// gradient of our own, mean brightness 0.3665 (1,689 lamps' worth). Two levels: nearest-level threshold lights 1,008,
// per-lamp error 0.308, error after a 5 x 5 blur 0.293, and leaves 48 of 96 columns fully dark; Bayer 4 x 4 ordered
// lights 1,548, per-lamp 0.400, blurred 0.0563; Floyd-Steinberg lights 1,679, per-lamp 0.405, blurred 0.0280. Four
// levels: threshold blurred 0.0769, Bayer 0.0162, Floyd-Steinberg 0.0094.
// Lesson family: dithering / error diffusion, and choosing the error measure that matches what the viewer sees;
// screened (dither, Floyd-Steinberg, error diffusion, halftone, Illuminations: 0 hits).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 for the fourteen councils (our sum 1,531,128);
// ONS built-up areas, published figures checked against our OA sums (Southport and Orrell straddle the edge and are left
// out). blackpool.gov.uk Illuminations URL 404. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'LANCASHIRE', blurb: 'Fourteen councils from the Fylde coast to the Pennine towns, and a Blackpool lesson in drawing a picture with lamps that are only on or off.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-lancashire',
  code: 'lcr',
  accent: '#8A1563',
  accentRationale: 'Lancashire: a deep red-rose magenta from the solver (7.15:1 on the darkest paper tint), well clear of the Dorset and Greater Manchester reds',
  pageType: 'governorate',
  place: {
    name: 'Lancashire',
    eyebrow: 'Lancashire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'North West England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Preston', href: '/best-coding-class-in-preston' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Lancashire',
  title: 'Coding Classes in Lancashire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Lancashire, from Blackpool, Blackburn and Preston to Burnley, Lancaster, Chorley, Leyland and Accrington.',
  ogDescription: 'Coding classes for all of Lancashire, and a Blackpool project: light a picture with lamps that are only on or off, and find out why the most accurate lamp-by-lamp answer looks worst.',
  twitterDescription: 'Lancashire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Lancashire',
    description: 'Ability-placed online coding, Python, game making, AI and mathematics for children, teenagers and adults across Lancashire, taught live in English.'
  },

  h1: 'Coding classes in Lancashire',
  capsuleQ: 'What are the best coding classes in Lancashire?',
  capsule: 'Lancashire is fourteen councils: the twelve districts of Lancashire County Council plus Blackpool and Blackburn with Darwen. At the 2021 Census they held 1,531,128 people between them, by our own addition of the fourteen published counts. Blackpool and Blackburn are the two largest towns, then Preston, Burnley and Lancaster. Our teachers work live over video from India, and we put each learner in a class by what they can already do, not by the year on their birth certificate. Anyone aged 6 to 67 is welcome, in groups of five to ten or one-to-one, for coding, Python, game making, AI and maths. The Lancashire project comes from the Blackpool Illuminations. The first lesson costs nothing; after that a group place is USD 100 a month and private teaching USD 150 a month.',
  lead: 'Visit Blackpool says the Illuminations began in 1879 with "just eight arc lamps" on the Promenade, and that today the display uses "one million lamps of various types and styles". Every picture in a tableau is built from lamps, and a lamp that can only be on or off cannot show a gentle sunset directly. Something has to decide which lamps to light. This page\'s project hands that decision to Python, tries three ways of making it, and measures the results two ways. The method that is most accurate lamp by lamp turns out to be the one that looks worst from the Promenade, which is a lesson about measuring the right thing that reaches far beyond lights.',
  wa: 'Hello Modern Age Coders, we are in Lancashire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Lancashire',
    h2: 'Where Lancashire learners usually start',
    intro: 'A nine-year-old in Chorley who draws pixel characters, a Year 8 in Burnley who likes puzzles with numbers, a Year 12 in Lancaster curious about how computers see pictures, and a parent in Blackpool retraining at the kitchen table. Each begins with a free lesson.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Scratch games first, then Roblox and Minecraft worlds, with a unit on pixel art in Piskel and colour for games.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths learned by programming it, so averages, fractions and grids become Python projects.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Python to real machine learning, including computer vision that starts from how a computer turns pixels into features.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from a first line to advanced projects, for adults learning around work and family.' }
    ]
  },

  sections: [
    {
      id: 'lancashire', tint: '', eyebrow: 'Lancashire in figures',
      h2: '1,531,128 people across fourteen councils',
      intro: 'Council counts are from the 2021 Census on Nomis; the county total is our sum of them. Towns are ONS built-up areas, each compared with our own addition of census output areas.',
      body: [
        { kind: 'table', caption: 'The twelve largest built-up areas wholly inside Lancashire, 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Blackpool', '149,070', 'Lytham St Anne\'s', '42,695'],
          ['Blackburn', '124,955', 'Bamber Bridge', '40,360'],
          ['Preston', '94,490', 'Chorley', '39,535'],
          ['Burnley', '78,255', 'Leyland', '39,295'],
          ['Lancaster', '52,655', 'Skelmersdale', '34,915'],
          ['Fulwood', '34,690', 'Accrington', '34,895']
        ] },
        { kind: 'p', text: 'The ONS draws its town lines tightly, so Fulwood is counted apart from Preston, and Bamber Bridge and Leyland are separate places too. Southport and Orrell are left off the table because most of their people live over the county edge in Merseyside. Among the councils, Blackburn with Darwen is the largest at 154,738 and Ribble Valley the smallest at 61,561. Further down the list come Morecambe, Nelson, Darwen, Ormskirk, Fleetwood, Rawtenstall, Colne and Clitheroe, each with its own schools and its own handful of keen young programmers. Lancashire County Council and the two unitary councils set their own school calendars, which we did not read, so breaks are agreed with each family.' },
        { kind: 'callout', h3: 'City pages inside the county', p: 'Two Lancashire cities already have their own pages: <a class="cg-inline-link" href="/best-coding-class-in-preston">Preston</a> and <a class="cg-inline-link" href="/best-coding-class-in-lancaster">Lancaster</a>. This page covers everyone else, from the Fylde coast to Pendle and Rossendale.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Lancashire project',
      h2: 'Drawing a sunset with lamps that are only on or off',
      intro: 'A model tableau of 4,608 lamps, three ways to choose which ones to light, and two ways to score them.',
      body: [
        { kind: 'p', text: 'The learner builds a grid of 48 rows by 96 lamps, 4,608 in all, and paints on it a smooth picture of our own that runs from dim on the left to bright on the right. Averaged over the whole grid the picture is 36.65 per cent bright, so a faithful version should light about 1,689 lamps. Three methods then decide which lamps go on. The simplest rounds each lamp to the nearer of on or off. The second compares each lamp with a fixed repeating four-by-four pattern, the Bayer ordered method. The third, Floyd-Steinberg error diffusion, rounds a lamp and then hands its rounding error to the four neighbours still to be decided, in shares of 7, 5, 3 and 1 sixteenths.' },
        { kind: 'table', caption: 'Our model tableau, two brightness levels (off or on): results computed 26 September 2026', head: ['Method', 'Lamps lit (target about 1,689)', 'Average error per lamp', 'Error seen from a distance'], rows: [
          ['Round each lamp', '1,008', '0.308', '0.293'],
          ['Bayer ordered pattern', '1,548', '0.400', '0.056'],
          ['Floyd-Steinberg', '1,679', '0.405', '0.028']
        ] },
        { kind: 'p', text: 'The surprise sits in the third column. Judged lamp by lamp, simple rounding wins easily. Yet it lights only 1,008 lamps where about 1,689 were needed, and in our run every lamp in the left half of the picture stays dark: 48 of the 96 columns vanish. The last column measures what a person standing back actually sees, by blurring each lamp with its neighbours over a five-by-five patch before comparing. On that measure Floyd-Steinberg is about ten times closer than rounding, and it lights 1,679 lamps, within ten of the target.' },
        { kind: 'p', text: 'The learner then gives each lamp four brightness levels instead of two, as a dimmer would. Everything improves, but the order holds: seen from a distance, rounding scores 0.077, the Bayer pattern 0.016 and Floyd-Steinberg 0.009. The real lesson is not about lights. Whichever error you choose to measure decides which method wins, so the first job is to measure the error that matters to the person looking.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 12', p: 'Colour a squared grid with a felt pen, first by rounding and then by passing the leftover along the row, and hold both at arm\'s length.' },
          { h3: 'Ages 12 to 15', p: 'Store a picture as a list of lists in Python, write the rounding and error-passing rules, and count how many lamps each one lights.' },
          { h3: 'Ages 15 and up', p: 'Add the Bayer matrix, write the blur, score all three methods both ways, and explain in writing why the rankings flip.' }
        ] },
        { kind: 'callout', h3: 'What is real and what is ours', p: 'The dates and numbers about the Illuminations come from Visit Blackpool. The grid, the picture and every result in the table are our own teaching model. We do not know how the Illuminations team designs its tableaux and make no claim that it uses any of these methods.' }
      ]
    },
    {
      id: 'illuminations', tint: 'deep', eyebrow: 'Why Blackpool',
      h2: 'From eight arc lamps to a million, along the Promenade',
      intro: 'The Lancashire link, in Visit Blackpool\'s own facts.',
      body: [
        { kind: 'table', caption: 'The Blackpool Illuminations, as Visit Blackpool describes them', head: ['When or what', 'Visit Blackpool says'], rows: [
          ['1879', 'Visitors first came to see the lights, when just eight arc lamps lit the Promenade.'],
          ['May 1912', 'The first displays close to today\'s were staged for the first royal visit, by Princess Louise.'],
          ['By 1932', 'Animated tableaux had been added, on the cliffs between North Shore and Bispham.'],
          ['Today', 'One million lamps of many types, more than 100 miles of festoon, and more than 500 designs and features.'],
          ['Technology', 'Micro controllers, LEDs, lasers and video have been added to the display.'],
          ['2026 season', 'From Friday 4 September to Sunday 3 January 2027, along the route from Starr Gate to Red Bank Road.']
        ] },
        { kind: 'p', text: 'Visit Blackpool also describes Lightworks, the Illuminations depot, where twenty staff work all year on design, building, maintenance and storage. A display that grew from eight lamps to a million, now run by micro controllers, is a fine place for a Lancashire student to ask how a machine turns a picture into instructions for individual lights. The same question sits behind printed newspaper photographs, old computer screens with sixteen colours, and the tiny images a phone sends when the signal is poor.' },
        { kind: 'p', text: 'Modern Age Coders has no link with the Blackpool Illuminations, Visit Blackpool, Blackpool Council or Lancashire County Council. The facts quoted belong to their sources; the model tableau, its numbers and any mistakes are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/coding-classes-in-cumbria">Cumbria</a> lies to the north and <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a> to the south, with <a class="cg-inline-link" href="/best-coding-class-in-liverpool">Liverpool</a> across the Merseyside border.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From pixel art to computers that see',
    intro: 'The free lesson settles where a learner starts. Age suggests a stage; what they can do decides it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Pictures and games', p: 'Block coding with sprites, colours and simple games, where a grid of squares first becomes a picture.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 8 to 13', h3: 'Worlds and numbers', p: 'Game making in Scratch, Roblox and Minecraft, alongside Python that handles grids, averages and counts.', courses: ['game-development-masterclass-for-kids', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Images as data', p: 'Python that treats a picture as numbers, then machine learning and computer vision built on that idea.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Skills for work', p: 'Python from the start and on to automation and data, for adults building a new skill in the evenings.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and measuring the right thing',
    h2: 'Ask an AI for the most accurate version. Accurate by which measure?',
    intro: 'A tool optimises the score it is given. Choosing the score is a human job.',
    p1: 'Ask an assistant for the most accurate way to show a picture on lamps that are only on or off, and rounding each lamp is a natural answer, because it gives the smallest error lamp by lamp. In our model that answer blacks out half the picture. The method that looks right from a distance scores worse on the per-lamp measure, so a tool judged only by that measure would keep choosing the wrong one.',
    p2: 'Machine learning runs on the same choice. Every model is trained to reduce some error, and a model can score well on the error it was given while failing at what people actually wanted. A Lancashire student who has watched the rankings flip between two scores learns to ask what a number measures before trusting it.',
    closer: 'So a young person in Lancashire should learn to code in 2026 to be the one who chooses what an AI is asked to get right.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'Morecambe Bay to the Pennine towns, from one laptop',
    intro: 'A county this wide has long evening journeys between towns. Online lessons skip them all.',
    cells: [
      { h3: 'From any Lancashire home', p: 'A back bedroom in Accrington, a dining table in Ormskirk, a study in Clitheroe. The teacher shares a screen and the learner writes the code.' },
      { h3: 'The English school words', p: 'Key stages, year groups, GCSEs and A levels are used exactly as Lancashire schools use them, and every lesson is in English.' },
      { h3: 'First lesson on us', p: 'A real lesson with real work, followed by a straight answer about level and course. We never ask for card details at this point.' },
      { h3: 'Peers at your stage', p: 'Groups of five to ten who are at the same point, drawn from Lancashire, the rest of the UK and further away.' },
      { h3: 'Your breaks, your calendar', p: 'Most learners take two lessons a week, and we pause for whatever holidays your school sets.' },
      { h3: 'Times set in UK time', p: 'Lesson times are fixed in UK time all year, and the teacher in India time, several hours ahead, adjusts when the UK clocks change.' }
    ],
    spec: { title: 'Why levels matter more than towns', p: 'Even a large town rarely has five learners at exactly the same stage who are free on the same evening. Grouping by level lets a learner in Bacup or Fleetwood join a class that fits.' }
  },

  fees: {
    h2: 'Fees in Lancashire',
    intro: 'Skelmersdale or Colne, the price does not change, and it is the same outside India wherever you live.',
    first: 'One complete lesson with real work, then our honest view of the right level and course.',
    group: 'Roughly eight lessons each month, in a group of five to ten at one level.',
    private: 'Roughly eight lessons each month, with a teacher to themselves.',
    closer: 'We quote and bill in US dollars and do not publish prices in pounds. Billing only starts once the free lesson has settled a course and a weekly slot; the pricing page covers pauses, missed lessons and moving between group and private classes.'
  },

  reviewsH2: 'Google reviews from families we teach',

  book: {
    h2: 'Book a free Lancashire lesson',
    intro: 'Tell us an age or school year and what the learner enjoys. A first lesson might be a Scratch game, a Python grid, or the lamp picture on this page.',
    success: 'Thank you. We have your Lancashire request.'
  },

  faq: {
    h2: 'Lancashire questions',
    intro: 'The county, the Blackpool project and the practical side.',
    items: [
      { q: 'How many people live in Lancashire?', a: 'The fourteen councils of ceremonial Lancashire had 1,531,128 usual residents at the 2021 Census, by our own sum of the ONS figures on Nomis.' },
      { q: 'What are the largest towns in Lancashire?', a: 'By ONS built-up area: Blackpool 149,070, Blackburn 124,955, Preston 94,490, Burnley 78,255 and Lancaster 52,655.' },
      { q: 'What is the Blackpool project?', a: 'Learners draw a picture on a grid of 4,608 on-or-off lamps, compare rounding, the Bayer pattern and Floyd-Steinberg error diffusion, and find that the method with the smallest error per lamp looks worst from a distance.' },
      { q: 'What is error diffusion?', a: 'A way to reduce a picture to a few levels. Each lamp or pixel is rounded, and the amount it was rounded by is shared among neighbours not yet decided, so the overall brightness stays close to the original.' },
      { q: 'Do the Illuminations use this method?', a: 'We do not know and do not claim so. The Illuminations are the inspiration; the grid and the results are our own teaching model.' },
      { q: 'Do you have a centre in Lancashire?', a: 'No. We teach only live online, so learners anywhere in the county join from home.' },
      { q: 'What ages can join?', a: 'From 6 to 67. Young children start with block coding and games, most move to typed Python by about ten, teenagers take Python, AI or maths further, and adults choose Python or data. The free lesson settles the level.' },
      { q: 'Can a teenager learn AI and computer vision?', a: 'Yes. The teen AI and machine learning course goes from Python to real models, including computer vision that begins with how pixels become features.' },
      { q: 'How much do lessons cost?', a: 'Nothing for the first lesson. After that, a group place is USD 100 a month and one-to-one teaching is USD 150 a month, with no joining fee and no contract.' },
      { q: 'Do lessons follow Lancashire school holidays?', a: 'Lancashire County Council, Blackpool, Blackburn with Darwen and academy trusts each set dates. Tell us yours and we plan breaks around them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other North West pages',
    html: 'Start with <a class="cg-inline-link" href="/best-coding-class-in-preston">Preston</a> or <a class="cg-inline-link" href="/best-coding-class-in-lancaster">Lancaster</a> inside the county, then <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a> and <a class="cg-inline-link" href="/coding-classes-in-cumbria">Cumbria</a> next door. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Lancashire and neighbours',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-preston', label: 'Preston' },
    { href: '/best-coding-class-in-lancaster', label: 'Lancaster' }
  ],

  personalityCss: `
.cg-root.cg-lcr .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3.2vw, 2.8rem); }
.cg-root.cg-lcr .cg-hero h1 { font-weight: 800; letter-spacing: -0.026em; line-height: 1.02; }
.cg-root.cg-lcr .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-lcr .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lcr .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.02em; }
.cg-root.cg-lcr .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-lcr .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-lcr .cg-table th { letter-spacing: 0.035em; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-lcr .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-lcr .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Ceremonial Lancashire: Lancashire County Council districts (Burnley, Chorley, Fylde, Hyndburn, Lancaster, Pendle, Preston, Ribble Valley, Rossendale, South Ribble, West Lancashire, Wyre) plus unitaries Blackpool and Blackburn with Darwen. ONS Census 2021 TS001 via Nomis: Blackburn with Darwen 154,738; Preston 147,835; Lancaster 142,934; Blackpool 141,036; Chorley 117,732; West Lancashire 117,429; Wyre 111,946; South Ribble 111,035; Pendle 95,757; Burnley 94,646; Hyndburn 82,234; Fylde 81,374; Rossendale 70,871; Ribble Valley 61,561; our sum 1,531,128. ONS built-up areas (published; agree with our OA sums): Blackpool 149,070; Blackburn 124,955; Preston 94,490; Burnley 78,255; Lancaster 52,655; Lytham St Anne\'s 42,695; Bamber Bridge 40,360; Chorley 39,535; Leyland 39,295; Skelmersdale 34,915; Accrington 34,895; Fulwood 34,690. Southport (94,440 published, 1,460 inside) and Orrell (23,410, 6,863 inside) straddle and are excluded. Visit Blackpool Illuminations page: "six miles of traditional festoons, tableaux and interactive features"; 2026 season Friday 4 September to Sunday 3 January 2027 "from Starr Gate to Red Bank Road". Visit Blackpool 25 facts: 1879 "just eight arc lamps"; May 1912 first royal visit by Princess Louise; animated tableaux by 1932 on the cliffs linking North Shore and Bispham; "one million lamps of various types and styles, and more than 100 miles of festoon"; "micro controllers, LEDs, lasers and video"; "more than 500 designs and features"; Lightworks depot, twenty staff all year round.',
    localProject: 'Dithering and error diffusion, with the error measure as the lesson. Model (ours, deterministic): 48 x 96 = 4,608 lamps; brightness = 0.15 + 0.7 x (column fraction) x (0.6 + 0.4 cos(3 x row fraction)); mean 0.3665, about 1,689 lamps. Two levels: round lights 1,008, mean per-lamp error 0.308, error after 5 x 5 box blur 0.293, 48 of 96 columns fully dark; Bayer 4 x 4 lights 1,548, 0.400, 0.0563; Floyd-Steinberg (7/16, 3/16, 5/16, 1/16) lights 1,679, 0.405, 0.0280. Four levels: round 0.087 / 0.0769; Floyd-Steinberg 0.112 / 0.0094; Bayer 0.115 / 0.0162. Rankings flip between per-lamp and blurred error. Page states the model is ours and makes no claim about Illuminations design methods. AI angle: an assistant asked for the most accurate version optimises the wrong error; loss choice in machine learning. Lesson family: dithering / error diffusion and choosing the metric that matches perception.',
    requiredMentions: [
      '1,531,128',
      'eight arc lamps',
      'one million lamps',
      'Starr Gate to Red Bank Road',
      'Floyd-Steinberg',
      'error diffusion',
      'Lytham St Anne\'s',
      'Skelmersdale',
      'Bamber Bridge',
      'Lightworks',
      'Princess Louise',
      '154,738'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the fourteen Lancashire councils, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Lancashire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Visit Blackpool: Illuminations route, 2026 season dates, festoons and tableaux.', url: 'https://www.visitblackpool.com/illuminations/' },
      { claim: 'Visit Blackpool: 25 Illuminations facts (1879 arc lamps, 1912, 1932 tableaux, lamp count, festoon, technology, Lightworks).', url: 'https://www.visitblackpool.com/things-to-do/blackpool-illuminations-and-lightpool/25-blackpool-illuminations-facts/' }
    ],
    rejectedClaims: [
      'That the Illuminations use dithering or error diffusion in their designs: not stated anywhere read, so explicitly not claimed.',
      'Illuminations running costs, electricity bills and visitor spending: money figures, left out.',
      'The Squires Gate start named in the facts page: the 2026 season page names Starr Gate, so only the 2026 route is printed.',
      'Visitor numbers: a single undated claim, not printed.',
      'Dates of the Floyd-Steinberg and Bayer papers: not read from a primary source, so no years are given.',
      'blackpool.gov.uk Illuminations page: 404, not used.',
      'Lancashire school term dates: none read.',
      'Named Lancashire schools or clubs: none is named.'
    ]
  }
};
