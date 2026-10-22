'use strict';
// March Break coding camp online (ag- market door; Canada cluster Plan 2, row 85).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Our camp programmes are the winter and summer camps (src/pages/winter-coding-camp*.html, summer-coding-camp*.html,
// online-coding-summer-camp.html, all read in full 22 October 2026). None of those pages mentions March Break, so this
// page claims no March Break camp: over the break it offers short live classes on the days the family chooses (1-on-1
// or the usual batch) and a break-week plan labelled ours, and links to the winter and summer camps as our camps.
// Winter camp facts used, from our own pages only (no fee figure, no currency): "3-Week Intensive"; "100% Online";
// tracks Kids 6 to 11, Teens 12 to 17, Adults 18+; "All tracks run live online, join from anywhere on Earth.";
// "morning, afternoon, and evening batches to fit different time zones"; Canada named among the countries.
// Sources (copies in keyword-research-2026-09/ca/src-pilots/march-break-coding-camp-online/):
//  - Ontario, R.R.O. 1990, Reg. 304, School Year Calendar, Professional Activity Days (e-Laws document service,
//    ontario.ca/laws/api/v2/legislation/en/doc-search/regulation/900304, fetched raw 22 October 2026, consolidated
//    August 13, 2025, reg304-api.json / reg304.txt): s. 2 (4) para. 6 "Five consecutive days commencing on the Monday next
//    following the Friday preceding the 14th day of March."; para. 5.1 "Family Day, being the third Monday in
//    February."; s. 2 (1) "the school year shall commence on or after the 1st day of September and end on or before the
//    30th day of June."; s. 2 (3.1) "every school year shall include a minimum of 194 school days", "Three days shall be
//    designated by the board as professional activity days.", "up to four days may be designated by the board as
//    professional activity days"; s. 1 definition "means a school day that is designated as a day for professional
//    activities on a school calendar" with the French term "journée pédagogique", and "professional activity" includes
//    evaluation, consultation with parents, counselling, curriculum work and professional development "but does not
//    include preparation by teachers for classes or instruction"; s. 4.1 (2) detailed summary "at least 14 days before
//    the professional activity day", made publicly available; s. 4 (1) calendars submitted "on or before the first day of
//    March in respect of the next school year"; s. 5 (1) "a board may designate a school year and school holidays that
//    are different from those prescribed in section 2" (with the Minister's approval).
//  - Ontario Ministry of Education, "Mandatory Professional Activity Days for the 2026-27 School Year", memorandum dated
//    May 15, 2026 (pa-days-2026-27.html/.txt): topic "Cyber Safety and Artificial Intelligence".
//  - BC School Calendar Regulation, B.C. Reg. 314/2012 (bclaws.gov.bc.ca, "This consolidation is current to October 13,
//    2026.", bc-school-calendar-reg.html/.txt): a school calendar must state "the vacation periods and the dates of
//    statutory holidays"; a proposed calendar is made public "at least one month before the date the school calendar
//    must be submitted to the minister". No BC break date is printed.
//  - facts-geo.md section 3: Eastern clocks go forward on Sunday 14 March 2027; offsets by province.
//  - facts-schools-contests.md (verified): CEMC Euclid "Tuesday, April 6, 2027"; FGH "Wednesday, April 7, 2027"; CCC
//    "Wednesday, February 17, 2027"; Pascal, Cayley, Fermat February 23 and 24, 2027; Gauss May 10 to 21, 2027; EQAO
//    Grade 3 and 6 window from May 4, 2027.
//  - Provider sites (facts-competitors.md, read raw 22 October 2026): Actua network "Week-long day camps provide a
//    variety of fun, hands-on STEM activities.", "Mostly offered during school holidays"; Coding with Kids Canada "Join a
//    small group camp from home, via a LIVE video conference!"; Code Ninjas camps "Code Ninjas Camps empower kids to gain
//    valuable tech skills". No provider fees printed.
// Our own material, labelled on the page: the arithmetic that turns the Reg. 304 rule into Monday 15 to Friday 19 March
// 2027 (14 March 2027 is a Sunday; the Friday before is 12 March; the Monday after is 15 March), Family Day 2027 on
// Monday 15 February (third Monday), the Python program (run under CPython on 22 October 2026: 2027 Monday 15 March to
// Friday 19 March; 2028 Monday 13 March to Friday 17 March; 2029 Monday 12 March to Friday 16 March), the break-week
// plans and the PA day plan. Lesson family: turning a written rule into an algorithm (dates as data).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const MB = `# Our program: Ontario's March Break rule, from Regulation 304, s. 2 (4), para. 6
# "Five consecutive days commencing on the Monday next following the Friday
#  preceding the 14th day of March."  (written by Modern Age Coders)
from datetime import date, timedelta

def march_break(year):
    the_14th = date(year, 3, 14)
    if the_14th.weekday() == 4:
        return None              # 14 March is a Friday: check your board
    back = (the_14th.weekday() - 4) % 7   # days back to the Friday before
    friday = the_14th - timedelta(days=back)
    monday = friday + timedelta(days=3)   # the Monday next following
    return monday, monday + timedelta(days=4)

for year in (2027, 2028, 2029):
    start, end = march_break(year)
    print(year, start.strftime("%A %d %B"), "to", end.strftime("%A %d %B"))`;

const MB_OUT = `2027 Monday 15 March to Friday 19 March
2028 Monday 13 March to Friday 17 March
2029 Monday 12 March to Friday 16 March`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'CALENDAR', blurb: 'March Break 2027 and PA days for coding families: the Ontario rule that sets the dates, how PA days work, and live online coding plans for a break week or a single day off.' },
  slug: 'march-break-coding-camp-online',
  code: 'mbc',
  accent: '#606628',
  accentRationale: 'March Break coding camp online: a muted olive #606628, allocated for this row at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 5.78 on the paper #FBF8F2, 5.43 on #F5F1E8 and 4.97 on #EDE7DA',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'March Break coding',
  title: 'March Break Coding Online: 2027 Dates, PA Days, Live Classes',
  description: 'Live online coding for March Break 2027 and PA days: the Ontario rule that sets the break, how PA days work, and break-week plans for ages 6 to 18 in Canada.',
  ogDescription: 'Ontario\'s regulation puts March Break 2027 on Monday 15 to Friday 19 March. Here is how the rule works, what PA days are, and how to spend a break week coding live online.',
  twitterDescription: 'March Break 2027 and PA days: the rule behind the dates, and live online coding plans for the week.',
  pageName: 'March Break Coding Camp Online',
  webPageDescription: 'A guide for Canadian families to coding over March Break 2027 and on PA days, built from Ontario Regulation 304 and the BC School Calendar Regulation, with an original Python program for the March Break rule and break-week plans.',
  courseDescription: 'Live online coding classes over March Break and PA days for students across Canada, booked one to one at the family\'s convenience or joined as a batch.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'March Break coding',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#dates', label: '2027 dates' },
    { href: '#padays', label: 'PA days' },
    { href: '#program', label: 'The rule in code' },
    { href: '#week', label: 'Break-week plans' },
    { href: '#formats', label: 'Camp formats' }
  ],
  eyebrow: 'Canada &middot; March Break 2027 &middot; PA days',
  h1: 'March Break coding online: live classes for the break week',
  lede: 'March Break is the one full week between the winter holidays and the end of the school year when a child has time to build something properly. In Ontario the dates are not chosen school by school; they come from a provincial regulation, which for 2027 points to Monday 15 March to Friday 19 March. This page explains that rule, shows what PA days are (Ontario\'s professional activity days, when students stay home and teachers train), compares the kinds of break camps on offer, and sets out how Modern Age Coders students spend a break week or a single day off coding live online, one to one at a time that suits the family or in a regular batch.',
  secondaryCta: { href: '#week', label: 'See the break-week plans' },
  wa: 'Hello Modern Age Coders, we would like live online coding classes for our child over March Break 2027. What can you offer?',
  heroNote: 'Live online classes since 2020 &middot; ages 6 to 67 &middot; one to one at your convenience, or a batch',
  spec: [
    ['Ontario March Break 2027', 'Monday 15 to Friday 19 March (our reading of Reg. 304)'],
    ['Set by', 'Ontario Regulation 304, unless a board has a different approved calendar'],
    ['PA days in Ontario', 'Three required, up to four more, dates chosen by each board'],
    ['Other provinces', 'Break dates set in each school district\'s or board\'s calendar'],
    ['Our format', 'Live online, 1-on-1 or a batch'],
    ['Ages', '6 to 18 for break plans; adults welcome'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class, even during the break']
  ],
  capsuleQ: 'In short',
  capsule: 'In Ontario, March Break 2027 falls on Monday 15 to Friday 19 March under Regulation 304, unless a board has an approved different calendar; other provinces set their breaks board by board. A March Break coding camp online gives a student a week of live classes and a finished project. Modern Age Coders teaches live online over the break, one to one at your convenience or in a batch, in courses such as Game Development for Kids.',

  picks: {
    eyebrow: 'Good courses to start over a break',
    h2: 'Three courses that suit a March Break start',
    lede: 'Each can begin in the break week and carry on afterwards, so the week becomes a start rather than a one-off.',
    items: [
      { course: 'game-development-masterclass-for-kids', code: 'MBC / 01', title: 'Game Development for Kids', note: 'Ages 8 to 12, complete beginners. Scratch, Roblox and Minecraft projects, the easiest way to fill a week with something finished.' },
      { course: 'python-ai-kids-masterclass', code: 'MBC / 02', title: 'Python and AI for Kids', note: 'Ages 9 to 12. A first typed language through games and turtle drawings, a good jump to make while school is out.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', code: 'MBC / 03', title: 'Vibe Coding for Teens', note: 'Ages 13 to 17. Python and web projects built with AI help, on code the student understands and can explain.' }
    ]
  },

  sections: [
    {
      id: 'dates', tint: 'tint', eyebrow: 'The 2027 dates',
      h2: 'When is March Break 2027 in Ontario?',
      lede: 'Ontario sets its school holidays in a regulation under the Education Act: Regulation 304, School Year Calendar, Professional Activity Days. We read the current version through Ontario\'s e-Laws service on 22 October 2026. It does not print the dates for each year; it gives a rule, and the dates follow from the calendar.',
      body: [
        { kind: 'table', caption: 'Ontario school holidays in the 2026 to 2027 school year that matter for a coding plan (Reg. 304 wording, our date arithmetic)', head: ['Holiday', 'What Regulation 304 says', 'Our date for 2027'], rows: [
          ['March Break', '"Five consecutive days commencing on the Monday next following the Friday preceding the 14th day of March."', 'Monday 15 March to Friday 19 March 2027: 14 March 2027 is a Sunday, the Friday before it is 12 March, and the Monday after that is 15 March'],
          ['Family Day', '"Family Day, being the third Monday in February."', 'Monday 15 February 2027'],
          ['Good Friday and Easter Monday', 'Both listed as school holidays', 'Not worked out here; check your board\'s calendar'],
          ['The school year itself', '"the school year shall commence on or after the 1st day of September and end on or before the 30th day of June."', 'Ends on or before Wednesday 30 June 2027']
        ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.ontario.ca/laws/regulation/900304" rel="noopener" target="_blank">R.R.O. 1990, Reg. 304, School Year Calendar, Professional Activity Days</a>, current consolidation (August 13, 2025), read 22 October 2026. The dates in the third column are our arithmetic from the regulation\'s wording, not dates printed by the province. Modern Age Coders is not connected with the Ontario government or any school board.' },
        { kind: 'two', mt: true,
          leftH3: 'Why your board\'s calendar has the last word',
          left: [
            'Section 5 of the regulation allows that "a board may designate a school year and school holidays that are different from those prescribed in section 2", once the Minister approves the calendar. Because the regulation allows exceptions, a school or program can run on a different calendar.',
            'Boards also have to adopt and submit their calendars "on or before the first day of March in respect of the next school year", so the 2027 to 2028 dates should be settled by early March 2027. If your child\'s school runs a different calendar, trust the school.'
          ],
          rightH3: 'Outside Ontario',
          right: [
            'Other provinces leave the break to local calendars. In British Columbia, the School Calendar Regulation requires every school calendar to state "the vacation periods and the dates of statutory holidays", and each board must publish a proposed calendar "at least one month before the date the school calendar must be submitted to the minister".',
            'So a family in Vancouver, Calgary, Winnipeg or Halifax should read the break dates from their own district or board. We do not print them here, because we have not read every board\'s calendar and will not guess.'
          ] },
        { kind: 'p', mt: true, html: 'One more date for families who book live classes: Eastern clocks go forward on Sunday 14 March 2027, the day before Ontario\'s break begins. A class time agreed in February moves by an hour for families in British Columbia, Alberta, Saskatchewan and Manitoba, which do not change their clocks, so we confirm every break-week time again that weekend.' }
      ]
    },
    {
      id: 'padays', tint: 'deep', eyebrow: 'PA days explained',
      h2: 'What is a PA day? Ontario\'s professional activity days, simply',
      lede: 'Parents new to Ontario often meet the term on a school newsletter. A PA day is a school day with no classes for students, set aside for teachers\' professional work. The rules are in the same Regulation 304.',
      body: [
        { kind: 'table', caption: 'PA days in Ontario, from Regulation 304 and the 2026-27 ministry memorandum', head: ['Question', 'What the official source says'], rows: [
          ['What is a PA day?', 'A "professional activity day" is defined as a school day that "is designated as a day for professional activities on a school calendar". It is counted apart from instructional days, the days on which an instructional program is provided for each pupil. The regulation\'s French version calls it a "journée pédagogique".'],
          ['What do teachers do?', 'Professional activity includes evaluation of pupils\' progress, consultation with parents, counselling, curriculum and program work, professional development and conferences, "but does not include preparation by teachers for classes or instruction".'],
          ['How many are there?', '"Three days shall be designated by the board as professional activity days." In addition, "up to four days may be designated by the board as professional activity days."'],
          ['How long is the school year?', '"every school year shall include a minimum of 194 school days", counting PA days as school days.'],
          ['Who picks the dates?', 'Each board, on its own calendar. There is no single provincial PA day.'],
          ['How much notice?', 'Boards prepare a detailed summary of each PA day and make it public "at least 14 days before the professional activity day".'],
          ['What are the 2026-27 topics?', 'The ministry\'s memorandum of May 15, 2026 sets the mandatory topics, including "Cyber Safety and Artificial Intelligence".']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.ontario.ca/laws/regulation/900304" rel="noopener" target="_blank">Ontario Regulation 304</a> and <a class="ag-inline-link" href="https://www.ontario.ca/document/education-ontario-policy-and-program-direction/mandatory-professional-activity-days" rel="noopener" target="_blank">Mandatory Professional Activity Days for the 2026-27 School Year</a>, both read 22 October 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'PA days and coding, in practice',
          left: [
            'A PA day is a single weekday at home, often with a few days\' notice from the newsletter. It suits one focused live class far better than a camp: an hour or so with a teacher, then an afternoon to finish what was started.',
            'Our one-to-one students often book a class on a PA day. The free first class can also be booked on one, which gives a child something to look forward to on a day that otherwise drifts.'
          ],
          rightH3: 'Elsewhere in Canada',
          right: [
            'Other provinces have school days without classes too. What they are called, and when they fall, comes from the local board or district calendar.',
            'Whatever the name, the planning question is the same: how many days off, how much notice, and whether a parent is home. Our timing is flexible enough to fit any of them.'
          ] }
      ]
    },
    {
      id: 'program', tint: 'tint', eyebrow: 'The rule in code',
      h2: 'Turning the March Break rule into a Python program',
      lede: 'A short program we wrote, and a good first project for a curious Grade 7 or 8 student: take a sentence from a law and turn it into steps a computer can follow. It works out Ontario\'s March Break for any year from the regulation\'s own words.',
      body: [
        { kind: 'code', label: 'Our program &middot; Ontario\'s March Break from Regulation 304', lang: 'python', code: MB },
        { kind: 'code', label: 'What it prints', lang: 'text', code: MB_OUT, note: 'Run under Python on 22 October 2026. In date.weekday(), Monday is 0 and Friday is 4. These are our calculations from the regulation\'s wording; your board\'s published calendar is the authority.' },
        { kind: 'two', mt: true,
          leftH3: 'The one case the program refuses',
          left: [
            'When 14 March is itself a Friday, as it is in 2031, the phrase "the Friday preceding the 14th day of March" can be read two ways: that same Friday, or the one a week earlier. The program does not guess. It returns None and tells you to check your board.',
            'That is a real programming lesson. When a specification is ambiguous, a good program says so rather than quietly picking an answer.'
          ],
          rightH3: 'What a student learns from it',
          right: [
            'Reading a rule word by word: "next following" and "preceding" each become a step. Using a library, here datetime, instead of counting days by hand. Testing against a case you can check on a calendar.',
            'A student can extend it in the break week: add Family Day (the third Monday in February), print a whole school-year holiday list, or turn it into a small web page.'
          ] }
      ]
    },
    {
      id: 'week', tint: 'deep', eyebrow: 'Break-week plans',
      h2: 'How our students spend a March Break week coding',
      lede: 'We do not run a separate March Break camp; our camp programmes run in the winter break and in the summer. Over March Break we teach short live classes instead: one-to-one students book classes on the days of the week that suit the family, and batch students keep their usual class. These plans are our suggestions for turning those classes into a finished project by Friday.',
      body: [
        { kind: 'table', caption: 'Suggested break-week plans by age (ours), for Monday 15 to Friday 19 March 2027 in Ontario or your own board\'s break', head: ['Age', 'Project for the week', 'Live classes we suggest', 'Between classes'], rows: [
          ['6 to 8', 'A Scratch story or game with three scenes', 'Two short one-to-one classes, early and late in the week', 'Draw the scenes on paper; record the story aloud'],
          ['9 to 12', 'A first Python game: a number guesser, then a quiz on a topic the child loves', 'Two or three one-to-one classes, or the usual batch class plus one private class', 'Twenty minutes a day of changing the game and testing it'],
          ['13 to 15', 'A small web page or Python tool that solves a real problem at home', 'Two or three one-to-one classes', 'Plan on paper first; build; ask a family member to test it'],
          ['16 to 18', 'Contest or course work: Euclid practice for Tuesday 6 April 2027, or a school computer science project', 'Two one-to-one classes focused on the hardest part', 'Timed practice, reviewed in the next class']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Before the break:</b> tell us your child\'s board and break dates, and which days a parent is home. We set class times in your province\'s clock after the 14 March clock change.',
          '<b>Monday:</b> the first class sets the project and a definition of done that fits in five days.',
          '<b>Tuesday to Thursday:</b> short daily practice at home, with one class in the middle of the week for the hardest step.',
          '<b>Friday:</b> the student presents what they built, explains how one part works, and makes one change live. That last step is the real test of the week.',
          '<b>After the break:</b> the project becomes the first unit of a regular course, so the momentum is not lost when school starts again.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the week should end with a change',
          left: [
            'Anyone can follow along for five days and end with something that runs. The question is whether the child understands it well enough to change it.',
            'That is our promise in a sentence: we teach students to think their way through a problem, not to copy an answer or an AI tool\'s output. A Friday change shows whether the week did that.'
          ],
          rightH3: 'For students with contests ahead',
          right: [
            'The break falls between CEMC\'s February contests and its April ones. CEMC lists the 2027 Euclid for Tuesday, April 6, 2027 and the Fryer, Galois and Hypatia contests for Wednesday, April 7, 2027, so the break is the last calm week before them.',
            'CEMC is clear that "all students must participate through their school." We prepare them with practice problems our teachers write, and our <a class="ag-inline-link" href="/cemc-waterloo-contests-preparation">CEMC contests page</a> explains more.'
          ] }
      ]
    },
    {
      id: 'formats', tint: 'tint', eyebrow: 'Camp formats',
      h2: 'Kinds of March Break coding camp in Canada',
      lede: 'Families comparing break options usually meet four formats. Provider lines are quoted from their own sites as read on 22 October 2026; the judgments in the last two columns are ours. This is not a ranking, and we are not connected with any provider named.',
      body: [
        { kind: 'table', caption: 'March Break coding options compared by format (provider quotes from their own sites; judgments ours)', head: ['Format', 'In a provider\'s own words', 'Suits', 'Watch for'], rows: [
          ['Week-long day camp, often on a campus', 'Actua\'s network: "Week-long day camps provide a variety of fun, hands-on STEM activities." "Mostly offered during school holidays"', 'Children who want a full day out, with friends', 'Travel each day; places can fill early; coding may be one activity among many'],
          ['Franchise centre camp', 'Code Ninjas: "Code Ninjas Camps empower kids to gain valuable tech skills"', 'Families near a centre who want a familiar brand', 'Fixed daily hours; what happens after the week'],
          ['Live online group camp', 'Coding with Kids: "Join a small group camp from home, via a LIVE video conference!"', 'Children who like company but not travel', 'Group size; whether the week links to anything afterwards'],
          ['Live online classes over the break (our format)', 'One to one at your convenience, or the student\'s usual batch', 'Families who want the week to start a longer path, at times they choose', 'It is not a full-day camp; the project needs home practice between classes']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://actua.ca/network" rel="noopener" target="_blank">Actua network</a>, <a class="ag-inline-link" href="https://www.codeninjas.com/camps" rel="noopener" target="_blank">Code Ninjas camps</a> and <a class="ag-inline-link" href="https://www.codingwithkids.com/region/canada/" rel="noopener" target="_blank">Coding with Kids Canada</a>, read 22 October 2026. We print no other provider\'s fees or dates; check each site for this year\'s camps.' },
        { kind: 'p', mt: true, html: '<b>Where our camps fit.</b> Our full camp programmes run when school is out for longer. The <a class="ag-inline-link" href="/winter-coding-camp">winter coding camp</a> is a three-week intensive, all online, with a <a class="ag-inline-link" href="/winter-coding-camp-kids">kids track for ages 6 to 11</a>, a <a class="ag-inline-link" href="/winter-coding-camp-teens">teens track for 12 to 17</a> and an <a class="ag-inline-link" href="/winter-coding-camp-adults">adults track for 18 and over</a>; its page names Canada among the countries students join from. In summer, our <a class="ag-inline-link" href="/online-coding-summer-camp">online summer camp</a> runs for ages 6 to 16 and the <a class="ag-inline-link" href="/summer-coding-camp">summer intensive tracks</a> cover kids, teens and adults. March Break is shorter, so we keep it to a few focused classes.' },
        { kind: 'two', mt: true,
          leftH3: 'A full-day camp or a few live classes?',
          left: [
            'If the goal is childcare plus fun for the week, a full-day camp is the right tool, and no online class pretends otherwise.',
            'If the goal is that your child can code better on 22 March than on 12 March, a few focused classes with a teacher who will still be there in April usually do more.'
          ],
          rightH3: 'Questions to ask any March Break camp',
          right: [
            'How many children per instructor? What will my child have built by Friday, and will they be able to explain it? What happens the week after?',
            'And for online options: what time is it in our province, given the clock change on 14 March 2027?'
          ] }
      ]
    },
    {
      id: 'times', tint: 'deep', eyebrow: 'Break-week clocks',
      h2: 'Class times across Canada for the week of 15 March 2027',
      lede: 'The break begins one day after Eastern clocks go forward, so class times need checking that week. These are the UTC offsets in force from Sunday 14 March 2027, from the tz database (release 2026e).',
      body: [
        { kind: 'table', caption: 'UTC offsets during the week of 15 March 2027 (tz database 2026e)', head: ['Province', 'Offset that week', 'Changed on 14 March 2027?'], rows: [
          ['British Columbia (most of the province)', 'UTC-7', 'No: permanent since 8 March 2026'],
          ['Alberta and Saskatchewan', 'UTC-6', 'No: the same all year'],
          ['Manitoba', 'UTC-5', 'No: the same all year from 1 November 2026'],
          ['Ontario and Quebec (ET)', 'UTC-4', 'Yes: forward one hour'],
          ['Nova Scotia, New Brunswick, Prince Edward Island (AT)', 'UTC-3', 'Yes: forward one hour'],
          ['Newfoundland (NT)', 'UTC-2:30', 'Yes: forward one hour']
        ] },
        { kind: 'p', mt: true, html: 'Our arithmetic from those offsets: in the break week, Toronto is one hour ahead of Winnipeg, two ahead of Calgary and three ahead of Vancouver. In February the same Toronto class was level with Winnipeg. We never advertise one fixed time; we agree each class in your own province\'s clock. More detail is on our <a class="ag-inline-link" href="/canada-time-zones-2026-online-class-times">Canadian class times page</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'What a week can do',
    h2: 'What a break week can and cannot do',
    lede: 'Our honest view, so expectations match the five days.',
    table: { caption: 'Realistic outcomes of a break week (ours)', head: ['Starting point', 'A good result by Friday'], rows: [
      ['Never coded', 'A small finished project and the confidence to want more'],
      ['Some blocks', 'A first program in typed Python, explained line by line'],
      ['Some Python', 'A real tool or game, planned before it was built'],
      ['Strong coder', 'One hard concept, such as recursion or a contest technique, properly understood']
    ] },
    left: { h3: 'For parents', ps: [
      'One week will not make a programmer. It can make a child want to become one, which matters more.',
      'Ask your child on Friday to show you one part and change it while you watch. That short demonstration tells you what the week was worth.'
    ] },
    right: { h3: 'For students', ps: [
      'Pick a project small enough to finish. A small finished game teaches more than a big half-built one.',
      'Keep a list of every error message you met this week and how you fixed it. It will save you hours later.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses a break week can start',
    lede: 'Each is live online with one teacher, in a batch or one to one, and continues after the break.',
    bands: [
      { num: 'I', h3: 'Younger coders', sub: 'Ages 6 to 12', courses: [
        { code: 'MBC / KID / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Stories and games in blocks, ages 6 to 12.' },
        { code: 'MBC / KID / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft Coding for Kids', blurb: 'From blocks to real code, ages 7 to 12.' },
        { code: 'MBC / KID / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Game Coding', blurb: 'Typed Luau scripts in a real game, ages 8 to 14.' }
      ] },
      { num: 'II', h3: 'Teen builders', sub: 'Ages 13 to 18', courses: [
        { code: 'MBC / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'A complete first language, from the beginning.' },
        { code: 'MBC / TEEN / 02', slug: 'frontend-development-masterclass-for-teens', title: 'Frontend Development for Teens', blurb: 'Web pages that look and work right.' },
        { code: 'MBC / TEEN / 03', slug: 'complete-game-development-masterclass-for-teens', title: 'Game Development for Teens', blurb: 'Unity and C#, with games actually finished.' }
      ] },
      { num: 'III', h3: 'Contest and school', sub: 'Grades 9 to 12', courses: [
        { code: 'MBC / SCH / 01', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior Preparation', blurb: 'Next season\'s CCC, started early in Python or C++.' },
        { code: 'MBC / SCH / 02', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo Math Contests', blurb: 'Euclid and the April contests, with our own problems.' },
        { code: 'MBC / SCH / 03', slug: 'ics3u-ics4u-computer-science-companion-course', title: 'ICS3U and ICS4U Companion', blurb: 'Support for the Ontario course; no credits granted.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How break classes run',
    h2: 'Live online coding classes over March Break',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Break days', l: 'One-to-one classes on the days of the week that suit you.' },
      { time: 'PA days', l: 'A single class on a day off, booked with a few days\' notice.' },
      { time: 'After the break', l: 'The same teacher carries the project into a regular course.' }
    ],
    cells: [
      { h3: 'No travel', p: 'Classes from home, in any province or territory.' },
      { h3: 'A finished project', p: 'Planned on Monday, shown on Friday.' },
      { h3: 'A Friday change', p: 'The student changes their work live, to prove they understand it.' },
      { h3: 'Clock change checked', p: 'Times confirmed after the 14 March switch.' },
      { h3: 'Batch or private', p: 'A batch of 15 to 20, or one to one.' },
      { h3: 'Teachers who stay', p: 'The same person before, during and after the break.' }
    ]
  },

  projectsH2: 'Projects our students have finished',
  projectsLede: 'A break week is a good time to finish something like these. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents\' Google reviews, as they wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'There is no separate camp fee. Break-week classes are part of our normal monthly fee, which this section shows in your own currency, paid one month at a time.',
    free: ['A free first class, during the break if you like', 'A project idea for the week', 'No card needed'],
    group: ['Join a batch of 15 to 20', 'Eight live classes a month', 'Your teacher stays on after the break'],
    one: ['One-to-one classes', 'Booked on the break days you choose', 'Planned around one project']
  },

  faq: {
    eyebrow: 'Questions from Canadian families',
    h2: 'March Break and PA day coding: questions and answers',
    items: [
      { q: 'When is March Break 2027 in Ontario?', a: 'Ontario Regulation 304 sets March Break as five consecutive days starting on the Monday after the Friday before 14 March. By our arithmetic that is Monday 15 March to Friday 19 March 2027. A board can have an approved different calendar, so check yours.' },
      { q: 'When is March Break in BC, Alberta or other provinces?', a: 'Outside Ontario, break dates come from each school district or board calendar. BC\'s School Calendar Regulation, for example, requires every calendar to state its vacation periods. We do not print those dates because they vary by district.' },
      { q: 'What is a PA day?', a: 'In Ontario, a professional activity day is a school day set aside for teachers\' professional work, with no classes for students. Each board sets three required PA days and may add up to four more, and publishes a summary at least 14 days before each one.' },
      { q: 'Do you run a March Break coding camp?', a: 'Not as a separate camp. Our camp programmes run in the winter break and in the summer. Over March Break we teach short live classes on the days your family chooses, one to one or in your child\'s usual batch, with a project to show on Friday.' },
      { q: 'Can my child do coding on a PA day?', a: 'Yes. A PA day suits one live one-to-one class, booked a few days ahead, with time afterwards to finish what was started. The free first class can also be booked on a PA day.' },
      { q: 'What age is March Break coding for?', a: 'We teach from age 6. For the break week we suggest Scratch projects for ages 6 to 8, a first Python game for 9 to 12, a real tool or web page for 13 to 15, and contest or course work for 16 to 18.' },
      { q: 'Is an online class better than an in-person March Break camp?', a: 'They do different jobs. A full-day camp gives a day out with friends. A few live online classes give focused teaching, at times you choose, with a teacher who carries on after the break.' },
      { q: 'What times are classes during March Break?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Eastern clocks go forward on 14 March 2027, so we confirm times that weekend.' },
      { q: 'Can a student prepare for a contest over March Break?', a: 'Yes. CEMC lists the 2027 Euclid for Tuesday 6 April and the Fryer, Galois and Hypatia contests for Wednesday 7 April, so the break is a useful week for practice. Students enter through their schools.' },
      { q: 'Is there a separate camp fee?', a: 'No. Break-week classes are part of our normal monthly fee, shown on this page in your own currency. You pay one month at a time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian families planning school breaks and coding.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Every course we teach for families in Canada.' },
      { href: '/coding-and-ai-classes-in-toronto', label: 'Coding and AI classes in Toronto', p: 'For Toronto families, on Eastern time.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'The Ontario curriculum and our courses for it.' },
      { href: '/canada-time-zones-2026-online-class-times', label: 'Class times across Canada', p: 'Every province\'s clock, including the 2026 changes.' },
      { href: '/canada-math-and-coding-contest-calendar', label: 'Contest calendar', p: 'CEMC and other contest dates for 2026 to 2027.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC Waterloo contests', p: 'Preparing for Euclid and the April contests.' },
      { href: '/winter-coding-camp', label: 'Winter coding camp', p: 'Our three-week online camp for the winter break, for kids, teens and adults.' },
      { href: '/online-coding-summer-camp', label: 'Online summer coding camp', p: 'Our summer camp for ages 6 to 16, live online.' },
      { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer', p: 'The habits a break-week project builds.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Book it before the break or during it. In the first class the teacher meets your child, suggests a project that fits five days, and sets class times in your province\'s clock.',
    readFirst: 'See a lesson first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> has recorded classes, and the <a class="ag-inline-link" href="/courses">course list</a> gives every syllabus.',
    note: 'Classes are live over video with teachers based in India, so there is nowhere to drive to during the break, whether you are in Ottawa or Red Deer. WhatsApp is the quickest way to book.',
    formNote: 'The first class is free; no card is needed.'
  },

  footer: {
    cols: [
      { h4: 'School breaks', links: [
        { href: '/canada-time-zones-2026-online-class-times', label: 'Class times across Canada' },
        { href: '/summer-coding-camp', label: 'Summer coding camp' },
        { href: '/winter-coding-camp', label: 'Winter coding camp' },
        { href: '/canada-math-and-coding-contest-calendar', label: 'Contest calendar' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-and-ai-classes-in-toronto', label: 'Toronto' },
        { href: '/coding-classes-in-ontario', label: 'Ontario' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Plan Monday, change it Friday'
  },

  personalityCss: `
.ag-root.ag-mbc .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-mbc .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-mbc .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-mbc .ag-table caption { text-align: left; text-transform: none; }
.ag-root.ag-mbc .ag-band-head h3 { letter-spacing: -0.002em; }
.ag-root.ag-mbc .ag-slots { gap: 1.3rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario R.R.O. 1990, Reg. 304 (School Year Calendar, Professional Activity Days) through the e-Laws document service, consolidated August 13, 2025, read raw 22 October 2026: March Break rule, Family Day, school year bounds, 194 school days, three plus up to four PA days, PA day definition and French term, 14-day public summary, calendars by 1 March, section 5 alternative calendars; Ontario Ministry memorandum on 2026-27 mandatory PA days (May 15, 2026); BC School Calendar Regulation (current to October 13, 2026); tz database 2026e offsets (facts-geo); CEMC Euclid and FGH dates; provider camp lines from Actua, Code Ninjas and Coding with Kids.',
    localProject: 'Our arithmetic from Reg. 304 giving Monday 15 to Friday 19 March 2027 and Family Day on Monday 15 February 2027; an original Python program that computes Ontario\'s March Break for any year and refuses the ambiguous Friday case (output for 2027, 2028 and 2029, run 22 October 2026); break-week plans by age; a PA day plan. Lesson family: turning a written rule into an algorithm.',
    requiredMentions: ['Five consecutive days commencing on the Monday next following the Friday preceding the 14th day of March.', 'Monday 15 March to Friday 19 March 2027', 'journée pédagogique', 'but does not include preparation by teachers for classes or instruction', 'up to four days may be designated by the board as professional activity days', 'the vacation periods and the dates of statutory holidays', '2028 Monday 13 March to Friday 17 March', 'Plan Monday, change it Friday', 'Turning the March Break rule into a Python program'],
    sources: [
      { claim: 'March Break rule, Family Day, school year bounds, PA days, 194 school days, section 5 alternative calendars.', url: 'https://www.ontario.ca/laws/regulation/900304' },
      { claim: 'Mandatory PA day topics for 2026-27, including Cyber Safety and Artificial Intelligence.', url: 'https://www.ontario.ca/document/education-ontario-policy-and-program-direction/mandatory-professional-activity-days' },
      { claim: 'BC school calendars must state vacation periods; proposed calendars made public a month ahead.', url: 'https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/314_2012' },
      { claim: 'Week-long day camps mostly offered during school holidays.', url: 'https://actua.ca/network' },
      { claim: 'Live online small-group camps for Canada.', url: 'https://www.codingwithkids.com/region/canada/' },
      { claim: 'CEMC Euclid on Tuesday, April 6, 2027; FGH on Wednesday, April 7, 2027.', url: 'https://cemc.uwaterloo.ca/contests' }
    ],
    rejectedClaims: [
      'A Modern Age Coders March Break camp: not claimed; none of our winter or summer camp pages mentions March Break, so the page offers short live classes and labelled plans and links to the winter and summer camps.',
      'Winter camp fees, currencies and session counts from our own camp pages: not printed (the pages show fees in rupees and US dollars and give both 8-class and 16-session counts).',
      'March Break dates for BC, Alberta or other provinces: not printed; they are set by district or board calendars we have not read.',
      'Good Friday and Easter Monday 2027 dates: not computed or printed.',
      'Specific PA day dates for any board: not printed; boards choose them.',
      'Any school board or school named: none.',
      'Provider camp fees or dates: not printed.',
      'Any affiliation with the Ontario government, a school board, CEMC or any provider: none.'
    ]
  }
};
