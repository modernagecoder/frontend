'use strict';
// Oxbridge maths interview problem solving (ag- guide door, UK and US exams cluster, row UK073).
// Sources read raw with curl on 31 October 2026 (copies in keyword-research-2026-09/uk-us-gap/src/oxbridge-maths-interview-problem-solving/):
//  - University of Oxford Mathematical Institute, Interviews page (last updated 12 Aug 2026): "Interviews occur in
//    December."; format varies by college; "one or two interviews in their first choice college, and at least one
//    other interview at another college"; "Interviews are online via video call for all candidates."; "Each
//    interview lasts for about 25 minutes, and is largely mathematical in nature."; may ask about an area studied,
//    a point of technique or curve sketching, a problem talked through, a definition and its consequences; "We are
//    trying to see how you think when you do Mathematics."; "we are not mind-readers - if you don't say anything,
//    we can't tell what you're thinking!"; practice interview with a teacher; explain A Level ideas to family; "do
//    lots of problems, on and near your syllabus".
//  - Oxford Mathematical Institute, Undergraduate Study page: TMUA in the October sitting, 12 to 16 October 2026;
//    registration opens 1 June 2026; booking 20 July to 28 September 2026; UCAS deadline 15 October (6pm UK time);
//    29 colleges accept Mathematics; open applications carry "no admissions advantage or disadvantage"; weekly Oxford
//    Maths Admissions Test Livestream with "a particular focus on the TMUA".
//  - University of Cambridge, What to expect at your Cambridge interview: "academic conversations about the subject";
//    "everyone who is made an offer will have been interviewed"; invitations mostly in November; "Main interview
//    period: 7 December to 18 December 2026"; winter pool "around mid to late January 2027"; online or in person by
//    College and course; "Most applicants will have 1 or 2 interviews lasting a total of 35 minutes to an hour.";
//    some 3 or 4; share workings for problem-solving questions in science or mathematics; possible pre-interview
//    reading; "Some companies offer interview preparation for a fee. These services are not endorsed by the
//    University. They do not have access to any exclusive information."
//  - University of Cambridge, Preparing for your Cambridge interview: practise talking about the subject; practice
//    interview with "someone who doesn't know you well"; maths and science: "think about how you might show or
//    explain the way you worked out a problem"; on the day: interviewers "are interested in how you work out your
//    answers and how you think"; you can ask them to explain; pen and paper; stylus and tablet; College 'tech check'.
//  - Cambridge Faculty of Mathematics, Admissions FAQ: "In a mathematics interview you will be asked to solve some
//    mathematical problems. That's all: maths, followed by some more maths."; "There are no trick questions."; "about
//    20 to 40 minutes"; "around 75-80% of applicants have been invited to interview"; solving straight away vs getting
//    stuck and using hints; "we will always ask some questions where you will get stuck somewhere"; topics "numbers,
//    sequences, integrals, graph sketching, etc, but also sometimes probability, and some basic mechanics"; Maths with
//    Physics always at least one mechanics question; "preparing for STEP is also good preparation for interview";
//    My Cambridge Application: list maths topics covered "this will help interviewers ask appropriate questions".
//  - Cambridge Faculty of Mathematics, How to apply: TMUA October sitting, registration deadline 28th September 2026,
//    used "to help identify candidates who are unlikely to be competitive"; "Historically, between 75% and 80% of
//    applicants have been invited to interview"; "Interviews take place in early-mid December"; "Some colleges also
//    have written assessments as part of their interview process."; "around 30% of all applicants have ultimately
//    received conditional offers"; typical STEP offer grades 1 in papers 2 and 3.
//  - University of Cambridge, Admission tests and assessments: "Sharing admissions assessment or interview questions is
//    strictly prohibited."
// www.ox.ac.uk returned HTTP 403 on 31 October 2026 (another page in this group); the central Oxford interviews pages
// were not read and not retried. Oxford shortlisting figures are therefore not printed.
// Our own material, labelled on the page: five interview-style problems (sketching y = x/(1 + x^2); n^3 - n divisible
// by 6, extension n^5 - n by 30; "staircase numbers" as sums of two or more consecutive positive integers, which are
// exactly the numbers that are not powers of 2; comparing the integrals of sin x and sin^2 x on [0, pi]; the longer
// piece of a randomly broken stick, expected length 3/4), each with a hint ladder; a narrated attempt at the staircase
// problem; and a timeline. No real interview question is reproduced or reconstructed from reports.
// Lesson family: thinking aloud and using a hint.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'INTERVIEW', blurb: 'Oxford and Cambridge maths interviews are problem-solving conversations with hints. What each university says about format and timing, and five practice problems of ours.' },
  slug: 'oxbridge-maths-interview-problem-solving',
  code: 'oip',
  accent: '#1B6D70',
  accentRationale: 'Oxbridge maths interviews: a deep teal #1B6D70 from the cluster allocation, about 5.7:1 on #FBF8F2 and above 4.5:1 on every paper tint, bluer than the TMUA pine and far from the ESAT umber',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Oxbridge maths interview preparation',
  title: 'Oxbridge Maths Interview Preparation: Problems and Practice',
  description: 'Oxbridge maths interview preparation: what Oxford and Cambridge say about format, length and timing for 2027 entry, and five practice problems of ours with hints.',
  ogDescription: 'Oxford and Cambridge maths interviews are about how you think when you are stuck. Formats, dates and lengths from the universities, plus original problems with hint ladders.',
  twitterDescription: 'Oxbridge maths interviews: format and dates from Oxford and Cambridge, and original practice problems with hints.',
  pageName: 'Oxbridge Maths Interview Preparation',
  webPageDescription: 'A guide to mathematics interviews at the University of Oxford and the University of Cambridge for 2027 entry, built from the Oxford Mathematical Institute, the Cambridge Faculty of Mathematics and Cambridge admissions pages, with original problems for practising thinking aloud.',
  courseDescription: 'Live online practice for Oxford and Cambridge mathematics interviews: unfamiliar problems solved aloud with a teacher, hints given and used, and A Level and Further Maths depth for Year 13 applicants.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Oxbridge maths interviews',
  navLinks: [
    { href: '#format', label: 'Format' },
    { href: '#purpose', label: 'What they test' },
    { href: '#problems', label: 'Practice problems' },
    { href: '#aloud', label: 'Thinking aloud' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Year 13 &middot; Interviews in December 2026',
  h1: 'Oxbridge maths interview preparation: problem solving out loud',
  lede: 'An Oxford or Cambridge mathematics interview is not a viva on the A Level syllabus. It is a problem, often one you cannot finish alone, worked through with one or two mathematicians who offer hints and watch what you do with them. Cambridge\'s Faculty of Mathematics says it will always ask something you get stuck on. Oxford says tutors want to see how you think when you do mathematics. This page sets out each university\'s own description of the interview for 2027 entry, then gives five problems we wrote for practising the skill they describe: thinking aloud, getting stuck honestly, and using a hint well.',
  secondaryCta: { href: '#problems', label: 'Try the practice problems' },
  wa: 'Hello Modern Age Coders, I have an Oxford or Cambridge maths interview coming up and would like a free practice class.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Interview facts from Oxford and Cambridge pages only',
  spec: [
    ['Oxford', 'About 25 minutes each, online, in December'],
    ['Cambridge', '1 or 2 interviews, 35 minutes to an hour in total'],
    ['Cambridge dates', '7 to 18 December 2026'],
    ['Test first', 'TMUA, October 2026, for both'],
    ['Content', 'Problems, hints, graph sketching'],
    ['Our problems', 'Original, labelled ours'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Start', 'One free class']
  ],
  capsuleQ: 'In short',
  capsule: 'Oxbridge maths interviews are academic problem-solving conversations held by Oxford colleges and Cambridge Colleges for mathematics applicants, after the TMUA in October. Oxford interviews are online, about 25 minutes each, in December; Cambridge\'s main interview period for 2027 entry is 7 to 18 December 2026, with most applicants having one or two interviews totalling 35 minutes to an hour. Both say they want to see how you think. Modern Age Coders runs live online interview practice with original problems, in a group of 15 to 20 or 1-on-1.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for an Oxbridge maths applicant',
    lede: 'Problem solving beyond the syllabus, the admissions-test and STEP mathematics that sits around the interview, and the Further Maths Cambridge requires.',
    items: [
      { course: 'olympiad-competition-mathematics-mastery', code: 'OIP / 01', title: 'Olympiad and competition maths', note: 'Unfamiliar problems every week, the closest thing to an interview a course can give.' },
      { course: 'tmua-mat-step-preparation-course', code: 'OIP / 02', title: 'TMUA and STEP preparation', note: 'The test before the interview and the papers in the offer; Cambridge says STEP work also prepares you to interview.' },
      { course: 'a-level-further-maths-course', code: 'OIP / 03', title: 'A Level Further Maths', note: 'Cambridge requires it of A Level applicants; interview problems often lean on it.' }
    ]
  },

  sections: [
    {
      id: 'format', tint: 'tint', eyebrow: 'Oxford and Cambridge side by side',
      h2: 'What are Oxford and Cambridge maths interviews like?',
      lede: 'Both are short, mathematical and held in December. Oxford interviews every shortlisted mathematician online, at two colleges at least; Cambridge decides online or in person College by College, and its Faculty describes the interview in one line: maths, followed by some more maths.',
      body: [
        { kind: 'table', caption: 'Mathematics interviews for 2027 entry, from each university\'s own pages (read 31 October 2026)', head: ['', 'University of Oxford', 'University of Cambridge'], rows: [
          ['Admissions test first', 'TMUA, October sitting (12 to 16 October 2026)', 'TMUA, October sitting; registration deadline 28 September 2026'],
          ['When', '"Interviews occur in December."', 'Main period 7 to 18 December 2026; winter pool mid to late January 2027'],
          ['Where', 'Online via video call for all candidates', 'Online or in person, depending on College and course'],
          ['How many', 'One or two at the first-choice college, at least one at another', 'Most applicants 1 or 2; some 3 or 4'],
          ['How long', 'About 25 minutes each', '35 minutes to an hour in total (University); about 20 to 40 minutes (Faculty)'],
          ['What happens', 'Talk about maths studied, technique, curve sketching, a problem, a new definition', 'Mathematical problems with guidance; some Colleges add a written assessment'],
          ['Who is interviewed', 'Shortlisted applicants', 'Historically 75% to 80% of Mathematics applicants']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Oxford, in its own words',
          left: [
            'The Mathematical Institute lists four things an interview may do: ask about an area of mathematics you have studied, look closely at a point of technique or curve sketching, set a problem and ask you to talk through your thinking, or give you a definition and ask you to work out its consequences.',
            'It adds a line worth pinning above the desk: tutors are "not mind-readers", so a candidate who works in silence gives them nothing to assess.'
          ],
          rightH3: 'Cambridge, in its own words',
          right: [
            'The Faculty says there are no trick questions and that interviews mostly cover numbers, sequences, integrals and graph sketching, sometimes probability and basic mechanics. Applicants to Mathematics with Physics always get at least one mechanics question.',
            'Cambridge also says the number of interviews, and their timing, say nothing about how strong a candidate is. Families who read meaning into a single interview or a late slot can stop.'
          ] },
        { kind: 'source', html: 'Sources: the Oxford Mathematical Institute <a class="ag-inline-link" href="https://www.maths.ox.ac.uk/study-here/undergraduate-study/interviews" rel="noopener" target="_blank">interviews page</a> and <a class="ag-inline-link" href="https://www.maths.ox.ac.uk/study-here/undergraduate-study" rel="noopener" target="_blank">undergraduate study page</a>; the University of Cambridge <a class="ag-inline-link" href="https://www.undergraduate.study.cam.ac.uk/apply/after/cambridge-interviews" rel="noopener" target="_blank">interviews page</a>; the Cambridge Faculty of Mathematics <a class="ag-inline-link" href="https://www.maths.cam.ac.uk/undergrad/admissions/faq" rel="noopener" target="_blank">admissions FAQ</a> and <a class="ag-inline-link" href="https://www.maths.cam.ac.uk/undergrad/admissions/how-to-apply" rel="noopener" target="_blank">how to apply</a>; all read 31 October 2026. We are not connected with either university or any college.' }
      ]
    },
    {
      id: 'purpose', tint: 'deep', eyebrow: 'What the interviewers are looking for',
      h2: 'What do Oxbridge maths interviewers want to see?',
      lede: 'How you think when the answer is not obvious. Cambridge\'s Faculty says an instant solution mostly shows you have seen a problem before, while getting stuck and using a hint shows potential. That turns the usual exam instinct upside down.',
      body: [
        { kind: 'table', caption: 'What each source says it is assessing, quoted from the pages read on 31 October 2026', head: ['Source', 'In its words'], rows: [
          ['Oxford Mathematical Institute', '"We are trying to see how you think when you do Mathematics."'],
          ['Cambridge Faculty of Mathematics', '"All we are interested in is your ability to tackle mathematical problems."'],
          ['Cambridge Faculty of Mathematics', '"we will always ask some questions where you will get stuck somewhere"'],
          ['University of Cambridge', 'Interviews assess understanding of the subject, readiness for high-level study, and "your ability to think critically and independently"'],
          ['University of Cambridge', 'On the day, interviewers "are interested in how you work out your answers and how you think"; you may ask them to explain anything you do not understand']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why being stuck is the point',
          left: [
            'The Faculty FAQ spells out the logic. If a candidate solves a problem straight away, the interviewers learn that the candidate can solve that problem, "and perhaps that you have seen it before". If the candidate gets stuck, a hint follows, and the interviewers see whether it can be used.',
            'So the hint is not a penalty. A student who takes a hint, says what it changes and moves on is showing exactly the quality the interview exists to find.'
          ],
          rightH3: 'Why rehearsed answers fail',
          right: [
            'Cambridge forbids sharing interview questions, and the university says paid preparation companies "do not have access to any exclusive information". Lists of supposed past questions are therefore unofficial at best.',
            'Even a genuine past question would not help much. Recognising a problem removes the very thing interviewers are trying to watch: a mind meeting something new.'
          ] },
        { kind: 'p', mt: true, html: '<strong>What the universities say about paid preparation.</strong> Cambridge\'s interviews page states that some companies offer interview preparation for a fee, that these services are not endorsed by the University, and that all official guidance is free. That includes us. Oxford\'s Mathematical Institute says the main preparation is doing mathematics, lots of it, on and near the syllabus. What a class can add is a teacher who sets fresh problems and gives hints the way an interviewer would.' },
        { kind: 'source', html: 'Quotations from the Oxford Mathematical Institute interviews page, the Cambridge Faculty of Mathematics admissions FAQ, and the University of Cambridge <a class="ag-inline-link" href="https://www.undergraduate.study.cam.ac.uk/apply/after/interview-preparation" rel="noopener" target="_blank">preparing for your interview</a> and <a class="ag-inline-link" href="https://www.undergraduate.study.cam.ac.uk/apply/how/admission-tests" rel="noopener" target="_blank">admission tests</a> pages, read 31 October 2026.' }
      ]
    },
    {
      id: 'problems', tint: 'plain', eyebrow: 'Five problems of ours',
      h2: 'What kind of problems come up in an Oxbridge maths interview?',
      lede: 'Problems that start inside A Level and leave it quickly: a curve to sketch, a claim about whole numbers, a new definition, an integral to compare, a short probability. The five below are ours, written for this page in the areas Cambridge and Oxford name. None is a reported interview question. Each comes with the hints we would give, in order.',
      body: [
        { kind: 'table', caption: 'Our five interview-style problems, with hint ladders', head: ['Our problem', 'Hint 1', 'Hint 2', 'Where it leads'], rows: [
          ['Sketch y = x / (1 + x<sup>2</sup>).', 'What happens when x is replaced by &minus;x?', 'What happens for very large x?', 'An odd curve through the origin, peaking at (1, 1/2), dipping to (&minus;1, &minus;1/2), flattening towards 0'],
          ['Show that n<sup>3</sup> &minus; n is divisible by 6 for every integer n.', 'Factorise it fully.', 'What is true of any three consecutive integers?', 'n(n &minus; 1)(n + 1) holds a multiple of 2 and a multiple of 3'],
          ['Call a number a staircase number if it is a sum of two or more consecutive positive integers. Which numbers are staircase numbers?', 'List 1 to 16. Which fail?', 'Write the sum of k terms starting at a as one fraction.', 'Exactly the numbers that are not powers of 2'],
          ['Which is larger: the integral of sin x or of sin<sup>2</sup> x, from 0 to &pi;?', 'Where does sin x lie on that interval?', 'Compare a number between 0 and 1 with its square.', 'sin<sup>2</sup> x &le; sin x there, so the first is larger: 2 against &pi;/2'],
          ['A metre stick is broken at a uniformly random point. What is the expected length of the longer piece?', 'If the break is at x, how long is the longer piece?', 'Use symmetry about the middle.', '3/4 of a metre']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'The curve', p: 'The derivative of x / (1 + x<sup>2</sup>) is (1 &minus; x<sup>2</sup>) / (1 + x<sup>2</sup>)<sup>2</sup>, zero at x = &plusmn;1. But a good candidate sketches before differentiating: oddness, the origin and the behaviour at infinity give the shape, and the derivative only pins the turning points.' },
          { h3: 'The extension', p: 'An interviewer who sees n<sup>3</sup> &minus; n done quickly will push: is n<sup>5</sup> &minus; n always divisible by 30? It is. It factorises as n(n &minus; 1)(n + 1)(n<sup>2</sup> + 1), which handles 2 and 3, and checking n = 0 to 4 modulo 5 shows a factor of 5 every time.' },
          { h3: 'The stick', p: 'If the break is at x, the longer piece is the larger of x and 1 &minus; x. By symmetry assume x is at least 1/2, where x is uniform on [1/2, 1]. Its average is the midpoint, 3/4. Saying "by symmetry" out loud, and justifying it, is half the marks an interviewer would give.' }
        ] },
        { kind: 'source', html: 'All five problems, hints and solutions are ours, written on 31 October 2026, in the topic areas the Cambridge Faculty of Mathematics lists (numbers, sequences, integrals, graph sketching, probability) and the activities the Oxford Mathematical Institute describes (curve sketching, a problem talked through, a new definition explored). They are not reported or reconstructed interview questions, which Cambridge prohibits sharing.' }
      ]
    },
    {
      id: 'aloud', tint: 'tint', eyebrow: 'One problem, narrated',
      h2: 'How do you think out loud in a maths interview?',
      lede: 'By saying what you are trying, why, and what you notice, in short sentences, while you work. Here is our staircase problem as a strong candidate might talk it through, with the two moments where an interviewer would usually step in.',
      body: [
        { kind: 'ol', items: [
          '<strong>Restate it.</strong> "So I want numbers that are sums of at least two consecutive positive whole numbers, like 9 = 4 + 5 or 9 = 2 + 3 + 4."',
          '<strong>Try small cases and say what happens.</strong> "3 is 1 + 2, 5 is 2 + 3, 6 is 1 + 2 + 3, 7 is 3 + 4. I can\'t make 1, 2 or 4. Let me check 8: no. 16? Also no."',
          '<strong>Name the pattern as a guess, not a fact.</strong> "The failures so far are 1, 2, 4, 8, 16. My guess is that powers of 2 are exactly the ones that fail, but I haven\'t shown anything yet."',
          '<strong>Find a general form, with or without the hint.</strong> "A run of k terms starting at a adds up to k(2a + k &minus; 1)/2. So twice the number is k times (2a + k &minus; 1)." An interviewer might offer this step if the candidate is circling.',
          '<strong>Notice the parity.</strong> "k and 2a + k &minus; 1 differ by 2a &minus; 1, which is odd, so one of them is odd and the other even. Both are at least 2. So twice the number has an odd factor bigger than 1, which means the number itself does."',
          '<strong>Close both directions.</strong> "A power of 2 has no odd factor above 1, so it can\'t be a staircase number. For the other direction I\'d need to build a run for any number with an odd factor; could I try that with 12?" Here the interviewer may hint: use the odd factor as the length of the run.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What made that strong',
          left: [
            'The candidate guessed in public and labelled the guess as a guess. They wrote the general sum before trying to prove anything with it. When they reached the harder direction they said so plainly and offered a concrete case instead of going quiet.',
            'Nothing in it needs mathematics beyond Year 12. What it needs is the habit of narrating, which most students have never been asked to practise.'
          ],
          rightH3: 'Finishing the construction',
          right: [
            'For 12 the odd factor is 3, so try a run of three centred on 12 / 3 = 4: that gives 3 + 4 + 5 = 12. In general a number with an odd factor m above 1 can be written as m terms centred on its quotient by m, or, when that run dips below 1, as a shorter run made by cancelling negative and positive terms.',
            'An interviewer would not expect every detail of that last step in 25 minutes. They would expect the candidate to see the idea, test it, and say what still needs checking.'
          ] },
        { kind: 'source', html: 'The narration is ours and illustrates the advice in Cambridge\'s <a class="ag-inline-link" href="https://www.undergraduate.study.cam.ac.uk/apply/after/interview-preparation" rel="noopener" target="_blank">interview preparation page</a> to "think about how you might show or explain the way you worked out a problem", and the Oxford Mathematical Institute\'s suggestion to practise explaining A Level ideas aloud.' }
      ]
    },
    {
      id: 'timeline', tint: 'deep', eyebrow: 'From the TMUA to an offer',
      h2: 'When are Oxbridge maths interviews for 2027 entry?',
      lede: 'December 2026 for both. Cambridge\'s main period is 7 to 18 December 2026 and invitations mostly go out in November; Oxford\'s Mathematical Institute says interviews occur in December. Decisions for October applicants arrive in January 2027.',
      body: [
        { kind: 'table', caption: 'The 2027-entry route for a mathematics applicant, from the Oxford and Cambridge pages', head: ['Stage', 'Oxford', 'Cambridge'], rows: [
          ['UCAS application', 'By 15 October, 6pm UK time', 'By 15 October'],
          ['Admissions test', 'TMUA, 12 to 16 October 2026', 'TMUA, October sitting'],
          ['Extra form', 'None named on the Institute page', 'My Cambridge Application, listing the maths topics you have covered'],
          ['Interview invitations', 'After shortlisting', 'Mostly November, some early December'],
          ['Interviews', 'December, online', '7 to 18 December 2026; winter pool mid to late January 2027'],
          ['Offers', 'Conditional, on A Level or equivalent grades', 'Conditional, typically including grades 1 in STEP 2 and STEP 3'],
          ['Share made offers', 'Not read by us', 'Around 30% of all Mathematics applicants in previous years (Faculty)']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Tell Cambridge what you have covered',
          left: [
            'The Faculty asks applicants to list the mathematics topics in their qualifications on My Cambridge Application, because this "will help interviewers ask appropriate questions". A student on a course that has not yet reached complex numbers should say so.',
            'It is also the place to mention any lack of help with STEP at school. Cambridge says applicants in that position are not disadvantaged and that free support follows an offer.'
          ],
          rightH3: 'Get the technology right',
          right: [
            'Cambridge says mathematics applicants may need to share workings, sometimes with a stylus and tablet on a shared whiteboard, and that Colleges may run a tech check. Practise writing mathematics on that setup before the day, not during it.',
            'For any online interview: a quiet room, a charged device, working camera and microphone, and pen and paper within reach. Cambridge lists all of these.'
          ] },
        { kind: 'source', html: 'Dates and stages from the Oxford Mathematical Institute undergraduate study and interviews pages and the Cambridge interviews page and Faculty admissions pages, read 31 October 2026. The central Oxford admissions site refused our request that day and was not retried, so Oxford shortlisting figures are not given here.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Eight weeks to December',
    h2: 'Four stages before the interview',
    lede: 'Our suggested plan from the October test to the December interviews. It assumes Year 13 school work continues alongside, as it must.',
    table: { caption: 'Our interview practice plan', head: ['When', 'Stage', 'You are ready to move on when'], rows: [
      ['Late October', '1. Problems, untimed and alone', 'You have tried twenty unfamiliar problems and written down where each one stalled'],
      ['Early November', '2. Problems aloud, on your own', 'You can talk through a whole problem to a recording without long silences'],
      ['Mid November', '3. Problems aloud, with a stranger', 'Someone who does not know you sets problems and gives hints, and you use them'],
      ['Early December', '4. Two mock interviews', 'Two 25-minute sessions on screen with a shared whiteboard, then a rest']
    ] },
    left: { h3: 'If the invitation comes late', ps: [
      'Cambridge says the timing of an invitation says nothing about the candidate. Skip stage 1 and go straight to talking problems through.',
      'One honest mock with a stranger is worth more than ten solo sessions in the last week.'
    ] },
    right: { h3: 'If you are in Year 12', ps: [
      'Do lots of problems on and near the syllabus, as Oxford advises, and start STEP-style questions slowly. Cambridge says STEP preparation doubles as interview preparation.',
      'Explain one A Level idea a week to someone at home. It feels odd, and it is the cheapest practice there is.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'What we teach an Oxbridge maths applicant',
    lede: 'Three groups: problem solving for the interview, the school mathematics it stands on, and the tests around it.',
    bands: [
      { num: 'I', h3: 'Problem solving', sub: 'For the interview itself', courses: [
        { code: 'OIP / P / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Fresh problems, weekly.' },
        { code: 'OIP / P / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and algorithms', blurb: 'For Mathematics and Computer Science applicants.' },
        { code: 'OIP / P / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The probability that sometimes appears.' }
      ] },
      { num: 'II', h3: 'The school mathematics', sub: 'Years 12 and 13', courses: [
        { code: 'OIP / S / 01', slug: 'a-level-further-maths-course', title: 'A Level Further Maths', blurb: 'Required of A Level applicants at Cambridge.' },
        { code: 'OIP / S / 02', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A Level Maths', blurb: 'Pure and mechanics in depth.' },
        { code: 'OIP / S / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Mathematics', blurb: 'Analysis and Approaches HL applicants.' }
      ] },
      { num: 'III', h3: 'The tests around it', sub: 'October and June', courses: [
        { code: 'OIP / T / 01', slug: 'tmua-mat-step-preparation-course', title: 'TMUA and STEP preparation', blurb: 'Before and after the interview.' },
        { code: 'OIP / T / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'For Computer Science interview problems.' },
        { code: 'OIP / T / 03', slug: 'college-mathematics-complete-masterclass', title: 'University mathematics', blurb: 'A first look at first-year topics.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How practice runs',
    h2: 'Live interview practice through November and December',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekday evenings', l: 'A new problem, solved aloud in turns.' },
      { time: 'Weekend mornings', l: 'Mock interviews on a shared whiteboard.' },
      { time: '1-on-1', l: 'Full 25-minute mocks with a teacher you have not met.' }
    ],
    cells: [
      { h3: 'Unseen problems', p: 'Every problem is new to the student; recognising one defeats the exercise.' },
      { h3: 'Hints on purpose', p: 'Teachers hold back, then hint, the way an interviewer would.' },
      { h3: 'Narration marked', p: 'Feedback covers what the student said, not only what they wrote.' },
      { h3: 'Groups of 15 to 20', p: 'Students watch each other think aloud, which teaches the habit fast.' },
      { h3: 'Whiteboard practice', p: 'Writing mathematics on a tablet or shared board, before the real day.' },
      { h3: 'No offer promised', p: 'We are not endorsed by either university and we promise no place.' }
    ]
  },

  projectsH2: 'What our students have made',
  projectsLede: 'A few of the mathematics, coding and machine-learning projects our students have published. The <a class="ag-inline-link" href="/student-labs">student labs</a> hold the rest.',
  reviewsLede: 'Copied without edits from reviews on our Google business profile.',

  fees: {
    h2: 'Fees',
    lede: 'Oxford and Cambridge charge nothing for interviews, and Cambridge says all official guidance is free. Our practice classes are optional and billed monthly; most interview students join for six to eight weeks and stop in December.',
    free: ['A free first class', 'One of our problems, solved aloud with hints', 'No card details'],
    group: ['Groups of 15 to 20', 'A different problem every lesson', 'Turns at the whiteboard', 'Monthly, stop after December'],
    one: ['One applicant, one teacher', 'Mock interviews at full length', 'For an invitation already in hand']
  },

  faq: {
    eyebrow: 'Interview questions',
    h2: 'What Oxbridge maths applicants and parents ask',
    items: [
      { q: 'What happens in an Oxbridge maths interview?', a: 'You are given mathematical problems and asked to work on them aloud while one or two interviewers watch and offer hints. Oxford also mentions curve sketching, points of technique and exploring a new definition.' },
      { q: 'Are Oxford maths interviews online?', a: 'Yes. The Oxford Mathematical Institute says interviews are online via video call for all candidates, in December, at the first-choice college and at least one other.' },
      { q: 'How long is a Cambridge maths interview?', a: 'The Faculty of Mathematics says an interview typically lasts about 20 to 40 minutes. The University says most applicants have one or two interviews totalling 35 minutes to an hour, with some having three or four.' },
      { q: 'When are Cambridge interviews in 2026?', a: 'Cambridge gives the main interview period as 7 to 18 December 2026, with invitations mostly sent in November. Winter pool interviews take place around mid to late January 2027.' },
      { q: 'How many Cambridge maths applicants get an interview?', a: 'The Faculty of Mathematics says that historically between 75% and 80% of applicants have been invited to interview, and that around 30% of all applicants have ultimately received conditional offers.' },
      { q: 'Where can I find Oxbridge maths interview questions?', a: 'Not from the universities: Cambridge says sharing interview questions is strictly prohibited. Practise on unfamiliar problems instead, such as STEP questions, problem books and the original problems on this page.' },
      { q: 'Is it bad to get stuck in a Cambridge maths interview?', a: 'No. The Faculty says it will always ask some questions where you get stuck, and that seeing how you use a hint helps it judge mathematical potential.' },
      { q: 'Do I need interview coaching for Oxford or Cambridge?', a: 'The universities say no special training is needed and that paid services have no exclusive information. Practice with someone who does not know you, as Cambridge suggests, is the part a class can supply.' },
      { q: 'What topics come up in Cambridge maths interviews?', a: 'The Faculty lists numbers, sequences, integrals and graph sketching, sometimes probability and some basic mechanics. Mathematics with Physics applicants always get at least one mechanics question.' },
      { q: 'When are your classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you linked to Oxford or Cambridge?', a: 'No. Modern Age Coders is independent and is not endorsed by the University of Oxford, the University of Cambridge or any college, and we have no inside information about interviews.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for sixth-form problem solvers',
    lede: 'Competitions and school courses that build the habit of meeting new problems.',
    items: [
      { href: '/british-mathematical-olympiad-bmo-preparation', label: 'British Mathematical Olympiad', p: 'Written proofs of hard problems, a natural warm-up for interviews.' },
      { href: '/maths-olympiad-training-uk', label: 'Maths olympiad training in the UK', p: 'Problem solving across the UKMT rounds.' },
      { href: '/mathematical-olympiad-for-girls-preparation', label: 'Mathematical Olympiad for Girls', p: 'Proof-style problems for girls in the UK.' },
      { href: '/further-maths-tuition-online', label: 'Further Maths tuition online', p: 'The A Level Cambridge asks mathematicians to take.' },
      { href: '/a-level-maths-tuition-online', label: 'A Level Maths tuition online', p: 'The syllabus interview problems start from.' },
      { href: '/ukmt-maths-challenge-tutoring', label: 'UKMT maths challenge tutoring', p: 'Short unfamiliar problems, from Year 7 up.' }
    ]
  },

  start: {
    h2: 'Book a free interview practice class',
    lede: 'Say which university and course you applied for and whether you have an invitation yet. The free class gives you one of our problems to work aloud, with hints when you need them, and tells you honestly how your narration comes across.',
    readFirst: 'To see how a lesson is run before booking, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">every course</a>.',
    note: 'Our teachers work from India and timetable interview practice in UK time. A WhatsApp message from a UK number usually gets the quickest answer.',
    formNote: 'No fee and no card; one reply from us to fix a time.'
  },

  footer: {
    cols: [
      { h4: 'Problem solving', links: [
        { href: '/british-mathematical-olympiad-bmo-preparation', label: 'British Mathematical Olympiad' },
        { href: '/maths-olympiad-training-uk', label: 'Olympiad training' },
        { href: '/further-maths-tuition-online', label: 'Further Maths tuition' },
        { href: '/a-level-maths-tuition-online', label: 'A Level Maths tuition' }
      ] },
      { h4: 'Courses', links: [
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Olympiad mathematics' },
        { href: '/courses/tmua-mat-step-preparation-course', label: 'TMUA and STEP preparation' },
        { href: '/courses/a-level-further-maths-course', label: 'A Level Further Maths' },
        { href: '/coding-classes-in-united-kingdom', label: 'All UK pages' }
      ] }
    ],
    bottomRight: 'Say it while you think it'
  },

  personalityCss: `
.ag-root.ag-oip .ag-hero h1 { letter-spacing: -0.014em; max-width: 26ch; }
.ag-root.ag-oip .ag-capsule { border-left-width: 3px; padding-left: 1.3rem; }
.ag-root.ag-oip .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-oip .ag-table caption { text-align: left; letter-spacing: 0.01em; }
.ag-root.ag-oip .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-oip .ag-three h3 { letter-spacing: -0.008em; }
.ag-root.ag-oip .ag-steps li { line-height: 1.66; }
.ag-root.ag-oip .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'Interview facts read raw on 31 October 2026 from the Oxford Mathematical Institute interviews page (December; one or two interviews at the first-choice college and at least one elsewhere; online for all; about 25 minutes; four kinds of question; how you think; not mind-readers; do lots of problems) and undergraduate study page (TMUA 12 to 16 October 2026; UCAS 15 October; 29 colleges), the University of Cambridge interviews page (academic conversations; main period 7 to 18 December 2026; winter pool January 2027; 1 or 2 interviews totalling 35 minutes to an hour; share workings; paid preparation not endorsed and without exclusive information) and preparation page (practice with someone who does not know you; stylus and tablet; tech check), the Cambridge Faculty of Mathematics FAQ (maths followed by more maths; no trick questions; 20 to 40 minutes; 75 to 80% interviewed; always some questions where you get stuck; topics; mechanics for Maths with Physics; STEP as interview preparation; My Cambridge Application) and how-to-apply page (TMUA deadline 28 September 2026; early to mid December; written assessments at some colleges; around 30% offers), and the Cambridge admission tests page (sharing questions prohibited).',
    localProject: 'An interview-practice lesson of our own: five problems with two-step hint ladders (sketching y = x/(1 + x^2); n^3 - n divisible by 6 with the extension n^5 - n divisible by 30; staircase numbers, the sums of two or more consecutive positive integers, which are exactly the non-powers of 2; the integrals of sin x and sin^2 x on [0, pi], 2 against pi/2; the expected longer piece of a randomly broken metre stick, 3/4), a six-step narrated attempt at the staircase problem showing where an interviewer hints, and an eight-week plan. Lesson family: thinking aloud and using a hint.',
    requiredMentions: ['we will always ask some questions where you will get stuck somewhere', 'Call a number a staircase number', 'Main period 7 to 18 December 2026', 'not mind-readers', 'do not have access to any exclusive information', 'Historically 75% to 80% of Mathematics applicants', 'n<sup>5</sup> &minus; n always divisible by 30', 'centred on 12 / 3 = 4', 'Say it while you think it', 'My Cambridge Application, listing the maths topics you have covered'],
    sources: [
      { claim: 'Oxford mathematics interviews: timing, number, length, online format, content and advice.', url: 'https://www.maths.ox.ac.uk/study-here/undergraduate-study/interviews' },
      { claim: 'Oxford mathematics application steps, TMUA sitting and UCAS deadline.', url: 'https://www.maths.ox.ac.uk/study-here/undergraduate-study' },
      { claim: 'Cambridge interview period, number and length, workings, and the statement on paid preparation.', url: 'https://www.undergraduate.study.cam.ac.uk/apply/after/cambridge-interviews' },
      { claim: 'Cambridge interview preparation advice and online interview technology.', url: 'https://www.undergraduate.study.cam.ac.uk/apply/after/interview-preparation' },
      { claim: 'Cambridge Faculty of Mathematics on interview content, length, getting stuck, topics and interview rates.', url: 'https://www.maths.cam.ac.uk/undergrad/admissions/faq' },
      { claim: 'Cambridge Faculty of Mathematics on TMUA use, interview timing, written assessments and offer rates.', url: 'https://www.maths.cam.ac.uk/undergrad/admissions/how-to-apply' }
    ],
    rejectedClaims: [
      'Oxford shortlisting and offer figures: the central ox.ac.uk site returned HTTP 403 on 31 October 2026 and was not retried; no Oxford figure is printed.',
      'Reported or reconstructed past interview questions: Cambridge prohibits sharing them; none used, all problems labelled ours.',
      'Any suggestion that coaching is needed or endorsed: both universities say otherwise and the page quotes them.',
      'Any interview, offer or place promise: declined on the page.',
      'Oxford\'s suggestion to try a past MAT question: not repeated as advice, because the MAT no longer runs from 2026.',
      'Any affiliation with Oxford, Cambridge or any college: none, stated on the page.'
    ]
  }
};
