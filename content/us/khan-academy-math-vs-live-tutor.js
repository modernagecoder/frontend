'use strict';
// Khan Academy math vs a live tutor (ag- comparison door; UK and US exams cluster Phase 1, row US093).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md (writer brief, rule 10). Sources read raw with curl on
// 31 October 2026 (copies in keyword-research-2026-09/uk-us-gap/src/khan-academy-math-vs-live-tutor/):
//  - khanacademy.org (home, /about, /math, /kids): returned a JavaScript "Client Challenge" page to curl; per the brief we
//    stopped for that host and quote nothing from it. support.khanacademy.org returned 403; not retried.
//  - khanmigo.ai (Khan Academy's Khanmigo site), home: Khanmigo is "an AI-powered personal tutor and teaching assistant from
//    trusted education nonprofit Khan Academy"; "Unlike other AI tools such as ChatGPT, Khanmigo doesn't just give answers.
//    Instead, with limitless patience, it guides learners to find the answer themselves."; access requires "a monthly or
//    annual payment, be 18 years or older, live in the United States, and have a billing address in the U.S."; under 18:
//    a parent or guardian signs up; "up to 10 of your children who are under 18"; "Khan Academy is a small nonprofit funded
//    by donations."; "The Khan Academy content library and learning platform will always remain 100% free."; "Khanmigo can
//    help students who are in elementary school through college."; classroom access "only available through school or
//    district implementations"; content library "covers math, humanities, coding, social studies, and more".
//  - khanmigo.ai/parents: Parent Subscription to "activate Khanmigo for up to 10 kids, view chat history, get safety alerts";
//    "over 20 parent-tools"; "Your child can get personalized tutoring on every exercise, video, and article on Khan
//    Academy."
//  - khanmigo.ai/learners: "Speak to Khanmigo and it will read out its responses to you."
//  - blog.khanacademy.org, Common Sense Media post: Khanmigo received "an overall 4-star rating from Common Sense Media";
//    "While it is true that LLMs have difficulty with math"; "Khan Academy's world-class videos, exercises, and articles
//    continue to be free to anyone, anywhere."
// Not used: Khanmigo prices (printed on Khan pages), testimonials and staff names, the GPT model name.
// Our own material, labelled: the criteria table's live-tutor column, the misconception table (1/2 + 1/3, 0.3 x 0.2,
// 52 - 27, area and perimeter of 4 by 6), the Python fraction-rule check, the three-question parent test and the plan.
// Lesson family: testing a wrong rule against the right one (fraction addition with Python's Fraction).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPARISON', blurb: 'Khan Academy math, Khanmigo and a live math tutor compared for US families, from Khan Academy&rsquo;s own pages.' },
  slug: 'khan-academy-math-vs-live-tutor',
  code: 'kav',
  accent: '#2A534A',
  accentRationale: 'Khan Academy math vs live tutor: a slate teal, #2A534A as allocated, cooler than the forest-green RSM page and well above contrast on the #FBF8F2 paper',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'Khan Academy math vs live tutor',
  title: 'Khan Academy Math vs a Live Tutor: Which Does Your Child Need?',
  description: 'Khan Academy math vs a live tutor: what the free library and the Khanmigo AI tutor offer, what a teacher adds, and how to choose or combine them in 2026.',
  ogDescription: 'Khan Academy math is free and self-paced, and Khanmigo adds an AI tutor that guides rather than answers. A live teacher adds something different: someone who hears the reasoning. A criteria table and a way to decide.',
  twitterDescription: 'Khan Academy math, Khanmigo and a live tutor, compared on published facts.',
  pageName: 'Khan Academy Math vs Live Tutor',
  webPageDescription: 'A neutral comparison for US families of self-paced Khan Academy math, the Khanmigo AI tutor and a live math teacher, built from Khan Academy pages read on 31 October 2026, with our own worked misconceptions.',
  courseDescription: 'Live online math classes for US elementary and middle school students, including those who use Khan Academy for practice, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Khan Academy math vs tutor',
  navLinks: [
    { href: '#offers', label: 'What Khan offers' },
    { href: '#criteria', label: 'Criteria table' },
    { href: '#reasoning', label: 'Hearing reasoning' },
    { href: '#fit', label: 'When each fits' },
    { href: '#combine', label: 'Using both' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Elementary and middle school math &middot; Self-paced, AI or live',
  h1: 'Khan Academy math vs a live tutor',
  lede: 'Khan Academy is one of the most generous resources in education: a large, free math library that a child can use at any hour. Khan Academy now also offers Khanmigo, a paid AI tutor built to guide rather than hand out answers. So why would a family pay for a live teacher? Sometimes they should not. Sometimes the free library is enough, or the AI tutor fills the gap. And sometimes a child needs a person who listens to how they think. This page lays out what Khan Academy says it offers, what a live tutor offers, and how to tell which your child needs.',
  secondaryCta: { href: '#criteria', label: 'See the criteria table' },
  wa: 'Hello Modern Age Coders, my child uses Khan Academy for math but still struggles. Could we book a free first class with a live teacher?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; grades K to 12',
  spec: [
    ['Khan Academy library', 'Free, self-paced'],
    ['Khanmigo', 'Paid AI tutor, parent sign-up'],
    ['Khanmigo ages', 'Elementary to college'],
    ['Live tutor', 'A person, at a set time'],
    ['Our classes', 'Live online'],
    ['Formats', 'Batch of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Khan Academy math is a free, self-paced library of videos, exercises and articles from the nonprofit Khan Academy; Khanmigo is its paid AI tutor, which guides students instead of giving answers and needs a parent to sign up for under-18s. A live tutor is a teacher who hears the student reason at a set time. Modern Age Coders teaches math live online, in a batch or 1-on-1, through Elementary Math; the first class is free.',

  picks: {
    eyebrow: 'Live courses to pair with Khan Academy',
    h2: 'Three live math courses that work well beside Khan Academy',
    lede: 'Many of our students keep using Khan Academy for practice. These courses add the teacher.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'KAV / 01', title: 'Elementary math, grades 1 to 5', note: 'Place value, operations and fractions, taught live with time to explain.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'KAV / 02', title: 'Middle school math', note: 'Ratios, negatives and pre-algebra, the stage where self-study often stalls.' },
      { course: 'algebra-foundations-masterclass', code: 'KAV / 03', title: 'Algebra foundations', note: 'Algebra 1 with a teacher who asks why.' }
    ]
  },

  sections: [
    {
      id: 'offers', tint: 'tint', eyebrow: 'What Khan offers',
      h2: 'What does Khan Academy offer for math, and what is Khanmigo?',
      lede: 'Khan Academy describes itself as a small nonprofit funded by donations, with a content library that stays free. Khanmigo is its AI tutor, which costs money and has its own sign-up rules.',
      body: [
        { kind: 'table', caption: 'Khan Academy and Khanmigo in Khan Academy&rsquo;s own words (khanmigo.ai home, parents and learners pages, and the Khan Academy blog, checked 31 October 2026)', head: ['Question', 'What Khan Academy says'], rows: [
          ['Is Khan Academy free?', '"The Khan Academy content library and learning platform will always remain 100% free."'],
          ['Who runs it?', '"Khan Academy is a small nonprofit funded by donations."'],
          ['What is Khanmigo?', '"an AI-powered personal tutor and teaching assistant from trusted education nonprofit Khan Academy"'],
          ['Does it give answers?', 'It "doesn&rsquo;t just give answers. Instead, with limitless patience, it guides learners to find the answer themselves."'],
          ['Who can sign up?', 'A paying adult "18 years or older" in the United States, with a US billing address; under-18s are added by a parent'],
          ['How many children?', '"up to 10 of your children who are under 18"'],
          ['What can parents see?', 'A Parent Subscription can "view chat history, get safety alerts"'],
          ['Which grades?', '"Khanmigo can help students who are in elementary school through college."'],
          ['Where does it work?', 'Personalized tutoring "on every exercise, video, and article on Khan Academy"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Independent review',
          left: [
            'Khan Academy&rsquo;s blog reports that Khanmigo received "an overall 4-star rating from Common Sense Media", an independent family media organization.',
            'The same post is candid about the technology: "While it is true that LLMs have difficulty with math", Khan Academy says it has worked to address many of those limits. That frankness is useful for parents deciding how far to rely on any AI tutor for math.'
          ],
          rightH3: 'What we could not read',
          right: [
            'The main khanacademy.org site returned an automated browser check to our request on 31 October 2026, and the Khan Academy help center refused it, so this page does not describe the math courses, units or mastery system from those pages.',
            'Everything above comes from Khan Academy&rsquo;s Khanmigo site and its blog. For course details, look at khanacademy.org directly.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.khanmigo.ai/" rel="noopener" target="_blank">Khanmigo</a>, <a class="ag-inline-link" href="https://www.khanmigo.ai/parents" rel="noopener" target="_blank">Khanmigo for parents</a> and the <a class="ag-inline-link" href="https://blog.khanacademy.org/four-stars-for-khanmigo-common-sense-media-rates-ai-tools-for-learning/" rel="noopener" target="_blank">Khan Academy blog</a>, checked 31 October 2026. Khan Academy and Khanmigo are trademarks of Khan Academy. Modern Age Coders is not affiliated with or endorsed by Khan Academy. We do not quote Khanmigo&rsquo;s price; see Khan Academy for current terms.' }
      ]
    },
    {
      id: 'criteria', tint: 'deep', eyebrow: 'Criteria table',
      h2: 'How do Khan Academy, Khanmigo and a live tutor compare?',
      lede: 'Three different things, not three versions of one thing. The first two columns are from Khan Academy&rsquo;s pages; the third describes a live teacher at Modern Age Coders.',
      body: [
        { kind: 'table', caption: 'Khan Academy library, Khanmigo and a live tutor compared (Khan facts from khanmigo.ai and blog.khanacademy.org, checked 31 October 2026; live-tutor column is ours)', head: ['Criterion', 'Khan Academy library', 'Khanmigo AI tutor', 'Live tutor (Modern Age Coders)'], rows: [
          ['Cost model', 'Free', 'Paid monthly or annual subscription', 'Monthly fee, first class free'],
          ['Format', 'Self-paced videos, exercises, articles', 'AI chat inside Khan Academy content', 'Live video class with a teacher'],
          ['When', 'Any time', 'Any time', 'A set time each week'],
          ['Who explains', 'Recorded videos and articles', 'An AI that asks guiding questions', 'A teacher who adapts to the child'],
          ['Who notices a stall', 'The child, or a parent checking', 'The AI, when the child asks', 'The teacher, during class'],
          ['Ages', 'See khanacademy.org', 'Elementary school through college', 'Age 6 upward'],
          ['Parent visibility', 'Depends on account setup', 'Chat history and safety alerts', 'A teacher you can talk to'],
          ['Group or individual', 'Individual', 'Individual', 'Batch of 15 to 20, or 1-on-1']
        ] },
        { kind: 'p', mt: true, html: 'Read across a row and the trade-offs are clear. The library costs nothing and never runs out, but someone has to keep a child at it. The AI tutor is always available and patient, but the child has to start the conversation. A live teacher costs more and is available only at set times, but brings a fixed appointment and a person who can hear reasoning, which is what the next section is about.' }
      ]
    },
    {
      id: 'reasoning', tint: 'tint', eyebrow: 'Hearing reasoning',
      h2: 'What can a live tutor catch that self-paced practice might miss?',
      lede: 'A wrong rule that sometimes gives right answers. Self-paced exercises check the answer; a teacher listening to a child explain can find the rule behind it. The examples below are ours.',
      body: [
        { kind: 'table', caption: 'Four common math misconceptions and how a teacher hears them (our examples)', head: ['Problem', 'Wrong answer', 'The hidden rule', 'Right answer and the fix'], rows: [
          ['1/2 + 1/3', '2/5', 'Add the tops, add the bottoms', '5/6. Ask: can the sum be smaller than 1/2?'],
          ['0.3 x 0.2', '0.6', 'Multiply digits, keep one decimal place', '0.06. Three tenths of two tenths is six hundredths.'],
          ['52 - 27', '35', 'Always take the smaller digit from the bigger', '25. Regroup a ten: 12 - 7 = 5, 4 - 2 = 2.'],
          ['Area of a 4 by 6 rectangle', '20', 'Adding sides (that is the perimeter)', '24 square units; perimeter is 20 units.']
        ] },
        { kind: 'code', mt: true, label: 'fraction_rule.py (our example)', lang: 'Python 3', code: 'from fractions import Fraction\n\npairs = [(1, 2, 1, 3), (1, 4, 1, 4), (2, 3, 1, 6)]\nfor a, b, c, d in pairs:\n    wrong = Fraction(a + c, b + d)          # "add the tops, add the bottoms"\n    right = Fraction(a, b) + Fraction(c, d)\n    print(f"{a}/{b} + {c}/{d}: wrong {wrong}, right {right}")', note: 'Output: 1/2 + 1/3: wrong 2/5, right 5/6, then 1/4 + 1/4: wrong 1/4, right 1/2, then 2/3 + 1/6: wrong 1/3, right 5/6. The wrong rule never matches here, yet a child using it can still pass a quiz that mixes in easy items. Testing a rule against many cases is a habit we teach older students directly.' },
        { kind: 'two', mt: true,
          leftH3: 'Why the answer alone is not enough',
          left: [
            'A child who uses the "smaller from bigger" subtraction rule gets 58 - 23 right and 52 - 27 wrong. Over a mixed set they may score well enough to move on, carrying the wrong rule into the next unit.',
            'Our teachers ask "how did you get that?" on right answers as well as wrong ones. That one question finds most hidden rules within a lesson or two.'
          ],
          rightH3: 'Where an AI tutor fits',
          right: [
            'Khan Academy says Khanmigo guides learners to the answer with questions rather than giving it, which is the same instinct. Its usefulness depends on the child asking for help and describing what they did.',
            'A live teacher adds the moments a child does not ask: the hesitation, the erased answer, the quick guess. Both approaches can work together.'
          ] }
      ]
    },
    {
      id: 'fit', tint: 'deep', eyebrow: 'When each fits',
      h2: 'When is Khan Academy enough, and when does a child need a live tutor?',
      lede: 'There is no single answer. These are the patterns we see, offered as general guidance from our teaching rather than statistics.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Khan Academy alone may suit', p: 'A self-starting child who works steadily, can explain their answers and mainly needs practice or a refresher on one topic.' },
          { h3: 'Adding Khanmigo may suit', p: 'A child who uses Khan Academy happily but gets stuck between sessions and is comfortable asking an AI for hints, with a parent watching the chat history.' },
          { h3: 'A live tutor may suit', p: 'A child who drifts without a fixed time, guesses rather than explains, or has a hidden rule that keeps returning in new topics.' }
        ] },
        { kind: 'table', mt: true, caption: 'A three-question test for parents (ours)', head: ['Ask your child', 'A reassuring answer', 'A sign to look closer'], rows: [
          ['"Explain how you got this answer."', 'A clear, step-by-step reason', 'Shrugging, or "the video said so"'],
          ['"Can you do one like it without the hint?"', 'Yes, at a similar speed', 'Only after watching again'],
          ['"How many days did you practise this week?"', 'Most days, without reminders', 'Only when told, or not at all']
        ] },
        { kind: 'p', mt: true, html: 'If two or three answers fall in the right-hand column for a few weeks running, a person at a set time will probably help more than another app. If they fall in the middle column, Khan Academy is doing its job.' }
      ]
    },
    {
      id: 'combine', tint: 'tint', eyebrow: 'Using both',
      h2: 'Can a child use Khan Academy and a live tutor together?',
      lede: 'Yes, and many of our students do. The free library is ideal for practice between classes; the teacher sets direction and checks the reasoning.',
      body: [
        { kind: 'ol', items: [
          '<b>Tell the teacher what your child does on Khan Academy.</b> We can point practice at the same topic we are teaching.',
          '<b>Keep the live class for explaining.</b> The teacher spends class time on reasoning and new ideas, not on drills the library already offers.',
          '<b>Use Khan Academy for repetition.</b> Short practice on most days helps fluency between classes.',
          '<b>Bring the misses to class.</b> Two or three wrong answers from the week make the most useful agenda a teacher can have.',
          '<b>Review after a month.</b> If your child is explaining confidently and practising alone, it may be time to step the live classes down.'
        ] },
        { kind: 'p', mt: true, html: 'If you already use Khanmigo, keep it. Ask your child to show the teacher a chat where they got stuck; it is an excellent window into how they think. For younger children, Khan Academy requires a parent to sign up for Khanmigo, which is a sensible rule we would follow for any AI tool.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four stages of independent math practice',
    lede: 'Our description of how children grow into self-paced learning.',
    table: { caption: 'Stages of independence with self-paced math (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Prompted', 'Practises only when reminded; skips hard items'],
      ['2. Practising', 'Works steadily but cannot always explain answers'],
      ['3. Explaining', 'Can say why an answer is right'],
      ['4. Self-directed', 'Picks topics, notices own mistakes, asks good questions']
    ] },
    left: { h3: 'For parents', ps: [
      'Khan Academy alone works best from stage 3. A live teacher helps most at stages 1 and 2.',
      'Moving up a stage matters more than moving up a grade level.'
    ] },
    right: { h3: 'For students', ps: [
      'If you get an answer right, try explaining it out loud. If you cannot, you are not finished.',
      'Wrong answers are clues. Write them down.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live math courses for every stage',
    lede: 'Live teaching that sits comfortably beside free practice.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Ages 6 to 11', courses: [
        { code: 'KAV / E / 01', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'Counting with a teacher.' },
        { code: 'KAV / E / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Fractions explained aloud.' },
        { code: 'KAV / E / 03', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Reasoned fluency.' }
      ] },
      { num: 'II', h3: 'The middle years', sub: 'Ages 11 to 14', courses: [
        { code: 'KAV / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratios to pre-algebra.' },
        { code: 'KAV / M / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Test rules in Python.' },
        { code: 'KAV / M / 03', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'For keen solvers.' }
      ] },
      { num: 'III', h3: 'Toward college', sub: 'Ages 14 to 18', courses: [
        { code: 'KAV / H / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Equations with reasons.' },
        { code: 'KAV / H / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Functions and beyond.' },
        { code: 'KAV / H / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'The digital SAT.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons that listen to reasoning',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, with the week&rsquo;s misses.' },
      { time: 'Weekends', l: 'Morning classes and catch-up.' },
      { time: '1-on-1', l: 'Built around your child.' }
    ],
    cells: [
      { h3: 'Explain, then answer', p: 'Reasons on right answers too.' },
      { h3: 'Khan-friendly', p: 'Practice can stay on Khan Academy.' },
      { h3: 'Fixed time', p: 'An appointment that builds habit.' },
      { h3: 'Our own problems', p: 'Set by our teachers.' },
      { h3: 'US time zones', p: 'Eastern to Hawaii.' },
      { h3: 'Batch or solo', p: 'Fifteen to twenty together, or one to one.' }
    ]
  },

  projectsH2: 'Work from our students',
  projectsLede: 'Some math students go on to write programs that test rules like the one above. See projects on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents&rsquo; Google reviews, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'A live teacher costs more than a free library, so our fees are shown plainly here, billed monthly in US dollars with no annual contract.',
    free: ['A free first class', 'Bring this week&rsquo;s wrong answers', 'No card details'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A private teacher', 'Built around your child&rsquo;s gaps', 'Times you choose']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Khan Academy math vs a tutor: common questions',
    items: [
      { q: 'Is Khan Academy enough to learn math?', a: 'For a self-motivated child who can explain their answers, it often is. Khan Academy says its content library will always remain free. Children who drift, guess or carry hidden wrong rules usually benefit from a live teacher as well.' },
      { q: 'Does Khan Academy have free math tutoring?', a: 'The Khan Academy library of videos, exercises and articles is free. Khanmigo, its AI tutor, requires a monthly or annual payment from an adult in the United States.' },
      { q: 'What is Khanmigo?', a: 'Khan Academy describes Khanmigo as an AI-powered personal tutor and teaching assistant. It is designed to guide learners to find answers themselves rather than give them, and it works inside Khan Academy\'s content.' },
      { q: 'Can my child under 18 use Khanmigo?', a: 'Khan Academy says a parent or guardian aged 18 or older must sign up and add the child. A parent account can enable up to 10 children under 18 and can view chat history and safety alerts.' },
      { q: 'Is an AI math tutor as good as a live tutor?', a: 'They do different jobs. An AI tutor is available any time and responds when asked. A live teacher works at a set time and can notice how a child reasons even when the child does not ask. Khan Academy itself notes that language models have had difficulty with math.' },
      { q: 'Can my child use Khan Academy and your classes together?', a: 'Yes. Many families keep Khan Academy for daily practice and use live classes for explanation and direction. Tell the teacher what your child practises so the two line up.' },
      { q: 'How do I know if my child needs a tutor?', a: 'Ask your child to explain an answer, redo a problem without a hint, and say how often they practised this week. Struggling with two or three of these for several weeks suggests a live teacher would help.' },
      { q: 'How much does Khanmigo cost?', a: 'Khan Academy publishes current Khanmigo terms on its own site, so please check there; we never repeat another organization\'s prices. Our own monthly fees appear in the fees section above.' },
      { q: 'When are your live math classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with Khan Academy?', a: 'No. Modern Age Coders is an independent online school, not affiliated with Khan Academy. Khan Academy and Khanmigo are its trademarks.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for parents weighing self-study against a teacher.',
    items: [
      { href: '/khan-academy-computer-science-vs-live-classes', label: 'Khan Academy computer science vs live classes', p: 'The same question for coding.' },
      { href: '/online-maths-tutoring-for-kids-in-usa', label: 'Math tutoring for kids', p: 'Live online math for US children.' },
      { href: '/online-math-tutor-4th-grade', label: 'Fourth grade math tutoring', p: 'Where fraction rules first appear.' },
      { href: '/online-math-tutor-6th-grade', label: 'Sixth grade math tutoring', p: 'Ratios, decimals and negatives.' },
      { href: '/common-core-math-vs-traditional-math', label: 'Common Core vs traditional math', p: 'Methods and standards explained.' },
      { href: '/online-math-tutor-cost', label: 'Math tutor cost', p: 'What online math help costs and why.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us what your child does on Khan Academy and where they get stuck. The teacher will ask them to explain a few answers and find out what is behind the wrong ones.',
    readFirst: 'See <a class="ag-inline-link" href="/how-we-teach">how we run a live lesson</a>, or look at <a class="ag-inline-link" href="/courses">every course</a>.',
    note: 'Our teachers live and work in India and teach American students live online, scheduled to suit each US time zone. Message us on WhatsApp to set up a class.',
    formNote: 'The first class is free. No card is requested.'
  },

  footer: {
    cols: [
      { h4: 'Math help', links: [
        { href: '/online-math-tutor-4th-grade', label: 'Fourth grade math' },
        { href: '/online-math-tutor-6th-grade', label: 'Sixth grade math' },
        { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'Comparisons', links: [
        { href: '/khan-academy-computer-science-vs-live-classes', label: 'Khan Academy CS vs live' },
        { href: '/modern-age-coders-vs-mathnasium', label: 'Versus Mathnasium' },
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Not 2/5. It is 5/6.'
  },

  personalityCss: `
.ag-root.ag-kav .ag-hero h1 { letter-spacing: -0.016em; max-width: 18ch; }
.ag-root.ag-kav .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-kav .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-kav .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-kav .ag-table th { white-space: nowrap; }
`,

  dossier: {
    curriculumAuthority: 'Khan Academy pages that could be read raw on 31 October 2026: khanmigo.ai home, parents and learners pages (Khanmigo an AI-powered personal tutor and teaching assistant; guides rather than gives answers; monthly or annual payment, 18 or older, US residence and billing; parent adds under-18s, up to 10; chat history and safety alerts; over 20 parent tools; elementary through college; library 100% free; small nonprofit funded by donations; classroom access only through schools or districts) and blog.khanacademy.org (Common Sense Media 4-star rating; LLMs have difficulty with math; videos, exercises and articles free to anyone). khanacademy.org returned a client challenge and support.khanacademy.org returned 403; neither was retried.',
    localProject: 'Our misconception table (1/2 + 1/3 = 5/6 not 2/5; 0.3 x 0.2 = 0.06; 52 - 27 = 25; 4 by 6 area 24 and perimeter 20), a Python Fraction check of the add-tops-and-bottoms rule on three pairs, a three-question parent test and a five-step plan for combining Khan Academy with a live class. Lesson family: testing a wrong rule against the right one.',
    requiredMentions: [
      'The Khan Academy content library and learning platform will always remain 100% free.',
      'Khan Academy is a small nonprofit funded by donations.',
      'an AI-powered personal tutor and teaching assistant from trusted education nonprofit Khan Academy',
      'with limitless patience, it guides learners to find the answer themselves',
      'up to 10 of your children who are under 18',
      'view chat history, get safety alerts',
      'Khanmigo can help students who are in elementary school through college.',
      'an overall 4-star rating from Common Sense Media',
      'While it is true that LLMs have difficulty with math',
      '1/2 + 1/3: wrong 2/5, right 5/6'
    ],
    sources: [
      { claim: 'Khanmigo overview, eligibility, nonprofit status, free library.', url: 'https://www.khanmigo.ai/' },
      { claim: 'Khanmigo for parents: up to 10 children, chat history, safety alerts, tutoring on Khan content.', url: 'https://www.khanmigo.ai/parents' },
      { claim: 'Khanmigo for learners: voice responses, subjects.', url: 'https://www.khanmigo.ai/learners' },
      { claim: 'Khan Academy blog: Common Sense Media rating, LLMs and math, free resources.', url: 'https://blog.khanacademy.org/four-stars-for-khanmigo-common-sense-media-rates-ai-tools-for-learning/' }
    ],
    rejectedClaims: [
      'Khan Academy math course structure, mastery points, grade coverage and unit lists: not described; khanacademy.org returned a JavaScript client challenge to curl on 31 October 2026 and was not retried.',
      'Khan Academy help center articles: support.khanacademy.org returned 403; not retried.',
      'Khanmigo prices, which Khan Academy prints on its pages: not quoted, per the brief.',
      'That a live tutor is better than Khan Academy or Khanmigo: refused; the page gives criteria and lets the reader choose.',
      'Statistics on how often children hold misconceptions: not used; examples are labelled as ours.',
      'Any affiliation with Khan Academy: none, stated on the page.'
    ]
  }
};
