'use strict';
// Leiden: the oldest university in the country, the smallest area of any Dutch
// city above 100,000, and a gunpowder disaster in 1807 whose charge is recorded
// in Hollandse ponden. Spine: a unit can keep its name and change its size, so
// converting 37,000 of those with a modern pound loses almost a tonne.

module.exports = {
  slug: 'coding-classes-in-leiden',
  code: 'lde',
  accent: '#6B390C',
  accentRationale: 'Leiden: a burnt umber for the old brick and the university buildings, set by the solver apart from Drenthe\'s ochre and Zaanstad\'s oxide red',
  pageType: 'city',
  place: {
    name: 'Leiden',
    eyebrow: 'Leiden, Zuid-Holland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Zuid-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Leiden, Netherlands',
  title: 'Coding Classes in Leiden | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Leiden for ages 6 to 67, across all 10 wijken of the university city. First lesson free, then one flat monthly fee.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in Leiden, built on a unit that kept its name and changed its size between 1807 and now.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'ai-ml-masterclass-complete-college',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Leiden Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the wijken of Leiden, taught in English.'
  },

  h1: 'Coding classes in Leiden, where a pound in 1807 was not the pound you would convert it with',
  capsuleQ: 'What are the best coding classes in Leiden?',
  capsule: 'Coding classes in Leiden serve 130,328 people (Statistics Netherlands, 1 January 2026) packed onto 21.85 square kilometres of land, which its own entry calls by far the smallest area of any Dutch city above a hundred thousand. In 1807 a boat carrying 37,000 Hollandse ponden of gunpowder exploded here, and the same source gives that charge as 17,760 kilograms, which works out at 0.48 kilograms to the pond rather than the 0.4536 of a modern pound. Throughout the city, Modern Age Coders teaches on a live connection and in English, taking learners at any age between 6 and 67. The first hour is given free. Afterwards it is USD 100 a month in a group of five to ten, and USD 150 with a teacher to yourself.',
  lead: 'A record from 1807 says the boat carried 37,000 pounds of gunpowder. Convert that with the pound on your phone and you get 16,783 kilograms. The source itself says 17,760, because the Hollandse pond of the day was 0.48 kilograms rather than 0.4536. Almost a tonne of explosive goes missing in a conversion that looks completely routine, and nothing in the word pound warns you. A child who has met one unit that changed size behind its own name will check the others before trusting a number that crossed a century.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Leiden.',

  picks: {
    eyebrow: 'Course picks for Leiden',
    h2: 'Four courses for a city with forty thousand students in it',
    intro: 'A groep 5 child in the Merenwijk, a teenager in Leiden-Zuidwest who wants the maths behind the model, a university student whose degree assumes programming it never taught, and a parent in the Stevenshof handling data from three decades: four doors into a very small city.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python, turtle drawings and a first program that learns a rule, in English, for the groep 5 to 8 child anywhere in the city.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Python and real datasets to a first trained model, for the teenager who wants to handle evidence rather than opinions.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'College and adult', note: 'Deep learning and generative AI in Python, for the student who needs the mathematics under the library call.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Excel, SQL, Python and BI, for the working parent whose sources span decades and disagree about their own units.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Leiden today',
      h2: 'The densest city in this series, and the one with the most students',
      intro: 'The national register held 130,328 people on 1 January 2026, in 74,251 households averaging 1.74 people, on 21.85 square kilometres of land inside 23.27 of territory. The published density is 5,979 residents to the square kilometre against a national average of 536, the highest in this series. In 1995 the count was 115,442, so Leiden has gained 14,886 people in thirty-one years, a rise of 13 percent.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Fifty-seven percent living alone', p: '42,159 of the 74,251 households hold exactly one person, the highest share in this series. 23,428 residents are between fifteen and twenty-five, 18 percent, and only 14,836 are under fifteen, 11 percent; 40,965 are between twenty-five and forty-five, 29,253 between forty-five and sixty-five and 21,846 are sixty-five or over.' },
          { h3: 'Forty thousand students on twenty-two square kilometres', p: 'The municipality counts 40,949 students at institutions here for 2025, alongside 3,730 residents in applied higher education and 13,240 at university level. Those two figures answer different questions and are never added on this page. Leiden University was founded in 1575, on 8 February by the Julian calendar, by Willem van Oranje, and is described as the oldest university in the Netherlands.' },
          { h3: 'Twenty-five primary schools, sixteen secondary', p: '25 primary establishments teach 8,070 pupils and 16 secondary establishments teach 5,510, both for 2025. For a city of this size those are small numbers, which is what an age structure with only 11 percent under fifteen produces.' }
        ] },
        { kind: 'spec', title: 'A city that cannot spread out', p: 'Its own entry says that of all Dutch cities above a hundred thousand residents, Leiden has by far the smallest area, and it holds more than 1,250 national monuments inside it. The Burcht, a motte castle, stands where two arms of the Rhine meet, and city rights date from 1266.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Ten wijken on twenty-two square kilometres',
      intro: 'Leiden is a single woonplaats divided into 10 wijken and 54 buurten. Nothing here is more than a few kilometres from anything else, which changes what an online class is competing against.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The old centre', p: 'Inside the singel, with the Burcht, the canals, the university buildings and a large share of the 1,250-plus national monuments. Also where a great many of the 42,159 single-person households are.' },
          { h3: 'Leiden-Noord', p: 'North across the Rhine, the nineteenth and twentieth-century working districts. Younger families than the centre and the fullest primary schools in the municipality.' },
          { h3: 'The Merenwijk', p: 'The 1970s expansion in the north-east, planned around its own centre and green space, and one of the few parts of the city with room between the buildings.' },
          { h3: 'Leiden-Zuidwest and the Stevenshof', p: 'The post-war and 1980s districts in the south-west, past the ring road. Family housing, primary schools and a real bicycle ride to the university quarter.' },
          { h3: 'Roodenburgerdistrict and the east', p: 'The older residential districts towards Leiderdorp, with the botanical gardens and the museums, and the shortest walk to the station of anywhere outside the centre.' },
          { h3: 'The Bio Science Park side', p: 'North-west of the station, the research and teaching quarter that pulls in much of the 40,949 student figure. Very few of the people counted there are counted in the household figures for the same ground.' }
        ] },
        { kind: 'p', text: 'One hour, one fee and one class serve all ten wijken. What a learner can already do settles the grouping; where they live never enters into it.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, and the conversion the sources did for us',
      intro: 'The national count, the municipal entry, the university, and the 1807 record the project below is built on.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands: 130,328 residents in 2026; 74,251 households for 2025 averaging 1.74 people, 42,159 of them single-person, 57 percent; 14,836 under fifteen; 23,428 aged fifteen to twenty-five; 40,965 aged twenty-five to forty-five; 29,253 aged forty-five to sixty-five; 21,846 aged sixty-five and over; 25 primary establishments with 8,070 pupils and 16 secondary with 5,510, both 2025; 40,949 students at institutions here for 2025; 3,730 residents in applied higher education and 13,240 at university level; total area 2,327 hectares, land 2,185; density 5,979 against a national average of 536; one woonplaats, 10 wijken and 54 buurten; 115,442 residents in 1995, a rise of 14,886.' },
          { h3: 'The municipality, described', p: 'Its own entry: 130,302 residents on 1 January 2026, 26 fewer than the national figure for the same date, both kept; 23.27 square kilometres, 21.91 of land and 1.36 of water, against 21.85 of land nationally, both kept; a published density of 5,947 against the national source\'s 5,979, both kept; mayor Peter Heijkoop since 19 September 2024; city rights 1266; more than 1,250 national monuments; of all cities above a hundred thousand residents, by far the smallest area.' },
          { h3: 'The university', p: 'Leiden University, founded in 1575, with the exact date given as 8 February 1575 on the Julian calendar, by Willem van Oranje; described as the oldest university in the Netherlands; more than 34,000 students enrolled as of 2021; 5,848 staff; seven faculties.' },
          { h3: 'The disaster of 1807', p: 'On 12 January 1807 at a quarter past four in the afternoon a boat carrying gunpowder from Haarlem to Delft exploded in the city. The load is recorded as 37,000 Hollandse ponden, given in the same source as 17,760 kilograms. 151 people were killed, more than two thousand injured, and about 220 dwellings destroyed or condemned.' },
          { h3: 'What the two figures imply', p: 'Dividing 17,760 kilograms by 37,000 ponden gives 0.48 kilograms to the pond. The source did that conversion itself; this page has only performed the division to recover the factor, and it uses no other value for the Hollandse pond anywhere.' },
          { h3: 'The Burcht', p: 'A motte castle at the confluence of two arms of the Rhine, in the middle of the old city. No construction date was read at source and none is stated here.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, the university or any school named here and claims none. The 1807 casualty figures are quoted because they are part of the record this page reads, and they are quoted exactly rather than rounded.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Thirty-seven thousand pounds of what? Build the converter that asks which pound',
      intro: 'One historical load, three plausible conversion factors, and a spread of nearly two tonnes between the answers.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Convert it the obvious way', p: 'The learner takes 37,000 pounds and the factor everybody knows, 0.45359237 kilograms, and gets 16,783 kilograms. It is arithmetic anybody can check and it is the wrong answer, because the pound in the record is not the pound in the formula.' },
          { h3: '2. Recover the factor from the source', p: 'The same source gives the load as 17,760 kilograms. Dividing by 37,000 returns 0.48 kilograms to the pond. So the historical Hollandse pond used here is about 5.8 percent heavier than the modern one, and the routine conversion understates the charge by 977 kilograms.' },
          { h3: '3. Try the third plausible factor', p: 'After metrication a Dutch pond was defined as half a kilogram exactly, and a reader who assumed that would get 18,500 kilograms, overstating by 740. Three defensible factors, three answers, and a spread of 1,717 kilograms on a figure that was never in doubt to begin with.' }
        ] },
        { kind: 'table', caption: 'One load of 37,000 ponden, converted three ways', head: ['Assumed factor', 'Where it comes from', 'Result', 'Difference from the source'], rows: [
          ['0.4536 kg', 'the modern avoirdupois pound', '16,783 kg', '977 kg too little'],
          ['0.48 kg', 'recovered from the source\'s own two figures', '17,760 kg', 'the published value'],
          ['0.5 kg', 'the metric pond, defined after metrication', '18,500 kg', '740 kg too much'],
          ['none', 'quoting 37,000 pounds without converting', 'no kilograms at all', 'the safest option of the four']
        ] },
        { kind: 'callout', h3: 'A unit can keep its name and change its size, and the name will not tell you', p: 'Units are words, and words drift. The pound, the mile, the gallon, the ton, the acre and the horsepower have all meant different quantities in different places and centuries, and a historical document uses the local value of its own day without ever saying so. The danger is not that conversion is hard but that it is easy: the modern factor is in every phone and library, it produces a clean number, and nothing anywhere raises an objection. Three defences work and all are cheap. Store the unit with the value and never the value alone. When a source gives both the original and a conversion, divide to recover the factor it used, and keep that factor beside the record. And when in doubt, quote the original quantity in its original unit rather than a converted number that looks more precise than the evidence. The three results above are arithmetic on figures published in the sources named, and this page uses no factor for the Hollandse pond other than the one its source implies.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for numbers that arrive with a unit attached',
      intro: 'Currencies before redenomination, calories against kilojoules, tons long and short and metric, gallons on either side of an ocean, miles nautical and statute: the label survives while the quantity moves. Practised on a load that blew up in this city in 1807.',
      body: [
        { kind: 'table', caption: 'When the unit is a word rather than a definition', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Bind unit to value', 'Never store a number without the unit in the same field or record', 'A quantity converted with the wrong factor', 'Data that can be checked later'],
          ['Date the unit', 'Record when and where the measurement was made', 'A 1807 pound converted at a 2026 rate', 'The information needed to pick a factor'],
          ['Recover the factor', 'Where a source gives original and converted, divide and keep the ratio', 'A silent disagreement between sources', 'The source\'s own assumption, in the open'],
          ['Prefer the original', 'Quote the historical quantity in its own unit when the factor is uncertain', 'False precision in kilograms', 'A number the reader can convert themselves'],
          ['Test the conversion', 'Run a known value through the converter before trusting it on unknowns', 'A factor typed once and wrong forever', 'Confidence that survives review']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Two rulers, one marked in centimetres and one an old wooden one in inches, and a table to measure. The two answers are different numbers for the same table. The children work out that the number is meaningless without the ruler, and that writing down only the number loses the more important half.' },
          { h3: 'For teenagers', p: 'A quantity type in Python that carries a unit and a date, a converter that refuses to run without both, and the three factors above applied to the 1807 load. Then the stretch: find another quantity in a historical source and work out what its unit would have meant at the time.' },
          { h3: 'For adults', p: 'The same audit on a spreadsheet at work that mixes units: currencies before and after a redenomination, weights in two systems, energy in calories and joules. Adults very commonly find one column whose unit was never written down and is now known only by whoever built it.' }
        ] },
        { kind: 'p', text: 'The population, household, area, school, university and 1807 figures come from the offices and entries named beside them. The 0.48 kilograms to the pond is recovered by dividing two figures the source publishes together, and the 16,783 and 18,500 kilogram results are this page applying two other stated factors to the same published load.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From two rulers and one table to a converter that refuses without a date',
    intro: 'The starting rung is decided in the free hour, and the wijk on the address plays no part.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Which ruler?', p: 'Children measure one table twice and find the number is useless on its own.', courses: ['kids-coding-blocks-masterclass', 'python-ai-kids-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Numbers that carry units', p: 'Learners store a value with its unit and see what breaks when the unit is dropped.', courses: ['maths-through-coding', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 14 to 18', h3: 'Factors, dates and doubt', p: 'Teenagers recover a factor from a source and report a range when it is uncertain.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Mixed units at work', p: 'Adults audit a live file for a column whose unit exists only in somebody\'s memory.', courses: ['ai-ml-masterclass-complete-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will convert 37,000 pounds to kilograms instantly. Why should a child in Leiden learn to ask which pound?',
    intro: 'Because the conversion is correct for the pound it assumed, and the record is using a different one.',
    p1: 'Ask a tool to turn 37,000 pounds into kilograms and it will return about 16,783 without hesitation, because that is what the word pound means today. The historical source says 17,760, and the gap of 977 kilograms comes entirely from a definition that changed while the word did not. A model reading the number has nothing to work with except the word, and the word is the part that is stable and misleading at once.',
    p2: 'Which is why the learner builds the quantity type that carries a unit and a date and refuses to convert without them. That is a small amount of code enforcing a large amount of discipline, and the discipline transfers immediately: to currencies before a redenomination, to tons of three different sizes, to any figure that crossed a border or a century before reaching the spreadsheet. A thirteen-year-old in the Merenwijk who has recovered a factor from a source will ask, at twenty-three, which pound, which dollar, which ton. Tools will keep converting faithfully. Knowing what to convert from is the part a person has to supply.',
    closer: 'The case for a Leiden child learning to code in 2026 is therefore not about history. It is that a unit is a word with a definition attached somewhere else, that the definition moves while the word stays, and that the cheapest way to learn it permanently is on a number from this city that will not convert cleanly.',
    blogAnchor: 'why writing code still repays a child in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for the most crowded city in this series',
    intro: 'Leiden fits 130,328 people onto twenty-two square kilometres, so nothing is far. What is scarce here is space and time rather than distance, and a class that needs no room and no journey suits that.',
    cells: [
      { h3: 'No room to book, no journey to make', p: 'The lesson happens at the kitchen table in the Stevenshof, the Merenwijk or the old centre at one fixed hour a week.' },
      { h3: 'English carries the teaching; the school words stay Dutch', p: 'Instruction is in English. Groep, havo, vwo and profielkeuze are used as the school uses them, and nothing is translated in either direction.' },
      { h3: 'Three things come out of the first hour', p: 'A demonstration of what the learner can genuinely do, a course selected on the strength of it, and a slot in the week. None of that requires a card.' },
      { h3: 'Ability decides the group', p: 'Two learners at the same stage work together whichever wijk they live in, and two at different stages do not.' },
      { h3: 'Twice weekly, on the middle calendar', p: 'Two lessons a week at one repeating slot, eight in most months. Leiden takes its school holidays with regio Midden along with the rest of Zuid-Holland, and weeks away go into the plan first.' },
      { h3: 'Two clocks, one of which moves', p: 'Because only the Netherlands adjusts for summer time, the teacher sits three and a half hours in front for part of the year and four and a half for the rest. Late afternoons and early evenings overlap comfortably, and Saturday and Sunday are open throughout.' }
    ],
    spec: { title: 'A city of students where the children are outnumbered', p: 'Only 14,836 residents are under fifteen, 11 percent, while 23,428 are between fifteen and twenty-five. A child growing up here is in a minority, and the group of five to ten that this class forms is drawn from the whole country rather than from one street, which for some families is exactly the point.' }
  },

  fees: {
    h2: 'The fee, in dollars, in all ten wijken',
    intro: 'Published here rather than saved for a phone call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One international rate applies, quoted in dollars and never in euros, so every address in the city sees the same figure. Payment follows the free lesson rather than preceding it and goes over WhatsApp once a course and a time are agreed. Pausing, changing plan and missing a week are described on the pricing page.'
  },

  reviewsH2: 'Six families, in the words they left on Google',

  book: {
    h2: 'Send the level; the wijk is optional',
    intro: 'The first task might be two rulers and one table, a quantity type in Python that will not convert without a date, or a column at work whose unit lives only in the memory of whoever built it.',
    success: 'Thank you. Your Leiden class request has been sent.'
  },

  faq: {
    h2: 'Leiden coding class questions',
    intro: 'The city, its university, its records, the teaching and the terms.',
    items: [
      { q: 'Why does this page make a point about pounds?', a: 'Because a record from this city shows the problem cleanly. On 12 January 1807 a boat carrying 37,000 Hollandse ponden of gunpowder exploded here, and the same source gives that load as 17,760 kilograms, which implies 0.48 kilograms to the pond. Convert with the modern pound of 0.4536 and you get 16,783, understating by 977 kilograms; assume the metric pond of half a kilogram and you get 18,500, overstating by 740. Building the converter that asks which pound is the project on this page.' },
      { q: 'Is Leiden University really the oldest in the Netherlands?', a: 'Its own entry describes it that way, and gives the founding as 1575, on 8 February by the Julian calendar, by Willem van Oranje. That is a properly formed claim with a set, a measure and a date, which is more than many superlatives manage.' },
      { q: 'Which parts of the city does the class cover?', a: 'All of it. Leiden is a single woonplaats divided into 10 wijken and 54 buurten across twenty-two square kilometres of land, and the class reaches every one of them at the same hour and the same fee.' },
      { q: 'Is any of this taught in Dutch?', a: 'It is not. English is the working language of the class throughout. Four Dutch terms are deliberately untouched, groep and havo and vwo and profielkeuze, because those are what appears on a real timetable. No Dutch-medium version of the course is offered.' },
      { q: 'What time are classes for a family in Leiden?', a: 'Dutch summer time leaves a gap of three and a half hours to the teacher and Dutch winter time a gap of four and a half, since Indian clocks are fixed all year. In practice anything from the close of the school day until mid-evening is workable, along with the entire weekend, and a single recurring time is chosen during the free lesson and then kept.' },
      { q: 'How many students are there in Leiden?', a: 'Two counts answer two questions and this page adds neither to the other. The municipality reports 40,949 students at institutions here for 2025, while 3,730 residents are registered in applied higher education and 13,240 at university level. The university separately reported more than 34,000 enrolled as of 2021. Studying somewhere and living somewhere are different facts.' },
      { q: 'Is Leiden really that crowded?', a: 'It is the densest municipality in this series, at a published 5,979 residents to the square kilometre against a national average of 536, and its own entry says that of all Dutch cities above a hundred thousand people it has by far the smallest area. It also holds more than 1,250 national monuments, which is part of why it cannot spread.' },
      { q: 'Is there a Modern Age Coders classroom in Leiden?', a: 'No, and none is claimed near the Burcht, at the Bio Science Park or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Leiden coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Leiden group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or wijk. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'South to the ministries, out to the province, and up to the country',
    html: 'South along the line are <a class="cg-inline-link" href="/coding-classes-in-the-hague">The Hague</a> and <a class="cg-inline-link" href="/coding-classes-in-zoetermeer">Zoetermeer</a>, and Leiden sits in <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>, whose page is about a region nobody drew a boundary for. The parent of the whole series is the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>. Anyone whose real target is a trained model, not a working program, has two other places to begin: <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> and the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-zuid-holland', label: 'Zuid-Holland' },
    { href: '/coding-classes-in-the-hague', label: 'The Hague' }
  ],

  personalityCss: `
.cg-root.cg-lde .cg-hero-grid { align-items: center; gap: clamp(1.6rem, 3.8vw, 2.95rem); }
.cg-root.cg-lde .cg-hero h1 { font-weight: 500; letter-spacing: -0.0095em; line-height: 1.13; }
.cg-root.cg-lde .cg-capsule { border-left-width: 6px; border-left-style: double; padding-left: 1.4rem; }
.cg-root.cg-lde .cg-eyebrow { letter-spacing: 0.115em; font-weight: 700; }
.cg-root.cg-lde .cg-section-head h2 { max-width: 33ch; }
.cg-root.cg-lde .cg-grid-3 { gap: clamp(1.1rem, 2.3vw, 1.75rem) clamp(1.3rem, 2.75vw, 2rem); }
.cg-root.cg-lde .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1.2rem; }
.cg-root.cg-lde .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lde .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'City and municipality of Leiden, Zuid-Holland: 130,328 residents (CBS 2026) on 21.85 km2 of land, the densest in this series at a published 5,979 against a national average of 536; 25 primary establishments (8,070 pupils) and 16 secondary (5,510), both 2025; 40,949 students at institutions here. Leiden University founded 1575. A single woonplaats with 10 wijken and 54 buurten; city rights 1266; more than 1,250 national monuments. Regio Midden holidays with the rest of Zuid-Holland. The city page argues from historical units; the province page owns the Randstad boundary question and The Hague and Zoetermeer own their own.',
    localProject: 'A unit can keep its name and change its size. The Leiden gunpowder disaster of 12 January 1807 is recorded as a load of 37,000 Hollandse ponden, given in the same source as 17,760 kilograms, which implies 0.48 kg to the pond. Converting with the modern avoirdupois pound of 0.45359237 gives 16,783 kg, understating by 977; assuming the post-metrication Dutch pond of 0.5 kg gives 18,500 kg, overstating by 740; the spread across three defensible factors is 1,717 kg on a load nobody disputes. The learner builds a quantity type carrying unit and date, recovers the source factor by division, and prefers the original unit where the factor is uncertain. Distinct from the two-units trap (Rotterdam: TEU against tonnes, two different quantities measured at once) and from the datum and origin traps: here one quantity has one unit whose definition moved while its name did not. All three results are arithmetic on published figures, and no factor for the Hollandse pond is used other than the one the source implies.',
    requiredMentions: [
      '130,328',
      '74,251',
      '42,159',
      '115,442',
      '8,070',
      '5,510',
      '40,949',
      '37,000',
      '17,760',
      '12 January 1807',
      'Hollandse',
      'Burcht',
      'Heijkoop',
      '1575'
    ],
    sources: [
      { claim: 'Leiden 130,328 residents in 2026 (CBS); 74,251 households (2025) averaging 1.74, 42,159 single-person (57 percent); 14,836 aged 0 to 15; 23,428 aged 15 to 25; 40,965 aged 25 to 45; 29,253 aged 45 to 65; 21,846 aged 65 and over; total area 2,327 ha, land 2,185 ha; density 5,979 per km2 against a national average of 536; 25 primary establishments (8,070 pupils) and 16 secondary (5,510), both 2025; 40,949 students at institutions in the municipality (2025); HBO 3,730 and WO 13,240 (2025); one woonplaats, 10 wijken and 54 buurten; 115,442 in 1995, a rise of 14,886 (13 percent).', url: 'https://allecijfers.nl/gemeente/leiden/' },
      { claim: 'Leiden 130,302 residents on 1 January 2026; 23.27 km2 (21.91 land, 1.36 water); density 5,947 per km2; mayor Peter Heijkoop (CDA) since 19 September 2024; city rights 1266; more than 1,250 rijksmonumenten; of all cities above 100,000 inhabitants Leiden has by far the smallest area; the Burcht is a motte castle at the confluence of two arms of the Rhine.', url: 'https://nl.wikipedia.org/wiki/Leiden' },
      { claim: 'Leiden University founded 1575, exact date 8 February 1575 on the Julian calendar, by Willem van Oranje; described as the oldest university in the Netherlands; more than 34,000 students enrolled as of 2021; 5,848 staff; seven faculties.', url: 'https://nl.wikipedia.org/wiki/Universiteit_Leiden' },
      { claim: 'The Leidse buskruitramp occurred on 12 January 1807 at a quarter past four in the afternoon; the vessel carried 37,000 Hollandse ponden of gunpowder, given as 17,760 kg, travelling from Haarlem to Delft; 151 people died, more than 2,000 were injured, and about 220 dwellings were destroyed or condemned.', url: 'https://nl.wikipedia.org/wiki/Leidse_buskruitramp' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any independent value for the Hollandse pond. The page uses only the 0.48 kg implied by dividing the source\'s own two figures, and says so.',
      'A construction date for the Burcht. Not read at source.',
      'Any sum or difference of the 40,949 students at institutions and the 16,970 residents enrolled. They count different things and are never combined.',
      'A claim that Leiden is the densest municipality in the Netherlands. The page says only that it is the densest in this series, and quotes the entry\'s own smallest-area claim as the entry states it.',
      'Anything the Zuid-Holland page owns: the Randstad boundary question and the provincial totals. Anything The Hague or Zoetermeer pages own.'
    ]
  }
};
