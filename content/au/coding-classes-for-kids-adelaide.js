'use strict';
// Coding classes for kids in Adelaide (cg- city page, Australia cluster Phase 6, kids intent only:
// Reception to Year 8 and their parents). Teens and adults belong to ai-and-programming-classes-in-adelaide.
// Spine: two kinds of symmetry tested on coordinates. From one OpenStreetMap Overpass query (snapshot
// 2026-10-07T16:29:30Z) for features named "...Square" in a rectangle we chose over the city centre
// (34.940 to 34.910 degrees south, 138.580 to 138.620 east). Points used, chosen by us: Victoria Square
// (way 1336429555, place=square, centre -34.9286111, 138.5998743); Hindmarsh Square (relation 13040624,
// leisure=park); Hurtle Square (relation 2573738, leisure=park); Whitmore Square (way 679957023,
// leisure=park); Light Square, drawn as two park shapes (ways 189318146 and 194852575), placed at the
// midpoint of their two centres. Positions in metres east and north of Victoria Square, measured by us on
// 7 October 2026 (equirectangular approximation, R = 6,371,008.8 m): Hindmarsh (522.3, 471.9), Hurtle
// (587.1, -403.5), Whitmore (-516.8, -469.1), Light (-600.0, 416.1); distances 703.9, 712.4, 698.0, 730.1 m.
// Mirror across the north-south line: Hindmarsh lands 95.7 m from Light, Hurtle 96.1 m from Whitmore.
// Mirror across the east-west line: 94.2 m and 98.6 m out. Half turn about Victoria Square: Hindmarsh lands
// 6.1 m from Whitmore and Hurtle 18.0 m from Light. Lesson family: reflection versus rotational (half-turn)
// symmetry tested with coordinates; screened free site-wide on 7 October 2026.
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Greater Adelaide (GCCSA 4GADE):
// 1,387,290 people; median age 39; 375,146 families; 1.8 children in families with children; aged 0 to 4
// 74,749 (5.4%); 5 to 9 81,431 (5.9%; Australia 6.2%); 10 to 14 81,359 (5.9%); preschool 22,500. ABS
// Schools methodology 2025: first year called reception in South Australia; school compulsory from six;
// children turning five before 1 May can start in term 1, and by 31 October in term 3 with 6 terms of
// reception. South Australian term-date pages returned 403 and were not used. IANA: Australia/Adelaide.
// Excluded by the cluster rules: income, rent, ancestry, birthplace, language, religion, health, school sector.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'ADELAIDE KIDS', label: 'Kids in Adelaide', blurb: 'Coding for Adelaide children from Reception to Year 8, testing whether the five city squares are a mirror image or a turn.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'coding-classes-for-kids-adelaide',
  code: 'kadl',
  accent: '#964454',
  accentRationale: 'Adelaide kids: a dusty rose chosen by hand (HSV saturation 0.55, value 0.59), at least 10.8 RGB units from every accent in use and 5.2:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Adelaide',
    eyebrow: 'Adelaide, South Australia, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'South Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-south-australia', name: 'South Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Adelaide, for kids',
  title: 'Coding Classes for Kids in Adelaide | Reception to Year 8',
  description: 'Live online coding classes for Adelaide kids from Reception to Year 8: Scratch, games, first Python and AI basics, taught by a real teacher in small groups or alone.',
  ogDescription: 'Coding for Adelaide children, with a project that tests whether the five city squares are a mirror image or a half turn.',
  twitterDescription: 'Coding classes for Adelaide kids, Reception to Year 8, live online. First lesson free.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Adelaide Children',
    description: 'Level-matched block coding, Scratch, maths through coding and first Python for primary and lower secondary children across Greater Adelaide, taught live in English.'
  },

  h1: 'Coding classes for kids in Adelaide',
  capsuleQ: 'What are the best coding classes for kids in Adelaide?',
  capsule: 'Adelaide children from Reception to Year 8 learn most from a real teacher, a small group at the same level and projects that connect code to their own city. Greater Adelaide had 81,431 children aged 5 to 9 at the 2021 Census. We teach live online from age 6, and the first lesson is on us.',
  lead: 'Look at a map of the Adelaide city centre and the five squares seem to sit in a neat pattern around Victoria Square. Is it a mirror image, with the left side copying the right? Children usually say yes. Then they put coordinates on each square, write a few lines of code to flip the map, and find that the mirror is about 95 metres out. Turn the map halfway round instead, and the squares land almost exactly on each other. That surprise, measured rather than guessed, is how our young Adelaide coders meet two kinds of symmetry.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child in Adelaide.',

  picks: {
    eyebrow: 'Course picks for Adelaide kids',
    h2: 'Starting points for an Adelaide child',
    intro: 'Matched to age and to what the child likes making. The first lesson is free and confirms the level.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Blocks that move a character around a grid, which is where turning and flipping first become real.' },
      { course: 'scratch-programming-complete-course', band: 'Ages 7 to 11', note: 'Scratch projects where a sprite stamps shapes, flips them and spins them, so symmetry is something the child makes.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 14', note: 'Coordinates, transformations and patterns, worked out in Python rather than only on paper.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Typed Python with turtle drawings, lists of points and the first real data from Adelaide maps.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Adelaide children in the Census',
      h2: 'Eighty thousand children in each primary-age band',
      intro: 'Figures from the ABS 2021 Census QuickStats for the Greater Adelaide capital city area, printed exactly as published.',
      body: [
        { kind: 'table', caption: 'Greater Adelaide children, ABS Census 2021 QuickStats', head: ['Item', 'Adelaide'], rows: [
          ['Aged 0 to 4', '74,749, or 5.4%'],
          ['Aged 5 to 9', '81,431, or 5.9% (Australia 6.2%)'],
          ['Aged 10 to 14', '81,359, or 5.9%'],
          ['People attending preschool', '22,500'],
          ['Families', '375,146'],
          ['Median age', '39']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A slightly older city', p: 'Greater Adelaide\'s median age was 39 at the Census, older than many capitals, yet each five-year band of school-age children still held about eighty thousand.' },
          { h3: 'Two bands almost level', p: 'Children aged 5 to 9 numbered 81,431 and those aged 10 to 14 numbered 81,359, only 72 apart, so primary and early secondary coders are in very similar supply.' },
          { h3: 'Reception, then Year 1', p: 'South Australia calls the first school year Reception. Most of our Adelaide beginners are six and in Reception or Year 1 when they start.' }
        ] },
        { kind: 'p', text: 'A small lesson about tables. Each age band is adjusted separately for privacy, so the bands are not guaranteed to sum to the published population. We quote the published figures and never manufacture a total of our own.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Are Adelaide\'s squares a mirror image or a half turn?',
      intro: 'Four squares placed around Victoria Square on a grid of metres, then flipped and turned by code to see which transformation really fits.',
      body: [
        { kind: 'table', caption: 'Where each square sits, in metres from Victoria Square (our calculation from OpenStreetMap, 7 October 2026)', head: ['Square', 'East (+) or west (-)', 'North (+) or south (-)', 'Distance from Victoria Square'], rows: [
          ['Hindmarsh Square', '522.3', '471.9', '703.9 m'],
          ['Hurtle Square', '587.1', '-403.5', '712.4 m'],
          ['Whitmore Square', '-516.8', '-469.1', '698.0 m'],
          ['Light Square', '-600.0', '416.1', '730.1 m']
        ] },
        { kind: 'table', caption: 'How far each square lands from its partner after the move (our calculation)', head: ['Move', 'First pair', 'Second pair'], rows: [
          ['Mirror across a north-south line', 'Hindmarsh to Light: 95.7 m out', 'Hurtle to Whitmore: 96.1 m out'],
          ['Mirror across an east-west line', 'Hindmarsh to Hurtle: 94.2 m out', 'Light to Whitmore: 98.6 m out'],
          ['Half turn about Victoria Square', 'Hindmarsh to Whitmore: 6.1 m out', 'Hurtle to Light: 18.0 m out']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Flipping is a sign change', p: 'A mirror across a north-south line keeps how far north a point is and swaps east for west, so (x, y) becomes (-x, y). Children see a whole transformation reduced to one minus sign.' },
          { h3: 'Turning is two sign changes', p: 'A half turn about the centre swaps both, so (x, y) becomes (-x, -y). Hindmarsh Square at (522.3, 471.9) turns to (-522.3, -471.9), only 6.1 metres from Whitmore Square.' },
          { h3: 'The surprise', p: 'Both mirrors miss by about 95 metres, while the half turn misses by 6.1 and 18.0 metres. The squares are arranged with turning symmetry, not mirror symmetry.' }
        ] },
        { kind: 'callout', h3: 'Why a few metres still count as a match', p: 'A park is not a dot. Each square covers a big block of the city, so where we place its centre is a choice, and Light Square is drawn in the map as two separate park shapes that we averaged. A difference of 6 or 18 metres is small next to a park that size; 95 metres is not. Deciding what counts as close enough is one of the first judgements a young programmer learns to make and to explain.' },
        { kind: 'p', text: 'All positions and distances are our calculations from an OpenStreetMap snapshot taken on 7 October 2026, using a flat-map approximation that is accurate to well under a metre over a kilometre or two. OpenStreetMap is mapped by volunteers, and the points we chose to stand for each square are our own choice rather than any official survey mark.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'How children learn it',
      h2: 'Folding paper, then flipping coordinates',
      intro: 'Symmetry begins with scissors and ends with a list of points in Python, at whatever speed the child is ready for.',
      body: [
        { kind: 'table', caption: 'Symmetry with code, by year level', head: ['Year level', 'Hands-on task', 'Coding idea'], rows: [
          ['Reception to Year 2', 'Folds a paper map in half and checks whether the squares meet', 'A rule that can be tested, not just looked at'],
          ['Years 3 to 6', 'Makes a Scratch sprite stamp a square, then flips and spins the costume', 'Coordinates on the stage, negative numbers and repeat blocks'],
          ['Years 7 and 8', 'Writes Python that flips and turns the four points and prints the gaps', 'Lists of pairs, functions and comparing a result with a tolerance']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Negative numbers that mean something', p: 'West and south become negative, so a child meets minus signs as directions on a real map rather than as rules to memorise.' },
          { h3: 'One function, many moves', p: 'Older learners write a single function that takes a point and a move name, then reuse it for every square, which is how good programs avoid repeating themselves.' },
          { h3: 'Close enough, written down', p: 'Before running the code, children choose a tolerance, say 25 metres, and write it at the top of the program, so the test is fair rather than decided after seeing the answer.' }
        ] },
        { kind: 'p', text: 'This project is ours and has no connection with the City of Adelaide, OpenStreetMap or the ABS; none of them has endorsed it. Census numbers belong to the Bureau; the coordinates and distances are our calculations.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Starting school in South Australia',
      h2: 'When Adelaide children start school, and when they can start coding',
      intro: 'South Australia has its own rules for the first school year, and they explain why our youngest Adelaide learners vary so much in age.',
      body: [
        { kind: 'table', caption: 'South Australian school start, as summarised in the ABS Schools methodology (2025)', head: ['Rule', 'What it says'], rows: [
          ['Compulsory school', 'Children must attend school from the age of six'],
          ['Start in term 1', 'Children turning five before 1 May can start school in term 1'],
          ['Start in term 3', 'Children turning five by 31 October can start in term 3 and undertake 6 terms of reception'],
          ['Name of the first year', 'Reception']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Two intakes, one class', p: 'Because Reception can begin in term 1 or term 3, two Adelaide children in the same year can have very different amounts of school behind them. We set coding groups by level, not by year.' },
          { h3: 'Live classes from six', p: 'Our live classes start at age 6. A five-year-old in Reception usually waits a little, which is a good time for unplugged puzzles at home.' },
          { h3: 'Term dates', p: 'South Australian term-date pages blocked our automated reading, so we have not printed them here. Families tell us their dates and lessons are planned around them.' }
        ] },
        { kind: 'spec', title: 'A rule table is already half a program', p: 'Read the table above as if-then rules: if the birthday is before 1 May, start in term 1; else if it is by 31 October, start in term 3. Older children like turning it into a small program that takes a birthday and prints the start term, then testing it on tricky dates such as 30 April and 1 May.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From folding paper to transforming points',
    intro: 'Bands are only a guide. The first free lesson decides the real level.',
    cols: [
      { band: 'Ages 6 to 7', h3: 'Patterns and moves', p: 'Arrows, turns and repeated patterns, with lots of predicting before each run.', courses: ['kids-coding-blocks-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 8 to 10', h3: 'Scratch shapes', p: 'Stamping, flipping and spinning sprites, and games that use the x and y of the stage.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 10 to 12', h3: 'Maths that moves', p: 'Coordinates, negative numbers and transformations, explored by writing code.', courses: ['maths-through-coding', 'mental-maths-mastery-kids'] },
      { band: 'Ages 12 to 14', h3: 'First Python', p: 'Lists of points, functions and real map data from Adelaide.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Can an AI tool tell an Adelaide child whether the squares are symmetrical?',
    intro: 'It can give an answer, but often the answer people expect, and that is exactly the mirror image the measurements reject.',
    p1: 'Ask a chatbot whether the city squares are symmetrical and it may well describe a tidy mirror pattern, because that is what a map looks like at a glance. Our children\'s code says the mirror misses by about 95 metres and the half turn by 6 to 18. A tool that sounds sure is not the same as a tool that has checked, and the child with the coordinates is the one who knows the difference.',
    p2: 'We want young Adelaide learners to treat any confident answer, from a person, a book or an AI tool, as something to test. In our lessons children use AI only in age-appropriate ways and always with a teacher, and the habit we build is simple: what would I measure to check this?',
    closer: 'Children should still learn to code in 2026 because code is how you check a claim instead of repeating it. An Adelaide child who has flipped and turned those four points has already done it.',
    blogAnchor: 'why coding is still worth learning'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From the hills to the beaches, lessons arrive at home',
    intro: 'Greater Adelaide spreads along the coast and into the foothills, and an online lesson means no after-school drive at all.',
    cells: [
      { h3: 'A computer and a quiet corner', p: 'A laptop or desktop with sound, plus a grown-up nearby for the first lesson, is all that is needed.' },
      { h3: 'Reception to Year 8 words', p: 'Teachers use South Australian year names, starting from Reception, so a young child hears familiar words.' },
      { h3: 'A real trial lesson', p: 'Your child makes something that works in the first session, and you leave with a suggested course and slot. No card is requested.' },
      { h3: 'Groups of fifteen to twenty', p: 'Children working at the same stage, or one to one if your child prefers.' },
      { h3: 'Usually twice a week', p: 'About eight lessons each month at the same time, which keeps momentum without crowding the week.' },
      { h3: 'Teachers on India time', p: 'Adelaide is four hours ahead of India time in winter and five hours ahead during daylight saving, so an after-school Adelaide lesson falls around midday for our teachers.' }
    ],
    spec: { title: 'Daylight saving, handled for you', p: 'South Australia moves its clocks in early October and early April; India never does. We always quote lesson times in Adelaide time, so families do not have to work out the change.' }
  },

  fees: {
    h2: 'What coding classes cost for Adelaide kids',
    intro: 'Three prices, stated plainly.',
    first: 'A first lesson that costs nothing and ends with a level, a course and a weekly time.',
    group: 'About eight lessons a month with fifteen to twenty children at a matching level.',
    private: 'About eight lessons a month with your child as the only learner.',
    closer: 'Outside India every family is charged in US dollars at the same rate, so a child in the eastern suburbs and one on the coast pay alike. The first bill comes only after the trial, once you have chosen; the pricing page explains holidays, missed lessons and changing format.'
  },

  reviewsH2: 'Parents and students on Google, unedited',

  book: {
    h2: 'Tell us where your child is starting',
    intro: 'A Reception child might begin by moving a character on a grid, a Year 4 child by stamping and flipping shapes in Scratch, and a Year 8 student by turning map points in Python. A year level and one interest is plenty to start.',
    success: 'Thank you. We will contact you soon about a class for your Adelaide child.'
  },

  faq: {
    h2: 'Questions from Adelaide parents',
    intro: 'What Adelaide families usually want to know first.',
    items: [
      { q: 'What age can an Adelaide child start coding classes?', a: 'Our live classes begin at age 6, usually in Reception or Year 1. The youngest learners start with blocks and pictures and move to typing later.' },
      { q: 'What is rotational symmetry?', a: 'A shape or pattern has rotational symmetry when turning it part of the way round about a centre makes it land on itself. A half turn swaps every point (x, y) for (-x, -y), and Adelaide\'s squares nearly match after one.' },
      { q: 'What is the Adelaide squares project?', a: 'Children place Hindmarsh, Hurtle, Whitmore and Light Squares on a grid of metres around Victoria Square using OpenStreetMap, then flip and turn the points with code. Mirrors miss by about 95 metres; a half turn misses by only 6.1 and 18.0 metres.' },
      { q: 'Is this maths or coding?', a: 'Both, which is the point. Coordinates and transformations are maths; writing a function that applies them to every point and checks the result is coding. Each makes the other easier to understand.' },
      { q: 'When do South Australian children start school?', a: 'According to the ABS Schools methodology, school is compulsory from six in South Australia. Children turning five before 1 May can start in term 1, and those turning five by 31 October can start in term 3 with 6 terms of Reception.' },
      { q: 'What time are lessons for Adelaide children?', a: 'After school on weekdays or on weekends, agreed in the free lesson and always given in Adelaide time.' },
      { q: 'How do you keep children safe online?', a: 'Lessons are live with a teacher who sees the whole small group. Children do not sign up to adult AI services, and a parent is welcome to watch any session.' },
      { q: 'Is there a Modern Age Coders centre in Adelaide?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do coding classes for Adelaide kids cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Adelaide families',
    html: 'Teenagers and adults in Adelaide have their own page: <a class="cg-inline-link" href="/ai-and-programming-classes-in-adelaide">AI and programming classes in Adelaide</a>, and the state picture is on <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-australia">coding and AI classes in South Australia</a>. Older South Australian students heading into senior school can read <a class="cg-inline-link" href="/sace-digital-technologies-help">SACE Digital Technologies help</a> and <a class="cg-inline-link" href="/sace-mathematical-methods-tutoring">SACE Mathematical Methods tutoring</a>. For younger children, see <a class="cg-inline-link" href="/online-coding-classes-for-kids-australia">online coding classes for kids in Australia</a> and <a class="cg-inline-link" href="/coding-classes-for-5-and-6-year-olds-australia">coding for 5 and 6 year olds</a>. Everything else is linked from the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Adelaide and South Australia',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-adelaide', label: 'Adelaide, teens and adults' },
    { href: '/coding-and-ai-classes-in-south-australia', label: 'South Australia' },
    { href: '/coding-classes-for-11-and-12-year-olds-australia', label: 'Ages 11 and 12' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-kadl .cg-hero h1 { font-weight: 800; letter-spacing: -0.018em; line-height: 1.07; }
.cg-root.cg-kadl .cg-capsule { border-left: 4px solid var(--cg-accent); border-right: 4px solid var(--cg-accent); padding: 0 1rem; }
.cg-root.cg-kadl .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-kadl .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-kadl .cg-grid-3 { gap: clamp(1rem, 2.6vw, 2.1rem); }
.cg-root.cg-kadl .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-kadl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kadl .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-kadl .cg-callout { border-left-width: 6px; }
.cg-root.cg-kadl .cg-hero-grid { align-items: center; }
`,

  dossier: {
    curriculumAuthority: 'Greater Adelaide, ABS Census 2021 QuickStats, GCCSA 4GADE (read 7 October 2026): 1,387,290 people; median age 39; 375,146 families; average number of children per family, for families with children, 1.8; age 0 to 4: 74,749 (5.4 percent); age 5 to 9: 81,431 (5.9 percent; Australia 6.2); age 10 to 14: 81,359 (5.9 percent); Preschool: 22,500 (5.7 percent of people attending an educational institution). ABS Schools methodology 2025: Pre-Year 1 known as reception in South Australia; South Australia - children must attend school from the age of six; children turning five before 1 May can start school in term 1; children turning 5 by 31 October can start school in term 3 and undertake 6 terms of reception. IANA tz database: Australia/Adelaide UTC+9:30 and UTC+10:30; Asia/Kolkata UTC+5:30.',
    localProject: 'Symmetry of the Adelaide city squares. One OpenStreetMap Overpass query, snapshot 2026-10-07T16:29:30Z, name~"Square" in 34.940 to 34.910 degrees south and 138.580 to 138.620 east. Points: Victoria Square way 1336429555 (place=square) -34.9286111, 138.5998743; Hindmarsh Square relation 13040624 -34.9243671, 138.6056033; Hurtle Square relation 2573738 -34.9322396, 138.606314; Whitmore Square way 679957023 -34.9328299, 138.5942051; Light Square midpoint of ways 189318146 and 194852575 -34.9248692, 138.5932931. Equirectangular metres from Victoria Square: Hindmarsh (522.3, 471.9) 703.9 m; Hurtle (587.1, -403.5) 712.4 m; Whitmore (-516.8, -469.1) 698.0 m; Light (-600.0, 416.1) 730.1 m. Mirror x to -x: Hindmarsh vs Light 95.7 m, Hurtle vs Whitmore 96.1 m. Mirror y to -y: Hindmarsh vs Hurtle 94.2 m, Light vs Whitmore 98.6 m. Half turn: Hindmarsh vs Whitmore 6.1 m, Hurtle vs Light 18.0 m. Lesson family: reflection versus rotational symmetry tested on coordinates with a tolerance.',
    requiredMentions: [
      '74,749',
      '81,359',
      '22,500',
      '96.1',
      '522.3',
      '95.7',
      '6.1 metres',
      '18.0 metres',
      '6 terms of reception'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Greater Adelaide (4GADE): people, median age, families, children per family, age bands, preschool attendance.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/4GADE' },
      { claim: 'ABS Schools methodology 2025: names for the first year of school and the South Australian school start rules.', url: 'https://www.abs.gov.au/methodologies/schools-methodology/2025' },
      { claim: 'OpenStreetMap via the Overpass API: the five city squares, snapshot 2026-10-07T16:29:30Z (ODbL).', url: 'https://overpass-api.de/api/interpreter' },
      { claim: 'IANA time zone database, Australia/Adelaide and Asia/Kolkata offsets.', url: 'https://www.iana.org/time-zones' }
    ],
    rejectedClaims: [
      'South Australian school term dates: education.sa.gov.au and sa.gov.au returned 403 to automated requests and were not circumvented, so no term dates are printed.',
      'Bureau of Meteorology observations: the Bureau asked automated requests to stop (403), so no weather facts are used.',
      'Any history of who designed the city squares or why: not verified at a primary source, so not stated.',
      'Dual names of the squares: OpenStreetMap carries several spellings, so only the English names are used.',
      'School sector, income, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the City of Adelaide, OpenStreetMap, the ABS or the South Australian Department for Education.'
    ]
  }
};
