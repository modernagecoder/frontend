'use strict';
// BC Grade 10 Numeracy Assessment practice (ag- provincial assessment door; Canada cluster Plan 2, row 27, conditional row).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Condition: www2.gov.bc.ca stayed unreachable (curl exit 56 on 23 October 2026, FAILED-www2.gov.bc.ca.txt). On the coordinator's
// instruction the primary source is the curriculum.gov.bc.ca page and the official PDFs it links on the same host, each fetched raw
// once on 23 October 2026 (HTTP 200; copies and pdftotext extractions in keyword-research-2026-09/ca/src-pilots/
// bc-grade-10-numeracy-assessment-practice/). Calculator Policy 2026 and Comments from Markers sit on www2 and were not fetched.
//  - curriculum.gov.bc.ca/provincial/grade-10-numeracy-assessment (gna.txt): "The Grade 10 Numeracy Assessment is a provincial
//    assessment that assesses student proficiency in numeracy. It is a graduation requirement and students take the assessment in their
//    Grade 10 year."; "focuses on the application of mathematical concepts learned across multiple subjects from kindergarten to Grade
//    10"; five numeracy processes "interpret, apply, solve, analyze and communicate"; "delivered online in three sections"; common
//    section "Students answer 24 questions centered on four different tasks (situations) completed online", "Questions are scored by a
//    computer."; student-choice "Students choose two of four available questions and complete two written-response questions on paper",
//    "Questions are marked by B.C. educators using a"; self-reflection "The process of reflection is part of their learning.",
//    "Questions are not scored."; resources: Sample A and B, answer keys, Reference Pages, Marking Guide and Student Exemplars 2024,
//    workbook "Giving out Bonuses" (named only).
//  - Grade 10 Numeracy Assessment Administration Guide 2026-2027 (grade-10-numeracy-assessment-administration-guide.txt): codes "NME10
//    and NMF10"; "It is strongly recommended that students try the sample assessment"; "There is a handwritten constructed response
//    component; two questions will require them to show their work on paper response sheets"; "They should use black or dark pencils
//    (not pens)"; "Only work written on the front- and back-page workspace (response sheets) for each question will be marked."; "The
//    constructed-response questions are #13 and #26 in the assessment."; "Beginning with the November 2026 assessment session, all
//    devices used to log into the graduation assessments must have the Assessment Lock secure browser installed."; "The online Numeracy
//    Assessment includes an online calculator; however, students may also bring their own."; smartphones and tablets "are not permitted
//    for use as calculators"; "The time allotted for the assessment is 2 hours; however, you may take up to 1 additional hour if
//    needed."; disqualification "will count as an attempt"; "A proficiency level will appear on the Transcript"; online learning
//    schools "must assign a physical writing location".
//  - Grade 10 Graduation Numeracy Assessment Specifications, July 2019 (gna-10-specifications.txt): "Along with acquiring 80 course
//    credits for graduation, students are required to complete provincial assessments in numeracy at Grade 10 and in literacy at Grades
//    10 and 12."; definition "Numeracy is the ability to interpret information within a given situation, apply mathematical
//    understanding to solve an identified problem, and to analyze and communicate a solution."; process descriptions; four task
//    categories Reasoned Estimates, Plan and Design, Fair Share, Model; contexts "personal, career, societal, and scientific"; concepts
//    "Most of the numeracy tasks will include concepts up to and including Grade 8" and the Grade 9 or 10 list; Webb's DOK Levels 1 to 3
//    ("Level 4 cognitive rigour is not assessed"); four-level proficiency scale Emerging, Developing, Proficient, Extending; results via
//    the StudentTranscripts Service.
//  - Marking Rubric Rev. 09/2023 (marking-rubric.txt): levels 4 to 1 snapshots; level 0 includes "Any answer without supporting work."
//    and "Information simply recopied from the problem."; "Errors in transcription do not take away from the level of proficiency."
//  - Reference Pages (numeracy-assessment-reference-pages.txt): sections GEOMETRY, RATES OF CHANGE, MEASUREMENTS; "c2 = a2 + b2" (printed
//    with superscripts in the PDF), "y = mx + b", "1 ha = 10 000 m2", "1 inch = 2.54 cm".
//  - Parent brochure, December 2018 (graduation-numeracy-assessment-brochure.txt): re-take, "Their best level achieved will be counted
//    as their final result."; "Each post-secondary institution has the authority to determine admission requirements for students."
//  - Time: facts-geo.md section 3 (BC UTC-7 permanent after 8 March 2026; East Kootenay and Golden UTC-6).
// Our own material, labelled on the page: the field-trip Plan and Design task with a full five-process written response, fourteen
// practice questions with worked answers (all arithmetic checked in Python 3.13), the process checklist, the study plan and four-week
// countdown, the ladder. No money contexts in our practice (brief rule 8). Lesson family: interpret, apply, solve, analyze, communicate.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SRC_GNA = '<a class="ag-inline-link" href="https://curriculum.gov.bc.ca/provincial/grade-10-numeracy-assessment" rel="noopener" target="_blank">Grade 10 Numeracy Assessment page</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'BC NUMERACY 10', blurb: 'The BC Grade 10 Numeracy Assessment from the Ministry\'s own pages: format, the five numeracy processes, the rubric, and fourteen original practice questions with worked answers.' },
  slug: 'bc-grade-10-numeracy-assessment-practice',
  code: 'bcgr',
  accent: '#3B522F',
  accentRationale: 'BC Grade 10 Numeracy Assessment practice: a muted spruce green, #3B522F, allocated to this row in the Plan 2 group list (at least 6 RGB units from every site accent and 14 from other Canada accents), contrast 8.14 on the paper #FBF8F2, 7.65 on #F5F1E8 and 7.00 on the deepest tint #EDE7DA',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'BC Grade 10 Numeracy Assessment practice',
  title: 'BC Grade 10 Numeracy Assessment Practice: Format, Questions',
  description: 'The BC Grade 10 Numeracy Assessment from Ministry pages: the three sections, five numeracy processes, rubric and timing, plus 14 original questions with answers.',
  ogDescription: 'What BC\'s Grade 10 Numeracy Assessment asks, from the Ministry\'s own page, specifications and 2026 to 2027 administration guide, with a worked written response and fourteen practice questions of ours.',
  twitterDescription: 'BC Grade 10 Numeracy Assessment: format and rubric from Ministry sources, plus original practice questions.',
  pageName: 'BC Grade 10 Numeracy Assessment Practice',
  webPageDescription: 'A guide for British Columbia Grade 10 students and parents to the provincial Numeracy Assessment, built from the Ministry\'s assessment page and official PDFs fetched on 23 October 2026, with an original worked task, fourteen practice questions and a study plan.',
  courseDescription: 'Live online numeracy and math help for BC Grade 10 students preparing for the provincial Numeracy Assessment, in a batch or one to one.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'British Columbia', href: '/coding-classes-in-british-columbia' }],
  crumbLabel: 'Grade 10 Numeracy Assessment',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#format', label: 'Format' },
    { href: '#processes', label: 'Five processes' },
    { href: '#rubric', label: 'Rubric' },
    { href: '#worked', label: 'Worked task' },
    { href: '#practice', label: 'Practice' }
  ],
  eyebrow: 'British Columbia &middot; Grade 10 &middot; provincial assessment',
  h1: 'BC Grade 10 Numeracy Assessment: format and practice',
  lede: 'Every BC student meets the Grade 10 Numeracy Assessment, and it surprises many of them. It is not a math test on one course. It sets everyday situations, asks students to decide what matters, use math they learned years ago, and then explain and defend an answer in writing. This page explains the assessment from the Ministry&rsquo;s own page and documents, shows a full written response to a task we wrote, and gives fourteen practice questions with worked answers. Everything in our practice sections is our practice, not Ministry questions.',
  secondaryCta: { href: '#practice', label: 'Go to the practice questions' },
  wa: 'Hello Modern Age Coders, my teen in BC is preparing for the Grade 10 Numeracy Assessment. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; reasoning written out, not just answers',
  spec: [
    ['Who', 'BC students, in their Grade 10 year'],
    ['Status', 'A graduation requirement'],
    ['Delivery', 'Online, three sections'],
    ['Time', '2 hours, up to 1 more if needed'],
    ['Written part', 'Two questions, on paper'],
    ['Results', 'A four-level proficiency scale'],
    ['Our help', 'A batch, or one to one'],
    ['Clock', 'Pacific time, UTC-7 all year']
  ],
  capsuleQ: 'In short',
  capsule: 'The BC Grade 10 Numeracy Assessment is a provincial graduation requirement written in Grade 10. Online, students answer 24 computer-scored questions on four situations, then choose two written-response questions marked by BC educators, then reflect. It tests five processes: interpret, apply, solve, analyze, communicate. Modern Age Coders helps students prepare live online, in a batch or one to one, through High School Mathematics.',

  picks: {
    eyebrow: 'Prepare with a teacher',
    h2: 'Three courses for numeracy in Grade 10',
    lede: 'The assessment draws on math from Kindergarten to Grade 10, so the right course depends on where the gaps are.',
    items: [
      { course: 'complete-high-school-mathematics-mastery', code: 'BCGR / 01', title: 'High school mathematics', note: 'Grades 9 to 12. Linear relations, proportional reasoning and statistics in context, with written explanations.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'BCGR / 02', title: 'Middle school mathematics', note: 'For Grade 6 to 8 concepts, which the Ministry says most numeracy tasks draw on.' },
      { course: 'statistics-probability-maths-course', code: 'BCGR / 03', title: 'Statistics and probability', note: 'Data, averages, spread and experimental probability, the data side of numeracy.' }
    ]
  },

  sections: [
    {
      id: 'format', tint: 'tint', eyebrow: 'What the Ministry says',
      h2: 'What the Grade 10 Numeracy Assessment is, and how it runs',
      lede: 'The BC curriculum site describes the assessment in two sentences: &ldquo;The Grade 10 Numeracy Assessment is a provincial assessment that assesses student proficiency in numeracy. It is a graduation requirement and students take the assessment in their Grade 10 year.&rdquo; It &ldquo;focuses on the application of mathematical concepts learned across multiple subjects from kindergarten to Grade 10.&rdquo;',
      body: [
        { kind: 'table', caption: 'The three sections of the Grade 10 Numeracy Assessment, quoted from the Ministry&rsquo;s assessment page (fetched 23 October 2026)', head: ['Section', 'What students do', 'How it is scored'], rows: [
          ['Common section', '&ldquo;Students answer 24 questions centered on four different tasks (situations) completed online&rdquo;', '&ldquo;Questions are scored by a computer.&rdquo;'],
          ['Student-choice section', '&ldquo;Students choose two of four available questions and complete two written-response questions on paper.&rdquo; The questions build on tasks from the common section', 'Marked by BC educators using a published rubric'],
          ['Self-reflection section', 'Questions about the student&rsquo;s experience after the other sections; &ldquo;The process of reflection is part of their learning.&rdquo;', '&ldquo;Questions are not scored.&rdquo;']
        ] },
        { kind: 'table', mt: true, caption: 'Practical facts from the Grade 10 Numeracy Assessment Administration Guide 2026-2027 (fetched 23 October 2026)', head: ['Topic', 'What the guide says'], rows: [
          ['Time', '&ldquo;The time allotted for the assessment is 2 hours; however, you may take up to 1 additional hour if needed.&rdquo;'],
          ['Paper questions', '&ldquo;The constructed-response questions are #13 and #26 in the assessment.&rdquo; Students write them on personalized response sheets'],
          ['Pencils', 'Students &ldquo;should use black or dark pencils (not pens)&rdquo;, because the sheets are scanned for marking'],
          ['What gets marked', '&ldquo;Only work written on the front- and back-page workspace (response sheets) for each question will be marked.&rdquo;'],
          ['Calculators', '&ldquo;The online Numeracy Assessment includes an online calculator; however, students may also bring their own.&rdquo; Phones and tablets may not be used as calculators'],
          ['Practice', '&ldquo;It is strongly recommended that students try the sample assessment&rdquo; to learn the format and navigation'],
          ['Results', '&ldquo;A proficiency level will appear on the Transcript&rdquo; once the assessment is completed'],
          ['Codes', 'Schools register students with the codes NME10 (English) and NMF10 (French)']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where it sits in graduation',
          left: [
            'The Ministry&rsquo;s 2019 specifications put it plainly: &ldquo;Along with acquiring 80 course credits for graduation, students are required to complete provincial assessments in numeracy at Grade 10 and in literacy at Grades 10 and 12.&rdquo; Schools register and run the session; families do not book it themselves.',
            'Students in an online learning school still write at a physical location. The administration guide says online learning schools &ldquo;must assign a physical writing location&rdquo;, called an assessment centre, to students who need one.'
          ],
          rightH3: 'Retakes and results',
          right: [
            'The Ministry&rsquo;s parent brochure (December 2018) says students can re-take the assessment to improve, and &ldquo;Their best level achieved will be counted as their final result.&rdquo; The 2026-2027 guide adds that a disqualification &ldquo;will count as an attempt&rdquo;.',
            'Results use a four-level proficiency scale: Emerging, Developing, Proficient and Extending, according to the 2019 specifications. On admissions, the brochure says &ldquo;Each post-secondary institution has the authority to determine admission requirements for students.&rdquo;'
          ] },
        { kind: 'source', html: 'Sources: the Ministry&rsquo;s ' + SRC_GNA + ' on curriculum.gov.bc.ca and the official PDFs it links (Administration Guide 2026-2027, Specifications July 2019, Marking Rubric Rev. 09/2023, Reference Pages, parent brochure December 2018), all downloaded with curl on 23 October 2026. The calculator policy and markers&rsquo; comments sit on www2.gov.bc.ca, which refused our connection, so they are not quoted. We work independently of BC&rsquo;s education ministry.' }
      ]
    },
    {
      id: 'processes', tint: 'deep', eyebrow: 'The five numeracy processes',
      h2: 'Interpret, apply, solve, analyze, communicate',
      lede: 'The assessment page says students solve problems &ldquo;by using five numeracy processes (different ways of thinking and working): interpret, apply, solve, analyze and communicate.&rdquo; The specifications define each one. Knowing them is the single most useful preparation for the written questions.',
      body: [
        { kind: 'table', caption: 'The five numeracy processes, quoted from the Grade 10 Graduation Numeracy Assessment Specifications (July 2019)', head: ['Process', 'From the specifications', 'What to write on the paper (ours)'], rows: [
          ['Interpret', '&ldquo;Given insufficient or excess information, students will need to decide what information is relevant to solve the problem.&rdquo;', 'List the facts you will use, the ones you will ignore, and any assumption'],
          ['Apply', 'Translating &ldquo;real-world problems into mathematical problems (mathematizing)&rdquo;', 'Name the math tool: a rate, a ratio, an area, a table, an equation'],
          ['Solve', '&ldquo;Students may also need to check mathematical solutions to determine if their solutions make mathematical sense.&rdquo;', 'Show every calculation with units, then a quick check'],
          ['Analyze', 'Assessing &ldquo;the practicality and possible limitations of solutions&rdquo;', 'Say whether the answer is sensible and what could change it'],
          ['Communicate', '&ldquo;construct valid logical arguments to defend their decisions and assumptions&rdquo;', 'Finish with a clear recommendation in a full sentence']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The definition behind it',
          left: [
            'The specifications define the skill being measured: &ldquo;Numeracy is the ability to interpret information within a given situation, apply mathematical understanding to solve an identified problem, and to analyze and communicate a solution.&rdquo; That is the five processes in one sentence.',
            'They also describe the cycle the processes form: a situation becomes a real-world problem, then a math problem, then a math solution, which is analyzed in context and finally communicated. If the solution does not make sense, the student goes round again.'
          ],
          rightH3: 'Why students lose marks',
          right: [
            'Most students are comfortable with solve, the middle step. The marks they lose are usually at the ends: they skip interpret (and use the wrong numbers), or skip analyze and communicate (and write a number with no recommendation). The rubric below rewards all five.',
            'Our habit for every written question: five short labelled headings, one per process. It takes a minute and makes a marker&rsquo;s job easy.'
          ] }
      ]
    },
    {
      id: 'tasks', tint: 'tint', eyebrow: 'Tasks, contexts and math',
      h2: 'The four task types and the math they draw on',
      lede: 'The 2019 specifications describe four kinds of task, one of each in an assessment, set in everyday contexts. They also say which math concepts the tasks use, and most of it comes from before Grade 9.',
      body: [
        { kind: 'table', caption: 'Task categories from the Grade 10 Graduation Numeracy Assessment Specifications (July 2019)', head: ['Task type', 'What it asks, in the specifications&rsquo; words'], rows: [
          ['Reasoned Estimates', '&ldquo;make or use estimates across multiple variables in order to build a logical argument for a possible solution&rdquo;'],
          ['Plan and Design', '&ldquo;analyze time, space, cost, and people in order to make a recommendation&rdquo;'],
          ['Fair Share', 'Decide how to &ldquo;share something fairly&rdquo;'],
          ['Model', '&ldquo;come up with a model or strategy, given a data set; and then to apply this model or strategy to a new data set&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The math involved',
          left: [
            'The specifications say: &ldquo;Most of the numeracy tasks will include concepts up to and including Grade 8&rdquo;, across number sense, patterns, geometry and measurement, data and probability, and financial literacy. From Grades 9 and 10 the assessment may also use operations with rational numbers, linear relations, spatial proportional reasoning, statistics in society, experimental probability and simple financial literacy.',
            'So a student who struggles with Grade 10 algebra can still do well, and a strong Grade 10 math student can still be caught out by a rusty Grade 7 skill such as unit conversion or percentages.'
          ],
          rightH3: 'Contexts and difficulty',
          right: [
            'Tasks are set in four contexts: &ldquo;personal, career, societal, and scientific&rdquo;. Questions are written to the first three levels of Webb&rsquo;s Depth of Knowledge, from recall to strategic thinking; the specifications note that &ldquo;Level 4 cognitive rigour is not assessed.&rdquo;',
            'The Ministry&rsquo;s official Reference Pages give formulas under three headings, geometry, rates of change and measurements, including the Pythagorean theorem, y = mx + b and conversions such as &ldquo;1 inch = 2.54 cm&rdquo;. Practise with them open, since that is how the assessment works.'
          ] }
      ]
    },
    {
      id: 'rubric', tint: 'deep', eyebrow: 'How written answers are marked',
      h2: 'The marking rubric for the student-choice questions',
      lede: 'The two paper questions are marked with a published rubric (revised September 2023). Reading it is the fastest way to understand what a strong answer looks like.',
      body: [
        { kind: 'table', caption: 'Marking rubric snapshot for the student-choice question, quoted from the Ministry&rsquo;s Marking Rubric (Rev. 09/2023)', head: ['Score', 'Snapshot, in the rubric&rsquo;s words'], numCols: [0], rows: [
          ['4', '&ldquo;Solution is effective and comprehensive&rdquo;; &ldquo;Reasoning is clearly communicated.&rdquo;'],
          ['3', '&ldquo;Solution is reasonable; calculations may contain errors. Reasoning can be followed.&rdquo;'],
          ['2', '&ldquo;Solution is incomplete but on the right track&rdquo;; &ldquo;Reasoning may be unclear or inconsistent.&rdquo;'],
          ['1', '&ldquo;Solution contains an ineffective approach and/or fundamental mathematical errors.&rdquo;'],
          ['0', 'Includes &ldquo;Information simply recopied from the problem.&rdquo; and &ldquo;Any answer without supporting work.&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two lines worth remembering',
          left: [
            'A bare answer scores 0: &ldquo;Any answer without supporting work.&rdquo; Even a correct number earns nothing without the work behind it. That single line is why the written questions reward students who show reasoning.',
            'The rubric also says &ldquo;Errors in transcription do not take away from the level of proficiency.&rdquo; Copying a number wrongly from the screen is treated more kindly than a missing explanation.'
          ],
          rightH3: 'What separates a 3 from a 4',
          right: [
            'At level 3 calculations &ldquo;may contain errors&rdquo; and reasoning &ldquo;can be followed&rdquo;. At level 4 the solution is comprehensive and reasoning is clearly communicated. The difference is mostly analyze and communicate: limitations named, assumptions stated, a recommendation made.',
            'The Ministry publishes a Marking Guide and Student Exemplars (2024) on the same page. Comparing a level 3 and a level 4 exemplar side by side teaches more than any summary.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'A worked written response, ours',
      h2: 'A Plan and Design task, answered with all five processes',
      lede: 'This task is ours, written in the style the specifications describe. It is our practice, not a Ministry question. The response below is laid out the way we teach students to answer the paper questions.',
      body: [
        { kind: 'p', html: '<b>The task.</b> A Grade 10 class of 46 students and 4 adults is going to a science centre that opens at 9:30 am. The school can book vans that seat 8 passengers plus a driver, and every van needs one adult as driver. The drive takes 50 minutes. Loading takes 15 minutes, and the teacher wants a 10-minute buffer for traffic. The adults are the only drivers. How should the trip be organized, and what time should everyone gather?' },
        { kind: 'ol', items: [
          '<b>Interpret.</b> Relevant facts: 46 students, 4 adults, 8 passengers per van plus a driver, adults must drive, 50 minutes of driving, 15 minutes loading, 10 minutes buffer, arrival by 9:30 am. Assumption: all vans leave together, and a driver cannot also count as one of the 8 passengers.',
          '<b>Apply.</b> Two calculations: how many vans the students need (students divided by seats, rounded up), and a backward timeline from 9:30 am.',
          '<b>Solve.</b> 46 &divide; 8 = 5.75, so 6 vans are needed for the students. But there are only 4 adults, so only 4 vans can be driven, carrying 4 &times; 8 = 32 students. That leaves 14 students without a seat. Timeline: 9:30 minus a 10-minute buffer is 9:20; minus 50 minutes driving is 8:30 departure; minus 15 minutes loading is 8:15 gathering.',
          '<b>Analyze.</b> The plan as given does not work: the class is two vans short, because there are two drivers too few. Options: recruit 2 more adult drivers (6 vans), run two trips (but a second round adds about 100 minutes of driving, so the second group arrives near 11:10 am), or use a larger vehicle such as a school bus. A second trip wastes most of the visit for 14 students, so it is the weakest option.',
          '<b>Communicate.</b> Recommendation: book 6 vans and find 2 more adult volunteers who can drive, so that all 46 students travel together. Everyone gathers at 8:15 am, vans leave at 8:30 am and arrive by 9:20 am, with 10 minutes to spare. If no extra drivers can be found, book a school bus instead of vans.'
        ] },
        { kind: 'table', mt: true, caption: 'The backward timeline from the worked task (ours)', head: ['Step', 'Minutes', 'Clock time'], numCols: [1], rows: [
          ['Arrive (latest)', '', '9:30 am'],
          ['Traffic buffer', '10', '9:20 am'],
          ['Drive', '50', '8:30 am departure'],
          ['Loading', '15', '8:15 am gathering']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why this answer would score well',
          left: [
            'It uses only the relevant facts, states its assumption, shows every calculation, and, most importantly, spots that the plan as described cannot work. Then it compares options with reasons and ends with a clear recommendation. That is analyze and communicate doing their job.',
            'A student who stopped at &ldquo;6 vans, gather at 8:15&rdquo; would have a reasonable calculation but would miss the driver shortage, which is the real point of the task.'
          ],
          rightH3: 'The math is Grade 7 math',
          right: [
            'Division with rounding up, multiplication and subtracting time: nothing here goes beyond the middle grades. That is typical, and it matches the specifications&rsquo; note that most tasks use concepts up to Grade 8.',
            'What makes it hard is the reading: noticing that drivers are a constraint. Interpret is where the marks start.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Our practice, not Ministry questions',
      h2: 'Fourteen numeracy practice questions',
      lede: 'These fourteen questions are our practice, not Ministry questions; we wrote them for this page in the four task styles the specifications describe. For the official samples, use Sample A and Sample B on the Ministry&rsquo;s page. Keep a calculator and the Reference Pages beside you, as in the real assessment.',
      body: [
        { kind: 'ol', items: [
          '<b>Reasoned estimate.</b> About how many basketballs (diameter 24 cm) would fill a classroom 9 m long, 7 m wide and 3 m high? State your assumptions.',
          '<b>Measurement.</b> A trail is 12 km long. Hiking at 4 km/h, how long does it take? Give the distance in metres too.',
          '<b>Rate.</b> A cyclist rides 18 km in 45 minutes. What is the average speed in km/h?',
          '<b>Pythagorean theorem.</b> A 5 m ladder leans on a wall with its foot 1.4 m from the wall. How high up the wall does it reach?',
          '<b>Plan and design: area.</b> A 6 m by 4 m garden has a 1 m wide path all the way round it. What is the area of the path?',
          '<b>Plan and design: volume.</b> A cylindrical rain barrel has radius 0.3 m and height 0.9 m. How many litres does it hold? (1 m<sup>3</sup> = 1000 L.)',
          '<b>Fair share.</b> Three volunteers worked 4, 6 and 10 hours on a planting day. The club wants to share 60 seedlings in proportion to hours worked. How many does each get?',
          '<b>Fair share, reasoning.</b> Someone says the 60 seedlings should be split equally, 20 each. Give one argument for and one against.',
          '<b>Linear relation.</b> A 30 cm candle burns down 2 cm every hour. Write a rule for its height h after t hours. When is it 12 cm tall?',
          '<b>Model.</b> A seedling measured each week was 5, 8, 11, 14 and 17 cm tall in weeks 0 to 4. Find a rule and predict week 10. What is one limitation of your prediction?',
          '<b>Statistics.</b> A bus was late by 2, 0, 5, 1, 12, 3 and 2 minutes over seven days. Find the mean and the median. Which better describes a typical day, and why?',
          '<b>Experimental probability.</b> A spinner with three equal sections landed on red 18 times in 50 spins. What is the experimental probability of red? How does it compare with the theoretical probability?',
          '<b>Scale.</b> On a map with scale 1:50 000, two lakes are 7.2 cm apart. How far apart are they in kilometres?',
          '<b>Communicate.</b> Using your answer to question 10, write a two-sentence recommendation for when to move the seedling to a bigger pot, if the pot holds plants up to 30 cm tall.'
        ] }
      ]
    },
    {
      id: 'answers', tint: 'tint', eyebrow: 'Worked answers, ours',
      h2: 'Worked answers to the fourteen questions',
      lede: 'Each answer shows the numeracy process behind it, not just the number. The arithmetic was checked in Python 3.13.',
      body: [
        { kind: 'ol', items: [
          '<b>About 14,000.</b> Room volume 9 &times; 7 &times; 3 = 189 m<sup>3</sup>. If each ball takes up a 0.24 m cube when stacked in rows, that is 0.24<sup>3</sup> &asymp; 0.0138 m<sup>3</sup>, so 189 &divide; 0.0138 &asymp; 13,700. Assumptions: an empty room and neat stacking. A different packing gives a different number, so a range such as 13,000 to 17,000 is honest. Estimates are judged on their reasoning.',
          '<b>3 hours; 12,000 m.</b> Time = distance &divide; speed = 12 &divide; 4. And 1 km = 1000 m.',
          '<b>24 km/h.</b> 45 minutes is 0.75 h, and 18 &divide; 0.75 = 24. Converting minutes to hours first avoids the common error of dividing by 45.',
          '<b>4.8 m.</b> 5<sup>2</sup> = 1.4<sup>2</sup> + h<sup>2</sup>, so h<sup>2</sup> = 25 &minus; 1.96 = 23.04 and h = 4.8.',
          '<b>24 m<sup>2</sup>.</b> With the path the outer rectangle is 8 m by 6 m = 48 m<sup>2</sup>. Subtract the garden, 24 m<sup>2</sup>. A common error is adding 1 m, not 2 m, to each side length.',
          '<b>About 254 L.</b> V = &pi;r<sup>2</sup>h = &pi; &times; 0.09 &times; 0.9 &asymp; 0.2545 m<sup>3</sup>, and 0.2545 &times; 1000 &asymp; 254 L.',
          '<b>12, 18 and 30.</b> Total hours 20, so each hour earns 60 &divide; 20 = 3 seedlings: 4 &times; 3, 6 &times; 3, 10 &times; 3. Check: 12 + 18 + 30 = 60.',
          '<b>For:</b> everyone volunteered, and a garden may need the same number of plants in each plot. <b>Against:</b> the person who worked 10 hours did more than twice the work of the person who worked 4. Fair Share tasks reward a stated definition of fair, not one right answer.',
          '<b>h = 30 &minus; 2t; after 9 hours.</b> Set 30 &minus; 2t = 12, so 2t = 18. The rate of change is &minus;2 cm per hour, the slope in y = mx + b form.',
          '<b>h = 5 + 3w; 35 cm at week 10.</b> The height rises by 3 cm every week from 5 cm. Limitation: plants do not grow at a steady rate forever, and pot size or light may slow growth, so predicting far beyond the data is risky.',
          '<b>Mean about 3.6 minutes; median 2 minutes.</b> The total is 25 minutes over 7 days. The 12-minute day pulls the mean up; the median is closer to a typical day, so it describes the bus better.',
          '<b>0.36, against a theoretical 1/3 &asymp; 0.33.</b> 18 &divide; 50 = 0.36. The values are close; with only 50 spins some difference is expected, and more spins would usually bring the experimental value nearer to one third.',
          '<b>3.6 km.</b> 7.2 cm &times; 50 000 = 360 000 cm = 3600 m = 3.6 km.',
          '<b>One good answer:</b> &ldquo;Using our rule of 3 cm of growth per week, the seedling reaches 30 cm around week 8 or 9, so it should move to a bigger pot by week 8. Because growth may slow, measure it each week and move it sooner if it gets close to 30 cm.&rdquo; A recommendation, a reason from the model, and a limitation.'
        ] },
        { kind: 'p', mt: true, html: 'Questions 9 and 10 use linear relations, one of the Grade 9 and 10 concepts the specifications list. Students who also take coding find the Model task familiar: a rule fitted to data and tested on new values is what a short program does. Our <a class="ag-inline-link" href="/computer-programming-11-and-12-bc">BC Computer Programming 11 and 12 guide</a> shows where that leads.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'Study plan, ours',
      h2: 'A four-week plan for the Numeracy Assessment',
      lede: 'The assessment rewards habits more than memorized content. This plan of ours builds them in four weeks; confirm the session date with the school first.',
      body: [
        { kind: 'ol', items: [
          '<b>Confirm the session with the school.</b> The school registers students and runs the assessment, so ask when your teen is scheduled.',
          '<b>Do Sample A online, untimed.</b> Learn the navigation, the question types and where the two paper questions fall.',
          '<b>Read the five process definitions.</b> Then label each step of your Sample A written answers with the process it shows.',
          '<b>Refresh the middle-grade toolkit.</b> Unit conversions, percentages, ratios and rates, area and volume, mean and median. Short daily sets are enough.',
          '<b>Practise with the Reference Pages open.</b> Know where each formula is, so you do not waste time searching.',
          '<b>Write one paper response a day.</b> Five labelled headings, every calculation with units, a recommendation at the end. Use our worked task as a model.',
          '<b>Mark your own answer with the rubric.</b> Decide which level it reaches and what would lift it one level.',
          '<b>Study the official exemplars.</b> Compare a level 3 and a level 4 response from the Ministry&rsquo;s 2024 guide.',
          '<b>Do Sample B timed.</b> Two hours, calculator allowed, dark pencil for the paper questions.',
          '<b>The day before, rest.</b> Review your rubric notes, pack two dark pencils and your own calculator if you prefer it to the online one.'
        ] },
        { kind: 'table', mt: true, caption: 'Four weeks to the Numeracy Assessment (ours)', head: ['Week', 'Focus', 'Done when'], numCols: [0], rows: [
          ['1', 'Sample A untimed; the five processes', 'Every Sample A step labelled with a process'],
          ['2', 'Middle-grade toolkit; Reference Pages', 'Ten mixed skill questions correct with the pages open'],
          ['3', 'One written response a day, self-marked', 'Five responses written and scored with the rubric'],
          ['4', 'Exemplars, then Sample B timed', 'Sample B done in 2 hours and reviewed']
        ] }
      ]
    },
    {
      id: 'help', tint: 'tint', eyebrow: 'How we help, and the clock',
      h2: 'Numeracy help alongside the school year',
      lede: 'The Numeracy Assessment is written at school, and only the school can register a student for it. What we offer is the preparation.',
      body: [
        { kind: 'two',
          leftH3: 'What we do',
          left: [
            'We practise the five processes with your teen on tasks we write, explain the middle-grade math that has gone rusty, and coach the written responses until a clear structure is automatic. We work from the official samples and rubric too, without reproducing their questions on our pages.',
            'We do not register students, run sessions or influence results, and we promise no proficiency level. We are not connected with the Ministry.'
          ],
          rightH3: 'Related BC courses',
          right: [
            'Grade 10 students preparing for the assessment are often also choosing their Grade 11 math. Our BC guides for <a class="ag-inline-link" href="/calculus-12-tutor-bc">Calculus 12</a> and <a class="ag-inline-link" href="/computer-programming-11-and-12-bc">Computer Programming 11 and 12</a> look further ahead.',
            'Home-educated BC teens will find numeracy practice placed inside a weekly home-education routine in <a class="ag-inline-link" href="/homeschool-coding-and-math-bc">our homeschool guide for BC</a>, and our <a class="ag-inline-link" href="/coding-classes-in-british-columbia">British Columbia page</a> lists all our BC classes.'
          ] },
        { kind: 'table', mt: true, caption: 'Lesson times for BC families (BC time release of 2026; tz data 2026e; India time is UTC+5:30)', head: ['BC location', 'Offset', 'Lead of India time', 'When a 4:00 pm BC lesson starts in India'], rows: [
          ['Most of BC', 'UTC-7, year-round', '12 h 30 min', '4:30 am the next day'],
          ['East Kootenay and Golden', 'UTC-6, year-round', '11 h 30 min', '3:30 am the next day']
        ] },
        { kind: 'p', mt: true, html: 'BC moved to permanent UTC-7 after 8 March 2026, so a lesson time agreed on the Pacific clock holds through the winter. Our <a class="ag-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones page</a> covers every province.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your teen is now',
    h2: 'Four stages in numeracy',
    lede: 'Our stages, built around the five processes.',
    table: { caption: 'From number-cruncher to recommender (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Number-cruncher', 'Calculates correctly when told what to calculate'],
      ['2. Interpreter', 'Picks out the relevant facts and ignores the rest'],
      ['3. Analyst', 'Checks whether an answer makes sense in the situation'],
      ['4. Recommender', 'States assumptions, compares options and defends a recommendation']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your teen to plan something real at home, a trip, a recipe for more people, a schedule, and to explain their plan. That is numeracy practice.',
      'Most students are at stage 1 or 2 at the start of Grade 10. Stages 3 and 4 are learnable habits.'
    ] },
    right: { h3: 'For students', ps: [
      'Before you calculate, write which facts you will use. After you calculate, write whether the answer makes sense.',
      'Always end a written question with a full-sentence recommendation.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Other courses that support Grade 10 numeracy',
    lede: 'All nine run live with a steady teacher, either in a batch or privately.',
    bands: [
      { num: 'I', h3: 'Rebuild the toolkit', sub: 'Grades 7 to 10', courses: [
        { code: 'BCGR / TLK / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Linear relations and equations, steadily.' },
        { code: 'BCGR / TLK / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Patterns and rules you can run.' },
        { code: 'BCGR / TLK / 03', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'For students heading to senior math.' }
      ] },
      { num: 'II', h3: 'Reasoning and problems', sub: 'Grades 8 to 12', courses: [
        { code: 'BCGR / RSN / 01', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'Problem solving in the CEMC style.' },
        { code: 'BCGR / RSN / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Harder reasoning for keen students.' },
        { code: 'BCGR / RSN / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic and planning with code.' }
      ] },
      { num: 'III', h3: 'Data and code', sub: 'Teens', courses: [
        { code: 'BCGR / DAT / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Models from real data sets.' },
        { code: 'BCGR / DAT / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Test your estimates in code.' },
        { code: 'BCGR / DAT / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Where models meet the world.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live numeracy practice for BC teens',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After BC school hours, at your chosen batch time.' },
      { time: 'Weekends', l: 'Weekend mornings on Pacific time.' },
      { time: '1-on-1', l: 'Intensive weeks before the assessment session.' }
    ],
    cells: [
      { h3: 'Five headings', p: 'Every written answer structured.' },
      { h3: 'Our own tasks', p: 'Fresh situations each week.' },
      { h3: 'Rubric practice', p: 'Students mark their own work.' },
      { h3: 'Toolkit refresh', p: 'Middle-grade skills rebuilt.' },
      { h3: 'Reference Pages', p: 'Used as on the day.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one student.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Students who learn math with us often build software too; see a few projects below and the rest on our <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Families and students on Google, as they wrote it.',

  fees: {
    h2: 'Fees',
    lede: 'The first class is free. After it, one monthly fee buys eight live classes, shown in your currency, and you can stop at any month end; there is no term to sign.',
    free: ['A free first class', 'Bring a sample question', 'No card required'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Choose the batch time', 'Paid monthly'],
    one: ['A teacher for your teen alone', 'Timed to the session date', 'Built on their weak spots']
  },

  faq: {
    eyebrow: 'Questions from BC families',
    h2: 'The Grade 10 Numeracy Assessment: common questions',
    items: [
      { q: 'What is the BC Grade 10 Numeracy Assessment?', a: 'It is a provincial assessment of numeracy and a graduation requirement in BC, taken in the Grade 10 year. It focuses on applying math learned across subjects from Kindergarten to Grade 10, using five processes: interpret, apply, solve, analyze and communicate.' },
      { q: 'What is the format?', a: 'It is delivered online in three sections. In the common section students answer 24 computer-scored questions on four situations. In the student-choice section they choose two of four questions and write two responses on paper, marked by BC educators. A final self-reflection section is not scored.' },
      { q: 'How long is the Numeracy Assessment?', a: 'The 2026-2027 administration guide gives 2 hours, and students may take up to 1 additional hour if needed.' },
      { q: 'Can I use a calculator?', a: 'Yes. The administration guide says the online assessment includes an online calculator and students may also bring their own. Phones, tablets and similar handheld devices may not be used as calculators. Check the Ministry\'s calculator policy with your school.' },
      { q: 'What math is on it?', a: 'The 2019 specifications say most tasks use concepts up to Grade 8, such as number sense, patterns, geometry and measurement, data and probability, and financial literacy. Some Grade 9 or 10 concepts may appear, including linear relations, proportional reasoning, statistics and experimental probability.' },
      { q: 'How are the written questions marked?', a: 'With a published rubric that scores responses from 0 to 4. An answer without supporting work scores 0. Higher scores need a complete, reasonable solution with clearly communicated reasoning. The Ministry also publishes a marking guide with student exemplars.' },
      { q: 'Can my teen rewrite the assessment?', a: 'The Ministry\'s 2018 parent brochure says students can re-take it to improve their proficiency, and that the highest level reached counts as the final result. Ask the school about upcoming sessions.' },
      { q: 'Are your practice questions from the real assessment?', a: 'No. Every question on this page is our practice, not Ministry questions. For official practice, use Sample A and Sample B, their answer keys and the Reference Pages on the Ministry\'s Grade 10 Numeracy Assessment page.' },
      { q: 'How can my teen prepare?', a: 'Try Sample A online, learn the five processes, refresh middle-grade skills such as rates, ratios and conversions, write one structured response a day, mark it with the rubric, study the official exemplars and do Sample B timed.' },
      { q: 'When are classes for BC families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Because BC stopped changing its clocks in 2026, the lesson you book in October is at the same BC time in December.' },
      { q: 'What does numeracy help cost?', a: 'Your first class is free. Ongoing help is billed once a month for eight live sessions, without a term contract, and ends whenever you choose at a month end. The fees section lists today\'s figures.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for BC students and families.',
    items: [
      { href: '/coding-classes-in-british-columbia', label: 'Classes in British Columbia', p: 'Everything we teach for BC families.' },
      { href: '/homeschool-coding-and-math-bc', label: 'Homeschool coding and math, BC', p: 'Math and code at home in BC.' },
      { href: '/calculus-12-tutor-bc', label: 'Calculus 12 tutor, BC', p: 'Where senior BC math can lead.' },
      { href: '/computer-programming-11-and-12-bc', label: 'Computer Programming 11 and 12', p: 'Senior coding courses in BC.' },
      { href: '/canada-high-school-math-courses-compared', label: 'Grade 12 math by province', p: 'BC courses beside other provinces.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Math help across the country.' },
      { href: '/blog/probability-for-beginners', label: 'Probability for beginners', p: 'Experimental and theoretical chance.' },
      { href: '/coding-classes-in-canada', label: 'Canada', p: 'All our Canada guides.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our method, start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us when your teen&rsquo;s session is and which part worries them most. The first class starts with a short task and a written answer.',
    readFirst: 'Want to look first? The <a class="ag-inline-link" href="/courses/complete-high-school-mathematics-mastery">High School Mathematics syllabus</a> lists the topics, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains a lesson.',
    note: 'Lessons are live online with teachers in India. There is no BC centre to visit and no home visit; WhatsApp gets the fastest answer.',
    formNote: 'Booking the free class does not need a card.'
  },

  footer: {
    cols: [
      { h4: 'Numeracy and math', links: [
        { href: '/courses/complete-high-school-mathematics-mastery', label: 'High school mathematics' },
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Middle school mathematics' },
        { href: '/courses/statistics-probability-maths-course', label: 'Statistics and probability' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' }
      ] },
      { h4: 'British Columbia', links: [
        { href: '/coding-classes-in-british-columbia', label: 'Classes in BC' },
        { href: '/homeschool-coding-and-math-bc', label: 'Homeschool in BC' },
        { href: '/calculus-12-tutor-bc', label: 'Calculus 12 tutor' },
        { href: '/canada-time-zones-2026-online-class-times', label: 'Canada class times' }
      ] }
    ],
    bottomRight: 'Interpret first, recommend last'
  },

  personalityCss: `
.ag-root.ag-bcgr .ag-hero h1 { letter-spacing: -0.01em; max-width: 23ch; }
.ag-root.ag-bcgr .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-bcgr .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-bcgr .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-bcgr .ag-steps li { margin-bottom: 0.6rem; }
`,

  dossier: {
    curriculumAuthority: 'curriculum.gov.bc.ca Grade 10 Numeracy Assessment page and the official PDFs it links, each fetched raw once on 23 October 2026: Administration Guide 2026-2027 (timing, paper questions 13 and 26, pencils, workspace, calculators, Assessment Lock from November 2026, NME10 and NMF10, transcript, online learning assessment centres), Specifications July 2019 (80 credits sentence, numeracy definition, five process descriptions, four task types, contexts, concepts, DOK levels, proficiency scale), Marking Rubric Rev. 09/2023, Reference Pages, parent brochure December 2018. www2.gov.bc.ca pages (calculator policy, markers comments) unreachable and not used. BC permanent UTC-7 (facts-geo.md).',
    localProject: 'Our Plan and Design field-trip task (46 students, 4 adult drivers, 8-passenger vans, 50-minute drive, 15-minute loading, 10-minute buffer, 9:30 am opening) answered with all five processes: 6 vans needed but only 4 drivers, 14 students without seats, gathering at 8:15 am, and a recommendation for 2 more drivers or a bus; fourteen original practice questions in the four task styles (estimate about 13,700 balls with stated assumptions, 24 km/h, 4.8 m ladder, 24 m^2 path, about 254 L barrel, 12/18/30 fair share, h = 30 - 2t, h = 5 + 3w, mean 3.6 against median 2, 0.36 against 1/3, 3.6 km) with worked answers; a ten-step plan and four-week table. No money contexts. Lesson family: interpret, apply, solve, analyze, communicate.',
    requiredMentions: ['Students answer 24 questions centered on four different tasks (situations) completed online', 'Students choose two of four available questions and complete two written-response questions on paper.', 'The constructed-response questions are #13 and #26 in the assessment.', 'The time allotted for the assessment is 2 hours; however, you may take up to 1 additional hour if needed.', 'Numeracy is the ability to interpret information within a given situation', 'Most of the numeracy tasks will include concepts up to and including Grade 8', 'Any answer without supporting work.', 'Errors in transcription do not take away from the level of proficiency.', '14 students without a seat', 'Interpret first, recommend last'],
    sources: [
      { claim: 'What the assessment is, its three sections and the official preparation resources.', url: 'https://curriculum.gov.bc.ca/provincial/grade-10-numeracy-assessment' },
      { claim: 'Administration Guide 2026-2027: timing, paper questions, pencils, calculators, transcript.', url: 'https://curriculum.gov.bc.ca/sites/curriculum.gov.bc.ca/files/pdf/assessment/grade-10-numeracy-assessment-administration-guide.pdf' },
      { claim: 'Specifications (July 2019): numeracy definition, processes, task types, concepts, proficiency scale.', url: 'https://curriculum.gov.bc.ca/sites/curriculum.gov.bc.ca/files/pdf/assessment/gna-10-specifications.pdf' },
      { claim: 'Marking Rubric Rev. 09/2023.', url: 'https://curriculum.gov.bc.ca/sites/curriculum.gov.bc.ca/files/pdf/assessment/marking-rubric.pdf' },
      { claim: 'Reference Pages.', url: 'https://curriculum.gov.bc.ca/sites/curriculum.gov.bc.ca/files/pdf/assessment/numeracy-assessment-reference-pages.pdf' },
      { claim: 'Parent brochure (December 2018): re-take and best level, admissions authority.', url: 'https://curriculum.gov.bc.ca/sites/curriculum.gov.bc.ca/files/pdf/assessment/graduation-numeracy-assessment-brochure.pdf' },
      { claim: 'BC permanent UTC-7.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' }
    ],
    rejectedClaims: [
      'Session dates for 2026-2027: the schedule and important-dates chart are on www2.gov.bc.ca, unreachable; families are told to ask the school.',
      'Calculator Policy 2026 details: on www2.gov.bc.ca, not fetched; only the administration guide lines are quoted.',
      'Any reproduction of Ministry sample, workbook or exemplar questions: none reproduced; they are named and linked through the Ministry page.',
      'The specifications 2019 structure of two common and two student-choice sections: superseded wording; the current page\'s three-section description is used.',
      'Whether any university uses results for admission: only the 2018 brochure statement that institutions set their own requirements is given.',
      'Money contexts in our practice (the Ministry sample is a bonus-sharing task): avoided under the content rules.',
      'Any proficiency level or result from our classes: none promised.',
      'Any affiliation with the BC Ministry of Education and Child Care: none, and the page says so.'
    ]
  }
};
