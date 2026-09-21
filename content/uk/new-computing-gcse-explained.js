'use strict';
// The new Computing GCSE, explained (ag- door, England; UK cluster Phase 3). A DATED page: it records
// what has been published as of the verification date and says plainly what has not, and it should be
// revised whenever the Department for Education or Ofqual publishes subject content.
// Sources, read from the PDFs on gov.uk (assets.publishing.service.gov.uk):
//  - Government response to the Curriculum and Assessment Review, November 2025. Verbatim:
//    * "we will refresh the programmes of study for each curriculum subject in line with the Review's
//      recommendations and publish a revised national curriculum in 2027 for first teaching in 2028. We
//      will also update GCSEs, for first teaching from 2029 onwards."
//    * "working with Ofqual and awarding organisations, we will update GCSEs in national curriculum
//      subjects in line with the Review's recommendation, as well as religious studies. Our aim is that
//      some are ready for first teaching in 2029 and the rest for first teaching in 2030." And: "We will
//      also seek to update corresponding AS and A levels to be ready for first teaching in 2031 and
//      2032, as the cohort progresses to 16 - 19."
//    * THE CONTENT LINE: "The refreshed curriculum will teach pupils AI literacy, how to use data to
//      complete tasks and solve problems, as well as learning about bias in technology. We will also
//      replace the computer science GCSE with a broader offer that reflects the entirety of the computing
//      curriculum whilst continuing to uphold the core principles of computer science such as
//      programming and algorithms, and explore the development of a level 3 qualification in data
//      science and AI."
//    * "We agree with the Review that the computing curriculum should be the main vehicle for teaching
//      about digital literacy."
//  - Curriculum and Assessment Review, Building a world-class curriculum for all, Final Report, November
//    2025, recommendation: "Replaces GCSE Computer Science with a Computing GCSE which reflects the full
//    breadth of the Computing curriculum and supports students to develop the digital skills they need."
// NOT PUBLISHED as of the verification date, and therefore NOT CLAIMED: which of the two GCSE groups
// (2029 or 2030) Computing falls in; any subject content, assessment structure, paper count, weighting,
// NEA arrangement or programming language rule for the new GCSE; the name any board will give it.
// Spine: the first cohort to sit it is in primary school or Year 7 right now. A two-year GCSE first
// taught in September 2029 starts with pupils who are in Year 7 in September 2026; one first taught in
// 2030 starts with today's Year 6. Everyone in Years 8 to 11 today sits the existing GCSE Computer
// Science. The page tells each family which side of that line their child is on, and what does and does
// not change for them.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'NEW GCSE', blurb: 'The Computing GCSE that replaces Computer Science is first taught from 2029 or 2030. Which children that affects, and what is and is not known.' },
  slug: 'new-computing-gcse-explained',
  code: 'ncg',
  accent: '#441249',
  accentRationale: 'New Computing GCSE: a deep aubergine from the solver (11.93:1 on every paper tint) at dE 12.3, one of the widest separations left and distinct from every exam board page',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'The new Computing GCSE explained',
  title: 'The New Computing GCSE Explained | Timeline and What Changes',
  description: 'England is replacing GCSE Computer Science with a broader Computing GCSE, first taught from 2029 or 2030. Which children it affects, and what is known so far.',
  ogDescription: 'The first cohort to sit the new Computing GCSE is in Year 6 or Year 7 today. Everyone older sits the current Computer Science GCSE.',
  twitterDescription: 'The new Computing GCSE: dates, which year groups it affects, and what has not been published yet.',
  pageName: 'The New Computing GCSE Explained',
  webPageDescription: 'A dated explanation of the planned replacement of GCSE Computer Science in England with a broader Computing GCSE, including the published timeline and what has not yet been decided.',
  courseDescription: 'Live online computing teaching for UK learners that covers both what the current GCSE assesses and the AI literacy, data and programming the reformed curriculum will add.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'The new Computing GCSE',
  navLinks: [
    { href: '#timeline', label: 'The timeline' },
    { href: '#which', label: 'Which children it affects' },
    { href: '#unknown', label: 'What is not known yet' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Qualification reform &middot; Checked 21 September 2026',
  h1: 'The new Computing GCSE explained',
  lede: 'In November 2025 the Government said it would "replace the computer science GCSE with a broader offer that reflects the entirety of the computing curriculum whilst continuing to uphold the core principles of computer science such as programming and algorithms". It also published a timetable: a revised national curriculum published in 2027 and first taught in 2028, and updated GCSEs "for first teaching from 2029 onwards", some in 2029 and the rest in 2030. Do the arithmetic and something useful falls out. A GCSE first taught in September 2029 starts with pupils who are in Year 7 this September. One first taught in 2030 starts with today\'s Year 6. Every child in Years 8 to 11 now will sit the existing GCSE Computer Science. This page sets out the published facts, which side of that line your child is on, and what has simply not been decided yet.',
  secondaryCta: { href: '#which', label: 'Which children it affects' },
  wa: 'Hello Modern Age Coders, I would like a free first class and have a question about the new Computing GCSE.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Revised as the Government publishes',
  spec: [
    ['What', 'Computing GCSE replacing Computer Science'],
    ['Announced', 'November 2025'],
    ['New curriculum', 'Published 2027, taught 2028'],
    ['New GCSEs', 'First taught 2029 or 2030'],
    ['First cohort', 'Year 6 or Year 7 today'],
    ['Keeps', 'Programming and algorithms'],
    ['Not yet published', 'Content, papers, weightings'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'England plans to replace GCSE Computer Science with a broader Computing GCSE. The Government\'s November 2025 response to the Curriculum and Assessment Review commits to a revised national curriculum published in 2027 and first taught in 2028, then updated GCSEs first taught from 2029, with some subjects in 2029 and the rest in 2030. It says the new offer will reflect the whole computing curriculum while keeping core computer science such as programming and algorithms, and that the refreshed curriculum will teach AI literacy, using data to solve problems, and bias in technology. What has not been published is which year Computing falls in, or any detail of its content or papers. So the first cohort is today\'s Year 6 or Year 7, and everyone older takes the current GCSE. We teach for both. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses that hold up under either GCSE',
    lede: 'Programming and algorithms are staying. Data and AI literacy are arriving. These cover both. Cards open the full syllabus.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'NEW / 01', title: 'Python for Teens', note: 'Programming is explicitly retained, so fluency in a typed language is the safest preparation for either qualification.' },
      { course: 'data-science-course-for-teens-python-data', code: 'NEW / 02', title: 'Data Science with Python', note: 'Using data to complete tasks and solve problems is named in the refreshed curriculum, and this is that skill.' },
      { course: 'ai-literacy-for-kids-course', code: 'NEW / 03', title: 'AI Literacy for Kids', note: 'For today\'s Year 5 to 7 children, who are the first cohorts the new content is written for.' }
    ]
  },

  sections: [
    {
      id: 'timeline', tint: 'tint', eyebrow: 'The timeline',
      h2: 'What the Government has actually committed to',
      lede: 'From the Government response to the Curriculum and Assessment Review, November 2025. Dates are the Government\'s; the page has not added any.',
      body: [
        { kind: 'table', caption: 'The published reform timetable', head: ['Step', 'What the response says'], rows: [
          ['Revised national curriculum', '"publish a revised national curriculum in 2027 for first teaching in 2028"'],
          ['Updated GCSEs', '"update GCSEs, for first teaching from 2029 onwards"'],
          ['In two groups', '"Our aim is that some are ready for first teaching in 2029 and the rest for first teaching in 2030"'],
          ['AS and A levels', 'To be updated "for first teaching in 2031 and 2032, as the cohort progresses to 16 - 19"'],
          ['Computing specifically', '"replace the computer science GCSE with a broader offer that reflects the entirety of the computing curriculum whilst continuing to uphold the core principles of computer science such as programming and algorithms"'],
          ['And after 16', '"explore the development of a level 3 qualification in data science and AI"']
        ] },
        { kind: 'capsule', mt: true, q: 'What the refreshed curriculum will teach', p: 'The response says: "The refreshed curriculum will teach pupils AI literacy, how to use data to complete tasks and solve problems, as well as learning about bias in technology." It also agrees with the Review "that the computing curriculum should be the main vehicle for teaching about digital literacy".' },
        { kind: 'two', mt: true,
          leftH3: 'What the Review recommended',
          left: [
            'The Curriculum and Assessment Review, reporting in November 2025, recommended that the Government "Replaces GCSE Computer Science with a Computing GCSE which reflects the full breadth of the Computing curriculum and supports students to develop the digital skills they need".',
            'The Government accepted the direction and the name, and then added the phrase that matters most to anyone worried about rigour: programming and algorithms are retained as core.'
          ],
          rightH3: 'Why it is changing at all',
          right: [
            'The current GCSE is Computer Science, which is one part of the computing curriculum. The curriculum itself also covers information technology and digital literacy, which the current GCSE largely does not assess.',
            'The reform aims to make the GCSE match the whole subject rather than the most technical third of it. Whether that broadens or dilutes it will depend entirely on subject content that has not yet been written.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report-government-response" rel="noopener" target="_blank">Government response to the Curriculum and Assessment Review</a>, November 2025, and the <a class="ag-inline-link" href="https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report" rel="noopener" target="_blank">Curriculum and Assessment Review Final Report</a>, November 2025. This page was last checked on 21 September 2026 and will be revised as subject content is published.' }
      ]
    },
    {
      id: 'which', tint: 'deep', eyebrow: 'Which children it affects',
      h2: 'Find your child\'s year group',
      lede: 'This is arithmetic on the published dates, not a forecast. A two-year GCSE starts in Year 10 and is examined at the end of Year 11.',
      body: [
        { kind: 'table', caption: 'School year in September 2026, and the GCSE they will take', head: ['Year group now', 'Starts Year 10 in', 'Which Computing qualification'], rows: [
          ['Year 11', 'Already started', 'The current GCSE Computer Science'],
          ['Year 10', 'Already started', 'The current GCSE Computer Science'],
          ['Year 9', 'September 2027', 'The current GCSE Computer Science'],
          ['Year 8', 'September 2028', 'The current GCSE Computer Science, since no new GCSE is first taught before 2029'],
          ['Year 7', 'September 2029', 'The new Computing GCSE if Computing is in the 2029 group, otherwise the current one'],
          ['Year 6', 'September 2030', 'The new Computing GCSE, whichever group Computing is placed in'],
          ['Year 5 and younger', '2031 onwards', 'The new Computing GCSE']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If your child is in Year 8 or above',
          left: [
            'Nothing changes for their GCSE. They will sit one of the existing specifications, and the <a class="ag-inline-link" href="/aqa-gcse-computer-science-8525-help">AQA</a>, <a class="ag-inline-link" href="/ocr-gcse-computer-science-j277-help">OCR</a> and <a class="ag-inline-link" href="/edexcel-gcse-computer-science-1cp2-help">Edexcel</a> pages describe what each asks.',
            'Their key stage 3 will also be taught under the current programme of study for most or all of it, because the revised curriculum is not first taught until 2028.'
          ],
          rightH3: 'If your child is in Year 7 or younger',
          right: [
            'They are the first possible cohorts. Year 7 depends on which group Computing lands in, which has not been announced. Year 6 and below will take the new qualification either way.',
            'They will also meet the revised curriculum during key stage 3, from 2028, which is when AI literacy, data and bias in technology are meant to arrive in lessons.'
          ] },
        { kind: 'p', html: 'For families choosing options in the next two years, the practical conclusion is reassuring: the qualification your child actually sits is already known and already published. The uncertainty belongs to children who are not yet choosing anything.' }
      ]
    },
    {
      id: 'unknown', tint: '', eyebrow: 'What is not known yet',
      h2: 'Everything that has not been decided',
      lede: 'This section is as important as the rest of the page. Any provider claiming to teach "the new Computing GCSE" today is teaching something that does not yet exist.',
      body: [
        { kind: 'table', caption: 'Not published as of 21 September 2026', head: ['Question', 'Status'], rows: [
          ['Is Computing in the 2029 group or the 2030 group?', 'Not announced'],
          ['What is the subject content?', 'Not published; the revised national curriculum itself is due in 2027'],
          ['How many papers, and how long?', 'Not published'],
          ['Is there any non-exam assessment or practical component?', 'Not published'],
          ['Which programming language, if any is specified?', 'Not published'],
          ['What will each exam board call and structure it?', 'Not published; boards write specifications after subject content is set'],
          ['What happens to the level 3 data science and AI qualification?', 'Being explored, in the Government\'s own word, with no date']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What is safe to prepare for',
          left: [
            'Programming, because the Government has said in terms that it is retained as a core principle. A student fluent in a typed language, who can write and debug a program and reason about algorithms, is prepared for either qualification.',
            'Working with data, because using data to complete tasks and solve problems is named in the refreshed curriculum. It is also a skill with value well beyond any exam.'
          ],
          rightH3: 'What would be premature',
          right: [
            'Buying a revision guide, choosing a course or picking a tutor on the basis of the new GCSE\'s structure. The structure does not exist yet, and anything built to it now is a guess dressed as a product.',
            'Worrying about it for a child in Year 8 or above. Their qualification is settled.'
          ] },
        { kind: 'p', html: 'We will revise this page when the Department for Education or Ofqual publishes subject content, and the date at the top will change when we do. Until then, the honest description of the new Computing GCSE is two sentences long: it keeps programming and algorithms, and it adds a broader slice of the computing curriculum including AI literacy and data. Everything else is unwritten.' },
        { kind: 'p', html: 'For what AI literacy actually means in a classroom, <a class="ag-inline-link" href="/ai-classes-for-kids-uk">the AI classes for kids page</a> covers the commitment that pupils will learn how computers are trained using data, and <a class="ag-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">the page on learning to think</a> sets out what the evidence says AI literacy is made of.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Preparation that survives either qualification',
    lede: 'Because the new content is unwritten, the only sensible plan is one that is useful whichever GCSE a child ends up sitting.',
    table: { caption: 'What holds its value either way', head: ['Stage', 'What is being built', 'Why it is safe'], rows: [
      ['1. A typed language', 'Writing and debugging programs without copying examples', 'Programming is explicitly retained as core'],
      ['2. Algorithms', 'Searching, sorting and comparing methods, reasoned out', 'Algorithms are explicitly retained as core'],
      ['3. Data', 'Cleaning, analysing and questioning real datasets', 'Using data to solve problems is named in the refreshed curriculum'],
      ['4. AI literacy', 'How models are trained, tested and where they are biased', 'AI literacy and bias in technology are named in the refreshed curriculum']
    ] },
    left: { h3: 'Stages one and two are certain', ps: [
      'They are the two things the Government named as staying. A student strong in both is well placed however the rest turns out.',
      'The wider topic order runs down the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Stages three and four are the additions', ps: [
      'They are what the broader qualification is meant to bring in, and they are worth learning now regardless of any exam.',
      'For the youngest children they start with the ideas rather than the tools.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses that do not depend on the new specification',
    lede: 'Grouped by which part of the likely content they serve. The free lesson settles where a learner starts.',
    bands: [
      { num: 'I', h3: 'What is staying', sub: 'Programming and algorithms', courses: [
        { code: 'UK / NG1 / 01', slug: 'python-ai-kids-masterclass', title: 'First Python', blurb: 'The move to typed code, for Years 5 to 7 who will meet the new qualification.' },
        { code: 'UK / NG1 / 02', slug: 'python-complete-masterclass-teens', title: 'Python in full', blurb: 'Programming to a standard either GCSE will reward.' },
        { code: 'UK / NG1 / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'The algorithms the Government named as core, reasoned out on paper.' }
      ] },
      { num: 'II', h3: 'What is arriving', sub: 'Data and AI literacy', courses: [
        { code: 'UK / NG2 / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Using data to complete tasks and solve problems, as the refreshed curriculum puts it.' },
        { code: 'UK / NG2 / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How models are trained and why they go wrong, for the youngest cohorts.' },
        { code: 'UK / NG2 / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Training, testing and finding bias in models, which the new content names.' }
      ] },
      { num: 'III', h3: 'For the current GCSE', sub: 'Years 8 to 11 now', courses: [
        { code: 'UK / NG3 / 01', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'The existing qualification, taught to the board a school uses.' },
        { code: 'UK / NG3 / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Decomposition and abstraction, which every specification old or new will assume.' },
        { code: 'UK / NG3 / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'A real project with data behind it, useful under any syllabus.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Taught for the subject, not for a specification that is unwritten',
    lede: 'Our teachers work from India on a fixed clock, so the UK is five and a half hours behind from October and four and a half from March. Slots are agreed in UK time.',
    slots: [
      { time: 'After school', l: 'The usual slot for school-age learners.' },
      { time: 'Early evening', l: 'For older students and busier weeks.' },
      { time: 'Weekend morning', l: 'Good for longer work with data.' }
    ],
    cells: [
      { h3: 'No invented syllabus', p: 'We do not claim to teach a new GCSE that has not been specified. We teach what is certain to matter.' },
      { h3: 'Programming first', p: 'Typed code, debugged and explained, because it is the one thing both qualifications share.' },
      { h3: 'Data as a habit', p: 'Real datasets questioned rather than accepted, which is the skill the refreshed curriculum names.' },
      { h3: 'AI understood, not used', p: 'How models learn and where they fail, with no accounts needed for younger children.' },
      { h3: 'Groups by level', p: 'Five to ten learners at one stage, whatever year group they are in.' },
      { h3: 'Page kept current', p: 'When subject content is published, this page changes and so does the advice.' }
    ]
  },

  projectsH2: 'What our learners have built',
  projectsLede: 'Four projects from lessons. Many more sit in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'From Google, word for word, unpaid and unprompted.',

  fees: {
    h2: 'What lessons cost',
    lede: 'One monthly charge in US dollars, the rate outside India. The free lesson comes first and nothing is taken until a course and a weekly time are agreed.',
    free: ['A real lesson, and a straight answer about your child\'s cohort', 'An honest view of the starting stage', 'Only a phone number needed'],
    group: ['Five to ten learners at one stage', 'One named teacher throughout', 'Written feedback on work every week', 'A certificate when a course finishes'],
    one: ['One learner and one teacher', 'Useful for a learner well ahead or behind', 'Scheduled around school']
  },

  faq: {
    eyebrow: 'Questions about the new Computing GCSE',
    h2: 'What families are asking',
    items: [
      { q: 'Is GCSE Computer Science being scrapped?', a: 'It is being replaced. The Government has said it will replace the computer science GCSE with a broader offer reflecting the whole computing curriculum, while keeping core computer science such as programming and algorithms.' },
      { q: 'When does the new Computing GCSE start?', a: 'The Government says updated GCSEs will be first taught from 2029, with some subjects in 2029 and the rest in 2030. It has not said which group Computing is in.' },
      { q: 'Will my child take the new one?', a: 'Children in Year 8 or above in September 2026 will take the current GCSE. Year 7 depends on whether Computing is in the 2029 group. Year 6 and younger will take the new one.' },
      { q: 'Is programming still in it?', a: 'Yes, according to the Government, which says the new offer will continue to uphold the core principles of computer science such as programming and algorithms.' },
      { q: 'What is being added?', a: 'The response says the refreshed curriculum will teach AI literacy, how to use data to complete tasks and solve problems, and bias in technology. How that appears in the GCSE has not been published.' },
      { q: 'How many papers will it have?', a: 'Not published. No subject content, assessment structure, weighting or practical component has been announced as of 21 September 2026.' },
      { q: 'What about A level?', a: 'The Government aims to update AS and A levels for first teaching in 2031 and 2032, and says it will explore a level 3 qualification in data science and AI.' },
      { q: 'Should we buy materials for the new GCSE now?', a: 'We would not. Its structure has not been written, so anything built to it today is guesswork. Programming and data skills are the safe preparation.' },
      { q: 'Will you update this page?', a: 'Yes. When the Department for Education or Ofqual publishes subject content, we revise the page and change the date at the top.' },
      { q: 'What does it cost?', a: 'The first lesson is free. After that a group place is USD 100 a month and one-to-one teaching USD 150, charged monthly with nothing in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related reading',
    lede: 'For the current qualification and the ideas the new one adds.',
    items: [
      { href: '/choosing-gcse-computer-science-year-9-options', label: 'Choosing GCSE Computer Science', p: 'The Year 9 options decision under the current qualification.' },
      { href: '/aqa-gcse-computer-science-8525-help', label: 'AQA GCSE Computer Science 8525', p: 'One of the current specifications your older child may sit.' },
      { href: '/ks3-computing-tuition-online', label: 'Key Stage 3 computing tuition', p: 'What Years 7 to 9 study now, before the revised curriculum arrives.' },
      { href: '/ai-classes-for-kids-uk', label: 'AI classes for kids in the UK', p: 'What training a model means for a child, and why no accounts are needed.' },
      { href: '/coding-and-ai-classes-in-england', label: 'Coding and AI classes in England', p: 'Who is actually required to follow the national curriculum.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The national page, and the index of every UK page we publish.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Send a number and we will reply at a British hour you choose. The lesson is real teaching, and we will tell you plainly which qualification your child is heading for.',
    readFirst: 'Rather read first? Each <a class="ag-inline-link" href="/courses">course page</a> lists its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> covers the method and its limits, and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> sets out the sequence.',
    note: 'WhatsApp is free from a British mobile and usually quickest. The number is an Indian one, which we state rather than leave you to find.',
    formNote: 'Nothing to pay and nothing to sign. One reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'England', links: [
        { href: '/coding-and-ai-classes-in-england', label: 'The English system' },
        { href: '/ks3-computing-tuition-online', label: 'Key Stage 3' },
        { href: '/choosing-gcse-computer-science-year-9-options', label: 'Year 9 options' },
        { href: '/aqa-gcse-computer-science-8525-help', label: 'AQA 8525' }
      ] },
      { h4: 'More', links: [
        { href: '/ai-classes-for-kids-uk', label: 'AI classes for kids' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Live lessons for UK learners, on UK time'
  },

  personalityCss: `
.ag-root.ag-ncg .ag-hero h1 { letter-spacing: -0.025em; font-weight: 700; }
.ag-root.ag-ncg .ag-capsule { border-left-width: 7px; }
.ag-root.ag-ncg .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-ncg .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-ncg .ag-table th:first-child { width: 30%; }
.ag-root.ag-ncg .ag-table td:first-child { font-weight: 650; }
.ag-root.ag-ncg .ag-band-head h3 { letter-spacing: -0.008em; }
`,

  mustMention: ['first teaching in 2028', 'first teaching from 2029', 'the rest for first teaching in 2030', 'programming and algorithms', 'AI literacy', 'bias in technology', '2031 and 2032', 'level 3 qualification in data science and AI', 'Not published', '21 September 2026'],

  dossier: {
    curriculumAuthority: 'England, the new Computing GCSE. Government response to the Curriculum and Assessment Review, November 2025, read from the gov.uk PDF: "we will refresh the programmes of study for each curriculum subject in line with the Review\'s recommendations and publish a revised national curriculum in 2027 for first teaching in 2028. We will also update GCSEs, for first teaching from 2029 onwards"; "working with Ofqual and awarding organisations, we will update GCSEs in national curriculum subjects in line with the Review\'s recommendation, as well as religious studies. Our aim is that some are ready for first teaching in 2029 and the rest for first teaching in 2030"; "We will also seek to update corresponding AS and A levels to be ready for first teaching in 2031 and 2032, as the cohort progresses to 16 - 19"; "The refreshed curriculum will teach pupils AI literacy, how to use data to complete tasks and solve problems, as well as learning about bias in technology. We will also replace the computer science GCSE with a broader offer that reflects the entirety of the computing curriculum whilst continuing to uphold the core principles of computer science such as programming and algorithms, and explore the development of a level 3 qualification in data science and AI"; "We agree with the Review that the computing curriculum should be the main vehicle for teaching about digital literacy". Curriculum and Assessment Review, Building a world-class curriculum for all, Final Report, November 2025: recommends the Government "Replaces GCSE Computer Science with a Computing GCSE which reflects the full breadth of the Computing curriculum and supports students to develop the digital skills they need". Year-group mapping on the page is arithmetic on those published dates: a two-year GCSE first taught in September 2029 begins with pupils in Year 7 in September 2026, and one first taught in September 2030 begins with pupils in Year 6 in September 2026.',
    localProject: 'The first cohort to sit it is in Year 6 or Year 7 right now. The page takes the Government\'s published timetable, revised curriculum published 2027 and taught 2028, updated GCSEs first taught in 2029 or 2030, and does the arithmetic families never get shown: a table mapping every year group in September 2026 to the Computing qualification it will actually sit. Years 8 to 11 take the current GCSE Computer Science; Year 7 depends on an allocation not yet announced; Year 6 and younger take the new Computing GCSE either way. The page is explicitly dated and makes a full section of what has not been published, which group Computing is in, content, papers, practical work, language, board names, and states that any provider claiming to teach the new GCSE today is teaching something that does not yet exist. It closes on the two things the Government has committed to keeping and adding, programming and algorithms on one side and AI literacy, data and bias in technology on the other, and builds its preparation advice only on those. Lesson family: a reform whose practical meaning is a year-group table and a list of unknowns.',
    requiredMentions: ['first teaching from 2029', 'the rest for first teaching in 2030', 'programming and algorithms', '21 September 2026'],
    sources: [
      { claim: 'Government response to the Curriculum and Assessment Review, November 2025: the curriculum and GCSE timetable, the two GCSE groups, the AS and A level dates, the replacement of the computer science GCSE, the refreshed curriculum content, the level 3 data science and AI qualification, and computing as the main vehicle for digital literacy.', url: 'https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report-government-response' },
      { claim: 'Curriculum and Assessment Review, Final Report, November 2025: the recommendation to replace GCSE Computer Science with a Computing GCSE.', url: 'https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report' }
    ],
    rejectedClaims: [
      'Which GCSE group, 2029 or 2030, Computing falls in: not announced as of 21 September 2026, and the year-group table shows Year 7 as conditional for that reason.',
      'Any subject content, paper structure, weighting, practical component or language rule for the new GCSE: none published, and the page lists each as not published.',
      'The name or specification code any exam board will use: boards write specifications after subject content is set, and none exists.',
      'That the new GCSE is easier or harder than the current one: nothing published supports either claim.',
      'That the level 3 data science and AI qualification will exist: the Government says it will explore it, and the page uses that word.',
      'Any offer to teach "the new Computing GCSE" as a course: we teach programming, algorithms, data and AI literacy, which the Government has named, and say so.'
    ]
  }
};
