'use strict';
// Eindhoven Centrum: the one stadsdeel of Eindhoven that is a single CBS wijk,
// five buurten, all read, from the Binnenstad to the TU-terrein campus.
// Spine: the campus is the youngest place in Centrum, and it is not where most
// of Centrum's young people live. Same numerator, two questions.

module.exports = {
  slug: 'coding-classes-in-eindhoven-centrum',
  code: 'ehc',
  accent: '#8B4064',
  accentRationale: 'Eindhoven Centrum: a deep rose off the old brick of the Binnenstad, far from the Dommel teal of the Eindhoven city page and the Brabant reds and greens beside it, and nearest to Delft, which it does not link to',
  pageType: 'district',
  place: {
    name: 'Eindhoven Centrum',
    eyebrow: 'Centrum, Eindhoven',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'City', name: 'Eindhoven' },
      { type: 'AdministrativeArea', name: 'Noord-Brabant' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-netherlands', name: 'Netherlands' },
    { slug: 'coding-classes-in-eindhoven', name: 'Eindhoven' }
  ],
  nav: [
    { label: 'Eindhoven', href: '/coding-classes-in-eindhoven' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Eindhoven Centrum, Eindhoven, Netherlands',
  title: 'Coding Classes in Eindhoven Centrum | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Eindhoven Centrum for ages 6 to 67, from the Binnenstad and Bergen to the TU-terrein. The first lesson is free.',
  ogDescription: 'Live online coding, Python and AI in the middle of Eindhoven, on a page about two questions that share one number and get swapped.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'python-ai-automation-masterclass-college',
  verifiedOn: '10 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Eindhoven Centrum Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults across the five buurten of Eindhoven Centrum, taught in English.'
  },

  h1: 'Coding classes in Eindhoven Centrum, where the campus is the youngest place and still not where the young people are',
  capsuleQ: 'What are the best coding classes in Eindhoven Centrum?',
  capsule: 'Coding classes in Eindhoven Centrum reach a stadsdeel that is a single statistics office wijk of 11,560 residents in five buurten, all five read for this page. On the TU-terrein, 1,220 of 2,170 residents are aged fifteen to twenty-five, 56 percent, the youngest buurt anywhere in this series. Yet those 1,220 are only 36.5 percent of the 3,340 young residents of Centrum, and the Binnenstad, where the young are 29 percent, holds 1,205 of them. The campus is young; the young are mostly not on the campus. Modern Age Coders teaches live online in English from Bergen to the Witte Dame, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Most people on the campus are young. Most young people are on the campus. Those two sentences sound like the same sentence said twice, and the first is true of Eindhoven Centrum while the second is false. They share a number, the 1,220 residents of the TU-terrein aged fifteen to twenty-five, and they divide it by different things: once by everybody living on the campus, and once by everybody that age living in Centrum. Swapping them is one of the most common errors in all of quantitative reasoning, and it has a famous name in machine learning, where the two quantities are called precision and recall and confusing them has shipped a great many bad models.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Eindhoven Centrum.',

  picks: {
    eyebrow: 'Course picks for Eindhoven Centrum',
    h2: 'Four courses for the middle of Eindhoven',
    intro: 'A groep 5 child in Bergen who has only ever tapped at screens, a teenager in the Witte Dame with an app worked out on paper and nowhere else, a student on the TU-terrein whose classifier scores beautifully on one measure and badly on the one that matters, and an adult in the Binnenstad reading a report that answers a question slightly to the side of the one asked. Four starting points, and the first hour of each costs nothing.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python where a child counts things two ways, out of one group and out of another, and sees the answers disagree.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'An application taken from sketches on paper to something that installs and runs, for the teenager who has planned every screen and built none.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python that sorts and filters on its own, where grouping by the wrong column quietly answers the inverse of your question.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reading a percentage by first asking what it is a percentage of, for anybody whose figures end up in someone else decision.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Eindhoven Centrum today',
      h2: 'One wijk, five buurten, every one of them read',
      intro: 'Eindhoven has seven stadsdelen and the statistics office publishes twenty wijken. The encyclopaedia articles for six of the stadsdelen name nineteen of those wijken between them, three each for Stratum, Gestel, Strijp, Woensel-Zuid and Tongelre and four for Woensel-Noord, which leaves exactly one: Centrum. So stadsdeel and wijk here are the same unit, 266 hectares, 262 of them land and 3 water, holding 11,560 residents at January 2026 in five buurten, the Binnenstad, Bergen, the Witte Dame, Fellenoord and the TU-terrein.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The smallest households in the series', p: 'Centrum has 8,030 households averaging 1.3 people, and 5,890 of them hold a single person, 73 percent. On the TU-terrein the average falls to 1.1 and the single share rises to 92 percent, 1,315 of 1,435 households. No wijk or buurt read anywhere else in this cluster runs that small.' },
          { h3: 'Almost no children, a great many young adults', p: 'Only 445 of the 11,560 residents are under fifteen. 3,340 are aged fifteen to twenty-five, 29 percent, and 5,270 are aged twenty-five to forty-five, 46 percent. Together those two bands are three quarters of the wijk. The statistics office also counts 1,890 university students and 630 higher professional students living here.' },
          { h3: 'Rented, and mostly small', p: 'There are 6,952 dwellings, 5,631 of them rented at 81 percent and 1,251 owned at 18, with an estimated average value of 346,000 euro. On the campus every one of the 1,103 dwellings is rented and the estimated average value is 173,000 euro, half the wijk figure, which is what student rooms do to an average.' }
        ] },
        { kind: 'spec', title: 'What the old town was, before 1 January 1920', p: 'On 1 January 1920 the municipality of Eindhoven was joined to the surrounding municipalities of Woensel, Strijp, Gestel en Blaarthem, Stratum and Tongelre. Before that date the town covered 75 hectares and about 6,500 people. Afterwards the municipality covered 6,300 hectares and about 46,000, eighty-four times the area and seven times the population. The six villages became six of the seven stadsdelen, and the old town became the seventh, which is why Centrum is so much smaller than its neighbours. The page does not claim that todays wijk of 266 hectares is the same ground as the 75 hectares of 1919; it is only noting where the shape of the seven came from.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'One number on top, two different questions underneath',
      intro: 'Every count below is published for 2026. Each share is a division performed on this page, and the point of the table is that the same top number produces a different answer depending on which group it is divided by.',
      body: [
        { kind: 'table', caption: 'Residents aged fifteen to twenty-five, counted two ways', head: ['Buurt', 'Aged 15 to 25 living there', 'As a share of that buurt', 'As a share of all 15 to 25 in Centrum'], rows: [
          ['TU-terrein', '1,220', '56 percent of 2,170', '36.5 percent of 3,340'],
          ['Binnenstad', '1,205', '29 percent of 4,106', '36.1 percent of 3,340'],
          ['Bergen', '630', '22 percent of 2,848', '18.9 percent of 3,340'],
          ['Witte Dame', '230', '10 percent of 2,256', '6.9 percent of 3,340'],
          ['Fellenoord', '45', '25 percent of 180', '1.3 percent of 3,340']
        ] },
        { kind: 'p', text: 'Read the third column and the campus is the story: more than half its residents are fifteen to twenty-five, twice the share of anywhere else. Read the fourth column and the campus and the Binnenstad are level, each holding just over a third of the young people of Centrum, 1,220 against 1,205. Both columns are correct. They answer different questions. The first asks what kind of place the campus is, and the second asks where the young people of Centrum live, and the error is to answer the first and report it as the second. The five buurt counts add to 3,330 against the published wijk figure of 3,340; all of them are published in multiples of five, and the page divides by the wijk figure without trying to reconcile the ten.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'The wijk and all five buurten, and every division done here',
      intro: 'Each row as published with its year, the arithmetic set out so it can be checked, and a plain list of the things the page does not conclude.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Wijk Centrum', p: '11,560 residents (2026); 8,030 households averaging 1.3, 5,890 single-person at 73 percent; 445 under fifteen, 3,340 aged fifteen to twenty-five at 29 percent, 5,270 aged twenty-five to forty-five at 46 percent, 1,610 aged forty-five to sixty-five at 14 percent, 870 over sixty-five; 266 hectares, 262 land and 3 water; density 4,380; 6,952 dwellings; estimated average value 346,000 euro (2025); 5,631 rented at 81 percent and 1,251 owner-occupied at 18; income 44,300 euro (2024); 1 primary establishment with 539 pupils and no secondary; 630 higher professional and 1,890 university students resident; five buurten.' },
          { h3: 'Buurt TU-terrein', p: '2,170 residents (2026); 1,435 households averaging 1.1, 1,315 single-person at 92 percent; 35 under fifteen, 1,220 aged fifteen to twenty-five at 56 percent, 705 aged twenty-five to forty-five, 185 aged forty-five to sixty-five, 10 over sixty-five; 124 hectares; density 1,824; 1,103 dwellings, every one rented; estimated average value 173,000 euro (2025); income 22,000 euro for 2023; 100 higher professional and 940 university students resident (2025).' },
          { h3: 'Buurt Binnenstad', p: '4,106 residents (2026); 2,980 households averaging 1.3, 2,225 single-person at 75 percent; 155 under fifteen, 1,205 aged fifteen to twenty-five at 29 percent, 1,825 aged twenty-five to forty-five at 44 percent, 535 aged forty-five to sixty-five, 390 over sixty-five; 67 hectares, 66 land and 1 water; density 6,061; 2,382 dwellings; estimated average value 372,000 euro (2025); 476 owner-occupied at 20 percent and 1,906 rented at 80; income 42,600 euro (2024); 270 higher professional and 540 university students resident (2025).' },
          { h3: 'Bergen, the Witte Dame and Fellenoord', p: 'Bergen: 2,848 residents; 1,960 households averaging 1.4, 1,340 single at 68 percent; 630 aged fifteen to twenty-five; 34 hectares; density 8,235; 1,662 dwellings, estimated 408,000 euro; income 45,200 euro (2024). Witte Dame: 2,256 residents; 1,495 households averaging 1.5; 230 aged fifteen to twenty-five and 1,340 aged twenty-five to forty-five, 59 percent; 18 hectares; density 12,500; 1,645 dwellings, estimated 375,000 euro; income 49,600 euro for 2023. Fellenoord: 180 residents in 160 households, all 160 dwellings rented; 45 aged fifteen to twenty-five; 22 hectares; density 864; income 36,200 euro for 2023.' },
          { h3: 'Every division on this page', p: 'Shares of each buurt: 1,220 of 2,170 is 56 percent; 1,205 of 4,106 is 29; 630 of 2,848 is 22; 230 of 2,256 is 10; 45 of 180 is 25. Shares of the 3,340 residents of Centrum aged fifteen to twenty-five: 1,220 is 36.5 percent; 1,205 is 36.1; 630 is 18.9; 230 is 6.9; 45 is 1.3. And 940 of the 1,890 university students resident in Centrum live on the TU-terrein, which is 49.7 percent, both figures for 2025. Nothing else was calculated.' },
          { h3: 'What the page does not say', p: 'It does not say the campus is where students live, which is half true, or that it is not, which is half true too. It does not reconcile the wijk income of 44,300 euro with the buurt incomes, which carry two different years and may average over different populations. And it does not treat the five buurt age counts as adding exactly to the wijk, because they are published separately and in multiples of five.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to Eindhoven Centrum, to Eindhoven, to the university or to any school counted above, and nothing here implies one. The wijk row and the five buurt rows were each read from their own statistics office page, at the years that office gives them: residents and ages 2026, households and housing 2025, students 2025, and income 2024 or 2023 depending on the buurt. The 1920 merger figures and the list of wijken in each stadsdeel come from the published encyclopaedia entries.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Of the campus, how many are young? Of the young, how many are on the campus?',
      intro: 'One count, two denominators, two true answers, and the habit of saying which question you are asking before you divide.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Name the group you are dividing by', p: 'Every share is a count over a group, and the group is the question. Of everybody on the TU-terrein, 56 percent are young. Of every young person in Centrum, 36.5 percent are on the TU-terrein. Say which one you mean, in words, before any number is allowed near the sentence.' },
          { h3: '2. Notice the sentences that sound identical', p: 'The campus is mostly young. The young are mostly on the campus. Swap the subject and the object and the claim changes completely while the words barely move. That is why the error survives: it passes the ear test, and nobody checks the arithmetic of a sentence that sounds right.' },
          { h3: '3. Then compute both, every time', p: 'They are both cheap and they are almost never equal. When they differ sharply, as they do here, the gap is usually the most interesting fact in the data: a place can be extremely young without holding most of the young, because it is small.' }
        ] },
        { kind: 'table', caption: 'The same swap, in five other places', head: ['The shared count', 'The question on the left', 'The question on the right', 'Why they get confused'], rows: [
          ['Emails flagged that really were spam', 'of the flagged, how many are spam: precision', 'of all spam, how many were flagged: recall', 'both sound like how good the filter is'],
          ['Positive tests that are true', 'of those testing positive, how many have it', 'of those who have it, how many test positive', 'the box prints one, the patient asks the other'],
          ['Crashes traced to one module', 'of that module runs, how many crash', 'of all crashes, how many are that module', 'a busy module looks guilty either way'],
          ['Customers who left after a complaint', 'of complainers, how many left', 'of leavers, how many complained', 'the same join, grouped on a different column'],
          ['1,220 young residents on the TU-terrein', 'of the campus, how many are young: 56 percent', 'of the young, how many on the campus: 36.5 percent', 'the campus is young sounds like the young are on campus']
        ] },
        { kind: 'callout', h3: 'The top of the fraction is shared, and the bottom is the whole question', p: 'Almost everybody who works with numbers learns this once, painfully, and then forgets it under pressure, because the two quantities are built from the same raw count and look so similar on a slide. A spam filter that flags very little and is right every time it flags has perfect precision and terrible recall: nearly everything it catches is spam, and it catches almost none of the spam. A filter that flags everything has perfect recall and useless precision. Report only one and you can make either filter sound excellent, and both of them are bad. Medicine has the same structure and higher stakes: a test that detects nine out of ten people who have a condition sounds reliable, but if the condition is rare, most people who test positive will not have it, and the patient in the room is asking the second question while the leaflet answers the first. In code, the swap is usually one line: grouping by the outcome column instead of the category column, or filtering on one condition and dividing by the other. The query runs, the number is plausible, and it is the inverse of what was asked. The discipline is to write the question as a sentence that begins with of all the, name the group after those words, and only then write the division, because the group after of all the is the denominator and it decides the answer. Eindhoven Centrum makes the point without any machinery at all: the campus is the youngest place in the wijk and it holds barely more of the young people than the Binnenstad does.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for a share that could be pointing either way',
      intro: 'Precision and recall, sensitivity and predictive value, conversion from one step and conversion into it, share of a segment and a segment share of the whole: every one is a pair built on the same count and every pair gets swapped. Practised on a campus that is young without holding most of the young.',
      body: [
        { kind: 'table', caption: 'Keeping a conditional share pointed the right way', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Write of all the', 'State the group as a sentence before dividing', 'A share with an unnamed base', 'The question, fixed in words'],
          ['Compute the pair', 'Work out the inverse share as well, always', 'One direction reported as both', 'The gap between them'],
          ['Check the grouping', 'Confirm the code groups by the column the question names', 'A query answering the inverse', 'SQL that means what you meant'],
          ['Report both for classifiers', 'Publish precision and recall together, never one alone', 'A filter made to look good', 'An honest picture of a model'],
          ['Say which one moved', 'When a share changes, name the base that changed', 'A small base shift read as a big finding', 'Changes you can explain']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Of the children wearing red, how many are in the front row, and of the children in the front row, how many are wearing red. Two counts, one crowd, and the class discovers the answers are different.' },
          { h3: 'For teenagers', p: 'A tiny spam filter in Python, scored on precision and on recall, then tuned to make each one look perfect in turn. The stretch: explain to a non-programmer why the perfect-looking version is useless.' },
          { h3: 'For adults', p: 'A real percentage from work rewritten as a sentence starting of all the. Adults very often find at least one dashboard figure whose base is the inverse of what everybody in the meeting assumed.' }
        ] },
        { kind: 'p', text: 'The wijk row and all five buurt rows come from separate statistics office pages at the years that office assigns: 2026 residents and ages, 2025 households, housing and resident students, and 2024 or 2023 income. The 1920 merger, the 75 and 6,300 hectares, the 6,500 and 46,000 residents, and the wijken of the other six stadsdelen come from the encyclopaedia entries. The ten divisions and the one student share listed above are the whole of the arithmetic, and every one uses two published counts from the same year.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From red jumpers in the front row to a classifier scored both ways',
    intro: 'The rung is set during the free hour by what the learner does with a real task. The buurt plays no part and neither does the age.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Two counts, one crowd', p: 'Children count the same group two ways and find two answers.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Of all the', p: 'Learners write the group as words before they write any division.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Precision and recall', p: 'Teenagers score a small filter both ways and see why one number is never enough.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The inverse in the dashboard', p: 'Adults rewrite a real figure as a sentence and find which way it points.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell you the young people of Eindhoven Centrum live on the campus. Why should a teenager in Bergen ask which way round?',
    intro: 'Because the campus is 56 percent young, and only 36.5 percent of the young live there.',
    p1: 'Give a model the TU-terrein row and it will very reasonably describe the campus as a student quarter where young people are concentrated, and then, a sentence later, it is likely to say that Centrum young residents are concentrated on the campus, because the two phrasings are close in the text it has learned from and it has no reason to check that they are different claims. The first is true and the second is not: the Binnenstad holds 1,205 young residents to the campus 1,220. Nothing in either sentence looks wrong. The numbers underneath are correct. The subject and the object have simply traded places, and a reader has no way to see it happen.',
    p2: 'So the learner practises writing the group before the number, and the place where that habit gets drilled hardest is machine learning, because a classifier evaluated on one of precision or recall can be made to look superb while being worthless, and every student who trains one finds that out the first time they optimise for the wrong one. A fifteen-year-old in the Witte Dame who has been caught by that once will be the person at thirty who hears ninety percent accurate and asks ninety percent of what. Models will keep blending the two directions, because the language does. Asking which group sits under the line stays a person job.',
    closer: 'The case for a child in Eindhoven Centrum learning to code in 2026 is therefore not about the university next door. It is that writing a query forces you to decide which column you are grouping by, and that one decision is the difference between the question you asked and its mirror image.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes in the middle of Eindhoven',
    intro: 'Centrum is the station, the shopping streets, the old Philips buildings and the university campus, all inside 266 hectares, and a household here is as short of spare evenings as anywhere, whatever the distances.',
    cells: [
      { h3: 'Everything is close, and the evening is still the problem', p: 'From the Binnenstad nearly anything is a short walk. The lesson still has to fit somewhere in a week, and what makes a weekly commitment last is not the distance but not having to go anywhere at all. The class comes to the table at a fixed hour.' },
      { h3: 'Groep, havo, vwo and profielkeuze, untranslated', p: 'Those four stay Dutch inside an English lesson. A child in Brabant reads them on every school letter, so hearing them in their own form saves a translation that was never needed.' },
      { h3: 'The first hour is taught, and nothing is sold in it', p: 'A task, a teacher watching how the learner goes about it, and three results by the end: a level, the course that starts there, and a weekly time. No payment, no card details, no follow-up call pretending to be a lesson.' },
      { h3: 'Five to ten at one stage, drawn from anywhere', p: 'Groups form on level alone. A wijk of eleven and a half thousand people, three quarters of them adults under forty-five, does not hold five learners at one narrow stage in one month, so the pool is worldwide and the class exists now.' },
      { h3: 'Regio Zuid holidays, known a year ahead', p: 'Two lessons a week, about eight a month, at one hour that stays put. Noord-Brabant takes its school holidays with regio Zuid, which differs from the western provinces, and those dates are built into the plan from the first conversation.' },
      { h3: 'The gap to India changes, and India does not', p: 'Three and a half hours in Dutch summer time and four and a half outside it. The teacher clock has not moved in decades; every change is made in the Netherlands, and neither setting removes an hour a family here would use.' }
    ],
    spec: { title: 'A wijk with 445 children, and why that is not the obstacle', p: 'Only 445 of the 11,560 residents of Centrum are under fifteen, the smallest share of any wijk this series has read, and the single primary establishment teaches 539 pupils, more than the children who live here. A small number of children nearby is not what makes a class hard to form, though. What decides it is how many learners, anywhere, sit at one precise stage of one precise subject in one month, and that number is small in a wijk full of children as well. So the groups are drawn worldwide by stage, across every age from 6 to 67.' }
  },

  fees: {
    h2: 'The fee, in dollars, across all five buurten',
    intro: 'Written out in full here, rather than kept back for a sales call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One rate in dollars for every country and no euro edition, so a student room on the TU-terrein and a flat in Bergen see an identical figure. Nothing is charged until the free lesson has settled a course and an hour, and payment is then arranged over WhatsApp. Pausing, changing plan and missing a week are each covered on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, exactly as the people who left them wrote them',

  book: {
    h2: 'Send the level, not the buurt',
    intro: 'The first task might be counting one crowd two different ways, a spam filter scored on precision and then on recall, or a percentage from work rewritten as a sentence beginning of all the.',
    success: 'Thank you. Your Eindhoven Centrum class request has been sent.'
  },

  faq: {
    h2: 'Eindhoven Centrum coding class questions',
    intro: 'The stadsdeel, its five buurten, one pair of questions that get swapped, the teaching and the terms.',
    items: [
      { q: 'What does Eindhoven Centrum include?', a: 'One statistics office wijk, Centrum, with five buurten: the Binnenstad, Bergen, the Witte Dame, Fellenoord and the TU-terrein. It covers 266 hectares, 262 of them land, and held 11,560 residents at January 2026. Eindhoven has seven stadsdelen and twenty wijken; the other six stadsdelen account for nineteen of the wijken, so Centrum is the only stadsdeel that is a single wijk.' },
      { q: 'Do most young people in Centrum live on the university campus?', a: 'No, although the campus is the youngest place in the wijk. On the TU-terrein 1,220 of 2,170 residents are aged fifteen to twenty-five, 56 percent. But Centrum as a whole has 3,340 residents of that age, so the campus holds 36.5 percent of them, and the Binnenstad holds 1,205, almost as many. The campus is mostly young; the young are mostly elsewhere.' },
      { q: 'How many students live in Eindhoven Centrum?', a: 'The statistics office counts 1,890 university students and 630 higher professional students resident in the wijk for 2025. Of the university students, 940 live on the TU-terrein and 950 in the other four buurten, so about half live on the campus, which is the kind of split the single sentence students live on campus hides.' },
      { q: 'Why was the old town of Eindhoven so small?', a: 'Until 1 January 1920 the municipality of Eindhoven was only the old town, 75 hectares and about 6,500 people. On that date it was joined with Woensel, Strijp, Gestel en Blaarthem, Stratum and Tongelre, becoming 6,300 hectares and about 46,000 people. The surrounding villages became the other six stadsdelen, which is why Centrum is so much smaller than its neighbours.' },
      { q: 'Is Eindhoven Centrum mostly rented?', a: 'Yes. Of the 6,952 dwellings, 5,631 are rented, 81 percent, and 1,251 owner-occupied. On the TU-terrein all 1,103 dwellings are rented and in Fellenoord all 160 are. The estimated average dwelling value is 346,000 euro for the wijk and 173,000 on the campus, where student rooms pull the average down.' },
      { q: 'Is the class taught in Dutch?', a: 'No. Teaching is in English, apart from the Dutch school vocabulary, which is deliberately left as it is: groep, havo, vwo and profielkeuze appear exactly as a child meets them in Brabant school paperwork. There is no Dutch-language version of any course.' },
      { q: 'What hours suit a family in Eindhoven Centrum?', a: 'The teacher is three and a half hours ahead during Dutch summer time and four and a half outside it, and the whole of that change comes from the Dutch clock. After school, early evening and both weekend days all remain available. One weekly hour is fixed at the free lesson and then does not move, and school holidays follow the regio Zuid calendar.' },
      { q: 'Is there a Modern Age Coders classroom in Eindhoven Centrum?', a: 'No, and none is claimed here, elsewhere in Eindhoven or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Eindhoven Centrum coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Eindhoven and beyond',
    h2: 'Out from the old town, and across Noord-Brabant',
    html: 'The city page, <a class="cg-inline-link" href="/coding-classes-in-eindhoven">coding classes in Eindhoven</a>, carries the Brainport picture, the international schools and the numbers the district pages leave alone. Around the centre lie the six former villages that joined it on 1 January 1920, each with a page of its own in this series as they are written. North along the A2 is <a class="cg-inline-link" href="/coding-classes-in-den-bosch">Den Bosch</a>, west is <a class="cg-inline-link" href="/coding-classes-in-tilburg">Tilburg</a>, and all of it sits in <a class="cg-inline-link" href="/coding-classes-in-noord-brabant">Noord-Brabant</a>. If the goal is training a model rather than writing a program, the better doors are <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> and the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>. Everything hangs from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Finish this on WhatsApp'
  },

  footerHeading: 'Eindhoven and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-eindhoven', label: 'Eindhoven' },
    { href: '/coding-classes-in-noord-brabant', label: 'Noord-Brabant' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-ehc .cg-hero-grid { grid-template-columns: 1.1fr 1fr; align-items: center; gap: clamp(1.5rem, 3.6vw, 2.8rem); }
.cg-root.cg-ehc .cg-hero h1 { font-weight: 500; letter-spacing: -0.013em; line-height: 1.1; }
.cg-root.cg-ehc .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.3rem; }
.cg-root.cg-ehc .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ehc .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.015em; }
.cg-root.cg-ehc .cg-grid-3 { gap: clamp(1.08rem, 2.2vw, 1.76rem); }
.cg-root.cg-ehc .cg-card { border-radius: 4px; border-top: 3px solid var(--cg-accent-soft); }
.cg-root.cg-ehc .cg-table caption { letter-spacing: 0.04em; font-weight: 600; }
.cg-root.cg-ehc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ehc .cg-table td:nth-child(3), .cg-root.cg-ehc .cg-table td:nth-child(4) { font-weight: 600; }
.cg-root.cg-ehc .cg-ladder-col { border-bottom: 3px solid var(--cg-accent-soft); padding-bottom: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Stadsdeel Centrum, Eindhoven, Noord-Brabant: the only one of the seven Eindhoven stadsdelen that is a single statistics office wijk, since the stadsdeel articles for Stratum, Gestel, Strijp, Woensel-Zuid, Woensel-Noord and Tongelre name nineteen of the twenty wijken; 266 hectares, 262 land and 3 water; 11,560 residents (2026), density 4,380; 8,030 households averaging 1.3 with 5,890 single at 73 percent; 445 under fifteen, 3,340 aged fifteen to twenty-five at 29 percent, 5,270 aged twenty-five to forty-five at 46 percent, 1,610 aged forty-five to sixty-five, 870 over sixty-five; 6,952 dwellings, estimated average value 346,000 euro, 5,631 rented at 81 percent; income 44,300 euro (2024); 1 primary establishment with 539 pupils; 630 higher professional and 1,890 university students resident (2025). Five buurten, all read. TU-terrein 2,170 residents on 124 hectares, 1,435 households averaging 1.1 with 1,315 single at 92 percent, 1,220 aged fifteen to twenty-five at 56 percent, 10 over sixty-five, 1,103 dwellings all rented, estimated 173,000 euro, income 22,000 euro for 2023, 940 university students. Binnenstad 4,106 on 67 hectares, 2,980 households averaging 1.3, 1,205 aged fifteen to twenty-five at 29 percent, 2,382 dwellings, estimated 372,000 euro, income 42,600 euro (2024). Bergen 2,848 on 34 hectares, 630 aged fifteen to twenty-five, 1,662 dwellings, estimated 408,000 euro, income 45,200 euro (2024). Witte Dame 2,256 on 18 hectares, density 12,500, 1,340 aged twenty-five to forty-five at 59 percent, 1,645 dwellings, income 49,600 euro for 2023. Fellenoord 180 residents, 160 dwellings all rented. History: on 1 January 1920 Eindhoven, until then the old town of 75 hectares and about 6,500 people, was joined with Woensel, Strijp, Gestel en Blaarthem, Stratum and Tongelre, becoming 6,300 hectares and about 46,000 people. Regio Zuid holidays. The district page argues confusion of the inverse; Gadong owns the choice of denominator for one question, Segbroek the ceiling check, Loosduinen the estimate read as a count, Haagse Hout precision against accuracy in the numerical sense.',
    localProject: 'Two conditional shares built on one count get swapped constantly, and the swap is invisible because the sentences sound the same. On the TU-terrein, 1,220 of 2,170 residents are aged fifteen to twenty-five: of the campus, 56 percent are young, the youngest buurt anywhere in this series. Centrum as a whole has 3,340 residents of that age, so of the young, 36.5 percent are on the campus, and the Binnenstad, where the young are only 29 percent of residents, holds 1,205 of them, within fifteen people of the campus. The campus is mostly young; the young are mostly elsewhere. Both shares are correct, they share a numerator, and they answer different questions, what kind of place the campus is and where the young people of Centrum live; the error is to compute the first and report it as the second. The same split appears in the students: 940 of the 1,890 university students resident in Centrum live on the campus, so the claim that students live on campus is exactly half true. The programming form is precision against recall, the pair every machine learning student eventually confuses: of the flagged, how many are spam, against of the spam, how many were flagged, with a filter that flags almost nothing scoring perfect precision and useless recall. It recurs as sensitivity against predictive value in diagnostic testing, where a rare condition makes most positives false, and in SQL as grouping by the outcome column instead of the category column, which answers the inverse of the question with a query that runs and a plausible number. Distinct from the denominator as a choice (Gadong), where one question admits four defensible populations and the fault is not naming one: here each denominator is uniquely correct for its own question and the fault is answering one question and reporting the other. The remedy is a sentence that starts of all the, naming the group before any division is written, and computing the inverse share every time.',
    requiredMentions: [
      '11,560',
      '8,030',
      '5,270',
      '6,952',
      '346,000',
      '1,220',
      '173,000',
      '4,106',
      '2,256',
      '2,848',
      '1,890',
      'TU-terrein',
      'Fellenoord',
      '1 January 1920'
    ],
    sources: [
      { claim: 'Wijk Centrum, Eindhoven: 11,560 inwoners (2026); 8,030 huishoudens averaging 1.3, 5,890 eenpersoonshuishoudens at 73 percent; ages 445 (0 to 15), 3,340 (15 to 25, 29 percent), 5,270 (25 to 45, 46 percent), 1,610 (45 to 65, 14 percent), 870 (65+, 7.5 percent); 266 hectare, 262 land, 3 water; bevolkingsdichtheid 4,380 per km2; woningvoorraad 6,952 (2025); gemiddelde WOZ 346,000 euro (2025); 5,631 huurwoningen (81 percent) and 1,251 koopwoningen (18 percent); gemiddeld inkomen 44,300 euro (2024); buurten Binnenstad, Bergen, Witte Dame, Fellenoord, TU-terrein; 1 vestiging basisonderwijs with 539 leerlingen, 0 voortgezet onderwijs; studenten HBO 630, WO 1,890.', url: 'https://allecijfers.nl/wijk/centrum-eindhoven/' },
      { claim: 'Buurt TU-terrein, Eindhoven: 2,170 inwoners (2026); 1,435 huishoudens averaging 1.1, 1,315 eenpersoonshuishoudens at 92 percent; ages 35 (0 to 15), 1,220 (15 to 25, 56 percent), 705 (25 to 45, 32 percent), 185 (45 to 65), 10 (65+); 124 hectare; bevolkingsdichtheid 1,824 per km2; woningvoorraad 1,103 (2025), all huurwoningen; gemiddelde WOZ 173,000 euro (2025); gemiddeld inkomen 22,000 euro (2023); studenten HBO 100, WO 940 (2025).', url: 'https://allecijfers.nl/buurt/tu-terrein-eindhoven/' },
      { claim: 'Buurt Binnenstad, Eindhoven: 4,106 inwoners (2026); 2,980 huishoudens averaging 1.3, 2,225 eenpersoonshuishoudens at 75 percent; ages 155 (0 to 15), 1,205 (15 to 25, 29 percent), 1,825 (25 to 45, 44 percent), 535 (45 to 65), 390 (65+); 67 hectare, 66 land, 1 water; bevolkingsdichtheid 6,061 per km2; woningvoorraad 2,382 (2025); gemiddelde WOZ 372,000 euro (2025); 476 koopwoningen (20 percent) and 1,906 huurwoningen (80 percent); gemiddeld inkomen 42,600 euro (2024); studenten HBO 270, WO 540 (2025).', url: 'https://allecijfers.nl/buurt/binnenstad-eindhoven/' },
      { claim: 'Buurt Bergen, Eindhoven: 2,848 inwoners (2026); 1,960 huishoudens averaging 1.4, 1,340 eenpersoonshuishoudens at 68 percent; ages 130 (0 to 15), 630 (15 to 25, 22 percent), 1,275 (25 to 45, 45 percent), 545 (45 to 65), 275 (65+); 34 hectare; bevolkingsdichtheid 8,235 per km2; woningvoorraad 1,662; gemiddelde WOZ 408,000 euro (2025); 1,097 huurwoningen (66 percent) and 565 koopwoningen (34 percent); gemiddeld inkomen 45,200 euro (2024); studenten HBO 190, WO 280.', url: 'https://allecijfers.nl/buurt/bergen-eindhoven/' },
      { claim: 'Buurt Witte Dame, Eindhoven: 2,256 inwoners (2026); 1,495 huishoudens averaging 1.5, 875 eenpersoonshuishoudens at 59 percent; ages 125 (0 to 15), 230 (15 to 25, 10 percent), 1,340 (25 to 45, 59 percent), 335 (45 to 65), 200 (65+); 18 hectare; bevolkingsdichtheid 12,500 per km2; woningvoorraad 1,645; 1,398 huurwoningen (85 percent) and 247 koopwoningen (15 percent); gemiddelde WOZ 375,000 euro (2025); gemiddeld inkomen 49,600 euro (2023); studenten HBO 60, WO 90.', url: 'https://allecijfers.nl/buurt/witte-dame-eindhoven/' },
      { claim: 'Buurt Fellenoord, Eindhoven: 180 inwoners (2026); 160 huishoudens averaging 1.2, 130 eenpersoonshuishoudens at 81 percent; ages 5 (0 to 15), 45 (15 to 25), 115 (25 to 45), 0 (45 to 65), 0 (65+); 22 hectare; bevolkingsdichtheid 864 per km2; woningvoorraad 160, all huurwoningen; gemiddelde WOZ 210,000 euro (2025); gemiddeld inkomen 36,200 euro (2023); studenten HBO 10, WO 40.', url: 'https://allecijfers.nl/buurt/fellenoord-eindhoven/' },
      { claim: 'Groot-Eindhoven: the annexation of the five randgemeenten Strijp, Gestel en Blaarthem, Stratum, Tongelre and Woensel; de gemeente Eindhoven ineens veel groter was geworden, vooral qua oppervlakte (84 maal zo groot, van 75 tot 6300 ha) maar ook qua inwoneraantal (zeven maal zo groot, van 6.500 naar 46.000).', url: 'https://nl.wikipedia.org/wiki/Geschiedenis_van_Eindhoven' },
      { claim: 'Stadsdeel Stratum, Eindhoven: three wijken, Oud-Stratum, Kortonjo and Putten; 35,665 inwoners on 1 January 2023; the municipality Eindhoven was formed on 1 January 1920 from the old town of Eindhoven and the surrounding municipalities Woensel, Strijp, Gestel, Stratum and Tongelre. The companion stadsdeel articles list Gestel (Rozenknopje, Oud-Gestel, Oud Kasteel), Strijp (Oud-Strijp, Halve Maan, Meerhoven), Woensel-Zuid (Oud-Woensel, Erp, Begijnenbroek), Woensel-Noord (Ontginning, Achtse Molen, Aanschot, Dommelbeemd) and Tongelre (Oud-Tongelre, De Laak, Doornakkers): nineteen wijken, against twenty published for the municipality.', url: 'https://nl.wikipedia.org/wiki/Stratum_(Eindhoven)' },
      { claim: 'Gemeente Eindhoven: 249,783 inwoners (2026); 130,304 huishoudens (2025); 20 wijken en 116 buurten.', url: 'https://allecijfers.nl/gemeente/eindhoven/' },
      { claim: 'School holiday regions: regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'That most young people in Centrum live on the campus. The campus holds 36.5 percent of them and the Binnenstad 36.1 percent.',
      'That students live on campus, or that they do not. 940 of 1,890 university students resident in Centrum live on the TU-terrein, and the page reports the split rather than either sentence.',
      'Any claim that the 266 hectares of todays wijk are the same ground as the 75 hectares of the pre-1920 town. The figures are quoted for the shape of the seven stadsdelen, not as a boundary comparison.',
      'Any reconciliation of the wijk income of 44,300 euro with the buurt incomes. They carry two different years and may average over different populations.',
      'Any treatment of the five buurt age counts as summing exactly to the wijk. They add to 3,330 against 3,340, all are published in multiples of five, and the wijk figure is used as the denominator without reconciliation.',
      'Any reading of the third digit of the 3.85 percent under fifteen. Precision against accuracy in the numerical sense is the Haagse Hout page argument.',
      'Any argument from the single primary establishment teaching more pupils than the children resident. The ceiling check is the Segbroek page argument.',
      'Any claim about the university itself, its student numbers or its admissions. Only residents counted in the statistics office rows are used.',
      'Anything the Eindhoven city page owns, including the BIC Noord workplaces, the High Tech Campus, the Indian-origin figures and the named secondary schools with their addresses.'
    ]
  }
};
