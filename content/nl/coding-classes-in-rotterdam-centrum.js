'use strict';
// Rotterdam Centrum: 42,924 residents on 413 hectares of land, the smallest
// of the fourteen gebieden and the one everybody else uses.
// Spine: a boundary truncates the neighbourhood. Measure what is near people
// inside a small area and you undercount for almost all of them, and the
// undercount is geometry rather than provision.

module.exports = {
  slug: 'coding-classes-in-rotterdam-centrum',
  code: 'rtc',
  accent: '#0D4833',
  accentRationale: 'Rotterdam Centrum: a deep dock green off the Maas water and the post-war planting, chosen as the best-separated tone left in the cluster and clear of every page this one links to',
  pageType: 'district',
  place: {
    name: 'Rotterdam Centrum',
    eyebrow: 'Centrum, Rotterdam',
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
  routeLabel: 'Rotterdam Centrum, Netherlands',
  title: 'Coding Classes in Rotterdam Centrum | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Rotterdam Centrum for ages 6 to 67, from the Stadsdriehoek to Dijkzigt. The first lesson costs nothing.',
  ogDescription: 'Live online coding, Python and AI for families in Rotterdam Centrum, a district so small that three quarters of it is within five hundred metres of somewhere else.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '9 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Rotterdam Centrum Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the six buurten of Rotterdam Centrum, taught in English.'
  },

  h1: 'Coding classes in Rotterdam Centrum, a district where three quarters of the ground is within five hundred metres of somewhere else',
  capsuleQ: 'What are the best coding classes in Rotterdam Centrum?',
  capsule: 'Coding classes in Rotterdam Centrum reach 42,924 residents (1 January 2026) on 413 hectares of land, the smallest of the fourteen gebieden, in 25,035 households of which 15,290 hold one person. Six primary establishments here teach 1,989 pupils and four secondary ones teach 1,622, in a district holding 3,130 residents under fifteen. None of those figures answers the question anybody wants answered, because a school catchment is not district-shaped and this district is small enough that almost everyone in it lives near an edge. Modern Age Coders teaches live online in English across all six buurten, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Rotterdam Centrum covers 413 hectares of land, which is 4.13 square kilometres. Lay that out as a square and its sides are about two kilometres, so a person standing anywhere in it is on average a few minutes from a district that is not this one. Count what is near residents by counting only what falls inside the boundary and you will undercount for nearly all of them, not because the centre is badly served but because it is small. The same count in a district four times the size undercounts far less. Half of what separates those two numbers is geometry.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Rotterdam Centrum.',

  picks: {
    eyebrow: 'Course picks for Rotterdam Centrum',
    h2: 'Four courses for the densest four square kilometres in the city',
    intro: 'A groep 5 child in the Oude Westen who has finished every game in the house, a teenager off the Coolsingel who wants to see what a model does rather than what it says, a student near Dijkzigt who needs Python to be automatic, and an adult in the Stadsdriehoek who has to defend a figure in a meeting every month: four doors, and the first hour of each is free.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Real typed Python, drawings that take instructions and a first program that works out a rule, taught in English to the groep 5 to 8 child in any of the six buurten.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'A model trained, tested and deliberately broken, for the teenager who has used plenty and been shown the inside of none.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python that collects, cleans, checks and reports on its own schedule, for the student or worker doing one job by hand every week.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Cleaning, joining, and knowing what a boundary did to a number before you quote it, for anybody who hands figures to people who act on them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Centrum today',
      h2: 'Forty-three thousand residents, and a city of six hundred thousand using them',
      intro: 'Rotterdam counts 673,804 residents across 22 wijken and 92 buurten. Its centre holds 42,924 of them on 488 hectares, of which 413 are land and 75 are water, at a published 10,191 people to the square kilometre. It is the smallest of the fourteen gebieden by population and the one the rest of the city passes through, and the city page in this series carries the port and the school-choice picture so that this one does not have to.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Six buurten, and very few children', p: 'The centre is divided into the Cs Kwartier, the Stadsdriehoek, Cool, the Oude Westen, Dijkzigt and the Nieuwe Werk. 3,130 of its residents are under fifteen, 7.3 percent, the lowest share on any page in this series so far. 18,750 are between twenty-five and forty-five, 44 percent, and 15,290 of its 25,035 households hold exactly one person, 61 percent.' },
          { h3: 'Rented, and expensive', p: '23,478 dwellings, of which 17,139 are rented, 73 percent, at an average value of 424,000 euro. Average income is 44,500 euro per resident for 2024, which is high for Rotterdam and unsurprising in a district whose population is overwhelmingly of working age.' },
          { h3: 'Schools that are not for the residents', p: 'Six primary establishments here teach 1,989 pupils and four secondary establishments teach 1,622. Those are counts of pupils attending schools inside the boundary, not of children living inside it, and in a district this small the two have very little to do with each other.' }
        ] },
        { kind: 'spec', title: 'Where Rotterdam differs from Amsterdam, for anyone reading both', p: 'The national statistics office publishes Rotterdam at wijk level with the wijken corresponding to the gebieden, so this district has a full statistics row of its own. Amsterdam does not work that way: its stadsdelen are not a publication level at all, which is why the Amsterdam district pages in this series are built from the wijken beneath them instead. One consequence is that a Rotterdam wijk holds about 30,600 people on average and an Amsterdam wijk about 8,500. What that does to any national table with a wijk column is the argument of the Tilburg page and is not repeated here.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'The smallest gebied and the largest, measured the same way',
      intro: 'Prins Alexander is the largest of the fourteen and sits on the north-eastern edge of the city. Setting it beside the centre shows what a boundary does to a number, because the two are described by identical columns and are nothing like the same shape.',
      body: [
        { kind: 'table', caption: 'Rotterdam Centrum and Prins Alexander, in the same columns', head: ['', 'Rotterdam Centrum', 'Prins Alexander', 'What the difference is made of'], rows: [
          ['Residents', '42,924', '97,794', 'the smallest gebied and the largest'],
          ['Land area', '413 hectares', '1,738 hectares', 'four times as much ground'],
          ['People per square kilometre', '10,191', '5,635', 'the centre is nearly twice as dense'],
          ['Residents under fifteen', '3,130, 7.3 percent', '14,585, 15 percent', 'a suburb has children and a centre does not'],
          ['Primary establishments, and pupils', '6, teaching 1,989', '28, teaching 8,108', '332 pupils each against 290'],
          ['Secondary establishments, and pupils', '4, teaching 1,622', '9, teaching 5,860', '406 pupils each against 651'],
          ['Households, and average size', '25,035 at 1.6', '48,260 at 2.0', '61 percent single-person against 45'],
          ['Share of the area more than 500 m from an edge', 'about 26 percent', 'about 58 percent', 'geometry, not provision']
        ] },
        { kind: 'p', text: 'That last row is this page modelling each district as a square of its published land area and asking how much of it lies more than five hundred metres inside the boundary. Neither district is a square, and real shapes are more irregular than squares, which makes the edge share larger rather than smaller. The figure is an illustration of a mechanism rather than a measurement of these two places, and it is labelled as one wherever it appears. What it shows is that the centre is mostly edge and the suburb is mostly interior, before anybody has counted a single school.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, its year, and two ratios computed to be wrong',
      intro: 'One city total, two district rows, and a pair of calculations this page performs deliberately in order to show what they are worth.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Rotterdam Centrum', p: '42,924 residents (2026); 25,035 households averaging 1.6 (2025), 15,290 single-person at 61 percent; ages 3,130 under fifteen at 7.3 percent, 7,455 at 17 percent, 18,750 at 44 percent, 8,460 at 20 percent and 5,115 at 12 percent; 488 hectares total, 413 land and 75 water; density 10,191; 23,478 dwellings; average value 424,000 euro; 17,139 rented at 73 percent and 6,339 owned at 27; income 44,500 euro (2024); six buurten; six primary establishments with 1,989 pupils and four secondary with 1,622.' },
          { h3: 'Prins Alexander', p: '97,794 residents (2026); 48,260 households averaging 2.0 (2025), 21,710 single-person at 45 percent; 14,585 residents under fifteen at 15 percent; 1,860 hectares total, 1,738 land and 122 water; density 5,635; 47,041 dwellings; average value 360,000 euro; 26,343 rented at 56 percent and 20,698 owned at 44; income 34,700 euro (2024); eight buurten, among them Ommoord, Zevenkamp and Nesselande; 28 primary establishments with 8,108 pupils and nine secondary with 5,860.' },
          { h3: 'The city', p: 'Rotterdam: 673,804 residents in 2026, 342,340 households in 2025, 22 wijken and 92 buurten. The city page in this series carries the port throughput argument and the secondary-school picture, and neither is repeated here.' },
          { h3: 'Two ratios, computed to show they are worthless', p: 'Divide primary pupils by residents under fifteen and the centre gives 0.64 and Prins Alexander 0.56. Do the same with secondary pupils and you get 0.52 and 0.40. Both calculations divide a count of people attending schools inside a boundary by a count of people living inside it. Those are different populations, the ratio is meaningless in both districts, and it is printed here only because seeing the number makes the objection concrete.' },
          { h3: 'What is not claimed', p: 'This page does not say how well served children in the centre are, because no figure read here answers that. It does not know where the 1,989 primary pupils live, where the district\'s 3,130 children go to school, or how far any of them travel. Catchment data would answer those questions and none was found.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the gebied, the city or any school named here and claims none. The square-equivalent sides of about 2.03 and 4.17 kilometres, the edge shares of about 26 and 58 percent, the pupils-per-establishment figures of 332, 290, 406 and 651 and the two ratios above are all this page computing from published numbers, and every one of them is labelled as arithmetic where it appears.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Most of a small district is edge, and the count does not know it',
      intro: 'A boundary, a radius, and a bias that grows as the area shrinks without anything on the ground changing at all.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Draw the circle, then draw the line', p: 'Ask what is within five hundred metres of a resident and you get a circle. Ask the same question of a dataset organised by district and you get the part of that circle that falls inside the boundary. For somebody in the middle of a large district those are the same thing. For somebody near an edge, most of the circle is missing, and the data has no way to say so.' },
          { h3: '2. Notice that the bias scales with size', p: 'Model the centre as a square of its 413 hectares and its sides are about 2.03 kilometres, so roughly 26 percent of it sits more than five hundred metres from an edge. Do the same for Prins Alexander at 1,738 hectares and the figure is about 58 percent. Same rule, same radius, and more than twice the interior, purely because the second district is bigger.' },
          { h3: '3. Rank the districts and see what you ranked', p: 'Any table of districts ordered by amenities near residents, counted within boundaries, is partly a table ordered by district size and shape. Small districts look badly served and large ones look well served, and a good deal of that ordering would survive even if every district had identical provision on the ground.' }
        ] },
        { kind: 'table', caption: 'The same question, asked four ways', head: ['The question', 'How it gets computed', 'What the boundary does to it', 'A better approach'], rows: [
          ['How many schools are near residents here?', 'count schools inside the district', 'cuts off every school just over the line', 'count within a radius of each resident, ignoring boundaries'],
          ['How many pupils does this district educate?', 'sum enrolment at schools inside it', 'counts pupils who live elsewhere', 'ask for pupil home postcodes, if they exist'],
          ['How many children live here?', 'the resident count, 3,130 under fifteen', 'nothing, this one is fine', 'use it, and do not divide it by the previous row'],
          ['Is the centre well served?', 'a ratio of the first two', 'produces 0.64, which describes nobody', 'accept that the published data does not answer it']
        ] },
        { kind: 'callout', h3: 'A boundary truncates the neighbourhood, and the smaller the area the more of it is edge', p: 'Almost every dataset arrives cut into regions, and almost every question about proximity gets answered inside those cuts because that is how the data is shaped. The trouble is that people and the things they use do not respect the cuts. A resident near a border has half their world in the next region, the count inside the border misses it, and nothing in the output records the omission. What makes this worse than an ordinary inaccuracy is that the size of the error depends on the size of the region. A small region is nearly all edge; a large one is mostly interior. So when you line regions up and compare them on any within-boundary measure of what is nearby, part of what you have measured is how big each region is. The same failure runs through sales territories, hospital trusts, police areas, delivery zones, store catchments, network regions and school districts. In each case the honest fix is to stop letting the boundary define the question: compute proximity from each point outward, in whatever radius the thing actually reaches, and let the results cross the lines the way the people do. When that is impossible because the data only exists per region, the correct output is not a ranked table. It is a note saying that the measure is biased by area size, and that small regions will look worse whether or not they are.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for data that arrives cut into regions',
      intro: 'Sales territories, delivery zones, hospital catchments, store radii, network regions: the boundary was drawn for administration and the question is about distance. Practised on a district that is mostly edge.',
      body: [
        { kind: 'table', caption: 'Asking a distance question of regional data', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Separate the two questions', 'Ask whether you want what is inside the region or what is near the people', 'A proximity question answered by a container', 'Clarity about what the number can mean'],
          ['Measure the edge share', 'Estimate how much of each region lies within the relevant radius of a border', 'Regions compared as though the bias were equal', 'A size for the distortion, per region'],
          ['Compute outward, not inward', 'Where the coordinates exist, measure from each point rather than per region', 'Everything just over the line discarded', 'Numbers that describe people rather than shapes'],
          ['Never rank on a truncated measure', 'If only regional counts exist, refuse the league table', 'Small regions penalised by geometry', 'An honest gap where a ranking would have been'],
          ['Say which population a count is of', 'Distinguish who is inside from who uses the thing', 'Attendance divided by residence', 'Two useful numbers instead of one useless ratio']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Draw a circle around your house on a map of the playground, then draw the line where the playground ends. The children count what is inside both, then count what is really within reach, and discover the two answers differ most for whoever sits closest to the fence.' },
          { h3: 'For teenagers', p: 'The two districts in Python, a function that computes the interior share of a square for a given radius, and a comparison that prints that share beside every per-district count. The stretch: produce the ranked table of districts by schools per child, then write the sentence explaining why the ranking is partly a ranking by area.' },
          { h3: 'For adults', p: 'A real regional measure from work, such as coverage, response time or store proximity. Adults reliably find the regions were drawn for reporting, the question is about distance, and the smallest region has been on an improvement plan for two years.' }
        ] },
        { kind: 'p', text: 'All population, household, age, area, density, dwelling, value, tenure, income, establishment and pupil figures for both districts, and the city totals, come from the national statistics office pages named beside them, with 2026 populations and pupil counts, 2025 household and housing figures and 2024 incomes. The square-equivalent sides, the edge shares of about 26 and 58 percent, the pupils per establishment and the two attendance-over-residence ratios are this page computing from those figures, and the square model is stated as a model rather than as a description of either district.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a circle round your house to a table that refuses to rank on a truncated measure',
    intro: 'The rung is settled in the free hour by what the learner can already do, and never by which of the six buurten the address falls in.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'What is really within reach?', p: 'Children draw a circle, meet a fence, and count twice.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Inside the line, or near the person', p: 'Learners work out which of the two questions a count has actually answered.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Interior share, and rankings that admit it', p: 'Teenagers compute how much of an area is edge and print it beside every regional figure.', courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The smallest region on the improvement plan', p: 'Adults take a regional coverage measure from work and find the geometry inside it.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell you the centre has fewer schools per child. Why should a teenager here learn to ask how big the district is?',
    intro: 'Because part of that answer was decided by where somebody drew a line, and none of it is visible in the numbers.',
    p1: 'Give a model the counts and it will produce a comparison, and the comparison will be about provision: how many schools, how many children, which district comes off worse. Every figure it uses is correct and the arithmetic is sound. What is missing is that one district is 413 hectares and the other 1,738, that the smaller one is mostly within a few minutes of somewhere else, and that a count made inside a boundary discards whatever sits just over it. Nothing in a table of counts carries the shape of the thing being counted.',
    p2: 'So the learner practises asking what the boundary did before asking what the number says, and then builds the version that measures outward from people instead of inward from lines. A fourteen-year-old off the Coolsingel who has worked out why the small district looks badly served will be the person at thirty asking whether the underperforming sales region is underperforming or merely small. Models will keep comparing the columns they are given, fluently and correctly. Noticing what the columns left outside stays a person\'s job.',
    closer: 'The case for a child in Rotterdam Centrum learning to code in 2026 is therefore not about schools. It is that a great deal of working life is spent comparing regions that were drawn for administrative convenience, that any question about distance answered inside those lines is biased by their size, and that a district three quarters of which is within five hundred metres of somewhere else makes the bias impossible to ignore.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes in four square kilometres of city centre',
    intro: 'Nothing in the centre is far from anything. What families here run short of is space and evenings, in flats where 61 percent of households are one person and the rest are fitting a great deal into small rooms.',
    cells: [
      { h3: 'No room to book and nowhere to go', p: 'The lesson happens at the table in the Stadsdriehoek, the Oude Westen or Cool, at one hour that repeats every week, which is the only arrangement that does not need a spare room somewhere else.' },
      { h3: 'English for the lesson, Dutch for the school', p: 'Teaching is in English throughout. Groep, havo, vwo and profielkeuze stay Dutch, because those four are printed on the paperwork a child brings home and an English version would only need turning back.' },
      { h3: 'The first hour is free and settles three things', p: 'A level, found by giving the learner something real to do. A course chosen because that level points at it. A weekly time. Nothing about payment comes up while any of it is happening.' },
      { h3: 'Grouped by stage, drawn from far outside the district', p: 'Five to ten learners at one level. In a district with 3,130 children under fifteen, drawing from further afield is not a preference, it is the only way a specific level fills.' },
      { h3: 'Twice a week, on the regio Midden calendar', p: 'Two lessons weekly at a repeating hour, normally eight in a month. Zuid-Holland takes its school holidays with regio Midden, and the weeks a family will be away are agreed at the start rather than found later.' },
      { h3: 'India is ahead, by three and a half hours or four and a half', p: 'The Dutch clock changes twice a year and the Indian one does not, which is where the whole difference comes from. Late afternoon, early evening and either weekend day work at both settings.' }
    ],
    spec: { title: 'The lowest share of children of any page in this series', p: 'Just 3,130 of the centre\'s 42,924 residents are under fifteen, 7.3 percent, against 15 percent in Prins Alexander and 19 percent in the fullest Amsterdam neighbourhood this series has measured. A child growing up here is in a very small local cohort, and no school or club inside four square kilometres can assemble a group of five to ten at one particular level in one particular subject from it. That is arithmetic rather than any comment on the schools, and it is the reason groups here are formed on ability from across the world, at every age up to sixty-seven.' }
  },

  fees: {
    h2: 'The fee, in dollars, in all six buurten',
    intro: 'On the page rather than saved for a telephone call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One international rate applies and it is quoted in dollars, with no euro edition, so an address in Dijkzigt is charged exactly what one in the Cs Kwartier is. Nothing is paid until the free lesson has settled a course and an hour, and payment is arranged over WhatsApp afterwards. Pausing, switching plan and missing a week are described on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, printed as the people who left them wrote them',

  book: {
    h2: 'Send the level; the buurt is not needed',
    intro: 'The first task might be a circle drawn round a house on a map of a playground, a function that reports how much of an area is edge, or a regional measure from work that has been ranking places by their size for years.',
    success: 'Thank you. Your Rotterdam Centrum class request has been sent.'
  },

  faq: {
    h2: 'Rotterdam Centrum coding class questions',
    intro: 'The district, its six buurten, one boundary problem, the teaching and the terms.',
    items: [
      { q: 'Does the city centre have fewer schools per child than the suburbs?', a: 'That question cannot be answered from the published figures, and the numbers that look as though they answer it do not. Six primary establishments in the centre teach 1,989 pupils and the district has 3,130 residents under fifteen; in Prins Alexander it is 28 establishments, 8,108 pupils and 14,585 children. Dividing one by the other gives 0.64 and 0.56, but those divide people attending schools inside a boundary by people living inside it, which are different populations. No catchment data was found, so this page does not pretend to know.' },
      { q: 'Why does the size of the district matter so much?', a: 'Because a count made inside a boundary throws away whatever sits just outside it, and the smaller the area the more of its residents are near an edge. Modelling the centre as a square of its 413 hectares of land gives sides of about 2.03 kilometres, so only about 26 percent of it lies more than five hundred metres from a border. The same calculation for Prins Alexander at 1,738 hectares gives about 58 percent. That is a fact about shape, not about schools, and it biases any within-boundary measure of what is nearby.' },
      { q: 'Which neighbourhoods make up Rotterdam Centrum?', a: 'Six buurten: the Cs Kwartier, the Stadsdriehoek, Cool, the Oude Westen, Dijkzigt and the Nieuwe Werk. Together they hold 42,924 residents on 488 hectares, of which 413 are land and 75 water, at a published density of 10,191 people to the square kilometre, which makes this the densest and the smallest of the fourteen gebieden.' },
      { q: 'Are there really so few children in the centre?', a: '3,130 residents are under fifteen, which is 7.3 percent of the district and the lowest share of any page in this series. 18,750 residents, 44 percent, are between twenty-five and forty-five, and 15,290 of the 25,035 households hold one person. It is a district of working-age adults living mostly alone in rented flats, 17,139 of the 23,478 dwellings being rented.' },
      { q: 'Is the class taught in Dutch?', a: 'No, it runs in English from the first minute. Four Dutch school words are held back from that rule, groep, havo, vwo and profielkeuze, because a child recognises them from their own timetable and an English rendering would only have to be translated back. No course is offered in a Dutch edition.' },
      { q: 'What hours work for a family in the centre?', a: 'The teacher is three and a half hours ahead for part of the year and four and a half for the rest, a difference caused entirely by the Dutch clock changing. In practice that leaves the afternoons after school, the early evenings and the whole of both weekend days. One repeating hour is agreed during the free lesson and then kept.' },
      { q: 'Why look outside the centre for a class at all?', a: 'Because of the arithmetic in the district itself. A group of five to ten learners at one specific level in one specific subject needs a pool, and a district with 3,130 children under fifteen across four square kilometres does not have one, however good its schools are. Groups here are assembled on ability from across the world, which is the only arrangement in which a narrow level actually fills.' },
      { q: 'Is there a Modern Age Coders classroom in Rotterdam Centrum?', a: 'No, and none is claimed in the centre, elsewhere in Rotterdam or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Rotterdam Centrum coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Rotterdam and beyond',
    h2: 'Out to the city, north to Delft, and up to the country',
    html: 'The city page, <a class="cg-inline-link" href="/coding-classes-in-rotterdam">coding classes in Rotterdam</a>, carries the port throughput argument and the map of all fourteen gebieden, and the other district pages follow this one in the series. North up the line are <a class="cg-inline-link" href="/coding-classes-in-delft">Delft</a> and <a class="cg-inline-link" href="/coding-classes-in-the-hague">The Hague</a>, and everything here sits inside <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. The whole series descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner who wants trained models rather than running programs should begin at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Finish this on WhatsApp'
  },

  footerHeading: 'Rotterdam and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-rotterdam', label: 'Rotterdam' },
    { href: '/coding-classes-in-zuid-holland', label: 'Zuid-Holland' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-rtc .cg-hero-grid { align-items: center; gap: clamp(1.5rem, 3.6vw, 2.8rem); }
.cg-root.cg-rtc .cg-hero h1 { font-weight: 500; letter-spacing: -0.0105em; line-height: 1.12; }
.cg-root.cg-rtc .cg-capsule { border-left-width: 6px; border-left-style: solid; border-bottom: 1px solid var(--cg-accent-soft); padding-left: 1.5rem; padding-bottom: 0.8rem; }
.cg-root.cg-rtc .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; }
.cg-root.cg-rtc .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-rtc .cg-grid-3 { gap: clamp(1.1rem, 2.3vw, 1.75rem); }
.cg-root.cg-rtc .cg-card { border-radius: 5px; border-top: 3px solid var(--cg-accent-soft); }
.cg-root.cg-rtc .cg-table th { letter-spacing: 0.05em; }
.cg-root.cg-rtc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rtc .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Gebied Rotterdam Centrum, Zuid-Holland: 42,924 residents (2026) on 488 hectares of which 413 land and 75 water, density 10,191, the smallest of the fourteen gebieden by population and the densest; 25,035 households averaging 1.6 with 15,290 single-person at 61 percent; only 3,130 residents under fifteen, 7.3 percent, the lowest share on any page in this series, against 18,750 aged twenty-five to forty-five; 23,478 dwellings, 17,139 rented at 73 percent, average value 424,000 euro; income 44,500 euro (2024); six buurten, the Cs Kwartier, Stadsdriehoek, Cool, Oude Westen, Dijkzigt and Nieuwe Werk; six primary establishments teaching 1,989 pupils and four secondary teaching 1,622. Rotterdam publishes at wijk level with the wijken corresponding to the gebieden, unlike Amsterdam, so each Rotterdam district page has a full statistics row of its own. Regio Midden holidays. The district page argues from boundary truncation; the Rotterdam city page owns the port units argument and the school-choice picture.',
    localProject: 'A boundary truncates the neighbourhood, and the smaller the area the more of it is edge. Rotterdam Centrum holds 42,924 residents on 413 hectares of land; Prins Alexander holds 97,794 on 1,738. Modelled as squares of their published land areas, their sides are about 2.03 and 4.17 kilometres, so roughly 26 percent of the centre lies more than five hundred metres from a boundary against about 58 percent of Prins Alexander. The square is stated as a model, and real shapes are more irregular, which raises the edge share rather than lowering it. Any count of what is near residents made inside a boundary therefore undercounts far more in a small district, so a table of districts ranked on such a measure is partly a ranking by area. The school figures make it concrete: six primary establishments teaching 1,989 pupils in the centre and 28 teaching 8,108 in Prins Alexander, against 3,130 and 14,585 residents under fifteen. Dividing attendance by residence gives 0.64 and 0.56, and the page computes both deliberately in order to show they describe nobody, since the two counts are of different populations and no catchment data was found. Distinct from the modifiable areal unit problem (Tilburg), which is about how many zones a territory is divided into and what per-zone statistics then measure; here the number of zones is irrelevant and the mechanism is purely geometric truncation at a border whose severity scales with area. Distinct also from the excluded-population denominator (Venlo), where the served population appears in no register: here everybody is registered, merely on the other side of a line.',
    requiredMentions: [
      '42,924',
      '25,035',
      '15,290',
      '23,478',
      '424,000',
      '44,500',
      '10,191',
      '1,989',
      '1,622',
      '3,130',
      '18,750',
      'Stadsdriehoek',
      'Nieuwe Werk',
      'Dijkzigt'
    ],
    sources: [
      { claim: 'Wijk Rotterdam Centrum: 42.924 inwoners (2026); 25,035 huishoudens averaging 1,6 (2025), 15,290 eenpersoonshuishoudens at 61 percent; ages 3,130 (0 to 15, 7.3 percent), 7,455 (15 to 25, 17 percent), 18,750 (25 to 45, 44 percent), 8,460 (45 to 65, 20 percent), 5,115 (65+, 12 percent); 488 hectare total, 413 land en 75 water (2025); bevolkingsdichtheid 10.191 per km2 (2025); woningvoorraad 23.478 (2025); gemiddelde WOZ 424.000 euro (2025); 17,139 huurwoningen (73 percent) and 6,339 koopwoningen (27 percent); gemiddeld inkomen 44.500 euro per inwoner (2024); six buurten: Cs Kwartier, Stadsdriehoek, Cool, Oude Westen, Dijkzigt, Nieuwe Werk; 6 vestigingen basisonderwijs with 1.989 leerlingen and 4 vestigingen voortgezet onderwijs with 1.622 leerlingen (2026).', url: 'https://allecijfers.nl/wijk/rotterdam-centrum-rotterdam/' },
      { claim: 'Wijk Prins Alexander, Rotterdam: 97,794 inwoners (2026); 48,260 huishoudens averaging 2.0 (2025), 21,710 eenpersoonshuishoudens at 45 percent; ages 14,585 (0 to 15, 15 percent), 11,325, 23,860, 25,205 and 22,845 (65+, 23 percent); 1,860 hectare total, 1,738 land, 122 water; bevolkingsdichtheid 5,635 per km2 (2025); woningvoorraad 47,041 (2025); average WOZ 360,000 euro (2025); 26,343 huurwoningen (56 percent) and 20,698 koopwoningen (44 percent); average income 34,700 euro (2024); 8 buurten: Nesselande, Zevenkamp, Ommoord, Oosterflank, Het Lage Land, Prinsenland, s-Gravenland, Kralingseveer; 28 vestigingen basisonderwijs with 8,108 leerlingen and 9 vestigingen voortgezet onderwijs with 5,860 leerlingen (2025).', url: 'https://allecijfers.nl/wijk/prins-alexander-rotterdam/' },
      { claim: 'Rotterdam: 673,804 inwoners (2026); 342,340 huishoudens (2025); 22 wijken en 92 buurten. The site publishes per-wijk pages whose names correspond to the gebieden, at https://allecijfers.nl/wijk/[naam]-rotterdam/.', url: 'https://allecijfers.nl/gemeente/rotterdam/' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any statement about how well served children in the centre are. No catchment data was found, and the published counts of pupils attending and children residing are of different populations.',
      'The ratios of 0.64 and 0.56, or 0.52 and 0.40, offered as meaningful statistics. They are computed on the page expressly to demonstrate that they are not.',
      'The edge shares of 26 and 58 percent presented as measurements of these two districts. They are computed from a square model of each published land area and are labelled as a model wherever they appear.',
      'Any argument about how many zones a city is divided into and what that does to per-zone statistics. That is the Tilburg page.',
      'Figures for the individual buurten of Rotterdam Centrum. Six are named and none was read separately.',
      'Anything the Rotterdam city page owns, including the port throughput in two units, the named secondary schools and their addresses, and the gebied populations it lists.'
    ]
  }
};
