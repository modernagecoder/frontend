'use strict';
// Harlow (cg- town page, UK cluster Phase 8, towns band A, row 357). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how did 20 metres become 100
// kilometres? Anchors (read raw 28 September 2026, nobelprize.org): Nobel Prize in Physics 2009 press release: "Charles K.
// Kao Standard Telecommunication Laboratories, Harlow, UK"; "With a fiber of purest glass it would be possible to transmit
// light signals over 100 kilometers, compared to only 20 meters for the fibers available in the 1960s." Popular
// information: "after just 20 meters, only 1 percent of the light that had entered the glass fiber remained"; with "George
// A. Hockham. Their goal was that at least 1 percent of the light that entered a glass fiber would remain after it had
// travelled 1 kilometer. In January 1966, Kao presented his conclusions."; "1971, scientists at the Corning Glass Works in
// the USA ... produced a 1 kilometer long optical fiber"; "Today 95 percent of the light remains after having been
// transmitted a full kilometer". Kao's Nobel autobiography: "In 1965, the then young scientist Charles Kao doing an early
// experiment on optical fibers at the Standard Telecommunication Laboratories in Harlow".
// Our arithmetic: loss in decibels = -10 log10(fraction left). 1960s: 20 dB in 20 m = 1,000 dB per km; Kao's goal 20 dB per
// km; today 0.223 dB per km. Distance to 1% left: 20 m; 1 km; 89.8 km. Today's fibre over 100 km: 22.3 dB, 0.59% left.
// Linear misreading of "95% per km" (5% lost per km, nothing left at 20 km) is wrong: percentages multiply, decibels add.
// 1960s fibre over 40 m: 1% of 1% = 0.01%.
// Lesson family: optical link budget in decibels, multiplicative loss vs linear misreading. Screened: link budget,
// attenuation, optical fibre, Kao 0 hits (Drumcondra and Ballymun used decibels for averaging sound; Dorset exponential
// decay as half-lives and underflow).
// Place facts: Nomis Census 2021 TS007A, Harlow E07000073: total 93,328; 0 to 4 6,251 (6.7%; England 5.4%); 5 to 9 6,564
// (7.0%; 5.9%); 30 to 34 7,742 (8.3%; 7.0%); 35 to 39 7,447 (8.0%; 6.7%); 70 to 74 3,406 (3.6%; 5.0%); 75 to 79 2,439
// (2.6%; 3.6%). ONS 2021 BUA Harlow 93,580 (our OA sum inside the district 92,784). OS Open Names: Old Harlow, Church
// Langley, Great Parndon, Potter Street, Netteswell are suburban areas in Harlow district.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HARLOW', label: 'Harlow', blurb: 'Coding and AI classes for Harlow, with a project on how Charles Kao\'s optical fibre work at Harlow turned 20 metres of glass into 100 kilometres.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-harlow',
  code: 'hlw',
  accent: '#1B1B4C',
  accentRationale: 'Harlow: a laboratory-night indigo (12.94:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Harlow',
    eyebrow: 'Harlow, Essex, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Essex' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Essex', href: '/coding-classes-in-essex' },
    { label: 'East of England', href: '/coding-and-ai-classes-in-east-of-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Harlow, England',
  title: 'Coding and AI Classes in Harlow | Vibe Coding and Python, 6 to 67',
  description: 'Online coding, AI, vibe coding and Python classes for Harlow, Old Harlow, Church Langley and Great Parndon learners aged 6 to 67, live and online. First lesson free.',
  ogDescription: 'Live online coding and AI classes for Harlow, and a Python project on how Charles Kao\'s fibre-optic research at Harlow turned 20 metres into 100 kilometres.',
  twitterDescription: 'Harlow coding, AI, vibe coding and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Harlow',
    description: 'Online coding, AI, vibe coding, Python and mathematics for children, teenagers and adults in Harlow, taught live with thinking skills first.'
  },

  h1: 'Coding and AI classes in Harlow',
  capsuleQ: 'Where can Harlow learners find the best coding and AI classes?',
  capsule: 'Harlow district had 93,328 residents at the 2021 census, and the ONS gives 93,580 for the Harlow built-up area, which reaches a little past the district line. It is a young-family town: children under 10 and adults in their thirties are well above the England share, and people over 70 well below it. Whether home is Old Harlow, Church Langley, Great Parndon or Potter Street, a six-year-old or a sixty-seven-year-old can learn coding, AI, vibe coding, Python and maths with us over live video, taught by tutors in India either privately or with five to ten classmates working at the same stage. Every course starts from how to think, so learners who use AI also understand it. Your trial costs nothing, and staying on means USD 100 monthly for a group seat or USD 150 monthly for one-to-one teaching.',
  lead: 'Every message, video call and AI chatbot reply you receive probably travels part of its way as light in a glass fibre, and part of that story happened in Harlow. The Nobel Prize in Physics for 2009 went in part to Charles K. Kao of "Standard Telecommunication Laboratories, Harlow, UK". The Nobel Foundation explains that in the 1960s, "after just 20 meters, only 1 percent of the light" entering a glass fibre remained. Kao and George Hockham set a goal of 1 percent after a whole kilometre, and today 95 percent survives each kilometre. Turning those three sentences into distances is a perfect first lesson in thinking with numbers, and the most common mistake is exactly the one an unchecked AI answer can make too.',
  wa: 'Hello Modern Age Coders, please could we book a free coding or AI lesson for a learner in Harlow?',

  picks: {
    eyebrow: 'Harlow course picks',
    h2: 'Thinking, vibe coding and AI courses for Harlow',
    intro: 'Age and curiosity are the surest guides. There is always a free live lesson first, and no payment card is asked for.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: patterns, logic and number sense before screens.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games and simple apps built by describing them to AI, then testing them.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python, web and AI projects for teenagers, with the fibre project inside.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Language models, retrieval and AI agents, explained and built in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Harlow district',
      h2: 'A town of young families',
      intro: 'Six 2021 census age bands for Harlow from Nomis, each beside England.',
      body: [
        { kind: 'table', caption: 'Harlow district and England, six age bands (TS007A, 2021)', head: ['Age band', 'Harlow residents', 'Harlow share', 'England share'], rows: [
          ['0 to 4', '6,251', '6.7%', '5.4%'],
          ['5 to 9', '6,564', '7.0%', '5.9%'],
          ['30 to 34', '7,742', '8.3%', '7.0%'],
          ['35 to 39', '7,447', '8.0%', '6.7%'],
          ['70 to 74', '3,406', '3.6%', '5.0%'],
          ['75 to 79', '2,439', '2.6%', '3.6%']
        ] },
        { kind: 'p', text: 'Adults in their thirties and children under ten both sit more than a point above England, the pattern of a town where many families are raising young children. The Ordnance Survey lists Old Harlow, Church Langley, Great Parndon, Potter Street and Netteswell among the parts of the district, and the ONS counts the whole town as one built-up area. Harlow schools teach the national curriculum for England; send us the term dates and lessons will stay out of the holidays.' },
        { kind: 'callout', h3: 'County, region and how we teach', p: 'For the county see <a class="cg-inline-link" href="/coding-classes-in-essex">Essex</a>, and for the region <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England</a>. Our reasons for teaching thinking before AI tools are on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Harlow project',
      h2: 'From 20 metres to 100 kilometres of glass',
      intro: 'Turn three percentages into losses and distances, and learn why percentages multiply.',
      body: [
        { kind: 'p', text: 'The learner starts with the three facts from the Nobel Foundation. 1960s fibre: 1 percent of the light left after 20 metres. Kao and Hockham\'s goal: 1 percent left after 1 kilometre. Today: 95 percent left after each kilometre. The first attempt at today\'s fibre goes wrong in a very common way. "95 percent left means 5 percent lost per kilometre, so after 20 kilometres nothing is left." That is linear thinking, and it is false. Each kilometre keeps 95 percent of whatever arrived, so after two kilometres 0.95 times 0.95 remains, and the light never quite reaches zero.' },
        { kind: 'table', caption: 'Fibre loss in decibels from the Nobel Foundation\'s figures, our Python arithmetic, 28 September 2026', head: ['Fibre', 'Light left', 'Loss per kilometre', 'Distance until 1% is left'], rows: [
          ['1960s glass fibre', '1% after 20 m', '1,000 decibels', '20 metres'],
          ['Kao and Hockham\'s goal (1966)', '1% after 1 km', '20 decibels', '1 kilometre'],
          ['Fibre today', '95% after 1 km', '0.223 decibels', 'About 89.8 kilometres'],
          ['Today, over 100 km', '0.95 multiplied by itself 100 times', '22.3 decibels in total', 'About 0.59% arrives']
        ] },
        { kind: 'p', text: 'Engineers avoid the trap by using decibels. The loss in decibels is minus ten times the logarithm of the fraction left, so 1 percent left is a loss of 20 decibels and 95 percent left is about 0.223. The great advantage is that decibels add: a 100 kilometre fibre at 0.223 decibels per kilometre loses 22.3 decibels, which is about 0.59 percent of the light arriving. Adding up losses like this for a whole link, fibre plus joints plus connectors, is called a link budget. It also shows how extreme the 1960s glass was: two 20 metre lengths in a row leave 1 percent of 1 percent, just 0.01 percent.' },
        { kind: 'p', text: 'The final check ties the numbers back to the press release, which says purest glass could carry signals "over 100 kilometers, compared to only 20 meters for the fibers available in the 1960s." Using the same rule, 1 percent left, the learner\'s program gives 20 metres for the old glass and about 90 kilometres for today\'s, the same scale as the Nobel Foundation\'s words. A figure calculated independently that agrees with a published statement is worth far more than one simply copied, and that habit of checking is exactly what we teach alongside AI tools.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Fold a sheet in half again and again and see why halving never reaches zero.' },
          { h3: 'Ages 11 to 15', p: 'Multiply 0.95 by itself in a Python loop and find when it drops below 1%.' },
          { h3: 'Ages 15 and up', p: 'Use logarithms to convert to decibels and build a full link budget.' }
        ] },
        { kind: 'callout', h3: 'Nobel Foundation facts, our arithmetic', p: 'The quotations and the three light-loss figures come from the Nobel Prize in Physics 2009 press release and popular information on nobelprize.org. The decibel conversions and distances are our own calculation.' }
      ]
    },
    {
      id: 'ai', tint: 'deep', eyebrow: 'Vibe coding and AI agents',
      h2: 'Why thinking with numbers matters when AI writes the code',
      intro: 'Vibe coding is fast; checking the answer is still the learner\'s job.',
      body: [
        { kind: 'table', caption: 'Charles Kao and the Harlow laboratory, from nobelprize.org', head: ['Detail', 'From the source'], rows: [
          ['Affiliation at the Nobel award', 'Standard Telecommunication Laboratories, Harlow, UK (and the Chinese University of Hong Kong)'],
          ['An early experiment', 'In 1965, on optical fibres at the Harlow laboratories'],
          ['The 1966 result', 'Kao presented his conclusions in January 1966, with George A. Hockham'],
          ['The breakthrough fibre', 'Corning Glass Works produced a 1 kilometre fibre in 1971'],
          ['Our link budget', 'Today\'s fibre loses about 0.223 decibels per kilometre']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to vibe code a fibre loss calculator and it may well use the linear rule, 5 percent off per kilometre, and produce a neat program that is simply wrong. A learner who has worked the numbers by hand spots it at once. That is the heart of our approach to vibe coding: describe the program, let the AI draft it, then predict, read and test. Older teenagers and adults take the same habit into AI agents, where a language model decides which tools to call and what to do with the results; we build these in Python, and Copilot Studio agent work is one-to-one only. There is more on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and the <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents course for UK students</a>.' },
        { kind: 'p', text: 'The Nobel Foundation and the census office have no tie to Modern Age Coders. We quote their words and statistics; the working-out, and any error in it, is ours alone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From paper folding to link budgets',
    intro: 'School years are a starting guess; the free lesson makes the final call.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Patterns, logic and number sense through puzzles.', courses: ['problem-solving-and-computational-thinking-for-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Scratch games and simple AI-built apps, always tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Python, maths and AI', p: 'Logarithms, data and AI projects beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'AI and agents', p: 'Language models and AI agents, built in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and arithmetic',
    h2: 'Would an AI catch the linear mistake?',
    intro: 'Sometimes; a learner who understands the maths always will.',
    p1: 'A chatbot asked how far light goes in fibre that keeps 95 percent per kilometre might answer 20 kilometres, the linear mistake, in a confident sentence.',
    p2: 'A Harlow learner who has multiplied the losses and converted them to decibels knows the answer is closer to 90 kilometres, and knows why.',
    closer: 'Harlow teenagers who can test an AI\'s sums against their own will stay in charge of the tools they use, which is why learning to code still pays off in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Old Harlow to Church Langley, online',
    intro: 'Any home in the district with a computer and broadband is ready for lessons.',
    cells: [
      { h3: 'Hands on the code', p: 'The learner writes and prompts everything; the tutor watches over screen share and steers with questions.' },
      { h3: 'Right level from day one', p: 'Year 5 or Year 11, the free lesson decides the starting topic, and the exam board is noted.' },
      { h3: 'Free first lesson', p: 'A whole lesson with no charge, followed by a clear suggestion.' },
      { h3: 'Level-matched groups', p: 'Five to ten UK learners at the same stage.' },
      { h3: 'Two a week', p: 'School holidays are lesson-free.' },
      { h3: 'Fixed UK time', p: 'Tutors adjust for the clock changes, so your hour holds.' }
    ],
    spec: { title: 'Why the classes are online', p: 'Five Harlow learners at the same level, free at the same hour, rarely share a street. Online, each joins the class that suits them.' }
  },

  fees: {
    h2: 'Harlow fees',
    intro: 'Harlow families pay the standard rate we charge in every country outside India.',
    first: 'One whole lesson at no cost, then a course suggestion.',
    group: 'Around eight live small-group lessons each month.',
    private: 'Around eight live one-to-one lessons each month.',
    closer: 'Fees are charged in US dollars, not sterling. We only start charging after the free session has picked a course and a regular slot. Term breaks, absences and moves between group and private study are all set out under pricing.'
  },

  reviewsH2: 'Google reviews from families in Essex and across the UK',

  book: {
    h2: 'Book a free Harlow lesson',
    intro: 'Mention the learner\'s age or school year and a hobby they love. A first lesson might be number puzzles, a Scratch game built with AI help, a first Python loop, or the fibre calculator.',
    success: 'Thank you. Your Harlow request has reached us.'
  },

  faq: {
    h2: 'Harlow questions',
    intro: 'The fibre project, vibe coding and practical details.',
    items: [
      { q: 'What is the population of Harlow?', a: 'The 2021 census counted 93,328 in Harlow district; the ONS gives 93,580 for the Harlow built-up area.' },
      { q: 'Can Harlow learners take coding and AI classes online?', a: 'Yes. Every lesson happens on live video, so families anywhere from Netteswell to Potter Street can take part.' },
      { q: 'Do you teach vibe coding in Harlow?', a: 'Yes, for kids, teenagers and adults, with the learner predicting, reading and testing whatever the AI writes.' },
      { q: 'Do you teach AI agents?', a: 'Yes, to older teenagers and adults who know some Python; Copilot Studio agents are taught one-to-one only.' },
      { q: 'What was Charles Kao\'s connection with Harlow?', a: 'The Nobel Foundation lists his affiliation as Standard Telecommunication Laboratories, Harlow, where he researched glass fibres in the 1960s.' },
      { q: 'Are lessons in person?', a: 'No. All lessons are online.' },
      { q: 'Will you support my GCSE or A level studies?', a: 'Gladly, in computer science and maths. The aim is genuine understanding, never a guaranteed grade.' },
      { q: 'What ages do you teach?', a: 'From 6 to 67.' },
      { q: 'How much do lessons cost?', a: 'Nothing for the opening lesson; then USD 100 per month to learn in a group, or USD 150 per month on your own with a tutor.' },
      { q: 'Are there lessons in the school holidays?', a: 'No; send us your dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other pages near Harlow',
    html: 'Close by, <a class="cg-inline-link" href="/best-coding-class-in-chelmsford">Chelmsford</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-basildon">Basildon</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-stevenage">Stevenage</a> have pages too. See <a class="cg-inline-link" href="/coding-classes-in-essex">Essex</a> for the county, <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England</a> for the region, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> for all pages.',
    waLabel: 'Chat to us on WhatsApp'
  },

  footerHeading: 'Harlow and Essex',
  footerPlaces: [
    { href: '/coding-classes-in-essex', label: 'Essex' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-hlw .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-hlw .cg-hero h1 { font-weight: 790; letter-spacing: -0.028em; line-height: 1.03; }
.cg-root.cg-hlw .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-hlw .cg-eyebrow { letter-spacing: 0.21em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hlw .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.02em; }
.cg-root.cg-hlw .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-hlw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hlw .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-hlw .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-hlw .cg-callout { border-left-width: 5px; border-radius: 0 11px 11px 0; }
`,

  dossier: {
    curriculumAuthority: 'Harlow (E07000073). Nomis Census 2021 TS007A: total 93,328; 0 to 4 6,251 (6.7%, England 5.4%); 5 to 9 6,564 (7.0%, 5.9%); 30 to 34 7,742 (8.3%, 7.0%); 35 to 39 7,447 (8.0%, 6.7%); 70 to 74 3,406 (3.6%, 5.0%); 75 to 79 2,439 (2.6%, 3.6%). ONS 2021 BUA Harlow 93,580. OS Open Names: Old Harlow, Church Langley, Great Parndon, Potter Street, Netteswell. nobelprize.org, Physics 2009: Kao at "Standard Telecommunication Laboratories, Harlow, UK"; "after just 20 meters, only 1 percent of the light"; goal "1 percent ... after it had travelled 1 kilometer"; "Today 95 percent of the light remains after having been transmitted a full kilometer"; "100 kilometers, compared to only 20 meters"; Corning 1971; Hockham; January 1966.',
    localProject: 'Loss dB = -10 log10(fraction). 1960s 1,000 dB/km (1% at 20 m); Kao goal 20 dB/km (1% at 1 km); today 0.223 dB/km (1% at 89.8 km); today over 100 km 22.3 dB, 0.59% left; linear misreading gives zero at 20 km; 1960s over 40 m 0.01%. Lesson family: optical link budget in decibels, multiplicative loss vs linear misreading.',
    requiredMentions: [
      '93,328',
      '93,580',
      'Old Harlow',
      'Church Langley',
      'Great Parndon',
      'Potter Street',
      'Standard Telecommunication Laboratories',
      'Charles K. Kao',
      'Hockham',
      'link budget'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Harlow and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Nobel Prize in Physics 2009, press release.', url: 'https://www.nobelprize.org/prizes/physics/2009/press-release/' },
      { claim: 'Nobel Prize in Physics 2009, popular information.', url: 'https://www.nobelprize.org/prizes/physics/2009/popular-information/' }
    ],
    rejectedClaims: [
      'Blue plaques, memorials or the present use of the laboratory site: not read from a source; not claimed.',
      'Harlow new town history: not read from a source; not claimed.',
      'Kao\'s personal life details beyond the Nobel pages: not used.',
      'Modern fibre loss figures other than the Nobel Foundation\'s 95 percent: not claimed.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
