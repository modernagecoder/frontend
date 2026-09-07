'use strict';
// Zaanstad: seven municipalities merged into one in 1974, so the name on the
// chart is younger than most of the people under it. Spine: an entity created
// by a merger has no history, and a series drawn across the merger is about a
// territory rather than about the thing the label names.

module.exports = {
  slug: 'coding-classes-in-zaanstad',
  code: 'zns',
  accent: '#70322B',
  accentRationale: 'Zaanstad: an oxide red for the painted timber of the Zaan houses, set by the solver apart from Eindhoven\'s rust and Zoetermeer\'s brick',
  pageType: 'city',
  place: {
    name: 'Zaanstad',
    eyebrow: 'Zaanstad, Noord-Holland',
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
  routeLabel: 'Zaanstad, Netherlands',
  title: 'Coding Classes in Zaanstad and Zaandam | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Zaanstad for ages 6 to 67, in Zaandam, Krommenie, Wormerveer, Assendelft and Zaandijk. First lesson free.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families across the seven old towns of Zaanstad, built on what happens to a data series when seven things become one.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'mysql-database-complete-masterclass-college',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Zaanstad Learners',
    description: 'Ability-placed online coding, Python, databases, AI and mathematics for children, teenagers and adults in Zaandam, Krommenie, Wormerveer, Assendelft, Zaandijk, Koog aan de Zaan and Westzaan, taught in English.'
  },

  h1: 'Coding classes in Zaanstad, a city with 165,201 residents and a name that is younger than most of them',
  capsuleQ: 'What are the best coding classes in Zaanstad?',
  capsule: 'Coding classes in Zaanstad serve 165,201 people (Statistics Netherlands, 1 January 2026) across seven towns that were seven separate municipalities until 1974: Zaandam, Assendelft, Krommenie, Wormerveer, Zaandijk, Koog aan de Zaan and Westzaan. Any chart of Zaanstad before 1974 is a chart of something that did not exist, and the honest reconstruction is a sum of seven predecessors rather than a measurement of one place. Modern Age Coders teaches live online in English to all of them, ages 6 to 67, with a free first lesson and then USD 100 a month in a group of five to ten or USD 150 with a teacher alone.',
  lead: 'Ask a spreadsheet for Zaanstad\'s population in 1970 and it will either return nothing or return a number somebody constructed. Zaanstad did not exist in 1970. Seven municipalities merged in 1974 and the new name took their combined territory, so a line on a chart that runs back past 1974 is describing land, not a council, and certainly not an institution with a continuous history. Knowing which of those three a series is about, and refusing to draw a line across the join without saying so, is a skill nobody teaches and everybody needs.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Zaanstad.',

  picks: {
    eyebrow: 'Course picks for Zaanstad',
    h2: 'Four courses for seven towns along one river',
    intro: 'A groep 5 child in Krommenie, a teenager in Wormerveer who wants the database to make sense before the framework does, a student in Zaandam commuting to Amsterdam, and a parent in Assendelft whose reporting spans a company reorganisation: four doors along the Zaan.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch from an empty stage to a real game in three months, in English, for the groep 3 to 6 child in Westzaan or Koog aan de Zaan.' },
      { course: 'mysql-mastery-for-teens', band: 'Ages 13 to 17', note: 'SQL from a first query to real applications, for the teenager who wants to understand where the data actually lives.' },
      { course: 'mysql-database-complete-masterclass-college', band: 'College and adult', note: 'Database design, keys and administration done properly, for the student or working adult who has inherited somebody else\'s schema.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Excel, SQL, Python and BI, for the parent whose year-on-year comparisons cross a reorganisation nobody adjusted for.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Zaanstad today',
      h2: 'Seven towns, one municipality since 1974, and Europe\'s oldest industry',
      intro: 'The national register held 165,201 people on 1 January 2026, in 73,883 households averaging 2.17 people, on 73.74 square kilometres of land inside 83.24 of territory: a published 2,208 residents to the square kilometre. In 1995, twenty-one years after the merger, the count was 133,504, so Zaanstad has gained 31,697 people since, a rise of 24 percent.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A working city with children in it', p: '26,287 residents are under fifteen, 16 percent, and 18,898 are between fifteen and twenty-five; 45,378 are between twenty-five and forty-five and 31,017 are sixty-five or over. 28,004 households hold one person, 38 percent. This is a city of families within twenty minutes of Amsterdam, and the age profile shows it.' },
          { h3: 'Schools spread along the river', p: '46 primary establishments teach 13,704 pupils and 13 secondary establishments teach 8,687. The municipality reports 3,370 residents in applied higher education and 1,490 at university level, most of whom study elsewhere and travel.' },
          { h3: 'Mills, then food', p: 'The Zaanstreek is described in one entry as the oldest industrial area in Europe and in another as one of the oldest, and this page prints both descriptions rather than choosing. What followed the mills were the food companies: Verkade, Honig, Duyvis, Bruynzeel and the firm that became Ahold.' }
        ] },
        { kind: 'spec', title: 'Seven councils became one on the first of January', p: 'In 1974 Assendelft, Krommenie, Wormerveer, Westzaan, Zaandijk, Koog aan de Zaan and Zaandam were merged into the new municipality of Zaanstad. Zaandam, which had held city rights since 1811, is now simply the largest of the seven towns, at 80,705 in 2023. Wormer and Oostzaan stayed outside and are separate municipalities to this day.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'The seven towns, with the populations their own entry publishes',
      intro: 'These are 2023 figures from the municipal entry, listed in the order the merger records them. The eighth name below was not one of the seven councils; it is a small settlement inside the municipality.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Zaandam, 80,705', p: 'The largest of the seven and just over half the municipality, with the station on the line into Amsterdam, the painted timber of the centre and most of the secondary schools.' },
          { h3: 'Assendelft, 24,510', p: 'West of the river towards the dunes, the most rural of the seven and the one with the longest journey to anywhere else in the municipality on a dark evening.' },
          { h3: 'Krommenie, 17,010', p: 'North, on the old road towards Alkmaar, with its own centre, its own primary schools and a strong sense of not being Zaandam.' },
          { h3: 'Wormerveer, 12,145', p: 'On the east bank facing Wormer, which stayed out of the merger. A working town of mills and then factories, and a place where the municipal boundary runs down the water.' },
          { h3: 'Koog aan de Zaan, 11,230, and Zaandijk, 8,485', p: 'The two middle towns on the west bank, side by side, with the Zaanse Schans between Zaandijk and the river. Founded in 1963, the Schans holds twelve mills and drew 2.6 million visitors in 2024.' },
          { h3: 'Westzaan, 5,085, and Westknollendam, 450', p: 'The smallest of the seven and the smallest settlement in the municipality. A village school, a hall, and no realistic chance of an after-school coding club forming locally.' }
        ] },
        { kind: 'p', text: 'The class reaches all of them at one hour and on one fee, and which of the seven a learner lives in has never affected placement.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure and its source, including two counts of the same mills',
      intro: 'The national count, the municipal entry, the regional entry, and the places where the two do not say the same thing.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands, provisional, 1 January 2026: 165,201 residents; 73,883 households averaging 2.17 people, 28,004 of them single-person, 38 percent; 26,287 under fifteen; 18,898 aged fifteen to twenty-five; 45,378 aged twenty-five to forty-five; 31,017 aged sixty-five and over; 46 primary establishments with 13,704 pupils and 13 secondary with 8,687; 3,370 residents in applied higher education and 1,490 at university level; total area 8,324 hectares, land 7,374; density 2,208; 19 wijken and 79 buurten; 133,504 residents in 1995, a rise of 31,697.' },
          { h3: 'The municipality, described', p: 'Its own entry: 165,235 residents on 1 January 2026, 34 more than the national figure for the same date, both kept; 83.24 square kilometres, 73.87 of land and 9.37 of water, against 73.74 of land nationally, both kept; mayor Jan Hamming; the fifteenth municipality of the Netherlands; formed in 1974 by the merger of Assendelft, Krommenie, Wormerveer, Westzaan, Zaandijk, Koog aan de Zaan and Zaandam.' },
          { h3: 'The seven towns, 2023', p: 'From the same entry: Zaandam 80,705; Assendelft 24,510; Krommenie 17,010; Wormerveer 12,145; Koog aan de Zaan 11,230; Zaandijk 8,485; Westzaan 5,085; Westknollendam 450. Those eight figures total 159,620 against a 2026 municipal figure of 165,201, and the two carry different dates, which this page does not paper over.' },
          { h3: 'Zaandam before Zaanstad', p: 'Zaandam received city rights in 1811. Zaanstad, as a legal entity, dates only from 1974. The distinction between those two dates is the whole subject of the project below.' },
          { h3: 'The mills, counted two ways', p: 'One entry states that at the peak, in the middle of the seventeenth century, more than 900 mills were counted; another states that around 1720 some 600 were in operation simultaneously, with roughly 1,100 built across all time. About fifteen industrial mills remain. Both accounts are printed here and neither is preferred, because they describe different quantities at different dates.' },
          { h3: 'The Zaanse Schans', p: 'Founded in 1963; houses and mills were moved there from their original sites; twelve mills stand on the site; visitors numbered 2.6 million in 2024, against 2.2 million in 2017 and 1.8 million in 2016.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, the Zaanse Schans, any company named here or any school, and claims none. They appear because a page that says it teaches Zaanstad should know when Zaanstad began.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A chart that starts before its subject: build the series that admits where the entity begins',
      intro: 'One municipality, one founding year, seven predecessors, and three different things a line on a chart could be describing.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Ask what the label names', p: 'Zaanstad is three things at once and they have different birthdays. A legal entity, created in 1974. A territory, which existed before under seven names. A population, which lived there throughout. Only the first has a start date, and only the first is what most databases mean by a row.' },
          { h3: '2. Try to build the back series', p: 'The learner reconstructs pre-1974 Zaanstad by summing its seven predecessors, and immediately hits the questions that matter: were the boundaries identical, did any land come from municipalities that are not on the list, and does the sum describe the same ground in 1960 as in 1973. Nothing here is unanswerable, but nothing is free either, and the result is a reconstruction rather than an observation.' },
          { h3: '3. Mark the join, always', p: 'The rule the learner writes into the plot is simple and unusual: draw the line, and put a visible break at 1974 with a note saying what changed. A series that hides its discontinuity will be read as growth, and the growth in 1974 was administrative, not human.' }
        ] },
        { kind: 'table', caption: 'One name, three subjects, and what each can honestly be said about', head: ['What the label refers to', 'Exists since', 'Can a pre-1974 value be measured?', 'Can one be reconstructed?'], rows: [
          ['The municipality of Zaanstad', '1974', 'no, the entity did not exist', 'not meaningfully; a council has no back history'],
          ['The territory now inside its boundary', 'long before', 'not directly, it was seven jurisdictions', 'yes, by summing the seven, with boundary caveats'],
          ['The people living on that ground', 'long before', 'yes, but recorded under seven other names', 'yes, and this is usually what is wanted'],
          ['The town of Zaandam', 'city rights 1811', 'yes, as itself', 'not needed, it is continuous']
        ] },
        { kind: 'callout', h3: 'A merger creates a new row, not a longer one', p: 'When two or three or seven things become one, the database gains an identifier that has no past, and every analyst who wants a long series is tempted to give it one. Sometimes that is legitimate, when the subject is really the territory or the population and the label is only a convenience. Sometimes it is not, when the subject is the institution itself, and then a pre-merger value is a fiction with a decimal point. The discipline is to say in one sentence, before drawing anything, which of the three the series is about, and then to mark the join on the chart so the reader can see the seam. A learner who has done this once with a municipality will do it with a company after an acquisition and a school after an amalgamation, and will be the one who asks whether the jump in the series was people or paperwork. The table was built from the founding dates and the merger list published in the sources named above.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any series that crosses a reorganisation',
      intro: 'Companies acquire each other, schools amalgamate, regions are redrawn, departments are split and re-merged, and every one of those events puts a seam in a data series that nobody labels. Practised on the seven councils that became this one.',
      body: [
        { kind: 'table', caption: 'When the thing being measured changed shape', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['State the subject', 'Say whether the series is about an entity, a territory or a population', 'Three different questions answered as one', 'A series with a defined meaning'],
          ['Find the founding date', 'Look up when the identifier came into existence before plotting', 'A 1970 value for a 1974 entity', 'A start point you can defend'],
          ['List the predecessors', 'Name every unit folded in, and every unit that stayed out', 'Wormer and Oostzaan quietly included', 'A reconstruction that can be checked'],
          ['Mark the seam', 'Break the line, or annotate it, wherever the definition changed', 'Administrative growth read as real growth', 'A chart that cannot mislead'],
          ['Keep both versions', 'Publish the entity series and the reconstructed territory series side by side', 'One convenient story', 'A reader who can choose the right one']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Seven small jars of marbles are tipped into one big jar and given a new label. The child is asked how many marbles the big jar had last week. The answer is that the big jar did not exist last week, and then the harder question: could you work it out anyway, and what would you need to know? Ten minutes, and the idea is permanent.' },
          { h3: 'For teenagers', p: 'A small table in Python with a valid-from date on every entity, a plotting function that refuses to draw a line before that date, and a second function that builds a reconstructed series from named predecessors and labels it as reconstructed. The stretch: what would the chart look like if Wormer and Oostzaan had joined too?' },
          { h3: 'For adults', p: 'The same treatment on a series at work that crosses a restructure: a region merged, a product line renamed, two teams combined. Adults usually find a chart in current use whose most dramatic movement is the reorganisation itself.' }
        ] },
        { kind: 'p', text: 'The population, household, area, school, town and mill figures come from the offices and entries named beside them, with their own dates. The sum of 159,620 is this page adding the eight published town figures, which carry a different date from the municipal total, and the page says so rather than treating the difference as a finding.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From seven jars of marbles to a plot that refuses to draw before a founding date',
    intro: 'The starting rung comes out of the free hour, and which of the seven towns the learner lives in is not part of it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'The jar that did not exist', p: 'Children pool seven jars into one and work out what can and cannot be said about last week.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Things with start dates', p: 'Learners give every record a valid-from date and see which questions stop being answerable.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Reconstructions, labelled as such', p: 'Teenagers build a back series from predecessors and mark the seam on the chart.', courses: ['mysql-mastery-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Series across a restructure', p: 'Adults find a working chart whose biggest jump is a reorganisation and rebuild it honestly.', courses: ['mysql-database-complete-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will plot Zaanstad back to 1900 if you ask it. Why should a child here learn to stop at 1974?',
    intro: 'Because the numbers before that line describe seven other places, and the chart will not say so.',
    p1: 'Give a tool a population series and ask for a chart and you will get one, running as far back as the data goes. If the underlying figures were re-aggregated onto today\'s boundaries, which is what statistical offices routinely do, the line is perfectly real as a description of territory and quite misleading as a description of a municipality. The tool cannot see the difference, because the difference is not in the numbers. It is in what the row is supposed to be about.',
    p2: 'So the learner writes the version that carries a founding date on every entity and refuses to plot before it, and a separate function that builds the reconstruction and labels it. This is a modelling decision rather than a coding trick, and it is the sort of decision that quietly determines whether a chart informs or misleads. A thirteen-year-old in Krommenie who has done it once will ask, of a revenue series at twenty-three, whether the company acquired anybody during it. The tools will keep getting better at drawing lines. Deciding what the line is about will stay a person\'s job.',
    closer: 'The case for a Zaanstad child learning to code in 2026 is therefore not about local government. It is that mergers, renames and restructures put invisible seams into almost every long series in working life, that a chart drawn across a seam without a mark on it will be believed, and that learning to put the mark there is best done on the seven councils that became the town outside the window.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for seven towns strung along one river',
    intro: 'Assendelft to Krommenie is a proper journey, Wormerveer faces a municipality it is not part of, and the river separates the two banks more than the map suggests. None of that touches a lesson delivered over the connection.',
    cells: [
      { h3: 'Nobody crosses the Zaan for it', p: 'The lesson happens at the kitchen table in Westzaan, Zaandijk or Assendelft at one fixed hour a week, in the dark months as easily as in June.' },
      { h3: 'The lesson is English; the school words are not', p: 'Instruction happens in English. Terms a Dutch school uses stay Dutch on purpose, so a teacher says groep, havo, vwo or profielkeuze rather than reaching for an equivalent.' },
      { h3: 'What comes out of the first hour', p: 'A piece of work that shows the real level, the name of a course that follows from it, and a slot in the week, arranged without any payment details.' },
      { h3: 'Stage decides the group', p: 'Two learners at the same point work together whether one is in Wormerveer and the other in Zaandam, and two at different points do not, however close their front doors are.' },
      { h3: 'A fixed slot twice weekly, around the northern holidays', p: 'Two lessons every week, which is eight in most months. School holidays here follow regio Noord, as across Noord-Holland, and weeks away are written into the schedule before a time is confirmed.' },
      { h3: 'Winter puts an extra hour between the two countries', p: 'India never adjusts its clocks and the Netherlands does, so the teacher sits four and a half hours ahead from late October and three and a half from late March. Slots run from the end of the school day into the evening, with both weekend days open.' }
    ],
    spec: { title: 'A municipality that is used to being several things at once', p: 'Fifty years after the merger, people here still say Krommenie or Wormerveer before they say Zaanstad, and the schools carry the older names. A class that arrives at the house rather than in a building sidesteps the question of whose town it belongs to, which in this municipality is not a small advantage.' }
  },

  fees: {
    h2: 'One dollar tariff for all seven towns',
    intro: 'On the page, so that nobody has to ask for it.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'Outside India there is a single price and it is quoted in dollars; no euro list exists, so Westknollendam and Zaandam are quoted identically. Nothing is collected until the free lesson has settled a course and a time, and then it goes through WhatsApp. Pausing, switching plan and missing a week are all covered on the pricing page.'
  },

  reviewsH2: 'What six families wrote on Google, unedited',

  book: {
    h2: 'Start with the level; the town can follow',
    intro: 'The first task might be seven jars of marbles poured into one, a plotting function that refuses to draw before a founding date, or a revenue chart from work whose sharpest jump turns out to be an acquisition.',
    success: 'Thank you. Your Zaanstad class request has been sent.'
  },

  faq: {
    h2: 'Zaanstad coding class questions',
    intro: 'The municipality, its seven towns, its history, the teaching and the terms.',
    items: [
      { q: 'Why does this page say Zaanstad has no history before 1974?', a: 'Because the municipality was created in that year by merging seven councils: Assendelft, Krommenie, Wormerveer, Westzaan, Zaandijk, Koog aan de Zaan and Zaandam. The towns and the people are far older, and Zaandam has held city rights since 1811, but the entity named Zaanstad dates from 1974. A population series drawn back past that year is describing territory or people, not the municipality, and building the version that says which is the project on this page.' },
      { q: 'Which towns does the class cover?', a: 'All of them: Zaandam, Assendelft, Krommenie, Wormerveer, Koog aan de Zaan, Zaandijk, Westzaan and the small settlement of Westknollendam. Wormer and Oostzaan stayed out of the 1974 merger and are separate municipalities, so they are not part of this page.' },
      { q: 'How many windmills were there in the Zaanstreek?', a: 'It depends which question is being asked, and the sources answer different ones. One entry says more than 900 were counted at the peak in the middle of the seventeenth century; another says around 600 were in operation simultaneously around 1720, with roughly 1,100 built across all time. About fifteen industrial mills remain, and twelve stand at the Zaanse Schans, which was created in 1963 by moving buildings there from elsewhere. This page prints all of those and combines none of them.' },
      { q: 'Is any of this taught in Dutch?', a: 'No. Lessons run in English throughout. Dutch school vocabulary is kept, so groep, havo, vwo and profielkeuze are spoken as the child hears them at school, but no Dutch-language version of the course exists.' },
      { q: 'What time are classes for a family in Zaanstad?', a: 'From late March the teacher runs three and a half hours ahead, and from late October four and a half, because only one of the two countries changes its clocks. That leaves everything between the end of school and mid-evening, plus the whole weekend, and one weekly time is agreed at the free lesson and then left alone.' },
      { q: 'We are in Assendelft or Westknollendam. Does the class reach that far?', a: 'It reaches every address in the municipality at the same hour and the same fee. Assendelft is the most rural of the seven and Westknollendam had about 450 residents in 2023, and neither is going to support an after-school club of its own, which is precisely the gap this fills.' },
      { q: 'What is in the free lesson?', a: 'The teacher locates what the learner can already do and sets one task a step beyond it. A child might pour seven jars into one and work out what can be said about last week. A teenager writes a plot that refuses to draw before a founding date. An adult brings a chart from work that crosses a restructure. It ends with a course, a rung, a weekly time and a price in dollars, and nothing has been charged.' },
      { q: 'Is there a Modern Age Coders classroom in Zaanstad?', a: 'No, and none is claimed in Zaandam, at the Zaanse Schans or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Zaanstad coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Zaanstad group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or town. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'South to the capital, west to the sea, and up to the country',
    html: 'Twenty minutes south is <a class="cg-inline-link" href="/coding-classes-in-amsterdam">Amsterdam</a>; west across the province are <a class="cg-inline-link" href="/coding-classes-in-haarlem">Haarlem</a> and the drained lake of <a class="cg-inline-link" href="/coding-classes-in-haarlemmermeer">Haarlemmermeer</a>, and all of them sit inside <a class="cg-inline-link" href="/coding-classes-in-noord-holland">Noord-Holland</a>. Every page in the series grows out of the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and for machine learning rather than software the doors are <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> and the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-noord-holland', label: 'Noord-Holland' },
    { href: '/coding-classes-in-amsterdam', label: 'Amsterdam' }
  ],

  personalityCss: `
.cg-root.cg-zns .cg-hero-grid { align-items: start; gap: clamp(1.7rem, 4.1vw, 3.2rem); }
.cg-root.cg-zns .cg-hero h1 { font-weight: 600; letter-spacing: -0.01em; line-height: 1.11; }
.cg-root.cg-zns .cg-capsule { border-left-width: 5px; border-left-style: solid; border-bottom: 1px solid var(--cg-accent-soft); padding-left: 1.4rem; padding-bottom: 0.55rem; }
.cg-root.cg-zns .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; }
.cg-root.cg-zns .cg-section-head h2 { max-width: 33ch; }
.cg-root.cg-zns .cg-grid-3 { gap: clamp(1.2rem, 2.5vw, 1.9rem) clamp(1.35rem, 2.9vw, 2.15rem); }
.cg-root.cg-zns .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1.15rem; }
.cg-root.cg-zns .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-zns .cg-callout { border-left-width: 6px; border-left-style: double; }
`,

  dossier: {
    curriculumAuthority: 'City and municipality of Zaanstad, Noord-Holland: 165,201 residents (CBS 1 January 2026), the fifteenth municipality of the country, formed in 1974 from seven councils; 46 primary establishments (13,704 pupils) and 13 secondary (8,687); 3,370 residents in applied higher education and 1,490 at university level. Seven towns plus Westknollendam. Regio Noord holidays with the rest of Noord-Holland. The city page argues from entity identity across a merger; Haarlem owns the stale derived figure, Haarlemmermeer owns the failed quotient, and the province page owns rank versus distance.',
    localProject: 'A merger creates a new row, not a longer one. Zaanstad was formed in 1974 by merging Assendelft, Krommenie, Wormerveer, Westzaan, Zaandijk, Koog aan de Zaan and Zaandam, while Wormer and Oostzaan stayed out; Zaandam has held city rights since 1811. A series plotted before 1974 describes a territory or a population, never the municipality, and a reconstruction from the seven predecessors must be labelled as a reconstruction and its boundary assumptions stated. The learner writes a valid-from date on every entity, a plotter that refuses to draw before it, and a separate reconstruction function, then marks the seam on the chart. Distinct from the name-versus-identifier trap (Friesland: one entity renamed, so a join on the name drops it) because there the thing persisted under a new label, and here seven things were replaced by one with no history; distinct also from the two-vintage residual (Apeldoorn). The eight published town figures are dated 2023 and total 159,620 against a 2026 municipal figure, and the page states the date mismatch rather than treating the gap as a finding.',
    requiredMentions: [
      '165,201',
      '73,883',
      '28,004',
      '133,504',
      '13,704',
      '8,687',
      'Assendelft',
      'Krommenie',
      'Wormerveer',
      'Koog aan de Zaan',
      'Zaandijk',
      'Westknollendam',
      'Jan Hamming',
      '159,620'
    ],
    sources: [
      { claim: 'Zaanstad 165,201 residents on 1 January 2026 (CBS provisional); 73,883 households averaging 2.17, 28,004 single-person (38 percent); 26,287 aged 0 to 15; 18,898 aged 15 to 25; 45,378 aged 25 to 45; 31,017 aged 65 and over; total area 8,324 ha, land 7,374 ha; density 2,208; 46 primary establishments (13,704 pupils); 13 secondary (8,687); HBO 3,370 and WO 1,490; 19 wijken and 79 buurten; 133,504 in 1995, a rise of 31,697 (24 percent).', url: 'https://allecijfers.nl/gemeente/zaanstad/' },
      { claim: 'Zaanstad 165,235 residents on 1 January 2026; 83.24 km2 (73.87 land, 9.37 water); mayor Jan Hamming (PvdA); the fifteenth municipality of the Netherlands; formed in 1974 by merging Assendelft, Krommenie, Wormerveer, Westzaan, Zaandijk, Koog aan de Zaan and Zaandam; Zaandam received city rights in 1811; 2023 populations Zaandam 80,705, Assendelft 24,510, Krommenie 17,010, Wormerveer 12,145, Koog aan de Zaan 11,230, Zaandijk 8,485, Westzaan 5,085, Westknollendam 450; at the peak in the middle of the seventeenth century more than 900 mills were counted; the Zaanse Schans was laid out in the 1960s with houses and mills moved there from their original sites; the food multinationals Verkade, Ahold, Bruynzeel, Honig and Duyvis grew here; the Zaanstreek is regarded as the oldest industrial area in Europe.', url: 'https://nl.wikipedia.org/wiki/Zaanstad' },
      { claim: 'Around 1720 some 600 mills were in operation simultaneously in the Zaanstreek, with roughly 1,100 built across all time, and about fifteen industrial mills remain; the region is described as one of the oldest industrial areas in Europe.', url: 'https://nl.wikipedia.org/wiki/Zaanstreek' },
      { claim: 'The Zaanse Schans was founded in 1963; twelve mills stand on the site; visitors numbered 2.6 million in 2024, 2.2 million in 2017 and 1.8 million in 2016.', url: 'https://nl.wikipedia.org/wiki/Zaanse_Schans' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'A pre-1974 population for Zaanstad. The page states that the entity did not exist and that any such figure is a reconstruction.',
      'A single answer to how many mills the Zaanstreek had. More than 900 at the seventeenth-century peak, about 600 simultaneously around 1720 and roughly 1,100 in total are printed side by side and never combined or differenced.',
      'Whether the Zaanstreek is the oldest industrial area in Europe or one of the oldest. Both wordings are quoted and neither is preferred.',
      'The exact date in 1974 on which the merger took effect. Only the year appears in the entry read.',
      'Any reconciliation of the eight 2023 town figures with the 2026 municipal total. The dates differ and the page says so.',
      'Anything the Noord-Holland page owns: the provincial totals and the rank-versus-distance project. Anything the Haarlem or Haarlemmermeer pages own.'
    ]
  }
};
