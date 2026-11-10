// SHIP: market | Coding classes for expat children in Lima: one mentor before, during and after the move | zoneinfo and daylight saving: the same Lima hour lands at different home-country hours across the year
'use strict';
// Expat kids coding classes, Lima (ag- English door, Peru cluster row PE042, P3, hubGroup ages).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Audience: families relocating to Lima with children of 6 to 17 (diplomatic, corporate, mining, NGO, remote workers),
// who want coding to continue across the move, in English. School context only from primary sources; no immigration, visa,
// residency or legal advice; the page points to MINEDU's own procedure page and says the school and MINEDU decide.
// Searches (KEYWORDS.md sections 1 and 2, English): "expat kids lima peru", "expat life in lima peru", "expat community lima",
// "international school lima peru", "kids activities lima peru", "coding classes lima peru".
// Spine: what changes for a child who moves to Lima (a March to December school year, grade placed by age on 31 March,
// recognition of foreign school years by convalidación or revalidación at MINEDU), how coding can stay steady through the move
// (same mentor, online, in English), the clocks (Peru keeps UTC-5 all year; most home countries do not), and one original
// zoneinfo lesson. Primary-source table: MINEDU's list of countries with schooling agreements (gob.pe procedure 477).
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/expat-kids-coding-classes-lima/ and
// facts-*/src/; every quote grepped in the raw or extracted text):
//  gob.pe, MINEDU procedure "Revalidar o convalidar estudios primarios y secundarios del extranjero" (fetched 2026-11-09,
//    conval-477.html, conval-477.txt): "Si desea estudiar en Perú, pero proviene de un colegio de otro país, deberá convalidar o
//    revalidar sus estudios primarios o secundarios realizados en el extranjero."; "Convenio Andrés Bello : Bolivia, Chile,
//    Colombia, Cuba, Ecuador, España, México, Panamá, Paraguay, República Dominicana, Venezuela. Convenio Perú-Argentina :
//    Argentina. Convenio Mercosur : Brasil y Uruguay."; "La revalidación es necesaria si realizaste estudios primarios o
//    secundarios en un país que no tiene convenio con Perú. En este caso, deberás subsanar los cursos que presenten diferencias
//    con el plan de estudios nacional."; "Solo se convalidan o revalidan grados concluidos"; "con este trámite no se hace
//    conversión de notas"; "Si el documento está un idioma distinto al español, debes adjuntar una traducción simple";
//    "Apostilla de La Haya"; "Toma en cuenta que este trámite solo se puede hacer en la ciudad de Lima ."; "En un plazo máximo
//    de 30 días hábiles"; "Último cambio 30 setiembre 2024". (The fee on the page is in soles; not printed.)
//  MINEDU, Edades normativas (facts-school/src/edades-normativas, FACTS 13 and 14): "Se considera la edad normativa al 31 de
//    marzo de cada año."; ages 6 (1° primaria) to 16 (5° secundaria).
//  RM 501-2025-MINEDU, Tabla 1 (facts-school/src/rm501-2025-pdf; signed PDF page 7 checked by eye 2026-11-09): first teaching
//    block "Del 16 marzo al 15 de mayo"; fourth "Del 19 octubre a 18 de diciembre"; 36 teaching weeks.
//  CNEB (FACTS 39, 57): no computing area; Inglés "2 2 3 3 3 3" in primaria, "3 3 3 3 3" in JER secundaria.
//  MINEDU press note, 17 April 2026 (n-coar-ib-1100): "En el año 2025, en todo el país, 2502 estudiantes obtuvieron el Diploma
//    del Bachillerato Internacional."
//  INEI, Censos Nacionales 2025, via facts-geo/GEO.md: Lima Metropolitana (the Province of Lima, 43 districts) 10,141,775.
//  INEI TIC II trimestre 2026 (facts-market/src/inei_tic_iit2026): Lima Metropolitana "84,7% de los hogares disponía del
//    servicio" (internet); computer "53,3% en Lima Metropolitana".
//  EF EPI 2025 (facts-market/src/ef_peru): Lima 555 (high), Peru 519 (moderate).
//  Embassy of India, Lima (facts-school/src/eoi-india-peru): "The size of the Indian community in Peru is small, numbering
//    around 500, including PIOs".
//  MARKET.md 1.2: no official count of expatriate families or international-school pupils; none given on the page.
//  Time: tzdata America/Lima "-5:00 Peru", last Rule Peru 1994 (facts-geo/timezone.tsv); Asia/Kolkata +5:30.
//  Brand facts: 10,000+ students worldwide, 4.9 from about 547 Google reviews, since 2020; group fifteen to twenty or one to one.
// Our own program (scratchpad pe/e8/ekc_clocks.py), python3 -I (3.14, system tzdata), exact output:
//    "15 Jan, Lima 09:00 (-0500) | Kolkata 19:30 | London 14:00 | New_York 09:00 | Madrid 15:00"
//    "15 Jul, Lima 09:00 (-0500) | Kolkata 19:30 | London 15:00 | New_York 10:00 | Madrid 16:00"
// Lesson family: time zones with zoneinfo: aware datetimes, astimezone(), and why a fixed Lima hour moves against countries
// that observe daylight saving.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const CODE = [
  'from datetime import datetime',
  'from zoneinfo import ZoneInfo',
  '',
  'lima = ZoneInfo("America/Lima")',
  'places = ["Asia/Kolkata", "Europe/London", "America/New_York", "Europe/Madrid"]',
  '',
  'for month in (1, 7):',
  '    lesson = datetime(2027, month, 15, 9, 0, tzinfo=lima)   # a 09:00 class in Lima',
  '    row = [lesson.strftime("%d %b, Lima %H:%M (%z)")]',
  '    for place in places:',
  '        other = lesson.astimezone(ZoneInfo(place))',
  '        row.append(f"{place.split(\'/\')[1]} {other:%H:%M}")',
  '    print(" | ".join(row))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'Expat children in Lima' },
  slug: 'expat-kids-coding-classes-lima',
  code: 'ekc',
  accent: '#036A34',
  accentRationale: 'Expat kids coding classes in Lima: a deep fern green #036A34, the colour of the lomas, the fog-fed hills that turn green around Lima each winter, chosen for a page about settling in somewhere new; contrast passes 4.5 on all three papers (checked by the build gate)',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding classes for expat children in Lima',
  title: 'Coding Classes for Expat Kids in Lima: Live Online in English',
  description: 'Coding classes for expat children moving to Lima: live online in English with one mentor through the move, plus the Peruvian school year and records explained.',
  ogDescription: 'For families relocating to Lima: keep a child\'s coding steady before, during and after the move with live online classes in English, and understand the Peruvian school year, grade placement and how foreign school years are recognised.',
  twitterDescription: 'Moving to Lima with children? Live coding classes in English that move with you.',
  pageName: 'Coding Classes for Expat Kids in Lima',
  webPageDescription: 'A guide for expatriate families moving to Lima with children, built from MINEDU\'s procedure for recognising foreign school studies, its normative ages and 2026 calendar, INEI and EF EPI, with an original Python lesson on time zones.',
  courseDescription: 'Live online coding classes taught in English for children and teenagers of families relocating to Lima, ages 6 to 17: Scratch, Python, Roblox, Java, web and AI, in a group of fifteen to twenty or one to one, with the same mentor through the move.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Expat kids, Lima',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#move', label: 'During the move' },
    { href: '#school', label: 'School year' },
    { href: '#records', label: 'School records' },
    { href: '#clocks', label: 'Clocks lesson' },
    { href: '#english', label: 'English' }
  ],
  eyebrow: 'Lima &middot; For families relocating &middot; Ages 6 to 17',
  h1: 'Coding classes for expat children moving to Lima',
  lede: 'A move to Lima turns a child\'s year upside down: a new school, a new language in the playground, a school year that starts in March, and months when nothing is settled. Coding classes online are one thing that can carry on unchanged, with the same mentor, the same project and the same language from the old home to the new one. This page explains how, and sets out what families moving with children should know about Peruvian school, from MINEDU\'s own pages.',
  secondaryCta: { href: '#move', label: 'Keep coding through the move' },
  wa: 'Hello Modern Age Coders, we are moving to Lima with our children and would like live coding classes in English. Could we book a free class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ students worldwide &middot; every class live, online and in English',
  spec: [
    ['Who', 'Children and teenagers, 6 to 17'],
    ['Where', 'Before, during and after the move'],
    ['Teaching language', 'English, always'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Lima times', 'Set around the new school day'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In one paragraph',
  capsule: 'Families relocating to Lima can keep their children\'s coding going without a gap: Modern Age Coders teaches live online classes in English to children and teenagers aged 6 to 17, so lessons can start in the old country and continue in Lima with the same mentor. Courses run from Scratch and Roblox to Python, Java and AI, in a group of fifteen to twenty or one to one, at hours fitted around the new school day, and the first class is free.',

  picks: {
    eyebrow: 'Three common starts',
    h2: 'Which coding course suits a child on the move?',
    lede: 'Choose by age and by how unsettled the next few months will be. Short projects suit a move; long courses suit the year after.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'EKC / 01', title: 'Python and AI, ages 9 to 12', note: 'Real typed code through turtle drawings, small games and AI experiments. Each project fits in a few lessons, which suits weeks when the family is packing or unpacking.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'EKC / 02', title: 'Roblox game coding', note: 'Children script their own Roblox games in Luau, which gives a newly arrived child something to share with classmates who play the same game, in any language.' },
      { course: 'python-complete-masterclass-teens', code: 'EKC / 03', title: 'Python for teenagers', note: 'For ages 13 to 17: a full year of Python, from first programs to a capstone project, that continues whatever school the teenager ends up attending in Lima.' }
    ]
  },

  sections: [
    {
      id: 'move',
      eyebrow: 'Continuity',
      h2: 'How can my child keep coding while we move to Lima?',
      lede: 'Because the classes are online, the move changes only the room the child sits in. The mentor, the group and the project stay the same, and that steadiness is worth a lot to a child whose school, friends and home are all changing at once.',
      body: [
        { kind: 'ol', items: [
          '<strong>Start before you leave.</strong> A few weeks of classes in the old home lets the child get to know the mentor while life is still normal.',
          '<strong>Plan the gap honestly.</strong> Most families lose a week or two to flights and boxes. Tell us the dates and we will pause, or set a small project the child can finish offline.',
          '<strong>Restart with the same mentor.</strong> Once the internet is connected in Lima, classes resume at a new hour if needed. Nothing is repeated and nobody is a stranger.',
          '<strong>Fit the new school day.</strong> Lima schools set their own hours. Once the timetable is known, we move classes around it.',
          '<strong>Use the summer if you arrive in it.</strong> A family arriving in January or February has weeks before the school year starts. That is a good time for one-to-one classes and a bigger project.'
        ] },
        { kind: 'p', mt: true, html: 'Connectivity in the city is good: INEI found that 84.7% of households in Metropolitan Lima had internet in the second quarter of 2026, and 53.3% had at least one computer. A laptop from home is all a child needs; if the family\'s computer arrives in a container weeks later, a borrowed one or a tablet for younger children will do in the meantime.' }
      ]
    },
    {
      id: 'school',
      tint: 'tint',
      eyebrow: 'The Peruvian school year',
      h2: 'When does the school year start in Peru, and which grade will my child join?',
      lede: 'The Peruvian school year runs roughly from March to December, the other way round from schools in Europe, North America and India. For a family arriving from the northern hemisphere, that changes which grade a child joins and when.',
      body: [
        { kind: 'two',
          leftH3: 'The year',
          left: [
            'MINEDU\'s norm for 2026, RM 501-2025-MINEDU, set the first block of lessons from 16 March to 15 May 2026 and the last from 19 October to 18 December 2026, thirty-six teaching weeks in all, with short breaks in May, July to August and October. January and February are the long summer holiday.',
            'The norm covers public and private schools alike, but regional education offices may shift the weeks and each school organises its own bimestres or trimestres. Ask the school for its calendar; that is the one that matters.'
          ],
          rightH3: 'Grade placement by age',
          right: [
            'MINEDU uses a "normative age" for each grade, measured on 31 March of each year: a child aged 6 on that date belongs in 1st of primaria, and the ages run up to 16 for 5th of secundaria. Primaria lasts six years and secundaria five.',
            'A child moving mid-year from a September-start system may therefore land half a grade ahead of or behind where the family expected. The school decides placement; we simply match the coding course to the child\'s real level.'
          ] },
        { kind: 'p', mt: true, html: 'Peruvian schools teach no computing subject in the national plans of study, and English gets two or three periods a week in primaria under the CNEB. Children arriving from systems where computing is taught at school often lose it on arrival, which is one reason families keep an outside class going. Parents who read Spanish can see our page on <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>, written for Peruvian families.' }
      ]
    },
    {
      id: 'records',
      eyebrow: 'Moving school records',
      h2: 'How are foreign school years recognised in Peru?',
      lede: 'Through a MINEDU procedure, described on the government\'s gob.pe portal. We are not advisers and this is not legal or immigration advice, but families often ask, so here is what MINEDU\'s own page says, in plain English.',
      body: [
        { kind: 'table', numCols: [], caption: 'Countries with which Peru has a schooling agreement, as listed by MINEDU', head: ['Agreement', 'Countries listed', 'Procedure that applies'], rows: [
          ['Convenio Andrés Bello', 'Bolivia, Chile, Colombia, Cuba, Ecuador, Spain, Mexico, Panama, Paraguay, Dominican Republic, Venezuela', 'Convalidación (recognition)'],
          ['Convenio Perú-Argentina', 'Argentina', 'Convalidación'],
          ['Convenio Mercosur', 'Brazil, Uruguay', 'Convalidación'],
          ['Any other country', 'For example the United Kingdom, the United States, India, Canada', 'Revalidación: courses that differ from Peru\'s national plan may need to be made up']
        ] },
        { kind: 'source', html: 'Source: Ministerio de Educación, "Revalidar o convalidar estudios primarios y secundarios del extranjero", gob.pe procedure page, last changed 30 September 2024, read on 9 November 2026. The examples in the last row are ours: MINEDU names only the countries that do have agreements. Requirements and fees are on that page and can change; check it, and ask the receiving school.' },
        { kind: 'two', mt: true,
          leftH3: 'What MINEDU\'s page says',
          left: [
            'Only completed grades are recognised, grade by grade, and there is no conversion of marks. Certificates must be legalised by Peru\'s foreign ministry or carry a Hague apostille where the country of origin is a party to that convention, and documents not in Spanish need a translation.',
            'The procedure is done in person, only in Lima, at MINEDU\'s offices in San Borja, and the page gives a maximum of 30 working days for the resolution.'
          ],
          rightH3: 'What it means for coding',
          right: [
            'Nothing directly: our classes are outside the school system, so no recognition is needed and no Peruvian grade is awarded. Our certificate of completion is our own, not a school record.',
            'It does mean the first months in Lima can be busy with paperwork. A class that needs no paperwork at all, and carries on regardless, is one less thing to arrange.'
          ] }
      ]
    },
    {
      id: 'clocks',
      tint: 'tint',
      eyebrow: 'A real lesson',
      h2: 'What time will the classes be once we are in Lima?',
      lede: 'Whatever hour suits the new routine. Peru stays on UTC minus 5 all year with no daylight saving, which makes Lima easy; the countries families come from often are not. Here is a lesson we give older children who have relatives in several time zones.',
      body: [
        { kind: 'two',
          leftH3: 'The problem',
          left: [
            'A child in Lima has a coding class at 09:00 during the summer holidays and wants to call grandparents in London, cousins in New York and friends in Madrid straight afterwards. What time is it for each of them, in January and in July?',
            'Doing it by adding hours goes wrong twice a year, because London, New York and Madrid change their clocks and Lima does not.'
          ],
          rightH3: 'The ideas',
          right: [
            'Python\'s <code>zoneinfo</code> module knows the rules of every time zone, from the same IANA database computers worldwide use. A <code>datetime</code> with <code>tzinfo=lima</code> is a real moment, not just a clock reading.',
            '<code>astimezone()</code> moves that moment into another zone. <code>%z</code> prints the offset, so the child can see Lima stays at <code>-0500</code> in both months.'
          ] },
        { kind: 'code', label: 'clocks.py: one Lima class, four other clocks, two seasons', lang: 'Python', code: CODE, note: 'It prints <code>15 Jan, Lima 09:00 (-0500) | Kolkata 19:30 | London 14:00 | New_York 09:00 | Madrid 15:00</code> and then <code>15 Jul, Lima 09:00 (-0500) | Kolkata 19:30 | London 15:00 | New_York 10:00 | Madrid 16:00</code>.' },
        { kind: 'p', mt: true, html: 'Read the columns. Kolkata, where our mentors are, is 19:30 in both months, because neither Peru nor India changes its clocks, so the gap is always ten and a half hours. London, New York and Madrid each move an hour between January and July. A family that sets a weekly call by "the usual gap" will be an hour out for half the year; a program that uses the time-zone rules never is.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Add your own city.</strong> Put your previous home\'s zone into <code>places</code>, for example <code>"Australia/Sydney"</code>, and see which way its clock moves.',
          '<strong>Find the change.</strong> Loop over every day of 2027 and print the dates when London\'s gap to Lima changes.',
          '<strong>Check India.</strong> Print <code>%z</code> for Kolkata in both months and explain why it never changes.',
          '<strong>Write it up.</strong> In two sentences, explain to a grandparent why the call time moves even though nobody changed the plan.'
        ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Language',
      h2: 'Are coding classes in English a good fit for expat children in Lima?',
      lede: 'For most, yes: English is often the family\'s language or the language of the child\'s school, and it is the language of programming. A child adjusting to Spanish in the playground keeps one subject in a familiar language.',
      body: [
        { kind: 'two',
          leftH3: 'English in Lima',
          left: [
            'EF\'s English Proficiency Index 2025 rates Lima 555, its high band and the top score of any Peruvian city, against 519 for Peru as a whole. The IB Diploma is taught in Peru too: MINEDU reports that 2,502 students across the country earned it in 2025.',
            'For families who want more on English-medium learning in the capital, our page on <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> covers bilingual, Cambridge and IB schools.'
          ],
          rightH3: 'Children whose English is still growing',
          right: [
            'Not every expat family is English-speaking. Our mentors, based in India, speak slowly and clearly, type key words in the chat, and keep the code on screen, so a child whose first language is German, Korean or Portuguese can follow by reading as much as listening.',
            'Older learners preparing for the IB can read our Spanish pages for <a class="ag-inline-link" href="/tutor-ib-matematicas-en-ingles-peru">IB maths</a> and <a class="ag-inline-link" href="/bachillerato-internacional-ciencias-de-la-computacion-tutor">IB computer science</a>.'
          ] }
      ]
    },
    {
      id: 'city',
      tint: 'tint',
      eyebrow: 'Life in a big city',
      h2: 'Why choose online coding classes over a centre in Lima?',
      lede: 'Mostly because of distance. Metropolitan Lima, the Province of Lima with its 43 districts, counted 10,141,775 people in INEI\'s 2025 census, and crossing it after school takes a slice of the evening no child gets back.',
      body: [
        { kind: 'three', cells: [
          { h3: 'No commute', p: 'A class at home in Miraflores, San Isidro, Surco or La Molina takes exactly as long as the class.' },
          { h3: 'No new paperwork', p: 'No enrolment forms in Spanish, no school records, no residency questions: the class works the same wherever you live.' },
          { h3: 'Same quality anywhere', p: 'The teaching is identical in Lima, in your old home and anywhere you move next, which matters for families on rotation.' }
        ] },
        { kind: 'p', mt: true, html: 'Families from India are a small community in Peru; the Embassy of India in Lima puts it at about 500 people. Many of the expat families we expect on this page come from elsewhere. Whatever the home country, the classes are the same: live, online and in English, with mentors in India. Families planning a summer arrival can also read about our <a class="ag-inline-link" href="/peru-summer-holiday-coding-classes-online">summer holiday coding classes in Peru</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Settling in',
    h2: 'What progress looks like across a move',
    lede: 'Our own markers for a child whose family is relocating. The aim is no lost ground, then steady progress once settled.',
    table: { numCols: [], caption: 'Coding progress around a relocation (ours)', head: ['When', 'What the child does', 'What a parent might notice'], rows: [
      ['Before the move', 'Starts a course and gets to know the mentor', 'An anchor that is not tied to the old house'],
      ['Travel weeks', 'A small offline project or a planned pause', 'Something familiar to work on in a hotel room'],
      ['First month in Lima', 'Classes resume at a new hour', 'The same mentor, the same friends in the group'],
      ['Three months in', 'A finished project from the new home', 'Confidence carried from one country to the next']
    ] },
    left: { h3: 'For younger children', ps: [
      'Short projects suit the move: one game or animation every few lessons.',
      'Let them show the new class at school what they made. It is an easy way to make friends.'
    ] },
    right: { h3: 'For teenagers', ps: [
      'A long project gives a sense of continuity that a new school cannot at first.',
      'If they will take the IB or Cambridge exams in Lima, tell us; we can tie coding to that.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for children and teenagers in Lima',
    lede: 'Grouped by age. All live, all in English, and all able to move with the family.',
    bands: [
      { num: 'I', h3: 'Younger children', sub: 'Ages 6 to 9', courses: [
        { code: 'EKC / YOUNG / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'First games from coloured blocks.' },
        { code: 'EKC / YOUNG / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code inside a world children already know.' },
        { code: 'EKC / YOUNG / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and readiness', blurb: 'Logic puzzles for ages 6 to 9.' }
      ] },
      { num: 'II', h3: 'Older children', sub: 'Ages 9 to 13', courses: [
        { code: 'EKC / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'From blocks to apps and a little AI.' },
        { code: 'EKC / KIDS / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: 'How AI works, ages 8 to 14, no adult tools.' },
        { code: 'EKC / KIDS / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths explored in Python.' }
      ] },
      { num: 'III', h3: 'Teenagers', sub: 'Ages 13 to 17', courses: [
        { code: 'EKC / TEEN / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Typed, structured code for future CS students.' },
        { code: 'EKC / TEEN / 02', slug: 'ib-diploma-computer-science-course', title: 'IB computer science', blurb: 'For IB Diploma students at Lima schools.' },
        { code: 'EKC / TEEN / 03', slug: 'igcse-computer-science-0478-course', title: 'IGCSE computer science', blurb: 'Cambridge 0478 for pupils at Cambridge schools.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'A week of live classes for a family in Lima',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Summer mornings', l: 'January and February mornings in Lima are Indian evenings.' },
      { time: 'After school', l: 'Set once the new school timetable is known.' },
      { time: 'One to one', l: 'A private mentor, handy while routines are still settling.' }
    ],
    cells: [
      { h3: 'Same mentor everywhere', p: 'Before the move, during it and after it.' },
      { h3: 'Code every lesson', p: 'Children build, not watch.' },
      { h3: 'Plain English', p: 'Clear speech and key words typed in the chat.' },
      { h3: 'Grouped by age', p: 'Children learn with children their own age.' },
      { h3: 'Pauses planned', p: 'Tell us your travel dates and we plan around them.' },
      { h3: 'Group or private', p: 'A class of peers, or one child and a mentor.' }
    ]
  },

  projectsH2: 'Projects by children who code with us',
  projectsLede: 'Work from learners who have been with us for a year or more, in many countries. See more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews from parents and learners on Google, copied exactly.',

  fees: {
    h2: 'Fees for families in Lima',
    lede: 'We bill in US dollars, monthly, to a card, wherever the family lives. A card from home works just as well as one opened in Peru; the issuing bank does any currency conversion.',
    free: ['A free first class', 'Can be booked before you move', 'No card needed'],
    group: ['Fifteen to twenty children of similar age', 'One mentor through the move', 'Two live classes a week', 'Monthly; pause around travel'],
    one: ['A private mentor', 'Pace set around the move', 'Hours that fit the new routine']
  },

  faq: {
    eyebrow: 'Questions from families moving to Lima',
    h2: 'Coding classes for expat children in Lima: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and taught in English only, whether the family lives in Lima or anywhere else. Mentors speak clearly and type key words, so children whose first language is not English can follow too.' },
      { q: 'Can we start before we move to Lima?', a: 'Yes, and we recommend it. The child gets to know the mentor at home, pauses for the travel weeks if needed, and carries on in Lima with the same mentor and group.' },
      { q: 'What time will classes be in Lima?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Lima stays at UTC minus 5 all year and India is 10 hours 30 minutes ahead, so a 16:00 class in Lima is 02:30 the next day for the mentor, which can be arranged.' },
      { q: 'When does the school year start in Peru?', a: 'In March. Under MINEDU\'s norm for 2026, lessons ran from 16 March to 18 December 2026, with January and February as the summer holiday. Regional offices and schools can adjust the weeks, so check with the school.' },
      { q: 'Which grade will my child join?', a: 'Schools decide. MINEDU places children by their age on 31 March: 6 for 1st of primaria up to 16 for 5th of secundaria. A child coming from a September-start system may join a different grade than expected.' },
      { q: 'Do we need to convalidate school records for coding classes?', a: 'No. Our classes are outside the school system, so no recognition is needed. For school, MINEDU describes convalidación and revalidación on its gob.pe page; ask the receiving school. We do not give legal or immigration advice.' },
      { q: 'Do you award a certificate?', a: 'Yes, our own Modern Age Coders certificate of completion after a course\'s final exam. It is not a Peruvian school record or qualification and is not recognised by MINEDU.' },
      { q: 'Are the classes suitable for children whose first language is not English?', a: 'Usually. Code is mostly English keywords and symbols, the mentor keeps language simple, and the screen carries much of the meaning. The free class shows quickly whether a child is comfortable.' },
      { q: 'Do children use ChatGPT in class?', a: 'No adult AI accounts are used by under-18s with us. Claude\'s terms require users to be 18, and ChatGPT needs a parent\'s permission for minors. Children learn to reason through code themselves.' },
      { q: 'How do we pay?', a: 'Monthly, by card, in US dollars. A card from your home country is fine; your bank converts the charge. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More for families settling in Lima.',
    items: [
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes, Lima', p: 'For bilingual, Cambridge and IB school families.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Our index of every Peru page.' },
      { href: '/peru-summer-holiday-coding-classes-online', label: 'Summer holiday coding classes', p: 'For families arriving in January or February.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'Our Spanish page for Peruvian families.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live lesson from start to finish.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects by children around the world.' }
    ]
  },

  start: {
    h2: 'Book a free class, from wherever you are now',
    lede: 'You can book the free class from your current home, weeks before the move. Your child writes a little code with a mentor, and then we agree a course, a group or one-to-one plan, and how to handle the travel weeks.',
    readFirst: 'You can read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse the <a class="ag-inline-link" href="/courses">course list</a> first.',
    note: 'Classes are live video lessons from India, entirely in English. We reply on WhatsApp in English.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'For families', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/courses', label: 'All courses' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking, not copying' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru' },
        { href: '/english-medium-coding-classes-lima', label: 'Coding in English, Lima' },
        { href: '/peru-summer-holiday-coding-classes-online', label: 'Summer classes' },
        { href: '/tutor-ib-matematicas-en-ingles-peru', label: 'Tutor IB matemáticas' }
      ] }
    ],
    bottomRight: 'Lima never changes its clocks'
  },

  personalityCss: `
.ag-root.ag-ekc .ag-hero h1 { max-width: 20ch; letter-spacing: -0.015em; }
.ag-root.ag-ekc .ag-capsule { border-left-width: 6px; }
.ag-root.ag-ekc .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-ekc .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-ekc .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU gob.pe procedure "Revalidar o convalidar estudios primarios y secundarios del extranjero" (last changed 30 September 2024); MINEDU Edades normativas; RM 501-2025 Tabla 1 (checked by eye); CNEB; MINEDU IB press note (17 April 2026); INEI Censos Nacionales 2025 and Boletín TIC II trimestre 2026; EF EPI 2025; Embassy of India, Lima; IANA tz database. Read 8 and 9 November 2026.',
    localProject: 'An original Python lesson for children relocating to Lima: a 09:00 Lima class on 15 January and 15 July 2027 converted with zoneinfo to Kolkata, London, New York and Madrid prints Kolkata 19:30 both times while London moves 14:00 to 15:00, New York 09:00 to 10:00 and Madrid 15:00 to 16:00; Lima stays at -0500. Lesson family: time zones with zoneinfo and daylight saving.',
    requiredMentions: ['15 Jan, Lima 09:00 (-0500) | Kolkata 19:30 | London 14:00 | New_York 09:00 | Madrid 15:00', '15 Jul, Lima 09:00 (-0500) | Kolkata 19:30 | London 15:00 | New_York 10:00 | Madrid 16:00', 'Lima never changes its clocks', 'Convenio Andrés Bello', 'a maximum of 30 working days', 'counted 10,141,775 people', 'last changed 30 September 2024', 'measured on 31 March of each year'],
    sources: [
      { claim: 'Convalidación and revalidación of foreign primary and secondary studies; agreement countries; grade by grade, no grade conversion; legalisation or apostille; translation; Lima only; 30 working days.', url: 'https://www.gob.pe/477-revalidar-o-convalidar-estudios-primarios-y-secundarios-del-extranjero' },
      { claim: 'Normative age measured on 31 March; ages 6 to 16 by grade.', url: 'https://www.gob.pe/institucion/minedu/informes-publicaciones/2742610-edades-normativas' },
      { claim: '2026 school year blocks, 16 March to 18 December 2026.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: '2,502 IB Diplomas in Peru in 2025.', url: 'https://www.gob.pe/institucion/minedu/noticias/1380061-mas-de-1100-estudiantes-de-los-coar-obtienen-diploma-del-bachillerato-internacional-y-alcanzan-estandares-de-nivel-mundial' },
      { claim: 'Lima Metropolitana households: internet 84.7%, computer 53.3%, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Indian community in Peru about 500.', url: 'https://eoilima.gov.in/page/india-peru/' },
      { claim: 'EF EPI 2025: Lima 555, Peru 519.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'America/Lima UTC-5, no daylight saving since 1994.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Number of expatriate families or international-school pupils in Lima: no official figure found (MARKET.md 1.2); none given.',
      'Visa, residency, immigration or legal advice: none; the page points to MINEDU\'s own procedure and says so.',
      'Names or fees of international schools in Lima: no primary directory fetched; none named.',
      'The procedure fee on the gob.pe page: in soles; not printed.',
      'Spanish-language teaching or a Peruvian qualification: neither offered.'
    ]
  }
};
