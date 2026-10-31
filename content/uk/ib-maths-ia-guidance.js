'use strict';
// IB Maths IA guidance (ag- exam door, IB Diploma internal assessment; UK cluster row UK065).
// ibo.org returns HTTP 403 to curl on every host tried (www.ibo.org, ibo.org, resources.ibo.org,
// ibpublishing.ibo.org), so nothing was read from IB's own site. Read raw on 31 October 2026 (copies under
// keyword-research-2026-09/uk-us-gap/src/ib-maths-ia-guidance/):
//  - IB, Academic integrity (policy), "Published October 2019", "© International Baccalaureate
//    Organization 2019": an unaltered copy of IB's PDF hosted by an IB school in Krakow (the March 2023
//    update on ibo.org could not be read). Verbatim: students "abstain from receiving non-permitted
//    assistance in the completion or editing of work, such as from friends, relatives, other students,
//    private tutors, essay writing or copy-editing services, pre-written essay banks or file sharing
//    websites"; "students are expected to produce work autonomously and should not receive additional help,
//    such as multiple edits of a piece of work."; teachers ensure "students are not provided with multiple
//    rounds of editing"; school infringements include "Providing undue assistance to candidates such as
//    over-editing or templating or manipulating finished pieces of work for improvement." and "Allowing the
//    submission of work produced by third parties such as teachers, tutors, parents, and peers."; "Plagiarism
//    is the most common form of student academic misconduct."; reasons for misconduct include "the easy
//    access to support services, such as writing or tutoring services"; parents who support the school "will
//    be less inclined to give unfair assistance to their children, for example, by writing or over-editing
//    their work"; coursework assistance "beyond what is recommended in the subject guidelines" means "the
//    work is not entirely produced by the student in question"; IB prohibits commercial use of its
//    publications by "tutoring organizations" without a licence (so we reproduce none).
//  - IB, Mathematics: analysis and approaches guide, "Published February 2019", read through a partial
//    public copy (readkong.com, first 20 pages only; the assessment and internal assessment chapters were not
//    in it). Verbatim: "it is expected that 30 hours will be spent on developing inquiry, modelling and
//    investigation skills. This includes up to 15 hours for work on the internal assessment which is called
//    the exploration."; "All coursework" "is to be authentic, based on the student's individual and original
//    ideas with the ideas and work of others fully acknowledged" (restated without the dash); "candidates must
//    acknowledge all sources used in work submitted for assessment"; HL 240 hours, SL 150 hours.
// NOT verified (ibo.org blocked): the IA criteria and their marks, the weighting of the IA, page limits,
// moderation. The page says so and sends students to their teacher's copy of the current guide.
// Our own: the topic-finding method, the classroom example, the we-do and we-do-not table. Spine: the
// exploration must be the student's own, so the only honest help is teaching the mathematics and the method
// around it, never the document. We do not read, comment on, write or edit any part of an exploration.
// Lesson family: assessed coursework where the help boundary is the subject of the page.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'IB MATHS IA', label: 'IB Maths IA guidance', blurb: 'The exploration must be the student\'s own. We teach the maths and the method around it, and never touch the document.' },
  slug: 'ib-maths-ia-guidance',
  code: 'iig',
  accent: '#007177',
  accentRationale: 'IB Maths IA: a deep sea teal (#007177), 5.46:1 on #FBF8F2 and 4.70:1 on the deepest paper tint, brighter than the Kent teal so the IB page reads as its own family',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'IB Maths IA guidance',
  title: 'IB Maths IA Guidance | What Help Is Allowed, and How',
  description: 'IB Maths IA guidance: what the exploration is, what the IB\'s academic integrity policy says about tutors, and how we teach the maths without touching the work.',
  ogDescription: 'The IB says students should not take help from private tutors in completing or editing assessed work. What that leaves for honest IA support.',
  twitterDescription: 'IB Maths IA, the exploration: the IB\'s own words on help, a method for finding your own topic, and the maths we teach around it.',
  pageName: 'IB Maths IA Guidance',
  webPageDescription: 'Guidance for IB Diploma students on the mathematics exploration, built from the IB\'s academic integrity policy and the Mathematics: analysis and approaches guide, with live maths teaching that never touches the student\'s work.',
  courseDescription: 'Live online teaching of the mathematics IB Diploma students use in their explorations, from modelling and statistics to calculus and proof, with no reading, writing or editing of any assessed work.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'IB Maths IA',
  navLinks: [
    { href: '#what', label: 'The exploration' },
    { href: '#rules', label: 'The IB\'s rules' },
    { href: '#line', label: 'Our line' },
    { href: '#topic', label: 'Finding a topic' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'IB Diploma &middot; Mathematics AA and AI &middot; Internal assessment',
  h1: 'IB Maths IA guidance',
  lede: 'The IB Maths IA is the internal assessment in IB Diploma mathematics, an individual piece of written mathematics that the IB\'s guide says "is called the exploration". The IB\'s academic integrity policy asks students to "abstain from receiving non-permitted assistance in the completion or editing of work", and it names private tutors in that list. So honest IA help has a clear edge. Modern Age Coders teaches IB maths live online, in a group or one to one, through our IB Maths AA and AI course: the mathematics an exploration might use and the general method of investigating. We never read, comment on, write or edit any part of an exploration.',
  secondaryCta: { href: '#rules', label: 'Read the IB\'s words' },
  wa: 'Hello Modern Age Coders, I would like a free IB maths lesson (not help with my IA document).',
  heroNote: 'From the IB\'s academic integrity policy and maths guide &middot; We never write, edit or review an exploration &middot; Not connected with the IB',
  spec: [
    ['What it is', 'The exploration, IB maths internal assessment'],
    ['Courses', 'Analysis and approaches, applications and interpretation'],
    ['Levels', 'SL and HL'],
    ['Class time', 'Up to 15 hours, within 30 for inquiry skills'],
    ['Whose work', 'The student\'s own, sources acknowledged'],
    ['Tutor help', 'Not in completing or editing the work'],
    ['We teach', 'The maths and the method, separately'],
    ['We never', 'Read, write or edit an exploration']
  ],
  capsuleQ: 'What is the IB Maths IA?',
  capsule: 'In IB Diploma mathematics, the internal assessment is a piece of the student\'s own mathematical writing that the IB\'s Mathematics: analysis and approaches guide says "is called the exploration". The same guide says the course expects 30 hours for developing inquiry, modelling and investigation skills, including "up to 15 hours for work on the internal assessment", at both SL and HL. Coursework must be "authentic, based on the student\'s individual and original ideas", with every source acknowledged. The IB\'s academic integrity policy asks students to refuse non-permitted help "in the completion or editing of work", naming "private tutors" among others. The IB\'s own site was closed to us, so for the current criteria and marks, use the subject guide your teacher holds. Modern Age Coders teaches the mathematics explorations tend to draw on, live online, and never works on the exploration itself.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses that teach the maths, not the IA',
    lede: 'Each card opens a full syllabus. None includes work on an assessed exploration.',
    items: [
      { course: 'ib-mathematics-aa-ai-masterclass', code: 'IIG / 01', title: 'IB Maths AA and AI', note: 'The whole course at SL and HL: functions, calculus, statistics and, for HL, proof, taught for understanding.' },
      { course: 'statistics-probability-maths-course', code: 'IIG / 02', title: 'Statistics and probability', note: 'Regression, correlation and distributions in depth, for students whose interests run to data.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'IIG / 03', title: 'Competition mathematics', note: 'Proof and problem solving for students who enjoy the reasoning side of mathematics.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'The exploration',
      h2: 'What is the IB Maths exploration?',
      lede: 'It is the internal assessment in each IB Diploma mathematics course: a piece of mathematics the student chooses, investigates and writes up. Here is what we could read in the IB\'s own documents, and what we could not.',
      body: [
        { kind: 'table', caption: 'The exploration, from the IB\'s Mathematics: analysis and approaches guide (published February 2019)', head: ['Point', 'What the guide says'], rows: [
          ['Its name', 'The internal assessment "is called the exploration"'],
          ['Class time', '30 hours for inquiry, modelling and investigation skills, including up to 15 hours for the internal assessment'],
          ['Courses and levels', 'Two subjects, analysis and approaches and applications and interpretation, each offered at SL and HL'],
          ['Teaching hours', '240 hours at HL and 150 at SL, of which 210 and 120 are for the syllabus'],
          ['Authenticity', 'Coursework must be "authentic, based on the student\'s individual and original ideas with the ideas and work of others fully acknowledged"'],
          ['Sources', '"candidates must acknowledge all sources used in work submitted for assessment"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we could not read',
          left: [
            'The IB\'s website returns an error (HTTP 403) to our automated reader on every IB address we tried, and the public copy of the guide we found stops before the assessment chapters. So this page does not state the exploration\'s criteria, their marks, its share of the grade or any length guidance.',
            'Your teacher has the current subject guide and the criteria for your session. Use those words, not a tutor\'s summary, including ours.'
          ],
          rightH3: 'Why that matters less than it seems',
          right: [
            'The single question families ask us most about the IA is not "what are the criteria?" but "what help is allowed?". That answer is in a document we could read in full: the IB\'s own academic integrity policy.',
            'The rest of this page is built on it.'
          ] },
        { kind: 'source', html: 'Source: IB, <em>Mathematics: analysis and approaches guide</em>, published February 2019, read through a partial public copy because ibo.org returned HTTP 403. Modern Age Coders is not connected with the International Baccalaureate.' }
      ]
    },
    {
      id: 'rules', tint: 'deep', eyebrow: 'The IB\'s rules',
      h2: 'Can a tutor help with the IB Maths IA?',
      lede: 'Not with the work itself. The IB\'s academic integrity policy names private tutors among those whose help in completing or editing assessed work a student should refuse.',
      body: [
        { kind: 'table', caption: 'The IB on help with assessed coursework, from Academic integrity (October 2019)', head: ['Who', 'What the policy says'], rows: [
          ['Students', 'Should "abstain from receiving non-permitted assistance in the completion or editing of work, such as from friends, relatives, other students, private tutors, essay writing or copy-editing services, pre-written essay banks or file sharing websites"'],
          ['Teachers', '"students are expected to produce work autonomously and should not receive additional help, such as multiple edits of a piece of work"'],
          ['Teachers', 'Must ensure "students are not provided with multiple rounds of editing, which would be contrary to instructions described in the relevant subject guides"'],
          ['Parents', 'Who support the school "will be less inclined to give unfair assistance to their children, for example, by writing or over-editing their work"'],
          ['Schools', 'Infringements include "over-editing or templating or manipulating finished pieces of work for improvement" and allowing work "produced by third parties such as teachers, tutors, parents, and peers"']
        ] },
        { kind: 'p', mt: true, html: 'The reasoning is set out plainly. When a student receives help "beyond what is recommended in the subject guidelines", the policy says, "the work is not entirely produced by the student in question", and the assessment "can only be fair if it truly and effectively reflects the genuine and authentic effort of the student". It even lists "the easy access to support services, such as writing or tutoring services" among the reasons students fall into misconduct. A tutoring business should read that sentence and draw a line, which is what the next section does.' },
        { kind: 'two', mt: true,
          leftH3: 'Plagiarism is the common case',
          left: [
            'The policy says "Plagiarism is the most common form of student academic misconduct." In maths that includes formulas, derivations, graphs and code taken from elsewhere without acknowledgement, not only sentences.',
            'The guide\'s rule is simple: acknowledge every source, in a consistent referencing style.'
          ],
          rightH3: 'A newer version exists',
          right: [
            'The copy we read is the October 2019 edition. The IB updated the policy in March 2023, and that edition sits on ibo.org, which was closed to us. Schools use the current version, so ask your coordinator for it, particularly on the use of AI tools.',
            'Nothing in a newer edition is likely to make tutor editing more acceptable, but read it rather than trust us.'
          ] },
        { kind: 'source', html: 'Source: International Baccalaureate Organization, <em>Academic integrity</em>, published October 2019, an unaltered copy of the IB\'s PDF hosted by an IB school, read 31 October 2026. The 2023 update on ibo.org returned HTTP 403 and has not been read.' }
      ]
    },
    {
      id: 'line', tint: '', eyebrow: 'Our line',
      h2: 'What do we do, and what do we never do?',
      lede: 'We teach mathematics and the general craft of investigating. We keep away from the exploration itself, entirely.',
      body: [
        { kind: 'table', caption: 'Modern Age Coders and the IB maths exploration', head: ['We do', 'We never do'], rows: [
          ['Teach the syllabus mathematics a student may later choose to use, such as modelling, regression, calculus or proof', 'Suggest, choose or approve a student\'s exploration topic'],
          ['Teach how mathematicians investigate in general, using our own practice problems unrelated to any student\'s exploration', 'Read, mark, comment on or "check" a draft, plan or outline'],
          ['Explain what acknowledging a source means and how referencing works', 'Write, rewrite, edit, proofread or format any part of an exploration'],
          ['Answer questions about mathematics the student brings, as mathematics', 'Work through the student\'s own data, model or derivation for them'],
          ['Point students to their teacher, who is the right person to guide the exploration', 'Supply example explorations, templates or structures to follow']
        ] },
        { kind: 'p', mt: true, html: 'If a student asks during a lesson for help with their exploration, the teacher will say no and explain why, and will suggest they take the question to their IB teacher. That is not unhelpfulness; it protects the student, whose diploma depends on the work being theirs. It also protects their school, because the policy treats allowing third-party work as a school infringement.' },
        { kind: 'two', mt: true,
          leftH3: 'Why teaching the maths still helps',
          left: [
            'A student who genuinely understands, say, least-squares regression or integration by parts can choose a richer question and pursue it on their own. Understanding is theirs to use; a tutor\'s paragraph is not.',
            'The guide\'s time budget, up to 15 class hours for the exploration, is small. Mathematics learned well beforehand is time not spent learning it during those hours.'
          ],
          rightH3: 'Where other help belongs',
          right: [
            'Guidance on the exploration itself comes from the IB teacher, within the limits the subject guide sets. That is the one adult whose help with the work the IB system expects.',
            'For the papers, our <a class="ag-inline-link" href="/ib-maths-tuition-online">IB maths tuition page</a> covers the courses more widely.'
          ] }
      ]
    },
    {
      id: 'topic', tint: 'tint', eyebrow: 'Finding a topic yourself',
      h2: 'How do I find my own IB maths IA topic?',
      lede: 'Not from a list of "IA ideas". The guide asks for the student\'s "individual and original ideas", so the method below helps you find one; it gives you none. The method is ours.',
      body: [
        { kind: 'ol', items: [
          'Write down five things you already spend time on: a sport, a game, music, a subject, a job, a place. Interest sustains work.',
          'For each, write one question that has a number in its answer: how fast, how many, how likely, how much, when.',
          'Cross out any question you could answer with one search or one calculation. You want a question that needs mathematics to unfold.',
          'For the questions left, list the mathematics from your course that might touch them. If you cannot list any, drop the question.',
          'Pick one, and take it to your IB teacher. They know the criteria and the scope, and they are the right person to say whether it will work.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'A classroom example (ours)', p: 'Not an exploration, just practice in the habit. Question: if every person in a room shakes hands once with everyone else, how many handshakes are there? Count small cases: 2 people give 1, 3 give 3, 4 give 6, 5 give 10.' },
          { h3: 'Make a conjecture', p: 'The differences grow by one each time, which suggests n(n minus 1) over 2. For 5 people that is 5 times 4 over 2, which is 10, matching the count. A pattern in four cases is a guess, not a proof.' },
          { h3: 'Then prove it', p: 'Each of n people shakes n minus 1 hands, but that counts every handshake twice, so divide by 2. An HL student could also prove it by induction: adding one person adds n new handshakes. Explaining why is the point.' }
        ] },
        { kind: 'p', mt: true, html: 'That loop, small cases, a conjecture, a check, a reason, is the general shape of mathematical investigation, and practising it on problems that are nobody\'s coursework is where we spend lesson time. The guide describes analysis and approaches as being for students who want to "construct, communicate and justify correct mathematical arguments"; the habit above is that, in miniature.' }
      ]
    },
    {
      id: 'courses', tint: 'deep', eyebrow: 'The two courses',
      h2: 'Does the IA differ between AA and AI?',
      lede: 'Both courses have an exploration. The guide describes the two subjects differently, and that difference often shapes the kind of mathematics a student reaches for.',
      body: [
        { kind: 'two',
          leftH3: 'Analysis and approaches',
          left: [
            'For students who "enjoy developing their mathematics to become fluent in the construction of mathematical arguments", and who "enjoy the thrill of mathematical problem solving and generalization."',
            'At HL the guide expects "strong algebraic skills and the ability to understand simple proof", and includes proof by induction.'
          ],
          rightH3: 'Applications and interpretation',
          right: [
            'For students "interested in developing their mathematics for describing our world and solving practical problems", harnessing technology alongside mathematical models.',
            'The guide says AI students "enjoy mathematics best when seen in a practical context."'
          ] },
        { kind: 'p', mt: true, html: 'These descriptions are the IB\'s, from the analysis and approaches guide, which describes both subjects in its introduction. They say nothing about which subject produces better explorations, and neither do we. What they suggest is that a student should pick a question whose mathematics fits the course they actually take, which their teacher will confirm.' },
        { kind: 'source', html: 'Source: IB, <em>Mathematics: analysis and approaches guide</em>, Nature of mathematics section, published February 2019.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Across the diploma',
    h2: 'When to learn which maths',
    lede: 'Mathematics learned before the exploration window is mathematics a student can choose to use. These stages are ours.',
    table: { caption: 'A maths-first route through the diploma', head: ['When', 'Focus', 'Secure when'], rows: [
      ['Start of year one', 'Functions, algebra and notation', 'Can move between graph, table and formula'],
      ['Through year one', 'Statistics and calculus foundations', 'Can model data and differentiate with understanding'],
      ['Before the exploration window', 'Investigation habit, on our own problems', 'Can run the cases, conjecture, check, reason loop alone'],
      ['Year two', 'The rest of the syllabus and the papers', 'Exploration work stays between the student and their IB teacher']
    ] },
    left: { h3: 'If the exploration is due soon', ps: [
      'We can still teach the mathematics a student is studying. We will not look at the exploration, however close the deadline.',
      'The IB teacher is the person to talk to about timing.'
    ] },
    right: { h3: 'After the diploma', ps: [
      'Students heading to maths-heavy degrees often continue with <a class="ag-inline-link" href="/courses/college-mathematics-complete-masterclass">university-level maths</a>.',
      'The <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level maths page</a> covers the other UK route for comparison.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Mathematics courses for IB Diploma students',
    lede: 'The syllabus, its deeper strands, and what follows. No course includes work on assessed coursework.',
    bands: [
      { num: 'I', h3: 'The diploma', sub: 'SL and HL', courses: [
        { code: 'UK / IIG / 01', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Maths AA and AI', blurb: 'Both subjects at both levels, taught for understanding.' },
        { code: 'UK / IIG / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Models, distributions and inference in depth.' },
        { code: 'UK / IIG / 03', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'For students taking both subjects.' }
      ] },
      { num: 'II', h3: 'Reasoning', sub: 'Proof and problems', courses: [
        { code: 'UK / IIG / 04', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Proof-based problem solving.' },
        { code: 'UK / IIG / 05', slug: 'a-level-further-maths-course', title: 'Further maths', blurb: 'Matrices, complex numbers and more, for HL students who want extra.' }
      ] },
      { num: 'III', h3: 'Beyond school', sub: 'University preparation', courses: [
        { code: 'UK / IIG / 06', slug: 'college-mathematics-complete-masterclass', title: 'University-level maths', blurb: 'Calculus, linear algebra and analysis.' },
        { code: 'UK / IIG / 07', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data science', blurb: 'Statistics and linear algebra for data careers.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Maths lessons with a clear boundary',
    lede: TIMING + ' Teachers are in India, which has no clock change: India time is four and a half hours ahead of UK time in summer and five and a half in winter. Lessons are set in UK time.',
    slots: [
      { time: 'After school', l: 'For diploma students in term time.' },
      { time: 'Weekend morning', l: 'Longer sessions on harder topics.' },
      { time: 'Holidays', l: 'Consolidation between years one and two.' }
    ],
    cells: [
      { h3: 'Syllabus maths', p: 'Taught for understanding, at SL or HL.' },
      { h3: 'Our own problems', p: 'Investigation practice on questions that are nobody\'s coursework.' },
      { h3: 'No document contact', p: 'We do not open, read or comment on any exploration.' },
      { h3: 'Group or 1-on-1', p: 'A batch of 15 to 20 at one level, or a teacher for one student.' },
      { h3: 'Sources taught', p: 'What acknowledgement means, in general.' },
      { h3: 'Teacher first', p: 'IA questions are sent back to the IB teacher, every time.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Projects made in our classes, none of them assessed coursework. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' reviews from our Google profile, as written.',

  fees: {
    h2: 'Fees for IB maths lessons',
    lede: 'A monthly fee in the currency we use for UK families, for maths teaching only. The first lesson is free, and nothing in any plan includes IA work.',
    free: ['A real IB maths lesson', 'A frank view of what is secure', 'No card needed'],
    group: ['15 to 20 students at one level', 'The same teacher across the year', 'Investigation practice on our problems', 'No coursework contact'],
    one: ['One student, one teacher', 'Paced to the student\'s course', 'The same boundary on coursework']
  },

  faq: {
    eyebrow: 'IB Maths IA questions',
    h2: 'What IB students and parents ask about the IA',
    items: [
      { q: 'What is the IB Maths IA?', a: 'It is the internal assessment in IB Diploma mathematics, which the IB\'s analysis and approaches guide says is called the exploration. It is the student\'s own piece of mathematical work, with all sources acknowledged.' },
      { q: 'Can a tutor help with my IB Maths IA?', a: 'Not with the work. The IB\'s academic integrity policy asks students to refuse non-permitted help in completing or editing assessed work, and names private tutors in that list. A tutor can teach the mathematics; guidance on the exploration comes from your IB teacher.' },
      { q: 'Will you check my IA draft?', a: 'No. We do not read, comment on, mark, edit or proofread any part of an exploration, at any stage. The policy says students should not receive multiple edits of a piece of work, and we will not be a source of them.' },
      { q: 'Can you give me IB Maths IA ideas?', a: 'No. The guide asks for the student\'s individual and original ideas. We share a general method for finding your own question and practise investigation on problems that are no one\'s coursework.' },
      { q: 'How much class time is there for the IA?', a: 'The analysis and approaches guide expects 30 hours for inquiry, modelling and investigation skills, including up to 15 hours for work on the internal assessment, at both SL and HL.' },
      { q: 'What are the IB Maths IA criteria?', a: 'Your teacher has them in the current subject guide. The IB website was closed to our reader, so we do not print criteria or marks we could not check. Use the IB\'s own wording.' },
      { q: 'Is the IA different for AA and AI?', a: 'Both courses have an exploration. The guide describes analysis and approaches as built around constructing mathematical arguments and applications and interpretation around describing the world and practical problems, which often shapes the mathematics students use.' },
      { q: 'What happens if work is not the student\'s own?', a: 'The IB treats it as academic misconduct, and its policy says plagiarism is the most common form. It also lists allowing work produced by tutors or parents as a school infringement. Ask your IB coordinator about the current policy.' },
      { q: 'What do your IB maths lessons cover, then?', a: 'The syllabus mathematics at SL or HL, and practice in investigating on our own problems. If a question about the exploration comes up, we send it to the student\'s IB teacher.' },
      { q: 'When are lessons?', a: TIMING + ' All times are in UK time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for IB and sixth-form students',
    lede: 'The wider course, computing, and the A level comparison.',
    items: [
      { href: '/ib-maths-tuition-online', label: 'IB maths tuition', p: 'The two courses and both levels.' },
      { href: '/ib-computer-science-online-tuition', label: 'IB computer science tuition', p: 'For students taking both subjects.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition', p: 'The other main UK route at 16.' },
      { href: '/a-level-computer-science-nea-help', label: 'A level computer science coursework', p: 'Another assessed project with a clear help boundary.' },
      { href: '/maths-olympiad-training-uk', label: 'Maths olympiad training', p: 'Proof and problems beyond the syllabus.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Our hub for every UK page.' }
    ]
  },

  start: {
    h2: 'Book a free IB maths lesson',
    lede: 'Tell us your subject, level and what you are studying now. The free lesson is on the syllabus mathematics, never on the exploration.',
    readFirst: 'Reading first? The <a class="ag-inline-link" href="/courses/ib-mathematics-aa-ai-masterclass">IB maths course page</a> lists every topic, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our method.',
    note: 'WhatsApp is the quickest route and free from a UK phone. Replies come from our team in India on a +91 number.',
    formNote: 'No card. One reply. No coursework, please.'
  },

  footer: {
    cols: [
      { h4: 'IB', links: [
        { href: '/ib-maths-tuition-online', label: 'IB maths tuition' },
        { href: '/courses/ib-mathematics-aa-ai-masterclass', label: 'IB maths course' },
        { href: '/ib-computer-science-online-tuition', label: 'IB computer science' },
        { href: '/maths-olympiad-training-uk', label: 'Olympiad training' }
      ] },
      { h4: 'More', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'The maths is ours to teach; the exploration is yours'
  },

  personalityCss: `
.ag-root.ag-iig .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-iig .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-iig .ag-section-head h2 { max-width: 24ch; }
.ag-root.ag-iig .ag-table caption { text-align: left; font-weight: 650; }
.ag-root.ag-iig .ag-table td:first-child { width: 46%; }
`,

  dossier: {
    curriculumAuthority: 'IB, Academic integrity, October 2019 (IB PDF via a school-hosted copy; ibo.org 403): students abstain from non-permitted assistance in completion or editing, naming private tutors; no multiple edits; teachers avoid multiple rounds of editing; school infringements include over-editing, templating and allowing third-party work by tutors or parents; plagiarism the most common misconduct; tutoring services listed among causes; parents less inclined to write or over-edit. IB, Mathematics: analysis and approaches guide, February 2019 (partial public copy): 30 hours inquiry including up to 15 hours for the internal assessment, "called the exploration"; coursework authentic with sources acknowledged; HL 240 and SL 150 hours; descriptions of AA and AI; HL simple proof and induction. Criteria, marks, weighting and length not verified.',
    localProject: 'The exploration must be the student\'s own. The page defines the IB maths internal assessment from the guide\'s own words, states openly which details (criteria, marks, weighting) it could not verify because ibo.org was closed, then sets out the IB academic integrity policy\'s position on help from students\' and teachers\' side, quoting its naming of private tutors. A two-column table draws our line: we teach syllabus mathematics and general investigation on our own problems, and we never suggest topics, read drafts, edit or supply examples. It offers a five-step method for finding one\'s own question and a handshake problem worked as a classroom example of conjecture and proof. Lesson family: assessed coursework where the help boundary is the subject of the page.',
    requiredMentions: ['is called the exploration', 'up to 15 hours for work on the internal assessment', 'abstain from receiving non-permitted assistance in the completion or editing of work', 'should not receive additional help, such as multiple edits', 'over-editing or templating or manipulating', 'Plagiarism is the most common form of student academic misconduct', 'easy access to support services, such as writing or tutoring services', 'We never do'],
    sources: [
      { claim: 'IB Academic integrity policy, October 2019: student, teacher, parent and school responsibilities; penalty matrix; plagiarism (copy of the IB PDF hosted by an IB school; ibo.org returned 403).', url: 'https://vilo.krakow.pl/wp-content/uploads/2022/06/academic-integrity-policy-english.IBO_.pdf' },
      { claim: 'IB Mathematics: analysis and approaches guide, February 2019: the exploration, time allocation, academic honesty, course descriptions (partial public copy).', url: 'https://www.readkong.com/page/mathematics-analysis-and-approaches-guide-holy-heart-of-1953931' },
      { claim: 'IB official copy of the same guide, listed for reference; returned HTTP 403 to curl and was not read.', url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-analysis-and-approaches-guide-en.pdf' }
    ],
    rejectedClaims: [
      'Everything on ibo.org: www.ibo.org, ibo.org, resources.ibo.org and ibpublishing.ibo.org all returned HTTP 403 to curl; we stopped and did not work around the block.',
      'IA criteria names, marks per criterion, total marks, the IA\'s share of the final grade and any page or word guidance: in the guide\'s assessment chapter, which the readable copy omits; not printed.',
      'The March 2023 update of the academic integrity policy, including its AI guidance: on ibo.org only; not read, and the page says so.',
      'A first-assessment-2029 mathematics course reported in search results: not read at a primary source; not mentioned.',
      'Lists of IA topic ideas or example explorations: refused on principle.',
      'Any grade or score claim.'
    ]
  }
};
