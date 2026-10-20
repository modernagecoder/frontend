'use strict';
// Raleigh-Durham, North Carolina (cg- metro page, US cluster Phase 5, row 133). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: real data is messy, and the Triangle's own open data proves it: Durham's street tree file spells "Durham" sixteen
// ways. The page teaches data cleaning on it, for students of every age the region holds. Sources read raw on
// 18 October 2026 (copies in keyword-research-2026-09/us/src/online-coding-and-ai-classes-in-raleigh-durham/):
//  - Durham, NC Open Data Portal (live-durhamnc.opendata.arcgis.com), Trees & Planting Sites (item
//    58d3bc8776804c2baa87a0688975e72f, owner Open.Data_DurhamNC; licenseInfo: the Open Database License (ODbL) "is listed
//    here as a general reference, not as a binding document. The City and County of Durham reserve all their rights";
//    description "The location, species and size of street trees ... also contains locations that have been identified
//    as future planting sites"). returnCountOnly 28,968; all attributes paged (2,000 per page) on 18 October 2026.
//    Our counts: present Tree 23,220, Planting Site 5,374, Do Not Plant 269, Dead 61, blank 44. city: 16 distinct raw
//    values (Durham 21,727; DURHAM 5,628; blank 1,438; MORRISVILLE 138; "Durham " 15; CHAPEL HILL 5; Dur 4; D 2; 27705 2;
//    Durha 2; Du 2; DURAM 1; durham 1; Durh 1; "Durham, NC" 1; " Durham" 1); strip plus title case merges five spellings
//    into Durham 27,372. heightft stored as text: blank (null) 4,004 and a single space 1,984. diameterin: Planting Site
//    rows 3,555 blank and 1,799 zero; Tree rows 22 blank, 1 zero. facilityid: 2,189 blank; 17 values shared by 37 records
//    (16 pairs and one value on 5 records). Most common tree commonname: Common Crapemyrtle 3,387 (Tree rows).
//  - Same portal, GoDurham Bus Stops: returnCountOnly 841.
//  - Durham County Government (dconc.gov), Durham County History: "official birthdate is April 26, 1853 when the U.S.
//    Post Office was established"; "the town was not incorporated until April 10, 1869"; "Durham County was formed on April
//    17, 1881 from portions of land transferred into the county from Wake and Orange counties"; "In 1911, an additional
//    portion of land was transferred into the county from Wake County"; first Board of Commissioners "May 2, 1881".
//    About: "Home to more than 330,000 residents".
//  - Wake County Government (wake.gov), Libraries Locations: "Wake County Public Libraries offers 23 locations across the
//    county." News, October 16, 2026: STEAM Lab "to help third through fifth graders build math and science skills";
//    "more than 20 interactive STEAM Lab programs" each month.
//  - Raleigh-Durham International Airport (rdu.com): "a record 91 nonstop destinations on 19 airlines"; "The new runway will
//    stretch 10,639 feet".
//  - Code.org (2025), 2025 State of AI + CS Education: not repeated here; the North Carolina page carries the state figures.
//  - IANA tzdb northamerica: America/New_York; 1 November 2026 and 14 March 2027.
// Blocked (403, not retried): www.durhamnc.gov, raleighnc.gov. durhamcountylibrary.org returned 406, not used.
// Lesson family: data cleaning (inconsistent labels, two kinds of missing value, zero versus blank, duplicate IDs).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'RALEIGH-DURHAM', label: 'Raleigh-Durham', blurb: 'Live online coding and AI across the Triangle, for every age, with a Durham street tree data-cleaning project.' },
  market: US,
  slug: 'online-coding-and-ai-classes-in-raleigh-durham',
  code: 'ard',
  accent: '#27275C',
  accentRationale: 'Raleigh-Durham: a deep muted indigo, #27275C, as allocated in alloc.tsv for row 133, distinct from the other US metro accents and readable on the paper',
  pageType: 'city',
  place: {
    name: 'Raleigh-Durham',
    eyebrow: 'Raleigh-Durham, North Carolina',
    schemaType: 'Place',
    chain: [
      { type: 'State', name: 'North Carolina' },
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Raleigh-Durham',
  title: 'Online Coding and AI Classes in Raleigh-Durham, North Carolina',
  description: 'Live online coding and AI classes across Raleigh-Durham, North Carolina, from age 6 to adult, with a hands-on data cleaning project on Durham street tree records.',
  ogDescription: 'Coding and AI for the Triangle, taught live online: Scratch for kids, Python and AI for teens and adults, and a real lesson in cleaning messy city data.',
  twitterDescription: 'Raleigh-Durham coding and AI, live online, with a Durham open data cleaning project.',
  ogImageCourse: 'python-programming-masterclass-zero-to-advanced-college',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Raleigh-Durham Learners',
    description: 'Scratch, Python, web development, data science and AI for learners in Raleigh, Durham and the wider Triangle, from age 6 to adult, taught live online in small groups or one to one.'
  },

  h1: 'Online coding and AI classes in Raleigh-Durham, North Carolina',
  capsuleQ: 'Who can take live online coding and AI classes in Raleigh-Durham?',
  capsule: 'Anyone from age 6 up. Modern Age Coders teaches coding and AI live online to learners across Raleigh, Durham and the Triangle: Scratch and block games for children, Python, web and AI for teens, and career-level Python and data skills for college students and adults, in small level-matched groups or one to one, on Eastern Time.',
  lead: 'The Triangle is full of people who already work with code, and full of families who want their children to understand it. What both groups discover sooner or later is that most of the work is not writing clever programs but getting messy data into a state a program can trust. Durham&rsquo;s own street tree file is a perfect example: tens of thousands of carefully collected records, and a city column that spells Durham sixteen different ways. This page explains how our live classes serve every age in Raleigh-Durham, then walks through a data cleaning project on that file which a sixth grader can start and a working analyst would recognise.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class in Raleigh-Durham.',

  picks: {
    eyebrow: 'Course picks for the Triangle',
    h2: 'Four starting points, from age 6 to adult',
    intro: 'Pick by age and aim; a free first lesson confirms the level.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 7 to 11', note: 'Games, animations and stories in Scratch, finished and shared each week.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', band: 'Grades 7 to 10', note: 'Interactive web pages in JavaScript, the language every browser in the Triangle already runs.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 9 to 12', note: 'Machine learning from the ground up, starting with the clean data any model needs.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'College and adults', note: 'Python from zero to advanced for students and working adults, data cleaning included.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: '', eyebrow: 'Signature project',
      h2: 'Sixteen ways to spell Durham: cleaning a real city dataset',
      intro: 'The Durham, NC Open Data Portal publishes Trees &amp; Planting Sites, the city&rsquo;s street trees and the spots marked for future planting. We pulled all 28,968 records on 18 October 2026 and listed the problems a student meets before any analysis can begin.',
      body: [
        { kind: 'table', caption: 'Cleaning problems in the Trees &amp; Planting Sites file (our counts from the download of 18 October 2026)', head: ['Problem', 'What we found', 'Cleaning step a student writes'], rows: [
          ['One city, many spellings', '16 distinct values in the city column, from Durham (21,727) and DURHAM (5,628) to Dur, Durha, DURAM and a ZIP code, 27705', 'Strip spaces and fix case; then map the leftovers by hand'],
          ['Two kinds of empty', 'Height is blank on 4,004 records and a single space on 1,984 more', 'Treat both as missing, and count them together'],
          ['Zero versus blank', 'Planting sites carry diameter 0 on 1,799 records and no diameter on 3,555', 'Decide that both mean "no tree yet", then check the 23 tree rows with a blank or zero diameter'],
          ['Numbers stored as text', 'Height is recorded as bands such as 0-20 and &gt; 80, typed as text', 'Keep bands as categories; never average them'],
          ['Repeated IDs', '17 facility ID values shared by 37 records, and 2,189 with no facility ID', 'Find the duplicates, inspect them, and choose a rule before deleting anything']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Step 1: look before you fix', p: 'Students print the distinct values of every column first. Seeing Durham, DURHAM, "Durham " with a trailing space, durham and " Durham" side by side does more to teach cleaning than any lecture.' },
          { h3: 'Step 2: the easy wins', p: 'Stripping spaces and setting title case merges those five spellings into one: 27,372 records now read Durham. A single line of Python fixed more than 5,600 rows.' },
          { h3: 'Step 3: the judgment calls', p: 'What is left needs a human: Dur, Du, D, Durh and Durha are probably truncated typing, DURAM a typo, 27705 a ZIP code in the wrong field. Each fix gets written down, so others can check it.' }
        ] },
        { kind: 'callout', h3: 'Why the trees are not the only story', p: 'The present column splits the file into 23,220 trees, 5,374 planting sites, 269 Do Not Plant spots and 61 dead trees, with 44 left blank. Anyone who counts "trees" without filtering this column first is counting empty planting holes as trees. Cleaning is as much about knowing what a row means as about fixing its spelling.' },
        { kind: 'p', text: 'Every count in this section is ours, from one download of the Durham portal on 18 October 2026. The portal lists the Open Database License as a general reference only and says the City and County of Durham reserve their rights in the data, so we quote a handful of counts with credit and do not republish the records or any addresses.' },
        { kind: 'p', text: 'Children start with a printed sample of twenty rows and a highlighter: circle every Durham that looks different. Teens write the cleaning in Python with pandas, using str.strip, str.title and a small dictionary of manual fixes. Adults go further, writing tests that fail if a new download brings a spelling the rules have never seen, which is how cleaning works in a real data team.' }
      ]
    },
    {
      id: 'ages', tint: 'deep', eyebrow: 'Every age in the Triangle',
      h2: 'One teaching method, from a first Scratch game to a data job',
      intro: 'The same live, project-first approach works at each stage; only the projects change.',
      body: [
        { kind: 'table', caption: 'What each age group builds with us (our course plan)', head: ['Learner', 'Typical first month', 'Where the cleaning lesson fits'], rows: [
          ['Ages 6 to 9', 'Block games, animations and simple logic puzzles', 'Spotting the odd one out in a short list'],
          ['Ages 10 to 13', 'Scratch games with scores, then first Python', 'Counting spellings in a twenty-row sample'],
          ['Ages 14 to 18', 'Python, JavaScript, data projects and AI basics', 'Full pandas cleaning of the Durham tree file'],
          ['College and adults', 'Python, SQL, data analysis and AI tools for work', 'Automated cleaning with tests, the way teams do it']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For Triangle parents', p: 'Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina page</a> covers the new state computer science graduation requirement; here we focus on what a child or teen actually builds.' },
          { h3: 'For college students', p: 'Plenty of students in the region want Python and data skills beyond their major. Our college courses are live, with assignments marked by a teacher, and no graded coursework is ever done for a student.' },
          { h3: 'For working adults', p: 'Adults learning to code for a new role or a side project get the same small-group or one-to-one format, scheduled around a working day.' }
        ] }
      ]
    },
    {
      id: 'region', tint: 'tint', eyebrow: 'The Triangle in numbers',
      h2: 'Facts from Durham County, Wake County and RDU',
      intro: 'Figures from official county and airport pages and the Durham open data portal, read on 18 October 2026.',
      body: [
        { kind: 'table', caption: 'Raleigh-Durham facts from official sources', head: ['What', 'Figure', 'Source'], rows: [
          ['Durham&rsquo;s official birthdate', 'April 26, 1853, when the U.S. Post Office was established', 'Durham County history page'],
          ['Town of Durham incorporated', 'April 10, 1869', 'Durham County history page'],
          ['Durham County formed', 'April 17, 1881, from land of Wake and Orange counties', 'Durham County history page'],
          ['Durham County residents', 'More than 330,000', 'Durham County about page'],
          ['GoDurham bus stops', '841 in the open data layer (our count)', 'Durham open data portal'],
          ['Wake County Public Libraries', '23 locations across the county', 'Wake County libraries page'],
          ['Wake STEAM Lab', 'Launched October 16, 2026 for third through fifth graders, with more than 20 programs a month', 'Wake County news release'],
          ['RDU nonstop destinations', 'A record 91, on 19 airlines', 'Raleigh-Durham International Airport'],
          ['RDU new runway', '10,639 feet', 'Raleigh-Durham International Airport']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Libraries first', p: 'With 23 Wake library locations and a new STEAM Lab for grades 3 to 5, Raleigh families have great free starting points. Our classes are for children who then want a steady, teacher-led coding path.' },
          { h3: 'Dates as data', p: 'Durham has three founding dates depending on what you count: a post office, a town, a county. Storing them as proper dates and sorting them is a neat first exercise in Python&rsquo;s datetime module.' },
          { h3: 'Two counties, one class', p: 'A Durham County learner and a Wake County learner can sit in the same online group, each at home, with no drive along I-40 at rush hour.' }
        ] }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Eastern Time',
      h2: 'Scheduling across the Triangle&rsquo;s busy weeks',
      intro: 'Raleigh and Durham are on Eastern Time, America/New_York in the IANA database.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Choose what fits', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'Teachers in India', p: 'India sits 9 hours 30 minutes in front of Raleigh while daylight time lasts and 10 hours 30 minutes in front through the winter, which is why Triangle mornings and evenings suit our teachers.' },
          { h3: 'Checked twice a year', p: 'After the clocks go back on November 1, 2026 and forward on March 14, 2027, every slot is reconfirmed in Eastern Time so nobody misses a lesson.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From blocks to data pipelines',
    intro: 'Ages are guides; the first free lesson sets where each learner starts.',
    cols: [
      { band: 'Ages 6 to 9', h3: 'Blocks and games', p: 'Sequences, loops and events, with a finished game or story every week.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 10 to 13', h3: 'First real code', p: 'Python and simple web pages, plus small data puzzles from real places.', courses: ['python-ai-kids-masterclass', 'kids-ai-web-development-course'] },
      { band: 'Ages 14 to 18', h3: 'Projects and AI', p: 'Web apps, data cleaning with pandas and machine learning foundations.', courses: ['javascript-course-for-teens-beginners-interactive-web', 'ai-ml-masterclass-teens'] },
      { band: 'College and adults', h3: 'Career skills', p: 'Python to an advanced level, SQL and data analysis for study or work.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Can an AI tool clean the Durham file for you?',
    intro: 'It can help, but it cannot decide what the data means.',
    p1: 'Ask an assistant to tidy the city column and it may well merge the five Durham spellings in seconds. It cannot know whether 27705 belongs in the ZIP field, whether a Do Not Plant spot should count as a tree, or which of two records sharing an ID is the right one. Those are judgment calls about the real world.',
    p2: 'So in our classes AI assistants are allowed for adults and older teens, within each tool&rsquo;s own age terms, as a drafting aid: they suggest code, and the learner reads, runs and tests it against a sample checked by hand. Younger children learn about AI without using adult tools.',
    closer: 'The skill that lasts is knowing what each row means; AI makes that skill more valuable, not less.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live from home, anywhere from Wake Forest to Hillsborough Road',
    intro: 'Learners join from home or the office, so no one has to cross the Triangle for a class.',
    cells: [
      { h3: 'Real-time teaching', p: 'A teacher leads every session live, sees the learner&rsquo;s screen and answers questions as they come up.' },
      { h3: 'Right level, any age', p: 'Children, teens and adults are placed by skill after a free lesson, never simply by age.' },
      { h3: 'Free first lesson', p: 'One complete lesson, then a suggestion of level, course and slot. No card details are taken.' },
      { h3: 'Group classes', p: 'Fifteen to twenty learners at the same stage, from North Carolina and the rest of the US.' },
      { h3: 'One to one', p: 'A private teacher for learners with a specific goal, a tight schedule or a project to finish.' },
      { h3: 'Eastern Time', p: 'Weekdays or weekends, flexible, every slot written in Eastern Time.' }
    ],
    spec: { title: 'No local office', p: 'Teaching is live and online from India. Modern Age Coders has no office in Raleigh, Durham or anywhere in North Carolina, claims none, and is not connected with the City or County of Durham, Wake County or Raleigh-Durham International Airport.' }
  },

  fees: {
    h2: 'Fees for Raleigh-Durham learners',
    intro: 'Clear monthly fees in US dollars, after a free first lesson.',
    first: 'A free lesson with a teacher, ending with a suggested level, course and Eastern Time slot.',
    group: 'A month of classes in a group of fifteen to twenty learners at one level.',
    private: 'A month of one-to-one classes with a single teacher.',
    closer: 'Raleigh, Durham, Cary and Chapel Hill all pay the same US dollar fee. Payment begins once a course is picked after the trial, and the pricing page says how breaks and absences are handled.'
  },

  reviewsH2: 'What learners and parents say on Google',

  book: {
    h2: 'Book a free class in Raleigh-Durham',
    intro: 'Tell us who is learning and what they hope to do. A child might start with a Scratch game, a teen with the Durham cleaning project, an adult with Python for work.',
    success: 'Thank you. We will be in touch soon to arrange a free class in Raleigh-Durham.'
  },

  faq: {
    h2: 'Raleigh-Durham coding questions',
    intro: 'Asked by Triangle families and adult learners.',
    items: [
      { q: 'Do you teach adults as well as children in Raleigh-Durham?', a: 'Yes. We teach from age 6 to adult, including college students and working professionals, each placed by skill after a free lesson.' },
      { q: 'What is the Durham street tree cleaning project?', a: 'Learners download Durham\'s Trees and Planting Sites data and fix real problems: 16 spellings in the city column, two kinds of blank, zero versus missing diameter and duplicate IDs.' },
      { q: 'Why teach data cleaning at all?', a: 'Because real data is messy. In the Durham file, stripping spaces and fixing case alone merged five spellings into 27,372 Durham records before any analysis could start.' },
      { q: 'Is computer science required in North Carolina schools?', a: 'North Carolina has made it a graduation requirement. Our North Carolina page explains the rule; this page focuses on classes and projects.' },
      { q: 'What time are classes in Raleigh-Durham?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Slots are confirmed in Eastern Time.' },
      { q: 'Do class times move in November and March?', a: 'Our team messages each family around November 1, 2026 and March 14, 2027 to agree the Eastern Time slot again, since the gap to India shifts by an hour on those dates.' },
      { q: 'Which AI tools are used in class?', a: 'Adults and older teens may use AI assistants within each tool\'s own age terms, always checking the output. Younger children learn about AI without adult tools.' },
      { q: 'Can college students get help with graded assignments?', a: 'We teach the concepts and skills behind coursework, but never complete graded work for a student. The work they submit stays their own.' },
      { q: 'Is there a Modern Age Coders center in the Triangle?', a: 'No. All teaching is live online from India, so a computer, a headset and a reliable connection are all a learner needs.' },
      { q: 'Where are the fees?', a: 'Look just above the booking form: three lines cover the no-cost trial, a month of group study and a month with a private teacher, priced in US dollars, with no charge until the trial is over.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More for Triangle learners',
    html: 'Parents of high schoolers can read <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">coding and AI classes in North Carolina</a> for the state rules. High schoolers planning an AP year can look at <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-states">United States hub</a> lists every US page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Raleigh-Durham and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' },
    { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' }
  ],

  personalityCss: `
.cg-root.cg-ard .cg-hero-grid { align-items: start; gap: clamp(0.9rem, 2.5vw, 2.1rem); }
.cg-root.cg-ard .cg-hero h1 { font-weight: 690; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-ard .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-ard .cg-eyebrow { letter-spacing: 0.13em; font-weight: 660; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-ard .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.012em; }
.cg-root.cg-ard .cg-grid-3 { gap: clamp(0.95rem, 2.1vw, 1.75rem); }
.cg-root.cg-ard .cg-table caption { font-weight: 640; text-align: left; }
.cg-root.cg-ard .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ard .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-ard .cg-spec { border-radius: 2px; }
`,

  dossier: {
    curriculumAuthority: 'North Carolina rules: one pointer only, to /coding-and-ai-classes-in-north-carolina, which carries the law and Code.org figures; IANA America/New_York and the US DST rule. durhamnc.gov and raleighnc.gov returned 403.',
    localProject: 'Durham, NC Open Data Portal, Trees & Planting Sites (ODbL listed as general reference; City and County of Durham reserve rights; counts only), all 28,968 records paged 18 October 2026: 16 raw city spellings, 27,372 Durham after strip and title case; height blank 4,004 and single space 1,984; planting sites diameter 0 on 1,799 and blank on 3,555; 17 facility IDs on 37 records; present Tree 23,220, Planting Site 5,374, Do Not Plant 269, Dead 61. Lesson family: data cleaning.',
    requiredMentions: [
      '28,968 records',
      '16 distinct values in the city column',
      '27,372 records now read Durham',
      '4,004',
      '1,984',
      '17 facility ID values shared by 37 records',
      'April 17, 1881',
      'April 26, 1853',
      'More than 330,000',
      '23 locations across the county',
      'A record 91, on 19 airlines',
      '10,639 feet'
    ],
    sources: [
      { claim: 'Durham, NC Open Data Portal: Trees & Planting Sites feature service and licence note.', url: 'https://services2.arcgis.com/G5vR3cOjh6g2Ed8E/arcgis/rest/services/Trees_and_Planting_Sites/FeatureServer/11' },
      { claim: 'Durham, NC Open Data Portal: GoDurham Bus Stops.', url: 'https://live-durhamnc.opendata.arcgis.com/' },
      { claim: 'Durham County Government: Durham County History and About.', url: 'https://dconc.gov/PublicSite/About/Durham-County-History' },
      { claim: 'Wake County Government: Libraries locations and STEAM Lab news release, October 16, 2026.', url: 'https://www.wake.gov/news/wake-county-public-libraries-launches-new-steam-labs-support-student-success' },
      { claim: 'Raleigh-Durham International Airport: nonstop destinations and new runway length.', url: 'https://www.rdu.com/' },
      { claim: 'IANA tzdb northamerica: America/New_York and the US DST rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'City of Durham and City of Raleigh web pages: 403 on 18 October 2026, not retried; no facts taken from them.',
      'Durham County Library pages: 406, not used.',
      'The Raleigh Greenway Trails dataset: used by the North Carolina page, deliberately not reused here.',
      'Tree benefit dollar values (replacevalue_dol and similar columns): money figures, not used.',
      'Street addresses and county manager names: not printed.',
      'Any affiliation with the City or County of Durham, the City of Raleigh, Wake County or Raleigh-Durham International Airport.'
    ]
  }
};
