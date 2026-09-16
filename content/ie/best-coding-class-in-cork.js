'use strict';
// Cork (cg- city page, Ireland cluster, Phase 3). Spine: Cork City Council's
// pedestrian counts, and a retail calendar that renames the months. Facts read
// at primary sources on 16 September 2026, each kept to its own geography:
// CSO Census 2022 tables F1010, F1011, F1013, F1015, F1016 and F1020, the Cork
// press statements, gov.ie's January 2018 first-phase LCCS list, ucc.ie,
// hea.ie for MTU, apple.com, irishrail.ie and corkcity.ie. City and suburbs is
// 222,526; the council area is 224,004; the two are different shapes, and the
// page says so rather than blending them. A search summary claiming 222,333 is
// wrong and is not used. County-level figures are labelled as county figures.
// Apple's 6,000 employees is a November 2020 figure and is date-stamped.
// Dataset measured by us: Cork City Pedestrian Counts, Creative Commons
// Attribution, 593,280 rows across 11 counters from 1 August 2018 to 28 July
// 2026; ReportCount equals InCount plus OutCount on every row; the BRC retail
// calendar puts 47,400 rows in a different month from their date, making
// December 2024 at Patrick Bridge East 476,121 by calendar and 545,376 by
// retail month; the network grew from six counters to eleven in August 2022, so
// all-site totals rise 7.9% from 2019 to 2023 while the same six counters fall
// 12.4%; 19 Caroline Street has 27 all-zero days against a median non-zero day
// of 2,865. The timezone reading is an inference and is labelled as one.
// Dublin owns Dublin Bikes and its census figures.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'city', tag: 'CORK', blurb: 'The southern capital, from Ballincollig to Mayfield, with a project on the city\'s own footfall counters.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-cork',
  code: 'crk',
  accent: '#7A2C58',
  accentRationale: 'Cork: a deep plum from the solver, clear of both Irish greens and of every other Ireland page',
  pageType: 'city',
  place: {
    name: 'Cork',
    eyebrow: 'Cork, Munster',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Cork' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-ireland', name: 'Ireland' }],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Cork, Ireland',
  title: 'Best Coding Classes in Cork | Modern Age Coders',
  description: 'Live online coding, Python, AI and data classes for Cork families, from Ballincollig to Mayfield, ages 6 to 67, taught at a fixed hour. First lesson free.',
  ogDescription: 'Coding, Python and AI classes for Cork, built on the city\'s own footfall data and a calendar that quietly renames December.',
  twitterDescription: 'Cork coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Cork Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Cork, taught live in English.'
  },

  h1: 'Coding classes in Cork',
  capsuleQ: 'What are the best coding classes in Cork?',
  capsule: 'The best class for a Cork family is the one that fits a city of 222,526 people in its built-up area, where the council area holds 224,004, where Polish citizens at 4,423 and Indian citizens at 3,016 are the largest non-Irish groups in Cork City, and where 8,555 people had arrived in the city in the year before the 2022 census. Cork is also the home of the Central Statistics Office itself, on Skehard Road, which makes it a fitting place to learn that numbers need reading carefully. Our teachers work from India and every lesson is live, so Ballincollig, Douglas and Mayfield are all the same distance from the class: none. Learners are aged 6 to 67 and sit in groups of five to ten at one level, or alone with a teacher. Trying it costs nothing, and staying costs USD 100 a month in a group or USD 150 a month privately.',
  lead: 'Cork City Council counts the people walking past eleven points in the city centre, every hour, and publishes the lot. It is a lovely dataset: 593,280 rows going back to August 2018, no gaps, no duplicates, and every row adding up exactly. Then you ask it a simple question, how busy was December 2024 at Patrick Bridge East, and the file gives two answers. Group by the date and you get 476,121 people. Group by the month column sitting right beside it and you get 545,376, an overstatement of about 14.5%. Neither is wrong. The month column follows a retail calendar of four and five week months, so its December starts in November. Nothing in the file warns you, and the column is the obvious one to use. That gap between a column\'s name and a column\'s meaning is the thread of this page, and it is the kind of thing a learner only ever finds out by opening real data.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Cork.',

  picks: {
    eyebrow: 'Course picks for Cork',
    h2: 'Four courses for a city of 222,526',
    intro: 'Four learners, four starting points: a young child making a first game, a secondary student taking Python seriously, an older teenager who enjoys arguing with numbers, and an adult whose job has started asking for data. None of them pays to begin.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and first programs, where a counter on screen has to be kept honest every time something moves past it.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python for the Junior Cycle and Transition Year years, written and read line by line, using real Cork data as practice.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'The city footfall file: two ways of grouping a month, two answers, and one written sentence on which to trust.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults whose work already involves reports: checking what a column means before a dashboard or an AI summary is built on it.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Cork today',
      h2: 'Two Corks, and why the numbers differ',
      intro: 'Census 2022 measured Cork in more than one way, and the figures only make sense when you say which Cork you mean. This page keeps them apart.',
      body: [
        { kind: 'table', caption: 'Cork in Census 2022, Central Statistics Office', head: ['Measure', 'Figure', 'What it covers'], rows: [
          ['Cork city and suburbs', '222,526', 'The built-up area: 109,030 male and 113,496 female'],
          ['Cork City Council area', '224,004', 'The council area, a different shape from the built-up city'],
          ['Living in both', '216,229', 'People inside the built-up area and the council area at once'],
          ['Area of the built-up city', '191.7 square kilometres', 'With 1,160.9 people per square kilometre'],
          ['Average age, built-up city', '39.1', '16.6% aged under 15 and 14.9% aged 65 or over'],
          ['Largest local electoral area', 'Cork City South West, 51,063', 'Of five areas, the smallest being South Central at 41,000']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The council reaches further', p: 'Of the 222,526 people in the built-up city, 216,229 live in the council area and 6,297 in County Cork. The council area also holds 6,079 people in smaller towns and 1,696 in the countryside, which is how it reaches 224,004.' },
          { h3: 'Who lives here', p: 'In Cork City the largest non-Irish groups were Polish citizens, 4,423 of them, then Indian citizens at 3,016 and UK citizens at 2,434. In the year before the census, 8,555 people moved into the city, 5,407 of them from outside the State.' },
          { h3: 'Dense and not dense', p: 'Ballincollig is an electoral division of Cork City with 19,069 people, while the densest division in the city, South Gate B, holds 15,439.6 people per square kilometre. A class that reaches both looks the same from either.' }
        ] },
        { kind: 'p', text: 'One figure worth stating carefully: 47% of people in Cork held a third-level qualification in 2022, above the national 45%, and 5,342 people in Cork held a PhD, 14% of all PhD holders in the State. Those are figures for Cork city and county together, not for the city alone, and we label them that way because the CSO does.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Computer Science in Cork schools',
      h2: 'Seven Cork schools in the first phase',
      intro: 'Leaving Certificate Computer Science began in a set of named schools in September 2018, with the first exam in 2020. Seven of those schools were in Cork city and county.',
      body: [
        { kind: 'table', caption: 'Cork schools in the first phase of Leaving Certificate Computer Science, from the January 2018 list', head: ['School', 'Where'], rows: [
          ['Christ King Girls Secondary School', 'Half Moon Lane, South Douglas Road'],
          ['Gaelcholaiste Mhuire AG', 'An Mhainistir Thuaidh, Corcaigh'],
          ['Mayfield Community School', 'Old Youghal Road, Mayfield'],
          ['Coláiste Choilm', 'Ballincollig'],
          ['Carrigaline Community School', 'Waterpark, Carrigaline'],
          ['Coláiste an Chraoibhin', 'Duntaheen Road, Fermoy'],
          ['Sacred Heart Secondary School', 'Convent of Mercy, Clonakilty']
        ] },
        { kind: 'p', text: 'That is the list as published in January 2018, not a list of where the subject is taught now, and we found no current official list to set beside it. It still tells a Cork family something useful: the subject arrived recently, in some schools and not others, and plenty of students who want this ground have to find it outside their own timetable. Our classes do not replace the subject or its examination. They give the programming, data and problem-solving practice the subject assumes, at an hour that fits around school.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Coding taught by neighbours', p: 'Apple, whose first facility outside the United States opened at Hollyhill in 1980 with 60 employees, said in 2020 that its staff had spent five years volunteering weekly at Terence MacSwiney School in Cork, helping teach coding, music, photography and video.' },
          { h3: 'Science on the Lee', p: 'Cork City Council runs the Lifetime Lab at the Old Cork Waterworks on the Lee Road, which offers accredited primary-school science workshops and hosts the Cork Carnival of Science.' },
          { h3: 'Two universities', p: 'University College Cork was established in 1845 and opened to 115 students in 1849; it now has over 26,000. Munster Technological University was established on 1 January 2021 and its Cork campus is at Bishopstown.' }
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Counting footsteps on Patrick Street, and the month that starts in November',
      intro: 'Cork City Council publishes hourly pedestrian counts from the city centre under a Creative Commons Attribution licence. Learners use the file to find out how a tidy dataset can still give two answers.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Check it is clean', p: 'The file has 593,280 rows and no missing values. Learners verify that the total column equals the in and out counts on every row, that no site-hour appears twice, and that every day has exactly 24 rows. It passes all of them.' },
          { h3: '2. Ask a simple question', p: 'How busy was Patrick Bridge East in December 2024? Group by the date column and the answer is 476,121. Group by the month column beside it and the answer is 545,376.' },
          { h3: '3. Find out why', p: 'The month, year and week columns follow a retail calendar of 28 and 35 day months. Its December 2024 runs from 25 November to 29 December, so it includes a whole extra week of Christmas shopping.' }
        ] },
        { kind: 'table', caption: 'Our measurements on the published file, read 16 September 2026', head: ['Measure', 'Figure'], rows: [
          ['Rows in the file', '593,280'],
          ['Counter sites', '11, six of them since 1 August 2018'],
          ['Rows whose retail month differs from their calendar month', '47,400'],
          ['Patrick Bridge East, December 2024, by calendar month', '476,121'],
          ['The same month by the retail calendar', '545,376, about 14.5% higher'],
          ['Busiest single hour in the file', 'Academy Street North, 4pm on Saturday 22 December 2018, 5,263 people']
        ] },
        { kind: 'callout', h3: 'Two more traps in the same file', p: 'The network grew from six counters to eleven in August 2022. Add up every site and footfall appears to rise 7.9% between 2019 and 2023, from 32,647,302 to 35,231,992. Compare only the six counters present in both years and it falls 12.4%, to 28,594,862. Separately, 19 Caroline Street records 27 whole days where every single hour is zero, mostly in its first weeks, against a median non-zero day of 2,865 people. There are no blanks in this file, so an outage looks exactly like an empty street. A learner who answers "is the city busier than before the pandemic?" without fixing all three gets a confident, wrong answer.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reading a column honestly',
      h2: 'Five checks before a column is trusted',
      intro: 'Taught on a Cork file, and used afterwards on spreadsheets at work, sensor feeds and anything an AI tool is asked to summarise.',
      body: [
        { kind: 'table', caption: 'Checking that a column means what its name says', head: ['Check', 'In practice', 'What it avoids'], rows: [
          ['Rebuild the total', 'Confirm that the totals column really equals its parts', 'Trusting a summary column nobody recomputed'],
          ['Group two ways', 'Group by the date and by any month or week column, then compare', 'A December that quietly starts in November'],
          ['Count the sources', 'Check whether the same stations reported in every year', 'A rise that is only more counters'],
          ['Treat zero with suspicion', 'Look for whole days of zeros before averaging', 'Outages counted as quiet days'],
          ['Ask about the clock', 'Check how the file behaves on clock-change days', 'Hours that are an hour out all summer']
        ] },
        { kind: 'p', text: 'The last check is worth an honest caveat. Every day in this file has exactly 24 hourly rows, including the days Irish clocks change, which is consistent with the times being recorded in UTC rather than local time. The publisher does not say, so we treat it as a measured inference rather than a fact, and we teach students to write it down that way in their own work.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A Scratch counter that ticks as people walk past, and the discovery that a broken counter reads zero exactly like an empty street.' },
          { h3: 'For teenagers', p: 'Python on the real file: rebuild the totals, group two ways, and write one honest sentence about whether the city is busier than in 2019.' },
          { h3: 'For adults', p: 'The same discipline applied to work reports: what does this column mean, who made it, and what happens if I group it differently?' }
        ] },
        { kind: 'p', text: 'We are independent of every organisation named here: Cork City Council, University College Cork, Munster Technological University, Apple, Iarnród Éireann and each of the schools listed. Where a census figure appears it is the Central Statistics Office\'s own for 2022; where a footfall figure appears we counted it ourselves from the Council\'s published file.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around the city',
      h2: 'Two routing keys, one river and a market from 1788',
      intro: 'Cork families know the city\'s geography in their bones. An online class needs none of it, which is rather the point.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'T12 and T23', p: 'Real Cork addresses carry both routing keys: City Hall on Anglesea Street is T12 T997, University College Cork is T12 K8AF and the Central Statistics Office on Skehard Road is T12 X00E, while Kent Station is T23 E6TD and the Old Cork Waterworks on the Lee Road is T23 N828.' },
          { h3: 'The English Market', p: 'Created in 1788 by the corporation that then ran the city, and given its Princes Street entrance and roof to designs by Sir John Benson in 1862. It is still run by Cork City Council.' },
          { h3: 'Kent Station', p: 'Cork\'s mainline station, with direct services to Dublin Heuston. Platforms 1 to 4 are level, with a ramp or lift to platforms 5A, 5B and 6.' }
        ] },
        { kind: 'spec', title: 'Young towns on the city\'s edge', p: 'The CSO noted that three of the State\'s youngest towns of between 1,500 and 10,000 people sit close to Cork City: Watergrasshill, Rathcormac and Carrigtwohill. Young towns mean young families, and a live online class reaches them at the same hour it reaches Bishopstown.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a counter that ticks to a column that misleads',
    intro: 'Placement comes from what a learner does in the free lesson, not from a form. The bands below say what is typical, and teachers move people up or down without ceremony.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Counting things', p: 'Children build programs that count and display, and see what a broken counter does to the story.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'First tables', p: 'Learners read small real tables in Python and ask what each column actually measures.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Grouping and checking', p: 'Teenagers group the same data two ways, compare the answers and say which question each one answers.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Before the report', p: 'Adults write checks that run before a dashboard, a report or an AI summary is trusted.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will total this file in seconds. Why should a teenager in Cork learn to question the total?',
    intro: 'Because the file offers two Decembers, and the assistant will pick one without mentioning that it did.',
    p1: 'Hand the pedestrian file to an AI assistant and ask which month was busiest. It will find a column called month, group by it, and answer confidently. That column is a retail calendar, so its December begins in late November and runs 35 days instead of 31. The assistant has not malfunctioned; it used the obvious column, exactly as a hurried human would. The difference at one counter is about 14.5%, which is more than enough to change what a council report, a shop\'s plan or a school project concludes.',
    p2: 'A learner who has met this once starts asking a different question of every dataset: not what does this column contain, but who made it and for what purpose. That question survives every change of tool. It applies to a fitness tracker\'s week, a payroll system\'s month, a sales dashboard\'s quarter and a school\'s attendance year, all of which can start on a day you did not expect.',
    closer: 'So the case for a Cork child learning to code in 2026 is not that a company might hire them. It is that decisions here are increasingly made from data, and somebody in the room needs to be able to ask whether the column means what its name says.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Ballincollig to Mayfield, the same class at the same hour',
    intro: 'Cork runs from the harbour up to the western suburbs, and the lesson arrives everywhere at the same second. Nobody drives into town for it, and nobody queues on Washington Street.',
    cells: [
      { h3: 'Wherever the laptop is', p: 'Carrigaline and Blackpool sit in the same group without either learner leaving the house at half four.' },
      { h3: 'Your school year, your words', p: 'Teachers use the Irish stages by name, from First Year through Transition Year to sixth, so nothing has to be translated for a parent.' },
      { h3: 'Nothing to pay to try', p: 'The opening lesson is genuine teaching on a genuine task; a level, a course and an hour are proposed afterwards, and no payment details are requested.' },
      { h3: 'Small groups, many countries', p: 'Each group holds five to ten learners of matching ability, drawn from Cork and elsewhere, which is what makes a sensible hour possible at every level.' },
      { h3: 'Planned around term', p: 'The usual rhythm is two lessons a week, about eight in a month, held at the same time, and families decide with the teacher when to pause for mid-terms or exams.' },
      { h3: 'A clock that does not move', p: 'India stays on one time all year while Ireland changes twice, leaving our teachers four and a half hours ahead in summer and five and a half in winter; Cork afternoons, evenings and weekend mornings all land comfortably.' }
    ],
    spec: { title: 'A city that works from home', p: 'In Cork City almost 35,700 people worked from home at least some of the time in 2022, with almost 11,800 doing so five days a week, while almost 56,000 never did. For a household where somebody is home by five, a live lesson at a fixed hour is easy to build into the week.' }
  },

  fees: {
    h2: 'What classes cost in Cork',
    intro: 'Three figures, stated plainly, with nothing added later.',
    first: 'A full lesson on something real, after which you are told where the learner stands and what to take.',
    group: 'Four weeks of teaching, generally eight lessons, shared with between five and ten learners of the same ability.',
    private: 'The same four weeks and eight lessons, with the teacher working with one learner only.',
    closer: 'Billing is in US dollars, on the single rate that applies outside India; there is no euro price list, and Douglas pays what Farranree pays. Nothing is charged until the free lesson has settled which course and which hour. Pauses, switching format and missed lessons are all set out on the pricing page.'
  },

  reviewsH2: 'What Cork families read before they call: six unedited Google reviews',

  book: {
    h2: 'Where is the learner starting from?',
    intro: 'Depending on the learner, the opening task might be a counter built in Scratch, a first script that opens a table, or the hunt for two Decembers in the city\'s own footfall file.',
    success: 'Got it. Somebody from the team will be in touch about your Cork class.'
  },

  faq: {
    h2: 'Cork coding class questions',
    intro: 'The city, its figures, its schools and the lessons.',
    items: [
      { q: 'How many people live in Cork?', a: 'Census 2022 counted 222,526 in Cork city and suburbs and 224,004 in the Cork City Council area. They are different shapes: 216,229 people live in both, while the council area also takes in smaller towns and countryside.' },
      { q: 'Which Cork schools first offered Leaving Certificate Computer Science?', a: 'Seven schools in Cork city and county were on the January 2018 first-phase list, including Christ King Girls Secondary School, Mayfield Community School, Gaelcholaiste Mhuire AG and Coláiste Choilm in Ballincollig. It shows where the subject started, not where it is taught today.' },
      { q: 'What is the Cork footfall project?', a: 'Learners download Cork City Council\'s hourly pedestrian counts, check that the file adds up, then group one month two different ways. Patrick Bridge East in December 2024 comes to 476,121 by calendar month and 545,376 by the file\'s retail calendar.' },
      { q: 'Is the city busier than before the pandemic?', a: 'That is the project question, and the honest answer needs care: totals across all counters rose between 2019 and 2023, but the same six counters that existed in both years fell by 12.4%. The rise comes from five new counters.' },
      { q: 'Why do Cork addresses start with T12 and T23?', a: 'Both routing keys are used across the city in real published addresses: City Hall and University College Cork are T12, while Kent Station and the Old Cork Waterworks are T23.' },
      { q: 'What time are lessons for Cork learners?', a: 'The hour is agreed in the free lesson. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter, so afternoons, evenings and weekend mornings in Cork all suit them.' },
      { q: 'Do classes fit around the Junior Cycle and Leaving Cert?', a: 'Yes. Families agree pauses for exam weeks and school holidays, and the course is chosen around the school year, including Transition Year when many learners want a longer project.' },
      { q: 'Is there a Modern Age Coders classroom in Cork?', a: 'There is not, and we never suggest otherwise: the school teaches only in live online lessons and keeps no premises in Ireland. What a learner needs is a laptop or desktop, sound that works and a connection that holds. The number shown here belongs to India, where the team sits.', boiler: true },
      { q: 'What do Cork coding classes cost?', a: 'The opening lesson is free of charge. Continuing costs USD 100 each month for a shared place, which buys two live lessons a week, roughly eight a month, alongside five to ten others, or USD 150 each month for the same schedule taught privately. The course, the format and the weekly hour are all agreed before money changes hands.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Groups run from five up to ten. What puts learners together is ability, speed and what they are aiming at, never their age or where they live. Where nothing suitable is running at an hour that works, private lessons fill the gap.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Up the country, and back to the national page',
    html: 'The capital is covered separately at <a class="cg-inline-link" href="/best-coding-class-in-dublin">coding classes in Dublin</a>. Readers weighing up how to choose between online schools should start with <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>, while anyone drawn to models and data will want <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-ireland">AI and machine learning classes in Ireland</a>. Every Irish page hangs off the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Cork and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/best-online-coding-classes-ireland', label: 'Best online classes, Ireland' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-crk .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 3.2vw, 2.7rem); }
.cg-root.cg-crk .cg-hero h1 { font-weight: 700; letter-spacing: -0.023em; line-height: 1.06; }
.cg-root.cg-crk .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-crk .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-crk .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.015em; }
.cg-root.cg-crk .cg-grid-3 { gap: clamp(1.05rem, 2.5vw, 2rem); }
.cg-root.cg-crk .cg-table caption { letter-spacing: 0.04em; font-weight: 700; }
.cg-root.cg-crk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-crk .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-crk .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-crk .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Cork, Census 2022 (CSO): city and suburbs 222,526 (F1015/F1013; 109,030 male, 113,496 female), area 191.7 sq km, density 1,160.9 per sq km, average age 39.1, 16.6 percent under 15, 14.9 percent 65 or over; Cork City Council area 224,004 (F1010/F1020; 109,736 male, 114,268 female), of which 216,229 are in the built-up city, 6,079 in towns of 2,000 to 4,999 and 1,696 in the rural remainder, while 6,297 of the built-up city live in Cork County Council; five local electoral areas, South West 51,063, South East 45,400, North East 44,235, North West 42,306, South Central 41,000 (F1016); Ballincollig electoral division 19,069 and the densest city division South Gate B at 15,439.6 per sq km (F1011); county total 584,156, up 8 percent or 41,288 on 2016. Cork City citizenship: Polish 4,423, Indian 3,016, UK 2,434; 8,555 people moved into the city in the year before the census, 3,148 from within Ireland and 5,407 from outside the State. Cork City work: over 103,000 at work, unemployment 8 percent, participation 60 percent; almost 35,700 worked from home at least some of the time and almost 11,800 five days a week, while almost 56,000 never did. County-level, labelled as such: 47 percent with a third-level qualification against 45 percent nationally, and 5,342 PhD holders, 14 percent of the State total. Gov.ie, 4 January 2018: the first-phase Leaving Certificate Computer Science list includes seven Cork schools, four of them in the city (Christ King Girls, Gaelcholaiste Mhuire AG, Mayfield Community School and Coláiste Choilm in Ballincollig) and three in the county (Carrigaline, Fermoy, Clonakilty). Addresses: City Hall T12 T997, UCC T12 K8AF, MTU Bishopstown T12 P928, CSO head office Skehard Road T12 X00E, Kent Station T23 E6TD, Old Cork Waterworks T23 N828. UCC established 1845, opened 1849 with 115 students, now over 26,000; MTU established 1 January 2021 (HEA). Apple: first facility outside the US at Hollyhill, 1980, 60 employees, with 6,000 Irish employees as of November 2020, and staff volunteering weekly at Terence MacSwiney School to teach coding. English Market created 1788, Princes Street entrance by Sir John Benson 1862. Lifetime Lab at the Old Cork Waterworks runs accredited primary science workshops and the Cork Carnival of Science.',
    localProject: 'A retail calendar hiding inside a clean file. Cork City Council\'s pedestrian counts (Creative Commons Attribution, data.corkcity.ie) hold 593,280 rows for 11 counter sites from 1 August 2018 to 28 July 2026, with no nulls, no duplicate site-hours, exactly 24 rows per site-day and ReportCount equal to InCount plus OutCount on every row. The BRC retail calendar in the BRCYear, BRCMonthName and BRCWeekNum columns uses 28 and 35 day months: 47,400 rows sit in a different month from their date, 3,000 in a different year and 55,968 in a different week. Patrick Bridge East December 2024 is 476,121 by calendar month and 545,376 by retail month, about 14.5 percent higher. Second trap: the network grew from six counters to eleven in August 2022, so all-site totals rise from 32,647,302 in 2019 to 35,231,992 in 2023, up 7.9 percent, while the same six counters fall 12.4 percent to 28,594,862. Third trap: 19 Caroline Street has 27 all-zero days against a median non-zero day of 2,865, and with no nulls in the file an outage is indistinguishable from an empty street. Fourth, flagged as inference: every day including clock-change days has exactly 24 rows, consistent with UTC rather than Irish local time, which the publisher does not state. Busiest hour in the file: Academy Street North, 22 December 2018 at 16:00, 5,263 people.',
    requiredMentions: [
      '222,526',
      '224,004',
      '216,229',
      '51,063',
      '19,069',
      '15,439.6',
      '4,423',
      '8,555',
      '593,280',
      '545,376',
      '28,594,862',
      'Skehard Road',
      'Terence MacSwiney School',
      'T23 E6TD'
    ],
    sources: [
      { claim: 'Census 2022 tables F1013 and F1015: Cork city and suburbs 222,526 (109,030 male, 113,496 female), area 191.7 sq km, density 1,160.9, average age 39.1, 16.6% under 15, 14.9% aged 65 or more.', url: 'https://data.cso.ie/table/F1015' },
      { claim: 'Census 2022 tables F1010 and F1020: Cork City Council 224,004 (109,736 male, 114,268 female); 216,229 of the built-up city inside the council area, 6,297 in Cork County Council, plus 6,079 in towns of 2,000 to 4,999 and 1,696 in the remainder.', url: 'https://data.cso.ie/table/F1010' },
      { claim: 'Census 2022 table F1016: Cork City South West 51,063, South East 45,400, North East 44,235, North West 42,306, South Central 41,000.', url: 'https://data.cso.ie/table/F1016' },
      { claim: 'Census 2022 table F1011: Ballincollig, Cork City 19,069; densest city electoral division South Gate B at 15,439.6 persons per sq km.', url: 'https://data.cso.ie/table/F1011' },
      { claim: 'CSO Profile 5, Cork: "Among the non-Irish residents in Cork City, the largest group were Polish citizens (4,423 people), followed by Indian citizens (3,016) and the UK (2,434)"; 8,555 people had moved into Cork City in the previous year, 3,148 from within Ireland and 5,407 from outside the State.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligioncork' },
      { claim: 'CSO Profile 7, Cork: over 103,000 at work in Cork City, unemployment 8%, participation 60%; almost 35,700 worked from home at least some of the time, almost 11,800 five days a week, almost 56,000 never.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingcork/' },
      { claim: 'CSO Profile 8, Cork (county level): 47% with a third-level qualification against 45% nationally; 5,342 PhD holders, 14% of the national total.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationcork/' },
      { claim: 'Department of Education, 4 January 2018: first-phase Leaving Certificate Computer Science schools, including Christ King Girls Secondary School, Gaelcholaiste Mhuire AG, Mayfield Community School, Coláiste Choilm, Carrigaline Community School, Coláiste an Chraoibhin and Sacred Heart Secondary School.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'University College Cork: "Established in 1845 our beautiful university opened its gates to just 115 students in 1849. We now have a student population of over 26,000."', url: 'https://www.ucc.ie/en/about/' },
      { claim: 'Higher Education Authority: Munster Technological University "Established on 1 January 2021", formed from Cork Institute of Technology and Institute of Technology Tralee.', url: 'https://hea.ie/higher-education-institutions/mtu/' },
      { claim: 'Apple newsroom, November 2020: "The story of Apple in Ireland began in 1980 with a single manufacturing facility and 60 employees"; "The facility in Cork, Ireland, was Apple\'s first outside of the US"; employees volunteering weekly at Terence MacSwiney School in Cork teaching coding, music, photography and video.', url: 'https://www.apple.com/ie/newsroom/2020/11/apples-cork-campus-celebrates-40-years-of-community-and-looks-to-the-future/' },
      { claim: 'Cork City Council: the English Market "was created in 1788"; the Princes Street entrance and roof were designed by Sir John Benson in 1862; the Lifetime Lab runs accredited primary school workshops at the Old Cork Waterworks, T23 N828.', url: 'https://www.corkcity.ie/en/english-market/history/the-history-of-the-english-market/' },
      { claim: 'Iarnród Éireann: Kent Station, Cork City, T23 E6TD, with direct Dublin Heuston services; platforms 1 to 4 level, ramp or lift to 5A, 5B and 6.', url: 'https://www.irishrail.ie/en-ie/station/cork-kent' },
      { claim: 'Cork City Pedestrian Counts, Cork City Council open data portal, licence "Creative Commons Attribution": 593,280 rows, 11 counter sites, hourly counts with InCount, OutCount and ReportCount.', url: 'https://data.corkcity.ie/dataset/corkcitypedestriancounts' }
    ],
    rejectedClaims: [
      'A search summary giving Cork city and suburbs as 222,333: the CSO tables say 222,526.',
      'Routing-key summaries claiming T12 is the southside and T23 the northside: no primary source; the published addresses are used instead.',
      'A current Apple Cork headcount: only the November 2020 figure is published on apple.com, and it is date-stamped here.',
      'Any claim about which Cork schools offer Leaving Certificate Computer Science today: no current official list was found.',
      'Whether Coláiste Choilm sits inside the city boundary: only the CSO electoral division label was checked.',
      'A stated timezone for the pedestrian counts: the publisher gives none, so the reading is labelled an inference.',
      'Anything owned by the Dublin page, including Dublin Bikes and its census figures.'
    ]
  }
};
