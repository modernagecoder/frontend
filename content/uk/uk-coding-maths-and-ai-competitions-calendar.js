'use strict';
// UK coding, maths and AI competitions calendar (ag- competition hub, UK cluster Phase 1 preview).
// Every date and entry rule read at the organiser's own page on 20 September 2026:
// UKMT competitions page (2026-27 dates, MOG and MCG 22 September 2026 to JMO 15 June 2027);
// Primary Mathematics Challenge site (9 to 20 November 2026); olympiad.org.uk (BIO: a 3-hour test in
// schools during December and January, open to full-time pre-university students in mainland Britain,
// final in Cambridge, top four to the IOI); Raspberry Pi Foundation blog of 8 September 2026 (UK Bebras
// 2026: free, 45 minutes, ages 6 to 19); cipherchallenge.org (September 2026 to January 2027,
// registration from 24 September, University of Southampton); ukoai.org (free online test for UK
// secondary students; 2026 test 7 March 2026) and ioai-official.org (IOAI 2026 Astana, 2 to 8 August;
// IOAI 2027 Singapore, 4 to 10 July 2027; ukoai.org's "Abu Dhabi" contradicts the organiser and is not
// used); pctc.perse.co.uk (UK pupils up to Year 11 or S4, free; 2027 rounds 25 January to 5 February
// and 1 to 12 March, Sixth Form Gold Rush 15 to 19 March); astro-pi.org (2026/27, free, Mission Zero
// and Mission Space Lab, under 19, ESA with the Raspberry Pi Foundation); Scottish Mathematical Council
// (Scottish Mathematical Challenge, Enterprising Maths, Mathematiques sans Frontieres); sentinus.co.uk
// (Young Coder and Young Mathematician of the Year, under 19 on 1 July 2027, final Thursday 26 November
// 2026 at Ulster University, Belfast); EngineeringUK (Big Bang Competition free for 11 to 18; titles;
// next dates not published); Raspberry Pi Foundation (Coolest Projects UK 2026 in Bradford in May);
// LEGO Education (FIRST LEGO League ends after the 2026-2027 BIOGLOW season). Not confirmed and so not
// described: the Oxford University Computing Challenge (bebras.uk page returns an error), TeenTech (403),
// CyberFirst Girls (the NCSC page now shows only TechFirst), RoboCupJunior UK (not read).

// The list of competition pages is read from content/uk at build time, so this hub can never drift from
// the cluster: uk-ship.sh rebuilds it after every new UK page. Only modules whose page has been built
// are listed, and only those whose hub.group is 'competition'.
const path = require('path');
function competitionIndex() {
  const here = path.basename(__filename);
  const pages = require('../../scripts/nl/lib/uk-index.js').builtUkPages()
    .filter(m => m.file !== here && m.group === 'competition')
    .sort((a, b) => (a.label || a.routeLabel).localeCompare(b.label || b.routeLabel));
  if (!pages.length) return [];
  return [{
    id: 'pages', tint: 'deep', eyebrow: 'One page each',
    h2: 'A preparation page for every competition we could confirm',
    lede: 'Each page below is written for one competition: what the organiser actually asks for, what a learner should practise, and where the real past papers live.',
    body: [{ kind: 'p', html: pages.map(m => `<a class="ag-inline-link" href="/${m.slug}">${m.label || m.routeLabel}</a>`).join(' &middot; ') }]
  }];
}

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'COMPETITIONS', label: 'The 2026-27 competitions calendar', blurb: 'Every UK coding, maths and AI competition we could confirm for 2026-27, month by month, with who can enter.' },
  slug: 'uk-coding-maths-and-ai-competitions-calendar',
  code: 'ucc',
  accent: '#72641D',
  accentRationale: 'Competitions: a dark bronze from the solver (4.79:1 on every paper tint), a medal colour that sits apart from every other UK accent',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'UK coding, maths and AI competitions calendar',
  title: 'UK Coding, Maths and AI Competitions 2026-27 | Calendar',
  description: 'Every UK coding, maths and AI competition for 2026-27 we could confirm with the organiser: UKMT, BIO, Bebras, Cipher Challenge, UKOAI, PCTC and more, month by month.',
  ogDescription: 'The 2026-27 UK competition year in one table, from the Primary Mathematics Challenge to the International Olympiad in AI, with who can enter and how to prepare without cramming.',
  twitterDescription: 'UK coding, maths and AI competitions for 2026-27, month by month, checked with each organiser.',
  pageName: 'UK Coding, Maths and AI Competitions Calendar 2026-27',
  webPageDescription: 'A month-by-month calendar of UK coding, mathematics and AI competitions for the 2026-27 school year, with organisers, eligibility and preparation advice, checked at each organiser\'s own site.',
  courseDescription: 'Live online problem-solving, competitive programming, olympiad mathematics and AI classes that prepare UK learners for competitions without promising results.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Competitions calendar 2026-27',
  navLinks: [
    { href: '#calendar', label: 'The calendar' },
    { href: '#by-age', label: 'By age' },
    { href: '#who', label: 'Who can enter' },
    { href: '#prepare', label: 'Preparing' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; 2026 to 2027 &middot; Checked with each organiser',
  h1: 'UK coding, maths and AI competitions, 2026 to 2027',
  lede: 'The UK has a competition for almost every young mathematician and programmer, from a 45-minute puzzle challenge a six-year-old can do in class to the olympiads that choose national teams. They are run by different bodies, on different dates, with different rules about age, school year and nation, and no single official list brings them together. This page does. Each date below was read at the organiser\'s own website in September 2026. Where an organiser had not yet published next season\'s dates, the page says so rather than guessing, and competitions whose current arrangements we could not confirm are named at the end without details.',
  secondaryCta: { href: '#calendar', label: 'Go to the calendar' },
  wa: 'Hello Modern Age Coders, my child is interested in UK coding or maths competitions and I would like a free first class.',
  heroNote: 'Dates checked at each organiser &middot; No medal promises &middot; Original practice only',
  spec: [
    ['Covers', 'Coding, maths, AI, projects'],
    ['Season', 'September 2026 to July 2027'],
    ['Youngest', 'Age 6 upwards'],
    ['Oldest', 'Up to the end of school'],
    ['Nations', 'All four, each rule noted'],
    ['Sources', 'Organisers\' own sites'],
    ['Cost to enter', 'Many are free'],
    ['Our part', 'Teaching, never entering you']
  ],
  capsuleQ: 'In short',
  capsule: 'The 2026-27 UK competition year opens with UKMT\'s Mathematical Olympiad for Girls on 22 September 2026 and runs through the Senior Mathematical Challenge on 7 October, the Primary Mathematics Challenge from 9 to 20 November, UK Bebras in November, the British Informatics Olympiad over December and January, the Perse Coding Team Challenge from 25 January 2027, and the Junior Mathematical Olympiad on 15 June 2027. Beyond school, the UK Olympiad in AI chooses the team for the International Olympiad in AI, held in Singapore from 4 to 10 July 2027. Most of these are entered through a school, and many are free. We teach the problem solving, programming and mathematics underneath them in live online classes for ages 6 and up; we do not run or enter any competition, and we promise no results. A first class is free; groups are USD 100 a month and one-to-one USD 150.',

  picks: {
    eyebrow: 'Courses behind the competitions',
    h2: 'Three courses that train the thinking competitions reward',
    lede: 'Competitions test reasoning, not memory. These three build it at three stages.',
    items: [
      { course: 'maths-through-coding', code: 'COMP / 01', title: 'Maths through coding', note: 'For primary and lower secondary pupils: puzzles and patterns solved with small programs, good grounding for the Primary Mathematics Challenge and Bebras.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'COMP / 02', title: 'Olympiad mathematics', note: 'For the UKMT challenges and olympiads: written solutions, proof and the habit of checking every case.' },
      { course: 'competitive-programming-for-teens-course', code: 'COMP / 03', title: 'Competitive programming for teens', note: 'For the British Informatics Olympiad and team coding challenges: algorithms, timing and careful testing.' }
    ]
  },

  sections: [
    {
      id: 'calendar', tint: 'tint', eyebrow: 'The calendar',
      h2: 'The 2026-27 competition year, month by month',
      lede: 'Dates are as each organiser published them when we checked in September 2026. Most competitions are entered through a school, so a teacher usually registers pupils.',
      body: [
        { kind: 'table', caption: 'UK coding, maths and AI competitions with published dates, 2026-27', head: ['When', 'Competition', 'Run by', 'Who and how'], rows: [
          ['22 September 2026', 'Mathematical Olympiad for Girls; Mathematical Competition for Girls', 'UKMT', 'Two papers for girls, sat in school'],
          ['September 2026 to January 2027', 'National Cipher Challenge', 'University of Southampton', 'Registration opens 24 September; weekly codes to crack online'],
          ['Late September 2026, final 26 November 2026', 'Sentinus Young Innovators: Young Coder and Young Mathematician of the Year', 'Sentinus', 'Northern Ireland; entrants under 19 on 1 July 2027; final at Ulster University, Belfast'],
          ['7 October 2026', 'Senior Mathematical Challenge', 'UKMT', 'Senior pathway, sat in school'],
          ['A two-week window in November 2026', 'UK Bebras Challenge', 'Raspberry Pi Foundation', 'Free, 45 minutes, ages 6 to 19, sat in school'],
          ['9 to 20 November 2026', 'Primary Mathematics Challenge', 'Primary Mathematics Challenge', 'Primary pupils, sat in school'],
          ['18 November 2026', 'Andrew Jobbings Senior Kangaroo; British Mathematical Olympiad Round 1', 'UKMT', 'Follow-on rounds for strong senior entrants'],
          ['December 2026 and January 2027', 'British Informatics Olympiad, round one', 'British Informatics Olympiad', 'A 3-hour programming test sat in school'],
          ['20 January 2027', 'British Mathematical Olympiad Round 2', 'UKMT', 'By qualification from Round 1'],
          ['25 January to 5 February 2027', 'Perse Coding Team Challenge, round 1', 'The Perse School', 'Free, UK pupils up to Year 11 or S4; round 2 from 1 to 12 March'],
          ['27 January 2027', 'Intermediate Mathematical Challenge', 'UKMT', 'Intermediate pathway, sat in school'],
          ['15 to 19 March 2027', 'Sixth Form Gold Rush', 'The Perse School', 'The Perse challenge\'s round for sixth formers'],
          ['18 March 2027', 'Grey and Pink Kangaroo; Cayley, Hamilton and Maclaurin Olympiads; Primary Kangaroo', 'UKMT', 'Follow-on rounds by qualification'],
          ['5 May 2027', 'Junior Mathematical Challenge', 'UKMT', 'Junior pathway, sat in school'],
          ['15 June 2027', 'Junior Kangaroo; Junior Mathematical Olympiad', 'UKMT', 'Follow-on rounds from the Junior Challenge'],
          ['4 to 10 July 2027', 'International Olympiad in Artificial Intelligence, Singapore', 'IOAI', 'The UK team is chosen through the UK Olympiad in AI']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Some competitions run all year or had not set 2026-27 dates when we checked. The European Astro Pi Challenge 2026/27 is free for under-19s, with Mission Zero taking about an hour and Mission Space Lab two to six hours; it is an ESA Education project run with the Raspberry Pi Foundation. The Big Bang Competition is free for young people aged 11 to 18 and awards UK Young Engineer, Young Technologist and Young Scientist of the Year, but had not announced its next dates.',
            'The UK Olympiad in AI (UKOAI) is a free online test for secondary students living in the UK; the 2026 test was on 7 March 2026, and the 2026 International Olympiad in AI took place in Astana, Kazakhstan, from 2 to 8 August.'
          ],
          right: [
            'Coolest Projects UK, the Raspberry Pi Foundation\'s showcase, took place in Bradford in May 2026, and a 2027 event had not been dated. FIRST LEGO League, in LEGO Education\'s own words, comes to an end after the 2026-2027 BIOGLOW season; LEGO League starts in August 2027.',
            'Three we could not confirm and so do not describe: the Oxford University Computing Challenge, the TeenTech Awards and the CyberFirst Girls Competition, whose NCSC page now points to the government\'s TechFirst programme. Check with the organiser before planning around any of them.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://ukmt.org.uk/competitions" rel="noopener" target="_blank">UKMT competitions</a>; <a class="ag-inline-link" href="https://www.primarymathschallenge.org.uk/" rel="noopener" target="_blank">Primary Mathematics Challenge</a>; <a class="ag-inline-link" href="https://olympiad.org.uk/2026/index.html" rel="noopener" target="_blank">British Informatics Olympiad</a>; <a class="ag-inline-link" href="https://www.raspberrypi.org/blog/join-the-uk-bebras-challenge-2026/" rel="noopener" target="_blank">Raspberry Pi Foundation, UK Bebras 2026</a>; <a class="ag-inline-link" href="https://www.cipherchallenge.org/" rel="noopener" target="_blank">National Cipher Challenge</a>; <a class="ag-inline-link" href="https://pctc.perse.co.uk/" rel="noopener" target="_blank">Perse Coding Team Challenge</a>; <a class="ag-inline-link" href="https://ukoai.org/" rel="noopener" target="_blank">UK Olympiad in AI</a>; <a class="ag-inline-link" href="https://ioai-official.org/" rel="noopener" target="_blank">IOAI</a>; <a class="ag-inline-link" href="https://astro-pi.org/" rel="noopener" target="_blank">Astro Pi</a>; <a class="ag-inline-link" href="https://sentinus.co.uk/live-programmes/sentinus-young-innovators-2026/" rel="noopener" target="_blank">Sentinus Young Innovators 2026</a>; <a class="ag-inline-link" href="https://eukeducation.org.uk/our-programmes/the-big-bang-competition/" rel="noopener" target="_blank">EngineeringUK, the Big Bang Competition</a>; <a class="ag-inline-link" href="https://education.lego.com/en-us/lego-league/program-update/" rel="noopener" target="_blank">LEGO Education</a>. Read 20 September 2026.' }
      ]
    },
    {
      id: 'by-age', tint: 'deep', eyebrow: 'By age',
      h2: 'A first competition at six, an olympiad at seventeen',
      lede: 'Most learners do not jump straight to an olympiad. They start with something short and friendly, find they enjoy it, and move up.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Primary school', p: 'The Primary Mathematics Challenge and UKMT\'s Primary Kangaroo on the maths side, UK Bebras for computational thinking from age 6, and Astro Pi\'s Mission Zero, which takes about an hour. In Scotland, the Scottish Mathematical Challenge is open to upper primary pupils, mainly P7.' },
          { h3: 'Lower secondary', p: 'The Junior Mathematical Challenge and its follow-on rounds, the Perse Coding Team Challenge for pupils up to Year 11, the National Cipher Challenge, and Enterprising Maths in Scotland for teams drawn from S3 and S4.' },
          { h3: 'Upper secondary', p: 'The Intermediate and Senior Challenges, the Cayley, Hamilton and Maclaurin papers, the British Mathematical Olympiad, the British Informatics Olympiad, the UK Olympiad in AI, the Big Bang Competition, and Mathématiques sans Frontières in Scotland for S4 to S6.' }
        ] },
        { kind: 'p', text: 'The step between rungs is bigger than it looks. A multiple-choice challenge rewards quick, accurate reasoning; an olympiad asks for a written argument that would convince a sceptical reader; an informatics olympiad asks for a program that is correct on inputs the author never tried. Each step up needs a different habit, and the habits can be taught.' }
      ]
    },
    {
      id: 'who', tint: 'tint', eyebrow: 'Who can enter',
      h2: 'The rules differ by nation, age and school',
      lede: 'Read the eligibility line of any competition before planning around it. Some are open to the whole UK, some to part of it, and some depend on a school entering you.',
      body: [
        { kind: 'table', caption: 'Eligibility as each organiser states it', head: ['Competition', 'Who can enter, in the organiser\'s terms'], rows: [
          ['British Informatics Olympiad', 'Students in full-time pre-university education in mainland Britain'],
          ['UK Olympiad in AI', 'Secondary school students living in the UK'],
          ['Perse Coding Team Challenge', 'UK pupils up to Year 11 (S4 in Scotland); free'],
          ['UK Bebras Challenge', 'Students aged 6 to 19; free'],
          ['Astro Pi', 'Young people under 19; free'],
          ['Big Bang Competition', 'Young people aged 11 to 18; free'],
          ['Sentinus Young Innovators', 'Applicants under 19 on 1 July 2027; finals in Belfast'],
          ['Scottish Mathematical Challenge', 'Individual pupils in Scottish secondary schools and upper primary schools, mainly P7']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Notice the British Informatics Olympiad\'s phrase: mainland Britain. A family in Northern Ireland should check with the organiser before a child prepares for it, and look at Sentinus Young Innovators, which is based in Belfast and has a Young Coder of the Year category.'
          ],
          right: [
            'Most of the maths challenges are entered by schools. If a school does not take part, ask the organiser how else a pupil can sit the paper, rather than assuming there is no route.'
          ] }
      ]
    },
    {
      id: 'prepare', tint: '', eyebrow: 'Preparing well',
      h2: 'How to prepare without cramming or copying',
      lede: 'Good preparation looks like good learning: regular, varied and honest about what the learner can do alone.',
      body: [
        { kind: 'table', caption: 'Preparation that works, and what to avoid', head: ['Do', 'Why', 'Avoid'], rows: [
          ['Use the organiser\'s own past papers', 'They show the real style and difficulty, and they are the organiser\'s to share', 'Copied or reworded papers passed around online'],
          ['Solve, then write the reasoning down', 'Olympiads mark the argument, not just the answer', 'Checking only whether the final number matches'],
          ['Test programs on nasty inputs', 'Informatics rounds run hidden tests', 'Stopping when the sample input passes'],
          ['Work on a little each week', 'Problem solving grows slowly and stays', 'A cram in the last week'],
          ['Treat a low score as data', 'It shows which idea to learn next', 'Treating a result as a verdict on the child']
        ] },
        { kind: 'p', text: 'In our classes, practice problems are written fresh in the style of each competition, never copied from past papers, and learners are pointed to the organisers\' own archives for the real thing. We teach the mathematics and programming that competitions draw on; we do not register learners, we do not have any role in any competition named here, and we make no promise of scores, medals or selection.' }
      ]
    },
    {
      id: 'answer', tint: 'tint', eyebrow: 'Where we fit',
      h2: 'What live classes add, and what they cannot',
      lede: 'A competition is a good reason to learn more. It is not the only one, and a class should serve the learner either way.',
      body: [
        { kind: 'three', cells: [
          { h3: 'What classes add', p: 'A teacher who explains why a method works, weekly practice that builds on itself, and someone to read a written solution or a program and say where it breaks.' },
          { h3: 'What they cannot do', p: 'Enter a pupil for a school-based paper, guarantee a qualifying score, or replace the organiser\'s rules and instructions.' },
          { h3: 'When not to bother', p: 'If a learner is not enjoying it. The skills competitions test are worth having regardless, and a class can build them with no competition in view at all.' }
        ] }
      ]
    },
    ...competitionIndex()
  ],

  ladder: {
    eyebrow: 'Stepping up',
    h2: 'Five stages from a first puzzle to a national team',
    lede: 'Ages are rough. Learners move on when their work shows the next habit is in place.',
    table: { caption: 'From puzzles to olympiads', head: ['Roughly', 'Stage', 'The habit it builds'], rows: [
      ['Ages 6 to 9', '1. Puzzles', 'Reading a problem slowly and finding what it really asks'],
      ['Ages 9 to 12', '2. Challenges', 'Quick, careful reasoning under a time limit'],
      ['Ages 11 to 14', '3. First programs', 'Turning a method into code and testing it'],
      ['Ages 13 to 16', '4. Olympiad papers', 'Writing an argument or program that holds for every case'],
      ['Ages 15 to 18', '5. National selection', 'Depth, speed and calm on problems never seen before']
    ] },
    left: { h3: 'Skipping stages', ps: [
      'A strong twelve-year-old can sit an intermediate paper, and a beginner of sixteen can start at stage 2 and move quickly. What matters is the habit, not the birthday.',
      'The <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> shows the programming topics in order.'
    ] },
    right: { h3: 'Around the school year', ps: [
      'Autumn and late winter are busy on the calendar above. Learners often raise their practice for a few weeks before a round and ease off after it.',
      'Adults who enjoy puzzles use the same stages for their own sake.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for competition-minded learners',
    lede: 'Grouped by what they prepare for. Each card opens its syllabus, and a free class shows which fits.',
    bands: [
      { num: 'I', h3: 'Mathematics', sub: 'From puzzles to proof', courses: [
        { code: 'COMP / MATH / 01', slug: 'maths-through-coding', title: 'Maths with small programs', blurb: 'Patterns and puzzles explored in code, for primary and lower secondary pupils.' },
        { code: 'COMP / MATH / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'Written solutions for challenge and olympiad papers, checked case by case.' },
        { code: 'COMP / MATH / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for children', blurb: 'A first typed language, handy for Bebras-style thinking and simple simulations.' }
      ] },
      { num: 'II', h3: 'Programming contests', sub: 'Algorithms that survive hidden tests', courses: [
        { code: 'COMP / CODE / 01', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Contest problems, time limits and the discipline of testing edge cases.' },
        { code: 'COMP / CODE / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'The toolkit behind informatics olympiad problems, reasoned out on paper first.' },
        { code: 'COMP / CODE / 03', slug: 'competitive-programming-masterclass-college', title: 'Advanced competitive programming', blurb: 'For sixth formers and students aiming at the harder rounds.' }
      ] },
      { num: 'III', h3: 'Projects, AI and security', sub: 'For showcases, hackathons and AI rounds', courses: [
        { code: 'COMP / PROJ / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Models trained and evaluated honestly, the ground the AI olympiad covers.' },
        { code: 'COMP / PROJ / 02', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon preparation for teens', blurb: 'Building a working project fast, then presenting it clearly.' },
        { code: 'COMP / PROJ / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Defensive cyber security for teens', blurb: 'Ciphers, puzzles and safe, legal security thinking.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'The classes',
    h2: 'Weekly practice with a teacher who reads the working',
    lede: 'Lessons are live and online. India, where our teachers work, is five and a half hours ahead of the UK in winter and four and a half in summer, so most competition learners take a slot after school or at the weekend, fixed in UK time.',
    slots: [
      { time: 'After school', l: 'Short, regular problem sessions for primary and secondary pupils.' },
      { time: 'Weekend mornings', l: 'Longer blocks for olympiad papers and programming rounds.' },
      { time: 'Evenings', l: 'For sixth formers fitting practice around A levels or Highers.' }
    ],
    cells: [
      { h3: 'Written solutions read', p: 'The teacher reads the full argument or program, not just the final answer.' },
      { h3: 'Fresh practice problems', p: 'Written in each competition\'s style, never lifted from its papers.' },
      { h3: 'Small matched groups', p: 'Five to ten learners at a similar level, so explanations are shared and argued over.' },
      { h3: 'One to one for a target', p: 'For a learner aiming at a particular round with little time left.' },
      { h3: 'Honest feedback', p: 'Clear notes on what went wrong and which idea to learn next.' },
      { h3: 'Nothing promised', p: 'No scores, medals or selections are promised, because no teacher can deliver them.' }
    ]
  },

  projectsH2: 'Projects our students built',
  projectsLede: 'Four published examples of student work. There are more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What families wrote on Google, reproduced as it stands.',

  fees: {
    h2: 'Fees',
    lede: 'Monthly, in US dollars, as for every family outside India. Nothing to pay before the first class.',
    free: ['A real problem-solving lesson', 'A frank view of the right stage', 'No payment details'],
    group: ['Five to ten learners at one level', 'The same teacher every week', 'Solutions read and marked', 'A certificate at the end'],
    one: ['A teacher for one learner', 'Built around a target round', 'Suited to strong or late starters']
  },

  faq: {
    eyebrow: 'Questions about competitions',
    h2: 'What families ask about UK competitions',
    items: [
      { q: 'When is the Junior Mathematical Challenge in 2027?', a: 'UKMT lists the Junior Mathematical Challenge on 5 May 2027, with the Junior Kangaroo and Junior Mathematical Olympiad on 15 June 2027. The Intermediate Challenge is on 27 January 2027 and the Senior Challenge on 7 October 2026.' },
      { q: 'What is the British Informatics Olympiad?', a: 'A programming competition whose first stage is a 3-hour test taken in schools during December and January, open to students in full-time pre-university education in mainland Britain. It leads to a final and, for the top four, the International Olympiad in Informatics.' },
      { q: 'Is there a competition for young children?', a: 'Yes. UK Bebras is free and open from age 6, and takes 45 minutes in school; the Primary Mathematics Challenge runs from 9 to 20 November 2026; and UKMT\'s Primary Kangaroo is on 18 March 2027.' },
      { q: 'Is there an AI olympiad for UK students?', a: 'The UK Olympiad in AI is a free online test for secondary students living in the UK and selects the UK team for the International Olympiad in AI, which will be held in Singapore from 4 to 10 July 2027.' },
      { q: 'Can students in Northern Ireland enter the British Informatics Olympiad?', a: 'The organiser describes it as open to students in mainland Britain, so check with the organiser directly. Sentinus Young Innovators, based in Belfast, has a Young Coder of the Year category.' },
      { q: 'Is FIRST LEGO League still running?', a: 'LEGO Education says FIRST LEGO League comes to an end after the 2026-2027 BIOGLOW season, and that LEGO League begins in August 2027.' },
      { q: 'Do you enter students into competitions?', a: 'No. Most competitions here are entered by schools or directly with the organiser. We teach the mathematics, programming and problem solving they draw on, and we promise no results.' },
      { q: 'Do you use past papers in class?', a: 'We write fresh practice in each competition\'s style and point learners to the organisers\' own past papers, which remain theirs to publish.' },
      { q: 'What do classes cost?', a: 'The first class is free. After that it is USD 100 a month in a group of five to ten, or USD 150 a month one to one, with no fee to join and no annual contract.' },
      { q: 'When are lessons, in UK time?', a: 'At a fixed weekly slot agreed in the free class, usually after school or at the weekend. India is five and a half hours ahead of the UK in winter and four and a half in summer.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More on competitions and the UK',
    lede: 'Deeper pages on single competitions and on UK learning.',
    items: [
      { href: '/ukmt-maths-challenge-tutoring', label: 'UKMT maths challenge tutoring', p: 'The Junior, Intermediate and Senior Challenges in depth.' },
      { href: '/ioi-olympiad-informatics-training', label: 'International Olympiad in Informatics training', p: 'Where the British Informatics Olympiad leads.' },
      { href: '/coding-olympiad-medal-track', label: 'The coding olympiad track', p: 'How programming contests build on one another.' },
      { href: '/usaco-preparation-online-coaching', label: 'USACO preparation', p: 'An online contest many UK students also take.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The four school systems, and every UK page.' },
      { href: '/best-online-coding-classes-uk', label: 'Choosing an online class in the UK', p: 'Seven checks for any provider.' }
    ]
  },

  start: {
    h2: 'Start with a free problem-solving class',
    lede: 'Tell us the learner\'s age and which competitions interest them. The first class is a real session on the kind of problem those competitions set.',
    readFirst: 'Read first if you prefer: every <a class="ag-inline-link" href="/courses">course page</a> has a syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains the method, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> sets out the order of topics.',
    note: 'WhatsApp from a UK mobile is free and usually quickest. Our number is Indian, and we say so; there is no UK office.',
    formNote: 'No card needed. We reply once to arrange the class.'
  },

  footer: {
    cols: [
      { h4: 'Competitions', links: [
        { href: '/ukmt-maths-challenge-tutoring', label: 'UKMT challenges' },
        { href: '/ioi-olympiad-informatics-training', label: 'Informatics olympiad' },
        { href: '/coding-olympiad-medal-track', label: 'Coding olympiad track' },
        { href: '/usaco-preparation-online-coaching', label: 'USACO preparation' }
      ] },
      { h4: 'United Kingdom', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/best-online-coding-classes-uk', label: 'Choosing a class' },
        { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
        { href: '/best-coding-class-in-london', label: 'London' }
      ] }
    ],
    bottomRight: 'Competition dates checked with each organiser'
  },

  personalityCss: `
.ag-root.ag-ucc .ag-hero-grid { gap: clamp(1rem, 2.8vw, 2.4rem); }
.ag-root.ag-ucc .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-ucc .ag-capsule { border-left-width: 4px; }
.ag-root.ag-ucc .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ucc .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-ucc .ag-table td:first-child { font-weight: 700; }
.ag-root.ag-ucc .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-ucc .ag-slots { gap: 1rem; }
`,

  mustMention: ['Mathematical Olympiad for Girls', 'Andrew Jobbings Senior Kangaroo', 'Maclaurin', 'Pink Kangaroo', 'Mathématiques sans Frontières', 'Enterprising Maths', 'Young Coder of the Year', 'Mission Space Lab', 'Sixth Form Gold Rush', 'Astana', 'Ulster University', 'mainland Britain', 'UKOAI']
};
