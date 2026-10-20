'use strict';
// AI guidance for schools by state (ag- state data door; US cluster Phase 3, row 55).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources read raw on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/ai-guidance-for-schools-by-state/):
//  - Code.org (2025). 2025 State of AI + CS Education, full report PDF (CC BY-NC-SA 4.0), data finalized Dec. 1, 2025.
//    Summary: "17 out of 50 states have guidance that clarifies CS as fundamental to AI"; "only 17 of the 34 states that
//    have AI guidance emphasize CS"; "4 out of 50 states emphasize AI in their CS standards"; "0 out of 50 states require
//    AI+CS for graduation". Rubric (advocacy.code.org/stateofdigitalfluency/): AI + CS Guidance for Schools = "official
//    guidance endorsed by the state education agency that emphasizes the fundamental role of CS education in AI literacy";
//    in progress if development initiated but unpublished. Toggle "AI + CS Guidance for Schools" read from each of the 51
//    state pages by our script: 17 yes (AL, CA, CO, HI, IN, KY, ME, MA, MT, NC, OH, OK, RI, UT, WV, WI, WY), Iowa in
//    progress, matching the published 17. The "What the report page says" column is our short paraphrase of each state
//    page's AI paragraph; "Not stated" means the page names no state AI guidance. Quoted strings in the body: Ohio "all
//    school districts adopt an AI policy by July 2026"; Tennessee "Senate Bill 1711 requires all public school districts to
//    create AI policies"; Maine toolkit "rooted in foundational computer science and computational thinking"; Delaware AI
//    "encompasses a broad range of computer science disciplines"; Virginia training "for up to 85,000 K-12 educators";
//    Michigan "defines AI as a branch of CS"; Illinois SB 1920 (2025); California SB 1288 (2024).
//  - CodeAI 10 Policies page (revised September 24, 2026): AI education vs AI in education: "References to AI education
//    are intended to describe students learning about AI not the adoption or regulation of AI tools."
// Not used: Maryland's budget figure (a dollar amount; the gate forbids typed dollar figures), gender and race content.
// State department AI guidance pages were not fetched individually; the page cites the report and says so.
// Our own material, labelled: the family question list, the nearest-neighbour Python example and its output
// (apple 5.0, orange 5.0, apple 8.38), the explanation of the scale problem.
// Lesson family: nearest-neighbour classification and feature scaling (how AI works, not how to use a chatbot).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'STATE DATA', blurb: 'State AI guidance for K-12 schools in all 50 states and DC: which states tie AI literacy to computer science, from the 2025 Code.org report.' },
  slug: 'ai-guidance-for-schools-by-state',
  code: 'agsb',
  accent: '#61520F',
  accentRationale: 'AI guidance for schools by state: a dark olive gold, #61520F as allocated, distinct from the other data pages and readable on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'AI guidance for schools by state',
  title: 'AI Guidance for Schools by State: All 50 and DC',
  description: 'Which US states have K-12 AI guidance that treats computer science as the foundation of AI literacy, state by state, from the 2025 report, with what families can ask',
  ogDescription: 'Thirty-four states had AI guidance for schools in the 2025 Code.org report, and 17 said computer science is fundamental to AI literacy. Every state and DC, in one table.',
  twitterDescription: 'State AI guidance for schools, all 50 states and DC, from the 2025 Code.org report.',
  pageName: 'AI Guidance for Schools by State',
  webPageDescription: 'A state-by-state reference to official AI guidance for US K-12 schools, focused on whether each state ties AI literacy to computer science education, with a family question list and a classroom example of how AI works.',
  courseDescription: 'Live online AI literacy and computer science classes for US students, teaching how AI works with age-appropriate tools, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'AI guidance for schools by state',
  navLinks: [
    { href: '#states', label: 'State table' },
    { href: '#seventeen', label: 'The seventeen' },
    { href: '#two-kinds', label: 'Using vs learning' },
    { href: '#ask', label: 'Questions to ask' },
    { href: '#model', label: 'How AI decides' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; K-12 schools &middot; State AI guidance',
  h1: 'AI guidance for schools by state',
  lede: 'Most states have now told their schools something about artificial intelligence. Far fewer have said that students need computer science to understand it. In the 2025 State of AI + CS Education report, 34 states had AI guidance for schools, and 17 of them emphasized computer science as the foundation of AI literacy. This page lists every state and DC with what the report says about its guidance, separates guidance on using AI tools from guidance on learning how AI works, and gives families a short list of questions to ask their own school.',
  secondaryCta: { href: '#states', label: 'Look up your state' },
  wa: 'Hello Modern Age Coders, my child is in a US school and I want them to understand how AI works. Could we book a free first lesson?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students &middot; AI taught from the computer science up',
  spec: [
    ['States with AI guidance', '34, per the report'],
    ['Guidance treating CS as key', '17 states'],
    ['In progress', 'Iowa'],
    ['Data finalized', 'December 1, 2025'],
    ['Our classes', 'Live, age-appropriate'],
    ['Formats', 'Batch or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'According to Code.org (2025), 2025 State of AI + CS Education, 17 states have official school AI guidance that emphasizes computer science as fundamental to AI literacy: Alabama, California, Colorado, Hawaii, Indiana, Kentucky, Maine, Massachusetts, Montana, North Carolina, Ohio, Oklahoma, Rhode Island, Utah, West Virginia, Wisconsin and Wyoming. Iowa was in progress. The report counts 34 states with AI guidance of some kind.',

  picks: {
    eyebrow: 'Learn how AI works',
    h2: 'Three courses that teach AI from the inside',
    lede: 'Age-appropriate courses that explain what AI is and how it learns, rather than only how to prompt it.',
    items: [
      { course: 'ai-literacy-for-kids-course', code: 'AGSB / 01', title: 'AI literacy for kids', note: 'Ages 8 to 14. How AI works, safely and without adult-only tools.' },
      { course: 'python-ai-kids-masterclass', code: 'AGSB / 02', title: 'Python and AI for kids', note: 'Upper elementary and middle school. Small smart projects in real code.' },
      { course: 'ai-ml-masterclass-teens', code: 'AGSB / 03', title: 'AI and machine learning for teens', note: 'Ages 13 to 18. From Python to models they train themselves.' }
    ]
  },

  sections: [
    {
      id: 'states', tint: 'tint', eyebrow: 'Every state and DC',
      h2: 'State AI guidance for schools, state by state',
      lede: 'The middle column is Code.org&rsquo;s policy status. The right column is our short summary of what each state&rsquo;s report page says about AI guidance; "Not stated" means the page does not name any state AI guidance, which is not the same as the state having none.',
      body: [
        { kind: 'table', caption: 'State AI guidance for K-12 schools, from Code.org (2025), 2025 State of AI + CS Education (read 17 October 2026)', head: ['State', 'Guidance treats CS as fundamental to AI', 'What the report page says (our summary)'], rows: [
          ['Alabama', 'Yes', 'State AI policy template recognizes CS as fundamental'],
          ['Alaska', 'No', 'Strategic Framework for AI in K-12 Education; CS role not yet clarified'],
          ['Arizona', 'No', 'State AI guidance describes how CS standards relate to AI literacy'],
          ['Arkansas', 'No', 'Not stated; the state offers an AI course in data science topics'],
          ['California', 'Yes', 'CS a core part of K-12 AI education; an AI Working Group under SB 1288 (2024)'],
          ['Colorado', 'Yes', 'Guidance recommends AI literacy in local graduation requirements'],
          ['Connecticut', 'No', 'Guidance on practice and risks; AI literacy not yet addressed'],
          ['Delaware', 'No', 'Generative AI guidance; CS role not yet clarified'],
          ['District of Columbia', 'No', 'Not stated'],
          ['Florida', 'No', 'Not stated; a K-12 AI Education Task Force defines AI literacy'],
          ['Georgia', 'No', 'Guidance covers educator learning; CS not yet addressed'],
          ['Hawaii', 'Yes', 'Guidance pairs AI literacy with CS education'],
          ['Idaho', 'No', 'Not stated'],
          ['Illinois', 'No', 'SB 1920 (2025) requires statewide AI guidance'],
          ['Indiana', 'Yes', 'Guidance calls for integrating AI and CS'],
          ['Iowa', 'In progress', 'Not stated'],
          ['Kansas', 'No', 'Not stated; course descriptions combine AI and CS'],
          ['Kentucky', 'Yes', 'Guidance places CS at the center of AI literacy'],
          ['Louisiana', 'No', 'House and Board of Education resolutions on AI education'],
          ['Maine', 'Yes', 'AI Guidance Toolkit roots AI understanding in CS'],
          ['Maryland', 'No', 'Not stated; a funded AI needs assessment and task force'],
          ['Massachusetts', 'Yes', 'Guidance aligns AI literacy with state CS standards'],
          ['Michigan', 'No', 'Guidance by Michigan Virtual, endorsed by the department'],
          ['Minnesota', 'No', 'Guidance defines AI literacy; CS role not yet clarified'],
          ['Mississippi', 'No', 'Not stated; a statewide AI task force'],
          ['Missouri', 'No', 'Guidance informed by the state CS Advisory Council'],
          ['Montana', 'Yes', 'Guidance says AI in education needs a foundation including coding'],
          ['Nebraska', 'No', 'Not stated'],
          ['Nevada', 'No', 'Guidance defines AI literacy; CS role not yet clarified'],
          ['New Hampshire', 'No', 'Not stated'],
          ['New Jersey', 'No', 'Not stated; grants for teaching with and about AI'],
          ['New Mexico', 'No', 'Not stated'],
          ['New York', 'No', 'Not stated'],
          ['North Carolina', 'Yes', 'Guidance includes designing AI solutions'],
          ['North Dakota', 'No', 'Not stated'],
          ['Ohio', 'Yes', 'Guidance links AI to technology and CS standards'],
          ['Oklahoma', 'Yes', 'Guidance calls CS essential to AI literacy'],
          ['Oregon', 'No', 'Guidance ties how AI functions to CS; role not yet clarified'],
          ['Pennsylvania', 'No', 'Not stated'],
          ['Rhode Island', 'Yes', 'Guidance promotes AI literacy and CS for all students'],
          ['South Carolina', 'No', 'Not stated; an AI education task force'],
          ['South Dakota', 'No', 'Not stated'],
          ['Tennessee', 'No', 'A state law requires every district to set AI policies'],
          ['Texas', 'No', 'Not stated'],
          ['Utah', 'Yes', 'Guidance clarifies the CS role; an AI Education Specialist'],
          ['Vermont', 'No', 'Not stated'],
          ['Virginia', 'No', 'Not stated; AI literacy training for educators'],
          ['Washington', 'No', 'Guidance does not yet clarify the CS role'],
          ['West Virginia', 'Yes', 'Guidance emphasizes CS as fundamental to AI literacy'],
          ['Wisconsin', 'Yes', 'Guidance says AI should be taught across subjects, including CS'],
          ['Wyoming', 'Yes', 'Guidance says AI literacy includes elements of CS']
        ] },
        { kind: 'source', html: 'Source: Code.org (2025). 2025 State of AI + CS Education, <a class="ag-inline-link" href="https://advocacy.code.org/stateofdigitalfluency/" rel="noopener" target="_blank">state report pages</a>, CC BY-NC-SA 4.0. The middle column is our reading of each published toggle and matches the report&rsquo;s total of 17; the right column is our paraphrase of each page. Data were finalized on December 1, 2025, so newer guidance is not reflected. We are not connected with Code.org (now CodeAI) or any state agency.' }
      ]
    },
    {
      id: 'seventeen', tint: 'deep', eyebrow: 'The seventeen',
      h2: 'What the strongest state guidance says',
      lede: 'To count, the report&rsquo;s rubric needs "official guidance endorsed by the state education agency that emphasizes the fundamental role of CS education in AI literacy". Here is how some of the seventeen put it.',
      body: [
        { kind: 'table', caption: 'How selected states connect AI literacy and computer science, as described in the 2025 report', head: ['State', 'How the guidance connects AI and CS'], rows: [
          ['Maine', 'An AI Guidance Toolkit says students need a basic understanding of AI "rooted in foundational computer science and computational thinking"'],
          ['Hawaii', 'Separates using AI tools (AI literacy) from how AI works (CS), and says students need both'],
          ['Kentucky', 'Positions digital citizenship and CS as central to AI literacy, and calls on all schools to offer CS'],
          ['Oklahoma', 'Calls CS education essential to understanding how AI systems work, what they can do and their limits'],
          ['Colorado', 'Recommends local graduation requirements include AI literacy, data literacy and ethical AI use'],
          ['North Carolina', 'Defines AI literacy to include designing AI solutions, not only using them']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The other seventeen',
          left: [
            'The report puts it bluntly: "only 17 of the 34 states that have AI guidance emphasize CS". The rest mostly address responsible use, academic integrity and teacher practice.',
            'Several of those pages are close. Alaska, Delaware, Minnesota, Nevada, Oregon and Washington all have guidance that the report says does not yet clarify the role of computer science.'
          ],
          rightH3: 'Laws, not just guidance',
          right: [
            'Some states moved by statute. Ohio&rsquo;s budget bill required that "all school districts adopt an AI policy by July 2026". The report also notes "Senate Bill 1711 requires all public school districts to create AI policies" in Tennessee, and an Illinois law requiring statewide AI guidance.',
            'A district AI policy usually governs how tools may be used. Whether students learn how AI works is a separate curriculum question.'
          ] }
      ]
    },
    {
      id: 'two-kinds', tint: 'tint', eyebrow: 'Using vs learning',
      h2: 'Two kinds of AI guidance, and why the difference matters',
      lede: 'CodeAI separates "AI education", students learning about AI, from "AI in education", the adoption or regulation of AI tools. Most state guidance began with the second.',
      body: [
        { kind: 'table', caption: 'AI in education vs AI education (our summary of CodeAI&rsquo;s distinction)', head: ['Question', 'AI in education', 'AI education'], rows: [
          ['What it covers', 'Rules for using AI tools in school', 'Teaching how AI systems work'],
          ['Typical topics', 'Privacy, academic integrity, teacher use', 'Data, models, bias, design, limits'],
          ['Who it mainly guides', 'Administrators and teachers', 'Curriculum and course design'],
          ['Where CS fits', 'Rarely mentioned', 'The foundation']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the report cares about CS',
          left: [
            'The 10 Policies page says its references to AI education "are intended to describe students learning about AI not the adoption or regulation of AI tools." A student who can only prompt a chatbot has learned a tool; a student who knows what data, models and probability are can judge any tool.',
            'That is why the report counts only guidance that treats computer science as fundamental.'
          ],
          rightH3: 'What it means at home',
          right: [
            'If your state&rsquo;s guidance is mostly about use, your child&rsquo;s school may teach AI rules without teaching AI. Families can fill that gap with a short, age-appropriate course on how models learn.',
            'Age rules still apply. Many AI products set minimum ages in their own terms, and some are for adults only. We never place an under-18 student on an adults-only tool.'
          ] }
      ]
    },
    {
      id: 'ask', tint: 'deep', eyebrow: 'Questions to ask',
      h2: 'Six questions to ask your child&rsquo;s school about AI',
      lede: 'Our list for a parent-teacher conference or a school board meeting. None needs technical knowledge to ask.',
      body: [
        { kind: 'ol', items: [
          '<b>Which AI tools may students use, and from what grade?</b> Ask whether the school checked each tool&rsquo;s own age terms.',
          '<b>How is AI use in homework judged?</b> Ask for the written rule on disclosure and on what counts as the student&rsquo;s own work.',
          '<b>Is there any lesson on how AI works?</b> Not how to use it, but what data and training are.',
          '<b>Does a computer science course cover AI?</b> In many states, CS course descriptions now include AI topics.',
          '<b>What does the district AI policy say?</b> Ohio and Tennessee, among others, now require districts to have one.',
          '<b>Who decides when guidance changes?</b> State guidance is being revised quickly, so ask how families will hear about updates.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Elementary', p: 'Focus on what AI is and is not, and on never sharing personal details with any tool.' },
          { h3: 'Middle school', p: 'Ask whether students learn that AI can be confidently wrong, and how to check.' },
          { h3: 'High school', p: 'Ask about disclosure rules, AP and college expectations, and whether a CS course covers AI.' }
        ] }
      ]
    },
    {
      id: 'model', tint: 'tint', eyebrow: 'How AI decides',
      h2: 'A tiny AI in twelve lines of Python',
      lede: 'This is the kind of lesson the seventeen states are pointing at: not using an AI, but building the simplest one and watching it go wrong. Our example uses only the Python standard library.',
      body: [
        { kind: 'code', label: 'nearest_fruit.py (our example)', lang: 'Python 3', code: 'import math\n\n# (weight in grams, width in cm) and a label: our made-up training examples\nexamples = [\n    ((150, 7.0), "apple"),\n    ((170, 7.5), "apple"),\n    ((130, 7.4), "orange"),\n    ((120, 6.8), "orange"),\n    ((190, 8.0), "apple"),\n]\n\ndef predict(fruit):\n    nearest = min(examples, key=lambda ex: math.dist(ex[0], fruit))\n    return nearest[1], round(math.dist(nearest[0], fruit), 2)\n\nprint(predict((165, 7.4)))\nprint(predict((125, 7.0)))\nprint(predict((142, 9.5)))', note: 'Output: (\'apple\', 5.0), (\'orange\', 5.0), (\'apple\', 8.38). The first two answers look sensible. The third is the lesson: a fruit 9.5 cm wide, wider than anything in the data, is called an apple almost entirely because of its weight.' },
        { kind: 'two', mt: true,
          leftH3: 'What the student learns',
          left: [
            'The model "learns" nothing but stored examples, and decides by distance. <code>math.dist</code> measures how far apart two points are, and <code>min</code> with a key picks the closest example.',
            'Grams run into the hundreds while centimetres stay under ten, so weight swamps width in the distance. Real systems rescale their inputs for exactly this reason.'
          ],
          rightH3: 'Why this beats a chatbot demo',
          right: [
            'A student who has seen a model fail for a reason they can name will ask better questions of any AI tool: what data was it trained on, and what did it pay attention to?',
            'That habit is what guidance treating CS as fundamental is after, and it needs no adult-only product at all.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where students are',
    h2: 'Four stages of AI understanding',
    lede: 'How students usually progress, from using AI to understanding it.',
    table: { caption: 'Stages of AI understanding (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. User', 'Has seen AI tools and thinks they simply know things'],
      ['2. Skeptic', 'Knows AI can be wrong and checks its answers'],
      ['3. Explainer', 'Can say how training data shapes a model&rsquo;s output'],
      ['4. Builder', 'Has trained and tested a small model of their own']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 2 is the most important step for younger children, and it needs no account on any AI product.',
      'Stages 3 and 4 are where computer science comes in.'
    ] },
    right: { h3: 'For students', ps: [
      'Try breaking the fruit example: add a strange fruit and see what it predicts.',
      'Every surprising answer is a clue about how the model works.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for understanding and building AI',
    lede: 'Live, teacher-led and matched to age, in groups or privately.',
    bands: [
      { num: 'I', h3: 'Younger learners', sub: 'Ages 8 to 12', courses: [
        { code: 'AGSB / Y / 01', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'What AI is, and is not.' },
        { code: 'AGSB / Y / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'First smart projects.' },
        { code: 'AGSB / Y / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'AI-assisted making, supervised.' }
      ] },
      { num: 'II', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: 'AGSB / T / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Train real models.' },
        { code: 'AGSB / T / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'The data behind AI.' },
        { code: 'AGSB / T / 03', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Visual machine learning', blurb: 'Models without code first.' }
      ] },
      { num: 'III', h3: 'Foundations', sub: 'Computer science first', courses: [
        { code: 'AGSB / F / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language of most AI work.' },
        { code: 'AGSB / F / 02', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP CS Principles', blurb: 'Data, algorithms and impact.' },
        { code: 'AGSB / F / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The maths inside models.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'AI taught as a subject, not a shortcut',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, in US time zones.' },
      { time: 'Weekends', l: 'Good for longer model-building sessions.' },
      { time: '1-on-1', l: 'For a student with a specific AI project.' }
    ],
    cells: [
      { h3: 'Age-checked tools', p: 'Only tools whose terms fit the student.' },
      { h3: 'How, not just what', p: 'Data, training and limits explained.' },
      { h3: 'Build and break', p: 'Small models students test themselves.' },
      { h3: 'Honest use', p: 'Disclosure habits from the first week.' },
      { h3: 'Any state', p: 'Live online across the US.' },
      { h3: 'Two formats', p: 'Fifteen to twenty per batch, or one to one.' }
    ]
  },

  projectsH2: 'AI and coding projects by our students',
  projectsLede: 'A few of the things our learners have built. The <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Unedited words from parents&rsquo; Google reviews.',

  fees: {
    h2: 'Fees',
    lede: 'Billed each month in US dollars, with no long contract. A short AI literacy course of a few months is a common choice alongside school.',
    free: ['A free first lesson', 'An age check on tools', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Your own AI project', 'Times that suit you']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'State AI guidance for schools: common questions',
    items: [
      { q: 'How many states have AI guidance for schools?', a: 'The 2025 State of AI + CS Education report from Code.org counts 34 states with AI guidance, and 17 whose guidance emphasizes computer science as fundamental to AI literacy.' },
      { q: 'Which states treat computer science as fundamental to AI?', a: 'Alabama, California, Colorado, Hawaii, Indiana, Kentucky, Maine, Massachusetts, Montana, North Carolina, Ohio, Oklahoma, Rhode Island, Utah, West Virginia, Wisconsin and Wyoming. Iowa was in progress.' },
      { q: 'If my state shows No, does it have no AI guidance?', a: 'Not necessarily. No means the guidance did not meet the report\'s test of treating CS as fundamental, or did not exist. Alaska, Delaware and Minnesota, for example, have guidance that the report says does not yet clarify the CS role.' },
      { q: 'Does any state require an AI course to graduate?', a: 'No. The 2025 report counts zero of 50 states with an AI plus computer science graduation requirement.' },
      { q: 'Do districts have to write AI policies?', a: 'In some states, yes. The report notes an Ohio budget provision requiring every district to adopt an AI policy by July 2026, and a Tennessee law requiring district AI policies.' },
      { q: 'What is the difference between AI education and AI in education?', a: 'AI education means students learning how AI works. AI in education means rules for using AI tools in school. CodeAI uses the terms this way, and most early state guidance covered the second.' },
      { q: 'Is it safe for my child to use AI tools?', a: 'It depends on the tool and the child\'s age. Many AI products set minimum ages in their terms, and some are adults only. Check the terms, and keep personal details out of any tool.' },
      { q: 'How do you teach AI to children?', a: 'From the inside: data, examples, simple models the student builds and breaks, using only age-appropriate tools. We never put an under-18 student on an adults-only product.' },
      { q: 'When are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with Code.org or a state department?', a: 'No. We run our own classes and only report what these organisations have published, with links to the originals.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More on AI and computer science for US students.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Our pages for US families.' },
      { href: '/ai-and-machine-learning-classes-in-usa', label: 'AI and machine learning classes', p: 'For students ready to build models.' },
      { href: '/best-ai-courses-for-teens-2026', label: 'AI courses for teens', p: 'Choosing an AI course at 13 to 18.' },
      { href: '/blog/how-to-use-chatgpt-to-study-without-cheating', label: 'Studying with AI honestly', p: 'Disclosure and good habits.' },
      { href: '/ai-projects-for-high-school-students', label: 'AI projects for high schoolers', p: 'Ideas to build next.' },
      { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina', p: 'One of the seventeen, up close.' },
      { href: '/common-core-math-vs-traditional-math', label: 'Common Core math vs traditional math', p: 'Common Core and traditional math compared from the standards, with a worked example.' },
      { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state', p: 'Computer science graduation requirements in all 50 states and DC, with state sources.' },
      { href: '/computer-science-standards-by-state', label: 'CS standards by state', p: 'Which states have K-12 computer science standards, and which include AI.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us your child&rsquo;s age and what they already do with AI, if anything. The first lesson shows how a model learns, with no account on any AI product needed.',
    readFirst: 'Read about <a class="ag-inline-link" href="/how-we-teach">our teaching method</a>, or open the <a class="ag-inline-link" href="/courses">course list</a> to see every syllabus.',
    note: 'We teach live by video from India and fit lessons around US school days. A WhatsApp message is the fastest way to reach us.',
    formNote: 'The free lesson needs no card.'
  },

  footer: {
    cols: [
      { h4: 'AI for students', links: [
        { href: '/ai-and-machine-learning-classes-in-usa', label: 'AI and machine learning' },
        { href: '/best-ai-courses-for-teens-2026', label: 'AI courses for teens' },
        { href: '/ai-projects-for-high-school-students', label: 'AI projects' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
        { href: '/coding-classes-in-california', label: 'California' },
        { href: '/coding-classes-in-georgia', label: 'Georgia' }
      ] }
    ],
    bottomRight: 'Seventeen of thirty-four'
  },

  personalityCss: `
.ag-root.ag-agsb .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-agsb .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-agsb .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-agsb .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-agsb .ag-steps { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Code.org (2025), 2025 State of AI + CS Education, read raw 17 October 2026: 17 of 50 states with guidance clarifying CS as fundamental to AI; 34 states with AI guidance; Iowa in progress; rubric wording; state page descriptions (Maine toolkit, Hawaii, Kentucky, Oklahoma, Colorado, North Carolina, Ohio July 2026 district policies, Tennessee SB 1711, Illinois SB 1920, California SB 1288, Delaware, Michigan); data finalized December 1, 2025. CodeAI 10 Policies: AI education vs AI in education.',
    localProject: 'Our nearest-neighbour fruit classifier in Python with math.dist and min(key=...), output apple 5.0, orange 5.0, apple 8.38, showing how unscaled features distort a model; our six questions for a school. Lesson family: nearest-neighbour classification and feature scaling.',
    requiredMentions: ['only 17 of the 34 states that have AI guidance emphasize CS', 'official guidance endorsed by the state education agency', 'rooted in foundational computer science and computational thinking', 'all school districts adopt an AI policy by July 2026', 'Senate Bill 1711 requires all public school districts to create AI policies', 'not the adoption or regulation of AI tools', 'SB 1920 (2025)', 'SB 1288 (2024)', 'Michigan Virtual', 'December 1, 2025', 'math.dist', '8.38'],
    sources: [
      { claim: '2025 State of AI + CS Education: state pages, totals and the AI + CS guidance rubric.', url: 'https://advocacy.code.org/stateofdigitalfluency/' },
      { claim: 'CodeAI 10 Policies: AI education vs AI in education.', url: 'https://code.org/en-US/10policies' },
      { claim: 'Code.org data page and suggested citation.', url: 'https://advocacy.code.org/report-data/' }
    ],
    rejectedClaims: [
      'Which 34 states have AI guidance: the report gives the count, not a list, so the page summarises each state page and writes Not stated rather than No.',
      'Individual state department AI guidance documents: not fetched for this page; the table cites the report and says so.',
      'Maryland\'s appropriation figure: a dollar figure, omitted.',
      'Minimum ages for named AI products: not stated, because they were not confirmed at each product\'s own terms for this page.',
      'Any affiliation with Code.org (CodeAI) or any state: none.'
    ]
  }
};
