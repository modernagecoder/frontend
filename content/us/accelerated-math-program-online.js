'use strict';
// Accelerated math program online (ag- maths door; UK and US exams cluster, row US007, priority A).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Sources read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/accelerated-math-program-online/):
//  - CCSS mathematics PDF (learning.ccsso.org), page 84 "Note on courses and transitions": standards "do not mandate the
//    sequence of high school courses"; "many students in the U.S. today take Algebra I in the 8th grade, and in some states
//    this is a requirement"; "The K-7 standards contain the prerequisites to prepare students for Algebra I by 8th grade";
//    "some of the highest priority content for college and career readiness comes from Grades 6-8".
//  - Texas Education Agency, Middle School Advanced Mathematics Program page: Senate Bill 2124 (2023), TEC section 28.029,
//    19 TAC section 74.2101; purpose to "increase the number of students who complete advanced mathematics courses in high
//    school"; automatic enrollment of sixth graders in the top 40 percent on Grade 5 Math STAAR or a local measure; parent
//    opt-out; TEKS courses 19 TAC 111.29 to 111.31 (Grade 8, Middle School Advanced Mathematics, Algebra I); crosswalks
//    "provide information about how the TEKS were compacted".
//  - TEA program FAQ: implementation "no later than the 2024-2025 school year" (en dash in the source written as "to");
//    "students must demonstrate proficiency in all the TEKS for grades 6-8 mathematics prior to enrolling in Algebra 1";
//    a course covering all grade 6 and 7 standards takes "the higher level (i.e., grade 7) STAAR"; grade 8 Algebra I
//    students take the STAAR Algebra I EOC; "Students who take the Algebra 1 EOC must take the ACT or the SAT in high school."
//  - Washington RCW 28A.320.195: academic acceleration policy "By the 2021-22 school year"; automatic enrollment "in the
//    next most rigorous level of advanced courses or program offered by the high school".
//  - Seattle Public Schools, Highly Capable Summer Math Program page: three sixth-grade options; "Highly Capable (HC)
//    identification is not a requirement."; progressions Compacted Math 7/8, Algebra, Geometry, AP Calculus by junior or
//    senior year. Individual schools named on that page are not repeated.
//  - San Francisco Unified (SFUSD) announcement, 26 March 2026: Algebra I at all middle and K-8 schools from 2026-27;
//    Expanded Math (Math 8 and Algebra I); Braided Compression pilot "covering Math 6-8 and Algebra I over three years"
//    (pilot school names not repeated).
//  - Montgomery County Public Schools (MD) mathematics page: "Algebra readiness can occur at different points in a
//    student's maturation."
//  - Blocked, not retried: California leginfo (403), CDE (303 loop), North Carolina ncleg.gov (403), Fairfax County (403),
//    Arlington (403), Illinois ilga.gov and isbe.net (no connection).
// Our own material, labelled: the sequence table summary, the "what gets compressed" table, worked examples (printer 15
// pages per minute; -3/4 divided by 1/2 = -3/2; line through (2, 5) and (6, 13) is y = 2x + 1; system with y = -x + 10 gives
// (3, 7); 2^3 x 2^-5 = 1/4; legs 9 and 12 give 15; x^2 + 7x + 12 = (x + 3)(x + 4)); readiness checklist; plan.
// Lesson family: compression mapped topic by topic (which grade 7 idea carries which grade 8 idea).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MATH', blurb: 'Help for students on an accelerated or compacted middle school math track, with the state and district rules quoted from their own pages.' },
  slug: 'accelerated-math-program-online',
  code: 'acpr',
  accent: '#1A7551',
  accentRationale: 'Accelerated math program: a deep pine green, #1A7551 as allocated, 5.34:1 on #FBF8F2 and 4.60:1 on #EDE7DA, a forward-moving color kept dark enough to pass on all three papers',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'Accelerated math program online',
  title: 'Accelerated Math Program Online: Compacted Math Help',
  description: 'Live online help for accelerated and compacted middle school math tracks: how compaction works, what Texas, Washington and US districts publish, and worked examples.',
  ogDescription: 'Accelerated math compresses three years into two. The state and district rules from their own pages, what gets squeezed, and live online lessons that keep a student on the faster track.',
  twitterDescription: 'Accelerated and compacted middle school math, explained from state and district sources.',
  pageName: 'Accelerated Math Program Online',
  webPageDescription: 'A guide for US families to accelerated and compacted middle school math: what the Common Core says about Algebra I in grade 8, the Texas Middle School Advanced Mathematics Program, Washington academic acceleration law, published district pathways, and live online lessons for students on a compacted track.',
  courseDescription: 'Live online accelerated math lessons for US middle school students on compacted tracks, from grade 6 math to Algebra 1, in a group of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Accelerated math program',
  navLinks: [
    { href: '#what', label: 'What it is' },
    { href: '#rules', label: 'State rules' },
    { href: '#districts', label: 'District tracks' },
    { href: '#compressed', label: 'What gets squeezed' },
    { href: '#ready', label: 'Is it right?' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 5 to 8 &middot; Accelerated and compacted math',
  h1: 'Accelerated math program online',
  lede: 'An accelerated or compacted math track moves a middle schooler through three years of math in two, so Algebra 1 lands in grade 8, or even grade 7, instead of grade 9. That one decision changes the whole high school ladder, which is why families care about it so much. It also changes the pace in class: topics that used to get a month now get two weeks. This page explains how acceleration works using the published rules of states and districts, shows exactly which topics are compressed, and describes how our live lessons help a student keep up on the faster track or get ready for it.',
  secondaryCta: { href: '#compressed', label: 'See what gets compressed' },
  wa: 'Hello Modern Age Coders, my child in the US is on (or wants to join) an accelerated math track. Could we book a free first class?',
  heroNote: 'Live math and coding teaching since 2020 &middot; 10,000+ students &middot; grades K to 12',
  spec: [
    ['What it is', 'Three years of math in two'],
    ['Usual goal', 'Algebra 1 in grade 8'],
    ['Texas', 'Automatic enrollment by law'],
    ['Washington', 'Acceleration policy by law'],
    ['Lessons', 'Live, online'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'An accelerated math program, often called compacted math, is a middle school track set by each state or district that covers grades 6, 7 and 8 math plus Algebra 1 in fewer years, so students take Algebra 1 in grade 8 or earlier. Texas law requires automatic enrollment for strong grade 5 performers. Modern Age Coders helps students on these tracks live online, in a group of 15 to 20 or one to one, through our Middle School Mathematics course. The first class is free.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for students on a faster track',
    lede: 'Pick the one that matches where the student is now, not where the track is heading.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'ACPR / 01', title: 'Middle school math, grades 6 to 8', note: 'Ratios, rational numbers, equations and functions at a compacted pace.' },
      { course: 'algebra-foundations-masterclass', code: 'ACPR / 02', title: 'Algebra foundations', note: 'Pre-algebra into Algebra 1, for grade 7 or 8.' },
      { course: 'middle-school-math-competitions-course', code: 'ACPR / 03', title: 'Middle school math competitions', note: 'Depth and problem solving for students already ahead.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'What it is',
      h2: 'What is an accelerated or compacted math program?',
      lede: 'It is a course sequence, not a separate curriculum. The same middle school standards are taught, but in fewer years, so a student reaches Algebra 1 a year or more early. The Common Core standards were written to allow this.',
      body: [
        { kind: 'two',
          leftH3: 'What the standards say about Algebra I in grade 8',
          left: [
            'A note near the end of the Common Core mathematics document says the standards "do not mandate the sequence of high school courses". It goes on: "many students in the U.S. today take Algebra I in the 8th grade, and in some states this is a requirement."',
            'It then adds the line that makes compaction possible: "The K-7 standards contain the prerequisites to prepare students for Algebra I by 8th grade". In other words, an accelerated track is not skipping content. It is fitting the grade 8 standards in alongside grade 7 so that grade 8 is free for Algebra I.'
          ],
          rightH3: 'Why middle school matters so much',
          right: [
            'The same note warns against rushing past grades 6 to 8: "some of the highest priority content for college and career readiness comes from Grades 6-8", naming ratio reasoning, fluent work with negative fractions and decimals, and angle, area, surface area and volume problems.',
            'That is the honest tension in acceleration. The middle school topics being compressed are among the most important in the whole sequence, so a student on a faster track needs them taught well, not just faster.'
          ] },
        { kind: 'table', mt: true, caption: 'Three common middle school sequences (our summary of the published pathways quoted on this page)', head: ['Track', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9'], rows: [
          ['On level', 'Math 6', 'Math 7', 'Math 8', 'Algebra 1'],
          ['Accelerated by one year', 'Math 6', 'Compacted Math 7 and 8', 'Algebra 1', 'Geometry'],
          ['Accelerated by two years', 'Compacted Math 7 and 8', 'Algebra 1', 'Geometry', 'Algebra 2']
        ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://learning.ccsso.org/wp-content/uploads/2022/11/ADA-Compliant-Math-Standards.pdf" rel="noopener" target="_blank">Common Core State Standards for Mathematics</a>, "Note on courses and transitions", page 84, read 31 October 2026. Course names differ by district. Modern Age Coders is independent and is not connected with any state, district or the Common Core initiative.' }
      ]
    },
    {
      id: 'rules', tint: 'deep', eyebrow: 'State rules',
      h2: 'Which states require accelerated math?',
      lede: 'Most states leave acceleration to districts, but some write it into law. Texas requires a middle school advanced math program with automatic enrollment, and Washington requires districts to automatically place qualifying students into advanced high school courses.',
      body: [
        { kind: 'table', caption: 'Two state acceleration laws, from the states\' own pages (read 31 October 2026)', head: ['Point', 'Texas', 'Washington'], rows: [
          ['Law', 'Senate Bill 2124 (2023), Texas Education Code section 28.029; state rule 19 TAC section 74.2101', 'RCW 28A.320.195, academic acceleration for high school students'],
          ['Starts', 'Districts implement no later than the 2024 to 2025 school year (TEA FAQ)', 'Policy adopted "By the 2021-22 school year"'],
          ['Who is placed', 'Sixth graders in the top 40 percent on Grade 5 Math STAAR, or on a local measure', 'Students who meet or exceed standard on the grade 8 or high school math assessment'],
          ['Placed into', 'A middle school advanced mathematics program designed to reach Algebra I in grade 8', '"the next most rigorous level of advanced courses or program offered by the high school"'],
          ['Family choice', 'A parent or guardian may opt the student out', 'Districts may add criteria that do not create inequities between student groups']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Texas: the courses and the compaction',
          left: [
            'The Texas Education Agency says the program\'s purpose is to "increase the number of students who complete advanced mathematics courses in high school." The state adopted three courses in 19 TAC sections 111.29 to 111.31, ending with Grade 8, Middle School Advanced Mathematics, Algebra I.',
            'TEA publishes crosswalks between these courses and the on-level grades, which it says "provide information about how the TEKS were compacted." For a family, that crosswalk is the clearest map available of which grade 8 topics have moved into grade 6 or 7.'
          ],
          rightH3: 'Texas: what it means for tests',
          right: [
            'The TEA FAQ says that if an advanced course covers all of grade 6 and grade 7 in one year, students take "the higher level (i.e., grade 7) STAAR mathematics assessment", and a grade 8 student in Algebra I takes the STAAR Algebra I end-of-course test.',
            'It adds a detail many families miss: "Students who take the Algebra 1 EOC must take the ACT or the SAT in high school." For students aiming at Algebra I in grade 7, TEA says districts may go further, but students "must demonstrate proficiency in all the TEKS for grades 6-8 mathematics prior to enrolling in Algebra 1."'
          ] },
        { kind: 'source', html: 'Sources: TEA <a class="ag-inline-link" href="https://tea.texas.gov/educators/subject-areas/middle-school-advanced-mathematics-program" rel="noopener" target="_blank">Middle School Advanced Mathematics Program</a> and its <a class="ag-inline-link" href="https://tea.texas.gov/educators/subject-areas/middle-school-advanced-mathematics-program-faq" rel="noopener" target="_blank">FAQ</a>; Washington <a class="ag-inline-link" href="https://app.leg.wa.gov/RCW/default.aspx?cite=28A.320.195" rel="noopener" target="_blank">RCW 28A.320.195</a>; read 31 October 2026. Other states have their own rules; some state sites could not be read when we checked, so they are not described here.' }
      ]
    },
    {
      id: 'districts', tint: 'tint', eyebrow: 'District tracks',
      h2: 'How do school districts run compacted math?',
      lede: 'Districts design their own tracks, and the published versions differ a lot. Three public school districts show the range: one offers several entry points, one is opening Algebra I in grade 8 to every middle school, and one stresses that readiness comes at different ages.',
      body: [
        { kind: 'two',
          leftH3: 'Seattle Public Schools: three sixth-grade options',
          left: [
            'Seattle Public Schools says it offers "three options for math enrollment in sixth grade for exceptional math learners", with eligibility "determined by math MAP (RIT) scores", and states that "Highly Capable (HC) identification is not a requirement."',
            'Its published progressions run from Math 6 then Compacted Math 7/8 then Algebra in grade 8, with AP Calculus by senior year, to Compacted Math 7/8 in grade 6, Algebra in grade 7 and Geometry in grade 8, with AP Calculus by junior year. One route adds a district online summer course before grade 6.'
          ],
          rightH3: 'San Francisco Unified: Algebra I for grade 8',
          right: [
            'In a 26 March 2026 announcement, SFUSD said its board approved a revised Math Placement Policy and that "Beginning in the 2026-27 school year, Algebra I will be offered at ALL SFUSD middle and K-8 schools".',
            'At most schools this is "Expanded Math", where eligible eighth graders are automatically enrolled in both Math 8 and Algebra I. The district is also piloting "Braided Compression", an accelerated pathway "covering Math 6-8 and Algebra I over three years", at two schools.'
          ] },
        { kind: 'p', mt: true, html: 'Montgomery County Public Schools in Maryland puts the other side of the argument plainly on its mathematics page: "Algebra readiness can occur at different points in a student\'s maturation." It also says students "are best served by Algebra 1 when they demonstrate prerequisite mathematical understandings, skills, and readiness." Acceleration is a good fit for some students at 11 and for others at 13, and the published pathways leave room for both.' },
        { kind: 'source', html: 'Sources: Seattle Public Schools <a class="ag-inline-link" href="https://www.seattleschools.org/departments/highly-capable/highly-capable-summer-math-program/" rel="noopener" target="_blank">Highly Capable Summer Math Program</a> (2026 program, now closed); <a class="ag-inline-link" href="https://www.sfusd.edu/announcements/2026-03-26-board-education-approves-revised-math-placement-policy" rel="noopener" target="_blank">SFUSD announcement, 26 March 2026</a>; <a class="ag-inline-link" href="https://www.montgomeryschoolsmd.org/curriculum/math/" rel="noopener" target="_blank">MCPS mathematics</a>; read 31 October 2026. We are not connected with any of these districts; check your own district\'s current policy.' }
      ]
    },
    {
      id: 'compressed', tint: 'deep', eyebrow: 'What gets squeezed',
      h2: 'What does compacted math leave less time for?',
      lede: 'Every grade 7 and grade 8 standard is still taught, so the squeeze shows up as less practice time per topic. These are the topics where we most often see gaps in students who moved up a track, with our own examples at the level the track expects.',
      body: [
        { kind: 'table', caption: 'Topics under pressure on a compacted grade 7 and 8 year, with worked examples (topics from the Common Core grade 7 and 8 standards; examples and commentary ours)', head: ['Topic', 'Why it gets squeezed', 'Our example', 'Answer'], rows: [
          ['Proportional relationships (grade 7)', 'Taught quickly to reach linear functions', 'A printer makes 45 pages in 3 minutes. Write the relationship.', 'y = 15x, 15 pages per minute'],
          ['Operations with negative fractions (grade 7)', 'Assumed from grade 6 and rushed', '&minus;3/4 &divide; 1/2', '&minus;3/2'],
          ['Slope and equations of lines (grade 8)', 'Arrives months earlier than on level', 'The line through (2, 5) and (6, 13)', 'Slope 8/4 = 2, so y = 2x + 1'],
          ['Systems of two equations (grade 8)', 'Often one short unit', 'y = 2x + 1 and y = &minus;x + 10', '3x = 9, so (3, 7)'],
          ['Integer exponents (grade 8)', 'Rules learned without reasons', '2<sup>3</sup> &times; 2<sup>&minus;5</sup>', '2<sup>&minus;2</sup> = 1/4'],
          ['Pythagorean Theorem (grade 8)', 'Squeezed by the geometry unit', 'Legs of 9 and 12', 'Hypotenuse 15, since 81 + 144 = 225'],
          ['Factoring (Algebra 1)', 'Needs fluent multiplication facts', 'x<sup>2</sup> + 7x + 12', '(x + 3)(x + 4)']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How the ideas connect',
          left: [
            'The printer example and the line example are the same idea a year apart. A proportional relationship, y = 15x, is a line through the origin; a linear function, y = 2x + 1, is the same thing shifted up. A student who understood grade 7 well finds slope easy. A student who rushed through it meets slope as a new formula.',
            'That is why our tutors teach a compacted year by linking each grade 8 idea to the grade 7 idea underneath it, rather than as two separate courses pressed together.'
          ],
          rightH3: 'Warning signs a student is struggling',
          right: [
            'Grades usually hold up for a while, because a strong student can memorize procedures. The early signs are different: avoiding word problems, not being able to explain a step, and sign errors with negative numbers that were not there the year before.',
            'If those appear in the first unit of a compacted course, a few weeks of focused help on the underlying grade 7 topics usually costs less time than falling behind for a whole year.'
          ] }
      ]
    },
    {
      id: 'ready', tint: 'tint', eyebrow: 'Is it right for my child?',
      h2: 'Should my child take accelerated math?',
      lede: 'It depends on readiness, interest and the alternatives your district offers, and only the family and the school can decide. These are the questions we suggest asking, with a short readiness check written by us.',
      body: [
        { kind: 'ol', items: [
          '<b>Read your district\'s published pathway.</b> Find where the track leads in high school and whether there is a way back to on level if needed.',
          '<b>Check the placement rule.</b> In Texas, automatic enrollment follows the state rule; elsewhere it is a district decision, often using a test score, grades and teacher input.',
          '<b>Look at fluency, not just grades.</b> Can the student work with fractions, negatives and ratios quickly and explain the steps?',
          '<b>Ask about interest.</b> Students who enjoy math tend to handle a faster pace well. Students pushed into it often find the second year hard.',
          '<b>Plan the support.</b> Decide in advance what happens if the first unit goes badly: extra help, a check-in with the teacher, or a later move.'
        ] },
        { kind: 'table', mt: true, caption: 'A quick readiness check before a compacted grade 7 and 8 year (ours; answers in brackets)', head: ['Skill', 'Problem', 'Answer'], rows: [
          ['Ratio reasoning', '3 notebooks cost the same as 2 binders. How many notebooks match 10 binders?', '(15)'],
          ['Fractions', '2/3 &divide; 4/9', '(3/2)'],
          ['Negatives', '&minus;7 &minus; (&minus;12)', '(5)'],
          ['Expressions', 'Simplify 3(2x &minus; 4) &minus; 2x', '(4x &minus; 12)'],
          ['Equations', '5x + 3 = 2x + 18', '(x = 5)'],
          ['Percent', '15 is what percent of 60?', '(25%)']
        ] },
        { kind: 'p', mt: true, html: 'Our rule of thumb, not a district rule: a student who gets five or six of these right without help, and can explain how, is usually ready for the faster pace. A student who gets three or four is often ready after a few weeks of focused work. This check is ours and is not used by any school for placement.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four situations we see with accelerated math',
    lede: 'Families usually come to us at one of these points.',
    table: { caption: 'Common starting points and what we do (ours)', head: ['Situation', 'What it looks like', 'What we do'], rows: [
      ['1. Aiming for the track', 'Grade 5 or 6, strong but not yet placed', 'Deepen grade-level fluency; no test drilling'],
      ['2. Just placed', 'First weeks of a compacted course', 'Close grade 7 gaps before they compound'],
      ['3. Struggling on the track', 'Grades slipping, confidence falling', 'Rebuild the underlying topics; talk to the school about options'],
      ['4. Thriving and bored', 'Ahead even of the compacted pace', 'Competition problems and depth, not more speed']
    ] },
    left: { h3: 'For parents', ps: [
      'Being placed on the slower track is not a verdict. Seattle\'s published pathway, for example, still reaches AP Calculus by senior year from the Math 6 starting point.',
      'Watch for explanations, not just scores. A student who can explain the work is on solid ground.'
    ] },
    right: { h3: 'For students', ps: [
      'Faster is not the same as better at math. Understanding the grade 7 ideas properly makes grade 8 much easier.',
      'If something did not make sense in class, ask the same week. On a compacted track, next week is a new topic.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses from grade 5 to high school',
    lede: 'Live lessons for each step of an accelerated path.',
    bands: [
      { num: 'I', h3: 'Before the track', sub: 'Grades 4 to 6', courses: [
        { code: 'ACPR / P / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Fractions and multi-digit work, done well.' },
        { code: 'ACPR / P / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Number sense for speed with understanding.' },
        { code: 'ACPR / P / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Ratios and patterns in Python.' }
      ] },
      { num: 'II', h3: 'On the track', sub: 'Grades 6 to 8', courses: [
        { code: 'ACPR / T / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Compacted grade 7 and 8 content.' },
        { code: 'ACPR / T / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra 1, early.' },
        { code: 'ACPR / T / 03', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'MATHCOUNTS and AMC 8 depth.' }
      ] },
      { num: 'III', h3: 'After the track', sub: 'Grades 8 to 12', courses: [
        { code: 'ACPR / H / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Geometry to calculus.' },
        { code: 'ACPR / H / 02', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'For students a year or two ahead.' },
        { code: 'ACPR / H / 03', slug: 'ap-calculus-exam-prep', title: 'AP Calculus', blurb: 'Where the faster track leads.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons that keep pace with a compacted course',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'During the week', l: 'Short sessions that follow the class unit.' },
      { time: 'Weekends', l: 'Time to close older gaps.' },
      { time: '1-on-1', l: 'Built around your district\'s pathway.' }
    ],
    cells: [
      { h3: 'Grade 7 under grade 8', p: 'Each new topic linked to the one beneath it.' },
      { h3: 'Pathway aware', p: 'We read your district\'s published track with you.' },
      { h3: 'Depth over speed', p: 'More understanding, not just more content.' },
      { h3: 'Own work only', p: 'Homework and tests stay the student\'s.' },
      { h3: 'Early warning', p: 'Gaps found in the first unit, not the last.' },
      { h3: 'Batch or private', p: 'A class of 15 to 20, or a teacher of your own.' }
    ]
  },

  projectsH2: 'Work by our students',
  projectsLede: 'Students who are ahead in math often enjoy turning it into code. A selection is on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, quoted as posted.',

  fees: {
    h2: 'Fees',
    lede: 'Accelerated math support is billed monthly with no annual commitment, so families can add lessons for the first term on a new track and reduce them once the student settles.',
    free: ['A free first class', 'Bring the course syllabus', 'No card details'],
    group: ['15 to 20 students', 'A regular teacher', 'Your choice of batch', 'Paid monthly'],
    one: ['A teacher to yourself', 'Follows your district track', 'Times that suit you']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Accelerated math: common questions',
    items: [
      { q: 'What is compacted math?', a: 'Compacted math covers more than one year of standards in a single year, for example grade 7 and grade 8 math together. It lets a student take Algebra 1 in grade 8, or earlier, without skipping any middle school content.' },
      { q: 'Is accelerated math the same as honors math?', a: 'Not always. Honors usually means the same grade-level content in more depth, while accelerated or compacted means content from a later grade arrives sooner. Districts use the words differently, so read your district\'s course description.' },
      { q: 'How do students qualify for accelerated math in Texas?', a: 'Under Senate Bill 2124 and 19 TAC section 74.2101, districts must automatically enroll sixth graders who scored in the top 40 percent statewide on Grade 5 Math STAAR, or in the top 40 percent on a local measure. A parent or guardian may opt the student out.' },
      { q: 'Does Common Core allow Algebra 1 in 8th grade?', a: 'Yes. The standards document says the K-7 standards contain the prerequisites for Algebra I by grade 8 and that the standards are designed to let states continue their policies on Algebra I in grade 8.' },
      { q: 'Can an accelerated math tutor help my child get placed?', a: 'We can build genuine readiness: fluent fractions, negatives, ratios and early algebra. We do not drill test items, and placement is always the school\'s decision, so we never promise a placement.' },
      { q: 'Is there an accelerated math tutor near me?', a: 'Our lessons are live online, so location does not matter. Students join from home and keep the same teacher through the school year.' },
      { q: 'What if my child is struggling on the accelerated track?', a: 'Start with the grade 7 topics underneath the current unit, since gaps there cause most of the trouble. Talk to the school too; most published pathways have more than one route to calculus.' },
      { q: 'Can a student move back to on level math?', a: 'Usually yes, but the process belongs to the district. Ask the school counselor how and when changes can be made before the year starts.' },
      { q: 'When are your accelerated math classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with my school district or state?', a: 'No. Modern Age Coders is an independent online school. We quote published state and district pages and link to them, but we have no connection with any of them.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related math pages',
    lede: 'More for middle schoolers moving quickly.',
    items: [
      { href: '/online-math-tutor-6th-grade', label: 'Sixth grade math tutoring', p: 'The year before most compacted courses begin.' },
      { href: '/online-math-tutor-7th-grade', label: 'Seventh grade math tutoring', p: 'Proportional reasoning and rational numbers.' },
      { href: '/online-math-tutor-8th-grade', label: 'Eighth grade math tutoring', p: 'Functions, systems and the Pythagorean Theorem.' },
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'Live support through Algebra 1.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Math competitions for middle school', p: 'For students who want harder problems.' },
      { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation', p: 'Team and individual problem solving.' },
      { href: '/geometry-tutoring-online-usa', label: 'Geometry tutoring', p: 'Often the grade 9 course after acceleration.' },
      { href: '/common-core-math-tutor', label: 'Common Core math tutor', p: 'Grade-by-grade help from kindergarten to grade 8.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the grade, the district and the course name, and share the syllabus if you have it. The teacher will check the topics underneath the current unit and suggest a plan.',
    readFirst: 'See <a class="ag-inline-link" href="/how-we-teach">how our teachers work</a>, or browse <a class="ag-inline-link" href="/courses">our math and coding courses</a>.',
    note: 'Our teachers teach live by video from India, with lesson times arranged for US families. WhatsApp is the simplest way to get in touch.',
    formNote: 'The first class is free and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Middle school math', links: [
        { href: '/online-math-tutor-6th-grade', label: 'Sixth grade math' },
        { href: '/online-math-tutor-7th-grade', label: 'Seventh grade math' },
        { href: '/online-math-tutor-8th-grade', label: 'Eighth grade math' },
        { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' },
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Three years, two years, one idea at a time'
  },

  personalityCss: `
.ag-root.ag-acpr .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-acpr .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-acpr .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-acpr .ag-table th { letter-spacing: 0.02em; }
.ag-root.ag-acpr .ag-section-head h2 { max-width: 27ch; }
`,

  dossier: {
    curriculumAuthority: 'CCSS mathematics PDF page 84 "Note on courses and transitions" (Algebra I in grade 8; K-7 prerequisites; grades 6-8 priority content). Texas Education Agency Middle School Advanced Mathematics Program page and FAQ (SB 2124, TEC 28.029, 19 TAC 74.2101, top 40 percent automatic enrollment, opt-out, 19 TAC 111.29 to 111.31, compaction crosswalks, implementation by 2024 to 2025, STAAR and EOC rules, ACT or SAT requirement). Washington RCW 28A.320.195. District pages: Seattle Public Schools (three sixth-grade options, MAP RIT eligibility), SFUSD (26 March 2026 policy), Montgomery County Public Schools (readiness). All read raw 31 October 2026.',
    localProject: 'Our worked examples on a compacted grade 7 and 8 year: y = 15x; -3/4 divided by 1/2 = -3/2; line through (2, 5) and (6, 13) is y = 2x + 1; system solution (3, 7); 2^3 x 2^-5 = 1/4; 9-12-15 triangle; x^2 + 7x + 12 = (x + 3)(x + 4). Our six-item readiness check, sequence summary, five-question decision list and starting-point table. Lesson family: compression mapped topic by topic.',
    requiredMentions: ['do not mandate the sequence of high school courses', 'many students in the U.S. today take Algebra I in the 8th grade, and in some states this is a requirement.', 'The K-7 standards contain the prerequisites to prepare students for Algebra I by 8th grade', 'some of the highest priority content for college and career readiness comes from Grades 6-8', 'increase the number of students who complete advanced mathematics courses in high school.', 'provide information about how the TEKS were compacted.', 'Students who take the Algebra 1 EOC must take the ACT or the SAT in high school.', 'the next most rigorous level of advanced courses or program offered by the high school', 'Highly Capable (HC) identification is not a requirement.', 'covering Math 6-8 and Algebra I over three years', 'Algebra readiness can occur at different points in a student\'s maturation.', 'Slope 8/4 = 2, so y = 2x + 1'],
    sources: [
      { claim: 'CCSS mathematics, Note on courses and transitions (page 84).', url: 'https://learning.ccsso.org/wp-content/uploads/2022/11/ADA-Compliant-Math-Standards.pdf' },
      { claim: 'TEA Middle School Advanced Mathematics Program.', url: 'https://tea.texas.gov/educators/subject-areas/middle-school-advanced-mathematics-program' },
      { claim: 'TEA Middle School Advanced Mathematics Program FAQ.', url: 'https://tea.texas.gov/educators/subject-areas/middle-school-advanced-mathematics-program-faq' },
      { claim: 'Washington RCW 28A.320.195, academic acceleration.', url: 'https://app.leg.wa.gov/RCW/default.aspx?cite=28A.320.195' },
      { claim: 'Seattle Public Schools Highly Capable Summer Math Program.', url: 'https://www.seattleschools.org/departments/highly-capable/highly-capable-summer-math-program/' },
      { claim: 'SFUSD revised Math Placement Policy, 26 March 2026.', url: 'https://www.sfusd.edu/announcements/2026-03-26-board-education-approves-revised-math-placement-policy' },
      { claim: 'Montgomery County Public Schools mathematics.', url: 'https://www.montgomeryschoolsmd.org/curriculum/math/' }
    ],
    rejectedClaims: [
      'Placement or grade promises: refused; placement is the school\'s decision.',
      'California Mathematics Placement Act text: leginfo.legislature.ca.gov returned 403 and cde.ca.gov a 303 loop; not retried, not described.',
      'North Carolina G.S. 115C-81.36: ncleg.gov returned 403; not retried, not described. Fairfax County and Arlington district pages returned 403; Illinois ilga.gov and isbe.net did not connect.',
      'Names of individual schools on the Seattle and SFUSD pages: not repeated, per the brief.',
      'Research claims that acceleration helps or harms students on average: not used; outside the primary sources.',
      'Any affiliation with a state, district or the Common Core initiative: none.'
    ]
  }
};
