// SHIP: market | Cost of coding classes in Peru: a year, not a month, set against the school calendar | running totals with itertools.accumulate and next() to find the first month over budget
'use strict';
// Cost of coding classes in Peru (ag- English guide, Peru cluster row PE064, P3 cost, hubGroup guides).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md (sections 3 and 6: cost pages explain what drives cost and show
// our fee through the template only; no competitor prices, no soles); writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// No visible "best" (the one allowed use is not taken).
// Searches (KEYWORDS.md sections 1, 3 and 6; spec Appendix B prompt 12): "how much do coding classes for kids cost in Peru",
// "coding classes lima peru", "Python course duration and fee?", "¿Cuánto cuestan las clases de programación?".
// Spine (different from the Spanish sibling cuanto-cuestan-clases-de-programacion-para-ninos-peru, which is kids only and
// compares offers per live hour): for every age, the real cost of coding classes is a year's plan, not a monthly fee; the
// page sets the 2026 school calendar (RM 501-2025-MINEDU, Tabla 1, checked by eye) beside a family's paying months, shows the
// costs no quote includes (computer and internet at home, INEI 2026; paying by card, World Bank Findex 2024), what is free in
// Peru, what a monthly fee should buy, and where our own fee is (template cards, USD, monthly). One original running-total
// program with invented "units" that are nobody's price.
// Sources (every quote grepped in the raw text):
//  RM 501-2025-MINEDU, Norma Técnica para el Año Escolar 2026 (facts-school/src/rm501-2025-pdf, OCR; Tabla 1 on signed PDF page 7
//    checked by eye on 9 November 2026 against src-pages/clases-de-programacion-para-ninos-online-peru/rm501-page11-checked-by-eye.png):
//    "Del 2 al 13 de marzo Del 16 marzo al 15 de mayo Del 18 al 22 de mayo Del 25 mayo al 24 de julio Del 27 julio a 7 de agosto
//    Del 10 agosto al 9 de octubre Del 12 al 16 de octubre Del 19 octubre a 18 de diciembre"; final management block 21 to 31
//    December; "El año escolar está compuesto por treinta y seis (36) semanas lectivas y ocho (08) semanas de gestión"; "tienen
//    la potestad de definir una distribución de semanas lectivas y de gestión distinta a la sugerida"; "la calendarización puede
//    organizar el año escolar en bimestres, trimestres u otra forma de organización".
//  BLOCKED.md: no MINEDU norm for the 2027 school year found on gob.pe as of 8 November 2026.
//  INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (facts-market/src/inei_tic_iit2026): "el 64,5% de los hogares
//    del país contaba con servicio de Internet. Por área de residencia, en Lima Metropolitana, el 84,7% de los hogares disponía
//    del servicio; en el resto urbano, el 66,2%; mientras que, en el área rural solo el 27,1% tenía acceso."; "el 36,4% de los
//    hogares del país disponía de al menos una computadora. Este porcentaje alcanzó el 53,3% en Lima Metropolitana, el 41,3% en
//    el resto urbano y 8,9% en el área rural."; "el 74,3% cuenta con una sola unidad".
//  World Bank Global Findex, Peru, 2024 (facts-market/src/wb_PER_fin2.t.d.json, wb_PER_fin10.json, wb_PER_account.t.d.json,
//    wb_PER_con30e.json): owns a debit card 36.65% (age 15+); owns a credit card 12.65%; account 59.31%; accessed online info to
//    learn, train or educate in the past three months 42.89%. Rounded on the page to one decimal place.
//  UTEC OPI home (facts-school/src/opi-home): "abiertas gratuitamente a todos los estudiantes de secundaria del país".
//  MINEDU, Fábrica de Programadores (n-fabrica-prog): 1,000 pupils, 4th and 5th secundaria, Lima Norte, Python.
//  CNEB (FACTS 39): no computing area in the secundaria plans of study.
//  Template: fees cards in USD (data-price anchors), monthly, eight live classes a month. No figure typed on the page.
//  Brand facts: 10,000+ students worldwide, 4.9 from about 547 Google reviews, since 2020; group fifteen to twenty or one to one.
//  Time: tzdata America/Lima UTC-5 all year, Asia/Kolkata UTC+5:30.
// Our own calculations: 9 + 1 + 9 + 2 + 9 + 1 + 9 = 40 weeks from 16 March to 18 December 2026 (36 teaching and 4 management
// weeks inside that span).
// Our own programs (scratchpad pe/e8/caa_budget.py, caa_budget2.py), invented "units", python3 -I (3.14), exact output:
//    v1: "[10, 20, 30, 40, 40, 50, 60, 70, 80, 90, 110, 130]" / "Total: 130 | first month over budget: Feb"
//    v2: "summer 1-on-1   total 130  over budget in: Feb" / "group all year  total 120  over budget in: never" /
//        "pause Jul + Dec total 120  over budget in: never"
// Lesson family: running totals with itertools.accumulate, next() with a default to find the first month a plan passes a
// budget, and comparing whole-year plans instead of single months.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'from itertools import accumulate',
  '',
  '# An invented family plan in "units" (not anyone\'s price): one learner, twelve months from March.',
  'months = ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"]',
  'plan = [10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 20, 20]   # July paused; one-to-one in the summer',
  'budget = 120',
  '',
  'running = list(accumulate(plan))',
  'print(running)',
  'over = next((m for m, total in zip(months, running) if total > budget), None)',
  'print("Total:", running[-1], "| first month over budget:", over)'
].join('\n');

const V2 = [
  'from itertools import accumulate',
  '',
  'months = ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"]',
  'budget = 120',
  'plans = {',
  '    "summer 1-on-1": [10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 20, 20],',
  '    "group all year": [10] * 12,',
  '    "pause Jul + Dec": [10, 10, 10, 10, 0, 10, 10, 10, 10, 0, 20, 20],',
  '}',
  'for name, plan in plans.items():',
  '    running = list(accumulate(plan))',
  '    over = next((m for m, t in zip(months, running) if t > budget), "never")',
  '    print(f"{name:15} total {running[-1]:3}  over budget in: {over}")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Cost of coding classes' },
  slug: 'cost-of-coding-classes-in-peru',
  code: 'caa',
  accent: '#721310',
  accentRationale: 'Cost of coding classes in Peru: a dark oxblood #721310, the colour of a ledger\'s red ink and of the adobe walls at Chan Chan after rain, chosen for a page about budgets read honestly; contrast passes 4.5 on all three papers (checked by the build gate)',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Cost of coding classes in Peru',
  title: 'Cost of Coding Classes in Peru: Planning a Year, Live in English',
  description: 'What coding classes cost in Peru over a full year, for children, teens and adults: what moves the price, costs at home, the school calendar, and our live classes.',
  ogDescription: 'Coding classes are sold by the month but paid for by the year. How families and adult learners in Peru can plan the real cost around the 2026 school calendar, the computer at home and paying by card, with a short Python budgeting program.',
  twitterDescription: 'The yearly cost of coding classes from Peru, planned month by month around the school calendar.',
  pageName: 'Cost of Coding Classes in Peru',
  webPageDescription: 'A guide to the cost of coding classes in Peru for every age, built from MINEDU\'s RM 501-2025 school calendar, INEI household technology data and the World Bank Global Findex, with an original Python lesson on running totals.',
  courseDescription: 'Live online coding classes taught in English for learners in Peru from age 6 to adult, paid monthly in US dollars by card, in a group of fifteen to twenty or one to one, at hours the learner chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Cost of coding classes',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#drivers', label: 'What moves the cost' },
    { href: '#year', label: 'A school year' },
    { href: '#budget', label: 'Budget code' },
    { href: '#home', label: 'Costs at home' },
    { href: '#ours', label: 'Our fee' }
  ],
  eyebrow: 'Peru &middot; What coding classes cost &middot; Ages 6 to adult',
  h1: 'Cost of coding classes in Peru, planned over a year',
  lede: 'Most families ask what coding classes cost per month, which is a fair question with a misleading answer. Learning to code takes most of a year, a Peruvian school year has breaks in May, July, October and over the summer, and a computer at home costs more than any month of classes. This page sets out the full picture for children, teenagers and adults, with no competitor prices and our own fee shown in the cards near the end.',
  secondaryCta: { href: '#year', label: 'Plan around the school year' },
  wa: 'Hello Modern Age Coders, I am in Peru and planning a budget for coding classes. Could I book a free class in English and ask about fees?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; all classes live, online and in English',
  spec: [
    ['Who', 'Children from 6, teenagers, adults'],
    ['Billing', 'Monthly, by card'],
    ['Currency', 'US dollars, converted by your bank'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Peru times', 'Picked by the family'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'The short answer',
  capsule: 'There is no single price for coding classes in Peru: cost depends on live versus recorded teaching, group versus one to one, how many months you study, and whether you already have a computer. Plan for a year, not a month. Modern Age Coders teaches coding live online in English to learners in Peru aged 6 to adult, in a group of fifteen to twenty or one to one, at flexible hours; our monthly fee in US dollars appears in the fee cards on this page, and the first class is free.',

  picks: {
    eyebrow: 'What a month buys',
    h2: 'Three courses, three budgets of time',
    lede: 'Each is paid month by month. What changes between them is how many months a learner usually needs.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'CAA / 01', title: 'Scratch, about three months', note: 'A short, complete course for children of roughly 6 to 10: games and animations built from blocks, finished in a school term, and a clean place to stop or move on.' },
      { course: 'java-programming-masterclass-for-teens', code: 'CAA / 02', title: 'Java for teens, most of a year', note: 'A longer commitment for teenagers who want a typed, structured language: from first classes and objects to finished applications, at two live lessons a week.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'CAA / 03', title: 'Data and AI for working adults', note: 'Adults who want useful results from spreadsheets and dashboards without becoming programmers. Shorter, focused, and easy to fit around a job.' }
    ]
  },

  sections: [
    {
      id: 'drivers',
      eyebrow: 'Why prices differ',
      h2: 'How much do coding classes cost in Peru?',
      lede: 'Prices in Peru range widely because providers sell very different things under the same name. Five things move the cost far more than the brand, and any honest comparison has to hold them steady.',
      body: [
        { kind: 'ol', items: [
          '<strong>Live or recorded.</strong> A video library costs little because nobody watches the learner. A live class pays a mentor for every hour. Compare recorded with recorded and live with live.',
          '<strong>Group size.</strong> One to one costs more than a group because the mentor\'s whole hour goes to one learner. Our groups are fifteen to twenty learners of similar age; one-to-one classes are the alternative.',
          '<strong>Classes per month.</strong> Some fees cover four lessons, others eight or more. Our monthly fee covers eight live classes, two a week.',
          '<strong>How long the course runs.</strong> A short Scratch course may take a school term; a full Python or Java course takes most of a year. The monthly fee matters less than the number of months.',
          '<strong>What you must already own.</strong> A computer and a steady connection are the largest costs that never appear in a quote. The section on costs at home has INEI\'s figures for Peru.'
        ] },
        { kind: 'p', mt: true, html: 'We do not print other providers\' prices, and we do not print ours in the text either: our fee appears in the fee cards below, in US dollars, and a visitor from India sees it in rupees. Parents of primary-age children who would like the same subject explained in Spanish, with a lesson on comparing cost per live hour, can read <a class="ag-inline-link" href="/cuanto-cuestan-clases-de-programacion-para-ninos-peru">cuánto cuestan las clases de programación para niños</a>.' }
      ]
    },
    {
      id: 'year',
      tint: 'tint',
      eyebrow: 'Fitting the school year',
      h2: 'Which months should a family pay for coding classes?',
      lede: 'Not necessarily all twelve. Peru\'s school year has four teaching blocks separated by short breaks, and families often pause, slow down or speed up around them. Here is the 2026 calendar MINEDU set out for public and private schools.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru\'s 2026 school calendar (RM 501-2025-MINEDU, Tabla 1) beside a coding plan we often suggest', head: ['From', 'Until', 'At school', 'A coding plan (our suggestion)'], rows: [
          ['2 March', '13 March', 'Staff weeks, no pupils (2 weeks)', 'Book the free class; pick a course'],
          ['16 March', '15 May', 'Lessons, first block (9 weeks)', 'Start; two classes a week'],
          ['18 May', '22 May', 'One staff week, no lessons', 'Keep going, or a project week'],
          ['25 May', '24 July', 'Lessons, second block (9 weeks)', 'Steady; first big project'],
          ['27 July', '7 August', 'Two staff weeks, no lessons', 'Pause here if the family travels'],
          ['10 August', '9 October', 'Lessons, third block (9 weeks)', 'Steady; review at month six'],
          ['12 October', '16 October', 'One staff week, no lessons', 'Keep going'],
          ['19 October', '18 December', 'Lessons, fourth block (9 weeks)', 'Finish the course project'],
          ['21 December', '31 December', 'Two staff weeks, school year closes', 'A natural pause, or start summer early']
        ] },
        { kind: 'source', html: 'Dates: Tabla 1 of MINEDU\'s RM 501-2025, the technical norm for the 2026 school year, which we read in the signed PDF on 9 November 2026. It fixes thirty-six weeks of lessons and eight staff weeks, but a regional DRE or UGEL may move them and a school may split its year into bimestres or trimestres, so check your own school\'s dates. The right-hand column is our suggestion only. MINEDU had not yet published a 2027 calendar when we looked.' },
        { kind: 'two', mt: true,
          leftH3: 'What the calendar means for a budget',
          left: [
            'Our count: from 16 March to 18 December 2026 is forty weeks, of which thirty-six are teaching weeks. January and February sit outside the school year entirely, along with the first two weeks of March.',
            'That gives three natural shapes for a year of classes: steady all year; paused in one or two school breaks; or lighter during term and heavier in the summer, when there is no homework competing for time.'
          ],
          rightH3: 'What we see families do',
          right: [
            'Younger children often keep going through the short breaks, because a week off school is a good week for a project. Teenagers in 5th of secundaria often slow down in the months before university admission exams.',
            'Summer is the busiest start time. Families planning January to March can read our <a class="ag-inline-link" href="/peru-summer-holiday-coding-classes-online">summer holiday coding classes</a> page, or the Spanish <a class="ag-inline-link" href="/vacaciones-utiles-2027-programacion-online">vacaciones útiles 2027</a> page.'
          ] }
      ]
    },
    {
      id: 'budget',
      eyebrow: 'A real lesson',
      h2: 'How do I work out what a year of coding classes will cost?',
      lede: 'Write down a plan for each month, add it up as you go, and see where the running total crosses your budget. It is a small program and a useful first lesson in Python for teenagers and adults. The amounts are invented "units", not anyone\'s price.',
      body: [
        { kind: 'two',
          leftH3: 'The plan',
          left: [
            'A family plans twelve months starting in March: ten units a month for group classes, nothing in July while the family travels, and twenty a month in January and February for one-to-one summer classes. The budget for the year is 120 units.',
            'Adding the months by hand is easy to get wrong. <code>accumulate</code> from Python\'s <code>itertools</code> produces the running total after every month in one line.'
          ],
          rightH3: 'What the program finds',
          right: [
            'The year costs 130 units, ten over budget, and the program names February as the month the total crosses 120. The overshoot comes entirely from the summer plan.',
            'Version 2 compares three whole-year plans side by side. Keeping groups all year, or pausing in July and December and still doing one-to-one in the summer, both land exactly on budget.'
          ] },
        { kind: 'code', label: 'Version 1: one plan, a running total, the first month over', lang: 'Python', code: V1, note: 'It prints <code>[10, 20, 30, 40, 40, 50, 60, 70, 80, 90, 110, 130]</code> and then <code>Total: 130 | first month over budget: Feb</code>.' },
        { kind: 'code', label: 'Version 2: three plans for the same year', lang: 'Python', code: V2, note: 'It prints <code>summer 1-on-1   total 130  over budget in: Feb</code>, <code>group all year  total 120  over budget in: never</code> and <code>pause Jul + Dec total 120  over budget in: never</code>.' },
        { kind: 'p', mt: true, html: 'Two pieces of Python do the work. <code>accumulate(plan)</code> turns a list of monthly amounts into a list of totals so far. <code>next(..., "never")</code> walks those totals and stops at the first one over budget, returning the default if none is. The habit worth keeping is the comparison of whole plans: the month that looks expensive is rarely the one that breaks the budget.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predict.</strong> Before running Version 2, guess which plans stay within 120.',
          '<strong>Add a plan.</strong> Write a fourth plan that keeps one-to-one classes all year but stops after eight months. Is it under budget?',
          '<strong>Show the margin.</strong> Change the print line to show how far under or over budget each plan ends.',
          '<strong>Use real numbers.</strong> Replace the units with the fee in our cards, in your own copy of the program, and run it for your family.'
        ] }
      ]
    },
    {
      id: 'home',
      tint: 'tint',
      eyebrow: 'Costs nobody quotes',
      h2: 'What else does a family in Peru need to pay for besides the classes?',
      lede: 'A computer and an internet connection, if you do not already have them, and a way to pay by card. For many households in Peru these matter more than the monthly fee.',
      body: [
        { kind: 'table', numCols: [], caption: 'Households in Peru with internet and with a computer, second quarter of 2026 (percent)', head: ['Area', 'Internet at home', 'At least one computer'], rows: [
          ['Peru, all households', '64.5', '36.4'],
          ['Metropolitan Lima (with Callao)', '84.7', '53.3'],
          ['Other urban areas', '66.2', '41.3'],
          ['Rural areas', '27.1', '8.9']
        ] },
        { kind: 'source', html: 'Source: INEI, Estadísticas de las Tecnologías de Información y Comunicación en los Hogares, II Trimestre 2026, from the Encuesta Nacional de Hogares. INEI also reports that 74.3% of households with computers have just one.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'The computer', p: 'Coding needs a keyboard and a screen big enough to read code. A modest second-hand laptop is enough for everything up to university projects; a tablet suits only young children using blocks.' },
          { h3: 'The connection', p: 'A live class needs a steady connection more than a fast one. If the home connection is shared, choose class hours when fewer people are streaming.' },
          { h3: 'The card', p: 'We charge by card. The World Bank\'s Global Findex found that in 2024 36.7% of adults in Peru owned a debit card and 12.6% a credit card, so check whose card will pay before the first month.' }
        ] },
        { kind: 'p', mt: true, html: 'A note on what is free. Peruvian school includes no computing subject, but UTEC\'s computing olympiads are free for every secundaria pupil, and MINEDU\'s Fábrica de Programadores pilot has offered Python to 1,000 pupils in Lima Norte. If your teenager qualifies for either, use it; paid classes should add to free routes, not replace them.' }
      ]
    },
    {
      id: 'ours',
      eyebrow: 'Our fee',
      h2: 'How much do Modern Age Coders classes cost, and what does the fee include?',
      lede: 'Our monthly fee is in the fee cards on this page, in US dollars, for a group or for one to one. This is what that payment buys.',
      body: [
        { kind: 'two',
          leftH3: 'Included every month',
          left: [
            'Eight live classes, normally two a week, with the same mentor. Small tasks between classes, reviewed at the start of the next lesson. Notes for parents on what was built.',
            'Course materials, coding tools and project files. Everything we use is free software or runs in a browser, so there is nothing extra to buy.'
          ],
          rightH3: 'How payment works',
          right: [
            'Payment is monthly, by card, in US dollars; your bank converts it into soles. A small payment-gateway charge is shown at checkout before you confirm. There is no long contract, and the first class is free with no card.',
            'Families wanting one-to-one help without a full course can also read our Spanish page on <a class="ag-inline-link" href="/clases-particulares-de-programacion-online-peru">clases particulares de programación online</a>.'
          ] }
      ]
    },
    {
      id: 'english',
      tint: 'tint',
      eyebrow: 'The teaching language',
      h2: 'Do I pay more because the classes are in English?',
      lede: 'No. English is simply the language we teach in, for every learner in every country, and it costs nothing extra.',
      body: [
        { kind: 'p', html: 'What English does change is value. The learner practises technical English alongside coding, in the language of the documentation and error messages they will use for the rest of their life. EF\'s English Proficiency Index 2025 rates Peru 519 (moderate) and Lima 555 (high), so most teenagers and adults in the capital follow a slow, clear class comfortably, and children usually adapt within a few lessons. Our mentors, based in India, keep code on screen and type key words in the chat. More about this for families in the capital is on our page about <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Value for money',
    h2: 'What should a learner have to show for each month paid?',
    lede: 'Our own markers. If several months pass without these, the money is not working and you should tell us.',
    table: { numCols: [], caption: 'What each stretch of paid months should produce (ours)', head: ['After', 'A child of 6 to 12', 'A teenager or adult'], rows: [
      ['1 month', 'A small game or animation they explain', 'Programs with decisions and loops, typed alone'],
      ['3 months', 'A finished project with rules and a score', 'Functions, lists and a tested small tool'],
      ['6 months', 'Their own idea, planned and built', 'A multi-part project with error handling'],
      ['9 to 12 months', 'Typed code, not only blocks', 'A finished project presented in English']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask for the work, not the attendance list. A monthly fee buys progress you can see.',
      'If a child has stalled, a pause can be cheaper than pushing on. Talk to the mentor first.'
    ] },
    right: { h3: 'For adults paying for themselves', ps: [
      'Decide in advance how many months you will commit, and review at that point.',
      'Keep every program you write; the folder is your receipt for the money spent.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses, all on the same monthly basis',
    lede: 'Whatever the subject, payment works the same way: monthly, by card, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'CAA / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks to games, apps and a little AI.' },
        { code: 'CAA / KIDS / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Coding inside a game children already love.' },
        { code: 'CAA / KIDS / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'The first step into typed code.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'CAA / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A full year from first line to capstone.' },
        { code: 'CAA / TEEN / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive web pages, built from scratch.' },
        { code: 'CAA / TEEN / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models trained and tested by teenagers.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and over', courses: [
        { code: 'CAA / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'For adults who have never coded.' },
        { code: 'CAA / ADULT / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack web', blurb: 'Front end, back end and deployment.' },
        { code: 'CAA / ADULT / 03', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL databases', blurb: 'Designing and querying real databases.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How paid monthly classes work from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'School term', l: 'Classes around homework, at hours the family picks.' },
      { time: 'School breaks', l: 'Keep going, slow down, or pause; tell us in advance.' },
      { time: 'Summer', l: 'A good time to start, or to switch to one to one.' }
    ],
    cells: [
      { h3: 'Eight live classes a month', p: 'Normally two a week with one mentor.' },
      { h3: 'No hidden materials', p: 'Free tools and browser-based software only.' },
      { h3: 'Monthly payments', p: 'In US dollars, by card, no long contract.' },
      { h3: 'Batches by age', p: 'Learners grouped with others their age.' },
      { h3: 'Progress notes', p: 'What was built, and what comes next.' },
      { h3: 'Change format any time', p: 'Move between group and one to one.' }
    ]
  },

  projectsH2: 'What a year of classes can produce',
  projectsLede: 'Projects from learners who stayed with us for a year or more. The <a class="ag-inline-link" href="/student-labs">student labs</a> have more.',
  reviewsLede: 'Reviews from parents and learners on Google, copied as posted.',

  fees: {
    h2: 'Our monthly coding fee for learners in Peru',
    lede: 'The amounts below are monthly and in US dollars, charged to a card. Soles enter only when your bank converts the payment on the day, so a statement may differ by a few céntimos from the month before.',
    free: ['A free first class', 'Real coding, not a sales pitch', 'No card needed to book'],
    group: ['Fifteen to twenty learners of similar age', 'One mentor for the course', 'Eight live classes a month', 'Pay monthly; pause or stop when needed'],
    one: ['One learner, one mentor', 'Plan and pace set for you', 'Class hours you choose']
  },

  faq: {
    eyebrow: 'Questions from Peru',
    h2: 'The cost of coding classes in Peru: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. We teach in English alone, live and online, in every class and for every age. Teaching in English costs nothing extra; mentors keep their speech simple and slow, and keep the code on screen for learners still building their English.' },
      { q: 'How much do coding classes cost in Peru?', a: 'It depends on whether teaching is live or recorded, group or one to one, how many classes a month and how many months. Our own monthly fee is in the fee cards on this page, in US dollars. We do not quote other providers\' prices.' },
      { q: 'How many months will my child need?', a: 'A short Scratch course can fit in a school term. A full course in Python, Java or web development takes most of a year at two classes a week. Plan the year, then review progress every three months.' },
      { q: 'Can we pause during school breaks or holidays?', a: 'Yes. Payment is monthly with no long contract, so you can pause, for example in July or December, and restart later. Tell us in advance so the mentor can plan where the learner picks up.' },
      { q: 'Is one to one worth the extra cost?', a: 'For a learner with a clear goal, a deadline, or who needs a slower or faster pace, often yes. For steady progress and the company of other learners, a group is usually enough. The free class helps decide.' },
      { q: 'Are there extra costs for materials or kits?', a: 'No. We teach coding, not robotics hardware, and every tool we use is free or runs in a browser. The only extras are a computer and an internet connection at home.' },
      { q: 'Are there free coding classes in Peru?', a: 'Some routes are free: UTEC\'s computing olympiads for secundaria pupils and MINEDU\'s Fábrica de Programadores pilot for 1,000 pupils in Lima Norte. Coding is not a school subject. Our first class is free.' },
      { q: 'What time are classes in Peru?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Because Lima is ten and a half hours behind India whatever the season, 18:00 in Lima is 04:30 the following morning for the mentor.' },
      { q: 'How do I pay from Peru?', a: 'Monthly, by debit or credit card, in US dollars. Your bank converts the amount into soles. A small payment-gateway charge appears at checkout before you confirm. Booking the free class needs no card.' },
      { q: 'Do you charge more for adults?', a: 'The fee cards on this page show the current monthly fee for learners in Peru for a group and for one to one. The free first class is the place to ask about the course that fits an adult learner.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More on planning and paying for classes from Peru.',
    items: [
      { href: '/cuanto-cuestan-clases-de-programacion-para-ninos-peru', label: 'Cuánto cuestan las clases para niños', p: 'Our Spanish guide, comparing cost per live hour.' },
      { href: '/clases-particulares-de-programacion-online-peru', label: 'Clases particulares de programación', p: 'One-to-one coding, explained in Spanish.' },
      { href: '/peru-summer-holiday-coding-classes-online', label: 'Summer holiday coding classes', p: 'Starting in January to March.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Every Peru page in one index.' },
      { href: '/pricing', label: 'Pricing', p: 'Our fees, in one place.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a month of classes looks like.' }
    ]
  },

  start: {
    h2: 'Try a free class before you budget',
    lede: 'Book the free class first and decide about money afterwards. The learner writes real code with a mentor, and then we can talk through which course fits, how many months it usually takes, and whether a group or one to one makes sense for your budget.',
    readFirst: 'You can read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or check every syllabus in the <a class="ag-inline-link" href="/courses">course list</a>.',
    note: 'Classes are live video lessons taught from India in English. We answer WhatsApp messages in English.',
    formNote: 'Free. No card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Planning', links: [
        { href: '/pricing', label: 'Pricing' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' },
        { href: '/student-labs', label: 'Student labs' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru' },
        { href: '/cuanto-cuestan-clases-de-programacion-para-ninos-peru', label: 'Cuánto cuestan' },
        { href: '/peru-summer-holiday-coding-classes-online', label: 'Summer classes' },
        { href: '/english-medium-coding-classes-lima', label: 'Coding in English, Lima' }
      ] }
    ],
    bottomRight: 'Budget the year, not the month'
  },

  personalityCss: `
.ag-root.ag-caa .ag-hero h1 { max-width: 20ch; letter-spacing: -0.015em; }
.ag-root.ag-caa .ag-capsule { border-left-width: 6px; }
.ag-root.ag-caa .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-caa .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-caa .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU RM 501-2025 (Norma Técnica para el Año Escolar 2026, Tabla 1, checked by eye); INEI Boletín TIC II trimestre 2026; World Bank Global Findex 2024 (Peru); UTEC OPI home; MINEDU Fábrica de Programadores press note; CNEB plans of study; EF EPI 2025. Read 8 and 9 November 2026.',
    localProject: 'An original Python budgeting lesson for families in Peru: a twelve-month plan in invented units (March to February, July paused, one-to-one in January and February) run through itertools.accumulate prints [10, 20, 30, 40, 40, 50, 60, 70, 80, 90, 110, 130], and next() finds February as the first month over a budget of 120; a second version compares three whole-year plans. Lesson family: running totals with accumulate and next().',
    requiredMentions: ['[10, 20, 30, 40, 40, 50, 60, 70, 80, 90, 110, 130]', 'Total: 130 | first month over budget: Feb', 'group all year  total 120  over budget in: never', 'Budget the year, not the month', 'planned over a year', 'from 16 March to 18 December 2026 is forty weeks', '36.7% of adults in Peru owned a debit card', 'Metropolitan Lima (with Callao)'],
    sources: [
      { claim: '2026 school calendar, Tabla 1; 36 teaching and 8 management weeks; DRE/UGEL may vary; bimestres or trimestres.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'Households with internet and with a computer by area; 74.3% have one computer, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Peru 2024: owns a debit card 36.7%, owns a credit card 12.6% (age 15+).', url: 'https://www.worldbank.org/en/publication/globalfindex' },
      { claim: 'UTEC olympiads free for every secundaria pupil.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'Fábrica de Programadores: 1,000 pupils in Lima Norte, Python.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'EF EPI 2025: Peru 519, Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'Any competitor price or price range for coding classes in Peru: refused; no figure printed.',
      'Our fee typed in copy or converted into soles: refused; the fee renders from the template in USD.',
      'Average cost of a laptop or internet plan in Peru: no primary source fetched; none given.',
      'Consumer-law statements on foreign-currency pricing: legal questions for the owner (LEGAL.md), not page copy.',
      'A 2027 school calendar: not published on gob.pe at 8 November 2026; only 2026 is shown.'
    ]
  }
};
