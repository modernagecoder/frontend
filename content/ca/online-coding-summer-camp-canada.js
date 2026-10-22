'use strict';
// Online coding summer camp, Canada (ag- market door; Canada cluster Plan 2, row 86).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Our summer camp is the main offer, described ONLY from our own camp pages, read in full 22 October 2026
// (src/pages/online-coding-summer-camp.html, summer-coding-camp.html and its -kids, -teens and -adults tracks): online
// camp "ages 6-16", "8 Live classes a month, 2 a week", tracks First Games 6-9, Game Builders 9-12, Python Start 10-14,
// AI Explorers 11-16, slots move around trips, recordings, same mentor all summer, early/mid/late start, "our regular
// teaching wearing sunscreen"; intensive "2-3 Weeks Intensive", Foundation/Deep Dive/Launch weeks, Young Innovators
// 6-12, Teen Developers 12-17, Pro Bootcamp 18+, "5 Deployable Projects", certificate, recorded sessions. No fee figure,
// currency, session count or session length is reproduced: the track pages give 8 classes in one place and 16 sessions in
// another, and 60 to 120 minute sessions by track. Sibling of row 85 with its own spine
// (summer as the bridge to next year's curriculum), its own program (a cipher) and its own FAQ.
// Sources (copies in keyword-research-2026-09/ca/src-pilots/online-coding-summer-camp-canada/):
//  - Ontario R.R.O. 1990, Reg. 304 (e-Laws document service, read raw 22 October 2026; reg304-api.json, reg304.txt):
//    "the school year shall commence on or after the 1st day of September and end on or before the 30th day of June.";
//    school holiday "When the school is open during July, Canada Day."
//  - Holidays Act, R.S.C. 1985, c. H-5 (laws-lois.justice.gc.ca, read raw 22 October 2026; holidays-act.html/.txt):
//    "July 1, not being a Sunday, is a legal holiday and shall be kept and observed as such throughout Canada under the
//    name of "Canada Day"."; "When July 1 is a Sunday, July 2 is a legal holiday".
//  - BC School Calendar Regulation, B.C. Reg. 314/2012 (bclaws.gov.bc.ca, current to October 13, 2026;
//    bc-school-calendar-reg.html/.txt): "878 hours of instruction for students in grades 1 to 7"; "952 hours of
//    instruction for students in grades 8 to 12"; calendars need not list days that are "for optional or remedial
//    learning activities scheduled during vacation periods".
//  - facts-schools-contests.md (verified): Ontario math C3.1 by grade (Grade 3 repeating events, Grade 4 nested events,
//    Grade 5 conditional statements, Grade 6 "efficient code", Grade 7 "subprogram", Grade 8 "analysis of data"); MTH1W
//    C2.1; ICD2O description; ICS3U description and no prerequisite; BC ADST 6 "for example, Kodu, Scratch"; CEMC
//    resources free, "Below you will find resources from the last 10 years.", CS Circles "[Python Programming
//    Tutorials]", Courseware "there is no certificate or other form of credential awarded"; CEMC overview "contest dates
//    and ordering deadlines for the contest year 2026/27".
//  - facts-geo.md section 3: summer 2027 offsets (14 March to 7 November 2027).
//  - Provider sites (facts-competitors.md, read raw 22 October 2026): Actua "Week-long day camps provide a variety of fun,
//    hands-on STEM activities.", "Mostly offered during school holidays", "We proudly represent over 40 universities and
//    colleges across Canada"; Coding with Kids Canada "All our classes, camps, and enrichment classes are taught LIVE
//    Online", "Join a small group camp from home, via a LIVE video conference!"; Code Ninjas "Code Ninjas Camps empower
//    kids to gain valuable tech skills". No provider fees or camp dates printed.
// Our own material, labelled on the page: Canada Day 2027 on Thursday 1 July and 30 June 2027 a Wednesday (calendar
// arithmetic); the eight-week plan for 5 July to 27 August 2027; the arithmetic of a batch summer (eight live classes a
// month, so about 16 in July and August); the summer-before-each-grade table; the cipher program (run under CPython on
// 22 October 2026: PHHW DW WKH ODNH, MEET AT THE LAKE, CRR). Lesson family: wraparound (modular arithmetic).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CIPHER = `# Our summer project: a secret-message wheel (a Caesar cipher), by Modern Age Coders
ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

def shift_message(message, key):
    result = ""
    for ch in message.upper():
        if ch in ALPHABET:
            position = (ALPHABET.index(ch) + key) % 26   # Z wraps round to A
            result += ALPHABET[position]
        else:
            result += ch                                 # spaces stay as they are
    return result

secret = shift_message("MEET AT THE LAKE", 3)
print(secret)
print(shift_message(secret, -3))
print(shift_message("ZOO", 29))`;

const CIPHER_OUT = `PHHW DW WKH ODNH
MEET AT THE LAKE
CRR`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'SUMMER', blurb: 'Our live online summer coding camp for Canadian students, the summer 2027 window, camp formats compared, what to practise before each grade, and an eight-week plan.' },
  slug: 'online-coding-summer-camp-canada',
  code: 'scc',
  accent: '#2B6B20',
  accentRationale: 'Online coding summer camp, Canada: a muted forest green #2B6B20, allocated for this row at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 6.14 on the paper #FBF8F2, 5.77 on #F5F1E8 and 5.28 on #EDE7DA',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Summer coding',
  title: 'Online Coding Summer Camp in Canada: Summer 2027 Guide',
  description: 'Our live online summer coding camp for Canadian students aged 6 to 16, plus intensive tracks: the 2027 summer window, formats compared and an eight-week plan.',
  ogDescription: 'A Canadian summer is long enough to change how a child codes. Camp formats compared, the next grade\'s coding expectations, and an eight-week live online plan for July and August 2027.',
  twitterDescription: 'Summer 2027 coding in Canada: camp formats, next-grade skills and an eight-week live online plan.',
  pageName: 'Online Coding Summer Camp in Canada',
  webPageDescription: 'A guide for Canadian families to coding over the summer of 2027: school-year rules, camp formats compared, the coding each grade asks for next, an original Python project and an eight-week plan using live online classes.',
  courseDescription: 'Live online coding classes over the summer for students across Canada, in a batch or one to one at the family\'s convenience.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Summer coding',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#window', label: 'The summer window' },
    { href: '#compare', label: 'Camp formats' },
    { href: '#nextgrade', label: 'Before each grade' },
    { href: '#project', label: 'A summer project' },
    { href: '#plan', label: 'Eight-week plan' }
  ],
  eyebrow: 'Canada &middot; Summer 2027 &middot; Live online coding',
  h1: 'Online coding summer camp in Canada, live from home',
  lede: 'For many Canadian families a summer coding camp means one week in a hot room in July, a lanyard and a game that nobody opens again in September. It can mean more. Two months is long enough to move a child from blocks to typed code, to get ahead of the coding their next grade will ask for, or to finish a project a teenager is proud to show. This guide sets out the summer window under Ontario\'s school-year rules, compares the camp formats on offer across Canada, lists what each grade\'s curriculum asks next, and sets out our own live online summer camp, with an eight-week plan, one to one at your convenience or with a weekly batch.',
  secondaryCta: { href: '#plan', label: 'See the eight-week plan' },
  wa: 'Hello Modern Age Coders, we are looking for online coding over summer 2027 for our child in Canada. What do you suggest?',
  heroNote: 'Live online coding since 2020 &middot; 10,000+ students &middot; a teacher who stays with your child after August',
  spec: [
    ['Summer 2027 in Ontario', 'School ends by Wednesday 30 June; restarts on or after 1 September'],
    ['Canada Day 2027', 'Thursday 1 July (our arithmetic from the Holidays Act)'],
    ['Our summer camp', 'Live online, ages 6 to 16'],
    ['Camp rhythm', 'Eight live classes a month, two a week'],
    ['Ages', '6 to 18, adults welcome'],
    ['Intensive tracks', 'Kids 6 to 12, teens 12 to 17, adults 18+'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'An online coding summer camp in Canada gives a student live classes from home over July and August, with no travel and a teacher who can carry on in September. Ontario\'s school year ends on or before 30 June, so summer 2027 runs from about 1 July. Modern Age Coders runs a live online summer camp for ages 6 to 16, eight classes a month in a batch or one to one, plus intensive tracks for kids, teens and adults.',

  picks: {
    eyebrow: 'Good summer starts',
    h2: 'Three courses that make the most of a summer',
    lede: 'The three courses our online summer camp page puts first. Each one is a camp track that carries straight on in September with the same teacher.',
    items: [
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', code: 'SCC / 01', title: 'Vibe Coding for Kids', note: 'Ages 8 to 12, complete beginners. Blocks, game builds and AI tools in one summer arc; the camp page calls it the summer crowd-pleaser.' },
      { course: 'scratch-programming-complete-course', code: 'SCC / 02', title: 'Scratch Coding for Kids', note: 'The First Games track, ages 6 to 9 at camp: a first sprite to a finished game.' },
      { course: 'python-ai-kids-masterclass', code: 'SCC / 03', title: 'Python and AI for Kids', note: 'The Python Start and AI Explorers tracks: real typed code and an honest look at AI, the natural summer move from blocks.' }
    ]
  },

  sections: [
    {
      id: 'ourcamp', tint: 'deep', eyebrow: 'Our summer camp',
      h2: 'Our live online summer coding camp, two ways in',
      lede: 'Modern Age Coders runs its summer camp entirely online, and the camp pages on this site describe two shapes. Everything in the table comes from those pages, read in full on 22 October 2026. Fees for each are on the camp pages and on the fees panel of this page, shown in your own currency; we print no figures here.',
      body: [
        { kind: 'table', caption: 'Our summer camp, as our own camp pages describe it (read 22 October 2026)', head: ['', 'Online summer camp', 'Summer intensive tracks'], rows: [
          ['Who it is for', 'Ages 6 to 16, live online', 'Three tracks: Young Innovators (ages 6 to 12), Teen Developers (ages 12 to 17) and a Pro Bootcamp for adults 18 and over'],
          ['Length and rhythm', 'Eight live classes a month, two a week, for as much of the summer as suits the family; it can start early, mid or late summer', 'A two to three week intensive, in three stages: a foundation week, a deep dive week and a launch week'],
          ['Tracks and content', 'First Games in Scratch (6 to 9), Game Builders (9 to 12), Python Start (10 to 14) and AI Explorers (11 to 16)', 'Kids: blocks, Python basics, games and an introduction to AI tools. Teens: HTML, CSS, JavaScript, Python and deploying a portfolio. Adults: Python, data analysis and databases'],
          ['What gets built', 'One shipped project per track, shown to the family at the end and added to our Student Labs', 'Five projects for a portfolio, and a completion certificate'],
          ['Missed classes and trips', 'Slots move around family trips, recordings cover missed classes, and the mentor stays the same all summer', 'Sessions are recorded, with a catch-up with the instructor if needed'],
          ['After the summer', 'Students who carry on keep the same mentor in September', 'Not covered on the track pages; ask us in the first class'],
          ['Format', 'In a batch or one to one', 'In a batch or one to one']
        ] },
        { kind: 'source', html: 'Sources: our own pages, <a class="ag-inline-link" href="/online-coding-summer-camp">online coding summer camp</a>, <a class="ag-inline-link" href="/summer-coding-camp">summer coding camp</a>, and its <a class="ag-inline-link" href="/summer-coding-camp-kids">kids</a>, <a class="ag-inline-link" href="/summer-coding-camp-teens">teens</a> and <a class="ag-inline-link" href="/summer-coding-camp-adults">adults</a> tracks, read in full on 22 October 2026. The online camp page calls itself our regular teaching "wearing sunscreen": the same live mentors and one-hour classes, arranged around summer.' },
        { kind: 'two', mt: true,
          leftH3: 'Which shape suits your family',
          left: [
            'The online summer camp suits a child of 6 to 16 who has the whole summer and benefits from spacing: two classes a week, with the same mentor, around trips and day camps.',
            'The intensive tracks suit a student who wants a concentrated burst of two to three weeks, including teenagers building a portfolio and adults who want Python and data skills in one stretch.'
          ],
          rightH3: 'What the camp is not',
          right: [
            'It is not childcare and not a full-day program. Our own camp page says so plainly: an online camp is taught hours plus practice, not a place to drop children off for the day.',
            'If your family needs full days covered, pair it with an in-person day camp for a week or two; the formats compared further down show what each is good at.'
          ] }
      ]
    },
    {
      id: 'window', tint: 'tint', eyebrow: 'The summer window',
      h2: 'When summer 2027 starts and ends for Canadian students',
      lede: 'Summer is defined by when school stops and restarts. Ontario writes those limits into Regulation 304 under the Education Act, and other provinces leave them to local calendars. The holiday dates below come from the federal Holidays Act.',
      body: [
        { kind: 'table', caption: 'The summer 2027 window, from Ontario Regulation 304 and the federal Holidays Act (our calendar arithmetic in the last column)', head: ['Point', 'What the law says', 'What it means for 2027'], rows: [
          ['End of the school year (Ontario)', 'The year must "end on or before the 30th day of June"', 'The last school day is on or before Wednesday 30 June 2027'],
          ['Start of the next year (Ontario)', 'The same sentence: it begins on or after 1 September', 'The 2027 to 2028 year starts on or after Wednesday 1 September 2027; check your board for the first day'],
          ['Canada Day', '"July 1, not being a Sunday, is a legal holiday and shall be kept and observed as such throughout Canada"; "When July 1 is a Sunday, July 2 is a legal holiday"', 'Thursday 1 July 2027'],
          ['Summer programs at school (Ontario)', 'Canada Day is a school holiday "When the school is open during July"', 'Even school-run July programs pause on 1 July 2027'],
          ['Summer learning (British Columbia)', 'A calendar need not list days that are "for optional or remedial learning activities scheduled during vacation periods"', 'Summer learning exists in BC law; dates are set locally']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.ontario.ca/laws/regulation/900304" rel="noopener" target="_blank">Ontario Regulation 304</a>, <a class="ag-inline-link" href="https://laws-lois.justice.gc.ca/eng/acts/H-5/page-1.html" rel="noopener" target="_blank">Holidays Act</a> and the <a class="ag-inline-link" href="https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/314_2012" rel="noopener" target="_blank">BC School Calendar Regulation</a>, read 22 October 2026. Weekdays for 2027 are our arithmetic. Modern Age Coders is not connected with any government or school board.' },
        { kind: 'two', mt: true,
          leftH3: 'How long the summer really is',
          left: [
            'In Ontario the gap between the last school day and the first is about nine weeks. Allow a week at each end for rest and getting ready, and roughly seven or eight weeks are open for a plan.',
            'That is the length our plan further down assumes: eight weeks from Monday 5 July to Friday 27 August 2027. Families on other calendars can slide it earlier or later.'
          ],
          rightH3: 'How small a summer is next to a school year',
          right: [
            'British Columbia sets the minimum a board must offer at "952 hours of instruction for students in grades 8 to 12" and "878 hours of instruction for students in grades 1 to 7".',
            'Our arithmetic: a batch summer of about 16 live one-hour classes is under 2 percent of a Grade 8 to 12 year. A summer cannot do everything, so it should do one thing well: one new language, one next-grade skill or one finished project.'
          ] }
      ]
    },
    {
      id: 'compare', tint: 'deep', eyebrow: 'Camp formats',
      h2: 'Summer coding camp formats in Canada, compared',
      lede: 'Four kinds of summer option cover most of what Canadian families are offered. We quote each provider from its own website, opened on 22 October 2026, and the strengths and weaknesses are our view. Nobody here is ranked, and we have no tie to any of them.',
      body: [
        { kind: 'table', caption: 'Four kinds of summer coding in Canada, with each provider quoted and our view of the trade-offs', head: ['Kind of camp', 'What the provider says', 'Strong at', 'Weak at'], rows: [
          ['Campus day camp', 'Actua: "We proudly represent over 40 universities and colleges across Canada"; its camps "often have weekly themes"', 'A day out, a campus, a mix of STEM activities', 'One week rarely leaves a lasting coding habit; travel every day'],
          ['Franchise centre camp', 'Code Ninjas: camp skills "all wrapped up in themes they love"', 'A familiar routine near home, if there is a centre', 'Only where a centre exists; hours fixed by the centre'],
          ['Live online group camp', 'Coding with Kids: "All our classes, camps, and enrichment classes are taught LIVE Online"', 'No travel; company of other children', 'Usually a set week; the teacher may change in September'],
          ['Our live online summer camp', 'Our camp page: live online for ages 6 to 16, eight live classes a month, two a week', 'Steady progress all summer, then the same mentor in September', 'Not a full-day program; needs short practice between classes']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://actua.ca/network" rel="noopener" target="_blank">Actua network</a>, <a class="ag-inline-link" href="https://www.codeninjas.com/camps" rel="noopener" target="_blank">Code Ninjas camps</a>, <a class="ag-inline-link" href="https://www.codingwithkids.com/region/canada/" rel="noopener" target="_blank">Coding with Kids Canada</a>, read 22 October 2026. Camp dates and fees change every year and we do not repeat them; check each provider for summer 2027.' },
        { kind: 'two', mt: true,
          leftH3: 'For Toronto families comparing summer camps',
          left: [
            'A city the size of Toronto has campus camps, franchise centres and community programs within reach, and many families combine one in-person week with something steadier for the rest of the summer.',
            'Live online classes fit around those weeks rather than replacing them. A child can spend the second week of July at a day camp and still keep a weekly class with the same teacher.'
          ],
          rightH3: 'For families far from a camp',
          right: [
            'Outside the big cities the choice is narrower. A family in Whitehorse, Iqaluit or a small Prairie town may have few or no coding camps within easy reach.',
            'Live online classes are the same in every province and territory. Only the clock changes, and we set it for you.'
          ] }
      ]
    },
    {
      id: 'nextgrade', tint: 'tint', eyebrow: 'Before each grade',
      h2: 'What to practise the summer before each grade',
      lede: 'One of the best uses of a summer is to meet next year\'s ideas early. In Ontario, coding is part of the math curriculum in every grade from 1 to 8, and each grade adds something. The middle column is quoted from the Ontario curriculum, read on 22 October 2026; the right column is our summer suggestion.',
      body: [
        { kind: 'table', caption: 'The coding the next Ontario grade asks for, and a summer project to meet it early (curriculum quotes; suggestions ours)', head: ['Summer before', 'What that grade\'s math curriculum adds', 'Our summer project'], rows: [
          ['Grade 3', 'Code "that involves sequential, concurrent, and repeating events"', 'A Scratch dance where two sprites move at once and repeat'],
          ['Grade 4', 'Code "that involves sequential, concurrent, repeating, and nested events"', 'A pattern drawing with a loop inside a loop'],
          ['Grade 5', 'Code "that involves conditional statements and other control structures"', 'A quiz game that reacts to right and wrong answers'],
          ['Grade 6', '"by writing and executing efficient code"', 'The same game rewritten in fewer blocks or lines, and timed'],
          ['Grade 7', 'Code involving "events influenced by a defined count and/or subprogram"', 'A first Python program split into functions'],
          ['Grade 8', 'Code that "involves the analysis of data in order to inform and communicate decisions"', 'A program that reads a summer weather log and reports the warmest week'],
          ['Grade 9 (MTH1W)', '"use coding to demonstrate an understanding of algebraic concepts including variables, parameters, equations, and inequalities"', 'Python programs that test guesses for an equation'],
          ['Grade 10 (ICD2O)', '"apply coding concepts and skills to build hands-on projects and investigate artificial intelligence, cybersecurity"', 'A small project plus the cipher on this page'],
          ['Grade 11 (ICS3U)', '"Students will design software independently and as part of a team"', 'A complete Python or Java program with a plan written first']
        ] },
        { kind: 'source', html: 'Source: the <a class="ag-inline-link" href="https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics" rel="noopener" target="_blank">Ontario curriculum</a>, read through its public content service on 22 October 2026. ICS3U has no prerequisite in Ontario\'s course list. In British Columbia, the Grades 6 and 7 computational thinking module names visual programming, "for example, Kodu, Scratch".' },
        { kind: 'two', mt: true,
          leftH3: 'Why getting ahead works',
          left: [
            'A child who meets nested loops in August hears the word in October as a reminder rather than a surprise. The school lesson becomes practice, which is far less stressful than a first meeting.',
            'This is not about racing through the curriculum. One idea from next year, understood well, is enough.'
          ],
          rightH3: 'For students heading into ICS3U or ICD2O',
          right: [
            'Ontario\'s Grade 11 ICS3U has no prerequisite, so some students arrive having never typed code. A summer of Python closes that gap before the course starts.',
            'Our <a class="ag-inline-link" href="/courses/ics3u-ics4u-computer-science-companion-course">ICS3U and ICS4U companion course</a> supports the school course in Python or Java. We teach alongside it and do not grant Ontario credits.'
          ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'A summer project',
      h2: 'A summer project to start with: the secret-message wheel',
      lede: 'Our project, for students of about 10 and up who know a little Python. It turns a message into code by shifting every letter along the alphabet, the oldest trick in cryptography, and it teaches one idea that returns again and again in math and computing: wrapping round.',
      body: [
        { kind: 'code', label: 'Our program &middot; the secret-message wheel', lang: 'python', code: CIPHER },
        { kind: 'code', label: 'What it prints', lang: 'text', code: CIPHER_OUT, note: 'Run under Python on 22 October 2026. A key of 3 turns MEET AT THE LAKE into PHHW DW WKH ODNH; a key of -3 turns it back. A key of 29 does exactly what a key of 3 does, because 29 % 26 is 3, so ZOO becomes CRR.' },
        { kind: 'p', mt: true, html: '<b>The idea inside it.</b> The line <b>(ALPHABET.index(ch) + key) % 26</b> is what makes Z wrap round to A. The % sign gives the remainder after dividing by 26, so position 25 (Z) plus 3 is 28, and 28 % 26 is 2, which is C. Clock arithmetic works the same way: three hours after 11 o\'clock is 2 o\'clock, because 14 % 12 is 2.' },
        { kind: 'two', mt: true,
          leftH3: 'Week by week with this project',
          left: [
            'Week 1: run it and explain every line. Week 2: let the user type the message and the key. Week 3: crack a message without knowing the key, by trying all 26 and spotting the one that reads as English.',
            'Week 4: invent a stronger cipher, such as a different shift for each letter, and explain why it is harder to crack.'
          ],
          rightH3: 'What it connects to',
          right: [
            'The remainder idea comes back in Grade 9 algebra, in contest problems about days of the week, and in every program that cycles through a list.',
            'Ontario\'s ICD2O names cybersecurity among the technologies students investigate, so a Grade 10 student meets this kind of idea again in September.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Eight weeks',
      h2: 'An eight-week live online summer plan for July and August 2027',
      lede: 'Our summer camp is live online and runs on our regular courses, without a fixed daily timetable: a batch meets for eight live classes a month, about two a week, and one-to-one students book classes at times that suit the family. This plan is ours and follows the camp\'s own arc of foundations, a build and a final family demo. It assumes two live classes a week and twenty minutes of practice on most other days, from Monday 5 July to Friday 27 August 2027.',
      body: [
        { kind: 'ol', items: [
          '<b>Week 1 (5 to 9 July):</b> a first class to agree one summer goal: a new language, a next-grade skill, or one finished project. Canada Day falls the Thursday before, so the week starts clean.',
          '<b>Week 2 (12 to 16 July):</b> the basics the goal needs, taught live and practised in short daily sessions at home.',
          '<b>Week 3 (19 to 23 July):</b> the first small version of the project working, however rough.',
          '<b>Week 4 (26 to 30 July):</b> a pause week if the family travels; otherwise, testing and fixing, with a list of every error met so far.',
          '<b>Week 5 (2 to 6 August):</b> the hardest part of the project, with the teacher guiding by questions rather than answers.',
          '<b>Week 6 (9 to 13 August):</b> a rule change: the student adapts the project to a new requirement, which shows whether they understand it.',
          '<b>Week 7 (16 to 20 August):</b> polish and a short written or spoken explanation of how the project works.',
          '<b>Week 8 (23 to 27 August):</b> the student presents the project to the family, and the teacher writes a short note on what to carry into September.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ages 6 to 9', p: 'Scratch projects, shorter classes, a parent nearby. The goal is a finished game and wanting more.' },
          { h3: 'Ages 10 to 13', p: 'The move to Python, or a next-grade skill from the table above. The cipher project fits here.' },
          { h3: 'Ages 14 to 18', p: 'A real project, ICS3U preparation, or a first look at contest problems before the school year.' }
        ] },
        { kind: 'p', mt: true, html: 'Our promise holds through the summer as in term time: we teach students how to reason through a problem themselves, never to copy an answer or paste what an AI tool produced. That is why week 6 is a rule change. A project the student cannot change is a project someone else understood.' }
      ]
    },
    {
      id: 'clock', tint: 'deep', eyebrow: 'Summer clocks',
      h2: 'Summer 2027 class times across Canadian provinces',
      lede: 'From Sunday 14 March to Sunday 7 November 2027 the provinces that change their clocks are on summer time. Here are the July and August 2027 offsets, taken from release 2026e of the IANA time zone database.',
      body: [
        { kind: 'table', caption: 'Summer 2027 UTC offsets by province (IANA tz database, release 2026e)', head: ['Province', 'Summer 2027 offset', 'Compared with Toronto in summer (our arithmetic)'], rows: [
          ['Newfoundland (NT)', 'UTC-2:30', 'One and a half hours ahead of Toronto'],
          ['Atlantic provinces apart from Newfoundland (AT)', 'UTC-3', 'One hour ahead of Toronto'],
          ['Ontario and Quebec (ET)', 'UTC-4', 'Level with Toronto'],
          ['Manitoba', 'UTC-5', 'One hour behind'],
          ['Alberta and Saskatchewan', 'UTC-6', 'Two hours behind'],
          ['Most of British Columbia', 'UTC-7', 'Three hours behind']
        ] },
        { kind: 'p', mt: true, html: 'Summer helps with time zones: weekday mornings and early afternoons are free for school-age students, so a class can sit at a comfortable hour in every province at once. We still never advertise one fixed time. Each class is agreed in your own province\'s clock, and our <a class="ag-inline-link" href="/canada-time-zones-2026-online-class-times">Canadian class times page</a> has the full detail.' }
      ]
    },
    {
      id: 'free', tint: 'tint', eyebrow: 'Free summer resources',
      h2: 'Free Canadian resources for a summer of coding',
      lede: 'A summer plan does not need to be paid for in full. The Centre for Education in Mathematics and Computing (CEMC) at the University of Waterloo publishes free materials that suit summer practice, and we point students to them.',
      body: [
        { kind: 'table', caption: 'Free CEMC materials for summer practice (CEMC\'s own pages, read 22 October 2026)', head: ['Resource', 'What CEMC says', 'How we suggest using it in summer'], rows: [
          ['Computer Science Circles', 'Tagged "[Python Programming Tutorials]"', 'Short daily Python practice between live classes'],
          ['Past contests', '"Below you will find resources from the last 10 years."', 'One easy past problem a week for a confident 12 to 15 year old'],
          ['Courseware', 'Lessons covering "Grades 4 to12 mathematics and computer science"; "there is no certificate or other form of credential awarded"', 'Background math for students heading into Grade 9 or 10'],
          ['Contest calendar', 'CEMC\'s table covers "contest dates and ordering deadlines for the contest year 2026/27"', 'Plan the next school year\'s contests once the new table appears']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cscircles.cemc.uwaterloo.ca/" rel="noopener" target="_blank">Computer Science Circles</a>, <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests" rel="noopener" target="_blank">CEMC past contests</a>, <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/courseware" rel="noopener" target="_blank">CEMC Courseware</a> and the <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests" rel="noopener" target="_blank">CEMC contests page</a>, read 22 October 2026. ("Grades 4 to12" is CEMC\'s own spacing.) We are not connected with CEMC and never reproduce its problems.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a summer can take a student',
    h2: 'Four summer goals, and what each looks like by the end of August',
    lede: 'Pick one. Our experience is that one goal finished beats three half-done.',
    table: { caption: 'Summer goals and how to know they were met (ours)', head: ['Goal', 'What you see by the end of August'], rows: [
      ['First steps', 'A child who had never coded shows a finished Scratch or Python project and explains it'],
      ['Blocks to text', 'A Scratch coder writes and fixes short Python programs alone'],
      ['Next grade, early', 'The student can explain next year\'s coding idea, such as nested loops or functions'],
      ['A real project', 'A teen has one complete program or site they planned, built, tested and can change']
    ] },
    left: { h3: 'For parents', ps: [
      'Agree the one goal in the first class and write it down. In August, ask your child to show you the result and change one thing while you watch.',
      'Travel weeks are fine. A missed week with a plan to pick up again costs much less than a summer with no plan.'
    ] },
    right: { h3: 'For students', ps: [
      'Twenty minutes most days beats three hours once a week. Little and often is how programmers get good.',
      'Save every version of your project. In September you will be surprised how far you came.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses that can fill a Canadian summer',
    lede: 'All live online with one teacher who continues after the summer, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Ages 6 to 12', sub: 'First projects', courses: [
        { code: 'SCC / A / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft Coding for Kids', blurb: 'From blocks to real code in a world they know, ages 7 to 12.' },
        { code: 'SCC / A / 02', slug: 'game-development-masterclass-for-kids', title: 'Game Development for Kids', blurb: 'Scratch, Roblox and Minecraft, ages 8 to 12.' },
        { code: 'SCC / A / 03', slug: 'kids-ai-web-development-course', title: 'Web Development for Kids', blurb: 'Real websites, ages 9 to 12.' }
      ] },
      { num: 'II', h3: 'Ages 13 to 18', sub: 'Real code', courses: [
        { code: 'SCC / B / 01', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for Teens', blurb: 'Interactive web pages and browser games.' },
        { code: 'SCC / B / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'The language of many Grade 11 and 12 courses.' },
        { code: 'SCC / B / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Python to real models, for confident coders.' }
      ] },
      { num: 'III', h3: 'Ahead of the school year', sub: 'Grades 9 to 12', courses: [
        { code: 'SCC / C / 01', slug: 'ics3u-ics4u-computer-science-companion-course', title: 'ICS3U and ICS4U Companion', blurb: 'Ready for Grade 11 or 12 computer science; we grant no credits.' },
        { code: 'SCC / C / 02', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior Preparation', blurb: 'A long start on next season\'s contest.' },
        { code: 'SCC / C / 03', slug: 'maths-through-coding', title: 'Math Through Coding', blurb: 'Grade 9 algebra met through Python, ages 10 to 15.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How summer classes run',
    h2: 'Live online coding classes through July and August',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Summer weekdays', l: 'Morning or afternoon slots, since school is out.' },
      { time: 'Weekends', l: 'For families who keep weekdays for camps and trips.' },
      { time: '1-on-1', l: 'Booked around holidays, with weeks paused for travel.' }
    ],
    cells: [
      { h3: 'One goal', p: 'Agreed in the first class, checked in August.' },
      { h3: 'From home', p: 'No travel in any province or territory.' },
      { h3: 'Pause weeks', p: 'Travel is planned in, not penalised.' },
      { h3: 'Same teacher in September', p: 'The summer becomes the first unit of the year.' },
      { h3: 'Next-grade aware', p: 'Projects chosen to meet next year\'s ideas early.' },
      { h3: 'Batch or one to one', p: 'A batch of 15 to 20, or private lessons.' }
    ]
  },

  projectsH2: 'Projects our students finished',
  projectsLede: 'A summer is long enough to finish something like these. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Parents wrote these on Google; they appear here unedited.',

  fees: {
    h2: 'Fees',
    lede: 'There is no separate summer camp fee. Summer classes are part of the normal monthly fee, shown here in your own currency, and you can pause for a travel month.',
    free: ['A free first class', 'One summer goal agreed', 'No card asked for'],
    group: ['15 to 20 in a summer batch', 'Eight live classes in July, eight in August', 'Carried on by the same teacher in September'],
    one: ['A teacher for one student', 'Booked around your summer', 'Paused for travel weeks']
  },

  faq: {
    eyebrow: 'Questions from Canadian families',
    h2: 'Summer coding in Canada: questions and answers',
    items: [
      { q: 'Do you run an online coding summer camp in Canada?', a: 'Yes. Our summer camp is live online for ages 6 to 16, with eight live classes a month, two a week, in a batch or one to one, and a finished project shown to the family at the end. Canadian families join from any province.' },
      { q: 'What tracks does your summer camp have?', a: 'The online camp has four tracks: First Games in Scratch (6 to 9), Game Builders (9 to 12), Python Start (10 to 14) and AI Explorers (11 to 16). There are also two to three week intensive tracks for kids 6 to 12, teens 12 to 17 and adults 18 and over.' },
      { q: 'When does summer break start in Ontario in 2027?', a: 'Ontario Regulation 304 says the school year ends on or before 30 June, and the next starts on or after 1 September. In 2027, 30 June is a Wednesday. Your board\'s calendar gives the exact last day.' },
      { q: 'Is there a class on Canada Day?', a: 'Canada Day 2027 is Thursday 1 July under the Holidays Act. We plan around it and around any other holiday your family keeps; a missed class is moved, not lost.' },
      { q: 'Is an online summer camp as good as an in-person one?', a: 'They do different jobs. An in-person camp gives a week out with friends. Live online classes give steady progress for the whole summer, from home, with a teacher who continues in September. Many families do both.' },
      { q: 'What should my child practise over the summer?', a: 'One idea from next year. In Ontario, Grade 4 math adds nested events in code, Grade 5 adds conditional statements and Grade 7 adds subprograms. Meeting that idea in August makes the autumn easier.' },
      { q: 'What age is summer coding for?', a: 'We teach from age 6. Scratch suits ages 6 to 9, the move to Python suits 10 to 13, and teens can build a real project or prepare for a Grade 10 or 11 computer science course.' },
      { q: 'Can we pause for a family trip?', a: 'Yes. Our eight-week plan includes a possible pause week, and one-to-one classes are booked around your summer. Fees are monthly, so a travel month can be skipped.' },
      { q: 'What times are summer classes across Canada?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. In summer 2027 Vancouver is three hours behind Toronto, and we set each time in your clock.' },
      { q: 'Are there free summer coding resources in Canada?', a: 'Yes. CEMC at the University of Waterloo offers Computer Science Circles, free Python tutorials, plus past contests from the last ten years and math courseware, with no registration needed.' },
      { q: 'Is there a separate summer camp fee?', a: 'No. July and August are billed like any other month of classes, and the fees panel on this page lists the monthly amount for where you live.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian families planning a summer of coding.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Every course we teach for Canadian families.' },
      { href: '/coding-and-ai-classes-in-toronto', label: 'Coding and AI classes in Toronto', p: 'Year-round classes for Toronto families.' },
      { href: '/coding-classes-in-british-columbia', label: 'Coding classes in British Columbia', p: 'Classes on BC\'s permanent clock.' },
      { href: '/canada-coding-curriculum-by-province', label: 'Coding curriculum by province', p: 'What each province asks, grade by grade.' },
      { href: '/canada-time-zones-2026-online-class-times', label: 'Class times across Canada', p: 'Summer and winter offsets for every province.' },
      { href: '/ics3u-computer-science-help', label: 'ICS3U help', p: 'For students starting Grade 11 computer science.' },
      { href: '/online-coding-summer-camp', label: 'Online coding summer camp', p: 'Our summer camp for ages 6 to 16, with all four tracks.' },
      { href: '/summer-coding-camp', label: 'Summer coding camp tracks', p: 'The intensive tracks for kids, teens and adults.' },
      { href: '/live-vs-recorded-coding-classes', label: 'Live vs recorded classes', p: 'Why a teacher matters over a long summer.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Book it in June or in the first week of July. The teacher meets your child, agrees one goal for the summer, and sets class times in your province\'s clock around camps and trips.',
    readFirst: 'Want to see a lesson first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> has recordings, and the <a class="ag-inline-link" href="/courses">course list</a> shows each syllabus.',
    note: 'Our teachers teach from India over live video, so a summer class works the same from a cottage in Muskoka as from an apartment in Montreal, given a steady internet connection. WhatsApp reaches us fastest.',
    formNote: 'Free to book; no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Summer', links: [
        { href: '/online-coding-summer-camp', label: 'Online summer camp' },
        { href: '/summer-coding-camp', label: 'Summer camp tracks' },
        { href: '/canada-time-zones-2026-online-class-times', label: 'Class times across Canada' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-and-ai-classes-in-toronto', label: 'Toronto' },
        { href: '/canada-coding-curriculum-by-province', label: 'Curriculum by province' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'One goal, eight weeks'
  },

  personalityCss: `
.ag-root.ag-scc .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-scc .ag-capsule { border-left-width: 4px; border-radius: 8px; }
.ag-root.ag-scc .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-scc .ag-table caption { text-align: left; letter-spacing: 0.01em; }
.ag-root.ag-scc .ag-band-head h3 { letter-spacing: -0.005em; }
.ag-root.ag-scc .ag-slots { gap: 1.25rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario Reg. 304 (school year bounds; Canada Day as a school holiday when open in July), the federal Holidays Act (Canada Day), and the BC School Calendar Regulation (minimum hours; optional or remedial learning in vacation periods), all read raw 22 October 2026; Ontario curriculum C3.1 by grade, MTH1W C2.1, ICD2O and ICS3U descriptions; BC ADST 6; CEMC CS Circles, past contests, courseware and contests overview; tz database 2026e summer offsets; provider camp lines from Actua, Code Ninjas and Coding with Kids.',
    localProject: 'Our calendar arithmetic for summer 2027 (30 June a Wednesday, Canada Day on Thursday 1 July); an eight-week plan from 5 July to 27 August 2027; a batch-summer estimate of about 16 live classes and its comparison with BC\'s 952-hour minimum; a summer-before-each-grade table; an original Python cipher (PHHW DW WKH ODNH, MEET AT THE LAKE, CRR; run 22 October 2026). Lesson family: wraparound (modular arithmetic).',
    requiredMentions: ['July 1, not being a Sunday, is a legal holiday and shall be kept and observed as such throughout Canada', 'When the school is open during July', '952 hours of instruction for students in grades 8 to 12', 'for optional or remedial learning activities scheduled during vacation periods', 'PHHW DW WKH ODNH', 'A summer project to start with: the secret-message wheel', 'Week 6 (9 to 13 August):', 'One goal, eight weeks', 'All our classes, camps, and enrichment classes are taught LIVE Online'],
    sources: [
      { claim: 'Our online summer camp: ages 6 to 16, eight live classes a month, two a week, four tracks, schedule around trips.', url: 'https://learn.modernagecoders.com/online-coding-summer-camp' },
      { claim: 'Our summer intensive tracks: kids 6 to 12, teens 12 to 17, adults 18+, two to three weeks, five projects.', url: 'https://learn.modernagecoders.com/summer-coding-camp' },
      { claim: 'Ontario school year starts on or after 1 September and ends on or before 30 June; Canada Day a school holiday when school is open in July.', url: 'https://www.ontario.ca/laws/regulation/900304' },
      { claim: 'Canada Day on July 1, or July 2 when July 1 is a Sunday.', url: 'https://laws-lois.justice.gc.ca/eng/acts/H-5/page-1.html' },
      { claim: 'BC minimum hours of instruction; optional or remedial learning in vacation periods.', url: 'https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/314_2012' },
      { claim: 'Ontario math coding expectations by grade; MTH1W; ICD2O; ICS3U.', url: 'https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics' },
      { claim: 'Week-long day camps mostly offered during school holidays; over 40 universities and colleges.', url: 'https://actua.ca/network' },
      { claim: 'Live online camps and classes for Canada.', url: 'https://www.codingwithkids.com/region/canada/' },
      { claim: 'Free CEMC Python tutorials, past contests and courseware.', url: 'https://cemc.uwaterloo.ca/resources' }
    ],
    rejectedClaims: [
      'Camp fees, currencies, session counts and session lengths from our own camp pages: not printed (the pages show rupee and dollar fees, give both 8-class and 16-session counts, and vary session length by track).',
      'Camp details beyond what our camp pages say, such as fixed 2027 camp dates or daily hours: not claimed.',
      'Labour Day or the August civic holiday 2027: not printed; no primary source was read for either.',
      'Summer break dates for provinces other than Ontario: not printed; they are set locally.',
      'Named university outreach camps from the Actua network page: not named; the page cites the network as a whole.',
      'Provider camp fees or dates, including a US provider\'s camp price: not printed.',
      'Health claims about screen time: none made.',
      'Any affiliation with any government, board, CEMC or provider: none.'
    ]
  }
};
