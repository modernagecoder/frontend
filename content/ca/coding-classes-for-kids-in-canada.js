'use strict';
// Coding classes for kids in Canada (ag- door, Canada cluster Plan 2, row 65).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: what a Canadian child of 6 to 12 already meets at school (Ontario, BC, Alberta, from the primary pages),
// how we place a child by age, one original Edmonton open data project built on AND / OR / NOT, and the
// contests and clubs that suit children (CEMC Beaver Computing Challenge Grade 5/6, FIRST LEGO League).
// Facts from keyword-research-2026-09/ca/facts-schools-contests.md (each with its saved raw file in ca/src/):
//  - Ontario DCP API, Elementary Mathematics (2020), C3.1: Grade 1 "by writing and executing code, including code
//    that involves sequential events"; Grade 3 "sequential, concurrent, and repeating events"; Grade 5 "conditional
//    statements and other control structures"; Grade 6 "by writing and executing efficient code". Science and
//    Technology (2022) Grade 6 A2.1 "with a focus on obtaining input in different ways".
//  - BC curriculum, ADST 6-7: "Students will experience a minimum of three modules of Applied Design, Skills, and
//    Technologies 6-7 in each of Grades 6 and 7."; ADST 6 computational thinking "visual programming" "(for example,
//    Kodu, Scratch)"; "Schools may choose from among the modules listed below or develop new modules" (copy in
//    src-pilots/coding-classes-for-kids-in-canada/bc-adst-6-core.html).
//  - alberta.ca: "New K to 6 curriculum for English language arts and literature, mathematics and physical education
//    and wellness implemented in schools." (filed under 2022/2023); draft 7 to 9 "artificial intelligence, computer
//    science and money management"; "ahead of mandatory implementation in September 2027".
//  - CEMC BCC: "Students in Grade 6 or below are eligible to participate in the Grade 5/6 BCC."; "12 multiple-choice
//    questions out of a total of 60 (Grade 5/6)."; "Time allowed for completion is 45 minutes."; "only require
//    familiarity with concepts covered in the mathematics curriculum across all Canadian provinces"; dates "Monday,
//    November 9, 2026 to Friday, November 20, 2026", ordering deadline "Monday, October 26, 2026"; "This contest is
//    available in English only."; "Our contests are not tests or exams. There is no passing or failing score.";
//    entry only through a school ("all students must participate through their school."). 2025 Grade 5/6 figures:
//    14 260 contestants, mean 37.22 out of 60 (not summed with other levels).
//  - CEMC resources: POTW "e-mailed to educators for use with their students from Grades 3 to 12"; "There is no
//    registration or fee required to access these materials."
//  - FIRST Robotics Canada: FIRST LEGO League "introduces STEM to children ages 4-14 through fun, exciting hands-on
//    learning".
//  - OpenAI help centre (ai-classes-for-kids-in-canada/openai-ages.html, read 22 October 2026): "ChatGPT is not meant
//    for children under 13". Anthropic consumer terms (anthropic-consumer-terms.html, effective Oct 8, 2025): "You must
//    be at least 18 years old".
//  - facts-geo.md section 3 (tzdb 2026e): offsets for the class-time table.
// Open data, read raw 22 October 2026 (copies in ca/src-pilots/coding-classes-for-kids-in-canada/data/):
//  - City of Edmonton, Playgrounds, https://data.edmonton.ca/api/views/9nqb-w48x/rows.csv?accessType=DOWNLOAD
//    (edmonton-playgrounds.csv, 43,301 bytes, sha256 111add12...aca6). Licence: Open Government Licence - City of
//    Edmonton (edmonton-licence.html): "including for commercial purposes"; attribution statement "Contains information
//    licensed under the Open Government Licence" then a dash then "City of Edmonton" (the dash is not reproduced).
// Our own calculations (playground_picker.py, run with python -I, output playground_picker.out.txt; checks inline):
//  662 rows, every one Type "Playground"; 537 list "18 months" in User Category; 358 "Wheelchair Accessible", 304
//  "Unknown"; our three-condition AND filter keeps 155; the == "Pour In Place Rubber" version keeps 56; the OR
//  version (little children OR wheelchair) keeps 622; one row spells "Pour in Place Rubber, Sand" with a small "in";
//  one row spells "Engineered Wood Fiber" against 214 with "Fibre"; 270 rows are "Sand" alone.
// Lesson family: combining conditions with and, or and not (and the case and spelling traps inside real data).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const PICKER = `# Our playground picker (written by Modern Age Coders for this page)
import csv

found = 0
checked = 0
with open("edmonton-playgrounds.csv", encoding="utf-8-sig") as f:
    for row in csv.DictReader(f):
        checked += 1
        surface = row["Surface Type"].lower()     # "Pour in Place" and "Pour In Place" both become one spelling
        little_kids = "18 months" in row["User Category"]
        soft_ground = "rubber" in surface
        wheelchair = row["Accessibility"] == "Wheelchair Accessible"
        if little_kids and soft_ground and wheelchair:
            found += 1
            if found <= 3:
                print(row["Name"], "-", row["Neighbourhood Name"])

print("checked", checked, "playgrounds")
print("matches", found)`;

const PICKER_OUT = `Hudson Park Playground - HUDSON
Paisley Park - PAISLEY
Mayfield Park Playground - MAYFIELD
checked 662 playgrounds
matches 155`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'KIDS, AGES 6 TO 12', blurb: 'Coding for Canadian children aged 6 to 12: what Ontario, BC and Alberta schools already ask, how we place a child by age, and an Edmonton playground project in Python.' },
  slug: 'coding-classes-for-kids-in-canada',
  code: 'kc',
  accent: '#57541F',
  accentRationale: 'Coding classes for kids, Canada: a muted moss olive #57541F, allocated for row 65 at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 7.36 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Coding classes for kids in Canada',
  title: 'Coding Classes for Kids in Canada: Live Online, Ages 6 to 12',
  description: 'Live online coding for Canadian kids aged 6 to 12: what Ontario, BC and Alberta schools teach, placement by age, and a Python project on Edmonton playgrounds.',
  ogDescription: 'Coding for children across Canada, matched to what their school already asks: Scratch for the youngest, typed Python by 10, and a real project on the City of Edmonton\'s playground data.',
  twitterDescription: 'Coding for Canadian kids aged 6 to 12, matched to their school curriculum, with a real Edmonton data project.',
  pageName: 'Coding Classes for Kids in Canada',
  webPageDescription: 'A guide for Canadian parents of children aged 6 to 12 to coding at school and at home, built from the Ontario, British Columbia and Alberta curriculum pages and CEMC\'s Beaver Computing Challenge page, with an original Python project on City of Edmonton open data.',
  courseDescription: 'Live online coding classes for children aged 6 to 12 across Canada, from block coding to typed Python, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Coding for kids',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#school', label: 'At school' },
    { href: '#ages', label: 'By age' },
    { href: '#project', label: 'Edmonton project' },
    { href: '#puzzles', label: 'Puzzles' },
    { href: '#contests', label: 'Contests' }
  ],
  eyebrow: 'Canada &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Canada',
  lede: 'Most Canadian children meet code at school before a parent goes looking for a class. In Ontario it sits inside Grade 1 math; in British Columbia it appears in the design modules of Grades 6 and 7; Alberta\'s draft for Grades 7 to 9 brings in computer science. This page starts from what those provincial documents actually say, then shows how we place a child aged 6 to 12 in a live online class, what a ten year old can build with real city data, a set of puzzles to try at the kitchen table, and the contests open to Canadian children this school year.',
  secondaryCta: { href: '#project', label: 'See the Edmonton project' },
  wa: 'Hello Modern Age Coders, my child in Canada would like to start coding. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; children type and explain their own code',
  spec: [
    ['Ages', '6 to 12, grouped by age'],
    ['Starts with', 'Blocks, then typed Python'],
    ['Format', 'Live video with a teacher'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Provinces', 'Every province and territory'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding classes for kids in Canada teach children aged 6 to 12 to plan, build and fix their own programs, from blocks to typed Python by about age 10, alongside what Ontario, BC and Alberta schools already ask. Modern Age Coders teaches them live online, in a batch or one to one, in its Coding for Kids course.',

  picks: {
    eyebrow: 'Where most children start',
    h2: 'Three courses for Canadian children',
    lede: 'One long course that grows with the child, one short Scratch course for a first taste, and the Python course for children ready to type.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'KC / 01', title: 'Coding for Kids', note: 'Ages 6 to 12, batches grouped by age. Scratch first, then games, apps and a bridge into Python, over ten to twelve months with two live classes a week.' },
      { course: 'scratch-programming-complete-course', code: 'KC / 02', title: 'Scratch Coding for Kids', note: 'Ages 6 to 12. Three to four months of Scratch from a first block to finished games, on the free Scratch editor.' },
      { course: 'python-ai-kids-masterclass', code: 'KC / 03', title: 'Python and AI for Kids', note: 'Ages 9 to 12. Typed Python from the first class: turtle drawings, small games and kid-safe AI projects.' }
    ]
  },

  sections: [
    {
      id: 'school', tint: 'tint', eyebrow: 'What school already asks',
      h2: 'Coding in Canadian elementary schools, province by province',
      lede: 'Education belongs to each province, so a nine year old in Ottawa and a nine year old in Kamloops are on different plans. These are the lines we could read in each government\'s own documents on 22 October 2026. Where we could not reach a primary source, we say so rather than guess.',
      body: [
        { kind: 'table', caption: 'Coding in elementary school, from provincial curriculum pages (read 22 October 2026)', head: ['Province', 'Where coding sits', 'What the document says'], rows: [
          ['Ontario, Grade 1', 'Math (2020), strand C, expectation C3.1', 'Children solve problems "by writing and executing code, including code that involves sequential events".'],
          ['Ontario, Grade 3', 'Math, C3.1', 'The code now involves "sequential, concurrent, and repeating events".'],
          ['Ontario, Grade 5', 'Math, C3.1', 'Code with "conditional statements and other control structures".'],
          ['Ontario, Grade 6', 'Math, C3.1, and Science and Technology (2022)', 'Math asks for "efficient code"; science adds code "with a focus on obtaining input in different ways".'],
          ['British Columbia, Grades 6 and 7', 'Applied Design, Skills, and Technologies (ADST)', '"a minimum of three modules" each year; the Grade 6 computational thinking module lists "visual programming", "for example, Kodu, Scratch".'],
          ['Alberta, K to 6', 'Renewed curriculum', 'New K to 6 mathematics "implemented in schools", filed under 2022/2023.'],
          ['Alberta, Grades 7 to 9 (draft)', 'Renewed curriculum', 'Topics "like artificial intelligence, computer science and money management", "ahead of mandatory implementation in September 2027".'],
          ['Other provinces and territories', 'Not verified', 'We could not read a primary page for elementary coding in the other provinces and territories that day, so we describe none.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the Ontario ladder means at home',
          left: [
            'Read the Ontario lines top to bottom and a sequence appears: first a set of steps in order, then steps that repeat, then decisions, then a program judged on how well it is written. The curriculum asks children to read, change and write code at each stage, inside math class, not in a separate computer period.',
            'For a parent the useful question is which rung the child is on now. A Grade 4 student who cannot yet predict what a loop will do is not ready for the Grade 6 idea of efficiency, whatever the report card says.'
          ],
          rightH3: 'What British Columbia and Alberta add',
          right: [
            'In the BC pages we read, coding shows up in a hands-on design module in Grades 6 and 7, where a child may build in a visual tool such as Kodu or Scratch. The ministry adds that "Schools may choose from among the modules listed below or develop new modules", so two BC children in the same grade can have very different years.',
            'Alberta is mid-change. Its government says the new K to 6 math is in classrooms and that the draft for Grades 7 to 9 brings in computer science and artificial intelligence, with mandatory use planned for September 2027. A child now in Grade 4 or 5 in Calgary will meet that draft in junior high.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics" rel="noopener" target="_blank">Ontario curriculum, elementary mathematics</a>; <a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/adst/6/core" rel="noopener" target="_blank">BC curriculum, ADST 6</a>; <a class="ag-inline-link" href="https://www.alberta.ca/curriculum-how-we-got-here" rel="noopener" target="_blank">Alberta, curriculum: how we got here</a>. All read 22 October 2026. Modern Age Coders is not connected with any ministry of education; our classes sit alongside school and replace no part of it. A fuller map is on our <a class="ag-inline-link" href="/canada-coding-curriculum-by-province">coding curriculum by province</a> page.' }
      ]
    },
    {
      id: 'ages', tint: 'deep', eyebrow: 'Placing a child',
      h2: 'What coding looks like at 6, at 9 and at 12',
      lede: 'Age is a starting guess, not a rule. Reading speed, patience with a mistake and comfort with a keyboard decide more than the birthday. This is how our teachers place a child in the first class; the stages are ours, not a ministry\'s.',
      body: [
        { kind: 'table', caption: 'Our placement guide for children aged 6 to 12 (Modern Age Coders guidance)', head: ['Age band', 'What the child works in', 'What a good month looks like', 'Signs to move on'], rows: [
          ['6 and 7', 'Picture blocks and very short instructions, read aloud by the teacher', 'A character that walks, turns and says something, in an order the child chose', 'The child spots a block in the wrong place before pressing go'],
          ['8 and 9', 'Scratch: events, loops, a score that changes', 'A small game with a rule the child invented, and one bug the child found alone', 'The child asks "what if two things happen at once?"'],
          ['10 to 12', 'Typed Python, with the teacher beside them on screen', 'A program that reads a real file and answers a real question', 'The child can say what each line does before running it'],
          ['Any age', 'Unplugged puzzles on paper', 'Sorting cards by a rule, tracing steps by hand', 'The child explains a rule in a full sentence']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why we start younger children on blocks',
          left: [
            'A six year old can hold a sequence of steps in mind long before typing is comfortable. Blocks take spelling out of the way, so the lesson is about order and cause: this block runs, then this one, and the cat ends up in the wrong place because of that turn.',
            'We keep sessions for the youngest short and busy, with the teacher reading every instruction aloud. A parent nearby helps, especially in the first month.'
          ],
          rightH3: 'Why we move to typed code by about ten',
          right: [
            'Blocks hide the moment a program is read as text, and that moment matters. By ten, most children can type a short line accurately, and Python lets them read the line back like a sentence: if the ground is soft and the child is little, then print the name.',
            'The switch is gradual. For a few weeks the same idea is built twice, once in blocks and once typed, until the typed version feels like the quicker one.'
          ] }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'A real data project',
      h2: 'The Edmonton playground picker: three questions joined with "and"',
      lede: 'The City of Edmonton publishes a list of its playgrounds under an open licence that allows commercial use. We use it with children aged 10 to 12 to teach one idea properly: a computer can check several conditions at once, and the small word joining them changes everything. The program and every number below are ours, counted from the city\'s file downloaded on 22 October 2026.',
      body: [
        { kind: 'p', html: '<b>The question the child answers:</b> a family with a toddler who uses a wheelchair wants a playground with soft rubber ground. Which Edmonton playgrounds fit all three? The file has one row per playground, with columns such as Name, Surface Type, Accessibility, User Category and Neighbourhood Name.' },
        { kind: 'table', caption: 'What the City of Edmonton playground file holds, our counts (downloaded 22 October 2026)', head: ['Column', 'What we found', 'Why it matters to a young coder'], rows: [
          ['Rows', '662, every one with Type "Playground"', 'Big enough that nobody would check it by hand'],
          ['User Category', '537 rows include "18 months", such as "Junior/Senior (18 months to 12 years)"', 'The age text is long, so the program looks for a piece of it'],
          ['Accessibility', '358 say "Wheelchair Accessible"; 304 say "Unknown"', '"Unknown" does not mean "no", and the child has to say so'],
          ['Surface Type', 'Often a list, such as "Pour In Place Rubber, Sand"; 270 rows are "Sand" alone', 'A list cannot be matched with an exact equals sign'],
          ['Spelling', 'One row writes "Pour in Place Rubber, Sand" with a small "in"; one writes "Engineered Wood Fiber" while 214 write "Fibre"', 'Real data is typed by people, and people are not consistent']
        ] },
        { kind: 'code', label: 'Our program &middot; playground_picker.py', lang: 'python', code: PICKER },
        { kind: 'code', label: 'What it printed on the city\'s file', lang: 'text', code: PICKER_OUT, note: 'Three conditions joined with <b>and</b> keep 155 of the 662 playgrounds. The program prints only the first three names so the screen stays readable.' },
        { kind: 'table', mt: true, caption: 'The same question asked three wrong ways, and what each one printed (our runs on the same file)', head: ['What the child wrote', 'Playgrounds kept', 'What went wrong'], rows: [
          ['and between all three conditions (our program)', '155', 'Nothing: every kept playground passes every check'],
          ['Surface Type == "Pour In Place Rubber"', '56', 'An equals sign wants the whole cell to match, so "Pour In Place Rubber, Sand" fails'],
          ['little_kids or wheelchair', '622', 'Or keeps a playground that passes either check, so nearly every row survives'],
          ['"Pour In Place Rubber" in the surface, without .lower()', '150 instead of 151 for that phrase', 'The one row spelled with a small "in" quietly disappears']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How a class runs this project',
          left: [
            'Nobody types first. The teacher shows ten rows of the file on screen, and the children sort them by hand into "fits" and "does not fit", saying out loud which check each row failed. Only then do they write the three conditions, one per line, and name each one in plain words: little_kids, soft_ground, wheelchair.',
            'Then they guess. Before running the program, each child writes down how many playgrounds they expect. Guesses are usually far off in one direction or the other, and the gap between guess and answer starts the liveliest conversation of the lesson.'
          ],
          rightH3: 'What the child should be able to say afterwards',
          right: [
            '"And means every check must pass; or means one is enough." "An equals sign is too strict when a cell holds a list." "Unknown is not the same as no." Three sentences, each tested against real numbers the child produced.',
            'Those are the same ideas the Ontario Grade 5 expectation calls conditional statements, met here on a question a real Alberta family could ask.'
          ] },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://data.edmonton.ca/" rel="noopener" target="_blank">City of Edmonton Open Data</a>, Playgrounds. Contains information licensed under the Open Government Licence, City of Edmonton. The licence allows use "including for commercial purposes". Counts, code and output are ours; the city does not endorse this page.' }
      ]
    },
    {
      id: 'puzzles', tint: 'deep', eyebrow: 'Try it at home',
      h2: 'Six "and, or, not" puzzles for the kitchen table',
      lede: 'We wrote these for parents and children to do together, with no computer. Each one uses the same idea as the playground program. Answers follow the list; cover them first.',
      body: [
        { kind: 'ol', items: [
          '<b>The mitten drawer.</b> A drawer holds 4 red mittens and 3 blue mittens, and 2 of the red ones have holes. How many mittens are red <i>and</i> have no holes?',
          '<b>Snow day rule.</b> A made-up school closes if snow is over 20 cm <i>or</i> the temperature is below minus 35. Monday: 25 cm and minus 10. Tuesday: 5 cm and minus 38. Wednesday: 10 cm and minus 20. Which days does it close?',
          '<b>The same rule with and.</b> Now the school closes only if snow is over 20 cm <i>and</i> it is below minus 35. Using the same three days, which days close?',
          '<b>Library line-up.</b> Children may borrow a graphic novel if they are at least 8 <i>and not</i> owing a book. Maya is 9 and owes one. Liam is 7 and owes none. Ava is 10 and owes none. Who can borrow?',
          '<b>Hockey cards.</b> A child keeps a card if the team is from Canada <i>or</i> the player is a goalie. Out of 10 cards, 6 are Canadian teams and 3 are goalies, and 2 of those goalies play for Canadian teams. How many cards are kept?',
          '<b>Write your own.</b> Choose three facts about your street, such as "has a tree", "has a red door", "has a number over 50". Write one rule with and and one with or, then count the houses each rule keeps. Which rule kept more, and why must it?'
        ] },
        { kind: 'p', mt: true, html: '<b>Answers.</b> 1: two (4 red minus 2 with holes). 2: Monday and Tuesday, because each passes one check. 3: none, because no day passes both. 4: Ava only; Maya owes a book and Liam is under 8. 5: seven; count the 6 Canadian cards, then add only the goalie who is not already counted (3 goalies minus the 2 already in). 6: the or rule always keeps at least as many houses as the and rule, because every house that passes both checks also passes one of them.' },
        { kind: 'p', html: 'Puzzle 5 is the one adults get wrong most often: adding 6 and 3 to make 9 counts two cards twice. It is the same mistake a program makes when it counts a playground once for each condition it passes.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests and clubs',
      h2: 'Contests open to Canadian children this school year',
      lede: 'A first contest is a good goal for a child who likes puzzles, as long as nobody treats it as an exam. CEMC, at the University of Waterloo, puts it plainly on its contest pages: "Our contests are not tests or exams. There is no passing or failing score."',
      body: [
        { kind: 'table', caption: 'Contests and programmes for children aged 6 to 12, from the organisers\' own pages (read 22 October 2026)', head: ['Contest or programme', 'Who it is for', 'What the organiser says'], rows: [
          ['Beaver Computing Challenge, Grade 5/6 (CEMC)', '"Students in Grade 6 or below"', '"12 multiple-choice questions out of a total of 60"; "45 minutes"; questions "only require familiarity with concepts covered in the mathematics curriculum across all Canadian provinces"'],
          ['BCC 2026 dates', 'Schools in North and South America', '"Monday, November 9, 2026 to Friday, November 20, 2026"; schools order by "Monday, October 26, 2026"'],
          ['BCC language', 'All levels', '"This contest is available in English only."'],
          ['BCC 2025 Grade 5/6 results', 'Last year\'s writers', '14 260 contestants, with a mean of 37.22 out of 60'],
          ['Problem of the Week (CEMC)', 'Grades 3 to 12, through a teacher', '"e-mailed to educators for use with their students from Grades 3 to 12"'],
          ['FIRST LEGO League (FIRST Robotics Canada)', 'Ages 4 to 14', 'It "introduces STEM to children ages 4-14 through fun, exciting hands-on learning"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How a child enters the BCC',
          left: [
            'Through a school only. CEMC says "all students must participate through their school", so a parent\'s first step is an email to the child\'s teacher or principal, well before the October ordering deadline. CEMC suggests another local school if the child\'s own does not take part.',
            'The BCC needs no programming. Its multiple-choice puzzles, in CEMC\'s words, only ask for familiarity with the math every Canadian province teaches, so it suits a child who has done some coding and one who never has.'
          ],
          rightH3: 'Reading last year\'s numbers sensibly',
          right: [
            'CEMC\'s 2025 table shows 14 260 children writing the Grade 5/6 paper with an average of 37.22 out of 60, which is about 62 percent (our arithmetic: 37.22 / 60). A typical child got most questions right and some wrong, which is the point of a well-made puzzle contest.',
            'We prepare children with puzzles we write ourselves and send families to CEMC\'s free past contests for the real thing. We never copy CEMC\'s questions onto our pages.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/bcc" rel="noopener" target="_blank">CEMC, Beaver Computing Challenge</a>, <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/how-contests-work" rel="noopener" target="_blank">How contests work</a>, <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/potw" rel="noopener" target="_blank">Problem of the Week</a> and <a class="ag-inline-link" href="https://www.firstroboticscanada.org/" rel="noopener" target="_blank">FIRST Robotics Canada</a>, read 22 October 2026. Modern Age Coders is not connected with CEMC or FIRST.' }
      ]
    },
    {
      id: 'thinking', tint: 'deep', eyebrow: 'Thinking first',
      h2: 'Children who explain their code, not children who copy it',
      lede: 'Our promise to families anywhere in the world is the same: we teach children to think through a problem and solve it, not to copy an answer from a video or an AI tool. For a child of 6 to 12 that promise has a very practical shape.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Predict, then run', p: 'Before any program runs, the child says what it will do. A wrong prediction is the most useful thing that can happen in a lesson, because it shows exactly which idea is still fuzzy.' },
          { h3: 'Read it back aloud', p: 'Every line a child writes, they can read back as a sentence. "If the ground is soft and the child is little" is a sentence; a line the child cannot say aloud is a line they do not own yet.' },
          { h3: 'Fix your own bug', p: 'The teacher points to where a problem is, never types the fix. Finding the bug is the skill; the corrected program is only the receipt.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where AI tools fit for children',
          left: [
            'Mostly, they do not, and the companies say so. OpenAI\'s help centre states that "ChatGPT is not meant for children under 13", and Anthropic\'s terms require Claude users to be at least 18. Children in our classes write their own code with a teacher. Our courses never ask a child to open an account on a service that does not allow their age, and the youngest see AI tools only in demonstrations the teacher runs.',
            'Children do learn what AI is: how a program can learn a rule from examples and where it goes wrong. That is taught with tools and exercises chosen for their age, and our separate page on AI classes for kids covers it.'
          ],
          rightH3: 'What a parent sees after each class',
          right: [
            'A short note: what the child built, the idea underneath it, and one question to ask at dinner, such as "what does or do in your program?" A child who can answer that has learned something a screen recording cannot show.',
            'Over a term the notes add up to a picture of how the child thinks, which matters more than the number of projects finished.'
          ] }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'From Victoria to St. John\'s',
      h2: 'Class times for families in every Canadian time zone',
      lede: 'Children join from every province, and since 2026 several provinces have stopped changing their clocks. We book times in the family\'s own zone and check them again whenever Eastern clocks move. No class time below is fixed; each family picks a slot.',
      body: [
        { kind: 'table', caption: 'Clock offsets from UTC for the 2026 to 2027 school year (IANA time zone database, release 2026e)', head: ['Families in', 'From 1 November 2026', 'From 14 March 2027'], rows: [
          ['British Columbia (most of the province) and Yukon', 'UTC-7', 'UTC-7: BC has kept one clock since 8 March 2026'],
          ['Alberta and Saskatchewan', 'UTC-6', 'UTC-6, no change'],
          ['Manitoba', 'UTC-5', 'UTC-5, no change from 1 November 2026'],
          ['Ontario and Quebec, Eastern time', 'UTC-5', 'UTC-4'],
          ['Nova Scotia, New Brunswick and Prince Edward Island, Atlantic time', 'UTC-4', 'UTC-3'],
          ['Newfoundland time', 'UTC-3:30', 'UTC-2:30']
        ] },
        { kind: 'p', mt: true, html: 'For younger children we favour weekend mornings and the hour straight after school, while attention is still fresh. A Saturday morning class in Winnipeg and one in Toronto sit at the same clock time all winter, since both are on UTC-5 from 1 November 2026; in summer Toronto moves an hour ahead. Our teachers work from India, so a weekend morning in Canada falls in the Indian evening, which is why those slots are easy to offer.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Four rungs',
    h2: 'From first block to first real program',
    lede: 'The steps we watch for, whatever the child\'s age. They are ours, used to place a child fairly.',
    table: { caption: 'Our four rungs for children aged 6 to 12', head: ['Rung', 'What it looks like'], rows: [
      ['1. Order', 'Puts steps in the right order and spots one that is out of place'],
      ['2. Repeat', 'Uses a loop instead of copying the same block five times'],
      ['3. Decide', 'Writes a rule with if, and can say what happens when it is false'],
      ['4. Combine', 'Joins conditions with and, or and not, and tests each on purpose']
    ] },
    left: { h3: 'For parents', ps: [
      'A child can sit on one rung for a whole term and that is fine. Rushing to rung 4 makes children who type confidently and understand little.',
      'If your child is in Ontario, rungs 1 to 3 line up roughly with the Grade 1 to Grade 5 coding lines in math.'
    ] },
    right: { h3: 'For children', ps: [
      'Say what your program will do before you press run. If you are wrong, you just found out something.',
      'When you are stuck, read your code aloud slowly. Bugs are shy; they come out when they are read.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Canadian children',
    lede: 'Every course is taught live by a teacher, in a batch or one to one, for children in any province or territory.',
    bands: [
      { num: 'I', h3: 'Think and make', sub: 'Ages 7 to 12', courses: [
        { code: 'KC / MAKE / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Logic and patterns, for ages 7 to 12.' },
        { code: 'KC / MAKE / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Scratch, Roblox and Minecraft, ages 8 to 12.' },
        { code: 'KC / MAKE / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'From blocks to real code, ages 7 to 12.' }
      ] },
      { num: 'II', h3: 'Apps, websites and AI', sub: 'Ages 8 to 14', courses: [
        { code: 'KC / BUILD / 01', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'Real apps built with blocks, ages 8 to 12.' },
        { code: 'KC / BUILD / 02', slug: 'kids-ai-web-development-course', title: 'Web development for kids', blurb: 'Real websites, ages 9 to 12.' },
        { code: 'KC / BUILD / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI learns and where it fails, ages 8 to 14.' }
      ] },
      { num: 'III', h3: 'Typed code and math', sub: 'Ages 8 to 15', courses: [
        { code: 'KC / TYPE / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Luau scripts in Roblox Studio, ages 8 to 14.' },
        { code: 'KC / TYPE / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'First real code and puzzles, ages 9 to 12.' },
        { code: 'KC / TYPE / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Math learned in Python, ages 10 to 15.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live classes sized for a child\'s week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Right after school, booked in your own province\'s time.' },
      { time: 'Weekends', l: 'Mornings, when younger children are at their sharpest.' },
      { time: '1-on-1', l: 'A teacher for one child, paced to that child.' }
    ],
    cells: [
      { h3: 'Grouped by age', p: 'Six year olds and twelve year olds are never in one batch.' },
      { h3: 'Same teacher', p: 'One regular teacher who learns how the child thinks.' },
      { h3: 'Short and busy', p: 'Younger classes keep every few minutes active.' },
      { h3: 'Parent notes', p: 'A few lines after each class, in plain words.' },
      { h3: 'Blocks to Python', p: 'Scratch first; typed code when the child is ready.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty in a batch, or one child alone.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Our younger students start with small games and grow into projects like these. The <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Google reviews left by parents and students, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly fee covers eight live classes. Families pay a month at a time and can stop between months, so a child who loses interest costs nothing more.',
    free: ['A free first class', 'Placement by age and rung', 'No card details needed'],
    group: ['Fifteen to twenty children, grouped by age', 'One regular teacher', 'Weekday or weekend times', 'Paid monthly'],
    one: ['One teacher, one child', 'Times that fit your family', 'Paced to how your child learns']
  },

  faq: {
    eyebrow: 'Parents in Canada ask',
    h2: 'Coding for kids in Canada: questions from parents',
    items: [
      { q: 'What age can a child start coding classes?', a: 'Our Coding for Kids and Scratch courses take children from age 6, grouped by age. The youngest work in picture blocks with the teacher reading instructions aloud. Most children move to typed Python at about 10.' },
      { q: 'Do Canadian schools already teach coding to kids?', a: 'It depends on the province. Ontario puts coding in elementary math from Grade 1, under expectation C3.1. British Columbia has design modules in Grades 6 and 7 that can include visual programming such as Kodu or Scratch. Alberta\'s draft curriculum for Grades 7 to 9 adds computer science and AI.' },
      { q: 'Is Scratch or Python better for my child?', a: 'Scratch for most children under 9, because blocks take typing and spelling out of the way. Python from about 10, when a child can type a line accurately and read it back. Our teachers place each child in the first class rather than by age alone.' },
      { q: 'Will these classes follow my child\'s school curriculum?', a: 'They sit alongside it. For Ontario children we know which coding lines in math each grade meets, and we teach the same ideas in more depth. We are not connected with any ministry and do not replace school coding.' },
      { q: 'Can a child aged 6 manage a live online class?', a: 'Yes, with a short, busy session and a parent close by for the first few weeks. Six and seven year olds are grouped together, and the teacher keeps the instructions spoken and simple.' },
      { q: 'What is the Beaver Computing Challenge?', a: 'A short puzzle contest run by CEMC at the University of Waterloo. The Grade 5/6 level is for students in Grade 6 or below: 12 multiple-choice questions out of 60 in 45 minutes. It needs no programming, and children enter through their school.' },
      { q: 'Do kids use ChatGPT or other AI tools in your classes?', a: 'Not on accounts of their own. OpenAI says ChatGPT is not meant for children under 13, and Claude requires users to be 18 or older. Our courses never ask a child to sign up for a service that does not allow their age; children write and explain their own code and learn how AI works through teacher-run demonstrations and exercises.' },
      { q: 'What times are the classes for Canadian families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We book every class in your own province\'s time zone.' },
      { q: 'How big are the groups?', a: 'A batch has fifteen to twenty children of a similar age with one regular teacher. One-to-one classes are also available for a child who wants a teacher to themselves.' },
      { q: 'What will my child actually build?', a: 'In the first months, small Scratch games with rules the child invents. Older children build programs that answer real questions, such as our Edmonton playground picker, which reads the city\'s open data and keeps the playgrounds that pass three checks.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian families with children who like to make things.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Every page we have for families across the country.' },
      { href: '/canada-coding-curriculum-by-province', label: 'Coding curriculum by province', p: 'Where coding sits in each provincial curriculum.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'For families in Ontario.' },
      { href: '/coding-classes-in-british-columbia', label: 'Coding classes in British Columbia', p: 'For families in BC.' },
      { href: '/coding-classes-in-alberta', label: 'Coding classes in Alberta', p: 'For families in Alberta.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'Our Scratch teaching in depth.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'What typed code looks like at ten.' },
      { href: '/ai-literacy-for-elementary-students', label: 'AI literacy for elementary students', p: 'How children can learn what AI is.' },
      { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer', p: 'Breaking a problem into steps.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class is a short, friendly lesson with one of our teachers: a small puzzle, a few blocks or a few typed lines, depending on age. By the end the teacher can tell you which rung your child is on and which course fits.',
    readFirst: 'Want to look around first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a live lesson, and the <a class="ag-inline-link" href="/courses">full course list</a> has every syllabus.',
    note: 'Classes are live over video with teachers based in India, so there is nothing to drive to in any province. WhatsApp reaches us fastest.',
    formNote: 'Free, and we never ask for a card.'
  },

  footer: {
    cols: [
      { h4: 'For children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding' },
        { href: '/ai-literacy-for-elementary-students', label: 'AI literacy' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/canada-coding-curriculum-by-province', label: 'Curriculum by province' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'And means every check passes'
  },

  personalityCss: `
.ag-root.ag-kc .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-kc .ag-capsule { border-left-width: 6px; border-radius: 4px; }
.ag-root.ag-kc .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-kc .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-kc .ag-band-head h3 { letter-spacing: -0.004em; }
.ag-root.ag-kc .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario DCP API (Elementary Mathematics 2020 C3.1 for Grades 1, 3, 5 and 6; Science and Technology 2022 Grade 6 A2.1), BC curriculum ADST 6-7 core and ADST 6 computational thinking, alberta.ca curriculum history page, CEMC BCC, How contests work and POTW pages, FIRST Robotics Canada home page, OpenAI help centre on ChatGPT ages and Anthropic consumer terms, all read 22 October 2026; City of Edmonton Playgrounds open data under the Open Government Licence, City of Edmonton.',
    localProject: 'The Edmonton playground picker: an original Python program that reads the City of Edmonton playground file (662 rows) and keeps the playgrounds that suit a toddler, have rubber ground and are wheelchair accessible (155), with three wrong versions run on the same file (56 with an equals sign, 622 with or, 150 versus 151 without lower()). Plus six original and, or, not puzzles with answers. Lesson family: combining conditions.',
    requiredMentions: ['Hudson Park Playground', 'Engineered Wood Fiber', 'checked 662 playgrounds', 'matches 155', 'little_kids or wheelchair', 'Pour in Place Rubber, Sand', 'The mitten drawer', 'Junior/Senior (18 months to 12 years)', 'And means every check passes'],
    sources: [
      { claim: 'Ontario elementary math coding expectations C3.1, Grades 1, 3, 5 and 6; Grade 6 science coding.', url: 'https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics' },
      { claim: 'BC ADST 6-7 modules and visual programming in the Grade 6 computational thinking module.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/6/core' },
      { claim: 'Alberta K to 6 math implementation and the draft Grades 7 to 9 curriculum with computer science and AI.', url: 'https://www.alberta.ca/curriculum-how-we-got-here' },
      { claim: 'Beaver Computing Challenge Grade 5/6 eligibility, format, dates, language and 2025 results.', url: 'https://cemc.uwaterloo.ca/contests/bcc' },
      { claim: 'FIRST LEGO League ages 4 to 14.', url: 'https://www.firstroboticscanada.org/' },
      { claim: 'ChatGPT is not meant for children under 13.', url: 'https://help.openai.com/en/articles/8313401-is-chatgpt-safe-for-all-ages' },
      { claim: 'Edmonton playgrounds open data and its licence.', url: 'https://data.edmonton.ca/api/views/9nqb-w48x/rows.csv?accessType=DOWNLOAD' }
    ],
    rejectedClaims: [
      'Elementary coding expectations for Quebec, Manitoba, Saskatchewan, the Atlantic provinces and the territories: no primary page read, so none described.',
      'An age range for Scratch from the Scratch site: its pages rendered only by JavaScript, so no age is quoted.',
      'That "Unknown" accessibility means a playground is not accessible: refused; the page says the opposite.',
      'A combined BCC participation total across levels: not printed; only the Grade 5/6 figure is used.',
      'That our classes raise contest results or school marks: refused.',
      'Any affiliation with a ministry, CEMC, FIRST or the City of Edmonton: none, and the page says so.'
    ]
  }
};
