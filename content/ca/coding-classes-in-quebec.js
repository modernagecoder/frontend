'use strict';
// Quebec (cg- province page, Canada cluster Wave 2, row 91). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md. English-language page built from the English versions of the
// Québec Education Program (QEP) documents and Québec.ca. Siblings NOT repeated here (linked instead):
// quebec-secondary-4-math-cst-ts-science (the three Cycle Two math options and the Sec IV exam),
// quebec-secondary-5-math-tutor (Secondary V math and CEGEP prerequisites), cegep-computer-science-preparation (200.C0, 420.B0),
// canada-coding-curriculum-by-province (the cross-province table).
// Spine: where computing actually lives in the QEP (a cross-curricular ICT competency and the 2026 Digital Competency
// Framework, not a stand-alone course), a province-wide Données Québec project on the municipal register, the CEMC contests
// in a French-language province, and Eastern time with the Blanc-Sablon exception.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src/coding-classes-in-quebec/):
//  - quebec.ca QEP Elementary (qc-qep-elementary.html): "comprises programs of study for students from Elementary 1 to
//    Elementary 6". QEP Secondary (qc-qep-secondary.html): "comprises programs of study for students from Secondary I to
//    Secondary V".
//  - QEP Elementary, Cross-Curricular Competencies (PFEQ-competences-transversales-primaire-AN.pdf, qc-cross-elem.pdf):
//    "COMPETENCY 6 - TO USE INFORMATION AND COMMUNICATIONS TECHNOLOGIES (ICT)" (dash garbled in extraction); "To identify
//    the limitations of the technology employed in a given situation."; "To use appropriate working and troubleshooting
//    strategies."
//  - QEP Elementary Mathematics (PFEQ-mathematique-primaire-AN.pdf, qc-elem-math-program.pdf): "The use of information and
//    communications technologies is compulsory, but it is up to the teacher to choose the activities involving ICT.";
//    "Learning to do a computer simulation of a random experiment"; "High technology, engineering and computer programming
//    are among the many fields requiring the use of mathematics".
//  - QEP Elementary Science and Technology (PFEQ-science-technologie-primaire-AN.pdf, qc-elem-st-program.pdf): ICT
//    suggestion "Robotics and automation"; essential knowledge "Servomechanism and robots".
//  - QEP Secondary Cycle Two, Cross-Curricular Competencies (PFEQ-competences-transversales-deuxieme-cycle-secondaire-AN.pdf,
//    qc-cross-sec2.pdf): "Problem solving is not a linear process that can be reduced to the application of an algorithm."
//  - Ministère de l'Éducation, Digital Competency Framework 2026 (Cadre-reference-competence-num-AN.pdf, saved as
//    qc-digital-competency-framework.pdf): "organized into 12 dimensions"; applies "from preschool through higher
//    education"; guiding principle "integration of AI as a component of digital technology"; D2 "This dimension also
//    incorporates computer science and concepts related to AI"; D2 elements "Describe the fundamental concepts associated
//    with computer science and AI." and "Develop or adapt a digital tool using one's knowledge and skills in computer
//    programming."; sample themes "Computational thinking", "No-code, low-code, or natural language programming",
//    "Algorithmic bias". Short phrases only, cited (the PDF limits reproduction).
//  - Charter of the French language, CQLR c C-11, s.1 (facts-geo.md, Internet Archive copy): "French is the official
//    language of Québec."
//  - CEMC (facts-schools-contests.md): CCC "This contest is available in English and French."; BCC "This contest is
//    available in English only."; CCC Wednesday 17 February 2027; Euclid "Students in their final year of secondary school or
//    CÉGEP students.", Tuesday 6 April 2027; CSMC "Students in Grades 11 and 12 and CÉGEP students are eligible to write the
//    CSMC.", Wednesday 18 November 2026; "all students must participate through their school"; BCC 9 to 20 November 2026.
//  - facts-geo.md: Quebec on America/Toronto (UTC-5 from 1 November 2026, UTC-4 from 14 March 2027); Blanc-Sablon area
//    America/Blanc-Sablon linked to America/Puerto_Rico (UTC-4, no DST; tzdb backward file); area codes 263, 354, 367, 418,
//    438, 450, 468, 514, 579, 581, 819, 873; Telecom Decision CRTC 2025-269: area code 273 for complex 367/418/581
//    "effective 27 February 2027". No populations.
//  - Données Québec, Répertoire des municipalités du Québec (Ministère des Affaires municipales et de l'Habitation), licence
//    "Attribution (CC-BY 4.0)", update frequency "Quotidien"; MUN.csv downloaded with curl on 22 October 2026 (1,114,796
//    bytes, sha256 bcc1aec2...4fd4, Last-Modified 22 Oct 2026 11:00 GMT), saved in opendata/. Licence page
//    donneesquebec.ca/licence: the Attribution variant allows use "même à des fins commerciales".
// Our own calculations (py/count_regions_dates.py, run with python -I on opendata/MUN.csv; output count_regions_dates.out.txt;
// exploration in py/explore.py): 1,281 rows, 1,281 distinct mcode; 17 administrative regions (Montérégie 150,
// Chaudière-Appalaches 136, Bas-Saint-Laurent 127, Estrie 117, Laurentides 88, Centre-du-Québec 80, Abitibi-Témiscamingue 76,
// Outaouais 75, Lanaudière 70, Capitale-Nationale 69, Nord-du-Québec 61, Saguenay--Lac-Saint-Jean 59,
// Gaspésie--Îles-de-la-Madeleine 54, Côte-Nord 53, Mauricie 49, Montréal 16, Laval 1); mdes Municipalité 651, Ville 234,
// Paroisse 128, Territoire non organisé 105, Canton 42, Village 41, 15 labels in all; mdatcons blank on 57 rows; earliest
// 1846-03-30 (La Prairie), latest 2026-01-01 (Hébertville); 389 dates before 1900; 160 in 2000 or later. Columns NOT used on
// purpose: mpopul (population), maire and con1 to con75 (names of elected people).
// Lesson family: parsing structured text fields (splitting "Name (code)" labels and ISO dates into parts) and sorting tuples.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  '',
  'regions = {}',
  'dated = []',
  'blank = 0',
  '',
  'with open("MUN.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f):',
  '        name, code = row["regadm"].rsplit(" (", 1)',
  '        regions[name] = regions.get(name, 0) + 1',
  '        if row["mdatcons"]:',
  '            year, month, day = row["mdatcons"].split("-")',
  '            dated.append((int(year), int(month), int(day), row["munnom"]))',
  '        else:',
  '            blank += 1',
  '',
  'for name, count in sorted(regions.items(), key=lambda p: p[1], reverse=True):',
  '    print(count, name)',
  'dated.sort()',
  'print("oldest", dated[0])',
  'print("newest", dated[-1])',
  'print("no date", blank)'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'province', tag: 'QUEBEC', label: 'Quebec', blurb: 'Coding and AI in English for Quebec students: where computing sits in the Québec Education Program, a Données Québec project and the CEMC contests.' },
  market: CA,
  slug: 'coding-classes-in-quebec',
  code: 'qux',
  accent: '#4C2937',
  accentRationale: 'Quebec: a deep plum-aubergine, #4C2937, allocated to row 91 and kept clear of the retired purple band by its low saturation and value; contrast 11.79 on the paper #FBF8F2, 11.09 on #F5F1E8 and 10.15 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Quebec',
    eyebrow: 'Quebec, Canada',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'By province', href: '/canada-coding-curriculum-by-province' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Quebec',
  title: 'Coding Classes in Quebec | Live Online, in English, Ages 6+',
  description: 'Live online coding, Python and AI classes in English for Quebec students: where computing sits in the QEP, the 2026 digital framework and CEMC contests.',
  ogDescription: 'Quebec has no stand-alone school coding course; computing runs through the QEP and the 2026 Digital Competency Framework. Live online classes in English go deeper.',
  twitterDescription: 'Quebec coding, Python and AI classes, live online in English, from Elementary 1 to CÉGEP.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and AI Classes for Quebec Students',
    description: 'Live online coding taught in English to Quebec students from Elementary 1 to CÉGEP and adult learners: blocks, Python, math through code, AI and machine learning, and CCC contest preparation.'
  },

  h1: 'Coding classes in Quebec',
  capsuleQ: 'Where can a Quebec student learn to code properly, in English?',
  capsule: 'Modern Age Coders teaches coding, Python and AI live online, in English, to Quebec students from Elementary 1 to CÉGEP and to adults, either one to one or in a group batch of fifteen to twenty. Most start with Python and AI for Kids, Maths Through Coding or Python for Teens. Times are set on Quebec time, and the first class is free.',
  lead: 'Quebec schools do not timetable coding the way Ontario does. In the Québec Education Program, computing is spread across subjects: a cross-curricular competency for using information and communications technologies, ICT suggestions inside elementary math and science, and since 2026 a revised Digital Competency Framework that names computer programming and AI. That spread is a strength for breadth and a weakness for depth, because no single course owns the job of teaching a child to write and debug real programs. This page sets out what the ministry\'s documents say, quoting them where it matters; a data project we built on the province\'s own municipal register; the CEMC contests a Quebec student can write in 2026 to 2027; and how live classes in English fit beside a French-language or English-language school week.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a student in Quebec.',

  picks: {
    eyebrow: 'Course picks for Quebec',
    h2: 'Four courses Quebec families start with',
    intro: 'Chosen by age and by what the Québec Education Program leaves to the teacher, then confirmed in a free first lesson.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Elementary 4 to 6', note: 'Typed Python for children ready to leave blocks behind: loops, conditions, small games and the simulations that elementary math only suggests.' },
      { course: 'maths-through-coding', band: 'Elementary 5 to Secondary III', note: 'Fractions, probability and patterns worked out in Python, so the random experiment the math program mentions becomes a program the student wrote.' },
      { course: 'python-complete-masterclass-teens', band: 'Secondary I to V', note: 'Python taken all the way, through functions, files and real data sets, the base for the municipal register project on this page and for every later course.' },
      { course: 'ccc-junior-and-senior-preparation-course', band: 'Secondary III to CÉGEP', note: 'For contest-minded students: original problems in the style of the Canadian Computing Competition, which CEMC offers in English and French.' }
    ]
  },

  sections: [
    {
      id: 'school', tint: '', eyebrow: 'Computing in Quebec schools',
      h2: 'Where coding sits in the Québec Education Program',
      intro: 'The Québec Education Program (QEP) covers Elementary 1 to Elementary 6 and Secondary I to Secondary V. We read its English documents on Québec.ca on 22 October 2026. Wording inside quotation marks comes from the ministry; every summary is our own.',
      body: [
        { kind: 'table', caption: 'Computing in the QEP and the 2026 Digital Competency Framework, by document. Quotes from the Ministère de l\'Éducation; the right-hand column is our reading', head: ['Document', 'What it says', 'What it means for a student'], rows: [
          ['Cross-curricular competencies, elementary', 'Competency 6 is &ldquo;To use information and communications technologies (ICT)&rdquo;, including &ldquo;To identify the limitations of the technology employed in a given situation.&rdquo;', 'Every subject is meant to use technology, and children are asked to judge it, not only operate it'],
          ['Elementary Mathematics', '&ldquo;The use of information and communications technologies is compulsory, but it is up to the teacher to choose the activities involving ICT.&rdquo;', 'Some use of ICT is required; whether that means programming is the teacher\'s choice'],
          ['Elementary Mathematics, ICT suggestions', '&ldquo;Learning to do a computer simulation of a random experiment&rdquo;', 'A probability simulation is named in the program, which is a natural first program for a ten-year-old'],
          ['Elementary Science and Technology', 'Essential knowledge includes &ldquo;Servomechanism and robots&rdquo;; the ICT list adds &ldquo;Robotics and automation&rdquo;', 'Robots appear as a topic to understand, with automation suggested as an ICT activity'],
          ['Cross-curricular competencies, Secondary Cycle Two', '&ldquo;Problem solving is not a linear process that can be reduced to the application of an algorithm.&rdquo;', 'The program wants students to define the problem first, which is exactly where beginners in programming struggle'],
          ['Digital Competency Framework 2026', 'Dimension 2 &ldquo;also incorporates computer science and concepts related to AI&rdquo;; one element reads &ldquo;Develop or adapt a digital tool using one\'s knowledge and skills in computer programming.&rdquo;', 'Programming and AI are named outright, as part of one digital competency rather than a separate course']
        ] },
        { kind: 'p', text: 'Read together, the documents point the same way: technology belongs in every subject, a child should be able to say when a tool is the wrong one, and programming is part of what a digitally competent person can do. What they do not create is a course with hours set aside for it. The secondary subject list on Québec.ca groups Mathematics with the science and technology programs, and the computer science programs a Quebec student meets by name are college programs, which we cover on our <a class="cg-inline-link" href="/cegep-computer-science-preparation">CEGEP computer science page</a>.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'One competency, 12 dimensions', p: 'The Ministère de l\'Éducation published the Digital Competency Framework 2026 as an update of its 2019 framework. It is still organized into 12 dimensions, and the ministry says it applies from preschool through higher education, with AI treated as part of digital technology rather than a topic apart.' },
          { h3: 'Programming in its themes', p: 'Among the sample themes for Dimension 2, the framework lists computational thinking, computer programming, AI literacy, machine learning and &ldquo;No-code, low-code, or natural language programming&rdquo;. Elsewhere it names algorithmic bias, the idea that a model can inherit the slant of its training data.' },
          { h3: 'Math options come later', p: 'In Secondary IV and V, students choose among three math options. That choice matters for CÉGEP and for computer science later, and we explain it on our <a class="cg-inline-link" href="/quebec-secondary-4-math-cst-ts-science">Secondary IV options page</a> and our <a class="cg-inline-link" href="/quebec-secondary-5-math-tutor">Secondary V math page</a>.' }
        ] },
        { kind: 'p', text: 'The framework\'s source line asks readers to cite it as the Ministère de l\'Éducation\'s Digital Competency Framework 2026, and we quote it only in short phrases for that reason. For a parent, the practical reading is simpler: Quebec expects children to become competent, critical users and makers of digital tools, and it leaves most of the making to whatever time a teacher can find. A live class gives that making a fixed hour each week and a teacher who reads the student\'s code line by line.' },
        { kind: 'callout', h3: 'Beside school, never instead of it', p: 'Our classes run next to the QEP, and we do not grant Quebec credits, a diploma or a report card mark. We are not connected with the Ministère de l\'Éducation, any school service centre or school board, or CEMC. Our classes are taught in English.' }
      ]
    },
    {
      id: 'register', tint: 'deep', eyebrow: 'Quebec data project',
      h2: 'Which region has the most municipalities? A project on the province\'s register',
      intro: 'The Ministère des Affaires municipales et de l\'Habitation publishes the Répertoire des municipalités du Québec on Données Québec, refreshed daily. Our students download one file from it and answer questions with Python. Every count below is ours.',
      body: [
        { kind: 'table', caption: 'Our count of MUN.csv from the Répertoire des municipalités du Québec, downloaded 22 October 2026: rows per administrative region (1,281 rows in all, 17 regions). Region names exactly as the file writes them', head: ['Administrative region (regadm)', 'Rows'], rows: [
          ['Montérégie', '150'],
          ['Chaudière-Appalaches', '136'],
          ['Bas-Saint-Laurent', '127'],
          ['Estrie', '117'],
          ['Laurentides', '88'],
          ['Centre-du-Québec', '80'],
          ['Abitibi-Témiscamingue', '76'],
          ['Outaouais', '75'],
          ['Lanaudière', '70'],
          ['Capitale-Nationale', '69'],
          ['Nord-du-Québec', '61'],
          ['Saguenay--Lac-Saint-Jean', '59'],
          ['Gaspésie--Îles-de-la-Madeleine', '54'],
          ['Côte-Nord', '53'],
          ['Mauricie', '49'],
          ['Montréal', '16'],
          ['Laval', '1']
        ] },
        { kind: 'p', text: 'This is the script that produced the table. It needs only Python 3 and the downloaded file in the same folder:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Split the label', p: 'Each region arrives as a name followed by its code in brackets, such as Montérégie (16). Splitting once from the right on the space and opening bracket keeps hyphenated names intact. The file joins double names with two hyphens, as in Saguenay--Lac-Saint-Jean, so splitting on a single hyphen would break them.' },
          { h3: '2. Parse the dates', p: 'The mdatcons column holds a constitution date as year, month and day. Turning each part into a number and storing a tuple lets Python sort the rows by date with one call. On our download 57 rows had no date, so the script counts blanks instead of crashing on them.' },
          { h3: '3. Read the extremes', p: 'Sorted, the earliest date in the file is 30 March 1846, recorded for La Prairie, and the latest is 1 January 2026, for Hébertville. Of the dated rows, 389 fall before 1900 and 160 fall in 2000 or later. Those are our counts of one column, not a history of the towns.' }
        ] },
        { kind: 'callout', h3: 'What the file cannot tell you', p: 'A row is a municipal organisation, not a measure of size or importance, so 150 rows for Montérégie and one for Laval says nothing about how many people live in either. A 2026 date usually marks a change of status or a merger rather than a new place, and the same dataset publishes a separate list of annexations and regroupings where a careful student checks.' },
        { kind: 'p', text: 'The designation column gives a second exercise: on our download it held 15 labels, led by Municipalité with 651 rows, Ville with 234, Paroisse with 128 and Territoire non organisé with 105. We leave the population and elected-officials columns out of every lesson on purpose. Source: Ministère des Affaires municipales et de l\'Habitation, Répertoire des municipalités du Québec, on Données Québec, under the Creative Commons Attribution 4.0 licence (CC BY 4.0), downloaded 22 October 2026 (<a class="cg-inline-link" href="https://www.donneesquebec.ca/recherche/dataset/repertoire-des-municipalites-du-quebec">dataset page</a>, <a class="cg-inline-link" href="https://www.donneesquebec.ca/licence/">licence</a>). The counts and the script are ours; the ministry does not endorse this page.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests from Quebec',
      h2: 'CEMC contests a Quebec student can write in 2026 to 2027',
      intro: 'Most school math and computing contests in Canada come from CEMC, the University of Waterloo\'s Centre for Education in Mathematics and Computing, and schools order them for their students. A few details matter more in Quebec than elsewhere: language, and the place of CÉGEP. Dates are CEMC\'s, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'CEMC contests with a Quebec angle, 2026 to 2027 (eligibility and dates as CEMC lists them)', head: ['Contest', 'Who CEMC says may write it', 'Language', 'CEMC date'], rows: [
          ['Beaver Computing Challenge', 'Three levels up to Grade 10; no programming needed', 'English only', '9 to 20 November 2026'],
          ['Canadian Senior Mathematics Contest (CSMC)', '&ldquo;Students in Grades 11 and 12 and CÉGEP students&rdquo;', 'English and French', 'Wednesday 18 November 2026'],
          ['Canadian Computing Competition (CCC)', 'Junior or Senior, chosen by programming skill', 'English and French', 'Wednesday 17 February 2027'],
          ['Euclid Mathematics Contest', '&ldquo;Students in their final year of secondary school or CÉGEP students&rdquo;', 'English and French', 'Tuesday 6 April 2027'],
          ['Gauss Mathematics Contests', 'Students in Grades 7 and 8, the age of Secondary I and II', 'English and French', '10 to 21 May 2027']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The CCC in French or English', p: 'CEMC states that the CCC is available in English and French, so a student at a French-language school can write the problems in French. CEMC lists the 2027 CCC for Wednesday 17 February 2027, written at school, online and individually, in C, C++, Python or Java.' },
          { h3: 'CÉGEP students count', p: 'Quebec\'s school ladder ends at Secondary V, and CEMC writes CÉGEP into its rules: the CSMC is open to Grades 11 and 12 and CÉGEP students, and the Euclid to final-year secondary or CÉGEP students. A first-year CÉGEP student is not too old for either.' },
          { h3: 'Through an institution', p: 'Individual registration is not possible: CEMC requires every participant to write through a school. A Quebec student whose own school does not order a contest can ask another nearby school to host them, which CEMC itself suggests.' }
        ] },
        { kind: 'p', text: 'Of the contests in the table, only the Beaver Computing Challenge is offered in English only, and CEMC lists its team contest, the CTMC, the same way; a French-language school will weigh that before ordering. For practice, ten years of past papers sit on CEMC\'s site at no cost and without an account, and we send students to <a class="cg-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests">the CEMC archive</a> while teaching from original problems we write ourselves. Our <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a> covers the two CCC levels, the <a class="cg-inline-link" href="/euclid-contest-preparation">Euclid page</a> the senior math contest, and the <a class="cg-inline-link" href="/canada-math-and-coding-contest-calendar">contest calendar</a> every date in one place. Modern Age Coders has no link to CEMC or to the University of Waterloo.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Time, language and phones',
      h2: 'Quebec clocks in 2026 to 2027, and the one corner that never changes',
      intro: 'Most of Quebec keeps Eastern time and changes clocks twice a year. Our teachers are in India, which never changes. The table shows how a Saturday class and a weekday class line up; the conversions are ours.',
      body: [
        { kind: 'table', caption: 'How Quebec clocks line up with India through the 2026 to 2027 school year. Offsets: IANA tz database, release 2026e. The example times and the conversions are ours, not fixed class times', head: ['Where and when', 'Offset', 'A 10 am Saturday class is, in India', 'A 5 pm weekday class is, in India'], rows: [
          ['Most of Quebec, to 1 November 2026', 'UTC-4', '7:30 pm Saturday', '2:30 am the next day'],
          ['Most of Quebec, 1 November 2026 to 14 March 2027', 'UTC-5', '8:30 pm Saturday', '3:30 am the next day'],
          ['Most of Quebec, from 14 March 2027', 'UTC-4', '7:30 pm Saturday', '2:30 am the next day'],
          ['Blanc-Sablon area, all year', 'UTC-4, no change', '7:30 pm Saturday', '2:30 am the next day']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The Blanc-Sablon exception', p: 'The time zone database files the Blanc-Sablon area on the Lower North Shore under a zone that stays at UTC-4 all year, an hour ahead of Montréal in winter and level with it in summer. Families there tell us their town and we schedule on its clock.' },
          { h3: 'A new area code in 2027', p: 'Quebec numbers use the 263, 354, 367, 418, 438, 450, 468, 514, 579, 581, 819 and 873 area codes, and all work in our form. The CRTC has also approved area code 273 for the 367, 418 and 581 region, effective 27 February 2027.' },
          { h3: 'French, English and our classes', p: 'The Charter of the French language opens with &ldquo;French is the official language of Québec.&rdquo; Our classes are in English. Programming keywords are English words in every school system, so a student at a French-language school writes the same code; our teachers allow time for the vocabulary around it.' }
        ] }
      ]
    },
    {
      id: 'path', tint: 'tint', eyebrow: 'From Elementary 1 to CÉGEP',
      h2: 'A coding path that follows the Quebec school ladder',
      intro: 'Quebec counts school years differently from the rest of Canada, so we plan in its own terms. Treat any age here as approximate; a student\'s starting point is settled in the free class.',
      body: [
        { kind: 'table', caption: 'Our plan for a Quebec student, matched to the stages of the QEP (our recommendation, not a ministry document)', head: ['Stage', 'What school asks', 'What we add in a live class'], rows: [
          ['Elementary 1 to 3', 'Use ICT in class; judge when a tool does not fit the task', 'Block coding with stories and puzzles the child explains aloud'],
          ['Elementary 4 to 6', 'Math with ICT, including simulating a random experiment; robots as a science topic', 'Typed Python, a dice or coin simulation the child writes, then a first game'],
          ['Secondary I to III', 'ICT across subjects; problem solving that starts by defining the problem', 'Functions, files and data, and the habit of writing the problem down before the code'],
          ['Secondary IV and V', 'A math option chosen for CÉGEP; the digital framework\'s programming element', 'Bigger projects, machine learning with checked data, and CCC or Euclid preparation'],
          ['CÉGEP and adult', 'College programs, including computer science', 'Support beside college programming courses, or a fresh start for adults']
        ] },
        { kind: 'p', text: 'One worked example from our Elementary 5 classes shows the method. The math program suggests a computer simulation of a random experiment, so the child first predicts how often two dice add up to 7, then writes a loop that rolls them ten thousand times and compares. A first guess is often off, and working out why the loop disagrees is the real lesson. This example is ours, written for our classes, not taken from a ministry document.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first blocks in Elementary 1 to CÉGEP-level programming',
    intro: 'Stages, not ages: the free class decides where a student starts.',
    cols: [
      { band: 'Elementary 1 to 3', h3: 'Blocks and sequences', p: 'Drag-and-drop programs, short puzzles and the first idea that order matters.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Elementary 4 to 6', h3: 'First typed code', p: 'Python with loops and conditions, plus plain-language AI literacy for curious children.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Secondary I to III', h3: 'Python and math', p: 'Real Python and math worked through code, the bridge between the classroom and projects.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Secondary IV to CÉGEP', h3: 'AI and contests', p: 'Machine learning on data the student can check, and CCC preparation for those who want it.', courses: ['ai-ml-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Quebec\'s framework treats AI as part of digital technology. So do we',
    intro: 'Being competent with AI means knowing what it is doing, and that starts with writing programs yourself.',
    p1: 'The 2026 framework puts AI inside digital technology instead of beside it, and it lists algorithmic bias next to machine learning among its themes. A student who has trained even a small model on data they cleaned can see where bias enters; a student who has only typed prompts usually cannot. That is the gap we teach into.',
    p2: 'Our students write the loop before they ask a tool to write it, then they check the tool\'s answer against their own. Teens meet AI tools under the age rules each tool sets, with a parent\'s permission where a tool requires it. Younger children learn how AI works through their own simple programs, without being handed tools meant for adults.',
    closer: 'The QEP asks children to identify the limitations of the technology in front of them; the surest way to learn that is to build some of it.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online across Quebec, from Gatineau to Gaspé',
    intro: 'Every class is live with a teacher, so a student in the Outaouais and one in the Bas-Saint-Laurent join the same lesson from home.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Across the province', p: 'A student in Montréal, Laval, Québec City, Gatineau, Sherbrooke, Trois-Rivières or Saguenay can join the same class, all on Eastern time apart from the Blanc-Sablon area.' },
      { h3: 'Group or one to one', p: 'A shared group of fifteen to twenty learners working at one stage, or a teacher of your own when a student needs to move faster or slower.' },
      { h3: 'Quebec school stages', p: 'Teachers plan in Elementary and Secondary years, not in Grades, and know when Secondary IV option choices and CÉGEP applications fall in the year.' },
      { h3: 'In English', p: 'Lessons are taught in English. Students from French-language schools are welcome; we slow down on new vocabulary and keep the code itself unchanged.' },
      { h3: 'Start free', p: 'The first class is a full lesson that ends with a suggested stage, course and time. Nothing is charged for it.' }
    ],
    spec: { title: 'No Quebec office', p: 'Modern Age Coders has no centre anywhere in Quebec and does not claim one. Our teachers work from India over a live video link; on the student\'s side, a laptop or desktop with a microphone, speakers and a reliable internet connection is enough.' }
  },

  fees: {
    h2: 'What classes cost for Quebec families',
    intro: 'Each line shows its own currency beside the figure, so nothing needs converting.',
    first: 'A complete live lesson at no charge, closing with a recommended stage, course and class time.',
    group: 'The monthly fee for a place in a batch of fifteen to twenty learners at the same stage.',
    private: 'The monthly fee for a teacher working with one student, at agreed times.',
    closer: 'A family in Quebec pays the same monthly fee as a family anywhere in Canada. Billing begins only once the free lesson is done and the course and time are settled; the pricing page explains missed classes and holidays.'
  },

  reviewsH2: 'Reviews from families and students on Google',

  book: {
    h2: 'Tell us about your Quebec student',
    intro: 'We pick the first task by stage: a sequence puzzle for Elementary 2, a dice simulation for Elementary 5, or the municipal register file for a Secondary IV student who wants real data.',
    success: 'Thank you. The team will contact you soon about a class for Quebec.'
  },

  faq: {
    h2: 'Quebec coding questions',
    intro: 'What Quebec parents and students ask us most.',
    items: [
      { q: 'Do you offer coding classes in Quebec?', a: 'Yes, online and live. There is no Modern Age Coders building in Quebec: a student logs in from home to a lesson led by a teacher, either one to one or in a group of fifteen to twenty.' },
      { q: 'Are the classes in English or in French?', a: 'In English. Students from French-language schools are welcome, and teachers give extra time to new vocabulary. Code keywords are English in every school system, so the programs themselves look the same.' },
      { q: 'Where does coding appear in the Quebec Education Program?', a: 'Across subjects rather than in one course. The QEP has a cross-curricular competency for using information and communications technologies, elementary math and science suggest ICT activities, and the Digital Competency Framework 2026 names computer programming and AI.' },
      { q: 'What is the Digital Competency Framework 2026?', a: 'A Ministère de l\'Éducation document that describes one digital competency in 12 dimensions, from preschool through higher education. Its second dimension includes computer science and AI concepts, and one element is developing or adapting a digital tool with programming skills.' },
      { q: 'Can a Quebec student write the Canadian Computing Competition?', a: 'Yes, through a school. CEMC offers the CCC in English and French and lists the 2027 contest for Wednesday 17 February 2027. Students cannot register on their own.' },
      { q: 'Can CEGEP students enter Waterloo math contests?', a: 'Some of them. CEMC opens the Canadian Senior Mathematics Contest to Grades 11 and 12 and CEGEP students, and the Euclid contest to students in their final year of secondary school or at CEGEP.' },
      { q: 'Do your classes count toward a Quebec diploma?', a: 'No. We do not grant Quebec credits, diplomas or report card marks. Our classes run alongside school and build skills; school marks stay the school\'s.' },
      { q: 'What time are classes for Quebec families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed on Eastern time, or on Blanc-Sablon time for families there.' },
      { q: 'Will my Quebec phone number work in the form?', a: 'Yes. Numbers with any Quebec area code work, including 418, 438, 450, 514, 581 and 819. Type the number as ten digits, since the form supplies the +1.' },
      { q: 'What age can my child start?', a: 'From about age 6, in Elementary 1, with block coding. Typed Python usually starts around Elementary 4 or 5, and adults are welcome too.' },
      { q: 'Can you help with the Secondary IV math option choice?', a: 'Yes, as math tutoring alongside school. Our Secondary IV page explains the three options and what each leads to; the school decides the placement.' },
      { q: 'Where are the fees?', a: 'Scroll to the fees block above the reviews. It lists three things: the free trial lesson, what a group place costs per month and what one-to-one teaching costs per month. Nothing is charged before the trial lesson is over.' }
    ]
  },

  cityLinks: {
    "eyebrow": "Quebec cities",
    "h2": "Our city pages in Quebec",
    "p": "7 pages for Quebec towns and cities, each written for the families there.",
    "links": [
      {
        "href": "/ai-and-python-classes-for-teens-in-gatineau",
        "label": "AI and Python classes for teens in Gatineau"
      },
      {
        "href": "/coding-and-ai-classes-in-montreal",
        "label": "Coding and AI classes in Montreal"
      },
      {
        "href": "/coding-and-ai-classes-in-quebec-city",
        "label": "Coding and AI classes in Quebec City"
      },
      {
        "href": "/best-coding-classes-for-kids-in-laval",
        "label": "Coding classes for kids in Laval"
      },
      {
        "href": "/math-tutor-montreal",
        "label": "Math tutor in Montreal"
      },
      {
        "href": "/online-coding-and-python-classes-in-sherbrooke",
        "label": "Online coding and Python classes in Sherbrooke"
      },
      {
        "href": "/vibe-coding-and-ai-agents-classes-in-longueuil",
        "label": "Vibe coding and AI agents classes in Longueuil"
      }
    ]
  },
  next: {
    eyebrow: 'More for Canada',
    h2: 'Other pages for Quebec students',
    html: 'For the national picture, start at <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a> or compare provinces in <a class="cg-inline-link" href="/canada-coding-curriculum-by-province">the coding curriculum by province</a>. Quebec math help is on <a class="cg-inline-link" href="/quebec-secondary-4-math-cst-ts-science">Secondary IV math options</a> and <a class="cg-inline-link" href="/quebec-secondary-5-math-tutor">Secondary V math</a>, and the step after Secondary V is on <a class="cg-inline-link" href="/cegep-computer-science-preparation">CEGEP computer science preparation</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Quebec and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/canada-coding-curriculum-by-province', label: 'Curriculum by province' },
    { href: '/quebec-secondary-4-math-cst-ts-science', label: 'Secondary IV math' },
    { href: '/quebec-secondary-5-math-tutor', label: 'Secondary V math' },
    { href: '/cegep-computer-science-preparation', label: 'CEGEP computer science' }
  ],

  personalityCss: `
.cg-root.cg-qux .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-qux .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.05; }
.cg-root.cg-qux .cg-capsule { border-top: 2px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-qux .cg-eyebrow { letter-spacing: 0.12em; font-weight: 650; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-qux .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-qux .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-qux .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-qux #register code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.6; padding: 0.9rem 1rem; border-left: 4px solid var(--cg-accent); }
.cg-root.cg-qux .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-qux .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Quebec, read 22 October 2026 from Québec.ca and the English QEP PDFs on cdn-contenu.quebec.ca: QEP elementary (Elementary 1 to 6) and secondary (Secondary I to V) pages; elementary cross-curricular Competency 6 (use ICT; identify the limitations of the technology); elementary Mathematics (ICT compulsory, teacher chooses activities; computer simulation of a random experiment); elementary Science and Technology (servomechanism and robots; robotics and automation); Secondary Cycle Two cross-curricular competencies (problem solving not reducible to an algorithm); Digital Competency Framework 2026 (12 dimensions, preschool through higher education, AI integrated, D2 computer science and AI, programming element, themes). Charter of the French language s.1. CEMC 2026-27 (CCC English and French; BCC English only; CSMC and Euclid open to CÉGEP students; through a school). Eastern time and Blanc-Sablon from IANA tzdb 2026e; area codes from CNAC files and CRTC 2025-269 (273 from 27 February 2027) via facts-geo.md.',
    localProject: 'Données Québec, Répertoire des municipalités du Québec (Ministère des Affaires municipales et de l\'Habitation, CC BY 4.0, updated daily), MUN.csv downloaded with curl on 22 October 2026 and counted with our script count_regions_dates.py (python -I): 1,281 rows; 17 administrative regions, Montérégie 150 down to Laval 1; designations Municipalité 651, Ville 234, Paroisse 128, Territoire non organisé 105 (15 labels); 57 rows with no constitution date; earliest 30 March 1846 (La Prairie), latest 1 January 2026 (Hébertville); 389 dates before 1900, 160 from 2000. Population and elected-official columns deliberately unused. Lesson family: parsing structured text fields and sorting tuples.',
    requiredMentions: [
      'Répertoire des municipalités du Québec',
      'Digital Competency Framework 2026',
      'computer simulation of a random experiment',
      'reduced to the application of an algorithm',
      'Servomechanism and robots',
      'Blanc-Sablon',
      'effective 27 February 2027',
      'Saguenay--Lac-Saint-Jean',
      '30 March 1846',
      'CCC is available in English and French'
    ],
    sources: [
      { claim: 'Québec Education Program, elementary: Elementary 1 to Elementary 6.', url: 'https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/quebec-education-program/elementary' },
      { claim: 'Québec Education Program, secondary: Secondary I to Secondary V, subject list.', url: 'https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/quebec-education-program/secondary' },
      { claim: 'QEP elementary cross-curricular competencies: Competency 6, ICT.', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/primaire/PFEQ-competences-transversales-primaire-AN.pdf' },
      { claim: 'QEP elementary Mathematics: ICT compulsory; computer simulation of a random experiment.', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/primaire/programmes/PFEQ-mathematique-primaire-AN.pdf' },
      { claim: 'QEP elementary Science and Technology: servomechanism and robots; robotics and automation.', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/primaire/programmes/PFEQ-science-technologie-primaire-AN.pdf' },
      { claim: 'QEP Secondary Cycle Two cross-curricular competencies: problem solving and algorithms.', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/secondaire/PFEQ-competences-transversales-deuxieme-cycle-secondaire-AN.pdf' },
      { claim: 'Ministère de l\'Éducation, Digital Competency Framework 2026 (English version).', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/education/Numerique/Cadre-reference-competence-num-AN.pdf' },
      { claim: 'Charter of the French language, s.1.', url: 'https://www.legisquebec.gouv.qc.ca/en/document/cs/C-11' },
      { claim: 'CEMC contests: languages, CSMC and Euclid eligibility, 2026-27 dates, through-a-school rule.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'Données Québec: Répertoire des municipalités du Québec dataset page (MAMH, CC BY 4.0, daily).', url: 'https://www.donneesquebec.ca/recherche/dataset/repertoire-des-municipalites-du-quebec' },
      { claim: 'Données Québec licence page (Creative Commons 4.0 variants; Attribution allows commercial use).', url: 'https://www.donneesquebec.ca/licence/' },
      { claim: 'Telecom Decision CRTC 2025-269: area code 273 effective 27 February 2027.', url: 'https://crtc.gc.ca/eng/archive/2025/2025-269.htm' },
      { claim: 'IANA tzdb: America/Toronto offsets; America/Blanc-Sablon linked to America/Puerto_Rico.', url: 'https://data.iana.org/time-zones/tzdb/backward' }
    ],
    rejectedClaims: [
      'Any Quebec population figure, including the mpopul column of MUN.csv: no population is printed.',
      'Names of mayors or councillors from the register (maire, con1 to con75): never used.',
      'Who is eligible for English-language schooling in Quebec: no primary source saved, left out.',
      'The 54-credit DES and other diploma rules: education.gouv.qc.ca did not resolve, left out.',
      'That Quebec has no computer science course at all: we say only that the secondary subject list names none and that named computer science programs are college programs.',
      'Detail on the three Secondary Cycle Two math options and CEGEP program prerequisites: covered on sibling pages and linked, not repeated.',
      'That a recent constitution date means a new town: refused; the page says it usually marks a change of status or a merger.',
      'CEMC fees: left out (currency-neutral page).',
      'Any affiliation with the Ministère de l\'Éducation, the MAMH, Données Québec, CEMC or the University of Waterloo.'
    ]
  }
};
