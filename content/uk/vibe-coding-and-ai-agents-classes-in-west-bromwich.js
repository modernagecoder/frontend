'use strict';
// West Bromwich (cg- town page, UK cluster Phase 8, towns band A, row 354). Keyword slug per the owner's 2026-09-28
// instruction ("vibe coding ai agents how to think programme"): first page in the vibe-coding-and-ai-agents-classes-in-*
// rotation. Spine: can you trust an AI agent you vibe coded? Anchor data (read 28 September 2026): Nomis Census 2021 TS001
// and TS007A for Sandwell E08000028 (total 341,832); ONS 2021 built-up areas (BUA) with their published populations, and the
// ONS output-area (OA) to BUA lookup used to count residents inside Sandwell (scratchpad p7/county.py, --min 1000).
// BUAs touching Sandwell (published | our OA sum inside Sandwell): Birmingham 1,121,375 | 3,156; West Bromwich 103,110 |
// 102,822; Halesowen 60,110 | 586; Smethwick 56,340 | 56,343; Tipton 47,200 | 47,202; Oldbury (Sandwell) 45,180 | 45,188;
// Rowley Regis 39,050 | 38,394; Coseley 25,205 | 180; Darlaston 21,540 | 1,882; Wednesbury 20,315 | 20,321; Cradley Heath
// 18,820 | 18,819; Blackheath 6,950 | 6,950. Sum of published figures 1,565,195 (4.58 times the borough); sum of inside
// counts 341,843 = our OA total, 11 more than the published 341,832 (never report a sum of parts as the total).
// Lesson family: tool-using agent design (tool calls, spatial containment of straddling areas, a total-bound guardrail,
// quoting the published total). Screened: tool call, tool-using, guardrail, straddl, boundary overlap, vibe, hallucinat 0
// hits; "agent" hits elsewhere are agent-based simulation or door pages; Merseyside owns acceptance tests.
// Place facts: Nomis Census 2021 TS007A, Sandwell: 0 to 4 22,176 (6.5%; England 5.4%); 5 to 9 24,566 (7.2%; 5.9%); 10 to
// 14 24,356 (7.1%; 6.0%); 15 to 19 22,002 (6.4%; 5.7%); 65 to 69 13,857 (4.1%; 4.9%); 70 to 74 12,657 (3.7%; 5.0%).
// Offer facts: vibe coding courses (kids 8 to 12, teens, college) and agents courses exist in content/courses/data;
// Copilot Studio agents courses are one to one only (per the UK agents door); no Gemini price quoted.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WEST BROMWICH', label: 'West Bromwich', blurb: 'Vibe coding and AI agents classes for West Bromwich, with a project that builds a small AI agent and catches it counting Birmingham as part of Sandwell.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-west-bromwich',
  code: 'wbr',
  accent: '#6B4030',
  accentRationale: 'West Bromwich: a Black Country iron brown (7.05:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'West Bromwich',
    eyebrow: 'West Bromwich, Sandwell, West Midlands, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'West Midlands', href: '/coding-classes-in-the-west-midlands' },
    { label: 'Birmingham', href: '/coding-classes-in-birmingham' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'West Bromwich, England',
  title: 'Vibe Coding and AI Agents Classes in West Bromwich | 6 to 67',
  description: 'Live online vibe coding, AI agents, Python and coding classes for West Bromwich, Smethwick, Tipton and Oldbury learners aged 6 to 67. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for West Bromwich, taught live online, with a project where learners build an AI agent and catch its mistakes.',
  twitterDescription: 'West Bromwich vibe coding, AI agents and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for West Bromwich',
    description: 'Online vibe coding, AI agents, Python, coding and mathematics for children, teenagers and adults in West Bromwich and across Sandwell, taught live with thinking skills first.'
  },

  h1: 'Vibe coding and AI agents classes in West Bromwich',
  capsuleQ: 'Where can West Bromwich learners find the best vibe coding and AI agents classes?',
  capsule: 'Sandwell, the borough that includes West Bromwich, counted 341,832 people at the 2021 census, and the ONS gives 103,110 for the West Bromwich built-up area, with Smethwick, Tipton and Oldbury next in size. Children and teenagers make up a clearly bigger share than across England. From Tipton to Cradley Heath, anyone aged 6 to 67 can learn vibe coding, AI agents, Python, coding and maths in live video lessons with our India-based tutors, taught solo or alongside five to ten classmates of similar ability. Vibe coding means describing what you want to an AI and letting it write the code; we teach it the careful way, so the learner plans first and checks every line. The first lesson is free. Carrying on after that is USD 100 monthly for a shared class, or USD 150 monthly for private tuition.',
  lead: 'Vibe coding is the name people now use for building software by describing it to an AI in plain English and accepting the code that comes back. It is fast, it is fun, and it is exactly how many young people meet programming today. An AI agent goes one step further: instead of only writing text, it decides which tools to use, calls them and acts on the results. Our West Bromwich project puts both ideas to work on real local data, the census counts for Sandwell. A learner vibe codes a small agent that answers questions about the borough. Its first answer is more than four and a half times too big, and finding out why teaches more about AI than any tutorial.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents lesson for a West Bromwich learner.',

  picks: {
    eyebrow: 'West Bromwich course picks',
    h2: 'Vibe coding, AI agents and thinking courses',
    intro: 'Start from age and interest. Every course begins with a free live lesson, and booking needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Our how-to-think programme: logic, patterns and step-by-step plans before any AI.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for kids: Scratch games first, then building small apps by talking to AI.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Vibe coding for teenagers with Python, web and AI projects, home of the agent project.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Large language models, retrieval and AI agents, built in Python and properly tested.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Sandwell',
      h2: 'A young borough compared with England',
      intro: 'Census figures are published for Sandwell as a whole; six age bands from Nomis, beside England.',
      body: [
        { kind: 'table', caption: 'Sandwell and England, six age bands (TS007A, 2021)', head: ['Age band', 'Sandwell people', 'Sandwell share', 'England share'], rows: [
          ['0 to 4', '22,176', '6.5%', '5.4%'],
          ['5 to 9', '24,566', '7.2%', '5.9%'],
          ['10 to 14', '24,356', '7.1%', '6.0%'],
          ['15 to 19', '22,002', '6.4%', '5.7%'],
          ['65 to 69', '13,857', '4.1%', '4.9%'],
          ['70 to 74', '12,657', '3.7%', '5.0%']
        ] },
        { kind: 'p', text: 'Every band from birth to 19 is above the England share, the 5 to 14 bands by more than a full point, while people in their late sixties and early seventies are well below it. Besides West Bromwich, the ONS lists Smethwick, Tipton, Oldbury, Rowley Regis, Wednesbury and Cradley Heath among the borough\'s built-up areas. Schools here follow the national curriculum for England; send us your term dates and lessons will fit around them.' },
        { kind: 'callout', h3: 'Think first, then use AI', p: 'Our <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a> page explains the approach behind every lesson, and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> shows how we teach vibe coding without losing real skill.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The West Bromwich project',
      h2: 'Vibe code an AI agent, then audit it',
      intro: 'Describe an agent in plain English, let AI write it, and find out what it gets wrong about Sandwell.',
      body: [
        { kind: 'p', text: 'The learner asks an AI assistant for a small Python agent with three tools. One looks up the published population of any ONS built-up area. One counts how many residents of an area actually live inside Sandwell, using the official lookup that places every small census area in a built-up area. The third returns the borough total, 341,832. The agent reads a question, decides which tool calls to make, and writes an answer. The code arrives in seconds and runs first time. Then the learner asks it how many people live in the built-up areas of Sandwell, and it replies 1,565,195.' },
        { kind: 'table', caption: 'Built-up areas that touch Sandwell: ONS published population against residents inside Sandwell, our Python run, 28 September 2026', head: ['Built-up area', 'Published population', 'Living inside Sandwell', 'Mostly inside?'], rows: [
          ['Birmingham', '1,121,375', '3,156', 'No'],
          ['West Bromwich', '103,110', '102,822', 'Yes'],
          ['Halesowen', '60,110', '586', 'No'],
          ['Smethwick', '56,340', '56,343', 'Yes'],
          ['Tipton', '47,200', '47,202', 'Yes'],
          ['Coseley', '25,205', '180', 'No'],
          ['Darlaston', '21,540', '1,882', 'No']
        ] },
        { kind: 'p', text: 'The answer is 4.58 times the whole borough, so something is badly wrong, and the tool call log shows what. The agent added up the published population of every built-up area that touches Sandwell, including all 1,121,375 people of the Birmingham built-up area because 3,156 of them happen to live on the Sandwell side of the line. Halesowen, Coseley and Darlaston crept in the same way. The code did exactly what the plain-English request allowed. It was the request that was vague, and the agent never stopped to ask. This is the central lesson of vibe coding: the AI writes what you say, not what you mean.' },
        { kind: 'p', text: 'The fix is to count only the residents inside the borough for each area. Adding those up gives 341,843, which looks right but is 11 more than the published total of 341,832, because official small-area counts are adjusted for privacy and never add up exactly. So the learner adds two guardrails. First, no answer about Sandwell may exceed the published borough total. Second, whenever a total is asked for, the agent quotes the published figure and shows the sum of parts only as a check. Finally, every answer prints its tool calls, so a human can see how it was reached. That is what building AI agents responsibly looks like.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Write step-by-step instructions for a friend to follow, then find where they could be misread.' },
          { h3: 'Ages 11 to 15', p: 'Vibe code a small question-answering program and test it with questions you already know the answer to.' },
          { h3: 'Ages 15 and up', p: 'Build the three-tool agent, log its tool calls and add guardrails that catch impossible answers.' }
        ] },
        { kind: 'callout', h3: 'Census data, our agent', p: 'Population figures come from the 2021 census via Nomis and the ONS built-up area and output area files. The agent, its tool calls and every sum on this page are our own work.' }
      ]
    },
    {
      id: 'vibe', tint: 'deep', eyebrow: 'Vibe coding and AI agents',
      h2: 'How we teach vibe coding and AI agents',
      intro: 'AI can write the code. Our lessons make sure the learner can think, check and explain it.',
      body: [
        { kind: 'table', caption: 'What the AI does and what the learner still has to do', head: ['Step', 'The AI can', 'The learner must'], rows: [
          ['Planning', 'Suggest a structure', 'Decide what the program is for and what a right answer looks like'],
          ['Writing code', 'Produce working code fast', 'Read it, and explain each part in their own words'],
          ['Testing', 'Write tests if asked', 'Choose questions with known answers, such as the borough total'],
          ['Agents and tools', 'Call tools and combine results', 'Check which tools were called and why'],
          ['Mistakes', 'Repeat a vague request exactly', 'Spot impossible results, like 1,565,195 people in Sandwell']
        ] },
        { kind: 'p', text: 'Younger learners start with our how-to-think programme, logic puzzles, patterns and plans written in plain words, before they ever prompt an AI. Teenagers then use vibe coding for real projects, games, websites and small AI tools, always predicting what the code should do before they run it. Older teenagers and adults can go on to build AI agents that use tools and data, including on Microsoft Copilot Studio, which we teach one-to-one only. Our <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents course for UK students</a> and <a class="cg-inline-link" href="/vibe-coding-for-teens">vibe coding for teens</a> pages go into more detail.' },
        { kind: 'p', text: 'The Office for National Statistics and Nomis are not linked to Modern Age Coders in any way. We credit their statistics; the agent we built, its sums and any errors belong to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From thinking skills to building AI agents',
    intro: 'School year is a first guess; the free lesson finds the right starting point.',
    cols: [
      { band: 'Years 2 to 7', h3: 'Learn to think', p: 'Logic, patterns and step-by-step problem solving, the base for everything else.', courses: ['problem-solving-and-computational-thinking-for-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Scratch games, then small apps built by talking to AI.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Vibe coding and AI', p: 'Python, web and AI projects with testing beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'AI agents', p: 'Language models, retrieval and agents for work and study.', courses: ['complete-generative-ai-masterclass-college', 'vibe-coding-for-college-fullstack-ai-dsa-career-course'] }
    ]
  },

  ai: {
    eyebrow: 'AI agents and trust',
    h2: 'Should you trust an AI agent you vibe coded?',
    intro: 'Only as far as you have tested it.',
    p1: 'An AI agent that answers confidently is not the same as one that answers correctly. The West Bromwich agent ran without a single error and still claimed more than one and a half million people lived in a borough of 341,832.',
    p2: 'A learner who has watched that happen, traced the tool calls and added a guardrail knows how to use AI agents without being fooled by them.',
    closer: 'West Bromwich teenagers who can test and question an AI agent will be ahead of those who only use one, and in 2026 that makes learning to code more worthwhile than ever.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Smethwick to Wednesbury, all live online',
    intro: 'Any home in Sandwell with a computer and a reliable connection can join.',
    cells: [
      { h3: 'The learner drives', p: 'Students write, prompt and test the code themselves; the tutor follows the shared screen and asks questions.' },
      { h3: 'Level before year group', p: 'Our free trial, more than the school year, sets the first topic for anyone from Year 4 to Year 12, keeping their exam board in view.' },
      { h3: 'A free first lesson', p: 'A full lesson at no cost, ending with a clear course suggestion.' },
      { h3: 'Classes at one level', p: 'Groups of five to ten UK learners at the same stage.' },
      { h3: 'Twice a week', p: 'School holidays stay free of lessons.' },
      { h3: 'A fixed UK time', p: 'Our tutors follow the British clock changes, so your slot holds.' }
    ],
    spec: { title: 'Why small groups work online', p: 'Five Sandwell learners at the same level, all free at one hour, seldom live on the same street. Online, each can join a class that fits.' }
  },

  fees: {
    h2: 'West Bromwich fees',
    intro: 'West Bromwich pays the single international rate we charge everywhere outside India.',
    first: 'A complete lesson free of charge, followed by a course suggestion.',
    group: 'About eight live group lessons a month.',
    private: 'About eight live one-to-one lessons a month; Copilot Studio agents courses run one-to-one only.',
    closer: 'Fees are in US dollars, not sterling. Billing only begins once the trial settles a course and a regular weekly time; our pricing page explains holiday breaks, absences and switching format.'
  },

  reviewsH2: 'Google reviews from Black Country and UK families',

  book: {
    h2: 'Book a free West Bromwich lesson',
    intro: 'Share how old the learner is, or their year group, plus something they love. A first lesson might be a logic puzzle session, a vibe-coded Scratch game, a first Python program, or a tiny AI agent with one tool.',
    success: 'Thank you. Your West Bromwich request has arrived.'
  },

  faq: {
    h2: 'West Bromwich questions',
    intro: 'Vibe coding, AI agents, local figures and lesson basics.',
    items: [
      { q: 'What is the population of West Bromwich?', a: 'The ONS gives 103,110 for the West Bromwich built-up area at the 2021 census; Sandwell as a whole had 341,832.' },
      { q: 'Do you teach vibe coding in West Bromwich?', a: 'Yes, live online. Kids, teenagers and adults learn to build with AI while planning first and checking every line of code.' },
      { q: 'What is vibe coding?', a: 'Building software by describing it to an AI in plain English and using the code it writes; we teach learners to test and understand that code.' },
      { q: 'Can my child learn to build AI agents?', a: 'Older teenagers can, after solid Python; younger learners start with our how-to-think programme and vibe coding for kids.' },
      { q: 'What is the AI agent project?', a: 'Learners vibe code a three-tool agent that answers questions about Sandwell, catch it counting Birmingham as part of the borough, and add guardrails.' },
      { q: 'Are the lessons in person?', a: 'No. All lessons are live and online.' },
      { q: 'Is there support for GCSE and A level students?', a: 'Yes, for computer science and maths, focused on understanding the ideas rather than any promised grade.' },
      { q: 'What ages do you teach?', a: 'From 6 to 67.' },
      { q: 'How much do lessons cost?', a: 'Your trial lesson is free. Group study is then USD 100 per month and one-to-one study USD 150 per month.' },
      { q: 'Do lessons stop for school holidays?', a: 'Yes; just tell us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages across the West Midlands',
    html: 'Nearby, <a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham</a>, <a class="cg-inline-link" href="/best-coding-class-in-wolverhampton">Wolverhampton</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-solihull">Solihull</a> have their own pages. The county is on <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">West Midlands</a>, the region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">West Midlands region</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links them all.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'West Bromwich and the West Midlands',
  footerPlaces: [
    { href: '/coding-classes-in-the-west-midlands', label: 'West Midlands' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wbr .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-wbr .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-wbr .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-wbr .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wbr .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.02em; }
.cg-root.cg-wbr .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-wbr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wbr .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-wbr .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-wbr .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Sandwell (E08000028). Nomis Census 2021 TS001 total 341,832; TS007A: 0 to 4 22,176 (6.5%, England 5.4%); 5 to 9 24,566 (7.2%, 5.9%); 10 to 14 24,356 (7.1%, 6.0%); 15 to 19 22,002 (6.4%, 5.7%); 65 to 69 13,857 (4.1%, 4.9%); 70 to 74 12,657 (3.7%, 5.0%). ONS 2021 BUAs touching Sandwell (published | residents inside Sandwell by OA lookup): Birmingham 1,121,375 | 3,156; West Bromwich 103,110 | 102,822; Halesowen 60,110 | 586; Smethwick 56,340 | 56,343; Tipton 47,200 | 47,202; Oldbury 45,180 | 45,188; Rowley Regis 39,050 | 38,394; Coseley 25,205 | 180; Darlaston 21,540 | 1,882; Wednesbury 20,315 | 20,321; Cradley Heath 18,820 | 18,819; Blackheath 6,950 | 6,950.',
    localProject: 'Vibe-coded three-tool agent (area lookup, inside count, borough total). Naive answer: sum of published figures of every touching BUA = 1,565,195 (4.58 x borough). Correct: inside counts sum to 341,843, 11 above the published 341,832; guardrails: answer <= published total, quote published total, print tool calls. Lesson family: tool-using AI agent design, spatial containment of straddling areas, total-bound guardrail, published total vs sum of parts.',
    requiredMentions: [
      '341,832',
      '103,110',
      'Smethwick',
      'Tipton',
      'Wednesbury',
      'Cradley Heath',
      'Rowley Regis',
      '1,565,195',
      'tool calls',
      'guardrail'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS001 and TS007A, Sandwell and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and output area to built-up area lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Office for National Statistics, built-up areas in England and Wales, Census 2021.', url: 'https://www.ons.gov.uk/' }
    ],
    rejectedClaims: [
      'Who coined "vibe coding" and when: not needed on this page; not claimed.',
      'Football, industrial or canal history of West Bromwich: no readable primary source found; not used.',
      'Diversity or ethnicity figures for Sandwell: identity data excluded by the cluster rules.',
      'Gemini Enterprise agents pricing: a different price row; not quoted.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
