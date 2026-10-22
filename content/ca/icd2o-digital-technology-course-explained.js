'use strict';
// ICD2O explained (ag- school course door; Canada cluster Plan 2, row 6).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/icd2o-digital-technology-course-explained/;
// the three API responses and the PDF are byte-identical to the research copies in ca/src/ontario; facts-schools-contests.md rows 22 to 37):
//  - Ontario curriculum content API (ws.api.dcp.edu.gov.on.ca), the data behind the Ontario curriculum website:
//    * computer studies course list (api-computer-studies-courses.json): exactly ICS3U, ICD2O, ICS4U, ICS3C, ICS4C; ICD2O "Digital
//      Technology and Innovations in the Changing World", year issued 2023, Grade 10, prerequisites empty; ICS2O absent.
//    * ICD2O course record (api-icd2o-course.json): destination Open; description sentences "This course helps students develop
//      cutting-edge digital technology and computer programming skills that will support them in contributing to and leading the global
//      economic, scientific and societal innovations of tomorrow." and "Using critical thinking skills with a focus on digital citizenship,
//      students will investigate the appropriate use and development of the digital technologies that they encounter every day, as well
//      as the benefits and limitations of these technologies."
//    * ICD2O strands (api-icd2o-strands.json): strand titles A Computational Thinking and Making Connections, B Hardware, Software, and
//      Innovations, C Programming; overall expectation titles A1 Computational Thinking, Planning, and Purpose, A2 Digital Technology and
//      Society, A3 Applications, Careers, and Connections, B1 Understanding Hardware and Software, B2 Using Hardware and Software, B3
//      Cybersecurity and Data, B4 Innovations in Digital Technology, C1 Programming Concepts and Algorithms, C2 Writing Programs, C3
//      Modularity and Modification; quoted expectation text A1, A2.4, A2.5, A3.2, B2.1, B3.2, B4, B4.1, C1, C1.2, C2, C2.2, C2.3, C2.6,
//      C3.2, C3.4, C3.5; strand A note "it should be assessed and evaluated within these contexts".
//  - The Ontario Curriculum, Grades 10 to 12: Computer Studies (2008), www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf:
//    ICS2O "Introduction to Computer Studies", Grade 10, Open, prerequisite None; "This course introduces students to computer
//    programming."; "Students will plan and write simple computer programs by applying fundamental programming concepts, and learn to
//    create clear and maintainable internal documentation."; strands "A. Understanding Computers; B. Introduction to Programming; and
//    C. Computers and Society"; A3.2 "copy, move, delete, rename files; create shortcut"; A4 "demonstrate an understanding of home computer
//    networking concepts"; A5.1 "viruses, Trojan horses, worms, spyware, adware, malevolent macros"; B2.4 "guessing game,
//    rock-paper-scissors game, multiple-choice quiz, trivia game"; B2.7 "a solution developed in a programming language versus one
//    developed using a spreadsheet"; C1.1 "text-to-speech, speech-to-text"; Open course definition "They are not designed with the
//    specific requirements of universities, colleges, or the workplace in mind."
//  - ontario.ca/page/high-school-graduation-requirements (facts rows 42 to 48, saved in ca/src/ontario): computer studies is in Group 3
//    (Grade 9 in 2023 or earlier) and in the STEM-related course group (Grade 9 in 2024 or later).
//  - WCAG 2.1, www.w3.org/TR/WCAG21/ (fetched raw 22 October 2026, wcag21.html; W3C Recommendation dated 06 May 2025): contrast ratio
//    "(L1 + 0.05) / (L2 + 0.05)"; relative luminance "L = 0.2126 * R + 0.7152 * G + 0.0722 * B" with the 0.04045 threshold; Contrast
//    (Minimum) "a contrast ratio of at least 4.5:1", large text "at least 3:1"; Contrast (Enhanced) "at least 7:1".
// Our own material, labelled on the page: the colour contrast checker in Python 3.13 (run: 21.0, 4.48, 8.47, 1.07 with the verdicts
// shown), its modification to a four-level verdict (run on seven ratios), the ten practice questions and answers (programs run), the
// strand-by-strand reading, the ICD2O and ICS2O expectation comparison, the after-ICD2O table and the ladder.
// Lesson family: modify and extend (read existing code, predict, change one thing, test).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CHECK_PY = `# Can people read this text? A colour contrast checker (ours)
# Formula: WCAG 2.1 relative luminance and contrast ratio (w3.org/TR/WCAG21)
import csv
import io

PAIRS = """text,background
#000000,#FFFFFF
#777777,#FFFFFF
#30520C,#FBF8F2
#FFFF00,#FFFFFF
"""

def channel(value):
    """One 0 to 255 colour channel, turned into linear light."""
    c = value / 255
    if c <= 0.04045:
        return c / 12.92
    return ((c + 0.055) / 1.055) ** 2.4

def luminance(hex_colour):
    r = int(hex_colour[1:3], 16)
    g = int(hex_colour[3:5], 16)
    b = int(hex_colour[5:7], 16)
    return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b)

def contrast(a, b):
    lighter = max(luminance(a), luminance(b))
    darker = min(luminance(a), luminance(b))
    return (lighter + 0.05) / (darker + 0.05)

for row in csv.DictReader(io.StringIO(PAIRS)):
    ratio = contrast(row["text"], row["background"])
    if ratio >= 4.5:
        verdict = "passes for body text"
    else:
        if ratio >= 3:
            verdict = "large text only"
        else:
            verdict = "fails"
    print(row["text"], "on", row["background"], round(ratio, 2), verdict)`;

const VERDICT_PY = `# The modification: four levels instead of three (ours)

def verdict(ratio):
    if ratio >= 7:
        return "passes the enhanced level"
    elif ratio >= 4.5:
        return "passes for body text"
    elif ratio >= 3:
        return "large text only"
    return "fails"

for r in (21.0, 8.47, 4.48, 1.07, 7.0, 4.5, 3.0):
    print(r, verdict(r))`;

const Q1 = `print(7 + 3 * 2 ** 2)
print((7 + 3) * 2 ** 2)`;

const Q2 = `x = "4" + "2"
print(x, type(x).__name__)
print(int("4") + int("2"))`;

const Q3 = `temp = -12
if temp < 0:
    if temp < -10:
        print("Extreme cold warning")
    else:
        print("Below freezing")
else:
    print("Above freezing")`;

const Q4 = `word = "Winnipeg"
print(len(word), word[0], word[-1], word.upper())`;

const Q5 = `score = 0
for answer in ["b", "a", "c", "b"]:
    if answer == "b":
        score = score + 1
print(score)`;

const Q6 = `score = 7
print("Score: " + score)`;

const DCP_SRC = 'the Ontario curriculum website (dcp.edu.gov.on.ca), read through its public content service on 22 October 2026';
const PDF = '<a class="ag-inline-link" href="https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf" rel="noopener" target="_blank">The Ontario Curriculum, Grades 10 to 12: Computer Studies (2008)</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'ICD2O EXPLAINED', blurb: 'ICD2O, the Grade 10 digital technology course on the current Ontario curriculum site, strand by strand, set beside the 2008 ICS2O description.' },
  slug: 'icd2o-digital-technology-course-explained',
  code: 'idtc',
  accent: '#30520C',
  accentRationale: 'ICD2O explained, Canada: a deep moss green, #30520C, allocated for this row; 6.1 RGB units from the nearest site accent (#304C0B) and at least 14 from every other Canada accent, with contrast 8.47 on the paper #FBF8F2 and 7.29 on the deepest tint',
  pageType: 'market',
  market: CA,
  courseCodePage: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'ICD2O explained',
  title: 'ICD2O Explained: Ontario Grade 10 Computer Course, and ICS2O',
  description: 'ICD2O, Ontario\'s Grade 10 digital technology course, strand by strand from the curriculum, beside the 2008 ICS2O course, with a Python project and practice.',
  ogDescription: 'What ICD2O, Digital Technology and Innovations in the Changing World, asks Grade 10 students to learn, from the Ontario curriculum, and how it compares with the 2008 ICS2O course.',
  twitterDescription: 'ICD2O explained from the Ontario curriculum, beside ICS2O, with a Python project.',
  pageName: 'ICD2O Explained',
  webPageDescription: 'A guide for Ontario families to ICD2O, Digital Technology and Innovations in the Changing World, the Grade 10 open computer studies course listed on the current Ontario curriculum website, with its three strands, a comparison with the 2008 ICS2O course, an original Python project and ten practice questions.',
  courseDescription: 'Live online coding classes for Ontario Grade 10 students taking ICD2O, in Python, beside the school course, in a batch or one to one. No Ontario credit is granted.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Ontario', href: '/coding-classes-in-ontario' }],
  crumbLabel: 'ICD2O explained',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#record', label: 'The course' },
    { href: '#strands', label: 'Three strands' },
    { href: '#ics2o', label: 'ICD2O and ICS2O' },
    { href: '#project', label: 'A project' },
    { href: '#practice', label: 'Practice' }
  ],
  eyebrow: 'Ontario &middot; Grade 10 &middot; Computer studies, open course',
  h1: 'ICD2O explained: the Grade 10 digital technology course, and what happened to ICS2O',
  lede: 'Search for the Grade 10 computer course in Ontario and two codes come back: ICD2O and ICS2O. The current Ontario curriculum website lists one of them, ICD2O, Digital Technology and Innovations in the Changing World, issued in 2023. The other, ICS2O, Introduction to Computer Studies, is the Grade 10 course in the 2008 curriculum document. This page reads ICD2O from the ministry&rsquo;s own data, sets it beside ICS2O expectation by expectation, and builds one small project at its level. We teach coding beside the school course and do not grant Ontario credits, so the ICD2O credit itself comes from the school.',
  secondaryCta: { href: '#project', label: 'See the Grade 10 project' },
  wa: 'Hello Modern Age Coders, my Grade 10 student in Ontario is taking ICD2O and would like coding help beside the course. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students &middot; Grade 10 coding in Python',
  spec: [
    ['Course', 'ICD2O, Grade 10'],
    ['Type', 'Open'],
    ['Issued', '2023'],
    ['Prerequisite', 'None'],
    ['Strands', 'Three'],
    ['Older course', 'ICS2O, 2008'],
    ['Credit', 'From the school only'],
    ['Start', 'A free class']
  ],
  capsuleQ: 'In one paragraph',
  capsule: 'ICD2O, Digital Technology and Innovations in the Changing World, is the Grade 10 open computer studies course on Ontario&rsquo;s current curriculum website, issued 2023, no prerequisite. Students learn programming, hardware, cybersecurity and artificial intelligence. Modern Age Coders runs live online Grade 10 coding classes, one to one or in a group batch, with our course Python for teens.',

  picks: {
    eyebrow: 'Learn beside ICD2O',
    h2: 'Three courses for a Grade 10 student',
    lede: 'Python for teens matches the programming strand most closely. The companion course is the next step toward Grade 11, and cybersecurity takes one ICD2O theme further.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'IDTC / 01', title: 'Python for teens', note: 'Variables, conditions, loops, functions and libraries, the programming strand of ICD2O done properly.' },
      { course: 'ics3u-ics4u-computer-science-companion-course', code: 'IDTC / 02', title: 'Ontario Computer Science Companion', note: 'For Grade 10 students heading into ICS3U next year who want a running start.' },
      { course: 'cybersecurity-course-for-teens-ethical-defensive', code: 'IDTC / 03', title: 'Cybersecurity for teens', note: 'Safe data and security practices, the theme of ICD2O expectation B3, taken further.' }
    ]
  },

  sections: [
    {
      id: 'record', tint: 'tint', eyebrow: 'The course record',
      h2: 'What ICD2O is, from the Ontario curriculum website',
      lede: 'The Ontario curriculum website is built on a public content service, and its course record for ICD2O gives the basic facts directly. We read it on 22 October 2026. The table below shows each field, and the description that follows is quoted from the same record.',
      body: [
        { kind: 'table', caption: 'The ICD2O course record on the current Ontario curriculum website (read 22 October 2026)', head: ['Field', 'ICD2O'], rows: [
          ['Course code', 'ICD2O'],
          ['Name', 'Digital Technology and Innovations in the Changing World'],
          ['Year issued', '2023'],
          ['Grade', '10'],
          ['Destination', 'Open'],
          ['Prerequisite', 'None listed'],
          ['Part of', 'Computer studies, beside ICS3U, ICS3C, ICS4U and ICS4C'],
          ['Strands', 'A. Computational Thinking and Making Connections; B. Hardware, Software, and Innovations; C. Programming']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The description, in the ministry&rsquo;s words',
          left: [
            'The record opens with an ambitious sentence: &ldquo;This course helps students develop cutting-edge digital technology and computer programming skills that will support them in contributing to and leading the global economic, scientific and societal innovations of tomorrow.&rdquo;',
            'It names artificial intelligence and cybersecurity as topics, then ends on judgement rather than skill: &ldquo;Using critical thinking skills with a focus on digital citizenship, students will investigate the appropriate use and development of the digital technologies that they encounter every day, as well as the benefits and limitations of these technologies.&rdquo;'
          ],
          rightH3: 'What open means',
          right: [
            'Open is one of the three course types in Ontario computer studies. The 2008 document defines open courses as courses that broaden students&rsquo; knowledge and interests, and adds: &ldquo;They are not designed with the specific requirements of universities, colleges, or the workplace in mind.&rdquo;',
            'In practice, an open Grade 10 course is for every student, whatever their plans. A student heading for university computer science and a student who simply wants to understand the technology around them can sit in the same ICD2O class.'
          ] },
        { kind: 'source', html: 'Source: the ICD2O course record and the computer studies course list on ' + DCP_SRC + '; course types from ' + PDF + '. The ministry has no part in our classes and has not reviewed this page.' }
      ]
    },
    {
      id: 'strands', tint: 'deep', eyebrow: 'Three strands, ten overall expectations',
      h2: 'The three ICD2O strands and what each one asks for',
      lede: 'ICD2O has three strands and ten overall expectations. Each expectation has a short title of its own on the curriculum website, which makes the course easy to map. Strand A works differently from the other two, and that is worth understanding first.',
      body: [
        { kind: 'table', caption: 'ICD2O overall expectations by strand, titles and wording from the Ontario curriculum website (read 22 October 2026)', head: ['Code', 'Title on the website', 'The expectation, quoted'], rows: [
          ['A1', 'Computational Thinking, Planning, and Purpose', '&ldquo;apply computational thinking concepts and practices, and use various tools and processes to plan and develop computational artifacts for a wide variety of contexts, users, and purposes&rdquo;'],
          ['A2', 'Digital Technology and Society', 'Understanding the social, cultural, economic, environmental and ethical issues around digital technology (our summary of a long expectation)'],
          ['A3', 'Applications, Careers, and Connections', 'Real-world uses of digital technology and programming, including in industries and careers (our summary)'],
          ['B1', 'Understanding Hardware and Software', 'The functions and features of the hardware and software students meet every day (our summary)'],
          ['B2', 'Using Hardware and Software', 'Ways to use hardware, software and file management, and research practices for learning new tools (our summary)'],
          ['B3', 'Cybersecurity and Data', 'Safe and effective practices for data and cybersecurity in various contexts (our summary)'],
          ['B4', 'Innovations in Digital Technology', '&ldquo;investigate current and emerging innovations in digital technology, including automation and artificial intelligence, and assess their benefits and limitations&rdquo;'],
          ['C1', 'Programming Concepts and Algorithms', '&ldquo;explain fundamental programming concepts and algorithms&rdquo;'],
          ['C2', 'Writing Programs', '&ldquo;use fundamental programming concepts to write simple programs&rdquo;'],
          ['C3', 'Modularity and Modification', '&ldquo;demonstrate an understanding of program components and modules&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Strand A runs through the others',
          left: [
            'Strand A, Computational Thinking and Making Connections, is not taught as a separate unit. The website says its learning happens in the context of Strands B and C, and &ldquo;it should be assessed and evaluated within these contexts&rdquo;. So the planning, the ethics and the career links come up inside the hardware lessons and the programming projects.',
            'Two of its specific expectations stand out for a Grade 10 course. Students &ldquo;investigate how to identify and address bias involving digital technology&rdquo;, and they &ldquo;analyze accessibility issues involving digital technology, and identify measures that can improve accessibility&rdquo;. The project further down is built on the second.'
          ],
          rightH3: 'Strand B is everyday technology',
          right: [
            'Strand B is about the devices and software students already use. It asks them to &ldquo;use file management techniques, including those related to local and cloud storage, to organize, edit, and share files&rdquo;, and to &ldquo;apply safe and effective security practices, including practices to protect their privacy&rdquo;.',
            'Its last overall expectation, B4, is where artificial intelligence and automation sit. Students look at what the systems can do and at their limits, which is a thinking skill as much as a technical one.'
          ] },
        { kind: 'source', html: 'Source: the ICD2O strands, overall and specific expectations on ' + DCP_SRC + '. Our summaries are marked; quoted wording is exact.' }
      ]
    },
    {
      id: 'ics2o', tint: 'tint', eyebrow: 'Two Grade 10 courses, side by side',
      h2: 'ICD2O and ICS2O compared, expectation by expectation',
      lede: 'ICS2O, Introduction to Computer Studies, is the Grade 10 open course in the 2008 Computer Studies document. It does not appear in the computer studies course list on the current Ontario curriculum website, which shows ICD2O instead. We found no line in either source announcing a replacement, so this section reports each source and goes no further.',
      body: [
        { kind: 'table', caption: 'ICD2O (Ontario curriculum website, 2023) and ICS2O (2008 curriculum document), compared from each source (read 22 October 2026)', head: ['', 'ICD2O, 2023', 'ICS2O, 2008'], rows: [
          ['Where it is listed', 'The current Ontario curriculum website&rsquo;s computer studies list', 'The 2008 Computer Studies document; not on the current list'],
          ['Grade, type, prerequisite', 'Grade 10, Open, none', 'Grade 10, Open, none'],
          ['Opening of the description', 'Develop &ldquo;cutting-edge digital technology and computer programming skills&rdquo;', '&ldquo;This course introduces students to computer programming.&rdquo;'],
          ['Strands', 'Computational Thinking and Making Connections; Hardware, Software, and Innovations; Programming', '&ldquo;A. Understanding Computers; B. Introduction to Programming; and C. Computers and Society&rdquo;'],
          ['Artificial intelligence', 'Named in B4: &ldquo;including automation and artificial intelligence&rdquo;', 'Not named in the ICS2O expectations (our reading)'],
          ['Files and storage', '&ldquo;local and cloud storage&rdquo;', 'File management such as &ldquo;copy, move, delete, rename files; create shortcut&rdquo;'],
          ['Security', 'B3, Cybersecurity and Data, an overall expectation of its own', 'Malware such as &ldquo;viruses, Trojan horses, worms, spyware, adware, malevolent macros&rdquo;'],
          ['Networking', 'Networks and connectivity, with their benefits and limitations (B4.2)', '&ldquo;demonstrate an understanding of home computer networking concepts&rdquo;'],
          ['Sample programs', 'Programs that &ldquo;use and generate data involving various sources and formats&rdquo;', '&ldquo;guessing game, rock-paper-scissors game, multiple-choice quiz, trivia game&rdquo;'],
          ['Using other code', '&ldquo;write programs that make use of external or add-on modules or libraries&rdquo;', 'Comparing &ldquo;a solution developed in a programming language versus one developed using a spreadsheet&rdquo;'],
          ['Society', 'Bias and accessibility, as specific expectations', 'Adaptive technologies such as &ldquo;text-to-speech, speech-to-text&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the comparison shows',
          left: [
            'Both are Grade 10 open courses with no prerequisite, and both teach beginning programming. The programming core is similar: variables, decisions, loops, errors and documentation appear in each.',
            'The differences are in the world around the code. ICD2O adds artificial intelligence and automation, cloud storage, cybersecurity as a strand of its own, bias, and programs that work with outside data and libraries. ICS2O spent more of its time on the computer itself: hardware components, operating systems and home networking.'
          ],
          rightH3: 'What the sources do not say',
          right: [
            'We did not find a sentence in either source saying that ICD2O replaces ICS2O, or giving a date when one stopped and the other began. The website lists ICD2O and not ICS2O; the 2008 document describes ICS2O. That is all either says.',
            'If a school course calendar still lists ICS2O, the school is the right place to ask which curriculum the course is taught from. For a student, the practical point is the same either way: either course is a gentle first step before Grade 11 computer studies.'
          ] },
        { kind: 'source', html: 'Sources: the computer studies course list and ICD2O records on ' + DCP_SRC + '; ' + PDF + ', ICS2O course pages, read the same day.' }
      ]
    },
    {
      id: 'programming', tint: 'deep', eyebrow: 'Strand C, close up',
      h2: 'The programming strand: what a Grade 10 student actually writes',
      lede: 'Strand C is where ICD2O students write code. Its three overall expectations break into specific ones that read like a checklist for a first programming course. Here is the checklist, with our note on what each looks like in a lesson.',
      body: [
        { kind: 'table', caption: 'Selected ICD2O strand C specific expectations, quoted from the Ontario curriculum website, with our classroom reading', head: ['Code', 'The expectation', 'In a lesson (ours)'], rows: [
          ['C1.2', '&ldquo;describe simple algorithms that are encountered in everyday situations&rdquo;', 'Writing the steps of a familiar task, such as checking out a library book, before any code'],
          ['C2.3', '&ldquo;write programs that include single and nested conditional statements&rdquo;', 'An if inside an if, as in practice question 3'],
          ['C2.2', '&ldquo;write programs that use and generate data involving various sources and formats&rdquo;', 'Reading a small table of data and printing a result, as the project does'],
          ['C2.6', '&ldquo;interpret program errors and implement strategies to resolve them&rdquo;', 'Reading an error message line by line, as in practice question 6'],
          ['C3.2', '&ldquo;modify an existing program, or components of a program, to enable it to complete a different task&rdquo;', 'Changing a working program to do something new, as the project&rsquo;s second step does'],
          ['C3.4', '&ldquo;write programs that make use of external or add-on modules or libraries&rdquo;', 'Using import to bring in a library instead of writing everything by hand'],
          ['C3.5', '&ldquo;explain the components of a computational artifact they have created, including considerations for reuse by others&rdquo;', 'Explaining your own program to a classmate who will reuse it']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Which language?',
          left: [
            'The website&rsquo;s expectations do not name a programming language, and classes use different ones. Python suits a course like this because a beginner can read it almost like English, though a teacher may choose a block-based tool or another text language.',
            'We teach ICD2O students in Python unless their class uses something else. The ideas in strand C carry straight into Grade 11, where ICS3U and ICS3C students work in a text language.'
          ],
          rightH3: 'Where Grade 10 students get stuck',
          right: [
            'Not on syntax, usually. They get stuck on the step before: turning a vague task into exact steps. That is why we start every project with C1.2 thinking, the everyday algorithm written in plain words, and only then open the editor.',
            'The second sticking point is errors. A message such as TypeError looks like a wall to a beginner. Read slowly, it says exactly which line went wrong and why, and learning to read it is a skill the curriculum names directly.'
          ] }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'A Grade 10 project, ours',
      h2: 'One ICD2O-level project: a colour contrast checker in Python',
      lede: 'This project is ours, written for this page at the level of ICD2O. It joins three parts of the course: accessibility from strand A, data and a library from strand C, and a modification task at the end. It answers a real question: can people with low vision read this text on this background?',
      body: [
        { kind: 'ol', items: [
          '<b>Describe the everyday algorithm first.</b> To judge whether text is readable, compare how bright the text colour is with how bright the background is. The bigger the difference, the easier it is to read.',
          '<b>Find a trustworthy rule.</b> The Web Content Accessibility Guidelines, WCAG 2.1, published by the W3C, define brightness as relative luminance and give the contrast ratio formula, &ldquo;(L1 + 0.05) / (L2 + 0.05)&rdquo;, where L1 is the lighter colour.',
          '<b>Break it into small functions.</b> One turns a single colour channel into linear light, one works out the luminance of a colour, and one compares two colours. Each does one job and can be tested alone.',
          '<b>Read the data with a library.</b> The colour pairs are a small CSV table, read with Python&rsquo;s csv module. Using an existing module instead of splitting text by hand is what expectation C3.4 asks for.',
          '<b>Decide with nested conditions.</b> WCAG 2.1 asks for a contrast ratio of at least 4.5:1 for body text and at least 3:1 for large text. An if inside an else turns the ratio into a verdict.',
          '<b>Test with cases you can check.</b> Black on white must give 21, the highest ratio possible. A colour against itself would give 1. If those two come out wrong, nothing else can be trusted.'
        ] },
        { kind: 'code', label: 'Python &middot; colour contrast checker (ours)', lang: 'python', code: CHECK_PY, note: 'Output: #000000 on #FFFFFF 21.0 passes for body text; #777777 on #FFFFFF 4.48 large text only; #30520C on #FBF8F2 8.47 passes for body text; #FFFF00 on #FFFFFF 1.07 fails. The third pair is this page&rsquo;s own accent colour on its paper background.' },
        { kind: 'table', mt: true, caption: 'The checker&rsquo;s results (ours, Python 3.13; thresholds from WCAG 2.1)', head: ['Text colour', 'Background', 'Contrast ratio', 'Verdict'], numCols: [2], rows: [
          ['#000000 (black)', '#FFFFFF (white)', '21.0', 'Passes for body text'],
          ['#777777 (mid grey)', '#FFFFFF (white)', '4.48', 'Large text only'],
          ['#30520C (moss green)', '#FBF8F2 (paper)', '8.47', 'Passes for body text'],
          ['#FFFF00 (yellow)', '#FFFFFF (white)', '1.07', 'Fails']
        ] },
        { kind: 'p', mt: true, html: '<b>The modification.</b> WCAG 2.1 also has an enhanced level, which asks for &ldquo;a contrast ratio of at least 7:1&rdquo;. Changing the program to report four levels instead of three is a C3.2 task: modify an existing program so it completes a different task. The cleanest change replaces the nested if with one chain of elif tests, checked from the strictest level down.' },
        { kind: 'code', label: 'Python &middot; the four-level verdict (ours)', lang: 'python', code: VERDICT_PY, note: 'Output, in order: passes the enhanced level for 21.0, 8.47 and 7.0; large text only for 4.48 and 3.0; fails for 1.07; passes for body text for 4.5. The boundary values 7.0, 4.5 and 3.0 are there on purpose: at least means greater than or equal to.' },
        { kind: 'two', mt: true,
          leftH3: 'What the project teaches',
          left: [
            'Mid grey on white, 4.48, misses the body text line by a hair. A student who rounds to one decimal place too early would print 4.5 and wrongly pass it, which is a real lesson about when to round: at the end, never in the middle.',
            'The order of the elif tests also matters. Checking 3 before 7 would label black on white as large text only, because 21 is also at least 3. Strictest first is a rule worth remembering.'
          ],
          rightH3: 'Why accessibility is a good first project',
          right: [
            'It has a right answer that can be checked, it uses real arithmetic, and it matters to real people. ICD2O asks students to analyze accessibility issues and identify measures that can improve accessibility, and this program is one such measure.',
            'It also reuses well. Expectation C3.5 asks students to explain their program with &ldquo;considerations for reuse by others&rdquo;, and a classmate building a website can call the contrast function without reading how it works.'
          ] }
      ]
    },
    {
      id: 'ai', tint: 'deep', eyebrow: 'AI, automation and security',
      h2: 'Artificial intelligence and cybersecurity in ICD2O',
      lede: 'The ICD2O record names artificial intelligence and cybersecurity in its description, and strand B gives each its own expectation. Here is what the course asks, and how we handle the same topics in class.',
      body: [
        { kind: 'three', cells: [
          { h3: 'What AI can and cannot do', p: 'Expectation B4.1 asks students to &ldquo;investigate current innovations, including automation and artificial intelligence systems, and assess the impacts of these technologies on everyday life&rdquo;. The assessing is the point.' },
          { h3: 'Bias', p: 'Strand A asks students to identify and address bias involving digital technology. A Grade 10 student can already ask what data a system learned from, and who might be missing from it.' },
          { h3: 'Safe practices', p: 'B3 covers safe data and security habits: strong passwords, care with links, privacy settings. These are habits, so they are practised, not memorised.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Using AI without letting it think for you',
          left: [
            'Our teachers explain how AI systems work, in plain terms, and we let students see where they go wrong. What we do not do is let a chatbot write a student&rsquo;s program. A Grade 10 student who copies working code learns nothing that strand C can assess.',
            'AI chat tools set their own age rules in their terms of use, so families should read those terms before a teen signs up for one. We do not ask students to sign up for any.'
          ],
          rightH3: 'A cybersecurity habit to teach at home',
          right: [
            'If a message asks for a password through a link, do not use the link. Open the real site yourself, by typing its address or using a saved bookmark, and check there. That one habit protects against a very common trick, and it is practice question 8 below.',
            'It also links to strand C: once a student can write a program that checks input, they understand why a website that does not check its input is a security risk.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice, ours',
      h2: 'Ten ICD2O practice questions, with answers',
      lede: 'We wrote these ten for this page; none is from a school, a board or a ministry document. Questions 1 to 6 are short Python programs to read before running, and 7 to 10 ask you to explain or plan. Answers follow the questions.',
      body: [
        { kind: 'code', label: 'Question 1 &middot; order of operations', lang: 'python', code: Q1, note: 'What two numbers are printed?' },
        { kind: 'code', label: 'Question 2 &middot; types of data', lang: 'python', code: Q2, note: 'What is printed on each line, and why are they different?' },
        { kind: 'code', label: 'Question 3 &middot; nested conditions', lang: 'python', code: Q3, note: 'What is printed? What would print if temp were -5? And if it were exactly 0, is the message right?' },
        { kind: 'code', label: 'Question 4 &middot; text operators', lang: 'python', code: Q4, note: 'What four things are printed?' },
        { kind: 'code', label: 'Question 5 &middot; a loop that counts', lang: 'python', code: Q5, note: 'What is printed? Describe in words what the program counts.' },
        { kind: 'code', label: 'Question 6 &middot; read the error', lang: 'python', code: Q6, note: 'This stops with an error. What kind of error, what does the message mean, and how do you fix it?' },
        { kind: 'p', mt: true, html: '<b>Question 7 &middot; an everyday algorithm.</b> Write numbered steps for borrowing a book at a self-serve library kiosk. Include at least one decision (an if) and one repeat (a loop).' },
        { kind: 'p', html: '<b>Question 8 &middot; safe practice.</b> A message that looks like it comes from your school asks you to confirm your password through a link. List three things to do, in order.' },
        { kind: 'p', html: '<b>Question 9 &middot; benefits and limitations.</b> A school library starts using an automated system that recommends books from what a student borrowed before. Give one benefit and one limitation.' },
        { kind: 'p', html: '<b>Question 10 &middot; modify a program.</b> Change the contrast checker above so it reports four levels, including the WCAG enhanced level of 7:1. Which test must come first?' }
      ]
    },
    {
      id: 'answers', tint: 'deep', eyebrow: 'Answers, ours',
      h2: 'Answers to the ten questions',
      lede: 'Each answer explains the reasoning, which is what a teacher marks. All six programs were run in Python 3.13.',
      body: [
        { kind: 'ol', items: [
          '<b>19, then 40.</b> Powers come first, so 2 ** 2 is 4; then multiplication, 3 * 4 is 12; then 7 + 12 is 19. Brackets change the order: (7 + 3) is 10, times 4 is 40. This is the order of operations expectation C1.4 describes.',
          '<b>42 str, then 6.</b> With text, + joins the two pieces, so &quot;4&quot; + &quot;2&quot; is the text 42, and its type is str. After int() turns each into a number, + adds them. Same symbol, different job depending on the type of data.',
          '<b>Extreme cold warning.</b> -12 is below 0, and also below -10, so the inner if runs. For -5 it prints Below freezing. For exactly 0 it prints Above freezing, which is not quite right: water freezes at 0. Changing the first test to temp &lt;= 0 fixes it, and finding that edge is the real skill.',
          '<b>8 W g WINNIPEG.</b> len counts the letters, index 0 is the first letter, index -1 counts from the end, and upper() returns a capitalised copy. The original word is unchanged.',
          '<b>2.</b> The loop looks at each answer once and adds 1 when it is b. There are two b answers. The program counts how many answers match one choice, like marking a quiz against one correct option.',
          '<b>TypeError: can only concatenate str (not &quot;int&quot;) to str.</b> Python will not join text and a number with +. Turn the number into text first, with str(score), or use an f-string: f&quot;Score: {score}&quot;. Both print Score: 7.',
          '<b>One good answer:</b> 1. Scan your library card. 2. If the card is not accepted, ask staff and stop. 3. Scan a book. 4. Repeat step 3 until every book is scanned. 5. Choose a receipt option. 6. Take your card and books. The if is step 2 and the loop is step 4.',
          '<b>Do not use the link; check another way; report it.</b> Open the school site yourself by typing the address or using a bookmark, and see if any message is waiting there. Never type a password into a page reached from a message. Then tell a teacher or the school&rsquo;s technology staff, so others are warned.',
          '<b>Benefit:</b> students find books close to what they already enjoy, quickly. <b>Limitation:</b> it can keep suggesting the same kind of book, so a student sees less variety, and it knows nothing about what a student has read outside the library.',
          '<b>The 7:1 test must come first.</b> See the four-level verdict code in the project. Checking from the strictest level down means each ratio stops at the highest level it meets; checking 3 first would stop every passing ratio at large text only.'
        ] }
      ]
    },
    {
      id: 'next', tint: 'tint', eyebrow: 'After Grade 10',
      h2: 'After ICD2O: Grade 11 courses and the diploma',
      lede: 'ICD2O is an open course, and it is not a prerequisite for anything in the course table: ICS3U and ICS3C list no prerequisite at all. So what does it lead to? Mostly, to readiness.',
      body: [
        { kind: 'table', caption: 'Computer studies courses after Grade 10, with prerequisites as listed on the current Ontario curriculum website (read 22 October 2026)', head: ['Course', 'Grade and type', 'Prerequisite listed'], rows: [
          ['ICS3U, Introduction to Computer Science', 'Grade 11, university preparation', 'None'],
          ['ICS3C, Introduction to Computer Programming', 'Grade 11, college preparation', 'None'],
          ['ICS4U, Computer Science', 'Grade 12, university preparation', 'Introduction to Computer Science, Grade 11, University Preparation'],
          ['ICS4C, Computer Programming', 'Grade 12, college preparation', 'Introduction to Computer Programming, Grade 11, College Preparation']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why take ICD2O if nothing requires it',
          left: [
            'Because Grade 11 computer studies moves fast. The first unit of ICS3U or ICS3C assumes nothing, but by the middle of the course students are writing loops over arrays and functions with parameters. A student who met variables, conditions and loops in Grade 10 has room to think about the new ideas instead of the syntax.',
            'And because ICD2O covers things the Grade 11 courses do not dwell on, such as artificial intelligence, cloud storage and bias. Those are useful to every student, whatever they study next.'
          ],
          rightH3: 'ICD2O and the diploma',
          right: [
            'Ontario&rsquo;s graduation requirements page lists computer studies as one of the subjects in the STEM-related course group for students who started Grade 9 in 2024 or later, and in Group 3 for students who started in 2023 or earlier. ICD2O is a computer studies course on the curriculum website&rsquo;s list.',
            'That page also requires a credit in technological education for the 2024 cohort. Technological education is a separate subject with its own courses, and we found no source saying that ICD2O counts toward it, so ask the school before planning around that.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a Grade 10 student is',
    h2: 'Four stages of a first-year programmer',
    lede: 'Our own stages, from teaching students in their first programming course.',
    table: { caption: 'From first lines to Grade 11 ready (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Typist', 'Copies example code and runs it, and is pleased when it works'],
      ['2. Tinkerer', 'Changes one thing in a working program and predicts what will happen'],
      ['3. Planner', 'Writes the steps in words first, then turns them into code'],
      ['4. Grade 11 ready', 'Writes a short program from a blank file, reads its own errors and explains every line']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 2 is where real learning starts, and the modification task in the project is a stage 2 exercise. Ask your teen what they changed and what they expected.',
      'A Grade 10 student does not need to reach stage 4 by June. Getting there over the summer before Grade 11 is a fine plan.'
    ] },
    right: { h3: 'For students', ps: [
      'When something breaks, read the last line of the error message first. It names the kind of problem.',
      'Change one thing at a time. If you change three things and it works, you do not know which one fixed it.'
    ] }
  },

  catalogue: {
    eyebrow: 'All courses',
    h2: 'Nine more courses for Grade 9 and 10 students',
    lede: 'Live classes with one regular teacher, as a group or one to one.',
    bands: [
      { num: 'I', h3: 'First programming', sub: 'Grades 9 and 10', courses: [
        { code: 'IDTC / FST / 01', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive web pages, one feature at a time.' },
        { code: 'IDTC / FST / 02', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Real websites, readable and accessible.' },
        { code: 'IDTC / FST / 03', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'The guessing games of old, grown up.' }
      ] },
      { num: 'II', h3: 'Technology and society', sub: 'Teens', courses: [
        { code: 'IDTC / SOC / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'How AI systems learn, and where they fail.' },
        { code: 'IDTC / SOC / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Data from real sources, cleaned and charted.' },
        { code: 'IDTC / SOC / 03', slug: 'picoctf-cyberpatriot-cybersecurity-competition-prep-for-teens', title: 'Cybersecurity competitions', blurb: 'Security puzzles for students who like a challenge.' }
      ] },
      { num: 'III', h3: 'Toward Grade 11', sub: 'Grades 10 and 11', courses: [
        { code: 'IDTC / G11 / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'For Grade 11 classes that teach in Java.' },
        { code: 'IDTC / G11 / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic and step-by-step thinking.' },
        { code: 'IDTC / G11 / 03', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior preparation', blurb: 'A first programming contest, through school.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Class format',
    h2: 'Live classes for Grade 10 students',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, at a time agreed in Ontario time.' },
      { time: 'Weekends', l: 'Morning classes that fit around a Grade 10 week.' },
      { time: '1-on-1', l: 'For catching up after a missed unit or before a project.' }
    ],
    cells: [
      { h3: 'Python first', p: 'Unless the class uses another language.' },
      { h3: 'Words before code', p: 'Every program starts as plain steps.' },
      { h3: 'Real projects', p: 'Small programs that answer real questions.' },
      { h3: 'Errors explained', p: 'Messages read slowly, together.' },
      { h3: 'One teacher', p: 'The same teacher all term.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one student.' }
    ]
  },

  projectsH2: 'Work by our students',
  projectsLede: 'Projects from students who started where a Grade 10 student starts. See the <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Reviews families left on Google, exactly as written.',

  fees: {
    h2: 'Fees',
    lede: 'Begin with a free class. Afterwards, a monthly fee pays for eight live classes each month, shown below in your own currency; nothing locks you in, and you can stop when a month ends.',
    free: ['A free first class', 'Bring a current ICD2O task', 'No card asked for'],
    group: ['Fifteen to twenty per batch', 'One regular teacher', 'Your choice of batch', 'Paid by the month'],
    one: ['Private classes', 'Timed around the school week', 'Built from their own work']
  },

  faq: {
    eyebrow: 'Questions about Grade 10',
    h2: 'ICD2O and ICS2O: questions families ask',
    items: [
      { q: 'What is ICD2O?', a: 'ICD2O is Digital Technology and Innovations in the Changing World, a Grade 10 open computer studies course listed on the current Ontario curriculum website with the issue year 2023. It has three strands: Computational Thinking and Making Connections; Hardware, Software, and Innovations; and Programming.' },
      { q: 'What happened to ICS2O?', a: 'ICS2O, Introduction to Computer Studies, is the Grade 10 open course in the 2008 Computer Studies curriculum document. The current Ontario curriculum website lists ICD2O as its Grade 10 computer studies course and does not list ICS2O. Neither source we read says that one replaced the other.' },
      { q: 'What is the Grade 10 computer course in Ontario?', a: 'On the current Ontario curriculum website, the Grade 10 computer studies course is ICD2O, Digital Technology and Innovations in the Changing World. It is an open course with no prerequisite. Ask your school which Grade 10 courses it offers in a given year.' },
      { q: 'Does ICD2O have a prerequisite?', a: 'No. The course record on the Ontario curriculum website lists no prerequisite for ICD2O.' },
      { q: 'Do I need ICD2O to take ICS3U?', a: 'No. ICS3U and ICS3C list no prerequisite. ICD2O is still a useful first step, because Grade 11 computer studies moves quickly once arrays and functions arrive.' },
      { q: 'Does ICD2O include coding?', a: 'Yes. Strand C, Programming, asks students to explain programming concepts and algorithms, write simple programs with conditions and loops, interpret errors, write subprograms, use libraries and modify existing programs.' },
      { q: 'Does ICD2O teach artificial intelligence?', a: 'It asks students to investigate current and emerging innovations, including automation and artificial intelligence, and to assess their benefits and limitations. It also includes cybersecurity and data practices as an overall expectation of their own.' },
      { q: 'Which programming language does ICD2O use?', a: 'The expectations do not name a language, so it depends on the class. We teach in Python unless the student\'s class uses something else.' },
      { q: 'Does ICD2O count for the diploma?', a: 'Ontario\'s graduation requirements page lists computer studies in the STEM-related course group for students who started Grade 9 in 2024 or later. We found no source saying ICD2O counts as the technological education credit, so check with the school.' },
      { q: 'Do you grant the ICD2O credit?', a: 'No. We teach coding beside the school course and do not grant Ontario credits. The credit comes from the school or credit provider that teaches and evaluates ICD2O.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are set in your own Ontario time zone.' },
      { q: 'How much do classes cost?', a: 'The first class is free. After that, families pay a monthly fee and can stop when any month ends. The fees section on this page shows the current figure.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More to read',
    h2: 'Related pages',
    lede: 'For Ontario families planning Grade 10 and beyond.',
    items: [
      { href: '/ics3u-computer-science-help', label: 'ICS3U computer science help', p: 'The Grade 11 university course many ICD2O students take next.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Live coding classes across the province.' },
      { href: '/python-indentation-error-explained', label: 'Python IndentationError', p: 'The first error most Python beginners meet.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'A calm method for any error message.' },
      { href: '/ai-and-machine-learning-classes-in-canada', label: 'AI and machine learning in Canada', p: 'Classes for teens who want to go further with AI.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'A first programming contest for Grade 9 and 10 coders.' },
      { href: '/coding-classes-in-canada', label: 'Canada', p: 'Every page we have written for Canadian families.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us what your Grade 10 student is working on in ICD2O, or what they would like to build. The first class starts from that and ends with a small working program.',
    readFirst: 'Looking around first? The <a class="ag-inline-link" href="/courses/python-complete-masterclass-teens">Python for teens syllabus</a> shows the whole course, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a live lesson.',
    note: 'Classes run live on video, taught by our teachers in India, so there is no commute. From Ontario, WhatsApp is the quickest way to reach us.',
    formNote: 'You will not be asked for card details to book.'
  },

  footer: {
    cols: [
      { h4: 'Grade 10 coding', links: [
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for teens' },
        { href: '/ics3u-computer-science-help', label: 'ICS3U help' },
        { href: '/how-to-debug-code', label: 'How to debug code' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/ccc-junior-guide', label: 'CCC Junior guide' },
        { href: '/ai-and-machine-learning-classes-in-canada', label: 'AI classes in Canada' }
      ] }
    ],
    bottomRight: 'Read it, change one thing, test it'
  },

  personalityCss: `
.ag-root.ag-idtc .ag-hero h1 { letter-spacing: -0.01em; max-width: 24ch; }
.ag-root.ag-idtc .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-idtc .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-idtc .ag-table caption { text-align: left; }
.ag-root.ag-idtc .ag-table th { text-transform: uppercase; letter-spacing: 0.04em; }
.ag-root.ag-idtc .ag-steps li { margin-bottom: 0.5rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario curriculum content API, fetched raw 22 October 2026: the computer studies course list (ICS3U, ICD2O, ICS4U, ICS3C, ICS4C), the ICD2O course record (2023, Grade 10, Open, no prerequisite, description), the ICD2O strands with overall expectation titles and specific expectations. The Ontario Curriculum, Grades 10 to 12: Computer Studies (2008): ICS2O description, strands and expectations A3.2, A4, A5.1, B2.4, B2.7, C1.1; the open course definition. ontario.ca graduation requirements (computer studies in Group 3 and the STEM-related group). WCAG 2.1 contrast definitions.',
    localProject: 'Our colour contrast checker in Python (WCAG 2.1 relative luminance and contrast ratio, colour pairs read with the csv module, nested conditions), run and printing 21.0, 4.48, 8.47 and 1.07 with verdicts, then modified to a four-level verdict with boundary tests; ten original Grade 10 practice questions with run-checked answers; an ICD2O and ICS2O expectation comparison. Lesson family: modify and extend.',
    requiredMentions: ['cutting-edge digital technology and computer programming skills', 'Modularity and Modification', 'Computational Thinking, Planning, and Purpose', 'it should be assessed and evaluated within these contexts', 'including those related to local and cloud storage', 'guessing game, rock-paper-scissors game, multiple-choice quiz, trivia game', 'ICD2O and ICS2O compared, expectation by expectation', '(L1 + 0.05) / (L2 + 0.05)', '#777777 on #FFFFFF 4.48 large text only', 'passes the enhanced level', 'Extreme cold warning', 'WINNIPEG'],
    sources: [
      { claim: 'The current computer studies course list and the ICD2O course record (2023, Grade 10, Open, no prerequisite, description).', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code=ICD2O&depth=0' },
      { claim: 'ICD2O strands, overall expectations and specific expectations.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/boh4m___strands__copy__3f73159?depth=3' },
      { claim: 'ICS2O description, strands and expectations; course type definitions.', url: 'https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf' },
      { claim: 'Computer studies in Group 3 and the STEM-related course group; the technological education credit.', url: 'https://www.ontario.ca/page/high-school-graduation-requirements' },
      { claim: 'Contrast ratio and relative luminance formulas; 4.5:1, 3:1 and 7:1 thresholds.', url: 'https://www.w3.org/TR/WCAG21/' }
    ],
    rejectedClaims: [
      'That ICD2O replaced ICS2O, or a date for any change: neither source says so; the page sets out what each source says.',
      'That ICD2O meets the technological education credit: no source found; the page tells families to ask the school.',
      'That ICD2O is a prerequisite for ICS3U or ICS3C: both list no prerequisite.',
      'A required programming language for ICD2O: the expectations name none.',
      'Content from the ICD2O expectation on contributions by particular communities: left out under the cluster rule on identity content; the page summarises A2 instead.',
      'Recommending any AI chat tool to under-18 students: the page recommends none and points families to each tool\'s terms.',
      'Any mark or outcome from our classes: none promised.',
      'Any affiliation with the Ontario Ministry of Education or the W3C: none.'
    ]
  }
};
