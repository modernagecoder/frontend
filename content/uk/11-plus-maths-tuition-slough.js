'use strict';
// 11 plus maths tuition in Slough (ag- maths door by area, UK cluster Phase 6).
// Read on 26 September 2026 by curl, quotes grepped from the raw text:
//  - Slough Borough Council, secondary school admissions: for grammar schools a child "must take the 11+ entrance exam
//    and reach the required minimum mark"; "Slough's 11+ process is overseen by the Slough Consortium of Grammar
//    Schools and is entirely independent from Slough Borough Council".
//  - Slough Consortium of Grammar Schools, Parents' 11+ Examination Briefing, April 2026, summary of questions and
//    answers (PDF hosted by Langley Grammar School): register once with the consortium for all four schools; no charge;
//    the four grammar schools are the test centres; "own contract with GL Assessment"; "2 papers, each taking 60 to 65
//    minutes"; "One paper contains questions covering Maths and Non-verbal Reasoning and the other paper covers Verbal
//    skills"; elsewhere "Each paper consists of a mixture of the three elements"; "We do not publish the weighting";
//    number of questions varies; "All questions are multiple-choice"; separate answer sheet, scanned; white space in
//    booklets and spare paper for rough work; no negative marking; "Children can wear an analogue watch if they wish
//    to. No smartwatches are permitted. The exam room will also have a clock easily visible."; "The standardised score
//    has a midpoint of 100"; "a score of 111 means that the child falls in the top 35% of the range"; GL practice
//    papers "are not specifically for the Slough examination"; PANs Langley 180, Herschel 150, St Bernard's 150, Upton
//    Court 165 (not used).
//  - Slough Consortium registration portal (applicaa): registration for September 2027 entry "available from 10am on
//    Friday 1st May 2026 until Friday 5th June 2026 at 10am"; "The examination will be held on Saturday 19th September
//    2026".
//  - Herschel Grammar School, Year 7 Admissions 2028: consortium = Herschel, Langley, St Bernard's Catholic, Upton Court;
//    Quest Assessments contracted for the examination in September 2027; "structure and format ... will be similar";
//    "The eligibility score will continue to be set at 111"; free GL familiarisation downloads (2027 cycle).
//  - National curriculum in England, mathematics: Year 5 "solve problems involving converting between units of time";
//    "complete, read and interpret information in tables, including timetables".
// Spine: Slough lets children wear an analogue watch and gives 60 to 65 minutes a paper; time itself is the topic.
// Lesson family: elapsed time, analogue and 24-hour reading, timetables (our own timetable).

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'SLOUGH CONSORTIUM', label: '11 plus maths in Slough', blurb: 'Slough allows an analogue watch in the exam room. Reading it well, and the Year 5 maths of time, is a skill worth teaching.' },
  slug: '11-plus-maths-tuition-slough',
  code: 'slm',
  accent: '#6B5730',
  accentRationale: 'Slough 11 plus maths: an ochre brown, chosen by colour distance from every accent on the site (5.58:1 on the darkest paper tint)',
  pageType: 'governorate',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Slough',
  title: '11 Plus Maths Tuition Slough | Consortium 11+ Maths Online',
  description: 'Live online 11 plus maths for the Slough Consortium test: the paper as the four grammar schools publish it, the 2028 switch to Quest, and Year 5 time maths.',
  ogDescription: 'The Slough Consortium lets children wear an analogue watch in its 11 plus. How to use it, and the Year 5 maths of time and timetables behind many questions.',
  twitterDescription: 'Slough 11 plus maths, taught live online: Year 5 maths, time and timetables, and a watch used well.',
  pageName: '11 Plus Maths Tuition in Slough',
  webPageDescription: 'Live online mathematics teaching for children preparing for the Slough Consortium of Grammar Schools 11+ examination, based on what the consortium, its schools and Slough Borough Council publish.',
  courseDescription: 'Live online maths classes for children in Years 4 and 5 preparing for the Slough Consortium 11+, teaching the Year 5 curriculum, including time and timetables, for a multiple-choice paper.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus maths in Slough',
  navLinks: [
    { href: '#consortium', label: 'The exam' },
    { href: '#score', label: 'The 111 line' },
    { href: '#time', label: 'Time maths' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Slough &middot; Slough Consortium 11+ maths &middot; Live online, small groups or one to one',
  h1: '11 plus maths tuition in Slough',
  lede: 'Among the answers the Slough Consortium of Grammar Schools gave parents in its April 2026 briefing is one that most families skim past: "Children can wear an analogue watch if they wish to. No smartwatches are permitted." Each of the two papers takes 60 to 65 minutes, the number of questions is not published and varies from year to year, and there is a clock on the wall. A child who can glance at a watch and know, instantly, how much of the paper is left has a real advantage over one who has to work it out. That skill is ordinary Year 5 maths: reading time, working out elapsed time, converting between units of time and reading timetables. This page sets out what the consortium publishes about its examination, including the change of provider for children now in Year 5, and then teaches the maths of time.',
  secondaryCta: { href: '#time', label: 'See the time lesson' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my child for the Slough 11 plus.',
  heroNote: 'Maths only &middot; We do not teach verbal or non-verbal reasoning &middot; No connection with the Slough Consortium',
  spec: [
    ['Schools', 'Herschel, Langley, St Bernard\'s, Upton Court'],
    ['Run by', 'Slough Consortium of Grammar Schools'],
    ['Provider', 'GL for 2027 entry; Quest from 2028 entry'],
    ['Papers', 'Two, 60 to 65 minutes each'],
    ['Maths', 'With non-verbal reasoning, multiple choice'],
    ['Eligibility score', '111, the top 35%'],
    ['On the wrist', 'An analogue watch is allowed'],
    ['We teach', 'Year 5 maths, time included']
  ],
  capsuleQ: 'In short',
  capsule: 'Slough\'s four grammar schools, Herschel, Langley, St Bernard\'s Catholic and Upton Court, share one 11+ examination run by the Slough Consortium of Grammar Schools, independently of Slough Borough Council. Families register once, free of charge. The consortium describes two multiple-choice papers of 60 to 65 minutes, one covering maths and non-verbal reasoning and the other verbal skills, with no negative marking and rough work allowed. A standardised score of 111 or above, which the consortium says marks the top 35% of those tested, makes a child eligible to be considered. For September 2027 entry registration ran from 1 May to 5 June 2026 and the test was on Saturday 19 September 2026. From the September 2027 sitting, Quest Assessments replaces GL, with a similar structure and the same 111 line. We teach the maths, live online. The opening lesson is free, and from then on it is USD 100 a month for a group or USD 150 a month one to one.',

  picks: {
    eyebrow: 'Starting points in Slough',
    h2: 'Three courses for the consortium maths',
    lede: 'Pick by what slows your child down, not by the number of practice papers done.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'SLOUGH / 1', title: '11 plus maths, Slough-ready', note: 'The Year 5 curriculum for a multiple-choice paper, with time and timetables taught properly.' },
      { course: 'mental-maths-mastery-kids', code: 'SLOUGH / 2', title: 'Quick-thinking arithmetic', note: 'Fast recall so that the watch shows time to spare, not time running out.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'SLOUGH / 3', title: 'Secure primary maths', note: 'For a Year 4 child who still needs place value and tables to settle.' }
    ]
  },

  sections: [
    {
      id: 'consortium', tint: 'tint', eyebrow: 'The consortium exam',
      h2: 'What the Slough Consortium publishes',
      lede: 'Slough Borough Council says the 11+ is run entirely by the consortium. The consortium\'s April 2026 briefing answers, published by its schools, are the fullest source. Read on 26 September 2026.',
      body: [
        { kind: 'table', caption: 'The Slough Consortium 11+ for September 2027 entry, and what is announced for 2028 entry', head: ['', 'September 2027 entry', 'September 2028 entry'], rows: [
          ['Registration', '10am, 1 May to 10am, 5 June 2026', 'Not yet published'],
          ['Examination', 'Saturday 19 September 2026', 'September 2027'],
          ['Provider', 'GL Assessment', 'Quest Assessments'],
          ['Format', 'Two multiple-choice papers, 60 to 65 minutes each', '"Similar to those used under the previous provider"'],
          ['Eligibility score', '111 or above', '"Will continue to be set at 111"']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The briefing describes one paper as covering "Maths and Non-verbal Reasoning" and the other as verbal skills; in answer to a different question it says "Each paper consists of a mixture of the three elements". Either way, maths shares its time with non-verbal reasoning. The consortium does not publish the weighting of the elements or the number of questions, which "may vary from year to year".',
            'Answers go on a separate sheet that is scanned and marked by software. There is no negative marking. Children may use "any white space in the question booklets for rough work and /or the spare paper provided", but must not write notes on the answer sheet.'
          ],
          right: [
            'On practice material the consortium is candid: GL provides familiarisation material showing the question-and-answer format, but GL\'s other practice papers "are not specifically for the Slough examination". There are no mock tests. For the September 2027 sitting, Quest Assessments takes over, and Herschel Grammar School\'s page says the structure and format will be similar.',
            'The four grammar schools are the test centres, and the same papers are used in the morning and afternoon sessions at all four. How each school then admits children is set out in its own arrangements, and we do not advise on it.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.slough.gov.uk/school-admissions/secondary-school-admissions" rel="noopener" target="_blank">Slough Borough Council, secondary school admissions</a>; Slough Consortium of Grammar Schools, Parents\' 11+ Examination Briefing, April 2026, questions and answers, published by <a class="ag-inline-link" href="https://www.lgs.slough.sch.uk/" rel="noopener" target="_blank">Langley Grammar School</a>; the consortium registration portal; <a class="ag-inline-link" href="https://www.herschel.slough.sch.uk/admissions/year-7-admissions-2028/" rel="noopener" target="_blank">Herschel Grammar School, Year 7 admissions 2028</a>. Modern Age Coders has no connection with the consortium, its schools, GL, Quest or the council.' }
      ]
    },
    {
      id: 'score', tint: 'plain', eyebrow: 'The 111 line',
      h2: 'What "top 35%" means, in plain numbers',
      lede: 'The consortium explains its eligibility score more clearly than most, and the explanation is worth understanding, not memorising.',
      body: [
        { kind: 'two',
          leftH3: 'The consortium\'s own words',
          left: [
            '"The standardised score has a midpoint of 100. A child scoring 100 is in the middle of the range." And: "The scale is fixed so that a score of 111 means that the child falls in the top 35% of the range. When the results are published, 35% of those taking the test will score 111 or above."',
            'In other words, 111 is not a number of marks. It is a position. However hard or easy a particular year\'s papers are, the same share of children reaches it.'
          ],
          rightH3: 'What follows',
          right: [
            'Thirty-five per cent is seven in every twenty. If a thousand children sat the test, about 350 would reach 111. A family cannot aim at a raw mark, because nobody outside the provider knows what raw mark will correspond to 111 in a given year.',
            'That is why we never quote targets. What a child can control is how much of the maths they get right, calmly, in the time. The rest is set by everyone else who sits the paper.'
          ] },
        { kind: 'p', html: 'The consortium adds that a score of 111 or above "is not an offer of a place and does not guarantee a place". Allocation depends on each school\'s admission arrangements. That is the schools\' business, not ours.' }
      ]
    },
    {
      id: 'time', tint: 'deep', eyebrow: 'The lesson',
      h2: 'The maths of time: watches, minutes and timetables',
      lede: 'Time questions test several things at once: reading a clock, adding in base 60, and pulling the right number out of a table. The Year 5 curriculum names each part.',
      body: [
        { kind: 'table', caption: 'A timetable of our own, used in lessons (not a real service)', head: ['Stop', 'Bus A', 'Bus B', 'Bus C'], rows: [
          ['Station', '07:48', '08:13', '08:41'],
          ['High Street', '07:55', '08:21', '08:49'],
          ['Park Road', '08:06', '08:33', '09:02'],
          ['School Lane', '08:19', '08:47', '09:18']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Elapsed time', p: 'How long does Bus A take from Station to School Lane? From 07:48 to 08:19 is 12 minutes to 08:00 and 19 more: 31 minutes. Counting on through the hour beats subtracting 748 from 819, which gives the wrong answer, 71.' },
          { h3: 'Reading across', p: 'A child must be at School Lane by 08:50. Which is the latest bus they can catch from High Street? Bus B, leaving 08:21 and arriving 08:47. Bus C arrives at 09:18.' },
          { h3: 'Comparing journeys', p: 'Which bus is slowest from Station to School Lane? A takes 31 minutes, B 34, C 37. The answer needs three elapsed times, each done carefully.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'The national curriculum asks Year 5 pupils to "solve problems involving converting between units of time" and to "complete, read and interpret information in tables, including timetables". Both sit inside the questions above. The trap in each is treating times as ordinary decimal numbers: 08:19 minus 07:48 is not 71 minutes, because an hour has 60 minutes, not 100.',
            'We teach counting on through the hour, with a quick sketch of a number line: from 07:48 to 08:00, then from 08:00 to 08:19. It is slower to explain than to do, and it never gives 71.'
          ],
          right: [
            'The watch connects the lesson to the exam room. A 60 to 65 minute paper starting at, say, 09:40 ends at about 10:40 to 10:45. Half-time is around 10:10. A child who can read that from an analogue face at a glance, and knows roughly how far through the booklet they should be, paces without panic.',
            'We practise with an analogue clock face on screen during timed work, so that reading the minute hand becomes automatic. Children who do not wear a watch simply use the room clock the same way.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">national curriculum in England, mathematics</a>, Year 5 measurement and statistics (statutory requirements); Slough Consortium briefing, April 2026, on watches and paper length. The timetable is invented for teaching.' }
      ]
    },
    {
      id: 'prepare', tint: 'tint', eyebrow: 'How we prepare',
      h2: 'Unknown question counts, known curriculum',
      lede: 'The consortium publishes neither the number of questions nor the weighting of maths. Preparation has to be robust to both.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The whole of Year 5', p: 'Number, fractions, measures, geometry and statistics, each taught until quick and correct, because nobody outside the provider knows which will carry most weight.' },
          { h3: 'Pace without a count', p: 'When the number of questions is unknown, pacing by time rather than by question number is safer. That is where the watch, or the wall clock, earns its place.' },
          { h3: 'A provider change', p: 'For the September 2027 sitting the questions come from Quest instead of GL, in a similar structure. Curriculum-based preparation is untouched by the change.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Familiarisation material from the provider is the right way to see the layout. For the 2027 cycle the schools published GL booklets; for 2028 entry, watch the schools\' pages for whatever Quest provides. We do not reproduce either.',
            'Rough work is allowed in the booklet margins and on spare paper, so we teach tidy, short working. It makes checking possible without losing time.'
          ],
          right: [
            'Maths shares a paper with non-verbal reasoning. We teach the maths only; families wanting help with non-verbal reasoning need someone else, and we tell them so at the start.',
            'Every question we use is our own, written to the Year 5 curriculum and the published format: multiple choice, an answer sheet, no negative marking.'
          ] }
      ]
    },
    {
      id: 'town', tint: 'plain', eyebrow: 'Slough and around',
      h2: 'Four schools, one exam, lessons at home',
      lede: 'The four consortium schools are the test centres. We list them only to show which exam this page covers.',
      body: [
        { kind: 'table', caption: 'The Slough Consortium of Grammar Schools, as Herschel Grammar School lists it', head: ['School', 'Role on test day'], rows: [
          ['Herschel Grammar School', 'Test centre'],
          ['Langley Grammar School', 'Test centre'],
          ['St Bernard\'s Catholic Grammar School', 'Test centre'],
          ['Upton Court Grammar School', 'Test centre']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The consortium says families outside Slough, including in Reading, register directly with it, and that its test is its own even though other areas also use GL. The paper is the same whichever centre a child attends.',
            'Reading\'s two selective schools set their own tests, which are separate from this one; this page is only about the Slough Consortium examination.'
          ],
          right: [
            'Our lessons are live on video, so a child in Langley, Burnham or Cippenham is taught with others at the same level of Year 5 maths, from anywhere, in groups of five to ten.',
            'We have no connection with the consortium, any of its schools or the council, and we do not advise on applications or places.'
          ] },
        { kind: 'source', html: 'Sources: Herschel Grammar School, Year 7 admissions 2028; Slough Consortium briefing, April 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Timeline',
    h2: 'Four stages before the first Quest sitting',
    lede: 'For a child now in Year 5, the next consortium exam is in September 2027, early in Year 6, with Quest as the provider.',
    table: { caption: 'Building towards a 60 to 65 minute multiple-choice paper', head: ['When', 'Stage', 'Signs it is done'], rows: [
      ['Autumn, Year 5', '1. Number', 'Tables, place value and mental calculation are fast and dependable'],
      ['Winter, Year 5', '2. Measures and time', 'Elapsed time and timetables answered without the 71-minute mistake'],
      ['Spring and summer, Year 5', '3. The full curriculum', 'Fractions, geometry and statistics as secure as number'],
      ['Summer holiday', '4. Paced papers', 'Uses a watch or clock to pace a full paper and finishes it']
    ] },
    left: { h3: 'A later start', ps: [
      'Starting in the spring still works if number comes first and timed papers last.',
      'At the free lesson we will say honestly what the time available can do.'
    ] },
    right: { h3: 'After the results', ps: [
      'Time and timetables become speed, distance and rates in secondary school. Some pupils go on to <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a> and build their own timetable tools.',
      'Keen problem solvers try the national challenges on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Course list',
    h2: 'Maths and coding for Slough families',
    lede: 'Arranged by stage, with the syllabus behind each card.',
    bands: [
      { num: 'I', h3: 'Before the 11+', sub: 'Years 3 to 5', courses: [
        { code: 'SLM / 01', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'The Year 5 curriculum for the consortium paper.' },
        { code: 'SLM / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Speed that leaves time on the watch.' },
        { code: 'SLM / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'Clocks, tables and place value, made secure.' },
        { code: 'SLM / 04', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'A visual start for younger children.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'From Year 6', courses: [
        { code: 'SLM / 05', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths mastery', blurb: 'Speed, distance, time and more.' },
        { code: 'SLM / 06', slug: 'gcse-mathematics-mastery', title: 'GCSE maths, foundation and higher', blurb: 'Every exam board, taught to specification.' },
        { code: 'SLM / 07', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'For the child who wants harder problems.' }
      ] },
      { num: 'III', h3: 'Coding', sub: 'Time and logic in code', courses: [
        { code: 'SLM / 08', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Program a clock; calculate journeys.' },
        { code: 'SLM / 09', slug: 'scratch-programming-complete-course', title: 'Scratch coding for kids', blurb: 'Timers and events in a visual language.' },
        { code: 'SLM / 10', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'The move to typed programming.' }
      ] },
      { num: 'IV', h3: 'Later', sub: 'Teenagers', courses: [
        { code: 'SLM / 11', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths and speed calculation', blurb: 'Faster arithmetic on firm ground.' },
        { code: 'SLM / 12', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Time series and data, a few years on.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'When we teach',
    h2: 'Primary-friendly hours in UK time',
    lede: 'We teach live from India and schedule primary children in the early evening or on weekend mornings by the UK clock. When the UK clocks change, our teachers\' hours move, not yours.',
    slots: [
      { time: 'Weekdays after school', l: 'Early enough that nobody is tired.' },
      { time: 'Weekend mornings', l: 'A calm hour at the start of the day.' },
      { time: 'Holidays', l: 'Extra short sessions in the breaks.' }
    ],
    cells: [
      { h3: 'One teacher', p: 'The same person weekly, who knows each child\'s habits.' },
      { h3: 'Honest notes', p: 'A few frank sentences after lessons.' },
      { h3: 'Five to ten per group', p: 'Children matched by level.' },
      { h3: 'Our own questions', p: 'No GL, Quest or consortium material is copied.' },
      { h3: 'One to one option', p: 'For a specific weakness, such as time.' },
      { h3: 'Maths only', p: 'No reasoning coaching and no admissions advice.' }
    ]
  },

  projectsH2: 'What our students build later',
  projectsLede: 'Four projects published by students at our school, built on the arithmetic of Year 5 and beyond. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Straight from our Google reviews, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly price in US dollars, the same for all families outside India. No joining fee and no notice period.',
    free: ['A real taught lesson', 'An honest verdict afterwards', 'No card required'],
    group: ['Five to ten children at one level', 'A regular teacher', 'Marked work, talked through', 'A certificate at the end'],
    one: ['A teacher for your child only', 'Aimed at particular gaps', 'Useful in the summer of Year 5']
  },

  faq: {
    eyebrow: 'Slough questions',
    h2: 'What Slough families ask us',
    items: [
      { q: 'What is in the Slough 11+?', a: 'The consortium describes two multiple-choice papers of 60 to 65 minutes, one covering maths and non-verbal reasoning and the other verbal skills. It does not publish the number of questions or the weighting of each element.' },
      { q: 'Can my child wear a watch?', a: 'The consortium says children can wear an analogue watch if they wish, but no smartwatches. There is also a clock easily visible in the exam room.' },
      { q: 'What does a score of 111 mean?', a: 'The consortium says the standardised score has a midpoint of 100 and that 111 marks the top 35% of those taking the test. A score of 111 or above makes a child eligible to be considered, but is not an offer of a place.' },
      { q: 'Is there negative marking?', a: 'No. The consortium says there is no negative marking.' },
      { q: 'Is the provider changing?', a: 'Yes. Herschel Grammar School says the consortium has contracted Quest Assessments for the examination in September 2027, with a similar structure and format and the eligibility score still set at 111.' },
      { q: 'When is the next Slough 11+?', a: 'September 2027, for September 2028 entry. Exact registration and test dates had not been published when we checked on 26 September 2026. For 2027 entry, registration ran from 1 May to 5 June 2026 and the test was on 19 September 2026.' },
      { q: 'Are there Slough past papers?', a: 'No. The consortium says there are no mock tests or official practice papers, and that GL\'s general practice papers are not specifically for the Slough examination.' },
      { q: 'Do you teach non-verbal reasoning?', a: 'No, only the maths. We also do not advise on applications or places.' },
      { q: 'Is registration free?', a: 'The consortium says there is no charge for the 11+ test. Families register once for all four schools.' },
      { q: 'How much are your lessons?', a: 'Your first lesson is free. Afterwards, group lessons are USD 100 a month and private lessons USD 150 a month, and you can stop at any point.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More pages for Berkshire and Buckinghamshire families',
    lede: 'Coding across the UK, the national 11 plus page, and neighbouring selective areas.',
    items: [
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'How we teach 11 plus maths across England.' },
      { href: '/11-plus-maths-tuition-buckinghamshire', label: '11 plus maths in Buckinghamshire', p: 'The county next door, with its own transfer test.' },
      { href: '/11-plus-maths-tuition-birmingham', label: '11 plus maths in Birmingham', p: 'Another GL test, with strict equipment rules.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Dated maths challenges for keen pupils.' },
      { href: '/online-coding-classes-for-kids-uk', label: 'Coding for UK children', p: 'Where a primary child begins with code.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All our UK pages', p: 'Every UK area we cover.' }
    ]
  },

  start: {
    h2: 'Try a free maths lesson',
    lede: 'Tell us the school year and how comfortable your child is with time and timetables. We teach a real lesson and then tell you frankly what we saw.',
    readFirst: 'Would you like to read first? See the <a class="ag-inline-link" href="/courses">courses and syllabuses</a>, <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a>.',
    note: 'WhatsApp is the quickest way to reach us. We are in India, with an Indian number, and have no UK office.',
    formNote: 'No card details asked. One reply to agree a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths tuition' },
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/courses/mental-maths-mastery-kids', label: 'Mental maths' },
        { href: '/courses/maths-through-coding', label: 'Maths through coding' }
      ] },
      { h4: 'Nearby and national', links: [
        { href: '/11-plus-maths-tuition-buckinghamshire', label: '11 plus maths in Buckinghamshire' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/online-coding-classes-for-kids-uk', label: 'Coding for UK children' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'The consortium sets the exam; we teach the maths'
  },

  personalityCss: `
.ag-root.ag-slm .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-slm .ag-capsule { border-left-width: 6px; border-radius: 0 5px 5px 0; }
.ag-root.ag-slm .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-slm .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.02em; }
.ag-root.ag-slm .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-slm .ag-spec dt { letter-spacing: 0.13em; }
.ag-root.ag-slm .ag-three h3 { letter-spacing: -0.009em; }
.ag-root.ag-slm .ag-slots { gap: 1.05rem; }
`,

  mustMention: ['Slough Consortium of Grammar Schools', 'analogue watch', 'top 35%', 'Upton Court Grammar School', 'Herschel Grammar School', 'St Bernard\'s Catholic Grammar School', '60 to 65 minutes', 'independently of Slough Borough Council']
};
