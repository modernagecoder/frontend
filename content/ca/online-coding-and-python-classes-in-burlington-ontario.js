'use strict';
// Burlington, Ontario (cg- city page, Canada cluster Wave 2, row 133). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md (section "Province, city and math-tutor city pages").
// Spine: a parent's checklist for the first live online class (before, during, after); what a parent should be able to
// see at each stage of the Python path, tied to Ontario expectations and the OSSD STEM group; a City of Burlington
// traffic-count project that joins 2018 and 2022 rows on a segment key and meets repeated keys; Waterloo contests and
// what Waterloo's own pages say about them; Eastern time.
// Sources (curriculum, diploma, contest and admission facts from keyword-research-2026-09/ca/facts-schools-contests.md with
// saved raw files in ca/src/; geography from ca/facts-geo.md; the traffic files, item records, terms and our scripts in
// ca/src-pilots/online-coding-and-python-classes-in-burlington-ontario/):
//  - Ontario DCP API: Grade 2 C3.1 "including code that involves sequential and concurrent events"; Grade 4 C3.1 "sequential,
//    concurrent, repeating, and nested events"; Grade 6 C3.1 "by writing and executing efficient code"; MTH1W description
//    "Students will use mathematical processes, mathematical modelling, and coding to make sense of the mathematics they
//    are learning"; ICS3C "This course introduces students to computer programming concepts and practices. Students will
//    write and test computer programs"; ICS3U and ICS3C have no prerequisite.
//  - ontario.ca OSSD page (updated September 02, 2026): Grade 9 in 2024 or later "You need the following 17 compulsory
//    credits"; "Of the 17 compulsory credits, you must complete 1 from the following group:" with "computer studies" in the
//    list; "3 credits in mathematics (Grade 9, Grade 10 and 1 credit in Grade 11 or 12)".
//  - CEMC: Pascal/Cayley/Fermat "Tuesday, February 23, 2027 and Wednesday, February 24, 2027"; Fryer/Galois/Hypatia
//    "Wednesday, April 7, 2027"; Euclid "Tuesday, April 6, 2027"; CCC "Wednesday, February 17, 2027"; "all students must
//    participate through their school". University of Waterloo: contests "not required for admission, but writing one of
//    these contests is required for some scholarships offered by the Faculty of Mathematics"; AIF "This form asks about any
//    Waterloo mathematics contests you've participated in"; AIF deadline "February 15, 2027".
//  - facts-geo.md: Burlington is in the Hamilton CMA, not the Toronto CMA; 905 belt area codes 289/365/742/905; Ontario
//    UTC-5 from 1 November 2026, UTC-4 from 14 March 2027 (IANA tzdb 2026e).
//  - City of Burlington open data (Navigate Burlington): AADT item fcd514cc40244d63b4a5b8fd3e337953, snippet "City of
//    Burlington Annual Average Daily Traffic (AADT) - Years 2016 - 2018", layer AADT Counts 2018 (310 rows, fields include
//    Source); AADT 2022 item f6f3ad1316f94b2ca0699de7f2c1e605, description "The AADT data is obtained yearly from
//    Transportation road counts (TES).", layer AADT Counts 2022 (1,687 rows, count endpoint 1687, no Source field).
//    Downloaded with curl on 23 October 2026.
//  - City of Burlington Terms of Use for Open Data (dated September 19, 2011): opendata.burlington.ca timed out, so the
//    PDF was read from the Internet Archive copy of 3 September 2026 (terms_IA20260903.pdf): "grants you a worldwide,
//    royalty-free, non-exclusive, revocable licence to use, reproduce, modify, and distribute the datasets in all current
//    and future media and formats for any lawful purpose"; credit not required; "No Endorsement"; "No Association". It is
//    not an Open Government Licence and is not called one.
// Our own calculations (burlington_join.py and burlington_checks.py, python -I, outputs saved): 2018 file 310 rows, 309
// distinct TES_ID (231330 BLUE SPRUCE AVE. appears twice, identical); 2022 file 1,687 rows, 1,581 distinct TES_ID, 71 ids
// repeated, 12 rows with blank or zero Volume; joined pairs (2022 row with a 2018 match and a Volume) 327, covering 294
// distinct ids, 52 pairs from repeated 2022 ids; largest falls CAVENDISH DR. 12,016 to 471 and 11,038 to 605 (both 2018
// Source "Single intersection"), GUELPH LINE 26,578 to 19,123; largest rises UPPER MIDDLE RD. 2,741 to 13,605, WALKER'S LINE
// 38,350 to 46,439, PLAINS RD. E 20,147 to 27,603; 2022 highest row WALKER'S LINE 48,451; 2022 median 2,964 over 1,675
// rows with a volume; 371 street names in 2022.
// Lesson family: joining two tables on a key with a dictionary, then auditing repeated keys and implausible changes.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import json',
  '',
  'def load(path):',
  '    with open(path, encoding="utf-8") as f:',
  '        return [feat["attributes"] for feat in json.load(f)["features"]]',
  '',
  'y2018 = load("aadt_2018.json")',
  'y2022 = load("aadt_2022.json")',
  '',
  'by_id_2018 = {}',
  'for row in y2018:',
  '    by_id_2018[row["TES_ID"]] = row   # a repeated TES_ID keeps only its last row',
  '',
  'pairs = []',
  'for row in y2022:',
  '    old = by_id_2018.get(row["TES_ID"])',
  '    if old and row["Volume"]:',
  '        pairs.append((row["STREET_NAM"], old["Volume"], row["Volume"]))',
  '',
  'print(len(y2018), len(by_id_2018), len(y2022), len(pairs))',
  'pairs.sort(key=lambda p: p[2] - p[1])',
  'for street, before, after in pairs[:3] + pairs[-3:]:',
  '    print(street, before, after, after - before)'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'BURLINGTON', label: 'Burlington', blurb: 'Live online coding and Python for Burlington, Ontario: a parent\'s checklist for the first class, what each Python stage should show, and a city traffic-count project.' },
  market: CA,
  slug: 'online-coding-and-python-classes-in-burlington-ontario',
  code: 'pyb',
  accent: '#802A2E',
  accentRationale: 'Burlington: a muted brick red, #802A2E, allocated for this row; contrast 8.66 on the paper #FBF8F2 (8.14 and 7.45 on the darker tints), far from the retired purple and cyan band',
  pageType: 'city',
  place: {
    name: 'Burlington',
    eyebrow: 'Burlington, Ontario',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Ontario' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-ontario', name: 'Ontario' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Ontario', href: '/coding-classes-in-ontario' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Burlington',
  title: 'Online Coding and Python Classes in Burlington, Ontario',
  description: 'Live online coding and Python for Burlington, Ontario students aged 6 to adult: a parent\'s first-class checklist, the Python path and a city traffic data project.',
  ogDescription: 'What a Burlington parent should check in a first live online coding class, what each Python stage should show, and a project on the city traffic counts.',
  twitterDescription: 'Burlington, Ontario coding and Python classes, live online with a teacher.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Burlington, Ontario',
    description: 'Live online coding and Python for Burlington students from Grade 1 to adult, in a group of fifteen to twenty or one to one, with data projects, Waterloo contest preparation and an ICS3U and ICS4U companion.'
  },

  h1: 'Online coding and Python classes in Burlington, Ontario',
  capsuleQ: 'How do live online coding and Python classes work for Burlington families?',
  capsule: 'Modern Age Coders gives Burlington, Ontario students from age 6 to adult live online coding and Python classes: a teacher on video reads the student\'s code while it is written, in a group of fifteen to twenty or one to one. Children usually start in Python and AI for Kids and teens in Python for Teens. The first class costs nothing.',
  lead: 'Most parents in Burlington can judge a swimming lesson from the side of the pool. A coding lesson is harder to judge, because the important part happens in the student\'s head and on a screen the parent rarely sees. This page is written for that parent. It starts with a checklist for the free first class, so you know what a real live lesson should include and what should worry you. Then it sets out what you should be able to see your child do at each stage of learning Python, and closes with a project on the City of Burlington\'s own traffic counts, where joining two years of data turns up exactly the kind of surprise that a student has to learn to question rather than print.',
  wa: 'Hello Modern Age Coders, I would like a free live coding or Python class for a student in Burlington, Ontario.',

  picks: {
    eyebrow: 'Python picks for Burlington',
    h2: 'Four courses Burlington students join',
    intro: 'Taught live in a group or one to one. The free first class shows which one fits.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Real typed Python for children, through games, drawings and quizzes that they run and explain to the teacher.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'A complete teen course from first program to functions, files and data, the base for the traffic project on this page.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from scratch for Burlington adults who want to automate work tasks or move into data roles.' },
      { course: 'ics3u-ics4u-computer-science-companion-course', band: 'Grades 11 and 12', note: 'Practice and projects alongside a school ICS3U or ICS4U course. We do not grant Ontario credits; the school does.' }
    ]
  },

  sections: [
    {
      id: 'checklist', tint: '', eyebrow: 'First class checklist',
      h2: 'What a Burlington parent should check in the free first class',
      intro: 'Use this list during the first live lesson, with us or with anyone else. It is ours, written from what we think a live class must contain to be worth the time.',
      body: [
        { kind: 'table', caption: 'A parent\'s checklist for a first live online coding class (our checklist)', head: ['When', 'What to look for', 'A warning sign'], rows: [
          ['1. Before the class', 'You are asked the student\'s grade, what they have tried, and whether they type comfortably', 'Only your payment details are asked for'],
          ['2. First minutes', 'The teacher speaks to the student, not to you, and asks what they want to build', 'A sales pitch or a slide deck about the company'],
          ['3. Most of the lesson', 'Your child types code in their own editor while the teacher watches it on a shared screen', 'Your child mostly watches the teacher type'],
          ['4. When code fails', 'The teacher asks your child to read the error and guess the cause', 'The teacher fixes it silently and moves on'],
          ['5. Last minutes', 'Your child explains what the finished program does, in their own words', 'The class ends on a finished program nobody explained'],
          ['6. Afterwards', 'You get a suggested course, a level and the reasons for both', 'Pressure to pay before you have decided']
        ] },
        { kind: 'p', text: 'Rows 3 and 4 matter most. A live online class is only worth having over a video if the teacher can see the student\'s own code and respond to it. If a Burlington child spends the hour watching someone else\'s screen, it is a lecture with a webcam. Our teachers keep the keyboard with the student, in a group class and in a private one.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Group of fifteen to twenty', p: 'All the students work at one stage. The teacher reads two or three students\' programs aloud each class, so a quiet student still gets their code looked at.' },
          { h3: 'One to one', p: 'One student and one teacher, at times agreed with you. The pace is the student\'s own, which suits ICS4U projects and contest practice.' },
          { h3: 'What you need at home', p: 'A laptop or desktop with a keyboard and microphone. Python is installed together in the first lesson; tablets are fine for blocks only.' }
        ] }
      ]
    },
    {
      id: 'stages', tint: 'tint', eyebrow: 'The Python path',
      h2: 'What you should see your child do at each stage of Python',
      intro: 'Stages are ours. The third column quotes the Ontario expectation each one builds on, read from the curriculum service on 22 October 2026, so you can link what you see at home to what school asks.',
      body: [
        { kind: 'table', caption: 'Our four Python stages as a parent would see them, with the Ontario expectation behind each (ministry wording in quotation marks)', head: ['Stage (ours)', 'What you can see at home', 'Ontario expectation it builds on'], rows: [
          ['1. Sequences', 'Your child runs a short program and can say which line prints what', 'Grade 2 C3.1: code with &ldquo;sequential and concurrent events&rdquo;'],
          ['2. Loops inside loops', 'They draw a grid or a pattern with one loop nested in another and can explain the order', 'Grade 4 C3.1: &ldquo;sequential, concurrent, repeating, and nested events&rdquo;'],
          ['3. Better code', 'They rewrite a working program so it is shorter or faster, and say why it is better', 'Grade 6 C3.1: solving problems by &ldquo;writing and executing efficient code&rdquo;'],
          ['4. Math in code', 'They test an equation or a pattern with a program before trusting it', 'MTH1W: students use &ldquo;mathematical modelling, and coding to make sense of the mathematics&rdquo;']
        ] },
        { kind: 'p', text: 'After stage 4 most teens move to files and data, which is where the traffic project below sits, and some begin preparing for the CCC. The stages are a sequence rather than a timetable: a careful 10-year-old can spend a long time on stage 2, and that is time well spent, because nested loops are where many beginners start copying instead of thinking.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Computer studies and the diploma', p: 'For students who started Grade 9 in 2024 or later, ontario.ca lists 17 compulsory credits, one of which must come from a group that includes computer studies. That is one reason ICS3U is worth a look in Grade 11.' },
          { h3: 'Two Grade 11 courses', p: 'Ontario offers ICS3U, the university-preparation course, and ICS3C, which the ministry describes as introducing programming concepts and practices in which students write and test programs. Neither has a prerequisite.' },
          { h3: 'Our role', p: 'We teach beside school courses and do not replace them. The companion course adds practice for ICS3U and ICS4U; the credit is the school\'s to grant.' }
        ] }
      ]
    },
    {
      id: 'traffic', tint: 'deep', eyebrow: 'Burlington data project',
      h2: 'Which Burlington road segments changed most between 2018 and 2022?',
      intro: 'The City of Burlington publishes Annual Average Daily Traffic (AADT) counts by road segment, one layer per year, each segment carrying a TES_ID. We downloaded the 2018 and 2022 layers on 23 October 2026 and joined them on TES_ID in Python. Every figure here is our own output.',
      body: [
        { kind: 'table', caption: 'Largest changes in our join of the City of Burlington AADT layers, 2018 to 2022, matched on TES_ID (our calculation; volumes as the files record them)', head: ['Street (2022 file)', '2018 volume', '2022 volume', 'Change'], rows: [
          ['CAVENDISH DR.', '12,016', '471', '-11,545'],
          ['CAVENDISH DR.', '11,038', '605', '-10,433'],
          ['GUELPH LINE', '26,578', '19,123', '-7,455'],
          ['PLAINS RD. E', '20,147', '27,603', '+7,456'],
          ['WALKER\'S LINE', '38,350', '46,439', '+8,089'],
          ['UPPER MIDDLE RD.', '2,741', '13,605', '+10,864']
        ] },
        { kind: 'p', text: 'The join is the lesson. The program first builds a dictionary from the 2018 rows keyed by TES_ID, then looks up each 2022 row in it. A comment in the code marks the trap that the next part of the lesson is about:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Keys that repeat', p: 'The 2018 layer has 310 rows but 309 distinct TES_ID values, because one segment on Blue Spruce Avenue appears twice. The 2022 layer is worse: 1,687 rows, 1,581 distinct ids, 71 of them repeated.' },
          { h3: 'What that does to the join', p: 'The program found 327 matched pairs, but they cover only 294 distinct segments; 52 pairs come from 2022 ids that appear more than once. Counting pairs as if they were segments would overstate the result.' },
          { h3: 'A drop worth doubting', p: 'Two Cavendish Drive segments fall from about 11,000 and 12,000 vehicles a day to 471 and 605. The 2018 file labels both Single intersection in its Source column; the 2022 file has no Source column at all, so the program cannot tell us why.' }
        ] },
        { kind: 'callout', h3: 'What the table cannot claim', p: 'These are differences between two files, not proof that traffic changed by that much. The method behind a figure may differ by year, a segment may have been redrawn, and some 2022 rows repeat. A student who writes &ldquo;Upper Middle Road traffic quintupled&rdquo; has trusted the join too far; one who writes what the files record, and what they cannot show, has done data work.' },
        { kind: 'p', text: 'For scale, the busiest 2022 row is on Walker\'s Line at 48,451 and the median of the 1,675 rows with a volume is 2,964. The City\'s item description says the AADT data is obtained yearly from Transportation road counts (TES). The files are used under the City of Burlington Terms of Use for Open Data, which grant a worldwide, royalty-free, non-exclusive, revocable licence for any lawful purpose. The live terms server did not respond, so we read them from the <a class="cg-inline-link" href="https://web.archive.org/web/20260903224504/https://opendata.burlington.ca/opendata-terms-of-use/City%20of%20Burlington%20-%20Open%20Data%20Terms%20of%20Use.pdf">Internet Archive copy</a>; the data is from the <a class="cg-inline-link" href="https://navburl-burlington.opendata.arcgis.com/">Navigate Burlington</a> portal. The City has not endorsed this page or our classes, and we have no association with it.' }
      ]
    },
    {
      id: 'contests', tint: '', eyebrow: 'Contests and university',
      h2: 'Waterloo contests for Burlington teens, and why universities ask about them',
      intro: 'Dates are CEMC\'s North and South America dates for 2026 to 2027 and admission lines are from University of Waterloo pages, both read on 22 October 2026.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Grades 9 to 11, February', p: 'Pascal (Grade 9), Cayley (Grade 10) and Fermat (Grade 11) run on 23 and 24 February 2027. Six days earlier, CEMC lists the 2027 CCC for Wednesday 17 February 2027.' },
          { h3: 'Grades 9 to 12, April', p: 'Euclid, for the final year of high school, is on 6 April 2027, and Fryer, Galois and Hypatia follow on 7 April 2027.' },
          { h3: 'Entered at school', p: 'Students cannot register alone; CEMC requires entry through a school. A Burlington student can ask a nearby school to host them if their own does not take part.' }
        ] },
        { kind: 'p', text: 'The University of Waterloo says writing these contests is not required for admission, but that writing one is required for some Faculty of Mathematics scholarships, and its Admission Information Form, due 15 February 2027 for programs other than those Waterloo lists separately, asks applicants about Waterloo mathematics contests they have taken part in. We make no promise about admission or scholarships; we prepare students with original problems of our own, and our <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contests page</a> goes into each contest. We are not connected with CEMC or the University of Waterloo.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Burlington clocks', p: 'Burlington keeps Eastern time: UTC-4 until 1 November 2026, UTC-5 until 14 March 2027, then UTC-4 again (IANA tzdb 2026e). Every class confirmation we send names the Eastern time.' },
          { h3: 'Teachers in India', p: 'India runs 9 hours 30 minutes ahead in summer and 10 hours 30 minutes in winter, so a 7:00 pm Burlington class in January is 5:30 am the next day for the teacher. Managing that is our job.' },
          { h3: 'Hamilton area, 905 numbers', p: 'Statistics Canada places Burlington in the Hamilton metropolitan area. Its 289, 365, 742 and 905 numbers all work in the booking form.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'Where Burlington students tend to begin',
    intro: 'By age as a starting guess; the code written in the free class decides.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Blocks and order', p: 'Short sequences and repeats in blocks, with the child saying aloud what each block will do.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 9 to 12', h3: 'Stages 1 to 3', p: 'Typed Python with games and drawings, up to rewriting working code to make it better.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Ages 13 to 18', h3: 'Stage 4 and data', p: 'Math in code, files and joins like the traffic project, plus CCC or Waterloo contest work.', courses: ['python-complete-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Adults', h3: 'Python at work', p: 'The same stages for adults, then spreadsheets, files and automation in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and AI',
    h2: 'Will AI make Python lessons pointless for a Burlington student?',
    intro: 'Not while someone has to decide whether the answer is believable.',
    p1: 'An AI assistant asked to compare Burlington traffic in 2018 and 2022 would join the files and report that Upper Middle Road traffic rose roughly fivefold. It would not mention that 52 of its pairs come from repeated ids, or that the Cavendish Drive drop looks like a change of method rather than a change on the road.',
    p2: 'We teach the thinking first: understand the data, write the join, then interrogate the output. As students get older they use AI tools within the age rules we follow, always as a draft to check against their own reasoning, never as an answer to submit.',
    closer: 'A Burlington student who can explain why 327 pairs are not 327 road segments has learned what programming is for.',
    blogAnchor: 'how coding fits a world of AI assistants'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online classes from Aldershot to Alton Village',
    intro: 'Lessons are online, so a student by the lake and one north of the QEW share a teacher without a drive.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Halton and Hamilton', p: 'Students from Oakville, Milton and Hamilton join the same groups as Burlington students, all on Eastern time.' },
      { h3: 'Grades, not ages', p: 'Teachers know the Ontario grades and course codes, from the Grade 4 coding expectations to ICS4U. Graded school work stays the student\'s own.' },
      { h3: 'Seeing progress', p: 'Every program a student writes is saved in their own folder, so a parent can open the files and see the month\'s work.' },
      { h3: 'Group or one to one', p: 'Fifteen to twenty students at one stage, or one student with one teacher. Both follow the same course.' },
      { h3: 'Free first lesson', p: 'Bring the checklist above. The lesson ends with a recommended course and level, and no card is requested.' }
    ],
    spec: { title: 'No Burlington office', p: 'Modern Age Coders has no office or classroom in Burlington and claims none. Every lesson is live online, taught from India.' }
  },

  fees: {
    h2: 'Fees for Burlington families',
    intro: 'Each fee appears in your own currency, with the currency code beside it.',
    first: 'The first live lesson, free, ending with a recommended course and level.',
    group: 'The monthly fee for a group of fifteen to twenty students at the same stage.',
    private: 'The monthly fee for one student with one teacher, scheduled with you.',
    closer: 'The fee in Burlington is the fee everywhere in Canada. You pay only after the free lesson, once the course and time suit you; the pricing page covers missed classes and holidays.'
  },

  reviewsH2: 'Families and students on Google',

  book: {
    h2: 'Book a free class for a Burlington student',
    intro: 'Tell us the grade or age. A Grade 2 child might make a story with blocks, a Grade 5 student a nested-loop pattern, and a teen or adult start on the traffic files.',
    success: 'Thank you. The team will be in touch shortly about a class for Burlington.'
  },

  faq: {
    h2: 'Burlington parents ask',
    intro: 'Questions we hear from Burlington families before a first lesson.',
    items: [
      { q: 'How can I tell if an online coding class is really live?', a: 'Watch who types. In a live class your child writes code in their own editor while the teacher reads it on a shared screen and asks about it.' },
      { q: 'Is there a Modern Age Coders location in Burlington?', a: 'No. We have no Burlington office. Classes are live online, so students in Aldershot, Alton Village or by the lake join from home.' },
      { q: 'What size is a group class?', a: 'Fifteen to twenty students at the same stage. Families who want a teacher to themselves choose one to one, with the same course content.' },
      { q: 'Is my 8-year-old ready for Python?', a: 'Often not yet. Most children are ready for typed Python at about 9. From age 6 we start with blocks and move on when reading and typing are comfortable.' },
      { q: 'How does Python connect to Ontario school math?', a: 'Ontario math has coding expectations from Grade 1, and MTH1W in Grade 9 uses coding to help students make sense of the math. Our stages follow the same direction, in more depth.' },
      { q: 'Should my teen write Waterloo contests?', a: 'If they enjoy problems, yes. Waterloo says contests are not required for admission but are needed for some Faculty of Mathematics scholarships. Students enter through their school.' },
      { q: 'Does the ICS3U companion course give a credit?', a: 'No. We do not grant Ontario credits. ICS3U and ICS4U credits come from the school; our course runs beside them with practice and projects.' },
      { q: 'When do Burlington classes take place?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are given in Eastern time.' },
      { q: 'Can adults in Burlington learn Python with you?', a: 'Yes. Adults follow the same stages at their own pace, often aiming at automation or data work, in a group or one to one.' },
      { q: 'Which phone numbers can I use to book?', a: 'Burlington numbers in the 289, 365, 742 and 905 area codes all work. Enter ten digits; the +1 is already in place.' },
      { q: 'What does it cost?', a: 'The fees section shows the free first lesson, a monthly group fee and a monthly one to one fee in your own currency. Nothing is charged before the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario',
    h2: 'Other pages for Burlington and Ontario students',
    html: 'Province-wide detail is on <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a>. Teens choosing a Grade 11 course can read <a class="cg-inline-link" href="/ics3u-computer-science-help">ICS3U computer science help</a>, and contest writers <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contest preparation</a>. Everything else for Canada starts at <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Burlington and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/ics3u-computer-science-help', label: 'ICS3U help' },
    { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo contests' },
    { href: '/coding-classes-for-teens-in-canada', label: 'Teen coding in Canada' }
  ],

  personalityCss: `
.cg-root.cg-pyb .cg-hero h1 { font-weight: 720; letter-spacing: -0.016em; line-height: 1.07; }
.cg-root.cg-pyb .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-pyb .cg-eyebrow { letter-spacing: 0.09em; font-weight: 700; text-transform: uppercase; font-size: 0.77rem; }
.cg-root.cg-pyb .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.008em; }
.cg-root.cg-pyb .cg-table caption { text-align: left; font-weight: 650; }
.cg-root.cg-pyb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pyb #traffic code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.79rem; line-height: 1.55; padding: 0.9rem 1.05rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-pyb .cg-ladder-col { border-top: 1px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-pyb .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and ontario.ca and saved raw: Elementary Mathematics (2020) Grade 2, 4 and 6 C3.1; MTH1W (2021) course description; ICS3C description, ICS3U and ICS3C without prerequisite; OSSD (2024+ starters) 17 compulsory credits with computer studies in the STEM-related group. CEMC 2026-27 dates (PCF, FGH, Euclid, CCC) and through-a-school rule; University of Waterloo contest and AIF lines. Burlington in the Hamilton CMA, 905 belt area codes and Eastern time offsets from facts-geo.md (IANA tzdb 2026e).',
    localProject: 'City of Burlington open data (Navigate Burlington), AADT Counts 2018 and AADT Counts 2022 layers (City of Burlington Terms of Use for Open Data, read from an Internet Archive copy), downloaded with curl on 23 October 2026 and joined on TES_ID with our script burlington_join.py (python -I): 310 and 1,687 rows, 309 and 1,581 distinct ids, 71 repeated in 2022; 327 pairs over 294 distinct segments, 52 from repeated ids; largest changes Cavendish Dr. 12,016 to 471, Upper Middle Rd. 2,741 to 13,605. Labelled as ours. Lesson family: joining on a key with a dictionary and auditing repeated keys.',
    requiredMentions: [
      '1,687 rows, 1,581 distinct ids, 71 of them repeated',
      'they cover only 294 distinct segments',
      'one segment on Blue Spruce Avenue appears twice',
      'the median of the 1,675 rows with a volume is 2,964',
      'non-exclusive, revocable licence for any lawful purpose',
      'Two Cavendish Drive segments fall',
      'a 7:00 pm Burlington class in January',
      'Aldershot, Alton Village or by the lake',
      'Oakville, Milton and Hamilton join the same groups'
    ],
    sources: [
      { claim: 'Ontario curriculum content API: elementary math C3.1 (Grades 2, 4, 6), MTH1W course description, ICS3C description.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_4___strands?depth=4' },
      { claim: 'ontario.ca: earning the OSSD, compulsory credits and the STEM-related group.', url: 'https://www.ontario.ca/page/high-school-graduation-requirements' },
      { claim: 'CEMC: contest dates 2026/27 (PCF, FGH, Euclid, CCC).', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'CEMC: how contests work (through a school).', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'University of Waterloo: Computer Science admission (contests and scholarships).', url: 'https://uwaterloo.ca/future-students/programs/computer-science' },
      { claim: 'University of Waterloo: Admission Information Form (contests question, deadline).', url: 'https://uwaterloo.ca/future-students/admissions/admission-information-form' },
      { claim: 'City of Burlington: AADT item, years 2016 to 2018.', url: 'https://www.arcgis.com/home/item.html?id=fcd514cc40244d63b4a5b8fd3e337953' },
      { claim: 'City of Burlington: AADT 2022 item (TES counts).', url: 'https://www.arcgis.com/home/item.html?id=f6f3ad1316f94b2ca0699de7f2c1e605' },
      { claim: 'City of Burlington Terms of Use for Open Data (Internet Archive copy, 3 September 2026).', url: 'https://web.archive.org/web/20260903224504/https://opendata.burlington.ca/opendata-terms-of-use/City%20of%20Burlington%20-%20Open%20Data%20Terms%20of%20Use.pdf' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Burlington population: StatCan was not reachable live.',
      'That Burlington traffic on any road rose or fell by the amounts in the join: refused; the table shows differences between two files.',
      'A meaning for the 2018 Source labels applied to 2022 figures: refused; the 2022 layer has no Source field.',
      'Calling the Burlington terms an Open Government Licence: refused; they are the City\'s own Terms of Use.',
      'Any promise about university admission or scholarships: refused.',
      'That our classes earn or count toward an Ontario credit: refused.',
      'CEMC contest fees: left out (currency-neutral page).',
      'Names of Burlington schools or private people: not used.',
      'Any affiliation with the City of Burlington, the Ontario Ministry of Education, CEMC or the University of Waterloo.'
    ]
  }
};
