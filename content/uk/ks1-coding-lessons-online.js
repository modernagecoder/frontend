'use strict';
// KS1 coding lessons online (ag- guide door, England; UK and US exams cluster Phase 2, row UK004).
// Sources, read raw on 31 October 2026 with curl (gov.uk content API and assets PDFs, text via the scratchpad pdftext
// helper; ScratchJr pages); raw copies in keyword-research-2026-09/uk-us-gap/src/ks1-coding-lessons-online/:
//  - DfE, Computing programmes of study: key stages 1 and 2 (PRIMARY_national_curriculum_-_Computing.pdf, published
//    September 2013, reference DFE-00171-2013). Key stage 1, pupils should be taught to: "understand what algorithms are;
//    how they are implemented as programs on digital devices; and that programs execute by following precise and
//    unambiguous instructions"; "create and debug simple programs"; "use logical reasoning to predict the behaviour of
//    simple programs"; "use technology purposefully to create, organise, store, manipulate and retrieve digital
//    content"; "recognise common uses of information technology beyond school"; "use technology safely and
//    respectfully, keeping personal information private; identify where to go for help and support when they have
//    concerns about content or contact on the internet or other online technologies." Purpose: "A high-quality
//    computing education equips pupils to use computational thinking and creativity to understand and change the
//    world." Aims include "abstraction, logic, algorithms and data representation".
//  - DfE, Curriculum and Assessment Review Final Report (November 2025): "Computing is a statutory foundation subject
//    from Key Stages 1 to 4." Government response (November 2025): "Through the reformed curriculum, pupils will know
//    from a young age how computers can be trained using data and they will learn essential digital skills such as AI
//    literacy."; "publish a revised national curriculum in 2027 for first teaching in 2028"; "fully implement the new
//    full national curriculum for first teaching from September 2028"; "aim to publish the final revised national
//    curriculum by spring 2027".
//  - Ofsted, Research review series: computing (16 May 2022): "Computing is not part of the latest statutory framework
//    for the early years foundation stage, but is part of the national curriculum from Year 1."; "Several studies have
//    demonstrated that young pupils are able to wrestle successfully with the core concepts of computing";
//    "Unplugged activities can be useful in introducing computing concepts to pupils at the early stages of their
//    computing education."; teachers "should pay careful attention to how the activity will contribute to achieving
//    curriculum goals"; "unplugged activities to teach pupils about algorithms can be ambiguous"; "It is common for
//    block-based languages such as Scratch to be used in primary schools"; block-based languages "reduce the need to
//    memorise syntax" but "do not necessarily help pupils with the semantic and conceptual difficulties".
//  - ScratchJr (scratchjr.org, meta description): "With ScratchJr, young children (ages 5-7) can program their own
//    interactive stories and games." (restated as ages 5 to 7).
//  - DfE, Mathematics programmes of study, Year 2 geometry notes: giving instructions with quarter, half and
//    three-quarter turns in right angles, including to robots (paraphrased; the KS1 maths page quotes it).
//  - Modern Age Coders course pages: kids-coding-blocks-masterclass "Complete beginner, ages 6 to 12";
//    scratch-programming-complete-course "ages 6 to 12".
// Our own: the five worked examples (sandwich-free algorithm, grid robot bug, predict-then-run, the hidden repeat, the
// private-or-fine sort), the practice set, the home activities table and the ladder. Spine: KS1 computing asks for
// precise instructions, debugging and prediction, which children learn as much off the screen as on it; blocks are a
// tool, not the goal. Lesson family: a primary key stage computing door, distinct from the KS2 coding page.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'KEY STAGE 1', blurb: 'Six statutory sentences for Years 1 and 2: precise instructions, debugging and prediction. Much of it learned away from a screen.' },
  slug: 'ks1-coding-lessons-online',
  code: 'kcl',
  accent: '#0E4F64',
  accentRationale: 'KS1 coding: a deep harbour teal (#0E4F64, 8.54:1 on #FBF8F2 and 7.34:1 on the deepest paper tint), bright enough for six year olds, well apart from the KS2 coding brown',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'KS1 coding lessons online',
  title: 'KS1 Coding Lessons Online | The Year 1 and 2 Computing Curriculum',
  description: 'KS1 computing explained for parents: algorithms, debugging and prediction in Years 1 and 2, activities with and without screens, and live coding from age 6.',
  ogDescription: 'The KS1 computing curriculum is six sentences. Children should know an algorithm is a set of precise instructions, and debug and predict simple programs.',
  twitterDescription: 'What Years 1 and 2 learn in computing, why unplugged activities help, what changes in 2028, and live block-coding lessons from age 6.',
  pageName: 'KS1 Coding Lessons Online',
  webPageDescription: 'A guide for parents in England to the key stage 1 computing programme of study, with original activities and live online block-coding lessons for children aged 6 and 7.',
  courseDescription: 'Live online block coding for six and seven year olds: sequences of precise instructions, debugging, predicting what a program will do, and keeping personal information private.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'KS1 coding lessons',
  navLinks: [
    { href: '#curriculum', label: 'The six sentences' },
    { href: '#unplugged', label: 'Off the screen' },
    { href: '#blocks', label: 'Blocks and apps' },
    { href: '#examples', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Key Stage 1 computing &middot; Years 1 and 2',
  h1: 'KS1 coding lessons online, and what the computing curriculum asks',
  lede: 'Computing has been a national curriculum subject from Year 1 since 2014, and the whole of the Key Stage 1 programme fits in six sentences. A child of six or seven should learn what an algorithm is, write and fix simple programs, predict what a program will do before running it, use technology to make things, notice computers in the world around them, and keep personal information private. None of that needs an expensive kit, and a good deal of it is best learned with a pencil, a floor and a patient adult. This page explains each sentence in plain words, what Ofsted\'s research review says about unplugged activities and block coding, what is changing in 2028, and how our live lessons teach six and seven year olds.',
  secondaryCta: { href: '#curriculum', label: 'The six sentences' },
  wa: 'Hello Modern Age Coders, I would like a free first coding class for my child in Year 1 or Year 2.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; From the national curriculum, Ofsted\'s research review and the 2025 Review',
  spec: [
    ['Stage', 'Key Stage 1, Years 1 and 2'],
    ['Status', 'Statutory foundation subject'],
    ['Core ideas', 'Algorithms, debugging, prediction'],
    ['Also covers', 'Making content, online safety'],
    ['New curriculum', 'First teaching September 2028'],
    ['Our lessons', 'From age 6, block coding'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'KS1 computing is the Key Stage 1 programme of the national curriculum in England, taught in Years 1 and 2. Children learn that algorithms are precise and unambiguous instructions, create and debug simple programs, use logical reasoning to predict what a program will do, make digital content, and use technology safely. Computing is statutory from Key Stage 1, and a revised curriculum starts in September 2028. Modern Age Coders teaches live block-coding lessons online from age 6, in a group of 15 to 20 or 1-on-1, through Coding for Kids. The first class is free.',

  picks: {
    eyebrow: 'Courses for ages 6 and 7',
    h2: 'Three courses for a Key Stage 1 child',
    lede: 'Coding for Kids is the main course. Scratch is a shorter way in, and the reasoning course suits a child who loves puzzles more than screens.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'KC / 01', title: 'Coding for Kids', note: 'For complete beginners aged 6 to 12, grouped by age, starting with first steps in Scratch.' },
      { course: 'scratch-programming-complete-course', code: 'KC / 02', title: 'Scratch Coding for Kids', note: 'Three months from zero to small games, for ages 6 to 12.' },
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'KC / 03', title: 'Reasoning and Readiness', note: 'Patterns, sequences and spatial puzzles for ages 6 to 9, much of it off the screen.' }
    ]
  },

  sections: [
    {
      id: 'curriculum', tint: 'tint', eyebrow: 'The six sentences',
      h2: 'What is taught in KS1 computing?',
      lede: 'The statutory programme for Key Stage 1 is six statements. Three are about programming, three are about using technology well. Here is each one with what it looks like for a six year old.',
      body: [
        { kind: 'table', caption: 'The Key Stage 1 computing programme of study, with our plain-English reading', head: ['Statement (DfE, statutory)', 'In plain words (ours)', 'A six year old might'], rows: [
          ['Understand what algorithms are; how they are implemented as programs on digital devices; and that programs execute by following precise and unambiguous instructions', 'An algorithm is a set of steps. A program is those steps written for a computer, which does exactly what it is told and nothing else', 'Give a friend step-by-step directions across the playground, then type the same steps for an on-screen character'],
          ['Create and debug simple programs', 'Make a short program, then find and fix what goes wrong', 'Build a three-block program, see the character walk off the edge, and change one number'],
          ['Use logical reasoning to predict the behaviour of simple programs', 'Say what will happen before pressing go', 'Point to where the character will stop, then run it to check'],
          ['Use technology purposefully to create, organise, store, manipulate and retrieve digital content', 'Make something on a device, save it, find it again and change it', 'Draw a picture, save it with a name, reopen it next lesson and add to it'],
          ['Recognise common uses of information technology beyond school', 'Notice computers in everyday life', 'Spot the computer in a self-service till, a traffic light or a washing machine'],
          ['Use technology safely and respectfully, keeping personal information private; know where to go for help', 'Keep your name, school and address to yourself online, and tell an adult if something worries you', 'Sort a set of cards into "fine to share" and "keep private"']
        ] },
        { kind: 'p', html: 'The national curriculum frames all of this with an ambitious purpose: "A high-quality computing education equips pupils to use computational thinking and creativity to understand and change the world." Its aims for the whole of school name the big ideas, "abstraction, logic, algorithms and data representation". In Key Stage 1 those ideas arrive in their simplest form: instructions that must be precise, and the habit of checking whether a program did what you meant.' },
        { kind: 'two', mt: true,
          leftH3: 'Is it compulsory?',
          left: [
            'The 2025 Curriculum and Assessment Review puts it simply: "Computing is a statutory foundation subject from Key Stages 1 to 4." Maintained schools must teach the programme in Years 1 and 2.',
            'Ofsted\'s computing review adds the starting point: computing "is not part of the latest statutory framework for the early years foundation stage, but is part of the national curriculum from Year 1."'
          ],
          rightH3: 'Where maths joins in',
          right: [
            'The Year 2 maths programme suggests children practise quarter, half and three-quarter turns by giving each other instructions, and by programming robots with turns in right angles.',
            'So the same lesson can serve two subjects: a child directing a floor robot is doing both geometry and computing.'
          ] },
        { kind: 'source', html: 'Sources: Department for Education, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-computing-programmes-of-study" rel="noopener" target="_blank">Computing programmes of study: key stages 1 and 2</a>, published September 2013; DfE, Curriculum and Assessment Review Final Report, November 2025; Ofsted, Research review series: computing, May 2022. All read on 31 October 2026. The middle and right-hand columns of the table are ours.' }
      ]
    },
    {
      id: 'unplugged', tint: 'deep', eyebrow: 'Off the screen',
      h2: 'Do KS1 children need a screen to learn computing?',
      lede: 'Not for all of it. Ofsted\'s research review says unplugged activities can help at the early stages, with one important warning about how they are chosen.',
      body: [
        { kind: 'p', html: 'Unplugged means teaching computing ideas without a computer. Ofsted\'s 2022 review describes the approach and its value for young children: "Unplugged activities can be useful in introducing computing concepts to pupils at the early stages of their computing education." It is also careful. Teachers "should pay careful attention to how the activity will contribute to achieving curriculum goals", and the review warns that "unplugged activities to teach pupils about algorithms can be ambiguous", which defeats the point, since an algorithm is meant to be exact. A good unplugged game for a six year old is one where a vague instruction visibly fails.' },
        { kind: 'table', mt: true, caption: 'Home activities for Years 1 and 2, each tied to one statutory statement (all ours)', head: ['Activity (ours)', 'You need', 'What happens', 'Statement it practises'], rows: [
          ['Robot Parent', 'One adult, one living room', 'The child gives instructions to walk the adult to the sofa. The adult follows them exactly, so "go over there" gets nowhere.', 'Precise and unambiguous instructions'],
          ['Arrow Trail', 'Paper squares and a toy', 'Lay a path of arrow cards on the floor; the toy follows them square by square. One arrow is wrong: find it.', 'Create and debug'],
          ['Where Will It Land?', 'A grid drawn on paper, a counter', 'Read out three moves; the child points to the finishing square before moving the counter to check.', 'Predict the behaviour of a program'],
          ['Computer Spotting', 'A walk to the shops', 'Count the computers you can see: tills, card readers, lights, doorbells, the car.', 'Uses of IT beyond school'],
          ['Private or Fine?', 'Cards with a pet\'s name, a favourite colour, a home address, a school name', 'Sort them into two piles and talk about why.', 'Keeping personal information private']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the precision matters',
          left: [
            'The curriculum says programs run by "following precise and unambiguous instructions". Children usually find this funny the first time an adult robot walks into a wall because the instruction said "forward" and never said "stop".',
            'That laugh is the lesson. It is the same reason an on-screen character walks off the edge.'
          ],
          rightH3: 'What young children can manage',
          right: [
            'Ofsted notes that "Several studies have demonstrated that young pupils are able to wrestle successfully with the core concepts of computing", including programming.',
            'In our experience six year olds handle short sequences and simple bugs well. Long programs and abstract ideas come later.'
          ] }
      ]
    },
    {
      id: 'blocks', tint: '', eyebrow: 'Blocks and apps',
      h2: 'Should a six year old use ScratchJr, Scratch or something else?',
      lede: 'Block-based tools are the normal choice in primary schools, and Ofsted explains both why they help and where they fall short.',
      body: [
        { kind: 'p', html: 'Ofsted observes that "It is common for block-based languages such as Scratch to be used in primary schools". Blocks snap together, so a child cannot make a typing mistake, and the review agrees they "reduce the need to memorise syntax". It then adds the part parents rarely hear: they "do not necessarily help pupils with the semantic and conceptual difficulties". A child can drag blocks around until something moves without understanding why. That is why we ask children to predict and explain, not just to build.' },
        { kind: 'table', mt: true, caption: 'Common first tools for Key Stage 1, compared (facts from each maker\'s own site; judgements ours)', head: ['Tool', 'What its maker says', 'Good for', 'Watch out for'], rows: [
          ['ScratchJr', '"young children (ages 5 to 7) can program their own interactive stories and games"', 'A free tablet app for Year 1 and Year 2 stories at home', 'Easy to play with randomly; ask what each block will do first'],
          ['Scratch', 'A free block-based language used widely in primary schools', 'Six and seven year olds ready to read short block labels with help', 'More blocks than a beginner needs; a teacher helps choose a few'],
          ['A floor robot or a toy with arrow buttons', 'Varies by maker', 'Directions, turns and debugging in a real room', 'Can become a toy only; tie it to a task with a clear goal'],
          ['Paper and a grid', 'Costs nothing', 'Prediction and precise instructions', 'Needs an adult to play the computer strictly']
        ] },
        { kind: 'p', mt: true, html: 'Our <a class="ag-inline-link" href="/courses/kids-coding-blocks-masterclass">Coding for Kids</a> course uses Scratch from the first lesson, with short sessions and a teacher who keeps the block palette small. ScratchJr is a lovely free tool for the days between lessons, and we often suggest it to families with a tablet. For older primary children, our <a class="ag-inline-link" href="/ks2-coding-lessons-online">KS2 coding page</a> covers variables, selection and repetition, which arrive in Years 3 to 6.' },
        { kind: 'two', mt: true,
          leftH3: 'What is changing in 2028',
          left: [
            'The government\'s response to the Review commits to a revised national curriculum, aiming to publish it "by spring 2027" and to "fully implement the new full national curriculum for first teaching from September 2028".',
            'For computing it says: "Through the reformed curriculum, pupils will know from a young age how computers can be trained using data and they will learn essential digital skills such as AI literacy."'
          ],
          rightH3: 'What it means for a Year 1 child now',
          right: [
            'Today\'s six sentences still apply for this school year and next. The new programme was not yet published when we read the sources in October 2026, so we do not guess its wording.',
            'Precise instructions, debugging and prediction will matter under any version, which is why we teach them first.'
          ] },
        { kind: 'source', html: 'Sources: Ofsted, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/research-review-series-computing" rel="noopener" target="_blank">Research review series: computing</a>, May 2022; ScratchJr, <a class="ag-inline-link" href="https://www.scratchjr.org/" rel="noopener" target="_blank">scratchjr.org</a>; DfE, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report-government-response" rel="noopener" target="_blank">Curriculum and Assessment Review Final Report: government response</a>, November 2025. Read on 31 October 2026. We are not affiliated with ScratchJr, Scratch or any toy maker.' }
      ]
    },
    {
      id: 'examples', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Five Key Stage 1 coding examples, worked through',
      lede: 'Our own examples, in the order we would teach them. Each one names the statutory idea it serves.',
      body: [
        { kind: 'two',
          leftH3: '1. An algorithm for a paper aeroplane? No: for a teddy (algorithms)',
          left: [
            '<strong>Task (ours).</strong> Write the steps to put a teddy in a box: "Pick up teddy. Put teddy in box."',
            '<strong>Test.</strong> An adult follows the steps exactly and holds teddy above the box forever, because "put in" never said "let go".',
            '<strong>Fix.</strong> "Pick up teddy. Move teddy over the box. Let go."',
            '<strong>The idea.</strong> Precise and unambiguous instructions. The program did what it said, not what we meant.'
          ],
          rightH3: '2. The robot that missed the cheese (debugging)',
          right: [
            '<strong>Task (ours).</strong> A mouse starts in the bottom-left square of a 4 by 4 grid, facing up. The cheese is two squares up and one square right.',
            '<strong>Program.</strong> Forward 2. Turn left. Forward 1.',
            '<strong>Bug.</strong> The mouse ends up off the grid on the left. Which step is wrong? The turn: it should be right.',
            '<strong>The idea.</strong> Debugging means finding the one step that differs from the plan, not starting again.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '3. Point first, then press go (prediction)',
          left: [
            '<strong>Task (ours).</strong> A character stands in the middle of the stage. The program: move 10 steps, move 10 steps, turn around, move 10 steps.',
            '<strong>Predict.</strong> Ask: "Where will it stop?" Most children point too far right the first time.',
            '<strong>Reason.</strong> Twenty steps right, then ten steps back: it ends ten steps right of where it started.',
            '<strong>The idea.</strong> "Use logical reasoning to predict the behaviour of simple programs", in the curriculum\'s words. Running it is the check.'
          ],
          rightH3: '4. Spotting the repeat (a peek at Year 3)',
          right: [
            '<strong>Task (ours).</strong> A program draws a square with: forward, turn, forward, turn, forward, turn, forward, turn.',
            '<strong>Notice.</strong> "Forward, turn" happens four times.',
            '<strong>Shorter.</strong> Repeat 4 times: forward, turn.',
            '<strong>The idea.</strong> Repetition is a Key Stage 2 statement, but a confident Year 2 child often spots it. We let them, without rushing it.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '5. Fine to share, or keep private? (online safety)',
          left: [
            '<strong>Task (ours).</strong> Sort: your favourite animal, your full name, your school, the colour of your bike, your street.',
            '<strong>Talk.</strong> Favourite animal and bike colour are fine. Full name, school and street help a stranger find you, so they stay private.',
            '<strong>The idea.</strong> "Keeping personal information private", and knowing to tell a trusted adult if something online feels wrong.'
          ],
          rightH3: 'Practice set (ours, with answers)',
          right: [
            '(1) Fix this: "Draw a face" as an algorithm for someone who has never seen one. (2) Forward 3, turn right, forward 1, from the bottom-left facing up: which square? (3) A program says move 5 three times; how far altogether? (4) Name two computers in a kitchen.',
            '<strong>Answers:</strong> (1) many answers, such as "Draw a circle. Draw two dots near the top. Draw a curve below them."; (2) three up and one right; (3) 15 steps; (4) for example a microwave and a fridge with a display.'
          ] }
      ]
    },
    {
      id: 'classes', tint: 'deep', eyebrow: 'Our KS1 lessons',
      h2: 'How do online coding lessons work for a six year old?',
      lede: 'Short, practical and spoken aloud. The child builds on screen, but the teacher keeps asking them to predict and explain.',
      body: [
        { kind: 'ol', items: [
          '<strong>A free first class.</strong> A few minutes of a direction game, then a first program of two or three blocks. The teacher sees how the child reads, clicks and reasons.',
          '<strong>Unplugged warm-up.</strong> Each lesson starts away from the mouse: a grid on paper, arrow cards, or a "robot parent" instruction.',
          '<strong>Predict, run, fix.</strong> The child says what will happen, runs the program, and fixes it if it surprises them. The teacher never fixes it for them.',
          '<strong>A small palette.</strong> Only the blocks the lesson needs are introduced, so the screen does not overwhelm a six year old.',
          '<strong>Something to keep.</strong> A short saved project, shown to a parent at the end, and one unplugged game for the week.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Group or 1-on-1 at six?',
          left: [
            'A group of 15 to 20 children of a similar age suits a child who reads simple words and enjoys showing their work.',
            '1-on-1 suits a child who is just turning six, who needs help with the mouse, or who wants to go further faster.'
          ],
          rightH3: 'What we will not do',
          right: [
            'Leave a six year old alone with a screen for long. We ask for an adult in the house, nearby, during lessons.',
            'Use tools meant for older users, such as general AI chatbots, with Key Stage 1 children, or claim any link with a school or the Department for Education.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four steps through Key Stage 1 computing',
    lede: 'Each step is something a child can show you, not a level on a chart.',
    table: { caption: 'What a Key Stage 1 child should be able to do in computing (our steps, from the programme of study)', head: ['Step', 'Usually by', 'What it looks like'], rows: [
      ['1. Exact instructions', 'Early Year 1', 'Gives three clear steps to move a person or toy to a target'],
      ['2. Short programs', 'Late Year 1', 'Builds a sequence of four or five blocks that does one job'],
      ['3. Finding the bug', 'Year 2', 'Spots which single step is wrong and changes only that one'],
      ['4. Predicting', 'End of Year 2', 'Says where a character will stop before running the program, and explains why']
    ] },
    left: { h3: 'Step three is the big one', ps: [
      'A child who fixes one step instead of starting over has understood that programs are made of parts.',
      'For the road beyond Year 2, the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> shows each stage.'
    ] },
    right: { h3: 'Step four leads to Key Stage 2', ps: [
      'Prediction is the root of reasoning about variables and selection later.',
      'Lessons can pause during school holidays.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for children from six',
    lede: 'Coding first, then thinking skills and the maths that sits beside early computing.',
    bands: [
      { num: 'I', h3: 'First coding', sub: 'Ages 6 and up', courses: [
        { code: 'UK / KC1 / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Scratch to games and apps, grouped by age.' },
        { code: 'UK / KC1 / 02', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Three months to a first small game.' },
        { code: 'UK / KC1 / 03', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'Simple apps from blocks, a step after Scratch.' }
      ] },
      { num: 'II', h3: 'Thinking skills', sub: 'Puzzles and patterns', courses: [
        { code: 'UK / KC2 / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and Readiness', blurb: 'Pattern and spatial reasoning for ages 6 to 9.' },
        { code: 'UK / KC2 / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Breaking problems into steps, from age 7.' },
        { code: 'UK / KC2 / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'For a slightly older child, from age 7.' }
      ] },
      { num: 'III', h3: 'Maths alongside', sub: 'Years 1 and 2', courses: [
        { code: 'UK / KC3 / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary Maths', blurb: 'Turns, directions and number, with objects first.' },
        { code: 'UK / KC3 / 02', slug: 'mental-maths-mastery-kids', title: 'Mental Maths', blurb: 'Quick number sense for ages 5 to 10.' },
        { code: 'UK / KC3 / 03', slug: 'early-math-foundations', title: 'Early Maths Foundations', blurb: 'Counting and patterns for the youngest.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'How KS1 coding lessons run',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Our teachers are in India and every time slot is shown in UK time, with shorter lessons for younger children.',
    slots: [
      { time: 'After school', l: 'A short session once homework is done.' },
      { time: 'Early evening', l: 'Before bath and bedtime.' },
      { time: 'Weekend morning', l: 'For longer, calmer projects.' }
    ],
    cells: [
      { h3: 'Unplugged first', p: 'Every lesson opens with a paper or floor activity before the mouse.' },
      { h3: 'Predict out loud', p: 'Children say what will happen before they press go.' },
      { h3: 'They fix it', p: 'The teacher asks questions; the child finds the bug.' },
      { h3: 'Few blocks', p: 'Only the blocks a lesson needs, so the screen stays simple.' },
      { h3: 'Adult nearby', p: 'Someone at home and reachable, for a child of six or seven.' },
      { h3: 'Group or 1-on-1', p: 'A group of 15 to 20, or a teacher for one child.' }
    ]
  },

  projectsH2: 'Projects our students built in class',
  projectsLede: 'A few games and animations from ordinary lessons, none of them assessed. <a class="ag-inline-link" href="/student-labs">Student labs</a> keeps the rest.',
  reviewsLede: 'Parents\' reviews from Google, copied as written.',

  fees: {
    h2: 'Fees for KS1 coding lessons',
    lede: 'Your child\'s first lesson is free. Then there is one monthly fee, with a group place costing less than 1-on-1; billing starts only once the course and a weekly slot are agreed, and you can stop at any time.',
    free: ['A first lesson with a real program', 'A view of reading, clicking and reasoning', 'Booked with a phone number'],
    group: ['15 to 20 children of a similar age', 'One teacher across the course', 'An unplugged game each week', 'A saved project to show at home'],
    one: ['A teacher for your child alone', 'Paced for a child just turning six', 'Room to move faster if ready']
  },

  faq: {
    eyebrow: 'KS1 computing questions',
    h2: 'What parents ask about coding in Years 1 and 2',
    items: [
      { q: 'What is taught in KS1 computing?', a: 'Six statutory statements: what algorithms are and that programs follow precise instructions, creating and debugging simple programs, predicting what a program will do, making and saving digital content, noticing technology beyond school, and staying safe online.' },
      { q: 'What is an algorithm, for a KS1 child?', a: 'A set of steps to do a job, written so exactly that someone, or a computer, could follow them without guessing. Brushing teeth or getting to the classroom door can both be algorithms.' },
      { q: 'Is computing compulsory in Key Stage 1?', a: 'Yes for schools following the national curriculum. The 2025 Curriculum and Assessment Review states that computing is a statutory foundation subject from Key Stages 1 to 4.' },
      { q: 'Is the KS1 computing curriculum changing?', a: 'A revised national curriculum is planned for first teaching from September 2028. The government says pupils will learn from a young age how computers can be trained using data, but the new wording was not yet published when we checked.' },
      { q: 'What are good KS1 computing activities at home?', a: 'Games where a child gives an adult exact instructions, arrow paths on the floor with one deliberate mistake to find, and predicting where a counter will land on a paper grid. They need no screen at all.' },
      { q: 'Is ScratchJr good for a five or six year old?', a: 'Its makers describe it for ages 5 to 7, and it is free. It works well alongside lessons, especially if you ask your child what each block will do before they run it.' },
      { q: 'What age can my child start your coding lessons?', a: 'From age 6, which covers most children in Year 1 and every child in Year 2. Coding for Kids is listed for complete beginners aged 6 to 12, grouped by age.' },
      { q: 'Do I need to buy a robot or a tablet?', a: 'No. A computer or laptop with a browser is enough for our lessons, and the home activities on this page use paper, toys and a floor.' },
      { q: 'When are lessons?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is in UK time.' },
      { q: 'Are you part of my child\'s school or the Department for Education?', a: 'No. Modern Age Coders is an independent online school. We are not connected with schools, Ofsted, the Department for Education, ScratchJr or Scratch.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Primary coding',
    h2: 'More for primary-age coders',
    lede: 'The years that follow, and other ways to start.',
    items: [
      { href: '/ks2-coding-lessons-online', label: 'KS2 coding lessons', p: 'Years 3 to 6: variables, selection and repetition.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes', p: 'Our Scratch page, for children ready to build games.' },
      { href: '/best-online-coding-classes-uk', label: 'Choosing coding classes in the UK', p: 'What to look for when comparing providers.' },
      { href: '/coding-roadmap', label: 'The coding roadmap', p: 'From first blocks to real programming languages.' },
      { href: '/first-competitions-for-primary-school-children-uk', label: 'First competitions for primary children', p: 'Friendly contests for later in primary school.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page we publish.' }
    ]
  },

  start: {
    h2: 'Book a free KS1 coding lesson',
    lede: 'Share a phone number and we will ring at a UK time that fits round school. Your child writes a real two or three block program in the first lesson, and you hear honestly whether regular lessons suit them yet.',
    readFirst: 'Want to look first? The <a class="ag-inline-link" href="/courses/kids-coding-blocks-masterclass">Coding for Kids course</a> lists every month and week, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson.',
    note: 'WhatsApp is the fastest way to reach us and costs nothing from a UK phone. Replies come from our team in India on a +91 number.',
    formNote: 'No card details and no commitment. We reply once with a suggested time.'
  },

  footer: {
    cols: [
      { h4: 'Primary computing', links: [
        { href: '/ks2-coding-lessons-online', label: 'KS2 coding' },
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes' },
        { href: '/coding-roadmap', label: 'Coding roadmap' },
        { href: '/best-online-coding-classes-uk', label: 'Choosing coding classes' }
      ] },
      { h4: 'About us', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'KS1 coding from age 6, in UK time'
  },

  personalityCss: `
.ag-root.ag-kcl .ag-hero h1 { letter-spacing: -0.02em; font-weight: 690; max-width: 23ch; }
.ag-root.ag-kcl .ag-capsule { border-left-width: 7px; border-radius: 8px; }
.ag-root.ag-kcl .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-kcl .ag-table caption { text-align: left; font-weight: 650; }
.ag-root.ag-kcl .ag-table td:first-child { font-weight: 620; width: 34%; }
.ag-root.ag-kcl .ag-steps li { margin-bottom: 9px; line-height: 1.62; }
`,

  dossier: {
    curriculumAuthority: 'England, DfE computing programmes of study, key stage 1 (September 2013): six statutory statements on algorithms as precise and unambiguous instructions, creating and debugging simple programs, logical reasoning to predict behaviour, purposeful use of technology for digital content, uses of IT beyond school, and safe and respectful use with personal information kept private; purpose and aims. Curriculum and Assessment Review Final Report, November 2025: computing a statutory foundation subject from Key Stages 1 to 4. Government response: computers trained using data and AI literacy from a young age; revised national curriculum by spring 2027, first teaching September 2028. Ofsted research review: computing, May 2022: not in EYFS, from Year 1; young pupils can handle core concepts; unplugged activities useful early but must link to curriculum goals and can be ambiguous; block-based languages common in primary, reduce syntax load, do not solve conceptual difficulty. ScratchJr: ages 5 to 7.',
    localProject: 'Precise instructions, debugging and prediction, learned on and off the screen. A KS1 computing door for Years 1 and 2: the six statutory statements with our plain-English reading and an example for a six year old, the statutory status and the start of computing at Year 1, Ofsted\'s evidence on unplugged activities with five original home activities each tied to one statement, Ofsted\'s view of block-based languages and a comparison of first tools, what the government says about the 2028 curriculum, five original worked examples (a teddy algorithm, a grid-robot bug, predict then run, spotting a repeat, private or fine) with a practice set, and how live lessons work for six and seven year olds. Lesson family: a primary key stage computing door.',
    requiredMentions: [
      'Computing is a statutory foundation subject from Key Stages 1 to 4.',
      'Unplugged activities can be useful in introducing computing concepts to pupils at the early stages of their computing education.',
      'unplugged activities to teach pupils about algorithms can be ambiguous',
      'It is common for block-based languages such as Scratch to be used in primary schools',
      'do not necessarily help pupils with the semantic and conceptual difficulties',
      'how computers can be trained using data and they will learn essential digital skills such as AI literacy',
      'fully implement the new full national curriculum for first teaching from September 2028',
      'Robot Parent',
      'The robot that missed the cheese'
    ],
    sources: [
      { claim: 'DfE, Computing programmes of study: key stages 1 and 2: the six key stage 1 statements, purpose and aims.', url: 'https://assets.publishing.service.gov.uk/media/5a7c576be5274a1b00423213/PRIMARY_national_curriculum_-_Computing.pdf' },
      { claim: 'DfE, Curriculum and Assessment Review Final Report, November 2025: computing statutory from Key Stages 1 to 4.', url: 'https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report' },
      { claim: 'DfE, Curriculum and Assessment Review: government response, November 2025: computing reforms and the 2027 and 2028 timetable.', url: 'https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report-government-response' },
      { claim: 'Ofsted, Research review series: computing, May 2022: EYFS and Year 1, unplugged activities, block-based languages.', url: 'https://www.gov.uk/government/publications/research-review-series-computing' },
      { claim: 'ScratchJr: stated ages 5 to 7.', url: 'https://www.scratchjr.org/' }
    ],
    rejectedClaims: [
      'Scratch\'s own recommended age range: the Scratch FAQ page returned little readable text to curl, so no age is attributed to Scratch.',
      'The wording of the 2028 computing programme: not published when read, so not guessed.',
      'Share of academies following the national curriculum: not re-verified for this build, so not stated.',
      'Recommending general AI chatbots or other tools with adult age limits for KS1 children: declined.'
    ]
  }
};
