'use strict';
// Gifted and talented maths and coding, UK (ag- guide door; UK cluster Phase 2 row UK080).
// Siblings checked first: gifted-and-talented-test-prep (US: CogAT, NNAT, OLSAT, district screening; nothing
// reused, and this page is not about a test), maths-masterclasses-for-able-students-uk, online-maths-circle-uk,
// online-maths-summer-school-uk (this group).
// Read raw with curl on 31 October 2026 (copies under keyword-research-2026-09/uk-us-gap/src/
// gifted-and-talented-maths-and-coding-uk/):
//  - Ofsted, The most able students: an update on progress since June 2013 (PDF, published March 2015, No
//    150034): footnote 2, "There is currently no national definition for most able." (the report's own working
//    definition was Level 5 or above at the end of Key Stage 2, a measure that no longer exists); inspectors
//    "visited 40 non-selective secondary schools and 10 primary schools"; "a further 130 routine inspections";
//    most able students in over half the schools visited said "work in Key Stage 3 is too easy"; work "was
//    repetitive and covered what they had already learnt in Key Stage 2"; in more effective schools students
//    said "there is always a question we can't answer or a really interesting challenge."; the report cites
//    the National Association for Able Children in Education (NACE) and Potential Plus UK. Publication page:
//    the 2013 report "made clear that too few schools set high enough expectations".
//  - National curriculum in England, mathematics (gov.uk): "Pupils who grasp concepts rapidly should be
//    challenged through being offered rich and sophisticated problems before any acceleration through new
//    content." (key stages 1 and 2) and the key stage 3 version ending "in preparation for key stage 4";
//    "decisions about when to progress should always be based on the security of pupils' understanding".
//  - National curriculum in England, computing, key stage 3: "use 2 or more programming languages, at least
//    one of which is textual, to solve a variety of computational problems".
//  - Potential Plus UK (now Coram Potential Plus): uses "high learning potential" rather than "gifted",
//    "talented", "bright" or "clever", "since 2013"; "most children with scores in the top 2-5% of the
//    population" (written here as 2 to 5 per cent); "In education in the UK, however, most children are
//    identified as 'most able' or 'more able' solely based on high academic achievement, rather than
//    cognitive ability."; 25 descriptors of characteristics; announcement that the charity transfers to Coram,
//    the charity itself closing on 31 July with services continuing as Coram Potential Plus.
// Rejected: nace.co.uk returned 403 (stopped, not worked around); NACE appears only as named in Ofsted's
// report. No DfE or Ofsted page read for 2026 defines "more able"; the page says no national definition was
// found and dates the Ofsted line to 2015. Potential Plus assessment fees and its SEND and DME material: not
// used (no prices; no health content). No named school from the Ofsted case studies is printed.
// Our own: the depth, breadth and acceleration table, the three age-band problems (rectangles from 12
// squares, why 5 sits in the centre of a 1 to 9 magic square, perfect numbers in Python and the open
// question of odd ones), the school conversation steps, every judgement.
// Spine: the UK has no national gifted label, and the curriculum's own instruction for a quick learner is
// depth before speed; so stretch means richer problems and a second discipline (code), not next year's
// textbook. We promise no label. Lesson family: a policy-honest stretch guide.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'MORE ABLE', label: 'Gifted and talented maths and coding', blurb: 'No national gifted label exists in the UK. What the curriculum says to do for a quick learner, and how to stretch in maths and code.' },
  slug: 'gifted-and-talented-maths-and-coding-uk',
  code: 'gtc',
  accent: '#1C587C',
  accentRationale: 'Gifted and talented maths and coding: a clear deep teal-blue (#1C587C), 7.24:1 on #FBF8F2, brighter than the masterclass slate so the two enrichment doors read apart',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Gifted and talented maths and coding',
  title: 'Gifted and Talented Maths and Coding UK: More Able Pupils',
  description: 'Gifted and talented maths and coding in the UK: why there is no national label, what the curriculum says to do for quick learners, and live stretch lessons online.',
  ogDescription: 'The UK has no national definition of most able. The national curriculum says depth before acceleration. What that means for a bright child in maths and code.',
  twitterDescription: 'More able pupils in the UK: Ofsted, the national curriculum and Potential Plus on stretch, with depth problems for three ages.',
  pageName: 'Gifted and Talented Maths and Coding in the UK',
  webPageDescription: 'A guide for UK parents of children who are quick at maths or coding, built from Ofsted, the national curriculum and Potential Plus UK, with original depth problems and live online stretch lessons.',
  courseDescription: 'Live online stretch lessons in maths reasoning and coding for able pupils aged 6 to 16, built on depth before acceleration, in a group or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Gifted and talented maths and coding',
  navLinks: [
    { href: '#label', label: 'Is there a label?' },
    { href: '#curriculum', label: 'Depth first' },
    { href: '#problems', label: 'Problems by age' },
    { href: '#school', label: 'Talking to school' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'More able pupils &middot; Ages 6 to 16 &middot; Maths reasoning and code',
  h1: 'Gifted and talented maths and coding in the UK',
  lede: 'Many UK parents search for a gifted and talented maths programme and find there is no national one. Ofsted noted in 2015 that there was no national definition of "most able", and schools usually decide for themselves which pupils count, mostly by attainment. What the national curriculum does say is clear: a quick learner should get richer problems before faster content. Modern Age Coders teaches that kind of stretch live online, in maths reasoning and in coding, for ages 6 to 16, through our olympiad course and our reasoning course for young children, as a group or 1-on-1. We do not test, label or certify children.',
  secondaryCta: { href: '#problems', label: 'Try the problems' },
  wa: 'Hello Modern Age Coders, my child is quick at maths and I would like a free stretch lesson.',
  heroNote: 'From Ofsted, the national curriculum and Potential Plus UK, read 31 October 2026 &middot; We award no gifted label',
  spec: [
    ['National definition', 'None found; Ofsted said none in 2015'],
    ['Who decides', 'Each school, mostly by attainment'],
    ['Curriculum advice', 'Rich problems before acceleration'],
    ['Charity term', '"High learning potential"'],
    ['Our approach', 'Depth, then breadth through code'],
    ['Ages', '6 to 16'],
    ['Labels or tests', 'We give none'],
    ['Format', 'Group of 15 to 20, or 1-on-1']
  ],
  capsuleQ: 'Is there a gifted and talented programme for maths in UK schools?',
  capsule: 'There is no single national gifted and talented maths programme in the UK, and no national label. Ofsted\'s 2015 report on the most able said: "There is currently no national definition for most able." Potential Plus UK notes that most UK children are identified as most able or more able on academic achievement alone. The national curriculum for England is specific about stretch: "Pupils who grasp concepts rapidly should be challenged through being offered rich and sophisticated problems before any acceleration through new content." Modern Age Coders teaches that depth-first stretch live online in maths and coding for ages 6 to 16, on our olympiad and reasoning courses, in groups of 15 to 20 or 1-on-1, with no label attached.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses for a child who is racing ahead',
    lede: 'One for each age band. Every card opens a syllabus built on depth rather than next year\'s content.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'GTC / 01', title: 'Reasoning for young thinkers', note: 'Patterns, spatial puzzles and number sense for ages 6 to 9, never test drilling.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'GTC / 02', title: 'Problem-solving maths', note: 'Number theory, counting and proof for ages 11 to 16, one rich problem at a time.' },
      { course: 'python-complete-masterclass-teens', code: 'GTC / 03', title: 'Python for teens', note: 'A real textual language from age 13, so a strong maths mind gets a second discipline.' }
    ]
  },

  sections: [
    {
      id: 'label', tint: 'tint', eyebrow: 'Is there a label?',
      h2: 'What does "gifted and talented" mean in UK schools today?',
      lede: 'Less than many parents expect. There is no national test and no national list, and the words schools use vary. Here is what the sources we read actually say.',
      body: [
        { kind: 'table', caption: 'How "most able" is framed in the UK, from each source read on 31 October 2026', head: ['Source', 'What it says', 'What it means for parents'], rows: [
          ['Ofsted, The most able students (March 2015)', '"There is currently no national definition for most able."', 'Schools set their own criteria; there is nothing national to qualify for'],
          ['Ofsted, same report', 'Inspectors visited 40 non-selective secondary schools and 10 primary schools, plus questions in 130 routine inspections', 'The findings come from a broad sample, though they are now over a decade old'],
          ['Potential Plus UK', 'Most UK children are identified as most able or more able "solely based on high academic achievement, rather than cognitive ability"', 'A child who is quick but not yet top of the class may be missed'],
          ['Potential Plus UK', 'Prefers "high learning potential" to "gifted", "talented", "bright" or "clever", and has used it since 2013', 'The vocabulary itself is not settled'],
          ['National curriculum, mathematics', 'Rich and sophisticated problems before acceleration', 'The official advice is depth, not speed']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What Ofsted found about Key Stage 3',
          left: [
            'In over half of the schools visited, Ofsted reported that the most able students it spoke to said "work in Key Stage 3 is too easy". Students described lessons that "covered what they had already learnt in Key Stage 2".',
            'The contrast was the more effective schools, where students said "there is always a question we can\'t answer or a really interesting challenge." That sentence is a good test of any stretch, at school or outside it.'
          ],
          rightH3: 'Who else works in this space',
          right: [
            'Ofsted\'s report cites two organisations: the National Association for Able Children in Education (NACE), which works with schools, and Potential Plus UK, which works with families. Potential Plus has announced it is joining the children\'s charity Coram and continues as Coram Potential Plus.',
            'Both are better placed than a tutoring school to advise on identification. We do not assess, and we would not ask a family to pay for a label.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/the-most-able-students-an-update-on-progress-since-june-2013" rel="noopener" target="_blank">Ofsted, The most able students: an update on progress since June 2013</a> (March 2015); <a class="ag-inline-link" href="https://potentialplusuk.org/index.php/families/high-learning-potential/" rel="noopener" target="_blank">Potential Plus UK, High learning potential</a>. Read 31 October 2026. We found no newer national definition in what we read; if your school uses one, it will be in the school\'s own policy.' }
      ]
    },
    {
      id: 'curriculum', tint: 'deep', eyebrow: 'Depth first',
      h2: 'How should a school stretch a child who is quick at maths?',
      lede: 'By going deeper before going faster. The national curriculum for England says so twice, once for primary and once for Key Stage 3.',
      body: [
        { kind: 'two',
          leftH3: 'The curriculum\'s words',
          left: [
            'For Key Stages 1 and 2: "Pupils who grasp concepts rapidly should be challenged through being offered rich and sophisticated problems before any acceleration through new content."',
            'For Key Stage 3 the same sentence ends "in preparation for key stage 4". Both sit beside the rule that decisions about progress should rest on "the security of pupils\' understanding and their readiness to progress".'
          ],
          rightH3: 'Why depth beats speed (our view)',
          right: [
            'A child who races into next year\'s methods is soon bored again, a year later, and has learned to expect maths to be easy. A child given a problem that resists for twenty minutes learns persistence, which no textbook supplies.',
            'Depth also keeps a child with classmates in school, so stretch outside school adds to their week rather than making the classroom pointless.'
          ] },
        { kind: 'table', mt: true, caption: 'Three ways to stretch an able child, our comparison', head: ['', 'Acceleration', 'Depth', 'Breadth'], rows: [
          ['What it is', 'Next year\'s content now', 'Harder problems on today\'s content', 'A new field, such as coding or logic'],
          ['Example', 'Algebra at age 8', 'Why 5 must sit at the centre of a magic square', 'Writing a program to search for patterns'],
          ['Risk', 'Gaps, and boredom returns', 'Frustration if pitched too high', 'Spread too thin'],
          ['Curriculum view', 'After depth', 'First', 'Computing is its own subject']
        ] },
        { kind: 'p', mt: true, html: 'Coding is the natural breadth for a mathematical child, and the computing curriculum asks for it: at Key Stage 3 pupils should "use 2 or more programming languages, at least one of which is textual, to solve a variety of computational problems". A child who already thinks in patterns usually finds a textual language such as Python a joy, because it lets them test a hunch on thousands of cases. Our <a class="ag-inline-link" href="/ks3-computing-tuition-online">KS3 computing page</a> covers the school side.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">National curriculum in England: mathematics</a>; <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-computing-programmes-of-study/national-curriculum-in-england-computing-programmes-of-study" rel="noopener" target="_blank">National curriculum in England: computing</a>. The comparison table and the view are ours.' }
      ]
    },
    {
      id: 'problems', tint: '', eyebrow: 'Problems by age',
      h2: 'What does a depth problem look like at ages 7, 11 and 14?',
      lede: 'Three problems we wrote, each with a first answer a quick child finds fast and a second question that makes them slow down. That second question is where stretch lives.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Age 7 (ours): rectangles from 12 squares', p: 'Using 12 square tiles, how many different rectangles can you build? Three: 1 by 12, 2 by 6 and 3 by 4. The depth question: which number of tiles makes only one rectangle? 7, 11, 13: the primes. The child has found prime numbers without the word.' },
          { h3: 'Age 11 (ours): the magic square centre', p: 'Put 1 to 9 in a 3 by 3 grid so every row, column and diagonal adds to 15. Many children find one by trial. The depth question: why must 5 be in the middle? Four lines pass through the centre; their total is 60, which is all nine numbers (45) plus the centre counted three extra times. So the centre is 5.' },
          { h3: 'Age 14 (ours): perfect numbers in Python', p: 'A perfect number equals the sum of its proper factors: 6 is 1 plus 2 plus 3. Write a program to find all below 10,000. It prints 6, 28, 496 and 8128. The depth question: why are they all even? Nobody knows whether an odd one exists. A real open question, met at fourteen.' }
        ] },
        { kind: 'code', lang: 'Python', label: 'Our program for the age-14 problem', code: 'def proper_factor_sum(n):\n    total = 1\n    d = 2\n    while d * d <= n:\n        if n % d == 0:\n            total += d\n            if d != n // d:\n                total += n // d\n        d += 1\n    return total\n\nprint([n for n in range(2, 10000) if proper_factor_sum(n) == n])', note: 'Output: [6, 28, 496, 8128]. Checking factors only up to the square root, and adding each pair at once, is itself a small piece of mathematical thinking.' },
        { kind: 'p', mt: true, html: 'None of these needs content beyond the child\'s age. The rectangles use multiplication facts, the magic square uses addition, and the program uses division with remainders. What changes is the question asked once the answer is found. In our lessons that second question takes up most of the time, and the child explains their reasoning aloud or in writing before moving on.' },
        { kind: 'source', html: 'All three problems, the program, its output and the explanations are written by Modern Age Coders. They are not items from any ability test, and we do not prepare children for gifted tests.' }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'Talking to school',
      h2: 'How can parents ask a UK school for more stretch?',
      lede: 'Calmly, specifically and with the school\'s own words. These steps are our suggestion, built around what the curriculum already asks of schools.',
      body: [
        { kind: 'ol', items: [
          'Write down two or three examples of work your child found too easy, with dates. Specific beats general.',
          'Ask whether the school has a policy or a named lead for more able pupils, and read it if it exists.',
          'Ask how the class teacher offers "rich and sophisticated problems" to quick learners, using the curriculum\'s own phrase.',
          'Ask about enrichment the school can nominate for, such as Royal Institution Masterclasses or UKMT challenges.',
          'Agree one small change and a date to review it, rather than asking for a label or a different year group.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What to avoid',
          left: [
            'Asking for your child to be "put on the gifted register" can stall a conversation, because many schools have no such register and there is no national one. Asking what the next harder problem is usually moves things on.',
            'Comparing your child with classmates rarely helps either.'
          ],
          rightH3: 'Where outside lessons fit',
          right: [
            'A weekly lesson outside school can supply the depth problems a busy class teacher has little time for, and a peer group of children who enjoy the same thing.',
            'For enrichment that comes through school, see our pages on <a class="ag-inline-link" href="/maths-masterclasses-for-able-students-uk">maths masterclasses</a> and <a class="ag-inline-link" href="/maths-olympiad-training-uk">the UKMT olympiad ladder</a>.'
          ] }
      ]
    },
    {
      id: 'signs', tint: 'deep', eyebrow: 'Readiness, not labels',
      h2: 'How do I know if my child needs more challenge in maths or coding?',
      lede: 'Watch what they do with problems rather than how fast they finish worksheets. These are our own observations from teaching, not a diagnostic list.',
      body: [
        { kind: 'table', caption: 'Signs a child is ready for deeper maths or coding, our teaching notes', head: ['What you might notice', 'What it suggests', 'A next step (ours)'], rows: [
          ['Finishes homework quickly and asks for "a hard one"', 'Appetite outruns the set work', 'One open problem a week, discussed at dinner'],
          ['Asks why a method works, not just how', 'Ready for reasoning and proof', 'Ask them to explain a method to you'],
          ['Invents their own rules or games', 'Thinks in systems', 'A first coding project in Scratch or Python'],
          ['Gets upset when stuck', 'Rarely stuck so far', 'Problems that take more than one sitting'],
          ['Spots patterns in numbers around them', 'Strong number sense', 'Puzzles with a pattern to generalise']
        ] },
        { kind: 'p', mt: true, html: 'Potential Plus UK publishes a list of 25 characteristics for families who want a fuller picture, and offers assessments of its own. We neither assess nor recommend for or against assessment; that is a family\'s decision. For children aged 6 to 9 our <a class="ag-inline-link" href="/gifted-and-talented-test-prep">US page on gifted testing</a> explains why honest preparation for any ability test is broad reasoning rather than drilling, which applies in the UK too.' },
        { kind: 'source', html: 'The table is ours. Potential Plus characteristics: <a class="ag-inline-link" href="https://potentialplusuk.org/index.php/characteristics/" rel="noopener" target="_blank">Characteristics of Children with High Learning Potential</a>, read 31 October 2026. We are not connected with Potential Plus, Coram or NACE.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages of stretch, from age 6 to 16',
    lede: 'Our stages, placed by readiness rather than birthday, as the curriculum itself advises.',
    table: { caption: 'Our stretch stages', head: ['Stage', 'Ages', 'Focus'], rows: [
      ['1. Play', '6 to 8', 'Patterns, shapes and number games, explained aloud'],
      ['2. Reason', '8 to 11', 'Why a rule works; first written explanations'],
      ['3. Prove and code', '11 to 14', 'Short proofs; a textual language for testing ideas'],
      ['4. Specialise', '14 to 16', 'Olympiad problems, larger coding projects, or both']
    ] },
    left: { h3: 'Moving between stages', ps: [
      'A child can be at stage 3 in number and stage 2 in geometry. We teach the stage, not the year group.',
      'We tell parents what is secure, not what label might apply.'
    ] },
    right: { h3: 'Where it can lead', ps: [
      'Competition maths through the <a class="ag-inline-link" href="/junior-mathematical-olympiad-preparation">Junior Mathematical Olympiad</a>.',
      'Or computing contests such as the <a class="ag-inline-link" href="/british-informatics-olympiad-preparation">British Informatics Olympiad</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Stretch courses in maths and coding',
    lede: 'Grouped by age. Each opens a syllabus so you can judge the depth yourself.',
    bands: [
      { num: 'I', h3: 'Young children', sub: 'Ages 6 to 9', courses: [
        { code: 'UK / GTC / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Pattern, space and number play.' },
        { code: 'UK / GTC / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Number sense, not tricks.' },
        { code: 'UK / GTC / 03', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Logic through Scratch projects.' }
      ] },
      { num: 'II', h3: 'Ages 9 to 13', sub: 'Reasoning and first code', courses: [
        { code: 'UK / GTC / 04', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python as a maths laboratory.' },
        { code: 'UK / GTC / 05', slug: 'middle-school-math-competitions-course', title: 'Junior competition maths', blurb: 'Problems that resist for a while.' },
        { code: 'UK / GTC / 06', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A first textual language.' }
      ] },
      { num: 'III', h3: 'Ages 13 to 16', sub: 'Proof and projects', courses: [
        { code: 'UK / GTC / 07', slug: 'olympiad-competition-mathematics-mastery', title: 'Problem-solving maths', blurb: 'Olympiad-style depth.' },
        { code: 'UK / GTC / 08', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From basics to real programs.' },
        { code: 'UK / GTC / 09', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms for teens', blurb: 'Logic and data structures.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Depth every week, at the child\'s stage',
    lede: TIMING + ' Lesson times are agreed in UK time, and our teachers in India keep to that clock.',
    slots: [
      { time: 'After school', l: 'Group lessons by stage, ages 8 to 16.' },
      { time: 'Early evening', l: 'Shorter sessions for ages 6 to 8.' },
      { time: 'Weekend morning', l: 'Groups and 1-on-1 lessons.' }
    ],
    cells: [
      { h3: 'The second question', p: 'Every problem gets a follow-up that slows a quick child down.' },
      { h3: 'Talk, then write', p: 'Reasoning is said aloud first, then written in a sentence or two.' },
      { h3: 'Code as breadth', p: 'From about age 9, programs test what the maths suggests.' },
      { h3: 'Peers who enjoy it', p: 'A group of 15 to 20 at the same stage, or 1-on-1.' },
      { h3: 'No labels', p: 'We report what is secure and what is next, never a category.' },
      { h3: 'Alongside school', p: 'Depth rather than next year\'s content, so school still makes sense.' }
    ]
  },

  projectsH2: 'Made in our classes',
  projectsLede: 'Projects our students built in maths and code. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents said on our Google profile, unedited.',

  fees: {
    h2: 'Fees for stretch lessons',
    lede: 'A flat monthly fee for UK families, with no term commitment and no assessment fee, because we do not assess. The first lesson is free.',
    free: ['A lesson pitched at the child\'s real stage', 'Our honest view of next steps', 'A phone number is enough to book'],
    group: ['15 to 20 children at one stage', 'A depth problem every lesson', 'Short notes on what is secure', 'The same teacher across the year'],
    one: ['One child, one teacher', 'Maths, code or both', 'Paced entirely to the child']
  },

  faq: {
    eyebrow: 'More able questions',
    h2: 'What parents of quick learners ask',
    items: [
      { q: 'Is there a gifted and talented programme in UK schools?', a: 'Not a national one. Ofsted\'s 2015 report said there was no national definition for most able, and schools decide their own approach. Ask your child\'s school whether it has a more able policy or a named lead.' },
      { q: 'How are children identified as more able in the UK?', a: 'Usually by attainment at school. Potential Plus UK says most UK children are identified as most able or more able solely on high academic achievement rather than cognitive ability, so a quick child who is not yet top of the class can be missed.' },
      { q: 'What should a school do for a child who is good at maths?', a: 'The national curriculum for England says pupils who grasp concepts rapidly should be offered rich and sophisticated problems before any acceleration through new content. In practice that means harder problems on current topics rather than next year\'s textbook.' },
      { q: 'Should my child move ahead a year in maths?', a: 'The curriculum advises depth first, with progress based on the security of understanding. Speeding ahead often brings the same boredom back a year later; richer problems usually serve a quick learner better, though every child is different.' },
      { q: 'What is high learning potential?', a: 'The phrase Potential Plus UK has used since 2013 instead of gifted, talented, bright or clever. It describes children who understand quickly and learn faster than most, and the charity says this can be developed alongside traits such as motivation and persistence.' },
      { q: 'Is coding good for a gifted child?', a: 'Often, because it adds breadth rather than speed. The Key Stage 3 computing curriculum already asks for two or more programming languages, at least one textual, and a mathematical child can use code to test patterns on thousands of cases.' },
      { q: 'Do you test whether my child is gifted?', a: 'No. We do not assess, label or certify children. In a free first lesson we see what your child can do with a rich problem and tell you which stage we would teach them at.' },
      { q: 'Do you prepare children for gifted or ability tests?', a: 'No. We teach reasoning, number sense, spatial thinking and code for their own sake. That kind of broad thinking is the only honest preparation for any ability test, and we never use imitation test items.' },
      { q: 'Are you connected with Potential Plus, NACE or Ofsted?', a: 'No. We quote their published words so parents can follow them up, and we have no link with any of them.' },
      { q: 'When are lessons?', a: TIMING + ' All lessons are in UK time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for bright, curious children',
    lede: 'Enrichment through school, competitions and coding.',
    items: [
      { href: '/maths-masterclasses-for-able-students-uk', label: 'Maths masterclasses', p: 'Royal Institution series and nomination.' },
      { href: '/online-maths-circle-uk', label: 'Online maths circles', p: 'Long problems with a steady group.' },
      { href: '/online-maths-summer-school-uk', label: 'Maths summer school', p: 'The UKMT week and summer at home.' },
      { href: '/ks2-coding-lessons-online', label: 'KS2 coding lessons', p: 'Coding for ages 7 to 11.' },
      { href: '/ks3-maths-tuition-online', label: 'KS3 maths', p: 'The Year 7 to 9 curriculum.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The UK hub.' }
    ]
  },

  start: {
    h2: 'Book a free stretch lesson',
    lede: 'Send us your child\'s age and something in maths or coding they loved. We teach one lesson around a rich problem, then suggest a stage.',
    readFirst: 'Looking first? Each <a class="ag-inline-link" href="/courses">course page</a> carries its syllabus, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes our lessons.',
    note: 'WhatsApp gets the fastest reply. We write back from India on a +91 number.',
    formNote: 'No fee and no test, just a lesson.'
  },

  footer: {
    cols: [
      { h4: 'Stretch', links: [
        { href: '/maths-masterclasses-for-able-students-uk', label: 'Masterclasses' },
        { href: '/online-maths-circle-uk', label: 'Maths circles' },
        { href: '/maths-olympiad-training-uk', label: 'Olympiad training' },
        { href: '/ks3-computing-tuition-online', label: 'KS3 computing' }
      ] },
      { h4: 'About us', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Deeper before faster, and no labels'
  },

  personalityCss: `
.ag-root.ag-gtc .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-gtc .ag-capsule { border-left-width: 5px; border-radius: 0 10px 10px 0; }
.ag-root.ag-gtc .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-gtc .ag-table th:first-child { width: 26%; }
.ag-root.ag-gtc .ag-code-note { font-style: italic; }
`,

  dossier: {
    curriculumAuthority: 'Ofsted, The most able students: an update on progress since June 2013 (March 2015): no national definition for most able; 40 non-selective secondary and 10 primary schools visited, 130 routine inspections; Key Stage 3 work too easy in over half; repetitive work covering Key Stage 2; more effective schools quote; NACE and Potential Plus UK cited. National curriculum in England, mathematics: rich and sophisticated problems before acceleration (KS1 and 2; KS3 version); progress on security of understanding. Computing KS3: 2 or more programming languages, at least one textual. Potential Plus UK (now Coram Potential Plus): high learning potential since 2013; top 2 to 5 per cent; UK identification by attainment; 25 descriptors; transfer to Coram.',
    localProject: 'Deeper before faster. The page sets out, in one table, how most able is framed in the UK (no national definition per Ofsted 2015, attainment-based identification per Potential Plus, depth before acceleration per the national curriculum), compares acceleration, depth and breadth, gives three original depth problems at ages 7, 11 and 14 including a Python search for perfect numbers that ends on an open question, five steps for asking a school for stretch, and a readiness table that promises no label. Lesson family: a policy-honest stretch guide.',
    requiredMentions: ['There is currently no national definition for most able.', 'solely based on high academic achievement, rather than cognitive ability', 'Pupils who grasp concepts rapidly should be challenged through being offered rich and sophisticated problems before any acceleration through new content.', 'work in Key Stage 3 is too easy', 'there is always a question we can', 'National Association for Able Children in Education', 'proper_factor_sum', 'Coram Potential Plus', 'The rectangles use multiplication facts'],
    sources: [
      { claim: 'Ofsted, The most able students: an update on progress since June 2013 (March 2015): no national definition, sample, KS3 findings, NACE and Potential Plus cited.', url: 'https://assets.publishing.service.gov.uk/media/5a75b80ae5274a4368299726/The_most_able_students_an_update_on_progress_since_June_2013.pdf' },
      { claim: 'National curriculum in England, mathematics: depth before acceleration; progress on security of understanding.', url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study' },
      { claim: 'National curriculum in England, computing, key stage 3: two or more programming languages, at least one textual.', url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-computing-programmes-of-study/national-curriculum-in-england-computing-programmes-of-study' },
      { claim: 'Potential Plus UK, High learning potential: terminology since 2013, top 2 to 5 per cent, attainment-based identification.', url: 'https://potentialplusuk.org/index.php/families/high-learning-potential/' },
      { claim: 'Potential Plus UK, characteristics (25 descriptors) and the announcement of the move to Coram.', url: 'https://potentialplusuk.org/index.php/characteristics/' }
    ],
    rejectedClaims: [
      'NACE\'s own pages: nace.co.uk returned HTTP 403; stopped, not worked around. NACE appears only as named by Ofsted.',
      'A current DfE or Ofsted definition of more able: none found in what we read; the 2015 line is dated, and parents are pointed to school policies.',
      'Potential Plus assessment fees and its SEND, neurodivergence and DME material: not used (no prices; no health content).',
      'Ofsted\'s gender and disadvantage performance gaps: not printed (no gender statistics; outside scope).',
      'Any promise that our lessons lead to a gifted label, a grammar school place or a test score: not made.',
      'Named schools in Ofsted case studies: not printed.'
    ]
  }
};
