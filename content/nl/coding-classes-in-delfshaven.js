'use strict';
// Delfshaven: 76,590 residents in nine buurten, an old harbour town swallowed
// by Rotterdam, with 15 secondary establishments teaching fewer pupils than
// nine do in Prins Alexander.
// Spine: a count answers how many there are. People use it to answer how much
// there is. Only one of those questions has data behind it.

module.exports = {
  slug: 'coding-classes-in-delfshaven',
  code: 'dfh',
  accent: '#953C41',
  accentRationale: 'Delfshaven: a brick red off the harbour warehouses and the Spangen blocks, the best-separated warm tone left in the cluster and clear of the dock green already carrying the Rotterdam Centrum page',
  pageType: 'district',
  place: {
    name: 'Delfshaven',
    eyebrow: 'Delfshaven, Rotterdam',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'City', name: 'Rotterdam' },
      { type: 'AdministrativeArea', name: 'Zuid-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-netherlands', name: 'Netherlands' },
    { slug: 'coding-classes-in-rotterdam', name: 'Rotterdam' }
  ],
  nav: [
    { label: 'Rotterdam', href: '/coding-classes-in-rotterdam' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Delfshaven, Rotterdam, Netherlands',
  title: 'Coding Classes in Delfshaven, Rotterdam | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Delfshaven, Rotterdam, for ages 6 to 67, from Spangen and Bospolder to Schiemond. First lesson free.',
  ogDescription: 'Live online coding, Python and AI for families in Delfshaven, a district with more secondary schools than its neighbour and fewer pupils in them.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'complete-app-development-masterclass-for-teens',
  verifiedOn: '9 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Delfshaven Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults across the nine buurten of Delfshaven, taught in English.'
  },

  h1: 'Coding classes in Delfshaven, which has two thirds more secondary schools than the next district and a fifth fewer pupils in them',
  capsuleQ: 'What are the best coding classes in Delfshaven?',
  capsule: 'Coding classes in Delfshaven reach 76,590 residents (1 January 2026) on 515 hectares of land at 14,944 people to the square kilometre, in 40,120 households of which 20,975 hold one person. Fifteen secondary establishments here teach 4,765 pupils. Nine in Prins Alexander teach 5,860. Two thirds more schools, a fifth fewer pupils, and the number everybody quotes is the one that gets it backwards. Modern Age Coders teaches live online in English from Spangen to Schiemond, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Delfshaven has fifteen secondary establishments and Prins Alexander has nine. Delfshaven teaches 4,765 secondary pupils and Prins Alexander teaches 5,860. Two thirds more schools in one district, a fifth fewer pupils in them, and both figures come from the same office in the same year. Count the schools and you will conclude one thing. Count the pupils and you will conclude the opposite. Only one of those counts is measuring the amount of anything, and it is not the one that is easier to get.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Delfshaven.',

  picks: {
    eyebrow: 'Course picks for Delfshaven',
    h2: 'Four courses for a district with five and a half thousand students living in it',
    intro: 'A groep 5 child in Bospolder who has run out of levels, a teenager in the Nieuwe Westen with an app in mind and no idea how one is made, one of the 2,910 university students living here who needs Python to stop being a module, and an adult in Middelland handed a set of AI tools and a deadline: four doors, and the first hour of each is free.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Real typed Python, drawings that follow instructions and a first program that works out a rule, taught in English to the groep 5 to 8 child in any of the nine buurten.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'An application carried from an empty project to something that installs and runs, for the teenager who has described one to three adults and built none of it.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'College and adult', note: 'Python from an empty file to work that runs unattended, for the student who met it in one module and wants the rest.' },
      { course: 'ai-tools-mastery-complete-college', band: 'Adults', note: 'The current tools used with judgement rather than trust, for anybody given them at work with no instructions attached.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Delfshaven today',
      h2: 'An old harbour town, now the third largest of the fourteen gebieden',
      intro: 'Delfshaven holds 76,590 residents on 596 hectares, of which 515 are land and 81 water, at a published 14,944 people to the square kilometre. It is denser than the middle of the city, has a lower average income than either district set beside it below, and houses several thousand students. Everything about the port, and about how Rotterdam families choose a secondary school, belongs to the city page and is left there.',
      body: [
        { kind: 'table', caption: 'Delfshaven as the statistics office publishes it', head: ['Field', 'Figure', 'Year', 'Worth noticing'], rows: [
          ['Residents', '76,590', '2026', 'the third largest gebied'],
          ['Households, average size', '40,120 at 1.9 people', '2025', '20,975 hold one person, 52 percent'],
          ['Dwellings, average value', '36,694 at 325,000 euro', '2025', '26,420 rented, 72 percent'],
          ['Income per resident', '30,100 euro', '2024', 'below both districts compared here'],
          ['Residents in higher education', '2,600 applied and 2,910 university', '2025', 'more at university than in applied higher education'],
          ['Primary establishments, and pupils', '28, teaching 6,828', '2025', '244 pupils each'],
          ['Secondary establishments, and pupils', '15, teaching 4,765', '2025', '318 pupils each']
        ] },
        { kind: 'grid3', cells: [
          { h3: 'Nine buurten', p: 'Oud Mathenesse, Spangen, Middelland, the Nieuwe Westen, the Witte Dorp, Tussendijken, Bospolder, Delfshaven itself and Schiemond. The district takes its name from one of the nine, which is worth knowing before anybody looks up a figure for Delfshaven and gets whichever of the two the table meant.' },
          { h3: 'A young district that is not a family district', p: '10,470 residents are under fifteen, 14 percent, and 27,430 are between twenty-five and forty-five, 36 percent. Only 9,125 are sixty-five or over, 12 percent. Household size averages 1.9 and just over half of all households are a single person.' },
          { h3: 'And a great many students', p: '2,600 residents are enrolled in applied higher education and 2,910 at university level, 5,510 in all, which is 7.2 percent of everybody living here. That is a large share and it sits underneath the district average income of 30,100 euro without explaining it, since neither figure was read as a breakdown of the other.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Three districts, three ways of counting the same thing',
      intro: 'Rotterdam publishes establishments and pupils separately for each gebied, which makes it possible to see how little the first tells you about the second. All three of these districts are in one city, in one year, counted by one office.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Delfshaven', p: 'This district, with 10,470 residents under fifteen. 28 primary establishments teaching 6,828, which is 244 each, and 15 secondary teaching 4,765, which is 318 each. The lightest establishments of the three at both levels.' },
          { h3: 'Prins Alexander', p: 'The largest gebied, out on the north-eastern edge. 28 primary establishments teaching 8,108, which is 290 each, and 9 secondary teaching 5,860, which is 651 each. The heaviest secondary establishments in the three.' },
          { h3: 'Rotterdam Centrum', p: 'The smallest gebied, in the middle of the city. 6 primary establishments teaching 1,989, which is 332 each, and 4 secondary teaching 1,622, which is 406 each. It sits between the other two on both ratios.' },
          { h3: 'The primary comparison', p: 'Delfshaven and Prins Alexander have exactly the same number of primary establishments, 28 apiece. One teaches 6,828 pupils and the other 8,108, a difference of 19 percent that the count of establishments records as zero.' },
          { h3: 'The secondary comparison', p: 'Delfshaven has 15 secondary establishments and Prins Alexander has 9, two thirds more. Delfshaven teaches 4,765 secondary pupils and Prins Alexander 5,860, a fifth fewer. The count and the pupils point in opposite directions.' },
          { h3: 'What an establishment actually is', p: 'A vestiging is a registered location, not a building and not a school. One school can hold several and one site can carry more than one entry. Nothing in the count carries a size, which is why 318 pupils and 651 pupils both appear as the number one.' }
        ] },
        { kind: 'spec', title: 'What none of this says about the schools', p: 'Nothing on this page is a judgement about any school in any of the three districts. Establishment counts, pupil counts and the ratios between them describe how provision is registered and how large the registered units are. They do not describe teaching, results or anything a parent would recognise as quality, and no source read here offers that. The comparison exists to make a point about counting, and the schools are the example rather than the subject.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, its year, and what the ratios are for',
      intro: 'One district row in full, two more for comparison, and a set of divisions performed to expose a count rather than to rank anybody.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Delfshaven', p: '76,590 residents (2026); 40,120 households averaging 1.9 (2025), 20,975 single-person at 52 percent; ages 10,470 under fifteen at 14 percent, 11,515 at 15 percent, 27,430 at 36 percent, 18,040 at 24 percent and 9,125 at 12 percent; 596 hectares total, 515 land and 81 water; density 14,944; 36,694 dwellings; average value 325,000 euro; 26,420 rented at 72 percent and 10,274 owned at 28; income 30,100 euro (2024); 2,600 residents in applied higher education and 2,910 at university level; 28 primary establishments with 6,828 pupils and 15 secondary with 4,765; nine buurten.' },
          { h3: 'The two comparison districts', p: 'Only the school columns are quoted here, because only those are used. Prins Alexander: 28 primary establishments with 8,108 pupils, 9 secondary with 5,860. Rotterdam Centrum: 6 primary with 1,989, 4 secondary with 1,622. Their populations, areas and housing belong to their own pages in this series and are not reproduced.' },
          { h3: 'Why those two and no others', p: 'Prins Alexander because it has the same number of primary establishments as Delfshaven and a different number of pupils, and fewer secondary establishments with more pupils. Rotterdam Centrum because it is the smallest gebied and sits between the two on every school ratio. Three points are enough to show a count and a quantity disagreeing.' },
          { h3: 'The ratios, and why they are here', p: 'Pupils per primary establishment come to 244, 290 and 332 across the three districts; per secondary establishment, 318, 651 and 406. Those six figures are this page dividing published counts. They are not a measure of school size in any careful sense, because an establishment is a registration rather than a school, and that is exactly the point they exist to make.' },
          { h3: 'What is not claimed', p: 'No statement about school quality, results or admissions anywhere in this district or the two compared with it. No claim about where any pupil lives, since these are counts of attendance at establishments inside a boundary. And no district average of anything computed from a subset, because every figure quoted here is published for the whole gebied.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the gebied, the city or any school in any of the three districts and claims none. Every population, household, age, area, density, dwelling, value, tenure, income, student, establishment and pupil figure comes from the national statistics office page for the wijk named beside it. The six pupils-per-establishment figures and the percentage comparisons are this page dividing those published counts.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Fifteen schools teaching fewer pupils than nine',
      intro: 'One city, one year, one office, and two columns that answer different questions while looking like they answer the same one.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Notice that the two columns disagree', p: 'Delfshaven has 15 secondary establishments to Prins Alexander\'s 9 and teaches 4,765 secondary pupils to its 5,860. If the count of establishments were standing in for the amount of secondary education, those two facts could not both be true. They are, so it is not.' },
          { h3: '2. Ask what one unit is', p: 'A vestiging is a registered location. It has no size attached to it. In these three districts one establishment means 318 pupils, or 651, or 406, and the register writes each of them down as one. Counting them adds up registrations, and registrations are not interchangeable.' },
          { h3: '3. Count the thing you actually meant', p: 'If the question is how much secondary education a district has, the pupil count answers it and the establishment count does not. The establishment count answers a genuine and different question, about how provision is organised and how many separate entries exist. Both are useful. Only one of them is about quantity.' }
        ] },
        { kind: 'table', caption: 'What each count is actually counting', head: ['Comparison', 'By establishments', 'By pupils', 'Which is about how much there is'], rows: [
          ['Delfshaven against Prins Alexander, secondary', '15 against 9, two thirds more', '4,765 against 5,860, a fifth fewer', 'the pupils, and the counts invert'],
          ['Delfshaven against Prins Alexander, primary', '28 against 28, identical', '6,828 against 8,108, 19 percent more', 'the pupils, and the counts say nothing'],
          ['Rotterdam Centrum, secondary', '4 establishments', '1,622 pupils, 406 each', 'the pupils'],
          ['What one establishment means', 'always exactly one', '318, 406 or 651 depending where', 'nothing in the count records this'],
          ['What the count is genuinely good for', 'how many separate registered locations exist', 'not this', 'a real question, just a different one']
        ] },
        { kind: 'callout', h3: 'A count answers how many there are. People use it to answer how much there is', p: 'Counting is the most trusted operation in any dataset because it feels like it cannot go wrong. Every row is worth one, the arithmetic is exact, and the result is a whole number nobody argues with. What gets lost is that a count is only a measure of quantity when the things counted are interchangeable, and things almost never are. Fifteen registered school locations against nine tells you about registration. It tells you nothing about how many children are being taught, and here it tells you the opposite. The same failure is everywhere, and it is always the easy number that wins because it is the one the system already stores. Headcount instead of full-time equivalents, so a department of twenty part-timers outranks one of twelve full-timers. Number of servers instead of capacity, after half of them were replaced with machines four times the size. Number of stores instead of floorspace. Number of suppliers instead of spend. Number of open tickets instead of the work in them, which is how a queue of fifty trivial items outranks three that will take a month. The check is one sentence long and it goes before the counting rather than after: are these things interchangeable, and if they are not, what varies between them? If something varies, that something is what you meant to measure, and the count is at best a proxy for it and at worst, as here, a number pointing the wrong way.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for counting things that are not the same size',
      intro: 'Employees, servers, stores, suppliers, tickets, incidents, releases: all countable, none interchangeable, and the count is always the figure that reaches the slide. Practised on two districts where more schools means fewer pupils.',
      body: [
        { kind: 'table', caption: 'Before you count, and after', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Test for interchangeability', 'Ask whether one of these is the same as another before counting any', 'A count treated as a quantity', 'The knowledge that you need a size field'],
          ['Find the varying dimension', 'Name what differs between units: size, capacity, hours, weight', 'The easy number standing in for the real one', 'The measure you actually meant'],
          ['Report both numbers', 'Publish the count and the total together, never one alone', 'A reader inferring quantity from a count', 'Two facts instead of one misleading one'],
          ['Watch for the inversion', 'Check whether the count and the total ever rank things differently', 'A ranking that reverses under a better measure', 'Immediate proof that the count is not the quantity'],
          ['Say what a unit is', 'Define the counted object in the output, not in a wiki nobody reads', 'A registration mistaken for a building', 'A number somebody can interpret next year']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Two bags of sweets, one with four large ones and one with nine small. The children count the sweets, then weigh the bags, and work out which question each answer was for.' },
          { h3: 'For teenagers', p: 'The three districts in Python, with establishments and pupils as separate columns, a ranking function that must be told which to sort on, and an output that prints both. The stretch: produce the two rankings, show that they disagree, and write the sentence that explains why without blaming anybody.' },
          { h3: 'For adults', p: 'A real count from work that stands in for a quantity: headcount, sites, suppliers, open items. Adults nearly always find the units vary by a factor of several, that the size data exists somewhere, and that nobody has ever put the two columns side by side.' }
        ] },
        { kind: 'p', text: 'All population, household, age, area, density, dwelling, value, tenure, income, student, establishment and pupil figures for the three districts come from the national statistics office pages for those wijken, with 2026 populations, 2025 household, housing, student and school figures and 2024 incomes. The pupils-per-establishment figures of 244, 290, 332, 318, 651 and 406, and the comparisons of two thirds, a fifth and 19 percent, are this page dividing and subtracting those published counts, and are labelled as arithmetic wherever they appear.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From two bags of sweets to a ranking that has to be told what to sort on',
    intro: 'The rung comes out of the free hour and what the learner can already do, and never out of which of the nine buurten the address is in.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'More sweets, or more sweet?', p: 'Children count, then weigh, and find the two answers disagree.', courses: ['scratch-programming-complete-course', 'block-coding-app-development-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Are these things the same thing?', p: 'Learners test whether the items in a column are interchangeable before adding them up.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 14 to 18', h3: 'Rankings that declare their measure', p: 'Teenagers build code that refuses to sort until it is told which column means quantity.', courses: ['complete-app-development-masterclass-for-teens', 'mysql-mastery-for-teens'] },
      { band: 'Ages 18 to 67', h3: 'The count on the slide', p: 'Adults take a headcount or a site count from work and find the size data nobody joined to it.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'ai-tools-mastery-complete-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will rank the districts by number of schools. Why should a teenager in Delfshaven ask what one school is?',
    intro: 'Because the ranking it produces is backwards, and every number in it is correct.',
    p1: 'Ask which district has more secondary education and a model will reach for the countable column, because that is what a count is for and because fifteen is obviously more than nine. The answer will be confident, arithmetically flawless and wrong: Delfshaven has fifteen establishments teaching 4,765 pupils and Prins Alexander has nine teaching 5,860. Nothing in the data announces that an establishment in one district holds twice as many pupils as an establishment in the other. The register writes both down as the number one.',
    p2: 'So the learner practises the question that has to come first: are the things being counted interchangeable, and if not, what varies. Then they build the version that enforces it, keeping the count and the total as separate columns and refusing to rank until told which one means quantity. That is a small piece of code protecting against the most trusted operation in the whole subject. A fifteen-year-old in Spangen who has caught a count pointing the wrong way will be the person at thirty asking whether the bigger team is bigger or merely more numerous. Models will keep counting rows, accurately and instantly. Asking whether the rows are the same kind of thing stays a person\'s job.',
    closer: 'The case for a child in Delfshaven learning to code in 2026 is therefore not about schools at all. It is that counting feels like the one operation that cannot mislead, that it misleads whenever the units vary in size, and that two districts where more schools means fewer pupils prove it in a single line of a table.',
    blogAnchor: 'the case for a child writing code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes across nine buurten and five square kilometres',
    intro: 'Delfshaven is dense, well connected and full of small flats. Getting somewhere is rarely the problem here; finding an hour and a quiet corner in a household of 1.9 people usually is.',
    cells: [
      { h3: 'One hour a week, wherever the laptop already is', p: 'The class happens in Bospolder, Middelland or the Nieuwe Westen at a time that repeats, so nothing has to be travelled to and no room has to be found somewhere else.' },
      { h3: 'Four words that stay Dutch', p: 'Groep. Havo. Vwo. Profielkeuze. Everything around them is English, and those four are not, because a child already knows them and an English version would have to be turned back into Dutch before it was any use.' },
      { h3: 'Nothing is charged for the first lesson', p: 'It is a full one, with a task that has a right answer and a teacher watching how the learner gets there. That produces a level, and the level produces a course, and the course gets an hour. Money is not part of the conversation.' },
      { h3: 'Five to ten at one level, drawn from anywhere', p: 'Groups are built from ability rather than address. That is what makes a narrow level fill at all, and it is why the other learners in a Delfshaven group are usually not in Delfshaven.' },
      { h3: 'Eight lessons in most months', p: 'Two every week at the same hour. Zuid-Holland sits in the regio Midden holiday block, so the weeks that will vanish are known months ahead and are written into the plan at the start.' },
      { h3: 'One clock moves and the other does not', p: 'India has not changed its time in decades; the Netherlands changes twice a year. That is the whole reason the gap is three and a half hours for part of the year and four and a half for the rest, and the usable window is the same either way.' }
    ],
    spec: { title: 'Five and a half thousand students, and ten and a half thousand children', p: '2,600 residents are in applied higher education and 2,910 at university, while 10,470 are under fifteen. Delfshaven therefore has both a large student population and a large child population, in a district where the average household is 1.9 people and 52 percent of households are one person. It is a place with plenty of learners of every age and very little spare room, which is the situation an online class at a fixed weekly hour is built for, from age 6 up to 67.' }
  },

  fees: {
    h2: 'The fee, in dollars, in all nine buurten',
    intro: 'Written here rather than saved for a call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'A single international rate applies, quoted in dollars, with no euro edition, so an address in Schiemond is charged exactly what one in Spangen is. Nothing is paid until the free lesson has settled a course and an hour, and payment is arranged over WhatsApp afterwards. Pausing, switching plan and missing a week are all described on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, exactly as the people who left them wrote them',

  book: {
    h2: 'Send the level, not the buurt',
    intro: 'The first task might be two bags of sweets that need weighing as well as counting, a ranking function that refuses to sort until told which column means quantity, or a headcount at work that nobody has ever joined to the hours behind it.',
    success: 'Thank you. Your Delfshaven class request has been sent.'
  },

  faq: {
    h2: 'Delfshaven coding class questions',
    intro: 'The district, its nine buurten, one backwards count, the teaching and the terms.',
    items: [
      { q: 'Does Delfshaven really have more secondary schools than Prins Alexander?', a: 'It has more registered establishments: 15 against 9. It teaches fewer secondary pupils: 4,765 against 5,860. Both figures are published by the same office for the same year. An establishment is a registered location with no size attached to it, so one of them means 318 pupils here and 651 in Prins Alexander, and the register writes each down as one. Counting establishments answers a real question about how provision is organised, and it is not the question about how much education there is.' },
      { q: 'Is this a judgement about the schools here?', a: 'No, and deliberately not. Nothing on this page describes teaching, results or admissions at any school in Delfshaven or in the districts compared with it, because no source read here offers that. The figures describe how provision is registered and how large the registered units are. The schools are the example the arithmetic uses, not its subject.' },
      { q: 'Which neighbourhoods are in Delfshaven?', a: 'Nine buurten: Oud Mathenesse, Spangen, Middelland, the Nieuwe Westen, the Witte Dorp, Tussendijken, Bospolder, Delfshaven itself and Schiemond. The district shares its name with one of the nine, which is worth knowing before looking up a figure for Delfshaven and getting whichever of the two a table meant.' },
      { q: 'How many students live in Delfshaven?', a: '2,600 residents are enrolled in applied higher education and 2,910 at university level, 5,510 in all out of 76,590 residents. More at university than in applied higher education is an unusual balance. Those are counts of residents by what they are enrolled in, not counts of people studying at institutions inside the district, and the two are never added together here.' },
      { q: 'Why is the average income here lower than in the districts it is compared with?', a: 'The published figure is 30,100 euro per resident for 2024, against 34,700 in Prins Alexander and 44,500 in Rotterdam Centrum. This page does not explain the difference, because explaining it would need a breakdown by age or occupation that was not read. What can be said is that 5,510 residents are in higher education and 27,430 are between twenty-five and forty-five, and that an average over a whole district covers all of them at once.' },
      { q: 'Is the class taught in Dutch?', a: 'English, throughout. The only Dutch that survives is school vocabulary, kept because a child meets groep, havo, vwo and profielkeuze on their own paperwork and would not recognise an English substitute for any of them. There is no Dutch-language edition of any course.' },
      { q: 'What hours work for a family in Delfshaven?', a: 'Between three and a half and four and a half hours, depending on the month, and the variation comes from the Dutch side rather than the Indian one. That leaves plenty open: anything from the end of the school day to mid-evening, and any hour of Saturday or Sunday. The slot is chosen once, in the free lesson, and then it stays.' },
      { q: 'Is there a Modern Age Coders classroom in Delfshaven?', a: 'No, and none is claimed in Delfshaven, elsewhere in Rotterdam or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Delfshaven coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Rotterdam and beyond',
    h2: 'East into the centre, north to Delft, and up to the country',
    html: 'East of here is <a class="cg-inline-link" href="/coding-classes-in-rotterdam-centrum">Rotterdam Centrum</a>, whose page argues that a district this small is mostly edge, and the city page, <a class="cg-inline-link" href="/coding-classes-in-rotterdam">coding classes in Rotterdam</a>, carries the port and the map of all fourteen gebieden. North up the line are <a class="cg-inline-link" href="/coding-classes-in-delft">Delft</a> and <a class="cg-inline-link" href="/coding-classes-in-the-hague">The Hague</a>, and everything here sits inside <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. The whole series descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner who wants trained models rather than running programs should begin at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Take this to WhatsApp'
  },

  footerHeading: 'Rotterdam and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-rotterdam', label: 'Rotterdam' },
    { href: '/coding-classes-in-rotterdam-centrum', label: 'Rotterdam Centrum' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-dfh .cg-hero-grid { align-items: end; gap: clamp(1.4rem, 3.3vw, 2.6rem); }
.cg-root.cg-dfh .cg-hero h1 { font-weight: 600; letter-spacing: -0.015em; line-height: 1.08; }
.cg-root.cg-dfh .cg-capsule { border-left-width: 4px; border-left-style: solid; border-top: 4px solid var(--cg-accent-soft); padding-left: 1.35rem; padding-top: 0.7rem; }
.cg-root.cg-dfh .cg-eyebrow { letter-spacing: 0.175em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-dfh .cg-section-head h2 { max-width: 33ch; }
.cg-root.cg-dfh .cg-grid-3 { gap: clamp(1rem, 2.1vw, 1.6rem); }
.cg-root.cg-dfh .cg-card { border-radius: 7px; border-bottom: 2px solid var(--cg-accent-soft); }
.cg-root.cg-dfh .cg-table caption { letter-spacing: 0.04em; font-weight: 600; }
.cg-root.cg-dfh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dfh .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'Gebied Delfshaven, Rotterdam, Zuid-Holland: 76,590 residents (2026) on 596 hectares of which 515 land and 81 water, density 14,944, the third largest gebied and denser than the city centre; 40,120 households averaging 1.9 with 20,975 single-person at 52 percent; 10,470 residents under fifteen at 14 percent and 27,430 aged twenty-five to forty-five at 36; 36,694 dwellings, 26,420 rented at 72 percent, average value 325,000 euro; income 30,100 euro (2024); 2,600 residents in applied higher education and 2,910 at university, 5,510 in all; 28 primary establishments teaching 6,828 pupils and 15 secondary teaching 4,765; nine buurten, one of which is itself called Delfshaven. Regio Midden holidays. The district page argues from counts of non-interchangeable units; Rotterdam Centrum owns boundary truncation and the Rotterdam city page owns the port units argument.',
    localProject: 'A count answers how many there are, and people use it to answer how much there is. Delfshaven has 15 secondary establishments teaching 4,765 pupils; Prins Alexander has 9 teaching 5,860. Two thirds more establishments and a fifth fewer pupils, from one office in one year, so the count and the quantity rank the two districts in opposite orders. The primary figures make the same point without the inversion: both districts have exactly 28 primary establishments, and one teaches 6,828 pupils while the other teaches 8,108, a 19 percent difference the count records as zero. A vestiging is a registered location with no size attached, so one establishment means 244, 290, 332, 318, 651 or 406 pupils depending which district and which level, and the register writes each of them down as one. The check belongs before the counting: are these things interchangeable, and if not, what varies between them, because whatever varies is what you meant to measure. The general case is headcount against full-time equivalents, servers against capacity, stores against floorspace, suppliers against spend, open tickets against the work in them. Shares a family with the Amsterdam-Zuidoost page, where one column holds two kinds of object, but the operation differs: there a value is averaged across mixed rows, here nothing is averaged at all and the count itself is the statistic while its units vary in magnitude. The page makes no claim about school quality, results or admissions anywhere.',
    requiredMentions: [
      '76,590',
      '40,120',
      '20,975',
      '36,694',
      '325,000',
      '30,100',
      '14,944',
      '10,470',
      '6,828',
      '4,765',
      '2,910',
      'Spangen',
      'Tussendijken',
      'Schiemond'
    ],
    sources: [
      { claim: 'Wijk Delfshaven, Rotterdam: 76,590 inwoners (2026); 40,120 huishoudens averaging 1.9 (2025), 20,975 eenpersoonshuishoudens at 52 percent; ages 10,470 (0 to 15, 14 percent), 11,515 (15 to 25, 15 percent), 27,430 (25 to 45, 36 percent), 18,040 (45 to 65, 24 percent), 9,125 (65+, 12 percent); 596 hectare total, 515 land, 81 water (2025); bevolkingsdichtheid 14,944 per km2 (2025); woningvoorraad 36,694 (2025); gemiddelde WOZ 325,000 euro (2025); 26,420 huurwoningen (72 percent) and 10,274 koopwoningen (28 percent); gemiddeld inkomen 30,100 euro (2024); studenten HBO 2,600 and WO 2,910; 28 vestigingen basisonderwijs with 6,828 leerlingen and 15 vestigingen voortgezet onderwijs with 4,765 leerlingen; 9 buurten: Oud Mathenesse, Spangen, Middelland, Nieuwe Westen, Witte Dorp, Tussendijken, Bospolder, Delfshaven, Schiemond.', url: 'https://allecijfers.nl/wijk/delfshaven-rotterdam/' },
      { claim: 'Wijk Prins Alexander, Rotterdam: 97,794 inwoners (2026); 14,585 under fifteen; 1,738 hectare land; bevolkingsdichtheid 5,635; woningvoorraad 47,041 at an average WOZ of 360,000 euro; income 34,700 euro (2024); 28 vestigingen basisonderwijs with 8,108 leerlingen and 9 vestigingen voortgezet onderwijs with 5,860 leerlingen; 8 buurten.', url: 'https://allecijfers.nl/wijk/prins-alexander-rotterdam/' },
      { claim: 'Wijk Rotterdam Centrum: 42,924 inwoners (2026); 3,130 under fifteen; 413 hectare land; bevolkingsdichtheid 10,191; woningvoorraad 23,478 at an average WOZ of 424,000 euro; income 44,500 euro (2024); 6 vestigingen basisonderwijs with 1,989 leerlingen and 4 vestigingen voortgezet onderwijs with 1,622 leerlingen; 6 buurten.', url: 'https://allecijfers.nl/wijk/rotterdam-centrum-rotterdam/' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any statement about school quality, results or admissions in Delfshaven or in either district compared with it. No source read offers it and the schools are an example rather than a subject.',
      'Any claim about where the pupils counted at establishments in this district live. These are attendance counts inside a boundary.',
      'An explanation of why the district average income is lower than in the comparison districts. That would need a breakdown by age or occupation that was not read.',
      'The pupils-per-establishment figures offered as measures of school size. An establishment is a registration rather than a school, which is the point they exist to demonstrate.',
      'Any argument about what a boundary does to a count of what is near residents. That is the Rotterdam Centrum page.',
      'Any figure for the individual buurten. Nine are named and none was read separately, including the buurt that shares the district name.',
      'Anything the Rotterdam city page owns, including the port throughput in two units and the named secondary schools with their addresses.'
    ]
  }
};
