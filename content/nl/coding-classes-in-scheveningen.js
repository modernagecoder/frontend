'use strict';
// Scheveningen: the coastal stadsdeel of The Hague, four wijken read in full.
// Spine: one name has denoted at least four different things since 1357, so
// putting two of their counts in a sentence together is not a comparison.

module.exports = {
  slug: 'coding-classes-in-scheveningen',
  code: 'shv',
  accent: '#125F5C',
  accentRationale: 'Scheveningen: a deep sea teal off the North Sea under cloud and the green-black of the harbour water, distinct from the slate blue of the Hague city page, the moss green of Den Haag Centrum and the claret of Escamp, the three pages it sits beside, and nearest to Rotterdam, which it does not link to',
  pageType: 'district',
  place: {
    name: 'Scheveningen',
    eyebrow: 'Scheveningen, Den Haag',
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
  routeLabel: 'Scheveningen, The Hague, Netherlands',
  title: 'Coding Classes in Scheveningen, The Hague | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Scheveningen, The Hague, for ages 6 to 67, from Duindorp to the Statenkwartier. The first lesson is free.',
  ogDescription: 'Live online coding, Python and AI on the Hague coast, on a page about a name that outlived every definition it has had.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'complete-app-development-masterclass-for-teens',
  verifiedOn: '10 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Scheveningen Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults across the coastal wijken of Scheveningen in The Hague, taught in English.'
  },

  h1: 'Coding classes in Scheveningen, a name that has meant at least four different things and kept all their numbers',
  capsuleQ: 'What are the best coding classes in Scheveningen?',
  capsule: 'Coding classes in Scheveningen reach the coastal district of The Hague. In 1680 the fishing village held 917 people in 200 buildings. Wijk 07 Scheveningen held 19,637 residents in January 2026 across 10,505 households, of which 5,495 hold one person. Those two figures are often set in one sentence as growth, and they are not measurements of the same thing: the first counted a village, the second counts a statistical polygon of 232 hectares containing five buurten, only one of which is the old village. Modern Age Coders teaches live online in English from Duindorp to the Geuzenkwartier, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'The name is older than almost anything it has been attached to. A document of 1357 records terra de Sceveninghe. In 1570 the Allerheiligenvloed destroyed half the settlement, which was rebuilt. In 1680 it was 917 people in 200 buildings with about 250 of them in fishing. From 1818, when Jacob Pronk opened a wooden bathhouse with four bathing rooms, and more so from 1884 when the Kurhaus opened, it was a resort. In the twentieth century the statistics office drew a boundary and called the enclosed area Wijk 07 Scheveningen. Each of those is a real thing with a real number attached. The word connecting them is doing far less work than it appears to.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Scheveningen.',

  picks: {
    eyebrow: 'Course picks for Scheveningen',
    h2: 'Four courses for the coast',
    intro: 'A groep 5 child in Duindorp who has been given a tablet and never a keyboard, a teenager in the Statenkwartier with a folder of drawings of an app, a student in the Badplaats whose code broke the day somebody renamed something, and an adult in Belgisch Park watching a chart whose definition changed halfway along. Four ways in, and none of them costs anything on the first hour.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Real typed Python, where naming a thing and knowing what it holds turn out to be two separate jobs.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'An app taken from a folder of drawings to something that installs and runs, which is the step almost nobody takes alone.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python that runs unattended, where a field that quietly changed meaning is the most expensive kind of error there is.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reading a series across a change of definition, for anybody who has to explain why a chart turned.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Scheveningen today',
      h2: 'Four coastal wijken, read in full',
      intro: 'The four wijken read for this page are Wijk 07 Scheveningen, Wijk 09 Geuzen en Statenkwartier, Wijk 02 Belgisch Park and Wijk 08 Duindorp. Together they run from the harbour and the Badplaats along the dunes to the Statenkwartier behind them. Every figure below is quoted from the statistics office row for the wijk it is attached to.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The four rows', p: 'Wijk 07 Scheveningen holds 19,637 residents on 232 hectares, of which 231 are land and 1 water, at a published 8,370 to the square kilometre. Geuzen en Statenkwartier holds 14,741 on 135 hectares at 11,128. Belgisch Park holds 8,392 on 106 at 7,887. Duindorp holds 5,853 on 91 at 6,308. All four counts are at January 2026.' },
          { h3: 'Households and the shape of them', p: 'Scheveningen has 10,505 households averaging 1.8 people, 5,495 of them a single person, 52 percent. Geuzen en Statenkwartier has 7,330 averaging 2.0 with 45 percent single. Belgisch Park has 2,155 single households of 4,305. Duindorp has 2,830 households averaging 2.0, the lowest single-person share of the four at 44 percent.' },
          { h3: 'Old on the coast', p: 'The over-sixty-fives are between a fifth and a quarter everywhere here: 21 percent in Scheveningen, 22 in Belgisch Park, 20 in Geuzen en Statenkwartier, 18 in Duindorp. Children under fifteen run the other way and much tighter, from 14 to 16 percent. Housing values do not follow either: 620,000 euro average in Geuzen en Statenkwartier, 541,000 in Belgisch Park, 425,000 in Scheveningen, 377,000 in Duindorp.' }
        ] },
        { kind: 'spec', title: 'Why this page says four wijken and not four out of some number', p: 'The statistics office publishes wijken for the municipality, 45 of them across 115 buurten, and does not group them by stadsdeel in the listing this page was built from. So the number of wijken belonging to stadsdeel Scheveningen was not established from a published source, and rather than guess it or count from memory, this page names the four it read and claims no fraction at all. The two published stadsdeel totals are 55,717 residents for 2015 and, on the Hague city page in this series, 59,992 for 2022. Neither is a 2026 count and neither is used as one.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'One word, six rows, at least four different things',
      intro: 'Every row below is a real published figure and every row is about something called Scheveningen. They are not observations of one object at different times.',
      body: [
        { kind: 'table', caption: 'What the word has denoted, and what was counted', head: ['When', 'What bore the name', 'What was counted', 'The figure'], rows: [
          ['1357', 'terra de Sceveninghe, in a document', 'nothing; the name appears', 'no count'],
          ['1570', 'the settlement, after the Allerheiligenvloed', 'the half destroyed', 'no count'],
          ['1680', 'the fishing village', 'people, and buildings', '917 in 200'],
          ['1818 and 1884', 'the bathing resort', 'Pronk bathhouse, then the Kurhaus', 'no count'],
          ['2014', 'Wijk 07 Scheveningen, a statistical area', 'residents inside a boundary', '16,570'],
          ['2026', 'Wijk 07 Scheveningen, the same boundary', 'residents inside it', '19,637']
        ] },
        { kind: 'p', text: 'The last two rows can be compared. They are the same office, the same definition and the same polygon, twelve years apart. None of the earlier rows can be compared with them, and the reason is not that the old records are unreliable. It is that a fishing village of 200 buildings and a wijk of 232 hectares containing Scheveningen Badplaats, Rijslag, Oud Scheveningen, the Visserijbuurt and the Vissershaven are different objects, and only one of those five buurten is the place that was counted in 1680. Nothing was measured badly. The two numbers were simply never about the same thing.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Four rows in full, nothing calculated, and one number this page does not have',
      intro: 'Each wijk as published with its year, the history and where it comes from, and a plain statement of what is missing.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Wijk 07 Scheveningen', p: '19,637 residents (2026); 10,505 households averaging 1.8, 5,495 single-person at 52 percent; 2,690 under fifteen at 14 percent, 2,110 aged fifteen to twenty-five, 5,540 aged twenty-five to forty-five at 28 percent, 5,265 aged forty-five to sixty-five, 4,055 over sixty-five at 21 percent; 232 hectares, 231 land and 1 water; density 8,370; 10,984 dwellings; average value 425,000 euro; 5,382 owner-occupied at 49 percent and 5,492 rented at 50; income 38,900 euro (2024); 2 primary establishments with 716 pupils and 1 secondary with 831; five buurten, Scheveningen Badplaats, Rijslag, Oud Scheveningen, Visserijbuurt and Vissershaven.' },
          { h3: 'Wijk 09 Geuzen en Statenkwartier', p: '14,741 residents (2026); 7,330 households averaging 2.0, 3,330 single-person at 45 percent; 2,180 under fifteen at 15 percent, 1,730 aged fifteen to twenty-five, 3,615 aged twenty-five to forty-five, 4,260 aged forty-five to sixty-five at 29 percent, 2,965 over sixty-five at 20 percent; 135 hectares; density 11,128; 7,565 dwellings; average value 620,000 euro, the highest of the four; 4,463 owner-occupied at 59 percent and 3,026 rented at 40; income 51,300 euro (2024); 6 primary establishments with 1,264 pupils and 2 secondary with 336; two buurten, the Statenkwartier and the Geuzenkwartier.' },
          { h3: 'Wijk 02 Belgisch Park', p: '8,392 residents (2026); 4,305 households averaging 1.9, 2,155 single-person at 50 percent; 1,215 under fifteen at 14 percent, 1,265 aged fifteen to twenty-five, 1,810 aged twenty-five to forty-five, 2,260 aged forty-five to sixty-five, 1,810 over sixty-five at 22 percent, the oldest share of the four; 106 hectares; density 7,887; 4,165 dwellings; average value 541,000 euro; 2,541 owner-occupied at 61 percent and 1,583 rented at 38; income 43,900 euro (2024); 2 primary establishments with 563 pupils and no secondary establishment.' },
          { h3: 'Wijk 08 Duindorp', p: '5,853 residents (2026); 2,830 households averaging 2.0, 1,245 single-person at 44 percent; 955 under fifteen at 16 percent, 605 aged fifteen to twenty-five, 1,515 aged twenty-five to forty-five, 1,700 aged forty-five to sixty-five at 29 percent, 1,040 over sixty-five at 18 percent; 91 hectares; density 6,308; 2,840 dwellings; average value 377,000 euro; 1,221 owner-occupied at 43 percent and 1,619 rented at 57; income 30,500 euro (2024); 1 primary establishment with 71 pupils and no secondary establishment.' },
          { h3: 'The history, and its source', p: 'The 1357 document recording terra de Sceveninghe, the Allerheiligenvloed of 1570 that destroyed half the settlement, the 1680 figure of 917 people in 200 buildings with around 250 in fishing, Jacob Pronk opening the first bathhouse in 1818 as a small wooden building with a waiting room and four bathing rooms with sea views, and the Kurhaus opening in 1884, all come from the published encyclopaedia entry, which also gives 16,570 residents for Wijk 07 in 2014 and 55,717 for the stadsdeel in 2015.' },
          { h3: 'What is not here', p: 'No arithmetic. Every figure above is quoted as published, none was averaged, and no wijk figure was combined with another. There is also no count of how many wijken make up stadsdeel Scheveningen, because no source consulted for this page groups the municipality 45 wijken by stadsdeel, and a number that would have to be assembled by hand is not a published number.' }
        ] },
        { kind: 'p', text: 'Nothing connects Modern Age Coders to Scheveningen, to The Hague or to any school named or counted above, and nothing here should be read as claiming otherwise. Wijk figures come one page at a time from the statistics office, at the vintages that office assigns: residents and ages January 2026, households and housing 2025, income 2024. The historical material is separately sourced and separately dated, which is the entire point of the page.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The name held. The thing it named did not.',
      intro: 'Two numbers, three centuries apart, and the question nobody asks before subtracting one from the other.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Ask what bore the name each time', p: 'In 1680 it was a village of 200 buildings whose people fished. In 2026 it is a boundary drawn by a statistics office around 232 hectares holding five buurten, of which the old village is one. Both are called Scheveningen. Neither definition mentions the other.' },
          { h3: '2. Notice that nothing in the data objects', p: 'The 917 and the 19,637 sit in the same column of the same kind of record, both are correct, both are about people, both are about Scheveningen. There is no error to detect, no flag, no mismatch of type or units. This is why the mistake survives review: it looks exactly like a valid comparison.' },
          { h3: '3. Compare only within a definition', p: 'Wijk 07 held 16,570 in 2014 and 19,637 in 2026. Same office, same boundary, twelve years. That comparison is available and this page makes no more of it than that, because a comparison being valid does not make it interesting.' }
        ] },
        { kind: 'table', caption: 'A name outliving its meaning, in five other places', head: ['The stable name', 'What changed underneath it', 'What the chart shows', 'What it looks like'], rows: [
          ['A column called active_users', 'the definition of active', 'a step in the series', 'growth, or collapse'],
          ['A customer ID reused after deletion', 'which customer it points at', 'one long history', 'a loyal customer'],
          ['A function kept through a refactor', 'what it returns', 'nothing; it compiles', 'working code'],
          ['A config key across two versions', 'what the value controls', 'no warning at all', 'a setting that stopped mattering'],
          ['Scheveningen, since 1357', 'village, resort, statistical wijk', '917 and then 19,637', 'three centuries of growth']
        ] },
        { kind: 'callout', h3: 'A compiler checks names. Nothing checks meanings.', p: 'Renaming is the one refactor everybody trusts, because the tools make it safe: change a name in one place and every reference follows, and if one does not the build breaks and tells you. That reliability is exactly what makes the opposite mistake invisible. Keep the name and change what it means, and no tool anywhere will say a word. The code compiles, the tests pass if they were written against the name rather than the behaviour, the dashboard keeps drawing, the column keeps filling, and every consumer downstream carries on believing something that stopped being true at a particular commit on a particular afternoon. This is the single most expensive class of error in long-lived systems and it is almost never taught, because it cannot be demonstrated in a short program: it needs time to pass. So the discipline has to be imported deliberately. When a definition changes, change the name too, even when the old one still fits, even when it is more work, even when everyone knows what is meant. A new name forces every user to look at it once. Keeping the old one buys a week of convenience and sells an unbounded number of future comparisons that will look valid, pass every check, and be wrong. A place can carry one name for seven hundred years and be four different things; a column can do it in eighteen months, and unlike the place, the column will let you subtract.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for a series that crosses a redefinition',
      intro: 'Revenue, headcount, active users, response time, pass rate: every long-running measure eventually gets redefined, and the name almost never changes with it. Practised on a coast where one word has covered a village, a resort and a polygon.',
      body: [
        { kind: 'table', caption: 'Reading a number whose name is older than its definition', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Date the definition', 'Record when the meaning was set, not only when the value was', 'Two definitions read as one series', 'A boundary you can see'],
          ['Ask what bore the name', 'Describe the object counted, in each period, without the name', 'A word standing in for an identity', 'Whether there is anything to compare'],
          ['Split at every change', 'Break the series wherever the definition moved', 'A single line drawn through two things', 'Segments that are each honest'],
          ['Rename on redefinition', 'Give the new meaning a new name, always', 'The next person repeating this', 'A break that announces itself'],
          ['Say what is not comparable', 'Publish the parts that cannot be joined, as such', 'A gap filled by assumption', 'A record that stays true as it ages']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A variable called score that the child quietly starts using for lives instead. Ten minutes later they try to explain their own program and discover what they did to themselves.' },
          { h3: 'For teenagers', p: 'A small dataset with one column redefined halfway down, and a chart built from it before anyone is told. The stretch: write the code that would have caught it, and find out that it has to be told the definitions, because it cannot infer them.' },
          { h3: 'For adults', p: 'A metric at work that goes back several years. Adults very often find one redefinition nobody logged, and a comparison currently being made across it in a report that goes upward.' }
        ] },
        { kind: 'p', text: 'Wijk figures are quoted from four statistics office pages, one per wijk, at the office own vintages: residents and ages January 2026, households and housing 2025, income 2024. The 1357 document, the 1570 flood, the 1680 count of 917 people in 200 buildings, the 1818 bathhouse, the 1884 Kurhaus, the 16,570 for 2014 and the 55,717 for 2015 come from the encyclopaedia entry. Those two bodies of fact are kept visibly apart here because joining them is the error the page is about.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a variable that quietly changed job to a report comparing across a redefinition',
    intro: 'Where a learner starts is settled in the free hour by what they can actually do. Neither the wijk nor the birth year has any part in it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'The variable that changed job', p: 'Children rename one thing halfway through and then have to read their own program back.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Date the definition', p: 'Learners write down what each column means and when that was decided.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'The break the code cannot infer', p: 'Teenagers try to detect a redefinition automatically and find out why it has to be declared.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The comparison already in the report', p: 'Adults take a multi-year metric apart and usually find one redefinition nobody recorded.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell you Scheveningen grew from 917 people to nearly twenty thousand. Why should a teenager in Duindorp ask which Scheveningen?',
    intro: 'Because both numbers are correct and they are not about the same place.',
    p1: 'Give a model the 1680 village count and the 2026 wijk count and it will build a sentence about growth, because that is the shape those two numbers make and because the word between them is identical. It has no way to notice that one of them counts a settlement of 200 buildings and the other counts everyone inside a boundary a statistics office drew centuries later around five buurten, only one of which is that settlement. Nothing in either figure marks the change. There is no unit mismatch to catch, no type error, no missing field; the join succeeds cleanly, which is precisely the problem, and a fluent paragraph comes out the other side describing three hundred years of expansion that nobody measured.',
    p2: 'So the learner practises asking what bore the name, every time, before comparing anything to anything. It starts in their own code, where the lesson is cheapest: a variable that changes job mid-program, a function that survives a refactor with its name and not its meaning, a column that means one thing above a certain row and another below it. A fifteen-year-old in the Statenkwartier who has been bitten by that once will be the person at thirty who asks when a metric was last redefined before agreeing that it has doubled. Models will keep joining on names, because names are what they have. Asking whether the name still points at the same thing stays a person job.',
    closer: 'The case for a child in Scheveningen learning to code in 2026 is therefore not about the coast. It is that code is where the gap between a name and a meaning is small enough to see and quick enough to hurt, which is the only way anyone ever learns it.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes along the Hague coast',
    intro: 'Scheveningen sits apart from the rest of the city, up behind the dunes, with the harbour at one end and the Statenkwartier at the other, and a good deal of the year when the weather makes an evening trip unattractive.',
    cells: [
      { h3: 'The dunes stay where they are', p: 'Getting from Duindorp or the Vissershaven to anywhere inland in February, in the dark, in the wind off the sea, is the reason a weekly commitment lapses. A class that happens at home does not have that failure mode.' },
      { h3: 'Untranslated on purpose', p: 'Groep, havo, vwo, profielkeuze. Four Dutch words held constant inside an English lesson, because those are the words on the paperwork, and a child should not have to translate their own school year to answer a question about it.' },
      { h3: 'The free lesson is a lesson', p: 'A task, a teacher watching the working rather than the answer, and three things settled by the end: the level, the course that follows from it, and the hour each week. No payment, no card, no follow-up call pretending to be one.' },
      { h3: 'Stage, not postcode', p: 'A group is five to ten learners at one stage. Any single wijk, at any given month, has almost nobody at a specific narrow level, so groups are drawn from everywhere. It is the reason a level exists to join instead of a list to join.' },
      { h3: 'Two a week, regio Midden dates', p: 'Roughly eight lessons a month at one fixed hour. School holidays across Zuid-Holland follow regio Midden and are published years in advance, so the weeks off are written into the schedule when it is made.' },
      { h3: 'One clock moves, and it is not the teacher one', p: 'Three and a half hours ahead in Dutch summer time, four and a half outside it. India has kept a single time for decades; the whole change comes from here, and neither setting removes an hour a family would have used.' }
    ],
    spec: { title: 'A wijk with 955 children and a wijk with 2,690', p: 'Duindorp has 955 residents under fifteen and Wijk 07 Scheveningen has 2,690, with Geuzen en Statenkwartier at 2,180 and Belgisch Park at 1,215. Those are four quite different sized populations of children living within a few kilometres of one another. None of them tells you whether five to ten learners at one specific stage of one specific subject will be available in one specific month, because a stage is narrow and a wijk is wide and the two have nothing to do with each other. Which is why the pool is worldwide and the ages run from 6 to 67.' }
  },

  fees: {
    h2: 'The fee, in dollars, everywhere on the coast',
    intro: 'Written down here instead of saved for a conversation.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'A single international rate in dollars, with no euro edition, so the Vissershaven and the Statenkwartier are quoted identically. Nothing is paid until the free lesson has produced a course and an hour, and payment is arranged afterwards over WhatsApp. Pausing, changing plan and missing a week are all written out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, exactly as the people who left them wrote them',

  book: {
    h2: 'Send the level, not the wijk',
    intro: 'The first task might be a variable caught changing job halfway down a program, a column redefined in the middle of a small dataset, or a metric at work that goes back far enough to have been redefined without anyone writing it down.',
    success: 'Thank you. Your Scheveningen class request has been sent.'
  },

  faq: {
    h2: 'Scheveningen coding class questions',
    intro: 'The coast, its wijken, one word doing too much work, the teaching and the terms.',
    items: [
      { q: 'Did Scheveningen really grow from 917 people to nearly twenty thousand?', a: 'Both numbers are published and neither is a measurement of the other object. The 917 people in 200 buildings is a count of the fishing village in 1680. The 19,637 is a count of everyone inside Wijk 07 Scheveningen at January 2026, a statistical area of 232 hectares containing five buurten, of which the old village is one. Putting them in a sentence about growth compares a village with a polygon, and the only thing they share is the name.' },
      { q: 'Which parts of the coast does this page cover?', a: 'Four wijken read in full: Wijk 07 Scheveningen with its five buurten, Scheveningen Badplaats, Rijslag, Oud Scheveningen, the Visserijbuurt and the Vissershaven; Wijk 09 Geuzen en Statenkwartier, which holds the Statenkwartier and the Geuzenkwartier; Wijk 02 Belgisch Park; and Wijk 08 Duindorp. No claim is made about how many wijken the stadsdeel has in total, because no consulted source groups the municipality 45 wijken that way.' },
      { q: 'Is Scheveningen an expensive part of The Hague?', a: 'It varies sharply across a few kilometres. Average dwelling value is 620,000 euro in Geuzen en Statenkwartier, 541,000 in Belgisch Park, 425,000 in Wijk 07 Scheveningen and 377,000 in Duindorp, all for 2025. Average income per resident for 2024 runs 51,300, 43,900, 38,900 and 30,500 euro in the same order.' },
      { q: 'Are there many children on the coast?', a: 'Fewer, proportionally, than in much of the city, and the four wijken are close together on it: under-fifteens are 14 percent in Wijk 07 Scheveningen and Belgisch Park, 15 percent in Geuzen en Statenkwartier and 16 percent in Duindorp. In counts that is 2,690, 1,215, 2,180 and 955. The over-sixty-fives are a fifth or more in three of the four.' },
      { q: 'Why does this page keep the history separate from the statistics?', a: 'Because joining them is the mistake it is written about. The encyclopaedia material, from the 1357 document to the Kurhaus in 1884, describes a village and then a resort. The statistics office rows describe a boundary drawn much later. Both are quoted, both are dated, and no figure from one is set against a figure from the other except to show why that cannot be done.' },
      { q: 'Is the class taught in Dutch?', a: 'No, English throughout, with a single deliberate exception. The Dutch words for school years and tracks are kept in Dutch, so a teacher says groep, havo, vwo and profielkeuze as a child reads them on a report card rather than in translation. No course has a Dutch-language edition.' },
      { q: 'What hours suit a family in Scheveningen?', a: 'The teacher is three and a half hours ahead while Dutch summer time is in force and four and a half when it is not, and the whole of that difference is produced by the Dutch clock rather than the Indian one. What stays open is most of what a family would want: the end of the school day onwards, plus Saturday and Sunday. One weekly hour is fixed in the free lesson and then stays fixed.' },
      { q: 'Is there a Modern Age Coders classroom in Scheveningen?', a: 'No, and none is claimed here, elsewhere in The Hague or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Scheveningen coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore The Hague and beyond',
    h2: 'Inland from the dunes, and out along the coast',
    html: 'Inland are <a class="cg-inline-link" href="/coding-classes-in-the-hague-centrum">Den Haag Centrum</a>, which will not grade a household figure at all, and <a class="cg-inline-link" href="/coding-classes-in-escamp">Escamp</a>, which counts school buildings and then explains why that was the wrong count. The city page, <a class="cg-inline-link" href="/coding-classes-in-the-hague">coding classes in The Hague</a>, carries all eight stadsdelen. Further south the coast becomes the <a class="cg-inline-link" href="/coding-classes-in-westland">Westland</a>, and north-east across the province lies <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a> entire. Anyone whose real goal is a trained model rather than a running program is better served by <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the whole series hangs from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Finish this on WhatsApp'
  },

  footerHeading: 'The Hague and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-the-hague', label: 'The Hague' },
    { href: '/coding-classes-in-escamp', label: 'Escamp' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-shv .cg-hero-grid { grid-template-columns: 1fr 1.05fr; align-items: center; gap: clamp(1.4rem, 3.5vw, 2.7rem); }
.cg-root.cg-shv .cg-hero h1 { font-weight: 500; letter-spacing: -0.0135em; line-height: 1.1; }
.cg-root.cg-shv .cg-capsule { border-left: 3px solid var(--cg-accent); border-right: 1px solid var(--cg-accent-soft); padding: 0.95rem 1.3rem; }
.cg-root.cg-shv .cg-eyebrow { letter-spacing: 0.17em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-shv .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.016em; }
.cg-root.cg-shv .cg-grid-3 { gap: clamp(1.05rem, 2.2vw, 1.75rem); }
.cg-root.cg-shv .cg-card { border-radius: 4px; border-left: 2px solid var(--cg-accent-soft); }
.cg-root.cg-shv .cg-table caption { letter-spacing: 0.04em; font-weight: 600; }
.cg-root.cg-shv .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-shv .cg-table tbody tr:last-child td { font-weight: 600; }
.cg-root.cg-shv .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Stadsdeel Scheveningen, Den Haag, Zuid-Holland: the coastal district, 55,717 residents at the 2015 encyclopaedia figure and 59,992 on the city page for 2022, neither current; the number of wijken in the stadsdeel was not established from any consulted source, the statistics office publishing 45 wijken and 115 buurten for the municipality without stadsdeel grouping, so this page names four and claims no fraction. Four read in full at 2026: Wijk 07 Scheveningen 19,637 on 232 hectares, 231 land and 1 water, density 8,370, 10,505 households averaging 1.8 with 5,495 single at 52 percent, 2,690 under fifteen at 14 percent, 4,055 over sixty-five at 21 percent, 10,984 dwellings, value 425,000 euro, 5,382 owner-occupied at 49 percent, income 38,900 euro, 2 primary establishments with 716 pupils and 1 secondary with 831, five buurten Scheveningen Badplaats, Rijslag, Oud Scheveningen, Visserijbuurt and Vissershaven; Wijk 09 Geuzen en Statenkwartier 14,741 on 135 hectares, density 11,128, 7,330 households averaging 2.0 with 3,330 single at 45 percent, 2,180 under fifteen, 7,565 dwellings, value 620,000 euro the highest of the four, 4,463 owner-occupied at 59 percent, income 51,300 euro, 6 primary establishments with 1,264 pupils and 2 secondary with 336, buurten Statenkwartier and Geuzenkwartier; Wijk 02 Belgisch Park 8,392 on 106 hectares, density 7,887, 4,305 households averaging 1.9 with 2,155 single at 50 percent, 1,215 under fifteen, 1,810 over sixty-five at 22 percent, 4,165 dwellings, value 541,000 euro, 2,541 owner-occupied at 61 percent, income 43,900 euro, 2 primary establishments with 563 pupils; Wijk 08 Duindorp 5,853 on 91 hectares, density 6,308, 2,830 households averaging 2.0 with 1,245 single at 44 percent, 955 under fifteen, 2,840 dwellings, value 377,000 euro, 1,221 owner-occupied at 43 percent, income 30,500 euro, 1 primary establishment with 71 pupils. History: terra de Sceveninghe in a document of 1357; the Allerheiligenvloed of 1570 destroying half the settlement; 917 people in 200 buildings with about 250 in fishing in 1680; Jacob Pronk opening the first bathhouse in 1818; the Kurhaus in 1884; Wijk 07 at 16,570 in 2014. Regio Midden holidays. The district page argues that a persistent name is not a persistent referent; Den Haag Centrum owns the missing standard, Escamp necessary versus sufficient, Rotterdam Centrum boundary truncation, Taqah the trend fitted across a break.',
    localProject: 'A name is not an identity, and nothing in a dataset enforces the difference. Scheveningen appears in a document of 1357 as terra de Sceveninghe. In 1680 it was a fishing village of 917 people in 200 buildings, about 250 of them fishing, rebuilt after the Allerheiligenvloed of 1570 destroyed half of it. From 1818, when Jacob Pronk opened a wooden bathhouse, and more so from 1884 and the Kurhaus, it was a resort. In the twentieth century the statistics office drew a boundary and named the enclosure Wijk 07 Scheveningen, 232 hectares holding Scheveningen Badplaats, Rijslag, Oud Scheveningen, the Visserijbuurt and the Vissershaven, and counted 19,637 residents inside it in 2026. Setting 917 against 19,637 as growth compares a village with a polygon that contains it as one buurt of five. Both figures are correct, both count people, both are labelled Scheveningen, and there is no error anywhere for a check to find: the join succeeds, which is why the mistake survives review. The only legitimate comparison available is 16,570 in 2014 against 19,637 in 2026, same office and same boundary, and the page makes nothing of it beyond noting that it is the one that is allowed. The programming form is the most expensive error in long-lived systems: renaming is safe because tools enforce it, so keeping a name while changing its meaning is invisible, and a column called active_users, a reused customer id, a function that survived a refactor or a config key across two versions will all compile, pass and keep drawing while every downstream comparison quietly stops being true. Distinct from the trend fitted across a break (Taqah), which summarises one continuous series containing a real discontinuity: here there is no series at all, only two isolated observations three centuries apart whose referents differ. Distinct from boundary truncation (Rotterdam Centrum), which is geometric and has nothing to do with time. The page keeps the historical and statistical material visibly apart and states why joining them is not available.',
    requiredMentions: [
      '19,637',
      '10,505',
      '5,495',
      '2,690',
      '425,000',
      '14,741',
      '7,565',
      '620,000',
      '8,392',
      '5,853',
      '55,717',
      '16,570',
      'Vissershaven',
      'Sceveninghe'
    ],
    sources: [
      { claim: 'Wijk 07 Scheveningen, Den Haag: 19,637 inwoners (2026); 10,505 huishoudens averaging 1.8, 5,495 eenpersoonshuishoudens at 52 percent; ages 2,690 (0 to 15, 14 percent), 2,110 (15 to 25, 11 percent), 5,540 (25 to 45, 28 percent), 5,265 (45 to 65, 27 percent), 4,055 (65+, 21 percent); 232 hectare total, 231 land, 1 water; bevolkingsdichtheid 8,370 per km2; woningvoorraad 10,984 (2025); gemiddelde WOZ 425,000 euro (2025); 5,492 huurwoningen (50 percent) and 5,382 koopwoningen (49 percent); gemiddeld inkomen 38,900 euro (2024); 2 vestigingen basisonderwijs with 716 leerlingen and 1 vestiging voortgezet onderwijs with 831 leerlingen; 5 buurten: Scheveningen Badplaats, Rijslag, Oud Scheveningen, Visserijbuurt, Vissershaven.', url: 'https://allecijfers.nl/wijk/scheveningen-den-haag/' },
      { claim: 'Wijk 09 Geuzen en Statenkwartier, Den Haag: 14,741 inwoners (2026); 7,330 huishoudens averaging 2.0, 3,330 eenpersoonshuishoudens at 45 percent and 4,000 meerpersoonshuishoudens at 55; ages 2,180 (0 to 15, 15 percent), 1,730 (15 to 25, 12 percent), 3,615 (25 to 45, 25 percent), 4,260 (45 to 65, 29 percent), 2,965 (65+, 20 percent); 135 hectare; bevolkingsdichtheid 11,128 per km2; woningvoorraad 7,565 (2025); gemiddelde WOZ 620,000 euro (2025); 3,026 huurwoningen (40 percent) and 4,463 koopwoningen (59 percent); gemiddeld inkomen 51,300 euro (2024); 6 vestigingen basisonderwijs with 1,264 leerlingen and 2 vestigingen voortgezet onderwijs with 336 leerlingen; 2 buurten: Statenkwartier, Geuzenkwartier.', url: 'https://allecijfers.nl/wijk/geuzen-en-statenkwartier-den-haag/' },
      { claim: 'Wijk 02 Belgisch Park, Den Haag: 8,392 inwoners (2026); 4,305 huishoudens averaging 1.9, 2,155 eenpersoonshuishoudens at 50 percent; ages 1,215 (0 to 15, 14 percent), 1,265 (15 to 25, 15 percent), 1,810 (25 to 45, 22 percent), 2,260 (45 to 65, 27 percent), 1,810 (65+, 22 percent); 106 hectare; bevolkingsdichtheid 7,887 per km2; woningvoorraad 4,165 (2025); gemiddelde WOZ 541,000 euro (2025); 1,583 huurwoningen (38 percent) and 2,541 koopwoningen (61 percent); gemiddeld inkomen 43,900 euro (2024); 2 vestigingen basisonderwijs with 563 leerlingen and 0 vestigingen voortgezet onderwijs.', url: 'https://allecijfers.nl/wijk/belgisch-park-den-haag/' },
      { claim: 'Wijk 08 Duindorp, Den Haag: 5,853 inwoners (2026); 2,830 huishoudens averaging 2.0, 1,245 eenpersoonshuishoudens at 44 percent; ages 955 (0 to 15, 16 percent), 605 (15 to 25, 10 percent), 1,515 (25 to 45, 26 percent), 1,700 (45 to 65, 29 percent), 1,040 (65+, 18 percent); 91 hectare; bevolkingsdichtheid 6,308 per km2; woningvoorraad 2,840 (2025); gemiddelde WOZ 377,000 euro (2025); 1,619 huurwoningen (57 percent) and 1,221 koopwoningen (43 percent); gemiddeld inkomen 30,500 euro (2024); 1 vestiging basisonderwijs with 71 leerlingen and 0 vestigingen voortgezet onderwijs.', url: 'https://allecijfers.nl/wijk/duindorp-den-haag/' },
      { claim: 'Scheveningen, Den Haag: the name first appears in a 1357 document as terra de Sceveninghe, the -ingen suffix suggesting a 10th or 11th century origin; in 1570 the Allerheiligenvloed destroyed half the settlement; in 1680 Scheveningen housed 917 people in 200 buildings, with approximately 250 engaged in fishing; Jacob Pronk Nz opened the first bathhouse in 1818, a small wooden building with a waiting room and four bathing rooms with sea views; the Kurhaus hotel opened in 1884 in Italian Renaissance style; the village transformed from a fishing community using pink and bomschuit vessels into a seaside resort. Wijk 07 Scheveningen had 16,570 inhabitants in 2014; the stadsdeel as a whole had 55,717 inhabitants in 2015.', url: 'https://nl.wikipedia.org/wiki/Scheveningen' },
      { claim: 'Gemeente Den Haag: 569,468 inwoners in 2026; 1 woonplaats, 45 wijken en 115 buurten. The wijk listing is published for the municipality and is not grouped by stadsdeel.', url: 'https://allecijfers.nl/gemeente/den-haag/' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'That Scheveningen grew from 917 people to 19,637. The two figures count different objects and the sentence joining them is the error this page exists to describe.',
      'Any count of how many wijken stadsdeel Scheveningen contains. No consulted source groups the municipality 45 wijken by stadsdeel, so four are named and no fraction is claimed.',
      'A 2026 population for the stadsdeel. The published totals are 55,717 for 2015 and 59,992 for 2022 on the city page, both dated wherever used.',
      'Any stadsdeel figure assembled from the four wijken read, and any average across them.',
      'Any claim that the 2014 to 2026 change in Wijk 07 has a cause. It is offered only as the one comparison the definitions permit.',
      'Any reading of the gap between the published housing stock and the sum of the owner-occupied and rented counts. That gap is a difference between two registers and belongs to the Amsterdam-Zuid page.',
      'Any argument from the coastline being outside the wijk boundary. Geometric truncation at a border is the Rotterdam Centrum page argument.',
      'Any trend fitted across the historical and statistical material together. The Taqah page in this series covers a line drawn through a real break in one series; here there is no series, only two isolated observations of different objects.',
      'Any ranking of the four wijken by income or dwelling value presented as a finding. The figures are quoted; the Hillegersberg-Schiebroek page owns the argument about correlated measures.',
      'Anything the Hague city page owns, including the stadsdeel population table, the named secondary schools and their addresses.'
    ]
  }
};
