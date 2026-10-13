'use strict';
// Glenorchy, Hobart (cg- district page, Australia cluster Phase 8, row 343). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), council page (ABS LGA62610, Glenorchy City Council) under Hobart and Tasmania.
// Spine: the "six most segmented roads" in Glenorchy from Counter.most_common(6) over 4,215 named LIST road segments.
// Sixth place is a tie at 36 (Chapel Street and Springfield Avenue); most_common silently keeps whichever name it met
// first and drops the other. A ties-aware cut keeps both. Our run, scratchpad au/b17/glch_ties.py.
// Lesson family: Counter.most_common hides ties at the cut-off; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'GLENORCHY',
    label: 'Glenorchy, Hobart',
    blurb: 'Coding and AI classes for Glenorchy, where a top-six list of roads quietly drops a street that tied for sixth place.'
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
  slug: 'best-coding-and-ai-classes-in-glenorchy-hobart',
  code: 'glch',
  accent: '#883425',
  accentRationale: 'Glenorchy: a brick red (hue 9.1), 6.65:1 on #EDE7DA; 36.0 RGB from the nearest Tasmanian accent, 12.6 from any other Australian accent and 8.1 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Glenorchy',
    eyebrow: 'Glenorchy City Council, Hobart, Tasmania',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Glenorchy City Council' },
      { type: 'City', name: 'Hobart' },
      { type: 'AdministrativeArea', name: 'Tasmania' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-tasmania', name: 'Tasmania' },
    { slug: 'best-coding-classes-in-hobart', name: 'Hobart' }
  ],
  nav: [
    { label: 'Hobart', href: '/best-coding-classes-in-hobart' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Glenorchy, Hobart',
  title: 'Best Coding and AI Classes in Glenorchy, Hobart',
  description: 'Live online coding and AI classes across Glenorchy for learners aged 6 to 67, from Scratch to Python, data and AI, in small groups or one to one. First lesson free.',
  ogDescription: 'A Glenorchy coding project: 792 road names, a top-six list, and the tie at 36 segments that Counter.most_common keeps quiet about.',
  twitterDescription: 'Coding and AI for Glenorchy learners, live online.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '14 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Glenorchy',
    description: 'Level-matched online coding, data and AI lessons for children, teenagers and adults across the Glenorchy council area, Hobart, taught live in English.'
  },
  h1: 'Coding and AI classes in Glenorchy',
  capsuleQ: 'Where can Glenorchy families find the best coding and AI classes?',
  capsule: 'Through live video lessons, private or in a small group, that take six-year-olds from Scratch through to Python, data and AI by their teens and beyond, all using real Tasmanian open data. The Glenorchy council area had 50,411 residents in 2021.',
  lead: 'Which roads in Glenorchy are split into the most segments? Python\'s Counter answers in one line with most_common(6). It returns six names, cleanly. What it does not say is that the sixth place was a tie, and one of the two tied streets has simply vanished from the list.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Glenorchy.',
  picks: {
    eyebrow: 'Course picks for Glenorchy',
    h2: 'Courses that read results carefully',
    intro: 'The road-name ranking needs Python collections and a sharp eye for edge cases. These courses build both; a free trial finds the level.',
    items: [
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Counting, ranking and checking real public data.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'The collections module and other standard tools, used properly.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Summaries and rankings that stand up to scrutiny.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python and AI with small counting projects.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Glenorchy in the Census',
      h2: 'Hobart\'s northern suburbs in one council',
      intro: 'The Glenorchy local government area (ABS code LGA62610) in the 2021 Census, measured against Tasmania.',
      body: [
        {
          kind: 'table',
          caption: 'Glenorchy council area, 2021',
          head: ['Measure', 'Glenorchy'],
          rows: [
            ['Residents', '50,411'],
            ['Median age', '37'],
            ['Families', '13,152'],
            ['Private dwellings', '21,856'],
            ['People per household', '2.4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Glenorchy set against Tasmania',
          head: ['Indicator', 'Glenorchy', 'Tasmania'],
          rows: [
            ['Flats or apartments', '12.5% (2,493)', '5.3%'],
            ['Workers who caught a bus to work', '5.4% (1,288)', '2.5%'],
            ['Separate houses', '81.5% (16,189)', '87.7%'],
            ['Adults with a bachelor degree or higher', '21.8% (9,175)', '21.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'The council area had 2,703 children under five, 2,765 aged 5 to 9 and 2,834 aged 10 to 14.' },
            { h3: 'Teens and elders', p: '2,563 residents were aged 15 to 19, and 1,238 were 85 or older.' },
            { h3: 'Size', p: 'The council area takes in about 121 square kilometres on the western side of the Derwent.' }
          ]
        },
        {
          kind: 'p',
          text: 'We print the bureau\'s numbers as they stand. Its small privacy adjustments make home-made totals unreliable, so there are none here.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'The street that tied for sixth',
      intro: 'The LIST transport layer records 7,199 road segments touching the Glenorchy council area, 4,215 of them carrying a road name, across 792 distinct names. We counted segments per name with collections.Counter.',
      body: [
        {
          kind: 'table',
          caption: 'What Counter.most_common(6) returned (our run)',
          head: ['Rank', 'Road', 'Segments'],
          rows: [
            ['1', 'Main Road', '214'],
            ['2', 'Brooker Highway', '185'],
            ['3', 'Tolosa Street', '47'],
            ['4', 'Abbotsfield Road', '44'],
            ['5', 'Collinsvale Road', '41'],
            ['6', 'Chapel Street', '36']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'What it left out',
          head: ['Check', 'Result'],
          rows: [
            ['Names with exactly 36 segments', 'Chapel Street and Springfield Avenue'],
            ['Why Chapel Street was kept', 'It was met first in the data'],
            ['A ties-aware top six', 'Seven names, sharing sixth place']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Documented, but quiet',
              p: 'Python\'s documentation says equal counts are ordered by when they were first seen. Nothing in the output tells you a tie was broken.'
            },
            {
              h3: 'Order-dependent',
              p: 'Read the same data in a different order and Springfield Avenue would make the list instead. A ranking that depends on file order is not a fact about Glenorchy.'
            },
            { h3: 'A fair cut', p: 'Find the count at position six, then keep every name with at least that count. Here that gives seven roads, and says so.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'Top-N lists need a tie rule',
          p: 'Rankings appear everywhere: top schools, top products, top roads. Before cutting at N, decide whether ties are shared, broken by a second key, or reported. Silent tie-breaking by accident of order is the one option that is never right.'
        },
        {
          kind: 'p',
          text: 'Road segments come from the LIST open data, State of Tasmania. Segments crossing the council boundary are counted whole. The counts and the tie are from our own run of glch_ties.py.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Counting in Python',
      h2: 'Ranking with ties in mind',
      intro: 'Three ways to take a top six, and what each does at the cut.',
      body: [
        {
          kind: 'table',
          caption: 'Top-N approaches compared',
          head: ['Approach', 'Ties at the cut', 'Glenorchy result'],
          rows: [
            ['c.most_common(6)', 'Broken by first-seen order', 'Six names, one dropped'],
            ['Keep counts >= the sixth count', 'All kept', 'Seven names'],
            ['Sort by (count, name)', 'Broken by a stated rule', 'Six names, rule declared'],
            ['pandas nlargest(6, keep=\'all\')', 'All kept', 'Seven rows']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Run a class vote for a favourite fruit and decide what happens when two fruits tie for last place on the podium.' },
            { h3: 'Secondary learners', p: 'Reverse the Glenorchy data order, rerun most_common(6), and watch the sixth name change.' },
            { h3: 'Adults', p: 'Check whether reports at work that show "top 10" lists ever hide a tie at tenth place.' }
          ]
        },
        {
          kind: 'p',
          text: 'The same issue affects statistics.mode, which returns one value even when several are equally common; statistics.multimode returns them all. Knowing which tools hide ties is part of reading data honestly.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Glenorchy',
      h2: 'Main Road and the Brooker Highway',
      intro: 'Council-wide markers from the LIST open data and the Tasmanian school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Road network', p: 'The 7,199 segments total 724.7 km by recorded length: 5,948 sealed, 1,075 unsealed and 176 needing four-wheel drive.' },
            { h3: 'Addresses', p: 'The LIST holds 24,451 address points within or on the council boundary, a count only.' },
            { h3: 'Term 2, 2027', p: 'Tasmanian government school Term 2 of 2027 runs from 26 April to 2 July.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Glenorchy council area',
          p: 'Figures describe the Glenorchy local government area, not Greater Hobart. Neighbouring councils are Hobart, Kingborough, Huon Valley and Derwent Valley.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From class votes to fair rankings',
    intro: 'Starting points depend on the learner; the first lesson shows where.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and counting',
        p: 'Games that count, compare and rank.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python basics',
        p: 'Lists, counting and first data projects.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Data with Python',
        p: 'Counting, ranking and checking public data.',
        courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Data analysis',
        p: 'Honest summaries for study and work.',
        courses: ['data-analysis-mastery-course-college', 'data-science-complete-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI writes most_common(6). Who notices the tie?',
    intro: 'Someone who checks the edge of the list. The code is correct; the conclusion may not be.',
    p1: 'An assistant asked for "the six roads with the most segments" will reach for most_common(6) and present a neat list. It will not mention Springfield Avenue, because the function never told it there was anything to mention.',
    p2: 'Learners who have seen the tie appear and disappear with file order check the boundary of every ranking. That is the kind of care that makes AI-assisted analysis trustworthy.',
    closer: 'In Glenorchy, the learner who checks the cut-off reports seven roads where the tool showed six.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Glenorchy classes run',
    intro: 'Lessons are given over live video, so nobody travels.',
    cells: [
      { h3: 'Results questioned', p: 'Every output is read and challenged together on the shared screen.' },
      { h3: 'Tasmanian school year', p: 'Classes follow state terms and break in the holidays.' },
      { h3: 'No-cost first lesson', p: 'One full class free, followed by a recommendation in writing.' },
      { h3: 'Small classes', p: 'Between five and ten learners at a similar level, or private.' },
      { h3: 'A weekly pair', p: 'Two set lessons each week, close to eight monthly.' },
      { h3: 'From India', p: 'Our tutors teach from India: a 4:30pm Glenorchy lesson is 11am there in summer and 12 noon after April.' }
    ],
    spec: {
      title: 'Daylight saving in Tasmania',
      p: 'Tasmania puts clocks forward on the first Sunday in October and back on the first Sunday in April (IANA time zone database), while India keeps one time.'
    }
  },
  fees: {
    h2: 'Glenorchy class fees',
    intro: 'Three simple prices.',
    first: 'The opening lesson is free and finishes with written advice.',
    group: 'Roughly eight group lessons a month, fifteen to twenty learners.',
    private: 'Roughly eight private lessons a month with one tutor.',
    closer: 'Billing is in US dollars and begins after the trial, when a course and weekly slot are agreed. Holidays and missed classes are covered on the pricing page.'
  },
  reviewsH2: 'Google reviews of our teaching',
  book: {
    h2: 'Book a free Glenorchy lesson',
    intro: 'Send the learner\'s age and a line about what they enjoy. Teens might investigate the tied roads; younger children might run a Scratch class vote.',
    success: 'Thank you. We will be in touch shortly about a Glenorchy lesson.'
  },
  faq: {
    h2: 'Glenorchy coding and AI questions',
    intro: 'Questions families across Glenorchy often raise.',
    items: [
      {
        q: 'What is the population of the Glenorchy council area?',
        a: 'The 2021 Census QuickStats record 50,411 residents in the Glenorchy local government area, living in 21,856 private dwellings, with a median age of 37.'
      },
      {
        q: 'How does Counter.most_common handle ties?',
        a: 'Elements with equal counts are ordered by when they were first encountered, so a cut at N can silently include one tied item and drop another.'
      },
      {
        q: 'How do I keep ties in a top-N list?',
        a: 'Find the count at position N, then keep every item whose count is at least that value, or use pandas nlargest with keep=\'all\'.'
      },
      {
        q: 'Which Glenorchy roads have the most segments?',
        a: 'In the LIST data, Main Road has 214 segments and the Brooker Highway 185; Chapel Street and Springfield Avenue tie at 36.'
      },
      { q: 'Can a six-year-old learn to code?', a: 'Yes, through Scratch blocks and puzzles. Typed Python usually follows around nine.' },
      { q: 'Are Claude courses open to school students?', a: 'No. We teach Claude only to adults of 18 or over; school students use other AI tools.' },
      {
        q: 'Is there a classroom in Glenorchy?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Glenorchy learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      {
        q: 'Is Copilot Studio part of the Glenorchy group course?',
        a: 'No. Copilot Studio stays in private lessons, and group classes write agents in Python.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Hobart and Tasmania',
    h2: 'More for Glenorchy learners',
    html: 'Greater Hobart is covered by <a class="cg-inline-link" href="/best-coding-classes-in-hobart">our Hobart page</a>, and the state by <a class="cg-inline-link" href="/coding-and-ai-classes-in-tasmania">the Tasmania guide</a>. Further south, <a class="cg-inline-link" href="/ai-and-programming-classes-in-kingston-tas-hobart">Kingston</a> also has a page.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Glenorchy and Hobart',
  footerPlaces: [
    { href: '/best-coding-classes-in-hobart', label: 'Hobart' },
    { href: '/best-coding-classes-in-launceston', label: 'Launceston' },
    { href: '/ai-and-programming-classes-in-devonport', label: 'Devonport' },
    { href: '/coding-and-ai-classes-in-tasmania', label: 'Tasmania' }
  ],
  personalityCss: `
.cg-root.cg-glch .cg-hero-grid { align-items: start; gap: clamp(0.93rem, 2.86vw, 2.26rem); }
.cg-root.cg-glch .cg-hero h1 { font-weight: 684; letter-spacing: -0.016em; line-height: 1.05; }
.cg-root.cg-glch .cg-capsule { border-left: 6px solid var(--cg-accent); padding: 0.47rem 0 0.47rem 1.17rem; }
.cg-root.cg-glch .cg-eyebrow { letter-spacing: 0.141em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-glch .cg-section-head h2 { max-width: 20ch; letter-spacing: -0.009em; }
.cg-root.cg-glch .cg-grid-3 { gap: clamp(0.93rem, 2.36vw, 1.79rem); }
.cg-root.cg-glch .cg-table caption { font-weight: 667; text-align: left; letter-spacing: 0.015em; }
.cg-root.cg-glch .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-glch .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.77rem; }
.cg-root.cg-glch .cg-callout { border-left-width: 4px; border-radius: 7px; }
`,
  dossier: {
    curriculumAuthority: 'Glenorchy local government area (LGA62610). ABS Census 2021 QuickStats (read 12 October 2026): 50,411 people; median age 37; 13,152 families; 21,856 private dwellings; 2.4 per household; flats 2,493 (12.5%, Tas 5.3%); bus 1,288 (5.4%, Tas 2.5%); separate houses 16,189 (81.5%, Tas 87.7%); bachelor or higher 9,175 (21.8%, Tas 21.9%); aged 0-4 2,703; 5-9 2,765; 10-14 2,834; 15-19 2,563; 85+ 1,238. ABS LGA area 121.1632 sq km. LIST Transport Segments intersecting the LGA: 7,199 (724.7 km); surface Sealed 5,948, Unsealed 1,075, 4WD 176; 4,215 named, 792 distinct names; Main Road 214, Brooker Highway 185, Tolosa Street 47, Abbotsfield Road 44, Collinsvale Road 41, Chapel Street 36, Springfield Avenue 36. LIST Address Points intersecting: 24,451 (count only). Neighbouring LGAs (ABS touches): Derwent Valley, Hobart, Huon Valley, Kingborough. Tas 2027 Term 2 26 April to 2 July.',
    localProject: 'Counter.most_common ties. glch_ties.py: unique OBJECTIDs sorted, PRI_NAME non-null 4,215, 792 names. most_common(6) ends with Chapel Street 36; Springfield Avenue also 36 and omitted; first-seen order Chapel Street before Springfield Avenue; ties-aware cut (count >= 36) gives 7 names.',
    requiredMentions: ['50,411', '21,856', '2,834', 'Springfield Avenue', 'Tolosa Street', 'Abbotsfield Road', 'Brooker Highway', '24,451', 'most_common(6)'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Glenorchy local government area (LGA62610), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA62610'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Local Government Area and Suburbs and Localities boundary services, used for our point-in-boundary and intersection checks.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'the LIST, State of Tasmania, Transport Segments (All Transport layer), Creative Commons Attribution 3.0 Australia; queried from the LIST map service on 13 and 14 October 2026.',
        url: 'https://services.thelist.tas.gov.au/arcgis/rest/services/Public/TopographyAndRelief/MapServer/8'
      },
      {
        claim: 'the LIST, State of Tasmania, Address Points, Creative Commons Attribution 3.0 Australia; counts only, queried 13 October 2026.',
        url: 'https://services.thelist.tas.gov.au/arcgis/rest/services/Public/CadastreAndAdministrative/MapServer/43'
      },
      {
        claim: 'Python documentation, collections.Counter.most_common: elements with equal counts are ordered in the order first encountered.',
        url: 'https://docs.python.org/3/library/collections.html'
      },
      {
        claim: 'Tasmanian Department for Education, Children and Young People, 2027 school term dates for school and college students.',
        url: 'https://www.decyp.tas.gov.au/learning/term-dates/'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Hobart, rule AT, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Figures for Greater Hobart from the Hobart page: not used.',
      'That more segments means a busier road: not claimed; segment counts reflect how the data is split.',
      'Any individual address: not published; counts only.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with Glenorchy City Council or the LIST.'
    ]
  }
};
