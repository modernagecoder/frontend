'use strict';
// White Rose Maths help at home (ag- maths door, England; UK and US exams cluster Phase 2, row UK006).
// Sources, read raw on 31 October 2026 with curl (whiteroseeducation.com server-rendered pages, text pulled from each
// page's embedded __NEXT_DATA__ JSON; sitemap.xml); raw copies in keyword-research-2026-09/uk-us-gap/src/white-rose-maths-help-at-home/:
//  - White Rose Education, parent and pupil resources, maths: "Our schemes are written for year groups and cover the
//    whole school year of learning."; "It's likely your child's school already follows the White Rose Maths schemes.
//    To find out, check the school website or ask their teacher."; "A scheme of learning is a clear, time-linked plan
//    for learning."; "Each year is split into three terms (autumn, spring and summer), and each term comprises
//    individual blocks of learning about a particular topic."; "Sometimes schools might be a little behind or ahead of
//    the scheme schedule."; "We've divided each block of knowledge into a series of small learning steps."; "Try not to
//    hurry through the curriculum."; struggling: "Try looking instead at work on the same topics from earlier in the
//    year or previous years."; "Our fantastic teachers have produced home learning videos for every single small step."
//    (we say free home learning videos, as the page states "completely free of charge").
//  - White Rose Education, primary maths resources: "Most primary schools in England now use our free small-step,
//    mastery-based schemes of learning."; "At the heart of our mastery approach is the Concrete Pictorial Abstract
//    (CPA) approach."; mastery "Puts numbers first" and "Puts depth before breadth".
//  - White Rose Education, 1-minute maths: "This first version of the app is aimed at Key Stage 1 pupils"; tasks on
//    adding, subtracting and subitising, with multiplication and division now available; "No login or internet access
//    needed."; "Free to download for teachers, parents and pupils".
//  - White Rose Education, free downloads: "Our FREE workbooks for Years 1 - 6" (restated as Years 1 to 6).
//  - White Rose Education, home learning guidance: home learning defined as "tasks or activities children complete
//    outside of the school day"; three themed maths activity weeks for Years 1 to 6.
//  - whiteroseeducation.com/sitemap.xml: home learning block names for Year 1 (autumn: place value, addition and
//    subtraction, shape, place value within 20; spring: addition and subtraction, place value within 50, length and
//    height, weight and volume; summer: multiplication and division, fractions, position and direction, place value
//    within 100, money, time) and Year 2 (autumn: place value, addition and subtraction, money, multiplication and
//    division; spring: multiplication and division, statistics, shape, fractions; summer: length and height, position
//    and direction, time, mass, capacity and temperature). Block names only; no White Rose materials reproduced.
// Prices, workbook costs and subscription details on those pages deliberately not used. Their word for paid
// resources is not used either.
// Our own: the five-step home routine, the CPA worked examples, the bar model examples, the practice set, the "what
// to say" table and the ladder. Spine: find the block, then go back a step: White Rose is organised by year, term,
// block and small step, so the most useful thing a parent can do is know which block is running and revisit the step
// before it. Lesson family: a named-curriculum help page (we teach alongside the school's scheme), not affiliated.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'WHITE ROSE', blurb: 'Year, term, block, small step. How the scheme most English primaries use is built, and how to help with it at home. Not affiliated.' },
  slug: 'white-rose-maths-help-at-home',
  code: 'wra',
  accent: '#5F4106',
  accentRationale: 'White Rose help: a deep ochre brown (#5F4106, 8.82:1 on #FBF8F2 and 7.59:1 on the deepest paper tint), a neutral, non-brand colour so the page never borrows White Rose\'s own identity',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'White Rose Maths help at home',
  title: 'White Rose Maths Help at Home | Blocks, Small Steps, CPA',
  description: 'White Rose Maths help at home for parents: how the terms, blocks and small steps work, the free videos and app, CPA explained, and live lessons alongside it.',
  ogDescription: 'White Rose Maths splits each year into terms, blocks and small steps. Knowing which block is running, and revisiting the step before, helps most at home.',
  twitterDescription: 'Helping a child with White Rose Maths at home: blocks and small steps, concrete pictorial abstract, the free resources, and teaching that fits alongside.',
  pageName: 'White Rose Maths Help at Home',
  webPageDescription: 'An independent guide for parents whose children are taught with the White Rose Maths schemes, with facts from White Rose Education\'s own site and live lessons that work alongside school.',
  courseDescription: 'Live online primary maths lessons that follow the order a child meets at school: place value, the four operations, fractions, measures, shape and statistics, using concrete, pictorial and abstract steps.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'White Rose Maths help',
  navLinks: [
    { href: '#structure', label: 'How it is built' },
    { href: '#blocks', label: 'Year 1 and 2 blocks' },
    { href: '#cpa', label: 'CPA explained' },
    { href: '#home', label: 'At home' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; White Rose Maths &middot; Primary, Years 1 to 6',
  h1: 'White Rose Maths help at home: a parent\'s guide',
  lede: 'If your child brings home maths with bar models, ten-frames and phrases like "small step", their school very probably follows White Rose Maths. White Rose Education says most primary schools in England use its free schemes of learning. The scheme is tidy once you see its shape: each year group has three terms, each term has blocks on one topic, and each block is a run of small steps. This page explains that structure, lists the Year 1 and Year 2 blocks as White Rose names them, explains the Concrete Pictorial Abstract idea behind the pictures, points to the free resources White Rose itself offers families, and shows how to help with homework without teaching a different method. We are an independent online school, not part of White Rose.',
  secondaryCta: { href: '#structure', label: 'How the scheme is built' },
  wa: 'Hello Modern Age Coders, my child\'s school uses White Rose Maths and I would like a free first class.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Independent: facts from White Rose Education\'s own pages, read October 2026',
  spec: [
    ['Scheme', 'White Rose Maths, by White Rose Education'],
    ['Organised by', 'Year, term, block, small step'],
    ['Method', 'Concrete, pictorial, abstract'],
    ['Free for families', 'Home learning videos, app, workbooks'],
    ['Our role', 'Live lessons alongside school'],
    ['Affiliation', 'None'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'White Rose Maths is a set of year-by-year schemes of learning from White Rose Education, used in many primary schools in England. Each year has three terms, each term is split into topic blocks, and each block into small steps, taught with the Concrete Pictorial Abstract approach. Families can use its free home learning videos, the free 1-minute maths app and free workbooks. Modern Age Coders teaches primary maths live online, in a group of 15 to 20 or 1-on-1, through Elementary Maths, following the order a child meets at school. We are not affiliated with White Rose.',

  picks: {
    eyebrow: 'Courses that sit alongside',
    h2: 'Three courses for a child taught with White Rose',
    lede: 'Elementary Maths follows the same order of topics most English primaries use. The other two strengthen the number work every White Rose year starts with.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'WR / 01', title: 'Elementary Maths', note: 'Grades 1 to 5, placed by year: place value, the four operations, fractions, measures, shape and data, with objects and pictures before symbols.' },
      { course: 'mental-maths-mastery-kids', code: 'WR / 02', title: 'Mental Maths for Kids', note: 'Bonds, doubles and times tables built on number sense, for ages 5 to 10.' },
      { course: 'ks2-sats-maths-course', code: 'WR / 03', title: 'KS2 SATs Maths', note: 'For Year 6, where every block of earlier years comes together for the statutory tests.' }
    ]
  },

  sections: [
    {
      id: 'structure', tint: 'tint', eyebrow: 'How it is built',
      h2: 'What is White Rose Maths and how is it organised?',
      lede: 'A scheme of learning for each year group, from Reception to Year 11. In White Rose\'s own definition, "A scheme of learning is a clear, time-linked plan for learning."',
      body: [
        { kind: 'p', html: 'White Rose\'s guidance for parents explains the layout in a few lines. "Our schemes are written for year groups and cover the whole school year of learning." Within each year, "Each year is split into three terms (autumn, spring and summer), and each term comprises individual blocks of learning about a particular topic." Each block is then broken down further: "We\'ve divided each block of knowledge into a series of small learning steps." Put together, the four levels look like this.' },
        { kind: 'table', mt: true, caption: 'The four levels of a White Rose scheme (from White Rose Education\'s parent guidance; example ours)', head: ['Level', 'What it is', 'An example a Year 2 parent might see'], rows: [
          ['Year group', 'The scheme for one school year', 'Year 2'],
          ['Term', 'Autumn, spring or summer', 'Spring term'],
          ['Block', 'Several weeks on one topic', 'Fractions'],
          ['Small step', 'One lesson-sized idea within the block', 'Finding a quarter of a shape, before finding a quarter of a number']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Does my child\'s school use it?',
          left: [
            'White Rose\'s own advice is the simplest: "It\'s likely your child\'s school already follows the White Rose Maths schemes. To find out, check the school website or ask their teacher."',
            'Many school websites publish a maths curriculum overview, and the block names below are a quick giveaway.'
          ],
          rightH3: 'If the class is ahead or behind',
          right: [
            'That is normal. White Rose writes: "Sometimes schools might be a little behind or ahead of the scheme schedule." The order matters more than the exact week.',
            'So ask which block the class is on now, not which week of term it is.'
          ] },
        { kind: 'p', mt: true, html: 'White Rose\'s primary resources page describes its mastery approach as one that "Puts numbers first" and "Puts depth before breadth". In practice that means long blocks on place value and calculation at the start of each year, and the same ideas returning in later years at a deeper level. Its parent guidance makes the same point: lots of time is spent on number in Key Stage 1, Key Stage 2 and early secondary.' },
        { kind: 'source', html: 'Source: White Rose Education, <a class="ag-inline-link" href="https://whiteroseeducation.com/parent-pupil-resources/maths" rel="noopener" target="_blank">parent and pupil resources, maths</a>, and <a class="ag-inline-link" href="https://whiteroseeducation.com/resources/maths/primary" rel="noopener" target="_blank">primary maths resources</a>, read on 31 October 2026. White Rose Maths is a trademark of White Rose Education; we are not affiliated and quote its public pages only.' }
      ]
    },
    {
      id: 'blocks', tint: 'deep', eyebrow: 'Year 1 and 2 blocks',
      h2: 'What blocks are in White Rose Year 1 and Year 2?',
      lede: 'These are the block names on White Rose\'s home learning pages for Years 1 and 2 as listed in October 2026. Schools may run them a little earlier or later.',
      body: [
        { kind: 'table', caption: 'Year 1 home learning blocks (block names from whiteroseeducation.com, October 2026)', head: ['Term', 'Blocks, in order'], rows: [
          ['Autumn', 'Place value; addition and subtraction; shape; place value within 20'],
          ['Spring', 'Addition and subtraction; place value within 50; length and height; weight and volume'],
          ['Summer', 'Multiplication and division; fractions; position and direction; place value within 100; money; time']
        ] },
        { kind: 'table', mt: true, caption: 'Year 2 home learning blocks (block names from whiteroseeducation.com, October 2026)', head: ['Term', 'Blocks, in order'], rows: [
          ['Autumn', 'Place value; addition and subtraction; money; multiplication and division'],
          ['Spring', 'Multiplication and division; statistics; shape; fractions'],
          ['Summer', 'Length and height; position and direction; time; mass, capacity and temperature']
        ] },
        { kind: 'p', mt: true, html: 'Two patterns stand out, and both help at home. First, place value comes back again and again: four times in Year 1 alone, each time with bigger numbers, ending at within 100. If tens and ones still feel shaky, nearly every other block will feel harder. Second, the most demanding topics, such as fractions and multiplication, come after the number blocks, so they build on secure counting and adding. A child who struggles in the summer term is often missing something from the autumn.' },
        { kind: 'two', mt: true,
          leftH3: 'Older year groups',
          left: [
            'White Rose publishes schemes and home learning for Years 3 to 6, and secondary schemes for Years 7 to 11. The same term, block and small step structure runs through all of them.',
            'Its site says free workbooks are available for Years 1 to 6, covering topics such as addition and subtraction within 10 and within 20, and multiplication and division.'
          ],
          rightH3: 'Reception too',
          right: [
            'There is a Reception scheme with its own named blocks, and White Rose says it covers the EYFS statutory framework.',
            'For the Reception year in general, our <a class="ag-inline-link" href="/online-math-tutor-kindergarten">kindergarten maths page</a> covers the same age in the US system.'
          ] }
      ]
    },
    {
      id: 'cpa', tint: '', eyebrow: 'CPA explained',
      h2: 'What is the Concrete Pictorial Abstract approach?',
      lede: 'It is the order in which a new idea is met: real objects first, then a drawing, then numbers and symbols. White Rose calls it the heart of its mastery approach.',
      body: [
        { kind: 'p', html: 'White Rose\'s primary page puts it plainly: "At the heart of our mastery approach is the Concrete Pictorial Abstract (CPA) approach." The idea is that a child who has handled counters and seen a picture of the same problem understands the written sum better than a child who met the symbols first. When homework shows a bar model or a ten-frame, it is the pictorial step, and it is worth taking seriously rather than skipping to the answer.' },
        { kind: 'two', mt: true,
          leftH3: 'Example 1 (ours): 4 groups of 3',
          left: [
            '<strong>Concrete.</strong> Put 3 pasta pieces on each of 4 plates. Count them all: 12.',
            '<strong>Pictorial.</strong> Draw 4 circles with 3 dots in each, or a row of 4 boxes with 3 in each.',
            '<strong>Abstract.</strong> Write 3 + 3 + 3 + 3 = 12, then 4 × 3 = 12.',
            '<strong>The point.</strong> The child sees that 4 × 3 means four equal groups of three, not just a fact to chant.'
          ],
          rightH3: 'Example 2 (ours): a bar model for a missing part',
          right: [
            '<strong>Problem.</strong> There are 15 children. 9 are in the hall. How many are in the classroom?',
            '<strong>Pictorial.</strong> Draw a long bar labelled 15. Split it into a part labelled 9 and a part with a question mark.',
            '<strong>Abstract.</strong> 15 &minus; 9 = 6, or 9 + &#9633; = 15.',
            '<strong>The point.</strong> The bar shows that adding and subtracting are two views of the same whole and parts, so a child can choose either sum.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Example 3 (ours): a number line for 52 &minus; 7',
          left: [
            '<strong>Pictorial.</strong> Draw a line from 45 to 52. Jump back 2 from 52 to 50, then 5 more to 45.',
            '<strong>Abstract.</strong> 52 &minus; 2 &minus; 5 = 45.',
            '<strong>The point.</strong> Bridging through a tens number is the same small step whether a child meets it in Year 2 or Year 3.'
          ],
          rightH3: 'Example 4 (ours): a quarter with paper strips',
          right: [
            '<strong>Concrete.</strong> Fold a paper strip in half, then in half again. Four equal parts.',
            '<strong>Pictorial.</strong> Draw the strip with four parts and shade one.',
            '<strong>Abstract.</strong> Write one quarter, and later that one quarter of 20 is 5, by sharing 20 into the four parts.',
            '<strong>The point.</strong> "Equal parts" is the idea that matters, and folding makes it impossible to miss.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set (ours, with answers).</strong> (1) Draw a bar model for 7 + 8 = 15 and use it to write a subtraction. (2) Use a number line to find 61 &minus; 4. (3) Draw 3 groups of 5 and write the multiplication. (4) Fold or draw to show half of 14. (5) A bar of 20 is split into 4 equal parts; what is each part? <strong>Answers:</strong> (1) 15 &minus; 8 = 7, or 15 &minus; 7 = 8; (2) 57, jumping back 1 to 60 then 3 to 57; (3) 3 × 5 = 15; (4) 7; (5) 5.' }
      ]
    },
    {
      id: 'home', tint: 'tint', eyebrow: 'At home',
      h2: 'How can I help my child with White Rose Maths at home?',
      lede: 'Find the block, then go back a step. White Rose\'s own tips point the same way, and they are free to follow.',
      body: [
        { kind: 'ol', items: [
          '<strong>Ask which block the class is on.</strong> A quick message to the teacher, or the school\'s curriculum page, tells you the topic for the next few weeks.',
          '<strong>Watch the small step first yourself.</strong> White Rose says its teachers have made home learning videos "for every single small step", and that they are free. Two minutes of the video shows you the picture and words your child is using.',
          '<strong>If your child is stuck, go back.</strong> White Rose advises: "Try looking instead at work on the same topics from earlier in the year or previous years." Revisit the step before, not the one after.',
          '<strong>Keep it concrete.</strong> Use coins, pasta or paper strips before a worksheet. That is the concrete stage of CPA, and kitchen objects work as well as classroom kit.',
          '<strong>Do not race ahead.</strong> In White Rose\'s words, "Try not to hurry through the curriculum." Depth is the point; a child who understands this step well is ready for the next one.'
        ] },
        { kind: 'table', mt: true, caption: 'Free resources White Rose Education lists for families (from its site, October 2026)', head: ['Resource', 'What White Rose says it is', 'How we would use it'], rows: [
          ['Home learning videos', 'Videos for every small step, free on its home learning pages', 'Watch the current step together, then try one example with objects'],
          ['1-minute maths app', 'Free, aimed at Key Stage 1, on adding, subtracting and subitising, with times and divide added; "No login or internet access needed."', 'A daily one-minute warm-up, not a whole session'],
          ['Free workbooks', 'Workbooks for Years 1 to 6 for parents and children to use together', 'One page at a time, with talk'],
          ['Themed activity weeks', 'Three themed weeks for Years 1 to 6, each with five presentations and videos', 'Holiday maths that does not feel like homework']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What to say when it goes wrong',
          left: [
            'Swap "That\'s wrong" for "Show me how you got that." The method usually tells you which small step slipped.',
            'Ask "Can you draw it?" A child who can draw the problem as a bar or a set of groups is halfway to solving it.'
          ],
          rightH3: 'What not to do',
          right: [
            'Teach a different written method from the one the school uses. If you learned another way, ask the teacher how the class does it first.',
            'Buy materials that copy the scheme. The real schemes and many resources are free on White Rose\'s site.'
          ] },
        { kind: 'source', html: 'Source: White Rose Education, <a class="ag-inline-link" href="https://whiteroseeducation.com/parent-pupil-resources/maths/home-learning-guidance" rel="noopener" target="_blank">home learning guidance</a>, <a class="ag-inline-link" href="https://whiteroseeducation.com/1-minute-maths" rel="noopener" target="_blank">1-minute maths</a> and free downloads pages, read on 31 October 2026. The right-hand column is our suggestion, not White Rose\'s.' }
      ]
    },
    {
      id: 'classes', tint: '', eyebrow: 'Our lessons',
      h2: 'Do you teach White Rose Maths?',
      lede: 'We do not use or sell White Rose materials, and we are not connected with White Rose Education. We teach the same national curriculum content in a compatible order, with the same concrete, then pictorial, then abstract habit.',
      body: [
        { kind: 'p', html: 'Most families come to us for one of three reasons: a child who has fallen behind on one block and is now lost in the next, a child who finds class maths easy and wants more depth, or a parent who simply wants a regular, patient hour of maths each week. In each case the starting point is the same. We find which step in the chain is missing, teach it with objects and pictures, and then join the class\'s current block again. Because the national curriculum sets the content and White Rose follows it, our lessons line up naturally with what a child meets at school.' },
        { kind: 'ol', items: [
          '<strong>Free first class.</strong> A friendly check of place value, adding and the current school block, so the teacher knows where to begin.',
          '<strong>Tell us the block.</strong> Parents share the school\'s current topic, and the teacher plans around it.',
          '<strong>Back a step if needed.</strong> Gaps from earlier blocks are closed first, as White Rose itself recommends.',
          '<strong>Same pictures.</strong> Bar models, ten-frames and number lines, so school and home look alike.',
          '<strong>A short update.</strong> After each block, a note on what is secure and what to watch.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Group or 1-on-1?',
          left: [
            'A group of 15 to 20 suits a child who is roughly in line with the class and enjoys company.',
            '1-on-1 suits a child with a particular gap, or one working well ahead of the class.'
          ],
          rightH3: 'What we will not claim',
          right: [
            'Any partnership, endorsement or licence from White Rose Education. The name and schemes are theirs.',
            'That our lessons are better than the school\'s scheme, or that they guarantee a test result.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four checks that unlock most blocks',
    lede: 'The ideas that later blocks quietly depend on, with a quick way to test each at home.',
    table: { caption: 'What later White Rose blocks assume (our checklist, from the national curriculum)', head: ['Check', 'Try at home', 'Ready when'], rows: [
      ['1. Place value', 'Show 46 with tens and ones', 'They use 4 tens and 6 ones without counting each'],
      ['2. Part and whole', 'Draw a bar model for 12 = 7 + 5', 'They can write all four related facts'],
      ['3. Equal groups', 'Make 3 groups of 4 with objects', 'They say "three fours" and write 3 × 4'],
      ['4. Equal parts', 'Fold a strip into quarters', 'They explain why the parts must be the same size']
    ] },
    left: { h3: 'Check one comes back every year', ps: [
      'Place value opens every White Rose year, so a gap here shows up everywhere.',
      'For older primary children, see <a class="ag-inline-link" href="/ks2-maths-tuition-online">KS2 maths tuition</a>.'
    ] },
    right: { h3: 'Check four is the fractions door', ps: [
      'Every fractions block starts with equal parts.',
      'Lessons can pause over school holidays.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for primary families',
    lede: 'Core maths in school order, number fluency, and a few making courses.',
    bands: [
      { num: 'I', h3: 'Core primary maths', sub: 'Years 1 to 6', courses: [
        { code: 'UK / WR1 / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary Maths', blurb: 'Primary topics in the order schools teach them.' },
        { code: 'UK / WR1 / 02', slug: 'early-math-foundations', title: 'Early Maths Foundations', blurb: 'Counting and parts of numbers for a child who needs a firmer base.' },
        { code: 'UK / WR1 / 03', slug: 'ks2-sats-maths-course', title: 'KS2 SATs Maths', blurb: 'Year 6, bringing every block together.' }
      ] },
      { num: 'II', h3: 'Fluency', sub: 'Number facts', courses: [
        { code: 'UK / WR2 / 01', slug: 'mental-maths-mastery-kids', title: 'Mental Maths', blurb: 'Facts that rest on understanding.' },
        { code: 'UK / WR2 / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'Place value made visible.' },
        { code: 'UK / WR2 / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and Readiness', blurb: 'Pattern and spatial reasoning for ages 6 to 9.' }
      ] },
      { num: 'III', h3: 'Making and thinking', sub: 'From age 6', courses: [
        { code: 'UK / WR3 / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Block coding, with plenty of counting and turns.' },
        { code: 'UK / WR3 / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Logic and word problems, from age 7.' },
        { code: 'UK / WR3 / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'For an upper primary child who wants a stretch.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'How our primary lessons fit around school',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Teachers work from India, and each lesson time is set in UK time to sit around the school day.',
    slots: [
      { time: 'After school', l: 'Straight after the day\'s maths lesson.' },
      { time: 'Early evening', l: 'Around clubs and tea.' },
      { time: 'Weekend morning', l: 'A calm review of the week\'s block.' }
    ],
    cells: [
      { h3: 'Block aware', p: 'We plan around the topic your child\'s class is on now.' },
      { h3: 'CPA order', p: 'Objects, then pictures, then numbers, as at school.' },
      { h3: 'Back a step', p: 'Earlier gaps are closed before new work.' },
      { h3: 'Same pictures', p: 'Bar models and number lines, so methods match.' },
      { h3: 'Free first class', p: 'A gentle check of where your child is, at no cost.' },
      { h3: 'Group or 1-on-1', p: 'A group of 15 to 20, or one child and one teacher.' }
    ]
  },

  projectsH2: 'Things our primary students have made',
  projectsLede: 'A few projects from everyday lessons, none of them marked. <a class="ag-inline-link" href="/student-labs">Student labs</a> has more.',
  reviewsLede: 'Reviews parents left on Google, unchanged.',

  fees: {
    h2: 'Fees for primary maths lessons',
    lede: 'The first class is on us. From then on you pay one monthly fee, less in a group than 1-on-1, and only after you have picked a course and a regular slot. There is no contract to sign.',
    free: ['A friendly first class', 'A view of which steps are missing', 'Booked with a phone number'],
    group: ['15 to 20 children at a similar stage', 'One teacher through the year', 'Lessons that follow the school order', 'A note after each block'],
    one: ['A teacher for one child', 'Planned around your child\'s current block', 'Good for closing one gap fast']
  },

  faq: {
    eyebrow: 'White Rose questions',
    h2: 'What parents ask about White Rose Maths',
    items: [
      { q: 'What is White Rose Maths?', a: 'A set of schemes of learning from White Rose Education, written for each year group and split into terms, topic blocks and small steps. Its site says most primary schools in England use its free schemes.' },
      { q: 'How do I know if my child\'s school uses White Rose?', a: 'Check the school website or ask the class teacher, which is White Rose\'s own suggestion. Block names such as place value within 20 or within 50 are a good clue.' },
      { q: 'What are small steps in White Rose Maths?', a: 'Each block is divided into a series of small learning steps, each about one lesson\'s worth of learning. Together they cover the curriculum content for that block.' },
      { q: 'What does CPA mean?', a: 'Concrete Pictorial Abstract: a child meets an idea with real objects, then a drawing such as a bar model, then numbers and symbols. White Rose calls it the heart of its mastery approach.' },
      { q: 'Are White Rose home learning videos free?', a: 'White Rose says its home learning videos are free and that there is one for every small step. Its 1-minute maths app is also free and needs no login.' },
      { q: 'My child is struggling with a White Rose block. What should I do?', a: 'Go back a step. White Rose advises looking at the same topic from earlier in the year or a previous year, and that matches what we see: most struggles come from a gap in an earlier block.' },
      { q: 'Can you tutor my child in White Rose Maths?', a: 'We teach the same curriculum content in a compatible order, using objects, pictures and numbers, and plan around your child\'s current block. We do not use White Rose materials and are not connected with White Rose Education.' },
      { q: 'Is White Rose Maths the same as the national curriculum?', a: 'No. The national curriculum is the statutory content set by the Department for Education. White Rose is one published scheme that organises that content into a teaching order.' },
      { q: 'When are lessons?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are in UK time.' },
      { q: 'Are you part of White Rose Education?', a: 'No. Modern Age Coders is an independent online school. White Rose Maths and its schemes belong to White Rose Education, and we have no partnership or endorsement.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Primary maths',
    h2: 'More pages for primary families in England',
    lede: 'Key stages, tests and puzzles that sit alongside the school scheme.',
    items: [
      { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition', p: 'Years 3 to 6 in more detail.' },
      { href: '/ks2-sats-maths-papers-explained', label: 'KS2 SATs maths papers', p: 'The Year 6 tests every block builds towards.' },
      { href: '/year-4-multiplication-tables-check-explained', label: 'Year 4 times tables check', p: 'The June check on tables up to 12 × 12.' },
      { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge', p: 'A national puzzle contest, for a child who enjoys a harder problem.' },
      { href: '/ks2-and-11-plus-maths-tutor-cost-uk', label: 'Primary tutor costs', p: 'What families weigh up before choosing help.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Our index of pages for families across the UK.' }
    ]
  },

  start: {
    h2: 'Book a free primary maths class',
    lede: 'Tell us your number and the block your child\'s class is on, and we will call at a UK time that suits. The first class checks the steps underneath that block.',
    readFirst: 'Want to see the syllabus first? The <a class="ag-inline-link" href="/courses/elementary-mathematics-complete-masterclass">Elementary Maths course</a> lists its levels by grade, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our classroom.',
    note: 'WhatsApp reaches us fastest and is free from UK phones. Answers come from our India-based team on a +91 number.',
    formNote: 'No fee and no paperwork to book. A single reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Primary maths', links: [
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths' },
        { href: '/ks2-sats-maths-papers-explained', label: 'KS2 SATs' },
        { href: '/year-4-multiplication-tables-check-explained', label: 'Times tables check' },
        { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge' }
      ] },
      { h4: 'About us', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Help alongside White Rose, independently'
  },

  personalityCss: `
.ag-root.ag-wra .ag-hero h1 { letter-spacing: -0.012em; font-weight: 660; max-width: 24ch; }
.ag-root.ag-wra .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-wra .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-wra .ag-table caption { text-align: left; font-weight: 640; }
.ag-root.ag-wra .ag-table td:first-child { font-weight: 680; width: 18%; }
.ag-root.ag-wra .ag-steps li { margin-bottom: 11px; line-height: 1.64; }
`,

  dossier: {
    curriculumAuthority: 'White Rose Education (whiteroseeducation.com), a private publisher; no affiliation. Parent guidance: schemes written for year groups covering the whole year; school probably follows them, check website or ask teacher; a scheme of learning is a clear, time-linked plan; three terms, each of topic blocks; schools may be behind or ahead; blocks divided into small learning steps; do not hurry; when struggling look at earlier work; home learning videos for every small step, free. Primary page: most primary schools in England use the free small-step, mastery-based schemes; CPA at the heart of the mastery approach; numbers first, depth before breadth. 1-minute maths: aimed at KS1, adding, subtracting, subitising, multiplication and division, no login or internet, free. Free workbooks Years 1 to 6. Sitemap block names for Year 1 and Year 2. National curriculum referenced as the statutory content behind the scheme.',
    localProject: 'Find the block, then go back a step. An independent guide for parents whose children are taught with White Rose Maths: the four levels (year, term, block, small step) in White Rose\'s own words, the Year 1 and Year 2 block names as listed on its site with what their order implies for parents, the Concrete Pictorial Abstract approach with four original worked examples (equal groups, bar model for a missing part, number line bridging ten, quarters by folding) and a practice set, a five-step home routine built on White Rose\'s free tips and videos, a table of the free family resources, what to say and not do, and how our lessons sit alongside a school scheme without using White Rose materials. Lesson family: a named-curriculum help page.',
    requiredMentions: [
      'A scheme of learning is a clear, time-linked plan for learning.',
      'Each year is split into three terms (autumn, spring and summer), and each term comprises individual blocks of learning about a particular topic.',
      'We\'ve divided each block of knowledge into a series of small learning steps.',
      'Sometimes schools might be a little behind or ahead of the scheme schedule.',
      'Try not to hurry through the curriculum.',
      'At the heart of our mastery approach is the Concrete Pictorial Abstract (CPA) approach.',
      'place value within 50',
      'mass, capacity and temperature',
      'Example 2 (ours): a bar model for a missing part'
    ],
    sources: [
      { claim: 'White Rose Education, parent and pupil resources, maths: scheme structure, small steps, home tips, free videos.', url: 'https://whiteroseeducation.com/parent-pupil-resources/maths' },
      { claim: 'White Rose Education, primary maths resources: use in English primaries, CPA, mastery principles.', url: 'https://whiteroseeducation.com/resources/maths/primary' },
      { claim: 'White Rose Education, 1-minute maths: free app aimed at Key Stage 1, no login needed.', url: 'https://whiteroseeducation.com/1-minute-maths' },
      { claim: 'White Rose Education, home learning guidance and free downloads: themed weeks, free workbooks for Years 1 to 6.', url: 'https://whiteroseeducation.com/parent-pupil-resources/maths/home-learning-guidance' },
      { claim: 'White Rose Education sitemap: Year 1 and Year 2 home learning block names.', url: 'https://whiteroseeducation.com/sitemap.xml' }
    ],
    rejectedClaims: [
      'White Rose\'s timeline figure of schemes used by a stated percentage of UK primaries: undated on the page read, so only its current "most primary schools in England" wording is used, attributed.',
      'Prices of workbooks or subscriptions: on White Rose\'s pages but not quoted, by rule.',
      'Any White Rose worksheet, slide, video content or small step wording: not reproduced; only block names and public statements are cited.',
      'Any claim of partnership, endorsement or that our lessons outperform the scheme: declined.'
    ]
  }
};
