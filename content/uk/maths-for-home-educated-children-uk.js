'use strict';
// Maths for home-educated children, UK (ag- maths door, whole-curriculum maths; UK cluster row UK082).
// Sibling: coding-for-home-educated-children-uk already quotes gov.uk's "do not have to follow the national
// curriculum", s.7 of the Education Act 1996, para 1.2 on tutors, unregulated settings, exam costs and the
// 126,000 census figure. This page uses different passages and different facts throughout.
// Read raw with curl on 31 October 2026 (copies under keyword-research-2026-09/uk-us-gap/src/
// maths-for-home-educated-children-uk/):
//  - DfE, Elective home education: guidance for parents (April 2019 PDF, England): 2.7 "There is no legal
//    definition of "full-time" in terms of education at home, or at school."; school pupils "normally have
//    about five hours tuition a day for 190 days a year, spread over about 38 weeks"; 2.8 parents are not
//    required to "have a timetable"; 2.10 "if a child is very good at mathematics, it might focus more on
//    that than some other subjects"; 2.10c "local authorities may use minimum expectations for literacy and
//    numeracy in assessing suitability"; 2.11 no legal requirement to "give formal lessons", "mark work done
//    by the child", "formally assess progress, or set development objectives", "match school-based,
//    age-specific standards"; 2.12 "it is likely to be much easier for you to show that the education
//    provided is suitable if attention has been paid to the breadth of the curriculum and its content, and
//    the concepts of progress and assessment in relation to your child's ability."; 3.1 consider "whether
//    you expect your child to sit public examinations such as GCSEs or not". Publication page: last updated
//    19 August 2024, applies to England.
//  - DfE Explore Education Statistics, Elective home education, autumn term 2025/26 (published 15 January
//    2026): rate "1.5% of the population of comparable ages"; numbers rise by year group "from 3% expected to
//    be in year group 1 to 19% expected to be in year group 11"; "Over a third of EHE children were expected
//    to be in either year groups 10 or 11."; official statistics in development.
//  - National curriculum in England, mathematics programmes of study (gov.uk): three aims (fluent, reason
//    mathematically, solve problems); "By the end of year 2, pupils should know the number bonds to 20";
//    "By the end of year 4, pupils should have memorised their multiplication tables up to and including
//    the 12 multiplication table"; "By the end of year 6, pupils should be fluent in written methods for all
//    4 operations, including long multiplication and division, and in working with fractions, decimals and
//    percentages."
//  - AQA GCSE Mathematics 8300 specification: "Students must take three question papers at the same tier.";
//    Foundation "grades 1 – 5", Higher "grades 4 – 9" (restated without dashes); Paper 1 "written exam: 1
//    hour 30 minutes", "80 marks", "non-calculator", "33⅓% of the GCSE Mathematics assessment"; 5.8 a private
//    candidate "may be self-taught, home-schooled or have private tuition, either with a tutor or through a
//    distance learning organisation. You must be based in the UK."
//  - Welsh Government, Elective home education guidance (last updated 21 March 2025): home-educated children
//    are not required to "follow the Curriculum for Wales or any other specified curriculum" or "meet criteria
//    for the number of learning hours"; 6.15 "All local authorities have agreed to accept independent
//    candidates from home-educated families at an identified examination centre."
//  - Scottish Government, Home education guidance (updated version, errata 28 May 2025): section 30(1) of the
//    Education (Scotland) Act 1980, "efficient education for him suitable to his age, ability and aptitude";
//    section 35 consent to withdraw from a public school; "Parents are not required to have any
//    qualifications or training to home educate their children."
//  - nidirect, Educating your child at home: full-time education "from age four to 16 normally"; "you do not
//    need to be a qualified teacher"; "there are no funds directly available for parents"; the EA "may also
//    visit you annually".
// Our own: the record-keeping example, the week plan, the four age-band problems. Spine: the law asks for a
// suitable, efficient education and not for the national curriculum, and maths is the subject where
// progress is easiest to show and hardest to fake, so it is where home educators most often buy help.
// Lesson family: a whole-subject door for families who are the school.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'HOME EDUCATION', label: 'Maths for home-educated children', blurb: 'No law requires the national curriculum at home, but maths is where progress is easiest to show. A plan from age 5 to GCSE.' },
  slug: 'maths-for-home-educated-children-uk',
  code: 'hec',
  accent: '#7F544C',
  accentRationale: 'Home education maths: a clay rose (#7F544C), 6.05:1 on #FBF8F2 and 5.20:1 on the deepest paper tint, warmer and lighter than the coding home-education page it sits beside',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths for home-educated children',
  title: 'Maths for Home Educated Children UK | Ages 5 to 16, Live',
  description: 'Maths for home-educated children in the UK: what the law in each nation asks, how to plan and record maths from age 5 to GCSE, and live online lessons to fit.',
  ogDescription: 'Home educators do not have to follow the national curriculum, but maths is where suitability is easiest to show. A plan from Year 1 to GCSE.',
  twitterDescription: 'Home education maths across England, Wales, Scotland and Northern Ireland: the law, the milestones, GCSE as a private candidate, and live lessons.',
  pageName: 'Maths for Home Educated Children in the UK',
  webPageDescription: 'A guide and live online maths lessons for home-educating families in the UK, built from government guidance in each nation and the national curriculum for England.',
  courseDescription: 'Live online maths lessons for home-educated children aged 5 to 16, from early number to GCSE, in a group or one to one, planned around a family\'s own curriculum.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Home education maths',
  navLinks: [
    { href: '#law', label: 'The law' },
    { href: '#milestones', label: 'Milestones' },
    { href: '#record', label: 'Showing progress' },
    { href: '#gcse', label: 'GCSE' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England, Wales, Scotland, Northern Ireland &middot; Ages 5 to 16',
  h1: 'Maths for home-educated children in the UK',
  lede: 'Home-educating parents in every UK nation must give their child a suitable, efficient full-time education, but none of the four requires them to follow a national curriculum. Maths is usually the subject where families want most help, and it is also the subject where progress is easiest to show. Modern Age Coders teaches maths live online to home-educated children from age 5 to GCSE, in a group or one to one, starting with our elementary maths course. This page sets out what each nation\'s guidance says, the milestones worth borrowing from the curriculum, how to keep a record that shows progress, and how GCSE Maths works for a private candidate.',
  secondaryCta: { href: '#milestones', label: 'See the milestones' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my home-educated child.',
  heroNote: 'From government guidance in all four nations, read 31 October 2026 &middot; Not connected with any council or exam board',
  spec: [
    ['Ages', '5 to 16, and older for GCSE'],
    ['National curriculum', 'Not required in any UK nation'],
    ['What the law asks', 'Suitable, efficient, full-time'],
    ['Exams', 'Optional; paid for by the family'],
    ['GCSE Maths', 'Three papers, one tier, private entry'],
    ['Lessons', 'Group of 15 to 20, or 1-on-1'],
    ['Fits', 'Your curriculum, not ours'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'Do home-educated children have to follow the national curriculum for maths?',
  capsule: 'No. In England the Department for Education\'s guidance for parents lists no legal requirement to teach the National Curriculum, give formal lessons, mark work or "match school-based, age-specific standards". Wales says home-educated children need not follow the Curriculum for Wales, Scotland\'s 1980 Act asks for "efficient education" suitable to age, ability and aptitude, and Northern Ireland\'s guidance says a child "is not obliged to follow the curriculum or take tests". What every nation does require is a suitable education, and England\'s guidance notes councils "may use minimum expectations for literacy and numeracy in assessing suitability". So maths matters, on the family\'s own terms. DfE figures for autumn 2025 put home education at 1.5 per cent of children of comparable ages in England. Modern Age Coders teaches home-educated children maths live online, from first number to GCSE, alongside whatever curriculum the family uses.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses for home-educated learners',
    lede: 'One for each broad stage. Each card opens the full syllabus, which you can use as a scheme of work on its own.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'HEC / 01', title: 'Primary maths, Years 1 to 5', note: 'Number, place value, the four operations, fractions, measures and shape, in order, from age 5 or 6.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'HEC / 02', title: 'Lower secondary maths', note: 'Ratio, negative numbers, early algebra and geometry for ages 11 to 14, the bridge most families find hardest to teach.' },
      { course: 'gcse-mathematics-mastery', code: 'HEC / 03', title: 'GCSE Maths, Foundation and Higher', note: 'For a child who will sit GCSE as a private candidate, taught to the board and tier the exam centre offers.' }
    ]
  },

  sections: [
    {
      id: 'law', tint: 'tint', eyebrow: 'The law, nation by nation',
      h2: 'What does the law ask of home-educating parents in each UK nation?',
      lede: 'The wording differs, but the core is the same: an education suitable to the child, delivered efficiently, without a compulsory curriculum. Maths is not named in any of the four laws.',
      body: [
        { kind: 'table', caption: 'Home education and maths in the four UK nations, from each government\'s own guidance', head: ['Nation', 'The duty', 'Curriculum', 'Worth knowing for maths'], rows: [
          ['England', 'Efficient full-time education suitable to age, ability and aptitude (Education Act 1996, section 7)', 'Not required', 'Councils "may use minimum expectations for literacy and numeracy in assessing suitability"'],
          ['Wales', 'The same section 7 duty, applied in Wales', 'Not required to "follow the Curriculum for Wales or any other specified curriculum"', 'Not required to "meet criteria for the number of learning hours"; every council has agreed an exam centre for home-educated candidates'],
          ['Scotland', 'Efficient education suitable to age, ability and aptitude (Education (Scotland) Act 1980, section 30)', 'No set curriculum', 'Council consent is needed to withdraw a child already attending a public school (section 35)'],
          ['Northern Ireland', 'Full-time education suitable to age, ability and aptitude, normally from age four to 16', '"not obliged to follow the curriculum or take tests"', 'The Education Authority may visit annually; "there are no funds directly available for parents"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What England\'s guidance says you need not do',
          left: [
            'Paragraph 2.11 of the Department for Education\'s guidance for parents lists things with no legal requirement, including to "give formal lessons", "mark work done by the child", "formally assess progress, or set development objectives" and "match school-based, age-specific standards".',
            'It also says there is no legal definition of full-time. School pupils "normally have about five hours tuition a day for 190 days a year, spread over about 38 weeks", but home education "does not have to mirror this", and parents need not "have a timetable".'
          ],
          rightH3: 'And what makes life easier',
          right: [
            'The same guidance adds, in paragraph 2.12: "it is likely to be much easier for you to show that the education provided is suitable if attention has been paid to the breadth of the curriculum and its content, and the concepts of progress and assessment in relation to your child\'s ability."',
            'It even anticipates a maths-minded child: suitability "should take account of any specific aptitudes (for example if a child is very good at mathematics, it might focus more on that than some other subjects)."'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/elective-home-education" rel="noopener" target="_blank">DfE, Elective home education: guidance for parents</a> (England, page last updated 19 August 2024); <a class="ag-inline-link" href="https://www.gov.wales/elective-home-education-guidance" rel="noopener" target="_blank">Welsh Government, Elective home education guidance</a> (updated 21 March 2025); <a class="ag-inline-link" href="https://www.gov.scot/publications/home-education-guidance-2/" rel="noopener" target="_blank">Scottish Government, Home education guidance</a>; <a class="ag-inline-link" href="https://www.nidirect.gov.uk/articles/educating-your-child-home" rel="noopener" target="_blank">nidirect, Educating your child at home</a>. All read 31 October 2026. We give no legal advice; your council or education authority is the place to ask.' }
      ]
    },
    {
      id: 'milestones', tint: 'deep', eyebrow: 'Milestones worth borrowing',
      h2: 'What maths should a home-educated child know at each age?',
      lede: 'Nothing is compulsory, but the national curriculum for England gives three clear checkpoints in primary maths, and they are a useful yardstick even for families who follow no curriculum at all.',
      body: [
        { kind: 'table', caption: 'Three checkpoints from the national curriculum in England, with what we watch for', head: ['Checkpoint', 'The curriculum\'s words', 'What it looks like at home (ours)'], rows: [
          ['End of Year 2, about age 7', '"pupils should know the number bonds to 20 and be precise in using and understanding place value"', 'Says 13 and 7 make 20 without counting; knows the 4 in 47 is forty'],
          ['End of Year 4, about age 9', '"pupils should have memorised their multiplication tables up to and including the 12 multiplication table"', 'Answers 8 times 7 or 54 divided by 9 in a breath, in any order'],
          ['End of Year 6, about age 11', '"pupils should be fluent in written methods for all 4 operations, including long multiplication and division, and in working with fractions, decimals and percentages"', 'Does 47 times 36 and 936 divided by 24 on paper correctly, and knows three eighths is 0.375']
        ] },
        { kind: 'p', mt: true, html: 'The curriculum frames all of this around three aims: that pupils become fluent, "reason mathematically by following a line of enquiry, conjecturing relationships and generalisations", and solve problems, "including breaking down problems into a series of simpler steps and persevering in seeking solutions". Home education can serve the second and third aims unusually well, because there is time to follow a question wherever it goes. The first aim, fluency, is the one most often missed, because it needs short, frequent, slightly dull practice that a project-led day can quietly skip.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ages 5 to 7 (our example)', p: 'There are 7 cups and 3 more plates than cups. How many plates? Ten. The habit to build is saying the sum out loud, 7 and 3 more, before counting anything.' },
          { h3: 'Ages 8 to 11 (our example)', p: 'A bus leaves at 8:05 and every 12 minutes after. How many leave before 9:00? 8:05, 8:17, 8:29, 8:41, 8:53: five. Listing beats guessing, and the list is the working.' },
          { h3: 'Ages 11 to 14 (our example)', p: 'Share 84 sweets in the ratio 3 to 4. There are 7 parts, so one part is 12, giving 36 and 48. Check that 36 plus 48 is 84 before moving on.' }
        ] },
        { kind: 'p', mt: true, html: 'At ages 14 to 16 the target is usually GCSE. Our example at that level: solve 3(x minus 2) equals 2x plus 5. Expand to 3x minus 6, so x minus 6 equals 5 and x is 11. Check by substitution: 3 times 9 is 27, and 22 plus 5 is 27. That last line, the check, is worth teaching as a ritual from the first algebra lesson.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">National curriculum in England: mathematics programmes of study</a>. The examples and the "at home" column are ours.' }
      ]
    },
    {
      id: 'record', tint: '', eyebrow: 'Showing progress',
      h2: 'How can home educators show maths progress to the council?',
      lede: 'There is no required format. A light record kept through the year makes any informal enquiry straightforward, and it helps the child too.',
      body: [
        { kind: 'ol', items: [
          'Write down, in a few lines, what maths your child is working on this term and why: your own aims, not a school\'s.',
          'Keep dated samples: one piece of written working a week is plenty, including the mistakes.',
          'Note the checkpoints met, such as number bonds to 20 or the 12 times table, with the date.',
          'Record the resources and lessons used, whether books, online lessons, games or projects.',
          'Once a term, write a short paragraph on what improved and what is next.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'An example entry (ours)',
          left: [
            'Week of 12 October. Fractions of amounts: found three quarters of 56 and two fifths of 35 using unit fractions first. Mistake: found one quarter but forgot to multiply by three on two questions; corrected after we drew a bar. Next: fractions of measures, such as three quarters of a kilogram.',
            'That is four sentences and it shows content, method, a real error, a correction and a plan, which is exactly the "progress and assessment" England\'s guidance mentions.'
          ],
          rightH3: 'What councils and authorities may ask',
          right: [
            'In England councils may make an informal enquiry. In Northern Ireland, nidirect says a family can respond by writing a report, providing samples of work, or meeting an Education Authority officer at home or elsewhere, with or without the child.',
            'A maths record does double duty here, because numeracy is the area England\'s guidance names alongside literacy as one where minimum expectations may be used.'
          ] },
        { kind: 'p', mt: true, html: 'When a family uses our lessons, each child\'s teacher sends a short note after each block on what was covered and what is secure, which slots straight into a record like the one above. We do not replace the parent\'s own judgement, and we do not report to councils; the record is yours.' }
      ]
    },
    {
      id: 'gcse', tint: 'tint', eyebrow: 'GCSE as a private candidate',
      h2: 'How does a home-educated child sit GCSE Maths?',
      lede: 'As a private candidate, through an exam centre that agrees to enter them, at the family\'s cost. Plan the centre first, then the board and tier.',
      body: [
        { kind: 'table', caption: 'AQA GCSE Mathematics 8300, from AQA\'s specification', head: ['Feature', 'What AQA says'], rows: [
          ['Tiers', 'Foundation, grades 1 to 5; Higher, grades 4 to 9'],
          ['Papers', '"Students must take three question papers at the same tier." All in the same series'],
          ['Paper 1', 'Written exam, 1 hour 30 minutes, 80 marks, non-calculator'],
          ['Papers 2 and 3', 'Calculator papers of the same length and marks'],
          ['Weighting', 'Each paper is one third of the GCSE'],
          ['Private candidates', 'May be "self-taught, home-schooled or have private tuition, either with a tutor or through a distance learning organisation. You must be based in the UK."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why so many families face this',
          left: [
            'DfE\'s autumn 2025 figures show home education rising with age, "from 3% expected to be in year group 1 to 19% expected to be in year group 11", and "Over a third of EHE children were expected to be in either year groups 10 or 11." GCSE is therefore a live question for a large share of home-educating families.',
            'England\'s guidance asks parents to think early about "whether you expect your child to sit public examinations such as GCSEs or not".'
          ],
          rightH3: 'Wales has gone further',
          right: [
            'The Welsh Government says "All local authorities have agreed to accept independent candidates from home-educated families at an identified examination centre." Families in Wales should ask their council which centre that is before choosing a board.',
            'Elsewhere, finding a centre is the family\'s task, and the centre often decides which board and tier are possible.'
          ] },
        { kind: 'p', mt: true, html: 'Our <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE maths page</a> covers the exams in depth, and <a class="ag-inline-link" href="/aqa-vs-edexcel-vs-ocr-gcse-maths">AQA, Edexcel and OCR compared</a> helps once the centre has said which boards it enters. For an older learner, <a class="ag-inline-link" href="/functional-skills-maths-tuition-online">Functional Skills maths</a> is another route. For computing, see <a class="ag-inline-link" href="/coding-for-home-educated-children-uk">coding for home-educated children</a>.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300" rel="noopener" target="_blank">AQA GCSE Mathematics 8300 specification</a>, sections 1 and 5.8; <a class="ag-inline-link" href="https://explore-education-statistics.service.gov.uk/find-statistics/elective-home-education" rel="noopener" target="_blank">DfE, Elective home education, autumn term 2025/26</a> (official statistics in development); Welsh Government guidance, section 6. Not connected with AQA or any exam centre.' }
      ]
    },
    {
      id: 'week', tint: 'deep', eyebrow: 'A week of maths',
      h2: 'How much maths should a home-educated child do each week?',
      lede: 'No law sets a number. Our suggestion is short, frequent fluency work plus one longer session that goes deep, and the curriculum\'s own wording on fluency points the same way.',
      body: [
        { kind: 'table', caption: 'A sample week for a 9-year-old, our suggestion and nothing more', head: ['Day', 'What', 'How long'], rows: [
          ['Monday', 'Times tables and number bonds, quick-fire', '10 minutes'],
          ['Tuesday', 'Live lesson: one new idea, such as fractions of amounts', 'About an hour'],
          ['Wednesday', 'Practice from the lesson, then a puzzle', '20 minutes'],
          ['Thursday', 'Maths in life: a recipe, a timetable, a shopping list', '20 minutes'],
          ['Friday', 'Quick-fire again, then write the week\'s record entry together', '15 minutes']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why short and often',
          left: [
            'Fluency, the first national curriculum aim, comes from "varied and frequent practice". Ten minutes daily beats an hour once a week for recall, and it leaves the long session free for understanding.',
            'Home education is good at the long session. It is the ten minutes that slips.'
          ],
          rightH3: 'Where a teacher helps most',
          right: [
            'With the new idea, especially past age 11, when ratio, negative numbers and algebra arrive and many parents last met them decades ago.',
            'With a second adult\'s view. A teacher who sees the same child every week notices a stuck method early, and a group of peers working on the same idea answers a common worry about isolation.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages from first number to GCSE',
    lede: 'Ages are rough; home education lets a child move when ready, which the national curriculum also says is the right test.',
    table: { caption: 'Our stages for home-educated maths', head: ['Stage', 'Ages', 'Secure when'], rows: [
      ['1. Number sense', '5 to 7', 'Bonds to 20 and place value in two-digit numbers are automatic'],
      ['2. Tables and methods', '7 to 11', 'Tables to 12 recalled; written methods for all four operations'],
      ['3. The secondary bridge', '11 to 14', 'Ratio, negatives, early algebra and angle facts used with confidence'],
      ['4. Exam course', '14 to 16', 'Board and tier chosen with the exam centre; three papers practised']
    ] },
    left: { h3: 'Moving at the child\'s pace', ps: [
      'The national curriculum itself says decisions about progress should rest on "the security of pupils\' understanding". A home-educated child can take that literally.',
      'We place children by what is secure, not by birthday.'
    ] },
    right: { h3: 'Beyond GCSE', ps: [
      'Our <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level maths page</a> covers the next step.',
      'Children who love maths often enjoy <a class="ag-inline-link" href="/maths-olympiad-training-uk">olympiad problems</a> too.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Maths courses for home-educating families',
    lede: 'From first counting to exam courses. Each card opens a syllabus you can follow on your own.',
    bands: [
      { num: 'I', h3: 'Primary', sub: 'Ages 5 to 11', courses: [
        { code: 'UK / HEC / 01', slug: 'early-math-foundations', title: 'Early maths foundations', blurb: 'Concrete, playful number for ages 4 to 7.' },
        { code: 'UK / HEC / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'The core primary strands in a sensible order.' },
        { code: 'UK / HEC / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Fluency through number sense, not tricks.' },
        { code: 'UK / HEC / 04', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'A hands-on route to quick calculation.' }
      ] },
      { num: 'II', h3: 'Lower secondary', sub: 'Ages 11 to 14', courses: [
        { code: 'UK / HEC / 05', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'Pre-algebra and geometry, the bridge to GCSE.' },
        { code: 'UK / HEC / 06', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python projects that make maths visible.' }
      ] },
      { num: 'III', h3: 'Exam courses', sub: 'Ages 14 and up', courses: [
        { code: 'UK / HEC / 07', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'Foundation and Higher, taught to the board.' },
        { code: 'UK / HEC / 08', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'For centres that enter international GCSEs.' },
        { code: 'UK / HEC / 09', slug: 'functional-skills-maths-course', title: 'Functional Skills maths', blurb: 'Level 1 and Level 2, for older learners.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Lessons that fit a family timetable',
    lede: TIMING + ' A home-educated child can also book 1-on-1 lessons inside the school day. Our teachers work from India, where clocks never change, so India time is four and a half hours ahead of UK time in summer and five and a half in winter; we book every lesson in UK time.',
    slots: [
      { time: 'Weekday daytime', l: '1-on-1 lessons inside the UK school day.' },
      { time: 'After school hours', l: 'Group batches with children from schools.' },
      { time: 'Weekend morning', l: 'For families who keep weekdays for projects.' }
    ],
    cells: [
      { h3: 'Your curriculum first', p: 'We teach alongside whatever you use, rather than replacing it.' },
      { h3: 'Placed by readiness', p: 'Grouped by what is secure, not by school year.' },
      { h3: 'Notes for your record', p: 'A short written summary after each block of lessons.' },
      { h3: 'Group or 1-on-1', p: 'A batch of 15 to 20 at one stage, or a teacher for one child.' },
      { h3: 'Peers on screen', p: 'Other children working on the same idea, every week.' },
      { h3: 'Exam-aware', p: 'GCSE lessons taught to the board and tier your centre enters.' }
    ]
  },

  projectsH2: 'Made by our students',
  projectsLede: 'Projects from children in our classes, home-educated and not. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote on our Google profile, unchanged.',

  fees: {
    h2: 'Fees for home education maths',
    lede: 'A monthly fee in the currency we use for UK families, with no term contract, which suits a family budget that has to cover exams and books too. The first lesson is free.',
    free: ['A lesson at the child\'s real level', 'A placement view you can keep', 'Only a phone number to book'],
    group: ['15 to 20 children at one stage', 'One teacher across the year', 'Written notes for your records', 'Notes after every block'],
    one: ['One child, one teacher', 'Planned around your own scheme', 'Good for GCSE years']
  },

  faq: {
    eyebrow: 'Home education maths questions',
    h2: 'What home-educating parents ask about maths',
    items: [
      { q: 'Do I have to follow the national curriculum for maths?', a: 'No, in any UK nation. England\'s guidance lists no legal requirement to teach the National Curriculum, Wales says children need not follow the Curriculum for Wales, and Northern Ireland says a child is not obliged to follow the curriculum. The education must still be suitable.' },
      { q: 'How many hours of maths a week do home-educated children need?', a: 'No law sets a figure. England\'s guidance says there is no legal definition of full-time and parents need not keep a timetable, and Wales says there are no criteria for learning hours. We suggest short daily fluency work plus one longer session.' },
      { q: 'What maths should my child know by age 11?', a: 'There is no legal standard for home education, but the national curriculum in England expects fluent written methods for all four operations, including long multiplication and division, and confidence with fractions, decimals and percentages by the end of Year 6. It is a useful yardstick.' },
      { q: 'Will the council check my child\'s maths?', a: 'In England a council may make an informal enquiry and may use minimum expectations for literacy and numeracy when judging suitability. A dated record with samples of work is the simplest way to answer.' },
      { q: 'Can a home-educated child sit GCSE Maths?', a: 'Yes, as a private candidate through an exam centre that agrees to enter them. AQA\'s specification says a private candidate may be home-schooled and must be based in the UK, and the family pays the entry costs.' },
      { q: 'How is GCSE Maths structured?', a: 'For AQA 8300, three papers of 1 hour 30 minutes and 80 marks each, all at the same tier, with Paper 1 non-calculator. Foundation covers grades 1 to 5 and Higher grades 4 to 9.' },
      { q: 'Is there any funding for home education maths in Northern Ireland?', a: 'nidirect says there are no funds directly available for parents who decide to educate their children at home. In England and Wales any help with exam costs is at the council\'s discretion.' },
      { q: 'Can my child have lessons during the school day?', a: 'Yes, as 1-on-1 lessons booked at a time that suits you. Group batches mostly run after school, because they include children who attend school; all times are in UK time.' },
      { q: 'When are lessons?', a: TIMING + ' Every time is given in UK time.' },
      { q: 'Do you report to the council?', a: 'No. We send you short written notes on what was covered and what is secure, for your own records. Decisions and contact with the council stay with you.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for home-educating families',
    lede: 'Computing, exams and the next steps.',
    items: [
      { href: '/coding-for-home-educated-children-uk', label: 'Coding for home-educated children', p: 'Computing GCSE and the exam centre question.' },
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'The exam in detail, board by board.' },
      { href: '/aqa-vs-edexcel-vs-ocr-gcse-maths', label: 'AQA, Edexcel or OCR maths', p: 'Choosing once the centre has named its boards.' },
      { href: '/functional-skills-maths-tuition-online', label: 'Functional Skills maths', p: 'A practical qualification for older learners.' },
      { href: '/ks2-sats-maths-papers-explained', label: 'KS2 maths papers explained', p: 'A yardstick for age 11, even without the tests.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Our hub for every UK page.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Tell us your child\'s age, what maths you have covered and how you like to work. We teach a short lesson, then tell you where we would place them.',
    readFirst: 'Reading first? Each <a class="ag-inline-link" href="/courses">course page</a> has a syllabus you can use as a plan, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our method.',
    note: 'WhatsApp reaches us fastest and costs nothing from a UK phone. We reply from India on a +91 number; there is no UK office.',
    formNote: 'No card, no contract, one reply.'
  },

  footer: {
    cols: [
      { h4: 'Home education', links: [
        { href: '/coding-for-home-educated-children-uk', label: 'Coding at home' },
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths' },
        { href: '/functional-skills-maths-tuition-online', label: 'Functional Skills maths' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths' }
      ] },
      { h4: 'About us', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Your curriculum, our maths lessons, your record'
  },

  personalityCss: `
.ag-root.ag-hec .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-hec .ag-capsule { border-left-width: 5px; border-radius: 0 12px 12px 0; }
.ag-root.ag-hec .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-hec .ag-table caption { text-align: left; font-weight: 610; }
.ag-root.ag-hec .ag-table th:first-child { width: 22%; }
`,

  dossier: {
    curriculumAuthority: 'England: DfE Elective home education guidance for parents (2019; page updated 19 August 2024): no legal definition of full-time; about five hours a day for 190 days in school; no timetable needed; councils may use minimum expectations for literacy and numeracy; 2.11 list; 2.12 progress and assessment; GCSE planning. DfE EHE statistics autumn 2025/26: 1.5 per cent; 3 per cent in Year 1 to 19 per cent in Year 11; over a third in Years 10 or 11. National curriculum maths: aims; end of Year 2, 4 and 6 checkpoints. AQA 8300: three papers at one tier, 1 hour 30 minutes, 80 marks, Paper 1 non-calculator, Foundation 1 to 5, Higher 4 to 9, private candidates may be home-schooled and must be UK-based. Wales (updated 21 March 2025): no required curriculum or learning hours; all councils accept home-educated candidates at an identified exam centre. Scotland: 1980 Act section 30 and section 35 consent; no qualifications required of parents. Northern Ireland (nidirect): age four to 16; not obliged to follow the curriculum; no funds; EA may visit annually.',
    localProject: 'Suitable, not national. The page compares the home education duty in England, Wales, Scotland and Northern Ireland in one table, quotes England\'s list of things parents need not do alongside its advice that progress and assessment make suitability easier to show, and its note that councils may use numeracy expectations. It borrows three national curriculum checkpoints as a yardstick with original age-band problems, gives a five-step way to keep a maths record with an example entry, explains GCSE Maths for a private candidate from AQA\'s specification and DfE\'s year-group figures, and suggests a sample week. Lesson family: a whole-subject door for families who are the school.',
    requiredMentions: ['match school-based, age-specific standards', 'about five hours tuition a day for 190 days a year', 'minimum expectations for literacy and numeracy', 'from 3% expected to be in year group 1 to 19% expected to be in year group 11', 'meet criteria for the number of learning hours', 'All local authorities have agreed to accept independent candidates', 'there are no funds directly available for parents', 'memorised their multiplication tables up to and including the 12 multiplication table'],
    sources: [
      { claim: 'DfE Elective home education guidance for parents (England): full-time, suitability, numeracy, 2.11 list, 2.12, exams.', url: 'https://assets.publishing.service.gov.uk/media/5ca21e22e5274a77d9d26feb/EHE_guidance_for_parentsafterconsultationv2.2.pdf' },
      { claim: 'DfE Elective home education statistics, autumn term 2025/26: rate and year-group profile.', url: 'https://explore-education-statistics.service.gov.uk/find-statistics/elective-home-education' },
      { claim: 'National curriculum in England, mathematics: aims and end of Year 2, 4 and 6 expectations.', url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study' },
      { claim: 'AQA GCSE Mathematics 8300 specification: papers, tiers, private candidates.', url: 'https://filestore.aqa.org.uk/resources/mathematics/specifications/AQA-8300-SP-2015.PDF' },
      { claim: 'Welsh Government Elective home education guidance: curriculum, hours, exam centres.', url: 'https://www.gov.wales/elective-home-education-guidance-html' },
      { claim: 'Scottish Government Home education guidance: section 30 and section 35 of the 1980 Act.', url: 'https://www.gov.scot/publications/home-education-guidance-2/' },
      { claim: 'nidirect, Educating your child at home: ages, curriculum, funds, EA visits.', url: 'https://www.nidirect.gov.uk/articles/educating-your-child-home' }
    ],
    rejectedClaims: [
      'Reasons families give for home education and any breakdown by sex or need: in the DfE release but outside this page\'s scope.',
      'Pending legislation on registers of children not in school: no primary text read for this build; not mentioned.',
      'Exam entry fees at any centre: vary, and never quoted.',
      'Which centres accept private candidates in England: not published centrally in what we read.',
      'Any claim that our lessons satisfy a council\'s suitability test: a matter for the council; not made.'
    ]
  }
};
