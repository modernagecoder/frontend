'use strict';
// Art of Problem Solving alternative (ag- comparison door; UK and US exams cluster Phase 2, row US069). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md (writer brief, rule 10: named providers allowed; facts only
// from the publisher's own sites, dated; neutral criteria table; never prices; never "better"; trademarks are theirs).
// artofproblemsolving.com returned HTTP 403 on 31 October 2026 for /, /alcumus, /school, /academy and /store; not
// retried or circumvented. AoPS's own other sites were read raw with curl the same day; copies in
// keyword-research-2026-09/uk-us-gap/src/art-of-problem-solving-alternative/:
//  - aopsacademy.org (home): "AoPS Academy is an after-school enrichment program with a mission to teach problem solving
//    skills through advanced math, language arts, and science courses."; "In-Person Academic Year and Summer Courses for
//    Grades 1-12" (en dash written as "1 to 12" on the page); "Since 1993".
//  - aopsacademy.org/about: "opened the first AoPS Academy campus in 2016"; "over 20 locations in 12 states"; "1M+ AoPS
//    Learners"; "30+ Years of Curriculum Development"; timeline: 1993 The Art of Problem Solving, Volume 1; 2003 "The Art
//    of Problem Solving website launches in 2003 with online courses designed for high-performing math students"; "Our
//    first class was just a dozen students"; "over 1 million users on our forums"; 2012 Beast Academy, "comic-style
//    storylines and an interactive online platform"; 2016 first learning center in Morrisville, NC; "AoPS trains students
//    to approach hard problems by breaking them down into familiar parts."
//  - aopsacademy.org/locations: campus list, a Virtual Campus, and campuses in 12 states including Cambridge and
//    Lexington (Massachusetts) and the Upper West Side (New York City).
//  - beastacademy.com (home and /faq): "elementary school math program created by Art of Problem Solving (AoPS)"; "a full
//    math program from Art of Problem Solving for kids ages 6-13" (non-breaking hyphen written as a plain hyphen); use
//    "as a stand-alone curriculum or as a supplement"; "Level 5 of Beast Academy Online has the mathematical background
//    necessary for Art of Problem Solving (AoPS) prealgebra".
// Not used: prices, testimonials, founder and staff names (rule 7), AoPS Online course formats, class sizes and Alcumus
// details (artofproblemsolving.com 403; nothing claimed about them beyond the AoPS Academy timeline wording), AMC honor
// roll counts (an AoPS marketing figure, left out to stay neutral).
// Our own material, labelled: the criteria table rows describing Modern Age Coders, the decision steps, three worked
// examples of breaking a problem into familiar parts (sum of 1 to 50 = 1,275; 9 diagonals of a hexagon; 28, 29, 30),
// ten practice problems with answers checked in Python. Lesson family: breaking a hard problem into familiar
// parts, taught on our own problems.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'competition', tag: 'COMPARISON', blurb: 'Art of Problem Solving, AoPS Academy and Beast Academy described from their own sites, a neutral criteria table, and live help for students working through AoPS books.' },
  slug: 'art-of-problem-solving-alternative',
  code: 'aps',
  accent: '#82623A',
  accentRationale: 'Art of Problem Solving alternative: a walnut brown #82623A from the US allocation table, about 5.4:1 on paper #FBF8F2, neutral in tone for a comparison page',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'Art of Problem Solving alternative',
  title: 'Art of Problem Solving Alternative: AoPS Compared, and a Tutor',
  description: 'Art of Problem Solving alternatives and live help beside AoPS: AoPS Academy, Beast Academy and online routes in a neutral criteria table, plus a lesson.',
  ogDescription: 'AoPS Academy, Beast Academy and AoPS books described from AoPS\'s own sites, a neutral table of what to weigh, and how a live teacher can work alongside AoPS materials.',
  twitterDescription: 'Art of Problem Solving options compared neutrally, from AoPS\'s own sites.',
  pageName: 'Art of Problem Solving Alternative',
  webPageDescription: 'A neutral guide for families weighing the Art of Problem Solving family of programs (AoPS Academy, Beast Academy, AoPS books) against other routes such as live online classes, from AoPS\'s own websites, with a criteria table and a problem-solving lesson.',
  courseDescription: 'Live online problem-solving and olympiad math classes for students in grades 4 to 12, in a batch of 15 to 20 or one to one, that can run alongside AoPS books or on their own.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Art of Problem Solving alternative',
  navLinks: [
    { href: '#what', label: 'What AoPS is' },
    { href: '#criteria', label: 'Criteria' },
    { href: '#alongside', label: 'Alongside AoPS' },
    { href: '#parts', label: 'The lesson' },
    { href: '#practice', label: 'Practice' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Grades 1 to 12 &middot; AoPS Academy, Beast Academy and AoPS books &middot; A neutral comparison',
  h1: 'Art of Problem Solving alternative: AoPS compared, and a live tutor',
  lede: 'Art of Problem Solving, usually called AoPS, is the best known name in American problem-solving math, with textbooks, online courses, in-person AoPS Academy campuses and the Beast Academy program for younger children. Families who look for an alternative are often not leaving AoPS at all: they want a live teacher beside the books, a schedule that fits, or a route where there is no campus nearby. This page describes the AoPS family from its own websites as they read on 31 October 2026, sets out a neutral table of things to weigh, and then teaches one lesson in the AoPS spirit of breaking hard problems into familiar parts.',
  secondaryCta: { href: '#criteria', label: 'See the criteria table' },
  wa: 'Hello Modern Age Coders, my child works with Art of Problem Solving materials and we are looking at live help. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; grades K to 12',
  spec: [
    ['AoPS founded', 'Textbooks from 1993'],
    ['AoPS online courses', 'Since 2003'],
    ['Beast Academy', 'Since 2012, ages 6 to 13'],
    ['AoPS Academy', 'In person since 2016, grades 1 to 12'],
    ['Campuses', 'Over 20 locations in 12 states'],
    ['Our classes', 'Live online, grades 4 to 12'],
    ['Formats', 'Batch of 15 to 20, or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Art of Problem Solving (AoPS) publishes problem-solving math textbooks, has run online courses since 2003, runs AoPS Academy, an after-school enrichment program for grades 1 to 12 with over 20 campuses in 12 states, and created Beast Academy for ages 6 to 13. Modern Age Coders is an independent alternative: live online olympiad and problem-solving math, in a batch or 1-on-1, through our Olympiad Mathematics course.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Courses for students who love hard problems',
    lede: 'Our olympiad course, the middle school contest course, and algebra for the student meeting AoPS-style prealgebra and algebra.',
    items: [
      { course: 'olympiad-competition-mathematics-mastery', code: 'APS / 01', title: 'Olympiad mathematics', note: 'AMC 8 and 10 through AIME-style problem solving.' },
      { course: 'middle-school-math-competitions-course', code: 'APS / 02', title: 'Middle school competitions', note: 'MATHCOUNTS, AMC 8 and Kangaroo-style reasoning.' },
      { course: 'algebra-foundations-masterclass', code: 'APS / 03', title: 'Algebra foundations', note: 'Prealgebra and Algebra 1 taught for understanding.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'What AoPS is',
      h2: 'What is Art of Problem Solving?',
      lede: 'Art of Problem Solving began with a textbook in 1993 and grew into a family of programs: online courses from 2003, Beast Academy from 2012 and in-person AoPS Academy campuses from 2016. Its own sites describe all four.',
      body: [
        { kind: 'table', caption: 'The AoPS family as AoPS describes it (aopsacademy.org About and beastacademy.com, read 31 October 2026)', head: ['Year', 'Program', 'In AoPS&rsquo;s words, summarized'], rows: [
          ['1993', 'Textbooks', 'The Art of Problem Solving, Volume 1, first of a series of contest and subject textbooks'],
          ['2003', 'AoPS Online', 'The website launches with online courses designed for high-performing math students; the first class had a dozen students'],
          ['2012', 'Beast Academy', 'An elementary math program for ages 6 to 13 with comic-style storylines and an online platform'],
          ['2016', 'AoPS Academy', 'The first in-person learning center, in Morrisville, North Carolina; now over 20 locations in 12 states'],
          ['Today', 'Community', 'AoPS reports 1M+ learners and over 1 million users on its forums']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'AoPS Academy',
          left: [
            'AoPS describes the Academy as "an after-school enrichment program with a mission to teach problem solving skills through advanced math, language arts, and science courses", offering in-person academic year and summer courses for grades 1 to 12.',
            'Its locations page lists campuses in California, Georgia, Illinois, Maryland, Massachusetts, New Jersey, New York City, North Carolina, Oregon, Texas, Virginia and Washington, plus a Virtual Campus.'
          ],
          rightH3: 'Beast Academy',
          right: [
            'Beast Academy calls itself the "elementary school math program created by Art of Problem Solving", for "kids ages 6-13", usable "as a stand-alone curriculum or as a supplement".',
            'Its FAQ says a student who has completed Level 5 of Beast Academy Online "has the mathematical background necessary for Art of Problem Solving (AoPS) prealgebra". Our <a class="ag-inline-link" href="/beast-academy-tutor">Beast Academy tutor</a> page covers that program in detail.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://aopsacademy.org/about" rel="noopener" target="_blank">AoPS Academy, About</a>, <a class="ag-inline-link" href="https://aopsacademy.org/locations" rel="noopener" target="_blank">AoPS Academy locations</a>, <a class="ag-inline-link" href="https://beastacademy.com/faq" rel="noopener" target="_blank">Beast Academy FAQ</a>, read 31 October 2026. artofproblemsolving.com refused our requests that day, so nothing here is taken from it. Art of Problem Solving, AoPS, AoPS Academy, Beast Academy and Alcumus are trademarks of their owner; Modern Age Coders is not affiliated with them.' }
      ]
    },
    {
      id: 'why', tint: 'deep', eyebrow: 'Why families look',
      h2: 'Why do families look for an Art of Problem Solving alternative?',
      lede: 'Usually for practical reasons rather than doubts about the material: no campus nearby, a schedule clash, a wish for a live teacher who explains in conversation, or a child who needs help working through an AoPS book at home.',
      body: [
        { kind: 'table', caption: 'Common reasons families give us, and what each points to (our summary of conversations, not survey data)', head: ['What families say', 'What it usually points to'], rows: [
          ['"There is no AoPS Academy near us."', 'An online route: AoPS&rsquo;s own Virtual Campus or online courses, or a live online class elsewhere'],
          ['"My child is stuck on the AoPS book at home."', 'A tutor alongside the book, not a replacement for it'],
          ['"We want a teacher who talks it through live."', 'A live class or 1-on-1 lessons, whichever provider'],
          ['"Our schedule changes every term."', 'A format with flexible times or 1-on-1 booking'],
          ['"My younger child is not ready for the contest books."', 'Beast Academy, or a gentler problem-solving course first']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Staying with AoPS is often right',
          left: [
            'Many of these needs are met within the AoPS family itself, for example through its Virtual Campus or online courses. We say so plainly: if AoPS fits your child and your week, there is no reason to switch.',
            'What we offer is one more route, not a verdict on theirs.'
          ],
          rightH3: 'What an alternative should give',
          right: [
            'Whatever a family chooses, the test is the same: does the student meet problems slightly too hard, get time to struggle, and then see a clear explanation of the ideas? Those three things matter more than the name on the course.',
            'The criteria table below is built around exactly those questions.'
          ] }
      ]
    },
    {
      id: 'criteria', tint: 'tint', eyebrow: 'Criteria',
      h2: 'How do AoPS options and live online classes compare?',
      lede: 'A neutral table of what to weigh. The AoPS columns use only what AoPS publishes on the pages we could read; where we could not check a detail, the table says so. The last column describes our own classes. No prices are listed for anyone.',
      body: [
        { kind: 'table', caption: 'Criteria to weigh (AoPS columns from aopsacademy.org and beastacademy.com, read 31 October 2026; the last column is ours)', head: ['Criterion', 'AoPS Academy', 'Beast Academy', 'AoPS Online courses', 'Modern Age Coders'], rows: [
          ['Ages or grades', 'Grades 1 to 12', 'Ages 6 to 13', 'Described as for high-performing math students', 'Grades 4 to 12 for these courses; ages 6 to 67 overall'],
          ['Where', 'Over 20 campuses in 12 states, plus a Virtual Campus', 'Books and an online platform at home', 'Online', 'Live online, anywhere'],
          ['Subjects', 'Math, language arts and science', 'Elementary math', 'Math (details not checked: site unavailable to us)', 'Math, plus coding and AI courses'],
          ['Style', 'Discovery led by questions from instructors, with collaboration', 'Comic-style lessons and puzzles', 'Not checked', 'A live teacher; students explain before the teacher does'],
          ['Group or private', 'Cohort classes', 'Self-paced', 'Not checked', 'A batch of 15 to 20, or 1-on-1'],
          ['Works with AoPS books', 'Its own curriculum', 'Leads into AoPS prealgebra after Level 5', 'Its own curriculum', 'Yes; we can teach alongside them'],
          ['Schedule', 'Academic year and summer courses', 'Whenever the family chooses', 'Not checked', 'Weekdays or weekends, flexible; 1-on-1 at your convenience']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Start with the child.</b> Does your child enjoy being stuck for a while on a hard problem? If yes, almost any serious problem-solving program can work; if not, start gentler.',
          '<b>Check the format you can sustain.</b> A campus 40 minutes away, a fixed weekly slot, or flexible online time: pick the one you can keep for a full year.',
          '<b>Decide on books.</b> If you already own AoPS books, ask whether a provider will teach alongside them or uses its own curriculum.',
          '<b>Try before committing.</b> Sit in on a trial or first class anywhere you consider, and watch whether your child talks about the math afterwards.',
          '<b>Review after a term.</b> Is your child tackling harder problems than before, and explaining them? That is the only measure that matters.'
        ] },
        { kind: 'source', html: 'Sources: aopsacademy.org home, About and locations pages; beastacademy.com home and FAQ; read 31 October 2026. AoPS Online details could not be checked because artofproblemsolving.com returned an error to us; check them on AoPS&rsquo;s own site.' }
      ]
    },
    {
      id: 'alongside', tint: 'deep', eyebrow: 'Alongside AoPS',
      h2: 'Can a tutor help with Art of Problem Solving books?',
      lede: 'Yes. Many of our students keep their AoPS book as the main text and use our classes to talk through the problems they are stuck on, check their write-ups and fill gaps. We never do the problems for them.',
      body: [
        { kind: 'table', caption: 'How a session alongside an AoPS-style book runs (our method)', head: ['Part of the hour', 'What happens'], rows: [
          ['First 10 minutes', 'The student shows a problem they could not finish and explains how far they got'],
          ['Next 20 minutes', 'Hints, one at a time, until the student finds the idea themselves'],
          ['Next 20 minutes', 'Our own problem using the same idea, solved without hints'],
          ['Last 10 minutes', 'The student writes a clean solution and names the idea in one sentence']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we will and will not do',
          left: [
            'We give hints, ask questions and teach the idea behind a problem. We do not hand over worked solutions to book exercises, because finding them is the whole value of a problem-solving book.',
            'We also never copy pages or problems from any AoPS book into our materials. Our practice problems are written by our teachers.'
          ],
          rightH3: 'When a student is ready for contests',
          right: [
            'Students working through AoPS-style material often aim at MATHCOUNTS, the AMC 8 or the AMC 10. Our olympiad and middle school competition courses take them there with our own problem sets.',
            'For contest specifics, see our <a class="ag-inline-link" href="/math-olympiad-amc-tutoring">AMC and olympiad tutoring</a> and <a class="ag-inline-link" href="/mathcounts-preparation">MATHCOUNTS preparation</a> pages.'
          ] }
      ]
    },
    {
      id: 'parts', tint: 'tint', eyebrow: 'The lesson',
      h2: 'How do you break a hard problem into familiar parts?',
      lede: 'AoPS puts its own method in one line: it "trains students to approach hard problems by breaking them down into familiar parts." Here is how we teach that idea, with three worked examples written by us.',
      body: [
        { kind: 'ol', items: [
          '<b>Name what is unfamiliar.</b> What makes this problem feel new? Usually it is size (huge numbers), shape (an odd figure) or wording.',
          '<b>Find the familiar core.</b> Strip it down: a smaller case, a simpler shape, a known formula hiding inside.',
          '<b>Solve the small version.</b> Get a sure answer for the easy case and look at how you got it.',
          '<b>Rebuild.</b> Apply the same steps to the real problem.',
          '<b>Check with a second view.</b> A different method, or a case you can count by hand.'
        ] },
        { kind: 'p', mt: true, html: '<b>Example 1 (ours): a big sum.</b> What is 1 + 2 + 3 + ... + 50? Unfamiliar: fifty terms. Familiar core: 1 + 2 + 3 + 4, which is 10, and also (1 + 4) + (2 + 3), two pairs of 5. So pair the ends: 1 + 50, 2 + 49, and so on, 25 pairs of 51, total 1,275. Check with a small case: 1 to 4 gives 2 pairs of 5, which is 10. Correct.' },
        { kind: 'p', html: '<b>Example 2 (ours): an odd shape.</b> How many diagonals does a hexagon have? Unfamiliar: drawing them all gets messy. Familiar core: each corner connects to every other corner except itself and its two neighbors, so each of the 6 corners sends out 3 diagonals. That counts 18 ends, but each diagonal has two ends, so there are 9. Check by drawing a square: each corner sends 1, 4 ends, 2 diagonals. Correct.' },
        { kind: 'p', html: '<b>Example 3 (ours): wording that hides algebra.</b> The sum of three consecutive whole numbers is 87. What is the largest? Unfamiliar: three unknowns. Familiar core: the middle number is the average, so it is 87 / 3 = 29, and the numbers are 28, 29 and 30. The largest is 30. Check: 28 + 29 + 30 = 87. The familiar part was "average of evenly spaced numbers is the middle one".' },
        { kind: 'two', mt: true,
          leftH3: 'Why this transfers',
          left: [
            'The three examples share no topic: a sum, a shape and a sentence. They share a move, and that move is what lets a student face a problem they have never seen on a contest.',
            'This is why problem-solving programs of every kind, AoPS included, focus on method more than on any list of topics.'
          ],
          rightH3: 'How we practice it',
          right: [
            'Before solving, students must say what the familiar core is. Only then may they calculate.',
            'At the end, they write the core in one sentence. Over a term those sentences become their own toolkit.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice set',
      h2: 'Ten original problem-solving practice problems',
      lede: 'Written by our teachers at about the AMC 8 to early AMC 10 level. They are not from any AoPS book, class or Alcumus, and not from any contest. Find the familiar core first.',
      body: [
        { kind: 'ol', items: [
          '<b>What is the sum of the odd numbers from 1 to 99?</b>',
          '<b>How many diagonals does an octagon have?</b>',
          '<b>Five consecutive whole numbers add to 115. What is the smallest?</b>',
          '<b>How many trailing zeros does 25 x 24 x 23 x ... x 2 x 1 have?</b>',
          '<b>What is the ones digit of 7 multiplied by itself 2026 times?</b>',
          '<b>How many paths of length 4 go from the bottom-left to the top-right corner of a 2 by 2 grid of squares, moving only right or up along grid lines?</b>',
          '<b>A rectangle has area 48 and perimeter 28. What are its side lengths?</b>',
          '<b>What is 99 squared, without a calculator?</b>',
          '<b>How many positive whole numbers less than 100 are divisible by 6 but not by 4?</b>',
          '<b>The mean of a list of 10 numbers is 12. Adding one number makes the mean 13. What number was added?</b>'
        ] },
        { kind: 'table', mt: true, caption: 'Answers and the familiar core of each (ours; checked in Python)', head: ['No.', 'Answer', 'Familiar core'], rows: [
          ['1', '2,500', 'The first n odd numbers add to n squared; here n is 50'],
          ['2', '20', 'Each of 8 corners sends 5 diagonals; 40 ends, halved'],
          ['3', '21', 'The middle number is 115 / 5 = 23'],
          ['4', '6', 'Count factors of 5: 5, 10, 15, 20 give one each, 25 gives two'],
          ['5', '9', 'Ones digits cycle 7, 9, 3, 1; 2026 leaves remainder 2 on division by 4'],
          ['6', '6', 'Choose which 2 of the 4 moves are right'],
          ['7', '6 and 8', 'Two numbers with sum 14 and product 48'],
          ['8', '9,801', '(100 minus 1) squared = 10,000 minus 200 + 1'],
          ['9', '8', '16 multiples of 6 below 100, minus the 8 multiples of 12'],
          ['10', '23', 'Totals 120 and 143; the difference']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where students slip',
          left: [
            'Problem 4 is usually answered 5, forgetting that 25 holds two factors of 5. Problem 9 tempts students to subtract multiples of 4 rather than of 12, the numbers divisible by both 6 and 4.',
            'Problem 6 can be done by drawing every path, which is a fine check; the counting idea makes the 3 by 3 version easy too.'
          ],
          rightH3: 'Then harder material',
          right: [
            'Students who finish these comfortably are ready for full contest-length sets. We set those from our own problem bank in class.',
            'Students using AoPS books can bring the chapter they are on, and we will match the practice to it.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four stages of a problem solver',
    lede: 'Our own description of how students grow on hard problems, whichever program they use.',
    table: { caption: 'From stuck to fluent (our stages)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Tries', 'Writes down a small case instead of waiting'],
      ['2. Simplifies', 'Finds a familiar core without prompting'],
      ['3. Proves', 'Explains why an answer must be right'],
      ['4. Extends', 'Asks what happens with a bigger or different version']
    ] },
    left: { h3: 'For parents', ps: [
      'Struggle is part of the method. A child stuck for ten minutes on a good problem is not failing; they are doing the work.',
      'Ask your child to explain one problem a week to you. If they can, the idea has stuck.'
    ] },
    right: { h3: 'For students', ps: [
      'When a problem looks huge, try it with small numbers first. The pattern often appears by the third case.',
      'Write the familiar core in your notebook after every solved problem.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for keen problem solvers',
    lede: 'Live online classes with a teacher who knows the student, in a group batch or one to one.',
    bands: [
      { num: 'I', h3: 'Contest math', sub: 'Grades 5 to 12', courses: [
        { code: 'APS / CON / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'AMC to AIME problem solving.' },
        { code: 'APS / CON / 02', slug: 'middle-school-math-competitions-course', title: 'Middle school competitions', blurb: 'MATHCOUNTS and AMC 8.' },
        { code: 'APS / CON / 03', slug: 'statistics-probability-maths-course', title: 'Counting and probability', blurb: 'Chance and combinations.' }
      ] },
      { num: 'II', h3: 'Core math done deeply', sub: 'Grades 4 to 12', courses: [
        { code: 'APS / COR / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Prealgebra and Algebra 1.' },
        { code: 'APS / COR / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Grades 6 to 8.' },
        { code: 'APS / COR / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Through calculus.' }
      ] },
      { num: 'III', h3: 'Younger and wider', sub: 'Before contests, and beyond math', courses: [
        { code: 'APS / YNG / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Grades 1 to 5.' },
        { code: 'APS / YNG / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'First puzzles.' },
        { code: 'APS / YNG / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Patterns checked in Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live problem-solving classes, wherever you live',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, in your time zone.' },
      { time: 'Weekends', l: 'Longer sessions for hard sets.' },
      { time: '1-on-1', l: 'Beside your child&rsquo;s own book.' }
    ],
    cells: [
      { h3: 'Hints, not answers', p: 'The student finds the idea.' },
      { h3: 'Familiar core', p: 'Named before any calculation.' },
      { h3: 'Write-ups', p: 'Clean solutions, checked by the teacher.' },
      { h3: 'Own problems', p: 'Written by our teachers.' },
      { h3: 'No campus needed', p: 'Live online across the US.' },
      { h3: 'Group size', p: 'Batches of 15 to 20, or a single student.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Problem solvers often enjoy code too; there are student examples on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents have written on Google, shown unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'Our fee covers only our own classes; we do not list or compare anyone else&rsquo;s prices. Billing is monthly, so a family can use us for one term beside any other program.',
    free: ['A free first class', 'A problem from your child&rsquo;s book, talked through', 'No card'],
    group: ['A batch of 15 to 20', 'A regular teacher', 'Choose your batch', 'Monthly billing'],
    one: ['A private teacher', 'Matched to the book or contest', 'Flexible scheduling']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Art of Problem Solving alternatives: what families ask',
    items: [
      { q: 'What is Art of Problem Solving?', a: 'Art of Problem Solving (AoPS) publishes problem-solving math textbooks, first in 1993, and has offered online courses since 2003. It also runs the in-person AoPS Academy and created Beast Academy for younger children, according to its own sites.' },
      { q: 'What is AoPS Academy?', a: 'AoPS describes AoPS Academy as an after-school enrichment program teaching problem solving through advanced math, language arts and science. It offers in-person courses for grades 1 to 12 at over 20 locations in 12 states, plus a Virtual Campus.' },
      { q: 'Is there an alternative to AoPS if there is no campus near us?', a: 'AoPS itself has a Virtual Campus and online courses. Live online classes from other providers, including Modern Age Coders, are another route; compare them on the criteria that matter to your child.' },
      { q: 'Can a tutor help my child with AoPS books?', a: 'Yes. We teach alongside AoPS books with hints and questions, then set our own problems on the same idea. We do not hand over solutions to book exercises or copy book pages.' },
      { q: 'What age is Beast Academy for?', a: 'Beast Academy describes itself as a full math program from Art of Problem Solving for kids ages 6 to 13. Its FAQ says finishing Level 5 online gives the background for AoPS prealgebra.' },
      { q: 'Is Modern Age Coders better than AoPS?', a: 'We do not make that claim. AoPS is a long-established program that suits many students; we offer a different format, live online with a regular teacher, and families should choose by fit.' },
      { q: 'Do you use Alcumus or AoPS problems in class?', a: 'No. We use problems written by our own teachers. Alcumus and AoPS materials belong to their owner, and we are not affiliated with it.' },
      { q: 'Does your class prepare for the AMC?', a: 'Our olympiad and middle school competition courses work on AMC 8 and AMC 10 style problem solving with our own problem sets. We make no score or qualification promises.' },
      { q: 'What days and times are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with Art of Problem Solving?', a: 'No. Modern Age Coders is independent and has no connection with Art of Problem Solving, AoPS Academy or Beast Academy. Their names are trademarks of their owner.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More on curricula and contests',
    lede: 'Help beside other programs, and the contests problem solvers aim for.',
    items: [
      { href: '/beast-academy-tutor', label: 'Beast Academy tutor', p: 'Live help beside AoPS&rsquo;s elementary program.' },
      { href: '/russian-school-of-mathematics-alternative', label: 'Russian School of Mathematics alternative', p: 'Another program families weigh.' },
      { href: '/math-olympiad-amc-tutoring', label: 'AMC and olympiad tutoring', p: 'Where many problem solvers head.' },
      { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation', p: 'The middle school team contest.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Middle school math competitions', p: 'Three contests compared.' },
      { href: '/accelerated-math-program-online', label: 'Accelerated math online', p: 'Moving ahead of grade level with depth.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Bring a problem your child is stuck on, from any book. The teacher works through it with hints, then gives one of our own problems on the same idea and tells you what they noticed.',
    readFirst: 'For how a lesson is built, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or look over <a class="ag-inline-link" href="/courses">every course we run</a>.',
    note: 'Our teachers are based in India and teach live at times arranged for US evenings and weekends. Most families message us on WhatsApp first.',
    formNote: 'The first class is free and asks for no card.'
  },

  footer: {
    cols: [
      { h4: 'Curricula', links: [
        { href: '/beast-academy-tutor', label: 'Beast Academy tutor' },
        { href: '/russian-school-of-mathematics-alternative', label: 'RSM alternative' },
        { href: '/saxon-math-tutor', label: 'Saxon math tutor' },
        { href: '/accelerated-math-program-online', label: 'Accelerated math online' }
      ] },
      { h4: 'Contests', links: [
        { href: '/math-olympiad-amc-tutoring', label: 'AMC and olympiad tutoring' },
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation' },
        { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo USA' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'Find the familiar part first'
  },

  personalityCss: `
.ag-root.ag-aps .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-aps .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-aps .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-aps .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-aps .ag-steps li { line-height: 1.6; }
.ag-root.ag-aps .ag-grid-2 { gap: 1.6rem; }
`,

  dossier: {
    curriculumAuthority: 'Art of Problem Solving\'s own sites other than artofproblemsolving.com (403), read raw on 31 October 2026: aopsacademy.org home (after-school enrichment program, grades 1 to 12, math, language arts and science), About (first campus 2016, over 20 locations in 12 states, 1M+ learners, timeline 1993, 2003, 2012, 2016, forum users, breaking hard problems into familiar parts), locations (campuses by state, Virtual Campus); beastacademy.com home and FAQ (created by AoPS, ages 6 to 13, stand-alone or supplement, Level 5 to AoPS prealgebra).',
    localProject: 'Our neutral criteria table (Modern Age Coders column ours; AoPS Online cells marked not checked), the five decision steps, the session plan alongside AoPS books, three original worked examples (1 to 50 sums to 1,275; a hexagon has 9 diagonals; 28, 29, 30), ten original practice problems with answers checked in Python. Lesson family: breaking a hard problem into familiar parts.',
    requiredMentions: ['an after-school enrichment program with a mission to teach problem solving skills through advanced math, language arts, and science courses', 'over 20 locations in 12 states', 'trains students to approach hard problems by breaking them down into familiar parts.', 'elementary school math program created by Art of Problem Solving', 'has the mathematical background necessary for Art of Problem Solving (AoPS) prealgebra', 'Morrisville, North Carolina', 'the first class had a dozen students', '25 pairs of 51, total 1,275', 'each of the 6 corners sends out 3 diagonals', 'Count factors of 5: 5, 10, 15, 20 give one each, 25 gives two'],
    sources: [
      { claim: 'AoPS Academy: after-school enrichment, grades 1 to 12, subjects.', url: 'https://aopsacademy.org/' },
      { claim: 'AoPS timeline (1993 textbooks, 2003 online courses, 2012 Beast Academy, 2016 Academy), over 20 locations in 12 states, learners and forum users, method.', url: 'https://aopsacademy.org/about' },
      { claim: 'AoPS Academy campus list by state and Virtual Campus.', url: 'https://aopsacademy.org/locations' },
      { claim: 'Beast Academy: created by AoPS, ages 6 to 13, stand-alone or supplement, Level 5 to AoPS prealgebra.', url: 'https://beastacademy.com/faq' }
    ],
    rejectedClaims: [
      'artofproblemsolving.com (home, Alcumus, AoPS Online, store): HTTP 403 on 31 October 2026; not retried. AoPS Online formats, class sizes and Alcumus details are not described; the criteria table says "not checked".',
      'Any AoPS, AoPS Academy or Beast Academy price: not printed (rule 10).',
      'AMC honor roll counts and testimonials on aopsacademy.org: not used, to keep the comparison neutral.',
      'Founder, director and editor names: not used (rule 7).',
      'Any claim that Modern Age Coders is better than AoPS: not made; the FAQ says so explicitly.',
      'Any AoPS book or Alcumus problem: not reproduced; all problems are ours.',
      'Any affiliation with Art of Problem Solving: none, stated on the page.'
    ]
  }
};
