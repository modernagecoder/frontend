'use strict';
// Charlestown, Newcastle (cg- district page, Australia cluster Phase 8, row 350). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), suburb page (ABS SAL10884) inside the City of Lake Macquarie, under Newcastle and NSW.
// Spine: 815 NSW road segments intersect Charlestown; lane count is Unknown on 49, including all 34 roundabout segments.
// Filling the blanks with the most common value hides that signal (logistic model: 108 false alarms); adding a was-missing
// flag finds every roundabout with 10 false alarms. Dropping the rows removes every roundabout. Our run au/b19/chtn_miss.py.
// Lake Macquarie council figures kept off (own page, linked). Lesson family: missing-value indicator; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'CHARLESTOWN',
    label: 'Charlestown, Newcastle',
    blurb: 'AI and programming classes for Charlestown, where the blanks in a road file turned out to be the most useful clue.'
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
  slug: 'ai-and-programming-classes-in-charlestown-newcastle',
  code: 'chtn',
  accent: '#386555',
  accentRationale: 'Charlestown: a eucalypt green (hue 158.7), 5.39:1 on #EDE7DA; 23.8 RGB from the nearest New South Wales accent, 13.0 from any other Australian accent and 7.3 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Charlestown',
    eyebrow: 'Charlestown, City of Lake Macquarie, New South Wales',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Charlestown' },
      { type: 'AdministrativeArea', name: 'Lake Macquarie City Council' },
      { type: 'City', name: 'Newcastle' },
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' },
    { slug: 'online-coding-and-python-classes-in-newcastle-nsw', name: 'Newcastle' }
  ],
  nav: [
    { label: 'Newcastle', href: '/online-coding-and-python-classes-in-newcastle-nsw' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Charlestown, Newcastle',
  title: 'AI and Programming Classes in Charlestown, Newcastle',
  description: 'Live online AI and programming classes for Charlestown learners: Scratch from six, then Python, data and machine learning for teens and adults, in small groups.',
  ogDescription: 'Charlestown machine learning project: all 34 roundabout segments had a blank lane count. Keeping a was-missing flag found every one.',
  twitterDescription: 'AI and programming classes for Charlestown, live online.',
  ogImageCourse: 'complete-generative-ai-masterclass-college',
  verifiedOn: '14 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Charlestown',
    description: 'Level-matched online lessons in programming, data and machine learning for learners in Charlestown, Lake Macquarie, with Scratch for children from six.'
  },
  h1: 'AI and programming classes in Charlestown',
  capsuleQ: 'What does a Charlestown learner study in AI and programming classes?',
  capsule: 'Programming first, then how machine learning models use data, including the parts of a data set that are missing. Lessons are live online, from Scratch at six to Python and models for teens and adults. Charlestown had 13,601 residents at the 2021 Census.',
  lead: 'The state road file for Charlestown leaves the lane count blank on 49 segments. The usual move is to fill the blanks with the most common value and carry on. In this file that throws away the most useful clue in it: every one of Charlestown\'s 34 roundabout segments is among the blanks.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Charlestown.',
  picks: {
    eyebrow: 'Course picks for Charlestown',
    h2: 'Courses that take data seriously',
    intro: 'The road project mixes Python, data cleaning and a first machine learning model. These courses build towards it; the free first lesson places the learner.',
    items: [
      { course: 'complete-generative-ai-masterclass-college', band: 'Adults 18 and over', note: 'Models, data preparation and AI tools for real projects.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python with files, tables and NumPy.' },
      { course: 'teens-ai-tools-mastery-course', band: 'Ages 13 to 17', note: 'How AI systems learn from data and where they go wrong.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 14', note: 'First Python and simple models built by hand.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Charlestown in the Census',
      h2: 'A Lake Macquarie suburb south of Newcastle',
      intro: 'Census 2021 figures for the suburb of Charlestown (ABS code SAL10884), with New South Wales alongside.',
      body: [
        {
          kind: 'table',
          caption: 'Charlestown suburb, 2021',
          head: ['Measure', 'Charlestown'],
          rows: [
            ['Residents', '13,601'],
            ['Median age', '38'],
            ['Families', '3,791'],
            ['Private dwellings', '5,731'],
            ['People per household', '2.5']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Charlestown and New South Wales',
          head: ['Indicator', 'Charlestown', 'New South Wales'],
          rows: [
            ['Separate houses', '76.0% (4,031)', '65.6%'],
            ['Flats or apartments', '8.9% (470)', '21.7%'],
            ['Adults with a bachelor degree or higher', '26.2% (2,898)', '27.8%'],
            ['Employed people in professional jobs', '26.6% (1,869)', '25.8%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'School ages', p: '861 residents were aged 5 to 9, 805 were 10 to 14 and 680 were 15 to 19.' },
            { h3: 'Older residents', p: '427 Charlestown residents were aged 85 or over.' },
            { h3: 'Size', p: 'The suburb covers a little over 7 square kilometres, bordered by Kahibah, Gateshead, Whitebridge and others.' }
          ]
        },
        {
          kind: 'p',
          text: 'Charlestown has a larger share of separate houses and a smaller share of flats than the state. The bureau applies small random adjustments to Census cells, so these figures are shown as published and kept apart.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'The blanks were the answer',
      intro: 'We took the 815 road segments that NSW Spatial Services records as touching Charlestown and trained a small model to pick out roundabout segments from two things: segment length and lane count. Lane count is Unknown on 49 rows. We handled the blanks three ways.',
      body: [
        {
          kind: 'table',
          caption: 'Finding the 34 roundabout segments, five-fold cross-validation (our run)',
          head: ['How blanks were handled', 'Roundabouts found', 'False alarms'],
          rows: [
            ['Rows with blanks dropped', 'None left to learn from', 'Not applicable'],
            ['Blanks filled with the most common value', '32 of 34', '108'],
            ['Filled, plus a was-missing column', '34 of 34', '10']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Lane count by segment type in Charlestown (NSW Spatial Services)',
          head: ['Segment type', 'Lane count known', 'Lane count Unknown'],
          rows: [
            ['Roundabout', '0', '34'],
            ['Standard road', '651', '7'],
            ['Pathway', '24', '7'],
            ['Other types', '91', '1']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Dropping rows',
              p: 'Removing the 49 incomplete rows deletes every roundabout, so the model has nothing to learn from. It looks tidy and destroys the question.'
            },
            {
              h3: 'Filling blanks',
              p: 'Writing the most common lane count into the gaps makes roundabouts look like ordinary roads. The model leans on length alone and raises 108 false alarms.'
            },
            {
              h3: 'Keeping a flag',
              p: 'A column saying whether the lane count was missing lets the model learn that blanks mean roundabout. False alarms fall to 10.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Ask why the value is missing',
          p: 'Blanks are rarely random. Before filling them, count where they fall. If they cluster in one group, the fact of being missing carries information, and a simple yes or no column keeps it.'
        },
        {
          kind: 'p',
          text: 'Road records come from the NSW Transport Theme published by NSW Spatial Services. The model is a logistic regression in scikit-learn on our extract; which segments count as Charlestown is decided by our boundary query against the ABS suburb outline.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Missing data',
      h2: 'Four ways to treat a blank',
      intro: 'Each choice says something about why the value is missing.',
      body: [
        {
          kind: 'table',
          caption: 'Common options for missing values',
          head: ['Option', 'Assumes', 'Risk'],
          rows: [
            ['Drop the row', 'Blanks are random', 'Loses whole groups'],
            ['Fill with mean or mode', 'Blanks look like typical rows', 'Hides patterns'],
            ['Fill and add a flag', 'Missingness may matter', 'One extra column'],
            ['Model that accepts blanks', 'The method handles them', 'Behaviour can be opaque']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Sort picture cards where some labels have been torn off, then notice which cards lost them.' },
            { h3: 'Secondary learners', p: 'Count blanks by category in a real file before deciding what to do with them.' },
            { h3: 'Adults', p: 'Add a was-missing column in your next spreadsheet model and compare results with and without it.' }
          ]
        },
        {
          kind: 'p',
          text: 'In scikit-learn, SimpleImputer(add_indicator=True) fills blanks and adds the flag columns in one step, which makes the safer choice also the easy one.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Charlestown',
      h2: 'Roads and homes in numbers',
      intro: 'Suburb markers from NSW open data.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Road network', p: 'The 815 segments add up to 110.06 km of recorded length; 551 are local roads and 85 arterial roads.' },
            { h3: 'Small pieces', p: 'Roundabout segments are short: a median of 18.7 metres, against 109.5 metres for the rest.' },
            { h3: 'Address points', p: 'NSW Spatial Services lists 6,803 address points touching the suburb, used as a count only.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Suburb figures',
          p: 'Figures here are for the suburb of Charlestown inside the City of Lake Macquarie. The council as a whole has its own page, and none of its totals are repeated here.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From picture cards to models',
    intro: 'Ages guide the start; the free lesson confirms it.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch',
        p: 'Sorting, matching and simple games.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI basics',
        p: 'Tables, counting and how AI learns.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Data and models',
        p: 'Cleaning data and a first classifier.',
        courses: ['python-complete-masterclass-teens', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'Adults 18 and over',
        h3: 'Applied machine learning',
        p: 'Models that hold up on real records.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'AI and data',
    h2: 'Would an AI assistant fill the blanks for you?',
    intro: 'Very likely, and with the most common value.',
    p1: 'Ask an AI tool to clean a table with missing values and the reply often fills them with the mean or the mode. That is a fair default for blanks that are scattered at random. In the Charlestown road file they are not random, and the default erases the pattern.',
    p2: 'A learner who has watched false alarms fall from 108 to 10 asks where the blanks are before accepting any cleaning step. That question is the difference between a model that works on this file and one that only appears to.',
    closer: 'For Charlestown learners, good machine learning starts with reading the gaps in the data.',
    blogAnchor: 'why reading code beats trusting it in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Charlestown lessons work',
    intro: 'Live video lessons, so nobody has to leave home.',
    cells: [
      { h3: 'Count first', p: 'Learners tally blanks and odd values before any model is trained.' },
      { h3: 'Term time', p: 'Classes follow the NSW school calendar with breaks in the holidays.' },
      { h3: 'No-cost trial', p: 'A complete first lesson free, then a written suggestion for what comes next.' },
      { h3: 'Matched by level', p: 'Groups of fifteen to twenty learners at a similar stage, or private teaching.' },
      { h3: 'Fixed weekly slots', p: 'Two lessons a week, so about eight a month.' },
      { h3: 'Teaching from India', p: 'A 5pm Charlestown class is 11:30am India time during daylight saving and 12:30pm in winter.' }
    ],
    spec: {
      title: 'Charlestown clocks',
      p: 'Charlestown follows New South Wales time, with daylight saving from the first Sunday in October to the first Sunday in April (IANA time zone database). India has no daylight saving.'
    }
  },
  fees: {
    h2: 'Charlestown class fees',
    intro: 'A single price list for all learners.',
    first: 'No charge for the first lesson, and written advice afterwards.',
    group: 'About eight group lessons monthly, with fifteen to twenty in each group.',
    private: 'About eight one-to-one lessons monthly.',
    closer: 'Charlestown families pay in US dollars once the trial has settled the course and times. The pricing page sets out how holidays and missed lessons work.'
  },
  reviewsH2: 'What reviewers on Google say',
  book: {
    h2: 'Book a free Charlestown class',
    intro: 'Tell us the learner\'s age and interests. An older student might rerun the roundabout model; a younger one might sort cards in a Scratch game.',
    success: 'Thank you. We will contact you about a Charlestown class.'
  },
  faq: {
    h2: 'Charlestown AI and programming questions',
    intro: 'Questions Charlestown families raise.',
    items: [
      {
        q: 'How many people live in Charlestown?',
        a: 'Census 2021 QuickStats counts 13,601 residents in the suburb of Charlestown, with 3,791 families and a median age of 38.'
      },
      {
        q: 'What is a missing-value indicator in machine learning?',
        a: 'An extra column that records whether a value was blank before it was filled in, so a model can learn from the pattern of missing data.'
      },
      {
        q: 'Should I drop rows with missing values?',
        a: 'Only if the blanks are scattered at random. If they cluster in one group, dropping rows can remove that group entirely.'
      },
      {
        q: 'How many roundabout segments are in Charlestown?',
        a: 'NSW Spatial Services records 34 roundabout segments among the 815 road segments touching Charlestown, all with lane count Unknown, as of October 2026.'
      },
      {
        q: 'Can teenagers learn machine learning online?',
        a: 'Yes. Teenagers who are comfortable with Python can train simple models on real data like the Charlestown road file.'
      },
      { q: 'Are Claude courses open to teenagers?', a: 'No. Our Claude-based courses are for those aged 18 and over; teenagers learn with other AI tools.' },
      {
        q: 'Is there a classroom in Charlestown?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Charlestown learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Can Charlestown groups study Copilot Studio?', a: 'No. Copilot Studio is offered one to one only; group learners build in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Lake Macquarie and Newcastle',
    h2: 'More for Charlestown learners',
    html: 'Charlestown sits inside the City of Lake Macquarie, which has <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-lake-macquarie-newcastle">its own page</a>. <a class="cg-inline-link" href="/online-coding-and-python-classes-in-newcastle-nsw">The Newcastle page</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">the New South Wales guide</a> cover the wider region.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Charlestown and Newcastle',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-lake-macquarie-newcastle', label: 'Lake Macquarie' },
    { href: '/online-coding-and-python-classes-in-maitland-newcastle', label: 'Maitland' },
    { href: '/online-coding-and-python-classes-in-newcastle-nsw', label: 'Newcastle' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-chtn .cg-hero-grid { align-items: end; gap: clamp(1.11rem, 3.17vw, 2.55rem); }
.cg-root.cg-chtn .cg-hero h1 { font-weight: 632; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-chtn .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.49rem 0 0.49rem 1.19rem; }
.cg-root.cg-chtn .cg-eyebrow { letter-spacing: 0.121em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-chtn .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.015em; }
.cg-root.cg-chtn .cg-grid-3 { gap: clamp(0.72rem, 1.89vw, 1.49rem); }
.cg-root.cg-chtn .cg-table caption { font-weight: 609; text-align: left; letter-spacing: 0.018em; }
.cg-root.cg-chtn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-chtn .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.97rem; }
.cg-root.cg-chtn .cg-callout { border-left-width: 5px; border-radius: 6px; }
`,
  dossier: {
    curriculumAuthority: 'Charlestown suburb (SAL10884, Charlestown (NSW)), City of Lake Macquarie (LGA14650). ABS Census 2021 QuickStats (read 14 October 2026): 13,601 people; median age 38; 3,791 families; 5,731 private dwellings; 2.5 per household; separate houses 4,031 (76.0%, NSW 65.6%); flats 470 (8.9%, NSW 21.7%); bachelor or higher 2,898 (26.2%, NSW 27.8%); professionals 1,869 (26.6%, NSW 25.8%); aged 5-9 861; 10-14 805; 15-19 680; 85+ 427. ABS SAL area 7.115 sq km; SALs intersecting include Adamstown Heights, Gateshead, Kahibah, Kotara South, Mount Hutton, Whitebridge. NSW Transport Theme RoadSegment intersecting SAL: 815 segments, 110.06 km shape length; functionhierarchy Local 551, Arterial 85, Distributor 69, Primary 36, Path 31, UrbanServiceLane 31, SubArterial 8, Track-Vehicular 4; lanecount Unknown 49, OneLane 123, TwoOrMore 643; classsubtype Roundabout 34 (all lanecount Unknown), StandardRoad 658 (7 Unknown), Pathway 31 (7 Unknown). AddressPoint count 6,803.',
    localProject: 'Missing-value indicator. Target: classsubtype Roundabout (34 of 815). Features log10(length), two-or-more-lanes with Unknown filled by mode, optional was-missing flag. LogisticRegression(class_weight=balanced), StratifiedKFold(5, shuffle, seed 0): mode fill TP 32 FP 108 (precision 22.9%); fill + indicator TP 34 FP 10 (precision 77.3%). Dropping Unknown rows leaves 766 rows and 0 roundabouts. Median length roundabout 18.7 m vs 109.5 m. Script au/b19/chtn_miss.py.',
    requiredMentions: ['13,601', '3,791', '861', 'Kahibah', 'roundabout', '108', '6,803', '110.06 km', 'was-missing'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Charlestown suburb (SAL10884), read 14 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL10884'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Local Government Area and Suburbs and Localities boundary services, used for our point-in-boundary and intersection checks.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'NSW Spatial Services, NSW Transport Theme, RoadSegment layer (functionhierarchy, lanecount, surface, classsubtype), (c) Spatial Services; segments intersecting the ABS boundary, queried 14 October 2026.',
        url: 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Transport_Theme/MapServer/5'
      },
      {
        claim: 'NSW Spatial Services, NSW Geocoded Addressing Theme, AddressPoint layer, counts only, queried 14 October 2026.',
        url: 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Geocoded_Addressing_Theme/MapServer/1'
      },
      {
        claim: 'scikit-learn documentation, SimpleImputer: add_indicator adds a MissingIndicator transform to the output.',
        url: 'https://scikit-learn.org/stable/modules/generated/sklearn.impute.SimpleImputer.html'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Sydney, rule AN, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Lake Macquarie council totals: kept to the Lake Macquarie page.',
      'Any reason why the road file records roundabout lane counts as Unknown: not known, so not given.',
      'Exact road length inside the suburb: not claimed; segments crossing the boundary are counted whole.',
      'Census work-from-home and travel-to-work figures: not used.',
      'Any individual address: not published; counts only.',
      'Names of schools or shopping centres: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with Lake Macquarie City Council or NSW Spatial Services.'
    ]
  }
};
