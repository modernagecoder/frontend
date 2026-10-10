'use strict';
// Sutherland Shire, Sydney (cg- district page, Australia cluster Phase 8, row 213). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), council-area page under Sydney and New South Wales.
// Spine: when Python code reads station rows as plain lists, one wrong index silently returns nothing; how do
// named tuples make the same code readable and loud when it is wrong?
// Data: Transport for NSW, Train Station Entries and Exits (Opal, monthly, CC BY), file read 10 October 2026,
// October 2024 to August 2026. Stations inside the Sutherland Shire LGA by our point-in-polygon check of the NSW
// Transport Theme station points (c) Spatial Services against ABS 2021 LGA polygons: Sutherland, Miranda,
// Cronulla, Caringbah, Jannali, Gymea, Kirrawee, Woolooware, Engadine, Como, Heathcote, Loftus, Waterfall (13).
// Rows for these stations: 598 (13 stations x 23 months x entry and exit), none recorded as "Less than 50".
// Our checks (scratchpad au/b2/p3_sth.py): filtering column index 2 for "Entry" returns 0 of 598 rows (that column
// holds the station type); the named field direction returns 299 entry rows. August 2026 entries: Sutherland
// 152,354, Miranda 81,783, Cronulla 61,856, Caringbah 61,198, Jannali 57,285, Gymea 44,524, Kirrawee 42,051,
// Woolooware 28,792, Engadine 28,748, Como 15,773, Heathcote 11,931, Loftus 9,983, Waterfall 9,839. Exits the
// same month: Waterfall 10,223 above Loftus 9,139, so the two swap places; Miranda exits 85,455. Lowest monthly
// entry count in the 23 months: Loftus, January 2025, 5,529.
// Lesson family: namedtuple records vs positional tuple indexes; screened 0 page hits 10 October 2026.
// Place facts: ABS Census 2021 QuickStats, Sutherland Shire LGA (LGA17150); NSW Department of Education master
// dataset (CC BY), Date_extracted 2026-10-02, rows with LGA "Sutherland": 62.
// Excluded: income, rent, mortgage, tenure, ancestry, birthplace, language, religion, health; enrolment, ICSEA,
// Indigenous, LBOTE and selective columns.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'SUTHERLAND SHIRE',
    label: 'Sutherland Shire, Sydney',
    blurb: 'Online coding and Python for the Sutherland Shire, with a project on why named tuples catch a bug that plain lists hide.'
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
  slug: 'online-coding-and-python-classes-in-sutherland-shire-sydney',
  code: 'suth',
  accent: '#143D83',
  accentRationale: 'Sutherland Shire: a deep bay blue (hue 218), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 10.37:1 on white and 8.42:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Sutherland Shire',
    eyebrow: 'Sutherland Shire, Sydney, New South Wales',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Sydney' },
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' },
    { slug: 'best-coding-classes-in-sydney', name: 'Sydney' }
  ],
  nav: [
    { label: 'Sydney', href: '/best-coding-classes-in-sydney' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Sutherland Shire, Sydney',
  title: 'Online Coding and Python Classes in Sutherland Shire, Sydney',
  description: 'Live online coding and Python classes for children, teenagers and adults in the Sutherland Shire, Engadine to Cronulla. Group or one to one; first lesson free.',
  ogDescription: 'Python classes for the Sutherland Shire, with a project that reads 598 rows of station data and shows how named tuples expose a bug plain lists hide.',
  twitterDescription: 'Sutherland Shire online coding and Python classes, live for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for the Sutherland Shire',
    description: 'Level-matched online coding and Python for children, teenagers and adults in the Sutherland Shire council area of Sydney, taught live in English.'
  },
  h1: 'Online coding and Python classes in the Sutherland Shire',
  capsuleQ: 'Which are the best online coding and Python classes for the Sutherland Shire?',
  capsule: 'Live classes on video where a teacher and learner write Python together, starting with Scratch for young children and moving to files, data and clean code for teenagers and adults. The Shire is a large council area: the 2021 Census counted 230,211 people across about 334 square kilometres, with a median age of 41.',
  lead: 'A Python program reads 598 rows of train data for the thirteen stations inside the Shire and keeps the rows where column 2 equals "Entry". It finishes instantly, prints nothing, and raises no error. The mistake is one digit: entries and exits live in column 3, while column 2 holds the word Train. Rewrite the same code with named tuples and the filter reads row.direction instead, so the intent is visible, and a misspelt field name stops the program on the spot.',
  wa: 'Hello Modern Age Coders, we would like a free coding or Python lesson for a learner in the Sutherland Shire.',
  picks: {
    eyebrow: 'Course picks for the Shire',
    h2: 'Python courses that build careful habits',
    intro: 'Every course here touches the data-reading project on this page. The free trial lesson settles the right one, and nobody asks for card details.',
    items: [
      {
        course: 'python-ai-kids-masterclass',
        band: 'Ages 8 to 12',
        note: 'First Python through turtle drawings and small games, with names for everything from the start.'
      },
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 12 to 17',
        note: 'Lists, dictionaries, files and named tuples, written and tested line by line.'
      },
      {
        course: 'pcep-pcap-python-certification-course',
        band: 'Ages 13 to adult',
        note: 'Python Institute exam preparation, with every topic coded before it is tested.'
      },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'From the basics to clean, maintainable Python for data and automation at work.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'The Shire in the Census',
      h2: 'An older, house-and-townhouse council area on the bay',
      intro: 'The statistics bureau\'s 2021 QuickStats for the Sutherland Shire local government area, with the state and national figures for comparison.',
      body: [
        {
          kind: 'table',
          caption: 'Sutherland Shire totals from the 2021 Census',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents', '230,211'],
            ['Families', '64,749'],
            ['Private dwellings', '90,913'],
            ['Average household size', '2.7 people'],
            ['Area of the council boundary', 'About 334 square kilometres']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'The Shire against New South Wales and Australia',
          head: ['Indicator', 'Sutherland Shire', 'NSW', 'Australia'],
          rows: [
            ['Semi-detached, terrace or townhouse homes', '13.9% (11,559)', '11.7%', '12.6%'],
            ['Managers, share of employed residents', '17.1% (20,035)', '14.6%', '13.7%'],
            ['Advanced diploma or diploma as highest level', '11.9% (22,290)', '9.3%', '9.4%'],
            ['Median age', '41', '39', '38']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Older than the state',
              p: 'A median age of 41 puts the Shire two years above New South Wales, yet 14,824 residents were aged 10 to 14, 6.4% of the total.'
            },
            {
              h3: 'Townhouses as well as houses',
              p: 'Separate houses account for 60.8% of occupied homes, with townhouses and terraces at 13.9% and flats or apartments at 24.8%.'
            },
            {
              h3: 'Managers and professionals',
              p: 'Professionals were the largest occupation group, 30,922 people or 26.3%, and managers made up a further 17.1%, above both state and national shares.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'Census tables carry small random changes for privacy, so rows rarely sum exactly to totals. These figures are copied as published, and we have not created any total by adding rows.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'One wrong index, no error, no rows: a Python bug in Shire station data',
      intro: 'Transport for NSW publishes monthly Opal entries and exits for every station. We located the thirteen stations inside the Shire on the statistics bureau\'s council map and read their 598 rows two ways.',
      body: [
        {
          kind: 'table',
          caption: 'Same task, two ways of holding each row (our run on the published file)',
          head: ['Code', 'What it does', 'Result'],
          rows: [
            ['row[2] == "Entry"', 'Checks the station-type column by mistake', '0 of 598 rows, and no warning'],
            ['row[3] == "Entry"', 'Checks the right column, if you remember which it is', '299 rows'],
            ['row.direction == "Entry"', 'Named field on a namedtuple', '299 rows, and the intent is readable'],
            ['row.directon == "Entry"', 'A typo in the field name', 'AttributeError on the first row']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'August 2026 at the thirteen Shire stations (Transport for NSW)',
          head: ['Station', 'Entries', 'Exits'],
          rows: [
            ['Sutherland', '152,354', '150,142'],
            ['Miranda', '81,783', '85,455'],
            ['Cronulla', '61,856', '61,687'],
            ['Caringbah', '61,198', '58,760'],
            ['Jannali', '57,285', '54,611'],
            ['Gymea', '44,524', '41,389'],
            ['Kirrawee', '42,051', '40,645'],
            ['Woolooware', '28,792', '27,564'],
            ['Engadine', '28,748', '26,908'],
            ['Como', '15,773', '13,376'],
            ['Heathcote', '11,931', '11,211'],
            ['Loftus', '9,983', '9,139'],
            ['Waterfall', '9,839', '10,223']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: '1. Define the record',
              p: 'Rec = namedtuple("Rec", ["month", "station", "kind", "direction", "trips"]) gives every row five named fields while keeping it a lightweight tuple.'
            },
            {
              h3: '2. Convert while reading',
              p: 'Each CSV row becomes Rec(...), with trips turned into an integer and the file\'s double spaces in station names collapsed, so later code never handles raw text.'
            },
            {
              h3: '3. Ask questions by name',
              p: 'sorted(entries, key=lambda r: r.trips, reverse=True) ranks the stations, and anyone reading the line knows exactly what is being sorted.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Why the swap matters',
          p: 'Ranked by entries, Loftus (9,983) sits just above Waterfall (9,839). Ranked by exits, Waterfall (10,223) moves above Loftus (9,139). Code that mixes up the two columns does not crash; it simply reports the wrong order, which is exactly the kind of error named fields make easy to see.'
        },
        {
          kind: 'p',
          text: 'Entries are Opal taps at the gates, not counts of people. None of the 598 rows for these stations is recorded as "Less than 50", so every value converts cleanly to a number; at small stations elsewhere that is not true. Every ranking and count in this section is our own work on the published file, and Transport for NSW is not involved.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Beyond the first fix',
      h2: 'Small Python habits that keep data code honest',
      intro: 'With the rows held as named records, a learner can try several improvements on the same file.',
      body: [
        {
          kind: 'table',
          caption: 'Follow-on exercises with the Shire station rows',
          head: ['Exercise', 'Python feature', 'What it teaches'],
          rows: [
            ['Find the quietest station-month', 'min with a key function', 'Loftus in January 2025, 5,529 entries'],
            ['Correct one value without editing in place', 'Rec._replace', 'Why immutable records are safer'],
            ['Print the field names automatically', 'Rec._fields', 'Self-describing data for reports'],
            ['Move to dataclasses later', 'dataclasses.dataclass', 'When records need defaults and methods']
          ]
        },
        {
          kind: 'p',
          text: 'The same pattern scales from a 598-row file to a database export of millions of rows. Code that names its fields is easier for a teammate to review, easier for an AI assistant to modify correctly, and much harder to break silently.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Teenagers', p: 'Read the CSV with the csv module, build named tuples, and rank the Shire stations by entries and by exits.' },
            { h3: 'University students', p: 'Compare namedtuple, dataclass and typed dictionaries, and add tests that would have caught the column mix-up.' },
            { h3: 'Adults', p: 'Tidy the scripts you already use at work so that every column is named and every assumption is checked.' }
          ]
        },
        {
          kind: 'p',
          text: 'Transport for NSW, the education department and the statistics bureau publish the open files behind this page and are not connected with us; all results above come from our own Python.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around the Shire',
      h2: 'Sixty-two public schools, and a 2027 calendar',
      intro: 'A little more from the same public files.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Schools in the file',
              p: 'The education department lists 62 government schools in the council area: 43 primary, 12 secondary, four schools for specific purposes, two environmental education centres and one community school.'
            },
            {
              h3: 'The earliest dates',
              p: 'Sylvania Public School records its first teacher in 1884, Heathcote Public School in 1886 and Sutherland Public School in 1887, the earliest dates in the file for the Shire.'
            },
            {
              h3: 'School terms in 2027',
              p: 'Students in the Eastern division begin Term 1 on Wednesday 3 February 2027, and the summer holidays before it run from Friday 18 December 2026 to Wednesday 27 January 2027.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Spot the newest school',
          p: 'Sorting the 62 first-teacher dates is a quick exercise for a beginner; the latest three in the file are Lucas Heights Community School (1992), Alfords Point Public School (1996) and Cook School (2001).'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From naming sprites in Scratch to naming fields in Python',
    intro: 'The ages are a rough guide; the free first lesson decides the starting rung.',
    cols: [
      {
        band: 'Ages 6 to 11',
        h3: 'Blocks with clear names',
        p: 'Scratch games where every sprite and variable gets a sensible name from the first lesson.',
        courses: ['scratch-programming-complete-course', 'python-ai-kids-masterclass']
      },
      {
        band: 'Ages 12 to 15',
        h3: 'Python foundations',
        p: 'Variables, loops, lists and functions, then reading and writing simple files.',
        courses: ['python-complete-masterclass-teens', 'maths-through-coding']
      },
      {
        band: 'Ages 15 to 18',
        h3: 'Structured data',
        p: 'Named tuples, dictionaries, CSV files and the first tests that check them.',
        courses: ['pcep-pcap-python-certification-course', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Python for real work',
        p: 'Clean data pipelines, automation and code other people can safely change.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI writes Python quickly. Why should a Shire learner care how rows are stored?',
    intro: 'Because AI-written data code often uses bare indexes, and the bugs that causes are silent.',
    p1: 'Ask an assistant to filter a CSV and it may well write row[2] or row[3] without saying which column it thinks that is. If it guesses wrong, the program still runs and the output is still neatly formatted; it is simply wrong. A learner who has met the empty-result bug on the Shire stations knows to check column positions before trusting the output.',
    p2: 'Named records also make AI help better. When the code says row.direction and row.trips, both the learner and the assistant can see what each line means, so suggested changes are easier to review and less likely to break something unseen.',
    closer: 'In 2026 code is easy to generate and easy to get subtly wrong; a Sutherland Shire learner who writes self-describing Python is the one who catches the mistake.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Waterfall to Cronulla, the same lesson',
    intro: 'The Shire stretches from Waterfall station to Cronulla station across about 334 square kilometres, and an online class treats every household in it the same.',
    cells: [
      { h3: 'No trip across the Shire', p: 'Learners join from home, so a family in Engadine and one in Woolooware can share a group without anyone driving.' },
      { h3: 'Aligned with NSW school', p: 'Teachers follow the NSW stages and syllabus names, and classes break for the state school holidays.' },
      {
        h3: 'A first lesson to judge by',
        p: 'The free opening lesson is a full class; at the end the teacher proposes a course, a level and a regular time, with nothing paid that day.'
      },
      { h3: 'Groups by ability', p: 'Five to ten learners working at the same level, regardless of age, or individual lessons instead.' },
      { h3: 'Twice a week', p: 'Normally two lessons each week at a fixed time, about eight a month, with breaks arranged in advance.' },
      {
        h3: 'Teachers in India',
        p: 'A 4:30pm Shire lesson in summer starts at 11am India time; after Sydney ends daylight saving the same lesson starts at noon there.'
      }
    ],
    spec: {
      title: 'Daylight saving and India time',
      p: 'Sydney clocks go forward on Sunday 4 October 2026 and back on Sunday 4 April 2027. India stays on one time, so the difference to our teachers changes twice a year, and every time we quote is Sydney time.'
    }
  },
  fees: {
    h2: 'Lesson fees in the Sutherland Shire',
    intro: 'Three numbers, nothing tucked away.',
    first: 'One complete lesson free, with a course, level and time suggested at the end.',
    group: 'A month of lessons, typically eight, with five to ten learners at one level.',
    private: 'Roughly eight lessons a month on the same schedule, one teacher with one learner.',
    closer: 'Invoices outside India are in US dollars, so a household in Heathcote pays the same as one in Caringbah. Nothing is charged before the trial has agreed a course and a time; holidays, missed lessons and format changes are set out on the pricing page.'
  },
  reviewsH2: 'Family reviews from Google',
  book: {
    h2: 'An age and a favourite subject is enough',
    intro: 'A teacher can plan a first lesson from those two facts. A Year 5 learner might begin with a Scratch game that keeps score; a teenager or adult might start reading the Shire station file in Python.',
    success: 'Thank you. We will be in touch soon about a class in the Shire.'
  },
  faq: {
    h2: 'Sutherland Shire coding and Python questions',
    intro: 'What Shire families and adult learners usually ask before booking.',
    items: [
      {
        q: 'How many people live in the Sutherland Shire?',
        a: 'The statistics bureau\'s QuickStats for the Sutherland Shire local government area counted 230,211 people on Census night 2021, with a median age of 41.'
      },
      {
        q: 'What is a named tuple in Python?',
        a: 'A named tuple, from the collections module, is a tuple whose positions also have names. You can still read row[3], but you can also write row.direction, which makes code clearer and turns a misspelt field into an immediate error.'
      },
      {
        q: 'What does the Shire station project show?',
        a: 'Reading 598 rows for the thirteen Shire stations with a wrong column index returns 0 rows and no error, while the named field returns all 299 entry rows. It also shows Loftus and Waterfall swapping places depending on whether entries or exits are ranked.'
      },
      {
        q: 'Which stations are inside the Shire?',
        a: 'On our check against the statistics bureau\'s council boundary, thirteen: Sutherland, Miranda, Cronulla, Caringbah, Jannali, Gymea, Kirrawee, Woolooware, Engadine, Como, Heathcote, Loftus and Waterfall.'
      },
      {
        q: 'Can older students get help with HSC courses?',
        a: 'Yes. Lessons for Years 11 and 12 follow the NSW syllabuses and the HSC timetable. Assessed work must be the student\'s own, and teachers explain methods rather than producing anything a school marks.'
      },
      {
        q: 'What time are lessons?',
        a: 'A time is agreed at the trial, usually after school or at the weekend, and always quoted in Sydney time. India is 5 hours 30 minutes behind Sydney in summer and 4 hours 30 minutes behind in winter.'
      },
      {
        q: 'Can a six-year-old start?',
        a: 'Yes. Six-year-olds start with Scratch blocks and simple games; Python and the station project come later, usually from around 12.'
      },
      {
        q: 'Do you have a centre in the Shire?',
        a: 'No, and we do not claim one. All teaching is live online and we have no premises in Australia. A laptop or desktop with sound and a steady connection is all a learner needs; the phone number shown is Indian.',
        boiler: true
      },
      {
        q: 'What do coding classes cost in the Sutherland Shire?',
        a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month one to one on the same pattern. The course, format and time are agreed before any payment.',
        boiler: true
      },
      {
        q: 'How many learners share a group?',
        a: 'Five to ten, grouped by level, pace and goal rather than age or suburb. If no group fits the time a learner needs, one-to-one lessons are offered.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Shire learners',
    html: 'The citywide guide is <a class="cg-inline-link" href="/best-coding-classes-in-sydney">coding classes in Sydney</a>. Learners moving on from blocks can read <a class="cg-inline-link" href="/after-scratch-next-step-python-australia">after Scratch: the next step to Python</a>, and those who want to understand rather than paste code should see <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-australia">understand the code, don\'t copy-paste</a>. For the wider state there is <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Sutherland Shire and Sydney',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/best-coding-and-ai-classes-in-georges-river-sydney', label: 'Georges River' },
    { href: '/coding-classes-for-kids-sydney', label: 'Coding for kids in Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-suth .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.8vw, 2.3rem); }
.cg-root.cg-suth .cg-hero h1 { font-weight: 700; letter-spacing: -0.018em; line-height: 1.09; }
.cg-root.cg-suth .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.55rem 0 0.55rem 1.05rem; }
.cg-root.cg-suth .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.83rem; text-transform: uppercase; }
.cg-root.cg-suth .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.01em; }
.cg-root.cg-suth .cg-grid-3 { gap: clamp(1rem, 2.1vw, 1.75rem); }
.cg-root.cg-suth .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-suth .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-suth .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-suth .cg-callout { border-left-width: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Sutherland Shire, ABS Census 2021 QuickStats, Sutherland Shire local government area LGA17150 (read 10 October 2026): 230,211 people; median age 41 (New South Wales 39, Australia 38); 64,749 families; 90,913 private dwellings; average 2.7 people per household; separate houses 60.8% (50,676), semi-detached, terrace or townhouse 13.9% (11,559), flats or apartments 24.8% (20,656); managers 17.1% (20,035); professionals 26.3% (30,922); advanced diploma or diploma 11.9% (22,290); aged 10 to 14 14,824 (6.4%). ABS ASGS 2021 LGA boundary area 333.5806 square kilometres. NSW Department of Education 2027 calendar, Eastern division: students Term 1 from Wednesday 3 February 2027; summer holidays Friday 18 December 2026 to Wednesday 27 January 2027.',
    localProject: 'namedtuple records vs positional indexes. Transport for NSW Train Station Entries and Exits (CC BY), 598 rows for the 13 stations whose NSW Transport Theme points ((c) Spatial Services) fall inside the ABS Sutherland Shire LGA polygon, October 2024 to August 2026, none "Less than 50". Filter on column index 2 = Entry: 0 rows; on column 3 or the named field direction: 299 rows. August 2026 entries Sutherland 152,354, Miranda 81,783, Cronulla 61,856, Caringbah 61,198, Jannali 57,285, Gymea 44,524, Kirrawee 42,051, Woolooware 28,792, Engadine 28,748, Como 15,773, Heathcote 11,931, Loftus 9,983, Waterfall 9,839; exits Waterfall 10,223 above Loftus 9,139. Minimum monthly entries Loftus January 2025 5,529. NSW schools master dataset rows with LGA Sutherland: 62; earliest first teachers Sylvania Public School 1884, Heathcote Public School 1886, Sutherland Public School 1887.',
    requiredMentions: ['230,211', '64,749', '90,913', '11,559', '20,035', 'Sylvania Public School', '152,354', '598 rows', 'Lucas Heights Community School'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Sutherland Shire local government area (LGA17150): people, median age, families, dwellings, dwelling structure, occupation, education, age.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA17150'
      },
      {
        claim: 'Transport for NSW, Train Station Entries and Exits: monthly station usage from Opal data (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      {
        claim: 'Python documentation, collections.namedtuple: factory function for tuples with named fields, _replace and _fields.',
        url: 'https://docs.python.org/3/library/collections.html#collections.namedtuple'
      },
      {
        claim: 'NSW Department of Education, 2027 term dates and school holidays, Eastern division.',
        url: 'https://education.nsw.gov.au/schooling/calendars/2027'
      },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Any reason why Miranda has more exits than entries: not verified, so no cause is given.',
      'Treating Opal entries as people: entries are gate taps and the page never calls them passengers.',
      'A list of Shire suburbs: not printed; only station locations were checked against the boundary.',
      'Home ownership and tenure figures from QuickStats: excluded with the other money-related tables.',
      'Enrolment, ICSEA, Indigenous, LBOTE and selective-school columns of the master dataset: excluded by the cluster rules.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Transport for NSW, the NSW Department of Education, Sutherland Shire Council or the ABS.'
    ]
  }
};
