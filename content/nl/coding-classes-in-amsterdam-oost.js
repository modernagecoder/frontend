'use strict';
// Amsterdam-Oost: a stadsdeel assembled in 2010, holding a nineteenth-century
// quarter, a converted dock and an island built after 2002.
// Spine: two wijken with almost the same number of homes hold populations
// 4,160 apart, because a difference between two places is first of all a
// difference between the people who chose them.

module.exports = {
  slug: 'coding-classes-in-amsterdam-oost',
  code: 'aos',
  accent: '#6E5E97',
  accentRationale: 'Amsterdam-Oost: a slate violet for the water on three sides and the grey brick of the Indische Buurt, put by the solver at the furthest available remove from the accents in use and clearly apart from the rose and ochre on the other two Amsterdam district pages',
  pageType: 'district',
  place: {
    name: 'Amsterdam-Oost',
    eyebrow: 'Oost, Amsterdam',
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
  routeLabel: 'Amsterdam-Oost, Netherlands',
  title: 'Coding Classes in Amsterdam-Oost | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Amsterdam-Oost for ages 6 to 67, from the Indische Buurt out to IJburg. The first lesson costs nothing.',
  ogDescription: 'Live online coding, Python and AI for families in Amsterdam-Oost, built on two neighbourhoods with the same number of homes and 4,160 more people in one.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'react-for-teens-complete-masterclass',
  verifiedOn: '8 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Amsterdam-Oost Learners',
    description: 'Ability-placed online coding, Python, AI, web building and mathematics for children, teenagers and adults across the wijken of Amsterdam-Oost, taught in English.'
  },

  h1: 'Coding classes in Amsterdam-Oost, where two neighbourhoods with the same number of homes hold 4,160 more people in one than the other',
  capsuleQ: 'What are the best coding classes in Amsterdam-Oost?',
  capsule: 'Coding classes in Amsterdam-Oost reach a district assembled in 2010 out of two older ones, holding a quarter built after 1900, a dock converted from the 1990s and an island under construction since 2002. IJburg-West has 6,830 homes and 16,099 residents. Indische Buurt-West has 6,712 homes and 11,939 residents. The housing stock differs by 118 units and the population by 4,160 people, and every explanation for that lives in who chose to move where. Modern Age Coders teaches live online in English from the Ambonpleinbuurt to the Rieteilanden, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Two neighbourhoods in the same district. One has 6,830 homes, the other 6,712, a difference of under two percent. One holds 16,099 people and the other 11,939, a difference of thirty-five percent. Nothing about the ground explains that. What differs is the size of the homes and, far more importantly, who wanted them: families took the new island and single people took the older quarter. Any comparison between these two places is, before it is anything else, a comparison between two sets of people who selected themselves.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Amsterdam-Oost.',

  picks: {
    eyebrow: 'Course picks for Amsterdam-Oost',
    h2: 'Four courses for a district built in three different centuries',
    intro: 'A groep 5 child on the Rieteilanden who wants to make something that runs, a teenager on the Java-eiland who has decided the web is where they build, a student in the Indische Buurt who wants to know what a model does rather than what it says, and an adult in Watergraafsmeer comparing two figures that were never comparable: four separate ways in, one free hour each.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Real typed Python, drawings that follow instructions and a first program that finds a rule, taught in English to the groep 5 to 8 child anywhere in the district.' },
      { course: 'react-for-teens-complete-masterclass', band: 'Ages 13 to 18', note: 'Components, state and a real interface that works on a phone, for the teenager who wants what they build to be usable by somebody else.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'College and adult', note: 'Training, testing and breaking a model, for the student who would rather understand the machinery than quote its output.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Cleaning, joining and the habit of asking who a comparison is really between, for anybody whose work involves setting two groups side by side.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Oost today',
      h2: 'A district assembled in 2010 from parts built a century apart',
      intro: 'Amsterdam-Oost was created in 2010 by joining the former stadsdelen Oost-Watergraafsmeer and Zeeburg, and it is governed as a bestuurscommissiegebied. Its own entry publishes a population of 142,049 for 1 January 2020 and an area of 30.56 square kilometres. That population is six years older than the wijk figures below, which are 2026, so this page states both dates and does not divide one by the other.',
      body: [
        { kind: 'table', caption: 'What the district entry publishes, and when', head: ['Item', 'As published', 'Date', 'What this page does with it'], rows: [
          ['Residents', '142,049', '1 January 2020', 'quoted, and never combined with a 2026 figure'],
          ['Area', '30.56 square kilometres', 'undated in the entry', 'quoted; no density is computed from a 2020 population'],
          ['Formed', 'a merger of Oost-Watergraafsmeer and Zeeburg', '2010', 'the reason the district reads as several places'],
          ['Earlier joins', 'Watergraafsmeer annexed to the city in 1921; the stadsdelen Oost and Watergraafsmeer merged in 1998', '1921 and 1998', 'quoted as history, not used in any series'],
          ['Still being built', 'IJburg under construction since 2002; Zeeburgereiland still being developed for housing', '2002 onward', 'the single most important fact on this page']
        ] },
        { kind: 'p', text: 'The wijken named in the entry include Amsteldorp, Betondorp, the Dapperbuurt, Frankendael, IJburg, the Indische Buurt, the Oostelijk Havengebied, the Oosterparkbuurt, the Transvaalbuurt, the Weesperzijde and Zeeburgereiland. Three of them carry full published figures on this page, and the rest are named without invented numbers. The city page in this series holds the picture for Amsterdam as a whole and this one does not repeat it.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Three wijken, three building eras, three completely different populations',
      intro: 'A quarter begun after 1900, a working dock converted into housing from the 1990s, and an island still going up since 2002. All three sit in one district. The populations are 2026 figures, the household, area, housing and tenure figures are 2025, and the incomes are 2024.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'IJburg-West, begun 2002', p: '16,099 residents in 7,040 households averaging 2.3 people, the largest household size on any Amsterdam page in this series. Only 2,575 households hold one person, 37 percent. 2,715 residents are under fifteen, 17 percent, and just 1,115 are sixty-five or over, 7 percent. 6,830 dwellings on 113 hectares of land, average value 613,000 euro, 44 percent owner-occupied, average income 45,300 euro. Five buurten, among them Steigereiland-Noord and the Rieteilanden-West.' },
          { h3: 'Oostelijk Havengebied, converted from the 1990s', p: '20,556 residents in 11,210 households averaging 1.8, of which 5,210 hold one person, 46 percent. 2,235 residents are under fifteen, 11 percent, and 3,130 are sixty-five or over, 15 percent. 10,585 dwellings on 154 hectares of land inside 363 hectares of territory, average value 649,000 euro, 39 percent owner-occupied, average income 51,400 euro. Eleven buurten including the Java-eiland, the KNSM-eiland, Sporenburg and Borneo.' },
          { h3: 'Indische Buurt-West, built after 1900', p: '11,939 residents in 6,965 households averaging 1.7, of which 3,890 hold one person, 56 percent. 1,265 residents are under fifteen, 11 percent, and 1,480 are sixty-five or over, 12 percent. 6,712 dwellings on 47 hectares of land, 25,628 people to the square kilometre, average value 474,000 euro, only 30 percent owner-occupied, average income 36,600 euro. Three buurten: Timorpleinbuurt-Noord, Timorpleinbuurt-Zuid and the Ambonpleinbuurt.' },
          { h3: 'The same homes, different people', p: 'IJburg-West has 6,830 dwellings and Indische Buurt-West 6,712, a difference of 118. The first holds 16,099 people and the second 11,939, a difference of 4,160. Per dwelling that is 2.36 people against 1.78. The buildings are not the story; the households in them are.' },
          { h3: 'The ones not measured here', p: 'Betondorp, Amsteldorp, Frankendael, the Dapperbuurt, the Oosterparkbuurt, the Transvaalbuurt, the Weesperzijde, IJburg-Oost, Zeeburgereiland and the rest of Watergraafsmeer are named in the district entry. No figures are given for them, because none were read.' },
          { h3: 'And what the class asks about any of it', p: 'Nothing at all. A learner is placed on what they can already do, so a child on Steigereiland and a child off the Timorplein sit in the same group when they are at the same stage. The wijk is not a field in the form.' }
        ] },
        { kind: 'spec', title: 'A check this page ran and handed on', p: 'The five age bands published for each of these three wijken add to 16,100, 20,570 and 11,950 against populations of 16,099, 20,556 and 11,939. All three are small overshoots, and all three sit inside the twelve and a half that rounding five figures to the nearest five can produce. Why that bound is the right test, and what to do when a gap exceeds it, is the argument of the Amsterdam-Noord page in this series, so this page notes the check and moves on.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, its year, and the comparisons refused',
      intro: 'One district entry with a stale population, three wijk pages with current ones, and a short list of sums this page will not do.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The district, from its entry', p: 'Amsterdam-Oost: 142,049 inwoners on 1 January 2020; oppervlakte 30.56 square kilometres; dit stadsdeel werd ingesteld in 2010 en is een samenvoeging van de vroegere stadsdelen Oost-Watergraafsmeer en Zeeburg; het stadsdeel wordt bestuurd als bestuurscommissiegebied; sinds 2002 wordt IJburg gebouwd; het Zeeburgereiland wordt nog ontwikkeld tot een nieuwe locatie voor woningbouw; na 1900 begon ook de bouw van de Indische buurt; Watergraafsmeer was annexed in 1921 and the stadsdelen Oost and Watergraafsmeer were merged in 1998.' },
          { h3: 'IJburg-West', p: '16,099 residents (2026); 7,040 households averaging 2.3 (2025); 2,575 single-person, 37 percent; ages 2,715, 2,610, 4,885, 4,775 and 1,115; 126 hectares total and 113 land; 14,239 per square kilometre; 6,830 dwellings; average value 613,000 euro; 3,005 owner-occupied at 44 percent and 3,825 rented at 56; average income 45,300 euro (2024); 5 buurten.' },
          { h3: 'Oostelijk Havengebied', p: '20,556 residents (2026); 11,210 households averaging 1.8 (2025); 5,210 single-person, 46 percent; ages 2,235, 1,945, 7,200, 6,060 and 3,130; 363 hectares total and 154 land; 13,481 per square kilometre; 10,585 dwellings; average value 649,000 euro; 4,128 owner-occupied at 39 percent and 6,457 rented at 61; average income 51,400 euro (2024); 11 buurten.' },
          { h3: 'Indische Buurt-West', p: '11,939 residents (2026); 6,965 households averaging 1.7 (2025); 3,890 single-person, 56 percent; ages 1,265, 1,400, 5,110, 2,695 and 1,480; 48 hectares total and 47 land; 25,628 per square kilometre; 6,712 dwellings; average value 474,000 euro; 2,014 owner-occupied at 30 percent and 4,698 rented at 70; average income 36,600 euro (2024); 3 buurten.' },
          { h3: 'What this page will not calculate', p: 'No district density, because the published population is from 2020 and the area carries no date. No district average of any kind, because three of the district\'s wijken were read and a partial average is not an average. No comparison of the 2020 district population with any 2026 wijk figure. Mixing vintages is the argument of the Apeldoorn page in this series and this page declines to demonstrate it again.' }
        ] },
        { kind: 'spec', title: 'What this page claims and does not claim about the differences', p: 'The three wijken differ enormously and every figure quoted for them is published. What this page does not do is attribute those differences to the places. It does not say that IJburg produces families, that the Indische Buurt produces single households, or that either neighbourhood causes an income. It says that homes of different sizes were built in different decades and that different people chose them, which is the only claim the data actually supports. Modern Age Coders has no connection to the stadsdeel, the city or any school named here and claims none.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Same number of homes, 4,160 more people: who moved, not what happened',
      intro: 'Three neighbourhoods, three eras, and a set of differences that describe the residents rather than the ground they stand on.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Put the two closest cases side by side', p: 'IJburg-West and Indische Buurt-West have 6,830 and 6,712 homes, within two percent of each other, and hold 16,099 and 11,939 people. The housing stock is almost identical in number and the populations are not, which forces the question away from the buildings and onto the households inside them.' },
          { h3: '2. Ask who did the choosing', p: 'Nobody was assigned to either place. Family-sized homes went up on new land after 2002 and families moved into them; smaller older flats in a quarter built after 1900 suited people living alone, and 56 percent of its households do. Every difference in age, income and tenure between these two wijken is downstream of that sorting.' },
          { h3: '3. Ask the counterfactual out loud', p: 'Would the same households have looked different if they had swapped neighbourhoods? If you cannot answer that, and here nobody can, then you are not comparing two places at all. You are comparing two groups of people who arranged themselves, and the neighbourhood is a label on the outcome rather than a cause of it.' }
        ] },
        { kind: 'table', caption: 'Three wijken, three eras, and the sorting that produced the difference', head: ['Wijk and when it was built', 'Residents', 'Dwellings', 'People per dwelling', 'Under fifteen, and sixty-five plus'], rows: [
          ['IJburg-West, under construction since 2002', '16,099', '6,830', '2.36', '17 percent, and 7 percent'],
          ['Oostelijk Havengebied, docks converted from the 1990s', '20,556', '10,585', '1.94', '11 percent, and 15 percent'],
          ['Indische Buurt-West, built after 1900', '11,939', '6,712', '1.78', '11 percent, and 12 percent'],
          ['The closest pair', 'differ by 4,160, or 35 percent', 'differ by 118, under 2 percent', '2.36 against 1.78', 'a ten-point gap in children, a five-point gap in pensioners']
        ] },
        { kind: 'callout', h3: 'A difference between two places is first of all a difference between the people who chose them', p: 'Almost nobody is assigned to a neighbourhood, a school, a product, a gym or a newsletter. People arrange themselves, and once they have, any comparison between the groups measures the arranging at least as much as it measures the thing. The example here is unusually clean because the housing stock is nearly identical in size and the populations are not, so the buildings can be ruled out and the sorting cannot. The version that costs real money is the one where the sorting is invisible. A school whose pupils outperform another school may be teaching better or may be admitting differently, and league tables cannot tell those apart. Customers who use a feature may be more loyal because of it or may have been the loyal ones who tried it. A town with an unusual health statistic may have a cause worth finding or may simply be where people move when they retire. In every case the question that separates the two is the same, and it is a question about a world that did not happen: what would these same people have looked like in the other place? Sometimes there is a way to get at that, through a change nobody chose, a lottery, a boundary drawn for unrelated reasons, a rule that applied to some people and not others. Usually there is not, and then the honest report describes the groups, says plainly that they selected themselves, and refuses the causal sentence that everybody wants. Describing is not a lesser activity than explaining. It is what you are entitled to do.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for a comparison nobody was assigned to',
      intro: 'Two schools, two branches, two cohorts, users against non-users, a region against the national figure: whenever people ended up in the groups by choosing, the comparison is about the choosing. Practised on two neighbourhoods with the same number of front doors.',
      body: [
        { kind: 'table', caption: 'Reading a comparison between self-selected groups', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Ask how people got in', 'Write down the mechanism that put each person in each group', 'Choice mistaken for assignment', 'The sorting, in the open where it can be argued with'],
          ['Hold the obvious things constant', 'Find the pair that is alike in the thing you can measure', 'A difference explained by the first idea available', 'A comparison that has ruled something out'],
          ['State the counterfactual', 'Say what the same people would have looked like elsewhere', 'A causal sentence nobody can support', 'A clear view of whether the question is answerable'],
          ['Hunt for an unchosen difference', 'Look for a boundary, a rule or a timing nobody selected into', 'Giving up when evidence was available', 'Occasionally, a real comparison'],
          ['Describe when you cannot explain', 'Report the groups and name the selection instead of guessing', 'A confident conclusion built on sorting', 'A finding that survives somebody checking it']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Children who chose the football club and children who chose the chess club, and a question about which group is faster. They work out that nobody was put in either club, and that the answer was decided before anyone ran anywhere.' },
          { h3: 'For teenagers', p: 'The three wijken in Python, a comparison function that will not run until it is told how members entered each group, and an output that prints the selection mechanism next to every difference. The stretch: find the pair that is closest on housing stock, explain why that pairing is worth more than the other two, and say what it still cannot rule out.' },
          { h3: 'For adults', p: 'A real comparison from work between users and non-users, or between two teams or two regions. Adults almost always find a difference everybody explains causally and a selection mechanism nobody has written down.' }
        ] },
        { kind: 'p', text: 'District population, area, formation, governance and the wijk list come from the stadsdeel entry; every population, household, age, area, density, dwelling, value, tenure and income figure comes from the national statistics office page for the wijk named beside it, with populations for 2026, household and housing figures for 2025 and incomes for 2024. The people-per-dwelling ratios of 2.36, 1.94 and 1.78, the differences of 118 dwellings and 4,160 residents, the 35 percent and the three age-band sums are this page dividing, subtracting and adding published numbers, and are labelled as arithmetic wherever they appear.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From the football club and the chess club to a comparison that names its own sorting',
    intro: 'The rung is decided in the free hour by what the learner can already do, and never by which of the district\'s neighbourhoods the address falls in.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Who chose which club?', p: 'Children discover that the answer was settled before the race began.', courses: ['scratch-programming-complete-course', 'minecraft-coding-for-kids-course'] },
      { band: 'Ages 11 to 13', h3: 'Alike in one thing, unlike in another', p: 'Learners hunt for the pair that holds something constant, and say what that buys.', courses: ['python-ai-kids-masterclass', 'kids-ai-web-development-course'] },
      { band: 'Ages 14 to 18', h3: 'Comparisons that declare their groups', p: 'Teenagers write code that refuses to compare two groups until told how people entered them.', courses: ['react-for-teens-complete-masterclass', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'The A and B nobody was assigned to', p: 'Adults take a real users-against-non-users comparison and find the selection inside it.', courses: ['ai-ml-masterclass-complete-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will explain why IJburg has more children. Why should a teenager in Oost learn to reject the explanation?',
    intro: 'Because the question invited a cause and the data only contains a choice.',
    p1: 'Ask a model why one neighbourhood has 17 percent children and another 11, and you will get reasons: green space, family housing, schools, the water. Some of that is even true in a loose sense. All of it is phrased as though the place acted on the people, when what actually happened is that homes of a certain size were built at a certain time and households of a certain shape moved into them. The model is not being careless. It answered the question it was asked, and the question smuggled in the assumption that there is something to explain about the ground.',
    p2: 'So the learner practises writing the comparison that declares its own groups: how did each person get into this group, what does that make the difference about, and what would the same people look like elsewhere. It is a small amount of code around a large amount of discipline. A fifteen-year-old on the Java-eiland who has taken two neighbourhoods apart this way will be the person at thirty who asks whether the successful branch has better management or better customers. Models will keep producing the causal sentence, fluently and on demand. Knowing that the data does not license it stays a person\'s job.',
    closer: 'The case for a child in Amsterdam-Oost learning to code in 2026 is therefore not about islands. It is that adult life is full of comparisons between groups that assembled themselves, that the difference between choosing and being placed decides whether any conclusion is available at all, and that two neighbourhoods with the same number of front doors and 4,160 different residents make the point better than any textbook.',
    blogAnchor: 'why learning to code still repays a child in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes from the Dapperbuurt out to the last island',
    intro: 'Oost runs from streets built before the First World War to ground that did not exist twenty-five years ago, and the far end of it is a genuine journey from the middle of the city.',
    cells: [
      { h3: 'The lesson comes to the island', p: 'One fixed hour a week at the kitchen table on Steigereiland, the KNSM-eiland or off the Timorplein, with no tram, no bridge and no room to book at either end.' },
      { h3: 'English in the class, Dutch on the school forms', p: 'Teaching runs in English throughout. Groep, havo, vwo and profielkeuze stay in Dutch, because those are the words on the paperwork a child brings home.' },
      { h3: 'What the first free hour produces', p: 'A level demonstrated rather than asserted, a named course that follows from it, and a weekly time. Nobody is asked for a card during it.' },
      { h3: 'Sorted by stage, not by island', p: 'Two learners at the same level work together whether they are on new land or in a hundred-year-old flat, and two at different levels do not.' },
      { h3: 'Twice weekly, regio Noord holidays', p: 'Two live lessons a week in a repeating slot, normally eight in a month. Noord-Holland takes its school holidays with regio Noord, and weeks away go into the plan before it is agreed.' },
      { h3: 'Three and a half hours ahead, four and a half in winter', p: 'Only the Dutch clock changes, so the distance to the teacher depends on the month. After school, early evening and both weekend days work at either setting.' }
    ],
    spec: { title: 'The district with the youngest neighbourhood in this series', p: 'IJburg-West has 2,715 residents under fifteen and 1,115 over sixty-five, the only wijk on any Amsterdam page here where children outnumber pensioners more than two to one. That is a large cohort of school-age learners in one place and a thin one a few kilometres away, which is exactly the situation where a group formed on ability from across the world beats a group formed from whoever lives nearby, at every age up to sixty-seven.' }
  },

  fees: {
    h2: 'The fee, in dollars, the same on old ground and new',
    intro: 'Written down here instead of held back for a call.',
    first: 'A full lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'There is one international rate, quoted in dollars, and no euro edition, so an address on the Rieteilanden sees exactly what an address in the Ambonpleinbuurt sees. Nothing is charged until the free lesson has settled a course and an hour, and payment is arranged over WhatsApp afterwards. Pausing, changing plan and missing a week are described on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, kept word for word as they were written',

  book: {
    h2: 'Tell us the stage, not the island',
    intro: 'The first task might be the football club against the chess club, a comparison function that will not run until told how people entered each group, or a users-against-non-users chart from work that has been read causally for years.',
    success: 'Thank you. Your Amsterdam-Oost class request has been sent.'
  },

  faq: {
    h2: 'Amsterdam-Oost coding class questions',
    intro: 'The district, its three eras, its selection problem, the teaching and the terms.',
    items: [
      { q: 'How can two neighbourhoods with the same number of homes hold such different populations?', a: 'IJburg-West has 6,830 dwellings and 16,099 residents; Indische Buurt-West has 6,712 dwellings and 11,939. That is 2.36 people per home against 1.78. The homes on the new island are family-sized and were built after 2002, and families moved into them, while the older quarter has smaller flats and 56 percent of its households are one person. The difference is about which households chose which stock, not about the ground either sits on.' },
      { q: 'So is IJburg better for families?', a: 'This page does not say so and the figures do not support it. Family-sized housing was built and families moved in, which is a fact about sorting rather than about the neighbourhood doing anything to anybody. To claim the place itself makes a difference you would need to know what the same households would have looked like elsewhere, and nothing published here answers that. Describing the difference honestly is what the data allows.' },
      { q: 'Why does this page quote a district population from 2020?', a: 'Because that is the date the stadsdeel entry gives: 142,049 residents on 1 January 2020. The wijk figures underneath it are 2026. Rather than quietly comparing the two, this page prints both dates and refuses to compute any district density, share or average from figures six years apart.' },
      { q: 'Which neighbourhoods are in Amsterdam-Oost?', a: 'The district entry names Amsteldorp, Betondorp, the Dapperbuurt, Frankendael, IJburg, the Indische Buurt, the Oostelijk Havengebied, the Oosterparkbuurt, the Transvaalbuurt, the Weesperzijde and Zeeburgereiland among others. Full published figures appear here for IJburg-West, the Oostelijk Havengebied and Indische Buurt-West, and no numbers are invented for the rest.' },
      { q: 'When was Amsterdam-Oost created?', a: 'In 2010, by joining the former stadsdelen Oost-Watergraafsmeer and Zeeburg, and it is governed as a bestuurscommissiegebied. Watergraafsmeer had been annexed to the city in 1921, and the stadsdelen Oost and Watergraafsmeer were merged in 1998, so the district as it stands is the result of at least three separate joins.' },
      { q: 'Is the class taught in Dutch?', a: 'No. Every lesson is in English from beginning to end. Dutch school vocabulary is deliberately kept as a Dutch school writes it, so groep, havo, vwo and profielkeuze are used rather than translated. No Dutch-language version of any course exists.' },
      { q: 'What hours work for a family in Oost?', a: 'The teacher is three and a half hours ahead during Dutch summer time and four and a half in winter, because only the Dutch clock moves. The practical window runs from the end of the school day to mid-evening, with Saturday and Sunday fully open, and one repeating weekly slot is agreed at the free lesson.' },
      { q: 'Is there a Modern Age Coders classroom in Amsterdam-Oost?', a: 'No, and none is claimed on IJburg, elsewhere in Amsterdam or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Amsterdam-Oost coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight in a month, in a group of five to ten. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or neighbourhood. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Amsterdam and beyond',
    h2: 'West to the canals, north across the IJ, and out to the country',
    html: 'West of here is <a class="cg-inline-link" href="/coding-classes-in-amsterdam-centrum">Amsterdam-Centrum</a>, whose page takes apart a district less crowded than its own neighbourhoods, and north across the water is <a class="cg-inline-link" href="/coding-classes-in-amsterdam-noord">Amsterdam-Noord</a>, where the age bands outnumber the population. The city page, <a class="cg-inline-link" href="/coding-classes-in-amsterdam">coding classes in Amsterdam</a>, carries the picture for all eight districts, and the city sits inside <a class="cg-inline-link" href="/coding-classes-in-noord-holland">Noord-Holland</a>. Everything descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner after trained models rather than running programs should start at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Take this to WhatsApp'
  },

  footerHeading: 'Amsterdam and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-amsterdam', label: 'Amsterdam' },
    { href: '/coding-classes-in-amsterdam-noord', label: 'Amsterdam-Noord' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-aos .cg-hero-grid { align-items: end; gap: clamp(1.35rem, 3.1vw, 2.5rem); }
.cg-root.cg-aos .cg-hero h1 { font-weight: 500; letter-spacing: -0.008em; line-height: 1.15; }
.cg-root.cg-aos .cg-capsule { border-left-width: 2px; border-left-style: solid; border-bottom: 4px solid var(--cg-accent); padding-left: 1.2rem; padding-bottom: 0.95rem; }
.cg-root.cg-aos .cg-eyebrow { letter-spacing: 0.19em; font-weight: 500; text-transform: uppercase; }
.cg-root.cg-aos .cg-section-head h2 { max-width: 39ch; }
.cg-root.cg-aos .cg-grid-3 { gap: clamp(0.95rem, 2vw, 1.5rem); }
.cg-root.cg-aos .cg-card { border-radius: 10px; }
.cg-root.cg-aos .cg-table caption { font-weight: 600; letter-spacing: 0.01em; }
.cg-root.cg-aos .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aos .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Stadsdeel Amsterdam-Oost, Noord-Holland: created in 2010 by merging the former stadsdelen Oost-Watergraafsmeer and Zeeburg, governed as a bestuurscommissiegebied; its entry publishes 142,049 residents for 1 January 2020, six years older than the wijk figures, and an area of 30.56 km2, so no district density or share is computed anywhere on the page. IJburg under construction since 2002 and Zeeburgereiland still being developed; the Indische Buurt begun after 1900; Watergraafsmeer annexed 1921 and the stadsdelen Oost and Watergraafsmeer merged 1998. Three wijken carry full figures: IJburg-West 16,099 residents in 6,830 dwellings, Oostelijk Havengebied 20,556 in 10,585, Indische Buurt-West 11,939 in 6,712. Regio Noord holidays. The district page argues from self-selection; Amsterdam-Centrum owns aggregates over ground, Amsterdam-Noord owns the rounding bound, and the city page owns the doorstroomtoets rates and the 2055 projections.',
    localProject: 'A difference between two places is first of all a difference between the people who chose them. IJburg-West, built since 2002, has 6,830 dwellings and 16,099 residents; Indische Buurt-West, built after 1900, has 6,712 dwellings and 11,939 residents. The housing stock differs by 118 units, under two percent, and the population by 4,160, thirty-five percent, giving 2.36 people per dwelling against 1.78. Household size runs 2.3 against 1.7, single-person households 37 percent against 56, under-fifteens 17 percent against 11, owner-occupation 44 percent against 30 and income 45,300 against 36,600 euro. Nobody was assigned to either neighbourhood: family-sized homes were built on new land and families took them, so every one of those gaps is downstream of sorting rather than of anything the ground does. The test that separates selection from effect is the counterfactual, what these same households would have looked like in the other place, and nothing published answers it, so the page describes the groups, names the selection and refuses the causal sentence. The same failure runs through school league tables, feature-usage comparisons and regional health statistics. Distinct from the aggregate-over-ground trap (Amsterdam-Centrum), which is about inferring downward from a whole, and from the confounded-proxy trap (Deventer), where an outside condition moves the metric: here both measurements are correct and the fault is attributing a group difference to the group label.',
    requiredMentions: [
      '142,049',
      '16,099',
      '6,830',
      '11,939',
      '6,712',
      '20,556',
      '10,585',
      '25,628',
      '613,000',
      '36,600',
      '51,400',
      'IJburg-West',
      'Indische Buurt-West',
      'Oostelijk Havengebied'
    ],
    sources: [
      { claim: 'Amsterdam-Oost: 142.049 inwoners (1 januari 2020); oppervlakte 30,56 km2; dit stadsdeel werd ingesteld in 2010 en is een samenvoeging van de vroegere stadsdelen Oost-Watergraafsmeer en Zeeburg; het stadsdeel wordt bestuurd als bestuurscommissiegebied; sinds 2002 wordt IJburg gebouwd; het Zeeburgereiland wordt nog ontwikkeld tot een nieuwe locatie voor woningbouw; na 1900 begon ook de bouw van de Indische buurt; Watergraafsmeer annexed 1921; in 1998 werden de stadsdelen Oost en Watergraafsmeer samengevoegd; wijken named include Amsteldorp, Betondorp, Dapperbuurt, Frankendael, IJburg, Indische Buurt, Oostelijk Havengebied, Oosterparkbuurt, Transvaalbuurt, Weesperzijde and Zeeburgereiland.', url: 'https://nl.wikipedia.org/wiki/Amsterdam-Oost' },
      { claim: 'Wijk IJburg-West, Amsterdam: 16,099 inwoners (2026); 7,040 huishoudens averaging 2.3 (2025); 2,575 eenpersoonshuishoudens, 37 percent, and 4,465 meerpersoonshuishoudens, 63 percent; ages 2,715 (0 to 15, 17 percent), 2,610 (15 to 25, 16 percent), 4,885 (25 to 45, 30 percent), 4,775 (45 to 65, 30 percent), 1,115 (65+, 7 percent); 126 hectare total, 113 land; bevolkingsdichtheid 14,239 per km2; 6,830 woningen (2025); average WOZ 613,000 euro (2025); 3,005 koopwoningen (44 percent) and 3,825 huurwoningen (56 percent); average income 45,300 euro (2024); 5 buurten: Steigereiland-Noord, Steigereiland-Zuid, Joris Ivenspleinbuurt, Ed Pelsterparkbuurt, Rieteilanden-West.', url: 'https://allecijfers.nl/wijk/ijburg-west-amsterdam/' },
      { claim: 'Wijk Indische Buurt-West, Amsterdam: 11,939 inwoners (2026); 6,965 huishoudens averaging 1.7 (2025); 3,890 eenpersoonshuishoudens, 56 percent, and 3,075 meerpersoonshuishoudens, 44 percent; ages 1,265 (0 to 15, 11 percent), 1,400 (15 to 25, 12 percent), 5,110 (25 to 45, 43 percent), 2,695 (45 to 65, 23 percent), 1,480 (65+, 12 percent); 48 hectare total, 47 land; bevolkingsdichtheid 25,628 per km2; 6,712 woningen (2025); average WOZ 474,000 euro (2025); 2,014 koopwoningen (30 percent) and 4,698 huurwoningen (70 percent); average income 36,600 euro (2024); 3 buurten: Timorpleinbuurt-Noord, Timorpleinbuurt-Zuid, Ambonpleinbuurt.', url: 'https://allecijfers.nl/wijk/indische-buurt-west-amsterdam/' },
      { claim: 'Wijk Oostelijk Havengebied, Amsterdam: 20,556 inwoners (2026); 11,210 huishoudens averaging 1.8 (2025); 5,210 eenpersoonshuishoudens, 46 percent; ages 2,235 (0 to 15, 11 percent), 1,945 (15 to 25, 9.5 percent), 7,200 (25 to 45, 35 percent), 6,060 (45 to 65, 29 percent), 3,130 (65+, 15 percent); 363 hectare total, 154 land (2025); bevolkingsdichtheid 13,481 per km2 (2025); 10,585 woningen (2025); average WOZ 649,000 euro (2025); 4,128 koopwoningen (39 percent) and 6,457 huurwoningen (61 percent); average income 51,400 euro (2024); 11 buurten: Java-eiland, KNSM-eiland, Oostelijke Handelskade, Sporenburg, Rietlanden, Borneo, Cruquiusbuurt, Entrepot-Noordwest, Architectenbuurt, Bedrijvengebied Veelaan, Bedrijvengebied Zeeburgerkade.', url: 'https://allecijfers.nl/wijk/oostelijk-havengebied-amsterdam/' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any causal claim that IJburg produces families, that the Indische Buurt produces single households, or that a neighbourhood causes an income. The data supports a description of sorting and nothing more.',
      'A district density, share or average of any kind. The published district population is from 2020 and the wijk figures are 2026, and mixing vintages is the Apeldoorn page\'s argument.',
      'A district average computed from three of the district\'s wijken. A partial average is not an average.',
      'Any argument built on the small overshoots in the age bands. All three sit inside the rounding bound, and the bound test belongs to the Amsterdam-Noord page.',
      'Figures for Betondorp, Amsteldorp, Frankendael, the Dapperbuurt, the Oosterparkbuurt, the Transvaalbuurt, the Weesperzijde, IJburg-Oost, Zeeburgereiland or the rest of Watergraafsmeer. They are named and given no numbers.',
      'Anything the Amsterdam city page owns, including the science park figures, the doorstroomtoets rates and the 2055 district projections.'
    ]
  }
};
