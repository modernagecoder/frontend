'use strict';
// Islington (cg- London borough page, UK cluster Phase 5, row 179). Named sources only.
// Spine: why a perfectly tuned piano is slightly out of tune. Historic England list entry 1208365 (Union Chapel, Grade
// I): Congregational chapel, 1876-7 by James Cubitt; "a notable Willis organ"; "an unaltered Henry Willis instrument
// retaining its original hydraulic bellows pumps"; 3,500 at the opening on 5 December 1877. The National Pipe Organ
// Register API returned 401 (login) and was not used, so no stoplist is claimed; organ footage conventions (8 ft unison,
// 4 ft octave, 2 2/3 ft twelfth, 1 3/5 ft seventeenth) are standard and stated as such.
// Maths: cents = 1200 log2(ratio). Harmonic n vs nearest equal-tempered note: 3rd +1.96, 5th -13.69, 7th -31.17, 9th
// +3.91, 11th -48.68, 13th +40.53 cents. Middle C 261.626 Hz: equal-tempered E 329.628 vs pure 5/4 327.032 (2.6 Hz
// apart; 4th harmonic of E vs 5th of C beat 10.4 times a second); G 391.995 vs pure 392.438 (0.9 beats a second).
// Pipe: 8 ft = 2.438 m; open pipe f = 343 / (2 x 2.438) = 70.3 Hz vs the C an 8 ft pipe is named for, 65.4 Hz, which
// implies an effective length of 2.622 m (end effect). Lesson family: logarithms, cents, the harmonic series vs equal
// temperament, beats; screened 25 September 2026 (equal temperament 0, harmonic series 0, semitone 0).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'ISLINGTON', blurb: 'Union Chapel\'s Willis organ, the Charterhouse and a project on why a perfectly tuned piano is slightly out of tune.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-islington-london',
  code: 'isl',
  accent: '#79153C',
  accentRationale: 'Islington: a deep organ-case crimson from the solver (8.58:1 on every paper tint), darker and bluer than the Redbridge raspberry',
  pageType: 'governorate',
  place: {
    name: 'Islington',
    eyebrow: 'London Borough of Islington',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Islington, London',
  title: 'Coding Classes in Islington and Clerkenwell | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Islington: Clerkenwell, Angel, Highbury, Holloway, Archway, Finsbury Park and Canonbury. Ages 6 to 67.',
  ogDescription: 'Islington coding and Python classes, with a project inspired by Union Chapel\'s Willis organ where learners use logarithms to measure how far piano tuning bends nature.',
  twitterDescription: 'Islington coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Islington Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Islington, taught live in English.'
  },

  h1: 'Coding classes in Islington',
  capsuleQ: 'What are the best coding classes in Islington?',
  capsule: 'Islington is the north London borough of Clerkenwell, Angel, Highbury, Holloway, Archway, Canonbury, Barnsbury and Finsbury Park, with 216,589 residents at the 2021 Census and twelve Grade I entries, among them the Charterhouse, Wesley\'s Chapel and Union Chapel with its unaltered Henry Willis organ. The coding classes worth your time connect maths to things learners can hear and touch, and this page does that with music: logarithms turn frequencies into cents, and a short program shows exactly how far the piano\'s equal tuning bends the notes nature provides. Lessons are live on video, taught from India, for learners aged 6 to 67, one to one or in groups of five to ten at one level. We do not charge for the first lesson. After it, a group place is USD 100 a month and one-to-one teaching USD 150 a month.',
  lead: 'Historic England lists Union Chapel on Upper Street at Grade I and singles out its organ: an unaltered Henry Willis instrument, still with its original hydraulic bellows pumps. An organ is a giant physics experiment. Organ builders name each rank of pipes by the length of its longest pipe, so an 8 foot rank sounds the written note, 4 foot an octave higher, and a 2 2/3 foot rank a note that nature, not a keyboard, decided. Our learners use logarithms to measure musical distance in cents, where an equal-tempered semitone is exactly 100. Then they compare nature\'s harmonics with the piano\'s equal steps. The fifth is almost perfect, off by 2 cents. The major third is off by nearly 14. The seventh harmonic misses by 31, which is why keyboards leave it out altogether.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Islington.',

  picks: {
    eyebrow: 'Course picks for Islington',
    h2: 'Four first courses in Islington',
    intro: 'Think of a Year 3 child in Highbury learning the recorder, a Year 10 pupil in Holloway who makes beats on a laptop, a Year 12 student in Clerkenwell weighing physics against music technology, and a choir member in Canonbury who has always wondered why some chords ring and others shimmer. Each can start with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch keyboard that plays notes, octaves and chords, and a first look at why an octave sounds the same.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with sound: frequencies, doubling for octaves and a table of notes.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including logarithms, cents and the harmonic series project on this page.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who enjoy music and want to see the maths inside it, without needing to read notation.' }
    ]
  },

  sections: [
    {
      id: 'islington', tint: '', eyebrow: 'Islington by the numbers',
      h2: '216,589 residents and 1,047 listed entries',
      intro: 'Each figure below is published by the organisation named, or counted by us from its open data.',
      body: [
        { kind: 'table', caption: 'Islington at a glance', head: ['Topic', 'Detail', 'Published by'], rows: [
          ['Population on 21 March 2021', '216,589 residents', 'Office for National Statistics'],
          ['Listed places we counted within the borough', '1,047, of which 12 are Grade I', 'Historic England list data, 25 September 2026'],
          ['Union Chapel opened', '5 December 1877, with 3,500 people present', 'Historic England list entry 1208365'],
          ['Lines at Highbury & Islington', 'Victoria, Mildmay, Windrush and Great Northern', 'TfL open data, checked 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Charterhouse and St John', p: 'The Charterhouse and its Master\'s Lodge, St John\'s Gate and the Priory Church of St John of Jerusalem are all Grade I.' },
          { h3: 'Chapels', p: 'Wesley\'s Chapel and John Wesley\'s House, Union Chapel, and the former churches of St Luke and St Saviour complete much of the Grade I list.' },
          { h3: 'A well and a clinic', p: 'The Clerk\'s Well, which gave Clerkenwell its name, is Grade I, and so is the Finsbury Health Centre and 52 to 55 Newington Green.' }
        ] },
        { kind: 'p', text: 'Islington Council lists libraries at Archway, Cat and Mouse, Central, Finsbury, Mildmay, North, South and West.' }
      ]
    },
    {
      id: 'pipes', tint: 'tint', eyebrow: 'The physics',
      h2: 'Pipe lengths, frequencies and octaves',
      intro: 'A pipe that is half as long sounds an octave higher: the frequency doubles. Organ builders use this to name ranks of pipes by footage.',
      body: [
        { kind: 'table', caption: 'Organ footage and the harmonic each rank sounds, relative to an 8 foot rank', head: ['Rank length', 'Frequency ratio', 'Musical interval above 8 ft'], rows: [
          ['16 ft', '1/2', 'An octave below'],
          ['8 ft', '1', 'The written note'],
          ['4 ft', '2', 'An octave above'],
          ['2 2/3 ft', '3', 'An octave and a fifth above'],
          ['2 ft', '4', 'Two octaves above'],
          ['1 3/5 ft', '5', 'Two octaves and a major third above']
        ] },
        { kind: 'p', text: 'Physics predicts the note from the length. For an open pipe, the frequency is roughly the speed of sound divided by twice the length. An 8 foot pipe is 2.438 metres, which gives about 70.3 vibrations a second, yet the note an 8 foot rank is named for, low C, is 65.4. The gap is real: the air vibrates a little beyond the open end, so the pipe acts as if it were about 2.62 metres long. Learners measure the size of that effect from the numbers. We did not use a published stop list for the Union Chapel organ: the national organ register\'s data service needs a login, which we do not use.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Nature\'s notes against the piano\'s: measuring in cents',
      intro: 'Learners turn frequency ratios into cents with a logarithm, then compare the harmonic series with equal temperament.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Logarithms make it add', p: 'Musical intervals multiply frequencies, but we hear them as adding up. Taking 1,200 times the base-2 logarithm of a ratio turns it into cents, so intervals add like numbers.' },
          { h3: '2. The harmonic series', p: 'A vibrating pipe or string sounds its fundamental plus 2, 3, 4, 5 times that frequency and so on. These are the notes nature supplies.' },
          { h3: '3. The piano\'s compromise', p: 'Equal temperament divides every octave into 12 equal steps of 100 cents, so music can move freely between keys. Compare each harmonic with the nearest step.' }
        ] },
        { kind: 'table', caption: 'How far each harmonic sits from the nearest equal-tempered note, computed 25 September 2026', head: ['Harmonic', 'Nearest keyboard interval', 'Difference in cents'], rows: [
          ['3rd', 'Octave plus a fifth', '+1.96'],
          ['5th', 'Two octaves plus a major third', '-13.69'],
          ['7th', 'Two octaves plus a minor seventh', '-31.17'],
          ['9th', 'Three octaves plus a whole tone', '+3.91'],
          ['11th', 'Three octaves plus a tritone', '-48.68'],
          ['13th', 'Three octaves plus a minor sixth', '+40.53']
        ] },
        { kind: 'p', text: 'The fifth is almost pure. The major third is not: from middle C at 261.6 hertz, the keyboard\'s E is 329.6, while the E in the harmonic series would be 327.0. Play the two together and the harmonics clash, producing a shimmer of about 10 beats a second that trained ears hear in every piano chord. The seventh, eleventh and thirteenth harmonics are so far from any keyboard note that keyboards simply do without them. Equal temperament is a deliberate compromise, trading purity for freedom, and learners can measure exactly what it costs.' },
        { kind: 'callout', h3: 'Why working it out beats asking an AI', p: 'An AI assistant will tell you that equal temperament is a compromise. A learner who has written the logarithm, printed the table, and generated the beating tones in code knows how big the compromise is and can hear it. That link between a formula and a sound is the kind of understanding that makes someone a better musician, audio engineer or scientist, and it cannot be copied from a summary.' }
      ]
    },
    {
      id: 'logs', tint: 'tint', eyebrow: 'Why logarithms',
      h2: 'Turning multiplying into adding',
      intro: 'Logarithms are often taught as a button on a calculator. Music shows what they are for.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Ratios stack', p: 'An octave doubles frequency; two octaves quadruple it. A logarithm turns those doublings into 1,200 and 2,400 cents, which simply add.' },
          { h3: 'Tiny differences', p: 'A 2-cent difference is a frequency change of about a tenth of one per cent. Cents make differences that small easy to compare.' },
          { h3: 'Beats you can count', p: 'Two nearly equal frequencies beat at their difference. Learners compute it, then play it and count along.' }
        ] },
        { kind: 'p', text: 'GCSE maths pupils can follow ratios, doubling and the table; A-level students meet logarithms formally and can derive the beat frequencies themselves. The list entry details are Historic England\'s; the cents, frequencies, beats and pipe calculations are our own, worked out on 25 September 2026 using a speed of sound of 343 metres a second. Historic England, Union Chapel, Islington Council, TfL and the ONS are not connected with Modern Age Coders.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'Highbury & Islington, and a quiet room at home',
      intro: 'Islington is crossed by the Victoria, Northern and Piccadilly lines and more. Our classes need none of them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Highbury & Islington', p: 'TfL\'s open data lists the Victoria, Mildmay and Windrush lines and Great Northern trains at Highbury & Islington.' },
          { h3: 'Archway to Clerkenwell', p: 'A learner at the northern tip of the borough and one in Clerkenwell can share a class from their own homes.' },
          { h3: 'In tune together', p: 'Groups of five to ten at one stage keep a class in step, so nobody is rushed and nobody is waiting.' }
        ] },
        { kind: 'spec', title: 'Islington in London', p: 'Islington is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> covers all of them and the City, linking each page as it is published, including <a class="cg-inline-link" href="/coding-classes-in-hackney-london">Hackney</a> to the east and <a class="cg-inline-link" href="/coding-classes-in-haringey-london">Haringey</a> to the north.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From playing notes to measuring tuning',
    intro: 'The free lesson shows what a learner can already do, and that decides where they begin.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Notes and patterns', p: 'Children build Scratch instruments and hear how octaves and chords are made.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Frequencies', p: 'Python that generates notes from frequencies and doubles them to climb octaves.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Logs and tuning', p: 'Cents, the harmonic series and beats computed and heard, a rich base for physics, maths or music technology.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Maths you can hear', p: 'Adults learn how logarithms and ratios explain the sound of everyday music.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can generate music. Why should an Islington teenager learn the maths inside it?',
    intro: 'Because tools that make sound are built on exactly these ideas, and using them well means understanding them.',
    p1: 'AI can now compose and produce music in seconds. Under every one of those tools sit frequencies, ratios and logarithms. A learner who has measured how far equal temperament bends the harmonic series, and heard the ten-beats-a-second shimmer of a tempered third, understands something about sound that no prompt can give them. That understanding is what lets a musician, producer or audio engineer take control of the tools rather than just accept what they output.',
    p2: 'Logarithms are also everywhere outside music: decibels, earthquakes, pH, computer algorithms. Learning them through sound makes them stick. Machines will keep making music; people who understand it will keep shaping it.',
    closer: 'Islington has an organ good enough to be named in its Grade I listing. A learner here who can explain its harmonics with code has made maths audible.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Angel to Archway, classes live online',
    intro: 'In every corner of Islington, class starts the moment the video call opens.',
    cells: [
      { h3: 'Your own desk', p: 'A laptop or desktop, headphones and a broadband connection that can handle an hour of video are all you need.' },
      { h3: 'English stages', p: 'We describe progress with the Key Stages used in English schools, from Key Stage 1 to sixth form, naming GCSE and A level where relevant. Teaching is in English.' },
      { h3: 'Free first lesson', p: 'A real lesson rather than a sales call, ending with a recommended level and course. We ask for no card details.' },
      { h3: 'Matched classes', p: 'Each class holds five to ten learners at one stage, drawn nationally and internationally, which is what lets us offer a sensible evening slot.' },
      { h3: 'Two evenings a week', p: 'The usual rhythm is a pair of evening lessons each week, with breaks for school holidays and exam season arranged with families.' },
      { h3: 'UK times', p: 'Teachers are in India; the times we send are always UK times.' }
    ],
    spec: { title: 'A dense borough, a matched class', p: 'Around 217,000 people live in Islington, and a good class still needs five learners at the same stage free together, so our classes draw from far beyond it.' }
  },

  fees: {
    h2: 'Fees for Islington families',
    intro: 'A free first lesson, then one monthly fee that is the same across the borough.',
    first: 'A complete first lesson with a teacher, free, ending with a recommended level, course and time.',
    group: 'About eight live lessons a month in a class of five to ten at one stage.',
    private: 'About eight live lessons a month, one to one.',
    closer: 'Islington families pay in US dollars, like all families outside India, and the site lists no pound prices. We charge nothing before the free lesson or before you choose a course and regular time. Pauses, missed lessons and moves between a class and one-to-one are all set out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, straight from families',

  book: {
    h2: 'Ask for a free lesson',
    intro: 'All we need is a rough age and one enthusiasm. We might start with a Scratch keyboard, a Python note generator, or the tuning project on this page.',
    success: 'Thank you. Your Islington lesson request has reached our team.'
  },

  faq: {
    h2: 'Islington families ask',
    intro: 'About the borough, the tuning project and our lessons.',
    items: [
      { q: 'How many people live in Islington?', a: 'Census 2021 put the usual resident population at 216,589, the figure published in ONS table TS001.' },
      { q: 'Why is Union Chapel\'s organ mentioned?', a: 'Historic England\'s Grade I list entry for Union Chapel singles it out as a notable Willis organ: an unaltered Henry Willis instrument retaining its original hydraulic bellows pumps.' },
      { q: 'What is a cent?', a: 'A unit for musical intervals: one hundredth of an equal-tempered semitone, so an octave is 1,200 cents. It is calculated as 1,200 times the base-2 logarithm of the ratio between two frequencies.' },
      { q: 'Is a piano really out of tune?', a: 'Deliberately, slightly. Equal temperament makes every semitone the same size so music can change key freely, which puts its major third about 14 cents away from the pure third in the harmonic series.' },
      { q: 'Why does an 8 foot pipe not match the simple formula?', a: 'The simple formula gives about 70 vibrations a second for a pipe 2.44 metres long, but the note is 65.4. The air vibrates a little beyond the open end, so the pipe behaves as if it were longer.' },
      { q: 'When would Islington lessons be?', a: 'When the free lesson has shown us the right level, we propose a class with space and its fixed evening. The time is written in UK time; the teacher works from India.' },
      { q: 'What does a learner need?', a: 'A computer with sound, ideally headphones for the music work, and a steady connection. The project needs only Python.' },
      { q: 'Is there a Modern Age Coders centre in Islington?', a: 'No. There is no Islington centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Islington cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'Around London and the UK',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> lists every borough and the City with links to published pages, among them <a class="cg-inline-link" href="/coding-classes-in-camden-london">Camden</a> next door and <a class="cg-inline-link" href="/coding-classes-in-greenwich-london">Greenwich</a> across the river. Sound is a signal, and signals feed straight into our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">machine learning lessons for London</a>; families checking how an Islington school year maps onto Scotland or Wales will find that on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Islington and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-hackney-london', label: 'Hackney' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-isl .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.2vw, 2.7rem); }
.cg-root.cg-isl .cg-hero h1 { font-weight: 740; letter-spacing: -0.018em; line-height: 1.05; }
.cg-root.cg-isl .cg-capsule { border-top: 5px double var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-isl .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-isl .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.011em; }
.cg-root.cg-isl .cg-grid-3 { gap: clamp(1rem, 2.5vw, 1.85rem); }
.cg-root.cg-isl .cg-table caption { font-weight: 700; letter-spacing: 0.017em; }
.cg-root.cg-isl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-isl .cg-table td:last-child { font-weight: 650; }
.cg-root.cg-isl .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-isl .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Islington. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000019): 216,589 usual residents. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 1,047 (I 12, II* 34, II 1,001); Grade I 1298101 THE CHARTERHOUSE, 1280100 MASTER\'S LODGE, THE CHARTERHOUSE, 1208827 ST JOHN\'S GATE, 1208840 PRIORY CHURCH OF ST JOHN OF JERUSALEM, 1195538 WESLEY\'S CHAPEL, 1195533 JOHN WESLEY\'S HOUSE, 1208365 Union Chapel, 1195700 FORMER CHURCH OF ST LUKE, 1195443 FORMER CHURCH OF ST SAVIOUR, 1298055 CLERK\'S WELL, 1297993 FINSBURY HEALTH CENTRE, 1293320 52-55 NEWINGTON GREEN. List entry 1208365: Congregational chapel 1876-7 by James Cubitt, tower completed 1889; "a notable Willis organ"; "an unaltered Henry Willis instrument retaining its original hydraulic bellows pumps"; opening 5 December 1877, 3,500 present. Islington Council /libraries/your-local-libraries, 25 September 2026: Archway, Cat and Mouse, Central, Finsbury, Mildmay, North, South, West. TfL HUBHHY (Highbury & Islington): Victoria, Mildmay, Windrush, Great Northern. NPOR API (npor.org.uk/api/search) returned 401: not used.',
    localProject: 'cents(r) = 1200 log2 r. Harmonics n = 1..16 vs nearest 100-cent step: 3 +1.96; 5 -13.69; 7 -31.17; 9 +3.91; 11 -48.68; 13 +40.53; 15 -11.73. C4 = 261.6256 Hz; ET E4 = C4 x 2^(4/12) = 329.628; pure 5/4 = 327.032 (diff 2.596 Hz); 4 x E4 - 5 x C4 = 10.38 Hz beat; ET G4 391.995 vs 3/2 392.438; 2G - 3C = -0.886 Hz. Organ footage: 16, 8, 4, 2 2/3, 2, 1 3/5, 1 1/7 ft = ratios 1/2, 1, 2, 3, 4, 5, 7 to the 8 ft rank (standard convention). Pipe: 8 ft = 2.4384 m; f = 343 / (2L) = 70.33 Hz; C2 = 65.406 Hz; effective length 343 / (2 x 65.406) = 2.622 m. Lesson family: logarithms, cents, harmonic series vs equal temperament, beats; screened 25 September 2026.',
    requiredMentions: [
      '216,589',
      'Union Chapel',
      'Henry Willis',
      'equal temperament',
      'harmonic series',
      'Charterhouse',
      'Clerk\'s Well',
      'Finsbury Health Centre',
      'Cat and Mouse'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Islington E09000019: 216,589 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000019&measures=20100' },
      { claim: 'Historic England list entry 1208365, Union Chapel: 1876-7 by James Cubitt; unaltered Henry Willis organ; opening 5 December 1877.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1208365' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Islington on 25 September 2026: 1,047 (12 I, 34 II*, 1,001 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'Islington Council, your local libraries.', url: 'https://www.islington.gov.uk/libraries-arts-and-heritage/libraries/your-local-libraries' },
      { claim: 'TfL Unified API, StopPoint HUBHHY (Highbury & Islington).', url: 'https://api.tfl.gov.uk/StopPoint/HUBHHY' }
    ],
    rejectedClaims: [
      'The Union Chapel organ\'s stoplist and pipe dimensions: the National Pipe Organ Register data service requires a login; not used, so the page uses only standard footage conventions.',
      'The exact end-correction formula for organ pipes: not quoted; the page derives the effective length from the named note.',
      'Arsenal and the Emirates Stadium: not used, to avoid any implied affiliation.',
      'Islington schools and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth: never a standout; used only to order the build.'
    ]
  }
};
