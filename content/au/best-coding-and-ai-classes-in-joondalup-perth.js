'use strict';
// Joondalup, Perth (cg- district page, Australia cluster Phase 8, row 299). Keyword slug best-coding-and-ai-classes-in-*,
// council page (ABS LGA54170, City of Joondalup) under Perth and Western Australia.
// Spine: a SQL self-join pairs Main Roads count sites on the same road. On 81 Joondalup sites the plain join gives 381 rows,
// 300 without self-pairs, 150 with a.site < b.site and 123 when both counts come from the same year. The largest "gap" is a
// two-way freeway count against one-direction counts, so the honest headline is Ocean Reef Rd, 4,806 vs 41,893 (2024/25).
// Script: scratchpad au/b13/a_jdlp.py. Lesson family: SQL self-join; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'JOONDALUP',
    label: 'Joondalup, Perth',
    blurb: 'Coding and AI classes for the City of Joondalup, with a SQL project that pairs traffic counters on the same road and learns why 381 rows shrink to 123.'
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
  slug: 'best-coding-and-ai-classes-in-joondalup-perth',
  code: 'jdlp',
  accent: '#374E91',
  accentRationale: 'Joondalup: a muted lake blue (hue 224.7, s 0.62, v 0.57), at least 26.6 RGB from every WA page accent, 12.6 from other AU accents and 7.9 from every other site colour; 6.4:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Joondalup',
    eyebrow: 'City of Joondalup, northern Perth, Western Australia',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'City of Joondalup' },
      { type: 'City', name: 'Perth' },
      { type: 'AdministrativeArea', name: 'Western Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-western-australia', name: 'Western Australia' },
    { slug: 'online-coding-and-python-classes-in-perth-western-australia', name: 'Perth' }
  ],
  nav: [
    { label: 'Perth', href: '/online-coding-and-python-classes-in-perth-western-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Joondalup, Perth',
  title: 'Best Coding and AI Classes in Joondalup, Perth',
  description: 'Live online coding and AI classes for the City of Joondalup, ages 6 to adult, with a SQL self-join project built on 81 Main Roads traffic count sites.',
  ogDescription: 'Pair every Joondalup traffic counter with the others on its road. The first join returns 381 rows; a careful one returns 123.',
  twitterDescription: 'Joondalup coding and AI classes, live online, first lesson free.',
  ogImageCourse: 'mysql-database-complete-masterclass-college',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Joondalup',
    description: 'Programming, databases and AI lessons for children, teenagers and adults in the City of Joondalup, placed by level and taught live online.'
  },
  h1: 'Coding and AI classes in Joondalup',
  capsuleQ: 'How do Joondalup learners choose the best coding and AI classes?',
  capsule: 'Ask what a learner will be able to check, not just build. Our Joondalup project gives one concrete test. Learners pair every road traffic counter in the city with every other counter on the same road. A careless SQL join returns 381 rows, and a careful one returns 123. A course that teaches the reasons for that gap is worth choosing.',
  lead: 'The City of Joondalup runs along the coast from Marmion Avenue to Wanneroo Road. Main Roads Western Australia lists 81 traffic count sites inside it on 30 named roads, from Mitchell Freeway to quiet streets in Edgewater. Those sites make a small, honest table for learning how databases compare rows with each other.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Joondalup.',
  picks: {
    eyebrow: 'Course picks for Joondalup',
    h2: 'Databases, Python and AI',
    intro: 'Four courses that suit the SQL project below. The free first lesson places each learner at the right level.',
    items: [
      {
        course: 'mysql-database-complete-masterclass-college',
        band: 'University and adult',
        note: 'Tables, joins and queries that can be checked line by line.'
      },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Real public data in Python, with every number traced to its row.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 17', note: 'Counting arguments and careful loops behind every join.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python and AI projects in short, testable steps.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'The City of Joondalup in numbers',
      h2: 'Coastal homes, school-age children and a rail line',
      intro: 'From the 2021 Census QuickStats for the Joondalup council area (ABS LGA54170), read on 12 October 2026, with a newer population estimate.',
      body: [
        {
          kind: 'table',
          caption: 'City of Joondalup headline counts',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents at the 2021 Census', '160,003'],
            ['Estimated residents, 2025 (ABS)', '176,595'],
            ['Median age', '41'],
            ['Families', '46,463'],
            ['Private dwellings', '62,144'],
            ['Bedrooms per dwelling', '3.7']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'City of Joondalup shares beside Western Australia',
          head: ['Share', 'Joondalup', 'WA'],
          rows: [
            ['Separate houses', '88.6% (50,982)', '79.7%'],
            ['Train to work', '3.9% (3,259)', '1.8%'],
            ['Bachelor degree or higher', '27.0% (35,118)', '23.8%'],
            ['Residents aged 10 to 14', '7.0% (11,200)', '6.4%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Two estimates',
              p: 'The Census counted 160,003 residents in 2021. The ABS estimate for 2025 is 176,595. The two are different measures, so we print both rather than subtract one from the other.'
            },
            {
              h3: 'Rail commuters',
              p: 'The Joondalup line runs up the middle of the city, and the share of workers taking a train was more than double the state figure.'
            },
            {
              h3: 'Schools',
              p: 'Our map test puts 53 government schools inside the council outline, 35 of them primary schools. These are our counts from the Department of Education list.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'Census night fell during the pandemic, so travel figures describe that week rather than a typical one. The bureau also rounds and lightly adjusts small counts, which is why parts of its tables do not always add to its totals. We copy its figures as published.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'One table, joined to itself',
      intro: 'The question sounds simple: on each Joondalup road with more than one counter, which two counters disagree the most? Answering it means joining the table of 81 sites to itself, once as a and once as b, wherever the road name matches. Every refinement below is a line of SQL, and each changes the answer.',
      body: [
        {
          kind: 'table',
          caption: 'Rows returned as the self-join is tightened (our calculation)',
          head: ['Join condition', 'Rows', 'What changed'],
          rows: [
            ['a.road = b.road', '381', 'Every site also matches itself'],
            ['and a.site <> b.site', '300', '81 self-pairs removed'],
            ['and a.site < b.site', '150', 'Each pair kept once, not twice'],
            ['and a.year = b.year', '123', 'Only counts from the same year compared']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Where 381 comes from',
              p: 'A road with n counters produces n times n matches. Marmion Avenue alone has 11 counters, so it contributes 121 rows before any filter.'
            },
            {
              h3: 'Mirror images',
              p: 'Without the less-than test, the pair (A, B) appears again as (B, A). The count halves from 300 to 150 and every comparison is reported once.'
            },
            {
              h3: 'Mixed years',
              p: 'Main Roads lists the latest count year for each site, from 2021/22 to 2025/26 here. Comparing a 2021 count with a 2025 count measures time as well as place, so 27 pairs drop out.'
            }
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Largest weekday gaps between two counters on one road, same year (Main Roads figures, pairing ours)',
          head: ['Road', 'Counter A', 'Counter B', 'Year'],
          rows: [
            ['Mitchell Fwy', 'South of Ocean Reef Rd: 107,726', 'At Shenton Av Bridge, southbound: 32,601', '2021/22'],
            ['Ocean Reef Rd', 'North of Hodges Dr: 4,806', 'West of Joondalup Dr: 41,893', '2024/25'],
            ['Marmion Av', 'North of Shenton Av: 21,966', 'North of Hepburn Av: 37,057', '2024/25']
          ]
        },
        {
          kind: 'callout',
          h3: 'The top row is a trap',
          p: 'The two Shenton Avenue Bridge counters record one direction each, while the site south of Ocean Reef Road counts both. The largest gap in the table is a difference in definition, not in traffic. Learners add a rule that compares only like with like, and the honest leader becomes Ocean Reef Road, where one end carries nearly nine times the weekday volume of the other.'
        },
        {
          kind: 'p',
          text: 'Volumes are average weekday vehicles from the Main Roads Traffic Digest, downloaded on 12 October 2026, using the council name Main Roads attaches to each site. The joins, pair counts and ratios are our own calculation. Our script is in plain SQLite so anyone can rerun it.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Writing the query',
      h2: 'Two aliases and a careful ON clause',
      intro: 'A self-join gives the same table two names. Everything that matters happens in the conditions that link them.',
      body: [
        {
          kind: 'table',
          caption: 'The lesson in steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Load the 81 Joondalup sites into a SQLite table with road, place, year and weekday volume.'],
            ['2', 'Predict the row count of the plain join, then run it and explain 381.'],
            ['3', 'Add the inequality, the year match and a direction rule one at a time, recording the count after each.'],
            ['4', 'Rank the surviving pairs by ratio and write one sentence per result a stranger could check.']
          ]
        },
        {
          kind: 'p',
          text: 'The prediction in step 2 is the heart of it. Before running anything, learners group the sites by road and add up the squares of the group sizes. If the database returns a different number, either the prediction or the data is wrong, and finding out which is real debugging. Thirteen of the 30 roads have a single counter, so they add one row each and pair with nothing once self-matches go.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Match cards that share a colour and count the pairs by hand, then spot the cards matched with themselves.' },
            { h3: 'Teenagers', p: 'Write the four queries, chart the row counts and explain each drop in their own words.' },
            { h3: 'Adults', p: 'Use the same pattern to compare branches, stores or sensors that share a key in a work database.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around the city',
      h2: 'Busy corridors and 2027 dates',
      intro: 'Local details from the Main Roads Traffic Digest and the WA Department of Education.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Freeway peak',
              p: 'The site south of Ocean Reef Road on Mitchell Freeway averages 101,649 vehicles a day across the week, the highest in the city, from a 2021/22 count.'
            },
            {
              h3: 'Coastal spine',
              p: 'Marmion Avenue has the most counters of any Joondalup road. Its weekday averages run from 21,966 north of Shenton Avenue to 37,057 north of Hepburn Avenue.'
            },
            { h3: 'Term 1, 2027', p: 'WA public schools return on Monday 1 February 2027 and Term 1 ends on Friday 9 April, a natural point to start a course.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Boundaries used',
          p: 'The council area is the ABS outline of about 98.9 square kilometres. Traffic sites are those Main Roads assigns to the City of Joondalup; school counts come from our own point-in-polygon test on the Department of Education coordinates.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From matching cards to database joins',
    intro: 'Ages are a guide only; the free lesson decides where a learner starts.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Sort and match',
        p: 'Block-code games about grouping and counting.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 9 to 12',
        h3: 'First tables',
        p: 'Python lists and simple counting programs.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Queries and data',
        p: 'SQL, Python and honest comparisons on public data.',
        courses: ['data-science-course-for-teens-python-data', 'problem-solving-dsa-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Databases at work',
        p: 'Schema design, joins and query checking.',
        courses: ['mysql-database-complete-masterclass-college', 'data-analysis-mastery-course-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Can an AI assistant write the join instead?',
    intro: 'It can write one quickly. Knowing whether it is right is the skill.',
    p1: 'Ask an AI tool for pairs of counters on the same road and it will usually produce a valid self-join. Whether it remembers the self-pairs, the mirror duplicates, the mixed years and the directional sites is another matter, and each slip changes the answer.',
    p2: 'A learner who has predicted 381 from the group sizes can read generated SQL and see at once which condition is missing. That habit of checking a row count before trusting a result transfers to every tool they will meet.',
    closer: 'In Joondalup classes, AI writes drafts and learners verify them.',
    blogAnchor: 'why learning to code still matters when AI can write it'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Joondalup classes run',
    intro: 'Every lesson is live on video with a teacher, so learners join from home anywhere in the city.',
    cells: [
      { h3: 'A real teacher', p: 'Each session is taught in real time, with questions answered and code reviewed as it is written.' },
      { h3: 'WA school year', p: 'Classes follow the Western Australian terms and pause for school holidays.' },
      { h3: 'Placement first', p: 'The first lesson is free and ends with a written course suggestion.' },
      { h3: 'Small groups', p: 'Five to ten learners at a similar level, or one-to-one lessons.' },
      { h3: 'Steady pace', p: 'Two lessons a week, roughly eight in a month.' },
      { h3: 'Time in India', p: 'A 5pm Joondalup lesson is 2:30pm in India on every day of the year.' }
    ],
    spec: {
      title: 'Perth time',
      p: 'Western Australia has kept the same clock since daylight saving last ended in March 2009, according to the IANA time zone database, so Perth stays two and a half hours ahead of India.'
    }
  },
  fees: {
    h2: 'Fees for Joondalup learners',
    intro: 'The same fees apply to every learner in every suburb.',
    first: 'The first lesson costs nothing and comes with a course plan.',
    group: 'Group classes: about eight lessons a month with five to ten learners.',
    private: 'Private classes: about eight lessons a month with one teacher.',
    closer: 'Fees are charged in US dollars and begin only after the free lesson has settled the course and a weekly time. The pricing page explains holidays and missed lessons.'
  },
  reviewsH2: 'Google reviews from families',
  book: {
    h2: 'Book a free Joondalup lesson',
    intro: 'Tell us the learner\'s age and interests. A primary student might match and count cards; a teenager might write the first two Joondalup joins.',
    success: 'Thank you. We will be in touch soon about a Joondalup lesson.'
  },
  faq: {
    h2: 'Joondalup coding and AI questions',
    intro: 'Answers for Joondalup parents and adult learners.',
    items: [
      {
        q: 'How many people live in the City of Joondalup?',
        a: 'The 2021 Census counted 160,003 residents, and the ABS estimated 176,595 for 2025. The median age at the Census was 41.'
      },
      {
        q: 'What is a self-join in SQL?',
        a: 'A query that joins a table to itself under two aliases, so each row can be compared with other rows of the same table, such as counters on the same road.'
      },
      {
        q: 'Why did the plain join return 381 rows?',
        a: 'Each road with n counters matches n times n rows, including every counter with itself. Adding those up over 30 Joondalup roads gives 381.'
      },
      {
        q: 'Is SQL useful for AI work?',
        a: 'Yes. Most training data starts in a database, and a wrong join quietly duplicates or drops rows before any model sees them.'
      },
      { q: 'Do children learn SQL?', a: 'Younger learners start with sorting and matching in block code. Real SQL usually begins around age 13.' },
      {
        q: 'How many traffic counters does Joondalup have?',
        a: 'The Main Roads Traffic Digest downloaded on 12 October 2026 lists 81 count sites in the City of Joondalup, on 30 roads.'
      },
      {
        q: 'Do you have a centre in Joondalup?',
        a: 'No. All classes are live online, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Joondalup classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How are groups formed?',
        a: 'By level and pace, with five to ten learners, not by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Can adults join?', a: 'Yes. Adults learn in adult groups or one to one, often with data or databases from their own work.' }
    ]
  },
  next: {
    eyebrow: 'More for Perth learners',
    h2: 'Keep exploring',
    html: 'Visit the <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">Perth page</a> for the whole city, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">Western Australia guide</a> for the state, and <a class="cg-inline-link" href="/coding-classes-for-kids-perth">coding for Perth children</a> for younger learners.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Joondalup and Perth',
  footerPlaces: [
    { href: '/ai-classes-for-teens-australia', label: 'AI for teens' },
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' },
    { href: '/coding-classes-for-kids-perth', label: 'Kids in Perth' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-jdlp .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.6vw, 2.2rem); }
.cg-root.cg-jdlp .cg-hero h1 { font-weight: 640; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-jdlp .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-jdlp .cg-eyebrow { letter-spacing: 0.11em; font-weight: 640; font-size: 0.76rem; }
.cg-root.cg-jdlp .cg-section-head h2 { max-width: 21ch; }
.cg-root.cg-jdlp .cg-grid-3 { gap: clamp(0.9rem, 2.4vw, 1.6rem); }
.cg-root.cg-jdlp .cg-table caption { text-align: left; font-weight: 600; font-size: 0.88rem; }
.cg-root.cg-jdlp .cg-table td { hyphens: auto; }
.cg-root.cg-jdlp .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.6rem; }
.cg-root.cg-jdlp .cg-callout { border-radius: 2px; border-left-width: 5px; }
`,
  dossier: {
    curriculumAuthority: 'City of Joondalup (LGA54170), ABS Census 2021 QuickStats (read 12 October 2026): 160,003 people; median age 41; 46,463 families; 62,144 private dwellings; 3.7 bedrooms per dwelling; separate houses 50,982 (88.6%, WA 79.7%); train to work 3,259 (3.9%, WA 1.8%); bachelor or higher 35,118 (27.0%, WA 23.8%); aged 10-14 11,200 (7.0%, WA 6.4%). ABS ERP 2025 (ABS_ANNUAL_ERP_LGA2025, LGA 54170): 176,595. ABS LGA area 98.942 sq km. WA Dept of Education schools list (2026 Semester 1 census): 53 government schools inside the LGA polygon by our point-in-polygon test, 35 primary. Main Roads Traffic Digest: 81 sites with LG_NAME Joondalup (C), 30 roads; Mitchell Fwy South of Ocean Reef Rd MON_SUN 101,649 (2021/22); Marmion Av 11 sites, weekday 21,966 to 37,057. WA 2027 Term 1: Monday 1 February to Friday 9 April. Perth +8:00, last DST ended March 2009 (IANA 2026e).',
    localProject: 'SQLite self-join on 81 Joondalup Traffic Digest sites keyed by road: a.road=b.road 381 rows (sum of squared group sizes); a.site<>b.site 300; a.site<b.site 150; same TRAFFIC_YEAR 123. 17 roads with 2+ sites, 13 single-site roads. Largest weekday gap same year: Mitchell Fwy South of Ocean Reef Rd 107,726 vs SB At Shenton Av Bridge 32,601 (two-way vs one-direction, definition mismatch); like-for-like leader Ocean Reef Rd North of Hodges Dr 4,806 vs West of Joondalup Dr 41,893 (2024/25, ratio 8.7). Marmion Av 11 sites, 55 pairs, 45 same year. Our calculation. Script: scratchpad au/b13/a_jdlp.py.',
    requiredMentions: ['176,595', '62,144', '88.6% (50,982)', '3.9% (3,259)', 'Ocean Reef Rd', '4,806', 'North of Hodges Dr', '101,649', '21,966'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Joondalup local government area (LGA54170), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA54170'
      },
      {
        claim: 'ABS Data API, Estimated Resident Population by LGA 2001 to 2025 (ABS_ANNUAL_ERP_LGA2025), Joondalup LGA 54170, total persons, 2025.',
        url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT.54170.LGA2025.A?format=csvfilewithlabels'
      },
      {
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (council outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Main Roads Western Australia, Traffic Digest (count sites with average weekday, weekend and all-day volumes and heavy vehicle shares for the latest count year), Creative Commons Attribution 4.0, downloaded 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/mrwa-traffic-digest'
      },
      {
        claim: 'WA Department of Education, Western Australian Schools Lists (Excel), currently active schools with student numbers as at the 2026 Semester 1 census, Creative Commons Attribution 4.0, downloaded 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/western-australian-schools-lists'
      },
      {
        claim: 'WA Department of Education, future term dates: 2027 Term 1 Monday 1 February to Friday 9 April; Term 3 Monday 19 July to Friday 24 September.',
        url: 'https://www.education.wa.edu.au/future-term-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Perth at +8:00 on rule AW, whose last daylight saving period ended on the last Sunday of March 2009.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Real-time or peak-hour traffic: not claimed; the digest gives average daily volumes for each site\'s latest count year.',
      'Adding the northbound and southbound Mitchell Fwy counts at Shenton Av Bridge: not done; published parts are never summed.',
      'Naming individual schools: not used.',
      'Joondalup suburb (SAL) figures: the page uses the council area only.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the City of Joondalup, Main Roads WA or the WA Department of Education.'
    ]
  }
};
