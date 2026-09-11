'use strict';
// Hoorn: VOC town on the Markermeer, charter dated 26 March 1356/1357,
// 76,202 residents in Hoorn, Zwaag and Blokker.
// Spine (modest, per the Phase 5 method): the encyclopaedia writes the
// charter year as 1356/1357. Double years survive from a time when places
// began the year on different days; Holland ordered the 1 January style
// only in 1580. Dates are still the commonest interchange trap in software:
// 03/04 means April in Hoorn and March in New York.

module.exports = {
  slug: 'coding-classes-in-hoorn',
  code: 'hrn',
  accent: '#00525B',
  accentRationale: 'Hoorn: a deep harbour teal for the VOC town on the Markermeer, placed by the solver nearly twenty-nine units from every page it links to, the Noord-Holland and Amsterdam reds among them, with an unlinked city as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Hoorn',
    eyebrow: 'Hoorn, Noord-Holland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Noord-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Hoorn, Netherlands',
  title: 'Coding Classes in Hoorn | Modern Age Coders',
  description: 'Live online coding, Python, AI and app classes for Hoorn, Zwaag and Blokker, ages 6 to 67, from the Binnenstad to Kersenboogerd. The first lesson is free.',
  ogDescription: 'Live online coding, Python, AI and mathematics in the VOC town of West-Friesland, on a page about the dates software gets wrong.',
  twitterDescription: 'Hoorn classes for learners from 6 to 67, live online, first lesson free of charge.',
  ogImageCourse: 'python-ai-automation-masterclass-college',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Hoorn Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Hoorn, Zwaag and Blokker, taught in English.'
  },

  h1: 'Coding classes in Hoorn, where the town charter is dated 1356/1357',
  capsuleQ: 'What are the best coding classes in Hoorn?',
  capsule: 'Hoorn, with 76,202 residents on 1 January 2026 in the national count, is the old VOC town of West-Friesland: Count Willem V granted its town rights on 26 March 1356/1357, for 1,550 shields, and two skippers of Hoorn named Cape Horn after the ship Hoorn. That double year is not a typing error. For centuries places began the year on different days, and Holland only ordered the year to start on 1 January in 1580, so a spring date could belong to two years depending on who wrote it. Software has the same problem every day: 03/04 is 3 April in Hoorn and 4 March in the United States, and a time without its time zone is only half a time. Live online classes in English run for ages 6 to 67, the first free; a group place then costs USD 100 a month and private lessons USD 150.',
  lead: 'A date looks like the least ambiguous thing in a document, and it is one of the most ambiguous. The encyclopaedia writes Hoorn\'s charter as 26 March 1356/1357 because in the Middle Ages different places started the year on different days, one of them Easter, and a March date could fall in one year by one reckoning and the next year by another. Writers who corresponded across such boundaries sometimes gave both years to be safe. Holland settled the matter for itself in 1580. Computers have never settled it. The same eight characters, 03/04/26, mean one day in the Netherlands and another in the United States; a meeting at nine means nothing without a time zone; a week number depends on which system counts the weeks. Hoorn, whose charter already needs two years to be dated honestly, is a good place to learn that a date is only as clear as the convention written beside it.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Hoorn.',

  picks: {
    eyebrow: 'Course picks for Hoorn',
    h2: 'Four courses for the town of the Hoofdtoren',
    intro: 'A child in Zwaag who wants to build a birthday countdown, a teenager in Kersenboogerd making a booking app, a student in the Binnenstad merging two spreadsheets that write dates differently, and an adult in Blokker whose team schedules meetings with colleagues abroad. Whichever of them it is, the first lesson is free.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Countdowns and calendars in Scratch, where a child discovers that the computer has to be told which number is the day and which the month.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'A booking app that stores every time in one standard form and shows each user their own local date and clock.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python for real date handling: parsing, time zones, daylight saving, week numbers and files from other countries.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Spreadsheets and dashboards checked for dates that were read the wrong way round before any trend is drawn.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Hoorn today',
      h2: 'Three woonplaatsen, a harbour tower, and more water than land',
      intro: 'The municipality takes in three woonplaatsen, Hoorn, Zwaag and Blokker, divided by the statistics office into 15 wijken and 75 buurten, from the Binnenstad and Grote Waal to Risdam, the Kersenboogerd and the Bangert en Oosterpolder. Of its 5,346 hectares only 2,037 are land and 3,308 are water, so about three fifths of the municipality lies under the Markermeer; the published density of 3,733 residents per square kilometre is taken over the land.',
      body: [
        { kind: 'table', caption: 'Hoorn in the encyclopaedia, dates written as given', head: ['Date as written', 'What it records', 'What the notation alone tells you'], rows: [
          ['26 March 1356/1357', 'Count Willem V granted town rights, for 1,550 shields', 'two year numbers for one day'],
          ['1532', 'the Hoofdtoren, the harbour tower', 'one year'],
          ['1606/1610', 'the VOC warehouse of the Hoorn chamber of the company', 'two years again, and nothing to say whether they mark a span or two events'],
          ['1631', 'the facade of the Statencollege, now the Westfries Museum', 'one year']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Cape Horn', p: 'The Hoorn skippers Jacob le Maire and Willem Cornelisz Schouten were the first to round the southernmost point of South America, with the ships Hoorn and Eendracht, and they named it Kaap Hoorn, after the ship and so after the town.' },
          { h3: 'The VOC town', p: 'Hoorn was the seat of one of the chambers of the Verenigde Oostindische Compagnie, and the company\'s warehouse still stands in the town, according to the encyclopaedia\'s list of its monuments.' },
          { h3: 'The steam tram', p: 'A museum steam tram runs between Hoorn and Medemblik, one of the sights the encyclopaedia names alongside the Hoofdtoren and the Westfries Museum.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'A date and its convention',
      h2: 'The same characters, different days',
      intro: 'The first row comes from the encyclopaedia entries for Hoorn and for the Easter style of reckoning the year. The rest are the everyday forms of the same problem in software.',
      body: [
        { kind: 'table', caption: 'Dates that need their convention written beside them', head: ['What is written', 'One reading', 'Another reading', 'What settles it'], rows: [
          ['26 March 1356/1357', 'the year as counted where the year began at Easter', 'the year as counted from 1 January', 'naming the year style, or giving both years'],
          ['03/04/26', '3 April 2026, day first, as in the Netherlands', '4 March 2026, month first, as in the United States', 'writing 2026-04-03, year first'],
          ['09:00', 'nine in the morning in Hoorn', 'nine in the morning wherever the reader is', 'adding the time zone or storing UTC'],
          ['Week 1 of 2027', 'the week with the year\'s first Thursday, the international rule', 'the week containing 1 January, a common alternative', 'naming the week-numbering rule'],
          ['The last Sunday in October', 'a normal day', 'a day with twenty-five hours in Dutch time', 'letting a time library handle daylight saving']
        ] },
        { kind: 'p', text: 'According to the encyclopaedia, in the Easter style the year began at Easter, and the States of Holland ordered in 1580 that the whole province should use the style in which the year begins on 1 January. Dates from other styles are normally converted, the entry says, but sometimes the year is still quoted double, as in 20 February 1491/2, and giving several styles was useful when two people in regions with different year styles corresponded. That is exactly the situation software is in all the time: systems in different places, each with its own convention, exchanging dates that look identical. The page does not claim to know which year style the Hoorn charter itself used; the double year is enough to show that the date cannot be read without a convention.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Hoorn in the national statistics',
      intro: 'Published figures for the municipality with their years, the encyclopaedia history, and at the end the calculations this page makes.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Growth since 1995', p: '61,374 residents in 1995, 71,360 in 2013, 76,036 in 2025 and 76,202 on 1 January 2026. The 2025 count divides into 37,535 men and 38,501 women.' },
          { h3: 'Five age groups, 2026', p: 'Children under fifteen number 11,894, young people from fifteen to twenty-five 8,678, adults from twenty-five to forty-five 19,785 and from forty-five to sixty-five 19,691, and residents aged sixty-five and over 16,154.' },
          { h3: 'Households', p: '35,013 households in 2025, 2.15 people on average: 13,413 single-person households and 21,600 of several people, 12,217 of which have children.' },
          { h3: 'Homes and income', p: '34,994 dwellings, 21,346 owner-occupied and 13,648 rented, with an estimated average value of 365,000 euro in 2025. Income averaged 33,300 euro per resident and 40,400 per income recipient in 2024, and 2.6 percent of residents were in poverty.' },
          { h3: 'Schools and origin', p: '27 primary establishments teach 6,845 pupils, about 254 each, and 9 secondary establishments 7,499, about 833 each; 3,138 MBO students study at institutions in the municipality. In 2025, 54,555 residents were of Dutch origin, 6,577 of European and 14,904 of non-European origin, and 64,081 had been born in the Netherlands.' },
          { h3: 'Arithmetic', p: '76,202 minus 61,374 is 14,828. 3,308 of 5,346 hectares is 62 percent water. 6,845 over 27 is about 254 and 7,499 over 9 about 833. The age, origin, household and tenure groups were totalled only to confirm each is complete.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no relationship with the municipality of Hoorn, the Westfries Museum, the steam tram or any school in West-Friesland, and nothing on the page implies one. The statistics are those published for Hoorn for the years stated. The charter, the Hoofdtoren, the VOC warehouse, the Statencollege, Cape Horn and the steam tram come from the encyclopaedia entry for Hoorn, and the Easter style and the change of 1580 from the entry for the Easter style. The Hoorn entry gives 76,211 residents for 1 January 2026, a different source from the statistics, and the two are kept apart.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Store one form, show many',
      intro: 'Most date bugs come from one of three mistakes: guessing the format, dropping the time zone, or doing date arithmetic by hand. Each has a standard cure.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Store in one standard', p: 'Keep every date as year, month, day in that order, and every moment in coordinated universal time with its offset recorded. Convert to local forms only when showing them to a person.' },
          { h3: '2. Refuse to guess', p: 'When reading dates from a file or a form, require the format to be stated, or reject values that could be read two ways. A date whose day is twelve or less is ambiguous until proven otherwise.' },
          { h3: '3. Let a library do the calendar', p: 'Leap years, month lengths, daylight saving and time zones are solved problems with sharp edges. Use a well-tested date library instead of adding days and hours by hand.' }
        ] },
        { kind: 'table', caption: 'Date bugs and what prevents them', head: ['The bug', 'How it happens', 'What it costs', 'The prevention'], rows: [
          ['Day and month swapped', 'a file from abroad read with the local format', 'appointments a month off, trends drawn from nonsense', 'year-first storage and a declared input format'],
          ['An hour lost or doubled', 'times stored without time zone across a clock change', 'double bookings and missed alarms', 'storing universal time with the offset'],
          ['Text turned into a date', 'a spreadsheet converting codes that look like dates', 'identifiers silently replaced by calendar days', 'importing such columns explicitly as text'],
          ['A leap day forgotten', 'hand-written arithmetic on days and months', 'deadlines and ages that are wrong once every four years', 'a date library for every calculation'],
          ['1356/1357', 'a year counted from different starting days', 'a date that cannot be placed without context', 'naming the convention beside the date']
        ] },
        { kind: 'callout', h3: 'Why AI makes date conventions matter more', p: 'Language models read dates in emails, invoices, contracts and web pages written all over the world, and they turn them into calendar entries, reminders and database rows. They are very good at recognising that something is a date and much less reliable at knowing which convention it was written in. A model that reads 03/04 in a Dutch email as the fourth of March, or schedules a call for nine without asking whose nine, produces a result that looks entirely correct and is simply wrong. Spreadsheets have done a version of this for years, converting codes that happen to look like dates into calendar days without asking. The remedies are unglamorous and effective: store dates in one unambiguous form, carry the time zone with every moment, make any tool, human or AI, state the convention it assumed, and test every date handler with days that could be read two ways. The encyclopaedia\'s 1356/1357 is the same lesson from the fourteenth century: a date that is honest about its ambiguity is better than one that looks certain and is not.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for dates that travel',
      intro: 'For bookings, logs, spreadsheets, imports, schedules and AI tools that read dates. Practised in the town whose charter needs two years.',
      body: [
        { kind: 'table', caption: 'Keeping dates unambiguous from input to screen', head: ['Habit', 'In practice', 'The trap', 'The pay-off'], rows: [
          ['Year first', 'Store and exchange dates as YYYY-MM-DD', 'Day and month read the wrong way round', 'Dates that sort and compare correctly'],
          ['Universal time inside', 'Save moments in UTC with their offset; convert only to display', 'Lost hours at clock changes and across countries', 'One timeline for everyone'],
          ['Declared input formats', 'Name the format of every incoming date, or reject ambiguous ones', 'Silent guesses', 'Imports that fail loudly'],
          ['Library, not hand sums', 'Use a date library for all arithmetic', 'Leap years and month ends done wrong', 'Correct durations and deadlines'],
          ['Ambiguous test dates', 'Test with days of twelve or less and clock-change weekends', 'Bugs that appear only in some months', 'Handlers proven on the hard cases']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A birthday countdown that works for one child and gives nonsense for another. The child finds out that 05/06 means different days to different people and fixes the program to ask.' },
          { h3: 'For teenagers', p: 'Two small files of dates, one written day first and one month first, merged in Python. The teenager finds the rows that went wrong and rebuilds the merge on one standard format.' },
          { h3: 'For adults', p: 'A shared calendar or report checked across a clock change and a colleague in another time zone. Adults often find at least one meeting or total that has been an hour or a day out for months.' }
        ] },
        { kind: 'p', text: 'This section uses the encyclopaedia\'s dating of the Hoorn charter and its account of the Easter style, together with standard practice in software. It makes no claim about which year style the charter itself was written in.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a birthday countdown to dates that cross time zones',
    intro: 'Where each learner starts is decided during the free lesson, watching them on a real task. Being from Zwaag or Blokker does not decide it, and neither does age alone.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Which is the day?', p: 'Children learn that a computer must be told which number is the day.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Year first', p: 'Learners store dates year first and see why they then sort properly.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Two files, two formats', p: 'Teenagers merge date files written in different conventions.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Time zones', p: 'Adults build schedules that stay right across clocks and borders.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will turn any email into a calendar entry. Why should a teenager in Hoorn check which date it chose?',
    intro: 'Because the town\'s own charter shows that a date without its convention can mean two different days.',
    p1: 'Assistants that read messages and fill in calendars are everywhere now. They recognise dates very well and choose conventions silently: day first or month first, the sender\'s time zone or the reader\'s, this week\'s numbering or another. When the choice is wrong nothing looks wrong. The entry is neat, the time is precise, and the meeting is on the wrong day. The same silent choice happens when AI tools extract dates from documents into databases, where a swapped day and month becomes a fact that later analysis builds on.',
    p2: 'A learner who has merged two files written in different date formats, and watched a clean-looking result hide a month of errors, never trusts an unlabelled date again. Storing one standard form, carrying the time zone and insisting that any tool state the convention it assumed are small rules a person has to set. The model will read the date. Making sure it read the right one is a human job.',
    closer: 'So the case for a child in Hoorn learning to code in 2026 is not the VOC or the harbour tower. It is that someone who asks which convention a date was written in will be needed wherever AI reads the world\'s paperwork and turns it into schedules.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'The same class in Hoorn, Zwaag and Blokker',
    intro: 'The municipality stretches from the harbour to the villages of Zwaag and Blokker, and a class that starts at home reaches every part of it equally.',
    cells: [
      { h3: 'From home in any of the three', p: 'A learner in Blokker and a learner by the harbour open the same class at the same minute, each at home, with no ride through West-Friesland in the evening.' },
      { h3: 'Dutch school labels as they are', p: 'Brugklas, groep, vmbo, havo, vwo and the profielkeuze keep their Dutch names, as Hoorn schools use them, and everything around them is taught in English.' },
      { h3: 'A first lesson that is a lesson', p: 'The free session works through a real task. Afterwards the teacher proposes a level, a course and a weekly time; no card is asked for and nothing is owed.' },
      { h3: 'A group at the right stage', p: 'Five to ten learners at one point in one subject. The municipality has 11,894 residents under fifteen, but a matching five, free at the same hour, is rare, so a group may include learners from other countries.' },
      { h3: 'Regio Noord weeks off', p: 'Two classes a week, about eight a month, in one fixed slot, pausing for the regio Noord holidays that Noord-Holland schools keep.' },
      { h3: 'Clocks three or four hours apart', p: 'The teachers work from India, three and a half hours ahead of Hoorn in summer and four and a half in winter, so after-school, evening and weekend-morning slots are all practical.' }
    ],
    spec: { title: 'Thirty-six schools, three woonplaatsen, and one group online', p: 'Hoorn has 27 primary establishments teaching 6,845 pupils and 9 secondary establishments teaching 7,499. Five learners who match on subject, stage and hour at once are far easier to find across every age from 6 to 67 and many countries than within one municipality.' }
  },

  fees: {
    h2: 'What Hoorn families pay',
    intro: 'Three prices, set out in full.',
    first: 'A real lesson on a real task, ending with a level and the course that fits.',
    group: 'Per month, normally eight lessons, five to ten learners at the same level.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'The fee is a single dollar amount for every country, with no euro list alongside it, so a household in Zwaag pays what a household in the Binnenstad pays. Nothing is charged until the free lesson has fixed a course and a slot, and payment is arranged on WhatsApp after that. The pricing page explains pauses, a change of format and missed lessons.'
  },

  reviewsH2: 'Six Google reviews, word for word',

  book: {
    h2: 'How far has the learner come?',
    intro: 'The first task might be a birthday countdown that asks which number is the day, two date files merged into one format, or a small schedule that survives a clock change.',
    success: 'Thank you. Your Hoorn class request has been sent.'
  },

  faq: {
    h2: 'Hoorn coding class questions',
    intro: 'The town, its dates, its harbour, and the lessons.',
    items: [
      { q: 'What does the municipality of Hoorn include?', a: 'Three woonplaatsen, Hoorn, Zwaag and Blokker, which the statistics office divides into 15 wijken and 75 buurten, among them the Binnenstad, Grote Waal, Risdam, the Kersenboogerd and the Bangert en Oosterpolder.' },
      { q: 'How many people live in Hoorn?', a: 'The national count was 76,202 on 1 January 2026, in 35,013 households in 2025. In 1995 it was 61,374.' },
      { q: 'Why is the Hoorn charter dated 1356/1357?', a: 'The encyclopaedia gives the date as 26 March 1356/1357, when Count Willem V granted town rights for 1,550 shields. Double years appear because places once began the year on different days; in Holland the States ordered in 1580 that the year should begin on 1 January throughout the province.' },
      { q: 'Is Cape Horn named after Hoorn?', a: 'Yes. According to the encyclopaedia, the Hoorn skippers Jacob le Maire and Willem Cornelisz Schouten were the first to round the southernmost point of South America, with the ships Hoorn and Eendracht, and named it Kaap Hoorn.' },
      { q: 'What is the Hoofdtoren?', a: 'The harbour tower of Hoorn, dated 1532 in the encyclopaedia, one of the town\'s best-known monuments alongside the VOC warehouse and the Statencollege, which houses the Westfries Museum.' },
      { q: 'How many schools does Hoorn have?', a: 'The statistics count 27 primary establishments teaching 6,845 pupils and 9 secondary establishments teaching 7,499, with 3,138 MBO students at institutions in the municipality. No school is rated here.' },
      { q: 'Are the classes in English, and when are they held?', a: 'Yes, in English, with Dutch school terms such as brugklas, havo and vwo left untranslated. The teachers are in India, three and a half hours ahead of Hoorn in summer and four and a half in winter, so late-afternoon, evening and weekend times are straightforward. The slot is agreed in the free lesson, and the regio Noord holidays are kept.' },
      { q: 'Is there a Modern Age Coders classroom in Hoorn?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Hoorn coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Noord-Holland and beyond',
    h2: 'Across West-Friesland, down to Amsterdam, and up to the hub',
    html: 'The capital has its own page, with district pages beneath it, at <a class="cg-inline-link" href="/coding-classes-in-amsterdam">coding classes in Amsterdam</a>. Closer by, <a class="cg-inline-link" href="/coding-classes-in-alkmaar">Alkmaar</a> and <a class="cg-inline-link" href="/coding-classes-in-purmerend">Purmerend</a> have pages too, and every municipality in the province is listed on <a class="cg-inline-link" href="/coding-classes-in-noord-holland">Noord-Holland</a>. Learners who want to begin with machine learning can go straight to the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the whole series is on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Hoorn, Noord-Holland and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-amsterdam', label: 'Amsterdam' },
    { href: '/coding-classes-in-noord-holland', label: 'Noord-Holland' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-hrn .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 2.8vw, 2.3rem); }
.cg-root.cg-hrn .cg-hero h1 { font-weight: 670; letter-spacing: -0.021em; line-height: 1.06; }
.cg-root.cg-hrn .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1.2rem; }
.cg-root.cg-hrn .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hrn .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.014em; }
.cg-root.cg-hrn .cg-grid-3 { gap: clamp(1rem, 2.3vw, 1.85rem); }
.cg-root.cg-hrn .cg-card { border-radius: 8px; border-left: 3px solid var(--cg-accent-soft); }
.cg-root.cg-hrn .cg-table caption { letter-spacing: 0.035em; font-weight: 700; }
.cg-root.cg-hrn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hrn .cg-table td:first-child { font-weight: 700; }
.cg-root.cg-hrn .cg-ladder-col { border-top: 3px solid var(--cg-accent-soft); padding-top: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Hoorn, Noord-Holland: 76,202 residents (statistics, 1 January 2026), 76,036 (2025), 71,360 (2013), 61,374 (1995); 37,535 men and 38,501 women (2025); ages (2026) 11,894 under fifteen, 8,678 fifteen to twenty-five, 19,785 twenty-five to forty-five, 19,691 forty-five to sixty-five, 16,154 sixty-five or over; 35,013 households (2025) averaging 2.15, 13,413 one-person, 21,600 multi-person, 12,217 with children; 5,346 hectares, 2,037 land, 3,308 water, published density 3,733; 34,994 dwellings (2025), 21,346 owner-occupied at 61 percent, 13,648 rented at 39 percent; estimated average value 365,000 euro; income 33,300 euro per resident and 40,400 per recipient (2024); 2.6 percent in poverty; origin (2025) 54,555 Dutch, 6,577 European, 14,904 non-European, 64,081 born in the Netherlands; 3 woonplaatsen, 15 wijken (including Binnenstad, Venenlaan-kwartier, Hoorn-Noord, Grote Waal, Risdam-Zuid, Risdam-Noord, Nieuwe Steen, Zwaag, Blokker, Kersenboogerd-Noord, Kersenboogerd-Zuid, Hoorn 80, Bangert en Oosterpolder), 75 buurten; 27 primary establishments with 6,845 pupils and 9 secondary with 7,499; 3,138 MBO students at institutions. Encyclopaedia (Hoorn): on 26 March 1356/1357 Willem V granted town rights for 1,550 shields; the Hoorn chamber of the VOC and the VOC warehouse (1606/1610); Jacob le Maire and Willem Cornelisz Schouten of Hoorn, with the ships Hoorn and Eendracht, first rounded the southernmost point of South America and named it Kaap Hoorn; the Hoofdtoren (1532); the Statencollege, now the Westfries Museum (facade 1631); the museum steam tram Hoorn-Medemblik; infobox 76,211 on 1 January 2026 and 53.46 square kilometres, not combined with the statistics. Encyclopaedia (Paasstijl): in the Easter style the year begins at Easter; in 1580 the States of Holland ordered the New Year style for the whole province; dates in other styles are usually converted but are sometimes quoted double, as in 20 February 1491/2, which was useful when correspondents lived under different year styles. Regio Noord holidays. The city page teaches date conventions.',
    localProject: 'A date is only as clear as the convention beside it. The encyclopaedia dates Hoorn\'s charter 26 March 1356/1357; year styles once differed (in the Easter style the year began at Easter, and the States of Holland ordered the 1 January style only in 1580), and double years were given when correspondents used different styles. The page does not claim which style the charter used, and notes that the VOC warehouse date 1606/1610 uses the same notation with no indication of its meaning. The programming form is date conventions: day-first against month-first (03/04), times without time zones, week-numbering rules, daylight-saving days with twenty-five hours, spreadsheets turning codes into dates, and AI tools that choose a convention silently when reading emails and documents. The defences are year-first storage, universal time with offsets inside and conversion only for display, declared input formats with rejection of ambiguous values, a date library for all arithmetic, and tests with days of twelve or less and clock-change weekends. Chosen after a case-sensitive check found no page using ISO 8601, date formats or year styles. Distinct from Den Bosch, whose Julian-annotated dates serve a cross-field validation argument, from Tongelre, which asks which event a date belongs to, from Drenthe, which concerns ranges and the missing year zero, and from Heerlen, which concerns where a series begins.',
    requiredMentions: [
      '61,374',
      '71,360',
      '35,013',
      '13,413',
      '12,217',
      '34,994',
      '21,346',
      '13,648',
      '6,845',
      '7,499',
      '16,154',
      'Hoofdtoren',
      'Kersenboogerd',
      'Risdam'
    ],
    sources: [
      { claim: 'Gemeente Hoorn: 76,202 inwoners (2026), 76,036 (2025), 71,360 (2013), 61,374 (1995); mannen 37,535, vrouwen 38,501; ages 0-15 11,894, 15-25 8,678, 25-45 19,785, 45-65 19,691, 65+ 16,154; 35,013 huishoudens, 13,413 eenpersoons, 21,600 meerpersoons, 12,217 met kinderen, gemiddeld 2.15 (2025); 5,346 hectare, land 2,037, water 3,308; bevolkingsdichtheid 3,733; woningvoorraad 34,994, koop 21,346 (61 percent), huur 13,648 (39 percent) (2025); gemiddelde WOZ 365,000 euro; herkomst Nederlands 54,555, Europees 6,577, buiten-Europees 14,904, geboren in Nederland 64,081 (2025); basisonderwijs 27 vestigingen 6,845 leerlingen, voortgezet onderwijs 9 vestigingen 7,499 leerlingen, MBO 3,138; gemiddeld inkomen per inwoner 33,300 and per inkomensontvanger 40,400 euro (2024); personen in armoede 2.6 percent; 3 woonplaatsen, 15 wijken, 75 buurten.', url: 'https://allecijfers.nl/gemeente/hoorn/' },
      { claim: 'Hoorn (encyclopaedia): Op 26 maart 1356/1357 verleende Willem V stadsrechten aan Hoorn, tegen betaling van 1550 schilden. Kamer Hoorn Verenigde Oostindische Compagnie, VOC Pakhuis (1606/1610). De Hoornse schippers Jacob le Maire en Willem Cornelisz Schouten rondden met de schepen Hoorn en Eendracht als eersten de zuidelijkste punt van Zuid-Amerika, en noemden deze Kaap Hoorn. Hoofdtoren (1532). Statencollege (Westfries Museum) (gevel 1631). Museumstoomtram Hoorn-Medemblik. Infobox: 76.211 inwoners (1 jan 2026), 53,46 km2.', url: 'https://nl.wikipedia.org/wiki/Hoorn_(Noord-Holland)' },
      { claim: 'Paasstijl (encyclopaedia): In de Paasstijl begint het jaar bij het belangrijkste christelijke feest, Pasen. In Holland verordonneerden de Staten van Holland in 1580 dat in het hele gewest de Nieuwjaarsstijl moest worden ingevoerd. Het is gebruikelijk om data uit het verleden in andere jaarstijlen om te rekenen naar 1-januaristijl. Soms wordt het jaartal toch dubbel geciteerd, bijvoorbeeld: 20 feb 1491/2. Het noemen van meerdere stijlen was handig wanneer twee mensen in streken met verschillende jaarstijlen met elkaar correspondeerden.', url: 'https://nl.wikipedia.org/wiki/Paasstijl' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland and Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Which year style the Hoorn charter was written in, or which of 1356 and 1357 is the modern year. The sources read do not say.',
      'What the VOC warehouse date 1606/1610 means. The source prints it without explanation.',
      'The year Cape Horn was named. Not in the sentence read.',
      'Any account of Jan Pieterszoon Coen or his statue. Beyond the scope of a page about dates, and the sources read give only his birthplace and the statue\'s year.',
      'Any comment on the absence of higher-education students in the row. Reading the next column is the Westland argument.',
      'Any comparison of the encyclopaedia figure of 76,211 with the statistics figure of 76,202. Two sources that disagree is the Breda argument.',
      'Anything the Amsterdam, Alkmaar, Purmerend and Noord-Holland pages own, including their figures and arguments.'
    ]
  }
};
