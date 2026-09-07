'use strict';
// Almere: a city that did not exist in 1975, two to five metres below a sea
// level that is itself a definition. Spine: every height in this city carries
// a hidden reference point (NAP, fixed in Amsterdam in 1684) while the sea it
// is compared with keeps moving; the project makes the reference visible.

module.exports = {
  slug: 'coding-classes-in-almere',
  code: 'alm',
  accent: '#583D00',
  accentRationale: 'Almere: the rapeseed sown on freshly drained polder land, darkened until it clears every paper tint',
  pageType: 'city',
  place: {
    name: 'Almere',
    eyebrow: 'Almere, Flevoland',
    schemaType: 'City',
    chain: [{ type: 'AdministrativeArea', name: 'Flevoland' }, { type: 'Country', name: 'Netherlands' }]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Almere, Flevoland, Netherlands',
  title: 'Coding Classes in Almere | Modern Age Coders',
  description: 'Live online coding, Python and AI classes for Almere learners aged 6 to 67, in a city that did not exist in 1975 and lies metres below a sea level that moves.',
  ogDescription: 'Live online coding, Python, AI and mathematics for Almere families, built on the reference point hidden inside every height in the city.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'minecraft-coding-for-kids-course',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Almere Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across Almere Haven, Stad, Buiten, Poort and Hout, taught in English.'
  },

  h1: 'Coding classes in Almere, a city younger than most of its parents and lower than the sea it is measured against',
  capsuleQ: 'What are the best coding classes in Almere?',
  capsule: 'Coding classes in Almere serve a city whose first homes were handed over on 30 November 1976, which became a municipality on 1 January 1984, and which held 232,619 people on 1 January 2026 (Statistics Netherlands), with 30.7 residents of Indian origin per thousand, the fourth highest share in the country. The whole of it lies two to five metres below sea level on a polder drained in 1968. Modern Age Coders teaches coding, Python, AI and mathematics to Almere learners aged 6 to 67, live online and in English; the first lesson costs nothing, and after it a group place is USD 100 a month and private tuition USD 150.',
  lead: 'Every height in Almere is measured against a level fixed in Amsterdam in 1684 that the North Sea stopped agreeing with long ago. A child who can build the small program that shows the difference between the land, the reference and the water has learned something the whole country stands on, quite literally, and it is the most Almere lesson there is.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Almere.',

  picks: {
    eyebrow: 'Course picks for Almere',
    h2: 'Four courses for a city that was built from a plan, for children who like building from one',
    intro: 'Almere was drawn before it was lived in, which is why its neighbourhoods are named after music, film and comic-strip heroes rather than after anything that happened there. These four courses suit children who take to that: making a world from a grid, then a program from a plan.',
    items: [
      { course: 'minecraft-coding-for-kids-course', band: 'Ages 7 to 11', note: 'From blocks to real code inside a world built on a grid, for the groep 4 to 7 child in the Stripheldenbuurt who already builds cities for fun.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Python as the place where negative numbers, reference points and rates of change stop being abstract, on the numbers this city stands on.' },
      { course: 'ib-diploma-computer-science-course', band: 'Ages 16 to 18', note: 'The IB Diploma Computer Science course, for the International School Almere student on the Breskensweg who has chosen it.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from nothing to advanced, for the Almere commuter on the Flevolijn who wants the next job to be the one they build rather than the one they were given.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Almere today',
      h2: 'A city planned in the 1970s, counted twice on the same morning, and younger than its parents',
      intro: 'The national statistics office puts Almere at 232,619 residents on 1 January 2026; the municipal register, quoted by the city\'s own encyclopaedia entry, says 232,650 for the same date. Thirty-one people apart, and a fair first question for any learner: which office, and counted how.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The timeline, in four dates', p: 'First homes delivered on 30 November 1976 in what is now Almere Haven. Municipality on 1 January 1984, when the Openbaar Lichaam Zuidelijke IJsselmeerpolders was wound up. Flevoland made a province in 1986. The 200,000th resident on 3 October 2016. Almost nobody who lives here is older than the place.' },
          { h3: 'A very young population', p: '98,394 households; 41,508 residents under fifteen, which is close to eighteen percent of the city, and 28,367 aged fifteen to twenty-five. 86 primary establishments teach 22,344 pupils and 20 secondary establishments 12,846, by the national count. Few Dutch cities of this size have more children per household.' },
          { h3: 'Where the families came from', p: 'In 2025 half the residents were of Dutch origin, 41 percent had origins outside Europe and 28 percent were born abroad. The largest origin groups are Suriname at 25,261, Morocco at 8,673 and Turkey at 4,674, and Statistics Netherlands puts the Indian-origin share at 30.7 per thousand on 1 January 2024, roughly 7,100 people, fourth in the country after Amstelveen, Uithoorn and Eindhoven.' }
        ] },
        { kind: 'spec', title: 'Neighbourhoods named after art forms, because there was no history to name them after', p: 'Muziekwijk Noord is the largest wijk at 11,185, then Filmwijk and Stedenwijk at 10,317 each, Literatuurwijk at 9,648, the Stripheldenbuurt at 7,139 and the Danswijk at 5,506, all on 1 January 2026. More than seventy wijken in all, and the naming tells a child something true: this city was designed, then filled, in that order.' }
      ]
    },
    {
      id: 'districts', tint: 'tint', eyebrow: 'The stadsdelen',
      h2: 'Haven, Stad, Buiten, Poort, Hout and a district with four residents',
      intro: 'Almere was built as a set of separate cores rather than one centre that grew, which is why each stadsdeel has its own station, its own secondary school and its own decade.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Almere Haven', p: 'The oldest core, where the first residents arrived in November 1976, on the Gooimeer. Its secondary school is OSG De Meergronden on the Marktgracht, 1,372 Almere pupils across vmbo, havo and vwo.' },
          { h3: 'Almere Stad', p: 'The centre and the largest core: the Centrum Almere Stad wijk at 6,585, the Stedenwijk, Muziekwijk, Filmwijk and Literatuurwijk around it, and Almere Centrum station on the Flevolijn. Helen Parkhurst on the Bongerdstraat, a Dalton school with 1,793 Almere pupils, is the biggest secondary school in the city.' },
          { h3: 'Almere Buiten', p: 'The eastern core, with the Eilandenbuurt, the Regenboogbuurt, the Bloemenbuurt and the Stripheldenbuurt, its own station since the Flevolijn\'s first day, and the Oostvaarders College on the A. Boekenweg with 1,517 Almere pupils.' },
          { h3: 'Almere Poort', p: 'The newest core, on the western edge towards the Hollandse Brug and Amsterdam, with the Homeruskwartier at 8,124 and the Poort Lyceum on the Pim Mulierstraat with 829 Almere pupils.' },
          { h3: 'Almere Hout', p: 'The southern edge and Oosterwold, 6,901 people in 2026 in a district where households design and build their own plots, which in a city drawn by planners is its own small rebellion.' },
          { h3: 'Almere Pampus', p: 'Planned, mapped, and home to four residents in 2024. The district exists in every dataset with a row of its own, which is the kind of thing this page\'s project is about.' }
        ] },
        { kind: 'p', text: 'The pages in this series for Flevoland and its other towns hand off from here. Almere\'s own districts are not split into separate pages; the city is one core short of needing that.' }
      ]
    },
    {
      id: 'schools', tint: '', eyebrow: 'Schools by name',
      h2: 'Seven of the twenty secondary schools, and where each one hands off',
      intro: 'The schools register lists twenty secondary establishments in Almere with 12,597 Almere-resident pupils in 2025-26. The left column is the school as the register describes it; the right is what fits beside it.',
      body: [
        { kind: 'align', rows: [
          { code: 'ISA', req: 'International School Almere, Breskensweg 5, the IB Middle Years and Diploma Programmes in English, founded in 2002, 354 Almere-resident pupils in the register.', ours: 'Placement by MYP year; a Diploma student who has chosen Computer Science takes the IB course itself and uses the live sessions for the internal assessment.' },
          { code: 'Helen Parkhurst', req: 'Helen Parkhurst, Bongerdstraat 1, a Dalton school from vmbo to vwo and the largest in the city with 1,793 Almere pupils.', ours: 'Dalton learners are used to planning their own week, and a fixed online slot fits that habit; the Python ladder by level, with data work beside wiskunde in the bovenbouw.' },
          { code: 'Oostvaarders', req: 'Oostvaarders College, A. Boekenweg 3 in Almere Buiten, vmbo to vwo, 1,517 Almere pupils.', ours: 'The same ladder, with the app and website courses for the vmbo stream so that something exists to show an MBO intake.' },
          { code: 'Meergronden', req: 'OSG De Meergronden, Marktgracht 65 in Almere Haven, vmbo to vwo, 1,372 Almere pupils, the school of the oldest core.', ours: 'Blocks and Python for the onderbouw, a term of Python before the profielkeuze for year 3, and data science in Python afterwards.' },
          { code: 'Trinitas', req: 'Trinitas Gymnasium, Sas van Gentlaan 6, vwo only, 672 Almere pupils, the city\'s categorical gymnasium.', ours: 'Problem solving and data structures, and the Python-to-machine-learning track, for the learner who is doing Greek and can therefore do recursion.' },
          { code: 'Poort Lyceum', req: 'Poort Lyceum, Pim Mulierstraat 102, vmbo to vwo, 829 Almere pupils, the school of the newest core.', ours: 'The standard ladder, and for the many Poort families who commute to Amsterdam, a slot that does not depend on anyone being home at four.' },
          { code: 'Aeres', req: 'Aeres VMBO Almere, Heliumweg 1, the green vmbo, 781 Almere pupils.', ours: 'Creative coding, app-making and a first data course on the school\'s own subject matter: plants, animals, water and the polder itself.' }
        ] },
        { kind: 'p', text: 'Park Lyceum, Arte College, Buitenhout College, Echnaton, Stad College and the Montessori Campus complete the list. A school\'s name tells the class what words to use; the level is found in the free lesson.' }
      ]
    },
    {
      id: 'evidence', tint: 'tint', eyebrow: 'Verified local facts',
      h2: 'Almere facts, each with its office and date',
      intro: 'Seven things this page rests on, including the one that makes the project possible: the definition of sea level.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The count, twice', p: 'Statistics Netherlands, provisional, 1 January 2026: 232,619 residents, 98,394 households, 41,508 under fifteen, 28,367 aged fifteen to twenty-five, 86 primary and 20 secondary establishments. The municipal register for the same date, as quoted in the city\'s encyclopaedia entry: 232,650.' },
          { h3: 'The polder and the dates', p: 'Oostelijk Flevoland fell dry in 1957 and Zuidelijk Flevoland, on which Almere stands, in 1968; the Flevopolder is the largest artificial island in the world. Almere lies two to five metres below sea level and below the Gooimeer, IJmeer and Markermeer around it. First homes 30 November 1976; municipality 1 January 1984; province of Flevoland 1986.' },
          { h3: 'What sea level means here', p: 'Every Dutch height is measured against NAP, the Normaal Amsterdams Peil, descended from the Amsterdams Peil of 1684, set at the average summer high water of the IJ between 1 September 1683 and 1684. Rijkswaterstaat maintains about 35,000 benchmarks and 400 underground ones, rechecked every ten to fifteen years, and states that 0 m NAP is approximately the mean level of the North Sea. Approximately.' },
          { h3: 'Where the sea actually is', p: 'Deltares, 12 January 2018: the Dutch mean sea level, averaged over six tide stations from Vlissingen to Delfzijl, reached 11 cm above NAP in 2017, and has been rising by about 20 cm a century since 1890, with land subsidence adding between 2 cm a century at Vlissingen and 7 cm near Harlingen.' },
          { h3: 'The railway', p: 'The Flevolijn opened from Weesp to Almere Buiten on 29 May 1987 and on to Lelystad Centrum on 28 May 1988; the Hanzelijn extension was opened on 6 December 2012. Six stations serve the city: Almere Poort, Muziekwijk, Centrum, Parkwijk, Buiten and Oostvaarders.' },
          { h3: 'The schools, by name', p: 'From the schools register for 2025-26: Helen Parkhurst 1,793 Almere pupils; Oostvaarders College 1,517; OSG De Meergronden 1,372; Park Lyceum 1,106; Arte College 876; Poort Lyceum 829; Buitenhout College 814; Echnaton 804; Aeres VMBO 781; Trinitas Gymnasium 672; Stad College 552; Montessori Campus 404; International School Almere 354.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no association with the municipality of Almere, with Rijkswaterstaat, Deltares, the International School or any school named above, and claims none. They are here because a page about coding classes in Almere should know what Almere is built on.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Below sea level: build the converter that shows the sea moving while the land and the reference stay put',
      intro: 'Three quantities that everyday speech folds into one phrase, a program that keeps them apart, and a table in which the depth of Almere changes without a spade being lifted.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Separate the three things', p: 'The land: a point in Almere at, say, 3.5 metres below NAP, inside the published two-to-five range. The reference: NAP, a fixed datum from 1684. The water: the mean sea level Deltares measures, 11 cm above NAP in 2017 and rising about 20 cm a century. "Below sea level" quietly uses the second to talk about the third.' },
          { h3: '2. Write the converter', p: 'A function that takes a land height in NAP and a year, computes where the sea is relative to NAP in that year from the 2017 anchor and the rate, and returns the land\'s depth below the actual water. Three lines of Python and one honest assumption, that the rate stays constant, which the learner labels.' },
          { h3: '3. Read the table', p: 'The same point in Almere was 3.36 metres below the sea in 1890, 3.53 in 1976 when the first families moved in, 3.61 in 2017, and on the constant rate would be 3.68 in 2050 and 3.78 in 2100. The land did not move and the reference did not move. Only the sea did, and only the converter shows it.' }
        ] },
        { kind: 'table', caption: 'One point in Almere at 3.5 m below NAP: its depth below the actual mean sea level, by year (constant 20 cm a century from the 2017 anchor)', head: ['Year', 'Mean sea level relative to NAP', 'Depth of the land below the sea', 'What happened'], rows: [
          ['1890', '14 cm below NAP', '3.36 m', 'Polder not yet drained; the water sat over the land'],
          ['1976', '3 cm above NAP', '3.53 m', 'First homes handed over, 30 November'],
          ['2017', '11 cm above NAP', '3.61 m', 'Deltares measurement, six stations'],
          ['2050', '18 cm above NAP', '3.68 m', 'Projection at the constant rate; real scenarios run higher'],
          ['2100', '28 cm above NAP', '3.78 m', 'Projection at the constant rate; real scenarios run higher']
        ] },
        { kind: 'callout', h3: 'A height without its datum is not a number', p: '"Five metres below sea level" is three claims wearing one coat: a land height, a reference level, and an assumption that the reference equals the sea. In the Netherlands the reference is NAP, fixed by a seventeenth-century measurement of the IJ and rechecked with 35,000 bolts, and the sea is a time series that has drifted 11 cm away from it and keeps going. Neither is wrong. The lesson is that every measurement carries a reference frame, that the frame is part of the number, and that a learner who asks "relative to what?" has a question that works on every dataset with a baseline in it, from temperatures to share prices. The table was computed before this paragraph was written; the land height is illustrative and labelled, and the anchor and the rate are Deltares figures.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any figure that is measured against something else',
      intro: 'The datum problem sits inside every "change since baseline", every index rebased to 100, and every dashboard that compares this year with last. Practised first on the ground under the child\'s feet.',
      body: [
        { kind: 'table', caption: 'When a number is really a difference', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Name the datum', 'Say what zero is and who defined it', 'NAP read as the sea', 'A height that means something'],
          ['Date the reference', 'Check whether the reference itself moves', 'A fixed datum compared with a moving sea', 'Two series instead of one'],
          ['Convert explicitly', 'Write the conversion as a function, never in your head', 'A 14 cm error that looks like a 5 m fact', 'A number someone else can rerun'],
          ['Label the assumption', 'Mark the rate or the trend you extrapolated with', 'A projection quoted as a measurement', 'Honest future rows'],
          ['Keep the frame with the value', 'Store the datum next to the number, always', 'Heights that cannot be joined years later', 'Data that survives the next survey']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A ruler standing in a bowl, a mark on the ruler for "sea level", and water that gets poured in a little each round while a toy house sits taped to the ruler. The child reads how far under the water the house is each round. The house never moves, the mark never moves, and the number keeps changing. Ten minutes, and the sentence is theirs.' },
          { h3: 'For teenagers', p: 'The converter in Python: land height in NAP, the 2017 anchor, the rate, a year, and a depth out. Then the second version with subsidence added as a separate rate, and a printed table for the family\'s own street once they have looked up its NAP height on the national height map.' },
          { h3: 'For adults', p: 'The same program on an index rebased to 100, a temperature anomaly against a 1991 to 2020 baseline, or a revenue figure "up 12 percent on last year" where last year was restated. Most business numbers are differences from a datum nobody wrote down. Bring one if it is yours to share.' }
        ] },
        { kind: 'p', text: 'The population and school counts, the drainage and founding dates, the Flevolijn dates, the NAP definition and benchmark counts, and the 2017 sea level with its rate are published by the offices named in the sentences that use them. The 3.5 metre land height is illustrative and labelled; the future rows are a constant-rate projection and say so; and no figure on this page reports an Almere measurement that no office has published.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a ruler in a bowl to a converter with the datum built in',
    intro: 'The free lesson finds the rung. The year the family arrived in Almere is not an input.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'The mark that does not move', p: 'Children watch water rise past a fixed mark and read a number that changes without the house moving.', courses: ['kids-coding-blocks-masterclass', 'minecraft-coding-for-kids-course'] },
      { band: 'Ages 11 to 13', h3: 'Negative numbers with a reason', p: 'Learners write heights below zero in Python and subtract one moving series from a fixed one.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'A converter with its assumptions labelled', p: 'Teenagers build the datum converter, add subsidence, and project honestly.', courses: ['python-complete-masterclass-teens', 'ib-diploma-computer-science-course'] },
      { band: 'Ages 18 to 67', h3: 'Baselines at work', p: 'Adults find the datum behind an index, an anomaly or a restated year and rebuild the comparison.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Does an Almere child still need to write code when an AI can say in one line how far below the sea they live?',
    intro: 'Ask an assistant how far below sea level Almere is and it will say five metres, or three, or four, and every answer will be missing the same word: relative.',
    p1: 'A fluent tool gives a height. It does not, unprompted, say which datum the height is against, whether that datum is the sea or a bolt under Dam square, or that the sea has drifted 11 cm from the bolt since the bolt was set. Those three questions are the entire difference between a number and a fact, and no model asks them for you. They are asked by a person who has once built the converter and watched the depth change while the land stood still.',
    p2: 'So the reason an Almere child still writes the program is not that the syntax is hard; the tools now write syntax. It is that separating the land, the reference and the water is a habit of mind, that the habit is built by doing it once with your own hands, and that a child who has done it will ask "relative to what?" of a temperature chart, a growth figure and an AI\'s confident answer for the rest of their life. The tools will change. The question will not.',
    closer: 'For a parent in Almere, then, the honest answer is the one this whole city is built on: the ground is only as trustworthy as the reference it is measured against, and a child who knows that has learned to code for the right reason.',
    blogAnchor: 'is coding still worth learning, now that AI can write it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a city that commutes across a bridge',
    intro: 'A great many Almere parents cross the Hollandse Brug or ride the Flevolijn to Amsterdam every working day, and are not home at four. A class that comes to the kitchen table at a fixed time does not need them to be.',
    cells: [
      { h3: 'Booked around the commute', p: 'The lesson is at home in Muziekwijk, Buiten or Poort at a time the family keeps, and it does not care whether the parent is on the 17:42 from Amsterdam Zuid.' },
      { h3: 'English, with the Almere words kept', p: 'Taught in English. Groep, havo, vwo, profielkeuze, Dalton and MYP are used as the child hears them, because the family has to use them too.' },
      { h3: 'A first lesson that ends in a plan', p: 'A real task, a level and a named course, with no card taken and no decision expected until the family has watched a lesson happen.' },
      { h3: 'Between five and ten to a group, placed by level', p: 'A group is built from what its members can do and want next. The stadsdeel, the school and the year the family arrived in the polder are not part of it.' },
      { h3: 'Eight lessons a month, on the regio Noord calendar', p: 'Two lessons a week at one recurring time. Flevoland takes its school holidays with regio Noord, and the summer weeks are agreed before the slot is fixed.' },
      { h3: 'The time difference, done once', p: 'Almere is three and a half hours behind the teacher in summer and four and a half in winter, because only one of the two clocks moves. Late afternoons, early evenings and weekends are the times that work at both ends, and the family settles its slot during the free lesson.' }
    ],
    spec: { title: 'A city of arrivals', p: 'Twenty-eight percent of Almere was born abroad and almost all of the rest arrived from somewhere else in the Netherlands, because there was nowhere here to be born until 1976. A coding class taught in the language most of those families share, with the Dutch school words kept, is built for a city like that.' }
  },

  fees: {
    h2: 'A free first lesson, then USD 100 or USD 150 a month, and that is the whole list',
    intro: 'Printed here in full, ahead of any request for a phone number.',
    first: 'A complete lesson with a task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'The rate is the single international one and it is in US dollars, with no euro version, nothing added for Almere and no enrolment charge. The free lesson fixes the course and the slot; payment is arranged afterwards over WhatsApp. Pauses, changes of plan and missed lessons are described on the pricing page.'
  },

  reviewsH2: 'What families and learners say',

  book: {
    h2: 'Tell us the level, and the stadsdeel if you want to',
    intro: 'The first task might be a ruler in a bowl, a datum converter in Python, or a baseline from work that nobody has looked at since it was set.',
    success: 'Thank you. Your Almere class request has been sent.'
  },

  faq: {
    h2: 'Almere coding class questions',
    intro: 'The polder, the schools, the teaching and the terms.',
    items: [
      { q: 'How far below sea level is Almere, really?', a: 'Two to five metres below NAP, the Dutch reference level, according to the city\'s own encyclopaedia entry. Whether that is "below sea level" depends on which sea level: Rijkswaterstaat says 0 m NAP is approximately the mean North Sea level, and Deltares measured the actual mean sea level at 11 cm above NAP in 2017, rising about 20 cm a century. The project on this page is the program that keeps those three things apart.' },
      { q: 'Our child is at the International School Almere on the IB. Does the ladder fit?', a: 'Yes. ISA at Breskensweg 5 runs the Middle Years and Diploma Programmes in English, and we place by MYP year. A Diploma student who has chosen Computer Science takes the IB course directly, with the live sessions used for the internal assessment.' },
      { q: 'Which Almere schools do you know?', a: 'Helen Parkhurst, Oostvaarders College, OSG De Meergronden, Park Lyceum, Arte College, Poort Lyceum, Buitenhout College, Echnaton, Aeres VMBO, Trinitas Gymnasium, Stad College, the Montessori Campus and the International School, with their streams and 2025-26 intake from the schools register. The name tells us the vocabulary; the free lesson tells us the level.' },
      { q: 'Is Almere too new to have decent schools and clubs for a child who codes?', a: 'It has twenty secondary schools and 86 primary establishments for a population that is nearly eighteen percent under fifteen, which is a higher share of children than most Dutch cities. What it does not have is a long history, and a live online class does not need one.' },
      { q: 'Do you teach in English or Dutch?', a: 'English. Twenty-eight percent of Almere was born abroad and the families this page is written for share English across three generations. Dutch school words are kept as the school uses them. Teaching in Dutch is not something we offer.' },
      { q: 'What time are classes for a family in Almere?', a: 'Three and a half hours behind the teacher in summer and four and a half in winter, because the Dutch clock changes and the Indian one does not. Late afternoons, early evenings and weekends suit both ends, and the recurring slot is chosen during the free lesson, before any payment.' },
      { q: 'What happens in the free Almere lesson?', a: 'We find what the learner can do and set one task there. A child watches water rise past a mark on a ruler with a house taped to it. A teenager writes the datum converter and adds subsidence. An adult brings a baseline from work. The lesson finishes with a course, a level, a weekly time and the price in dollars, and nothing to pay.' },
      { q: 'Is there a Modern Age Coders classroom in Almere?', a: 'No, and none is claimed in Almere, in Lelystad or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Almere coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in an Almere group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or stadsdeel. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'Across the water, and up to the country page',
    html: 'Most Almere commuters end up in <a class="cg-inline-link" href="/coding-classes-in-amsterdam">Amsterdam</a>, whose page hands off to eight districts, and the municipality with the highest Indian-origin share in the country is <a class="cg-inline-link" href="/coding-classes-in-amstelveen">Amstelveen</a>, on the far side of it. The <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a> owns the national curriculum argument and the full course list, and <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> is the door for a learner who wants to train models. A page for Flevoland, Lelystad and the rest of the province follows in this series.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-amsterdam', label: 'Amsterdam' },
    { href: '/ai-and-machine-learning-classes-in-netherlands', label: 'AI and ML in the Netherlands' }
  ],

  personalityCss: `
.cg-root.cg-alm .cg-hero-grid { grid-template-columns: 1.1fr 0.9fr; gap: clamp(2.5rem, 6vw, 5rem); }
.cg-root.cg-alm .cg-section { border-top-width: 2px; }
.cg-root.cg-alm .cg-capsule { border-left-style: double; border-left-width: 6px; }
.cg-root.cg-alm .cg-eyebrow { text-transform: none; letter-spacing: 0.02em; font-size: 0.85rem; }
.cg-root.cg-alm .cg-section-head h2 { font-weight: 600; max-width: 30ch; }
.cg-root.cg-alm .cg-grid-3 { grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); }
.cg-root.cg-alm .cg-ladder-col { border-top: 1px solid var(--cg-rule-2); padding-top: 1.25rem; }
.cg-root.cg-alm .cg-pick-band { font-weight: 700; }
.cg-root.cg-alm .cg-table-wrap { border-width: 2px; }
`,

  dossier: {
    curriculumAuthority: 'Almere, Flevoland: 20 secondary establishments with 12,846 pupils (CBS) / 12,597 Almere-resident pupils (register 2025-26) and 86 primary with 22,344. Named: International School Almere (Breskensweg 5, IB MYP and DP, founded 2002, 354 pupils); Helen Parkhurst (Bongerdstraat 1, Dalton, vmbo-vwo, 1,793); Oostvaarders College (A. Boekenweg 3, 1,517); OSG De Meergronden (Marktgracht 65, 1,372); Park Lyceum 1,106; Arte College 876; Poort Lyceum (Pim Mulierstraat 102, 829); Buitenhout College 814; Echnaton 804; Aeres VMBO (Heliumweg 1, 781); Trinitas Gymnasium (Sas van Gentlaan 6, vwo, 672); Stad College 552; Montessori Campus 404. Regio Noord holidays. The hub owns the national digital-literacy curriculum; this page owns the polder, the datum and Almere\'s schools.',
    localProject: 'A height without its datum is not a number (reference-frame confusion, with a fixed datum against a moving reference). Almere lies 2 to 5 m below NAP; NAP descends from the 1684 Amsterdams Peil and Rijkswaterstaat says 0 m NAP is only approximately mean North Sea level; Deltares measured mean sea level at 11 cm above NAP in 2017, rising about 20 cm a century since 1890. The learner writes a converter (land height in NAP, year -> depth below actual mean sea level) and shows an illustrative point at 3.5 m below NAP was 3.36 m below the sea in 1890, 3.53 in 1976, 3.61 in 2017, 3.68 in 2050 and 3.78 in 2100 at the constant rate: the land and the datum never moved. Distinct from the boundary-moved trap (Mahdah: a label kept across a redrawn unit), from metric definition (New Jersey) and from the reclassification note on Amstelveen: the flaw here is a measurement quoted without its reference frame, and a frame mistaken for the thing it approximates. Computed before writing; land height and constant rate labelled.',
    requiredMentions: [
      '30 November 1976',
      '1 January 1984',
      'Breskensweg 5',
      'Helen Parkhurst',
      'Oostvaarders College',
      'Trinitas Gymnasium',
      'Flevolijn',
      '29 May 1987',
      'Muziekwijk Noord',
      'Stripheldenbuurt',
      '30.7 residents of Indian origin per thousand',
      '11 cm above NAP',
      '25,261'
    ],
    sources: [
      { claim: 'Almere 232,619 residents on 1 January 2026 (CBS provisional); 98,394 households; 41,508 under 15; 28,367 aged 15 to 25; 86 primary establishments (22,344 pupils); 20 secondary (12,846); 72 wijken, 239 buurten; origin 2025: 50% Dutch, 41% outside Europe, 28% born abroad; Suriname 25,261, Morocco 8,673, Turkey 4,674.', url: 'https://allecijfers.nl/gemeente/almere/' },
      { claim: 'Wijken on 1 January 2026: Muziekwijk Noord 11,185; Filmwijk 10,317; Stedenwijk 10,317; Tussen de Vaarten Zuid 9,964; Literatuurwijk 9,648; Noorderplassen 8,255; Homeruskwartier 8,124; Kruidenwijk 7,883; Waterwijk 7,473; Stripheldenbuurt 7,139; Oosterwold 6,901; Centrum Almere Stad 6,585; Danswijk 5,506.', url: 'https://allecijfers.nl/ranglijst/grootste-en-kleinste-wijken-in-inwoners-in-de-gemeente-almere/' },
      { claim: 'First homes delivered 30 November 1976 (Almere Haven); municipality 1 January 1984 after the Openbaar Lichaam Zuidelijke IJsselmeerpolders; Flevoland a province in 1986; 200,000th resident 3 October 2016; 232,650 on 1 January 2026 (register); 2 to 5 m below sea level and below the Gooimeer, IJmeer and Markermeer; Almere Pampus 4 residents in 2024.', url: 'https://nl.wikipedia.org/wiki/Almere' },
      { claim: 'Oostelijk Flevoland drained 1957, Zuidelijk Flevoland 1968; the Flevopolder is the largest artificial island in the world.', url: 'https://nl.wikipedia.org/wiki/Flevopolder' },
      { claim: 'Flevolijn: Weesp to Almere Buiten opened 29 May 1987; Almere Buiten to Lelystad Centrum 28 May 1988; Hanzelijn officially opened 6 December 2012; Almere stations Poort, Muziekwijk, Centrum, Parkwijk, Buiten, Oostvaarders.', url: 'https://nl.wikipedia.org/wiki/Flevolijn' },
      { claim: 'NAP descends from the Amsterdams Peil of 1684, the average summer high water of the IJ between 1 September 1683 and 1684; the name Normaal Amsterdams Peil follows the 1885 to 1894 corrections; the reference bolt under Dam square was set in 1953 at 1.4278 m above NAP and revised in 2004 to 1.408 m; NAP approximates the geoid and is often equated with mean sea level for convenience.', url: 'https://nl.wikipedia.org/wiki/Normaal_Amsterdams_Peil' },
      { claim: 'Rijkswaterstaat: all Dutch heights are measured against NAP; 0 m NAP is approximately equal to the mean level of the North Sea; about 35,000 surface benchmarks and 400 underground ones, rechecked every 10 to 15 years.', url: 'https://www.rijkswaterstaat.nl/zakelijk/open-data/normaal-amsterdams-peil' },
      { claim: 'Deltares, 12 January 2018: Dutch mean sea level (average of six tide stations Vlissingen, Hoek van Holland, IJmuiden, Den Helder, Harlingen, Delfzijl) reached 11 cm above NAP in 2017; rising about 20 cm a century since 1890; land subsidence about 2 cm a century at Vlissingen to 7 cm near Harlingen.', url: 'https://www.deltares.nl/verhalen/zeespiegel-nederlandse-kust-in-2017-hoogste-ooit-gemeten' },
      { claim: 'Almere 30.7 residents of Indian origin per thousand on 1 January 2024, fourth after Amstelveen (68.3), Uithoorn (49.6) and Eindhoven (35.4).', url: 'https://www.cbs.nl/en-gb/news/2025/10/migrants-from-india-are-staying-longer-in-the-netherlands' },
      { claim: 'Secondary schools in Almere, 2025-26 Almere-resident pupils: Helen Parkhurst (Bongerdstraat 1) 1,793; Oostvaarders College (A. Boekenweg 3) 1,517; OSG De Meergronden (Marktgracht 65) 1,372; Park Lyceum 1,106; Arte College 876; Poort Lyceum (Pim Mulierstraat 102) 829; Buitenhout College 814; OSG Echnaton 804; Aeres VMBO (Heliumweg 1) 781; Trinitas Gymnasium (Sas van Gentlaan 6) 672; Stad College 552; Montessori Campus 404; International School Almere (Breskensweg 5) 354; total 12,597.', url: 'https://allecijfers.nl/middelbare-scholen-overzicht/almere/' }
    ],
    rejectedClaims: [
      'International School Almere at Heliumweg 61, founded 10 July 2002, Diploma Programme authorised June 2010 and Middle Years Programme January 2012. Found only in search summaries; the school\'s site and the IB listing could not be fetched. The page uses the register\'s address (Breskensweg 5) and the founding year only.',
      'A journey time from Almere Centrum to Amsterdam. Not stated in the source read; the page names the line, the dates and the stations only.',
      'Stadsdeel populations. Only wijk figures were found; the page assigns wijken to stadsdelen only where the assignment is not in doubt and gives no stadsdeel totals.',
      'The 2022 sea level of 9.5 cm above NAP. Found in a trade-press summary of the Zeespiegelmonitor, not read at source; the page anchors on the Deltares 2017 figure that was.',
      'Floriade 2022 figures. The summary returned garbled dates; omitted.',
      'Anything the Netherlands hub owns: the nine SLO core objectives, the March 2024 finalisation as a spine, the groep 8 streaming advice as an argument, the CET/CEST offset paragraph.'
    ]
  }
};
