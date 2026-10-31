'use strict';
// 7 plus maths preparation (ag- maths door, UK cluster Phase 2, row UK054).
// Read raw with curl on 31 October 2026 (copies under
// keyword-research-2026-09/uk-us-gap/src/7-plus-maths-preparation/):
//  - Department for Education, National curriculum in England: mathematics programmes of study, key stages 1 and 2
//    (PRIMARY_national_curriculum_-_Mathematics_220714.pdf): "By the end of year 2, pupils should know the number bonds
//    to 20 and be precise in using and understanding place value."; "Schools are, however, only required to teach the
//    relevant programme of study by the end of the key stage."; "Calculators should not be used as a substitute for
//    good written and mental arithmetic. They should therefore only be introduced near the end of key stage 2"; Year 1:
//    "count to and across 100"; "missing number problems such as 7 = ? - 9"; "tell the time to the hour and half past
//    the hour"; Year 2: "recall and use multiplication and division facts for the 2, 5 and 10 multiplication tables";
//    "recognise, find, name and write fractions 1/3, 1/4, 2/4 and 3/4"; "tell and write the time to five minutes";
//    "count in steps of 2, 3, and 5 from 0"; "identify and describe the properties of 3-D shapes, including the number
//    of edges, vertices and faces"; "show that addition of two numbers can be done in any order (commutative) and
//    subtraction of one number from another cannot".
//  - Quest Admissions (questassessments.com/admissions): "For ages 7+ to 16+"; "Bespoke and branded to your school";
//    "Paper and online"; "Main entry and in-year". Quest parent guidance: "Your child's assessment is unique to the
//    school they're applying to".
//  - ISEB home page: Common Pre-Tests "are taken by pupils in Year 6 or 7", so ISEB's pre-test is not a 7 plus test.
// Our own reasoning, labelled as ours: a 7 plus is sat during Year 2, before the end of key stage 1, so the national
// curriculum does not require a school to have taught every Year 2 objective by test day.
// Worked examples and the practice set are written by us at Year 1 and Year 2 level.
// Spine: there is no 7 plus exam board. Each school sets its own test for children aged 6 and 7, and the maths
// ceiling is key stage 1, which a school may teach in any order. So the honest preparation is secure Year 1 maths,
// core Year 2 facts, and calm, spoken reasoning.
// Lesson family: thinking aloud with objects and pictures, the bar and the number line at age 6 and 7.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: '7 PLUS', label: '7 plus maths preparation', blurb: 'No exam board sets the 7 plus. What the key stage 1 curriculum covers by Year 2, why schools may not have finished it, and how to prepare a six-year-old gently.' },
  slug: '7-plus-maths-preparation',
  code: 'pp',
  accent: '#485F80',
  accentRationale: '7 plus maths: a slate blue (#485F80), 6.14:1 on #FBF8F2 and 5.29:1 on the deepest paper tint, softer than the petrol scholarship page to suit the youngest entry point',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '7 plus maths preparation',
  title: '7 Plus Maths Preparation | Entrance Exam Maths for Year 2',
  description: '7 plus maths preparation for Year 2 children: who sets the 7 plus, what key stage 1 maths covers, why schools may not have finished it, and gentle practice.',
  ogDescription: 'There is no 7 plus exam board. Each school writes its own test for six and seven year olds. Here is the maths underneath, from the national curriculum.',
  twitterDescription: '7 plus entrance maths, honestly: school-set tests, key stage 1 content, number bonds to 20, the 2, 5 and 10 tables, and how to practise without pressure.',
  pageName: '7 Plus Maths Preparation',
  webPageDescription: 'Live online maths teaching for children aged 6 and 7 facing a 7 plus entrance test, built on the key stage 1 national curriculum and taught through talk and pictures.',
  courseDescription: 'Live online maths lessons for Year 1 and Year 2 children preparing for a 7 plus, teaching number bonds, place value, early multiplication and reasoning out loud.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '7 plus maths',
  navLinks: [
    { href: '#who', label: 'Who sets it' },
    { href: '#content', label: 'The maths' },
    { href: '#timing', label: 'The timing problem' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#home', label: 'At home' }
  ],
  eyebrow: 'England &middot; 7 plus entrance &middot; Years 1 and 2, ages 6 and 7',
  h1: '7 plus maths preparation',
  lede: 'The 7 plus is the entrance test some independent schools set for children joining in Year 3, sat while the child is in Year 2, aged six or seven. No exam board writes it: each school sets its own, sometimes with a test provider. The maths inside is the key stage 1 national curriculum. Modern Age Coders teaches that maths live online, in a small-age class or one to one, through our primary maths course, with a lot of talking and very few worksheets.',
  secondaryCta: { href: '#content', label: 'See the maths' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a 7 plus.',
  heroNote: 'From the DfE national curriculum and test-provider pages, read 31 October 2026 &middot; Not connected with any school',
  spec: [
    ['Who sits it', 'Year 2 children, ages 6 and 7'],
    ['Entry to', 'Year 3 at some independent schools'],
    ['Set by', 'Each school, sometimes with a provider'],
    ['Exam board', 'None'],
    ['Maths content', 'Key stage 1 national curriculum'],
    ['Calculators', 'Not part of key stage 1 maths'],
    ['We teach', 'Number sense, early tables, talking it through'],
    ['We never', 'Drill a six-year-old on past papers']
  ],
  capsuleQ: 'What is in a 7 plus maths test?',
  capsule: 'A 7 plus is an entrance assessment set by an individual school for children in Year 2 hoping to join Year 3, so there is no single paper and no exam board. Its maths can only draw on what children of six and seven have been taught: the key stage 1 national curriculum. Its end point, in the Department for Education\'s words, is that a Year 2 child knows number bonds to 20 and is precise with place value; the Year 2 list adds times tables for 2, 5 and 10, thirds and quarters, and clock times to the nearest five minutes. Test providers such as Quest Admissions build bespoke tests for schools from age 7+. Modern Age Coders teaches this maths live online, gently, with original practice.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses for 7 plus maths',
    lede: 'At six, confidence matters as much as content. Choose by what your child enjoys and needs. Each card opens a full syllabus.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: '7P / 01', title: 'Primary maths, Years 1 to 5', note: 'Our main primary course, started at Year 1: counting, place value, addition and subtraction, early multiplication, shape and time.' },
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: '7P / 02', title: 'Reasoning and readiness', note: 'Pattern, spatial and number puzzles for ages 6 to 9, taught as play, never as test drilling.' },
      { course: 'early-math-foundations', code: '7P / 03', title: 'Early maths foundations', note: 'Concrete, hands-on maths for ages 4 to 7, for a child who needs number sense rebuilt before anything else.' }
    ]
  },

  sections: [
    {
      id: 'who', tint: 'tint', eyebrow: 'Who sets it',
      h2: 'Who sets the 7 plus exam?',
      lede: 'Each school that admits pupils into Year 3 sets its own assessment. There is no national 7 plus, no common paper and no board that publishes a syllabus for it.',
      body: [
        { kind: 'p', html: 'The 11 plus and 13 plus have shared providers and published specifications. The 7 plus mostly does not. Some schools write their own short maths and English tasks and observe children in a group activity; others buy a bespoke test. One provider, Quest Admissions, says its entrance tests are made "For ages 7+ to 16+", are "Bespoke and branded to your school", come on "Paper and online", and cover "Main entry and in-year" admissions. Its guidance to families adds that "Your child\'s assessment is unique to the school they\'re applying to". The Independent Schools Examinations Board, which sets Common Entrance, does not offer a 7 plus: its Common Pre-Tests "are taken by pupils in Year 6 or 7".' },
        { kind: 'table', mt: true, caption: 'Entrance points in England and who sets the maths (from the providers\' own pages, read 31 October 2026)', head: ['Entry point', 'Age at test', 'Typical setter', 'Published maths content'], rows: [
          ['7 plus, into Year 3', '6 or 7, in Year 2', 'The school itself, or a bespoke provider', 'None common; key stage 1 is the ceiling'],
          ['11 plus, into Year 7', '10 or 11', 'Councils, consortia, schools; GL, Quest, FSCE, ISEB and others', 'Published by each area or provider'],
          ['13 plus, into Year 9', '12 or 13', 'ISEB Common Entrance and scholarship papers, or the school', 'ISEB\'s published specification']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What to ask the school',
          left: [
            'Whether the assessment is on paper, on a screen, or spoken with a teacher; how long it lasts; whether children are seen in a group; and whether there is a second stage.',
            'Many schools describe their 7 plus on their admissions page. If not, the registrar will usually explain the shape of the morning, which is all a family really needs.'
          ],
          rightH3: 'What not to buy',
          right: [
            'Packs sold as "7 plus past papers" cannot be any school\'s real test unless that school released them. At best they are someone\'s guess at key stage 1 questions.',
            'Six-year-olds learn more from talking about one problem than from finishing twenty. Paper drills at this age often teach a child that maths is a race.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.questassessments.com/admissions" rel="noopener" target="_blank">Quest Admissions</a> and <a class="ag-inline-link" href="https://www.questassessments.com/parent-guidance" rel="noopener" target="_blank">Quest parent guidance</a>; <a class="ag-inline-link" href="https://www.iseb.co.uk/" rel="noopener" target="_blank">ISEB</a>; read 31 October 2026. Modern Age Coders is not connected with any school or test provider.' }
      ]
    },
    {
      id: 'content', tint: 'deep', eyebrow: 'The maths',
      h2: 'What maths does a child need for the 7 plus?',
      lede: 'The key stage 1 national curriculum: Year 1 in full and as much of Year 2 as the child\'s school has reached. The table pairs the statutory statements with what that looks like in a six-year-old.',
      body: [
        { kind: 'table', caption: 'Year 1 and Year 2 maths in our own summary of the DfE statutory requirements, and what we listen for in a lesson', head: ['Strand', 'Year 1, in brief', 'Year 2, in brief', 'What we listen for'], rows: [
          ['Counting and place value', 'Counting past 100 and back again, from any starting number', 'Steps of 2, 3 and 5 from zero; tens from anywhere', 'Counts back from 63 without losing the thread; knows 47 is 4 tens and 7 ones'],
          ['Addition and subtraction', 'Bonds within 20 and the subtraction facts that go with them', 'Those facts recalled quickly, and used to reach facts to 100', 'Knows 8 and 7 make 15 without counting on fingers'],
          ['Missing numbers', 'Year 1 examples include a gap on the left of the equals sign', 'Addition and subtraction used as inverses to check and to fill gaps', 'Explains why the gap in 7 = ? take away 9 is 16, not only finds it'],
          ['Multiplication', 'One-step sharing and grouping with objects, pictures and arrays', 'Facts for the twos, fives and tens, plus odd and even', 'Sees 3 rows of 5 as 15, and as 5 rows of 3'],
          ['Fractions', 'Halves and quarters of shapes, objects and amounts', 'Thirds, quarters, two quarters and three quarters', 'Knows two quarters is the same as a half'],
          ['Time', 'O\'clock and half past', 'Reading and writing the time to the nearest five minutes', 'Reads ten past four on an analogue clock'],
          ['Shape', 'Naming everyday flat and solid shapes', 'Counting edges, corners (vertices) and faces of solids', 'Counts the faces of a cube by turning it, not guessing']
        ] },
        { kind: 'p', mt: true, html: 'The DfE sums up the end point in one sentence: "By the end of year 2, pupils should know the number bonds to 20 and be precise in using and understanding place value." Those two things, number bonds and place value, are where we start with every 7 plus child, because almost everything else on the list rests on them. The curriculum also sets a line on calculators: they "should not be used as a substitute for good written and mental arithmetic" and should "only be introduced near the end of key stage 2". Nothing at 7 plus should need one.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">Department for Education, National curriculum in England: mathematics programmes of study</a>, key stages 1 and 2, read 31 October 2026. Fractions are written in words on this page; the curriculum prints them as numerals.' }
      ]
    },
    {
      id: 'timing', tint: '', eyebrow: 'The timing problem',
      h2: 'Will my child have been taught all of the Year 2 maths by the test?',
      lede: 'Not necessarily, and that is allowed. The national curriculum only requires schools to finish each key stage\'s content by the end of the key stage, so a Year 2 child may meet a 7 plus before some Year 2 topics have been taught.',
      body: [
        { kind: 'p', html: 'The curriculum is explicit: "Schools are, however, only required to teach the relevant programme of study by the end of the key stage. Within each key stage, schools therefore have the flexibility to introduce content earlier or later than set out in the programme of study." Key stage 1 ends with Year 2. By our own reasoning, a child who sits a 7 plus partway through Year 2 may simply not yet have been shown, say, thirds, or time to five minutes, depending on how their school orders the year. Children at independent pre-preps may also be on a different scheme altogether: GOV.UK notes that academies and private schools "do not have to follow the national curriculum".' },
        { kind: 'two', mt: true,
          leftH3: 'What that means for families',
          left: [
            'Find out what your child\'s class has covered so far this year; a quick word with the class teacher is usually enough. Gaps from "not yet taught" are very different from gaps from "taught but not understood".',
            'Prioritise Year 1 in full and the core Year 2 facts (bonds to 20, the 2, 5 and 10 tables, two-digit place value) before anything else.'
          ],
          rightH3: 'What we think matters most',
          right: [
            'In our view the most useful thing a six-year-old can show is how they think: explaining a choice, trying another way, staying calm when stuck. A child who says "I think it is 12 because" is showing more than one who silently writes 12.',
            'That is why we teach out loud, with objects and pictures first, and only then on paper or a screen.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked examples, written by us',
      h2: 'How should a six-year-old think through a 7 plus maths question?',
      lede: 'Three original problems at Year 1 and Year 2 level, with the talk we hope to hear. None is from any school\'s 7 plus. For a child this age, saying the steps out loud is the method.',
      body: [
        { kind: 'three', cells: [
          { h3: '1. Balance the sides', p: 'Fill the gap: 13 + 5 = 9 + ?. A child who reads left to right writes 18, the answer to 13 + 5. The talk we want: "The left side makes 18. The right side has to make 18 too. 9 and what make 18? 9 and 9." Answer 9. The equals sign means "the same as", not "the answer comes next", and the Year 1 curriculum\'s own missing-number examples build exactly this.' },
          { h3: '2. An array two ways', p: 'Chairs are set out in 3 rows of 5. How many chairs? Draw it: three rows, five dots each. Count in fives: 5, 10, 15. Then turn the picture: five columns of three, 3, 6, 9, 12, 15. Same answer. That second look is the Year 2 idea that multiplication "can be done in any order", seen rather than told.' },
          { h3: '3. Fair shares', p: 'Twelve strawberries are shared fairly between 4 children. How many does each child get, and what fraction of the strawberries is that? Deal them out one at a time: each child gets 3. Each child has one of four equal shares, so one quarter. Dealing one by one is slower than knowing 12 divided by 4, and that is fine at six: it shows what division means.' }
        ] },
        { kind: 'table', mt: true, caption: 'A gentle practice set written by Modern Age Coders at key stage 1 level', head: ['Question (ours)', 'Answer', 'What to listen for'], rows: [
          ['What number is one less than 70?', '69', 'Crossing the tens boundary backwards. Watch for 60 or 79.'],
          ['Which is more: 4 tens and 3 ones, or 3 tens and 9 ones?', '4 tens and 3 ones', 'The tens decide first: 43 against 39.'],
          ['What comes next: 3, 6, 9, 12, ...?', '15', 'Counting in threes, which Year 2 children practise from 0.'],
          ['A cube has how many faces?', '6', 'Turning a real or drawn cube and counting, not guessing.'],
          ['What time is it when the long hand points to 2 and the short hand is just past 4?', 'Ten past four', 'Counting in fives round the clock: the 2 means ten minutes.'],
          ['Is 17 odd or even? How do you know?', 'Odd', 'Pairing up 17 objects leaves one over, or noticing the last digit, 7.']
        ] },
        { kind: 'p', mt: true, html: 'In lessons these are spoken, drawn and handled long before they are written. A six-year-old who can explain why 69 comes before 70 has understood more than one who can fill in a sheet of them, and that understanding is what carries into Year 3, whichever school a child ends up in.' }
      ]
    },
    {
      id: 'home', tint: 'tint', eyebrow: 'At home',
      h2: 'How can parents help with 7 plus maths at home?',
      lede: 'Little and often, through talk and everyday objects. Ten good minutes a day beat an hour of worksheets on a Saturday, and a calm child shows far more on the day.',
      body: [
        { kind: 'ol', items: [
          'Ask the school what the 7 plus morning involves, so neither you nor your child is guessing.',
          'Check the number bonds to 20 casually: in the car, at the table, with fingers hidden. Stop while it is still fun.',
          'Count objects in groups of 2, 5 and 10 (socks, coins in a jar, steps), and ask "how did you count them?".',
          'Read an analogue clock together at real moments: "it is half past, what time will it be in half an hour?".',
          'Fold paper and cut fruit into halves, quarters and thirds, and talk about which pieces are equal.',
          'Play board games with dice, which are a quiet way to practise adding and counting on.',
          'When your child is stuck, ask them to draw it. Drawing is a legitimate way to solve a problem at six.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where live lessons help',
          left: [
            'Some children enjoy a teacher who is not a parent, with other children of the same age. A short online lesson, built on talk, can make maths feel like a game rather than a test.',
            'We keep lessons short for this age and spend them on reasoning: why, how do you know, is there another way.'
          ],
          rightH3: 'Where we hold back',
          right: [
            'We do not run 7 plus "mock exams" for six-year-olds, and we do not claim to know any school\'s test.',
            'If a child is anxious, we say so and slow down. No school place is worth a child deciding at six that they are "bad at maths".'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Timeline',
    h2: 'From Reception to a Year 2 assessment',
    lede: 'Our stages follow the key stage 1 curriculum, not any school\'s calendar. Ask your target school when its 7 plus falls and count back.',
    table: { caption: 'Four stages before a 7 plus (our plan)', head: ['When', 'Stage', 'Secure when'], rows: [
      ['End of Reception', '1. Counting and quantity', 'Counts objects to 20 accurately and knows that the last number said is how many'],
      ['Year 1', '2. Year 1 in full', 'Bonds within 20, counting to 100 and back, halves and quarters, o\'clock and half past'],
      ['Early Year 2', '3. Core Year 2', 'The 2, 5 and 10 tables, two-digit place value, adding and subtracting tens'],
      ['Weeks before', '4. Talking it through', 'Explains an answer out loud and tries a second way when stuck']
    ] },
    left: { h3: 'If the test is soon', ps: [
      'Spend the time on stage 2. Year 1 maths, really secure, is worth more than a rushed tour of Year 2.',
      'We will tell you honestly after one lesson where your child is.'
    ] },
    right: { h3: 'Whatever happens', ps: [
      'The same number sense carries into Year 3. Many children continue with our <a class="ag-inline-link" href="/courses/elementary-mathematics-complete-masterclass">primary maths course</a>.',
      'Children who enjoy puzzles often move on to <a class="ag-inline-link" href="/courses/mental-maths-mastery-kids">mental maths</a> at seven or eight.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Courses for children aged 4 to 9',
    lede: 'Gentle routes into maths at the youngest ages. Each card opens a syllabus.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Ages 4 to 7', courses: [
        { code: 'UK / PP / 01', slug: 'early-math-foundations', title: 'Early maths foundations', blurb: 'Concrete, playful maths for the very youngest.' },
        { code: 'UK / PP / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'Key stage 1 and 2 maths in order, live.' }
      ] },
      { num: 'II', h3: 'Thinking skills', sub: 'Ages 6 to 9', courses: [
        { code: 'UK / PP / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and readiness', blurb: 'Patterns, shapes and number puzzles.' },
        { code: 'UK / PP / 04', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Number sense from age 5, not tricks.' },
        { code: 'UK / PP / 05', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'Beads first, then calculation in the head.' }
      ] },
      { num: 'III', h3: 'Looking ahead', sub: 'Ages 8 and up', courses: [
        { code: 'UK / PP / 06', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'For later, when Year 5 comes round.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Short live lessons, made for six-year-olds',
    lede: TIMING + ' Teachers join from India, where the clocks stay put all year, so the gap to UK time is four and a half hours in summer and five and a half in winter; we only ever give you UK times.',
    slots: [
      { time: 'After school', l: 'A short slot before tea.' },
      { time: 'Weekend morning', l: 'When young children are freshest.' },
      { time: 'Holidays', l: 'Light, playful sessions.' }
    ],
    cells: [
      { h3: 'Talk first', p: 'Children explain aloud before they write anything.' },
      { h3: 'Objects and pictures', p: 'Counters, drawings and arrays on screen.' },
      { h3: 'Short and lively', p: 'Lessons sized for a six-year-old\'s attention.' },
      { h3: 'Our own questions', p: 'Nothing copied from any school.' },
      { h3: 'Class or private', p: 'Group lessons of 15 to 20, or a teacher alone with your child.' },
      { h3: 'No pressure', p: 'No mock exams and no promises about places.' }
    ]
  },

  projectsH2: 'What older students at our school have made',
  projectsLede: 'Projects from students who started young and kept going. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Words from parents on our Google profile, as they left them.',

  fees: {
    h2: 'Fees for 7 plus maths lessons',
    lede: 'A monthly fee, shown in the currency we use with UK families. The first lesson is free, and you pay nothing to sign up.',
    free: ['A short, friendly first lesson', 'A plain note on what we saw', 'Only a phone number to book'],
    group: ['A class of 15 to 20 young children', 'The same teacher each week', 'Play-based reasoning', 'Easy weeks around school events'],
    one: ['One teacher for your child', 'Paced to a shy or quick learner', 'Helpful for one wobbly area']
  },

  faq: {
    eyebrow: '7 plus questions',
    h2: 'What parents ask about 7 plus maths',
    items: [
      { q: 'What is the 7 plus exam?', a: 'It is an entrance assessment some independent schools set for children in Year 2 who want to join Year 3. Each school sets its own, so there is no single 7 plus paper.' },
      { q: 'Who writes the 7 plus?', a: 'Each school decides. Some write their own tasks; some use a provider such as Quest Admissions, which builds bespoke tests for schools from age 7+. ISEB does not set a 7 plus.' },
      { q: 'What maths is in the 7 plus?', a: 'Key stage 1 national curriculum maths: counting and place value to 100, number bonds to 20, the 2, 5 and 10 times tables, simple fractions, time and shape. The DfE says pupils should know the number bonds to 20 by the end of Year 2.' },
      { q: 'Will my child have covered everything?', a: 'Maybe not. The national curriculum only requires schools to teach each key stage\'s content by the end of that key stage, and a 7 plus is sat during Year 2, so some Year 2 topics may still be ahead.' },
      { q: 'Are there 7 plus past papers?', a: 'Not in any common sense, because each school writes its own test. Commercial packs are guesses at key stage 1 questions, not real papers. Ask the school what the assessment involves instead.' },
      { q: 'How much should a six-year-old practise?', a: 'A little and often, through talk and everyday objects. We suggest ten calm minutes a day over long weekend sessions, and stopping while it is still enjoyable.' },
      { q: 'Is my child too young for online lessons?', a: 'Our lessons for this age are short, spoken and visual, with a teacher who keeps every child talking. Our courses start from age 6, and the first lesson is free so you can see if it suits.' },
      { q: 'When are lessons?', a: TIMING + ' All times are given in UK time.' },
      { q: 'Do you promise a place?', a: 'No. Each school decides its own admissions, often on more than maths. We teach key stage 1 maths well and help a child explain their thinking.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for young mathematicians',
    lede: 'Next steps and other entry points.',
    items: [
      { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition', p: 'What comes after Year 2, from Year 3 to Year 6.' },
      { href: '/multiplication-tables-check-year-4-practice', label: 'Year 4 tables check', p: 'The national times-tables check two years later.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The next entrance point, at age 10 or 11.' },
      { href: '/common-entrance-maths-tuition', label: 'Common Entrance maths', p: 'Independent school entry at 11 and 13.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our method, from the youngest learners up.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page on our site.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Tell us your child\'s age and school year, and the schools you are considering. We will teach a short, friendly lesson and tell you kindly and plainly what we saw.',
    readFirst: 'Would you like to read first? The <a class="ag-inline-link" href="/courses/elementary-mathematics-complete-masterclass">primary maths course</a> shows the full syllabus, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes our approach with young children.',
    note: 'A WhatsApp message gets the quickest answer and is free from a UK phone. We reply from our team in India, on a number that begins +91.',
    formNote: 'There is no payment step here. We reply once to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Young learners', links: [
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths' },
        { href: '/multiplication-tables-check-year-4-practice', label: 'Year 4 tables check' },
        { href: '/11-plus-maths-tuition', label: '11 plus maths' },
        { href: '/common-entrance-maths-tuition', label: 'Common Entrance' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/courses/elementary-mathematics-complete-masterclass', label: 'Primary maths course' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Number bonds to 20, said out loud, at six'
  },

  personalityCss: `
.ag-root.ag-pp .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-pp .ag-capsule { border-left-width: 6px; border-radius: 4px; }
.ag-root.ag-pp .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-pp .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-pp .ag-table th:first-child { width: 18%; }
`,

  dossier: {
    curriculumAuthority: 'Department for Education, National curriculum in England: mathematics programmes of study, key stages 1 and 2 (statutory requirements for Years 1 and 2; key stage 1 summary; school curriculum flexibility within a key stage; calculators only near the end of key stage 2), read 31 October 2026. Quest Admissions: tests for ages 7+ to 16+, bespoke and branded, paper and online, main entry and in-year; each child\'s assessment unique to the school. ISEB: Common Pre-Tests taken in Year 6 or 7. No exam board sets a 7 plus; each school sets its own.',
    localProject: 'A 7 plus maths page for families of six and seven year olds. It explains that each school sets its own test (with Quest\'s bespoke 7+ offer and ISEB\'s absence at this age as evidence), compares 7+, 11+ and 13+ setters in one table, lays out key stage 1 statutory maths in a Year 1 and Year 2 table with what we look for, explains the curriculum\'s end-of-key-stage flexibility and why a Year 2 child may not yet have been taught some topics, teaches three spoken worked examples (balancing the equals sign, an array two ways, fair sharing) and a six-question gentle practice set, and gives a seven-step home plan. Lesson family: thinking aloud with objects and pictures.',
    requiredMentions: ['By the end of year 2, pupils should know the number bonds to 20', 'only required to teach the relevant programme of study by the end of the key stage', 'For ages 7+ to 16+', 'Your child\'s assessment is unique to the school they\'re applying to', 'clock times to the nearest five minutes', 'do not have to follow the national curriculum', 'are taken by pupils in Year 6 or 7', 'only be introduced near the end of key stage 2'],
    sources: [
      { claim: 'DfE national curriculum, mathematics key stages 1 and 2: Year 1 and Year 2 statutory requirements, end of Year 2 expectation, key stage flexibility, calculators.', url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study' },
      { claim: 'Quest Admissions: ages 7+ to 16+, bespoke and branded, paper and online, main entry and in-year.', url: 'https://www.questassessments.com/admissions' },
      { claim: 'Quest parent guidance: each assessment is unique to the school.', url: 'https://www.questassessments.com/parent-guidance' },
      { claim: 'ISEB: Common Pre-Tests are taken in Year 6 or 7.', url: 'https://www.iseb.co.uk/' },
      { claim: 'GOV.UK: academies and private schools do not have to follow the national curriculum.', url: 'https://www.gov.uk/national-curriculum' }
    ],
    rejectedClaims: [
      'Names of schools with 7 plus entry, their test formats, dates or numbers of places: deliberately not printed (no individual school named).',
      'Tutor-site claims about 7 plus pass rates, competition ratios or "typical" papers: not primary, not used.',
      'Commercial "7 plus past papers": not real school papers, not used or linked.',
      'Money questions with pence or pound figures: left out to keep the page free of typed currency.',
      'Any score target or place promise.'
    ]
  }
};
