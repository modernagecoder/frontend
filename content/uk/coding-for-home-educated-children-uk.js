'use strict';
// Coding for home-educated children, UK (ag- community door; UK cluster Phase 3). England-focused.
// Sources, read raw on 21 September 2026:
//  - gov.uk, Educating your child at home: "You must make sure your child receives a full-time education from
//    the age of 5, but you do not have to follow the national curriculum."; councils may make an "informal
//    enquiry" and can serve a school attendance order.
//  - DfE, Elective home education: guidance for parents (April 2019, PDF): Section 7 of the Education Act 1996,
//    "efficient full-time education suitable - (a) to his age, ability and aptitude, and (b) to any special
//    educational needs he may have"; "As a parent you can choose to engage private tutors or other adults, or
//    online tuition, to assist in providing a suitable education, but there is no requirement to do so.";
//    such settings "may well not be regulated in any way so there is no external assurance that they comply
//    with basic standards, such as proper vetting of staff and safeguarding children"; parents "must be
//    prepared to assume full financial responsibility for the child's education, including bearing the cost
//    of any public examinations (which would have to be entered via an external examinations centre, which
//    may be some distance from your home)"; no need to "teach the National Curriculum". Publication page:
//    applies to England, last updated 19 August 2024.
//  - DfE, Elective home education, autumn term 2025/26 (Explore Education Statistics): "126,000 children in
//    elective home education (EHE) on census date in autumn 2025"; 111,700 in the previous autumn term;
//    "175,900 children were EHE at any point during the 2024/25 academic year"; official statistics in
//    development; "changes over time are likely to be in part due to improvements in data quality".
//  - AQA GCSE Computer Science 8525 spec: Paper 1 "Written exam: 2 hours", Paper 2 "Written exam: 1 hour 45
//    minutes"; "This specification is available to private candidates."; a private candidate "may be
//    self-taught, home schooled or have private tuition"; "They must be based in the UK."
//  - OCR J277 spec (v3.1): J277/02 "an externally assessed written examination" of 1 hour 30 minutes;
//    "Private candidates need to contact OCR approved centres to establish whether they are prepared to host
//    them as a private candidate. The centre may charge for this facility and OCR recommends that the
//    arrangement is made early in the course."
//  - Edexcel GCSE Computer Science (1CP2) spec: one written paper and a "practical onscreen assessment" of
//    programming, with schools choosing the IDE. No private-candidate statement was found in the text read.
// Spine: for a home-educated child, the exam centre decides which computing GCSE is possible. Parents carry
// the cost and must find a centre willing to host a private candidate; written-paper specifications are far
// easier to place than an onscreen programming exam. Honest limits: our teachers work from India and are not
// DBS-checked (the tutor page explains why); we are one optional source of tuition, not a school.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'HOME EDUCATION', blurb: 'For home-educated children, the exam centre decides which computing GCSE is possible. Find it first, then choose the board.' },
  slug: 'coding-for-home-educated-children-uk',
  code: 'hed',
  accent: '#531DA5',
  accentRationale: 'Home education: a bright violet from the solver (8.17:1 on every paper tint, dE 8.7 from the nearest used accent), friendly for families while keeping strong contrast',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Coding for home-educated children',
  title: 'Coding for Home-Educated Children, UK | GCSE Routes',
  description: 'Coding for home-educated children in the UK: what the law asks, how private candidates sit GCSE Computer Science, and why finding an exam centre comes first.',
  ogDescription: 'Home-educated children can sit GCSE Computer Science as private candidates. The catch is finding a centre, and that decides which board is realistic.',
  twitterDescription: 'Coding and computing for home-educated children: the law, private-candidate GCSEs, exam centres, and live lessons that fit a home timetable.',
  pageName: 'Coding for Home-Educated Children',
  webPageDescription: 'Live online coding lessons for home-educated children in the UK, with guidance on private-candidate computing GCSEs drawn from DfE guidance and the exam boards\' specifications.',
  courseDescription: 'Live online coding and computing for home-educated children and teenagers, from first programs to GCSE Computer Science content, at times that fit a home timetable.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Home-educated children',
  navLinks: [
    { href: '#law', label: 'What the law asks' },
    { href: '#gcse', label: 'GCSE as a private candidate' },
    { href: '#boards', label: 'Which board' },
    { href: '#choosing', label: 'Choosing help' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'UK &middot; Home education &middot; Ages 6 to 18',
  h1: 'Coding for home-educated children',
  lede: 'Home education in England is growing quickly. The Department for Education, whose collection became mandatory in autumn 2024, counted 126,000 children being home educated on its autumn 2025 census day, and 175,900 at some point during the 2024/25 school year, though it warns that part of the rise reflects better data. The legal position is simple and demanding at once: gov.uk says "You must make sure your child receives a full-time education from the age of 5, but you do not have to follow the national curriculum". Computing is where many families look for help, and where one practical fact matters more than any other. A home-educated teenager can sit GCSE Computer Science as a private candidate, but only at an exam centre willing to host them, and the specification a centre can manage decides which course is realistic. This page covers the law, the GCSE route, and how to choose help.',
  secondaryCta: { href: '#gcse', label: 'GCSE as a private candidate' },
  wa: 'Hello Modern Age Coders, we home educate and I would like a free first coding lesson for my child.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Drawn from DfE guidance and the exam boards\' own rules',
  spec: [
    ['Home educated, autumn 2025', '126,000 children in England'],
    ['National curriculum', 'Not required at home'],
    ['GCSE route', 'Private candidate at an exam centre'],
    ['Exam costs', 'Paid by parents'],
    ['Written-paper boards', 'AQA 8525 and OCR J277'],
    ['Lesson times', 'Agreed in UK hours'],
    ['Group', 'Five to ten at one level'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'In England, parents who home educate must provide an efficient, full-time education suitable to the child\'s age, ability, aptitude and any special educational needs, but do not have to follow the national curriculum or use tutors. The Department for Education counted 126,000 home-educated children on its autumn 2025 census day. For computing, the main question is qualifications. Home-educated teenagers can sit GCSE Computer Science as private candidates: AQA says its 8525 specification is available to private candidates, including the home schooled, and OCR accepts private candidates for J277 but advises contacting centres early, since a centre must agree to host them and may charge. Both are assessed by written exams, which most centres can host; Edexcel\'s specification includes an onscreen programming paper, which needs a centre able to run it. Parents pay the exam costs. Modern Age Coders teaches coding and GCSE Computer Science content live, at times agreed in UK hours. Our teachers are based in India. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for home-educated learners',
    lede: 'First coding for younger children, Python for the middle years, and GCSE content for teenagers. Each card opens its syllabus.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'HE / 01', title: 'Coding for Kids', note: 'Scratch, games and simple apps for younger children, with plenty of making.' },
      { course: 'python-complete-masterclass-teens', code: 'HE / 02', title: 'Python for Teens', note: 'Typed Python from the basics, the language most GCSE papers expect candidates to read.' },
      { course: 'gcse-computer-science-course', code: 'HE / 03', title: 'GCSE Computer Science', note: 'The theory and programming a private candidate needs for the written papers.' }
    ]
  },

  sections: [
    {
      id: 'law', tint: 'tint', eyebrow: 'What the law asks',
      h2: 'What the law asks of home-educating parents',
      lede: 'From gov.uk and the Department for Education\'s guidance for parents, which applies to England.',
      body: [
        { kind: 'table', caption: 'The legal position in England', head: ['Question', 'What the guidance says'], rows: [
          ['What must parents provide?', 'Under section 7 of the Education Act 1996, "efficient full-time education suitable" to the child\'s age, ability and aptitude, and to any special educational needs'],
          ['From what age?', 'Full-time education from the age of 5'],
          ['The national curriculum?', 'Not required'],
          ['Tutors?', '"As a parent you can choose to engage private tutors or other adults, or online tuition, to assist in providing a suitable education, but there is no requirement to do so."'],
          ['Council involvement', 'The council can make an informal enquiry, and can serve a school attendance order if it thinks a child needs to be taught at school'],
          ['Exam costs', 'Borne by parents, entered through an external examination centre']
        ] },
        { kind: 'p', html: 'The guidance also lists things parents are not required to do, including teaching the national curriculum, giving formal lessons or aiming for particular qualifications. It adds, fairly, that it is easier to show an education is suitable when attention has been paid to breadth, progress and assessment. Computing fits that well: projects produce visible evidence of progress, and a portfolio of programs shows what a child can do.' },
        { kind: 'table', mt: true, caption: 'Home education in England, official statistics in development', head: ['Measure', 'Published figure'], rows: [
          ['On the autumn 2025 census day', '126,000 children'],
          ['On the previous autumn census day', '111,700 children'],
          ['At any point in 2024/25', '175,900 children'],
          ['Caution from the Department', 'Changes over time are likely to be partly due to improvements in data quality']
        ] },
        { kind: 'source', html: 'Source: gov.uk, <a class="ag-inline-link" href="https://www.gov.uk/home-education" rel="noopener" target="_blank">Educating your child at home</a>; Department for Education, Elective home education: guidance for parents (2019) and the Elective home education statistics for the autumn term 2025/26. The rules differ in Scotland, Wales and Northern Ireland; this page follows the English guidance.' }
      ]
    },
    {
      id: 'gcse', tint: 'deep', eyebrow: 'GCSE as a private candidate',
      h2: 'Sitting GCSE Computer Science as a private candidate',
      lede: 'Home-educated teenagers can take GCSEs. The route runs through someone else\'s exam hall.',
      body: [
        { kind: 'p', html: 'A private candidate is someone who studies independently and sits exams at an approved centre where they are not enrolled. AQA\'s specification says a private candidate "may be self-taught, home schooled or have private tuition", and that "They must be based in the UK." OCR is more explicit about the practical step: "Private candidates need to contact OCR approved centres to establish whether they are prepared to host them as a private candidate. The centre may charge for this facility and OCR recommends that the arrangement is made early in the course."' },
        { kind: 'table', mt: true, caption: 'The private-candidate route, step by step', head: ['Step', 'What to do', 'When'], rows: [
          ['1. Find centres', 'Ask local schools, colleges and specialist exam centres whether they take private candidates for Computer Science', 'Before choosing a board'],
          ['2. Ask what they can run', 'Check which boards and which paper formats they can host, and their fees', 'Early in the course'],
          ['3. Choose the board', 'Pick a specification the centre can host, then teach to it', 'Once a centre agrees'],
          ['4. Enter on time', 'Entries go through the centre, by the board\'s deadlines, well before the exams', 'Ask the centre for its dates'],
          ['5. Budget for costs', 'Parents pay entry fees and any centre charges', 'Throughout']
        ] },
        { kind: 'p', html: 'The Department\'s guidance is candid that exams "would have to be entered via an external examinations centre, which may be some distance from your home", and that local authority help with costs is discretionary. Leaving the centre question late risks finding no nearby centre able to take a computing candidate, so it is the first thing to settle.' }
      ]
    },
    {
      id: 'boards', tint: '', eyebrow: 'Which board',
      h2: 'Which board suits a home-educated candidate',
      lede: 'The three main English specifications are assessed differently, and that matters when a centre hosts you.',
      body: [
        { kind: 'table', caption: 'The three specifications, for a private candidate', head: ['Specification', 'How it is assessed', 'Private-candidate note'], rows: [
          ['AQA GCSE Computer Science (8525)', 'Two written exams: 2 hours, and 1 hour 45 minutes', 'Stated as available to private candidates, including the home schooled'],
          ['OCR GCSE Computer Science (J277)', 'Two written exams of 1 hour 30 minutes each', 'Private candidates accepted; contact centres early; centres may charge'],
          ['Edexcel GCSE Computer Science (1CP2)', 'One written paper and one onscreen programming paper', 'The onscreen paper needs a centre able to run it; check before committing']
        ] },
        { kind: 'p', html: 'Written papers are the easiest to place: any centre that runs GCSEs can seat a private candidate for them. Edexcel\'s specification describes an "onscreen assessment" of programming in which schools choose the development environment, which is excellent for enrolled students but means a private candidate needs a centre set up for it. That is not a reason to avoid Edexcel, only a reason to ask the centre first.' },
        { kind: 'two', mt: true,
          leftH3: 'Practical programming still matters',
          left: [
            'Written papers still test programming. AQA\'s first paper assesses writing, testing and refining code, and OCR\'s second paper has a section on designing, writing, testing and refining programs.',
            'A candidate who has written plenty of real programs answers those questions far more confidently than one who has only read about code.'
          ],
          rightH3: 'Our detailed board pages',
          right: [
            'We have separate pages on <a class="ag-inline-link" href="/aqa-gcse-computer-science-8525-help">AQA 8525</a>, <a class="ag-inline-link" href="/ocr-gcse-computer-science-j277-help">OCR J277</a> and <a class="ag-inline-link" href="/edexcel-gcse-computer-science-1cp2-help">Edexcel 1CP2</a>, each built from its specification.',
            'Families can also compare the <a class="ag-inline-link" href="/cambridge-igcse-computer-science-tuition">Cambridge IGCSE</a>, a separate international qualification some centres offer.'
          ] }
      ]
    },
    {
      id: 'choosing', tint: 'tint', eyebrow: 'Choosing help',
      h2: 'Choosing help, with your eyes open',
      lede: 'The guidance warns that tuition settings may be unregulated. Here is what to ask any provider, including us.',
      body: [
        { kind: 'p', html: 'The Department\'s guidance notes that tutors and other settings "may well not be regulated in any way so there is no external assurance that they comply with basic standards, such as proper vetting of staff and safeguarding children". That is true of us too, and parents should ask every provider how they handle it.' },
        { kind: 'table', mt: true, caption: 'Questions to ask any tutor or course', head: ['Question', 'Our answer'], rows: [
          ['Who are the teachers, and where?', 'Our teachers are based in India and teach live online'],
          ['Are they DBS-checked?', 'No. UK DBS checks cannot cover records held overseas; our tutor page explains what we do instead'],
          ['Are lessons one to one or in groups?', 'Both: small groups of five to ten, or one to one'],
          ['Will you work on assessed coursework?', 'Never. We teach skills; assessed work must be the candidate\'s own'],
          ['What does it cost, and how is it paid?', 'A monthly fee in US dollars, with the first lesson free']
        ] },
        { kind: 'p', html: 'The full explanation of our position on checks is on <a class="ag-inline-link" href="/online-coding-tutor-uk">the online coding tutor page</a>. For younger children, <a class="ag-inline-link" href="/ks2-coding-lessons-online">Key Stage 2 coding</a> and <a class="ag-inline-link" href="/after-code-club-next-step-coding-uk">life after Code Club</a> may help, and for older teenagers <a class="ag-inline-link" href="/choosing-gcse-computer-science-year-9-options">choosing computing at 14</a> sets out the evidence.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four stages for home-educated coders',
    lede: 'Placement follows what a child can build, not their age or a school year group.',
    table: { caption: 'From first programs to a private-candidate GCSE', head: ['Stage', 'Usually', 'What should be true'], rows: [
      ['1. Making', 'Ages 6 to 10', 'Games and animations in blocks, built from the child\'s own ideas'],
      ['2. Typing', 'Ages 10 to 13', 'First Python programs written and debugged independently'],
      ['3. Building', 'Ages 12 to 15', 'Bigger projects with functions, lists and files, kept in a portfolio'],
      ['4. Examined', 'Ages 14 to 16', 'GCSE content for a chosen board, with a centre agreed and entries planned']
    ] },
    left: { h3: 'Stage three makes a portfolio', ps: [
      'A folder of finished programs is useful evidence of progress for any council enquiry, and it builds confidence for exams.',
      'The general order of topics is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Stage four starts with a centre', ps: [
      'Settle the centre before choosing the board, and plan entries well ahead of the exams.',
      'We teach to whichever board the centre can host.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for home-educated learners',
    lede: 'Grouped by stage. The free lesson places each learner.',
    bands: [
      { num: 'I', h3: 'Younger children', sub: 'Ages 6 to 11', courses: [
        { code: 'UK / HE1 / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks, games and first apps.' },
        { code: 'UK / HE1 / 02', slug: 'scratch-programming-complete-course', title: 'Scratch, complete', blurb: 'Deep Scratch for keen makers.' },
        { code: 'UK / HE1 / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Maths alongside coding, placed by level.' }
      ] },
      { num: 'II', h3: 'Middle years', sub: 'Ages 10 to 14', courses: [
        { code: 'UK / HE2 / 01', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'The first typed language.' },
        { code: 'UK / HE2 / 02', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Websites built from scratch.' },
        { code: 'UK / HE2 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Maths explored in programs.' }
      ] },
      { num: 'III', h3: 'Towards qualifications', sub: 'Ages 14 to 18', courses: [
        { code: 'UK / HE3 / 01', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'Content for the written papers.' },
        { code: 'UK / HE3 / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Programming depth for the exams and beyond.' },
        { code: 'UK / HE3 / 03', slug: 'igcse-computer-science-0478-course', title: 'Cambridge IGCSE Computer Science', blurb: 'A separate international qualification some centres offer.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Lessons that fit a home timetable',
    lede: 'Because our teachers work from India, which keeps one clock all year, the UK is four and a half hours behind in summer and five and a half in winter. UK daytime falls in India\'s afternoon and evening, so daytime slots can often be arranged; we confirm what is available on the first call.',
    slots: [
      { time: 'Weekday daytime', l: 'Often possible; ask when you call.' },
      { time: 'Late afternoon', l: 'For families mixing groups and activities.' },
      { time: 'Evening or weekend', l: 'For older learners working independently.' }
    ],
    cells: [
      { h3: 'Projects as evidence', p: 'Finished programs kept in a portfolio that shows progress over time.' },
      { h3: 'Board-specific teaching', p: 'GCSE content taught to the specification the centre will host.' },
      { h3: 'Real programming', p: 'Code written and debugged every lesson, so written papers feel familiar.' },
      { h3: 'Honest placement', p: 'A clear view of the level a learner is at, before anything is paid.' },
      { h3: 'Mixed ages by level', p: 'Groups formed by what learners can do, not by age alone.' },
      { h3: 'Small groups', p: 'Five to ten learners, or one to one.' }
    ]
  },

  projectsH2: 'Projects our students have made',
  projectsLede: 'Four projects from lessons, made by the learners. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' Google reviews, as they wrote them.',

  fees: {
    h2: 'Fees for home-education coding lessons',
    lede: 'Payment is monthly, in US dollars, at one rate for families outside India. The first lesson is on us, and we charge nothing until a course and a regular weekly time are agreed. Exam entry and centre fees are separate and paid by families to the centre.',
    free: ['A lesson matched to your child\'s level', 'Advice on the private-candidate route', 'A phone number is enough'],
    group: ['Five to ten learners at one level', 'The same teacher each week', 'Times agreed in UK hours', 'Projects kept as a portfolio'],
    one: ['A teacher for one learner', 'Paced to your home timetable', 'Suits a teenager preparing for GCSE']
  },

  faq: {
    eyebrow: 'Questions from home-educating families',
    h2: 'What home educators ask',
    items: [
      { q: 'Do home-educated children have to follow the national curriculum?', a: 'No, in England. Parents must provide an efficient, full-time education suitable to the child\'s age, ability, aptitude and any special educational needs, but the national curriculum is not required.' },
      { q: 'Can a home-educated child take GCSE Computer Science?', a: 'Yes, as a private candidate at an approved exam centre that agrees to host them. AQA and OCR both accept private candidates based in the UK.' },
      { q: 'Who pays for exams?', a: 'Parents, according to the Department for Education\'s guidance. Some local authorities may help, but this is discretionary. Centres may add their own charges.' },
      { q: 'Which board is easiest for a private candidate?', a: 'Usually one assessed only by written exams, such as AQA 8525 or OCR J277, because most centres can host them. Edexcel includes an onscreen programming paper, which needs a centre able to run it.' },
      { q: 'When should we find an exam centre?', a: 'Early. OCR recommends arranging it early in the course, and it is safest to settle the centre before choosing the board.' },
      { q: 'How many children are home educated?', a: 'The Department for Education counted 126,000 on its autumn 2025 census day in England, and 175,900 at some point in 2024/25, noting that better data explains part of the rise.' },
      { q: 'Are your teachers DBS-checked?', a: 'No. Our teachers are in India, and UK DBS checks cannot cover overseas records. Our online coding tutor page explains how we handle safeguarding instead.' },
      { q: 'Do you offer daytime lessons?', a: 'Often. UK daytime falls in India\'s afternoon and evening, so daytime slots can often be arranged; we confirm what is available on the first call.' },
      { q: 'Does this apply in Scotland, Wales or Northern Ireland?', a: 'The legal details on this page follow the guidance for England; the rules differ elsewhere. The private-candidate route for AQA and OCR applies to candidates based anywhere in the UK.' },
      { q: 'What does it cost?', a: 'The first lesson is free. Lessons then cost one monthly fee in US dollars, less for a group place than one to one, as the fees section shows, with nothing charged up front. Exam fees are separate.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for home-educating families',
    lede: 'GCSE boards, younger coders, and our position on checks.',
    items: [
      { href: '/online-coding-tutor-uk', label: 'Online coding tutor, UK', p: 'Our position on DBS and safeguarding, explained fully.' },
      { href: '/aqa-gcse-computer-science-8525-help', label: 'AQA GCSE Computer Science 8525', p: 'The two written papers in detail.' },
      { href: '/ocr-gcse-computer-science-j277-help', label: 'OCR GCSE Computer Science J277', p: 'OCR\'s two papers and what they test.' },
      { href: '/ks2-coding-lessons-online', label: 'Key Stage 2 coding', p: 'What primary-age coding looks like.' },
      { href: '/after-code-club-next-step-coding-uk', label: 'After Code Club', p: 'For children who have outgrown club guides.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page we publish.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will call at a UK time that suits your day. The lesson finds your child\'s level and ends with a plan, including the exam route if relevant.',
    readFirst: 'Reading first? Each <a class="ag-inline-link" href="/courses">course page</a> gives its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our approach, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows children\'s projects.',
    note: 'WhatsApp is the quickest way to reach us and free from a UK phone. We are based in India, so our number starts +91.',
    formNote: 'No card and no contract; one reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Home education', links: [
        { href: '/online-coding-tutor-uk', label: 'Online coding tutor' },
        { href: '/aqa-gcse-computer-science-8525-help', label: 'AQA GCSE 8525' },
        { href: '/ocr-gcse-computer-science-j277-help', label: 'OCR GCSE J277' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'More', links: [
        { href: '/ks2-coding-lessons-online', label: 'KS2 coding' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Coding for home educators, live on UK time'
  },

  personalityCss: `
.ag-root.ag-hed .ag-hero h1 { letter-spacing: -0.021em; font-weight: 700; }
.ag-root.ag-hed .ag-capsule { border-left-width: 6px; border-radius: 6px; }
.ag-root.ag-hed .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-hed .ag-table caption { text-align: left; font-weight: 660; }
.ag-root.ag-hed .ag-table th:first-child { width: 26%; }
.ag-root.ag-hed .ag-band-head h3 { letter-spacing: -0.01em; }
`,

  mustMention: ['126,000', 'national curriculum', 'private candidate', 'exam centre', 'AQA', 'OCR', 'onscreen', 'Education Act 1996', 'DBS', 'daytime'],

  dossier: {
    curriculumAuthority: 'England, elective home education. gov.uk Educating your child at home: "You must make sure your child receives a full-time education from the age of 5, but you do not have to follow the national curriculum."; informal enquiry and school attendance orders. DfE Elective home education: guidance for parents (2019): section 7 of the Education Act 1996, "efficient full-time education suitable - (a) to his age, ability and aptitude, and (b) to any special educational needs he may have"; "As a parent you can choose to engage private tutors or other adults, or online tuition, to assist in providing a suitable education, but there is no requirement to do so."; settings "may well not be regulated in any way so there is no external assurance that they comply with basic standards, such as proper vetting of staff and safeguarding children"; exam costs borne by parents and entered "via an external examinations centre, which may be some distance from your home"; not required to teach the National Curriculum. DfE Elective home education statistics, autumn term 2025/26: 126,000 on the autumn 2025 census date, 111,700 the previous autumn, 175,900 at any point in 2024/25, official statistics in development, partly data-quality driven. AQA 8525: written exams of 2 hours and 1 hour 45 minutes; "This specification is available to private candidates."; private candidates "may be self-taught, home schooled or have private tuition"; "They must be based in the UK." OCR J277: written examinations of 1 hour 30 minutes; "Private candidates need to contact OCR approved centres to establish whether they are prepared to host them as a private candidate. The centre may charge for this facility and OCR recommends that the arrangement is made early in the course." Edexcel 1CP2: one written paper and a practical "onscreen assessment" of programming.',
    localProject: 'For a home-educated child, the exam centre decides which computing GCSE is possible. The page sets out the legal position in England from gov.uk and the DfE guidance (efficient, full-time, suitable education; no national curriculum; tutors optional; parents pay exams through an external centre), gives the official 2025/26 statistics with their data-quality caveat, then walks the private-candidate route step by step and compares AQA 8525, OCR J277 and Edexcel 1CP2 for a private candidate, since written papers are easier to place than an onscreen programming paper. It closes with the DfE warning that tuition settings may be unregulated and answers the questions parents should ask any provider, including that our teachers work from India and are not DBS-checked. Lesson family: an education outside school where qualification logistics shape the curriculum.',
    requiredMentions: ['126,000', 'private candidate', 'onscreen', 'DBS'],
    sources: [
      { claim: 'gov.uk, Educating your child at home: full-time education from age 5, no national curriculum requirement, council enquiries and school attendance orders.', url: 'https://www.gov.uk/home-education' },
      { claim: 'DfE, Elective home education: guidance for parents (2019): section 7 duty, tutors optional, unregulated settings, exam costs and centres.', url: 'https://assets.publishing.service.gov.uk/media/5ca21e22e5274a77d9d26feb/EHE_guidance_for_parentsafterconsultationv2.2.pdf' },
      { claim: 'DfE, Elective home education statistics, autumn term 2025/26: census and in-year counts with data-quality caveat.', url: 'https://explore-education-statistics.service.gov.uk/find-statistics/elective-home-education' },
      { claim: 'AQA GCSE Computer Science 8525 and OCR GCSE Computer Science J277 specifications: exam formats and private-candidate statements; Edexcel 1CP2 specification: onscreen programming paper.', url: 'https://www.aqa.org.uk/subjects/computer-science/gcse/computer-science-8525' }
    ],
    rejectedClaims: [
      'Home education law in Scotland, Wales and Northern Ireland: not read for this build, so only noted as different.',
      'Edexcel\'s private-candidate policy: not found in the specification text read, so the page advises asking the centre rather than claiming a rule.',
      'The status of any children-not-in-school register legislation: not verified at a primary source for this build, so not mentioned.',
      'Specific exam or centre fees: vary by centre and year; not quoted.',
      'Any claim of DBS checks for our teachers: none; the page says so.',
      'Any promise about grades or outcomes, which we decline.'
    ]
  }
};
