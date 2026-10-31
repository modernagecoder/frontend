'use strict';
// Eureka Math homework help (ag- curriculum help door; UK and US exams cluster Phase 1, row US086).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md (writer brief, rule 10). Sources read raw with curl on
// 31 October 2026 (copies in keyword-research-2026-09/uk-us-gap/src/eureka-math-homework-help/):
//  - greatminds.org/math/eurekamath (Great Minds, publisher): Eureka Math described as "The most widely used K-5 math
//    curriculum in the U.S." (publisher's claim, attributed); "They use the same models and problem-solving methods from grade
//    to grade"; "focus on fewer topics centered on the major work of the grade band"; Learn, Practice, Succeed books; open
//    educational resource student edition PreK-12; "Family resources for caregivers".
//  - greatminds.org/math/eurekamathsquared: "an evidence-based PreK-Algebra I math curriculum"; "High-leverage models remain
//    consistent across grades"; "This spiraling curriculum helps students build, revisit, and retain knowledge over time.";
//    Mathematical Language Routines; Pathways to Mastery for prerequisite gaps.
//  - greatminds.org/math/eurekamath/family-engagement: Family Tip Sheets "at the topic level" (English and Spanish, K-8);
//    Homework Helpers "step-by-step explanations of how (and why!) to work problems similar to those found in your child's
//    Eureka Math homework assignments", "There is a Homework Helper to go with every homework assignment in the
//    curriculum." (English K-12, Spanish digital K-8); Grade Roadmaps "bridge the gap between the way math was once taught
//    and the techniques used in Eureka Math" (K-7); "the number bond model that is used throughout grades K-5"; card games
//    for fluency.
//  - greatminds.org/knowledge/resources/parent-tip-sheets-k-5: tip sheets "arranged in the same sequence as the student
//    homework"; module titles for K to 5 (e.g. Grade 3 Module 5 "Fractions as Numbers on the Number Line"; Grade 4 Module 3
//    "Multi-Digit Multiplication and Division"; Grade 5 Module 3 "Addition and Subtraction of Fractions").
//  - nysed.gov EngageNY page (engageny.org redirects there): "The New York State Education Department discontinued support for
//    the EngageNY.org website on July 7, 2022."; curriculum files remain free under CC BY-NC-SA.
// En dashes and em dashes inside quoted grade ranges (K-5, K-12) are written as plain hyphens or "to" (copy rule 4).
// Not used: prices, Great Minds outcome statistics, teacher and official testimonials and their names.
// Our own material, labelled: make-ten number bond 8 + 5 = 13, 46 + 38 by tens and ones (84), the bar model for 48 cans
// (unit 12; 36 and 12), 3/4 on a number line, 1/2 + 1/3 = 5/6, the model glossary, the homework routine and practice set.
// Lesson family: decomposing a number to reach a friendly number (make ten, then make the whole), drawn as a number bond.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MATH', blurb: 'Eureka Math and EngageNY homework explained for parents: the models, the modules by grade, Great Minds family resources and live help.' },
  slug: 'eureka-math-homework-help',
  code: 'eh',
  accent: '#106F47',
  accentRationale: 'Eureka Math homework help: a clear jade, #106F47 as allocated, fresher than the olive Teaching Textbooks page and comfortably above contrast on the #FBF8F2 paper',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'Eureka Math homework help',
  title: 'Eureka Math Homework Help for Parents (and EngageNY)',
  description: 'Eureka Math homework help for parents: number bonds and other models explained, the K to 5 modules by grade, free Great Minds resources, and live online help.',
  ogDescription: 'Eureka Math homework uses the same models year after year: number bonds, number lines, bar drawings, area models. Learn the models once and the homework starts to make sense. A parent guide with worked examples.',
  twitterDescription: 'Eureka Math and EngageNY homework, explained for parents, with live help if you need it.',
  pageName: 'Eureka Math Homework Help',
  webPageDescription: 'A parent guide to Eureka Math, Eureka Math squared and the archived EngageNY modules, built from Great Minds and New York State Education Department pages checked on 31 October 2026; every worked example is ours.',
  courseDescription: 'Live online math classes for US elementary students whose schools use Eureka Math or EngageNY, teaching the models and the reasoning behind homework, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Eureka Math homework help',
  navLinks: [
    { href: '#what-eureka', label: 'What it is' },
    { href: '#modules', label: 'Modules by grade' },
    { href: '#models', label: 'The models' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#homework', label: 'Homework night' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Eureka Math, Eureka Math squared and EngageNY &middot; For parents',
  h1: 'Eureka Math homework help for parents',
  lede: 'A worksheet asks your second grader to "solve using a number bond" and you are not sure what one is. Or your fourth grader has been told not to "just" use the method you learned. Eureka Math homework confuses many families, not because it is especially hard but because it is written in a visual language parents were never taught. The good news is that the language is small and consistent: Great Minds, the publisher, says students use the same models from grade to grade. Learn those models and most homework nights get calmer. This guide explains them, with worked examples of our own.',
  secondaryCta: { href: '#models', label: 'Learn the models' },
  wa: 'Hello Modern Age Coders, my child\'s school uses Eureka Math and we struggle with the homework. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; grades K to 12',
  spec: [
    ['Publisher', 'Great Minds'],
    ['Versions', 'Eureka Math and Eureka Math squared'],
    ['Origin', 'EngageNY modules, New York'],
    ['Key idea', 'Same models every grade'],
    ['Our help', 'Live online, grades K to 5'],
    ['Formats', 'Batch of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Eureka Math is a math curriculum from Great Minds, used by many US school districts and also published as EngageNY modules in New York, that teaches through models such as number bonds, number lines and area models used from grade to grade. Eureka Math homework help explains those models so parents can follow along. Live online classes at Modern Age Coders, in a batch or 1-on-1, teach these models through the Elementary Math course, and the first class is free.',

  picks: {
    eyebrow: 'Help with the models',
    h2: 'Three live courses for children who do Eureka Math at school',
    lede: 'We follow the module your child is on and teach the same models the homework uses, never a conflicting method.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'EH / 01', title: 'Elementary math, grades 1 to 5', note: 'Number bonds to fractions, taught with the models Eureka homework expects.' },
      { course: 'early-math-foundations', code: 'EH / 02', title: 'Early math foundations', note: 'For kindergarten and first grade: counting, making ten, number pairs.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'EH / 03', title: 'Middle school math', note: 'For grades 6 to 8, when the bar drawings turn into equations.' }
    ]
  },

  sections: [
    {
      id: 'what-eureka', tint: 'tint', eyebrow: 'What it is',
      h2: 'What is Eureka Math, and how is it related to EngageNY?',
      lede: 'Eureka Math is published by Great Minds. Many families first met its lessons as the free EngageNY modules from New York State. There is now also a newer edition, Eureka Math squared (written Eureka Math&sup2;).',
      body: [
        { kind: 'table', caption: 'Eureka Math, Eureka Math squared and EngageNY (greatminds.org and the NYSED EngageNY page, checked 31 October 2026)', head: ['Name', 'What the source says', 'What it means for homework'], rows: [
          ['Eureka Math', 'Great Minds calls it "The most widely used K-5 math curriculum in the U.S."; students "use the same models and problem-solving methods from grade to grade"', 'The models your child learns in kindergarten return in grade 5'],
          ['Eureka Math squared', 'Described as "an evidence-based PreK-Algebra I math curriculum" in which "High-leverage models remain consistent across grades"', 'A newer edition with the same model-first approach'],
          ['EngageNY', '"The New York State Education Department discontinued support for the EngageNY.org website on July 7, 2022."', 'Old EngageNY links may be dead; the files are archived'],
          ['Licence of the archive', 'Curriculum files remain free under a Creative Commons BY-NC-SA licence', 'Schools can still use the archived modules']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the homework looks the way it does',
          left: [
            'Great Minds says Eureka Math has a "focus on fewer topics centered on the major work of the grade band", and that it aims for an understanding of the why behind the numbers, not only the how.',
            'For Eureka Math squared it adds: "This spiraling curriculum helps students build, revisit, and retain knowledge over time." That is why a model from last year turns up again in this week&rsquo;s homework.'
          ],
          rightH3: 'Which version is my child using?',
          right: [
            'Look at the cover of the student book or the name on the school&rsquo;s parent letter. Eureka Math squared is printed with a small raised 2. If the worksheet footer mentions EngageNY or a New York module, it comes from the original modules.',
            'The models are close enough that everything on this page applies to all three.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://greatminds.org/math/eurekamath" rel="noopener" target="_blank">Great Minds, Eureka Math</a>, <a class="ag-inline-link" href="https://greatminds.org/math/eurekamathsquared" rel="noopener" target="_blank">Eureka Math squared</a> and the <a class="ag-inline-link" href="https://www.nysed.gov/curriculum-instruction/engageny" rel="noopener" target="_blank">NYSED EngageNY page</a>, checked 31 October 2026. Eureka Math is a registered trademark of Great Minds. Modern Age Coders is not affiliated with Great Minds or the New York State Education Department.' }
      ]
    },
    {
      id: 'modules', tint: 'deep', eyebrow: 'Modules by grade',
      h2: 'What does Eureka Math teach in each grade from K to 5?',
      lede: 'Eureka Math is organised into modules, each made of topics. The Parent Tip Sheets on the Great Minds site list them in the same order as the homework, so a parent can see what is coming.',
      body: [
        { kind: 'table', caption: 'Eureka Math module 1 to 3 titles by grade, from the Great Minds Parent Tip Sheets list (checked 31 October 2026)', head: ['Grade', 'Module 1', 'Module 2', 'Module 3'], rows: [
          ['K', 'Numbers to 10', 'Two-Dimensional and Three-Dimensional Shapes', 'Comparison of Length, Weight, Capacity, and Numbers to 10'],
          ['1', 'Sums and Differences to 10', 'Introduction to Place Value Through Addition and Subtraction Within 20', 'Ordering and Comparing Length Measurements as Numbers'],
          ['2', 'Sums and Differences to 100', 'Addition and Subtraction of Length Units', 'Place Value, Counting, and Comparison of Numbers to 1,000'],
          ['3', 'Properties of Multiplication and Division and Solving Problems with Units of 2 to 5 and 10', 'Place Value and Problem Solving with Units of Measure', 'Multiplication and Division with Units of 0, 1, 6 to 9, and Multiples of 10'],
          ['4', 'Place Value, Rounding, and Algorithms for Addition and Subtraction', 'Unit Conversions and Problem Solving with Metric Measurement', 'Multi-Digit Multiplication and Division'],
          ['5', 'Place Value and Decimal Fractions', 'Multi-Digit Whole Number and Decimal Fraction Operations', 'Addition and Subtraction of Fractions']
        ] },
        { kind: 'p', mt: true, html: 'Later modules carry the big ideas forward: in grade 3, for example, Module 4 is Multiplication and Area and Module 5 is Fractions as Numbers on the Number Line; in grade 5, Module 4 is Multiplication and Division of Fractions and Decimal Fractions and Module 6 is Problem Solving with the Coordinate Plane. The tip sheets break each module into lettered topics.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://greatminds.org/knowledge/resources/parent-tip-sheets-k-5" rel="noopener" target="_blank">Great Minds, Parent Tip Sheets K to 5</a>, checked 31 October 2026. Ranges in titles are written with "to" on this page.' }
      ]
    },
    {
      id: 'models', tint: 'tint', eyebrow: 'The models',
      h2: 'What is a number bond, and what other models will I see?',
      lede: 'A number bond shows a whole split into parts. Great Minds describes it as a model "used throughout grades K-5". The table below is our plain-English glossary of models families commonly meet on elementary homework; your child&rsquo;s tip sheet names the exact ones each topic uses.',
      body: [
        { kind: 'table', caption: 'A parent&rsquo;s glossary of math models (our descriptions)', head: ['Model', 'What it looks like', 'What it is for'], rows: [
          ['Number bond', 'A circle for the whole joined to circles for its parts', 'Seeing that 13 is 10 and 3, or 8 is 5 and 3'],
          ['Ten-frame', 'A two-by-five grid of dots', 'Picturing numbers to 10 and making ten'],
          ['Number line', 'A marked line, sometimes with jumps drawn as arcs', 'Counting on, comparing, placing fractions'],
          ['Place value chart', 'Columns for hundreds, tens and ones (later tenths)', 'Regrouping, decimals, why digits move'],
          ['Bar or tape drawing', 'Rectangles split into equal units', 'Word problems: parts, wholes and comparisons'],
          ['Area model', 'A rectangle split by place value', 'Multi-digit multiplication and division']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why so many models?',
          left: [
            'Great Minds&rsquo; family page asks the question directly: "Why do children need to learn multiple strategies for solving problems?" Its answer is that a model like the number bond is "another tool for understanding mathematical concepts and problem-solving."',
            'In our experience the models matter most for word problems. A child who can draw a bar diagram can usually solve a problem they could not solve by guessing which operation to use.'
          ],
          rightH3: 'Is the standard method banned?',
          right: [
            'No. The grade 4 Module 1 title itself includes "Algorithms for Addition and Subtraction", and the standard methods appear in later modules too. The models come first so the method makes sense when it arrives.',
            'If your child&rsquo;s teacher asks for a model, use the model on that assignment. On your own practice at home, it is fine to show the method you know as a way of checking.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked examples',
      h2: 'How do you solve Eureka-style problems with the models?',
      lede: 'Five worked examples written by us, on topics from the modules above. None are copied from Eureka Math lessons or homework; they show the kind of thinking the homework asks for.',
      body: [
        { kind: 'table', caption: 'Worked examples by grade (ours)', head: ['Grade', 'Problem', 'Model', 'Worked reasoning'], rows: [
          ['1', '8 + 5', 'Number bond, make ten', 'Split 5 into 2 and 3. 8 + 2 = 10, then 10 + 3 = 13.'],
          ['2', '46 + 38', 'Tens and ones', '40 + 30 = 70 and 6 + 8 = 14, so 70 + 14 = 84.'],
          ['3', 'A class collects 48 cans. Group A collects three times as many as Group B. How many does each group collect?', 'Bar drawing', 'B is one unit, A is three units: four equal units make 48, so one unit is 12. Group B 12, Group A 36.'],
          ['3', 'Where does 3/4 go between 0 and 1?', 'Number line', 'Split the space from 0 to 1 into 4 equal parts. Count three parts from 0.'],
          ['5', '1/2 + 1/3', 'Area or bar model', 'Cut both into sixths: 1/2 = 3/6 and 1/3 = 2/6, so the sum is 5/6.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Make ten, step by step',
          left: [
            'The number bond for 8 + 5 works because 8 is two short of 10. The child asks "what does 8 need to make 10?", takes that 2 from the 5 and has 3 left over. Ten and three is 13.',
            'The same move later solves 38 + 5 (make 40, then 43) and 298 + 7 (make 300, then 305). That is the payoff of using one model for years.'
          ],
          rightH3: 'Checking the bar drawing',
          right: [
            'For the cans problem, a parent can check two ways: 36 + 12 = 48, and 36 is three times 12. If either check fails, the units were drawn unequal.',
            'Children often draw Group A&rsquo;s bar the same length as Group B&rsquo;s. Ask "how many of B&rsquo;s bars fit inside A&rsquo;s?" before they start.'
          ] },
        { kind: 'table', mt: true, caption: 'Practice set (ours; answers in brackets)', head: ['Problem', 'Try this model'], rows: [
          ['9 + 6', 'Number bond, make ten (10 + 5 = 15)'],
          ['57 + 26', 'Tens and ones (70 + 13 = 83)'],
          ['A rope of 35 feet is cut into two pieces; one is four times the other', 'Bar drawing (7 feet and 28 feet)'],
          ['Place 2/3 on a number line', 'Three equal parts, count two'],
          ['1/4 + 1/2', 'Quarters (3/4)']
        ] }
      ]
    },
    {
      id: 'homework', tint: 'tint', eyebrow: 'Homework night',
      h2: 'How can parents help with Eureka Math homework?',
      lede: 'Start with the free resources Great Minds publishes for families. Then use a short routine so homework does not become an argument about methods.',
      body: [
        { kind: 'table', caption: 'Free family resources from Great Minds (family engagement page, checked 31 October 2026)', head: ['Resource', 'What Great Minds says it is', 'Grades'], rows: [
          ['Parent Tip Sheets', 'Topic overviews with strategies, models, key vocabulary and home tips, "arranged in the same sequence as the student homework"', 'K to 8, English and Spanish'],
          ['Homework Helpers', '"step-by-step explanations of how (and why!) to work problems similar to those found in your child&rsquo;s Eureka Math homework assignments"', 'K to 12 in English; Spanish digital K to 8'],
          ['Grade Roadmaps', 'They "bridge the gap between the way math was once taught and the techniques used in Eureka Math"', 'K to 7, English and Spanish'],
          ['Card games', 'Rules for fluency games with a Eureka deck or a standard deck of playing cards', 'Elementary']
        ] },
        { kind: 'p', mt: true, html: 'Great Minds also says: "There is a Homework Helper to go with every homework assignment in the curriculum." If your school has not mentioned them, ask the teacher which version and module your child is on, then find the matching Helper.' },
        { kind: 'ol', mt: true, items: [
          '<b>Find the topic.</b> The worksheet footer usually names the module and lesson. Read that topic&rsquo;s tip sheet first.',
          '<b>Ask your child to explain the model.</b> "Show me how the number bond works" is a better start than "show me your answer".',
          '<b>Do one problem together, one alone.</b> If the second goes well, step back.',
          '<b>Check with your own method, quietly.</b> If both agree, the model is probably right.',
          '<b>Stop at 20 to 30 minutes for younger children.</b> Write a note to the teacher about where it broke down; that is useful information for them.'
        ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://greatminds.org/math/eurekamath/family-engagement" rel="noopener" target="_blank">Great Minds, Eureka Math family engagement</a>, checked 31 October 2026. The routine is our advice.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four stages with a model-based curriculum',
    lede: 'How we see children move from copying a drawing to thinking with it.',
    table: { caption: 'Stages of using math models (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Copying the picture', 'Draws the model because the worksheet says so'],
      ['2. Using it with help', 'Can fill in a model someone else started'],
      ['3. Choosing it', 'Draws a bar or number bond without being told'],
      ['4. Outgrowing it', 'Does it in their head and can still draw it if asked']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 1 often looks like the child does not understand the math. Usually they understand the math and not the model.',
      'A child at stage 4 is not skipping steps; they have absorbed them.'
    ] },
    right: { h3: 'For children', ps: [
      'If a word problem is confusing, draw it before you calculate.',
      'Making ten is a trick you will use for years.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine math courses that follow the school year',
    lede: 'Live courses from kindergarten to middle school, teaching the models schools use and the fluency families want.',
    bands: [
      { num: 'I', h3: 'K to 2', sub: 'Number sense', courses: [
        { code: 'EH / K / 01', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'Counting and making ten.' },
        { code: 'EH / K / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Number bonds in the head.' },
        { code: 'EH / K / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Grades 1 to 5.' }
      ] },
      { num: 'II', h3: '3 to 5', sub: 'Multiplication and fractions', courses: [
        { code: 'EH / U / 01', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Patterns in Python.' },
        { code: 'EH / U / 02', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'For keen problem solvers.' },
        { code: 'EH / U / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'The next step up.' }
      ] },
      { num: 'III', h3: '6 to 9', sub: 'Toward algebra', courses: [
        { code: 'EH / A / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Bars become equations.' },
        { code: 'EH / A / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra to calculus.' },
        { code: 'EH / A / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'For the very keen.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons in the same models as the homework',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, on this week&rsquo;s module.' },
      { time: 'Weekends', l: 'Review before a module assessment.' },
      { time: '1-on-1', l: 'Matched to your child&rsquo;s topic.' }
    ],
    cells: [
      { h3: 'Same models', p: 'No conflicting methods.' },
      { h3: 'Module-aware', p: 'We follow the school&rsquo;s order.' },
      { h3: 'Our own problems', p: 'Practice written by our teachers.' },
      { h3: 'Homework stays theirs', p: 'We teach, the child completes it.' },
      { h3: 'Every US time zone', p: 'After-school slots coast to coast.' },
      { h3: 'Class or solo', p: 'Join fifteen to twenty peers, or learn alone.' }
    ]
  },

  projectsH2: 'Work from our students',
  projectsLede: 'Older students sometimes turn math into code. See a few projects on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from families, quoted exactly.',

  fees: {
    h2: 'Fees',
    lede: 'Classes for Eureka Math families run month to month in US dollars, so a family can bring in help for a tricky module and stop once homework nights settle down.',
    free: ['A free first class', 'Send a photo of the homework', 'No card details'],
    group: ['Fifteen to twenty children', 'One teacher all term', 'Choose your batch', 'Monthly'],
    one: ['A teacher for your child alone', 'Follows the school module', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'Eureka Math homework help: common questions',
    items: [
      { q: 'Can you help my child with Eureka Math homework online?', a: 'Yes. A live teacher follows the module your child is on and teach the same models the homework uses. Classes run as a batch of 15 to 20 or one to one.' },
      { q: 'What is a number bond in Eureka Math?', a: 'A number bond shows a whole number split into parts, such as 13 as 10 and 3. Great Minds says it is used throughout grades K to 5, often to make ten when adding.' },
      { q: 'Is EngageNY the same as Eureka Math?', a: 'The EngageNY math modules were the free New York State version of the same lessons. The New York State Education Department stopped supporting the EngageNY website on July 7, 2022, and keeps the files in an archive.' },
      { q: 'What is the difference between Eureka Math and Eureka Math squared?', a: 'Eureka Math squared is the newer Great Minds edition, described as a PreK to Algebra I curriculum. Its models stay consistent across grades, so the help on this page applies to both.' },
      { q: 'Where can I find Eureka Math homework help for free?', a: 'Great Minds publishes free Parent Tip Sheets, Grade Roadmaps and Homework Helpers on its family engagement page. It says there is a Homework Helper for every homework assignment in the curriculum.' },
      { q: 'Why can\'t my child just use the standard method?', a: 'Eureka Math teaches models before the standard method so the method makes sense later. The standard algorithms do appear, for example in the grade 4 Module 1 title. On an assignment that asks for a model, use the model.' },
      { q: 'How do I find which module my child is on?', a: 'The worksheet footer usually names the module and lesson. If not, ask the teacher; the Parent Tip Sheets follow the same order as the homework.' },
      { q: 'Will you do the homework for my child?', a: 'No. We teach the model and the idea, then set similar problems of our own. The homework remains your child\'s work.' },
      { q: 'When are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you part of Great Minds or EngageNY?', a: 'No. We are an independent online school. Eureka Math is a trademark of Great Minds, and we quote only its public pages.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for parents helping with elementary math at home.',
    items: [
      { href: '/common-core-math-vs-traditional-math', label: 'Common Core vs traditional math', p: 'What the standards say about methods.' },
      { href: '/online-math-tutor-1st-grade', label: 'First grade math tutoring', p: 'Sums to 20 and place value.' },
      { href: '/online-math-tutor-2nd-grade', label: 'Second grade math tutoring', p: 'Adding and subtracting to 1,000.' },
      { href: '/online-math-tutor-3rd-grade', label: 'Third grade math tutoring', p: 'Multiplication, area and fractions.' },
      { href: '/online-math-tutor-5th-grade', label: 'Fifth grade math tutoring', p: 'Fractions and decimals.' },
      { href: '/online-maths-tutoring-for-kids-in-usa', label: 'Math tutoring for kids', p: 'Live online classes for US children.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send a photo of the homework page that stumped everyone, with the module and lesson number if you can see it. The teacher will work through the model with your child.',
    readFirst: 'Read about <a class="ag-inline-link" href="/how-we-teach">our teaching method</a>, or explore the <a class="ag-inline-link" href="/courses">course catalogue</a>.',
    note: 'Our teachers are in India and teach American elementary students live, after school in every US time zone. WhatsApp is the simplest way to start.',
    formNote: 'Your first class is free, with no card asked for.'
  },

  footer: {
    cols: [
      { h4: 'Math help', links: [
        { href: '/online-math-tutor-kindergarten', label: 'Kindergarten math' },
        { href: '/online-math-tutor-2nd-grade', label: 'Second grade math' },
        { href: '/online-math-tutor-4th-grade', label: 'Fourth grade math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/common-core-math-vs-traditional-math', label: 'Common Core math' },
        { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: '8 + 2 + 3 = 13'
  },

  personalityCss: `
.ag-root.ag-eh .ag-hero h1 { letter-spacing: -0.014em; max-width: 21ch; }
.ag-root.ag-eh .ag-capsule { border-left-width: 4px; border-radius: 10px; }
.ag-root.ag-eh .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-eh .ag-table td { font-variant-numeric: tabular-nums; line-height: 1.55; }
.ag-root.ag-eh .ag-section-head h2 { max-width: 30ch; }
`,

  dossier: {
    curriculumAuthority: 'Great Minds pages read raw 31 October 2026: Eureka Math (most widely used K-5 claim, attributed; same models grade to grade; fewer topics on major work), Eureka Math squared (PreK to Algebra I; models consistent across grades; spiraling curriculum), family engagement (Parent and Family Tip Sheets, Homework Helpers for every homework assignment, Grade Roadmaps, number bond model K to 5, card games), Parent Tip Sheets K to 5 module titles. New York State Education Department EngageNY page: support discontinued July 7, 2022; files archived under CC BY-NC-SA.',
    localProject: 'Our worked examples: make ten 8 + 5 = 13, 46 + 38 = 84 by tens and ones, a bar drawing for 48 cans (unit 12; 12 and 36), 3/4 on a number line, 1/2 + 1/3 = 5/6; a parent glossary of six models; a five-step homework routine; a practice set. Lesson family: decomposing to make ten, drawn as a number bond.',
    requiredMentions: [
      'The most widely used K-5 math curriculum in the U.S.',
      'use the same models and problem-solving methods from grade to grade',
      'High-leverage models remain consistent across grades',
      'This spiraling curriculum helps students build, revisit, and retain knowledge over time.',
      'discontinued support for the EngageNY.org website on July 7, 2022',
      'There is a Homework Helper to go with every homework assignment in the curriculum.',
      'arranged in the same sequence as the student homework',
      'bridge the gap between the way math was once taught and the techniques used in Eureka Math',
      'Fractions as Numbers on the Number Line',
      '8 + 2 = 10, then 10 + 3 = 13'
    ],
    sources: [
      { claim: 'Eureka Math overview, Great Minds.', url: 'https://greatminds.org/math/eurekamath' },
      { claim: 'Eureka Math squared overview.', url: 'https://greatminds.org/math/eurekamathsquared' },
      { claim: 'Eureka Math family resources: tip sheets, Homework Helpers, roadmaps, number bond model.', url: 'https://greatminds.org/math/eurekamath/family-engagement' },
      { claim: 'Parent Tip Sheets K to 5 and module titles.', url: 'https://greatminds.org/knowledge/resources/parent-tip-sheets-k-5' },
      { claim: 'NYSED EngageNY archive notice.', url: 'https://www.nysed.gov/curriculum-instruction/engageny' }
    ],
    rejectedClaims: [
      'Great Minds proficiency-growth figures and district testimonials: not repeated.',
      'That Eureka Math uses tape diagrams, ten-frames or place value charts in a specific lesson: not claimed from a source; the glossary is labelled as our description and parents are pointed to the tip sheet for each topic.',
      'Eureka Math prices and book prices: not used.',
      'Copies of Eureka or EngageNY lessons, problem sets or homework pages: not reproduced; all examples are ours.',
      'That tutoring raises grades or test scores: refused.',
      'Any affiliation with Great Minds or NYSED: none, stated on the page.'
    ]
  }
};
