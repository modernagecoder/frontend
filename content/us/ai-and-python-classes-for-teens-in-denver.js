'use strict';
// Denver (cg- metro page, US cluster Phase 5, row 131). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Colorado is one of the few states whose computer science standards now carry an Artificial Intelligence strand,
// so a Denver teen page leads with AI and Python, and its project is about units: Denver's bikeway data stores length
// three ways. Sources read raw on 18 October 2026 (copies in keyword-research-2026-09/us/src/ai-and-python-classes-for-teens-in-denver/):
//  - Colorado Department of Education, Colorado Academic Standards: Computer Science (adopted 2024) PDF: "six content
//    area strands" (Computational Thinking; Computing Systems and Networks; Computer Programming; Cybersecurity;
//    Artificial Intelligence (AI); Digital Citizenship); "On May 9, 2024, the Colorado State Board of Education adopted
//    the newly revised K-12 computer science standards"; the 2018 standards "did not include standards for grades
//    Kindergarten through 8th"; "the 2026-27 school year is the first year of implementation"; House Bill 16-1198
//    standards for courses "that qualify as a graduation requirement in either mathematics or science"; "Local education
//    providers may choose to implement the standards adopted. The voluntary nature of the computer science standards is
//    different from all other academic standards". CDE CS standards page (ed.cde.state.co.us/computerscience).
//  - Code.org (2025), 2025 State of AI + CS Education raw sheet, Access tabs only: CO 2023-2024, 344 of 519 high schools
//    (66.3%), source "State Education Agency and School Catalogs"; 57% (2020-21), 54% (2021-22), 59% (2022-23).
//  - Denver Parks and Recreation (denvergov.org): "30 recreation centers and nearly 20,000 acres of urban and mountain
//    parkland"; "over 280 urban parks"; mountain parks "14,000 acres".
//  - Denver DOTI Bicycles page: goal "all residents are within a two minute ride (a quarter mile) of a bikeway they feel
//    safe and comfortable riding"; high-comfort bikeways include trails, "Protected bicycle lanes with physical barriers
//    such as curbs or posts", neighborhood bikeways; "In 2023-2024, DOTI engaged the public in an update of Denver Moves: Bikes".
//  - Denver Public Library About: "established in 1889 in a wing of Denver High School"; "28 locations throughout Denver".
//  - City and County of Denver open data, Open Data Bike Facilities (item 5e7ce4f28b4b408aac59de8d7950adbf, owner
//    The_City_and_County_of_Denver; licenseInfo: provided "AS IS WITHOUT WARRANTY", "NOT FOR ENGINEERING PURPOSES"; layer
//    TRANS_BIKEFACILITIES_L, spatial reference 2877), statistics queried 18 October 2026: returnCountOnly 2,025 (over the
//    2,000 record cap, so outStatistics only). STATUS Unfunded 1,388, Completed 500, In Design or Construction 60.
//    DISPLAY_STATUS Future Bikeway 1,203, Existing Bikeway 467, Existing Bikeway with Facility Type Changes 198, Existing
//    Bikeway with Future Upgrades 157. MILEAGE_MULTIPLIER 2 on 1,833 records, 1 on 192. Our sums by FACILITY_TYPE_EXISTING
//    (records, CENTERLINE_MILES, BIKE_LANE_MILES): Trail 237, 114.46, 228.91; Bike Lane 203, 91.24, 156.72; Shared Sidewalk
//    119, 56.78, 113.13; Buffered Bike Lane 96, 47.05, 74.60; Neighborhood Bikeway 72, 38.35, 76.47; Protected Bike Lane
//    65, 41.80, 53.81; Car-Free Street 21, 5.79, 11.59; Shared Street 10, 2.36, 4.73; all 823 records 397.83 centerline
//    miles. Shape__Length sum for Trail 604,328 (feet), divided by 5,280 = 114.46. One record is Future Bikeway with an
//    existing type (Protected Bike Lane), so 822 existing by display status against 823 by type.
//  - IANA tzdb northamerica: America/Denver, US rule; back 1 November 2026, forward 14 March 2027.
// Lesson family: summing lengths by category, unit conversion (feet to miles) and two definitions of a mile.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'DENVER', label: 'Denver', blurb: 'AI and Python for Denver teens, matched to Colorado&rsquo;s new AI strand, with a bikeway miles data project.' },
  market: US,
  slug: 'ai-and-python-classes-for-teens-in-denver',
  code: 'aptd',
  accent: '#6B5240',
  accentRationale: 'Denver: a muted foothills sandstone brown, #6B5240, as allocated in alloc.tsv for row 131, distinct from the other US metro accents and readable on the paper',
  pageType: 'city',
  place: {
    name: 'Denver',
    eyebrow: 'Denver, Colorado',
    schemaType: 'City',
    chain: [
      { type: 'State', name: 'Colorado' },
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Denver',
  title: 'AI and Python Classes for Teens in Denver | Live Online',
  description: 'AI and Python classes for Denver teens, live online: Colorado\'s CS standards and their new AI strand, Mountain Time planning, and a Denver bikeway data project.',
  ogDescription: 'Live online AI and Python for Denver teenagers, built around Colorado&rsquo;s six computer science strands and a real City and County of Denver dataset.',
  twitterDescription: 'Denver teens: live online AI and Python, with a Denver bikeway data project.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online AI and Python Classes for Denver Teens',
    description: 'Python, data science, machine learning and cybersecurity for Denver students in grades 7 to 12, taught live online in small level-matched groups or one to one.'
  },

  h1: 'AI and Python classes for teens in Denver',
  capsuleQ: 'Where can a Denver teenager learn AI and Python with a live teacher?',
  capsule: 'Modern Age Coders teaches Python, data science and machine learning live online to Denver students in grades 7 to 12, in level-matched groups or one to one. Colorado&rsquo;s computer science standards, adopted May 9, 2024, list Artificial Intelligence as one of six strands; our teen courses build that AI on real Python and real Denver data.',
  lead: 'Colorado rewrote its computer science standards in 2024 and did something few states have done: it gave artificial intelligence a strand of its own, beside programming and cybersecurity. For a Denver teenager that is a signal about where the subject is heading, but standards are not a course, and in Colorado they are not even compulsory for districts. This page sets out what the state actually asked for, how many Colorado high schools offer computer science according to the published figures, and how our live online classes take a teen from first Python scripts to machine learning. The worked example is Denver&rsquo;s own bikeway inventory, a dataset where the word "mile" means two different things and the length column is not in miles at all.',
  wa: 'Hello Modern Age Coders, I would like a free AI or Python class for a teenager in Denver.',

  picks: {
    eyebrow: 'Course picks for Denver teens',
    h2: 'Four routes into AI and Python',
    intro: 'Matched to grade and goal; the free first class confirms the level before anything is booked.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 10', note: 'The Python every later course leans on: variables to files, functions to classes, tested on real tables.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 9 to 12', note: 'Models built from the ground up, trained on data the student has cleaned and can defend.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 8 to 12', note: 'pandas, charts and honest summaries: the Denver bikeway project below is a typical week.' },
      { course: 'cybersecurity-course-for-teens-ethical-defensive', band: 'Grades 9 to 12', note: 'Defensive security for teens, one of the six Colorado strands, taught ethically and hands on.' }
    ]
  },

  sections: [
    {
      id: 'colorado', tint: '', eyebrow: 'Colorado standards',
      h2: 'Six strands, one of them AI, and none of them compulsory for districts',
      intro: 'What the Colorado Department of Education&rsquo;s 2024 computer science standards document says, read on 18 October 2026.',
      body: [
        { kind: 'table', caption: 'The six content area strands of the Colorado Academic Standards: Computer Science (adopted 2024), with where each shows up for our teen students (right-hand column ours)', head: ['Strand', 'Where a Denver teen meets it with us'], rows: [
          ['Computational Thinking', 'Breaking the bikeway question into small, testable steps before writing code'],
          ['Computing Systems and Networks', 'How a request to a city data server works, and what comes back'],
          ['Computer Programming', 'Python in every course, with functions, files and tests'],
          ['Cybersecurity', 'The defensive cybersecurity course: passwords, permissions and safe habits'],
          ['Artificial Intelligence (AI)', 'Machine learning models trained, measured and questioned'],
          ['Digital Citizenship', 'Licences, attribution and privacy whenever we use public data']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Adopted in 2024', p: 'CDE records that on May 9, 2024 the State Board adopted revised K-12 standards, adding K-8 standards for the first time and new content on AI, cybersecurity and digital citizenship.' },
          { h3: 'First taught 2026 to 2027', p: 'The document says the 2026-27 school year is the first year of implementation for the revised standards, so this year&rsquo;s Denver ninth graders are the first to meet them in class.' },
          { h3: 'Voluntary by law', p: 'Under House Bill 16-1198 local education providers may choose whether to implement them. CDE notes this voluntary status is different from every other set of Colorado academic standards.' }
        ] },
        { kind: 'p', text: 'House Bill 16-1198 also ties the high school standards to courses that can qualify as a graduation requirement in either mathematics or science, so in some districts a computer science course can fill a math or science slot. Whether it does is a local decision, which is why a Denver family should ask the school directly rather than rely on a statewide rule.' },
        { kind: 'table', mt: true, caption: 'Share of Colorado high schools with a foundational CS course, year by year, as Code.org (2025) publishes it', head: ['Year', 'Colorado'], rows: [
          ['2020 to 2021', '57%'],
          ['2021 to 2022', '54%'],
          ['2022 to 2023', '59%'],
          ['2023 to 2024', '66.3%, 344 of 519 high schools']
        ] },
        { kind: 'p', text: 'The 2023 to 2024 figure is the latest Colorado year in the data, and Code.org lists its source as the state education agency and school catalogs. Cite it as Code.org (2025). 2025 State of AI + CS Education; this page reproduces only the Colorado values.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How many miles of bikeway does Denver have? It depends which mile you mean',
      intro: 'The City and County of Denver publishes its bicycle facilities, existing and planned, as open data built for the Denver Moves: Bikes update. Teens query it, add up lengths by facility type, and discover that the dataset holds three different measures of length.',
      body: [
        { kind: 'table', caption: 'Denver bikeway records with an existing facility type, by type (our sums from the city&rsquo;s Open Data Bike Facilities layer, queried 18 October 2026)', head: ['Existing facility type', 'Records', 'Our sum of CENTERLINE_MILES', 'Our sum of BIKE_LANE_MILES'], rows: [
          ['Trail', '237', '114.46', '228.91'],
          ['Bike Lane', '203', '91.24', '156.72'],
          ['Shared Sidewalk', '119', '56.78', '113.13'],
          ['Buffered Bike Lane', '96', '47.05', '74.60'],
          ['Protected Bike Lane', '65', '41.80', '53.81'],
          ['Neighborhood Bikeway', '72', '38.35', '76.47'],
          ['Car-Free Street', '21', '5.79', '11.59'],
          ['Shared Street', '10', '2.36', '4.73']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Respect the cap', p: 'A count request returned 2,025 records, more than the 2,000 the service hands back in one page. Rather than paging, students ask the server to group and sum for them with outStatistics, a real API skill.' },
          { h3: '2. Two kinds of mile', p: 'CENTERLINE_MILES measures the street once. BIKE_LANE_MILES counts each side that has a lane, and MILEAGE_MULTIPLIER is 2 on 1,833 records and 1 on 192. That is why lane miles are close to double for trails but not for protected lanes.' },
          { h3: '3. The hidden unit', p: 'Shape__Length looks like a third length, but the layer uses a Colorado state plane system measured in feet. The Trail rows sum to 604,328; divide by 5,280 and you get back 114.46 miles.' }
        ] },
        { kind: 'callout', h3: 'A one-record puzzle', p: 'Group by display status and you find 822 existing bikeway records; group by existing facility type and you find 823. The odd one out is marked Future Bikeway yet already carries an existing type of Protected Bike Lane. A good analyst reports both numbers and the reason, rather than quietly picking one.' },
        { kind: 'p', text: 'Every figure in this section is ours, computed from the city&rsquo;s layer on 18 October 2026. The City and County of Denver supplies the data as is, without warranty and not for engineering purposes, so our sums are a classroom result, not an official network length. The status field adds the forward-looking part of the story: 1,388 records are Unfunded and 500 Completed, with 60 in design or construction, which makes a good second question about what share of the plan already exists.' },
        { kind: 'p', text: 'The Python is short: a requests call with groupByFieldsForStatistics, a loop that divides feet by 5,280, and a bar chart of centerline and lane miles side by side. The habit it builds is longer lasting. Before adding any column, find out its unit and its definition, and write both into the chart&rsquo;s caption.' }
      ]
    },
    {
      id: 'city', tint: 'tint', eyebrow: 'Denver facts',
      h2: 'The city behind the dataset',
      intro: 'Figures from the City and County of Denver&rsquo;s own pages and the Denver Public Library, read on 18 October 2026.',
      body: [
        { kind: 'table', caption: 'Denver, in the city&rsquo;s own words', head: ['What', 'As published'], rows: [
          ['Urban and mountain parkland', 'Nearly 20,000 acres'],
          ['Urban parks', 'Over 280'],
          ['Mountain parks', '14,000 acres'],
          ['Recreation centers', '30'],
          ['Bikeway goal', 'All residents within a two minute ride (a quarter mile) of a bikeway they feel safe and comfortable riding'],
          ['Bike plan', 'Public engagement on the Denver Moves: Bikes update in 2023-2024'],
          ['Denver Public Library', 'Established in 1889 in a wing of Denver High School; 28 locations today']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A goal you can test', p: 'The quarter-mile goal is a measurable claim, and a strong final-year project is to estimate how close Denver is to it with the bikeway layer and open address points, stating every assumption.' },
          { h3: 'High comfort, defined', p: 'The city counts trails, protected lanes with curbs or posts, and neighborhood bikeways as high comfort. Those are categories in the data too, so teens can check that the words and the fields line up.' },
          { h3: 'Libraries for the basics', p: 'With 28 locations, the library is the natural place for free computer access. Our classes are for teens who want structured, teacher-led programming on top of that.' }
        ] }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Mountain Time',
      h2: 'Fitting a live class around a Denver school day',
      intro: 'Denver follows America/Denver in the IANA time zone database, and Mountain Time changes twice a year while India never does.',
      body: [
        { kind: 'table', caption: 'A 5:00 pm Denver class seen from India across the 2026 to 2027 clock changes (our conversion using the tzdb America/Denver rules)', head: ['Dates in Denver', 'Mountain Time in use', 'Behind UTC by', 'Gap to India', 'Same moment in India'], rows: [
          ['Through Saturday, October 31, 2026', 'Daylight (MDT)', 'six hours', 'eleven and a half hours', '4:30 the next morning'],
          ['Sunday, November 1, 2026 onward', 'Standard (MST)', 'seven hours', 'twelve and a half hours', '5:30 the next morning'],
          ['Sunday, March 14, 2027 onward', 'Daylight (MDT)', 'six hours', 'eleven and a half hours', '4:30 the next morning']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Choosing a slot', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'Two clock changes', p: 'Because the gap with India grows by an hour on November 1, 2026 and shrinks again on March 14, 2027, we reconfirm each Denver class time in Mountain Time before both dates.' },
          { h3: 'After practice, before dinner', p: 'Many teens prefer a slot after sports or clubs; the conversion table above is how we check that it suits the teacher too. It is an example, not a fixed timetable.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first script to a model you can defend',
    intro: 'Grades are a rough guide; the first class with a teacher decides where a student begins.',
    cols: [
      { band: 'Grades 6 to 8', h3: 'Python foundations', p: 'Loops, lists and functions through small games and data puzzles.', courses: ['python-ai-kids-masterclass', 'python-complete-masterclass-teens'] },
      { band: 'Grades 8 to 10', h3: 'Data with purpose', p: 'pandas, charts and city datasets such as the bikeway layer.', courses: ['data-science-course-for-teens-python-data', 'orange-data-mining-visual-machine-learning-course-for-teens'] },
      { band: 'Grades 9 to 12', h3: 'Machine learning', p: 'Training, testing and explaining models, and the limits of each one.', courses: ['ai-ml-masterclass-teens', 'teens-ai-tools-mastery-course'] },
      { band: 'Grades 10 to 12', h3: 'Security and AP', p: 'Defensive cybersecurity and AP Computer Science A for students who want both.', courses: ['cybersecurity-course-for-teens-ethical-defensive', 'ap-computer-science-a-java-exam-prep-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Colorado put AI in the standards. Why still learn Python first?',
    intro: 'Because the AI strand is about understanding systems, and understanding comes from building them.',
    p1: 'Hand the bikeway question to a chatbot and it may well sum the length column and call the answer miles. It would be off by a factor of 5,280 and nobody would notice unless the person asking knew where the number came from. Teens who wrote the query themselves catch it at once.',
    p2: 'Our machine learning lessons follow the same rule. Students prepare the data, train a model, measure it on examples it has never seen, and then explain in plain words where it fails. AI assistants are allowed as helpers for drafting code, and every suggestion is read and tested before it is kept.',
    closer: 'The Colorado AI strand asks teens to understand how computers learn; the reliable way to understand it is to make one learn something and check its work.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online, from Capitol Hill to Green Valley Ranch',
    intro: 'Denver teens join from home, so a class fits between school, practice and homework without a drive across town.',
    cells: [
      { h3: 'A real teacher, live', p: 'Every session is taught in real time, with screens shared and questions answered on the spot. Nothing is a pre-recorded video.' },
      { h3: 'Grade-aware planning', p: 'Teachers think in US grades and the Colorado school calendar, and can link projects to a school CS course. Anything a school grades remains the student&rsquo;s own work.' },
      { h3: 'Try it free first', p: 'One complete lesson with a teacher, then a recommendation of level, course and time. We do not take card details for it.' },
      { h3: 'Small groups', p: 'Fifteen to twenty teens at the same level, from Colorado and other states, moving through projects together.' },
      { h3: 'Private option', p: 'One teacher and one teen, for those preparing for AP, a competition or a portfolio project.' },
      { h3: 'Mountain Time first', p: 'Weekdays or weekends, flexible, and every slot written down in Mountain Time.' }
    ],
    spec: { title: 'No local campus', p: 'Classes are live and online from India. Modern Age Coders has no office in Denver or Colorado and claims none, and is not connected with the City and County of Denver, the Denver Public Library or the Colorado Department of Education.' }
  },

  fees: {
    h2: 'What Denver families pay',
    intro: 'Simple, monthly and in US dollars.',
    first: 'A free first lesson that ends with a level, course and Mountain Time slot suggested for your teen.',
    group: 'A month in a small group of fifteen to twenty students working at the same level.',
    private: 'A month of one-to-one lessons with a single teacher.',
    closer: 'Denver, Aurora and the rest of the US pay the same US dollar fee. Billing begins only once the free lesson is done and a course is chosen; holidays and missed classes are explained on the pricing page.'
  },

  reviewsH2: 'Reviews from families on Google',

  book: {
    h2: 'Book a free class for your Denver teen',
    intro: 'Tell us the grade and the interest. A seventh grader might start with a Python game, a junior with the bikeway units puzzle or a first machine learning model.',
    success: 'Thank you. We will be in touch shortly to set up a free class for your teen in Denver.'
  },

  faq: {
    h2: 'Questions from Denver families',
    intro: 'Asked by Denver parents and teens before a first class.',
    items: [
      { q: 'Do Colorado computer science standards include AI?', a: 'Yes. The 2024 Colorado Academic Standards for computer science are organized into six strands, and Artificial Intelligence is one of them, alongside Cybersecurity and Digital Citizenship.' },
      { q: 'When do the new Colorado CS standards start?', a: 'CDE says the State Board adopted them on May 9, 2024 and that the 2026-27 school year is the first year of implementation.' },
      { q: 'Must Denver schools follow the computer science standards?', a: 'No. Under House Bill 16-1198 local education providers may choose to implement them, which CDE notes makes them unlike the state\'s other academic standards.' },
      { q: 'How many Colorado high schools offer computer science?', a: 'Code.org (2025) reports 344 of 519 Colorado high schools, or 66.3%, offering foundational computer science in 2023 to 2024.' },
      { q: 'Is this page good for a teen who has never coded?', a: 'Yes. Python for teens starts from zero, and the free class finds the right group, whether that is beginners or students already writing functions.' },
      { q: 'What is the Denver bikeway project?', a: 'Teens query the City and County of Denver bike facilities data, sum lengths by facility type, and learn why centerline miles, lane miles and a length in feet are different numbers.' },
      { q: 'What time are classes for Denver teens?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Slots are confirmed in Mountain Time.' },
      { q: 'Do class times move when the clocks change?', a: 'We reconfirm every Denver class before November 1, 2026 and March 14, 2027, because India does not change its clocks and the gap moves by one hour.' },
      { q: 'Do you have a center in Denver?', a: 'No building, no campus: lessons stream live from our teachers in India to the teen at home, so a microphone and decent internet are the only kit required.' },
      { q: 'Which AI tools do teens use in class?', a: 'Only tools whose own terms allow the student\'s age. We never ask under-18 students to use adult-only services, and most work is plain Python they write themselves.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More for Denver and US teens',
    html: 'Teens who like competition can read the <a class="cg-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge guide</a>; future AP students can see <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>. Families comparing options across the country can start at <a class="cg-inline-link" href="/coding-classes-in-united-states">the United States hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Denver and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/ap-computer-science-a-online-classes', label: 'AP CS A classes' },
    { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' }
  ],

  personalityCss: `
.cg-root.cg-aptd .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-aptd .cg-hero h1 { font-weight: 700; letter-spacing: -0.022em; line-height: 1.04; }
.cg-root.cg-aptd .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-aptd .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-aptd .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.014em; }
.cg-root.cg-aptd .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.8rem); }
.cg-root.cg-aptd .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-aptd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aptd .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-aptd .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Colorado, read raw on 18 October 2026: CDE Colorado Academic Standards: Computer Science (adopted 2024) PDF (six strands incl. Artificial Intelligence (AI); adopted May 9, 2024; K-8 added; 2026-27 first year of implementation; House Bill 16-1198, courses that qualify as a math or science graduation requirement; voluntary for local education providers); Code.org (2025) raw sheet Access tabs (CO 2023-2024, 344 of 519, 66.3%; 57%, 54%, 59%); IANA America/Denver and the US DST rule.',
    localProject: 'City and County of Denver Open Data Bike Facilities (provided as is, not for engineering purposes), queried 18 October 2026 with outStatistics: 2,025 records; STATUS Unfunded 1,388, Completed 500; MILEAGE_MULTIPLIER 2 on 1,833; our sums by existing facility type, Trail 237 records, 114.46 centerline miles, 228.91 lane miles; Shape__Length in feet, 604,328 / 5,280 = 114.46; 822 existing by display status against 823 by type. Lesson family: sums by category, unit conversion and two definitions of a mile.',
    requiredMentions: [
      '822 existing bikeway records',
      '1,388 records are Unfunded',
      '28 locations today',
      'Shape__Length looks like a third length',
      '2,025 records',
      '604,328',
      'divide by 5,280 and you get back 114.46 miles',
      'MILEAGE_MULTIPLIER is 2 on 1,833 records',
      'Nearly 20,000 acres',
      'a two minute ride (a quarter mile)',
      'Established in 1889 in a wing of Denver High School',
      'Over 280'
    ],
    sources: [
      { claim: 'CDE: Colorado Academic Standards, Computer Science, page and 2024 standards document.', url: 'https://ed.cde.state.co.us/computerscience' },
      { claim: 'City and County of Denver: Open Data Bike Facilities feature service.', url: 'https://services1.arcgis.com/zdB7qR0BtYrg0Xpl/arcgis/rest/services/Denver_Bicycle_Facilities_ODC/FeatureServer/450' },
      { claim: 'City and County of Denver open data portal.', url: 'https://opendata-geospatialdenver.hub.arcgis.com/' },
      { claim: 'Denver Parks and Recreation: parkland acres, urban parks, mountain parks, recreation centers.', url: 'https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Parks-Recreation' },
      { claim: 'Denver DOTI Bicycles: quarter-mile goal, high-comfort bikeways, Denver Moves: Bikes update.', url: 'https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Department-of-Transportation-and-Infrastructure/Programs-Services/Bicycles' },
      { claim: 'Denver Public Library: founded 1889, 28 locations.', url: 'https://www.denverlibrary.org/about' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Colorado access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'IANA tzdb northamerica: America/Denver and the US DST rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'An official Denver bikeway network length: not published in what we read; the page prints only our sums, labelled as ours.',
      'Names of standards committee members and State Board members in the CDE document: not needed, left out.',
      'Code.org rural, suburban, gender and race figures for Colorado: not used.',
      'Sloan\'s Lake project spending and drought notices on the parks page: money and drought content, left out.',
      'That our classes satisfy a Colorado graduation requirement: refused; districts decide which courses count.',
      'Any affiliation with the City and County of Denver, the Denver Public Library, CDE, Code.org or the College Board.'
    ]
  }
};
