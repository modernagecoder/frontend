// SHIP: market (city) | Chiclayo, a trading city: kids first, then teens and adults who will build and run businesses | ambiguous dates: an unpadded ddmmyyyy has two readings; list both, let a second column decide
'use strict';
// Coding classes in Chiclayo, Peru (ag- city page, Peru cluster row PE049, P6; alloc: cities, coch, #784C34). Written 2026-11-10.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: any hour; USD only through
// data-price anchors. Kids and teens first; every age covered.
// Spine (differs from the Lambayeque region page, which covers three provinces, school services and rounded shares): Chiclayo
// is a commercial city where many families run a shop, a restaurant or a stall. School has a business area (Educación para el
// Trabajo, entrepreneurship) but no programming. The page starts with children, follows teenagers towards apps and web, and
// shows adults what code does in a small business, with a project on the city's own business-zoning register.
// The waste-collection register is already used by sql-and-data-analysis-course-peru, so this page uses a different MPCH dataset.
// Sources (research folder ~/Desktop/SkyCoders/keyword-research-2026-09/pe/; every quote string-matched in the raw file):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1 (src/inei/tab/tsv_ind_00/sheet2_CUADRO_N_1.tsv):
//    "LAMBAYEQUE 1404633"; PROVINCIA CHICLAYO 894229 (20 districts); CHICLAYO 270739, JOSÉ LEONARDO ORTÍZ 168297, LA VICTORIA
//    106971, PIMENTEL 62015, MONSEFÚ 39468, POMALCA 31588, TUMÁN 30517. Never summed.
//  - INEI Lib1539 Cuadro N° 1.9 (places.tsv): Chiclayo city 552,508 (2017 census, conglomerate).
//  - INEI Compendio Estadístico Perú 2026, tomo 1: 5.66 "031 Universidad Nacional Pedro Ruiz Gallo ... 8 306" (2025);
//    5.67 (private) "069 Universidad Católica Santo Toribio de Mogrovejo ... 11 447"; "072 Universidad Señor de Sipán S.A.C.
//    ... 22 279" (2025, whole university).
//  - CNEB (facts-school/src/cneb/text.txt; FACTS 37, 39, 40): "EDUCACIÓN PARA EL TRABAJO Gestiona proyectos de emprendimiento
//    económico y social"; JER "Educación para el trabajo 2 2 2 2 2", "Total de horas 35 35 35 35 35"; competency 28 transversal.
//  - MINEDU, Fábrica de Programadores (FACTS 45, 46): 1,000 pupils of 4° and 5° in Lima Norte, Python, PCEP.
//  - EF EPI 2025 (facts-market/src/ef_peru.raw): cityScore chiclayo "low" 474; stateScore lambayeque "low" 467; Peru 519.
//  - Time (facts-geo/timezone.tsv): America/Lima UTC-5 all year, last summer time 1994; Asia/Kolkata UTC+5:30.
//  - Data: Municipalidad Provincial de Chiclayo (MPCH), "Certificado de compatibilidad de uso - [Municipalidad Provincial de
//    Chiclayo - MPCH]", Plataforma Nacional de Datos Abiertos,
//    https://www.datosabiertos.gob.pe/dataset/certificado-de-compatibilidad-de-uso-municipalidad-provincial-de-chiclayo-mpch,
//    licence "Open Data Commons Attribution License" (dc:license on the raw page), released 2026-03-16, modified 2026-06-08.
//    Description: "Este documento técnico – normativo en el que se evalúa si el tipo de actividad económica a ser desarrollada
//    por el interesado resulta o no compatible con la zonificación vigente con la que califica el predio". Dictionary: FEC_INGRESO
//    "Formato: ddmmaaaa"; RUC and names anonymised. File 2_DataSet_certificado_de_Compatibilidad_Uso_Mayo.csv saved as
//    compatibilidad-uso-chiclayo.csv, 514,440 bytes, sha256 442371c7...3ea4a5ef1, 1,322 rows (2024: 998, 2025: 101, 2026: 223),
//    all district CHICLAYO; TIP_COMPATIBILIDAD REPORTE 1,246, CERTIFICADO 76; 664 rows spill text into four unnamed extra
//    columns; saved 9 November 2026. Examples as typed: "LOCAL DE COMIDA AL PASO - CEVICHERIA", "RESTAURANTE" / "CHIFA".
// Our own calculations (scratchpad pe/c1/chiclayo/v1.py, v2.py; copies in src-pages/.../data/; python3 -I on the file):
//  v1 prints: Entry dates read: 1268 of 1322 / 2042024 becomes 2024-04-20
//  v2 prints: 2042024 could be [datetime.date(2024, 4, 2), datetime.date(2024, 4, 20)] / one reading 1141 / issue date
//    decides 101 / no reading 43 / still two 37
//  summary: FEC_INGRESO lengths 8 (939 rows) and 7 (383 rows); entry dates with two valid readings: 138; RES_COMPATIBILIDAD
//    "COMPATIBLE" 604, "NO COMPATIBLE" 39, "COMPATIBLE CON RESTRICCIONES" 14 (other rows hold shifted text).
// Lesson family: ambiguous dates. A date written ddmmyyyy without leading zeros can have two valid readings; strptime silently
// picks one. List every reading, then use another column (entry on or before issue) to decide, and count what stays open.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = String.raw`import csv
from datetime import datetime

with open("compatibilidad-uso-chiclayo.csv", encoding="utf-8") as register:
    rows = list(csv.DictReader(register))

read = 0
for row in rows:
    try:
        datetime.strptime(row["FEC_INGRESO"].strip(), "%d%m%Y")
        read += 1
    except ValueError:
        pass

print("Entry dates read:", read, "of", len(rows))
print("2042024 becomes", datetime.strptime("2042024", "%d%m%Y").date())`;

const V2 = String.raw`import csv
from collections import Counter
from datetime import date

def readings(text):
    text = text.strip()
    found = []
    if text.isdigit() and len(text) in (7, 8):
        year, rest = int(text[-4:]), text[:-4]
        for cut in range(1, len(rest)):
            day, month = rest[:cut], rest[cut:]
            if len(day) <= 2 and len(month) <= 2:
                try:
                    found.append(date(year, int(month), int(day)))
                except ValueError:
                    pass
    return found

with open("compatibilidad-uso-chiclayo.csv", encoding="utf-8") as register:
    rows = list(csv.DictReader(register))

tally = Counter()
for row in rows:
    entry = readings(row["FEC_INGRESO"])
    issued = readings(row["FEC_EMISION"])
    if len(entry) == 1:
        tally["one reading"] += 1
    elif len(entry) == 0:
        tally["no reading"] += 1
    else:
        possible = [e for e in entry if any(e <= i for i in issued)]
        tally["issue date decides" if len(possible) == 1 else "still two"] += 1

print("2042024 could be", readings("2042024"))
for result, count in tally.most_common():
    print(result, count)`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Chiclayo: code for a trading city' },
  slug: 'coding-classes-in-chiclayo-peru',
  code: 'coch',
  accent: '#784C34',
  accentRationale: 'Coding classes in Chiclayo: a warm earth brown #784C34, the colour allocated to this row, close to the adobe of the north coast; contrast 6.87 on #FBF8F2, 6.46 on #F5F1E8 and 5.91 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding classes in Chiclayo, Peru',
  title: 'Coding Classes in Chiclayo, Peru: Live Online, in English',
  description: 'Coding classes in Chiclayo for kids, teens and adults, live online in English at any hour: courses by age, code for a family business, and a Chiclayo data project.',
  ogDescription: 'Live online coding for Chiclayo children, teenagers and adults, taught in English at whatever hour suits the family: courses by age, what school\'s entrepreneurship area leaves out, what code does in a small business, and a Python project on the city\'s business register.',
  twitterDescription: 'Coding in Chiclayo, live online in English: courses for every age, code for a family business, and a real city data project.',
  pageName: 'Coding Classes in Chiclayo, Peru',
  webPageDescription: 'A guide for Chiclayo families and adult learners to live online coding classes taught in English, built from INEI census and university figures, MINEDU curriculum sources, EF EPI 2025 and an original Python project on the Municipalidad Provincial de Chiclayo land-use compatibility register (ODC-By).',
  courseDescription: 'Live online coding classes in English for learners in Chiclayo, Peru: Scratch, games and Python for children from 6, Python, web and app development for secundaria students, and Python, data analysis, databases and AI tools for university students and adults, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Chiclayo',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#children', label: 'Children' },
    { href: '#teens', label: 'Teens' },
    { href: '#business', label: 'Adults and business' },
    { href: '#project', label: 'Chiclayo project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Chiclayo &middot; Live online, in English &middot; Children, teens, adults',
  h1: 'Coding classes in Chiclayo, Peru',
  lede: 'Chiclayo lives by trade: markets, restaurants, workshops and family shops. Its children will grow up selling, ordering and paying through apps, and many will one day build or run one. This page sets out which live online course suits a Chiclayo child, a secundaria student and an adult, what school covers, and ends with a puzzle hidden in the city\'s own register of business premises.',
  secondaryCta: { href: '#children', label: 'Start with children' },
  wa: 'Hello Modern Age Coders, we are in Chiclayo, Peru and would like live coding classes in English. Could we book a free first class?',
  heroNote: 'Live online classes since 2020 &middot; more than 10,000 students worldwide &middot; mentors who keep English clear and simple',
  spec: [
    ['Ages', 'From 6 to adult'],
    ['Children', 'Scratch, games, Python'],
    ['Teenagers', 'Python, web and apps'],
    ['Adults', 'Data, databases, AI tools'],
    ['Time', 'Any hour, Peru time'],
    ['Trial', 'One free class, no card']
  ],
  capsuleQ: 'The answer in brief',
  capsule: 'Modern Age Coders offers live online coding classes in English for all ages in Chiclayo, Peru. Children aged 6 to 12 build Scratch games and then type Python; secundaria students learn Python, web and app development; and adults, including people who run a business, learn Python, spreadsheets with code, databases and AI tools. A mentor teaches every lesson live on video, either to a class of fifteen to twenty or to one learner, at the time each family chooses.',

  picks: {
    eyebrow: 'Start here in Chiclayo',
    h2: 'Three first courses for Chiclayo learners',
    lede: 'One for children, one for teenagers who want to build something people use, and one for adults who want code to help at work.',
    items: [
      { course: 'game-development-masterclass-for-kids', code: 'CIX / 01', title: 'Game Development for Kids', note: 'For children who like games and want to make their own. They design levels, add rules and scores, and learn to fix what breaks, starting from simple blocks.' },
      { course: 'full-stack-web-development-teens-masterclass', code: 'CIX / 02', title: 'Web Development for Teens', note: 'Ages 13 to 18. Pages, forms and small web apps, the kind of thing a family shop or a school club could actually use, built step by step.' },
      { course: 'data-analysis-mastery-course-college', code: 'CIX / 03', title: 'Data Analysis', note: 'For adults of any background: spreadsheets, SQL, Python and simple dashboards. A good fit for anyone who keeps sales, stock or orders in a notebook or a spreadsheet today.' }
    ]
  },

  sections: [
    {
      id: 'city',
      eyebrow: 'Chiclayo in figures',
      h2: 'How many people live in Chiclayo?',
      lede: 'INEI counts Chiclayo in several ways. The 2025 census gives the department of Lambayeque, the province of Chiclayo and each district; the city as a whole was last counted in 2017.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Chiclayo by unit and census year', head: ['Unit', 'Population', 'Census'], rows: [
          ['Department of Lambayeque', '1,404,633', '2025'],
          ['Province of Chiclayo (20 districts)', '894,229', '2025'],
          ['District of Chiclayo', '270,739', '2025'],
          ['District of José Leonardo Ortiz', '168,297', '2025'],
          ['District of La Victoria', '106,971', '2025'],
          ['District of Pimentel', '62,015', '2025'],
          ['Chiclayo city (urban area)', '552,508', '2017']
        ] },
        { kind: 'source', html: 'INEI: the first table of the 2025 census Indicadores demográficos (total population on 15 September 2025) and, for the city as a whole, INEI\'s 2017 Perfil Sociodemográfico (Lib1539, table 1.9). Other districts of the province include Monsefú (39,468), Pomalca (31,588) and Tumán (30,517). Rows overlap; we never add them.' },
        { kind: 'two', mt: true,
          leftH3: 'A city of neighbouring districts',
          left: [
            'Chiclayo district holds the centre and the main markets. José Leonardo Ortiz to the north and La Victoria to the south are cities in their own right, and Pimentel by the sea has grown quickly. A child in any of them is a short distance and a long traffic queue from the others.',
            'With live online classes, distance stops mattering. The same mentor teaches a learner in Monsefú and one in the centre in the same way.'
          ],
          rightH3: 'Students in the city',
          right: [
            'INEI\'s compendium, from SUNEDU data, counts 8,306 undergraduates at the public Universidad Nacional Pedro Ruiz Gallo in 2025, 11,447 at the Universidad Católica Santo Toribio de Mogrovejo and 22,279 at the Universidad Señor de Sipán (the last figure covers the whole university). We are connected with none of them.',
            'For the rest of the department, from Lambayeque and Ferreñafe to the highland districts, see our <a class="ag-inline-link" href="/online-coding-and-ai-classes-lambayeque-region-peru">Lambayeque region page</a>.'
          ] }
      ]
    },
    {
      id: 'children',
      eyebrow: 'Children',
      h2: 'What can a Chiclayo child aged 6 to 12 learn in a coding class?',
      lede: 'A great deal, as long as the class starts with play. Younger children make things move; older ones type real code. The steps below are ours.',
      body: [
        { kind: 'table', numCols: [], caption: 'A first two years of coding for Chiclayo children (our plan)', head: ['Age', 'First months', 'By the end of the year'], rows: [
          ['6 and 7', 'A character that walks, talks and dances in Scratch', 'A short animated story with several scenes'],
          ['8 and 9', 'A catch game with a score and a timer', 'A game with levels, sounds and a high score'],
          ['10', 'First typed Python: print, input and a guessing game', 'A quiz program that keeps score'],
          ['11 and 12', 'Python with lists and loops', 'A small shop program that adds up a bill and gives change']
        ] },
        { kind: 'source', html: 'Our own plan and ages. Children are always grouped with others of a similar age, and a child moves on when ready rather than on a fixed date.' },
        { kind: 'two', mt: true,
          leftH3: 'Why a shop program at 12',
          left: [
            'Many Chiclayo children know how a bodega or a market stall works: prices, a total, change. Turning that into a program teaches lists, loops, sums and rounding, and the child already knows what the right answer should be.',
            'It also teaches a habit we care about: checking the program against a calculation done by hand before trusting it.'
          ],
          rightH3: 'English for young learners',
          right: [
            'Classes are in English. Young children follow by watching and copying, and they pick up the words as they use them. Mentors keep sentences short and repeat key words every week.',
            'Parents who prefer reading in Spanish can see our Spanish-language page for parents of younger children, <a class="ag-inline-link" href="/programacion-para-ninos-de-8-anos">programación para niños de 8 años</a>.'
          ] }
      ]
    },
    {
      id: 'teens',
      eyebrow: 'Secundaria',
      h2: 'Do Chiclayo schools teach programming to teenagers?',
      lede: 'No. Secundaria has an area called Educación para el Trabajo, focused on entrepreneurship, but no programming area. Code is where a business idea becomes something a customer can use.',
      body: [
        { kind: 'two',
          leftH3: 'What the curriculum gives',
          left: [
            'Under the regular school day, each secundaria grade has 35 teaching hours a week, two of them for Educación para el Trabajo. That area has one competency: "Gestiona proyectos de emprendimiento económico y social", managing economic and social enterprise projects.',
            'Digital skills appear only as a transversal competency, shared by every area. Nothing in the plan asks a student to write a program, so a Chiclayo teenager with a good business idea usually has no way to build it.'
          ],
          rightH3: 'What coding adds',
          right: [
            'A teenager who can build a simple website, an order form or a small app can test an idea for real: does anyone click, does anyone order? That is the step school projects rarely reach.',
            'MINEDU has started a Python pilot, Fábrica de Programadores, for 1,000 public-school students of 4° and 5° de secundaria in Lima Norte. Students in Chiclayo who want the same path take it outside school.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Courses for Chiclayo teenagers (our routes)', head: ['If the teenager wants to', 'Start with', 'Then'], rows: [
          ['Learn to program properly', 'Python for Teens', 'Java or data science'],
          ['Build a website for a real use', 'Web Development for Teens', 'Databases for teens'],
          ['Make a phone app', 'App Development for Teens', 'Publishing and testing with users'],
          ['Understand AI', 'AI and Machine Learning for Teens', 'Projects with real data'],
          ['Get a recognised certificate', 'PCEP and PCAP Python', 'PCAP after PCEP']
        ] },
        { kind: 'source', html: 'Curriculum: MINEDU, Currículo Nacional de la Educación Básica (secundaria plan of study and the Educación para el Trabajo competency). Course routes are ours. Our national page on <a class="ag-inline-link" href="/coding-classes-for-teens-peru">coding classes for teens in Peru</a> describes each teen course.' }
      ]
    },
    {
      id: 'business',
      eyebrow: 'Adults and business',
      h2: 'How can coding help an adult who runs a business in Chiclayo?',
      lede: 'Mostly by saving time and catching mistakes. You do not need to become a software engineer; a few months of Python and data work changes how you handle stock, sales and orders.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Tidy records', p: 'Turn a notebook or a messy spreadsheet into a clean table with one row per sale, then let a program add up the week, find the top sellers and flag unusual days.' },
          { h3: 'Check before trusting', p: 'Learn to test a total against a hand count, to spot a date typed the wrong way, and to see when an AI tool has made something up. These habits protect money.' },
          { h3: 'Use AI tools safely', p: 'Our adult courses show how to use AI assistants for code and analysis while keeping the decisions, and the checking, with you.' }
        ] },
        { kind: 'p', mt: true, html: 'Adults learn in adult groups, at hours that fit around opening times. Many start with Python or data analysis and later move to databases or AI coding agents. Our page on <a class="ag-inline-link" href="/curso-de-ia-para-empresas-peru">curso de IA para empresas</a>, in Spanish, covers AI for businesses in more depth, and <a class="ag-inline-link" href="/ai-and-coding-for-professionals-peru">AI and coding for professionals in Peru</a> does the same in English.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the classes in Spanish?',
      lede: 'No. We teach in English only, live and online, with mentors in India who keep their language clear and adjust to each learner.',
      body: [
        { kind: 'two',
          leftH3: 'Chiclayo and English',
          left: [
            'EF\'s 2025 English Proficiency Index places Chiclayo city at 474 and the Lambayeque region at 467, both in its "low" band, against 519 for Peru as a whole. For many Chiclayo learners, English is still being built.',
            'That is why our mentors slow down, show before they explain, and put new words on screen. The free first class tells both of you whether a group class or a slower private start is better.'
          ],
          rightH3: 'A useful side effect',
          right: [
            'Code is written with English words, and most programming help online is in English. A Chiclayo teenager who learns to code in English is also learning to read that help.',
            'For adults in business, English opens supplier catalogues, software documentation and courses that are not translated. Our page on <a class="ag-inline-link" href="/learn-coding-and-english-together-peru">coding and English together</a> says more.'
          ] }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A real Chiclayo project',
      h2: 'When is 2042024? A puzzle in Chiclayo\'s business register',
      lede: 'Before a shop, a cevichería or an office opens in Chiclayo, the provincial council checks whether that activity is allowed in that zone. The council publishes its register of those checks as open data, and its dates hide a puzzle about how computers read text.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset is "Certificado de compatibilidad de uso", published by the Municipalidad Provincial de Chiclayo on Peru\'s open-data portal under the Open Data Commons Attribution licence (ODC-By), first released on 16 March 2026 and updated on 8 June 2026. The council describes the certificate as the document in which it assesses whether an economic activity is compatible with the zoning of the property.',
            'The file we hold, downloaded 9 November 2026, contains 1,322 rows from 2024 to 2026, with business names and tax numbers masked. Activities range from "RESTAURANTE" with a "CHIFA" alongside, to a "LOCAL DE COMIDA AL PASO - CEVICHERIA".'
          ],
          rightH3: 'The puzzle',
          right: [
            'The data dictionary says the entry date, FEC_INGRESO, is written "ddmmaaaa": two digits for the day, two for the month, four for the year. But 383 of the entry dates have only seven digits, because a leading zero was dropped.',
            'Take "2042024". Is it 2 April 2024 (2, 04, 2024) or 20 April 2024 (20, 4, 2024)? Both are real dates. Version 1 asks Python\'s <code>strptime</code> to read every entry date and see what it does with this one.'
          ] },
        { kind: 'code', label: 'Version 1: let strptime read the dates', lang: 'Python', code: V1, note: 'It prints <code>Entry dates read: 1268 of 1322</code> and <code>2042024 becomes 2024-04-20</code>.' },
        { kind: 'p', mt: true, html: 'Python read 1,268 dates without a single complaint, and it read "2042024" as 20 April. It never said that 2 April was just as possible. A program that quietly chooses one meaning is more dangerous than one that stops with an error, because nobody knows to check.' },
        { kind: 'p', html: 'Version 2 does the honest thing. Its function <code>readings()</code> tries every way of cutting the digits before the year into a day and a month, and keeps every cut that makes a real date. Then it uses a second column: an application must be entered on or before the day the council issues its answer, FEC_EMISION. If only one reading of the entry date comes before the issue date, that reading wins.' },
        { kind: 'code', label: 'Version 2: list every reading, then let the issue date decide', lang: 'Python', code: V2, note: 'It prints <code>2042024 could be [datetime.date(2024, 4, 2), datetime.date(2024, 4, 20)]</code>, then <code>one reading 1141</code>, <code>issue date decides 101</code>, <code>no reading 43</code> and <code>still two 37</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'What happened to the 1,322 entry dates (our calculation)', head: ['Result', 'Rows', 'What it means'], rows: [
          ['One reading', '1,141', 'Only one real date fits the digits'],
          ['Issue date decides', '101', 'Two readings, but only one comes before the issue date'],
          ['Still two', '37', 'Both readings are possible; the data cannot settle it'],
          ['No reading', '43', 'Blank, not digits, or not a real date']
        ] },
        { kind: 'source', html: 'Data: Municipalidad Provincial de Chiclayo, Certificado de compatibilidad de uso, datosabiertos.gob.pe, ODC-By. Counts are ours. A further caution: in 664 rows, text has spilled into four unnamed columns at the end of the file, so later columns of those rows are shifted; the two date columns we use come before the spill.' },
        { kind: 'p', mt: true, html: 'Of 138 entry dates with two possible readings, the issue date settles 101. For the last 37, an honest report says "unknown between these two days" rather than picking one. That is the whole lesson: when text can mean two things, write code that finds both, use what else you know to choose, and admit what you cannot choose.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 8 to 10, on paper.</strong> Write today\'s date as eight digits, then drop every zero. Can a friend still read it? Try 1 November and 11 January.',
          '<strong>Ages 10 to 12, in Python.</strong> Write a program that takes "1112024" and prints both possible dates.',
          '<strong>Ages 13 to 15.</strong> Run Version 1 on the issue date column, <code>FEC_EMISION</code>. Does strptime make the same silent choice?',
          '<strong>Ages 15 and over.</strong> Count, for the 37 dates still in doubt, how many days apart the two readings are. Would the difference matter to a shop owner?',
          '<strong>Adults.</strong> Look at your own sales records. Are any dates written in a way a program could read wrongly?'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time could a Chiclayo learner have classes?',
      lede: 'At the time you pick. Chiclayo keeps Peru time throughout the year, and the mentor works around school, work and opening hours.',
      body: [
        { kind: 'table', numCols: [], caption: 'Chiclayo times and their equivalents in India (conversions, not a timetable)', head: ['Chiclayo', 'India', 'Note'], rows: [
          ['07:00', '17:30', 'Same date'],
          ['09:30', '20:00', 'Same date'],
          ['12:30', '23:00', 'Same date'],
          ['14:00', '00:30', 'Next date in India'],
          ['18:00', '04:30', 'Next date in India'],
          ['21:30', '08:00', 'Next date in India']
        ] },
        { kind: 'source', html: 'Chiclayo, like all of Peru, sits at UTC minus five and has not moved its clocks for summer since 1994, according to the America/Lima entry of the time-zone database; INACAL issues the legal hour. India sits at UTC plus five and a half, so the two clocks are always ten and a half hours apart.' },
        { kind: 'p', mt: true, html: 'A shop owner might choose an hour before opening; a teenager might choose late afternoon; a child often does best on a weekend morning. You book in Chiclayo time, and because neither country changes its clocks, the slot holds all year.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Steps a Chiclayo learner climbs',
    lede: 'Our own steps, used for every age. They show where a new learner fits and what each term has added.',
    table: { caption: 'From first blocks to reading data honestly (ours)', head: ['Step', 'Often around', 'The learner can'], rows: [
      ['1. Move', 'Age 6 to 7', 'Make a character follow a sequence of blocks'],
      ['2. Count', 'Age 8 to 9', 'Keep a score and a timer in a game'],
      ['3. Type', 'Age 10 to 12', 'Write Python that adds up a bill and gives change'],
      ['4. Build', 'Age 13 to adult', 'Make a web page or app that another person can use'],
      ['5. Read data', 'Age 14 to adult', 'Load a real file and turn its text into numbers and dates'],
      ['6. Doubt', 'Age 15 to adult', 'Find values with two meanings and report what cannot be decided']
    ] },
    left: { h3: 'For parents', ps: [
      'The register puzzle sits at step 6. It is the habit that keeps a business owner, or a future engineer, out of trouble.',
      'Each term ends with something your child can open, use and explain.'
    ] },
    right: { h3: 'For learners', ps: [
      'If a computer reads something without complaining, that does not mean it read it correctly.',
      'When you cannot decide, say so. That is an answer too.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Chiclayo learners',
    lede: 'From children to adults. Each is taught live and in English by one steady mentor, to a group or privately.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 14', courses: [
        { code: 'CIX / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Block coding from the first lesson, the usual start below age ten.' },
        { code: 'CIX / KIDS / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed code and small AI projects for 9 to 12 year olds.' },
        { code: 'CIX / KIDS / 03', slug: 'kids-ai-web-development-course', title: 'Web building for kids', blurb: 'Children make their first web pages with careful AI help.' }
      ] },
      { num: 'II', h3: 'Secundaria', sub: 'Ages 13 to 18', courses: [
        { code: 'CIX / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Python taught from nothing, through files and data.' },
        { code: 'CIX / TEEN / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'Phone apps designed, built and tested by teenagers.' },
        { code: 'CIX / TEEN / 03', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP Python', blurb: 'Two international Python certificates, step by step.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: 'Ages 18 and over', courses: [
        { code: 'CIX / ADULT / 01', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL databases', blurb: 'Store sales, stock and customers properly, and query them.' },
        { code: 'CIX / ADULT / 02', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'From a first script to automating a weekly chore.' },
        { code: 'CIX / ADULT / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI coding agents', blurb: 'AI agents for real work, with a human checking every step.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live online classes work from Chiclayo',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before opening', l: 'An early Chiclayo hour is an evening hour for the mentor in India.' },
      { time: 'After closing', l: 'Evenings and weekends are open too, for families and workers.' },
      { time: 'Private', l: 'One learner with one mentor, at hours agreed between them.' }
    ],
    cells: [
      { h3: 'Regular mentor', p: 'The same teacher each week, who knows the learner\'s project.' },
      { h3: 'Simple English', p: 'Short sentences, key words on screen, time to answer.' },
      { h3: 'Learner types', p: 'The student writes every line; the mentor asks and guides.' },
      { h3: 'Grouped by age', p: 'Children, teenagers and adults never mixed.' },
      { h3: 'Updates for families', p: 'What was made this week and the next goal.' },
      { h3: 'Class size', p: 'Fifteen to twenty learners, or a private class.' }
    ]
  },

  projectsH2: 'Projects by students further along',
  projectsLede: 'After a year or two, our students build tools others use. A few are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> show more.',
  reviewsLede: 'Parents and students on Google, word for word.',

  fees: {
    h2: 'Fees for learners in Chiclayo',
    lede: 'Payment is monthly. We price and charge in US dollars on your card, and your bank works out the amount in soles at the rate it applies, which may shift slightly between months.',
    free: ['A free trial class', 'A puzzle and a first program', 'No card needed'],
    group: ['Fifteen to twenty learners of similar age', 'One mentor throughout', 'Two live classes each week', 'Monthly, stop any time'],
    one: ['One learner, one mentor', 'Projects built around their goals', 'Days and times you set']
  },

  faq: {
    eyebrow: 'Chiclayo families ask',
    h2: 'Coding classes in Chiclayo: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every lesson is taught in English only, live and online. Mentors use clear, simple English, put new words on screen and adapt to each learner\'s accent and pace; a learner who answers in Spanish is understood and given the English words.' },
      { q: 'Do you have a centre in Chiclayo?', a: 'No. Our classes are only live online, so a learner in José Leonardo Ortiz, La Victoria, Pimentel or the centre joins in the same way from home.' },
      { q: 'What age can a child start?', a: 'Six. Young children use Scratch blocks with no typing, and most move to typed Python around nine or ten. Teenagers and adults start from zero in their own groups.' },
      { q: 'Does school in Chiclayo teach programming?', a: 'Not as a subject. Secundaria has Educación para el Trabajo, focused on entrepreneurship projects, and digital skills spread across all areas, but no programming area in the national plan of study.' },
      { q: 'I run a small business. Is there a course for me?', a: 'Yes. Most business owners start with data analysis or Python, learning to organise sales and stock records and check totals, then move on to databases or AI tools if they wish. Adults learn with adults, at hours around work.' },
      { q: 'What time are classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Chiclayo keeps Peru time all year, so 09:30 in Chiclayo is 20:00 for the mentor in India.' },
      { q: 'Can students at Chiclayo universities join?', a: 'Yes. University students take Python, Java, databases and data analysis with us alongside their degree. We are not connected with the UNPRG, the USAT, the USS or any other university, and we never do assessed work for students.' },
      { q: 'How much is it, and in which currency?', a: 'The monthly fee shown on this page is in US dollars and is charged to your card in dollars; your bank converts it into soles. Visitors from India are shown rupees. The trial class is free and no card is asked for.' },
      { q: 'Is there a certificate?', a: 'Where a course includes one, the learner receives a Modern Age Coders certificate of completion. It is our own, not issued by MINEDU, a school or a university, and not a Peruvian qualification.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More reading for Chiclayo families and adults.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The national guide, with every page.' },
      { href: '/online-coding-and-ai-classes-lambayeque-region-peru', label: 'Lambayeque region', p: 'The department beyond Chiclayo.' },
      { href: '/web-development-course-peru', label: 'Web development in Peru', p: 'Websites and web apps, in English.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'What typed code looks like at ten.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'For any adult, at any age.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One live class, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free class from Chiclayo',
    lede: 'The trial is a real class. Learner and mentor solve a puzzle and write a first program together; the mentor sees how the learner reasons and how much English they follow, and then recommends a course and a group.',
    readFirst: 'To read more first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">the courses</a>.',
    note: 'Classes are live online with mentors in India, in English only. Write to us on WhatsApp in English for a quick reply.',
    formNote: 'Free, with no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'By age', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-classes-for-teenagers', label: 'AI for teenagers' },
        { href: '/coding-classes-for-adults', label: 'Coding for adults' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru guide' },
        { href: '/online-coding-and-ai-classes-lambayeque-region-peru', label: 'Lambayeque region' },
        { href: '/ai-and-coding-for-professionals-peru', label: 'For professionals' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Read silently is not read correctly'
  },

  personalityCss: `
.ag-root.ag-coch .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-coch .ag-capsule { border-left-width: 5px; border-radius: 5px; }
.ag-root.ag-coch .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-coch .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-coch .ag-code-head b { letter-spacing: 0.025em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Cuadro N° 1), Perfil Sociodemográfico 2017 (Cuadro N° 1.9) and Compendio Estadístico Perú 2026 (tables 5.66, 5.67); MINEDU CNEB secundaria plan of study and Educación para el Trabajo competency; Fábrica de Programadores; EF EPI 2025; tz database and INACAL. Data: Municipalidad Provincial de Chiclayo, Certificado de compatibilidad de uso, ODC-By.',
    localProject: 'When is 2042024? An original Python project on the MPCH land-use compatibility register (ODC-By): Version 1 shows strptime reading 1,268 of 1,322 entry dates and silently choosing 20 April for "2042024"; Version 2 lists every valid reading, lets the issue date settle 101 of 138 ambiguous entries, and reports 37 that stay open. Lesson family: ambiguous dates.',
    requiredMentions: ['compatibilidad-uso-chiclayo.csv', 'Entry dates read: 1268 of 1322', '2042024 becomes 2024-04-20', 'issue date decides 101', '894,229', '552,508', 'José Leonardo Ortiz', 'Read silently is not read correctly', 'Chiclayo city at 474'],
    sources: [
      { claim: 'Lambayeque, Chiclayo province and district populations, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Chiclayo city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'University enrolment in Chiclayo, 2025.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'MPCH land-use compatibility register and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/certificado-de-compatibilidad-de-uso-municipalidad-provincial-de-chiclayo-mpch' },
      { claim: 'Educación para el Trabajo competency and secundaria hours; transversal TIC competency.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Fábrica de Programadores pilot, Lima Norte.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'EF EPI 2025 scores for Chiclayo, Lambayeque and Peru.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Any count of businesses by activity from the register: half the rows have shifted columns, so the page names only examples.',
      'Any business name, tax number or address: masked by the publisher and never used.',
      'Waste-collection data: already used on sql-and-data-analysis-course-peru, so not reused here.',
      'A Chiclayo total made by adding districts: never summed.',
      'Spanish-language teaching: every class is in English.',
      'Any connection with the Municipalidad Provincial de Chiclayo, MINEDU, UNPRG, USAT, USS or any school: none.'
    ]
  }
};
