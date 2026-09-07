'use strict';
// Zoetermeer: a village of 8,404 in 1960 designated a growth centre in 1962 and
// now a city of 130,836. Spine: it celebrated its 100,000th resident on a named
// morning in 1991, but a population is a net quantity that can cross a
// threshold many times, so the hundred-thousandth is a designation, not a fact.

module.exports = {
  slug: 'coding-classes-in-zoetermeer',
  code: 'ztm',
  accent: '#7F211B',
  accentRationale: 'Zoetermeer: the brick red of the 1970s expansion districts, placed by the solver clear of Amsterdam\'s and Groningen\'s reds',
  pageType: 'city',
  place: {
    name: 'Zoetermeer',
    eyebrow: 'Zoetermeer, Zuid-Holland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Zuid-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Zoetermeer, Netherlands',
  title: 'Coding Classes in Zoetermeer | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Zoetermeer for ages 6 to 67, across all 15 wijken of the growth city. First lesson free, then one flat monthly fee.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in Zoetermeer, built on the morning a town decided which baby was its hundred-thousandth resident.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'complete-app-development-masterclass-for-teens',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Zoetermeer Learners',
    description: 'Ability-placed online coding, Python, app development, AI and mathematics for children, teenagers and adults across the wijken of Zoetermeer, taught in English.'
  },

  h1: 'Coding classes in Zoetermeer, where somebody had to decide which baby was the hundred-thousandth',
  capsuleQ: 'What are the best coding classes in Zoetermeer?',
  capsule: 'Coding classes in Zoetermeer serve 130,836 people (Statistics Netherlands, 1 January 2026) in a town that held 8,404 residents in 1960 and was designated a growth centre in 1962. It welcomed its hundred-thousandth resident on Friday 13 September 1991, at about a quarter past ten in the Lange Land hospital, and that was a decision as much as a measurement: a population is a net figure that can cross a line more than once. Modern Age Coders teaches live online in English across all fifteen wijken for anyone aged 6 to 67, with a free opening lesson and then USD 100 a month in a group of five to ten, or USD 150 with a teacher alone.',
  lead: 'On a Friday morning in September 1991 this town named its hundred-thousandth resident: a baby, born at about a quarter past ten. It is a lovely piece of civic ceremony and it is not a measurement. A population register is a running net total, pushed up by births and arrivals and down by deaths and departures, and a quantity like that can cross a hundred thousand, fall back below it and cross again the same week. Somebody had to choose which event counted. A child who understands why is well placed to distrust every milestone they are ever shown.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Zoetermeer.',

  picks: {
    eyebrow: 'Course picks for Zoetermeer',
    h2: 'Four courses for a town that was built on purpose',
    intro: 'A groep 5 child in Rokkeveen, a teenager in Oosterheem who wants an app rather than another worksheet, an adult in Meerzicht going back to study, and a parent in the old centre whose dashboard counts things it should not: four doors into one planned town.',
    items: [
      { course: 'block-coding-app-development-masterclass', band: 'Ages 8 to 12', note: 'Real apps built with blocks, in English, for the groep 5 to 8 child who wants something that runs on the family phone.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'From an idea to an app on a real device, for the teenager whose school has no route into building software.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'College and adult', note: 'Python from nothing to advanced, live, for the adult who has decided this is the year they stop asking somebody else.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Excel, Sheets and Power BI with AI, for the working parent whose weekly report counts events that keep changing underneath it.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Zoetermeer today',
      h2: 'Fifteen times bigger than in 1960, and almost finished growing',
      intro: 'The national register held 130,836 people on 1 January 2026, in 58,350 households averaging 2.2 people, on 34.43 square kilometres of land inside 37.05 of territory: a published 3,772 residents to the square kilometre. In 1995 the count was 105,009, so the town has added 25,827 people in thirty-one years, a rise of 25 percent. In 1960 it held 8,404.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A town that was designated', p: 'Zoetermeer was appointed a growth centre, a groeikern in the planning language of the time, in 1962, when it held fewer than ten thousand people, and built outwards in planned districts for the next four decades. The published series records 17,130 in 1970, 41,096 in 1975, 63,832 in 1980, 80,193 in 1985 and 96,292 in 1990.' },
          { h3: 'Seven secondary schools, very large', p: '48 primary establishments teach 12,007 pupils and 7 secondary establishments teach 7,392, about 1,056 each, among the largest averages in this series. The municipality counts only 502 students at institutions here for 2026, alongside 2,870 residents in applied higher education and 1,330 at university level for 2025: a town that sends its students to The Hague, Delft and Leiden.' },
          { h3: 'The age shape of a finished new town', p: '21,379 residents are under fifteen and 15,165 are between fifteen and twenty-five; 33,239 are between twenty-five and forty-five, 32,834 between forty-five and sixty-five, and 28,219 are sixty-five or over. 20,970 households hold one person, 36 percent. The families who arrived in the 1970s are now the twenty-two percent aged over sixty-five.' }
        ] },
        { kind: 'spec', title: 'A railway built for a town that did not exist yet', p: 'The Stadslijn opened its first section on 20 May 1977 with service from 22 May, reached Seghwaert and Palenstein in 1978 and closed its ring on 29 September 1979. Heavy rail service ended on 3 June 2006 and the line has run as a tram under the name RandstadRail since 29 October 2006.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'One woonplaats, fifteen wijken, and districts named after their decade',
      intro: 'Zoetermeer is a single woonplaats divided into 15 wijken and 146 buurten. Unusually for this series there are no villages: everything outside the small old centre was planned and built within living memory.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The old centre', p: 'The village that held 8,404 people in 1960, now a small historic core inside a city fifteen times its size. Everything around it postdates the designation.' },
          { h3: 'Palenstein and Meerzicht', p: 'The first planned districts, built through the late 1960s and 1970s when the town was adding nearly five thousand people a year. Their primary schools were full then and their residents are the reason the over-sixty-five share is now twenty-two percent.' },
          { h3: 'Seghwaert and Buytenwegh', p: 'The late 1970s and 1980s expansions, reached by the Stadslijn as it was built. Mixed housing, established schools and the middle of the town both geographically and in age.' },
          { h3: 'Rokkeveen', p: 'The 1980s and 1990s district in the south, built as the growth was slowing. This is roughly where the town was when it crossed a hundred thousand.' },
          { h3: 'Oosterheem', p: 'The last large expansion, built from around 2000 in the north-east and served by RandstadRail. The youngest district, with the fullest primary schools in the municipality.' },
          { h3: 'The rest of the fifteen', p: 'Driemanspolder, Dorp, Stadscentrum and the smaller wijken between them. Nothing in Zoetermeer is far from anything else, because the whole town fits inside 34 square kilometres of land.' }
        ] },
        { kind: 'p', text: 'Every wijk gets the same class at the same hour and the same fee, and the group a learner joins is decided by stage rather than by district.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, and the one event that was chosen rather than measured',
      intro: 'The national count, the municipal entry, the dated growth series, the milestone record and the railway.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands, provisional, 1 January 2026: 130,836 residents; 58,350 households for 2025 averaging 2.2 people, 20,970 of them single-person, 36 percent; 21,379 under fifteen; 15,165 aged fifteen to twenty-five; 33,239 aged twenty-five to forty-five; 32,834 aged forty-five to sixty-five; 28,219 aged sixty-five and over; 48 primary establishments with 12,007 pupils and 7 secondary with 7,392, both 2025; 502 students at institutions here for 2026; 2,870 residents in applied higher education and 1,330 at university level for 2025; total area 3,705 hectares, land 3,443, water 262; density 3,772; one woonplaats, 15 wijken and 146 buurten; 105,009 residents in 1995, a rise of 25,827.' },
          { h3: 'The municipality, described', p: 'Its own entry: 130,850 residents on 1 January 2026, fourteen more than the national figure for the same date, both kept; 37.05 square kilometres, 34.45 of land and 2.60 of water, against 34.43 of land nationally, both kept; mayor Bezuijen; the third municipality of Zuid-Holland; designated a growth centre in 1962, with fewer than ten thousand residents before that year and more than a hundred thousand by 1991.' },
          { h3: 'The dated series', p: 'Population on 1 January, from the local history record: 8,404 in 1960; 9,681 in 1962; 10,771 in 1965; 17,130 in 1970; 41,096 in 1975; 63,832 in 1980; 80,193 in 1985; 96,292 in 1990. From the national source: 105,009 in 1995; 109,941 in 2000; 115,792 in 2005; 121,532 in 2010; 124,025 in 2015; 125,285 in 2020; 129,862 in 2025; 130,836 in 2026.' },
          { h3: 'The milestones, as recorded', p: 'The local history record: the ten-thousandth resident in December 1962, the fifteen-thousandth in January 1969, the twenty-thousandth in December 1970, the twenty-five-thousandth in March 1972, the fiftieth thousand in February 1977, the seventy-five-thousandth in 1983, and the hundred-thousandth on Friday 13 September 1991 at about a quarter past ten in the Lange Land hospital, a named child.' },
          { h3: 'When the growth began, two accounts', p: 'The Dutch entry says Zoetermeer was designated a growth centre in 1962. An English account says real growth started in 1966, when housing was urgently needed for people around The Hague. Those are two different framings of the same period and both are printed here.' },
          { h3: 'The railway', p: 'The Stadslijn opened its first section on 20 May 1977, with service from 22 May 1977; the Seghwaert to Palenstein section followed on 28 May 1978; the ring was completed on 29 September 1979. Train service ended on 3 June 2006 and the line has run as a tram under the name RandstadRail since 29 October 2006.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, the hospital, the railway or any school named here and claims none. The child named in the milestone record is not named on this page, because a private individual is not a data point.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The hundred-thousandth resident: build the model that shows a threshold can be crossed more than once',
      intro: 'One ceremonial morning, one running net total, and a simulation that explains why the honest answer is a date range rather than a moment.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Model the register as events, not a level', p: 'A population does not rise by one at a time on a schedule. It is a net total moved by four streams: births and arrivals upward, deaths and departures downward. The learner builds a list of plus ones and minus ones rather than a smooth line, which is already a truer picture than any chart of annual snapshots.' },
          { h3: '2. Count the crossings', p: 'Starting just below a hundred thousand and running a few thousand events with a slight upward drift, the learner counts how many times the total goes from below the line to on or above it. In a run of this kind it is routinely more than twenty. The threshold is not crossed once; it is crossed, uncrossed and crossed again while the town is only just above it.' },
          { h3: '3. Ask what the ceremony actually recorded', p: 'The answer is not the moment the population reached a hundred thousand, because that moment is not unique and the register is not read continuously. What was recorded is a decision: a municipality picked an event, on a date, and designated it. That is a perfectly good thing to do, and it is a different kind of statement from a measurement.' }
        ] },
        { kind: 'table', caption: 'What the record supports, and what it does not', head: ['Statement', 'Kind of claim', 'Supported by the sources?'], rows: [
          ['The town held 96,292 residents on 1 January 1990', 'a snapshot from a register', 'yes'],
          ['The town held 105,009 residents on 1 January 1995', 'a snapshot from a register', 'yes'],
          ['The population first passed a hundred thousand between those dates', 'an inference from two snapshots', 'yes, and only to that precision'],
          ['A hundred-thousandth resident was welcomed on 13 September 1991', 'a civic designation', 'yes, as a designation'],
          ['The population reached a hundred thousand at a quarter past ten that morning', 'a measurement of a continuous quantity', 'no, and it cannot be']
        ] },
        { kind: 'callout', h3: 'A milestone is an event somebody chose; the quantity underneath it has no such moments', p: 'Counters that only ever go up, like total cars produced or total barrels pumped, do have a genuine nth item, even if identifying it is hard. A population is not one of those. It is a net figure, and net figures wander across their thresholds repeatedly, which means the millionth customer, the hundred-thousandth resident and the thousandth day without an incident are all designations rather than discoveries once departures are possible. The useful habit is to ask, of any milestone, whether the underlying quantity can go down. If it can, the milestone is a ceremony, and the honest statement is a range: this town passed a hundred thousand somewhere between the start of 1990 and the start of 1995, and a municipality chose a morning in 1991 to mark it. The crossing count above comes from a simulation with an assumed rate and drift, is labelled as a model throughout, and is not a claim about what this register actually did.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any number that is celebrated when it passes a line',
      intro: 'The millionth user, the thousandth order, the hundredth day, the five-star average: thresholds get crossed by quantities that can also move the other way. Practised on the morning this town chose.',
      body: [
        { kind: 'table', caption: 'When a threshold is about to be announced', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Ask if it can go down', 'Separate cumulative totals from net quantities before celebrating', 'A net figure treated as a ratchet', 'The right kind of claim'],
          ['Count the crossings', 'Simulate or check whether the line is crossed more than once', 'One crossing assumed where there were many', 'An honest picture of the boundary'],
          ['Report the interval', 'Say between which two observations the crossing happened', 'A minute quoted from annual data', 'Precision matched to the evidence'],
          ['Separate ceremony from measurement', 'Record a designation as a designation', 'A decision filed as a fact', 'A record a stranger can read correctly'],
          ['Check the reading frequency', 'A quantity read yearly cannot support a claim about a morning', 'Resolution invented after the fact', 'Claims your instruments can carry']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A jar and a class taking turns to add or remove a marble, with the rule that the tenth marble wins a prize. The count reaches ten, drops to nine when somebody removes one, and reaches ten again. Who won? The children invent a rule, and in inventing it they discover they are choosing rather than finding.' },
          { h3: 'For teenagers', p: 'The event list in Python, a crossing counter, and a run that starts just below the threshold and reports how often the line is passed. Then the harder question: given only the 1990 and 1995 snapshots, what is the widest and narrowest window in which the town could have first passed a hundred thousand?' },
          { h3: 'For adults', p: 'The same test on a metric at work that gets celebrated: active users, subscribers, days without an incident. Adults frequently find a net quantity being announced as though it were cumulative, and a milestone email that went out on the day somebody happened to run the query.' }
        ] },
        { kind: 'p', text: 'The population figures, the milestone dates, the school counts, the areas and the railway dates come from the offices and records named beside them. The crossing count is the output of a simulation with assumed parameters, described as a model wherever it appears, and no claim is made here about the actual movements of this municipality\'s register.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a jar of marbles to a crossing counter with its assumptions printed',
    intro: 'The rung is decided in the free hour, and the wijk on the address is not one of the inputs.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Who won the prize?', p: 'Children watch a count reach ten twice and invent the rule that settles it.', courses: ['kids-coding-blocks-masterclass', 'block-coding-app-development-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Up and down, not just up', p: 'Learners build a running total from events and see it wander across a line.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Simulation with stated assumptions', p: 'Teenagers count crossings, report a window from two snapshots, and label the model as a model.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Milestones at work', p: 'Adults test whether a celebrated metric is cumulative or net, and rewrite the announcement.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell you exactly when Zoetermeer reached a hundred thousand. Why should a child here learn that nobody can?',
    intro: 'Because the date is real, the ceremony happened, and the sentence it produces is a stronger claim than the record can carry.',
    p1: 'Ask a tool when this town passed a hundred thousand residents and it will give the morning in September 1991, sourced and specific. What it is repeating is a designation, and designations look exactly like measurements once they are written down. Nothing in the text marks the difference, and a model has no way to notice that the underlying quantity is a net total read once a year rather than a ratchet read continuously.',
    p2: 'That is why the learner builds the event model instead of reading the date. Watching a running total cross the same line twenty times makes the point permanently, and it is a point that carries into every metric a person will later be asked to celebrate. A thirteen-year-old in Oosterheem who has counted crossings will ask, at twenty-three, whether the subscriber number can go down, and will notice that the milestone email went out on the day somebody ran a query. Tools will keep quoting dates faithfully. Knowing which dates are decisions is a person\'s job.',
    closer: 'The case for a Zoetermeer child learning to code in 2026 is therefore nothing to do with town planning. It is that quantities which can fall have no natural milestones, that announcing one is a choice, and that the cheapest way to understand the difference for good is to model the register of the town they live in and watch it cross the line again and again.',
    blogAnchor: 'whether a child should learn to code now that AI can'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a compact town with a tram ring round it',
    intro: 'Nothing in Zoetermeer is far from anything else, and RandstadRail connects most of it. The obstacle here is not distance but a diary: two working parents, a commute to The Hague and no spare evening.',
    cells: [
      { h3: 'No journey in the plan', p: 'The lesson happens at the kitchen table in Rokkeveen, Oosterheem or the old centre at one fixed hour a week, and no part of the evening is spent travelling.' },
      { h3: 'English carries the lesson, Dutch keeps the school words', p: 'Instruction is in English. Groep, havo, vwo and profielkeuze stay Dutch because those are the words a child meets on a timetable, and nothing is translated in either direction.' },
      { h3: 'The opening hour and its output', p: 'Evidence of the real level, a course chosen from that evidence, and a weekly time, none of which needs a card.' },
      { h3: 'Ability sets the group', p: 'Two learners at the same level work together whether one is in Meerzicht and the other in Seghwaert, and two at different levels do not.' },
      { h3: 'Twice a week, on the middle calendar', p: 'Two lessons weekly at one repeating slot, eight in most months. Zoetermeer takes its holidays with regio Midden along with the rest of Zuid-Holland, and weeks away are written in before the slot is fixed.' },
      { h3: 'Three and a half hours, then four and a half', p: 'Dutch clocks move twice a year and Indian clocks do not, so the gap to the teacher depends on the month. Anything from the end of school to mid-evening works, and both weekend days are free.' }
    ],
    spec: { title: 'A town whose schools were built for a wave that has passed', p: 'Seven secondary establishments teach 7,392 pupils, about a thousand each, and the districts built in the 1970s now hold the twenty-two percent of residents aged over sixty-five. A group of five to ten at a fixed hour is a different setting from a school of a thousand, and for some learners that is the entire attraction.' }
  },

  fees: {
    h2: 'The fee, in dollars, in all fifteen wijken',
    intro: 'Set out here rather than kept for a phone call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'There is one international rate and it is quoted in dollars, with no euro list, so every address in the town sees the same figure. Nothing is collected until the free lesson has produced a course and a time, and it is then collected over WhatsApp. Pausing, changing plan and missing a week are covered on the pricing page.'
  },

  reviewsH2: 'What six families wrote on Google, unedited',

  book: {
    h2: 'Send the level; the wijk is optional',
    intro: 'The first task might be a jar of marbles that reaches ten twice, an event model in Python that crosses a threshold repeatedly, or a metric at work that gets celebrated without anybody asking whether it can fall.',
    success: 'Thank you. Your Zoetermeer class request has been sent.'
  },

  faq: {
    h2: 'Zoetermeer coding class questions',
    intro: 'The town, its growth, its schools, the teaching and the terms.',
    items: [
      { q: 'Why does this page question the hundred-thousandth resident?', a: 'Not to spoil the story, which is a real piece of civic history: a child was welcomed on Friday 13 September 1991 at about a quarter past ten in the Lange Land hospital. The point is what kind of statement that is. A population is a net total that births and arrivals push up while deaths and departures pull down, so it can cross a hundred thousand, drop back and cross again. The record supports saying the town passed the line between the start of 1990 and the start of 1995, and it supports saying a municipality designated a morning to mark it. It does not support a minute.' },
      { q: 'How fast did Zoetermeer actually grow?', a: 'From 8,404 in 1960 to 130,836 in 2026, with almost all of it in the middle: 17,130 in 1970, 41,096 in 1975, 63,832 in 1980, 80,193 in 1985 and 96,292 in 1990. The town was designated a growth centre in 1962, and one English account instead dates the real growth from 1966. Both framings are on the page.' },
      { q: 'Which parts of the town does the class cover?', a: 'All of it. Zoetermeer is a single woonplaats divided into 15 wijken and 146 buurten, with no separate villages, and the class reaches every one of them at the same hour and the same fee.' },
      { q: 'Is any of this taught in Dutch?', a: 'No. Every lesson runs in English. The Dutch school words are kept, so groep, havo, vwo and profielkeuze are spoken as the child hears them, but there is no Dutch-language version of the course.' },
      { q: 'What time are classes for a family in Zoetermeer?', a: 'The teacher is three and a half hours ahead under Dutch summer time and four and a half in winter, since the Indian clock does not change. The usable window runs from the end of the school day to mid-evening, with both weekend days open, and a single repeating slot is agreed in the free lesson.' },
      { q: 'Why are there so few students in Zoetermeer?', a: 'Because there is almost nothing to study at here. The municipality counts 502 students at institutions in the town for 2026, while 2,870 residents are registered in applied higher education and 1,330 at university level for 2025. Zoetermeer sends its students to The Hague, Delft and Leiden, which is a good reason for an evening class that does not require another journey.' },
      { q: 'What is in the free lesson?', a: 'The teacher finds the edge of what the learner can already do and sets one task just past it. A child might watch a jar of marbles reach ten twice and have to decide who won. A teenager builds an event model and counts the crossings. An adult brings a metric from work that gets announced when it passes a round number. It ends with a course, a rung, a weekly time and a dollar figure, and nothing has been charged.' },
      { q: 'Is there a Modern Age Coders classroom in Zoetermeer?', a: 'No, and none is claimed in the Stadscentrum, in Oosterheem or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Zoetermeer coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Zoetermeer group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or wijk. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'West to the ministries, out to the province, and up to the country',
    html: 'West down the tram line is <a class="cg-inline-link" href="/coding-classes-in-the-hague">The Hague</a>, where most of this town\'s commuters go, and Zoetermeer is the third municipality of <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>, whose page is about a region nobody ever drew a boundary for. Above them stands the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and for machine learning rather than software the doors are <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> and the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-zuid-holland', label: 'Zuid-Holland' },
    { href: '/coding-classes-in-the-hague', label: 'The Hague' }
  ],

  personalityCss: `
.cg-root.cg-ztm .cg-hero-grid { align-items: end; gap: clamp(1.6rem, 3.9vw, 3rem); }
.cg-root.cg-ztm .cg-hero h1 { font-weight: 600; letter-spacing: -0.0105em; line-height: 1.1; }
.cg-root.cg-ztm .cg-capsule { border-left-width: 4px; border-left-style: solid; padding-left: 1.5rem; padding-bottom: 0.4rem; }
.cg-root.cg-ztm .cg-eyebrow { letter-spacing: 0.13em; font-weight: 600; }
.cg-root.cg-ztm .cg-section-head h2 { max-width: 32ch; }
.cg-root.cg-ztm .cg-grid-3 { grid-template-columns: repeat(auto-fit, minmax(234px, 1fr)); gap: clamp(1.1rem, 2.35vw, 1.8rem); }
.cg-root.cg-ztm .cg-ladder-col { border-top: 5px solid var(--cg-accent-soft); padding-top: 1.05rem; }
.cg-root.cg-ztm .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ztm .cg-callout { border-left-width: 6px; border-left-style: dashed; }
`,

  dossier: {
    curriculumAuthority: 'Town and municipality of Zoetermeer, Zuid-Holland: 130,836 residents (CBS 1 January 2026), the third municipality of the province; 48 primary establishments (12,007 pupils) and 7 secondary (7,392), about 1,056 each; only 502 students at institutions in the town. A single woonplaats with 15 wijken and 146 buurten and no villages. Designated a growth centre in 1962 with 8,404 residents in 1960. Regio Midden holidays with the rest of Zuid-Holland. The town page argues from milestone designation; the province page owns the Randstad boundary question and The Hague owns its own.',
    localProject: 'A milestone is an event somebody chose; the quantity underneath it has no such moments. Zoetermeer welcomed a hundred-thousandth resident on Friday 13 September 1991 at about a quarter past ten in the Lange Land hospital. A population is a net total moved up by births and arrivals and down by deaths and departures, so it can cross a threshold, fall back and cross again; a simulation starting just below the line with slight upward drift crosses it many times over a few thousand events. The published record is annual snapshots, 96,292 on 1 January 1990 and 105,009 on 1 January 1995, which support an interval and not a minute. Distinct from extrapolating past the data (Madinat Al Irfan) and from the base-year trap (Flevoland): here the issue is that a net quantity has no unique nth event and a ceremony has been recorded in the shape of a measurement. The crossing count is a model with assumed parameters and is labelled as such; the named child is deliberately not named on the page.',
    requiredMentions: [
      '130,836',
      '58,350',
      '20,970',
      '105,009',
      '12,007',
      '7,392',
      '8,404',
      '41,096',
      '96,292',
      '13 September 1991',
      'groeikern',
      'RandstadRail',
      'Bezuijen',
      'Lange Land'
    ],
    sources: [
      { claim: 'Zoetermeer 130,836 residents on 1 January 2026 (CBS provisional); 58,350 households (2025) averaging 2.2, 20,970 single-person (36 percent); 21,379 aged 0 to 15; 15,165 aged 15 to 25; 33,239 aged 25 to 45; 32,834 aged 45 to 65; 28,219 aged 65 and over; total area 3,705 ha, land 3,443 ha, water 262 ha; density 3,772; 48 primary establishments (12,007 pupils) and 7 secondary (7,392), both 2025; 502 students at institutions in the municipality (2026); HBO 2,870 and WO 1,330 (2025); one woonplaats, 15 wijken and 146 buurten; annual figures 105,009 in 1995, 109,941 in 2000, 115,792 in 2005, 121,532 in 2010, 124,025 in 2015, 125,285 in 2020, 129,862 in 2025.', url: 'https://allecijfers.nl/gemeente/zoetermeer/' },
      { claim: 'Zoetermeer 130,850 residents on 1 January 2026; 37.05 km2 (34.45 land, 2.60 water); mayor M.J. Bezuijen (VVD); the third municipality of Zuid-Holland; in 1962 Zoetermeer was designated a groeikern; fewer than 10,000 residents before 1962 and more than 100,000 by 1991.', url: 'https://nl.wikipedia.org/wiki/Zoetermeer' },
      { claim: 'Population of Zoetermeer on 1 January: 8,404 in 1960; 9,681 in 1962; 10,771 in 1965; 17,130 in 1970; 41,096 in 1975; 63,832 in 1980; 80,193 in 1985; 96,292 in 1990.', url: 'https://www.oudsoetermeer.nl/e2/site/oudsoetermeer/custom/site/upload/file/geschiedenis_zoetermeer/inwoneraantallen_zoetermeer.doc' },
      { claim: 'Milestone residents: the 10,000th in December 1962, the 15,000th in January 1969, the 20,000th in December 1970, the 25,000th in March 1972, the 50,000th in February 1977, the 75,000th in 1983 and the 100,000th on Friday 13 September 1991 at about 10:15 in the Lange Land ziekenhuis.', url: 'https://www.geheugenvanzoetermeer.nl/honderdduizendinwoners/' },
      { claim: 'The Zoetermeer Stadslijn opened its first section on 20 May 1977 with service from 22 May 1977; Seghwaert to Palenstein followed on 28 May 1978; the ring was completed on 29 September 1979; train service ended on 3 June 2006 and the line has run as a tram under the name RandstadRail since 29 October 2006.', url: 'https://nl.wikipedia.org/wiki/Zoetermeer_Stadslijn' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'The name of the child designated the hundred-thousandth resident. Recorded in the source and deliberately omitted here, because a private individual is not a data point.',
      'Any claim about how many times this municipality\'s register actually crossed a hundred thousand. The crossing count comes from a simulation with assumed parameters and is presented as a model.',
      'A date more precise than an interval for the first crossing of a hundred thousand. The published series is annual, so the page says only that it happened between the start of 1990 and the start of 1995.',
      'A verdict on whether the growth began in 1962 or 1966. Both framings are quoted.',
      'Anything the Zuid-Holland page owns: the Randstad boundary question and the provincial totals. Anything The Hague page owns.'
    ]
  }
};
