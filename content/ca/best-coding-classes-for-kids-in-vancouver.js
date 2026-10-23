'use strict';
// Vancouver (cg- city page, Canada cluster Wave 2, row 115). Brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Angle: best-coding-classes-for-kids-in- (ages 6 to 12). "Best" only in the title and meta; the body gives BC-specific
// checks for choosing a kids' class, ranks nobody and never calls us the best.
// Spine: the BC ADST 6-7 module rule and its Computational Thinking module, checks a Vancouver parent can run, a City of
// Vancouver parks data project (semicolon-delimited files joined on parkid), and BC's permanent Pacific time.
// Sources, read raw on 22 October 2026. BC curriculum facts from keyword-research-2026-09/ca/facts-schools-contests.md and the
// raw ca/src/bc/adst-6-core.html; time facts from ca/facts-geo.md and ca/src/geo/tz/gov_2026AG0013-000209; data and licence
// in ca/src-pilots/best-coding-classes-for-kids-in-vancouver/ (SOURCES.txt):
//  - BC curriculum, ADST 6-7 core (curriculum.gov.bc.ca/curriculum/adst/6/core): "Students will experience a minimum of three
//    modules of Applied Design, Skills, and Technologies 6-7 in each of Grades 6 and 7."; "Schools may choose from among the
//    modules listed below or develop new modules"; Computational Thinking content: simple algorithms "for sorting, searching,
//    sequence, selection, and repetition"; "cryptography and code breaking (e.g., cyphers)"; visual programming "for example,
//    Kodu, Scratch"; other module headings include Computers and Communications Devices, Digital Literacy, Drafting.
//  - BC Gov News 2026AG0013-000209: "This will be the final time change in British Columbia."; "Pacific time will be set
//    seven hours behind co-ordinated universal time (UTC-7)"; clocks shifted forward "on Sunday, March 8, 2026"; Nov. 1, 2026
//    "when clocks would usually be turned back, but now will remain the same".
//  - CEMC BCC: "Monday, November 9, 2026 to Friday, November 20, 2026"; "only require familiarity with concepts covered in
//    the mathematics curriculum across all Canadian provinces"; through-a-school rule. UFV host-centre page for Math
//    Kangaroo: versions for "grades 1-2, 3-4, 5-6"; "The Fraser Valley Contest will take place on Sunday, March 21, 2027".
//  - facts-geo.md: Vancouver city in the Vancouver CMA; area codes 236, 257, 604, 672, 778 (CNAC via the Internet Archive);
//    America/Vancouver UTC-7 all year, India 12 hours 30 minutes ahead (IANA tzdb 2026e). No populations used.
//  - City of Vancouver Open Data (opendata.vancouver.ca), catalogue API metadata saved as meta_parks.json and
//    meta_parks-facilities.json: titles "Parks" (218 records) and "Parks facilities" (645 records), publisher "City of
//    Vancouver", licence "Open Government Licence - Vancouver"; description "The Vancouver Board of Parks and Recreation
//    maintains over 220 parks and 40 major facilities"; facilities "The extract on this website is updated weekly."
//    parks.csv 38,027 bytes sha256 0574083f...7adf7bb4; parks-facilities.csv 41,278 bytes sha256 219f4d85...4737136.
//  - Licence (licence.html, opendata.vancouver.ca/pages/licence/): "grants you a worldwide, royalty-free, perpetual,
//    non-exclusive licence to use the Information, including for commercial purposes"; attribution "Contains information
//    licensed under the Open Government Licence - Vancouver." (en dash in source); "Information Provider" means The City
//    of Vancouver; non-endorsement clause.
// Our own calculations (page_script.py, trap.py, checks.py, python -I, outputs *.out.txt): 114 parks list a Playgrounds
// facility row; 52 of them list washrooms Y; 22 neighbourhood names, 21 with at least one playground park, Shaughnessy
// with none; Renfrew-Collingwood 12, Kensington-Cedar Cottage 11, Hastings-Sunrise 9, Grandview-Woodland 8, Mount
// Pleasant 8, Downtown 7, Marpole 7; facilitycount on playground rows 1 (97), 2 (14), 3 (1), 4 (2), never summed;
// without delimiter=";" csv reads one single column named "parkid;name;official;..." (trap.out.txt).
// Lesson family: the delimiter trap, then joining two files on a shared key and counting parks, not things.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TRAP = [
  'import csv',
  'with open("parks.csv", encoding="utf-8-sig") as f:',
  '    reader = csv.DictReader(f)',
  '    print(reader.fieldnames)'
].join('\n');

const CIPHER = [
  'message = "khoor"',
  'key = 3',
  'plain = ""',
  'for ch in message:',
  '    plain = plain + chr((ord(ch) - 97 - key) % 26 + 97)',
  'print(plain)'
].join('\n');

const SCRIPT = [
  'import csv',
  '',
  'playground_parks = set()',
  'with open("parks-facilities.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        if row["facilitytype"] == "Playgrounds":',
  '            playground_parks.add(row["parkid"])',
  '',
  'by_area = {}',
  'with_washroom = 0',
  'with open("parks.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        if row["parkid"] in playground_parks:',
  '            area = row["neighbourhoodname"]',
  '            by_area[area] = by_area.get(area, 0) + 1',
  '            if row["washrooms"] == "Y":',
  '                with_washroom += 1',
  '',
  'print(len(playground_parks), "parks list a playground")',
  'print(with_washroom, "of them list a washroom")',
  'for area in sorted(by_area, key=by_area.get, reverse=True)[:5]:',
  '    print(area, by_area[area])'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'VANCOUVER', label: 'Vancouver', blurb: 'Choosing a kids\' coding class in Vancouver: BC ADST modules, Pacific time all year, and a City of Vancouver playground parks data project.' },
  market: CA,
  audience: 'kids',
  slug: 'best-coding-classes-for-kids-in-vancouver',
  code: 'bkv',
  accent: '#21559E',
  accentRationale: 'Vancouver kids page: a muted harbour blue, #21559E, allocated to this row by the Canada group so it clears every site accent by 6 RGB units and the other Canada accents by 14, and stays well away from the retired cyan; contrast 6.93 on the paper #FBF8F2, 6.52 on #F5F1E8 and 5.96 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Vancouver',
    eyebrow: 'Vancouver, British Columbia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'British Columbia' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-british-columbia', name: 'British Columbia' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'British Columbia', href: '/coding-classes-in-british-columbia' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Vancouver',
  title: 'Best Coding Classes for Kids in Vancouver | Ages 6 to 12, Live',
  description: 'What the best coding classes for kids in Vancouver have in common: BC-specific checks for ages 6 to 12, ADST at school, and a City of Vancouver parks project.',
  ogDescription: 'How to choose a kids\' coding class in Vancouver: checks tied to BC\'s ADST modules and Pacific time, plus a playground parks project on City of Vancouver open data.',
  twitterDescription: 'Choosing a kids\' coding class in Vancouver: BC checks, ADST at school and a parks data project.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Vancouver Children Aged 6 to 12',
    description: 'Live online coding for Vancouver children from Kindergarten age to Grade 7: block coding and Scratch, then typed Python, code-breaking puzzles and real City of Vancouver data, in a batch or one to one.'
  },

  h1: 'Coding classes for kids in Vancouver',
  capsuleQ: 'How do Vancouver parents pick a coding class for a child aged 6 to 12?',
  capsule: 'Look for a live teacher, a stated group size, lessons pitched to your child&rsquo;s age, and someone who knows what BC schools teach in ADST and that BC clocks no longer change. Modern Age Coders teaches Vancouver children aged 6 to 12 live online, in a batch of 15 to 20 or one to one, from Scratch Coding for Kids to Python and AI for Kids. The first class costs nothing.',
  lead: 'Vancouver has no shortage of kids&rsquo; coding options, which is exactly why choosing one is hard. Some run in rooms across the city, some online, some for a week in summer and some all year. Rather than rank them, this page gives you checks that only make sense in British Columbia: how BC schools fit coding into the Applied Design, Skills, and Technologies modules in Grades 6 and 7, what Pacific time all year means for an online class, and how to tell whether a teacher is building thinking or just screen time. We also show a project our older students run on two City of Vancouver open data files, where the first lesson is a file that refuses to open properly. Every check here applies to our classes too.',
  wa: 'Hello Modern Age Coders, my child lives in Vancouver. Could we book a free coding class?',

  picks: {
    eyebrow: 'Course picks for Vancouver children',
    h2: 'Four courses Vancouver families start with',
    intro: 'Chosen by age and by what BC schools introduce around Grades 6 and 7. The free class confirms the choice.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 7 to 10', note: 'Scratch is one of the two visual tools BC names for its Grade 6 and 7 module. A child who arrives knowing it can spend the school module building, not learning menus.' },
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 8', note: 'The gentlest start: blocks, sequences and repeats, with short lessons and a lot of talking for children still learning to read.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Typed Python, from turtle drawings to reading the Vancouver parks files and joining them on a shared ID.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 8 to 12', note: 'Sorting, searching and code-breaking puzzles, the same families of ideas BC lists for its Computational Thinking module.' }
    ]
  },

  sections: [
    {
      id: 'adst', tint: '', eyebrow: 'Coding in BC schools',
      h2: 'Where coding sits for a Vancouver child: the ADST modules in Grades 6 and 7',
      intro: 'British Columbia teaches coding mainly through Applied Design, Skills, and Technologies (ADST). We read the Grade 6 and 7 core page on the province&rsquo;s curriculum site on 22 October 2026. Quoted words are the province&rsquo;s; the commentary is ours.',
      body: [
        { kind: 'table', caption: 'BC ADST 6-7: the module rule and the Computational Thinking module, quoted from curriculum.gov.bc.ca (read 22 October 2026)', head: ['What BC says', 'What it means for your child'], rows: [
          ['Students will experience &ldquo;a minimum of three modules&rdquo; of ADST 6-7 in each of Grades 6 and 7', 'Three modules a year, but which three is up to the school'],
          ['Schools may choose from the listed modules or &ldquo;develop new modules&rdquo;', 'One Vancouver classroom may do Computational Thinking while another does Drafting or Digital Literacy'],
          ['Computational Thinking content: simple algorithms &ldquo;for sorting, searching, sequence, selection, and repetition&rdquo;', 'The five building blocks of most beginner programs, named outright'],
          ['The same module lists &ldquo;cryptography and code breaking&rdquo;, with cyphers as the example', 'Secret codes are on the official list, which children love'],
          ['Visual programming tools named as examples: Kodu and Scratch', 'Scratch experience before Grade 6 is a real head start']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Not guaranteed', p: 'Because the school picks the modules, a Vancouver child can finish Grade 7 without ever meeting the Computational Thinking one. A class outside school is often the only steady place a child codes every week.' },
          { h3: 'Before Grade 6', p: 'BC&rsquo;s module rule begins in Grade 6, so younger children rely on what their teacher chooses to do. Ages 6 to 10 are the years when a weekly class adds the most.' },
          { h3: 'Our own note', p: 'We are a live online class, separate from school. We have no connection with the BC education ministry, any Vancouver school district or the City of Vancouver.' }
        ] },
        { kind: 'p', text: 'Children like code-breaking, so here is a puzzle we use, written by us. A shift cipher moves each letter a few places along the alphabet. This short Python program moves every letter of a secret word back by three places and prints the answer, <b>hello</b>. It uses only lower-case letters, which keeps the arithmetic simple for a Grade 6 child:<code class="cg-mt-2">' + CIPHER + '</code>The province names cyphers; turning them into a first Python project is our choice. The next challenge is to write the encoder, then swap programs with a friend.' }
      ]
    },
    {
      id: 'checks', tint: 'tint', eyebrow: 'Choosing a class in Vancouver',
      h2: 'Six checks that only make sense for a Vancouver family',
      intro: 'Our checks, for parents of a child aged 6 to 12 in Vancouver. General advice on class size and fees applies everywhere; these six add what is specific to British Columbia and to a large city.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Does the teacher know ADST?', p: 'Ask what your child will meet in the Grade 6 and 7 modules. A teacher who can name the Computational Thinking module, and knows the school may not offer it, can plan around the gap.' },
          { h3: '2. Is Scratch a step, not the end?', p: 'BC names Scratch and Kodu as examples. Scratch is a fine start, but by about age 10 a child who is ready should be moving into typed code. Ask when and how that move happens.' },
          { h3: '3. Has the provider noticed the clock?', p: 'BC moved to permanent Pacific time in 2026 and will not turn its clocks back on 1 November 2026. An online provider in another province or country should state Vancouver times in Pacific time, with no autumn shift.' }
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '4. What does the commute cost?', p: 'For a class in a room across the city, add travel both ways and the wait in between. For an online class, the cost is a quiet corner and a laptop. Either can be right; compare them honestly.' },
          { h3: '5. Year-round or a camp?', p: 'Summer and spring-break camps are a good taste. Steady progress needs a weekly class with the same teacher, so ask what happens after the camp ends.' },
          { h3: '6. Is the child asked why?', p: 'In any trial, count how often the teacher asks your child to explain. Sorting, searching and selection only stick when the child can say what the code is doing and why.' }
        ] },
        { kind: 'callout', h3: 'What we would not use to choose', p: 'Certificates, badges and a long list of languages tell you little about a six-to-twelve-year-old&rsquo;s lesson. One finished project your child can explain tells you a great deal.' }
      ]
    },
    {
      id: 'parks', tint: 'deep', eyebrow: 'Vancouver data project',
      h2: 'Which Vancouver neighbourhoods have the most parks with a playground?',
      intro: 'The City of Vancouver publishes its parks and the facilities in each park as two open data files. Our older children, about 10 to 12, join them in Python. The first surprise comes before any counting. The figures are our counts, not the City&rsquo;s.',
      body: [
        { kind: 'p', text: '<b>The trap.</b> Both files separate columns with semicolons, not commas. Open one with Python&rsquo;s csv module in the usual way and it finds a single column whose name is the entire header line, <b>parkid;name;official;...</b>, so every later step fails. This is the four-line check that reveals it:<code class="cg-mt-2">' + TRAP + '</code>Adding <b>delimiter=";"</b> fixes it. Children who meet this once never forget to look at a file before trusting it.' },
        { kind: 'table', caption: 'Parks with at least one Playgrounds row, by neighbourhood: our count from the City of Vancouver Parks and Parks facilities files, downloaded 22 October 2026 (top seven of 21)', head: ['Neighbourhood (as named in the file)', 'Parks with a playground'], rows: [
          ['Renfrew-Collingwood', '12'],
          ['Kensington-Cedar Cottage', '11'],
          ['Hastings-Sunrise', '9'],
          ['Grandview-Woodland', '8'],
          ['Mount Pleasant', '8'],
          ['Downtown', '7'],
          ['Marpole', '7']
        ] },
        { kind: 'p', text: 'Our script joins the two files on <b>parkid</b>. It first collects the IDs of parks with a Playgrounds row, then walks the parks file and counts each matching park once by neighbourhood:<code class="cg-mt-2">' + SCRIPT + '</code>It reports 114 parks with a playground, 52 of which also list a washroom, and the five neighbourhoods at the top of the table above.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Parks, not swings', p: 'The facilities file has a facilitycount column, and a few parks list two, three or four playgrounds. We count parks, not playgrounds, so a park is counted once however many it lists, and we never add the counts into a city total.' },
          { h3: 'One neighbourhood with none', p: 'The parks file uses 22 neighbourhood names. 21 have at least one park with a playground row; Shaughnessy has none in this file. That is a fact about the file, not a claim about where children play.' },
          { h3: 'A useful second question', p: 'Parents of young children often care about washrooms. Only 52 of the 114 playground parks list one, so a filter on two columns at once answers a real family question.' }
        ] },
        { kind: 'callout', h3: 'Two numbers that disagree', p: 'The City&rsquo;s own description says the Park Board maintains over 220 parks, while the parks file we downloaded has 218 rows. Both can be true: a description is written once, and the facilities extract is updated weekly. Students learn to report the number they computed and the date they downloaded it.' },
        { kind: 'p', text: 'Data source: City of Vancouver Open Data, <a class="cg-inline-link" href="https://opendata.vancouver.ca/explore/dataset/parks/">Parks</a> and <a class="cg-inline-link" href="https://opendata.vancouver.ca/explore/dataset/parks-facilities/">Parks facilities</a>. Contains information licensed under the Open Government Licence - Vancouver (<a class="cg-inline-link" href="https://opendata.vancouver.ca/pages/licence/">licence</a>). The City of Vancouver does not endorse this page, our counts or our classes.' }
      ]
    },
    {
      id: 'contests', tint: '', eyebrow: 'First contests',
      h2: 'Two contests a Vancouver child can try before high school',
      intro: 'Both are about thinking, not about memorised code, and both are entered through a school or a host centre rather than through us. Details were checked on 22 October 2026.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Beaver Computing Challenge', p: 'Run by CEMC at the University of Waterloo, with its 2026 window from 9 to 20 November 2026. CEMC says the questions need only math ideas taught in every Canadian province, not coding, and that students take part through their school.' },
          { h3: 'Math Kangaroo', p: 'The University of the Fraser Valley host-centre page says the contest has separate versions for Grades 1-2, 3-4 and 5-6 upward, and lists its Fraser Valley sitting for Sunday 21 March 2027. Check the host centre nearest you for its own date.' },
          { h3: 'How we prepare', p: 'With puzzles our teachers write and label as ours. We never reproduce past contest papers; CEMC keeps its own past contests free online, and we point families there.' }
        ] },
        { kind: 'p', text: 'Our <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Computing Challenge guide</a> sets out every level, and the <a class="cg-inline-link" href="/math-kangaroo-canada-preparation">Math Kangaroo Canada page</a> covers that contest in more depth. Modern Age Coders is not connected with CEMC, the University of Waterloo, the University of the Fraser Valley or Math Kangaroo.' }
      ]
    },
    {
      id: 'pacific', tint: 'tint', eyebrow: 'Class times',
      h2: 'Pacific time all year: what changed for Vancouver class times in 2026',
      intro: 'BC&rsquo;s government announced that clocks would spring forward on Sunday 8 March 2026 and then stay put. In its words, &ldquo;This will be the final time change in British Columbia.&rdquo; Pacific time is now UTC-7 all year.',
      body: [
        { kind: 'table', caption: 'Vancouver and India, 2026 to 2027 (BC Gov News release 2026AG0013-000209; IANA tzdb 2026e; the conversions are ours)', head: ['Vancouver time', 'India time', 'Changes on 1 November 2026?'], rows: [
          ['Weekday, 3:30 pm', '4:00 am the next day', 'No'],
          ['Weekday, 5:00 pm', '5:30 am the next day', 'No'],
          ['Saturday, 9:00 am', '9:30 pm the same day', 'No'],
          ['Sunday, 10:30 am', '11:00 pm the same day', 'No']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'One gap, all year', p: 'India stays 12 hours 30 minutes ahead of Vancouver through the whole 2026 to 2027 school year. For our planning that is simpler than any province that still changes its clocks.' },
          { h3: 'Watch the others', p: 'Family in Ontario or Quebec still turns clocks back on 1 November 2026, so a call to Toronto shifts by an hour while a Vancouver class time does not.' },
          { h3: 'Vancouver numbers', p: 'Vancouver phones use 604, 778, 236, 672 or 257. Type all ten digits in the form below; the country code is added automatically.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first blocks to a two-file Python project',
    intro: 'Age bands are a guide only. Your child&rsquo;s free class places them by what they do on the day.',
    cols: [
      { band: 'Ages 6 and 7', h3: 'Sequences', p: 'Blocks in order, simple repeats and a lot of predicting out loud.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 and 9', h3: 'Selection and repetition', p: 'If blocks and loops inside games the child designs, ahead of the Grade 6 module.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 10 and 11', h3: 'Typed code', p: 'Python with strings and loops, a shift cipher, sorting and searching small lists.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Age 12', h3: 'Real data', p: 'Two files joined on a key, a question asked of them, and an honest answer with its limits.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Should a Vancouver child learn to code when AI can write the parks script?',
    intro: 'An AI tool can write it. Knowing that it is wrong takes a person who has written one.',
    p1: 'Ask an AI assistant to count Vancouver playgrounds and it may forget the semicolon delimiter, or add up the facilitycount column and call the total a number of parks. Both mistakes produce a confident answer. A twelve-year-old who has hit the delimiter trap personally notices immediately, because they know what the file looks like inside.',
    p2: 'Our classes for children are built on thinking first: look at the data, predict, write, test, explain. Children learn how AI tools work and where they fail, and they practise checking answers, but they do their own reasoning. Outside class, OpenAI&rsquo;s rules say a parent must give permission before anyone younger than 18 uses ChatGPT.',
    closer: 'BC lists sorting, searching, selection and repetition for its Grade 6 and 7 module because those are ways of thinking; a tool that writes the code does not do the thinking for the child.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How our online classes run for Vancouver families',
    intro: 'A live lesson on a laptop at home, with the same teacher each week. Nobody crosses a bridge for it.',
    cells: [
      { h3: 'Times', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Batch or private', p: 'A batch of 15 to 20 children working at the same stage, or one-to-one lessons shaped around one child.' },
      { h3: 'What you need', p: 'A laptop or desktop with a keyboard and sound, and a steady connection. The teacher sets up free tools with your child.' },
      { h3: 'Across the Lower Mainland', p: 'Children in Burnaby, Richmond, Surrey and North Vancouver join the same classes on the same Pacific clock.' },
      { h3: 'Parents welcome', p: 'You can sit in on any lesson. Hearing the teacher&rsquo;s questions is the surest way to judge us.' },
      { h3: 'First class free', p: 'A real lesson that ends with a suggested course, level and time. No card is needed.' }
    ],
    spec: { title: 'No Vancouver office', p: 'Modern Age Coders has no Vancouver classroom and claims none. Teaching is live and online, from India.' }
  },

  fees: {
    h2: 'What our kids&rsquo; coding classes cost in Vancouver',
    intro: 'The same three options everywhere in Canada; each fee carries its currency code.',
    first: 'One full live class at no charge, with a recommended level and course at the end.',
    group: 'The monthly fee for a seat in a batch of 15 to 20 children at the same level.',
    private: 'The monthly fee for one-to-one lessons, at times that suit your week.',
    closer: 'Vancouver families pay what every Canadian family pays. We bill only after the free class and only once you have picked a course and a time; the pricing page explains holidays and missed classes.'
  },

  reviewsH2: 'What parents and students say on Google',

  book: {
    h2: 'Book a free class for your Vancouver child',
    intro: 'Tell us the grade or age. A six-year-old might make a character dance to a repeat block; an eleven-year-old might decode a secret message in Python.',
    success: 'Thank you. The team will contact you soon about a class for your child in Vancouver.'
  },

  faq: {
    h2: 'Vancouver kids&rsquo; coding questions',
    intro: 'Questions Vancouver parents send us before booking.',
    items: [
      { q: 'Do you offer coding classes for kids in Vancouver?', a: 'Yes, live online. There is no Vancouver classroom; children learn from home with a teacher who watches their screen, in a batch of 15 to 20 or one to one.' },
      { q: 'At what age can a Vancouver child start?', a: 'Six. Our youngest courses use blocks and short lessons, and these kids\' courses run to age 12.' },
      { q: 'Do BC schools teach coding?', a: 'Mostly through ADST. In Grades 6 and 7 each child does at least three ADST modules a year, and one possible module is Computational Thinking, which names Scratch and Kodu. The school chooses the modules.' },
      { q: 'Is Scratch enough, or should my child learn Python?', a: 'Scratch is a strong start for ages 7 to 10. Most children who are ready to type comfortably move to Python around 10, and we make that move gradually.' },
      { q: 'Will BC class times change in November 2026?', a: 'No. BC moved to permanent Pacific time, UTC-7, and its clocks will not go back on 1 November 2026. Your Vancouver class time stays the same all year.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are given in Pacific time.' },
      { q: 'Do you teach robotics in Vancouver?', a: 'We teach the programming side, not robot kits. Children who want to build robots should look for a school or community robotics club, and our coding classes pair well with one.' },
      { q: 'Can my child enter a contest?', a: 'Yes, through their school for the Beaver Computing Challenge, listed by CEMC for 9 to 20 November 2026, or through a host centre for Math Kangaroo.' },
      { q: 'How do I compare classes in Vancouver?', a: 'Use the six checks on this page: ADST knowledge, the move beyond Scratch, Pacific time, the commute, year-round teaching and how often your child is asked why.' },
      { q: 'What are the fees?', a: 'The fees section above shows a free first class, a monthly batch fee and a monthly one-to-one fee. Nothing is billed before the free class.' }
    ]
  },

  next: {
    eyebrow: 'More for BC families',
    h2: 'Other pages for Vancouver and British Columbia',
    html: 'The province-wide page is <a class="cg-inline-link" href="/coding-classes-in-british-columbia">coding classes in British Columbia</a>, and the national starting point is the <a class="cg-inline-link" href="/coding-classes-in-canada">Canada hub</a>. Teenagers heading toward high school computing can read about <a class="cg-inline-link" href="/computer-programming-11-and-12-bc">BC Computer Programming 11 and 12</a>, families comparing formats can read <a class="cg-inline-link" href="/best-online-coding-classes-in-canada">online coding classes in Canada</a>, and the <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">2026 Canadian time zone guide</a> explains every province&rsquo;s clock change.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Vancouver and BC',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-british-columbia', label: 'British Columbia' },
    { href: '/computer-programming-11-and-12-bc', label: 'BC Computer Programming 11 and 12' },
    { href: '/math-kangaroo-canada-preparation', label: 'Math Kangaroo Canada' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canada time zones 2026' }
  ],

  personalityCss: `
.cg-root.cg-bkv .cg-hero h1 { font-weight: 700; letter-spacing: -0.017em; line-height: 1.07; }
.cg-root.cg-bkv .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-bkv .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; text-transform: uppercase; font-size: 0.75rem; }
.cg-root.cg-bkv .cg-section-head h2 { max-width: 32ch; }
.cg-root.cg-bkv .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-bkv .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bkv #parks code, .cg-root.cg-bkv #adst code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.81rem; line-height: 1.55; padding: 0.85rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-bkv #checks h3 { letter-spacing: -0.005em; }
.cg-root.cg-bkv .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.7rem; }
`,

  dossier: {
    curriculumAuthority: 'British Columbia, read 22 October 2026 from curriculum.gov.bc.ca and saved raw: ADST 6-7 core page, the minimum-three-modules rule for Grades 6 and 7, schools choosing or developing modules, and the Computational Thinking module content (simple algorithms for sorting, searching, sequence, selection and repetition; cryptography and code breaking; visual programming with Kodu and Scratch as examples). BC Gov News 2026AG0013-000209 on permanent Pacific time (UTC-7, final change 8 March 2026, no change on 1 November 2026). CEMC BCC dates and the school rule; UFV Math Kangaroo host-centre page (grade versions, Fraser Valley sitting 21 March 2027). Vancouver area codes from facts-geo.md (CNAC via the Internet Archive).',
    localProject: 'City of Vancouver Open Data, Parks (218 rows) and Parks facilities (645 rows), Open Government Licence - Vancouver, downloaded 22 October 2026 and joined on parkid with our script page_script.py (python -I): 114 parks with a Playgrounds row; 52 of them list washrooms Y; 21 of 22 neighbourhood names have at least one, Shaughnessy none; Renfrew-Collingwood 12, Kensington-Cedar Cottage 11, Hastings-Sunrise 9, Grandview-Woodland 8, Mount Pleasant 8, Downtown 7, Marpole 7; the comma-delimiter trap shown with trap.py. facilitycount never summed. Labelled as ours. Lesson family: delimiter trap and a two-file join.',
    requiredMentions: [
      'parkid;name;official;...',
      'Shaughnessy has none in this file',
      'Only 52 of the 114 playground parks list one',
      'Renfrew-Collingwood',
      'Open Government Licence - Vancouver',
      'India stays 12 hours 30 minutes ahead of Vancouver',
      'cryptography and code breaking',
      'Vancouver phones use 604, 778, 236, 672 or 257',
      'over 220 parks, while the parks file we downloaded has 218 rows'
    ],
    sources: [
      { claim: 'BC curriculum, ADST 6-7 core: module rule and Computational Thinking content.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/6/core' },
      { claim: 'BC Gov News: permanent year-round Pacific time, UTC-7, final change on 8 March 2026.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' },
      { claim: 'CEMC Beaver Computing Challenge: 2026 dates, no coding needed, through a school.', url: 'https://cemc.uwaterloo.ca/contests/bcc' },
      { claim: 'University of the Fraser Valley, Canadian Math Kangaroo host-centre page: grade versions and the 2027 Fraser Valley date.', url: 'https://ufv.ca/math/contests/canadian-math-kangaroo' },
      { claim: 'City of Vancouver Open Data: Parks dataset.', url: 'https://opendata.vancouver.ca/explore/dataset/parks/' },
      { claim: 'City of Vancouver Open Data: Parks facilities dataset (updated weekly).', url: 'https://opendata.vancouver.ca/explore/dataset/parks-facilities/' },
      { claim: 'Open Government Licence - Vancouver: commercial use, attribution statement, non-endorsement.', url: 'https://opendata.vancouver.ca/pages/licence/' },
      { claim: 'IANA tzdb northamerica: America/Vancouver on UTC-7 all year.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Vancouver population figure: StatCan was not reachable live.',
      'A total number of playgrounds in Vancouver: refused; facilitycount is per park and is not summed into a city total.',
      'That Shaughnessy has no playgrounds: refused; the file lists no Playgrounds row for its parks, which is a statement about the file only.',
      'That every Vancouver child takes the Computational Thinking module: refused; BC lets schools choose the modules.',
      'Any ranking of Vancouver coding providers, or that Modern Age Coders is the best: refused.',
      'That we run robotics hardware classes: refused; we teach the programming side.',
      'Contest fees: left out on purpose (currency-neutral page).',
      'Any affiliation with the City of Vancouver, the Park Board, the BC education ministry, any school district, CEMC, the University of Waterloo, the University of the Fraser Valley or Math Kangaroo.'
    ]
  }
};
