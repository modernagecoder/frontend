'use strict';
// Calamvale, Brisbane (cg- district page, Australia cluster Phase 8, row 293). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), suburb page (ABS SAL30480, City of Brisbane) under Brisbane and Queensland.
// Spine: split a full street name ("SILKY OAK Court") into name and type. str.split(' ', 1) breaks on the first space
// and fails on two-word names; str.rsplit(' ', 1) breaks on the last space and gets all 263 Calamvale rows right,
// but city-wide it fails on 92 rows with a direction suffix or no type at all.
// Data: BCC Street Names with Suburbs (CC BY 4.0). Our measurements: scratchpad au/b12 (inline python on raw/streets.csv).
// Lesson family: str.rsplit with maxsplit vs split; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'CALAMVALE',
    label: 'Calamvale, Brisbane',
    blurb: 'Online coding and Python classes for Calamvale, where splitting 263 street names from the right instead of the left fixes every two-word name like Silky Oak Court.'
  },
  market: {
    name: 'Australia',
    iso: 'AU',
    dial: '+61',
    lang: 'en-AU',
    locale: 'en_AU',
    geoRegion: 'AU',
    brandTag: 'AU',
    phoneLabel: 'Australian mobile number',
    phonePlaceholder: '491 570 156',
    gradeLabel: 'Year level or age',
    minDigits: 9,
    stripTrunk: true
  },
  slug: 'online-coding-and-python-classes-in-calamvale-brisbane',
  code: 'calv',
  accent: '#635222',
  accentRationale: 'Calamvale: an olive brown (hue 44.3), 6.17:1 on #EDE7DA; 33.3 RGB from the nearest Queensland accent, 13.9 from any other Australian accent and 8.6 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Calamvale',
    eyebrow: 'Calamvale, City of Brisbane, Queensland',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Calamvale' },
      { type: 'AdministrativeArea', name: 'City of Brisbane' },
      { type: 'City', name: 'Brisbane' },
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' },
    { slug: 'best-coding-classes-in-brisbane', name: 'Brisbane' }
  ],
  nav: [
    { label: 'Brisbane', href: '/best-coding-classes-in-brisbane' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Calamvale, Brisbane',
  title: 'Online Coding and Python Classes in Calamvale, Brisbane',
  description: 'Live online coding and Python classes for Calamvale children, teenagers and adults, with text and data projects on real Brisbane files, in groups or one to one.',
  ogDescription: 'Calamvale Python project: 263 street names, 11 of them two words long, and why rsplit with maxsplit=1 gets every one right where split does not.',
  twitterDescription: 'Online Python and coding for Calamvale learners, live with a teacher.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Calamvale',
    description: 'Level-matched online Python and coding lessons for children, teenagers and adults in Calamvale, Brisbane, taught live in English.'
  },
  h1: 'Online coding and Python classes in Calamvale',
  capsuleQ: 'What do Calamvale learners get from online Python classes?',
  capsule: 'The skill of turning messy real text into clean data, and of testing that the code handles every case rather than the first few. Children start with Scratch at six; teenagers and adults write Python against public files. The 2021 Census counted 17,994 people in Calamvale.',
  lead: 'Calamvale has a Fig Tree Street, a Silky Oak Court and a Van Wirdum Place. Ask Python to separate each street\'s name from its type and those three are where a careless split goes wrong. Brisbane City Council lists 263 street entries for the suburb, so we tested two one-line methods on every one.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python class for a learner in Calamvale.',
  picks: {
    eyebrow: 'Course picks for Calamvale',
    h2: 'Courses that handle real-world text',
    intro: 'The street-name project needs string methods, loops and the habit of counting failures. These courses build it, and the free trial sets the level.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Strings, lists and files, practised on data with awkward cases left in.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Python from scratch to tested, readable programs for work or study.'
      },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First typed Python, built up in small projects children can check.' },
      {
        course: 'data-analysis-mastery-course-college',
        band: 'University and adult',
        note: 'Cleaning, reshaping and summarising real tables before any chart is drawn.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Calamvale in the Census',
      h2: 'Townhouses, young families and busy bus stops',
      intro: 'Selected 2021 Census QuickStats for the suburb of Calamvale (ABS code SAL30480), with Queensland beside it where the bureau publishes a state figure.',
      body: [
        {
          kind: 'table',
          caption: 'Calamvale headline counts, 2021',
          head: ['Measure', 'Calamvale'],
          rows: [
            ['Residents', '17,994'],
            ['Median age', '34'],
            ['Families', '5,053'],
            ['Private dwellings', '6,297'],
            ['People per household', '3']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Calamvale measured against Queensland',
          head: ['Indicator', 'Calamvale', 'Queensland'],
          rows: [
            ['Semi-detached, row or townhouse homes', '35.9% (2,094)', '11.7%'],
            ['Separate houses', '63.8% (3,724)', '74.8%'],
            ['Workers travelling to work by bus', '5.6% (491)', '1.7%'],
            ['Adults holding a bachelor degree or higher', '36.9% (5,191)', '21.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Many young children', p: 'There were 1,277 residents under five, 1,412 aged 5 to 9 and 1,221 aged 10 to 14.' },
            { h3: 'Three to a home', p: 'Households averaged 3 people, and the Census counted 5,053 families in the suburb.' },
            { h3: 'Size of the suburb', p: 'The ABS outline of Calamvale covers about 6.7 square kilometres in Brisbane\'s south.' }
          ]
        },
        {
          kind: 'p',
          text: 'Census figures carry small privacy adjustments, so we quote them unchanged and never add cells together to build totals of our own.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Split from the left, or from the right?',
      intro: 'Join each council row back into one string, such as "SILKY OAK Court", then try to recover the name and the type. Two single calls compete: s.split(\' \', 1), which cuts at the first space, and s.rsplit(\' \', 1), which cuts at the last.',
      body: [
        {
          kind: 'table',
          caption: 'Calamvale street rows (our calculation)',
          head: ['Method', 'Correct', 'Wrong'],
          rows: [
            ['s.split(\' \', 1)', '252 of 263', '11, every two-word name'],
            ['s.rsplit(\' \', 1)', '263 of 263', 'None']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'The same test on all 16,960 Brisbane street rows (our calculation)',
          head: ['Method', 'Correct', 'Wrong'],
          rows: [
            ['s.split(\' \', 1)', '16,476', '484 multi-word names'],
            ['s.rsplit(\' \', 1)', '16,868', '92 rows'],
            ['rsplit(\' \', 2), keeping a final North, South, East, West or Centre', '16,944', '16 rows']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Calamvale\'s eleven',
              p: 'Angel Face, Clover Hill, Eden Elm, Fig Tree, Grevillea Park, Pepper Tree, Red Pine, Scarlet Oak, Silky Oak, Swan Lake and Van Wirdum: each has a space inside the name, so split cuts in the wrong place.'
            },
            {
              h3: 'Where rsplit fails',
              p: 'Elsewhere in Brisbane, 76 rows end in a direction such as Street West, and the last word is no longer the type. Calamvale has none, which is why its test looked perfect.'
            },
            {
              h3: 'The last sixteen',
              p: 'Rows like The Esplanade or The Strand have no separate type at all. No split can find one; the honest output is an empty type.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'A test that passes locally',
          p: 'Every one of the 263 Calamvale rows splits correctly from the right, and a learner who tested only this suburb would ship the code. Run it on the whole city and 92 rows break. The lesson is about the data you test on as much as the method: a local sample with no suffixes cannot reveal the suffix bug.'
        },
        {
          kind: 'p',
          text: 'Street names, types and suffixes are Brisbane City Council open data, where name, type and suffix arrive in separate columns. We joined them into one string to create the problem, then measured how well each method recovers the original columns. All counts are our calculation.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Python strings',
      h2: 'What maxsplit really controls',
      intro: 'Both methods accept a separator and a maximum number of cuts. The difference is only which end they start from, and that turns out to matter a great deal.',
      body: [
        {
          kind: 'table',
          caption: 'Calls on one Calamvale name',
          head: ['Call', 'Result for "SILKY OAK Court"', 'Useful?'],
          rows: [
            ['s.split()', '[\'SILKY\', \'OAK\', \'Court\']', 'Pieces, but which make the name?'],
            ['s.split(\' \', 1)', '[\'SILKY\', \'OAK Court\']', 'No, name cut short'],
            ['s.rsplit(\' \', 1)', '[\'SILKY OAK\', \'Court\']', 'Yes'],
            ['s.rpartition(\' \')', '(\'SILKY OAK\', \' \', \'Court\')', 'Yes, always three parts']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Cut paper strips of street names and decide which end to cut from so the last word is always the type.' },
            { h3: 'Secondary learners', p: 'Write both splits, count failures on the Calamvale list, then run the city file and explain the new ones.' },
            { h3: 'Adults', p: 'Use the same thinking on names, addresses or product codes in work spreadsheets before trusting a cleaned column.' }
          ]
        },
        {
          kind: 'p',
          text: 'A safer design keeps a list of known suffixes and checks the last word before cutting. That got 16,944 of 16,960 rows right; the 16 left over are data that genuinely has no type, which code should report rather than invent.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Calamvale',
      h2: 'Beaudesert Road and 31 council parks',
      intro: 'Details that belong to Calamvale rather than its neighbours, from the timetable feed, the park register and the school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Buses on the spine road',
              p: 'Our boundary check finds 33 Translink stop records in Calamvale. On Wednesday 21 October 2026 they had 2,631 scheduled bus visits across 12 routes, the busiest Beaudesert Rd at Honeysuckle Way with 181.'
            },
            { h3: 'Parks', p: 'Brisbane City Council\'s park register assigns 31 parks to Calamvale.' },
            { h3: 'Term 3, 2027', p: 'Queensland state school Term 3 of 2027 runs from Monday 12 July to Friday 17 September.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Calamvale alone',
          p: 'Figures here cover the suburb of Calamvale only. Algester, Drewvale, Parkinson, Runcorn, Stretton and Sunnybank Hills border it, and each has separate counts that we have not combined with these.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From cutting paper strips to cleaning data',
    intro: 'Ages are approximate; a learner\'s trial lesson fixes the start.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Blocks first',
        p: 'Scratch projects that build sequencing and testing habits.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Typed Python',
        p: 'Strings, loops and number puzzles in real code.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python with data',
        p: 'Files, text cleaning and simple analysis with honest checks.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Python at work',
        p: 'Automation and data handling for study and jobs.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why learn string methods when AI writes them?',
    intro: 'Because the AI will pick one, and it may be the wrong one for your data.',
    p1: 'Ask an assistant to separate street names from types and it will usually suggest rsplit. On Calamvale that looks flawless: 263 out of 263. The assistant has no way to know that 76 Brisbane rows carry a direction after the type, unless someone tests against the full file.',
    p2: 'Learners who have counted the failures themselves ask the right follow-up question: what does the data contain that my sample did not? That question is what makes AI-written code safe to use.',
    closer: 'In Calamvale, the learner who tests beyond the first sample writes code that survives the whole city.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Calamvale lessons, online and live',
    intro: 'There is nothing to travel to: every lesson happens over video at home.',
    cells: [
      { h3: 'Learner at the keyboard', p: 'The teacher watches the shared screen and asks the learner to explain each line.' },
      { h3: 'Follows school terms', p: 'Plans fit the Queensland school year and stop for holidays.' },
      { h3: 'Free first lesson', p: 'A complete trial class that ends with a written suggestion.' },
      { h3: 'Groups by level', p: 'Fifteen to twenty learners at a similar pace, or one to one.' },
      { h3: 'Two sessions weekly', p: 'Regular times each week, around eight lessons a month.' },
      { h3: 'Brisbane and India', p: 'Teachers work from India: a 5pm Calamvale lesson is 12:30pm India time, all year.' }
    ],
    spec: {
      title: 'One time all year',
      p: 'Queensland dropped daylight saving after March 1992 (IANA time zone database), and India never adopted it, so lesson times agreed in Brisbane time do not move.'
    }
  },
  fees: {
    h2: 'What Calamvale classes cost',
    intro: 'Three prices, the same for everyone.',
    first: 'Lesson one is free and finishes with a recommended course.',
    group: 'Groups: around eight lessons a month with fifteen to twenty learners at one level.',
    private: 'One to one: around eight lessons a month with a single teacher.',
    closer: 'Calamvale families pay in US dollars after the trial, once the course and weekly time suit them. The pricing page explains holidays, absences and changing format.'
  },
  reviewsH2: 'Families and learners reviewing us on Google',
  book: {
    h2: 'Book a first Calamvale lesson',
    intro: 'Share the learner\'s age and interests. A teenager could start by splitting the street list both ways; a young child could start with a Scratch story.',
    success: 'Thank you. We will contact you shortly about a Calamvale lesson.'
  },
  faq: {
    h2: 'Calamvale coding and Python questions',
    intro: 'Questions Calamvale parents and adult learners often raise.',
    items: [
      {
        q: 'How many people live in Calamvale?',
        a: 'The 2021 Census QuickStats record 17,994 people in the suburb of Calamvale, a median age of 34 and 6,297 private dwellings.'
      },
      {
        q: 'What is the difference between split and rsplit in Python?',
        a: 'Both cut a string at a separator. With maxsplit set, split makes its cuts starting from the left and rsplit starts from the right, so rsplit(\' \', 1) keeps everything before the last space together.'
      },
      {
        q: 'What does maxsplit do?',
        a: 'It limits the number of cuts. With maxsplit=1 a string becomes at most two pieces; the rest of the string stays whole in one of them.'
      },
      {
        q: 'What did the Calamvale street test find?',
        a: 'Of 263 Calamvale street rows, split from the left got 252 right and rsplit got all 263. Across 16,960 Brisbane rows, rsplit failed on 92 because of direction suffixes and rows with no type.'
      },
      {
        q: 'When should a child move from Scratch to Python?',
        a: 'Usually between eight and ten, once they read and type comfortably. Some move earlier; the trial lesson shows whether they are ready.'
      },
      {
        q: 'Are Claude-based courses open to teenagers?',
        a: 'No. Claude-based courses enrol learners aged 18 and above only; younger students use other AI tools.'
      },
      {
        q: 'Is there a classroom in Calamvale?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Calamvale learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Is Copilot Studio offered in Calamvale groups?', a: 'No. Copilot Studio is one-to-one only; group learners build agents in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Brisbane and Queensland',
    h2: 'More for Calamvale learners',
    html: 'Browse <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">the Brisbane guide</a> or <a class="cg-inline-link" href="/coding-classes-for-kids-brisbane">coding for Brisbane children</a>. South along Beaudesert Road, <a class="cg-inline-link" href="/best-coding-classes-in-logan">Logan</a> has its own page, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">the Queensland guide</a> covers the rest of the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Calamvale and Brisbane',
  footerPlaces: [
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/best-coding-classes-in-logan', label: 'Logan' },
    { href: '/coding-classes-for-kids-brisbane', label: 'Kids in Brisbane' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' }
  ],
  personalityCss: `
.cg-root.cg-calv .cg-hero-grid { align-items: start; gap: clamp(1.05rem, 3vw, 2.5rem); }
.cg-root.cg-calv .cg-hero h1 { font-weight: 660; letter-spacing: -0.016em; line-height: 1.1; }
.cg-root.cg-calv .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.6rem 0 0.6rem 0.95rem; }
.cg-root.cg-calv .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-calv .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.011em; }
.cg-root.cg-calv .cg-grid-3 { gap: clamp(0.8rem, 2.15vw, 1.65rem); }
.cg-root.cg-calv .cg-table caption { font-weight: 640; text-align: left; }
.cg-root.cg-calv .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-calv .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-calv .cg-callout { border-left-width: 5px; border-radius: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Calamvale (SAL30480), ABS Census 2021 QuickStats (read 12 October 2026): 17,994 people; median age 34; 5,053 families; 6,297 private dwellings; 3 per household; semi-detached 2,094 (35.9%, Qld 11.7%); separate houses 3,724 (63.8%, Qld 74.8%); bus to work 491 (5.6%, Qld 1.7%); bachelor or higher 5,191 (36.9%, Qld 21.9%); aged 0-4 1,277; 5-9 1,412; 10-14 1,221. ABS SAL area 6.6504 sq km. Translink GTFS Wednesday 21 October 2026: 33 stop records with service inside the SAL polygon (our check); 2631 scheduled bus stop visits; 12 routes; busiest Beaudesert Rd at Honeysuckle Way (181). BCC Park Locations: 31 parks with suburb CALAMVALE. BCC adjacency: Algester, Drewvale, Parkinson, Runcorn, Stretton, Sunnybank Hills. Qld 2027 Term 3: Monday 12 July to Friday 17 September. Brisbane no daylight saving since March 1992 (IANA).',
    localProject: 'split vs rsplit on BCC Street Names with Suburbs (CC BY 4.0, modified 5 Aug 2026). Full string = name + type + suffix joined by spaces. Calamvale 263 rows: split(" ", 1) name correct 252 (11 multi-word names wrong), rsplit(" ", 1) 263; 0 suffixes; types Place 76, Street 70, Court 48, Close 30, Crescent 22. City 16,960 rows: split 16,476 correct (484 multi-word); rsplit 16,868 (92 wrong: 76 suffix rows West 30, East 29, South 9, North 7, Centre 1, plus 16 THE-names with no type); suffix-aware rsplit(" ", 2) 16,944 (16 wrong, all THE-names with empty type). Script inline in scratchpad au/b12.',
    requiredMentions: ['Grevillea Park', '2,094', '1,412', 'Silky Oak', 'Van Wirdum', 'Beaudesert Rd at Honeysuckle Way', '16,960', '16,944', '252 of 263'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Calamvale suburb and locality (SAL30480), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL30480'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Suburbs and Localities boundary service, used for our point-in-boundary checks and suburb areas.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Brisbane City Council open data, Street Names with Suburbs (Creative Commons Attribution 4.0), dataset last modified 5 August 2026.',
        url: 'https://data.brisbane.qld.gov.au/explore/dataset/street-names-with-suburbs/'
      },
      {
        claim: 'Department of Transport and Main Roads, Translink General Transit Feed Specification (GTFS) for South East Queensland, Creative Commons Attribution 4.0; feed valid 7 October to 6 December 2026, downloaded October 2026.',
        url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink'
      },
      {
        claim: 'Brisbane City Council open data, Park Locations (Creative Commons Attribution 4.0), dataset last modified 30 September 2026.',
        url: 'https://data.brisbane.qld.gov.au/explore/dataset/park-locations/'
      },
      {
        claim: 'Python documentation, Built-in Types: str.split and str.rsplit, including the maxsplit argument.',
        url: 'https://docs.python.org/3/builtins/stdtypes.html#str.rsplit'
      },
      {
        claim: 'Queensland Department of Education, future school dates: 2027 Queensland state school term dates.',
        url: 'https://education.qld.gov.au/about-us/calendar/future-dates'
      },
      {
        claim: 'IANA time zone database, australasia file: Zone Australia/Brisbane follows rule AQ, whose last daylight saving period ended in March 1992.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Street addresses or property details: not used; only street names and counts.',
      'Passenger numbers at Calamvale stops: not claimed; the feed lists scheduled visits only.',
      'Any reason for the high share of townhouses: not claimed.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with Brisbane City Council or Translink.'
    ]
  }
};
