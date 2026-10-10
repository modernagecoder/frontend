'use strict';
// Point Cook, Melbourne (cg- district page, Australia cluster Phase 8, row 246). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), suburb page (ABS SAL22086, City of Wyndham) under Melbourne and Victoria.
// Spine: which Melbourne suburbs have an age mix like Point Cook's? Hierarchical clustering answers it, and the
// answer changes with the linkage rule.
// Data: ABS 2021 Census QuickStats age profiles (18 five-year bands, % of residents) for the eight suburbs in this
// batch (Point Cook, Craigieburn, Tarneit, Werribee, Glen Waverley, Doncaster, Box Hill, Clayton). Euclidean distance
// in percentage points; single and complete linkage computed by hand in Python (scratchpad au/b6/ptck.py).
// Lesson family: agglomerative clustering, single vs complete linkage; 0 location-page hits, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'POINT COOK',
    label: 'Point Cook, Melbourne',
    blurb: 'AI and programming classes for Point Cook, with a project that clusters Melbourne suburbs by their Census age mix.'
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
  slug: 'ai-and-programming-classes-in-point-cook-melbourne',
  code: 'ptck',
  accent: '#625EA6',
  accentRationale: 'Point Cook: a soft periwinkle blue (hue 243), chosen by hand at least 15 RGB units from 2,184 colours in content accents, every src/css stylesheet and the claims log, 5.7:1 on white and 5.4:1 on the paper colour #FBF8F2',
  pageType: 'city',
  place: {
    name: 'Point Cook',
    eyebrow: 'Point Cook, City of Wyndham, Melbourne, Victoria',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Melbourne' },
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' },
    { slug: 'vibe-coding-and-ai-agents-classes-in-melbourne', name: 'Melbourne' }
  ],
  nav: [
    { label: 'Melbourne', href: '/vibe-coding-and-ai-agents-classes-in-melbourne' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Point Cook, Melbourne',
  title: 'AI and Programming Classes in Point Cook, Melbourne',
  description: 'Live online AI and programming classes for Point Cook children, teenagers and adults: Scratch, Python and machine learning, in small groups or one to one.',
  ogDescription: 'Point Cook AI classes with a clustering project: which Melbourne suburbs share its young-family age mix? The answer depends on the linkage rule you pick.',
  twitterDescription: 'Point Cook AI and programming classes, live online, first class free.',
  ogImageCourse: 'orange-data-mining-visual-machine-learning-course-for-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Point Cook',
    description: 'Level-matched online AI, machine learning and programming lessons for children, teenagers and adults in Point Cook, taught live in English.'
  },
  h1: 'AI and programming classes in Point Cook',
  capsuleQ: 'What do AI and programming classes look like for Point Cook learners?',
  capsule: 'Live online lessons in which a teacher takes a learner from Scratch or Python up to machine learning, using real public data. Point Cook suits that well: the 2021 Census counted 66,781 residents with a median age of 33, and 10.4% of them, 6,965 children, were aged 5 to 9.',
  lead: 'Point Cook is young. Its Census age chart bulges at the primary-school years, and few Melbourne suburbs look like it. Which ones come closest is a clustering question, and clustering is where many learners first meet machine learning without a single neural network in sight.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Point Cook.',
  picks: {
    eyebrow: 'Course picks for Point Cook',
    h2: 'Courses that lead to clustering and machine learning',
    intro: 'Each course below reaches the grouping ideas in the age-profile project, by a visual route or a coded one. A free first lesson tells us which suits the learner.',
    items: [
      {
        course: 'orange-data-mining-visual-machine-learning-course-for-teens',
        band: 'Ages 13 to 17',
        note: 'Drag-and-drop machine learning, including a hierarchical clustering widget, before any code.'
      },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Python machine learning, from distance measures to models that learn from data.' },
      {
        course: 'data-science-complete-masterclass-college',
        band: 'University and adult',
        note: 'Data cleaning, distance, clustering and honest reporting of results.'
      },
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'The full machine learning toolkit, supervised and unsupervised.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Point Cook in the Census',
      h2: 'A suburb of young families and separate houses',
      intro: 'Figures for the Point Cook suburb (ABS code SAL22086) from the 2021 Census QuickStats, read in October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Point Cook, 2021 Census headline counts',
          head: ['Headline', 'Point Cook'],
          rows: [
            ['Residents', '66,781'],
            ['Median age', '33'],
            ['Families', '18,022'],
            ['Private dwellings', '22,500'],
            ['Average people per household', '3.2'],
            ['Average motor vehicles per dwelling', '1.9']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Point Cook beside Victoria',
          head: ['Measure', 'Point Cook', 'Victoria'],
          rows: [
            ['Homes that are separate houses', '88.0% (17,715)', '73.4%'],
            ['Homes that are flats or apartments', '2.6% (527)', '12.1%'],
            ['Adults with a bachelor degree or higher', '41.1% (19,902)', '29.2%'],
            ['Workers employed as professionals', '28.5% (9,245)', '25.0%'],
            ['Median age', '33', '38']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Under fives', p: '5,686 Point Cook residents, 8.5%, were aged 0 to 4 on Census night.' },
            { h3: 'Ten to fourteen', p: 'Another 5,652, also 8.5%, were aged 10 to 14, the age many learners start Python.' },
            { h3: 'Lockdown caveat', p: 'Census day fell in a Melbourne lockdown, so the 34.1% (11,077) of workers at home overstates a normal week.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau rounds percentages and adjusts small counts for privacy, so we quote each figure exactly as QuickStats prints it and never add parts together to make a total.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Which suburbs have an age mix like Point Cook\'s?',
      intro: 'We took the 18 five-year age bands, as percentages of residents, for eight Melbourne suburbs with pages in this series, and measured how far apart each pair of profiles sits. The distance is our calculation, in percentage points.',
      body: [
        {
          kind: 'table',
          caption: 'Distance from Point Cook\'s age profile (our calculation)',
          head: ['Suburb', 'Distance', 'Closest rank'],
          rows: [
            ['Craigieburn', '4.74', '1'],
            ['Tarneit', '6.43', '2'],
            ['Werribee', '8.79', '3'],
            ['Glen Waverley', '12.12', '4'],
            ['Doncaster', '13.03', '5'],
            ['Box Hill', '18.10', '6'],
            ['Clayton', '26.57', '7']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Cut into three groups, the two linkage rules disagree',
          head: ['Linkage', 'Group A', 'Group B', 'Group C'],
          rows: [
            ['Single (nearest pair)', 'Point Cook, Craigieburn, Werribee, Tarneit, Glen Waverley, Doncaster', 'Box Hill', 'Clayton'],
            ['Complete (farthest pair)', 'Point Cook, Craigieburn, Tarneit', 'Werribee, Glen Waverley, Doncaster', 'Box Hill, Clayton']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Single linkage chains',
              p: 'It measures two groups by their closest members. Werribee sits 5.31 from Craigieburn and 5.97 from Doncaster, so it pulls the eastern pair into the western group.'
            },
            {
              h3: 'Complete linkage splits',
              p: 'It measures groups by their farthest members. Werribee is 8.79 from Point Cook, so it joins Glen Waverley and Doncaster instead, at 6.88.'
            },
            { h3: 'The first merge agrees', p: 'Both rules start by joining Glen Waverley and Doncaster, 4.67 apart, then Point Cook and Craigieburn, 4.74 apart.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'Neither answer is wrong',
          p: 'Single linkage answers "is there a chain of similar suburbs between these two?" Complete linkage answers "is every suburb in this group similar to every other?" A learner who knows that can choose the rule that fits the question.'
        },
        {
          kind: 'p',
          text: 'Eight suburbs is a teaching sample, not a map of Melbourne, and the published percentages are rounded to one decimal. Box Hill and Clayton stand apart: 20 to 24 year olds are 13.2% of Box Hill residents and 22.0% of Clayton residents, against 5.1% in Point Cook.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'How the clustering works',
      h2: 'Merge the two closest groups, then repeat',
      intro: 'Agglomerative clustering starts with every suburb on its own and merges the closest pair of groups until one group is left. The linkage rule defines "closest".',
      body: [
        {
          kind: 'table',
          caption: 'The steps, in plain words',
          head: ['Step', 'What happens'],
          rows: [
            ['1', 'Turn each suburb into a list of 18 percentages.'],
            ['2', 'Measure the straight-line distance between every pair of lists.'],
            ['3', 'Merge the closest two groups, using the chosen linkage rule.'],
            ['4', 'Repeat until the number of groups you want is left.']
          ]
        },
        {
          kind: 'p',
          text: 'We wrote the loop by hand, about twenty lines of Python, so every merge can be printed and checked. The scikit-learn library does the same job, and its AgglomerativeClustering class uses Ward linkage unless told otherwise, a third rule with its own answers.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Sort picture cards of animals into families, then argue about the odd one out.' },
            { h3: 'Secondary students', p: 'Rebuild the distance table from QuickStats and run both linkage rules.' },
            { h3: 'Adults', p: 'Group customers or products, and say which linkage rule was used and why.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Point Cook',
      h2: 'Schools, buses and the term calendar',
      intro: 'From the Victorian school locations file, the public transport timetable feed and the state calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Ten schools',
              p: 'The 2025 school locations file places 10 schools inside Point Cook. Five combine primary and secondary years, such as Featherbrook P-9 College and Saltwater P-9 College.'
            },
            { h3: 'Bus, not train', p: 'No railway station lies inside the boundary; the metropolitan bus feed lists 122 stop entries within it.' },
            { h3: 'Term 1, 2027', p: 'Victorian government school students return on Thursday 28 January 2027; Term 1 closes on Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Suburb boundary',
          p: 'All figures use the ABS boundary of the Point Cook suburb, 38.34 square kilometres. Williams Landing, Hoppers Crossing and the rest of the City of Wyndham are separate.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting cards to machine learning',
    intro: 'Ages are only a guide. The free first lesson decides the starting rung.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and logic',
        p: 'Games about sorting, matching and patterns.',
        courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and simple AI',
        p: 'First programs, then small projects that learn from examples.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Machine learning',
        p: 'Visual tools first, then the same ideas written in Python.',
        courses: ['orange-data-mining-visual-machine-learning-course-for-teens', 'ai-ml-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Data science',
        p: 'Clustering, prediction and clear reports for work or study.',
        courses: ['data-science-complete-masterclass-college', 'ai-ml-masterclass-complete-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI can cluster the suburbs, what is left for a Point Cook learner to do?',
    intro: 'Choosing the question. The clustering code is short; deciding what it should measure is the real work.',
    p1: 'Ask an assistant to group the eight suburbs and it will probably reach for a library with its default settings. In scikit-learn that means Ward linkage, which gives a third grouping. The code runs, a tidy answer appears, and nothing says it was one of several reasonable answers.',
    p2: 'A learner who has run single and complete linkage by hand knows the answer depends on the rule, and can say which rule matches the question being asked. That judgement is what turns AI output into a result someone can rely on.',
    closer: 'In Point Cook, as anywhere, the useful skill is knowing which question the code is answering.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Point Cook lessons, delivered to the kitchen table',
    intro: 'Every class is live on a screen, so learners from any corner of Point Cook join without a drive.',
    cells: [
      { h3: 'Online and live', p: 'A real teacher, a shared screen and the learner\'s own code on every call.' },
      { h3: 'School terms', p: 'Classes run through Victorian terms and stop for the state school holidays.' },
      { h3: 'First lesson', p: 'A complete lesson for free, then a recommendation on course and weekly time.' },
      { h3: 'Small groups', p: 'Groups of five to ten, formed by level, with learners from many places.' },
      { h3: 'Two a week', p: 'Two set lessons a week, about eight a month, so progress keeps moving.' },
      { h3: 'India time', p: 'Our teachers work from India. A 5pm Point Cook class is 11:30am India time in daylight saving, and 12:30pm from April.' }
    ],
    spec: {
      title: 'Times in Melbourne time',
      p: 'Melbourne daylight saving runs from Sunday 4 October 2026 to Sunday 4 April 2027, and India does not change its clocks, so every time we send is in Melbourne time.'
    }
  },
  fees: {
    h2: 'Point Cook class fees',
    intro: 'Three options, nothing hidden.',
    first: 'The first lesson costs nothing, and ends with advice on the right course.',
    group: 'A month of small-group lessons, typically eight, with five to ten learners at one level.',
    private: 'A month of one-to-one lessons, typically eight, with your own teacher.',
    closer: 'Families in Point Cook, like every family outside India, pay in US dollars at the same rate. No payment is taken until the trial has settled the course and time; the pricing page covers holidays and missed lessons.'
  },
  reviewsH2: 'Google reviews from the families we teach',
  book: {
    h2: 'Book a free Point Cook class',
    intro: 'Tell us the learner\'s age and interests. A seven-year-old may start with a Scratch sorting game; a teenager may start with the suburb clustering project.',
    success: 'Thank you. We will contact you shortly about a Point Cook class.'
  },
  faq: {
    h2: 'Point Cook AI and programming questions',
    intro: 'What Point Cook parents and adult learners ask before booking.',
    items: [
      {
        q: 'What is the median age in Point Cook?',
        a: 'The 2021 Census QuickStats give Point Cook a median age of 33, against 38 for Victoria, with 66,781 residents in all.'
      },
      {
        q: 'What is clustering in machine learning?',
        a: 'Clustering groups items that are similar without being told the right answers first. It is unsupervised learning: the program finds the groups from the data alone.'
      },
      {
        q: 'What is the difference between single and complete linkage?',
        a: 'Single linkage measures two groups by their closest members; complete linkage measures them by their farthest members. In our Point Cook project the two rules put Werribee in different groups.'
      },
      {
        q: 'Which suburb is closest to Point Cook in age profile?',
        a: 'Among the eight suburbs we compared, Craigieburn, at a distance of 4.74 percentage points by our calculation, followed by Tarneit at 6.43.'
      },
      {
        q: 'Can a ten-year-old learn about AI?',
        a: 'Yes. At ten, children can train simple models on examples and learn how they go wrong, then move into Python as their typing improves.'
      },
      { q: 'Can Point Cook groups learn Copilot Studio?', a: 'Copilot Studio lessons are private only. Group learners build their AI agents in Python.' },
      {
        q: 'Do you have a centre in Point Cook?',
        a: 'No. Teaching is live online only, there is no Australian office, and the phone number we list is Indian.',
        boiler: true
      },
      {
        q: 'How much are AI classes for Point Cook learners?',
        a: 'The first lesson is free. After that, group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. Course, format and time are agreed before you pay anything.',
        boiler: true
      },
      {
        q: 'How large are the groups?',
        a: 'Between five and ten learners, matched on level, pace and goals rather than age or suburb, with private lessons when no group time fits.',
        boiler: true
      },
      { q: 'Are there classes for adults?', a: 'Yes. Adults learn in adult groups or one to one, often using data from their own work.' }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Point Cook learners',
    html: 'Next door in Wyndham, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-werribee-melbourne">Werribee</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-tarneit-melbourne">Tarneit</a> have their own pages. The <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> cover the wider state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Point Cook and Wyndham',
  footerPlaces: [
    { href: '/best-coding-and-ai-classes-in-werribee-melbourne', label: 'Werribee' },
    { href: '/vibe-coding-and-ai-agents-classes-in-tarneit-melbourne', label: 'Tarneit' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' }
  ],
  personalityCss: `
.cg-root.cg-ptck .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 2.7vw, 2.3rem); }
.cg-root.cg-ptck .cg-hero h1 { font-weight: 640; letter-spacing: -0.017em; line-height: 1.11; }
.cg-root.cg-ptck .cg-capsule { border-top: 2px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-ptck .cg-eyebrow { letter-spacing: 0.06em; font-weight: 650; font-size: 0.82rem; }
.cg-root.cg-ptck .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.009em; }
.cg-root.cg-ptck .cg-grid-3 { gap: clamp(0.9rem, 2.2vw, 1.7rem); }
.cg-root.cg-ptck .cg-table caption { font-style: italic; text-align: left; }
.cg-root.cg-ptck .cg-table th { letter-spacing: 0.02em; }
.cg-root.cg-ptck .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-ptck .cg-callout { border-radius: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Point Cook, ABS Census 2021 QuickStats, Point Cook suburb SAL22086 (read 10 October 2026): 66,781 people; median age 33; 18,022 families; 22,500 private dwellings; 3.2 people per household; 1.9 vehicles per dwelling; separate houses 88.0% (17,715); flats 2.6% (527); bachelor degree or higher 41.1% (19,902); professionals 28.5% (9,245); worked at home 34.1% (11,077, lockdown Census day); aged 0-4 5,686 (8.5%); 5-9 6,965 (10.4%); 10-14 5,652 (8.5%). Victoria: median age 38, houses 73.4%, flats 12.1%, bachelor 29.2%, professionals 25.0%. ABS SAL area 38.336 square kilometres. Victorian School Locations 2025: 10 schools inside the boundary (5 primary/secondary combined, 3 primary, 2 secondary), including Featherbrook P-9 College and Saltwater P-9 College. GTFS Schedule metro bus feed: 122 stop entries inside the boundary; no railway station inside. Victorian 2027 Term 1: 28 January to 25 March. Melbourne daylight saving 4 October 2026 to 4 April 2027.',
    localProject: 'Agglomerative clustering, single vs complete linkage. Inputs: 2021 QuickStats age-band percentages (18 bands) for Point Cook, Craigieburn, Tarneit, Werribee, Glen Waverley, Doncaster, Box Hill, Clayton. Euclidean distance (percentage points). Point Cook to: Craigieburn 4.74, Tarneit 6.43, Werribee 8.79, Glen Waverley 12.12, Doncaster 13.03, Box Hill 18.10, Clayton 26.57. Single linkage merges 4.67 (GW+D), 4.74 (PC+Cr), 5.31 (W), 5.63 (T), 5.97 (GW-D joins), 11.36 (BH+Cl), 11.61. Complete linkage merges 4.67, 4.74, 6.43 (T), 6.88 (W joins GW-D), 11.36, 15.36, 26.57. Three-group cut: single {PC, Cr, W, T, GW, D} {BH} {Cl}; complete {PC, Cr, T} {W, GW, D} {BH, Cl}. scikit-learn AgglomerativeClustering default linkage is ward (API page read 10 October 2026). Script: scratchpad au/b6/ptck.py.',
    requiredMentions: ['66,781', '18,022', '5,652', '17,715', '19,902', '11,077', '6,965', 'Featherbrook P-9 College', '26.57'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Point Cook suburb (SAL22086).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL22086' },
      { claim: 'ABS Census 2021 QuickStats, Craigieburn suburb (SAL20661).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL20661' },
      { claim: 'ABS Census 2021 QuickStats, Clayton suburb (SAL20569).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL20569' },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'Department of Transport and Planning, GTFS Schedule (Creative Commons Attribution 4.0), metropolitan train and bus feeds.',
        url: 'https://discover.data.vic.gov.au/dataset/gtfs-schedule'
      },
      {
        claim: 'scikit-learn AgglomerativeClustering: linkage options ward, complete, average, single; default ward.',
        url: 'https://scikit-learn.org/stable/modules/generated/sklearn.cluster.AgglomerativeClustering.html'
      },
      {
        claim: 'scikit-learn user guide, hierarchical clustering and linkage criteria.',
        url: 'https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (SAL22086 polygon and area).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Victorian Government, school term dates and holidays, 2027 Victorian school term dates.',
        url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria'
      },
      {
        claim: 'IANA time zone database, australasia file: Australia/Melbourne daylight saving rules.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'That Point Cook is the youngest suburb in Melbourne or Victoria: not claimed; only eight suburbs were compared.',
      'Any reason why the suburbs cluster as they do (housing, migration, estate age): not claimed.',
      'Catholic or independent school names and any sector breakdown: not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Sums of age bands into a single child total: not computed; published parts are never summed.',
      'Any affiliation with the City of Wyndham or the Victorian Department of Education.'
    ]
  }
};
