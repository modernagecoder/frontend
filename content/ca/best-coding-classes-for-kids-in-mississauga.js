'use strict';
// Mississauga (cg- city page, Canada cluster Wave 2, row 113). Brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Angle: best-coding-classes-for-kids-in- (ages 6 to 12). "Best" lives in the title and meta only; the body gives a
// local checklist for choosing a kids' class, ranks no provider and never says we are the best.
// Spine: the Grade 3 loop expectation a Mississauga child meets in Ontario math, a parent's checklist written for
// Mississauga, a Region of Peel open data project filtered down to Mississauga, the Beaver Computing Challenge.
// Sources, read raw on 22 October 2026. Curriculum and contest facts from keyword-research-2026-09/ca/facts-schools-contests.md
// (raw files in ca/src/ontario and ca/src/cemc); geography from ca/facts-geo.md; data and licence in
// ca/src-pilots/best-coding-classes-for-kids-in-mississauga/:
//  - Ontario DCP API, Elementary Mathematics (2020), Grade 3 (api-math-g3-strands.txt): C3.1 "including code that involves
//    sequential, concurrent, and repeating events"; teacher note "Loops make code more readable and reduce the number of
//    instructions that need to be written."; example "Set value to 0. Repeat 10 times: Add 2 to Value, Output value."
//    and "Resulting output is 2, 4, 6, 8, 10, 12, 14, 16, 18, 20."; Grade 3 summary "Students will write code to perform a
//    repeating operation, such as a repeating number pattern."
//  - EQAO: Grade 3 Reading, Writing and Mathematics "May 4 - June 8, 2027" (en dash in source).
//  - CEMC BCC (cemc/bcc.html, contests.html): "Monday, November 9, 2026 to Friday, November 20, 2026"; ordering deadline
//    "Monday, October 26, 2026"; "Students in Grade 6 or below are eligible to participate in the Grade 5/6 BCC.";
//    "12 multiple-choice questions out of a total of 60 (Grade 5/6)."; "Time allowed for completion is 45 minutes.";
//    "This contest is available in English only."; "Our contests are not tests or exams. There is no passing or failing
//    score."; how-contests-work "all students must participate through their school". Gauss: "Motivated students in
//    lower grades are welcome to write the contest."; "Monday, May 10, 2027 to Friday, May 21, 2027".
//  - facts-geo.md: Mississauga is in the Toronto CMA (98-10-0003-01); Mississauga exchanges (Cooksville, Streetsville,
//    Malton, Clarkson) sit in the 289/365/742/905 overlay (CNAC files via the Internet Archive); America/Toronto UTC-5
//    from 1 November 2026 and UTC-4 from 14 March 2027 (IANA tzdb 2026e). No populations used.
//  - Region of Peel, Active Recreation (ArcGIS item 0df602aa12ae4a1eb6ab97f849a5eb6a, active_rec_item.json): title
//    "Active Recreation"; accessInformation "Region of Peel - Peel Data Centre"; description "Attempts were made to only
//    include features that are on public lands" and "These sites are not necessarily open to the public and users should
//    follow posted signage and warnings."; licenseInfo "Open Data Licence for The Regional Municipality of Peel (Version
//    1.0)"; live count query returned {"count":2415}. Dataset page https://data.peelregion.ca/datasets/active-recreation
//    (HTTP 200). Active_Recreation.csv, 653,262 bytes, sha256 56831b12...4f8f0b.
//  - Licence (peel_licence_item_data.json, page data.peelregion.ca/pages/license): "grants you a worldwide, royalty-free,
//    perpetual, non-exclusive license"; "exploit the Information commercially"; attribution statement "Contains public
//    sector Information made available under The Regional Municipality of Peel's Open Data Licence - Version 1.0.";
//    no suggestion that Peel "endorses You or Your Use of the Information". The City of Mississauga Terms of Use were read
//    but not relied on (the file is the Region's, under the Region's licence).
// Our own calculations (count_playgrounds.py and checks.py, python -I, outputs *.out.txt): 2,415 rows; MUN Mississauga
// 1,179, Brampton 971, Caledon 256, blank 9 (the 9 blank rows also have no LM_TYPE); Mississauga rows whose LM_TYPE starts
// "Playground" 325: Playset/Swings 252, Playset 32, Splashpad 17, Swings 11, Climber 4, Wading Pool 4, Playset/Climber 3,
// Climber/Swings 2; UPDATED year of those 325: 2012 295, 2013 5, 2014 15, 2015 3, 2017 5, 2018 1, 2022 1; Mississauga
// rows by group: Playing Field 794, Playground 325. No facility names, phone numbers or school identifiers printed.
// Our Python version of the ministry's Grade 3 example prints 2 to 20 by twos (run 22 October 2026).
// India time conversions are ours, from the offsets above.
// Lesson family: filtering one town out of a regional file, then reading the date column before trusting the count.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const LOOP = [
  'value = 0',
  'for step in range(10):',
  '    value = value + 2',
  '    print(value)'
].join('\n');

const SCRIPT = [
  'import csv',
  '',
  'kinds = {}',
  'years = {}',
  'no_town = 0',
  'with open("Active_Recreation.csv", encoding="utf-8-sig") as f:',
  '    reader = csv.DictReader(f)',
  '    for row in reader:',
  '        town = row["MUN"].strip()',
  '        if town == "":',
  '            no_town += 1',
  '        if town != "Mississauga":',
  '            continue',
  '        kind = row["LM_TYPE"]',
  '        if kind.startswith("Playground"):',
  '            kinds[kind] = kinds.get(kind, 0) + 1',
  '            year = row["UPDATED"][:4]',
  '            years[year] = years.get(year, 0) + 1',
  '',
  'print("rows with no town:", no_town)',
  'for kind in sorted(kinds, key=kinds.get, reverse=True):',
  '    print(kind, kinds[kind])',
  'print("playground rows:", sum(kinds.values()))',
  'print(sorted(years.items()))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'MISSISSAUGA', label: 'Mississauga', blurb: 'Choosing a coding class for a Mississauga child aged 6 to 12: Grade 3 loops, a parent checklist and a Region of Peel playground data project.' },
  market: CA,
  audience: 'kids',
  slug: 'best-coding-classes-for-kids-in-mississauga',
  code: 'bkim',
  accent: '#3D664D',
  accentRationale: 'Mississauga kids page: a muted fern green, #3D664D, allocated to this row by the Canada group so it clears every site accent by 6 RGB units and the other Canada accents by 14; contrast 6.18 on the paper #FBF8F2, 5.81 on #F5F1E8 and 5.32 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Mississauga',
    eyebrow: 'Mississauga, Ontario',
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
  routeLabel: 'Mississauga',
  title: 'Best Coding Classes for Kids in Mississauga | Ages 6 to 12',
  description: 'How to pick the best coding classes for kids in Mississauga, ages 6 to 12: a parent checklist, the Grade 3 loops Ontario asks for, and a Peel playground project.',
  ogDescription: 'A Mississauga parent\'s checklist for choosing a kids\' coding class, the loops Ontario Grade 3 math already expects, and a playground data project for ages 9 to 12.',
  twitterDescription: 'Choosing a kids\' coding class in Mississauga: a checklist, Grade 3 loops and a Peel data project.',
  ogImageCourse: 'kids-coding-blocks-masterclass',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Mississauga Children Aged 6 to 12',
    description: 'Live online coding for Mississauga children from Grade 1 to Grade 7: block coding and Scratch, then typed Python, puzzles and first data projects, in a batch of 15 to 20 or one to one.'
  },

  h1: 'Coding classes for kids in Mississauga',
  capsuleQ: 'How should a Mississauga family choose a coding class for a child aged 6 to 12?',
  capsule: 'Pick a class that is live, grouped by age, linked to what Ontario math already asks in each grade, and open about its monthly fee. Modern Age Coders teaches Mississauga children aged 6 to 12 live online, in a class of 15 to 20 or one to one, usually starting with Coding for Kids or Python and AI for Kids. The first lesson is free.',
  lead: 'Most Mississauga parents who search for a coding class already have a child who has coded at school, whether they know it or not. Ontario math has asked for code since 2020, and by Grade 3 the code is supposed to repeat. So the useful question is not whether a class teaches coding, but whether it teaches it better than a crowded classroom can: with a teacher who watches each screen, waits through the mistake and asks the child to explain the fix. This page gives you a checklist written for Mississauga families, shows the exact Grade 3 expectation in the ministry&rsquo;s words, and walks through a small data project we built on a Region of Peel file that covers Mississauga playgrounds. We rank no other provider here. You can hold any class, ours included, to the same checks.',
  wa: 'Hello Modern Age Coders, could my child in Mississauga try a free coding class?',

  picks: {
    eyebrow: 'Course picks for Mississauga children',
    h2: 'Four courses for Mississauga children from Grade 1 to Grade 7',
    intro: 'Each fits an age band. The free first lesson confirms the band before anything is booked.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 8', note: 'Block coding for children still learning to read fluently: short programs that repeat, a first game, and a lot of saying aloud what the code will do.' },
      { course: 'scratch-programming-complete-course', band: 'Ages 7 to 10', note: 'Scratch projects built around repeat blocks, which is the Grade 3 idea in its friendliest form, ending in a game the child designed.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'The move to typed Python: for loops, if statements and the playground counting project on this page, at a pace set by the child.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 8 to 12', note: 'Puzzles first, code second: breaking a problem into steps, spotting the pattern, and checking an answer before trusting it.' }
    ]
  },

  sections: [
    {
      id: 'grade3', tint: '', eyebrow: 'Grade 3 in Ontario math',
      h2: 'By Grade 3, Ontario expects a Mississauga child&rsquo;s code to repeat',
      intro: 'Mississauga public schools teach the Ontario curriculum. The quoted wording below was pulled from the Ontario curriculum website&rsquo;s content service on 22 October 2026, and the second column is our plain-language reading of it.',
      body: [
        { kind: 'table', caption: 'Ontario Elementary Mathematics (2020), Grade 3, coding. Quoted from the Ontario Ministry of Education curriculum; the notes are our reading', head: ['What the ministry writes', 'What it means at home'], rows: [
          ['Expectation C3.1: code &ldquo;that involves sequential, concurrent, and repeating events&rdquo;', 'Steps in order, two things happening at once, and now a loop: the same instructions run again and again'],
          ['Teacher note: &ldquo;Loops make code more readable and reduce the number of instructions that need to be written.&rdquo;', 'The ministry is teaching an eight-year-old why programmers prefer one loop to ten copied lines'],
          ['Worked example: &ldquo;Set value to 0. Repeat 10 times: Add 2 to Value, Output value.&rdquo;', 'Counting by twos, written as code. The ministry gives the output as 2, 4, 6 and so on up to 20'],
          ['Grade summary: students &ldquo;will write code to perform a repeating operation, such as a repeating number pattern&rdquo;', 'Loops arrive through patterns the child already knows from math class, not as a separate computer subject']
        ] },
        { kind: 'p', text: 'Here is the ministry&rsquo;s example rewritten by us in Python, the language most children in our classes move to at about age nine. It prints exactly the ten numbers the ministry lists, from 2 to 20:<code class="cg-mt-2">' + LOOP + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why four lines matter', p: 'Without the loop the child would write ten print lines and ten additions. Change the rule to counting by threes and the loop needs one edit; the long version needs ten. That single edit is the Grade 3 idea, and a good class makes the child feel it.' },
          { h3: 'Blocks or typing?', p: 'Ontario lets classrooms use block or text code, so Mississauga children arrive with different habits. Under about eight we stay with blocks, where a repeat block is a shape the child can see; once typing stops being the hard part, the same loop moves to Python.' },
          { h3: 'The spring assessment', p: 'Grade 3 is also the first EQAO year. EQAO&rsquo;s window for the Grade 3 provincial assessment opens on 4 May 2027 and closes on 8 June 2027. Our lessons are not drills for it, though pattern spotting and patient step-by-step work travel well into any math task.' }
        ] },
        { kind: 'callout', h3: 'Our place beside school', p: 'Modern Age Coders is a live online class, not a school. It gives no report-card marks and has no link with the Ontario Ministry of Education, EQAO, the Mississauga school boards or the Region of Peel.' }
      ]
    },
    {
      id: 'choose', tint: 'tint', eyebrow: 'A parent checklist',
      h2: 'Eight checks for any kids&rsquo; coding class in Mississauga',
      intro: 'Our checklist, written for Mississauga families with a child aged 6 to 12. Ask each question of every provider you are comparing, in person or online, and judge the answers rather than the brochure. It applies to us as much as to anyone.',
      body: [
        { kind: 'table', caption: 'A checklist for choosing a coding class for a child aged 6 to 12 in Mississauga (our framework, October 2026)', head: ['Ask this', 'Why it matters here', 'A good answer sounds like'], rows: [
          ['Does the teacher know what my child&rsquo;s grade asks?', 'Ontario math already expects loops by Grade 3 and if statements by Grade 5, so a class can build on school instead of repeating it.', '&ldquo;In Grade 3 we turn repeat blocks into loops; here is what that looks like.&rdquo;'],
          ['How are children grouped?', 'A six-year-old who is still learning to read and an eleven-year-old who types quickly cannot share one lesson plan.', 'Age bands stated in writing, and a placement lesson before the first booking.'],
          ['Will one teacher stay with the group?', 'Progress depends on someone remembering last week&rsquo;s bug and last week&rsquo;s worry.', 'A named regular teacher, with a cover plan for holidays.'],
          ['What does the round trip cost in time?', 'For a centre across the city, add the drive both ways to the lesson. An online class removes the drive but needs a quiet room and a laptop.', 'A frank answer about what the child needs at home, or about parking and pickup.'],
          ['What will my child have built after eight classes?', 'Vague promises about skills are hard to check. A finished project is easy to check.', 'A named project the child can run, change and explain to you.'],
          ['Is the monthly fee in writing before the trial?', 'Comparing two classes is only fair when both prices are known up front.', 'A fee you can read on the provider&rsquo;s site or in an email.'],
          ['What happens when the clocks change?', 'Ontario clocks go back on 1 November 2026 and forward on 14 March 2027. Online classes with teachers in other zones can slip by an hour.', 'Every time confirmed again in Eastern time before each change.'],
          ['Does the teacher let my child struggle a little?', 'A child who is handed the fix learns to wait for fixes. A child who is asked a good question learns to find them.', '&ldquo;I wait, then ask what the code did, before I give a hint.&rdquo;']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The two that matter most', p: 'If you only have time for two questions, ask about grouping and about the struggle. A well-grouped class where the teacher waits through mistakes will usually get the rest right too.' },
          { h3: 'Watch one lesson', p: 'In any free trial, sit within earshot for the first ten minutes. Count how often your child talks. A class where only the teacher speaks is a lecture with a screen attached.' },
          { h3: 'Ask your child afterwards', p: 'Ask one thing at dinner: what did you make, and what went wrong on the way? A child who can tell you about a bug they fixed has had a real lesson.' }
        ] }
      ]
    },
    {
      id: 'peel', tint: 'deep', eyebrow: 'Mississauga data project',
      h2: 'How many Mississauga playground rows are in the Region of Peel file?',
      intro: 'For our older children, around ages 10 to 12, we use a real open file from the Region of Peel. It maps active recreation sites in Mississauga, Brampton and Caledon, so the first job is to keep only Mississauga. The counts are ours; the Region publishes the file, not these numbers.',
      body: [
        { kind: 'table', caption: 'Our count of the Region of Peel Active Recreation file, downloaded 22 October 2026 (2,415 rows in all). A row is one mapped area, not one swing', head: ['What we counted', 'Rows'], rows: [
          ['Rows with Mississauga in the MUN column', '1,179'],
          ['Rows with no town at all (and no type either)', '9'],
          ['Mississauga rows whose type starts with Playground', '325'],
          ['Playground - Playset/Swings', '252'],
          ['Playground - Playset', '32'],
          ['Playground - Splashpad', '17'],
          ['Playground - Swings', '11'],
          ['Playground - Climber, and Playground - Wading Pool', '4 each'],
          ['Playground - Playset/Climber', '3'],
          ['Playground - Climber/Swings', '2'],
          ['Of the 325 playground rows, last updated in 2012', '295']
        ] },
        { kind: 'p', text: 'This is our script. It uses only Python&rsquo;s standard library and runs in the same folder as the downloaded CSV. The <b>continue</b> line is the whole filtering lesson: any row that is not Mississauga is skipped before it can be counted.<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Keep one town', p: 'The Region&rsquo;s file has 971 Brampton rows and 256 Caledon rows beside the Mississauga ones. A child who forgets the filter reports a Peel number as a Mississauga number, which is the most common mistake in real data work.' },
          { h3: '2. Notice the blanks', p: 'Nine rows name no town and no type. Our script counts them instead of quietly dropping them, so the child can say exactly how much of the file was unusable.' },
          { h3: '3. Read the date column', p: 'Each row has an UPDATED value. For 295 of the 325 Mississauga playground rows it is a 2012 date, so the file is a picture of an older survey. A new splash pad may simply not be in it.' }
        ] },
        { kind: 'callout', h3: 'What the counts cannot tell you', p: 'The Region says attempts were made &ldquo;to only include features that are on public lands&rdquo;, and warns that these sites are not necessarily open to the public. So 325 is not the number of playgrounds a child can visit today. It is the number of rows of one kind in one file, last touched mostly in 2012. Saying that clearly is the real skill.' },
        { kind: 'p', text: 'Data source: Region of Peel, <a class="cg-inline-link" href="https://data.peelregion.ca/datasets/active-recreation">Active Recreation</a>, published through the Peel Data Centre. Contains public sector Information made available under The Regional Municipality of Peel&rsquo;s Open Data Licence - Version 1.0 (<a class="cg-inline-link" href="https://data.peelregion.ca/pages/license">licence</a>). The Region has not endorsed this page or our lessons, and we leave the file&rsquo;s facility names, phone numbers and school details out of this page.' }
      ]
    },
    {
      id: 'contests', tint: '', eyebrow: 'A first contest',
      h2: 'The Beaver Computing Challenge, for Mississauga children in Grade 6 or below',
      intro: 'CEMC&rsquo;s math contests start at Grade 7 with Gauss. Its computing contest for younger students, the Beaver Computing Challenge (BCC), reaches down to Grades 5 and 6 and needs logic, not code. The answers in the table come from CEMC&rsquo;s pages, checked on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'The Grade 5/6 BCC in autumn 2026: what CEMC, at the University of Waterloo, publishes about it', head: ['Question a parent asks', 'CEMC&rsquo;s answer'], rows: [
          ['Who can write it?', 'Any student in Grade 6 or below may write the Grade 5/6 level'],
          ['When?', '9 to 20 November 2026, inside a school window'],
          ['When must the school order it?', 'By Monday 26 October 2026'],
          ['How long, and how many questions?', '12 multiple-choice questions in 45 minutes, scored out of 60'],
          ['Which language?', 'English only'],
          ['Is it a test?', 'No. CEMC says its contests are not tests or exams, with no passing or failing score']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Ask the school now', p: 'CEMC says all students must participate through their school. CEMC set the 2026 ordering deadline for 26 October 2026, so a Mississauga parent who wants a Grade 5 or 6 child to try it should raise it with the teacher early in the school year.' },
          { h3: 'What it rewards', p: 'Each BCC question is a small logic story. The habit our younger students build every week, guessing what a loop will print and then running it to see, is close to ideal practice, and it needs no contest paper at all.' },
          { h3: 'Later: Gauss', p: 'For Grades 7 and 8 CEMC runs the Gauss math contest, listed for 10 to 21 May 2027, and says motivated students in lower grades are welcome to write it.' }
        ] },
        { kind: 'p', text: 'We never reproduce CEMC&rsquo;s past problems. We point families to CEMC&rsquo;s free archive and teach with puzzles written by our own teachers, labelled as ours. Parents who want the detail of every BCC level can read our <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Computing Challenge guide</a>; for the step after it, see <a class="cg-inline-link" href="/gauss-contest-preparation">preparing for Gauss</a>. CEMC and the University of Waterloo have no connection with Modern Age Coders.' }
      ]
    },
    {
      id: 'clock', tint: 'tint', eyebrow: 'Class times',
      h2: 'Mississauga after school, India early morning: how the times line up',
      intro: 'Mississauga runs on Eastern time and moves its clocks in November and March. India, where our teachers are based, keeps one offset all year. Below, two sample Mississauga slots are converted for each part of the 2026 to 2027 school year, with India shown on a 24-hour clock.',
      body: [
        { kind: 'table', caption: 'Sample Mississauga class slots on the India clock, 2026 to 2027 (UTC offsets from the IANA time zone database, 2026e; the conversions are ours)', head: ['Mississauga slot', 'Until 1 Nov 2026 (UTC-4)', '1 Nov 2026 to 14 Mar 2027 (UTC-5)', 'From 14 Mar 2027 (UTC-4)'], rows: [
          ['Weekday, 5:00 pm', '02:30 India, next day', '03:30 India, next day', '02:30 India, next day'],
          ['Saturday, 10:00 am', '19:30 India, same day', '20:30 India, same day', '19:30 India, same day']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Written in Eastern time', p: 'Invitations name the Mississauga time first; India time is only for our own planning. In the week before 1 November 2026, and again before 14 March 2027, each family gets the new time in writing, so no child sits waiting an hour early.' },
          { h3: 'Short for the youngest', p: 'A six-year-old runs out of attention sooner than a twelve-year-old, so early lessons are shorter, with a movement break. Near the end of elementary school, most children happily stay with one project for the whole session.' },
          { h3: 'Mississauga numbers', p: 'Mississauga lines use the 289, 365, 742 and 905 area codes. Enter all ten digits in the booking form; it adds the country code for you.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first repeat block to typed Python by Grade 7',
    intro: 'Treat the ages as rough. In the free lesson the teacher watches what your child actually does and places them from that.',
    cols: [
      { band: 'Ages 6 and 7', h3: 'Order and repeats', p: 'Short block programs, a character that moves, and the habit of guessing what will happen before pressing go.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 and 9', h3: 'Loops that do work', p: 'Counting patterns, simple games and the Grade 3 loop idea taken further than school has time for.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 10 and 11', h3: 'First typed code', p: 'Python with for loops and if statements, small games, and a first look at a real file like the Peel one.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Age 12', h3: 'Bigger projects', p: 'Functions, longer programs and logic puzzles that lead toward Gauss in Grade 7 and, later, computing contests.', courses: ['python-ai-kids-masterclass', 'game-development-masterclass-for-kids'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Does a Mississauga child still need to learn loops when AI can write them?',
    intro: 'Yes, because the child has to know whether the loop is right.',
    p1: 'An AI tool will write the counting-by-twos loop in a second. It will also write the playground script, and it may forget the Mississauga filter, which quietly turns a Mississauga answer into a Peel answer. A ten-year-old who has written the filter by hand spots that at once. One who has only ever asked for code does not.',
    p2: 'So our younger classes are about thinking: predict, run, compare, fix. We teach what AI is and where it goes wrong in our AI literacy course, but we do not hand children a chatbot to do their thinking. Families who try ChatGPT at home should know that OpenAI asks for a parent&rsquo;s permission before users younger than 18 sign up.',
    closer: 'Ontario wrote loops into Grade 3 math so that children learn to think about repetition, and an eight-year-old who can explain a loop owns something a chatbot cannot hand over.',
    blogAnchor: 'why coding is still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How live online classes work for Mississauga children',
    intro: 'The teacher and the class are online, so a child in Malton and one in Clarkson can share the same lesson without anyone driving.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Two formats', p: 'Join a batch of 15 to 20 children working at the same stage, or book a teacher for one child alone when you want a quicker or more personal route.' },
      { h3: 'The set-up at home', p: 'Any laptop or desktop with a keyboard and working sound, on a steady connection. Typing code on a tablet is slow going, and a phone screen is too small for it.' },
      { h3: 'Parents can listen', p: 'Sit nearby for any lesson. We would rather you hear how the teacher asks questions than take our word for it.' },
      { h3: 'Nearby, same class', p: 'Families in Brampton, Oakville, Milton and the City of Toronto join the same classes on the same Eastern time clock.' },
      { h3: 'Start free', p: 'The first lesson is a real class that ends with a suggested level and course. We ask for no card.' }
    ],
    spec: { title: 'No Mississauga centre', p: 'Modern Age Coders has no classroom in Mississauga and claims none. Every class is taught live online, from India, by a regular teacher.' }
  },

  fees: {
    h2: 'What kids&rsquo; coding classes cost for Mississauga families',
    intro: 'Three options. Each fee shows its currency code beside it.',
    first: 'A full live lesson at no cost, ending with a recommended course and level for your child.',
    group: 'The monthly fee for a place in a batch of 15 to 20 children at the same stage.',
    private: 'The monthly fee for one teacher and one child, at times that suit your family.',
    closer: 'A Mississauga family pays the same monthly fee as a family in any other Canadian city. The first bill comes only after the free lesson, when you have chosen a course and a time; the pricing page sets out how missed classes and holidays work.'
  },

  reviewsH2: 'Reviews from families and students on Google',

  book: {
    h2: 'Book a free coding class for your Mississauga child',
    intro: 'Tell us the grade or age. A six-year-old gets a short block puzzle; a ten-year-old might count by twos in Python and then change the rule.',
    success: 'Thank you. The team will be in touch soon about a class for your child in Mississauga.'
  },

  faq: {
    h2: 'Questions Mississauga parents ask about kids&rsquo; coding',
    intro: 'Short answers to what Mississauga families ask us most.',
    items: [
      { q: 'Do you run coding classes for kids in Mississauga?', a: 'Yes, though not in a Mississauga building. Our classes are live online, so your child learns from home with a teacher who can see their screen, in a batch of 15 to 20 or alone with the teacher.' },
      { q: 'From what age can a Mississauga child join?', a: 'Six. Ontario math already asks Grade 1 children to write and run short code, so age 6 is a natural start, and these courses for children run up to age 12.' },
      { q: 'Which class should a 7-year-old take?', a: 'Usually Coding for Kids or Scratch, both with blocks. Children of seven are often still building reading speed, and blocks let them focus on the logic.' },
      { q: 'When should a child switch from blocks to Python?', a: 'When typing stops being the hard part, which for many children is around age 9 or 10. The free class helps us judge it.' },
      { q: 'Do Mississauga schools already teach coding?', a: 'Yes. Ontario elementary math has included coding from Grade 1 since 2020, and by Grade 3 children are expected to write code with repeating events, which means loops.' },
      { q: 'How do I compare two coding classes fairly?', a: 'Ask both the same questions: how children are grouped, whether one teacher stays, what your child will have built after eight classes and what the monthly fee is. The checklist on this page has all eight.' },
      { q: 'Can my child write the Beaver Computing Challenge?', a: 'If they are in Grade 6 or below they can write the Grade 5/6 level, through their school. CEMC lists it for 9 to 20 November 2026, and schools order by 26 October 2026.' },
      { q: 'What times are the classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We confirm every time in Eastern time.' },
      { q: 'Does my child need any software?', a: 'A laptop or desktop with a browser is enough to begin. The teacher sets up anything else in the first class, using free tools.' },
      { q: 'How much do the classes cost?', a: 'See the fees section higher up this page. The first class is free, and the section shows the monthly fee for a batch place and for one-to-one lessons. You pay nothing until after that free class.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario families',
    h2: 'Other pages for Mississauga and Ontario',
    html: 'For the wider province, see <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a> or the <a class="cg-inline-link" href="/coding-classes-in-canada">Canada hub</a>. The full grade-by-grade picture is in our <a class="cg-inline-link" href="/ontario-coding-curriculum-grades-1-to-8">Ontario coding guide for Grades 1 to 8</a>, Grade 3 math practice is on the <a class="cg-inline-link" href="/eqao-grade-3-math-practice">EQAO Grade 3 page</a>, and families comparing formats nationally can read <a class="cg-inline-link" href="/best-online-coding-classes-in-canada">online coding classes in Canada compared</a>. Next door, there is also <a class="cg-inline-link" href="/coding-and-ai-classes-in-toronto">coding and AI in Toronto</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Mississauga and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/coding-and-ai-classes-in-toronto', label: 'Toronto' },
    { href: '/ontario-coding-curriculum-grades-1-to-8', label: 'Ontario coding, Grades 1 to 8' },
    { href: '/beaver-computing-challenge-guide', label: 'Beaver Computing Challenge' }
  ],

  personalityCss: `
.cg-root.cg-bkim .cg-hero h1 { font-weight: 700; letter-spacing: -0.015em; line-height: 1.08; }
.cg-root.cg-bkim .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-bkim .cg-eyebrow { letter-spacing: 0.08em; font-weight: 700; text-transform: uppercase; font-size: 0.76rem; }
.cg-root.cg-bkim .cg-section-head h2 { max-width: 30ch; }
.cg-root.cg-bkim .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-bkim .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bkim #grade3 code, .cg-root.cg-bkim #peel code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.82rem; line-height: 1.55; padding: 0.9rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-bkim #choose .cg-table td:first-child { font-weight: 650; }
.cg-root.cg-bkim .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: Elementary Mathematics (2020) Grade 3 C3.1 (sequential, concurrent and repeating events), the Grade 3 teacher note on loops, the ministry example that counts by twos to 20, and the Grade 3 summary on repeating operations; EQAO Grade 3 window 4 May to 8 June 2027. CEMC 2026 Beaver Computing Challenge Grade 5/6 facts (dates, ordering deadline 26 October 2026, 12 questions out of 60, 45 minutes, English only, not a test), the through-a-school rule and the Gauss dates. Mississauga area codes (289, 365, 742, 905) and Eastern time offsets from facts-geo.md (CNAC via the Internet Archive; IANA tzdb 2026e).',
    localProject: 'Region of Peel, Active Recreation (Open Data Licence for The Regional Municipality of Peel, Version 1.0), CSV downloaded 22 October 2026 (653,262 bytes) and counted with our script count_playgrounds.py (python -I): 2,415 rows; Mississauga 1,179; 9 rows with no town; 325 Mississauga playground rows (Playset/Swings 252, Playset 32, Splashpad 17, Swings 11, Climber 4, Wading Pool 4, Playset/Climber 3, Climber/Swings 2); 295 of the 325 last updated in 2012. Labelled as ours. Lesson family: filtering one town out of a regional file and reading the date column.',
    requiredMentions: [
      'Playground - Playset/Swings',
      'Of the 325 playground rows, last updated in 2012',
      'Rows with no town at all',
      'Regional Municipality of Peel&rsquo;s Open Data Licence - Version 1.0',
      'Loops make code more readable and reduce the number of instructions',
      'Set value to 0. Repeat 10 times',
      'By Monday 26 October 2026',
      'Mississauga lines use the 289',
      '971 Brampton rows and 256 Caledon rows'
    ],
    sources: [
      { claim: 'Ontario curriculum content API: Grade 3 math strands, C3.1 coding with repeating events, teacher notes and worked example.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_3___strands?depth=4' },
      { claim: 'EQAO: 2026-27 assessment windows, including Grade 3.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'CEMC Beaver Computing Challenge: 2026 dates, ordering deadline, levels, format, language.', url: 'https://cemc.uwaterloo.ca/contests/bcc' },
      { claim: 'CEMC: students participate through their school.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'CEMC Gauss contest: grades and 2027 dates.', url: 'https://cemc.uwaterloo.ca/contests/gauss' },
      { claim: 'Region of Peel Active Recreation dataset page.', url: 'https://data.peelregion.ca/datasets/active-recreation' },
      { claim: 'Open Data Licence for The Regional Municipality of Peel, Version 1.0 (commercial use, attribution statement, non-endorsement).', url: 'https://data.peelregion.ca/pages/license' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Mississauga population figure: StatCan was not reachable live, so none is printed.',
      'A count of playgrounds a child can visit: refused; the file counts mapped rows, many last updated in 2012, and the Region warns some sites are not open to the public.',
      'Facility names, phone numbers and school identifiers from the Peel file: deliberately not printed.',
      'Any ranking or naming of other Mississauga coding providers: this page sets criteria only.',
      'That Modern Age Coders is the best kids coding class in Mississauga: never claimed.',
      'That our classes prepare children for EQAO or improve report-card marks: refused.',
      'CEMC contest fees: left out on purpose (currency-neutral page).',
      'Any affiliation with the Region of Peel, the City of Mississauga, the Ontario Ministry of Education, EQAO, CEMC or the University of Waterloo.'
    ]
  }
};
