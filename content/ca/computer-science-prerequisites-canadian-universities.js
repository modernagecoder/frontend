'use strict';
// Computer science prerequisites at Canadian universities (ag- admissions door; Canada cluster Plan 2, row 61).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, every one fetched raw with curl on 22 October 2026. Raw copies: keyword-research-2026-09/ca/src-pilots/
// computer-science-prerequisites-canadian-universities/ (McMaster, SFU), .../waterloo-computer-science-admission-requirements/
// (Waterloo), .../uoft-computer-science-admission-requirements/ (U of T), .../ubc-computer-science-admission-requirements/ (UBC).
//  - Waterloo, admission-requirements/computer-science/high-school/domestic/{ontario, british-columbia, alberta}: Ontario "Advanced
//    Functions 4U", "Calculus and Vectors 4U", "Any Grade 12 U English", "One other Grade 12 U course"; BC "English Studies 12 or
//    English First Peoples 12", "Pre-Calculus 12", "Calculus 12 or AP Calculus"; Alberta "Mathematics 30-1", "Mathematics 31",
//    "English Language Arts 30-1"; average "Individual selection from the low to mid-90s".
//  - U of T, future.utoronto.ca/undergraduate-programs/computer-science/: TAD "ENG4U / EAE4U", "MCV4U"; TMX adds "MHF4U", MDM4U
//    "Recommended"; TXC "ENG4U / EAE4U", "MCV4U", "MHF4U". UTM page "Mid to High 80s"; UTSC page "Low 90s overall".
//  - McMaster, future.mcmaster.ca/apply/requirements/ (the page's own admissions tool; it posts to the site's public admin-ajax
//    endpoint with action admissions_func and postid 1770, Computer Science; responses saved as mcmaster-ajax-<province>.html):
//    "Computer Science + B.A.Sc. (Bachelor of Applied Science)"; "OUAC Code:" "MC / MCC"; "Target Enrolment:" "200"; "Anticipated
//    Admission Range:" "min. 90%"; Ontario "Completion of High School Diploma plus six Grade 12 U/M level courses including:" "ENG4U"
//    "MCV4U"; BC "English (English Studies 12, English 12 or English 12 First Peoples)", "Calculus (Calculus 12 or AP Calculus)",
//    five Grade 12 academic courses; Alberta "English (English Language Arts 30-1)", "Calculus (Math 31 or AP Calculus)", five courses
//    "numbered 30 or 31"; "Application Deadline:" "January 15, 2027."; supplementary application deadline "January 28, 2027 at 11:59
//    p.m. ET"; "Students can opt into the co-op stream at any point before their final year."
//  - UBC, you.ubc.ca (reachable on 22 October 2026 with no certificate override; the requirements tool posts to the site's public
//    admin-ajax endpoint, action requirements_load_program, Science 530014, Vancouver; saved as ubc-ajax-science-<id>.json):
//    Science, Ontario "ENG4U (English)", "MHF4U (Advanced Functions)", "SBI4U (Biology), SCH4U (Chemistry), or SPH4U (Physics)",
//    Grade 11 "SCH3U (Chemistry)", "SPH3U (Physics)", "(may be waived with scores of 86% or higher in senior-level Math and
//    Chemistry)"; BC "English Studies 12 or English First Peoples 12", "Pre-Calculus 12", "Anatomy and Physiology 12, or Chemistry 12,
//    or Physics 12", Grade 11 "Chemistry 11", "Physics 11"; Alberta "English Language Arts 30-1", "Math 30-1 or Math 31 (5 credits)",
//    "Biology 30, Chemistry 30, or Physics 30", Grade 11 "Chemistry 20", "Physics 20". cs.ubc.ca/admission: "there is no direct
//    admission into the Computer Science program".
//  - SFU, sfu.ca/students/admission/programs/a-z/c/computing-science/requirements.html (BC high school): "No specific Grade 11 course
//    requirements"; "Grade 12 (at least 5 approved academic courses)"; one of "English Studies 12", "English First Peoples 12"; at
//    least one of "Anatomy and Physiology 12 (Biology 12)", "Chemistry 12", "Physics 12"; at least one of "Pre-Calculus 12",
//    "Calculus 12"; general "Have a minimum grade of 70% or higher in Language Arts 11, English 12, or equivalent".
//  - The Ontario Curriculum, Grades 11 and 12: Mathematics (revised 2007), edu.gov.on.ca/eng/curriculum/secondary/math1112currb.pdf
//    (saved here as math1112currb.pdf, text via pdftotext): "Advanced Functions (MHF4U) must be taken prior to or concurrently with
//    Calculus and Vectors (MCV4U)." The Ontario content API (ontario-api-mcv4u-mhf4u.json) gives MCV4U an empty prerequisite field,
//    so the PDF note is the source used.
// NOT READ, left out of every table: Queen's (queensu.ca returned 403; stopped), University of Alberta (ualberta.ca returned 403;
// stopped), University of Calgary (page fetched, but the requirements render as template placeholders such as "R1-9998" and an
// average label with no value), McGill and uOttawa (no program page found at the URLs tried; listing pages render by script), U of T
// Arts & Science admission category page (bot check). SFU pages for other provinces were generic and not used.
// Our own material, labelled on the page: the union tables ("to keep every listed option open"), the eight practice problems and
// answers, and the Python check (search_steps, nested_count, descend; Python 3.13 prints "Q1: 20 comparisons; log2 gives 20", "Q3: 4950
// and n(n-1)/2 gives 4950", "Q7: [0, 1.5, 2.25, 2.625, 2.8125]").
// Lesson family: why the math (logarithms, growth, sums, rates and vectors as they appear in computing).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CHECK_PY = `# Checking three of the practice answers by brute force (ours)
import math

def search_steps(n):
    """Worst-case comparisons for binary search on n sorted items."""
    steps, size = 0, n
    while size > 0:
        steps += 1
        size //= 2                 # each comparison keeps at most half
    return steps

def nested_count(n):
    count = 0
    for i in range(n):
        for j in range(i):         # j runs 0 .. i-1
            count += 1
    return count

def descend(x, rate, steps):
    """Gradient descent on f(x) = x**2 - 6x + 10, whose derivative is 2x - 6."""
    path = [x]
    for _ in range(steps):
        x = x - rate * (2 * x - 6)
        path.append(x)
    return path

print("Q1:", search_steps(1_000_000), "comparisons; log2 gives", math.ceil(math.log2(1_000_001)))
print("Q3:", nested_count(100), "and n(n-1)/2 gives", 100 * 99 // 2)
print("Q7:", descend(0, 0.25, 4))`;

const A = (href, label) => '<a class="ag-inline-link" href="' + href + '" rel="noopener" target="_blank">' + label + '</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'CS PREREQUISITES', blurb: 'Computer science prerequisites at Waterloo, U of T, McMaster, UBC and SFU in one set of tables, each row checked at the source, with eight math problems of our own.' },
  slug: 'computer-science-prerequisites-canadian-universities',
  code: 'cspc',
  accent: '#0C2152',
  accentRationale: 'CS prerequisites across Canada: a muted ink navy, #0C2152, allocated for this row; 6.1 RGB units from the nearest site accent (#122052) and at least 14 from the other Canada accents, contrast 14.62 on the paper #FBF8F2 and 12.58 on the deepest tint',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Computer science prerequisites at Canadian universities',
  title: 'Computer Science Prerequisites at Canadian Universities',
  description: 'Computer science prerequisites at five Canadian universities, checked at the source on 22 October 2026: Ontario, BC and Alberta lists, MCV4U, and why the math.',
  ogDescription: 'Which Grade 12 courses Waterloo, U of T, McMaster, UBC and SFU list for computer science, by province of the applicant, each row with its source and the date we read it, plus eight original math problems.',
  twitterDescription: 'CS prerequisites at Waterloo, U of T, McMaster, UBC and SFU, side by side, with sources.',
  pageName: 'Computer Science Prerequisites at Canadian Universities',
  webPageDescription: 'A comparison for Canadian high school students and parents of the Grade 12 courses that five universities list for computer science, built only from pages we read at the source on one date, with original practice problems on the math behind computing.',
  courseDescription: 'Live online Grade 12 math (Ontario MHF4U and MCV4U, western Pre-calculus 12 and Math 30-1) and computer science teaching for Canadian students heading toward a computing degree, in a batch or one to one.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'CS prerequisites in Canada',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#ontario', label: 'Ontario lists' },
    { href: '#mcv4u', label: 'Is MCV4U required?' },
    { href: '#west', label: 'BC and Alberta' },
    { href: '#union', label: 'Keep options open' },
    { href: '#practice', label: 'Why the math' }
  ],
  eyebrow: 'Five universities &middot; Three provinces of origin &middot; Checked 22 October 2026',
  h1: 'Computer science prerequisites at Canadian universities',
  lede: 'Every university writes its computer science requirements its own way, in its own course names, on its own website, and they change between admission cycles. We read five universities&rsquo; official pages on 22 October 2026 and set their lists side by side for students applying from Ontario, British Columbia and Alberta. Each row names its source. Universities we could not read are listed as not read rather than filled in from memory. Use the tables to plan a timetable, then confirm every line on the university&rsquo;s own site in the year of application.',
  secondaryCta: { href: '#mcv4u', label: 'Is MCV4U required?' },
  wa: 'Hello Modern Age Coders, my teen wants to study computer science at university in Canada and needs help with Grade 12 math and programming. Could we book a free first class?',
  heroNote: '10,000+ students since 2020 &middot; Grade 12 math in Ontario and western course names &middot; Taught live',
  spec: [
    ['Students', 'Grades 10 to 12, any province'],
    ['Ontario math', 'MHF4U and MCV4U'],
    ['Western math', 'Pre-calculus 12, Math 30-1 and 31'],
    ['Code', 'Python, Java or C++'],
    ['Group', 'Fifteen to twenty per batch'],
    ['Private', 'Available'],
    ['Times', 'Set in your own provincial clock'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'Checked at each university&rsquo;s own site on 22 October 2026: Waterloo, all three U of T campuses and McMaster listed Calculus and Vectors (MCV4U) for Ontario computer science applicants, and UBC Science listed Advanced Functions and a Grade 12 science instead; every list named English. Modern Age Coders teaches that math live online in Ontario Grade 12 University Math and its western counterpart, as a batch class or one to one.',

  picks: {
    eyebrow: 'The math every list asks for',
    h2: 'Three courses mapped to the requirement tables',
    lede: 'Grade 12 math appears in every list below, in Ontario names or western ones, and computer science background helps in every first year. One course for each.',
    items: [
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', code: 'CSP / 01', title: 'Ontario Grade 12 University Math', note: 'MHF4U and MCV4U, the two codes that recur across the Ontario rows, taught alongside the school course.' },
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', code: 'CSP / 02', title: 'Western Canada Grade 12 Math', note: 'Pre-calculus 12 and Math 30-1 for students in British Columbia, Alberta and the Prairies.' },
      { course: 'ics3u-ics4u-computer-science-companion-course', code: 'CSP / 03', title: 'Ontario Computer Science Companion', note: 'For students taking school computer science: design, tracing and testing habits first year relies on.' }
    ]
  },

  sections: [
    {
      id: 'ontario', tint: 'tint', eyebrow: 'Applying from Ontario',
      h2: 'Ontario high school applicants: what each program lists',
      lede: 'Six computer science routes, four universities, one date. The cells hold course codes or short labels; the university pages hold the full wording.',
      body: [
        { kind: 'table', caption: 'Courses listed for Ontario high school applicants to computer science (each university&rsquo;s own page, read 22 October 2026)', head: ['Program', 'English', 'MHF4U', 'MCV4U', 'Also listed', 'Source'], rows: [
          ['Waterloo, Computer Science', 'Any Grade 12 U English', 'Yes', 'Yes', 'One other Grade 12 U course; AIF', 'uwaterloo.ca requirements tool'],
          ['U of T St. George (TAD)', 'ENG4U / EAE4U', 'Not named', 'Yes', 'Supplemental application', 'future.utoronto.ca'],
          ['U of T Mississauga (TMX)', 'ENG4U / EAE4U', 'Yes', 'Yes', 'MDM4U recommended', 'future.utoronto.ca'],
          ['U of T Scarborough (TXC)', 'ENG4U / EAE4U', 'Yes', 'Yes', 'None', 'future.utoronto.ca'],
          ['McMaster, Computer Science (B.A.Sc.)', 'ENG4U', 'Not named', 'Yes', 'OUAC code MC / MCC; a supplementary application deadline of January 28, 2027', 'future.mcmaster.ca requirements tool'],
          ['UBC Vancouver, Science (entry route to CS)', 'ENG4U', 'Yes', 'Not named', 'One of SBI4U, SCH4U or SPH4U; Grade 11 SCH3U and SPH3U', 'you.ubc.ca requirements tool']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How to read Not named',
          left: [
            'Not named means the course does not appear in that university&rsquo;s published list of required courses for that program on that day. It does not mean the university considers the course unimportant, and it does not mean a student can skip it. Ontario&rsquo;s own math curriculum (revised 2007) says &ldquo;Advanced Functions (MHF4U) must be taken prior to or concurrently with Calculus and Vectors (MCV4U).&rdquo; So any student with MCV4U on the transcript has MHF4U too, whichever course a university chooses to name.',
            'Every row also sits inside a general rule about how many Grade 12 U or M courses a student needs. Waterloo and McMaster both say six, and the central U of T page asks for six 4U or M subjects with English among them.'
          ],
          rightH3: 'The UBC row is a different kind of entry',
          right: [
            'UBC&rsquo;s computer science department states it directly: &ldquo;there is no direct admission into the Computer Science program&rdquo;. Students first join a faculty with computer science specializations, such as Science, and seek the computer science specialization later. The row above is therefore UBC&rsquo;s Science list for Ontario students, the usual first step toward computer science there.',
            'Hence the science courses, at both Grade 12 and Grade 11 level, in that row. UBC says the Grade 11 courses &ldquo;may be waived with scores of 86% or higher in senior-level Math and Chemistry&rdquo;.'
          ] },
        { kind: 'source', html: 'Sources, all read 22 October 2026: ' + A('https://uwaterloo.ca/future-students/admissions/admission-requirements/computer-science/high-school/domestic/ontario', 'Waterloo, Computer Science requirements for Ontario') + '; ' + A('https://future.utoronto.ca/undergraduate-programs/computer-science/', 'U of T Future Students, Computer Science') + '; ' + A('https://future.mcmaster.ca/apply/requirements/', 'McMaster admission requirements tool') + ' (Computer Science, Ontario); ' + A('https://you.ubc.ca/applying-ubc/requirements/canadian-high-schools/', 'UBC requirements for Canadian high schools') + ' (Vancouver, Ontario, Science); ' + A('https://www.cs.ubc.ca/admission', 'UBC Computer Science, admission processes') + '. We have no affiliation with any of these universities.' }
      ]
    },
    {
      id: 'mcv4u', tint: 'deep', eyebrow: 'The calculus question',
      h2: 'Is MCV4U required for computer science?',
      lede: 'It is one of the most searched questions about Ontario computer science admission, and the honest answer depends on the program. Here is what each list we read said about Calculus and Vectors.',
      body: [
        { kind: 'table', caption: 'Calculus and Vectors (MCV4U) in the Ontario lists above (read 22 October 2026)', head: ['Program', 'MCV4U in the published list?', 'How it is written'], rows: [
          ['Waterloo, Computer Science', 'Yes', 'Calculus and Vectors 4U'],
          ['U of T, all three campuses', 'Yes', 'Calculus &amp; Vectors, MCV4U'],
          ['McMaster, Computer Science', 'Yes', 'MCV4U'],
          ['UBC Vancouver, Science', 'No', 'The list names MHF4U and a Grade 12 science instead']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Our reading of the table',
          left: [
            'Five of the six Ontario routes we read name MCV4U outright. A student who leaves it off the Grade 12 timetable closes those five doors at once, and keeps only the UBC Science route among the ones we checked. For a student who is serious about computer science and still choosing universities, that makes MCV4U the course to protect.',
            'This is our planning inference from the published lists, not any university&rsquo;s advice. Universities we could not read may differ, and any of these lists can change.'
          ],
          rightH3: 'Why calculus sits under computer science',
          right: [
            'Waterloo&rsquo;s first-year computer science schedule contains two calculus courses, and U of T&rsquo;s and McMaster&rsquo;s lists treat MCV4U as a prerequisite rather than a recommendation. Rates of change, limits and vectors run through algorithms, graphics, machine learning and simulation.',
            'The practice problems further down show where each Grade 12 topic reappears in computing, with worked answers. They are ours, written to make the link concrete rather than to imitate any school&rsquo;s exam.'
          ] }
      ]
    },
    {
      id: 'west', tint: 'tint', eyebrow: 'Applying from BC or Alberta',
      h2: 'British Columbia and Alberta applicants: the lists in western course names',
      lede: 'Universities translate their requirements into each province&rsquo;s courses. We read the British Columbia and Alberta versions for the programs whose tools offered them.',
      body: [
        { kind: 'table', caption: 'Courses listed for British Columbia high school applicants (read 22 October 2026)', head: ['Program', 'English', 'Math', 'Science', 'Grade 11', 'Source'], rows: [
          ['Waterloo, Computer Science', 'English Studies 12 or English First Peoples 12', 'Pre-Calculus 12; Calculus 12 or AP Calculus', 'None listed', 'None listed', 'uwaterloo.ca'],
          ['McMaster, Computer Science', 'English Studies 12, English 12 or English 12 First Peoples', 'Calculus 12 or AP Calculus', 'None listed', 'None listed', 'future.mcmaster.ca'],
          ['UBC Vancouver, Science', 'English Studies 12 or English First Peoples 12', 'Pre-Calculus 12', 'Anatomy and Physiology 12, Chemistry 12 or Physics 12', 'Chemistry 11; Physics 11', 'you.ubc.ca'],
          ['SFU, Computing Science', 'English Studies 12 or English First Peoples 12', 'At least one of Pre-Calculus 12 or Calculus 12', 'At least one of Anatomy and Physiology 12 (Biology 12), Chemistry 12, Physics 12', 'No specific Grade 11 course requirements', 'sfu.ca']
        ] },
        { kind: 'table', mt: true, caption: 'Courses listed for Alberta high school applicants (read 22 October 2026)', head: ['Program', 'English', 'Math', 'Science', 'Grade 11', 'Source'], rows: [
          ['Waterloo, Computer Science', 'English Language Arts 30-1', 'Mathematics 30-1; Mathematics 31', 'None listed', 'None listed', 'uwaterloo.ca'],
          ['McMaster, Computer Science', 'English Language Arts 30-1', 'Math 31 or AP Calculus', 'None listed', 'None listed', 'future.mcmaster.ca'],
          ['UBC Vancouver, Science', 'English Language Arts 30-1', 'Math 30-1 or Math 31 (5 credits)', 'Biology 30, Chemistry 30, or Physics 30', 'Chemistry 20; Physics 20', 'you.ubc.ca']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What changes when you cross the border',
          left: [
            'For students in British Columbia and Alberta the calculus course is the swing factor. Waterloo asks for Calculus 12 or AP Calculus in British Columbia and Mathematics 31 in Alberta; McMaster asks for the same calculus courses; UBC Science and SFU accept Pre-Calculus 12 (SFU: Pre-Calculus 12 or Calculus 12) without a calculus course on their lists.',
            'A Grade 12 science appears only on the UBC and SFU lists, because both route computer science through a science-based admission. Waterloo and McMaster list none.'
          ],
          rightH3: 'Course-count rules in the west',
          right: [
            'Waterloo wants six Grade 12 academic courses from British Columbia applicants and five academic courses, each at 30 or 31 level, from Alberta applicants. McMaster asks for five in each province, and in British Columbia excludes most applied design, career, physical education and faith-based courses. SFU asks for at least five approved academic Grade 12 courses.',
            'SFU also sets a general rule for every program: a minimum of 70 per cent in Language Arts 11, English 12 or an equivalent. UBC&rsquo;s general requirements for British Columbia include a 70 per cent minimum in senior English.'
          ] },
        { kind: 'source', html: 'Sources, read 22 October 2026: Waterloo&rsquo;s requirements tool, Computer Science, ' + A('https://uwaterloo.ca/future-students/admissions/admission-requirements/computer-science/high-school/domestic/british-columbia', 'British Columbia') + ' and ' + A('https://uwaterloo.ca/future-students/admissions/admission-requirements/computer-science/high-school/domestic/alberta', 'Alberta') + '; McMaster&rsquo;s requirements tool, Computer Science, both provinces; UBC&rsquo;s requirements tool, Vancouver, Science, both provinces; ' + A('https://www.sfu.ca/students/admission/programs/a-z/c/computing-science/requirements.html', 'SFU Computing Science requirements') + ' (BC high school). SFU&rsquo;s Alberta page was not read.' }
      ]
    },
    {
      id: 'notread', tint: 'tint', eyebrow: 'What is missing, and why',
      h2: 'Universities we could not read, and therefore left out',
      lede: 'A comparison is only as honest as its gaps. These universities are absent from the tables because we could not read their requirement pages at the source on 22 October 2026, not because their requirements are unimportant or similar to the others.',
      body: [
        { kind: 'table', caption: 'Sources attempted and not used (22 October 2026)', head: ['University', 'What happened', 'What families should do'], rows: [
          ['Queen&rsquo;s University', 'The site returned an access-denied response (403); we stopped there', 'Read the Computing program requirements on queensu.ca'],
          ['University of Alberta', 'The site returned an access-denied response (403); we stopped there', 'Read the Computing Science requirements on ualberta.ca'],
          ['University of Calgary', 'The page loaded, but its requirement fields showed template placeholders rather than courses', 'Open the Computer Science page in a browser, where the list renders'],
          ['McGill University', 'No program page found at the addresses tried; the listing builds itself in the browser', 'Use McGill&rsquo;s undergraduate admissions program finder'],
          ['University of Ottawa', 'No program page found at the addresses tried', 'Use uOttawa&rsquo;s undergraduate program pages'],
          ['U of T Arts &amp; Science page', 'A bot-verification screen; not retried', 'The central U of T page in the Ontario table was read instead']
        ] },
        { kind: 'p', mt: true, html: 'We do not fill a gap from memory or from third-party summaries, because a requirement list quoted wrongly does real damage to a student&rsquo;s timetable. If your teen is considering one of these universities, its own page is the only source to plan from.' }
      ]
    },
    {
      id: 'union', tint: 'deep', eyebrow: 'A planning table, ours',
      h2: 'To keep every listed option open: the combined course list',
      lede: 'Undecided students often ask a simpler question: which courses keep all of these doors open at once? This table is our answer, built by combining the lists above. It is a planning aid, not any university&rsquo;s requirement.',
      body: [
        { kind: 'table', caption: 'Courses that together cover every list in this page&rsquo;s tables, by province of the applicant (ours, from the 22 October 2026 lists)', head: ['Applying from', 'Courses that cover every list we read', 'Why each is there'], rows: [
          ['Ontario', 'ENG4U; MHF4U; MCV4U; one of SBI4U, SCH4U or SPH4U; SCH3U and SPH3U in Grade 11; MDM4U if room allows', 'ENG4U satisfies every English line; MCV4U for Waterloo, U of T and McMaster; MHF4U for Waterloo, Mississauga, Scarborough and UBC, and before MCV4U under the Ontario curriculum; the sciences for UBC Science; MDM4U is a Mississauga recommendation, not a requirement'],
          ['British Columbia', 'English Studies 12; Pre-Calculus 12; Calculus 12; one of Anatomy and Physiology 12, Chemistry 12 or Physics 12; Chemistry 11 and Physics 11', 'English Studies 12 is named on all four lists; Calculus 12 for Waterloo and McMaster; Pre-Calculus 12 for Waterloo and UBC; a Grade 12 science for UBC and SFU; the Grade 11 sciences for UBC'],
          ['Alberta', 'English Language Arts 30-1; Mathematics 30-1; Mathematics 31; one of Biology 30, Chemistry 30 or Physics 30; Chemistry 20 and Physics 20', 'English Language Arts 30-1 is on all three lists; Math 31 for Waterloo and McMaster; Math 30-1 for Waterloo; a 30-level science and the 20-level sciences for UBC']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How we built it',
          left: [
            'For each province we took every course or course group that any list named, then removed duplicates. Where a list offered a choice, such as one of three sciences, we kept the choice. The result is the smallest set we could find that covers every line in this page&rsquo;s tables for that province.',
            'It is bigger than any single university&rsquo;s list, which is the point: it is the cost of not deciding yet. A student who settles on two universities can drop whatever only the others needed.'
          ],
          rightH3: 'What it does not cover',
          right: [
            'It ignores averages, supplementary forms and the total number of courses each university counts, all of which matter. It also covers only the universities we could read. Add each new university&rsquo;s list to it by hand before relying on it.',
            'A computer science course appears in none of the required lists we read, so it is not in the combined list. It still belongs in a future computer science student&rsquo;s timetable where the school offers it, for the skill it builds rather than for admission.'
          ] }
      ]
    },
    {
      id: 'ranges', tint: 'tint', eyebrow: 'Published ranges',
      h2: 'Averages, as the universities publish them',
      lede: 'Several of the pages we read print an average or range. We list the exact words, without converting, ranking or interpreting them.',
      body: [
        { kind: 'table', caption: 'Published averages and ranges for computer science routes (read 22 October 2026)', head: ['Program', 'Label used', 'Wording'], rows: [
          ['Waterloo, Computer Science', 'Admission average', 'Individual selection from the low to mid-90s'],
          ['McMaster, Computer Science', 'Anticipated Admission Range', 'min. 90%'],
          ['U of T Mississauga', 'Competitive Average', 'Mid to High 80s'],
          ['U of T Scarborough', 'Approximate grade requirements', 'Low 90s overall; High 90s overall (co-op)'],
          ['UBC, SFU, U of T St. George', 'No range on the pages we read', 'Not stated']
        ] },
        { kind: 'p', mt: true, html: 'Each label means something slightly different: an individual-selection range, an anticipated range, a competitive average, an approximate requirement. None is a promise in either direction, several programs also read supplementary forms, and every one can move from year to year. Nobody here will turn a range into a forecast for your teen, and we never promise an admission result.' }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice, ours',
      h2: 'Why computer science asks for this math: eight problems',
      lede: 'These eight problems are ours, written for this page. Each one takes a Grade 12 topic from the lists above and shows where it reappears in computing. Questions 1 to 3 use Advanced Functions and Pre-calculus ideas; 4 to 8 use Calculus and Vectors. Try them before reading the answers.',
      body: [
        { kind: 'ol', items: [
          '<b>Logarithms and search.</b> A sorted list holds 1,000,000 names. Binary search checks the middle item and keeps only the half that can still contain the target. What is the largest number of comparisons it can need?',
          '<b>Exponential growth.</b> A brute-force program&rsquo;s running time doubles each time the input grows by one item. With 30 items it takes 1 second. Roughly how long does it take with 40 items?',
          '<b>Sums and nested loops.</b> A loop runs i from 0 to n &minus; 1, and inside it a second loop runs j from 0 to i &minus; 1, adding 1 to a counter each time. Find a formula for the final count, then evaluate it for n = 100.',
          '<b>Rates of change from data.</b> A sorting routine takes 0.02 seconds for 1,000 items and 0.08 seconds for 2,000. Assume time is k times n squared. Find k and predict the time for 5,000 items.',
          '<b>Vectors and motion.</b> A game character starts at (2, 3) and moves with velocity (4, &minus;1) units per second. Where is it after 2.5 seconds, and what is its speed?',
          '<b>The dot product.</b> A wall in a game runs along the direction (3, 4). Is the direction (4, &minus;3) perpendicular to it? Why would a game engine care?',
          '<b>Derivatives and learning.</b> A model&rsquo;s error is f(x) = x&sup2; &minus; 6x + 10. Starting at x = 0, gradient descent repeatedly replaces x with x &minus; 0.25 f&prime;(x). Give the first two new values of x, and the value the process approaches.',
          '<b>Limits and approximation.</b> Without a calculator, estimate the slope of f(x) = x&sup3; at x = 2 using the points x = 2 and x = 2.1. Compare it with the exact derivative.'
        ] }
      ]
    },
    {
      id: 'answers', tint: 'tint', eyebrow: 'Answers, ours',
      h2: 'Worked answers to the eight problems',
      lede: 'Each answer shows the reasoning, because the reasoning is what first-year courses build on. Three answers are also checked by a short program at the end.',
      body: [
        { kind: 'ol', items: [
          '<b>20 comparisons.</b> After k comparisons at most n divided by 2 to the k items remain, so we need the smallest k with 2 to the k at least 1,000,001. Since 2 to the 19 is 524,288 and 2 to the 20 is 1,048,576, k is 20. Twenty steps for a million items is why logarithms matter in computing.',
          '<b>About 17 minutes.</b> Ten more items means ten doublings: 2 to the 10 is 1,024, so 1,024 seconds, a little over 17 minutes. Ten more after that would be about 12 days. Exponential algorithms stop being usable very quickly.',
          '<b>n(n &minus; 1)/2, so 4,950.</b> The inner loop runs 0 times, then 1, then 2, up to n &minus; 1 times: an arithmetic series whose sum is n(n &minus; 1)/2. For n = 100 that is 100 times 99 divided by 2, or 4,950. Doubling n roughly quadruples the work.',
          '<b>k = 0.00000002, and 0.5 seconds.</b> From 0.02 = k(1,000)&sup2;, k = 2 &times; 10 to the &minus;8. The second measurement agrees: k(2,000)&sup2; = 0.08. Then k(5,000)&sup2; = 2 &times; 10 to the &minus;8 &times; 25,000,000 = 0.5 seconds. Checking a model against a second data point before predicting is the habit to keep.',
          '<b>(12, 0.5), speed about 4.12.</b> Position is start plus time times velocity: (2 + 4 &times; 2.5, 3 &minus; 1 &times; 2.5) = (12, 0.5). Speed is the length of the velocity vector, the square root of 16 + 1, which is the square root of 17, about 4.12 units per second.',
          '<b>Yes, perpendicular.</b> The dot product is 3 &times; 4 + 4 &times; (&minus;3) = 12 &minus; 12 = 0, so the directions are at right angles. A game engine uses exactly this to find the wall&rsquo;s normal, the direction a ball bounces off along.',
          '<b>x = 1.5, then 2.25, approaching 3.</b> The derivative is 2x &minus; 6. From 0: 0 &minus; 0.25 &times; (&minus;6) = 1.5. Then 1.5 &minus; 0.25 &times; (&minus;3) = 2.25. Each step halves the distance to 3, where the derivative is zero and the error is smallest. This is the idea behind how many machine learning models are trained.',
          '<b>About 12.61, against an exact 12.</b> The secant slope is (2.1&sup3; &minus; 2&sup3;)/0.1 = (9.261 &minus; 8)/0.1 = 12.61. The derivative 3x&sup2; at 2 is 12. Shrinking the gap to 0.01 gives 12.0601, closer still: the limit idea computers use when they estimate derivatives numerically.'
        ] },
        { kind: 'code', label: 'Python &middot; checking answers 1, 3 and 7 (ours)', lang: 'python', code: CHECK_PY, note: 'Output: Q1: 20 comparisons; log2 gives 20. Q3: 4950 and n(n-1)/2 gives 4950. Q7: [0, 1.5, 2.25, 2.625, 2.8125]. The brute-force counts agree with the formulas, which is the point of checking a formula with code.' },
        { kind: 'two', mt: true,
          leftH3: 'What the eight problems have in common',
          left: [
            'None of them needs advanced code; all of them need the math to be understood rather than memorised. A student who can say why binary search takes 20 steps, or why the nested loop gives a triangular number, is doing first-year computer science reasoning already.',
            'That is the standard we teach to. In our Grade 12 math classes, a formula comes with its reason and a second way to check it, and the checking is often a three-line program.'
          ],
          rightH3: 'Using the problems',
          right: [
            'Students can work them as written, then change the numbers: a list of a billion items, a loop that starts at 1, a learning rate of 0.6 instead of 0.25. Predict first, then run the code above with the new values.',
            'Question 7 with a learning rate of 1.1 is worth trying in particular. Predict what happens, then run it. The result explains why choosing that number carefully matters in machine learning.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your teen stands',
    h2: 'Four stages from Grade 12 math to computing math',
    lede: 'Our stages, from teaching Grade 12 students in Ontario and the western provinces who went on to computing degrees.',
    table: { caption: 'Stages from school math to computing math (ours)', head: ['Stage', 'What a teacher notices'], rows: [
      ['1. Calculator', 'Gets numerical answers, but cannot say what they would mean in a program'],
      ['2. Translator', 'Writes a formula as code and code as a formula, for simple cases'],
      ['3. Estimator', 'Predicts roughly how long an algorithm will take before running it'],
      ['4. Modeller', 'Chooses the math a problem needs: logs, sums, rates or vectors']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your teen to estimate how many steps a search through a million items takes. Their answer, and how they reach it, shows the stage quickly.',
      'Stage 2 is the hinge. Once a student can move between a formula and a loop, both subjects start reinforcing each other.'
    ] },
    right: { h3: 'For students', ps: [
      'Every time you learn a formula, write a five-line program that tests it on real numbers. You will catch your own mistakes and remember the idea.',
      'Practise estimating before calculating. Within a factor of ten is a good first target; then get closer.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for future computing students across Canada',
    lede: 'Taught live by one regular teacher, to a class or to a single student, wherever in Canada you live.',
    bands: [
      { num: 'I', h3: 'Math, wherever you study', sub: 'Grades 9 to 12', courses: [
        { code: 'CSP / MTH / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Algebra to calculus, for gaps before Grade 12.' },
        { code: 'CSP / MTH / 02', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'Contest reasoning from Gauss to Euclid, with our own problems.' },
        { code: 'CSP / MTH / 03', slug: 'ap-calculus-exam-prep', title: 'AP Calculus', blurb: 'For schools where AP Calculus stands in for provincial calculus.' }
      ] },
      { num: 'II', h3: 'Algorithms and contests', sub: 'Teens', courses: [
        { code: 'CSP / ALG / 01', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior preparation', blurb: 'Canada&rsquo;s programming contest, practised with original problems.' },
        { code: 'CSP / ALG / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Searching, sorting and the analysis behind them.' },
        { code: 'CSP / ALG / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Faster, harder problem sets after the basics.' }
      ] },
      { num: 'III', h3: 'Languages and applied computing', sub: 'Teens', courses: [
        { code: 'CSP / LNG / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language used for the checks on this page.' },
        { code: 'CSP / LNG / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Strong typing and objects, common in first year.' },
        { code: 'CSP / LNG / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Gradient descent and models, built by hand.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Classes in your province&rsquo;s course names and clock',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school in your own zone, from Newfoundland to British Columbia.' },
      { time: 'Weekends', l: 'Mornings in Eastern time, or later for western families.' },
      { time: '1-on-1', l: 'Fitted to your school&rsquo;s exam calendar.' }
    ],
    cells: [
      { h3: 'Your course, by name', p: 'MCV4U, Pre-calculus 12 or Math 31, as your school calls it.' },
      { h3: 'One regular teacher', p: 'The same person every week.' },
      { h3: 'Formulas with reasons', p: 'Each rule explained, then checked.' },
      { h3: 'Code to test ideas', p: 'Small programs alongside the math.' },
      { h3: 'No admission coaching', p: 'We teach skills, not applications.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty in a class, or a private teacher.' }
    ]
  },

  projectsH2: 'Made by our students',
  projectsLede: 'Student projects that started as an idea and a small amount of math. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents and students on Google, in their own words.',

  fees: {
    h2: 'Fees',
    lede: 'Your first class is on us. Families who carry on pay a single monthly fee for eight live classes, priced in the currency code shown, and can end it after any month with nothing to cancel.',
    free: ['First class on us', 'Any province, any course name', 'No card required'],
    group: ['Group of fifteen to twenty', 'Steady teacher', 'You choose the batch', 'Pay month by month'],
    one: ['Just your teen and a teacher', 'Paced to their school calendar', 'Built around their own course']
  },

  faq: {
    eyebrow: 'Families ask',
    h2: 'Computer science prerequisites in Canada: questions',
    items: [
      { q: 'What high school courses do I need for computer science in Canada?', a: 'In the lists we read on 22 October 2026, every program named a senior English course and Grade 12 math. For Ontario applicants, Waterloo, U of T and McMaster named Calculus and Vectors, and UBC Science named Advanced Functions and a Grade 12 science. Each university and province has its own list.' },
      { q: 'Is MCV4U required for computer science?', a: 'For five of the six Ontario routes we read, yes: Waterloo, all three U of T campuses and McMaster listed MCV4U. UBC Science\'s Ontario list named MHF4U and a Grade 12 science, not MCV4U. Universities we could not read may differ.' },
      { q: 'Is MHF4U required for computer science?', a: 'Waterloo, U of T Mississauga, U of T Scarborough and UBC Science listed MHF4U for Ontario applicants. U of T\'s central page did not name it for St. George, and McMaster\'s list named ENG4U and MCV4U. Ontario\'s math curriculum requires MHF4U to be taken before or at the same time as MCV4U, so in practice students who take MCV4U take MHF4U as well.' },
      { q: 'Do I need a computer science course in high school to study CS?', a: 'None of the required-course lists we read named one. Waterloo describes its recommended computer science courses as helpful background that does not affect the likelihood of admission. Taking one where the school offers it still makes first-year programming easier.' },
      { q: 'What does a BC student need for computer science?', a: 'Calculus 12 or AP Calculus appears on the Waterloo and McMaster lists we read, and Waterloo adds Pre-Calculus 12. UBC Science and SFU name Pre-Calculus 12 instead, with SFU taking Calculus 12 as the alternative, and both add a Grade 12 science. English Studies 12 is accepted on all four lists.' },
      { q: 'What does an Alberta student need for computer science?', a: 'Math 31 is on the Waterloo and McMaster lists, McMaster also taking AP Calculus, and Waterloo adds Mathematics 30-1. UBC Science accepts Math 30-1 or Math 31 together with a 30-level science and the 20-level chemistry and physics courses. English Language Arts 30-1 is on all three lists.' },
      { q: 'Does UBC admit high school students straight into computer science?', a: 'UBC\'s computer science department says it does not. Students first join a faculty with computer science specializations, usually Science, and seek the specialization once first year is under way.' },
      { q: 'Why is Queen\'s or the University of Alberta missing?', a: 'Their websites refused our request on 22 October 2026, so we stopped and did not use them. We also could not read usable requirement pages for Calgary, McGill or uOttawa that day. Please check those universities\' own pages.' },
      { q: 'Why does computer science need so much math?', a: 'Because first-year computing uses it immediately: logarithms in searching, sums in counting loop steps, rates of change in training models, vectors in graphics. The eight practice problems on this page show each link with a worked answer.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. The hour is fixed in your own province\'s clock, from British Columbia and Alberta through Ontario and Quebec to the Atlantic provinces and Newfoundland.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Pages for students in every part of Canada.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Our home page for Canadian families.' },
      { href: '/coding-classes-in-ontario', label: 'Ontario', p: 'Classes for Ontario learners.' },
      { href: '/coding-classes-in-british-columbia', label: 'British Columbia', p: 'Classes timed for families in BC.' },
      { href: '/coding-classes-in-alberta', label: 'Alberta', p: 'Classes timed for Alberta families.' },
      { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada', p: 'Tutoring that uses each province&rsquo;s own course names.' },
      { href: '/ics3u-computer-science-help', label: 'ICS3U help', p: 'Ontario&rsquo;s Grade 11 computer science course.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'The national programming contest.' },
      { href: '/ai-and-machine-learning-classes-in-canada', label: 'AI and machine learning in Canada', p: 'Where gradient descent leads next.' },
      { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer', p: 'Problem solving before code.' }
    ]
  },

  start: {
    h2: 'Book one free class',
    lede: 'Tell us the province, the Grade 12 math course by its school name, and whether your teen codes. The teacher starts from the topic they are on now.',
    readFirst: 'Want details first? See the <a class="ag-inline-link" href="/courses/western-canada-grade-12-math-pre-calculus-12-math-30-1-course">western Grade 12 math syllabus</a> or the <a class="ag-inline-link" href="/courses/ontario-grade-12-university-math-mhf4u-mcv4u-course">Ontario Grade 12 math syllabus</a>, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a>.',
    note: 'Teaching is live on video, by teachers working from India, so it works the same in Halifax, Toronto, Calgary or Vancouver. WhatsApp is the quickest way to reach us.',
    formNote: 'The free class needs no card details to book.'
  },

  footer: {
    cols: [
      { h4: 'Grade 12 math', links: [
        { href: '/courses/ontario-grade-12-university-math-mhf4u-mcv4u-course', label: 'Ontario: MHF4U and MCV4U' },
        { href: '/courses/western-canada-grade-12-math-pre-calculus-12-math-30-1-course', label: 'West: Pre-calculus 12, Math 30-1' },
        { href: '/courses/ics3u-ics4u-computer-science-companion-course', label: 'School computer science' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-british-columbia', label: 'British Columbia' },
        { href: '/coding-classes-in-alberta', label: 'Alberta' },
        { href: '/coding-classes-in-ontario', label: 'Ontario' }
      ] }
    ],
    bottomRight: 'Logs, sums, rates, vectors: the math under the code'
  },

  personalityCss: `
.ag-root.ag-cspc .ag-hero h1 { letter-spacing: -0.012em; max-width: 22ch; }
.ag-root.ag-cspc .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-cspc .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cspc .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cspc .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-cspc .ag-steps li { margin-bottom: 0.6rem; }
`,

  dossier: {
    curriculumAuthority: 'Official university pages fetched raw 22 October 2026: Waterloo admission requirements tool (Computer Science; Ontario, British Columbia, Alberta); Ontario Curriculum Grades 11 and 12 Mathematics (revised 2007), MHF4U before or with MCV4U; U of T Future Students Computer Science (TAD, TMX, TXC) with the UTM and UTSC pages; McMaster admission requirements tool (Computer Science; Ontario, British Columbia, Alberta); UBC requirements tool (Vancouver, Science; Ontario, British Columbia, Alberta) and UBC Computer Science admission processes; SFU Computing Science requirements (BC). Queen\'s and Alberta returned 403; Calgary, McGill, uOttawa and U of T Arts & Science not readable; none used.',
    localProject: 'Eight original problems linking Grade 12 math to computing (binary search and logarithms, exponential running time, nested-loop sums, fitting k n squared to timings, vector motion, dot products, gradient descent, secant slopes), each with a worked answer, and a Python check (search_steps, nested_count, descend) printing "Q1: 20 comparisons; log2 gives 20", "Q3: 4950 and n(n-1)/2 gives 4950" and "Q7: [0, 1.5, 2.25, 2.625, 2.8125]"; a combined course list per province built from the published lists. Lesson family: why the math.',
    requiredMentions: ['min. 90%', 'MC / MCC', 'Math 31 or AP Calculus', 'English 12 First Peoples', 'Anatomy and Physiology 12 (Biology 12)', 'Courses that cover every list we read', 'Logarithms and search', 'search_steps', 'nested_count', '[0, 1.5, 2.25, 2.625, 2.8125]', 'About 12.61, against an exact 12'],
    sources: [
      { claim: 'Waterloo Computer Science requirements for Ontario, British Columbia and Alberta applicants.', url: 'https://uwaterloo.ca/future-students/admissions/admission-requirements/computer-science/high-school/domestic/ontario' },
      { claim: 'U of T computer science prerequisites for TAD, TMX and TXC.', url: 'https://future.utoronto.ca/undergraduate-programs/computer-science/' },
      { claim: 'McMaster Computer Science requirements, OUAC code, anticipated range and deadlines by province (from the page\'s requirements tool).', url: 'https://future.mcmaster.ca/apply/requirements/' },
      { claim: 'UBC Science requirements by province (from the page\'s requirements tool).', url: 'https://you.ubc.ca/applying-ubc/requirements/canadian-high-schools/' },
      { claim: 'No direct admission into UBC Computer Science.', url: 'https://www.cs.ubc.ca/admission' },
      { claim: 'SFU Computing Science requirements for BC high school students.', url: 'https://www.sfu.ca/students/admission/programs/a-z/c/computing-science/requirements.html' }
    ],
    rejectedClaims: [
      'Requirements for Queen\'s, Alberta, Calgary, McGill, uOttawa: not read at source on the day; left out and listed as not read.',
      'That a course not named in a list is unnecessary: the page says not named only means absent from the published list.',
      'Any ranking of universities by difficulty or average, or any prediction from published ranges: none made.',
      'The combined course list as any university\'s requirement: labelled ours, a planning aid.',
      'UBC\'s department average for second-year specialization as a high school admission average: not used on this page.',
      'McMaster\'s scholarship amounts and any outcome statistics: left out.',
      'Any affiliation with the universities named: none, and the page says so.'
    ]
  }
};
