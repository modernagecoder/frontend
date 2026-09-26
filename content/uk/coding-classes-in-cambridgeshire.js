'use strict';
// Cambridgeshire (cg- county index, UK cluster Phase 7, row 220). Ceremonial Cambridgeshire: five districts under
// Cambridgeshire County Council plus Peterborough. Spine: fast needs room, small needs time. The National Museum of
// Computing EDSAC page (tnmoc.org/edsac, read raw 26 September 2026): designed in 1947 by a team led by Maurice
// Wilkes; "first successful program run on 6th May 1949, at the Cambridge University Mathematical Laboratory";
// operated for almost 10 years; "only 18 operation codes and initially just 512 words of memory, later extended to
// 1024"; "Instructions were executed at a rate of approximately 650 per second"; mercury delay-line memory; punched
// paper tape in, teleprinter out. Our run (scratchpad cam/primes.py, 26 September 2026), costs converted at 650 per
// second as a simplification (one counted step = one instruction): primes below 10,000 = 1,229; trial division by
// primes up to the square root 43,752 divisions (67.3 s) keeping 1,229 primes; sieve 16,979 crossings-out (26.1 s)
// needing 10,000 flags; segmented sieve, blocks of 256, same 16,979 crossings with 281 words in use at once (256
// flags + 25 base primes). Below 100,000: 9,592 primes; trial 744,435 (1,145.3 s); sieve 193,076 (297.0 s);
// segmented 321 words. Below 512: 97 primes, trial 1,277, sieve 672. Lesson family: the space-time trade-off under a
// hard memory budget (trial division vs sieve vs segmented sieve); screened (space-time, EDSAC as lesson: 0 hits);
// distinct from big-O on Hoorn/Bromley. The Cambridge city page uses EDSAC only as place history (lesson: heaps).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (894,519, our sum); ONS built-up areas with our OA
// check (Newmarket excluded, Suffolk; Wisbech 26,795 with about 1,260 on the Norfolk side; Peterborough BUA 190,605
// is smaller than the unitary area; Cambridge BUA 152,740 spans Cambridge and South Cambridgeshire).
// Cambridgeshire County Council term dates URL returned 404; none printed.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'CAMBRIDGESHIRE', blurb: 'Six councils, twenty-six towns, and the EDSAC question every programmer meets: fast, or small enough to fit?' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-cambridgeshire',
  code: 'cms',
  accent: '#4C4432',
  accentRationale: 'Cambridgeshire: a fen-peat brown from the solver (7.76:1 on the darkest paper tint), darker and greener than the other UK browns',
  pageType: 'governorate',
  place: {
    name: 'Cambridgeshire',
    eyebrow: 'County of Cambridgeshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'East of England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Cambridge', href: '/best-coding-class-in-cambridge' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Cambridgeshire',
  title: 'Coding Classes in Cambridgeshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, Java and maths classes across Cambridgeshire, from Peterborough and Cambridge to St Neots, Huntingdon, Wisbech, March and Ely.',
  ogDescription: 'Coding classes for every Cambridgeshire town, and a project set on EDSAC\'s budget of 512 words and 650 instructions a second: find the primes, and make them fit.',
  twitterDescription: 'Cambridgeshire coding, Python and Java classes for ages 6 to 67, live online. Free first lesson.',
  ogImageCourse: 'java-programming-masterclass-for-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Java Classes for Cambridgeshire',
    description: 'Ability-placed online coding, Python, Java, algorithms, AI and mathematics for children, teenagers and adults across Peterborough and the five Cambridgeshire districts, taught live in English.'
  },

  h1: 'Coding classes in Cambridgeshire',
  capsuleQ: 'What are the best coding classes in Cambridgeshire?',
  capsule: 'Cambridgeshire, as a county, is Peterborough plus five districts, 894,519 people at the 2021 Census, with two cities at opposite ends: Peterborough in the north and Cambridge in the south, and fen towns such as Wisbech, March, Chatteris and Ely in between. Our classes cover all of it the same way. A teacher based in India teaches live over video; learners are grouped by their current ability, never simply by age, and anyone from 6 to 67 is welcome, in a group of five to ten or one to one. We teach programming, Python, Java, algorithms, AI and maths. The county project borrows the limits of EDSAC, the computer that ran its first program in Cambridge in 1949. Nothing is charged for the first lesson, and afterwards group places are USD 100 a month and private lessons USD 150.',
  lead: 'EDSAC could carry out about 650 instructions a second and, at first, remember just 512 words. Those two numbers make a wonderful puzzle for a modern learner, because they force a choice that every programmer eventually meets: the fastest way to solve a problem is often the one that needs the most memory. Take the simplest serious task there is, listing the prime numbers. One method is quick but wants a note for every number; another is frugal with memory but slow. On a machine with 512 words, neither is good enough for primes up to ten thousand. This page\'s project finds a third way, and counts every step so the trade is visible in seconds and in words.',
  wa: 'Hello Modern Age Coders, may we book a free lesson for a learner in Cambridgeshire?',

  picks: {
    eyebrow: 'Courses for Cambridgeshire',
    h2: 'Popular first courses in Cambridgeshire',
    intro: 'An eight-year-old in St Ives who invents codes and ciphers, a Year 7 in Whittlesey who loves number puzzles, a Year 10 in Huntingdon who wants to learn Java properly, and a parent in Soham returning to work with new skills. Four starting points, each beginning with a free lesson.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Computational thinking and logic puzzles for children, including the patterns hidden in numbers.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First real Python: loops, lists and the conditions needed to test whether a number is prime.' },
      { course: 'java-programming-masterclass-for-teens', band: 'Ages 13 to 18', note: 'Core Java for teenagers through apps, games and data structures, with a Spring Boot introduction.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from zero for adults, building to object-oriented design, files and exceptions.' }
    ]
  },

  sections: [
    {
      id: 'cambridgeshire', tint: '', eyebrow: 'Cambridgeshire in figures',
      h2: 'Six councils, 894,519 people and two cities at opposite ends',
      intro: 'Council populations are 2021 Census counts from Nomis. Town sizes come from the ONS built-up areas, each compared with our own sum of the census output areas in the county.',
      body: [
        { kind: 'table', caption: 'Peterborough and the five Cambridgeshire districts, usual residents at Census 2021, largest first', head: ['Council', 'Usual residents', 'Main towns'], rows: [
          ['Peterborough', '215,671', 'Peterborough, Eye'],
          ['Huntingdonshire', '180,832', 'St Neots, Huntingdon, St Ives, Yaxley, Ramsey'],
          ['South Cambridgeshire', '162,118', 'Cambourne, Sawston, Histon and Impington, Northstowe'],
          ['Cambridge', '145,674', 'Cambridge'],
          ['Fenland', '102,462', 'Wisbech, March, Whittlesey, Chatteris'],
          ['East Cambridgeshire', '87,762', 'Ely, Soham, Littleport, Burwell']
        ] },
        { kind: 'p', text: 'The two cities behave in opposite ways against their boundaries. Peterborough\'s unitary area, 215,671 people, is larger than its built-up area of 190,605, because the council takes in villages around the city. Cambridge is the reverse: the built-up area, 152,740, spills over the city council\'s line into South Cambridgeshire, which is why the city district holds only 145,674. Between them lie the fens, where towns are small and far apart and the nearest after-school club may be a long drive across flat, straight roads.' },
        { kind: 'table', caption: 'Cambridgeshire built-up areas above 5,000 residents at the 2021 Census, biggest first (Newmarket omitted: it is a Suffolk town)', head: ['Built-up area', 'Residents', 'Built-up area', 'Residents'], rows: [
          ['Peterborough', '190,605', 'Littleport', '9,165'],
          ['Cambridge', '152,740', 'Histon and Impington', '7,780'],
          ['St Neots', '33,265', 'Godmanchester', '7,715'],
          ['Wisbech', '26,795', 'Sawston', '7,270'],
          ['Huntingdon', '25,600', 'Brampton', '6,585'],
          ['March', '21,345', 'Great Shelford and Stapleford', '6,160'],
          ['Ely', '19,185', 'Cottenham', '6,155'],
          ['St Ives', '16,820', 'Burwell', '5,915'],
          ['Whittlesey', '13,830', 'Sawtry', '5,875'],
          ['Cambourne', '11,075', 'Ramsey', '5,730'],
          ['Chatteris', '11,015', 'Eye', '5,415'],
          ['Soham', '10,615', 'Waterbeach', '5,375'],
          ['Yaxley', '9,405', 'Longstanton and Northstowe', '5,275']
        ] },
        { kind: 'p', text: 'Twenty-five of the twenty-six rows match our own output-area count within rounding. Wisbech is the exception: its built-up area has about 1,260 residents across the line in Norfolk, and the table prints the ONS total for the whole town. Newmarket, which the ONS lists partly against East Cambridgeshire, has only about 2,090 of its 18,855 people on the Cambridgeshire side, so it belongs to Suffolk\'s story rather than this one.' },
        { kind: 'callout', h3: 'School dates', p: 'The Cambridgeshire County Council term-dates address we tried returned "page not found" on 26 September 2026, so we print no calendar. Peterborough sets its own, as can academies. Every family agrees lesson breaks with us around the dates their own school has given them.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Cambridgeshire project',
      h2: 'Primes on a 512-word machine: fast, frugal, or both?',
      intro: 'Three ways to list the primes below ten thousand, every step counted, and each method measured against EDSAC\'s published limits.',
      body: [
        { kind: 'p', text: 'Method one is trial division: test each number by dividing it by the primes found so far, stopping at its square root. It remembers only the primes themselves. Method two is the sieve of Eratosthenes: write down every number, then cross out the multiples of each prime in turn; whatever survives is prime. It does far less work but needs a mark for every number. The learner codes both, checks that they produce exactly the same list, and counts the steps. To make the cost concrete we price each counted step as one EDSAC instruction at 650 a second, a deliberate simplification, since a real division took EDSAC far longer than an addition.' },
        { kind: 'table', caption: 'Our run of 26 September 2026: listing the 1,229 primes below 10,000 three ways', head: ['Method', 'Counted steps', 'At 650 a second', 'Memory in use at once'], rows: [
          ['Trial division by primes up to the square root', '43,752 divisions', '67.3 seconds', '1,229 primes kept'],
          ['Sieve of Eratosthenes', '16,979 crossings-out', '26.1 seconds', '10,000 marks'],
          ['Segmented sieve, 256 numbers at a time', '16,979 crossings-out', '26.1 seconds', '281 words'],
          ['EDSAC\'s own memory at first', '', '', '512 words']
        ] },
        { kind: 'p', text: 'Read the last column against the last row. The plain sieve is the fastest, but ten thousand marks will never fit in 512 words. Trial division is frugal, but even the list of primes it must keep, 1,229 of them, is more than twice EDSAC\'s early memory. The segmented sieve gets both wins at once: it sieves 256 numbers at a time, keeping only those 256 marks plus the 25 small primes below 100 that it needs to do the crossing out, 281 words in all. It does exactly the same 16,979 crossings-out as the full sieve, because it is the same work done in slices.' },
        { kind: 'p', text: 'Push the target to a hundred thousand and the gap widens: trial division needs 744,435 divisions, about 19 minutes at our rate, while the sieve needs 193,076 crossings-out, about five minutes, and the segmented version still fits in 321 words. The general lesson reaches far beyond primes. Speed and memory can often be traded against each other, and sometimes a smarter structure gives you both. Recognising which situation you are in is a large part of what it means to design software.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'List the primes below 100 by hand with a sieve on squared paper, then write the same sieve in Python and compare.' },
          { h3: 'Ages 13 to 16', p: 'Code trial division and the sieve, prove they agree, and count the steps each needs for 1,000, 10,000 and 100,000.' },
          { h3: 'Ages 16 and up', p: 'Build the segmented sieve, choose a block size, and measure how memory and steps change as the block shrinks and grows.' }
        ] },
        { kind: 'callout', h3: 'What we are and are not claiming', p: 'EDSAC\'s 512 words, 18 operation codes and 650 instructions a second are figures from The National Museum of Computing. Pricing every counted step as one instruction is our own simplification for comparing methods; it is not how long EDSAC would really have taken, and nothing here describes any program actually run on EDSAC.' }
      ]
    },
    {
      id: 'edsac', tint: 'deep', eyebrow: 'Why Cambridge',
      h2: 'A 1949 computer with 18 instructions and a mercury memory',
      intro: 'The Cambridgeshire link, from the museum building a working replica.',
      body: [
        { kind: 'table', caption: 'EDSAC, as The National Museum of Computing describes it', head: ['Fact', 'In the museum\'s words'], rows: [
          ['Who and when', 'Designed in 1947 by a team led by Maurice Wilkes; "first successful program run on 6th May 1949, at the Cambridge University Mathematical Laboratory".'],
          ['How long', 'The original operated for almost 10 years.'],
          ['How much', '"only 18 operation codes and initially just 512 words of memory, later extended to 1024".'],
          ['How fast', '"Instructions were executed at a rate of approximately 650 per second."'],
          ['How it remembered', 'Delay-line tanks, metal tubes filled with mercury that exploited the slow speed of sound in the liquid metal.']
        ] },
        { kind: 'p', text: 'The museum says Wilkes built EDSAC because he had watched researchers doing laborious sums on mechanical desk calculators and wanted to give them something better. That motive, making a tool useful to people who are not computer specialists, is still the right reason to teach programming. A Cambridgeshire learner today has millions of times EDSAC\'s speed on a school laptop, and the same design decisions to make about memory and time.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with The National Museum of Computing, the University of Cambridge, Cambridgeshire County Council or Peterborough City Council, and nothing on this page implies one. The EDSAC facts are the museum\'s; the prime programs, the step counts and any error in them are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: 'Three Cambridgeshire places have their own pages: <a class="cg-inline-link" href="/best-coding-class-in-cambridge">Cambridge</a>, <a class="cg-inline-link" href="/best-coding-class-in-peterborough">Peterborough</a> and <a class="cg-inline-link" href="/best-coding-class-in-ely">Ely</a>. <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">Hertfordshire</a> and <a class="cg-inline-link" href="/coding-classes-in-essex">Essex</a> lie to the south.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path through',
    h2: 'From spotting patterns in numbers to designing for limits',
    intro: 'The free lesson places each learner. Year group helps us guess; what the learner can do settles it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Patterns and rules', p: 'Scratch and puzzles that ask children to find and follow a rule, the seed of every algorithm.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Ages 10 to 13', h3: 'Loops that test numbers', p: 'Python loops and conditions that check numbers for patterns, primes included, and count how much work they did.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Data structures and cost', p: 'Java or Python with arrays, lists and the discipline of measuring time and memory before choosing a design.', courses: ['java-programming-masterclass-for-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Programs that scale', p: 'Adults write Python that copes with large files and long lists, and learn where time and memory go.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and the limits that remain',
    h2: 'An AI writes a prime sieve in one line. Would it notice the sieve does not fit?',
    intro: 'Not unless the limit is in the question, and someone has to know it belongs there.',
    p1: 'Ask a chatbot for the primes below a large number and it will give you a sieve, usually a neat and correct one. It will not ask how much memory you have, because on the machine it imagines memory is plentiful. On a phone app, a small sensor, a web page or a database query over millions of rows, that assumption is where programs fail, not with a wrong answer but with no answer at all.',
    p2: 'A Cambridgeshire student who has squeezed the primes below ten thousand into 281 words knows to ask the missing questions: how big is the input, how much can I hold at once, and can the work be done in slices? Those questions turn a textbook answer into one that works on the machine in front of you, and they are exactly the ones an AI assistant needs a human to supply.',
    closer: 'So a Cambridgeshire teenager should learn to program in 2026 for the same reason EDSAC\'s users did: to make a limited machine do useful work, and to know which limit matters.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'The practical side',
    h2: 'Wisbech to Sawston with no one on the road',
    intro: 'The county stretches a long way across the fens, and bus routes thin out after school. Online lessons avoid the question.',
    cells: [
      { h3: 'Learning at home', p: 'A bedroom in Chatteris, a kitchen in Cottenham, a study in Godmanchester. The teacher shares a screen and the learner writes the code.' },
      { h3: 'School words you know', p: 'Year groups, GCSE choices and A level subjects are named the way Cambridgeshire schools name them, in English throughout.' },
      { h3: 'First lesson free', p: 'A proper lesson with real work, then a straight answer about level and course. There is nothing to pay and no card to give.' },
      { h3: 'Matched classmates', p: 'Groups of five to ten learners who have reached the same point, from towns and countries far apart, at a sensible hour.' },
      { h3: 'Holidays by arrangement', p: 'Most learners have two lessons weekly and take the same holidays as their own school, whichever council or academy trust set them.' },
      { h3: 'A UK-time timetable', p: 'The clock in India, where lessons are taught from, is five and a half hours ahead of UK winter time and four and a half ahead of UK summer time, so every slot we offer is written in UK time to avoid any mix-up.' }
    ],
    spec: { title: 'Why groups are built by level', p: 'Two cities at opposite ends and small fen towns in between mean few places have enough learners at one stage on one evening. Grouping by level puts a March learner and a Cambourne learner in the same class.' }
  },

  fees: {
    h2: 'Cambridgeshire fees',
    intro: 'One price list for all of Cambridgeshire, and for every country but India.',
    first: 'A full lesson of real work, ending with a recommended level and course.',
    group: 'About eight lessons a month in a group of five to ten learners at one level.',
    private: 'About eight lessons a month with a teacher and one learner.',
    closer: 'Fees are charged in US dollars, the currency we use for every family outside India, and there is no separate pound price. Payment begins only after the free lesson has agreed a course and weekly slot; the pricing page covers pausing, missed lessons and changing between group and private teaching.'
  },

  reviewsH2: 'Google reviews from families, word for word',

  book: {
    h2: 'Request a free lesson',
    intro: 'Send an age or school year and a line about what the learner enjoys. The first lesson might be a logic puzzle, a first Python prime checker, or the 512-word sieve on this page.',
    success: 'Thank you. Your Cambridgeshire request is with us.'
  },

  faq: {
    h2: 'Cambridgeshire questions',
    intro: 'On the county, the EDSAC project and the lessons.',
    items: [
      { q: 'How many people live in Cambridgeshire?', a: 'Peterborough and the five Cambridgeshire districts held 894,519 usual residents at the 2021 Census, from ONS data on Nomis. Peterborough was the largest council at 215,671 and East Cambridgeshire the smallest at 87,762.' },
      { q: 'Is Peterborough bigger than Cambridge?', a: 'Yes, on both measures. The Peterborough built-up area had 190,605 residents and the Cambridge built-up area 152,740. Peterborough\'s council area is larger still, because it includes surrounding villages.' },
      { q: 'What is the EDSAC prime project?', a: 'Learners list the primes below 10,000 by trial division, by the sieve of Eratosthenes and by a segmented sieve, count the steps, and compare memory use with EDSAC\'s 512 words. The segmented sieve needs only 281 words at once.' },
      { q: 'What was EDSAC?', a: 'An early stored-program computer at the Cambridge University Mathematical Laboratory. The National Museum of Computing says it ran its first successful program on 6th May 1949, had 18 operation codes and 512 words of memory at first, and executed about 650 instructions a second.' },
      { q: 'Why is the sieve faster than trial division?', a: 'The sieve crosses out multiples instead of dividing. For the primes below 10,000 it needs 16,979 crossings-out against 43,752 divisions, but it needs a mark for every number, which is where the memory trade comes in.' },
      { q: 'Is there a classroom in Cambridge or Peterborough?', a: 'No. Lessons are live online only, so a learner in Littleport and one in St Neots share a class without travelling.' },
      { q: 'What ages do you teach?', a: 'The range runs from six-year-olds to learners of sixty-seven. Little ones begin with puzzles and Scratch; somewhere near ten most move on to typed Python; teenagers take up Java and algorithms; adults usually want Python, data or AI. Level is decided in the free lesson.' },
      { q: 'Do you teach Java to teenagers?', a: 'Yes. The teen Java course, for ages 13 to 18, covers core Java, JavaFX apps, games, Minecraft mods, data structures and an introduction to Spring Boot.' },
      { q: 'What are the fees?', a: 'There is no charge for the opening lesson. Monthly fees afterwards are USD 100 for a seat in a group and USD 150 for one-to-one teaching; there is no registration charge and no fixed term.' },
      { q: 'When are Cambridgeshire school holidays?', a: 'Cambridgeshire County Council, Peterborough and academies can each set dates. The county page we tried was not found when we checked, so we fit lesson breaks around your own school\'s calendar.' }
    ]
  },

  next: {
    eyebrow: 'More of the UK',
    h2: 'Beyond Cambridgeshire',
    html: 'City pages for <a class="cg-inline-link" href="/best-coding-class-in-cambridge">Cambridge</a>, <a class="cg-inline-link" href="/best-coding-class-in-peterborough">Peterborough</a> and <a class="cg-inline-link" href="/best-coding-class-in-ely">Ely</a> each have a different project. Other counties include <a class="cg-inline-link" href="/coding-classes-in-oxfordshire">Oxfordshire</a> and <a class="cg-inline-link" href="/coding-classes-in-essex">Essex</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has the rest.',
    waLabel: 'Message our team'
  },

  footerHeading: 'Cambridgeshire and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-cambridge', label: 'Cambridge' },
    { href: '/best-coding-class-in-peterborough', label: 'Peterborough' }
  ],

  personalityCss: `
.cg-root.cg-cms .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 3vw, 2.6rem); }
.cg-root.cg-cms .cg-hero h1 { font-weight: 750; letter-spacing: -0.023em; line-height: 1.05; }
.cg-root.cg-cms .cg-capsule { border-left: 7px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-cms .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cms .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.018em; }
.cg-root.cg-cms .cg-table caption { font-weight: 600; letter-spacing: 0.015em; }
.cg-root.cg-cms .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cms .cg-table th { letter-spacing: 0.05em; text-transform: uppercase; }
.cg-root.cg-cms .cg-ladder-col { border-top: 3px dotted var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-cms .cg-callout { border-left-width: 6px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'Cambridgeshire (ceremonial: five districts under Cambridgeshire County Council plus Peterborough unitary). ONS Census 2021 TS001 via Nomis: Peterborough 215,671; Huntingdonshire 180,832; South Cambridgeshire 162,118; Cambridge 145,674; Fenland 102,462; East Cambridgeshire 87,762; total 894,519 (our sum). ONS Census 2021 built-up areas (published; checked with our OA sums): Peterborough 190,605 (Peterborough, Huntingdonshire); Cambridge 152,740 (Cambridge, South Cambridgeshire); St Neots 33,265; Wisbech 26,795 (25,533 inside the county, about 1,260 in Norfolk); Huntingdon 25,600; March 21,345; Ely 19,185; St Ives 16,820; Whittlesey 13,830; Cambourne 11,075; Chatteris 11,015; Soham 10,615; Yaxley 9,405; Littleport 9,165; Histon and Impington 7,780; Godmanchester 7,715; Sawston 7,270; Brampton 6,585; Great Shelford and Stapleford 6,160; Cottenham 6,155; Burwell 5,915; Sawtry 5,875; Ramsey 5,730; Eye 5,415; Waterbeach 5,375; Longstanton and Northstowe 5,275. Newmarket 18,855 excluded (about 2,090 in East Cambridgeshire). The National Museum of Computing, EDSAC: "Designed in 1947 by a team lead by Maurice Wilkes, the original EDSAC computer operated for almost 10 years, starting from its first successful program run on 6th May 1949, at the Cambridge University Mathematical Laboratory"; "There were only 18 operation codes and initially just 512 words of memory, later extended to 1024. Instructions were executed at a rate of approximately 650 per second"; memory "constructed from \'delay line tanks\' - metal tubes filled with mercury"; Wilkes had "observed research workers doing laborious computations with the aid of mechanical desk calculators".',
    localProject: 'The space-time trade-off under a hard memory budget. Primes below N by trial division (divide by primes up to sqrt), sieve of Eratosthenes, and segmented sieve (block 256), lists checked identical; each counted step priced at one EDSAC instruction at 650 per second as a stated simplification. N 10,000: 1,229 primes; trial 43,752 divisions (67.3 s), memory 1,229 primes; sieve 16,979 crossings (26.1 s), memory 10,000 marks; segmented 16,979 crossings, 281 words at once (256 + 25 base primes). N 100,000: 9,592 primes; trial 744,435 (1,145.3 s); sieve 193,076 (297.0 s); segmented 321 words (256 + 65). N 512: 97 primes, trial 1,277, sieve 672. Compared with EDSAC\'s initial 512 words. AI angle: generated sieves assume plentiful memory. Lesson family: space-time trade-off (trial division vs sieve vs segmented sieve); distinct from big-O on Hoorn and Bromley; the Cambridge city page uses EDSAC only as place history (its lesson is a top-k heap).',
    requiredMentions: [
      '894,519',
      '6th May 1949',
      '650 per second',
      '512 words',
      '18 operation codes',
      '16,979',
      '43,752',
      '281 words',
      'Longstanton and Northstowe',
      '190,605'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for Peterborough and the five Cambridgeshire districts, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Cambridgeshire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'The National Museum of Computing, EDSAC: first program 6th May 1949, 18 operation codes, 512 words, about 650 instructions per second, mercury delay lines.', url: 'https://www.tnmoc.org/edsac' }
    ],
    rejectedClaims: [
      'Cambridgeshire County Council term dates: the URL tried returned 404 on 26 September 2026; none printed.',
      'The Queens\' College sundial: the college site has no page describing it that we could find, so the planned equation-of-time project was dropped.',
      'How long a real EDSAC division took: not read at a primary source; the page prices every counted step at one instruction and says so.',
      'EDSAC\'s word length in bits: not stated on the museum page, so memory is counted in words, one mark or prime per word.',
      'Newmarket as a Cambridgeshire town: most of its built-up area lies in Suffolk.',
      'Named Cambridgeshire schools or university departments\' teaching: none is claimed.'
    ]
  }
};
