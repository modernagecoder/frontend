'use strict';
// Coding classes for kids in Canberra (cg- city page, Australia cluster Phase 6, kids intent only:
// Kindergarten to Year 8 and their parents). Teens and adults belong to vibe-coding-and-ai-agents-classes-in-canberra.
// Spine: choosing a pictogram key. From one OpenStreetMap Overpass query (snapshot 2026-10-07T12:59:01Z) for a
// rectangle we chose over Canberra (35.500 to 35.100 degrees south, 148.950 to 149.250 east): 769 features
// tagged leisure=playground and the place nodes for Canberra (place=city) and the towns of Belconnen, Woden,
// Tuggeranong and Gungahlin. Playgrounds within 2 km (straight line) of each node, counted by us on
// 7 October 2026: Canberra city node 6, Woden 25, Tuggeranong 26, Gungahlin 30, Belconnen 44. The nearest pair
// of nodes is 5.85 km apart (city to Woden), so the 2 km circles do not overlap. Pictogram arithmetic: one icon
// for 10 playgrounds gives 0.6, 2.5, 2.6, 3 and 4.4 icons; one icon for 5 gives 1.2, 5, 5.2, 6 and 8.8.
// Lesson family: pictogram scale, choosing a key and drawing part icons; screened free site-wide (the word
// "pictogram" appears only in course syllabi) on 7 October 2026.
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Australian Capital Territory (GCCSA
// 8ACTE): 453,890 people; median age 35; 119,752 families; 1.8 children in families with children; aged 0 to 4
// 26,660 (5.9%); 5 to 9 29,156 (6.4%; Australia 6.2%); 10 to 14 27,079 (6.0%); preschool 8,837. ABS Schools
// methodology 2025: kindergarten is the first year in the ACT; school compulsory from six. ACT term-date pages
// returned 403 and were not used. IANA: Australia/Sydney rules (the ACT link).
// Excluded by the cluster rules: income, rent, ancestry, birthplace, language, religion, health, school sector.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'CANBERRA KIDS', label: 'Kids in Canberra', blurb: 'Coding for Canberra children from Kindergarten to Year 8, drawing playgrounds around the town centres as a pictogram.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'coding-classes-for-kids-canberra',
  code: 'kcbr',
  accent: '#423680',
  accentRationale: 'Canberra kids: a muted lake indigo chosen by hand (HSV saturation 0.58, value 0.50), at least 10.8 RGB units from every accent in use and 8.2:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Canberra',
    eyebrow: 'Canberra, Australian Capital Territory, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Australian Capital Territory' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-australian-capital-territory', name: 'Australian Capital Territory' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Canberra, for kids',
  title: 'Coding Classes for Kids in Canberra | Kindergarten to Year 8',
  description: 'Live online coding classes for Canberra kids from Kindergarten to Year 8: Scratch, games, first Python and AI basics with a real teacher, in groups or one to one.',
  ogDescription: 'Coding for Canberra children, with a pictogram of playgrounds around the city and four town centres, and a lesson in choosing the key.',
  twitterDescription: 'Coding classes for Canberra kids, Kindergarten to Year 8, live online. First lesson free.',
  ogImageCourse: 'problem-solving-and-computational-thinking-for-kids',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Canberra Children',
    description: 'Level-matched block coding, Scratch, maths through coding and first Python for primary and lower secondary children across the ACT, taught live in English.'
  },

  h1: 'Coding classes for kids in Canberra',
  capsuleQ: 'What are the best coding classes for kids in Canberra?',
  capsule: 'For a Canberra child between Kindergarten and Year 8, a good choice pairs a live teacher with a few classmates at the same stage and projects about their own town centre. The ACT counted 29,156 children aged 5 to 9 in 2021. Lessons run online for ages 6 and up, and the first one is free.',
  lead: 'Canberra is a city of town centres, and a child can see that in one picture. Count the playgrounds OpenStreetMap shows within two kilometres of each centre, then draw them as a pictogram, one icon for every ten playgrounds. Belconnen gets four and a bit icons, the city centre barely half of one. The drawing looks simple until a child has to decide what to do with that half icon, or what happens if one icon means five instead of ten. Choosing the key is the real lesson, and our young Canberra coders make the computer draw both versions.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child in Canberra.',

  picks: {
    eyebrow: 'Course picks for Canberra kids',
    h2: 'First courses that suit a Canberra child',
    intro: 'Picked by age and by what the child likes doing. The free first lesson confirms the right level.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 6 to 9', note: 'Puzzles about patterns, counting and keys, the kind of thinking a pictogram needs before any code.' },
      { course: 'scratch-programming-complete-course', band: 'Ages 7 to 11', note: 'Scratch projects where a sprite stamps one icon per ten items and works out how much of the last icon to draw.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 14', note: 'Division, remainders and fractions turned into drawings and charts with Python.' },
      { course: 'ai-literacy-for-kids-course', band: 'Ages 8 to 14', note: 'How AI tools make charts and claims, and how a child can check them, without adult accounts.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Canberra children in the Census',
      h2: 'A young territory with plenty of primary-age children',
      intro: 'ABS 2021 Census QuickStats for the Australian Capital Territory, which takes in Canberra. Numbers appear as published, never added together by us.',
      body: [
        { kind: 'table', caption: 'ACT children in the 2021 Census (ABS QuickStats)', head: ['Count', 'ACT value'], rows: [
          ['Aged 0 to 4', '26,660, 5.9%'],
          ['Aged 5 to 9', '29,156, 6.4% (Australia 6.2%)'],
          ['Aged 10 to 14', '27,079, 6.0%'],
          ['At preschool', '8,837'],
          ['Families', '119,752'],
          ['Median age', '35']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A young median age', p: 'Half of the ACT\'s residents were 35 or younger at the 2021 Census, and children aged 5 to 9 made up 6.4% of the population against 6.2% nationally.' },
          { h3: 'Kindergarten first', p: 'The ACT calls its first school year Kindergarten, as New South Wales does. Most of our Canberra beginners are six and in Kindergarten or Year 1.' },
          { h3: 'Two children per family', p: 'ACT families with children had 1.8 on average, so siblings often learn with us together, each in the group their skill puts them in.' }
        ] },
        { kind: 'p', text: 'A rule we teach alongside the code: census age bands are each adjusted to protect privacy, so they need not sum to the territory total. We print what was published and never build a total from the bands.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How many playgrounds surround each Canberra town centre, and how should we draw them?',
      intro: 'Playgrounds counted within two kilometres of the city centre and four town centres, then drawn as a pictogram with two different keys.',
      body: [
        { kind: 'table', caption: 'Playgrounds within 2 km of each centre, with two pictogram keys (our calculation from OpenStreetMap, 7 October 2026)', head: ['Centre', 'Playgrounds', 'Icons if 1 icon = 10', 'Icons if 1 icon = 5'], rows: [
          ['City centre (the Canberra city point)', '6', '0.6', '1.2'],
          ['Woden', '25', '2.5', '5'],
          ['Tuggeranong', '26', '2.6', '5.2'],
          ['Gungahlin', '30', '3', '6'],
          ['Belconnen', '44', '4.4', '8.8']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count inside a circle', p: 'For each centre the program measures the distance to all 769 playgrounds in our Canberra rectangle and counts those within 2,000 metres. No circle overlaps another, because the closest two centres are 5.85 kilometres apart.' },
          { h3: '2. Divide by the key', p: 'With one icon for ten playgrounds, Woden needs 25 divided by 10, which is 2.5 icons: two whole icons and half of a third. The whole number and the remainder come from two different sums.' },
          { h3: '3. Draw the part icon', p: 'Scratch can stamp whole icons in a loop, then stamp a cropped icon for the leftover part. Getting 0.6 of an icon to look like 0.6 is harder than it sounds.' }
        ] },
        { kind: 'callout', h3: 'One chart, two stories', p: 'With one icon for ten, the city centre is a sliver and Belconnen has four and a bit icons. With one icon for five, Woden and Tuggeranong look almost identical at five and five and a bit, and Belconnen needs nearly nine. Same data, different picture. Children learn to write the key on every pictogram and to choose one that makes the differences readable without hiding small numbers.' },
        { kind: 'p', text: 'We made every count ourselves from the map data as it stood on 7 October 2026. Volunteers maintain that map, so a playground can be absent or out of date. The centre points are the place markers in the map data, the circles are straight-line distances rather than walking routes, and the rectangle is our own choice. We draw no conclusion about why one area has more mapped playgrounds than another.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'How children learn it',
      h2: 'Pictures that count, from sticker charts to Python',
      intro: 'A pictogram is one of the first charts a child meets at school, and one of the friendliest to program.',
      body: [
        { kind: 'table', caption: 'Pictograms and code, by year level', head: ['Year level', 'In the lesson', 'What sticks'], rows: [
          ['Kindergarten to Year 2', 'Sticks one sticker per playground on a chart, then groups them in fives', 'Counting, grouping and what a key means'],
          ['Years 3 to 6', 'Builds a Scratch program that stamps icons in rows and handles the leftover part', 'Loops, division and remainders on screen'],
          ['Years 7 and 8', 'Writes Python that counts playgrounds in circles and draws the pictogram with any key', 'Distances, functions with a key argument and fair charts']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The key is an input', p: 'Older children make the key a variable, so one program can redraw the chart for one icon equals ten, five or two. Changing one number and watching the picture change is a powerful moment.' },
          { h3: 'Rounding has a cost', p: 'Rounding 0.6 icons to 1 makes the city centre look like it has 10 playgrounds. Rounding it to 0 makes six playgrounds vanish. Children discuss which mistake is worse.' },
          { h3: 'Label the zero', p: 'A centre with no icons is not the same as a centre with no data. Good charts say which is which, and children add a note when a count is very small.' }
        ] },
        { kind: 'p', text: 'This project is our own. Neither the ACT Government nor OpenStreetMap nor the ABS is involved with it or has given it any approval. The ABS owns the census figures; the playground counts and pictograms are our calculations.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'School in the ACT',
      h2: 'Kindergarten to Year 8, planned around Canberra families',
      intro: 'Lessons are arranged around the ACT school year and family routines rather than a fixed national calendar.',
      body: [
        { kind: 'table', caption: 'ACT school start, from the ABS Schools methodology (2025)', head: ['Point', 'What the ABS records'], rows: [
          ['Compulsory school', 'Children must attend school from the age of six'],
          ['Name of the first year', 'Kindergarten, as in New South Wales'],
          ['Our youngest live learners', 'Age 6, usually Kindergarten or Year 1'],
          ['Term dates', 'Not printed here: the ACT education pages blocked our automated reading']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Your term dates, your plan', p: 'Families share their school\'s term and holiday dates in the first lesson, and we plan breaks around them so no lesson is missed by surprise.' },
          { h3: 'Holiday projects', p: 'School holidays suit a slightly bigger project, such as redrawing the playground pictogram with icons the child designs.' },
          { h3: 'Year 7 and 8 load', p: 'High school brings more homework. We keep a steady weekly slot so coding stays something to look forward to.' }
        ] },
        { kind: 'spec', title: 'Why we left the term dates out', p: 'We only print dates we have read at the official source. The ACT pages refused our automated request, and we do not get around that kind of block, so this page asks families for their dates instead of guessing them.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From stickers on a chart to drawing with code',
    intro: 'Age bands are a guide. The free lesson decides where to begin.',
    cols: [
      { band: 'Ages 6 to 7', h3: 'Counting and patterns', p: 'Sequencing, grouping and simple loops, with plenty of predicting and checking.', courses: ['kids-coding-blocks-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 8 to 10', h3: 'Scratch charts and games', p: 'Stamping, counting and scoring, including the pictogram with part icons.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 10 to 12', h3: 'Maths made visible', p: 'Division, fractions and measurement turned into programs that draw.', courses: ['maths-through-coding', 'mental-maths-mastery-kids'] },
      { band: 'Ages 12 to 14', h3: 'First Python', p: 'Lists, distances and charts on real Canberra data.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool can draw a chart in seconds. Why should a Canberra child learn to make one?',
    intro: 'Because the tool picks the key, the rounding and the scale for you, and a child who has never chosen them will not notice the choice.',
    p1: 'Ask an AI tool to chart these playgrounds and you will get something neat. Whether the city centre shows as nothing, half an icon or a whole one depends on decisions the tool made quietly. A child who has written the division and stamped the part icon by hand sees those decisions immediately and asks about them.',
    p2: 'That is what we want Canberra children to carry away: every chart is a set of choices, and someone made them. When AI appears in our Canberra lessons it is suited to the age of the child and a teacher is right there; the habit we drill is asking what a chart leaves out as well as what it shows.',
    closer: 'Learning to code still matters in 2026 because it lets a child make the picture, not just accept it. A Canberra child who has redrawn one pictogram with two keys has already learned that.',
    blogAnchor: 'why coding still matters for children'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Gungahlin, Woden or Tuggeranong, one lesson for all',
    intro: 'Canberra spreads across its town centres, and an online lesson saves the drive between them.',
    cells: [
      { h3: 'At home', p: 'A laptop or desktop with working sound is enough, plus a parent nearby for the first session.' },
      { h3: 'ACT year names', p: 'Teachers use the year names Canberra children use, starting with Kindergarten.' },
      { h3: 'A trial that teaches', p: 'The first lesson is a real lesson. Afterwards you hear the level, course and time we suggest, and no card is ever requested.' },
      { h3: 'Groups set by skill', p: 'Between five and ten young coders who are ready for the same step, with private lessons as the alternative.' },
      { h3: 'Twice a week, typically', p: 'About eight sessions a month at a fixed time that fits after school.' },
      { h3: 'Teachers on India time', p: 'Through winter the ACT runs 4.5 hours in front of India time, and 5.5 hours in front once daylight saving begins, which puts a Canberra after-school lesson in our teachers\' late morning or early afternoon.' }
    ],
    spec: { title: 'Clock changes, our job', p: 'The ACT changes its clocks in early October and early April and India does not. We confirm every lesson time in Canberra time, so families never have to recalculate.' }
  },

  fees: {
    h2: 'What coding classes cost for Canberra kids',
    intro: 'Three prices, nothing more.',
    first: 'A first lesson without charge that ends with a level, a course and a time.',
    group: 'About eight lessons a month alongside five to ten children at the same level.',
    private: 'About eight lessons a month with one teacher and your child.',
    closer: 'Every family beyond India is billed in US dollars at one flat rate, whichever town centre is closest to home. You are only billed after the trial, once the course and slot feel right, and the pricing page sets out holidays, missed lessons and format changes.'
  },

  reviewsH2: 'What families say on Google, exactly as written',

  book: {
    h2: 'Tell us about your child',
    intro: 'A Kindergarten child might begin by grouping pictures, a Year 4 child by stamping a Scratch pictogram, and a Year 8 student by counting playgrounds in Python. Let us know the year level and what your child enjoys.',
    success: 'Thank you. We will be in touch soon about a class for your Canberra child.'
  },

  faq: {
    h2: 'Questions from Canberra parents',
    intro: 'What Canberra families ask before booking.',
    items: [
      { q: 'What age can my child start coding classes in Canberra?', a: 'Live classes begin at age 6, usually in Kindergarten or Year 1. Young learners start with blocks and pictures and move on to typing when ready.' },
      { q: 'What is a pictogram?', a: 'A pictogram is a chart that uses small pictures, or icons, to show amounts, with a key saying how much each icon stands for. Part icons show amounts that do not fill a whole one.' },
      { q: 'What is the Canberra playground pictogram project?', a: 'Children count the playgrounds OpenStreetMap shows within 2 kilometres of the city centre and of Woden, Tuggeranong, Gungahlin and Belconnen (6, 25, 26, 30 and 44), then program pictograms with one icon for 10 and for 5 playgrounds.' },
      { q: 'Why does the key matter so much?', a: 'Because it changes the picture without changing the data. With one icon for ten, the city centre is just over half an icon; with one icon for five it is more than one. Children learn to choose a key that is honest and to show it.' },
      { q: 'Do you plan lessons around the ACT school year?', a: 'Yes. We use ACT year names from Kindergarten to Year 8, and families tell us their term and holiday dates so lessons fit around them.' },
      { q: 'When are lessons for Canberra children?', a: 'Weekday afternoons or weekends, agreed in the free lesson and always confirmed in Canberra time.' },
      { q: 'How do you keep children safe in online lessons?', a: 'A teacher leads and watches every live session, groups are small, children never need accounts on adult AI services, and parents can sit in whenever they wish.' },
      { q: 'Is there a Modern Age Coders centre in Canberra?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do coding classes for Canberra kids cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Canberra families',
    html: 'Canberra teenagers and adults have their own page: <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-canberra">vibe coding and AI agents classes in Canberra</a>, and the territory picture is on <a class="cg-inline-link" href="/coding-and-ai-classes-in-australian-capital-territory">coding and AI classes in the ACT</a>. Families of younger learners may also like <a class="cg-inline-link" href="/online-coding-classes-for-kids-australia">our national guide to coding for children</a> and <a class="cg-inline-link" href="/problem-solving-through-coding-australia">problem solving through coding</a>. Everything else is linked from the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Canberra and the ACT',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-canberra', label: 'Canberra, teens and adults' },
    { href: '/coding-and-ai-classes-in-australian-capital-territory', label: 'Australian Capital Territory' },
    { href: '/coding-classes-for-5-and-6-year-olds-australia', label: 'Ages 5 and 6' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-kcbr .cg-hero h1 { font-weight: 800; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-kcbr .cg-capsule { border-bottom: 4px solid var(--cg-accent); padding-bottom: 1rem; }
.cg-root.cg-kcbr .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-kcbr .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.01em; }
.cg-root.cg-kcbr .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.8rem); }
.cg-root.cg-kcbr .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-kcbr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kcbr .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-kcbr .cg-callout { border-left-width: 5px; }
.cg-root.cg-kcbr .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.5rem); }
`,

  dossier: {
    curriculumAuthority: 'Australian Capital Territory, ABS Census 2021 QuickStats, GCCSA 8ACTE (read 7 October 2026): 453,890 people; median age 35; 119,752 families; average number of children per family, for families with children, 1.8; age 0 to 4: 26,660 (5.9 percent); age 5 to 9: 29,156 (6.4 percent; Australia 6.2); age 10 to 14: 27,079 (6.0 percent); Preschool: 8,837 (6.0 percent of people attending an educational institution). ABS Schools methodology 2025: Pre-Year 1 known as kindergarten in the Australian Capital Territory and New South Wales; Australian Capital Territory - children must attend school from the age of six. IANA tz database: Australia/ACT links to Australia/Sydney, UTC+10 and UTC+11; Asia/Kolkata UTC+5:30.',
    localProject: 'Pictogram of Canberra playgrounds. One OpenStreetMap Overpass query, snapshot 2026-10-07T12:59:01Z, rectangle 35.500 to 35.100 degrees south and 148.950 to 149.250 degrees east: 769 leisure=playground features; place nodes Canberra (city, -35.2975906, 149.1012676), Woden (town, -35.3498582, 149.0940482), Tuggeranong (town, -35.4209771, 149.0921341), Gungahlin (town, -35.1788782, 149.123653), Belconnen (town, -35.2274338, 149.0431454). Haversine counts within 2,000 m: Canberra 6, Woden 25, Tuggeranong 26, Gungahlin 30, Belconnen 44 (within 3,000 m: 14, 48, 62, 66, 88, not used). Minimum centre separation 5,849 m (Canberra to Woden). Icons at 1 icon = 10: 0.6, 2.5, 2.6, 3.0, 4.4; at 1 icon = 5: 1.2, 5.0, 5.2, 6.0, 8.8. Lesson family: pictogram key choice, quotient and remainder, part icons.',
    requiredMentions: [
      '26,660',
      '27,079',
      '8,837',
      'Gungahlin, Woden or Tuggeranong',
      '769 playgrounds',
      '5.85 kilometres',
      'one icon for ten',
      'Tuggeranong',
      'Belconnen gets four and a bit icons'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Australian Capital Territory (8ACTE): people, median age, families, children per family, age bands, preschool attendance.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/8ACTE' },
      { claim: 'ABS Schools methodology 2025: first year name and ACT compulsory school age.', url: 'https://www.abs.gov.au/methodologies/schools-methodology/2025' },
      { claim: 'OpenStreetMap via the Overpass API: leisure=playground features and place nodes in the stated rectangle, snapshot 2026-10-07T12:59:01Z (ODbL).', url: 'https://overpass-api.de/api/interpreter' },
      { claim: 'IANA time zone database, Australia/ACT (Australia/Sydney rules) and Asia/Kolkata offsets.', url: 'https://www.iana.org/time-zones' }
    ],
    rejectedClaims: [
      'ACT school term dates: education.act.gov.au and act.gov.au returned 403 to automated requests and were not circumvented, so no term dates are printed.',
      'ACT Board of Senior Secondary Studies pages returned 403 and were not used.',
      'Bureau of Meteorology observations: the Bureau asked automated requests to stop (403), so no weather facts are used.',
      'Any reason why one town centre has more mapped playgrounds than another: not studied, so not claimed.',
      'School sector, income, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the ACT Government, OpenStreetMap or the ABS.'
    ]
  }
};
