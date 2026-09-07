'use strict';
// Breda: the Nassau city, third of Noord-Brabant, and the one whose claim to
// ninth place in the country is contested by Nijmegen. Spine: the gap that
// separates ninth from tenth is 333 people, and two sources disagree by up to
// 402 about a single city on a single date. A difference smaller than the
// disagreement between your sources is not a difference.

module.exports = {
  slug: 'coding-classes-in-breda',
  code: 'brd',
  accent: '#5D457B',
  accentRationale: 'Breda: a muted Nassau violet, set by the solver at a safe distance from Utrecht province\'s plum and Zeeland\'s mussel violet',
  pageType: 'city',
  place: {
    name: 'Breda',
    eyebrow: 'Breda, Noord-Brabant',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Noord-Brabant' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Breda, Netherlands',
  title: 'Coding Classes in Breda | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Breda for ages 6 to 67, from Prinsenbeek to Bavel and Ulvenhout. First lesson free, then one flat monthly fee.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in Breda, the Nassau city, built on a ninth place that two sources disagree about by less than they disagree about anything.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'full-stack-web-development-masterclass-college',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Breda Learners',
    description: 'Ability-placed online coding, Python, web development, AI and mathematics for children, teenagers and adults in Breda, Prinsenbeek, Teteringen, Bavel and Ulvenhout, taught in English.'
  },

  h1: 'Coding classes in Breda, the ninth city of the Netherlands by a margin narrower than the error bar',
  capsuleQ: 'What are the best coding classes in Breda?',
  capsule: 'Coding classes in Breda serve a municipality of 190,204 people (Statistics Netherlands, 1 January 2026), the third of Noord-Brabant after Eindhoven and Tilburg. Its own encyclopaedia entry calls it the ninth municipality of the Netherlands; Nijmegen\'s entry calls Nijmegen the ninth city, and on the same date the two are 333 people apart. Two published sources disagree by as much as 402 about a single city on a single day, so the ninth place is not something the data can settle. Modern Age Coders teaches live online in English across the whole municipality, ages 6 to 67, first lesson free, then USD 100 a month in a group of five to ten or USD 150 one-to-one.',
  lead: 'Breda and Nijmegen both claim ninth place in the country, and the honest answer is that neither claim is supported. On 1 January 2026 the national figures put Breda at 190,204 and Nijmegen at 189,871, a gap of 333 people. On the same date two published sources give Groningen as 244,427 and 244,829, a gap of 402. When the distance between two ranks is smaller than the distance between two sources describing one city, the ranking is noise wearing a number. A child who can measure that is harder to sell things to.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Breda.',

  picks: {
    eyebrow: 'Course picks for Breda',
    h2: 'Four courses for a city of soldiers, students and screen-makers',
    intro: 'A groep 5 child in Teteringen who has run out of things to build in Minecraft, a teenager in Prinsenbeek who wants a game rather than a mod, a student at one of the city\'s applied colleges who needs the whole stack, and a working parent in Bavel who has been handed an AI tool and no training: four doors into one city.',
    items: [
      { course: 'minecraft-coding-for-kids-course', band: 'Ages 8 to 12', note: 'Real code inside the world the groep 5 to 8 child already knows, in English, from Ulvenhout to the Haagse Beemden.' },
      { course: 'complete-game-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'Unity and C sharp to a game that ships, for the teenager whose school offers art or computing but never both together.' },
      { course: 'full-stack-web-development-masterclass-college', band: 'College and adult', note: 'React, Node and a live deployment, for the student at an applied university who wants a portfolio rather than a transcript.' },
      { course: 'ai-tools-mastery-complete-college', band: 'Adults', note: 'ChatGPT, Claude and automation with judgement attached, for the parent whose employer rolled the tools out and skipped the training.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Breda today',
      h2: 'Third in the province, ninth or tenth in the country, and older than its paperwork',
      intro: 'The national register held 190,204 people in the municipality on 1 January 2026, in 92,225 households averaging 2.02 people, on 125.69 square kilometres of land inside 128.68 of territory: 1,502 residents to the square kilometre. In 1995 the figure was 157,659, so Breda has gained 32,545 people in thirty-one years, a rise of 21 percent.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'An ordinary age shape, which is the point', p: '26,891 residents are under fifteen and 25,888 are between fifteen and twenty-five; 51,685 are between twenty-five and forty-five and 37,651 are sixty-five or over, a fifth of the city. Forty-four percent of households hold one person. Breda is neither a student city nor a retirement town, and this page is written for the whole span rather than one end.' },
          { h3: 'The schools', p: '44 primary establishments teach 16,017 pupils and 19 secondary establishments teach 13,958, an unusually close pair for a Dutch city and a sign of how far the secondary schools reach beyond the municipal boundary. The municipality counts 20,798 students in higher education across its applied colleges.' },
          { h3: 'The Nassau city', p: 'Breda was the seat of the Barony of Breda from 1403 and is the Nassau city above all others; Baron of Breda has been among the royal titles since 1815. Seventeen members of the family are buried in the Prinsenkapel of the Grote Kerk, whose tower stands at 97.2 metres.' }
        ] },
        { kind: 'spec', title: 'City rights that never quite happened on a Tuesday', p: 'In 1252 Breda bought privileges from Henry the Fourth of Schoten, and its own encyclopaedia entry treats the acquisition of city rights as gradual rather than as a single grant. The Koninklijke Militaire Academie, the country\'s military academy, was founded in the city in 1828 and is still there, which is why Breda has a garrison\'s memory as well as a court\'s.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'One city, five villages, and two districts that were villages until 1942',
      intro: 'The municipality is the city plus a ring of named places, some absorbed within living memory. The national statistics office divides the whole into 11 wijken and 56 buurten, and about 150,000 of the municipality\'s people live in the main town by its own entry\'s estimate for 30 September 2025.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The city itself', p: 'Roughly 150,000 of the municipality\'s residents live in the town of Breda by the encyclopaedia entry\'s own round figure, which it gives as an approximation and this page repeats as one. The centre, the Grote Kerk, the castle that holds the military academy and the station on the line to Antwerp.' },
          { h3: 'Ginneken and Princenhage', p: 'Two villages with their own histories, absorbed into Breda in 1942 and now districts of it. Families there still name the village before the city, and the primary schools carry the older names.' },
          { h3: 'Prinsenbeek', p: 'North-west of the city across the motorway, a village of its own with its own schools and its own centre, and the sort of place where an evening class means a drive unless it arrives through the router.' },
          { h3: 'Teteringen', p: 'North-east, between Breda and Oosterhout, close enough to the city for secondary school and far enough to feel separate on a wet weeknight.' },
          { h3: 'Bavel and Ulvenhout', p: 'South-east and south, on the edge of the woods towards the Belgian border. Village primary schools, a bus to the city for secondary, and the same weekly hour as everyone else on this page.' },
          { h3: 'Effen and the rest', p: 'The smaller places west and south-west of the city. Eleven wijken and 56 buurten cover all of it in the statistical division, and none of those boundaries has ever decided which group a learner joins.' }
        ] },
        { kind: 'p', text: 'The lesson reaches every one of them at one hour, and placement is settled by what the learner can already do.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure and its office, and the disagreements kept in plain sight',
      intro: 'The national count, the encyclopaedia entries, the church, the academy, and the six pairs of numbers that make the project below possible.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands, provisional, 1 January 2026: 190,204 residents; 92,225 households averaging 2.02 people, 40,548 of them single-person, 44 percent; 26,891 under fifteen; 25,888 aged fifteen to twenty-five; 51,685 aged twenty-five to forty-five; 37,651 aged sixty-five and over; 44 primary establishments with 16,017 pupils and 19 secondary with 13,958; 20,798 in higher education; total area 12,868 hectares, land 12,569; density 1,502; 11 wijken and 56 buurten; 157,659 residents in 1995, a rise of 32,545.' },
          { h3: 'The city, described', p: 'Breda\'s own entry: 128.7 square kilometres, matching the national figure; about 190,000 residents at 30 September 2025 with roughly 150,000 of them in the main town; the third municipality of Noord-Brabant and the ninth of the Netherlands; mayor Paul Depla since 2015; villages Bavel, Effen, Prinsenbeek, Teteringen and Ulvenhout, with Ginneken and Princenhage absorbed in 1942; privileges bought from Henry the Fourth of Schoten in 1252, with city status treated as gradual.' },
          { h3: 'The competing ninth place', p: 'Nijmegen\'s entry calls Nijmegen the ninth city of the Netherlands and the largest municipality of Gelderland. Breda\'s entry calls Breda the ninth municipality of the Netherlands. One says stad and the other says gemeente, which is part of the explanation and not all of it, because on 1 January 2026 the two are 333 people apart.' },
          { h3: 'Six pairs, one date', p: 'For 1 January 2026 the national statistics site and the encyclopaedia give: Groningen 244,427 and 244,829, a difference of 402; Arnhem 171,822 and 172,002, a difference of 180; Haarlem 168,898 and 168,946, 48; Nijmegen 189,871 and 189,850, 21; Haarlemmermeer 166,978 and 166,996, 18; Apeldoorn 169,212 and 169,222, 10. Every pair describes one municipality on one day.' },
          { h3: 'The Grote Kerk', p: 'Present church begun 1410 and finished 1547; the tower built between 1468 and 1509 and standing at 97.2 metres, given as 97 in the same entry\'s summary; a national monument since 16 March 1966; seventeen members of the Nassau family buried in the Prinsenkapel; nave length 77.3 metres, transept width 37.7, vault height 22.5; seating for 1,100; a Flentrop organ of 1969 with four manuals and a Strümphler choir organ of 1778.' },
          { h3: 'The academy', p: 'The Koninklijke Militaire Academie, founded 1828 and seated in Breda. The page names it and claims nothing about its size, its intake or its curriculum, none of which was read at source.' }
        ] },
        { kind: 'p', text: 'No connection exists or is implied between Modern Age Coders and the municipality, the academy, the church or any school named here. They are on the page because a page that claims Breda should be able to show where its numbers come from and where they fail to agree.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Ninth or tenth: build the program that measures the ranking against the noise',
      intro: 'Six cities, twelve published figures, one date, and a league table whose top boundary turns out to sit inside the width of its own error.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Measure the disagreement', p: 'For each city the learner subtracts one source\'s figure from the other\'s for the same date: 402 for Groningen, 180 for Arnhem, 48 for Haarlem, 21 for Nijmegen, 18 for Haarlemmermeer, 10 for Apeldoorn. Nobody moved house between the two numbers. This spread is the measurement noise, and it is now a quantity rather than a feeling.' },
          { h3: '2. Measure the gaps between ranks', p: 'Then the distance between neighbouring cities in the ranking: Breda to Nijmegen is 333, Apeldoorn to Haarlem is 314, Haarlem to Haarlemmermeer is 1,920, Nijmegen to Arnhem is 18,049. Two of those gaps are of the same order as the noise measured in step one and two are far larger.' },
          { h3: '3. Report ties where the data cannot separate', p: 'The rule the learner writes: if the gap between two entries is smaller than the largest same-date disagreement observed between sources, print them as tied rather than ranked. Breda and Nijmegen tie. Apeldoorn and Haarlem tie. Arnhem stands clear of both groups, and so does the pair above it.' }
        ] },
        { kind: 'table', caption: 'Six municipalities on 1 January 2026: two sources, one date, and what the gap is worth', head: ['Municipality', 'National statistics site', 'Encyclopaedia entry', 'They disagree by', 'Gap to the next city below'], rows: [
          ['Breda', '190,204', 'about 190,000 at 30 September 2025', 'not comparable, different date', '333'],
          ['Nijmegen', '189,871', '189,850', '21', '18,049'],
          ['Arnhem', '171,822', '172,002', '180', '2,610'],
          ['Apeldoorn', '169,212', '169,222', '10', '314'],
          ['Haarlem', '168,898', '168,946', '48', '1,920'],
          ['Haarlemmermeer', '166,978', '166,996', '18', 'not computed here']
        ] },
        { kind: 'callout', h3: 'A difference smaller than your disagreement is not a difference', p: 'Every published count carries a width: registers are revised, dates are drawn differently, and two careful sources describing one municipality on one morning can be four hundred people apart. A ranking hides that width completely, because a rank is a whole number and looks exact. The discipline is to measure the width first, from the data itself where possible, and then to refuse any ordering that the width would overturn. Breda may well be ninth. The point is that these figures cannot show it, and that a page claiming so is claiming more than it has. This differs from the older lesson that ranks flatten unequal gaps: there the gaps were real and the ranking concealed their size, and here the gap is smaller than the uncertainty, so the ranking is not determined at all. The table was built before this paragraph was written, from the twelve published figures and nothing else.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any league table, scoreboard or top ten',
      intro: 'School rankings, hospital rankings, best-place-to-live lists, sales leaderboards, model benchmark scores: all of them turn measurements into whole-numbered positions, and all of them lose the width doing it. Practised on the city the learner comes from.',
      body: [
        { kind: 'table', caption: 'When positions are printed but uncertainty is not', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Find a second source', 'Get an independent figure for the same thing on the same date', 'One number treated as exact', 'A measured width instead of a guessed one'],
          ['Quantify the width', 'Take the spread across sources as the working uncertainty', 'A 333-person gap read as decisive', 'A threshold you can apply'],
          ['Compare gap with width', 'Only rank two entries when the gap exceeds the width', 'Ninth place asserted from noise', 'Rankings that survive a revision'],
          ['Print ties', 'Where the data cannot separate, say so instead of choosing', 'A false precision nobody can audit', 'An honest table'],
          ['Watch the wording', 'Check that both sources are counting the same object, city or municipality', 'A stad compared with a gemeente', 'A comparison that is about the world']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Two children measure the same five friends\' heights with the same tape, write the results separately, and compare. The lists differ by a centimetre here and there. Then they rank the friends and find that two of the positions depend on whose tape reading you use. No screen, ten minutes, and the whole idea has landed.' },
          { h3: 'For teenagers', p: 'The twelve figures in Python, a function that returns the ranking, a function that returns the maximum same-date disagreement, and a printer that groups entries whose gaps fall inside it. Then the stretch: simulate a hundred plausible revisions of each figure inside the observed width and count how often Breda comes out ninth.' },
          { h3: 'For adults', p: 'The same treatment on a leaderboard from work: regional sales, response times, satisfaction scores, supplier ratings. Adults usually find that the top three are separated by less than the month-to-month variation, and that somebody is being congratulated or reprimanded for noise.' }
        ] },
        { kind: 'p', text: 'The resident counts, household counts, areas, school figures, the church measurements and the academy date come from the offices and entries named beside them. The differences, the gaps and the tie rule are this page\'s arithmetic on those published figures, and every one of them can be reproduced from the table above.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From two tape measures to a ranking that reports its own ties',
    intro: 'The starting point comes out of the free hour, and no part of it depends on the address.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Two measurements, one friend', p: 'Children measure the same thing twice and find the two answers are not identical.', courses: ['kids-coding-blocks-masterclass', 'minecraft-coding-for-kids-course'] },
      { band: 'Ages 11 to 13', h3: 'Sorting, and what sorting hides', p: 'Learners write a sort, then compare the gaps between neighbours with the spread in the data.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Uncertainty as a number', p: 'Teenagers compute the width from real pairs and print ties where the width swallows the gap.', courses: ['complete-game-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Leaderboards at work', p: 'Adults test whether the top of a table at work survives the variation already in it.', courses: ['full-stack-web-development-masterclass-college', 'ai-tools-mastery-complete-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an AI whether Breda is the ninth city of the Netherlands and it will answer. Why should a child here learn to distrust the answer?',
    intro: 'Because a confident yes and a confident no are both available in the sources, and neither is warranted by the numbers underneath them.',
    p1: 'The model has read Breda\'s entry, which says ninth municipality, and Nijmegen\'s, which says ninth city, and it will give whichever fits the phrasing of the question. What it will not do on its own account is fetch the two figures, notice that they are 333 apart, fetch a second source for a different city, notice that the same pair of sources can differ by 402 about one place on one day, and conclude that the question has no answer at this precision. That chain is what a person builds after doing the subtraction once.',
    p2: 'Which is why the learner still writes it. Asked directly, the tool will happily explain measurement uncertainty and even produce the tie-reporting function. The thing it does not supply is the impulse to ask how wide the number is before using it, and that impulse is what separates a person who can be sold a league table from a person who cannot. A fourteen-year-old in Teteringen who has watched ninth place dissolve will ask for the error bar behind a school ranking at eighteen and behind a model benchmark at twenty-eight. The tools will be unrecognisable by then; the habit will not.',
    closer: 'So the case for a Breda child learning to code in 2026 has nothing to do with becoming a statistician. It is that every number a person is shown has a width, that the width is usually recoverable with a second source and a subtraction, and that a child who has done it once on their own city will do it for the rest of their life without being asked.',
    blogAnchor: 'the fuller argument for teaching a child to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a city with five villages hanging off it',
    intro: 'Prinsenbeek is over the motorway, Bavel and Ulvenhout are out towards the woods, and Teteringen is on the Oosterhout side. Each of them is a car journey the lesson removes.',
    cells: [
      { h3: 'Nothing to drive to', p: 'Class happens at the kitchen table in Prinsenbeek, Bavel or the Haagse Beemden at the same hour every week, in February as easily as in June.' },
      { h3: 'Taught in English, school words left in Dutch', p: 'Instruction is English throughout. Where the child\'s school says groep, havo, vwo or profielkeuze, the teacher says it too, and translates neither way.' },
      { h3: 'The free hour and what it produces', p: 'Work set at the level the learner is genuinely at, a named course that follows from it, and a weekly time. No card details are taken to arrange any of that.' },
      { h3: 'The group follows the level', p: 'Two learners at the same stage work together whether one is in Ulvenhout and the other in the centre; two at different stages do not, however close they live.' },
      { h3: 'Two lessons a week on the southern calendar', p: 'Usually eight lessons a month at one fixed slot. Breda\'s school year runs on regio Zuid with the rest of Brabant, Limburg and Zeeland, and holiday weeks go into the schedule before the slot is fixed.' },
      { h3: 'The teacher is ahead by three and a half hours, or four and a half', p: 'Dutch clocks shift twice a year and Indian ones never do, so the gap changes with the season. The usable window runs from the end of the school day into mid-evening, and across both weekend days.' }
    ],
    spec: { title: 'A garrison town that has had to reinvent itself before', p: 'Breda has been a court, a fortress, a garrison and a commuter city in turn, and the families here are used to the idea that the work changes. A weekly hour at home is the cheapest way to find out whether a child takes to the kind of work that is still being invented.' }
  },

  fees: {
    h2: 'What it costs, in dollars, for every address in the municipality',
    intro: 'Set out here so that nobody has to ask for it.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One international rate applies, quoted in dollars, with no separate euro list, so a family in Effen sees exactly what a family in the centre sees. Money is only exchanged once the free lesson has produced a course and a timetable, and it goes over WhatsApp. Pauses, plan changes and missed weeks are described on the pricing page.'
  },

  reviewsH2: 'Six families, quoted from Google exactly as they wrote it',

  book: {
    h2: 'Send the level. The postcode can wait.',
    intro: 'Depending on the learner, the first thing on screen might be two tape measures and five friends, twelve population figures in Python, or a sales leaderboard from work whose top three sit inside the monthly variation.',
    success: 'Thank you. Your Breda class request has been sent.'
  },

  faq: {
    h2: 'Breda coding class questions',
    intro: 'The city, its villages, its ranking, the teaching and the terms.',
    items: [
      { q: 'Is Breda really the ninth city of the Netherlands?', a: 'Its own encyclopaedia entry says ninth municipality; Nijmegen\'s says Nijmegen is the ninth city. On 1 January 2026 the national figures put them 333 people apart, and the same pair of sources can differ by 402 about a single municipality on a single date. Part of the difference is that one entry counts a stad and the other a gemeente, and the rest is that the gap is inside the noise. Measuring that is the project on this page.' },
      { q: 'Does this page cover the city or the municipality?', a: 'The municipality: 190,204 people on 1 January 2026, including Prinsenbeek, Teteringen, Bavel, Ulvenhout and Effen. About 150,000 of them live in the town of Breda itself by its entry\'s own approximation, which the page repeats as an approximation and never uses in arithmetic.' },
      { q: 'We live in Prinsenbeek or Ulvenhout. Is the class different out there?', a: 'It is the same class at the same hour. A learner in Bavel and one in the city centre share a group when they are at the same stage, and the drive that would separate them for an in-person class simply never happens.' },
      { q: 'Is any of this taught in Dutch?', a: 'No. Lessons run in English from beginning to end. School vocabulary stays Dutch, so groep, havo, vwo and profielkeuze are spoken as the child already hears them, but there is no Dutch-language version of the course.' },
      { q: 'What time are classes for a family in Breda?', a: 'Under Dutch summer time the teacher is three and a half hours ahead; under winter time, four and a half, because Indian clocks never move. The workable window runs from the end of school to mid-evening, plus Saturday and Sunday. The slot is chosen once, in the free lesson, and then it stays.' },
      { q: 'How old is Breda?', a: 'Older than any single date can carry. It bought privileges from Henry the Fourth of Schoten in 1252 and its entry treats the acquisition of city rights as gradual rather than as one grant. It was the seat of the Barony from 1403, and the military academy arrived in 1828.' },
      { q: 'What is in the free lesson?', a: 'The teacher finds the edge of what the learner can do and sets one task exactly there. A child measures the same friends twice with the same tape. A teenager writes the ranking and the tie rule. An adult brings a leaderboard from work. The hour ends with a course, a starting rung, a weekly time and the fee in dollars, and nothing has been charged.' },
      { q: 'Is there a Modern Age Coders classroom in Breda?', a: 'No, and none is claimed near the Grote Kerk, in Prinsenbeek or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Breda coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Breda group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or neighbourhood. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'East along the A58, and up to the country',
    html: 'Breda sits in <a class="cg-inline-link" href="/coding-classes-in-noord-brabant">Noord-Brabant</a>, whose page counts the rings around a garden in Baarle; east along the A58 are <a class="cg-inline-link" href="/coding-classes-in-tilburg">Tilburg</a> and then <a class="cg-inline-link" href="/coding-classes-in-eindhoven">Eindhoven</a>. The <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a> is the root of the whole set, and anyone whose goal is a model that learns rather than a program that runs should start at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or at the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-noord-brabant', label: 'Noord-Brabant' },
    { href: '/coding-classes-in-tilburg', label: 'Tilburg' }
  ],

  personalityCss: `
.cg-root.cg-brd .cg-hero-grid { align-items: center; gap: clamp(1.8rem, 4.2vw, 3.4rem); }
.cg-root.cg-brd .cg-hero h1 { font-weight: 500; letter-spacing: -0.008em; line-height: 1.13; }
.cg-root.cg-brd .cg-capsule { border-left-width: 6px; border-left-style: solid; padding-left: 1.35rem; }
.cg-root.cg-brd .cg-eyebrow { letter-spacing: 0.12em; font-weight: 600; }
.cg-root.cg-brd .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-brd .cg-grid-3 { gap: clamp(1.2rem, 2.4vw, 1.9rem) clamp(1.4rem, 3vw, 2.2rem); }
.cg-root.cg-brd .cg-ladder-col { border-top: 4px solid var(--cg-accent-soft); padding-top: 1.05rem; }
.cg-root.cg-brd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-brd .cg-callout { border-left-width: 4px; border-left-style: double; }
`,

  dossier: {
    curriculumAuthority: 'City and municipality of Breda, Noord-Brabant: 190,204 residents (CBS 1 January 2026), third of the province and ninth or tenth of the country depending on the source; 44 primary establishments (16,017 pupils) and 19 secondary (13,958); 20,798 in higher education. Villages Prinsenbeek, Teteringen, Bavel, Ulvenhout, Effen; Ginneken and Princenhage absorbed 1942. Seat of the Barony from 1403; KMA founded 1828. Regio Zuid holidays. The city page argues from ranking uncertainty; the province page owns Baarle and the hub owns the national curriculum.',
    localProject: 'A difference smaller than the disagreement between your sources is not a difference (rank stability under measurement uncertainty). On 1 January 2026 the national site and the encyclopaedia give, for one municipality on one date: Groningen 244,427 and 244,829 (402 apart), Arnhem 171,822 and 172,002 (180), Haarlem 168,898 and 168,946 (48), Nijmegen 189,871 and 189,850 (21), Haarlemmermeer 166,978 and 166,996 (18), Apeldoorn 169,212 and 169,222 (10). Breda 190,204 leads Nijmegen 189,871 by 333, and Apeldoorn leads Haarlem by 314, both inside the largest observed source disagreement, so the learner prints ties. Breda claims the ninth municipality and Nijmegen the ninth city. Distinct from the rank-versus-distance trap (Noord-Holland: equal rank steps hiding unequal real gaps) because there the gaps were real and here the ordering is undetermined; distinct from the unit-of-observation trap (Zeeland) because the wording difference is named as only part of the explanation. Computed before writing from twelve published figures.',
    requiredMentions: [
      '190,204',
      '92,225',
      '189,871',
      '157,659',
      '16,017',
      '13,958',
      '20,798',
      'Prinsenbeek',
      'Teteringen',
      'Ulvenhout',
      'Princenhage',
      'Paul Depla',
      '97.2 metres',
      '1828'
    ],
    sources: [
      { claim: 'Municipality of Breda 190,204 residents on 1 January 2026 (CBS provisional); 92,225 households averaging 2.02, 40,548 single-person (44 percent); 26,891 under 15; 25,888 aged 15 to 25; 51,685 aged 25 to 45; 37,651 aged 65 and over; 44 primary establishments (16,017 pupils); 19 secondary (13,958); 20,798 in higher education; total area 12,868 ha, land 12,569 ha; density 1,502; 11 wijken and 56 buurten; 157,659 in 1995, a rise of 32,545 (21 percent).', url: 'https://allecijfers.nl/gemeente/breda/' },
      { claim: 'Breda: area 128.7 km2; about 190,000 residents at 30 September 2025 (CBS), of whom roughly 150,000 in the main town; the third municipality of Noord-Brabant and the ninth of the Netherlands; villages Bavel, Effen, Prinsenbeek, Teteringen, Ulvenhout, with Ginneken and Princenhage absorbed in 1942; in 1252 Breda bought privileges from Henry the Fourth of Schoten, city status treated as gradual; seat of the Barony of Breda from 1403; Baron van Breda among royal titles since 1815; Koninklijke Militaire Academie founded 1828; mayor Paul Depla (PvdA) since 2015.', url: 'https://nl.wikipedia.org/wiki/Breda' },
      { claim: 'Nijmegen 189,871 residents on 1 January 2026 (CBS provisional) per the national statistics site, and 189,850 on the same date per its encyclopaedia entry, which calls Nijmegen the ninth city of the Netherlands and the largest municipality of Gelderland.', url: 'https://nl.wikipedia.org/wiki/Nijmegen' },
      { claim: 'Same-date pairs for 1 January 2026 between the national statistics site and the encyclopaedia: Groningen 244,427 and 244,829; Arnhem 171,822 and 172,002; Haarlem 168,898 and 168,946; Haarlemmermeer 166,978 and 166,996; Apeldoorn 169,212 and 169,222.', url: 'https://allecijfers.nl/gemeente/arnhem/' },
      { claim: 'Grote of Onze-Lieve-Vrouwekerk, Breda: present church begun 1410 and completed 1547; tower built 1468 to 1509, height 97.2 metres, also given as 97; national monument since 16 March 1966; seventeen members of the Nassau family buried in the Prinsenkapel; length 77.3 m, transept width 37.7 m, vault height 22.5 m; seating 1,100; Flentrop organ of 1969 with four manuals and a Strümphler choir organ of 1778.', url: 'https://nl.wikipedia.org/wiki/Grote_of_Onze-Lieve-Vrouwekerk_(Breda)' },
      { claim: 'School holiday regions: regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'A verdict on whether Breda or Nijmegen is the ninth. The page states that the figures cannot settle it and leaves it open.',
      'A land and water split for Breda. The encyclopaedia infobox gives only a total of 128.7 km2; the land figure used is the national one.',
      'Any use of the 188,078 figure dated 31 January 2023 or the roughly 150,000 town estimate in arithmetic. Both are quoted as what they are and neither enters a calculation.',
      'Anything about the military academy beyond its founding year and its seat, none of which was researched.',
      'Anything the Noord-Brabant page owns: the Baarle enclaves, the 56 municipalities, the capital-versus-largest contrast. Anything the Tilburg page owns: the wijk and buurt zoning comparison.'
    ]
  }
};
