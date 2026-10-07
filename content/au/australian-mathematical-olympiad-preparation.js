'use strict';
// Australian Mathematical Olympiad preparation (ag- competition door, Australia cluster Phase 3, row 103).
// Facts read raw on 7 October 2026 at amt.edu.au (curl default agent): the AMO page (restructured from
// 1 January 2026 into AMO Summer, AMO Winter and AMO Finals; dates, formats, invitation numbers, purposes,
// selection by AMOC State Directors, AMO Summer award cut-offs), the Olympiad and Pathways page
// (invitation route via the AMC or Maths for Young Australians, events, EGMO and IMO selection numbers,
// one olympiad program per year), and the AIMO and AJMO pages (dates, formats, eligibility, scoring).
// Spine: the postage-stamp (Frobenius) problem, largest unreachable total ab - a - b, with a residue proof
// (family checked free site-wide on 7 October 2026; example values ours, verified by enumeration).
// Invitation-only exams: no selection, medal or award promise. Independent of the AMT and AMOC.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'competition', tag: 'MATHEMATICAL OLYMPIAD', label: 'Australian Mathematical Olympiad preparation', blurb: 'How the restructured AMO works, the route to an invitation, and the proof-writing skill olympiad problems demand.' },
  slug: 'australian-mathematical-olympiad-preparation',
  code: 'amop',
  accent: '#281894',
  accentRationale: 'Australian Mathematical Olympiad: a deep proof-ink indigo chosen by hand, muted, at least 10 RGB from every accent in use or claimed',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Australian Mathematical Olympiad preparation',
  title: 'Australian Mathematical Olympiad Preparation: AMO Explained',
  description: 'The Australian Mathematical Olympiad since 2026: AMO Summer, Winter and Finals, the invitation route through the AMC and AIMO, and how olympiad proofs work.',
  ogDescription: 'How the Australian Mathematical Olympiad works since its 2026 restructure into Summer, Winter and Finals, how students are invited, and a worked olympiad problem with a full proof.',
  twitterDescription: 'The AMO after 2026: Summer, Winter and Finals, the invitation route, and olympiad proof writing.',
  pageName: 'Australian Mathematical Olympiad Preparation',
  webPageDescription: 'A guide to the Australian Mathematical Olympiad for students, parents and teachers: the 2026 restructure into AMO Summer, AMO Winter and AMO Finals, dates and formats, how invitations are made, the open competitions that lead there, and a worked lesson on the postage-stamp problem with a complete proof.',
  courseDescription: 'Live online olympiad mathematics classes for Australian students, focused on problem solving and writing complete proofs, from AMC and AIMO preparation upwards.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Australian Mathematical Olympiad',
  navLinks: [
    { href: '#structure', label: 'The new AMO' },
    { href: '#route', label: 'Getting invited' },
    { href: '#proof', label: 'A full proof' },
    { href: '#train', label: 'How we train' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Year 11 or below &middot; Checked at the Australian Maths Trust',
  h1: 'Australian Mathematical Olympiad preparation',
  lede: 'The Australian Mathematical Olympiad is an invitation-only exam for some of the country\'s strongest young mathematicians, and from 1 January 2026 it changed shape: one exam became three. Its problems are not harder versions of school maths. They ask for complete, convincing proofs of statements nobody has shown the student how to prove. This page explains the new structure and the route to an invitation exactly as the Australian Maths Trust publishes them, then works one classic olympiad problem from first experiments to a written proof. We are independent of the Australian Maths Trust and its committees, and no class can secure an invitation.',
  secondaryCta: { href: '#proof', label: 'Work through the proof' },
  wa: 'Hello Modern Age Coders, I would like a free olympiad maths class for a student in Australia.',
  heroNote: 'Checked at amt.edu.au on 7 October 2026 &middot; Independent of the AMT &middot; Invitation decided by the AMOC',
  spec: [
    ['Exam', 'Australian Mathematical Olympiad (AMO)'],
    ['Since 1 January 2026', 'AMO Summer, AMO Winter, AMO Finals'],
    ['AMO Summer and Winter', '6 questions in 3 hours, sat at school'],
    ['AMO Finals', '2 papers, 4 questions in 4 hours each day'],
    ['Who sits it', 'Invited students in Year 11 or below'],
    ['Invitations by', 'AMOC State Directors'],
    ['We provide', 'Olympiad problem solving and proof writing'],
    ['We are not', 'The AMT, the AMOC or a selector']
  ],
  capsuleQ: 'In short',
  capsule: 'From 1 January 2026 the Australian Mathematical Olympiad became three exams: AMO Summer and AMO Winter, each 6 questions in 3 hours sat at school by about 250 invited students, and AMO Finals, two days of 4 questions in 4 hours for about 60 students. Invitations go to students in Year 11 or below, made by AMOC State Directors. Every problem requires a proof.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses on the road to olympiad maths',
    lede: 'Olympiad readiness rests on strong problem solving and the habit of proving things.',
    items: [
      { course: 'olympiad-competition-mathematics-mastery', code: 'AMO / 01', title: 'Competition maths', note: 'From AMC-style problems to olympiad proofs, with number theory, combinatorics, geometry and inequalities.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'AMO / 02', title: 'Middle years maths', note: 'Secure algebra and geometry for younger students, the base AIMO problems build on.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'AMO / 03', title: 'Problem solving for teens', note: 'Structured reasoning and careful case analysis, useful in both olympiad maths and informatics.' }
    ]
  },

  sections: [
    {
      id: 'structure', tint: 'tint', eyebrow: 'The new AMO',
      h2: 'Three exams instead of one, from 2026',
      lede: 'Before 2026 the AMO was a two-day contest of four questions each day, sat under school supervision by about 200 invited students. The Australian Maths Trust now runs it as three separate competitions.',
      body: [
        { kind: 'table', caption: 'The Australian Mathematical Olympiad in 2026, as published by the Australian Maths Trust', head: ['', 'AMO Summer', 'AMO Winter', 'AMO Finals'], rows: [
          ['Date in 2026', 'Wednesday 25 February', 'Wednesday 29 July', 'Tuesday 1 and Wednesday 2 September'],
          ['Where', 'At school', 'At school', 'AMT-organised exam hubs'],
          ['Students', 'About 250, invited', 'About 250, invited', 'About 60, invited'],
          ['Format', '6 questions in 3 hours', '6 questions in 3 hours', '2 papers over two days, 4 questions in 4 hours each day'],
          ['Purpose', 'Selects for the Autumn School of Excellence and State Director mentoring', 'Selects for AMO Finals', 'Selects for the Spring School of Excellence']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Invitations to AMO Summer and AMO Winter are made by Australian Mathematical Olympiad Committee (AMOC) State Directors, and go to around 200 to 250 students in Year 11 or below across Australia. Students who attended the AMOC School of Excellence or the Autumn School of Excellence are invited, along with some participants in the Australian Training Tournament.',
            'The AMT describes AMO Summer as six challenging problems requiring sound mathematical proofs, and adds that even solving one of them is a significant achievement.'
          ],
          right: [
            'For AMO Summer 2026, the AMT published award cut-offs of 35, 27 and 16 points for gold, silver and bronze, given approximately to the top 20, top 50 and top 100. Honourable mentions go to students with full marks on at least one problem who miss out on those awards.',
            'Those numbers are published to describe results, not targets. The AMO is about the quality of reasoning on problems most strong students cannot finish.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://amt.edu.au/amo" rel="noopener" target="_blank">Australian Maths Trust, Australian Mathematical Olympiad</a>, read 7 October 2026. 2027 dates had not been published there.' }
      ]
    },
    {
      id: 'route', tint: 'deep', eyebrow: 'Getting invited',
      h2: 'The open competitions that lead towards the AMO',
      lede: 'Nobody enters the AMO directly. The AMT says students considered for invitational maths training need outstanding results in the Australian Mathematics Competition or one of the modules under Maths for Young Australians.',
      body: [
        { kind: 'table', caption: 'Open AMT competitions on the way to olympiad level, 2026 details from the AMT', head: ['Competition', 'Who', 'Format', '2026 date'], rows: [
          ['Australian Mathematics Competition (AMC)', 'Years 3 to 12', '60 minutes primary, 75 minutes secondary', '4 to 6 August'],
          ['Australian Junior Mathematics Olympiad (AJMO)', 'Up to Year 8', '10 problems, 90 minutes, online, integer answers 0 to 999', 'Thursday 10 September'],
          ['Australian Intermediate Mathematics Olympiad (AIMO)', 'Years 7 to 10, pitched at Year 10', '4 hours; 10 questions, 8 integer answers and 2 written solutions; 35 marks', 'Thursday 10 September']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The AJMO is new: the AMT describes it as an accessible introduction to olympiad-style problems for students up to Year 8 who are not yet ready for the AIMO. Because both run on the same day, schools choose one per student, and students in Year 8 or below who are ready for the AIMO should still sit it.',
            'The AIMO, according to the AMT, can be used to identify students for its olympiad pathway. Its written questions may include proofs, so it is the first open paper where proof writing is tested directly.'
          ],
          right: [
            'Beyond the AMO, the AMT lists training schools, the AMOC Senior Contest and the Asian Pacific Mathematics Olympiad. Each year four Australian girls are selected for the European Girls\' Mathematical Olympiad and six students for the International Mathematical Olympiad.',
            'The AMT and Australian Science Innovations do not let a student take part in more than one olympiad program in the same year, so students invited to several must choose one subject.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://amt.edu.au/olympiad-programs" rel="noopener" target="_blank">AMT Olympiad and Pathways</a>; <a class="ag-inline-link" href="https://amt.edu.au/aimo" rel="noopener" target="_blank">AIMO</a>; <a class="ag-inline-link" href="https://amt.edu.au/ajmo" rel="noopener" target="_blank">AJMO</a>; <a class="ag-inline-link" href="https://amt.edu.au/amc" rel="noopener" target="_blank">AMC</a>. Read 7 October 2026. Entry prices printed there are not shown.' }
      ]
    },
    {
      id: 'proof', tint: 'tint', eyebrow: 'Worked lesson',
      h2: 'The postage-stamp problem, from experiment to proof',
      lede: 'A classic olympiad style question, with values chosen by us: a game awards either 5 points or 8 points per move. Which totals can never be reached, and what is the largest one?',
      body: [
        { kind: 'three', cells: [
          { h3: '1. Experiment', p: 'List reachable totals: 5, 8, 10, 13, 15, 16, 18, 20, 21, 23, 24, 25, 26, 28 and onwards. The gaps are 1, 2, 3, 4, 6, 7, 9, 11, 12, 14, 17, 19, 22 and 27. After 27, nothing seems to be missing.' },
          { h3: '2. Conjecture', p: 'The largest unreachable total is 27, and there are 14 unreachable totals. For coprime scores a and b, a known result says the largest is ab minus a minus b, which is 40 minus 13, so 27.' },
          { h3: '3. Prove it', p: 'A list is evidence, not proof: we must show every total from 28 upwards is reachable, and that 27 is not. The neat way is to sort totals by their remainder when divided by 5.' }
        ] },
        { kind: 'table', mt: true, caption: 'Multiples of 8 sorted by their remainder on division by 5', head: ['Number of 8-point moves', 'Points from those moves', 'Remainder when divided by 5', 'Smallest reachable total with that remainder'], numCols: [0, 1, 2, 3], rows: [
          ['0', '0', '0', '0'],
          ['2', '16', '1', '16'],
          ['4', '32', '2', '32'],
          ['1', '8', '3', '8'],
          ['3', '24', '4', '24']
        ] },
        { kind: 'p', mt: true, text: 'The proof follows from the table. Adding 5-point moves never changes a total\'s remainder on division by 5, so for each remainder the smallest reachable total is the multiple of 8 shown, and every larger number with the same remainder is reachable by adding fives. The largest of those smallest values is 32, with remainder 2. So 32 minus 5, which is 27, has remainder 2 but is below the first reachable total with that remainder: 27 cannot be reached. Every number from 28 onwards lies at or above the first reachable total for its remainder (28 is 8 plus four fives, 29 is 24 plus 5, 30 is six fives, 31 is 16 plus three fives, 32 is four eights), so every one can be reached. That completes the proof that 27 is the largest unreachable total.' },
        { kind: 'two', mt: true,
          leftH3: 'What an olympiad marker looks for',
          left: [
            'A complete answer states the claim, explains why the remainder idea works, shows that 27 fails and that every larger number succeeds, and ends with a clear conclusion. Missing the "every larger number" half is the most common reason for losing marks.',
            'Writing the proof in short numbered steps, each justified, helps a marker follow it and helps the writer spot gaps.'
          ],
          rightH3: 'Going further',
          right: [
            'The same argument, with a in place of 5 and b in place of 8, proves the general formula ab minus a minus b for any two coprime scores. Counting the unreachable totals, which gives (a minus 1) times (b minus 1) divided by 2, is a good next challenge: here it is 4 times 7 divided by 2, which is 14, matching the list.',
            'Why must the scores be coprime? Try 6 and 9: every reachable total is a multiple of 3, so infinitely many totals are unreachable and there is no largest.'
          ] }
      ]
    },
    {
      id: 'train', tint: '', eyebrow: 'How we train',
      h2: 'Olympiad preparation that respects how selection works',
      lede: 'Invitations are decided by the AMOC from competition results and its own programs. Our role is to build the problem solving and proof writing those results reflect.',
      body: [
        { kind: 'two',
          left: [
            'Classes work through problems by area: number theory, combinatorics, geometry, algebra and inequalities. Each problem is explored, conjectured and then proved, with students writing full solutions that a teacher marks as an olympiad marker would.',
            'Younger students build towards the AJMO and AIMO first, where integer-answer questions sit alongside the first written proofs. Older students practise full proof papers under time.'
          ],
          right: [
            'We never reproduce AMT papers or solutions; past papers belong to the AMT, which sells them on its own site. All our problems are original or classical results proved from scratch in class.',
            'We do not promise an invitation, a medal or selection to any team. Only the AMOC makes those decisions, and they rest on the student\'s own results.'
          ] },
        { kind: 'table', mt: true, caption: 'A term of olympiad training for a strong Year 8 to 10 student', head: ['Weeks', 'Focus', 'Sign of progress'], rows: [
          ['1 and 2', 'Experiment, conjecture, prove', 'Separates evidence from proof in their own words'],
          ['3 and 4', 'Number theory: remainders and divisibility', 'Writes a complete remainder argument'],
          ['5 and 6', 'Combinatorics: counting and cases', 'Covers every case without overlap'],
          ['7 and 8', 'Geometry: angles and similar triangles', 'Justifies every step of a diagram argument'],
          ['9 and 10', 'Timed mixed papers with written solutions', 'Produces at least one fully correct proof per paper']
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing towards olympiad level',
    h2: 'Four rungs from AMC problems to olympiad proofs',
    lede: 'Year level is less important than the kind of reasoning a student can sustain.',
    table: { caption: 'From strong problem solving to complete proofs', head: ['Around', 'Rung', 'The sign it is secure'], rows: [
      ['Years 5 to 7', '1. Enjoys hard problems', 'Persists with an unfamiliar problem for thirty minutes'],
      ['Years 7 to 8', '2. Explains answers', 'Says why an answer must be right, not only what it is'],
      ['Years 8 to 10', '3. Writes proofs', 'Produces a complete written argument for a simple claim'],
      ['Years 10 to 11', '4. Olympiad proofs', 'Proves unfamiliar results under time pressure']
    ] },
    left: { h3: 'If progress stalls', ps: [
      'Go back to small cases. Most olympiad breakthroughs begin by working out a pattern by hand.',
      'Read model proofs slowly and rewrite them in your own words; it builds the language of proof.'
    ] },
    right: { h3: 'Related reading', ps: [
      'Our <a class="ag-inline-link" href="/australian-maths-trust-amc-aio-cat-preparation">Australian Maths Trust page</a> covers the AMC, CAT and AIO.',
      'For broader competition preparation, see <a class="ag-inline-link" href="/math-olympiad-amc-tutoring">maths olympiad tutoring</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for mathematically ambitious students',
    lede: 'From secure foundations to olympiad proofs. Each card opens its syllabus.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Before olympiad problems', courses: [
        { code: 'AMO / FD / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'Algebra and geometry done properly.' },
        { code: 'AMO / FD / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Number sense for younger students.' },
        { code: 'AMO / FD / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Fluent, accurate symbol work.' }
      ] },
      { num: 'II', h3: 'Competition', sub: 'AMC, AJMO and AIMO', courses: [
        { code: 'AMO / CP / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'From contest problems to proofs.' },
        { code: 'AMO / CP / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Counting and chance in depth.' },
        { code: 'AMO / CP / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Patterns and logic for younger students.' }
      ] },
      { num: 'III', h3: 'Beyond', sub: 'Proof and computation', courses: [
        { code: 'AMO / BY / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Rigorous case analysis.' },
        { code: 'AMO / BY / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'For students also drawn to informatics.' },
        { code: 'AMO / BY / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Testing conjectures with code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live olympiad classes from India',
    lede: 'Our olympiad teachers are based in India. The time difference works in favour of families: when it is 6pm in Sydney it is 1:30pm India time in winter and 12:30pm in summer, and 6pm in Perth is 3:30pm India time all year. Evening problem sessions in Australia therefore sit inside the Indian working day.',
    slots: [
      { time: 'Weekday evening', l: 'One area of olympiad maths per week.' },
      { time: 'Weekend', l: 'A timed proof paper and marking.' },
      { time: 'Before AIMO or AMO', l: 'Mixed papers and proof clean-up.' }
    ],
    cells: [
      { h3: 'Proof first', p: 'Every answer is written as a complete argument.' },
      { h3: 'Original problems', p: 'Never copied from AMT papers.' },
      { h3: 'Marked like a marker', p: 'Feedback on gaps, not only on the final answer.' },
      { h3: 'Matched squads', p: 'A squad of five to ten olympiad students working on the same problems.' },
      { h3: 'One-to-one option', p: 'For a student already on the olympiad pathway.' },
      { h3: 'No selection promised', p: 'Invitations and teams are the AMOC\'s decision.' }
    ]
  },

  projectsH2: 'Work our students have published',
  projectsLede: 'Projects made for their own sake. Browse the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews, exactly as written by families.',

  fees: {
    h2: 'Fees',
    lede: 'Olympiad classes cost a flat monthly amount in US dollars, the rate we use outside India; nothing is payable to join and you can stop at the end of any month. AMT competition entries are a matter between schools and the AMT, not us.',
    free: ['A first olympiad class, free', 'An honest read on proof-writing level', 'No card details'],
    group: ['Five to ten students at one level', 'One teacher across the term', 'Solutions marked and discussed', 'A certificate at the end'],
    one: ['A teacher for one student', 'Work shaped around that student\'s weakest area', 'Weekly times arranged with you']
  },

  faq: {
    eyebrow: 'Questions about the AMO',
    h2: 'What students and parents ask',
    items: [
      { q: 'What is the Australian Mathematical Olympiad?', a: 'An invitation-only proof-based mathematics exam run by the Australian Maths Trust for students in Year 11 or below. Since 2026 it has three parts: AMO Summer, AMO Winter and AMO Finals.' },
      { q: 'How do students get invited?', a: 'Invitations are made by AMOC State Directors. The AMT says students considered for invitational maths training need outstanding results in the AMC or a Maths for Young Australians module.' },
      { q: 'When were the 2026 AMO exams?', a: 'AMO Summer on Wednesday 25 February, AMO Winter on Wednesday 29 July, and AMO Finals on Tuesday 1 and Wednesday 2 September 2026.' },
      { q: 'What is the format of AMO Summer and Winter?', a: 'Six questions in three hours, sat at school, by about 250 invited students each. AMO Finals is two papers of four questions in four hours, for about 60 students.' },
      { q: 'What is the postage-stamp problem?', a: 'Finding which totals can be made from two fixed amounts, such as 5 and 8. For coprime amounts a and b, the largest total that cannot be made is ab minus a minus b.' },
      { q: 'What should a younger student enter first?', a: 'The AMC, then the AJMO (up to Year 8) or the AIMO (Years 7 to 10). The AIMO\'s written questions are the first open papers that test proof directly.' },
      { q: 'Can a student do maths and informatics olympiads together?', a: 'Not in the same year. The AMT and Australian Science Innovations allow a student to take part in only one olympiad program per year.' },
      { q: 'Do you use AMO past papers?', a: 'No. The AMT sells its own past papers. We teach with original problems and classical results proved in class.' },
      { q: 'Can lessons guarantee an invitation?', a: 'No. Only the AMOC decides invitations and selections. We teach the problem solving and proof writing that strong results reflect.' },
      { q: 'What happens in the free class?', a: 'A student works one olympiad style problem with a teacher, from experiment to written proof, and gets honest feedback on the proof.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for mathematically able students',
    lede: 'Competitions and maths pathways in Australia.',
    items: [
      { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMT competitions', p: 'The AMC, CAT and AIO in depth.' },
      { href: '/math-olympiad-amc-tutoring', label: 'Maths olympiad tutoring', p: 'Contest preparation at every level.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Every contest by month.' },
      { href: '/year-10-maths-methods-preparation', label: 'Year 10 Methods preparation', p: 'Strong algebra before senior maths.' },
      { href: '/online-maths-tutoring-australia', label: 'Maths tutoring online', p: 'Weekly maths alongside olympiad work.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'The national guide, state by state.' }
    ]
  },

  start: {
    h2: 'Book a free olympiad class',
    lede: 'Tell us the year level and which competitions the student has sat. The free class works one problem from experiment to proof and ends with honest advice on next steps.',
    readFirst: 'To look before booking, browse the full syllabi on our <a class="ag-inline-link" href="/course-atlas">course atlas</a> or read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>.',
    note: 'Messages on WhatsApp tend to be answered first. You will see an Indian number, since our teachers and office are in India, not Australia.',
    formNote: 'No card and no obligation. We reply once to find a time.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' },
        { href: '/year-10-maths-methods-preparation', label: 'Year 10 Methods' },
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy' }
      ] },
      { h4: 'Competitions', links: [
        { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMT competitions' },
        { href: '/math-olympiad-amc-tutoring', label: 'Olympiad tutoring' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/course-atlas', label: 'Course atlas' }
      ] }
    ],
    bottomRight: 'Independent of the AMT and the AMOC; facts checked at source'
  },

  personalityCss: `
.ag-root.ag-amop .ag-hero-grid { gap: clamp(1rem, 2.5vw, 2.2rem); }
.ag-root.ag-amop .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-amop .ag-capsule { border-left-width: 8px; }
.ag-root.ag-amop .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-amop .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-amop .ag-table caption { text-align: left; }
.ag-root.ag-amop .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-amop .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'Australian Maths Trust pages, read 7 October 2026. AMO: "restructured into three distinct competitions starting 1 January 2026, AMO Summer, AMO Winter, and AMO Finals"; previously "a two-day contest comprising four questions each day and conducted under school supervision (approx. 200 students invited)"; AMO Summer "Wednesday 25 February 2026", sat at school, "~ 250 students", "6 questions in 3 hours", selects for the Autumn School of Excellence and State Director mentoring; AMO Winter "Wednesday 29 July 2026", "6 questions in 3 hours", selects for AMO Finals; AMO Finals "Tuesday 1 and Wednesday 2 September", AMT-organised exam hubs, "~ 60 students", "4 questions in 4 hours each day", selects for the Spring School of Excellence; selections by AMOC State Directors, "around 200-250 students in year 11 or below"; AMO Summer cut-offs 35, 27, 16 for gold, silver, bronze (top 20, 50, 100); honourable mentions for full marks on one problem. Olympiad and Pathways: invitation needs outstanding AMC or Maths for Young Australians results; events include training schools, the AMOC Senior Contest, the AMO and the APMO; "four Australian girls will be selected" for EGMO and "six students" for the IMO; one olympiad program per year (AMT and Australian Science Innovations). AIMO: Thursday 10 September 2026, 4 hours, Years 7 to 10, pitched at Year 10, 10 questions (8 integer, 2 written), 35 marks. AJMO: Thursday 10 September 2026, up to Year 8, 10 problems, 90 minutes, online, integer answers 0 to 999. AMC: 4 to 6 August 2026, Years 3 to 12.',
    localProject: 'A worked olympiad lesson written by us: totals from moves worth 5 or 8 points. Enumeration shows 14 unreachable totals (1, 2, 3, 4, 6, 7, 9, 11, 12, 14, 17, 19, 22, 27), largest 27 = 5x8-5-8. Proof by remainders mod 5: multiples of 8 (0, 8, 16, 24, 32) hit remainders 0, 3, 1, 4, 2; the largest first-reach value is 32, so 27 = 32-5 is unreachable and every total from 28 is reachable; count check (5-1)(8-1)/2 = 14; non-coprime counterexample 6 and 9.',
    requiredMentions: ['AMO Summer', 'AMO Winter', 'AMO Finals', 'Wednesday 25 February', 'AMOC State Directors', 'Spring School of Excellence', 'postage-stamp problem', 'ab minus a minus b', 'Australian Science Innovations'],
    sources: [
      { claim: 'AMT, Australian Mathematical Olympiad: 2026 restructure, dates, formats, invitations, purposes, AMO Summer cut-offs.', url: 'https://amt.edu.au/amo' },
      { claim: 'AMT, Olympiad and Pathways: invitation route, events, EGMO and IMO selection, one program per year.', url: 'https://amt.edu.au/olympiad-programs' },
      { claim: 'AMT, AIMO: date, eligibility, format and scoring.', url: 'https://amt.edu.au/aimo' },
      { claim: 'AMT, AJMO: date, eligibility and format.', url: 'https://amt.edu.au/ajmo' },
      { claim: 'AMT, AMC: dates and divisions.', url: 'https://amt.edu.au/amc' }
    ],
    rejectedClaims: [
      'AMO Winter 2026 award cut-offs: the page text was cut off in the copy read, so only AMO Summer cut-offs are quoted.',
      '2027 AMO dates: not published on the pages read.',
      'Entry prices for the AMC, AIMO and AJMO printed on AMT pages: not shown (one-currency rule).',
      'Any AMT past paper or solution: never reproduced.',
      'Any promise of an invitation, medal or team selection: none made.',
      'Affiliation with the AMT, the AMOC or Australian Science Innovations: none; stated on the page.'
    ]
  }
};
