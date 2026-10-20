'use strict';
// Atlanta (cg- metro page, US cluster Phase 5, row 127). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: is the typical Atlanta park big or small? The city's own parks layer answers it, and the answer depends on
// whether you take the mean or the median. Sources read raw on 17 and 18 October 2026 (copies in
// keyword-research-2026-09/us/src/online-coding-and-ai-classes-in-atlanta/):
//  - City of Atlanta Open Data Hub (dpcd-coaplangis.opendata.arcgis.com), site licence field "CC-BY-SA"
//    (hub-site-licence-excerpt.txt). The "Official City of Atlanta Parks" item has an empty licenseInfo; its
//    accessInformation credits the "Department of Parks & Recreation Geographic Information Systems team".
//  - City of Atlanta GIS, gis.atlantaga.gov/dpcd/rest/services/OpenDataService1/MapServer, counts with
//    returnCountOnly on 17 October 2026: Parks (layer 26) 373; City Council Districts (2) 12; Neighborhoods (3) 248;
//    NPU (4) 25, names A to Z without U; Historic District (15) 19; Landmark Building Site (16) 74; Historic Building
//    (17) 1,071; Bicycle Share (27) 85; MartaRailStations (28) 38; MultiuseTrails (32) 110.
//  - Parks layer attributes (parks26-attributes-2026-10-17.json), our calculations: 362 of 373 records carry GIS_AC;
//    mean 9.84 acres, median 0.995 acres; 181 records under 1 acre, 257 under 5; summed GIS_AC 3,560.9 (ours, not an
//    official total); ten largest: Chastain Memorial Park 249.91, Southside Park 211.0, Piedmont Park 171.09, Browns
//    Mill Golf Course 160.13, Adams Park 158.43, Grant Park 130.63, Freedom Park 123.84, Cascade Springs Nature
//    Preserve 120.95, Lakewood Fairgrounds & HiFi Buys Amphitheater 113.3, John A. White Park 112.0; their share of the
//    summed acres 43.6%; eight of the ten carry CLASS code R; COUNTY values FULTON 339, DEKALB 29, plus " FULTON" 2,
//    "Fulton" 2, "fulton" 1; PLAYGROUND above zero on 121 records.
//  - Code.org (2025). 2025 State of AI + CS Education, raw sheet, Most Recent Access Data: GA 2024-2025, 399 of 495
//    high schools offer CS (80.6%), source "State Education Agency"; Access over the years GA 0.52 (2018-19).
//    Policy toggles for Georgia as read for the by-state page: no CS graduation requirement, CS can count toward
//    graduation, high schools required to offer CS.
//  - IANA tzdb northamerica: Zone America/New_York, US rules; 2026 to 2027 switch dates November 1, 2026 and March 14, 2027.
// Blocked: www.atlantaga.gov returned Access Denied (403) on 17 October 2026, not retried; gadoe.org did not connect
// (timeouts) on 17 and 18 October 2026, so no Georgia DOE wording is quoted.
// Lesson family: sorting, top-N and mean versus median on a skewed distribution.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'ATLANTA', label: 'Atlanta', blurb: 'Live online coding and AI for Atlanta students, with a project on the city&rsquo;s own parks data: mean or median?' },
  market: US,
  slug: 'online-coding-and-ai-classes-in-atlanta',
  code: 'aiat',
  accent: '#662E2E',
  accentRationale: 'Atlanta: #662E2E, a dark Georgia red-clay brown from the allocation table, chosen to sit apart from the other US accents and readable on every paper colour',
  pageType: 'city',
  place: {
    name: 'Atlanta',
    eyebrow: 'Atlanta, Georgia, United States',
    schemaType: 'City',
    chain: [
      { type: 'State', name: 'Georgia' },
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Atlanta',
  title: 'Online Coding and AI Classes in Atlanta, Georgia | Live',
  description: 'Live online coding and AI classes for Atlanta students, kindergarten to twelfth grade, with a Python project on City of Atlanta parks data and Eastern Time slots.',
  ogDescription: 'Atlanta kids and teens learn Python, AI and web building live online. Their first data project asks a real question of the city&rsquo;s parks layer: mean or median?',
  twitterDescription: 'Online coding and AI classes for Atlanta students, live, with a city parks data project.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Online Coding and AI Classes for Atlanta Students',
    description: 'Live online Scratch, Python, data science and AI courses for Atlanta students from elementary to high school, placed by level and taught in English on Eastern Time.'
  },

  h1: 'Online coding and AI classes in Atlanta',
  capsuleQ: 'Where can an Atlanta student learn coding and AI live online?',
  capsule: 'Modern Age Coders teaches Atlanta students from age 6 to 18 in live online classes: Scratch and blocks for elementary grades, Python and web for middle school, data science, AI and AP Computer Science for high school. Every class has a real teacher, a small level-matched batch or a 1-on-1 option, and Eastern Time slots. The first lesson is free.',
  lead: 'Atlanta is a city of small parks. That sounds like an opinion, but it is a measurement: the City of Atlanta publishes a parks layer with an acreage for almost every property, and when you line those acres up, the middle value is about one acre while the average is close to ten. Which number describes the typical park? Answering that question properly is a first lesson in data science, and it is the project our Atlanta students start with. This page sets out the courses we teach, what Georgia&rsquo;s published figures say about computer science in its high schools, how the city&rsquo;s parks data becomes a Python exercise, and how a live class from India fits the Eastern Time school day.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Atlanta.',

  picks: {
    eyebrow: 'Course picks for Atlanta',
    h2: 'Four starting points for Atlanta students',
    intro: 'Matched to grade and goal, then fine-tuned in the free lesson. No card is needed to start.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Grades 1 to 5', note: 'Animations, games and stories in blocks, so an elementary student learns loops and events by making something worth showing.' },
      { course: 'python-ai-kids-masterclass', band: 'Grades 5 to 8', note: 'First typed code, small AI experiments and the habit of testing a program before trusting it.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 9 to 12', note: 'Python with real tables: the Atlanta parks project, charts, and the question of which summary number to believe.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 10 to 12', note: 'Machine learning models a teen builds, trains and audits, after the Python foundations are solid.' }
    ]
  },

  sections: [
    {
      id: 'city', tint: '', eyebrow: 'Atlanta by its own map',
      h2: 'The city in numbers from its own GIS',
      intro: 'Counts read from the City of Atlanta&rsquo;s public map services on 17 October 2026. Each one is a number of map records, which is not always the same thing as a headline count.',
      body: [
        { kind: 'table', caption: 'Selected City of Atlanta GIS layers and their record counts (read 17 October 2026)', head: ['Layer', 'Records', 'What a student can do with it'], rows: [
          ['City Council Districts', '12', 'Join park records to districts and compare totals fairly'],
          ['Neighborhood Planning Units (NPU)', '25', 'A group-by key; the units are lettered A to Z, with no U'],
          ['Neighborhoods', '248', 'A finer group-by key, and a lesson in why finer is not always better'],
          ['Parks', '373', 'The signature project below'],
          ['MARTA rail stations', '38', 'Distance questions: which parks sit near a station?'],
          ['Bike share stations', '85', 'Points on a map, ready for nearest-neighbour exercises'],
          ['Multiuse trail records', '110', 'Line features, where length needs care with map units'],
          ['Historic districts', '19', 'Polygons to test whether a point falls inside one'],
          ['Landmark building sites', '74', 'A small table for a first filter and sort'],
          ['Historic buildings', '1,071', 'Large enough that a loop beats counting by hand']
        ] },
        { kind: 'p', text: 'Two of these are worth a sentence each. Atlanta organises citizen planning through Neighborhood Planning Units, and the layer holds 25 of them, lettered A to Z with the letter U missing; a student who checks the letters with a set in Python finds the gap in one line. And the neighborhood layer holds 248 records, roughly ten neighborhoods for every NPU, which is why the same question asked at two levels can give two different-looking answers.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Records, not headlines', p: 'A layer count tells you how many rows the map holds. A row can be a whole park, part of a park or a property that is not open to the public yet, so we never print a layer count as the city&rsquo;s official total.' },
          { h3: 'Two counties in one table', p: 'The parks layer lists properties in both Fulton and DeKalb counties, because the city crosses the county line. Students meet the problem of one place, two jurisdictions, early.' },
          { h3: 'Free to learn from', p: 'The City of Atlanta Open Data Hub sets a CC-BY-SA licence for its site, so a student can reuse what they build from it as long as they credit the source and share alike.' }
        ] }
      ]
    },
    {
      id: 'georgia', tint: 'tint', eyebrow: 'Georgia and computer science',
      h2: 'What Georgia&rsquo;s schools offer, in one paragraph',
      intro: 'The state picture is covered on our Georgia page; here is the short version an Atlanta parent needs.',
      body: [
        { kind: 'p', text: 'In Georgia, most public high schools now teach the subject: Code.org (2025), 2025 State of AI + CS Education, counts 399 of 495 public high schools with a foundational course in the 2024 to 2025 school year, which is 80.6%, up from 52% six years earlier, with the state education agency as its data source. Code.org&rsquo;s policy tracker records that Georgia requires high schools to offer computer science and lets it count toward graduation, but does not make it a graduation requirement. So for most Atlanta teenagers the question is not whether a course exists in the building, but whether there is room for it in the timetable and whether one course is enough. Our <a class="cg-inline-link" href="/coding-classes-in-georgia">Georgia coding classes page</a> explains how computer science interacts with the state&rsquo;s scholarship rules, so we do not repeat it here.' },
        { kind: 'callout', h3: 'What we could not read', p: 'The Georgia Department of Education website did not connect when we tried on 17 and 18 October 2026, so this page quotes no department wording. The figures above are Code.org&rsquo;s, cited as theirs.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Mean or median? How big is a typical Atlanta park',
      intro: 'The City of Atlanta parks layer gives each property an acreage. Students download it, sort it, and discover that two honest summary numbers disagree by a factor of ten.',
      body: [
        { kind: 'table', caption: 'The ten largest records in the City of Atlanta parks layer by GIS acres (our sort of the GIS_AC field, downloaded 17 October 2026)', head: ['Rank', 'Park record', 'GIS acres'], rows: [
          ['1', 'Chastain Memorial Park', '249.91'],
          ['2', 'Southside Park', '211.00'],
          ['3', 'Piedmont Park', '171.09'],
          ['4', 'Browns Mill Golf Course', '160.13'],
          ['5', 'Adams Park', '158.43'],
          ['6', 'Grant Park', '130.63'],
          ['7', 'Freedom Park', '123.84'],
          ['8', 'Cascade Springs Nature Preserve', '120.95'],
          ['9', 'Lakewood Fairgrounds & HiFi Buys Amphitheater', '113.30'],
          ['10', 'John A. White Park', '112.00']
        ] },
        { kind: 'table', mt: true, caption: 'Summary of GIS_AC across the parks layer (our calculations, 17 October 2026 download)', head: ['Measure', 'Our result'], rows: [
          ['Records in the layer', '373'],
          ['Records with an acreage value', '362'],
          ['Mean acreage', '9.84 acres'],
          ['Median acreage', '0.995 acres'],
          ['Records under 1 acre', '181'],
          ['Records under 5 acres', '257'],
          ['Share of summed acres held by the ten largest', '43.6%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Sort and slice', p: 'Load the attribute table, drop the 11 records with no acreage, and sort by GIS_AC from largest to smallest. Slicing the first ten rows gives the table above: a student&rsquo;s first top-N query, written as sorted(parks, key=..., reverse=True)[:10].' },
          { h3: '2. Two averages', p: 'The mean comes out near ten acres, the median just under one. Half of the 362 records are smaller than a single acre, while a handful of very large parks pull the mean upward. Neither number is wrong; they answer different questions.' },
          { h3: '3. Say which one you mean', p: 'If a council member says the typical Atlanta park is ten acres, is that fair? Students write one sentence that uses the median for the typical park and the top-ten share for where the land actually is, and explain why.' }
        ] },
        { kind: 'callout', h3: 'Our numbers, not the city&rsquo;s', p: 'Every figure in this section is ours, computed from one download of the city&rsquo;s layer on 17 October 2026. Map acreage is not the same as surveyed acreage, and some records are parts of parks or properties not yet open. The City of Atlanta has not reviewed these results.' },
        { kind: 'p', text: 'There is a second, smaller lesson hiding in the county column. Most records say FULTON and 29 say DEKALB, but a handful are spelled Fulton, fulton or carry a leading space. A student who counts counties without cleaning those labels first gets five categories instead of two, and learns that strip() and upper() belong at the start of every analysis, not after the chart looks strange.' },
        { kind: 'p', text: 'The playground field makes a third exercise for younger students: 121 records have at least one playground listed. A ten-year-old can filter for those, sort them by size, and find out whether the city&rsquo;s biggest parks are also the ones with playgrounds, which turns a list into a question a child actually cares about.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Eastern Time classes, around the Atlanta school day',
      intro: 'Atlanta keeps Eastern Time. Our teachers work from India, which does not change its clocks, so the gap moves by an hour twice a year.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'The gap to India', p: 'From November 1, 2026, when Atlanta falls back to Eastern Standard Time, India time is 10 hours 30 minutes ahead. From March 14, 2027, under daylight time, the gap is 9 hours 30 minutes.' },
          { h3: 'No surprises after the switch', p: 'Before each change we confirm every student&rsquo;s class in Eastern Time by message, so an after-school slot in Buckhead or East Point stays an after-school slot.' }
        ] },
        { kind: 'spec', title: 'The calendar as a coding exercise', p: 'The IANA time zone database lists Atlanta under America/New_York. Teen students write a short Python script with zoneinfo that prints their next five classes in both Eastern Time and India time, then run it across November 1, 2026 to watch the offset change by itself.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first animation to a model you can explain',
    intro: 'The grade bands are guides. A free placement lesson decides where a student actually starts.',
    cols: [
      { band: 'Grades K to 4', h3: 'Blocks and stories', p: 'Sequences, loops and events in Scratch, with games a younger sibling can play.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 5 to 8', h3: 'Typed code arrives', p: 'Python and JavaScript, small web pages and the first data tables.', courses: ['python-ai-kids-masterclass', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'Grades 9 to 10', h3: 'Data and the web', p: 'The parks project, pandas, charts and full web projects with a real audience.', courses: ['data-science-course-for-teens-python-data', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Grades 11 to 12', h3: 'AP and AI', p: 'AP Computer Science A in Java, and machine learning a student can defend line by line.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why an Atlanta teen should still learn to code when AI can write it',
    intro: 'An assistant will compute a mean in a second. Knowing whether the mean is the right answer is the part that takes practice.',
    p1: 'Ask a chatbot for the average size of an Atlanta park and it may confidently give you a single number. A student who has sorted the city&rsquo;s parks layer knows that the mean and the median are ten times apart, that eleven records have no acreage, and that a few huge properties change the story. That knowledge does not come from reading an answer; it comes from building one.',
    p2: 'So our classes use AI the way a good analyst does: as a fast helper for boilerplate, followed by a human check of what the code actually did. Students learn to ask an assistant to explain its output, then test it against a result they computed themselves.',
    closer: 'The goal is a teenager who can tell when a confident number is misleading, which is worth more than any single program.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Buckhead to College Park, the same live class',
    intro: 'Atlanta traffic makes a weekday drive to a coding center a real cost. A class at home removes it.',
    cells: [
      { h3: 'Learn from home', p: 'A student in Midtown and one in Southwest Atlanta can sit in the same lesson, each at their own desk, with no pickup to arrange.' },
      { h3: 'US grades, Georgia context', p: 'Teachers plan in US grade levels and around the school year. High schoolers can line projects up with a school computer science course or AP, while graded school work always stays their own.' },
      { h3: 'A real first lesson', p: 'The free class is a full lesson with a task, a teacher and a recommendation at the end: level, course and time.' },
      { h3: 'Level-matched batches', p: 'Groups of fifteen to twenty students who are at the same stage, drawn from Atlanta and across the US.' },
      { h3: 'Or a teacher to yourself', p: 'One-to-one classes for students who want to move faster, prepare for AP, or work on their own project.' },
      { h3: 'Eastern Time, always', p: 'Every slot is agreed and confirmed in Eastern Time, with flexible weekdays or weekends.' }
    ],
    spec: { title: 'Online only', p: 'All teaching is live and online from India. There is no Modern Age Coders center in Atlanta and we do not claim one. A student needs a laptop or desktop, a headset or working speakers and a stable connection.' }
  },

  fees: {
    h2: 'Fees for Atlanta families',
    intro: 'Three numbers, shown in US dollars.',
    first: 'A full first lesson at no charge, finishing with a suggested level, course and class time.',
    group: 'A month of live classes in a level-matched batch of fifteen to twenty students.',
    private: 'A month of classes with one teacher working with one student.',
    closer: 'Every US family pays the same rate in US dollars, whether in Decatur or Sandy Springs. Payment begins only once the trial lesson is done and a plan is chosen; holiday weeks and missed sessions are explained on our pricing page.'
  },

  reviewsH2: 'Google reviews written by families we teach',

  book: {
    h2: 'Tell us about your Atlanta student',
    intro: 'Say the grade and one thing your child enjoys. A second grader might animate a cartoon cat, a sixth grader might write a guessing game, and a tenth grader might take on the parks mean-and-median puzzle.',
    success: 'Thank you. Our team will contact you shortly about a class for your Atlanta student.'
  },

  faq: {
    h2: 'Atlanta coding and AI questions',
    intro: 'The questions Atlanta parents ask most often before a first class.',
    items: [
      { q: 'Are your Atlanta coding classes in person?', a: 'No. Every class is live and online, taught by a real teacher from India. There is no Atlanta center, so students join from home on a laptop or desktop.' },
      { q: 'What ages and grades do you teach in Atlanta?', a: 'Students from about age 6 to 18, from first grade blocks coding to AP Computer Science A and machine learning in twelfth grade. Adults can join our separate adult courses.' },
      { q: 'What time are classes for Atlanta families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is confirmed in Eastern Time.' },
      { q: 'How do clock changes affect class times?', a: 'India does not change its clocks. When Atlanta falls back on November 1, 2026 and springs forward on March 14, 2027, we confirm each class in Eastern Time before the change.' },
      { q: 'What is the Atlanta parks project?', a: 'Students download the City of Atlanta parks layer, sort it by acreage and compare the mean with the median. In our 17 October 2026 download the mean was 9.84 acres and the median 0.995 acres.' },
      { q: 'Is the parks data free to use?', a: 'The City of Atlanta Open Data Hub sets a CC-BY-SA licence for its site. Students credit the city as the source, and our results are labelled as ours, not the city\'s.' },
      { q: 'How many Georgia high schools offer computer science?', a: 'For the 2024 to 2025 year, Code.org\'s 2025 State of AI + CS Education data puts it at 399 of 495 public high schools, or 80.6%.' },
      { q: 'Is computer science required to graduate in Georgia?', a: 'Code.org\'s 2025 tracker records no computer science graduation requirement in Georgia, though high schools must offer it and it can count toward graduation. Check details with your school.' },
      { q: 'Can my teen prepare for AP Computer Science with you?', a: 'Yes. We teach AP Computer Science A in Java and AP Computer Science Principles, alongside the school course. Graded school work always remains the student\'s own.' },
      { q: 'Where are the prices for Atlanta?', a: 'Scroll to the fees panel above the booking form: it lists the no-cost trial lesson, a month in a group and a month one to one, all in US dollars. Nobody is charged until after that trial.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More for Atlanta and US students',
    html: 'For the state view, read our <a class="cg-inline-link" href="/coding-classes-in-georgia">Georgia page</a>. High schoolers can look at <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a> or the <a class="cg-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge guide</a>, and younger builders can start with <a class="cg-inline-link" href="/how-to-make-a-roblox-game">how to make a Roblox game</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Atlanta and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-classes-in-georgia', label: 'Georgia' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/ap-computer-science-a-online-classes', label: 'AP CS A' }
  ],

  personalityCss: `
.cg-root.cg-aiat .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.2vw, 2.6rem); }
.cg-root.cg-aiat .cg-hero h1 { font-weight: 740; letter-spacing: -0.018em; line-height: 1.07; }
.cg-root.cg-aiat .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-aiat .cg-eyebrow { letter-spacing: 0.1em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-aiat .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.01em; }
.cg-root.cg-aiat .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.8rem); }
.cg-root.cg-aiat .cg-table caption { font-weight: 650; text-align: left; font-style: italic; }
.cg-root.cg-aiat .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aiat .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-aiat .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Georgia, read 17 to 18 October 2026: Code.org (2025) State of AI + CS Education raw sheet, Most Recent Access Data GA 2024-2025, 399 of 495 (80.6%), state education agency; GA 2018-2019 access 52%; Code.org policy toggles for Georgia (no graduation requirement, can count, required to offer). Georgia DOE (gadoe.org) did not connect, so no department text is quoted. IANA America/New_York and the US DST rule.',
    localProject: 'City of Atlanta parks layer (gis.atlantaga.gov OpenDataService1 layer 26; Open Data Hub site licence CC-BY-SA), downloaded 17 October 2026: 373 records, 362 with GIS_AC; our results mean 9.84 acres, median 0.995 acres, 181 under 1 acre, 257 under 5, ten largest hold 43.6% of summed acres; Chastain Memorial Park 249.91 largest; county label variants; 121 records with a playground. Lesson family: sorting, top-N and mean versus median.',
    requiredMentions: [
      '0.995 acres',
      '9.84 acres',
      'Chastain Memorial Park',
      '43.6%',
      'Records under 1 acre',
      'lettered A to Z, with no U',
      'Records under 5 acres',
      'MARTA rail stations',
      'CC-BY-SA',
      '121 records have at least one playground listed',
      'Southside Park'
    ],
    sources: [
      { claim: 'City of Atlanta GIS OpenDataService1: parks, council districts, NPUs, neighborhoods, historic, MARTA rail, bike share and trail layers.', url: 'https://gis.atlantaga.gov/dpcd/rest/services/OpenDataService1/MapServer' },
      { claim: 'City of Atlanta Open Data Hub: Official City of Atlanta Parks item and site licence.', url: 'https://dpcd-coaplangis.opendata.arcgis.com/' },
      { claim: 'Code.org (2025), 2025 State of AI + CS Education data: Georgia access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'IANA tzdb northamerica: America/New_York and the US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any wording from the Georgia Department of Education: gadoe.org did not connect on 17 and 18 October 2026.',
      'Facts from www.atlantaga.gov: Access Denied (403) on 17 October 2026, not retried.',
      'The city&rsquo;s official total park acreage: not read; the page prints only our sums and summaries, labelled as ours.',
      'Meanings of the parks CLASS codes: not documented in the layer, so not interpreted.',
      'An item-level licence for the parks layer: its licence field is blank, so only the Open Data Hub site-wide CC BY-SA statement is cited.',
      'Census income or any school names for Atlanta: not used.',
      'Any affiliation with the City of Atlanta, MARTA, Code.org or the College Board.'
    ]
  }
};
