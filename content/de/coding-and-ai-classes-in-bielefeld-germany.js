'use strict';
// Coding and AI classes in Bielefeld (ag- city page, Germany cluster P6 row DE143, tier-2 shape coding-and-ai = all ages).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; euro shown,
// USD charged.
// Spine: AI is only as good as what it can read. Before any model, a learner of any age has to get a computer to read a
// real German file correctly, then has to know which numbers deserve trust. The Bielefeld first-names file listed in
// opendata.tsv is identity data and is not used.
// Sources (school facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md,
// fetched 2 Nov 2026; numbers are fact ids there):
//  - GI Informatik-Monitor 2026/27, NRW page: compulsory Informatik in grades 5 and 6 (80); Grundkurs three hours,
//    Leistungskurs five hours in the Qualifikationsphase (81); written Abitur tasks set centrally, no computer (82).
//  - KMK, Bildung in der digitalen Welt: 2016 strategy (100); 2024 "Handlungsempfehlung für die Bildungsverwaltung zum
//    Umgang mit Künstlicher Intelligenz in schulischen Bildungsprozessen" (103); 2026 competence framework "um KI-bezogene
//    Kompetenzen ergänzt" (102).
//  - BWKI: projects in German or English (213); teams of up to four, Sek I and II (209).
//  - KMK Ferien 2026/2027, NRW row (275).
//  - AI tool ages: content/ai-tool-age-audit.json (OpenAI 13 with a parent's permission under 18; Claude 18+).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Bielefeld 331,605; Gütersloh 100,479; Paderborn 156,378.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Bielefeld, "Treibhausgase - Bilanzbericht" ("Treibhausgasbilanzierung der Stadt Bielefeld nach
//    Energieträgern und CO2-Emmissionen"), open-data.bielefeld.de via Open.NRW and GovData
//    (ckan.govdata.de/dataset/treibhausgase-bilanzbericht), licence CC BY 4.0 (http://dcat-ap.de/def/licenses/cc-by/4.0).
//    File co2_1990_2022.csv downloaded 3 November 2026, 2,719 bytes, sha256 3eb7fcc1...bc95ed61c, ISO-8859-1, semicolons,
//    decimal commas, unit column "t CO2aequ", 23 energy carriers, columns 1990 then 2010 to 2022. Raw copy in
//    src-pages/coding-and-ai-classes-in-bielefeld-germany/.
// Our own calculations (scratchpad de/w/T1/bielefeld/v1.py, v2.py, v3.py, python3 -I):
//  v1: "UTF-8 failed: invalid start byte at byte 1422", "Energy carriers: 23", "Row 12 is called: Flüssiggas",
//      "First value: 303933,11 as text".
//  v2: "Gaps between columns: [1, 20]  first gap: 20"; 1990 to 2022 change for the 12 carriers with a non-zero 1990 value:
//      Heizstrom -95.0, Steinkohle -91.9, Heizoel -80.8, Flüssiggas -62.0, Biomasse -61.9, Strom -39.6, Benzin -38.0,
//      Erdgas -21.6, Nahwaerme -2.2, Fernwaerme +25.3, Diesel +136.0, Solarthermie +7965.0 (percent). 11 carriers have 0
//      in 1990 and are skipped.
//  v3: "Solarthermie: 3 t in 1990, 265 t in 2022, change +262 t", "Diesel: 163,886 t in 1990, 386,749 t in 2022, change
//      +222,863 t".
//  No total of the carriers is computed or printed: the city publishes no total in this file, and we never add published
//  parts into a total of our own.
// Lesson family: make the computer read a German file (encoding, decimal comma, uneven years), then distrust a percentage
// that starts from almost nothing.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'try:',
  '    with open("co2_1990_2022.csv", encoding="utf-8") as f:',
  '        rows = list(csv.reader(f, delimiter=";"))',
  'except UnicodeDecodeError as error:',
  '    print("UTF-8 failed:", error.reason, "at byte", error.start)',
  '',
  'with open("co2_1990_2022.csv", encoding="latin-1") as f:',
  '    rows = list(csv.reader(f, delimiter=";"))',
  '',
  'print("Energy carriers:", len(rows) - 1)',
  'print("Row 12 is called:", rows[12][0])',
  'print("First value:", rows[1][2], "as text")'
].join('\n');

const V2 = [
  'def number(text):',
  '    return float(text.replace(",", "."))      # German decimal comma to a point',
  '',
  'years = [int(y) for y in rows[0][2:]]',
  'gaps = [b - a for a, b in zip(years, years[1:])]',
  'print("Gaps between columns:", sorted(set(gaps)), " first gap:", gaps[0])',
  '',
  'first, last = years.index(1990), years.index(2022)',
  'change = {}',
  'for row in rows[1:]:',
  '    start, end = number(row[2 + first]), number(row[2 + last])',
  '    if start > 0:',
  '        change[row[0]] = round(100 * (end - start) / start, 1)',
  '',
  'for name in sorted(change, key=change.get):',
  '    print(f"{name:12} {change[name]:+7.1f}%")'
].join('\n');

const V3 = [
  'for name in ["Solarthermie", "Diesel"]:',
  '    row = next(r for r in rows if r[0] == name)',
  '    start, end = number(row[2 + first]), number(row[2 + last])',
  '    print(f"{name}: {start:,.0f} t in 1990, {end:,.0f} t in 2022, change {end - start:+,.0f} t")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Bielefeld: coding and AI, all ages' },
  slug: 'coding-and-ai-classes-in-bielefeld-germany',
  code: 'cab',
  accent: '#1C5844',
  accentRationale: 'Coding and AI in Bielefeld: a deep forest green #1C5844 for the Teutoburger Wald ridge that runs through the city, clear of the Germany hub fir and the Duisburg violet; contrast 6.74 at its lowest on the paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Coding and AI classes in Bielefeld',
  title: 'Coding and AI Classes in Bielefeld: Live Online in English',
  description: 'Coding and AI classes in Bielefeld for kids, teens and adults, live online in English: what NRW and the KMK say about AI, tool age rules and a Bielefeld CO2 project.',
  ogDescription: 'Live coding and AI lessons in English for Bielefeld learners from 6 to adult, with a project on the city\'s own carbon dioxide file that first refuses to open and then tells a story only careful readers notice.',
  twitterDescription: 'Coding and AI for every age in Bielefeld, live in English, built on the city\'s own climate data.',
  pageName: 'Coding and AI Classes in Bielefeld',
  webPageDescription: 'A guide for Bielefeld children, teenagers, parents and adult learners to live coding and AI classes in English: what the KMK and NRW expect schools to teach about computing and AI, the providers\' age rules for AI tools, and an original Python project on Stadt Bielefeld\'s greenhouse gas balance.',
  courseDescription: 'Live online coding and AI classes in English for Bielefeld learners aged 6 to adult: Scratch and Python for children, Python, data and machine learning for teenagers, and practical Python and AI for adults, in a group of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Bielefeld, all ages',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#first', label: 'Why code' },
    { href: '#co2', label: 'CO2 data' },
    { href: '#tools', label: 'AI tools' },
    { href: '#hours', label: 'Times' }
  ],
  eyebrow: 'Bielefeld &middot; Coding and AI &middot; Every age from 6',
  h1: 'Coding and AI classes in Bielefeld',
  lede: 'Every AI system starts by reading data, and real data is rarely tidy. That is the thread through this page and through our classes in Bielefeld, whether the learner is seven, fifteen or fifty. Below: why we teach coding and AI together, what NRW schools and the KMK expect pupils to learn, which AI tools each age is allowed to use, and a project on Bielefeld\'s carbon dioxide figures in which the file will not even open on the first try.',
  secondaryCta: { href: '#co2', label: 'Open the CO2 project' },
  wa: 'Hello Modern Age Coders, I am in Bielefeld and interested in coding and AI classes in English. Could we set up a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; coding first, so the AI makes sense',
  spec: [
    ['Ages', '6 to 12, 13 to 18, adults'],
    ['Children', 'Scratch, Python, AI ideas'],
    ['Teenagers', 'Python, data, machine learning'],
    ['Adults', 'Python, automation, AI tools'],
    ['Group', '15 to 20 learners, or 1-on-1'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'At a glance',
  capsule: 'Coding and AI classes for Bielefeld at Modern Age Coders are taught live online, in English, to every age: children from 6 learn Scratch and then Python, teenagers move on to data and to building machine-learning models they can explain, and adults learn to automate work and use AI tools with care. Each learner keeps one mentor who adjusts to their pace and accent, either in a class of 15 to 20 or privately, on weekdays or at weekends.',

  picks: {
    eyebrow: 'Three doors in',
    h2: 'Coding and AI courses for Bielefeld, by stage of life',
    lede: 'One course per age group. In the free first class the mentor checks the fit and suggests a different one if something else suits better.',
    items: [
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', code: 'CAB / 01', title: 'Vibe Coding for Kids', note: 'Ages 8 to 12. Scratch games built with the mentor, plus a careful first look at what AI can and cannot do, with no chatbot accounts for children.' },
      { course: 'data-science-course-for-teens-python-data', code: 'CAB / 02', title: 'Data Science for Teens', note: 'Ages 13 to 18. Python with real files like the Bielefeld one below, charts that answer questions, and a first machine-learning model.' },
      { course: 'python-ai-automation-masterclass-college', code: 'CAB / 03', title: 'Python Automation and Applied AI', note: 'Adults. Scripts that read, clean and report on files, then AI services called from Python, with every result checked.' }
    ]
  },

  sections: [
    {
      id: 'first',
      eyebrow: 'Coding and AI together',
      h2: 'Why learn coding and AI together instead of just using AI tools?',
      lede: 'Because a learner who has never told a computer exactly what to do cannot judge what an AI tool did. We teach both at once, in proportions that change with age.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Children: rules before machines', p: 'A seven year old sorts picture cards by a rule they invent, then writes the rule as Scratch blocks. Later they see a program learn a rule from examples instead. That contrast, rules written versus rules learned, is the heart of AI, and children grasp it without a single account or app.' },
          { h3: 'Teenagers: inside the model', p: 'Teenagers write Python that reads data, then build small models whose every number they can print. They learn why a model that looks clever on its training data can fail on new data, and how to test for it. That is where school Informatik often stops and our course carries on.' },
          { h3: 'Adults: the tool and the check', p: 'Adults usually want results at work. We teach them to hand routine tasks to scripts and AI assistants, and just as carefully to check what comes back. An adult who can read the code an assistant wrote is far safer than one who can only paste it.' }
        ] },
        { kind: 'p', mt: true, html: 'Our promise is the same in every group: we teach learners to think a problem through and solve it, not to copy answers, whether those answers come from a classmate, a website or an AI. That is also why the project below starts with a file that breaks. A learner who can work out why it broke is learning more than one who never saw it break.' },
        { kind: 'p', html: 'All classes are live and in English only. Mentors are based in India, speak clearly, adapt to each learner\'s pace and accent, and explain the same idea a second or third way if needed. For learners whose first language is German, the vocabulary of programming is English anyway, so a coding class doubles as English practice.' }
      ]
    },
    {
      id: 'co2',
      tint: 'tint',
      eyebrow: 'A Bielefeld dataset',
      h2: 'Which sources of carbon dioxide has Bielefeld cut most since 1990?',
      lede: 'Stadt Bielefeld publishes its greenhouse gas balance by energy carrier, from heating oil to district heating, under a CC BY 4.0 licence. Before a single number can be compared, the file has to be read the way it was written: in German.',
      body: [
        { kind: 'two',
          leftH3: 'The file',
          left: [
            'The dataset is called Treibhausgase, Bilanzbericht. Its file co2_1990_2022.csv, which we downloaded on 3 November 2026, has one row for each of 23 energy carriers and a unit column, t CO2aequ, tonnes of CO2 equivalent.',
            'Its columns are 1990, then every year from 2010 to 2022. Its numbers use the German decimal comma, 303933,11 rather than 303933.11, and it was saved in an older text encoding than most modern programs expect.'
          ],
          rightH3: 'The question',
          right: [
            'For each energy carrier, how much did emissions change between 1990 and 2022? Which fell most, and did anything rise?',
            'A teenager can answer it in twenty lines. But the first line already fails, and that failure is worth a lesson of its own.'
          ] },
        { kind: 'code', label: 'Step 1: open the file, twice', lang: 'Python', code: V1, note: 'It prints <code>UTF-8 failed: invalid start byte at byte 1422</code>, then <code>Energy carriers: 23</code>, <code>Row 12 is called: Flüssiggas</code> and <code>First value: 303933,11 as text</code>.' },
        { kind: 'p', mt: true, html: 'Python reads files as UTF-8 unless told otherwise, and this file is not UTF-8. At byte 1422 it meets the ü in Flüssiggas, liquefied gas, written in the older Latin-1 encoding, and stops. Opening it again with <code>encoding="latin-1"</code> works, and the name comes out correctly. The last line shows the second German habit: the number is still text, with a comma where Python expects a point.' },
        { kind: 'code', label: 'Step 2: read German numbers, check the years, compare 1990 with 2022', lang: 'Python', code: V2, note: 'Run after Step 1. It prints <code>Gaps between columns: [1, 20]  first gap: 20</code>, then twelve lines from <code>Heizstrom       -95.0%</code> to <code>Solarthermie +7965.0%</code>.' },
        { kind: 'p', mt: true, html: 'The gap check matters more than it looks. The first two columns are 1990 and 2010, twenty years apart, and every later pair is one year apart. Anyone who draws the columns as evenly spaced points, or calls the first change "in one year", has misread the file. The program also skips the 11 carriers that were 0 in 1990, because a percentage change from zero cannot be calculated.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Change in CO2-equivalent emissions by energy carrier, 1990 to 2022, Bielefeld (our calculation, carriers with a value in 1990)', head: ['Energy carrier', 'Change'], rows: [
          ['Heizstrom (electric heating)', '-95.0%'],
          ['Steinkohle (hard coal)', '-91.9%'],
          ['Heizoel (heating oil)', '-80.8%'],
          ['Flüssiggas (liquefied gas)', '-62.0%'],
          ['Biomasse (biomass)', '-61.9%'],
          ['Strom (electricity)', '-39.6%'],
          ['Benzin (petrol)', '-38.0%'],
          ['Erdgas (natural gas)', '-21.6%'],
          ['Nahwaerme (local heat networks)', '-2.2%'],
          ['Fernwaerme (district heating)', '+25.3%'],
          ['Diesel', '+136.0%'],
          ['Solarthermie (solar heating)', '+7965.0%']
        ] },
        { kind: 'source', html: 'Data: Stadt Bielefeld, Treibhausgase, Bilanzbericht, open-data.bielefeld.de via Open.NRW, licence CC BY 4.0, file co2_1990_2022.csv downloaded 3 November 2026, unit t CO2aequ. The percentages are our own. The file gives no total across carriers, and we do not add one.' },
        { kind: 'code', label: 'Step 3: the biggest percentage is not the biggest change', lang: 'Python', code: V3, note: 'Run after Step 2. It prints <code>Solarthermie: 3 t in 1990, 265 t in 2022, change +262 t</code> and <code>Diesel: 163,886 t in 1990, 386,749 t in 2022, change +222,863 t</code>.' },
        { kind: 'p', mt: true, html: 'Solar heating shows the largest rise on the list, about eighty-fold, but it started from about three tonnes; its whole increase is 262 tonnes. Diesel rose by a far smaller percentage and added more than 222,000 tonnes. Both statements are true, and a headline could use either. Learners who see this once start asking "a percentage of what?" every time they meet one, and that is exactly the question to put to any AI system that summarises data for you. The file does not explain the changes, so we do not either.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 9.</strong> Grow a bean on the windowsill. If it goes from 1 cm to 3 cm it has tripled; a 20 cm plant that grows 2 cm has not. Which grew more?',
          '<strong>Ages 10 to 12.</strong> In Scratch or Python, store three start and end values and print both the difference and the percentage. Find a pair where the two disagree.',
          '<strong>Ages 13 to 18.</strong> Run Steps 1 to 3, then plot Erdgas from 2010 to 2022 with the years spaced properly, and describe the shape in two sentences.',
          '<strong>Adults.</strong> Open the companion file gesamtenergieverbrauch_<wbr>1990_<wbr>2022.csv from the same dataset and check: does it use the same encoding, the same decimal comma and the same years?'
        ] }
      ]
    },
    {
      id: 'schools',
      eyebrow: 'NRW and the KMK',
      h2: 'What do Bielefeld schools teach about computing and AI?',
      lede: 'Two layers decide it: the KMK, where all sixteen Länder agree common frameworks, and Nordrhein-Westfalen, which sets the subject rules for Bielefeld\'s schools.',
      body: [
        { kind: 'two',
          leftH3: 'The national frame',
          left: [
            'The KMK adopted its strategy Bildung in der digitalen Welt in 2016. In 2024 it added a recommendation for education administrations on handling artificial intelligence in school learning, and in 2026 it adopted an updated competence framework that extends the 2016 areas with AI-related competences.',
            'These frameworks are about using and judging digital tools and AI across subjects. They do not, on their own, put a programming course on every pupil\'s timetable.'
          ],
          rightH3: 'The NRW subject rules',
          right: [
            'According to the GI Informatik-Monitor 2026/27, NRW teaches Informatik as a compulsory subject in grades 5 and 6 at every general school type. After that it is a matter of school offer and pupil choice.',
            'In the Qualifikationsphase Informatik can be chosen at basic level, three hours a week in a Grundkurs, or at raised level, five hours in a Leistungskurs, and the written Abitur tasks are set centrally and answered without a computer.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Where a Bielefeld learner meets computing and AI', head: ['Age', 'At school', 'With us'], rows: [
          ['6 to 10', 'Grundschule; NRW\'s compulsory Informatik has not started yet', 'Scratch, rules and patterns, first AI ideas without accounts'],
          ['10 to 12', 'Compulsory Informatik in grades 5 and 6', 'Typed Python and small data projects'],
          ['12 to 16', 'Informatik if the school offers it and the pupil chooses it', 'Python, data and machine learning'],
          ['16 to 19', 'Informatik Grundkurs or Leistungskurs, if chosen', 'Abitur-level programming and real projects'],
          ['Adults', 'None', 'Automation and AI tools for work']
        ] },
        { kind: 'source', html: 'Sources: KMK, Bildung in der digitalen Welt (2016 strategy, 2024 AI recommendation, 2026 framework update); GI Informatik-Monitor 2026/27, NRW entry. Both read on 2 November 2026. The right-hand column is our own course plan; we teach next to school, and the school course is the one that counts.' },
        { kind: 'p', mt: true, html: 'Teenagers who want to test themselves on a national stage can look at the Bundeswettbewerb Künstliche Intelligenz. It is open to pupils in Sekundarstufe I and II, alone or in teams of up to four, and accepts projects in German or English. We are not connected with it and do not submit work for anyone.' }
      ]
    },
    {
      id: 'tools',
      eyebrow: 'Age rules',
      h2: 'Which AI tools may a child, a teenager or an adult in Bielefeld use?',
      lede: 'The providers decide, in their own terms of use. We follow those terms in every class, and design each course so it never needs a tool the learner is too young for.',
      body: [
        { kind: 'table', numCols: [], caption: 'Minimum ages in the providers\' terms, and how our classes handle them', head: ['Tool', 'Minimum age in the terms', 'In our classes'], rows: [
          ['ChatGPT (OpenAI)', '13, with a parent\'s or guardian\'s permission under 18', 'Not needed in any under-18 course; teenagers build models in Python instead'],
          ['Claude (Anthropic)', '18', 'Adult courses only'],
          ['Python and its open-source libraries', 'No age limit', 'Used at every age from about 9']
        ] },
        { kind: 'source', html: 'Minimum ages as quoted, with links, in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>, which records when each provider\'s terms were last read.' },
        { kind: 'p', mt: true, html: 'Children under 13 never sign up for anything in our classes. Their AI lessons are built from Scratch and Python, which means they see how a guessing program improves rather than only what it outputs. Teenagers do the same with real machine-learning code. Adults may use the full range of assistants, and they practise the check from Step 3 above on every summary an assistant gives them: a percentage of what, and compared with which year?' }
      ]
    },
    {
      id: 'hours',
      eyebrow: 'When classes run',
      h2: 'What times do coding and AI classes run in Bielefeld?',
      lede: 'Children and teenagers usually come after school, adults in the early evening or at the weekend. Our mentors teach from India.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Bielefeld times beside the mentor\'s local time in India', head: ['In Bielefeld', 'India, while Germany is on MEZ', 'India, once Germany is on MESZ'], rows: [
          ['15:15, after school', '19:45', '18:45'],
          ['18:00, after work', '22:30', '21:30'],
          ['Saturday 13:30', '18:00', '17:00'],
          ['Sunday 16:00', '20:30', '19:30']
        ] },
        { kind: 'source', html: 'MEZ is UTC+1 and MESZ is UTC+2, both defined in the Einheitenzeitgesetz. Germany left MESZ on 25 October 2026 and goes back to it on 28 March 2027. India does not observe daylight saving and stays on UTC+5:30, four and a half hours ahead of Bielefeld for now and three and a half from that March date. Illustrative times only.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Herbstferien 2026:</strong> 17 to 31 October 2026 in NRW, already over.',
          '<strong>Christmas:</strong> 23 December 2026 to 6 January 2027.',
          '<strong>Osterferien:</strong> 22 March to 3 April 2027, which overlaps the clock change on 28 March.',
          '<strong>Pfingsten:</strong> one day, 18 May 2027.',
          '<strong>Sommerferien:</strong> 19 July to 31 August 2027.'
        ] },
        { kind: 'source', html: 'NRW school holidays 2026/27 from the KMK holiday table, Stand 9 October 2025. Our classes continue through the holidays unless a family asks to pause.' },
        { kind: 'p', mt: true, html: 'Bielefeld had 331,605 residents on 31 December 2024, according to the Destatis municipal register, and is the largest city in Ostwestfalen-Lippe. Learners in nearby Gütersloh (100,479) and Paderborn (156,378), and in smaller towns such as Herford or Bad Salzuflen, join the same online classes; all of them follow the NRW holiday dates above.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From a first program to an AI project, step by step',
    lede: 'Our milestones, the same order for every age at a different speed. Learners or parents see the current one in each monthly note.',
    table: { caption: 'Coding and AI milestones (ours)', head: ['Milestone', 'Child, typical age', 'Teen or adult, typical month'], rows: [
      ['Gives exact instructions', '6 to 8', 'Month 1'],
      ['Reads and fixes an error', '8 to 10', 'Month 1'],
      ['Reads a real file correctly', '10 to 12', 'Month 2'],
      ['Questions a number before using it', '11 to 12', 'Month 3'],
      ['Builds and tests a small model', 'From 12', 'Months 4 to 6']
    ] },
    left: { h3: 'A habit for learners', ps: [
      'When a file will not open, read the error before you search for a fix. It usually tells you the byte and the reason.',
      'A big percentage from a tiny start is a small change in disguise.'
    ] },
    right: { h3: 'A habit for parents', ps: [
      'Ask what the program got wrong first and how it was fixed. That answer says more about progress than any finished project.',
      'If an AI tool appears in homework, ask your child how they checked it.'
    ] }
  },

  catalogue: {
    eyebrow: 'More to explore',
    h2: 'Nine more courses for Bielefeld learners',
    lede: 'Sorted by age. All live, all in English, all with a regular mentor, in a shared class or privately.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'CAB / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'The long course from first Scratch blocks to apps and AI ideas.' },
        { code: 'CAB / KIDS / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed code and small smart projects from about nine.' },
        { code: 'CAB / KIDS / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Thinking skills for kids', blurb: 'Puzzles that train the planning behind every program.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'CAB / TEEN / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and ML for teens', blurb: 'Models built and tested, with the maths shown.' },
        { code: 'CAB / TEEN / 02', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Visual machine learning', blurb: 'Machine learning with Orange before writing it in code.' },
        { code: 'CAB / TEEN / 03', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur support', blurb: 'Grundkurs and Leistungskurs topics, taught in English.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and up', courses: [
        { code: 'CAB / ADULT / 01', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI for non-programmers', blurb: 'Spreadsheets and assistants for people who do not code yet.' },
        { code: 'CAB / ADULT / 02', slug: 'ai-ml-masterclass-complete-college', title: 'AI and ML in depth', blurb: 'From Python to deep learning and generative models.' },
        { code: 'CAB / ADULT / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI coding agents', blurb: 'Planning and reviewing what an agent writes, adults only.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Format',
    h2: 'How live coding and AI classes work in Bielefeld',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'From mid-afternoon Bielefeld time, for school pupils.' },
      { time: 'Evenings', l: 'Early evening, mostly chosen by adults.' },
      { time: 'Weekends', l: 'Saturday and Sunday, from morning to late afternoon.' }
    ],
    cells: [
      { h3: 'Real code', p: 'Learners type and run every program themselves.' },
      { h3: 'Checked results', p: 'Every answer is tested, whoever produced it.' },
      { h3: 'Patient English', p: 'Explained again, more simply, whenever needed.' },
      { h3: 'One mentor', p: 'Someone who remembers last week\'s bug.' },
      { h3: 'Age rules kept', p: 'No under-18 learner meets an adult-only tool.' },
      { h3: 'Class or private', p: 'Learn with 15 to 20 peers, or alone.' }
    ]
  },

  projectsH2: 'Some projects by our students',
  projectsLede: 'Our students in many countries build working projects, a handful of which are shown here. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'Google reviews from learners and parents, reproduced exactly.',

  fees: {
    h2: 'Fees for Bielefeld learners',
    lede: 'A monthly fee pays for eight live classes. The euro amount you see is based on the European Central Bank reference rate, while the payment is processed in US dollars; the conversion back is your bank\'s, so the euro figure it books can differ very slightly.',
    free: ['A free first class at your level', 'A short task with real code or blocks', 'No card needed'],
    group: ['15 to 20 learners of one age group', 'A regular mentor', 'Two classes a week', 'Monthly, stop when you like'],
    one: ['A mentor for one learner', 'Goals and projects you choose', 'Times arranged with you']
  },

  faq: {
    eyebrow: 'Bielefeld asks',
    h2: 'Coding and AI classes in Bielefeld: frequent questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every class is live and in English only, with a mentor who matches the learner\'s pace and accent and explains again in simpler words when needed. Programming keywords are English in any case.' },
      { q: 'Can a whole family learn with you?', a: 'Yes, each person in their own age group or one-to-one plan. A child, a teenager and a parent can all learn with us at the same time, but never in the same group.' },
      { q: 'Does my child need to know coding before learning AI?', a: 'A little, and we teach it first. Children start with Scratch and simple rules; AI ideas come in as soon as they can give a computer exact instructions. Teenagers learn Python before they build models.' },
      { q: 'What do NRW schools teach about AI?', a: 'The KMK adopted an updated competence framework in 2026 that adds AI-related competences, and a 2024 recommendation on AI in schools. Programming itself is taught in Informatik, which NRW makes compulsory in grades 5 and 6 and offers as a Grundkurs or Leistungskurs in the Oberstufe.' },
      { q: 'Will my teenager need ChatGPT?', a: 'No. Our teen AI courses build models in plain Python. OpenAI\'s terms allow ChatGPT from 13 with a parent\'s permission, but nothing in our under-18 courses depends on it.' },
      { q: 'When are classes in Bielefeld time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. School pupils usually prefer afternoons, adults early evenings or weekends.' },
      { q: 'Do classes stop during the NRW holidays?', a: 'Not unless you ask. Mentors do not follow the NRW school calendar, so learners can keep going through the Herbstferien, Christmas, Easter and summer, or pause and return later.' },
      { q: 'Where are the teachers?', a: 'Our mentors are based in India and teach live online. India is four and a half hours ahead of Bielefeld in winter, so an 18:00 class in Bielefeld is 22:30 for the mentor.' },
      { q: 'In which currency do I pay?', a: 'The monthly fee is shown in euro using the European Central Bank reference rate, but it is charged in US dollars. Your bank converts the charge, so the euro amount on your statement may not match to the cent. The first class costs nothing.' },
      { q: 'Can an adult with no technical background start?', a: 'Yes. Our adult courses begin with a real task from the learner\'s own work or life, and build the coding and AI skills needed for it from zero.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Other pages for learners in Germany who want coding and AI.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Where all our Germany pages begin.' },
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'NRW rules, holidays and data.' },
      { href: '/ai-course-for-kids-germany', label: 'AI course for kids', p: 'AI ideas for children in Germany.' },
      { href: '/ai-course-for-school-students-germany', label: 'AI for school students', p: 'For pupils in secondary school.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Think, do not copy AI', p: 'Why we teach reasoning first.' },
      { href: '/bundeswettbewerb-ki-bwki-project-help', label: 'BWKI project help', p: 'For the national AI competition.' }
    ]
  },

  start: {
    h2: 'Book a free first class in Bielefeld',
    lede: 'Tell us the learner\'s age and what they would like to do. The mentor prepares a short task for that level, watches how they reason through it and how they manage in English, and recommends where to start.',
    readFirst: 'For the full picture of our method see <a class="ag-inline-link" href="/how-we-teach">how we teach</a>; every syllabus is on the <a class="ag-inline-link" href="/courses">course list</a>.',
    note: 'Live online classes in English only, with mentors in India. Message us on WhatsApp in English for the quickest reply.',
    formNote: 'The first class is free, and we do not ask for a card.'
  },

  footer: {
    cols: [
      { h4: 'AI and coding', links: [
        { href: '/ai-course-for-kids-germany', label: 'AI course for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/learn-to-think-not-copy-ai-germany', label: 'Think, do not copy' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' },
        { href: '/bundeswettbewerb-ki-bwki-project-help', label: 'BWKI project help' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'A percentage of what?'
  },

  personalityCss: `
.ag-root.ag-cab .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-cab .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-cab .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cab .ag-table td:last-child { font-variant-numeric: tabular-nums; }
.ag-root.ag-cab .ag-grid-3 h3 { letter-spacing: -0.006em; }
`,

  dossier: {
    curriculumAuthority: 'KMK, Bildung in der digitalen Welt (2016, 2024 AI recommendation, 2026 framework update); GI Informatik-Monitor 2026/27 (NRW page); KMK Ferien 2026/2027; BWKI conditions; provider terms via the AI tools age guide; Destatis GV-ISys 31.12.2024; Stadt Bielefeld open data, Treibhausgase Bilanzbericht, CC BY 4.0.',
    localProject: 'A percentage of what: an original Python project on Stadt Bielefeld\'s CO2 file by energy carrier in which UTF-8 fails at byte 1422 on the ü of Flüssiggas, Latin-1 and a decimal-comma converter make it readable, a gap check exposes the 20-year jump from 1990 to 2010, the 1990 to 2022 change ranges from Heizstrom -95.0% to Solarthermie +7965.0%, and absolute changes show solar heating rose by 262 t while diesel rose by 222,863 t. No total across carriers is computed. Lesson family: read the file in its own language, then distrust a percentage from a tiny start.',
    requiredMentions: ['co2_1990_2022.csv', 'UTF-8 failed: invalid start byte at byte 1422', 'Row 12 is called: Flüssiggas', 'Gaps between columns: [1, 20]  first gap: 20', 'Solarthermie: 3 t in 1990, 265 t in 2022, change +262 t', 'A percentage of what?', '331,605', 'Ostwestfalen-Lippe'],
    sources: [
      { claim: 'KMK 2016 strategy, 2024 AI recommendation, 2026 AI competence update.', url: 'https://www.kmk.org/themen/bildung-in-der-digitalen-welt.html' },
      { claim: 'NRW Informatik grades 5 and 6; Grundkurs and Leistungskurs; written Abitur without a computer.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'BWKI: Sek I and II, teams up to four, German or English.', url: 'https://www.bw-ki.de/teilnahmebedingungen' },
      { claim: 'NRW holidays 2026/27.', url: 'https://www.kmk.org/service/ferien.html' },
      { claim: 'Bielefeld greenhouse gas balance and licence.', url: 'https://ckan.govdata.de/dataset/treibhausgase-bilanzbericht' },
      { claim: 'Bielefeld population 331,605 on 31 December 2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'A Bielefeld CO2 total computed by adding the 23 carriers: never; the file publishes no total and we do not add parts into one.',
      'Any reason for the changes (heating switches, traffic, the 2020 dip): not in the file, none given.',
      'The Vornamen in Bielefeld dataset: identity data, not used.',
      'Any affiliation with Stadt Bielefeld, the KMK, the NRW ministry or the BWKI: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
