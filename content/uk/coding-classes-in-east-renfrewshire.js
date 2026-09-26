'use strict';
// East Renfrewshire (cg- council area page, UK cluster Phase 7, row 264). One council. Spine: how does a machine keep
// water at the right level without a person watching it? Anchor (read raw 26 September 2026): Historic Environment
// Scotland LB51186, Category A, Waulkmill Glen Reservoir including draw-off tower, self-activating sluice and regulating
// house: "William Gale engineer, circa 1847-8"; "The draw-off tower is quite possibly the earliest such structure in
// Scotland"; "The self-activating sluice is also of considerable interest, though it is unclear whether any of the
// machinery remains intact"; "covers an area of nearly 48 acres and has a capacity of roughly 36.5 million cubic feet";
// built for the Gorbals Gravitation Water Company; bought out by Glasgow Corporation Waterworks in 1855.
// Our model (scratchpad eren/sluice.py; invented basin, not the real machinery): basin 400 square metres, target 2.0 m,
// open sluice 0.09 cubic metres a second, demand a daily cycle plus noise, level sensor noise about 2 cm, one-minute
// steps for 7 days, seed 1848. Single threshold: 5,088 switches (726.9 a day), level 1.96 to 2.04. Band 1.8 to 2.2
// (hysteresis): 161 switches (23.0 a day), level 1.77 to 2.23. Proportional: no on-off switches, level 1.90 to 2.09,
// valve travel 582.3 full strokes. Conversions (ours): 36.5 million cubic feet = 1,033,565 cubic metres; 48 acres = 19.42
// hectares; mean depth 17.5 ft (5.32 m) if the figures were exact.
// Lesson family: feedback control, chatter and hysteresis; screened (hysteresis, bang-bang, thermostat, sluice: 0 hits).
// Place facts: NRS, Scotland's Census 2022 rounded estimates: East Renfrewshire S12000011 96,800; 39,700 households;
// 555.5 per square kilometre; 0 to 14 18,100 (18.7 per cent), 65+ 20,900 (21.6 per cent) by our addition. NRS mid-2020
// localities. Blocked: ScottishPower Renewables Whitelee page 403 (logged, not retried). Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'EAST RENFREWSHIRE', blurb: 'Newton Mearns, Barrhead, Giffnock and Clarkston, and a Waulkmill Glen lesson on how a sluice can hold water steady by itself.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-east-renfrewshire',
  code: 'ern',
  accent: '#29375C',
  accentRationale: 'East Renfrewshire: a deep reservoir blue from the solver (9.43:1 on the darkest paper tint), bluer and deeper than the Argyll and Bute slate and the Staffordshire blue',
  pageType: 'governorate',
  place: {
    name: 'East Renfrewshire',
    eyebrow: 'East Renfrewshire',
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
  routeLabel: 'East Renfrewshire',
  title: 'Coding Classes in East Renfrewshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across East Renfrewshire, from Newton Mearns, Giffnock and Clarkston to Barrhead, Neilston and Eaglesham.',
  ogDescription: 'Coding classes for all of East Renfrewshire, and a Waulkmill Glen project: control a sluice in Python and see why one switching point makes a valve chatter.',
  twitterDescription: 'East Renfrewshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for East Renfrewshire',
    description: 'Ability-placed online coding, Python, control and simulation projects and mathematics for children, teenagers and adults across East Renfrewshire, taught live in English.'
  },

  h1: 'Coding classes in East Renfrewshire',
  capsuleQ: 'What are the best coding classes in East Renfrewshire?',
  capsule: 'East Renfrewshire is a council area on the southern edge of Glasgow with about 96,800 residents in roughly 39,700 households at the 2022 census. Newton Mearns is its largest town, ahead of Barrhead, Giffnock and Clarkston, and villages such as Neilston, Eaglesham and Busby fill out the map. We teach every lesson live on video from India, and a free first session tells us where each learner fits, from P1 to S6 or as an adult. Coding, Python and maths are open to anyone aged 6 to 67, one-to-one or in a class of five to ten. The local project comes from a Victorian reservoir in Waulkmill Glen. After the free lesson, a group place is USD 100 a month and one-to-one teaching USD 150.',
  lead: 'Historic Environment Scotland lists Waulkmill Glen Reservoir at Category A, its highest grade. The engineer William Gale built it in 1847 and 1848 for the Gorbals Gravitation Water Company, and the listing calls its draw-off tower quite possibly the earliest such structure in Scotland. It also mentions a self-activating sluice, a device that let water through on its own, although the listing says it is unclear whether any of the machinery survives. How can a machine decide, with nobody watching, when to let water through? This page\'s project answers in Python, with an invented basin and three ways of controlling it, one of which makes the valve rattle open and shut thousands of times a week.',
  wa: 'Hello Modern Age Coders, we are in East Renfrewshire and would like a free lesson, please.',

  picks: {
    eyebrow: 'Courses for East Renfrewshire',
    h2: 'The first course for each East Renfrewshire learner',
    intro: 'A P3 child in Giffnock making a first game, an S2 in Barrhead ready for real Python, an S4 in Newton Mearns facing National 5, an adult in Clarkston automating work. Four common starting points.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 11', note: 'Scratch from the ground up, with games where sprites react to what they sense.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 12 to 18', note: 'Full Python for teenagers, including simulations with loops, conditions and state.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Secondary maths in depth, with the graphs and rates of change that control problems use.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults from the first line of code, up to scripts that monitor and respond.' }
    ]
  },

  sections: [
    {
      id: 'east-renfrewshire', tint: '', eyebrow: 'East Renfrewshire in figures',
      h2: 'About 96,800 people south of Glasgow',
      intro: 'The council totals are 2022 census first results from National Records of Scotland, given in round hundreds. Town figures are NRS locality estimates for mid-2020.',
      body: [
        { kind: 'table', caption: 'East Renfrewshire localities above 3,000 people, NRS mid-2020 estimates', head: ['Locality', 'Residents', 'Locality', 'Residents'], rows: [
          ['Newton Mearns', '28,210', 'Netherlee', '4,530'],
          ['Barrhead', '17,890', 'Thornliebank', '4,170'],
          ['Giffnock', '12,250', 'Stamperland', '3,630'],
          ['Clarkston', '9,800', 'Eaglesham', '3,470'],
          ['Neilston', '5,170', 'Busby', '3,310']
        ] },
        { kind: 'p', text: 'With 555.5 residents per square kilometre, East Renfrewshire is about eight times denser than Scotland as a whole at 69.8. Children are a larger share here than nationally: by our own addition of the age bands, 18.7 per cent of residents are under 15, against 15.3 per cent for Scotland, while 21.6 per cent are 65 or over, against 20.1. Waterfoot is the next locality after the table. East Renfrewshire Council fixes the school terms; we have not read them, so each family tells us its own break dates.' },
        { kind: 'callout', h3: 'Glasgow and the exams', p: 'The city has its own page at <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a>. Pupils heading for Scottish exams can read about <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The East Renfrewshire project',
      h2: 'A sluice that decides for itself',
      intro: 'One basin, one noisy sensor, three rules for opening the gate.',
      body: [
        { kind: 'p', text: 'The basin is invented, not a copy of anything at Waulkmill Glen. Water leaves it all day as a town draws its supply, more in the day and less at night, with some randomness on top. Water enters through a sluice that delivers 0.09 cubic metres a second when open. The aim is to hold the level near 2 metres. A sensor reports the level once a minute, and like every real sensor it is a little noisy, off by about 2 centimetres either way. The learner simulates a week and tries three rules.' },
        { kind: 'table', caption: 'Our sluice simulation, one week at one-minute steps, 26 September 2026', head: ['Rule', 'Valve switches in the week', 'Lowest and highest level'], rows: [
          ['Open below 2.0 m, shut above it', '5,088 (about 727 a day)', '1.96 m to 2.04 m'],
          ['Open below 1.8 m, shut above 2.2 m', '161 (23 a day)', '1.77 m to 2.23 m'],
          ['Open in proportion to the shortfall', 'No slamming; the gate moves a little every minute', '1.90 m to 2.09 m']
        ] },
        { kind: 'p', text: 'The first rule looks perfect on a graph, since the level hardly moves. Look at the valve, though. Whenever the water sits near 2 metres, sensor noise alone makes the reading hop above and below the line, so the gate flips open and shut minute after minute: 5,088 times in a week. Engineers call this chatter, and on a real gate it wears out the machinery. The second rule adds a dead band. The gate opens only when the level falls under 1.8 metres and stays open until it passes 2.2 metres. That gap, called hysteresis, cuts the switching to 161 times in the week, and the price is water that swings further. A home thermostat uses the same trick.' },
        { kind: 'p', text: 'The third rule opens the gate part of the way, more when the basin is low and less when it is nearly full. The level stays between 1.90 and 2.09 metres and the gate never slams, though it is adjusted constantly, and in real designs a purely proportional rule can settle a little away from its target. Choosing between the three is a trade-off between accuracy, wear and simplicity, which is what control engineering is about. We make no claim about how the 1840s sluice actually worked; that is for historians, and the listing itself is uncertain.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Build a Scratch bath that fills and drains, with a tap that turns on and off at a mark, and watch how often it clicks.' },
          { h3: 'Ages 11 to 15', p: 'Simulate the basin in Python with the first two rules, count the switches and plot the level against time.' },
          { h3: 'Ages 15 and up', p: 'Add the proportional rule, vary the band width and the gain, and draw the trade-off between accuracy and valve wear.' }
        ] },
        { kind: 'callout', h3: 'The numbers are ours', p: 'Only the reservoir facts come from the Historic Environment Scotland listing. The basin size, flows, demand, noise and every result in the table are invented for teaching.' }
      ]
    },
    {
      id: 'waulkmill', tint: 'deep', eyebrow: 'Why Waulkmill Glen',
      h2: 'A Category A reservoir from 1847',
      intro: 'What the listing records, with conversions to metric that we worked out ourselves.',
      body: [
        { kind: 'table', caption: 'Waulkmill Glen Reservoir, HES listing LB51186, with our conversions', head: ['Listing says', 'In metric (our conversion)'], rows: [
          ['William Gale, engineer, circa 1847 to 1848', 'Not applicable'],
          ['Nearly 48 acres of water', 'About 19.4 hectares'],
          ['Roughly 36.5 million cubic feet', 'About 1.03 million cubic metres'],
          ['Embankment 200 yards long, 60 ft high', 'About 183 m long, 18.3 m high']
        ] },
        { kind: 'p', text: 'Dividing the volume by the area gives an average depth of roughly 17.5 feet, or about 5.3 metres, a sum of ours that inherits the words nearly and roughly from the listing, so treat it as a sense of scale rather than a measurement. The listing adds that the Gorbals Gravitation Water Company was bought out by Glasgow Corporation Waterworks in 1855, and that the scheme brought water to the Gorbals, Pollokshaws and Govan.' },
        { kind: 'p', text: 'Automatic control now runs through heating, cruise control, drones, washing machines and the servers behind every app. An East Renfrewshire pupil who has made a valve chatter, and then fixed it, understands why good controllers need a gap between on and off.' },
        { kind: 'p', text: 'We are not connected with Historic Environment Scotland, Scottish Water or East Renfrewshire Council. The facts about the reservoir are theirs to publish; the simulation, the conversions and any slips are our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From a Scratch tap to a control loop',
    intro: 'Stages are a guide. The free lesson sets the real starting point.',
    cols: [
      { band: 'P1 to P4', h3: 'Things that react', p: 'Block coding where sprites sense a colour or a height and respond.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'P5 to S2', h3: 'First Python', p: 'Typed Python with loops, variables and simple simulations of filling and emptying.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'S3 to S6', h3: 'Systems and exams', p: 'Longer programs and simulations beside National 5, Higher and Advanced Higher work in computing and maths.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Automation at work', p: 'Python for adults who want scripts that watch data and act on it.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and control',
    h2: 'An AI can write a controller in seconds. Will it notice the valve chattering?',
    intro: 'Code that meets the target can still fail the machine.',
    p1: 'Ask a chatbot for code to keep a tank at a set level and the first answer is often the simplest rule: open below the mark, shut above it. On a clean simulated sensor it works beautifully. Add a little realistic noise and the valve flips thousands of times, which nobody sees unless they count.',
    p2: 'A student from Barrhead or Busby who has counted those switches knows to ask what the code does to the hardware, not only whether the number on the screen looks right. That question transfers to any code an AI produces.',
    closer: 'Coding is still worth learning for an East Renfrewshire teenager in 2026, because someone has to check what the machine will really do.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lessons in practice',
    h2: 'Classes that come to Eaglesham and Neilston',
    intro: 'East Renfrewshire mixes busy suburbs with outlying villages. Online classes treat them the same.',
    cells: [
      { h3: 'A laptop and a quiet room', p: 'The learner shares a screen, the teacher watches the code take shape and steps in when it breaks.' },
      { h3: 'Scottish terms throughout', p: 'We talk about P6, S3, National 5 and Higher, exactly as East Renfrewshire schools do, and teach in English.' },
      { h3: 'Try before paying', p: 'The first lesson is free and complete. We then say honestly which level and course would suit.' },
      { h3: 'Classmates matched by level', p: 'Classes hold five to ten learners at one stage, gathered from several countries.' },
      { h3: 'Term time and holidays', p: 'Lessons run twice a week in term and stop for the school holidays you tell us about.' },
      { h3: 'A fixed UK time', p: 'Your slot stays at the same UK time across the clock changes; our teachers in India time move instead.' }
    ],
    spec: { title: 'Why level beats postcode', p: 'Even in Newton Mearns, five pupils at exactly the same stage and free on the same evening are hard to find. Matching by level across a wider pool puts a learner from Thornliebank or Stamperland in the right class.' }
  },

  fees: {
    h2: 'Fees in East Renfrewshire',
    intro: 'Giffnock, Barrhead or anywhere else in the UK, the monthly fee does not change.',
    first: 'One complete lesson, no charge, followed by a recommendation.',
    group: 'About eight lessons a month in a class of five to ten at one level.',
    private: 'About eight lessons a month with a teacher to yourself.',
    closer: 'All our fees are in US dollars, so there is no sterling price list. Nothing is charged until a course and weekly slot are agreed after the free lesson; holidays, missed lessons and format changes are set out on the pricing page.'
  },

  reviewsH2: 'What families say on Google',

  book: {
    h2: 'Book a free East Renfrewshire lesson',
    intro: 'Give us the learner\'s age or S stage and one thing they enjoy. The first lesson might be a Scratch game, some Python, or the sluice on this page.',
    success: 'Thank you. We have your East Renfrewshire request.'
  },

  faq: {
    h2: 'East Renfrewshire questions',
    intro: 'Figures, the reservoir project and how lessons work.',
    items: [
      { q: 'What is the population of East Renfrewshire?', a: 'Scotland\'s 2022 census counted about 96,800 residents in roughly 39,700 households, figures rounded to the nearest hundred by NRS.' },
      { q: 'Which are the biggest towns in East Renfrewshire?', a: 'NRS mid-2020 locality estimates put Newton Mearns at 28,210, Barrhead at 17,890, Giffnock at 12,250 and Clarkston at 9,800.' },
      { q: 'What is the Waulkmill Glen project?', a: 'Learners simulate an invented basin in Python and compare three sluice rules. A single switching point chatters 5,088 times in a week, a dead band cuts it to 161, and a proportional rule avoids slamming altogether.' },
      { q: 'What is hysteresis?', a: 'A gap between the point where something switches on and the point where it switches off, so small wobbles near one point do not make it flip back and forth.' },
      { q: 'How old is Waulkmill Glen Reservoir?', a: 'Historic Environment Scotland dates it to about 1847 and 1848, built by the engineer William Gale, and lists it at Category A.' },
      { q: 'Do lessons take place in East Renfrewshire?', a: 'They take place online, so a pupil in Eaglesham and one in Giffnock join from home in exactly the same way.' },
      { q: 'Can you help with National 5 or Higher Computing Science?', a: 'Yes, with pages for both courses. We build understanding and never promise a grade.' },
      { q: 'Is there an age limit?', a: 'Learners are aged 6 to 67. Young children start with blocks, older pupils move into Python and exam maths, and adults begin wherever suits them.' },
      { q: 'What are the fees?', a: 'Free for the first lesson, then USD 100 a month for a group place or USD 150 a month for one-to-one.' },
      { q: 'What happens in the school holidays?', a: 'Lessons pause. Send us the dates your school uses and we plan around them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other pages around East Renfrewshire',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> page covers the city, and our <a class="cg-inline-link" href="/coding-classes-in-east-ayrshire">East Ayrshire</a> page has a Burns project. Every Scottish council is on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'East Renfrewshire and around',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-coding-class-in-glasgow', label: 'Glasgow' },
    { href: '/national-5-computing-science-help', label: 'National 5 Computing Science' }
  ],

  personalityCss: `
.cg-root.cg-ern .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3.2vw, 2.6rem); }
.cg-root.cg-ern .cg-hero h1 { font-weight: 650; letter-spacing: -0.03em; line-height: 1.02; }
.cg-root.cg-ern .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-ern .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ern .cg-section-head h2 { max-width: 21ch; letter-spacing: -0.02em; }
.cg-root.cg-ern .cg-table caption { font-weight: 600; text-align: left; padding-bottom: 0.4rem; }
.cg-root.cg-ern .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-ern .cg-table th { letter-spacing: 0.04em; font-weight: 700; font-size: 0.82rem; }
.cg-root.cg-ern .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-ern .cg-callout { border-left-width: 5px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'East Renfrewshire (S12000011), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 96,800 (females 50,300, males 46,400); households 39,700; density 555.5 per square kilometre (Scotland 69.8); ages 0 to 14 18,100 (18.7 per cent), 65+ 20,900 (21.6 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Newton Mearns 28,210; Barrhead 17,890; Giffnock 12,250; Clarkston 9,800; Neilston 5,170; Netherlee 4,530; Thornliebank 4,170; Stamperland 3,630; Eaglesham 3,470; Busby 3,310; Waterfoot 1,340. HES LB51186 (Category A, added 05/11/2008), Waulkmill Glen Reservoir: "William Gale engineer, circa 1847-8"; embankment "200 yards long, 60 ft high"; "The draw-off tower is quite possibly the earliest such structure in Scotland"; "The self-activating sluice is also of considerable interest, though it is unclear whether any of the machinery remains intact"; "covers an area of nearly 48 acres and has a capacity of roughly 36.5 million cubic feet"; Gorbals Gravitation Water Company; supplied "the Gorbals, Pollokshaws and Govan"; "In 1855 the company was bought out by Glasgow Corporation Waterworks".',
    localProject: 'Invented basin 400 m2, target 2.0 m, sluice 0.09 m3/s, demand daily sine plus noise, sensor noise sd 0.02 m, 1-minute steps, 7 days, seed 1848. Single threshold 5,088 switches (726.9/day), level 1.96 to 2.04. Band 1.8/2.2: 161 switches (23.0/day), level 1.77 to 2.23. Proportional (0.5 + 2.5 x error): 0 on-off switches, level 1.90 to 2.09, valve travel 582.3. Conversions ours: 1,033,565 m3; 19.42 ha; mean depth 17.5 ft / 5.32 m; 200 yd = 182.9 m; 60 ft = 18.3 m. Page disclaims how the real sluice worked. AI angle: chatter invisible unless counted. Lesson family: feedback control, chatter, hysteresis, proportional control.',
    requiredMentions: [
      '96,800',
      'Waulkmill',
      'LB51186',
      'Gorbals Gravitation',
      'William Gale',
      'Newton Mearns',
      'Barrhead',
      'Giffnock',
      'Clarkston',
      'Neilston',
      'Eaglesham',
      'Thornliebank',
      'hysteresis'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Historic Environment Scotland, LB51186: Waulkmill Glen Reservoir, draw-off tower, self-activating sluice and regulating house.', url: 'https://portal.historicenvironment.scot/designation/LB51186' }
    ],
    rejectedClaims: [
      'How the original self-activating sluice worked: unknown to the listing, not claimed.',
      'Whitelee Wind Farm facts: source page returned 403, logged and not retried; not used.',
      'Current operation of the reservoir by Scottish Water: not read, not claimed.',
      'That the population figures sum to the census total: not claimed; localities are mid-2020 estimates.',
      'Named East Renfrewshire schools or school performance: not named.',
      'East Renfrewshire school term dates: none read.'
    ]
  }
};
