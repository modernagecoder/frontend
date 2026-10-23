'use strict';
// Red Deer (cg- city page, Canada cluster Wave 2, row 137, slug shape online-coding-and-python-classes-in-).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Shape from content/ca/coding-and-ai-classes-in-toronto.js, prose fresh.
// Spine: the three kinds of "online" class compared honestly; a Python path by age; a Python project on the City of
// Red Deer transit timetable (GTFS) whose lesson is date logic and feed expiry; Alberta school facts (new K-6 math,
// draft 7-9 with computer science and AI, PATs, diploma weighting); Alberta's year-round UTC-6 under the Official Time Act.
// Sources, read raw 22 to 23 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/online-coding-and-python-classes-in-red-deer/):
//  - City of Red Deer Open Data, GTFS Data Feed page (ds-gtfsdatafeed.html): "This dataset contains all of the files used in
//    GTFS mapping for The City of Red Deer's transit schedules"; download https://data.reddeer.ca/datasets/gtfsdatafeed/download/zip,
//    fetched with curl 22 October 2026 (gtfs.zip, 1,698,951 bytes, sha256 a2cffbc4...0327). The portal's metadata gives a
//    2024 lastUpdateDate while the zip's own files are dated August 2026; no update date is quoted on the page.
//  - Licence (about.html): "Open Government Licence - The City of Red Deer" (en dash in source, written here as a hyphen);
//    "including for commercial purposes"; attribution statement "Contains information licensed under the Open Government
//    Licence - The City of Red Deer" (en dash in source); non-endorsement clause.
//  - Inside the zip: agency.txt agency_timezone "America/Edmonton"; feed_info.txt feed_start_date 20260830, feed_end_date
//    20261205; calendar.txt service 1 Monday to Friday, 2 Friday only, 3 Sunday, 4 Saturday, all 20260830 to 20261205.
//  - Alberta (facts-schools-contests.md, raw files in ca/src/alberta/): K-6 math "implemented in schools" (filed under
//    2022/2023); draft 7-9 "By integrating topics like artificial intelligence, computer science and money management";
//    "ahead of mandatory implementation in September 2027"; PATs "administered annually to all Alberta students in grades 6
//    and 9"; "The weighting of diploma exams returned to 30% effective September 1, 2023."; "70% of the final mark comes
//    from course work."; diploma list includes Mathematics 30-1 and 30-2 (en dash in source); January 2026 diploma exams and
//    Grade 9 PATs cancelled; "students write diploma exams and provincial achievement tests in a digital environment".
//  - Official Time Act RSA 2000 c O-5.7 s.1 (facts-geo.md, src/geo/tz/gov_O05p7.pdf.txt): "official time" means "the time 6
//    hours behind Coordinated Universal Time". Red Deer CMA and city on America/Edmonton; area codes 368, 403, 587, 825.
//  - CEMC (facts-schools-contests.md): BCC 9 to 20 November 2026; CCC Wednesday 17 February 2027; "all students must
//    participate through their school"; CCC Junior "beginner to intermediate programming skills".
//  - brand-facts.json: free first class "30-45 minutes"; group 15 to 20.
// Our own calculations (analysis.py, trips_on.py, python -I; outputs analysis.out.txt, trips_on.out.txt): 42 routes in
// routes.txt, 40 used by trips; 613 stops; 2,323 trips; 65,509 stop_times rows; trips by service 724 / 658 / 623 / 318;
// trips_on: Thu 22 Oct 724, Fri 23 Oct 724, Sat 24 Oct 623, Sun 25 Oct 318, Wed 11 Nov 318, Fri 27 Nov 658, Sun 6 Dec 0;
// calendar_dates removes weekday service on 7 Sep, 30 Sep, 12 Oct, 11 Nov and 27 Nov 2026 and adds Sunday service on the
// first four; service 2 is removed on 13 of the 14 Fridays and added on 27 Nov; first weekday departure 04:57, last 23:54;
// busiest weekday stop "49 AV @ 48 ST SORENSEN STN" with 541 stop times. Route long names not printed (some name a school).
// Time conversions ours (scratch timeconv.out.txt). Lesson family: dates, weekday rules and exceptions, data expiry.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  'import datetime',
  'import io',
  'import zipfile',
  '',
  'feed = zipfile.ZipFile("gtfs.zip")',
  '',
  'def table(name):',
  '    with feed.open(name) as f:',
  '        return list(csv.DictReader(io.TextIOWrapper(f, encoding="utf-8-sig")))',
  '',
  'calendar = table("calendar.txt")',
  'exceptions = table("calendar_dates.txt")',
  'trips = table("trips.txt")',
  'days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]',
  '',
  'def services_on(day):',
  '    stamp = day.strftime("%Y%m%d")',
  '    active = set()',
  '    for row in calendar:',
  '        if row["start_date"] <= stamp <= row["end_date"] and row[days[day.weekday()]] == "1":',
  '            active.add(row["service_id"])',
  '    for row in exceptions:',
  '        if row["date"] == stamp:',
  '            if row["exception_type"] == "1":',
  '                active.add(row["service_id"])',
  '            else:',
  '                active.discard(row["service_id"])',
  '    return active',
  '',
  'def trips_on(day):',
  '    active = services_on(day)',
  '    return sum(1 for trip in trips if trip["service_id"] in active)',
  '',
  'for text in ["2026-10-22", "2026-10-24", "2026-10-25", "2026-11-11", "2026-11-27", "2026-12-06"]:',
  '    day = datetime.date.fromisoformat(text)',
  '    print(text, day.strftime("%A"), trips_on(day))'
].join('\n').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'RED DEER', label: 'Red Deer', blurb: 'Live online Python for Red Deer learners, with a transit timetable project that teaches dates, exceptions and expiring data.' },
  market: CA,
  slug: 'online-coding-and-python-classes-in-red-deer',
  code: 'prd',
  accent: '#22702F',
  accentRationale: 'Red Deer: a muted aspen-leaf green, #22702F, allocated for this row and clear of the retired purple and cyan band; contrast 5.78 on the paper #FBF8F2 and at least 4.97 on all three paper tints',
  pageType: 'city',
  place: {
    name: 'Red Deer',
    eyebrow: 'Red Deer, Alberta',
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
  routeLabel: 'Red Deer',
  title: 'Online Coding and Python Classes in Red Deer | Live, Ages 6+',
  description: 'Live online coding and Python classes for Red Deer learners aged 6 to adult: how live online differs from video courses, and a Python project on the city bus data.',
  ogDescription: 'Live online is not the same as a video course. Here is what Red Deer learners get, a Python path by age, and a project built on the City of Red Deer transit feed.',
  twitterDescription: 'Red Deer coding and Python classes, live online with a real teacher, on Alberta time.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Red Deer Learners',
    description: 'Live online coding and Python for Red Deer learners from age 6 to adult, in a group of fifteen to twenty or one to one, from first programs to working with real data files.'
  },

  h1: 'Online coding and Python classes in Red Deer',
  capsuleQ: 'Where can someone in Red Deer learn Python live, online, with a teacher?',
  capsule: 'Modern Age Coders runs live online coding and Python classes for Red Deer learners aged 6 to adult, either in a group of fifteen to twenty or one to one. Children usually start in Python and AI for Kids, teenagers in Python for Teens and adults in the Python Masterclass. Classes run on Alberta time, and the first one is free.',
  lead: 'Red Deer sits on the road between Calgary and Edmonton, which is convenient for a lot of things but not for finding a specialist Python teacher on a Tuesday evening. Online solves the distance; it does not by itself solve the teaching. This page sets out what three very different kinds of "online class" actually give a learner, the Python path we follow from age 9 to adulthood, a working project on the City of Red Deer bus timetable file, and what an Alberta student already meets at school.',
  wa: 'Hello Modern Age Coders, I would like a free live Python class for a learner in Red Deer.',

  picks: {
    eyebrow: 'Python courses for Red Deer',
    h2: 'Four Python courses, from first lines to automating work',
    intro: 'A course each for children, teenagers and adults, plus one for adults who want Python to take over the dull parts of their job.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Grades 4 to 7', note: 'Children type real Python: drawings, number games and tiny quizzes that answer back, with every line explained by the child.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 8 to 12', note: 'A full grounding in Python, ending with files and data. The bus timetable project on this page sits near the end of it.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from nothing for adults: careful foundations first, then functions, files and the habits of someone who writes code for a living.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults at work', note: 'Scripts that rename files, clean spreadsheets and pull data, with AI tools brought in once the learner can check what they produce.' }
    ]
  },

  sections: [
    {
      id: 'kinds', tint: '', eyebrow: 'Three kinds of online',
      h2: 'Live online, recorded course or app: what each one gives a Red Deer learner',
      intro: 'All three are sold as "online coding". They are not the same thing, and the difference shows up the first time the code breaks.',
      body: [
        { kind: 'table', caption: 'Three common formats compared on what happens when a learner gets stuck (our own comparison; Modern Age Coders offers only the first)', head: ['Question', 'Live online class (ours)', 'Recorded video course', 'Coding app or game'], rows: [
          ['Who sees the error?', 'A teacher, at the moment it appears', 'Nobody; the learner pauses the video', 'The app, which usually offers a hint'],
          ['Can the learner ask why?', 'Yes, out loud, and get an answer about their own code', 'Only in a comments box, later', 'Rarely; the path is fixed'],
          ['Where is the code written?', 'On the learner\'s own computer, in files they keep', 'Usually in the same place, alone', 'Inside the app'],
          ['Who sets the pace?', 'The teacher, adjusted to the group or the individual', 'The learner, which suits some and stalls others', 'The app\'s levels'],
          ['How is progress checked?', 'Rebuilding a program from a blank file, regularly', 'Quizzes, if any', 'Stars or badges']
        ] },
        { kind: 'p', text: 'Recorded courses and apps have their place; plenty of adults have learned from them. The learners who stall are the ones who meet the same confusing error three nights running with nobody to ask. A live class costs more of everyone\'s time, but it means a Red Deer teenager who writes <code>if x = 5:</code> hears, within a minute, why Python wants two equals signs there and what the error message was trying to say.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Before the first class', p: 'You send us a grade or an age plus a sentence about any coding so far. We suggest a level and offer a free lesson lasting 30 to 45 minutes.' },
          { h3: 'In a normal lesson', p: 'The teacher introduces one idea, the learner writes code for it on their own machine, runs it, breaks it, and explains the fix back. Then the next idea.' },
          { h3: 'Between lessons', p: 'A small task done alone, without the teacher and without an AI assistant writing it. If it gets done, the idea has landed; if not, that is where next lesson starts.' }
        ] }
      ]
    },
    {
      id: 'transit', tint: 'deep', eyebrow: 'Red Deer data project',
      h2: 'How many buses run in Red Deer on a given day? A Python project on the city\'s transit feed',
      intro: 'The City of Red Deer publishes its transit schedules as a GTFS feed, a zip of linked text files, on its open data portal. Our students answer one plain question with it and learn how dates really work in code. All counts are ours, from the zip downloaded on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Our counts of scheduled trips in the Red Deer Transit feed for sample dates, from the script below. A trip is one run of one bus along a route', head: ['Date', 'Day', 'Service in force', 'Trips scheduled'], rows: [
          ['22 October 2026', 'Thursday', 'Weekday', '724'],
          ['24 October 2026', 'Saturday', 'Saturday', '623'],
          ['25 October 2026', 'Sunday', 'Sunday', '318'],
          ['11 November 2026', 'Wednesday', 'Sunday timetable (exception in the file)', '318'],
          ['27 November 2026', 'Friday', 'Special Friday service (exception in the file)', '658'],
          ['6 December 2026', 'Sunday', 'None: the feed has ended', '0']
        ] },
        { kind: 'p', text: 'This is the script that prints those numbers. It uses only Python\'s standard library and reads the files straight out of the zip, so nothing needs unpacking first:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Rules first', p: 'calendar.txt gives four services, each a set of weekdays between two dates: service 1 runs Monday to Friday, 2 only on Fridays, 3 on Sundays and 4 on Saturdays, all from 30 August to 5 December 2026. The function checks the date range and the weekday column.' },
          { h3: '2. Then the exceptions', p: 'calendar_dates.txt overrides the rules. It switches weekday service off on 7 September, 30 September, 12 October, 11 November and 27 November 2026, and switches Sunday service on for the first four of those dates. Students look the dates up and work out why.' },
          { h3: '3. Then the trap', p: 'Service 2 says "Friday" in the calendar, yet the exceptions remove it on 13 of the 14 Fridays in the feed and add it back only on 27 November. Read the calendar alone and you would count 658 extra trips every Friday that never run.' }
        ] },
        { kind: 'callout', h3: 'Zero does not mean no buses', p: 'Ask the script about 6 December 2026 and it prints 0. That is not a service cut; the feed we downloaded simply ends on 5 December 2026, and the next one had not been published. A student who reports "Red Deer has no buses in December" has made the most common data mistake there is: treating missing data as a fact about the world.' },
        { kind: 'p', text: 'Other things students find: the feed lists 613 stops and 2,323 trips across 42 routes, of which 40 actually have trips; the earliest weekday departure is at 04:57 and the latest at 23:54; and the stop with the most weekday stop times, 541 of them, is "49 AV @ 48 ST SORENSEN STN". The agency file declares its time zone as America/Edmonton. Contains information licensed under the Open Government Licence - The City of Red Deer (<a class="cg-inline-link" href="https://data.reddeer.ca/About">licence</a>, <a class="cg-inline-link" href="https://data.reddeer.ca/gtfsdatafeed">dataset page</a>). Nothing here is endorsed by the City.' }
      ]
    },
    {
      id: 'alberta', tint: 'tint', eyebrow: 'Alberta schools',
      h2: 'What a Red Deer student meets at school, and how our classes fit beside it',
      intro: 'Red Deer schools follow the Alberta curriculum, which is in the middle of a rewrite. We read Alberta\'s own pages on 22 October 2026; quoted words are the government\'s.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A new curriculum, in stages', p: 'Alberta lists new K to 6 mathematics as "implemented in schools" under 2022/2023. Its draft for Grades 7 to 9 talks of "integrating topics like artificial intelligence, computer science and money management", ahead of mandatory implementation in September 2027.' },
          { h3: 'PATs in Grades 6 and 9', p: 'Provincial Achievement Tests "are administered annually to all Alberta students in grades 6 and 9", and Alberta says students now write them "in a digital environment rather than pencil and paper". The January 2026 Grade 9 PATs were cancelled.' },
          { h3: 'Diploma exams in Grade 12', p: 'Alberta says "The weighting of diploma exams returned to 30% effective September 1, 2023", so 70% of the final mark comes from course work. Mathematics 30-1 and 30-2 are on the diploma list. Our <a class="cg-inline-link" href="/alberta-math-30-1-diploma-exam-prep">Math 30-1 diploma page</a> covers the exam.' }
        ] },
        { kind: 'p', text: 'The direction is clear even before the Grades 7 to 9 draft becomes compulsory: computer science and artificial intelligence are moving into the middle years. What changes slowly is classroom time. A Red Deer student who wants to be comfortable with programming before high school options open up will usually need to write more code than a timetable allows, and that is the gap a weekly live class is built for.' },
        { kind: 'table', mt: true, caption: 'CEMC computing contests a Red Deer student can write through school in 2026 to 2027 (dates as listed by CEMC on 22 October 2026)', head: ['Contest', 'Who it suits', 'CEMC date'], rows: [
          ['Beaver Computing Challenge', 'Grade 10 or below; CEMC says it needs only school math, no coding', '9 to 20 November 2026'],
          ['Canadian Computing Competition, Junior', 'CEMC: "beginner to intermediate programming skills"', 'Wednesday 17 February 2027'],
          ['Canadian Computing Competition, Senior', 'Intermediate to advanced programmers, any grade', 'Wednesday 17 February 2027']
        ] },
        { kind: 'callout', h3: 'Beside school, not instead of it', p: 'We teach alongside a student\'s school courses and do not grant Alberta credits or diploma marks. CEMC says "all students must participate through their school", so contest entry goes through a teacher. We are not connected with Alberta Education, any Red Deer school division, CEMC or the City of Red Deer.' }
      ]
    },
    {
      id: 'clock', tint: '', eyebrow: 'Alberta time',
      h2: 'Red Deer keeps one clock all year now',
      intro: 'Alberta\'s Official Time Act defines official time as "the time 6 hours behind Coordinated Universal Time", so Red Deer stays on UTC-6 and its clocks do not go back on 1 November 2026. India never changes its clocks either, which makes planning simple.',
      body: [
        { kind: 'table', caption: 'Sample Red Deer class times beside the same moment in India, unchanged through the year (offsets from Alberta\'s Official Time Act and tz database release 2026e; our arithmetic; illustrations only, never a fixed batch slot)', head: ['If the class is at, in Red Deer', 'It is, in India', 'Who tends to choose it'], rows: [
          ['4:30 pm on a weekday', '4:00 am the next day', 'Children straight after school'],
          ['7:00 pm on a weekday', '6:30 am the next day', 'Teens after activities, and adults'],
          ['9:30 am on Saturday', '9:00 pm the same Saturday', 'Families who keep weekdays free']
        ] },
        { kind: 'p', text: 'The city\'s own transit file agrees: its agency file names America/Edmonton as the time zone, the same zone Python\'s date libraries use for Red Deer. That makes a good extension to the project. Students who convert departure times to UTC with a hard-coded offset will find the answer right all year in Alberta, which is exactly why the code would break if they reused it for a city in Ontario or Quebec. Our <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones page</a> sets out every province.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The Python path',
    h2: 'Where a Red Deer learner starts, and where Python leads',
    intro: 'The rung depends on what the learner can already do, which the free class finds out; ages here are only rough.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Blocks and puzzles', p: 'Sequences, loops and choices learned with blocks, so the ideas are solid before typing gets in the way.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 9 to 12', h3: 'Typed Python', p: 'Short programs written by hand: variables, loops, conditions and simple functions, each one explained aloud.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Ages 13 to 18', h3: 'Python and data', p: 'Files, dictionaries and real data such as the transit feed, then the CCC or machine learning for those who want more.', courses: ['python-complete-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Adults', h3: 'Python that saves time', p: 'Foundations from zero, then scripts that tidy files and reports, with AI tools used once the code can be checked.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and AI',
    h2: 'Ask an AI how many buses run on 11 November',
    intro: 'It will probably get it wrong, and confidently.',
    p1: 'A chatbot asked to count Red Deer trips on 11 November 2026 tends to read calendar.txt, see a Wednesday, and report 724 weekday trips. The exceptions file, which swaps in the Sunday timetable of 318 trips that day, is easy to miss. The script it writes will run without an error, and the number will be wrong.',
    p2: 'We teach learners to think through the question before trusting any answer, theirs or a machine\'s: which files matter, what overrides what, and what would a sensible result look like? Older learners do use AI assistants with us, within the age limits each tool sets, but as a first draft to test, never as the final word.',
    closer: 'Alberta\'s draft curriculum puts artificial intelligence beside computer science for a reason: using AI well depends on understanding the logic underneath it.',
    blogAnchor: 'is learning to code still worth it in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for Red Deer and central Alberta',
    intro: 'Online means the drive to Calgary or Edmonton never comes into it. Here is how the rest is arranged.',
    cells: [
      { h3: 'Times', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Group or one to one', p: 'Groups have fifteen to twenty members at one level and move through a course together. Private lessons suit adults with shifting shifts, and teens aiming at a contest.' },
      { h3: 'Central Alberta', p: 'Learners in Sylvan Lake, Lacombe, Blackfalds, Penhold and Innisfail join the same classes on the same Alberta clock as Red Deer.' },
      { h3: 'Phone numbers', p: 'Red Deer numbers on the 403, 587, 825 and 368 area codes work in the form. Enter the ten digits; the +1 is already there.' },
      { h3: 'Equipment', p: 'Any reasonably recent computer running Windows, macOS or Linux, plus speakers or headphones and decent internet. Python itself costs nothing to install.' },
      { h3: 'Free start', p: 'Lesson one is on us. By the end of it you will know which rung of the ladder below fits, and nobody asks for payment details.' }
    ],
    spec: { title: 'No Red Deer premises', p: 'Modern Age Coders has no centre in Red Deer or elsewhere in Alberta and claims none. All teaching is live and online, by teachers based in India.' }
  },

  fees: {
    h2: 'Fees for Red Deer learners',
    intro: 'Three items, each shown in your own currency.',
    first: 'One complete live lesson at no cost, ending with a level and a course.',
    group: 'The monthly fee for a group class of fifteen to twenty learners at one stage.',
    private: 'The monthly fee for one learner with one teacher, on agreed times.',
    closer: 'A learner in Red Deer pays the same as a learner anywhere in Canada. You are invoiced only once the free lesson is done and a course and time are agreed; the pricing page covers holidays and missed lessons.'
  },

  reviewsH2: 'What families and learners say about us on Google',

  book: {
    h2: 'Book a free live class for a Red Deer learner',
    intro: 'Tell us the age or grade and what they have tried. An eight year old might start with a looping animation; an adult might start with the bus feed itself.',
    success: 'Thank you. We will be in touch soon to arrange a free class for Red Deer.'
  },

  faq: {
    h2: 'Red Deer online coding and Python questions',
    intro: 'What people in Red Deer and central Alberta ask us before they book.',
    items: [
      { q: 'Do you have a coding school in Red Deer?', a: 'No building. Our classes are live and online, taught by a real teacher in real time, and the learner joins from home in Red Deer or anywhere nearby.' },
      { q: 'How is a live online class different from a video course?', a: 'A teacher is there while the learner codes. Errors are spotted and explained as they happen, the learner can ask why, and progress is checked by rebuilding programs from a blank file.' },
      { q: 'What age is right for a first Python class?', a: 'Around 9 for most children. From 6 to 8 we use blocks and puzzles first. Teenagers and adults can begin with Python straight away.' },
      { q: 'Is the free class really a full lesson?', a: 'Yes. For 30 to 45 minutes a teacher works through real code at the learner\'s level, and ends with a suggested course and time. No card is asked for.' },
      { q: 'Do I need special software?', a: 'No paid software at all. Python is a free download, and in the early lessons the teacher walks the learner through installing it and opening a first file.' },
      { q: 'Do you teach adults in Red Deer?', a: 'Yes. Adults start in the Python Masterclass and can move on to the automation course, which applies Python to everyday work tasks.' },
      { q: 'Will this count toward my child\'s Alberta diploma?', a: 'No. Alberta credits and diploma marks come from school. Our classes add practice and understanding beside school courses, and we never write marked work for a student.' },
      { q: 'Can you prepare a Red Deer student for the CCC?', a: 'Yes. CEMC lists the 2027 CCC for Wednesday 17 February 2027. Students enter through their school, and we prepare them with original practice problems in Python.' },
      { q: 'What times do classes run in Red Deer?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Alberta stays on UTC-6 all year, so times do not shift in November.' },
      { q: 'Will a Red Deer phone number work in the form?', a: 'Yes. Numbers on the 403, 587, 825 and 368 area codes work. Leave off the leading 1 and enter the remaining ten digits.' },
      { q: 'Where do I find the fees?', a: 'Scroll to the fees block above. It lists three things, the free lesson, the group fee per month and the one-to-one fee per month, and it shows them in your currency. You pay nothing until a course is agreed.' }
    ]
  },

  next: {
    eyebrow: 'More for Alberta',
    h2: 'Other pages for Red Deer and Alberta learners',
    html: 'For the wider province, read <a class="cg-inline-link" href="/coding-classes-in-alberta">coding classes in Alberta</a>, or start at <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>. Math help is on the <a class="cg-inline-link" href="/alberta-grade-9-math-pat-practice">Grade 9 PAT practice</a> and <a class="cg-inline-link" href="/math-30-1-tutor-alberta">Math 30-1 tutoring</a> pages, and Python across Canada on <a class="cg-inline-link" href="/python-classes-in-canada">Python classes in Canada</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Red Deer and Alberta',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-alberta', label: 'Alberta' },
    { href: '/alberta-new-math-curriculum-explained', label: 'Alberta new math curriculum' },
    { href: '/alberta-math-30-1-diploma-exam-prep', label: 'Math 30-1 diploma prep' },
    { href: '/python-classes-in-canada', label: 'Python in Canada' }
  ],

  personalityCss: `
.cg-root.cg-prd .cg-hero h1 { font-weight: 740; letter-spacing: -0.02em; line-height: 1.04; }
.cg-root.cg-prd .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-prd .cg-eyebrow { letter-spacing: 0.09em; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-prd .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.008em; }
.cg-root.cg-prd .cg-table caption { font-weight: 640; text-align: left; }
.cg-root.cg-prd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-prd #transit code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.79rem; line-height: 1.5; padding: 1rem; border-top: 3px solid var(--cg-accent); }
.cg-root.cg-prd .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-prd .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Alberta, read 22 October 2026 from alberta.ca pages saved raw: new K-6 math implemented (2022/2023); draft Grades 7-9 with artificial intelligence and computer science, mandatory September 2027; PATs in Grades 6 and 9, digital, January 2026 Grade 9 PATs cancelled; diploma exams weighted 30% from 1 September 2023, 70% course work; Mathematics 30-1 and 30-2. Official Time Act RSA 2000 c O-5.7: UTC-6. CEMC 2026-27 BCC and CCC dates, through-a-school rule. Area codes 368/403/587/825 from facts-geo.md (CNAC via the Internet Archive).',
    localProject: 'City of Red Deer Open Data, GTFS Data Feed (Open Government Licence - The City of Red Deer), zip downloaded with curl on 22 October 2026 and analysed with our scripts analysis.py and trips_on.py (python -I): feed 30 August to 5 December 2026; 613 stops, 2,323 trips, 42 routes (40 with trips); trips on sample dates 724 / 623 / 318 / 318 (11 November, Sunday timetable) / 658 (27 November) / 0 (6 December, after the feed ends); service 2 removed on 13 of 14 Fridays; first and last weekday departures 04:57 and 23:54; busiest weekday stop 541 stop times; agency_timezone America/Edmonton. Labelled as ours. Lesson family: date rules, exceptions and data expiry.',
    requiredMentions: [
      '49 AV @ 48 ST SORENSEN STN',
      'Zero does not mean no buses',
      'remove it on 13 of the 14 Fridays',
      'Sunday timetable (exception in the file)',
      'Open Government Licence - The City of Red Deer',
      'Ask an AI how many buses run on 11 November',
      'Sylvan Lake, Lacombe, Blackfalds, Penhold and Innisfail',
      'Red Deer keeps one clock all year now',
      'the earliest weekday departure is at 04:57',
      'Live online, recorded course or app'
    ],
    sources: [
      { claim: 'City of Red Deer Open Data: GTFS Data Feed dataset page and download.', url: 'https://data.reddeer.ca/gtfsdatafeed' },
      { claim: 'City of Red Deer Open Data: Open Government Licence - The City of Red Deer (commercial use, attribution, non-endorsement).', url: 'https://data.reddeer.ca/About' },
      { claim: 'Alberta curriculum timeline: K-6 math implemented, draft 7-9 with AI and computer science, mandatory September 2027.', url: 'https://www.alberta.ca/curriculum-how-we-got-here' },
      { claim: 'Alberta Provincial Achievement Tests: Grades 6 and 9, digital.', url: 'https://www.alberta.ca/provincial-achievement-tests' },
      { claim: 'Alberta diploma exams: 30% weighting from 1 September 2023, Math 30-1 and 30-2, January 2026 cancellation.', url: 'https://www.alberta.ca/diploma-exams-overview' },
      { claim: 'Alberta Official Time Act RSA 2000 c O-5.7: official time is 6 hours behind UTC.', url: 'https://kings-printer.alberta.ca/documents/Acts/O05p7.pdf' },
      { claim: 'CEMC contests 2026-27: BCC and CCC dates, through-a-school rule.', url: 'https://cemc.uwaterloo.ca/contests' }
    ],
    rejectedClaims: [
      'Any Red Deer population figure: StatCan not reachable live, nothing printed.',
      'A last-updated date for the transit feed: the portal metadata (2024) and the zip contents (2026) disagree, so neither is quoted.',
      'That Red Deer has no buses after 5 December 2026: refused; the feed simply ends there.',
      'Why calendar_dates.txt changes service on the five dates: left to students; reasons are not stated in the file.',
      'Route long names: not printed, because some name an individual school.',
      'That our classes earn Alberta credits or diploma marks: refused.',
      'CEMC fees: left out (currency-neutral page).',
      'Any affiliation with the City of Red Deer, Red Deer Transit, Alberta Education or CEMC.'
    ]
  }
};
