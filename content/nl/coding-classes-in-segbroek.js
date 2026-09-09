'use strict';
// Segbroek: the pre-war middle of The Hague, five wijken, all read.
// Spine: two wijken teach more pupils than their whole resident population
// under twenty-five could supply, which is provable by ceiling rather than
// argued from catchments.

module.exports = {
  slug: 'coding-classes-in-segbroek',
  code: 'sgb',
  accent: '#0F6E89',
  accentRationale: 'Segbroek: a petrol blue off the water of the old Segbroekpolder the stadsdeel is named for, the widest separation available from every Hague page it links to, and nearest to Rotterdam, which it does not link to',
  pageType: 'district',
  place: {
    name: 'Segbroek',
    eyebrow: 'Segbroek, Den Haag',
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
  routeLabel: 'Segbroek, The Hague, Netherlands',
  title: 'Coding Classes in Segbroek, The Hague | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Segbroek, The Hague, for ages 6 to 67, from the Heesterbuurt to the Vogelwijk. The first lesson is free.',
  ogDescription: 'Live online coding, Python and AI in the pre-war middle of The Hague, on a page about checking a number against the largest it could possibly be.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '10 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Segbroek Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults across the five wijken of stadsdeel Segbroek in The Hague, taught in English.'
  },

  h1: 'Coding classes in Segbroek, where one wijk of 5,444 people teaches 3,416 pupils',
  capsuleQ: 'What are the best coding classes in Segbroek?',
  capsule: 'Coding classes in Segbroek reach the pre-war middle of The Hague, five wijken, all five read for this page. The Vogelwijk holds 5,444 residents and 2,170 dwellings. Inside it, seven primary establishments teach 2,930 pupils and one secondary establishment teaches 486. That is 3,416 pupils in a wijk whose entire population under twenty-five is 1,730. No argument about school catchments is needed to see that those two counts are of different people: one of them is larger than the largest it could possibly be. Modern Age Coders teaches live online in English from the Heesterbuurt to Eykenduinen, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'There is a check almost nobody runs and it costs about four seconds. Take a number and ask what it cannot exceed. The Vogelwijk teaches 3,416 pupils. It contains 1,020 residents under fifteen and 710 aged fifteen to twenty-five, and even counting every one of those as a possible pupil, which is far too generous since primary school runs from four to twelve, the ceiling is 1,730. The published figure is roughly double its own maximum. Nothing is wrong with either number. What is wrong is reading them as though they described the same children, and the ceiling shows that in one step, without needing to know anything at all about how schools admit.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Segbroek.',

  picks: {
    eyebrow: 'Course picks for Segbroek',
    h2: 'Four courses for the pre-war middle',
    intro: 'A groep 5 child in the Bomenbuurt who has never watched a program catch its own mistake, a teenager in the Heesterbuurt whose app is a list of features and no files, a student in the Vruchtenbuurt whose script happily reports a percentage of 140, and an adult in the Vogelwijk signing off a table nobody has bounds-checked. Four ways in, and the first hour of each is free.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python with checks in it, where a child makes the program refuse an answer that could not possibly be right.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'An app carried from a feature list to something installed and running, which is the step that never happens on its own.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python that runs unattended, where an impossible value passes silently through six steps unless something is watching for it.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Testing every figure against its ceiling before interpreting it, for anybody who reports numbers other people act on.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Segbroek today',
      h2: 'Five wijken, all read, from the densest to the greenest',
      intro: 'Segbroek became a stadsdeel in 1988 and takes its name from the old Segbroekpolder. Its five wijken are the Valkenboskwartier en Heesterbuurt, the Regentessekwartier, the Bomen- en Bloemenbuurt, the Vruchtenbuurt and the Vogelwijk, and all five were read for this page. The published stadsdeel population is 63,259 for 2025; the Hague city page in this series carries 62,507 for 2022, and the encyclopaedia entry notes that just over 60,000 people lived here in 2013.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The densest wijken in the cluster', p: 'The Valkenboskwartier holds 18,159 residents on 106 hectares of land, a published 17,410 people to the square kilometre, the highest figure this series has read anywhere. The Regentessekwartier follows at 15,841 on 94 hectares. The Bomen- en Bloemenbuurt runs at 10,621, the Vruchtenbuurt at 9,582, and the Vogelwijk at 2,030 on 268 hectares.' },
          { h3: 'And the widest spread in what things are worth', p: 'The estimated average dwelling value runs from 333,000 euro in the Valkenboskwartier and 389,000 in the Regentessekwartier to 428,000 in the Bomen- en Bloemenbuurt, 443,000 in the Vruchtenbuurt and 939,000 in the Vogelwijk. Owner-occupation runs the same way, from 49 percent to 90. Average income per resident for 2024 runs 35,000, 37,900, 41,100, 41,200 and 56,400 euro. Every value figure is an assessment rather than a count, which the Loosduinen page in this series sets out.' },
          { h3: 'Households, and how they differ', p: 'The Valkenboskwartier has 10,230 households averaging 1.8 people, 5,590 of them a single person, 55 percent, against 9,878 dwellings. The Regentessekwartier has 8,015 averaging 1.8 with 4,470 single. The Bomen- en Bloemenbuurt has 7,720 averaging 1.9 against 7,795 dwellings. The Vruchtenbuurt has 4,575 averaging 2.1, and the Vogelwijk 2,105 averaging 2.6, the largest here, against 2,170 dwellings.' }
        ] },
        { kind: 'spec', title: 'The check this page is built on', p: 'Every quantity has a ceiling somewhere in the same table, put there by another quantity. Pupils taught inside a wijk cannot exceed the residents of that wijk who are young enough to be pupils, if the pupils are the wijk own children. Children under fifteen cannot exceed total residents. Owner-occupied dwellings cannot exceed the dwelling stock. Single-person households cannot exceed households. None of those ceilings is printed anywhere, and all of them can be found in a few seconds by asking what this number is a part of. Two of the five wijken below break one of those ceilings by a wide margin, and that fact settles something no amount of reading the figures on their own would settle.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Pupils taught, against the most pupils there could be',
      intro: 'For each wijk: the pupils taught inside it, and every resident under twenty-five. The second column is a deliberately generous ceiling, since primary school runs from four to twelve and secondary from twelve to eighteen, so the true pool is smaller than shown.',
      body: [
        { kind: 'table', caption: 'Every figure published; the last column is subtraction', head: ['Wijk', 'Pupils taught in it', 'Residents under twenty-five', 'Against the ceiling'], rows: [
          ['Vogelwijk', '3,416', '1,730', 'exceeds it by 1,686'],
          ['Bomen- en Bloemenbuurt', '5,051', '3,675', 'exceeds it by 1,376'],
          ['Valkenboskwartier', '451', '4,475', 'far below'],
          ['Regentessekwartier', '619', '3,755', 'far below'],
          ['Vruchtenbuurt', '632', '2,685', 'far below']
        ] },
        { kind: 'p', text: 'Two of five are impossible as local totals and three are nowhere near their ceiling, inside one stadsdeel, from one table, in one year. The first two prove by arithmetic what the Escamp page in this series argues by logic: establishments inside a boundary teach whoever is enrolled, not whoever lives there. The difference is worth having. An argument about catchments can be disputed, ignored or forgotten. A number larger than its own maximum cannot, and it takes one subtraction to find. The three wijken far below the ceiling are the same fact seen from underneath, and neither direction says anything about how well any child here is served.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'All five wijken, the sums that were done, and one figure left unexplained',
      intro: 'Each row as published with its year, the arithmetic set out in full, and a plain account of what the page does not resolve.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Valkenboskwartier en Heesterbuurt', p: '18,159 residents (2026); 10,230 households averaging 1.8, 5,590 single-person at 55 percent; 2,365 under fifteen at 13 percent, 2,110 aged fifteen to twenty-five, 7,100 aged twenty-five to forty-five at 39 percent, 4,450 aged forty-five to sixty-five, 2,125 over sixty-five; 107 hectares, 106 land and 1 water; density 17,410, the highest in this series; 9,878 dwellings; estimated value 333,000 euro; 4,840 owner-occupied at 49 percent and 5,038 rented at 51; income 35,000 euro (2024); 3 primary establishments with 451 pupils and no secondary establishment; two buurten, the Valkenboskwartier and the Heesterbuurt.' },
          { h3: 'Regentessekwartier', p: '14,376 residents (2026); 8,015 households averaging 1.8, 4,470 single-person at 56 percent and 3,545 multi-person at 44; 1,995 under fifteen at 14 percent, 1,760 aged fifteen to twenty-five, 5,555 aged twenty-five to forty-five at 39 percent, 3,380 aged forty-five to sixty-five, 1,715 over sixty-five; 94 hectares; density 15,841; 7,774 dwellings; estimated value 389,000 euro; 2,721 owner-occupied at 35 percent and 5,053 rented at 65; income 37,900 euro (2024); 3 primary establishments with 619 pupils, and one secondary establishment against which no pupils are listed; two buurten, Koningsplein en omgeving and Rond de Energiecentrale.' },
          { h3: 'Bomen- en Bloemenbuurt', p: '14,912 residents (2026); 7,720 households averaging 1.9, 3,555 single-person at 46 percent; 2,195 under fifteen at 15 percent, 1,480 aged fifteen to twenty-five at 9.9 percent, 3,905 aged twenty-five to forty-five, 4,140 aged forty-five to sixty-five at 28 percent, 3,225 over sixty-five at 22 percent; 142 hectares, 141 land and 2 water; density 10,621; 7,795 dwellings; estimated value 428,000 euro; 5,379 owner-occupied at 69 percent and 2,338 rented at 30; income 41,100 euro (2024); 5 primary establishments with 1,450 pupils and 4 secondary with 3,601; three buurten, the Bomenbuurt, Bloemenbuurt-Oost and Bloemenbuurt-West.' },
          { h3: 'Vruchtenbuurt and Vogelwijk', p: 'Vruchtenbuurt: 9,942 residents (2026); 4,575 households averaging 2.1, 1,675 single-person at 37 percent; 1,650 under fifteen at 17 percent, 1,035 aged fifteen to twenty-five; 104 hectares; density 9,582; 4,600 dwellings; estimated value 443,000 euro; 3,634 owner-occupied at 79 percent; income 41,200 euro (2024); 2 primary establishments with 632 pupils; buurten Vruchtenbuurt and Eykenduinen. Vogelwijk: 5,444 residents; 2,105 households averaging 2.6, 475 single at 23 percent; 1,020 under fifteen at 19 percent, 710 aged fifteen to twenty-five, 675 aged twenty-five to forty-five at 12 percent, 1,830 aged forty-five to sixty-five at 34 percent, 1,200 over sixty-five; 268 hectares; density 2,030; 2,170 dwellings; estimated value 939,000 euro, the highest in this series; 1,953 owner-occupied at 90 percent and 217 rented at 10; income 56,400 euro (2024); 7 primary establishments with 2,930 pupils and 1 secondary with 486.' },
          { h3: 'Every calculation on this page', p: 'Ten additions and two subtractions, all on published counts from the same table and the same year. Pupils: 2,930 plus 486 is 3,416 in the Vogelwijk; 1,450 plus 3,601 is 5,051 in the Bomen- en Bloemenbuurt; the other three wijken have a single primary figure each. Residents under twenty-five: 1,020 plus 710 is 1,730; 2,195 plus 1,480 is 3,675; 2,365 plus 2,110 is 4,475; 1,995 plus 1,760 is 3,755; 1,650 plus 1,035 is 2,685. The two differences are 3,416 minus 1,730, which is 1,686, and 5,051 minus 3,675, which is 1,376.' },
          { h3: 'A figure this page does not explain', p: 'The Regentessekwartier is published with one secondary establishment and no pupil count beside it. That could be a genuine zero, a suppressed small number, or an establishment registered without an enrolment recorded, and nothing read for this page decides between them. It is reported here and used for nothing. Treating an absent value as a zero is the Ash Sharqiyah South page argument in this series, and the safe course is to leave it out of every total, which is what has been done.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to Segbroek, to any of its five wijken, to The Hague or to any school counted above, and nothing here implies one. Five separate statistics office pages supplied the five rows, and the years attached to them are the office own rather than this page choosing: a January 2026 count of residents and ages, 2025 for households and housing, 2024 for income. Dwelling values are assessments throughout, never enumerations. The 1988 formation, the Segbroekpolder the stadsdeel is named after, the 2025 population of 63,259 and the note that just over 60,000 people lived here in 2013 come from the encyclopaedia entry.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'What is the largest this number could possibly be?',
      intro: 'One question, four seconds, and the class of error that no amount of careful reading will catch.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Find the ceiling in the same table', p: 'Almost every quantity is a part of something else that is also published. Pupils sit under residents of school age. Owner-occupied dwellings sit under the dwelling stock. Single-person households sit under households. The ceiling is rarely printed and is almost always one column away.' },
          { h3: '2. Compare, and be generous about it', p: 'Use the largest defensible ceiling, not the tightest. Here that means counting everyone under twenty-five as a possible pupil, which nobody believes. A breach that survives a generous ceiling is a real breach; one that only appears under a strict ceiling might be an argument about the ceiling instead.' },
          { h3: '3. Then say what the breach proves', p: 'Not that anybody made a mistake. That the two counts are of different populations, which here means schools teaching children who live elsewhere. The ceiling did not suggest that conclusion. It forced it, from figures that were correct all along.' }
        ] },
        { kind: 'table', caption: 'The ceiling nobody checked, in five other places', head: ['The value', 'What it cannot exceed', 'How it fails', 'Why it survives review'], rows: [
          ['A completion rate of 118 percent', 'the number started', 'a denominator filtered, a numerator not', 'a rate looks like a rate'],
          ['Active users above registered users', 'registrations', 'sessions counted, not people', 'both are called users'],
          ['A duration of minus four seconds', 'zero', 'two clocks, or a retry', 'nobody sorts by duration'],
          ['Parts summing past the whole', 'the whole', 'double-counted overlap', 'each part is correct alone'],
          ['3,416 pupils in a wijk of 5,444 people', 'residents of school age', 'schools admit from anywhere', 'both numbers are true']
        ] },
        { kind: 'callout', h3: 'Most bad numbers are not wrong, they are misplaced, and only a ceiling catches that', p: 'The errors that get caught are the ones that look wrong. A negative price, a name in a date column, a total that changed overnight: something about the shape of it draws the eye, and somebody investigates. The errors that survive are the ones where every individual figure is correct and the mistake is in what they are being asked to mean, and those have no shape at all. They read as ordinary. They pass code review, they pass a second pair of eyes, they pass a data quality tool checking types and nulls and ranges, because there is nothing there that any of those things is looking for. A ceiling check is the cheapest instrument that catches this class, and it works precisely because it does not examine the number at all. It examines the relationship between the number and something else that constrains it, and relationships are where misplacement lives. In code this is an assertion, and the useful ones are almost never about types. Assert that the filtered set is no larger than the set it was filtered from. Assert that the parts sum to the whole, or say why they should not. Assert that a rate lies between nought and one and let it crash loudly the day it does not. Every one of those takes a line, and every one of them is the only thing standing between a correct figure in the wrong role and a decision made on it. The habit is worth more than the assertions: whenever a number is about to matter, spend four seconds on what is the largest this could be, and where would I find that. In this stadsdeel it takes one subtraction to learn that two wijken teach children who do not live in them, a conclusion that no amount of staring at 2,930 would ever have produced.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for a figure nobody has bounded',
      intro: 'A conversion rate, a headcount, a completion percentage, an inventory total, a sum of segments: each is checkable against something already in front of you, and almost none of them is checked. Practised on a stadsdeel where two wijken teach more pupils than they could possibly house.',
      body: [
        { kind: 'table', caption: 'Bounding a number before believing it', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Name the ceiling', 'Say what this number is a part of', 'A figure floating free of any constraint', 'A test you can actually run'],
          ['Be generous with it', 'Use the loosest defensible bound first', 'An argument about the bound instead of the number', 'A breach nobody can dispute'],
          ['Check the floor too', 'Ask what it cannot fall below', 'One-sided checking', 'Both kinds of misplacement'],
          ['Assert it in code', 'Write the bound as a check that fails loudly', 'A silent pass six months from now', 'A guarantee rather than a habit'],
          ['Report the breach as evidence', 'Treat an impossible value as a finding, not a bug', 'A real result filed as a data problem', 'The thing the numbers were hiding']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A program asked how many children in the class have a pet, which cheerfully accepts thirty in a class of twenty-two. The child adds the one line that stops it, and then tries to break it again.' },
          { h3: 'For teenagers', p: 'A dataset with one deliberately impossible value buried in it, found first by eye and then by assertion. The stretch: work out how many of their own past bugs a single bound would have caught.' },
          { h3: 'For adults', p: 'A live report bounded column by column. Adults very often find one rate whose denominator was filtered and whose numerator was not, sitting comfortably above a hundred percent.' }
        ] },
        { kind: 'p', text: 'All five wijken were read one page each from the statistics office at that office own vintages: residents and ages January 2026, households and housing 2025, income 2024. Every dwelling value quoted is an assessment rather than an enumeration. The 1988 formation of the stadsdeel, the Segbroekpolder it is named after, the 63,259 residents for 2025 and the note about just over 60,000 in 2013 come from the encyclopaedia entry, and the 62,507 for 2022 from the Hague city page in this series. The ten additions and two subtractions listed above are the whole of the arithmetic.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From thirty pets in a class of twenty-two to a rate above a hundred percent',
    intro: 'What a learner starts on is settled during the free hour, by what they can do when handed something real. The wijk does not enter into it, and neither does the birthday.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'The program that believed anything', p: 'Children find the answer that cannot be right, then write the line that refuses it.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'What is the largest this could be', p: 'Learners find the ceiling for every figure before they use any of them.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Assertions that are not about types', p: 'Teenagers bound the relationships in their own project and watch one fail.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The rate above one hundred', p: 'Adults bound a real report column by column and find the filtered denominator.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell you the Vogelwijk is well provided with schools. Why should a teenager in the Vruchtenbuurt do one subtraction first?',
    intro: 'Because seven primary schools in a wijk of 5,444 people is a fact about buildings, and the pupil count gives it away.',
    p1: 'Give a model the Vogelwijk row and it will report seven primary establishments and 2,930 pupils as a strong local provision, because that is what those figures look like and because nothing in them announces a problem. It will not put 2,930 next to 1,020 children under fifteen, because the two sit in different parts of the table and nothing links them. Models are not in the habit of testing a figure against its ceiling, partly because the ceiling is rarely adjacent and partly because the text they learned from does not do it either. The result reads as a careful summary and rests on an impossibility that one subtraction would expose.',
    p2: 'So the learner practises the four-second question on everything, and code is where it becomes automatic, because there you can make the check permanent. An assertion that a filtered count never exceeds its source will sit in a file for years and fire once, on the afternoon it matters, long after everybody has forgotten why it is there. A fifteen-year-old in the Bomenbuurt who has written a few of those will be the person at thirty who sees a completion rate of 118 percent and asks what the denominator was filtered on, instead of assuming the tool is right. Models will keep summarising figures without bounding them. Asking what the largest this could be stays a person job.',
    closer: 'The case for a child in Segbroek learning to code in 2026 is therefore not about schools. It is that code is the only place where you can turn a moment of scepticism into something permanent, and a bound written once will keep catching things long after the person who wrote it has stopped paying attention.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes across the pre-war middle',
    intro: 'Segbroek is the belt of pre-war streets between the centre and the dunes, and the Valkenboskwartier is the most tightly built place in this whole series at 17,410 people to the square kilometre, which turns out to change nothing about how a class gets to a family.',
    cells: [
      { h3: 'The densest wijk in the series, and still no room', p: 'Eighteen thousand people on a square kilometre does not put a teacher, a room and an hour within reach of one particular household. Density arranges buildings; it does not arrange a class. Teaching at the kitchen table sidesteps the question entirely.' },
      { h3: 'The words that stay in Dutch', p: 'Groep, havo, vwo, profielkeuze. Everything around them is English. A child reading those on a school report should hear the same words in the lesson rather than a translation they have to convert back.' },
      { h3: 'The free hour is a lesson, not a pitch', p: 'A real task, a teacher watching how it is approached, and three things fixed at the end: level, course, weekly time. No payment is taken, no card is requested, and nothing follows that pretends to be a lesson and is not.' },
      { h3: 'Stage decides the group', p: 'Five to ten learners at one level, gathered from wherever they happen to be. No wijk, however crowded, reliably holds five people at one narrow stage in a given month. Drawing worldwide is what makes the class exist now.' },
      { h3: 'Two a week, holidays written in first', p: 'Around eight lessons a month at one hour that does not move. Zuid-Holland takes regio Midden holiday dates, published years ahead, so the weeks off go into the schedule before anything else does.' },
      { h3: 'Three and a half hours, then four and a half', p: 'India has kept one clock for decades, so both switches each year happen on the Dutch side. Neither setting takes away an hour a family here would have chosen to use.' }
    ],
    spec: { title: 'Nine thousand children, and why that is still the wrong number to look at', p: 'Across the five wijken there are 2,365, 1,995, 2,195, 1,650 and 1,020 residents under fifteen, which is 9,225 children in one stadsdeel. It is a large number and it does not answer the question that decides whether a class runs, which is how many people sit at one precise stage of one precise subject in one particular month. That figure is small everywhere, and it is small in a crowded wijk for exactly the same reason it is small in an empty one. Which is why the pool is worldwide, sorted by stage, across ages 6 to 67.' }
  },

  fees: {
    h2: 'The fee, in dollars, in all five wijken',
    intro: 'Written out below, because a price you have to ask for is a price with a problem.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'Dollars, one rate everywhere, and no separate euro price list, so the Heesterbuurt and the Vogelwijk see the same figure. Money changes hands only once a course and an hour exist, and the arrangement is made on WhatsApp at that point. What happens if you pause, move plan or miss a week is written out on the pricing page rather than negotiated.'
  },

  reviewsH2: 'Six Google reviews, exactly as the people who left them wrote them',

  book: {
    h2: 'Send the level, not the wijk',
    intro: 'The first task might be a program that accepts thirty pets in a class of twenty-two, an impossible value hunted down first by eye and then by assertion, or a live report at work bounded column by column until something fails.',
    success: 'Thank you. Your Segbroek class request has been sent.'
  },

  faq: {
    h2: 'Segbroek coding class questions',
    intro: 'The stadsdeel, its five wijken, one check almost nobody runs, the teaching and the terms.',
    items: [
      { q: 'Which neighbourhoods make up Segbroek?', a: 'Five wijken: the Valkenboskwartier en Heesterbuurt, the Regentessekwartier with Koningsplein en omgeving and Rond de Energiecentrale, the Bomen- en Bloemenbuurt with the Bomenbuurt and Bloemenbuurt-Oost and -West, the Vruchtenbuurt with Eykenduinen, and the Vogelwijk. All five were read for this page. Segbroek became a stadsdeel in 1988 and is named after the old Segbroekpolder.' },
      { q: 'How can a wijk of 5,444 people teach 3,416 pupils?', a: 'Because the pupils do not live there. Seven primary establishments in the Vogelwijk teach 2,930 and one secondary establishment teaches 486. The wijk has 1,020 residents under fifteen and 710 aged fifteen to twenty-five, so even counting everyone under twenty-five as a possible pupil the ceiling is 1,730, and the published total is roughly double it. Both numbers are correct. They are counts of different people, and the ceiling proves it without any argument about catchments.' },
      { q: 'Does that mean the school figures are wrong?', a: 'No. Establishment and pupil counts record what is taught inside a boundary, and resident counts record who lives inside it, and both do their job. The mistake would be reading one as a measure of the other. The Bomen- en Bloemenbuurt shows the same thing: 5,051 pupils against 3,675 residents under twenty-five. Three of the five wijken sit far below their ceiling instead, which is the identical fact seen from the other side.' },
      { q: 'Which is the most crowded part of The Hague?', a: 'The Valkenboskwartier, on these figures: 18,159 residents on 106 hectares of land, a published 17,410 people to the square kilometre, the highest density this series has read anywhere in the Netherlands. The Regentessekwartier is close behind at 15,841 on 94 hectares. At the other end of the same stadsdeel the Vogelwijk runs at 2,030.' },
      { q: 'Is Segbroek an expensive part of the city?', a: 'It contains both ends of the range. The estimated average dwelling value is 333,000 euro in the Valkenboskwartier and 939,000 in the Vogelwijk, the highest figure in this series, with 389,000, 428,000 and 443,000 in between. Average income per resident for 2024 runs from 35,000 to 56,400 euro. Every value figure is an assessor estimate rather than a count, which the Loosduinen page explains.' },
      { q: 'Is the class taught in Dutch?', a: 'No. English throughout, with one deliberate exception: the Dutch school vocabulary is left in Dutch, so groep, havo, vwo and profielkeuze are used exactly as a child meets them on their own school paperwork. No course is offered in a Dutch-language edition.' },
      { q: 'What hours suit a family in Segbroek?', a: 'The teacher is three and a half hours ahead under Dutch summer time and four and a half outside it, and all of that variation comes from the Dutch clock rather than the Indian one, which has not changed in decades. After school, early evening and both weekend days all remain workable. One weekly hour is agreed at the free lesson and then stays put.' },
      { q: 'Is there a Modern Age Coders classroom in Segbroek?', a: 'No, and none is claimed here, elsewhere in The Hague or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Segbroek coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore The Hague and beyond',
    h2: 'The other seven stadsdelen, and the province around them',
    html: 'This completes the set. North-west is <a class="cg-inline-link" href="/coding-classes-in-scheveningen">Scheveningen</a>, west <a class="cg-inline-link" href="/coding-classes-in-loosduinen">Loosduinen</a>, east <a class="cg-inline-link" href="/coding-classes-in-the-hague-centrum">Den Haag Centrum</a> and <a class="cg-inline-link" href="/coding-classes-in-haagse-hout">Haagse Hout</a>, south <a class="cg-inline-link" href="/coding-classes-in-escamp">Escamp</a> and <a class="cg-inline-link" href="/coding-classes-in-laak">Laak</a>, and south-east <a class="cg-inline-link" href="/coding-classes-in-leidschenveen-ypenburg">Leidschenveen-Ypenburg</a>. Holding them together is the city page, <a class="cg-inline-link" href="/coding-classes-in-the-hague">coding classes in The Hague</a>. Beyond the boundary lie <a class="cg-inline-link" href="/coding-classes-in-delft">Delft</a>, the <a class="cg-inline-link" href="/coding-classes-in-westland">Westland</a> and the rest of <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. Two doors lead elsewhere: <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> and the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, for training models rather than writing programs. Above everything sits the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Finish this on WhatsApp'
  },

  footerHeading: 'The Hague and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-the-hague', label: 'The Hague' },
    { href: '/coding-classes-in-loosduinen', label: 'Loosduinen' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-sgb .cg-hero-grid { grid-template-columns: 1fr 1.06fr; align-items: end; gap: clamp(1.45rem, 3.6vw, 2.8rem); }
.cg-root.cg-sgb .cg-hero h1 { font-weight: 500; letter-spacing: -0.0134em; line-height: 1.1; }
.cg-root.cg-sgb .cg-capsule { border-left: 4px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent-soft); padding: 0.9rem 1.25rem; }
.cg-root.cg-sgb .cg-eyebrow { letter-spacing: 0.165em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-sgb .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.0155em; }
.cg-root.cg-sgb .cg-grid-3 { gap: clamp(1.06rem, 2.2vw, 1.74rem); }
.cg-root.cg-sgb .cg-card { border-radius: 3px; border-left: 3px solid var(--cg-accent-soft); }
.cg-root.cg-sgb .cg-table caption { letter-spacing: 0.043em; font-weight: 600; }
.cg-root.cg-sgb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sgb .cg-table tbody tr:nth-child(-n+2) td { font-weight: 600; }
.cg-root.cg-sgb .cg-ladder-col { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'Stadsdeel Segbroek, Den Haag, Zuid-Holland: the pre-war middle of the city, a stadsdeel since 1988, named after the old Segbroekpolder; 63,259 residents (2025) in the encyclopaedia entry, just over 60,000 in 2013, and 62,507 for 2022 on the Hague city page; five wijken, all read at 2026. Wijk 20 Valkenboskwartier en Heesterbuurt 18,159 on 107 hectares, 106 land and 1 water, density 17,410, the highest in this series; 10,230 households averaging 1.8 with 5,590 single at 55 percent; 2,365 under fifteen at 13 percent, 7,100 aged twenty-five to forty-five at 39 percent; 9,878 dwellings, estimated value 333,000 euro, 4,840 owner-occupied at 49 percent; income 35,000 euro (2024); 3 primary establishments with 451 pupils and no secondary; buurten Valkenboskwartier and Heesterbuurt. Wijk 21 Regentessekwartier 14,376 on 94 hectares, density 15,841; 8,015 households averaging 1.8 with 4,470 single at 56 percent; 1,995 under fifteen, 5,555 aged twenty-five to forty-five at 39 percent; 7,774 dwellings, estimated value 389,000 euro, 2,721 owner-occupied at 35 percent; income 37,900 euro (2024); 3 primary establishments with 619 pupils and one secondary establishment with no pupil count listed; buurten Koningsplein en omgeving and Rond de Energiecentrale. Wijk 12 Bomen- en Bloemenbuurt 14,912 on 142 hectares, 141 land and 2 water, density 10,621; 7,720 households averaging 1.9 with 3,555 single at 46 percent; 2,195 under fifteen at 15 percent, 1,480 aged fifteen to twenty-five at 9.9, 3,225 over sixty-five at 22 percent; 7,795 dwellings, estimated value 428,000 euro, 5,379 owner-occupied at 69 percent; income 41,100 euro (2024); 5 primary establishments with 1,450 pupils and 4 secondary with 3,601; buurten Bomenbuurt, Bloemenbuurt-Oost and Bloemenbuurt-West. Wijk 19 Vruchtenbuurt 9,942 on 104 hectares, density 9,582; 4,575 households averaging 2.1 with 1,675 single at 37 percent; 1,650 under fifteen at 17 percent; 4,600 dwellings, estimated value 443,000 euro, 3,634 owner-occupied at 79 percent; income 41,200 euro (2024); 2 primary establishments with 632 pupils; buurten Vruchtenbuurt and Eykenduinen. Vogelwijk 5,444 on 268 hectares, density 2,030; 2,105 households averaging 2.6 with 475 single at 23 percent; 1,020 under fifteen at 19 percent, 710 aged fifteen to twenty-five, 675 aged twenty-five to forty-five at 12 percent, 1,830 aged forty-five to sixty-five at 34; 2,170 dwellings, estimated value 939,000 euro, the highest in this series, 1,953 owner-occupied at 90 percent; income 56,400 euro (2024); 7 primary establishments with 2,930 pupils and 1 secondary with 486. Regio Midden holidays. The district page argues the ceiling check; Escamp owns necessary versus sufficient, Loosduinen the estimate that reads as a count, Haagse Hout precision against accuracy, Ash Sharqiyah South the absent value that is not a zero.',
    localProject: 'Every quantity has a ceiling published somewhere near it, and checking against the ceiling catches a class of error that survives every other kind of review. The Vogelwijk holds 5,444 residents. Seven primary establishments inside it teach 2,930 pupils and one secondary establishment teaches 486, so 3,416 pupils are taught in the wijk. Its residents under fifteen number 1,020 and those aged fifteen to twenty-five 710, so even counting everybody under twenty-five as a possible pupil, which is far too generous because primary school runs from four to twelve, the ceiling is 1,730. The published figure is roughly double its own maximum. The Bomen- en Bloemenbuurt does the same at a smaller margin, 5,051 pupils against 3,675 residents under twenty-five, while the Valkenboskwartier, the Regentessekwartier and the Vruchtenbuurt sit far below their ceilings at 451, 619 and 632. Neither direction is an error. Both prove that pupils taught inside a boundary and residents of that boundary are counts of different people. What matters is the route to that conclusion: the Escamp page in this series reaches it by argument, showing that a school inside a wijk is neither necessary nor sufficient for the children who live there, and an argument can be disputed or forgotten, whereas a number larger than its own maximum cannot be, and one subtraction finds it. The programming form is the assertion, and the useful assertions are almost never about types: that a filtered set is no larger than its source, that parts sum to the whole, that a rate lies between nought and one. The errors these catch are the ones where every individual figure is correct and the mistake is in what the figures are being asked to mean, which have no shape and so pass review, pass a second reader and pass any tool checking types, nulls and ranges. Distinct from the absent value that is not a zero (Ash Sharqiyah South); the Regentessekwartier secondary establishment with no pupil count is reported here and excluded from every total rather than read as a nought.',
    requiredMentions: [
      '2,930',
      '3,601',
      '5,444',
      '1,020',
      '939,000',
      '2,170',
      '17,410',
      '10,230',
      '5,590',
      '9,878',
      '7,774',
      '7,795',
      '63,259',
      'Heesterbuurt'
    ],
    sources: [
      { claim: 'Wijk 20 Valkenboskwartier, Den Haag: 18,159 inwoners (2026); 10,230 huishoudens averaging 1.8, 5,590 eenpersoonshuishoudens at 55 percent; ages 2,365 (0 to 15, 13 percent), 2,110 (15 to 25, 12 percent), 7,100 (25 to 45, 39 percent), 4,450 (45 to 65, 25 percent), 2,125 (65+, 12 percent); 107 hectare, 106 land, 1 water; bevolkingsdichtheid 17,410 per km2; woningvoorraad 9,878 (2025); gemiddelde WOZ 333,000 euro (2025); 5,038 huurwoningen (51 percent) and 4,840 koopwoningen (49 percent); gemiddeld inkomen 35,000 euro (2024); 3 vestigingen basisonderwijs with 451 leerlingen and 0 vestigingen voortgezet onderwijs; 2 buurten: Valkenboskwartier, Heesterbuurt.', url: 'https://allecijfers.nl/wijk/valkenboskwartier-den-haag/' },
      { claim: 'Wijk 21 Regentessekwartier, Den Haag: 14,376 inwoners (2026); 8,015 huishoudens averaging 1.8, 4,470 eenpersoonshuishoudens at 56 percent and 3,545 meerpersoonshuishoudens at 44; ages 1,995 (0 to 15, 14 percent), 1,760 (15 to 25, 12 percent), 5,555 (25 to 45, 39 percent), 3,380 (45 to 65, 24 percent), 1,715 (65+, 12 percent); 94 hectare; bevolkingsdichtheid 15,841 per km2; woningvoorraad 7,774 (2025); gemiddelde WOZ 389,000 euro (2025); 5,053 huurwoningen (65 percent) and 2,721 koopwoningen (35 percent); gemiddeld inkomen 37,900 euro (2024); 3 vestigingen basisonderwijs with 619 leerlingen; 1 vestiging voortgezet onderwijs with no leerlingen figure listed; 2 buurten: Koningsplein en omgeving, Rond de Energiecentrale.', url: 'https://allecijfers.nl/wijk/regentessekwartier-den-haag/' },
      { claim: 'Wijk 12 Bomen en Bloemenbuurt, Den Haag: 14,912 inwoners (2026); 7,720 huishoudens averaging 1.9, 3,555 eenpersoonshuishoudens at 46 percent and 4,165 meerpersoonshuishoudens at 54; ages 2,195 (0 to 15, 15 percent), 1,480 (15 to 25, 9.9 percent), 3,905 (25 to 45, 26 percent), 4,140 (45 to 65, 28 percent), 3,225 (65+, 22 percent); 142 hectare, 141 land, 2 water; bevolkingsdichtheid 10,621 per km2; woningvoorraad 7,795 (2025); gemiddelde WOZ 428,000 euro (2025); 2,338 huurwoningen (30 percent) and 5,379 koopwoningen (69 percent); gemiddeld inkomen 41,100 euro (2024); 5 vestigingen basisonderwijs with 1,450 leerlingen and 4 vestigingen voortgezet onderwijs with 3,601 leerlingen; 3 buurten: Bomenbuurt, Bloemenbuurt-Oost, Bloemenbuurt-West.', url: 'https://allecijfers.nl/wijk/bomen-en-bloemenbuurt-den-haag/' },
      { claim: 'Wijk 19 Vruchtenbuurt, Den Haag: 9,942 inwoners (2026); 4,575 huishoudens averaging 2.1, 1,675 eenpersoonshuishoudens at 37 percent and 2,900 meerpersoonshuishoudens at 63; ages 1,650 (0 to 15, 17 percent), 1,035 (15 to 25, 10 percent), 2,595 (25 to 45, 26 percent), 2,820 (45 to 65, 28 percent), 1,855 (65+, 19 percent); 104 hectare; bevolkingsdichtheid 9,582 per km2; woningvoorraad 4,600 (2025); gemiddelde WOZ 443,000 euro (2025); 966 huurwoningen (21 percent) and 3,634 koopwoningen (79 percent); gemiddeld inkomen 41,200 euro (2024); 2 vestigingen basisonderwijs with 632 leerlingen and 0 vestigingen voortgezet onderwijs; 2 buurten: Vruchtenbuurt, Eykenduinen.', url: 'https://allecijfers.nl/wijk/vruchtenbuurt-den-haag/' },
      { claim: 'Wijk Vogelwijk, Den Haag: 5,444 inwoners (2026); 2,105 huishoudens averaging 2.6, 475 eenpersoonshuishoudens at 23 percent; ages 1,020 (0 to 15, 19 percent), 710 (15 to 25, 13 percent), 675 (25 to 45, 12 percent), 1,830 (45 to 65, 34 percent), 1,200 (65+, 22 percent); 268 hectare; bevolkingsdichtheid 2,030 per km2; woningvoorraad 2,170 (2025); gemiddelde WOZ 939,000 euro (2025); 217 huurwoningen (10 percent) and 1,953 koopwoningen (90 percent); gemiddeld inkomen 56,400 euro (2024); 7 vestigingen basisonderwijs with 2,930 leerlingen and 1 vestiging voortgezet onderwijs with 486 leerlingen; 2,280 addresses.', url: 'https://allecijfers.nl/wijk/vogelwijk-den-haag/' },
      { claim: 'Stadsdeel Segbroek, Den Haag: five wijken, Regentessekwartier, Valkenboskwartier en Heesterbuurt, Vruchtenbuurt, Bomen- en Bloemenbuurt and Vogelwijk; 63.259 inwoners (2025); Er woonden in 2013 ruim 60.000 mensen. Segbroek als stadsdeel ontstond in 1988; named after the old Segbroekpolder, combining the former Haagse wijken nummers 12 en 14 known as the Bomen- en Bloemenbuurt, and Bohemen.', url: 'https://nl.wikipedia.org/wiki/Segbroek' },
      { claim: 'The Hague city page in this series publishes stadsdeel Segbroek at 62,507 residents for 2022, with Valkenboskwartier 18,159, Regentessekwartier 14,376 and the Bomen- en Bloemenbuurt 14,912.', url: 'https://learn.modernagecoders.com/coding-classes-in-the-hague' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'That any published school or population figure is wrong. All are correct; the finding is that pupils taught inside a wijk and residents of that wijk are counts of different people.',
      'Any estimate of how many pupils at these establishments live locally, or of where the others come from. No catchment data was read and none is inferred.',
      'That any wijk is well or badly served by schools. Being above or below the ceiling says nothing about provision, and the Escamp page in this series owns the argument about what a school inside a boundary implies.',
      'Any use of the Regentessekwartier secondary establishment as a zero. No pupil count is listed against it; it is reported and excluded from every total, and reading an absent value as a nought is the Ash Sharqiyah South page argument.',
      'A 2026 population for the stadsdeel. The published totals are 63,259 for 2025, just over 60,000 for 2013 and 62,507 for 2022 on the city page, all dated wherever used, and no total is assembled from the five wijk rows.',
      'That any average dwelling value quoted here is a price or a count. Every one is a municipal assessment, which the Loosduinen page in this series sets out.',
      'Any argument from the density range across the five wijken, or from how many digits a figure carries. Those are the boundary and precision arguments belonging to Rotterdam Centrum and Haagse Hout.',
      'Any explanation of why the Vogelwijk has more residents under fifteen than aged twenty-five to forty-five. That would be a claim about the history of the stock, which is the Prins Alexander page argument.',
      'Anything the Hague city page owns, including the stadsdeel population table, Segbroek College and the named secondary schools with their addresses.'
    ]
  }
};
