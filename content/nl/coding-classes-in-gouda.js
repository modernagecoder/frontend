'use strict';
// Gouda: charter of 1272, cheese, candles, stroopwafels and clay pipes.
// 77,818 residents.
// Spine (modest, per the Phase 5 method): the encyclopaedia lists pipes among
// the things Gouda is known for making. Programmers have pipes too: small
// tools joined so that each one's output is the next one's input. Pipelines
// are powerful and fail quietly at the joints, so each stage has to be
// testable on its own and every joint has to be inspectable.

module.exports = {
  slug: 'coding-classes-in-gouda',
  code: 'gda',
  accent: '#123E6A',
  accentRationale: 'Gouda: a deep delft-ware navy for the town of plateel and pipes, placed by the solver more than twenty-seven units from every page it links to, with an unlinked district as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Gouda',
    eyebrow: 'Gouda, Zuid-Holland',
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
  routeLabel: 'Gouda, Netherlands',
  title: 'Coding Classes in Gouda | Modern Age Coders',
  description: 'Live, online coding, Python, AI and app classes for Gouda, ages 6 to 67, from the Binnenstad and Noord to Bloemendaal and Plaswijck. First lesson free.',
  ogDescription: 'Live online coding, Python, AI and mathematics in the town of cheese, candles and clay pipes, on a page about the pipes programmers build.',
  twitterDescription: 'Gouda classes for learners from 6 to 67, taught live online, starting with a free lesson.',
  ogImageCourse: 'python-ai-automation-masterclass-college',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Gouda Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Gouda, taught in English.'
  },

  h1: 'Coding classes in Gouda, a town once known for its pipes, and the pipes that programmers build',
  capsuleQ: 'What are the best coding classes in Gouda?',
  capsule: 'Gouda counted 77,818 residents on 1 January 2026, the national statistics show. Count Floris V granted its town rights in 1272, the town hall went up in stone between 1448 and 1450, and the encyclopaedia lists what the town is known for making: beer, candles, pipes, Gouds plateel and stroopwafels. Programmers make pipes as well. A pipe joins small tools so that each one\'s output flows into the next, and whole data systems and AI workflows are built that way. They are powerful, and they fail quietly at the joints, which is why every stage must work alone and every joint must be open to inspection. Modern Age Coders offers live online lessons in English for all ages from 6 to 67, with a free first lesson; after that, groups cost USD 100 a month and private lessons USD 150.',
  lead: 'A clay pipe carries smoke from one end to the other and hides what happens inside. A software pipe does much the same with data. On a command line, one small program reads a file, a second picks out the lines that matter, a third sorts them and a fourth counts them, each passing its result straight to the next through a pipe. It is one of the most elegant ideas in computing, dating from the 1970s, and it lives on in data pipelines, machine learning workflows and AI agents that chain one tool into another. It also has a characteristic weakness. When a stage in the middle quietly drops half the data, or fails outright, the stages after it carry on with whatever they were given, and the final result looks perfectly normal. Gouda, which the encyclopaedia names among the towns known for making pipes, is a good place to learn to look inside the joints.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Gouda.',

  picks: {
    eyebrow: 'Course picks for Gouda',
    h2: 'Four courses for the town of the Waag and the Sint-Janskerk',
    intro: 'A child in Noord who wants to build a game out of small pieces, a teenager in Plaswijck writing a script that tidies their music files, a student in the Binnenstad building a data pipeline for a project, and an adult in Bloemendaal whose weekly report passes through five tools before anyone reads it. The first lesson costs nothing, for all four.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Projects built from small blocks that each do one job, so a child learns to test one piece before joining it to the next.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python where small functions are chained together, and the child prints what passes between them.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Command-line tools, Python pipelines and AI tool chains built so that a failure anywhere stops the run instead of hiding.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reports that pass through several tools, traced stage by stage so the numbers at the end can be trusted.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Gouda today',
      h2: 'A charter of 1272, a weigh house of 1668, and the longest church in the country',
      intro: 'Gouda occupies 1,650 hectares of land and 161 of water, and at a published 4,637 residents to the square kilometre it is one of the most densely settled towns in this series. The statistics office divides it into nine wijken and 54 buurten, among them the Binnenstad, Noord, Bloemendaal and Plaswijck.',
      body: [
        { kind: 'table', caption: 'Gouda in the encyclopaedia, by date', head: ['When', 'What'], rows: [
          ['1272', 'Count Floris V granted town rights to Gouda'],
          ['1448 to 1450', 'the town hall was built of natural stone, after the last great town fire'],
          ['1668', 'the Waag was built, to a design by the architect Pieter Post'],
          ['Every Thursday', 'the weekly cheese market, kept on only as a tourist event'],
          ['Every year', 'the festival of light, Gouda bij Kaarslicht']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The Sint-Janskerk', p: 'At 123 metres it is the longest church building in the Netherlands, and it is best known for its stained-glass windows.' },
          { h3: 'What Gouda made', p: 'Beyond cheese, the encyclopaedia says the town is known for making beer, candles, pipes, Gouds plateel and stroopwafels.' },
          { h3: 'A dense town', p: 'More than 77,000 people live on under seventeen square kilometres of land. The Binnenstad sits within the ring of its old canals, with newer wijken such as Plaswijck and Bloemendaal beyond.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Pipes in code',
      h2: 'Small tools, joined end to end',
      intro: 'The idea behind a pipe is simple: many small programs, each doing one job well, connected so that data flows through them in turn. The example below is the kind a learner writes in an early lesson.',
      body: [
        { kind: 'table', caption: 'A four-stage pipe counting orders from one town in a file of orders', head: ['Stage', 'What it does', 'What it passes on', 'How it can fail quietly'], rows: [
          ['Read the file', 'opens the list of orders', 'every line of the file', 'a wrong file name gives an empty stream, not an error the later stages see'],
          ['Pick the lines', 'keeps lines that mention Gouda', 'only the matching lines', 'a case-sensitive match drops every line that says gouda'],
          ['Sort them', 'puts the lines in order', 'the same lines, sorted', 'a different text encoding sorts some names into the wrong place'],
          ['Count them', 'counts how many there are', 'a single number', 'none: it faithfully counts whatever it was given']
        ] },
        { kind: 'p', text: 'The last stage is the one people look at, and it is the one least likely to be wrong. It counts correctly every time. If the first stage read nothing, the count is zero; if the second dropped half the lines, the count is half the truth; and nothing in the number says which happened. Worse, in a common shell a pipeline reports the success or failure of its last command only, so a stage that failed in the middle can leave the whole pipe looking successful unless the programmer switches on the setting that reports failures anywhere. The lesson generalises far beyond the command line. Any chain of steps, whether a data pipeline, a machine learning workflow or an AI agent passing results from tool to tool, is only as trustworthy as its least examined joint.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Gouda in the national figures',
      intro: 'Numbers published for the municipality, each with its year; the history from the encyclopaedia; and at the end, the calculations made for this page.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Residents over time', p: '77,818 on 1 January 2026, 76,514 in 2025, 70,904 in 2013 and 70,440 in 1995, a rise the figures site puts at 10 percent. The 2025 count was 37,559 men and 38,955 women.' },
          { h3: 'By age in 2026', p: '11,861 under fifteen; 8,889 from fifteen to twenty-five; 21,153 from twenty-five to forty-five; 19,634 from forty-five to sixty-five; 16,281 at sixty-five or above.' },
          { h3: 'Households', p: '35,577 in 2025, averaging 2.11 people: 14,212 people living alone, 21,365 households of more than one, 11,282 of them with children.' },
          { h3: 'Dwellings and money', p: '35,205 dwellings in 2025, 19,715 owner-occupied and 15,490 rented; estimated average value 356,000 euro. Income averaged 34,500 euro per resident and 42,000 per income recipient in 2024, and 2.7 percent of residents were in poverty.' },
          { h3: 'Education', p: '31 primary establishments with 7,248 pupils, around 234 each, and 17 secondary establishments with 9,592 pupils, around 564 each. The site also lists 3,901 MBO, 1,540 higher professional and 920 university students at institutions in the town.' },
          { h3: 'Origin and the sums', p: 'In 2025, 63,373 residents were born in the Netherlands; by origin 52,918 were Dutch, 6,303 European and 17,293 from outside Europe. The origin, age, household and tenure splits were each added up only to confirm them. 77,818 minus 70,440 is 7,378; 7,248 over 31 is about 234 and 9,592 over 17 about 564.' }
        ] },
        { kind: 'p', text: 'There is no connection of any sort between Modern Age Coders and the municipality of Gouda, the Waag, the Sint-Janskerk, the cheese market or any school in the town, and none is implied. The statistics are those published for Gouda in the years listed. The charter, the town hall, the Waag, the church, the cheese market, the festival and the town\'s products come from the encyclopaedia entry for Gouda, which gives 77,803 residents for 1 January 2026 from a different source; that figure is not mixed with the statistics here.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Open every joint in the pipe',
      intro: 'Pipelines are how most real data work gets done. Three habits make them trustworthy, and a learner can practise all three with a text file and four commands.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Test each stage alone', p: 'Before joining anything, feed each small tool a tiny input whose correct output you already know. A stage that passes alone can still fail in company, but a stage that fails alone never needs to be joined.' },
          { h3: '2. Look at every joint', p: 'Save or print what passes between stages, at least the number of lines or records. A count that drops from 1,000 to 480 between two stages is a question to answer before anyone reads the final figure.' },
          { h3: '3. Make failures loud', p: 'Set the pipeline to stop when any stage fails, not only the last. A run that halts with an error is a nuisance; a run that finishes with a wrong answer is a hazard.' }
        ] },
        { kind: 'table', caption: 'The same weakness in bigger pipes', head: ['Pipeline', 'The quiet joint', 'What the end result hides', 'The habit that catches it'], rows: [
          ['A command-line one-liner', 'a failing middle command', 'that most of the data never arrived', 'reporting failures from every stage'],
          ['A nightly data pipeline', 'a join that silently drops unmatched rows', 'customers missing from every report', 'row counts logged at each step'],
          ['A machine learning workflow', 'preprocessing run differently in training and in use', 'a model fed data unlike what it learned from', 'the same pipeline object used in both'],
          ['An AI agent chaining tools', 'a tool that returns an error message as text', 'a confident answer built on the error', 'checking each tool result before the next step'],
          ['A clay pipe', 'whatever happens inside the stem', 'everything but the smoke', 'looking through it']
        ] },
        { kind: 'callout', h3: 'Why AI agents are pipelines, and why that matters', p: 'An AI agent that searches, reads, calculates and writes is a pipeline with a language model at every joint. The output of one step becomes the input of the next, and the model at each joint is very good at producing fluent text from whatever it receives. That is the danger. If a search step returns nothing, or a calculation tool returns an error message, the next step may simply write around it, and the final answer arrives polished and wrong, with no sign of the broken joint inside. The remedies are the pipeline habits, applied to a new kind of stage: test each tool on its own, record what passes between steps so it can be inspected afterwards, make a failure at any step stop the chain rather than be smoothed over, and never judge the pipe by the quality of the prose that comes out of the end. Gouda\'s own pipes carried smoke; the ones learners build here carry data, and the skill is the same one a pipe-maker needed: knowing that what matters is what happens inside.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five rules for chains of small tools',
      intro: 'For command lines, data pipelines, machine learning workflows and AI agents. Learned in a town whose trades once included pipe-making.',
      body: [
        { kind: 'table', caption: 'Building pipes that fail where you can see them', head: ['Rule', 'Put into practice', 'What it rules out', 'What remains'], rows: [
          ['One job per stage', 'Keep each step small enough to test on its own', 'Stages too big to understand', 'Parts you can trust'],
          ['Counts at every joint', 'Log how many records pass between stages', 'Silent loss in the middle', 'A visible flow'],
          ['Fail anywhere, stop everywhere', 'Configure the run to halt on any stage\'s error', 'Wrong results from half-failed runs', 'Errors you notice'],
          ['Same pipe, train and use', 'Keep preprocessing and model together as one object', 'A model fed different data in use', 'Consistent behaviour'],
          ['Keep intermediate results', 'Save what each stage produced for the last run', 'No way to find where it broke', 'Debugging in minutes']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A chain of three small Scratch scripts that pass a message along like a relay. The child breaks the middle one on purpose and watches what reaches the end.' },
          { h3: 'For teenagers', p: 'A four-command pipe on a real text file, then the same task in Python with a line count printed at every joint. The teenager finds the stage that loses data and fixes it.' },
          { h3: 'For adults', p: 'A weekly report traced back through every tool it passes, with the record count at each step written down. Adults often find a step that has been dropping rows for months.' }
        ] },
        { kind: 'p', text: 'This section uses the encyclopaedia\'s mention of pipes among Gouda\'s products only as an image, alongside standard practice in programming. It says nothing about how Gouda\'s pipes were made.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a relay of three scripts to an AI chain that stops when a tool fails',
    intro: 'Where a learner starts is decided by the free lesson, from how they handle a real task. A birthday or a wijk does not decide it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Pass it along', p: 'Children chain small scripts and see what a broken link does.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Print the joints', p: 'Learners chain functions in Python and print what passes between them.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Find the leak', p: 'Teenagers trace a pipeline that loses data and fix the stage.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Chains that halt', p: 'Adults build tool chains and AI workflows that stop on any failure.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can chain five tools in one reply. Why should a teenager in Gouda look inside every joint?',
    intro: 'Because a pipe that hides what happens inside can deliver a perfect-looking answer from a broken middle.',
    p1: 'AI assistants increasingly act as pipelines: search, then read, then compute, then write. Each step hands its result to the next, and the language model at every joint is built to produce smooth, confident output from whatever it gets. When a step fails, the failure is often absorbed rather than reported. An empty search becomes a general answer; an error message becomes a sentence. The final reply reads well, and nothing in it shows that the chain broke halfway.',
    p2: 'A learner who has built a four-stage pipe, broken the middle stage on purpose and seen the final count stay plausible, stops judging pipelines by their output. Testing each stage, recording what passes between them and making every failure loud are choices a person makes when designing the chain. A model can run the chain. Deciding that it must stop when something inside goes wrong is a human decision.',
    closer: 'So the case for a child in Gouda learning to code in 2026 is not the cheese or the candles. It is that someone who opens every joint in a pipe will be needed wherever AI chains tools together and hands back a polished result.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live lessons for every part of Gouda',
    intro: 'From the canal ring of the Binnenstad to the newer wijken beyond, Gouda is compact, and an online lesson makes even a short journey unnecessary.',
    cells: [
      { h3: 'Straight from home', p: 'A learner in Bloemendaal and a learner in Noord join the same session at the same minute, each at their own desk, with no bike ride through the evening and no waiting outside afterwards.' },
      { h3: 'The school system untranslated', p: 'Words like brugklas, havo, vwo, vmbo, groep and profielkeuze are left in Dutch, as on any Gouda school report, while explanations come in English.' },
      { h3: 'A free lesson with substance', p: 'The opening lesson works through a real task. Afterwards the teacher suggests a level, a course and a weekly time, and asks for nothing: no card, no deposit.' },
      { h3: 'Classmates who match', p: 'Groups have five to ten learners at one stage of one subject. Gouda has 11,861 residents under fifteen, but five at an identical stage who are free at an identical hour is rare, so groups draw on several countries.' },
      { h3: 'Regio Midden calendar', p: 'Twice a week, about eight times a month, at one set time, with breaks for the regio Midden school holidays that Gouda follows.' },
      { h3: 'Teachers a few hours ahead', p: 'The teachers work from India, three and a half hours later than the Dutch clock in summer and four and a half in winter, which suits after-school, evening and weekend-morning lessons.' }
    ],
    spec: { title: 'Forty-eight schools in a small town, and one group made online', p: 'Gouda has 31 primary establishments teaching 7,248 pupils and 17 secondary establishments teaching 9,592. A coding group needs five learners who match on subject, stage and hour, and across all ages from 6 to 67 and many countries that match is much easier to make than inside one town.' }
  },

  fees: {
    h2: 'What Gouda families pay',
    intro: 'Here is the whole price list.',
    first: 'A real lesson on a real task, ending with a level and a course that suits it.',
    group: 'Per month, normally eight lessons, five to ten learners grouped by level.',
    private: 'Per month, normally eight lessons, one learner and one teacher.',
    closer: 'Every country pays the same dollar price and there is no separate euro list, so a household in Plaswijck pays what one in the Binnenstad pays. Nothing is charged until the free lesson has settled a course and a time; payment is then set up on WhatsApp. For pauses, a switch of format or missed lessons, see the pricing page.'
  },

  reviewsH2: 'Six Google reviews, as their writers posted them',

  book: {
    h2: 'What can the learner do so far?',
    intro: 'The first task might be a relay of three small scripts, a chain of Python functions with every joint printed, or a pipe of four commands that has to find the stage that loses data.',
    success: 'Thank you. Your Gouda class request has been sent.'
  },

  faq: {
    h2: 'Gouda coding class questions',
    intro: 'The town, its trades, its figures, and how the lessons work.',
    items: [
      { q: 'Which wijken does Gouda have?', a: 'The statistics office divides Gouda into nine wijken and 54 buurten, among them the Binnenstad, Noord, Bloemendaal and Plaswijck.' },
      { q: 'How many people live in Gouda?', a: 'The national count was 77,818 on 1 January 2026, in 35,577 households in 2025. In 1995 it was 70,440, and the figures site puts the rise since then at 10 percent.' },
      { q: 'When did Gouda become a town?', a: 'Count Floris V granted Gouda its town rights in 1272. The stone town hall followed between 1448 and 1450, after the last great town fire, and the Waag in 1668, designed by Pieter Post.' },
      { q: 'What is Gouda known for besides cheese?', a: 'According to the encyclopaedia, the making of beer, candles, pipes, Gouds plateel and stroopwafels, and the yearly festival of light, Gouda bij Kaarslicht. The weekly Thursday cheese market is now kept on as a tourist event.' },
      { q: 'How long is the Sint-Janskerk?', a: 'At 123 metres it is the longest church building in the Netherlands, and it is best known for its stained-glass windows, according to the encyclopaedia.' },
      { q: 'How many schools are there in Gouda?', a: 'The statistics count 31 primary establishments with 7,248 pupils and 17 secondary establishments with 9,592, plus 3,901 MBO, 1,540 higher professional and 920 university students at institutions in the town. No school is rated here.' },
      { q: 'Which language are lessons in, and at what hours?', a: 'Lessons are in English, with Dutch school terms like havo and vwo kept as they are. The teaching team works in India, three and a half hours ahead of Gouda in summer and four and a half in winter, so after-school, evening and weekend slots are all easy. The slot is chosen in the free lesson, and lessons pause for the regio Midden holidays.' },
      { q: 'Is there a Modern Age Coders classroom in Gouda?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Gouda coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Groene Hart and beyond',
    h2: 'Between Rotterdam and Utrecht, and across the province',
    html: 'Gouda sits between two big cities with their own pages, <a class="cg-inline-link" href="/coding-classes-in-rotterdam">coding classes in Rotterdam</a> and <a class="cg-inline-link" href="/coding-classes-in-utrecht">Utrecht</a>. To the north, <a class="cg-inline-link" href="/coding-classes-in-alphen-aan-den-rijn">Alphen aan den Rijn</a> has a page too, and all of the province is gathered on <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. A learner who wants machine learning straight away can start at the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the whole series is on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Gouda, Zuid-Holland and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-rotterdam', label: 'Rotterdam' },
    { href: '/coding-classes-in-zuid-holland', label: 'Zuid-Holland' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-gda .cg-hero-grid { grid-template-columns: 1.03fr 0.97fr; align-items: center; gap: clamp(1.1rem, 2.9vw, 2.35rem); }
.cg-root.cg-gda .cg-hero h1 { font-weight: 650; letter-spacing: -0.019em; line-height: 1.07; }
.cg-root.cg-gda .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.25rem; }
.cg-root.cg-gda .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-gda .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.015em; }
.cg-root.cg-gda .cg-grid-3 { gap: clamp(1rem, 2.4vw, 1.9rem); }
.cg-root.cg-gda .cg-card { border-radius: 6px; border-top: 4px solid var(--cg-accent-soft); }
.cg-root.cg-gda .cg-table caption { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-gda .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gda .cg-table td:nth-child(4) { font-weight: 600; }
.cg-root.cg-gda .cg-ladder-col { border-left: 3px solid var(--cg-accent-soft); padding-left: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Gouda, Zuid-Holland: 77,818 residents (statistics, 1 January 2026), 76,514 (2025), 70,904 (2013), 70,440 (1995), growth given by the site as 7,378 or 10 percent; 37,559 men and 38,955 women (2025); ages (2026) 11,861 under fifteen, 8,889 fifteen to twenty-five, 21,153 twenty-five to forty-five, 19,634 forty-five to sixty-five, 16,281 sixty-five or over; 35,577 households (2025) averaging 2.11, 14,212 one-person, 21,365 multi-person, 11,282 with children; 1,811 hectares, 1,650 land, 161 water, published density 4,637; 35,205 dwellings (2025), 19,715 owner-occupied at 56 percent, 15,490 rented at 44 percent; estimated average value 356,000 euro; income 34,500 euro per resident and 42,000 per recipient (2024); 2.7 percent in poverty; 63,373 born in the Netherlands, origin 52,918 Dutch, 6,303 European, 17,293 non-European (2025); 9 wijken including Binnenstad, Noord, Bloemendaal, Plaswijck, and 54 buurten; 31 primary establishments with 7,248 pupils, 17 secondary with 9,592; 3,901 MBO, 1,540 HBO and 920 WO students at institutions. Encyclopaedia: in 1272 Count Floris V granted town rights; the weekly Thursday cheese market kept on only as a tourist phenomenon; the Waag built in 1668 to a design by Pieter Post; the Sint-Janskerk at 123 metres the longest church building in the Netherlands, known for its stained-glass windows; the town hall built of natural stone after the last great town fire, between 1448 and 1450; known for making beer, candles, pipes, Gouds plateel and stroopwafels; the annual festival of light Gouda bij Kaarslicht; infobox 77,803 on 1 January 2026, 18.11 square kilometres, 16.50 land, 1.61 water, not combined with the statistics. Regio Midden holidays. The city page teaches pipelines and silent failures at their joints.',
    localProject: 'A pipe is only as trustworthy as its least examined joint. The encyclopaedia lists pipes among the things Gouda is known for making; the page uses this only as an image for software pipes, small tools joined so that each output feeds the next. A four-stage example (read, pick, sort, count) shows how the last and most visible stage is the least likely to be wrong while earlier stages fail quietly: an empty stream from a wrong file name, a case-sensitive match that drops lines, an encoding that mis-sorts, and a shell pipeline that by default reports only its last command\'s status. The same weakness appears in nightly data pipelines (joins that drop unmatched rows), machine learning workflows (preprocessing that differs between training and use) and AI agents chaining tools (an error returned as text and written around). The defences are one job per stage tested alone, counts logged at every joint, failure anywhere stopping the run, one pipeline object for training and use, and keeping intermediate results. A programming-practice point rather than a statistical fallacy. Chosen after a case-sensitive check found no page using Unix or pipes in this sense. Distinct from Hengelo, which concerns what a cleaning filter should remove for a given question, from Oss, which concerns reused data fields, and from Lelystad, which concerns single points of failure.',
    requiredMentions: [
      '70,440',
      '70,904',
      '35,577',
      '14,212',
      '11,282',
      '35,205',
      '15,490',
      '7,248',
      '9,592',
      '16,281',
      'Pieter Post',
      'Kaarslicht',
      'plateel',
      'Plaswijck'
    ],
    sources: [
      { claim: 'Gemeente Gouda: 77,818 inwoners (2026), 76,514 (2025), 70,904 (2013), 70,440 (1995), growth 7,378 (10 percent); mannen 37,559, vrouwen 38,955; ages 0-15 11,861, 15-25 8,889, 25-45 21,153, 45-65 19,634, 65+ 16,281; 35,577 huishoudens, 14,212 eenpersoons (40 percent), 21,365 meerpersoons, 11,282 met kinderen (32 percent), gemiddeld 2.11; 1,811 hectare, land 1,650, water 161; bevolkingsdichtheid 4,637; woningvoorraad 35,205, koop 19,715 (56 percent), huur 15,490 (44 percent) (2025); gemiddelde WOZ 356,000 euro; gemiddeld inkomen per inwoner 34,500 and per inkomensontvanger 42,000 euro (2024); personen in armoede 2.7 percent; basisonderwijs 31 vestigingen 7,248 leerlingen, voortgezet onderwijs 17 vestigingen 9,592 leerlingen, MBO 3,901, HBO 1,540, WO 920; geboren in Nederland 63,373, herkomst Nederland 52,918, Europa 6,303, buiten Europa 17,293 (2025); 9 wijken including Binnenstad, Noord, Bloemendaal, Plaswijck; 54 buurten.', url: 'https://allecijfers.nl/gemeente/gouda/' },
      { claim: 'Gouda (encyclopaedia): In 1272 verleende Graaf Floris V stadsrechten aan Gouda. De wekelijkse kaasmarkt op donderdag bleef alleen als toeristisch fenomeen gehandhaafd. De Waag werd gebouwd in 1668 naar een ontwerp van architect Pieter Post. De Sint-Janskerk is met 123 meter het langste kerkgebouw van Nederland en is vooral bekend vanwege de gebrandschilderde ramen. Het stadhuis, gebouwd uit natuursteen na de laatste grote stadsbrand tussen 1448 en 1450. Ten slotte geniet Gouda bekendheid door de fabricage van bier, kaarsen, pijpen, Gouds plateel, stroopwafels. Het jaarlijkse lichtfeest Gouda bij Kaarslicht. Infobox: 77.803 inwoners (1 jan 2026), 18,11 km2 (16,50 land, 1,61 water).', url: 'https://nl.wikipedia.org/wiki/Gouda' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any account of how Gouda clay pipes were made or of the pipe-making trade beyond the encyclopaedia\'s list.',
      'Any comparison of 9,592 secondary pupils at establishments in Gouda with residents of secondary-school age. Pupils at located schools against resident pupils is the Utrecht argument.',
      'The number of stained-glass windows in the Sint-Janskerk. Not in the sentence read.',
      'Any claim that the stone town hall was built because of the fire. The source places it after the last great fire, and the page says only that.',
      'Any comparison of the encyclopaedia figure of 77,803 with the statistics figure of 77,818. Two sources that disagree is the Breda argument.',
      'Anything the Rotterdam, Utrecht, Alphen aan den Rijn and Zuid-Holland pages own, including their figures and arguments.'
    ]
  }
};
