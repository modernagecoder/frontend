'use strict';
// Dallas Fort Worth (cg- metro page, US cluster Phase 5, row 121). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: one live online class for families across the Metroplex, with a string-cleaning project on the City of Dallas
// park list (one portal: City of Dallas Enterprise GIS on ArcGIS). Sources read raw on 18 October 2026 (copies in
// keyword-research-2026-09/us/src/online-coding-and-ai-classes-in-dallas-fort-worth/ and src/_shared-metros/tx/):
//  - City of Dallas GIS, "Dallas Parks Source File" feature service (item e6d29dc6512244d2923a6e65f9673971), use
//    constraints: data provided "AS IS" without warranty, at the user's sole risk, "NOT FOR ENGINEERING PURPOSES";
//    description: parks managed by Dallas Parks and Recreation Dept., unique PARK_ID, Name, Address, Council District.
//    Attributes downloaded 18 October 2026, OUR counts: 404 records; ParkStatus Park 390, Future Park 5, blank 9;
//    PARK_TYPE Neighborhood 128, Community 96, Linear 42, Mini 28, blank 6; Owned_BY Park 337, empty 10, a row of
//    asterisks 2, Streets 7 and Street 1; last word of ADDRESS: Rd. 33, Road 32, Rd 11 (our total 76); Dr. 17, Drive 3,
//    Dr 2; Street 20, St. 7, St 3; Avenue 10, Ave. 7; Blvd. 8, Boulevard 7; Parkway 7, Pkwy. 3; empty address 8;
//    ADDRESS differs from Address_1 in 54 rows; Council_Dist empty 29, values such as 1013, 910, 1011, 1112.
//  - City of Dallas OpenData, Public Libraries (p96m-d8hb), "Dallas libraries, Central and Branches": 30 records, 28 with
//    BRANCH in the name.
//  - City of Dallas, City Council members page: Mayor and District 1 to District 14.
//  - TEA, Technology Applications TEKS Review, Kindergarten to Grade 8: SBOE members nominate "educators, parents, business
//    and industry representatives, and employers"; Work Group B September 2021, C early October 2021, D late October
//    2021, E December 2021 (vertical alignment). TEA Technology Applications page: final approval 2022, implemented 2024-2025.
//  - fortworthtexas.gov returned 403 on 18 October 2026: not retried, no Fort Worth city facts printed.
//  - Code.org (2025), State of AI + CS Education (Access tab): TX 2023-2024 access, not printed as a count here.
//  - IANA tzdb northamerica: America/Chicago, US DST rule.
// Lesson family: string cleaning and normalisation (one word spelled three ways).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'DALLAS FORT WORTH', label: 'Dallas Fort Worth', blurb: 'Live online coding and AI for Metroplex students, with a text-cleaning project on the City of Dallas park list.' },
  market: US,
  slug: 'online-coding-and-ai-classes-in-dallas-fort-worth',
  code: 'adfw',
  accent: '#3D2885',
  accentRationale: 'Dallas Fort Worth: a deep muted indigo #3D2885 from the allocation table, contrast 10.76 on the paper and 9.26 on the deepest tint',
  pageType: 'city',
  place: {
    name: 'Dallas Fort Worth',
    eyebrow: 'Dallas Fort Worth, Texas',
    schemaType: 'Place',
    chain: [
      { type: 'State', name: 'Texas' },
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }, { slug: 'coding-classes-in-texas', name: 'Texas' }],
  nav: [
    { label: 'Texas', href: '/coding-classes-in-texas' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Dallas Fort Worth',
  title: 'Online Coding and AI Classes in Dallas Fort Worth | Live',
  description: 'Live online coding and AI classes for Dallas Fort Worth students: Scratch to Python and machine learning, plus a text-cleaning project on the Dallas park list.',
  ogDescription: 'One live online class for the whole Metroplex. Students clean 404 City of Dallas park records in Python, then move on to AI. Elementary to high school.',
  twitterDescription: 'Coding and AI for DFW students, live online, with a Dallas parks data project.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Dallas Fort Worth Students',
    description: 'Scratch, Python, web development, AI and AP Computer Science for students across Dallas, Fort Worth and the suburbs, taught live online in level-matched batches or one to one.'
  },

  h1: 'Online coding and AI classes in Dallas Fort Worth',
  capsuleQ: 'Is there a live online coding and AI class for Dallas Fort Worth students?',
  capsule: 'Yes. Modern Age Coders teaches students across Dallas, Fort Worth and the suburbs live online, from Scratch at age 6 to Python, web development and machine learning in high school, in level-matched batches of fifteen to twenty or one to one. One project cleans the 404 records of the City of Dallas park list in Python.',
  lead: 'The Metroplex is big enough that a weekly class across town can swallow an evening. A live online class removes the drive and keeps the teacher: students in Dallas, Fort Worth, Arlington or Frisco join the same lesson from home. This page shows the kind of work our students do, using a real file the City of Dallas publishes about its parks, explains how Texas wrote its current technology standards, and covers class times in Central Time and what classes cost.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Dallas Fort Worth.',

  picks: {
    eyebrow: 'Courses for Metroplex students',
    h2: 'Four courses most DFW families start with',
    intro: 'Choose by stage. After the free lesson we confirm the fit or suggest a better one.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 7 to 11', note: 'Scratch games and stories that teach loops, events and variables through finished projects.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 6 to 12', note: 'Typed Python, from the first print statement to files and text processing like the Dallas parks project.' },
      { course: 'full-stack-web-development-teens-masterclass', band: 'Grades 8 to 12', note: 'HTML, CSS, JavaScript and a back end, ending with a website the student built and can publish.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 9 to 12', note: 'Machine learning in Python, with models trained and tested on data the student has cleaned first.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: '', eyebrow: 'Signature project',
      h2: 'Road, Rd. or Rd: cleaning the Dallas park list',
      intro: 'The City of Dallas GIS team publishes a parks layer, the Dallas Parks Source File, with a name, address, type and council district for each park. We downloaded its attribute table on 18 October 2026. Before anyone can map or count it, the text needs cleaning.',
      body: [
        { kind: 'table', caption: 'How the last word of each park ADDRESS is written (our count from the Dallas Parks Source File, 18 October 2026)', head: ['Street type', 'Spellings found', 'Records'], rows: [
          ['Road', 'Rd. 33, Road 32, Rd 11', '76'],
          ['Street', 'Street 20, St. 7, St 3', '30'],
          ['Drive', 'Dr. 17, Drive 3, Dr 2', '22'],
          ['Avenue', 'Avenue 10, Ave. 7', '17'],
          ['Boulevard', 'Blvd. 8, Boulevard 7', '15'],
          ['Parkway', 'Parkway 7, Pkwy. 3', '10']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Spot the problem', p: 'A student asks Python for the last word of every address and counts the results. Road turns up as three different words, so any count of &ldquo;parks on a road&rdquo; is wrong until the spellings agree.' },
          { h3: 'Write the rules', p: 'They build a small lookup table, Rd. and Rd become Road, St. and St become Street, then strip trailing dots and spaces. The rule table is short, readable and easy to test.' },
          { h3: 'Check the leftovers', p: 'Some addresses end in a street name, not a type, and 8 records have no address at all. Deciding what to do with those is a judgment, and the student writes it down.' }
        ] },
        { kind: 'table', mt: true, caption: 'Other text problems in the same file (our counts)', head: ['Column', 'What we found', 'The lesson'], rows: [
          ['ParkStatus', '390 Park, 5 Future Park, 9 left blank', 'A blank and a space are not the same as a value'],
          ['PARK_TYPE', 'Neighborhood 128, Community 96, Linear 42, Mini 28, and 6 blank', 'Count the blanks before you chart the rest'],
          ['Owned_BY', 'Park 337; Streets 7 beside Street 1; 2 rows of asterisks', 'Singular and plural forms split one group in two'],
          ['ADDRESS and Address_1', 'The two columns differ in 54 records', 'Two copies of a field rarely stay in sync'],
          ['Council_Dist', '29 empty, plus values such as 1013 and 910', 'Ask the publisher what a code means before guessing']
        ] },
        { kind: 'callout', h3: 'Our counts, the city&rsquo;s data', p: 'Every figure in these tables is our own count from one download. The city provides the file as is, without warranty and not for engineering purposes, and a value like 1013 in the council district column may mean a park in two districts, or something else. We teach students to say &ldquo;looks like&rdquo; until the publisher confirms it.' }
      ]
    },
    {
      id: 'dallas', tint: 'deep', eyebrow: 'Dallas facts we used',
      h2: 'What the City of Dallas publishes',
      intro: 'Official City of Dallas sources, read on 18 October 2026. We could not read Fort Worth&rsquo;s city site that day, so no Fort Worth figures are printed.',
      body: [
        { kind: 'table', caption: 'City of Dallas figures behind this page', head: ['Topic', 'Figure', 'Source'], rows: [
          ['Park records in the GIS source file', '404', 'City of Dallas GIS, Dallas Parks Source File (our count)'],
          ['Parks with status Future Park', '5', 'Same file (our count)'],
          ['Parks owned by the park department', '337 records with Owned_BY of Park', 'Same file (our count)'],
          ['Public library locations', '30 records, Central and Branches', 'City of Dallas OpenData, Public Libraries'],
          ['Library records named as branches', '28 of 30', 'Same dataset (our count)'],
          ['City Council', 'A mayor and fourteen districts, District 1 to District 14', 'City of Dallas, City Council members page']
        ] },
        { kind: 'p', text: 'A second exercise joins these together: students count parks per council district from the cleaned file and set the result beside the fourteen districts on the council page. The 29 parks with no district, and the codes that look like two districts joined, become the discussion. Numbers are counts only; we never print an address from the file.' }
      ]
    },
    {
      id: 'texas', tint: 'tint', eyebrow: 'How Texas wrote its standards',
      h2: 'Who decided what Texas students learn about technology',
      intro: 'A short look at the process behind the current K-8 technology applications standards. For the rules on credit and graduation, see our Texas page.',
      body: [
        { kind: 'table', caption: 'The 2021 review of the K-8 technology applications TEKS, as TEA describes it', head: ['When', 'What happened'], rows: [
          ['September 2021', 'Work Group B proposed new strands and sorted the existing student expectations into them'],
          ['Early October 2021', 'Work Group C drafted two strands, including digital citizenship'],
          ['Late October 2021', 'Work Group D drafted four strands, among them data literacy'],
          ['December 2021', 'Work Group E completed draft recommendations and checked vertical alignment across grades'],
          ['2022', 'The State Board of Education gave final approval to the revised standards'],
          ['2024 to 2025', 'The revised standards took effect in schools']
        ] },
        { kind: 'p', text: 'TEA says State Board of Education members nominate &ldquo;educators, parents, business and industry representatives, and employers&rdquo; to the review work groups. Families sometimes assume standards arrive from nowhere; in Texas they were drafted in stages by named groups over several months. What the strands contain, and how computer science counts toward graduation, is covered on our <a class="cg-inline-link" href="/coding-classes-in-texas">coding classes in Texas</a> page.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Metroplex evenings, mornings and weekends',
      intro: 'Dallas and Fort Worth share Central Time, America/Chicago in the IANA time zone database, while our teachers work from India.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Pick your rhythm', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'India is ahead', p: 'Until November 1, 2026 India is 10 hours 30 minutes ahead of the Metroplex; after that, 11 hours 30 minutes, until clocks change again on March 14, 2027.' },
          { h3: 'Stated in Central Time', p: 'We write every slot in Central Time, so a family in Fort Worth and one in Plano read the same time.' }
        ] },
        { kind: 'spec', title: 'Text cleaning shows up here too', p: 'Students who clean the park addresses meet the same problem in dates: 11/01/2026 means November 1 in the US and January 11 elsewhere. Parsing it with an explicit format, and the America/Chicago zone, is the fix.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From blocks to AI, one step at a time',
    intro: 'Ages and grades are a guide; the free lesson sets the real start.',
    cols: [
      { band: 'Ages 6 to 9', h3: 'Blocks', p: 'Visual coding, animation and first games.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 10 to 13', h3: 'First typed code', p: 'Python and simple web pages, with small text and data tasks.', courses: ['python-ai-kids-masterclass', 'kids-ai-web-development-course'] },
      { band: 'Grades 8 to 10', h3: 'Projects that last', p: 'Full Python, JavaScript and app projects over several weeks.', courses: ['python-complete-masterclass-teens', 'complete-app-development-masterclass-for-teens'] },
      { band: 'Grades 10 to 12', h3: 'AI and AP', p: 'Machine learning and AP Computer Science, side by side with school.', courses: ['ai-ml-masterclass-teens', 'ap-computer-science-a-java-exam-prep-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding in the age of AI',
    h2: 'Why learn to clean text when AI can do it?',
    intro: 'Because someone has to decide what clean means, and check the result.',
    p1: 'Hand the Dallas address column to an AI assistant and it will happily rewrite every Rd. as Road. It may also turn a street named Parkway Oaks into nonsense, or guess what 1013 means in the district column. A student who wrote the rules by hand knows to look for both.',
    p2: 'That is the habit we build at every level: understand the data, write the rule, test it, then let tools speed up the work. AI becomes useful to a student who can tell a good answer from a confident wrong one.',
    closer: 'Machine learning projects come later in our teen courses, on data the student has cleaned and can explain.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Fort Worth to Frisco without the drive',
    intro: 'The Metroplex is wide; a live online class is the same distance from every suburb.',
    cells: [
      { h3: 'Class from home', p: 'Students join from their own desk in Dallas, Fort Worth, Arlington, Plano or anywhere nearby, with no commute after school.' },
      { h3: 'US grades, Texas calendar', p: 'Teachers plan in US grades and around the school year, and anything a school grades is done by the student alone.' },
      { h3: 'Free first lesson', p: 'Your student codes a real task with a teacher; afterwards we suggest where to start and when. No card details at this point.' },
      { h3: 'Batches by level', p: 'Fifteen to twenty students per batch, grouped by stage rather than age, from DFW and across the US.' },
      { h3: 'One to one', p: 'A private teacher on a schedule you set, for faster progress or AP preparation.' },
      { h3: 'Central Time slots', p: 'Weekdays or weekends as you prefer, always written in Central Time.' }
    ],
    spec: { title: 'Online, from India', p: 'There is no Modern Age Coders center in Dallas or Fort Worth, and we do not claim one. Teaching is live online from India; a student needs a computer, sound and a reliable connection.' }
  },

  fees: {
    h2: 'Class fees for Dallas Fort Worth families',
    intro: 'Here is everything you pay for.',
    first: 'A full free lesson, with a level, course and time suggested at the end.',
    group: 'A monthly fee for a batch of fifteen to twenty students at one level.',
    private: 'A monthly fee for one student and one teacher.',
    closer: 'Metroplex families are billed in US dollars at the national rate. You pay nothing until the free lesson is done and the course and time are agreed; holidays and missed classes are covered on the pricing page.'
  },

  reviewsH2: 'Reviews from parents and students',

  book: {
    h2: 'Ask for a free class',
    intro: 'Share your student&rsquo;s grade and interests. A younger child gets a Scratch task; a teen with some Python can start on the Dallas park list.',
    success: 'Thank you. We will be in touch shortly about a class in Dallas Fort Worth.'
  },

  faq: {
    h2: 'Dallas Fort Worth coding and AI questions',
    intro: 'Answers to what Metroplex families ask first.',
    items: [
      { q: 'Do you teach students in Fort Worth as well as Dallas?', a: 'Yes. Classes are live online, so a student in Fort Worth, Dallas, Arlington, Plano or any nearby suburb joins the same lesson from home.' },
      { q: 'What ages do you teach?', a: 'From age 6, with blocks and Scratch, up to high school Python, web development, AP Computer Science and machine learning.' },
      { q: 'What is the Dallas park list project?', a: 'Students download the City of Dallas Parks Source File, find words such as Road written three ways, write cleaning rules in Python, and check what the rules miss.' },
      { q: 'Why does the project use Dallas data only?', a: 'We could read the City of Dallas GIS file and terms on 18 October 2026. The Fort Worth city site did not load for us that day, so we printed no Fort Worth figures.' },
      { q: 'Are the park counts official?', a: 'No. They are our own counts from one download. The city provides the file as is, without warranty and not for engineering purposes.' },
      { q: 'How were the Texas technology standards written?', a: 'TEA describes a 2021 review in which work groups nominated by State Board members drafted the K-8 standards in stages, with final approval in 2022 and use in schools from 2024 to 2025.' },
      { q: 'When do DFW classes run?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Slots are written in Central Time.' },
      { q: 'How big is a batch?', a: 'Each batch holds fifteen to twenty students working at one stage. A private one-to-one class is the alternative.' },
      { q: 'Is there a local center?', a: 'No. We teach only online, live from India, and do not claim an office in the Metroplex.' },
      { q: 'Where are the fees?', a: 'Scroll to the fees block: it lists a free trial lesson plus two monthly options, group or private. Nothing is billed until the trial is over.' }
    ]
  },

  next: {
    eyebrow: 'Keep going',
    h2: 'More for Metroplex students',
    html: 'High schoolers can compare <a class="cg-inline-link" href="/coding-classes-for-high-school-students">coding classes for high school students</a> and <a class="cg-inline-link" href="/hackathons-for-high-school-students">hackathons for high school students</a>. Younger coders can try <a class="cg-inline-link" href="/javascript-for-kids">JavaScript for kids</a> or <a class="cg-inline-link" href="/c-plus-plus-for-kids">C++ for kids</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Dallas Fort Worth, Texas and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-classes-in-texas', label: 'Texas' },
    { href: '/coding-classes-for-middle-school-students', label: 'Middle school coding' },
    { href: '/usaco-preparation-online-coaching', label: 'USACO preparation' }
  ],

  personalityCss: `
.cg-root.cg-adfw .cg-hero-grid { gap: clamp(1.2rem, 3.4vw, 2.8rem); }
.cg-root.cg-adfw .cg-hero h1 { font-weight: 800; letter-spacing: -0.025em; line-height: 1.02; }
.cg-root.cg-adfw .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-adfw .cg-eyebrow { letter-spacing: 0.16em; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-adfw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-adfw .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-adfw .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
`,

  dossier: {
    curriculumAuthority: 'Texas, read raw on 18 October 2026: TEA Technology Applications TEKS Review K-8 (SBOE nominates educators, parents, business and industry representatives, employers; Work Group B September 2021, C early October 2021, D late October 2021, E December 2021 vertical alignment); TEA Technology Applications page (final approval 2022, implemented 2024-25); IANA America/Chicago and the US DST rule. fortworthtexas.gov returned 403.',
    localProject: 'City of Dallas GIS Dallas Parks Source File (as is, no warranty, not for engineering), attributes downloaded 18 October 2026: 404 records; our counts of address suffixes (Rd. 33, Road 32, Rd 11, total 76; Dr. 17, Drive 3, Dr 2; Street 20, St. 7, St 3); 8 empty addresses; 54 ADDRESS vs Address_1 mismatches; ParkStatus 390/5/9; PARK_TYPE Neighborhood 128, Community 96; Owned_BY Park 337, Streets 7, Street 1; Council_Dist empty 29, codes such as 1013. Lesson family: string cleaning and normalisation.',
    requiredMentions: [
      'Rd. 33, Road 32, Rd 11',
      'Dallas Parks Source File',
      '5 Future Park',
      'differ in 54 records',
      '1013',
      'District 1 to District 14',
      '30 records, Central and Branches',
      'Work Group E',
      'business and industry representatives'
    ],
    sources: [
      { claim: 'City of Dallas GIS: Dallas Parks Source File feature service, use constraints and attributes.', url: 'https://services2.arcgis.com/rwnOSbfKSwyTBcwN/arcgis/rest/services/Dallas_Parks_Source_File/FeatureServer/0' },
      { claim: 'City of Dallas OpenData: Public Libraries, Central and Branches.', url: 'https://www.dallasopendata.com/resource/p96m-d8hb.json' },
      { claim: 'City of Dallas: City Council members, Districts 1 to 14.', url: 'https://dallascityhall.com/government/Pages/city-council.aspx' },
      { claim: 'TEA: Technology Applications TEKS Review, Kindergarten to Grade 8, work groups and dates.', url: 'https://tea.texas.gov/curriculum-and-instruction/curriculum-standards/teks-review/technology-applications-teks-review-kindergarten-grade-8' },
      { claim: 'TEA: Technology Applications page, final approval 2022 and 2024-25 implementation.', url: 'https://tea.texas.gov/academics/subject-area-resources/technology-applications' },
      { claim: 'IANA tzdb northamerica: America/Chicago and the US DST rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Fort Worth city facts: fortworthtexas.gov returned 403 on 18 October 2026, not retried, none printed.',
      'The meaning of council district codes such as 1013: not stated by the city, so only described as looking like two districts.',
      'Park addresses: never printed; counts only.',
      'The content of the Texas strands and the computer-science-as-language rule: covered on /coding-classes-in-texas.',
      'That our classes satisfy any Texas standard: refused.',
      'Any affiliation with the City of Dallas, the City of Fort Worth or TEA.'
    ]
  }
};
