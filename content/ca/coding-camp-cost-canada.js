'use strict';
// Coding camp cost in Canada (ag- market door; Canada cluster Plan 2, row 84, cost family).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Owner 2026-10-24 (CAD live): a cost page may print other providers' fees as published, in Canadian dollars, only inside
// <span data-market-price data-no-price-swap>; our own fees only through data-price anchors. marketPrices: true.
// Every provider figure below was fetched raw (curl -sL -A "Mozilla/5.0") on 31 October 2026 and grepped; copies and the
// exact quotes are in keyword-research-2026-09/ca/src-pilots/coding-camp-cost-canada/ (SOURCES.txt):
//  - University of Waterloo, ESQ Summer Camps (summer 2026, "now complete for the season"): "$362" a week, "Week 5 August
//    4 - 7 $290"; grades "2-3, 4-5, 6-7, and 8-9"; "Programming: 9:00 am - 4:00 pm", drop off 8:30, pick up by 4:30;
//    extended care 8:00 to 8:30 and 4:30 to 5:00 "Price: $5/week"; bursary applications "December 16, 2025" to
//    "January 16, 2026". Paid programs: cancellation "$25" after confirmation, "$50" after May 29, 2026, no refund within
//    1 week. Bursaries page: "Summer 2026 bursary applications are now closed and bursary amounts have been fully allocated".
//  - University of Ottawa: EngTech (grades 4 to 6, "coding, and micro:bit activities") "$349 per week" and "$285 per
//    week for four-day weeks"; uOttawa campus "9 a.m. to 4 p.m." with "a free before- and after-camp program from 8 a.m.
//    to 9 a.m. and from 4 p.m. to 5 p.m."; closed July 1 and August 3, 2026. TeenTech (completed Grade 7, 8 or 9)
//    "$365 per week ($295 per week for four-day weeks)", 9 a.m. to 4 p.m. Spring break STEM camp: grades 2 to 6,
//    "March 16 to 20, 2026", "8:30 a.m. to 4:30 p.m.", "Cost: $345 for the week", "coding with micro:bits".
//  - Western University, Discovery Western (summer 2026, grade entering Fall 2026): "$275 per camper" four-day, "$325 per
//    camper" five-day, "does not include before and after care"; extended care "$25 for before care", "$25 for after
//    care"; "9:00 am to 4:00 pm: Summer Camp Activities"; WESA "(Grade 7 - 12) is $350"; HST included for Grades 9-12;
//    bursaries "limited number", reviewed "in batches".
//  - University of Victoria, Science Venture (2026, "June 29, 2026 to August 28, 2026"): "5-Day Camps : $350",
//    "4-Day Camps : $280"; extended hours "$25" per morning or afternoon option (5-day), "$20" (4-day); "Maker and Coding
//    Camps"; "9 a.m to 4 p.m."; Grades 1-8 entering Fall 2026; refund "minus a $50 cancellation fee".
//  - Ontario Tech University, Code Away! (2026 camp pages; the breadcrumb says 2025 but the URL and the weekday dates are
//    2026): "Ages 6* to 8", Scratch, "Week 3: Monday, July 13 to Friday, July 17 (5-days)", "9 a.m. to 4 p.m.",
//    "Cost: $350", before/after care "for an additional fee".
//  - McMaster Venture: "The camp day runs from 9:00", "offered for 7 different weeks"; activities "like a coding"; no fee on
//    the page. USask SCI-FI: "start at 9:00am and end at 3:30pm", "Computer Science Camps", bursary program "now full for
//    the 2026 Summer Camp Season", refund "minus a $50 non-refundable deposit" (2020 prices in an HTML comment NOT used).
//    WISE Kid-Netic Energy: "For Summer 2027, we will be offering our 5-day STEM Camps", subsidies for its own camps; no
//    fee. Code Ninjas camps page: "AGES 5 TO 14", no fee printed. Coding with Kids online camps: priced in another
//    currency, not printed.
//  - Blocked, not used: UBC Geering Up (browser verification), U of T outreach, Dalhousie SuperNOVA, U of A DiscoverE,
//    Actua (403), City of Vancouver (403); canada.ca (CRA line 21400) timed out three times, so no CRA wording is quoted.
// Our own camp, from our pages only (read 31 October 2026): summer-coding-camp "8 One-to-One Classes", "2-3 Weeks
// Intensive", "5 Deployable Projects", "Every seat is one-to-one"; winter-coding-camp "3-Week Intensive", "100% Online";
// tracks 6-12 / 12-17 / 18+ (summer) and 6-11 / 12-17 / 18+ (winter); sessions 60 to 75 minutes (kids), 90 (teens),
// 90 to 120 (adults). Fee only via camps.canada.oneTime. Track pages also print "16 Live Interactive Sessions" and a
// batch line: not used, reported. Monthly classes via coding.canada.group / coding.canada.personal.
// Our calculations, labelled on the page: fee / printed hours (35 h for a 9-to-4 week, 40 h for 8:30 to 4:30): ESQ 10.34
// and 9.05, Western 9.29, uOttawa EngTech 9.97, TeenTech 10.43, UVic 10.00, Ontario Tech 10.00; ESQ per day 72.40 and
// 72.50 (short week); our kids track 8 x 60 to 75 min = 8 to 10 hours one to one. Python program run 31 October 2026.
// Lesson family: unit rates (dividing a price by the quantity it buys).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

// A provider's fee, exactly as published, in Canadian dollars. Never swapped by the pricing script.
const M = s => `<span data-market-price data-no-price-swap>${s} CAD</span>`;
// Our own fees: data-price anchors only.
const CAMP = '<span data-price="camps.canada.oneTime">$280</span> <span class="fee-cur" data-price-currency>CAD</span>';
const GROUP = '<span data-price="coding.canada.group">$140</span> <span class="fee-cur" data-price-currency>CAD</span>';
const ONE = '<span data-price="coding.canada.personal">$210</span> <span class="fee-cur" data-price-currency>CAD</span>';

const RATE = `# Our program: what a week of day camp costs per hour (written by Modern Age Coders)
# Each fee and each start and end time is copied from the camp's own page.
camps = [
    ("Waterloo ESQ, 5-day week",     362, "9:00", "16:00", 5),
    ("Western, Discovery Western",   325, "9:00", "16:00", 5),
    ("uOttawa, EngTech (Gr. 4-6)",   349, "9:00", "16:00", 5),
    ("UVic, Science Venture",        350, "9:00", "16:00", 5),
]

def hours(start, end):
    h1, m1 = map(int, start.split(":"))
    h2, m2 = map(int, end.split(":"))
    return (h2 * 60 + m2 - h1 * 60 - m1) / 60

for name, fee, start, end, days in camps:
    week = hours(start, end) * days
    print(f"{name:30} {week:4.0f} h a week  {fee / week:6.2f} an hour")`;

const RATE_OUT = `Waterloo ESQ, 5-day week         35 h a week   10.34 an hour
Western, Discovery Western       35 h a week    9.29 an hour
uOttawa, EngTech (Gr. 4-6)       35 h a week    9.97 an hour
UVic, Science Venture            35 h a week   10.00 an hour`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  marketPrices: true,
  hub: { group: 'guide', tag: 'COST', blurb: 'What coding and STEM camps charge per week in Canada, from the camps\' own 2026 pages, what pushes a fee up or down, and what our live online holiday camp costs.' },
  slug: 'coding-camp-cost-canada',
  code: 'ccma',
  accent: '#4B6444',
  accentRationale: 'Coding camp cost, Canada: a muted moss green #4B6444, allocated for this row at least 6 RGB units from every site accent and 14 from every other Canada accent; contrast 6.18 on the paper #FBF8F2 and 5.32 on #EDE7DA',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'online-coding-summer-camp-canada', name: 'Online coding summer camp' }],
  routeLabel: 'Coding camp cost',
  title: 'Coding Camp Cost in Canada: 2026 Weekly Fees Compared',
  description: 'What coding and STEM camps cost in Canada per week: 2026 fees from university day camps, what changes the price, and the fee for our live online holiday camp.',
  ogDescription: 'Weekly fees for coding and STEM day camps at Waterloo, Ottawa, Western, UVic and Ontario Tech, taken from their own 2026 pages, with the hours each fee buys and what our online camp costs.',
  twitterDescription: 'Coding camp fees in Canada, 2026: what a week costs, what it buys per hour, and how to compare camps fairly.',
  pageName: 'Coding Camp Cost in Canada',
  webPageDescription: 'A cost guide for Canadian families comparing published 2026 weekly fees for university and non-profit coding and STEM day camps, the extras that change the price, bursaries, a per-hour worked example with an original Python program, and the one-payment fee for the Modern Age Coders live online holiday camp.',
  courseDescription: 'A live online holiday coding camp for students across Canada: eight one-to-one classes over two to three weeks, paid once, with monthly batch or one-to-one classes after it if the family wants to continue.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Coding camp cost',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#fees-table', label: 'Weekly fees' },
    { href: '#drivers', label: 'What changes the price' },
    { href: '#per-hour', label: 'Per hour' },
    { href: '#compare', label: 'Compare fairly' },
    { href: '#ours', label: 'Our camp' }
  ],
  eyebrow: 'Canada &middot; Camp fees 2026 &middot; Day camps and online camps',
  h1: 'Coding camp cost in Canada: what a week of camp really costs',
  lede: 'Parents searching for a coding camp price in Canada usually find a fee with no context: a number for a week, sometimes for four days, sometimes with care hours on top. We went to the camps\' own pages instead. This guide prints the 2026 weekly fees that university and non-profit coding and STEM camps publish, exactly as they publish them, shows what each week includes and what it leaves out, works out what each fee buys per hour (our arithmetic, shown), and explains how our own live online holiday camp is priced: one payment for eight one-to-one classes, taught from home in your own time zone.',
  secondaryCta: { href: '#fees-table', label: 'See the weekly fees' },
  wa: 'Hello Modern Age Coders, we are comparing coding camps in Canada for our child. Could you tell us about your online holiday camp?',
  heroNote: 'Teaching live online since 2020 &middot; students aged 6 to 67 &middot; camp fee paid once, shown in your own currency',
  spec: [
    ['Five-day university STEM week, summer 2026', M('$325 to $365') + ' as published'],
    ['Four-day holiday week, summer 2026', M('$275 to $295') + ' as published'],
    ['uOttawa March Break week, 2026', M('$345') + ' as published'],
    ['Typical camp day', '9 a.m. to 4 p.m., as most camps list it'],
    ['Before and after care', 'Free at one camp, charged at others'],
    ['Our online holiday camp', CAMP + ', paid once'],
    ['What it includes', 'Eight one-to-one live classes, two to three weeks'],
    ['Our monthly classes', GROUP + ' in a batch, ' + ONE + ' one to one']
  ],
  capsuleQ: 'In short',
  capsule: `Canadian university and non-profit STEM day camps listed ${M('$325 to $365')} for a five-day summer week in 2026, for about seven hours a day. Four-day holiday weeks cost less; teen streams and paid before or after care cost more; franchises such as Code Ninjas set fees locally. Modern Age Coders' live online holiday camp is one payment of ${CAMP} for eight one-to-one classes, in tracks such as Young Innovators (ages 6 to 12).`,

  picks: {
    eyebrow: 'Courses a camp can lead into',
    h2: 'Three courses that carry on after a camp ends',
    lede: 'A camp is a start. These are the courses our camp students most often continue with, live online in a batch or one to one.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'CCMA / 01', title: 'Scratch Coding for Kids', note: 'For ages 6 to 9 who finished a camp week with a half-built game. Blocks, taught properly, until the game is done and the child can explain every script.' },
      { course: 'python-ai-kids-masterclass', code: 'CCMA / 02', title: 'Python and AI for Kids', note: 'For ages 9 to 12 ready to type real code. Turtle art, quiz games and small AI projects, with the reasoning taught before the shortcut.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', code: 'CCMA / 03', title: 'JavaScript for Teens', note: 'For teens who met web pages at camp and want to build interactive sites and browser games that actually run.' }
    ]
  },

  sections: [
    {
      id: 'fees-table', tint: 'tint', eyebrow: 'The weekly fees',
      h2: 'What coding and STEM camps charge per week in Canada, summer 2026',
      lede: 'Every fee below is copied from the camp\'s own website, as published, for the season named. We checked each page on 31 October 2026, after the 2026 season had ended, so these are the most recent full-season fees on record; 2027 fees were not yet out at most camps. The last column is our arithmetic, not the camp\'s: the weekly fee divided by the hours of programming the camp lists.',
      body: [
        { kind: 'table', caption: 'Published weekly camp fees in Canada, 2026, with our per-hour arithmetic (fees as listed on each provider\'s site, checked 31 October 2026)', head: ['Provider and camp', 'Who it is for', 'Season', 'Fee as published', 'Hours as published', 'Per programmed hour (ours)'], rows: [
          ['University of Waterloo, Engineering Science Quest (ESQ)', 'Grades 2-3, 4-5, 6-7 and 8-9', 'Summer 2026', M('$362') + ' a week; ' + M('$290') + ' for the four-day week of 4 to 7 August', 'Programming 9:00 am to 4:00 pm', M('$10.34')],
          ['University of Ottawa, EngTech (coding, robotics, micro:bit)', 'Grades 4 to 6 on the uOttawa campus', 'Summer 2026', M('$349') + ' a week; ' + M('$285') + ' for four-day weeks', '9 a.m. to 4 p.m.', M('$9.97')],
          ['University of Ottawa, TeenTech (electronics, coding, programming)', 'Completed Grade 7, 8 or 9', 'Summer 2026', M('$365') + ' a week; ' + M('$295') + ' for four-day weeks', '9 a.m. to 4 p.m.', M('$10.43')],
          ['Western University, Discovery Western', 'Senior Kindergarten to Grade 6', 'Summer 2026', M('$325') + ' for a five-day week; ' + M('$275') + ' for a four-day camp', 'Camp activities 9:00 am to 4:00 pm', M('$9.29')],
          ['University of Victoria, Science Venture (includes Maker and Coding Camps)', 'Entering Grades 1 to 8', 'Summer 2026', M('$350') + ' for 5-day camps; ' + M('$280') + ' for 4-day camps', '9 a.m. to 4 p.m.', M('$10.00')],
          ['Ontario Tech University, Code Away! (Scratch and robots)', 'Ages 6 to 8', 'Summer 2026', M('$350') + ' for a five-day week', '9 a.m. to 4 p.m.', M('$10.00')],
          ['University of Ottawa, spring break STEM camp', 'Grades 2 to 6', 'March Break 2026 (16 to 20 March)', M('$345') + ' for the week', '8:30 a.m. to 4:30 p.m.', M('$8.63')],
          ['Modern Age Coders, live online holiday camp', 'Tracks for ages 6 to 12, 12 to 17 and 18+', 'Summer and winter camps', CAMP + ' paid once for the whole camp', 'Eight one-to-one classes; 60 to 75 minutes each on the kids track', 'Not a day camp: 8 to 10 hours of one-to-one teaching on the kids track (ours)']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://uwaterloo.ca/engineering-outreach/programs/engineering-science-quest/summer-camps" rel="noopener" target="_blank">University of Waterloo ESQ Summer Camps</a>, <a class="ag-inline-link" href="https://www.uottawa.ca/faculty-engineering/outreach/summer-camps-kids" rel="noopener" target="_blank">uOttawa summer camps for kids</a>, <a class="ag-inline-link" href="https://www.uottawa.ca/faculty-engineering/outreach/summer-camps-teens" rel="noopener" target="_blank">uOttawa summer camps for teens</a>, <a class="ag-inline-link" href="https://www.uottawa.ca/faculty-engineering/outreach/spring-break-camps-kids" rel="noopener" target="_blank">uOttawa spring break camps</a>, <a class="ag-inline-link" href="https://www.eng.uwo.ca/outreach/pre-university-programs/summer-camp/general-information.html" rel="noopener" target="_blank">Discovery Western general information</a>, <a class="ag-inline-link" href="https://www.scienceventure.ca/camps/about-summer-camps" rel="noopener" target="_blank">Science Venture, About Summer Camps</a> and <a class="ag-inline-link" href="https://ontariotechu.ca/continuouslearning/programs/camps-children-and-youth/summer-camps/2026-explore-our-camps/2026-camp-descriptions/code-away.php" rel="noopener" target="_blank">Ontario Tech, Code Away!</a>, each checked on 31 October 2026. Fees are as listed on each provider\'s site for the season shown. The per-hour column is our own division of the five-day fee by the programmed hours the camp lists (35 hours for a 9-to-4 week, 40 hours for 8:30 to 4:30) and is not a figure any camp publishes. Our own fee is shown in your currency. Modern Age Coders is not connected with any of these universities.' },
        { kind: 'two', mt: true,
          leftH3: 'What the table says, in one line',
          left: [
            `Among the university-run weeks we checked, the 2026 five-day fees sat between ${M('$325')} at Western and ${M('$365')} for uOttawa TeenTech, and almost every one ran from 9 in the morning to 4 in the afternoon. Divide the fee by those seven hours a day and every camp lands at roughly ten dollars per programmed hour (our arithmetic).`,
            'That closeness is the useful finding. When the fees are this similar, the price alone tells you very little. What separates one camp from another is how many of those hours are spent coding, how many children share each leader, and what your child carries home on Friday.'
          ],
          rightH3: 'What the table does not cover',
          right: [
            'We printed only fees we could read on the provider\'s own site. Some well-known camps hide their fee inside a registration system, some block automated reading, and franchises usually set prices centre by centre. Those are listed further down, with what each page did and did not say.',
            'We did not average these camps or add their fees together. Each row stands alone, for its own season, so you can check it against the camp\'s page and see if anything has changed for 2027.'
          ] }
      ]
    },
    {
      id: 'drivers', eyebrow: 'Why fees differ',
      h2: 'Six things that change what a coding camp costs',
      lede: 'Two camps can print the same weekly fee and still cost a family very different amounts. These are the levers we found on the camps\' own pages, with the figure each camp gives.',
      body: [
        { kind: 'table', caption: 'What moves the price of a camp week, with the published example for each (camp pages checked 31 October 2026)', head: ['Price lever', 'What the camp publishes', 'What it means for your total'], rows: [
          ['Length of the week', `Waterloo ESQ: ${M('$362')} a week, ${M('$290')} for 4 to 7 August; Science Venture: ${M('$350')} for 5 days, ${M('$280')} for 4`, 'Holiday weeks are shorter and cheaper; per day, ESQ\'s short week is almost the same as a full one (our arithmetic below)'],
          ['Age or grade', `uOttawa: ${M('$349')} for the kids\' camps, ${M('$365')} for teens; Western: ${M('$325')} for SK to Grade 6, ${M('$350')} for its Grade 7 to 12 academy (WESA)`, 'Teen streams tend to cost a little more than junior ones at the same university'],
          ['Morning and afternoon care', `ESQ: ${M('$5')} a week for each extension; Western: ${M('$25')} for before care and ${M('$25')} for after care; Science Venture: ${M('$25')} for mornings or afternoons on 5-day weeks`, 'Care can be free, small or a real add-on; ask before you compare'],
          ['Free care, where offered', 'uOttawa campus: "a free before- and after-camp program from 8 a.m. to 9 a.m. and from 4 p.m. to 5 p.m."', 'A family that needs 8 to 5 coverage pays nothing extra here'],
          ['Tax on older students', 'Western: "Programs for students in Grade 9-12 are subject to HST charges, which are included in your cost of registration."', 'Check whether a teen fee already includes HST or adds it'],
          ['Cancelling or switching', `ESQ: ${M('$25')} after confirmation, ${M('$50')} after 29 May 2026, no refund in the final week; Science Venture: refund minus a ${M('$50')} cancellation fee`, 'Book late only if you are sure; the cheapest camp can cost more if plans change']
        ] },
        { kind: 'source', html: 'Sources: the Waterloo <a class="ag-inline-link" href="https://uwaterloo.ca/engineering-outreach/registration/paid-programs" rel="noopener" target="_blank">Engineering Outreach paid programs</a> page and the camp pages named under the first table, plus the <a class="ag-inline-link" href="https://www.eng.uwo.ca/outreach/pre-university-programs/summer-camp/registration.html" rel="noopener" target="_blank">Discovery Western registration</a> page, all for summer 2026, checked 31 October 2026. Care charges are quoted as each camp words them; we do not convert one camp\'s care fee into another\'s unit.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Holidays shorten weeks', p: 'uOttawa lists itself closed on July 1, 2026 (Canada Day) and August 3, 2026 (the Ontario civic holiday), so those weeks run four days at a lower fee. Most Ontario camps we read did the same.' },
          { h3: 'Lunch is usually yours', p: 'uOttawa asks every camper to bring "their own peanut/nut-free lunch and snacks", except in its sports stream, where lunch is included and the fee is higher. Count lunches as a cost of a day camp.' },
          { h3: 'Getting there', p: 'McMaster says "There is no transportation being offered this year." A campus camp means two drives a day or transit for a week, which never appears on the fee line.' }
        ] },
        { kind: 'p', mt: true, html: '<b>One more lever: your own calendar.</b> Each camp stream at Waterloo "runs the same content each week", and uOttawa numbers its EngTech weeks 1 to 4 so a child can attend four weeks without repeating a project. If you plan more than one week, ask which weeks repeat content. Paying twice for the same projects is the easiest overspend to avoid.' }
      ]
    },
    {
      id: 'kinds', tint: 'tint', eyebrow: 'Four kinds of camp',
      h2: 'University camps, city camps, private centres and online camps',
      lede: 'Canadian families meet four broad kinds of coding camp. They price themselves in different ways, and they publish their prices in different places, which is why a quick search rarely gives a straight answer.',
      body: [
        { kind: 'table', caption: 'How each kind of coding camp in Canada shows its price (what we found on 31 October 2026)', head: ['Kind of camp', 'Where the fee lives', 'What we found', 'Good to ask'], rows: [
          ['University and non-profit STEM camps', 'Usually on the camp\'s own web page', 'Waterloo, uOttawa, Western, UVic and Ontario Tech print weekly fees; McMaster\'s page describes a 9-to-4 camp day over seven weeks but leaves the fee to its registration system; WISE Kid-Netic Energy in Manitoba says its 2027 five-day camps are coming, with "more details to be announced"', 'How much of the day is coding, and who leads it'],
          ['City and municipal recreation camps', 'Inside each city\'s online registration catalogue', 'We did not quote any city fee: the catalogues are search tools rather than pages, and one large city\'s camp page refused our request', 'Whether a "tech" camp has a coding instructor or a general camp leader'],
          ['Private centres and franchises', 'At each local centre', 'The Code Ninjas national camps page describes camps for "AGES 5 TO 14" and asks you to find a location; it prints no fee', 'The weekly fee, the daily hours and the ratio at your local centre'],
          ['Live online camps', 'On the provider\'s site, sometimes in another currency', 'One large online provider prices its camps in a non-Canadian currency, so we left it out; our own camp fee shows in your currency', 'How many live hours, and is the class one to one or a group']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.eng.mcmaster.ca/community/outreach-programs/summer-camp/" rel="noopener" target="_blank">McMaster Venture summer programs</a>, <a class="ag-inline-link" href="https://www.wisekidneticenergy.ca/summer" rel="noopener" target="_blank">WISE Kid-Netic Energy, summer</a> and <a class="ag-inline-link" href="https://www.codeninjas.com/camps" rel="noopener" target="_blank">Code Ninjas camps</a>, read 31 October 2026. We never quote fees from third-party camp directories, only from the provider itself.' },
        { kind: 'two', mt: true,
          leftH3: 'Why franchise fees are hard to find',
          left: [
            'A franchise such as Code Ninjas runs one national website, but each centre is locally owned and sets its own camp calendar. The national page sells the idea ("Code Ninjas Camps empower kids to gain valuable tech skills and make new friends") and then hands you to a location finder.',
            'That is normal for franchises, not a warning sign. It does mean the only honest way to learn a Code Ninjas camp price is to ask the centre near you, in writing, with the hours of the day and the number of children per leader.'
          ],
          rightH3: 'What a university camp is really selling',
          right: [
            'University outreach camps are mostly broad STEM weeks rather than coding weeks. Waterloo describes its camps as activities that "explore science, technology, engineering and math (STEM)", and Western\'s sample day includes icebreakers, games, two nutrition breaks and physical activity alongside the science.',
            'That is a good week for a curious child. It is a different purchase from a coding course: coding is one strand of the day, and the leaders are university students. Both points are worth knowing before you compare a camp fee with a class fee.'
          ] }
      ]
    },
    {
      id: 'per-hour', eyebrow: 'Worked example (ours)',
      h2: 'What a week of camp costs per hour, worked out',
      lede: 'A weekly fee only becomes comparable once you divide it by what it buys. Here is our worked example on the published Waterloo figures, then a short Python program that does the same for four camps. The method is the point: the answer changes with the hours you divide by.',
      body: [
        { kind: 'table', caption: 'Our worked example: one ESQ week at the University of Waterloo, summer 2026, divided three ways (fee and times from the camp page; arithmetic ours)', head: ['Divide the fee by', 'Hours in the week', 'Result (ours)'], rows: [
          ['Programmed hours, 9:00 am to 4:00 pm, five days', '35', M('$10.34') + ' per programmed hour'],
          ['Door to door, drop-off from 8:30 to pick-up by 4:30, five days', '40', M('$9.05') + ' per supervised hour'],
          ['Days in the week', '5 days', M('$72.40') + ' per day'],
          ['Days in the short week of 4 to 7 August, at its own fee', '4 days', M('$72.50') + ' per day']
        ] },
        { kind: 'source', html: 'Inputs from the <a class="ag-inline-link" href="https://uwaterloo.ca/engineering-outreach/programs/engineering-science-quest/summer-camps" rel="noopener" target="_blank">ESQ Summer Camps</a> page: a week at ' + M('$362') + ', the short week at ' + M('$290') + ', "Programming: 9:00 am - 4:00 pm", drop off from 8:30 and pick up by 4:30. The divisions are ours, rounded to the cent.' },
        { kind: 'p', mt: true, html: '<b>Door to door, the same week works out at a lower hourly figure</b>, simply because you divide by more hours. Neither figure is wrong. The first tells you what the planned activities cost; the second tells you what the supervision costs. If what you are buying is childcare for working hours, the second is the fairer number. If what you are buying is learning, even the first is generous, because not every programmed hour is a coding hour.' },
        { kind: 'code', label: 'Our program &middot; weekly fee to hourly rate', lang: 'python', code: RATE },
        { kind: 'code', label: 'What it prints', lang: 'text', code: RATE_OUT, note: 'Run under Python on 31 October 2026. The fees are the published 2026 five-day fees; every camp here lists a 9-to-4 day, so each week is 35 hours. Change the start and end times to your own drop-off and pick-up and the hourly rate drops.' },
        { kind: 'two', mt: true,
          leftH3: 'Divide by the hours, then ask which hours are coding',
          left: [
            'The program can only divide by the hours a camp prints. The question it cannot answer is how many of those 35 hours your child spends writing and fixing code. In a broad STEM week that might be one session a day; in a dedicated coding week it might be most of the afternoon.',
            'Ask the camp for its daily schedule. Waterloo, for one, sends registered families "a weekly schedule of the activities/tours", so the number exists. Once you have it, divide the fee by the coding hours alone, and you have the figure that is actually comparable with a coding class.'
          ],
          rightH3: 'The same sum for our camp',
          right: [
            'Our holiday camp is not a day camp, so we do not pretend its hours match. On the kids track it is eight one-to-one classes of 60 to 75 minutes, which is 8 to 10 hours of a teacher working with one child (our arithmetic from our camp pages). On the teen track each class is 90 minutes, so 12 hours.',
            'Divide the one camp payment shown on this page by those hours and you have our rate per teaching hour, in your own currency. Every one of those hours is coding, and every one is one to one. It buys no supervision at all, which is exactly why many families do both.'
          ] }
      ]
    },
    {
      id: 'compare', tint: 'tint', eyebrow: 'A fair comparison',
      h2: 'How to compare coding camps fairly, in seven steps',
      lede: 'Use these steps on any camp, including ours. They turn a list of weekly fees into a decision you can defend.',
      body: [
        { kind: 'ol', items: [
          '<b>Write down the fee exactly as the camp publishes it, with its season.</b> A 2026 fee is a record, not a promise for 2027. Note whether it is for a five-day or a four-day week, and whether tax is included.',
          '<b>List every extra the week needs.</b> Morning care, afternoon care, lunches, transport, any optional add-ons. Some are free (uOttawa\'s 8-to-9 and 4-to-5 program on campus); some are not. Keep each as its own line rather than folding them into one guess.',
          '<b>Count the hours of instruction, not the hours of the day.</b> Ask for the daily schedule and mark the hours spent coding or building. A 9-to-4 day with a long lunch, outdoor games and a tour has far fewer teaching hours than seven.',
          '<b>Ask the ratio, and who the leaders are.</b> How many children share one leader during the coding blocks? Are the leaders trained teachers, university students or volunteers? Ontario Tech, for example, advertises "certified teacher camp counsellors"; ask every camp the same question.',
          '<b>Ask what your child will build, and keep.</b> A finished project the child can open at home and explain is worth more than five half-finished ones left on a camp laptop. Ask whether projects can be taken home or shared online.',
          '<b>Check what happens afterwards.</b> Does anything continue after Friday? A camp that ends with a clear next step (a club, a course, the same teacher) turns a week into a start. One that simply ends is a good week, and that is all.',
          '<b>Only then compare prices.</b> Divide the fee by the coding hours from step 3. Put each camp, and any online option, on that same footing, with its extras listed beside it. The cheapest week per coding hour is rarely the cheapest week on the fee line.'
        ] },
        { kind: 'p', mt: true, html: 'Our promise sits inside steps 3 and 5. We show students how to reason a problem out and write the code themselves, never to lift an answer from someone else or hand the thinking to an AI tool. The same quality of teaching reaches a child in Halifax, Saskatoon or Surrey as one in India or anywhere else we teach, because the class is live and the teacher is the same.' }
      ]
    },
    {
      id: 'ours', eyebrow: 'Our camp',
      h2: 'What our live online holiday camp costs, and what it includes',
      lede: 'Modern Age Coders runs its holiday camps entirely online. Everything below comes from our own camp pages, read in full on 31 October 2026. The fee is one payment for the whole camp, shown here in your own currency.',
      body: [
        { kind: 'table', caption: 'Our holiday camp next to a university day camp week (our camp pages, read 31 October 2026; day camp facts from the ESQ page)', head: ['', 'Our live online holiday camp', 'A university STEM day camp week (ESQ example)'], rows: [
          ['Fee', CAMP + ', one payment for the whole camp', M('$362') + ' for one five-day week, summer 2026'],
          ['Length', 'Two to three weeks for the summer camp; three weeks for the winter camp', 'One week, Monday to Friday'],
          ['Teaching', 'Eight live one-to-one classes with a dedicated mentor', 'University-level staff leading group STEM activities'],
          ['Class or day length', '60 to 75 minutes (kids), 90 minutes (teens), 90 to 120 minutes (adults)', 'Programming from 9:00 am to 4:00 pm'],
          ['Projects', 'Five projects, with a completion certificate', 'Different content in each camp stream'],
          ['Ages', 'Summer tracks for 6 to 12, 12 to 17 and adults 18+', 'Grades 2 to 9'],
          ['Where', 'At home, anywhere in Canada', 'On the Waterloo campus (and one week in Cambridge)'],
          ['Care hours', 'None: this is teaching, not childcare', 'Extensions from 8:00 and until 5:00 at a small weekly charge']
        ] },
        { kind: 'source', html: 'Our pages: <a class="ag-inline-link" href="/summer-coding-camp" rel="noopener">summer coding camp</a> ("8 One-to-One Classes", "2-3 Weeks Intensive", "5 Deployable Projects"), <a class="ag-inline-link" href="/winter-coding-camp" rel="noopener">winter coding camp</a> ("3-Week Intensive", "100% Online"), and the <a class="ag-inline-link" href="/summer-coding-camp-kids" rel="noopener">kids</a>, <a class="ag-inline-link" href="/summer-coding-camp-teens" rel="noopener">teens</a> and <a class="ag-inline-link" href="/summer-coding-camp-adults" rel="noopener">adults</a> tracks for class lengths. Comparison facts from the ESQ page, summer 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Eight one-to-one classes, one payment',
          left: [
            'The camp is built around a Foundation week, a Deep Dive week and a Launch week: set up and first project, then harder ideas, then polishing and presenting. Our summer camp page puts it plainly: "Every seat is one-to-one: a dedicated mentor, fully personalized attention".',
            `You pay ${CAMP} once, before the first class. There is no monthly charge for the camp itself. If your child wants to keep going afterwards, regular classes are billed monthly: ${GROUP} a month in a batch of 15 to 20, or ${ONE} a month one to one, each for eight live classes.`
          ],
          rightH3: 'When a day camp is the better buy',
          right: [
            'If you need someone to look after your child from nine to four, an online camp does not do that and we will not pretend it does. A campus day camp gives supervision, friends, outdoor time and a week away from home; many of the fees above are fair prices for that.',
            'If what you want is coding skill, a teacher who works with your child alone for each class is the more direct purchase. Plenty of Canadian families book a campus week for July and our camp, or monthly classes, for the rest of the break.'
          ] }
      ]
    },
    {
      id: 'help', tint: 'tint', eyebrow: 'Bursaries and refunds',
      h2: 'Bursaries, subsidies and refund rules that change the real cost',
      lede: 'Several of the camps above help families who cannot meet the full fee, and each has its own rules on refunds. Both can matter as much as the headline price.',
      body: [
        { kind: 'table', caption: 'Financial help and refund terms published by the camps (as listed on each provider\'s site, checked 31 October 2026)', head: ['Camp', 'Help with the fee', 'Refund or deposit rule'], rows: [
          ['Waterloo Engineering Outreach (ESQ)', 'Bursaries for families "demonstrating need"; for summer 2026, applications opened 16 December 2025 and closed 16 January 2026, and the page now says "Summer 2026 bursary applications are now closed and bursary amounts have been fully allocated"', `A processing fee of ${M('$25')} after confirmation and ${M('$50')} after 29 May 2026; no refund within a week of the start`],
          ['Western, Discovery Western', 'A "limited number of bursaries available each year", reviewed in batches', 'Before and after care must be bought at registration'],
          ['UVic, Science Venture', 'A bursaries page linked from the summer camp section', `More than 7 business days ahead, a full refund minus a ${M('$50')} cancellation fee; 50 percent in the last 7 business days`],
          ['USask, SCI-FI Science Camps', '"Due to overwhelming demand, our bursary program is now full for the 2026 Summer Camp Season."', `Refund with more than 2 weeks notice, minus a ${M('$50')} non-refundable deposit`],
          ['WISE Kid-Netic Energy, Manitoba', '"Subsidies may be available for Camps hosted by WISE Kid-Netic Energy only."', 'Not published on the pages we read']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://uwaterloo.ca/engineering-outreach/registration/engineering-outreach-bursaries" rel="noopener" target="_blank">Waterloo Engineering Outreach bursaries</a>, <a class="ag-inline-link" href="https://www.eng.uwo.ca/outreach/pre-university-programs/bursaries.html" rel="noopener" target="_blank">Western Engineering Outreach bursaries</a>, <a class="ag-inline-link" href="https://www.scienceventure.ca/camps/about-summer-camps" rel="noopener" target="_blank">Science Venture</a>, <a class="ag-inline-link" href="https://scifi.usask.ca/summer-camps/registration-.php" rel="noopener" target="_blank">SCI-FI registration</a> and <a class="ag-inline-link" href="https://www.wisekidneticenergy.ca/camp-subsidy" rel="noopener" target="_blank">WISE camp subsidy</a>, read 31 October 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'The bursary calendar runs early',
          left: [
            'The Waterloo dates tell the story: help for a July camp was decided in January. If a bursary would make a camp possible, apply in December or January, before you register, and keep a second plan in case the fund runs out, as SCI-FI\'s did for 2026.',
            'Ask every camp whether it has a fund, even if the page does not say. Several outreach programmes are paid for partly by donors precisely so that cost is not the reason a child misses out.'
          ],
          rightH3: 'Tax rules: read the CRA, not a camp',
          right: [
            'The Canada Revenue Agency sets out which child care costs a family can claim, under line 21400 of the income tax return. We tried to read that page at canada.ca on 31 October 2026 and it did not load, so we do not summarise it here or offer tax advice.',
            'Read the agency\'s own guidance, keep every camp receipt with the camp\'s name and dates, and ask a tax professional if you are unsure whether a particular camp counts.'
          ] }
      ]
    },
    {
      id: 'seasons', eyebrow: 'Through the year',
      h2: 'March Break, summer and winter: when camps run and what changes',
      lede: 'Camp prices follow the school calendar. The same provider can charge a different amount for a March Break week, a full summer week and a holiday-shortened week.',
      body: [
        { kind: 'table', caption: 'Camp seasons and what the published 2026 pages show (camp pages checked 31 October 2026)', head: ['Season', 'What the camps published', 'What to plan for'], rows: [
          ['March Break', `uOttawa ran a STEM camp for Grades 2 to 6 from 16 to 20 March 2026, 8:30 a.m. to 4:30 p.m., at ${M('$345')} for the week`, 'A longer day than most summer weeks; book early, since there is only one week'],
          ['Summer', 'Science Venture ran from 29 June to 28 August 2026; Waterloo ESQ ran seven weeks from 6 July; McMaster offered seven weeks; SCI-FI ran eight weeks in July and August', 'Weeks fill at different speeds; holiday weeks are four days'],
          ['Holiday-shortened weeks', `uOttawa closed on 1 July and 3 August 2026; its four-day weeks were ${M('$285')} for the kids\' camps`, 'A cheaper week, but one fewer day of activities'],
          ['Winter break', 'The university camps above are summer and spring-break camps; we found no winter fee on their pages', 'Our three-week winter camp runs online over the break']
        ] },
        { kind: 'source', html: 'Sources: the camp pages named under the first table, plus <a class="ag-inline-link" href="https://scifi.usask.ca/summer-camps/camp-information-.php" rel="noopener" target="_blank">SCI-FI camp information</a>, read 31 October 2026. Ontario\'s March Break follows a provincial rule; our <a class="ag-inline-link" href="/march-break-coding-camp-online">March Break coding page</a> works out the 2027 dates.' },
        { kind: 'p', mt: true, html: 'Online camps sidestep part of this calendar. Because the classes are arranged one to one, a family can start the week school ends, or the week after a trip, rather than waiting for a campus week with space. Each class time is set in your province\'s own clock, whether that is Vancouver, Regina or St. John\'s.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Matching the camp to the goal',
    h2: 'Four camp goals, and the purchase that fits each',
    lede: 'Start with what you want from the week, then pick the kind of camp. The fee follows from that, not the other way round.',
    table: { caption: 'Camp goals and the kind of camp that meets each (our view)', head: ['Goal', 'What to look for'], rows: [
      ['Care while parents work', 'A full-day campus or city camp with care hours; judge it per supervised hour'],
      ['A first taste of coding', 'A STEM week with a coding strand, or a short online camp, then see if the interest lasts'],
      ['Real coding progress', 'One-to-one or small-group teaching, counted in coding hours, with a project the child finishes'],
      ['Carrying on afterwards', 'The same teacher continuing after the camp, monthly, in a batch or one to one']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child after the first day what they built, not whether it was fun. A child who can describe a loop or a bug they fixed has had a coding day.',
      'Keep the receipts and the daily schedule together. They are what you need for any claim, and for comparing next year\'s fee.'
    ] },
    right: { h3: 'For students', ps: [
      'Pick one project and finish it. A small game that works beats three big ideas that never ran.',
      'Save your work somewhere you can open at home. A project left on a camp computer is gone on Friday.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses to continue with after a camp',
    lede: 'All are taught live online by a teacher who stays with your child, in a batch of 15 to 20 or one to one.',
    bands: [
      { num: 'I', h3: 'Ages 6 to 12', sub: 'After a first camp', courses: [
        { code: 'CCMA / A / 01', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe Coding for Kids', blurb: 'Scratch games and friendly AI tools, ages 8 to 12.' },
        { code: 'CCMA / A / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft Coding for Kids', blurb: 'Commands and mods in a game children already love.' },
        { code: 'CCMA / A / 03', slug: 'game-development-masterclass-for-kids', title: 'Game Development for Kids', blurb: 'Scratch, Roblox and Minecraft builds, ages 8 to 12.' }
      ] },
      { num: 'II', h3: 'Ages 13 to 18', sub: 'Typed code', courses: [
        { code: 'CCMA / B / 01', slug: 'kids-ai-web-development-course', title: 'Web Development for Kids', blurb: 'Real websites for younger teens ready for HTML.' },
        { code: 'CCMA / B / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Python first, then models trained on real data, for teens who already code.' },
        { code: 'CCMA / B / 03', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe Coding for Teens', blurb: 'Teens steer AI tools to build Python and web apps, then explain each line.' }
      ] },
      { num: 'III', h3: 'Beyond the camp', sub: 'School and contests', courses: [
        { code: 'CCMA / C / 01', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior Preparation', blurb: 'For students aiming at the Canadian Computing Competition.' },
        { code: 'CCMA / C / 02', slug: 'ics3u-ics4u-computer-science-companion-course', title: 'ICS3U and ICS4U Companion', blurb: 'Alongside Ontario Grade 11 and 12 computer science; we grant no credits.' },
        { code: 'CCMA / C / 03', slug: 'maths-through-coding', title: 'Math Through Coding', blurb: 'Algebra and number sense through Python, ages 10 to 15.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the online camp runs',
    h2: 'Live online camp classes, set in your own time zone',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'School holidays', l: 'Weekday mornings or afternoons, while school is out.' },
      { time: 'Around a day camp', l: 'Evening or weekend classes in a week your child is at a campus camp.' },
      { time: '1-on-1 camp', l: 'Eight classes booked to fit two or three weeks of your break.' }
    ],
    cells: [
      { h3: 'Paid once', p: 'The camp fee covers all eight classes.' },
      { h3: 'One mentor', p: 'The same teacher from the first class to the last.' },
      { h3: 'Every hour coding', p: 'No games break or tour inside the class time.' },
      { h3: 'Five projects', p: 'Built by the student and presented at the end.' },
      { h3: 'No travel', p: 'From home in any province or territory.' },
      { h3: 'Carry on, or stop', p: 'Monthly classes afterwards only if your child wants them.' }
    ]
  },

  projectsH2: 'Projects our students finished',
  projectsLede: 'This is the kind of work a camp should leave behind. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents posted these reviews on Google; we show them as written.',

  fees: {
    h2: 'Fees',
    lede: `Our holiday camp is one payment of ${CAMP} for eight one-to-one classes. Regular classes after a camp are monthly, shown below in your own currency.`,
    free: ['A free first class', 'A teacher checks the right track', 'Nothing to pay to book'],
    group: ['A batch of 15 to 20', 'Eight live classes each month', 'For students continuing after camp'],
    one: ['One teacher, one student', 'Times set around your family', 'The format the camp itself uses']
  },

  faq: {
    eyebrow: 'Camp fee questions',
    h2: 'Coding camp costs in Canada: questions and answers',
    items: [
      { q: 'How much does a coding camp cost in Canada?', a: 'It depends on the kind of camp. University and non-profit STEM day camps print their weekly fees on their own sites, and the 2026 fees we found were close to each other for a 9-to-4 week. The table on this page lists each camp\'s fee as published, with its season and hours.' },
      { q: 'How much does a Code Ninjas camp cost?', a: 'The Code Ninjas national camps page prints no fee. Each centre is locally run and sets its own camp prices, so ask the centre near you for the weekly fee, the daily hours and how many children share each leader.' },
      { q: 'What does a March Break coding camp cost?', a: 'The University of Ottawa ran a STEM camp with micro:bit coding for Grades 2 to 6 from 16 to 20 March 2026, and its fee is in the table above. Most camps had not published March Break 2027 fees when we checked on 31 October 2026.' },
      { q: 'Why is a four-day camp week cheaper?', a: 'Weeks with a statutory or civic holiday, such as Canada Day or the August civic holiday in Ontario, run four days and are priced lower. Per day, the Waterloo short week works out almost the same as a full week, by our arithmetic.' },
      { q: 'Is before and after care included in the camp fee?', a: 'Not always. uOttawa offers free care from 8 to 9 and 4 to 5 on campus, while Waterloo, Western and Science Venture charge for extended hours. Ask each camp and list care as its own line when you compare.' },
      { q: 'Are there bursaries for coding camps?', a: 'Several university camps offer them. Waterloo takes bursary applications in December and January for the following summer, Western reviews a limited number in batches, and SCI-FI in Saskatoon said its 2026 fund was full. Apply before you register.' },
      { q: 'What does your online holiday camp cost?', a: 'It is one payment for the whole camp, not a monthly fee, and the fees section of this page shows the amount in your own currency. It covers eight live one-to-one classes and the five camp projects.' },
      { q: 'How long are the classes in your camp?', a: 'Our camp pages give 60 to 75 minutes a class on the kids track, 90 minutes for teens and 90 to 120 minutes for adults. The summer camp runs over two to three weeks and the winter camp over three.' },
      { q: 'What times are your online camp classes in Canada?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Each time is set in your own province\'s clock.' },
      { q: 'Is a cheaper hourly rate always better value?', a: 'No. A day camp hour includes games, breaks and supervision, while a one-to-one class hour is all teaching. Divide each fee by the hours actually spent coding before deciding which is better value for your goal.' },
      { q: 'Can my child do a day camp and an online camp in the same summer?', a: 'Yes, and many families do. A campus week gives friends and outdoor time; online classes give steady coding progress at home, in the weeks around it, with one teacher throughout.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian families planning camps and classes.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'All our courses for families across the country.' },
      { href: '/online-coding-summer-camp-canada', label: 'Online coding summer camp in Canada', p: 'Planning a whole summer of coding from home.' },
      { href: '/march-break-coding-camp-online', label: 'March Break coding online', p: 'The 2027 break dates and how to use the week.' },
      { href: '/summer-coding-camp', label: 'Summer coding camp', p: 'Our one-payment summer camp and its three tracks.' },
      { href: '/winter-coding-camp', label: 'Winter coding camp', p: 'The three-week online camp over the winter break.' },
      { href: '/modern-age-coders-vs-code-ninjas', label: 'Modern Age Coders vs Code Ninjas', p: 'How a live online class differs from a coding centre.' },
      { href: '/coding-classes-for-kids-in-canada', label: 'Coding classes for kids in Canada', p: 'Year-round classes for ages 6 to 12.' },
      { href: '/canada-time-zones-2026-online-class-times', label: 'Class times across Canada', p: 'How each province\'s clock lines up with our teachers.' },
      { href: '/live-vs-recorded-coding-classes', label: 'Live vs recorded classes', p: 'What a live teacher adds that a video cannot.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Before you pay for any camp, let your child meet a teacher. The first class is free, places your child on the right track, and gives you a real lesson to compare against every camp on this page.',
    readFirst: 'Prefer to look first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows recorded lessons, and the <a class="ag-inline-link" href="/courses">full course list</a> has every syllabus.',
    note: 'Our teachers teach from India over live video, so the class is identical for a child in Kelowna, Winnipeg or Moncton. All you need is a computer and a steady connection. WhatsApp is the quickest way to reach us.',
    formNote: 'No card, no fee, no obligation to book.'
  },

  footer: {
    cols: [
      { h4: 'Camps', links: [
        { href: '/summer-coding-camp', label: 'Summer coding camp' },
        { href: '/winter-coding-camp', label: 'Winter coding camp' },
        { href: '/online-coding-summer-camp-canada', label: 'Summer camp in Canada' },
        { href: '/march-break-coding-camp-online', label: 'March Break coding' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-for-kids-in-canada', label: 'Classes for kids' },
        { href: '/canada-time-zones-2026-online-class-times', label: 'Class times by province' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Divide the fee by the coding hours'
  },

  personalityCss: `
.ag-root.ag-ccma .ag-hero h1 { letter-spacing: -0.01em; max-width: 24ch; }
.ag-root.ag-ccma .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-ccma .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-ccma .ag-table caption { text-align: left; }
.ag-root.ag-ccma .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ccma .ag-steps li { margin-bottom: 0.6rem; }
`,

  dossier: {
    curriculumAuthority: 'Published 2026 camp fees and terms from the providers\' own pages, read raw 31 October 2026: University of Waterloo ESQ, paid programs and bursaries; University of Ottawa engineering outreach (kids, teens, spring break); Western University Discovery Western (general information, registration, bursaries); University of Victoria Science Venture; Ontario Tech Code Away!; McMaster Venture (no fee printed); USask SCI-FI (hours, bursary, deposit); WISE Kid-Netic Energy (subsidy, 2027 notice); Code Ninjas national camps page (no fee printed). Our camp facts from our own summer and winter camp pages.',
    localProject: 'Our per-hour arithmetic on published fees (ESQ 362 / 35 programmed hours and / 40 door-to-door hours; per day for a full and a short week; Western, uOttawa, UVic and Ontario Tech at 35 hours) and an original Python program that turns a weekly fee and a camp day into an hourly rate (run 31 October 2026); a seven-step method for comparing camps on coding hours; our camp at 8 to 10 one-to-one teaching hours on the kids track. Lesson family: unit rates.',
    requiredMentions: [
      'Door to door, the same week works out at a lower hourly figure',
      'Divide by the hours, then ask which hours are coding',
      'Eight one-to-one classes, one payment',
      'a free before- and after-camp program from 8 a.m. to 9 a.m. and from 4 p.m. to 5 p.m.',
      'Due to overwhelming demand, our bursary program is now full for the 2026 Summer Camp Season.',
      'Summer 2026 bursary applications are now closed and bursary amounts have been fully allocated',
      'Programs for students in Grade 9-12 are subject to HST charges, which are included in your cost of registration.',
      'Our program &middot; weekly fee to hourly rate',
      'Divide the fee by the coding hours'
    ],
    sources: [
      { claim: 'ESQ summer 2026: weekly fee, short-week fee, grades, 9:00 am to 4:00 pm programming, extended care, bursary dates.', url: 'https://uwaterloo.ca/engineering-outreach/programs/engineering-science-quest/summer-camps' },
      { claim: 'Waterloo Engineering Outreach cancellation and switching fees for 2026.', url: 'https://uwaterloo.ca/engineering-outreach/registration/paid-programs' },
      { claim: 'Waterloo summer 2026 bursaries closed and fully allocated.', url: 'https://uwaterloo.ca/engineering-outreach/registration/engineering-outreach-bursaries' },
      { claim: 'uOttawa EngTech and kids camps 2026: weekly and four-day fees, hours, free before and after care, holiday closures.', url: 'https://www.uottawa.ca/faculty-engineering/outreach/summer-camps-kids' },
      { claim: 'uOttawa TeenTech 2026: fee, hours, grades.', url: 'https://www.uottawa.ca/faculty-engineering/outreach/summer-camps-teens' },
      { claim: 'uOttawa spring break STEM camp, 16 to 20 March 2026: fee and hours.', url: 'https://www.uottawa.ca/faculty-engineering/outreach/spring-break-camps-kids' },
      { claim: 'Discovery Western 2026: four-day and five-day fees, extended care, activity hours.', url: 'https://www.eng.uwo.ca/outreach/pre-university-programs/summer-camp/general-information.html' },
      { claim: 'WESA fee and HST for Grades 9 to 12.', url: 'https://www.eng.uwo.ca/outreach/pre-university-programs/summer-camp/registration.html' },
      { claim: 'Science Venture 2026: fees, extended hours, dates, hours, cancellation fee.', url: 'https://www.scienceventure.ca/camps/about-summer-camps' },
      { claim: 'Ontario Tech Code Away!: ages, dates, hours, fee.', url: 'https://ontariotechu.ca/continuouslearning/programs/camps-children-and-youth/summer-camps/2026-explore-our-camps/2026-camp-descriptions/code-away.php' },
      { claim: 'McMaster Venture: camp day, seven weeks, no transportation; no fee printed.', url: 'https://www.eng.mcmaster.ca/community/outreach-programs/summer-camp/' },
      { claim: 'SCI-FI: camp hours, bursary fund full for 2026, refund deposit.', url: 'https://scifi.usask.ca/summer-camps/registration-.php' },
      { claim: 'Code Ninjas national camps page: ages 5 to 14, no fee printed.', url: 'https://www.codeninjas.com/camps' },
      { claim: 'Our summer camp: eight one-to-one classes, two to three weeks, five projects.', url: 'https://learn.modernagecoders.com/summer-coding-camp' }
    ],
    rejectedClaims: [
      'Any average, total or sum of providers\' fees: not calculated; each fee is printed alone, as published, with its season.',
      'Fees from third-party camp directories or search summaries (including a Toronto coding day camp and an Ottawa programming camp seen only in search results): not used.',
      'SCI-FI fee figures: not used; the only figures on the page sit in an HTML comment dated 2020.',
      'Online camp fees published in a non-Canadian currency (Coding with Kids): not printed.',
      'Code Ninjas, McMaster and WISE camp fees: not published on the pages read; not guessed.',
      'UBC Geering Up, U of T, Dalhousie SuperNOVA, U of A DiscoverE, Actua and City of Vancouver: blocked or 403; nothing used.',
      'CRA child care expense rules for day camps: canada.ca timed out on 31 October 2026, so no CRA wording is quoted and no tax advice is given.',
      'Identity-targeted camps (girls-only weeks, a cybersecurity week for women and gender minorities): not described, under the brief\'s identity rule.',
      'A "16 sessions" or batch-size figure for our camp: not printed; our track pages disagree with the headline of eight one-to-one classes.',
      'Our camp fee typed in prose or FAQ: never; only the camps.canada.oneTime anchor.',
      'Any affiliation with any university, city or franchise named: none.'
    ]
  }
};
