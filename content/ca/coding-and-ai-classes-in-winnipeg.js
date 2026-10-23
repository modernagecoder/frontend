'use strict';
// Winnipeg (cg- city page, Canada cluster Plan 2 Wave 2, row 105). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md. Shape from coding-and-ai-classes-in-toronto.js, prose fresh.
// Spine: 2026 is the year Winnipeg stops changing its clocks, which makes it a city where time is a live topic; Manitoba's
// computer science framework lets teacher and students choose the language, its provincial tests have fixed 2026 to 2027
// dates, and the city's own Leisure Guide schedule is a perfect first lesson in parsing text into data.
// Sources, read raw on 22 October 2026 (saved in ca/src-pilots/coding-and-ai-classes-in-winnipeg/ unless noted; facts-geo.md
// for time and area codes):
//  - Manitoba news release item 75397: "Manitobans' clocks will not revert to standard time on Nov. 1"; "Manitoba joins several
//    other provinces and territories that have adopted or are moving toward a permanent time including British Columbia, Yukon,
//    Northwest Territories, Alberta and Saskatchewan." The Official Time Amendment Act (S.M. 2023 c.4) defines Manitoba Standard
//    Time as "five hours behind Coordinated Universal Time (UTC)" (facts-geo.md).
//  - edu.gov.mb.ca/k12/cur/cs/index.html: "Computer science courses enable students to explore programming languages, develop
//    skills in solving problems and prepare themselves for further studies at college or university."; the framework "replaces
//    the former curriculum documents Computer Science 205 and Computer Science 305". Framework PDF (2004), "Senior 2 (20S), Senior
//    3 (30S), and Senior 4 (40S) Computer Science": "The computer science framework does not prescribe a specific language. The
//    teacher and students will decide which modern programming languages students will learn."; "students will learn to adapt to
//    changes in programming languages and learn new languages as they are developed."
//  - edu.gov.mb.ca/k12/assess/index.html (Manitoba Education and Early Childhood Learning), 2026/27 schedule: Grade 12 Applied
//    Mathematics Achievement Test Tuesday January 26, 2027 and Thursday June 17, 2027; Essential Wednesday January 27, 2027 and
//    Wednesday June 16, 2027; Pre-Calculus Thursday January 28, 2027 and Tuesday June 15, 2027; collection of Grade 3 Numeracy
//    results "Monday, October 19 to Friday, November 27, 2026"; Middle Years Grade 7 Mathematics results "Monday, January 18 to
//    Friday, February 26, 2027".
//  - edu.gov.mb.ca/k12/framework/index.html, Curriculum Updates 2026/27 (September 14, 2026): "Two new Grade 9 Mathematics
//    courses, incorporating an enhanced focus on financial literacy, are posted for pilot and voluntary implementation in 2026/27,
//    with full implementation planned for school year 2027/28."; "The renewed K to 10 Science curriculum has been finalized and
//    posted for full implementation in the 2026/27 school year."
//  - CEMC: BCC "Monday, November 9, 2026 to Friday, November 20, 2026"; CCC "Wednesday, February 17, 2027", languages C, C++,
//    Python 2, Python 3, Java; Gauss "Monday, May 10, 2027 to Friday, May 21, 2027"; "all students must participate through their
//    school"; past contests free; "Our contests are not tests or exams. There is no passing or failing score."
//  - facts-geo.md: Manitoba area codes 204, 431 and 584 (CNAC files via the Internet Archive); Manitoba UTC-5 all year from 1
//    November 2026; Ontario UTC-5 winter, UTC-4 from 14 March 2027; Alberta and Saskatchewan UTC-6 all year.
//  - City of Winnipeg open data, LeisureONLINE Activities (a2fq-ufu6), rows with parent_season 2026 Fall, fetched with
//    https://data.winnipeg.ca/resource/a2fq-ufu6.csv?parent_season=2026%20Fall&$limit=50000 on 22 October 2026
//    (leisureonline-2026-fall.csv, 3,870,146 bytes, sha256 bfe1a321...0cb9f7; an earlier same-day download had identical rows);
//    dataset metadata licence field "Open Government Licence - Winnipeg"; licence page attribution "Contains information licensed
//    under the Open Government Licence - Winnipeg." (en dash in source), commercial use allowed.
// Our own calculations (winnipeg_schedule.py, python -I, output winnipeg_schedule.out.txt; extra checks on the same file):
// 2,440 rows (Open 2,427, Closed 13); 2,451 weekly meeting slots, because 11 rows meet on two days (slots joined by "/");
// slots by day Saturday 546, Monday 417, Sunday 356, Tuesday 326, Wednesday 326, Thursday 308, Friday 172; weekend slots 902;
// start hours 6 pm 481, 5 pm 466, 7 pm 296; slot lengths 30m 1,561, 45m 441, 1h 255; top categories Aquatics - Swimming Lessons
// 1,476, Learn to Skate 428, Active Living 264, Children's - 6 to 12 years 78; 64 rows typed Francais (with accent in file); the
// header spells activty_number. Venue names (which include schools) and disability or health-related programs are not printed.
// Lesson family: parsing a packed text field into parts (split on "/" then ","), then tallying the parts.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  'from collections import Counter',
  '',
  'days = Counter()',
  'start_hours = Counter()',
  'categories = Counter()',
  '',
  'with open("leisureonline-2026-fall.csv", encoding="utf-8-sig") as guide:',
  '    for row in csv.DictReader(guide):',
  '        categories[row["category"]] += 1',
  '        for slot in row["default_pattern_dates"].split("/"):',
  '            day, start, length = slot.split(",")',
  '            days[day] += 1',
  '            start_hours[start[:2] + " " + start[-2:]] += 1',
  '',
  'print(categories.most_common(4))',
  'print(days.most_common())',
  'print(start_hours.most_common(3))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'WINNIPEG', label: 'Winnipeg', blurb: 'Coding and AI for Winnipeg learners in the year Manitoba stops changing its clocks, with Manitoba test dates and a Leisure Guide data project.' },
  market: CA,
  slug: 'coding-and-ai-classes-in-winnipeg',
  code: 'aiwi',
  accent: '#28704A',
  accentRationale: 'Winnipeg: a muted prairie-pine green, #28704A, cooler and bluer than the Alberta greens; allocated by the cluster plan; nearest site accent 6.0 RGB units away, nearest Canada accent 12.4 away; contrast 5.65 on the paper #FBF8F2 and above 4.8 on all three paper tints',
  pageType: 'city',
  place: {
    name: 'Winnipeg',
    eyebrow: 'Winnipeg, Manitoba',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Manitoba' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Time zones 2026', href: '/canada-time-zones-2026-online-class-times' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Winnipeg',
  title: 'Coding and AI Classes in Winnipeg | Live Online, Ages 6 to Adult',
  description: 'Live online coding, Python and AI classes for Winnipeg learners: Manitoba computer science, 2026 to 2027 test and contest dates, and a Leisure Guide data project.',
  ogDescription: 'From 1 November 2026 Winnipeg keeps one clock all year. Here is how coding fits Manitoba school, the 2026 to 2027 dates, and live online classes for every age.',
  twitterDescription: 'Winnipeg coding, Python and AI classes, live online, on Manitoba time.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and AI Classes for Winnipeg Learners',
    description: 'Live online coding for Winnipeg learners from age 6 to adult: Python for children and teens, AI and machine learning, and an adult Python course, placed by level and taught in English.'
  },

  h1: 'Coding and AI classes in Winnipeg',
  capsuleQ: 'Is there a live coding and AI class for Winnipeg learners, from children to adults?',
  capsule: 'Yes. Modern Age Coders teaches Winnipeg learners aged 6 to adult live online, either in a shared class of fifteen to twenty or in private lessons. Children take Python and AI for Kids, teens Python for Teens and then AI and Machine Learning for Teens, and adults our Python Masterclass. Classes keep Manitoba time, and the first lesson costs nothing.',
  lead: 'On 1 November 2026, while Toronto and Montreal turn their clocks back, Winnipeg will not. Manitoba is moving to a permanent five hours behind UTC, which means a class time agreed in Winnipeg this autumn stays put all year. It is a small change with a useful lesson inside it: time, to a programmer, is data that has to be handled carefully. This page covers what a Winnipeg student meets in Manitoba schools, including a computer science framework that leaves the choice of language to teacher and students, the province\'s 2026 to 2027 test dates, the CEMC contests open to Winnipeg students, and a project that takes apart the City of Winnipeg\'s own fall 2026 Leisure Guide, where a single text column holds a whole timetable.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Winnipeg.',

  picks: {
    eyebrow: 'Course picks for Winnipeg',
    h2: 'Four courses for Winnipeg learners of every age',
    intro: 'Picked to cover the full age range, then confirmed by a teacher in the free first class before anything is booked.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Typed Python for children ready to move past blocks, with games, drawings and puzzles that reward careful thinking.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'Python from first program to files and data, including the kind of text parsing used in the Leisure Guide project below.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 10 to 12', note: 'Machine learning in Python, built on data the student has cleaned and checked, so that a model\'s output is questioned rather than believed.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and college students', note: 'Python for grown-ups, from first syntax to scripts that tidy real files at work or in a college course.' }
    ]
  },

  sections: [
    {
      id: 'manitoba', tint: '', eyebrow: 'Manitoba school',
      h2: 'What Manitoba schools set out for a Winnipeg student in 2026 to 2027',
      intro: 'Winnipeg schools follow Manitoba\'s curriculum, published by Manitoba Education and Early Childhood Learning. We read the pages and framework below on 22 October 2026; short quotations are the province\'s, the rest is our summary.',
      body: [
        { kind: 'table', caption: 'The three Grade 12 Mathematics Achievement Tests in Manitoba\'s 2026 to 2027 schedule, by sitting (Manitoba Education and Early Childhood Learning, read 22 October 2026; all dates in 2027)', head: ['Grade 12 math test', 'January sitting', 'June sitting'], rows: [
          ['Applied', 'Tue 26 January', 'Thu 17 June'],
          ['Essential', 'Wed 27 January', 'Wed 16 June'],
          ['Pre-Calculus', 'Thu 28 January', 'Tue 15 June']
        ] },
        { kind: 'p', text: 'Younger students are assessed differently. Manitoba collects Grade 3 numeracy results from 19 October to 27 November 2026, and Grade 7 mathematics results, part of its Middle Years assessment, from 18 January to 26 February 2027. Both are classroom-based rather than a single sitting.' },
        { kind: 'p', text: 'Computer science in Manitoba is a senior years subject, set out in one framework that covers the 20S, 30S and 40S levels. The province says the courses let students explore programming languages, develop problem-solving skills and prepare for college or university, and the framework took the place of two older documents, Computer Science 205 and 305. Its most unusual line is about language: the framework does not prescribe one, so that choice is left to the teacher and the class.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Any language, one skill', p: 'Because Manitoba leaves the language open, a Winnipeg student might meet Python, Java or something else at school. The framework\'s own goal is that students learn to adapt as languages change. We teach Python first and show how the same ideas carry into Java or C++.' },
          { h3: 'New Grade 9 math', p: 'Manitoba has posted two new Grade 9 Mathematics courses with an enhanced focus on financial literacy, for pilot and voluntary use in 2026 to 2027 and full implementation planned for 2027 to 2028. A Grade 8 family this year will meet them next year.' },
          { h3: 'Science, finalized', p: 'The renewed kindergarten to Grade 10 Science curriculum is posted for full implementation in the 2026 to 2027 school year, so this is the first full year a Winnipeg class works from it.' }
        ] },
        { kind: 'callout', h3: 'Beside Manitoba school', p: 'We teach alongside a student\'s school courses and we do not grant Manitoba credits or achievement test results; credits such as 40S Computer Science are earned at school. We are not connected with Manitoba Education and Early Childhood Learning, any Winnipeg school division or the City of Winnipeg.' },
        { kind: 'p', text: 'For how Manitoba compares with other provinces, see our <a class="cg-inline-link" href="/canada-coding-curriculum-by-province">coding curriculum by province</a> page and the <a class="cg-inline-link" href="/canada-high-school-math-courses-compared">high school math courses compared</a> page. Younger children\'s math is covered on <a class="cg-inline-link" href="/math-classes-for-kids-in-canada">math classes for kids in Canada</a>.' }
      ]
    },
    {
      id: 'leisure', tint: 'deep', eyebrow: 'Winnipeg data project',
      h2: 'Saturday is the busiest day: parsing Winnipeg\'s fall 2026 Leisure Guide',
      intro: 'The City of Winnipeg publishes every activity in its LeisureONLINE recreation catalogue as open data, from swimming lessons to pottery. One column packs each activity\'s weekly timetable into a short piece of text. Our students take the fall 2026 rows apart and count what is inside. All figures are ours, from the file fetched on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Weekly meeting slots by day, counted by us in the City of Winnipeg LeisureONLINE fall 2026 rows (2,440 activities, 2,451 slots, because 11 activities meet twice a week; fetched 22 October 2026)', head: ['Day', 'Weekly slots'], rows: [
          ['Saturday', '546'],
          ['Monday', '417'],
          ['Sunday', '356'],
          ['Tuesday', '326'],
          ['Wednesday', '326'],
          ['Thursday', '308'],
          ['Friday', '172']
        ] },
        { kind: 'p', text: 'Each activity\'s timetable sits in a column called default_pattern_dates, written like Tuesday,08:00 PM,1h30m. Eleven activities meet on two days, and the file joins their two slots with a slash. So the program splits on the slash first, then on the commas, and counts each piece. It is plain Python with the standard library, run in the same folder as the CSV:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Split twice', p: 'Splitting on commas alone would break on the eleven two-day rows. Splitting on the slash first turns those rows into two slots each, which is why the day counts add to 2,451, not 2,440. We count slots, and say so in the caption.' },
          { h3: '2. Read the clock text', p: 'Start times arrive as text like 06:00 PM. Taking the first two characters and the last two gives an hour label. The most common starts are 6 pm, with 481 slots, and 5 pm, with 466, just after school and work.' },
          { h3: '3. Notice the shape', p: 'Weekends hold 902 of the 2,451 slots, and Saturday alone 546, while Friday has only 172. Swimming lessons are 1,476 of the 2,440 activities, so the swim timetable shapes the whole week.' }
        ] },
        { kind: 'table', mt: true, caption: 'More of our checks on the same City of Winnipeg rows (our results)', head: ['Check', 'Result'], rows: [
          ['Activities listed as Open and as Closed', '2,427 and 13'],
          ['Largest categories', 'Aquatics - Swimming Lessons 1,476; Learn to Skate 428; Active Living 264'],
          ['Most common slot lengths', '30 minutes 1,561; 45 minutes 441; one hour 255'],
          ['Activities typed as French-language', '64'],
          ['A spelling quirk in the header', 'The column is named activty_number']
        ] },
        { kind: 'callout', h3: 'What the timetable cannot show', p: 'A slot count is not attendance. The file says when activities are scheduled, not how many people come, and a 30-minute swim lesson and a three-hour workshop each count once. The misspelled activty_number column is a reminder that real data has typos and code must match them exactly.' },
        { kind: 'p', text: 'The rows are used under the Open Government Licence - Winnipeg, which permits commercial use when the source is named. Contains information licensed under the Open Government Licence - Winnipeg (<a class="cg-inline-link" href="https://data.winnipeg.ca/open-data-licence">licence</a>, <a class="cg-inline-link" href="https://data.winnipeg.ca/Recreation/LeisureONLINE-Activities/a2fq-ufu6">dataset page</a>). The counts are ours; the City of Winnipeg has not reviewed or endorsed this page.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests from Winnipeg',
      h2: 'CEMC contests open to Winnipeg students in 2026 to 2027',
      intro: 'CEMC at the University of Waterloo sells its contests to schools across Canada, Manitoba included. For a Winnipeg student who is new to contests, these three are the usual first steps. The dates are CEMC\'s Americas dates, as published on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Three CEMC contests that suit Winnipeg students, 2026 to 2027 (CEMC dates)', head: ['Contest', 'Who it is for', 'Date'], rows: [
          ['Gauss math contest', 'Grades 7 and 8', '10 to 21 May 2027'],
          ['Beaver Computing Challenge', 'Students up to Grade 10; no programming background expected', 'Two weeks from 9 November 2026 (ends 20 November)'],
          ['Canadian Computing Competition', 'Junior or Senior level, chosen by skill, any grade', 'Wednesday 17 February 2027']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Not a test', p: 'CEMC says its contests are not tests or exams, with no passing or failing score. For a Winnipeg student nervous about provincial tests, that makes a contest a low-pressure place to practise problem solving.' },
          { h3: 'School entry only', p: 'CEMC states that all students must participate through their school. A student whose school does not order a contest can ask a nearby school that does to let them write there.' },
          { h3: 'Choose a language', p: 'The CCC accepts C, C++, Python and Java, which suits Manitoba\'s open choice of language. CEMC keeps ten years of past papers free at <a class="cg-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests">its archive</a>; our own lessons use problems we write.' }
        ] },
        { kind: 'p', text: 'Splitting and counting the Leisure Guide column is the same move as reading a CCC Junior input line, so the project doubles as contest practice. Our <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a> explains the levels, and <a class="cg-inline-link" href="/canada-math-and-coding-contest-calendar">the Canada contest calendar</a> lists the year\'s dates in one place. We are not connected with CEMC or the University of Waterloo.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Winnipeg\'s permanent clock, from 1 November 2026',
      intro: 'Manitoba\'s news release says the clocks stay where they are on 1 November 2026, and the province\'s Official Time Amendment Act sets Manitoba time at five hours behind UTC. From then on Winnipeg has one offset all year, and so does India, where our teachers work.',
      body: [
        { kind: 'table', caption: 'Two Winnipeg example hours shown in India and Toronto time (Manitoba UTC-5 all year from 1 November 2026; Ontario UTC-5 in winter and UTC-4 from 14 March 2027; our arithmetic)', head: ['In Winnipeg', 'In India, all year', 'In Toronto, winter', 'In Toronto, from 14 March 2027'], rows: [
          ['Thursday 4:30 to 5:30 pm', 'Friday 3 to 4 am', 'Thursday 4:30 to 5:30 pm', 'Thursday 5:30 to 6:30 pm'],
          ['Saturday 11 am to noon', 'Saturday 9:30 to 10:30 pm', 'Saturday 11 am to noon', 'Saturday noon to 1 pm']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The same hour all year', p: 'A Winnipeg class booked for Thursday at 4:30 pm stays at 4:30 pm in Winnipeg, and at 3 am Friday in India, in every month. Only the Toronto column moves, when Ontario changes in March 2027.' },
          { h3: 'Neighbours on the map', p: 'Manitoba\'s release lists British Columbia, Yukon, the Northwest Territories, Alberta and Saskatchewan as provinces and territories with, or moving toward, a permanent time. Calgary and Regina now sit one hour behind Winnipeg all year.' },
          { h3: 'Winnipeg numbers', p: 'Manitoba numbers use 204, 431 and 584. Enter any of them as ten digits and the form adds the +1 itself.' }
        ] },
        { kind: 'p', text: 'For every province\'s 2026 changes in one table, see our <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones guide</a>. For teens, the November change is also a ready-made bug: a program whose time zone data predates Manitoba\'s decision will show Winnipeg an hour off from 1 November 2026, and tracing why teaches more about dates than any worksheet.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first block program to 40S Computer Science and beyond',
    intro: 'These bands are rough; a teacher sets the real starting point in the free class.',
    cols: [
      { band: 'Kindergarten to Grade 3', h3: 'Blocks and order', p: 'Block coding and story animations, where a child learns that steps happen in order.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 4 to 8', h3: 'Typed Python', p: 'Loops, conditions and functions in Python, and an early, careful look at how AI tools work.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 9 to 12', h3: 'Senior years depth', p: 'Python properly, then Java or AI, alongside a school 20S, 30S or 40S computer science course.', courses: ['python-complete-masterclass-teens', 'java-programming-masterclass-for-teens'] },
      { band: 'Adults', h3: 'Python for work', p: 'An adult-paced Python course, and data analysis for learners who handle spreadsheets at work.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can parse the Leisure Guide. Who checks that it split the slash?',
    intro: 'A person who has written the split themselves.',
    p1: 'Ask an AI assistant to count Winnipeg recreation activities by weekday and it may split each timetable on commas and report 2,440 neat results. It will have miscounted the eleven activities that meet twice a week, or crashed on them. The fix is a single extra split, and the only reliable way to know it is needed is to have looked at the data.',
    p2: 'We teach students to look first, plan the steps, write the code and test it against a few rows checked by hand. Older students bring AI tools in under the age limits we apply, to check and extend their own work, not to replace the thinking.',
    closer: 'Manitoba\'s framework expects students to keep learning new languages as they appear; the thinking underneath them, and the habit of checking, is what transfers.',
    blogAnchor: 'our argument for learning to code even when AI writes code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online classes for Winnipeg and the rest of Manitoba',
    intro: 'Because lessons are online, learners from St. Vital to Transcona, or from Brandon and Steinbach, join the same teacher.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Group or private', p: 'Take a seat in a class of fifteen to twenty learners at your level, or book private lessons for a quicker pace or a specific goal.' },
      { h3: 'Manitoba levels', p: 'Lessons are planned around Manitoba grades and course levels such as 20S, 30S and 40S, with the provincial test dates in view.' },
      { h3: 'Adults welcome', p: 'Adults have their own groups and pace. Many come for Python at work, and some for a first step toward a new career.' },
      { h3: 'What you need', p: 'Any computer with sound, a microphone, a physical keyboard and a reliable connection. Code is typed, so a phone will not do.' },
      { h3: 'First class free', p: 'One real lesson, free of charge, after which the teacher recommends a level, a course and a time. We do not ask for card details.' }
    ],
    spec: { title: 'No Winnipeg centre', p: 'Modern Age Coders has no office or classroom in Winnipeg or elsewhere in Manitoba, and claims none. All lessons are live online, taught from India.' }
  },

  fees: {
    h2: 'Fees for Winnipeg learners',
    intro: 'Every fee is printed with its currency code beside it.',
    first: 'One complete live lesson at no cost, ending with a suggested level, course and time.',
    group: 'The monthly fee for a place in a group of fifteen to twenty learners at the same level.',
    private: 'The monthly fee for one-to-one lessons with a teacher, at times you choose.',
    closer: 'The monthly fee in Winnipeg matches the fee everywhere else in Canada. The free lesson comes first, and billing starts only after it, once you have picked a course and a time; holidays and missed lessons are covered on the pricing page.'
  },

  reviewsH2: 'What families and learners have said on Google',

  book: {
    h2: 'Tell us about your Winnipeg learner',
    intro: 'The first task suits the learner: a block animation for a young child, a Python number game in Grade 6, or the Leisure Guide file for a teenager or adult ready for real data.',
    success: 'Thank you. The team will contact you soon about a Winnipeg class.'
  },

  faq: {
    h2: 'Winnipeg coding and AI questions',
    intro: 'Questions Winnipeg families and adult learners send us most.',
    items: [
      { q: 'Are there coding classes for kids in Winnipeg with a real teacher?', a: 'Yes. From age 6, a child can learn live with a teacher over video, in a class of fifteen to twenty children or in private lessons. There is no Winnipeg building.' },
      { q: 'Do Manitoba high schools teach computer science?', a: 'Manitoba has a computer science framework for Senior 2, 3 and 4 (20S, 30S and 40S). It does not prescribe a programming language; the teacher and students choose one.' },
      { q: 'Which language will my child learn with you?', a: 'Python first, because it is clear and widely used, then Java or C++ if a school course or contest calls for it. That fits Manitoba\'s open choice of language.' },
      { q: 'Do your classes earn Manitoba credits?', a: 'They do not: we do not grant Manitoba credits or test results. School courses such as 40S Computer Science carry the credit, and our classes run alongside them.' },
      { q: 'When is the Grade 12 Pre-Calculus math test in Manitoba?', a: 'Manitoba\'s 2026 to 2027 schedule sets it for Thursday 28 January 2027, with a second sitting on Tuesday 15 June 2027.' },
      { q: 'Do you run robotics classes in Winnipeg?', a: 'Our part is the software a robot runs: Python, logic and reading sensor data. We do not teach robot hardware; a school or community team is the place for building, and our classes pair well with one.' },
      { q: 'Are there Python classes for adults in Winnipeg?', a: 'There are. Adult learners get their own groups, or private lessons, starting from first syntax and working up to scripts that handle real files, with a data course for people who work with spreadsheets.' },
      { q: 'Which AI tools do Winnipeg teens use in class?', a: 'We keep to age ratings. Nothing rated for adults only, Claude included, is used with under-18s, and a teenager uses ChatGPT in class only with a parent\'s permission.' },
      { q: 'Do class times change in November for Winnipeg?', a: 'No. Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Manitoba keeps UTC-5 from 1 November 2026, so a Winnipeg time stays fixed.' },
      { q: 'Will a 204 or 431 number work in the form?', a: 'Yes. Manitoba numbers with 204, 431 or 584 are accepted. Type the ten digits; the +1 is already there.' },
      { q: 'Where can I see the fees?', a: 'Scroll to the fees section: you will find the free first lesson, then the monthly price of a group place and of private lessons, each shown with its currency code.' }
    ]
  },

  next: {
    eyebrow: 'More for Canada',
    h2: 'Other pages for Winnipeg and Manitoba learners',
    html: 'The national picture is on <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>, and 2026 clock changes for every province on <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">our time zones guide</a>. Contest students can use <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation</a>, adults <a class="cg-inline-link" href="/coding-classes-for-adults-in-canada">coding classes for adults</a>, and families wanting math help <a class="cg-inline-link" href="/online-math-tutor-canada">online math tutoring</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Winnipeg and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canada time zones 2026' },
    { href: '/canada-coding-curriculum-by-province', label: 'Coding curriculum by province' },
    { href: '/coding-classes-for-adults-in-canada', label: 'Adult coding classes' },
    { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' }
  ],

  personalityCss: `
.cg-root.cg-aiwi .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.5vw, 2rem); }
.cg-root.cg-aiwi .cg-hero h1 { font-weight: 720; letter-spacing: -0.014em; line-height: 1.06; }
.cg-root.cg-aiwi .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-aiwi .cg-eyebrow { letter-spacing: 0.11em; font-weight: 690; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-aiwi .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.011em; }
.cg-root.cg-aiwi .cg-table caption { font-weight: 610; text-align: left; }
.cg-root.cg-aiwi .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aiwi #leisure code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.52; padding: 0.95rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-aiwi .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.75rem; }
.cg-root.cg-aiwi .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Manitoba, read 22 October 2026: Manitoba Education and Early Childhood Learning assessment page (2026/27 schedule: Grade 12 Applied, Essential and Pre-Calculus Mathematics Achievement Tests in January and June 2027; Grade 3 Numeracy and Grade 7 Mathematics result collection windows); computer science page and 2004 framework for 20S, 30S and 40S (replaces CS 205 and 305; does not prescribe a specific language); Framework for Learning updates 2026/27 (two new Grade 9 Mathematics courses in pilot, full implementation 2027/28; renewed K to 10 Science full implementation 2026/27). Manitoba news release 75397 and the Official Time Amendment Act (UTC-5 all year from 1 November 2026). CEMC 2026-27: BCC, CCC and Gauss dates, CCC languages, not-a-test line, through-a-school rule. Manitoba area codes from facts-geo.md (CNAC via the Internet Archive).',
    localProject: 'City of Winnipeg open data, LeisureONLINE Activities (Open Government Licence - Winnipeg), fall 2026 rows fetched 22 October 2026 and parsed with our script winnipeg_schedule.py (python -I): 2,440 activities and 2,451 weekly slots (11 meet twice a week); Saturday 546, Monday 417, Sunday 356, Tuesday 326, Wednesday 326, Thursday 308, Friday 172; 902 weekend slots; start hours 6 pm 481, 5 pm 466; swimming lessons 1,476 activities; the header misspells activty_number. Labelled as ours. Lesson family: parsing a packed text field and tallying its parts.',
    requiredMentions: [
      'default_pattern_dates',
      'activty_number',
      'the day counts add to 2,451, not 2,440',
      'Weekends hold 902 of the 2,451 slots',
      'Open Government Licence - Winnipeg',
      'does not prescribe one',
      'Saturday is the busiest day',
      'Activities typed as French-language',
      'A Winnipeg class booked for Thursday at 4:30 pm',
      'Manitoba numbers use 204, 431 and 584'
    ],
    sources: [
      { claim: 'Manitoba Education and Early Childhood Learning: assessment and evaluation, 2026/27 test schedule and result collection windows.', url: 'https://www.edu.gov.mb.ca/k12/assess/index.html' },
      { claim: 'Manitoba: Senior Years ICT and Computer Science page (purpose of CS courses; replaces CS 205 and 305).', url: 'https://www.edu.gov.mb.ca/k12/cur/cs/index.html' },
      { claim: 'Manitoba Senior 2, 3 and 4 Computer Science framework (2004): no prescribed language.', url: 'https://www.edu.gov.mb.ca/k12/cur/cs/framework.pdf' },
      { claim: 'Manitoba Framework for Learning: curriculum updates for 2026/27 (Grade 9 math, K to 10 science).', url: 'https://www.edu.gov.mb.ca/k12/framework/index.html' },
      { claim: 'Manitoba news release: clocks will not revert to standard time on 1 November 2026.', url: 'https://news.gov.mb.ca/news/?item=75397' },
      { claim: 'CEMC: 2026-27 contest dates, CCC languages, through-a-school rule, free past contests.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'City of Winnipeg open data: LeisureONLINE Activities dataset page.', url: 'https://data.winnipeg.ca/Recreation/LeisureONLINE-Activities/a2fq-ufu6' },
      { claim: 'City of Winnipeg: Open Government Licence - Winnipeg (attribution, commercial use, non-endorsement).', url: 'https://data.winnipeg.ca/open-data-licence' },
      { claim: 'IANA tzdb northamerica: America/Winnipeg and America/Toronto offsets for 2026-27.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Winnipeg or Manitoba population figure: StatCan was not reachable live, so no population is printed.',
      'That Winnipeg is the capital of Manitoba: not verified from a saved primary source for this page, so not stated.',
      'The licence as "Canada Open Government Licence": the dataset\'s licence field says so, but its custom licence field and the city\'s licence page name the Open Government Licence - Winnipeg, which is used.',
      'Attendance or popularity of activities: refused; the file lists scheduled slots, not participants.',
      'Whether open_spaces 0 means an activity is full: not documented, so not used.',
      'Venue names (several are schools) and disability or health-related programs: not printed.',
      'That our Western Canada Grade 12 math course covers Manitoba Pre-Calculus 40S: not claimed; it is not in this page\'s picks.',
      'That our classes earn Manitoba credits or test results: refused.',
      'That we run robotics hardware classes: refused; we teach the programming side only.',
      'CEMC fees: left out on purpose (currency-neutral page).',
      'Any affiliation with the City of Winnipeg, Manitoba Education and Early Childhood Learning, CEMC or the University of Waterloo.'
    ]
  }
};
