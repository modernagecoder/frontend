'use strict';
// AI courses for kids, Australia (ag- topic door; AU cluster Phase 2, row 18).
// Demand: our Search Console, Australia, 16 months: "ai courses for kids" 37 impressions at position 57.2, "kids ai
// classes" 23 at 49.8, "ai classes for kids" 19 at 50.2.
// Intent: parents CHOOSING an AI course for a child aged about 6 to 12: what a good one teaches, what to avoid,
// vendors' own age rules for AI chatbots, and what the Australian Curriculum says about AI. The hands-on Python
// course is /python-ai-course-for-kids-australia and teens are /ai-classes-for-teens-australia; both linked.
// Sources, read raw on 7 October 2026:
//  - ACARA, Australian Curriculum v9, Digital Technologies curriculum content 7-10 (Word download): AC9TDI10P01
//    elaboration "considering how training data issues such as the zero problem dictate the output from
//    predictive models; for example, a model with many examples of horses and no zebras in its training data is
//    likely to classify all zebras as horses"; AC9TDI8P01 elaboration "ensuring that the data used to train an AI
//    model minimises any potential biases in its output and is representative of the target audience".
//  - Anthropic, Consumer Terms of Service: "You must be at least 18 years old or the minimum age required to
//    consent to use the Services in your location, whichever is higher."
//  - Google, Gemini Apps Help, Manage your Google AI plan: "To use Gemini Apps with a Google AI plan in most
//    countries, you must be 13 (or the applicable age in your country) or over."
//  - OpenAI's terms page returned 403 to curl's default agent and was not circumvented, so it is not quoted.
// Lesson family: the zero problem. Our own example in ACARA's pattern: a picture sorter trained on many kangaroos
// and koalas and no wallabies has only two possible answers, so every wallaby it is shown is labelled a kangaroo
// or a koala; it can never say "wallaby".

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'AI COURSES, KIDS', blurb: 'AI courses for Australian kids: what a good one teaches, what to avoid, chatbot age rules and what the Australian Curriculum says about AI.' },
  slug: 'ai-courses-for-kids-australia',
  code: 'akau',
  accent: '#306810',
  accentRationale: 'AI courses for kids, Australia: a eucalyptus-leaf green chosen by hand, muted, at least 12 RGB units from every accent in use, outside the magenta band and at least 40 from the other Phase 2 doors',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'AI courses for kids, Australia',
  title: 'AI Courses for Kids in Australia | What a Good One Teaches',
  description: 'AI courses for kids in Australia: what a good one teaches, which chatbots set age limits, and how children learn AI by building it. Live online, first class free.',
  ogDescription: 'Why a picture sorter that has never seen a wallaby will call every wallaby a kangaroo: what a good AI course teaches Australian children, and what to avoid.',
  twitterDescription: 'Choosing an AI course for an Australian child: what to look for, chatbot age rules, and why building beats chatting. First class free.',
  pageName: 'AI Courses for Kids in Australia',
  webPageDescription: 'A parent guide to AI courses for Australian children aged about 6 to 12: what a good course teaches, vendor age rules, curriculum links and live online options.',
  courseDescription: 'Live online AI courses for Australian children: how AI learns from examples, where it goes wrong and how to build simple AI projects, without adult chatbot accounts.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'AI courses for kids',
  navLinks: [
    { href: '#good', label: 'What a good course teaches' },
    { href: '#zero', label: 'A worked example' },
    { href: '#ages', label: 'Chatbot age rules' },
    { href: '#choose', label: 'How to choose' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 6 to 12 &middot; Understand AI, then build it',
  h1: 'AI courses for kids',
  lede: 'Search for an AI course for children and you will find everything from serious introductions to machine learning to sessions that amount to typing questions into a chatbot. They are not the same thing, and the difference matters. A child who learns how AI learns from examples, and how it fails, becomes a sharp and safe user for life. A child who only learns to ask a chatbot for answers may never find out that the confident reply can be wrong. This page is for Australian parents choosing an AI course for a child aged about six to twelve. It sets out what a good course should teach, works through one AI failure that children can understand completely, quotes the age rules some AI companies publish, and gives a short checklist for comparing courses.',
  secondaryCta: { href: '#choose', label: 'See the checklist' },
  wa: 'Hello Modern Age Coders, I am in Australia and looking for an AI course for my child. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; AI understood from the inside, not just used',
  spec: [
    ['For', 'Children aged about 6 to 12'],
    ['Core idea', 'How AI learns from examples'],
    ['Also', 'Where AI goes wrong, and why'],
    ['Built with', 'Scratch, then Python'],
    ['Chatbot accounts', 'Not needed'],
    ['Format', 'Live online lessons'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'A good AI course for kids teaches how artificial intelligence learns from examples, how it can be wrong, and how to build small AI projects, rather than only how to type questions into a chatbot. For children aged about 6 to 12 that means age-appropriate tools, hands-on projects in Scratch or Python and plenty of discussion about mistakes and fairness. Several popular chatbots set minimum ages in their own terms. Modern Age Coders teaches AI to Australian children live online without adult chatbot accounts, and the first class is free.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three AI courses for Australian children',
    lede: 'Chosen by age and by how much the child wants to code. Each card opens the full syllabus.',
    items: [
      { course: 'ai-literacy-for-kids-course', code: 'AKAU / 01', title: 'AI Literacy for Kids', note: 'The thinking course: how AI learns, why it errs and how to question it, for ages 8 to 14.' },
      { course: 'python-ai-kids-masterclass', code: 'AKAU / 02', title: 'Python and AI for Kids', note: 'Typing real code at last: children aged 9 to 12 train small models and test them honestly.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', code: 'AKAU / 03', title: 'Vibe Coding for Kids', note: 'Games and apps made with an AI assistant, where the child, aged 8 to 12, makes every decision.' }
    ]
  },

  sections: [
    {
      id: 'good', tint: 'tint', eyebrow: 'What a good course teaches',
      h2: 'Five things every AI course for children should cover',
      lede: 'Whatever the tools, a course worth paying for teaches these ideas in a way a child can explain back to you.',
      body: [
        { kind: 'table', caption: 'The core of a good children\'s AI course', head: ['Idea', 'What a child should be able to say', 'How it is taught'], rows: [
          ['AI learns from examples', '"It looked at lots of labelled examples and found patterns."', 'Sorting games, then training a tiny model'],
          ['Examples can be missing', '"If it never saw something, it cannot recognise it."', 'Leaving a category out on purpose and watching it fail'],
          ['AI can be confidently wrong', '"A sure-sounding answer can still be a guess."', 'Checking AI answers against a trusted source'],
          ['Fairness depends on data', '"Lopsided examples make lopsided answers."', 'Training on an unbalanced set and comparing'],
          ['People stay responsible', '"I decide whether to use what it says."', 'Discussion and real decisions in projects']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What to be wary of',
          left: [
            'Courses that are mostly typing prompts into a chatbot teach a narrow skill and often rely on tools with adult age rules. Ask exactly which tools are used and who holds the account.',
            'Be wary too of promises that a child will "master AI" in a few sessions. Understanding grows with practice, like any subject.'
          ],
          rightH3: 'What a good sign looks like',
          right: [
            'Children build something, test it on new examples, and talk about its mistakes. They can tell you why it went wrong, not just that it did.',
            'The course links AI to coding, so children can eventually build their own models instead of only using other people\'s.'
          ] }
      ]
    },
    {
      id: 'zero', tint: 'deep', eyebrow: 'A worked example',
      h2: 'The zero problem: why the sorter never says wallaby',
      lede: 'Here is one AI failure explained completely. Children as young as eight understand it, and it changes how they see every AI tool afterwards.',
      body: [
        { kind: 'p', html: 'Imagine training a picture sorter on lots of photos of kangaroos and koalas, each labelled correctly. It learns well, and on new kangaroos and koalas it is usually right. Now show it a wallaby. It has never seen one, and "wallaby" is not one of its possible answers, so it must choose between the only two labels it knows. Whatever it says, it is wrong. The Australian Curriculum names this exact issue the <strong>zero problem</strong>: a category with zero training examples.' },
        { kind: 'table', caption: 'Our worked example: a sorter trained on kangaroos and koalas, no wallabies', head: ['Shown to the sorter', 'Labels it can choose from', 'What it can answer', 'Can it ever be right?'], rows: [
          ['A kangaroo', 'Kangaroo, koala', 'Kangaroo', 'Yes'],
          ['A koala', 'Kangaroo, koala', 'Koala', 'Yes'],
          ['A wallaby', 'Kangaroo, koala', 'Kangaroo or koala', 'No: "wallaby" is not on its list'],
          ['A wombat', 'Kangaroo, koala', 'Kangaroo or koala', 'No, for the same reason']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'What ACARA says', p: 'The curriculum\'s own example is "a model with many examples of horses and no zebras in its training data is likely to classify all zebras as horses". Our sorter makes the same mistake with wallabies.' },
          { h3: 'Why it matters', p: 'The sorter does not say "I don\'t know". It gives an answer, sometimes a confident one, because nothing in its training taught it that something else exists.' },
          { h3: 'The fix', p: 'Add examples of the missing category, add an "unsure" answer for low confidence, and always test on things the model was not trained on.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where children see it in real life',
          left: [
            'A song recommender that only knows what you have already played will keep suggesting more of the same. A voice assistant may struggle with words it rarely heard in training. Each is a version of the zero problem.',
            'Once children recognise the pattern, they start asking the right question of any AI tool: what examples was this trained on, and what might it never have seen?'
          ],
          rightH3: 'The fairness link',
          right: [
            'The curriculum also asks students to consider "ensuring that the data used to train an AI model minimises any potential biases in its output and is representative of the target audience". Missing or thin categories are a common way for unfair results to creep in.',
            'In our lessons, children train a model with a category left out, watch it fail, then add examples and watch it improve. Seeing it happen is far more convincing than being told.'
          ] },
        { kind: 'source', html: 'The two curriculum quotations come from elaborations of AC9TDI10P01 and AC9TDI8P01 in the ACARA Version 9.0 <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">Digital Technologies content for Years 7 to 10</a>, downloaded 7 October 2026. The kangaroo, koala and wallaby example is ours.' }
      ]
    },
    {
      id: 'ages', tint: 'tint', eyebrow: 'Chatbot age rules',
      h2: 'What some AI companies say about age',
      lede: 'Before any course puts a child in front of an AI chatbot, check the company\'s own rules. Here are two, quoted exactly as published.',
      body: [
        { kind: 'table', caption: 'Age rules quoted from AI companies\' own pages, read 7 October 2026', head: ['Service', 'What the company states'], rows: [
          ['Anthropic (Claude), consumer terms', '"You must be at least 18 years old or the minimum age required to consent to use the Services in your location, whichever is higher."'],
          ['Google (Gemini Apps), Google AI plan help page', '"To use Gemini Apps with a Google AI plan in most countries, you must be 13 (or the applicable age in your country) or over."'],
          ['Other services', 'Read each provider\'s current terms yourself. One major provider\'s terms page could not be read automatically, so we do not quote it.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this means for an AI course',
          left: [
            'A course for primary-aged children should not depend on tools that set an older minimum age. If a course does use a chatbot, ask whose account it is, what the provider\'s age rules say, and how conversations are supervised.',
            'Age rules change, and they can differ by country and by product, so check the provider\'s current terms rather than relying on any summary, including ours.'
          ],
          rightH3: 'How our children\'s courses handle it',
          right: [
            'Our AI courses for children do not require any adult chatbot account. Children learn with age-appropriate tools and with programs they write themselves in Scratch and Python.',
            'Teenagers meet large AI tools later, in courses designed for their age and within each provider\'s rules. See <a class="ag-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens</a>.'
          ] },
        { kind: 'source', html: 'Sources, read 7 October 2026: Anthropic <a class="ag-inline-link" href="https://www.anthropic.com/legal/consumer-terms" rel="noopener" target="_blank">Consumer Terms of Service</a>; Google <a class="ag-inline-link" href="https://support.google.com/gemini/answer/14517446" rel="noopener" target="_blank">Gemini Apps Help, Manage your Google AI plan</a>. We are independent of both companies.' }
      ]
    },
    {
      id: 'choose', tint: 'deep', eyebrow: 'How to choose',
      h2: 'A checklist for comparing AI courses',
      lede: 'Use these questions with any provider, including us. A good course will answer all of them clearly.',
      body: [
        { kind: 'table', caption: 'Questions to ask before you enrol', head: ['Ask', 'A good answer', 'A worrying answer'], rows: [
          ['Which tools will my child use?', 'Named, age-appropriate tools and their own code', 'Vague, or adult chatbots'],
          ['Whose accounts are they?', 'No accounts needed, or the family\'s with settings explained', 'Accounts created for the child by the provider'],
          ['Will my child build something?', 'Yes, and test it on new examples', 'Mostly watching or prompting'],
          ['How do you teach AI mistakes?', 'Children cause, find and fix them', 'Mistakes are not discussed'],
          ['How does it connect to coding?', 'It leads into Scratch and Python', 'It stands alone'],
          ['What happens in a trial?', 'A real lesson with your child doing the work', 'A sales presentation']
        ] },
        { kind: 'p', mt: true, html: 'If your child is ready to type code, our <a class="ag-inline-link" href="/python-ai-course-for-kids-australia">Python AI course for kids</a> shows a full worked example of a model learning from sentences. Younger children often start with <a class="ag-inline-link" href="/coding-games-for-kids-australia">coding games</a> and Scratch before any AI work.' }
      ]
    },
    {
      id: 'school', tint: '', eyebrow: 'At school',
      h2: 'AI in the Australian Curriculum',
      lede: 'AI is not an add-on in Australian schools. Version 9 of the curriculum mentions it repeatedly in the Digital Technologies elaborations.',
      body: [
        { kind: 'two',
          leftH3: 'What students meet',
          left: [
            'In Years 7 to 10 the elaborations include training data issues such as the zero problem, bias in training data, machine learning that classifies images, and using AI tools responsibly.',
            'A good out-of-school AI course should prepare children for these ideas in a gentler form, so they arrive at secondary school already understanding them.'
          ],
          rightH3: 'What we do not do',
          right: [
            'We never complete school assessment tasks, and we teach children to say when they have used AI help, as many schools now expect.',
            'We also do not claim that an AI course raises school results. What it builds is understanding, and the habit of checking.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four stages of AI understanding for children',
    lede: 'Most children move through the first three stages over a school year of weekly lessons.',
    table: { caption: 'From user to thinker', head: ['Stage', 'What your child can do'], rows: [
      ['1. Notice', 'Spot AI in everyday tools and describe what it is doing'],
      ['2. Explain', 'Say how a model learns from labelled examples, in their own words'],
      ['3. Test', 'Train a tiny model, test it on new examples and find where it fails'],
      ['4. Question', 'Ask what a model was trained on, what it never saw and who checks it']
    ] },
    left: { h3: 'What age should my child start AI?', ps: [
      'Children from about six can start noticing and sorting, without screens or with simple tools. Hands-on model building usually suits ages eight and up.',
      'The free first class helps us pick the right starting point.'
    ] },
    right: { h3: 'Does my child need to code first?', ps: [
      'Not for the first stages. To build real AI projects, some coding helps, which is why our AI courses lead into Scratch and Python.',
      'Children who already code can go straight to building models.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'AI and coding courses for children',
    lede: 'Three bands by age and readiness. We decide the right one together in the trial lesson.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Ages 6 to 9', courses: [
        { code: 'AKAU / FST / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Logic first, so AI later makes sense.' },
        { code: 'AKAU / FST / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem Solving for Kids', blurb: 'Patterns and sorting, the roots of AI.' },
        { code: 'AKAU / FST / 03', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Blocks, games and early Python.' }
      ] },
      { num: 'II', h3: 'AI for children', sub: 'Ages 8 to 14', courses: [
        { code: 'AKAU / AIK / 01', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'Understanding before using.' },
        { code: 'AKAU / AIK / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Building small models in Python.' },
        { code: 'AKAU / AIK / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe Coding for Kids', blurb: 'Creative projects with an AI assistant.' }
      ] },
      { num: 'III', h3: 'Later, for teens', sub: 'Ages 13 and up', courses: [
        { code: 'AKAU / TEN / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Machine learning with real libraries, for 13 to 18.' },
        { code: 'AKAU / TEN / 02', slug: 'teens-ai-tools-mastery-course', title: 'AI Tools Course for Teens', blurb: 'Using AI tools well, strictly 13 and over.' },
        { code: 'AKAU / TEN / 03', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Orange Data Mining for Teens', blurb: 'Machine learning without writing code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'AI lessons for Australian children',
    lede: 'Lessons are live and online, with teachers based in India. Australian afternoons overlap the Indian working day in every state, so after-school times are straightforward to set up.',
    slots: [
      { time: 'After school', l: 'Short weekday lessons for primary children.' },
      { time: 'Saturday morning', l: 'Unhurried project time.' },
      { time: 'Sunday', l: 'Handy when the week is packed.' }
    ],
    cells: [
      { h3: 'Trial lesson free', p: 'Your child sorts, trains and tests something small with a teacher. No card is asked for.' },
      { h3: 'Five to ten children', p: 'Small groups that compare results and argue about mistakes.' },
      { h3: 'Private option', p: 'Lessons tailored to one child\'s pace and curiosity.' },
      { h3: 'No adult chatbots', p: 'Children\'s courses do not need any adult AI account.' },
      { h3: 'Mistakes on purpose', p: 'Children break models deliberately to see why they fail.' },
      { h3: 'Parents included', p: 'You are welcome to watch and ask questions at any lesson.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'A handful of projects our students built and published. Browse the <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Shown exactly as families posted them on our Google profile.',

  fees: {
    h2: 'Fees for AI courses for kids',
    lede: 'For families outside India, one monthly fee in US dollars covers lessons. Nothing to pay up front to enrol, and no minimum number of months.',
    free: ['A small sort, train and test activity', 'Honest advice on the right starting point', 'No card or bank details'],
    group: ['Five to ten children per class', 'Results compared and discussed', 'A teacher who knows your child', 'Stop after any month'],
    one: ['Lessons built around your child\'s questions', 'Pace that suits them', 'Times around school and activities']
  },

  faq: {
    eyebrow: 'Parents ask',
    h2: 'What Australian parents ask about AI courses for kids',
    items: [
      { q: 'What should an AI course for kids teach?', a: 'How AI learns from examples, how and why it can be wrong, how training data affects fairness, and how to build and test small AI projects. Typing questions into a chatbot should be a small part at most.' },
      { q: 'What is the zero problem in AI?', a: 'It is when a category has no examples in the training data, so the model cannot recognise it. A sorter trained on kangaroos and koalas but no wallabies will label every wallaby as a kangaroo or a koala.' },
      { q: 'What age can children start learning about AI?', a: 'From about six with sorting and noticing activities, and from about eight with hands-on model building. Typed Python AI projects usually suit children from about nine.' },
      { q: 'Are AI chatbots allowed for children?', a: 'It depends on the provider. Anthropic\'s consumer terms require users to be at least 18, and Google\'s help page says Gemini Apps with a Google AI plan requires users to be 13 or over in most countries. Always check current terms.' },
      { q: 'Does my child need an AI account for your courses?', a: 'No. Our children\'s AI courses use age-appropriate tools and programs the children write themselves, with no adult chatbot account.' },
      { q: 'Does the Australian Curriculum cover AI?', a: 'Yes. The Australian Curriculum v9 Digital Technologies elaborations include machine learning, training data issues such as the zero problem, bias and responsible use of AI tools.' },
      { q: 'Will learning AI help my child at school?', a: 'It prepares them for the AI ideas in the Digital Technologies curriculum and builds the habit of checking information. We do not promise better marks.' },
      { q: 'Does my child need to know how to code?', a: 'Not to start. Coding becomes useful for building real AI projects, so our courses lead naturally into Scratch and Python.' },
      { q: 'How is this different from your Python AI course?', a: 'This page helps you choose an AI course. The Python AI course is one of the options, for children ready to type code and build models.' },
      { q: 'What does it cost?', a: 'The first lesson is free and no card is needed. Monthly fees for groups and private lessons are set out in the fees section further up.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More on this site',
    h2: 'Related pages',
    lede: 'Hands-on AI, AI for teenagers, and our Australian guides.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'The full list of our Australian guides.' },
      { href: '/python-ai-course-for-kids-australia', label: 'Python AI course for kids', p: 'Building small models in Python.' },
      { href: '/ai-classes-for-teens-australia', label: 'AI classes for teens', p: 'Where teenagers meet the big AI tools.' },
      { href: '/ai-and-machine-learning-classes-in-australia', label: 'AI and machine learning in Australia', p: 'Machine learning for secondary students and adults.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Age rules for popular AI tools, with sources.' },
      { href: '/online-coding-classes-for-kids-australia', label: 'Online coding classes for kids', p: 'How live lessons run in Australia.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Share your details and choose a time for a call. In the trial lesson your child sorts, trains and tests something small with a teacher, and you hear honestly whether an AI course suits them now.',
    readFirst: 'You can also read <a class="ag-inline-link" href="/how-we-teach">how we run a lesson</a> or look through <a class="ag-inline-link" href="/courses">every course by age</a> first.',
    note: 'WhatsApp is the quickest route from an Australian mobile. The +91 number reaches our team in India; we have no office in Australia.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'AI for young learners', links: [
        { href: '/python-ai-course-for-kids-australia', label: 'Python AI course for kids' },
        { href: '/ai-classes-for-teens-australia', label: 'AI classes for teens' },
        { href: '/ai-tools-age-guide', label: 'AI tool age guide' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online coding for kids' },
        { href: '/coding-games-for-kids-australia', label: 'Coding games for kids' },
        { href: '/coding-classes-cost-australia', label: 'What coding classes cost' }
      ] }
    ],
    bottomRight: 'It cannot recognise what it has never seen'
  },

  personalityCss: `
.ag-root.ag-akau .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-akau .ag-capsule { border-left-width: 4px; border-radius: 10px; }
.ag-root.ag-akau .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-akau .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-akau .ag-band-head h3 { letter-spacing: 0.004em; }
.ag-root.ag-akau .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, Years 7 to 10 (introduced earlier in simpler form). ACARA, Australian Curriculum v9, Technologies: Digital Technologies curriculum content 7-10 (Word download): AC9TDI10P01 elaboration "considering how training data issues such as the zero problem dictate the output from predictive models; for example, a model with many examples of horses and no zebras in its training data is likely to classify all zebras as horses"; AC9TDI8P01 elaboration "ensuring that the data used to train an AI model minimises any potential biases in its output and is representative of the target audience".',
    localProject: 'The zero problem in an Australian example: a picture sorter trained on many kangaroos and koalas and no wallabies can only answer kangaroo or koala, so every wallaby (and wombat) it is shown is mislabelled; fixes are adding examples, an "unsure" answer for low confidence and testing on unseen examples (our example, following ACARA\'s horses-and-zebras pattern). Lesson family: the zero problem.',
    requiredMentions: ['AC9TDI10P01', 'AC9TDI8P01', 'zero problem', 'a model with many examples of horses and no zebras in its training data is likely to classify all zebras as horses', 'You must be at least 18 years old or the minimum age required to consent to use the Services in your location, whichever is higher', 'To use Gemini Apps with a Google AI plan in most countries, you must be 13', 'ensuring that the data used to train an AI model minimises any potential biases in its output', 'kangaroos and koalas but no wallabies'],
    sources: [
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies curriculum content 7-10: AC9TDI10P01 zero problem elaboration; AC9TDI8P01 training data bias elaboration.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx' },
      { claim: 'Anthropic, Consumer Terms of Service: "You must be at least 18 years old or the minimum age required to consent to use the Services in your location, whichever is higher."', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'Google, Gemini Apps Help, Manage your Google AI plan: "To use Gemini Apps with a Google AI plan in most countries, you must be 13 (or the applicable age in your country) or over."', url: 'https://support.google.com/gemini/answer/14517446' }
    ],
    rejectedClaims: [
      'OpenAI minimum age: its terms page returned 403 to curl\'s default agent and was not circumvented, so it is not quoted.',
      'Google\'s general minimum age for Gemini without a paid plan: only the Google AI plan sentence was read raw, so only that is quoted.',
      'The Australian Framework for Generative AI in Schools: the education.gov.au page did not respond, so it is not quoted.',
      'Any claim that AI courses improve school results: not made.',
      'Promised evening lesson hours: the hour is agreed in the free class (spec decision 7).'
    ]
  }
};
