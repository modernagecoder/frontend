'use strict';
// Brimbank, Melbourne (cg- district page, Australia cluster Phase 8, row 263). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), council-area page (ABS LGA21180, Brimbank City Council) under Melbourne and Victoria.
// Spine: where does Sunshine rank among 222 metropolitan stations? Top-k selection with heapq.nlargest against a full
// sort, counting comparisons on the FY24-25 entries file, including where the full sort wins.
// Script: scratchpad au/b8/brim.py. Lesson family: top-k selection with heapq.nlargest; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'BRIMBANK',
    label: 'Brimbank, Melbourne',
    blurb: 'Coding and AI classes for Brimbank, with an algorithms project that ranks 222 train stations by counting comparisons.'
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
  slug: 'best-coding-and-ai-classes-in-brimbank-melbourne',
  code: 'brim',
  accent: '#5A549E',
  accentRationale: 'Brimbank: a soft slate violet (hue 245) chosen by hand at least 10 RGB units from 1,456 accent declarations in content, the shared stylesheets and the claims log, 6.6:1 on white and 5.3:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Brimbank',
    eyebrow: 'Brimbank City Council, Melbourne, Victoria',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Brimbank City Council' },
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
  routeLabel: 'Brimbank, Melbourne',
  title: 'Coding and AI Classes in Brimbank, Melbourne',
  description: 'Live online coding and AI classes for Brimbank learners aged 6 and up: Scratch, Python, algorithms and AI, in small groups or one to one, with a free first lesson.',
  ogDescription: 'A Brimbank algorithms project: find the top stations among 222 without sorting them all, and the point where sorting wins.',
  twitterDescription: 'Brimbank coding and AI classes, live online, first lesson free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Brimbank',
    description: 'Level-matched coding, algorithms and AI lessons for children, teenagers and adults in Brimbank City Council, taught live online in English.'
  },
  h1: 'Coding and AI classes in Brimbank',
  capsuleQ: 'What are the best coding and AI classes for Brimbank learners?',
  capsule: 'Ones that teach a learner to reason about their own code, not just run it. Our Brimbank project asks a real question: Sunshine station ranks 15th of 222 for FY24-25 entries, so how much work does it take to find the top 15? Counting comparisons gives the answer.',
  lead: 'Sunshine station recorded 1,577,600 entries in FY24-25, enough for 15th place among the 222 metropolitan stations in the department\'s file. Finding a top 15 sounds like a job for sorting. Python\'s heapq.nlargest does it with far fewer comparisons, and our measurements also show the point where a plain sort becomes the better choice.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Brimbank.',
  picks: {
    eyebrow: 'Course picks for Brimbank',
    h2: 'Coding, algorithms and AI courses',
    intro: 'The courses below all include problems where the learner measures their code, not just writes it. Start with the free lesson and we will advise.',
    items: [
      {
        course: 'problem-solving-dsa-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Algorithms and data structures, with heaps, sorting and counting the work.'
      },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the basics to modules like heapq and itertools.' },
      {
        course: 'data-structures-algorithms-masterclass-college',
        band: 'University and adult',
        note: 'Data structures and algorithms for interviews and computer science study.'
      },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python programs and simple AI for younger learners.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Brimbank in the 2021 Census',
      h2: 'Who lives in Brimbank',
      intro: 'Read from the QuickStats page for Brimbank (ABS LGA21180) on 10 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Brimbank council area, Census 2021',
          head: ['Figure', 'Brimbank'],
          rows: [
            ['Total people', '194,618'],
            ['Median age', '37'],
            ['Number of families', '51,032'],
            ['Private dwellings counted', '71,808'],
            ['Mean household size', '2.9'],
            ['Mean vehicles per dwelling', '1.9']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Brimbank shares beside the Victorian shares',
          head: ['Share of', 'Brimbank', 'Victoria'],
          rows: [
            ['Dwellings: separate house', '81.5% (52,121)', '73.4%'],
            ['Dwellings: flat or apartment', '4.3% (2,731)', '12.1%'],
            ['People with a bachelor degree or above', '19.8% (31,853)', '29.2%'],
            ['Workers in professional jobs', '16.8% (13,915)', '25.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Aged 5 to 9', p: '11,743 Brimbank residents, or 6.0%, were in this band.' },
            { h3: 'Aged 0 to 4', p: '10,994 residents, 5.6% of the council, were under five.' },
            {
              h3: 'A lockdown count',
              p: 'Melbourne was locked down when the Census was taken, so the 17.9% of Brimbank workers at home (14,851) is a figure for that week only.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'The ABS rounds the percentages it shows and lightly perturbs small counts for confidentiality. We copy each value as printed and do not add categories together.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Top 15 without sorting all 222',
      intro: 'The FY24-25 file lists annual entries for 222 metropolitan stations. We wrapped each value in a small class that counts every comparison, then asked two methods for the top k: heapq.nlargest, and sorted() followed by a slice. Both always returned the same stations in the same order.',
      body: [
        {
          kind: 'table',
          caption: 'Comparisons needed for the top k of 222 stations (our calculation)',
          head: ['k', 'heapq.nlargest', 'Full sort, then slice'],
          rows: [
            ['1', '221', '1,435'],
            ['5', '281', '1,435'],
            ['15 (down to Sunshine)', '514', '1,435'],
            ['50', '996', '1,435'],
            ['100', '1,532', '1,435'],
            ['200', '1,734', '1,435']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Brimbank stations in the FY24-25 ranking',
          head: ['Station', 'Rank of 222', 'Entries'],
          rows: [
            ['Sunshine', '15', '1,577,600'],
            ['Watergardens', '23', '1,295,450'],
            ['St Albans', '35', '962,650'],
            ['Ginifer', '64', '624,500'],
            ['Keilor Plains', '68', '599,750'],
            ['Albion', '114', '413,900']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Small k, big saving',
              p: 'For the top five, nlargest needed 281 comparisons against 1,435 for the sort. It keeps a heap of only k items and checks each new station against the smallest of them.'
            },
            {
              h3: 'Where sorting wins',
              p: 'At k = 100 the sort used 1,435 comparisons and nlargest 1,532. Once k is a large slice of the list, sorting once is cheaper. The Python documentation says the same: these functions suit smaller values of n.'
            },
            {
              h3: 'Order of the input matters',
              p: 'For the top five, feeding stations in rising order made nlargest work hardest (829 comparisons); falling order needed 232. Across 200 random shuffles it averaged about 288.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'At 222 rows, both are instant',
          p: 'On a list this size the difference is microseconds, and sorted() is the clearer code. Counting comparisons is how learners see why the heap matters when the list holds millions of rows and k stays small.'
        },
        {
          kind: 'p',
          text: 'Entries are the department\'s modelled annual figures, rounded to the nearest 50, and station membership in Brimbank is our point-in-polygon test against the ABS outline. Two stations elsewhere share an identical total; neither sits near the top 15, so ties do not affect these results.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Counting the work',
      h2: 'How learners measure comparisons',
      intro: 'A tiny wrapper class makes an algorithm\'s hidden work visible without any extra tools.',
      body: [
        {
          kind: 'table',
          caption: 'The counting trick',
          head: ['Part', 'Job'],
          rows: [
            ['A class with a value', 'Holds one station\'s entries.'],
            ['Its __lt__ method', 'Adds one to a counter, then compares values.'],
            ['Reset the counter', 'Before each method is timed.'],
            ['Check the answers match', 'So a faster method is never a wrong one.']
          ]
        },
        {
          kind: 'p',
          text: 'The same trick works for any algorithm a learner writes: bubble sort, binary search or their own selection routine. Seeing 1,435 become 281 sticks far better than reading about it.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Find the tallest five in a class by keeping a shortlist on paper, and count how many times you compared heights.' },
            { h3: 'Teenagers', p: 'Write the counter class, compare nlargest with sorting, and find the crossing point on their own data.' },
            { h3: 'Adults', p: 'Profile a slow report at work and replace a full sort where only the top rows are used.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Local counts',
      h2: 'Brimbank schools and stations',
      intro: 'Counted from the Victorian school locations list for 2025 and the metropolitan entries file.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: '38 government schools', p: 'In the 2025 list Brimbank has 29 primary, 6 secondary and 3 specific-purpose government schools.' },
            { h3: 'Six stations', p: 'Sunshine, Watergardens, St Albans, Ginifer, Keilor Plains and Albion sit inside the council boundary used on this page.' },
            { h3: 'School year 2027', p: 'Victorian government school students start Term 1 on Thursday 28 January 2027; the term finishes on Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'The council area',
          p: 'Figures follow the ABS boundary of Brimbank City Council, about 123.4 square kilometres. School addresses inside it include Sunshine, St Albans, Deer Park, Keilor Downs, Taylors Lakes and Derrimut.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From shortlists to heaps',
    intro: 'A rough guide by age. The free lesson finds the real level.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Scratch puzzles',
        p: 'Sorting games and step-by-step instructions.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 9 to 12',
        h3: 'Python basics',
        p: 'Lists, loops and the first simple algorithms.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Algorithms in Python',
        p: 'Heaps, sorting, searching and measuring work.',
        courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Computer science depth',
        p: 'Data structures, algorithms and AI for careers.',
        courses: ['data-structures-algorithms-masterclass-college', 'ai-ml-masterclass-complete-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Does a Brimbank teenager need algorithms if AI writes the code?',
    intro: 'More than ever, because the AI will not say which choice it made.',
    p1: 'Ask an assistant for the top 15 stations and it may sort the whole list or use a heap; both are correct. Whether that choice matters depends on how big the list will grow and how many rows are needed, and only the person who knows the job can judge that.',
    p2: 'A learner who has watched comparisons fall from 1,435 to 514, and then rise above the sort at k = 100, can read generated code and say whether it fits. That habit turns AI from a guess machine into a fast assistant.',
    closer: 'Brimbank learners get the most from AI when they can check its choices.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Brimbank lessons, online',
    intro: 'Classes happen over video, so learners in Deer Park, Sunshine or Taylors Lakes join without travel.',
    cells: [
      { h3: 'Shared screens', p: 'Teacher and learner look at the same code and run it together.' },
      { h3: 'Term rhythm', p: 'The timetable follows Victorian school terms and stops for the holidays.' },
      { h3: 'Trial at no cost', p: 'The first full lesson is free, and we recommend a course afterwards.' },
      { h3: 'Groups by level', p: 'Fifteen to twenty learners at the same stage, gathered from many places.' },
      { h3: 'Two per week', p: 'Two fixed lessons a week, close to eight in a month.' },
      { h3: 'Teaching hours', p: 'A 4pm Brimbank lesson is 10:30am India time during Melbourne daylight saving and 11:30am after it.' }
    ],
    spec: {
      title: 'Daylight saving',
      p: 'Melbourne clocks are ahead by an hour from Sunday 4 October 2026 to Sunday 4 April 2027. India keeps one time all year, so all our times are given in Melbourne time.'
    }
  },
  fees: {
    h2: 'Brimbank class fees',
    intro: 'The same clear fees for each family.',
    first: 'There is no charge for the first lesson, which ends with our advice.',
    group: 'Group learning: one month, around eight lessons, fifteen to twenty in a group.',
    private: 'Private learning: one month, around eight lessons, one learner and one teacher.',
    closer: 'Brimbank families pay in US dollars. You only pay once the trial has fixed the course and a regular time; holidays and missed lessons are explained on the pricing page.'
  },
  reviewsH2: 'What families say about us on Google',
  book: {
    h2: 'Book a free Brimbank class',
    intro: 'Let us know the learner\'s age and interests. A young learner might make a Scratch sorting game; a teenager might race heapq against sorted().',
    success: 'Thank you. We will be in touch soon about a Brimbank class.'
  },
  faq: {
    h2: 'Brimbank coding and AI questions',
    intro: 'Common questions from Brimbank parents and adult learners.',
    items: [
      { q: 'What is the population of Brimbank?', a: 'The 2021 Census counted 194,618 people in Brimbank City Council, with a median age of 37.' },
      {
        q: 'What does heapq.nlargest do?',
        a: 'heapq.nlargest(k, data) returns the k largest items in descending order. It keeps a small heap of k items, so it does less work than a full sort when k is small.'
      },
      {
        q: 'When is sorting better than heapq.nlargest?',
        a: 'When k is a large share of the list. In our test on 222 stations, sorting needed fewer comparisons from about k = 100 upwards.'
      },
      {
        q: 'Which Brimbank station had the most entries in FY24-25?',
        a: 'Sunshine, with 1,577,600 entries, 15th among the 222 stations in the department\'s file.'
      },
      { q: 'What age can children start coding?', a: 'From about six with picture blocks like Scratch. Typed Python usually starts around nine or ten.' },
      {
        q: 'Do you teach algorithms for university or interviews?',
        a: 'Yes. Our data structures and algorithms course is for university students and adults, in groups or one to one.'
      },
      {
        q: 'Is there a Brimbank classroom?',
        a: 'No. All teaching is live online; we have no Australian office and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'How much do Brimbank classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How big is each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, mixed across suburbs and ages; one-to-one lessons are available if no group fits.',
        boiler: true
      },
      { q: 'Can adults in Brimbank learn too?', a: 'Yes. Adults learn in adult groups or one to one, from first steps in Python to AI.' }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Brimbank learners',
    html: 'Go to the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a> for the city, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> for the state, or <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">coding for kids in Melbourne</a> for younger children.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Brimbank and Melbourne',
  footerPlaces: [
    { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-for-kids-melbourne', label: 'Kids in Melbourne' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-brim .cg-hero-grid { align-items: center; gap: clamp(0.9rem, 2.4vw, 2rem); }
.cg-root.cg-brim .cg-hero h1 { font-weight: 640; letter-spacing: -0.018em; line-height: 1.1; }
.cg-root.cg-brim .cg-capsule { border-top: 2px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-brim .cg-eyebrow { letter-spacing: 0.06em; font-weight: 700; font-size: 0.8rem; }
.cg-root.cg-brim .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.01em; }
.cg-root.cg-brim .cg-grid-3 { gap: clamp(0.85rem, 2.5vw, 1.9rem); }
.cg-root.cg-brim .cg-table caption { text-align: left; font-weight: 600; font-size: 0.95rem; }
.cg-root.cg-brim .cg-table td:nth-child(3) { white-space: nowrap; }
.cg-root.cg-brim .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-brim .cg-callout { border-radius: 8px; }
`,
  dossier: {
    curriculumAuthority: 'Brimbank City Council, ABS Census 2021 QuickStats, LGA21180 (read 10 October 2026): 194,618 people; median age 37; 51,032 families; 71,808 private dwellings; 2.9 people per household; 1.9 vehicles per dwelling; aged 0-4 10,994 (5.6%); 5-9 11,743 (6.0%); bachelor or higher 31,853 (19.8%, Victoria 29.2%); professionals 13,915 (16.8%, Victoria 25.0%); worked at home 14,851 (17.9%, lockdown Census day); separate houses 52,121 (81.5%, Victoria 73.4%); flats 2,731 (4.3%, Victoria 12.1%). ABS LGA area 123.40 square kilometres. Victorian School Locations 2025: 38 government schools in Brimbank (C): 29 primary, 6 secondary, 3 special. DTP FY24-25 metro stations inside the polygon, rank of 222: Sunshine 15 (1,577,600), Watergardens 23 (1,295,450), St Albans 35 (962,650), Ginifer 64 (624,500), Keilor Plains 68 (599,750), Albion 114 (413,900). 2027 Term 1: 28 January to 25 March. Melbourne daylight saving 4 October 2026 to 4 April 2027.',
    localProject: 'Top-k selection on DTP FY24-25 annual entries, 222 stations, comparisons counted with a __lt__ counter. heapq.nlargest vs sorted(reverse=True)[:k], identical results every time. k=1: 221 vs 1,435; k=5: 281 vs 1,435; k=15: 514 vs 1,435; k=50: 996 vs 1,435; k=100: 1,532 vs 1,435 (sort wins); k=200: 1,734 vs 1,435. Top-5 input order: ascending 829, descending 232, 200 random shuffles min 259, mean 287.9, max 317. One tied value (Ashburton and Westgarth, 201,950), outside the top 15. Script: scratchpad au/b8/brim.py.',
    requiredMentions: ['194,618', '51,032', '71,808', '11,743', '52,121', '31,853', '1,577,600', '1,435', 'Keilor Plains'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Brimbank local government area (LGA21180).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA21180'
      },
      {
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (council polygons and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'Python documentation, heapq: nlargest is equivalent to sorted(...)[:n] and performs best for smaller values of n.',
        url: 'https://docs.python.org/3/library/heapq.html'
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
      'That Watergardens or any station officially belongs to Brimbank: not claimed; membership is our point-in-polygon test.',
      'That heapq is always faster: not claimed; sorting wins from about k = 100 on this list.',
      'Catholic and independent school counts: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Sums of Census age bands into a child total: not computed.',
      'Any affiliation with Brimbank City Council or the Victorian Department of Education.'
    ]
  }
};
