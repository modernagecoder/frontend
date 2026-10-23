'use strict';
// Calgary (cg- city page, Canada cluster Plan 2 Wave 2, row 103). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md. Shape from coding-and-ai-classes-in-toronto.js, prose fresh.
// Spine: a Calgary student's school path runs toward Alberta's Grade 12 diploma exams, where 30% of the mark is one sitting,
// so the habits worth building early are careful counting and checking; the city's playground equipment file shows the
// difference between counting rows and counting things. Calgary keeps one clock all year, which makes scheduling simple.
// Sources, read raw on 22 October 2026 (Alberta facts from keyword-research-2026-09/ca/facts-schools-contests.md and raw
// files in ca/src/alberta/ and ca/src-pilots/alberta-math-30-1-diploma-exam-prep/; geography from ca/facts-geo.md; the
// playground file, metadata and licence in ca/src-pilots/coding-and-ai-classes-in-calgary/):
//  - alberta.ca/curriculum-subject-areas (renewal timeline, raw copy in src-pilots/alberta-grade-6-math-pat-practice/): "New
//    grades K to 3 mathematics ... implemented across the province." September 2022; "New grades 4 to 6 mathematics ...
//    implemented across the province." 2023-24 school year. (curriculum-how-we-got-here files K to 6 under 2022/2023; the
//    staged dates are used.)
//  - alberta.ca/diploma-exams-overview: "The weighting of diploma exams returned to 30% effective September 1, 2023."; "70% of the
//    final mark comes from course work. The remaining 30% comes from the diploma exam."; "To pass a diploma exam course, you must
//    earn a final combined mark of at least 50%."; "Alberta's government has cancelled the January 2026 diploma examinations and
//    Grade 9 Provincial Achievement Tests (PATs)."; exams written "in a digital environment rather than pencil and paper".
//  - General Information Bulletin 2026-2027 diploma schedule (edc-diploma-exam-schedule.pdf, sched-raw.txt): Mathematics 30-1
//    and 30-2 "9 AM-12 PM" (en dash in source) on Tuesday November 3 (2026), Wednesday January 20, Thursday April 8 and
//    Thursday June 17 (2027).
//  - Alberta Official Time Act RSA 2000 c O-5.7 s.1: "official time" means the time 6 hours behind Coordinated Universal Time.
//  - CEMC: BCC "Monday, November 9, 2026 to Friday, November 20, 2026", "only require familiarity with concepts covered in the
//    mathematics curriculum"; Gauss "Students in Grades 7 and 8." and "Motivated students in lower grades are welcome to write
//    the contest.", "Monday, May 10, 2027 to Friday, May 21, 2027"; CCC "Wednesday, February 17, 2027", Junior Q1-2 "(e.g. basic
//    loops and conditions)", 5 questions, 3 hours; "all students must participate through their school"; past contests free.
//  - facts-geo.md: Calgary area codes 403 (Southern Alberta) with the province-wide overlays 368, 587 and 825 (CNAC files via
//    the Internet Archive); Alberta, Saskatchewan UTC-6 all year; BC UTC-7 all year; Ontario UTC-5 winter, UTC-4 summer.
//  - City of Calgary open data, Playground Equipment (bdu9-amk8), playground-equipment.csv, 875,817 bytes, sha256
//    e9681a5f...316630, downloaded 22 October 2026; metadata: "Playground equipment maintained by Calgary Parks or located on
//    lands under Calgary Park's stewardship", update frequency Weekly, licence URL the Open Calgary terms (u45n-7awa); licence
//    text "Open Government Licence - City of Calgary" version 2.1, commercial use allowed, attribution "Contains information
//    licensed under the Open Government Licence - City of Calgary." (en dash in source).
// Our own calculations (calgary_seats.py, python -I, output calgary_seats.out.txt; extra checks on the same file): 5,905 rows;
// TYPE_DESCRIPTION top eight SWING 1,225, MULTI PLAY COMPLEX 1,116, SPRING TOY 684, CLIMBER 592, STATIONARY TOY 543, SPINNING
// TOY 494, TEETER TOTTER SEESAW 382, FITNESS EQUIPMENT 291; seats on SWING rows COUNT_SR_SWING 1,356 and COUNT_BABY_SWING 1,162,
// with 176 SWING rows blank for baby seats; code 1 carries SWING and CLIMBER, code 5 carries SPINNING TOY, KIDS_TABLE and SPRING
// TOY; 144 non-swing rows hold a swing-seat count; LIFE_CYCLE_STATUS ACTIVE 5,684 and INSTALLED 221, and all 221 INSTALLED rows
// are MAINTAINED_BY DEVELOPER CONSTRUCTION; EQUIPMENT_AGE_CLASS SENIOR 1,811, JUNIOR 1,370, COMBINED 992, blank 1,732.
// The ASSET_CLASS column holds free-text staff notes, one naming a person: never printed. ASSET_CD is undocumented: not interpreted.
// Lesson family: rows versus quantities (summing a count column that has blanks), then checking a code against its label.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  'from collections import Counter',
  '',
  'by_label = Counter()',
  'seats = Counter()',
  'blank_baby = 0',
  'labels_for_code = {}',
  '',
  'with open("playground-equipment.csv", encoding="utf-8-sig") as equipment:',
  '    for row in csv.DictReader(equipment):',
  '        label = row["TYPE_DESCRIPTION"]',
  '        by_label[label] += 1',
  '        labels_for_code.setdefault(row["ASSET_TYPE"], set()).add(label)',
  '        if label == "SWING":',
  '            for column in ("COUNT_SR_SWING", "COUNT_BABY_SWING"):',
  '                if row[column].strip():',
  '                    seats[column] += int(row[column])',
  '            if not row["COUNT_BABY_SWING"].strip():',
  '                blank_baby += 1',
  '',
  'for label, n in by_label.most_common(8):',
  '    print(label, n)',
  'print(dict(seats), "| SWING rows with no baby-seat count:", blank_baby)',
  'for code in sorted(labels_for_code, key=int):',
  '    if len(labels_for_code[code]) != 1:',
  '        print("code", code, "has labels", sorted(labels_for_code[code]))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'CALGARY', label: 'Calgary', blurb: 'Coding and AI for Calgary students, set against Alberta\'s diploma exams, with a City of Calgary playground data project on one clock all year.' },
  market: CA,
  slug: 'coding-and-ai-classes-in-calgary',
  code: 'aica',
  accent: '#3E570D',
  accentRationale: 'Calgary: a deep muted olive-green, #3E570D, the colour of foothills grass in late summer; nearest site accent 6.8 RGB units away and every Canada accent at least 14.9 away; contrast 7.70 on the paper #FBF8F2 and above 6.6 on all three paper tints',
  pageType: 'city',
  place: {
    name: 'Calgary',
    eyebrow: 'Calgary, Alberta',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Alberta' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-alberta', name: 'Alberta' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Alberta', href: '/coding-classes-in-alberta' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Calgary',
  title: 'Coding and AI Classes in Calgary | Live Online, Ages 6 and Up',
  description: 'Live online coding, Python and AI classes for Calgary students and adults: Alberta school stages to Math 30-1, CEMC contest dates and a city playground data project.',
  ogDescription: 'Calgary students head toward Alberta diploma exams worth 30% of a Grade 12 mark. Here is where coding fits, the 2026 to 2027 dates, and live online classes.',
  twitterDescription: 'Calgary coding, Python and AI classes, live online, on Alberta time all year.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and AI Classes for Calgary Students',
    description: 'Live online coding for Calgary learners from age 6 to adult: block coding for young children, Python for teens, AI and machine learning, and Pre-calculus 12 and Math 30-1 support, placed by level.'
  },

  h1: 'Coding and AI classes in Calgary',
  capsuleQ: 'Can a Calgary student learn coding and AI live with a real teacher, online?',
  capsule: 'Yes. Modern Age Coders runs live online coding, Python and AI classes for Calgary learners from age 6 to adult, taught one to one or in a class of fifteen to twenty. Young children usually begin with block coding, teenagers with Python for Teens, and Grade 12 students add our Pre-calculus 12 and Math 30-1 course. The first class is free.',
  lead: 'For a Calgary student in a Grade 12 diploma course, the course ends at a desk with an Alberta diploma exam, and in Mathematics 30-1 that one sitting is worth 30% of the final mark. Long before then, Alberta\'s newer elementary math curriculum, brought in for kindergarten to Grade 3 in September 2022 and for Grades 4 to 6 in the 2023 to 2024 school year, has been asking children to reason step by step. Coding is one of the clearest ways to practise that, because a program does exactly what it is told, and a student learns to count, check and explain before trusting an answer. This page sets out the Alberta dates a Calgary family will meet in 2026 to 2027, the CEMC contests open to Calgary students, a project our students run on the City of Calgary playground equipment file, and why Calgary\'s single all-year clock makes live classes easy to schedule.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Calgary.',

  picks: {
    eyebrow: 'Course picks for Calgary',
    h2: 'Four courses Calgary families start with',
    intro: 'Matched to Alberta\'s school stages, then confirmed in a free first lesson where the teacher sees what the student can already do.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding that grows into games and simple apps, so a young child learns that order, repetition and choices make a program work.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'Python from a first line to files and data, which is the toolkit behind the playground project on this page.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 10 to 12', note: 'Machine learning built from Python, where every model is checked against data the student has counted by hand first.' },
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', band: 'Grade 12', note: 'Math 30-1 taught for understanding alongside the school course, ahead of a diploma exam worth 30% of the mark.' }
    ]
  },

  sections: [
    {
      id: 'alberta', tint: '', eyebrow: 'Alberta school stages',
      h2: 'The Alberta dates and rules a Calgary student meets on the way to Grade 12',
      intro: 'Calgary schools follow Alberta\'s curriculum and its provincial exams. We read the government pages and bulletins below on 22 October 2026; short quotations are Alberta\'s, the rest is our summary.',
      body: [
        { kind: 'table', caption: 'Mathematics 30-1 diploma exam sittings for 2026 to 2027, from Alberta\'s 2026-2027 General Information Bulletin (each sitting 9 am to noon; read 22 October 2026)', head: ['Sitting', 'Date', 'Written with'], rows: [
          ['November', 'Tuesday 3 November 2026', 'Mathematics 30-2, same morning'],
          ['January', 'Wednesday 20 January 2027', 'Mathematics 30-2, same morning'],
          ['April', 'Thursday 8 April 2027', 'Mathematics 30-2, same morning'],
          ['June', 'Thursday 17 June 2027', 'Mathematics 30-2, same morning']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Seventy and thirty', p: 'Alberta says diploma exam weighting returned to 30% from 1 September 2023: 70% of the final mark comes from course work and 30% from the exam. To pass the course, the combined mark has to reach at least 50%.' },
          { h3: 'January 2026 was cancelled', p: 'Alberta cancelled its January 2026 diploma exams and Grade 9 Provincial Achievement Tests. A Calgary student planning around a January sitting should check the current bulletin rather than last year\'s habits.' },
          { h3: 'On a screen, not on paper', p: 'Alberta now has students write diploma exams and achievement tests digitally rather than with pencil and paper. Typing, reading carefully on a screen and checking work there are skills a coding class practises every week.' }
        ] },
        { kind: 'p', text: 'Below Grade 12, the math curriculum itself has changed. Alberta\'s renewal timeline shows the new elementary math arriving in two steps: kindergarten to Grade 3 in September 2022, then Grades 4 to 6 in the 2023 to 2024 school year. A Calgary child in elementary school today is learning from that newer program. Our <a class="cg-inline-link" href="/alberta-new-math-curriculum-explained">guide to Alberta\'s new math curriculum</a> sets out what changed, and families with a Grade 12 student can read about <a class="cg-inline-link" href="/alberta-math-30-1-diploma-exam-prep">Math 30-1 diploma preparation</a> and <a class="cg-inline-link" href="/math-30-1-vs-math-30-2">choosing between Math 30-1 and 30-2</a>.' },
        { kind: 'callout', h3: 'What we do, and do not, provide', p: 'We teach alongside a student\'s Alberta courses and we do not grant Alberta credits or diploma exam marks; those come only from school and from Alberta Education. We are not connected with Alberta Education, any Calgary school board or the City of Calgary.' }
      ]
    },
    {
      id: 'playgrounds', tint: 'deep', eyebrow: 'Calgary data project',
      h2: 'Rows are not swings: counting Calgary\'s playground equipment properly',
      intro: 'The City of Calgary publishes a list of playground equipment that Calgary Parks maintains or that sits on land in its care, updated weekly. Our students use it to learn the difference between counting rows and counting things. All figures below are ours, worked out from the copy we downloaded on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Rows by equipment type, as we counted them in the City of Calgary Playground Equipment file (5,905 rows; top eight types; downloaded 22 October 2026). One row is one piece of equipment as the city records it', head: ['TYPE_DESCRIPTION in the file', 'Rows'], rows: [
          ['SWING', '1,225'],
          ['MULTI PLAY COMPLEX', '1,116'],
          ['SPRING TOY', '684'],
          ['CLIMBER', '592'],
          ['STATIONARY TOY', '543'],
          ['SPINNING TOY', '494'],
          ['TEETER TOTTER SEESAW', '382'],
          ['FITNESS EQUIPMENT', '291']
        ] },
        { kind: 'p', text: 'A child asked how many swings Calgary has will read 1,225 off that table. That is the number of swing rows, and a swing frame can hold several seats. The file has columns for that, COUNT_SR_SWING for standard seats and COUNT_BABY_SWING for baby seats, and adding them up gives a different and more interesting answer. This short program counts the types, sums the seats and runs one more check. Nothing beyond the standard library is needed, and it looks for the CSV in its own folder:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count rows', p: 'A Counter tallies TYPE_DESCRIPTION once per row. It answers how many pieces of each type the city lists, which is a fair question with a clear answer: 1,225 swings, 1,116 multi play complexes, 684 spring toys.' },
          { h3: '2. Sum quantities', p: 'On the swing rows, the seat columns add up to 1,356 standard seats and 1,162 baby seats. But 176 swing rows leave the baby-seat count blank, so 1,162 is a floor, not a total: the true number can only be higher.' },
          { h3: '3. Check codes against labels', p: 'Each type also has a numeric code in ASSET_TYPE. Code 1 should always mean SWING, yet one code-1 row says CLIMBER; code 5 carries SPINNING TOY, KIDS_TABLE and one SPRING TOY. Those few rows are worth a polite email to the city, not a guess.' }
        ] },
        { kind: 'table', mt: true, caption: 'More of our checks on the same City of Calgary file (our counts; the city publishes none of these totals)', head: ['Question', 'What we found'], rows: [
          ['Rows marked ACTIVE and INSTALLED in LIFE_CYCLE_STATUS', '5,684 and 221'],
          ['INSTALLED rows maintained by DEVELOPER CONSTRUCTION', 'All 221 of them'],
          ['Rows that are not swings but still hold a swing-seat count', '144'],
          ['EQUIPMENT_AGE_CLASS: SENIOR, JUNIOR, COMBINED, blank', '1,811, 1,370, 992 and 1,732']
        ] },
        { kind: 'callout', h3: 'Where the file stops', p: 'The file lists equipment, not playgrounds, and it does not tell us how many separate playgrounds there are, how old each piece is or what state it is in. SENIOR and JUNIOR are the city\'s own age classes for equipment; we do not guess the ages behind them. Saying exactly what a count means is the part of the lesson that lasts.' },
        { kind: 'p', text: 'The licence is the Open Government Licence - City of Calgary, version 2.1, which permits commercial use as long as the source is credited. Contains information licensed under the Open Government Licence - City of Calgary (<a class="cg-inline-link" href="https://data.calgary.ca/stories/s/Open-Calgary-Terms-of-Use/u45n-7awa">licence</a>, <a class="cg-inline-link" href="https://data.calgary.ca/Recreation-and-Culture/Playground-Equipment/bdu9-amk8">dataset page</a>). The counts are ours; the City of Calgary has no part in this page or in our teaching.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests from Calgary',
      h2: 'CEMC contests Calgary students can enter in 2026 to 2027, starting young',
      intro: 'Schools across Alberta order contests from CEMC, the math and computing centre at the University of Waterloo. Three of them suit a Calgary student meeting code for the first time. Dates are CEMC\'s for the Americas, checked 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Three CEMC contests that work as first contests for Calgary students, 2026 to 2027 (CEMC wording and dates)', head: ['Contest', 'Who it suits', 'CEMC date', 'Why it fits a beginner'], rows: [
          ['Beaver Computing Challenge', 'Any student in Grade 10 or younger, in three levels', '9 to 20 November 2026', 'CEMC says it needs only concepts from the math curriculum, no coding'],
          ['Gauss', 'Grades 7 and 8, and keen younger students', '10 to 21 May 2027', 'Twenty-five multiple-choice math questions in an hour'],
          ['CCC Junior', 'Any grade, beginner to intermediate programmers', 'Wednesday 17 February 2027', 'Its first questions test basic loops and conditions']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Ask the school', p: 'CEMC does not take individual registrations: in its words, all students must participate through their school. A Calgary student whose school does not order a contest can ask another local school to let them write there.' },
          { h3: 'Younger writers welcome', p: 'The Gauss contest is set for Grades 7 and 8, but CEMC adds that motivated students in lower grades are welcome. A strong Grade 6 coder often enjoys it as a first taste.' },
          { h3: 'Free practice', p: 'CEMC posts ten years of past papers free, with no account needed. We send students to <a class="cg-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests">CEMC\'s archive</a> to practise and teach with problems of our own, never CEMC\'s.' }
        ] },
        { kind: 'p', text: 'The CCC Junior ladder starts where the playground project starts: a loop over input, a condition, a count. By the later Junior questions CEMC expects counting combined with loops and conditions, then recursion and two-dimensional arrays. Our <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a> describes how we build up to it, and the <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo math contest page</a> covers Gauss and the high school contests. CEMC and the University of Waterloo have no link with us.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'One clock all year: Calgary time and India time',
      intro: 'Alberta\'s Official Time Act fixes official time at 6 hours behind Coordinated Universal Time, with no spring or autumn change. That makes Calgary one of the easiest cities to schedule from India, where our teachers are.',
      body: [
        { kind: 'table', caption: 'Calgary example hours shown in India time (Calgary UTC-6 all year under Alberta\'s Official Time Act; India UTC+5:30; arithmetic ours)', head: ['Calgary hour', 'Same moment in India', 'Same moment in Toronto'], rows: [
          ['Wednesday 4 to 5 pm', 'Thursday 3:30 to 4:30 am', '5 to 6 pm in winter, 6 to 7 pm from 14 March 2027'],
          ['Saturday 10 to 11 am', 'Saturday 9:30 to 10:30 pm', '11 am to noon in winter, noon to 1 pm from 14 March 2027']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'No change in November', p: 'Eastern Canada changes its clocks on 1 November 2026 and again in mid-March 2027; Calgary does not. A Calgary class keeps the same Calgary hour all year, and only its Eastern equivalent shifts.' },
          { h3: 'Neighbours on the map', p: 'Saskatchewan also keeps UTC-6 all year, so Regina and Calgary read the same time. British Columbia now sits on UTC-7 all year, one hour behind Calgary in every month.' },
          { h3: 'Calgary numbers', p: 'Calgary numbers use 403, with 587, 825 and 368 shared across Alberta. Any of them works in the form as ten digits; the +1 is filled in for you.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From block coding in Grade 1 to Math 30-1 and machine learning',
    intro: 'Grades are a guide. A free first class decides where each learner really starts.',
    cols: [
      { band: 'Grades 1 to 3', h3: 'Blocks and order', p: 'Short block programs, animations and puzzles, with the order of steps as the first big idea.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 4 to 6', h3: 'Into Python', p: 'Typed code with loops and conditions, built on the step-by-step reasoning Alberta\'s newer math program asks for.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Grades 7 to 10', h3: 'Python and contests', p: 'Python properly, real data files and a first CCC Junior for students who want a contest.', courses: ['python-complete-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Grades 11 and 12', h3: 'Math 30-1 and AI', p: 'Diploma-year math alongside school, and machine learning for students heading to engineering or science.', courses: ['western-canada-grade-12-math-pre-calculus-12-math-30-1-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool will count the swings. Will it say the count is a floor?',
    intro: 'Not unless someone asks the right question.',
    p1: 'Hand an AI assistant the Calgary playground file and ask how many swings there are, and it may report 1,225, the number of rows. Ask for seats and it may add the columns and report 1,162 baby seats as a total, without noticing the 176 blanks that make it a minimum. Both answers look confident. Only a student who has written the sum themselves knows which one to believe.',
    p2: 'So we teach students to think through a problem before typing: what is being counted, what could be missing, and how to check. Older students use AI tools too, inside the age limits we keep to, as a way to test and extend their own reasoning, never as a replacement for it.',
    closer: 'Alberta\'s diploma exams reward the same habit: read the question exactly, show the working, and check the answer against what was asked.',
    blogAnchor: 'why we still think every student should learn to write code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online classes for Calgary and nearby towns',
    intro: 'Every class is online, so a student in the northwest and one in the deep south of the city share a teacher with no drive across town.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Two ways to learn', p: 'Learn in a class of fifteen to twenty at the same stage, or book a teacher to yourself for a faster pace, contest work or Math 30-1.' },
      { h3: 'Alberta grades', p: 'Teachers plan in Alberta grades and course names, so Math 30-1 means the right thing and diploma dates are on the calendar.' },
      { h3: 'Around Calgary', p: 'Families in Airdrie, Cochrane, Chestermere and Okotoks join the same classes on the same Alberta clock.' },
      { h3: 'What to have ready', p: 'A computer with a keyboard, a microphone and internet that can hold a video call. Typing real code is slow on a tablet, so we ask for a keyboard.' },
      { h3: 'The free first class', p: 'It is a real lesson, free, and at the end the teacher suggests a level, a course and a time. We ask for no payment details.' }
    ],
    spec: { title: 'No Calgary centre', p: 'Modern Age Coders has no office or classroom in Calgary or anywhere in Alberta, and claims none. Lessons are live and online, taught from India.' }
  },

  fees: {
    h2: 'Fees for Calgary families',
    intro: 'The fees appear with their currency code beside each figure.',
    first: 'One complete live lesson at no charge, finished with a recommended level, course and time.',
    group: 'The monthly fee for a place in a group of fifteen to twenty students at the same stage.',
    private: 'The monthly fee for private lessons with one teacher, at hours you choose.',
    closer: 'A Calgary family pays the same monthly fee as a family anywhere else in Canada. Billing starts only once you have taken the free lesson and settled on a course and a time. Holidays and missed sessions are covered on the pricing page.'
  },

  reviewsH2: 'What our families and students write on Google',

  book: {
    h2: 'Tell us about your Calgary student',
    intro: 'The first task depends on the student: a block-coded animation for a Grade 1 child, a Python quiz for a Grade 6 student, or the playground file for a teenager ready for messy data.',
    success: 'Thank you. The team will be in touch soon about a class for Calgary.'
  },

  faq: {
    h2: 'Calgary coding and AI questions',
    intro: 'Questions Calgary parents and students ask us most.',
    items: [
      { q: 'Are there coding classes for kids in Calgary with a live teacher?', a: 'Yes, online. From age 6, children learn with a live teacher over video, either in a class of fifteen to twenty or privately. There is no Calgary building to visit.' },
      { q: 'What does Alberta school expect in math before Grade 12?', a: 'Alberta brought in new elementary math in two steps, kindergarten to Grade 3 in September 2022 and Grades 4 to 6 in 2023 to 2024. In Grade 12, Mathematics 30-1 ends with a diploma exam worth 30% of the final mark, with course work making up the other 70%.' },
      { q: 'When are the 2026 to 2027 Math 30-1 diploma exams?', a: 'Alberta lists Tuesday 3 November 2026, Wednesday 20 January 2027, Thursday 8 April 2027 and Thursday 17 June 2027, each from 9 am to noon. Check the current bulletin before planning.' },
      { q: 'Do your classes count toward Alberta credits?', a: 'No. We do not grant Alberta credits or diploma marks. Our Math 30-1 and coding courses run alongside school, and all credits are earned there.' },
      { q: 'Do you have robotics classes in Calgary?', a: 'We teach the coding behind robotics, not the hardware: Python, logic and working with sensor data. A student who wants to build robots should join a school or community team as well.' },
      { q: 'Are there Python classes for Calgary teens?', a: 'Yes. Python for Teens starts at a student\'s first line of code and works up to reading files, writing functions and handling data; our AI and machine learning course follows on from it.' },
      { q: 'Which AI tools will my Calgary teen use in class?', a: 'Only tools suitable for their age. Tools with an adult-only rating, Claude among them, are never used with under-18 students. If a lesson involves ChatGPT, a teenager needs a parent\'s permission, and we get it before that lesson.' },
      { q: 'Does Calgary change its clocks for class times?', a: 'No. Alberta keeps UTC-6 all year under its Official Time Act, so a Calgary class stays at the same Calgary hour in every month.' },
      { q: 'When do classes run for Calgary students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We write every confirmed time in Calgary time.' },
      { q: 'Will a 403 or 587 number work in your form?', a: 'Yes. Calgary numbers with 403 and Alberta numbers with 587, 825 or 368 are all accepted; type the ten digits that follow the +1.' },
      { q: 'Where are the fees shown?', a: 'In the fees section further down: first the free lesson, then what a group place and private lessons cost per month, with the currency code printed beside each. Billing starts only after the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'More for Canada',
    h2: 'Other pages for Calgary and Alberta students',
    html: 'The province-wide picture is on <a class="cg-inline-link" href="/coding-classes-in-alberta">coding classes in Alberta</a>, and the national one on <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>. Math families can use <a class="cg-inline-link" href="/math-30-1-tutor-alberta">Math 30-1 tutoring</a> and <a class="cg-inline-link" href="/alberta-grade-9-math-pat-practice">Grade 9 PAT practice</a>, and contest students <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Calgary and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-alberta', label: 'Alberta' },
    { href: '/alberta-math-30-1-diploma-exam-prep', label: 'Math 30-1 diploma prep' },
    { href: '/alberta-new-math-curriculum-explained', label: 'Alberta math curriculum' },
    { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' }
  ],

  personalityCss: `
.cg-root.cg-aica .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.2vw, 2.3rem); }
.cg-root.cg-aica .cg-hero h1 { font-weight: 740; letter-spacing: -0.02em; line-height: 1.05; }
.cg-root.cg-aica .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-aica .cg-eyebrow { letter-spacing: 0.09em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-aica .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.01em; }
.cg-root.cg-aica .cg-table caption { font-weight: 620; text-align: left; }
.cg-root.cg-aica .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aica #playgrounds code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.81rem; line-height: 1.55; padding: 0.9rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-aica .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-aica .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Alberta, read 22 October 2026: alberta.ca curriculum renewal timeline (K to 3 mathematics September 2022, Grades 4 to 6 mathematics 2023-24); diploma exams overview (30% weighting from 1 September 2023, 70/30 split, 50% pass mark, January 2026 cancellation, digital format); 2026-2027 General Information Bulletin diploma schedule (Mathematics 30-1 on 3 November 2026, 20 January, 8 April and 17 June 2027, 9 am to noon); Official Time Act s.1 (UTC-6 all year). CEMC 2026-27: BCC, Gauss and CCC dates, Gauss eligibility, CCC Junior question ladder, through-a-school rule. Calgary area codes from facts-geo.md (CNAC via the Internet Archive).',
    localProject: 'City of Calgary open data, Playground Equipment (Open Government Licence - City of Calgary, version 2.1), CSV downloaded 22 October 2026 and analysed with our script calgary_seats.py (python -I): 5,905 rows; SWING 1,225, MULTI PLAY COMPLEX 1,116, SPRING TOY 684 and five more types; seats on swing rows 1,356 standard and 1,162 baby, with 176 blanks; codes 1 and 5 carry more than one label; ACTIVE 5,684 and INSTALLED 221, all INSTALLED rows developer-maintained; 144 non-swing rows with seat counts. Labelled as ours. Lesson family: rows versus quantities, summing a count column with blanks, then code-label checks.',
    requiredMentions: [
      'COUNT_BABY_SWING',
      '1,356 standard seats',
      'so 1,162 is a floor, not a total',
      'MULTI PLAY COMPLEX',
      'Rows that are not swings but still hold a swing-seat count',
      'All 221 of them',
      'Rows are not swings',
      'the combined mark has to reach at least 50%',
      'Official Time Act fixes official time',
      'Calgary numbers use 403'
    ],
    sources: [
      { claim: 'alberta.ca: curriculum subject areas and renewal timeline (K to 3 math September 2022; Grades 4 to 6 math 2023-24).', url: 'https://www.alberta.ca/curriculum-subject-areas' },
      { claim: 'alberta.ca: diploma exams overview (30% weighting, 70/30 split, 50% pass, January 2026 cancellation, digital exams).', url: 'https://www.alberta.ca/diploma-exams-overview' },
      { claim: 'Alberta 2026-2027 General Information Bulletin, diploma exam schedule (Mathematics 30-1 sittings).', url: 'https://www.alberta.ca/system/files/custom_downloaded_images/edc-diploma-exam-schedule.pdf' },
      { claim: 'Alberta Official Time Act, RSA 2000 c O-5.7, s.1 (official time 6 hours behind UTC).', url: 'https://kings-printer.alberta.ca/documents/Acts/O05p7.pdf' },
      { claim: 'CEMC: 2026-27 contest dates, BCC and Gauss eligibility, CCC question ladder, through-a-school rule, free past contests.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'City of Calgary open data: Playground Equipment dataset page.', url: 'https://data.calgary.ca/Recreation-and-Culture/Playground-Equipment/bdu9-amk8' },
      { claim: 'City of Calgary: Open Government Licence - City of Calgary, version 2.1 (attribution, commercial use, non-endorsement).', url: 'https://data.calgary.ca/stories/s/Open-Calgary-Terms-of-Use/u45n-7awa' }
    ],
    rejectedClaims: [
      'Any Calgary or Alberta population figure: StatCan was not reachable live, so no population is printed.',
      'That our classes earn Alberta credits or diploma marks: refused; we do not grant Alberta credits.',
      'That we run robotics hardware classes: refused; we teach the programming side only.',
      'A total number of swing seats or of playgrounds: refused; 176 blank seat counts make the sum a floor, and the file lists equipment, not playgrounds.',
      'A meaning for ASSET_CD: not documented in the metadata, so not interpreted.',
      'Any value of the ASSET_CLASS column: free-text staff notes, one naming a person, so never printed.',
      'The ages behind SENIOR and JUNIOR equipment classes: not defined in the file, so not stated.',
      'A Math 30-1 August 2027 sitting: not re-checked in the raw schedule for this page, so not listed.',
      'Names of Calgary schools, school boards or private people: not used.',
      'CEMC fees: left out on purpose (currency-neutral page).',
      'Any affiliation with the City of Calgary, Alberta Education, CEMC or the University of Waterloo.'
    ]
  }
};
