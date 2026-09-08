'use strict';
// Amsterdam-West: the densest of the eight districts, formed in 2010 from
// four older ones, holding De Kolenkit and the Helmersbuurt.
// Spine: a name is a promise of continuity, and De Kolenkit's 2009 label
// outlived the buildings it was attached to. Ship of Theseus, applied to an
// identifier that keeps its history after the thing has been replaced.

module.exports = {
  slug: 'coding-classes-in-amsterdam-west',
  code: 'awt',
  accent: '#00566D',
  accentRationale: 'Amsterdam-West: a deep harbour teal off the Westerpark water and the old dock cranes at Sloterdijk, picked from the one remaining band that reads clearly apart from the rose, ochre, violet and viridian already carrying the other four Amsterdam district pages',
  pageType: 'district',
  place: {
    name: 'Amsterdam-West',
    eyebrow: 'West, Amsterdam',
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
  routeLabel: 'Amsterdam-West, Netherlands',
  title: 'Coding Classes in Amsterdam-West | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Amsterdam-West for ages 6 to 67, from the Kinkerbuurt to Bos en Lommer. The first lesson costs nothing.',
  ogDescription: 'Live online coding, Python and AI for families in Amsterdam-West, built on a seventeen-year-old label still attached to buildings that were largely demolished.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'javascript-course-for-teens-beginners-interactive-web',
  verifiedOn: '9 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Amsterdam-West Learners',
    description: 'Ability-placed online coding, Python, JavaScript, AI and mathematics for children, teenagers and adults across the wijken of Amsterdam-West, taught in English.'
  },

  h1: 'Coding classes in Amsterdam-West, where a neighbourhood still carries a label from 2009 and most of the buildings it described are gone',
  capsuleQ: 'What are the best coding classes in Amsterdam-West?',
  capsule: 'Coding classes in Amsterdam-West reach the densest of the eight Amsterdam districts, formed in 2010 out of Oud-West, Westerpark, De Baarsjes and Bos en Lommer on 9.45 square kilometres of land. In February 2009 one of its neighbourhoods, De Kolenkit, was reported as the worst in the Netherlands. In the years after, a large part of it was demolished and replaced with new building, and one of its four buurten is now called Laan van Spartaan. The name is unchanged and much of the place is not. Modern Age Coders teaches live online in English across the whole district, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Search for De Kolenkit and you will still meet a sentence from February 2009 calling it the worst neighbourhood in the Netherlands. The same entry that records the label also records what happened next: an urban renewal plan under which a large part of the buurt was demolished and replaced by new construction. Seventeen years later the name is identical and a substantial part of the physical neighbourhood is not. A name is a promise that the thing on either side of it is the same thing, and that promise quietly broke here without anybody being told.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Amsterdam-West.',

  picks: {
    eyebrow: 'Course picks for Amsterdam-West',
    h2: 'Four courses for the most crowded eight square kilometres in the city',
    intro: 'A groep 5 child in Bos en Lommer who has run out of things to finish, a teenager off the Kinkerstraat who wants a page on the internet that is actually theirs, a student in the Helmersbuurt who would rather know how the model works than what it said, and an adult on the Laan van Spartaan whose employer switched on a set of tools and explained none of them: four doors, and the first hour of each is free.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python, drawings that follow instructions and a first program that notices a rule, taught in English to the groep 5 to 8 child anywhere in the district.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', band: 'Ages 13 to 18', note: 'The language the browser actually runs, built up until a real page responds to a real person, for the teenager who wants something they can send somebody.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'College and adult', note: 'How the models are assembled and where they come apart, for the student who would rather understand the tool than be surprised by it.' },
      { course: 'ai-tools-mastery-complete-college', band: 'Adults', note: 'The current tools used with judgement instead of trust, for anybody handed them at work with no instructions and a deadline.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'West today',
      h2: 'Four old districts joined in 2010, on nine and a half square kilometres',
      intro: 'Amsterdam-West was created in 2010 by joining Oud-West, Westerpark, De Baarsjes and Bos en Lommer, and since 1 January 2015 it has also held the part of Westpoort east of the A10. Its own entry says it has the highest population density of any district in the municipality, on an area given as 9.45 square kilometres of land.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Governed three ways in sixteen years', p: 'From 2010 to 2014 the district was run by an elected stadsdeelraad. In 2014 the deelraden were abolished across the city and the district has been governed by a bestuurscommissie since. The name Amsterdam-West has therefore covered three different arrangements, four predecessor districts and one addition of territory, all inside sixteen years.' },
          { h3: 'A population figure four years old', p: 'The district entry publishes 148,908 residents for 1 January 2022. The wijk figures on this page are 2026 for population and 2025 for everything else, so no density, share or district total is computed here from the district figure, and the two are never divided into each other.' },
          { h3: 'What this page measures', p: 'Two of the district\'s wijken carry full published figures: De Kolenkit and the Helmersbuurt. They are a deliberate pair, both dense, both largely rented, built in different centuries and treated very differently by the outside world. No district average is computed from two wijken.' }
        ] },
        { kind: 'table', caption: 'What the district entry publishes, and its dates', head: ['Item', 'As published', 'Date', 'Used here?'], rows: [
          ['Residents', '148,908', '1 January 2022', 'quoted, never combined with a 2026 figure'],
          ['Area', '9.45 square kilometres, stated as land', 'undated', 'quoted; no density computed from a 2022 population'],
          ['Density', 'the highest of any district in the municipality', 'undated', 'quoted as the entry\'s claim, not tested here'],
          ['Formed', 'from Oud-West, Westerpark, De Baarsjes and Bos en Lommer', '2010', 'the reason the district has no single older identity'],
          ['Territory added', 'the part of Westpoort east of the A10', '1 January 2015', 'noted; no series is drawn across it']
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Two neighbourhoods, both crowded, one of them rebuilt',
      intro: 'A nineteenth-century quarter that was never pulled down and a post-war one that largely was. Populations are 2026 figures; households, area, density, housing and tenure are 2025; incomes are 2024.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'De Kolenkit', p: '11,767 residents in 6,280 households averaging 1.9 people, of which 3,565 hold one person, 57 percent. 1,795 residents are under fifteen, 15 percent, and 1,040 are sixty-five or over, 8.8 percent. 74 hectares total and 72 of land, giving 16,368 people to the square kilometre. 6,095 dwellings at an average value of 419,000 euro, 4,876 of them rented at 80 percent, and an average income of 32,400 euro per resident. Four buurten: Kolenkitbuurt-Noord, Kolenkitbuurt-Zuid, Robert Scottbuurt-West and Laan van Spartaan.' },
          { h3: 'Helmersbuurt', p: '7,271 residents in 4,570 households averaging 1.6, of which 2,670 hold one person, 58 percent. 675 residents are under fifteen, 9.3 percent, and 1,010 are sixty-five or over, 14 percent. 35 hectares total and 33 of land, giving 22,424 people to the square kilometre. 4,470 dwellings at an average value of 646,000 euro, 2,906 of them rented at 65 percent, and an average income of 55,800 euro. Three buurten: Helmersbuurt-Oost, the WG-terrein and Cremerbuurt-Oost.' },
          { h3: 'The denser one is not the one you would guess', p: 'The Helmersbuurt is at 22,424 people to the square kilometre and De Kolenkit at 16,368. The neighbourhood with the reputation is the less crowded of the two by a wide margin, which is worth knowing before anybody reaches for an explanation involving overcrowding.' },
          { h3: 'And the ones not measured here', p: 'West also holds the Spaarndammerbuurt, the Staatsliedenbuurt, the Frederik Hendrikbuurt, the Da Costabuurt, the Kinkerbuurt, the Van Lennepbuurt, Westerpark, Landlust, Erasmuspark, the Overtoomse Sluis, the Vondelbuurt and the village of Sloterdijk, among twenty-seven named buurten. They are listed because they exist and given no invented numbers.' }
        ] },
        { kind: 'spec', title: 'What the class asks about any of this', p: 'Nothing. A learner is placed on what they can already do, demonstrated in the free hour, so a child on the Laan van Spartaan and a child on the WG-terrein sit in the same group when they are at the same stage and in different ones when they are not. Neither the buurt, the school nor the reputation of an address is an input to the decision, and a family that moves across the district keeps its slot.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, its date, and what cannot be established',
      intro: 'One district entry, one buurt entry, two wijk pages, and a list of things the published record does not settle.',
      body: [
        { kind: 'table', caption: 'The record, claim by claim', head: ['Claim', 'As published', 'Source and date', 'Status on this page'], rows: [
          ['The district', '148,908 residents; 9.45 km2 of land; formed 2010 from four stadsdelen; Westpoort east of the A10 added 1 January 2015; stadsdeelraad to 2014, bestuurscommissie since; the highest density in the municipality', 'stadsdeel entry, population dated 1 January 2022', 'quoted; the density claim is not tested'],
          ['The label', 'reported as the slechtste wijk van Nederland, the worst neighbourhood in the Netherlands', 'buurt entry, attributed to NU.nl, February 2009', 'quoted with its date and its source, and argued against'],
          ['What happened after', 'an urban renewal plan under which a large part of the buurt would be demolished in the following years and replaced by new construction', 'buurt entry, undated beyond the following years', 'the centre of this page'],
          ['Figures alongside the assessment', 'unemployment 11.5 percent; early school-leaving 16 percent; Cito results among the lowest in the city', 'buurt entry, not separately dated', 'quoted as undated, and never compared with a 2026 figure'],
          ['De Kolenkit now', '11,767 residents; 6,280 households; 6,095 dwellings at 419,000 euro; 80 percent rented; income 32,400 euro; density 16,368', 'statistics office, 2026 population, 2025 housing, 2024 income', 'quoted in full'],
          ['Helmersbuurt now', '7,271 residents; 4,570 households; 4,470 dwellings at 646,000 euro; 65 percent rented; income 55,800 euro; density 22,424', 'statistics office, same vintages', 'quoted in full']
        ] },
        { kind: 'p', text: 'What the record does not establish: how many homes were demolished, how many were built, what the population of the buurt was in 2009, or what any of the 2009 indicators would be today. No source read here gives any of those. That absence is not a footnote to the argument on this page, it is the argument, and it is why the page compares nothing across 2009 and 2026. Modern Age Coders has no connection to the stadsdeel, the city or any school named here and claims none.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The name stayed the same. Did the neighbourhood?',
      intro: 'A label from February 2009, a demolition programme in the years after, and a search result that still hands you the first without the second.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Notice what an identifier promises', p: 'When two records share a name, every join, every trend line and every search result treats them as the same thing. That is what a name is for and it is usually right. It stops being right when the thing is replaced underneath the name, and nothing in the data announces the moment that happens.' },
          { h3: '2. Find the replacement event', p: 'Here the same entry that carries the label also carries the plan: a large part of the buurt was to be demolished in the following years and replaced by new construction. One of its four buurten is now named Laan van Spartaan. The event is on the record. It is simply not attached to the label in any way a reader or a search engine would notice.' },
          { h3: '3. Refuse the comparison you cannot support', p: 'The tempting move is to put 2009 next to 2026 and announce an improvement or a decline. This page does not, because nothing published says how much was replaced. Unemployment of 11.5 percent from an undated assessment and an average income of 32,400 euro from 2024 are not two points on one line. They are two descriptions of two overlapping but different places.' }
        ] },
        { kind: 'table', caption: 'One name, two things, and the join nobody should make', head: ['What is being compared', 'The 2009 side', 'The 2026 side', 'Why the comparison fails'], rows: [
          ['The buildings', 'the housing stock as it stood before renewal', '6,095 dwellings, average value 419,000 euro', 'a large part of the first was demolished and replaced'],
          ['The residents', 'not published anywhere read here', '11,767 residents in 6,280 households', 'no 2009 population to compare with'],
          ['The condition', 'unemployment 11.5 percent, early school-leaving 16 percent, undated', 'average income 32,400 euro, 2024', 'different indicators, different years, different housing'],
          ['The name', 'De Kolenkit', 'De Kolenkit', 'identical, and doing all the work'],
          ['What is honest', 'a dated label with a named source', 'a dated set of figures', 'report both, join neither']
        ] },
        { kind: 'callout', h3: 'An identifier is a promise of continuity, and somebody has to decide when it breaks', p: 'Names and ids are the glue of every dataset. Join on customer_id and you assume the customer is the same customer. Chart a metric over five years and you assume the metric measured the same thing in year one as in year five. Compare a school against its own record from a decade ago and you assume it is the same school. Most of the time those assumptions hold, which is exactly why nobody checks them, and the failures are quiet rather than loud. A company is acquired and its customer records are migrated with their ids intact, so its history now belongs to a different company. A product keeps its code after a redesign that changed everything about it. A metric definition is revised in one release note and the dashboard title stays the same, so a step change in the chart looks like a business event. A neighbourhood is largely demolished and rebuilt and keeps its name, so a sentence written in February 2009 is still the first thing anybody reads about it in 2026. In every one of those cases the data is correct, the join is technically valid and the conclusion is wrong. The defence is not clever code. It is a decision, made by a person, about when a thing has changed enough that its identifier should not carry its history any further: version the entity, give it a valid-from date, or mint a new id and record what it replaced. Whoever does not make that decision has made it by default, in favour of continuity, on behalf of everybody who will ever query the table.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for identifiers that outlive what they named',
      intro: 'Customer ids through an acquisition, product codes through a redesign, metric names through a definition change, hostnames through a hardware refresh: the id survives and the thing does not. Practised on a neighbourhood that kept its name through a demolition programme.',
      body: [
        { kind: 'table', caption: 'Keeping a name honest over time', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Date every claim', 'Attach the date and the source to any statement about an entity', 'A seventeen-year-old sentence read as current', 'A reader who can see how old the evidence is'],
          ['Record replacement events', 'Log mergers, rebuilds, redefinitions and migrations against the id', 'A discontinuity invisible to every later query', 'A history somebody can interrogate'],
          ['Version the entity', 'Give the id a valid-from date, or mint a new one and link it', 'One identifier silently spanning two things', 'Joins that can be made deliberately rather than by accident'],
          ['Test the join', 'Before comparing across time, ask what changed between the endpoints', 'A trend line drawn through a replacement', 'Either a defensible comparison or a good reason not to'],
          ['Let old labels expire', 'Treat an undated reputation as evidence about its own date only', 'A stale judgement travelling forever', 'A description of the thing as it is now']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A favourite toy that has had its wheels, its battery and half its body replaced over the years. Is it the same toy? The children argue about it, and then decide what would have to change before they would agree it was a different one.' },
          { h3: 'For teenagers', p: 'Two records in Python sharing a name, each with a valid-from date, and a join that refuses to run when a replacement event falls between them. The stretch: write the version that joins on the name alone, run both against the same question, and describe exactly what the naive version claimed.' },
          { h3: 'For adults', p: 'A real identifier at work that survived a migration, an acquisition or a redefinition. Adults reliably find a chart crossing the event, a title that never changed, and nobody who can say which side of it the current numbers belong to.' }
        ] },
        { kind: 'p', text: 'The district population, area, formation, governance and the Westpoort addition come from the stadsdeel entry, with the population dated 1 January 2022. The February 2009 label, its attribution to NU.nl, the renewal and demolition plan and the figures quoted alongside the assessment come from the entry for the buurt. Every population, household, age, area, density, dwelling, value, tenure and income figure for De Kolenkit and the Helmersbuurt comes from the national statistics office page for that wijk, with 2026 populations, 2025 household and housing figures and 2024 incomes. No figure on this page is carried across the 2009 boundary and none of the arithmetic joins the two sides.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a toy with all its parts replaced to a join that refuses to cross a rebuild',
    intro: 'Which rung a learner starts on is settled in the free hour by what they can already do, and never by the buurt on the address or anything anybody once wrote about it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Is it still the same toy?', p: 'Children decide for themselves how much has to change before a name stops fitting.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'When was this written?', p: 'Learners start attaching a date and a source to every claim before they use it.', courses: ['python-ai-kids-masterclass', 'kids-ai-web-development-course'] },
      { band: 'Ages 14 to 18', h3: 'Ids that carry a valid-from date', p: 'Teenagers build records that version themselves and joins that refuse to cross a replacement.', courses: ['javascript-course-for-teens-beginners-interactive-web', 'react-for-teens-complete-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'The chart that crosses the migration', p: 'Adults find a real identifier that outlived the thing it named and work out what it has been claiming.', courses: ['complete-generative-ai-masterclass-college', 'ai-tools-mastery-complete-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an AI about De Kolenkit and you will get February 2009. Why should a teenager in West learn to check the date?',
    intro: 'Because the sentence is real, correctly quoted and seventeen years old, and nothing in it says so.',
    p1: 'A model asked about this neighbourhood has a great deal of text to draw on, and the most quotable line in all of it is the one calling it the worst in the Netherlands. That line is genuinely in the record, it has a source and it has a date. What it does not have is any marker telling a reader that a demolition programme followed it, and a summary has no particular reason to go looking. The result is fluent, sourced, technically accurate and describes buildings that in substantial part are no longer standing.',
    p2: 'So the learner practises the two questions that catch it: when was this said, and has the thing it was said about been replaced since. Then they build the version that enforces the answer, with a valid-from date on the record and a join that will not silently cross a replacement event. That is a small amount of code protecting a large amount of judgement. A fifteen-year-old in Bos en Lommer who has taken a stale label apart will be the person at thirty who asks which side of the migration the customer history came from. Models will keep returning the most quotable sentence. Asking how old it is stays a person\'s job.',
    closer: 'The case for a child in Amsterdam-West learning to code in 2026 is therefore not about one neighbourhood\'s reputation. It is that names are how data is joined, that a name can outlive the thing it named without any warning being emitted, and that a buurt which was largely rebuilt and kept its label is the clearest example of the problem a person is likely to walk past on the way to school.',
    blogAnchor: 'the case for a child writing code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes in the most crowded part of the city',
    intro: 'West is dense, well connected and short of space. The obstacle for a family here is almost never getting somewhere; it is finding an hour and a quiet corner in a flat that has neither to spare.',
    cells: [
      { h3: 'One hour, at your own table', p: 'The class runs at home in Bos en Lommer, off the Kinkerstraat or on the Laan van Spartaan at the same time each week. Nothing has to be travelled to and no room has to be hired.' },
      { h3: 'English throughout, Dutch school words kept', p: 'Every lesson is in English. Groep, havo, vwo and profielkeuze stay in Dutch on purpose, because those are the words printed on the paperwork a child brings home and an English substitute only adds a step.' },
      { h3: 'What the first hour settles', p: 'The teacher watches the learner work, so the level is shown rather than stated; a named course follows from it and an hour is fixed in the week. Payment is not discussed during it and no card is requested.' },
      { h3: 'Level makes the group, reputation does not', p: 'Two learners at the same stage work together whichever buurt they are in and whatever anybody has written about it. Two at different stages do not, for the same reason.' },
      { h3: 'Twice a week, on regio Noord dates', p: 'A repeating twice-weekly slot, normally eight lessons in a month. Noord-Holland takes its school holidays with regio Noord, and the weeks a family will be away are put into the plan before it begins.' },
      { h3: 'Three and a half hours, four and a half in winter', p: 'Only the Dutch clock moves, so the distance to the teacher changes with the season. After school, early evening and either weekend day work at both settings.' }
    ],
    spec: { title: 'A district where the children are concentrated in particular streets', p: 'Under-fifteens are 15 percent of De Kolenkit, which is 1,795 children, and 9.3 percent of the Helmersbuurt, which is 675. Two neighbourhoods a few minutes apart differ by a factor of nearly three in the number of school-age children in them. That is the practical reason a specialist group at one particular level rarely forms locally, whatever the school does, and the reason groups here are assembled on ability from across the world instead, at every age up to sixty-seven.' }
  },

  fees: {
    h2: 'The fee, in dollars, the same in every buurt',
    intro: 'On the page rather than saved for a telephone call.',
    first: 'A full lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One international rate exists and it is quoted in dollars, with no euro edition, so an address in the Helmersbuurt is charged exactly what an address in De Kolenkit is. Nothing is paid until the free lesson has settled a course and an hour, and payment is then arranged over WhatsApp. Pausing, switching plan and missing a week are all set out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, reproduced as the people who left them wrote them',

  book: {
    h2: 'Send the level, not the postcode',
    intro: 'The first task might be a toy that has had every part replaced, a pair of records that refuse to join across a rebuild, or an identifier at work that survived a migration nobody logged.',
    success: 'Thank you. Your Amsterdam-West class request has been sent.'
  },

  faq: {
    h2: 'Amsterdam-West coding class questions',
    intro: 'The district, its neighbourhoods, one very old sentence, the teaching and the terms.',
    items: [
      { q: 'Is De Kolenkit really the worst neighbourhood in the Netherlands?', a: 'That was reported in February 2009, attributed to NU.nl, and it is seventeen years old. The same entry records that an urban renewal plan followed, under which a large part of the buurt was demolished and replaced by new construction, and one of its four buurten is now called Laan van Spartaan. This page quotes the label with its date and its source precisely so that it can argue against its continued use, and it deliberately does not compare any 2009 figure with any current one.' },
      { q: 'So has it improved?', a: 'This page does not say, because nothing published that was read here allows the question to be answered. No source gives how many homes were demolished, how many were built, or what the population of the buurt was in 2009. Comparing an undated unemployment figure with a 2024 average income across a demolition programme would be joining two different places on the strength of a shared name, which is the exact error the page exists to describe.' },
      { q: 'What are the current figures for De Kolenkit?', a: '11,767 residents in 2026, in 6,280 households averaging 1.9 people, of which 3,565 hold one person. 6,095 dwellings at an average value of 419,000 euro, 4,876 of them rented, 80 percent. An average income of 32,400 euro per resident in 2024, and a density of 16,368 people to the square kilometre across 72 hectares of land. The four buurten are Kolenkitbuurt-Noord, Kolenkitbuurt-Zuid, Robert Scottbuurt-West and Laan van Spartaan.' },
      { q: 'Which is the more crowded neighbourhood, De Kolenkit or the Helmersbuurt?', a: 'The Helmersbuurt, and not by a little: 22,424 people to the square kilometre against 16,368. The Helmersbuurt also has the higher average dwelling value, 646,000 euro against 419,000, and the higher average income, 55,800 euro against 32,400. Density and prosperity are not running in the same direction here, which is worth knowing before anybody reaches for an explanation involving crowding.' },
      { q: 'When was Amsterdam-West created?', a: 'In 2010, by joining the former stadsdelen Oud-West, Westerpark, De Baarsjes and Bos en Lommer, and since 1 January 2015 it has also held the part of Westpoort east of the A10. It was governed by an elected stadsdeelraad from 2010 until the deelraden were abolished in 2014, and by a bestuurscommissie since. Its entry gives 148,908 residents for 1 January 2022 and 9.45 square kilometres of land.' },
      { q: 'Is the class taught in Dutch?', a: 'No. Every lesson runs in English from beginning to end. Dutch school vocabulary is the one deliberate exception and stays exactly as a Dutch school writes it, so groep, havo, vwo and profielkeuze are spoken rather than translated. There is no Dutch-language version of any course.' },
      { q: 'What hours work for a family in West?', a: 'The teacher is three and a half hours ahead during Dutch summer time and four and a half in winter, because only the Dutch clock changes. The practical window runs from the end of the school day to mid-evening, with both weekend days open, and a single repeating weekly slot is agreed at the free lesson and then kept.' },
      { q: 'Is there a Modern Age Coders classroom in Amsterdam-West?', a: 'No, and none is claimed in Bos en Lommer, elsewhere in Amsterdam or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Amsterdam-West coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or neighbourhood. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Amsterdam and beyond',
    h2: 'East into the canals, south past the Vondelpark, and out to the country',
    html: 'East of here is <a class="cg-inline-link" href="/coding-classes-in-amsterdam-centrum">Amsterdam-Centrum</a>, where the district turns out to be less crowded than its own neighbourhoods, and south is <a class="cg-inline-link" href="/coding-classes-in-amsterdam-zuid">Amsterdam-Zuid</a>, where two official registers disagree by 432 on the Zuidas. Across the water lies <a class="cg-inline-link" href="/coding-classes-in-amsterdam-noord">Amsterdam-Noord</a>. The city page, <a class="cg-inline-link" href="/coding-classes-in-amsterdam">coding classes in Amsterdam</a>, carries the picture for all eight districts, and the city sits inside <a class="cg-inline-link" href="/coding-classes-in-noord-holland">Noord-Holland</a>. Everything descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner who wants trained models rather than running programs should start at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Finish this on WhatsApp'
  },

  footerHeading: 'Amsterdam and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-amsterdam', label: 'Amsterdam' },
    { href: '/coding-classes-in-amsterdam-zuid', label: 'Amsterdam-Zuid' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-awt .cg-hero-grid { align-items: start; gap: clamp(1.3rem, 3vw, 2.4rem); }
.cg-root.cg-awt .cg-hero h1 { font-weight: 600; letter-spacing: -0.016em; line-height: 1.06; }
.cg-root.cg-awt .cg-capsule { border-left-width: 4px; border-left-style: dotted; padding-left: 1.5rem; }
.cg-root.cg-awt .cg-eyebrow { letter-spacing: 0.2em; font-weight: 500; text-transform: uppercase; }
.cg-root.cg-awt .cg-section-head h2 { max-width: 38ch; letter-spacing: -0.006em; }
.cg-root.cg-awt .cg-grid-3 { gap: clamp(1.15rem, 2.45vw, 1.9rem); }
.cg-root.cg-awt .cg-card { border-radius: 14px; }
.cg-root.cg-awt .cg-table caption { font-style: italic; letter-spacing: 0.015em; }
.cg-root.cg-awt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-awt .cg-callout { border-left-width: 5px; border-left-style: double; }
`,

  dossier: {
    curriculumAuthority: 'Stadsdeel Amsterdam-West, Noord-Holland: formed in 2010 from Oud-West, Westerpark, De Baarsjes and Bos en Lommer, with the part of Westpoort east of the A10 added on 1 January 2015; governed by a stadsdeelraad from 2010 to 2014 and by a bestuurscommissie since; its entry publishes 148,908 residents for 1 January 2022, four years older than the wijk figures, so no district density or share is computed here, and claims the highest population density of any Amsterdam district on 9.45 km2 of land. Two wijken carry full figures: De Kolenkit 11,767 residents, 6,280 households, 6,095 dwellings, density 16,368, WOZ 419,000 euro, income 32,400 euro; Helmersbuurt 7,271 residents, 4,570 households, 4,470 dwellings, density 22,424, WOZ 646,000 euro, income 55,800 euro. Regio Noord holidays. The district page argues from an identifier that outlived what it named; Amsterdam-Centrum owns aggregates over ground, Amsterdam-Noord the rounding bound, Amsterdam-Oost self-selection, Amsterdam-Zuid the two registers, and the city page the doorstroomtoets rates.',
    localProject: 'An identifier is a promise of continuity, and somebody has to decide when it breaks. In February 2009 the buurt entry records De Kolenkit reported, on NU.nl, as the slechtste wijk van Nederland. The same entry records what followed: an urban renewal plan under which a large part of the buurt would be demolished in the following years and replaced by new construction. Seventeen years on the name is unchanged, one of its four buurten is called Laan van Spartaan, and a search still returns the 2009 sentence first. The published record does not give how many homes were demolished, how many were built, or the population of the buurt in 2009, so the extent of the replacement cannot be quantified from it, and that unquantifiability is why the label travels unchallenged: a claim that cannot be re-tested never expires. The page therefore quotes the 2009 label with its date and source, quotes the 2026 figures in full, and joins nothing across the two, refusing to say whether conditions improved. The general case is entity resolution over time: customer ids surviving an acquisition, product codes surviving a redesign, metric names surviving a definition change, a school keeping its league-table history through a merger. Distinct from the merger trap (Zaanstad), where administrative units combine to make a new row; from a boundary change inside a series (Alkmaar), where the territory changes; and from one label over two contemporaneous tables (Alphen): here the unit, the boundary and the name are all unchanged and the physical thing inside them was replaced over time.',
    requiredMentions: [
      '11,767',
      '6,280',
      '6,095',
      '16,368',
      '419,000',
      '32,400',
      '7,271',
      '4,570',
      '4,470',
      '22,424',
      '646,000',
      '55,800',
      'Kolenkit',
      'Laan van Spartaan'
    ],
    sources: [
      { claim: 'Amsterdam-West: 148.908 inwoners (1 januari 2022); oppervlakte 9,45 km2 (land); dit stadsdeel werd ingesteld in 2010 en is een samenvoeging van de vroegere stadsdelen Oud-West, Westerpark, De Baarsjes en Bos en Lommer; sinds 1 januari 2015 is van Westpoort het gedeelte ten oosten van de A10 toegevoegd aan Stadsdeel West; West de hoogste bevolkingsdichtheid heeft van de gemeente Amsterdam; het stadsdeel Amsterdam-West werd van 2010 tot 2014 bestuurd door een stadsdeelraad, in 2014 zijn de deelraden opgeheven en wordt het bestuur gevormd door een bestuurscommissie; 27 named buurten including the Spaarndammerbuurt, Staatsliedenbuurt, Frederik Hendrikbuurt and Kinkerbuurt; the village of Sloterdijk belongs to the district.', url: 'https://nl.wikipedia.org/wiki/Amsterdam-West' },
      { claim: 'Kolenkitbuurt: identified in February 2009 as the meest problematische wijk and reported as the slechtste wijk van Nederland, attributed to NU.nl; een plan tot stedelijke vernieuwing opgesteld waardoor in de jaren daarna een groot deel van deze buurt zou worden gesloopt en door nieuwbouw vervangen; figures quoted alongside the assessment and not separately dated include unemployment 11.5 percent, early school-leavers 16 percent, and Cito results tot de laagste van de stad. The entry gives no number of homes demolished or built and no population figure with a date.', url: 'https://nl.wikipedia.org/wiki/Kolenkitbuurt' },
      { claim: 'Wijk De Kolenkit, Amsterdam: 11,767 inwoners (2026); 6,280 huishoudens averaging 1.9 (2025), 3,565 eenpersoonshuishoudens at 57 percent; ages 1,795 (0 to 15, 15 percent), 1,895 (15 to 25, 16 percent), 4,910 (25 to 45, 42 percent), 2,120 (45 to 65, 18 percent), 1,040 (65+, 8.8 percent); 74 hectare total, 72 land (2025); bevolkingsdichtheid 16,368 per km2 (2025); woningvoorraad 6,095 (2025); average WOZ 419,000 euro (2025); 4,876 huurwoningen (80 percent) and 1,219 koopwoningen (20 percent); average income 32,400 euro per resident (2024); 4 buurten: Kolenkitbuurt-Noord, Kolenkitbuurt-Zuid, Robert Scottbuurt-West, Laan van Spartaan.', url: 'https://allecijfers.nl/wijk/de-kolenkit-amsterdam/' },
      { claim: 'Wijk Helmersbuurt, Amsterdam: 7,271 inwoners (2026); 4,570 huishoudens averaging 1.6 (2025), 2,670 eenpersoonshuishoudens at 58 percent; ages 675 (0 to 15, 9.3 percent), 820 (15 to 25, 11 percent), 3,105 (25 to 45, 43 percent), 1,655 (45 to 65, 23 percent), 1,010 (65+, 14 percent); 35 hectare total, 33 land; bevolkingsdichtheid 22,424 per km2 (2025); woningvoorraad 4,470 (2025); average WOZ 646,000 euro (2025); 2,906 huurwoningen (65 percent) and 1,564 koopwoningen (35 percent); average income 55,800 euro (2024); 3 buurten: Helmersbuurt-Oost, WG-terrein, Cremerbuurt-Oost.', url: 'https://allecijfers.nl/wijk/helmersbuurt-amsterdam/' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any statement that De Kolenkit has improved or declined since 2009. Nothing published that was read gives the extent of the replacement, a 2009 population, or current values for the 2009 indicators, so no comparison across that boundary is drawn anywhere on the page.',
      'The February 2009 label repeated as a current description. It is quoted with its date and its named source in order to be argued against.',
      'A count of homes demolished or built in the renewal programme. No source read gives one.',
      'Any district density or share computed from the 2022 district population against 2025 or 2026 wijk figures. Mixing vintages is the Apeldoorn page\'s argument.',
      'A test of the entry\'s claim that West has the highest density in the municipality. Verifying it would need every district measured on the same basis in the same year, and the district entries do not provide that.',
      'A district average of any kind from two wijken. A partial average is not an average.',
      'Figures for the Spaarndammerbuurt, Staatsliedenbuurt, Frederik Hendrikbuurt, Da Costabuurt, Kinkerbuurt, Van Lennepbuurt, Westerpark, Landlust, Erasmuspark, Overtoomse Sluis, Vondelbuurt or Sloterdijk. They are named and given no numbers.',
      'Anything the Amsterdam city page owns, including the doorstroomtoets rates, the basisschool counts and the 2055 district projections.'
    ]
  }
};
