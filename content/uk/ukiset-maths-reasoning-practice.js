'use strict';
// UKiset maths reasoning practice (ag- maths door, UK cluster Phase 2, row UK056).
// Read raw with curl on 31 October 2026 (copies under
// keyword-research-2026-09/uk-us-gap/src/ukiset-maths-reasoning-practice/):
//  - ukiset.com home: "Developed in partnership with Cambridge University Press & Assessment"; for applying to "top
//    British independent schools, as well as British curriculum international schools" (restated without "top"); "The
//    results compare candidates against British students within the same age group"; "The majority of our candidates
//    sit the assessment online through our secure online invigilation service"; "UKiset was founded in 2013 by
//    Gabbitas"; the report "can be used to apply to multiple schools".
//  - ukiset.com/about-ukiset: "UKiset is an adaptive online entry test in English designed to support admission into
//    the UK independent education system"; four skills: Vocabulary, "Mathematics Working with numbers, value, and
//    sequences", Non-verbal reasoning, Other English skills; "Results are normally processed within 3 business days";
//    "Some schools conduct further testing or interview the candidate after reviewing their UKiset Profile"; "Results
//    are valid for one year and the test can be retaken after 3 months"; "UKiset is designed for students aged between
//    9.5 and 18 years old"; "specifically against those studying in the independent sector"; Cambridge English
//    Linguaskill gives a CEFR level. (Fee figures on that page: not used.)
//  - ukiset.com/the-process: online invigilation "7 days a week"; on the day "A pen and lined and scrap paper";
//    "the use of mobile phones, calculators or dictionaries are strictly prohibited during the whole length of the
//    test"; "After completing all three parts of the test"; report sent to schools; re-sit every 3 months.
//  - UKiset Welcome Guide 2025 (PDF): "Section 1: Reasoning 30 - 45 mins | Online" (Vocabulary, Non-Verbal Reasoning,
//    Mathematical Reasoning); "The more questions the student answers correctly, the more difficult the test will
//    become."; "Section 2: Reading & Listening 60 - 90 mins | Online"; "Section 3: Essay Writing 30 mins |
//    Handwritten"; Microsoft Teams invigilation; "The use of a calculator or phone is strictly prohibited during the
//    test."
//  - ukiset.com/school-parent-report: parent report gives standardised scores in "Verbal, non-verbal and mathematics";
//    "The National Percentile Ranking (NPR)"; "The Stanine ranking (or Standard Nine)" with nine bands; "Two average
//    scores, with and without the Verbal Reasoning result"; school report includes the essay and "Future predicted
//    grades in GCSE, A-Level and IB"; "Some schools use UKiset as their standalone entrance assessment. This is more
//    often the case for younger applicants (Years 7-9)."
//  - ukiset.com/preparation: "The UKiset reasoning test includes quantitative reasoning. It can be helpful to ensure
//    that the student is confident in answering mathematical questions."; UKiset Prep is "the official preparation
//    course" (named neutrally; we make no comparison).
// Our own material, labelled as ours: the maths-English glossary, worked examples and practice set.
// Spine: UKiset tests reasoning in English against British peers, with no calculator, on a screen that adapts. For an
// international pupil the maths is rarely the problem; the English of maths, and fluency without a calculator, are.
// Lesson family: reading a maths question in English, word by word, then sequences and number value done mentally.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'UKISET', label: 'UKiset maths reasoning practice', blurb: 'UKiset is an adaptive test in English for international pupils aged 9.5 to 18. How its maths reasoning works, and why the English of maths matters.' },
  slug: 'ukiset-maths-reasoning-practice',
  code: 'urp',
  accent: '#714C52',
  accentRationale: 'UKiset maths reasoning: a muted burgundy-brown (#714C52), 6.93:1 on #FBF8F2 and 5.96:1 on the deepest paper tint, distinct from the plum 16 plus page and the mulberry CEM page',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'UKiset maths reasoning practice',
  title: 'UKiset Maths Reasoning Practice | The UKiset Test Explained',
  description: 'UKiset maths reasoning practice: what the UKiset test is, its three sections, how the adaptive reasoning part works, the reports schools see, and how to prepare.',
  ogDescription: 'UKiset is an adaptive online test in English for international pupils applying to UK independent schools. Here is how its mathematical reasoning section works.',
  twitterDescription: 'The UKiset test, section by section: 30 to 45 minutes of adaptive reasoning, no calculator, scores against British peers, and the English of maths explained.',
  pageName: 'UKiset Maths Reasoning Practice',
  webPageDescription: 'Live online maths teaching for international pupils preparing for UKiset, the entry test used by UK independent schools, based on what UKiset publishes about the test.',
  courseDescription: 'Live online maths lessons for international pupils aged 9 to 17 preparing for UKiset, teaching mathematical reasoning in English, mental calculation and sequences.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'UKiset maths',
  navLinks: [
    { href: '#what', label: 'What UKiset is' },
    { href: '#sections', label: 'The sections' },
    { href: '#reports', label: 'Scores' },
    { href: '#english', label: 'Maths in English' },
    { href: '#worked', label: 'Worked examples' }
  ],
  eyebrow: 'UK independent school entry &middot; UKiset &middot; Ages 9.5 to 18',
  h1: 'UKiset maths reasoning practice',
  lede: 'UKiset is an online entry test, sat in English, that international pupils take when applying to UK independent schools and British curriculum international schools. It was developed in partnership with Cambridge University Press &amp; Assessment, and its reasoning section, which includes mathematical reasoning, adapts to each answer. Modern Age Coders teaches the maths behind that section live online, in a class or one to one, through our lower secondary maths course, with special care for the English that maths questions are written in.',
  secondaryCta: { href: '#sections', label: 'See the sections' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for UKiset.',
  heroNote: 'From ukiset.com and the UKiset Welcome Guide 2025, read 31 October 2026 &middot; Not connected with UKiset, Gabbitas or any school',
  spec: [
    ['Test', 'UKiset, UK independent school entry test'],
    ['Ages', '9.5 to 18'],
    ['Language', 'English throughout'],
    ['Maths part', 'Mathematical reasoning, inside Section 1'],
    ['Section 1 length', '30 to 45 minutes, adaptive'],
    ['Calculator', 'Not allowed'],
    ['We teach', 'Reasoning in English, mental methods, sequences'],
    ['We never', 'Reproduce UKiset items or promise a place']
  ],
  capsuleQ: 'What is UKiset?',
  capsule: 'UKiset is an adaptive online entry test in English for international pupils aged 9.5 to 18 who want to join a UK independent school or a British curriculum international school. UKiset says it was developed with Cambridge University Press &amp; Assessment and founded in 2013 by the consultancy Gabbitas. It has three parts: a 30 to 45 minute adaptive reasoning section covering vocabulary, non-verbal reasoning and mathematical reasoning; a 60 to 90 minute reading and listening test; and a 30-minute handwritten essay. Calculators are not allowed. Scores compare a pupil with British students of the same age, and results are usually ready in about three working days. Modern Age Coders teaches the maths reasoning live online, in English, with practice we write ourselves.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses for UKiset maths reasoning',
    lede: 'UKiset spans ages 9.5 to 18, so the right course depends on age and on how settled the English is. Each card opens a syllabus.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'UKI / 01', title: 'Lower secondary maths', note: 'For pupils of 11 to 14, the age group UKiset says often uses it as a standalone entrance test: number, algebra and geometry taught in English.' },
      { course: '11-plus-maths-preparation-course-uk', code: 'UKI / 02', title: '11 plus maths preparation', note: 'For younger applicants aged 9 to 11 joining a UK prep or senior school, with entrance-style reasoning built in.' },
      { course: 'gcse-mathematics-mastery', code: 'UKI / 03', title: 'GCSE maths', note: 'For older applicants heading into Year 10 or the sixth form, where schools may also look at predicted grades.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'What UKiset is',
      h2: 'What is the UKiset test and who takes it?',
      lede: 'An adaptive online assessment for international applicants, sat in English, that lets one test result go to several schools. UKiset describes itself in its own words below.',
      body: [
        { kind: 'p', html: 'UKiset\'s about page says: "UKiset is an adaptive online entry test in English designed to support admission into the UK independent education system." It is "designed for students aged between 9.5 and 18 years old", and UKiset recommends "at least a basic knowledge of English". The home page explains the comparison group: "The results compare candidates against British students within the same age group", and the about page adds, "specifically against those studying in the independent sector". English level is measured separately with the Cambridge English Linguaskill test, which reports a CEFR level.' },
        { kind: 'table', mt: true, caption: 'What UKiset says it measures (about UKiset, read 31 October 2026)', head: ['Skill', 'UKiset\'s description', 'Where maths appears'], rows: [
          ['1. Vocabulary', '"The ability to recognise words and their meaning."', 'Indirectly: maths words are words too'],
          ['2. Mathematics', '"Working with numbers, value, and sequences."', 'Directly'],
          ['3. Non-verbal reasoning', '"Solving problems using pictures, diagrams and patterns."', 'Pattern and spatial thinking close to maths'],
          ['4. Other English skills', '"Reading & listening, Creative writing (Grammar & spelling)."', 'Not tested']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How schools use it',
          left: [
            'UKiset\'s report page lists several uses. "Some schools use UKiset as their standalone entrance assessment. This is more often the case for younger applicants (Years 7-9)." Others use it "As the first stage of an application", and "These schools may ask successful candidates to complete further school-specific testing."',
            'The about page puts it simply: "Some schools conduct further testing or interview the candidate after reviewing their UKiset Profile before offering a place."'
          ],
          rightH3: 'Results and retakes',
          right: [
            '"Results are normally processed within 3 business days." The full profile can be sent to several chosen schools, and schools can be chosen before or after the test.',
            '"Results are valid for one year and the test can be retaken after 3 months." Most candidates sit online at home with a UKiset invigilator, which UKiset offers seven days a week; approved test centres exist for those who need one.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://ukiset.com/" rel="noopener" target="_blank">UKiset home</a>, <a class="ag-inline-link" href="https://ukiset.com/about-ukiset/" rel="noopener" target="_blank">about UKiset</a>, <a class="ag-inline-link" href="https://ukiset.com/school-parent-report/" rel="noopener" target="_blank">school and parent report</a>, read 31 October 2026. UKiset publishes its fees on its own site; we do not repeat them. Modern Age Coders is not connected with UKiset, Gabbitas, Cambridge or any school.' }
      ]
    },
    {
      id: 'sections', tint: 'deep', eyebrow: 'The sections',
      h2: 'How is the UKiset test structured?',
      lede: 'Three sections, two online and one on paper. Maths sits inside the first, the adaptive reasoning section, alongside vocabulary and non-verbal reasoning.',
      body: [
        { kind: 'table', caption: 'The three sections of UKiset (UKiset Welcome Guide 2025)', head: ['Section', 'Length', 'Format', 'What it covers'], rows: [
          ['1. Reasoning', '30 to 45 minutes', 'Online, adaptive', 'Vocabulary, non-verbal reasoning, mathematical reasoning'],
          ['2. Reading and listening', '60 to 90 minutes', 'Online, multiple choice and gap filling', 'The Cambridge English test of receptive language'],
          ['3. Essay writing', '30 minutes', 'Handwritten, scanned and emailed at the end', 'Expressive English, structured writing']
        ] },
        { kind: 'p', mt: true, html: 'The Welcome Guide explains how the first section adapts: "The more questions the student answers correctly, the more difficult the test will become." So two pupils of the same age can see quite different maths questions, and a strong pupil will reach harder material quickly. The test-day rules matter for maths in particular. UKiset\'s process page says candidates need "A pen and lined and scrap paper", and that "the use of mobile phones, calculators or dictionaries are strictly prohibited during the whole length of the test." The guide repeats it: "The use of a calculator or phone is strictly prohibited during the test." Rough working therefore happens on paper beside the screen.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Invigilated online', p: 'UKiset invigilates by video call, using Microsoft Teams, with a member of its own team guiding the student. A short break is offered between sections.' },
          { h3: 'Scrap paper allowed', p: 'Unlike some computer tests, UKiset lists lined and scrap paper among the things to bring. Practise writing working neatly enough to read back quickly.' },
          { h3: 'No calculator, no dictionary', p: 'Both are banned for the whole test. A pupil used to a calculator from an early age, as in some school systems, needs mental and written methods ready.' }
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://ukiset.com/wp-content/uploads/2025/09/UKiset-Welcome-Guide-2025.pdf" rel="noopener" target="_blank">UKiset Welcome Guide 2025</a> and <a class="ag-inline-link" href="https://ukiset.com/the-process/" rel="noopener" target="_blank">UKiset, the process</a>, read 31 October 2026.' }
      ]
    },
    {
      id: 'reports', tint: '', eyebrow: 'Scores',
      h2: 'How is UKiset maths scored and reported?',
      lede: 'As a standardised score against British pupils of the same age, with a percentile and a stanine band. Families see a parent report; schools see a fuller one.',
      body: [
        { kind: 'table', caption: 'What the UKiset reports contain (school and parent report page, read 31 October 2026)', head: ['Report', 'Contents UKiset lists', 'What it means for maths'], rows: [
          ['Parent report', 'Standardised scores in "Verbal, non-verbal and mathematics"', 'Maths has its own score, not just a total'],
          ['Parent report', '"The National Percentile Ranking (NPR)", from the 1st to the 99th percentile', 'Where a pupil would sit among 100 British pupils of the same age'],
          ['Parent report', '"The Stanine ranking (or Standard Nine)", nine bands from 1 to 9', 'A coarser band that schools often read at a glance'],
          ['Parent report', '"Two average scores, with and without the Verbal Reasoning result"', 'A strong maths score is not dragged down by English still developing'],
          ['Parent report', 'An English CEFR level and raw score from Linguaskill', 'Shown separately from reasoning'],
          ['School report', 'The essay, separate national and independent-school standardisations, and "Future predicted grades in GCSE, A-Level and IB"', 'Schools see predicted maths grades too']
        ] },
        { kind: 'p', mt: true, html: 'The second average is worth understanding. UKiset says it reports scores "with and without the Verbal Reasoning result" to prevent a student\'s current English level from pulling down the overall reasoning score, "as most students speak English as their second language". For a pupil whose maths is strong and whose English is still growing, that is reassuring: the mathematics and non-verbal scores carry real weight on their own. UKiset does not publish a pass mark, and each school decides what it looks for.' }
      ]
    },
    {
      id: 'english', tint: 'tint', eyebrow: 'Maths in English',
      h2: 'Why does the English of maths matter in UKiset?',
      lede: 'Because the test is entirely in English, and maths questions hide meaning in small words. A pupil who can solve a problem in their own language can still lose it on a word like "product" or "consecutive".',
      body: [
        { kind: 'p', html: 'UKiset\'s preparation page says that "The UKiset reasoning test includes quantitative reasoning. It can be helpful to ensure that the student is confident in answering mathematical questions." In our teaching of international pupils, confidence usually breaks on vocabulary rather than on method. The glossary below is ours: the English words that most often change the meaning of a maths question, with a one-line example of each.' },
        { kind: 'table', mt: true, caption: 'Maths words in English that change a question\'s meaning (a glossary written by Modern Age Coders)', head: ['Word', 'Meaning', 'Example (ours)'], rows: [
          ['Sum', 'The result of adding', 'The sum of 7 and 5 is 12'],
          ['Difference', 'The result of subtracting the smaller from the larger', 'The difference between 15 and 9 is 6'],
          ['Product', 'The result of multiplying', 'The product of 4 and 6 is 24'],
          ['Quotient', 'The result of dividing', 'The quotient of 20 and 4 is 5'],
          ['Consecutive', 'Following one after another', '8, 9 and 10 are consecutive whole numbers'],
          ['Multiple and factor', 'A multiple is in the times table; a factor divides exactly', '18 is a multiple of 6; 6 is a factor of 18'],
          ['Prime', 'A whole number with exactly two factors, 1 and itself', '13 is prime; 15 is not'],
          ['Square and square root', 'A number times itself, and the reverse', '9 squared is 81; the square root of 81 is 9'],
          ['At least, at most', 'No fewer than, no more than', 'At least 3 means 3, 4, 5 and so on'],
          ['Remainder', 'What is left after dividing', '17 divided by 5 is 3 remainder 2']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'British conventions to know',
          left: [
            'Decimal points are written as a dot, and large numbers group thousands with a comma: 12,500 is twelve thousand five hundred, not twelve point five.',
            'Time is often written on the 24-hour clock in tables, 14:30, and dates as day then month. Lengths and weights are metric, with miles still used for road distances.'
          ],
          rightH3: 'What UKiset says about preparing',
          right: [
            'UKiset suggests working on English through reading, listening, speaking and writing, and being confident with mathematical questions.',
            'It also offers its own preparation service, UKiset Prep. We mention it so families know it exists; we make no comparison and are not connected with it.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://ukiset.com/preparation/" rel="noopener" target="_blank">UKiset, preparation</a>, read 31 October 2026. The glossary and examples are ours.' }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked examples, written by us',
      h2: 'How should a pupil reason through a UKiset-style maths question?',
      lede: 'Three original problems on number value and sequences, the areas UKiset names, written in plain English with the key words highlighted in the reasoning. None is a UKiset question.',
      body: [
        { kind: 'three', cells: [
          { h3: '1. Read the words first', p: 'The product of two consecutive numbers is 56. What is their sum? Translate: "product" means multiply, "consecutive" means next to each other. Which neighbours multiply to 56? 7 times 8. Their sum, adding, is 15. Most mistakes here are giving 7 and 8, or 56, because the last word of the question was not read.' },
          { h3: '2. A sequence with a hidden rule', p: 'Find the next number: 2, 3, 5, 8, 12, 17, ... The gaps are 1, 2, 3, 4, 5, so the next gap is 6 and the next number is 23. When the numbers themselves look random, write the gaps underneath. If the gaps are random too, try the gaps of the gaps, or multiplying.' },
          { h3: '3. Value and place', p: 'In the number 7,272.7, how many times larger is the value of the first 7 than the value of the last 7? Name each value first: the first 7 is 7 thousands, 7,000; the last is 7 tenths, 0.7. From tenths to thousands is four steps of ten, so the answer is 10,000. Pupils who compare the digits rather than their values answer 1, and that option is usually there to catch them.' }
        ] },
        { kind: 'table', mt: true, caption: 'A practice set written by Modern Age Coders, number and sequences without a calculator', head: ['Question (ours)', 'Answer', 'The reasoning'], rows: [
          ['What is the difference between the largest and smallest of 0.6, 0.65, 0.506?', '0.144', 'Write them to three places: 0.600, 0.650, 0.506. Then 0.650 minus 0.506.'],
          ['Next term: 81, 27, 9, 3, ...', '1', 'Each term is divided by 3. Sequences can shrink as well as grow.'],
          ['What is the quotient when 252 is divided by 7?', '36', '7 times 30 is 210, leaving 42, which is 7 times 6.'],
          ['Three consecutive even numbers have a sum of 54. What is the largest?', '20', 'The middle one is 54 divided by 3, which is 18, so the numbers are 16, 18 and 20.'],
          ['Is 91 prime?', 'No', '91 is 7 times 13. Test the primes up to the square root, which is a little under 10.'],
          ['A pattern adds 4 each time and starts at 5. What is the 20th term?', '81', 'The 20th term is the first plus 19 steps of 4: 5 plus 76.']
        ] },
        { kind: 'p', mt: true, html: 'In lessons, pupils read each question aloud in English, say which words decide the operation, and only then calculate on scrap paper. The habit protects marks on the adaptive section, where a slip on an easy question lowers the level of the next one.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Timeline',
    h2: 'From registration to results',
    lede: 'UKiset can be sat at any time of year once registered, and results last a year. The stages below are our plan for the months before a chosen date.',
    table: { caption: 'Four stages before a UKiset sitting (our plan)', head: ['When', 'Stage', 'Secure when'], rows: [
      ['Three to six months before', '1. Maths words in English', 'Every word in our glossary used correctly in a sentence and a sum'],
      ['Two to three months before', '2. Mental methods', 'Multiplication facts, place value and division done without a calculator'],
      ['One to two months before', '3. Sequences and patterns', 'Gaps, second gaps and multiplying rules spotted quickly'],
      ['Final weeks', '4. Screen and scrap paper', 'Questions read on screen, working kept neat on paper, timing steady']
    ] },
    left: { h3: 'If the date is close', ps: [
      'Stages 1 and 2 matter most. English maths words and calculator-free methods are quick to improve and often the real gap.',
      'After one lesson we tell you honestly where your child stands.'
    ] },
    right: { h3: 'After UKiset', ps: [
      'Pupils joining a UK school usually go on to the school\'s own maths course; our <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE maths page</a> shows what lies ahead from Year 10.',
      'Some keep going with <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a> in English.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Courses for international pupils joining UK schools',
    lede: 'By age band. Each card opens its syllabus.',
    bands: [
      { num: 'I', h3: 'Ages 9 to 11', sub: 'Prep and Year 7 entry', courses: [
        { code: 'UK / URP / 01', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'Entrance-style maths for younger applicants.' },
        { code: 'UK / URP / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Calculation without a calculator, from the start.' }
      ] },
      { num: 'II', h3: 'Ages 11 to 14', sub: 'Years 7 to 9 entry', courses: [
        { code: 'UK / URP / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'Key Stage 3 maths taught in English.' },
        { code: 'UK / URP / 04', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The algebra UK schools expect by Year 9.' },
        { code: 'UK / URP / 05', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Harder reasoning for strong mathematicians.' }
      ] },
      { num: 'III', h3: 'Ages 14 to 18', sub: 'Year 10 and sixth form entry', courses: [
        { code: 'UK / URP / 06', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'Foundation and Higher for English boards.' },
        { code: 'UK / URP / 07', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'International GCSE, common in British schools abroad.' },
        { code: 'UK / URP / 08', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure, mechanics and statistics for the sixth form.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons in English, for pupils anywhere',
    lede: TIMING + ' Our teachers are in India, which keeps one time all year; we schedule in UK time, four and a half hours behind India in British summer and five and a half in winter, and can convert to your own time zone.',
    slots: [
      { time: 'After school', l: 'Set to the pupil\'s own school day.' },
      { time: 'Weekend morning', l: 'A longer reasoning session.' },
      { time: 'Holidays', l: 'Extra practice before a test date.' }
    ],
    cells: [
      { h3: 'English of maths', p: 'Key words taught and used until they are automatic.' },
      { h3: 'No calculator', p: 'Mental and written methods for every topic.' },
      { h3: 'Screen and paper', p: 'Questions on screen, working on scrap paper, as on the day.' },
      { h3: 'Our own questions', p: 'No UKiset material copied.' },
      { h3: 'Class or private', p: 'A class of 15 to 20, or one teacher for one pupil.' },
      { h3: 'No promises', p: 'Schools decide places; UKiset sets no pass mark.' }
    ]
  },

  projectsH2: 'What students at our school have built',
  projectsLede: 'Projects from our students across many countries. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' reviews on our Google profile, in their own words.',

  fees: {
    h2: 'Fees for UKiset maths lessons',
    lede: 'A monthly fee, shown in the currency we use for families applying to UK schools. The first lesson is free and nothing is charged to join.',
    free: ['A real reasoning lesson in English', 'A plain account of what to work on', 'A phone number is enough to book'],
    group: ['A class of 15 to 20 at one level', 'One teacher across the months', 'Calculator-free practice', 'Lighter weeks around school exams'],
    one: ['One teacher, one pupil', 'Paced to a chosen UKiset date', 'Ideal when English is the main gap']
  },

  faq: {
    eyebrow: 'UKiset questions',
    h2: 'What families ask about UKiset maths',
    items: [
      { q: 'What is the UKiset test?', a: 'UKiset is an adaptive online entry test in English for international pupils applying to UK independent schools and British curriculum international schools. UKiset says it is for students aged 9.5 to 18.' },
      { q: 'Is there maths in UKiset?', a: 'Yes. The reasoning section includes mathematical reasoning, which UKiset describes as working with numbers, value and sequences. The parent report gives a separate standardised score for mathematics.' },
      { q: 'How long is the UKiset test?', a: 'UKiset\'s Welcome Guide lists three sections: reasoning for 30 to 45 minutes, reading and listening for 60 to 90 minutes, and a 30-minute handwritten essay, with a short break between sections.' },
      { q: 'Can I use a calculator in UKiset?', a: 'No. UKiset says calculators, phones and dictionaries are strictly prohibited for the whole test. Candidates bring a pen and lined and scrap paper for working.' },
      { q: 'Is UKiset adaptive?', a: 'The reasoning section is. UKiset\'s guide says the more questions a student answers correctly, the more difficult the test becomes.' },
      { q: 'How is UKiset scored?', a: 'Scores are standardised against British students of the same age, with a national percentile ranking and a stanine band from 1 to 9. UKiset also reports an average without the verbal result, so English level does not pull down the reasoning score.' },
      { q: 'How long are UKiset results valid?', a: 'UKiset says results are valid for one year and the test can be retaken after three months. Results are normally processed within three business days.' },
      { q: 'Do schools accept UKiset on its own?', a: 'Some do, more often for younger applicants in Years 7 to 9, according to UKiset. Others use it as a first stage and then set their own tests or interviews.' },
      { q: 'When can lessons happen?', a: TIMING + ' We set lessons in UK time and convert to your time zone if you are abroad.' },
      { q: 'Are you part of UKiset?', a: 'No. Modern Age Coders is independent and not connected with UKiset, Gabbitas or Cambridge. We write our own practice and never promise a score or a school place.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for families applying to UK schools',
    lede: 'Other entrance routes and the maths that follows.',
    items: [
      { href: '/common-entrance-maths-tuition', label: 'Common Entrance maths', p: 'Written papers at 11 and 13 for independent schools.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'Entrance maths for Year 7 entry.' },
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'The course pupils meet from Year 10.' },
      { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition', p: 'The international GCSE many British schools teach.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition', p: 'For sixth form applicants.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Our hub for UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Tell us your child\'s age, current school system and the UK schools you are considering. We will teach one reasoning lesson in English and tell you clearly what we noticed.',
    readFirst: 'Prefer to read first? The <a class="ag-inline-link" href="/courses/comprehensive-middle-school-mathematics-mastery">lower secondary maths course</a> lists its topics, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains the method.',
    note: 'WhatsApp works from almost any country and is the fastest way to reach us. Replies come from India on a +91 number.',
    formNote: 'We ask for no payment details. One reply follows, suggesting a time.'
  },

  footer: {
    cols: [
      { h4: 'UK school entry', links: [
        { href: '/common-entrance-maths-tuition', label: 'Common Entrance' },
        { href: '/11-plus-maths-tuition', label: '11 plus maths' },
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths' },
        { href: '/igcse-maths-tuition-online', label: 'IGCSE maths' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Lower secondary maths' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Maths in English, without a calculator, against British peers'
  },

  personalityCss: `
.ag-root.ag-urp .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-urp .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-urp .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-urp .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-urp .ag-table th:first-child { width: 20%; }
`,

  dossier: {
    curriculumAuthority: 'UKiset (ukiset.com) and the UKiset Welcome Guide 2025, read 31 October 2026: adaptive online entry test in English for UK independent schools and British curriculum international schools; developed in partnership with Cambridge University Press and Assessment; founded 2013 by Gabbitas; ages 9.5 to 18; four skills (vocabulary; mathematics, numbers, value and sequences; non-verbal reasoning; other English skills); results against British students of the same age, specifically the independent sector; Linguaskill CEFR level; three sections (reasoning 30 to 45 minutes adaptive; reading and listening 60 to 90 minutes; essay 30 minutes handwritten); calculators, phones and dictionaries prohibited; pen and scrap paper allowed; online invigilation seven days a week via Teams; results in about 3 business days, valid one year, retake after 3 months; parent report (standardised scores, NPR, stanine, averages with and without verbal, CEFR); school report (essay, predicted GCSE, A level and IB grades); standalone use more common for Years 7 to 9; preparation page on quantitative reasoning.',
    localProject: 'A UKiset maths page for international families. It explains what UKiset is and measures in UKiset\'s own words, sets out the three sections with timings and the no-calculator rule, tabulates what the parent and school reports contain and why the second average without verbal reasoning matters, gives an original glossary of English maths words with examples and the British number conventions, teaches three original worked examples on wording, sequences and place value, and a six-question calculator-free practice set. Lesson family: reading a maths question in English before solving it.',
    requiredMentions: ['UKiset is an adaptive online entry test in English', 'designed for students aged between 9.5 and 18 years old', 'Working with numbers, value, and sequences', 'The more questions the student answers correctly, the more difficult the test will become', 'calculators or dictionaries are strictly prohibited', 'Two average scores, with and without the Verbal Reasoning result', 'Results are valid for one year and the test can be retaken after 3 months', 'This is more often the case for younger applicants (Years 7-9)'],
    sources: [
      { claim: 'About UKiset: adaptive online test in English, four skills, ages 9.5 to 18, results timing, validity and retakes, comparison group, Linguaskill.', url: 'https://ukiset.com/about-ukiset/' },
      { claim: 'UKiset Welcome Guide 2025: three sections with timings, adaptive reasoning, calculator ban, Teams invigilation.', url: 'https://ukiset.com/wp-content/uploads/2025/09/UKiset-Welcome-Guide-2025.pdf' },
      { claim: 'UKiset process: invigilation seven days, items to bring, prohibited items, results, re-sits.', url: 'https://ukiset.com/the-process/' },
      { claim: 'UKiset school and parent report: standardised scores, NPR, stanine, two averages, school report contents, how schools use UKiset.', url: 'https://ukiset.com/school-parent-report/' },
      { claim: 'UKiset home and preparation pages: Cambridge partnership, founded 2013 by Gabbitas, quantitative reasoning advice.', url: 'https://ukiset.com/preparation/' }
    ],
    rejectedClaims: [
      'UKiset fees, weekend surcharges and per-school report charges: published by UKiset but not repeated (no typed currency, no provider prices).',
      'UKiset\'s "top British independent schools" wording: restated without the superlative.',
      'Names of schools in the UKiset network: not printed.',
      'Any UKiset sample or practice question: none reproduced; all examples are ours.',
      'Claims about UKiset Prep results ("Competitive Scores", "Acceptance"): not repeated; we make no comparison.',
      'Any score target, stanine threshold or place promise.'
    ]
  }
};
