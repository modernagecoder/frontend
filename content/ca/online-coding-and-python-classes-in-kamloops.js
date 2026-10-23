'use strict';
// Kamloops (cg- city page, Canada cluster Wave 2, row 138, slug shape online-coding-and-python-classes-in-).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Shape from content/ca/coding-and-ai-classes-in-toronto.js, prose fresh.
// Spine: one week of live online learning described day by day; a Python path; a Python project on the City of Kamloops
// tree inventory whose lessons are API paging, filtering rows that are not trees, and inconsistent labels (MAPL / MAPLE);
// BC curriculum (ADST 6-7 modules, Computer Programming 11 and 12, Computer Science 11 and 12); BC on UTC-7 all year.
// Sources, read raw 22 to 23 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/online-coding-and-python-classes-in-kamloops/):
//  - City of Kamloops, ArcGIS item e14c04be6c6c4692b70147edb937088c "Tree" (item-tree.json): snippet "Trees", description
//    "Tree species and type within the City of Kamloops."; service https://maps.kamloops.ca/arcgis/rest/services/OpenData/
//    OpenDataParks/MapServer/12 (layer12.json: name TreeSite, maxRecordCount 1000); count query {"count":19730}. The hub CSV
//    download returned 404, so the layer was read with 20 paged REST queries (tree-pages/p0..p19000.json, combined by
//    combine.py into kamloops-trees.csv, sha256 dcfd7d4e...3a74; fields OBJECTID, SITE_ID, COMMONFULLNAME, DIAMETER, HEIGHT,
//    YRPLANTED, SITETYPE, OWNERTYPE, NEIGHBOURHOOD, LANDUSE only; inspector, address, risk and defect fields not pulled).
//  - Licence (licenseInfo in item-tree.json): "Open Government Licence - Kamloops", "based on version 2.0 of the Open
//    Government Licence - British Columbia"; "including for commercial purposes"; attribution "Contains information licensed
//    under the Open Government Licence - Kamloops."; non-endorsement clause. Portal https://maps.kamloops.ca/opendata (linked
//    from kamloops.ca/city-services/maps-apps).
//  - BC curriculum (facts-schools-contests.md; raw ca/src/bc/): ADST 6-7 "a minimum of three modules"; ADST 6 computational
//    thinking "visual programming", example "Kodu, Scratch"; ADST 10-12 list includes Computer Studies 10, Web Development 10,
//    Computer Programming 11 and 12, Robotics 11 and 12; Computer Programming 11 "programming language constructs to support
//    input/output, logic, decision structure, and loops"; Computer Programming 12 "higher-level structures, such as functions,
//    methods, or classes, that help improve the organization of source code"; Mathematics list includes Computer Science 11
//    and 12; CS 11 decomposition "dividing complex problems into parts that are easier to conceive, understand, and program".
//  - BC Gov News 2026AG0013-000209 (facts-geo.md, src/geo/tz/): "Pacific time will be set seven hours behind co-ordinated
//    universal time (UTC-7)"; permanent after the 8 March 2026 change. Kamloops CMA on America/Vancouver; area codes 236, 250,
//    257, 672, 778.
//  - CEMC (facts-schools-contests.md): BCC 9 to 20 November 2026; CCC Wednesday 17 February 2027; through-a-school rule.
//  - brand-facts.json: free first class "30-45 minutes"; group 15 to 20.
// Our own calculations (combine.py, analysis.py, analysis2.py, analysis3.py, count_trees.py; python -I; *.out.txt): 19,730
// rows; SITETYPE TREE 17,207, PLANTING SITE 1,034, REMOVAL SITE 982, STUMP 491, DELETE 16; count_trees.py: MAPL 2,867,
// PINE 1,719, SPRUCE 1,451, CRABAPPLE SPP 1,286, ASH 1,091, LINDEN 929, LILAC 678, ELM 596, DOUGLAS FIR 540, OAK 467; among
// tree rows 329 distinct names, UNKNOWN 79, names starting MAPL 3,078 of which 206 spelled MAPLE, names starting CRAB 1,703;
// YRPLANTED known on 4,670 tree rows, 30 of them 1800, latest 2026; 86 planted 2026, 210 planted 2025. Time conversions ours.
// Lesson family: paged API reads, filtering, normalising inconsistent text labels.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  '',
  'genus_counts = {}',
  'trees = 0',
  'with open("kamloops-trees.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        if row["SITETYPE"] != "TREE":',
  '            continue',
  '        trees += 1',
  '        genus = row["COMMONFULLNAME"].split(",")[0].strip()',
  '        genus_counts[genus] = genus_counts.get(genus, 0) + 1',
  '',
  'print(trees, "rows are trees")',
  'top = sorted(genus_counts.items(), key=lambda pair: pair[1], reverse=True)',
  'for genus, count in top[:10]:',
  '    print(genus, count)'
].join('\n').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'KAMLOOPS', label: 'Kamloops', blurb: 'Live online Python for Kamloops learners, with a city tree inventory project on paging an API and cleaning messy labels.' },
  market: CA,
  slug: 'online-coding-and-python-classes-in-kamloops',
  code: 'pk',
  accent: '#2D6B56',
  accentRationale: 'Kamloops: a muted sage and river teal, #2D6B56, allocated for this row and clear of the retired purple and cyan band; contrast 5.92 on the paper #FBF8F2 and at least 5.09 on all three paper tints',
  pageType: 'city',
  place: {
    name: 'Kamloops',
    eyebrow: 'Kamloops, British Columbia',
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
  routeLabel: 'Kamloops',
  title: 'Online Coding and Python Classes in Kamloops | Live Teaching',
  description: 'Live online coding and Python classes for Kamloops learners aged 6 to adult: a week of live classes explained, a Python path, and a project on the city tree data.',
  ogDescription: 'What a week of live online Python looks like for a Kamloops learner, where BC schools teach coding, and a Python project on the City of Kamloops tree inventory.',
  twitterDescription: 'Kamloops coding and Python classes, taught live online on Pacific time all year.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Kamloops Learners',
    description: 'Live online coding and Python for Kamloops learners aged 6 to adult, in a group of fifteen to twenty or one to one, from first programs to reading real city data through an API.'
  },

  h1: 'Online coding and Python classes in Kamloops',
  capsuleQ: 'Is there a live online Python class for learners in Kamloops?',
  capsule: 'There is. Modern Age Coders runs live online coding and Python lessons for Kamloops learners aged 6 and up, adults included. A learner joins a fifteen to twenty strong group at one level, or works one to one. Typical first courses: Python and AI for Kids at 9 to 12, Python for Teens at 13 to 18, the Python Masterclass for adults. Lesson one is free.',
  lead: 'For a family in Brocklehurst, Aberdeen or Westsyde, the nearest specialist Python teacher may be a long drive down the Coquihalla. Online removes the drive, and the real question becomes what a live online class actually delivers week to week. This page walks through one ordinary week, sets out a Python path for every age, shows a project our students run on the City of Kamloops tree inventory (nearly twenty thousand rows, and not all of them trees), and explains where coding already sits in the BC curriculum.',
  wa: 'Hello Modern Age Coders, I would like a free live Python class for a learner in Kamloops.',

  picks: {
    eyebrow: 'Python courses for Kamloops',
    h2: 'Four Python courses Kamloops learners are placed in',
    intro: 'One course per age group, plus machine learning for teenagers whose Python is already steady. The free class settles which.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Young learners type genuine Python: little games, coloured drawings and programs that ask questions and react to the answers.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'The whole of core Python, finishing with files, dictionaries and real data like the tree inventory project further down.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'For adults starting cold or returning: patient foundations, then the functions and file work that make Python useful.' },
      { course: 'ai-ml-masterclass-teens', band: 'Teens with some Python', note: 'Machine learning built in Python on data the student can open and inspect, so every model is something to question.' }
    ]
  },

  sections: [
    {
      id: 'week', tint: '', eyebrow: 'A week of live online classes',
      h2: 'One ordinary week for a Kamloops learner in a live online class',
      intro: 'Live online is easiest to understand as a routine. This is what a typical week looks like for a teenager in a group class; one-to-one weeks follow the same pattern at the learner\'s own times.',
      body: [
        { kind: 'table', caption: 'A typical week in a live group Python class (our own description of how we teach; days are examples)', head: ['When', 'What happens', 'Why it matters'], rows: [
          ['Monday, live class', 'The teacher introduces one idea, say dictionaries, and everyone writes a short program with it on their own computer while the teacher watches the shared screens of whoever is stuck.', 'Mistakes are caught in the minute they happen, not three days later'],
          ['Tuesday to Wednesday', 'A small task alone: count something in a file, using the new idea, with no AI assistant writing it.', 'Doing it without help is the only proof the idea has landed'],
          ['Thursday, live class', 'The group compares solutions. The teacher picks two that work differently and asks which is clearer and why.', 'Reading other people\'s code is half of programming'],
          ['Friday to Sunday', 'Optional: extend the task, or bring a question to the next class. Nothing is graded.', 'Curiosity, not homework, is what keeps learners going'],
          ['Every few weeks', 'Rebuild a program from a blank file without notes.', 'Shows what has stuck, honestly, to the learner and the parent']
        ] },
        { kind: 'p', text: 'Nothing in that week needs a learner to live near anyone. What it does need is a teacher who reads code, not just slides. When a Kamloops student writes <code>for tree in trees</code> and then mistypes <code>tres</code> on the next line, a teacher points at the NameError and asks the student to read it aloud before saying anything else. After a few weeks of that, students start reading error messages before they ask, which is the habit that matters.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The first step', p: 'Fill in the form or send a WhatsApp message with an age or grade. We set up a free class of 30 to 45 minutes and suggest a level at the end.' },
          { h3: 'What to have ready', p: 'Any recent Windows, Mac or Linux computer, headphones and a connection that can hold a video call. Installing Python is free and part of lesson one or two.' },
          { h3: 'Group or private', p: 'A group class has fifteen to twenty learners at one level. One to one moves at a single learner\'s pace and suits adults or contest preparation.' }
        ] }
      ]
    },
    {
      id: 'trees', tint: 'deep', eyebrow: 'Kamloops data project',
      h2: 'Which trees does Kamloops plant most? A Python project on the city tree inventory',
      intro: 'The City of Kamloops publishes its tree inventory as open data under the Open Government Licence - Kamloops. Students pull the layer down, tally it in Python, and learn that tallying was never the hard bit. The numbers here were produced by our scripts from data read on 22 October 2026, not by the city.',
      body: [
        { kind: 'table', caption: 'Our count of the City of Kamloops tree layer (19,730 rows) by SITETYPE, and the five largest name groups among tree rows as our script groups them (text before the first comma)', head: ['What we counted', 'Label in the data', 'Rows'], rows: [
          ['Row type', 'TREE', '17,207'],
          ['Row type', 'PLANTING SITE', '1,034'],
          ['Row type', 'REMOVAL SITE', '982'],
          ['Row type', 'STUMP', '491'],
          ['Row type', 'DELETE', '16'],
          ['Tree rows, by first word', 'MAPL', '2,867'],
          ['Tree rows, by first word', 'PINE', '1,719'],
          ['Tree rows, by first word', 'SPRUCE', '1,451'],
          ['Tree rows, by first word', 'CRABAPPLE SPP', '1,286'],
          ['Tree rows, by first word', 'ASH', '1,091']
        ] },
        { kind: 'p', text: 'The counting script is short and uses only the standard library. It runs on the CSV our students save from the layer:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Read it in pages', p: 'The city\'s map server hands out at most 1,000 records per request, and the layer holds 19,730. So the first program loops: ask for 1,000 rows starting at an offset, add them to a list, move the offset on, stop when a page comes back short. Twenty requests, one file.' },
          { h3: '2. Not every row is a tree', p: 'Only 17,207 rows are marked TREE. The rest are empty planting sites, removal sites, stumps and 16 rows marked DELETE. Count everything and you overstate the city\'s trees by more than two and a half thousand.' },
          { h3: '3. Labels that disagree', p: 'Names are abbreviated by hand: "MAPL, NORWAY", "MAPL, NWY CRMSN KG". The script\'s 2,867 maples misses rows spelled out as MAPLE. Every name starting with MAPL covers 3,078 tree rows, 206 of them spelled MAPLE; crabapples split the same way across CRABAPPLE and CRABAPPL.' }
        ] },
        { kind: 'callout', h3: 'What the inventory cannot tell you', p: 'The planting year is filled in on only 4,670 tree rows, and 30 of those say 1800, which is almost certainly a placeholder rather than a date. So "trees planted per year" from this file describes the record-keeping as much as the planting. The inventory covers trees the city tracks, not every tree in Kamloops back yards.' },
        { kind: 'p', text: 'A good next step for older students is a fair chart: 86 tree rows give a planting year of 2026 and 210 give 2025, but with most rows blank, the honest chart shows the blanks too. Contains information licensed under the Open Government Licence - Kamloops (<a class="cg-inline-link" href="https://maps.kamloops.ca/opendata">open data portal</a>, <a class="cg-inline-link" href="https://www.arcgis.com/home/item.html?id=e14c04be6c6c4692b70147edb937088c">dataset and licence text</a>). The licence is based on version 2.0 of the BC Open Government Licence. Using the data implies no endorsement by the City of Kamloops.' }
      ]
    },
    {
      id: 'bc', tint: 'tint', eyebrow: 'BC schools',
      h2: 'Where coding sits in the BC curriculum for a Kamloops student',
      intro: 'Kamloops schools follow the BC curriculum. We read curriculum.gov.bc.ca on 22 October 2026. Text inside quotation marks is copied from it; the plain descriptions are ours.',
      body: [
        { kind: 'table', caption: 'Coding in the BC curriculum, from Grade 6 to Grade 12 (quotes from curriculum.gov.bc.ca; summaries ours)', head: ['Stage', 'Where coding appears', 'What the curriculum says'], rows: [
          ['Grades 6 and 7', 'Applied Design, Skills, and Technologies (ADST)', 'Students take "a minimum of three modules" each year; the computational thinking module mentions "visual programming", for example Kodu or Scratch'],
          ['Grade 10', 'ADST electives', 'The list includes Computer Studies 10 and Web Development 10'],
          ['Grade 11', 'Computer Programming 11 (ADST)', 'Our summary: language constructs for input and output, logic, decisions and loops'],
          ['Grade 12', 'Computer Programming 12 (ADST)', 'Our summary: functions, methods and classes used to organize larger programs'],
          ['Grades 11 and 12', 'Computer Science 11 and 12 (Mathematics)', 'Our summary: decomposition, breaking a large problem into parts small enough to program']
        ] },
        { kind: 'p', text: 'Two separate course families, one under ADST and one under Mathematics, is a BC quirk worth knowing when a Kamloops teenager picks Grade 11 courses; which ones a school actually runs varies. Either way, the tree project above covers input and output, decisions and loops, and moving it into functions is the Grade 12 step. Our <a class="cg-inline-link" href="/computer-programming-11-and-12-bc">Computer Programming 11 and 12 page</a> goes course by course.' },
        { kind: 'callout', h3: 'Alongside school, never instead', p: 'We support students beside their school courses and do not grant BC credits. CEMC contests such as the Beaver Computing Challenge (9 to 20 November 2026) and the CCC (Wednesday 17 February 2027) are entered through a school, as CEMC requires. We are not connected with the BC Ministry of Education and Child Care, any school district, CEMC or the City of Kamloops.' }
      ]
    },
    {
      id: 'pacific', tint: '', eyebrow: 'Pacific time',
      h2: 'Kamloops on permanent Pacific time, and what that means for class times',
      intro: 'BC moved its clocks forward on 8 March 2026 and, by the provincial announcement, left them there for good at UTC-7. Kamloops therefore keeps the same time through November, when most of eastern Canada falls back.',
      body: [
        { kind: 'table', caption: 'Sample Kamloops class times and the matching time in India, unchanged all year (offsets from the BC announcement and the IANA tz database 2026e; arithmetic ours; examples only)', head: ['Kamloops time', 'India time', 'Typical learner'], rows: [
          ['4:00 pm, weekday', '4:30 am the next morning', 'A child home from school'],
          ['6:00 pm, weekday', '6:30 am the next morning', 'A teen after sport, or an adult after work'],
          ['8:30 am, Saturday', '9:00 pm that Saturday', 'Families who prefer weekend mornings']
        ] },
        { kind: 'p', text: 'Before 2026, BC families had to recalculate twice a year; now one table holds from January to December. The one thing to watch is a relative or class elsewhere in Canada: Alberta stays an hour ahead of Kamloops all year, Ontario two or three hours depending on the season. Our <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones page</a> lays it all out; in our messages, the Kamloops time always comes before any other.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The Python path',
    h2: 'Blocks at 6, Python at 9, real data at 15, and work at any age',
    intro: 'Where a learner joins depends on what they can already do; the free class works it out, and the ages are only a rough guide.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Logic in blocks', p: 'Order, repetition and choice with blocks, which is close to the visual programming BC uses in Grades 6 and 7, only earlier.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 9 to 12', h3: 'Python by hand', p: 'Variables, loops and conditions typed and explained aloud, in programs short enough to understand completely.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Ages 13 to 18', h3: 'Files, data, models', p: 'Python up to the level of Computer Programming 11 and beyond, the tree inventory, then machine learning or contests.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Python at work', p: 'From zero to scripts that clean spreadsheets and pull data, with AI help introduced once results can be checked.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and AI',
    h2: 'An AI assistant would tell you Kamloops has 19,730 trees',
    intro: 'Because that is how many rows the layer has.',
    p1: 'Ask a chatbot to count the trees in the Kamloops inventory and the code it writes will usually count rows. It will not notice the stumps, the empty planting sites or the 16 rows marked DELETE, and it will happily split maples across MAPL and MAPLE. The program runs; the number is wrong in two different ways.',
    p2: 'We teach learners to think about what each row means before writing a single loop, and to check a result against something sensible. Older students do use AI tools in our classes, within each tool\'s age rules, as a starting draft they must test and correct. The thinking stays theirs.',
    closer: 'BC\'s Computer Science 11 calls decomposition the skill of dividing problems into understandable parts; that is the part no AI tool can do for you if you want to trust the answer.',
    blogAnchor: 'is coding worth learning in 2026 with AI around'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for Kamloops and the Thompson region',
    intro: 'Everything is online, so distance across the region stops mattering. These are the practical details.',
    cells: [
      { h3: 'Scheduling', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Across the region', p: 'Learners in Sun Peaks, Chase, Logan Lake, Merritt and Barriere join exactly the same live classes as learners in Kamloops itself.' },
      { h3: 'Kamloops numbers', p: 'Phones on the 250, 778, 236, 672 and 257 area codes all work in the form, which supplies the country code itself.' },
      { h3: 'BC grades', p: 'Teachers plan in BC grades and know where ADST and Computer Programming 11 fall in the school year. We explain assignments; we never complete them.' },
      { h3: 'One clock', p: 'With BC on UTC-7 all year, a Kamloops class time does not move in November or March, which makes it the easiest province in the country to schedule.' },
      { h3: 'Starting', p: 'The free class needs no card and no commitment. At the end the teacher suggests a level, a course and a time that fits.' }
    ],
    spec: { title: 'No centre in Kamloops', p: 'Modern Age Coders has no office or classroom in Kamloops or anywhere in BC and claims none. Every lesson is live and online, taught by teachers based in India.' }
  },

  fees: {
    h2: 'Fees for Kamloops learners',
    intro: 'Three lines, each in the currency for your region.',
    first: 'A full live lesson at no charge, ending with a suggested level and course.',
    group: 'The monthly fee for a group of fifteen to twenty learners at one level.',
    private: 'The monthly fee for one learner and one teacher, at agreed times.',
    closer: 'Kamloops learners pay the same monthly fee as learners elsewhere in Canada. An invoice comes only after the free lesson, when a course and a time have been chosen together; the pricing page explains holiday weeks and missed lessons.'
  },

  reviewsH2: 'Reviews from families and learners on Google',

  book: {
    h2: 'Tell us about the Kamloops learner',
    intro: 'An age or grade and a line on any past coding is enough. A seven year old might begin with a maze game; a Grade 11 student might open the tree layer in the first lesson.',
    success: 'Thank you. The team will contact you soon about a free class for Kamloops.'
  },

  faq: {
    h2: 'Kamloops online Python and coding questions',
    intro: 'Questions we get from Kamloops parents, students and adults.',
    items: [
      { q: 'Do you have coding classes in Kamloops itself?', a: 'Not in a building. Lessons happen live over the internet, so a Kamloops learner logs in from home and a teacher works with them as they write code.' },
      { q: 'How does a live online Python class work week to week?', a: 'Usually two live lessons a week in a group, with a short solo task in between. The teacher introduces an idea, everyone codes it, and errors are explained as they happen.' },
      { q: 'How old does my child need to be for Python?', a: 'Most children can start typed Python at about 9. Between 6 and 8 we start with blocks. Teenagers and adults can begin Python immediately.' },
      { q: 'What does the free class involve?', a: 'Somewhere between 30 and 45 minutes of real teaching at the right level for the learner. At the end the teacher recommends a course and a time slot. It costs nothing.' },
      { q: 'Is there a Python course for adults in Kamloops?', a: 'Yes. Most adults start in the Python Masterclass. Those who want Python for their job then often take the automation course, which deals with files, spreadsheets and reports.' },
      { q: 'Will your classes earn my teen a BC credit?', a: 'No. BC credits come only from school. Our classes run beside Computer Programming 11, Computer Science 11 and similar courses with extra practice and projects.' },
      { q: 'Can you help with the Canadian Computing Competition?', a: 'Yes. The 2027 CCC is set for Wednesday 17 February 2027 on the CEMC calendar. A school has to register the student; our part is preparation, using problems we write ourselves.' },
      { q: 'When are classes for Kamloops learners?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. BC stays on UTC-7 all year, so times never shift.' },
      { q: 'Does a Kamloops phone number work in your form?', a: 'Yes. Any number on 250, 778, 236, 672 or 257 is accepted. Skip the 1 at the front; the form expects ten digits.' },
      { q: 'What will my child need at home?', a: 'A proper computer rather than a tablet, because typed code needs a keyboard and files. Add headphones and dependable internet. Python downloads for free and we help set it up.' },
      { q: 'Where are the fees?', a: 'Higher up this page, under Fees. You will see three items there, in your own currency: the free lesson, the group price for a month and the one-to-one price for a month.' }
    ]
  },

  next: {
    eyebrow: 'More for BC',
    h2: 'Other pages for Kamloops and BC learners',
    html: 'For the province, read <a class="cg-inline-link" href="/coding-classes-in-british-columbia">coding classes in British Columbia</a>, or begin at <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>. BC high school students can read about <a class="cg-inline-link" href="/computer-programming-11-and-12-bc">Computer Programming 11 and 12</a> and <a class="cg-inline-link" href="/calculus-12-tutor-bc">Calculus 12 help</a>, and home learners about <a class="cg-inline-link" href="/homeschool-coding-and-math-bc">homeschool coding and math in BC</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Kamloops and BC',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-british-columbia', label: 'British Columbia' },
    { href: '/computer-programming-11-and-12-bc', label: 'Computer Programming 11 and 12' },
    { href: '/homeschool-coding-and-math-bc', label: 'Homeschool in BC' },
    { href: '/python-classes-in-canada', label: 'Python in Canada' }
  ],

  personalityCss: `
.cg-root.cg-pk .cg-hero h1 { font-weight: 690; letter-spacing: -0.012em; line-height: 1.1; }
.cg-root.cg-pk .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-pk .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; }
.cg-root.cg-pk .cg-section-head h2 { max-width: 36ch; letter-spacing: -0.006em; }
.cg-root.cg-pk .cg-table caption { font-weight: 620; text-align: left; }
.cg-root.cg-pk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pk #trees code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.81rem; line-height: 1.55; padding: 0.85rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-pk .cg-ladder-col { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-pk .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'British Columbia, read 22 October 2026 from curriculum.gov.bc.ca pages saved raw: ADST 6-7 minimum three modules, visual programming (Kodu, Scratch); ADST 10-12 list (Computer Studies 10, Web Development 10, Computer Programming 11 and 12, Robotics 11 and 12); Computer Programming 11 and 12 content quotes; Computer Science 11 and 12 under Mathematics, decomposition. BC Gov News 2026AG0013-000209: permanent UTC-7. CEMC 2026-27 BCC and CCC, through a school. Area codes 236/250/257/672/778 from facts-geo.md.',
    localProject: 'City of Kamloops open data, Tree layer (Open Government Licence - Kamloops), read on 22 October 2026 through 20 paged REST queries (maxRecordCount 1000) and counted with our scripts (python -I): 19,730 rows; SITETYPE TREE 17,207, PLANTING SITE 1,034, REMOVAL SITE 982, STUMP 491, DELETE 16; first-word genus counts MAPL 2,867, PINE 1,719, SPRUCE 1,451, CRABAPPLE SPP 1,286, ASH 1,091; names starting MAPL 3,078 (206 spelled MAPLE); planting year on 4,670 tree rows, 30 of them 1800; 86 rows 2026, 210 rows 2025. Labelled as ours. Lesson family: API paging, filtering and label cleaning.',
    requiredMentions: [
      'REMOVAL SITE',
      'MAPL, NWY CRMSN KG',
      'Twenty requests, one file',
      '30 of those say 1800',
      'Open Government Licence - Kamloops',
      'Sun Peaks, Chase, Logan Lake, Merritt and Barriere',
      'An AI assistant would tell you Kamloops has 19,730 trees',
      '250, 778, 236, 672 and 257',
      'One ordinary week for a Kamloops learner',
      'Kamloops on permanent Pacific time'
    ],
    sources: [
      { claim: 'City of Kamloops open data portal (Tree layer, Open Government Licence - Kamloops).', url: 'https://maps.kamloops.ca/opendata' },
      { claim: 'City of Kamloops Tree layer (TreeSite), map service REST endpoint, maxRecordCount 1000.', url: 'https://maps.kamloops.ca/arcgis/rest/services/OpenData/OpenDataParks/MapServer/12' },
      { claim: 'City of Kamloops ArcGIS item: Tree, with licence text (commercial use, attribution, non-endorsement).', url: 'https://www.arcgis.com/home/item.html?id=e14c04be6c6c4692b70147edb937088c' },
      { claim: 'BC curriculum, ADST: Grade 6-7 modules and the 10-12 course list.', url: 'https://curriculum.gov.bc.ca/curriculum/adst' },
      { claim: 'BC curriculum, Computer Programming 11 and 12 content.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/11/computer-programming' },
      { claim: 'BC curriculum, Mathematics: Computer Science 11 and 12.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/11/computer-science' },
      { claim: 'BC Gov News 2026AG0013-000209: permanent daylight time, UTC-7.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' },
      { claim: 'CEMC contests 2026-27: BCC and CCC dates, through-a-school rule.', url: 'https://cemc.uwaterloo.ca/contests' }
    ],
    rejectedClaims: [
      'Any Kamloops population figure: StatCan not reachable live, nothing printed.',
      'That Kamloops has 19,730 trees: refused; only 17,207 rows are trees, and the inventory covers city-tracked trees only.',
      'A combined cleaned maple-plus-crabapple total or any summed genus total: not printed.',
      'Planting-year trends: refused as a claim about planting; the year field is blank on most rows and has 1800 placeholders.',
      'Tree risk, defect, inspector and address fields: not pulled or used.',
      'A published fetch script: not printed, because Python urllib requests to the server returned HTTP 500 in our test; the paging method is described instead.',
      'That our classes earn BC credits: refused.',
      'Any affiliation with the City of Kamloops, the BC ministry or CEMC.'
    ]
  }
};
