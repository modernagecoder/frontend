'use strict';
// Kralingen-Crooswijk: 54,856 residents, 6,830 of them in higher education,
// the highest student share and the highest average income of the Rotterdam
// districts measured.
// Spine: the most visible feature of a place gets credited with its
// statistics, and here it is the one thing pushing the other way.

module.exports = {
  slug: 'coding-classes-in-kralingen-crooswijk',
  code: 'krc',
  accent: '#3F3268',
  accentRationale: 'Kralingen-Crooswijk: a deep indigo off the Kralingse Plas at dusk, taken from a low-chroma band the solver had left untouched and clearly apart from the dock green, brick red, river purple, olive and polder green on the other five Rotterdam district pages',
  pageType: 'district',
  place: {
    name: 'Kralingen-Crooswijk',
    eyebrow: 'Kralingen-Crooswijk, Rotterdam',
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
  routeLabel: 'Kralingen-Crooswijk, Rotterdam, Netherlands',
  title: 'Coding Classes in Kralingen-Crooswijk | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Kralingen-Crooswijk, Rotterdam, for ages 6 to 67, from Rubroek to De Esch. The first lesson is free.',
  ogDescription: 'Live online coding, Python and AI for families in Kralingen-Crooswijk, on a page about why the most visible group is rarely the one doing the work.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'data-science-complete-masterclass-college',
  verifiedOn: '9 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Kralingen-Crooswijk Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the eight buurten of Kralingen-Crooswijk, taught in English.'
  },

  h1: 'Coding classes in Kralingen-Crooswijk, the district with the most students and, awkwardly, the highest incomes',
  capsuleQ: 'What are the best coding classes in Kralingen-Crooswijk?',
  capsule: 'Coding classes in Kralingen-Crooswijk reach 54,856 residents (1 January 2026) on 1,042 hectares of land, in 32,675 households of which 19,895 hold one person. 4,850 residents are enrolled at university and 1,980 in applied higher education, 12.5 percent of everybody, the highest student share of the six Rotterdam districts in this series. It also has the highest average income of the six, 35,000 euro. Whatever explains that, it is not the students, and noticing why is worth more than the number. Modern Age Coders teaches live online in English from Rubroek to De Esch, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Kralingen-Crooswijk has more students than any other Rotterdam district measured here, 6,830 of them, and the highest average income, 35,000 euro. Point at the students to explain the district and you have pointed at the one group that, on any ordinary view of what a student earns, pulls that average downwards. The most visible thing about a place is almost never what its statistics are made of, and it is almost always the first thing anybody reaches for.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Kralingen-Crooswijk.',

  picks: {
    eyebrow: 'Course picks for Kralingen-Crooswijk',
    h2: 'Four courses for a district where one in eight residents is a student',
    intro: 'A groep 5 child in Rubroek who wants to build a website rather than look at one, a teenager in Oud Crooswijk who has decided the interface is the interesting part, one of the 4,850 university students here who needs data work to be a skill rather than a module, and an adult in Kralingen Oost automating a report by hand every month: four doors, and the first hour of each is free.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Real typed Python, drawings that follow orders and a first program that finds a rule, taught in English to the groep 5 to 8 child in any of the eight buurten.' },
      { course: 'react-for-teens-complete-masterclass', band: 'Ages 13 to 18', note: 'Components, state and an interface that works on a phone, for the teenager who wants what they build to be usable by somebody else.' },
      { course: 'data-science-complete-masterclass-college', band: 'College and adult', note: 'Python, pandas and the habit of asking what a pattern is actually made of, for the student who will be handed datasets for a working lifetime.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults', note: 'Python that gathers, cleans, checks and reports on its own schedule, for anybody rebuilding the same spreadsheet every month.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Kralingen-Crooswijk today',
      h2: 'Fifty-five thousand people, and a wood among the neighbourhoods',
      intro: 'Kralingen-Crooswijk holds 54,856 residents across 1,277 hectares, of which 1,042 are land and 235 water, at a published 5,364 people to the square kilometre. Its eight buurten include the Kralingse Bos, which is largely wood and lake rather than housing, and the district runs from nineteenth-century Crooswijk out to the campus ground at De Esch.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Eight buurten, one of them mostly trees', p: 'Nieuw Crooswijk, the Kralingse Bos, Oud Crooswijk, Kralingen West, Rubroek, Kralingen Oost, Struisenburg and De Esch. The Bos is a wood and a lake with very little housing in it, which is worth knowing before anybody divides a district figure by eight and expects eight comparable places.' },
          { h3: 'The most single-person district measured', p: '19,895 of the 32,675 households hold one person, 61 percent, level with the city centre and the highest here. Households average 1.7 people. 21,231 of the 28,691 dwellings are rented, 74 percent, at an average value of 395,000 euro.' },
          { h3: 'An age profile with a bulge in the middle', p: '11,355 residents are between fifteen and twenty-five, 21 percent, against just 6,730 under fifteen, 12 percent. 17,350 are between twenty-five and forty-five. The bands are of different widths, which is the argument of the IJsselmonde page in this series and is not reopened here.' }
        ] },
        { kind: 'spec', title: 'The number this page is about', p: '4,850 residents are enrolled at university level and 1,980 in applied higher education, 6,830 people, or 12.5 percent of the district. That is the highest student share of the six Rotterdam districts this series has measured, and by a wide margin: the next is Delfshaven at 7.2 percent. The district also reports the highest average income of the six, 35,000 euro per resident for 2024. Those two facts sit together uncomfortably, and the discomfort is the point.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Student share and average income, across five districts',
      intro: 'Five of the six Rotterdam districts in this series publish both a count of residents in higher education and an average income. Set them side by side and they rise together, which is the reverse of what the obvious explanation predicts.',
      body: [
        { kind: 'table', caption: 'Students and income, ordered by student share', head: ['District', 'Residents in higher education', 'As a share of residents', 'Average income per resident'], rows: [
          ['Kralingen-Crooswijk', '6,830, of which 4,850 at university', '12.5 percent', '35,000 euro, the highest here'],
          ['Delfshaven', '5,510, of which 2,910 at university', '7.2 percent', '30,100 euro'],
          ['Feijenoord', '3,720, of which 1,510 at university', '4.6 percent', '29,200 euro'],
          ['Charlois', '3,000, of which 1,030 at university', '4.2 percent', '26,400 euro'],
          ['IJsselmonde', '1,800, of which 460 at university', '2.8 percent', '27,800 euro'],
          ['The shape of it', 'more students', 'goes with', 'higher average income, not lower']
        ] },
        { kind: 'p', text: 'The ordering agrees on four of the five and swaps only Charlois and IJsselmonde. Whatever is producing that, it cannot be the students themselves acting on the average, because that mechanism predicts the opposite direction. This page notes the pattern, notes that the obvious explanation has it backwards, and stops there, because separating the two would need income published by student status and no such breakdown was read.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, its year, and the explanation not offered',
      intro: 'One district row in full, two columns from four others, and a careful account of what the comparison does and does not establish.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Kralingen-Crooswijk', p: '54,856 residents (2026); 32,675 households averaging 1.7 (2025), 19,895 single-person at 61 percent; ages 6,730 under fifteen at 12 percent, 11,355 at 21 percent, 17,350 at 32 percent, 10,990 at 20 percent and 8,405 at 15 percent; 1,277 hectares total, 1,042 land and 235 water; density 5,364; 28,691 dwellings; average value 395,000 euro; 21,231 rented at 74 percent and 7,460 owned at 26; income 35,000 euro (2024); 4,850 residents at university level and 1,980 in applied higher education; 16 primary establishments with 3,850 pupils and 6 secondary with 3,408; eight buurten.' },
          { h3: 'The four comparison districts', p: 'Two columns only are taken from each: residents in higher education and average income. Delfshaven 5,510 and 30,100 euro. Feijenoord 3,720 and 29,200. Charlois 3,000 and 26,400. IJsselmonde 1,800 and 27,800. Everything else about those four belongs to their own pages in this series.' },
          { h3: 'What the student figures count', p: 'They count residents by what they are enrolled in, wherever they study. They are not counts of people studying at institutions inside the boundary, and they are never added to the 3,850 primary and 3,408 secondary pupils taught at establishments here.' },
          { h3: 'What the comparison establishes', p: 'That across five districts the student share and the average income move together, and that the ordering agrees on four of the five. That is all. It is a description of five numbers next to five other numbers, and five is a small number of places, which the Feijenoord page in this series takes up properly.' },
          { h3: 'What it does not establish', p: 'Nothing about why. No claim that students raise incomes, which would be strange, and no claim about what does. Settling that would need income published separately for students and non-students in each district, and no such breakdown was read anywhere for this page.' }
        ] },
        { kind: 'p', text: 'There is no relationship between Modern Age Coders and this gebied, the city, the university or any school named, and none is implied. Figures quoted come from the statistics office page for each named wijk. The student shares of 12.5, 7.2, 4.6, 4.2 and 2.8 percent are worked out here from published counts and populations.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The most obvious explanation, pointing the wrong way',
      intro: 'A district defined in most people minds by one thing, a statistic that thing cannot account for, and the discipline of stopping when you notice.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Write down the explanation you reached for', p: 'A district with 6,830 students has a high student share and an average income of 35,000 euro. The reflex is to connect them, and the connection almost everybody forms is that the students explain something. Write the sentence out before testing it, because unwritten explanations are the ones that survive.' },
          { h3: '2. Check which way it pushes', p: 'A large group with low earnings, added to a population, pulls an average income down rather than up. So the reflex explanation predicts this district should sit low, and it sits highest of the six. The explanation is not merely unsupported; it predicts the reverse of what is there.' },
          { h3: '3. Do not replace it with another guess', p: 'The tempting next move is a better story, about the kind of neighbourhood a university sits in, or about who else lives nearby. Any of those could be right. None of them is in the data on this page, and swapping one unsupported explanation for a more sophisticated unsupported explanation is not progress.' }
        ] },
        { kind: 'table', caption: 'What survives the check and what does not', head: ['Statement', 'Status', 'Why', 'What would settle it'], rows: [
          ['The district has 6,830 residents in higher education', 'established', 'a published count', 'nothing further'],
          ['It has the highest average income of the six measured', 'established', 'a published figure, compared with five others', 'nothing further'],
          ['Student share and income rise together across five districts', 'described', 'the orderings agree on four of five', 'more districts, which the Feijenoord page argues'],
          ['The students explain the high income', 'contradicted', 'the mechanism predicts the opposite direction', 'income split by student status'],
          ['Something else explains it', 'untested', 'no candidate was measured here', 'the same breakdown, plus a reason to prefer one']
        ] },
        { kind: 'callout', h3: 'The most visible feature of a place gets credited with its statistics', p: 'Every dataset has a headline characteristic, the thing anybody would name if asked to describe the row in five words. A university district. A port city. A retirement town. A young team. An enterprise account. That characteristic is the first thing reached for whenever a number attached to the row needs explaining, and the reaching happens so fast that it usually skips the step of asking which direction the proposed cause would push. Here it takes one sentence to notice: a large population of students, being a group with low earnings, lowers an average income rather than raising it, so it cannot be the reason this district sits at the top. The interesting part is what to do next, and the honest answer is often nothing. The temptation is to reach immediately for a second explanation, better dressed, about the sort of place a campus tends to sit in or the kind of housing built around it, and to feel that the analysis has advanced. It has not. Trading a naive story for a sophisticated one, with no more evidence behind either, is the most comfortable way to be wrong, because the sophisticated version is much harder for anybody to challenge. The finding worth writing down is the negative one: the obvious cause is ruled out by its own direction, and what remains is a question rather than an answer. Reporting a question that specific is a genuine result, and a great deal more useful than a plausible paragraph.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for the explanation that arrives first',
      intro: 'The loudest customer segment, the newest feature, the biggest region, the most recent release: whatever is most visible gets blamed and credited for everything measured alongside it. Practised on a district whose defining feature pushes its headline figure the wrong way.',
      body: [
        { kind: 'table', caption: 'Testing an explanation before adopting it', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Write the reflex down', 'State the explanation you reached for, in one sentence, before testing it', 'An assumption that never becomes examinable', 'Something specific enough to be wrong'],
          ['Check the direction', 'Ask which way the proposed cause would push the number', 'A story that contradicts itself unnoticed', 'Often, an immediate elimination'],
          ['Separate ruling out from explaining', 'Treat eliminating a cause as a finished result on its own', 'A vacuum filled by the next guess', 'A published negative, which is real work'],
          ['Resist the better story', 'Do not swap one untested explanation for a more sophisticated one', 'Confidence rising while evidence stays flat', 'Honest uncertainty, stated once'],
          ['Name the missing breakdown', 'Say exactly which data would settle it', 'A question nobody can act on', 'A costed next step for whoever wants the answer']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'The tallest child in the class is not why the class average went up this year. The children work out what actually moved it, and discover that the most noticeable thing in a group is rarely the thing that changed.' },
          { h3: 'For teenagers', p: 'The five districts in Python, with a function that takes a proposed cause and asks the user which direction it pushes before it will draw anything. The stretch: write the paragraph that explains the pattern using the students, then annotate every sentence in it that the data does not support.' },
          { h3: 'For adults', p: 'A metric at work that moved, and the explanation everybody accepted. Adults very often find the accepted cause is simply the most visible thing in the room, and that nobody checked whether it pushes the right way.' }
        ] },
        { kind: 'p', text: 'Population, household, age, area, density, dwelling, value, tenure, income, student, establishment and pupil figures for this district, and the student and income columns for the four compared with it, come from the statistics office pages for those wijken, with 2026 populations, 2025 household, housing and student figures and 2024 incomes. The student shares of 12.5, 7.2, 4.6, 4.2 and 2.8 percent are computed here from published counts and populations and are labelled as computed wherever they appear.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From the tallest child in the class to a function that asks which way a cause pushes',
    intro: 'The rung is settled in the free hour by what the learner can already do, and never by which of the eight buurten the address falls in.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Why did the average go up?', p: 'Children find out it was not the most noticeable person in the room.', courses: ['scratch-programming-complete-course', 'kids-ai-web-development-course'] },
      { band: 'Ages 11 to 13', h3: 'Which way would that push it?', p: 'Learners test the direction of an explanation before accepting it.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 14 to 18', h3: 'Ruling out is a result', p: 'Teenagers write analyses that report an eliminated cause instead of inventing a replacement.', courses: ['react-for-teens-complete-masterclass', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The explanation everybody accepted', p: 'Adults take a movement at work and test whether the agreed cause pushes the right way.', courses: ['data-science-complete-masterclass-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will explain this district by its students. Why should a teenager in Crooswijk check the direction first?',
    intro: 'Because a large low-earning group lowers an average income, and this district has the highest one here.',
    p1: 'Ask a model about a district with 6,830 students and an average income of 35,000 euro, and the students will be in the answer, because they are the most salient thing in the row and salience is what a summary is built from. The reply will connect them fluently to something. What it will not do is pause to work out that adding a large group with low earnings pushes an average down, and that the district in question sits at the top rather than the bottom. The reflex runs faster than the check, in a model and in a person.',
    p2: 'So the learner practises the check itself, which takes one sentence: which way would that cause push this number. Then they build the version that enforces it, refusing to attach an explanation to a movement until the direction has been stated. It is a small piece of discipline that eliminates a large class of confident errors. A sixteen-year-old in Struisenburg who has ruled out the obvious cause and stopped there will be the person at thirty who says the new feature cannot be why churn fell, because it launched afterwards. Models will keep supplying the salient explanation instantly. Testing its direction stays a person\'s job.',
    closer: 'The case for a child in Kralingen-Crooswijk learning to code in 2026 is therefore not about universities. It is that the most visible thing about anything gets credited with everything measured alongside it, that one question about direction disposes of a great many of those credits, and that a district full of students with the highest incomes in the comparison makes the lesson unavoidable.',
    blogAnchor: 'the case for a child writing code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes from Crooswijk out to the lake',
    intro: 'This district runs from dense nineteenth-century streets to a wood, a lake and a campus. Its households are small and mostly rented, and 61 percent of them contain one person, so quiet rooms are scarcer than they look.',
    cells: [
      { h3: 'A weekly hour that does not need a room', p: 'The lesson runs at the table in Rubroek, Kralingen West or De Esch at the same time each week, which is the only version that fits around a small flat and a full week.' },
      { h3: 'Taught in English, with the Dutch that matters kept', p: 'Groep, havo, vwo and profielkeuze stay as the school writes them; everything else is English. A child should recognise the words for their own year and their own track without translating.' },
      { h3: 'The first hour, and what comes out of it', p: 'Something real to do, watched rather than marked, which fixes a level. From the level comes a course and from the course a weekly time. Nothing about payment is raised while it happens.' },
      { h3: 'The group is a level', p: 'Five to ten learners working at one stage, assembled from wherever people at that stage happen to live. It is why a narrow level fills at all, and why the group is rarely local.' },
      { h3: 'Twice a week, on published holiday dates', p: 'About eight lessons a month. The regio Midden calendar covers Zuid-Holland and is issued well ahead, so the breaks are part of the plan rather than an interruption to it.' },
      { h3: 'A gap that changes with the Dutch clock', p: 'Three and a half hours to the teacher for part of the year and four and a half for the rest, entirely because the Netherlands changes its time and India does not. The workable hours are the same at both settings.' }
    ],
    spec: { title: 'Twice as many people aged fifteen to twenty-five as under fifteen', p: '11,355 residents are between fifteen and twenty-five and 6,730 are under fifteen, which is an unusual shape for a district and reflects the 6,830 residents in higher education. For a family with a young child it means the local pool of eleven-year-olds at any particular stage is thin, whatever the schools are doing. A group of five to ten built on ability from across the world does not depend on that pool, and the same class runs up to the age of sixty-seven for the students and adults who make up so much of this district.' }
  },

  fees: {
    h2: 'The fee, in dollars, in all eight buurten',
    intro: 'On the page rather than saved for a call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One international rate, in dollars, with no euro edition, so an address in Oud Crooswijk is charged what one in Kralingen Oost is. Nothing is paid until the free lesson has settled a course and an hour, and payment follows over WhatsApp. Pausing, switching plan and missing a week are all on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, kept as the people who left them wrote them',

  book: {
    h2: 'Send the level; the buurt is not needed',
    intro: 'The first task might be a class average that did not move for the reason everybody assumed, a function that asks which direction a cause pushes, or a metric at work whose accepted explanation nobody has ever tested.',
    success: 'Thank you. Your Kralingen-Crooswijk class request has been sent.'
  },

  faq: {
    h2: 'Kralingen-Crooswijk coding class questions',
    intro: 'The district, its eight buurten, one explanation that fails, the teaching and the terms.',
    items: [
      { q: 'Does this district have a high average income because of its students?', a: 'No, and that is the point of the page. 6,830 residents are in higher education, 12.5 percent, the highest share of the six Rotterdam districts here, and the average income is 35,000 euro, also the highest. A large group with low earnings pushes an average income down, not up, so the students cannot be the reason. What the reason is, this page does not say, because settling it would need income published separately for students and non-students and no such breakdown was read.' },
      { q: 'So what does explain it?', a: 'Nothing on this page, deliberately. Several plausible stories exist, about the kind of area a campus sits in or the housing built around it, and none of them was measured here. Replacing an explanation that fails a direction check with a more sophisticated one that has no evidence behind it is not progress, so the page reports the elimination and leaves the question open.' },
      { q: 'Which neighbourhoods are in Kralingen-Crooswijk?', a: 'Eight buurten: Nieuw Crooswijk, the Kralingse Bos, Oud Crooswijk, Kralingen West, Rubroek, Kralingen Oost, Struisenburg and De Esch. The Kralingse Bos is largely wood and lake with very little housing, so the eight are not eight comparable places and no district figure here is divided by eight.' },
      { q: 'How many students live here?', a: '4,850 residents are enrolled at university level and 1,980 in applied higher education, 6,830 in all out of 54,856 residents. Those count residents by what they study, wherever they study it, and are never added to the 3,850 primary and 3,408 secondary pupils taught at establishments inside the district.' },
      { q: 'Why are there so few children compared with teenagers and young adults?', a: '6,730 residents are under fifteen and 11,355 are between fifteen and twenty-five. Part of that is the student population and part of it is that the two bands are different widths, fifteen years against ten. What band widths do to a comparison is the argument of the IJsselmonde page in this series, and this page notes it rather than repeating it.' },
      { q: 'Is the class taught in Dutch?', a: 'The teaching is English. Four Dutch school words are kept unchanged, groep, havo, vwo and profielkeuze, because a child recognises those from their own reports and an English version would have to be converted back. There is no Dutch-language edition of any course.' },
      { q: 'What hours work for a family here?', a: 'The teacher is three and a half hours ahead under Dutch summer time and four and a half outside it, all of the movement coming from the Dutch clock. That leaves the afternoons after school, the early evenings and both weekend days open. One repeating hour is agreed at the free lesson and then stays.' },
      { q: 'Is there a Modern Age Coders classroom in Kralingen-Crooswijk?', a: 'No, and none is claimed here, elsewhere in Rotterdam or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Kralingen-Crooswijk coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Rotterdam and beyond',
    h2: 'West into the centre, south across the river, and out to the country',
    html: 'West is <a class="cg-inline-link" href="/coding-classes-in-rotterdam-centrum">Rotterdam Centrum</a>, whose page argues that a small district is mostly edge, and south across the Maas are <a class="cg-inline-link" href="/coding-classes-in-feijenoord">Feijenoord</a> and <a class="cg-inline-link" href="/coding-classes-in-ijsselmonde">IJsselmonde</a>. The city page, <a class="cg-inline-link" href="/coding-classes-in-rotterdam">coding classes in Rotterdam</a>, carries the port and all fourteen gebieden, and everything here sits inside <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. The series descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner after trained models rather than running programs should begin at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Carry on in WhatsApp'
  },

  footerHeading: 'Rotterdam and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-rotterdam', label: 'Rotterdam' },
    { href: '/coding-classes-in-ijsselmonde', label: 'IJsselmonde' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-krc .cg-hero-grid { align-items: center; gap: clamp(1.4rem, 3.4vw, 2.65rem); }
.cg-root.cg-krc .cg-hero h1 { font-weight: 600; letter-spacing: -0.0135em; line-height: 1.1; }
.cg-root.cg-krc .cg-capsule { border-left-width: 5px; border-left-style: solid; border-right: 1px solid var(--cg-accent-soft); padding-left: 1.4rem; padding-right: 1.1rem; }
.cg-root.cg-krc .cg-eyebrow { letter-spacing: 0.16em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-krc .cg-section-head h2 { max-width: 35ch; letter-spacing: -0.007em; }
.cg-root.cg-krc .cg-grid-3 { gap: clamp(1.05rem, 2.2vw, 1.7rem); }
.cg-root.cg-krc .cg-card { border-radius: 11px; }
.cg-root.cg-krc .cg-table caption { font-style: italic; letter-spacing: 0.02em; }
.cg-root.cg-krc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-krc .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Gebied Kralingen-Crooswijk, Rotterdam, Zuid-Holland: 54,856 residents (2026) on 1,277 hectares of which 1,042 land and 235 water, density 5,364; 32,675 households averaging 1.7 with 19,895 single-person at 61 percent, the highest here alongside the city centre; 6,730 residents under fifteen at 12 percent against 11,355 aged fifteen to twenty-five at 21 percent; 28,691 dwellings, 21,231 rented at 74 percent, average value 395,000 euro; income 35,000 euro (2024), the highest of the six Rotterdam districts measured; 4,850 residents at university level and 1,980 in applied higher education, 6,830 in all or 12.5 percent, the highest student share of the six; 16 primary establishments with 3,850 pupils and 6 secondary with 3,408; eight buurten, one of which, the Kralingse Bos, is largely wood and lake. Regio Midden holidays. The district page argues from salience; Rotterdam Centrum owns boundary truncation, Delfshaven counts of non-interchangeable units, Feijenoord sample size, Charlois unstated bases, IJsselmonde unequal bands, and the city page the port units argument.',
    localProject: 'The most visible feature of a place gets credited with its statistics. Kralingen-Crooswijk has 6,830 residents in higher education, 12.5 percent, the highest student share of the six Rotterdam districts measured and nearly double the next, Delfshaven at 7.2. It also reports the highest average income of the six, 35,000 euro. The reflex explanation connects the two, and it fails a one-sentence check: a large group with low earnings lowers an average income rather than raising it, so the students cannot be why this district sits at the top. Across five districts publishing both figures the student share and the income rise together, agreeing on four of the five and swapping only Charlois and IJsselmonde, which describes a pattern without explaining one. The page reports the elimination as the finding and declines to substitute a more sophisticated but equally untested story about campus neighbourhoods or housing, because trading a naive explanation for a polished one with no additional evidence is the most comfortable way to be wrong. Settling it would need income published by student status, and no such breakdown was read. Distinct from the confounded-proxy trap (Deventer), where an outside condition moves a metric over time, and from self-selection (Amsterdam-Oost), where sorting produces a group difference: here the mechanism is that salience determines which cause gets proposed, and the proposed cause is eliminated by its own direction rather than by any competing evidence.',
    requiredMentions: [
      '54,856',
      '32,675',
      '19,895',
      '28,691',
      '395,000',
      '35,000',
      '5,364',
      '6,730',
      '11,355',
      '4,850',
      '3,850',
      '3,408',
      'Struisenburg',
      'De Esch'
    ],
    sources: [
      { claim: 'Wijk Kralingen-Crooswijk, Rotterdam: 54,856 inwoners (2026); 32,675 huishoudens averaging 1.7 (2025), 19,895 eenpersoonshuishoudens at 61 percent and 12,780 meerpersoonshuishoudens at 39; ages 6,730 (0 to 15, 12 percent), 11,355 (15 to 25, 21 percent), 17,350 (25 to 45, 32 percent), 10,990 (45 to 65, 20 percent), 8,405 (65+, 15 percent); 1,277 hectare total, 1,042 land, 235 water; bevolkingsdichtheid 5,364 per km2; woningvoorraad 28,691 (2025); gemiddelde WOZ 395,000 euro (2025); 21,231 huurwoningen (74 percent) and 7,460 koopwoningen (26 percent); gemiddeld inkomen 35,000 euro (2024); studenten HBO 1,980 and WO 4,850 (2025); 16 vestigingen basisonderwijs with 3,850 leerlingen and 6 vestigingen voortgezet onderwijs with 3,408 leerlingen (2025); 8 buurten: Nieuw Crooswijk, Kralingse Bos, Oud Crooswijk, Kralingen West, Rubroek, Kralingen Oost, Struisenburg, De Esch.', url: 'https://allecijfers.nl/wijk/kralingen-crooswijk-rotterdam/' },
      { claim: 'Student counts and average incomes used for the comparison only. Delfshaven HBO 2,600 and WO 2,910, income 30,100 euro (2024), 76,590 inwoners. Feijenoord HBO 2,210 and WO 1,510, income 29,200 euro, 81,512 inwoners. Charlois HBO 1,970 and WO 1,030, income 26,400 euro, 70,932 inwoners. IJsselmonde HBO 1,340 and WO 460, income 27,800 euro, 63,475 inwoners.', url: 'https://allecijfers.nl/wijk/delfshaven-rotterdam/' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'That the student population explains the district average income. The proposed mechanism predicts the opposite direction and the page reports the elimination rather than the connection.',
      'Any alternative explanation for the income figure. Several are plausible, none was measured, and substituting a better-dressed guess is not progress.',
      'Any causal reading of the five-district pattern. It is a description of five numbers beside five others, and what five points can carry is the Feijenoord page argument.',
      'Any comparison of the 0 to 15 and 15 to 25 counts as though the bands were the same width. That is the IJsselmonde page argument and it is noted rather than repeated.',
      'Any district figure divided by eight buurten. One of the eight is largely wood and lake and the eight are not comparable places.',
      'Figures for the individual buurten. All eight are named and none was read separately.',
      'Anything the Rotterdam city page owns, including the port throughput in two units and the named secondary schools with their addresses.'
    ]
  }
};
