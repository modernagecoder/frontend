'use strict';
// Amsterdam-Zuid: 146,395 residents, formed 1 May 2010, holding the
// Zuidas, Buitenveldert and De Pijp.
// Spine: households and dwellings are two registers counting different
// objects, and the gap between them is a measurement in its own right,
// including its sign.

module.exports = {
  slug: 'coding-classes-in-amsterdam-zuid',
  code: 'azd',
  accent: '#0B764D',
  accentRationale: 'Amsterdam-Zuid: a deep viridian off the Vondelpark and the Amstelpark, taken from the one hue band with real separation left in a cluster crowded with reds, and clearly distinct from the rose, ochre and violet already carrying the other three Amsterdam district pages',
  pageType: 'district',
  place: {
    name: 'Amsterdam-Zuid',
    eyebrow: 'Zuid, Amsterdam',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'City', name: 'Amsterdam' },
      { type: 'AdministrativeArea', name: 'Noord-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-netherlands', name: 'Netherlands' },
    { slug: 'coding-classes-in-amsterdam', name: 'Amsterdam' }
  ],
  nav: [
    { label: 'Amsterdam', href: '/coding-classes-in-amsterdam' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Amsterdam-Zuid, Netherlands',
  title: 'Coding Classes in Amsterdam-Zuid | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Amsterdam-Zuid for ages 6 to 67, from De Pijp to Buitenveldert and the Zuidas. The first lesson is free.',
  ogDescription: 'Live online coding, Python and AI for families in Amsterdam-Zuid, built on two official registers that count different things and disagree by 432 on the Zuidas.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'mysql-database-complete-masterclass-college',
  verifiedOn: '9 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Amsterdam-Zuid Learners',
    description: 'Ability-placed online coding, Python, AI, databases and mathematics for children, teenagers and adults across the wijken of Amsterdam-Zuid, taught in English.'
  },

  h1: 'Coding classes in Amsterdam-Zuid, where one neighbourhood has 3,310 households living in 2,878 homes',
  capsuleQ: 'What are the best coding classes in Amsterdam-Zuid?',
  capsule: 'Coding classes in Amsterdam-Zuid reach 146,395 residents (1 January 2026) across a district formed on 1 May 2010 out of Oud-Zuid and Zuideramstel. On the Zuidas the statistics office publishes 3,310 households and 2,878 dwellings for the same year, 432 more households than homes. In the Jordaan across the city the same pair runs the other way, 13,260 households in 13,425 dwellings. Neither figure is wrong and neither is a count of the other. Modern Age Coders teaches live online in English from the Albert Cuyp end of De Pijp out to Buitenveldert, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'The Zuidas has 3,310 households and 2,878 homes, both published for 2025 by the same office. There are 432 more households than there are dwellings for them to be in. Nothing has gone wrong. A household is an entry in a population register and a dwelling is an entry in a building register, and one address can carry several of the first. Two streets of data further on, in the Jordaan, the same two columns run the other way round. The gap between them is not an error to be closed. It is the most interesting number on the page.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Amsterdam-Zuid.',

  picks: {
    eyebrow: 'Course picks for Amsterdam-Zuid',
    h2: 'Four courses for a district that runs from a market street to a business quarter',
    intro: 'A groep 5 child off the Sarphatipark who is bored of finishing other people\'s games, a teenager in the Rivierenbuurt who wants to work with real data rather than hear about it, a student in the VU-kwartier who needs Python to stop being a module and start being a habit, and an adult in Buitenveldert who has to reconcile two systems every month and has never been told why they disagree: four doors, first hour free on each.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python, drawings that take orders and a first program that spots a pattern, taught in English to the groep 5 to 8 child anywhere in the district.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Loading, joining and questioning a real dataset, for the teenager who would rather interrogate a table than be told what it says.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python that collects, cleans, checks and reports on a schedule, for the student or worker doing the same reconciliation by hand every month.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reading two systems against each other without assuming either is the truth, for anyone who has to explain a difference to somebody more senior.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Zuid today',
      h2: 'A hundred and forty-six thousand people, in a district only sixteen years old',
      intro: 'Amsterdam-Zuid was established on 1 May 2010 by joining the former stadsdelen Oud-Zuid and Zuideramstel, and it recorded 146,395 residents on 1 January 2026. It is organised into three area-governance zones rather than one flat list of neighbourhoods, and those three are about as unlike each other as any three parts of this city.',
      body: [
        { kind: 'spec', title: 'Three zones, and what sits in each', p: 'GK11, Oud-Zuid, holds the Hoofddorppleinbuurt, the Schinkelbuurt, Willemspark, the Museumkwartier, the Stadionbuurt and the Apollobuurt, along with the Vondelpark, the Museumplein and the housing Berlage laid out as Plan Zuid. GK12, Buitenveldert and Zuidas, holds the Prinses Irenebuurt, the Zuidas itself, Buitenveldert-West and Buitenveldert-Oost, and contains the international business quarter. GK13, De Pijp and Rivierenbuurt, holds the Oude Pijp, the Nieuwe Pijp, the Zuid Pijp, the Scheldebuurt, the IJselbuurt and the Rijnbuurt, and is where the Albert Cuypmarkt and the Sarphatipark are.' },
        { kind: 'grid3', cells: [
          { h3: 'Two published numbers that need a footnote', p: 'The district entry gives 146,395 residents and an area of 17.41 square kilometres, and separately a density of 9,602 people to the square kilometre for 2025. Those three do not fit together: the population over the area gives 8,409, and the published density implies about 15.25 square kilometres. The difference is land against total, and what that does to a comparison is the argument of the Amsterdam-Centrum page in this series, so this page notes it and does not rerun it.' },
          { h3: 'What this page actually measures', p: 'Three of the district\'s wijken carry full published figures here: the Oude Pijp, Buitenveldert-Oost and the Zuidas. Between them they hold 28,240 residents. No district-wide average of any kind is computed from three wijken, because a partial average is not an average and the remaining wijken are not small.' },
          { h3: 'Where the argument comes from', p: 'Every wijk page publishes a household count and a dwelling count side by side, both for 2025. On the Zuidas those two are 3,310 and 2,878. In Buitenveldert-Oost they are 4,660 and 4,560. In the Oude Pijp, 10,015 and 9,708. The gap is positive in all three and very different in size, and elsewhere in the city it goes negative.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Three wijken, set out as a table because that is where the disagreement shows',
      intro: 'A nineteenth-century market quarter, a post-war garden suburb and a business district with flats in it. Populations are 2026 figures; households, area, housing, tenure and density are 2025; incomes are 2024.',
      body: [
        { kind: 'table', caption: 'Three wijken of Amsterdam-Zuid, as published', head: ['Wijk', 'Residents', 'Households, and average size', 'Dwellings, and average value', 'Income per resident'], rows: [
          ['Oude Pijp, five buurten', '14,816', '10,015 at 1.5 people, 6,445 of them one person', '9,708, at 539,000 euro, 73 percent rented', '49,400 euro'],
          ['Buitenveldert-Oost, four buurten', '8,447', '4,660 at 1.7 people, 2,610 of them one person', '4,560, at 516,000 euro, 66 percent rented', '44,200 euro'],
          ['Zuidas, five buurten', '4,977', '3,310 at 1.5 people, 2,275 of them one person', '2,878, at 670,000 euro, 81 percent rented', '68,200 euro'],
          ['And the density', 'Oude Pijp 23,810 per km2', 'Buitenveldert-Oost 5,451', 'Zuidas 2,281, the lowest here', 'a business quarter with flats in it']
        ] },
        { kind: 'p', text: 'The Zuidas buurten are the RAI, Zuidas-Noord, Zuidas-Zuid, Vivaldi and the VU-kwartier. Buitenveldert-Oost sits beside it and Buitenveldert-West beyond that. The Oude Pijp is the other end of the district in every sense: 23,810 people to the square kilometre against 2,281, and 6.6 percent of its residents under fifteen against 10 percent on the Zuidas. The wijken this page does not carry figures for, among them the Museumkwartier, the Apollobuurt, the Stadionbuurt, the Nieuwe Pijp, the Scheldebuurt and the Rijnbuurt, are named and given no invented numbers. A learner is placed on what they can already do, so the neighbourhood on the address never enters the decision.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, its year, and the things left uncounted',
      intro: 'One district entry, three wijk pages, two registers that disagree by design, and a short list of claims this page will not make.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The district, from its entry', p: 'Op 1 januari 2026 telde Zuid 146.395 inwoners; a density of 9,602 per square kilometre for 2025 across 17.41 square kilometres; het huidige stadsdeel werd op 1 mei 2010 ingesteld door samenvoeging van de voormalige stadsdelen Oud-Zuid en Zuideramstel; three GGW-gebieden, GK11 Oud-Zuid, GK12 Buitenveldert and Zuidas, GK13 De Pijp and Rivierenbuurt, with their wijken named; the Vondelpark and Museumplein in Oud-Zuid; Berlage\'s Plan Zuid; the international business district on the Zuidas; the Albert Cuypmarkt and the Sarphatipark in the De Pijp and Rivierenbuurt zone.' },
          { h3: 'Zuidas', p: '4,977 residents (2026); 3,310 households averaging 1.5 (2025), 2,275 single-person at 69 percent; ages 500, 810, 2,795, 685 and 190; 217 hectares total, 212 land and 4 water; density 2,281; 2,878 dwellings; average value 670,000 euro; 2,331 rented at 81 percent and 518 owned at 18; income 68,200 euro (2024); five buurten, the RAI, Zuidas-Noord, Zuidas-Zuid, Vivaldi and the VU-kwartier.' },
          { h3: 'Buitenveldert-Oost', p: '8,447 residents (2026); 4,660 households averaging 1.7 (2025), 2,610 single-person at 56 percent; ages 1,100, 835, 2,960, 1,650 and 1,865; 170 hectares total and 153 land; density 5,451; 4,560 dwellings; average value 516,000 euro; 3,010 rented at 66 percent and 1,550 owned at 34; income 44,200 euro (2024); four buurten.' },
          { h3: 'Oude Pijp', p: '14,816 residents (2026); 10,015 households averaging 1.5 (2025), 6,445 single-person at 64 percent; ages 975, 2,305, 6,930, 3,005 and 1,615; 68 hectares total and 63 land; density 23,810; 9,708 dwellings; average value 539,000 euro; 7,087 rented at 73 percent and 2,621 owned at 27; income 49,400 euro (2024); five buurten.' },
          { h3: 'A second gap, inside one register', p: 'On the Zuidas the rented and owned dwellings, 2,331 and 518, add to 2,849 against a published stock of 2,878, leaving 29 unaccounted, and the two percentages are given as 81 and 18. In the other two wijken the tenure counts add to the stock exactly. None of these figures is rounded to a multiple of five, so this is not the rounding question the Amsterdam-Noord page settles; it is 29 dwellings sitting outside both categories.' },
          { h3: 'What this page refuses to conclude', p: 'It does not say why any particular gap has the size or sign it has. Candidates for a positive gap include several households registered at one address, shared and student housing, sublets and lodgers; for a negative one, dwellings with nobody registered in them, second homes, holiday lets and homes between tenants. Nothing read here establishes which applies where, so the gaps are reported and their causes are not assigned.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the stadsdeel, the city, the business district or any school named here and claims none. Household and dwelling figures are both 2025, so the difference between them is not a question of vintage.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: '432 more households than homes, and the sign that flips across the city',
      intro: 'Two official counts that sound like the same count, a difference that runs from minus two percent to plus fifteen, and a strong temptation to make them agree.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Find out what each register counts', p: 'A household is a registration of people living together; a dwelling is a unit in a building register. One address can carry several households and one household cannot occupy several dwellings. The two were never designed to match, so the first question is not why they differ but why anybody expected them to be the same number.' },
          { h3: '2. Compute the gap and keep its sign', p: 'On the Zuidas it is plus 432, which is 15.0 percent of the dwelling stock. In the Oude Pijp plus 307, 3.2 percent. In Buitenveldert-Oost plus 100, 2.2 percent. In the Jordaan, elsewhere in the city, minus 165. In Grachtengordel-West minus 104. Same two columns, opposite directions, and the direction is the informative part.' },
          { h3: '3. Read each direction separately', p: 'More households than homes points at addresses carrying more than one household. Fewer households than homes points at homes carrying nobody. Those are opposite housing situations and a single absolute difference, or a single error rate, would flatten them into one meaningless quantity.' }
        ] },
        { kind: 'table', caption: 'The same two columns in five Amsterdam neighbourhoods', head: ['Wijk', 'Households, 2025', 'Dwellings, 2025', 'Gap', 'Which way it points'], rows: [
          ['Zuidas', '3,310', '2,878', 'plus 432, 15.0 percent', 'towards addresses holding more than one household'],
          ['Oude Pijp', '10,015', '9,708', 'plus 307, 3.2 percent', 'the same direction, a fifth as strongly'],
          ['Buitenveldert-Oost', '4,660', '4,560', 'plus 100, 2.2 percent', 'the same direction again, weaker still'],
          ['Jordaan, in Centrum', '13,260', '13,425', 'minus 165, 1.2 percent', 'towards homes with nobody registered in them'],
          ['Grachtengordel-West, in Centrum', '4,290', '4,394', 'minus 104, 2.4 percent', 'the same, and the strongest negative found']
        ] },
        { kind: 'callout', h3: 'When two systems disagree, the disagreement is the data', p: 'Every organisation has two systems that ought to give the same number and do not. The billing system and the CRM disagree about how many customers there are. The HR system and the payroll run disagree about headcount. The order table and the shipping table disagree about units. The reflex in every one of those cases is to call it a reconciliation problem and to go looking for the correct figure, and that reflex throws away the finding before anybody has looked at it. The first question is not which number is right. It is what each system was built to count, because two counts of genuinely different objects have no obligation to agree and the size and direction of their difference will often tell you something neither number can. Here the two registers are counting registrations of people and units of building, the gap runs from minus 2.4 percent to plus 15.0 across five neighbourhoods of one city, and the sign changes meaning completely as it crosses zero. Somebody who averaged those five gaps to get a headline figure would produce a small positive number describing nowhere and concealing both phenomena. Somebody who forced the columns to agree would have destroyed the only evidence that the Zuidas and the Jordaan house people in fundamentally different ways. The habit worth carrying is short. Write down the definition of each count. Compute the difference and keep its sign. Report it as a field rather than resolving it. And when somebody asks which system is correct, the honest answer is very often that both are, and that the question is the wrong one.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for two systems that will not agree',
      intro: 'Customers in billing against customers in the CRM, headcount in HR against payroll, stock on the shelf against stock in the system: the difference is permanent and the response decides whether it is information or noise. Practised on two registers in one district.',
      body: [
        { kind: 'table', caption: 'Working with a difference that is not going away', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Define both counts', 'Write what each system counts, in its own words, before comparing', 'Two different objects treated as one', 'A reason the numbers differ that is not a bug'],
          ['Keep the sign', 'Report the difference as signed, never as an absolute or a rate', 'Opposite situations averaged into nothing', 'Two findings instead of none'],
          ['Compare across units', 'Compute the gap for every branch, region or neighbourhood', 'One ratio treated as a constant', 'The spread, which is where the signal is'],
          ['Never force agreement', 'Do not adjust either count to make them match', 'Evidence deleted to make a report tidy', 'A table that still shows what happened'],
          ['Carry it downstream', 'Store the gap as its own field, with its definition attached', 'A discrepancy rediscovered every quarter', 'A number somebody can act on next year']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Count the coats on the pegs and the children in the room. The two numbers differ, nobody has miscounted, and the class works out every reason that can happen before deciding which count answers which question.' },
          { h3: 'For teenagers', p: 'The five neighbourhoods in Python, a function that returns a signed gap and refuses to return its absolute value, and a chart that puts zero in the middle rather than at the bottom. The stretch: write the version that averages all five gaps into one number, then explain in two sentences exactly what that average has hidden.' },
          { h3: 'For adults', p: 'A real reconciliation from work between two systems. Adults nearly always find that nobody has written down what either system counts, that the difference is treated as an error rate, and that the month it changed sign went unnoticed.' }
        ] },
        { kind: 'p', text: 'The district population, area, density, formation date, governance zones and wijk names come from the stadsdeel entry. Every population, household, age, area, density, dwelling, value, tenure and income figure comes from the national statistics office page for the wijk named beside it, with populations for 2026, household and housing figures for 2025 and incomes for 2024. The five gaps, their percentages, the three-wijk total of 28,240 residents, the 29 unaccounted dwellings on the Zuidas and the implied land area of about 15.25 square kilometres are this page subtracting and dividing published numbers, and are labelled as arithmetic wherever they appear.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From coats and children to a report that keeps the sign on its differences',
    intro: 'The starting rung comes out of the free hour and what the learner can already do. Which of the district\'s three zones the address falls in is never asked.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Coats on pegs, children in the room', p: 'Children meet two honest counts of nearly the same thing and work out why both are right.', courses: ['kids-coding-blocks-masterclass', 'block-coding-app-development-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'What is this column actually counting?', p: 'Learners write the definition of a field before they use it in any sum.', courses: ['python-ai-kids-masterclass', 'statistics-probability-maths-course'] },
      { band: 'Ages 14 to 18', h3: 'Signed differences and joins that admit doubt', p: 'Teenagers build tables that keep the direction of a discrepancy instead of flattening it.', courses: ['data-science-course-for-teens-python-data', 'mysql-mastery-for-teens'] },
      { band: 'Ages 18 to 67', h3: 'The monthly reconciliation', p: 'Adults take two real systems that disagree and stop trying to decide which one is right.', courses: ['mysql-database-complete-masterclass-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will reconcile the two columns for you. Why should a teenager in Zuid learn to stop it?',
    intro: 'Because the difference between them is a finding, and reconciliation is the process of deleting it.',
    p1: 'Hand a model two columns that ought to match and do not, and it will be helpful. It will note the discrepancy, suggest a likely cause, and very often offer a cleaned version in which the numbers agree. That is exactly the wrong output here. The gap between households and dwellings is not an error introduced somewhere in a pipeline; it is the product of two registers built to count different objects, and its size and direction differ from one neighbourhood to the next in ways that describe how people actually live. A tidy table has none of that in it.',
    p2: 'So the learner practises the opposite instinct: define both counts, compute the difference, keep its sign, and store it as a column of its own. The code is trivial and the discipline is not. A fourteen-year-old in the Rivierenbuurt who has refused to reconcile two registers will be the person at thirty who asks what the CRM counts before agreeing that the customer number is wrong. Models will keep offering the reconciled version, fluently and immediately, because that is what the request sounds like it wants. Knowing that the mess was the answer stays a person\'s job.',
    closer: 'The case for a child in Amsterdam-Zuid learning to code in 2026 is therefore not about housing registers. It is that adult working life is full of pairs of systems that disagree permanently and by design, that the reflex to make them agree destroys information every single time, and that a business quarter with 432 more households than homes and a canal district with 165 fewer makes the point in two lines of a table.',
    blogAnchor: 'whether a child still gains from writing code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes from the market street to the ring road',
    intro: 'Zuid is well served by trams and short journeys, and none of that helps with the actual constraint here, which is that a specific level in a specific subject rarely has enough local learners to form a group at all.',
    cells: [
      { h3: 'One hour a week, wherever the laptop is', p: 'The class runs at home off the Albert Cuyp, in a Buitenveldert flat or in the VU-kwartier at the same time every week, with no tram, no evening journey and no room to book.' },
      { h3: 'Taught in English, school words left in Dutch', p: 'Everything is taught in English, which suits a district with this many international households. Groep, havo, vwo and profielkeuze stay exactly as a Dutch school writes them, because a child recognises those and would not recognise a translation.' },
      { h3: 'What the free hour produces', p: 'The teacher watches the learner work, so the level is shown rather than claimed; a named course follows from it, and an hour in the week is agreed. Nothing about payment comes up during it.' },
      { h3: 'Groups are made of levels, not addresses', p: 'A learner in the Oude Pijp and a learner in Buitenveldert-Oost work together when they are at the same stage and separately when they are not. Neither the wijk nor the school is an input.' },
      { h3: 'Two lessons a week, regio Noord dates', p: 'A repeating twice-weekly slot, normally eight lessons across a month. Noord-Holland takes its school holidays with regio Noord, and the weeks a family will be away are agreed before the plan starts rather than after.' },
      { h3: 'India is three and a half hours behind, four and a half in winter', p: 'The Dutch clock moves and the Indian one does not, so the gap changes with the season. The stretch after school, the early evening and either weekend day all work at both settings.' }
    ],
    spec: { title: 'A district where the child population is very unevenly spread', p: 'Under-fifteens are 6.6 percent of the Oude Pijp, 10 percent of the Zuidas and 13 percent of Buitenveldert-Oost, which in absolute terms is 975, 500 and 1,100 children. A neighbourhood with 500 children under fifteen cannot assemble a group of five to ten at one specific level in one specific subject, and that is arithmetic rather than any comment on local schools. Groups here are formed on ability from across the world, which is the only arrangement in which a narrow level fills, at every age up to sixty-seven.' }
  },

  fees: {
    h2: 'The fee, in dollars, identical in all three zones',
    intro: 'Published on the page rather than saved for a phone call.',
    first: 'A full lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'A single international rate applies and it is quoted in dollars. There is no euro edition, so an address on the Zuidas is charged exactly what an address in the Rijnbuurt is. Nothing is paid until the free lesson has fixed a course and an hour, and the payment is then arranged over WhatsApp. Pausing, switching plan and missing a week are all described on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, left exactly as the people who wrote them typed them',

  book: {
    h2: 'Send us the level; the zone is not needed',
    intro: 'The first task might be coats on pegs against children in the room, a function that returns a signed gap and refuses to hand back its absolute value, or two systems at work that have disagreed every month for years.',
    success: 'Thank you. Your Amsterdam-Zuid class request has been sent.'
  },

  faq: {
    h2: 'Amsterdam-Zuid coding class questions',
    intro: 'The district, its three zones, its two registers, the teaching and the terms.',
    items: [
      { q: 'How can a neighbourhood have more households than homes?', a: 'Because the two are counted by different registers. A household is a registration of people living together and a dwelling is a unit in a building register, and one address can carry more than one household. On the Zuidas the published figures for 2025 are 3,310 households and 2,878 dwellings, a difference of 432 or 15.0 percent. In Buitenveldert-Oost the same pair is 4,660 and 4,560, and in the Oude Pijp 10,015 and 9,708. The gap is real, expected, and not an error in either count.' },
      { q: 'Does the gap ever go the other way?', a: 'Yes, and that is the important part. In the Jordaan the figures are 13,260 households and 13,425 dwellings, 165 fewer households than homes, and in Grachtengordel-West 4,290 against 4,394, 104 fewer. A positive gap points towards addresses carrying more than one household; a negative one points towards homes with nobody registered in them. Averaging the two directions together would produce a small number describing nowhere.' },
      { q: 'Which neighbourhoods are in Amsterdam-Zuid?', a: 'The district is organised into three area-governance zones. Oud-Zuid holds the Hoofddorppleinbuurt, Schinkelbuurt, Willemspark, Museumkwartier, Stadionbuurt and Apollobuurt. Buitenveldert and Zuidas holds the Prinses Irenebuurt, the Zuidas, Buitenveldert-West and Buitenveldert-Oost. De Pijp and Rivierenbuurt holds the Oude Pijp, Nieuwe Pijp, Zuid Pijp, Scheldebuurt, IJselbuurt and Rijnbuurt. Full figures appear on this page for three of them and no numbers are invented for the rest.' },
      { q: 'When was Amsterdam-Zuid created?', a: 'On 1 May 2010, by joining the former stadsdelen Oud-Zuid and Zuideramstel. The district recorded 146,395 residents on 1 January 2026. Its entry also gives an area of 17.41 square kilometres and a density of 9,602 per square kilometre, which do not fit the population unless the density is computed on land rather than total area.' },
      { q: 'Why is the Zuidas so thinly populated?', a: 'It is published at 2,281 people to the square kilometre across 217 hectares, against 23,810 in the Oude Pijp. It is primarily a business quarter that also contains housing, so most of its surface is not residential. Its 4,977 residents are unusually concentrated in one age band, with 2,795 of them between twenty-five and forty-five and only 190 aged sixty-five or over.' },
      { q: 'Is the class taught in Dutch?', a: 'No. Every lesson runs in English from beginning to end, which suits a district with a large international population. Dutch school vocabulary is the deliberate exception and is kept as a Dutch school writes it, so groep, havo, vwo and profielkeuze are spoken rather than translated. There is no Dutch-language version of any course.' },
      { q: 'What times work for a family in Zuid?', a: 'The teacher is three and a half hours ahead during Dutch summer time and four and a half in winter, since only the Dutch clock changes. The workable window runs from the end of the school day to mid-evening, with both Saturday and Sunday open, and one repeating weekly slot is agreed during the free lesson and then kept.' },
      { q: 'Is there a Modern Age Coders classroom in Amsterdam-Zuid?', a: 'No, and none is claimed on the Zuidas, elsewhere in Amsterdam or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that stays up. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Amsterdam-Zuid coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. The course, the format, the recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or neighbourhood. One-to-one means a single learner with a single teacher. If no group at the right level happens to be running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Amsterdam and beyond',
    h2: 'North to the canals, east to the islands, south to Amstelveen',
    html: 'North of the ring is <a class="cg-inline-link" href="/coding-classes-in-amsterdam-centrum">Amsterdam-Centrum</a>, where the district turns out to be less crowded than its own neighbourhoods, and east is <a class="cg-inline-link" href="/coding-classes-in-amsterdam-oost">Amsterdam-Oost</a>, where two neighbourhoods with the same number of homes hold 4,160 different people. Across the water sits <a class="cg-inline-link" href="/coding-classes-in-amsterdam-noord">Amsterdam-Noord</a>. The city page, <a class="cg-inline-link" href="/coding-classes-in-amsterdam">coding classes in Amsterdam</a>, carries the picture for all eight districts, and immediately south of this one is <a class="cg-inline-link" href="/coding-classes-in-amstelveen">Amstelveen</a>. Everything descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner after trained models rather than running programs should begin at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Carry on in WhatsApp'
  },

  footerHeading: 'Amsterdam and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-amsterdam', label: 'Amsterdam' },
    { href: '/coding-classes-in-amsterdam-oost', label: 'Amsterdam-Oost' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-azd .cg-hero-grid { align-items: center; gap: clamp(1.7rem, 4.2vw, 3.2rem); }
.cg-root.cg-azd .cg-hero h1 { font-weight: 400; letter-spacing: -0.005em; line-height: 1.16; }
.cg-root.cg-azd .cg-capsule { border-left-width: 1px; border-left-style: solid; border-top: 5px solid var(--cg-accent); padding-left: 1.15rem; padding-top: 1rem; }
.cg-root.cg-azd .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; }
.cg-root.cg-azd .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-azd .cg-grid-3 { gap: clamp(1.25rem, 2.6vw, 2rem); }
.cg-root.cg-azd .cg-card { border-radius: 0; border-top: 2px solid var(--cg-accent-soft); }
.cg-root.cg-azd .cg-table caption { text-transform: uppercase; letter-spacing: 0.08em; }
.cg-root.cg-azd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-azd .cg-ladder-col { border-top: 1px solid var(--cg-accent); padding-top: 1.15rem; }
`,

  dossier: {
    curriculumAuthority: 'Stadsdeel Amsterdam-Zuid, Noord-Holland: 146,395 residents on 1 January 2026, established 1 May 2010 by merging Oud-Zuid and Zuideramstel; area 17.41 km2 with a published density of 9,602 for 2025, which implies about 15.25 km2 of land and is therefore computed on land rather than total; three GGW-gebieden, GK11 Oud-Zuid, GK12 Buitenveldert and Zuidas, GK13 De Pijp and Rivierenbuurt. Three wijken carry full figures: Oude Pijp 14,816 residents in 10,015 households and 9,708 dwellings, Buitenveldert-Oost 8,447 in 4,660 and 4,560, Zuidas 4,977 in 3,310 and 2,878, together 28,240 residents. Density runs from 23,810 in the Oude Pijp to 2,281 on the Zuidas. Regio Noord holidays. The district page argues from two registers that count different objects; Amsterdam-Centrum owns aggregates over ground and the land-versus-total denominator, Amsterdam-Noord owns the rounding bound, Amsterdam-Oost owns self-selection, and the city page owns the doorstroomtoets rates and the 2055 projections.',
    localProject: 'When two systems disagree, the disagreement is the data. Households and dwellings are published side by side for 2025 in every Amsterdam wijk and count different objects: a registration of people living together against a unit in a building register, with one address able to carry several of the first. On the Zuidas the pair is 3,310 and 2,878, a gap of plus 432 or 15.0 percent; in the Oude Pijp 10,015 and 9,708, plus 307 or 3.2 percent; in Buitenveldert-Oost 4,660 and 4,560, plus 100 or 2.2 percent. Elsewhere in the city the sign reverses: the Jordaan 13,260 against 13,425, minus 165, and Grachtengordel-West 4,290 against 4,394, minus 104. A positive gap points towards addresses carrying more than one household, a negative one towards dwellings with nobody registered in them, so an absolute difference or a single error rate would flatten two opposite phenomena into one meaningless quantity, and forcing the columns to agree would delete the finding entirely. A supporting observation, not the argument: on the Zuidas the tenure counts 2,331 and 518 add to 2,849 against a stock of 2,878, leaving 29 unclassified, and none of those figures is rounded, so it is not the rounding question the Amsterdam-Noord page settles. Distinct from the unit-of-observation trap (Zeeland), where two legitimate row types produce two rankings; from the excluded-population denominator (Venlo); from one label over two contradictory tables (Alphen); and from mismatched vintages (Apeldoorn), since both counts here are 2025. The causes of individual gaps are named as candidates and never assigned.',
    requiredMentions: [
      '146,395',
      '4,977',
      '3,310',
      '2,878',
      '8,447',
      '4,660',
      '14,816',
      '10,015',
      '9,708',
      '2,281',
      '68,200',
      '28,240',
      'Zuidas',
      'Buitenveldert-Oost'
    ],
    sources: [
      { claim: 'Op 1 januari 2026 telde Zuid 146.395 inwoners, with a density of 9.602 (2025) inw./km2 across 17,41 km2; het huidige stadsdeel werd op 1 mei 2010 ingesteld door samenvoeging van de voormalige stadsdelen Oud-Zuid en Zuideramstel; three GGW-gebieden, Oud-Zuid (GK11) with Hoofddorppleinbuurt, Schinkelbuurt, Willemspark, Museumkwartier, Stadionbuurt and Apollobuurt, Buitenveldert/Zuidas (GK12) with Prinses Irenebuurt, Zuidas, Buitenveldert-West and Buitenveldert-Oost, and De Pijp/Rivierenbuurt (GK13) with Oude Pijp, Nieuwe Pijp, Zuid Pijp, Scheldebuurt, IJselbuurt and Rijnbuurt; in Oud-Zuid liggen onder meer het Vondelpark and het Museumplein met de belangrijkste musea, and het door H.P. Berlage ontworpen Plan Zuid; het gebied Buitenveldert, Zuidas omvat naast woongebieden ook het internationale zakendistrict Zuidas; de Albert Cuypmarkt and het Sarphatipark are named in the De Pijp and Rivierenbuurt zone.', url: 'https://nl.wikipedia.org/wiki/Amsterdam-Zuid' },
      { claim: 'Wijk Zuidas, Amsterdam: 4,977 inwoners (2026); 3,310 huishoudens averaging 1.5 (2025), 2,275 eenpersoonshuishoudens at 69 percent; ages 500 (0 to 15, 10 percent), 810 (15 to 25, 16 percent), 2,795 (25 to 45, 56 percent), 685 (45 to 65, 14 percent), 190 (65+, 3.82 percent); 217 hectare total, 212 land, 4 water (2025); bevolkingsdichtheid 2,281 per km2 (2025); woningvoorraad 2,878 (2025); average WOZ 670,000 euro (2025); 2,331 huurwoningen (81 percent) and 518 koopwoningen (18 percent); average income 68,200 euro per resident (2024); 5 buurten: RAI, Zuidas-Noord, Zuidas-Zuid, Vivaldi, VU-kwartier.', url: 'https://allecijfers.nl/wijk/zuidas-amsterdam/' },
      { claim: 'Wijk Buitenveldert-Oost, Amsterdam: 8,447 inwoners (2026); 4,660 huishoudens averaging 1.7 (2025), 2,610 eenpersoonshuishoudens at 56 percent; ages 1,100 (0 to 15, 13 percent), 835 (15 to 25, 9.9 percent), 2,960 (25 to 45, 35 percent), 1,650 (45 to 65, 20 percent), 1,865 (65+, 22 percent); 170 hectare total, 153 land (2025); bevolkingsdichtheid 5,451 per km2 (2025); 4,560 woningen (2025); average WOZ 516,000 euro (2025); 3,010 huurwoningen (66 percent) and 1,550 koopwoningen (34 percent); average income 44,200 euro (2024); 4 buurten.', url: 'https://allecijfers.nl/wijk/buitenveldert-oost-amsterdam/' },
      { claim: 'Wijk Oude Pijp, Amsterdam: 14,816 inwoners (2026); 10,015 huishoudens averaging 1.5 (2025), 6,445 eenpersoonshuishoudens at 64 percent and 3,570 meerpersoonshuishoudens at 36; ages 975 (0 to 15, 6.6 percent), 2,305 (15 to 25, 16 percent), 6,930 (25 to 45, 47 percent), 3,005 (45 to 65, 20 percent), 1,615 (65+, 11 percent); 68 hectare total, 63 land; bevolkingsdichtheid 23,810 per km2 (2025); 9,708 woningen (2025); average WOZ 539,000 euro (2025); 2,621 koopwoningen (27 percent) and 7,087 huurwoningen (73 percent); average income 49,400 euro (2024); 5 buurten.', url: 'https://allecijfers.nl/wijk/oude-pijp-amsterdam/' },
      { claim: 'Wijk Jordaan, Amsterdam: 13,260 huishoudens and 13,425 woningen (2025). Wijk Grachtengordel-West, Amsterdam: 4,290 huishoudens and 4,394 woningen (2025). Both are used on this page only to show that the household-minus-dwelling gap changes sign across the city.', url: 'https://allecijfers.nl/wijk/jordaan-amsterdam/' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'A cause for any individual household-minus-dwelling gap. Candidates are named for each direction and none is assigned, because nothing read establishes which applies where.',
      'Any reconciled figure in which households and dwellings agree. Both counts are printed as published and neither is adjusted.',
      'An average of the five gaps. They run from minus 2.4 percent to plus 15.0 and point in opposite directions, so a single mean would describe nowhere.',
      'A district average of income, household size, age or tenure. Three of the district\'s wijken were read and a partial average is not an average.',
      'Any argument built on the district density of 9,602 against the area of 17.41 km2. The mismatch is noted once and the land-versus-total question belongs to the Amsterdam-Centrum page.',
      'The 29 unclassified dwellings on the Zuidas treated as a rounding artefact. None of the figures involved is rounded, and the rounding bound belongs to the Amsterdam-Noord page.',
      'Figures for the Museumkwartier, Apollobuurt, Stadionbuurt, Nieuwe Pijp, Zuid Pijp, Scheldebuurt, IJselbuurt, Rijnbuurt, Willemspark, Schinkelbuurt, Hoofddorppleinbuurt, Prinses Irenebuurt or Buitenveldert-West. They are named and given no numbers.',
      'Anything the Amsterdam city page owns, including the doorstroomtoets rates, the international school addresses and the 2055 district projections.'
    ]
  }
};
