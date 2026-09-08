'use strict';
// Weesp: a town with city rights from 1355 that stopped being a municipality
// on 24 March 2022 and is now part of Amsterdam without being a stadsdeel.
// Spine: "part of" is not one property. Six reasonable tests of belonging to
// Amsterdam agree about the Jordaan and disagree about Weesp.

module.exports = {
  slug: 'coding-classes-in-weesp',
  code: 'wsp',
  accent: '#8B4A0F',
  accentRationale: 'Weesp: a burnt brick orange for a town that has had its own charter since 1355, the best-separated tone left in an exhausted palette, and its nearest neighbour in colour space is a page this one does not link to',
  pageType: 'district',
  place: {
    name: 'Weesp',
    eyebrow: 'Weesp, Amsterdam',
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
  routeLabel: 'Weesp, Netherlands',
  title: 'Coding Classes in Weesp | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Weesp and Driemond for ages 6 to 67, taught in English by teachers in India. The first lesson is free.',
  ogDescription: 'Live online coding, Python and AI for families in Weesp, a town that is part of Amsterdam by one test and not by five others.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'frontend-development-masterclass-for-teens',
  verifiedOn: '9 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Weesp Learners',
    description: 'Ability-placed online coding, Python, AI, web building and mathematics for children, teenagers and adults in Weesp and Driemond, taught in English.'
  },

  h1: 'Coding classes in Weesp, which is part of Amsterdam by one test and not by five others',
  capsuleQ: 'What are the best coding classes in Weesp?',
  capsule: 'Coding classes in Weesp reach a town that received city rights on 20 May 1355 and stopped being an independent municipality on 24 March 2022. It is now inside the municipality of Amsterdam, and it is not a stadsdeel; it forms a governing area with Driemond, with a status aparte and eleven directly elected members. It sits enclosed between a canal, a motorway and the Vecht, and 55 percent of the homes in its centre are owner-occupied, which is unlike anything in the city proper. Modern Age Coders teaches live online in English in Weesp and Driemond, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Is Weesp part of Amsterdam? Legally, since 24 March 2022, yes. It is also not a stadsdeel, it is not physically joined to the city, it has held a charter of its own since 1355, it is grouped for governance with a village rather than with any Amsterdam district, and it appears in none of Amsterdam\'s population figures before 2022. Six reasonable tests of belonging, one yes and five noes. Every one of those tests is the sort of thing that quietly becomes a filter in somebody\'s query, and they do not agree.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Weesp.',

  picks: {
    eyebrow: 'Course picks for Weesp',
    h2: 'Four courses for a small town with a big city attached to it on paper',
    intro: 'A groep 5 child near the Vecht who has outgrown dragging coloured blocks, a teenager in Weesp-Zuid who wants a site that works on a phone rather than a slideshow about one, a student who has met Python in one module and wants the rest of it, and an adult in Driemond who has to defend a number to somebody more senior every month: four doors, and the first hour of each is free.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python, drawings that take instructions and a first program that works out a rule, taught in English to the groep 5 to 8 child in either place.' },
      { course: 'frontend-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'HTML, CSS and JavaScript carried until a real site behaves properly on a real phone, for the teenager who wants something other people can open.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'College and adult', note: 'A model built, trained, tested and deliberately broken, for the student who would rather see the machinery than the demonstration.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Cleaning, joining and knowing what a filter actually selected, for anybody whose work involves handing a figure to someone who will act on it.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Weesp today',
      h2: 'A town of six hundred and seventy years, inside a city for four of them',
      intro: 'Willem van Beieren, count of Holland, granted Weesp city rights on 20 May 1355. On 24 March 2022 it ceased to be an independent municipality and became part of Amsterdam. The last population published for it as a municipality was 20,766, for 1 January 2022, and after that date its residents are counted inside Amsterdam. Whether that makes it part of the city depends entirely on which question you are asking.',
      body: [
        { kind: 'table', caption: 'Six reasonable tests of being part of Amsterdam', head: ['The test', 'A street in the Jordaan', 'Weesp'], rows: [
          ['Inside the municipality of Amsterdam', 'yes', 'yes, since 24 March 2022'],
          ['Governed as one of the stadsdelen', 'yes', 'no, a governing area with a status aparte, shared with Driemond'],
          ['Physically continuous with the city', 'yes', 'no, enclosed between the Amsterdam-Rijnkanaal, the A1 and the Vecht'],
          ['Holds no separate charter of its own', 'yes', 'no, city rights granted on 20 May 1355'],
          ['Grouped with other Amsterdam districts', 'yes', 'no, grouped with the village of Driemond'],
          ['Counted in Amsterdam figures before 2022', 'yes', 'no, it was a municipality in its own right']
        ] },
        { kind: 'p', text: 'The governing body is a bestuurscommissie of eleven directly elected members. The town was, and to a degree still is, an industrial place: Coenraad Johannes van Houten moved his cocoa factory here from Leiden in 1851, and one of the six buurten of its centre is still called the Bedrijventerrein Van Houten. There is a Torenfort. None of that is Amsterdam history, and all of it is now inside Amsterdam.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'A town centre and a village, and a housing pattern the city does not have',
      intro: 'Two of the area\'s wijken carry full published figures. Populations are 2026, households and housing are 2025, incomes are dated individually because they do not share a year.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Weesp Binnenstad and Zuid', p: '5,810 residents in 2,975 households averaging 1.9 people, of which 1,400 hold one person, 47 percent. 815 residents are under fifteen and 1,465 are sixty-five or over. 141 hectares total with 124 of land and 17 of water, giving 4,629 people to the square kilometre. 2,792 dwellings at an average value of 504,000 euro, of which 1,536 are owner-occupied, 55 percent. Average income 40,800 euro per resident in 2024. Six buurten: the Herensingelkwartier, Weesp Centrum, the Bedrijventerrein Van Houten, Weesp-Zuid I, Weesp-Zuid II and De Klomp.' },
          { h3: 'Driemond', p: '1,678 residents in 720 households averaging 2.4 people, the largest average on any Amsterdam page in this series, of which only 210 hold one person, 29 percent. 310 residents are under fifteen and 310 are sixty-five or over. 207 hectares total with 179 of land, giving 950 people to the square kilometre. 700 dwellings at an average value of 465,000 euro, of which 434 are owner-occupied, 62 percent. Average income 34,000 euro, and that figure is for 2023 rather than 2024. Two buurten: Dorp Driemond and the Landelijk gebied Driemond.' },
          { h3: 'A tenure pattern that marks the edge of the city', p: 'Owner-occupation is 55 percent in the Weesp centre and 62 percent in Driemond. Across the nineteen Amsterdam wijken this series has measured, every one inside the seven stadsdelen runs between 0 and 44 percent owned, with a single exception, the rural wijk of Waterland in Noord at 77 percent. High owner-occupation here is not a sign of wealth. It marks the places that are administratively Amsterdam and physically something else.' },
          { h3: 'What is not on this page', p: 'Weesp-Noordwest and Aetsveld with the Oostelijke Vechtoever are wijken of this area and carry no figures here, because none were read. The two wijken above are also not the old municipality: they hold 7,488 residents between them in 2026, against 20,766 for the municipality of Weesp in 2022, and Driemond was never part of that municipality at all. Those two numbers are not two points on one line and are never treated as such.' }
        ] },
        { kind: 'spec', title: 'What the class asks for', p: 'A level, and nothing else. A learner in Dorp Driemond and a learner in the Herensingelkwartier work in the same group when they are at the same stage and in different groups when they are not. Whether their address counts as Amsterdam, on any of the six tests above, never comes up, because a live online class has no reason to care and no way to find out.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, its year, and one address that no longer exists',
      intro: 'A town entry, two wijk pages, and a small piece of evidence found while looking for a third.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Weesp, from its entry', p: '20.766 inwoners (1 januari 2022, bron: CBS); op 20 mei 1355 verleende Willem van Beieren, de graaf van Holland, stadsrechten aan Weesp; per 24 maart 2022 is Weesp niet langer een zelfstandige gemeente, maar maakt het deel uit van de gemeente Amsterdam, daar vormt Weesp samen met de kern Driemond een bestuurscommissiegebied met een status aparte; the governing body is een bestuurscommissie van elf direct gekozen leden; de plaats is ingesloten tussen het Amsterdam-Rijnkanaal, de autosnelweg A1 en de Vecht; in 1851 verplaatste Coenraad Johannes van Houten de productie van zijn cacaofabriek vanuit Leiden naar Weesp.' },
          { h3: 'Weesp Binnenstad and Zuid', p: '5,810 residents (2026); 2,975 households averaging 1.9 (2025), 1,400 single-person at 47 percent; ages 815 under fifteen at 14 percent, 605 at 10 percent, 1,370 at 24 percent, 1,555 at 27 percent and 1,465 at 25 percent; 141 hectares total, 124 land and 17 water; density 4,629; 2,792 dwellings; average value 504,000 euro; 1,536 owner-occupied at 55 percent and 1,256 rented at 45; average income 40,800 euro (2024); six buurten.' },
          { h3: 'Driemond', p: '1,678 residents (2026); 720 households averaging 2.4 (2025), 210 single-person at 29 percent; ages 310 at 18 percent, 185 at 11 percent, 375 at 22 percent, 475 at 28 percent and 310 at 18 percent; 207 hectares total, 179 land and 28 water; density 950; 700 dwellings; average value 465,000 euro; 434 owner-occupied at 62 percent and 266 rented at 38; average income 34,000 euro, published for 2023 and not 2024; two buurten.' },
          { h3: 'An address that reports its own absence', p: 'The national statistics site keeps a page for every Dutch municipality. Its address for the municipality of Weesp now returns a notice saying the address does not exist any more, and points at an Amsterdam page instead. That is not a broken link. It is the data infrastructure recording, correctly, that the reporting unit was dissolved, and it is the plainest available demonstration of what the merger did to any series about this town.' },
          { h3: 'What this page will not do', p: 'It does not compare the 20,766 residents of the old municipality with any figure on this page. The two wijken measured here were never the whole of it, Driemond was never inside it, and the dates are four years apart. What a boundary change does to a population series is the argument of the Alkmaar page in this series, and this page does not borrow it.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the bestuurscommissie, the city of Amsterdam or any school named here and claims none. The two-wijk total of 7,488, the tenure comparison across the nineteen Amsterdam wijken measured in this series and the six tests in the table above are this page adding and sorting published facts, and are labelled as such where they appear.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Six tests of belonging, and only one of them says yes',
      intro: 'A category that everybody uses, a town that satisfies one of its criteria, and a filter that has been quietly choosing between them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Write the criteria out separately', p: 'Nobody defines part of Amsterdam before using it, because in almost every case the tests agree and there is nothing to define. Legal boundary, physical continuity, governance, history, statistical treatment: for a street in the Jordaan all five say yes at once. The definition stays unwritten precisely because it is never contested.' },
          { h3: '2. Find the case that separates them', p: 'Weesp separates them. It is inside the municipality and outside the stadsdeel structure. It is administratively attached and physically detached. It has been a city in its own right since 1355 and has been part of this one since 2022. One test says yes and five say no, and every one of the six is a reasonable thing to have meant.' },
          { h3: '3. Work out which one your filter picked', p: 'Then go back to whatever selects Amsterdam in your data and find out which criterion it encoded. Usually it is the legal boundary, because that is the field that exists. Whether that is the one you meant depends on the question, and the moment somebody asks about travel time, or about local government, or about anything before 2022, it is the wrong one.' }
        ] },
        { kind: 'table', caption: 'What a filter on Amsterdam actually returns', head: ['If the filter means', 'Weesp is', 'The question it answers', 'The question it silently gets wrong'], rows: [
          ['inside the municipal boundary', 'included', 'anything about local taxation or the register', 'anything about the built-up city'],
          ['one of the seven stadsdelen', 'excluded', 'anything about district governance', 'anything about who lives in the municipality'],
          ['physically part of the urban area', 'excluded', 'travel, catchment, infrastructure', 'anything legal or administrative'],
          ['the city as it was before 2022', 'excluded', 'any series that crosses that date', 'anything about the city as it is now'],
          ['the eight areas this series covers', 'included', 'this cluster of pages', 'nothing, because the criterion is stated']
        ] },
        { kind: 'callout', h3: 'A category name is several tests that usually agree, and nobody writes them down until one disagrees', p: 'Every important word in a dataset is like this. An active customer might mean one who has bought recently, or logged in recently, or has an unexpired contract, or has not asked to leave, and for the overwhelming majority of customers all four are true together, which is why the definition is never written down and why four teams can each hold a different one without anybody noticing. An employee might mean somebody on payroll, in the HR system, holding a badge, or with an email address, and for almost everybody those coincide. Our region, the London office, a returning user, a completed order, a duplicate record: every one is a bundle. The bundle holds until an edge case arrives, and the edge case is always something like Weesp, a thing that has been sitting there for six hundred years quietly satisfying some of the criteria and not others. When that happens the argument that follows is never really about the edge case. It is about the fact that the category was never defined, and everybody discovers simultaneously that they had been assuming a different one of its components was the important one. The habit that prevents it is unglamorous and cheap. When a category carries weight, write its criteria down as separate fields, store them separately, and let each query name the one it means. Then the edge case is a row with an unusual pattern of flags rather than a meeting.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for a category nobody has defined',
      intro: 'Active customers, employees, regions, duplicates, completed orders: all of them are bundles of criteria that agree until they do not. Practised on a town that answers one of six tests of belonging to the city it belongs to.',
      body: [
        { kind: 'table', caption: 'Turning a word into something a query can mean', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['List the tests', 'Write down every criterion somebody might have meant by the word', 'A definition that exists only in habit', 'A shared vocabulary before the argument'],
          ['Store them apart', 'Keep each criterion as its own field rather than one label', 'Four teams holding four definitions', 'Queries that can say which one they want'],
          ['Hunt for the disagreement', 'Look for the rows where the criteria do not all agree', 'An edge case discovered by a customer', 'The cases that will cause the argument, in advance'],
          ['Name the criterion in the query', 'State which test a filter encodes, in the query or beside it', 'A silent choice inherited by every later report', 'A number somebody can check the meaning of'],
          ['Re-test after any change', 'When a boundary, contract or rule changes, re-run the criteria', 'A definition that was right until a date', 'A category that survives its own history']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'What makes something a sandwich? The class writes down the tests, then meets the things that pass some and fail others, and discovers that the disagreement is about the rules rather than about the food.' },
          { h3: 'For teenagers', p: 'A dataset where belongs to Amsterdam is stored as six separate boolean fields rather than one, and a filter that must name which it uses. The stretch: write the query that returns Weesp and the query that excludes it, and label each with the question it honestly answers.' },
          { h3: 'For adults', p: 'A real category at work that two teams count differently. Adults nearly always find the criteria were never written down, that each team picked the one their system happened to store, and that both have been right all along.' }
        ] },
        { kind: 'p', text: 'The town population, city rights, merger date, governing arrangement, physical setting and the Van Houten factory come from the entry for Weesp, with the population dated 1 January 2022. The wijk populations, households, ages, areas, densities, dwellings, values, tenure and incomes come from the national statistics office pages for Weesp Binnenstad and Zuid and for Driemond, with 2026 populations, 2025 household and housing figures, and incomes dated 2024 and 2023 respectively. The dissolved municipality address was observed on that same site. The two-wijk total of 7,488 and the tenure comparison across the wijken this series has measured are this page adding and sorting published figures.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From what counts as a sandwich to a filter that names its own criterion',
    intro: 'The starting rung comes out of the free hour and what the learner can already do. Which side of any administrative line the address falls on is not asked.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Is that a sandwich?', p: 'Children write the rules, then meet the things that break them.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'One word, several tests', p: 'Learners take a category apart into the separate questions hiding inside it.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 14 to 18', h3: 'Filters that declare what they mean', p: 'Teenagers store criteria as separate fields and write queries that must choose one.', courses: ['frontend-development-masterclass-for-teens', 'mysql-mastery-for-teens'] },
      { band: 'Ages 18 to 67', h3: 'The category two teams count differently', p: 'Adults take a disputed definition at work and find the criteria nobody wrote down.', courses: ['ai-ml-masterclass-complete-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an AI whether Weesp is in Amsterdam and it will answer. Why should a teenager here ask it to pick a test first?',
    intro: 'Because there are six defensible answers and the question did not say which one it wanted.',
    p1: 'A model asked whether Weesp is part of Amsterdam will say yes, and add that it merged in 2022. That is correct on the criterion it chose, which is the legal one, because that is the criterion most of the text it has read was using. It is the wrong answer for somebody planning a journey, for somebody looking at district governance, for somebody reading a series that crosses 2022, and for anybody who thinks the seven stadsdelen and this place are the same kind of unit. Nothing in the question flagged which was wanted, and nothing in the answer flagged which was given.',
    p2: 'So the learner practises making the criterion explicit before asking, and then builds the version that enforces it: six fields instead of one label, and a filter that will not run until it is told which test it means. That is very little code around a habit that decides whether a whole analysis is about what somebody thought it was about. A fourteen-year-old in Weesp who has taken belonging apart into six tests will be the person at thirty who asks what counts as an active customer before agreeing the number has fallen. Models will keep answering the question as asked. Noticing that the question was underspecified stays a person\'s job.',
    closer: 'The case for a child in Weesp learning to code in 2026 is therefore nothing to do with municipal boundaries. It is that the words carrying the most weight in adult working life are almost never defined, that they hold up only because their criteria usually agree, and that living somewhere which passes one test out of six makes that impossible to overlook.',
    blogAnchor: 'whether coding is still worth a child\'s time in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a town that is not on the metro',
    intro: 'Weesp has a station and a motorway and roughly nothing else connecting it to the city it belongs to. For a weekly class that matters more than any of the administrative questions on this page.',
    cells: [
      { h3: 'The journey is the part that gets cancelled', p: 'A class in the centre of Amsterdam is a train each way on a winter evening, and it is the leg that fails first when a week gets busy. This one happens at the kitchen table, at an hour that repeats.' },
      { h3: 'Lessons in English, school words in Dutch', p: 'The teaching is English throughout. Groep, havo, vwo and profielkeuze are left alone, because those four are printed on the paperwork a child carries home and swapping them for English adds a step nobody needs.' },
      { h3: 'Nothing is charged for the first one', p: 'The teacher sets a real task, watches how it goes, and from that names a level and a course. A weekly hour is agreed at the end. No card details are taken and none are asked for.' },
      { h3: 'Five to ten learners, chosen by level', p: 'Groups are built from what people can do. In a town of this size that is the only way a specific level fills at all, and it is why the group is drawn from far beyond Weesp.' },
      { h3: 'The regio Noord holiday block', p: 'Two lessons a week, usually eight in a month. Noord-Holland sits in regio Noord for school holidays, so the weeks that will disappear are known well in advance and are built into the plan.' },
      { h3: 'Teaching from India, on a shifting offset', p: 'The teacher is ahead by three and a half hours for part of the year and four and a half for the rest, because the Dutch clock changes and the Indian one has not. The workable hours are the same either way.' }
    ],
    spec: { title: 'A quarter of the town centre is sixty-five or over', p: '1,465 of the 5,810 residents of Weesp Binnenstad and Zuid are sixty-five or older, 25 percent, against 815 under fifteen. Driemond has 310 in each of those bands out of 1,678. A place with this shape has enough children to fill a school and nowhere near enough to fill a group of five to ten at one specific level in one specific subject, which is arithmetic and no reflection on anybody local. It also has a large number of adults with time, and the classes here run to sixty-seven.' }
  },

  fees: {
    h2: 'The fee, in dollars, in Weesp and in Driemond',
    intro: 'Set out here instead of held back for a phone call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One international rate exists, quoted in dollars, and there is no euro edition, so an address in Dorp Driemond sees exactly what one on the Herensingel sees. Nothing is paid before the free lesson has fixed a course and an hour, and payment is arranged over WhatsApp afterwards. Pausing, changing plan and missing a week are described on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, exactly as the people who left them typed them',

  book: {
    h2: 'Tell us the level; the administrative status is not required',
    intro: 'The first task might be an argument about what counts as a sandwich, a filter that refuses to run until it is told which test it means, or a category at work that two teams have been counting differently for years.',
    success: 'Thank you. Your Weesp class request has been sent.'
  },

  faq: {
    h2: 'Weesp coding class questions',
    intro: 'The town, its village, six tests of belonging, the teaching and the terms.',
    items: [
      { q: 'Is Weesp part of Amsterdam or not?', a: 'Both, depending on the test. Since 24 March 2022 it is legally inside the municipality of Amsterdam. It is not one of the stadsdelen: it forms a governing area with the village of Driemond, with a status aparte and a bestuurscommissie of eleven directly elected members. It is not physically joined to the city, being enclosed between the Amsterdam-Rijnkanaal, the A1 and the Vecht. It has held city rights of its own since 20 May 1355. And it appears in none of Amsterdam\'s figures before 2022. One yes and five noes, all of them reasonable readings.' },
      { q: 'What happened to Weesp on 24 March 2022?', a: 'It stopped being an independent municipality and became part of the municipality of Amsterdam. The last population published for it in its own right was 20,766, for 1 January 2022. One practical consequence is visible on the national statistics site, whose address for the municipality of Weesp now reports that it no longer exists and points to an Amsterdam page instead. The reporting unit was dissolved along with the municipality.' },
      { q: 'Why is Driemond on a page about Weesp?', a: 'Because the two are one governing area. Weesp forms a bestuurscommissiegebied together with the kern Driemond, and the eleven directly elected members serve both. Driemond has 1,678 residents in 720 households averaging 2.4 people, the largest average household on any Amsterdam page in this series, across two buurten, Dorp Driemond and the Landelijk gebied Driemond.' },
      { q: 'Are these figures for the old municipality of Weesp?', a: 'No, and the two should never be added or compared. The wijken with published figures here, Weesp Binnenstad and Zuid at 5,810 residents and Driemond at 1,678, come to 7,488 for 2026. The municipality of Weesp held 20,766 in 2022. Those two numbers cover different ground four years apart, Driemond was never inside the old municipality, and Weesp-Noordwest and Aetsveld carry no figures on this page at all.' },
      { q: 'Why is owner-occupation so much higher here than in the city?', a: '55 percent of the homes in Weesp Binnenstad and Zuid are owner-occupied, and 62 percent in Driemond. Across the nineteen Amsterdam wijken this series has measured, everything inside the seven stadsdelen runs between 0 and 44 percent, the only exception being the rural wijk of Waterland in Noord at 77 percent. That pattern marks the parts of the municipality that are not urban Amsterdam rather than the parts that are wealthy.' },
      { q: 'Is the class taught in Dutch?', a: 'No, it runs in English from start to finish. Four Dutch school words are deliberately kept, groep, havo, vwo and profielkeuze, because a child already knows them from their own paperwork and an English translation would only have to be turned back. No course is offered in a Dutch edition.' },
      { q: 'What hours work for a family in Weesp?', a: 'The teacher is three and a half hours ahead for part of the year and four and a half for the rest, all of that caused by the Dutch clock changing rather than the Indian one. In practice the afternoons after school, the early evenings and both weekend days are all open, and one repeating hour is agreed during the free lesson and then kept.' },
      { q: 'Is there a Modern Age Coders classroom in Weesp?', a: 'No, and none is claimed in Weesp, in Driemond, elsewhere in Amsterdam or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Weesp coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Amsterdam and beyond',
    h2: 'West into the city, and out to the province',
    html: 'West of here, past Diemen, the city proper begins. <a class="cg-inline-link" href="/coding-classes-in-amsterdam-zuidoost">Amsterdam-Zuidoost</a> is the nearest of the seven stadsdelen and its page finds cheaper homes beside better-off residents; <a class="cg-inline-link" href="/coding-classes-in-amsterdam-oost">Amsterdam-Oost</a> lies beyond it, and <a class="cg-inline-link" href="/coding-classes-in-amsterdam-centrum">Amsterdam-Centrum</a> further west again. The city page, <a class="cg-inline-link" href="/coding-classes-in-amsterdam">coding classes in Amsterdam</a>, carries the picture for all eight areas, and the whole city sits inside <a class="cg-inline-link" href="/coding-classes-in-noord-holland">Noord-Holland</a>. Everything descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner who wants trained models rather than running programs should begin at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Take this to WhatsApp'
  },

  footerHeading: 'Amsterdam and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-amsterdam', label: 'Amsterdam' },
    { href: '/coding-classes-in-amsterdam-zuidoost', label: 'Amsterdam-Zuidoost' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-wsp .cg-hero-grid { align-items: start; gap: clamp(1.25rem, 2.9vw, 2.3rem); }
.cg-root.cg-wsp .cg-hero h1 { font-weight: 400; letter-spacing: -0.004em; line-height: 1.18; }
.cg-root.cg-wsp .cg-capsule { border-left-width: 2px; border-left-style: dashed; border-top: 2px dashed var(--cg-accent-soft); padding-left: 1.1rem; padding-top: 0.85rem; }
.cg-root.cg-wsp .cg-eyebrow { letter-spacing: 0.21em; font-weight: 500; text-transform: uppercase; }
.cg-root.cg-wsp .cg-section-head h2 { max-width: 29ch; }
.cg-root.cg-wsp .cg-grid-3 { gap: clamp(1.35rem, 2.8vw, 2.2rem); }
.cg-root.cg-wsp .cg-card { border-radius: 1px; border-bottom: 4px solid var(--cg-accent-soft); }
.cg-root.cg-wsp .cg-table caption { letter-spacing: 0.06em; font-weight: 500; }
.cg-root.cg-wsp .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wsp .cg-ladder-col { border-right: 3px solid var(--cg-accent-soft); padding-right: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'Weesp, an area of the municipality of Amsterdam, Noord-Holland: city rights granted 20 May 1355 by Willem van Beieren, count of Holland; an independent municipality until 24 March 2022, when it became part of Amsterdam, where it forms a bestuurscommissiegebied with the kern Driemond with a status aparte and a bestuurscommissie of eleven directly elected members; the last population published for it as a municipality was 20,766 for 1 January 2022; enclosed between the Amsterdam-Rijnkanaal, the A1 and the Vecht; Van Houten moved cocoa production here from Leiden in 1851. Two wijken carry full figures: Weesp Binnenstad/Zuid 5,810 residents, 2,975 households at 1.9, 2,792 dwellings 55 percent owner-occupied, WOZ 504,000 euro, income 40,800 euro, density 4,629; Driemond 1,678 residents, 720 households at 2.4, 700 dwellings 62 percent owner-occupied, WOZ 465,000 euro, income 34,000 euro for 2023, density 950. Regio Noord holidays. It is the only one of the eight areas in this series that is not a stadsdeel. The page argues from a category whose criteria disagree; Amsterdam-Centrum owns aggregates over ground, Noord the rounding bound, Oost self-selection, Zuid the two registers, West the identifier that outlived its referent, Nieuw-West settings versus measurements, Zuidoost one column holding two kinds of object.',
    localProject: 'A category name is several tests that usually agree, and nobody writes them down until one disagrees. Six reasonable tests of being part of Amsterdam all return yes for a street in the Jordaan and split for Weesp: inside the municipality, yes since 24 March 2022; governed as one of the stadsdelen, no, it is a bestuurscommissiegebied with a status aparte shared with Driemond; physically continuous with the city, no, it is enclosed between the Amsterdam-Rijnkanaal, the A1 and the Vecht; holds no charter of its own, no, city rights since 20 May 1355; grouped with other Amsterdam districts, no, grouped with a village; counted in Amsterdam figures before 2022, no. One yes and five noes. Any filter selecting Amsterdam encodes exactly one of those criteria, usually the legal boundary because that is the field that exists, and it silently gets the others wrong. The tenure figures corroborate the split: 55 percent owner-occupation in the Weesp centre and 62 in Driemond, against 0 to 44 percent in every stadsdeel wijk this series has measured, the sole exception being rural Waterland at 77. Distinct from the membership-uncertainty trap (Delft), where one agreed criterion leaves contested members, and from the unit-of-observation trap (Zeeland), where two row types give two rankings: here the members are perfectly clear and it is the criteria that disagree with each other about one of them. The generalisation is every load-bearing category: active customer, employee, our region, a duplicate. The page makes no comparison between the 20,766 of the old municipality and the 7,488 of the two wijken measured.',
    requiredMentions: [
      '20,766',
      '5,810',
      '2,975',
      '2,792',
      '504,000',
      '40,800',
      '1,678',
      '465,000',
      '34,000',
      '4,629',
      '7,488',
      '20 May 1355',
      'Driemond',
      'Van Houten'
    ],
    sources: [
      { claim: 'Weesp: 20.766 inwoners (1 januari 2022, bron: CBS); op 20 mei 1355 verleende Willem van Beieren, de graaf van Holland, stadsrechten aan Weesp; per 24 maart 2022 is Weesp niet langer een zelfstandige gemeente, maar maakt het deel uit van de gemeente Amsterdam, daar vormt Weesp samen met de kern Driemond een bestuurscommissiegebied met een status aparte, governed by een bestuurscommissie van elf direct gekozen leden; de plaats is ingesloten tussen het Amsterdam-Rijnkanaal, de autosnelweg A1 en de Vecht; in 1851 verplaatste Coenraad Johannes van Houten de productie van zijn cacaofabriek vanuit Leiden naar Weesp; a Torenfort is mentioned. The article gives no land and water split, no density and no distance to central Amsterdam.', url: 'https://nl.wikipedia.org/wiki/Weesp' },
      { claim: 'Wijk Weesp Binnenstad/Zuid, Amsterdam: 5,810 inwoners (2026); 2,975 huishoudens averaging 1.9 (2025), 1,400 eenpersoonshuishoudens at 47 percent and 1,575 meerpersoonshuishoudens at 53; ages 815 (0 to 15, 14 percent), 605 (15 to 25, 10 percent), 1,370 (25 to 45, 24 percent), 1,555 (45 to 65, 27 percent), 1,465 (65+, 25 percent); 141 hectare total, 124 land, 17 water (2025); bevolkingsdichtheid 4,629 per km2 (2025); woningvoorraad 2,792 (2025); average WOZ 504,000 euro (2025); 1,536 koopwoningen (55 percent) and 1,256 huurwoningen (45 percent); average income 40,800 euro (2024); 6 buurten: Herensingelkwartier, Weesp Centrum, Bedrijventerrein Van Houten, Weesp-Zuid I, Weesp-Zuid II, De Klomp.', url: 'https://allecijfers.nl/wijk/weesp-binnenstad-zuid-amsterdam/' },
      { claim: 'Wijk Driemond, Amsterdam: 1,678 inwoners (2026); 720 huishoudens averaging 2.4 (2025), 210 eenpersoonshuishoudens at 29 percent and 510 meerpersoonshuishoudens at 71; ages 310 (0 to 15, 18 percent), 185 (15 to 25, 11 percent), 375 (25 to 45, 22 percent), 475 (45 to 65, 28 percent), 310 (65+, 18 percent); 207 hectare total, 179 land, 28 water; bevolkingsdichtheid 950 per km2 (2025); woningvoorraad 700 (2025); average WOZ 465,000 euro (2025); 434 koopwoningen (62 percent) and 266 huurwoningen (38 percent); average income 34,000 euro (2023, a different year from the neighbouring wijk); 2 buurten: Landelijk gebied Driemond, Dorp Driemond.', url: 'https://allecijfers.nl/wijk/driemond-amsterdam/' },
      { claim: 'The national statistics site address for the municipality of Weesp now returns a notice that the address does not exist any more and redirects towards an Amsterdam page, the municipality having been dissolved into Amsterdam. Observed 9 September 2026.', url: 'https://allecijfers.nl/gemeente/weesp/' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any comparison between the 20,766 residents of the former municipality and the 7,488 of the two wijken measured here. The ground differs, Driemond was never inside the old municipality, and the dates are four years apart.',
      'Any account of what a boundary change does to a population series. That belongs to the Alkmaar page.',
      'A distance from Weesp to central Amsterdam. The entry gives none and none is invented.',
      'Any detail of Weesp\'s place in the Stelling van Amsterdam beyond the Torenfort the entry names.',
      'Figures for Weesp-Noordwest or for Aetsveld with the Oostelijke Vechtoever. Both are wijken of this area and neither was read.',
      'Any claim that high owner-occupation here indicates wealth. It is presented as a marker of the parts of the municipality that are not urban Amsterdam.',
      'A Weesp average of any kind built from the two wijken. They are two of at least four and do not constitute the area.',
      'Anything the Amsterdam city page owns, including the doorstroomtoets rates and the 2055 district projections.'
    ]
  }
};
