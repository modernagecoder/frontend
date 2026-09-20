'use strict';
// Scottish Mathematical Challenge practice (ag- competition spoke, UK cluster Phase 2).
// Organiser facts read at the Scottish Mathematical Council's Mathematical Challenge home page
// (www.wpr3.co.uk/MC/index.pdf, linked from scottishmathematicalcouncil.org) on 20 September 2026:
// "Mathematical Challenge is a problem solving competition for individual pupils in Scottish secondary
// schools and upper primary schools (mainly P7)"; "It has been running since 1976 under the aegis of the
// Scottish Mathematical Council"; "The aim is to promote mathematics as a source of interest and
// pleasurable achievement"; "The competition is divided into four divisions: Primary (P7), Junior (S1 and
// S2), Middle (S3 and S4), and Senior (S5 and S6)"; "Each year there are two rounds of problems for
// Secondary schools and three rounds for Primary schools"; "In early summer winners of Gold, Silver and
// Bronze Certificates are announced in each section; the top winners are usually invited to a prize-
// giving ceremony and receive a much prized Mathematical Challenge mug"; and the line this page is built
// on: "Marks are given for explanations of answers rather than for simply getting the correct answer."
// Entry is through a teacher; problems, solutions and entry forms are downloaded from the organiser's
// site, which also carried a note dated 8/1/26 that Primary Round 3 had been uploaded.
// The primary and secondary guidelines pages publish their rules as images, which we cannot read, so
// nothing is said here about time allowed, where the work is done or what help is permitted.
// Spine: the answer is the cheap part. Our own worked example, written fresh and checked in code on
// 20 September 2026: pencils sold in packs of 4 and 7, largest number you cannot buy exactly is 17
// (impossible: 1, 2, 3, 5, 6, 9, 10, 13, 17), and the argument that settles it is that 18, 19, 20 and 21
// are all possible, after which every number is four more than one already known.
// No Mathematical Challenge problem is reproduced; the organiser publishes its own archive.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'SMC', label: 'Scottish Mathematical Challenge', blurb: 'The competition that marks the explanation rather than the answer, running since 1976.' },
  slug: 'scottish-mathematical-challenge-practice',
  code: 'smc',
  accent: '#3E4E0E',
  accentRationale: 'Scottish Mathematical Challenge: a dark olive from the solver (7.41:1 on every paper tint), separated from the competitions bronze and from every Scottish and Irish accent',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Scottish Mathematical Challenge practice',
  title: 'Scottish Mathematical Challenge Practice | P7 to S6',
  description: 'Preparing for the Scottish Mathematical Challenge: four divisions from P7 to S6, two or three rounds a year, and marks given for the explanation, not the answer.',
  ogDescription: 'The Scottish Mathematical Challenge has marked explanations rather than answers since 1976. What that means for how a pupil in P7 to S6 should practise.',
  twitterDescription: 'Scottish Mathematical Challenge preparation: write the argument, not just the number.',
  pageName: 'Scottish Mathematical Challenge Practice',
  webPageDescription: 'Preparation guidance for the Scottish Mathematical Council\'s Mathematical Challenge, for pupils from P7 to S6, based on what the organiser publishes about divisions, rounds, marking and awards.',
  courseDescription: 'Live online mathematics classes for Scottish pupils that teach problem solving and written mathematical argument, the skills the Mathematical Challenge marks.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'Scottish Mathematical Challenge',
  navLinks: [
    { href: '#challenge', label: 'The competition' },
    { href: '#explain', label: 'Marks for the argument' },
    { href: '#practise', label: 'How to practise' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Scotland &middot; P7 to S6 &middot; Running since 1976',
  h1: 'Scottish Mathematical Challenge practice',
  lede: 'One sentence on the organiser\'s own home page tells a pupil everything about how to prepare for this competition, and most preparation ignores it: "Marks are given for explanations of answers rather than for simply getting the correct answer." That is not a nicety. It means a pupil who writes the right number and stops has handed in the cheap half of the work, while a pupil who explains why no other number could be right has handed in the expensive half as well. Almost every other paper a Scottish pupil sits rewards the opposite habit. This page is about the switch, and about a competition that has been asking for it since 1976.',
  secondaryCta: { href: '#explain', label: 'See what an explanation looks like' },
  wa: 'Hello Modern Age Coders, my child is doing the Scottish Mathematical Challenge and I would like a free maths class.',
  heroNote: 'Organiser facts, dated &middot; No past problem reproduced &middot; No promise of any certificate',
  spec: [
    ['Organiser', 'The Scottish Mathematical Council'],
    ['Running since', '1976'],
    ['For', 'Individual pupils, P7 to S6'],
    ['Divisions', 'Primary, Junior, Middle, Senior'],
    ['Rounds a year', 'Three primary, two secondary'],
    ['Marked on', 'The explanation, not the answer'],
    ['Awards', 'Gold, silver and bronze in early summer'],
    ['Entered by', 'A teacher, not by us']
  ],
  capsuleQ: 'In short',
  capsule: 'The Mathematical Challenge is run by the Scottish Mathematical Council and describes itself as "a problem solving competition for individual pupils in Scottish secondary schools and upper primary schools (mainly P7)", running since 1976 with the aim "to promote mathematics as a source of interest and pleasurable achievement". There are four divisions, Primary (P7), Junior (S1 and S2), Middle (S3 and S4) and Senior (S5 and S6), with three rounds a year for primary schools and two for secondary. Gold, silver and bronze certificates are announced in early summer and the top winners are invited to a prize-giving, where they receive a Mathematical Challenge mug. The rule that shapes preparation is the organiser\'s own: "Marks are given for explanations of answers rather than for simply getting the correct answer." We teach the mathematics and the writing that go with it, live online for ages 6 to 67. The first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a pupil who wants harder problems',
    lede: 'Choose by the stage the pupil is at in Scotland, not by the division they will enter.',
    items: [
      { course: 'olympiad-competition-mathematics-mastery', code: 'SMC / 01', title: 'Olympiad and competition maths', note: 'Problems that hide their method, and the habit of writing down why an answer has to be the one it is.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'SMC / 02', title: 'Middle school maths mastery', note: 'For S1 to S3: the algebra and geometry the Junior and Middle divisions lean on.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'SMC / 03', title: 'Primary maths, Years 1 to 5', note: 'For a P7 pupil whose number work still needs a pencil before the interesting part starts.' }
    ]
  },

  sections: [
    {
      id: 'challenge', tint: 'tint', eyebrow: 'The competition',
      h2: 'Four divisions, two or three rounds, and fifty years of the same idea',
      lede: 'Quoted and summarised from the Scottish Mathematical Council\'s own Mathematical Challenge pages, read on 20 September 2026.',
      body: [
        { kind: 'table', caption: 'The Mathematical Challenge as its organiser describes it', head: ['Part', 'What the organiser says', 'What it means for a pupil'], rows: [
          ['Who it is for', '"individual pupils in Scottish secondary schools and upper primary schools (mainly P7)"', 'An individual entry, not a team; a P7 pupil can start a year before secondary'],
          ['Since', '"running since 1976 under the aegis of the Scottish Mathematical Council"', 'Half a century of published problems, all of them available to work through'],
          ['Divisions', '"Primary (P7), Junior (S1 and S2), Middle (S3 and S4), and Senior (S5 and S6)"', 'Stages, not ages: the Scottish system all the way up'],
          ['Rounds', '"two rounds of problems for Secondary schools and three rounds for Primary schools"', 'A year-long competition rather than one morning'],
          ['Marking', '"Marks are given for explanations of answers rather than for simply getting the correct answer"', 'The written argument is the work'],
          ['Awards', 'Gold, silver and bronze certificates announced in early summer, with top winners invited to a prize-giving', 'Recognition at the end of the school year, not in the week of the round'],
          ['The mug', 'Top winners "receive a much prized Mathematical Challenge mug"', 'The most Scottish prize in British mathematics'],
          ['Aim', '"to promote mathematics as a source of interest and pleasurable achievement"', 'Nothing here is a selection test for anything']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Two things this page does not tell you, because the organiser publishes them as images we cannot read: how long a pupil gets for a round, and what help is allowed. The guidelines for primary and secondary schools are on the organiser\'s own site and a teacher entering a class will have them. Ask the teacher, not a tutor, and certainly not us.',
            'What we can say is that a competition with two or three rounds spread across a year is not a sprint. It is closer to homework that happens to be interesting, which is a much better fit for a pupil who likes mathematics than a single timed paper.'
          ],
          right: [
            'The entry route is a teacher. Problems, solutions and the individual entry form are downloaded from the organiser\'s site by the school, and a pupil who wants to take part should say so in a maths lesson. We have no part in it and could not enter anyone if we tried.',
            'The archive is the other thing worth knowing about. Fifty years of past problems and solutions sit on the organiser\'s own pages, free, which makes this one of the best-stocked competitions in the UK for a pupil who simply wants harder mathematics to do.'
          ] },
        { kind: 'source', html: 'Sources: the <a class="ag-inline-link" href="https://www.scottishmathematicalcouncil.org/mathematical-challenge/" rel="noopener" target="_blank">Scottish Mathematical Council</a> and its <a class="ag-inline-link" href="http://www.wpr3.co.uk/MC/index.pdf" rel="noopener" target="_blank">Mathematical Challenge home page</a>, read 20 September 2026. Modern Age Coders is not connected with the Scottish Mathematical Council.' }
      ]
    },
    {
      id: 'explain', tint: 'deep', eyebrow: 'The method',
      h2: 'The answer is the cheap part',
      lede: 'A worked example, written by us rather than taken from any past paper, showing what the difference is worth.',
      body: [
        { kind: 'p', html: 'Here is a problem in the right spirit. <strong>A shop sells pencils only in packs of 4 and packs of 7. What is the largest number of pencils you cannot buy exactly?</strong> Try it before reading on; it takes a P7 pupil about ten minutes and an S5 pupil about two.' },
        { kind: 'two', mt: true,
          leftH3: 'Answer A, which earns very little',
          left: [
            '"17."',
            'That is correct. It is also unmarkable beyond the single fact. A marker cannot tell whether the pupil found it, guessed it, remembered it from somewhere or asked someone. Nothing in the answer shows that the pupil knows 18 onwards are all possible, which is the part that makes 17 the largest rather than merely an example.'
          ],
          rightH3: 'Answer B, which earns the marks',
          right: [
            '"The numbers you cannot make are 1, 2, 3, 5, 6, 9, 10, 13 and 17. After 17, look at 18 = 4 + 7 + 7, 19 = 4 + 4 + 4 + 7, 20 = 4 + 4 + 4 + 4 and 21 = 7 + 7 + 7. Those are four in a row. Every number above 21 is four more than one of them, so adding packs of four reaches all of them. Therefore nothing above 17 is impossible, and 17 is the largest."',
            'Same number, entirely different piece of work. The second answer closes the problem: it shows why there cannot be a bigger one, which is what the question actually asked.'
          ] },
        { kind: 'three', cells: [
          { h3: 'Four in a row is the trick', p: 'With packs of four, once you have four consecutive numbers you have everything above them. That single idea is the whole argument, and a pupil who has met it once will use it for life.' },
          { h3: 'Say what you checked', p: 'Listing the impossible numbers is not padding. It is evidence that the search was systematic rather than lucky, and it costs two lines.' },
          { h3: 'Finish with the claim', p: 'The last sentence should answer the question that was asked, in words. Markers are reading for it, and pupils almost never write it.' }
        ] },
        { kind: 'p', html: 'We checked the example in code before printing it: with packs of 4 and 7 the impossible totals are exactly 1, 2, 3, 5, 6, 9, 10, 13 and 17, and 18 to 21 are all reachable. That is the habit worth copying at home too. Work the problem, then test the claim, then write the argument that makes the test unnecessary.' },
        { kind: 'source', html: 'The problem and both answers are ours, written for this page. The Mathematical Challenge publishes its own past problems and solutions, which are the right place to meet the real thing.' }
      ]
    },
    {
      id: 'practise', tint: 'plain', eyebrow: 'What to practise',
      h2: 'Writing mathematics is a separate skill, and it is teachable',
      lede: 'Most pupils who lose marks here are not stuck on the mathematics. They are stuck on the sentence after it.',
      body: [
        { kind: 'table', caption: 'What a marker can and cannot give credit for', head: ['A pupil writes', 'Credit for the answer', 'Credit for the reasoning'], rows: [
          ['The final number alone', 'Yes', 'None: nothing shows how it was found'],
          ['Working, with no words', 'Yes', 'Some: a marker may follow it, or may not'],
          ['Words with no working', 'Depends', 'Some, if the words actually argue'],
          ['Working, then a sentence saying what it proves', 'Yes', 'Full: the pupil has answered the question asked'],
          ['A correct method with an arithmetic slip', 'No', 'Most of it, because the reasoning is visible']
        ] },
        { kind: 'two', mt: true,
          left: [
            'That last row is the one to show a worried pupil. In a competition that marks explanations, a slipped multiplication costs far less than it does in a school test, because the thinking is still on the page. The pupils who are hurt most by this marking are the fast, accurate ones who have never had to write anything down.',
            'The fix is small and dull: after every problem, one sentence beginning "So" or "Therefore" that says what has been shown. Three weeks of that changes how a pupil\'s work reads.'
          ],
          right: [
            'The second habit is to write for a reader who is not in the room. Not the teacher who set it, not a parent who watched the working happen, but a stranger who has only the page. Pupils find this easier if they are told to write it for a friend who was off sick.',
            'In our classes this is taught the same way for mathematics and for programming: say what you are about to do, do it, then say what it shows. The pupils who take to <a class="ag-inline-link" href="/british-informatics-olympiad-preparation">informatics olympiads</a> later are usually the ones who learned it here first.'
          ] }
      ]
    },
    {
      id: 'scotland', tint: 'tint', eyebrow: 'In the Scottish system',
      h2: 'Where the divisions sit, and what else is open to a Scottish pupil',
      lede: 'The Challenge runs on Scottish stages, so nothing needs translating. The competitions beside it mostly do not.',
      body: [
        { kind: 'table', caption: 'The four divisions and the stage each covers', head: ['Division', 'Stage', 'Roughly'], rows: [
          ['Primary', 'P7', 'The last year of primary school'],
          ['Junior', 'S1 and S2', 'The first two years of secondary'],
          ['Middle', 'S3 and S4', 'Through the National 5 years'],
          ['Senior', 'S5 and S6', 'Higher and Advanced Higher']
        ] },
        { kind: 'two', mt: true,
          left: [
            'A Scottish pupil can enter this and the UK-wide competitions in the same year: they are run by different bodies and nothing conflicts. The <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lays the whole year out, including the UKMT challenges and the informatics and AI olympiads.',
            'The stage names matter more than they look. Most UK competition material is written in English year groups, and a parent in Aberdeen translating Year 9 into S2 is doing arithmetic nobody should have to do. Our <a class="ag-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland page</a> sets out the stages and the Scottish qualifications properly.'
          ],
          right: [
            'For a pupil who likes this sort of problem and also likes computers, the informatics route opens at secondary: the British Informatics Olympiad is sat in school in December and January, and it rewards exactly the same instinct, the one that asks whether an answer could be wrong.',
            'For a pupil who does not want a competition at all, none of this is compulsory and none of it is a measure of anything. The mathematics is worth doing because it is interesting, which is what the organiser says too.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs from a right answer to a finished argument',
    lede: 'Progress here is about what a pupil writes, not about which topics they have covered.',
    table: { caption: 'From answer to argument', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['P6 to P7', '1. Systematic search', 'Tries cases in an order and can say what the order was'],
      ['P7 to S1', '2. Working on the page', 'Leaves enough behind that someone else could follow it'],
      ['S1 to S3', '3. The closing sentence', 'Ends with a line saying what has been shown, unprompted'],
      ['S3 to S6', '4. Why nothing else works', 'Argues that no other answer is possible, not just that this one is']
    ] },
    left: { h3: 'If a round is close', ps: [
      'Do not start new topics. Take problems the pupil has already solved and rewrite the solutions properly; that is the fastest gain available in this competition.',
      'A pupil who solved four and explained none is in a better position than one who solved two and explained both, but only if somebody shows them the difference this week.'
    ] },
    right: { h3: 'What this leads to', ps: [
      'The same skill is what senior olympiad mathematics is made of, and what university mathematics is made of after that.',
      'It transfers sideways too: the <a class="ag-inline-link" href="/a-level-computer-science-nea-help">A-level computing project</a> is marked on evidence of reasoning for exactly the same reason.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Maths and computing courses for Scottish pupils',
    lede: 'Arranged by stage, with each syllabus a click away.',
    bands: [
      { num: 'I', h3: 'Primary into S1', sub: 'P6, P7 and first year', courses: [
        { code: 'SMC / P / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'The number work everything else stands on.' },
        { code: 'SMC / P / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Calculation that stops costing thinking time.' },
        { code: 'SMC / P / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python as a way of testing whether a method really works.' }
      ] },
      { num: 'II', h3: 'Junior and Middle', sub: 'S1 to S4', courses: [
        { code: 'SMC / J / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths mastery', blurb: 'Pre-algebra and geometry, argued rather than drilled.' },
        { code: 'SMC / J / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Problems that do not announce their method.' },
        { code: 'SMC / J / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A first typed language, for pupils who like to check things.' }
      ] },
      { num: 'III', h3: 'Senior', sub: 'S5 and S6', courses: [
        { code: 'SMC / S / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Algebra through to calculus, at Higher pace.' },
        { code: 'SMC / S / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Where argument and evidence meet numbers.' },
        { code: 'SMC / S / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Reasoning about method, in code.' }
      ] },
      { num: 'IV', h3: 'Beside the maths', sub: 'For pupils who also build', courses: [
        { code: 'SMC / X / 01', slug: 'python-complete-masterclass-teens', title: 'Python from start to finish', blurb: 'Every core idea, with prediction before running.' },
        { code: 'SMC / X / 02', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'A first language for P6 and P7.' },
        { code: 'SMC / X / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'For the senior pupil looking past school.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'A weekly hour, and someone who reads what the pupil wrote',
    lede: 'Teaching is live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer. Scottish pupils usually take a weekday evening, fixed in UK time.',
    slots: [
      { time: 'Weekday evening', l: 'The usual slot from S1 upwards.' },
      { time: 'Early evening', l: 'Kept for P7 and S1, before concentration runs out.' },
      { time: 'Weekend morning', l: 'For longer sessions on a single hard problem.' }
    ],
    cells: [
      { h3: 'Written work read properly', p: 'A teacher reads what the pupil actually wrote and says where the argument stops being convincing.' },
      { h3: 'Problems written by us', p: 'Fresh problems in the same spirit. The organiser\'s archive is where the real ones live.' },
      { h3: 'Groups of five to ten', p: 'Small enough that every solution gets read aloud, large enough to hear a better method than your own.' },
      { h3: 'Scottish stages used', p: 'P7, S1 to S6, National 5, Higher and Advanced Higher, called by their own names.' },
      { h3: 'One to one when wanted', p: 'For a pupil working well beyond their year, or one who will not speak up in a group.' },
      { h3: 'No result promised', p: 'No certificate, no prize-giving invitation and no mug is promised by us.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Four published projects by students at our school, none of them coursework and all of them explained by their authors. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'From our Google profile, reproduced exactly as families wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly rate in US dollars for every country outside India. No joining fee and no term to commit to.',
    free: ['A proper lesson with a teacher', 'An honest read on where the maths is', 'No card details taken'],
    group: ['Five to ten pupils at one stage', 'The same teacher weekly', 'Written solutions read and discussed', 'A certificate at the end'],
    one: ['One pupil, one teacher', 'Aimed at a particular weakness', 'Useful for a pupil far ahead of their stage']
  },

  faq: {
    eyebrow: 'Mathematical Challenge questions',
    h2: 'What Scottish parents and teachers ask',
    items: [
      { q: 'Who can enter the Scottish Mathematical Challenge?', a: 'The organiser describes it as a problem-solving competition for individual pupils in Scottish secondary schools and upper primary schools, mainly P7. Entry is through a school, so the first step is a word with the maths teacher.' },
      { q: 'What are the four divisions?', a: 'Primary (P7), Junior (S1 and S2), Middle (S3 and S4) and Senior (S5 and S6), as the Scottish Mathematical Council publishes them.' },
      { q: 'How many rounds are there?', a: 'The organiser says there are three rounds a year for primary schools and two for secondary schools, so it runs across the school year rather than on a single morning.' },
      { q: 'How is the Mathematical Challenge marked?', a: 'In the organiser\'s own words, "marks are given for explanations of answers rather than for simply getting the correct answer". A right answer with no reasoning earns very little.' },
      { q: 'How long does a pupil get for a round?', a: 'We do not say, because the organiser publishes its guidelines as images we cannot read. The primary and secondary guidelines are on its own site and a teacher entering pupils will have them.' },
      { q: 'What do winners get?', a: 'Gold, silver and bronze certificates are announced in each section in early summer, and the top winners are usually invited to a prize-giving ceremony where they receive a Mathematical Challenge mug.' },
      { q: 'How long has it been running?', a: 'Since 1976, under the aegis of the Scottish Mathematical Council, which makes it one of the longest-running school mathematics competitions in Britain.' },
      { q: 'Can a pupil do this and the UKMT challenges?', a: 'Yes. They are run by different organisations on different timetables, and a Scottish pupil can enter both in the same school year.' },
      { q: 'Do you use past Challenge problems in lessons?', a: 'No. We write our own in the same spirit. The organiser publishes fifty years of past problems with solutions, free, and that is the right place for the real thing.' },
      { q: 'What do classes cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month and one-to-one teaching USD 150, with nothing to pay to join and no minimum term.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Scottish pupils and young mathematicians',
    lede: 'The Scottish system, the competitions beside this one, and the place the whole year is laid out.',
    items: [
      { href: '/coding-and-ai-classes-in-scotland', label: 'Coding and AI classes in Scotland', p: 'The Scottish stages, qualifications and school year.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'Every contest we could confirm, month by month.' },
      { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge', p: 'The English and Welsh primary competition, marked very differently.' },
      { href: '/british-informatics-olympiad-preparation', label: 'British Informatics Olympiad', p: 'Where the same instinct goes when a pupil likes programming.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Four school systems, and every UK page.' },
      { href: '/best-online-coding-classes-uk', label: 'Choosing an online class', p: 'What to ask any provider before paying.' }
    ]
  },

  start: {
    h2: 'Book a free lesson on problem solving',
    lede: 'Tell us the stage and what the pupil enjoys. The free lesson works on a real problem, and we say afterwards what the writing looked like as well as the mathematics.',
    readFirst: 'Rather read than ring? Every course keeps its syllabus on its <a class="ag-inline-link" href="/courses">course page</a>, the method is on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> shows the order topics come in.',
    note: 'A WhatsApp message is free from a UK mobile and usually reaches us first. Our number is Indian, which we say on every page, and there is no British office.',
    formNote: 'No card, no obligation. One reply to settle a time.'
  },

  footer: {
    cols: [
      { h4: 'Competitions', links: [
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge' },
        { href: '/british-informatics-olympiad-preparation', label: 'Informatics olympiad' },
        { href: '/a-level-computer-science-nea-help', label: 'A-level coursework help' }
      ] },
      { h4: 'In Scotland', links: [
        { href: '/coding-and-ai-classes-in-scotland', label: 'Classes in Scotland' },
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Olympiad maths' },
        { href: '/courses/complete-high-school-mathematics-mastery', label: 'High school maths' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] }
    ],
    bottomRight: 'We teach the argument; the council sets the problems'
  },

  personalityCss: `
.ag-root.ag-smc .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-smc .ag-capsule { border-left-width: 4px; border-radius: 0 6px 6px 0; }
.ag-root.ag-smc .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-smc .ag-table caption { text-align: left; font-style: italic; font-weight: 600; }
.ag-root.ag-smc .ag-table th:first-child { letter-spacing: 0.02em; }
.ag-root.ag-smc .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-smc .ag-two h3 { letter-spacing: -0.008em; }
.ag-root.ag-smc .ag-slots { gap: 1.3rem; }
`,

  mustMention: ['explanations of answers rather than for simply getting the correct answer', 'since 1976', 'Primary (P7), Junior (S1 and S2), Middle (S3 and S4), and Senior (S5 and S6)', 'packs of 4 and packs of 7', 'four in a row', 'Mathematical Challenge mug']
};
