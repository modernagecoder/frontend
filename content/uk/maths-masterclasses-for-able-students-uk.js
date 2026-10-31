'use strict';
// Maths masterclasses for able students, UK (ag- guide door; UK cluster Phase 2 row UK077).
// Siblings checked first: maths-tuition-in-london (already quotes the Ri page on London series, the 1981
// start "offering London children ...", "free to attend, school students are nominated by their teacher"),
// maths-tuition-in-coventry (Warwick hosts Ri Masterclasses for Year 9 and Year 12), maths-tuition-in-glasgow
// (the Strathclyde series). This page quotes none of those strings and uses different passages.
// Read raw with curl on 31 October 2026 (copies under keyword-research-2026-09/uk-us-gap/src/
// maths-masterclasses-for-able-students-uk/ and src/online-maths-circle-uk/ox-oxfordshire-maths-masterclasses.html):
//  - Royal Institution, Ri Masterclasses (rigb.org/learning/ri-masterclasses): "extra curricular workshops in
//    mathematics or computer science"; teachers "nominate a small group of students who have an emerging
//    interest in STEM subjects"; "Nomination packs go out to schools directly from our regional organisers";
//    "online Masterclasses can be provided for state schools that cannot access nearby series"; "Generally Ri
//    Masterclass series run for six weeks, during term time"; secondary sessions "tend to be 2.5 hours on
//    Saturday mornings"; primary "usually shorter sessions and often during or just after school hours";
//    "students cannot attend Masterclasses unless they have a letter of acceptance from the Ri"; "This
//    opportunity is normally available for 9/10 year old and 13/14 year old students"; "Some groups do work
//    with other ages"; history: televised CHRISTMAS LECTURES "Mathematics into Pictures" in 1978; first
//    secondary Masterclasses 1981; "Mathematics Masterclasses for primary school students launched in 1998,
//    and secondary school Computer Science Masterclasses launched in 2014. Engineering Masterclasses ran from
//    2010 to 2020."; off-the-shelf Ri Masterclass resources for classrooms and STEM clubs; science
//    communication projects for 16+; regular volunteers need a DBS check; "The Royal Institution is an
//    independent charity"; royal charter in 1800.
//  - University of Oxford Mathematical Institute, Oxfordshire Mathematics Masterclasses: "for students from
//    Years 9-11" (written here as Years 9 to 11); teachers at local state schools receive a pack "each
//    October" to nominate Year 9 students; classes "run on Saturdays in the spring (usually January to
//    March)"; "Participants are then invited back in Year 10 and Year 11."
//  - National curriculum in England, mathematics (gov.uk), used once for the depth-before-acceleration line.
// Not done: the Ri resources listing renders by script and returned no text; not quoted. No named Ri staff,
// lecturer or host school printed. No claim that we run, host or are endorsed by any Ri series.
// Our own: the two sample sessions (Euler's formula and a frame-shaped solid; the five binary cards), the
// practice set and every answer, the comparison table judgements. Our arithmetic: six weeks of 2.5-hour
// Saturday sessions is 15 hours of contact time in a series.
// Spine: a masterclass is a different kind of maths lesson (one big idea, explored for hours, outside the
// syllabus), and places are rationed by nomination; the page explains the real thing and how to get the same
// kind of maths every week. Lesson family: a programme explainer with an online equivalent.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'MASTERCLASSES', label: 'Maths masterclasses for able students', blurb: 'How the Royal Institution Masterclasses work, who gets a place, and what a masterclass session is really like.' },
  slug: 'maths-masterclasses-for-able-students-uk',
  code: 'mas',
  accent: '#2E445F',
  accentRationale: 'Maths masterclasses: a slate blue (#2E445F), 9.40:1 on #FBF8F2, the colour of a lecture-theatre board, cooler and greyer than the olympiad indigo and the junior olympiad navy',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths masterclasses for able students',
  title: 'Maths Masterclasses UK: Royal Institution and Online Stretch',
  description: 'Royal Institution Maths Masterclasses explained: who is nominated, ages, six-week Saturday series, and how able students get masterclass-style maths online.',
  ogDescription: 'Ri Masterclasses are free, run by nomination and last six weeks. What happens inside one, how places work, and a weekly online alternative.',
  twitterDescription: 'Royal Institution Maths Masterclasses: ages, nomination, the Saturday format, two sample sessions and a practice set.',
  pageName: 'Maths Masterclasses for Able Students in the UK',
  webPageDescription: 'A guide to the Royal Institution Mathematics and Computer Science Masterclasses and university masterclass series in the UK, with original sample sessions and live online enrichment lessons.',
  courseDescription: 'Live online enrichment mathematics for able pupils aged 9 to 16, one big idea per session, in a group of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths masterclasses',
  navLinks: [
    { href: '#ri', label: 'The Ri series' },
    { href: '#places', label: 'Getting a place' },
    { href: '#inside', label: 'Inside a session' },
    { href: '#practice', label: 'Practice set' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Enrichment &middot; Ages 9 to 16 &middot; England, Scotland, Wales, Northern Ireland',
  h1: 'Maths masterclasses for able students in the UK',
  lede: 'A maths masterclass is a long, hands-on session on one idea that school maths never reaches. The best known in the UK are the Royal Institution Masterclasses, free six-week series that children join only when a teacher nominates them. Modern Age Coders is not part of the Ri. We teach masterclass-style enrichment maths live online, every week, through our olympiad and competition course, in a group or one to one. This page explains how the Ri series work, how places are given, what a session feels like, and gives two sample sessions and a practice set we wrote.',
  secondaryCta: { href: '#inside', label: 'See a sample session' },
  wa: 'Hello Modern Age Coders, I would like a free masterclass-style maths lesson for my child.',
  heroNote: 'Built from the Royal Institution and University of Oxford pages, read 31 October 2026 &middot; Not connected with the Ri or any university',
  spec: [
    ['Main national series', 'The Royal Institution, an independent charity'],
    ['Usual ages', '9 to 10 and 13 to 14'],
    ['Subjects', 'Mathematics or computer science'],
    ['Length', 'Six weeks, in term time'],
    ['Secondary sessions', 'About 2.5 hours, Saturday mornings'],
    ['Entry', 'Teacher nomination, then an Ri letter'],
    ['Our lessons', 'Weekly, online, group or 1-on-1'],
    ['First lesson', 'Free']
  ],
  capsuleQ: 'What are the Royal Institution Maths Masterclasses?',
  capsule: 'Ri Masterclasses are extracurricular workshops in mathematics or computer science run by the Royal Institution with regional volunteer groups across the UK. A series usually lasts six weeks in term time; secondary sessions tend to be 2.5 hours on Saturday mornings, and primary ones are shorter. They cost nothing, and a child attends only after a teacher nominates them and the Ri sends a letter of acceptance. The Ri says places are normally for 9 and 10 year olds and 13 and 14 year olds. Modern Age Coders has no link with the Ri; we teach the same kind of beyond-the-syllabus maths live online each week, through our competition maths course, in a batch of 15 to 20 or 1-on-1.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses for a child who wants maths beyond the syllabus',
    lede: 'Pick by age. Each card opens the full syllabus, so you can see the ideas we explore before booking.',
    items: [
      { course: 'olympiad-competition-mathematics-mastery', code: 'MAS / 01', title: 'Competition and enrichment maths', note: 'Proof, number theory, combinatorics and geometry, one rich problem at a time, for ages 11 to 16.' },
      { course: 'maths-through-coding', code: 'MAS / 02', title: 'Maths through coding', note: 'Python used to test a conjecture on thousands of cases, the way a computer science masterclass works, for ages 10 to 15.' },
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'MAS / 03', title: 'Reasoning for young thinkers', note: 'Patterns, spatial puzzles and number sense for ages 6 to 9, the years before a primary masterclass.' }
    ]
  },

  sections: [
    {
      id: 'ri', tint: 'tint', eyebrow: 'The Ri series',
      h2: 'How do the Royal Institution Masterclasses work?',
      lede: 'A series is a run of weekly workshops led by speakers from universities, schools and industry, organised locally by volunteers and coordinated by the Ri. Everything in the table comes from the Ri\'s own page.',
      body: [
        { kind: 'table', caption: 'Ri Masterclasses at a glance, from the Royal Institution page read on 31 October 2026', head: ['Question', 'What the Ri says'], rows: [
          ['What are they?', 'Hands-on, interactive extracurricular workshops in mathematics or computer science'],
          ['Who attends?', 'Students a teacher nominates for an emerging interest in STEM; it is "normally available for 9/10 year old and 13/14 year old students", and some groups work with other ages'],
          ['How long is a series?', '"Generally Ri Masterclass series run for six weeks, during term time"'],
          ['How long is a session?', 'Secondary sessions "tend to be 2.5 hours on Saturday mornings"; primary ones are usually shorter and often during or just after school hours'],
          ['What does it cost?', 'Nothing to attend'],
          ['Can a parent apply?', 'No. A teacher registers interest, and students "cannot attend Masterclasses unless they have a letter of acceptance from the Ri"'],
          ['Is there an online version?', 'Yes, for some: "online Masterclasses can be provided for state schools that cannot access nearby series"'],
          ['Older students?', 'Science communication projects and volunteering for students aged 16 and over']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where the idea came from',
          left: [
            'The Ri traces the programme to the televised CHRISTMAS LECTURES of 1978, titled "Mathematics into Pictures". Secondary mathematics masterclasses followed in 1981.',
            'The Ri adds: "Mathematics Masterclasses for primary school students launched in 1998, and secondary school Computer Science Masterclasses launched in 2014. Engineering Masterclasses ran from 2010 to 2020."'
          ],
          rightH3: 'Who makes a series happen',
          right: [
            'Each local series is run by volunteers and collaborators: school teachers, university staff and outreach specialists acting as organisers, supervisors, helpers and speakers. The Ri trains its speakers, and regular volunteers need a DBS check.',
            'That model explains the rationing. A series exists only where a team has formed, and seats go to the schools that team can reach.'
          ] },
        { kind: 'p', mt: true, html: 'Our arithmetic from the Ri\'s figures: six Saturday sessions of about 2.5 hours give a secondary student roughly 15 hours of masterclass maths in a series. That is a rich block of time, and it is one block. Many families who search for masterclasses are really asking how to keep that kind of maths going for the other 46 weeks of the year.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.rigb.org/learning/ri-masterclasses" rel="noopener" target="_blank">Royal Institution, Ri Masterclasses</a>, read 31 October 2026. CHRISTMAS LECTURES is the Ri\'s registered trademark. The Royal Institution is an independent charity; we have no connection with it or with any local series.' }
      ]
    },
    {
      id: 'places', tint: 'deep', eyebrow: 'Getting a place',
      h2: 'How does a child get a place on a maths masterclass?',
      lede: 'Through school. Neither a parent nor a pupil can sign up directly; the route runs from a regional organiser to a teacher and then to the Ri.',
      body: [
        { kind: 'ol', items: [
          'Ahead of a series, a regional organiser sends nomination packs to the schools near it. A few London series are run by the Ri team itself.',
          'A teacher chooses a small group of students with an emerging interest in STEM, usually in Year 5 or 6 at primary age, or Year 9 or 10 at secondary age, and returns the nomination.',
          'The Ri, or the local group, confirms places with a letter of acceptance. Without it a child cannot attend.',
          'If a school has never received a pack, the Ri asks the teacher, not the parent, to email and register interest on behalf of the school.',
          'Where no series runs nearby, the Ri can discuss starting one, and state schools that cannot reach a series may be offered online masterclasses.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A university series works the same way',
          left: [
            'The University of Oxford\'s Mathematical Institute runs Oxfordshire Mathematics Masterclasses for Years 9 to 11. Teachers at local state schools receive a pack each October asking them to nominate Year 9 students, and the classes run on Saturdays in the spring, usually January to March.',
            'Oxford adds that "Participants are then invited back in Year 10 and Year 11", so one nomination can lead to three springs of sessions.'
          ],
          rightH3: 'If your child was not chosen',
          right: [
            'Nominations are a teacher\'s judgement about a handful of places, often two to six per school, and they say nothing final about a child. A pupil who loves maths and was not picked this year is in very good company.',
            'Ask the maths department whether the school receives packs at all, and whether a computer science series runs nearby. Meanwhile the ideas themselves are open to anyone, and the practice set below is a fair start.'
          ] },
        { kind: 'p', mt: true, html: 'The "two to six" figure is our own rough estimate of how many pupils a school usually puts forward, not a number the Ri publishes. For a pupil who prefers a competition route, our <a class="ag-inline-link" href="/maths-olympiad-training-uk">maths olympiad training guide</a> sets out the UKMT ladder, which any pupil can enter through school.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.rigb.org/learning/ri-masterclasses" rel="noopener" target="_blank">Royal Institution, Ri Masterclasses</a>; <a class="ag-inline-link" href="https://www.maths.ox.ac.uk/outreach/oxfordshire-maths-masterclasses" rel="noopener" target="_blank">University of Oxford, Oxfordshire Mathematics Masterclasses</a> (page last updated 3 February 2026). Both read 31 October 2026.' }
      ]
    },
    {
      id: 'inside', tint: '', eyebrow: 'Inside a session',
      h2: 'What happens in a maths masterclass session?',
      lede: 'A speaker poses one question, the room experiments in pairs, a pattern appears, and the last half hour asks whether the pattern is really true. Below are two sessions in that style, written by us; neither is an Ri session.',
      body: [
        { kind: 'two',
          leftH3: 'Sample session for ages 13 to 14 (ours): count the corners',
          left: [
            'Start with solids the class can hold. A cube has 8 corners, 12 edges and 6 faces. A square-based pyramid has 5, 8 and 5. A triangular prism has 6, 9 and 5. Ask the room to find one calculation that gives the same answer for all three. Someone always finds it: corners minus edges plus faces is 2 every time, since 8 minus 12 plus 6, 5 minus 8 plus 5 and 6 minus 9 plus 5 all make 2.',
            'This is Euler\'s formula. The second hour tries to break it. Build a square picture frame from four bevelled bars: it has 16 corners, 32 edges and 16 faces, and 16 minus 32 plus 16 is 0. The formula fails because the frame has a hole. Now the pupils have discovered something real: the number depends on the shape\'s holes, not its size.'
          ],
          rightH3: 'Sample session for ages 9 to 10 (ours): the five mind-reading cards',
          right: [
            'Write the numbers 1 to 31 on five cards. Card A holds every number whose binary form has a 1 in the ones place, card B the twos place, then fours, eights and sixteens. A child picks a secret number and says which cards show it. Add the smallest number on each of those cards and the secret appears.',
            'If the cards are the 16, 4 and 2 cards, the number is 22. The session then asks why it works, and the children rebuild binary from scratch: every number is a sum of different powers of two in exactly one way. A computer science masterclass in miniature, with paper only.'
          ] },
        { kind: 'table', mt: true, caption: 'Euler\'s count for five solids, our worked table', head: ['Solid', 'Corners', 'Edges', 'Faces', 'Corners minus edges plus faces'], rows: [
          ['Tetrahedron', '4', '6', '4', '2'],
          ['Cube', '8', '12', '6', '2'],
          ['Square-based pyramid', '5', '8', '5', '2'],
          ['Triangular prism', '6', '9', '5', '2'],
          ['Square picture frame', '16', '32', '16', '0']
        ] },
        { kind: 'p', mt: true, html: 'Notice what is missing from both sessions: no exam technique, no worksheet of twenty similar questions, no mark scheme. That is the defining feature of masterclass maths, and it is why a child who finds school maths easy can still find a masterclass hard. The national curriculum for England asks for exactly this kind of stretch, saying that pupils who grasp concepts quickly should meet rich and sophisticated problems before they are accelerated through new content.' },
        { kind: 'source', html: 'Both sessions, the frame count and the table are ours. Curriculum wording from <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">National curriculum in England: mathematics programmes of study</a>.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice set',
      h2: 'Masterclass-style problems to try at home',
      lede: 'Six problems we wrote, each with the reasoning a speaker would draw out. Try each for ten minutes before reading the answer; the struggle is the point.',
      body: [
        { kind: 'three', cells: [
          { h3: '1. Handshakes (ages 9 and up)', p: 'Eight people each shake hands once with everyone else. How many handshakes? Each person shakes 7 hands, giving 56, but that counts every handshake twice, so 28. Ask what happens with 100 people: 100 times 99 halved, 4,950.' },
          { h3: '2. The painted cube (ages 9 and up)', p: 'Paint a 3 by 3 by 3 cube, then cut it into 27 small cubes. How many have paint on exactly two faces? One in the middle of each of the 12 edges, so 12. Then 8 corners, 6 face centres and 1 hidden cube make up the rest.' },
          { h3: '3. Last digits (ages 11 and up)', p: 'What is the last digit of 7 to the power 100? Powers of 7 end 7, 9, 3, 1 and then repeat every four. 100 is a multiple of 4, so the last digit is 1. A cycle turned a huge number into a tiny one.' }
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: '4. Chessboard squares (ages 11 and up)', p: 'How many squares of any size are on a chessboard? 64 small ones, 49 of size 2, 36 of size 3, down to 1 of size 8. The sum of the first eight square numbers is 204. Most people guess 64.' },
          { h3: '5. Odd sums (ages 12 and up)', p: 'Add the first few odd numbers: 1, then 1 plus 3 is 4, then 9, then 16. Every total is a square. Draw it: each new odd number wraps an L shape around the previous square. A picture becomes a proof.' },
          { h3: '6. Domino tiling (ages 13 and up)', p: 'Remove two opposite corners from a chessboard. Can 31 dominoes cover the rest? No. Each domino covers one black and one white square, but the two removed corners share a colour, leaving 32 of one colour and 30 of the other.' }
        ] },
        { kind: 'p', mt: true, html: 'In our lessons each of these becomes a full session: the first answer is the start, and the rest of the hour is spent on the general case, a written explanation and a harder cousin of the problem. Pupils keep a notebook of the patterns they found and the arguments that made them certain, which is a habit university mathematicians recognise.' },
        { kind: 'source', html: 'All six problems, answers and explanations are written by Modern Age Coders. None is taken from an Ri, UKMT or university resource.' }
      ]
    },
    {
      id: 'compare', tint: 'deep', eyebrow: 'Choosing a route',
      h2: 'Masterclass, olympiad or weekly class: which suits an able child?',
      lede: 'They do different jobs, and many keen pupils do more than one. The table gives the facts and our view of who each suits; the choice is yours.',
      body: [
        { kind: 'table', caption: 'Three kinds of maths enrichment in the UK, facts from each organiser and our own judgements', head: ['', 'Ri Masterclass series', 'UKMT challenges and olympiads', 'Weekly online enrichment (ours)'], rows: [
          ['Entry', 'Teacher nomination and Ri letter', 'Entered through school; olympiads by qualifying score', 'Book a free first lesson'],
          ['Ages', 'Usually 9 to 10 and 13 to 14', 'Primary to sixth form, by paper', '6 to 18, by course'],
          ['Rhythm', 'Six weeks, once a year', 'One paper at a time, set dates', 'Every week, all year'],
          ['Feel', 'Exploration, no assessment', 'Timed problems, written proof at olympiad level', 'Exploration plus written explanations'],
          ['Who it suits (our view)', 'Any curious child lucky enough to be nominated', 'A pupil who enjoys a hard test', 'A pupil who wants this kind of maths to be regular']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Take the masterclass if offered',
          left: [
            'If your child is nominated, say yes. Meeting a working mathematician in a room full of other keen pupils is worth a great deal, and the series costs nothing.',
            'Nothing we teach replaces that, and we would never suggest a family turn down a place for our lessons.'
          ],
          rightH3: 'Where a weekly class fits',
          right: [
            'Before a nomination, between series, or where none runs nearby. It also suits pupils who need longer than one Saturday to get comfortable with open problems, and those who want to write up their reasoning and have it read every week.',
            'Our <a class="ag-inline-link" href="/junior-mathematical-olympiad-preparation">junior olympiad page</a> and <a class="ag-inline-link" href="/ukmt-team-maths-challenge-practice">team challenge page</a> cover the competition side in detail.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages from curious to independent',
    lede: 'Our stages for enrichment maths, matched loosely to the two ages the Ri usually works with.',
    table: { caption: 'Our enrichment stages', head: ['Stage', 'Ages', 'Secure when'], rows: [
      ['1. Notice', '6 to 9', 'Spots a pattern and says it aloud before being asked'],
      ['2. Test', '9 to 11', 'Checks a guess on several cases and tries to break it'],
      ['3. Explain', '11 to 14', 'Writes why a pattern holds, in full sentences'],
      ['4. Extend', '14 to 16', 'Asks the next question unprompted and generalises']
    ] },
    left: { h3: 'Why the stages are about habits', ps: [
      'Masterclass topics change every week, so content is a poor ladder. The habits underneath, noticing, testing, explaining and extending, are what carry over.',
      'We place children by which habit is secure, not by school year.'
    ] },
    right: { h3: 'Where it leads', ps: [
      'At sixth-form age the same habits feed into university admissions maths; see our <a class="ag-inline-link" href="/step-maths-preparation">STEP preparation page</a>.',
      'For computing, <a class="ag-inline-link" href="/british-informatics-olympiad-preparation">the British Informatics Olympiad</a> rewards the same patience.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Courses for able and curious pupils',
    lede: 'Grouped by age. Every card opens a syllabus with the topics in order.',
    bands: [
      { num: 'I', h3: 'Primary', sub: 'Ages 6 to 11', courses: [
        { code: 'UK / MAS / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Pattern, shape and number puzzles for ages 6 to 9.' },
        { code: 'UK / MAS / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Number sense that makes bigger ideas reachable.' },
        { code: 'UK / MAS / 03', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Scratch projects with logic at their heart.' }
      ] },
      { num: 'II', h3: 'Lower secondary', sub: 'Ages 11 to 14', courses: [
        { code: 'UK / MAS / 04', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition and enrichment maths', blurb: 'Rich problems, then the written argument.' },
        { code: 'UK / MAS / 05', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Test a conjecture on a thousand cases in Python.' },
        { code: 'UK / MAS / 06', slug: 'middle-school-math-competitions-course', title: 'Junior competitions', blurb: 'Kangaroo-style problems for ages 11 to 14.' }
      ] },
      { num: 'III', h3: 'Upper secondary', sub: 'Ages 14 to 18', courses: [
        { code: 'UK / MAS / 07', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic and algorithms, the computing side.' },
        { code: 'UK / MAS / 08', slug: 'tmua-mat-step-preparation-course', title: 'TMUA and STEP preparation', blurb: 'University admissions maths at sixth form.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'One big idea a week, online',
    lede: TIMING + ' Lessons are booked in UK time; our teachers work from India, which is four and a half hours ahead of UK time in British summer and five and a half in winter.',
    slots: [
      { time: 'After school', l: 'Group sessions for ages 9 to 14.' },
      { time: 'Saturday morning', l: 'The masterclass hour, for those who like it.' },
      { time: 'Any agreed time', l: '1-on-1 sessions planned around your week.' }
    ],
    cells: [
      { h3: 'Question first', p: 'Every session opens on a problem, never on a method to copy.' },
      { h3: 'Pairs, then the room', p: 'Pupils try in pairs on screen before ideas are shared.' },
      { h3: 'A written ending', p: 'Each session closes with a short written explanation.' },
      { h3: 'Read and returned', p: 'The teacher comments on that explanation before next week.' },
      { h3: 'Group or 1-on-1', p: 'A batch of 15 to 20 or a teacher for one pupil.' },
      { h3: 'Code when it helps', p: 'Python tests patterns on more cases than paper allows.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Maths and code projects from children in our classes. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews from our Google profile, as their authors wrote them.',

  fees: {
    h2: 'Fees for enrichment maths',
    lede: 'One monthly fee, shown in the currency we use for UK families, with no term to sign up for. The first lesson costs nothing, so a child can see whether open-ended maths suits them.',
    free: ['A sample session on one big idea', 'Our view of the right stage', 'A phone number is all we ask'],
    group: ['15 to 20 pupils of a similar stage', 'One problem explored each week', 'Written explanations read and returned', 'Same teacher through the year'],
    one: ['One pupil and one teacher', 'Topics chosen around the pupil', 'Pace set by the pupil']
  },

  faq: {
    eyebrow: 'Masterclass questions',
    h2: 'What parents ask about maths masterclasses',
    items: [
      { q: 'What are Royal Institution maths masterclasses?', a: 'Series of extracurricular workshops in mathematics or computer science, coordinated by the Royal Institution and run by volunteer groups across the UK. A series generally lasts six weeks in term time, and they are free to attend.' },
      { q: 'How do you get into Royal Institution masterclasses?', a: 'Through a teacher. Regional organisers send nomination packs to schools, a teacher nominates a small group, and the Ri confirms with a letter of acceptance. Parents and pupils cannot apply directly; if your school has never had a pack, ask a teacher to email the Ri.' },
      { q: 'What age are Ri masterclasses for?', a: 'The Ri says they are normally for 9 and 10 year olds and 13 and 14 year olds, with some groups working with other ages. Older students aged 16 and over can join science communication projects or volunteer.' },
      { q: 'Are there primary maths masterclasses?', a: 'Yes. The Ri launched primary mathematics masterclasses in 1998. Primary sessions are usually shorter than secondary ones and are often held during or just after school hours, though some run on Saturdays.' },
      { q: 'How long is each masterclass?', a: 'The Ri says secondary sessions tend to be 2.5 hours on Saturday mornings, over a series of about six weeks. By our arithmetic that is roughly 15 hours of masterclass maths in one series.' },
      { q: 'Are there online maths masterclasses?', a: 'The Ri says online masterclasses can be provided for state schools that cannot reach a nearby series, again arranged through the school. Separately, our own weekly online lessons are open to any family and are not Ri masterclasses.' },
      { q: 'Is there a computer science masterclass?', a: 'Yes. The Ri launched secondary computer science masterclasses in 2014, alongside the mathematics series. Ask your school which subjects the nearest series offers.' },
      { q: 'My child was not nominated. What now?', a: 'Places are few and a nomination is one teacher\'s choice in one year, so it is not a verdict on ability. Ask whether the school receives packs at all, try the practice set on this page, and consider UKMT challenges or a weekly enrichment class.' },
      { q: 'Are you part of the Royal Institution?', a: 'No. Modern Age Coders is an independent online school with no link to the Royal Institution, any local masterclass group or any university. We teach maths in a similar spirit, and we say so plainly.' },
      { q: 'When do your lessons run?', a: TIMING + ' All times are given in UK time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More stretch for keen young mathematicians',
    lede: 'Competitions, olympiads and the computing side.',
    items: [
      { href: '/maths-olympiad-training-uk', label: 'Maths olympiad training', p: 'The full UKMT ladder in one place.' },
      { href: '/junior-mathematical-olympiad-preparation', label: 'Junior Mathematical Olympiad', p: 'The first written-proof paper, for Year 8 and below.' },
      { href: '/ukmt-kangaroo-rounds-practice', label: 'UKMT Kangaroo rounds', p: 'The multiple-choice follow-on papers.' },
      { href: '/maths-tuition-in-london', label: 'Maths tuition in London', p: 'Where the masterclass story began.' },
      { href: '/british-informatics-olympiad-preparation', label: 'British Informatics Olympiad', p: 'Problem solving with code.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page from one hub.' }
    ]
  },

  start: {
    h2: 'Book a free enrichment lesson',
    lede: 'Tell us your child\'s age and what kind of maths lights them up. We run one session on a single big idea and then suggest a stage and a group.',
    readFirst: 'Want to look first? Each <a class="ag-inline-link" href="/courses">course page</a> lists its topics in order, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> sets out our method in plain words.',
    note: 'A WhatsApp message is the quickest way to reach us. Replies come from our team in India on a +91 number.',
    formNote: 'Nothing to pay, and a single reply from a person.'
  },

  footer: {
    cols: [
      { h4: 'Enrichment', links: [
        { href: '/maths-olympiad-training-uk', label: 'Olympiad training' },
        { href: '/junior-mathematical-olympiad-preparation', label: 'Junior olympiad' },
        { href: '/step-maths-preparation', label: 'STEP preparation' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar' }
      ] },
      { h4: 'About us', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'One question, a whole hour, and the reasoning written down'
  },

  personalityCss: `
.ag-root.ag-mas .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-mas .ag-capsule { border-left-width: 6px; }
.ag-root.ag-mas .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-mas .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-mas .ag-table td:last-child { font-variant-numeric: tabular-nums; }
`,

  dossier: {
    curriculumAuthority: 'Royal Institution, Ri Masterclasses (read 31 October 2026): extracurricular workshops in mathematics or computer science; teacher nomination of a small group; nomination packs from regional organisers; letter of acceptance required; normally ages 9/10 and 13/14; six weeks in term time; secondary 2.5 hours on Saturday mornings; primary shorter; free; online masterclasses for state schools without a nearby series; history 1978 lectures, 1981 secondary, 1998 primary, 2014 computer science, engineering 2010 to 2020; 16+ science communication; DBS for regular volunteers; independent charity. University of Oxford, Oxfordshire Mathematics Masterclasses: Years 9 to 11, October packs to local state schools, Saturdays January to March, invited back in Years 10 and 11. National curriculum in England, mathematics: rich and sophisticated problems before acceleration.',
    localProject: 'One idea, six Saturdays. The page sets out how the Royal Institution Masterclasses work in a quotable table, explains the nomination route in five steps alongside the Oxfordshire university series, works through two original sample sessions (Euler\'s count with a picture-frame counterexample for ages 13 to 14, five binary cards for ages 9 to 10), gives six original practice problems with reasoning, and compares masterclasses, UKMT competitions and weekly online enrichment by criteria. Lesson family: a programme explainer with an online equivalent.',
    requiredMentions: ['letter of acceptance from the Ri', 'normally available for 9/10 year old and 13/14 year old students', 'tend to be 2.5 hours on Saturday mornings', 'online Masterclasses can be provided for state schools', 'Engineering Masterclasses ran from 2010 to 2020', 'Mathematics into Pictures', 'Oxfordshire Mathematics Masterclasses', 'Generally Ri Masterclass series run for six weeks', 'Square picture frame'],
    sources: [
      { claim: 'Royal Institution, Ri Masterclasses: format, ages, nomination, letter of acceptance, online provision, history, volunteers.', url: 'https://www.rigb.org/learning/ri-masterclasses' },
      { claim: 'University of Oxford Mathematical Institute, Oxfordshire Mathematics Masterclasses: Years 9 to 11, October nomination, spring Saturdays, invited back.', url: 'https://www.maths.ox.ac.uk/outreach/oxfordshire-maths-masterclasses' },
      { claim: 'National curriculum in England, mathematics: pupils who grasp concepts rapidly offered rich and sophisticated problems before acceleration.', url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study' }
    ],
    rejectedClaims: [
      'Any link, endorsement or partnership with the Royal Institution, a local masterclass group or a university: none exists; the page says so.',
      'Number of series, places or nominations per school: not published on the pages read; our "two to six" is labelled as our own rough estimate.',
      'Ri off-the-shelf masterclass resource titles: the listing page renders by script and returned no readable text; not quoted.',
      'Names of the lecturer behind the 1978 lectures, Ri staff or local hosts: not printed (no individuals named).',
      'Dates of any 2026 to 2027 local series: vary by group and are not on the national page; not given.'
    ]
  }
};
