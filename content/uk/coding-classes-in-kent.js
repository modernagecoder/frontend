'use strict';
// Kent (cg- county index, UK cluster Phase 7, row 215). Ceremonial Kent: twelve districts under Kent County Council
// plus Medway. Spine: a quarterly total is not a queue. DfT Port Freight Statistics PORT0502 (accredited official
// statistics, last updated 10 September 2026), Dover, units both directions and by direction; units include
// non-freight vehicles (Note 1). Our run (scratchpad knt, 26 September 2026): outward units 2025 Q3 663,575 over
// 92 days = 300.5 an hour on average; 2025 Q1 389,506 over 90 days = 180.3 an hour; ratio 1.67; 2019 Q3 751,540 =
// 340.4 an hour, so 2025 Q3 is 11.7 per cent lower. Little's law L = lambda W: an extra 90 seconds per outbound
// vehicle adds 7.5 vehicles to the average queue at the Q3 rate (4.5 at Q1), 5 minutes adds 25.0, 15 minutes
// adds 75.1. The four quarters to 2026 Q2 total 3,830,413 units both ways (2026 provisional, Note 5). The page's
// point: the rate is an average over every hour of the quarter, nights included, so it cannot say how long the
// queue is on a summer Saturday morning. Lesson family: rates from published totals and Little's law, averages
// versus peaks; distinct from Wassenaar (single-server queue, waiting explodes near full use, toy numbers).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 for the twelve Kent districts and Medway
// (1,855,844, our sum); ONS Census 2021 built-up areas, 48 towns above 5,000 checked by our OA sums (every row
// agrees within rounding; Maidstone, Gillingham, Chatham, Rochester, Northfleet and Longfield cross district lines
// but not the county line). BLOCKED: Kent County Council term dates returned 403 on 26 September 2026, not
// retried (the Surrey page recorded the same site refusing us on 20 September).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'KENT', blurb: 'Thirteen councils, forty-eight towns with a census figure, and the Dover traffic statistics turned into a lesson about queues.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-kent',
  code: 'knc',
  accent: '#1C106B',
  accentRationale: 'Kent: a Channel-night indigo from the solver (12.67:1 on the lightest paper), bluer than the UK purples and darker than any other county accent',
  pageType: 'governorate',
  place: {
    name: 'Kent',
    eyebrow: 'County of Kent',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'South East England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Canterbury', href: '/best-coding-class-in-canterbury' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Kent',
  title: 'Coding Classes in Kent | Live Online Python and AI, Ages 6 to 67',
  description: 'Live online coding, Python, AI and maths classes for all of Kent, from Maidstone, Medway and Ashford to Canterbury, Margate and Dover. The first lesson is free.',
  ogDescription: 'Coding classes for every Kent town, and a project that turns Dover\'s official traffic statistics into queues: rates, Little\'s law, and what an average hides.',
  twitterDescription: 'Kent coding, Python, AI and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and AI Classes for Kent',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the Kent districts and Medway, taught live in English.'
  },

  h1: 'Coding classes in Kent',
  capsuleQ: 'What are the best coding classes in Kent?',
  capsule: 'Kent had 1,855,844 residents across twelve districts and Medway at the 2021 Census, and its towns are spread along two coasts, the Medway, the Thames estuary and the Weald. Maidstone and Gillingham are the biggest; after them come Ashford, Chatham, Dartford, Rochester and Margate, and dozens more. We serve all of them identically. Classes run live on video with teachers in India, and learners are placed by what they can do, at any age from 6 to 67, in a group of five to ten or one to one, across programming, Python, AI and maths. The Kent project uses Dover\'s official traffic statistics. Lesson one is free, and then a group seat costs USD 100 a month while private tuition costs USD 150.',
  lead: 'Every summer, somebody in Kent asks how long the queue at Dover will be. The Department for Transport publishes exactly how many vehicles pass through the port each quarter, and a tidy piece of mathematics called Little\'s law links the number arriving, the time each one waits and the length of the line. Put the two together and you can answer the question, sort of. This page\'s project does precisely that, carefully, and then shows the part that surprises most people: the official figure gives you an average over every hour of three months, including three in the morning in January, and the queue that matters is never an average one.',
  wa: 'Hello Modern Age Coders, I would like to book a free lesson for a learner in Kent.',

  picks: {
    eyebrow: 'Courses for Kent',
    h2: 'Courses Kent learners pick first',
    intro: 'A seven-year-old in Herne Bay who builds Lego harbours, a Year 8 in Sittingbourne who has outgrown Scratch, a Year 12 in Sevenoaks weighing computer science at university, and a logistics coordinator in Ashford who wants to do more with the numbers. Four starts, one free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding from a first Scratch game onwards, with kid-safe AI and a first taste of Python at the end.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths learned by coding it: fractions, algebra, geometry and probability built as Python projects.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Beginner to advanced Python for teenagers across games, web apps, automation, data and AI.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Excel, statistics and SQL, then Python with pandas and dashboards, ending in a portfolio project.' }
    ]
  },

  sections: [
    {
      id: 'kent', tint: '', eyebrow: 'Kent by the numbers',
      h2: 'Twelve districts and Medway: 1,855,844 people and no single centre',
      intro: 'Council counts are the 2021 Census on Nomis. Towns are ONS built-up areas, each checked against our own sum of the census output areas inside the county.',
      body: [
        { kind: 'table', caption: 'Kent\'s thirteen councils, usual residents at Census 2021, largest first', head: ['Council', 'Usual residents', 'Main towns'], rows: [
          ['Medway', '279,773', 'Gillingham, Chatham, Rochester, Strood, Hoo St Werburgh'],
          ['Maidstone', '175,782', 'Maidstone, Coxheath, Bearsted, Staplehurst'],
          ['Canterbury', '157,432', 'Canterbury, Whitstable, Herne Bay'],
          ['Swale', '151,676', 'Sittingbourne, Faversham, Minster, Sheerness'],
          ['Thanet', '140,587', 'Margate, Ramsgate, Broadstairs'],
          ['Ashford', '132,747', 'Ashford, Tenterden'],
          ['Tonbridge and Malling', '132,201', 'Tonbridge, Larkfield, Snodland, Kings Hill'],
          ['Sevenoaks', '120,514', 'Sevenoaks, Swanley, Edenbridge'],
          ['Dartford', '116,753', 'Dartford, Swanscombe, Stone'],
          ['Dover', '116,410', 'Dover, Deal, Aylesham'],
          ['Tunbridge Wells', '115,311', 'Royal Tunbridge Wells, Southborough, Paddock Wood'],
          ['Folkestone and Hythe', '109,758', 'Folkestone, Hythe, Hawkinge'],
          ['Gravesham', '106,900', 'Gravesend, Northfleet']
        ] },
        { kind: 'p', text: 'Medway is a separate unitary council with more residents than any Kent district, but for most families "Kent" means all thirteen, so this page counts them together. Two things stand out. The county has no dominant town: the largest built-up area, Maidstone, holds under six per cent of the county\'s people. And its towns are far apart. Margate to Tunbridge Wells is a long cross-county journey, which is why so much of Kent\'s after-school learning either happens in school or does not happen at all.' },
        { kind: 'table', caption: 'Kent towns above five thousand residents by ONS built-up area, Census 2021, largest first', head: ['Town', 'Usual residents', 'Town', 'Usual residents'], rows: [
          ['Maidstone', '109,490', 'Swanley', '17,210'],
          ['Gillingham', '108,480', 'Minster (Swale)', '16,740'],
          ['Ashford', '82,140', 'Longfield, New Ash Green and Hartley', '16,075'],
          ['Chatham', '76,955', 'Swanscombe', '15,460'],
          ['Dartford', '69,130', 'Herne', '14,875'],
          ['Rochester', '67,285', 'Hythe', '14,620'],
          ['Margate', '63,320', 'Sheerness', '13,250'],
          ['Gravesend', '58,105', 'Snodland', '11,830'],
          ['Canterbury', '55,090', 'Kings Hill', '9,970'],
          ['Sittingbourne', '54,390', 'Southborough', '9,630'],
          ['Folkestone', '51,995', 'Hoo St Werburgh', '8,760'],
          ['Royal Tunbridge Wells', '51,220', 'Hawkinge', '8,500'],
          ['Ramsgate', '42,030', 'Coxheath', '8,455'],
          ['Dover', '36,360', 'Bearsted', '8,350'],
          ['Tonbridge', '36,125', 'Edenbridge', '7,900'],
          ['Whitstable', '32,195', 'Rusthall and Langton Green', '7,780'],
          ['Northfleet', '29,900', 'Tenterden', '7,775'],
          ['Deal', '28,985', 'Paddock Wood', '7,610'],
          ['Sevenoaks', '26,475', 'Otford and Kemsing', '7,335'],
          ['Larkfield', '26,150', 'Whitfield', '6,510'],
          ['Broadstairs', '25,775', 'Stone', '6,440'],
          ['Herne Bay', '24,870', 'Staplehurst', '6,180'],
          ['Faversham', '20,940', 'Aylesham', '5,785'],
          ['Pembury', '5,785', 'Littlestone-on-Sea', '5,270']
        ] },
        { kind: 'p', text: 'Every one of the forty-eight rows agrees with our own output-area count to within rounding, which means none of these towns leaks over the county boundary. Several do cross district lines inside Kent. Chatham\'s built-up area touches Medway, Maidstone and Tonbridge and Malling; Rochester runs from Medway into Gravesham; Northfleet sits across Dartford and Gravesham; and Longfield, New Ash Green and Hartley straddles Dartford and Sevenoaks.' },
        { kind: 'callout', h3: 'Term dates, and why none are printed here', p: 'Kent County Council\'s website refused our request on 26 September 2026, as it had when we built our Surrey page, and we do not work around a refusal or copy dates second hand. Medway sets its own calendar, and academies across the county can differ too. We agree breaks with each family. The county\'s selective schools have their own maths pages for <a class="cg-inline-link" href="/11-plus-maths-tuition-kent">Kent</a> and <a class="cg-inline-link" href="/11-plus-maths-tuition-medway">Medway</a>; this page gives no school advice.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Kent project',
      h2: 'From a quarterly total at Dover to the length of a queue',
      intro: 'One official table, one law, and one honest limitation that is the real point of the exercise.',
      body: [
        { kind: 'p', text: 'The Department for Transport\'s Port Freight Statistics count every unit through each major port, quarter by quarter, by direction. At Dover a unit is mostly a lorry, trailer or car, since the department notes that its unit totals include non-freight vehicles such as passenger cars. The first job is conversion. A quarter is not a rate. To get vehicles per hour you divide by the hours in the quarter, and a learner who forgets that July to September has 92 days while January to March has 90 gets a small error and learns a large habit.' },
        { kind: 'table', caption: 'Our run of 26 September 2026: Dover outward units from DfT PORT0502, turned into hourly rates', head: ['Quarter', 'Outward units (DfT)', 'Hours in quarter', 'Average per hour'], rows: [
          ['July to September 2019', '751,540', '2,208', '340.4'],
          ['January to March 2025', '389,506', '2,160', '180.3'],
          ['July to September 2025', '663,575', '2,208', '300.5'],
          ['Summer 2025 against winter 2025', '1.67 times as many', '', ''],
          ['Summer 2025 against summer 2019', '11.7 per cent lower', '', '']
        ] },
        { kind: 'p', text: 'Now the law. Little\'s law says that in any steady system, the average number of things waiting equals the rate at which they arrive multiplied by the average time each one spends waiting: L = λW. It needs no assumptions about how arrivals are spread, which is what makes it so useful. At the summer 2025 average of about 300 an hour, an extra check adding 90 seconds to every outbound vehicle adds about 7.5 vehicles to the average queue. Five extra minutes adds 25. Fifteen adds 75. In January\'s quieter flow, the same 90 seconds adds 4.5.' },
        { kind: 'p', text: 'And here is the honest part. 300 an hour is the average across 2,208 hours, including every night and every quiet Tuesday. Nobody queues at the average. Real traffic arrives in waves: weekend mornings in August, the hours after a ferry is cancelled, the start of school holidays. The quarterly table cannot show those peaks, so Little\'s law applied to it can only tell you about the typical hour, not the worst one. A learner who writes that limitation next to their answer has learned more than one who just prints 7.5.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Turn quarterly totals into per-hour and per-minute rates in Python, checking days in each quarter with a calendar rather than guessing.' },
          { h3: 'Ages 13 to 16', p: 'Load the DfT table, chart Dover\'s outward units for every quarter since 2009, and label the seasonal pattern and the gaps.' },
          { h3: 'Ages 16 and up', p: 'Simulate arrivals that bunch into peaks with the same average, apply Little\'s law to both, and show why the average undercounts the worst hour.' }
        ] },
        { kind: 'callout', h3: 'What the figures are, and what they are not', p: 'The unit counts are DfT accredited official statistics, last updated on 10 September 2026, and 2026 figures are provisional. The rates, the queue lengths and the extra check times are our own arithmetic and illustrations, not measurements of any real queue or any real policy, and nothing here predicts traffic on a particular day.' }
      ]
    },
    {
      id: 'dover', tint: 'deep', eyebrow: 'Why Dover',
      h2: 'The port in the published record',
      intro: 'What the Department for Transport table says about the Kent port, in its own numbers.',
      body: [
        { kind: 'table', caption: 'Dover in DfT PORT0502, units both directions (thousands in the source, shown here in full)', head: ['Period', 'Units, both directions', 'Note from the table'], rows: [
          ['July to September 2025', '1,299,856', 'Includes non freight-carrying units such as passenger vehicles'],
          ['January to March 2025', '760,425', 'The quietest quarter of 2025'],
          ['Four quarters to April to June 2026', '3,830,413', '2026 data is provisional and will be finalised in July 2027'],
          ['Change from the four quarters to April to June 2025', '2.8 per cent lower', 'The table\'s own comparison']
        ] },
        { kind: 'p', text: 'Almost four million units a year pass through one Kent port, and summer carries far more than winter. For a teenager that is a better introduction to data than any textbook table: real, recent, a little messy, and connected to something they have probably sat in. The skills are general. The same arithmetic describes website requests, hospital phone lines, supermarket tills and the queue for a school canteen.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with the Port of Dover, the Department for Transport, Kent County Council or Medway Council, and nothing here implies one. The statistics are the department\'s; the rates, the queue arithmetic and any error in them are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-canterbury">Canterbury</a> has its own city page, <a class="cg-inline-link" href="/coding-classes-in-surrey">Surrey</a> is over the western boundary and <a class="cg-inline-link" href="/best-coding-class-in-london">London</a> lies to the north-west. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links the rest.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing as a programmer',
    h2: 'From counting cars on a screen to modelling a system',
    intro: 'The free lesson sets the starting point. Age suggests a level; what a learner can do decides it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Counting things that move', p: 'Scratch projects with vehicles, timers and counters, which is how young children first meet a variable.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 10 to 13', h3: 'Rates and units', p: 'Python with real quantities, per hour and per minute, and the discipline of carrying units through every step.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 13 to 18', h3: 'Tables and charts', p: 'Python on official datasets: loading, cleaning, charting and writing down what the data cannot show.', courses: ['python-complete-masterclass-teens', 'gcse-computer-science-course'] },
      { band: 'Ages 18 to 67', h3: 'Numbers at work', p: 'Spreadsheets, SQL and Python for the reports adults actually produce, with a sceptical eye on averages.', courses: ['data-analysis-mastery-course-college', 'statistics-probability-maths-course'] }
    ]
  },

  ai: {
    eyebrow: 'AI and learning to code',
    h2: 'An AI can apply Little\'s law in a second. Would it tell you the average is the wrong number?',
    intro: 'Usually it will not, unless you already know to ask.',
    p1: 'Give an assistant the Dover table and ask how long the queue is, and a good one will divide the quarter by its hours, apply L = λW correctly and give you a tidy figure. The arithmetic will be right. What it will rarely do unprompted is say that the figure describes an hour nobody has ever queued in, because the question asked for a number and a number was supplied.',
    p2: 'A Kent student who has done this by hand knows what to ask next: over what period is this averaged, when are the peaks, and what data would I need to see them? That habit, asking what a calculation hides as well as what it shows, is the one that separates useful analysis from confident nonsense, whether a person or a machine produced it.',
    closer: 'So a Kent teenager should learn to code in 2026 not to out-calculate a model, but to be the one who reads the model\'s answer and asks what it left out.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Sheerness to Edenbridge without the A2 or the M20',
    intro: 'Kent\'s distances are real, and its roads are busy. Online lessons avoid both.',
    cells: [
      { h3: 'Lessons at home', p: 'A bedroom in Broadstairs, a kitchen in Paddock Wood, a desk in Gravesend. Teacher and learner share a screen and talk it through.' },
      { h3: 'Familiar school terms', p: 'Key Stages, GCSE options, A levels and the words Kent schools use, all in English.' },
      { h3: 'Free first lesson', p: 'A full lesson of real work with a teacher and a plain recommendation afterwards. No card is requested.' },
      { h3: 'Placed with equals', p: 'Five to ten learners at the same stage, drawn from towns and countries far apart, so the level suits everyone.' },
      { h3: 'Your own breaks', p: 'Usually two lessons a week, paused around your school\'s holidays, which in Kent and Medway can vary by council and by school.' },
      { h3: 'Clear about time zones', p: 'Teachers are in India: in summer 4.5 hours ahead of the UK, in winter 5.5 hours. Your timetable always shows UK time.' }
    ],
    spec: { title: 'Why level beats location in Kent', p: 'Forty-eight towns above five thousand people and none above six per cent of the county means no single town fills a class at every level. Grouping by ability lets a Deal learner and a Dartford learner share one.' }
  },

  fees: {
    h2: 'Prices for Kent families',
    intro: 'Every Kent town pays the same, as does every country other than India.',
    first: 'A full lesson of genuine work, followed by a recommended level and course.',
    group: 'Around eight lessons a month in a group of five to ten at one level.',
    private: 'Around eight lessons a month with one teacher for one learner.',
    closer: 'Fees are charged in US dollars, as everywhere outside India, and we have no pound price list. You pay nothing until after the free lesson has fixed a course and a weekly time; the pricing page sets out pauses, missed lessons and changes between group and private.'
  },

  reviewsH2: 'Google reviews from real families',

  book: {
    h2: 'Book a free lesson',
    intro: 'Tell us an age or school year and something the learner likes. The first lesson might be a block-coding game, a first Python rate calculation, or a queue model built from official data.',
    success: 'Thank you. Your Kent request has been received.'
  },

  faq: {
    h2: 'Questions from Kent',
    intro: 'The county, the Dover project and our lessons.',
    items: [
      { q: 'How many people live in Kent?', a: 'At the 2021 Census the twelve Kent districts and Medway held 1,855,844 usual residents between them, from Office for National Statistics data on Nomis. Medway was the largest council at 279,773 and Gravesham the smallest at 106,900.' },
      { q: 'What are the largest towns in Kent?', a: 'By ONS built-up area: Maidstone 109,490, Gillingham 108,480, Ashford 82,140, Chatham 76,955 and Dartford 69,130. Our table lists all forty-eight Kent towns above five thousand residents.' },
      { q: 'How many vehicles go through Dover?', a: 'Department for Transport statistics count 3,830,413 units through Dover in both directions over the four quarters to June 2026, a provisional figure. Units include lorries, trailers and passenger vehicles. July to September 2025 alone had 1,299,856.' },
      { q: 'What is Little\'s law?', a: 'It says the average number waiting equals the arrival rate times the average wait, L = λW. At Dover\'s summer 2025 average of about 300 outbound units an hour, 90 extra seconds each adds about 7.5 vehicles to the average queue.' },
      { q: 'Why does the page say the average is misleading?', a: 'Because the rate averages every hour of the quarter, nights included. Real queues form at peaks, which a quarterly figure cannot show, so the calculation describes a typical hour and not the worst one.' },
      { q: 'When are Kent school holidays?', a: 'Kent County Council and Medway set their own calendars, and academies can differ. We could not read the county council\'s page on 26 September 2026, so we agree breaks with each family.' },
      { q: 'Do you have a classroom in Maidstone or Canterbury?', a: 'No. All lessons are live online, so learners in Sheerness, Tenterden and Tunbridge Wells can share one class with no travelling.' },
      { q: 'What ages do you teach?', a: 'Six to sixty-seven. Block coding for the youngest, typed Python from about ten to twelve, and data, AI, web and software for teenagers and adults. The free lesson fixes the starting point.' },
      { q: 'How much do lessons cost?', a: 'The first is free. Group places then cost USD 100 a month and private lessons USD 150 a month, with no joining fee and no contract term.' },
      { q: 'Do you help with the Kent Test?', a: 'We have separate maths pages for Kent and Medway. This page is about coding, and we give no advice on schools or admissions.' }
    ]
  },

  next: {
    eyebrow: 'Across the country',
    h2: 'Beyond Kent',
    html: 'Read the <a class="cg-inline-link" href="/best-coding-class-in-canterbury">Canterbury</a> page for the city, or cross the boundary into <a class="cg-inline-link" href="/coding-classes-in-surrey">Surrey</a>. <a class="cg-inline-link" href="/coding-classes-in-berkshire">Berkshire</a> and <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">Hertfordshire</a> are the other home counties so far. Everything else is linked from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'WhatsApp our team'
  },

  footerHeading: 'Kent and around',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-canterbury', label: 'Canterbury' },
    { href: '/11-plus-maths-tuition-kent', label: 'Kent Test maths' }
  ],

  personalityCss: `
.cg-root.cg-knc .cg-hero-grid { align-items: stretch; gap: clamp(1.1rem, 3vw, 2.6rem); }
.cg-root.cg-knc .cg-hero h1 { font-weight: 800; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-knc .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-knc .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-knc .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.012em; }
.cg-root.cg-knc .cg-table caption { font-weight: 700; font-style: italic; }
.cg-root.cg-knc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-knc .cg-table th { text-transform: uppercase; letter-spacing: 0.05em; }
.cg-root.cg-knc .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-knc .cg-callout { border-left-width: 8px; border-radius: 0 6px 6px 0; }
`,

  dossier: {
    curriculumAuthority: 'Kent (ceremonial: twelve districts under Kent County Council plus Medway unitary). ONS Census 2021 TS001 via Nomis: Medway 279,773; Maidstone 175,782; Canterbury 157,432; Swale 151,676; Thanet 140,587; Ashford 132,747; Tonbridge and Malling 132,201; Sevenoaks 120,514; Dartford 116,753; Dover 116,410; Tunbridge Wells 115,311; Folkestone and Hythe 109,758; Gravesham 106,900; total 1,855,844 (our sum). ONS Census 2021 built-up areas (published; all 48 agree with our OA sums within rounding): Maidstone 109,490; Gillingham (Medway) 108,480; Ashford 82,140; Chatham 76,955; Dartford 69,130; Rochester 67,285; Margate 63,320; Gravesend 58,105; Canterbury 55,090; Sittingbourne 54,390; Folkestone 51,995; Royal Tunbridge Wells 51,220; Ramsgate 42,030; Dover 36,360; Tonbridge 36,125; Whitstable 32,195; Northfleet 29,900; Deal 28,985; Sevenoaks 26,475; Larkfield 26,150; Broadstairs 25,775; Herne Bay 24,870; Faversham 20,940; Swanley 17,210; Minster (Swale) 16,740; Longfield, New Ash Green and Hartley 16,075; Swanscombe 15,460; Herne 14,875; Hythe 14,620; Sheerness 13,250; Snodland 11,830; Kings Hill 9,970; Southborough 9,630; Hoo St Werburgh 8,760; Hawkinge 8,500; Coxheath 8,455; Bearsted 8,350; Edenbridge 7,900; Rusthall and Langton Green 7,780; Tenterden 7,775; Paddock Wood 7,610; Otford and Kemsing 7,335; Whitfield (Dover) 6,510; Stone (Dartford) 6,440; Staplehurst 6,180; Aylesham 5,785; Pembury 5,785; Littlestone-on-Sea 5,270. DfT PORT0502 (UK major port freight traffic by port, quarterly from 2009; accredited official statistics; last updated 10 September 2026; figures in thousand units; Note 1 "Includes non freight-carrying units such as passenger vehicles and trade motor vehicles"; Note 5 "Data for 2026 is provisional and will be finalised in July 2027"), Dover: units both directions 2025 Q1 760.425, 2025 Q3 1,299.856, four quarters to Q2 2026 3,830.413 (to Q2 2025 3,939.367, change -2.8 per cent); outwards 2019 Q3 751.540, 2025 Q1 389.506, 2025 Q3 663.575.',
    localProject: 'Rates from published totals and Little\'s law. DfT PORT0502 Dover outward units: 2025 Q3 663,575 over 92 days (2,208 hours) = 300.5 an hour; 2025 Q1 389,506 over 90 days (2,160 hours) = 180.3; ratio 1.67; 2019 Q3 751,540 = 340.4, so 2025 Q3 is 11.7 per cent lower. Little\'s law L = lambda W at the Q3 2025 rate: 90 seconds extra per vehicle adds 7.5 vehicles to the average queue (Q1 rate 4.5); 5 minutes 25.0; 15 minutes 75.1. Illustrative check times are ours, not any real policy. Point: the rate averages every hour of the quarter including nights, so it cannot show peak queues; a bunched-arrivals simulation with the same mean shows the average understates the worst hour. AI angle: an assistant computes L = lambda W correctly and does not volunteer that the average hour is not the queued hour. Lesson family: rates from published totals and Little\'s law, averages versus peaks; distinct from Wassenaar (single-server queueing, waiting explodes near full use, toy numbers).',
    requiredMentions: [
      '1,855,844',
      '663,575',
      '389,506',
      '3,830,413',
      'L = λW',
      '7.5 vehicles',
      '2,208 hours',
      'Littlestone-on-Sea',
      'Longfield, New Ash Green and Hartley',
      '1,299,856'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the twelve Kent districts and Medway, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Kent towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22), used to confirm the towns lie inside the county.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'DfT Port Freight Statistics table PORT0502: Dover units by quarter and direction, last updated 10 September 2026.', url: 'https://www.gov.uk/government/statistical-data-sets/port-and-domestic-waterborne-freight-statistics-port' }
    ],
    rejectedClaims: [
      'Kent County Council term dates: the council site returned 403 on 26 September 2026, not retried, so no Kent calendar is printed.',
      'Operation Brock and any named traffic-management scheme: not read at a primary source for this build, so no scheme is named.',
      'Freight-only lorry counts for Dover: PORT0502 units include passenger vehicles, and the freight-only split is in a filter-driven table we did not use, so the page says units, not lorries.',
      'Peak-hour queue lengths or waiting times at Dover: no hourly data was read, and the page says so.',
      'Channel Tunnel traffic at Folkestone: not in the port table and not read elsewhere for this build.',
      'Named Kent schools: the selective schools belong on the 11 plus pages, and none is named here.'
    ]
  }
};
