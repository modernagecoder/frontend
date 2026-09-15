'use strict';
// Best coding classes for kids in Ireland (ag- door, Ireland cluster, Phase 2).
// Primary school, roughly ages 6 to 12. Facts read at primary sources on
// 16 September 2026: the Primary Curriculum Framework (launched 9 March 2023;
// five curriculum areas including "Science, Technology, Engineering, and
// Mathematics (STEM) Education"; seven key competencies including "Being a
// digital learner"; a monthly minimum for Science, Technology and Engineering
// of 3 hours 20 minutes at Stage 1, 4 hours at Stage 2 and 5 hours at Stages 3
// and 4), Circulars 0067/2025 and 0052/2026 on the rollout; the Department's
// Statistical Bulletin (545,726 primary pupils in 2025/26; average mainstream
// class 21.9, junior infants 19.7, fourth to sixth 23.5; pupil:teacher ratio
// 12.6); Gaeloideachas (256 Irish-medium primary schools, 44,052 pupils,
// 2023-2024). The NCCA's Coding in Primary Schools report is known only through
// Oide (secondary) and is attributed to Oide. Data project: CSO baby names
// (VSA50, VSA60): Rian 490 and Lily 302 in 2025; Sean 185 and Sean without a
// fada 38 counted separately; the 2018 fada series break; rare names missing
// (10,336 distinct names; the table's 1,071 boys' names sum to 23,729); ties
// skip ranks.

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  hub: { group: 'guide', tag: 'KIDS', blurb: 'Coding for primary-school children, from Junior Infants to Sixth Class: blocks, Scratch and first Python, set against the new primary curriculum.' },
  slug: 'best-coding-classes-for-kids-ireland',
  code: 'bki',
  accent: '#4C4300',
  accentRationale: 'Kids, Ireland: a dark gorse-olive from the solver, separated from both Irish greens and every other Ireland page',
  pageType: 'market',
  market: { name: 'Ireland', iso: 'IE', dial: '+353', lang: 'en-IE', locale: 'en_IE', geoRegion: 'IE', brandTag: 'Ireland', phonePlaceholder: '87 123 4567', minDigits: 7 },
  routeLabel: 'Best coding classes for kids in Ireland',
  title: 'Best Coding Classes for Kids in Ireland | Ages 6 to 12',
  description: 'Best coding classes for kids in Ireland, from Junior Infants to Sixth Class: blocks, Scratch and first Python, with a live teacher. First class free.',
  ogDescription: 'The new Irish primary curriculum makes "being a digital learner" a key competency. What that means at home, and how a small live coding class for children fits beside it.',
  twitterDescription: 'Coding for Irish primary-school children, blocks to Python, live and in small groups. First class free.',
  pageName: 'Best Coding Classes for Kids in Ireland',
  webPageDescription: 'Coding classes for primary-school children in Ireland, set against the Primary Curriculum Framework of 2023, with a first data project on Irish baby names and live online lessons in small groups.',
  courseDescription: 'Live online coding for children in Irish primary schools, from block coding and Scratch in the infant and junior classes to typed Python and first AI in the senior classes, placed by ability.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Ireland', href: '/coding-classes-in-ireland' }],
  crumbLabel: 'Coding for kids, Ireland',
  navLinks: [
    { href: '#curriculum', label: 'The new curriculum' },
    { href: '#class', label: 'Class sizes' },
    { href: '#names', label: 'A first project' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ireland &middot; Primary school &middot; Ages 6 to 12',
  h1: 'Best coding classes for kids in Ireland',
  lede: 'Irish primary schools are in the middle of the biggest change to their curriculum in a generation. The Primary Curriculum Framework, launched in March 2023, names "being a digital learner" as one of seven key competencies for every child from Junior Infants to Sixth Class, and schools are bringing in the new curriculum areas one at a time. So a parent asking about coding for a young child is asking at exactly the right moment, and deserves a straight answer to three questions. What does the new curriculum ask of children, and how much time might their school give it this year? What can a small weekly class add beside a class of twenty-two? And what does good coding for a six or nine year old actually look like? This page answers all three from the Department\'s own documents, and finishes with a first data project any child can do: counting Irish baby names, which turns out to be harder than it looks.',
  secondaryCta: { href: '#curriculum', label: 'What the curriculum asks' },
  wa: 'Hello Modern Age Coders, I would like a free first coding class for my child at primary school in Ireland.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; children from age 6',
  spec: [
    ['For', 'Junior Infants to Sixth Class'],
    ['Starts with', 'Blocks and Scratch'],
    ['Moves to', 'Typed Python, first AI'],
    ['Group', 'Five to ten children at one level'],
    ['Or', 'One to one'],
    ['Teacher', 'The same one each week'],
    ['Hours', 'After school, Irish time'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The best coding class for an Irish primary-school child starts with play and blocks, moves to typed code around Fourth Class, and is taught by the same patient teacher each week in a small group. The Primary Curriculum Framework of 2023 makes being a digital learner a key competency for every child, and suggests at least five hours a month for Science, Technology and Engineering in the senior classes, but schools are introducing the new areas one at a time, so what a child meets in school this year varies. Modern Age Coders teaches children live online from age 6, in groups of five to ten placed by ability or one to one. A first class is free, and a place then costs USD 100 a month in a group or USD 150 a month with a teacher alone.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three first courses for primary-school children',
    lede: 'One for the infant and junior classes, one for the middle years, and one for the senior classes ready to type. Each card opens its syllabus.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'KIDS / 01', title: 'Coding for Kids', note: 'Block coding for children from about six: sequences, loops and choices learned by making things move, with no typing needed.' },
      { course: 'scratch-programming-complete-course', code: 'KIDS / 02', title: 'Scratch Coding for Kids', note: 'Stories and games in Scratch for the middle classes, each planned first and then explained by the child who made it.' },
      { course: 'python-ai-kids-masterclass', code: 'KIDS / 03', title: 'Python and AI for Kids', note: 'For Fourth to Sixth Class: real typed Python, puzzles and a little program that learns, the step many children are ready for by ten.' }
    ]
  },

  sections: [
    {
      id: 'curriculum', tint: 'tint', eyebrow: 'The new curriculum',
      h2: 'What the new Irish primary curriculum asks of children',
      lede: 'The Primary Curriculum Framework sets the direction for every primary school. The facts below come from the Framework itself and from the Department\'s circulars on how schools introduce it.',
      body: [
        { kind: 'table', caption: 'The Primary Curriculum Framework and its rollout', head: ['What', 'Detail', 'Source'], rows: [
          ['Launched', '9 March 2023', 'Department of Education'],
          ['Curriculum areas', 'Five: Language; Science, Technology, Engineering, and Mathematics (STEM) Education; Wellbeing; Arts Education; Social and Environmental Education', 'The Framework'],
          ['Key competencies', 'Seven, for Junior Infants to Sixth Class, among them Being a digital learner', 'The Framework'],
          ['Suggested minimum for Science, Technology and Engineering', '3 hours 20 minutes a month in the infant classes, 4 hours in First and Second Class, 5 hours in Third to Sixth Class', 'The Framework'],
          ['Rollout', '2025/26 an introductory year; from 2026/27 schools get focused support in one curriculum area each year', 'Circulars 0067/2025 and 0052/2026']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The Framework describes being a digital learner as supporting children "to become curious, creative, confident, and critical users of digital technology", learning "through problem-solving, experimenting, and creating". That is a fair description of good coding for children, and it is the aim our lessons share.',
            'The Department\'s technology support service, Oide, reports that the NCCA published a report on coding in primary schools in 2019, after a pilot in Irish primary schools, and that it found computational thinking to be the right focus, taught playfully.'
          ],
          right: [
            'Timing is the part parents should know. For 2026/27 each school chooses at least one curriculum area to begin from September 2026, and only one area gets national support that year. A school that starts with Wellbeing or Language may not reach STEM for a while, and the new time allocations are expected in all schools by the end of 2027/28.',
            'So two children in the same year, in different schools, can meet very different amounts of technology in class this year. A weekly class smooths that out.'
          ] },
        { kind: 'source', html: 'Sources, read 16 September 2026: <a class="ag-inline-link" href="https://www.gov.ie/en/department-of-education/policy-information/new-primary-curriculum/" rel="noopener" target="_blank">Department of Education, the new primary curriculum</a>; <a class="ag-inline-link" href="https://www.curriculumonline.ie/getmedia/84747851-0581-431b-b4d7-dc6ee850883e/2023-Primary-Framework-ENG-screen.pdf" rel="noopener" target="_blank">Primary Curriculum Framework (2023)</a>; <a class="ag-inline-link" href="https://assets.gov.ie/static/documents/16f30644/Circular_Primary_Curriculum_Specifications_EN.pdf" rel="noopener" target="_blank">Circular 0067/2025</a>; <a class="ag-inline-link" href="https://assets.gov.ie/static/documents/5ee2d114/EN_4th_Communication_re_Primary_Curriculum_May_2026..pdf" rel="noopener" target="_blank">Circular 0052/2026</a>; <a class="ag-inline-link" href="https://www.oidetechnologyineducation.ie/courses-practice/coding-for-teachers/" rel="noopener" target="_blank">Oide Technology in Education, coding for teachers</a>.' }
      ]
    },
    {
      id: 'class', tint: 'deep', eyebrow: 'Class sizes',
      h2: 'A class of twenty-two, and a group of five to ten',
      lede: 'Irish primary classes have been getting smaller, and teachers do remarkable work in them. A coding class simply offers a different ratio for one kind of learning.',
      body: [
        { kind: 'table', caption: 'Primary school in numbers, Department of Education Statistical Bulletin', head: ['Measure', 'Figure'], rows: [
          ['Pupils in primary schools, 2025/26', '545,726'],
          ['Average mainstream class size, 2025/26', '21.9, the lowest yet'],
          ['Average class in junior infants', '19.7'],
          ['Average class in fourth to sixth classes', '23.5'],
          ['Pupil:teacher ratio, 2025/26', '12.6, down from 16.6 in 2005/06']
        ] },
        { kind: 'two', mt: true,
          left: [
            'In the senior classes, where children are often ready to move from blocks to typed code, the average class is 23.5. Teaching a room of that size to type and debug their first programs, one error at a time, is hard, however good the teacher.',
            'The pupil:teacher ratio is lower, 12.6, but the bulletin calculates it by dividing all pupils by all full-time-equivalent teachers, so it describes staffing, not the number of children in a room.'
          ],
          right: [
            'A coding group of five to ten children at the same level lets a teacher see each child\'s screen, catch each misunderstanding and set the next small challenge. One-to-one lessons go further still, for a child who is shy, far ahead or needs a slower pace.',
            'Neither replaces school. They add practice at the one thing a large class finds hardest to give: individual attention while a child is stuck.'
          ] }
      ]
    },
    {
      id: 'names', tint: 'tint', eyebrow: 'A first project',
      h2: 'Counting Irish baby names: a first data project for children',
      lede: 'The Central Statistics Office publishes every first name given to three or more babies each year since 1964. Children love it, and it hides three lessons about counting.',
      body: [
        { kind: 'table', caption: 'The most popular baby names in Ireland in 2025, CSO tables VSA50 and VSA60', head: ['Rank', 'Boys', 'Babies', 'Girls', 'Babies'], rows: [
          ['1', 'Rían', '490', 'Lily', '302'],
          ['2', 'Jack', '475', 'Éabha', '294'],
          ['3', 'Noah', '436', 'Fiadh', '273'],
          ['4', 'James', '359', 'Grace', '265'],
          ['5', 'Oisín', '331', 'Sadie', '258']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Lesson 1: spellings split', p: 'Seán and Sean are counted as two names: 185 babies and 38 in 2025. Is Seán more popular than it looks? That depends on a choice the child must make and explain, which is the heart of working with data.' },
          { h3: 'Lesson 2: the fada break', p: 'From 1998 to 2017 names were typed in without fadas, so in 2017 Sean had 453 babies. In 2018 it shows 91, with 317 more under Seán. A chart of "Sean" seems to crash overnight, but only the spelling rule changed.' },
          { h3: 'Lesson 3: the missing names', p: 'The CSO says 10,336 distinct names were registered in 2025, but the table lists only names given three or more times. Add up its 1,071 boys\' names and you get 23,729 babies, fewer than were born.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Younger children do the project with a printed list and tally marks, then in Scratch with a simple counter. Older children load the real table in Python, sort it, and discover that Sophie and Emily tie at number 6 in 2025, with no number 7 at all.'
          ],
          right: [
            'The point is not the names. It is the habit every good programmer needs: before you trust a count, ask what was counted, what was left out, and whether the rules changed along the way.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.cso.ie/en/releasesandpublications/ep/p-ibn/irishbabiesnames2025/keyfindings/" rel="noopener" target="_blank">CSO, Irish Babies\' Names 2025</a> and its <a class="ag-inline-link" href="https://www.cso.ie/en/releasesandpublications/ep/p-ibn/irishbabiesnames2025/backgroundnotes/" rel="noopener" target="_blank">background notes</a>; tables VSA50 and VSA60 on data.cso.ie, read 16 September 2026. The 1,071 and 23,729 are our own count of the published table.' }
      ]
    },
    {
      id: 'gaeilge', tint: '', eyebrow: 'Gaelscoileanna',
      h2: 'For children at a Gaelscoil or a school in the Gaeltacht',
      lede: 'Many Irish families choose education through Irish. A coding class in English fits beside it easily.',
      body: [
        { kind: 'three', cells: [
          { h3: 'A large community', p: 'Gaeloideachas reports 256 Irish-medium primary schools with 44,052 pupils in the 26 counties in 2023-2024, and Department figures put that at about 8% of primary pupils.' },
          { h3: 'English comes later', p: 'The Framework notes that in Irish-medium schools the introduction of formal English learning can be delayed until first class. Our youngest classes use very little reading, and code itself is written in English keywords either way.' },
          { h3: 'Two languages, one more', p: 'Children who move between Irish and English at school often take to a third, stricter language happily. A programming language has far fewer words than either, and they never change meaning.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The ladder',
    h2: 'Five rungs through the primary years',
    lede: 'The classes named are typical, not rules. The teacher moves a child on when the work shows they are ready.',
    table: { caption: 'Coding through Irish primary school', head: ['Usually', 'Rung', 'The child can'], rows: [
      ['Junior and Senior Infants', '1. Sequences', 'Put steps in order to make something move, with blocks or cards'],
      ['First and Second Class', '2. Loops and choices', 'Repeat actions and make a program react, in blocks'],
      ['Third and Fourth Class', '3. Scratch projects', 'Plan, build and explain a complete game or story'],
      ['Fourth to Sixth Class', '4. Typed code', 'Write short Python programs and fix their own mistakes'],
      ['Fifth and Sixth Class', '5. First data and AI', 'Count and chart real data, and train a program that learns']
    ] },
    left: { h3: 'Why blocks come first', ps: [
      'Blocks let a six year old think about order and repetition without spelling mistakes getting in the way. Once those ideas are secure, typing is only a new way of saying them.',
      'The route beyond primary is set out on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Short lessons, often', ps: [
      'Young children learn best in short, regular sessions. Most take one or two classes a week, and the teacher keeps each one full of making, not listening.',
      'Children coming from a club can start further up; see <a class="ag-inline-link" href="/after-coderdojo-next-step-coding-ireland">after CoderDojo</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses for primary-school children',
    lede: 'Grouped by the stage most children are at. A card opens its syllabus, and the free first class shows where a child should begin.',
    bands: [
      { num: 'I', h3: 'Infant and junior classes', sub: 'Blocks and play', courses: [
        { code: 'KIDS / EARLY / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Blocks, sequences and loops from about age six.' },
        { code: 'KIDS / EARLY / 02', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Stories and games, planned then built.' },
        { code: 'KIDS / EARLY / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe Coding for Kids', blurb: 'Scratch with careful help from AI, ages eight and up.' }
      ] },
      { num: 'II', h3: 'Middle classes', sub: 'Bigger projects and first typing', courses: [
        { code: 'KIDS / MID / 01', slug: 'game-development-masterclass-for-kids', title: 'Game Development for Kids', blurb: 'Complete games with scores and levels.' },
        { code: 'KIDS / MID / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Game Coding for Kids', blurb: 'First typed code, inside a familiar world.' },
        { code: 'KIDS / MID / 03', slug: 'maths-through-coding', title: 'Maths Through Coding', blurb: 'Primary maths made visible in small programs.' }
      ] },
      { num: 'III', h3: 'Senior classes', sub: 'Python, the web and AI', courses: [
        { code: 'KIDS / SENIOR / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed Python and a first learning program.' },
        { code: 'KIDS / SENIOR / 02', slug: 'kids-ai-web-development-course', title: 'Web and AI for Kids', blurb: 'A first website, built line by line.' },
        { code: 'KIDS / SENIOR / 03', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'How AI learns, and why it can be wrong.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Short, lively lessons after school',
    lede: 'Every lesson is live, with a teacher working from India at a fixed hour set in Irish time. Because Ireland moves its clocks and India does not, the gap is five and a half hours in the Irish winter and four and a half in the summer. Most primary-school children take their class after school on a weekday or on a Saturday morning.',
    slots: [
      { time: 'After school', l: 'Between homework and dinner, Irish time.' },
      { time: 'Saturday morning', l: 'For children with busy weekday afternoons.' },
      { time: 'Mid-term breaks', l: 'Families choose whether to pause or keep going.' }
    ],
    cells: [
      { h3: 'The first class is free', p: 'The child makes something small with the teacher, who then suggests the right group or course.' },
      { h3: 'Groups of five to ten', p: 'Children at the same stage, so no one is left behind and no one waits.' },
      { h3: 'One to one', p: 'For a shy child, a very quick one, or one who needs a gentler pace.' },
      { h3: 'Parents in the loop', p: 'After each block of lessons, parents hear what their child has made and what comes next.' },
      { h3: 'Screens used well', p: 'Lessons are about making and explaining, never passive watching.' },
      { h3: 'Work to show', p: 'Games and projects are saved so a child can show grandparents, friends or a teacher.' }
    ]
  },

  projectsH2: 'Things our young students have made',
  projectsLede: 'Four projects by our students, most of them older learners. Many more, from every age, are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents\' and students\' reviews from Google, left exactly as they wrote them. None were paid for.',

  fees: {
    h2: 'Fees for children\'s classes',
    lede: 'A monthly fee in US dollars, identical for families in every country except India, whatever the child\'s age. There is no registration charge and no need to commit for the school year.',
    free: ['A first class where the child makes something', 'A suggested group or course', 'No card asked for'],
    group: ['Five to ten children at one stage', 'The same teacher every week', 'Projects looked at weekly', 'A certificate when a course ends'],
    one: ['A teacher for one child', 'The pace set by the child', 'Good for shy or very quick children']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'What Irish parents ask about coding for primary-school children',
    items: [
      { q: 'What age can my child start coding?', a: 'From about six, with blocks and no reading required. Typed code usually comes around Fourth Class, when a child can type comfortably and reason in steps.' },
      { q: 'Does the new primary curriculum include coding?', a: 'The Primary Curriculum Framework makes being a digital learner a key competency and has a STEM curriculum area, with suggested time for Science, Technology and Engineering. Schools are introducing the new areas one at a time, so how much a child meets varies by school.' },
      { q: 'How big are Irish primary classes?', a: 'The Department reports an average mainstream class of 21.9 in 2025/26, from 19.7 in junior infants to 23.5 in fourth to sixth classes. Our coding groups are five to ten.' },
      { q: 'Is Scratch enough, or should my child learn Python?', a: 'Scratch is the right start for most children under ten. Around Fourth Class many are ready for Python, and the teacher moves them on when their Scratch work shows it.' },
      { q: 'My child is at a Gaelscoil. Is an English class a problem?', a: 'Usually not. Our youngest classes involve very little reading, and programming keywords are in English whichever language a child learns in at school.' },
      { q: 'Will my child just be on a screen?', a: 'They will be making and explaining things, with a teacher asking questions, which is very different from watching videos. Lessons are short and active.' },
      { q: 'Do children use AI in class?', a: 'Only a little, and only once they understand what a program is. The older children train a simple program that learns, so they see how AI works and why it can be wrong.' },
      { q: 'What does a children\'s class cost?', a: 'The first class is free. Then a group place is USD 100 a month and one-to-one lessons are USD 150 a month, billed in US dollars, with no registration charge and no yearly commitment.' },
      { q: 'When are classes held?', a: 'After school on a weekday or on a Saturday morning, at an hour agreed in the free class. Our teachers in India are five and a half hours ahead of Irish time in winter and four and a half in summer.' },
      { q: 'What happens after I send the form?', a: 'We phone you at a sensible time in Ireland and book the free first class. You pay nothing unless your child keeps going.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for young coders in Ireland',
    lede: 'Pages for the years that follow and for choosing well.',
    items: [
      { href: '/best-coding-classes-for-teens-ireland', label: 'Best coding classes for teens in Ireland', p: 'For the secondary-school years.' },
      { href: '/after-coderdojo-next-step-coding-ireland', label: 'After CoderDojo', p: 'For children who started at a coding club.' },
      { href: '/best-online-coding-classes-ireland', label: 'Best online coding classes in Ireland', p: 'Six checks for choosing any class.' },
      { href: '/ai-and-python-academy-for-girls-ireland', label: 'AI and Python for girls in Ireland', p: 'Keeping interest alive over the years.' },
      { href: '/best-coding-class-in-the-world', label: 'The best coding class in the world', p: 'The research behind good teaching.' },
      { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland', p: 'The national page.' }
    ]
  },

  start: {
    h2: 'Let your child make something in a free first class',
    lede: 'Leave a parent\'s number and we will phone at a time that suits a family in Ireland. In the first class your child makes something small with a teacher, and you hear honestly where they should start.',
    readFirst: 'If you would like to look around first, there is a page on <a class="ag-inline-link" href="/how-we-teach">how our teachers work</a>, a syllabus for <a class="ag-inline-link" href="/courses">every course</a>, and <a class="ag-inline-link" href="/student-labs">projects made by our students</a>.',
    note: 'WhatsApp is free from an Irish mobile and often the quickest way to reach us. Our number is an Indian one, because our team is in India; we have no Irish premises.',
    formNote: 'No card needed and no obligation. A single phone call to arrange the class.'
  },

  footer: {
    cols: [
      { h4: 'Ireland', links: [
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' },
        { href: '/best-coding-classes-for-teens-ireland', label: 'Coding for teens, Ireland' },
        { href: '/after-coderdojo-next-step-coding-ireland', label: 'After CoderDojo' },
        { href: '/best-coding-class-in-dublin', label: 'Dublin' }
      ] },
      { h4: 'For parents', links: [
        { href: '/best-online-coding-classes-ireland', label: 'Choosing a class' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Coding for Irish primary-school children'
  },

  personalityCss: `
.ag-root.ag-bki .ag-hero-grid { gap: clamp(1.2rem, 3.4vw, 2.9rem); }
.ag-root.ag-bki .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-bki .ag-capsule { border-left-width: 6px; }
.ag-root.ag-bki .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-bki .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-bki .ag-band-head h3 { letter-spacing: -0.003em; }
.ag-root.ag-bki .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-bki .ag-slots { gap: 1.3rem; }
`,

  mustMention: ['9 March 2023', 'Being a digital learner', 'Science, Technology, Engineering, and Mathematics (STEM) Education', '3 hours 20 minutes a month', '545,726', '21.9', '23.5', 'Rían', '490', 'Seán and Sean', '10,336', '256 Irish-medium primary schools']
};
