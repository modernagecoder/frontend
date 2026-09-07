'use strict';
// Leeuwarden: capital of Friesland, 36 named places from 95,890 down to 25, and
// a tower that leans 4.2 degrees. Spine: the sources give a height rounded to
// the metre and an angle to one decimal, so the lean they imply is 2.86 to 3.00
// metres, and quoting 2.93 claims precision the inputs cannot supply.

module.exports = {
  slug: 'coding-classes-in-leeuwarden',
  code: 'lwd',
  accent: '#632534',
  accentRationale: 'Leeuwarden: a dark Frisian red for the old brick of the Oldehove, placed by the solver clear of Amsterdam\'s and Haarlem\'s reds',
  pageType: 'city',
  place: {
    name: 'Leeuwarden',
    eyebrow: 'Leeuwarden, Friesland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Friesland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Leeuwarden, Netherlands',
  title: 'Coding Classes in Leeuwarden | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Leeuwarden for ages 6 to 67, in Stiens, Grouw, Goutum, Mantgum and all 36 places. First lesson free, then one flat fee.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families across the 36 places of Leeuwarden, built on how far a rounded input lets you trust a calculated one.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'statistics-probability-maths-course',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Leeuwarden Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Leeuwarden, Stiens, Grouw, Goutum and the villages of the municipality, taught in English.'
  },

  h1: 'Coding classes in Leeuwarden, where a tower 40 metres tall leaning 4.2 degrees will not give you a lean in centimetres',
  capsuleQ: 'What are the best coding classes in Leeuwarden?',
  capsule: 'Coding classes in Leeuwarden serve 130,162 people (Statistics Netherlands, 1 January 2026) across 36 named places, from the city itself at 95,890 in 2023 down to Lions with about 25. The Oldehove, its unfinished tower, is published at 40 metres and 4.2 degrees out of true, and those two rounded figures put its lean somewhere between 2.86 and 3.00 metres. The single number a calculator returns is 2.93, and claiming it would be claiming more than the sources gave. Modern Age Coders teaches live online in English to all 36 places, ages 6 to 67, with a free opening lesson and then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Type forty times the sine of 4.2 degrees into anything and it answers 2.93 metres. That is how far the top of the Oldehove stands out from its base, and it is a figure no source on this page publishes. The height is given to the nearest metre and the angle to one decimal place, so the honest answer is a range from 2.86 to 3.00 metres, about seven centimetres either side. The calculator gave three digits because calculators always do. Knowing how many of them to keep is a separate skill, and it is one almost nobody is taught.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Leeuwarden.',

  picks: {
    eyebrow: 'Course picks for Leeuwarden',
    h2: 'Four courses for a capital with thirty-five villages attached',
    intro: 'A groep 5 child in Stiens, a teenager in Grouw with no club within cycling distance, a student at one of the applied institutions here, and a parent in Goutum whose measurements arrive rounded and leave over-precise: four doors into one very wide municipality.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python, turtle drawings and a first program that learns a rule, in English, for the groep 5 to 8 child in Wirdum, Britsum or Mantgum.' },
      { course: 'maths-through-coding', band: 'Ages 11 to 15', note: 'Mathematics done in Python rather than on paper, for the learner who wants the trigonometry to produce something they can see.' },
      { course: 'statistics-probability-maths-course', band: 'Teens and adults', note: 'From data to hypothesis testing, for anyone who has to say how much confidence a figure deserves.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Excel, SQL, Python and BI, for the working parent whose inputs are rounded and whose outputs get quoted to four decimals.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Leeuwarden today',
      h2: 'A capital of 130,162 spread over 36 places and 238 square kilometres',
      intro: 'The national register held 130,162 people on 1 January 2026, in 67,494 households averaging 1.89 people, on 237.55 square kilometres of land inside 255.06 of territory: a published 547 residents to the square kilometre, one of the lowest of any city in this series because the municipality is mostly farmland. In 1995 the count was 110,984, so it has gained 19,178 people in thirty-one years, a rise of 17 percent.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A city and thirty-five villages', p: 'The municipality contains 36 named places. On the 2023 figures the city itself held 95,890, then Stiens 7,830, Grouw 5,905, Goutum 3,360, Warga 1,905, Irnsum 1,390, Wirdum 1,165, Mantgum 1,140, Roordahuizum 1,085, Britsum 955 and Wartena 890. The remaining twenty-five are smaller still, down to Lions at about 25.' },
          { h3: 'Small schools, spread wide', p: '53 primary establishments teach 10,169 pupils, about 192 each, and 19 secondary establishments teach 7,784, about 410 each. A municipality with thirty-five villages needs a primary school in a great many of them, and a child in one of the smaller places has no realistic prospect of a local after-school club in anything.' },
          { h3: 'Applied rather than academic', p: 'The municipality counts 21,170 students at institutions here, alongside 7,870 residents in applied higher education and only 930 at university level. Leeuwarden teaches at the applied level and sends its university students to Groningen. It was European Capital of Culture in 2018.' }
        ] },
        { kind: 'spec', title: 'A tower that was never finished', p: 'The Oldehove was begun on 28 May 1529, started leaning during construction and was abandoned unfinished; the church beside it collapsed in 1576. It stands 40 metres and hangs 4.2 degrees out of true. The municipality reached its present extent through mergers in 2014, when part of Boornsterhem including Grouw came in, and in 2018, when parts of Littenseradeel including Mantgum arrived along with the whole of Leeuwarderadeel.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Thirty-six places, twenty-two wijken, and a lot of farmland between them',
      intro: 'The statistics office divides the municipality into 36 woonplaatsen, 22 wijken and 136 buurten. Almost all of the land is countryside and almost all of the people are in one town.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The city, 95,890 in 2023', p: 'The old centre with the Oldehove and the canals, the nineteenth-century ring and the post-war districts. Roughly three quarters of the municipality lives here and all nineteen secondary establishments are within reach of it.' },
          { h3: 'Stiens, 7,830 in 2023', p: 'North of the city and the largest village, which came in with Leeuwarderadeel in 2018. Its own centre, its own schools, and far enough out to feel like a separate place rather than a district.' },
          { h3: 'Grouw, 5,905 in 2023', p: 'South-west on the water, which joined in 2014 with part of Boornsterhem. A sailing village in summer and a school run in winter, twenty kilometres from the city centre.' },
          { h3: 'Goutum, Wirdum and Warga', p: '3,360, 1,165 and 1,905 in 2023. The villages on the southern edge, close enough for a secondary school commute and far enough that an evening trip back into the city is a decision rather than a habit.' },
          { h3: 'Mantgum, Britsum, Wartena and Irnsum', p: '1,140, 955, 890 and 1,390 in 2023. Village primary schools, a bus, a sports hall, and no chance whatever of a coding group forming from the local children alone.' },
          { h3: 'The other twenty-five', p: 'Roordahuizum at 1,085 and then places the source does not size individually, down to Lions at about 25 people. A learner in any of them is in the same group at the same hour as a learner in the city centre.' }
        ] },
        { kind: 'p', text: 'One class, one hour and one fee cover all thirty-six, and the group a learner joins is set by what they can already do.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, and the one number this page had to work out',
      intro: 'The national count, the municipal entry, the tower, the mergers, and the derivation the project below rests on.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands: 130,162 residents in 2026; 67,494 households averaging 1.89 people, 33,042 of them single-person, 49 percent; 18,096 under fifteen; 19,255 aged fifteen to twenty-five; 35,239 aged twenty-five to forty-five; 31,340 aged forty-five to sixty-five; 26,232 aged sixty-five and over; 53 primary establishments with 10,169 pupils and 19 secondary with 7,784; 21,170 students at institutions here; 7,870 residents in applied higher education and 930 at university level; total area 25,506 hectares, land 23,755; density 547; 36 woonplaatsen, 22 wijken and 136 buurten; 110,984 residents in 1995, a rise of 19,178.' },
          { h3: 'The municipality, described', p: 'Its own entry: 130,179 residents on 1 January 2026, seventeen more than the national figure for the same date, both kept; 255.06 square kilometres, 238.38 of land and 16.68 of water, against 237.55 of land nationally, both kept; acting mayor Foort van Oosten; among the twenty-five largest municipalities of the Netherlands; 36 kernen.' },
          { h3: 'The places, 2023', p: 'From the same entry: Leeuwarden 95,890; Stiens 7,830; Grouw 5,905; Goutum 3,360; Warga 1,905; Irnsum 1,390; Wirdum 1,165; Mantgum 1,140; Roordahuizum 1,085; Britsum 955; Wartena 890, and then twenty-five smaller places down to Lions at 25. Those eleven total 121,515, on a date three years earlier than the municipal figure, and this page does not treat the difference as a finding.' },
          { h3: 'The tower, as published', p: 'The Oldehove: tower 40 metres; hangs 4.2 degrees out of true; construction begun on 28 May 1529; never completed; the church beside it collapsed in 1576. No lean in metres is given in the entry read.' },
          { h3: 'The lean, derived here', p: 'Forty metres times the sine of 4.2 degrees is 2.93 metres. Allowing that 40 is rounded to the nearest metre and 4.2 to the nearest tenth of a degree, the value the published figures support is between 2.86 and 3.00 metres. This page states the range and treats 2.93 as the midpoint of a derivation rather than as a measurement.' },
          { h3: 'The mergers', p: 'In 2014 part of the former municipality of Boornsterhem, including the village of Grouw, was added. In 2018 parts of Littenseradeel, including Mantgum, came in along with the whole of the former municipality of Leeuwarderadeel.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, the tower or any school named here and claims none. The one figure on this page that is not published anywhere is the lean in metres, and it is labelled as derived every time it appears.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Two point nine three metres: build the calculation that reports how much of its own answer to believe',
      intro: 'One tower, two rounded inputs, one trigonometric function, and an answer that has to arrive as an interval.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Compute it the ordinary way', p: 'The lean of a leaning tower is its height times the sine of its angle from vertical. Forty metres and 4.2 degrees give 2.9300 metres, and the calculator will happily supply more digits than that if asked. Nothing so far is wrong; the trouble is what happens next, which is that somebody writes 2.93 down.' },
          { h3: '2. Ask what the inputs actually said', p: 'A height published as 40 means somewhere between 39.5 and 40.5. An angle published as 4.2 means between 4.15 and 4.25. The learner runs the calculation at the corners: the smallest result is 39.5 times the sine of 4.15, which is 2.86, and the largest is 40.5 times the sine of 4.25, which is 3.00.' },
          { h3: '3. Report the interval, not the midpoint', p: 'So the lean is 2.86 to 3.00 metres, a spread of fourteen centimetres, or about two and a half percent either side. Quoting 2.93 is not exactly false, but it presents a range as a point and invites the next person to quote 2.930. The output of the program is a pair of numbers, and that is the whole discipline.' }
        ] },
        { kind: 'table', caption: 'One tower, and what the published inputs support', head: ['Quantity', 'As published', 'What it really means', 'Effect on the lean'], rows: [
          ['Height', '40 metres', 'between 39.5 and 40.5', 'plus or minus about 1.2 percent'],
          ['Angle from vertical', '4.2 degrees', 'between 4.15 and 4.25', 'plus or minus about 1.2 percent'],
          ['Lean, computed at the midpoint', '2.93 metres', 'one point from a range', 'not supportable on its own'],
          ['Lean, computed at the corners', '2.86 to 3.00 metres', 'the interval the inputs allow', 'the honest answer']
        ] },
        { kind: 'callout', h3: 'A result cannot be more precise than the numbers it was made from', p: 'Rounding happens at publication, quietly, and then the rounded figure is fed into a formula that returns fifteen digits. Those digits are real arithmetic on the values as typed, and almost all of them are noise inherited from a decision somebody made about how to print a measurement. The remedy is to carry the interval rather than the point: read every published figure as a range implied by its last digit, run the calculation at the corners, and report both ends. Where the function is smooth and the inputs are independent, as here, the corners give the interval directly. This differs from the compounding problem in a chain of several ratios, where each step adds its own uncertainty; here there are only two inputs and one operation, and the width comes entirely from how the sources chose to round. Every figure above is either published in the entry named or the result of that arithmetic, and the derived lean never appears on this page without its range.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for calculations built on published figures',
      intro: 'Areas from rounded lengths, speeds from rounded distances and times, percentages from rounded counts, costs per unit from rounded totals: the inputs arrive rounded and the outputs get quoted to the decimal. Practised on the tower in the middle of this city.',
      body: [
        { kind: 'table', caption: 'When the inputs were rounded before you got them', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Read the last digit', 'Treat a published number as a range implied by its precision', '40 read as exactly forty', 'An honest input'],
          ['Run the corners', 'Evaluate at the extremes of every input range', 'A single answer with invented digits', 'The interval the data supports'],
          ['Report both ends', 'Publish the range, or the midpoint with its width', 'A point value quoted onwards forever', 'A figure the next reader can use safely'],
          ['Match the output precision', 'Never print more digits than the inputs justify', '2.9300 from a figure rounded to the metre', 'Numbers that do not oversell'],
          ['Label what you derived', 'Mark any figure you calculated as calculated', 'A derivation mistaken for a measurement', 'A record somebody can audit']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A room measured with a metre stick that only shows whole metres, and a question about its floor area. Every child gets a slightly different answer and none of them is wrong. Then they work out the biggest and smallest the area could be, and discover that the answer was a range all along.' },
          { h3: 'For teenagers', p: 'A small interval type in Python that holds a low and a high value, arithmetic that works on intervals, and the tower calculation run through it. Then the stretch: which input would you want measured more precisely first, and how much would that narrow the answer?' },
          { h3: 'For adults', p: 'The same treatment on a derived figure at work: cost per unit, conversion rate, yield, margin. Adults very often find a number quoted to two decimals that was computed from inputs rounded to the nearest thousand.' }
        ] },
        { kind: 'p', text: 'The population, household, area, school, village and tower figures come from the offices and entries named beside them. The lean of 2.86 to 3.00 metres is this page\'s own calculation from the published height and angle, presented as an interval and marked as derived wherever it appears.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a metre stick with no centimetres to arithmetic that carries an interval',
    intro: 'The starting rung is settled in the free hour, and which of the thirty-six places a learner lives in is not an input.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'How big could the room be?', p: 'Children measure with a coarse ruler and find the biggest and smallest answers.', courses: ['kids-coding-blocks-masterclass', 'python-ai-kids-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Ranges instead of points', p: 'Learners turn every rounded figure into a low and a high before calculating.', courses: ['maths-through-coding', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 14 to 18', h3: 'Interval arithmetic and trigonometry', p: 'Teenagers build an interval type, run the tower through it and report both ends.', courses: ['statistics-probability-maths-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Derived figures at work', p: 'Adults trace a quoted decimal back to the rounded inputs behind it.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will give you the lean of the Oldehove to four decimals. Why should a child in Leeuwarden learn to give it to none?',
    intro: 'Because the arithmetic is exact and the inputs are not, and only one of those facts shows up in the answer.',
    p1: 'Ask a tool how far the Oldehove leans and it will multiply forty by the sine of 4.2 degrees and return 2.93, or 2.9300, or more. Every digit is correct arithmetic on the numbers it was given. What it cannot see is that those numbers were rounded before publication, so most of the digits it returned describe the rounding rather than the tower. The information needed to catch that is not in the values; it is in how they were printed.',
    p2: 'So the learner builds the interval type and runs the calculation at the corners. It is a small piece of code and it changes what a person does with every figure afterwards, because once you have seen fourteen centimetres of width appear out of two ordinary rounded inputs you stop trusting a decimal point on principle. A thirteen-year-old in Stiens who has done that will ask, at twenty-three, what the inputs to a quoted margin were rounded to. Tools will keep returning as many digits as you ask for. Deciding how many to keep has never been their job.',
    closer: 'The case for a Leeuwarden child learning to code in 2026 is therefore nothing to do with towers. It is that published numbers arrive rounded, that calculators do not know this, that the difference between a point and an interval is the difference between honesty and overclaiming, and that the lesson lands hardest on something the child can see from the street.',
    blogAnchor: 'why writing code still repays a child in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a capital with thirty-five villages around it',
    intro: 'Grouw is twenty kilometres out, Stiens is north across the fields and Lions is a hamlet of about twenty-five people. None of them will ever support a coding club, and none of them has to.',
    cells: [
      { h3: 'No road, no bus, no bicycle', p: 'The lesson happens at the kitchen table in Wartena, Britsum or the city centre at one fixed hour a week, in a Frisian January as readily as in June.' },
      { h3: 'English for the class, Dutch for the school words', p: 'Instruction is in English. Groep, havo, vwo and profielkeuze stay Dutch because those are the words on the timetable, and a child schooled partly in Frisian is asked to translate nothing.' },
      { h3: 'What comes out of the opening hour', p: 'Evidence of the real level, a course chosen from it, and a weekly time, none of which requires a card.' },
      { h3: 'Stage sets the group', p: 'A learner in Mantgum and a learner in the city share a group when they are at the same point, and do not when they are not.' },
      { h3: 'Twice weekly, on the northern calendar', p: 'Two lessons a week at one repeating slot, eight in most months. Leeuwarden takes its holidays with regio Noord along with the rest of the province, and weeks away go into the plan before the slot is agreed.' },
      { h3: 'A gap of three and a half or four and a half hours', p: 'Only the Dutch clock moves, so the distance to the teacher is shorter in summer and longer in winter. Late afternoon, early evening and the whole weekend work at both ends.' }
    ],
    spec: { title: 'A village of twenty-five gets the same teacher as a city of ninety-six thousand', p: 'Lions had about 25 residents in 2023 and the city 95,890. No club of any kind will form for the children of the first, and the fee, the group size and the hour offered to a family there are the same as those offered in the centre of the second.' }
  },

  fees: {
    h2: 'The fee, in dollars, in all thirty-six places',
    intro: 'On the page rather than saved for a phone call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One international rate applies, quoted in dollars and never in euros, so a family in Lions sees exactly what a family in the city sees. Payment comes after the free lesson has produced a course and a time, and it comes over WhatsApp. Pausing, changing plan and missing a week are described on the pricing page.'
  },

  reviewsH2: 'Six families, in the words they left on Google',

  book: {
    h2: 'Send the level; the village can wait',
    intro: 'The first task might be a room measured with a coarse ruler, an interval type in Python that carries a low and a high, or a margin at work quoted to two decimals from inputs rounded to the nearest thousand.',
    success: 'Thank you. Your Leeuwarden class request has been sent.'
  },

  faq: {
    h2: 'Leeuwarden coding class questions',
    intro: 'The city, its villages, its tower, the teaching and the terms.',
    items: [
      { q: 'How far does the Oldehove actually lean?', a: 'Between 2.86 and 3.00 metres, and no source read here publishes the figure at all. The tower is given as 40 metres and 4.2 degrees out of true; multiplying gives 2.93, but 40 is rounded to the nearest metre and 4.2 to the nearest tenth of a degree, so running the calculation at the corners of both ranges produces an interval fourteen centimetres wide. Reporting that interval instead of the midpoint is the project on this page.' },
      { q: 'Which places does the class reach?', a: 'All 36 in the municipality: the city, Stiens, Grouw, Goutum, Warga, Irnsum, Wirdum, Mantgum, Roordahuizum, Britsum, Wartena and twenty-five smaller places down to Lions. The fee and the hour are identical in every one of them.' },
      { q: 'Is the class available in Frisian?', a: 'No, and neither is it in Dutch. Every lesson runs in English. The Dutch school words are kept as the school uses them, so groep, havo, vwo and profielkeuze are spoken as the child hears them, and a child who does part of the school day in Frisian is never asked to translate anything.' },
      { q: 'What time are classes for a family in Leeuwarden?', a: 'The teacher is three and a half hours ahead under Dutch summer time and four and a half in winter, because the Indian clock does not change. Workable hours run from the end of the school day to mid-evening, with both weekend days open, and one recurring slot is agreed in the free lesson.' },
      { q: 'We live in Grouw or Stiens, well outside the city. Does that matter?', a: 'It is the reason this exists. Grouw is twenty kilometres from the centre and joined the municipality only in 2014; Stiens came in with Leeuwarderadeel in 2018. Neither will support a local coding group, and a learner in either joins the same group at the same hour as one in the city.' },
      { q: 'Why does Leeuwarden have so few university students?', a: 'Because it teaches mainly at the applied level. The municipality counts 21,170 students at institutions here, while among its residents 7,870 are in applied higher education and 930 at university level. Frisian students who want a university generally go to Groningen.' },
      { q: 'What is in the free lesson?', a: 'The teacher finds the edge of what the learner can already do and sets one task just past it. A child might measure a room with a ruler marked only in metres. A teenager builds an interval type and runs the tower through it. An adult brings a derived figure from work. The hour ends with a course, a rung, a weekly time and a dollar figure, and nothing has been charged.' },
      { q: 'Is there a Modern Age Coders classroom in Leeuwarden?', a: 'No, and none is claimed near the Oldehove, in Stiens or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Leeuwarden coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Leeuwarden group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or village. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'Out to the province, east to the city, and up to the country',
    html: 'Leeuwarden is the capital of <a class="cg-inline-link" href="/coding-classes-in-friesland">Friesland</a>, whose page is about a province that a database loses when it joins on the name; east along the Wadden coast is the <a class="cg-inline-link" href="/coding-classes-in-groningen-province">province of Groningen</a> and its <a class="cg-inline-link" href="/coding-classes-in-groningen">city</a>. The parent of the whole series is the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and for machine learning rather than software there are <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> and the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-friesland', label: 'Friesland' },
    { href: '/coding-classes-in-groningen', label: 'Groningen' }
  ],

  personalityCss: `
.cg-root.cg-lwd .cg-hero-grid { align-items: start; gap: clamp(1.7rem, 4vw, 3.1rem); }
.cg-root.cg-lwd .cg-hero h1 { font-weight: 500; letter-spacing: -0.0105em; line-height: 1.11; }
.cg-root.cg-lwd .cg-capsule { border-left-width: 5px; border-left-style: solid; border-top: 2px solid var(--cg-accent-soft); padding-left: 1.4rem; padding-top: 0.65rem; }
.cg-root.cg-lwd .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; }
.cg-root.cg-lwd .cg-section-head h2 { max-width: 35ch; }
.cg-root.cg-lwd .cg-grid-3 { gap: clamp(1.15rem, 2.4vw, 1.85rem); }
.cg-root.cg-lwd .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-lwd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lwd .cg-callout { border-left-width: 6px; border-left-style: dotted; }
`,

  dossier: {
    curriculumAuthority: 'City and municipality of Leeuwarden, capital of Friesland: 130,162 residents (CBS 2026) across 36 woonplaatsen from the city at 95,890 (2023) down to Lions at about 25; 53 primary establishments (10,169 pupils) and 19 secondary (7,784); 21,170 students at institutions here, with 7,870 residents in applied higher education against 930 at university level. Mergers 2014 and 2018. Regio Noord holidays with the rest of the province. The city page argues from input rounding; the province page owns the name-versus-identifier join and the Groningen pages own their own.',
    localProject: 'A result cannot be more precise than the numbers it was made from. The Oldehove is published at 40 metres and 4.2 degrees out of true, and no source read gives its lean in metres. Height times the sine of the angle returns 2.93 m, but 40 implies 39.5 to 40.5 and 4.2 implies 4.15 to 4.25, so evaluating at the corners gives 2.86 to 3.00 m, an interval about 14 cm wide, roughly 2.4 percent either side of the midpoint. The learner builds an interval type, runs the calculation at the corners and reports both ends. Distinct from compounding uncertainty along a chain of three ratios (Eindhoven), where each successive step contributes its own error: here there are two inputs and one operation, and the entire width comes from how the sources rounded before publication. The derived lean never appears without its range and is labelled derived throughout.',
    requiredMentions: [
      '130,162',
      '67,494',
      '33,042',
      '110,984',
      '10,169',
      '7,784',
      '21,170',
      'Oldehove',
      'Stiens',
      'Grouw',
      'Mantgum',
      'Foort van Oosten',
      '95,890',
      'Wartena'
    ],
    sources: [
      { claim: 'Leeuwarden 130,162 residents in 2026 (CBS); 67,494 households averaging 1.89, 33,042 single-person (49 percent); 18,096 aged 0 to 15; 19,255 aged 15 to 25; 35,239 aged 25 to 45; 31,340 aged 45 to 65; 26,232 aged 65 and over; total area 25,506 ha, land 23,755 ha; density 547; 53 primary establishments (10,169 pupils) and 19 secondary (7,784); 21,170 students at institutions in the municipality; HBO 7,870 and WO 930; 36 woonplaatsen, 22 wijken and 136 buurten; 110,984 in 1995, a rise of 19,178 (17 percent).', url: 'https://allecijfers.nl/gemeente/leeuwarden/' },
      { claim: 'Leeuwarden 130,179 residents on 1 January 2026; 255.06 km2 (238.38 land, 16.68 water); acting mayor Foort van Oosten (VVD); among the 25 largest municipalities of the Netherlands; 36 kernen with 1 January 2023 populations Leeuwarden 95,890, Stiens 7,830, Grouw 5,905, Goutum 3,360, Warga 1,905, Irnsum 1,390, Wirdum 1,165, Mantgum 1,140, Roordahuizum 1,085, Britsum 955, Wartena 890, then 25 smaller down to Lions 25; in 2014 part of the former municipality of Boornsterhem including Grouw was added, and in 2018 parts of Littenseradeel including Mantgum together with the whole of Leeuwarderadeel.', url: 'https://nl.wikipedia.org/wiki/Leeuwarden_(gemeente)' },
      { claim: 'The Oldehove: tower 40 metres; it hangs 4.2 degrees out of true; construction began on 28 May 1529; it was never finished and the church beside it collapsed in 1576. No lean in metres is given.', url: 'https://nl.wikipedia.org/wiki/Oldehove_(gebouw)' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'A single figure for the lean of the Oldehove. The page reports 2.86 to 3.00 metres and never quotes the midpoint alone.',
      'A city rights year for Leeuwarden. The record is reported as uncertain in the sources and no date is stated here.',
      'Any reconciliation of the eleven listed 2023 village populations with the 2026 municipal total. The dates differ and no residual is computed.',
      'Populations for the twenty-five smaller places beyond Lions at about 25. Not listed individually in the source read.',
      'That Leeuwarden was European Capital of Culture jointly with another city. The year 2018 is stated and nothing further, because the detail was not read at source.',
      'Anything the Friesland page owns: the official name change and the join that loses the province. Anything the Groningen pages own.'
    ]
  }
};
