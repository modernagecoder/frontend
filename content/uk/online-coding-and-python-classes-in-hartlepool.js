'use strict';
// Hartlepool (cg- town page, UK cluster Phase 8, towns band A, row 363). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: what is the average distance to work
// when the data only come in bands? Anchor (read 28 September 2026): Nomis Census 2021 TS058 Distance travelled to work
// (NM_2075_1), Hartlepool E06000001 and England. Hartlepool: all usual residents 16+ in employment 37,749; less than 2km
// 5,891; 2km to less than 5km 7,286; 5 to 10 3,159; 10 to 20 5,623; 20 to 30 1,779; 30 to 40 575; 40 to 60 363; "60km and
// over" 711; works mainly from home 6,570 (17.4%); "Works mainly at an offshore installation, in no fixed place, or outside
// the UK" 5,792 (15.3%); banded 25,387 (67.3%). England: 26,405,214 in employment; banded 14,267,450 (54.0%); from home
// 8,321,252 (31.5%); offshore/no fixed place/outside UK 3,816,512 (14.5%).
// Our run (scratchpad hpl/): estimated mean distance over banded workers with band midpoints and a chosen value for the open
// top band: top = 60 km: Hartlepool 10.43 km, England 11.14; 80: 10.99 / 11.63; 100: 11.55 / 12.13; 150: 12.95 / 13.38;
// 300: 17.15 / 17.11 (the order flips). Lower bound (every worker at the lower edge of the band): 7.74 / 8.32. Median band:
// Hartlepool 2 to 5 km (51.9% under 5 km); England 5 to 10 km (43.7% under 5 km). Over 60 km: 2.8% / 2.49%.
// Lesson family: estimating statistics from grouped data, open-ended top band, bounds and sensitivity, median robustness,
// choosing the right denominator. Screened: grouped data, binned, open-ended band, TS058 0 hits (Malahide used unequal band
// widths in journey-time histograms; North Yorkshire a gravity model of commuting).
// Place facts: Nomis TS001 Hartlepool usual residents 92,338; TS007A: 30 to 34 5,884 (6.4%; England 7.0%); 35 to 39 5,463
// (5.9%; 6.7%); 40 to 44 5,065 (5.5%; 6.3%); 55 to 59 7,132 (7.7%; 6.7%); 60 to 64 6,297 (6.8%; 5.8%); 65 to 69 5,247
// (5.7%; 4.9%). ONS 2021 BUAs: Hartlepool 87,995; Greatham 850; Hart 810. OS Open Names: Seaton Carew, Throston and Owton
// Manor (suburban areas) and Elwick, Hart and Greatham (villages) in Hartlepool.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HARTLEPOOL', label: 'Hartlepool', blurb: 'Online coding and Python classes for Hartlepool, with a project that works out the town\'s average distance to work from census data that only come in bands.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-hartlepool',
  code: 'hpl',
  accent: '#6B2538',
  accentRationale: 'Hartlepool: a harbour-brick claret (8.69:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Hartlepool',
    eyebrow: 'Hartlepool, County Durham, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'County Durham' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-east-england', name: 'North East England' }],
  nav: [
    { label: 'County Durham', href: '/coding-classes-in-county-durham' },
    { label: 'North East', href: '/coding-and-ai-classes-in-north-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Hartlepool, England',
  title: 'Online Coding and Python Classes in Hartlepool | AI, 6 to 67',
  description: 'Live online coding, Python, vibe coding and AI classes for Hartlepool, Seaton Carew, Hart and Greatham learners aged 6 to 67, solo or in groups. First lesson free.',
  ogDescription: 'Live online coding and Python classes for Hartlepool, and a project that estimates the town\'s average distance to work from banded census data.',
  twitterDescription: 'Hartlepool online coding, Python, vibe coding and AI classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Hartlepool',
    description: 'Online coding, Python, vibe coding, AI and mathematics for children, teenagers and adults in Hartlepool, taught live with thinking skills first.'
  },

  h1: 'Online coding and Python classes in Hartlepool',
  capsuleQ: 'Which are the best online coding and Python classes in Hartlepool?',
  capsule: 'Hartlepool counted 92,338 usual residents at the 2021 census, and the ONS gives 87,995 for the Hartlepool built-up area, with the villages of Greatham and Hart beyond it. Adults in their thirties are less common than across England, and people aged 55 to 69 more common. Anyone between 6 and 67, in Throston, Owton Manor, Seaton Carew or the villages, can join live video lessons in coding, Python, vibe coding, AI and maths, taught by our team in India one-to-one or with five to ten others at the same point. We put how to think ahead of how to prompt, so AI becomes a tool the learner controls. Start with a free trial that recommends a course; from then on it is USD 100 per month to learn in a group or USD 150 per month one-to-one.',
  lead: 'The 2021 census asked every working adult in Hartlepool how far they travelled to work, and Nomis publishes the answers, but only in bands: under 2 kilometres, 2 to 5, 5 to 10, and so on up to a final band of "60km and over" with no upper limit at all. So what is the average distance to work in Hartlepool, and is it longer or shorter than England\'s? An AI assistant will happily give a single tidy number. A Python learner who works it out properly discovers that the answer depends on a guess about fewer than 3 percent of workers, and that a different kind of average tells a clearer story.',
  wa: 'Hello Modern Age Coders, please could we book a free coding or Python lesson for a Hartlepool learner?',

  picks: {
    eyebrow: 'Hartlepool course picks',
    h2: 'Thinking, vibe coding and Python courses',
    intro: 'Pick by age and interest; each course begins with a free live lesson and needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: estimating, reasoning and checking.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then simple apps made by describing them to AI.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and AI projects for teenagers, including the commute estimate.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Data and AI for adults, starting without any code.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Hartlepool',
      h2: 'Fewer adults in their thirties, more nearing retirement',
      intro: 'Six census age bands for Hartlepool from Nomis, alongside England.',
      body: [
        { kind: 'table', caption: 'Age profile against England: six bands from Census 2021 table TS007A', head: ['Band', 'People in Hartlepool', 'Hartlepool %', 'England %'], rows: [
          ['30 to 34', '5,884', '6.4%', '7.0%'],
          ['35 to 39', '5,463', '5.9%', '6.7%'],
          ['40 to 44', '5,065', '5.5%', '6.3%'],
          ['55 to 59', '7,132', '7.7%', '6.7%'],
          ['60 to 64', '6,297', '6.8%', '5.8%'],
          ['65 to 69', '5,247', '5.7%', '4.9%']
        ] },
        { kind: 'p', text: 'Every band from 30 to 44 sits below England and every band from 55 to 69 above it, by up to a full point. The Ordnance Survey names Seaton Carew, Throston and Owton Manor among the town\'s districts and Elwick, Hart and Greatham among its villages. Pupils here learn under England\'s national curriculum, and our timetable simply leaves out the school breaks you give us.' },
        { kind: 'callout', h3: 'County, region and our approach', p: 'See <a class="cg-inline-link" href="/coding-classes-in-county-durham">County Durham</a> for the county and <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-east-england">North East England</a> for the region. Why we teach thinking before AI tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Hartlepool project',
      h2: 'An average distance to work from banded data',
      intro: 'Decide who counts, estimate from bands, and test how much the answer depends on one guess.',
      body: [
        { kind: 'p', text: 'The census table covers 37,749 Hartlepool residents in work. The first decision is who to include. 6,570 mainly worked from home, and 5,792 worked offshore, in no fixed place or outside the UK, so neither group has a distance. That leaves 25,387 people, 67.3 percent, whose journeys fall into distance bands. Leaving that step out and dividing by everyone in work would quietly count home workers as zero kilometres. Next, each band needs one representative value. The usual trick is the middle of the band: 1 kilometre for under 2, 3.5 for 2 to 5, and so on. But the last band, 60 kilometres and over, is open-ended: it has no middle, because it has no end. That is the central difficulty of working with grouped data.' },
        { kind: 'table', caption: 'Estimated average distance to work (banded workers only) for different guesses about the top band, TS058, our Python run, 28 September 2026', head: ['Value used for "60km and over"', 'Hartlepool', 'England', 'Which is longer?'], rows: [
          ['60 km', '10.43 km', '11.14 km', 'England'],
          ['100 km', '11.55 km', '12.13 km', 'England'],
          ['150 km', '12.95 km', '13.38 km', 'England'],
          ['300 km', '17.15 km', '17.11 km', 'Hartlepool'],
          ['Everyone at the bottom of their band', '7.74 km', '8.32 km', 'England']
        ] },
        { kind: 'p', text: 'The average swings from 10.43 to 17.15 kilometres depending on one guess about 711 people, 2.8 percent of Hartlepool\'s banded workers. Worse, the comparison with England flips: with a top value of 300 kilometres, Hartlepool\'s average is slightly longer. The mean has a floor, 7.74 kilometres if everyone sits at the bottom of their band, but no ceiling at all, because the top band has none. The learner reports the estimate as a range with its assumption stated, instead of a single number.' },
        { kind: 'p', text: 'The median avoids the trouble entirely. Counting up the bands, 51.9 percent of Hartlepool\'s banded workers travel less than 5 kilometres, so the middle worker is in the 2 to 5 kilometre band whatever happens at the top. For England as a whole the middle worker is in the 5 to 10 kilometre band. So the robust answer is clear: a typical Hartlepool journey to work is shorter than a typical English one, even though the averages cannot say so for certain. Knowing which statistic survives the missing information is the real skill.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Group the class by distance from school in bands and find the middle person.' },
          { h3: 'Ages 11 to 15', p: 'Estimate the mean from the census bands in Python using band middles.' },
          { h3: 'Ages 15 and up', p: 'Vary the top-band value, find bounds and compare with the median.' }
        ] },
        { kind: 'callout', h3: 'Census bands, our estimates', p: 'All counts come from the Census 2021 table TS058, Distance travelled to work, on Nomis. The choices of band values, the ranges and the medians are our own calculation.' }
      ]
    },
    {
      id: 'ai', tint: 'deep', eyebrow: 'Vibe coding and AI agents',
      h2: 'Why a single AI answer can hide an assumption',
      intro: 'Grouped data are everywhere, and so are confident averages built on guesses.',
      body: [
        { kind: 'table', caption: 'How Hartlepool\'s workers answered, TS058 (Census 2021)', head: ['Group', 'People', 'Share of those in work'], rows: [
          ['Travelled under 5 km', '13,177', '34.9%'],
          ['Travelled 60 km and over', '711', '1.9%'],
          ['Worked mainly from home', '6,570', '17.4%'],
          ['Offshore, no fixed place or outside the UK', '5,792', '15.3%'],
          ['All in employment', '37,749', '100%']
        ] },
        { kind: 'p', text: 'Ask an AI tool, or vibe code a quick script, to find the average commute and you will usually get one number, with the top-band guess and the treatment of home workers hidden inside. Our learners are taught to ask what was assumed, who was counted and which statistic is robust before trusting any figure. Those questions become urgent once an AI agent is fetching data and acting on its own. Our older students and adults learn to build such agents in Python, while Copilot Studio agent training is always individual. Read <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">why we insist learners understand the code</a> and our <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents course page for UK students</a>.' },
        { kind: 'p', text: 'The ONS and Nomis publish the counts and have no link to Modern Age Coders; the band values, ranges and any mistakes are our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From class surveys to data science',
    intro: 'Start from the school year; the trial lesson fine-tunes it.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Estimating, sorting and reasoning with numbers.', courses: ['problem-solving-and-computational-thinking-for-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps built with AI, then tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Python and statistics', p: 'Grouped data, averages and AI beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'data-science-course-for-teens-python-data'] },
      { band: 'Adults', h3: 'Data and AI', p: 'Reading data carefully, with or without code.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and averages',
    h2: 'What did the AI assume?',
    intro: 'Every estimate from banded data rests on a choice.',
    p1: 'A chatbot asked for Hartlepool\'s average commute may reply "about 11 kilometres" without mentioning the top band, the home workers or the offshore workers. Each of those choices changes the answer.',
    p2: 'A learner who has watched the comparison with England flip knows to ask for the assumption and the median before believing any average.',
    closer: 'For a Hartlepool teenager, the habit of asking what lies behind a neat number will outlast any single AI tool, and coding is the surest way to build it in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Seaton Carew to Throston, online',
    intro: 'A computer and a stable connection are all that is needed in any Hartlepool home.',
    cells: [
      { h3: 'Code by the student', p: 'Learners prompt, write and test everything; the tutor sees the shared screen and guides with questions.' },
      { h3: 'Placed by the trial', p: 'From Year 4 to Year 13, the free lesson sets the first topic, with exam boards noted.' },
      { h3: 'Free first session', p: 'A whole lesson at no cost, then a clear recommendation.' },
      { h3: 'Classmates who match', p: 'Each group holds five to ten UK learners progressing at a similar rate.' },
      { h3: 'Two a week', p: 'Paused in school holidays.' },
      { h3: 'An unchanging slot', p: 'When the UK clocks go forward or back, our tutors adjust, not you.' }
    ],
    spec: { title: 'Why the groups are online', p: 'Five Hartlepool learners at one level, free at one hour, rarely live on the same street. Online, each finds a class that fits.' }
  },

  fees: {
    h2: 'Hartlepool fees',
    intro: 'The Hartlepool price is our standard overseas rate, used for every country other than India.',
    first: 'One full lesson, free, then a course suggestion.',
    group: 'Around eight live group lessons each month.',
    private: 'Around eight live one-to-one lessons each month.',
    closer: 'Fees are in US dollars, not pounds. Payments begin once the free lesson has settled which course and which weekly slot. The pricing page explains breaks, absences and switching between group and private study.'
  },

  reviewsH2: 'Families in the North East and elsewhere, reviewing us on Google',

  book: {
    h2: 'Book a free Hartlepool lesson',
    intro: 'A quick note of the learner\'s age or school year, and what they enjoy, is all we need. Trial ideas include a guess-and-check estimation game, an AI-assisted Scratch project, beginner Python, or averaging the real distance-to-work bands.',
    success: 'Thank you. Your Hartlepool request is with us.'
  },

  faq: {
    h2: 'Hartlepool questions',
    intro: 'Distances to work, vibe coding, AI agents and everyday arrangements.',
    items: [
      { q: 'What is the population of Hartlepool?', a: 'The 2021 census counted 92,338 usual residents in Hartlepool; the ONS gives 87,995 for the Hartlepool built-up area.' },
      { q: 'Can Hartlepool learners take coding and Python classes online?', a: 'Yes. Lessons are live on video for ages 6 to 67 across the town and its villages.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, for kids, teenagers and adults, always with learners checking what the AI writes.' },
      { q: 'Is building AI agents on offer?', a: 'For students with a little Python behind them, yes. Our Copilot Studio agent course is delivered individually rather than in groups.' },
      { q: 'How far do people in Hartlepool travel to work?', a: 'Among those with a banded distance in the 2021 census, 51.9% travelled under 5 km, so the typical journey is in the 2 to 5 km band.' },
      { q: 'Do tutors come to the house?', a: 'No; teaching is entirely online and live.' },
      { q: 'What about GCSE and A level?', a: 'We coach both computer science and maths at those stages, aiming for real understanding, and we make no grade guarantees.' },
      { q: 'How young or old can learners be?', a: 'Six at the youngest, sixty-seven at the oldest.' },
      { q: 'How much are lessons?', a: 'There is no charge for the opening lesson. Afterwards a class seat is USD 100 monthly, and solo teaching USD 150 monthly.' },
      { q: 'Are school holidays lesson-free?', a: 'Yes; let us know the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages in the North East',
    html: 'Nearby, <a class="cg-inline-link" href="/ai-and-programming-classes-in-middlesbrough">Middlesbrough</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-darlington">Darlington</a> and <a class="cg-inline-link" href="/best-coding-class-in-durham">Durham</a> have pages too. The county is on <a class="cg-inline-link" href="/coding-classes-in-county-durham">County Durham</a>, the region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-east-england">North East England</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> reaches everything else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Hartlepool and County Durham',
  footerPlaces: [
    { href: '/coding-classes-in-county-durham', label: 'County Durham' },
    { href: '/coding-and-ai-classes-in-north-east-england', label: 'North East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-hpl .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-hpl .cg-hero h1 { font-weight: 760; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-hpl .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-hpl .cg-eyebrow { letter-spacing: 0.19em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hpl .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.02em; }
.cg-root.cg-hpl .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-hpl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hpl .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-hpl .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-hpl .cg-callout { border-left-width: 6px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Hartlepool (E06000001). Nomis Census 2021 TS001 usual residents 92,338. TS007A: 30 to 34 5,884 (6.4%, England 7.0%); 35 to 39 5,463 (5.9%, 6.7%); 40 to 44 5,065 (5.5%, 6.3%); 55 to 59 7,132 (7.7%, 6.7%); 60 to 64 6,297 (6.8%, 5.8%); 65 to 69 5,247 (5.7%, 4.9%). ONS 2021 BUAs: Hartlepool 87,995; Greatham 850; Hart 810. OS Open Names: Seaton Carew, Throston, Owton Manor, Elwick, Hart, Greatham. TS058 (NM_2075_1): in employment 37,749; bands 5,891 / 7,286 / 3,159 / 5,623 / 1,779 / 575 / 363 / 711 ("60km and over"); from home 6,570; offshore/no fixed place/outside UK 5,792. England in employment 26,405,214.',
    localProject: 'Banded workers 25,387 (67.3%). Mean with midpoints and top value 60/80/100/150/300: Hartlepool 10.43/10.99/11.55/12.95/17.15; England 11.14/11.63/12.13/13.38/17.11 (order flips at 300). Lower bound 7.74 / 8.32; no upper bound. Median band Hartlepool 2-5 km (51.9% under 5), England 5-10 km (43.7% under 5). Lesson family: grouped data estimation, open-ended band, bounds, sensitivity, median robustness, denominator choice.',
    requiredMentions: [
      '92,338',
      '87,995',
      'Seaton Carew',
      'Greatham',
      'Elwick',
      'Throston',
      '60km and over',
      'open-ended',
      'grouped data'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS058 Distance travelled to work, Hartlepool and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'OS Open Names places in Hartlepool, via postcodes.io.', url: 'https://postcodes.io/' }
    ],
    rejectedClaims: [
      'Why so many worked offshore or in no fixed place: not analysed; not claimed.',
      'Effect of the date of the census on working from home: not read from a source; not claimed.',
      'Port and shipbuilding history: not read from a source; not used.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
