'use strict';
// Den Haag Centrum: the middle stadsdeel of The Hague, 8 wijken and 17 buurten,
// read through five full published wijk rows.
// Spine: a number is only a failure once somebody supplies the standard, and
// the standard is never in the table.

module.exports = {
  slug: 'coding-classes-in-the-hague-centrum',
  code: 'dhc',
  accent: '#3F623F',
  accentRationale: 'Den Haag Centrum: a moss green off the Hofvijver water and the edge of the Haagse Bos, far from the slate blue of the Hague city page it hangs under, and nearest to Utrecht, Amstelveen and Friesland, none of which this page links to',
  pageType: 'district',
  place: {
    name: 'Den Haag Centrum',
    eyebrow: 'Centrum, Den Haag',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'City', name: 'The Hague' },
      { type: 'AdministrativeArea', name: 'Zuid-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-netherlands', name: 'Netherlands' },
    { slug: 'coding-classes-in-the-hague', name: 'The Hague' }
  ],
  nav: [
    { label: 'The Hague', href: '/coding-classes-in-the-hague' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Den Haag Centrum, The Hague, Netherlands',
  title: 'Coding Classes in Den Haag Centrum | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Den Haag Centrum, The Hague, for ages 6 to 67, from the Archipelbuurt to the Schilderswijk. First lesson free.',
  ogDescription: 'Live online coding, Python and AI in the middle stadsdeel of The Hague, on a page about why no number tells you whether it is a problem.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'python-ai-automation-masterclass-college',
  verifiedOn: '10 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Den Haag Centrum Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults across the eight wijken of stadsdeel Centrum in The Hague, taught in English.'
  },

  h1: 'Coding classes in Den Haag Centrum, where nothing in the table says what any of these eight wijken is for',
  capsuleQ: 'What are the best coding classes in Den Haag Centrum?',
  capsule: 'Coding classes in Den Haag Centrum reach the middle stadsdeel of The Hague, 8 wijken and 17 buurten on 7.8 square kilometres. Wijk 27 Stationsbuurt holds 8,515 households averaging 1.5 people, 6,050 of them a single person, 71 percent. Wijk 29 Schildersbuurt holds 13,685 households averaging 2.2, 6,365 of them single at 47 percent. One of those pairs is a failure and the other a success, and which is which reverses depending on a standard that appears in no column of the table. Modern Age Coders teaches live online in English from the Archipelbuurt to the Groente- en Fruitmarkt, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Put the two numbers side by side and the urge to grade them is immediate. A wijk where households average 1.5 people looks thin, transient, hollowed out. A wijk where they average 2.2 looks settled. But grading requires a standard, the standard has to say what a wijk is supposed to be, and no such statement exists anywhere in the statistics. Import one that values family housing and the verdicts fall one way. Import one that values a compact centre of small households near the stations and both verdicts flip, with not a single digit changed. The numbers were never the disputed part.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Den Haag Centrum.',

  picks: {
    eyebrow: 'Course picks for Den Haag Centrum',
    h2: 'Four courses for the middle of The Hague',
    intro: 'A groep 4 child off the Zuidwal who wants the computer to obey rather than entertain, a teenager in the Schilderswijk with an app half described and nothing built, a student near Hollands Spoor whose Python works until somebody else runs it, and an adult in the Archipelbuurt asked to say whether a number is good: four doors, and the first hour of each costs nothing.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python, shapes that follow instructions, and a first program judged against what it was asked to do rather than against whether it ran.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'An application carried from an empty folder to something that installs, for the teenager who has described one aloud several times and built none of it.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python that runs unattended, which means writing down what correct looks like before anything is automated.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reading a table without smuggling a verdict into it, for anybody who has to report figures that other people then act on.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Den Haag Centrum today',
      h2: 'Eight wijken, seventeen buurten, five rows read in full',
      intro: 'Stadsdeel Centrum is the middle of The Hague, 7.8 square kilometres of which 7.63 are land and 0.17 water, holding 52,793 dwellings. It is divided into 8 wijken and those into 17 buurten. The eight are the Archipelbuurt, Centrum, the Groente- en Fruitmarkt, the Schilderswijk, the Stationsbuurt, the Transvaalkwartier, the Willemspark and the Zeeheldenkwartier. The statistics office publishes a complete row for every wijk; five of the eight were read for this page and no figure below is an average of them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The five wijken read here', p: 'Wijk 28 Centrum with 21,955 residents, Wijk 29 Schildersbuurt with 30,102, the Stationsbuurt with 12,945, the Zeeheldenkwartier with 12,793 and the Archipelbuurt with 6,269, all counted at January 2026. The statistics office writes the fourth of those as Schildersbuurt; the stadsdeel and the people who live there call it the Schilderswijk.' },
          { h3: 'Households, which is where the argument runs', p: 'Wijk 28 Centrum has 13,910 households averaging 1.6 people, 8,805 of them one person alone at 63 percent. The Zeeheldenkwartier has 7,295 averaging 1.6, 4,450 single at 61. The Archipelbuurt has 1,995 single households out of a smaller total. The Stationsbuurt averages 1.5 and the Schilderswijk 2.2, and those two are the ends of the range.' },
          { h3: 'Children, the column that moves with it', p: 'Under fifteen: 9.2 percent in Wijk 28 Centrum, 11 percent in each of the Archipelbuurt, the Zeeheldenkwartier and the Stationsbuurt, and 17 percent in the Schilderswijk, where 5,105 residents are children and 15 primary establishments teach 4,476 pupils. The stadsdeel as a whole was 15 percent over sixty-five when that was last published, in 2023.' }
        ] },
        { kind: 'spec', title: 'Eight and seventeen, and why those two numbers can be checked', p: 'The buurt list adds up in front of you. The Archipelbuurt contributes one buurt of its own name. Centrum contributes four, Kortenbos, Voorhout, Uilebomen and Zuidwal. The Groente- en Fruitmarkt contributes one. The Schilderswijk contributes three, Noord, Oost and West. The Stationsbuurt contributes three, Huygenspark and the two halves of the Rivierenbuurt. The Transvaalkwartier contributes three, Midden, Noord and Zuid. The Willemspark and the Zeeheldenkwartier contribute one each. One plus four plus one plus three plus three plus three plus one plus one is seventeen, across eight wijken. Very few published figures let a reader confirm them from the same page, and it is worth noticing when one does.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'The same four numbers, graded twice, opposite results',
      intro: 'Below are four published figures and two standards a reader might apply to them. Neither standard is in the data. Both are ordinary, both are held sincerely by real people, and they disagree about every row.',
      body: [
        { kind: 'table', caption: 'Two standards, four figures, no arbiter', head: ['The published figure', 'Graded for family housing', 'Graded for a compact centre', 'What the table itself records'], rows: [
          ['Stationsbuurt households average 1.5 people', 'a failure', 'the point of the place', '1.5, carrying no adjective'],
          ['6,050 of its 8,515 households hold one person', 'the same failure restated', 'the same success restated', '71 percent'],
          ['Schilderswijk households average 2.2 people', 'the best result here', 'congestion', '2.2'],
          ['5,105 Schilderswijk residents are under fifteen', 'a district doing its job', 'pressure on 146 hectares', '17 percent'],
          ['Which standard the figures support', 'they do not', 'they do not', 'there is no such column']
        ] },
        { kind: 'p', text: 'Notice what did not happen in that table. Nobody disputed a number, nobody found an error, nobody needed better data. The disagreement is entirely upstream of the measurement, in a sentence about what a wijk is for that was never written down and therefore never examined. Whoever supplies that sentence silently decides every verdict in the column beneath it, and because it arrives unstated it is the one part of the argument nobody argues about.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Five rows in full, nothing averaged, nothing graded',
      intro: 'The published figures for each wijk read, the stadsdeel context and its year, and a plain list of what this page refuses to conclude from any of it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Wijk 28 Centrum', p: '21,955 residents (2026); 13,910 households averaging 1.6, 8,805 single-person at 63 percent; 2,015 under fifteen at 9.2 percent, 2,975 aged fifteen to twenty-five, 9,060 aged twenty-five to forty-five at 41 percent, 4,935 aged forty-five to sixty-five, 3,005 over sixty-five; 205 hectares, 198 land and 7 water; density 11,071; 13,893 dwellings; average value 375,000 euro; 2,918 owner-occupied at 21 percent; income 39,200 euro (2024); 4 primary establishments with 859 pupils and 3 secondary with 1,396; four buurten.' },
          { h3: 'Wijk 29 Schildersbuurt', p: '30,102 residents (2026); 13,685 households averaging 2.2, 6,365 single-person at 47 percent; 5,105 under fifteen at 17 percent, 4,490 aged fifteen to twenty-five, 8,260 aged twenty-five to forty-five, 7,945 aged forty-five to sixty-five, 4,305 over sixty-five; 146 hectares; density 20,774; 12,740 dwellings; average value 269,000 euro; 2,421 owner-occupied at 19 percent; income 21,600 euro (2024); 15 primary establishments with 4,476 pupils and 3 secondary with 1,939; three buurten.' },
          { h3: 'Wijk 27 Stationsbuurt', p: '12,945 residents (2026); 8,515 households averaging 1.5, 6,050 single-person at 71 percent; 1,385 under fifteen, 3,210 aged fifteen to twenty-five at 25 percent, 4,600 aged twenty-five to forty-five; 94 hectares; density 14,423, address density 7,358; 7,165 dwellings; average value 289,000 euro; 1,003 owner-occupied at 14 percent; income 29,600 euro (2024); 1 primary establishment with 318 pupils and one mbo location with 733 students; three buurten, Huygenspark, Rivierenbuurt-Noord and Rivierenbuurt-Zuid.' },
          { h3: 'Zeeheldenkwartier and Archipelbuurt', p: 'Zeeheldenkwartier: 12,793 residents (2026); 7,295 households averaging 1.6, 4,450 single at 61 percent; 81 hectares; density 15,944; 6,868 dwellings; average value 437,000 euro; 2,335 owner-occupied at 34 percent; income 41,500 euro (2024); 1 primary establishment with 137 pupils. Archipelbuurt: 6,269 residents; 3,570 households averaging 1.7, 1,995 single at 56 percent; 87 hectares; density 7,195; 3,764 dwellings; average value 658,000 euro; 2,108 owner-occupied at 56 percent; income 63,100 euro (2024); 1 primary establishment with 213 pupils.' },
          { h3: 'What was calculated on this page', p: 'Nothing. Every population, household, age, area, density, dwelling, value, tenure, income, establishment and pupil figure above is quoted as published. The only arithmetic anywhere on the page is the buurt list adding to seventeen, which is a check rather than a finding. No wijk figure was averaged into a stadsdeel figure and no stadsdeel figure was divided down into a wijk.' },
          { h3: 'The stadsdeel figure, and why it stays in the margin', p: 'The published total for stadsdeel Centrum is 110,000 residents for 2023, a rounded number, while the Hague city page in this series carries 106,261 for 2022. Those are two vintages of the same unit and neither is a 2026 count. The wijk rows are 2026 and exact, so the argument runs on them, and the stadsdeel total is used for context and dated wherever it appears.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to stadsdeel Centrum, to The Hague, or to any school in either, and none is implied here. Figures are taken from the statistics office page for each named wijk, with 2026 populations and ages, 2025 household and housing figures and 2024 incomes, and from the published description of the stadsdeel for the 2023 total, its area and its division into 8 wijken and 17 buurten.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Is that a bug, or is that what it does?',
      intro: 'One household figure, two defensible verdicts, and the habit of writing down what correct means before deciding anything is wrong.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Say the standard out loud before grading', p: 'A wijk of 1.5 people per household is failing at housing families and succeeding at housing single adults centrally, and it is doing both at once. Until somebody states which of those was the goal, calling the figure a problem is not a reading of the data. It is an unexamined preference wearing the data as evidence.' },
          { h3: '2. Notice that the standard is doing the work', p: 'Change nothing but the standard and every verdict in the column inverts. That is the signature of a conclusion resting on an assumption rather than on a measurement, and it is easy to test: if replacing an unstated premise flips your answer, the premise, not the number, is your finding.' },
          { h3: '3. Then decide whether you are entitled to a standard', p: 'Sometimes you are. A program has a specification, a contract has terms, a class has a syllabus. Sometimes you are not, and 71 percent single-person households is simply a description of how people in one square kilometre of The Hague live. Knowing which case you are in is most of the skill.' }
        ] },
        { kind: 'table', caption: 'The same move, in five other places', head: ['The observation', 'Called a bug when the standard is', 'Called a feature when the standard is', 'What settles it'], rows: [
          ['A function returns an empty list for no matches', 'it should signal that nothing was found', 'callers should loop over the result safely', 'the written specification'],
          ['A form accepts a name with no surname', 'every record must be complete', 'people with one name exist', 'the field definition'],
          ['A queue processes newest items first', 'fairness to whoever waited longest', 'the freshest data matters most', 'the requirement, if one was written'],
          ['A model refuses an ambiguous request', 'it should have answered something', 'it should not guess', 'the stated behaviour policy'],
          ['A wijk averages 1.5 people per household', 'it should be housing families', 'it should be housing people centrally', 'nothing published, in this case']
        ] },
        { kind: 'callout', h3: 'A bug is not a property of the code, it is a relation between the code and a sentence somebody wrote', p: 'This is the part that is genuinely hard to teach, because it sounds like a technicality and is not one. Behaviour on its own is neither correct nor incorrect. It becomes incorrect only against a statement of what was supposed to happen, and that statement lives outside the program, in a specification, a ticket, a syllabus or somebody head. Learners who have never written it down are not debugging when they open the file. They are browsing, looking for something that offends them, and what offends them is usually whatever they would have written differently. That is why a beginner can spend an entire evening rewriting a function that was working perfectly, and why the same beginner will ship something plainly wrong and defend it as a design decision when challenged. Both failures have the same cause: no sentence to check against. The discipline is one line long and almost nobody does it. Before touching anything, write what the thing is supposed to do, in a form specific enough that you could tell whether it did. Then run it. If the output disagrees with the sentence you have a bug, a real one, with a definition. If it agrees, you have a preference, which is a perfectly reasonable thing to have and a completely different thing to act on. And if you cannot write the sentence at all, you have learned the most useful fact available, which is that nobody has decided yet, and the next conversation is with a person rather than with the code.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for telling a defect from a description',
      intro: 'A slow query, a churn rate, a grade, a delivery time, a household average: each arrives as a number and leaves as a verdict, and the standard that converted one into the other is usually never named. Practised on a stadsdeel where the same figure is a success and a failure at once.',
      body: [
        { kind: 'table', caption: 'Grading a number without smuggling in the standard', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['State the figure', 'Write it with no adjective attached to it', 'A description arriving pre-judged', 'Something everyone can agree on'],
          ['Name the standard', 'Write the sentence that would make it good or bad', 'A preference passing as a measurement', 'An assumption you can now inspect'],
          ['Invert it', 'Apply the opposite standard and see if the verdict flips', 'Confidence built on an unexamined premise', 'Proof of what your conclusion rests on'],
          ['Ask who set it', 'Find whether the standard was ever agreed by anyone', 'Your taste governing other people work', 'Either a real requirement or an open question'],
          ['Report both if unowned', 'Publish the figure and the standards that would grade it', 'A verdict hardening into a fact', 'A finding that survives disagreement']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A program that draws a square in the wrong corner. Before changing a line, the child writes down which corner it was supposed to be in, and sometimes discovers nobody ever said.' },
          { h3: 'For teenagers', p: 'A test suite written before the fix rather than after it, so every claim of a bug has to be expressed as a failing assertion first. The stretch: find one function in their own project that they rewrote for taste and label it honestly.' },
          { h3: 'For adults', p: 'A metric from work that is reported as bad every month. Adults almost always find the threshold was set once by somebody who has left, and that inverting it is a defensible position nobody has stated in years.' }
        ] },
        { kind: 'p', text: 'Population, household, age, area, density, dwelling, value, tenure, income, establishment and pupil figures come from the statistics office pages for the five named wijken, with 2026 populations and ages, 2025 household and housing figures and 2024 incomes. The area of the stadsdeel, its dwelling stock and its division into 8 wijken and 17 buurten come from the published description of the stadsdeel, as does the 2023 total. Nothing on this page grades any of those figures, and the two standards set against them in the table above are offered as examples of standards rather than as recommendations.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From which corner was the square supposed to be in, to a metric nobody has re-argued in years',
    intro: 'The rung comes out of the free hour and what the learner can already do, and never out of which of the eight wijken the address falls in.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Say what it should do first', p: 'Children write the sentence before they change the program, and find it is the hard part.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'A failing test before a fix', p: 'Learners express every complaint as something the computer can check.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Preference or defect', p: 'Teenagers label their own rewrites honestly and keep only the ones with a specification behind them.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The threshold nobody set', p: 'Adults take a metric reported as bad and go looking for the person who decided what bad meant.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will call 1.5 people per household a problem. Why should a teenager in the Zeeheldenkwartier ask whose problem?',
    intro: 'Because the model supplies a standard without mentioning that it has done so.',
    p1: 'Give a language model the Stationsbuurt row and words like fragmented, transient and hollowed out are likely to appear, because most of the writing it has read about small households was written by people who thought small households were a shame. The model is not calculating anything when it says that. It is applying an inherited standard, the one about family formation, and applying it invisibly, in the same sentence as the arithmetic, so that a preference and a measurement arrive fused together and sound like one statement. Ask the same model to grade the row for a city that wants people living centrally near two stations and it will produce an equally fluent paragraph reaching the opposite conclusion, without noticing that it has contradicted itself, because nothing in either answer was ever anchored to a stated goal.',
    p2: 'So the learner practises pulling those two things apart, which is a code habit before it is a reading habit: write the assertion, then run the program, and never the other way round. A function that returns an empty list is not broken until a document says it should have raised an error. A fifteen-year-old in the Schilderswijk who has learned to demand that sentence will be the person at thirty who asks, in a meeting where everyone has agreed a number is bad, who exactly decided what good was and whether they still work here. Models will keep producing confident verdicts on numbers. Noticing that a verdict needs a standard, and that the standard was never on the table, stays a person job.',
    closer: 'The case for a child in Den Haag Centrum learning to code in 2026 is therefore not about statistics. It is that programming is the one subject where you are forced, constantly and unforgivingly, to say what correct means before you are allowed to claim anything is wrong.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes across the middle of The Hague',
    intro: 'Stadsdeel Centrum is compact, densely built and well served by two railway stations, which makes the reasons for teaching it online different from the reasons in a spread-out suburb.',
    cells: [
      { h3: 'Compact, and the lesson still comes to the table', p: 'Distance is not the obstacle here; a household in Kortenbos is minutes from almost anything. What online removes is the evening itself, the getting-ready and the getting-back, which is what actually decides whether a weekly commitment survives past March.' },
      { h3: 'Groep, havo, vwo, profielkeuze', p: 'Those four stay in Dutch and the rest of the hour is in English. It is not a concession to convenience: a child asked to translate the name of their own school track before answering a question about it is being tested on the wrong thing.' },
      { h3: 'The first hour teaches, it does not sell', p: 'A task, a teacher watching how it is approached, and three outputs at the end: where the learner actually is, which course starts from there, and what time on which day. No payment is taken and no card details are asked for during it.' },
      { h3: 'Five to ten at one level, from anywhere', p: 'Ability decides the group and geography does not enter into it. A narrow level has few people in it at any moment, so drawing from one stadsdeel would mean a waiting list where drawing from everywhere means a class that starts this month.' },
      { h3: 'Two a week, and regio Midden already accounted for', p: 'Around eight lessons in a month at a fixed hour. Zuid-Holland takes its school holidays with regio Midden, published a long way ahead, so the weeks off are part of the plan from the first conversation rather than a surprise in February.' },
      { h3: 'Three and a half hours, or four and a half', p: 'The teacher sits in India, which has not moved its clock in decades, so the gap changes only because the Dutch one does, twice a year. Neither setting touches the hours a family here would use anyway.' }
    ],
    spec: { title: 'The two ends of the stadsdeel, and what neither guarantees', p: 'The Schilderswijk has 5,105 residents under fifteen and 15 primary establishments teaching 4,476 pupils; the Archipelbuurt has 6,269 residents in total and a single primary establishment with 213. Those are very different places to be eleven years old. What neither of them supplies is five to ten learners at one particular stage of one particular subject, in the same month, within reach of one particular family, because a stage is thin wherever you stand and thinness is not solved by density. Groups here are assembled on ability from across the world, at every age from 6 to 67.' }
  },

  fees: {
    h2: 'The fee, in dollars, in all eight wijken',
    intro: 'Printed here rather than held back for a phone call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One international rate quoted in dollars, with no euro edition, so an address in the Archipelbuurt is charged exactly what one in the Transvaalkwartier is charged. Nothing is paid until the free lesson has settled a course and an hour, and payment is arranged over WhatsApp afterwards. Pausing, switching plan and missing a week are all set out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, exactly as the people who left them wrote them',

  book: {
    h2: 'Send the level, not the wijk',
    intro: 'The first task might be a square drawn in the wrong corner and a question about which corner was intended, a failing test written before a single line is changed, or a number at work that everybody calls bad and nobody can source a threshold for.',
    success: 'Thank you. Your Den Haag Centrum class request has been sent.'
  },

  faq: {
    h2: 'Den Haag Centrum coding class questions',
    intro: 'The stadsdeel, its eight wijken, one thing numbers cannot do by themselves, the teaching and the terms.',
    items: [
      { q: 'Which neighbourhoods make up Den Haag Centrum?', a: 'Eight wijken divided into seventeen buurten: the Archipelbuurt, Centrum with Kortenbos, Voorhout, Uilebomen and Zuidwal, the Groente- en Fruitmarkt, the Schilderswijk with its Noord, Oost and West buurten, the Stationsbuurt with Huygenspark and the two halves of the Rivierenbuurt, the Transvaalkwartier with its three, the Willemspark and the Zeeheldenkwartier. The stadsdeel covers 7.8 square kilometres and holds 52,793 dwellings.' },
      { q: 'Is a wijk of 1.5 people per household a bad sign?', a: 'This page will not answer that, and the refusal is the point. The Stationsbuurt figure of 1.5, with 6,050 of its 8,515 households holding one person, is bad against a standard that says a wijk should be housing families and good against one that says it should be housing people centrally near two stations. Both standards are ordinary and neither is published in the data, so the figure is reported here and left ungraded.' },
      { q: 'Which is the biggest wijk in the stadsdeel?', a: 'The Schilderswijk, which the statistics office lists as Wijk 29 Schildersbuurt: 30,102 residents at January 2026 across 146 hectares, with 13,685 households averaging 2.2 people. It also has the most children of the five wijken read here, 5,105 under fifteen at 17 percent, and 15 primary establishments teaching 4,476 pupils.' },
      { q: 'How many children live in the middle of The Hague?', a: 'It depends sharply on which wijk. Under-fifteens are 9.2 percent of Wijk 28 Centrum, 11 percent of the Archipelbuurt, the Zeeheldenkwartier and the Stationsbuurt each, and 17 percent of the Schilderswijk. This page does not average those into a stadsdeel figure, because only five of the eight wijken were read and an average of a subset is not a figure for the whole.' },
      { q: 'Why does this page not give one population for stadsdeel Centrum?', a: 'Because there is no exact recent one to give. The published stadsdeel total is 110,000 for 2023, a rounded number, and the Hague city page in this series carries 106,261 for 2022. Neither is a 2026 count, and the five wijken read here are 2026 and exact, so the argument uses those and the stadsdeel total appears only as dated context.' },
      { q: 'Is the class taught in Dutch?', a: 'No. Teaching is English from start to finish, with one exception that is deliberate rather than accidental: the Dutch school vocabulary stays Dutch, so groep, havo, vwo and profielkeuze are used exactly as a child meets them on their own paperwork. No course is offered in a Dutch-language version.' },
      { q: 'What hours suit a family in the middle of The Hague?', a: 'The teacher is three and a half hours ahead under Dutch summer time and four and a half outside it, and the whole of that shift originates in the Netherlands rather than in India. In practice nothing useful is lost: late afternoons after school, early evenings and both weekend days all work. One recurring hour is agreed during the free lesson and then stays where it is.' },
      { q: 'Is there a Modern Age Coders classroom in Den Haag Centrum?', a: 'No, and none is claimed here, elsewhere in The Hague or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Den Haag Centrum coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore The Hague and beyond',
    h2: 'Out of the centre, along the coast, and across Zuid-Holland',
    html: 'The city page, <a class="cg-inline-link" href="/coding-classes-in-the-hague">coding classes in The Hague</a>, carries all eight stadsdelen and the schools named across them. East is <a class="cg-inline-link" href="/coding-classes-in-zoetermeer">Zoetermeer</a>, south-east <a class="cg-inline-link" href="/coding-classes-in-delft">Delft</a>, and south-west the greenhouses of the <a class="cg-inline-link" href="/coding-classes-in-westland">Westland</a>. Everything here sits inside <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>, whose other centre is <a class="cg-inline-link" href="/coding-classes-in-rotterdam-centrum">Rotterdam Centrum</a>. The series descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner after trained models rather than running programs should begin at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Finish this on WhatsApp'
  },

  footerHeading: 'The Hague and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-the-hague', label: 'The Hague' },
    { href: '/coding-classes-in-delft', label: 'Delft' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-dhc .cg-hero-grid { align-items: end; gap: clamp(1.5rem, 3.8vw, 2.9rem); }
.cg-root.cg-dhc .cg-hero h1 { font-weight: 500; letter-spacing: -0.013em; line-height: 1.09; }
.cg-root.cg-dhc .cg-capsule { border-left: 3px solid var(--cg-accent); background: var(--cg-paper-2); padding: 1.15rem 1.35rem; border-radius: 3px; }
.cg-root.cg-dhc .cg-eyebrow { letter-spacing: 0.19em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-dhc .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.017em; }
.cg-root.cg-dhc .cg-grid-3 { gap: clamp(1rem, 2.1vw, 1.65rem); }
.cg-root.cg-dhc .cg-card { border-radius: 3px; border-top: 3px solid var(--cg-accent-soft); }
.cg-root.cg-dhc .cg-table caption { letter-spacing: 0.05em; font-weight: 600; text-transform: none; }
.cg-root.cg-dhc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dhc .cg-table thead th { letter-spacing: 0.02em; }
.cg-root.cg-dhc .cg-ladder-col { border-left: 3px solid var(--cg-accent-soft); padding-left: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Stadsdeel Centrum, Den Haag, Zuid-Holland: the middle of The Hague, 8 wijken and 17 buurten on 7.8 square kilometres of which 7.63 land and 0.17 water, 52,793 dwellings, 110,000 residents at the 2023 publication and 15 percent over sixty-five. Five wijken read in full at 2026: Wijk 28 Centrum 21,955 with 13,910 households averaging 1.6 and 8,805 single-person at 63 percent, four buurten, density 11,071, 13,893 dwellings, value 375,000 euro, income 39,200 euro, 4 primary establishments with 859 pupils and 3 secondary with 1,396; Wijk 29 Schildersbuurt, locally the Schilderswijk, 30,102 with 13,685 households averaging 2.2 and 6,365 single at 47 percent, 5,105 under fifteen at 17 percent, density 20,774, value 269,000 euro, income 21,600 euro, 15 primary establishments with 4,476 pupils and 3 secondary with 1,939; Wijk 27 Stationsbuurt 12,945 with 8,515 households averaging 1.5 and 6,050 single at 71 percent, density 14,423, address density 7,358, value 289,000 euro, income 29,600 euro, one mbo location with 733 students; Zeeheldenkwartier 12,793 with 7,295 households and 4,450 single at 61 percent, density 15,944, value 437,000 euro, income 41,500 euro; Archipelbuurt 6,269 with 3,570 households and 1,995 single at 56 percent, density 7,195, value 658,000 euro, income 63,100 euro. Regio Midden holidays. The district page argues that a figure carries no verdict until a standard is supplied from outside it; The Hague city page owns the stadsdeel populations and the named secondary schools, Hillegersberg-Schiebroek owns correlated measures, Amsterdam-Zuid the gap between two registers, IJsselmonde unequal bands and Prins Alexander the single cross-section.',
    localProject: 'A measurement is not a verdict, and the step that turns one into the other is always a sentence somebody supplied from outside the data. Wijk 27 Stationsbuurt has 8,515 households averaging 1.5 people, 6,050 of them a single person, 71 percent. Wijk 29 Schildersbuurt has 13,685 households averaging 2.2, 6,365 single at 47 percent, and 5,105 residents under fifteen. Graded against a standard that says a wijk should house families, the first is a failure and the second a success. Graded against one that says it should house people compactly near two railway stations, both verdicts invert, with no digit altered and no error found. The disagreement is entirely upstream of the measurement, in a statement about what a wijk is for that appears in no column of the published table and is therefore never examined by anyone. This is the same structure as a bug report: behaviour is neither correct nor incorrect on its own, and becomes incorrect only against a written statement of what was supposed to happen, which lives outside the program. A learner who has not written that statement is not debugging when they open the file; they are browsing for something that offends their taste, which is why beginners rewrite working functions for an evening and then defend genuinely broken behaviour as a design decision. Distinct from correlated measures (Hillegersberg-Schiebroek), which is about two columns carrying the same information, and from the single cross-section (Prins Alexander), which is about direction: here there is no inference problem at all, only a hidden premise doing the work of evidence. The page reports every figure ungraded and prints the two standards side by side as examples rather than recommendations.',
    requiredMentions: [
      '13,910',
      '8,805',
      '8,515',
      '6,050',
      '13,685',
      '6,365',
      '6,269',
      '1,995',
      '12,793',
      '4,450',
      '63,100',
      '21,600',
      'Zeeheldenkwartier',
      'Groente- en Fruitmarkt'
    ],
    sources: [
      { claim: 'Wijk 28 Centrum, Den Haag: 21,955 inwoners (2026); 13,910 huishoudens averaging 1.6, 8,805 eenpersoonshuishoudens at 63 percent; ages 2,015 (0 to 15, 9.2 percent), 2,975 (15 to 25, 14 percent), 9,060 (25 to 45, 41 percent), 4,935 (45 to 65, 22 percent), 3,005 (65+, 14 percent); 205 hectare total, 198 land, 7 water; bevolkingsdichtheid 11,071 per km2; woningvoorraad 13,893; gemiddelde WOZ 375,000 euro (2025); 10,837 huurwoningen (78 percent) and 2,918 koopwoningen (21 percent); gemiddeld inkomen 39,200 euro (2024); 4 vestigingen basisonderwijs with 859 leerlingen and 3 vestigingen voortgezet onderwijs with 1,396 leerlingen; 4 buurten: Kortenbos, Voorhout, Uilebomen, Zuidwal.', url: 'https://allecijfers.nl/wijk/centrum-den-haag/' },
      { claim: 'Wijk 29 Schildersbuurt, Den Haag: 30,102 inwoners (2026); 13,685 huishoudens averaging 2.2, 6,365 eenpersoonshuishoudens at 47 percent; ages 5,105 (0 to 15, 17 percent), 4,490 (15 to 25, 15 percent), 8,260 (25 to 45, 27 percent), 7,945 (45 to 65, 26 percent), 4,305 (65+, 14 percent); 146 hectare; bevolkingsdichtheid 20,774 per km2; woningvoorraad 12,740; gemiddelde WOZ 269,000 euro (2025); 10,319 huurwoningen (81 percent) and 2,421 koopwoningen (19 percent); gemiddeld inkomen 21,600 euro (2024); 15 vestigingen basisonderwijs with 4,476 leerlingen and 3 vestigingen voortgezet onderwijs with 1,939 leerlingen; 3 buurten: Schildersbuurt-Noord, Schildersbuurt-West, Schildersbuurt-Oost.', url: 'https://allecijfers.nl/wijk/schildersbuurt-den-haag/' },
      { claim: 'Wijk 27 Stationsbuurt, Den Haag: 12,945 inwoners (2026); 8,515 huishoudens averaging 1.5, 6,050 eenpersoonshuishoudens at 71 percent; ages 1,385 (0 to 15, 11 percent), 3,210 (15 to 25, 25 percent), 4,600 (25 to 45, 36 percent), 2,480 (45 to 65, 19 percent), 1,295 (65+, 10 percent); 94 hectare; bevolkingsdichtheid 14,423 per km2, omgevingsadressendichtheid 7,358; woningvoorraad 7,165; gemiddelde WOZ 289,000 euro (2025); 6,162 huurwoningen (86 percent) and 1,003 koopwoningen (14 percent); gemiddeld inkomen 29,600 euro (2024); 1 vestiging basisonderwijs with 318 leerlingen, 0 voortgezet onderwijs, 1 mbo location with 733 students; 3 buurten: Rivierenbuurt-Noord, Rivierenbuurt-Zuid, Huygenspark.', url: 'https://allecijfers.nl/wijk/stationsbuurt-den-haag/' },
      { claim: 'Wijk 22 Zeeheldenkwartier, Den Haag: 12,793 inwoners (2026); 7,295 huishoudens averaging 1.6, 4,450 eenpersoonshuishoudens at 61 percent; 81 hectare; bevolkingsdichtheid 15,944 per km2; woningvoorraad 6,868; gemiddelde WOZ 437,000 euro (2025); 4,533 huurwoningen (66 percent) and 2,335 koopwoningen (34 percent); gemiddeld inkomen 41,500 euro (2024); 1 vestiging basisonderwijs with 137 leerlingen.', url: 'https://allecijfers.nl/wijk/zeeheldenkwartier-den-haag/' },
      { claim: 'Wijk 05 Archipelbuurt, Den Haag: 6,269 inwoners (2026); 3,570 huishoudens averaging 1.7, 1,995 eenpersoonshuishoudens at 56 percent; ages 710 (0 to 15, 11 percent), 1,550 (65+, 25 percent); 87 hectare; bevolkingsdichtheid 7,195 per km2; woningvoorraad 3,764; gemiddelde WOZ 658,000 euro (2025); 1,656 huurwoningen (44 percent) and 2,108 koopwoningen (56 percent); gemiddeld inkomen 63,100 euro (2024); 1 vestiging basisonderwijs with 213 leerlingen.', url: 'https://allecijfers.nl/wijk/archipelbuurt-den-haag/' },
      { claim: 'Stadsdeel Centrum, Den Haag: 110,000 inwoners (2023), 7.8 km2 of which 7.63 land and 0.17 water, 52,793 woningen, 15 percent aged 65 and over; 8 wijken subdivided into 17 buurten, the wijken being Archipelbuurt, Centrum, Groente- en Fruitmarkt, Schilderswijk, Stationsbuurt, Transvaalkwartier, Willemspark and Zeeheldenkwartier; stations Den Haag Centraal and Den Haag Hollands Spoor.', url: 'https://nl.wikipedia.org/wiki/Centrum_(stadsdeel_van_Den_Haag)' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'That any wijk in the stadsdeel is doing well or badly. That is a verdict, it requires a standard, and no standard is published with the figures.',
      'That any of these wijken was designed or intended to hold a particular kind of household. No source for intent was read and none is asserted anywhere on the page.',
      'A stadsdeel population for 2026. The published stadsdeel total is 110,000 for 2023 and the city page carries 106,261 for 2022; both are dated wherever used and neither is presented as current.',
      'Any stadsdeel figure derived from the five wijken read. Five of eight is a subset and a subset average is not a figure for the whole.',
      'Any ranking of the wijken by income or by dwelling value, or any observation that the two orders agree. That is the Hillegersberg-Schiebroek page argument and this page does not touch it.',
      'Any comparison of the stadsdeel density against a wijk density. The stadsdeel figure is computed on total area and the wijk figures on land, and setting them side by side would be a denominator comparison this series has already made elsewhere.',
      'Any reading of the 13,910 households against the 13,893 dwellings in Wijk 28 Centrum. The two figures are reported as published and the gap between two registers is the Amsterdam-Zuid page argument.',
      'Figures for the three wijken not read, the Groente- en Fruitmarkt, the Transvaalkwartier and the Willemspark. All three are named and none was read separately.',
      'Anything the Hague city page owns, including the stadsdeel population table, the named secondary schools and their addresses.'
    ]
  }
};
