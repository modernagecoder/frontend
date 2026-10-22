'use strict';
// Coding classes for teens in Canada (ag- door, Canada cluster Plan 2, row 66).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: the high school computer courses each province actually lists (Ontario, BC, Saskatchewan, Manitoba,
// New Brunswick, Nova Scotia), four kinds of teenager and what each needs, one original string-search project on
// City of Calgary open data, and the contests and programmes Canadian teens can enter in 2026 to 2027.
// Facts from keyword-research-2026-09/ca/facts-schools-contests.md (each with its saved raw file in ca/src/):
//  - Ontario DCP API: course list ICS3U, ICS3C, ICS4U, ICS4C (2008) and ICD2O (2023, Open); ICD2O "learn and apply
//    coding concepts and skills to build hands-on projects and investigate artificial intelligence, cybersecurity, and
//    other emerging digital technologies"; ICS3U "Students will design software independently and as part of a team";
//    ICS4U prerequisite "Introduction to Computer Science, Grade 11, University Preparation"; ICS3U and ICS3C have no
//    prerequisite; 2008 PDF "Each of the courses listed above is worth one credit."; OSSD STEM group lists "computer
//    studies".
//  - BC curriculum: Computer Programming 11 "programming language constructs to support input/output, logic, decision
//    structure, and loops"; Computer Programming 12 "higher-level structures, such as functions, methods, or classes";
//    Computer Science 11 and 12 also listed under Mathematics.
//  - Saskatchewan: Computer Science 20 and 30 ("Computer Science 20 and other science curricula"). Manitoba:
//    "Senior 2 (20S), Senior 3 (30S), and Senior 4 (40S) Computer Science". New Brunswick: Computer Science 110
//    "Learners will gain a strong foundation in coding"; "AI-assisted debugging tools". Nova Scotia Virtual School:
//    "CodeHS: NSVS Computer Programming 12 (Java)."
//  - CEMC CCC: "North and South America: Wednesday, February 17, 2027"; level chosen "regardless of their grade";
//    "CCC participants may use C, C++, Python 2, Python 3, or Java."; entry through a school.
//  - Skills Ontario: "2027 Skills Ontario Competition: May 3rd and 4th at the Toronto Congress Centre"; "Coding (S/PS)";
//    registration "through your institution's contact person".
//  - FIRST Robotics Canada: FIRST Tech Challenge "Teams design, build, and program robots to compete in an alliance
//    format against other teams."; robots "can be coded using a variety of levels of Java-based programming".
//  - Shad Canada: "Delivered in partnership with 28 post-secondary campuses across Canada".
//  - Waterloo CS: recommended course "Grade 11 U Introduction to Computer Science".
//  - OpenAI terms (src-pilots/ai-classes-for-kids-in-canada/openai-terms.html, effective January 1, 2026): "If you are
//    under 18 you must have your parent or legal guardian's permission to use the Services." Anthropic consumer terms
//    (effective Oct 8, 2025): "You must be at least 18 years old". GitHub (src-pilots/vibe-coding-and-ai-agents-
//    classes-in-canada/github.com_education_students.html, github-terms.html): "GitHub Copilot Student" "Available for free to verified
//    students, teachers, and open-source maintainers"; GitHub terms "A User must be at least 13 years of age."
//  - facts-geo.md section 3 (tzdb 2026e) for the class-time note.
// Open data, read raw 22 October 2026 (copies in ca/src-pilots/coding-classes-for-teens-in-canada/data/):
//  - City of Calgary, Public Art, https://data.calgary.ca/api/views/2kp2-hsy7/rows.csv?accessType=DOWNLOAD
//    (calgary-public-art.csv, 50,613 bytes, sha256 20578d5b...9285). Licence: Open Government Licence - City of Calgary
//    (calgary-licence.html): "including for commercial purposes"; attribution "Contains information licensed under
//    the Open Government Licence" then an en dash then "City of Calgary." (dash not reproduced).
// Our own calculations (light_search.py, run with python -I, output light_search.out.txt; checks inline):
//  140 rows, 134 distinct ART_ID, 133 distinct titles; TAB_NAME Downtown 42, Southwest 33, Southeast 24, Northeast
//  21, Northwest 20; "light" substring case-sensitive 30 rows, lower-cased 31; whole words (light, lights, lighting,
//  lit, illuminated) 16 rows and 13 artworks; 18 rows match the substring only through other words (highlight 7,
//  lighthearted 4, highlighting 3, flight, sunlight, enlighten, highlighted, slight 1 each); 3 rows match only through
//  lit or illuminated; Luminous Crossings appears as 4 rows under one ART_ID, P2013.002.001.
// Lesson family: searching text precisely (case folding, whole-word matching, deduplicating by a key).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SEARCH = `# Our search for Calgary public art that uses light (Modern Age Coders, written for this page)
import csv
import re

TEXT_COLUMNS = ["TITLE", "SHORT_DESC", "DESC1", "DESC2", "DESC3", "DESC4", "DESC5"]
WORD = re.compile(r"\\b(light|lights|lighting|lit|illuminated)\\b", re.IGNORECASE)

naive = folded = rows_found = 0
artworks = {}                      # ART_ID -> title, so one artwork counts once

with open("calgary-public-art.csv", encoding="utf-8-sig") as f:
    for row in csv.DictReader(f):
        text = " ".join(row[c] for c in TEXT_COLUMNS)
        if "light" in text:
            naive += 1
        if "light" in text.lower():
            folded += 1
        if WORD.search(text):
            rows_found += 1
            artworks[row["ART_ID"]] = row["TITLE"]

print("substring, case-sensitive:", naive)
print("substring, lower-cased:   ", folded)
print("whole words, rows:        ", rows_found)
print("whole words, artworks:    ", len(artworks))
print(sorted(artworks.values())[:4])`;

const SEARCH_OUT = `substring, case-sensitive: 30
substring, lower-cased:    31
whole words, rows:         16
whole words, artworks:     13
['Below/Before/Between', 'Chinook Arc', 'Confluence', 'Flock']`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'TEENS, AGES 13 TO 18', blurb: 'Coding for Canadian teenagers: the high school computer courses each province lists, which teen needs what, a Calgary open data project, and the 2027 contests.' },
  slug: 'coding-classes-for-teens-in-canada',
  code: 'tc',
  accent: '#485225',
  accentRationale: 'Coding classes for teens, Canada: a dark fern green #485225, allocated for row 66 at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 7.90 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  courseCodePage: true,
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Coding classes for teens in Canada',
  title: 'Coding Classes for Teens in Canada: High School and Beyond',
  description: 'Live online coding for Canadian teens aged 13 to 18: high school computer courses by province, which course fits which teen, a Calgary data project, 2027 contests.',
  ogDescription: 'What Canadian high schools offer in computer science, province by province, and what a teenager can add outside school: Python, school-course support, contests, and a real search project on Calgary\'s public art data.',
  twitterDescription: 'Coding for Canadian teens: high school courses by province, a Calgary data project, and the 2027 contests.',
  pageName: 'Coding Classes for Teens in Canada',
  webPageDescription: 'A guide for Canadian teenagers and parents to coding in high school and beyond it, built from provincial curriculum pages in Ontario, British Columbia, Saskatchewan, Manitoba, New Brunswick and Nova Scotia and from the CCC, Skills Ontario and FIRST Robotics Canada pages, with an original Python project on City of Calgary open data.',
  courseDescription: 'Live online coding classes for teenagers aged 13 to 18 across Canada, from first Python programs to school computer science support and contest preparation, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Coding for teens',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#highschool', label: 'High school' },
    { href: '#which', label: 'Which teen' },
    { href: '#project', label: 'Calgary project' },
    { href: '#beyond', label: 'Contests' },
    { href: '#tools', label: 'AI tools' }
  ],
  eyebrow: 'Canada &middot; Coding for teenagers &middot; Ages 13 to 18',
  h1: 'Coding classes for teens in Canada',
  lede: 'A Canadian teenager\'s first serious programming usually happens in a high school computer course, and every province names and builds those courses differently. This page lays the courses out side by side from the provincial documents, sorts teenagers into four common situations, gives one real project on the City of Calgary\'s public art data, and lists the contests and programmes worth knowing for 2026 to 2027. Our classes sit alongside the school course: we teach the skills, and we do not grant Ontario credits or any other province\'s.',
  secondaryCta: { href: '#project', label: 'See the Calgary project' },
  wa: 'Hello Modern Age Coders, my teenager in Canada wants to learn coding properly. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; teens write, test and defend their own code',
  spec: [
    ['Ages', '13 to 18, Grades 8 to 12'],
    ['Languages', 'Python first; Java and more'],
    ['School courses', 'Taught alongside, never for credit'],
    ['Contests', 'CCC on 17 February 2027'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding classes for teens in Canada take students aged 13 to 18 from first programs to Grade 12 computer science, contests such as the CCC, and real projects, alongside school courses like ICS3U, with no credits granted. Modern Age Coders teaches them live online, in a batch or one to one, starting with its Python for Teens course.',

  picks: {
    eyebrow: 'Three starting points',
    h2: 'Courses for Canadian teenagers',
    lede: 'One for a teen starting from nothing, one built around Ontario\'s Grade 11 and 12 computer science, and one for the Canadian Computing Competition.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'TC / 01', title: 'Python for Teens', note: 'Ages 13 to 18, absolute beginners welcome. Ten to twelve months from first lines to object-oriented code, web projects and AI, two live classes a week.' },
      { course: 'ics3u-ics4u-computer-science-companion-course', code: 'TC / 02', title: 'Ontario Computer Science Companion', note: 'Grades 11 and 12. Paced to the student\'s own ICS3U or ICS4U course, in Python or Java, joinable any month. Grants no credit.' },
      { course: 'ccc-junior-and-senior-preparation-course', code: 'TC / 03', title: 'CCC Junior and Senior Preparation', note: 'Roughly ages 13 to 18. Junior and Senior tracks with timed practice contests, up to the CCC on 17 February 2027.' }
    ]
  },

  sections: [
    {
      id: 'highschool', tint: 'tint', eyebrow: 'What high school offers',
      h2: 'High school computer courses in Canada, by province',
      lede: 'There is no national course. Each province decides what its computer courses are called, when they start and what they ask. The rows below come from the curriculum pages we could read on 22 October 2026, quoted where the wording matters.',
      body: [
        { kind: 'table', caption: 'High school computer science and programming courses named in provincial documents (read 22 October 2026)', head: ['Province', 'Courses named', 'What the document says'], rows: [
          ['Ontario', 'ICD2O (Grade 10, 2023, Open); ICS3U and ICS3C (Grade 11); ICS4U and ICS4C (Grade 12), all 2008', 'ICD2O has students "build hands-on projects and investigate artificial intelligence, cybersecurity, and other emerging digital technologies"; ICS3U students "design software independently and as part of a team".'],
          ['Ontario, prerequisites', 'ICS4U needs ICS3U', 'ICS4U lists "Introduction to Computer Science, Grade 11, University Preparation"; ICS3U and ICS3C list none.'],
          ['British Columbia', 'Computer Programming 11 and 12 (ADST); Computer Science 11 and 12 (Mathematics)', 'Programming 11 covers "input/output, logic, decision structure, and loops"; Programming 12 adds "functions, methods, or classes".'],
          ['Saskatchewan', 'Computer Science 20 and 30', 'Provincial curricula, filed with the sciences ("Computer Science 20 and other science curricula").'],
          ['Manitoba', 'Computer Science 20S, 30S and 40S', 'A framework of outcomes for "Senior 2 (20S), Senior 3 (30S), and Senior 4 (40S) Computer Science".'],
          ['New Brunswick', 'Computer Science 110 and 120, among others', 'In 110, "Learners will gain a strong foundation in coding", including with "AI-assisted debugging tools".'],
          ['Nova Scotia', 'Computer Programming 12, through the Nova Scotia Virtual School', 'Its course page lists "CodeHS: NSVS Computer Programming 12 (Java)."'],
          ['Quebec, Alberta, Newfoundland and Labrador, PEI, the territories', 'Not verified', 'We could not read a primary page for these courses that day, so we list none.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Three things the table shows',
          left: [
            'First, the language is rarely fixed by the province. Ontario\'s ICS3U describes skills, not a language, so one school teaches it in Python and another in Java. Nova Scotia\'s virtual Programming 12 is an exception that names Java outright.',
            'Second, the courses come late. In the documents above, a dedicated programming course first appears in Grade 10 or 11, so a curious Grade 8 or 9 student has no programming course of their own to take yet. Third, the Ontario chain is strict: a student who skips ICS3U cannot take ICS4U, the university preparation course.'
          ],
          rightH3: 'What a credit is, and what we are not',
          right: [
            'In Ontario, the 2008 computer studies document says "Each of the courses listed above is worth one credit", and computer studies sits in the group of subjects a student can use for one of the compulsory diploma credits. Credits come only from a school.',
            'We teach alongside those courses. A teen in our classes gets the programming practice, explanation and project feedback the school timetable rarely has room for, and earns the credit at school as usual. We do not grant Ontario credits, and no province\'s credit comes from us.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&amp;elements.code%5Bin%5D=ICS2O,ICS3U,ICS3C,ICS4U,ICS4C&amp;depth=0" rel="noopener" target="_blank">Ontario curriculum course data</a> and the <a class="ag-inline-link" href="https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf" rel="noopener" target="_blank">2008 computer studies document</a>; <a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/adst/11/computer-programming" rel="noopener" target="_blank">BC Computer Programming 11</a>; <a class="ag-inline-link" href="https://curriculum.gov.sk.ca/CurriculumHome?id=446" rel="noopener" target="_blank">Saskatchewan Computer Science 20</a>; <a class="ag-inline-link" href="https://www.edu.gov.mb.ca/k12/cur/cs/index.html" rel="noopener" target="_blank">Manitoba Computer Science</a>; <a class="ag-inline-link" href="https://curriculum.nbed.ca/learning-areas/high-school-block/career-connected-learning/digital-and-information-technology/computer-science-110/" rel="noopener" target="_blank">New Brunswick Computer Science 110</a>; <a class="ag-inline-link" href="https://elearning.ednet.ns.ca/index.php/cm-course/computer-programming-12/" rel="noopener" target="_blank">Nova Scotia Virtual School, Computer Programming 12</a>. All read 22 October 2026. Modern Age Coders is not connected with any ministry or school board.' }
      ]
    },
    {
      id: 'which', tint: 'deep', eyebrow: 'Four kinds of teenager',
      h2: 'Which course suits which teen',
      lede: 'Teenagers arrive with very different starting points, and the right first course depends far more on that than on age. These four situations cover most of the teens we meet. The matching is our advice.',
      body: [
        { kind: 'table', caption: 'Four common starting points and where we would begin (Modern Age Coders guidance)', head: ['The teen', 'What they usually need', 'Where we start'], rows: [
          ['Grade 8 or 9, curious, never coded', 'A real language from the first week, with projects worth finishing', 'Python for Teens, from the beginning'],
          ['In ICS3U or ICS4U now, finding it fast', 'Practice beyond the school assignments, and someone to explain the hard week again', 'The Ontario Computer Science Companion, paced to the school course'],
          ['Solves puzzles for fun, likes deadlines', 'Contest technique and timed papers', 'CCC Junior and Senior Preparation, aiming at 17 February 2027'],
          ['Wants to build an app, a site or an AI project', 'A route from code to a finished, public thing', 'Python first, then web, app or AI courses for teens']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The student who is ahead of school',
          left: [
            'Some Grade 9 students have already taught themselves loops from videos, and find the first school course slow. The risk for them is not boredom but gaps: they can make things work without being able to say why. We test that early with a short program they have to explain line by line.',
            'If the explanation holds, they move quickly to object-oriented code, data structures and contests. If it does not, a few weeks of honest fundamentals save months later.'
          ],
          rightH3: 'The student who is behind',
          right: [
            'Others reach the middle of ICS3U and realise the first unit never landed. The fix is rarely a new topic; it is going back to variables, conditions and loops with harder problems, until reading a program is as natural as reading a paragraph.',
            'We ask such students to bring their actual school assignment, read it together, and plan the solution in plain words before any code. We never write the assignment for them; the school\'s marks have to reflect the student\'s own work.'
          ] }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'A real data project',
      h2: 'Searching Calgary\'s public art for the word "light"',
      lede: 'The City of Calgary publishes descriptions of its public artworks under a licence that allows commercial reuse. A teen asked to find the artworks that use light will usually write one line, check the count, and move on. The count is wrong. This project, ours from start to finish, is about why.',
      body: [
        { kind: 'p', html: '<b>The task:</b> list the Calgary artworks whose descriptions mention light, lights, lighting, lit or illuminated. The file has 140 rows with columns including ART_ID, TAB_NAME (the city quadrant or Downtown), TITLE, SHORT_DESC and five long description columns, DESC1 to DESC5.' },
        { kind: 'code', label: 'Our program &middot; light_search.py', lang: 'python', code: SEARCH },
        { kind: 'code', label: 'Output on the city\'s file, downloaded 22 October 2026', lang: 'text', code: SEARCH_OUT, note: 'Four ways of counting the same thing give 30, 31, 16 and 13. Only the last is the number of artworks.' },
        { kind: 'table', mt: true, caption: 'Why the four counts differ (our analysis of the same file)', head: ['Method', 'Count', 'What it gets wrong or right'], rows: [
          ['"light" in the text', '30 rows', 'Misses one row where the only match is a capital "Light"'],
          ['"light" in text.lower()', '31 rows', 'Catches capitals, but 18 of these rows match only through other words: highlight 7 times, lighthearted 4, highlighting 3, and flight, sunlight, enlighten, highlighted and slight once each'],
          ['Whole words with \\b, five word forms', '16 rows', 'Drops the false matches and adds 3 rows that say only lit or illuminated'],
          ['The same, keyed by ART_ID', '13 artworks', 'Luminous Crossings alone is 4 rows sharing one ART_ID, P2013.002.001, because it is listed at more than one LRT station']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The three ideas a teen should leave with',
          left: [
            '<b>Case.</b> Text typed by people mixes capitals; compare lower-cased text, or tell the search to ignore case. <b>Words, not letters.</b> A substring search finds the letters l-i-g-h-t inside highlight and flight. A word boundary, written \\b in a regular expression, stops that.',
            '<b>Rows are not things.</b> A spreadsheet row is a record, and one artwork can have several records. Counting distinct keys, here ART_ID, is the difference between 16 and 13. The file has 140 rows but 134 distinct ART_ID values.'
          ],
          rightH3: 'The judgement call left open',
          right: [
            'Is sunlight about light? Our list of five word forms leaves it out, so one artwork described with sunlight is not counted. A different reader could include it. We ask students to write their rule down in a sentence before they search, and to report the count with the rule beside it.',
            'That habit, stating the rule before the result, is what makes a number trustworthy, in a school assignment, a contest or a job.'
          ] },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://data.calgary.ca/" rel="noopener" target="_blank">City of Calgary Open Data</a>, Public Art. Contains information licensed under the Open Government Licence, City of Calgary. The licence permits use "including for commercial purposes". Code, counts and analysis are ours; the City of Calgary does not endorse this page.' }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice set',
      h2: 'Five search traps to try before your next assignment',
      lede: 'Our own short exercises, in the same family as the Calgary project. Write each one in Python, then check it against the answer. None needs a file; make your own small lists.',
      body: [
        { kind: 'ol', items: [
          '<b>Count the cats.</b> Given the sentence "The cat sat by the category of catalogue cats.", count how many times the word cat or cats appears as a whole word. (Answer: 2.)',
          '<b>Case trap.</b> Given the list ["Ottawa", "ottawa", "OTTAWA", "Ottawa River"], count the entries equal to the city name Ottawa, ignoring case. (Answer: 3; "Ottawa River" is not equal to it.)',
          '<b>Duplicate records.</b> Given rows [("A1", "Bridge"), ("A2", "Tower"), ("A1", "Bridge"), ("A3", "Bridge")], count distinct IDs and distinct titles. (Answer: 3 IDs, 2 titles; two different IDs share a title.)',
          '<b>Prefix or word.</b> Find every word in "Snowshoe snow snowy snowflake Snow" that is exactly snow, ignoring case. (Answer: 2.)',
          '<b>Write the rule first.</b> Choose a word with several forms, such as run, runs, running, ran. Write your rule in one sentence, then a regular expression that matches only those forms, and test it on a sentence that also contains "brunch" and "rerun".'
        ] },
        { kind: 'p', mt: true, html: 'Exercise 5 has no single right answer, and that is deliberate. In class, two students\' rules are compared on the same sentence, and each has to defend what theirs includes and leaves out.' }
      ]
    },
    {
      id: 'beyond', tint: 'tint', eyebrow: 'Beyond the classroom',
      h2: 'Contests and programmes for Canadian teens in 2026 to 2027',
      lede: 'Outside school, a teenager can test their code against a deadline, a judge or a team. These are the options whose details we could read on the organisers\' own pages.',
      body: [
        { kind: 'table', caption: 'Coding contests and programmes open to Canadian teenagers, from the organisers\' pages (read 22 October 2026)', head: ['What', 'Organiser', 'What the organiser says'], rows: [
          ['Canadian Computing Competition', 'CEMC, University of Waterloo', '"North and South America: Wednesday, February 17, 2027"; each writer picks Junior or Senior "regardless of their grade"; "CCC participants may use C, C++, Python 2, Python 3, or Java."'],
          ['Skills Ontario Competition, Coding', 'Skills Ontario', '"2027 Skills Ontario Competition: May 3rd and 4th at the Toronto Congress Centre"; the list includes "Coding (S/PS)"; entry must be "through your institution\'s contact person"'],
          ['FIRST Tech Challenge', 'FIRST Robotics Canada', '"Teams design, build, and program robots to compete in an alliance format against other teams"; robots "can be coded using a variety of levels of Java-based programming"'],
          ['Shad', 'Shad Canada', 'A pre-university STEAM and entrepreneurship programme "Delivered in partnership with 28 post-secondary campuses across Canada"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Entering through a school',
          left: [
            'The CCC and Skills Ontario both run through schools: CEMC says students must take part through their school, and Skills Ontario says a student cannot register directly. A teen who wants either should ask a computer science or technology teacher in September or October, not in February.',
            'FIRST teams are usually based at a school or a community group, so the practical question is whether one exists nearby.'
          ],
          rightH3: 'Choosing one',
          right: [
            'A teen who enjoys working alone against a clock suits the CCC. One who likes building with a team suits FIRST. Skills Ontario rewards a strong, reliable performance on the day. None of them needs to be chosen this year, and none is required for university.',
            'Waterloo, for example, names Grade 11 U Introduction to Computer Science as a recommended course for its computer science programme; it does not require a contest for admission.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/ccc" rel="noopener" target="_blank">CEMC, CCC</a>; <a class="ag-inline-link" href="https://www.skillsontario.com/skills-ontario-competition" rel="noopener" target="_blank">Skills Ontario Competition</a>; <a class="ag-inline-link" href="https://www.firstroboticscanada.org/" rel="noopener" target="_blank">FIRST Robotics Canada</a>; <a class="ag-inline-link" href="https://www.shad.ca/" rel="noopener" target="_blank">Shad Canada</a>; <a class="ag-inline-link" href="https://uwaterloo.ca/future-students/programs/computer-science" rel="noopener" target="_blank">University of Waterloo, Computer Science</a>. All read 22 October 2026. We are not connected with any of these organisations.' }
      ]
    },
    {
      id: 'tools', tint: 'deep', eyebrow: 'AI tools and teenagers',
      h2: 'What the AI companies allow at 13 to 17, and how we use it',
      lede: 'Teenagers will meet AI coding assistants whether or not a class mentions them. The age rules are set by each company, and they differ. We teach teens to use the tools their age allows to explain and check code, never to hand in code they cannot explain.',
      body: [
        { kind: 'table', caption: 'Age rules from each company\'s own terms (read 22 October 2026)', head: ['Tool', 'What the terms say', 'What it means for a Canadian teen'], rows: [
          ['ChatGPT (OpenAI)', '"If you are under 18 you must have your parent or legal guardian\'s permission to use the Services."', 'Allowed from 13, with a parent\'s permission until 18'],
          ['Claude (Anthropic)', '"You must be at least 18 years old"', 'Not for teenagers; we never recommend it to anyone under 18'],
          ['GitHub Copilot', 'GitHub Copilot Student is "Available for free to verified students, teachers, and open-source maintainers"; GitHub says "A User must be at least 13 years of age."', 'Free for a verified student aged 13 or over'],
          ['In the CCC', 'The CCC rules forbid generative AI during the contest', 'Practise without an assistant before February 2027']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Our rule in class',
          left: [
            'A teen may ask an allowed assistant to explain an error message or suggest a test case. They may not paste in code they cannot explain. Every program a student submits to us, they walk through aloud, and a line they cannot explain is rewritten by them.',
            'New Brunswick\'s Computer Science 110 already mentions "AI-assisted debugging tools", so this is not a fringe question. The skill being tested in school, in contests and in interviews is still the student\'s own reasoning.'
          ],
          rightH3: 'Why this matters more for teens than adults',
          right: [
            'Grade 11 and 12 are when a student builds the habits they will take to university. A student who learns to reach for an assistant before thinking ends up unable to start a problem alone, which is exactly what a contest, an exam or a technical interview asks.',
            'Our promise is the same in every country we teach: students learn how to think through a problem and solve it, not how to copy an answer or an AI\'s output.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://openai.com/policies/terms-of-use/" rel="noopener" target="_blank">OpenAI Terms of Use</a> (effective January 1, 2026); <a class="ag-inline-link" href="https://www.anthropic.com/legal/consumer-terms" rel="noopener" target="_blank">Anthropic Consumer Terms</a> (effective Oct 8, 2025); <a class="ag-inline-link" href="https://github.com/education/students" rel="noopener" target="_blank">GitHub Education for students</a>; <a class="ag-inline-link" href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service" rel="noopener" target="_blank">GitHub Terms of Service</a>; <a class="ag-inline-link" href="https://cccgrader.com/rules.pdf" rel="noopener" target="_blank">CCC rules</a>. All read 22 October 2026.' }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Coast to coast',
      h2: 'Fitting classes around a Canadian high school week',
      lede: 'Teenagers carry homework, sport and part-time jobs, so we book each class in the family\'s own zone and keep a slot steady through the year. Canada\'s clocks changed in several provinces in 2026, so the offsets below are this year\'s.',
      body: [
        { kind: 'table', caption: 'UTC offsets used for booking, winter 2026 to 2027 and summer 2027 (IANA tz database 2026e)', head: ['Zone', 'Winter, from 1 November 2026', 'Summer, from 14 March 2027'], rows: [
          ['Pacific: British Columbia (most) and Yukon', 'UTC-7', 'UTC-7, unchanged'],
          ['Alberta and Saskatchewan', 'UTC-6', 'UTC-6, unchanged'],
          ['Manitoba', 'UTC-5', 'UTC-5, unchanged'],
          ['Eastern: Ontario and Quebec', 'UTC-5', 'UTC-4'],
          ['Atlantic: NS, NB, PEI', 'UTC-4', 'UTC-3'],
          ['Newfoundland', 'UTC-3:30', 'UTC-2:30']
        ] },
        { kind: 'p', mt: true, html: 'Teens in Vancouver and Calgary sit one hour apart all year, since both provinces now keep one clock. Teens in Toronto and Winnipeg share a clock all winter and split by an hour once Eastern clocks go forward on 14 March 2027. Exam weeks move around, so a teen can shift a class with a message, and a one-to-one student can change times as the school calendar changes.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Four levels',
    h2: 'How far along is your teen?',
    lede: 'Our levels for placing a teenager honestly in the first class.',
    table: { caption: 'Four levels for teenagers (ours)', head: ['Level', 'What the teen can do'], rows: [
      ['1. Reads code', 'Follows a short program and predicts what it prints'],
      ['2. Writes code', 'Builds programs with loops, lists and functions from a blank file'],
      ['3. Designs code', 'Splits a larger problem into functions or classes and tests each part'],
      ['4. Judges code', 'Compares two working solutions and explains which is better and why']
    ] },
    left: { h3: 'For parents', ps: [
      'Most teens who are new to coding reach level 2 within a few months. Level 3 is roughly where ICS4U sits, and level 4 is where contest and university work begins.',
      'A teen who can produce working code but not explain it is at level 1, whatever the program does.'
    ] },
    right: { h3: 'For teens', ps: [
      'Write your plan in comments before the code. If you cannot write the plan, you are not ready to write the program.',
      'When a test fails, change one thing at a time. Two changes at once teach you nothing.'
    ] }
  },

  catalogue: {
    eyebrow: 'Further courses',
    h2: 'Nine more courses for teenagers in Canada',
    lede: 'All live, all with one regular teacher, in a batch or one to one, from any province or territory.',
    bands: [
      { num: 'I', h3: 'Languages and foundations', sub: 'Ages 13 to 18', courses: [
        { code: 'TC / LANG / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'From first class to data structures in Java.' },
        { code: 'TC / LANG / 02', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'The language contest coders move to.' },
        { code: 'TC / LANG / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic, data structures and algorithms.' }
      ] },
      { num: 'II', h3: 'Build things', sub: 'Ages 13 to 18', courses: [
        { code: 'TC / BUILD / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web for teens', blurb: 'React and Node.js, front to back.' },
        { code: 'TC / BUILD / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'Real apps with React Native.' },
        { code: 'TC / BUILD / 03', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Unity and C#, to a shipped game.' }
      ] },
      { num: 'III', h3: 'AI, data and contests', sub: 'Ages 13 to 18', courses: [
        { code: 'TC / AI / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Python to trained models.' },
        { code: 'TC / AI / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Real data and first models, ages 14 to 18.' },
        { code: 'TC / AI / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Contest-level problem solving.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live classes that work around school',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening batches booked in your province\'s time.' },
      { time: 'Weekends', l: 'Morning or afternoon, clear of the school day.' },
      { time: '1-on-1', l: 'Times that bend around exams and tournaments.' }
    ],
    cells: [
      { h3: 'Real languages', p: 'Python from week one; Java and C++ when needed.' },
      { h3: 'School-aware', p: 'We know ICS3U and ICS4U and teach alongside them.' },
      { h3: 'Explain it aloud', p: 'Every submitted program is walked through by its author.' },
      { h3: 'Projects on real data', p: 'Canadian open data, under licences that allow it.' },
      { h3: 'Contest track', p: 'CCC practice on original problems and CEMC\'s archive.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty teens, or a teacher of your own.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Teenagers in our classes publish their work. A few projects are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> hold many more.',
  reviewsLede: 'Reviews from parents and students on Google, reproduced word for word.',

  fees: {
    h2: 'Fees',
    lede: 'A single monthly fee pays for eight live classes. There is no contract for the year, so a teen can pause in exam season or over the summer and restart later.',
    free: ['A free first class', 'A placement program to read and explain', 'No card required'],
    group: ['Fifteen to twenty teenagers', 'The same teacher each week', 'Classes on weekdays or at weekends', 'Billed one month at a time'],
    one: ['A teacher to yourself', 'Paced to your school course', 'Built around your own projects']
  },

  faq: {
    eyebrow: 'Teens and parents ask',
    h2: 'Coding for teens in Canada: common questions',
    items: [
      { q: 'What coding courses do Canadian high schools offer?', a: 'It depends on the province. Ontario lists ICD2O in Grade 10 and ICS3U, ICS3C, ICS4U and ICS4C in Grades 11 and 12. British Columbia has Computer Programming 11 and 12 and Computer Science 11 and 12. Saskatchewan has Computer Science 20 and 30, and Manitoba 20S to 40S.' },
      { q: 'Do your classes give my teen an Ontario credit?', a: 'No. We teach alongside school courses such as ICS3U and ICS4U, and we do not grant Ontario credits or credits from any other province. Credits come only from the student\'s school.' },
      { q: 'Which language should a teenager learn first?', a: 'We start most teens in Python, because the code reads clearly and the same skills carry into Java or C++ later. A teen whose school course uses Java can learn Java with us from the start.' },
      { q: 'My teen is in ICS3U and struggling. Can you help?', a: 'Yes. Our Ontario Computer Science Companion is paced to the student\'s own ICS3U or ICS4U course, in Python or Java. We explain and practise; we never write the school assignment for the student.' },
      { q: 'When is the Canadian Computing Competition in 2027?', a: 'CEMC lists the 2027 CCC for Wednesday, February 17, 2027 in North and South America. Students choose Junior or Senior regardless of grade and enter through their school.' },
      { q: 'Can teenagers use ChatGPT or Claude for coding?', a: 'OpenAI\'s terms allow users from 13, with a parent\'s or guardian\'s permission under 18. Anthropic\'s terms require Claude users to be at least 18, so we never recommend Claude to teens. GitHub Copilot is free for verified students aged 13 or over.' },
      { q: 'Is coding useful for university admission in Canada?', a: 'Waterloo names Grade 11 U Introduction to Computer Science as a recommended course for its computer science programme. We make no admission promises; what coding gives a teen is the problem solving behind any strong application.' },
      { q: 'What class times suit Canadian teenagers?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every class is booked in your own province\'s time.' },
      { q: 'How big is a teen batch?', a: 'Fifteen to twenty teenagers with one regular teacher. One-to-one classes suit a teen who wants a pace of their own or help with a specific school course.' },
      { q: 'What will my teen build?', a: 'Programs that answer real questions, such as our Calgary public art search, which shows why four ways of counting the same thing give 30, 31, 16 and 13. Later, web apps, games or AI projects, depending on the course.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian teenagers who want to go further with code.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Our pages for every province.' },
      { href: '/ics3u-computer-science-help', label: 'ICS3U computer science help', p: 'Ontario\'s Grade 11 course, explained.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'The 2027 Junior paper and how to prepare.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'Our main page on the CCC.' },
      { href: '/canada-coding-curriculum-by-province', label: 'Coding curriculum by province', p: 'Where coding sits in each province.' },
      { href: '/levels/coding-for-teens', label: 'Coding for teens', p: 'Our teen courses at a glance.' },
      { href: '/vibe-coding-for-teens', label: 'Vibe coding for teens', p: 'Building with AI help, honestly.' },
      { href: '/how-to-read-code', label: 'How to read code', p: 'The skill under every other skill.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'Finding the bug a test has exposed.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class opens with a short program for the teen to read and explain, then a small problem to solve together. From that, the teacher can say which level the teen is at and whether Python, a school-course companion or contest work comes first.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a class from start to finish, and each <a class="ag-inline-link" href="/courses">course page</a> has its complete syllabus.',
    note: 'Our teachers are based in India and every lesson is live video, so students join from any province without travel. WhatsApp is the quickest way to ask a question.',
    formNote: 'The first class costs nothing, and no card is taken.'
  },

  footer: {
    cols: [
      { h4: 'For teens', links: [
        { href: '/ics3u-computer-science-help', label: 'ICS3U help' },
        { href: '/ccc-junior-guide', label: 'CCC Junior guide' },
        { href: '/vibe-coding-for-teens', label: 'Vibe coding for teens' },
        { href: '/ai-ml-course-for-teens', label: 'AI and ML for teens' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'State the rule, then count'
  },

  personalityCss: `
.ag-root.ag-tc .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-tc .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-tc .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-tc .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-tc .ag-band-head h3 { letter-spacing: -0.008em; }
.ag-root.ag-tc .ag-slots { gap: 1.3rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario DCP API computer studies course list and descriptions (ICD2O 2023; ICS3U, ICS3C, ICS4U, ICS4C 2008) and the 2008 computer studies PDF; BC Computer Programming 11 and 12 and the Mathematics course list; Saskatchewan Computer Science 20; Manitoba Computer Science framework; New Brunswick Computer Science 110; Nova Scotia Virtual School Computer Programming 12; CEMC CCC; Skills Ontario; FIRST Robotics Canada; Shad; University of Waterloo Computer Science; OpenAI, Anthropic and GitHub terms; all read 22 October 2026. City of Calgary Public Art open data under the Open Government Licence, City of Calgary.',
    localProject: 'A Calgary public art search: an original Python program that counts the artworks whose descriptions use light, showing four counts on the same 140-row city file (30 and 31 by substring, 16 rows by whole words, 13 artworks by ART_ID) and naming every false match. Plus five original search-trap exercises with answers. Lesson family: searching text precisely.',
    requiredMentions: ['light_search.py', 'whole words, artworks', 'P2013.002.001', 'Luminous Crossings', 'lighthearted 4', 'Count the cats', 'Ottawa River', 'Snowshoe snow snowy snowflake Snow', 'State the rule, then count'],
    sources: [
      { claim: 'Ontario computer studies courses, descriptions, prerequisites and credit value.', url: 'https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf' },
      { claim: 'BC Computer Programming 11 content.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/11/computer-programming' },
      { claim: 'New Brunswick Computer Science 110, including AI-assisted debugging tools.', url: 'https://curriculum.nbed.ca/learning-areas/high-school-block/career-connected-learning/digital-and-information-technology/computer-science-110/' },
      { claim: 'Nova Scotia Virtual School Computer Programming 12 in Java.', url: 'https://elearning.ednet.ns.ca/index.php/cm-course/computer-programming-12/' },
      { claim: 'CCC 2027 date, levels and languages.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'Skills Ontario 2027 dates, Coding contest and registration.', url: 'https://www.skillsontario.com/skills-ontario-competition' },
      { claim: 'FIRST Tech Challenge and Java-based programming.', url: 'https://www.firstroboticscanada.org/' },
      { claim: 'OpenAI minimum age and parental permission under 18.', url: 'https://openai.com/policies/terms-of-use/' },
      { claim: 'Calgary public art open data and licence.', url: 'https://data.calgary.ca/api/views/2kp2-hsy7/rows.csv?accessType=DOWNLOAD' }
    ],
    rejectedClaims: [
      'High school computer courses in Quebec, Alberta, Newfoundland and Labrador, PEI and the territories: no primary page read, so none listed.',
      'That ICD2O replaced ICS2O: not stated in any source read, so not claimed.',
      'That ICD2O meets Ontario\'s technological education credit: not verified; only computer studies in the STEM group is stated.',
      'Any contest result, mark or admission outcome from our classes: refused.',
      'Recommending Claude or Claude Code to anyone under 18: refused under Anthropic\'s terms.',
      'Granting or implying any provincial credit: refused; the page says we grant none.'
    ]
  }
};
