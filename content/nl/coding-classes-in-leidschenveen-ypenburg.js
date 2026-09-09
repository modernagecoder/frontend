'use strict';
// Leidschenveen-Ypenburg: the newest stadsdeel of The Hague, four wijken, all
// read. Two are neighbourhoods and two are business parks.
// Spine: a residential register records where people sleep, so every figure in
// it is a night-time figure, and nothing displayed says so.

module.exports = {
  slug: 'coding-classes-in-leidschenveen-ypenburg',
  code: 'lyp',
  accent: '#6B477A',
  accentRationale: 'Leidschenveen-Ypenburg: a low-chroma plum off dusk on the polder water, of which Ypenburg alone holds 54 hectares, distinct from every Hague page it links to by a wide margin, and nearest to Feijenoord in Rotterdam, which it does not link to',
  pageType: 'district',
  place: {
    name: 'Leidschenveen-Ypenburg',
    eyebrow: 'Leidschenveen-Ypenburg, Den Haag',
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
  routeLabel: 'Leidschenveen-Ypenburg, The Hague, Netherlands',
  title: 'Coding Classes in Leidschenveen-Ypenburg | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Leidschenveen-Ypenburg, The Hague, for ages 6 to 67, from De Bras to the Rietbuurt. The first lesson is free.',
  ogDescription: 'Live online coding, Python and AI in the newest stadsdeel of The Hague, on a page about what a register of residents cannot see.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'complete-app-development-masterclass-for-teens',
  verifiedOn: '10 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Leidschenveen-Ypenburg Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults across the four wijken of stadsdeel Leidschenveen-Ypenburg in The Hague, taught in English.'
  },

  h1: 'Coding classes in Leidschenveen-Ypenburg, where one wijk has fifty-one people to the square kilometre and a motorway on either side',
  capsuleQ: 'What are the best coding classes in Leidschenveen-Ypenburg?',
  capsule: 'Coding classes in Leidschenveen-Ypenburg reach the newest stadsdeel of The Hague, assembled in 2002 from parts of four municipalities. Two of its four wijken are places people live: Ypenburg with 26,358 residents and 9,764 dwellings, Leidschenveen with 20,049 and 7,457. The other two are business parks along the A4 and the A12. Forepark holds 155 residents on 304 hectares and Hoornwijk holds 1,004, so the published densities there are 51 and 280 to the square kilometre. Those are correct and they describe the night. Modern Age Coders teaches live online in English from De Bras to the Vliegeniersbuurt, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Fifty-one people to the square kilometre is a figure from open countryside. Forepark is a business park between two motorways inside a city of more than half a million, and the number is not an error: 155 people are registered as living there, on 304 hectares, in 47 dwellings. What the number is, is nocturnal. A register of residents records where people sleep, so everything computed from it is a statement about the small hours, and none of it carries a label saying so. At eleven on a Tuesday morning Forepark is a different place, and no figure on this page can tell you what kind.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Leidschenveen-Ypenburg.',

  picks: {
    eyebrow: 'Course picks for Leidschenveen-Ypenburg',
    h2: 'Four courses for the newest part of the city',
    intro: 'A groep 5 child in the Waterbuurt who has used a computer for years and never instructed one, a teenager in De Bras with a game that exists as a description and a folder of sketches, a student in Leidschenveen whose script is quick when they test it and slow when it matters, and an adult in Tedingerbroek reading a dashboard that refreshes hourly. Four ways in, and the first hour of each costs nothing.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python, where a child finds out that when you look is part of what you see, because the program says so.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'A real application built from an empty folder to something installable, for the teenager who has described it a hundred times.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python that runs unattended, where the gap between a sample and a count starts producing decisions.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reading a figure with its clock attached, for anybody who reports numbers that somebody else acts on.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Leidschenveen-Ypenburg today',
      h2: 'Four wijken, two of which are business parks',
      intro: 'This stadsdeel came out of a municipal reorganisation in 2002. Leidschenveen, together with the Forepark business park lying along the A4 and A12 motorways, came from Leidschendam; Ypenburg, a former military airfield, came from three municipalities at once, Leidschendam, Nootdorp and Rijswijk. Leidschenveen and Ypenburg are two of the seven Vinex wijken in the Haaglanden region. All four wijken were read for this page.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The two where people live', p: 'Wijk 42 Ypenburg holds 26,358 residents on 505 hectares, 450 land and 54 water, with 10,190 households averaging 2.6 people and only 2,540 of them single, 25 percent. Wijk 44 Leidschenveen holds 20,049 on 376 hectares, 348 land and 28 water, with 7,560 households averaging 2.7 and 1,715 single, 23 percent. Those are the two largest average household sizes in any Hague wijk this series has read.' },
          { h3: 'The two where they do not', p: 'Wijk 43 Forepark holds 155 residents on 304 hectares, 295 of them land, in 47 dwellings, at a published 51 people to the square kilometre. Hoornwijk holds 1,004 on 371 hectares, 354 land, in 418 dwellings, at 280. Neither has a primary establishment. Together they cover more land than Leidschenveen and Ypenburg have between them.' },
          { h3: 'Family housing, and a great deal of it owned', p: 'Ypenburg has 9,764 dwellings at an average 516,000 euro with 5,565 owner-occupied, 57 percent. Leidschenveen has 7,457 at 510,000 with 4,922 owned, 66 percent. Forepark has 47 dwellings at an average 757,000 euro, the highest figure in this cluster, and Hoornwijk 418 at 478,000. Incomes are 38,600 and 39,500 euro for 2024 in the two residential wijken, and 53,600 and 31,600 for 2023 in the two business parks.' }
        ] },
        { kind: 'spec', title: 'Why a business park still gets a full population row', p: 'The statistics office publishes the same table for every wijk regardless of what the wijk is for. Forepark therefore has an average household size, an age distribution, a home ownership share and an average income, all computed over 155 people, and Hoornwijk the same over 1,004. Every one of those figures is correctly derived from the register. What the register holds is addresses where people are registered as living, so what comes out is a description of the resident population and of nothing else. On a wijk that is mostly offices and motorway, that is a description of a very small part of what is there.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Four densities, all correct, all measured at night',
      intro: 'The published density for each wijk, and what each one is actually a statement about. The arithmetic is the statistics office and the last column is the only thing added here.',
      body: [
        { kind: 'table', caption: 'Residents per square kilometre, and what that describes', head: ['Wijk', 'Residents', 'Land hectares', 'Published density', 'What the figure describes'], rows: [
          ['Ypenburg', '26,358', '450', '5,893', 'a residential wijk, day and night'],
          ['Leidschenveen', '20,049', '348', '5,845', 'a residential wijk, day and night'],
          ['Hoornwijk', '1,004', '354', '280', 'where 1,004 people sleep'],
          ['Forepark', '155', '295', '51', 'where 155 people sleep'],
          ['What is not published', 'no figure read', 'the same land', 'no figure read', 'who is there on a weekday']
        ] },
        { kind: 'p', text: 'The last row is the honest one and it is empty on purpose. Nothing read for this page counts the people in Forepark or Hoornwijk during working hours, and this page does not estimate it, because an estimate would be a guess dressed as a finding. What can be said is narrower and firmer: the figures above answer the question where are people registered as living, they answer it well, and they are routinely read as answers to the question how busy is this place, which they are not. Two of these four numbers describe a phase of a daily cycle rather than a place.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'All four wijken in full, the 2002 assembly, and what is left blank',
      intro: 'Every figure as published with the year its publisher gave it, the account of how the stadsdeel was put together, and a clear statement of the questions this page leaves open.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Wijk 42 Ypenburg', p: '26,358 residents (2026); 10,190 households averaging 2.6, 2,540 single-person at 25 percent; 4,620 under fifteen at 18 percent, 4,175 aged fifteen to twenty-five at 16 percent, 5,755 aged twenty-five to forty-five at 22 percent, 8,860 aged forty-five to sixty-five at 34 percent, 2,970 over sixty-five at 11 percent; 505 hectares, 450 land and 54 water; density 5,893; 9,764 dwellings; average value 516,000 euro; 5,565 owner-occupied at 57 percent and 4,199 rented at 43; income 38,600 euro (2024); 8 primary establishments with 2,475 pupils and 4 secondary with 1,431; seven buurten, Tedingerbroek, De Venen, Bosweide, Morgenweide, Singels, Waterbuurt and De Bras.' },
          { h3: 'Wijk 44 Leidschenveen', p: '20,049 residents (2026); 7,560 households averaging 2.7, 1,715 single-person at 23 percent; 3,485 under fifteen at 17 percent, 3,090 aged fifteen to twenty-five at 15 percent, 3,985 aged twenty-five to forty-five at 20 percent, 6,840 aged forty-five to sixty-five at 34 percent, 2,660 over sixty-five at 13 percent; 376 hectares, 348 land and 28 water; density 5,845; 7,457 dwellings; average value 510,000 euro; 4,922 owner-occupied at 66 percent and 2,535 rented at 34; income 39,500 euro (2024); 5 primary establishments with 1,839 pupils and 3 secondary with 1,108; four buurten, De Velden, De Vissen, De Lanen and the Rietbuurt.' },
          { h3: 'Wijk 43 Forepark', p: '155 residents (2026); 70 households averaging 2.1, 25 single-person and 45 multi-person; 35 under fifteen, 10 aged fifteen to twenty-five, 25 aged twenty-five to forty-five, 45 aged forty-five to sixty-five, 40 over sixty-five; 304 hectares, 295 land and 9 water; density 51; 47 dwellings; average value 757,000 euro; 42 owner-occupied at 89 percent and 5 rented at 11; income 53,600 euro for 2023; no primary establishment and no pupils; two buurten, Vlietzoom-Oost and De Rivieren. The encyclopaedia entry describes it as the bedrijventerrein lying along the A4 and A12.' },
          { h3: 'Hoornwijk', p: '1,004 residents (2026); 465 households averaging 2.1, 235 single-person at 51 percent; 230 under fifteen at 23 percent, 140 aged fifteen to twenty-five, 390 aged twenty-five to forty-five at 39 percent, 185 aged forty-five to sixty-five, 80 over sixty-five; 371 hectares, 354 land and 17 water; density 280; 418 dwellings; average value 478,000 euro; 180 owner-occupied at 43 percent and 238 rented at 57; income 31,600 euro for 2023; no primary establishment; three buurten, De Reef, Vlietzoom-West and the Vliegeniersbuurt, the last of those named for the airfield.' },
          { h3: 'How the stadsdeel was assembled', p: 'It was created by a municipal reorganisation in 2002. Leidschenveen, including the Forepark business park along the A4 and A12, transferred from Leidschendam; Ypenburg, a former military airfield, came from Leidschendam, Nootdorp and Rijswijk together. Leidschenveen and Ypenburg are two of the seven Vinex wijken in the Haaglanden region. The entry gives the stadsdeel 47,440 residents for 2023, a density of 5,385, 8.81 square kilometres of which 7.98 land and 0.82 water, and 17,188 dwellings; the Hague city page in this series carries 48,273 for 2022.' },
          { h3: 'What is not added up, and what is not estimated', p: 'The four wijk land areas total more than the 7.98 square kilometres the encyclopaedia entry gives the stadsdeel, and the four dwelling counts do not match its 17,188 either. Those are different vintages from different publishers and this page quotes them separately rather than reconciling them. Nothing here was calculated. And no figure is offered for how many people are in Forepark or Hoornwijk during a working day, because none was read.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to this stadsdeel, to any of its four wijken, to The Hague or to any school counted above, and nothing here implies one. The four wijk rows come from the statistics office at that office own vintages, which is why two income figures are for 2024 and two for 2023 and are quoted that way rather than aligned. The 2002 reorganisation, the four wijken, the airfield, the Vinex status, the stadsdeel area, dwelling stock and 2023 population come from the encyclopaedia entry.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Every number has a clock on it, whether or not one is printed',
      intro: 'A density of fifty-one, a business park, and the question that turns a count back into a sample.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Ask when the measurement was taken', p: 'The population register is a statement about registered addresses at a moment. Forepark has 155 residents in the sense that 155 people give an address there. It is a fact about the night, and it does not become a fact about the day by being repeated in a table with no time in it.' },
          { h3: '2. Ask whether the thing varies inside that moment', p: 'If it does, you have a sample rather than a count, no matter how exact the figure looks. A residential population of a business park varies enormously across a single day, so 51 per square kilometre is one reading off a quantity that swings, not a property of the ground.' },
          { h3: '3. Then say which question you answered', p: 'Where do people sleep, answered well and completely. How busy is this place, not answered at all. Those are different questions and the register only ever offered one of them, which is not a defect in the register.' }
        ] },
        { kind: 'table', caption: 'Sampling a moving quantity, in five other places', head: ['The measurement', 'When it is taken', 'What it records', 'What it never sees'], rows: [
          ['A health check every sixty seconds', 'on the minute', 'load at that instant', 'every burst in between'],
          ['A count of rows in a users table', 'now', 'accounts that exist', 'whether anybody used them'],
          ['Queue depth logged hourly', 'on the hour', 'that one moment', 'the spike at five past nine'],
          ['Building occupancy from badges at 6am', 'before anybody arrives', 'an empty building', 'the entire working day'],
          ['Residents of a business park', 'at 1 January', 'who sleeps there', 'who is there on a Tuesday']
        ] },
        { kind: 'callout', h3: 'A count is a sample whenever the thing counted can move', p: 'The word count carries an authority that the word sample does not, and most of the numbers people call counts are samples wearing the better word. This matters because the two fail differently and only one of them announces it. A sample invites the question of when and how often; a count closes that question before it is asked, which is precisely why a figure like fifty-one people per square kilometre can sit in a table beside five thousand eight hundred and ninety-three and look like the same kind of thing. It is not the same kind of thing. One describes a place that is much the same at three in the morning and three in the afternoon, and the other describes one phase of something that swings by orders of magnitude, and the table has no column for that distinction because tables rarely do. In code this is the difference between a gauge and a counter, and the reason monitoring systems distinguish them so carefully is that the industry learned the hard way what happens when they are confused: a service is declared healthy because the check ran between the incidents, a cache is declared efficient because the hit rate was read after warm-up, a queue is declared empty because it was sampled on the hour and drained at seven minutes past. The habit is one sentence long. Before treating any figure as a property of the thing, ask what it would read if you measured it again at a different time, and if the answer is that you do not know, you are holding a sample and should say so. Saying so costs nothing and it is the difference between a number that can be checked and a number that can only be believed.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for a figure with an invisible clock',
      intro: 'Server load, active users, stock on hand, footfall, occupancy, queue length: every one is read at a moment and reported as a property. Practised on a district where two of four wijken are business parks with rural densities.',
      body: [
        { kind: 'table', caption: 'Recovering the clock from a number that does not show one', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Recover the timestamp', 'Find when the figure was taken, before using it', 'A moment read as a permanent state', 'The figure with its clock attached'],
          ['Ask if it moves', 'Decide whether the quantity varies inside that window', 'A sample presented as a count', 'Sample or count, explicitly'],
          ['Check the sampling rate', 'Ask how often, and what falls between', 'Bursts invisible to the schedule', 'The size of your blind spot'],
          ['State the question answered', 'Write the question the number does answer', 'A good figure used for a bad question', 'A defensible claim'],
          ['Leave the gap visible', 'Publish the unmeasured thing as unmeasured', 'A guess filling a silence', 'An honest hole somebody can fund']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Count the people in a room at three different times in one day, then argue about which count is the number of people in the room.' },
          { h3: 'For teenagers', p: 'A program that samples something changing quickly and one that records every change, run side by side until the two disagree. The stretch: work out the sampling rate at which they stop disagreeing, and why that rate depends on the thing.' },
          { h3: 'For adults', p: 'A monitored figure from work traced back to its collection schedule. Adults very often find a metric collected on the hour and an incident pattern that peaks between collections.' }
        ] },
        { kind: 'p', text: 'All four wijken were read one page at a time from the statistics office, at that office own vintages: residents and ages January 2026, households and housing 2025, income 2024 for Ypenburg and Leidschenveen and 2023 for Forepark and Hoornwijk. The 2002 reorganisation, the transfers from Leidschendam, Nootdorp and Rijswijk, the former military airfield, the Vinex status, the stadsdeel area, its 17,188 dwellings and its 2023 population of 47,440 come from the encyclopaedia entry. No figure on this page was calculated and no daytime population was estimated.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting a room three times to a metric collected on the hour',
    intro: 'The starting rung is settled during the free hour by what the learner can do when given something real to do. The wijk is not an input and neither is the age.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'How many people are in this room', p: 'Children count three times, get three answers, and have to decide what the question meant.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Sampling against recording', p: 'Learners run both on the same changing thing and watch them come apart.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Gauges and counters', p: 'Teenagers build both, then find the events their own schedule cannot see.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The metric and its schedule', p: 'Adults trace a real figure back to when it is collected and what happens between.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell you Forepark is almost empty. Why should a teenager in Leidschenveen ask empty at what hour?',
    intro: 'Because 51 people to the square kilometre is a true figure about the night and a model has no clock to attach to it.',
    p1: 'Give a model the Forepark row and it will describe a quiet, sparsely populated area, which is a fair reading of 155 residents on 304 hectares and a poor description of a business park between the A4 and the A12. The register the figure comes from records where people are registered as living, and the model has no way to know that the wijk is mostly offices, or that its own source describes it as a bedrijventerrein, unless that sentence happens to be nearby. What it produces instead is fluent and time-free: sparsely populated, tranquil, low density. Each of those words converts a night-time measurement into a permanent property of a place, and nothing in the number resists the conversion.',
    p2: 'So the learner practises putting the clock back on, and code is where that habit is cheapest to build, because a program can be made to sample something fast-moving and then show you exactly what it missed. A fifteen-year-old in Ypenburg who has watched a sampled series and a recorded series disagree, and worked out why, will be the person at thirty who asks when a dashboard figure is collected before agreeing that a system is healthy. Models will keep turning readings into properties, because the text they learned from is full of sentences shaped that way. Asking what the number would say at a different hour stays a person job.',
    closer: 'The case for a child in Leidschenveen-Ypenburg learning to code in 2026 is therefore not about districts. It is that a program is the one instrument that will show you its own blind spot, if you ask it to sample the same thing twice and tell you what changed in between.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes across the newest stadsdeel',
    intro: 'This is the far edge of the city, out past the A4 and the A12, built on and around a former airfield, and it is a long way from the middle of The Hague in a way that a map of the municipality tends to disguise.',
    cells: [
      { h3: 'The edge of the municipality, and no commute', p: 'From De Bras or the Rietbuurt, an evening class anywhere central means the motorway or a long tram ride, twice. Removing the journey is not a convenience here; it is the difference between a weekly commitment that lasts and one that quietly stops in November.' },
      { h3: 'Four Dutch words kept as they are', p: 'Groep, havo, vwo, profielkeuze. The lesson is English and those stay Dutch, because a child hearing the name of their own school track should recognise it without translating first.' },
      { h3: 'A free hour that teaches something', p: 'A real task, watched by a teacher who is reading the approach rather than the answer, ending in three things: level, course and a weekly time. There is no charge and no card is asked for at any point.' },
      { h3: 'Built from level, drawn from everywhere', p: 'Five to ten learners at one stage. Even a stadsdeel of forty-six thousand does not reliably hold five people at one narrow level in the same month, so the pool is worldwide. That is what turns a waiting list into a class.' },
      { h3: 'Two a week, with regio Midden already in the plan', p: 'Around eight lessons a month at a fixed hour. Zuid-Holland school holidays follow the regio Midden calendar, published years ahead, so the weeks off are agreed at the start rather than discovered.' },
      { h3: 'Three and a half hours, then four and a half', p: 'The teacher is in India, which has held one clock for decades. Both changes each year are made on the Dutch side, and neither setting removes an hour a family here would have wanted to use.' }
    ],
    spec: { title: 'The largest households in the city, and what that still does not settle', p: 'Ypenburg households average 2.6 people and Leidschenveen 2.7, the two largest averages of any Hague wijk in this series, with 4,620 and 3,485 residents under fifteen. Thirteen primary establishments across the two wijken teach 4,314 pupils between them. That is a great many children in a small area. It still does not produce five to ten learners at one particular stage of one particular subject in one particular month, because a stage is narrow and proximity does not widen it. So groups are assembled by level from a worldwide pool, at every age between 6 and 67.' }
  },

  fees: {
    h2: 'The fee, in dollars, in all four wijken',
    intro: 'Printed here rather than saved for a call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'A single international rate in dollars and no euro edition, so an address in Morgenweide is quoted exactly what one in De Velden is. Nothing is paid until the free lesson has produced a course and an hour, and payment is arranged over WhatsApp after that. Pausing, switching plan and missing a week are all set out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, exactly as the people who left them wrote them',

  book: {
    h2: 'Send the level, not the wijk',
    intro: 'The first task might be counting a room three times in a day and arguing about which answer was the number, a sampled series set against a recorded one, or a metric from work traced back to the schedule that collects it.',
    success: 'Thank you. Your Leidschenveen-Ypenburg class request has been sent.'
  },

  faq: {
    h2: 'Leidschenveen-Ypenburg coding class questions',
    intro: 'The stadsdeel, its four wijken, one thing a register cannot see, the teaching and the terms.',
    items: [
      { q: 'Which neighbourhoods make up Leidschenveen-Ypenburg?', a: 'Four wijken: Ypenburg, with seven buurten including Tedingerbroek, the Waterbuurt and De Bras; Leidschenveen, with De Velden, De Vissen, De Lanen and the Rietbuurt; Forepark, with Vlietzoom-Oost and De Rivieren; and Hoornwijk, with De Reef, Vlietzoom-West and the Vliegeniersbuurt. The stadsdeel was created by a municipal reorganisation in 2002 and all four wijken were read for this page.' },
      { q: 'Why does Forepark have only 155 residents?', a: 'Because it is a business park. The encyclopaedia entry describes it as the bedrijventerrein lying along the A4 and A12 motorways, and the 155 people are those registered as living within it, in 47 dwellings on 304 hectares, giving a published density of 51 per square kilometre. The figure is correct and it describes the resident population. Nothing read for this page counts how many people are in Forepark during a working day, and this page does not estimate it.' },
      { q: 'Is this the newest part of The Hague?', a: 'It is the most recently assembled. Leidschenveen, with the Forepark business park, transferred from Leidschendam in 2002, and Ypenburg, a former military airfield, came from Leidschendam, Nootdorp and Rijswijk in the same reorganisation. Leidschenveen and Ypenburg are two of the seven Vinex wijken in the Haaglanden region, which is why the housing is newer and the households larger than in most of the city.' },
      { q: 'Are the households here bigger than elsewhere in the city?', a: 'Yes, and by a clear margin. Ypenburg households average 2.6 people and Leidschenveen 2.7, against 1.4 to 2.2 in every other Hague wijk this series has read. Only 2,540 of Ypenburg 10,190 households hold one person, 25 percent, and 1,715 of Leidschenveen 7,560, 23 percent, where the single-person share runs past 60 percent in parts of the centre.' },
      { q: 'How many children live here?', a: '4,620 residents of Ypenburg are under fifteen, 18 percent, and 3,485 of Leidschenveen, 17 percent, with 230 in Hoornwijk and 35 in Forepark. Eight primary establishments in Ypenburg teach 2,475 pupils and five in Leidschenveen teach 1,839; four secondary establishments in Ypenburg teach 1,431 and three in Leidschenveen 1,108. Neither business park has a school.' },
      { q: 'Is the class taught in Dutch?', a: 'No. English throughout, with one exception that is deliberate: the Dutch school vocabulary is kept in Dutch, so groep, havo, vwo and profielkeuze are used exactly as a child meets them on their own paperwork. No course is available in a Dutch-language version.' },
      { q: 'What hours suit a family out here?', a: 'The teacher is three and a half hours ahead during Dutch summer time and four and a half outside it, and the whole of that variation is produced by the Dutch clock, not the Indian one, which has not moved in decades. Late afternoons, early evenings and both weekend days all remain workable. One weekly hour is agreed at the free lesson and then does not move.' },
      { q: 'Is there a Modern Age Coders classroom in Leidschenveen-Ypenburg?', a: 'No, and none is claimed here, elsewhere in The Hague or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Leidschenveen-Ypenburg coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore The Hague and beyond',
    h2: 'Back into the city, and out across the province',
    html: 'North-west lie <a class="cg-inline-link" href="/coding-classes-in-laak">Laak</a>, whose page reads an age table as a building programme rather than a preference, and <a class="cg-inline-link" href="/coding-classes-in-the-hague-centrum">Den Haag Centrum</a>, which refuses to grade a household figure at all. Beyond them are <a class="cg-inline-link" href="/coding-classes-in-escamp">Escamp</a>, <a class="cg-inline-link" href="/coding-classes-in-haagse-hout">Haagse Hout</a> and, on the coast, <a class="cg-inline-link" href="/coding-classes-in-scheveningen">Scheveningen</a>. The city page, <a class="cg-inline-link" href="/coding-classes-in-the-hague">coding classes in The Hague</a>, holds all eight stadsdelen together. South-east down the A13 is <a class="cg-inline-link" href="/coding-classes-in-delft">Delft</a>, and everything here sits inside <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. A learner whose goal is a trained model rather than a running program should begin at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and every page here descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Finish this on WhatsApp'
  },

  footerHeading: 'The Hague and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-the-hague', label: 'The Hague' },
    { href: '/coding-classes-in-laak', label: 'Laak' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-lyp .cg-hero-grid { grid-template-columns: 1.08fr 1fr; align-items: start; gap: clamp(1.5rem, 3.7vw, 2.85rem); }
.cg-root.cg-lyp .cg-hero h1 { font-weight: 500; letter-spacing: -0.0132em; line-height: 1.1; }
.cg-root.cg-lyp .cg-capsule { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent-soft); padding: 1rem 0; }
.cg-root.cg-lyp .cg-eyebrow { letter-spacing: 0.185em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-lyp .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.015em; }
.cg-root.cg-lyp .cg-grid-3 { gap: clamp(1.1rem, 2.3vw, 1.8rem); }
.cg-root.cg-lyp .cg-card { border-radius: 6px; border-bottom: 2px solid var(--cg-accent-soft); }
.cg-root.cg-lyp .cg-table caption { letter-spacing: 0.036em; font-weight: 600; }
.cg-root.cg-lyp .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lyp .cg-table tbody tr:last-child td { font-style: italic; }
.cg-root.cg-lyp .cg-ladder-col { border-top: 3px solid var(--cg-accent-soft); padding-top: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'Stadsdeel Leidschenveen-Ypenburg, Den Haag, Zuid-Holland: created by municipal reorganisation in 2002, Leidschenveen with the Forepark bedrijventerrein along the A4 and A12 transferring from Leidschendam and Ypenburg, a former military airfield, from Leidschendam, Nootdorp and Rijswijk; Leidschenveen and Ypenburg are two of the seven Vinex wijken in regio Haaglanden; 47,440 residents (2023), density 5,385, 8.81 km2 of which 7.98 land and 0.82 water, 17,188 woningen, against 48,273 for 2022 on the Hague city page. Four wijken, all read at 2026. Wijk 42 Ypenburg 26,358 on 505 hectares, 450 land and 54 water, density 5,893; 10,190 households averaging 2.6 with only 2,540 single at 25 percent; 4,620 under fifteen at 18 percent, 4,175 aged fifteen to twenty-five at 16, 5,755 aged twenty-five to forty-five at 22, 8,860 aged forty-five to sixty-five at 34, 2,970 over sixty-five at 11; 9,764 dwellings, value 516,000 euro, 5,565 owner-occupied at 57 percent; income 38,600 euro (2024); 8 primary establishments with 2,475 pupils and 4 secondary with 1,431; seven buurten Tedingerbroek, De Venen, Bosweide, Morgenweide, Singels, Waterbuurt and De Bras. Wijk 44 Leidschenveen 20,049 on 376 hectares, 348 land and 28 water, density 5,845; 7,560 households averaging 2.7 with 1,715 single at 23 percent; 3,485 under fifteen at 17 percent, 6,840 aged forty-five to sixty-five at 34; 7,457 dwellings, value 510,000 euro, 4,922 owner-occupied at 66 percent; income 39,500 euro (2024); 5 primary establishments with 1,839 pupils and 3 secondary with 1,108; four buurten De Velden, De Vissen, De Lanen and Rietbuurt. Wijk 43 Forepark 155 residents on 304 hectares, 295 land, density 51, 70 households, 47 dwellings, value 757,000 euro the highest in this cluster, 42 owner-occupied at 89 percent, income 53,600 euro for 2023, no school; buurten Vlietzoom-Oost and De Rivieren. Hoornwijk 1,004 residents on 371 hectares, 354 land, density 280, 465 households, 418 dwellings, value 478,000 euro, income 31,600 euro for 2023, no school; buurten De Reef, Vlietzoom-West and Vliegeniersbuurt. Ypenburg and Leidschenveen carry the two largest average household sizes of any Hague wijk in this series. Regio Midden holidays. The district page argues that a residential register measures one phase of a daily cycle; Den Haag Centrum owns the missing standard, Escamp necessary versus sufficient, Scheveningen the unstable referent, Haagse Hout precision against accuracy, Laak choice against constraint and Venlo the mismatched denominator.',
    localProject: 'A register of residents answers where people sleep, so every figure derived from it is a night-time figure, and nothing in the presentation says so. Two of the four wijken of this stadsdeel are business parks. Wijk 43 Forepark has 155 residents on 304 hectares in 47 dwellings, a published density of 51 people per square kilometre, and the encyclopaedia entry describes it as the bedrijventerrein lying along the A4 and A12 motorways. Hoornwijk has 1,004 on 371 hectares at 280. Beside them Ypenburg runs at 5,893 and Leidschenveen at 5,845. All four densities are correctly computed and two of them describe a phase of a daily cycle rather than a place: fifty-one per square kilometre is a rural figure attached to a business park between two motorways inside a city of 569,468 people. Nothing read for this page counts the working-day population of either wijk and this page estimates none, because an estimate would be a guess dressed as a finding; what it does is mark the row empty. The general form is that a count is a sample whenever the thing counted can move, and the word count carries an authority the word sample does not, which is why the two can sit in one table looking like the same kind of thing. In code the distinction is a gauge against a counter, and monitoring systems separate them so carefully because the industry learned what confusing them costs: a service declared healthy because the check ran between incidents, a cache declared efficient because the hit rate was read after warm-up, a queue declared empty because it was sampled on the hour and drained at seven minutes past. Distinct from the mismatched denominator (Venlo), where visitors are divided by residents and no ratio here is formed at all, and from the single cross-section (Prins Alexander), which concerns inferring a direction across years rather than variation inside a day. The habit is one question: what would this read if measured again at another time.',
    requiredMentions: [
      '10,190',
      '2,540',
      '4,620',
      '8,860',
      '9,764',
      '7,560',
      '1,715',
      '6,840',
      '7,457',
      '510,000',
      '757,000',
      '1,004',
      '5,893',
      'Vliegeniersbuurt'
    ],
    sources: [
      { claim: 'Wijk 42 Ypenburg, Den Haag: 26,358 inwoners (2026); 10,190 huishoudens averaging 2.6, 2,540 eenpersoonshuishoudens at 25 percent; ages 4,620 (0 to 15, 18 percent), 4,175 (15 to 25, 16 percent), 5,755 (25 to 45, 22 percent), 8,860 (45 to 65, 34 percent), 2,970 (65+, 11 percent); 505 hectare, 450 land, 54 water; bevolkingsdichtheid 5,893 per km2; woningvoorraad 9,764 (2025); gemiddelde WOZ 516,000 euro (2025); 5,565 koopwoningen (57 percent) and 4,199 huurwoningen (43 percent); gemiddeld inkomen 38,600 euro (2024); 8 vestigingen basisonderwijs with 2,475 leerlingen and 4 vestigingen voortgezet onderwijs with 1,431 leerlingen; 7 buurten: Tedingerbroek, De Venen, Bosweide, Morgenweide, Singels, Waterbuurt, De Bras.', url: 'https://allecijfers.nl/wijk/ypenburg-den-haag/' },
      { claim: 'Wijk 44 Leidschenveen, Den Haag: 20,049 inwoners (2026); 7,560 huishoudens averaging 2.7, 1,715 eenpersoonshuishoudens at 23 percent; ages 3,485 (0 to 15, 17 percent), 3,090 (15 to 25, 15 percent), 3,985 (25 to 45, 20 percent), 6,840 (45 to 65, 34 percent), 2,660 (65+, 13 percent); 376 hectare, 348 land, 28 water; bevolkingsdichtheid 5,845 per km2; woningvoorraad 7,457 (2025); gemiddelde WOZ 510,000 euro (2025); 4,922 koopwoningen (66 percent) and 2,535 huurwoningen (34 percent); gemiddeld inkomen 39,500 euro (2024); 5 vestigingen basisonderwijs with 1,839 leerlingen and 3 vestigingen voortgezet onderwijs with 1,108 leerlingen; 4 buurten: De Velden, De Vissen, De Lanen, Rietbuurt.', url: 'https://allecijfers.nl/wijk/leidschenveen-den-haag/' },
      { claim: 'Wijk 43 Forepark, Den Haag: 155 inwoners (2026); 70 huishoudens averaging 2.1, 25 eenpersoonshuishoudens (36 percent) and 45 meerpersoonshuishoudens (64 percent); ages 35 (0 to 15), 10 (15 to 25), 25 (25 to 45), 45 (45 to 65), 40 (65+); 304 hectare, 295 land, 9 water; bevolkingsdichtheid 51 per km2; woningvoorraad 47 (2025); gemiddelde WOZ 757,000 euro (2025); 5 huurwoningen (11 percent) and 42 koopwoningen (89 percent); gemiddeld inkomen 53,600 euro (2023); 0 vestigingen basisonderwijs, geen scholen in wijk; 2 buurten: Vlietzoom-Oost, De Rivieren.', url: 'https://allecijfers.nl/wijk/forepark-den-haag/' },
      { claim: 'Wijk Hoornwijk, Den Haag: 1,004 inwoners (2026); 465 huishoudens averaging 2.1, 235 eenpersoonshuishoudens at 51 percent; ages 230 (0 to 15, 23 percent), 140 (15 to 25, 14 percent), 390 (25 to 45, 39 percent), 185 (45 to 65, 18 percent), 80 (65+, 8 percent); 371 hectare, 354 land, 17 water; bevolkingsdichtheid 280 per km2; woningvoorraad 418 (2025); gemiddelde WOZ 478,000 euro (2025); 238 huurwoningen (57 percent) and 180 koopwoningen (43 percent); gemiddeld inkomen 31,600 euro (2023); 0 vestigingen basisonderwijs; 3 buurten: De Reef, Vlietzoom-West, Vliegeniersbuurt.', url: 'https://allecijfers.nl/wijk/hoornwijk-den-haag/' },
      { claim: 'Stadsdeel Leidschenveen-Ypenburg, Den Haag: four wijken, Forepark, Leidschenveen, Ypenburg and Hoornwijk; 47,440 inwoners (2023); bevolkingsdichtheid 5,385 per km2; oppervlakte 8,81 km2 of which 7,98 land and 0,82 water; 17,188 woningen. Formed by a 2002 municipal reorganisation: Leidschenveen inclusief het langs de Rijkswegen A4 en A12 gelegen bedrijventerrein Forepark came from Leidschendam, while Ypenburg, een voormalig militair vliegveld, originated from Leidschendam, Nootdorp and Rijswijk. Leidschenveen and Ypenburg are twee van de zeven Vinex-wijken in de regio Haaglanden.', url: 'https://nl.wikipedia.org/wiki/Leidschenveen-Ypenburg' },
      { claim: 'The Hague city page in this series publishes stadsdeel Leidschenveen-Ypenburg at 48,273 residents for 2022, with Ypenburg 26,358 and Leidschenveen 20,049, built on the old airfield.', url: 'https://learn.modernagecoders.com/coding-classes-in-the-hague' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any figure for how many people are in Forepark or Hoornwijk during a working day. None was read, none is estimated, and the row is left visibly empty instead.',
      'That Forepark or Hoornwijk is quiet, tranquil or sparsely populated as a property of the place. Those are night-time measurements and the words convert them into permanent characteristics.',
      'Any stadsdeel land area or dwelling total assembled from the four wijk rows. The four land areas exceed the 7.98 km2 the encyclopaedia entry gives the stadsdeel and the dwelling counts do not match its 17,188; these are different vintages from different publishers and are quoted separately.',
      'A 2026 population for the stadsdeel. The published totals are 47,440 for 2023 and 48,273 for 2022 on the city page, dated wherever used.',
      'Any comparison of the four income figures as though they shared a year. Two are 2024 and two are 2023, which is stated rather than aligned.',
      'Any account of why the 45-to-65 band is 34 percent in both large wijken, such as a cohort filling a new district and ageing in place. That is the Prins Alexander page argument and no claim about the history of this stock is made here.',
      'Any ratio of one population to another, such as workers per resident. The mismatched denominator is the Venlo page argument and no such ratio is formed here.',
      'Any reading of the small counts in Forepark as unstable between periods. Only one observation exists; small-denominator volatility is the Al Wusta page argument.',
      'Anything the Hague city page owns, including the stadsdeel population table, the British School campuses on the Vrouw Avenweg and the named secondary schools.'
    ]
  }
};
