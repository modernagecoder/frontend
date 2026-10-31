'use strict';
// Noetic Learning Math Contest preparation (ag- competition door; UK and US exams cluster Phase 2, row US066). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from
// noetic-learning.com; copies in keyword-research-2026-09/uk-us-gap/src/noetic-math-contest-preparation/:
//  - /mathcontest/ (contest.html): "a leading national competition for elementary and middle school students (grades
//    2 - 8)"; "Held twice a year"; "With more than 65,000 students participating in the 2025 - 2026 school year";
//    "Celebrating 17 Years"; "Each grade has its own problem set, ensuring fairness."; fall 2026 window
//    "2026-11-12 08:00" to "2026-11-25 17:00", spring 2027 "2027-04-01" to "2027-04-15"; team up to 30 students.
//  - /mathcontest/details.jsp: "a semiannual problem-solving competition for elementary and middle school students";
//    "Students are asked to solve 20 problems independently within 45 minutes (50 minutes for the online version)";
//    registration deadline 2026-10-22 (fall) and 2027-03-11 (spring); late registration to 2026-11-05 and 2027-03-25
//    with a late fee; fee includes "3 fall practice tests", printable certificates, awards; "A team consists of 30 or
//    fewer students from the same grade and the same school."; awards: Team Winner Medals (highest scorer of each
//    team), National Honor Roll Medals ("The top 10% of all participants in each grade"), National Honorable Mention
//    Ribbons (top 50% in each grade), digital certificates, web recognition; Team Achievement Plaques (top 10% of teams
//    in each grade; "After-school institution teams are excluded"); "The team score is calculated using the sum of
//    the top six scores of a team".
//  - /mathcontest/details_athome.jsp and parents_how.jsp: At-Home Edition, online, fall 2026-11-27 to 2026-12-04, spring
//    2027-04-16 to 2027-04-23; "scores from the At-Home Edition are not considered official and do not qualify for
//    awards"; students receive "raw score" and "national percentile"; "No medals or ribbons will be issued."; parents
//    "act as the Team Leader"; check with the school first and share the invitation letter.
//  - /mathcontest/faq.jsp: paper-pencil and online formats; "at most 30 students on each grade-level team"; mixed-grade
//    teams "must register under the highest student's grade level"; any date within the window; tests taken "at each
//    registered school"; roster deadline "usually one week before the contest starts"; parents' FAQ: "The best way to
//    prepare for the contest is to practice the problems from the previous tests."; awards shipped "2 - 3 weeks after
//    the contest concludes"; online tests reviewable in the student portal after the window.
//  - /mathcontest/pasttests.jsp: official past problems sold by grade (Fall 2023 to Spring 2026); "You are NOT authorized
//    to transmit or distribute the documents outside your home or classroom."
// Prices and fees not used (rule 4). Teacher testimonials not used. Weekdays checked in Python (Nov 12 2026 Thu, Nov 25
// Wed, Oct 22 Thu, Nov 5 Thu, Nov 27 Fri, Dec 4 Fri, Mar 11 2027 Thu, Mar 25 Thu, Apr 1 Thu, Apr 15 Thu, Apr 16 Fri,
// Apr 23 Fri). Our own material, labelled: 2 minutes 15 seconds per problem (45 x 60 / 20 = 135 seconds) and 2 minutes 30
// seconds online (50 x 60 / 20 = 150), the top-six team arithmetic example, three worked bar-model examples (24 and 36
// stickers; 18 more pages; 45 marbles), ten practice problems for grades 3 to 5 with answers checked in Python, the
// eight-week plans. Lesson family: bar models for comparison and part-whole word problems.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'competition', tag: 'COMPETITION', blurb: 'The Noetic Learning Math Contest for grades 2 to 8: 20 problems in 45 minutes, the fall 2026 and spring 2027 windows, awards, the At-Home Edition and bar-model practice.' },
  slug: 'noetic-math-contest-preparation',
  code: 'ncp',
  accent: '#8D4445',
  accentRationale: 'Noetic math contest preparation: a brick red #8D4445 from the US allocation table, about 6.5:1 on paper #FBF8F2, warmer than the competition greens beside it',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'Noetic math contest preparation',
  title: 'Noetic Math Contest Practice Problems and Prep, Grades 2 to 8',
  description: 'Noetic Learning Math Contest prep for grades 2 to 8: 20 problems in 45 minutes, the November 2026 and April 2027 windows, awards, At-Home Edition and practice.',
  ogDescription: 'The Noetic Learning Math Contest gives each grade 20 problems in 45 minutes, twice a year. The 2026 to 2027 dates, how teams and awards work, and original bar-model practice.',
  twitterDescription: 'Noetic Learning Math Contest prep, from the organiser\'s own pages.',
  pageName: 'Noetic Math Contest Preparation',
  webPageDescription: 'A guide for parents, teachers and students to the Noetic Learning Math Contest in 2026 to 2027, from noetic-learning.com: format, windows, teams, awards and the At-Home Edition, with bar-model lessons and original practice problems for grades 3 to 5.',
  courseDescription: 'Live online math classes for students in grades 2 to 8 preparing for the Noetic Learning Math Contest, in a batch of 15 to 20 or one to one, built on word-problem reasoning and bar models.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Noetic math contest preparation',
  navLinks: [
    { href: '#format', label: 'Format' },
    { href: '#dates', label: 'Dates' },
    { href: '#awards', label: 'Awards' },
    { href: '#athome', label: 'At home' },
    { href: '#bars', label: 'Bar models' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Grades 2 to 8 &middot; Fall 2026 and spring 2027 &middot; 20 problems, 45 minutes',
  h1: 'Noetic math contest practice and preparation',
  lede: 'The Noetic Learning Math Contest, or NLMC, is a twice-yearly problem-solving contest for grades 2 to 8 in which every grade gets its own set of 20 problems and 45 minutes. Most of the problems are word problems that reward a clear picture of the situation more than fast arithmetic. Below we set out the 2026 to 2027 contest from Noetic Learning&rsquo;s own pages, read on 31 October 2026, and then teach the tool we lean on most for this contest: the bar model, with three worked examples and ten problems we wrote for grades 3 to 5.',
  secondaryCta: { href: '#bars', label: 'See the bar-model method' },
  wa: 'Hello Modern Age Coders, my child is taking the Noetic Learning Math Contest. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; grades K to 12',
  spec: [
    ['Organiser', 'Noetic Learning'],
    ['Grades', '2 to 8, one problem set per grade'],
    ['Each contest', '20 problems, 45 minutes'],
    ['Online version', '50 minutes'],
    ['Fall 2026 window', 'November 12 to 25'],
    ['Spring 2027 window', 'April 1 to 15'],
    ['Team size', 'Up to 30, same grade and school'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The Noetic Learning Math Contest (NLMC) is a semiannual problem-solving contest by Noetic Learning for grades 2 to 8: 20 problems in 45 minutes, or 50 online, with a separate set for each grade. Schools enter teams of up to 30; families can use the At-Home Edition. Modern Age Coders teaches contest problem solving live online, in a batch or 1-on-1, through our Elementary Mathematics course.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Courses for Noetic contest students',
    lede: 'Elementary math first, since most entrants are in grades 2 to 5, then problem solving and the middle school contest course.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'NCP / 01', title: 'Elementary math', note: 'Grades 1 to 5. Number sense and word problems at depth.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'NCP / 02', title: 'Problem solving for kids', note: 'Logic, patterns and step-by-step thinking.' },
      { course: 'middle-school-math-competitions-course', code: 'NCP / 03', title: 'Middle school competitions', note: 'For grade 6 to 8 entrants.' }
    ]
  },

  sections: [
    {
      id: 'format', tint: 'tint', eyebrow: 'The contest',
      h2: 'What is the Noetic Learning Math Contest?',
      lede: 'Noetic Learning describes the NLMC as "a semiannual problem-solving competition for elementary and middle school students." Students solve 20 problems on their own in 45 minutes, or 50 minutes online, and each grade from 2 to 8 has its own problems.',
      body: [
        { kind: 'table', caption: 'The NLMC at a glance (noetic-learning.com contest home, details and FAQ pages, read 31 October 2026)', head: ['Feature', 'What Noetic Learning publishes'], rows: [
          ['Grades', '2 to 8'],
          ['How often', 'Twice a year, fall and spring'],
          ['Problems', '20, solved independently'],
          ['Time', '45 minutes on paper; 50 minutes for the online version'],
          ['Problem sets', 'Each grade has its own problem set, ensuring fairness.'],
          ['Formats', 'Traditional paper-pencil or online'],
          ['Where', 'At each registered school, on a day the team leader picks in the window'],
          ['Team', 'Up to 30 students from the same grade and school; no minimum'],
          ['Team score', 'The sum of the top six scores'],
          ['Size', 'More than 65,000 students in the 2025 to 2026 school year']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two and a quarter minutes a problem',
          left: [
            'Twenty problems in 45 minutes is 135 seconds each, or 2 minutes 15 seconds, by our arithmetic. Online, 50 minutes gives 150 seconds, or 2 and a half minutes. That is enough to read a word problem twice and draw it, but not enough to puzzle aimlessly.',
            'For a second grader, that pace is a real stretch. Practice is less about speed than about having a reliable first move on every problem, which is where bar models help.'
          ],
          rightH3: 'One grade, one problem set',
          right: [
            'Because "Each grade has its own problem set", a third grader competes only with other third graders nationally. Mixed-grade teams are allowed when necessary, but Noetic says they "must register under the highest student&rsquo;s grade level", so a grade 4 student on a grade 5 team sits the grade 5 problems.',
            'Check which level your child will sit with the team leader before practicing.'
          ] },
        { kind: 'source', html: 'Sources: Noetic Learning <a class="ag-inline-link" href="https://www.noetic-learning.com/mathcontest/" rel="noopener" target="_blank">Math Contest</a>, <a class="ag-inline-link" href="https://www.noetic-learning.com/mathcontest/details.jsp" rel="noopener" target="_blank">Contest Details</a> and <a class="ag-inline-link" href="https://www.noetic-learning.com/mathcontest/faq.jsp" rel="noopener" target="_blank">FAQ</a> pages, read 31 October 2026. Modern Age Coders is not connected with Noetic Learning.' }
      ]
    },
    {
      id: 'dates', tint: 'deep', eyebrow: 'The calendar',
      h2: 'When is the Noetic math contest in 2026 to 2027?',
      lede: 'The fall 2026 contest runs from Thursday, November 12 to Wednesday, November 25, 2026, and the spring 2027 contest from Thursday, April 1 to Thursday, April 15, 2027. Fall team registration closed on October 22, with late registration open to November 5, 2026.',
      body: [
        { kind: 'table', caption: 'NLMC 2026 to 2027 dates (noetic-learning.com details and At-Home pages, read 31 October 2026; weekdays checked against the calendar)', head: ['Step', 'Fall 2026', 'Spring 2027'], rows: [
          ['Team registration deadline', 'Thursday, October 22, 2026', 'Thursday, March 11, 2027'],
          ['Late registration, with a late fee', 'To Thursday, November 5, 2026', 'To Thursday, March 25, 2027'],
          ['School contest window', 'Thursday, November 12 to Wednesday, November 25, 2026', 'Thursday, April 1 to Thursday, April 15, 2027'],
          ['At-Home Edition window, online', 'Friday, November 27 to Friday, December 4, 2026', 'Friday, April 16 to Friday, April 23, 2027'],
          ['Awards shipped to team leaders', 'About 2 to 3 weeks after the contest', 'About 2 to 3 weeks after the contest']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If you are reading this in November',
          left: [
            'On 31 October 2026 the fall deadline had passed but late registration was still open until November 5. A teacher who wants a team in the fall contest has a few days; otherwise the spring contest, with a March 11, 2027 deadline, is the next chance.',
            'Student names are needed by the roster deadline, which Noetic says is usually one week before the contest starts.'
          ],
          rightH3: 'Two contests, one year of growth',
          right: [
            'Because the contest runs twice, a student can sit in November, work on the gaps over the winter, and sit again in April. Comparing the two raw scores is one of the clearest progress checks available at this age.',
            'Our plans below assume exactly that rhythm.'
          ] },
        { kind: 'source', html: 'Sources: Noetic Learning <a class="ag-inline-link" href="https://www.noetic-learning.com/mathcontest/details.jsp" rel="noopener" target="_blank">Contest Details</a> and <a class="ag-inline-link" href="https://www.noetic-learning.com/mathcontest/details_athome.jsp" rel="noopener" target="_blank">At-Home Edition</a> pages, read 31 October 2026. Times on the organiser&rsquo;s pages run from 8:00 to 17:00 on the first and last days.' }
      ]
    },
    {
      id: 'awards', tint: 'tint', eyebrow: 'Awards',
      h2: 'What awards does the Noetic math contest give?',
      lede: 'The top 10 percent of participants in each grade earn a National Honor Roll medal, and the top 50 percent a National Honorable Mention ribbon. Each team&rsquo;s highest scorer gets a Team Winner medal, and every participant gets a digital certificate.',
      body: [
        { kind: 'table', caption: 'NLMC awards (noetic-learning.com Contest Details, read 31 October 2026)', head: ['Award', 'Who qualifies'], rows: [
          ['Team Winner Medal', 'The highest scorer on each team'],
          ['National Honor Roll Medal', 'The top 10 percent of all participants in each grade'],
          ['National Honorable Mention Ribbon', 'The top 50 percent of all participants in each grade'],
          ['Digital Award Certificate', 'All award recipients'],
          ['Digital Mathlete Certificate', 'All contest participants'],
          ['Web recognition', 'All National Honor Roll and Honorable Mention recipients'],
          ['Team Achievement Plaque', 'The top 10 percent of teams in each grade; after-school institution teams excluded']
        ] },
        { kind: 'p', mt: true, html: '<b>How the team score works, with our numbers.</b> Noetic says "The team score is calculated using the sum of the top six scores of a team". Suppose a grade 4 team of nine students scores 17, 15, 15, 14, 12, 12, 10, 9 and 6 out of 20. The team score uses only the top six: 17 + 15 + 15 + 14 + 12 + 12 = 85. The other three scores do not lower it. That is why Noetic notes that a team of fewer than six can still enter but weakens its chance at the team plaque, while individual awards are unaffected.' },
        { kind: 'two', mt: true,
          leftH3: 'A reachable goal for most children',
          left: [
            'Half of each grade receives the ribbon. For a child entering a contest for the first time, that is a fair target that rewards steady practice rather than rare talent.',
            'The medal for the top 10 percent is a stretch goal for children who already enjoy hard problems.'
          ],
          rightH3: 'What we do not promise',
          right: [
            'We cannot promise a ribbon or medal, because awards depend on every student in the grade nationally. We teach the thinking and share honest progress with families.',
            'A child who leaves the season able to draw any comparison problem as bars has gained something that lasts well beyond one contest.'
          ] }
      ]
    },
    {
      id: 'athome', tint: 'deep', eyebrow: 'At-Home Edition',
      h2: 'Can my child take the Noetic contest if the school does not offer it?',
      lede: 'Yes, through the At-Home Edition, an online version with its own window after each school contest. The parent acts as team leader. At-Home scores are not official and do not qualify for awards, but students receive a raw score and a national percentile.',
      body: [
        { kind: 'ol', items: [
          '<b>Ask the school first.</b> Noetic&rsquo;s advice to parents is to check with teachers and administrators. If the school hosts the contest, ask how your child can join the school team.',
          '<b>Share the invitation letter.</b> If the school does not take part, Noetic suggests sharing its NLMC invitation letter. Many participating teachers heard of the contest through parents.',
          '<b>Register for the At-Home Edition</b> if a school team is not possible. A parent registers as the team leader on the At-Home registration page.',
          '<b>Give the contest in the window:</b> November 27 to December 4, 2026 for fall, or April 16 to 23, 2027 for spring, online.',
          '<b>Read the feedback.</b> The raw score and national percentile show where the child stands; Noetic issues no medals or ribbons for this edition.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the percentile is useful',
          left: [
            'Noetic says the At-Home Edition gives students "valuable feedback, including their raw score and national percentile." For a homeschooled child or one whose school does not enter, that comparison is hard to get any other way.',
            'Use it as a snapshot, not a verdict. A second snapshot in spring tells you far more than the first one alone.'
          ],
          rightH3: 'Running it fairly at home',
          right: [
            'Give the full 50 minutes online in a quiet room, with paper for drawing. No hints, no calculator unless the procedure allows one, and no looking up answers.',
            'Afterwards, go through the problems your child missed by type, not one by one, and bring the types to class.'
          ] },
        { kind: 'source', html: 'Sources: Noetic Learning <a class="ag-inline-link" href="https://www.noetic-learning.com/mathcontest/details_athome.jsp" rel="noopener" target="_blank">At-Home Edition</a> and <a class="ag-inline-link" href="https://www.noetic-learning.com/mathcontest/parents_how.jsp" rel="noopener" target="_blank">How to Participate</a> pages, read 31 October 2026. Check the individual procedures document for tools allowed.' }
      ]
    },
    {
      id: 'past', tint: 'tint', eyebrow: 'Official practice',
      h2: 'Where can you find Noetic math contest practice problems?',
      lede: 'Noetic Learning sells official past problems and solutions for each grade, offers free sample problems by email, and includes three practice tests with each team registration. Its own advice is to practice from previous tests.',
      body: [
        { kind: 'p', html: 'The parents&rsquo; FAQ says: "The best way to prepare for the contest is to practice the problems from the previous tests." The past-tests page lists official problem sets by grade from Fall 2023 to Spring 2026, and it is clear about use: "You are NOT authorized to transmit or distribute the documents outside your home or classroom." So we never share or copy them. Families who buy them use them at home; in class we teach with our own problems and help a student review the official ones they have tried.' },
        { kind: 'table', mt: true, caption: 'Official NLMC practice routes (noetic-learning.com, read 31 October 2026)', head: ['Material', 'How to get it'], rows: [
          ['Sample problems', 'Free, emailed after a request on the sample problems page'],
          ['Practice tests', 'Three per contest, included with a school team registration; two for At-Home'],
          ['Past contest problems and solutions', 'Sold by grade, for home or classroom use only'],
          ['Online test review', 'In the student portal after the window, for online takers']
        ] },
        { kind: 'source', html: 'Sources: Noetic Learning FAQ, <a class="ag-inline-link" href="https://www.noetic-learning.com/mathcontest/pasttests.jsp" rel="noopener" target="_blank">Past Tests</a> and sample problems pages, read 31 October 2026. Prices are on the organiser&rsquo;s site and not repeated here.' }
      ]
    },
    {
      id: 'bars', tint: 'deep', eyebrow: 'The bar model',
      h2: 'How do bar models help with Noetic word problems?',
      lede: 'A bar model turns the words of a problem into rectangles whose lengths show the quantities. Comparison, part-whole and fraction problems, which fill elementary contests, become a picture with one unknown piece. This is our main teaching tool for the NLMC.',
      body: [
        { kind: 'table', caption: 'Which bar model fits which problem (our teaching guide)', head: ['Problem type', 'Cue words', 'How to draw it'], rows: [
          ['Part and whole', '"Altogether", "in all", "the rest"', 'One long bar split into parts'],
          ['Comparison', '"More than", "fewer than", "times as many"', 'Two bars, one under the other, with the difference marked'],
          ['Equal shares', '"Each", "equally", "groups of"', 'A bar cut into equal units'],
          ['Fraction of', '"One third of", "the rest"', 'A bar in equal units, some shaded'],
          ['Before and after', '"Gave away", "then had"', 'Two bars for before and after, with the change shown']
        ] },
        { kind: 'p', mt: true, html: '<b>Worked example 1 (ours, grade 3): comparison with a total.</b> Ava and Ben have 60 stickers together. Ben has 12 more than Ava. How many does each have? Draw Ava&rsquo;s bar, then Ben&rsquo;s bar the same length plus an extra piece labelled 12. Take the 12 away: 60 minus 12 = 48 is two equal bars, so Ava has 24 and Ben has 24 + 12 = 36. Check: 24 + 36 = 60.' },
        { kind: 'p', html: '<b>Worked example 2 (ours, grade 4): times as many.</b> Mia read 3 times as many pages as Leo. Together they read 36 pages. How many more pages did Mia read? Leo is one unit and Mia is three, so four units are 36 and one unit is 9. Mia read 27, Leo 9, and the difference is two units, 18 pages. Notice the question asks for the difference: the bar shows it directly as two units, with no need to find both totals first.' },
        { kind: 'p', html: '<b>Worked example 3 (ours, grade 5): fractions of the rest.</b> A bag of marbles: one third are red, and one half of the rest are blue. The other 15 are green. How many marbles are in the bag? Draw a bar in three units; one is red. The remaining two units split in half: one unit blue, one unit green. So one unit is 15 and the bag holds 45. The phrase "of the rest" is the trap: one half of the whole would give a different, wrong picture.' },
        { kind: 'two', mt: true,
          leftH3: 'Why bars, not equations',
          left: [
            'A second or third grader cannot yet write 2x + 12 = 60, but they can draw it. The bar model is algebra in pictures, and it scales: the same drawing works with bigger numbers and fractions in grades 4 and 5.',
            'In a 2 minute 15 second budget, a quick bar is often faster than any other first move.'
          ],
          rightH3: 'How a lesson runs',
          right: [
            'The teacher reads the problem, the student draws, and nobody calculates until the bars match the words. Most mistakes show up as a drawing that does not fit the story, which is far easier to fix than a wrong number.',
            'Then the student writes a new story for the same drawing. If they can, they understand it.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice set',
      h2: 'Ten original Noetic-style practice problems for grades 3 to 5',
      lede: 'Written by our teachers. They are not NLMC problems and not drawn from any Noetic test. Try them at the contest pace: about 2 minutes 15 seconds each.',
      body: [
        { kind: 'ol', items: [
          '<b>Sam has 8 more marbles than Tia. Together they have 50. How many does Tia have?</b>',
          '<b>A rope is cut into 3 pieces. The second is twice the first and the third is 3 times the first. The rope is 42 feet long. How long is the third piece?</b>',
          '<b>Jo spent one quarter of her money on a book and had 18 dollars left. How much did she have at first?</b>',
          '<b>There are 24 children in a class. There are 4 more girls than boys. How many girls are there?</b>',
          '<b>What is the sum of all the even numbers from 2 to 20?</b>',
          '<b>A box holds 6 rows of 7 cupcakes. 15 are eaten. How many are left?</b>',
          '<b>Four friends share 3 pizzas equally. What fraction of a pizza does each friend get?</b>',
          '<b>The perimeter of a square garden is 36 meters. What is its area?</b>',
          '<b>Pens come in packs of 6. How many packs are needed to give 1 pen to each of 40 students?</b>',
          '<b>Eli is 7. His mother is 5 times his age. How old will his mother be when Eli is 15?</b>'
        ] },
        { kind: 'table', mt: true, caption: 'Answer key with the drawing that solves it (ours; checked in Python)', head: ['No.', 'Answer', 'Drawing or idea'], rows: [
          ['1', '21', 'Comparison bars: 50 minus 8 = 42, two equal bars'],
          ['2', '21 feet', 'Units 1 + 2 + 3 = 6; one unit is 7'],
          ['3', '24 dollars', 'Four units, three left: three units are 18'],
          ['4', '14', 'Comparison bars: 24 minus 4 = 20, two bars of 10'],
          ['5', '110', 'Pair 2 with 20, 4 with 18: five pairs of 22'],
          ['6', '27', '6 x 7 = 42, then 42 minus 15'],
          ['7', '3/4', 'Cut each pizza into 4; each friend gets one piece from each'],
          ['8', '81 square meters', 'Side 36 / 4 = 9'],
          ['9', '7 packs', '6 packs give 36, not enough; round up'],
          ['10', '43', 'Mother is 35 now and 8 years pass']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where students slip',
          left: [
            'Problem 9 catches students who divide 40 by 6, get 6 and something, and stop at 6. Problem 10 catches anyone who multiplies 15 by 5; the age gap stays the same, it does not scale.',
            'Problem 3 tempts students to take a quarter of 18. The bar shows that 18 is three quarters, not the whole.'
          ],
          rightH3: 'Moving on to official practice',
          right: [
            'After these, request Noetic&rsquo;s free sample problems, or use the practice tests that come with the team registration, under contest timing.',
            'In class we look at which type each missed problem was, and draw that type again with fresh numbers of our own.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'Plans',
      h2: 'A Noetic contest plan for fall and spring',
      lede: 'Our plans for one live class a week, built around the published windows.',
      body: [
        { kind: 'table', caption: 'Two short plans (ours)', head: ['Stretch', 'Dates', 'Focus'], rows: [
          ['Fall sprint', 'November 2 to 11, 2026', 'Part-whole and comparison bars; one practice test'],
          ['Fall contest', 'November 12 to 25, 2026', 'The school sits it; At-Home takers wait for November 27'],
          ['Winter', 'December 2026 to February 2027', 'Fractions of the rest, patterns, counting and geometry'],
          ['Spring build', 'March 2027', 'Mixed sets of 20 at contest pace, twice'],
          ['Spring contest', 'April 1 to 15, 2027', 'Compare the raw score with the fall result']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grades 2 and 3', p: 'Bars for adding and comparing; reading carefully.' },
          { h3: 'Grades 4 and 5', p: 'Times-as-many and fraction bars; multi-step problems.' },
          { h3: 'Grades 6 to 8', p: 'Ratios, percent and early algebra, still drawn first.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four stages from word problem to picture',
    lede: 'Our own description of how young problem solvers grow. It is not a Noetic Learning measure.',
    table: { caption: 'From reading to explaining (our stages)', head: ['Stage', 'What you notice'], rows: [
      ['1. Reads', 'Reads the whole problem before doing anything'],
      ['2. Draws', 'Sketches bars without being asked'],
      ['3. Checks', 'Puts the answer back into the story'],
      ['4. Explains', 'Tells you why a wrong answer is wrong']
    ] },
    left: { h3: 'For parents', ps: [
      'At home, ask "can you draw it?" whenever your child is stuck on a word problem. It is the most useful question in elementary math.',
      'Compare the fall and spring raw scores, but praise the drawings as much as the totals.'
    ] },
    right: { h3: 'For students', ps: [
      'Before you calculate, look at your drawing and the words side by side. Do they match?',
      'If you finish early, check the problems where the question asked for "how many more".'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for elementary and middle school math',
    lede: 'Live online classes taught by one consistent teacher, privately or in a batch.',
    bands: [
      { num: 'I', h3: 'Grades 2 to 5', sub: 'Most Noetic entrants', courses: [
        { code: 'NCP / ELM / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Grades 1 to 5, in depth.' },
        { code: 'NCP / ELM / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Puzzles and logic.' },
        { code: 'NCP / ELM / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for ages 6 to 9', blurb: 'Patterns and spatial play.' }
      ] },
      { num: 'II', h3: 'Grades 6 to 8', sub: 'Older entrants', courses: [
        { code: 'NCP / MID / 01', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'MOEMS, MATHCOUNTS and more.' },
        { code: 'NCP / MID / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratios to early algebra.' },
        { code: 'NCP / MID / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'From bars to equations.' }
      ] },
      { num: 'III', h3: 'Extras', sub: 'Alongside the contest', courses: [
        { code: 'NCP / EXT / 01', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Mental math', blurb: 'Cleaner calculation.' },
        { code: 'NCP / EXT / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Python and numbers.' },
        { code: 'NCP / EXT / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data and chance.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live contest classes for young students',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Short sessions after school, any US time zone.' },
      { time: 'Weekends', l: 'Relaxed morning sessions.' },
      { time: '1-on-1', l: 'At one child&rsquo;s pace.' }
    ],
    cells: [
      { h3: 'Draw first', p: 'Bars before any arithmetic.' },
      { h3: 'Read twice', p: 'Every problem, every time.' },
      { h3: 'Sets of 20', p: 'Our own, at contest pace.' },
      { h3: 'Parent notes', p: 'What clicked and what is next.' },
      { h3: 'Nationwide', p: 'Live online in every state.' },
      { h3: 'Batch size', p: 'Fifteen to twenty, or one child.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'When older students meet code, the same patterns return; browse the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parent reviews from Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Contest registration is handled with Noetic Learning by the team leader or parent; our fee covers classes only. Billing is monthly, so you can fit classes to the fall or spring contest.',
    free: ['A free first class', 'A few bar-model problems', 'No card details'],
    group: ['A batch of 15 to 20', 'One regular teacher', 'Choose your batch', 'Billed each month'],
    one: ['A personal teacher', 'Problems at one child&rsquo;s level', 'Times that suit you']
  },

  faq: {
    eyebrow: 'Questions from parents and teachers',
    h2: 'Noetic math contest: what families ask',
    items: [
      { q: 'What is the Noetic Learning Math Contest?', a: 'It is a semiannual problem-solving competition for students in grades 2 to 8, run by Noetic Learning. Students solve 20 problems independently in 45 minutes, or 50 minutes online, and each grade has its own problems.' },
      { q: 'When is the Noetic math contest in fall 2026?', a: 'Noetic Learning lists the fall 2026 window as November 12 to 25, 2026, and the spring 2027 window as April 1 to 15, 2027. The team leader chooses the day within the window.' },
      { q: 'How many problems are on the Noetic math contest?', a: 'There are 20 problems, solved within 45 minutes on paper or 50 minutes online. By our arithmetic that is about 2 minutes 15 seconds per problem on paper.' },
      { q: 'How many students can be on a Noetic team?', a: 'A team has 30 or fewer students from the same grade and the same school, with no minimum. The team score is the sum of the top six scores.' },
      { q: 'What do you need to get a Noetic National Honor Roll medal?', a: 'National Honor Roll medals go to the top 10 percent of all participants in each grade. The top 50 percent receive a National Honorable Mention ribbon, and each team\'s highest scorer gets a Team Winner medal.' },
      { q: 'Can my child take the Noetic contest at home?', a: 'Yes, through the At-Home Edition, online, from November 27 to December 4, 2026 or April 16 to 23, 2027. Scores are not official and earn no medals, but students get a raw score and a national percentile.' },
      { q: 'Where can I get Noetic math contest practice problems?', a: 'Noetic Learning emails free sample problems on request and sells official past problems and solutions by grade. School teams also receive three practice tests with each registration.' },
      { q: 'Do you share Noetic past tests in class?', a: 'No. Noetic says its documents may not be distributed outside the buyer\'s home or classroom, so we teach with problems we write ourselves and help students review official sets they own.' },
      { q: 'What days and times are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with Noetic Learning?', a: 'No. Modern Age Coders is an independent online school with no link to Noetic Learning or the NLMC. Families and teachers register for the contest with Noetic Learning directly.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More contests and grade-level help',
    lede: 'Other contests for these ages and math help grade by grade.',
    items: [
      { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo USA', p: 'A spring contest open from grade 1.' },
      { href: '/us-coding-math-and-ai-competitions-calendar', label: 'US competitions calendar', p: 'The whole season of dates.' },
      { href: '/online-math-tutor-3rd-grade', label: '3rd grade math tutor', p: 'Word problems and early fractions.' },
      { href: '/online-math-tutor-4th-grade', label: '4th grade math tutor', p: 'Multi-step problems and multiplication.' },
      { href: '/beast-academy-tutor', label: 'Beast Academy tutor', p: 'Live help beside a puzzle-heavy curriculum.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Middle school competitions', p: 'For grade 6 to 8 Noetic students.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child&rsquo;s grade and whether they are sitting the fall or spring contest. The teacher draws a couple of word problems with them as bars and tells you what to practice next.',
    readFirst: 'To see what a lesson feels like, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or explore <a class="ag-inline-link" href="/courses">every course</a>.',
    note: 'Lessons are taught live from India at times chosen for US after-school hours and weekends. A quick WhatsApp is usually the fastest route.',
    formNote: 'No charge for the first class, and no card.'
  },

  footer: {
    cols: [
      { h4: 'Elementary contests', links: [
        { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo USA' },
        { href: '/us-coding-math-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/math-competitions-for-middle-school-students', label: 'Middle school competitions' },
        { href: '/beast-academy-tutor', label: 'Beast Academy tutor' }
      ] },
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-2nd-grade', label: '2nd grade math tutor' },
        { href: '/online-math-tutor-3rd-grade', label: '3rd grade math tutor' },
        { href: '/online-math-tutor-5th-grade', label: '5th grade math tutor' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'Twenty problems, drawn first'
  },

  personalityCss: `
.ag-root.ag-ncp .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-ncp .ag-capsule { border-left-width: 5px; border-radius: 5px; }
.ag-root.ag-ncp .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-ncp .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-ncp .ag-steps li { line-height: 1.62; }
.ag-root.ag-ncp .ag-grid-3 { gap: 1.15rem; }
`,

  dossier: {
    curriculumAuthority: 'Noetic Learning (noetic-learning.com), read raw on 31 October 2026: Math Contest home (grades 2 to 8, twice a year, 65,000+ students in 2025 to 2026, grade-specific sets, windows), Contest Details (20 problems in 45 or 50 minutes, registration and late deadlines, teams of 30 or fewer, awards, top-six team score), At-Home Edition and How to Participate (online windows, unofficial scores, raw score and national percentile, no medals), FAQ (formats, team rules, mixed-grade rule, roster deadline, preparation advice, award shipping), Past Tests (official sets by grade, distribution restriction).',
    localProject: 'Our pacing arithmetic (135 and 150 seconds per problem), a top-six team score example (85), the bar-model guide, three original worked examples (24 and 36 stickers, 18 more pages, 45 marbles), ten original practice problems for grades 3 to 5 with answers checked in Python, fall and spring plans. Lesson family: bar models for comparison and part-whole word problems.',
    requiredMentions: ['a semiannual problem-solving competition for elementary and middle school students', 'Each grade has its own problem set, ensuring fairness.', 'must register under the highest student&rsquo;s grade level', 'The best way to prepare for the contest is to practice the problems from the previous tests.', 'You are NOT authorized to transmit or distribute the documents outside your home or classroom.', 'Thursday, November 12 to Wednesday, November 25, 2026', 'Friday, November 27 to Friday, December 4, 2026', '17 + 15 + 15 + 14 + 12 + 12 = 85', 'one unit is 15 and the bag holds 45', 'Pair 2 with 20, 4 with 18: five pairs of 22'],
    sources: [
      { claim: 'NLMC overview: grades 2 to 8, twice a year, participation, grade-specific sets, 2026 to 2027 windows.', url: 'https://www.noetic-learning.com/mathcontest/' },
      { claim: 'Contest details: 20 problems in 45 minutes (50 online), deadlines, team size, awards, top-six team score.', url: 'https://www.noetic-learning.com/mathcontest/details.jsp' },
      { claim: 'At-Home Edition: windows, unofficial scores, raw score and national percentile, no medals.', url: 'https://www.noetic-learning.com/mathcontest/details_athome.jsp' },
      { claim: 'FAQ: formats, team rules, mixed grades, roster deadline, preparation advice, award shipping.', url: 'https://www.noetic-learning.com/mathcontest/faq.jsp' }
    ],
    rejectedClaims: [
      'Registration fees, late fees and past-test prices: not printed (no typed currency, never another provider\'s prices).',
      'Teacher testimonials on the contest home page: not used.',
      'Calculator rules: not found on the pages read; the page tells families to check the procedures document.',
      'Any past NLMC problem or sample problem: not reproduced; all problems are ours.',
      'Any affiliation with Noetic Learning: none, stated on the page.'
    ]
  }
};
