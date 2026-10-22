'use strict';
// Python classes in Canada (ag- door, Canada cluster Plan 2, row 67).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: which Python to install in 2026 to 2027 (from the Python release PEPs and python.org), where Python meets a
// Canadian student (CEMC's CS Circles, the CCC, Ontario and BC curriculum lines that ask for data and decomposition),
// Python by age (kids, teens, adults), and one original project on the City of Winnipeg tree inventory.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/python-classes-in-canada/):
//  - peps.python.org/pep-0745 (peps.python.org_pep-0745_.html): "3.14.0 final: Tuesday, 2025-10-07"; "Python 3.14 will
//    receive bugfix updates approximately every two months for approximately 24 months."
//  - peps.python.org/pep-0790 (peps.python.org_pep-0790_.html): "3.15.0 final: Friday, 2026-10-09"; security fixes
//    until "five years after the release of 3.15.0 final, so until approximately October 2031" (wording joined from
//    the lifespan paragraph; the page says "until approximately October 2031").
//  - python.org/downloads/release/python-3151 (python-3151-release.html): "Release date: Oct. 21, 2026"; "Python 3.15.1
//    is an expedited security release and the first maintenance release of 3.15". (PEP 790 had listed 3.15.1 as
//    expected on 2026-12-01; python.org's release page is the later, primary record.)
//  - cscircles.cemc.uwaterloo.ca (cscircles.cemc.uwaterloo.ca_.html): title "Computer Science Circles", "[Python
//    Programming Tutorials]"; "These lessons teach Python version 3".
//  - facts-schools-contests.md: CCC "CCC participants may use C, C++, Python 2, Python 3, or Java."; "it may not always
//    be possible to achieve a perfect score with a particular language choice (for example, Python or Java)";
//    Ontario Grade 8 C3.1 "including code that involves the analysis of data in order to inform and communicate
//    decisions"; MTH1W C2.1 "use coding to demonstrate an understanding of algebraic concepts including variables,
//    parameters, equations, and inequalities"; BC Computer Science 11 "dividing complex problems into parts that are
//    easier to conceive, understand, and program"; CEMC resources "There is no registration or fee required".
//  - src-pilots/ccc-junior-guide/ccc-sample-soln.txt: the CCC grader's Python 3 is "Pypy3 7.3.9 (running Python
//    3.8.13)".
//  - OpenAI terms (src-pilots/ai-classes-for-kids-in-canada/openai-terms.html) and Anthropic consumer terms, for the
//    under-18 note.
//  - facts-geo.md section 3 (tzdb 2026e) for times.
// Open data: City of Winnipeg, Tree Inventory, https://data.winnipeg.ca/api/views/hfwk-jp4h/rows.csv?accessType=DOWNLOAD
//  (data/winnipeg-tree-inventory.csv, 42,868,736 bytes, sha256 e7799006...abee, 305,969 rows). Licence: Open
//  Government Licence - Winnipeg (data/winnipeg-licence.html): "including for commercial purposes"; attribution
//  statement "Contains information licensed under the Open Government Licence" then a dash then "Winnipeg" (dash not
//  reproduced). The download response carried a Socrata "Sunset" header for 22 December 2026 (not used in copy).
// Our own calculations (tree_sizes.py, run with python -I in about 2 seconds, output tree_sizes.out.txt; checks inline):
//  305,969 rows, 197 common names (no two names merge when lower-cased), 235 neighbourhoods, 16 electoral wards;
//  green ash 81,895 rows, American Elm 39,661; after our rule (diameter above 0 and at most 500 cm) 137 rows skipped
//  (118 at 0, 19 above 500); green ash mean 31.4 median 31.0; american elm mean 43.7 median 47.0; linden species 28.1
//  and 28.0; siberian elm 40.5 and 38.0; bur oak 33.5 and 32.0; widest raw value 3552 cm (a Manitoba maple, boxelder,
//  KILDONAN DRIVE); widest after the rule 489 cm (American Elm, KILDONAN PARK); 75 values above 200 cm; a plain
//  line.split(",") gives the wrong column count on 20,051 rows; Location Class Boulevard 210,581, Park 89,468;
//  PULBERRY 6,077 trees; NORTH RIVER HEIGHTS 1,515 American Elms; Park "Not In Park" 211,919, named parks 94,050.
// Lesson family: summarising a large file (streaming, grouping, mean against median, writing a sanity rule).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TREES = `# Our Winnipeg tree summary (Modern Age Coders, written for this page)
import csv
from statistics import median

sizes = {}            # species name -> list of trunk diameters in cm
skipped = 0

with open("winnipeg-tree-inventory.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):            # one row at a time, never the whole file
        name = row["Common Name"].strip().lower()
        cm = float(row["Diameter at Breast Height"])
        if cm <= 0 or cm > 500:              # our sanity rule: no zero trunks, none wider than 5 m
            skipped += 1
            continue
        sizes.setdefault(name, []).append(cm)

top = sorted(sizes.items(), key=lambda pair: len(pair[1]), reverse=True)[:5]
for name, cms in top:
    print(f"{name:26}{len(cms):7}   mean {sum(cms) / len(cms):5.1f}   median {median(cms):5.1f}")
print("species:", len(sizes), " skipped rows:", skipped)`;

const TREES_OUT = `green ash                   81885   mean  31.4   median  31.0
american elm                39651   mean  43.7   median  47.0
linden species              28540   mean  28.1   median  28.0
siberian elm                17940   mean  40.5   median  38.0
bur oak                     16226   mean  33.5   median  32.0
species: 197  skipped rows: 137`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'PYTHON', blurb: 'Learning Python in Canada at any age: which version to install in 2026 to 2027, where Python meets Canadian students, and a Winnipeg tree inventory project.' },
  slug: 'python-classes-in-canada',
  code: 'pc',
  accent: '#27610F',
  accentRationale: 'Python classes, Canada: a deep forest green #27610F, allocated for row 67 at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 7.07 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Python classes in Canada',
  title: 'Python Classes in Canada: Live Online for Kids, Teens, Adults',
  description: 'Learn Python online in Canada at any age: which Python version to use in 2026 to 2027, where it meets Canadian students, and a project on Winnipeg\'s 305,969 trees.',
  ogDescription: 'Python for Canadian learners from age 9 to adult: the 2026 versions from python.org, CEMC\'s free Python lessons, the CCC, and a real project summarising the City of Winnipeg\'s tree inventory.',
  twitterDescription: 'Python in Canada for kids, teens and adults, with a real project on Winnipeg\'s tree inventory.',
  pageName: 'Python Classes in Canada',
  webPageDescription: 'A guide for Canadian learners of every age to learning Python in 2026 to 2027, built from the Python release schedules and python.org, CEMC\'s Computer Science Circles and CCC pages and the Ontario and BC curricula, with an original project on City of Winnipeg open data.',
  courseDescription: 'Live online Python classes for learners in Canada from age 9 to adult, in separate courses for kids, teens and adults, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Python classes',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#versions', label: 'Which Python' },
    { href: '#where', label: 'In Canada' },
    { href: '#ages', label: 'By age' },
    { href: '#project', label: 'Winnipeg project' },
    { href: '#extend', label: 'Exercises' }
  ],
  eyebrow: 'Canada &middot; Python &middot; Ages 9 to adult',
  h1: 'Python classes in Canada',
  lede: 'Python is the language most Canadian learners meet first, whether that is a ten year old making a turtle draw a snowflake, a Grade 11 student writing the Canadian Computing Competition, or an analyst in Calgary tired of copying spreadsheets by hand. This page answers the questions that come before a first class: which version of Python to install this school year, where Python already turns up in Canadian schools and contests, what learning it looks like at 9, 14 and 40, and what a learner can do with a real 300,000-row file from the City of Winnipeg.',
  secondaryCta: { href: '#project', label: 'See the Winnipeg project' },
  wa: 'Hello Modern Age Coders, I am in Canada and would like to learn Python. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; separate Python courses for kids, teens and adults',
  spec: [
    ['Ages', '9 to adult, in separate courses'],
    ['Python', 'Python 3, current release'],
    ['Format', 'Live video, real editor'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Projects', 'Canadian open data'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Python classes in Canada teach learners to write, test and explain Python 3 programs, from first lines to files, data and small apps, with children from about 9, teens from 13 and adults at any age in separate courses. Modern Age Coders teaches them live online, in a batch or one to one, for example in Python for Teens.',

  picks: {
    eyebrow: 'One Python course per age',
    h2: 'Three Python courses for learners in Canada',
    lede: 'The same language, taught three different ways, because a nine year old, a fifteen year old and a forty year old do not learn alike.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PC / 01', title: 'Python and AI for Kids', note: 'Ages 9 to 12, complete beginners. Eight to ten months of typed Python: turtle art, Pygame games and kid-safe AI projects.' },
      { course: 'python-complete-masterclass-teens', code: 'PC / 02', title: 'Python for Teens', note: 'Ages 13 to 18. Ten to twelve months from first programs through object-oriented code, web projects and a capstone.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PC / 03', title: 'Python Masterclass for adults', note: 'Ages 18 and up, complete beginners welcome. Nine to eleven months from core Python to professional tooling.' }
    ]
  },

  sections: [
    {
      id: 'versions', tint: 'tint', eyebrow: 'Which Python, this year',
      h2: 'Which version of Python to install in 2026 to 2027',
      lede: 'New learners often ask which Python to download, and the answer changed this month. These dates come from the Python project\'s own release schedules (PEPs 745 and 790) and python.org, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Recent Python releases and their support, from python.org and the release schedule PEPs (read 22 October 2026)', head: ['Release', 'Date', 'What the Python project says'], rows: [
          ['Python 3.14.0', 'Tuesday, 2025-10-07', 'PEP 745: "Python 3.14 will receive bugfix updates approximately every two months for approximately 24 months."'],
          ['Python 3.15.0', 'Friday, 2026-10-09', 'PEP 790 lists "3.15.0 final" for that day.'],
          ['Python 3.15.1', 'Oct. 21, 2026', 'python.org: "an expedited security release and the first maintenance release of 3.15".'],
          ['Python 3.15 security fixes', 'Until about October 2031', 'PEP 790 expects source-only security releases "until approximately October 2031".'],
          ['Python on the CCC grader', 'For the 17 February 2027 contest', 'CEMC\'s sample document lists Python 3 as "Pypy3 7.3.9 (running Python 3.8.13)".']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Our advice for a new learner',
          left: [
            'Install the newest Python 3 release from python.org, unless a school or employer says otherwise. On 22 October 2026 that is the 3.15 line, whose first maintenance release came out the day before. Anything we teach in a first year works the same on 3.14.',
            'Avoid Python 2. It is still listed as a CCC language, but it is not what any new course teaches, and code written for it trips over small differences in Python 3.'
          ],
          rightH3: 'The exception: contest practice',
          right: [
            'A student preparing for the Canadian Computing Competition should write code that also runs on Python 3.8, because that is what the CCC grader runs. Newer features, such as the match statement, fail there.',
            'We teach contest students to keep to the plain core of the language for that reason. It loses nothing: loops, lists, dictionaries and functions are the same in every recent version.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://peps.python.org/pep-0745/" rel="noopener" target="_blank">PEP 745, Python 3.14 release schedule</a>; <a class="ag-inline-link" href="https://peps.python.org/pep-0790/" rel="noopener" target="_blank">PEP 790, Python 3.15 release schedule</a>; <a class="ag-inline-link" href="https://www.python.org/downloads/release/python-3151/" rel="noopener" target="_blank">python.org, Python 3.15.1</a>; <a class="ag-inline-link" href="https://cccgrader.com/sample_soln.pdf" rel="noopener" target="_blank">CCC sample programs</a>. All read 22 October 2026.' }
      ]
    },
    {
      id: 'where', tint: 'deep', eyebrow: 'Python in Canada',
      h2: 'Where Python already meets Canadian students',
      lede: 'No province requires Python by name in the documents we read, but several ask for exactly the skills Python teaches well, and the national student programming contest and a free set of lessons from the University of Waterloo both use it.',
      body: [
        { kind: 'table', caption: 'Places a Canadian learner meets Python or the skills it teaches (sources read 22 October 2026)', head: ['Where', 'What the source says', 'Why Python fits'], rows: [
          ['CEMC\'s Computer Science Circles', 'Free "Python Programming Tutorials"; "These lessons teach Python version 3"', 'A free, self-paced introduction from the University of Waterloo\'s CEMC'],
          ['Canadian Computing Competition', '"CCC participants may use C, C++, Python 2, Python 3, or Java."', 'Python is allowed at both levels, though CEMC warns a perfect score is not always possible in Python or Java'],
          ['Ontario, Grade 8 math', 'Code "that involves the analysis of data in order to inform and communicate decisions"', 'Reading a file and summarising it is a few lines of Python'],
          ['Ontario, Grade 9 math (MTH1W)', '"use coding to demonstrate an understanding of algebraic concepts including variables, parameters, equations, and inequalities"', 'Python variables and functions mirror the algebra directly'],
          ['British Columbia, Computer Science 11', 'Decomposition: "dividing complex problems into parts that are easier to conceive, understand, and program"', 'Python functions are the natural unit for those parts']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Free Python, and why a class still helps',
          left: [
            'CEMC says of its resources: "There is no registration or fee required to access these materials." A motivated learner can go a long way with Computer Science Circles alone, and we recommend it.',
            'What a free course cannot do is watch a learner think. Most people who stall with Python stall at the same place: they can follow an example, but cannot start a program from a blank file. A teacher sees that in minutes and changes the exercise.'
          ],
          rightH3: 'Python or another first language?',
          right: [
            'For most learners in Canada, Python first. It reads close to English, runs the same on Windows, Mac and Chromebook-friendly online editors, and leads straight into data, automation and AI.',
            'The exception is a student whose school course is taught in Java. Learning the school\'s language first avoids a confusing double load in Grade 11, and the habits transfer either way.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cscircles.cemc.uwaterloo.ca/" rel="noopener" target="_blank">Computer Science Circles</a>; <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/ccc" rel="noopener" target="_blank">CEMC, CCC</a>; <a class="ag-inline-link" href="https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics" rel="noopener" target="_blank">Ontario curriculum, mathematics</a>; <a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/mathematics/11/computer-science" rel="noopener" target="_blank">BC Computer Science 11</a>. Read 22 October 2026. Modern Age Coders is not connected with CEMC or any ministry.' }
      ]
    },
    {
      id: 'ages', tint: 'tint', eyebrow: 'By age',
      h2: 'Learning Python at 9, at 14 and at 40',
      lede: 'We teach Python in three separate courses because the reasons for learning, the attention span and the first projects all differ. The rows below summarise each course\'s own syllabus.',
      body: [
        { kind: 'table', caption: 'Our three Python courses, from their published syllabuses', head: ['', 'Python and AI for Kids', 'Python for Teens', 'Python Masterclass (adults)'], rows: [
          ['Ages', '9 to 12', '13 to 18', '18 and up'],
          ['Length', '8 to 10 months', '10 to 12 months', '9 to 11 months'],
          ['Live classes', 'Two a week', 'Two a week', 'Two a week'],
          ['Practice between classes', '2 to 3 hours', '3 to 4 hours', '4 to 6 hours'],
          ['First stretch', 'Python basics, then turtle art', 'Foundations and object-oriented code', 'Core Python'],
          ['Middle', 'Real games', 'Games, apps and automation; Python on the web', 'Professional Python and a working toolkit'],
          ['End', 'Kid-safe AI and a finale project', 'AI, quality and a capstone', 'Three specialist roads and a finale']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'At 9', p: 'Short programs with a visible result: a turtle drawing a maple leaf, a guessing game. The win is typing a line correctly and reading it back aloud. Typing speed matters more than anyone expects.' },
          { h3: 'At 14', p: 'Programs that solve something: a quiz with scores saved to a file, a small web page, a CCC Junior problem. The win is splitting a problem into functions before writing any of them.' },
          { h3: 'At 40', p: 'Programs that remove a chore: renaming files, merging reports, reading a city dataset. The win is trusting your own script enough to use it on real work, because you tested it on purpose.' }
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'A real data project',
      h2: 'Summarising Winnipeg\'s 305,969 trees in twenty lines of Python',
      lede: 'The City of Winnipeg publishes its tree inventory under an open licence that allows commercial reuse: one row per city tree, with the species, the neighbourhood and the trunk diameter. At 42.9 MB it is far too big to scroll through, which makes it the right file for learning to summarise. The program, the rule inside it and every number below are ours, from the file downloaded on 22 October 2026.',
      body: [
        { kind: 'p', html: '<b>The question:</b> which species are most common on Winnipeg\'s city-owned land, and how thick is a typical trunk of each? The columns used are Common Name and Diameter at Breast Height, in centimetres.' },
        { kind: 'code', label: 'Our program &middot; tree_sizes.py', lang: 'python', code: TREES },
        { kind: 'code', label: 'Output on the city\'s file (about two seconds on a laptop)', lang: 'text', code: TREES_OUT, note: 'Green ash is the most common species by a wide margin. American elm has the thickest typical trunk of the five, and its median is larger than its mean.' },
        { kind: 'table', mt: true, caption: 'Four decisions inside the program, and what each one protects against (our checks on the same file)', head: ['Decision', 'What we found', 'Why it matters'], rows: [
          ['Use csv.DictReader, not line.split(",")', 'A plain split gives the wrong number of columns on 20,051 rows', 'Names such as "Manitoba maple, boxelder" contain a comma inside quotes, and only a real CSV reader respects them'],
          ['Read one row at a time', '305,969 rows pass through without loading the file into a list first', 'The same code works on a file ten times larger'],
          ['A written sanity rule', '118 trunks are listed at 0 cm; 19 are above 500 cm, the widest at 3552 cm', 'A trunk 35 metres across is a typing error, and it would wreck a maximum'],
          ['Report the median beside the mean', 'American elm: mean 43.7 cm, median 47.0 cm', 'When the two differ, the data is lopsided, and one number alone misleads']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The rule is a judgement, so say it',
          left: [
            'Our rule keeps diameters above 0 and up to 500 cm. It removes 137 rows. It also keeps a 489 cm American elm in Kildonan Park, which is almost certainly another error, and 75 values above 200 cm in all. A stricter rule is defensible; so is a looser one.',
            'What is not defensible is having no rule. We ask every learner to write the rule as a comment, report how many rows it removed, and show the result both with and without it.'
          ],
          rightH3: 'What changes across ages',
          right: [
            'A twelve year old runs this program with the teacher, changes the species list and explains the output. A teenager writes it from a blank file and adds a neighbourhood filter. An adult rebuilds it with pandas and compares the two approaches line by line.',
            'All three meet the same three ideas: never trust a split on commas, look at the extremes before the averages, and write down every rule that removes data.'
          ] },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://data.winnipeg.ca/" rel="noopener" target="_blank">City of Winnipeg Open Data</a>, Tree Inventory. Contains information licensed under the Open Government Licence, Winnipeg. The licence allows use "including for commercial purposes". Program, rule and results are ours; the City of Winnipeg does not endorse this page.' }
      ]
    },
    {
      id: 'extend', tint: 'tint', eyebrow: 'Exercises',
      h2: 'Six ways to extend the Winnipeg program',
      lede: 'Our exercises, each with the answer we got on the same file, so a learner can check their work. Change one thing at a time and rerun.',
      body: [
        { kind: 'ol', items: [
          '<b>Count by location.</b> Count trees by the Location Class column. Answer: Boulevard leads with 210,581, then Park with 89,468.',
          '<b>The busiest neighbourhood.</b> Which Neighbourhood value has the most trees? Answer: PULBERRY, with 6,077.',
          '<b>Elms only.</b> Filter to American Elm and find the neighbourhood with the most. Answer: NORTH RIVER HEIGHTS, with 1,515.',
          '<b>The text that looks empty.</b> Count trees in a named park. Careful: the Park column says "Not In Park" on 211,919 rows rather than being blank. Answer: 94,050 trees are in a named park.',
          '<b>Before and after the rule.</b> Print the single widest trunk with no rule, then with ours. Answer: 3552 cm (a Manitoba maple, boxelder) without; 489 cm (an American elm) with.',
          '<b>Your own rule.</b> Choose a stricter upper limit, say it in a sentence, and report how many rows it removes. For comparison, 75 values are above 200 cm.'
        ] },
        { kind: 'p', mt: true, html: 'Exercise 4 is the one most learners miss. A program that counts non-empty cells in the Park column returns all 305,969 rows, because "Not In Park" is text. Looking at the actual values before writing a condition is a habit worth more than any library.' }
      ]
    },
    {
      id: 'thinking', tint: 'deep', eyebrow: 'How we teach it',
      h2: 'Python taught as thinking, not as copying',
      lede: 'Our promise is the same in Canada as everywhere we teach: a learner leaves able to think a problem through and solve it, not to paste an answer from a forum or an AI tool. In a Python class that shows up in three habits.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Read the error first', p: 'A Python traceback names the file, the line and the kind of mistake. Learners read it aloud before touching the code, and most bugs are found right there.' },
          { h3: 'Predict the output', p: 'Before running, the learner writes down what they expect. The gap between prediction and result is where the real lesson is.' },
          { h3: 'Rebuild from blank', p: 'After an example works, the learner closes it and writes it again from an empty file. What they cannot rebuild, they have not learned yet.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'AI assistants and Python learners',
          left: [
            'Adults in our classes may use an AI assistant to explain an error, then must explain the fix themselves. For younger learners the companies set the limits: OpenAI\'s terms require a parent\'s or guardian\'s permission for anyone under 18, and Anthropic\'s terms set 18 as the minimum age for Claude.',
            'Children and teens in our Python courses write their own code. An assistant can make a program appear; it cannot make the learner able to write the next one.'
          ],
          rightH3: 'What progress looks like',
          right: [
            'Not the number of lessons finished, but the size of problem a learner can start alone. In the first month that is a few lines; by the end of a course it is a program like the Winnipeg summary, written from a blank file with its rule stated.',
            'We report that progress in plain words after classes, so a parent or the learner can see it.'
          ] }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Times across Canada',
      h2: 'When Python classes run for Canadian learners',
      lede: 'Learners join from every province, and adults often need evening or weekend slots. Each class is booked in the learner\'s own zone; nothing on this page is a fixed batch time.',
      body: [
        { kind: 'table', caption: 'How each Canadian zone moves through 2026 to 2027 (IANA tz database, release 2026e)', head: ['Province or territory', 'Offset this winter', 'Changes on 14 March 2027?'], rows: [
          ['Most of British Columbia, Yukon', 'UTC-7', 'No'],
          ['Alberta, Saskatchewan', 'UTC-6', 'No'],
          ['Manitoba', 'UTC-5', 'No, from 1 November 2026'],
          ['Ontario, Quebec', 'UTC-5', 'Yes, to UTC-4'],
          ['Nova Scotia, New Brunswick, PEI', 'UTC-4', 'Yes, to UTC-3'],
          ['Newfoundland', 'UTC-3:30', 'Yes, to UTC-2:30']
        ] },
        { kind: 'p', mt: true, html: 'Only the eastern half of the country moves its clocks in March 2027, so a class booked across provinces can drift by an hour that week. We confirm times with every learner when Eastern clocks go back on 1 November 2026 and forward on 14 March 2027.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Four stages',
    h2: 'How far into Python are you?',
    lede: 'Our stages for placing a learner of any age in the first class.',
    table: { caption: 'Four Python stages (ours)', head: ['Stage', 'What the learner can do'], rows: [
      ['1. Runs code', 'Opens an editor, runs a program, changes a value and sees the effect'],
      ['2. Writes code', 'Writes loops, conditions and functions from a blank file'],
      ['3. Uses data', 'Reads a CSV file correctly, groups and summarises it'],
      ['4. Defends code', 'States the rules inside a program and tests the awkward cases on purpose']
    ] },
    left: { h3: 'For parents and learners', ps: [
      'Stage 2 is where most self-taught learners stall: they can follow, but not start. That is the stage a live teacher changes fastest.',
      'Stage 3 is the Winnipeg program on this page. Stage 4 is the habit of saying why the program can be trusted.'
    ] },
    right: { h3: 'For anyone starting', ps: [
      'Type every example yourself; never paste it. Your fingers learn the syntax your eyes skim past.',
      'When something breaks, read the last line of the error first. It usually tells you exactly what went wrong.'
    ] }
  },

  catalogue: {
    eyebrow: 'Beyond a first course',
    h2: 'Nine more Python-based courses',
    lede: 'Where learners go once the basics are in place, each taught live with one teacher, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Younger learners', sub: 'Ages 9 to 15', courses: [
        { code: 'PC / YOUNG / 01', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'School math learned in Python, ages 10 to 15.' },
        { code: 'PC / YOUNG / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How machines learn, ages 8 to 14.' },
        { code: 'PC / YOUNG / 03', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC preparation', blurb: 'Contest Python for the 2027 CCC.' }
      ] },
      { num: 'II', h3: 'Teens going further', sub: 'Ages 13 to 18', courses: [
        { code: 'PC / TEEN / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Python and first models, ages 14 to 18.' },
        { code: 'PC / TEEN / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'From Python to trained models.' },
        { code: 'PC / TEEN / 03', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP certification', blurb: 'Python certification, from about 13.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and up', courses: [
        { code: 'PC / ADULT / 01', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Scripting and applied AI for work.' },
        { code: 'PC / ADULT / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL, Python and BI.' },
        { code: 'PC / ADULT / 03', slug: 'python-web-development-django-flask-course', title: 'Python web development', blurb: 'Django and Flask, with Python basics.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live Python classes for every age',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school for younger learners, evenings for adults.' },
      { time: 'Weekends', l: 'Mornings and afternoons, booked in your own zone.' },
      { time: '1-on-1', l: 'For a learner who wants their own pace or project.' }
    ],
    cells: [
      { h3: 'Python 3', p: 'The current release, set up together in the first class.' },
      { h3: 'Separate by age', p: 'Kids, teens and adults never share a batch.' },
      { h3: 'Real files', p: 'Canadian open data under licences that allow it.' },
      { h3: 'Errors read aloud', p: 'Tracebacks treated as clues, not failures.' },
      { h3: 'From blank files', p: 'Learners rebuild examples without looking.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty learners, or one to one.' }
    ]
  },

  projectsH2: 'Projects from our learners',
  projectsLede: 'Many of these began as Python programs. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'What parents and students wrote on Google, copied without changes.',

  fees: {
    h2: 'Fees',
    lede: 'Each month\'s fee covers eight live Python classes, paid month by month. Adults working around shifts and families with busy terms can pause between months without a penalty.',
    free: ['A free first class', 'Python installed and running', 'No payment details taken'],
    group: ['Fifteen to twenty learners of one age band', 'A regular teacher', 'A fixed weekly slot', 'Monthly billing'],
    one: ['Your own teacher', 'Your pace and your project', 'Times arranged around you']
  },

  faq: {
    eyebrow: 'Questions about Python',
    h2: 'Learning Python in Canada: common questions',
    items: [
      { q: 'Which version of Python should I install in 2026?', a: 'The newest Python 3 from python.org. Python 3.15.0 came out on 9 October 2026 and 3.15.1, an expedited security release, on 21 October 2026. Everything taught in a first year works the same on 3.14. Students practising for the CCC should keep their code compatible with Python 3.8.' },
      { q: 'What age can someone start learning Python?', a: 'Our Python and AI for Kids course starts at 9, Python for Teens covers 13 to 18, and the Python Masterclass is for adults of any age. Younger children usually start with blocks first.' },
      { q: 'Is Python taught in Canadian schools?', a: 'No provincial document we read requires Python by name. Ontario math asks for coding from Grade 1, with data analysis in Grade 8 and algebra through code in Grade 9, and BC\'s Computer Science 11 is built around decomposition. Many schools choose Python for those courses, and others choose Java.' },
      { q: 'Can I use Python in the Canadian Computing Competition?', a: 'Yes. CEMC allows C, C++, Python 2, Python 3 and Java. It also warns that a perfect score is not always possible in Python or Java, and its grader runs Python 3.8, so contest code should avoid the newest features.' },
      { q: 'Are there free Python lessons from a Canadian source?', a: 'Yes. CEMC at the University of Waterloo runs Computer Science Circles, free Python tutorials that teach Python 3, and says its resources need no registration or fee. A live class adds a teacher who watches how you think.' },
      { q: 'How long does it take to learn Python?', a: 'Our courses run eight to twelve months with two live classes a week, depending on age. Most learners write useful small programs within the first two months; writing a program like our Winnipeg tree summary from a blank file takes longer.' },
      { q: 'Can adults in Canada learn Python for work?', a: 'Yes. Our Python Masterclass is for complete beginners aged 18 and up, and the automation and data analysis courses build on it. We make no job or salary promises; we teach the skill.' },
      { q: 'Do learners use ChatGPT or Claude to write Python?', a: 'Not to write it for them. Adults may ask an assistant to explain an error and then fix it themselves. OpenAI requires a parent\'s or guardian\'s permission under 18, and Anthropic requires Claude users to be 18 or over, so children and teens write their own code.' },
      { q: 'What times are Python classes in Canada?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Classes are booked in your own province\'s time zone.' },
      { q: 'What projects will I build?', a: 'It depends on the course: turtle art and games for children, apps and a capstone for teens, automation and data work for adults. Everyone works with real files, such as the City of Winnipeg tree inventory on this page.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More about Python, and more for learners in Canada.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Every Canadian page we have.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'Contest Python for the 2027 CCC.' },
      { href: '/python-from-the-ground-up', label: 'Python from the ground up', p: 'The language explained from first principles.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'What Python looks like for a child.' },
      { href: '/python-for-14-year-olds', label: 'Python for 14 year olds', p: 'What Python looks like for a teen.' },
      { href: '/python-for-data-science', label: 'Python for data science', p: 'Where the Winnipeg project leads.' },
      { href: '/python-indentation-error-explained', label: 'Python indentation errors', p: 'The error beginners meet first.' },
      { href: '/how-to-read-code', label: 'How to read code', p: 'Reading before writing.' },
      { href: '/mdm4u-data-management-tutor', label: 'MDM4U data management', p: 'Ontario\'s Grade 12 data course.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the first class we install Python together if needed, write a few lines, and read one short program. The teacher then places you at a stage and suggests the course that fits your age and goal.',
    readFirst: 'Want more detail first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a live class, and every <a class="ag-inline-link" href="/courses">course page</a> lists its full syllabus.',
    note: 'Teaching is live over video from India, so learners in any province join from home. A WhatsApp message is the fastest way to reach us.',
    formNote: 'No charge for the first class and no card asked for.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/python-from-the-ground-up', label: 'Python from the ground up' },
        { href: '/python-for-data-science', label: 'Python for data science' },
        { href: '/python-indentation-error-explained', label: 'Indentation errors' },
        { href: '/ccc-junior-guide', label: 'CCC Junior guide' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/canada-time-zones-2026-online-class-times', label: 'Class times by time zone' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Write the rule down'
  },

  personalityCss: `
.ag-root.ag-pc .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-pc .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-pc .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-pc .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-pc .ag-band-head h3 { letter-spacing: -0.01em; }
.ag-root.ag-pc .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'PEP 745 and PEP 790 release schedules and python.org\'s Python 3.15.1 release page; CEMC Computer Science Circles and CCC pages and the CCC sample-programs document; Ontario DCP API Grade 8 C3.1 and MTH1W C2.1; BC Computer Science 11; OpenAI and Anthropic terms; all read 22 October 2026. City of Winnipeg Tree Inventory under the Open Government Licence, Winnipeg.',
    localProject: 'A Winnipeg tree summary: an original Python program that streams the City of Winnipeg tree inventory (305,969 rows), applies a stated sanity rule (137 rows removed) and reports count, mean and median trunk diameter for the five most common species, with the split-on-commas trap measured (20,051 rows) and six extension exercises with our answers. Lesson family: summarising a large file.',
    requiredMentions: ['tree_sizes.py', 'skipped rows: 137', 'Manitoba maple, boxelder', '20,051 rows', 'NORTH RIVER HEIGHTS', '211,919', 'an expedited security release', 'Friday, 2026-10-09', 'Write the rule down'],
    sources: [
      { claim: 'Python 3.14.0 release date and bugfix support window.', url: 'https://peps.python.org/pep-0745/' },
      { claim: 'Python 3.15.0 release date and security support to about October 2031.', url: 'https://peps.python.org/pep-0790/' },
      { claim: 'Python 3.15.1 release date and description.', url: 'https://www.python.org/downloads/release/python-3151/' },
      { claim: 'CEMC Computer Science Circles teaches Python 3.', url: 'https://cscircles.cemc.uwaterloo.ca/' },
      { claim: 'CCC languages and the Python caveat.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'CCC grader Python version.', url: 'https://cccgrader.com/sample_soln.pdf' },
      { claim: 'Winnipeg Tree Inventory and its licence.', url: 'https://data.winnipeg.ca/api/views/hfwk-jp4h/rows.csv?accessType=DOWNLOAD' }
    ],
    rejectedClaims: [
      'A "current Python version" taken from python.org\'s download button alone: checked against the 3.15.1 release page and PEP 790 before use.',
      'That any province requires Python by name: not found in any document read.',
      'That the 489 cm elm is real: not claimed; the page calls it almost certainly an error.',
      'Summing the Location Class counts into a total: not done; the row total is our direct count of the file.',
      'Job or salary outcomes for adult learners: refused.',
      'Recommending Claude to anyone under 18: refused.'
    ]
  }
};
