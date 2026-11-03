'use strict';
// Coding classes cost in Germany (ag- pillar, Germany cluster row DE010, hub group 'guide').
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md section 6. Owner 2026-11-02: classes are live, in English
// only, with mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Angle: a cost explainer with no market price figures at all (no official source publishes one, so marketPrices is
// off and no data-market-price span is used) and no competitor prices. What drives the cost of a coding class, how our
// fee works (amounts only through the template's data-price anchors in the fees section), why euro is shown and US
// dollars are charged, what "two classes a week" really adds up to, how the Länder's different holidays affect a
// monthly plan, what school already gives for free, and the questions to put to any provider.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-classes-cost-germany/):
//  - ECB, Euro foreign exchange reference rates page (ecb-reference-rates.html/.txt, fetched 3 Nov 2026): "The
//    reference rates are usually updated at around 16:00 CET every working day, except on TARGET closing days."; "The
//    reference rates are published for information purposes only. Using the rates for transaction purposes is strongly
//    discouraged."; "2 November 2026 ... USD US dollar 1.1216".
//  - ECB eurofxref-daily.xml (research src/ecb/): Cube time='2026-10-30', currency='USD' rate='1.1172' (the rate the
//    pricing config uses: pricing.config.jsonc germany.usdPerEur 1.1172, rateDate 2026-10-30).
//  - KMK Ferien 2026/27 (FER2026_27.pdf, "Stand: 09.10.2025", facts 273 to 286): Bayern "02.11. - 06.11. 24.12. -
//    08.01."; Berlin "19.10. - 31.10. 23.12. - 02.01. 01.02. - 06.02. 22.03. - 02.04."; Hessen "05.10. - 17.10. 23.12. -
//    12.01. -- 22.03. - 02.04."; NRW "17.10. - 31.10. 23.12. - 06.01. -- 22.03. - 03.04."; Schleswig-Holstein "12.10. -
//    24.10. 21.12. - 06.01. -- 30.03. - 10.04."; Hamburg "19.10. - 30.10. 21.12. - 01.01. 29.01. 01.03. - 12.03.";
//    "Während die Kultusministerkonferenz die Sommerferien langfristig vereinbart, werden die übrigen Ferientermine von
//    den Ländern selbst bestimmt." KMK Eurydice: school year 1 August to 31 July (287).
//  - GI Informatik-Monitor 2026/27: six Länder without compulsory Informatik (92); Hamburg four hours (76); NRW grades
//    5 and 6 (80); Mecklenburg-Vorpommern at least one hour in each grade 5 to 10 (78).
//  - BWINF: the Informatik-Biber "ist kostenfrei" (129).
//  - Our own terms: brand-facts.json (group 15 to 20, priority demo fee set against the first month); the 2.5 percent
//    payment gateway charge added at checkout (src/js/course-payment.js gatewayBill, owner 2026-10-23).
// Our own calculations (scratchpad de/w/G2/cco/v1.py, v2.py, v3.py, python3 -I): v1 assumes four weeks and prints
// "8 classes" for every month; v2 counts Tuesdays and Thursdays with calendar.monthcalendar: 2026-11 8, 2026-12 10,
// 2027-01 8, 2027-02 8, 2027-03 9, 2027-04 9; v3 prints "November 2026 to October 2027: 104 Tuesdays and Thursdays" and
// "Eight a month for twelve months: 96". ECB move 1.1172 to 1.1216 is (1.1216 - 1.1172) / 1.1172 = 0.39 percent.
// Lesson family: an average is not a calendar; count the real days.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  '# Two classes a week, Tuesday and Thursday: how many in each month?',
  'months = ["2026-11", "2026-12", "2027-01", "2027-02", "2027-03", "2027-04"]',
  '',
  'for month in months:',
  '    weeks = 4',
  '    print(month, weeks * 2, "classes")'
].join('\n');

const V2 = [
  'import calendar',
  '',
  'months = ["2026-11", "2026-12", "2027-01", "2027-02", "2027-03", "2027-04"]',
  'TUESDAY, THURSDAY = 1, 3',
  '',
  'for month in months:',
  '    year, m = map(int, month.split("-"))',
  '    days = calendar.monthcalendar(year, m)',
  '    count = sum(1 for week in days for d in (week[TUESDAY], week[THURSDAY]) if d)',
  '    print(month, count, "classes")'
].join('\n');

const V3 = [
  'total = 0',
  'for year, m in [(2026, 11), (2026, 12)] + [(2027, k) for k in range(1, 11)]:',
  '    total += sum(1 for week in calendar.monthcalendar(year, m)',
  '                 for d in (week[TUESDAY], week[THURSDAY]) if d)',
  'print("November 2026 to October 2027:", total, "Tuesdays and Thursdays")',
  'print("Eight a month for twelve months:", 8 * 12)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'guide', label: 'What coding classes cost' },
  slug: 'coding-classes-cost-germany',
  code: 'cco',
  accent: '#005E70',
  accentRationale: 'Cost explainer: a deep teal #005E70, the colour of a ledger column rather than a sale sticker, clear of the hub fir green, the choosing-guide plum and the competitions mulberry; contrast on the paper #FBF8F2 above 6:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes cost in Germany',
  title: 'Coding Classes Cost in Germany: What You Pay For',
  description: 'What coding classes for kids cost in Germany and why: format, group size, hours, currency and holidays, how our monthly fee works, and what to ask any provider.',
  ogDescription: 'The things that decide what a coding class costs a family in Germany, how our euro-displayed, dollar-charged monthly fee works, why two classes a week is not always eight a month, and how sixteen holiday calendars change the sums.',
  twitterDescription: 'What a coding class costs a family in Germany, what drives the price, and what to ask before you pay.',
  pageName: 'Coding Classes Cost in Germany',
  webPageDescription: 'A cost explainer for families in Germany: what drives the price of a coding class for children and teenagers, how our monthly fee for eight live classes is shown in euro at the ECB reference rate and charged in US dollars, a Python project on counting real class days, the KMK holiday dates that differ by Land, and a checklist of cost questions for any provider. No market or competitor prices.',
  courseDescription: 'Live online coding classes in English for children and teenagers in Germany: Scratch, Python, games and AI, eight live classes a month in a group of fifteen to twenty or one to one, with a free first class.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'What it costs',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#drivers', label: 'Drivers' },
    { href: '#ours', label: 'Fee' },
    { href: '#currency', label: 'Currency' },
    { href: '#count', label: 'Classes' }
  ],
  eyebrow: 'Germany &middot; Coding classes &middot; Cost explained',
  h1: 'What coding classes cost in Germany, and what you pay for',
  lede: 'Two coding classes can carry the same monthly price and give a child very different amounts of teaching. One is a weekly video with a quiz, the other two live hours with a mentor who reads the child\'s code. This page explains what pushes the cost of a coding class up or down, how our own fee works, why it is shown in euro but charged in US dollars, and which questions turn any price into something you can compare.',
  secondaryCta: { href: '#drivers', label: 'What drives the price' },
  wa: 'Hello Modern Age Coders, we live in Germany and would like to understand your fees for coding classes before booking a free first class.',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; fees shown in euro, charged in US dollars',
  spec: [
    ['Our fee', 'Monthly, eight live classes'],
    ['Shown in', 'Euro, ECB reference rate'],
    ['Charged in', 'US dollars'],
    ['Formats', 'Group of 15 to 20, or one to one'],
    ['Market prices', 'Not quoted on this page'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'What a coding class costs in Germany depends mostly on five things: live teaching or video, group size, live hours per month, the teacher\'s experience and the payment terms. Modern Age Coders charges one monthly fee for eight live one-hour classes in English, in a group of fifteen to twenty or one to one, shown below in euro and charged in US dollars. The first class is free.',

  picks: {
    eyebrow: 'Courses behind the fee',
    h2: 'What the same monthly fee buys at three ages',
    lede: 'The fee is the same across our children\'s and teenagers\' courses; what changes is what the eight classes contain.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CCO / 01', title: 'Coding for kids', note: 'Ages 6 to 12. Scratch stories and games, then apps and a first look at AI. Eight classes a month is enough for a child to finish and show a small project.' },
      { course: 'python-ai-kids-masterclass', code: 'CCO / 02', title: 'Python and AI for kids', note: 'For 9 to 12 year olds ready to type real code: games, turtle art and small smart projects, the step most children take after a year of blocks.' },
      { course: 'complete-game-development-masterclass-for-teens', code: 'CCO / 03', title: 'Game development for teens', note: 'Ages 13 to 18. Real game projects with physics, levels and menus, built over several months rather than in a single camp week.' }
    ]
  },

  sections: [
    {
      id: 'drivers',
      eyebrow: 'Price drivers',
      h2: 'What decides how much a coding class costs in Germany?',
      lede: 'We know of no official price list for private coding classes in Germany, and we do not print other providers\' prices. What we can do is show which choices make a class cost more or less, so that you can judge any quote you receive.',
      body: [
        { kind: 'table', numCols: [], caption: 'What changes the cost of a coding class, and what to check (our analysis)', head: ['Driver', 'What it changes', 'What to check'], rows: [
          ['Live or recorded', 'A live teacher is the largest cost in any class', 'Does a person see and discuss my child\'s code in every session?'],
          ['Group size', 'One teacher\'s time shared between more or fewer children', 'The exact number of learners per teacher'],
          ['Live hours per month', 'The amount of teaching you actually receive', 'Hours of live teaching, not the number of "lessons" or videos'],
          ['Teacher', 'Experience, training and whether the same person stays', 'Will my child keep one regular teacher?'],
          ['Format', 'Weekly classes, intensive camps, single workshops', 'The cost of one live hour in each format'],
          ['Payment terms', 'Monthly, by term, or a year paid in advance', 'How to stop, and what happens to unused months'],
          ['Currency and payment', 'Conversion and card charges on foreign-currency payments', 'Which currency is charged, and are there extra charges at checkout?']
        ] },
        { kind: 'source', html: 'The drivers and checks are our own analysis. We found no official source that publishes a price level for private coding classes in Germany, so this page quotes none, and it never prints another provider\'s price.' },
        { kind: 'two', mt: true,
          leftH3: 'The single most useful number',
          left: [
            'Whatever a provider charges, divide it by the number of live hours of teaching it buys. A monthly fee for eight live hours and a term fee for twelve can only be compared once both are turned into the price of one hour with a teacher.',
            'Then weigh that hour: one teacher with three learners is a different hour from one teacher with twenty, and an hour with someone who already knows your child differs from an hour with a rotating stranger.'
          ],
          rightH3: 'What does not belong in the comparison',
          right: [
            'Course counts, video libraries, certificates and app subscriptions are cheap to add and easy to advertise. They rarely tell you what your child will learn. A family that compares live hours, group size and teacher continuity has compared what matters.',
            'Free options belong in the picture too. They are a real alternative for some children and a good warm-up for others; the section on school below lists what is already free.'
          ] }
      ]
    },
    {
      id: 'ours',
      eyebrow: 'Our fee',
      h2: 'How does the Modern Age Coders fee work for families in Germany?',
      lede: 'One fee per month, for eight live classes of an hour each. The euro amounts are in the fees section further down this page; this section explains what sits behind them.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Included', p: 'Eight live one-hour classes a month in English, one regular mentor, placement by level, the projects and exercises used in class, and written progress notes.' },
          { h3: 'Two formats', p: 'A group of fifteen to twenty learners at a similar level, or one to one. One to one costs more because the mentor\'s whole hour belongs to one learner.' },
          { h3: 'Not included', p: 'A computer, an internet connection, and any paid game or software a particular course relies on; the course page says so if one is needed. We never ask under-18s to sign up for tools whose terms set a minimum age of 18.' }
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'How a payment to us works, step by step', head: ['Step', 'What happens'], rows: [
          ['First class', 'Free, with no card details'],
          ['Optional priority demo', 'A paid full-length demo; if you enrol, its fee is set against the first month'],
          ['Monthly fee', 'Shown in euro on this page, charged in US dollars'],
          ['At checkout', 'A payment gateway charge of 2.5 percent is added and shown before you pay'],
          ['Your bank', 'Converts the dollar charge into euro at its own rate'],
          ['Stopping', 'Plans are monthly; the rules are on our refund page']
        ] },
        { kind: 'source', html: 'Our own terms. Where this summary and the <a class="ag-inline-link" href="/refund">refund page</a> disagree, the refund page wins; the fees section of this page shows the current euro amounts.' },
        { kind: 'p', mt: true, html: 'We tell you about the gateway charge here, before the checkout, because a cost page that left it for the last screen would not be an honest cost page. It is a percentage added by us to cover the payment provider, it is shown as its own line, and the total you approve is the total charged in dollars.' }
      ]
    },
    {
      id: 'currency',
      eyebrow: 'Euro and dollars',
      h2: 'Why is the fee shown in euro but charged in US dollars?',
      lede: 'Families in Germany think in euro, so we show euro. Our payment system charges in US dollars, so the bank makes the final conversion. Here is why the two can differ by a little.',
      body: [
        { kind: 'two',
          leftH3: 'What the ECB rate is',
          left: [
            'The euro amounts on this page are converted at the euro foreign exchange reference rate of the European Central Bank. The ECB updates these reference rates at around 16:00 CET on every working day, on the basis of a daily exchange between central banks across Europe.',
            'Our pricing uses the reference rate of 30 October 2026, when the ECB listed 1.1172 US dollars to the euro. By 2 November 2026 the listed rate was 1.1216, a move of about 0.39 percent in one working day by our arithmetic.'
          ],
          rightH3: 'Why your statement can differ',
          right: [
            'The ECB states that its reference rates are published for information purposes only and that using them for transactions is strongly discouraged. Your bank does not pay or charge at the ECB rate: it applies its own rate on the day the payment is booked, and some banks add a fee for card payments in another currency.',
            'That is why every euro amount on our pages says "about". If the exact amount matters, look at what your bank charges for payments in US dollars before you pay.'
          ] },
        { kind: 'source', html: 'Source: European Central Bank, Euro foreign exchange reference rates, page read on 3 November 2026, and the ECB daily reference rate file for 30 October 2026. The percentage is our calculation: (1.1216 &minus; 1.1172) &divide; 1.1172.' }
      ]
    },
    {
      id: 'count',
      tint: 'tint',
      eyebrow: 'A counting project',
      h2: 'Is two coding classes a week the same as eight a month?',
      lede: 'Not quite, and the difference is worth knowing when you compare a monthly fee with a weekly or termly one. Our students check it with a few lines of Python.',
      body: [
        { kind: 'two',
          leftH3: 'The shortcut',
          left: [
            'A month is "about four weeks", so two classes a week makes eight a month. It is the arithmetic most price lists use, and it is the reason our monthly fee is defined as eight live classes rather than as a number of weeks.',
            'Students start by writing that shortcut as a program, with Tuesday and Thursday as the class days.'
          ],
          rightH3: 'The question',
          right: [
            'How many Tuesdays and Thursdays does each month from November 2026 to April 2027 really have? And over a whole year, how far is "eight a month" from the true number of class days?',
            'The answer matters for any provider that charges by the week, the term or the class day.'
          ] },
        { kind: 'code', label: 'Version 1: assume four weeks a month', lang: 'Python', code: V1, note: 'It prints <code>8 classes</code> for every month, from <code>2026-11</code> to <code>2027-04</code>.' },
        { kind: 'p', mt: true, html: 'Tidy, and wrong for half of the months. A month has between 28 and 31 days, so it holds four or five of each weekday, never exactly four weeks. The program has replaced the calendar with an average. Python\'s <code>calendar</code> module can lay out each month week by week instead, and then we simply count.' },
        { kind: 'code', label: 'Version 2: count the real days', lang: 'Python', code: V2, note: 'It prints <code>2026-11 8 classes</code>, <code>2026-12 10 classes</code>, <code>2027-01 8 classes</code>, <code>2027-02 8 classes</code>, <code>2027-03 9 classes</code> and <code>2027-04 9 classes</code>.' },
        { kind: 'code', label: 'Going further: a whole year', lang: 'Python', code: V3, note: 'It prints <code>November 2026 to October 2027: 104 Tuesdays and Thursdays</code> and <code>Eight a month for twelve months: 96</code>.' },
        { kind: 'p', mt: true, html: 'A year has 52 weeks, not 48, so "four weeks a month" quietly loses eight class days a year. December 2026 alone has ten Tuesdays and Thursdays, though at least three of them fall inside the Christmas holidays of every Land in the holiday table below. None of this makes one pricing model right and another wrong. It means the only fair comparison is the price of one live class, worked out from the real number of classes a fee buys.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 8 to 10, with a calendar.</strong> Colour every Tuesday and Thursday of December 2026 on a paper calendar. How many are there? Which ones are in the Christmas holidays where you live?',
          '<strong>Ages 10 to 13, Python.</strong> Run Version 1, then Version 2, and write down every month where the two disagree.',
          '<strong>Ages 13 and up.</strong> Add a list of your Land\'s holiday dates and count only the class days outside them. Compare the result for Bayern and for Hessen.'
        ] },
        { kind: 'source', html: 'We wrote and ran these programs ourselves (Python 3, 3 November 2026); the counts are plain calendar arithmetic.' }
      ]
    },
    {
      id: 'holidays',
      eyebrow: 'School holidays',
      h2: 'What happens to coding classes during the German school holidays?',
      lede: 'Each Land sets its own autumn, Christmas and Easter holidays; only the summer holidays are coordinated by the KMK. A provider that teaches families all over Germany cannot follow everyone\'s Ferien at once, so ask how classes and fees handle them.',
      body: [
        { kind: 'table', numCols: [], caption: 'Holidays outside summer in six Länder, school year 2026/27 (first and last holiday day)', head: ['Land', 'Autumn 2026', 'Christmas 2026/27', 'Spring or Easter 2027'], rows: [
          ['Bayern', '2 to 6 November', '24 December to 8 January', 'Not in our extract of the table'],
          ['Berlin', '19 to 31 October', '23 December to 2 January', '22 March to 2 April'],
          ['Hamburg', '19 to 30 October', '21 December to 1 January', '1 to 12 March'],
          ['Hessen', '5 to 17 October', '23 December to 12 January', '22 March to 2 April'],
          ['Nordrhein-Westfalen', '17 to 31 October', '23 December to 6 January', '22 March to 3 April'],
          ['Schleswig-Holstein', '12 to 24 October', '21 December to 6 January', '30 March to 10 April']
        ] },
        { kind: 'source', html: 'Source: Kultusministerkonferenz, Ferien 2026/2027 (Stand 9 October 2025), read 2 November 2026: "Während die Kultusministerkonferenz die Sommerferien langfristig vereinbart, werden die übrigen Ferientermine von den Ländern selbst bestimmt." Berlin, Hamburg and several other Länder also have short winter breaks and single free days, which the full table lists.' },
        { kind: 'two', mt: true,
          leftH3: 'What the table shows',
          left: [
            'On Monday 2 November 2026 pupils in Bayern begin their autumn holiday, two days after pupils in Nordrhein-Westfalen have finished theirs. Christmas ends on 1 January 2027 in Hamburg and on 12 January 2027 in Hessen.',
            'For a weekly class this means that holiday weeks differ from family to family even inside one group, and that the number of school-free weeks in a given month depends on the Land.'
          ],
          rightH3: 'What to ask any provider',
          right: [
            'Do classes continue during the Ferien? If my child misses classes for a family holiday, can they be moved, or are they lost? Is the fee the same in a month with a two-week holiday?',
            'For our classes, tell your mentor your Land and your holiday plans when you book. One-to-one times are agreed with you, and the mentor will tell you how your group\'s timetable runs over the holidays before you pay.'
          ] }
      ]
    },
    {
      id: 'free',
      eyebrow: 'Already free',
      h2: 'Which coding learning is already free for a child in Germany?',
      lede: 'Before paying anyone, it is worth knowing what school and the national competitions already give. For some children it is enough; for many it is a good way to find out whether they like coding at all.',
      body: [
        { kind: 'two',
          leftH3: 'At school',
          left: [
            'In some Länder, Informatik is now a compulsory subject. The Gesellschaft für Informatik reports that Hamburg\'s Stadtteilschulen and Gymnasien have taught four compulsory Informatik hours, spread over Klasse 7 to 10, since 2025/26; that Nordrhein-Westfalen teaches it in Klasse 5 and 6; and that Mecklenburg-Vorpommern gives it a weekly hour or more in each year from Klasse 5 up to Klasse 10.',
            'In six Länder there is no Informatik that every pupil must take, according to the same 2026/27 monitor: Hessen, Berlin, Bremen, Brandenburg, Sachsen-Anhalt and Rheinland-Pfalz. There, a coding class may be a child\'s only regular contact with programming.'
          ],
          rightH3: 'Outside school',
          right: [
            'The Informatik-Biber, Germany\'s largest school informatics competition, is free, according to its organiser BWINF, and runs from 9 to 20 November 2026 through participating schools, each of which names a coordinator. The hub page for <a class="ag-inline-link" href="/coding-classes-in-germany">coding classes in Germany</a> lists the other contests of the year.',
            'Free block-coding tools that run in a browser are also widely available. What free options rarely give is a person who looks at a child\'s code every week and knows what to teach next. That is what a paid live class should be selling.'
          ] }
      ]
    },
    {
      id: 'ask',
      eyebrow: 'Before you pay',
      h2: 'What should you ask any coding provider about cost?',
      lede: 'Seven questions that turn any price, ours included, into something you can compare. Ask them in writing and keep the answers.',
      body: [
        { kind: 'ol', items: [
          '<strong>How many live hours with a teacher does the fee buy?</strong> Count hours, not lessons, modules or videos.',
          '<strong>How many learners share the teacher?</strong> A stated number, and whether one to one is offered.',
          '<strong>Is it the same teacher every week?</strong> Continuity is part of what you pay for.',
          '<strong>What happens in the school holidays of my Land, and when my child is ill?</strong> Are missed classes moved, lost or refunded?',
          '<strong>Which currency is charged, and is anything added at checkout?</strong> Card and gateway charges belong in the total.',
          '<strong>Is there anything else to buy?</strong> Kits, software, accounts, exam fees.',
          '<strong>How do I stop, and what notice is needed?</strong> Read the written terms before the first payment.'
        ] },
        { kind: 'p', mt: true, html: 'Our answers: eight live hours a month; fifteen to twenty learners, or one to one; one regular mentor; holidays and missed classes discussed with your mentor before you pay; charged in US dollars with a 2.5 percent gateway charge shown at checkout; any paid game or software named on the course page; monthly plans, with the rules on our refund page.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Your own comparison',
    h2: 'A worksheet for comparing coding class costs',
    lede: 'Our suggestion for putting two or three offers side by side. Fill in the numbers each provider gives you; leave a box empty if they cannot answer.',
    table: { caption: 'A cost comparison worksheet (ours)', head: ['Line', 'How to fill it in', 'Why'], rows: [
      ['Monthly cost', 'The total you would pay in a month, including charges', 'Fees, gateway and card charges together'],
      ['Live hours per month', 'Hours with a teacher, not videos', 'The thing you are actually buying'],
      ['Cost of one live hour', 'Monthly cost divided by live hours', 'The only fair comparison'],
      ['Learners per teacher', 'The stated number', 'How much of that hour is your child\'s'],
      ['Stopping', 'Notice period and refund rule', 'What a wrong choice would cost']
    ] },
    left: { h3: 'For parents', ps: [
      'Compare the cost of one live hour first, then the number of learners sharing it.',
      'The cheapest hour is not the cheapest result if your child does not want to come back for the second one.'
    ] },
    right: { h3: 'For older learners', ps: [
      'Ask to see one finished project from a learner at your level after a few months. It tells you what the hours turn into.',
      'Check the calendar, not the average: count the class days in the months you care about.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses on the same monthly fee',
    lede: 'Same fee, same format: live classes in English, a regular mentor, a group or a single learner.',
    bands: [
      { num: 'I', h3: 'Younger children', sub: 'Ages 6 to 12', courses: [
        { code: 'CCO / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'From first blocks to complete games.' },
        { code: 'CCO / KIDS / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding', blurb: 'Lua scripts inside a game children know.' },
        { code: 'CCO / KIDS / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Characters, levels and scores, step by step.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'CCO / TEENS / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From the basics to files, classes and data.' },
        { code: 'CCO / TEENS / 02', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Alongside Informatik in Klasse 5 to 10.' },
        { code: 'CCO / TEENS / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive web pages from scratch.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Ages 13 and up', courses: [
        { code: 'CCO / MORE / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Building models, not just using them.' },
        { code: 'CCO / MORE / 02', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatics competitions', blurb: 'From Biber puzzles to Bundeswettbewerb tasks.' },
        { code: 'CCO / MORE / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms for teens', blurb: 'Data structures and problem solving.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How the eight classes a month are held',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Each class is a live hour with the same mentor, agreed in German time.',
    slots: [
      { time: 'Weekdays', l: 'German afternoons, once school is out.' },
      { time: 'Weekends', l: 'Saturday and Sunday mornings.' },
      { time: 'One to one', l: 'Times you set with your mentor.' }
    ],
    cells: [
      { h3: 'Live hours', p: 'Eight a month, each with a mentor.' },
      { h3: 'One mentor', p: 'The same person every week.' },
      { h3: 'Placed by level', p: 'Learners join a group that fits.' },
      { h3: 'Projects kept', p: 'What a learner builds stays theirs.' },
      { h3: 'Progress notes', p: 'Written, so you can see the value.' },
      { h3: 'Monthly plans', p: 'No long fixed term.' }
    ]
  },

  projectsH2: 'What the hours turn into',
  projectsLede: 'The best measure of a fee is what learners make with it. A few student projects are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page collects more.',
  reviewsLede: 'Google reviews from parents and students, quoted as they were written.',

  fees: {
    h2: 'Our fees for coding classes in Germany',
    lede: 'These are the amounts the sections above refer to: one monthly fee for eight live classes. They appear in euro using the European Central Bank reference rate, while the payment is taken in US dollars and converted by your bank, so your statement may show a slightly different euro figure.',
    free: ['A free first class at your child\'s level', 'A suggested course and group', 'No card needed'],
    group: ['Fifteen to twenty learners, placed by level', 'One regular mentor', 'Two live classes a week', 'Monthly, stop in any month'],
    one: ['Your child and one mentor', 'Their own pace and syllabus', 'Times agreed in German time']
  },

  faq: {
    eyebrow: 'Families in Germany ask',
    h2: 'Coding class costs in Germany: common questions',
    items: [
      { q: 'How much do coding classes for kids cost in Germany?', a: 'It depends on whether the teaching is live, how many children share a teacher, how many live hours a month you get and the payment terms. Our own fee is one monthly amount for eight live one-hour classes, shown in euro on this page; we do not quote other providers\' prices.' },
      { q: 'Why are your fees shown in euro but charged in US dollars?', a: 'We show euro because families in Germany think in euro, converted at the European Central Bank reference rate. Our payment system charges in US dollars, and your bank converts the charge at its own rate on the day, so the statement can differ slightly.' },
      { q: 'Is anything added at checkout?', a: 'Yes. A payment gateway charge of 2.5 percent is added to the fee and shown as its own line before you approve the payment. Your bank may also charge for a payment in US dollars; ask your bank.' },
      { q: 'What is included in the monthly fee?', a: 'Eight live one-hour classes in English, one regular mentor, placement by level, the projects and exercises used in class and written progress notes. A computer and internet connection are yours to provide, and if a course needs a paid game or program, its course page says so.' },
      { q: 'Is one to one more expensive than a group?', a: 'Yes, because the mentor\'s whole hour belongs to one learner. Our groups have fifteen to twenty learners placed by level; both amounts are shown in the fees section.' },
      { q: 'Are the classes in German?', a: 'No. All our classes are live and taught in English only, by mentors who match the learner\'s pace and accent. Many families in Germany choose them for that reason, as coding practice and English practice together.' },
      { q: 'Do classes continue during the school holidays?', a: 'Each Land has its own autumn, Christmas and Easter holidays, so tell your mentor your Land and your plans when you book. One-to-one times are agreed with you, and the mentor explains how your group runs over the holidays before you pay.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Classes are agreed in German time.' },
      { q: 'Is there a free trial class?', a: 'Yes. The first class is free and needs no card. There is also an optional paid priority demo, a full-length class; if you enrol afterwards, its fee is set against your first month.' },
      { q: 'How do I compare your price with other providers?', a: 'Turn every offer into the price of one live hour with a teacher, then compare how many learners share that hour and whether the teacher stays the same. Add any checkout or card charges to the total.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in Germany weighing up coding classes.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our main page for families in Germany.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI classes in Germany', p: 'What our AI classes cover.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Each Land\'s Informatik rule, in German.' },
      { href: '/refund', label: 'Refund policy', p: 'How stopping and refunds work.' },
      { href: '/pricing', label: 'Pricing', p: 'Our plans in one place.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live hour.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'See what one live hour is like before you pay for eight. The mentor gives your child a small task at their level, then suggests a course and a group or one-to-one plan and answers any question about fees.',
    readFirst: 'If you would like to read more first, <a class="ag-inline-link" href="/refund">our refund page</a> sets out the rules, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a class.',
    note: 'Live online classes in English, with mentors based in India. Questions about fees are answered fastest on WhatsApp.',
    formNote: 'The first class costs nothing and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin' }
      ] },
      { h4: 'Fees and terms', links: [
        { href: '/pricing', label: 'Pricing' },
        { href: '/refund', label: 'Refund policy' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Count the real days'
  },

  personalityCss: `
.ag-root.ag-cco .ag-hero h1 { letter-spacing: -0.012em; max-width: 24ch; }
.ag-root.ag-cco .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-cco .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-cco .ag-table caption { text-align: left; font-variant-numeric: tabular-nums; }
.ag-root.ag-cco .ag-band-head h3 { letter-spacing: -0.004em; }
`,

  dossier: {
    curriculumAuthority: 'European Central Bank, euro foreign exchange reference rates (page and daily file); Kultusministerkonferenz, Ferien 2026/2027 and Eurydice dossier; Gesellschaft für Informatik, Informatik-Monitor 2026/27; Bundesweite Informatikwettbewerbe (Biber). Read 2 and 3 November 2026. Cost drivers, worksheet and Python project our own; our terms from brand-facts.json, the checkout code and the refund page.',
    localProject: 'Count the real days: an original Python project in which "four weeks a month" gives eight Tuesday-and-Thursday classes in every month, calendar.monthcalendar gives 8, 10, 8, 8, 9 and 9 from November 2026 to April 2027, and a full year from November 2026 to October 2027 has 104 such days against 96 for eight a month. Lesson family: an average is not a calendar.',
    requiredMentions: ['2026-12 10 classes', 'November 2026 to October 2027: 104 Tuesdays and Thursdays', 'Eight a month for twelve months: 96', 'Count the real days', 'about 0.39 percent', 'strongly discouraged', 'A payment gateway charge of 2.5 percent', 'What changes the cost of a coding class, and what to check'],
    sources: [
      { claim: 'ECB reference rates: update time, information purposes only, 2 November 2026 USD rate.', url: 'https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html' },
      { claim: 'ECB reference rate of 30 October 2026.', url: 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml' },
      { claim: 'Holiday dates 2026/27 by Land; KMK sets only the summer holidays.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Informatik by Land, 2026/27.', url: 'https://informatik-monitor.de/' },
      { claim: 'The Informatik-Biber is free.', url: 'https://bwinf.de/biber/' }
    ],
    rejectedClaims: [
      'Market price levels for coding classes in Germany: no official source publishes one; none printed and marketPrices left off.',
      'Competitor prices: never printed.',
      'Typed fee figures: none; fees appear only through the template\'s data-price anchors.',
      'Statements about consumer or tax law on payments: left out.',
      'A holiday pause policy: not claimed; families are told to agree it with the mentor before paying.'
    ]
  }
};
