'use strict';
// Emmen: 109,881 people spread over 346 square kilometres of former peat
// colony, sixteen named places, and a zoo whose opening year is quoted in
// every comparison made since.
// Spine: the first observation in a series is a measurement of novelty, and
// the word openingsjaar does not say how many days it covers.

module.exports = {
  slug: 'coding-classes-in-emmen',
  code: 'emm',
  accent: '#843442',
  accentRationale: 'Emmen: a fired brick red pulled from the peat colonies and the old kilns, set by the solver clear of the other warm tones already carrying pages in this series',
  pageType: 'city',
  place: {
    name: 'Emmen',
    eyebrow: 'Emmen, Drenthe',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Drenthe' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Emmen, Netherlands',
  title: 'Coding Classes in Emmen | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Emmen for ages 6 to 67, from Klazienaveen to Schoonebeek across all sixteen woonplaatsen. First lesson free.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families across Emmen, built on a visitor series whose first year is the one number nobody should measure from.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '8 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Emmen Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults across the sixteen woonplaatsen of Emmen, taught in English.'
  },

  h1: 'Coding classes in Emmen, where the zoo drew 1.3 million in its opening year and that is the one year nothing should be measured against',
  capsuleQ: 'What are the best coding classes in Emmen?',
  capsule: 'Coding classes in Emmen reach 109,881 people (Statistics Netherlands, 1 January 2026) spread across 346.26 square kilometres of former peat colony at 327 residents to the square kilometre, in 50,573 households of which 18,480 hold one person. The zoo on the edge of town drew 1.3 million visitors in its openingsjaar and 951,000 in 2024, and calling that a 27 percent collapse measures eight ordinary years against one that was never ordinary. Modern Age Coders teaches live online in English from Roswinkel down to Nieuw-Schoonebeek, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'A zoo opened on the edge of Emmen in 2016 and 1.3 million people walked through it. In 2024, 951,000 did. Put those two figures side by side and you have a fall of 27 percent and a story about a park in trouble. Put 2024 next to 2018 instead and you have a rise of 12 percent and a story about recovery. Nothing about the zoo changed between those two readings. Only the year on the left changed. An opening year measures curiosity about something new, and the first number in any series is the one that deserves the least trust.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Emmen.',

  picks: {
    eyebrow: 'Course picks for Emmen',
    h2: 'Four courses for a municipality with sixteen villages in it',
    intro: 'A groep 5 child in Klazienaveen who has never met a text editor, a teenager in Emmer-Compascuum who wants to build the app rather than describe it, an NHL Stenden student who needs Python to be automatic, and a parent in Erica whose employer has switched on AI tools and explained nothing: four doors, one hour each, no travel.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Real typed Python, drawings that obey instructions and a first program that spots a pattern, in English, for the groep 5 to 8 child in any of the sixteen villages.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Two years from an empty file to projects that run, for the teenager choosing a profiel and wanting the technical one to be an informed choice.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python that fetches, cleans, decides and reports on its own, for the student or worker who has done the same task by hand three hundred times.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reading a series properly, spotting the year that should not be in it, and using AI tools without handing them the judgement, for anyone who reports numbers to somebody else.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Emmen today',
      h2: 'A hundred and ten thousand people spread across three hundred and forty-six square kilometres',
      intro: 'The national register counted 109,881 residents on 1 January 2026, in 50,573 households averaging 2.12 people, on 33,533 hectares of land inside 34,626 hectares of territory. That works out at a published 327 residents to the square kilometre, which is thin ground by Dutch standards. In 1995 the count stood at 101,588, so the recorded gain over thirty-one years is 8,293 people, or 8.2 percent.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The over sixty-fives almost exactly match the under twenty-fives', p: '27,388 residents are sixty-five or older. 14,939 are under fifteen and 12,473 are between fifteen and twenty-five, which is 27,412 people under twenty-five. The two groups sit twenty-four people apart, and this page does that subtraction rather than finding it published. The largest single band is 30,508 residents aged between forty-five and sixty-five, with 24,573 between twenty-five and forty-five.' },
          { h3: 'Fifty-one primary schools for 8,479 pupils', p: 'The municipality counts 51 primary establishments teaching 8,479 pupils and 8 secondary establishments teaching 6,297. Divide and the primary average is about 166 pupils to an establishment against about 787 at secondary level, arithmetic this page is doing on the published counts. Fifty-one small schools is what sixteen separate villages produce.' },
          { h3: 'More students leave than arrive', p: '1,408 people study at institutions inside the municipality. Separately, 2,080 residents are enrolled in applied higher education and 320 at university level, so 2,400 residents are studying at that level against 1,408 places filled here. Those two figures answer different questions and are never added together on this page.' }
        ] },
        { kind: 'spec', title: 'Peat, oil, a German border and a zoo that changed address', p: 'Emmen sits on the south-eastern corner of Drenthe against the German border, and most of its villages were dug rather than founded: Emmer-Compascuum, Barger-Compascuum, Klazienaveen, Nieuw-Weerdinge, Zwartemeer and Weiteveen are peat colony names, laid out along the canals that carried the turf away. Schoonebeek joined the municipality in the reorganisation of 1998 and gave its name to a long-worked oil field. The zoo left the Hoofdstraat in the centre entirely: building started in November 2013 at the Noordbargeres site, King Willem-Alexander opened the park on 18 March 2016, and the old ground was closed and demolished. The mayor is Eric van Oosterhout.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Sixteen woonplaatsen, twenty-seven wijken, eighty-three buurten',
      intro: 'Emmen is not a city with suburbs. It is a town of about fifty-eight thousand with fifteen other named places attached to it, some of them a twenty-minute drive out across the peat. A class delivered through a router treats all sixteen identically, which is not something a building in the centre can do.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Emmen itself', p: 'The town proper held 58,130 people at its 2023 count, a little over half the municipality, with the market, the station, the NHL Stenden campus and the ground the zoo used to stand on.' },
          { h3: 'Klazienaveen and the south-east', p: 'Klazienaveen, at 12,020 in 2023, is the second place in the municipality and a substantial town in its own right, with Zwartemeer at 3,060 and Weiteveen at 1,665 further towards the border.' },
          { h3: 'The Compascuum villages', p: 'Emmer-Compascuum at 7,760 and Barger-Compascuum at 1,765, north-east of the town, named from the common ground once shared across the border and laid out along their canals.' },
          { h3: 'Erica, Nieuw-Amsterdam and Veenoord', p: 'Erica at 4,750, Nieuw-Amsterdam at 4,730 and Veenoord at 2,150, a run of villages south-west of the town along the old peat waterways, with Nieuw-Dordrecht at 2,100 beside them.' },
          { h3: 'Schoonebeek and the border strip', p: 'Schoonebeek at 4,440 and Nieuw-Schoonebeek at 1,315, on the southern edge against Germany, in the municipality since 1998 and sitting over the oil field.' },
          { h3: 'Nieuw-Weerdinge and Roswinkel', p: 'Nieuw-Weerdinge at 3,390 in the north, and Roswinkel at 825, the smallest place with a published figure, close enough to the Groningen boundary that its shopping is often done in another province.' }
        ] },
        { kind: 'p', text: 'Fourteen places have a published 2023 population and sixteen are registered, so this page lists what the source lists and does not invent the other two. Every one of them gets the same lesson at the same hour for the same fee, and a learner is placed on what they can already do rather than on which village the address is in.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, and the word that will not say how many days it means',
      intro: 'The national count, the municipal entry, the park with nine years of published attendance, and the one claim this page refuses to make.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands: 109,881 residents in 2026; 50,573 households averaging 2.12 people, 18,480 of them single-person, 37 percent; 14,939 under fifteen; 12,473 aged fifteen to twenty-five; 24,573 aged twenty-five to forty-five; 30,508 aged forty-five to sixty-five; 27,388 aged sixty-five and over; total area 34,626 hectares with 33,533 of land; density 327; 51 primary establishments with 8,479 pupils and 8 secondary with 6,297; 1,408 students at institutions here; 2,080 residents in applied higher education and 320 at university level; 16 woonplaatsen, 27 wijken and 83 buurten; 101,588 residents in 1995, a rise of 8,293.' },
          { h3: 'The municipality, described', p: 'Its own entry: 109,838 residents, 43 fewer than the national figure for the same date, and both are kept here rather than reconciled; 346.26 square kilometres, of which 335.18 land and 11.08 water, against 335.33 square kilometres of land in the national figures, both kept; mayor Eric van Oosterhout. The village populations quoted above are its 2023 figures.' },
          { h3: 'The park, its dates and its address', p: 'Wildlands Adventure Zoo covers 24 hectares at the Noordbargeres. Construction began in November 2013. King Willem-Alexander performed the official opening on 18 March 2016, while the entry separately gives 25 March 2016 as the opening date, and this page quotes both because they are plainly two different events. It exists because the former Noorder Dierenpark moved: in October 2012 it was decided the old park on the Hoofdstraat would be closed and demolished.' },
          { h3: 'Nine years of attendance', p: 'The published series reads 1.3 million in the openingsjaar, then 1,000,000 in 2017, 850,000 in 2018, 930,000 in 2019, 558,000 in 2020, 516,000 in 2021, 830,000 in 2022, 926,000 in 2023 and 951,000 in 2024. Every one of those numbers is quoted from the entry. The comparisons drawn between them further down this page are arithmetic and are labelled as such.' },
          { h3: 'What openingsjaar does not tell you', p: 'The source says the park drew 1.3 million bezoekers in its openingsjaar. That word can mean the calendar year 2016 or the first twelve months of trading, and it makes a large difference: 1.3 million over the 289 days from 18 March is about 4,498 a day, over a full year it is about 3,562 a day, and 951,000 across 2024 is about 2,598 a day. The fall is 42 percent on the first reading and 27 percent on the second. This page reports both and picks neither.' },
          { h3: 'A comparison this page will not make', p: 'The gain of 8,293 residents since 1995 crosses the 1998 reorganisation, in which Schoonebeek joined Emmen, so it is not the growth of one unchanged piece of ground and is never described here as though it were. What a boundary change does to a population series is the argument of the Alkmaar page in this series, and this page leaves it there.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, the park, the campus or any school named here and claims none. Nothing on this page turns a quoted figure into a rounder or more convenient one.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'One point three million: build the case for throwing the first year away',
      intro: 'Nine published figures, one of them produced by novelty, two of them produced by closure, and a conclusion that flips depending on which one you start from.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Name what the first year actually was', p: 'A brand new park, a king at the opening, national coverage and everybody in the north going once to see it. That is a measurement of curiosity, not of demand. The learner writes the sentence out loud before touching the numbers, because once it is written the temptation to treat 1.3 million as normal disappears.' },
          { h3: '2. Put the figures on the same footing', p: 'The word openingsjaar hides a denominator. Under the calendar reading the park was open 289 days in 2016 and ran at about 4,498 people a day; under the twelve-month reading it ran at about 3,562. 2024 gives about 2,598 a day. The correction does not soften the fall, it can double it, and the learner finds out that adjusting for exposure sometimes moves the answer away from the comfortable direction.' },
          { h3: '3. Pick a baseline and say so out loud', p: 'From 2016 the change to 2024 is minus 27 percent. From 2017 it is minus 5. From 2018 it is plus 12. From 2019, the last year before the closures, it is plus 2. All four are true statements about the same park, and the only honest report names the baseline, says why that year was chosen, and shows the whole series next to it.' }
        ] },
        { kind: 'table', caption: 'The same 951,000, measured from nine different starting points', head: ['Year', 'Visitors', 'What that year was', 'Compared with 2024'], rows: [
          ['2016, the openingsjaar', '1,300,000', 'a park nobody had seen before', 'a fall of 27 percent'],
          ['2017', '1,000,000', 'the first ordinary year', 'a fall of 5 percent'],
          ['2018', '850,000', 'the low point of the early years', 'a rise of 12 percent'],
          ['2019', '930,000', 'the last full year before the closures', 'a rise of 2 percent'],
          ['2020 and 2021', '558,000 and 516,000', 'years shaped by closure rather than by demand', 'no baseline is taken from either'],
          ['2022 and 2023', '830,000 and 926,000', 'two years of recovery', 'a rise of 15 percent and of 3 percent'],
          ['2024', '951,000', 'the highest figure since 2017', 'the point being explained']
        ] },
        { kind: 'callout', h3: 'Ask what the first observation is an observation of', p: 'The first point in a series almost never belongs to the same process as the rest of it. A launch, a grand opening, a free trial, a marketing push, a first release: each produces a number generated by novelty, and novelty is not a level anything returns to. Measure the following years against it and you have built a decline into the arithmetic before looking at anything. The habit worth having is small and it is mechanical. Before computing any change, ask what made the first observation possible, ask what period it covers, and ask whether the same conditions applied to the last observation. Here the answers are a new park, an ambiguous window and no, which is enough to disqualify 2016 as a baseline before a single percentage is worked out. It applies far beyond zoos. First-month signups after a launch, first-quarter revenue after a product release, the week after a campaign, the opening day of a shop: quote any of them as the normal level and every honest month afterwards looks like failure. The counterpart error sits at the other end of this series, where 2020 and 2021 were shaped by closure, so a baseline can be unrepresentative for opposite reasons and needs checking at both ends.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for a series that begins with a launch',
      intro: 'Signups after release, sales after an opening, traffic after a campaign, incidents after a new system goes in: the first number is always the exciting one and always the least useful. Practised on a park with nine published years.',
      body: [
        { kind: 'table', caption: 'Reading a series that does not start in a steady state', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Interrogate the first point', 'Write down what made that observation possible', 'A launch quietly treated as normal', 'A series you can actually read'],
          ['Find the denominator', 'Divide by the period the count was exposed to, not by the calendar', 'A rate built from unequal windows', 'Two figures that can be compared'],
          ['Flag the abnormal years', 'Mark closures and one-off events inside the data, not in a footnote', 'A shutdown read as a trend', 'Honest gaps rather than invented continuity'],
          ['Declare the baseline', 'State which year you measure from and why that year', 'A conclusion chosen by choosing a start', 'An argument somebody else can contest'],
          ['Publish the whole series', 'Show every point, never only the two ends', 'A line drawn through the two most convenient dots', 'The shape, which is where the information lives']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A jar of sweets on the first day of a new game and on every day after. The children work out why day one was different, then decide together which day is a fair one to compare against, and discover that the answer to their question was hiding in that choice all along.' },
          { h3: 'For teenagers', p: 'The nine visitor figures in Python, a function that reports the change from any chosen base year, and a chart with the opening year marked as excluded and the closure years shaded. The stretch: write the two sentences a newspaper would print from this data, one true and alarming, one true and reassuring, and explain what makes both of them honest.' },
          { h3: 'For adults', p: 'The same treatment on a series from work: signups since launch, revenue since the new pricing, tickets since the migration. Adults nearly always find a first month everyone still quotes, and a comparison that has been carried in a slide deck for two years without anybody asking what that month was.' }
        ] },
        { kind: 'p', text: 'Population, household, age, area, school and student figures come from the national statistics office; the municipal description, the village populations, the park dates and all nine visitor figures come from the encyclopaedia entries named beside them. The daily rates of about 4,498, about 3,562 and about 2,598, and the percentage changes in the table, are this page dividing published numbers and are presented as arithmetic rather than as figures anybody reported.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a jar of sweets on day one to a series that names its own baseline',
    intro: 'The rung is set in the free hour by what the learner can do, and the village on the address never enters the decision.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Why was the first day different?', p: 'Children compare a first day with an ordinary one and argue about which is fair.', courses: ['kids-coding-blocks-masterclass', 'python-ai-kids-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Rates need a denominator', p: 'Learners stop counting totals and start counting per day, per pupil, per opening hour.', courses: ['maths-through-coding', 'scratch-programming-complete-course'] },
      { band: 'Ages 14 to 18', h3: 'Baselines, exclusions and charts that say so', p: 'Teenagers write code that reports change from a chosen base and marks the years it refuses to use.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The number still in the slide deck', p: 'Adults take a launch figure their organisation still quotes and rebuild the comparison honestly.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell you the zoo lost a quarter of its visitors. Why should a child in Emmen learn to ask which year it started from?',
    intro: 'Because both readings are arithmetically correct, and only one of them describes what happened.',
    p1: 'Ask a tool what happened to attendance at the park and the likely answer is a fall of about a quarter, from 1.3 million to 951,000. Nothing in that is false. It is simply an answer to a question nobody should have asked, because the first figure was produced by a park nobody had visited yet and the second by a park in its ninth year. The model will not volunteer that, partly because most of the text it has read makes the same comparison, and partly because a single confident percentage is what the question seemed to invite.',
    p2: 'So the learner builds the version that asks first. Which year is the base, what made that year possible, how many days does each figure cover, which years are unusable and why. That is a handful of lines of code and a habit of mind, and the habit is the part that transfers. A fourteen-year-old in Klazienaveen who has taken nine numbers apart this way will, at twenty-eight, be the person in the meeting who asks what the first month was before agreeing that the graph shows decline. Tools will keep producing the fluent single answer. Knowing which question it answered stays a person\'s job.',
    closer: 'The case for a child in Emmen learning to code in 2026 has very little to do with zoos. It is that almost every number an adult is handed comes with a baseline nobody mentioned, that choosing the baseline usually chooses the conclusion, and that a park with nine published years and one spectacular opening is the clearest teaching material this municipality owns.',
    blogAnchor: 'whether learning to code still pays off for a child in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a municipality you cannot cross in twenty minutes',
    intro: 'From Roswinkel in the north to Nieuw-Schoonebeek on the border is a real journey, and in the dark half of the year it is a journey nobody wants to make twice a week for a class.',
    cells: [
      { h3: 'The class arrives instead of the child travelling', p: 'The lesson happens at the kitchen table in Erica, Zwartemeer or the middle of Emmen at one fixed hour every week, which removes the only genuine obstacle in a municipality this wide.' },
      { h3: 'Taught in English, with the school words left alone', p: 'Everything is taught in English. Groep, havo, vwo and profielkeuze stay in Dutch, because those are the words printed on the school\'s own paperwork and translating them helps nobody.' },
      { h3: 'What the first free hour settles', p: 'It ends with a demonstrated level rather than a claimed one, a named course that follows from it, and an hour in the week. No payment details are requested at any stage of it.' },
      { h3: 'Ability makes the group; the postcode is not consulted', p: 'A learner from Nieuw-Weerdinge and a learner from Schoonebeek sit in the same group if they are at the same stage, and in different ones if they are not.' },
      { h3: 'Twice a week, on the regio Noord calendar', p: 'Two live lessons a week at a repeating slot, normally eight in a month. Drenthe takes its school holidays with regio Noord, and the weeks a family is away are built into the plan before the plan is agreed.' },
      { h3: 'Three and a half hours in summer, four and a half in winter', p: 'The Dutch clock moves and the Indian one does not, so the gap to the teacher depends on the month. The end of the school day, the early evening and both weekend days work at either setting.' }
    ],
    spec: { title: 'A municipality where the pensioners and the under twenty-fives are the same size', p: '27,388 residents are sixty-five or over and 27,412 are under twenty-five, a difference of twenty-four people in a municipality of 109,881. Emmen is not short of children; it is short of the density that lets a school or a club fill a specialist group from one village. A group of five to ten assembled on ability from across the world solves exactly that problem, and the same class runs up to the age of sixty-seven for the other cohort.' }
  },

  fees: {
    h2: 'The fee, in dollars, the same in all sixteen villages',
    intro: 'Printed here rather than saved for a phone call.',
    first: 'A full lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'A single international rate applies and it is quoted in dollars; no euro price exists, so Roswinkel and the centre of Emmen see the identical figure. Nothing is charged until the free lesson has fixed a course and an hour, and payment is then arranged over WhatsApp. Pausing, changing plan and missing a week are all set out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, reproduced exactly as they were written',

  book: {
    h2: 'Send us the level, not the village',
    intro: 'The first task might be a jar of sweets on day one against day forty, nine visitor numbers in Python with the openingsjaar marked as excluded, or the launch figure your own organisation has been quoting since the day it happened.',
    success: 'Thank you. Your Emmen class request has been sent.'
  },

  faq: {
    h2: 'Emmen coding class questions',
    intro: 'The municipality, its villages, its park, the teaching and the terms.',
    items: [
      { q: 'Did the zoo in Emmen really lose a quarter of its visitors?', a: 'From 1.3 million in the openingsjaar to 951,000 in 2024 is a fall of about 27 percent, and that arithmetic is correct. It is also the least informative comparison available, because the first year was a brand new park opened by the king and the last was a park in its ninth year. Measured from 2018 the same 951,000 is a rise of 12 percent, and measured from 2019 it is a rise of 2 percent. Choosing the baseline is what chooses the conclusion, which is the project this page is built on.' },
      { q: 'Why does this page refuse to say whether 1.3 million covers 2016 or the first twelve months?', a: 'Because the source says openingsjaar and nothing more precise, and the two readings are far apart. Over the 289 days from 18 March the park would have averaged about 4,498 visitors a day, over a full twelve months about 3,562, and 2024 works out at about 2,598. The fall is 42 percent under the first reading and 27 percent under the second. Reporting both is honest and picking one would not be.' },
      { q: 'How many villages are in the municipality of Emmen?', a: 'Sixteen woonplaatsen are registered, along with 27 wijken and 83 buurten, and fourteen of the villages have a published 2023 population. Emmen itself held 58,130, Klazienaveen 12,020, Emmer-Compascuum 7,760, Erica 4,750, Nieuw-Amsterdam 4,730, Schoonebeek 4,440, Nieuw-Weerdinge 3,390 and Zwartemeer 3,060, with Veenoord, Nieuw-Dordrecht, Barger-Compascuum, Weiteveen, Nieuw-Schoonebeek and Roswinkel smaller again.' },
      { q: 'Is the class taught in Dutch?', a: 'It is not. Every lesson runs in English from beginning to end. Dutch school vocabulary is the deliberate exception and is left as the school writes it, so a teacher says groep, havo, vwo and profielkeuze rather than reaching for an English equivalent. There is no Dutch-language version of any course.' },
      { q: 'What hours suit a family in Emmen?', a: 'The teacher is three and a half hours ahead during Dutch summer time and four and a half in winter, because only the Dutch clock moves. In practice the workable window runs from the end of the school day to mid-evening, and both Saturday and Sunday are open. One repeating weekly slot is agreed during the free lesson and then stays put.' },
      { q: 'We live in Roswinkel or Nieuw-Schoonebeek, a long way from the centre. Does that change anything?', a: 'Nothing at all. The lesson comes down the connection, so the twenty-five kilometres between the northern and southern edges of the municipality make no difference to the hour, the group or the fee. Distance is the reason this format suits Emmen better than most places its size.' },
      { q: 'What happens in the free lesson?', a: 'The teacher finds the edge of what the learner can already do by having them do something, then sets one task just past it. A young child might compare a first day with an ordinary day and argue about which is fair. A teenager takes nine numbers and writes a function that reports change from any base year. An adult brings a launch figure from work. It finishes with a course, a rung, a weekly hour and a price in dollars, and nothing has been charged.' },
      { q: 'Is there a Modern Age Coders classroom in Emmen?', a: 'There is not, and none is claimed in Emmen, in Klazienaveen or anywhere else in the Netherlands. All teaching is live and online, and it needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is labelled as such.', boiler: true },
      { q: 'What do Emmen coding classes cost?', a: 'The first lesson costs nothing. After it, group tuition is USD 100 a month for two live lessons every week, normally eight across the month, in a group of five to ten. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. The course, the format, the recurring hour and availability are all confirmed before any payment is made.', boiler: true },
      { q: 'How large is a group?', a: 'Five to ten learners, matched on level, pace and goal rather than on age, school or village. One-to-one means exactly that, a single learner with a single teacher. When no group at the right level happens to be running, a family can take one-to-one lessons or wait for the next group to fill.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'West across the peat, north up the Hondsrug, and up to the country',
    html: 'Emmen sits in <a class="cg-inline-link" href="/coding-classes-in-drenthe">Drenthe</a>, whose page counts the stone tombs and all twelve municipalities. North along the ridge is the city of <a class="cg-inline-link" href="/coding-classes-in-groningen">Groningen</a>, and south past Meppel lies <a class="cg-inline-link" href="/coding-classes-in-overijssel">Overijssel</a> with <a class="cg-inline-link" href="/coding-classes-in-zwolle">Zwolle</a> at its centre. Everything here descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>. A learner who turns out to want trained models rather than running programs should start at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Finish this on WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-drenthe', label: 'Drenthe' },
    { href: '/coding-classes-in-groningen', label: 'Groningen' }
  ],

  personalityCss: `
.cg-root.cg-emm .cg-hero-grid { align-items: end; gap: clamp(1.6rem, 4vw, 3.05rem); }
.cg-root.cg-emm .cg-hero h1 { font-weight: 600; letter-spacing: -0.0135em; line-height: 1.08; }
.cg-root.cg-emm .cg-capsule { border-left-width: 5px; border-left-style: solid; padding-left: 1.5rem; }
.cg-root.cg-emm .cg-eyebrow { letter-spacing: 0.155em; font-weight: 600; }
.cg-root.cg-emm .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.008em; }
.cg-root.cg-emm .cg-grid-3 { gap: clamp(1.1rem, 2.4vw, 1.85rem); }
.cg-root.cg-emm .cg-card h3 { letter-spacing: -0.004em; }
.cg-root.cg-emm .cg-table th { letter-spacing: 0.055em; }
.cg-root.cg-emm .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-emm .cg-ladder-col { border-top: 5px solid var(--cg-accent-soft); padding-top: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'City and municipality of Emmen, Drenthe: 109,881 residents (CBS 2026) across 346.26 km2 at a published density of 327, the widest and thinnest ground of the Drenthe pages; 50,573 households averaging 2.12 with 18,480 single-person; 27,388 residents aged 65 and over against 27,412 under 25, twenty-four apart; 51 primary establishments (8,479 pupils) and 8 secondary (6,297), so about 166 pupils to a primary establishment; only 1,408 students at institutions here against 2,400 residents enrolled in higher education. Sixteen woonplaatsen, 27 wijken, 83 buurten, most of them peat colony villages. Schoonebeek joined in 1998. Regio Noord holidays. The city page argues from launch-year baselines; the Drenthe page owns the hunebedden and the twelve municipalities, and Alkmaar owns the boundary-change-in-a-series argument.',
    localProject: 'Ask what the first observation is an observation of. Wildlands Adventure Zoo drew 1.3 million visitors in its openingsjaar and 951,000 in 2024, which reads as a fall of 27 percent, but 2016 measured curiosity about a park nobody had seen and the published series gives eight further years: 1,000,000 in 2017, 850,000 in 2018, 930,000 in 2019, 558,000 in 2020, 516,000 in 2021, 830,000 in 2022, 926,000 in 2023. Measured from 2018 the same 951,000 is a rise of 12 percent and from 2019 a rise of 2 percent, so the baseline chooses the conclusion. A second layer sits in the word openingsjaar, which does not say whether it covers the calendar year or the first twelve months: 1.3 million over the 289 days from 18 March 2016 is about 4,498 a day and over a full year about 3,562, against about 2,598 a day in 2024, making the fall 42 percent or 27 percent by reading. Distinct from the base-year trap (Flevoland), which is about choosing among many valid base years and dividing by zero, and from mismatched vintages (Apeldoorn): here every figure comes from one source and one series, and the defect is that the first point was generated by a different process from the rest while 2020 and 2021 were generated by closure. The learner names what made the first observation possible, converts to a per-day rate, marks the unusable years inside the data and reports the whole series with a declared baseline.',
    requiredMentions: [
      '109,881',
      '50,573',
      '18,480',
      '101,588',
      '8,479',
      '6,297',
      '30,508',
      '951,000',
      'openingsjaar',
      'Klazienaveen',
      'Emmer-Compascuum',
      'Zwartemeer',
      'Roswinkel',
      '18 March 2016'
    ],
    sources: [
      { claim: 'Emmen 109,881 residents in 2026 (CBS); 50,573 households averaging 2.12, 18,480 single-person (37 percent); 14,939 aged 0 to 15; 12,473 aged 15 to 25; 24,573 aged 25 to 45; 30,508 aged 45 to 65; 27,388 aged 65 and over; total area 34,626 ha, land 33,533 ha; density 327; 51 primary establishments (8,479 pupils) and 8 secondary (6,297); 1,408 students at institutions in the municipality; HBO 2,080 and WO 320; 16 woonplaatsen, 27 wijken and 83 buurten; 101,588 residents in 1995, a rise of 8,293 (8.2 percent).', url: 'https://allecijfers.nl/gemeente/emmen/' },
      { claim: 'Emmen 109,838 residents; 346.26 km2 of which 335.18 land and 11.08 water; mayor Eric van Oosterhout; 2023 populations of the kernen: Emmen 58,130, Klazienaveen 12,020, Emmer-Compascuum 7,760, Erica 4,750, Nieuw-Amsterdam 4,730, Schoonebeek 4,440, Nieuw-Weerdinge 3,390, Zwartemeer 3,060, Veenoord 2,150, Nieuw-Dordrecht 2,100, Barger-Compascuum 1,765, Weiteveen 1,665, Nieuw-Schoonebeek 1,315, Roswinkel 825.', url: 'https://nl.wikipedia.org/wiki/Emmen_(Drenthe)' },
      { claim: 'Wildlands Adventure Zoo Emmen: 24 hectares at Emmen; construction began in November 2013; officially opened by King Willem-Alexander on 18 March 2016, with an opening date separately given as 25 March 2016; created by the move of the former Noorder Dierenpark, and in October 2012 it was decided the old park on the Hoofdstraat would be closed and demolished. Visitors: 1.3 million in the openingsjaar, 1,000,000 in 2017, 850,000 in 2018, 930,000 in 2019, 558,000 in 2020, 516,000 in 2021, 830,000 in 2022, 926,000 in 2023 and 951,000 in 2024.', url: 'https://nl.wikipedia.org/wiki/Wildlands_Adventure_Zoo_Emmen' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'A single reading of openingsjaar. The source does not say whether 1.3 million covers the calendar year 2016 or the first twelve months of trading, so both daily rates are published and neither is chosen.',
      'A percentage share of the municipality living in the town of Emmen. The 58,130 figure is a 2023 count and the 109,881 total is a 2026 one, and dividing across vintages is the error the Apeldoorn page exists to name.',
      'A residual population for the two woonplaatsen without a published figure. Fourteen of the sixteen are published and the page lists only those.',
      'The gain of 8,293 residents since 1995 described as growth of unchanged ground. Schoonebeek joined the municipality in 1998, and what that does to a series belongs to the Alkmaar page.',
      'A single opening date for the park. Two are published, 18 March 2016 for the royal opening and 25 March 2016 as the opening date, and both are quoted.',
      'Anything the Drenthe page owns: the hunebedden, the twelve municipalities and the provincial totals.'
    ]
  }
};
