'use strict';
// Woensel-Noord: the northern half of old Woensel, four CBS wijken, all four
// read, Ontginning, Achtse Molen, Aanschot and Dommelbeemd.
// Spine: the published poverty figures are rungs of one ladder. The rungs
// nest, so they are differenced and never added, and two places are compared
// along the whole ladder, because the gap depends on where you stand.

module.exports = {
  slug: 'coding-classes-in-woensel-noord',
  code: 'wsn',
  accent: '#784756',
  accentRationale: 'Woensel-Noord: a muted plum-brown of old brick in Vlokhoven and Acht, set apart from the dark olive of Woensel-Zuid, the Dommel teal of the Eindhoven city page and the greens and reds of Brabant, and nearest to the province of Utrecht, which it does not link to',
  pageType: 'district',
  place: {
    name: 'Woensel-Noord',
    eyebrow: 'Woensel-Noord, Eindhoven',
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
  routeLabel: 'Woensel-Noord, Eindhoven, Netherlands',
  title: 'Coding Classes in Woensel-Noord, Eindhoven | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Woensel-Noord, Eindhoven for ages 6 to 67, across Ontginning, Achtse Molen, Aanschot and Dommelbeemd. First lesson free.',
  ogDescription: 'Live online coding, Python and AI in Woensel-Noord, on a page about why a poverty figure is a curve and not a number.',
  twitterDescription: 'Classes in Woensel-Noord for ages 6 to 67, one dollar fee and a free first lesson.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Woensel-Noord Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Ontginning, Achtse Molen, Aanschot and Dommelbeemd, taught in English.'
  },

  h1: 'Coding classes in Woensel-Noord, where a poverty figure is a curve and not a number',
  capsuleQ: 'What are the best coding classes in Woensel-Noord, Eindhoven?',
  capsule: 'Coding classes in Woensel-Noord reach the largest stadsdeel of Eindhoven, four statistics office wijken, Ontginning, Achtse Molen, Aanschot and Dommelbeemd, all four read, with 66,195 residents in January 2026. In Ontginning, 9.6 percent of households live at or around the social minimum, 14 percent below 110 percent of it and 18 percent below 120 percent. Those rungs nest, so the bands are 9.6, 4.4 and 4.0 points, and adding them counts the poorest households three times. Beside Oud-Woensel, the answer to which is poorer depends on the rung: Oud-Woensel has more households under the low-income line, 5.6 percent against 4.1, and the two are level on every rung of the social-minimum ladder. Modern Age Coders teaches live online in English from Vlokhoven to Blixembosch, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Every wijk row published for Eindhoven carries a small ladder of poverty figures: the share of households under the low-income line, the share at or around the social minimum, and the shares below 110 and 120 percent of it. They look like four separate facts. Three of them are one fact read at three heights, since every household below 110 percent is also below 120, which means the figures can be subtracted to find the bands between the rungs and must never be added. And when two places are compared, the comparison belongs to the whole ladder rather than to one rung, because two neighbourhoods can sit far apart on the bottom rung and level on the next. Woensel-Noord shows both, and the same habit decides whether a server is reported fast because of its median or slow because of its slowest one percent.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Woensel-Noord, Eindhoven.',

  picks: {
    eyebrow: 'Course picks for Woensel-Noord',
    h2: 'Four courses for the north of Eindhoven',
    intro: 'A groep 5 child in Aanschot, where 3,470 residents are under fifteen, a teenager in Achtse Molen who wants to build a proper app rather than another school slide deck, a student in Dommelbeemd whose program reports an average and hides a slow tail, and an adult near the shopping centre in Ontginning who is handed a report with four percentages and asked for one number. Each starts with a full lesson and a bill of nothing.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python where a child draws a staircase of running totals and finds each step by taking one total from the next.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'A real app built end to end, including the stats screen that shows the slowest users as well as the average one.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python where cumsum and diff are used on purpose, and every comparison is made at several percentiles rather than one.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reading a table of thresholds by asking which figures contain which, and at which line two places really differ.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Woensel-Noord today',
      h2: 'Four wijken, and the most people of any Eindhoven stadsdeel',
      intro: 'On 1 January 1920 Woensel became part of Eindhoven, and its northern half is now the stadsdeel Woensel-Noord: four statistics office wijken, Ontginning, Achtse Molen, Aanschot and Dommelbeemd, on 1,864 hectares, 11 of them listed as water. Their 2026 counts add to 66,195 residents, more than any other stadsdeel of the city, a sum of four published rows rather than a published total. The encyclopaedia box printed under the Woensel-Noord heading, 42,165 residents on 8.24 square kilometres, carries the area of the three Woensel-Zuid wijken, as the Woensel-Zuid page shows in detail, so this page does not use it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Ontginning, around the shopping centre', p: '15,744 residents on 333 hectares, six buurten including Vlokhoven, Jagershoef, Prinsejagt, the Driehoeksbos, the Hool and one simply called Winkelcentrum. The lowest average income per resident published for any Eindhoven wijk, 30,700 euro, though Oud-Gestel is only 100 euro higher and the page reads nothing into the position.' },
          { h3: 'Achtse Molen and Aanschot, the owner-occupied north', p: 'Achtse Molen has 15,695 residents, 77 percent of its dwellings owner-occupied and 3,695 residents over sixty-five, with Kerkdorp Acht among its buurten. Aanschot, the largest wijk in Eindhoven at 21,082, runs to Blixembosch and the Woenselse Heide, and nine primary establishments teach 2,532 pupils there.' },
          { h3: 'Dommelbeemd, along the river', p: '13,674 residents on 515 hectares, six buurten: Esp, Bokt, Heesterakker, Vaartbroek, Eckart and Luytelaer. Roughly half the 6,108 dwellings are owner-occupied, 3,115, and 2,235 residents are under fifteen. The valley of the Dommel runs along the east of Woensel.' }
        ] },
        { kind: 'spec', title: 'A castle of 1695 and a church of 1920', p: 'The encyclopaedia entry for Woensel supplies the landmarks of the north. Kasteel Eckart was built in 1695 for Jonkheer Carel van Vlierden, and Eckart is now a buurt of Dommelbeemd. The Eckartsebos, also called the Lage Heide, is described as a rich and varied area, and the Dommeldal lies to the east of Woensel. The Onze Lieve Vrouw van Lourdeskerk in the hamlet of Vlokhoven dates from 1920 and was designed by Wolter te Riele. The same entry lists Kerkdorp Acht as a buurt of Achtse Molen and Blixembosch-Oost and Blixembosch-West as buurten of Aanschot, and notes that the Catharina Ziekenhuis stands in Woensel. The page repeats these lines as written.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Four rungs, one curve',
      h2: 'The same four wijken in the same order on every rung',
      intro: 'The poverty figures below are household shares for 2023, published for each wijk. Student households and households with an incomplete year of income are excluded from them. The mean income is a different measure, per resident rather than per household and for 2024 rather than 2023, so it is set beside the ladder and never mixed into it.',
      body: [
        { kind: 'table', caption: 'Households by poverty line, 2023, with mean income per resident, 2024', head: ['Wijk', 'Under the low-income line', 'Social-minimum ladder: up to 100, 110 and 120 percent', 'Mean income per resident'], rows: [
          ['Ontginning', '4.1 percent', '9.6, then 14, then 18 percent', '30,700 euro'],
          ['Dommelbeemd', '3.9 percent', '8.4, then 12, then 16 percent', '31,400 euro'],
          ['Aanschot', '2.8 percent', '5.1, then 7.8, then 9.9 percent', '36,400 euro'],
          ['Achtse Molen', '1.7 percent', '3.4, then 5.1, then 6.6 percent', '38,300 euro'],
          ['Oud-Woensel, just south, for comparison', '5.6 percent', '9.5, then 14, then 17 percent', '34,000 euro']
        ] },
        { kind: 'p', text: 'Inside Woensel-Noord the four curves never touch. Ontginning is highest on every rung and on the low-income line, then Dommelbeemd, then Aanschot, then Achtse Molen, and the mean income runs in the same order the other way up. When one curve lies above another everywhere, a ranking is safe, because no choice of line can change it. The comparison with Oud-Woensel is different. On the low-income line Oud-Woensel is clearly higher, 5.6 percent against 4.1. On the social-minimum rung the two are level, 9.5 against 9.6; below 110 percent they are level at 14; below 120 percent they are 17 and 18, which on figures published as whole numbers is also level. The gap between them depends entirely on which line is drawn, and by the mean income Ontginning is the lower of the two.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'All four wijken of Woensel-Noord, with every subtraction made',
      intro: 'Each wijk as the statistics office publishes it, year by year, then the ladder turned into bands, then the conclusions the page will not draw.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Wijk Ontginning', p: '15,744 residents (2026), 15,825 (2025); 7,935 men and 7,890 women (2025); 8,185 households averaging 1.9, 4,005 single-person, 1,930 without children, 2,250 with; 2,180 under fifteen, 3,345 over sixty-five (2026); 333 hectares, all land; published density 4,752; 7,837 dwellings, 3,292 owner-occupied at 42 percent; estimated 349,000 euro (2025); income 30,700 euro per resident and 36,900 per recipient (2024); households under the low-income line 4.1 percent, at or around the social minimum 9.6, below 110 percent 14, below 120 percent 18 (2023); 720 residents on social assistance (2025); 4 primary establishments with 967 pupils, 1 secondary with 1,008.' },
          { h3: 'Wijk Achtse Molen', p: '15,695 residents (2026), 15,805 (2025); 7,990 men and 7,815 women (2025); 6,930 households averaging 2.3, 2,020 single-person, 2,550 with children; 2,335 under fifteen, 3,695 over sixty-five; 497 hectares, 496 land; published density 3,186; 6,739 dwellings, 5,189 owner-occupied at 77 percent; estimated 458,000 euro; income 38,300 euro per resident and 46,500 per recipient; poverty lines 1.7, 3.4, 5.1 and 6.6 percent (2023); 180 residents on social assistance; 6 primary establishments with 1,803 pupils, 1 secondary with 1,558.' },
          { h3: 'Wijk Aanschot', p: '21,082 residents (2026), 20,910 (2025); 10,265 men and 10,645 women (2025); 8,880 households averaging 2.3, 2,790 single-person, 3,690 with children; 3,470 under fifteen, 3,730 over sixty-five; 519 hectares, 517 land; published density 4,044; 8,574 dwellings, 5,230 owner-occupied; estimated 459,000 euro; income 36,400 euro per resident and 45,300 per recipient; poverty lines 2.8, 5.1, 7.8 and 9.9 percent (2023); 370 residents on social assistance; 9 primary establishments with 2,532 pupils, 2 secondary with 1,543.' },
          { h3: 'Wijk Dommelbeemd', p: '13,674 residents (2026), 13,565 (2025); 6,785 men and 6,780 women (2025); 6,315 households averaging 2.1, 2,475 single-person, 2,200 with children; 2,235 under fifteen, 2,700 over sixty-five; 515 hectares, 508 land and 8 water; published density 2,670; 6,108 dwellings, 3,115 owner-occupied at 51 percent; estimated 380,000 euro; income 31,400 euro per resident and 38,700 per recipient; poverty lines 3.9, 8.4, 12 and 16 percent (2023); 530 residents on social assistance; 5 primary establishments with 1,186 pupils and no secondary.' },
          { h3: 'The ladder as bands', p: 'Taking each rung from the next, for the share of households: Ontginning 9.6 at or around the social minimum, 4.4 between that and 110 percent, 4.0 between 110 and 120; Dommelbeemd 8.4, 3.6, 4.0; Aanschot 5.1, 2.7, 2.1; Achtse Molen 3.4, 1.7, 1.5; Oud-Woensel 9.5, 4.5, 3.0. Where the upper rungs are published as whole numbers each band carries about half a point either way. Sums of the stadsdeel: 66,195 residents (2026), 30,310 households and 29,258 dwellings (2025), 16,826 owner-occupied, 10,220 under fifteen.' },
          { h3: 'What the page does not say', p: 'It does not say which wijk of the two, Ontginning or Oud-Woensel, is the poorer; it says the answer depends on the line. It does not add any rungs, average them, or compute a stadsdeel poverty share, since the household counts behind the excluded student and part-year households are not published. And it does not compare the 2024 mean income with the 2023 household shares as if they measured one population.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with Woensel-Noord, Eindhoven, the castle, the church or any school, hospital or shop named here, and nothing on the page suggests one. The four wijk rows and the Oud-Woensel ladder come from the statistics office pages for each wijk: residents and ages for 2026, sex, households and dwellings for 2025, income for 2024, the poverty lines for 2023, social assistance for 2025. The definitions of the low-income line and the social minimum are those of the statistics office, and the landmarks and the 1920 date are copied from the encyclopaedia entry for Woensel.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Read the ladder as a curve, not four numbers',
      intro: 'Thresholds that nest make a cumulative curve. Difference it to find the bands, never add it up, and compare two places along the whole of it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Find out which figures nest', p: 'Below 110 percent of the social minimum includes everyone below 100; below 120 includes both. The low-income line is a different yardstick altogether, a fixed amount of purchasing power set from the 1979 assistance level for a single person, so it sits beside the ladder rather than on it.' },
          { h3: '2. Subtract to get bands, never add', p: 'For Ontginning the rungs 9.6, 14 and 18 become bands of 9.6, 4.4 and 4.0. Adding the rungs gives 41.6 percent, a figure that counts the households at the bottom three times and the next band twice, and describes nobody.' },
          { h3: '3. Compare at every rung', p: 'If one curve is above another at every rung, the ranking is safe whichever line is chosen, as it is among the four Woensel-Noord wijken. If the curves meet, as Ontginning and Oud-Woensel do above the bottom rung, the ranking belongs to the line, and the line has to be named.' }
        ] },
        { kind: 'table', caption: 'The same curve, in five other places', head: ['What is measured', 'The nested thresholds', 'The band between two of them', 'The comparison that depends on the line'], rows: [
          ['Server response times', 'under 100 ms, under 500 ms, under 2 s', 'requests between 100 and 500 ms', 'one server wins at the median and loses at the 99th percentile'],
          ['Exam grades', 'at least a pass, a merit, a distinction', 'passes that are not merits', 'one school has more passes, another more distinctions'],
          ['A running total of sign-ups', 'by day 1, day 7, day 30', 'sign-ups in week one after day one', 'a daily figure read off a cumulative chart'],
          ['A model scored by confidence', 'right when over 0.9, over 0.7, over 0.5', 'predictions between 0.7 and 0.9', 'one model better at a strict cut, level at a loose one'],
          ['Households in Ontginning, 2023', 'social minimum, 110, 120 percent', '4.4 points between 100 and 110', 'against Oud-Woensel: apart on one line, level on the rest']
        ] },
        { kind: 'callout', h3: 'cumsum and diff are a pair, and a median is only one rung', p: 'A ladder of thresholds is a cumulative distribution, sampled at a few points. Programmers meet the same object as a cumulative sum, and the tools come in a matched pair: cumsum builds the ladder from bands, diff recovers the bands from the ladder, and confusing the two produces figures like 41.6 percent that describe nobody, or daily sign-ups read straight off a running total. The comparison lesson is the one engineers learn from response times. Two services can have the same median and very different 99th percentiles, or one can win at the median and lose in the tail, because a percentile is a single rung and the curves cross between rungs. Reporting several percentiles, or plotting the whole cumulative curve, is how teams avoid choosing the line that flatters them. The same care applies to the two measures on this page that are not rungs at all. The mean income per resident is a different quantity, per person and a year later, so it can rank the wijken without contradicting the ladder; and the low-income line is a fixed yardstick of its own, which is why it can put Oud-Woensel clearly above Ontginning while the social-minimum rungs put them level. Nothing here is a contradiction. It is what a distribution looks like when somebody insists on a single number for it.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any table of thresholds',
      intro: 'Poverty lines, latency percentiles, grade boundaries, age bands that say under and over, and confidence cut-offs all describe one distribution at a few heights. Practised on four wijken whose curves never cross and one neighbour whose curve meets theirs.',
      body: [
        { kind: 'table', caption: 'Keeping cumulative figures honest', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Check what nests', 'Work out which thresholds contain which before using any of them', 'Adding figures that overlap', 'A ladder and a list, told apart'],
          ['Difference, then compare', 'Turn rungs into bands with a subtraction', 'Triple counting the bottom', 'Bands that add up properly'],
          ['Compare at every rung', 'Rank two things only if one is ahead at every line', 'A ranking that depends on an unnamed line', 'Rankings that survive any threshold'],
          ['Name the line', 'When curves meet, say which line a claim uses', 'A flattering threshold chosen quietly', 'Claims a reader can reproduce'],
          ['Print the exclusions', 'State who is left out of each figure', 'A share read as covering everyone', 'The population the figure really describes']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A staircase drawn on squared paper, each step the total number of stickers collected so far. The class finds how many stickers were collected on one day by counting the height of a single step, not by adding up the whole staircase.' },
          { h3: 'For teenagers', p: 'A list of made-up response times in Python, cumsum and diff side by side, then the median and the 99th percentile for two services. The stretch: invent two services that swap places depending on which percentile is reported.' },
          { h3: 'For adults', p: 'A report from work with thresholds in it, such as targets met within one, three and five days. Adults sort which figures contain which, rebuild the bands, and often discover a figure that had been added to its own subset in a summary.' }
        ] },
        { kind: 'p', text: 'This section works from four published poverty ladders and one comparison ladder, each a set of household shares for 2023 with student and part-year households left out. The rungs are differenced and never added, the low-income line is treated as a separate yardstick, and the mean income is kept to its own column because it counts people rather than households and belongs to 2024. Every band quoted above is a single subtraction of two published rungs.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a sticker staircase to percentiles that tell the truth about a service',
    intro: 'Each learner is placed in the free lesson from how they work on a real task. The wijk they come from and their age are not part of the decision.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'One step, not the staircase', p: 'Children read a single day from a running total by looking at one step.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Running totals', p: 'Learners build a total and take it apart again, one subtraction at a time.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Median and tail', p: 'Teenagers compare two services at several percentiles and watch them trade places.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Thresholds at work', p: 'Adults untangle nested targets in a real report and restate them as bands.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will name the poorer of two wijken in one word. Why should a teenager in Blixembosch ask which line?',
    intro: 'Because Oud-Woensel is clearly higher on one line, level with Ontginning on three others, and ahead on the mean.',
    p1: 'Ask a language model whether Ontginning or Oud-Woensel is poorer and it will answer, because the question asks for one word and the model is built to give one. It may pick the lower average income, or the higher low-income share, depending on which figure it happens to weigh, and it will present the choice as a finding. It will rarely say that the two neighbourhoods are level on three of the four published lines, or that the answer changes when the line moves. A single confident answer to a question about a distribution is almost always an answer to a narrower question that nobody asked out loud.',
    p2: 'The learner who has compared two services at the median and at the 99th percentile, and watched the winner change, has absorbed something that no summary will teach: a distribution does not have a single rank, only a rank at each line. Machine learning lives on this, since every classifier is scored at a threshold and every benchmark reports some summary of a spread of results. Models will keep answering in one word. Asking where the line was drawn, and what the other lines say, stays a person job.',
    closer: 'The case for a child in Woensel-Noord learning to code in 2026 is therefore not that code gives single answers. It is that writing cumsum and diff by hand, and plotting a whole curve, teaches a person to be suspicious of anybody, human or machine, who reports one point of it as the whole story.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for Ontginning, Achtse Molen, Aanschot and Dommelbeemd',
    intro: 'Woensel-Noord reaches from the ring road to the northern edge of the city at Acht and Blixembosch, which puts many families a long way from anywhere central, and the evenings here are as crowded as anywhere.',
    cells: [
      { h3: 'From Acht, the centre is far', p: 'A family in Kerkdorp Acht or Blixembosch faces a real journey to any classroom in the middle of Eindhoven, and twice a week that journey quietly ends good intentions. The lesson opens on a laptop at home at the agreed hour instead.' },
      { h3: 'Groep and vwo, kept in Dutch', p: 'The words a child sees on every school report, groep, havo, vwo and profielkeuze, stay in Dutch during lessons. Translating them would only put distance between the class and the school the learner actually goes to.' },
      { h3: 'A lesson first, no pitch', p: 'The free hour is taught in full: a real problem, a teacher watching how the learner approaches it, and at the end a level, a course and a weekly time. There is no payment form and no sales call booked afterwards.' },
      { h3: 'Grouped by stage, from everywhere', p: 'Five to ten learners at the same point in the same subject. Woensel-Noord has 10,220 residents under fifteen, and still five at one exact stage wanting one exact hour is a rare thing, so groups are formed from a worldwide pool.' },
      { h3: 'Holidays by regio Zuid', p: 'Two lessons a week, around eight a month, at one hour that does not move. Brabant schools follow regio Zuid holidays, which fall on different dates from the west of the country, and lessons are planned around them.' },
      { h3: 'Summer and winter hours', p: 'India is three and a half hours ahead in summer and four and a half in winter; only the Dutch clock changes. The late afternoon, early evening and weekend mornings are all available throughout the year.' }
    ],
    spec: { title: 'Twenty-four primary schools, and a group that still comes from everywhere', p: 'Woensel-Noord has twenty-four primary establishments teaching 6,488 pupils, nine of them in Aanschot alone, and four secondary establishments teaching 4,109. That is more primary schooling than any other Eindhoven stadsdeel, and it still does not form a coding class. A group needs five learners at the same stage of the same subject free at the same hour, and a pool that size is only found by drawing from every age between 6 and 67 in every country the teachers serve.' }
  },

  fees: {
    h2: 'Fees for Woensel-Noord, in dollars',
    intro: 'All of it written down here, with nothing to discover later.',
    first: 'A full lesson on a real task, ending in a level and a named course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'A single dollar price for every country, with no separate euro price, so a household in Vlokhoven and one in Blixembosch pay the same. Nothing is charged until the free lesson has settled a course and a weekly time, and payment is then arranged over WhatsApp. What happens with a pause, a change of format or a missed lesson is explained on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, printed exactly as their writers left them',

  book: {
    h2: 'Tell us the learner stage',
    intro: 'The first task might be a sticker staircase read one step at a time, two services compared at the median and in the tail, or a report of nested targets rebuilt as bands.',
    success: 'Thank you. Your Woensel-Noord class request has been sent.'
  },

  faq: {
    h2: 'Woensel-Noord coding class questions',
    intro: 'The stadsdeel, its four wijken, a poverty ladder read as a curve, the lessons and the terms.',
    items: [
      { q: 'What does Woensel-Noord include?', a: 'Four statistics office wijken: Ontginning, Achtse Molen, Aanschot and Dommelbeemd, with buurten from Vlokhoven and Jagershoef to Kerkdorp Acht, Blixembosch, Eckart and Luytelaer. Together they cover 1,864 hectares. It is the northern half of the former village of Woensel, which joined Eindhoven on 1 January 1920.' },
      { q: 'How many people live in Woensel-Noord?', a: 'Adding the four published wijk counts for January 2026 gives 66,195, the most of any Eindhoven stadsdeel: 15,744 in Ontginning, 15,695 in Achtse Molen, 21,082 in Aanschot and 13,674 in Dommelbeemd. The encyclopaedia box printed under Woensel-Noord says 42,165, but it carries the area of the three Woensel-Zuid wijken, so it is not used here.' },
      { q: 'Which wijk in Woensel-Noord has the most low-income households?', a: 'Ontginning, on every published line. 4.1 percent of its households are under the low-income line, 9.6 percent at or around the social minimum, 14 percent below 110 percent of it and 18 percent below 120, all for 2023. Dommelbeemd, Aanschot and Achtse Molen follow in that order at every line, so here the ranking does not depend on which line is chosen.' },
      { q: 'Is Ontginning poorer than Oud-Woensel?', a: 'It depends on the line. Oud-Woensel has more households under the low-income line, 5.6 percent against 4.1. At or around the social minimum they are level, 9.5 against 9.6, and below 110 and 120 percent they are level too. The mean income per resident, a different measure for 2024, is lower in Ontginning. So the honest answer names the line.' },
      { q: 'Why can the poverty percentages not be added together?', a: 'Because they nest. Every household below 110 percent of the social minimum is also counted in the share below 120 percent, and every household at the social minimum is in both. Subtracting gives the bands: in Ontginning, 9.6, 4.4 and 4.0 points. Adding gives 41.6 percent, which counts the poorest households three times.' },
      { q: 'How many schools are in Woensel-Noord?', a: 'Adding the four wijk rows: twenty-four primary establishments teaching 6,488 pupils, nine of them in Aanschot, and four secondary establishments teaching 4,109. There are 10,220 residents under fifteen. Nothing on this page rates any school.' },
      { q: 'What language and hours are the lessons?', a: 'English, with Dutch school terms such as groep, havo and vwo kept in Dutch. With India three and a half hours ahead in summer and four and a half in winter, after-school, early-evening and weekend slots all work. A fixed weekly time is agreed at the free lesson, and the calendar follows regio Zuid holidays.' },
      { q: 'Is there a Modern Age Coders classroom in Woensel-Noord?', a: 'No, and none is claimed here, elsewhere in Eindhoven or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Woensel-Noord coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Eindhoven and beyond',
    h2: 'South to Woensel-Zuid, north up the A2, and across Brabant',
    html: 'The city-wide figures, Brainport and the international schools are on <a class="cg-inline-link" href="/coding-classes-in-eindhoven">coding classes in Eindhoven</a>. South of Ontginning is the other half of old Woensel, on <a class="cg-inline-link" href="/coding-classes-in-woensel-zuid">Woensel-Zuid</a>, where two encyclopaedia boxes turn out to sit under the wrong headings. Tongelre is the last Eindhoven stadsdeel still to be written. North along the A2 lies <a class="cg-inline-link" href="/coding-classes-in-den-bosch">Den Bosch</a>, and the province around all of it is <a class="cg-inline-link" href="/coding-classes-in-noord-brabant">Noord-Brabant</a>. For a learner who wants machine learning first, the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a> is the quicker way in, and the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a> connects the whole series.',
    waLabel: 'Keep going on WhatsApp'
  },

  footerHeading: 'Woensel-Noord, Eindhoven and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-eindhoven', label: 'Eindhoven' },
    { href: '/coding-classes-in-woensel-zuid', label: 'Woensel-Zuid' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-wsn .cg-hero-grid { grid-template-columns: 1.08fr 1fr; align-items: center; gap: clamp(1.35rem, 3.1vw, 2.45rem); }
.cg-root.cg-wsn .cg-hero h1 { font-weight: 500; letter-spacing: -0.018em; line-height: 1.08; }
.cg-root.cg-wsn .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.25rem; }
.cg-root.cg-wsn .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wsn .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.017em; }
.cg-root.cg-wsn .cg-grid-3 { gap: clamp(1.1rem, 2.3vw, 1.85rem); }
.cg-root.cg-wsn .cg-card { border-radius: 3px; border-left: 4px solid var(--cg-accent-soft); }
.cg-root.cg-wsn .cg-table caption { letter-spacing: 0.025em; font-weight: 700; }
.cg-root.cg-wsn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wsn .cg-table td:nth-child(3) { font-weight: 600; }
.cg-root.cg-wsn .cg-ladder-col { border-top: 3px solid var(--cg-accent-soft); padding-top: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'Stadsdeel Woensel-Noord, Eindhoven, Noord-Brabant: the northern half of the former municipality of Woensel, part of Eindhoven since 1 January 1920; four statistics office wijken, Ontginning, Achtse Molen, Aanschot and Dommelbeemd, on 1,864 hectares with 11 listed as water; 22 buurten in the office list against 21 in the encyclopaedia. Complete-set 2026 sum 66,195 residents, the largest of the seven stadsdelen, flagged as arithmetic; the encyclopaedia box under the Woensel-Noord heading (42,165 on 8.24 square kilometres) carries the area of the Woensel-Zuid wijken and is not used. Ontginning 15,744 residents (2026) on 333 hectares, 8,185 households averaging 1.9, 7,837 dwellings with 3,292 owner-occupied, estimated 349,000 euro, income 30,700 euro per resident and 36,900 per recipient (2024), households under the low-income line 4.1 percent, at or around the social minimum 9.6, below 110 percent 14, below 120 percent 18 (2023), 720 on social assistance (2025), buurten including Vlokhoven, Jagershoef, Prinsejagt and Winkelcentrum, 4 primary with 967 pupils, 1 secondary with 1,008. Achtse Molen 15,695 on 496 hectares of land, 6,930 households averaging 2.3, 6,739 dwellings with 5,189 owner-occupied at 77 percent, estimated 458,000 euro, income 38,300 euro, poverty lines 1.7, 3.4, 5.1 and 6.6 percent, buurten including Kerkdorp Acht, 6 primary with 1,803 pupils, 1 secondary with 1,558. Aanschot 21,082 on 517 hectares of land, the largest Eindhoven wijk, 8,880 households averaging 2.3 with 3,690 with children, 8,574 dwellings, estimated 459,000 euro, income 36,400 euro, poverty lines 2.8, 5.1, 7.8 and 9.9 percent, buurten including Blixembosch-Oost, Blixembosch-West and Woenselse Heide, 9 primary with 2,532 pupils, 2 secondary with 1,543. Dommelbeemd 13,674 on 508 hectares of land, 6,315 households, 6,108 dwellings with 3,115 owner-occupied, estimated 380,000 euro, income 31,400 euro, poverty lines 3.9, 8.4, 12 and 16 percent, buurten Esp, Bokt, Heesterakker, Vaartbroek, Eckart and Luytelaer, 5 primary with 1,186 pupils. Oud-Woensel comparison ladder 5.6, 9.5, 14 and 17 percent, income 34,000 euro. Sums: 30,310 households, 29,258 dwellings, 16,826 owner-occupied, 10,220 under fifteen, 24 primary with 6,488 pupils, 4 secondary with 4,109. Definitions from the statistics office: the lage-inkomensgrens is a fixed amount of equal purchasing power for all years and household types, set from the 1979 assistance level for a single person, 9,250 euro in 2000 prices; the sociaal minimum is the legal subsistence minimum, the assistance benefit or for older people the state pension. Landmarks from the encyclopaedia: Kasteel Eckart built 1695 for Jonkheer Carel van Vlierden; the Eckartsebos or Lage Heide; the Dommeldal east of Woensel; the Onze Lieve Vrouw van Lourdeskerk in Vlokhoven, 1920, by Wolter te Riele; the Catharina Ziekenhuis in Woensel. Regio Zuid holidays. The district page argues that nested thresholds form a cumulative curve to be differenced and compared at every rung.',
    localProject: 'A set of nested thresholds is a cumulative curve, not a list of facts: difference it to get bands, never add it, and compare two places along the whole of it because the gap depends on the line. Every Eindhoven wijk row carries household shares for 2023 under the low-income line and at or around, below 110 percent and below 120 percent of the social minimum, with student and part-year households excluded. The social-minimum rungs nest; the low-income line is a separate fixed purchasing-power yardstick. Ontginning 4.1 on the low-income line and 9.6, 14 and 18 on the ladder: bands 9.6, 4.4 and 4.0 points, while adding the rungs gives 41.6 percent, counting the poorest three times. Dommelbeemd 3.9 and 8.4, 12, 16; Aanschot 2.8 and 5.1, 7.8, 9.9; Achtse Molen 1.7 and 3.4, 5.1, 6.6: the four curves never touch, so their ranking holds at any line, and mean income per resident (2024, a person measure) runs in the same order. Against Oud-Woensel, 5.6 and 9.5, 14, 17: clearly higher on the low-income line, 5.6 against 4.1, level on the social minimum, 9.5 against 9.6, level at 14, and 17 against 18 on whole-number figures, also level; by mean income Ontginning is lower, 30,700 against 34,000 euro. The gap is real at one line and absent at the others, and no reversal is claimed on margins inside the published precision. The programming form is the cumsum and diff pair, running totals misread as daily values, and percentiles: two services with one median and different tails, or a winner that changes between the median and the 99th percentile, answered by reporting several percentiles or the whole curve; also classifiers compared at a single confidence cut. Distinct from the mean against the typical case (Groningen), from cumulative against net over time (Zoetermeer), from ranking inside measurement noise (Breda) and rank against distance (Noord-Holland), from the unit of observation (Zeeland), from households against persons (Charlois) and from the framing of a gap (Gestel).',
    requiredMentions: [
      '15,744',
      '15,695',
      '13,674',
      '66,195',
      '8,185',
      '8,880',
      '30,310',
      '29,258',
      '16,826',
      'Kasteel Eckart',
      'Carel van Vlierden',
      'Vlokhoven',
      'Kerkdorp Acht',
      'Blixembosch'
    ],
    sources: [
      { claim: 'Wijk Ontginning, Eindhoven: 15,744 inwoners (2026), 15,825 (2025), 15,435 (2013); mannen 7,935, vrouwen 7,890 (2025); 8,185 huishoudens (2025), 4,005 eenpersoonshuishoudens, 1,930 zonder kinderen, 2,250 met kinderen, gemiddelde huishoudensgrootte 1.9; ages 2,180 (0 to 15), 2,055 (15 to 25), 4,370 (25 to 45), 3,800 (45 to 65), 3,345 (65+) (2026); 333 hectare, all land; bevolkingsdichtheid 4,752; woningvoorraad 7,837, 3,292 koopwoningen (42 percent), 4,545 huurwoningen (2025); gemiddelde WOZ 349,000 euro (2025); gemiddeld inkomen per inwoner 30,700 euro and per inkomensontvanger 36,900 euro (2024); % huishoudens met een laag inkomen 4.1, onder of rond sociaal minimum 9.6, tot 110% van sociaal minimum 14, tot 120% 18 (2023); bijstand 720 personen (2025); buurten t Hool, Driehoeksbos, Jagershoef, Vlokhoven, Winkelcentrum, Prinsejagt.', url: 'https://allecijfers.nl/wijk/ontginning-eindhoven/' },
      { claim: 'Wijk Achtse Molen, Eindhoven: 15,695 inwoners (2026), 15,805 (2025), 16,275 (2013); mannen 7,990, vrouwen 7,815 (2025); 6,930 huishoudens (2025), 2,020 eenpersoonshuishoudens, 2,550 met kinderen, 2,360 zonder, gemiddelde huishoudensgrootte 2.3; ages 2,335, 1,640, 3,810, 4,210, 3,695 (2026); 497 hectare, 496 land, 1 water; bevolkingsdichtheid 3,186; woningvoorraad 6,739, 5,189 koopwoningen (77 percent), 1,550 huurwoningen; gemiddelde WOZ 458,000 euro (2025); gemiddeld inkomen per inwoner 38,300 and per inkomensontvanger 46,500 euro (2024); % laag inkomen 1.7, onder of rond sociaal minimum 3.4, tot 110% 5.1, tot 120% 6.6 (2023); bijstand 180 personen (2025); studentenhuishoudens en huishoudens met een onvolledig jaarinkomen zijn hierin niet meegenomen.', url: 'https://allecijfers.nl/wijk/achtse-molen-eindhoven/' },
      { claim: 'Wijk Aanschot, Eindhoven: 21,082 inwoners (2026), 20,910 (2025), 19,360 (2013); mannen 10,265, vrouwen 10,645 (2025); 8,880 huishoudens (2025), 2,790 eenpersoonshuishoudens, 2,400 zonder kinderen, 3,690 met kinderen, gemiddelde huishoudensgrootte 2.3; ages 3,470, 2,675, 5,290, 5,895, 3,730 (2026); 519 hectare, 517 land, 2 water; bevolkingsdichtheid 4,044 (2025); woningvoorraad 8,574, 5,230 koopwoningen, 3,344 huurwoningen; gemiddelde WOZ 459,000 euro (2025); gemiddeld inkomen per inwoner 36,400 and per inkomensontvanger 45,300 euro (2024); % laag inkomen 2.8, onder of rond sociaal minimum 5.1, tot 110% 7.8, tot 120% 9.9 (2023); bijstand 370 personen (2025); buurten Castilielaan, Blixembosch-Oost, Blixembosch-West, Tempel, Woenselse Heide; het sociaal minimum is het wettelijk bestaansminimum zoals dat in de politieke besluitvorming is vastgesteld.', url: 'https://allecijfers.nl/wijk/aanschot-eindhoven/' },
      { claim: 'Wijk Dommelbeemd, Eindhoven: 13,674 inwoners (2026), 13,565 (2025), 13,450 (2013); mannen 6,785, vrouwen 6,780 (2025); 6,315 huishoudens (2025), 2,475 eenpersoonshuishoudens, 1,640 zonder kinderen, 2,200 met kinderen, gemiddelde huishoudensgrootte 2.1; ages 2,235, 1,675, 3,605, 3,415, 2,700 (2026); 515 hectare, 508 land, 8 water; bevolkingsdichtheid 2,670; woningvoorraad 6,108, 3,115 koopwoningen (51 percent), 2,993 huurwoningen; gemiddelde WOZ 380,000 euro (2025); gemiddeld inkomen per inwoner 31,400 and per inkomensontvanger 38,700 euro (2024); % laag inkomen 3.9, onder of rond sociaal minimum 8.4, tot 110% 12, tot 120% 16 (2023); bijstand 530 personen (2025); buurten Esp, Bokt, Heesterakker, Vaartbroek, Eckart, Luytelaer.', url: 'https://allecijfers.nl/wijk/dommelbeemd-eindhoven/' },
      { claim: 'Wijk Oud-Woensel, Eindhoven: gemiddeld inkomen per inwoner 34,000 and per inkomensontvanger 39,200 euro (2024); % huishoudens met een laag inkomen 5.6, onder of rond sociaal minimum 9.5, tot 110% van sociaal minimum 14, tot 120% 17 (2023).', url: 'https://allecijfers.nl/wijk/oud-woensel-eindhoven/' },
      { claim: 'CBS begrip lage-inkomensgrens: De lage-inkomensgrens betreft een vast bedrag dat voor alle jaren en alle typen huishoudens een gelijke koopkracht vertegenwoordigt; based on de bijstandsuitkering van een alleenstaande in 1979, 9250 euro in prijzen van 2000.', url: 'https://www.cbs.nl/nl-nl/onze-diensten/methoden/begrippen/lage-inkomensgrens' },
      { claim: 'CBS begrip sociaal minimum: Het wettelijk bestaansminimum zoals dat in de politieke besluitvorming is vastgesteld. Het sociaal minimum bestaat uit de bijstandsuitkering of (voor ouderen) het AOW-pensioen.', url: 'https://www.cbs.nl/nl-nl/onze-diensten/methoden/begrippen/sociaal-minimum' },
      { claim: 'Woensel: Op 1 januari 1920 werd Woensel deel van de gemeente Eindhoven. Het kasteel werd in 1695 gebouwd in opdracht van Jonkheer Carel van Vlierden (Geschiedenis van Eckart). Het Eckartsebos of Lage Heide is een rijk en afwisselend gebied. Het Dommeldal ligt ten oosten van Woensel. Onze Lieve Vrouw van Lourdeskerk in de buurtschap Vlokhoven uit 1920; de architect was Wolter te Riele. Het Catharina Ziekenhuis Eindhoven staat in Woensel. Woensel-Noord is ingedeeld in vier wijken en 21 buurten: Ontginning, Achtse Molen (with Kerkdorp Acht), Aanschot (with Blixembosch-Oost and Blixembosch-West), Dommelbeemd (with Eckart). Box under Woensel-Noord: 8,24 km2, 42.165 inwoners (2023).', url: 'https://nl.wikipedia.org/wiki/Woensel' },
      { claim: 'School holiday regions: regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'That Ontginning is poorer than Oud-Woensel, or the reverse. The answer depends on the line: apart on the low-income line, level on every rung of the social-minimum ladder, and the other way round on mean income.',
      'Any reversal between Ontginning and Oud-Woensel on the upper rungs. 9.5 against 9.6 and 17 against 18 lie inside the published precision; ranking inside noise is the Breda argument.',
      'Any sum of the rungs, such as 41.6 percent for Ontginning. The rungs nest, and the sum counts the poorest households three times.',
      'A stadsdeel poverty share for Woensel-Noord. The household counts behind the shares, after the exclusion of student and part-year households, are not published.',
      'Any comparison of mean income per resident (2024) with household shares (2023) as though they measured one population. Households against persons is the Charlois argument.',
      'A Woensel-Noord population of 42,165. That box carries the area of the Woensel-Zuid wijken, as the Woensel-Zuid page shows.',
      'That Ontginning has the lowest income in Eindhoven in any meaningful sense. It is 100 euro below Oud-Gestel; rank against distance is the Noord-Holland argument.',
      'The mean as a misleading description of a typical case. That is the Groningen argument; here every figure is used for what it is.',
      'Anything the Eindhoven city page owns, including the named secondary schools and their addresses, the High Tech Campus and the Indian-origin figures.'
    ]
  }
};
