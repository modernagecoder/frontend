'use strict';
// Amersfoort: second city of the province of Utrecht, and the place the whole
// Dutch national grid is measured from. Spine: the tower was point zero until
// the origin was shifted so that no coordinate in the country would be
// negative, and it now sits at exactly 155,000 by 463,000 without having moved.

module.exports = {
  slug: 'coding-classes-in-amersfoort',
  code: 'amf',
  accent: '#29396C',
  accentRationale: 'Amersfoort: a survey-ink navy, placed by the solver clear of The Hague\'s slate blue and Zwolle\'s river blue',
  pageType: 'city',
  place: {
    name: 'Amersfoort',
    eyebrow: 'Amersfoort, province of Utrecht',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Province of Utrecht' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Amersfoort, Netherlands',
  title: 'Coding Classes in Amersfoort | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Amersfoort for ages 6 to 67, in Vathorst, Nieuwland, Hoogland and Hooglanderveen. First lesson free, then one flat fee.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in Amersfoort, the point the Dutch national grid is measured from, built on an origin that moved when the tower did not.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'data-structures-algorithms-masterclass-college',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Amersfoort Learners',
    description: 'Ability-placed online coding, Python, AI and mathematics for children, teenagers and adults in Amersfoort, Hoogland and Hooglanderveen, taught in English.'
  },

  h1: 'Coding classes in Amersfoort, where the origin of the map moved and the tower stayed still',
  capsuleQ: 'What are the best coding classes in Amersfoort?',
  capsule: 'Coding classes in Amersfoort serve 163,764 people (Statistics Netherlands, 1 January 2026), the second city of the province of Utrecht and the sixteenth municipality of the country. Every surveyed point in the Netherlands is measured from the Onze-Lieve-Vrouwetoren here. It used to be zero by zero; around 1970 the origin was shifted outside the country for practical reasons, and the tower now carries the coordinates 155,000 by 463,000 exactly, without having moved a centimetre. Modern Age Coders teaches live online in English across the municipality, ages 6 to 67, first lesson free, then USD 100 a month in a group of five to ten or USD 150 one-to-one.',
  lead: 'A tower in the middle of this city is the reference point for the national coordinate grid. For most of the grid\'s life the tower was the origin, so its coordinates were zero and zero. Then the origin was moved out beyond the border so that nowhere in the Netherlands would need a negative number, and overnight the same stones acquired the coordinates 155,000 by 463,000. Nothing was rebuilt. If a program holds one point in the old numbering and another in the new, it will calmly report that two neighbours are 489 kilometres apart.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Amersfoort.',

  picks: {
    eyebrow: 'Course picks for Amersfoort',
    h2: 'Four courses for a city that the rest of the country measures itself against',
    intro: 'A groep 5 child in Vathorst, a teenager in Nieuwland who wants the algorithm and not just the framework, a student commuting to Utrecht, and a parent in Hoogland whose team has just been handed a mapping dataset: four doors into one city.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 8 to 12', note: 'Logic, coordinates and the habit of checking an answer, in English, for the groep 5 to 8 child who likes puzzles with a right answer.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Two years from a first line to real projects, for the teenager whose school offers no route into programming.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'College and adult', note: 'Complexity, structures and interview-ready problem solving, for the student who wants to know why a solution is chosen.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from nothing to advanced, live, for the working parent who has decided to stop waiting for somebody else to write the script.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Amersfoort today',
      h2: 'The second city of its province, and the fastest grower among them',
      intro: 'The national register held 163,764 people on 1 January 2026, in 73,602 households averaging 2.18 people, on 62.49 square kilometres of land inside 63.86 of territory: a published 2,613 residents to the square kilometre. In 1995 the count was 112,389, so Amersfoort has gained 51,375 people in thirty-one years, a rise of 46 percent, the steepest of any city in this series.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A young city by household', p: '26,970 residents are under fifteen, 16 percent, and 19,421 are between fifteen and twenty-five; 45,323 are between twenty-five and forty-five and 28,061 are sixty-five or over. 27,982 households hold one person, 38 percent. The new districts on the northern edge are where most of the growth since 1995 went.' },
          { h3: 'Schools, and an unusual secondary count', p: '47 primary establishments teach 14,380 pupils and 25 secondary establishments teach 9,900, both for 2025. Twenty-five secondary establishments for a city of this size is a lot, and it reflects a schooling catchment that reaches well beyond the municipal boundary. The municipality reports 4,040 residents in applied higher education and 1,860 at university level.' },
          { h3: 'Sixteenth in the country, second in the province', p: 'Its own entry places Amersfoort as the second city of the province of Utrecht and the sixteenth municipality of the Netherlands. It received city rights on 12 June 1259, and the medieval core still shows it: the Koppelpoort, a combined land and water gate, is one of the gates built between 1380 and 1451.' }
        ] },
        { kind: 'spec', title: 'Lange Jan, and the grid that starts here', p: 'The Onze-Lieve-Vrouwetoren, known as Lange Jan, stands 98 metres tall and is the third-highest church tower in the country. It is also the central point of the coordinate system of the Rijksdriehoeksmeting, the national triangulation survey, which means that every surveyed position in the Netherlands is expressed relative to this one building in this one city.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Thirty-three wijken, two villages, and a city that doubled outwards',
      intro: 'The statistics office divides the municipality into 33 wijken and 145 buurten, the finest division of any city in this series. Two named villages sit inside the boundary alongside the city itself.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The medieval core', p: 'Inside the second wall: the Koppelpoort, the canals, Lange Jan and the streets that were the whole city until the nineteenth century. Small, dense and largely unchanged in outline since the gates were built.' },
          { h3: 'Vathorst', p: 'The northern expansion, built from the late 1990s onward and still the newest large district. A big share of the 51,375 people added since 1995 live here, and its primary schools are among the fullest in the province.' },
          { h3: 'Nieuwland and Kattenbroek', p: 'The 1980s and 1990s districts between the old city and Vathorst, planned in one go, with their own centres and schools and a generation of children now reaching secondary age.' },
          { h3: 'Schothorst and Zielhorst', p: 'North of the railway, the earlier post-war and 1970s expansions, mixed housing and the shortest journeys to the station in the municipality.' },
          { h3: 'Hoogland', p: 'A village of its own to the north-west, inside the municipality but not inside the city, with a separate centre and separate primary schools.' },
          { h3: 'Hooglanderveen', p: 'The smaller of the two villages, north-east beyond Vathorst, close enough to the new districts to be surrounded by them and old enough to keep its own name and its own school.' }
        ] },
        { kind: 'p', text: 'All thirty-three wijken and both villages get the same class at the same hour, and none of those boundaries has ever affected placement.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its office, and the exact wording on the origin',
      intro: 'The national count, the municipal entry, the tower, the gate, and the sentence that the project below rests on.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands, provisional, 1 January 2026: 163,764 residents; 73,602 households averaging 2.18 people, 27,982 of them single-person, 38 percent; 26,970 under fifteen; 19,421 aged fifteen to twenty-five; 45,323 aged twenty-five to forty-five; 28,061 aged sixty-five and over; 47 primary establishments with 14,380 pupils and 25 secondary with 9,900, both 2025; 4,040 residents in applied higher education and 1,860 at university level; total area 6,386 hectares, land 6,249; density 2,613; 33 wijken and 145 buurten; 112,389 residents in 1995, a rise of 51,375.' },
          { h3: 'The municipality, described', p: 'Its own entry: 163,766 residents on 1 January 2026, two more than the national figure for the same date, both kept; 63.86 square kilometres, 62.62 of land and 1.24 of water, against 62.49 of land nationally, both kept; mayor Lucas Bolsius; the second city of the province of Utrecht and the sixteenth municipality of the Netherlands; city rights granted on 12 June 1259; the villages Hoogland and Hooglanderveen inside the boundary.' },
          { h3: 'The tower', p: 'The Onze-Lieve-Vrouwetoren, called Lange Jan, is 98 metres tall and the third-highest church tower in the Netherlands. It is the central point of the coordinate system of the Rijksdriehoeksmeting.' },
          { h3: 'The origin, in the source\'s own words', p: 'The same entry records that the tower was the origin of the system, and that around 1970 the origin was moved for practical reasons to a point outside the Netherlands, so that the tower now has exactly the coordinates x equals 155,000 metres and y equals 463,000 metres. The shift is the whole of the project below and nothing else on this page depends on it.' },
          { h3: 'The gate', p: 'The Koppelpoort is a combined land and water gate, one of the city gates built between 1380 and 1451. Its architect and a single construction year were not found at source and are not stated here.' },
          { h3: 'What is not claimed', p: 'This page does not state why the particular values 155,000 and 463,000 were chosen beyond the reason its source gives, which is that the origin was placed outside the country for practical reasons. Any explanation involving the ordering of the two axes is left out because no source read here says it.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, the survey, the tower or any school named here and claims none. They appear because a page that teaches in Amersfoort should know what the rest of the country measures from.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Two neighbours, 489 kilometres apart: build the program that catches a mixed coordinate system',
      intro: 'One tower, two numberings, a constant offset, and an error that looks like a plausible distance until you check the scale.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Move the origin on paper', p: 'Under the old numbering the tower is at zero, zero. Under the current one it is at 155,000 and 463,000. Every other point in the country shifted by exactly the same amounts, because a change of origin adds a constant to every coordinate. The learner writes the two lines that convert between the systems and confirms the tower round-trips.' },
          { h3: '2. Find what survives the move', p: 'A point 700 metres west and 300 metres south of the tower is at minus 700, minus 300 in the old numbering and at 154,300 by 462,700 in the new. Its distance from the tower is 762 metres either way, because subtraction cancels the constant. Distances, bearings and areas are unchanged; the coordinates themselves are not.' },
          { h3: '3. Mix the two and watch it fail quietly', p: 'Now take the tower in old coordinates and the neighbour in new ones, and compute the distance between them. The answer is about 489 kilometres, which is roughly the length of the country. It is not an error message, it is not a negative number and it is not obviously absurd on a screen. That is exactly what makes it dangerous.' }
        ] },
        { kind: 'table', caption: 'One tower, one neighbour, and what each numbering says', head: ['Quantity', 'Old numbering', 'Current numbering', 'Changed by the shift?'], rows: [
          ['The tower', '0, 0', '155,000, 463,000', 'yes, by the offset'],
          ['A point 700 m west and 300 m south', 'minus 700, minus 300', '154,300, 462,700', 'yes, by the same offset'],
          ['Distance between those two points', '762 metres', '762 metres', 'no'],
          ['Distance if the two points are taken from different systems', 'not applicable', 'about 489 kilometres', 'a pure artefact of mixing']
        ] },
        { kind: 'callout', h3: 'Coordinates are relative to a choice; differences are not', p: 'An absolute coordinate is only meaningful once you say which origin it is measured from, and origins are chosen by committees for practical reasons, moved when the reasons change, and rarely recorded in the same file as the numbers. What survives a change of origin is every quantity built from differences: distances, areas, bearings, shapes. What does not survive is any statement about a single point on its own. The practical rule is to carry the name of the system alongside every coordinate, refuse to combine two points whose systems differ, and use a sanity check on scale, because a wrong answer here arrives as a number rather than as an error. This is not the same as a datum that drifts underneath a measurement; here nothing moved and nothing drifted. Somebody added a constant, and every absolute value in the country changed with it. The figures in the table were computed before this paragraph was written, from the two published coordinates of the tower.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any value that is measured from somewhere',
      intro: 'Grid references, timestamps counted from an epoch, temperatures in one scale or another, financial figures indexed to a base year, version numbers: all of them are offsets from a choice that somebody made once. Practised on the tower this city is known for.',
      body: [
        { kind: 'table', caption: 'When a number is a position rather than an amount', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Name the system', 'Store the reference system beside every coordinate or timestamp', 'Two points from different grids subtracted', 'Values that can be combined safely'],
          ['Refuse mixed operations', 'Make the code raise an error when systems differ, rather than converting silently', 'A 489-kilometre answer with no warning', 'Failure that is loud instead of quiet'],
          ['Prefer differences', 'Build results from subtractions, which survive a change of origin', 'A conclusion that breaks when the origin moves', 'Answers that outlive the convention'],
          ['Check the scale', 'Ask whether the magnitude is plausible for the thing being measured', 'Neighbours reported as a country apart', 'A cheap last line of defence'],
          ['Record the change', 'When an origin or epoch moves, write down the date and the offset', 'Two vintages of data merged years later', 'A conversion anybody can reverse']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Squared paper, a class of children, and a mark labelled zero in the middle. Everyone writes down where their desk is. Then the teacher rubs out the zero and puts it in the corner, and everyone writes their desk down again. All the numbers changed, nobody moved, and the distance between any two desks is exactly what it was.' },
          { h3: 'For teenagers', p: 'The two conversion lines in Python, a point class that carries the name of its system, and an arithmetic operator that refuses to work across systems. Then the stretch: given only a list of distances between pairs of points, can you recover the coordinates, and in how many different ways?' },
          { h3: 'For adults', p: 'The same audit on something at work that is measured from an epoch: timestamps in seconds since different starting points, index numbers with different base years, versions of a figure rebased after a reorganisation. Adults regularly find two systems in one spreadsheet with nothing marking the boundary.' }
        ] },
        { kind: 'p', text: 'The population, household, area, school, tower and city-rights figures come from the offices and entries named beside them. The 762 metres, the 489 kilometres and the converted coordinates are this page\'s arithmetic on the two published positions of the tower, and the illustrative neighbouring point is a worked example rather than a real address.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From squared paper to an operator that refuses to mix two grids',
    intro: 'The starting rung is decided in the free hour, and no part of the decision involves the wijk.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Move the zero', p: 'Children write down where their desks are, watch the origin move, and see what stayed the same.', courses: ['kids-coding-blocks-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Coordinates and differences', p: 'Learners convert between two numberings and prove that distances do not change.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Types that carry their system', p: 'Teenagers build a point that knows its grid and an operator that refuses to cross grids.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Epochs and base years at work', p: 'Adults audit a file for two reference systems living side by side without a label.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will compute the distance between two coordinates without asking which grid they are on. Why should a child in Amersfoort learn to ask?',
    intro: 'Because the formula is right, the arithmetic is right, and the answer can be out by the length of the country.',
    p1: 'Hand a tool two pairs of numbers and ask for the distance and it will subtract, square, add and take the root, correctly. Nothing in those four numbers records which origin each was measured from, so nothing in the calculation can catch the case where they differ. The result comes back as a tidy figure with metres after it, and the only defence is a person who knows that a coordinate is a position relative to a choice, and who checks the scale before believing it.',
    p2: 'That is why the learner builds the type that carries its system and the operator that refuses. It is a small piece of code and a large habit: the recognition that many numbers in working life are offsets from a convention, and that conventions get changed by people who will not be there when your file is opened. A twelve-year-old in Vathorst who has moved the zero on squared paper will ask which epoch a timestamp is counted from at twenty-two, and which base year an index uses at thirty-two. Tools will keep getting better at geometry. They will not start knowing what your origin was.',
    closer: 'The case for a child in Amersfoort learning to code in 2026 is therefore not about surveying. It is that a great many numbers are positions rather than amounts, that positions mean nothing without a stated reference, and that the cheapest way to learn it permanently is to move the origin of the country\'s own grid and watch every coordinate change while the tower stands still.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a city that grew outwards in rings',
    intro: 'Vathorst to the old centre is a real ride for a ten-year-old on a winter evening, and Hooglanderveen is further still. The lesson removes the ride.',
    cells: [
      { h3: 'Nothing to cycle to in the dark', p: 'The class runs at the kitchen table in Vathorst, Hoogland or the old centre at one fixed hour every week, in December as readily as in May.' },
      { h3: 'English for the teaching, Dutch for the school words', p: 'Instruction is in English. Groep, havo, vwo and profielkeuze stay Dutch, because those are the words on the child\'s timetable, and nothing is translated in either direction.' },
      { h3: 'What the first hour produces', p: 'Work pitched at the level the learner is genuinely at, the name of a course that follows from it, and a weekly slot. No payment details are needed for any of that.' },
      { h3: 'Level, not address, decides the group', p: 'Two learners at the same stage work together whether one is in Hooglanderveen and the other in Kattenbroek; two at different stages do not.' },
      { h3: 'Two lessons a week, on the middle calendar', p: 'Usually eight lessons a month at a fixed time. Amersfoort takes its school holidays with regio Midden, along with the rest of the province of Utrecht, and holiday weeks go into the plan before the slot is fixed.' },
      { h3: 'Three and a half hours, or four and a half', p: 'The Dutch clock shifts twice a year and the Indian one never does, so the gap to the teacher depends on the month. Slots run from the end of the school day into the evening, and both weekend days are open.' }
    ],
    spec: { title: 'The fastest-growing city in this series, and the schools show it', p: 'Amersfoort has added 51,375 people since 1995, a rise of 46 percent, and the new districts are full of primary-age children. A class that scales by adding a group at a new hour, rather than by finding a room, is well suited to a city whose demand is growing faster than its buildings.' }
  },

  fees: {
    h2: 'The fee, in dollars, in every wijk and both villages',
    intro: 'Published here rather than kept for a phone call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'A single international rate applies, quoted in dollars and never in euros, so Hooglanderveen is charged exactly what the old centre is. Money changes hands only after the free lesson has produced a course and a timetable, and it changes hands over WhatsApp. Pausing, changing plan and missing a week are described on the pricing page.'
  },

  reviewsH2: 'Six families, in the words they left on Google',

  book: {
    h2: 'Tell us the level; the wijk number can wait',
    intro: 'The first task might be squared paper with the zero in a new place, a point class in Python that refuses to be subtracted from a different grid, or a spreadsheet at work holding two reference systems with nothing to tell them apart.',
    success: 'Thank you. Your Amersfoort class request has been sent.'
  },

  faq: {
    h2: 'Amersfoort coding class questions',
    intro: 'The city, its tower, its districts, the teaching and the terms.',
    items: [
      { q: 'Why is a coding page talking about the national grid?', a: 'Because the reference point of the Rijksdriehoeksmeting is the Onze-Lieve-Vrouwetoren in this city, and its story is the clearest demonstration of a common software error. The tower was the origin of the system, so its coordinates were zero and zero; around 1970 the origin was moved outside the country for practical reasons and the tower acquired the coordinates 155,000 by 463,000 without moving. Mix a point from one numbering with a point from the other and a program will report neighbours as roughly 489 kilometres apart, with no error message. Building the guard against that is the project on this page.' },
      { q: 'Which parts of the municipality does this page cover?', a: 'All of it: the medieval core, Schothorst and Zielhorst, Kattenbroek and Nieuwland, Vathorst, and the villages of Hoogland and Hooglanderveen. The statistics office divides the municipality into 33 wijken and 145 buurten, and none of those lines affects a class.' },
      { q: 'How old is Amersfoort?', a: 'It received city rights on 12 June 1259, and its gates, including the Koppelpoort, were built between 1380 and 1451. The Onze-Lieve-Vrouwetoren is 98 metres and the third-highest church tower in the country.' },
      { q: 'Is any of this taught in Dutch?', a: 'No. Lessons run in English from beginning to end. Dutch school vocabulary is kept as it is, so groep, havo, vwo and profielkeuze are spoken as the child hears them, but there is no Dutch-language version of the course.' },
      { q: 'What time are classes for a family in Amersfoort?', a: 'The teacher is three and a half hours ahead under Dutch summer time and four and a half in winter, since the Indian clock does not change. Workable hours run from the end of the school day to mid-evening, with both weekend days available, and one recurring slot is agreed during the free lesson.' },
      { q: 'We are in Vathorst or Hooglanderveen, out on the northern edge. Does that matter?', a: 'Only in that the journey never has to happen. A learner in Hooglanderveen joins the same group at the same hour and the same fee as one in the old centre, and the ride across the city on a February evening is not part of it.' },
      { q: 'What is in the free lesson?', a: 'The teacher finds the edge of what the learner already manages and sets one piece of work just past it. For a child that might be squared paper and a zero that moves. For a teenager, a point type that refuses to be combined across grids. For an adult, a file with two reference systems in it. It ends with a course, a rung, a weekly time and a price in dollars, and nothing has been charged.' },
      { q: 'Is there a Modern Age Coders classroom in Amersfoort?', a: 'No, and none is claimed near Lange Jan, in Vathorst or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Amersfoort coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in an Amersfoort group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or district. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'South-west to the city, east to the Veluwe, and up to the country',
    html: 'Amersfoort is the second city of the <a class="cg-inline-link" href="/coding-classes-in-utrecht-province">province of Utrecht</a>, whose page is about superlatives that need a measure attached; the first is <a class="cg-inline-link" href="/coding-classes-in-utrecht">Utrecht</a> itself, and east across the Veluwe is <a class="cg-inline-link" href="/coding-classes-in-apeldoorn">Apeldoorn</a>. Every page in this series descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and for machine learning rather than software the doors are <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> and the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-utrecht-province', label: 'Province of Utrecht' },
    { href: '/coding-classes-in-utrecht', label: 'Utrecht' }
  ],

  personalityCss: `
.cg-root.cg-amf .cg-hero-grid { align-items: center; gap: clamp(1.65rem, 4vw, 3.05rem); }
.cg-root.cg-amf .cg-hero h1 { font-weight: 500; letter-spacing: -0.009em; line-height: 1.12; }
.cg-root.cg-amf .cg-capsule { border-left-width: 4px; border-left-style: solid; border-top: 4px solid var(--cg-accent-soft); padding-left: 1.4rem; padding-top: 0.7rem; }
.cg-root.cg-amf .cg-eyebrow { letter-spacing: 0.12em; font-weight: 600; }
.cg-root.cg-amf .cg-section-head h2 { max-width: 32ch; }
.cg-root.cg-amf .cg-grid-3 { grid-template-columns: repeat(auto-fit, minmax(232px, 1fr)); gap: clamp(1.15rem, 2.4vw, 1.85rem); }
.cg-root.cg-amf .cg-ladder-col { border-top: 2px dashed var(--cg-accent); padding-top: 1.2rem; }
.cg-root.cg-amf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-amf .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'City and municipality of Amersfoort, province of Utrecht: 163,764 residents (CBS 1 January 2026), the second city of the province and the sixteenth municipality of the country; 47 primary establishments (14,380 pupils) and 25 secondary (9,900), both 2025; 4,040 residents in applied higher education and 1,860 at university level. City rights 12 June 1259; villages Hoogland and Hooglanderveen; 33 wijken and 145 buurten, the finest division in this series; the fastest growth in this series at 46 percent since 1995. Regio Midden holidays. The city page argues from the national grid origin; the province page owns the superlative-without-a-measure project and Utrecht city owns its own.',
    localProject: 'Coordinates are relative to a choice; differences are not. The Onze-Lieve-Vrouwetoren in Amersfoort is the central point of the Rijksdriehoeksmeting coordinate system. It was the origin, so its coordinates were 0 and 0; around 1970 the origin was moved outside the Netherlands for practical reasons and the tower now has exactly x = 155,000 m and y = 463,000 m without having moved. A change of origin adds a constant to every coordinate, so distances, bearings and areas are unchanged while absolute positions all shift. Mixing one point in the old numbering with one in the new returns about 489 kilometres for two points 762 metres apart, silently. Distinct from the datum trap (Almere: a vertical reference that stays fixed while the sea rises beneath a claim) because nothing here moved or drifted: a constant was added by decree, and the invariant is the difference. Computed before writing from the two published positions of the tower; the neighbouring point is a worked example, not a real address.',
    requiredMentions: [
      '163,764',
      '73,602',
      '27,982',
      '112,389',
      '14,380',
      '9,900',
      '155,000',
      '463,000',
      'Onze-Lieve-Vrouwetoren',
      'Koppelpoort',
      'Hoogland',
      'Hooglanderveen',
      'Lucas Bolsius',
      'Rijksdriehoeksmeting'
    ],
    sources: [
      { claim: 'Amersfoort 163,764 residents on 1 January 2026 (CBS provisional); 73,602 households averaging 2.18, 27,982 single-person (38 percent); 26,970 aged 0 to 15; 19,421 aged 15 to 25; 45,323 aged 25 to 45; 28,061 aged 65 and over; total area 6,386 ha, land 6,249 ha; density 2,613; 47 primary establishments (14,380 pupils) and 25 secondary (9,900), both 2025; HBO 4,040 and WO 1,860 (2025); 33 wijken and 145 buurten; 112,389 in 1995, a rise of 51,375 (46 percent).', url: 'https://allecijfers.nl/gemeente/amersfoort/' },
      { claim: 'Amersfoort 163,766 residents on 1 January 2026; 63.86 km2 (62.62 land, 1.24 water); mayor Lucas Bolsius (CDA); the second city of the province of Utrecht and the sixteenth municipality of the Netherlands; city rights 12 June 1259; villages Hoogland and Hooglanderveen; the Koppelpoort is a combined land and water gate among gates built between 1380 and 1451; the Onze-Lieve-Vrouwetoren, called Lange Jan, is 98 metres and the third-highest church tower in the Netherlands; it is the central point of the coordinate system of the Rijksdriehoeksmeting and was its origin until around 1970, when the origin was moved for practical reasons to a point outside the Netherlands so that the tower now has exactly the coordinates x = 155,000 m and y = 463,000 m.', url: 'https://nl.wikipedia.org/wiki/Amersfoort' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any reason for the specific values 155,000 and 463,000 beyond the one the source gives, which is that the origin was placed outside the country for practical reasons. Explanations involving the ordering of the two axes are commonly repeated and are not stated here.',
      'The exact year of the origin shift. The source says around 1970 and the page keeps the hedge.',
      'A real address for the illustrative neighbouring point. It is a worked example at 700 metres west and 300 metres south of the tower.',
      'The architect or a single construction year for the Koppelpoort. Not found at source.',
      'That Amersfoort is the fastest-growing municipality in the Netherlands. The page says only that it is the fastest-growing city in this series.',
      'Anything the province of Utrecht page owns: the four-measure superlative project. Anything the Utrecht city or Apeldoorn pages own.'
    ]
  }
};
