'use strict';
// AI classes for kids in the UK (ag- door, national; UK cluster Phase 3, Best group).
// Facts read at primary sources on 20 September 2026:
//  - Curriculum and Assessment Review, Building a world-class curriculum for all, Final Report,
//    November 2025. Computing recommendations, verbatim, that the Government:
//    * "Provides greater clarity in the Computing curriculum about what students should be taught at
//      each key stage so that they build the essential digital literacy required for future life and
//      work."
//    * "Replaces GCSE Computer Science with a Computing GCSE which reflects the full breadth of the
//      Computing curriculum and supports students to develop the digital skills they need."
//    * "Reviews where digital skills and technologies have become an integral part of subject
//      disciplines other than Computing."
//    The report also frames the case: "The rise of artificial intelligence (AI) and trends in digital
//    information demand heightened media literacy and critical thinking, as well as digital skills."
//    NOTE: the phrase "trained using data" does NOT appear in the Review. It is the Government's.
//  - Government response to the Curriculum and Assessment Review, November 2025, verbatim:
//    * "Through the reformed curriculum, pupils will know from a young age how computers can be trained
//      using data and they will learn essential digital skills such as AI literacy."
//    * "We will replace the computer science GCSE with a GCSE in computing that better reflects the
//      breadth of the curriculum. We will also explore introducing a new level 3 qualification in data
//      science and AI."
//    * "We agree with the Review that the computing curriculum should be the main vehicle for teaching
//      about digital literacy."
//  - Ofcom, Children and Parents: Media Use and Attitudes Report, published 21 May 2026, for the
//    primary-age figures the teens page does not use: awareness of AI rises "from seven in ten (69%)
//    8-9s"; "just over a third (35%) of 8-9s say they have used AI"; and "Among parents of 3-7s who go
//    online to do creative activities, just over half (52%) say their child has used AI when doing
//    those activities. This includes 16% of parents who say that their child often uses AI when being
//    creative."
// Spine: one sentence the Government has already written down. "Pupils will know from a young age how
// computers can be trained using data" is a commitment made in November 2025 that has not yet reached
// a single classroom, and it happens to name the only idea about AI that a nine-year-old can be taught
// properly. Training a model from data a child gathers themselves needs no chatbot and no account, which
// matters because almost every generative AI service sets a minimum age above primary school.
// This page is the AI door; online-coding-classes-for-kids-uk remains the general kids door.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'AI FOR KIDS', blurb: 'The sentence the Government wrote in November 2025, what training a model from data actually looks like for a child, and why no chatbot is involved.' },
  slug: 'ai-classes-for-kids-uk',
  code: 'aku',
  accent: '#6A3D1B',
  accentRationale: 'AI for kids, UK: a warm dark umber from the solver (7.42:1 on every paper tint), separated from the crimson, olive and forest accents on the other three Best pages',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'AI classes for kids in the UK',
  title: 'AI Classes for Kids in the UK | Ages 8 to 13, Live Online',
  description: 'AI classes for children in the UK, ages 8 to 13: how models are trained from data, taught live with no chatbot accounts and no sign-ups. The first class is free.',
  ogDescription: 'The Government has committed to pupils knowing from a young age how computers can be trained using data. Here is what that looks like in a lesson.',
  twitterDescription: 'Live AI classes for UK children aged 8 to 13. Models trained from their own data. First class free.',
  pageName: 'AI Classes for Kids in the UK',
  webPageDescription: 'Live online AI classes for children in the UK, built around the Government commitment that pupils will know from a young age how computers can be trained using data.',
  courseDescription: 'Live online AI teaching for children in the UK aged roughly 8 to 13: how machines learn from data, training and testing simple models, and judging what a model can and cannot do.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'AI classes for kids, UK',
  navLinks: [
    { href: '#promise', label: 'What was promised' },
    { href: '#trained', label: 'Trained using data' },
    { href: '#accounts', label: 'No accounts needed' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Ages 8 to 13 &middot; Live online',
  h1: 'AI classes for kids in the UK',
  lede: 'In November 2025 the Government wrote a sentence that has not yet reached a single classroom. Responding to the Curriculum and Assessment Review, it said that through the reformed curriculum "pupils will know from a young age how computers can be trained using data". That is a commitment, and it is a good one, because training a model from data is the one thing about AI that a nine-year-old can genuinely be taught rather than merely shown. It also happens to need no chatbot, no account and no sign-up, which matters more than most parents realise. This page explains what was promised, what a lesson on it actually looks like, and why nothing we teach a primary-age child requires them to hold an account with an AI company.',
  secondaryCta: { href: '#accounts', label: 'Why no accounts' },
  wa: 'Hello Modern Age Coders, I would like a free first AI class for a child in the UK.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Written for primary and lower secondary',
  spec: [
    ['Ages', 'About 8 to 13'],
    ['Teaches', 'How machines learn from data'],
    ['Needs', 'A computer and an adult nearby'],
    ['Accounts', 'None with any AI company'],
    ['Group', 'Five to ten at one level'],
    ['Or', 'One to one'],
    ['Output', 'A model the child trained and broke'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'An AI class for a British child should teach how a machine learns from examples, not how to type a prompt. The Government has said as much: its November 2025 response to the Curriculum and Assessment Review commits to pupils knowing from a young age how computers can be trained using data, alongside a replacement of GCSE Computer Science with a broader Computing GCSE. None of that has reached a classroom yet. Meanwhile Ofcom found that just over a third of eight and nine-year-olds have already used AI, and that more than half of parents of creative three to seven-year-olds say their child has used it. We teach children roughly eight to thirteen what training actually means, using data the child collects, with no accounts held with any AI company. The first lesson is free; after that a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three AI courses for UK children',
    lede: 'Written for primary and lower secondary, in that order. Each card opens a full syllabus.',
    items: [
      { course: 'ai-literacy-for-kids-course', code: 'KIDS AI / 01', title: 'AI Literacy for Kids', note: 'What a model is, what training means, and why a confident answer is not the same as a correct one.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'KIDS AI / 02', title: 'Problem Solving and Computational Thinking', note: 'The thinking underneath all of it: breaking a problem apart, spotting a pattern, and saying the steps out loud.' },
      { course: 'python-ai-kids-masterclass', code: 'KIDS AI / 03', title: 'Python and AI for Kids', note: 'Typed Python for children ready to leave blocks behind, with the first models written line by line.' }
    ]
  },

  sections: [
    {
      id: 'promise', tint: 'tint', eyebrow: 'What was promised',
      h2: 'One sentence, written down in November 2025',
      lede: 'The Curriculum and Assessment Review made the recommendations. The Government wrote the sentence. Both documents are public and both are quoted exactly here.',
      body: [
        { kind: 'table', caption: 'The computing reforms, from the two November 2025 documents', head: ['Who said it', 'What it says'], rows: [
          ['The Review', 'The Government should provide "greater clarity in the Computing curriculum about what students should be taught at each key stage so that they build the essential digital literacy required for future life and work"'],
          ['The Review', 'The Government should replace "GCSE Computer Science with a Computing GCSE which reflects the full breadth of the Computing curriculum"'],
          ['The Review', 'The Government should review "where digital skills and technologies have become an integral part of subject disciplines other than Computing"'],
          ['The Government', '"Through the reformed curriculum, pupils will know from a young age how computers can be trained using data and they will learn essential digital skills such as AI literacy"'],
          ['The Government', '"We will replace the computer science GCSE with a GCSE in computing that better reflects the breadth of the curriculum. We will also explore introducing a new level 3 qualification in data science and AI"'],
          ['The Government', '"We agree with the Review that the computing curriculum should be the main vehicle for teaching about digital literacy"']
        ] },
        { kind: 'two', mt: true,
          left: [
            'It is worth being precise about who said what, because the most quoted phrase is not the Review\'s. The words "trained using data" appear in the Government\'s response, not in the Review itself. The Review argued more broadly that "the rise of artificial intelligence (AI) and trends in digital information demand heightened media literacy and critical thinking, as well as digital skills".',
            'That distinction matters if you want to know how firm the commitment is. A recommendation is advice. A response is a department putting its own words on the record.'
          ],
          right: [
            'What none of it comes with yet is a date, a programme of study or a single lesson plan. Curricula are rewritten slowly, exam specifications follow years later, and a child in Year 4 today may well be through primary school before any of this reaches their classroom.',
            'That is not a reason for gloom. It is a reason to know what is coming, because the idea at the centre of it can be taught now, by anybody willing to do it properly. And in England, as the <a class="ag-inline-link" href="/coding-and-ai-classes-in-england">England page</a> explains, most secondary schools are not required to follow the national curriculum at all.'
          ] },
        { kind: 'source', html: 'Sources, read 20 September 2026: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report" rel="noopener" target="_blank">Curriculum and Assessment Review, Building a world-class curriculum for all, Final Report</a>, November 2025, and the <a class="ag-inline-link" href="https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report-government-response" rel="noopener" target="_blank">Government response</a>, November 2025.' }
      ]
    },
    {
      id: 'trained', tint: 'deep', eyebrow: 'Trained using data',
      h2: 'What that sentence looks like in a lesson',
      lede: 'This is the part a child can actually do, and it takes about three lessons before something clicks that never unclicks.',
      body: [
        { kind: 'two',
          left: [
            'Start with a question a child cares about and a machine that knows nothing. Can the computer tell a drawing of a cat from a drawing of a dog? It cannot, and it will not, until somebody gives it examples. So the child draws twenty of each, labels them, and feeds them in. The machine gets better. Then they test it on a drawing it has never seen, and it gets one wrong, and the interesting lesson begins.',
            'Why did it fail? Usually because of something in the data. All the cats were drawn facing left. All the dogs had collars, so it learnt collars rather than dogs. A nine-year-old who discovers that has understood something about AI that a great many adults have not.'
          ],
          right: [
            'From there the ideas come in a natural order and none of them need jargon first. Training and testing have to use different examples. More data usually helps and sometimes does not. A model that is right nine times in ten is still wrong once in ten, and which one it gets wrong is not random.',
            'Then the last step, which is the whole point: the child breaks it on purpose. Feed it something ridiculous. Find the input that makes it confidently wrong. A child who has done that will never again assume a machine is right because it sounds sure.'
          ] },
        { kind: 'table', mt: true, caption: 'What a child understands after each stage', head: ['Stage', 'What they do', 'What they now know'], rows: [
          ['Collect', 'Gather and label their own examples', 'A machine starts empty, and somebody chooses what it sees'],
          ['Train', 'Feed the labelled examples in and watch it improve', 'Training is a process with inputs, not magic'],
          ['Test', 'Try it on examples it has never seen', 'Doing well on what you practised proves nothing'],
          ['Diagnose', 'Work out why a wrong answer was wrong', 'Most failures are in the data, not the machine'],
          ['Break', 'Find the input that makes it confidently wrong', 'Confidence and correctness are different things']
        ] },
        { kind: 'p', text: 'Every stage is hands-on, every stage produces something the child can show a parent, and none of it requires them to talk to a chatbot. That is deliberate, and the next section explains why.' },
        { kind: 'p', text: 'The same habit scales all the way up. On the <a class="ag-inline-link" href="/best-coding-classes-for-teens-uk">teens page</a> it becomes a data project on base lines in a national report; for an adult it becomes knowing when a tool has handed you something that will not survive contact with real input.' }
      ]
    },
    {
      id: 'accounts', tint: '', eyebrow: 'No accounts needed',
      h2: 'Why a primary-age child does not need an AI account',
      lede: 'A practical point that we would rather state clearly than leave a parent to discover in a terms-of-service page.',
      body: [
        { kind: 'two',
          left: [
            'Generative AI services set their own minimum ages, and those ages are contract terms rather than suggestions. They vary by company and by country, they change, and a great many of them sit above primary school. We are not going to list them here and risk being out of date, because the only reliable version is the one on the provider\'s own terms page on the day you read it.',
            'What we will say plainly is this: nothing we teach a child of primary age needs them to hold an account with an AI company. Not one lesson. Training a model on drawings a child made does not involve a chatbot at all.'
          ],
          right: [
            'The figures suggest this is not a theoretical concern. Ofcom found that 35 per cent of eight and nine-year-olds say they have used AI, and that among parents of three to seven-year-olds who do creative activities online, more than half say their child has used AI while doing them, including one in six who say it happens often.',
            'So for many British families the question is no longer whether a young child will meet these tools. It is whether they will meet them with any idea of how they work. A class that teaches training and testing gives a child that footing before the first chatbot conversation, not after it.'
          ] },
        { kind: 'table', mt: true, caption: 'What a lesson uses, and what it does not', head: ['We use', 'We do not use'], rows: [
          ['Data the child collects or draws themselves', 'Accounts held by the child with any AI provider'],
          ['Tools the teacher runs and shares on screen', 'Chatbots as a substitute for the child thinking'],
          ['Python, once a child is ready for typed code', 'Anything that needs a child to give a company personal details'],
          ['Work saved where the family can see it', 'Uploads of photographs of the child or of other children']
        ] },
        { kind: 'p', text: 'Older children are a different matter and we treat them differently. Once a learner is into secondary school, using AI tools openly and keeping a record of what the tool contributed is part of the teaching, because that is what school and work will expect of them. The line moves with the learner, and it moves in one direction.' },
        { kind: 'p', text: 'If a child is younger than about eight, the right next step is usually block-based coding rather than anything labelled AI. The <a class="ag-inline-link" href="/online-coding-classes-for-kids-uk">coding classes for kids page</a> covers that stage properly.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four steps, roughly eight to thirteen',
    lede: 'Where a child starts depends on what they can already do, not on their school year. Some eight-year-olds begin at step two.',
    table: { caption: 'The AI ladder for children', head: ['Step', 'What the child works on', 'What they can show an adult'], rows: [
      ['1. Patterns and rules', 'Sorting, classifying and describing rules in their own words', 'A sorting rule they invented, and a case where it breaks'],
      ['2. Training a model', 'Collecting labelled examples and training a simple classifier', 'A model that recognises their drawings, and one it gets wrong'],
      ['3. Data and bias', 'Why a model failed, and what was missing from the examples', 'A before and after: the data fixed, the model improved'],
      ['4. Into code', 'Typed Python, and models written rather than dragged', 'A short program that loads data, trains something, and reports how well it did']
    ] },
    left: { h3: 'Blocks first, if they are ready for blocks', ps: [
      'A child who has never programmed usually starts with block-based coding for a term or two. Trying to teach training to a child who has never written a rule is teaching a word rather than an idea.',
      'The order of everything, well past this stage, is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'And straight on if they are not', ps: [
      'A confident eleven-year-old who already types Python skips ahead and works on real datasets sooner. The free lesson is where that is decided.',
      'Children who want somewhere to take it next often enjoy a competition; the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists what primary-age children can enter.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for UK children',
    lede: 'Arranged by where a child usually is when they start. The free lesson settles which one is right.',
    bands: [
      { num: 'I', h3: 'Before the code', sub: 'Thinking, sorting and first programs', courses: [
        { code: 'UK / K1 / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving and computational thinking', blurb: 'Breaking problems apart and describing rules aloud, which is where all of this starts.' },
        { code: 'UK / K1 / 02', slug: 'kids-coding-blocks-masterclass', title: 'Block coding for younger children', blurb: 'Drag-and-drop programs from about six, with plenty of talking about what each piece does.' },
        { code: 'UK / K1 / 03', slug: 'scratch-programming-complete-course', title: 'Scratch games and stories', blurb: 'Characters, scores and levels, each planned on paper before a block is placed.' }
      ] },
      { num: 'II', h3: 'What AI actually is', sub: 'Training, testing and breaking models', courses: [
        { code: 'UK / K2 / 01', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'Models trained from examples the child gathers, then tested on things they have never seen.' },
        { code: 'UK / K2 / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Building with AI help, carefully', blurb: 'Making games with AI assistance while keeping the child in charge of every decision.' },
        { code: 'UK / K2 / 03', slug: 'kids-ai-web-development-course', title: 'AI and web projects for kids', blurb: 'Something that lives on a page and does something clever, built end to end.' }
      ] },
      { num: 'III', h3: 'Into real code', sub: 'For children ready to type', courses: [
        { code: 'UK / K3 / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'The crossing from blocks to a keyboard, with the first written models.' },
        { code: 'UK / K3 / 02', slug: 'minecraft-coding-for-kids-course', title: 'Coding in Minecraft', blurb: 'Real programming inside a world a child already knows, which removes the hardest part of starting.' },
        { code: 'UK / K3 / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Project and hackathon preparation', blurb: 'Taking an idea to something finished and presentable, which is a skill of its own.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'A named teacher, a short lesson, and an adult within earshot',
    lede: 'Our teachers work from India, where clocks do not change, so the UK is five and a half hours behind in winter and four and a half in summer. Children almost always take an after-school slot.',
    slots: [
      { time: 'Straight after school', l: 'The usual slot for primary-age children, while concentration is still available.' },
      { time: 'Early evening', l: 'Workable for older children and for families with a long commute.' },
      { time: 'Weekend morning', l: 'Calmer, and good for finishing a project in one go.' }
    ],
    cells: [
      { h3: 'Short and busy', p: 'Children build something in every lesson. A child who has made nothing has not had a lesson.' },
      { h3: 'An adult nearby', p: 'We ask that a parent or carer is in the house and reachable. Not sitting in, just present.' },
      { h3: 'No accounts', p: 'Primary-age children need no account with any AI provider for anything we teach them.' },
      { h3: 'Groups by level', p: 'Five to ten children at the same stage. Nobody is the youngest in a room of teenagers.' },
      { h3: 'Explaining out loud', p: 'A child says what their program or model will do before it runs. Being wrong out loud is how the idea lands.' },
      { h3: 'Work you can see', p: 'Every finished project is saved where the family can open it, which is usually how a parent finds out what was learnt.' }
    ]
  },

  projectsH2: 'What younger learners have built',
  projectsLede: 'Four projects from children of about this age. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Copied from Google as written, by parents who were not asked to write anything.',

  fees: {
    h2: 'What AI classes for children cost',
    lede: 'One monthly charge in US dollars, the same everywhere outside India. The free lesson comes first and nothing is taken before a course and a slot are agreed.',
    free: ['A full lesson with a teacher', 'An honest view of the right starting step', 'No card details requested'],
    group: ['Five to ten children at one step', 'The same teacher all the way through', 'Work saved where a parent can see it', 'A certificate when a course finishes'],
    one: ['One teacher and one child', 'Useful for a child well ahead or very shy', 'Scheduled around school and other activities']
  },

  faq: {
    eyebrow: 'Questions from UK parents',
    h2: 'What parents ask about AI classes for children',
    items: [
      { q: 'What age are these classes for?', a: 'Roughly eight to thirteen. Younger children usually start with block-based coding instead, and we will say so honestly in the free lesson rather than take a booking that will not work.' },
      { q: 'Will my child be using ChatGPT?', a: 'No. Nothing we teach a primary-age child requires an account with any AI provider. Training a model on drawings a child made involves no chatbot at all.' },
      { q: 'What is the Government actually changing?', a: 'In its November 2025 response to the Curriculum and Assessment Review it committed that "pupils will know from a young age how computers can be trained using data", and said it will replace the computer science GCSE with a broader computing GCSE and explore a new level 3 qualification in data science and AI.' },
      { q: 'When will that reach my child\'s school?', a: 'No date has been published. Curricula are rewritten slowly and exam specifications follow years afterwards, so a child in primary school now may be well past it before anything changes.' },
      { q: 'Is my eight-year-old too young to meet AI?', a: 'Ofcom found that 35 per cent of eight and nine-year-olds have already used it, so the practical question is whether they meet it understanding anything about how it works.' },
      { q: 'What does "trained using data" mean for a child?', a: 'That a machine starts knowing nothing, learns from examples somebody chose, and is only as good as those examples. A child discovers this properly the first time their model gets something wrong for a reason they can find.' },
      { q: 'Does my child need to be good at maths?', a: 'Not at this stage. Curiosity and a willingness to be wrong out loud matter far more, and the maths arrives much later and gradually.' },
      { q: 'Do I need to sit with them?', a: 'No, but we ask that an adult is in the house and reachable. Younger children occasionally need a hand with a file or a screen share.' },
      { q: 'How long is a lesson?', a: 'Short enough that a child is still concentrating at the end. The right length is agreed in the free lesson, because it differs by age and by child.' },
      { q: 'What does it cost?', a: 'The first lesson is free. A group place is then USD 100 each month and one-to-one teaching USD 150, charged monthly with nothing taken in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages for UK families',
    lede: 'Each takes one part of this further.',
    items: [
      { href: '/online-coding-classes-for-kids-uk', label: 'Coding classes for kids in the UK', p: 'The general door for children, key stage by key stage.' },
      { href: '/coding-and-ai-classes-in-england', label: 'Coding and AI classes in England', p: 'What the computing curriculum says, and who is actually required to follow it.' },
      { href: '/best-coding-classes-for-teens-uk', label: 'Coding classes for teens in the UK', p: 'The same subject once a child is old enough to use the tools directly.' },
      { href: '/best-python-classes-online-uk', label: 'Python classes online in the UK', p: 'The language a child moves to once blocks run out.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'What primary-age children can enter, with closing dates.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects children have built and published.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will come back at a UK time that suits. The lesson is real teaching, the child builds something, and it ends with a straight view of the right starting step.',
    readFirst: 'Happier reading first? Each <a class="ag-inline-link" href="/courses">course page</a> carries a full syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> sets out the method and its limits, and the sequence of topics runs down the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.',
    note: 'Most families reach us fastest on WhatsApp, which costs a UK mobile nothing. The number is registered in India and we would rather say that here than have you notice it later.',
    formNote: 'No card, no contract. We come back once, with a time.'
  },

  footer: {
    cols: [
      { h4: 'United Kingdom', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/coding-and-ai-classes-in-england', label: 'England' },
        { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
        { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' }
      ] },
      { h4: 'For children', links: [
        { href: '/online-coding-classes-for-kids-uk', label: 'Coding for kids' },
        { href: '/best-python-classes-online-uk', label: 'Python classes' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Live AI lessons for UK children, on UK time'
  },

  personalityCss: `
.ag-root.ag-aku .ag-hero h1 { letter-spacing: -0.024em; font-weight: 700; }
.ag-root.ag-aku .ag-capsule { border-left-width: 6px; border-radius: 0 4px 4px 0; }
.ag-root.ag-aku .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-aku .ag-section-head p { max-width: 62ch; }
.ag-root.ag-aku .ag-table caption { text-align: left; font-weight: 700; letter-spacing: 0.01em; }
.ag-root.ag-aku .ag-table td:first-child { font-weight: 650; }
.ag-root.ag-aku .ag-band-head h3 { letter-spacing: -0.004em; }
`,

  mustMention: ['trained using data', 'November 2025', 'Computing GCSE', 'data science and AI', 'main vehicle for teaching', '35 per cent', 'heightened media literacy', 'confidently wrong', 'no account', 'level 3 qualification'],

  dossier: {
    curriculumAuthority: 'United Kingdom, AI for children. Curriculum and Assessment Review, Building a world-class curriculum for all, Final Report, November 2025. Computing recommendations, that the Government: "Provides greater clarity in the Computing curriculum about what students should be taught at each key stage so that they build the essential digital literacy required for future life and work"; "Replaces GCSE Computer Science with a Computing GCSE which reflects the full breadth of the Computing curriculum and supports students to develop the digital skills they need"; "Reviews where digital skills and technologies have become an integral part of subject disciplines other than Computing." Framing: "The rise of artificial intelligence (AI) and trends in digital information demand heightened media literacy and critical thinking, as well as digital skills." The phrase "trained using data" does NOT appear in the Review. Government response to the Curriculum and Assessment Review, November 2025: "Through the reformed curriculum, pupils will know from a young age how computers can be trained using data and they will learn essential digital skills such as AI literacy. We will replace the computer science GCSE with a GCSE in computing that better reflects the breadth of the curriculum. We will also explore introducing a new level 3 qualification in data science and AI"; and "We agree with the Review that the computing curriculum should be the main vehicle for teaching about digital literacy." Ofcom, Children and Parents: Media Use and Attitudes Report, published 21 May 2026, primary-age figures: awareness of AI rises "from seven in ten (69%) 8-9s"; "just over a third (35%) of 8-9s say they have used AI"; "Among parents of 3-7s who go online to do creative activities, just over half (52%) say their child has used AI when doing those activities. This includes 16% of parents who say that their child often uses AI when being creative."',
    localProject: 'One sentence the Government has already written down. Its November 2025 response commits that pupils "will know from a young age how computers can be trained using data", a commitment with no date, no programme of study and no lesson plan behind it yet, and the page turns it into a method a child can do this term. The lesson sequence is collect, train, test, diagnose, break: a child gathers and labels their own drawings, trains a classifier, tests it on something unseen, finds out that all the cats faced left or all the dogs wore collars, and finally hunts for the input that makes the model confidently wrong. The second half handles a point most kids AI pages dodge: generative services set minimum ages as contract terms, they vary and they change, so the page refuses to list them and states instead that nothing taught to a primary-age child requires an account with any AI provider. The attribution of the key quote is corrected on the page itself, since the famous phrase is the Government\'s and not the Review\'s. Lesson family: a public commitment that has not yet reached a classroom, taught now; distinct from the teens page (base lines), the adults page (a regression against age) and the Python page (a published subset).',
    requiredMentions: ['trained using data', 'November 2025', 'Computing GCSE', 'confidently wrong', '35 per cent'],
    sources: [
      { claim: 'Curriculum and Assessment Review, Building a world-class curriculum for all, Final Report, November 2025: the three computing recommendations and the framing on AI and media literacy.', url: 'https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report' },
      { claim: 'Government response to the Curriculum and Assessment Review, November 2025: pupils knowing from a young age how computers can be trained using data, the replacement of the computer science GCSE, the level 3 data science and AI qualification, and computing as the main vehicle for digital literacy.', url: 'https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report-government-response' },
      { claim: 'Ofcom, Children and Parents: Media Use and Attitudes Report, published 21 May 2026: awareness and use of AI among 8 to 9-year-olds, and AI use by creative 3 to 7-year-olds as reported by parents.', url: 'https://www.ofcom.org.uk/media-use-and-attitudes/media-habits-children/childrens' }
    ],
    rejectedClaims: [
      'Minimum ages for any named AI service: these are contract terms that differ by company and country and change without notice, so the page states only that nothing taught to a primary-age child needs such an account, and points a reader to the provider\'s own terms.',
      'A date for the reformed curriculum or the new Computing GCSE: none has been published, and the page says so.',
      'That the Curriculum and Assessment Review said pupils would learn how computers are trained using data: it did not. That sentence is the Government response\'s, and the page attributes it correctly.',
      'Any claim that our teaching is aligned to the new curriculum: it does not exist yet, so nothing can be aligned to it.',
      'Teen or adult AI figures from the same Ofcom report: those belong to the teens and adults pages, and only the primary-age figures are used here.',
      'Any developmental or attainment claim about children who learn AI early: no source supports it.'
    ]
  }
};
