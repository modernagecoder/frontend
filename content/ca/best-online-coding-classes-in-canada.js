'use strict';
// Best online coding classes in Canada (ag- market door; Canada cluster Plan 2, row 79).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// A "best" page that DEFINES best with stated criteria and compares FORMATS, never a ranking of companies, and never a
// claim that we are the best. Provider lines are each provider's own words, used only as examples of a format.
// Sources (copies in keyword-research-2026-09/ca/src-pilots/best-online-coding-classes-in-canada/ and ca/src/):
//  - Provider sites, read raw 22 October 2026 (facts-competitors.md, grep-checked again on this page's copies):
//    Code Ninjas Canada locator "Kids progress at their own pace through belt-based levels", "Scratch, JavaScript, and
//    Python"; Code Ninjas Toronto centre "Code Ninjas centers are open to kids after school on weekdays."; Steamoji
//    "maker academy for kids ages 6-14"; Coding with Kids Canada page "Coding Classes and Camps in Canada", "Join a small
//    group class from home, via a LIVE video conference!"; BrightCHAMPS en-ca "Live instructor-led classes"; Create &
//    Learn pricing "Class Size: 5 students Max"; Tynker "There are quarterly, yearly and lifetime plans which include
//    access for up to 3 children"; Canada Learning Code "a national not-for-profit", "Learn in a social and
//    collaborative way at low to no cost."; Digital Moment "Founded in 2013, Kids Code Jeunesse (now Digital Moment)",
//    "Code Club is free and a great place to meet friends while learning to code"; Actua "We proudly represent over 40
//    universities and colleges across Canada", "year-round digital skill-building camps, clubs and workshops for youth
//    in K-12". Whether a price is printed: none found on the Code Ninjas Canada, Ontario or Toronto pages or the Coding
//    with Kids Canada page; printed on BrightCHAMPS en-ca and Create & Learn pricing (figures NOT reproduced). No
//    franchise location counts are printed (the researcher's counts are sums of listings).
//  - facts-schools-contests.md (verified): Ontario math C3 overall expectation and the Grade 1, 5, 6 and 8 C3.1 lines;
//    MTH1W C2.2; ICD2O description; BC ADST 6 "for example, Kodu, Scratch", Computer Programming 11 key components;
//    Alberta draft 7-9 "artificial intelligence, computer science and money management", "ahead of mandatory
//    implementation in September 2027"; Saskatchewan Computer Science 20; Manitoba "Senior 2 (20S), Senior 3 (30S), and
//    Senior 4 (40S) Computer Science"; New Brunswick Computer Science 110 and "AI-assisted debugging tools" (the source
//    uses a non-breaking hyphen; the page uses a plain hyphen); Nova Scotia Virtual School "CodeHS: NSVS Computer
//    Programming 12 (Java)."; CEMC BCC 2026 dates and "only require familiarity with concepts covered in the mathematics
//    curriculum across all Canadian provinces"; CCC 2027 date, languages, Junior/Senior lines; CCC rules on generative
//    AI (from the ccc-junior-guide copies); CEMC resources "There is no registration or fee required to access these
//    materials."
//  - scripts/brand-facts.json: 10,000+ students, ages 6 to 67, groups 15 to 20 and 1:1 (the mini batch is sold only in India, so it is not offered here), founded 2020,
//    4.9 across 547 Google reviews.
// Our own material, labelled on the page: the seven criteria and their checks, the format-by-criteria table, the
// age-by-format guidance, the ten-minute transfer test with its two Python programs (run under CPython on 22 October
// 2026; part 1 prints 7:05 7:17 7:29 7:41 7:53, part 2 prints 7:05 7:17 7:29 7:53 8:05 8:17 8:29), and the trial-class
// steps. Lesson family: transfer (change one rule and see whether the understanding moves with it).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const BUS1 = `# Our transfer test, part 1: the morning bus (written by Modern Age Coders)
first_bus = 7 * 60 + 5      # 7:05, as minutes after midnight
gap = 12                    # a bus every 12 minutes
t = first_bus
while t < 8 * 60:           # every bus that leaves before 8:00
    print(f"{t // 60}:{t % 60:02d}")
    t += gap`;

const BUS1_OUT = `7:05
7:17
7:29
7:41
7:53`;

const BUS2 = `# Our transfer test, part 2: the changed rule (written by Modern Age Coders)
first_bus = 7 * 60 + 5
gap = 12
closed_from = 7 * 60 + 30   # no departures from 7:30 ...
closed_to = 7 * 60 + 45     # ... to 7:45
t = first_bus
while t <= 8 * 60 + 30:     # the last bus may now leave at 8:30
    if not (closed_from <= t <= closed_to):
        print(f"{t // 60}:{t % 60:02d}")
    t += gap`;

const BUS2_OUT = `7:05
7:17
7:29
7:53
8:05
8:17
8:29`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'COMPARISON', blurb: 'How to choose a coding class in Canada: seven stated criteria, five formats side by side, provincial curriculum fit, contests and a ten-minute test you can run in any trial class.' },
  slug: 'best-online-coding-classes-in-canada',
  code: 'bec',
  accent: '#315249',
  accentRationale: 'Best online coding classes in Canada: a muted pine #315249, allocated for this row at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 8.14 on the paper #FBF8F2, 7.65 on #F5F1E8 and 7.00 on #EDE7DA',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Choosing a coding class',
  title: 'Best Online Coding Classes in Canada (2026): How to Choose',
  description: 'What makes a coding class in Canada good: seven stated criteria, five formats compared, curriculum fit by province, contests, and a ten-minute test for any class.',
  ogDescription: 'No ranking, no hype: the seven criteria that separate a strong coding class from a weak one, five formats compared on them, and a test any Canadian family can run in a trial class.',
  twitterDescription: 'Choosing a coding class in Canada: seven criteria, five formats compared, and a ten-minute transfer test.',
  pageName: 'Best Online Coding Classes in Canada',
  webPageDescription: 'A guide for Canadian families comparing coding class formats (in-person franchise, live online group, live online 1-on-1, recorded courses and free non-profit programs) against stated criteria, with provincial curriculum links and a practical trial-class test.',
  courseDescription: 'Live online coding classes for students across Canada aged 6 to 67, taught in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Choosing a coding class',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#criteria', label: 'Seven criteria' },
    { href: '#formats', label: 'Formats compared' },
    { href: '#province', label: 'By province' },
    { href: '#transfer', label: 'The ten-minute test' },
    { href: '#trial', label: 'Trial class steps' }
  ],
  eyebrow: 'Canada &middot; Coding classes &middot; How to choose',
  h1: 'Online coding classes in Canada, compared by format',
  lede: 'Search for the best coding classes for kids in Canada and you mostly find old city listicles and directories that never say what "best" means. This page says it plainly. We set out seven criteria a family can check for itself, compare the five common formats against them (in-person franchise centres, live online groups, live online one-to-one lessons, recorded courses and free non-profit programs), show what each province\'s curriculum asks of young coders, and finish with a ten-minute test you can run in any trial class, ours included. We do not rank companies, and we do not tell you we are the best. We tell you how to find out.',
  secondaryCta: { href: '#transfer', label: 'See the ten-minute test' },
  wa: 'Hello Modern Age Coders, we are comparing coding classes for our child in Canada. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; rated 4.9 across 547 Google reviews',
  spec: [
    ['What this is', 'A comparison by format, not a ranking'],
    ['Criteria', 'Seven, stated in full'],
    ['Formats', 'Five, side by side'],
    ['Ages we teach', '6 to 67'],
    ['Our formats', 'Batch of 15 to 20, or 1-on-1'],
    ['Provinces', 'Every province and territory, live online'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'The short answer',
  capsule: 'The best coding class for a Canadian child is the one that passes seven checks: a live teacher, a stated class size, the right age band, a link to the provincial curriculum, published fees, a route to contests such as the CCC, and teaching that makes the child think rather than copy. Modern Age Coders teaches live online across Canada, in a batch or one to one, in courses such as Coding for Kids and Python for Teens.',

  picks: {
    eyebrow: 'Where we would start',
    h2: 'Three courses for Canadian students who are new to coding',
    lede: 'Matched by age. Each is taught live by one regular teacher, so the seven checks below apply to us as much as to anyone.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'BEC / 01', title: 'Coding for Kids', note: 'Ages 6 to 12, complete beginners, batches grouped by age. Block coding first, then games, apps and a first look at AI.' },
      { course: 'python-ai-kids-masterclass', code: 'BEC / 02', title: 'Python and AI for Kids', note: 'Ages 9 to 12. Typed code from the start, through games and turtle drawings, for a child ready to move past blocks.' },
      { course: 'python-complete-masterclass-teens', code: 'BEC / 03', title: 'Python for Teens', note: 'Ages 13 to 18, from absolute beginner. The language behind most CCC Junior writers and many Grade 11 computer science courses.' }
    ]
  },

  sections: [
    {
      id: 'criteria', tint: 'tint', eyebrow: 'What "best" means here',
      h2: 'Seven criteria for judging a coding class in Canada',
      lede: 'These are our criteria, written so that a parent can check each one without trusting anybody\'s marketing, including ours. A class does not need a perfect score on all seven, but the first and the last matter more than the rest.',
      body: [
        { kind: 'table', caption: 'Seven criteria for a coding class, with the check a family can run (our framework)', head: ['Criterion', 'Why it matters', 'How to check it yourself'], rows: [
          ['1. A live teacher', 'A recording cannot notice that a child has stopped understanding. A person can, and can change the next question on the spot.', 'Ask whether the same teacher leads every class, and whether the child\'s screen is watched while they code.'],
          ['2. A stated class size', 'Size decides how often your child is asked to explain their own code. A provider that will not give a number is telling you something.', 'Ask for the maximum, not the average, and whether it changes in busy months.'],
          ['3. The right age band', 'A seven-year-old and a twelve-year-old need different tools, pace and kinds of project.', 'Look for a published age range for each course, and ask how batches are grouped.'],
          ['4. Curriculum fit by province', 'Ontario puts coding inside math from Grade 1; British Columbia, Alberta and others teach it in other places. A class that knows this can help with school, not just alongside it.', 'Name your child\'s grade and province, and ask what their school course expects this year.'],
          ['5. Published fees', 'You should know the monthly fee before a sales call, not after.', 'Look for a fee on the provider\'s own site. If there is none, ask for it in writing.'],
          ['6. A route to contests', 'Canada has free and low-cost contests, run through schools, that reward real problem solving.', 'Ask which contests the teacher has prepared students for, and how practice problems are chosen.'],
          ['7. Thinking over copying', 'A child who copies code, from a screen or from an AI tool, learns to type. A child who has to explain and change it learns to program.', 'Run the ten-minute test further down this page in the trial class.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why live teaching comes first',
          left: [
            'Every other criterion depends on someone being there. A stated class size only matters if a teacher uses the time to ask questions; curriculum fit only matters if someone adjusts the lesson to it.',
            'This is not a case against recorded courses. They are cheap, patient and good for practice. It is a case against treating them as teaching, especially for a child under twelve.'
          ],
          rightH3: 'Why thinking comes last but weighs most',
          right: [
            'The seventh criterion is the hardest to see from a website, and the one that decides whether a year of classes leaves anything behind.',
            'Our promise to families is the same in Toronto, Calgary or Halifax as anywhere else we teach: we teach students how to think and solve problems, not to copy answers or AI output. The test below is how you hold us to it.'
          ] }
      ]
    },
    {
      id: 'formats', tint: 'deep', eyebrow: 'Five formats',
      h2: 'Five coding class formats compared on the seven criteria',
      lede: 'Most options open to a Canadian family fall into one of five formats. The table scores the format, not any one company; a strong provider can beat its format and a weak one can fall below it. The judgments in this table are ours.',
      body: [
        { kind: 'table', caption: 'Coding class formats in Canada against the seven criteria (our assessment of each format, October 2026)', head: ['Criterion', 'In-person franchise centre', 'Live online group', 'Live online 1-on-1', 'Recorded or self-paced course', 'Free non-profit program'], rows: [
          ['Live teacher', 'Yes, on site; often supervising self-paced work', 'Yes', 'Yes', 'No', 'Usually, for a workshop or club'],
          ['Class size stated', 'Varies; often not published', 'Sometimes published', 'One student', 'Not applicable', 'Varies by event'],
          ['Age band', 'Often narrow, such as roughly 5 to 14', 'Varies by provider', 'Any age', 'Wide', 'Varies; some focus on adults'],
          ['Curriculum fit by province', 'Rarely the aim', 'Possible if the teacher knows the province', 'Strongest: built around the student', 'Rare', 'Rare'],
          ['Published fees', 'Often not on the page', 'Mixed', 'Mixed', 'Usually', 'Free or low cost'],
          ['Route to contests', 'Rare', 'Possible', 'Strong if the teacher knows the contest', 'Rare', 'Occasional'],
          ['Thinking over copying', 'Depends on the centre', 'Depends on the teacher and the size', 'Easiest to check', 'Hardest to check', 'Depends on the volunteer or instructor']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where in-person centres are strong',
          left: [
            'A centre gives a child a room, friends and a fixed after-school routine. For a six-year-old who needs to move around and be with others, that can matter more than any curriculum.',
            'The trade-off is reach. A centre exists only where a franchise has opened one, the hours follow the centre\'s week, and a child in a smaller town may have nothing within driving distance.'
          ],
          rightH3: 'Where online formats are strong',
          right: [
            'Live online classes reach every province and territory equally, and the teacher can see the child\'s code as it is typed, which is harder across a room of desks.',
            'The difference between an online group and online one-to-one is mostly attention. A group gives a child peers and a fixed rhythm; one-to-one gives every minute to one student and lets the plan follow their school course.'
          ] },
        { kind: 'p', mt: true, html: 'A note on free programs: Canada is well served by them, and a family on any budget should know they exist before paying anyone, including us. They are listed by name in the next section. Their limitation is continuity: a workshop or a club meeting is rarely a year-long path with one teacher who knows your child.' }
      ]
    },
    {
      id: 'examples', tint: 'tint', eyebrow: 'In providers\' own words',
      h2: 'What providers in each format say about themselves',
      lede: 'One or two examples per format, quoted from each provider\'s own website as read on 22 October 2026, so you can see what each format looks like in practice. This is not a ranking and not an endorsement, and the list is far from complete. Modern Age Coders is not connected with any provider named here.',
      body: [
        { kind: 'table', caption: 'Examples of each format, quoted from the providers\' own sites (read raw on 22 October 2026)', head: ['Format', 'Example', 'In its own words', 'Fee printed on the page we read?'], rows: [
          ['In-person franchise', 'Code Ninjas (Canadian locator and a Toronto centre page)', '"Kids progress at their own pace through belt-based levels"; "Code Ninjas centers are open to kids after school on weekdays."; languages named: "Scratch, JavaScript, and Python"', 'No'],
          ['In-person maker centre', 'Steamoji', '"maker academy for kids ages 6-14"', 'No (a free session is offered)'],
          ['Live online group', 'Coding with Kids (its Canada page)', '"Coding Classes and Camps in Canada"; "Join a small group class from home, via a LIVE video conference!"', 'No'],
          ['Live online group', 'Create &amp; Learn (a US site with no Canada page)', '"Class Size: 5 students Max"', 'Yes'],
          ['Live online, Canada-localised', 'BrightCHAMPS (en-ca pages)', '"Live instructor-led classes"', 'Yes'],
          ['Recorded or self-paced platform', 'Tynker', '"There are quarterly, yearly and lifetime plans which include access for up to 3 children"', 'Plans described'],
          ['Free non-profit, adults and families', 'Canada Learning Code', '"a national not-for-profit"; "Learn in a social and collaborative way at low to no cost."', 'Low to no cost'],
          ['Free non-profit, youth', 'Digital Moment (formerly Kids Code Jeunesse)', '"Founded in 2013, Kids Code Jeunesse (now Digital Moment)"; "Code Club is free and a great place to meet friends while learning to code"', 'Free'],
          ['Non-profit network, K to 12', 'Actua', '"We proudly represent over 40 universities and colleges across Canada"; "year-round digital skill-building camps, clubs and workshops for youth in K-12"', 'Varies by member']
        ] },
        { kind: 'source', html: 'Sources: each provider\'s own site, read raw on 22 October 2026: <a class="ag-inline-link" href="https://www.codeninjas.com/locations/en-ca/" rel="noopener" target="_blank">Code Ninjas Canada</a>, <a class="ag-inline-link" href="https://www.steamoji.com/" rel="noopener" target="_blank">Steamoji</a>, <a class="ag-inline-link" href="https://www.codingwithkids.com/region/canada/" rel="noopener" target="_blank">Coding with Kids Canada</a>, <a class="ag-inline-link" href="https://www.create-learn.us/pricing" rel="noopener" target="_blank">Create &amp; Learn pricing</a>, <a class="ag-inline-link" href="https://brightchamps.com/en-ca/courses/coding-classes-for-kids" rel="noopener" target="_blank">BrightCHAMPS Canada</a>, <a class="ag-inline-link" href="https://www.tynker.com/" rel="noopener" target="_blank">Tynker</a>, <a class="ag-inline-link" href="https://www.canadalearningcode.ca/events/" rel="noopener" target="_blank">Canada Learning Code</a>, <a class="ag-inline-link" href="https://www.digitalmoment.org/youth" rel="noopener" target="_blank">Digital Moment</a>, <a class="ag-inline-link" href="https://actua.ca/coding-digital-literacy" rel="noopener" target="_blank">Actua</a>. We print no other provider\'s fees; check each site for its current figures.' },
        { kind: 'two', mt: true,
          leftH3: 'Reading the fee column',
          left: [
            'Several of the in-person and online providers we read print no fee at all on the pages a parent lands on; you learn the price after a call or a visit. Others print one. Neither tells you whether the class is good, but it does tell you how easy it will be to compare.',
            'On our side, the fees section on this page shows our monthly fee in your own currency before you speak to anyone.'
          ],
          rightH3: 'Reading the class-size column',
          right: [
            'Few providers print a maximum class size. When one does, it is the most useful number on the page, because it tells you how often your child will be asked to speak.',
            'Ours: a batch of 15 to 20, or one to one. The batch keeps the monthly fee low; one to one buys all of the teacher\'s attention.'
          ] }
      ]
    },
    {
      id: 'province', tint: 'deep', eyebrow: 'Curriculum fit',
      h2: 'What each province\'s curriculum asks of young coders',
      lede: 'Canada has no national coding curriculum. Each province puts coding in a different place, and a class that knows where your child\'s school puts it can make school easier instead of competing with it. Every line below is quoted from the provincial curriculum document, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Where coding sits in provincial curricula (quoted from each ministry\'s curriculum site)', head: ['Province', 'Where coding appears', 'In the curriculum\'s words'], rows: [
          ['Ontario, Grades 1 to 8', 'Inside the math curriculum (2020), strand C, expectation C3, in every grade', '"solve problems and create computational representations of mathematical situations using coding concepts and skills"'],
          ['Ontario, Grade 1', 'The first rung of the coding ladder', '"by writing and executing code, including code that involves sequential events"'],
          ['Ontario, Grade 5 and Grade 6', 'Conditions, then efficiency', 'Grade 5: "including code that involves conditional statements and other control structures"; Grade 6 adds "by writing and executing efficient code"'],
          ['Ontario, Grade 9 (MTH1W)', 'Coding inside the de-streamed math course', '"create code by decomposing situations into computational steps in order to represent mathematical concepts and relationships"'],
          ['Ontario, Grade 10 (ICD2O)', 'A digital technology course from 2023', '"Students will learn and apply coding concepts and skills to build hands-on projects and investigate artificial intelligence, cybersecurity, and other emerging digital technologies"'],
          ['British Columbia, Grades 6 and 7', 'Applied Design, Skills, and Technologies, computational thinking module', '"simple algorithms" and "visual programming", "for example, Kodu, Scratch"'],
          ['British Columbia, Grade 11', 'Computer Programming 11', '"Key components are decomposition, patterns and generalizations, abstraction, and algorithmic thinking."'],
          ['Alberta, Grades 7 to 9', 'The renewed draft curriculum', '"By integrating topics like artificial intelligence, computer science and money management"; math 7 to 9 is "ahead of mandatory implementation in September 2027"'],
          ['Saskatchewan', 'Computer Science 20 and 30, filed with the sciences', '"resources/materials for Computer Science 20 and other science curricula"'],
          ['Manitoba', 'A computer science framework for high school', '"Senior 2 (20S), Senior 3 (30S), and Senior 4 (40S) Computer Science"'],
          ['New Brunswick', 'Computer Science 110', '"Learners will gain a strong foundation in coding while demonstrating operational skills, using computational thinking"; it names "AI-assisted debugging tools"'],
          ['Nova Scotia', 'Computer Programming 12, through the Nova Scotia Virtual School', '"CodeHS: NSVS Computer Programming 12 (Java)."']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics" rel="noopener" target="_blank">Ontario curriculum and resources</a> (read through its public content service), <a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/adst" rel="noopener" target="_blank">BC curriculum, ADST</a>, <a class="ag-inline-link" href="https://www.alberta.ca/curriculum-how-we-got-here" rel="noopener" target="_blank">Alberta curriculum timeline</a>, <a class="ag-inline-link" href="https://curriculum.gov.sk.ca/CurriculumHome?id=446" rel="noopener" target="_blank">Saskatchewan curriculum</a>, <a class="ag-inline-link" href="https://www.edu.gov.mb.ca/k12/cur/cs/index.html" rel="noopener" target="_blank">Manitoba computer science</a>, <a class="ag-inline-link" href="https://curriculum.nbed.ca/learning-areas/high-school-block/career-connected-learning/digital-and-information-technology/computer-science-110/" rel="noopener" target="_blank">New Brunswick Computer Science 110</a> and <a class="ag-inline-link" href="https://elearning.ednet.ns.ca/index.php/cm-course/computer-programming-12/" rel="noopener" target="_blank">Nova Scotia Virtual School</a>, all read 22 October 2026. We could not reach Quebec\'s, Newfoundland and Labrador\'s or Prince Edward Island\'s curriculum sites that day, so they are not listed rather than guessed.' },
        { kind: 'two', mt: true,
          leftH3: 'What this means for a younger child',
          left: [
            'An Ontario child in Grade 3 is already expected to write code with repeating events in math class. A coding class that teaches loops with blocks or Python is practising the same idea, and a good teacher will say so to the child.',
            'In British Columbia, Scratch is named in the Grades 6 and 7 module. A child who has built a few Scratch projects before then walks in ahead rather than behind.'
          ],
          rightH3: 'What this means for a teenager',
          right: [
            'By Grade 11 the provinces converge on the same ideas under different names: decomposition, abstraction and algorithms in BC; software development in Ontario\'s ICS3U; Java in Nova Scotia\'s Computer Programming 12.',
            'A strong class teaches those ideas directly, in a real language, so that whichever school course the student takes, it reads as revision rather than a first meeting. Our Ontario students can also join the <a class="ag-inline-link" href="/courses/ics3u-ics4u-computer-science-companion-course">ICS3U and ICS4U companion course</a>, which supports the school course and does not grant Ontario credits.'
          ] }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests',
      h2: 'Contests a coding class in Canada should know about',
      lede: 'Canada has two computing contests that any school can enter, both run by the Centre for Education in Mathematics and Computing (CEMC) at the University of Waterloo. A class that claims contest preparation should be able to tell you their dates and their rules without looking them up.',
      body: [
        { kind: 'table', caption: 'CEMC computing contests in the 2026 to 2027 school year (from CEMC\'s own contest pages, read 22 October 2026)', head: ['', 'Beaver Computing Challenge (BCC)', 'Canadian Computing Competition (CCC)'], rows: [
          ['When', 'CEMC lists "North and South America: Monday, November 9, 2026 to Friday, November 20, 2026"', 'CEMC lists "North and South America: Wednesday, February 17, 2027"'],
          ['Who', 'Grade 5/6, Grade 7/8 and Grade 9/10 levels', 'Junior level for "beginner to intermediate programming skills"; Senior for "intermediate to advanced"'],
          ['Coding needed?', 'No: the questions "only require familiarity with concepts covered in the mathematics curriculum across all Canadian provinces"', 'Yes: "CCC participants may use C, C++, Python 2, Python 3, or Java."'],
          ['Format', '"Time allowed for completion is 45 minutes."', '"5 questions." "Time allowed for completion is 3 hours." "Score out of 75."'],
          ['How students enter', 'Through their school; CEMC says "It is not possible for students to individually register for a contest"', 'Through their school, written online at school'],
          ['AI tools', 'Not covered on the page we read', 'The CCC rules forbid "generative AI such as CoPilot or ChatGPT" during the contest']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/bcc" rel="noopener" target="_blank">CEMC, Beaver Computing Challenge</a>, <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/ccc" rel="noopener" target="_blank">CEMC, Canadian Computing Competition</a>, <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/how-contests-work" rel="noopener" target="_blank">How contests work</a> and the <a class="ag-inline-link" href="https://cccgrader.com/rules.pdf" rel="noopener" target="_blank">CCC rules</a>, read 22 October 2026. We are not connected with CEMC.' },
        { kind: 'two', mt: true,
          leftH3: 'Why contests are a fair test of a class',
          left: [
            'A contest problem cannot be memorised in advance and, at the CCC, cannot be handed to an AI tool. It shows what a student can do alone, on a problem they have never seen.',
            'That makes contests a useful check on criterion seven even for a family with no interest in prizes. A student who can solve an easy Junior question unaided has been taught to think.'
          ],
          rightH3: 'What to ask a provider',
          right: [
            'Ask where practice problems come from. CEMC\'s past contests are free, and CEMC says of its resources: "There is no registration or fee required to access these materials." A provider should point you to them, not resell them.',
            'Ask whether the teacher writes original practice problems. Ours are written by our teachers, labelled as ours, and never copied from CEMC. Our <a class="ag-inline-link" href="/ccc-junior-guide">CCC Junior guide</a> shows three.'
          ] }
      ]
    },
    {
      id: 'transfer', tint: 'deep', eyebrow: 'A ten-minute test',
      h2: 'The transfer test: how to tell whether a class teaches thinking',
      lede: 'This is our test, and you can run it in any trial class, ours included. The idea is simple. A child who has really understood a program can change it when the rule changes. A child who copied it, from the teacher\'s screen or from an AI tool, cannot. Ask the teacher to let your child try both parts, and watch the second part closely.',
      body: [
        { kind: 'p', html: '<b>Part 1: the morning bus.</b> A school bus leaves its first stop at 7:05 and another leaves every 12 minutes. Print the time of every bus that leaves before 8:00. The program counts time in minutes after midnight, so 7:05 is 7 times 60 plus 5, which is 425.' },
        { kind: 'code', label: 'Part 1 &middot; our program', lang: 'python', code: BUS1 },
        { kind: 'code', label: 'Part 1 &middot; what it prints', lang: 'text', code: BUS1_OUT },
        { kind: 'p', mt: true, html: '<b>Part 2: the rule changes.</b> Now the last bus may leave as late as 8:30, and no bus may leave between 7:30 and 7:45 while a crossing guard changes shift. Change the program. Do not start again from a blank file.' },
        { kind: 'code', label: 'Part 2 &middot; one good answer', lang: 'python', code: BUS2, note: 'Two changes do all the work: the loop condition becomes <b>t &lt;= 8 * 60 + 30</b>, and one <b>if</b> skips the closed window. The 7:41 bus disappears and three new buses appear after 8:00. Both programs were run under Python on 22 October 2026 and printed exactly the output shown.' },
        { kind: 'code', label: 'Part 2 &middot; what it prints', lang: 'text', code: BUS2_OUT },
        { kind: 'two', mt: true,
          leftH3: 'What a child who understood does',
          left: [
            'They go straight to the while line, because they know it decides when the buses stop. They can say why 8 * 60 + 30 means 8:30. They test the new program and notice that 7:41 has gone.',
            'They may be slow, and they may make a mistake on the way, such as writing &lt; where &lt;= was needed so that an 8:30 bus would be dropped. A mistake they find themselves is a good sign, not a bad one.'
          ],
          rightH3: 'What a child who copied does',
          right: [
            'They retype the whole program, or ask for a new one. They cannot say what t holds, or why the program multiplies by 60. Asked to predict the output before running it, they guess.',
            'None of that means the child is weak. It means the class has been teaching typing. The fix is a teacher who asks "why" before "what next", every lesson.'
          ] },
        { kind: 'p', mt: true, html: 'The same test works with blocks for a younger child: build a Scratch sprite that jumps three times, then change the rule so it jumps until it touches the ground. And it works for us. In our free first class, ask the teacher to change one rule in whatever your child has just built, and judge us by what happens next. Outside class, remember that ChatGPT needs a parent\'s permission for anyone under 18.' }
      ]
    },
    {
      id: 'ages', tint: 'tint', eyebrow: 'By age',
      h2: 'Which format suits which age',
      lede: 'Our guidance, from teaching students aged 6 to 67. It is a starting point for a conversation, not a rule; a mature nine-year-old and an anxious fourteen-year-old may both break it.',
      body: [
        { kind: 'table', caption: 'Format by age (our guidance)', head: ['Age', 'What tends to work', 'What to be careful of', 'A matching course of ours'], rows: [
          ['6 to 8', 'Short live sessions with a lot of talk, block coding, a project finished every class or two', 'Long recorded videos; any class where the child mostly watches', '<a class="ag-inline-link" href="/courses/scratch-programming-complete-course">Scratch Coding for Kids</a>'],
          ['9 to 12', 'Live groups that move from blocks to typed Python, with games as the reason to learn', 'Staying in blocks for years because it is comfortable', '<a class="ag-inline-link" href="/courses/python-ai-kids-masterclass">Python and AI for Kids</a>'],
          ['13 to 15', 'Typed code, real projects, a first contest such as the Beaver Computing Challenge or CCC Junior', 'AI tools that write the code before the student has tried', '<a class="ag-inline-link" href="/courses/problem-solving-dsa-masterclass-teens">Problem Solving for Teens</a>'],
          ['16 to 18', 'One-to-one or a small batch tied to the school course, the CCC or a university plan', 'Courses that ignore the student\'s actual Grade 11 or 12 course', '<a class="ag-inline-link" href="/courses/ccc-junior-and-senior-preparation-course">CCC Junior and Senior Preparation</a>'],
          ['Adults', 'Live classes paced to work and family, with projects the learner chooses', 'Bootcamp pace for someone who has a full-time job', '<a class="ag-inline-link" href="/courses/python-programming-masterclass-zero-to-advanced-college">Python Masterclass</a>']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'A group, when', p: 'The child likes peers, needs a fixed weekly rhythm, and the family wants the lower monthly fee of a batch of 15 to 20.' },
          { h3: 'Both, when', p: 'A batch most of the year, with a few one-to-one classes before a contest, a school project or a test that matters.' },
          { h3: 'One to one, when', p: 'The plan should follow a school course, a contest date or a learning difference, or the timetable is hard to fix.' }
        ] }
      ]
    },
    {
      id: 'trial', tint: 'deep', eyebrow: 'Trial class steps',
      h2: 'How to use a free trial class to compare providers',
      lede: 'Most providers, us included, offer a first class or session without charge. Used well, it answers most of the seven criteria in an hour. These steps are ours.',
      body: [
        { kind: 'ol', items: [
          '<b>Before the class, write down three facts:</b> your child\'s grade and province, what they have coded before (nothing is a fine answer), and what you hope they get from a year of classes.',
          '<b>Ask the size question in writing.</b> "What is the most students a class can have?" A clear number is a good sign; "it depends" is worth a follow-up.',
          '<b>Ask for the monthly fee before the class, not after it.</b> If the provider\'s site does not print one, ask for it by email so you can compare like with like.',
          '<b>Sit nearby for the first fifteen minutes,</b> then leave. Notice how often the teacher asks your child to explain something, and how often your child simply watches.',
          '<b>Ask for one rule change near the end.</b> This is the transfer test above. Watch whether your child can change their own work, with hints if needed.',
          '<b>Ask what the next eight classes would cover,</b> and how they link to your child\'s school course in your province.',
          '<b>Afterwards, ask your child one question:</b> "What did you make, and how does it work?" The answer is the best review any class can get.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Comparing two or three trials',
          left: [
            'Score each trial against the seven criteria on the same evening, while it is fresh. A simple tick, cross or question mark per criterion is enough.',
            'If two providers tie, choose the one your child wants to go back to. Twelve months of willing practice beats a better syllabus attended reluctantly.'
          ],
          rightH3: 'What our free first class covers',
          right: [
            'A short problem matched to your child\'s age, solved live on screen, and at the end one rule change so you can see the transfer test happen.',
            'The teacher then tells you where your child is starting from, which course fits, and whether a batch or one to one suits them. There is no card to enter and nothing to sign.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a learner starts',
    h2: 'Four stages from first lesson to independent coder',
    lede: 'Our stages, used in the first class to place a student honestly.',
    table: { caption: 'Four stages of a young coder (ours)', head: ['Stage', 'What you see'], rows: [
      ['1. Following', 'Builds what the teacher shows, step by step, and can say what each step does'],
      ['2. Changing', 'Alters a working program when a rule changes, the transfer test in this page'],
      ['3. Planning', 'Breaks a new problem into steps before writing any code'],
      ['4. Independent', 'Solves unseen problems alone, tests them, and explains the method to someone else']
    ] },
    left: { h3: 'For parents', ps: [
      'Most children who come to us after a year of another class are at stage 1, whatever the certificate says. That is not their fault and it moves quickly once the teaching changes.',
      'Stage 2 is the one to ask about after three months. If your child cannot yet change their own program, ask the teacher why.'
    ] },
    right: { h3: 'For students', ps: [
      'When something works, change one thing and predict what will happen before you run it.',
      'If you used an AI tool, close it and write the program again from memory. Whatever you could not rewrite is what you still need to learn.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine coding courses for Canadian students, by stage',
    lede: 'Every course is live online with one regular teacher, in a batch or one to one, for students in any province.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Ages 6 to 12', courses: [
        { code: 'BEC / KID / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'From a first sprite to complete games, for ages 6 to 12.' },
        { code: 'BEC / KID / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft Coding for Kids', blurb: 'Blocks to real code inside a world children already love.' },
        { code: 'BEC / KID / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem Solving for Kids', blurb: 'Logic and step-by-step thinking for ages 7 to 12.' }
      ] },
      { num: 'II', h3: 'Typed code', sub: 'Ages 9 to 18', courses: [
        { code: 'BEC / TEEN / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Game Coding', blurb: 'Typed Luau scripts inside a game, ages 8 to 14.' },
        { code: 'BEC / TEEN / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'The language of many Grade 11 and 12 courses.' },
        { code: 'BEC / TEEN / 03', slug: 'ics3u-ics4u-computer-science-companion-course', title: 'ICS3U and ICS4U Companion', blurb: 'Alongside the Ontario school course, in Python or Java.' }
      ] },
      { num: 'III', h3: 'Further on', sub: 'Teens and adults', courses: [
        { code: 'BEC / ADV / 01', slug: 'competitive-programming-for-teens-course', title: 'Competitive Programming for Teens', blurb: 'Algorithms and contest habits beyond CCC Junior.' },
        { code: 'BEC / ADV / 02', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe Coding for Teens', blurb: 'AI-assisted projects, built on code the student understands.' },
        { code: 'BEC / ADV / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'From zero for adults, at a pace that fits a working week.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How our classes run',
    h2: 'Live online coding classes for every Canadian time zone',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school batches, with the time set in your province\'s clock.' },
      { time: 'Weekends', l: 'Weekend mornings suit families with busy school weeks.' },
      { time: '1-on-1', l: 'Booked around the student, and moved when the term changes.' }
    ],
    cells: [
      { h3: 'One teacher', p: 'The same person every class, who knows your child\'s code.' },
      { h3: 'A stated size', p: 'A batch of 15 to 20, or one student: you choose, and we keep to it.' },
      { h3: 'Your province', p: 'Lessons that point back to the school curriculum.' },
      { h3: 'Explain, then change', p: 'Every project ends with a rule change, not a copy.' },
      { h3: 'Contest ready', p: 'BCC and CCC practice from problems our teachers write.' },
      { h3: 'Ages 6 to 67', p: 'Children, teens and adults, in separate batches.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'A child who passes the transfer test builds things like these. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from parents, quoted word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Criterion five, applied to ourselves: the monthly fee is printed here, in your own currency, before you talk to anyone. You pay month by month and can stop at the end of any month.',
    free: ['A free first class', 'The transfer test, if you ask', 'No card, no contract'],
    group: ['A batch of 15 to 20', 'Eight live classes a month', 'One regular teacher'],
    one: ['A teacher for one student', 'Planned around the school course', 'Times that suit your family']
  },

  faq: {
    eyebrow: 'Questions Canadian parents ask',
    h2: 'Choosing a coding class in Canada: questions and answers',
    items: [
      { q: 'What are the best coding classes for kids in Canada?', a: 'There is no single answer, so we give criteria instead of a ranking. Look for a live teacher, a stated class size, the right age band, a link to your province\'s curriculum, published fees, a route to contests and teaching that makes the child explain and change their code.' },
      { q: 'Are online coding classes as good as in-person ones?', a: 'They can be, and for coding they have one advantage: the teacher can watch the child\'s code as it is typed. In-person centres offer a room and friends, which matters for some young children. Judge the teaching, not the format.' },
      { q: 'What class size should I look for?', a: 'Ask for the maximum, in writing. Smaller groups mean more questions per child. We teach batches of 15 to 20 and one to one, and we tell families which one we would choose for their child.' },
      { q: 'At what age should a child start coding?', a: 'Our courses start at age 6 with block coding. In Ontario, the math curriculum already asks Grade 1 students to write and execute code with sequential events, so a gentle start at that age matches school.' },
      { q: 'Is block coding enough, or should my child learn Python?', a: 'Blocks are the right start for young children. Most children of 9 or 10 who are comfortable with blocks are ready for typed Python, and staying in blocks for years can slow them down.' },
      { q: 'Are there free coding programs in Canada?', a: 'Yes. Canada Learning Code describes itself as a national not-for-profit offering workshops at low to no cost, Digital Moment says its Code Club is free, and CEMC offers free resources and past contests. They are worth trying before paying anyone.' },
      { q: 'Should a coding class follow my province\'s curriculum?', a: 'It should at least know it. Ontario teaches coding inside math from Grades 1 to 8, BC names Scratch in its Grades 6 and 7 module, and several provinces offer high school computer science. A class that knows this can support school instead of competing with it.' },
      { q: 'Do coding classes help with the CCC or other contests?', a: 'A good one should. CEMC runs the Beaver Computing Challenge in November 2026 and the Canadian Computing Competition on Wednesday 17 February 2027, both entered through schools. Ask how a provider chooses practice problems.' },
      { q: 'Should my child use AI tools while learning to code?', a: 'Only after they can write and explain the code themselves. The CCC rules forbid generative AI during the contest, and ChatGPT needs a parent\'s permission for anyone under 18. We teach students to think first and to check any AI output line by line.' },
      { q: 'What times are your classes for families in Canada?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We confirm every time in your own province\'s clock.' },
      { q: 'How can I tell whether a trial class was good?', a: 'Ask the teacher to change one rule in what your child built, and see whether your child can change the program. Then ask your child what they made and how it works. A clear answer is the best sign.' },
      { q: 'Are you the best coding class in Canada?', a: 'We will not claim that, and you should be wary of anyone who does. We publish our class sizes and our monthly fee, teach live, and invite you to run the transfer test in our free first class and judge for yourself.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families weighing up coding and math classes in Canada.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Our main page for Canadian families, with every course we teach here.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'The Ontario curriculum, ICS courses and class times in Eastern time.' },
      { href: '/coding-classes-in-british-columbia', label: 'Coding classes in British Columbia', p: 'ADST, Computer Programming 11 and 12, and Pacific times.' },
      { href: '/coding-classes-in-alberta', label: 'Coding classes in Alberta', p: 'The renewed curriculum and classes on Alberta\'s clock.' },
      { href: '/canada-coding-curriculum-by-province', label: 'Coding curriculum by province', p: 'Every province\'s coding expectations, side by side.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'The 2027 contest, with three practice problems we wrote.' },
      { href: '/live-vs-recorded-coding-classes', label: 'Live vs recorded classes', p: 'The trade-off between a teacher and a video, in more depth.' },
      { href: '/blog/group-vs-1-on-1-coding-classes', label: 'Group or 1-on-1?', p: 'How to decide between a batch and a teacher of your own.' },
      { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer', p: 'The habits the transfer test is checking for.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Bring the seven criteria with you. The first class is a short live lesson at your child\'s level, ending with one rule change so you can watch the transfer test for yourself, and an honest word on which format and course would suit.',
    readFirst: 'Want to see a real lesson first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> has recorded classes, and the <a class="ag-inline-link" href="/courses">course list</a> shows every syllabus before you decide.',
    note: 'We have no centre in Canada: our teachers work from India and every class is live over video, which is why a family in Whitehorse gets the same class as one in Mississauga. WhatsApp reaches us fastest.',
    formNote: 'Free, with no card asked for and nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'Choosing', links: [
        { href: '/live-vs-recorded-coding-classes', label: 'Live vs recorded' },
        { href: '/blog/group-vs-1-on-1-coding-classes', label: 'Group or 1-on-1' },
        { href: '/pricing', label: 'Fees' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/canada-coding-curriculum-by-province', label: 'Curriculum by province' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Change one rule, then judge'
  },

  personalityCss: `
.ag-root.ag-bec .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-bec .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-bec .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-bec .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-bec .ag-band-head h3 { letter-spacing: -0.004em; }
.ag-root.ag-bec .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Provider sites read raw 22 October 2026 (Code Ninjas Canada and a Toronto centre, Steamoji, Coding with Kids Canada, Create & Learn pricing, BrightCHAMPS en-ca, Tynker, Canada Learning Code, Digital Moment, Actua) for formats, ages, class size and whether a fee is printed; provincial curriculum documents (Ontario DCP math C3 and MTH1W C2.2 and ICD2O; BC ADST 6 and Computer Programming 11; Alberta curriculum timeline; Saskatchewan CS 20; Manitoba CS framework; New Brunswick CS 110; Nova Scotia Virtual School CP12); CEMC BCC and CCC pages and the CCC rules.',
    localProject: 'Our seven-criterion framework and the format-by-criteria table; the ten-minute transfer test, two original Python programs (the morning bus, then the changed rule) run on 22 October 2026 with their exact output; age-by-format guidance; seven trial-class steps. Lesson family: transfer.',
    requiredMentions: ['Kids progress at their own pace through belt-based levels', 'Join a small group class from home, via a LIVE video conference!', 'Learn in a social and collaborative way at low to no cost.', 'Founded in 2013, Kids Code Jeunesse (now Digital Moment)', 'Seven criteria for judging a coding class in Canada','The transfer test: how to tell whether a class teaches thinking', 'closed_from = 7 * 60 + 30', 'Part 1: the morning bus', 'Change one rule, then judge', 'Five coding class formats compared on the seven criteria'],
    sources: [
      { claim: 'Franchise format: self-paced belt levels, after-school weekday centres, languages.', url: 'https://www.codeninjas.com/locations/en-ca/' },
      { claim: 'Live online small-group classes for Canada.', url: 'https://www.codingwithkids.com/region/canada/' },
      { claim: 'Free and low-cost non-profit coding programs in Canada.', url: 'https://www.canadalearningcode.ca/events/' },
      { claim: 'Digital Moment, formerly Kids Code Jeunesse; free Code Club.', url: 'https://www.digitalmoment.org/youth' },
      { claim: 'Actua network of over 40 universities and colleges; K-12 camps, clubs and workshops.', url: 'https://actua.ca/network' },
      { claim: 'Ontario math coding expectation C3, Grades 1 to 8.', url: 'https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics' },
      { claim: 'BC Computer Programming 11 key components of computational thinking.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/11/computer-programming' },
      { claim: 'BCC and CCC dates, formats and entry through schools.', url: 'https://cemc.uwaterloo.ca/contests/ccc' }
    ],
    rejectedClaims: [
      'A ranking of named providers, or any claim that Modern Age Coders is the best: refused; the page compares formats on stated criteria.',
      'Other providers\' fees: not printed; the page says only whether a fee appeared on the page read.',
      'Franchise location counts summed from province directory pages (for example a national centre total): not printed, because they are our sums, not the provider\'s figure.',
      'Search-result observations from a US-only index: not used as facts.',
      'Quebec, Newfoundland and Labrador and PEI curriculum lines: their sites could not be reached on 22 October 2026, so nothing is claimed.',
      'Any affiliation with CEMC or with any provider named: none, and the page says so.'
    ]
  }
};
