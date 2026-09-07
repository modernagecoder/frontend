'use strict';
// Amsterdam-Noord: 112,500 residents on 49.01 square kilometres across the
// IJ, half of it one rural wijk holding 2,357 people.
// Spine: the published age bands do not add up to the published population,
// rounding explains some of the gap and provably not all of it, and the
// honest move is to bound the explanation rather than reconcile the numbers.

module.exports = {
  slug: 'coding-classes-in-amsterdam-noord',
  code: 'anr',
  accent: '#9A5505',
  accentRationale: 'Amsterdam-Noord: an ochre off the old shipyard cranes and the brick of the tuindorpen, chosen by the solver as the furthest available point from the accents already in the cluster and read clearly against the rose on the Centrum page',
  pageType: 'district',
  place: {
    name: 'Amsterdam-Noord',
    eyebrow: 'Noord, Amsterdam',
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
  routeLabel: 'Amsterdam-Noord, Netherlands',
  title: 'Coding Classes in Amsterdam-Noord | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Amsterdam-Noord for ages 6 to 67, from Volewijck to Durgerdam. The first lesson costs nothing at all.',
  ogDescription: 'Live online coding, Python and AI for families across the IJ in Amsterdam-Noord, built on five age bands that do not add up to the population above them.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'complete-game-development-masterclass-for-teens',
  verifiedOn: '8 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Amsterdam-Noord Learners',
    description: 'Ability-placed online coding, Python, AI, game building and mathematics for children, teenagers and adults across the wijken of Amsterdam-Noord, taught in English.'
  },

  h1: 'Coding classes in Amsterdam-Noord, where one neighbourhood\'s five age groups add up to 28 more people than live in it',
  capsuleQ: 'What are the best coding classes in Amsterdam-Noord?',
  capsule: 'Coding classes in Amsterdam-Noord reach 112,500 residents (1 January 2026) on 49.01 square kilometres, about half of which is a single rural wijk holding 2,357 people. In Volewijck the published age bands add to 9,305 against a published population of 9,277, a gap of 28. Five bands rounded to the nearest five can only be out by twelve and a half between them, so rounding cannot be the whole story, and this page says that rather than quietly closing the gap. Modern Age Coders teaches live online in English from the Van der Pekbuurt to Durgerdam, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Take the published population of Volewijck, 9,277 people, and add up the five published age groups for the same wijk in the same year. You get 9,305. The parts exceed the whole by 28. Every one of those age figures ends in a nought or a five, which tells you they have been rounded, and rounding is a perfectly good explanation for a small gap. It is not a good enough explanation for this one, and working out exactly how much it can account for is a more valuable half hour than any single number on this page.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Amsterdam-Noord.',

  picks: {
    eyebrow: 'Course picks for Amsterdam-Noord',
    h2: 'Four courses for a district on the other side of the water',
    intro: 'A groep 5 child in Tuindorp Oostzaan who wants to make the game rather than finish it, a teenager off the NDSM yard who has decided building things is the plan, a student in Overhoeks who needs Python to do the repetitive work, and an adult in Buikslotermeer handed a monthly report they have stopped believing: four doors, first hour free on each.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python, drawings that obey instructions and a first program that learns a rule, taught in English to the groep 5 to 8 child anywhere north of the IJ.' },
      { course: 'complete-game-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'A real game built from an empty project to something playable, for the teenager who has spent years inside other people\'s and wants to make one.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python that fetches, cleans, decides and reports on its own, for the student or worker repeating the same task every week by hand.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reading a table properly, including the moment the parts stop adding to the whole, for anybody who passes numbers upward and would like to defend them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Noord today',
      h2: 'A hundred and twelve thousand people, and half the ground almost empty',
      intro: 'Amsterdam-Noord recorded 112,500 residents on 1 January 2026 across 49.01 square kilometres, which makes it by far the largest of the eight districts by area and gives a district figure of about 2,295 people to the square kilometre. That single number hides the most unusual thing about the place, which is that its ground is split between dense post-war housing and open polder.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Half the district is one wijk with 2,357 people in it', p: 'The wijk called Waterland covers 2,774 hectares, of which 2,467 are land, roughly half the district\'s whole surface, and holds 2,357 residents at 96 people to the square kilometre. Its ten buurten are villages: Zunderdorp, Holysloot, Ransdorp, Durgerdam, Schellingwoude and the rest. Two point one percent of the district lives on about half of it, and both of those shares are this page dividing published figures.' },
          { h3: 'Three zones and a rural north', p: 'The district divides into Noord-West, coded GN18, Oud-Noord, coded GN19, and Noord-Oost, coded GN20, with Landelijk Noord holding the villages. The garden suburbs, Tuindorp Oostzaan, Tuindorp Buiksloot and Tuindorp Nieuwendam, sit between the two extremes and are the reason the district reads as several places rather than one.' },
          { h3: 'Elected since 1981', p: 'Noord was one of the first Amsterdam stadsdelen with its own elected stadsdeelraad, in 1981, along with Osdorp. It held the legal status of deelgemeente until March 2014, and it now has a dagelijks bestuur and a directly elected stadsdeelcommissie.' }
        ] },
        { kind: 'spec', title: 'Separated by water, joined by three kinds of crossing', p: 'Amsterdam-Noord is cut off from the rest of the city by the IJ. It is reached by tunnel, including the Coentunnels and the IJ-tunnel, by ferry across the water, and since 2018 by metro line 52, which has stations at Noord and Noorderpark and runs under the centre to the south of the city. The former NDSM shipyard has been an artists\' quarter since the 1990s, and a large part of the old Shell site on the northern bank of the IJ was redeveloped into the living and working district of Overhoeks.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Three wijken, one district, and house values that differ by a factor of nearly three',
      intro: 'Post-war blocks, a nineteenth-century workers\' quarter and a run of polder villages, all inside one district with one name. The figures below are published for each wijk separately: populations for 2026, households, area, housing and tenure for 2025, and incomes for the year noted.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Volewijck', p: '9,277 residents in three buurten, Bloemenbuurt-Noord, Bloemenbuurt-Zuid and the Van der Pekbuurt, in 5,055 households averaging 1.9 people, 2,580 of them single-person, 51 percent. 131 hectares total and 119 of land, 7,958 people to the square kilometre. 4,906 dwellings at an average value of 435,000 euro, 4,170 of them rented, 85 percent. Average income 27,700 euro per resident in 2024.' },
          { h3: 'Buikslotermeer', p: '12,025 residents in six buurten including Plan van Gool, Loenermark and the Rode Kruisbuurt, in 6,580 households averaging 1.8, 3,730 of them single-person, 57 percent. 155 hectares total and 151 of land, 7,970 people to the square kilometre. 5,886 dwellings at an average value of 368,000 euro, the lowest of the three, 4,179 rented, 71 percent. Average income 30,000 euro in 2024.' },
          { h3: 'Waterland', p: '2,357 residents in ten village buurten, in 1,000 households averaging 2.3, only 315 of them single-person, 32 percent. 2,774 hectares total and 2,467 of land, 96 people to the square kilometre. 945 dwellings at an average value of 982,000 euro, 728 of them owner-occupied, 77 percent. Average income 43,800 euro, and that figure is for 2023 while the other two are for 2024.' },
          { h3: 'What the spread looks like', p: 'Average dwelling value runs from 368,000 to 982,000 euro across these three, a factor of 2.67. Owner-occupation runs from 15 percent in Volewijck to 77 percent in Waterland. Average household size runs from 1.8 to 2.3. These are neighbours inside one district, and no single Noord figure describes any of them.' },
          { h3: 'The wijken not measured here', p: 'Noord also holds IJplein and the Vogelbuurt, Nieuwendammerham, Banne Buiksloot, Nieuwendam-Noord, the three tuindorpen, Oostzanerwerf, Kadoelen, the Waterlandpleinbuurt and the newer ground at Buiksloterham and Overhoeks. They are named because they exist and are given no invented figures.' },
          { h3: 'What the class does with any of it', p: 'Nothing. Placement follows what a learner can already do, so a child in the Van der Pekbuurt and a child in Durgerdam sit in the same group when they are at the same stage. The wijk is the one thing on this page that never enters the decision.' }
        ] },
        { kind: 'p', text: 'A district with a working-class quarter, a post-war estate and a set of polder villages inside it is a district whose average is a mixture rather than a description, and a family lives in exactly one of the pieces.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, its year, and which of them have been rounded',
      intro: 'The stadsdeel entry, three wijk pages, and the pattern in the digits that turns out to matter.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The district, from its entry', p: 'Amsterdam-Noord: 112,500 inwoners on 1 January 2026; oppervlakte 49.01 square kilometres, with no land and water split given; one of the first Amsterdam stadsdelen with an elected stadsdeelraad in 1981, together with Osdorp; deelgemeente status held until March 2014; a dagelijks bestuur and a directly elected stadsdeelcommissie today; zones Noord-West GN18, Oud-Noord GN19 and Noord-Oost GN20; Landelijk Noord with villages including Ransdorp and Durgerdam; separated from the rest of the city by the IJ; the Coentunnels and the IJ-tunnel; metro line 52 with stations Noord and Noorderpark, connecting Noord to the south of the city since 2018; artists on the former NDSM site since the 1990s; the former Shell ground on the northern IJ bank redeveloped as Overhoeks.' },
          { h3: 'The three wijken', p: 'Populations are 2026; households, single-person households, areas, densities, dwellings, values and tenure are 2025; incomes are 2024 for Volewijck and Buikslotermeer and 2023 for Waterland. Volewijck 9,277 residents, 5,055 households, 131 hectares, 7,958 per square kilometre. Buikslotermeer 12,025 residents, 6,580 households, 155 hectares, 7,970 per square kilometre. Waterland 2,357 residents, 1,000 households, 2,774 hectares, 96 per square kilometre.' },
          { h3: 'The age bands, as published', p: 'Volewijck: 1,420 under fifteen; 1,030 aged fifteen to twenty-five; 3,065 aged twenty-five to forty-five; 2,410 aged forty-five to sixty-five; 1,380 aged sixty-five and over. Buikslotermeer: 1,500; 1,690; 4,000; 2,375; 2,465. Waterland: 375; 280; 410; 805; 495. Every single one of those fifteen numbers is a multiple of five.' },
          { h3: 'Which fields are not rounded', p: 'The populations 9,277 and 2,357 are not multiples of five, and neither are the dwelling counts 4,906, 5,886 and 945, nor the tenure counts 4,170, 736, 4,179, 1,707, 217 and 728. The rounding falls on the person-level breakdowns, the age bands and the household counts, and not on the totals or the housing stock.' },
          { h3: 'What the parts add to', p: 'Volewijck\'s five bands add to 9,305 against a published 9,277, a gap of 28. Buikslotermeer\'s add to 12,030 against 12,025, a gap of 5. Waterland\'s add to 2,365 against 2,357, a gap of 8. Those three sums and three differences are this page adding published numbers.' },
          { h3: 'What this page does not conclude', p: 'It does not say the data is wrong. It does not pick a cause for the part of Volewijck\'s gap that rounding cannot cover. Candidates exist, including a different reference moment for the age table than for the population, a coarser rounding rule, or an adjustment applied to protect small groups, and nothing that was read settles which. The gap is reported and left open.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the stadsdeel, the city or any school named here and claims none. The district area, population and governance come from the stadsdeel entry; every wijk figure comes from the national statistics office page for that wijk.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The five age groups add to more people than live there',
      intro: 'Three wijken, three gaps between the parts and the whole, and a bound that tells you which of them you are allowed to shrug at.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Read the last digit', p: 'Every published age band in this district ends in nought or five, and the populations do not. That is not decoration. It says the bands have been rounded to the nearest five and the totals have not, which immediately means the two are not required to agree and that a small disagreement is expected rather than alarming.' },
          { h3: '2. Work out how much rounding can explain', p: 'A figure rounded to the nearest five sits at most two and a half away from the truth. Five such figures added together sit at most twelve and a half away from the true sum. That is the whole calculation, it takes a minute, and it converts a vague feeling that rounding probably explains it into a number that either covers the gap or does not.' },
          { h3: '3. Say which gaps survive the bound', p: 'Buikslotermeer is out by 5 and Waterland by 8, both comfortably inside twelve and a half, so rounding accounts for them and there is nothing to investigate. Volewijck is out by 28, more than twice the bound. That one is a real unexplained difference, and the correct output is to say so rather than to reconcile it.' }
        ] },
        { kind: 'table', caption: 'Three wijken, three gaps, and one bound that separates them', head: ['Wijk', 'Published residents', 'Five age bands added', 'Gap', 'Can rounding to the nearest five explain it?'], rows: [
          ['Buikslotermeer', '12,025', '12,030', 'parts exceed the whole by 5', 'yes, the bound is 12.5'],
          ['Waterland', '2,357', '2,365', 'parts exceed the whole by 8', 'yes, the bound is 12.5'],
          ['Volewijck', '9,277', '9,305', 'parts exceed the whole by 28', 'no, 28 is more than twice the bound'],
          ['What the bound is', 'five bands', 'each at most 2.5 from the truth', '5 times 2.5', 'so at most 12.5 in either direction']
        ] },
        { kind: 'callout', h3: 'Bound the explanation before you accept it', p: 'When the parts of a table do not add to its total, almost everybody reaches for the same sentence: it is probably rounding. Very often that is right, and the sentence is doing real work, because published statistics round small counts on purpose. Rounding a neighbourhood age group to the nearest five is a deliberate protection: in a village of a few hundred people an exact count of children in one age band can point at particular families, so the office blurs it. Knowing that is what stops a careful person from filing a bug report against a convention. But probably is not a quantity, and the step that almost nobody takes is the one that turns it into one. Count the rounded figures, multiply by half the rounding unit, and you have the largest gap that rounding alone could ever produce. If the observed gap is inside it, stop, you have your explanation. If it is outside it, as one of the three wijken here plainly is, then something else is also happening and the honest report says so and names what it does not know. The damage is done by the middle path, where somebody believes the rounding story without checking it and then tidies the table, scaling every band by the ratio of the total to the sum, or dropping the difference into the largest group. Both of those produce numbers that no office published, both destroy the evidence that anything was ever wrong, and both look immaculate in a spreadsheet. A table that does not quite add up is telling you something. A table that has been made to add up is telling you nothing.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for a table whose parts do not add up',
      intro: 'Segment revenue against the total, headcount by department against payroll, categories against a grand sum: the parts almost never add exactly, and the response decides whether you keep any information. Practised on a district where one wijk is out by 28 and two are not.',
      body: [
        { kind: 'table', caption: 'What to do when the columns disagree', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Read the digits', 'Check which fields are rounded and to what unit before anything else', 'A convention mistaken for corruption', 'The rounding unit, which the next step needs'],
          ['Compute the bound', 'Number of rounded figures times half the unit', 'Probably rounding used as a conclusion', 'A threshold instead of a feeling'],
          ['Compare and split', 'Gaps inside the bound are closed, gaps outside it are open', 'Every discrepancy treated the same way', 'A short list of things actually worth chasing'],
          ['Never reconcile silently', 'Do not scale or absorb a residual without recording that you did', 'Fabricated figures indistinguishable from published ones', 'A table that can still be audited'],
          ['Report the gap as a field', 'Carry the difference through as data, not as a footnote', 'A discrepancy that vanishes at the next join', 'A warning that survives into every later view']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Everyone rounds their own pocket money to the nearest five before adding it up, and the class total does not match the real one. The children work out the largest the error could possibly be, and are usually surprised that it can be calculated at all.' },
          { h3: 'For teenagers', p: 'The three wijken in Python, a function that computes the rounding bound from the number of rounded fields, and a report that marks each gap as explained or open. The stretch: write the version that scales the bands to force agreement, run both, and describe exactly what information the tidy version threw away.' },
          { h3: 'For adults', p: 'A real reconciliation at work, where segments do not sum to a total. Adults usually find that somebody solved it years ago by adjusting the largest line, that nobody recorded it, and that the adjustment has been growing quietly ever since.' }
        ] },
        { kind: 'p', text: 'District population, area, governance, zones, crossings and development sites come from the stadsdeel entry; wijk populations, households, ages, areas, densities, dwellings, values, tenure and incomes come from the national statistics office pages for Volewijck, Buikslotermeer and Waterland. The band sums of 9,305, 12,030 and 2,365, the three gaps, the bound of 12.5, the district density of about 2,295 and the shares of about half the land and 2.1 percent of the people are this page adding and dividing published numbers, and are labelled as arithmetic wherever they appear.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From rounded pocket money to a report that marks its own open gaps',
    intro: 'The rung comes out of the free hour and what the learner can already do, never out of which side of the district the address is on.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Why does the total not match?', p: 'Children round, add, and find out how far wrong they could possibly be.', courses: ['kids-coding-blocks-masterclass', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Turning probably into a number', p: 'Learners compute the largest error a rounding rule can produce, and stop guessing.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 14 to 18', h3: 'Explained, or open', p: 'Teenagers write code that classifies every discrepancy against its bound and refuses to reconcile.', courses: ['complete-game-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The adjustment nobody logged', p: 'Adults trace a real reconciliation back to whoever first made the numbers agree.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will make the age bands add up. Why should a child in Noord learn to leave them broken?',
    intro: 'Because the mismatch is the only evidence that anything unusual happened, and tidying it deletes the evidence.',
    p1: 'Ask a tool to clean this table and it will do a competent job. It will notice the bands do not match the total, it will mention rounding, and it will very likely offer a corrected version in which they do match, scaled or adjusted so the arithmetic is clean. Every step of that is reasonable and the result is worse than what it started with, because the 28-person gap in one wijk was the single most informative thing in the whole dataset and it is now gone. Nothing in the tidying process is capable of noticing that.',
    p2: 'So the learner builds the version that measures instead of mends: count the rounded fields, work out the largest error rounding can produce, mark each gap as explained or open, and carry the difference forward as a column rather than dissolving it. That is a dozen lines of code protecting a habit. A thirteen-year-old in Buikslotermeer who has refused to force a table into agreement will, at twenty-nine, be the person who asks why the segments sum exactly when they never used to. Tools will keep offering the clean version. Deciding that the messy one is more truthful stays a person\'s job.',
    closer: 'The argument for a child in Amsterdam-Noord learning to code in 2026 is therefore not about statistics offices. It is that adult working life is full of tables whose parts do not quite add up, that the difference between a convention and a genuine fault is one minute of arithmetic, and that a district with one wijk out by 28 and two out by single figures makes the distinction impossible to forget.',
    blogAnchor: 'why a child should still learn to write code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes on the far side of the IJ',
    intro: 'Noord is separated from the rest of Amsterdam by water, and while the metro and the ferries have changed a great deal since 2018, a weekly evening class in the centre is still a crossing in each direction.',
    cells: [
      { h3: 'No crossing required', p: 'The lesson happens at home in the Van der Pekbuurt, on the Buikslotermeerplein or out in Durgerdam at a fixed hour each week, which removes the ferry, the metro and the tunnel from the arrangement entirely.' },
      { h3: 'English in the lesson, Dutch on the timetable', p: 'All teaching is in English. Groep, havo, vwo and profielkeuze are left in Dutch because those are the words the school itself uses, and translating them helps nobody.' },
      { h3: 'What the free hour settles', p: 'A level the learner has demonstrated rather than claimed, the course that follows from it, and a slot in the week. No payment details are asked for at any point in it.' },
      { h3: 'Grouped by stage, not by postcode', p: 'A learner from a polder village and a learner from a post-war block work together when they are at the same level, and separately when they are not.' },
      { h3: 'Twice a week, regio Noord holidays', p: 'Two live lessons a week at a repeating hour, normally eight in a month. Noord-Holland takes its school holidays with regio Noord, and weeks away are built into the plan before it starts.' },
      { h3: 'Three and a half hours ahead, four and a half in winter', p: 'Only the Dutch clock changes, so the gap to the teacher depends on the season. After school, early evening and both weekend days work at either setting.' }
    ],
    spec: { title: 'A district with more children than the centre and further to travel', p: 'Under-fifteens are 15 percent of Volewijck, 16 percent of Waterland and 12 percent of Buikslotermeer, which is a far fuller bottom to the population pyramid than the middle of Amsterdam has. What Noord does not have is short journeys: a family in a polder village is a long way from any specialist class, and the ones nearer the water are on the wrong side of it. A group assembled on ability and delivered down the line is indifferent to all of that, at every age up to sixty-seven.' }
  },

  fees: {
    h2: 'The fee, in dollars, the same on both sides of the district',
    intro: 'Set out here rather than saved for a phone call.',
    first: 'A whole lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'A single international rate applies, quoted in dollars, with no euro version, so Durgerdam is charged exactly what the Van der Pekbuurt is. Nothing is paid until the free lesson has fixed a course and an hour, and payment then goes over WhatsApp. Pausing, changing plan and missing a week are all described on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, printed the way the people who left them wrote them',

  book: {
    h2: 'Send the stage, not the side of the water',
    intro: 'The first task might be rounded pocket money that refuses to total, a function that computes how far wrong a rounding rule can push a sum, or a reconciliation at work that somebody quietly solved years ago.',
    success: 'Thank you. Your Amsterdam-Noord class request has been sent.'
  },

  faq: {
    h2: 'Amsterdam-Noord coding class questions',
    intro: 'The district, its wijken, its arithmetic, the teaching and the terms.',
    items: [
      { q: 'Why do the age groups in Volewijck add up to more people than live there?', a: 'Partly rounding and partly something this page cannot identify. The five published age bands add to 9,305 against a published population of 9,277, a gap of 28. Each band is rounded to the nearest five, so each can be up to two and a half from the truth and five of them can be up to twelve and a half out in total. A gap of 28 is more than twice that, so rounding alone does not account for it. Possible further causes include a different reference moment for the age table, a coarser rounding rule or an adjustment protecting small groups, and nothing read here settles which.' },
      { q: 'Do the other wijken have the same problem?', a: 'They have the same mismatch and a much smaller one. Buikslotermeer\'s bands add to 12,030 against 12,025, a gap of 5, and Waterland\'s add to 2,365 against 2,357, a gap of 8. Both sit comfortably inside the twelve and a half that rounding can produce, so in those two cases there is nothing to explain and nothing to chase.' },
      { q: 'Why are the figures rounded at all?', a: 'Because exact counts of small groups in small areas can identify individuals. In a village of a few hundred people, an exact number of children in one age band can point at particular households, so statistics offices blur those cells on purpose. It is a protection rather than a defect, which is why the right response is to measure how much it can explain rather than to report it as an error.' },
      { q: 'Is half of Amsterdam-Noord really countryside?', a: 'Close to it. The wijk called Waterland covers 2,774 hectares of which 2,467 are land, which is roughly half of the district\'s 49.01 square kilometres, and it holds 2,357 of the district\'s 112,500 residents at 96 people to the square kilometre. Its ten buurten are villages, among them Zunderdorp, Holysloot, Ransdorp, Durgerdam and Schellingwoude. Both of those shares are arithmetic on published figures rather than published figures themselves.' },
      { q: 'Is the class taught in Dutch?', a: 'No. Every lesson runs in English from start to finish. Dutch school vocabulary is deliberately kept as a Dutch school writes it, so groep, havo, vwo and profielkeuze are spoken rather than translated. There is no Dutch-language version of any course.' },
      { q: 'What hours suit a family in Noord?', a: 'The teacher is three and a half hours ahead during Dutch summer time and four and a half in winter, because only the Dutch clock moves. In practice the window runs from the end of the school day to mid-evening, with Saturday and Sunday fully open, and a single repeating weekly slot is agreed at the free lesson.' },
      { q: 'We are in one of the villages. Does the distance change anything?', a: 'Not for this. The lesson comes down the connection, so a family in Holysloot or Durgerdam gets the same hour, the same group and the same fee as one three minutes from the metro. Distance is the reason this format suits the northern half of the district better than almost anywhere else in the city.' },
      { q: 'Is there a Modern Age Coders classroom in Amsterdam-Noord?', a: 'No, and none is claimed in Noord, elsewhere in Amsterdam or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Amsterdam-Noord coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight in a month, in a group of five to ten. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before any payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or wijk. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Amsterdam and beyond',
    h2: 'South across the water, west along the Zaan, and out to the country',
    html: 'Across the IJ is <a class="cg-inline-link" href="/coding-classes-in-amsterdam-centrum">Amsterdam-Centrum</a>, whose page argues about a district less crowded than every wijk inside it, and the city page, <a class="cg-inline-link" href="/coding-classes-in-amsterdam">coding classes in Amsterdam</a>, carries the school-advice picture for all eight districts. West along the water lies <a class="cg-inline-link" href="/coding-classes-in-zaanstad">Zaanstad</a>, and the whole city sits inside <a class="cg-inline-link" href="/coding-classes-in-noord-holland">Noord-Holland</a>. Everything here descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner who wants trained models rather than running programs should start at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Settle this on WhatsApp'
  },

  footerHeading: 'Amsterdam and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-amsterdam', label: 'Amsterdam' },
    { href: '/coding-classes-in-amsterdam-centrum', label: 'Amsterdam-Centrum' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-anr .cg-hero-grid { align-items: start; gap: clamp(1.55rem, 3.9vw, 3rem); }
.cg-root.cg-anr .cg-hero h1 { font-weight: 500; letter-spacing: -0.011em; line-height: 1.13; }
.cg-root.cg-anr .cg-capsule { border-left-width: 7px; border-left-style: solid; padding-left: 1.6rem; }
.cg-root.cg-anr .cg-eyebrow { letter-spacing: 0.125em; font-weight: 600; }
.cg-root.cg-anr .cg-section-head h2 { max-width: 37ch; }
.cg-root.cg-anr .cg-grid-3 { gap: clamp(1.1rem, 2.35vw, 1.8rem); }
.cg-root.cg-anr .cg-card h3 { letter-spacing: -0.006em; }
.cg-root.cg-anr .cg-table th { letter-spacing: 0.06em; text-transform: uppercase; }
.cg-root.cg-anr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-anr .cg-ladder-col { border-bottom: 3px solid var(--cg-accent-soft); padding-bottom: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Stadsdeel Amsterdam-Noord, Noord-Holland: 112,500 residents on 1 January 2026 across 49.01 km2, the largest of the eight districts by area, about 2,295 per km2; roughly half the district is the wijk Waterland, 2,467 hectares of land holding 2,357 people at 96 per km2 across ten village buurten; zones Noord-West GN18, Oud-Noord GN19, Noord-Oost GN20; one of the first stadsdelen with an elected stadsdeelraad in 1981 alongside Osdorp, deelgemeente status until March 2014, dagelijks bestuur and directly elected stadsdeelcommissie today; separated from the city by the IJ, reached by the Coentunnels, the IJ-tunnel, ferries and metro line 52 since 2018; NDSM artists since the 1990s and Overhoeks on the former Shell ground. Regio Noord holidays. The district page argues from rounded components that do not sum to an unrounded total; Amsterdam-Centrum owns the aggregate-over-ground argument, the Amsterdam city page owns the doorstroomtoets rates and the 2055 projections.',
    localProject: 'Bound the explanation before you accept it. Every published age band and household count in this district is a multiple of five while the populations, dwelling counts and tenure counts are not, so the person-level breakdowns are rounded and the totals are exact. The bands therefore need not sum to the population, and in Buikslotermeer they exceed it by 5 and in Waterland by 8. Five figures each rounded to the nearest five can be at most 2.5 from the truth apiece, so their sum can be at most 12.5 out, which covers both. Volewijck\'s bands add to 9,305 against a published 9,277, a gap of 28, more than twice the bound, so rounding provably does not explain it and the page reports an open difference rather than choosing among the candidate causes: a different reference moment for the age table, a coarser rounding rule, or an adjustment protecting small cells. The damage comes from the middle path, scaling the bands or absorbing the residual into the largest group, which fabricates unpublished numbers and destroys the only evidence that anything happened. Distinct from precision propagation (Leeuwarden), which pushes an input interval through a formula, and from a missing value inside an aggregate (Al-Musanaah): here every value is present, the rounding rule is visible in the digits, and the mechanism is that independent rounding breaks additivity by a computable amount that can be tested against the observed gap.',
    requiredMentions: [
      '112,500',
      '9,277',
      '9,305',
      '12,025',
      '12,030',
      '2,357',
      '2,365',
      '2,467',
      '7,958',
      '435,000',
      '27,700',
      '982,000',
      'Volewijck',
      'Buikslotermeer'
    ],
    sources: [
      { claim: 'Amsterdam-Noord: 112.500 inwoners (1 januari 2026); oppervlakte 49,01 km2; Noord was in 1981, samen met Osdorp, een van de eerste Amsterdamse stadsdelen met een eigen gekozen stadsdeelraad; deelgemeente status held tot 19 maart 2014; het stadsdeel heeft tegenwoordig een dagelijks bestuur en een rechtstreeks gekozen stadsdeelcommissie; zones Noord-West (GN18), Oud-Noord (GN19) en Noord-Oost (GN20); Landelijk Noord with Ransdorp and Durgerdam; Amsterdam-Noord is van de rest van de stad gescheiden door het IJ, with the Coentunnels and IJ-tunnel; metrolijn 52 has stations Noord and Noorderpark and has connected Noord to Amsterdam-Zuid via Centraal Station since 2018; artists on the former NDSM site since the 1990s; a large part of the former Shell site on the northern IJ bank redeveloped as the woon- en werkwijk Overhoeks.', url: 'https://nl.wikipedia.org/wiki/Amsterdam-Noord' },
      { claim: 'Wijk Volewijck, Amsterdam: 9,277 inwoners (2026); 5,055 huishoudens averaging 1.9 (2025); 2,580 eenpersoonshuishoudens, 51 percent; ages 1,420 (0 to 15, 15 percent), 1,030 (15 to 25), 3,065 (25 to 45), 2,410 (45 to 65), 1,380 (65+); 131 hectare total, 119 land; bevolkingsdichtheid 7,958 per km2 (2025); 4,906 woningen (2025); average WOZ 435,000 euro (2025); 4,170 huurwoningen (85 percent) and 736 koopwoningen (15 percent); average income 27,700 euro per resident (2024); 3 buurten: Bloemenbuurt-Noord, Bloemenbuurt-Zuid, Van der Pekbuurt.', url: 'https://allecijfers.nl/wijk/volewijck-amsterdam/' },
      { claim: 'Wijk Buikslotermeer, Amsterdam: 12,025 inwoners (2026); 6,580 huishoudens averaging 1.8 (2025); 3,730 eenpersoonshuishoudens, 57 percent; ages 1,500 (0 to 15, 12 percent), 1,690 (15 to 25), 4,000 (25 to 45), 2,375 (45 to 65), 2,465 (65+); 155 hectare total, 151 land (2025); bevolkingsdichtheid 7,970 per km2 (2025); 5,886 woningen (2025); average WOZ 368,000 euro (2025); 4,179 huurwoningen (71 percent) and 1,707 koopwoningen (29 percent); average income 30,000 euro (2024); 6 buurten: Buikslotermeer-Noord, De Kleine Wereld, Loenermark, Buikslotermeerplein, Plan van Gool, Rode Kruisbuurt.', url: 'https://allecijfers.nl/wijk/buikslotermeer-amsterdam/' },
      { claim: 'Wijk Waterland, Amsterdam: 2,357 inwoners (2026); 1,000 huishoudens averaging 2.3 (2025); 315 eenpersoonshuishoudens, 32 percent; ages 375 (0 to 15, 16 percent), 280 (15 to 25), 410 (25 to 45), 805 (45 to 65), 495 (65+); 2,774 hectare total, 2,467 land (2025); bevolkingsdichtheid 96 per km2 (2025); 945 woningen (2025); average WOZ 982,000 euro (2025); 728 koopwoningen (77 percent) and 217 huurwoningen (23 percent); average income 43,800 euro (2023, a different year from the other two wijken); 10 buurten: Zunderdorp, Noorderstrook-West, Holysloot, Noorderstrook-Oost, Ransdorp, Zwarte Gouw, Schellingwoude-Noord, Schellingwoude-Oost, Schellingwoude-West, Durgerdam.', url: 'https://allecijfers.nl/wijk/waterland-amsterdam/' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'A cause for the part of the Volewijck gap that rounding cannot explain. Candidates are named and none is chosen, because nothing read settles it.',
      'Any reconciled age table. The bands are printed as published and are never scaled or adjusted to force agreement with the population.',
      'A district-level age, household, income or tenure figure. Three of the district\'s wijken were read and a partial average is not an average.',
      'Any comparison of the district density with wijk densities. The district area carries no land and water split, and that argument belongs to the Amsterdam-Centrum page.',
      'Figures for the wijken not read here, including IJplein and the Vogelbuurt, Nieuwendammerham, Banne Buiksloot, Nieuwendam-Noord, the three tuindorpen, Oostzanerwerf, Kadoelen, the Waterlandpleinbuurt, Buiksloterham and Overhoeks. They are named and given no numbers.',
      'Waterland\'s 2023 income compared directly with the 2024 incomes of the other two wijken. The years are stated and the comparison is not drawn.',
      'Anything the Amsterdam city page owns: the doorstroomtoets rates, the Centrale Loting en Matching figures and the 2055 district projections.'
    ]
  }
};
