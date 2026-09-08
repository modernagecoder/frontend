'use strict';
// Amsterdam: the city page that hands off to eight district pages. Spine: the
// two judgements every Amsterdam child receives at eleven (the school advice and
// the doorstroomtoets), the rate at which they disagree, and why that rate alone
// cannot tell you which one is off. Reads as a map, never as a district page.

module.exports = {
  slug: 'coding-classes-in-amsterdam',
  code: 'ams',
  accent: '#822A36',
  accentRationale: 'Amsterdam: the red of the city flag, kept apart from the hub orange and the Amstelveen green',
  pageType: 'city',
  place: {
    name: 'Amsterdam',
    eyebrow: 'Amsterdam, Noord-Holland',
    schemaType: 'City',
    chain: [{ type: 'AdministrativeArea', name: 'Noord-Holland' }, { type: 'Country', name: 'Netherlands' }]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Amsterdam, Noord-Holland, Netherlands',
  title: 'Coding Classes in Amsterdam | Modern Age Coders',
  description: 'Live online coding, Python and AI classes for Amsterdam learners aged 6 to 67, read against the school advice, the doorstroomtoets and the April lottery.',
  ogDescription: 'Live online coding, Python, AI and mathematics for Amsterdam families, built on the two judgements every child gets at eleven and the rate at which they disagree.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Amsterdam Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the eight districts of Amsterdam, taught in English.'
  },

  h1: 'Coding classes in Amsterdam, a city that hands every eleven-year-old two verdicts and a lottery number',
  capsuleQ: 'What are the best coding classes in Amsterdam?',
  capsule: 'Coding classes in Amsterdam have to work around a transition no other Dutch city runs quite this way: a school advice in groep 8, a doorstroomtoets that may disagree with it, and in April a central lottery in which 7,674 pupils competed for 9,969 places at 65 schools in 2026, with 73.85 percent getting their first choice. Modern Age Coders teaches coding, Python, AI and mathematics live online, in English, to learners aged 6 to 67 anywhere in the city. The first class is free; then USD 100 a month in a group of five to ten, or USD 150 one to one.',
  lead: 'Nationally about one child in three gets a test result higher than the advice the school gave. In Amsterdam it is one in five. Ask why and you will hear two confident answers that contradict each other. The project on this page is the small program that shows both answers fit the number, which is the beginning of knowing how to read any number at all.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Amsterdam.',

  picks: {
    eyebrow: 'Course picks for Amsterdam',
    h2: 'Four courses for a city with 244 primary schools and 91 secondary ones',
    intro: 'Amsterdam is big enough that no single starting point fits. These four cover the child in a basisschool in Oost, the teenager who just came through the April lottery, the international-school student on the IB, and the parent who works on the Zuidas and wants to build agents rather than prompt them.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Real games in Scratch for a groep 3 to 5 child, in English, three months from nothing to something a friend can play.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'For groep 6 to 8, the years the advice is being formed: Python, turtle art and a first model, without touching the school timetable.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Python and a first machine learning model for the havo or vwo bovenbouw, where wiskunde A and B both meet real data.' },
      { course: 'codex-and-claude-code-ai-coding-agents-course-for-teens', band: 'Ages 13 to 17', note: 'AI coding agents, taught so the teenager still owns the codebase: for the MYP student who already ships small projects.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Amsterdam today',
      h2: 'Two population figures, eight districts, and a city that will pass a million',
      intro: 'Even the headcount has two official answers. The municipal register put Amsterdam at 941,873 residents on 1 January 2026; the national statistics office\'s provisional figure for the same day is 941,927. Fifty-four people apart, both correct by their own definitions, and a good first lesson in asking which office a number came from.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Half a million households, 13 percent under fifteen', p: 'Statistics Netherlands counts 516,096 households and 119,410 residents under fifteen, thirteen percent of the city, with another 123,596 aged fifteen to twenty-five. That is roughly a quarter of a million people of school and student age inside one municipality.' },
          { h3: 'A million by the 2050s, mostly in the east and north', p: 'The city\'s own research office projects growth of about 178,000 to 1,120,000 residents by 2055, with the largest gains in Oost (plus 42,500), Noord (plus 37,200), Zuidoost (plus 33,200) and Nieuw-West (plus 31,300), on the back of 116,000 planned dwellings. Centrum is projected to stay roughly where it is.' },
          { h3: 'Where the 2025 arrivals came from', p: 'The same April 2026 projection names the main countries of origin of people who moved to Amsterdam in 2025: the United States, Italy, Germany, Spain, the United Kingdom, India and Turkey. A coding class taught in English, with the Dutch school words kept, is written for exactly that list.' }
        ] },
        { kind: 'spec', title: '111 wijken, 519 buurten, and this page stops at eight', p: 'The statistics office divides Amsterdam into 111 wijken and 519 buurten. This page works at the level above that, the seven stadsdelen plus the stadsgebied of Weesp, and hands each of them off to its own page in this series rather than pretending one page can be about Osdorp and De Pijp at once.' }
      ]
    },
    {
      id: 'transition', tint: 'tint', eyebrow: 'The transition at eleven',
      h2: 'Advice, test, lottery: what actually happens to an Amsterdam child in groep 8',
      intro: 'Three events in fourteen weeks decide where a child spends the next four to six years. Every one of them produces a number, and this page uses all three.',
      body: [
        { kind: 'align', rows: [
          { code: 'January', req: 'The school gives its advice: vmbo, havo, vwo or one of five double advices. In 2024/25, 28 percent of Amsterdam groep 8 pupils received a vwo advice and 56 percent an advice that included havo or vwo, according to the city research office (9 March 2026).', ours: 'Nothing we teach changes an advice, and we say so. A child who has been building in Scratch or Python since groep 5 arrives at January with something the advice conversation can point to, which is a different thing.' },
          { code: 'February', req: 'The doorstroomtoets, sat nationally between 26 January and 13 February 2026 with results from 3 to 15 March. When the test comes out higher than the advice, the school must reconsider. Nationally that happens for nearly one pupil in three; in Amsterdam for one in five.', ours: 'That gap is the data project below. The learner does not take a side; they build the model that shows why the gap alone cannot tell you which side is right.' },
          { code: 'March to April', req: 'Preference lists of four, six or twelve schools go in from 25 to 31 March, and on 9 April 2026 the Centrale Loting and Matching placed 7,674 pupils across 9,969 places at 65 schools: 73.85 percent at their first choice, 91 percent in their top three, 95.54 percent in their top five (OSVO, 9 April 2026).', ours: 'For the family, the lottery is the week to keep a routine. A recurring online class survives a school change without a timetable clash, because it was never tied to a building.' },
          { code: 'The list length', req: 'In 2025 havo and vwo pupils were asked for nine preferences instead of twelve, and the school boards found that the shorter list affected the placement guarantee. For 2026 it went back to twelve, and reserve lists now stay valid until 30 September.', ours: 'A rule that was changed and changed back within a year is a real dataset about a real trade-off, and teenagers in the class have modelled it: how the guaranteed-placement rate moves as the list shortens.' }
        ] }
      ]
    },
    {
      id: 'districts', tint: '', eyebrow: 'The eight districts',
      h2: 'One city, eight places to live, and the differences a parent actually notices',
      intro: 'Each district gets its own page in this series, written close up. This is the map that shows why they need one, with the figure that distinguishes each.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Zuid', p: '<a class="cg-inline-link" href="/coding-classes-in-amsterdam-zuid">Its page</a> takes apart two registers that disagree by 432 on the Zuidas. 146,395 residents on 1 January 2026 and the two largest international schools in the city: the British School of Amsterdam at Havenstraat 6, in a converted nineteenth-century Huis van Bewaring opened in April 2021 with room for 1,200, and the south campus of the Amsterdam International Community School at Arent Janszoon Ernststraat 1179 since 2022. The Zuidas is here too.' },
          { h3: 'Zuidoost', p: '<a class="cg-inline-link" href="/coding-classes-in-amsterdam-zuidoost">Its page</a> finds cheaper homes and better-off residents in the same district. The district where the test most often came out above the advice: 33 percent of pupils in 2024/25 against a city average of 20. The AICS south-east campus moved to the Sand Castle on the Bijlmerplein in September 2023, and the district is projected to add 33,200 residents by 2055.' },
          { h3: 'Noord', p: 'Now with <a class="cg-inline-link" href="/coding-classes-in-amsterdam-noord">a page of its own</a>, arguing about age bands that outnumber the population. Connected to the centre by the Noord/Zuidlijn since 22 July 2018, 9.7 kilometres and eight stations from Noord to Station Zuid. Second highest share of higher test advice at 30 percent, and projected growth of 37,200, the second largest in the city.' },
          { h3: 'Oost', p: '<a class="cg-inline-link" href="/coding-classes-in-amsterdam-oost">Its page</a> sets two neighbourhoods with the same number of homes against each other. The fastest growing district on paper, plus 42,500 by 2055, and home to Amsterdam Science Park: seventy hectares, about 176 companies, the University of Amsterdam\'s Faculty of Science and the AMS-IX internet exchange, with more than 600 network hubs on one former polder.' },
          { h3: 'West and Nieuw-West', p: '<a class="cg-inline-link" href="/coding-classes-in-amsterdam-west">West has its own page</a>, on a label that outlived the buildings it described. West adds a projected 13,200 and Nieuw-West 31,300, which makes Nieuw-West the largest of the western growth areas, and <a class="cg-inline-link" href="/coding-classes-in-amsterdam-nieuw-west">Nieuw-West now has a page</a> on the difference between a number that was measured and one that was chosen. Between them they hold much of the city\'s primary-school-age population, and the largest share of the 244 basisscholen.' },
          { h3: 'Centrum and Weesp', p: '<a class="cg-inline-link" href="/coding-classes-in-amsterdam-centrum">Centrum</a> is the one district projected to stay roughly stable, and its page argues about a district less crowded than every wijk inside it. Weesp, a separate municipality until 24 March 2022, is now a stadsgebied with its own elected committee, about 20,800 residents at the time of the merger, a fort from 1861 and the Van Houten chocolate history that once made it the cocoa town.' }
        ] },
        { kind: 'p', text: 'The district pages in this series are written under a rule: one paragraph of city context, then only what is true of that district and false of its neighbours. This page carries the city context so that they do not have to.' }
      ]
    },
    {
      id: 'evidence', tint: 'tint', eyebrow: 'Verified local facts',
      h2: 'Amsterdam facts with the office and the date attached',
      intro: 'Every figure this page uses, traced. Two of them disagree with each other, and the page keeps both.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Population, twice', p: 'Municipal register, city research office (15 April 2026): 941,873 on 1 January 2026. Statistics Netherlands, provisional (1 January 2026): 941,927. Households 516,096; under fifteen 119,410; fifteen to twenty-five 123,596. Schools: 244 primary with 63,961 pupils and 91 secondary establishments with 46,608 pupils.' },
          { h3: 'The 2026 lottery', p: 'OSVO press release, 9 April 2026: twelfth Centrale Loting and Matching; 65 schools, 9,969 places, 7,674 pupils; 73.85 percent first choice, 91 percent top three, 95.54 percent top five; lists of four, six or twelve schools by advice; second round result 15 April; reserve lists valid to 30 September.' },
          { h3: 'The advice pattern', p: 'City research office, 9 March 2026, for 2024/25: 28 percent vwo advice; 56 percent havo and/or vwo; a hoger toetsadvies, a test result above the school advice, for about one in five Amsterdam pupils against nearly one in three nationally; highest in Zuidoost at 33 percent and Noord at 30. Maths at target level 47 percent in Amsterdam against 43 nationally.' },
          { h3: 'The metro', p: 'The Noord/Zuidlijn, metro 52, opened to passengers on 22 July 2018 after a final decision to build taken in October 2002: 9.7 kilometres, 7.1 of them underground, eight stations from Noord through Centraal Station, Rokin, Vijzelgracht and De Pijp to Station Zuid.' },
          { h3: 'Two international schools, four addresses', p: 'The British School of Amsterdam, founded 1978, moved to Havenstraat 6 in April 2021, a former prison bought in February 2017; about 1,100 pupils, GCSE and A level, the first British School Overseas accreditation in the country. AICS, founded 2003, part of the public Esprit Scholen group, more than 2,000 pupils across the south campus at Arent Janszoon Ernststraat 1179 and the south-east campus at the Bijlmerplein.' },
          { h3: 'Science Park in numbers', p: 'Seventy hectares, about 176 companies, more than 600 network hubs, the AMS-IX exchange, the University of Amsterdam Faculty of Science, Amsterdam University College and six Matrix Innovation Centre buildings built over three decades with the university, the city and the national research council.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no association with the municipality of Amsterdam, with OSVO, with either international school or with any school or institute named above, and claims none. A page about coding classes in a city should know how the city\'s schools work; that is the only reason they appear.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'One in three nationally, one in five in Amsterdam: build the simulation that shows the gap cannot tell you why',
      intro: 'Two judgements of the same child, a rate at which they disagree, and a program that produces the same rate from opposite causes.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Take the two published rates', p: 'Nationally, nearly one pupil in three receives a doorstroomtoets result above the school advice. In Amsterdam it is about one in five, and 33 percent in Zuidoost against 20 for the city. Both figures are from the city research office, 9 March 2026. Everything else below is a simulation and is labelled as one.' },
          { h3: '2. Write the model', p: 'Each simulated pupil has one true level. The school advice is that level plus a teacher tendency, up or down, plus noise. The test is that level plus test noise. Both are cut into the same bands. The learner counts how often the test band comes out above the advice band, for 300,000 simulated pupils per setting.' },
          { h3: '3. Read the table', p: 'Teachers who sit a fifth of a standard deviation low, with a moderately noisy test, produce 33 percent. Unbiased teachers with a much noisier test produce 31. Unbiased teachers with a precise test produce 21; teachers who sit slightly high produce 19. The national one-third and the Amsterdam one-fifth can each be made from teacher tendency alone or from test noise alone.' }
        ] },
        { kind: 'table', caption: 'Four settings of the simulation, two disagreement rates: the rate does not identify the cause', head: ['Setting', 'Teacher tendency', 'Test noise', 'Share with test above advice'], rows: [
          ['A', 'advises 0.20 sd low', 'moderate (0.45 sd)', '33 percent'],
          ['B', 'none', 'high (0.95 sd)', '31 percent'],
          ['C', 'none', 'low (0.35 sd)', '21 percent'],
          ['D', 'advises 0.08 sd high', 'moderate (0.45 sd)', '19 percent']
        ] },
        { kind: 'callout', h3: 'A disagreement rate is one number about two instruments', p: 'When two measurements of the same thing disagree, the size of the disagreement tells you that at least one of them is off. It cannot tell you which. Amsterdam\'s one in five could mean its teachers advise a little higher than the country\'s, or that its test scores are a little less noisy, or some of each, and the only thing that separates those is a third measurement: where the same children are three years later. The simulation above was run before this paragraph was written; the two published rates are real, and every row of the table is a labelled model.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for reading any figure that compares two judgements',
      intro: 'The same mistake sits inside exam moderation, medical second opinions, code review statistics and A/B tests. Practised here on the Amsterdam numbers first.',
      body: [
        { kind: 'table', caption: 'When two instruments measure one thing', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Name', 'Say which instrument the rate is about, and that it is about both', 'Blaming the teacher, or the test, from a number that cannot assign blame', 'A sentence that is true'],
          ['Simulate', 'Produce the observed rate from at least two different causes', 'The first explanation winning by being first', 'A list of causes that fit'],
          ['Anchor', 'Ask what third measurement would separate the causes', 'An argument that can never end', 'A question the data could answer'],
          ['Band', 'Check whether the cut points are the same for both instruments', 'A disagreement that is really a rounding difference', 'Like compared with like'],
          ['Report', 'Give the rate with its denominator and the year', 'One in five quoted for the wrong cohort', 'A figure someone else can check']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Two people guess the number of sweets in a jar, and the child counts. Then the child is told only how far apart the two guesses were, and asked who was closer. They cannot say, and they work out that they would need the jar. It takes ten minutes and it is the whole project.' },
          { h3: 'For teenagers', p: 'The simulation in Python: a loop over simulated pupils, two noisy readings of one level, both banded, a counter for test above advice. The learner then finds two different parameter settings that both give 20 percent and writes down what extra data would tell them apart.' },
          { h3: 'For adults', p: 'The same model on a code review process, where two reviewers disagree on 20 percent of pull requests, or on a medical screening where the second reader overrules the first. Bring the real disagreement rate from work if it is yours to share, and find out what it can and cannot tell you.' }
        ] },
        { kind: 'p', text: 'The lottery figures, the advice and test shares, both population counts, the school counts, the metro and the two international schools are all published by the offices named in the sentences that use them. The simulation settings and their outputs are a model built in class and are presented as nothing more.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From guessing sweets in a jar to modelling two noisy judgements',
    intro: 'The free class finds the rung, whatever the advice said in January.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Two guesses, one jar', p: 'Children discover that a gap between two guesses says nothing about which guess was right.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Noise you can see', p: 'Learners add random noise to a number in Python and watch how often two readings land in different bands.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Two causes, one rate', p: 'Teenagers build the simulation and find the settings that make the national and city figures.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Inter-rater disagreement at work', p: 'Adults measure reviewer, reader and rater disagreement in their own field and learn what it can support.', courses: ['statistics-probability-maths-course', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Will an Amsterdam teenager who can ask an AI for the answer ever need to build the model themselves?',
    intro: 'Ask an assistant why Amsterdam\'s test-above-advice rate is lower than the country\'s and it will give you a reason. It will give you a different reason if you phrase the question differently.',
    p1: 'An AI asked to explain the one-in-five will explain it. Asked to write a simulation, it will write one, and the simulation will run. What it will not do unprompted is produce the second parameter setting that gives the same rate from the opposite cause, because nobody asked for the thing that undermines the first answer. That second setting is the entire value of the exercise, and it only gets written by someone who knows to want it.',
    p2: 'That is what the class trains and why the code still has to be written by the learner: not the syntax, which the tools now supply, but the habit of asking what else could have produced this number, then building it to check. A fourteen-year-old who has done that once with the doorstroomtoets figures will do it with a marketing dashboard at twenty-four without being told. The models will be different by then. The question will be the same.',
    closer: 'For an Amsterdam parent, then, the case for coding in 2026 is not that the child will write software for a living, though many will. It is that building the second explanation is a skill, it is teachable, and the only known way to teach it is to make the learner build.',
    blogAnchor: 'whether coding is still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a city where the school might change in April',
    intro: 'A recurring lesson that lives on a laptop rather than in a building is the one thing in an Amsterdam child\'s week that the lottery cannot move.',
    cells: [
      { h3: 'Survives the placement', p: 'The class was booked around the family, not the school, so when the 9 April result sends a child across the city in September, the Tuesday slot is still Tuesday.' },
      { h3: 'English, with the Amsterdam words', p: 'Taught in English. Groep, advice, doorstroomtoets, loting, brugklas and profiel are used as the family hears them at school, because that is what the family will ask about.' },
      { h3: 'The first hour is a real lesson', p: 'A task pitched at the learner, a level, a named course and a slot at the end of it. No card, no deposit and no decision before anyone has watched us teach.' },
      { h3: 'Five to ten per group, by level', p: 'A group is formed on what its members can do and what they want next. Which stadsdeel they live in and which school the lottery gave them are not inputs.' },
      { h3: 'Eight lessons a month, one fixed time', p: 'Two lessons a week at a time agreed once. Regio Noord holiday weeks, the exam period and the summer are settled before the slot, not after.' },
      { h3: 'The clock difference, stated plainly', p: 'An Amsterdam evening is late in India: eight o\'clock here is half past eleven or half past midnight in Kolkata depending on the season. Late afternoon, early evening and weekend slots are the ones that work, and the recurring time is confirmed on the call.' }
    ],
    spec: { title: 'Nothing on this page depends on a building', p: 'There is no Amsterdam classroom, no centre in Zuid and no desk on the Science Park. Every lesson is live online with a teacher in India, and the page says so in the schema, in the footer and here, because a family choosing a class should never have to guess.' }
  },

  fees: {
    h2: 'One free class, then USD 100 or USD 150 a month, and nothing else',
    intro: 'Published in full, here, so nobody has to book a call to learn a price.',
    first: 'A full lesson with a task, a level and a named next step.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'Fees are in US dollars because that is the one published international rate; there is no separate euro tariff and nothing added for Amsterdam. The free class comes first and settles the course and the slot; payment is arranged afterwards over WhatsApp. Pauses, plan changes and missed lessons are on the pricing page.'
  },

  reviewsH2: 'What families and learners say',

  book: {
    h2: 'Tell us the learner\'s level, and the district if you like',
    intro: 'The first task might be two guesses and a jar, a simulation with two parameter settings, or a disagreement rate from your own team that you have never been sure how to read.',
    success: 'Thank you. Your Amsterdam class request has been sent.'
  },

  faq: {
    h2: 'Amsterdam coding class questions',
    intro: 'The city, the transition at eleven, the teaching and the terms.',
    items: [
      { q: 'How does the Amsterdam school lottery work, and does a coding class help with it?', a: 'The Centrale Loting and Matching places groep 8 pupils by preference list and a random lottery number. In 2026, 7,674 pupils were placed across 9,969 places at 65 schools, 73.85 percent at their first choice. No coding class changes a lottery number and we do not claim otherwise. What a class can do is give a child something to show in the January advice conversation and a routine that survives the April result.' },
      { q: 'Why is a higher test advice less common in Amsterdam than nationally?', a: 'Nobody can say from that number alone, and that is the point of the project on this page. About one in five Amsterdam pupils had a doorstroomtoets result above the school advice in 2024/25 against nearly one in three nationally. A simulation produces the same gap from teachers advising slightly higher, from a less noisy test, or from a mix. Only a later measurement of the same children could separate those.' },
      { q: 'Our child is at the British School of Amsterdam or at AICS. Does the ladder fit?', a: 'Yes. Both are in the city, the British School at Havenstraat 6 on the National Curriculum for England with GCSEs and A levels, AICS on the IB across its south and south-east campuses. We place by the year and the programme the child is actually in, and for a GCSE or IB Diploma Computer Science student the matching exam course is used directly.' },
      { q: 'Which district is the class for?', a: 'All eight. This page carries the city picture and each stadsdeel, plus Weesp, gets its own page written close up. The class itself does not care where in Amsterdam the laptop is, and a family that moves from Nieuw-West to Noord keeps the same slot.' },
      { q: 'Is the teaching in English or Dutch?', a: 'English. Amsterdam took in new residents from the United States, Italy, Germany, Spain, the United Kingdom, India and Turkey in 2025, according to the city\'s own projection, and English is the language those families share. Dutch school vocabulary is used exactly as the school uses it. We do not teach in Dutch.' },
      { q: 'What time are Amsterdam classes, given the teacher is in India?', a: 'The Dutch clock changes twice a year and the Indian one does not, so an Amsterdam evening is between three and a half and four and a half hours earlier than the teacher\'s. Late afternoon, early evening and weekend slots suit both sides, and the recurring time is agreed on the free class before any payment.' },
      { q: 'What happens in the free Amsterdam class?', a: 'We work out what the learner can do and set one task there. A child counts sweets in a jar after hearing two guesses. A teenager writes the two-instrument simulation and looks for a second setting that gives the same rate. An adult brings a disagreement rate from work. The hour ends with a named course, a level, a slot and the fee in USD, and costs nothing.' },
      { q: 'Does Modern Age Coders have a centre anywhere in Amsterdam?', a: 'No. No premises are claimed in Amsterdam, in Amstelveen or anywhere else in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The phone number on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Amsterdam coding classes cost?', a: 'The first class is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are all confirmed before payment.', boiler: true },
      { q: 'How big is a group for Amsterdam learners?', a: 'Five to ten learners, matched on level, pace and goal rather than on age, district or school. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'The town next door, the country page, and the page for building AI',
    html: '<a class="cg-inline-link" href="/coding-classes-in-amstelveen">Coding classes in Amstelveen</a> covers the municipality on Amsterdam\'s southern edge with the highest share of Indian-origin residents in the country. The <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a> carries the national curriculum picture and the full course list, and <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> is for the learner who wants to build models. <a class="cg-inline-link" href="/coding-classes-in-amsterdam-centrum">Amsterdam-Centrum</a> and <a class="cg-inline-link" href="/coding-classes-in-amsterdam-noord">Amsterdam-Noord</a> and <a class="cg-inline-link" href="/coding-classes-in-amsterdam-oost">Amsterdam-Oost</a> and <a class="cg-inline-link" href="/coding-classes-in-amsterdam-zuid">Amsterdam-Zuid</a> and <a class="cg-inline-link" href="/coding-classes-in-amsterdam-west">Amsterdam-West</a> are the first five of the eight district pages; <a class="cg-inline-link" href="/coding-classes-in-amsterdam-nieuw-west">Amsterdam Nieuw-West</a> and <a class="cg-inline-link" href="/coding-classes-in-amsterdam-zuidoost">Amsterdam-Zuidoost</a> make seven; Weesp is the last to come.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-amstelveen', label: 'Amstelveen' },
    { href: '/ai-and-machine-learning-classes-in-netherlands', label: 'AI and ML in the Netherlands' }
  ],

  personalityCss: `
.cg-root.cg-ams .cg-hero-grid { grid-template-columns: 1.5fr 1fr; gap: clamp(1.5rem, 4vw, 3rem); }
.cg-root.cg-ams .cg-capsule { border-left-width: 2px; padding: 1.5rem 1.6rem; }
.cg-root.cg-ams .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; }
.cg-root.cg-ams .cg-section-head h2 { max-width: 26ch; }
.cg-root.cg-ams .cg-picks { grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); }
.cg-root.cg-ams .cg-grid-3 { gap: clamp(1.5rem, 3vw, 2.5rem); }
.cg-root.cg-ams .cg-ladder-col { border-top-style: double; border-top-width: 4px; }
.cg-root.cg-ams .cg-align-code { font-weight: 700; }
.cg-root.cg-ams .cg-align-row { padding-block: 1.4rem; }
.cg-root.cg-ams .cg-section { padding-bottom: clamp(2.75rem, 6.5vw, 5rem); }
`,

  dossier: {
    curriculumAuthority: 'Amsterdam, Noord-Holland: the groep 8 transition as run in this city. School advice (28 percent vwo, 56 percent havo and/or vwo in 2024/25), the national doorstroomtoets (26 January to 13 February 2026, results 3 to 15 March) with a higher test advice for about one in five Amsterdam pupils against nearly one in three nationally, and the Centrale Loting en Matching run by OSVO (12th edition, 9 April 2026: 65 schools, 9,969 places, 7,674 pupils, 73.85 percent first choice, lists of 4/6/12 schools by advice, 2025 nine-school list reverted to twelve). Two international schools: British School of Amsterdam (Havenstraat 6, National Curriculum for England) and AICS (IB, Esprit Scholen, two campuses). 244 primary and 91 secondary establishments (CBS). The hub owns the national digital-literacy curriculum; this page owns the Amsterdam transition machinery.',
    localProject: 'Two instruments, one disagreement rate. The city research office reports a doorstroomtoets result above the school advice for about one in five Amsterdam pupils against nearly one in three nationally (33 percent in Zuidoost, 30 in Noord, 20 citywide). A learner simulates 300,000 pupils with one true level, a school advice with a teacher tendency plus noise, and a test with its own noise, both banded, and finds that 33 percent arises from teachers 0.20 sd low with moderate test noise OR from unbiased teachers with high test noise, and ~20 percent from precise tests OR from teachers slightly high. The rate cannot identify the cause; only a third measurement can. Distinct from observation bias (Texas: the instrument changed over time), from metric definition (New Jersey) and from the Amstelveen stock/flow model. Simulation run before writing; all four table rows are labelled as a model.',
    requiredMentions: [
      'Centrale Loting and Matching',
      '7,674 pupils',
      '73.85 percent',
      '9,969 places',
      'Havenstraat 6',
      'Arent Janszoon Ernststraat 1179',
      'Amsterdam Science Park',
      'Noord/Zuidlijn',
      '941,873',
      'hoger toetsadvies',
      '111 wijken',
      'Matrix Innovation Centre',
      'Huis van Bewaring'
    ],
    sources: [
      { claim: 'Centrale Loting & Matching 2026 (12th edition, 9 April 2026): 65 VO schools, 9,969 places, 7,674 pupils; 73.85% first choice, 91% top 3, 95.54% top 5; preference lists of 4 (vmbo-b/k), 6 (vmbo-gl/tl) or 12 (havo/vwo) schools; 2025 used 9 for havo/vwo and reverted to 12; reserve lists valid to 30 September; second round 15 April.', url: 'https://verenigingosvo.nl/wp-content/uploads/2026/04/Persbericht-Centrale-Loting-Matching-2026.pdf' },
      { claim: 'Amsterdam groep 8, 2024/25 (published 9 March 2026): 28% vwo advice, 56% havo and/or vwo; higher test advice about one fifth in Amsterdam vs nearly one third nationally; Zuidoost 33%, Noord 30%, city 20%; maths target level 47% vs 43% nationally; reading 74% both; language 56% vs 55%.', url: 'https://onderzoek.amsterdam.nl/artikel/de-doorstroomtoets-en-basisvaardigheden-in-groep-8-2026' },
      { claim: 'Population 941,873 on 1 January 2026 (municipal register); projection 1,120,000 by 2055 (+178,000); growth Oost +42,500, Noord +37,200, Zuidoost +33,200, Nieuw-West +31,300, West +13,200, Zuid +11,000, Weesp +5,100, Westpoort +4,300, Centrum stable; 116,000 dwellings; 2025 immigrants mainly from the US, Italy, Germany, Spain, the UK, India and Turkey. Published 15 April 2026.', url: 'https://onderzoek.amsterdam.nl/artikel/bevolkingsprognose-2026-2055' },
      { claim: 'CBS provisional population 941,927 on 1 January 2026; 516,096 households; 119,410 under 15 (13%); 123,596 aged 15 to 25; 244 primary schools with 63,961 pupils; 91 secondary establishments with 46,608 pupils; 111 wijken, 519 buurten.', url: 'https://allecijfers.nl/gemeente/amsterdam/' },
      { claim: 'Zuid stadsdeel 146,395 residents on 1 January 2026.', url: 'https://onderzoek.amsterdam.nl/artikel/bevolkingsprognose-2026-2055' },
      { claim: 'Noord/Zuidlijn (metro 52) opened to passengers 22 July 2018 (official opening 21 July); 9.7 km, 7.1 km underground; 8 stations Noord, Noorderpark, Centraal Station, Rokin, Vijzelgracht, De Pijp, Europaplein, Station Zuid; build decision October 2002.', url: 'https://nl.wikipedia.org/wiki/Noord/Zuidlijn' },
      { claim: 'British School of Amsterdam: founded 1978; Havenstraat 6, 1075 PR; former 19th-century Huis van Bewaring bought February 2017, opened April 2021, capacity 1,200; about 1,100 pupils aged 3 to 19; National Curriculum for England, GCSE/IGCSE, A level; first British School Overseas accreditation in the Netherlands.', url: 'https://en.wikipedia.org/wiki/British_School_of_Amsterdam' },
      { claim: 'AICS: founded 2003; part of Esprit Scholen; more than 2,000 pupils; South campus Arent Janszoon Ernststraat 1179 since 2022 (formerly Prinses Irenestraat 59); South East campus Sand Castle, Bijlmerplein, since September 2023; IB MYP, DP and CP.', url: 'https://en.wikipedia.org/wiki/Amsterdam_International_Community_School' },
      { claim: 'Amsterdam Science Park: 70 hectares; about 176 companies; more than 600 network hubs; AMS-IX; UvA Faculty of Science; Amsterdam University College; six Matrix Innovation Centre buildings over three decades.', url: 'https://www.iamsterdam.com/en/business/setting-up/find-your-business-location/amsterdam-science-park' },
      { claim: 'Weesp merged into Amsterdam on 24 March 2022; now a stadsgebied with an elected committee; 20,766 inhabitants on 1 January 2022; Torenfort aan de Ossenmarkt (1861); Van Houten factory from 1851.', url: 'https://nl.wikipedia.org/wiki/Weesp' }
    ],
    rejectedClaims: [
      'Any number of engineers at Booking.com or any Zuidas employer. Found only in secondary job-market blogs; not used.',
      'That AICS is at Prinses Irenestraat 59. That was the former address; the south campus moved to Arent Janszoon Ernststraat 1179 in 2022 and the page uses the current one.',
      'That the British School of Amsterdam is at Havenstraat 9. One directory says 9; the school\'s own contact page and Wikipedia say 6. The page uses 6.',
      'Daily ridership of the Noord/Zuidlijn and its final cost. Not in the source used; omitted rather than estimated.',
      'A per-stadsdeel population table for 1 January 2026. Only Zuid (146,395) and the city total were found in a primary source; the district pages will carry their own figures.',
      'Anything the Netherlands hub owns: the nine SLO core objectives, the March 2024 finalisation as a spine, the groep 8 streaming advice as an argument, the CET/CEST offset paragraph.'
    ]
  }
};
