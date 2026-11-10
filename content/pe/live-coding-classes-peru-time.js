// SHIP: market | Peru time and live classes from India: UTC-5 all year, 10 h 30 ahead, booking in your own clock | aware datetimes with zoneinfo: astimezone() across midnight, January equals July, the forgotten half hour
'use strict';
// Live coding classes and Peru time (ag- English guide, Peru cluster row PE077, hubGroup guides; alloc lct, #934F00).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing "flexible any time all time".
// Audience: anyone in Peru booking live classes with us (parents of children, teenagers, adults) who wants to know how the
// clock works between Peru and India and how flexible scheduling works in practice.
// Spine (different from ai-and-coding-for-professionals-peru, which compares Lima with six business cities, and from the
// hub's age-cutoff example): what time zone Peru is in and who keeps it (three official records, the page's primary-source
// table: tzdata, INACAL's clock feed, INEI Compendio 2026 cuadro 1.3 from IGP); the 10 h 30 gap and the date line it
// creates; how booking in your own clock works (numbered steps); example conversions only; how the Peruvian school day
// and calendar shape the hours families choose (RM 501-2025, CNEB JEC, hora pedagógica); a zoneinfo check in Python.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src/time/, src/inei/pub/, facts-school/src/ and
// facts-market/src/, read 9 November 2026; every quote string-matched in the raw text):
//  - tzdata southamerica (src/time/tz-southamerica): "Zone	America/Lima	-5:08:12 -	LMT	1890" ... "-5:00	Peru	%z";
//    last rules "Rule	Peru	1994	only	-	Jan	 1	0:00	1:00	-" and "Rule	Peru	1994	only	-	Apr	 1	0:00	0	-".
//  - tzdata asia (src/time/tz-asia): Zone Asia/Kolkata, current line "5:30	-" (abbreviation not printed on the page).
//  - INACAL official-time clock feed (src/time/inacal-hourServer2.js, https://www.inacal.gob.pe/Horaoficial/hourServer2.php):
//    "H = new Date(26,11,08,11,23,57)", fetched at 16:24:04 UTC on 8 November 2026 (facts-geo/GEO.md), so UTC-5.
//  - INEI, Compendio Estadístico Perú 2026, tomo 1, cuadro 1.3 "HORA Y UBICACIÓN GEOGRÁFICA DE CIUDADES PRINCIPALES DEL
//    MUNDO" (src/inei/pub/compendio2026-tomo1.txt): "Lima  Perú 12:00 M. 77°02'  O 12°00'  S"; "Delhi  India 10:30  P.M.";
//    "Bombay  India 10:30  P.M."; "Calcuta  India  10:30  P.M.".
//  - RM 501-2025-MINEDU (facts-school/src/rm501-2025-pdf/text.txt, OCR, Tabla 1): "Del 2 al 13 de marzo", "Del 16 marzo al
//    15 de mayo", "Del 19 octubre a 18 de diciembre"; "treinta y seis (36) semanas lectivas".
//  - CNEB (facts-school/src/cneb/text.txt): "horas pedagógicas (45 minutos)"; JEC "Total de horas 45 45 45 45 45".
//  - INEI TIC II Trimestre 2026 (facts-market/src/inei_tic_iit2026.txt): "el mayor nivel de uso de Internet se registró en
//    Lima Metropolitana, con un 92,4%; seguido del resto urbano con 86,1%; y del área rural, con un 63,7%."
//  - EF EPI 2025 Peru page (facts-market/src/ef_peru.txt): Lima 555, band "high" from 550.
// Our own calculations: every conversion row (zoneinfo, 20 January 2027, checked against 20 July 2027).
// Our own example (clock77.py and clock77b.py, run with python3 -I, exact output): "20 Jan 07:30 Lima -> 20 Jan 18:00 India |
// offsets -0500 +0530" ... "20 Jul 16:45 Lima -> 21 Jul 03:15 India | offsets -0500 +0530"; "Mentor's clock: Thursday 21
// January, 06:00", "Family's clock: Wednesday 20 January, 19:30", "Hand sum, forgot the half hour: Wednesday 20 January, 20:00".
// Lesson family: time-zone-aware datetimes (zoneinfo, astimezone), the date rolling over at midnight, the same offsets in
// January and July, and a naive hand sum that drops the half hour.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'from datetime import datetime',
  'from zoneinfo import ZoneInfo',
  '',
  'lima = ZoneInfo("America/Lima")',
  'india = ZoneInfo("Asia/Kolkata")',
  '',
  'for day in [(2027, 1, 20), (2027, 7, 20)]:',
  '    for hour, minute in [(7, 30), (13, 0), (16, 45)]:',
  '        here = datetime(*day, hour, minute, tzinfo=lima)',
  '        there = here.astimezone(india)',
  '        print(here.strftime("%d %b %H:%M Lima"), "->", there.strftime("%d %b %H:%M India"),',
  '              "| offsets", here.strftime("%z"), there.strftime("%z"))'
].join('\n');

const OUT1 = [
  '20 Jan 07:30 Lima -> 20 Jan 18:00 India | offsets -0500 +0530',
  '20 Jan 13:00 Lima -> 20 Jan 23:30 India | offsets -0500 +0530',
  '20 Jan 16:45 Lima -> 21 Jan 03:15 India | offsets -0500 +0530',
  '20 Jul 07:30 Lima -> 20 Jul 18:00 India | offsets -0500 +0530',
  '20 Jul 13:00 Lima -> 20 Jul 23:30 India | offsets -0500 +0530',
  '20 Jul 16:45 Lima -> 21 Jul 03:15 India | offsets -0500 +0530'
].join('\n');

const V2 = [
  'from datetime import datetime, timedelta',
  'from zoneinfo import ZoneInfo',
  '',
  'lima = ZoneInfo("America/Lima")',
  'india = ZoneInfo("Asia/Kolkata")',
  '',
  '# A mentor offers 06:00 India time on Thursday 21 January 2027.',
  'slot = datetime(2027, 1, 21, 6, 0, tzinfo=india)',
  'print("Mentor\'s clock:", slot.strftime("%A %d %B, %H:%M"))',
  'print("Family\'s clock:", slot.astimezone(lima).strftime("%A %d %B, %H:%M"))',
  '',
  '# The same sum done by hand, with a naive time and no zone.',
  'naive = datetime(2027, 1, 21, 6, 0) - timedelta(hours=10)',
  'print("Hand sum, forgot the half hour:", naive.strftime("%A %d %B, %H:%M"))'
].join('\n');

const OUT2 = [
  "Mentor's clock: Thursday 21 January, 06:00",
  "Family's clock: Wednesday 20 January, 19:30",
  'Hand sum, forgot the half hour: Wednesday 20 January, 20:00'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Class times in Peru time' },
  slug: 'live-coding-classes-peru-time',
  code: 'lct',
  accent: '#934F00',
  accentRationale: 'Live coding classes and Peru time: a burnt amber #934F00, the colour of late-afternoon light on Lima\'s adobe walls, for a page about hours of the day; above 4.5:1 on the paper #FBF8F2 and every paper tone the build checks',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Live coding classes in Peru time',
  title: 'Live Coding Classes in Peru Time: How Flexible Hours Work',
  description: 'How live online coding classes in English fit Peru time: UTC-5 all year, India 10 hours 30 ahead, flexible hours booked on your own clock, with example conversions.',
  ogDescription: 'Peru keeps UTC-5 all year and India UTC+5:30, so the gap is always 10 hours 30 minutes. Who keeps Peru\'s official time, how booking on your own clock works, and a Python check with zoneinfo.',
  twitterDescription: 'Live classes from India, at the hour you choose in Peru: the clock facts, the date line, and how flexible booking works.',
  pageName: 'Live Coding Classes in Peru Time',
  webPageDescription: 'A guide to how live online classes taught from India fit the clock in Peru, built from the IANA tz database, INACAL\'s official-time clock feed, INEI\'s Compendio Estadístico Perú 2026, RM 501-2025-MINEDU, the CNEB and INEI household technology data for 2026, with an original Python example using zoneinfo.',
  courseDescription: 'Live online coding, AI and maths classes for children, teenagers and adults in Peru, taught in English by mentors based in India, in a group of fifteen to twenty or one to one, at any hour the learner chooses in Peru time.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Class times in Peru',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#zone', label: 'Peru\'s clock' },
    { href: '#gap', label: 'The gap' },
    { href: '#booking', label: 'Booking' },
    { href: '#school', label: 'School hours' },
    { href: '#python', label: 'Python check' }
  ],
  eyebrow: 'Peru &middot; Time and scheduling &middot; Live, in English',
  h1: 'Live coding classes in Peru time',
  lede: 'Our mentors teach from India and our students learn from Lima, Arequipa, Cusco, Piura and everywhere between. The clocks are ten and a half hours apart, and that sounds harder than it is. This page explains how the two clocks relate, who keeps Peru\'s official time, how you book a class in your own clock, and why an hour you choose in March is still the same hour in August.',
  secondaryCta: { href: '#booking', label: 'How booking works' },
  wa: 'Hello Modern Age Coders, we are in Peru and would like live classes in English. Which hours could work in Peru time?',
  heroNote: 'Teaching live since 2020 &middot; 4.9 from about 547 Google reviews &middot; every class booked in Peru time, at the hour you choose',
  spec: [
    ['Peru time', 'UTC minus 5, all year'],
    ['India time', 'UTC plus 5:30, all year'],
    ['The gap', 'India 10 h 30 min ahead'],
    ['Clock changes', 'None in either country'],
    ['Booking', 'In your own Peru clock'],
    ['Class hours', 'Any day, any time']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches live, online classes in English from India, and families in Peru book them at any hour that suits them. Peru keeps UTC minus 5 all year (IANA zone America/Lima, official time kept by INACAL) and India keeps UTC plus 5:30, so India is always 10 hours 30 minutes ahead. Neither country changes its clocks, so a class booked at 17:00 in Peru stays at 17:00 every month. You pick the hour in Peru time, in a group or one to one, and the mentor works to it.',

  picks: {
    eyebrow: 'Popular starting points',
    h2: 'Three courses families in Peru often book first',
    lede: 'One for children, one for teenagers and one for adults. Each runs at the hours you choose in Peru time.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'LCT / 01', title: 'Coding for Kids', note: 'Ages 6 to 12, grouped by age. Block coding from stories to games and small apps; most families pick late afternoon or summer mornings in Peru.' },
      { course: 'python-complete-masterclass-teens', code: 'LCT / 02', title: 'Python for Teens', note: 'Ages 13 to 18. From the first line of Python to real projects; teenagers often book after the school shift or at weekends.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'LCT / 03', title: 'Python from Zero to Advanced', note: 'For university students and working adults. Early-morning and evening Peru hours are both possible, around lectures or a job.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who this page is for',
      h2: 'Who needs to know how Peru time and India time fit together?',
      lede: 'Anyone in Peru thinking about live classes with mentors in India: parents booking for a child, teenagers organising their own week, and adults fitting lessons around work.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Parents', p: 'You want a class at an hour your child is fresh, not squeezed between school and dinner. You need to know that the hour will not drift and that nobody will ask you to convert anything.' },
          { h3: 'Teenagers', p: 'Your timetable changes with every school year and every exam season. You want to know how easy it is to move a class and what happens around holidays.' },
          { h3: 'Adults', p: 'You work Peru office hours, perhaps with colleagues in other countries. You want a class before work, after work or at lunch, and to know what that means for the teacher.' }
        ] },
        { kind: 'p', mt: true, html: 'If you read Spanish more easily, our page <a class="ag-inline-link" href="/clases-de-programacion-en-ingles-peru">clases de programación en inglés en Perú</a> explains the classes themselves in Spanish. All lessons, whatever page you read, are live and taught in English.' }
      ]
    },
    {
      id: 'zone',
      tint: 'tint',
      eyebrow: 'Peru\'s clock',
      h2: 'What time zone is Peru in, and does it change in summer?',
      lede: 'Peru uses UTC minus 5 all year and has not changed its clocks for summer since 1994. Three official records, each from a different keeper, say the same thing.',
      body: [
        { kind: 'table', numCols: [], caption: 'Three official records of the clock in Peru, and what each one shows', head: ['Record', 'Kept by', 'What it shows'], rows: [
          ['tz database, zone America/Lima', 'IANA (the time zone database used by computers and phones)', 'Standard offset minus 5:00; the last summer-time rule for Peru ran from 1 January to 1 April 1994'],
          ['Official-time clock feed', 'INACAL, Peru\'s national quality institute, which keeps official time', 'Read at 16:24:04 UTC on 8 November 2026, it gave 11:23:57, five hours behind UTC'],
          ['Compendio Estadístico Perú 2026, cuadro 1.3', 'INEI, from Instituto Geofísico del Perú data', 'When it is 12:00 noon in Lima, it is 10:30 p.m. in Delhi, Mumbai (Bombay in the table) and Kolkata (Calcuta)']
        ] },
        { kind: 'source', html: 'Sources: IANA tz database, file southamerica (Zone America/Lima, Rule Peru); INACAL, hourServer2.php clock feed on www.inacal.gob.pe; INEI, Compendio Estadístico Perú 2026, tomo 1, cuadro 1.3. All read on 8 and 9 November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Why the computer record matters',
          left: [
            'Your phone, your laptop and our booking system all take their time rules from the same tz database. Its entry for Lima is short: a local mean time until 1908, then UTC minus 5, with occasional summer-time rules that stopped after 1994.',
            'That is why a booking made in Peru time never jumps by an hour in October or March the way bookings do in countries with daylight saving. There is simply no switch to make.'
          ],
          rightH3: 'Why the official record matters',
          right: [
            'INACAL is the body that keeps official time in Peru, and its own clock feed matched UTC minus 5 when we read it. INEI\'s statistical compendium, using data from the Instituto Geofísico del Perú, prints the same gap to India: noon in Lima, 10:30 at night in Delhi.',
            'One small curiosity from that INEI table: Lima sits at longitude 77°02\' west and Delhi at 77°15\' east. The cities are almost mirror images either side of the Greenwich meridian, which is part of why their clocks sit so far apart.'
          ] }
      ]
    },
    {
      id: 'gap',
      eyebrow: 'The gap',
      h2: 'How far ahead of Peru is India, and when does the date change?',
      lede: 'India is 10 hours 30 minutes ahead of Peru on every day of the year. From 13:30 in Peru onwards, it is already the next calendar day in India.',
      body: [
        { kind: 'two',
          leftH3: 'Where the half hour comes from',
          left: [
            'Most of the world\'s time zones are whole hours from UTC. India chose a single zone half-way between two, at UTC plus 5:30. Peru is a whole-hour zone at UTC minus 5. Add the two distances together and you get ten and a half hours.',
            'The half hour catches people out. Adding ten hours in your head is easy; remembering the extra thirty minutes is where mistakes happen, as the Python example further down shows.'
          ],
          rightH3: 'Where the date line falls',
          right: [
            'At 13:30 in Peru it is exactly midnight in India. Any class you book after 13:30 Peru time happens on the next date for the mentor. That changes nothing for you: you see your own date and your own hour.',
            'It does explain why mentors can teach your afternoon and evening: for them it is night or early morning, and they choose to work those hours so that learners in the Americas get the times they want.'
          ] },
        { kind: 'table', numCols: [], caption: 'Example Peru hours and the same moment in India (conversions only; not a timetable and not a list of fixed classes)', head: ['Peru time', 'India time', 'Day in India'], rows: [
          ['06:00', '16:30', 'Same day'],
          ['09:00', '19:30', 'Same day'],
          ['13:30', '00:00', 'Next day (exactly midnight)'],
          ['18:00', '04:30', 'Next day'],
          ['21:00', '07:30', 'Next day']
        ] },
        { kind: 'source', html: 'Conversions computed by us with Python\'s zoneinfo for 20 January 2027 and checked against 20 July 2027; both dates give the same result because neither zone changes.' }
      ]
    },
    {
      id: 'booking',
      tint: 'tint',
      eyebrow: 'Flexible scheduling',
      h2: 'How does flexible scheduling work for a family in Peru?',
      lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. In practice it goes like this.',
      body: [
        { kind: 'ol', items: [
          '<strong>Tell us the hours that suit you, in Peru time.</strong> On the form or on WhatsApp, write them as you would for anyone in Peru: "weekdays after 16:00", "Saturday mornings", "before 08:00". You never need to convert.',
          '<strong>Book the free class on your own clock.</strong> Our booking page shows times in the time zone of the device you are using, so in Peru you see Peru hours. The mentor sees the same moment in India time.',
          '<strong>Choose a group or one to one.</strong> A group of fifteen to twenty learners of similar age and level runs at hours agreed for that group; one-to-one lessons are set entirely around you.',
          '<strong>Meet your mentor.</strong> The mentor who takes the free class, or one matched to the hours you gave, teaches the course. The same person teaches you week after week.',
          '<strong>Keep the hour all year.</strong> Because neither country changes its clocks, the hour you start with stays the same through the school year and the summer.',
          '<strong>Change it when life changes.</strong> A new school shift, an exam season or a new job: tell us, and we look for a new hour or a different group.'
        ] },
        { kind: 'p', mt: true, html: 'There is no published Peru class grid, and we never promise a particular weekend group in advance, because hours are set around the learners who join. The examples on this page are conversions, so you can see what an hour means on both sides.' }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Around the school day',
      h2: 'Which hours suit a school day in Peru?',
      lede: 'It depends on the school shift and the time of year. Two MINEDU documents explain most of what families tell us.',
      body: [
        { kind: 'two',
          leftH3: 'The school year',
          left: [
            'MINEDU\'s norm for 2026, RM 501-2025-MINEDU, set thirty-six teaching weeks: the first block ran from 16 March and the last ended on 18 December 2026, with management weeks from 2 to 13 March before pupils returned.',
            'So January and February sat outside the 2026 school calendar. Families often move classes to mornings in those months, then back to afternoons in March. With no clock change in Peru or India, only your own routine moves.'
          ],
          rightH3: 'The school day',
          right: [
            'The CNEB counts school time in teaching periods of 45 minutes. Secundaria schools on the full school day, the Jornada Escolar Completa, have 45 periods a week, so their pupils are home later than those on the regular day.',
            'That is why families tell us their child\'s shift before we suggest an hour. Morning-shift pupils often take classes after lunch; full-day pupils prefer evenings or Saturday; younger children learn most before about 18:30.'
          ] },
        { kind: 'p', mt: true, html: 'Getting online is rarely the problem in the cities. INEI found that 92.4% of people aged 6 and over in Lima Metropolitana used the internet in the second quarter of 2026, against 86.1% in the rest of urban Peru and 63.7% in rural areas. For the summer, our <a class="ag-inline-link" href="/peru-summer-holiday-coding-classes-online">summer holiday coding classes</a> page suggests what to do with the free months.' }
      ]
    },
    {
      id: 'adults',
      tint: 'tint',
      eyebrow: 'For adults',
      h2: 'Can adults in Peru take live classes before or after work?',
      lede: 'Yes. Early mornings in Peru are evenings in India, and Peru evenings are early mornings in India, so both ends of a working day are open.',
      body: [
        { kind: 'two',
          leftH3: 'Before work',
          left: [
            'A class from 06:00 to 08:00 in Lima is 16:30 to 18:30 in India: a comfortable working afternoon for a mentor. Professionals who like to learn before the day starts often take this slot one to one.',
            'Lunchtime works too. A class at 12:00 in Peru is 22:30 in India, which some of our mentors are happy to teach.'
          ],
          rightH3: 'After work',
          right: [
            'Evenings in Peru from 19:00 to 22:00 are 05:30 to 08:30 the next morning in India. Mentors who teach the Americas plan their day around exactly these hours.',
            'Adults in Lima also tend to be comfortable in English: in the EF English Proficiency Index 2025, Lima scored 555, in EF\'s "high" band. For more on courses around a job, see <a class="ag-inline-link" href="/ai-and-coding-for-professionals-peru">AI and coding for professionals in Peru</a>.'
          ] }
      ]
    },
    {
      id: 'python',
      eyebrow: 'An original Python check',
      h2: 'How can you check a class time between Peru and India in Python?',
      lede: 'With the zoneinfo module, which uses the same tz database as your phone. We use this small lesson with teenagers and adults: it is real code, and it shows why clock arithmetic belongs to the computer.',
      body: [
        { kind: 'two',
          leftH3: 'Aware times, not naive ones',
          left: [
            'A Python <code>datetime</code> with no zone attached is "naive": it is a number on a clock face with no place. Attach <code>ZoneInfo("America/Lima")</code> and it becomes "aware": a real moment that can be shown in any other zone.',
            '<code>astimezone()</code> then converts the moment to India time, including the date. We try three Lima times on 20 January and 20 July 2027, to test the claim that nothing changes between the seasons.'
          ],
          rightH3: 'What to look for',
          right: [
            'The <code>%z</code> code prints each offset. If Peru used summer time, January and July would show different offsets. If the date line works, 16:45 in Lima should land on the next day in India.',
            'The run below shows both. Then a second script starts from the mentor\'s side, the way a teacher in India might offer a slot, and compares the right answer with a quick sum done by hand.'
          ] },
        { kind: 'code', label: 'Version 1: three Lima times in January and July, converted to India time', lang: 'Python', code: V1 },
        { kind: 'code', label: 'What Version 1 prints', lang: 'Output', code: OUT1, note: 'Exact output when we ran it with Python 3 (python3 -I). The offsets are -0500 and +0530 in both months, and 16:45 in Lima is 03:15 the next day in India.' },
        { kind: 'code', label: 'Version 2: a slot offered in India time, and the same sum done carelessly', lang: 'Python', code: V2 },
        { kind: 'code', label: 'What Version 2 prints', lang: 'Output', code: OUT2, note: 'Exact output of our run. The correct conversion gives 19:30 on Wednesday in Peru; subtracting ten hours by hand and forgetting the half hour gives 20:00, thirty minutes late.' },
        { kind: 'p', mt: true, html: '<strong>The hand sum was off by exactly the half hour that makes the Peru and India gap unusual.</strong> Nothing crashed and nothing looked wrong; the answer was simply thirty minutes late. That is the kind of error we train learners to expect from any confident shortcut, whether it is their own mental arithmetic or a line of code an AI tool suggests. Our booking system converts times this way, with zones attached, which is why you never have to.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Our practice, predict.</strong> Before running anything, work out the India time for 13:30 in Lima. Then check it in Python. What is special about the answer?',
          '<strong>Our practice, reverse.</strong> Change Version 2 so the mentor offers 21:00 India time on a Saturday. What day and hour is that in Peru?',
          '<strong>Our practice, a loop.</strong> Print every whole hour from 06:00 to 22:00 in Lima with its India time, and mark the rows where India is on the next day.',
          '<strong>Our practice, explain.</strong> In two English sentences, say why a naive datetime is risky for anything involving two countries.'
        ] }
      ]
    },
    {
      id: 'travel',
      tint: 'tint',
      eyebrow: 'Travel and moves',
      h2: 'What if we travel or move within Peru?',
      lede: 'Within Peru, nothing changes: the whole country is one time zone. Outside Peru, tell your mentor before you go.',
      body: [
        { kind: 'two',
          leftH3: 'Inside Peru',
          left: [
            'Tumbes, Lima, Cusco, Iquitos and Puno all keep the same clock, so a family who moves from Trujillo to Arequipa keeps its class hour exactly. Only the internet connection needs checking.',
            'The same is true for holidays inside the country. A class at 17:00 is at 17:00 whether your child is at home in Lima or at their grandparents\' house in Huancayo.'
          ],
          rightH3: 'Outside Peru',
          right: [
            'If you travel to a country with a different clock, our booking page shows the class in the zone of your device, but the class itself does not move. Let your mentor know, and agree whether to keep the hour, move it or pause.',
            'Families in Lima from abroad, including many at international schools, will find more about classes for them on our <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> page.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Planning a year',
    h2: 'How might a family in Peru plan class hours across a year?',
    lede: 'One example, written by us for a child in a morning school shift. It shows how hours shift with the school calendar; it is not a timetable, and your own plan is set with you.',
    table: { numCols: [], caption: 'An example year of class hours for a child in Peru (our illustration, not a schedule)', head: ['Period', 'Example Peru hour', 'Same moment in India', 'Why it changes'], rows: [
      ['January and February', '09:00', '19:30', 'No school; mornings are fresh'],
      ['March to mid-May', '16:00', '02:30, next day', 'School is back; after lunch and a rest'],
      ['A one-week break', '10:00', '20:30', 'An extra morning class if wanted'],
      ['Mid-year break', '09:30', '20:00', 'Two weeks free of school'],
      ['August to December', '16:00', '02:30, next day', 'Back to the term-time hour']
    ] },
    left: { h3: 'For parents', ps: [
      'Choose the term-time hour first, because it lasts longest. Holiday hours are a bonus, not a requirement.',
      'Tell us about exam weeks early. Moving a class for a week is easy when it is planned.'
    ] },
    right: { h3: 'For learners', ps: [
      'Pick the hour when your head is clearest, not the hour that is left over.',
      'If a class hour stops working, say so. Hours can change; a tired learner learns little.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses taught at Peru-friendly hours',
    lede: 'Every course is live and in English, and every one can run at the hours you choose, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'LCT / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Blocks to games in about three months.' },
        { code: 'LCT / KIDS / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed code for nine to twelve year olds.' },
        { code: 'LCT / KIDS / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary maths', blurb: 'Grades 1 to 5, placed by level.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'LCT / TEEN / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'From Python to real models.' },
        { code: 'LCT / TEEN / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Object-oriented programming, step by step.' },
        { code: 'LCT / TEEN / 03', slug: 'igcse-mathematics-mastery', title: 'IGCSE mathematics', blurb: 'For Cambridge-curriculum students in Peru.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'University and work', courses: [
        { code: 'LCT / ADULT / 01', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'How modern AI works, and how to use it well.' },
        { code: 'LCT / ADULT / 02', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI coding agents', blurb: 'Working with coding agents, for adults.' },
        { code: 'LCT / ADULT / 03', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'Python, statistics and real datasets.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How hours are set for learners in Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings', l: 'Peru mornings are India evenings: easy for both sides.' },
      { time: 'Afternoons and evenings', l: 'India is past midnight; our mentors teach these hours by choice.' },
      { time: '1-on-1', l: 'Any hour you name, set around one learner.' }
    ],
    cells: [
      { h3: 'Your clock only', p: 'Every time we send you is in Peru time.' },
      { h3: 'No seasonal shift', p: 'Neither country changes clocks, so hours hold all year.' },
      { h3: 'The same mentor', p: 'One teacher, week after week.' },
      { h3: 'Groups by level', p: 'Fifteen to twenty learners of a similar age and stage.' },
      { h3: 'Easy changes', p: 'New shift or new job: tell us and we adjust.' },
      { h3: 'Two formats', p: 'A group, or one to one.' }
    ]
  },

  projectsH2: 'What learners build, whatever the hour',
  projectsLede: 'Classes at 07:00 or 19:00 produce the same work. A few projects by our students are below, and more are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What students and parents wrote on Google, word for word.',

  fees: {
    h2: 'Fees for learners in Peru',
    lede: 'Fees are in US dollars, paid monthly by card. Your card issuer converts each payment to soles at its own rate on the day, so the amount on your statement may vary slightly from month to month. The hour you choose never changes the fee.',
    free: ['A free first class', 'Booked at an hour you choose in Peru time', 'No card needed'],
    group: ['Fifteen to twenty learners of similar level', 'One mentor throughout', 'Two live classes a week', 'Monthly, stop any time'],
    one: ['One learner, one mentor', 'Any hour you name', 'Pace set around you']
  },

  faq: {
    eyebrow: 'Questions from Peru',
    h2: 'Class times in Peru: questions we are asked',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and taught in English only, by mentors who speak clearly, follow the learner\'s pace and accent, and show each step on screen. This page talks about clocks, but the language of every class is English.' },
      { q: 'What time zone is Peru in?', a: 'UTC minus 5, all year. In the tz database used by phones and computers the zone is America/Lima, and INACAL keeps Peru\'s official time. Peru has not used summer time since 1994.' },
      { q: 'How many hours ahead of Peru is India?', a: 'Ten hours and thirty minutes, every day of the year. India uses UTC plus 5:30 and does not change its clocks either, so the gap never moves.' },
      { q: 'When are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. You tell us your hours in Peru time and we match a group or set one-to-one lessons around them.' },
      { q: 'Do I have to convert times myself?', a: 'No. Our booking page shows the time zone of your device, so in Peru you see Peru time. Every time we write to you is in Peru time too.' },
      { q: 'Can my child have class in the afternoon if it is night in India?', a: 'Yes. Our mentors who teach learners in the Americas choose to work those hours. A class at 16:00 in Peru is 02:30 the next day in India, and that is a normal teaching hour for them.' },
      { q: 'Will my class hour change during the year?', a: 'Not because of clocks: neither Peru nor India changes time. It changes only if you ask, for example when a school shift or a job changes.' },
      { q: 'What happens if we travel abroad?', a: 'The class stays at the same moment, so in another time zone it will show a different local hour. Tell your mentor before you travel and agree whether to keep it, move it or pause.' },
      { q: 'Is there a fixed weekly timetable for Peru?', a: 'No. Groups run at hours agreed with the learners in them, and one-to-one lessons are set around you. We do not promise a particular weekend group in advance.' },
      { q: 'Are you connected with INACAL, MINEDU or any Peruvian institution?', a: 'No. We cite INACAL, INEI and MINEDU as sources only. Modern Age Coders is a private online school with mentors in India and no link to any Peruvian institution or school.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More about live classes',
    lede: 'Pages that explain the rest of how classes work.',
    items: [
      { href: '/how-we-teach', label: 'How we teach', p: 'One live lesson, start to finish.' },
      { href: '/we-teach-you-how-to-think', label: 'Thinking first', p: 'Why our mentors ask before they tell.' },
      { href: '/coding-roadmap', label: 'Coding roadmap', p: 'What to learn, in what order, at any age.' },
      { href: '/ai-tools-age-guide', label: 'AI tools by age', p: 'The minimum age each AI maker sets.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects by our students.' },
      { href: '/courses', label: 'All courses', p: 'Every syllabus in one place.' }
    ]
  },

  start: {
    h2: 'Book a free class at an hour that suits you in Peru',
    lede: 'Tell us the hours that work for you, in Peru time, and book a free first class. The mentor meets the learner, sets a short task, and suggests a course, a format and an hour that will hold for the months ahead.',
    readFirst: 'Want to see a class first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through one, and the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus.',
    note: 'Live classes from India, taught in English. On WhatsApp, write your preferred hours in Peru time.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Live classes', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-roadmap', label: 'Coding roadmap' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/english-medium-coding-classes-lima', label: 'Coding in English, Lima' },
        { href: '/peru-summer-holiday-coding-classes-online', label: 'Summer classes' },
        { href: '/clases-de-programacion-en-ingles-peru', label: 'Leer en español' }
      ] }
    ],
    bottomRight: 'Ten hours, and the half hour'
  },

  personalityCss: `
.ag-root.ag-lct .ag-hero h1 { max-width: 15ch; letter-spacing: -0.01em; }
.ag-root.ag-lct .ag-capsule { border-left-width: 5px; }
.ag-root.ag-lct .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-lct .ag-steps li { line-height: 1.7; }
.ag-root.ag-lct .ag-code pre { line-height: 1.5; }
`,

  dossier: {
    curriculumAuthority: 'IANA tz database (southamerica and asia files); INACAL official-time clock feed; INEI Compendio Estadístico Perú 2026, cuadro 1.3 (IGP data); RM 501-2025-MINEDU Tabla 1; CNEB (hora pedagógica, Jornada Escolar Completa total); INEI Estadísticas de las TIC en los Hogares, II Trimestre 2026; EF EPI 2025 Peru page. Read 8 and 9 November 2026.',
    localProject: 'An original Python check with zoneinfo: three Lima times on 20 January and 20 July 2027 converted to India time show the same offsets (-0500 and +0530) in both months and 16:45 in Lima landing on the next day at 03:15; a mentor\'s 06:00 India slot on Thursday 21 January 2027 converts to Wednesday 20 January, 19:30 in Peru, while a naive hand sum gives 20:00. Lesson family: time-zone-aware datetimes, the date line, and the forgotten half hour.',
    requiredMentions: ['21 Jul 03:15 India | offsets -0500 +0530', "Family's clock: Wednesday 20 January, 19:30", 'Hand sum, forgot the half hour: Wednesday 20 January, 20:00', 'Three official records of the clock in Peru, and what each one shows', 'Read at 16:24:04 UTC on 8 November 2026, it gave 11:23:57', 'At 13:30 in Peru it is exactly midnight in India.', 'Lima sits at longitude 77°02\' west and Delhi at 77°15\' east', 'Ten hours, and the half hour', 'An example year of class hours for a child in Peru (our illustration, not a schedule)'],
    sources: [
      { claim: 'Zone America/Lima at UTC-5; last Peru summer-time rule 1 January to 1 April 1994.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' },
      { claim: 'Zone Asia/Kolkata at UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/asia' },
      { claim: 'INACAL official-time feed read 11:23:57 at 16:24:04 UTC on 8 November 2026.', url: 'https://www.inacal.gob.pe/Horaoficial/hourServer2.php' },
      { claim: 'Lima 12:00 noon = Delhi, Bombay, Calcuta 10:30 p.m.; Lima 77°02\' W, Delhi 77°15\' E (Compendio 2026, cuadro 1.3).', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: '2026 school year: management weeks 2 to 13 March, teaching from 16 March to 18 December, 36 teaching weeks.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'Hora pedagógica 45 minutes; JEC 45 weekly periods.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Internet use: Lima Metropolitana 92.4%, rest urban 86.1%, rural 63.7% (II trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Lima 555, high band.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'A published Peru timetable or fixed weekend group: refused; hours are set with learners.',
      'That all mentors teach every hour: not claimed; the page says mentors who teach the Americas choose these hours.',
      'Any link with INACAL, INEI or MINEDU: none; cited as sources only.',
      'Spanish-language teaching: refused; all classes are in English.'
    ]
  }
};
