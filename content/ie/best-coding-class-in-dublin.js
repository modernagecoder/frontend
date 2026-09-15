'use strict';
// Dublin (cg- city page, Ireland cluster, Phase 1; hub for the Dublin area pages).
// Spine: Dublin Bikes, and readings that repeat themselves. Dublin City Council
// publishes Dublin Bikes station history through Smart Dublin (CC BY). In the
// January to March 2019 file we counted 2,912,994 rows for 114 stations on a
// five-minute TIME grid, of which 1,094,127 (about 38 percent) repeat the
// station's previous LAST UPDATED value: the file was written every five
// minutes, the stations did not report every five minutes. Station 34 is
// PORTOBELLO HARBOUR in 2019 and LENNOX STREET in 2026 (about 114 m apart,
// capacity 30 to 40). Place facts read at primary sources on 16 September 2026:
// CSO Census 2022 tables and press statements, eircode.ie, TII, TFI, Irish
// Rail, gov.ie (the 2018 LCCS first-phase list), Google and Airbnb legal pages.
// Owned by the Dun Laoghaire-Rathdown page and NOT used here: its 4,958 Indian
// citizens and its census figures.

module.exports = {
  clusterName: 'Ireland',
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-dublin',
  code: 'dub',
  accent: '#8F3736',
  accentRationale: 'Dublin: a red-brick terrace red from the solver, clear of both Irish greens and of every other Ireland preview page',
  pageType: 'city',
  place: {
    name: 'Dublin',
    eyebrow: 'Dublin, Leinster',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Dublin' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-ireland', name: 'Ireland' }],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Dublin, Ireland',
  title: 'Best Coding Classes in Dublin | Modern Age Coders',
  description: 'Live online coding, Python, AI and data classes for Dublin families, from Swords to Tallaght, ages 6 to 67, taught by a teacher at a fixed hour. First lesson free.',
  ogDescription: 'Coding, Python and AI classes for Dublin, on a page about Dublin Bikes data, a timestamp that repeats itself, and why a chart is only as fresh as its readings.',
  twitterDescription: 'Dublin coding classes for ages 6 to 67, live online, with the first lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Dublin Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Dublin, taught live in English.'
  },

  h1: 'Coding classes in Dublin',
  capsuleQ: 'What are the best coding classes in Dublin?',
  capsule: 'The best coding class for a Dublin family is one that fits the city as it is: 1,263,219 people in the city and suburbs at the 2022 census, a place where 41 percent of workers worked from home at least one day a week, and where Indian citizens, 10,308 of them in Dublin City, are the second-largest group of non-Irish residents after Brazilians. Dublin is also the only place in Ireland where an Eircode still says which district you live in: the old postal districts, numbered 1 to 24 plus 6W, live on in the routing key, so Dublin 15 becomes D15. Modern Age Coders teaches live online from India, so a learner in Swords, Tallaght or Dublin 8 joins the same class from home, for ages 6 to 67, in groups of five to ten or one to one. A first lesson costs nothing; after that a group place is USD 100 a month and one-to-one teaching USD 150.',
  lead: 'Dublin publishes the state of its bike-share every few minutes, and anyone can download years of it. The files look simple: a station, a time, how many bikes, how many free stands. Open one and a pattern appears. In the first three months of 2019 the file holds 2,912,994 rows for 114 stations, a reading every five minutes. But 1,094,127 of those rows, about 38 percent, repeat the station\'s previous last-updated time. The file was written every five minutes; the stations did not report every five minutes. A chart of bikes available drawn from every row shows a city that looks calmer and more certain than it was, because more than a third of its points are copies of an older reading. That gap between when data is collected and when it was last true sits under dashboards, sensors, apps and AI tools everywhere, and it is the thread of this page.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Dublin.',

  picks: {
    eyebrow: 'Course picks for Dublin',
    h2: 'Four courses for a city of 1,263,219',
    intro: 'A child in Ballymun who wants to build a game, a teenager in Rathmines starting Transition Year, a student in Clontarf who likes numbers, and an adult in Swords who works from home part of the week. Each one begins with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A bike-station game in Scratch, where a child learns that a sign saying five bikes is only true until someone takes one.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python for Junior Cycle and Transition Year learners, read before it is written, with real Dublin data as the practice ground.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Loading a Dublin Bikes file, finding the repeated readings and measuring how much they change the answer.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Scripts that fetch, clean and check data before a report or an AI summary relies on it, for Dublin\'s many hybrid workers.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Dublin today',
      h2: 'A city of 1,263,219, and the only Irish place where the postcode names the district',
      intro: 'Census 2022 counted Dublin three ways: the built-up city and suburbs, which the statistics office labels as reaching into County Meath; the whole county; and the city council area alone. The three numbers answer different questions, so this page keeps them apart.',
      body: [
        { kind: 'table', caption: 'Dublin in Census 2022, Central Statistics Office', head: ['Measure', 'Figure', 'What it covers'], rows: [
          ['Dublin city and suburbs', '1,263,219', 'The built-up city, which crosses into County Meath'],
          ['County Dublin', '1,458,154', 'All four council areas, up 8 percent, or 110,795 people, on 2016'],
          ['Dublin City Council area', '592,713', 'The city council alone: 291,796 men and 300,917 women'],
          ['People per square kilometre, city and suburbs', '3,659', 'And 25 of the 32 electoral divisions above 10,000 per square kilometre are in Dublin'],
          ['Average age, city and suburbs', '38.2', 'With 17.7 percent of people aged under 15'],
          ['Children aged 15 and under, county', '268,943', '31 percent of them in childcare, against 33 percent nationally']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The postcode that remembers', p: 'Eircodes are not tied to a county or city anywhere in Ireland except Dublin, where the postal districts numbered 1 to 24, plus 6W, are kept in the routing key. So a Dublin family\'s postcode still says which part of the city they live in.' },
          { h3: 'A city that works from home', p: 'In 2022, 284,885 people in Dublin worked from home at least one day a week, 41 percent of the workforce against 32 percent nationally. For a parent home by five, a live lesson at a fixed hour is easy to fit.' },
          { h3: 'Degrees on every street', p: 'Almost 480,000 people in Dublin held a third-level qualification in 2022, more than 193,000 of them in Dublin City, and almost 16,000 held a PhD: 42 percent of all PhD holders in the country.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Computer Science in Dublin schools',
      h2: 'Fourteen of the first forty',
      intro: 'When Leaving Certificate Computer Science began, the Department of Education named 40 post-primary schools to start it in September 2018 and sit the first exam in 2020. Fourteen of them, by our count of the published list, were in County Dublin.',
      body: [
        { kind: 'table', caption: 'County Dublin schools in the first phase of Leaving Certificate Computer Science, January 2018 list', head: ['School', 'Where'], rows: [
          ['Adamstown Community College', 'Adamstown'],
          ['Coláiste Bríde', 'Clondalkin, Dublin 22'],
          ['Colaiste Phadraig', 'Lucan'],
          ['Coláiste Pobail Setanta', 'Phibblestown, Dublin 15'],
          ['Dominican College Sion Hill', 'Blackrock'],
          ['Le Chéile Secondary School', 'Tyrellstown, Dublin 15'],
          ['Loreto College', 'Swords'],
          ['Luttrellstown Community College', 'Blanchardstown, Dublin 15'],
          ['Mount Temple Comprehensive', 'Malahide Road, Dublin 3'],
          ['St Joseph\'s Secondary School', 'Rush'],
          ['St. Finian\'s Community College', 'Swords'],
          ['Stratford College', 'Rathgar, Dublin 6'],
          ['Synge St CBS', 'Dublin 8'],
          ['Terenure College', 'Dublin 6W']
        ] },
        { kind: 'p', text: 'This is the list from January 2018, not a list of where the subject is taught today; we found no current official list to put beside it. It shows something useful all the same. Computer Science arrived in Dublin schools recently, in some schools and not in others, and families whose school does not offer it look elsewhere for the same ground. Our classes do not replace the subject or its exam. They give a learner the programming, data and problem-solving practice the subject assumes, at an hour that fits around the school day.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Dublin Bikes, and the readings that repeat themselves',
      intro: 'Dublin City Council publishes the state of every Dublin Bikes station through Smart Dublin, under a Creative Commons licence, with years of history to download. Learners use it to find out how often data is less fresh than it looks.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Load a quarter', p: 'The file for January to March 2019 has eleven columns, from STATION ID and TIME to AVAILABLE BIKES and LAST UPDATED. The first job is to read it without assuming what each column means.' },
          { h3: '2. Compare two clocks', p: 'TIME ticks every five minutes because that is when the file was written. LAST UPDATED is when the station last reported. Learners count how often LAST UPDATED fails to move from one row to the next.' },
          { h3: '3. Measure the difference', p: 'Drop the repeated readings and redraw the chart. The question is not whether the city had bikes, but how many points on the first chart were copies.' }
        ] },
        { kind: 'table', caption: 'Our count from the published file, January to March 2019', head: ['Measure', 'Figure'], rows: [
          ['Rows in the file', '2,912,994'],
          ['Stations', '114'],
          ['Interval of the TIME column', '5 minutes'],
          ['Rows repeating the previous LAST UPDATED value', '1,094,127'],
          ['Share of rows that are repeats', 'about 38 percent']
        ] },
        { kind: 'callout', h3: 'Why AI does not make the problem go away', p: 'Ask an AI assistant to chart bike availability from this file and it will do it in seconds, cleanly labelled, and it will almost certainly plot every row. Nothing in the file announces that more than a third of the rows are repeats; you find out only by comparing two columns an assistant has no reason to compare. A learner who has counted the repeats knows to ask one question of any data feed: is this reading new, or a copy of the last one? That habit matters for traffic sensors, weather stations, fitness trackers and every dashboard built on them, and it is exactly the step a quick AI summary skips.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Fresh or stale',
      h2: 'Five habits for data that is older than it looks',
      intro: 'For city feeds, school projects, spreadsheets, sensors and anything an AI tool is asked to summarise. Taught from a bike-share file that writes a row whether or not anything happened.',
      body: [
        { kind: 'table', caption: 'Checking that a data feed is as fresh as it claims', head: ['Habit', 'In practice', 'What it avoids'], rows: [
          ['Find the real clock', 'Look for a last-updated or reported-at field, not only the row\'s timestamp', 'Counting copies as new readings'],
          ['Count the repeats', 'Measure how often a value and its reported time both stay the same', 'Charts that look calmer than the city was'],
          ['Check the gaps', 'List the intervals where no row was written at all', 'Averages taken over uneven coverage'],
          ['Follow the station', 'Check that an ID keeps the same name and place over the years', 'Two locations mixed under one number'],
          ['Say what the chart cannot', 'Write down what the data does not show before sharing it', 'Confident conclusions from thin data']
        ] },
        { kind: 'p', text: 'The fourth habit has a Dublin example of its own. In the published files, station 34 is called PORTOBELLO HARBOUR in 2019 and LENNOX STREET in 2026. By our reading of the coordinates the two sit about 114 metres apart, and the station grew from 30 stands to 40. A learner who averages station 34 across the years without noticing has averaged two places.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A Scratch game with a bike station whose sign must be updated every time a bike leaves, and a lesson in what happens when it is not.' },
          { h3: 'For teenagers', p: 'Python on a real Dublin Bikes quarter: find the repeats, measure them, and write one honest sentence about what the chart can claim.' },
          { h3: 'For adults', p: 'The data feeds already used at work, checked for stale readings before the next report, dashboard or AI summary is built on them.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with Dublin City Council, Smart Dublin, Transport for Ireland, Irish Rail, any employer named on this page or any school in the list above, and nothing here suggests one. Census figures are those the Central Statistics Office published for 2022. The Dublin Bikes figures are our own count from the Council\'s published files.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Getting around',
      h2: 'Two Luas lines, one DART line and a class that needs neither',
      intro: 'Dublin families plan their week around these lines. An online lesson only needs a desk.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The Luas', p: 'The Red Line runs 21 kilometres with 32 stops from Tallaght and Saggart to Connolly and The Point; the Green Line runs 22 kilometres with 35 operating stops from Brides Glen to Broombridge. Both opened in 2004, and passengers change between them at Abbey Street and Marlborough Street or O\'Connell GPO.' },
          { h3: 'The DART', p: 'The coastal line runs from Malahide or Howth in the north to Greystones in County Wicklow, and Irish Rail runs it every ten minutes through the day.' },
          { h3: 'The docklands', p: 'Google Ireland gives its address as Gordon House, Barrow Street, Dublin 4, and Airbnb Ireland as 25 North Wall Quay, Dublin 1: two ends of the docklands, on either side of the Liffey.' }
        ] },
        { kind: 'spec', title: 'The largest and the youngest', p: 'Swords is the largest town in County Dublin, with 40,776 people in April 2022, and Saggart the youngest, with an average age of 30.4 among towns of at least 500 people. Both are a Luas or bus ride from the city, and neither is further from a live lesson than Dublin 2.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a sign that must change to a feed that must be checked',
    intro: 'The free lesson sets the starting level by watching the learner at work on a real task. Age and school year are a guide, not the rule.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Signs that change', p: 'Children build games where a number on screen must be kept up to date, and see what happens when it is not.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'First real data', p: 'Learners read small tables in Python and ask when each value was recorded.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Feeds and repeats', p: 'Teenagers load city data, find stale readings and measure what they do to an answer.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Checks before reports', p: 'Adults build scripts that test a data feed before a dashboard or an AI summary depends on it.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will chart Dublin Bikes in seconds. Why should a teenager in Dublin 15 learn to question the chart?',
    intro: 'Because a chart is only as fresh as its readings, and nothing on the chart says how many of them are copies.',
    p1: 'An assistant given the 2019 file will produce a tidy line of bikes available across the day. It reads the TIME column, because that is the obvious one, and treats every row as a fresh observation. The line it draws is smooth partly because more than a third of its points are the same reading written down again. The tool has not failed; it answered the question it was given. The weakness is the question, and only someone who has opened the file and compared its two clocks knows to ask a better one.',
    p2: 'A learner who has done that once carries the habit into everything: a sensor that stops reporting but keeps being logged, a watch that repeats its last heart rate, a spreadsheet copied forward every term. Deciding which readings count, and saying plainly what a chart cannot show, stays a human job. The assistant can draw the line. Knowing whether the line is true is the programmer\'s part.',
    closer: 'So the case for a Dublin child learning to code in 2026 is not the companies on the docks. It is that people who can tell a fresh reading from a stale one will be needed wherever decisions rest on data, and in a city this full of dashboards, that means everywhere.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Swords to Tallaght, the same class at the same hour',
    intro: 'County Dublin runs from Balbriggan in the north to the foot of the Dublin Mountains, and an online lesson reaches every part of it at once, with no Luas change and no parking.',
    cells: [
      { h3: 'At the kitchen table', p: 'A learner in Saggart and a learner in Clontarf join the same group from home, and neither crosses the city to get there.' },
      { h3: 'Irish school words kept', p: 'First Year, Junior Cycle, Transition Year, Fifth and Sixth Year and the Leaving Cert keep their Irish names, while all teaching is in English.' },
      { h3: 'A free first lesson', p: 'A proper lesson on a real task. The teacher then suggests a level, a course and a regular hour, and asks for no card details.' },
      { h3: 'Groups across borders', p: 'Five to ten learners at one level, drawn from Dublin and other countries, so every stage has a group at a sensible hour.' },
      { h3: 'Around mid-term breaks', p: 'Two lessons a week, about eight a month, at a fixed time, with pauses for school holidays and exam weeks agreed with the family.' },
      { h3: 'Teaching from India', p: 'Irish time runs five and a half hours behind India time in winter and four and a half in summer, so late afternoons, evenings and weekend mornings in Dublin all work.' }
    ],
    spec: { title: '268,943 children and one group online', p: 'A coding group needs five learners who match on level, subject and hour. Among the 268,943 children aged 15 and under in County Dublin that sounds easy, and is surprisingly hard at seven on a Tuesday, which is why groups draw on learners aged 6 to 67 in many countries.' }
  },

  fees: {
    h2: 'What classes cost in Dublin',
    intro: 'Three prices, and nothing hidden behind them.',
    first: 'One lesson on a real problem, ending in a placement and a course suggestion.',
    group: 'A month of lessons, usually eight, with five to ten learners at the same level.',
    private: 'A month of lessons, usually eight, with one teacher for one learner.',
    closer: 'Dublin families pay in US dollars at the rate used for every country outside India, with no separate euro price list and no difference between Balbriggan and Ballsbridge. Payment starts only once the free lesson has settled a course and a weekly hour. The pricing page explains pauses, format changes and missed lessons.'
  },

  reviewsH2: 'Six Google reviews, reproduced as written',

  book: {
    h2: 'Where is the learner starting from?',
    intro: 'The first task might be a Scratch game about a bike station, a first Python script that reads a table, or a hunt for repeated readings in a real Dublin file.',
    success: 'Thank you. Your Dublin class request is on its way to the team.'
  },

  faq: {
    h2: 'Dublin coding class questions',
    intro: 'The city, its figures, its schools and the lessons.',
    items: [
      { q: 'How many people live in Dublin?', a: 'Census 2022 counted 1,263,219 people in Dublin city and suburbs, 1,458,154 in County Dublin and 592,713 in the Dublin City Council area. The three figures cover different areas, which is why they differ.' },
      { q: 'Why does a Dublin Eircode start with a district number?', a: 'Because Dublin is the exception. Eircodes are not linked to a county or city anywhere else in Ireland, but in Dublin the postal districts 1 to 24 and 6W are kept in the routing key, so Dublin 15 becomes D15.' },
      { q: 'Which Dublin schools first offered Leaving Certificate Computer Science?', a: 'Fourteen of the 40 schools named in January 2018 for the first phase were in County Dublin, from Synge St CBS in Dublin 8 to St. Finian\'s Community College in Swords. The list shows where the subject started, not every school that offers it now.' },
      { q: 'What is the Dublin Bikes project?', a: 'Learners download a quarter of Dublin Bikes station data published by Dublin City Council, compare the TIME and LAST UPDATED columns, and find that about 38 percent of the rows for January to March 2019 repeat an earlier reading. Then they measure how much that changes a chart.' },
      { q: 'What time are lessons for Dublin learners?', a: 'The hour is fixed in the free lesson. Irish time is five and a half hours behind India time in winter and four and a half in summer, so late afternoons, evenings and weekend mornings in Dublin all suit the teachers.' },
      { q: 'Do classes fit around the Junior Cycle and the Leaving Cert?', a: 'Yes. Families agree pauses for exam weeks and school holidays, and the course is chosen around the school year, including Transition Year, when many learners want a longer project.' },
      { q: 'Is Dún Laoghaire-Rathdown covered here?', a: 'Yes, on a page of its own for the council area south of the city, from Blackrock and Dundrum to Dalkey and Shankill, linked at the end of this page.' },
      { q: 'Is there a Modern Age Coders classroom in Dublin?', a: 'No. All teaching is live and online, and no Dublin premises or Irish office is claimed anywhere. A learner needs a laptop or desktop, working audio and a steady connection, and the phone number on this page is Indian and described as such.', boiler: true },
      { q: 'What do Dublin coding classes cost?', a: 'Nothing for the first lesson. After that, a group place costs USD 100 a month for two live lessons a week, around eight in a month, in a group of five to ten, and one-to-one teaching costs USD 150 a month on the same rhythm. Course, format and weekly hour are settled before any payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Between five and ten, matched by level, pace and goal rather than by age or postcode. If no group at the right level is running at a workable hour, one-to-one lessons are the alternative.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'South along the DART, and back to the national page',
    html: 'South of the city, <a class="cg-inline-link" href="/coding-classes-in-dun-laoghaire-rathdown">Dún Laoghaire-Rathdown</a> has its own page. For AI and machine learning built from the ground up there is <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-ireland">AI and machine learning classes in Ireland</a>; for what best should mean in an online class, <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>; and the whole country is on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Dublin and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-dun-laoghaire-rathdown', label: 'Dún Laoghaire-Rathdown' },
    { href: '/best-online-coding-classes-ireland', label: 'Best online classes, Ireland' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-dub .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3vw, 2.5rem); }
.cg-root.cg-dub .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.05; }
.cg-root.cg-dub .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-dub .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-dub .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-dub .cg-grid-3 { gap: clamp(1rem, 2.4vw, 1.9rem); }
.cg-root.cg-dub .cg-table caption { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-dub .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dub .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-dub .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-dub .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Dublin, Census 2022 (CSO): city and suburbs 1,263,219 (table F1015, labelled Counties Dublin and Meath), average age 38.2, 17.7 percent under 15; Dublin City Council area 592,713 (F1004A; 291,796 male, 300,917 female); County Dublin 1,458,154, up 8 percent or 110,795 on 2016 (press statement, summary results Dublin, 30 May 2023); density 3,659 per square kilometre in the city and suburbs, and 25 of the 32 electoral divisions above 10,000 per square kilometre in Dublin (Profile 1); non-Irish citizens 17 percent of Dublin, and in Dublin City Brazilian citizens 11,188 then Indian citizens 10,308 (Profile 5 Dublin, 26 October 2023); almost 480,000 with a third-level qualification, more than 193,000 in Dublin City, almost 16,000 PhDs, 42 percent of the national total (Profile 8 Dublin); Swords the largest town at 40,776 and Saggart the youngest at 30.4 among towns of 500 or more (Profile 1 Dublin); 284,885 or 41 percent worked from home at least a day a week against 32 percent nationally; 268,943 children aged 15 and under, 82,484 or 31 percent in childcare against 33 percent nationally. Eircode: postal districts 1 to 24 and 6W retained in the routing key as D01 to D24; Eircodes not linked to a county or city except Dublin. Luas (TII): Red Line 21 km, 32 stops, Tallaght to The Point with Saggart and Connolly; Green Line 22 km, 35 operating stops, Brides Glen to Broombridge; both opened 2004. TFI: interchange Abbey Street to Marlborough Street or O\'Connell GPO. Irish Rail: DART from Malahide or Howth to Greystones, every 10 minutes all day. Google Ireland at Gordon House, Barrow Street, Dublin 4; Airbnb Ireland at 25 North Wall Quay, Dublin 1. Department of Education, 4 January 2018: 40 schools start LCCS in September 2018, first exam 2020; 14 in County Dublin by count of the published table. Smart Dublin: Dublin Bikes history, Dublin City Council, CC BY, quarterly files Jul 2018 to Dec 2021 and monthly files from Oct 2021.',
    localProject: 'Stale readings in a live feed. The Dublin Bikes quarterly file for January to March 2019 has 2,912,994 rows for 114 stations on a five-minute TIME grid; 1,094,127 rows, about 38 percent, repeat the station\'s previous LAST UPDATED value, because TIME records when the file was written and LAST UPDATED when the station reported. Charting every row treats copies as fresh observations and makes the city look steadier than it was. Secondary habit, station identity: station 34 is PORTOBELLO HARBOUR in 2019 and LENNOX STREET in 2026, about 114 metres apart, capacity 30 then 40. For AI, an assistant plots every row because nothing in the file flags repeats; the habit is to ask whether each reading is new. Chosen after a case-sensitive check of every dossier and Netherlands module found no page using stale, LAST UPDATED, sampling interval, repeated reading or Dublin Bikes.',
    requiredMentions: [
      '1,263,219',
      '592,713',
      '1,458,154',
      '3,659',
      '10,308',
      '284,885',
      '268,943',
      '2,912,994',
      '1,094,127',
      'Gordon House',
      'Brides Glen',
      'Luttrellstown Community College',
      'PORTOBELLO HARBOUR'
    ],
    sources: [
      { claim: 'Census 2022 table F1015: "Dublin city and suburbs, Counties Dublin & Meath", both sexes, 1263219; average age 38.2; percentage aged under 15 17.7.', url: 'https://data.cso.ie/table/F1015' },
      { claim: 'Census 2022 table F1004A: Dublin City Council, population 592713 (291,796 male, 300,917 female).', url: 'https://data.cso.ie/table/F1004A' },
      { claim: 'Census 2022 summary results, Dublin: "the population of Dublin grew by 8% to 1,458,154, which means the number of people in the county rose by 110,795 between April 2016 and April 2022"; 284,885 or 41% worked from home at least one day a week, national 32%; 268,943 children aged 15 and under, 82,484 (31%) in childcare, 33% nationally.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultsdublin' },
      { claim: 'Census 2022 Profile 1: "Dublin City and suburbs had 3,659 people for every square kilometre"; "Of the 32 Electoral Divisions that had over 10,000 people per km 2 in 2022, 25 were in Dublin".', url: 'https://www.cso.ie/en/releasesandpublications/ep/p-cpp1/censusofpopulation2022profile1-populationdistributionandmovements/populationdistribution/' },
      { claim: 'Census 2022 Profile 5, Dublin: "In Dublin non-Irish citizens accounted for 17% of the population. Among the non-Irish residents in Dublin City, the largest group were Brazilian citizens (11,188 people) followed by Indian citizens (10,308)."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligiondublin' },
      { claim: 'Census 2022 Profile 8, Dublin: almost 480,000 with a third-level qualification, more than 193,000 in Dublin City; almost 16,000 PhD holders, 42% of the national total.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationdublin/' },
      { claim: 'Census 2022 Profile 1, Dublin: "Swords remained the largest town, with a population of 40,776"; "Saggart was the youngest with an average age of 30.4 years".', url: 'https://cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile1-populationdistributionandmovementsdublin' },
      { claim: 'Eircode FAQ: "Eircodes are not linked to a county or city, except for Dublin where the postal districts have been in use for many years." "The existing Dublin postal district numbers are part of the Eircode design e.g., 1 to 24 and 6W are retained in the Routing Key as D01 to D24."', url: 'https://www.eircode.ie/faqs' },
      { claim: 'TII: Red Line 21km, 32 stops; Green Line 22km, 35 operating stops; Green Line opened June 2004, Red Line September 2004.', url: 'https://www.tii.ie/en/public-transport/luas/red-and-green-lines/' },
      { claim: 'TFI: Red Line 32 stops Tallaght/Saggart to Connolly/The Point; Green Line 35 stops Brides Glen to Broombridge; transfer at Abbey Street to Marlborough Street or O\'Connell GPO.', url: 'https://www.transportforireland.ie/getting-around/by-tram/about-luas/' },
      { claim: 'Irish Rail: DART "runs along the coast of the Irish Sea from Malahide or Howth in north County Dublin southwards as far as Greystones, Co Wicklow"; "DART services operate every 10 minutes all day."', url: 'https://www.irishrail.ie/en-ie/about-us/iarnrod-eireann-services/dart-commuter' },
      { claim: 'Department of Education, 4 January 2018: 40 post-primary schools start Leaving Certificate Computer Science in September 2018, first exam 2020; the published table lists 14 in County Dublin.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Smart Dublin, Dublinbikes API DCC: publisher Dublin City Council, Creative Commons Attribution; history files with STATION ID, TIME, LAST UPDATED, NAME, BIKE STANDS, AVAILABLE BIKE STANDS, AVAILABLE BIKES, STATUS, ADDRESS, LATITUDE, LONGITUDE.', url: 'https://data.smartdublin.ie/dataset/dublinbikes-api' },
      { claim: 'Google privacy policy: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4; Airbnb terms: Airbnb Ireland UC, 25 North Wall Quay, Dublin 1.', url: 'https://policies.google.com/privacy?hl=en-IE&gl=ie' }
    ],
    rejectedClaims: [
      'The rule that odd-numbered postal districts lie north of the Liffey and even south: no primary statement found.',
      'A count of Dublin routing keys: the Eircode FAQ gives a range, not a count.',
      'Stripe and Meta Dublin addresses: not found on their own pages.',
      'Educate Together school counts for Dublin: the network\'s own pages conflict.',
      'Which Dublin schools offer Leaving Certificate Computer Science today: no current official list found; only the 2018 first-phase list is used.',
      'Luas lengths of 20 km and 24.5 km from search snippets: the TII figures are used instead.',
      'That Luas Cross City first connected the two lines in 2017: the sentence was truncated in the source as read.',
      'Anything the Dun Laoghaire-Rathdown page owns, including its 4,958 Indian citizens and its census figures.'
    ]
  }
};
