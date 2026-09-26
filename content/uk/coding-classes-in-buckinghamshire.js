'use strict';
// Buckinghamshire (cg- county index, UK cluster Phase 7, row 212). The ceremonial county: Buckinghamshire
// Council's area plus Milton Keynes. Spine: a key used twice cancels itself. Bletchley Park, in Milton Keynes,
// broke the teleprinter traffic enciphered on the Lorenz SZ40/42 (Tunny), so the county project builds the
// smallest honest cousin of that problem: a toy stream cipher on 5-bit teleprinter code (the ITA2 letters
// shift, 27 of the 32 codes used for A to Z and space), NOT a model of Lorenz. Our run (scratchpad
// bk/twotime.py, seed 20260926, 26 September 2026): two 37-character messages, one 37-symbol key, so a lone
// ciphertext is consistent with every 37-character message (32^37 keys, about 4.9 x 10^55, 185 bits). XOR the
// two ciphertexts and the key cancels in 37 of 37 positions; the only zeros are at positions 9 and 14 where
// both messages have a space. Crib dragging: " THE " passes the letters-only filter at 16 of 33 offsets (a
// random 5-window passes about 42.8% of the time); "BLETCHLEY" passes at 9 of 29 offsets and offset 15 reads
// "TO AYLESB"; "AYLESBURY" passes at 12 of 29 and offset 18 reads "TCHLEY LE". Lesson family: key reuse in an
// XOR stream cipher (the two-time pad) and crib dragging; screened site-wide 26 September 2026 (two-time pad,
// crib dragging, key stream: 0 hits in dossiers; "crib" alone hits only as the ordinary word).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (Buckinghamshire UA E06000060 553,078;
// Milton Keynes E06000042 287,060; our total 840,138); ONS Census 2021 built-up areas (published, rounded) with
// our own OA sums over the ONS OA21 to BUA22 lookup to check which sit inside the county (Slough and Maidenhead
// straddle in from Berkshire and are left out); Buckinghamshire Council term dates 2026-27 (autumn term from
// Wednesday 2 September 2026, proposed inset day 1 September 2026, half term 26 to 30 October 2026, ends
// 18 December 2026; summer term ends Wednesday 21 July 2027); Bletchley Park "Lorenz" page; GCHQ person pages
// for Bill Tutte and John Tiltman; GCHQ "Colossus 80" news item; The National Museum of Computing Colossus page.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'BUCKINGHAMSHIRE', blurb: 'Two councils, twenty-five towns with a census figure each, and a teleprinter cipher that falls apart when its key is used twice.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-buckinghamshire',
  code: 'bkc',
  accent: '#0B184C',
  accentRationale: 'Buckinghamshire: a teleprinter-ink navy from the solver (13.55:1 on the lightest paper), far darker and bluer than any other UK county accent',
  pageType: 'governorate',
  place: {
    name: 'Buckinghamshire',
    eyebrow: 'Ceremonial county of Buckinghamshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'South East England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Milton Keynes', href: '/best-coding-class-in-milton-keynes' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Buckinghamshire',
  title: 'Coding Classes in Buckinghamshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, cyber security and maths classes for Buckinghamshire, from Milton Keynes and Aylesbury to High Wycombe, Chesham and Marlow.',
  ogDescription: 'Coding classes for every Buckinghamshire town, with a Bletchley-flavoured project: build a teleprinter cipher, reuse its key once, and watch it come apart.',
  twitterDescription: 'Buckinghamshire coding, Python and cyber security classes, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'cybersecurity-course-for-teens-ethical-defensive',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Cyber Security Classes for Buckinghamshire',
    description: 'Ability-placed online coding, Python, cyber security, AI and mathematics for children, teenagers and adults across Buckinghamshire and Milton Keynes, taught live in English.'
  },

  h1: 'Coding classes in Buckinghamshire',
  capsuleQ: 'What are the best coding classes in Buckinghamshire?',
  capsule: 'Buckinghamshire as a county is two councils: Buckinghamshire Council, which held 553,078 people at the 2021 Census, and Milton Keynes City Council with 287,060, for 840,138 together. Its largest places are Milton Keynes, Aylesbury and High Wycombe, and after them comes a long run of Chiltern and Thames-side towns from Chesham to Marlow. We teach all of it the same way: live online, from India, with learners placed by what they can already do rather than by age, anyone from 6 to 67, in small groups of five to ten or one to one. Programming, Python, cyber security, AI and maths are all on offer. The county\'s project is a cipher, because Bletchley is here. You pay nothing for the first lesson. Groups then cost USD 100 a month, and a private teacher USD 150.',
  lead: 'Take a message, turn each letter into five bits of teleprinter code, and combine it with a key of random five-bit symbols. What comes out looks like noise and, used once, is as close to unbreakable as anything in cryptography. Use the same key for a second message and something strange happens: combine the two scrambled messages with each other and the key disappears completely, leaving the two original messages tangled together and waiting to be pulled apart. Buckinghamshire has a particular claim on this subject. Bletchley Park, in what is now Milton Keynes, spent the war reading German teleprinter traffic, and a rebuild of the machine that helped do it, Colossus, is on show there today. This page\'s project is a small, honest cousin of that problem, built from scratch, that a learner can break with an afternoon and a laptop.',
  wa: 'Hello Modern Age Coders, I would like a free class for a learner in Buckinghamshire.',

  picks: {
    eyebrow: 'Courses for Buckinghamshire',
    h2: 'Where a Buckinghamshire learner usually starts',
    intro: 'A seven-year-old in Olney who draws comics, a Year 6 pupil in Amersham who finished every puzzle book in the house, a Year 10 student in Bletchley who has just visited the huts, and a parent in Princes Risborough changing career. Four different first courses, one free first lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch stories, animations and games for young beginners; once the basics land, a letter-swapping secret message makes a good first project of their own.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Typed Python with strings, lists and files, including a unit on simple encryption for files, which leads straight into this page\'s project.' },
      { course: 'cybersecurity-course-for-teens-ethical-defensive', band: 'Ages 13 to 18', note: 'Defensive, ethical security for teenagers, with encryption from paper ciphers to the HTTPS padlock and instructor-built puzzles in cryptography.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from zero for grown-ups, going on to object-oriented design, files and exceptions, with nothing assumed at the start.' }
    ]
  },

  sections: [
    {
      id: 'buckinghamshire', tint: '', eyebrow: 'The county in figures',
      h2: 'Two councils, 840,138 people, three big towns and a long tail',
      intro: 'Census figures come from the Office for National Statistics; town figures are its built-up areas. Each is the publisher\'s number, not our estimate.',
      body: [
        { kind: 'table', caption: 'The two councils of ceremonial Buckinghamshire, usual residents at Census 2021', head: ['Council area', 'Usual residents', 'Larger places in it'], rows: [
          ['Buckinghamshire Council', '553,078', 'Aylesbury, High Wycombe, Chesham, Amersham, Marlow, Buckingham, Beaconsfield'],
          ['Milton Keynes City Council', '287,060', 'Milton Keynes, Bletchley, Newport Pagnell, Olney']
        ] },
        { kind: 'p', text: 'Two figures add up to the county, and they tell you something about lessons. Milton Keynes is one large planned city with most of its council\'s people in a single built-up area. Buckinghamshire Council\'s half is the opposite: two big towns, then Chiltern market towns, commuter villages along the railway lines towards London, and a scatter of settlements across the Vale of Aylesbury. A class in a hall in High Wycombe is realistic for High Wycombe. For Winslow or Olney it means a drive every week, in the dark from October.' },
        { kind: 'table', caption: 'Buckinghamshire towns by ONS built-up area, Census 2021, largest first; Slough and Maidenhead straddle in from Berkshire and are left out', head: ['Town', 'Usual residents', 'Town', 'Usual residents'], rows: [
          ['Milton Keynes', '197,340', 'Wendover', '8,730'],
          ['Aylesbury', '87,950', 'Gerrards Cross', '8,115'],
          ['High Wycombe', '83,535', 'Prestwood and Great Missenden', '7,595'],
          ['Bletchley', '45,010', 'Princes Risborough', '7,530'],
          ['Chesham', '23,695', 'Bourne End', '7,170'],
          ['Hazlemere', '20,005', 'Farnham Common and Farnham Royal', '6,715'],
          ['Amersham', '17,380', 'Olney', '6,600'],
          ['Newport Pagnell', '15,250', 'Little Chalfont', '6,505'],
          ['Marlow', '14,645', 'Haddenham', '5,605'],
          ['Buckingham', '14,295', 'Aston Clinton', '5,510'],
          ['Beaconsfield', '14,145', 'Winslow', '5,235'],
          ['Chalfont St Peter', '13,650', 'Iver Heath', '5,150'],
          ['Flackwell Heath and Wooburn Green', '12,435', '', '']
        ] },
        { kind: 'p', text: 'We checked every row the slow way before printing it. The ONS publishes built-up area totals without saying which council they fall in, so we summed the Census counts of every output area inside the two Buckinghamshire councils, grouped by built-up area, and compared. Twenty-four of the twenty-five rows agree to within rounding. Marlow is the exception: our count inside the county comes to about 170 fewer than the ONS total, so a sliver of it lies over the boundary. Slough came back with about 12,700 residents on the Buckinghamshire side, out of 166,855, and Maidenhead with a few hundred, so neither is a Buckinghamshire town and neither is in the table.' },
        { kind: 'callout', h3: 'The 2026-27 school year, as Buckinghamshire Council sets it', p: 'Buckinghamshire Council\'s autumn term starts on Wednesday 2 September 2026, with a proposed inset day on 1 September, a half term from Monday 26 to Friday 30 October, and an end on Friday 18 December 2026. Spring term runs from 4 January to 25 March 2027, and the summer term finishes on Wednesday 21 July 2027. The council lists separate arrangements for academies, voluntary aided and foundation schools, which may differ, and Milton Keynes is a separate council with its own calendar. We agree breaks with each family rather than assuming one county timetable.' },
        { kind: 'p', text: 'Buckinghamshire Council also runs a selective secondary system with its own entrance test, which has <a class="cg-inline-link" href="/11-plus-maths-tuition-buckinghamshire">a page of its own</a>. This page is about programming, and nothing here is advice about schools.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Buckinghamshire project',
      h2: 'A key used twice cancels itself',
      intro: 'A cipher a twelve-year-old can build in an hour, one mistake that ruins it, and the patient guessing that turns that mistake into two readable messages.',
      body: [
        { kind: 'p', text: 'Teleprinters sent each character as five on-off signals, which gives 32 possible codes. In the letters shift of the international teleprinter alphabet, 27 of the 32 codes are the letters A to Z and the space; the other five are controls such as carriage return. Our toy cipher takes a message in those codes and combines each one with a random five-bit key symbol using exclusive or, written XOR: where the two bits match you get 0, and where they differ you get 1. XOR has one lovely property. Do it twice with the same key and you get your message back, so the same small function encrypts and decrypts.' },
        { kind: 'p', text: 'With a truly random key as long as the message, a single ciphertext tells an attacker almost nothing. Our 37-character message has 32 to the power 37 possible keys, about 4.9 times ten to the 55, and for every 37-character message you can imagine there is a key that produces this exact ciphertext from it. That is the one-time pad, and the words one time are the whole security argument.' },
        { kind: 'table', caption: 'Our run of 26 September 2026: two messages, one key, fixed seed so anyone can repeat it', head: ['Step', 'What we did', 'What came out'], rows: [
          ['Message one', 'BRING THE MAPS TO AYLESBURY ON MONDAY', '37 characters, 185 bits'],
          ['Message two', 'THE TRAIN FROM BLETCHLEY LEAVES AT TE', 'The same length, cut to fit'],
          ['Encrypt both', 'XOR each with the same 37-symbol key', 'Two strings of apparent noise'],
          ['Combine the ciphertexts', 'C1 XOR C2', 'Identical to message one XOR message two in 37 of 37 positions: the key has gone'],
          ['Look for zeros', 'Positions where C1 XOR C2 is 0', 'Only 9 and 14, the two places where both messages have a space']
        ] },
        { kind: 'p', text: 'That fourth row is the lesson. Once the key cancels, the attacker is no longer facing random noise; they are facing two English messages laid over each other, and English is full of patterns. The standard attack is called crib dragging. Guess a word that is probably in one message, a crib, and slide it along the combined text one position at a time. At each position, XOR the guess into it. If the guess is right and in the right place, what comes out is a readable piece of the other message.' },
        { kind: 'table', caption: 'Crib dragging on our two messages: how many positions give letters only, and what the right one gives', head: ['Crib', 'Positions tried', 'Letters or spaces only', 'The readable one'], rows: [
          ['" THE " (five symbols)', '33', '16', 'Position 5 gives "RAIN ", from message two'],
          ['"BLETCHLEY"', '29', '9', 'Position 15 gives "TO AYLESB", from message one'],
          ['"AYLESBURY"', '29', '12', 'Position 18 gives "TCHLEY LE", from message two']
        ] },
        { kind: 'p', text: 'The middle column is the second lesson. A filter that keeps only letters and spaces is not enough: " THE " passes at almost half the positions, which is about what arithmetic predicts, since 27 of the 32 codes are usable and 27 over 32 to the fifth power is roughly 43 per cent. A longer crib is more selective, but still lets through nine or twelve candidates. What picks the right one is language: "TO AYLESB" is plainly the start of something, and "RDUAROZBE" is not. A good learner writes a scorer for that judgement, counting common letter pairs, and finds out how often it agrees with their own eye.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Encrypt a message with XOR by hand on paper, then in Python, then decrypt it with the same function and see why that works.' },
          { h3: 'Ages 13 to 16', p: 'Reuse a key on purpose, combine the ciphertexts, and drag three cribs across the result, keeping a table of what each position gives.' },
          { h3: 'Ages 16 and up', p: 'Write a scorer that ranks candidates by common letter pairs, then measure how many letters of both messages it recovers without help.' }
        ] },
        { kind: 'callout', h3: 'What this project is not', p: 'It is not the Lorenz machine and it is not how Bletchley Park did its work, which was far more complicated. It is the smallest cipher that shows a fault any cipher built this way has to avoid: a key stream must never be used twice. Everything in the tables is our own run of our own code, repeatable with seed 20260926.' }
      ]
    },
    {
      id: 'bletchley', tint: 'deep', eyebrow: 'Why this county',
      h2: 'Teleprinter traffic, a mathematician and a machine with 2,500 valves',
      intro: 'The reason a Buckinghamshire page teaches a cipher. Each fact comes from the organisation named in it.',
      body: [
        { kind: 'table', caption: 'The Bletchley story in the words of the organisations that tell it today', head: ['Who says it', 'What they say'], rows: [
          ['Bletchley Park', 'Lorenz messages "consisted of teleprinter code encyphered with the highly complex Lorenz cypher machine", used between Berlin and Army commanders; Tommy Flowers of the General Post Office built Colossus, "the world\'s first large-scale electronic digital computer".'],
          ['GCHQ, on John Tiltman', 'In 1941 he "deciphered the message which led eventually to the solution of the German High Command\'s teleprinter system \'Tunny\' by Bill Tutte".'],
          ['GCHQ, on Bill Tutte', 'Arrived at Bletchley in May 1941 and was first put to work on the Hagelin C38m used by the Italian Navy; his greatest achievement was to establish the internal structure of the SZ40/42 Lorenz enciphered teleprinter, called TUNNY at Bletchley.'],
          ['GCHQ, marking Colossus at 80', 'The machine used "around 2,500 valves" and stood "more than two metres tall".'],
          ['The National Museum of Computing', 'Colossus "had a single purpose: to help decipher the Lorenz-encrypted (Tunny) messages"; its rebuild is on show in the museum\'s Colossus Gallery at Bletchley Park.']
        ] },
        { kind: 'p', text: 'Look at Tutte\'s entry for what it says about learning. He read chemistry at Cambridge, not mathematics, and spent his spare time on puzzles about squaring the square. GCHQ calls him one of the foremost mathematicians of his generation, and his route there ran through chemistry and puzzles rather than a straight line. Noticing structure is a habit that can be learned somewhere else and brought along, which is a fair description of what a first programming course is for, at eight or at forty-eight.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with Bletchley Park, The National Museum of Computing, GCHQ, Buckinghamshire Council or Milton Keynes City Council, and nothing on this page suggests one. The quotations are theirs; the toy cipher, the code and any mistakes in them are ours.' },
        { kind: 'spec', title: 'Neighbouring pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-milton-keynes">Milton Keynes</a> has a city page of its own with a different project, <a class="cg-inline-link" href="/coding-classes-in-surrey">Surrey</a> is the county index this one follows, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK page</a> links every county as it goes live.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How learners progress',
    h2: 'From a secret-message sprite to code that survives an attacker',
    intro: 'The free lesson sets the starting rung. School year is a clue, and we treat it as one.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Stories and games first', p: 'Scratch projects built from events, loops and variables. Children who enjoy them are ready for a scramble-and-unscramble message game they design themselves.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 10 to 13', h3: 'Text, files and first secrets', p: 'Python strings, lists and files, and simple encryption, which is the natural doorway to the XOR idea on this page.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Thinking like the defender', p: 'Ethical security, careful Python and the habit of asking how a design fails before trusting it with anything real.', courses: ['cybersecurity-course-for-teens-ethical-defensive', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Code for work', p: 'Adults write Python that handles real files, real errors and real people\'s data, and learn where AI help ends and checking begins.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding in the age of AI',
    h2: 'Ask an AI for an XOR cipher and it will write one. Will it tell you never to reuse the key?',
    intro: 'Often not, and the code will run perfectly either way.',
    p1: 'Ask a chatbot for a Python function that encrypts text with XOR and a key, and you will get something short and correct in the narrow sense: it encrypts, it decrypts, and the test it writes for itself passes. What the function does not do is stop you calling it twice with the same key, because nothing in a function can know what you did yesterday. The danger lives in how the code is used, not in its lines, and a prompt about writing the code never mentions it.',
    p2: 'A learner who has combined two ciphertexts and watched the key vanish reads that generated function differently. They ask where the key comes from, whether it is ever stored, what happens on the second message, and whether a library already does this properly. Those are the questions security reviewers ask for a living, and none of them is answered by code that passes its own test.',
    closer: 'So a Buckinghamshire teenager should still learn to program in 2026, not to out-type a model, but to be the person in the room who notices the key is being used twice.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'Olney to Iver Heath without a single car journey',
    intro: 'From the Ouse valley in the north to the Colne valley in the south, the lesson travels and the learner stays put.',
    cells: [
      { h3: 'At home, on a laptop', p: 'A desk in Newport Pagnell, a kitchen in Chesham, a spare room in Haddenham. The teacher shares a screen and the learner types.' },
      { h3: 'English school vocabulary', p: 'Key Stage 2 and 3, GCSE options, A level and university applications are named as families here name them, and teaching is in English.' },
      { h3: 'A real first lesson, free', p: 'A proper session of work with a teacher, finishing with a plain view of level and course. No card details are asked for.' },
      { h3: 'Grouped by level', p: 'Five to ten learners at one stage, gathered from across the UK and wider, so a group at the right level exists at a sensible hour.' },
      { h3: 'Around the county calendar', p: 'Usually two lessons a week. Half terms and holidays are agreed family by family, since academies and Milton Keynes schools may keep different dates.' },
      { h3: 'Times shown in UK time', p: 'Teachers work from India, four and a half hours ahead of UK summer time and five and a half ahead in winter. Every slot is agreed and confirmed in UK time.' }
    ],
    spec: { title: 'Why a level-based group fits Buckinghamshire', p: 'Two large towns and two dozen smaller ones mean that any single place rarely has enough learners at the same stage on the same evening. Grouping by level, not by postcode, is what lets a Winslow teenager and an Aylesbury teenager learn together.' }
  },

  fees: {
    h2: 'Fees for Buckinghamshire learners',
    intro: 'A single price list for every Buckinghamshire town, and for every country apart from India.',
    first: 'A full lesson doing real work, finishing with a suggested level and course.',
    group: 'About eight lessons a month in a group of five to ten at one level.',
    private: 'About eight lessons a month with a teacher who works with one learner only.',
    closer: 'We set prices in US dollars, the rate we use everywhere outside India, and keep no separate pound list. Nothing is charged before the free lesson has fixed a course and a weekly slot; how pauses, missed lessons and switching between group and private teaching work is set out on the pricing page.'
  },

  reviewsH2: 'What families have written on Google',

  book: {
    h2: 'Book the free first lesson',
    intro: 'Tell us an age or school year and one thing the learner enjoys. The first lesson might be a Scratch game, a first Python program, or a key reused on purpose to see what breaks.',
    success: 'Thank you. Your Buckinghamshire request is with our team.'
  },

  faq: {
    h2: 'Buckinghamshire questions, answered',
    intro: 'On the county, the cipher project, and how the classes work.',
    items: [
      { q: 'How many people live in Buckinghamshire?', a: 'At the 2021 Census the Buckinghamshire Council area held 553,078 usual residents and Milton Keynes held 287,060, according to Office for National Statistics figures on Nomis. Together that is 840,138 for the ceremonial county.' },
      { q: 'Which are the largest towns in Buckinghamshire?', a: 'By ONS built-up area at the 2021 Census: Milton Keynes 197,340, Aylesbury 87,950, High Wycombe 83,535 and Bletchley 45,010, then Chesham 23,695 and Hazlemere 20,005. The table on this page has twenty-five towns above five thousand people.' },
      { q: 'When is October half term in Buckinghamshire in 2026?', a: 'Buckinghamshire Council lists Monday 26 to Friday 30 October 2026. Its autumn term starts on Wednesday 2 September 2026, after a proposed inset day on 1 September, and ends on Friday 18 December. Academies, voluntary aided and foundation schools, and Milton Keynes schools, may set different dates.' },
      { q: 'What is the cipher project?', a: 'Learners build a toy stream cipher on five-bit teleprinter code using XOR, encrypt two messages with one key, and show the key cancels when the two ciphertexts are combined. Then they drag guessed words across the result to recover pieces of both messages.' },
      { q: 'Is this how Bletchley Park broke Lorenz?', a: 'No. Lorenz was a much more complicated machine and the wartime work was far harder. The project is a small modern exercise inspired by the county\'s history, which demonstrates why any cipher that adds a key stream must never use the same key twice.' },
      { q: 'Do you teach cyber security to teenagers?', a: 'Yes, as a defensive and ethical course for ages 13 to 18, covering safe habits, how attacks work in concept, and encryption from paper ciphers to the HTTPS padlock. Its practice puzzles are built by the instructor and self-contained, and the legal and ethical lines are taught directly.' },
      { q: 'Is there a classroom in Aylesbury, High Wycombe or Milton Keynes?', a: 'No. All teaching is live online, which is what lets a learner in a small Chiltern village join the same group as one in the middle of Milton Keynes.' },
      { q: 'What ages do you teach?', a: 'From six to sixty-seven. Younger children begin with Scratch, typed Python usually starts between ten and twelve, and teenagers and adults go on to security, data, AI and software. The free lesson decides the level.' },
      { q: 'What does it cost?', a: 'Nothing for the first lesson. After that a group place is USD 100 a month and private teaching USD 150 a month, with no joining fee and no fixed term.' },
      { q: 'Do you help with the Buckinghamshire transfer test?', a: 'We have a separate maths page for it, but this page is about coding. We do not advise on school choice or admissions.' }
    ]
  },

  next: {
    eyebrow: 'Elsewhere in the UK',
    h2: 'Other pages near Buckinghamshire',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-milton-keynes">Milton Keynes</a> has its own city page, <a class="cg-inline-link" href="/best-coding-class-in-oxford">Oxford</a> is over the western edge, and <a class="cg-inline-link" href="/coding-classes-in-surrey">Surrey</a> is the county index south of London. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK page</a> gathers the rest, and <a class="cg-inline-link" href="/best-online-coding-classes-uk">choosing an online class</a> lists what to ask any provider.',
    waLabel: 'Ask us on WhatsApp'
  },

  footerHeading: 'Buckinghamshire and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-milton-keynes', label: 'Milton Keynes' },
    { href: '/best-coding-class-in-oxford', label: 'Oxford' }
  ],

  personalityCss: `
.cg-root.cg-bkc .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.6vw, 2.3rem); }
.cg-root.cg-bkc .cg-hero h1 { font-weight: 800; letter-spacing: -0.03em; line-height: 1.02; }
.cg-root.cg-bkc .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-bkc .cg-eyebrow { letter-spacing: 0.22em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-bkc .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-bkc .cg-table caption { font-weight: 700; letter-spacing: 0.01em; }
.cg-root.cg-bkc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bkc .cg-table th { text-transform: uppercase; letter-spacing: 0.06em; }
.cg-root.cg-bkc .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-bkc .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Buckinghamshire (ceremonial county). ONS Census 2021 TS001 usual residents via Nomis: Buckinghamshire unitary E06000060 553,078; Milton Keynes E06000042 287,060; total 840,138 (our sum of two published figures). ONS Census 2021 built-up areas (published, rounded; confirmed inside the county by summing Nomis OA counts over the ONS OA21 to BUA22 lookup): Milton Keynes 197,340; Aylesbury 87,950; High Wycombe 83,535; Bletchley 45,010; Chesham 23,695; Hazlemere 20,005; Amersham 17,380; Newport Pagnell 15,250; Marlow 14,645; Buckingham 14,295; Beaconsfield 14,145; Chalfont St Peter 13,650; Flackwell Heath and Wooburn Green 12,435; Wendover 8,730; Gerrards Cross 8,115; Prestwood and Great Missenden 7,595; Princes Risborough 7,530; Bourne End 7,170; Farnham Common and Farnham Royal 6,715; Olney 6,600; Little Chalfont 6,505; Haddenham (Buckinghamshire) 5,605; Aston Clinton 5,510; Winslow 5,235; Iver Heath 5,150. Slough BUA (166,855) has about 12,677 residents inside Buckinghamshire by our OA sum and Maidenhead about 580, so both excluded. Buckinghamshire Council school term dates 2026-27: autumn term starts Wednesday 2 September 2026, "There is a proposed inset day on 1 September 2026", half term Monday 26 October to Friday 30 October 2026, ends Friday 18 December 2026; spring term 4 January to 25 March 2027; summer term 12 April to Wednesday 21 July 2027; separate section "Exceptions for academy, voluntary aided, and foundation schools". Bletchley Park, Lorenz: "Messages consisted of teleprinter code encyphered with the highly complex Lorenz cypher machine"; Tommy Flowers, GPO engineer, Colossus "the world\'s first large-scale electronic digital computer". GCHQ, John Tiltman: "in 1941 he deciphered the message which led eventually to the solution of the German High Command\'s teleprinter system \'Tunny\' by Bill Tutte". GCHQ, Bill Tutte: "the German SZ40/42 Lorenz enciphered teleprinter (called TUNNY by the Bletchley teams)"; read Chemistry at Trinity College, Cambridge; "squaring the square"; "arrived at Bletchley in May 1941"; "put to work on the Hagelin C38m cipher machine being used by the Italian Navy". GCHQ, Colossus 80: "around 2,500 valves and standing at more than two metres tall". TNMOC: Colossus "had a single purpose: to help decipher the Lorenz-encrypted (Tunny) messages"; the Colossus Gallery houses the rebuild.',
    localProject: 'A key used twice cancels itself. Toy stream cipher on 5-bit ITA2 letters-shift codes (27 of the 32 codes are A to Z and space), each symbol XORed with a random 5-bit key symbol; explicitly not a model of Lorenz. Our run of 26 September 2026 (seed 20260926): message one "BRING THE MAPS TO AYLESBURY ON MONDAY" and message two "THE TRAIN FROM BLETCHLEY LEAVES AT TE" (cut to 37), one 37-symbol key; 32^37 keys, about 4.9 x 10^55, 185 bits. C1 XOR C2 equals P1 XOR P2 in 37 of 37 positions; zeros only at positions 9 and 14, both spaces in both messages. Crib dragging with a letters-and-space filter: " THE " 16 of 33 offsets pass, offset 5 gives "RAIN "; "BLETCHLEY" 9 of 29, offset 15 gives "TO AYLESB"; "AYLESBURY" 12 of 29, offset 18 gives "TCHLEY LE". A random window passes with probability (27/32)^k: 42.8% for 5 symbols, 21.7% for 9. AI angle: a generated XOR cipher function encrypts and decrypts correctly but cannot prevent the caller reusing the key; the risk lives in use, not in the code. Lesson family: key reuse in an XOR stream cipher (the two-time pad) and crib dragging; screened free site-wide on 26 September 2026, distinct from frequency analysis from scratch (national-cipher-challenge-preparation) and from the information bound on yes/no questions (cyberfirst-girls-competition-preparation).',
    requiredMentions: [
      '840,138',
      'Flackwell Heath and Wooburn Green',
      'proposed inset day',
      'TO AYLESB',
      'TCHLEY LE',
      '2,500 valves',
      'Hagelin C38m',
      '27 of the 32',
      'SZ40/42',
      'seed 20260926'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents: Buckinghamshire 553,078 and Milton Keynes 287,060, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Buckinghamshire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22), used to confirm which towns lie in the county.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Buckinghamshire Council school term dates 2026-27, including the proposed inset day on 1 September 2026 and the 26 to 30 October 2026 half term.', url: 'https://www.buckinghamshire.gov.uk/schools-and-learning/schools-index/school-term-dates/' },
      { claim: 'Bletchley Park: Lorenz messages were teleprinter code; Tommy Flowers built Colossus.', url: 'https://www.bletchleypark.org.uk/our-story/lorenz/' },
      { claim: 'GCHQ: John Tiltman deciphered in 1941 the message that led eventually to Bill Tutte\'s solution of Tunny.', url: 'https://www.gchq.gov.uk/person/john-tiltman' },
      { claim: 'GCHQ: Bill Tutte established the structure of the SZ40/42; arrived May 1941; first worked on the Hagelin C38m.', url: 'https://www.gchq.gov.uk/person/bill-tutte' },
      { claim: 'GCHQ, Colossus 80: around 2,500 valves, more than two metres tall.', url: 'https://www.gchq.gov.uk/news/colossus-80' },
      { claim: 'The National Museum of Computing: Colossus and its single purpose, the Colossus Gallery.', url: 'https://www.tnmoc.org/colossus' }
    ],
    rejectedClaims: [
      'The detail of how the 1941 Tunny message was broken (a message sent twice on one key setting): widely retold, but not found on a Bletchley Park, GCHQ or TNMOC page we could read, so the page says only what GCHQ says and presents the key-reuse project as our own exercise.',
      'Milton Keynes City Council term dates: its term-dates page returned 404 on 26 September 2026, so only Buckinghamshire Council\'s calendar is printed.',
      'Buckinghamshire Council\'s formation from four former district councils: not read at a primary source for this build, so no history of the council is given.',
      'Slough and Maidenhead as Buckinghamshire towns: both built-up areas straddle into the county but lie almost entirely in Berkshire, so both are excluded.',
      'Named Buckinghamshire schools and their computing provision: not read at the schools\' own sites, so none is named.',
      'Pinewood Studios at Iver Heath and Silverstone on the county edge: not read at primary sources for this build, so neither is mentioned.'
    ]
  }
};
