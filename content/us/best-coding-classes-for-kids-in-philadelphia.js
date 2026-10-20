'use strict';
// Philadelphia (cg- metro page, US cluster Phase 5, row 126). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: a Philadelphia parent choosing a coding class for a child: what to watch for in the first month, a project on
// the city's Percent for Art open data (binning years into decades, with blank dates), Pennsylvania's rules in one
// paragraph, and Eastern Time. Sources read raw on 18 October 2026 (copies in
// keyword-research-2026-09/us/src/best-coding-classes-for-kids-in-philadelphia/):
//  - OpenDataPhilly, "Percent for Art Locations" (City of Philadelphia, Department of Planning and Development):
//    "Locations and basic information on public art that is part of the Percent for Art program. Updated as needed.";
//    "Created July 2, 2020"; licence "City of Philadelphia License"; terms: the data "is provided 'as is' and without
//    Warranty of any kind". CSV from the city's Carto SQL API (percent_for_art_public).
//  - Our counts from that CSV, 18 October 2026 (ours, not official): 239 records; status Active 224, Inaccessible 10,
//    In Progress 5; date_ blank on 17 records; dated years 1927 to 2020; by decade 1920s 1, 1950s 2, 1960s 38, 1970s 82,
//    1980s 54, 1990s 20, 2000s 8, 2010s 13, 2020s 4; two dated works before 1959 (1927, 1953); neighborhood prefix
//    "Center City" 90, "University City" 33. Artist names, titles and site names are not printed.
//  - Creative Philadelphia (the City's office of arts and culture; phila.gov points to it as its separate website),
//    Percent for Art page: "The City's Percent for Art Ordinance requires new City construction or major renovation
//    projects to include site-specific public art"; sites "including libraries, recreation buildings, and fire
//    stations"; "The ground-breaking Percent for Art model was pioneered in Philadelphia in 1959". A second
//    creativephl.org URL returned 429 and was not retried.
//  - PDE, Graduation Requirements: "Effective with the graduating class of 2023, Pennsylvania high school students have
//    the option to demonstrate their postsecondary preparedness and meet statewide requirements through one of five
//    Pathways to Graduation."; Keystone Exams "(end-of-course assessments in Algebra I, Literature, and Biology)". No
//    computer science course is among the statewide requirements.
//  - 22 Pa. Code 4.12: "Effective July 1, 2025 : Pennsylvania Technology and Engineering Standards (Grades 6-12)" and the
//    integrated science, environment, ecology, technology and engineering standards for grades K to 5.
//  - Code.org (2025), 2025 State of AI + CS Education, Most Recent Access Data: PA 2023-2024, 530 of 684 high schools,
//    source "State Education Agency". Access tab only.
//  - IANA tzdb: America/New_York; Rule US 2007 max Mar Sun>=8, Nov Sun>=1: November 1, 2026 and March 14, 2027.
// Lesson family: binning dates into decades, and deciding what to do with blank values.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'PHILADELPHIA', label: 'Philadelphia', blurb: 'Coding classes for Philadelphia kids, with a public art data project built on the city&rsquo;s Percent for Art records.' },
  market: US,
  slug: 'best-coding-classes-for-kids-in-philadelphia',
  code: 'bkp',
  accent: '#944B56',
  accentRationale: 'Philadelphia: #944B56, the allocated dusty brick rose, warm like old Philadelphia rowhouse brick, distinct from the New York burgundy and readable on every paper',
  pageType: 'city',
  place: {
    name: 'Philadelphia',
    eyebrow: 'Philadelphia, Pennsylvania',
    schemaType: 'City',
    chain: [
      { type: 'State', name: 'Pennsylvania' },
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Philadelphia',
  title: 'Best Coding Classes for Kids in Philadelphia | Live Online',
  description: 'Choosing the best coding class for a Philadelphia child: what a good first month looks like, a Percent for Art data project, and live online classes on Eastern Time.',
  ogDescription: 'What to look for in a coding class for a Philadelphia kid, a project on 239 public artworks from the city&rsquo;s open data, and live online lessons with a real teacher.',
  twitterDescription: 'Coding classes for Philadelphia kids, live online, with a city public art data project.',
  ogImageCourse: 'scratch-programming-complete-course',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Philadelphia Kids',
    description: 'Block coding, Scratch games, Minecraft and first Python for Philadelphia children from first grade to eighth grade, taught live online in small level-matched batches or one to one.'
  },

  h1: 'Finding the best coding class for a Philadelphia kid',
  capsuleQ: 'How do I find the best coding class for my child in Philadelphia?',
  capsule: 'Look for a live teacher, a placement by level rather than age, and a finished project within the first few weeks. Modern Age Coders teaches Philadelphia children aged 6 and up live online, from block coding and Scratch to Minecraft and Python, in batches of fifteen to twenty or one to one. The first lesson is free, and nobody has to cross the Schuylkill to get there.',
  lead: 'Philadelphia has a long habit of putting creative work where everyone can see it: since 1959 the city has built public art into its own construction projects, and the records of that art are open data. We use them below because a good coding class for a child should end the same way, with something made, shown and explained. First, though, the practical part: how to tell within a month whether a class is working, what Pennsylvania asks of schools, and how our live lessons fit a Philadelphia week.',
  wa: 'Hello Modern Age Coders, my child lives in Philadelphia and I would like to book a free coding class.',

  picks: {
    eyebrow: 'Good first courses',
    h2: 'Where Philadelphia children tend to begin',
    intro: 'These four cover most first lessons. The placement class confirms the fit before anything is paid.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Grades 1 to 3', note: 'Puzzles, animations and tiny games in blocks, with the teacher narrating each step out loud.' },
      { course: 'minecraft-coding-for-kids-course', band: 'Grades 2 to 5', note: 'For Minecraft fans: building with code instead of by hand, from blocks toward real programming.' },
      { course: 'scratch-programming-complete-course', band: 'Grades 3 to 6', note: 'A full Scratch course ending in games another child can actually play and score.' },
      { course: 'python-ai-kids-masterclass', band: 'Grades 5 to 8', note: 'First typed code in Python, with drawings, games and the decade project on this page.' }
    ]
  },

  sections: [
    {
      id: 'month', tint: '', eyebrow: 'The first month',
      h2: 'Four signs, after four weeks, that a coding class is right',
      intro: 'Brochures look alike. The first month does not. These are the things we would want a Philadelphia parent to notice, in our class or anyone else&rsquo;s.',
      body: [
        { kind: 'table', caption: 'What to notice in the first month of a kids coding class (our own checklist)', head: ['By week', 'A good sign', 'A warning sign'], rows: [
          ['Week 1', 'Your child explains what they made, in their own words', 'They can only say it was fun'],
          ['Week 2', 'They hit a bug and the teacher asks a question about it', 'The teacher fixes it for them'],
          ['Week 3', 'They change the project to make it their own', 'Every child&rsquo;s project looks identical'],
          ['Week 4', 'They show a finished piece to someone at home', 'There is nothing finished to show']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Ask to see the work', p: 'Ask your child to open last week&rsquo;s project and walk you through it. Five minutes at the kitchen table tells you more than a progress report.' },
          { h3: 'Listen for &ldquo;because&rdquo;', p: 'A child who says the cat moves because the loop repeats ten times is learning to reason. A child who says it moves because the teacher said so is copying.' },
          { h3: 'Expect some frustration', p: 'A class where nothing ever goes wrong is too easy. A little struggle, followed by a fix the child found, is the point.' }
        ] },
        { kind: 'p', text: 'Nobody publishes a verified ranking of kids coding classes in Philadelphia, and we would distrust one that did. The signs in this table work for any option your family is weighing, from a club at the neighborhood rec center to a paid course like ours.' }
      ]
    },
    {
      id: 'art', tint: 'deep', eyebrow: 'Signature project',
      h2: 'When did Philadelphia build most of its public art? A decade-by-decade project',
      intro: 'The City publishes its Percent for Art Locations as open data on OpenDataPhilly. Students sort 239 artworks into decades in Python, then decide what to do with the ones that have no date.',
      body: [
        { kind: 'table', caption: 'Percent for Art records by decade of the date_ field (our count from the City&rsquo;s CSV, downloaded 18 October 2026)', head: ['Decade', 'Artworks'], rows: [
          ['1920s', '1'],
          ['1950s', '2'],
          ['1960s', '38'],
          ['1970s', '82'],
          ['1980s', '54'],
          ['1990s', '20'],
          ['2000s', '8'],
          ['2010s', '13'],
          ['2020s', '4'],
          ['No date given', '17']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Read the file', p: 'The download held 239 records. Each has a status, a date_, a medium and a neighborhood. Students print the first few rows and describe each column before writing any other code.' },
          { h3: 'Make the bins', p: 'Integer division turns a year into its decade: 1976 // 10 * 10 gives 1970. A loop over the rows fills a dictionary, and the 1970s come out on top with 82 works.' },
          { h3: 'Face the blanks', p: 'Seventeen records have an empty date. Dropping them silently would change the totals without anyone noticing, so students keep them as their own row and say so.' }
        ] },
        { kind: 'p', text: 'Some context first. According to Creative Philadelphia, the City&rsquo;s office for arts and culture, the Percent for Art Ordinance requires new City construction or major renovation projects to include site-specific public art, so the works sit at places like libraries, recreation buildings and fire stations. That explains the shape of the table: the counts rise and fall with how much the City was building.' },
        { kind: 'p', text: 'Then comes the puzzle we like most. Creative Philadelphia says the Percent for Art model was pioneered in Philadelphia in 1959, yet the dataset holds two dated works from before that year, one from 1927 and one from 1953. Is the file wrong? Not necessarily. The date_ column might record when a work was made rather than when the program acquired or placed it. Students write down the possible explanations and what evidence would settle each one, instead of picking the convenient answer.' },
        { kind: 'p', text: 'Two more questions keep a strong student busy. The status column splits into Active 224, Inaccessible 10 and In Progress 5; should an artwork that cannot be visited count in a map of public art? And the neighborhood column starts with an area name, with Center City on 90 records and University City on 33. Counting by that prefix shows where the program has concentrated, which leads to a fair question about why.' },
        { kind: 'callout', h3: 'Whose numbers these are', p: 'All counts in this section are ours, from one download on 18 October 2026. The City of Philadelphia provides the dataset as is and without warranty, and describes it as updated as needed, so a later download may differ. We do not print artist names or site names; students work with counts.' }
      ]
    },
    {
      id: 'pa', tint: 'tint', eyebrow: 'Pennsylvania rules',
      h2: 'What Pennsylvania requires, briefly',
      intro: 'From the Pennsylvania Department of Education (PDE) and the Pennsylvania Code, read on 18 October 2026.',
      body: [
        { kind: 'p', text: 'Pennsylvania does not list a computer science course among its statewide graduation requirements. Since the graduating class of 2023, students meet those requirements through one of five Pathways to Graduation built around the Keystone Exams in Algebra I, Literature and Biology. Computing appears instead in the academic standards: from July 1, 2025, Chapter 4 of the state code brings in integrated science, environment, ecology, technology and engineering standards for kindergarten to fifth grade, and Pennsylvania Technology and Engineering Standards for grades 6 to 12. For an elementary child in Philadelphia, that means coding at school depends on how each school teaches those standards.' },
        { kind: 'p', text: 'Access is fairly wide by national standards: for 2023 to 2024, Code.org (2025). 2025 State of AI + CS Education reports 530 of 684 Pennsylvania high schools offering computer science, with the State Education Agency as its source. That figure is about high school. The earlier years are where an outside class does the most, because a child who starts at seven arrives at high school already fluent.' }
      ]
    },
    {
      id: 'hours', tint: '', eyebrow: 'Class times',
      h2: 'Philadelphia is on Eastern Time, and so are our class times',
      intro: 'Teachers work from India; families only ever see times in Eastern Time.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Choose your rhythm', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'How far ahead India is', p: 'From March to November, India is nine and a half hours ahead of Philadelphia. Through the winter months the difference is ten and a half hours.' },
          { h3: 'The clock changes', p: 'Eastern Time switches back on November 1, 2026 and forward again on March 14, 2027. Families get a reminder of their class time the week before each switch.' }
        ] },
        { kind: 'spec', title: 'A date bug worth meeting early', p: 'Philadelphia falls under America/New_York in the IANA time zone database. Children who later code their own timers discover that adding a fixed number of hours goes wrong twice a year, a lesson that lands better after living through the change.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'A path from first grade blocks to middle school Python',
    intro: 'Grades are a rough guide. The teacher moves a child on when the projects show they are ready.',
    cols: [
      { band: 'Grades 1 to 2', h3: 'First programs', p: 'Order, repetition and cause and effect, taught with blocks, stories and lots of trying again.', courses: ['kids-coding-blocks-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Grades 3 to 4', h3: 'Games with rules', p: 'Scratch and Minecraft projects with scores, timers and levels a friend can test.', courses: ['scratch-programming-complete-course', 'minecraft-coding-for-kids-course'] },
      { band: 'Grades 5 to 6', h3: 'Into Python', p: 'Typed code, turtle art and the decade project, with mistakes read and fixed by the child.', courses: ['python-ai-kids-masterclass', 'game-development-masterclass-for-kids'] },
      { band: 'Grades 7 to 8', h3: 'Projects that matter', p: 'Web pages, AI literacy and longer data work that prepares a student for high school computing.', courses: ['kids-ai-web-development-course', 'ai-literacy-for-kids-course'] }
    ]
  },

  ai: {
    eyebrow: 'Growing up with AI',
    h2: 'Does a Philadelphia child still need to code if AI can?',
    intro: 'Young children learn most from doing the thinking themselves, and the art project shows what that looks like.',
    p1: 'An AI tool can sort 239 records by decade in a blink. It will not, unless asked, notice that seventeen of them have no date, or that two works predate the program that supposedly commissioned them. Those noticings are what the project teaches, and they come from a child who built the loop and looked at what came out.',
    p2: 'So our younger classes keep AI tools out of the way. Children learn to make, test and question their own programs first. Later, when they are old enough to use AI tools under the providers&rsquo; own age rules, they use them as a second opinion they can check, not an answer they must trust.',
    closer: 'Coding at seven is less about a job at twenty-five than about learning, early, that a computer does exactly what it is told.',
    blogAnchor: 'whether coding is still worth learning'
  },

  delivery: {
    eyebrow: 'The practical side',
    h2: 'From Fishtown to Chestnut Hill, the same live class',
    intro: 'Nobody drives across the city at rush hour. The class comes to the laptop.',
    cells: [
      { h3: 'Home is the classroom', p: 'A child in Fishtown and another in Chestnut Hill can share a batch, each at their own desk, with no pickup to arrange.' },
      { h3: 'Shared screens', p: 'The teacher sees each child&rsquo;s project live and can point at the exact block or line that needs another look.' },
      { h3: 'A free first lesson', p: 'A real coding task, a short chat with the parent, and a recommendation. Card details are never requested at this step.' },
      { h3: 'Small, level-matched batches', p: 'Fifteen to twenty children working at the same stage, from Philadelphia and around the United States.' },
      { h3: 'One-to-one if preferred', p: 'One teacher, one child, at hours the family picks, for children who want to go faster or need a calmer pace.' },
      { h3: 'US school calendar', p: 'Lessons use US grade levels and work around school holidays, snow days included.' }
    ],
    spec: { title: 'No local center', p: 'Modern Age Coders has no classroom in Philadelphia, and none is claimed. Teaching is live and online from India; a child needs a computer, a headset and reliable internet.' }
  },

  fees: {
    h2: 'Fees for Philadelphia families',
    intro: 'One free lesson, then a choice of two monthly options.',
    first: 'A complete first lesson with a teacher, at no charge, ending in a recommended course and time.',
    group: 'A month of live classes in a batch of fifteen to twenty children at one level.',
    private: 'A month of classes with a teacher working with your child alone.',
    closer: 'Fees are charged in US dollars, and every US family pays the same. Billing begins only after the free lesson, when the course and time are agreed; the pricing page explains breaks and missed classes.'
  },

  reviewsH2: 'Google reviews from families we teach',

  book: {
    h2: 'Book a free class for a Philadelphia child',
    intro: 'Tell us your child&rsquo;s grade and interests. A first grader starts with a block puzzle; a sixth grader might sort the city&rsquo;s artworks into decades.',
    success: 'Thank you. The team will contact you shortly to arrange a free class for your child in Philadelphia.'
  },

  faq: {
    h2: 'Philadelphia parents&rsquo; questions',
    intro: 'Plain answers to what Philadelphia families ask before the first lesson.',
    items: [
      { q: 'What age can my child start coding?', a: 'Six is a comfortable start with blocks and a live teacher. Typed languages such as Python usually follow around ten to twelve.' },
      { q: 'Is there a Modern Age Coders classroom in Philadelphia?', a: 'No. All lessons are live online, so a child joins from home anywhere in the city.' },
      { q: 'When are the classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience. Times are always confirmed in Eastern Time.' },
      { q: 'How will I know if the class is working?', a: 'Within four weeks your child should be able to show a finished project and explain how it works in their own words.' },
      { q: 'Does Pennsylvania require computer science to graduate?', a: 'No computer science course is among the statewide requirements. Students graduate through one of five Pathways to Graduation built around the Keystone Exams.' },
      { q: 'What is the Percent for Art project?', a: 'Students download the City of Philadelphia Percent for Art Locations data, sort the artworks into decades in Python, and decide how to report the records with no date.' },
      { q: 'Can my child join if they have never coded?', a: 'Yes. Most children start from zero. The free lesson finds the right level, whether that is blocks or typed code.' },
      { q: 'How many children are in a batch?', a: 'Fifteen to twenty at the same stage. Families who prefer a teacher to themselves can choose one-to-one lessons.' },
      { q: 'What does my child need at home?', a: 'A laptop or desktop computer, a headset or working speakers and microphone, and a steady internet connection. Tablets are not ideal.' },
      { q: 'Are you part of the City of Philadelphia or the school district?', a: 'No. We use data the City publishes and we know the state standards, but we are not connected with the City, Creative Philadelphia, PDE or any school.' }
    ]
  },

  next: {
    eyebrow: 'Read on',
    h2: 'More for Philadelphia and US families',
    html: 'Children who love games can read <a class="cg-inline-link" href="/how-to-make-a-roblox-game">how to make a Roblox game</a> or see <a class="cg-inline-link" href="/minecraft-coding-classes-for-kids">Minecraft coding classes for kids</a>. For families looking at the whole country, start at the <a class="cg-inline-link" href="/coding-classes-in-united-states">United States page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Philadelphia and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding' },
    { href: '/how-to-make-a-roblox-game', label: 'Make a Roblox game' }
  ],

  personalityCss: `
.cg-root.cg-bkp .cg-hero h1 { font-weight: 720; letter-spacing: -0.018em; line-height: 1.08; max-width: 20ch; }
.cg-root.cg-bkp .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-bkp .cg-eyebrow { letter-spacing: 0.09em; font-size: 0.82rem; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bkp .cg-section-head h2 { max-width: 28ch; }
.cg-root.cg-bkp .cg-table caption { text-align: left; font-style: italic; }
.cg-root.cg-bkp .cg-table td { font-variant-numeric: tabular-nums; padding-top: 0.45rem; padding-bottom: 0.45rem; }
.cg-root.cg-bkp .cg-grid-3 { gap: clamp(0.8rem, 2vw, 1.5rem); }
.cg-root.cg-bkp .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-bkp .cg-spec-title { font-weight: 800; letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'Pennsylvania, read raw on 18 October 2026: PDE Graduation Requirements (class of 2023 onward, five Pathways to Graduation, Keystone Exams in Algebra I, Literature and Biology; no CS course in statewide requirements); 22 Pa. Code 4.12 (Technology and Engineering Standards, grades 6 to 12, and integrated K to 5 standards, effective July 1, 2025). Code.org (2025) Most Recent Access Data: PA 2023-2024, 530 of 684 high schools, State Education Agency. IANA America/New_York and the US DST rule.',
    localProject: 'City of Philadelphia, Percent for Art Locations (OpenDataPhilly, Department of Planning and Development, City of Philadelphia License, as is), CSV from the Carto SQL API downloaded 18 October 2026: 239 records; Active 224, Inaccessible 10, In Progress 5; 17 blank dates; dated 1927 to 2020; decades 1960s 38, 1970s 82, 1980s 54; two dated works before 1959; Center City 90, University City 33. Creative Philadelphia: model pioneered in Philadelphia in 1959; ordinance covers new City construction or major renovation; sites include libraries, recreation buildings and fire stations. Counts ours. Lesson family: binning dates into decades and handling blank values.',
    requiredMentions: [
      'pioneered in Philadelphia in 1959',
      'Percent for Art Locations',
      '239 records',
      'Active 224, Inaccessible 10 and In Progress 5',
      'Seventeen records have an empty date',
      'one from 1927 and one from 1953',
      'Center City on 90 records',
      'the 1970s come out on top with 82 works',
      'libraries, recreation buildings and fire stations',
      'University City on 33',
    ],
    sources: [
      { claim: 'OpenDataPhilly: Percent for Art Locations, description, created date, licence and terms.', url: 'https://opendataphilly.org/datasets/percent-for-art-locations/' },
      { claim: 'City of Philadelphia Carto SQL API: percent_for_art_public CSV used for our counts.', url: 'https://phl.carto.com/api/v2/sql?filename=percent_for_art_public&format=csv&q=SELECT%20*%20FROM%20percent_for_art_public' },
      { claim: 'Creative Philadelphia: Percent for Art ordinance, sites, pioneered in 1959.', url: 'https://creativephl.org/percent-for-art/' },
      { claim: 'PDE: Graduation Requirements, Pathways to Graduation and Keystone Exams.', url: 'https://www.pa.gov/agencies/education/programs-and-services/instruction/elementary-and-secondary-education/assessment-and-accountability/graduation-requirements' },
      { claim: '22 Pa. Code 4.12: academic standards effective July 1, 2025.', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/022/chapter4/s4.12.html' },
      { claim: 'Code.org (2025), State of AI + CS Education data: PA high school access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'IANA tzdb: America/New_York and the US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Percent for Art budget share: the ordinance wording on money is not used; the page describes only what the ordinance covers.',
      'Artist names, artwork titles and site names, including any school sites in the dataset: not printed; counts only.',
      'Why two works predate 1959: not known; the page lists possible explanations and does not assert one.',
      'Spelling variants inside the neighborhood and medium columns: noticed, not used as figures.',
      'A second creativephl.org page returned 429 and was not retried.',
      'Any ranking of Philadelphia coding classes: none verified, none claimed.',
      'Any affiliation with the City of Philadelphia, Creative Philadelphia, PDE or Code.org.'
    ]
  }
};
