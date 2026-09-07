'use strict';
// Amstelveen: the municipality with the highest share of Indian-origin residents
// in the Netherlands. Spine: the resident community keeps growing while the
// arrivals fall, and the cohort model that makes both true at once.
// Every figure below carries its source in the sentence that uses it.

module.exports = {
  slug: 'coding-classes-in-amstelveen',
  code: 'amv',
  accent: '#40641A',
  accentRationale: 'Amstelveen: the Amsterdamse Bos, most of which lies inside the municipality',
  pageType: 'city',
  place: {
    name: 'Amstelveen',
    eyebrow: 'Amstelveen, Noord-Holland',
    schemaType: 'City',
    chain: [{ type: 'AdministrativeArea', name: 'Noord-Holland' }, { type: 'Country', name: 'Netherlands' }]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Amstelveen, Noord-Holland, Netherlands',
  title: 'Coding Classes in Amstelveen | Modern Age Coders',
  description: 'Live online coding, Python and AI classes for Amstelveen learners aged 6 to 67, written for the town with the highest Indian-origin share in the Netherlands.',
  ogDescription: 'Live online coding, Python, AI and mathematics for Amstelveen families, built on the cohort model that shows a community growing while arrivals fall.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Amstelveen Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Amstelveen, Noord-Holland, taught in English.'
  },

  h1: 'Coding classes in Amstelveen, where the community grows even as the arrivals fall',
  capsuleQ: 'What are the best coding classes in Amstelveen?',
  capsule: 'Coding classes in Amstelveen mostly serve families who came to the Netherlands to work in IT: the municipality has 68.3 residents of Indian origin for every thousand, the highest share of any Dutch municipality on 1 January 2024 according to Statistics Netherlands. Modern Age Coders teaches coding, Python, AI and mathematics live online, in English, to learners aged 6 to 67 here. The first class is free; after that a group of five to ten costs USD 100 a month and one-to-one tuition USD 150.',
  lead: 'The headline in 2026 says Indian knowledge migration to the Netherlands has fallen by nearly half since 2022. The school gates on the Sportlaan and the Amsterdamseweg say the community is bigger than it has ever been. Both are right at once, and a child who can explain why has learned the most useful thing on this page.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Amstelveen.',

  picks: {
    eyebrow: 'Course picks for Amstelveen',
    h2: 'Four starting points, chosen for the families who actually live here',
    intro: 'Two international schools, four Dutch secondary schools and a large number of parents who write software for a living: the picks below match that mix rather than a generic age chart. Placement is by what the learner can do, settled in the free class.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Sequencing, conditions and debugging before any syntax, in English, for a groep 3 to 5 child or a PYP junior.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Turtle art, games and a first small model, at the pace of the child rather than the pace of the groep.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'A complete Python course that does not depend on whether the school timetables informatica.' },
      { course: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', band: 'Professionals, private tuition only', note: 'For the parent on a highly skilled migrant contract whose next role asks for agents, not just prompts.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Amstelveen today',
      h2: 'The most Indian town in the Netherlands is a Dutch suburb with a forest in it',
      intro: 'Amstelveen is not the place with the most residents of Indian origin. That is Amsterdam, at about eleven thousand. It is the place with the highest share, and share is what a school gate, a cricket pitch or a Diwali evening in the Stadshart actually feels like.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Sixty-eight in every thousand', p: 'Statistics Netherlands counted 89 thousand residents with India as their country of origin on 1 January 2024, meaning people born in India plus those born in the Netherlands with one or two parents born there. Amstelveen leads every municipality at 68.3 per thousand residents, ahead of its neighbour to the south at 49.6, Eindhoven at 35.4 and Almere at 30.7.' },
          { h3: 'Fourteen wijken that add up exactly', p: 'On 1 January 2026 the municipal register held 95,840 people across fourteen neighbourhoods, and the fourteen figures add to that total to the person. Keizer Karelpark is the largest at 14,192, Waardhuizen Middenhoven next at 13,005, then Elsrijk at 12,008. The Amsterdamse Bos, mostly inside the municipality, is its own wijk with one hundred residents.' },
          { h3: 'Two international schools, one tram apart', p: 'The International School of Amsterdam at Sportlaan 45 opened in 1964 and in 1997 became the first school anywhere to run all three IB programmes from pre-school to grade 12. Amity International School Amsterdam at Amsterdamseweg 204 opened in February 2018 with the PYP, MYP and Diploma Programme. Both sit inside Amstelveen, not Amsterdam.' }
        ] },
        { kind: 'spec', title: 'A share and a count answer different questions', p: 'Ask which municipality has the largest Indian community and the answer is Amsterdam. Ask where a child of Indian parents is most likely to find another one in the same class and the answer is Amstelveen. Neither number is wrong. A learner who can say which question each number answers has already done the first hour of this course.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Schools by name',
      h2: 'Which school the child attends decides where we start, not the birthday',
      intro: 'Five secondary schools and two international schools serve Amstelveen, and they do not teach the same things at the same ages. The left column is what each school is known to run; the right column is the course that fits alongside it.',
      body: [
        { kind: 'align', rows: [
          { code: 'ISA', req: 'International School of Amsterdam, Sportlaan 45. The IB continuum since 1997, with the Middle Years Programme design cycle from age 11 and Computer Science available in the Diploma Programme.', ours: 'Blocks, then Python, placed by the MYP year rather than the age. A student choosing DP Computer Science gets the IB course directly and uses the live sessions for the internal assessment.' },
          { code: 'Amity', req: 'Amity International School Amsterdam, Amsterdamseweg 204, open since February 2018 with the PYP, MYP and DP. Many of its families also carry Indian school expectations from home.', ours: 'The same ladder as ISA, with the Class 9 to 12 Python and Java options kept visible for families who want the Indian curriculum alignment their cousins are sitting.' },
          { code: 'HWC', req: 'Hermann Wesselink College, Startbaan 3: vmbo-t, havo, atheneum and gymnasium, every one of them available bilingually, with STEM projects the school names as a focus.', ours: 'Python for teens in English fits a bilingual timetable without translation. Informatica is an elective only some Dutch schools timetable, so we never assume a learner has it.' },
          { code: 'KKC', req: 'Keizer Karel College, Elegast 5, havo and vwo. The profile choice at the end of the third year is where a Dutch teenager decides whether code stays a hobby or becomes a subject.', ours: 'For a year 3 student, a term of Python before the profile choice is the cheapest way to find out. For the bovenbouw, data science in Python sits well beside wiskunde A or B.' },
          { code: 'Panta Rhei', req: 'Scholengemeenschap Panta Rhei, Pandora 1: vmbo basis, kader, gemengd and theoretisch, the practical route into an MBO software or ICT programme.', ours: 'App-making and web courses that produce something visible within weeks, so a vmbo learner arrives at an MBO intake with a portfolio rather than a promise.' }
        ] },
        { kind: 'p', text: 'Amstelveen College and the Guus Kieft School complete the secondary list. Whichever school a child attends, the free class starts from what the learner can already do on the day, and the school name only tells us which vocabulary to use.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Amstelveen facts with a date and a source on each one',
      intro: 'Six things this page relies on, each traced to the office that published it. Where two sources disagree, both are given and neither is chosen quietly.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The share, and where it comes from', p: 'Statistics Netherlands, 5 March 2025: 89 thousand residents of Indian origin on 1 January 2024; Amstelveen highest at 68.3 per thousand; Amsterdam largest in absolute terms at about eleven thousand. Indian labour migrants are described as mostly knowledge migrants who frequently work in IT.' },
          { h3: 'People are staying longer', p: 'The same release: 56 percent of the 2019 arrivals from India were still resident four years later, against 33 percent of those who arrived in 2011. Family migrants stayed more often after four years, at 64 percent, than labour migrants at 50 percent.' },
          { h3: 'And fewer are arriving', p: 'Statistics Netherlands, 30 June 2026: 309 thousand immigrants in 2025 against 317 thousand in 2024, and 14 thousand knowledge migrants from outside the EU in 2025 against 26 thousand in 2022, with the release naming Indian knowledge migrants as the group that fell most.' },
          { h3: 'The town, to the person', p: 'The municipal population register on 1 January 2026: 95,840 residents in fourteen wijken, from Keizer Karelpark at 14,192 down to the Amsterdamse Bos at 100. The fourteen figures sum to the municipal total exactly, which is rarer than it should be and is checked in the class.' },
          { h3: 'The tram that replaced a metro', p: 'The Amsteltram opened between Amsterdam Zuid and Amstelveen Westwijk on 13 December 2020, reached Uithoorn Centrum on 21 July 2024 and Muiderpoortstation on 29 March 2026, replacing the sneltram on line 51 that had stopped serving Amstelveen on 3 March 2019. Its Amstelveen stops include Oranjebaan, Meent, Brink, Poortwachter, Sacharovlaan and Westwijk.' },
          { h3: 'The definition changed in 2022', p: 'On 16 February 2022 Statistics Netherlands replaced the old migration-background categories with a classification by country of origin. One group is counted differently: people born abroad to two Netherlands-born parents now have a non-Dutch origin. A figure from 2020 and a figure from 2024 are therefore not quite the same measurement.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no association with the municipality of Amstelveen, with either international school or with any Dutch school named above, and claims none. They are named because a page about coding classes in a town should know which schools are in it.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Arrivals fell by nearly half and the community grew: build the model that makes both true',
      intro: 'Two published numbers, one small program, and a table that settles an argument every Amstelveen family has heard at a dinner table this year.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Take the two anchors', p: 'Knowledge migrants from outside the EU fell from 26 thousand in 2022 to 14 thousand in 2025, a 46 percent drop, with Indian migrants falling most. Four-year retention of Indian arrivals rose from 33 percent for the 2011 cohort to 56 percent for the 2019 cohort. Both are Statistics Netherlands figures, dated above.' },
          { h3: '2. Write the cohort model', p: 'A resident population is not this year\'s arrivals. It is every earlier year\'s arrivals, each multiplied by the share of that cohort still here. The learner writes exactly that: a loop over cohorts, a retention curve that reaches 56 percent at year four, and a running total. Then the same loop with a curve that reaches 33 percent.' },
          { h3: '3. Read the table', p: 'With arrivals indexed to 100 in 2022 and falling to 54 by 2025, the resident stock under the newer retention rises from 300 to 373, a gain of 24 percent, and is still rising in 2026. Under the older retention it stalls at 264. The arrivals series is illustrative; the two anchors are not, and the shape of the result does not depend on the illustration.' }
        ] },
        { kind: 'table', caption: 'One arrivals series, two retention curves: the flow falls while the stock grows', head: ['Year', 'Arrivals (index, 2022 = 100)', 'Residents, 56 percent four-year retention', 'Residents, 33 percent four-year retention'], rows: [
          ['2019', '100', '100', '100'],
          ['2020', '80', '165', '150'],
          ['2021', '90', '232', '198'],
          ['2022', '100', '300', '246'],
          ['2023', '80', '339', '263'],
          ['2024', '65', '361', '266'],
          ['2025', '54', '373', '264'],
          ['2026', '50', '384', '263']
        ] },
        { kind: 'callout', h3: 'The news reports a flow. The school gate counts a stock.', p: 'A flow is how many arrived this year. A stock is how many are here. The 2026 release is about the first; the 68.3 per thousand is the second. Because retention roughly doubled between the 2011 and 2019 cohorts, the stock keeps climbing for years after the flow peaks, which is why a parent at the Sportlaan gate sees a bigger community every September while the newspaper says immigration is down. The table above was computed before this paragraph was written, and every derived number in it is arithmetic on the two anchors and the stated illustrative series.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for anyone who reads a migration headline, or any headline with a number in it',
      intro: 'The mistakes in this project are the mistakes in most dashboards. The habits that prevent them are small, and each is practised on the Amstelveen numbers before the learner meets it anywhere else.',
      body: [
        { kind: 'table', caption: 'Working with counts of people who come and go', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Name', 'Say whether a number is a stock or a flow', 'Arrivals read as residents', 'A sentence that means one thing'],
          ['Date', 'Attach the reference date; Dutch population stocks are 1 January figures', 'A 2024 stock compared with a 2025 flow', 'Numbers that can be lined up'],
          ['Define', 'Check the definition year before joining two series', 'The 2022 reclassification read as growth', 'A break marked, not hidden'],
          ['Model', 'A stock needs a retention curve, not just an arrivals count', 'Falling arrivals mistaken for a shrinking community', 'The table above'],
          ['Compare', 'Compare cohorts at the same age, four years after arrival', 'A young cohort judged as if it had had time to leave', 'Retention figures that are actually comparable']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A jar and a bag of marbles. Ten go in each round, some come out each round, and the child counts what is in the jar after five rounds. Then the bag gets smaller, five per round, and the jar still fills. It takes about ten minutes and no screen, and the child says the sentence themselves: fewer are coming, more are here.' },
          { h3: 'For teenagers', p: 'The cohort loop in Python, with the retention curve as a list and the arrivals as a dictionary keyed by year. The learner runs it twice, swaps the curves, prints both tables and writes two sentences: one that the newspaper could print, one that the school could.' },
          { h3: 'For adults', p: 'The same model on a customer base. Sign-ups down thirty percent, active users up: churn fell. Most product dashboards show the flow in large type and the stock in small, and a working parent in Amstelveen has almost certainly sat in a meeting where the two were confused. Bring a real series if it is yours to share.' }
        ] },
        { kind: 'p', text: 'The 68.3 per thousand, the 89 thousand national figure, the 56 percent and 33 percent four-year retention rates, the 26 thousand to 14 thousand fall in non-EU knowledge migrants and the 16 February 2022 reclassification are all published by Statistics Netherlands. The arrivals index in the table is illustrative and labelled as such. Nothing on this page reports an Amstelveen figure that the municipality or the statistics office has not published.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a jar of marbles to a churn model, one rung at a time',
    intro: 'One free class usually finds the rung that will move a learner furthest. Age is the starting guess, never the answer.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Counting what stays', p: 'Children learn that adding and taking away happen at the same time, in blocks first.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'A loop that adds and a loop that removes', p: 'Learners write both loops and watch a total that grows while the inflow shrinks.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Cohorts in code', p: 'Teenagers build the retention model and defend which curve a real dataset supports.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Stock, flow and churn at work', p: 'Adults take the model to a customer base, a payroll or a patient list.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI can write the cohort model in ten seconds, why should a child in Amstelveen learn to?',
    intro: 'Because it will also write the wrong one in ten seconds, and the two look identical until somebody checks.',
    p1: 'Ask a coding assistant for the Indian community in Amstelveen over time and it will produce a tidy chart from the arrivals figures, falling nicely from 2022. Nothing in the output says it plotted a flow when you asked about a stock. The program runs, the axes are labelled, the chart is wrong about the one thing you wanted to know. That is not a failure of the tool; it is the tool doing exactly what a vague question deserves.',
    p2: 'What the class trains is the part the assistant cannot supply: knowing that a resident count is a sum over cohorts, asking for the reference date, noticing that the definition changed in 2022, and testing the model with an old retention curve to see whether the conclusion survives. Those are habits of thought, and they transfer to every dataset the child will ever be handed, in Python, in a spreadsheet, or in a meeting. The tools will change again before a child in groep 6 finishes school. The checking will not.',
    closer: 'So the honest answer for an Amstelveen parent is that the code matters less than it did and the thinking matters more, and the only way anyone has found to teach the thinking is to make the child write the code and then find what is wrong with it.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a town that already commutes on a tram',
    intro: 'Amstelveen families do the Sportlaan run, the Stadshart run and the Amsterdam Zuid run every week. The case for a class that arrives over a connection is that it does not add a fourth.',
    cells: [
      { h3: 'No fourth journey', p: 'The tram stops at Sportlaan for one school and Oranjebaan for the Stadshart, and parents already spend enough of the week between them. A class at the kitchen table in Westwijk or Elsrijk takes nothing off the timetable but the lesson itself.' },
      { h3: 'In English, with the Dutch words kept', p: 'Teaching is in English. Groep, havo, TTO and profielkeuze are used as the family uses them, because a course that translates a child\'s school vocabulary back at them has not been listening.' },
      { h3: 'The first class costs nothing, and decides something', p: 'A full lesson with a real task, ending in a named course, a level and a slot. No card details are taken to arrange it and nobody is asked to decide before they have watched a lesson.' },
      { h3: 'Groups of five to ten, set by level', p: 'Who joins a group depends on what a learner can do and what they want next. Whether they arrived in 2019 or were born in the Ziekenhuis Amstelland is not a variable.' },
      { h3: 'Two lessons a week, one recurring time', p: 'Roughly eight sessions a month at a time fixed once at enrolment. Term dates in regio Noord, the Diwali week and the summer trip to India are all mentioned before the slot is set, not after.' },
      { h3: 'Amstelveen evenings are Indian nights', p: 'Seven in the evening in Westwijk is half past ten in Kolkata in summer and half past eleven in winter, because the Dutch clock moves and the Indian one does not. Late afternoon, early evening and weekend slots are the natural ones, confirmed on the call.' }
    ],
    spec: { title: 'The grandparents can watch', p: 'A recording of the free class is shared with the family, and more than one Amstelveen learner has had it reviewed by a grandparent in Pune or Hyderabad the same night. That is not a feature we designed. It is what happens when a class is taught in the language the whole family shares.' }
  },

  fees: {
    h2: 'One free class, then USD 100 or USD 150 a month',
    intro: 'The fee is published here, in full, before anybody asks for a phone number.',
    first: 'A real lesson with a task pitched at the learner, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner and one teacher.',
    closer: 'The figure is in US dollars because there is a single published international rate and no separate euro list; there is no Amstelveen surcharge and no enrolment fee. The free class settles the course and the slot first, and payment is arranged afterwards over WhatsApp, not before. Pauses, plan changes and missed classes are on the pricing page.'
  },

  reviewsH2: 'What families and learners say',

  book: {
    h2: 'Tell us the learner\'s level and which gate you stand at',
    intro: 'The first task might be a jar of marbles, a Python loop over cohorts, or a customer dashboard from work that shows the flow in large type and the stock in small.',
    success: 'Thank you. Your Amstelveen class request has been sent.'
  },

  faq: {
    h2: 'Amstelveen coding class questions',
    intro: 'The town, the schools, the teaching and the terms, one at a time.',
    items: [
      { q: 'Is Amstelveen really the most Indian municipality in the Netherlands?', a: 'By share, yes. Statistics Netherlands put Amstelveen at 68.3 residents of Indian origin per thousand on 1 January 2024, the highest of any municipality, ahead of Eindhoven at 35.4 and Almere at 30.7. By absolute number Amsterdam is larger, at about eleven thousand. The page uses both figures and says which is which.' },
      { q: 'Our child is at ISA or Amity on the IB. Does this fit alongside it?', a: 'Yes. Both schools sit inside Amstelveen and both run the PYP, MYP and Diploma Programme. We place by the programme year rather than the age, so an MYP student starts where the design cycle has left them, and a Diploma student choosing Computer Science can take the IB course directly and use the live sessions for the internal assessment.' },
      { q: 'Our child is at Hermann Wesselink or Keizer Karel and the school does not timetable informatica. What now?', a: 'That is the usual case rather than the exception, because informatica is an elective in the havo and vwo bovenbouw that only some schools offer. A complete Python course taught live in English does not depend on the school timetable at all, and for a third-year student a single term of it before the profile choice is the cheapest way to find out whether code should become a subject.' },
      { q: 'Why does this page say the community is growing when the news says Indian immigration is falling?', a: 'Because one is a flow and the other is a stock. Arrivals of knowledge migrants from outside the EU fell from 26 thousand in 2022 to 14 thousand in 2025, and four-year retention of Indian arrivals rose from 33 percent to 56 percent between the 2011 and 2019 cohorts. Add the cohorts up and the resident total keeps rising for years after the arrivals peak. That model is the signature project on this page.' },
      { q: 'Do you teach in English or in Dutch?', a: 'In English, which is the language the Amstelveen families we teach share across three generations. Dutch school vocabulary is kept as the family uses it: groep, havo, vwo, TTO, profielkeuze. We do not teach in Dutch and do not claim to.' },
      { q: 'What time are classes for an Amstelveen family?', a: 'The Dutch clock moves twice a year and the Indian one never does, so seven in the evening here is half past ten or half past eleven in India depending on the season. Late afternoon, early evening and weekend slots are the natural ones. The recurring time is agreed on the free class and fixed before payment.' },
      { q: 'What happens in the free Amstelveen class?', a: 'We find out what the learner can already do and set one task pitched there. A child fills a jar of marbles while the bag empties. A teenager writes the cohort loop and swaps the retention curve. An adult is handed a dashboard with sign-ups falling and active users rising and asked what happened. It ends with a named course, a level, a slot and the fee stated in USD, and there is no charge for the hour.' },
      { q: 'Is there a Modern Age Coders centre in Amstelveen?', a: 'No, and the page does not pretend otherwise. There are no premises in Amstelveen, in Amsterdam or anywhere in the Netherlands. Classes are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The contact number on this page is an Indian one.', boiler: true },
      { q: 'How much do Amstelveen coding classes cost?', a: 'Nothing for the first class. Group tuition is USD 100 a month for two live lessons a week, normally eight a month, in a group of five to ten. Private tuition is USD 150 a month for one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before any payment.', boiler: true },
      { q: 'What is the class size for Amstelveen learners?', a: 'A group holds five to ten learners matched on level, pace and goal rather than on age or school. Private tuition is one learner with one teacher. When no suitable group is running, the family can choose private tuition or wait for the next cohort to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'The rest of the country, and the page for building AI',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a> carries the national picture, the digital literacy curriculum and the full course list, and <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> is the page for a learner who wants to build models rather than programs. Pages for Amsterdam, Uithoorn and the rest of Noord-Holland follow in this series.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/ai-and-machine-learning-classes-in-netherlands', label: 'AI and ML in the Netherlands' },
    { href: '/coding-classes-in-germany', label: 'Germany' }
  ],

  personalityCss: `
.cg-root.cg-amv .cg-hero-grid { grid-template-columns: 1.15fr 1fr; }
.cg-root.cg-amv .cg-hero h1 { letter-spacing: -0.012em; }
.cg-root.cg-amv .cg-capsule { border-left-width: 6px; }
.cg-root.cg-amv .cg-section { padding-top: clamp(2.6rem, 6vw, 4.8rem); }
.cg-root.cg-amv .cg-eyebrow { letter-spacing: 0.18em; }
.cg-root.cg-amv .cg-grid-3 { gap: clamp(1rem, 2.4vw, 1.75rem); }
.cg-root.cg-amv .cg-ladder-col { border-top-width: 4px; }
.cg-root.cg-amv .cg-align-row { border-bottom: 1px dashed var(--cg-rule-2); }
.cg-root.cg-amv .cg-pick-title { font-size: 1.02rem; }
`,

  dossier: {
    curriculumAuthority: 'Amstelveen, Noord-Holland: two IB continuum international schools inside the municipality (ISA, Sportlaan 45, since 1964, all three IB programmes since 1997; Amity, Amsterdamseweg 204, since February 2018) plus Dutch secondary schools (Hermann Wesselink College bilingual vmbo-t/havo/atheneum/gymnasium at Startbaan 3; Keizer Karel College havo/vwo at Elegast 5; Panta Rhei vmbo at Pandora 1; Amstelveen College; Guus Kieft School). The page argues from which school a child attends rather than from national curriculum policy, which the hub owns.',
    localProject: 'Stock versus flow. Statistics Netherlands published that non-EU knowledge migrants fell from 26 thousand (2022) to 14 thousand (2025), Indian migrants falling most, AND that four-year retention of Indian arrivals rose from 33 percent (2011 cohort) to 56 percent (2019 cohort). A learner builds a cohort model (stock = sum over cohorts of arrivals times retention) and shows that with arrivals indexed 100 to 54 the resident stock still rises 24 percent under the newer retention and stalls under the older one. Distinct from survivorship bias (Al Hail), from cumulative totals (Seria) and from the exposure-window trap on the Netherlands hub: the flaw here is reading a flow as a stock. Computed before writing; illustrative arrivals series labelled as such.',
    requiredMentions: [
      '68.3 per thousand',
      'Sportlaan 45',
      'Amsterdamseweg 204',
      'Hermann Wesselink College',
      'Keizer Karel College',
      'Panta Rhei',
      'Keizer Karelpark',
      'Waardhuizen Middenhoven',
      'Amsteltram',
      'Amsterdamse Bos',
      '13 December 2020',
      '56 percent of the 2019 arrivals'
    ],
    sources: [
      { claim: '89 thousand residents of Indian origin on 1 January 2024; Amstelveen highest share at 68.3 per thousand, Uithoorn 49.6, Eindhoven 35.4, Almere 30.7; Amsterdam largest absolute at about 11 thousand; 56 percent of 2019 arrivals still resident after four years vs 33 percent of 2011 arrivals; family 64 vs labour 50 percent; definition = born in India or born in NL with one or two parents born in India.', url: 'https://www.cbs.nl/en-gb/news/2025/10/migrants-from-india-are-staying-longer-in-the-netherlands' },
      { claim: 'Immigration 309 thousand in 2025 vs 317 thousand in 2024; knowledge migrants from outside the EU 14 thousand in 2025 vs 26 thousand in 2022; especially fewer Indian knowledge migrants.', url: 'https://www.cbs.nl/nl-nl/nieuws/2026/27/minder-immigratie-in-2025-vooral-minder-asiel-en-kennismigranten' },
      { claim: 'New origin classification introduced 16 February 2022; people born abroad to two Netherlands-born parents now counted as having a non-Dutch origin.', url: 'https://www.cbs.nl/nl-nl/nieuws/2022/07/cbs-introduceert-nieuwe-indeling-bevolking-naar-herkomst' },
      { claim: 'Amstelveen 95,840 residents on 1 January 2026 across 14 wijken: Keizer Karelpark 14,192, Waardhuizen Middenhoven 13,005, Elsrijk 12,008, Bovenkerk-Westwijk Noord 10,844, Bankras Kostverloren 10,547, Groenelaan 8,684, Westwijk Zuid 7,678, Randwijck 5,962, Uilenstede Kronenburg 4,205, Stadshart 3,452, Patrimonium 3,135, Buitengebied Zuid 1,227, Buitengebied Noord 801, Amsterdamse Bos 100 (sum 95,840).', url: 'https://allecijfers.nl/ranglijst/grootste-en-kleinste-wijken-in-inwoners-in-de-gemeente-amstelveen/' },
      { claim: 'International School of Amsterdam: Sportlaan 45, Amstelveen, founded 1964; DP from 1979, MYP 1992, PYP 1997, first school to offer IB from pre-school to grade 12; 1,317 students of 60 nationalities in 2020-21.', url: 'https://en.wikipedia.org/wiki/International_School_of_Amsterdam' },
      { claim: 'Amity International School Amsterdam: Amsterdamseweg 204, 1182 HL Amstelveen; opened February 2018; IB PYP, MYP and DP.', url: 'https://www.iamsterdam.com/en/live-work-study/schools-universities-and-education-providers/all/education-providers/amity-international-school-amsterdam' },
      { claim: 'Tram 25 (Amsteltram): opened Zuid to Amstelveen Westwijk 13 December 2020; extended to Uithoorn Centrum 21 July 2024; extended to Muiderpoortstation 29 March 2026; replaced sneltram 51 withdrawn from Amstelveen 3 March 2019; Amstelveen stops Oranjebaan, Meent, Brink, Poortwachter, Sacharovlaan, Westwijk.', url: 'https://nl.wikipedia.org/wiki/Tramlijn_25_(Amsterdam)' },
      { claim: 'Hermann Wesselink College, Startbaan 3, 1185 XP Amstelveen: vmbo-t, havo, atheneum, gymnasium, all bilingual; STEM projects named as a focus.', url: 'https://www.hethwc.nl/en/' },
      { claim: 'Secondary schools in Amstelveen: Amstelveen College, Hermann Wesselink College, Guus Kieft School, Keizer Karel College (Elegast 5), Panta Rhei (Pandora 1, vmbo).', url: 'https://scholenopdekaart.nl/middelbare-scholen/amstelveen/' }
    ],
    rejectedClaims: [
      'Any per-wijk share of Indian-origin residents (Westwijk, Bovenkerk, Elsrijk). Not published at wijk level in anything found; the page uses the municipal share only.',
      'That Amity International School Amsterdam follows the CBSE curriculum. Older sources describe the Amity group as CBSE-connected; the Amsterdam campus is an IB continuum school and the page says only that.',
      'That Keizer Karel College or Hermann Wesselink College timetables informatica. Neither site confirms it (KKC unreachable, HWC names STEM projects only), so the page advises asking the school and builds no argument on it.',
      'A published journey time for tram 25 between Stadshart and Amsterdam Zuid. Not found in a primary source; the page names stops and dates only.',
      'Anything the Netherlands hub owns: the nine SLO core objectives, the March 2024 finalisation as a spine, the groep 8 streaming advice, the CET/CEST offset paragraph. Mentioned in passing at most, never argued.'
    ]
  }
};
