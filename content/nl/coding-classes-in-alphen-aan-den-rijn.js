'use strict';
// Alphen aan den Rijn: eight places on the Oude Rijn, formed in its present
// shape in 2014. Spine: one statistics page carries two tables that use the
// same labels for two different populations, and the only way to tell which is
// which is to notice that one of them reports zero where the other reports
// 2,470.

module.exports = {
  slug: 'coding-classes-in-alphen-aan-den-rijn',
  code: 'alp',
  accent: '#712332',
  accentRationale: 'Alphen aan den Rijn: a dark rose for the nursery country around Boskoop, placed by the solver clear of Leeuwarden\'s Frisian red and Amsterdam\'s brick',
  pageType: 'city',
  place: {
    name: 'Alphen aan den Rijn',
    eyebrow: 'Alphen aan den Rijn, Zuid-Holland',
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
  routeLabel: 'Alphen aan den Rijn, Netherlands',
  title: 'Coding Classes in Alphen aan den Rijn | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Alphen aan den Rijn for ages 6 to 67, in Boskoop, Hazerswoude, Benthuizen and Koudekerk. First lesson free.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families across the eight places of Alphen aan den Rijn, built on two tables that share a label and count different people.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'mysql-mastery-for-teens',
  verifiedOn: '8 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Alphen aan den Rijn Learners',
    description: 'Ability-placed online coding, Python, databases, AI and mathematics for children, teenagers and adults in Alphen aan den Rijn, Boskoop, Hazerswoude, Koudekerk, Benthuizen, Zwammerdam and Aarlanderveen, taught in English.'
  },

  h1: 'Coding classes in Alphen aan den Rijn, where one page counts the same students twice and gets two answers',
  capsuleQ: 'What are the best coding classes in Alphen aan den Rijn?',
  capsule: 'Coding classes in Alphen aan den Rijn serve 117,284 people (Statistics Netherlands, 1 January 2026) across eight places on the Oude Rijn, in a municipality that took its present shape on 1 January 2014. One page of the national statistics site carries two tables about students in this municipality. In one, the vocational figure is 1,648 and the higher-education figures are zero. In the other, the vocational figure is 3,110 and the higher-education figures are 2,470 and 1,110. Neither table says which population it counts. Modern Age Coders teaches live online in English to all eight places, ages 6 to 67, free first lesson, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Two tables sit on the same page about the same municipality. One reports 1,648 vocational students; the other reports 3,110. The pair looks like an error until you read across: the first table also reports zero students in applied higher education, and the second reports 2,470. A municipality does not have zero and 2,470 of the same thing, so the two tables must be counting different populations, one of them students at institutions here and the other residents studying anywhere. Neither table says so. Working that out from the numbers is a real skill, and it is not taught anywhere.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Alphen aan den Rijn.',

  picks: {
    eyebrow: 'Course picks for Alphen aan den Rijn',
    h2: 'Four courses for a town, a nursery village and six smaller places',
    intro: 'A groep 5 child in Hazerswoude-Dorp, a teenager in Boskoop who wants the database rather than the spreadsheet, an adult in Koudekerk retraining, and a parent in Benthuizen whose two reports never agree: four doors along one river.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python, turtle drawings and a first program that learns a rule, in English, for the groep 5 to 8 child in Zwammerdam or Aarlanderveen.' },
      { course: 'mysql-mastery-for-teens', band: 'Ages 13 to 17', note: 'SQL from a first query to real applications, for the teenager who wants to know why two queries over one dataset can disagree.' },
      { course: 'mysql-database-complete-masterclass-college', band: 'College and adult', note: 'Design, keys and administration done properly, for the student or working adult who inherits tables nobody documented.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Excel, SQL, Python and BI, for the working parent whose dashboard shows two different numbers for one metric.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Alphen aan den Rijn today',
      h2: 'Eight places along the Oude Rijn, assembled in 2014',
      intro: 'The national register held 117,284 people on 1 January 2026, in 51,011 households averaging 2.24 people, on 125.93 square kilometres of land inside 132.50 of territory: a published 919 residents to the square kilometre. In 1995 the count was 101,435, so the municipality has gained 15,849 people in thirty-one years, a rise of 16 percent.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A family municipality with an older middle', p: '18,306 residents are under fifteen and 13,396 are between fifteen and twenty-five; 30,030 are between twenty-five and forty-five, 31,184 between forty-five and sixty-five, and 24,368 are sixty-five or over. Only 17,307 households hold one person, 34 percent, among the lowest in this series.' },
          { h3: 'Forty-eight primary schools, thirteen secondary', p: '48 primary establishments teach 9,709 pupils and 13 secondary establishments teach 7,250. Eight separate places need primary schools across most of them, and the secondary provision concentrates in the town and in Boskoop.' },
          { h3: 'A municipality of 2014', p: 'The present municipality dates from 1 January 2014, when Boskoop and Rijnwoude joined the existing Alphen aan den Rijn. Boskoop had been independent until that morning, and it is still a name people use for a place rather than a district.' }
        ] },
        { kind: 'spec', title: 'Nurseries, an apple and the first bird park', p: 'Boskoop is nursery country: about 770 nurseries spread over some 1,100 hectares, an industry that expanded from the fifteenth to the seventeenth century and began exporting in the late nineteenth, with Germany as its first buyer. The Boskoop apple is described as the best-selling apple variety in Europe, which this page quotes as a description rather than a measurement. Avifauna opened in 1950 and is called the first bird park in the world.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Eight places, one town and seven villages',
      intro: 'The statistics office counts 8 woonplaatsen, 16 wijken and 100 buurten. The municipal entry publishes 2023 populations for all eight, from a town of 74,790 to a village of 1,205.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Alphen aan den Rijn, 74,790 in 2023', p: 'The town itself, on both banks of the Oude Rijn, with the station, the shopping centre and most of the thirteen secondary establishments. Just under two thirds of the municipality lives here.' },
          { h3: 'Boskoop, 16,670 in 2023', p: 'North-east along the Gouwe, the nursery village that was its own municipality until 2014 and remains a distinct place with its own centre, schools and trade.' },
          { h3: 'Hazerswoude-Dorp, 6,325, and Hazerswoude-Rijndijk, 5,600', p: 'Two settlements of one name in 2023, one inland and one strung along the river, both of which arrived with Rijnwoude in 2014.' },
          { h3: 'Koudekerk aan den Rijn, 4,130 in 2023', p: 'West along the river towards Leiden, a village with a primary school and a bus, and a genuine journey into the town on a winter evening.' },
          { h3: 'Benthuizen, 3,590 in 2023', p: 'South towards Zoetermeer, the most separate of the villages and the one whose children look in a different direction for almost everything.' },
          { h3: 'Zwammerdam, 1,860, and Aarlanderveen, 1,205', p: 'The two smallest in 2023, east and north of the town, where no after-school club of any kind will form from the local children and the class arrives through the connection instead.' }
        ] },
        { kind: 'p', text: 'All eight places get the same class at the same hour and the same fee, and the group a learner joins depends on what they can already do.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure and its source, including the two tables that disagree',
      intro: 'The national count, both of its student tables, the municipal entry, the merger, and Boskoop.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands, 1 January 2026: 117,284 residents; 51,011 households for 2025 averaging 2.24 people, 17,307 of them single-person, 34 percent; 18,306 under fifteen; 13,396 aged fifteen to twenty-five; 30,030 aged twenty-five to forty-five; 31,184 aged forty-five to sixty-five; 24,368 aged sixty-five and over; 48 primary establishments with 9,709 pupils and 13 secondary with 7,250; total area 13,250 hectares, land 12,593; density 919; 8 woonplaatsen, 16 wijken and 100 buurten; 101,435 residents in 1995, a rise of 15,849.' },
          { h3: 'The first student table', p: 'In the education section of that same page: vocational students 1,648; students in applied higher education 0; university students 0; total students in higher education 0. Those figures are printed together and carry no note about what population they describe.' },
          { h3: 'The second student table', p: 'In the comprehensive topics table lower down the same page: vocational students 3,110; students in applied higher education 2,470; university students 1,110. Again with no note. The two tables use the same labels and give different values for every one of the three levels they share.' },
          { h3: 'The municipality, described', p: 'Its own entry: 117,278 residents on 1 January 2026, six fewer than the national figure for the same date, both kept; 132.50 square kilometres, 126.23 of land and 6.27 of water, against 125.93 of land nationally, both kept; a density of 929 against the national source\'s 919, both kept; acting mayor Erik van Heijningen; among the thirty largest municipalities of the Netherlands.' },
          { h3: 'The merger and the places', p: 'From 1 January 2014, after the addition of Boskoop and Rijnwoude. Populations on 1 January 2023: Alphen aan den Rijn 74,790; Boskoop 16,670; Hazerswoude-Dorp 6,325; Hazerswoude-Rijndijk 5,600; Koudekerk aan den Rijn 4,130; Benthuizen 3,590; Zwammerdam 1,860; Aarlanderveen 1,205.' },
          { h3: 'Boskoop and Avifauna', p: 'About 770 nurseries spread over an area of some 1,100 hectares; the industry expanded from the fifteenth to the seventeenth century and began exporting in the late nineteenth century with Germany as its first buyer; Boskoop was independent until 1 January 2014; the Boskoop apple is described as the best-selling apple variety in Europe. Avifauna opened in 1950, is described as the first bird park in the world, and was founded by G. van den Brink.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, Avifauna, any nursery or any school named here and claims none. The reading of what the two student tables count is this page\'s inference from their values and is presented as an inference.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'One page, two tables, six numbers: build the reasoning that works out what each column means',
      intro: 'Three labels, two values each, no documentation anywhere, and one row that gives the whole thing away.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Put the six values side by side', p: 'Vocational: 1,648 and 3,110. Applied higher education: 0 and 2,470. University: 0 and 1,110. The learner writes them out as a grid rather than reading them where they sit, which is the only move that makes the pattern visible at all.' },
          { h3: '2. Find the row that cannot be a mistake', p: 'A municipality of 117,284 people does not contain zero residents in applied higher education, and it equally does not contain 2,470 of them if it has no institution teaching at that level. So the zero and the 2,470 are not competing estimates: they answer different questions. That row is the key, and the other two rows then read the same way.' },
          { h3: '3. Name the two populations and re-read everything', p: 'One table appears to count students at institutions inside the municipality; the other appears to count residents enrolled anywhere. On that reading 1,648 study here and 3,110 live here and study somewhere, and the ratio between them, about 1.9, is a statement about commuting rather than about enrolment. The page marks this as an inference, because neither table says it.' }
        ] },
        { kind: 'table', caption: 'Six published figures, two tables, one page', head: ['Level', 'Education section', 'Topics table', 'Can both be about one population?'], rows: [
          ['Vocational', '1,648', '3,110', 'no, they differ by 1,462'],
          ['Applied higher education', '0', '2,470', 'no, and this row is the giveaway'],
          ['University', '0', '1,110', 'no, for the same reason'],
          ['Total in higher education', '0', 'not separately given', 'consistent with the first table only']
        ] },
        { kind: 'callout', h3: 'The same label on two tables is not a promise that they mean the same thing', p: 'This is the most ordinary failure in data work and it never announces itself: two views of what looks like one metric, built at different times by different people for different purposes, sitting on one page or in one dashboard, sharing a name and measuring different populations. Nobody is careless; the label was accurate in each place when it was written, and only the pairing is misleading. The technique for unpicking it is worth practising, because it is almost always available: find the row where the two versions are not merely different but impossible together, and use that row to work out what each column must actually be counting. Then write the answer into a note, because the next person will not do this again. The six values above are quoted from one page of one source, and the interpretation is labelled throughout as an inference from them rather than as a statement by it.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for two numbers that should be one',
      intro: 'Two dashboard tiles with different revenue, a report that disagrees with the system it was built from, a headcount that changes between slides: the numbers are usually both right and about different things. Practised on one page about this municipality.',
      body: [
        { kind: 'table', caption: 'When one metric has two values', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Tabulate them together', 'Put the competing values side by side before reasoning', 'A pattern invisible in the original layout', 'Something to look at'],
          ['Find the impossible row', 'Look for a pair that cannot both describe one population', 'Endless argument about which is right', 'A key to the whole difference'],
          ['Name each population', 'State in words who each column counts', 'A metric with no definition', 'Two numbers you can both use'],
          ['Stop asking which is correct', 'Accept that both can be right about different things', 'A wasted week reconciling', 'The actual answer'],
          ['Write it down where it lives', 'Put the definition beside the column, not in a message', 'The same discovery made again next year', 'A table that explains itself']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Two counts of the class: how many children are in the room, and how many are on the register. They differ, and the children work out that one includes somebody off sick and the other includes a visitor. Two right answers, two different questions, and nobody made a mistake.' },
          { h3: 'For teenagers', p: 'The six figures in Python as a small grid, a function that flags pairs which cannot describe one population, and a written definition attached to each column. The stretch: what third figure would confirm the interpretation, and where would you look for it?' },
          { h3: 'For adults', p: 'The same routine on two reports at work that disagree. Adults nearly always find that both queries are correct, that the filters differ by one condition nobody documented, and that somebody has been picking whichever number suits the meeting.' }
        ] },
        { kind: 'p', text: 'The population, household, area, school, nursery and Avifauna figures come from the offices and entries named beside them. The six student figures are quoted from two tables on a single page of one source, and the reading of what each table counts is an inference from those values, labelled as such wherever it appears.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From two counts of one class to a column with its definition attached',
    intro: 'The starting rung comes out of the free hour, and which of the eight places a learner lives in is not part of it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'In the room, or on the register', p: 'Children find two right answers to one question and work out why they differ.', courses: ['kids-coding-blocks-masterclass', 'python-ai-kids-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Same name, different thing', p: 'Learners compare two tables and say in words what each one counts.', courses: ['maths-through-coding', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 14 to 18', h3: 'The impossible row', p: 'Teenagers write the check that finds pairs which cannot describe one population.', courses: ['mysql-mastery-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Two reports, one metric', p: 'Adults reconcile two disagreeing reports by defining rather than by arguing.', courses: ['mysql-database-complete-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will read you whichever student figure it found first. Why should a child here learn to look for the second one?',
    intro: 'Because both numbers are on the same page, they contradict each other, and nothing in either says which question it answers.',
    p1: 'Ask a tool how many students there are in this municipality and it will give a number, correctly quoted, from whichever table it happened to read. It is not going to volunteer that another table on the same page gives a different figure for the same label, still less that the two must be counting different populations. Spotting a contradiction requires holding two passages side by side and caring about the tension, which is a habit rather than a capability.',
    p2: 'So the learner builds the grid and hunts for the impossible row. This is genuinely useful work and almost nobody is taught it: not how to compute anything, but how to establish what a column means when nobody wrote it down. A thirteen-year-old in Boskoop who has done it once will do it at twenty-three with two dashboards that disagree about revenue, and will stop the argument about which is right by asking what each one counts. Tools will keep quoting the figure in front of them. Noticing that two figures are in front of you is the part left over.',
    closer: 'The case for a child here learning to code in 2026 is therefore not about education statistics. It is that most numbers in working life arrive without definitions, that the definitions can usually be recovered by reasoning rather than by asking, and that the clearest possible example sits on one page of a public website about the town they live in.',
    blogAnchor: 'the argument for a child writing code in an age of AI'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a town and seven villages along a river',
    intro: 'Benthuizen looks towards Zoetermeer, Boskoop keeps its own centre, and Aarlanderveen has 1,205 people. Nothing about that arrangement suits an evening class in a building.',
    cells: [
      { h3: 'The river crossings stay out of it', p: 'The lesson happens at the kitchen table in Zwammerdam, Koudekerk or the town at one fixed hour a week, all year.' },
      { h3: 'One working language, plus the school vocabulary', p: 'Lessons are conducted in English. The exception is the handful of Dutch terms a pupil actually encounters at school, which are spoken unchanged so that nobody has to map them onto something else mid-sentence.' },
      { h3: 'Where the first hour leaves you', p: 'With a level established by doing rather than by asking, a course that follows from it, and a place in the weekly timetable. Not one of those steps asks for a card number.' },
      { h3: 'Neighbours are irrelevant; stage is not', p: 'Placement looks only at what a learner can currently do. Two children from the same street may end up in different groups, and two from opposite ends of the municipality in the same one.' },
      { h3: 'Twice weekly, on the middle calendar', p: 'Two lessons a week at one repeating slot, eight in most months. This municipality takes its holidays with regio Midden along with the rest of Zuid-Holland, and weeks away are written in before the slot is set.' },
      { h3: 'A gap the Dutch clock sets', p: 'India runs on one time the whole year, so all of the seasonal movement comes from this side: three and a half hours in the lighter months, four and a half in the darker ones. The overlap that matters covers the end of the afternoon, the early evening and both weekend days.' }
    ],
    spec: { title: 'A municipality where nothing higher is taught', p: 'One of the two student tables reports zero programmes above secondary level here, and the other reports 3,580 residents registered in applied and university education somewhere. Whatever a family here wants after school involves a journey, and a class delivered over the connection is one of the few things that does not.' }
  },

  fees: {
    h2: 'The fee, in dollars, in all eight places',
    intro: 'Printed here rather than saved for a phone call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'A family in Aarlanderveen and a family in the town are shown the same number, because there is one international rate, it is in dollars, and no euro version of it exists. Money is the last step rather than the first: the free lesson settles a course and an hour, and only then does anything go through WhatsApp. The pricing page handles pauses, plan changes and missed weeks.'
  },

  reviewsH2: 'Six Google reviews, printed as their authors typed them',

  book: {
    h2: 'Tell us the level; the village is not needed',
    intro: 'The first task might be two counts of one class that disagree, a grid of six figures with an impossible row in it, or two reports at work that have been arguing for a year.',
    success: 'Thank you. Your Alphen aan den Rijn class request has been sent.'
  },

  faq: {
    h2: 'Alphen aan den Rijn coding class questions',
    intro: 'The municipality, its villages, its statistics, the teaching and the terms.',
    items: [
      { q: 'Why does one page give two different student figures?', a: 'Because the two tables count different populations and neither says so. In the education section the vocational figure is 1,648 and the higher-education figures are zero; in the topics table lower down the same page the vocational figure is 3,110 and the higher-education figures are 2,470 and 1,110. A municipality cannot have both zero and 2,470 residents in applied higher education, so one table must count students at institutions here and the other residents enrolled anywhere. That reading is this page\'s inference from the values, and working it out is the project here.' },
      { q: 'Which places does the class reach?', a: 'All eight: Alphen aan den Rijn, Boskoop, Hazerswoude-Dorp, Hazerswoude-Rijndijk, Koudekerk aan den Rijn, Benthuizen, Zwammerdam and Aarlanderveen. The fee and the hour are the same in every one.' },
      { q: 'Is Boskoop part of Alphen aan den Rijn?', a: 'Since 1 January 2014, yes. Boskoop was an independent municipality until that date and joined together with Rijnwoude. It had 16,670 residents in 2023 and remains a distinct place with its own centre and its own nursery trade, about 770 nurseries over some 1,100 hectares.' },
      { q: 'Is any of this taught in Dutch?', a: 'Lessons are given in English. What stays Dutch is the vocabulary a pupil meets at school, so a teacher will say groep or havo or vwo or profielkeuze without pausing to translate. A Dutch-medium version of this course has never existed.' },
      { q: 'What time are classes for a family here?', a: 'From late March the two sides are three and a half hours apart and from late October four and a half, all of that movement coming from this end. Weekday sessions therefore sit between the end of the afternoon and the early evening, while weekends are unconstrained. One time is agreed during the free lesson and it does not move afterwards.' },
      { q: 'We are in Benthuizen or Aarlanderveen. Does the class reach that far?', a: 'It reaches every address in the municipality at the same hour and the same fee. Aarlanderveen had 1,205 residents in 2023 and Benthuizen 3,590, and neither will support an after-school coding group of its own, which is the gap this fills.' },
      { q: 'What is in the free lesson?', a: 'The first thing established is where the learner\'s current ability stops, and then one task is set immediately above that line. Two counts of a single class, and an explanation of why they differ, suits a young child. A teenager assembles the six figures into a grid and hunts for the row that cannot be reconciled. An adult brings two reports that have been disagreeing for months. Nothing is charged, and the hour finishes with a course, a rung, a weekly time and a price.' },
      { q: 'Is there a Modern Age Coders classroom here?', a: 'No, and none is claimed in the town, in Boskoop or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do coding classes in Alphen aan den Rijn cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a group here?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or village. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'Down the river, out to the province, and up to the country',
    html: 'West along the Oude Rijn is <a class="cg-inline-link" href="/coding-classes-in-leiden">Leiden</a> and south is <a class="cg-inline-link" href="/coding-classes-in-zoetermeer">Zoetermeer</a>, both inside <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>, whose page is about a region nobody drew a boundary for. At the head of the series is the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, with <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> and the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a> for models rather than programs.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-zuid-holland', label: 'Zuid-Holland' },
    { href: '/coding-classes-in-leiden', label: 'Leiden' }
  ],

  personalityCss: `
.cg-root.cg-alp .cg-hero-grid { align-items: center; gap: clamp(1.7rem, 4vw, 3.05rem); }
.cg-root.cg-alp .cg-hero h1 { font-weight: 600; letter-spacing: -0.0105em; line-height: 1.1; }
.cg-root.cg-alp .cg-capsule { border-left-width: 5px; border-left-style: solid; border-bottom: 2px solid var(--cg-accent-soft); padding-left: 1.4rem; padding-bottom: 0.5rem; }
.cg-root.cg-alp .cg-eyebrow { letter-spacing: 0.12em; font-weight: 600; }
.cg-root.cg-alp .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-alp .cg-grid-3 { gap: clamp(1.15rem, 2.4vw, 1.85rem); }
.cg-root.cg-alp .cg-ladder-col { border-top: 3px dotted var(--cg-accent); padding-top: 1.15rem; }
.cg-root.cg-alp .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-alp .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Municipality of Alphen aan den Rijn, Zuid-Holland: 117,284 residents (CBS 1 January 2026) across eight woonplaatsen; 48 primary establishments (9,709 pupils) and 13 secondary (7,250). Formed in its present shape on 1 January 2014 when Boskoop and Rijnwoude joined. Boskoop nursery trade; Avifauna since 1950. Regio Midden holidays with the rest of Zuid-Holland. The city page argues from two tables sharing a label; the province page owns the Randstad boundary question and Westland owns the structural zero.',
    localProject: 'The same label on two tables is not a promise that they mean the same thing. One page of the national statistics site carries two student tables for this municipality: the education section gives vocational 1,648 with applied higher education 0, university 0 and total higher education 0, while the topics table lower down gives vocational 3,110, applied higher education 2,470 and university 1,110. The zero against 2,470 is the diagnostic row, because a municipality of 117,284 cannot hold both, so the two tables must count different populations, plausibly students at institutions here against residents enrolled anywhere; the vocational ratio is about 1.9. Distinct from the structural-zero trap (Westland, where one zero had to be read correctly) and from the two-source disagreement (Breda): here a single source contradicts itself across two views, both are right about different populations, and the fix is definition rather than reconciliation. The interpretation is labelled an inference from the values throughout, because neither table states it.',
    requiredMentions: [
      '117,284',
      '51,011',
      '17,307',
      '101,435',
      '9,709',
      '7,250',
      '1,648',
      '3,110',
      'Boskoop',
      'Hazerswoude',
      'Aarlanderveen',
      'Zwammerdam',
      'Avifauna',
      'Benthuizen'
    ],
    sources: [
      { claim: 'Alphen aan den Rijn 117,284 residents on 1 January 2026 (CBS); 51,011 households (2025) averaging 2.24, 17,307 single-person (34 percent); 18,306 aged 0 to 15; 13,396 aged 15 to 25; 30,030 aged 25 to 45; 31,184 aged 45 to 65; 24,368 aged 65 and over; total area 13,250 ha, land 12,593 ha; density 919; 48 primary establishments (9,709 pupils) and 13 secondary (7,250); 8 woonplaatsen, 16 wijken and 100 buurten; 101,435 in 1995, a rise of 15,849 (16 percent). The education section of the same page gives Studenten MBO 1,648, Studenten HBO 0, Studenten WO 0 and Aantal studenten hoger onderwijs 0, while the comprehensive topics table lower down the same page gives Studenten MBO 3,110, Studenten HBO 2,470 and Studenten WO 1,110.', url: 'https://allecijfers.nl/gemeente/alphen-aan-den-rijn/' },
      { claim: 'Alphen aan den Rijn 117,278 residents on 1 January 2026; 132.50 km2 (126.23 land, 6.27 water); density 929; acting mayor Erik van Heijningen (VVD); among the thirty largest municipalities of the Netherlands; the municipality took its present form on 1 January 2014 after the addition of Boskoop and Rijnwoude; kernen on 1 January 2023 Alphen aan den Rijn 74,790, Boskoop 16,670, Hazerswoude-Dorp 6,325, Hazerswoude-Rijndijk 5,600, Koudekerk aan den Rijn 4,130, Benthuizen 3,590, Zwammerdam 1,860, Aarlanderveen 1,205.', url: 'https://nl.wikipedia.org/wiki/Alphen_aan_den_Rijn_(gemeente)' },
      { claim: 'Boskoop: about 770 nurseries spread over an area of some 1,100 hectares; the trade expanded from the fifteenth to the seventeenth century and began exporting in the late nineteenth century with Germany as its first buyer; Boskoop was an independent municipality until 1 January 2014; the Boskoop apple is described as the best-selling apple variety in Europe.', url: 'https://nl.wikipedia.org/wiki/Boskoop' },
      { claim: 'Vogelpark Avifauna opened in 1950, is described as the first bird park in the world, and was founded by G. van den Brink.', url: 'https://nl.wikipedia.org/wiki/Vogelpark_Avifauna' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'A statement that either student table is wrong. Both are quoted and the page argues that they count different populations.',
      'A source for the interpretation of what each table counts. No note appears on the page beside either table, and the reading is labelled an inference from the values throughout.',
      'Treating the Boskoop apple claim or the first bird park claim as measurements. Both are quoted as descriptions with no comparison set or measure offered.',
      'Any reconciliation of the eight 2023 place populations with the 2026 municipal total. The dates differ and no residual is computed.',
      'Visitor numbers for Avifauna and any figure for the nursery trade beyond the count and the area. Not found at source.',
      'Anything the Zuid-Holland page owns: the Randstad boundary question and the provincial totals. Anything the Leiden or Zoetermeer pages own.'
    ]
  }
};
