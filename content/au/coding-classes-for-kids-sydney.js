'use strict';
// Coding classes for kids in Sydney (cg- city page, Australia cluster Phase 6, kids intent only:
// Kindergarten to Year 8 and their parents). Teens and adults belong to best-coding-classes-in-sydney.
// Spine: fitting a map onto the Scratch stage. From one OpenStreetMap Overpass query (snapshot
// 2026-10-07T16:38:38Z) for amenity=ferry_terminal in a rectangle we chose over the harbour (33.880 to 33.790
// degrees south, 151.100 to 151.300 east): 71 wharf entries (Circular Quay alone has 11 berth entries). The
// rectangle measures about 18,473 m east to west and 10,008 m north to south (ratio 1.846); the Scratch stage
// is 480 by 360 (ratio 1.333). Calculated by us on 7 October 2026: stretching each direction to fill the stage
// gives 38.5 m per step east-west but 27.8 m per step north-south, so the harbour is drawn about 1.39 times too
// tall; one shared scale of 38.5 m per step keeps the shape and uses about 260 of the 360 steps of height.
// Positions with the shared scale: Circular Quay 2A (29, -124), Manly Wharf (201, 50), Taronga Zoo (95, -83);
// stretched: (29, -103), (201, 138), (95, -46). Rounded to whole steps, the 11 Circular Quay entries land on
// 7 distinct points (8 when stretched), and all 71 entries on 66 (68 when stretched). Lesson family: linear
// scaling from map coordinates to screen coordinates and keeping the aspect ratio; screened free site-wide on
// 7 October 2026 (the Scratch stage size page, coding-classes-for-9-and-10-year-olds-australia, is about area).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Greater Sydney (GCCSA 1GSYD): aged 0 to 4
// 312,364 (6.0%); 5 to 9 329,072 (6.3%; Australia 6.2%); 10 to 14 321,768 (6.2%); preschool 108,505 (6.7%);
// 1.8 children in families with children; median age 37. ABS Schools methodology 2025 (NSW: kindergarten;
// school from six). NSW Department of Education 2027 calendar (school development days). IANA: Australia/Sydney.
// Excluded by the cluster rules: income, rent, ancestry, birthplace, language, religion, health, school sector.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'SYDNEY KIDS', label: 'Kids in Sydney', blurb: 'Coding for Sydney children from Kindergarten to Year 8, fitting the harbour\'s ferry wharves onto the Scratch stage.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'coding-classes-for-kids-sydney',
  code: 'ksyd',
  accent: '#122052',
  accentRationale: 'Sydney kids: a deep night-harbour navy chosen by hand (HSV saturation 0.78, value 0.32), at least 10.8 RGB units from every accent in use and 12.6:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Sydney',
    eyebrow: 'Sydney, New South Wales, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Sydney, for kids',
  title: 'Coding Classes for Kids in Sydney | Kindergarten to Year 8',
  description: 'Live online coding classes for Sydney kids from Kindergarten to Year 8: Scratch, games, first Python and AI basics with a real teacher, in groups or one to one.',
  ogDescription: 'Coding for Sydney children, with a project that fits 71 harbour ferry wharves onto the Scratch stage without squashing the map.',
  twitterDescription: 'Coding classes for Sydney kids, Kindergarten to Year 8, live online. First lesson free.',
  ogImageCourse: 'game-development-masterclass-for-kids',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Sydney Children',
    description: 'Level-matched block coding, Scratch games and maps, first Python and AI literacy for primary and lower secondary children across Greater Sydney, taught live in English.'
  },

  h1: 'Coding classes for kids in Sydney',
  capsuleQ: 'What are the best coding classes for kids in Sydney?',
  capsule: 'From Kindergarten to Year 8, a Sydney child gains most when a real teacher leads live, classmates share the same stage and every project draws on the city outside the window. Greater Sydney had 321,768 children aged 10 to 14 at the 2021 Census. We teach online from age 6, and the first lesson costs nothing.',
  lead: 'Every Sydney child knows the harbour has ferries going everywhere. Put the wharves on a Scratch stage and it turns into a lovely coding puzzle. OpenStreetMap lists 71 wharf entries in the rectangle we drew over the harbour, from Kissing Point in the west to Manly in the east. Each one has a latitude and longitude, but Scratch only understands x from -240 to 240 and y from -180 to 180. Our young Sydney coders work out how to convert one into the other, and find that the obvious way squashes the harbour out of shape.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child in Sydney.',

  picks: {
    eyebrow: 'Course picks for Sydney kids',
    h2: 'Popular first courses for Sydney children',
    intro: 'Matched to age and to what the child enjoys. The free first lesson settles the starting level.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 7 to 11', note: 'Scratch games and maps, including a harbour where every ferry wharf sits in the right place on the stage.' },
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Scratch, Roblox and Minecraft games that use coordinates, movement and simple scoring.' },
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding for the youngest Sydney learners: moving a character on a grid, step by step.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First typed Python, drawing maps with turtle graphics from real latitude and longitude data.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Sydney children in the Census',
      h2: 'Over three hundred thousand children in every five-year band',
      intro: 'ABS 2021 Census QuickStats for the Greater Sydney capital city area, each value shown as the Bureau published it.',
      body: [
        { kind: 'table', caption: 'Greater Sydney children (ABS 2021 Census QuickStats)', head: ['Group', 'How many in Greater Sydney'], rows: [
          ['Under 5', '312,364 (6.0%)'],
          ['5 to 9 years', '329,072 (6.3%; Australia 6.2%)'],
          ['10 to 14 years', '321,768 (6.2%)'],
          ['Going to preschool', '108,505'],
          ['Children in families with children, average', '1.8'],
          ['Median age', '37']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Every band over 300,000', p: 'In 2021 each of the under-5, 5 to 9 and 10 to 14 bands in Greater Sydney passed 300,000 children. That is a lot of future Scratch projects.' },
          { h3: 'Kindergarten first', p: 'In NSW, the year before Year 1 is Kindergarten. Our youngest Sydney learners are six, usually in Kindergarten or Year 1, and begin with blocks rather than typing.' },
          { h3: 'Preschool numbers', p: '108,505 Greater Sydney residents were at preschool in 2021, the children who will reach Kindergarten and their first code in the next year or two.' }
        ] },
        { kind: 'p', text: 'Each census age band is privacy-adjusted separately, so adding the bands is not a reliable way to rebuild the total. This page sticks to published values, and we teach children to do the same.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How do you fit Sydney Harbour onto a Scratch stage without squashing it?',
      intro: 'Seventy-one ferry wharf entries from OpenStreetMap, turned from latitude and longitude into Scratch x and y, two different ways.',
      body: [
        { kind: 'table', caption: 'What we calculated on 7 October 2026 (our working from OpenStreetMap)', head: ['Measure', 'Value'], rows: [
          ['Ferry wharf entries in our harbour rectangle', '71'],
          ['Rectangle size on the ground', 'about 18,473 m wide and 10,008 m tall'],
          ['Scratch stage size', '480 steps wide and 360 steps tall'],
          ['Stretch to fill the stage', '38.5 m per step across, 27.8 m per step up and down'],
          ['One shared scale instead', '38.5 m per step both ways, using about 260 of the 360 steps of height'],
          ['Manly Wharf on the stage', '(201, 138) stretched, (201, 50) with one scale']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Find the fraction', p: 'A wharf a quarter of the way across the rectangle should be a quarter of the way across the stage. Working out that fraction is the first step, for both directions.' },
          { h3: '2. Stretch, and see the problem', p: 'Using a different fraction for each direction fills the stage, but each step up covers 27.8 metres while each step across covers 38.5. The harbour comes out about 1.39 times too tall.' },
          { h3: '3. One scale keeps the shape', p: 'Using 38.5 metres per step in both directions keeps every distance true to the map. The price is a strip of empty stage above and below the harbour, and children decide that is worth it.' }
        ] },
        { kind: 'callout', h3: 'When wharves land on the same spot', p: 'Circular Quay has 11 separate berth entries in the map data, all within a few hundred metres. Rounded to whole Scratch steps with one scale, they land on just 7 distinct points, and across all 71 entries only 66 points are different. Some wharves are closer together than one step on the stage. Children learn that a screen has a resolution, and that zooming in, not squeezing harder, is how to tell nearby things apart.' },
        { kind: 'p', text: 'All positions are our calculations from an OpenStreetMap snapshot taken on 7 October 2026, using a flat-map approximation that is fine at harbour scale. OpenStreetMap is mapped by volunteers, the rectangle is our own choice, and some entries are individual berths rather than separate wharves. We make no claim about ferry routes or timetables.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'How children learn it',
      h2: 'From grid paper to a Scratch map',
      intro: 'Scaling a picture to fit a space is maths every child meets, and code makes it something they can see working.',
      body: [
        { kind: 'table', caption: 'Maps and scale by year level', head: ['Year level', 'What happens in class', 'Concept'], rows: [
          ['Kindergarten to Year 2', 'Places harbour stickers on squared paper using left-right and up-down steps', 'Position, direction and counting squares'],
          ['Years 3 to 6', 'Moves a Scratch sprite to each wharf with go to x: y: blocks and draws the harbour outline', 'Coordinates, negative numbers and the stage grid'],
          ['Years 7 and 8', 'Writes Python that converts latitude and longitude to stage x and y, with and without a shared scale', 'Fractions, proportional reasoning and functions with parameters']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The middle is zero', p: 'Scratch puts 0, 0 at the centre of the stage, not the corner. Children who forget this draw the whole harbour in one quarter of the screen, and learn to shift as well as scale.' },
          { h3: 'Up is positive', p: 'In Scratch, a bigger y is higher up. Latitudes in Sydney are negative, so children check that Manly, further north, really does end up above Circular Quay.' },
          { h3: 'Test with corners', p: 'Before plotting all 71 wharves, the child plots the four corners of the rectangle. If they land on the stage edges, the conversion is right.' }
        ] },
        { kind: 'p', text: 'Transport for NSW, Sydney Ferries, the Scratch team at MIT, OpenStreetMap and the ABS have no part in this project and have not reviewed or approved it. The census numbers are the ABS\'s; the stage positions are our calculations.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'School in New South Wales',
      h2: 'Starting school and the NSW year for Sydney families',
      intro: 'Lessons follow the NSW school year, from Kindergarten onwards, so busy weeks are planned for.',
      body: [
        { kind: 'table', caption: 'NSW school development days in 2027, before students return each term (NSW Department of Education)', head: ['Term', 'Staff development days'], rows: [
          ['Term 1', 'Thursday 28 January to Tuesday 2 February'],
          ['Term 2', 'Tuesday 27 April and Wednesday 28 April'],
          ['Term 3', 'Monday 19 July'],
          ['Term 4', 'Monday 11 October']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'School from six', p: 'According to the ABS Schools methodology, children in New South Wales must attend school from the age of six, the same age our live classes start.' },
          { h3: 'Days with no school', p: 'Development days are school days for teachers but not for students. Some families use them for a longer coding session; others keep the usual slot.' },
          { h3: 'Holiday weeks', p: 'Between terms, families decide whether lessons pause or carry on, often with one weekly lesson to finish a game.' }
        ] },
        { kind: 'spec', title: 'Calendars are coordinates too', p: 'A calendar puts each day on a grid of weeks and weekdays, just as the stage puts each wharf on a grid of x and y. Older children like turning a date into a row and column and drawing the school year on the Scratch stage.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From stickers on grid paper to scaled maps in Python',
    intro: 'The age bands are only a guide. The free lesson sets the real starting point.',
    cols: [
      { band: 'Ages 6 to 7', h3: 'Grids and steps', p: 'Moving characters by steps on a grid, with lots of predicting where they will end up.', courses: ['kids-coding-blocks-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 8 to 10', h3: 'Scratch maps and games', p: 'Coordinates, movement and simple games set around Sydney.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 10 to 12', h3: 'Maths through maps', p: 'Fractions, scale and negative numbers used to place things accurately on screen.', courses: ['maths-through-coding', 'minecraft-coding-for-kids-course'] },
      { band: 'Ages 12 to 14', h3: 'First Python', p: 'Converting real coordinates and drawing them with turtle graphics.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Can an AI tool draw Sydney Harbour for a child, and would it be right?',
    intro: 'It can produce a picture quickly, but whether the picture keeps the right shape depends on a scaling choice the tool makes without asking.',
    p1: 'Ask an AI helper for code that plots the wharves on a Scratch stage and you may well get the stretch-to-fit version, which fills the screen nicely and quietly makes the harbour 1.39 times too tall. It looks finished. A child who has worked out the scale by hand spots the distortion at once, because Manly sits much too high above Circular Quay.',
    p2: 'What we want young Sydney coders to learn is to look at a result and ask whether it is true, not only whether it is tidy. In our lessons AI is used only in ways suited to a child\'s age and always with a teacher present, and spotting a convincing but wrong picture is a skill we practise on purpose.',
    closer: 'So yes, learning to code is still worth it in 2026, because it teaches children to check what a computer shows them. A Sydney child who has fitted the harbour onto the stage without squashing it already can.',
    blogAnchor: 'our full answer on learning to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From the northern beaches to the west, one online class',
    intro: 'Greater Sydney is huge, and afternoon traffic makes travelling to a class a big commitment. Live online lessons come to you.',
    cells: [
      { h3: 'At your desk', p: 'Any laptop or desktop with working sound. A parent beside the youngest children for the first lesson helps them relax.' },
      { h3: 'Familiar school language', p: 'We talk about Kindergarten, Stage 2 or Year 7 exactly as a Sydney classroom does, so the lesson feels connected to school.' },
      { h3: 'Free first session', p: 'A full lesson with something finished at the end, then our suggestion for course and time. Card details are never asked for.' },
      { h3: 'Groups of five to ten', p: 'Children working at a similar level, or private lessons if they suit your child better.' },
      { h3: 'Steady weekly rhythm', p: 'About eight lessons a month, often two a week at a fixed time.' },
      { h3: 'Teachers on India time', p: 'Our teachers work on India time, which trails Sydney by 4.5 hours in the cooler months and by 5.5 hours while daylight saving runs. A Sydney after-school class therefore falls in their late morning.' }
    ],
    spec: { title: 'Daylight saving, our job', p: 'NSW changes its clocks in early October and early April; India never does. We confirm every lesson in Sydney time, so families never have to do the conversion.' }
  },

  fees: {
    h2: 'What coding classes cost for Sydney kids',
    intro: 'Three prices, plainly put.',
    first: 'A free first lesson, finishing with a suggested level, course and time.',
    group: 'About eight lessons a month with five to ten children at a matching level.',
    private: 'About eight lessons a month for your child alone with a teacher.',
    closer: 'Outside India, every family pays in US dollars at the same single rate, from the inner west to the Hills. Nothing is charged until after the trial lesson and your choice of course and slot; the pricing page explains holidays, absences and changing between group and private lessons.'
  },

  reviewsH2: 'Families and learners reviewing us on Google, word for word',

  book: {
    h2: 'Tell us about your Sydney child',
    intro: 'A Kindergarten child might start by moving a character on a grid, a Year 4 child by placing wharves on the Scratch stage, and a Year 8 student by converting coordinates in Python. Just share the year level and what your child likes.',
    success: 'Thank you. We will be in touch soon about a class for your Sydney child.'
  },

  faq: {
    h2: 'Questions from Sydney parents',
    intro: 'What Sydney families usually want to know before starting.',
    items: [
      { q: 'What age can a Sydney child start coding classes?', a: 'Our live classes begin at age 6, usually in Kindergarten or Year 1. The first lessons use blocks and pictures, and typing comes later.' },
      { q: 'What is aspect ratio?', a: 'Aspect ratio is the width of a shape divided by its height. Our harbour rectangle is about 1.85 times as wide as it is tall, while the Scratch stage is 1.33 times as wide, so fitting one into the other means choosing between filling the stage and keeping the shape.' },
      { q: 'What is the Sydney harbour project?', a: 'Children take 71 ferry wharf entries from OpenStreetMap and convert each latitude and longitude into Scratch x and y. Stretching to fill the stage makes the harbour 1.39 times too tall; using one scale of 38.5 metres per step keeps it true.' },
      { q: 'Why do some wharves end up on the same spot?', a: 'Because one Scratch step stands for about 38.5 metres, and some berths, such as the 11 at Circular Quay, are closer together than that. They collapse onto 7 points, a lesson in screen resolution.' },
      { q: 'Do you plan around the NSW school year?', a: 'Yes. We use NSW year names from Kindergarten to Year 8, and lessons are planned around NSW terms, holidays and development days.' },
      { q: 'What time are lessons for Sydney children?', a: 'After school on weekdays or at weekends, set during the free lesson and always given in Sydney time.' },
      { q: 'How are children kept safe in online lessons?', a: 'A teacher runs and watches each live session, the groups are small, no child is signed up to an adult AI service, and parents may sit in at any time.' },
      { q: 'Is there a Modern Age Coders centre in Sydney?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do coding classes for Sydney kids cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Sydney families',
    html: 'Sydney teenagers and adults have a page of their own: <a class="cg-inline-link" href="/best-coding-classes-in-sydney">coding classes in Sydney</a>. For the whole state, including the selective and opportunity class tests, read <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>, and families preparing for the OC test can see <a class="cg-inline-link" href="/oc-test-maths-practice-nsw">OC test maths practice</a>. The <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a> gathers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Sydney and New South Wales',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney, teens and adults' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-classes-for-kids-newcastle', label: 'Kids in Newcastle' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-ksyd .cg-hero h1 { font-weight: 800; letter-spacing: -0.023em; line-height: 1.05; }
.cg-root.cg-ksyd .cg-capsule { border-left: 3px solid var(--cg-accent); border-bottom: 3px solid var(--cg-accent); padding: 0 0 0.9rem 1rem; }
.cg-root.cg-ksyd .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-ksyd .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.013em; }
.cg-root.cg-ksyd .cg-grid-3 { gap: clamp(1rem, 2.7vw, 2.1rem); }
.cg-root.cg-ksyd .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-ksyd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ksyd .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-ksyd .cg-callout { border-left-width: 6px; }
.cg-root.cg-ksyd .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.4rem); }
`,

  dossier: {
    curriculumAuthority: 'Greater Sydney, ABS Census 2021 QuickStats, GCCSA 1GSYD (read 7 October 2026): 5,231,147 people; median age 37; 1,380,176 families; average number of children per family, for families with children, 1.8; age 0 to 4: 312,364 (6.0 percent); age 5 to 9: 329,072 (6.3 percent; Australia 6.2); age 10 to 14: 321,768 (6.2 percent); Preschool: 108,505 (6.7 percent of people attending an educational institution). ABS Schools methodology 2025: kindergarten in New South Wales; New South Wales - children must attend school from the age of six. NSW Department of Education 2027 calendar, school development days: Term 1 Thursday 28 January to Tuesday 2 February; Term 2 Tuesday 27 April and Wednesday 28 April; Term 3 Monday 19 July; Term 4 Monday 11 October. IANA tz database: Australia/Sydney UTC+10 and UTC+11; Asia/Kolkata UTC+5:30.',
    localProject: 'Harbour wharves on the Scratch stage. One OpenStreetMap Overpass query, snapshot 2026-10-07T16:38:38Z, amenity=ferry_terminal in 33.880 to 33.790 degrees south and 151.100 to 151.300 degrees east: 71 entries (11 named Circular Quay ...). Rectangle (equirectangular at mid-latitude, R = 6,371,008.8 m): 18,473 m by 10,008 m, ratio 1.846; stage 480 by 360, ratio 1.333. Stretch-to-fit: 38.5 m per x step, 27.8 m per y step (vertical exaggeration 1.39). Shared scale k = min(480/18,473, 360/10,008): 38.5 m per step, map height about 260 steps. Positions (shared / stretched): Circular Quay 2A (29, -124) / (29, -103); Manly Wharf (201, 50) / (201, 138); Taronga Zoo (95, -83) / (95, -46); Kissing Point x = -235. Distinct rounded points: Circular Quay 7 shared, 8 stretched; all 71 entries 66 shared, 68 stretched. Lesson family: linear scaling to screen coordinates, aspect ratio and screen resolution.',
    requiredMentions: [
      '312,364',
      '321,768',
      '108,505',
      '18,473',
      '27.8 metres',
      '1.39 times too tall',
      'Manly Wharf',
      'Kissing Point',
      'Thursday 28 January to Tuesday 2 February'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Greater Sydney (1GSYD): age bands, preschool attendance, children per family, median age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1GSYD' },
      { claim: 'ABS Schools methodology 2025: first year name and NSW compulsory school age.', url: 'https://www.abs.gov.au/methodologies/schools-methodology/2025' },
      { claim: 'NSW Department of Education, 2027 school calendar and school development days.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'OpenStreetMap via the Overpass API: amenity=ferry_terminal in the stated rectangle, snapshot 2026-10-07T16:38:38Z (ODbL).', url: 'https://overpass-api.de/api/interpreter' }
    ],
    rejectedClaims: [
      'Ferry routes, timetables or which wharves are in service: not read and not claimed.',
      'That 71 entries means 71 separate wharves: several are individual berths at one wharf.',
      'Bureau of Meteorology observations: the Bureau asked automated requests to stop (403), so no weather facts are used.',
      'Any count or ranking of Sydney schools: excluded by the cluster rules.',
      'School sector, income, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Transport for NSW, Sydney Ferries, the Scratch team, OpenStreetMap, the ABS or the NSW Department of Education.'
    ]
  }
};
