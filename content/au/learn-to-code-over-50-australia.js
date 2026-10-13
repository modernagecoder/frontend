'use strict';
// Learn to code over 50, Australia (ag- age and career door; AU cluster Phase 9, row 353).
// Intent: Australians aged 50 to 67 (the top of our 6 to 67 range) who want to start coding later in life, for
// interest, a project or work. Respectful tone; no health or cognitive claims; no job or money promises.
// Sources, read raw on 13 October 2026 (curl, default agent):
//  - ABS, Work-Related Training and Adult Learning, 2024-25 financial year (released as the last of the four-yearly
//    survey): participation by age group (total studying or training 45-54 30.3%, 55-64 21.1%, 65-74 6.0%; formal
//    study 55-64 3.6%, 65-74 1.0%; work-related training 55-64 18.6%, 65-74 5.1%); main reason for formal study,
//    65-74: personal development 46.2% (all ages 10.8%); 55-64: increase skills in job 43.9%. "5% of 65-74 year olds
//    also participated in work-related training". Parts are never summed.
//  - eSafety Commissioner, Be Connected home page: "Be Connected is an Australian government initiative committed to
//    building the confidence, digital skills and online safety of older Australians."; free learning resources and
//    community organisations running free computer classes.
// Lesson family: scoring a five-letter word-guessing game when letters repeat. Our list of 452 everyday five-letter
// words (written by us; British and Australian spelling); every ordered guess and answer pair scored naively and
// with the two-pass rule; figures in o50/res.json. The game is described generically; no product name is used.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: {
    group: 'guide',
    tag: 'OVER 50',
    blurb: 'Learning to code from 50 to 67 in Australia: patient live lessons, projects you choose, and an honest start whatever your experience with computers.'
  },
  slug: 'learn-to-code-over-50-australia',
  code: 'ofau',
  accent: '#446139',
  accentRationale: 'Learn to code over 50, Australia: a muted olive green computed for the national doors, at least 20 RGB from every national AU accent, at least 10 from every AU accent and 6 from every colour in use',
  pageType: 'market',
  market: {
    name: 'Australia',
    iso: 'AU',
    dial: '+61',
    lang: 'en-AU',
    locale: 'en_AU',
    geoRegion: 'AU',
    brandTag: 'AU',
    phoneLabel: 'Australian mobile number',
    phonePlaceholder: '491 570 156',
    gradeLabel: 'Year level or age',
    minDigits: 9,
    stripTrunk: true
  },
  routeLabel: 'Learn to code over 50, Australia',
  title: 'Learn to Code Over 50 in Australia | Live Lessons, Ages 50-67',
  description: 'Learn to code over 50 in Australia: patient live online lessons for ages 50 to 67, projects you choose, Python and the web at your own pace. The first class is free.',
  ogDescription: 'One in three scores went wrong when a guess had a repeated letter. A gentle first coding project for Australians aged 50 to 67, worked through in full.',
  twitterDescription: 'Coding lessons for Australians aged 50 to 67: live, patient, built around projects you care about. First class free.',
  pageName: 'Learn to Code Over 50 in Australia',
  webPageDescription: 'A guide for Australians aged 50 to 67 starting to code: what ABS figures show about learning later, where Be Connected fits, a worked word-game project, and how our lessons run.',
  courseDescription: 'Live online coding lessons for Australians aged 50 to 67, starting from the very beginning in Python and web pages, paced to the learner and built around their own projects.',
  crumbs: [
    { name: 'Courses', href: '/courses' },
    { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }
  ],
  crumbLabel: 'Learn to code over 50',
  navLinks: [
    { href: '#later', label: 'Learning later' },
    { href: '#first', label: 'Before coding' },
    { href: '#puzzle', label: 'A first project' },
    { href: '#lessons', label: 'How lessons feel' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 50 to 67 &middot; Your pace, your projects',
  h1: 'Learn to code over 50',
  lede: 'Plenty of Australians in their fifties and sixties have wanted to understand how software works for years, and only now have the time. Some want to build something for a club, a family history or a hobby; some want a new skill for the job they still enjoy; some are simply curious. Our live online lessons for people aged 50 to 67 start from the very beginning, move at the learner\'s pace and use projects the learner chooses. Nobody is rushed, nobody is assumed to know the jargon, and every question is a good one. This page looks at what national survey figures say about learning in later working life, suggests where to begin if computers themselves still feel unfamiliar, and works through a small first project in full.',
  secondaryCta: { href: '#puzzle', label: 'See a first project' },
  wa: 'Hello Modern Age Coders, I am in Australia, over 50, and would like to learn to code. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; patient lessons that start from the beginning',
  spec: [
    ['For', 'Ages 50 to 67'],
    ['Experience', 'None needed'],
    ['First language', 'Python, or web pages'],
    ['Projects', 'Chosen by the learner'],
    ['Pace', 'Set by the learner'],
    ['Format', 'Live online lessons'],
    ['Group', 'Small groups, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Learning to code over 50 means starting programming later in life, usually with Python or web pages, through short projects that matter to the learner. ABS figures for 2024-25 show 21.1% of Australians aged 55 to 64 studied or trained in the previous year. Modern Age Coders offers live online coding lessons for Australians aged 50 to 67, at the learner\'s own pace, in small groups or one to one, starting with a free first class.',
  picks: {
    eyebrow: 'Start here',
    h2: 'Three gentle starting points',
    lede: 'A careful Python course, a course for making web pages, and a course for working with data without programming first. Tap a card for its full outline.',
    items: [
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        code: 'OFAU / 01',
        title: 'Python from Zero',
        note: 'From the very first line, with small projects at every step. Adult groups only.'
      },
      {
        course: 'html-css-course-for-beginners-build-real-websites',
        code: 'OFAU / 02',
        title: 'Build Real Websites',
        note: 'HTML and CSS for a club, family or hobby site you can show people.'
      },
      {
        course: 'data-and-ai-analytics-for-non-programmers-course',
        code: 'OFAU / 03',
        title: 'Data for Non-Programmers',
        note: 'Spreadsheets and data skills first, for those who prefer to start there.'
      }
    ]
  },
  sections: [
    {
      id: 'later',
      tint: 'tint',
      eyebrow: 'Learning later',
      h2: 'What the national figures say about learning after 50',
      lede: 'The Australian Bureau of Statistics surveys adult learning every four years. Its 2024-25 release, the last of that series, shows how participation changes with age.',
      body: [
        {
          kind: 'table',
          caption: 'People who studied or trained in the last 12 months, by age, 2024-25 (ABS)',
          head: ['Age group', 'Formal study', 'Work-related training', 'Any study or training'],
          numCols: [
            1,
            2,
            3
          ],
          rows: [
            ['45 to 54', '7.4%', '25.3%', '30.3%'],
            ['55 to 64', '3.6%', '18.6%', '21.1%'],
            ['65 to 74', '1.0%', '5.1%', '6.0%']
          ]
        },
        {
          kind: 'p',
          mt: true,
          html: 'The ABS notes that the parts need not add to the total, because some people did both kinds of learning. We print the published totals rather than adding the columns. The age bands are the ABS bands, so they do not line up exactly with our 50 to 67 range.'
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Why people learn later',
          left: [
            'For people aged 65 to 74 who undertook formal study, the most common main reason in the ABS figures was personal development, at 46.2%, compared with 10.8% across all ages. For those aged 55 to 64, increasing skills in their job came first, at 43.9%.',
            'Both reasons fit coding well: a personal project, or a skill that makes current work easier.'
          ],
          rightH3: 'What we take from it',
          right: [
            'Learners in their fifties and sixties are a minority in most courses, which is exactly why lessons should be designed for them rather than squeezed into a class built for twenty year olds.',
            'Our over-50 groups keep the pace, examples and vocabulary suited to the people in them.'
          ]
        },
        {
          kind: 'source',
          html: 'Source, read 13 October 2026: Australian Bureau of Statistics, <a class="ag-inline-link" href="https://www.abs.gov.au/statistics/people/education/work-related-training-and-adult-learning/latest-release" rel="noopener" target="_blank">Work-Related Training and Adult Learning, 2024-25 financial year</a>. Figures are as published; the ABS reports people aged 15 to 74.'
        }
      ]
    },
    {
      id: 'first',
      tint: 'deep',
      eyebrow: 'Before coding',
      h2: 'If computers still feel new, start one step earlier',
      lede: 'Coding is easier when the computer itself is familiar. There is a free national program for exactly that step.',
      body: [
        {
          kind: 'two',
          leftH3: 'Be Connected',
          left: [
            'The eSafety Commissioner\'s site says: "Be Connected is an Australian government initiative committed to building the confidence, digital skills and online safety of older Australians." It offers free online learning and lists community organisations running free computer classes.',
            'If files, folders, browsers and passwords still feel shaky, a few weeks there is time well spent, and we are happy to say so in the free class.'
          ],
          rightH3: 'Ready for coding when...',
          right: [
            'You can open a web browser, find a downloaded file, type comfortably and copy and paste. That is all. No maths beyond everyday arithmetic is needed to begin.',
            'Everything else, from installing Python to saving your first program, is taught step by step in the lessons.'
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'A simple readiness check',
          head: ['Can you...', 'If yes', 'If not yet'],
          rows: [
            ['Type a short paragraph without much hunting for keys?', 'Ready', 'A few weeks of practice first'],
            ['Find a file you downloaded yesterday?', 'Ready', 'Be Connected covers this well'],
            ['Join a video call and share your screen?', 'Ready', 'We show you in the free class'],
            ['Follow written steps one at a time?', 'Ready', 'Everyone can; it is the main coding skill']
          ]
        },
        {
          kind: 'source',
          html: 'Source, read 13 October 2026: eSafety Commissioner, <a class="ag-inline-link" href="https://beconnected.esafety.gov.au/" rel="noopener" target="_blank">Be Connected</a>. We are not part of Be Connected and are not endorsed by it.'
        }
      ]
    },
    {
      id: 'puzzle',
      tint: 'tint',
      eyebrow: 'A first project',
      h2: 'Scoring a five-letter word puzzle, and the rule about repeated letters',
      lede: 'Many people play daily five-letter word puzzles, where each guess is marked letter by letter: right letter in the right place, right letter in the wrong place, or not in the word. Writing the marking rules in Python is a first project with a real surprise in it.',
      body: [
        {
          kind: 'p',
          html: 'The obvious rule is: a letter in the right place is marked as correct; any other letter that appears somewhere in the answer is marked as present. Learners write that in about eight lines. The trouble starts with repeated letters. If the guess is SHEEP and the answer is PAPER, the answer has only one E, so only one of the two Es in SHEEP should light up. The simple rule lights up both. The fair rule works in two passes: first mark the letters in the right place, then hand out "present" marks only while unmatched copies of that letter remain in the answer.'
        },
        {
          kind: 'table',
          caption: 'Every ordered guess and answer pair from our list of 452 everyday five-letter words (our calculation)',
          head: ['Pairs tested', 'Count', 'Marked differently by the simple rule', 'Share'],
          numCols: [
            1,
            2
          ],
          rows: [
            ['All pairs', '203,852', '16,837', '8.3%'],
            ['Guess contains a repeated letter (117 of our words)', '52,767', '16,837', '31.9%'],
            ['Guess has five different letters', '151,085', '0', '0%']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Three examples (G right place, Y elsewhere in the word, dot not in the word)',
          head: ['Guess', 'Answer', 'Simple rule', 'Two-pass rule'],
          rows: [
            ['SHEEP', 'PAPER', '. . Y G Y', '. . . G Y'],
            ['APPLE', 'PLANT', 'Y Y Y Y .', 'Y Y . Y .'],
            ['THREE', 'OTHER', 'Y Y Y G Y', 'Y Y Y G .']
          ]
        },
        {
          kind: 'three',
          mt: true,
          cells: [
            {
              h3: 'About one in three',
              p: 'When the guess had a repeated letter, the simple rule marked 31.9% of pairs wrongly, always by showing too many letters as present. A player using it would chase letters that are not there.'
            },
            {
              h3: 'When the simple rule is fine',
              p: 'For guesses with five different letters, the simple rule and the two-pass rule agreed on all 151,085 pairs. If repeated letters were banned from guesses, the eight-line version would be the better program: shorter and just as right.'
            },
            {
              h3: 'What the project teaches',
              p: 'Loops, conditions, counting with a dictionary, and the habit of testing the awkward cases. It also shows why programmers ask "what about duplicates?" about almost everything.'
            }
          ]
        },
        {
          kind: 'p',
          mt: true,
          html: 'The word list is our own, written for this exercise in Australian spelling, and every one of its 452 words has five letters. Learners usually build their own list from words they like, which changes the counts a little and the lesson not at all.'
        }
      ]
    },
    {
      id: 'lessons',
      tint: 'deep',
      eyebrow: 'How lessons feel',
      h2: 'What our lessons for learners over 50 are like',
      lede: 'The material is the same Python and web skills everyone learns. The way it is taught is shaped around the people in the room.',
      body: [
        {
          kind: 'three',
          cells: [
            {
              h3: 'Plain words',
              p: 'Every term is explained the first time it appears, and written in the lesson notes. Nobody is expected to know what an IDE or a terminal is.'
            },
            {
              h3: 'Notes after every lesson',
              p: 'A short written recap with the steps in order, so practice between lessons does not depend on memory of a video call.'
            },
            { h3: 'Screen and text size', p: 'Code is shown large, the teacher zooms when asked, and the learner can always say "go back".' }
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Projects learners in this age group often choose',
          head: ['Interest', 'A first project', 'What it teaches'],
          rows: [
            ['Family history', 'A program that sorts relatives by birth year and finds gaps', 'Lists, sorting and dates'],
            ['Garden or birdwatching', 'A log that totals sightings by month', 'Files, dictionaries and simple charts'],
            ['A club or community group', 'A small website with events and contact details', 'HTML, CSS and publishing'],
            ['Word and number puzzles', 'The word-puzzle marker above, then a solver', 'Logic, testing and duplicates'],
            ['Work', 'A script that tidies a weekly spreadsheet', 'Reading and writing data files']
          ]
        }
      ]
    },
    {
      id: 'honest',
      tint: '',
      eyebrow: 'Honest expectations',
      h2: 'What learning to code at 50 or 60 can and cannot promise',
      lede: 'Clear expectations make learning enjoyable. Here are ours.',
      body: [
        {
          kind: 'two',
          leftH3: 'What you can expect',
          left: [
            'Within a term of weekly lessons, most learners in this group write short programs of their own, read simple code written by others, and finish a first project they chose.',
            'Progress depends on practice between lessons more than on age; twenty minutes a few times a week is plenty.'
          ],
          rightH3: 'What we do not promise',
          right: [
            'We do not promise a job, a career change or any particular outcome. Some learners use coding at work; many simply enjoy it.',
            'We also make no claims about health or the brain. Coding is worth learning for what you can make with it.'
          ]
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Progress',
    h2: 'Four comfortable steps',
    lede: 'There is no deadline. Most learners reach the third step within two or three terms.',
    table: {
      caption: 'From first program to own project',
      head: ['Step', 'What you can do'],
      rows: [
        ['1. First programs', 'Run a program that asks a question and replies'],
        ['2. Small tools', 'Write a program that reads a list and does something useful with it'],
        ['3. Own project', 'Plan and finish a small project of your own choosing'],
        ['4. Sharing', 'Put a project online or share it with family, a club or colleagues']
      ]
    },
    left: {
      h3: 'Am I too old to start at 60?',
      ps: [
        'We teach people up to 67 in these classes, and starting at 60 is common. What matters is curiosity and a little regular practice.',
        'The first class is free, so there is nothing to lose by trying a lesson.'
      ]
    },
    right: {
      h3: 'Will I be in a class with teenagers?',
      ps: [
        'No. Adult groups are separate from school-age groups, and learners over 50 can ask for a group of people at a similar stage.',
        'One-to-one lessons are available for anyone who prefers them.'
      ]
    }
  },
  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses suited to learners over 50',
    lede: 'Adult courses only, grouped by where people like to start.',
    bands: [
      {
        num: 'I',
        h3: 'First programs',
        sub: 'From the beginning',
        courses: [
          {
            code: 'OFAU / FST / 01',
            slug: 'python-programming-masterclass-zero-to-advanced-college',
            title: 'Python from Zero',
            blurb: 'Steady steps from the first line.'
          },
          { code: 'OFAU / FST / 02', slug: 'html-css-course-for-beginners-build-real-websites', title: 'Build Real Websites', blurb: 'Pages you can share.' },
          {
            code: 'OFAU / FST / 03',
            slug: 'data-and-ai-analytics-for-non-programmers-course',
            title: 'Data for Non-Programmers',
            blurb: 'Spreadsheets to insight.'
          }
        ]
      },
      {
        num: 'II',
        h3: 'Useful next',
        sub: 'Once the basics feel easy',
        courses: [
          { code: 'OFAU / NXT / 01', slug: 'python-ai-automation-masterclass-college', title: 'Python Automation', blurb: 'Scripts for everyday chores.' },
          { code: 'OFAU / NXT / 02', slug: 'data-analysis-mastery-course-college', title: 'Data Analysis', blurb: 'Excel, SQL and Python.' },
          { code: 'OFAU / NXT / 03', slug: 'ai-tools-mastery-complete-college', title: 'AI Tools for Adults', blurb: 'Using AI with care and judgement.' }
        ]
      },
      {
        num: 'III',
        h3: 'Going further',
        sub: 'For the keen',
        courses: [
          {
            code: 'OFAU / FUR / 01',
            slug: 'full-stack-web-development-masterclass-college',
            title: 'Full Stack Web Development',
            blurb: 'From pages to applications.'
          },
          { code: 'OFAU / FUR / 02', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL and Databases', blurb: 'Organising larger collections.' },
          {
            code: 'OFAU / FUR / 03',
            slug: 'git-github-advanced-version-control-masterclass-for-professionals',
            title: 'Git and GitHub',
            blurb: 'Keeping every version safe.'
          }
        ]
      }
    ]
  },
  how: {
    eyebrow: 'How lessons run',
    h2: 'Afternoon, evening or weekend lessons',
    lede: 'Teachers based in India work hours that overlap Australian afternoons and evenings. Lessons are set in your own state time and follow your state\'s clock changes.',
    slots: [
      { time: 'Afternoon', l: 'Weekday lessons for those with free days.' },
      { time: 'Evening', l: 'For learners who still work.' },
      { time: 'Weekend', l: 'Unhurried project sessions.' }
    ],
    cells: [
      { h3: 'Free first class', p: 'A friendly first program and a chat about what you would like to make.' },
      { h3: 'Small adult groups', p: 'Learners at a similar stage, never mixed with children.' },
      { h3: 'One to one', p: 'Private lessons at exactly your pace.' },
      { h3: 'Written recaps', p: 'Steps in writing after every lesson.' },
      { h3: 'Any question welcome', p: 'Repeating a step is part of the plan.' },
      { h3: 'Your own projects', p: 'You choose what to build; we teach what it needs.' }
    ]
  },
  projectsH2: 'Things our learners have made',
  projectsLede: 'A sample of finished work our students chose to publish. See the <a class="ag-inline-link" href="/student-labs">student labs</a> for others.',
  reviewsLede: 'Unaltered reviews from our Google page, as people chose to write them.',
  fees: {
    h2: 'Fees for coding lessons over 50',
    lede: 'Australian learners pay a single monthly fee in US dollars. There is nothing to pay up front, and you can stop after any month without a penalty.',
    free: ['A first program written together', 'A conversation about your goals', 'No card or bank details'],
    group: ['Small adult groups', 'Learners at a similar stage', 'The same teacher each week', 'Stop after any month'],
    one: ['Lessons entirely at your pace', 'Your own project from the start', 'Afternoon, evening or weekend']
  },
  faq: {
    eyebrow: 'Learners ask',
    h2: 'Questions about learning to code over 50 in Australia',
    items: [
      {
        q: 'Is it worth learning to code over 50?',
        a: 'For many people, yes: for a personal project, a club or family website, or a skill that helps at work. We make no promises about jobs; we promise patient teaching and projects you choose.'
      },
      {
        q: 'Which language should I learn first?',
        a: 'Python for programs and small tools, or HTML and CSS for web pages. Both are readable and widely used, and the free class helps decide.'
      },
      {
        q: 'How many Australians study or train after 55?',
        a: 'In the ABS survey for 2024-25, 21.1% of people aged 55 to 64 and 6.0% of those aged 65 to 74 had studied or trained in the previous 12 months.'
      },
      {
        q: 'What is Be Connected?',
        a: 'It is an Australian government initiative, run through the eSafety Commissioner, that builds the confidence, digital skills and online safety of older Australians. It suits people for whom computers themselves are still new.'
      },
      { q: 'Do I need maths to code?', a: 'Only everyday arithmetic to start. Programs that need more maths can wait until you want to write them.' },
      { q: 'Will I be in a class with children?', a: 'No. Adult groups are separate, and one-to-one lessons are available too.' },
      {
        q: 'What computer do I need?',
        a: 'Any reasonably recent Windows, Mac or Linux computer with a keyboard and an internet connection. Tablets are not ideal for coding.'
      },
      {
        q: 'How much does it cost?',
        a: 'The first class is free. Monthly fees for groups and private lessons are shown in the fees section, with no contract.'
      }
    ]
  },
  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'Other places to look, including pages for adults of every age.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Where every Australian page starts.' },
      { href: '/one-on-one-coding-tutor-australia', label: 'One-on-one coding tutor', p: 'Private lessons at your pace.' },
      { href: '/online-coding-tutor-australia', label: 'Online coding tutor', p: 'What a good online lesson looks like.' },
      { href: '/problem-solving-through-coding-australia', label: 'Problem solving through coding', p: 'Puzzles explored with programs.' },
      { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Learn to think with AI', p: 'Using AI tools with judgement.' },
      { href: '/java-classes-online-australia', label: 'Java classes online', p: 'A second language, later on.' }
    ]
  },
  start: {
    h2: 'Book a free first class',
    lede: 'Leave your details and a convenient time, and we will ring. In the first lesson you write a small program with a teacher beside you, and we talk about what you would like to make.',
    readFirst: 'If you would like to know more first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or see <a class="ag-inline-link" href="/courses">our courses</a>.',
    note: 'You will hear from our team in India, so the number begins with +91; there is no Australian office. A WhatsApp message from an Australian mobile is usually answered quickest.',
    formNote: 'Free, no card, no obligation.'
  },
  footer: {
    cols: [
      {
        h4: 'Learning',
        links: [
          { href: '/one-on-one-coding-tutor-australia', label: 'One-on-one coding tutor' },
          { href: '/online-coding-tutor-australia', label: 'Online coding tutor' },
          { href: '/problem-solving-through-coding-australia', label: 'Problem solving through coding' },
          { href: '/how-we-teach', label: 'How we teach' }
        ]
      },
      {
        h4: 'Australia',
        links: [
          { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
          { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Learn to think with AI' },
          { href: '/java-classes-online-australia', label: 'Java classes online' },
          { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
        ]
      }
    ],
    bottomRight: 'Never too late to write the first line'
  },
  personalityCss: `
.ag-root.ag-ofau .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-ofau .ag-capsule { border-left-width: 6px; border-radius: 6px; }
.ag-root.ag-ofau .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-ofau .ag-table caption { text-align: left; font-weight: 610; }
.ag-root.ag-ofau .ag-band-head h3 { letter-spacing: -0.004em; }
.ag-root.ag-ofau .ag-slots { gap: 1.2rem; }
`,
  dossier: {
    curriculumAuthority: 'Australia, adults aged 50 to 67. ABS, Work-Related Training and Adult Learning, 2024-25 financial year: participation by age group and main reason for formal study by age group. eSafety Commissioner, Be Connected (government initiative for older Australians\' digital confidence, skills and safety).',
    localProject: 'Scoring a five-letter word-guessing game with repeated letters: our list of 452 everyday five-letter words, all 203,852 ordered guess and answer pairs; the simple rule differs from the two-pass rule on 16,837 (8.3%); all differences come from guesses with repeated letters (16,837 of 52,767, 31.9%); 0 of 151,085 otherwise, where the simple rule wins on brevity. Lesson family: repeated-letter scoring.',
    requiredMentions: [
      'Be Connected is an Australian government initiative committed to building the confidence, digital skills and online safety of older Australians',
      'Work-Related Training and Adult Learning, 2024-25 financial year',
      'personal development, at 46.2%',
      'increasing skills in their job came first, at 43.9%',
      'and the rule about repeated letters',
      'SHEEP',
      '16,837',
      'Ages 50 to 67'
    ],
    sources: [
      {
        claim: 'ABS, Work-Related Training and Adult Learning, 2024-25: participation by age group (formal study, work-related training, total); main reason for formal study by age group; components may not add to totals.',
        url: 'https://www.abs.gov.au/statistics/people/education/work-related-training-and-adult-learning/latest-release'
      },
      {
        claim: 'eSafety Commissioner, Be Connected: "Be Connected is an Australian government initiative committed to building the confidence, digital skills and online safety of older Australians."; free learning content and community computer classes.',
        url: 'https://beconnected.esafety.gov.au/'
      }
    ],
    rejectedClaims: [
      'Claims that coding keeps the mind sharp or benefits health: excluded on principle (no health claims).',
      'ABS figures on disability, health or personal cost of training in the same release: excluded topics (health, money).',
      'Age Pension or retirement ages: money and welfare topics, not used.',
      'Job or career-change outcomes for older learners: no promises on this page.',
      'The name of the best-known daily five-letter word game: a trade mark, so the game is described generically.'
    ]
  }
};
