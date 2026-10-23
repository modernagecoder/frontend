'use strict';
// Etobicoke, Toronto (cg- city page, Canada cluster Wave 2, row 152). Brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Angle: coding classes for kids aged 6 to 12 (slug coding-classes-for-kids-in-). Spine: Ontario Grade 3 coding (repeating
// events, loops, the decade idea in Grade 3 number sense), a public-art-by-decade project on the City of Toronto Public Art
// file filtered to the three Etobicoke wards, and the CEMC Beaver Computing Challenge ordering deadline and 2025 figures.
// Links up to /coding-and-ai-classes-in-toronto and sideways to the Scarborough and North York kids pages (rows 150, 151).
// Sources, read raw on 22 October 2026. Curriculum facts from keyword-research-2026-09/ca/src/ontario/api-math-g3-strands.txt
// (Ontario DCP content API; stray spaces before commas dropped in quotes) and facts-schools-contests.md:
//  - Grade 3 C3.1 "including code that involves sequential, concurrent, and repeating events"; strand overview "Students will
//    write code to perform a repeating operation, such as a repeating number pattern."; example "Set value to 0. Repeat 10
//    times: Add 2 to Value, Output value." with output 2 to 20; teacher note "Loops can also help to emphasize the repetitive
//    properties of some mathematical tasks and concepts."; context "two characters mirroring one another's patterns of
//    movement" (unplugged activity, curly apostrophe in source); number sense note "Each decade repeats the 0 to 9 counting
//    sequence."
//  - EQAO Grade 3 window "May 4 - June 8, 2027" (en dash in source).
//  - CEMC BCC: ordering deadline "Monday, October 26, 2026"; contest "Monday, November 9, 2026 to Friday, November 20, 2026";
//    2025 Grade 5/6 contestants 14 260, mean 37.22 out of 60 (table values, not summed with other levels); "Our contests are
//    not tests or exams. There is no passing or failing score."; "all students must participate through their school."
//  - Place facts (Etobicoke's own, 8+): City Wards file names ward 1 Etobicoke North, ward 2 Etobicoke Centre, ward 3
//    Etobicoke-Lakeshore; the Public Art file has 25 rows in those wards (ward 3: 15, ward 1: 7, ward 2: 3, our count) and
//    spells ward 2 "Etobicoke-Centre" and one ward 3 row "Etobicoke-Lakeshore (3)"; package notes "This map shows over 400
//    works of public art throughout the City of Toronto." from two City programs (Public Art & Monuments Collection, Percent
//    for Public Art Program); license_title open-government-licence-toronto; refresh "As available", last 2026-05-13;
//    area codes 416, 437, 647, 942 (facts-geo.md section 4); Eastern time, UTC-5 from 1 November 2026, UTC-4 from 14 March
//    2027 (IANA tzdb 2026e). No populations. No artist names, titles, descriptions or commissioning companies printed.
//  - Licence: Open Government Licence - Toronto; attribution "Contains information licensed under the Open Government
//    Licence - Toronto" (en dash in source). First choice, Street Tree Data, returned HTTP 500/502: not used (see
//    FAILED-502-street-trees.txt).
// Our own calculations (art_decades.py and page_script.py, python -I; outputs art_decades.out.txt, page_script.out.txt in
// ca/src-pilots/coding-classes-for-kids-in-etobicoke-toronto/): 459 rows in the file; 25 in wards 1 to 3 by ward number, 21
// if matched on the ward file's spelling of the names; by decade 1930s 1, 1950s 1, 1960s 3, 1990s 6, 2000s 3, 2010s 2,
// 2020s 8, unknown 1; oldest 1930, newest 2024; 8 since 2020, 11 before 2000; types Sculpture 20, Architecture / Landscape 2,
// Mural / Painting 2, Multidisciplinary 1; programs City-Owned collection 13, Private Developer Program 11, Other 1; medium
// words (lower-cased, a row can hold several) steel 9, bronze 5, masonry 3, aluminum 3, stone 2, wood 1, glass 1; 23
// distinct raw medium strings, 21 after lower-casing; 36 rows citywide carry a ward number in brackets. India time ours.
// Lesson family: bucketing numbers with integer division, matching on a code rather than a name, a text bar chart.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  '',
  'decades = {}',
  'with open("public-art.csv", encoding="utf-8") as f:',
  '    for art in csv.DictReader(f):',
  '        if art["WARD"] in ("1", "2", "3"):',
  '            year = art["YEAR"]',
  '            if year.isdigit():',
  '                label = str(int(year) // 10 * 10) + "s"',
  '            else:',
  '                label = "unknown"',
  '            decades[label] = decades.get(label, 0) + 1',
  '',
  'for label in sorted(decades):',
  '    print(label, "#" * decades[label])'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'ETOBICOKE', label: 'Etobicoke', blurb: 'Coding for Etobicoke children aged 6 to 12: Grade 3 repeating patterns, a public art by decade project on City of Toronto data, and the Beaver Computing Challenge.' },
  market: CA,
  slug: 'coding-classes-for-kids-in-etobicoke-toronto',
  code: 'ket',
  accent: '#1B2852',
  accentRationale: 'Etobicoke kids page: a deep lake navy, #1B2852, allocated to this row by the Canada group so it keeps 6 RGB units from every site accent and 14 from other Canada accents; contrast 13.46 on the paper #FBF8F2, 12.66 on #F5F1E8 and 11.58 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Etobicoke',
    eyebrow: 'Etobicoke, Toronto, Ontario',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Toronto' },
      { type: 'AdministrativeArea', name: 'Ontario' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-canada', name: 'Canada' },
    { slug: 'coding-classes-in-ontario', name: 'Ontario' },
    { slug: 'coding-and-ai-classes-in-toronto', name: 'Toronto' }
  ],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Toronto', href: '/coding-and-ai-classes-in-toronto' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Etobicoke',
  title: 'Coding Classes for Kids in Etobicoke | Live Online, Ages 6 to 12',
  description: 'Coding for Etobicoke kids aged 6 to 12, taught live online: Ontario Grade 3 loops, a public art by decade project on City data, and the Beaver contest.',
  ogDescription: 'Ontario Grade 3 asks children to code repeating patterns. See how Etobicoke kids can turn the City&rsquo;s public art list into a decade chart, and how our live classes help.',
  twitterDescription: 'Live online coding for Etobicoke children aged 6 to 12, starting from the patterns Grade 3 teaches.',
  ogImageCourse: 'kids-ai-web-development-course',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Etobicoke Children Aged 6 to 12',
    description: 'Patient live online coding for Etobicoke children from Grade 1 to Grade 7: repeating patterns in Scratch, simple web pages and apps, then typed Python with a real City of Toronto file, taught in English in a batch of fifteen to twenty or one to one.'
  },

  h1: 'Coding classes for kids in Etobicoke',
  capsuleQ: 'Can an Etobicoke child aged 6 to 12 take coding classes with a live teacher?',
  capsule: 'Yes. Modern Age Coders gives Etobicoke children aged 6 to 12 live online coding lessons, either one to one or in a group of fifteen to twenty. Most start with Scratch Coding for Kids, web pages or app building; from about 9 they move to Python and AI for Kids. A real teacher leads every class, and the first lesson is free.',
  lead: 'Patterns are the heart of Grade 3 math in Ontario, and coding is one of the ways children are asked to build them. A loop that adds 2 ten times is a skip-counting pattern a child can watch grow. In Etobicoke, as across the province, that happens inside the math timetable, between place value and fractions. Our classes give the pattern more room: a child sees it on paper, writes it as blocks, then makes it do something bigger. Below you will find the Grade 3 expectations in the ministry&rsquo;s own words, a project that turns the City of Toronto&rsquo;s public art list for the three Etobicoke wards into a decade chart, and what to know about this year&rsquo;s Beaver Computing Challenge.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child in Etobicoke.',

  picks: {
    eyebrow: 'Courses for Etobicoke children',
    h2: 'Four first courses Etobicoke families choose',
    intro: 'Each fits a different age and temperament; the free class tells us which.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 9', note: 'Repeat blocks, patterns and animated stories, the Grade 3 idea of repeating events made visible, finished as games a child can share.' },
      { course: 'kids-ai-web-development-course', band: 'Ages 8 to 12', note: 'Real web pages built by hand: headings, pictures and colours, a good home for a gallery of a child&rsquo;s own art or the decade chart below.' },
      { course: 'block-coding-app-development-masterclass', band: 'Ages 7 to 12', note: 'Simple phone-style apps made from blocks: buttons, screens and counters, for children who want to make something they can tap.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Typed Python with turtle art, games and small data projects, including the public art file, for children ready to spell their code.' }
    ]
  },

  sections: [
    {
      id: 'grade3', tint: '', eyebrow: 'Grade 3 coding in Etobicoke',
      h2: 'Repeating patterns: the Ontario Grade 3 coding an Etobicoke child meets',
      intro: 'Etobicoke public schools teach the Ontario curriculum. The quotes below come from the Grade 3 math expectations and notes, read from the ministry&rsquo;s curriculum content service on 22 October 2026; the second column is our approach.',
      body: [
        { kind: 'align', rows: [
          { code: 'Grade 3, overview', req: 'The ministry&rsquo;s summary of the year: &ldquo;Students will write code to perform a repeating operation, such as a repeating number pattern.&rdquo;', ours: 'We start where Grade 3 already is: counting by 2s, 5s and 10s. A child says the pattern out loud, then builds the loop that says it for them.' },
          { code: 'Grade 3, C3.1', req: 'Code that involves &ldquo;sequential, concurrent, and repeating events&rdquo;, now with repeating added to the list.', ours: 'Repeat is the new block this year. We set one challenge in every lesson: find the part of your program that happens more than once and put a loop around it.' },
          { code: 'Grade 3, example', req: 'A program in the notes: &ldquo;Set value to 0. Repeat 10 times: Add 2 to Value, Output value.&rdquo; It prints 2, 4, 6 and so on up to 20.', ours: 'Children run it, then change the 2 to a 5 and the 10 to a 4 and predict the last number before pressing go. Guessing first, checking second, is the habit we want.' },
          { code: 'Grade 3, teacher notes', req: '&ldquo;Loops can also help to emphasize the repetitive properties of some mathematical tasks and concepts.&rdquo;', ours: 'We use loops to show why multiplication is repeated addition: four loops of 3 steps land the sprite on 12, every time.' }
        ] },
        { kind: 'p', text: 'The ministry also suggests unplugged coding, away from the screen, such as &ldquo;two characters mirroring one another&rsquo;s patterns of movement&rdquo;. We use the same idea at the start of class: one child calls out turns and claps, the other follows, and both find out quickly how exact an instruction has to be. The Grade 3 number strand has a line that ties straight into the project below: &ldquo;Each decade repeats the 0 to 9 counting sequence.&rdquo; Grouping years into decades is exactly that pattern, used on real dates. For the years before and after Grade 3, our <a class="cg-inline-link" href="/ontario-coding-curriculum-grades-1-to-8">Ontario coding guide for Grades 1 to 8</a> walks through each grade.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The Grade 3 EQAO year', p: 'Grade 3 is an EQAO year. EQAO lists 4 May to 8 June 2027 for the Reading, Writing and Mathematics assessment. Our classes are not test coaching, but patterns and number sense help with both.' },
          { h3: 'Short, hands-on lessons', p: 'Eight-year-olds learn by doing. Our Grade 3 lessons switch every few minutes between talking, trying and fixing, so attention never has time to drift far.' },
          { h3: 'Reading still growing', p: 'At this age reading speed varies a lot, so we keep instructions spoken and visual. Blocks carry short words, and the teacher reads them aloud whenever a child asks.' }
        ] },
        { kind: 'callout', h3: 'Our place beside school', p: 'Modern Age Coders teaches outside school hours and gives no school marks. It has no connection with the Ontario Ministry of Education, EQAO, any Toronto school board or the City of Toronto.' }
      ]
    },
    {
      id: 'publicart', tint: 'deep', eyebrow: 'Etobicoke data project',
      h2: 'When did Etobicoke get its public art? A decade chart from the City&rsquo;s own list',
      intro: 'The City of Toronto publishes its public art inventory as open data: artworks owned by the City and works delivered through its percent-for-art program with private developers. Our older kids keep the rows in wards 1, 2 and 3, the three wards whose names begin with Etobicoke, and count the works by decade. That ward choice is ours, and every number below is our own count from the file downloaded on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Public artworks in Toronto wards 1, 2 and 3 (Etobicoke North, Etobicoke Centre, Etobicoke-Lakeshore) by the decade in the YEAR column, our count from the City of Toronto Public Art file', head: ['Decade', 'Works in the file', 'As a text bar'], rows: [
          ['1930s', '1', '#'],
          ['1950s', '1', '#'],
          ['1960s', '3', '###'],
          ['1990s', '6', '######'],
          ['2000s', '3', '###'],
          ['2010s', '2', '##'],
          ['2020s', '8', '########'],
          ['Year unknown', '1', '#']
        ] },
        { kind: 'p', text: 'The file holds 459 rows for the whole city; 25 of them sit in the three Etobicoke wards, 15 in ward 3, 7 in ward 1 and 3 in ward 2. The newest work is dated 2024 and the oldest 1930, and the 2020s already have more works than any earlier decade. Here is the program an 11-year-old writes, using only the Python standard library:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Decades by division', p: 'Integer division throws away the remainder: 1997 // 10 is 199, and times 10 is 1990. Adding an s gives the label. It is the Grade 3 decade pattern, done by a computer.' },
          { h3: 'When the year is missing', p: 'One row says unknown instead of a year. Calling int on it would crash the program, so isdigit checks first, and the row lands in its own group rather than vanishing.' },
          { h3: 'A chart from symbols', p: 'Multiplying a string repeats it, so "#" * 8 prints eight marks. A child sees the 2020s bar is longest without any charting library at all.' }
        ] },
        { kind: 'callout', h3: 'Why we match the number, not the name', p: 'Our first try matched the ward names exactly as the City&rsquo;s ward file spells them and found 21 works. Four were missing. The art file writes ward 2 as Etobicoke-Centre, with a hyphen, and one ward 3 row adds (3) to the name. Matching the WARD number instead finds all 25. Across the city, 36 rows put a number in brackets after the ward name. Real files are typed by people, and a good program trusts the code column over the label.' },
        { kind: 'p', text: 'There is more for a curious class. Sculptures make up 20 of the 25, with two murals or paintings, two pieces of architecture or landscape and one multidisciplinary work. 13 belong to the City&rsquo;s own collection and 11 came through the developer program. Searching the materials column, after making everything lower case, finds steel in 9 rows and bronze in 5; a single row can name more than one material, so those numbers overlap and must not be added together. The package notes say the inventory &ldquo;shows over 400 works of public art throughout the City of Toronto&rdquo;, which matches the 459 rows we downloaded. We print counts, decades and materials only, never artists, titles or descriptions. Contains information licensed under the Open Government Licence - Toronto (<a class="cg-inline-link" href="https://open.toronto.ca/open-data-licence/">licence terms</a>, <a class="cg-inline-link" href="https://open.toronto.ca/dataset/public-art/">Public Art dataset</a>).' }
      ]
    },
    {
      id: 'beaver', tint: 'tint', eyebrow: 'Contest season',
      h2: 'The Beaver Computing Challenge in November 2026: what Etobicoke parents should know this week',
      intro: 'The Beaver Computing Challenge (BCC) from CEMC at the University of Waterloo is a logic contest with a level for Grade 6 and younger. It runs in schools, so timing depends on a school ordering it. Details are CEMC&rsquo;s, read on 22 October 2026.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The deadline is close', p: 'CEMC gives Monday 26 October 2026 as the ordering deadline for this year&rsquo;s BCC, which runs from 9 to 20 November 2026. A school that has not ordered by then may miss this year, so a quick question to the teacher now is worth it.' },
          { h3: 'Last year&rsquo;s numbers', p: 'CEMC reports 14 260 contestants at the Grade 5/6 level in 2025, with a mean score of 37.22 out of 60. It is a contest many children write, and an average score sits well below full marks.' },
          { h3: 'Not a test', p: 'CEMC puts it plainly: &ldquo;Our contests are not tests or exams. There is no passing or failing score.&rdquo; We tell children the same: the point is to enjoy hard puzzles, not to be perfect.' }
        ] },
        { kind: 'p', text: 'Entry goes through school, since CEMC says all students must participate through their school. Most Etobicoke children in our Grade 3 and 4 classes are still a year or two from the Grade 5/6 level, and that is fine: a child who has spent those years predicting what a loop will print is already practising the reasoning the BCC rewards. We teach with puzzles we write ourselves, labelled as ours, and send families to CEMC for past contests. One of ours for an eight-year-old: a sprite starts at 0 and repeats &ldquo;add 3&rdquo; seven times; where does it stop, and how many times would it need to repeat to pass 30? The <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Computing Challenge guide</a> covers every level, and the <a class="cg-inline-link" href="/canada-math-and-coding-contest-calendar">Canada contest calendar</a> lists the rest of the year. Modern Age Coders has no tie to CEMC or the University of Waterloo.' }
      ]
    },
    {
      id: 'hours', tint: '', eyebrow: 'Class times',
      h2: 'Etobicoke class times, the 1 November clock change, and India time',
      intro: 'Etobicoke keeps Eastern time. Clocks go back on 1 November 2026 and forward on 14 March 2027, while India&rsquo;s clock never moves, so the gap between the two changes by an hour. Our conversions, from the IANA time zone offsets (release 2026e):',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Weekday, 5:30 pm', p: 'Until 1 November 2026 (Eastern at UTC-4) that is 3:00 am the next day in India. From 1 November to 14 March 2027 (UTC-5) it is 4:00 am the next day.' },
          { h3: 'Sunday, 11:00 am', p: 'Until 1 November 2026 that is 8:30 pm the same day in India. During the winter months it is 9:30 pm, then 8:30 pm again from 14 March 2027.' },
          { h3: 'What we send', p: 'Every Etobicoke family gets times in Eastern. Ahead of each change we confirm the next class again, because a child logging in an hour off is a lesson nobody needs.' }
        ] },
        { kind: 'p', text: 'Etobicoke phone numbers use the City of Toronto area codes, 416 and 647, with 437 and 942 in the same area. Enter the ten digits in the form; the +1 is filled in already. For the full set of 2026 clock changes across Canada, including the provinces that stopped changing their clocks this year, see <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones in 2026</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first pattern at 6 to a data chart at 12',
    intro: 'Ages are rough guides; the free class places each child by what they can already do.',
    cols: [
      { band: 'Ages 6 and 7', h3: 'First sequences', p: 'Step-by-step block programs and unplugged games where a partner follows the instructions exactly.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 8 and 9', h3: 'Loops and patterns', p: 'Repeat blocks, skip-counting programs and animated stories, the core of Grade 3 coding.', courses: ['scratch-programming-complete-course', 'block-coding-app-development-masterclass'] },
      { band: 'Ages 10 and 11', h3: 'Pages and Python', p: 'Hand-built web pages and typed Python, with the public art decade chart as a first real data set.', courses: ['kids-ai-web-development-course', 'python-ai-kids-masterclass'] },
      { band: 'Age 12', h3: 'Own projects', p: 'Bigger programs the child designs, plus a teacher-led look at how AI systems learn from examples.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Does an Etobicoke child still need to code if AI can do it?',
    intro: 'Yes, because a child who can code can tell when the computer is wrong.',
    p1: 'The public art project shows it. A program that matched ward names would have reported 21 works and looked perfectly confident. Only someone who checked the result against the ward numbers noticed four were missing. AI tools make that kind of quiet mistake too, and the defence is a person who knows what the right answer should look like.',
    p2: 'We do not put adult chatbots in front of children under 13. Instead they learn, through teacher-led activities, how AI systems learn from examples and why they get things wrong. Most of each lesson is the child thinking: breaking a problem into steps, trying one, and checking whether it worked.',
    closer: 'Grade 3 asks children to spot what repeats in a pattern, and seeing structure for yourself is the skill that keeps a person in charge of the tools.',
    blogAnchor: 'the case for coding in an AI world'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online classes for families across Etobicoke',
    intro: 'From the lakeshore wards to Etobicoke North, every child joins from home, so there is no drive along the Queensway or across to a centre after school.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Batch or private', p: 'A batch of fifteen to twenty children at one level, or a teacher for your child alone if they need a slower start or a faster track.' },
      { h3: 'Grouped carefully', p: 'Children learn with others of a similar age and stage, and move up when they are ready rather than at a fixed date.' },
      { h3: 'Parents in the loop', p: 'Younger children often have a parent nearby, and you are welcome to watch. After each stage the teacher tells you what was built and what is next.' },
      { h3: 'Equipment', p: 'A laptop or desktop, keyboard and mouse, sound and a dependable connection. A tablet is fine for watching but hard work for coding.' },
      { h3: 'Free first lesson', p: 'Your child takes a full lesson, and you get our suggestion for a course and level at the end. No card details are needed.' }
    ],
    spec: { title: 'No Etobicoke centre', p: 'Modern Age Coders has no building in Etobicoke or anywhere in Toronto, and does not pretend to. All teaching is live and online, from India, by the teachers who also teach children in other countries.' }
  },

  fees: {
    h2: 'Coding class fees for Etobicoke families',
    intro: 'Three options, and the currency appears beside each fee.',
    first: 'One complete live lesson, free, after which we suggest a course, a level and a time.',
    group: 'The monthly fee for a place among fifteen to twenty children learning at the same level.',
    private: 'The monthly fee for a teacher working with your child alone, on a schedule you set.',
    closer: 'Etobicoke families pay the same rates as families anywhere in Canada. Billing begins only after the free lesson, once your family has picked a course and a weekly slot. Holidays and missed lessons are explained on the pricing page.'
  },

  reviewsH2: 'Google reviews from parents and students',

  book: {
    h2: 'Ask for a free class for your Etobicoke child',
    intro: 'Share your child&rsquo;s age and interests. A six-year-old might begin with a mirror game, an eight-year-old with a skip-counting loop, and a twelve-year-old with the public art file.',
    success: 'Thank you. The team will reach out soon about a class for your child in Etobicoke.'
  },

  faq: {
    h2: 'Etobicoke parents&rsquo; questions',
    intro: 'The questions Etobicoke families send us most.',
    items: [
      { q: 'Are there coding classes for kids in Etobicoke?', a: 'Yes. We teach Etobicoke children live and online, so there is no centre to drive to. Your child joins a group of fifteen to twenty or learns one to one.' },
      { q: 'What coding does my child do in Grade 3?', a: 'Ontario Grade 3 math asks children to write and change code with repeating events, which usually means loops that build number or shape patterns. It is taught as part of math.' },
      { q: 'Is my 6-year-old too young?', a: 'No. Six, around Grade 1, is a good time to start with simple sequences and unplugged games. Our kids classes continue to age 12.' },
      { q: 'Does my child need to read well to code?', a: 'Not at first. Younger children work with blocks and pictures, and the teacher reads instructions aloud. Typing Python comes later, once reading is easy.' },
      { q: 'Scratch, web pages or Python: which should we choose?', a: 'For children under 9, usually Scratch. Children who love making things to show others often enjoy web pages from about 8. Python suits most children from 9 or 10.' },
      { q: 'What times can my child take classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are given in Eastern time.' },
      { q: 'How does my child enter the Beaver Computing Challenge?', a: 'Through school only. CEMC lists Monday 26 October 2026 as the ordering deadline for the November 2026 contest, so ask the teacher soon. The youngest level is for Grade 6 and below.' },
      { q: 'Will my child use AI chatbots?', a: 'No. Our students under 13 do not use adult chatbots, and ChatGPT needs a parent\'s permission for under-18s. Children learn how AI works through activities led by the teacher.' },
      { q: 'Is there a classroom we can visit?', a: 'No. Modern Age Coders has no Etobicoke premises. All classes are live online, which also means no travel time after school.' },
      { q: 'How much do the classes cost?', a: 'The fees block on this page lists the free first lesson and the monthly group and private options in your currency. You pay nothing until after the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'More for Toronto families',
    h2: 'Other pages for Etobicoke and Toronto families',
    html: 'For all ages across the city, read <a class="cg-inline-link" href="/coding-and-ai-classes-in-toronto">coding and AI classes in Toronto</a>. Two other parts of the city have kids pages of their own: <a class="cg-inline-link" href="/coding-classes-for-kids-in-north-york-toronto">North York</a> and <a class="cg-inline-link" href="/coding-classes-for-kids-in-scarborough-toronto">Scarborough</a>. The province is covered on <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a>, and the whole country on <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>. For the Grade 3 assessment, see <a class="cg-inline-link" href="/eqao-grade-3-math-practice">EQAO Grade 3 math practice</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Etobicoke and Toronto',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-toronto', label: 'Toronto' },
    { href: '/coding-classes-for-kids-in-north-york-toronto', label: 'North York kids' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/beaver-computing-challenge-guide', label: 'Beaver Computing Challenge' }
  ],

  personalityCss: `
.cg-root.cg-ket .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.6vw, 2rem); }
.cg-root.cg-ket .cg-hero h1 { font-weight: 720; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-ket .cg-capsule { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-ket .cg-eyebrow { letter-spacing: 0.06em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-ket .cg-section-head h2 { max-width: 28ch; }
.cg-root.cg-ket .cg-align-code { font-weight: 700; letter-spacing: 0.01em; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-ket .cg-table td { font-variant-numeric: tabular-nums; font-family: 'JetBrains Mono', ui-monospace, monospace; }
.cg-root.cg-ket #publicart code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.55; padding: 1rem; border: 1px solid var(--cg-accent); border-radius: 4px; }
.cg-root.cg-ket .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.75rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: Elementary Mathematics (2020) Grade 3 overview (write code to perform a repeating operation), C3.1 (sequential, concurrent and repeating events), the Set value to 0 example, the teacher note on loops and repetitive properties, the unplugged mirroring context, and the number-sense note that each decade repeats the 0 to 9 counting sequence. EQAO Grade 3 window 4 May to 8 June 2027. CEMC Beaver Computing Challenge 2026 ordering deadline and dates, 2025 Grade 5/6 participation and mean, not-a-test statement, entry through a school. Area codes and Eastern offsets from facts-geo.md (CNAC via the Internet Archive; IANA tzdb 2026e).',
    localProject: 'City of Toronto Open Data, Public Art (Economic Development & Culture; Open Government Licence - Toronto), downloaded with curl on 22 October 2026 and filtered to WARD 1, 2 and 3 (the wards named Etobicoke North, Etobicoke Centre and Etobicoke-Lakeshore in the City Wards file) with our scripts art_decades.py and page_script.py (python -I): 25 of 459 rows; by decade 1930s 1, 1950s 1, 1960s 3, 1990s 6, 2000s 3, 2010s 2, 2020s 8, unknown 1; matching on the ward-file spelling of the names finds only 21 because the art file writes Etobicoke-Centre and one Etobicoke-Lakeshore (3); 20 sculptures; 13 City-owned, 11 developer program; steel in 9 rows and bronze in 5 (overlapping). Labelled as ours. Lesson family: integer-division buckets, matching on a code not a name, and a text bar chart.',
    requiredMentions: [
      'Students will write code to perform a repeating operation, such as a repeating number pattern.',
      'Each decade repeats the 0 to 9 counting sequence.',
      'two characters mirroring one another',
      'The art file writes ward 2 as Etobicoke-Centre',
      'Matching the WARD number instead finds all 25',
      'the 2020s already have more works than any earlier decade',
      'steel in 9 rows and bronze in 5',
      'Monday 26 October 2026 as the ordering deadline',
      '14 260 contestants at the Grade 5/6 level in 2025',
      '1997 // 10 is 199'
    ],
    sources: [
      { claim: 'Ontario curriculum content API: Grade 3 math strands, C3 coding expectations, notes and the decade note.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_3___strands?depth=4' },
      { claim: 'Ontario curriculum site, Elementary Mathematics (human-readable home of the API content).', url: 'https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics' },
      { claim: 'EQAO: 2026-27 Grade 3 assessment window.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'CEMC Beaver Computing Challenge: 2026 ordering deadline and dates, 2025 results, not a test.', url: 'https://cemc.uwaterloo.ca/contests/bcc' },
      { claim: 'CEMC: all students participate through their school.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'City of Toronto Open Data: Public Art dataset page (inventory, programs, ward fields).', url: 'https://open.toronto.ca/dataset/public-art/' },
      { claim: 'City of Toronto CKAN API: Public Art package metadata (licence title, notes, refresh).', url: 'https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/package_show?id=public-art' },
      { claim: 'City of Toronto: Open Government Licence - Toronto (commercial use, attribution).', url: 'https://open.toronto.ca/open-data-licence/' },
      { claim: 'City of Toronto City Wards file (City Clerk\'s Office): wards 1, 2 and 3 named Etobicoke North, Etobicoke Centre, Etobicoke-Lakeshore.', url: 'https://open.toronto.ca/dataset/city-wards/' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Etobicoke or Toronto population figure: StatCan was not reachable live, so none is printed.',
      'That wards 1 to 3 are exactly the former City of Etobicoke: not sourced; the page says the ward choice is ours, and the Etobicoke York Community Council area (which includes York wards) is not used.',
      'Artist names, artwork titles, descriptions, addresses and commissioning companies: left out (private people and companies; one work is a memorial).',
      'A street tree project: the Street Tree Data endpoints returned HTTP 500 and 502 on 22 October 2026, so the dataset was dropped and not retried.',
      'A total of materials: the material words overlap within rows, so they are never added.',
      'A combined BCC participation figure across levels: CEMC publishes each level separately and the page quotes the Grade 5/6 row only.',
      'CEMC fees: left out on purpose (currency-neutral page).',
      'Names of Etobicoke schools, school boards or private people: not used.',
      'Any affiliation with the City of Toronto, the Ontario Ministry of Education, EQAO, CEMC or the University of Waterloo.'
    ]
  }
};
