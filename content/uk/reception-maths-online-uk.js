'use strict';
// Reception maths online, a parent's guide (ag- maths door, England; UK and US exams cluster Phase 2, row UK001).
// Sources, read raw on 31 October 2026 with curl (gov.uk content API, assets.publishing.service.gov.uk PDFs, text
// through the scratchpad pdftext helper); raw copies in keyword-research-2026-09/uk-us-gap/src/reception-maths-online-uk/:
//  - DfE, Early years foundation stage (EYFS) statutory framework for group and school-based providers, effective
//    September 2026 (EYFS_group_and_school_based_from_September_2026.pdf). Verbatim: Mathematics educational
//    programme: "Developing a strong grounding in number is essential so that all children develop the necessary
//    building blocks to excel mathematically."; "using manipulatives, including small pebbles and tens frames for
//    organising counting"; "'have a go', talk to adults and peers about what they notice and not be afraid to make
//    mistakes". ELG: Number: "Have a deep understanding of numbers to 10, including the composition of each number.";
//    "Subitise (recognise quantities without counting) up to 5."; "Automatically recall (without reference to rhymes,
//    counting or other aids) number bonds up to 5 (including subtraction facts) and some number bonds to 10, including
//    double facts." ELG: Numerical Patterns: "Verbally count beyond 20, recognising the pattern of the counting
//    system."; "Compare quantities up to 10 in different contexts, recognising when one quantity is greater than,
//    less than or the same as the other quantity."; "Explore and represent patterns within numbers up to 10,
//    including evens and odds, double facts and how quantities can be distributed equally." 1.8: "The ELGs should not
//    be used as a curriculum or in any way to limit the wide variety of rich experiences that are crucial to child
//    development."; 1.9 "holistic, best-fit judgement"; 1.11 "Recorded, written or photographic evidence is not
//    required."; 1.4 "seven areas of learning and development"; 2.13 Profile "no later than 30 June"; 2.15 "emerging";
//    2.16 "Year 1 teachers must be given a copy of the Profile report."; 2.17 results shared with parents; footnote 12
//    compulsory school age "whichever of 31 December, 31 March or 31 August comes first after the child's 5th
//    birthday"; 17 ELGs counted in the PDF. Annex B (RBA): "taken within the first six weeks of a child starting
//    reception"; "designed to take around 20 minutes"; "The data, including numerical scores, is not shared with
//    external bodies, including schools, teachers, pupils or parents/carers."; "There is no expected standard and
//    children cannot pass or fail."; "teachers receive a series of narrative statements"; compared with Key Stage 2
//    outcomes 7 years later.
//  - Early Years Screen Time Advisory Group, Screen use by children aged under five: independent report, March 2026
//    (gov.uk publication updated 27 March 2026). Verbatim: "Two to five-year-olds – keep screen time to no more than an
//    hour a day, ideally through short chunks (30 minutes or less) and not during mealtimes or near to bedtime. Keep
//    solo screen use to a minimum." (restated without the dash on the page); co-viewing "improves language and
//    thinking skills"; "EYSTAG has not sought to provide advice for early years educational settings".
//  - Modern Age Coders course page early-math-foundations: "Ages 4-7 (kindergarten to grade 2), all starting points".
// Our own: the six kitchen-floor games, the four worked examples, the parent practice set and the ladder wording.
// Spine: Reception maths is six sentences and a teacher's judgement, not a test, so the honest help is play with a
// parent, little screen time, and a short live class only when it suits the child. Lesson family: an early years
// parent guide, distinct from the KS1 tuition page and the Year 1 page.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'RECEPTION', blurb: 'Six early learning goal sentences, judged by the teacher by 30 June. What they mean, and why play beats worksheets at four.' },
  slug: 'reception-maths-online-uk',
  code: 'ru',
  accent: '#653C22',
  accentRationale: 'Reception maths: a warm conker brown (#653C22, 8.91:1 on #FBF8F2 and 7.67:1 on the deepest paper tint), soft and earthy for the youngest page, apart from the KS1 dusk violet',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Reception maths online',
  title: 'Reception Maths Online UK | EYFS Early Learning Goals',
  description: 'Reception maths explained for parents: the two EYFS maths early learning goals, the baseline check and Profile, screen time advice, and play to try at home.',
  ogDescription: 'Reception maths is judged against six short sentences in the EYFS framework, by the teacher, by 30 June. Here is what they ask and how to help at home.',
  twitterDescription: 'The EYFS Number and Numerical Patterns goals, the Reception Baseline Assessment, the Profile, and gentle maths play for four and five year olds.',
  pageName: 'Reception Maths Online UK',
  webPageDescription: 'A guide for parents of Reception children in England to the EYFS mathematics early learning goals and assessments, with home play ideas and short live early maths classes.',
  courseDescription: 'Short, playful live early maths sessions for four to seven year olds: counting, the composition of numbers to 10, subitising, doubles and sharing, with a parent beside the child.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Reception maths',
  navLinks: [
    { href: '#goals', label: 'The two goals' },
    { href: '#checks', label: 'How it is judged' },
    { href: '#screens', label: 'Screens at four' },
    { href: '#play', label: 'Play at home' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; EYFS &middot; Reception, ages 4 to 5',
  h1: 'Reception maths online: a parent\'s guide to the early learning goals',
  lede: 'Search for Reception maths and you meet a wall of worksheets, apps and printable packs. The official picture is much smaller and kinder. In England, a Reception child\'s maths is described by two early learning goals, Number and Numerical Patterns, six short sentences in all, and the class teacher judges them from what the child does in everyday play, with no test to sit and no written evidence needed. This page explains those six sentences in plain words, the two checks that happen in Reception, what the government\'s 2026 screen advice says about under-fives, and maths play that fits into a normal day. It also says honestly when a live online class helps a four or five year old, and when it does not.',
  secondaryCta: { href: '#goals', label: 'Read the two goals' },
  wa: 'Hello Modern Age Coders, I have a child in Reception and would like to ask about early maths.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; From the EYFS statutory framework in force from September 2026',
  spec: [
    ['Year group', 'Reception, the last EYFS year'],
    ['Usual ages', '4 at the start, 5 by the summer'],
    ['Maths goals', 'Number, and Numerical Patterns'],
    ['Judged by', 'The class teacher, whole picture'],
    ['Profile deadline', 'No later than 30 June'],
    ['Our early course', 'Early Maths Foundations, ages 4 to 7'],
    ['Classes', '1-on-1 with a parent near, or a group'],
    ['First class', 'Free, and short']
  ],
  capsuleQ: 'In short',
  capsule: 'Reception maths in England is set by the Department for Education\'s EYFS statutory framework. By the end of Reception, children at the expected level have a deep understanding of numbers to 10, subitise up to 5, recall number bonds to 5, count beyond 20, compare quantities and explore patterns such as odds, evens and doubles. Teachers judge this in the EYFS Profile, completed by 30 June. Modern Age Coders offers short live Early Maths Foundations sessions, 1-on-1 or in a group, for ages 4 to 7. The first class is free, and we are independent of schools and the DfE.',

  picks: {
    eyebrow: 'Courses for the youngest',
    h2: 'Three courses a Reception family might look at',
    lede: 'Early Maths Foundations is the one written for this age. The other two are for later, so a family can see where the road goes.',
    items: [
      { course: 'early-math-foundations', code: 'RC / 01', title: 'Early Maths Foundations', note: 'Listed for ages 4 to 7: counting that means something, numbers to 10 on a ten-frame, breaking numbers into parts.' },
      { course: 'mental-maths-mastery-kids', code: 'RC / 02', title: 'Mental Maths for Kids', note: 'For ages 5 to 10, once bonds and doubles are settled and a child enjoys seeing numbers at a glance.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'RC / 03', title: 'Elementary Maths', note: 'The course for Year 1 onwards, when numbers to 100 and the equals sign arrive.' }
    ]
  },

  sections: [
    {
      id: 'goals', tint: 'tint', eyebrow: 'The two goals',
      h2: 'What maths should a child know by the end of Reception?',
      lede: 'Two early learning goals cover maths, with three sentences each. They describe a child "at the expected level of development" at the end of the EYFS, usually the end of Reception.',
      body: [
        { kind: 'p', html: 'The framework that applies from September 2026 opens its maths section with one clear idea: "Developing a strong grounding in number is essential so that all children develop the necessary building blocks to excel mathematically." It asks settings to give children frequent, varied chances to count and to handle quantities, naming the equipment in a phrase every parent can copy at home: "using manipulatives, including small pebbles and tens frames for organising counting". The goals themselves are short, and they are worth reading in full.' },
        { kind: 'table', mt: true, caption: 'The EYFS mathematics early learning goals, word for word (DfE statutory framework, September 2026)', head: ['Goal', 'Children at the expected level of development will', 'What it looks like at home (our gloss)'], rows: [
          ['Number', 'Have a deep understanding of numbers to 10, including the composition of each number.', 'Knows that 7 can be 5 and 2, or 4 and 3, or 6 and 1, and can show it with objects'],
          ['Number', 'Subitise (recognise quantities without counting) up to 5.', 'Glances at four buttons and says "four" without pointing at each one'],
          ['Number', 'Automatically recall (without reference to rhymes, counting or other aids) number bonds up to 5 (including subtraction facts) and some number bonds to 10, including double facts.', 'Says straight away that 3 and 2 make 5, and that 5 take away 1 leaves 4'],
          ['Numerical Patterns', 'Verbally count beyond 20, recognising the pattern of the counting system.', 'Counts on past twenty: twenty-one, twenty-two, and notices it repeats the ones'],
          ['Numerical Patterns', 'Compare quantities up to 10 in different contexts, recognising when one quantity is greater than, less than or the same as the other quantity.', 'Tells you which plate has more grapes, even when the smaller pile is spread out'],
          ['Numerical Patterns', 'Explore and represent patterns within numbers up to 10, including evens and odds, double facts and how quantities can be distributed equally.', 'Finds that 6 socks pair up and 7 leave one over, and shares 8 sweets fairly between two']
        ] },
        { kind: 'p', html: 'Three things in the framework change how a parent should read that table. First, the goals are not a syllabus: "The ELGs should not be used as a curriculum or in any way to limit the wide variety of rich experiences that are crucial to child development." Second, the judgement is a whole picture of the child, what the framework calls a "holistic, best-fit judgement". Third, there is no pile of evidence to build: "Recorded, written or photographic evidence is not required." The teacher draws on knowing the child.' },
        { kind: 'two', mt: true,
          leftH3: 'Maths is one area of seven',
          left: [
            'The framework sets out "seven areas of learning and development", and mathematics is one of four specific areas, alongside literacy, understanding the world, and expressive arts and design.',
            'The three prime areas, communication and language, physical development, and personal, social and emotional development, come first. A child who can listen, take turns and hold a pencil is better placed for every maths goal.'
          ],
          rightH3: 'Attitude is written into it',
          right: [
            'The maths programme asks that children look for patterns, spot connections, "\'have a go\', talk to adults and peers about what they notice and not be afraid to make mistakes".',
            'That last phrase is the one to keep in mind at home. A four year old who happily guesses and checks is doing exactly what the framework hopes.'
          ] },
        { kind: 'source', html: 'Source: Department for Education, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/early-years-foundation-stage-framework--2" rel="noopener" target="_blank">Early years foundation stage (EYFS) statutory framework</a>, the version for group and school-based providers in force from September 2026, read on 31 October 2026. The middle column is quoted exactly; the right-hand column is our own illustration.' }
      ]
    },
    {
      id: 'checks', tint: 'deep', eyebrow: 'How it is judged',
      h2: 'Is there a maths test in Reception?',
      lede: 'Not one that a child can pass or fail. There are two separate checks in the Reception year, and they do quite different jobs.',
      body: [
        { kind: 'p', html: 'Early in the year comes the Reception Baseline Assessment. The framework describes it as "a short assessment, taken within the first six weeks of a child starting reception", covering early mathematics, literacy, communication and language. Its purpose is narrow: the results are compared with the same children\'s Key Stage 2 results seven years later, to measure a school\'s progress. The framework is blunt about what it is not: "The data, including numerical scores, is not shared with external bodies, including schools, teachers, pupils or parents/carers." Teachers receive short narrative statements instead, and "There is no expected standard and children cannot pass or fail."' },
        { kind: 'table', mt: true, caption: 'The two Reception checks side by side (EYFS statutory framework, September 2026, section 2 and Annex B)', head: ['', 'Reception Baseline Assessment', 'EYFS Profile'], rows: [
          ['When', 'Within the first six weeks of starting Reception', 'In the final term, no later than 30 June'],
          ['How long', 'Not timed, designed to take around 20 minutes', 'Built up over the year from everyday observation'],
          ['Who does it', 'A trained adult the child knows', 'Usually the Reception class teacher'],
          ['What it covers', 'Early maths, literacy, communication and language', 'All 17 early learning goals, including the two for maths'],
          ['What families get', 'Nothing: scores are not shared with parents', 'The results, with a chance to discuss them'],
          ['What it is for', 'A starting point for primary progress measures', 'A picture of the child and their readiness for Year 1']
        ] },
        { kind: 'p', mt: true, html: 'The EYFS Profile is the one that matters to a family. For each goal the teacher notes whether the child is meeting the expected level or is "not yet reaching expected levels", which the framework calls "emerging". Providers "must share the results of the Profile with parents and/or carers", and the framework adds that "Year 1 teachers must be given a copy of the Profile report", so the next teacher starts September already knowing the child. An emerging judgement in maths is information, not a label: it tells the Year 1 teacher where to begin.' },
        { kind: 'two', mt: true,
          leftH3: 'Good questions for the teacher',
          left: [
            'Which of the six maths statements does my child show easily, and which are still emerging? What does that look like in class?',
            'What do you use in class for counting and bonds, such as ten-frames or pebbles, so that we can use the same at home?'
          ],
          rightH3: 'On starting school',
          right: [
            'A child reaches compulsory school age on whichever of 31 December, 31 March or 31 August comes first after their fifth birthday, as the framework\'s footnote notes. Most children start Reception before that date.',
            'In exceptional cases, and only with the parents\' agreement, a child can stay in EYFS provision longer; the Profile is then completed once, before Year 1.'
          ] },
        { kind: 'source', html: 'Source: DfE EYFS statutory framework, paragraphs 2.11 to 2.21 and Annex B, statutory guidance for the Reception Baseline Assessment, read on 31 October 2026. The count of 17 goals is ours, made by listing each goal heading in the framework.' }
      ]
    },
    {
      id: 'screens', tint: '', eyebrow: 'Screens at four',
      h2: 'Is online maths suitable for a four or five year old?',
      lede: 'Sometimes, in small doses, with a parent beside them. The government-commissioned 2026 advice on under-fives is the right yardstick, and we would rather say so than sell more screen time.',
      body: [
        { kind: 'p', html: 'In March 2026 the Early Years Screen Time Advisory Group published an independent report for the government. Its suggested message to parents of two to five year olds is to keep screen time to no more than an hour a day, "ideally through short chunks (30 minutes or less) and not during mealtimes or near to bedtime. Keep solo screen use to a minimum." The same report found that an adult watching and talking alongside a child, which it calls co-viewing, "improves language and thinking skills". It also says plainly that it did not set out to advise early years educational settings.' },
        { kind: 'table', mt: true, caption: 'How we apply that advice to a live maths class for a Reception child (our policy)', head: ['The advice says', 'So in our early maths sessions'], rows: [
          ['Short chunks, 30 minutes or less', 'A Reception session is short, and the teacher ends it early if attention has gone'],
          ['Keep solo screen use to a minimum', 'We ask for a parent or older sibling in the room for the whole session'],
          ['Interaction helps; passive watching does not', 'The child talks, counts aloud and moves real objects; there are no videos to sit through'],
          ['Balance with play away from screens', 'Each session ends with one off-screen game for the days in between'],
          ['Not near bedtime', 'We suggest an after-school or weekend morning slot, never late evening']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'When a live class can help',
          left: [
            'A child who loves numbers and keeps asking for more, where a patient teacher can follow their curiosity in a way an app cannot.',
            'A family that would like ideas and a little structure for home play, and a parent who wants to see how a teacher handles counting and bonds.'
          ],
          rightH3: 'When we suggest waiting',
          right: [
            'A child who is tired after school, unsettled by screens, or simply happier building and drawing. Many four year olds are in that group, and that is fine.',
            'Most children in Reception need nothing beyond school and everyday play. We say this in the free class if it is true for your child.'
          ] },
        { kind: 'p', mt: true, html: 'Our early course is honest about its age range. <a class="ag-inline-link" href="/courses/early-math-foundations">Early Maths Foundations</a> is listed for ages 4 to 7, so a Reception child fits at the young end of it. The wider school teaches from age 6, and many families find that the summer of Reception or the start of Year 1 is a better moment to begin regular classes than the first term of school.' },
        { kind: 'source', html: 'Source: Early Years Screen Time Advisory Group, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/screen-use-by-children-aged-under-5" rel="noopener" target="_blank">Screen use by children aged under five: independent report</a>, March 2026, read on 31 October 2026. The right-hand column of the table is our own practice, not part of the report.' }
      ]
    },
    {
      id: 'play', tint: 'tint', eyebrow: 'Play at home',
      h2: 'What Reception maths can we do at home instead of worksheets?',
      lede: 'One small game for each of the six goal sentences. All are our own, need nothing you have to buy, and take five minutes.',
      body: [
        { kind: 'table', caption: 'Six games of ours, one per early learning goal statement', head: ['Game (ours)', 'You need', 'How to play', 'Goal statement it serves'], rows: [
          ['Hide and Seek Five', 'Five pebbles and a cup', 'Hide some pebbles under the cup. The child sees what is left and says how many are hiding.', 'Composition of numbers, and bonds to 5'],
          ['Flash Plate', 'A paper plate and dried pasta', 'Show a plate with 1 to 5 pieces for two seconds, then cover it. "How many did you see?"', 'Subitise up to 5'],
          ['Ten-Frame Breakfast', 'An egg box with two rows of five', 'Fill it with grapes or blueberries. How many spaces are empty? What makes 10?', 'Deep understanding of numbers to 10'],
          ['Stair Count', 'A staircase or a long hallway', 'Count each step aloud, then keep counting past 20 in the hallway: twenty-one, twenty-two.', 'Count beyond 20'],
          ['More or Fewer?', 'Two handfuls of buttons', 'Spread one pile out wide and bunch the other. Which has more? Line them up to check.', 'Compare quantities up to 10'],
          ['Sock Pairs', 'The laundry basket', 'Pair the socks. Did every sock get a partner? That number is even. One left over means odd.', 'Evens, odds, doubles and fair sharing']
        ] },
        { kind: 'p', html: 'Worksheets are not wrong, but most of the six statements are things a child does or says, not things they write. Subitising is a glance; comparing a spread-out pile with a bunched one is a judgement about real objects; recall "without reference to rhymes, counting or other aids" is something you hear in a quick answer. A sheet of drawn dots can only show some of that. If your child enjoys colouring sums, keep it. If they resist, the games above cover the same ground.' },
        { kind: 'two', mt: true,
          leftH3: 'Words worth using every day',
          left: [
            'More, fewer, the same, altogether, left over, double, half, first, next, and how many. The framework\'s maths programme stresses vocabulary as well as number.',
            'Ask "How do you know?" and wait. A four year old explaining that three and three is six because "they match" is reasoning, not just recall.'
          ],
          rightH3: 'Signs to mention to the teacher',
          right: [
            'Still counting each object one by one for two or three items late in the spring term, or unsure which of two small groups is bigger.',
            'Not yet counting past ten in the summer term. Teachers see a wide range at this age, and a short conversation usually helps more than extra practice.'
          ] }
      ]
    },
    {
      id: 'examples', tint: '', eyebrow: 'Worked examples',
      h2: 'Four Reception maths moments, step by step',
      lede: 'Our own examples, written as a parent and child might meet them. The child talks and moves objects; nobody writes anything down.',
      body: [
        { kind: 'two',
          leftH3: '1. Six in three different ways (composition)',
          left: [
            '<strong>Set-up (ours).</strong> Six toy cars and two "garages", a pair of shoeboxes.',
            '<strong>Play.</strong> Park all six in one garage: six and nothing. Move one across: five and one. Keep moving one at a time: four and two, three and three.',
            '<strong>Talk.</strong> "Did the number of cars change?" The child sees that six stays six however it is split.',
            '<strong>Why it matters.</strong> This is the framework\'s "composition of each number". It is the root of every later bond.'
          ],
          rightH3: '2. Seeing five without counting (subitising)',
          right: [
            '<strong>Set-up (ours).</strong> Two dice, one showing the five pattern and one with five pasta pieces scattered.',
            '<strong>Ask.</strong> "Which is quicker to see?" Most children say the dice pattern straight away.',
            '<strong>Connect.</strong> The dice five is four corners and one in the middle: four and one more.',
            '<strong>Why it matters.</strong> Recognising small amounts at a glance frees attention for bigger questions later.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '3. Double four on two hands (doubles)',
          left: [
            '<strong>Question (ours).</strong> "Show me four fingers on this hand, and four on that one. How many?"',
            '<strong>First time.</strong> The child counts all eight fingers. That is fine.',
            '<strong>Later.</strong> Repeated over a few weeks with real objects, double four becomes a known fact: eight, said at once.',
            '<strong>Why it matters.</strong> The goal asks for doubles recalled without counting or aids. Practice with objects gets a child there; drilling the words alone does not.'
          ],
          rightH3: '4. Sharing nine strawberries (fair sharing)',
          right: [
            '<strong>Question (ours).</strong> "Share these nine strawberries fairly between you and me."',
            '<strong>Play.</strong> One for you, one for me, until one is left.',
            '<strong>Talk.</strong> "Is it fair? What could we do with the last one?" Children often suggest cutting it, which is a lovely early idea of a half.',
            '<strong>Why it matters.</strong> It meets "how quantities can be distributed equally", and nine leaving one over is the odd number pattern.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set for a parent to try (ours, with answers).</strong> (1) Put 5 pebbles on the table and hide 2 in your hand; how many is the child looking at? (2) Show 4 buttons for two seconds; how many? (3) "What do I need with 3 to make 5?" (4) Count aloud from 17; what comes after 20? (5) Which is more, 7 spread out or 8 bunched up? (6) Can 10 apples be shared fairly by two people? <strong>Answers:</strong> (1) 3; (2) 4; (3) 2; (4) 21; (5) 8, which the child can check by lining them up; (6) yes, 5 each, so 10 is even.' }
      ]
    },
    {
      id: 'classes', tint: 'deep', eyebrow: 'Our early classes',
      h2: 'How does an early maths class work for a Reception child?',
      lede: 'Short, spoken and hands-on, with a grown-up in the room. The teacher leads the play; the parent learns the games to use all week.',
      body: [
        { kind: 'ol', items: [
          '<strong>A free first class, kept short.</strong> The teacher plays a few counting and hiding games to see where the child is with the six goal statements. Nothing is written down and nothing needs preparing.',
          '<strong>A small tray beside the screen.</strong> Ten pebbles or buttons, an egg box cut to two rows of five, and a pair of dice. The child moves these while the teacher does the same on camera.',
          '<strong>One idea per session.</strong> A whole session might be the many ways of making 6, or comparing two piles. Young children learn most when one idea is met in several ways.',
          '<strong>A game to keep.</strong> Each session ends with one off-screen game for the days in between, so most of the maths happens away from the screen.',
          '<strong>A word with the parent.</strong> A short note on what the child can now do, which goal statement it connects to, and what to try next.'
        ] },
        { kind: 'two', mt: true,
          leftH3: '1-on-1 or a group at this age?',
          left: [
            'For a four or five year old we usually suggest 1-on-1, so the teacher can follow the child\'s pace and stop when attention fades.',
            'A group of 15 to 20 suits an older or very sociable child, often in the summer of Reception or in Year 1, where the energy of other children helps.'
          ],
          rightH3: 'What we will not do',
          right: [
            'Give a Reception child test papers or timed drills. Neither of the Reception checks is a test to prepare for.',
            'Claim any link with a school, nursery, local authority or the Department for Education. We are an independent online school.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Through the year',
    h2: 'Four stepping stones across Reception',
    lede: 'Roughly how the six goal statements build over the year. Children move at very different speeds at four and five.',
    table: { caption: 'Early maths stepping stones in Reception (our sequence, built on the EYFS goals)', head: ['Stone', 'Often around', 'What a parent might notice'], rows: [
      ['1. One number for each thing', 'Autumn term', 'Touches each object once while counting, and knows the last number said is how many'],
      ['2. Small amounts at a glance', 'Late autumn to spring', 'Says "three" for three items without counting, up to five'],
      ['3. Inside the numbers to 10', 'Spring term', 'Shows a number as two parts in more than one way, and fills a ten-frame'],
      ['4. Quick bonds, and past 20', 'Summer term', 'Recalls bonds to 5 and doubles, compares groups, and counts on beyond 20']
    ] },
    left: { h3: 'Stone one takes time', ps: [
      'Matching one count to one object sounds simple and is a real achievement. Rushing past it causes trouble later.',
      'Families with a slightly older child can read our <a class="ag-inline-link" href="/online-math-tutor-kindergarten">kindergarten maths page</a>, written for the same age in the US system.'
    ] },
    right: { h3: 'Stone four meets Year 1', ps: [
      'Year 1 builds numbers to 100 and the equals sign on exactly these foundations.',
      'Sessions can pause over school holidays.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for the early years and beyond',
    lede: 'Only the first band is written for Reception. The others show what follows in the primary years.',
    bands: [
      { num: 'I', h3: 'Early number', sub: 'Ages 4 to 7', courses: [
        { code: 'UK / RC1 / 01', slug: 'early-math-foundations', title: 'Early Maths Foundations', blurb: 'Quantities, ten-frames and parts of numbers, through play.' },
        { code: 'UK / RC1 / 02', slug: 'mental-maths-mastery-kids', title: 'Mental Maths', blurb: 'Seeing numbers at a glance, then bonds that stick.' },
        { code: 'UK / RC1 / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'Beads that make tens and ones visible.' }
      ] },
      { num: 'II', h3: 'First school years', sub: 'From Year 1', courses: [
        { code: 'UK / RC2 / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary Maths', blurb: 'Numbers to 100, adding, shape, time and money.' },
        { code: 'UK / RC2 / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and Readiness', blurb: 'Patterns and spatial puzzles for ages 6 to 9.' },
        { code: 'UK / RC2 / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Step-by-step thinking with puzzles and patterns.' }
      ] },
      { num: 'III', h3: 'Making things', sub: 'From age 6', courses: [
        { code: 'UK / RC3 / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Block coding once a child can follow a short sequence.' },
        { code: 'UK / RC3 / 02', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Simple animated stories and games.' },
        { code: 'UK / RC3 / 03', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'First apps built from blocks, a little later on.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Sessions',
    h2: 'How early maths sessions run',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Our teachers work from India and every session is offered in UK time, kept short for the youngest children.',
    slots: [
      { time: 'After school', l: 'Once a snack and a rest are done.' },
      { time: 'Weekend morning', l: 'When most four year olds are freshest.' },
      { time: 'Holiday mornings', l: 'A gentle restart before term.' }
    ],
    cells: [
      { h3: 'A grown-up nearby', p: 'A parent or older sibling stays in the room, which is what the screen advice asks.' },
      { h3: 'Real objects', p: 'Pebbles, buttons and an egg-box ten-frame on the table, not just pictures on screen.' },
      { h3: 'Spoken maths', p: 'Children say and show answers; no worksheets or writing at this stage.' },
      { h3: 'Ends early if needed', p: 'If attention has gone, the teacher stops and gives a game for later.' },
      { h3: 'Free first session', p: 'One short meeting with the teacher, with no payment taken.' },
      { h3: '1-on-1 or a group', p: 'Usually 1-on-1 for Reception; a group of 15 to 20 for an older child.' }
    ]
  },

  projectsH2: 'Things our young students have made',
  projectsLede: 'Small, cheerful pieces from regular classes with older children, none of them marked. <a class="ag-inline-link" href="/student-labs">Student labs</a> has the full collection.',
  reviewsLede: 'What parents wrote on Google, unedited.',

  fees: {
    h2: 'Fees for early maths sessions',
    lede: 'The first session is free. After that there is a monthly fee, lower for a group place than for 1-on-1, and nothing is charged until a course and a regular time have been agreed with you.',
    free: ['A short, playful first session', 'A view of the six goal statements', 'Booked with just a phone number'],
    group: ['15 to 20 children, grouped by stage', 'One familiar teacher each week', 'An off-screen game after every session', 'Suits older or sociable children'],
    one: ['A teacher for your child alone', 'Paced to a four or five year old', 'Our usual suggestion in Reception']
  },

  faq: {
    eyebrow: 'Reception questions',
    h2: 'What parents of Reception children ask about maths',
    items: [
      { q: 'What maths should my child know by the end of Reception?', a: 'Children at the expected level understand numbers to 10 and how each is made of smaller parts, see up to 5 at a glance, recall bonds to 5 and some to 10 including doubles, count beyond 20, compare groups up to 10, and explore odds, evens and fair sharing.' },
      { q: 'What are the early learning goals for maths?', a: 'There are two: Number, and Numerical Patterns. Each has three statements in the EYFS statutory framework, and they describe the expected level of development at the end of the EYFS.' },
      { q: 'Is there a maths test in Reception?', a: 'No test that a child can pass or fail. The Reception Baseline Assessment early in the year has no expected standard and its scores are not shared with parents, and the EYFS Profile at the end of the year is the teacher\'s judgement from everyday observation.' },
      { q: 'When will I hear how my child is doing?', a: 'The EYFS Profile must be completed no later than 30 June, and schools must share the results with parents and explain how to discuss them. Year 1 teachers also receive a copy.' },
      { q: 'What does emerging mean on the Profile?', a: 'It means the child is not yet at the expected level for that goal. It helps the Year 1 teacher know where to start, and it is common for some goals at this age.' },
      { q: 'Are Reception maths worksheets a good idea?', a: 'They are fine if your child enjoys them, but most of the maths goals are things children do and say, such as seeing small numbers at a glance or comparing real piles. Short games with objects cover more of them.' },
      { q: 'How much screen time is right for a four year old?', a: 'The independent report published for the government in March 2026 suggests no more than an hour a day for two to five year olds, ideally in chunks of 30 minutes or less, with little solo use. Our sessions are short and need an adult in the room.' },
      { q: 'Is online maths tuition suitable for a Reception child?', a: 'For some children, in small doses, with a parent alongside. Our Early Maths Foundations course is listed for ages 4 to 7, and we will tell you honestly in the free session if waiting until Year 1 would suit your child better.' },
      { q: 'When are sessions?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is given in UK time.' },
      { q: 'Are you connected with the school or the Department for Education?', a: 'No. Modern Age Coders is an independent online school with no link to any school, nursery, local authority or the Department for Education.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Next steps',
    h2: 'Other pages for young children',
    lede: 'What comes after Reception, and pages for children who love number puzzles.',
    items: [
      { href: '/online-math-tutor-kindergarten', label: 'Kindergarten maths', p: 'The same age group as Reception, in the US system.' },
      { href: '/online-math-tutor-1st-grade', label: 'First grade maths', p: 'The US equivalent of Year 2, for comparison.' },
      { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition', p: 'Years 3 to 6, for the road further ahead.' },
      { href: '/first-competitions-for-primary-school-children-uk', label: 'First competitions for primary children', p: 'Gentle maths contests, for later in primary school.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live class with us looks like.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page we publish, maths and coding.' }
    ]
  },

  start: {
    h2: 'Book a free early maths session',
    lede: 'Leave a number and we will call at a UK time that fits around school and naps. The first session is short and playful, and you will come away with a couple of games to use at home either way.',
    readFirst: 'Would you like to look first? The <a class="ag-inline-link" href="/courses/early-math-foundations">Early Maths Foundations course</a> sets out its months and weeks, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our method.',
    note: 'A WhatsApp message reaches us fastest and costs nothing from a UK phone. Replies come from our team in India, from a number starting +91.',
    formNote: 'There is no payment and no form to sign. You get one message back with a suggested time.'
  },

  footer: {
    cols: [
      { h4: 'Early maths', links: [
        { href: '/online-math-tutor-kindergarten', label: 'Kindergarten maths' },
        { href: '/online-math-tutor-1st-grade', label: 'First grade maths' },
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths' },
        { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge' }
      ] },
      { h4: 'About our classes', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Reception maths, gently, in UK time'
  },

  personalityCss: `
.ag-root.ag-ru .ag-hero h1 { letter-spacing: -0.005em; font-weight: 640; max-width: 24ch; }
.ag-root.ag-ru .ag-capsule { border-left-width: 10px; border-radius: 14px; }
.ag-root.ag-ru .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-ru .ag-table caption { text-align: left; font-weight: 600; font-style: italic; }
.ag-root.ag-ru .ag-table td:first-child { font-weight: 660; }
.ag-root.ag-ru .ag-steps li { margin-bottom: 12px; line-height: 1.65; }
`,

  dossier: {
    curriculumAuthority: 'England, DfE EYFS statutory framework for group and school-based providers, in force from September 2026: mathematics educational programme (strong grounding in number; manipulatives including small pebbles and tens frames; have a go, not afraid to make mistakes); ELG Number (deep understanding of numbers to 10 including composition; subitise up to 5; automatic recall of bonds to 5 and some to 10 including doubles) and ELG Numerical Patterns (count beyond 20; compare quantities up to 10; patterns within 10 including odds, evens, doubles and equal distribution); ELGs not a curriculum; holistic best-fit judgement; no recorded evidence required; seven areas of learning; EYFS Profile by 30 June, expected or emerging, shared with parents, copy to Year 1 teacher; compulsory school age footnote. Annex B: Reception Baseline Assessment within six weeks, about 20 minutes, scores not shared, no pass or fail. Early Years Screen Time Advisory Group report, March 2026: two to five year olds no more than an hour a day in chunks of 30 minutes or less, minimal solo use, co-viewing helps.',
    localProject: 'Six sentences and a teacher\'s judgement, not a test. A Reception maths guide for parents in England: the two EYFS maths early learning goals quoted in full with our home illustrations, the framework\'s rules that the goals are not a curriculum and need no written evidence, a side-by-side of the Reception Baseline Assessment and the EYFS Profile, the March 2026 under-fives screen advice and how our short sessions follow it, six original home games mapped one to one onto the goal statements, four original worked moments (composition of 6, subitising 5, double four, sharing nine) with a parent practice set, and an honest account of when a live class helps and when to wait. Lesson family: an early years parent guide.',
    requiredMentions: [
      'Have a deep understanding of numbers to 10, including the composition of each number.',
      'Subitise (recognise quantities without counting) up to 5.',
      'Verbally count beyond 20, recognising the pattern of the counting system.',
      'Recorded, written or photographic evidence is not required.',
      'There is no expected standard and children cannot pass or fail.',
      'Year 1 teachers must be given a copy of the Profile report',
      'using manipulatives, including small pebbles and tens frames for organising counting',
      'Hide and Seek Five',
      'Ten-Frame Breakfast'
    ],
    sources: [
      { claim: 'DfE, EYFS statutory framework for group and school-based providers, from September 2026: maths programme, ELGs, Profile rules and Annex B on the Reception Baseline Assessment.', url: 'https://assets.publishing.service.gov.uk/media/6a5f8e4fb00f3323bf1a23a1/EYFS_group_and_school_based_from_September_2026.pdf' },
      { claim: 'DfE, Early years foundation stage (EYFS) statutory framework publication page: the two current frameworks.', url: 'https://www.gov.uk/government/publications/early-years-foundation-stage-framework--2' },
      { claim: 'Early Years Screen Time Advisory Group, Screen use by children aged under five, March 2026: recommended messages to parents of two to five year olds.', url: 'https://www.gov.uk/government/publications/screen-use-by-children-aged-under-5' },
      { claim: 'Modern Age Coders, Early Maths Foundations course: stated ages 4 to 7.', url: 'https://learn.modernagecoders.com/courses/early-math-foundations' }
    ],
    rejectedClaims: [
      'National EYFS Profile results, such as the share of children meeting the maths goals: not read at a primary source for this build, so not stated.',
      'Any claim that online classes improve Profile outcomes: no evidence read, and declined.',
      'Health effects of screen use: the report discusses them, but this page quotes only its time and co-viewing messages and makes no health claims of its own.',
      'Reproducing Reception Baseline Assessment materials: the framework says they must stay secure, so none are described beyond structure.'
    ]
  }
};
