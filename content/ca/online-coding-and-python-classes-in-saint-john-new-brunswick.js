'use strict';
// Saint John, New Brunswick (cg- city page, Canada cluster Wave 2, row 140, slug shape online-coding-and-python-classes-in-).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Shape from content/ca/coding-and-ai-classes-in-toronto.js, prose fresh.
// Spine: one live lesson seen from the learner's side, stage by stage; a Python path; a Python and math project on the
// City of Saint John civic address points whose lesson is the first-digit (Benford) distribution and a bilingual
// designator table that does not map one to one; New Brunswick Computer Science 110 and the province's two official
// languages; Atlantic time and the 1 November 2026 change.
// Sources, read raw 22 to 23 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/online-coding-and-python-classes-in-saint-john-new-brunswick/):
//  - City of Saint John, ArcGIS item 88d9dbea7fad4767a9870c5666ec4c71 "Civic Addresses" (item-88d9...json): "Point features
//    that represent civic addresses. Attributes include civic number and street name. This dataset is the official source
//    for civic address information for the City of Saint John." Service .../Civic_Addresses/FeatureServer/1 (layer.json:
//    maxRecordCount 4000; fields Civic_Numb, English_Designator, French_Designator, Street_Name and others); count 25,577;
//    read with 7 paged queries on 22 October 2026 (pages/), combined into saint-john-civic-addresses.csv (sha256
//    510e18ee...536e; geometry, full-address and editor fields not pulled). Portal catalogue-saintjohn.opendata.arcgis.com
//    (hub domain record "The City of Saint John").
//  - Licence (licenseInfo in the item): "Open Government Licence - City of Saint John" (en dash in source, written as a
//    hyphen); "including for commercial purposes"; attribution "Contains information licensed under the Open Government
//    Licence - City of Saint John" (en dash in source); non-endorsement clause; "Version 01.0 dated: 2015-03-02".
//  - New Brunswick (facts-schools-contests.md; raw ca/src/other-provinces/nb-computer-science-110.txt): CS 110 "Learners will
//    gain a strong foundation in coding while demonstrating operational skills, using computational thinking"; heading
//    "GRADE 11"; achievement indicators "Create pseudocode to represent a solution to a problem", "Parse one complete logical
//    line of code in a script or code block", comments with AI-assisted explanation tools "while maintaining student
//    authorship"; subcluster list includes Computer Science 110, Computer Science 120, Cybersecurity 120, Cybersecurity and
//    Technical Support 110, Technology 9.
//  - Canadian Charter s.16(2) (facts-geo.md, src/geo/lang/constitution_page-12.html): "English and French are the official
//    languages of New Brunswick and have equality of status".
//  - facts-geo.md: Saint John CMA on America/Moncton, Atlantic UTC-3 to 1 November 2026, UTC-4 to 14 March 2027 (IANA tzdb
//    2026e); area codes 428 and 506 (CNAC files via the Internet Archive). CEMC: CCC Wednesday 17 February 2027, "available in
//    English and French"; BCC 9 to 20 November 2026, "available in English only"; through-a-school rule.
//  - brand-facts.json: free first class "30-45 minutes"; group 15 to 20.
// Our own calculations (analysis.py, analysis2.py, first_digits.py; python -I; *.out.txt): 25,577 rows, all Civic_Type
// "Posted"; 176 civic numbers not whole numbers (e.g. "57 1/2", "107 A", "37A"); 25,401 whole numbers; first digits 1: 7,970
// (31.4%), 2: 4,765 (18.8%), 3: 3,013 (11.9%), 4: 2,334 (9.2%), 5: 1,974 (7.8%), 6: 1,645 (6.5%), 7: 1,260 (5.0%), 8: 1,276
// (5.0%), 9: 1,164 (4.6%), against Benford shares 30.1, 17.6, 12.5, 9.7, 7.9, 6.7, 5.8, 5.1, 4.6; number lengths 1 digit
// 1,947, 2 digits 11,095, 3 digits 10,471, 4 digits 1,887, 5 digits 1 (largest 10050); designators Street/rue 7,013,
// Road/chemin 5,022, Drive/promenade 3,516, Avenue/avenue 3,270, Court/cour 1,590, Crescent/croissant 1,565, Lane/allee
// 767; Place 410 and Plaza 6 both map to French "place" (416); 48 distinct non-blank English designators, 47 French (reverse_dict.py: place maps back to Place); 7 rows with a
// blank English designator; 1,135 distinct street names. No individual address printed. Lesson family: digit
// distributions, percentages, one-to-many translation tables.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  'import math',
  '',
  'counts = {}',
  'skipped = 0',
  'with open("saint-john-civic-addresses.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        number = row["Civic_Numb"].strip()',
  '        if not number.isdigit():',
  '            skipped += 1',
  '            continue',
  '        first = number[0]',
  '        counts[first] = counts.get(first, 0) + 1',
  '',
  'total = sum(counts.values())',
  'print(total, "whole numbers,", skipped, "skipped")',
  'for digit in "123456789":',
  '    share = 100 * counts[digit] / total',
  '    benford = 100 * math.log10(1 + 1 / int(digit))',
  '    print(digit, counts[digit], round(share, 1), round(benford, 1))'
].join('\n').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'SAINT JOHN', label: 'Saint John', blurb: 'Live online Python for Saint John learners, with a civic address project on first digits, Benford\'s law and bilingual street types.' },
  market: CA,
  slug: 'online-coding-and-python-classes-in-saint-john-new-brunswick',
  code: 'psjn',
  accent: '#483C99',
  accentRationale: 'Saint John: a muted Fundy-dusk indigo, #483C99, allocated for this row and well away from the retired purple #a855f7; contrast 8.32 on the paper #FBF8F2 and at least 7.16 on all three paper tints',
  pageType: 'city',
  place: {
    name: 'Saint John',
    eyebrow: 'Saint John, New Brunswick',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New Brunswick' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Python in Canada', href: '/python-classes-in-canada' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Saint John',
  title: 'Online Coding and Python Classes in Saint John, NB | Live',
  description: 'Live online coding and Python classes for Saint John, NB learners aged 6 to adult: one live lesson explained, a Python path, and a project on the city address data.',
  ogDescription: 'One live online lesson seen from the learner\'s chair, a Python path by age, and a Python and math project on the City of Saint John\'s 25,577 civic address points.',
  twitterDescription: 'Saint John coding and Python classes, live online with a real teacher, on Atlantic time.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Saint John Learners',
    description: 'Live online coding and Python taught in English to Saint John, New Brunswick learners aged 6 to adult, in a group of fifteen to twenty or one to one, from first programs to data and math projects.'
  },

  h1: 'Online coding and Python classes in Saint John, New Brunswick',
  capsuleQ: 'Can a learner in Saint John, New Brunswick take live Python classes online?',
  capsule: 'Yes. Modern Age Coders gives Saint John learners, from age 6 to adult, live online coding and Python lessons with a teacher, in a group of fifteen to twenty or one to one. Children typically begin with Python and AI for Kids, teens with Python for Teens and adults with the Python Masterclass. The first lesson is free.',
  lead: 'Saint John families who look for coding classes find plenty of apps and video courses, and fewer people who will actually sit with a learner while the code goes wrong. That is what a live online class is for. Below we describe one lesson from the learner\'s side of the screen, lay out a Python path from age 9 to adulthood, walk through a Python and math project on the City of Saint John\'s own address file, and set out what New Brunswick schools already teach in Computer Science 110.',
  wa: 'Hello Modern Age Coders, I would like a free live Python class for a learner in Saint John, New Brunswick.',

  picks: {
    eyebrow: 'Python courses for Saint John',
    h2: 'Four Python courses, including one with a certificate at the end',
    intro: 'A Python course for each age group, and certification preparation for teens and adults who want an outside benchmark of their Python.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'A first proper programming language for children: games, drawings and quizzes built line by line, with the child explaining each one.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from the first program to files, dictionaries and data, which is the toolkit the address project below relies on.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Adults with no coding background build real Python habits, from clean functions to reading and writing files.' },
      { course: 'pcep-pcap-python-certification-course', band: 'Teens and adults', note: 'Preparation for the Python Institute PCEP and PCAP exams, for learners who want a recognised check on what they know.' }
    ]
  },

  sections: [
    {
      id: 'lesson', tint: '', eyebrow: 'One live lesson',
      h2: 'A live online Python lesson, seen from the learner\'s chair',
      intro: 'What does a Saint John teenager actually do during a live online class? These are the stages of a typical lesson in our group classes, in the order they happen.',
      body: [
        { kind: 'table', caption: 'The stages of one live group lesson (our own description of how we teach; one-to-one lessons follow the same shape)', head: ['Stage', 'The teacher', 'The learner'], rows: [
          ['Warm-up', 'Puts last lesson\'s program on screen with one line changed', 'Predicts what it will print before anyone runs it'],
          ['New idea', 'Explains one idea, for instance counting with a dictionary, with a tiny example', 'Asks questions; nobody is expected to follow silently'],
          ['Try it', 'Watches screens and stops at the first learner who is stuck', 'Types the code on their own computer and runs it'],
          ['Break it', 'Asks the group to make the program fail on purpose', 'Reads the error message aloud and finds the line'],
          ['Explain it', 'Picks two different working solutions to compare', 'Says in plain words why each one works'],
          ['Take it away', 'Sets one short task to do alone', 'Does it before next lesson without an AI tool writing it']
        ] },
        { kind: 'p', text: 'The "break it" stage is the one parents notice. A learner who changes <code>counts[first] + 1</code> to <code>counts[frist] + 1</code> sees Python complain that frist is not defined, and learns more about variables from that one typo than from a page of notes. A live teacher turns the mistake into the lesson; a video cannot, because it does not know the mistake happened.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Getting started', p: 'Send the form or a WhatsApp message with an age or grade. We arrange a free lesson of 30 to 45 minutes and recommend a level at the end of it.' },
          { h3: 'Equipment', p: 'A laptop or desktop, headphones or speakers, and an internet connection good enough for a video call. Python 3 is free and is installed together in the first lessons.' },
          { h3: 'Language of teaching', p: 'Every lesson is in English. New Brunswick has two official languages, and learners from French-language schools are welcome; Python looks the same either way.' }
        ] }
      ]
    },
    {
      id: 'addresses', tint: 'deep', eyebrow: 'Saint John data project',
      h2: 'Why do so many Saint John house numbers start with 1? Python, math and the city address file',
      intro: 'The City of Saint John publishes its civic address points, which it calls "the official source for civic address information for the City of Saint John", as open data under the Open Government Licence - City of Saint John. Our students use them to test a famous piece of math. The counts are ours, from data read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'First digit of the 25,401 whole-number civic numbers in the City of Saint John file, against the share Benford\'s law predicts (our count and our calculation)', head: ['First digit', 'Addresses', 'Share in Saint John', 'Benford\'s law predicts'], rows: [
          ['1', '7,970', '31.4%', '30.1%'],
          ['2', '4,765', '18.8%', '17.6%'],
          ['3', '3,013', '11.9%', '12.5%'],
          ['4', '2,334', '9.2%', '9.7%'],
          ['5', '1,974', '7.8%', '7.9%'],
          ['6', '1,645', '6.5%', '6.7%'],
          ['7', '1,260', '5.0%', '5.8%'],
          ['8', '1,276', '5.0%', '5.1%'],
          ['9', '1,164', '4.6%', '4.6%']
        ] },
        { kind: 'p', text: 'The script behind the table. It uses only Python\'s standard library, skips anything that is not a whole number, and prints both shares side by side:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Clean before you count', p: 'The layer holds 25,577 address points. 176 of the civic numbers are not plain whole numbers, values like 57 1/2, 107 A or 37A, so the script counts and skips them openly rather than crashing or guessing.' },
          { h3: '2. The math', p: 'Benford\'s law says that in many real collections of numbers the first digit d appears with probability log10(1 + 1/d), about 30.1% for a 1 and 4.6% for a 9. Saint John\'s civic numbers come close: 31.4% start with 1 and 4.6% with 9.' },
          { h3: '3. Why it happens here', p: 'Numbering starts low on every street and only long streets reach the thousands. In this file 1,947 numbers have one digit, 11,095 two, 10,471 three and 1,887 four, and the largest is 10050. Students explain how that spread pushes the first digit toward 1.' }
        ] },
        { kind: 'table', mt: true, caption: 'Street designators in the same file, in English and French (our count of address points; the file stores both)', head: ['English designator', 'French designator', 'Address points'], rows: [
          ['Street', 'rue', '7,013'],
          ['Road', 'chemin', '5,022'],
          ['Drive', 'promenade', '3,516'],
          ['Avenue', 'avenue', '3,270'],
          ['Court', 'cour', '1,590'],
          ['Crescent', 'croissant', '1,565'],
          ['Place and Plaza', 'place', '410 and 6']
        ] },
        { kind: 'callout', h3: 'A translation table that is not one to one', p: 'Leaving out blanks, the file has 48 different English designators but only 47 French ones, because Place and Plaza both become place. A student who builds an English-to-French dictionary from it works fine; one who builds the reverse dictionary finds that place now means Place, and the 6 Plaza points have silently changed type. Seven rows have no designator in either language. Finding that kind of quiet loss is what data work in a bilingual city looks like.' },
        { kind: 'p', text: 'We never print individual addresses; the project uses only counts. Contains information licensed under the Open Government Licence - City of Saint John (<a class="cg-inline-link" href="https://catalogue-saintjohn.opendata.arcgis.com/">open data catalogue</a>, <a class="cg-inline-link" href="https://www.arcgis.com/home/item.html?id=88d9dbea7fad4767a9870c5666ec4c71">dataset and licence text</a>). The licence carries no endorsement of our classes, and the City gives none.' }
      ]
    },
    {
      id: 'nb', tint: 'tint', eyebrow: 'New Brunswick schools',
      h2: 'Computer Science 110 and the rest of what New Brunswick schools offer',
      intro: 'Saint John high schools follow New Brunswick\'s curriculum framework. We read the province\'s curriculum site on 22 October 2026; words in quotation marks are the province\'s.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Computer Science 110', p: 'Listed under Grade 11, the course says "Learners will gain a strong foundation in coding while demonstrating operational skills, using computational thinking". Its achievement indicators include "Create pseudocode to represent a solution to a problem".' },
          { h3: 'AI, with authorship kept', p: 'Computer Science 110 allows AI-assisted tools for explaining and debugging code, and on comments it adds the condition "while maintaining student authorship". That is the line we hold in our classes too: help is fine, handing in a tool\'s work is not.' },
          { h3: 'The wider subcluster', p: 'The digital and information technology courses listed beside it include Computer Science 120, Cybersecurity 120, Cybersecurity and Technical Support 110 and Technology 9.' }
        ] },
        { kind: 'p', text: 'Another Computer Science 110 indicator asks students to "Parse one complete logical line of code in a script or code block". The digit-counting script above has a good candidate: <code>share = 100 * counts[digit] / total</code>. Saying out loud what each part does, in order, is a skill we practise every lesson, and it transfers straight into the course.' },
        { kind: 'table', mt: true, caption: 'CEMC computing contests for Saint John students in 2026 to 2027 (dates and language notes as listed by CEMC on 22 October 2026)', head: ['Contest', 'Who', 'Date', 'Language'], rows: [
          ['Beaver Computing Challenge', 'Grade 10 or below, no coding needed', '9 to 20 November 2026', 'English only'],
          ['Canadian Computing Competition', 'Junior or Senior, by skill not grade', 'Wednesday 17 February 2027', 'English and French']
        ] },
        { kind: 'callout', h3: 'Our place beside school', p: 'We teach alongside school courses and do not grant New Brunswick credits. CEMC contests are entered through a school, since CEMC says "all students must participate through their school". We are not connected with the New Brunswick Department of Education and Early Childhood Development, any school district, CEMC or the City of Saint John.' }
      ]
    },
    {
      id: 'atlantic', tint: '', eyebrow: 'Atlantic time',
      h2: 'Saint John on Atlantic time, one of the nearest Canadian clocks to India\'s',
      intro: 'Saint John keeps Atlantic time, an hour ahead of Toronto. That makes it one of the easier places in Canada to schedule with teachers in India, and the November change shifts things by an hour.',
      body: [
        { kind: 'table', caption: 'Sample Saint John class times and the same moment in India, 2026 to 2027 (Atlantic offsets from the IANA tz database 2026e; our arithmetic; examples, not fixed batches)', head: ['Season', 'Saint John offset', '4 pm Thursday in Saint John', '9 am Saturday in Saint John'], rows: [
          ['Late October 2026', 'UTC-3', '12:30 am Friday in India', '5:30 pm Saturday in India'],
          ['From 1 November 2026', 'UTC-4', '1:30 am Friday in India', '6:30 pm Saturday in India'],
          ['From 14 March 2027', 'UTC-3', '12:30 am Friday in India', '5:30 pm Saturday in India']
        ] },
        { kind: 'p', text: 'A Saturday morning class in Saint John falls in the Indian evening, which suits everybody, and after-school weekday classes land around midnight to the early hours in India, which our teachers plan for. Before each clock change we send every time again in Atlantic time. The whole country is set out on our <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones page</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The Python path',
    h2: 'A Python route for Saint John learners, from first blocks to certification',
    intro: 'Ages are approximate. The free lesson finds the right rung by seeing what the learner can already do.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Thinking in steps', p: 'Blocks and puzzles that teach order, repeats and choices, so typed code later feels familiar rather than strange.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 9 to 12', h3: 'Writing Python', p: 'Real Python typed by hand, with drawings and games; variables, loops and if statements, each one explained back.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Ages 13 to 18', h3: 'Python with data', p: 'Files, dictionaries and real data like the address points, then Computer Science 110 support, contests or data science.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Adults', h3: 'Python and a benchmark', p: 'From zero to confident scripts, then PCEP and PCAP preparation for those who want a certificate to show.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'pcep-pcap-python-certification-course'] }
    ]
  },

  ai: {
    eyebrow: 'Python and AI',
    h2: 'An AI tool will happily lose your Plaza addresses',
    intro: 'Because nothing tells it they matter.',
    p1: 'Ask an assistant to translate Saint John street types from French back to English using the city file and it will build a dictionary in one line. Place and Plaza both map to place, so the reverse dictionary keeps one and drops the other. The code runs, the output looks tidy, and 6 address points have quietly changed street type.',
    p2: 'Our teaching is about thinking first: what does each column mean, can two values collide, what should the total be before and after? Older learners use AI tools in our classes, inside each tool\'s age rules, as a draft to test. New Brunswick asks for the same thing in its own words, help from AI "while maintaining student authorship".',
    closer: 'A learner who can explain why the Benford table looks the way it does has learned something no tool can hand over.',
    blogAnchor: 'is it still worth learning to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online classes for Saint John and southern New Brunswick',
    intro: 'Everything is taught live online. These are the arrangements that matter day to day.',
    cells: [
      { h3: 'Choose your times', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Group or private', p: 'A group class has fifteen to twenty learners working at the same stage. Private lessons give one learner a teacher alone, often chosen by adults and by certificate candidates.' },
      { h3: 'Nearby communities', p: 'Learners in Rothesay, Quispamsis, Grand Bay-Westfield and Hampton take exactly the same classes, all on Atlantic time with Saint John.' },
      { h3: 'Local numbers', p: 'Numbers on the 506 and 428 area codes work in the form. The country code is already in place, so only the ten digits are needed.' },
      { h3: 'School work', p: 'We explain school assignments and Computer Science 110 tasks but never write graded work. The learner submits only their own code.' },
      { h3: 'Free first lesson', p: 'Lesson one costs nothing and asks for no card. Afterwards you get a recommended level, course and time.' }
    ],
    spec: { title: 'No office in Saint John', p: 'Modern Age Coders has no centre in Saint John or anywhere in New Brunswick and claims none. Every lesson is live and online, in English, taught by teachers based in India.' }
  },

  fees: {
    h2: 'Fees for Saint John learners',
    intro: 'Three lines, each showing the currency for your region.',
    first: 'One complete live lesson, free, with a recommended level and course at the end.',
    group: 'The monthly fee for a class of fifteen to twenty learners at one level.',
    private: 'The monthly fee for a single learner with a teacher, at agreed times.',
    closer: 'Saint John learners pay the same fee as everyone in Canada. Payment begins only after the free lesson, once you have chosen a course and a time; the pricing page covers holidays and missed lessons.'
  },

  reviewsH2: 'Families and learners reviewing us on Google',

  book: {
    h2: 'Tell us about the Saint John learner',
    intro: 'Share an age or grade and a word about any coding so far. A young child might start with a Scratch-style maze; a Grade 11 student might start with the first-digit script.',
    success: 'Thank you. The team will be in touch soon about a free class in Saint John.'
  },

  faq: {
    h2: 'Saint John online Python and coding questions',
    intro: 'The questions families and adult learners in Saint John send us most.',
    items: [
      { q: 'Do you run coding classes in Saint John, New Brunswick?', a: 'Yes, live and online. There is no Saint John classroom. A teacher teaches each lesson in real time while the learner codes at home.' },
      { q: 'What happens during a live online lesson?', a: 'A warm-up prediction, one new idea, time to type and run it, a deliberate mistake to read and fix, then a short task to do alone before next time.' },
      { q: 'Are classes in English or French?', a: 'English. New Brunswick has two official languages, and learners from French-language schools are welcome in our English-taught classes.' },
      { q: 'What age is right for Python?', a: 'About 9 for most children. Those aged 6 to 8 start with blocks and puzzles. Teens and adults can go straight to Python.' },
      { q: 'How long is the free lesson?', a: 'Between 30 and 45 minutes, taught live at the learner\'s level. It finishes with a recommended course and time, and no card is needed.' },
      { q: 'Can adults in Saint John learn Python with you?', a: 'Yes. Adults start in the Python Masterclass. Some go on to PCEP and PCAP certification preparation, others to automation for work.' },
      { q: 'Do your classes count toward a New Brunswick high school credit?', a: 'No. Credits such as Computer Science 110 come from school. We teach alongside them with practice and projects, and never write graded work.' },
      { q: 'Can my teen prepare for the CCC?', a: 'Yes. CEMC lists the 2027 CCC for Wednesday 17 February 2027, in English and French. Students write it through their school; we prepare them with our own problems.' },
      { q: 'What time zone are Saint John classes in?', a: 'Atlantic time. Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Does a 506 phone number work in the form?', a: 'Yes. Numbers on 506 and 428 both work. Enter the ten digits and leave out the leading 1.' },
      { q: 'Where can I see what it costs?', a: 'The fees section on this page shows the free lesson, the monthly group fee and the monthly private fee, in your own currency. You pay nothing before the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'More for Canada',
    h2: 'Other pages for Saint John and Atlantic Canada learners',
    html: 'Start from <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a> or <a class="cg-inline-link" href="/python-classes-in-canada">Python classes in Canada</a>. The <a class="cg-inline-link" href="/canada-coding-curriculum-by-province">coding curriculum by province</a> compares New Brunswick with the rest of the country, and contest students can read about <a class="cg-inline-link" href="/beaver-computing-challenge-guide">the Beaver Computing Challenge</a> and <a class="cg-inline-link" href="/ccc-junior-guide">the CCC Junior</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Saint John and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/python-classes-in-canada', label: 'Python in Canada' },
    { href: '/canada-coding-curriculum-by-province', label: 'Curriculum by province' },
    { href: '/beaver-computing-challenge-guide', label: 'Beaver Computing Challenge' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canada time zones' }
  ],

  personalityCss: `
.cg-root.cg-psjn .cg-hero h1 { font-weight: 710; letter-spacing: -0.016em; line-height: 1.07; max-width: 20ch; }
.cg-root.cg-psjn .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-psjn .cg-eyebrow { letter-spacing: 0.1em; font-weight: 680; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-psjn .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.01em; }
.cg-root.cg-psjn .cg-table caption { font-weight: 640; text-align: left; font-style: italic; }
.cg-root.cg-psjn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-psjn #addresses code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.58; padding: 0.95rem 1rem; border-left: 4px solid var(--cg-accent); }
.cg-root.cg-psjn .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-psjn .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'New Brunswick, read 22 October 2026 from curriculum.nbed.ca saved raw: Computer Science 110 (Grade 11) description, achievement indicators on pseudocode and parsing a line of code, AI-assisted tools "while maintaining student authorship"; subcluster course list. Canadian Charter s.16(2): English and French official in New Brunswick. CEMC 2026-27 BCC (English only) and CCC (English and French), through a school. Atlantic time (America/Moncton, IANA tzdb 2026e) and area codes 428/506 from facts-geo.md.',
    localProject: 'City of Saint John open data, Civic Addresses (Open Government Licence - City of Saint John), read on 22 October 2026 through 7 paged REST queries and counted with our scripts (python -I): 25,577 points; 176 non-whole civic numbers skipped; first digits of 25,401 whole numbers 1: 7,970 (31.4%) down to 9: 1,164 (4.6%) against Benford 30.1% to 4.6%; number lengths 1,947 / 11,095 / 10,471 / 1,887 / 1; designators Street/rue 7,013, Road/chemin 5,022, Drive/promenade 3,516; Place 410 and Plaza 6 both map to place; 48 English vs 47 French non-blank designators, reverse dictionary keeps Place and drops Plaza. No addresses printed. Labelled as ours. Lesson family: digit distributions and one-to-many translation tables.',
    requiredMentions: [
      'Benford\'s law predicts',
      'Place and Plaza',
      '57 1/2, 107 A or 37A',
      '48 different English designators but only 47 French ones',
      'Open Government Licence - City of Saint John',
      'Rothesay, Quispamsis, Grand Bay-Westfield and Hampton',
      'while maintaining student authorship',
      'Parse one complete logical line of code',
      'An AI tool will happily lose your Plaza addresses',
      'one of the nearest Canadian clocks to India'
    ],
    sources: [
      { claim: 'City of Saint John open data catalogue (Civic Addresses layer).', url: 'https://catalogue-saintjohn.opendata.arcgis.com/' },
      { claim: 'City of Saint John ArcGIS item: Civic Addresses, description and Open Government Licence - City of Saint John text.', url: 'https://www.arcgis.com/home/item.html?id=88d9dbea7fad4767a9870c5666ec4c71' },
      { claim: 'City of Saint John Civic Addresses feature service (paged query source).', url: 'https://services.arcgis.com/DLk7hgTJeJILuEBg/arcgis/rest/services/Civic_Addresses/FeatureServer' },
      { claim: 'New Brunswick curriculum framework: Computer Science 110.', url: 'https://curriculum.nbed.ca/learning-areas/high-school-block/career-connected-learning/digital-and-information-technology/computer-science-110/' },
      { claim: 'Canadian Charter of Rights and Freedoms s.16(2): official languages of New Brunswick.', url: 'https://laws-lois.justice.gc.ca/eng/const/page-12.html' },
      { claim: 'CEMC contests 2026-27: BCC and CCC dates and languages, through-a-school rule.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'IANA tzdb northamerica: America/Moncton (Atlantic) offsets and 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Saint John population or language-share figure: StatCan not reachable live, nothing printed.',
      'Individual addresses or address points: never printed; counts only.',
      'That Saint John civic numbers prove or disprove Benford\'s law: refused; we show a comparison and the reason for the pattern, not a test result.',
      'That the address layer counts buildings or households: refused; it counts posted civic address points.',
      'That we teach in French: refused; classes are taught in English.',
      'That our classes earn New Brunswick credits: refused.',
      'CEMC and Python Institute exam fees: left out (currency-neutral page).',
      'Any affiliation with the City of Saint John, the New Brunswick Department of Education and Early Childhood Development, CEMC or the Python Institute.'
    ]
  }
};
