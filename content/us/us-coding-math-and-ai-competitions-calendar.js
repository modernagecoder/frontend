'use strict';
// US coding, math and AI competitions calendar 2026-27 (ag- reference page; US cluster Phase 3, row 45).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md, section 6.5 (reference pages first). Every row is a
// date published by the organiser on its own site, read raw with curl on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/us-coding-math-and-ai-competitions-calendar/):
//  - ACSL /get-started/schedule, /get-started/finals, /Registration: contest windows Oct 19 2026 to May 23 2027,
//    registration deadline December 31, 2026, invitations May 1 to 28 2027, Finals Saturday May 29, 2027.
//  - CyberPatriot /competition-schedule/, /join-the-competition/, /competition-overview/: teams by October 1, 2026;
//    roster by October 21, 2026; payment by November 5, 2026; Round 1 Oct 22-25; Round 2 and Middle School
//    Introductory Round Nov 12-15; State Round Dec 10-13, 2026; Semifinals Jan 21-23, 2027; National Finals March
//    12-16, 2027.
//  - Congressional App Challenge (2026 rulebook and rules page, copies from the pilot): deadline "12:00 pm EDT,
//    Monday, October 26th, 2026"; judging November; winners December; embargo "January 15, 2027".
//  - Presidential SI Challenge (orise.orau.gov/si-challenge/about/timeline.html): registration opened October 13,
//    2026; registration deadline December 18, 2026 and submission December 23, 2026, 5:00 p.m. ET; State Champions
//    February 11 to 15, 2027; regional presentations March 4 to April 8, 2027; Regional Champions April 14 to 20,
//    2027; National Championships June 6-9, 2027 in Washington, DC.
//  - MATHCOUNTS /programs/competition-rules-faq, /programs/mathcounts-competition-series: Early Bird and School
//    Competition release Nov. 3, 2026; NSC registration opens November 5, 2026; regular rate by Dec. 15, 2026; school
//    competitions November 2026 to January 2027; chapter February 1-28, 2027; state March 1-31, 2027; national May
//    9-10, 2027 in Washington, DC.
//  - Math Kangaroo USA (/faqs/about-the-test/, /faqs/about-registration/, home): regular registration September 15
//    to December 31; late January 1 to February 1; center moves "only be done by January 1"; contest "the 3rd
//    Thursday in March"; 2027 individual competition "held in March 2027".
//  - MOEMS (moems.org): 2026-2027 windows Nov 9-30, Dec 7-28, Jan 4-25, Feb 1-22, Mar 1-29; scores by March 31,
//    2027, 11:59 PM (PT).
//  - Bebras USA (bebraschallenge.org): "scheduled for November 9-20" (en dash in the original), 2026.
//  - USAAIO (usaaio.org, /2027-usa-na-aio): registration closes January 31, 2027, 11:59 p.m. EST; Round 1 Friday,
//    February 19, 2027, 12:00 to 3:00 p.m. ET; Round 2 March or April 2027; camp June 2027; IAIO 2027 in Vietnam
//    February 25 to March 2, 2027.
//  - IOAI (ioai-official.org): "July 4th - 10th 2027", Singapore.
//  - USACO (usaco.org): only the 2025-2026 schedule published on the read date.
//  - CyLab Security Academy (cylabacademy.org/competitors.html): flagship dates not yet posted.
//  - Blocked or unreadable, not described: technovationchallenge.org (Cloudflare 403), maa.org (403), kaggle.com
//    (JavaScript-only pages).
// Our own material, labelled on the page: the March 18, 2027 Math Kangaroo date (our calculation from the published
// rule), the count of dated rows per month, the table of which deadlines need an adult, and the planning steps.
// Lesson family: working backwards from a deadline.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const L = (href, text) => '<a class="ag-inline-link" href="' + href + '" rel="noopener" target="_blank">' + text + '</a>';
const ACSL = L('https://www.acsl.org/get-started/schedule', 'ACSL schedule');
const CP = L('https://www.uscyberpatriot.org/competition-schedule/', 'CyberPatriot schedule');
const CAC = L('https://www.congressionalappchallenge.us/students/rules/', 'CAC rules');
const SI = L('https://orise.orau.gov/si-challenge/about/timeline.html', 'SI Challenge dates');
const MC = L('https://www.mathcounts.org/programs/competition-rules-faq', 'MATHCOUNTS FAQ');
const MK = L('https://mathkangaroo.org/mks/faqs/about-the-test/', 'Math Kangaroo FAQ');
const MO = L('https://www.moems.org/', 'MOEMS');
const BB = L('https://www.bebraschallenge.org/', 'Bebras USA');
const AIO = L('https://usaaio.org/2027-usa-na-aio', 'USAAIO');
const IOAI = L('https://ioai-official.org/', 'IOAI');

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'CALENDAR', blurb: 'Every published 2026-27 date for US coding, math and AI competitions in one dated table, from October 2026 to July 2027, each with its source.' },
  slug: 'us-coding-math-and-ai-competitions-calendar',
  code: 'umac',
  accent: '#6B4823',
  accentRationale: 'US coding, math and AI competitions calendar: a ledger brown #6B4823 from the US allocation table, warm and apart from the competition guide accents, contrast checked on every paper',
  pageType: 'market',
  market: US,
  routeLabel: 'US competitions calendar 2026-27',
  title: 'US Coding, Math and AI Competitions Calendar 2026-27',
  description: 'Every published 2026-27 date for US student competitions in coding, math and AI, from ACSL and CyberPatriot to MATHCOUNTS and the USA-NA-AIO, each with its source.',
  ogDescription: 'A dated calendar of US student competitions for the 2026-27 school year, built only from organisers\' own pages as read on 17 October 2026, with the gaps marked.',
  twitterDescription: 'US coding, math and AI competition dates for 2026-27, sourced row by row.',
  pageName: 'US Coding, Math and AI Competitions Calendar 2026-27',
  webPageDescription: 'A reference calendar of US coding, mathematics and AI competition dates for the 2026-27 school year, each row taken from the organiser\'s own site as read on 17 October 2026, with unpublished and unreadable events listed separately.',
  courseDescription: 'Live online coding, competition mathematics and AI classes for US students preparing for the competitions in this calendar, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Competitions calendar 2026-27',
  navLinks: [
    { href: '#fall', label: 'Oct to Dec 2026' },
    { href: '#winter', label: 'Jan to Mar 2027' },
    { href: '#spring', label: 'Apr to Jul 2027' },
    { href: '#missing', label: 'Not yet dated' },
    { href: '#adults', label: 'Adult needed' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; School year 2026-27 &middot; Dates as published, read 17 October 2026',
  h1: 'US coding, math and AI competitions calendar, 2026-27',
  lede: 'This is a single dated list of the competitions for US students in grades K to 12 that this site covers, across coding, cybersecurity, mathematics and AI. Every date below is taken directly from the organiser&rsquo;s site, as published when we read it on 17 October 2026, and every row links to that page. Where an organiser had not yet posted 2026-27 dates, or its site could not be read, the event is listed separately rather than guessed. Organisers do move dates, so treat the source link, not this page, as final.',
  secondaryCta: { href: '#fall', label: 'Start with this fall' },
  wa: 'Hello Modern Age Coders, we are planning which US competitions to enter this school year. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; every date linked to its source',
  spec: [
    ['Covers', 'October 2026 to July 2027'],
    ['Subjects', 'Coding, cybersecurity, math, AI'],
    ['Competitions', 'Eleven with published dates'],
    ['Next deadline', 'October 26, 2026 (app challenge)'],
    ['Read on', '17 October 2026'],
    ['Source rule', 'Organiser&rsquo;s own site only'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Key 2026-27 dates for US student competitions: Congressional App Challenge deadline October 26, 2026; Bebras November 9 to 20, 2026; Presidential SI Challenge projects due December 23, 2026; USA-NA-AIO Round 1 February 19, 2027; MATHCOUNTS chapter rounds in February and nationals May 9 to 10, 2027; ACSL Finals May 29, 2027. Modern Age Coders, a live online school, prepares students for them.',

  picks: {
    eyebrow: 'Classes for these contests',
    h2: 'Courses for the busiest rows in this calendar',
    lede: 'Coding contests, middle school math, and security competitions account for most of the dates below.',
    items: [
      { course: 'competitive-programming-for-teens-course', code: 'UMAC / 01', title: 'Competitive programming', note: 'Ages 13 and up. ACSL and USACO-style problems.' },
      { course: 'middle-school-math-competitions-course', code: 'UMAC / 02', title: 'Middle school math competitions', note: 'Grades 5 to 8. MATHCOUNTS, Math Kangaroo and AMC 8 prep.' },
      { course: 'picoctf-cyberpatriot-cybersecurity-competition-prep-for-teens', code: 'UMAC / 03', title: 'Cybersecurity competition prep', note: 'Teens 13 to 18. CyberPatriot rounds and capture the flag.' }
    ]
  },

  sections: [
    {
      id: 'fall', tint: 'tint', eyebrow: 'Fall 2026',
      h2: 'October to December 2026',
      lede: 'The fall is crowded with registration deadlines as much as contests. Two rows at the top had already passed on the read date and are kept for context.',
      body: [
        { kind: 'table', caption: 'Competition dates, October to December 2026 (as published on each organiser&rsquo;s site, read 17 October 2026)', head: ['Date', 'Competition', 'What happens', 'Source'], rows: [
          ['October 1, 2026 (passed)', 'CyberPatriot 19', 'Last day to create teams for the 2026-27 season', CP],
          ['October 13, 2026 (passed)', 'Presidential SI Challenge', 'Online registration opened', SI],
          ['October 19, 2026', 'ACSL', 'Contest #1 opens; it closes January 10, 2027', ACSL],
          ['October 21, 2026', 'CyberPatriot 19', 'Roster finalization: competitors added by this date', CP],
          ['October 22 to 25, 2026', 'CyberPatriot 19', 'Round 1 for Open and All Service Division teams', CP],
          ['October 26, 2026, 12:00 pm EDT', 'Congressional App Challenge', '2026 deadline to register and submit', CAC],
          ['November 3, 2026', 'MATHCOUNTS', 'Early Bird registration deadline; 2027 School Competition released online', MC],
          ['November 5, 2026', 'MATHCOUNTS', 'Registration opens for non-school competitors', MC],
          ['November 5, 2026', 'CyberPatriot 19', 'Team fee payment due', CP],
          ['November 9 to 20, 2026', 'Bebras USA', 'The 2026 Bebras Challenge', BB],
          ['November 9 to 30, 2026', 'MOEMS', 'Contest 1 window', MO],
          ['November 12 to 15, 2026', 'CyberPatriot 19', 'Round 2 (Open, All Service) and the Middle School Introductory Round', CP],
          ['November 2026', 'Congressional App Challenge', 'Each Member of Congress&rsquo;s office judges the entries from its district', CAC],
          ['November 2026 to January 2027', 'MATHCOUNTS', 'School competitions, dates set by each coach', MC],
          ['December 7 to 28, 2026', 'MOEMS', 'Contest 2 window', MO],
          ['December 10 to 13, 2026', 'CyberPatriot 19', 'State Round for all teams', CP],
          ['December 15, 2026', 'MATHCOUNTS', 'Regular-rate registration deadline', MC],
          ['December 18, 2026, 5:00 p.m. ET', 'Presidential SI Challenge', 'Team registration deadline', SI],
          ['December 23, 2026, 5:00 p.m. ET', 'Presidential SI Challenge', 'Project submission deadline', SI],
          ['December 2026', 'Congressional App Challenge', 'Winners announced by each hosting Member', CAC],
          ['December 31, 2026', 'ACSL', 'Season registration deadline for team advisors', L('https://www.acsl.org/Registration', 'ACSL registration')],
          ['December 31, 2026', 'Math Kangaroo USA', 'Regular registration ends', MK]
        ] },
        { kind: 'p', mt: true, html: 'Two fall dates are especially easy to miss: the CyberPatriot team deadline, which falls before most school clubs have met, and the MATHCOUNTS Early Bird rate on November 3, which depends on a school coach registering in time.' }
      ]
    },
    {
      id: 'winter', tint: 'deep', eyebrow: 'Winter 2027',
      h2: 'January to March 2027',
      lede: 'Winter is when most of the contests themselves happen. March is the single busiest month on this calendar.',
      body: [
        { kind: 'table', caption: 'Competition dates, January to March 2027 (as published on each organiser&rsquo;s site, read 17 October 2026)', head: ['Date', 'Competition', 'What happens', 'Source'], rows: [
          ['January 1, 2027', 'Math Kangaroo USA', 'Late registration opens (to February 1); last day to move to another center', L('https://mathkangaroo.org/mks/faqs/about-registration/', 'Math Kangaroo registration FAQ')],
          ['January 4, 2027', 'ACSL', 'Contest #2 opens; it closes February 28, 2027', ACSL],
          ['January 4 to 25, 2027', 'MOEMS', 'Contest 3 window', MO],
          ['January 10, 2027', 'ACSL', 'Contest #1 closes, 11:59 pm Eastern', ACSL],
          ['January 15, 2027', 'Congressional App Challenge', 'Embargo on 2026 results ends', CAC],
          ['January 21 to 23, 2027', 'CyberPatriot 19', 'Semifinals, qualifying teams only', CP],
          ['January 31, 2027, 11:59 p.m. EST', 'USA-NA-AIO', 'Registration closes', AIO],
          ['February 1, 2027', 'ACSL', 'Contest #3 opens; it closes April 11, 2027', ACSL],
          ['February 1, 2027', 'Math Kangaroo USA', 'Late registration ends', MK],
          ['February 1 to 22, 2027', 'MOEMS', 'Contest 4 window', MO],
          ['February 1 to 28, 2027', 'MATHCOUNTS', 'Chapter competitions', MC],
          ['February 11 to 15, 2027', 'Presidential SI Challenge', 'State Champions announced', SI],
          ['February 19, 2027, 12:00 to 3:00 p.m. ET', 'USA-NA-AIO', 'Round 1, proctored', AIO],
          ['February 25 to March 2, 2027', 'IAIO 2027', 'International AI Olympiad in Vietnam; Team USA already selected', L('https://usaaio.org/', 'USAAIO home')],
          ['February 28, 2027', 'ACSL', 'Contest #2 closes', ACSL],
          ['March 1, 2027', 'ACSL', 'Contest #4 opens; it closes May 23, 2027', ACSL],
          ['March 1 to 29, 2027', 'MOEMS', 'Contest 5 window', MO],
          ['March 1 to 31, 2027', 'MATHCOUNTS', 'State competitions', MC],
          ['March 4 to April 8, 2027', 'Presidential SI Challenge', 'Regional presentations to judges, online', SI],
          ['March 12 to 16, 2027', 'CyberPatriot 19', 'National Finals', CP],
          ['March 18, 2027 (our calculation)', 'Math Kangaroo USA', 'Individual competition; the published rule is the 3rd Thursday in March', MK],
          ['March or April 2027', 'USA-NA-AIO', 'Round 2 for qualifiers', AIO],
          ['March 31, 2027, 11:59 pm PT', 'MOEMS', 'Deadline to enter scores for all five contests', MO]
        ] },
        { kind: 'p', mt: true, html: 'One row is our own: Math Kangaroo USA publishes that the 2027 individual competition is in March 2027 and that the contest takes place on the 3rd Thursday in March, and we counted the calendar to March 18, 2027. Confirm the exact day with your Math Kangaroo center.' }
      ]
    },
    {
      id: 'spring', tint: 'tint', eyebrow: 'Spring and summer 2027',
      h2: 'April to July 2027',
      lede: 'The season ends with finals and national events, most of them by invitation.',
      body: [
        { kind: 'table', caption: 'Competition dates, April to July 2027 (as published on each organiser&rsquo;s site, read 17 October 2026)', head: ['Date', 'Competition', 'What happens', 'Source'], rows: [
          ['April 11, 2027', 'ACSL', 'Contest #3 closes, 11:59 pm Eastern', ACSL],
          ['April 14 to 20, 2027', 'Presidential SI Challenge', 'Regional Champions announced', SI],
          ['May 1 to 28, 2027', 'ACSL', 'Finals invitations emailed', L('https://www.acsl.org/get-started/finals', 'ACSL Finals')],
          ['May 9 to 10, 2027', 'MATHCOUNTS', 'National Competition in Washington, DC', MC],
          ['May 23, 2027', 'ACSL', 'Contest #4 closes, 11:59 pm Eastern', ACSL],
          ['May 29, 2027', 'ACSL', 'Invitational Finals, online', L('https://www.acsl.org/get-started/finals', 'ACSL Finals')],
          ['June 2027', 'USA-NA-AIO', 'USAAIO camp', AIO],
          ['June 6 to 9, 2027', 'Presidential SI Challenge', 'National Championships in Washington, DC', SI],
          ['July 4 to 10, 2027', 'IOAI 2027', 'International Olympiad in AI, Singapore', IOAI]
        ] },
        { kind: 'source', html: 'All dates above are the organisers&rsquo; own, as published on 17 October 2026, except the Math Kangaroo day, which is our calculation from its published rule. Modern Age Coders is not connected with any organiser listed. The UK version of this page is the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">UK coding, maths and AI competitions calendar</a>.' }
      ]
    },
    {
      id: 'missing', tint: 'deep', eyebrow: 'Gaps',
      h2: 'Competitions with no 2026-27 date yet, or no readable source',
      lede: 'A calendar is only useful if it is honest about what it does not know. These events matter to US students but could not be dated from a primary source on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'Events left undated, and why (checked 17 October 2026)', head: ['Competition', 'Status on the read date', 'What we know from the organiser'], rows: [
          ['USACO', 'No 2026-27 schedule posted', '2025-26 online contests: January 9-12, January 30-February 2 and February 20-23, 2026; proctored US Open: March 28, 2026'],
          ['picoCTF (CyLab Security Academy)', 'Flagship dates not yet posted', 'One flagship event each year aimed at US middle and high schoolers, with mini-competitions in between'],
          ['Congressional App Challenge 2027', 'Next cycle not yet published', 'The 2026 cycle opened pre-registration on January 1, 2026 and launched in May'],
          ['FIRST LEGO League, Tech Challenge and Robotics Competition', 'Events are local and regional', 'Season name for 2026-2027: FIRST CANOPY; events are found through FIRST&rsquo;s own search, and the LEGO League season, BIOGLOW, is its last'],
          ['AMC 8, AMC 10 and AMC 12', 'Organiser&rsquo;s site returned an access-denied error', 'Not described here; check the MAA directly'],
          ['Technovation', 'Organiser&rsquo;s site blocked our request', 'Not dated here; see our <a class="ag-inline-link" href="/technovation-girls-guide">Technovation Girls guide</a> and the official site'],
          ['Kaggle competitions', 'Pages load only through JavaScript', 'Not described here; Kaggle sets its own account and competition age rules, so check them with a parent']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Using last season as a guide',
          left: [
            'Where an organiser has only last season&rsquo;s dates online, the pattern is still useful for planning. USACO&rsquo;s winter contests, for example, ran on three January and February weekends in 2026, so a student preparing this fall should be ready by early January.',
            'But never register, book travel or skip a school event on the strength of last year&rsquo;s dates. Wait for the organiser to publish.'
          ],
          rightH3: 'Why we do not fill the gaps',
          right: [
            'Dates copied from secondary sites are a common source of missed deadlines. Every dated row on this page comes from the organiser, and the rest stay blank until the organiser posts them.',
            'When we refresh this page we re-read every source and change the read date at the top.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://usaco.org/index.php" rel="noopener" target="_blank">USACO home</a>, <a class="ag-inline-link" href="https://cylabacademy.org/competitors.html" rel="noopener" target="_blank">CyLab Security Academy competitors</a>, <a class="ag-inline-link" href="https://www.congressionalappchallenge.us/students/rules/" rel="noopener" target="_blank">CAC rules</a> and <a class="ag-inline-link" href="https://www.firstinspires.org/" rel="noopener" target="_blank">FIRST</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'adults', tint: 'tint', eyebrow: 'Who signs up',
      h2: 'Which competitions need an adult to register',
      lede: 'Many of these contests cannot be entered by a student alone. This table is our summary of each organiser&rsquo;s sign-up rule, so a family knows which adult to talk to first.',
      body: [
        { kind: 'table', caption: 'Who registers for each competition (our summary of the organisers&rsquo; rules)', head: ['Competition', 'Who registers', 'Earliest deadline this season'], rows: [
          ['ACSL', 'A team advisor: any adult with some computer science experience, including a parent or teacher', 'December 31, 2026'],
          ['CyberPatriot', 'An approved adult coach, who adds students to the roster', 'October 1, 2026 (passed)'],
          ['Presidential SI Challenge', 'A Team Leader aged 21 or older, such as a teacher or approved club leader', 'December 18, 2026'],
          ['MATHCOUNTS', 'The school; a parent only for a non-school competitor', 'November 3, 2026 for the Early Bird rate'],
          ['Bebras USA', 'A teacher registers as coordinator', 'Before November 9, 2026'],
          ['MOEMS', 'A school or group sets up a team', 'Before the November 9, 2026 window'],
          ['Math Kangaroo USA', 'A parent or school, at a Math Kangaroo center', 'December 31, 2026 for regular registration'],
          ['USA-NA-AIO', 'The student registers, then needs an onsite proctor', 'January 31, 2027'],
          ['Congressional App Challenge', 'The student registers, with parent details', 'October 26, 2026']
        ] },
        { kind: 'p', mt: true, html: 'The pattern is worth noticing: only the USA-NA-AIO and the Congressional App Challenge are student-registered. Everything else depends on an adult acting before the deadline, which is why our first advice to families is to ask the school in September which of these it already runs.' }
      ]
    },
    {
      id: 'count', tint: 'deep', eyebrow: 'The season at a glance',
      h2: 'How busy each month is',
      lede: 'Our count of the dated rows in the three tables above, by the month each row starts. It shows where the pressure falls in a typical year.',
      body: [
        { kind: 'table', caption: 'Dated rows per month, October 2026 to July 2027 (our count from this page)', head: ['Month', 'Rows', 'What dominates'], numCols: [1], rows: [
          ['October 2026', '6', 'CyberPatriot and the app challenge deadline'],
          ['November 2026', '8', 'Registration deadlines, Bebras and the first MOEMS contest'],
          ['December 2026', '8', 'SI Challenge deadlines and end-of-year registration'],
          ['January 2027', '7', 'ACSL windows, CyberPatriot Semifinals, USA-NA-AIO sign-up'],
          ['February 2027', '8', 'MATHCOUNTS chapter rounds and the AI olympiad'],
          ['March 2027', '8', 'MATHCOUNTS state, Math Kangaroo, CyberPatriot finals'],
          ['April 2027', '2', 'Quiet; ACSL and SI results'],
          ['May 2027', '4', 'MATHCOUNTS National and ACSL Finals'],
          ['June 2027', '2', 'SI Challenge nationals and the USAAIO camp'],
          ['July 2027', '1', 'IOAI in Singapore']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the count suggests',
          left: [
            'November, December, February and March tie as the heaviest months, and the first two are mostly deadlines rather than contests. A family that sorts registrations in October removes most of the fall stress.',
            'April is almost empty, which makes it the natural month to review the season and decide what to enter next year.'
          ],
          rightH3: 'How we counted',
          right: [
            'Each row in the three dated tables counts once, in the month it starts, including the two October rows that had already passed. Rows dated to a whole month or a range of months count in their first month.',
            'The count is a planning aid, not a measure of how hard any month is for a particular student.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Planning',
      h2: 'Turning this calendar into a season plan',
      lede: 'Our five steps for a family choosing what to enter. The idea is to work backwards from each deadline, so preparation starts early enough.',
      body: [
        { kind: 'ol', items: [
          '<b>Pick two or three competitions, not ten.</b> One that suits the student&rsquo;s strongest skill, and one that stretches them.',
          '<b>Find the earliest registration date for each</b> in the tables above, and the adult who must act on it.',
          '<b>Count back eight to twelve weeks from the first contest date.</b> That is when focused preparation should begin.',
          '<b>Put every date in a shared family calendar</b> with the source link, and check the link again a month before.',
          '<b>After each contest, write down three things to fix</b> before the next one on the list.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Elementary', p: 'Bebras and Math Kangaroo are gentle first contests; ACSL Elementary suits grades 3 to 6.' },
          { h3: 'Middle school', p: 'MATHCOUNTS, MOEMS and Bebras for math and logic; ACSL Junior and CyberPatriot for coding.' },
          { h3: 'High school', p: 'ACSL, CyberPatriot, the SI Challenge and the USA-NA-AIO, with USACO once dates appear.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four stages of a competition year',
    lede: 'A well-run season moves through these in order.',
    table: { caption: 'The shape of a well-run season (ours)', head: ['Stage', 'When it usually happens'], rows: [
      ['1. Choose', 'September or early October: decide on two or three events'],
      ['2. Register', 'October to December: every adult sign-up done early'],
      ['3. Compete', 'November to March: contests one after another'],
      ['4. Review', 'April to June: results, finals for some, plans for next year']
    ] },
    left: { h3: 'For parents', ps: [
      'The registration stage is where your help matters most. Several deadlines need an adult and fall before contests begin.',
      'Keep this page bookmarked, but always confirm on the organiser&rsquo;s own site before acting on a date.'
    ] },
    right: { h3: 'For students', ps: [
      'Look at the months, not just the days. Two contests in the same fortnight need a plan.',
      'Treat the first contest of the year as practice for the one you care most about.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses matched to the competitions in this calendar',
    lede: 'Live classes taught online by one regular teacher, in a group batch or one to one.',
    bands: [
      { num: 'I', h3: 'Coding contests', sub: 'ACSL, USACO, CyberPatriot', courses: [
        { code: 'UMAC / COD / 01', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Timed contest problems.' },
        { code: 'UMAC / COD / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'The structures behind them.' },
        { code: 'UMAC / COD / 03', slug: 'picoctf-cyberpatriot-cybersecurity-competition-prep-for-teens', title: 'Cybersecurity competitions', blurb: 'CyberPatriot and CTF.' }
      ] },
      { num: 'II', h3: 'Math contests', sub: 'MATHCOUNTS, Kangaroo, MOEMS', courses: [
        { code: 'UMAC / MTH / 01', slug: 'middle-school-math-competitions-course', title: 'Middle school math competitions', blurb: 'The three main contests.' },
        { code: 'UMAC / MTH / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'Beyond middle school level.' },
        { code: 'UMAC / MTH / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The base for every contest.' }
      ] },
      { num: 'III', h3: 'AI and building', sub: 'SI Challenge, USA-NA-AIO, apps', courses: [
        { code: 'UMAC / AI / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models built and explained.' },
        { code: 'UMAC / AI / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App development', blurb: 'An app challenge entry.' },
        { code: 'UMAC / AI / 03', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'A first project for younger kids.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes that follow the competition calendar',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Batches after school, in US time zones.' },
      { time: 'Weekends', l: 'Good for mock contests close to a date.' },
      { time: '1-on-1', l: 'Scheduled backwards from one student&rsquo;s deadlines.' }
    ],
    cells: [
      { h3: 'Deadline-aware', p: 'Lessons planned from the dates above.' },
      { h3: 'Mixed subjects', p: 'Coding, math and AI under one roof.' },
      { h3: 'Mock rounds', p: 'Timed practice before each contest.' },
      { h3: 'Season review', p: 'A spring check on what to enter next.' },
      { h3: 'Nationwide', p: 'Live online in every US time zone.' },
      { h3: 'Batch or one', p: 'A group of fifteen to twenty, or one learner.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'A few of the apps and tools our learners have made. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has the full set.',
  reviewsLede: 'Reviews from parents on Google, exactly as posted.',

  fees: {
    h2: 'Fees',
    lede: 'Competition entry is between families and each organiser. What we charge is for classes, billed monthly in US dollars with no season contract, so lessons can follow the calendar: more before a contest, a pause in a quiet month like April.',
    free: ['A free first lesson', 'Bring your shortlist of contests', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A private teacher', 'Planned from your dates', 'One plan for every contest']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'The 2026-27 competition calendar: questions families ask',
    items: [
      { q: 'What is the next big competition deadline for US students?', a: 'On the read date of 17 October 2026, the next was the Congressional App Challenge, due at noon EDT on Monday, October 26, 2026. The MATHCOUNTS Early Bird rate follows on November 3, 2026.' },
      { q: 'When are the Presidential SI Challenge deadlines?', a: 'Registration closes December 18, 2026 for teams, and projects must be in by December 23, 2026, in both cases at 5:00 p.m. Eastern. The state results come out between February 11 and 15, 2027.' },
      { q: 'When is MATHCOUNTS in 2027?', a: 'Chapter rounds fill February 2027 (1 to 28), state rounds fill March 2027 (1 to 31), and the National Competition meets in Washington, DC on May 9 and 10, 2027.' },
      { q: 'What are the USA-NA-AIO dates for 2027?', a: 'Round 1 takes place on February 19, 2027 (a Friday), 12:00 to 3:00 p.m. Eastern. Sign-ups end on January 31, 2027.' },
      { q: 'When are the 2026-27 USACO contests?', a: 'As of 17 October 2026, USACO had not yet posted a 2026-27 schedule. In the 2025-26 season its online contests ran in January and February with a proctored US Open in late March.' },
      { q: 'When is Math Kangaroo 2027?', a: 'Math Kangaroo USA says the contest is held on the 3rd Thursday in March, and the 2027 competition is in March 2027. Our own count of the calendar gives March 18, 2027; check with your center.' },
      { q: 'Why are the AMC contests missing?', a: 'Our request to the MAA site was refused with an access-denied response, and this calendar only prints dates read on the organiser\'s own site. Please check the MAA directly for AMC dates.' },
      { q: 'How often is this calendar updated?', a: 'Each refresh re-reads every source and changes the read date at the top. Until then, the source link in each row is the authority if a date has moved.' },
      { q: 'Do you organise any of these competitions?', a: 'We do not. Our part is teaching the skills these contests test; we play no role in running, judging or registering for any of them.' },
      { q: 'Can classes fit around these contest dates?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Guides to single competitions',
    lede: 'For the rules behind a row in this calendar.',
    items: [
      { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge', p: 'The 2026 rulebook explained.' },
      { href: '/usaco-preparation-online-coaching', label: 'USACO coaching', p: 'How the divisions work.' },
      { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation', p: 'Sprint to Countdown.' },
      { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo preparation', p: 'Getting ready for March.' },
      { href: '/acsl-competition-preparation', label: 'ACSL preparation', p: 'All four contests and the Finals.' },
      { href: '/cyberpatriot-preparation', label: 'CyberPatriot preparation', p: 'Rounds from October to March.' },
      { href: '/presidential-ai-challenge-guide', label: 'Presidential AI Challenge', p: 'Now the SI Challenge, renamed 29 September 2026.' },
      { href: '/picoctf-for-beginners', label: 'picoCTF for beginners', p: 'Practice before the next flagship.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'The same idea for the UK.' },
      { href: '/cybersecurity-classes-for-teens', label: 'Cybersecurity classes for teens', p: 'Cybersecurity for US teens: CyberPatriot, CyLab, AP Cybersecurity and a safe start.' },
      { href: '/technovation-girls-guide', label: 'Technovation Girls guide', p: 'Technovation Girls and the 2026-27 Technovation Challenge, from the official pages.' },
      { href: '/coding-competitions-for-high-school-students', label: 'Coding competitions for high school students', p: 'US high school coding competitions for 2026-27, from the organisers\' own rules.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Bring the two or three competitions your child is considering. The teacher looks at the dates with you, checks the skills each one needs, and suggests a starting point.',
    readFirst: 'If you want the background first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> sets out our method and the <a class="ag-inline-link" href="/courses">course list</a> shows each syllabus.',
    note: 'Classes run on live video with teachers in India; there is no local branch. US families tend to get the quickest answer on WhatsApp.',
    formNote: 'Free first lesson. No card asked.'
  },

  footer: {
    cols: [
      { h4: 'Competitions', links: [
        { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' },
        { href: '/usaco-preparation-online-coaching', label: 'USACO coaching' },
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation' },
        { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo preparation' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/math-olympiad-amc-tutoring', label: 'Math olympiad coaching' },
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar' }
      ] }
    ],
    bottomRight: 'Work backwards from the deadline'
  },

  personalityCss: `
.ag-root.ag-umac .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-umac .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-umac .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-umac .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-umac .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-umac .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'A calendar of organisers\' own published dates, read raw on 17 October 2026: ACSL schedule, finals and registration; CyberPatriot 19 schedule, join and overview pages; Congressional App Challenge 2026 rulebook and rules page; Presidential SI Challenge timeline; MATHCOUNTS Rules and FAQ and Competition Series; Math Kangaroo USA test and registration FAQs and home; MOEMS 2026-2027 contest windows; Bebras USA 2026 dates; USAAIO 2027 USA-NA-AIO and home; IOAI 2027. Undated: USACO (2025-26 only), CyLab flagship, CAC 2027, FIRST local events. Unreadable: MAA (403), Technovation (Cloudflare), Kaggle (JavaScript).',
    localProject: 'Our calculation of March 18, 2027 from Math Kangaroo\'s published 3rd Thursday rule; our count of dated rows per month (6, 8, 8, 7, 8, 8, 2, 4, 2, 1); our table of which adult registers for each competition; our five planning steps. Lesson family: working backwards from a deadline.',
    requiredMentions: ['October 26, 2026, 12:00 pm EDT', 'October 13, 2026 (passed)', 'December 18, 2026, 5:00 p.m. ET', 'December 23, 2026, 5:00 p.m. ET', 'February 19, 2027, 12:00 to 3:00 p.m. ET', 'January 31, 2027, 11:59 p.m. EST', 'March 18, 2027 (our calculation)', 'March 12 to 16, 2027', 'May 1 to 28, 2027', 'May 29, 2027', 'Eleven with published dates', 'March 31, 2027, 11:59 pm PT', 'November, December, February and March tie', 'only the USA-NA-AIO and the Congressional App Challenge are student-registered'],
    sources: [
      { claim: 'ACSL 2026-27 contest windows, registration deadline, invitations and Finals.', url: 'https://www.acsl.org/get-started/schedule' },
      { claim: 'CyberPatriot 19 deadlines, rounds and finals.', url: 'https://www.uscyberpatriot.org/competition-schedule/' },
      { claim: 'Presidential SI Challenge 2026-27 timeline.', url: 'https://orise.orau.gov/si-challenge/about/timeline.html' },
      { claim: 'MATHCOUNTS 2026-27 registration and competition dates.', url: 'https://www.mathcounts.org/programs/competition-rules-faq' },
      { claim: 'Math Kangaroo USA registration windows and date rule.', url: 'https://mathkangaroo.org/mks/faqs/about-the-test/' },
      { claim: 'MOEMS 2026-2027 contest windows and score deadline.', url: 'https://www.moems.org/' },
      { claim: 'Bebras USA 2026 dates.', url: 'https://www.bebraschallenge.org/' },
      { claim: 'USA-NA-AIO 2027 registration, Round 1, Round 2 and camp; IAIO 2027.', url: 'https://usaaio.org/2027-usa-na-aio' },
      { claim: 'IOAI 2027 dates and host.', url: 'https://ioai-official.org/' },
      { claim: 'Congressional App Challenge 2026 deadline, judging, winners and embargo.', url: 'https://www.congressionalappchallenge.us/students/rules/' }
    ],
    rejectedClaims: [
      'USACO 2026-27 dates: not published on 17 October 2026; only the 2025-26 schedule is described, labelled as such.',
      'AMC 8, 10 and 12 dates: maa.org returned 403; not circumvented, not printed.',
      'Technovation season dates: the official site returned a Cloudflare block.',
      'Kaggle competition dates: JavaScript-only pages, nothing readable raw.',
      'An official 2027 Math Kangaroo day: not published; March 18, 2027 is labelled as our calculation.',
      'Dates from third-party calendars or news sites: never used.',
      'CyberPatriot Training Round 2 end date: the official page prints "Jan 19, 2026", an evident typo, so the row is left out.',
      'Any affiliation with the organisers: none, stated on the page.'
    ]
  }
};
