'use strict';
// Computer science graduation requirements by state (ag- state data door; US cluster Phase 3, row 52).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources read raw on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/computer-science-graduation-requirements-by-state/):
//  - Code.org (2025). 2025 State of AI + CS Education, full report PDF (linked from advocacy.code.org/stateofdigitalfluency/,
//    licence stated there: CC BY-NC-SA 4.0, "Authorization to reproduce this report in whole or in part is granted.").
//    Data "finalized on Dec. 1, 2025". Summary page: "0 out of 50 states require AI+CS for graduation"; "The 12 states
//    with CS graduation requirements show more growth in access and participation."; chart values read from the
//    rendered page: access 65%, 69%, 74%, 74%, 76% (requirement) vs 49%, 50%, 55%, 58%, 58% (none), 2020-21 to 2024-25;
//    participation 7.2%, 8.9%, 8.5%, 9.0%, 10.4% vs 4.8%, 5.8%, 6.0%, 5.9%, 5.3%. Highlights: West Virginia "The only state
//    to adopt a CS graduation requirement in 2025"; Tennessee "In its third year of implementing a CS graduation
//    requirement". ND state page: "North Dakota is the only state with a computer science and cybersecurity graduation
//    requirement." Per-state Graduation Requirement toggle read from the colour of
//    each toggle on the 51 state pages by our script (toggles.json), checked against the published total of 12
//    requirement states (match) and by eye on six state pages. Other toggles (Can Count, Require HS to Offer) are not
//    used: no published total to check them against.
//  - Code.org raw sheet (Most Recent Access Data, Participation tabs): National 60% of high schools offer CS; 6.1% of
//    high school students enrolled (871,490 of 14,364,449). No Geography, Gender, Race or Graduation tabs used.
//  - Arkansas Division of Elementary and Secondary Education memo (adecm.ade.arkansas.gov ViewApprovedMemo Id=4716):
//    "Every student, beginning with the 9th grade class of 2022-2023, must earn one full high school computer science
//    credit to graduate"; the requirement "does not necessarily increase the number of state required credits".
//  - North Dakota DPI, Bill Breakdown HB 1398 v1.0, 26 April 2023: after July 31, 2025 students are required to take one
//    unit of computer science or cybersecurity; it may satisfy one of the three existing science requirements; waived if
//    the student completed the Computer Science and Cybersecurity integration plan; in effect 2025-2026; before, one unit
//    of CS could satisfy a math requirement. (PDF text has broken ligatures, so the page paraphrases.)
//  - West Virginia Legislature, HB 2411 enrolled (2025): "Beginning with the entering ninth grade class in the 2027-2028
//    school year", one unit of credit in a high school CS course; title: credit "earned in grades eight through twelve",
//    may "substitute for one math credit or one personalized education plan credit"; CS "does not include the study of
//    everyday uses of computers and computer applications, such as keyboarding".
//  - CS4RI (Rhode Island): "at minimum, 0.5 credits of computer science during their secondary school experience(middle or
//    high school)".
//  - NC DPI press release (House Bill 8): required "for all students entering high school in the 2026-27 school year";
//    "North Carolina would be the eighth state" (2023 wording).
// Not confirmed at a state source on 17 October 2026: Alabama, Indiana, Louisiana, Nebraska (hosts did not resolve or
// connect), Tennessee (403, not retried), Nevada (page body not in the raw HTML), South Carolina (no department page found).
// Our own material, labelled: the grade-by-grade checklist, the Python tally script and its output (12 of 51 and a
// sorted list), and the count of five state-source confirmations among the twelve.
// Lesson family: counting and filtering a table with csv.DictReader and collections.Counter.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const GRAD_ROWS = [
  ['Alabama', 'Yes', 'Not confirmed at a state source'],
  ['Alaska', 'No', 'Not applicable'],
  ['Arizona', 'No', 'Not applicable'],
  ['Arkansas', 'Yes', 'Confirmed: ninth graders from 2022 to 2023'],
  ['California', 'No', 'Not applicable'],
  ['Colorado', 'No', 'Not applicable'],
  ['Connecticut', 'No', 'Not applicable'],
  ['Delaware', 'No', 'Not applicable'],
  ['District of Columbia', 'No', 'Not applicable'],
  ['Florida', 'No', 'Not applicable'],
  ['Georgia', 'No', 'Not applicable'],
  ['Hawaii', 'No', 'Not applicable'],
  ['Idaho', 'No', 'Not applicable'],
  ['Illinois', 'No', 'Not applicable'],
  ['Indiana', 'Yes', 'Not confirmed at a state source'],
  ['Iowa', 'No', 'Not applicable'],
  ['Kansas', 'No', 'Not applicable'],
  ['Kentucky', 'No', 'Not applicable'],
  ['Louisiana', 'Yes', 'Not confirmed at a state source'],
  ['Maine', 'No', 'Not applicable'],
  ['Maryland', 'No', 'Not applicable'],
  ['Massachusetts', 'No', 'Not applicable'],
  ['Michigan', 'No', 'Not applicable'],
  ['Minnesota', 'No', 'Not applicable'],
  ['Mississippi', 'No', 'Not applicable'],
  ['Missouri', 'No', 'Not applicable'],
  ['Montana', 'No', 'Not applicable'],
  ['Nebraska', 'Yes', 'Not confirmed at a state source'],
  ['Nevada', 'Yes', 'Not confirmed at a state source'],
  ['New Hampshire', 'No', 'Not applicable'],
  ['New Jersey', 'No', 'Not applicable'],
  ['New Mexico', 'No', 'Not applicable'],
  ['New York', 'No', 'Not applicable'],
  ['North Carolina', 'Yes', 'Confirmed: entering high school 2026 to 2027'],
  ['North Dakota', 'Yes', 'Confirmed: from July 31, 2025, CS or cybersecurity'],
  ['Ohio', 'No', 'Not applicable'],
  ['Oklahoma', 'No', 'Not applicable'],
  ['Oregon', 'No', 'Not applicable'],
  ['Pennsylvania', 'No', 'Not applicable'],
  ['Rhode Island', 'Yes', 'Confirmed: 0.5 credit, middle or high school'],
  ['South Carolina', 'Yes', 'Not confirmed at a state source'],
  ['South Dakota', 'No', 'Not applicable'],
  ['Tennessee', 'Yes', 'Not confirmed at a state source'],
  ['Texas', 'No', 'Not applicable'],
  ['Utah', 'No', 'Not applicable'],
  ['Vermont', 'No', 'Not applicable'],
  ['Virginia', 'No', 'Not applicable'],
  ['Washington', 'No', 'Not applicable'],
  ['West Virginia', 'Yes', 'Confirmed: ninth graders from 2027 to 2028'],
  ['Wisconsin', 'No', 'Not applicable'],
  ['Wyoming', 'No', 'Not applicable']
];

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'STATE DATA', blurb: 'Which US states require a computer science course to graduate, state by state, from the 2025 Code.org report and state sources.' },
  slug: 'computer-science-graduation-requirements-by-state',
  code: 'csgr',
  accent: '#10106B',
  accentRationale: 'CS graduation requirements by state: a deep ledger indigo, #10106B as allocated, far from the other US accents and dark enough for strong contrast on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'CS graduation requirements by state',
  title: 'Computer Science Graduation Requirements by State',
  description: 'Which US states require a computer science course to graduate: a 50-state and DC table from the 2025 Code.org report, plus what state sources confirm.',
  ogDescription: 'Twelve states required a computer science course for a high school diploma in the 2025 Code.org report. The full state table, start years where a state source confirms them, and what it means for your student.',
  twitterDescription: 'Computer science graduation requirements in all 50 states and DC, with state sources.',
  pageName: 'Computer Science Graduation Requirements by State',
  webPageDescription: 'A state-by-state reference to US high school computer science graduation requirements, built from the 2025 State of AI + CS Education report and checked against state sources where they could be read.',
  courseDescription: 'Live online computer science classes for US high school students who need or want a CS credit-level foundation, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'CS graduation requirements by state',
  navLinks: [
    { href: '#table', label: 'All 51' },
    { href: '#twelve', label: 'The twelve' },
    { href: '#effect', label: 'Access gap' },
    { href: '#count', label: 'Math or science credit' },
    { href: '#tally', label: 'Python tally' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; 50 states and DC &middot; High school diploma rules',
  h1: 'Computer science graduation requirements by state',
  lede: 'Does your state make a student take computer science to earn a high school diploma? In the 2025 State of AI + CS Education report, twelve states did. This page lists all fifty states and the District of Columbia in one table, shows the start year wherever we could read it on a state website, and explains what the rule usually means in practice: which graduating class it starts with, how much credit it asks for, and whether the course can stand in for another subject.',
  secondaryCta: { href: '#table', label: 'Jump to the state table' },
  wa: 'Hello Modern Age Coders, my child is in a US high school and needs a computer science course. Could we book a free first lesson?',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students &middot; computer science from first program to AP',
  spec: [
    ['States with a rule', 'Twelve, per Code.org (2025)'],
    ['AI in the rule', 'None of 50 yet'],
    ['Table covers', '50 states and DC'],
    ['Data finalized', 'December 1, 2025'],
    ['Our classes', 'Live, online, US time zones'],
    ['Formats', 'Batch or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Twelve states require a high school computer science course for graduation, according to Code.org (2025), 2025 State of AI + CS Education: Alabama, Arkansas, Indiana, Louisiana, Nebraska, Nevada, North Carolina, North Dakota, Rhode Island, South Carolina, Tennessee and West Virginia. No state yet requires a course that combines AI and computer science. Start years differ: Arkansas began with ninth graders in 2022 to 2023, West Virginia begins with ninth graders in 2027 to 2028. Modern Age Coders teaches this live online for US students, in a batch or one to one, and the first class is free.',

  picks: {
    eyebrow: 'Meet the requirement with confidence',
    h2: 'Three courses that cover a high school CS foundation',
    lede: 'Taken alongside school, these build the programming, data and computing ideas that state CS courses are written around.',
    items: [
      { course: 'ap-computer-science-principles-exam-prep-course', code: 'CSGR / 01', title: 'AP Computer Science Principles', note: 'Grades 9 to 12. The broad CS course many schools use for the requirement.' },
      { course: 'python-complete-masterclass-teens', code: 'CSGR / 02', title: 'Python for teens', note: 'Ages 13 to 18. Real programs, data and small projects.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', code: 'CSGR / 03', title: 'AP Computer Science A', note: 'High school. Java and objects, for students going further.' }
    ]
  },

  sections: [
    {
      id: 'table', tint: 'tint', eyebrow: 'All 50 states and DC',
      h2: 'The state table: who requires a CS course to graduate',
      lede: 'The middle column comes from each state page of the 2025 report: "Yes" means Code.org marked a CS graduation requirement as passed or implemented, "No" means it did not, and the column adds up to the report&rsquo;s own total of twelve. The right column says what we could confirm on a state website. A law passed after the data were finalized on December 1, 2025 will not show here.',
      body: [
        { kind: 'table', caption: 'High school CS graduation requirements by state, from Code.org (2025), 2025 State of AI + CS Education, with state-source checks (read 17 October 2026)', head: ['State', 'CS graduation requirement', 'At a state source (17 October 2026)'], rows: GRAD_ROWS },
        { kind: 'source', html: 'Source: Code.org (2025). 2025 State of AI + CS Education, the state summary pages of the <a class="ag-inline-link" href="https://advocacy.code.org/stateofdigitalfluency/" rel="noopener" target="_blank">full report</a>, published under a CC BY-NC-SA 4.0 licence. The organisation now calls itself CodeAI. We read each state&rsquo;s graduation-requirement toggle from the published pages; the twelve we found match the report&rsquo;s own total. We are not connected with Code.org or with any state education agency.' },
        { kind: 'two', mt: true,
          leftH3: 'How to read a "No"',
          left: [
            'A "No" does not mean a state ignores computer science. Many states fund teacher training, publish standards or expect schools to offer a course without making it compulsory for every student, and those policies are separate from the diploma rule shown here.',
            'It also does not mean nothing is coming. Bills and board rules move every session, so a state marked "No" in the 2025 data may have adopted a rule since. Check your state education department before you plan a schedule around this table.'
          ],
          rightH3: 'How to read a "Yes"',
          right: [
            'A "Yes" means a trackable computer science credit is required for a diploma, but the details are set by each state: how much credit, which courses qualify, which graduating class it starts with, and who is exempt.',
            'Those details are in the next section for the twelve states, with the wording we could read on a state site and a plain note where a state page could not be reached on 17 October 2026.'
          ] }
      ]
    },
    {
      id: 'twelve', tint: 'deep', eyebrow: 'The twelve states',
      h2: 'What each requirement says, where a state source confirms it',
      lede: 'We tried to read every one of the twelve on an official state website. Where the page loaded, the row quotes or closely paraphrases it. Where it did not, the row says so rather than guessing a start year.',
      body: [
        { kind: 'table', caption: 'The twelve CS graduation requirement states, checked at state sources on 17 October 2026', head: ['State', 'What the official source says', 'Source'], rows: [
          ['Alabama', 'Not confirmed at a state source (17 October 2026)', 'Code.org (2025) only'],
          ['Arkansas', '"Every student, beginning with the 9th grade class of 2022-2023, must earn one full high school computer science credit to graduate"', 'Arkansas education department memo'],
          ['Indiana', 'Not confirmed at a state source (17 October 2026)', 'Code.org (2025) only'],
          ['Louisiana', 'Not confirmed at a state source (17 October 2026)', 'Code.org (2025) only'],
          ['Nebraska', 'Not confirmed at a state source (17 October 2026)', 'Code.org (2025) only'],
          ['Nevada', 'Not confirmed at a state source (17 October 2026)', 'Code.org (2025) only'],
          ['North Carolina', 'Required "for all students entering high school in the 2026-27 school year"', 'NC Department of Public Instruction'],
          ['North Dakota', 'After July 31, 2025, one unit of computer science or cybersecurity, which may satisfy one of the three science requirements', 'ND Department of Public Instruction'],
          ['Rhode Island', '"at minimum, 0.5 credits of computer science" in middle or high school, with demonstrated proficiency', 'CS4RI, the state CS initiative'],
          ['South Carolina', 'Not confirmed at a state source (17 October 2026)', 'Code.org (2025) only'],
          ['Tennessee', 'Not confirmed at a state source (17 October 2026)', 'Code.org (2025) only'],
          ['West Virginia', '"Beginning with the entering ninth grade class in the 2027-2028 school year", one unit of credit in a high school CS course', 'West Virginia Legislature, HB 2411 as enrolled']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Start years are not the same thing as adoption years',
          left: [
            'A state can pass a rule years before it bites. North Carolina&rsquo;s law dates from 2023, but it applies to students entering high school in the 2026 to 2027 school year. West Virginia&rsquo;s bill passed in 2025 and applies to ninth graders entering in 2027 to 2028.',
            'For a family, the useful question is not "does my state have a rule?" but "does it apply to my child&rsquo;s graduating class?" A freshman who started before the first covered year is usually outside it.'
          ],
          rightH3: 'Two rules that look unusual',
          right: [
            'North Dakota is described in the 2025 report as "the only state with a computer science and cybersecurity graduation requirement." The state&rsquo;s own summary lets a cybersecurity unit meet it, and waives it for a student who completed the school&rsquo;s integration plan.',
            'Rhode Island sets a half credit as the default and lets it be earned in middle or high school, tied to proficiency in the state CS standards rather than seat time alone.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://adecm.ade.arkansas.gov/ViewApprovedMemo.aspx?Id=4716" rel="noopener" target="_blank">Arkansas memo</a>; <a class="ag-inline-link" href="https://www.nd.gov/dpi/sites/www/files/documents/SAO/Credentials/GENERALBill%20BreakdownHB1398.pdf" rel="noopener" target="_blank">North Dakota DPI, HB 1398 breakdown</a>; <a class="ag-inline-link" href="https://www.wvlegislature.gov/Bill_Text_HTML/2025_SESSIONS/RS/bills/hb2411%20sub1%20enr.pdf" rel="noopener" target="_blank">West Virginia HB 2411</a>; <a class="ag-inline-link" href="https://www.cs4ri.org/cs-proficiency" rel="noopener" target="_blank">CS4RI</a>; <a class="ag-inline-link" href="https://www.dpi.nc.gov/news/press-releases/2023/10/02/nc-students-gain-computer-science-skills-passage-house-bill-8" rel="noopener" target="_blank">NC DPI House Bill 8 release</a>. All read 17 October 2026.' }
      ]
    },
    {
      id: 'effect', tint: 'tint', eyebrow: 'The access gap',
      h2: 'Do requirement states offer more computer science?',
      lede: 'The 2025 report compares the twelve requirement states with the rest over five school years. The gap is large and it has widened, though a comparison like this cannot prove the rule caused it.',
      body: [
        { kind: 'table', caption: 'Share of high schools offering CS, requirement states vs the rest (Code.org, 2025)', head: ['School year', 'Requirement states', 'Other states'], numCols: [1, 2], rows: [
          ['2020 to 2021', '65%', '49%'],
          ['2021 to 2022', '69%', '50%'],
          ['2022 to 2023', '74%', '55%'],
          ['2023 to 2024', '74%', '58%'],
          ['2024 to 2025', '76%', '58%']
        ] },
        { kind: 'table', mt: true, caption: 'Share of high school students taking CS, requirement states vs the rest (Code.org, 2025)', head: ['School year', 'Requirement states', 'Other states'], numCols: [1, 2], rows: [
          ['2020 to 2021', '7.2%', '4.8%'],
          ['2021 to 2022', '8.9%', '5.8%'],
          ['2022 to 2023', '8.5%', '6.0%'],
          ['2023 to 2024', '9.0%', '5.9%'],
          ['2024 to 2025', '10.4%', '5.3%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers say',
          left: [
            'In 2024 to 2025, 76% of high schools in requirement states offered a foundational CS course, against 58% elsewhere. The share of high school students actually enrolled was 10.4% against 5.3%.',
            'Nationally the report puts high school access at 60% and enrollment at 6.1%, the published national figures, not an average we worked out from the states.'
          ],
          rightH3: 'What they do not say',
          right: [
            'States that adopt a rule may already have been investing in teachers and courses, so some of the gap may predate the rule. The report itself words it as more growth in requirement states, not proof of cause.',
            'The report also notes participation data were missing for Nevada and incomplete for North Carolina, North Dakota and Rhode Island, so the requirement-state averages rest on fewer states in some years.'
          ] }
      ]
    },
    {
      id: 'count', tint: 'deep', eyebrow: 'Math or science credit',
      h2: 'When a CS course counts toward math or science',
      lede: 'After the start year, this is the rule families ask about most often, because it decides whether computer science squeezes out another class or replaces one. Here is what the state sources we could read say.',
      body: [
        { kind: 'table', caption: 'Ways a CS credit can count, from the state sources we could read (17 October 2026)', head: ['State', 'What the CS credit can stand in for'], rows: [
          ['North Dakota', 'One of the three science requirements; before the 2025 change, one of the math requirements'],
          ['West Virginia', 'One math credit or one personalized education plan credit, earned in grades 8 to 12'],
          ['Arkansas', 'The memo says the rule does not necessarily increase the number of credits a student needs'],
          ['Rhode Island', 'A half credit that can be earned in middle school or high school']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why it matters for planning',
          left: [
            'Where a CS course can replace a fourth math credit or a science credit, a student can meet the requirement without giving up an elective they care about. Where it cannot, computer science competes with band, a language or a second science.',
            'West Virginia&rsquo;s bill adds a detail families will appreciate: a math-substituting CS course is to be shown as equivalent to a high school math course on the transcript for admission to a state higher education institution.'
          ],
          rightH3: 'What counts as computer science',
          right: [
            'States draw the line differently. West Virginia&rsquo;s bill says computer science "does not include the study of everyday uses of computers and computer applications, such as keyboarding". A typing or office-software class will not meet a rule written that way.',
            'Ask the school counselor for the state&rsquo;s list of qualifying course codes. Arkansas, for example, checks transcripts for course codes in specific ranges rather than course titles.'
          ] }
      ]
    },
    {
      id: 'ai', tint: 'tint', eyebrow: 'AI and the requirement',
      h2: 'Is AI part of any state graduation requirement yet?',
      lede: 'Not in the 2025 data. The report&rsquo;s headline count is "0 out of 50" states requiring an AI plus CS course for graduation.',
      body: [
        { kind: 'two',
          leftH3: 'Where it is heading',
          left: [
            'The report&rsquo;s rubric says a state would meet an AI plus CS graduation requirement only if every qualifying course includes what AI is, how it works, how to design AI applications and its impact on society.',
            'West Virginia is the nearest case in the report: the state plans to let a computer science course that includes AI count toward its new requirement.'
          ],
          rightH3: 'What that means for a student now',
          right: [
            'A student meeting a CS requirement today is mostly learning programming, data, networks and the impact of computing. Those are exactly the foundations an AI course builds on, so nothing learned now is wasted if AI is added later.',
            'For younger teens, the safest AI learning is about how models work, using tools whose terms allow their age. We never put an under-18 student on an adults-only chatbot.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A plan by grade',
      h2: 'What to do in each grade if your state has a rule',
      lede: 'Our checklist for families in a requirement state, or in a state likely to adopt one. It assumes a four-year high school and a CS credit somewhere in it.',
      body: [
        { kind: 'table', caption: 'A grade-by-grade checklist for a CS graduation requirement (ours)', head: ['Grade', 'What to do', 'Why'], rows: [
          ['8', 'Ask whether a middle school CS course earns high school credit', 'Rhode Island and West Virginia allow credit before ninth grade'],
          ['9', 'Confirm whether the rule covers your graduating class', 'Start years are tied to the year a student enters ninth grade'],
          ['9 or 10', 'Take the qualifying course early', 'Leaves room for AP or a second CS course later'],
          ['10 or 11', 'Decide whether CS replaces a math or science credit', 'Depends on the state and on college plans'],
          ['11', 'Consider AP Computer Science Principles or A', 'Ask whether your state lists AP CS courses as qualifying'],
          ['12', 'Check the transcript shows the right course code', 'Some states check codes, not titles']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'If your state has no rule', p: 'Computer science is still worth a credit. Ask the counselor whether a CS course can stand in for a math, science or elective credit in your state; where it can, it costs no extra slot.' },
          { h3: 'If you are moving states', p: 'Rules follow the state of graduation. North Carolina, for example, exempts students who enter public high school after completing eleventh grade.' },
          { h3: 'If school has no CS teacher', p: 'Ask about online or dual enrollment options the state approves. Learning outside school builds the skill, but only approved courses earn the credit.' }
        ] }
      ]
    },
    {
      id: 'tally', tint: 'tint', eyebrow: 'Try it yourself',
      h2: 'Count the table with ten lines of Python',
      lede: 'A small exercise our high school students do with any published table: copy it into a CSV file, then let code do the counting so you can check a report&rsquo;s headline figure yourself.',
      body: [
        { kind: 'code', label: 'tally.py (our example)', lang: 'Python 3', code: 'import csv\nfrom collections import Counter\n\n# grad_requirements.csv columns: state,requirement\n# typed from the state table on this page (Code.org, 2025)\nwith open("grad_requirements.csv", newline="") as f:\n    rows = list(csv.DictReader(f))\n\ncounts = Counter(row["requirement"] for row in rows)\nprint(counts["Yes"], "of", len(rows), "require a CS course")\n\nrequired = sorted(r["state"] for r in rows if r["requirement"] == "Yes")\nprint(", ".join(required[:3]), "...", required[-1])', note: 'Run on the 51 rows above, it prints 12 of 51 require a CS course, then Alabama, Arkansas, Indiana ... West Virginia. The count matches the report&rsquo;s own total, which is the point: a reader can verify the headline, not just repeat it.' },
        { kind: 'ol', mt: true, items: [
          '<b>Copy the first two columns into a spreadsheet</b> and export them as CSV with the two column names in the comment.',
          '<b>Run the script</b> with Python 3. <code>csv.DictReader</code> turns each row into a dictionary keyed by the header.',
          '<b>Read the counts.</b> <code>Counter</code> tallies every distinct value in a column in one pass.',
          '<b>Ask a new question</b>, such as how many of the twelve a state source confirmed, by adding the third column and changing one condition.'
        ] },
        { kind: 'p', mt: true, html: 'The sorted list is the same idea as an alphabetical class roster: once the data are in a file, ordering, filtering and counting take one line each. Adding the third column turns the exercise into a check on our own work, because a student can count how many of the twelve we confirmed at a state source (five) and how many rest on the report alone (seven).' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where students start',
    h2: 'From no CS at all to a qualifying course and beyond',
    lede: 'Four stages we see in high school students who need or want a computer science credit.',
    table: { caption: 'Stages toward a high school CS credit (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. New', 'Has used computers a lot but never written a program'],
      ['2. Started', 'Has done some block coding or a short online unit'],
      ['3. Credit-ready', 'Can write small programs with loops, lists and functions'],
      ['4. Beyond the rule', 'Ready for AP CS A, data science or a project portfolio']
    ] },
    left: { h3: 'For parents', ps: [
      'A student at stage 1 in ninth grade has plenty of time. The requirement is one course; the risk is leaving it to senior year when schedules are full.',
      'Live classes help most when the school course moves fast or the student missed a foundation year.'
    ] },
    right: { h3: 'For students', ps: [
      'Treat the required course as a chance to find out whether you like building things with code. Many people only discover that by trying.',
      'Keep the small programs you write. They make a portfolio later.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for US high school computer science',
    lede: 'Arranged from first programs to university-level topics, all taught live online, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Grades 6 to 9', courses: [
        { code: 'CSGR / A / 01', slug: 'python-ai-kids-masterclass', title: 'Python for younger students', blurb: 'Typed code before high school.' },
        { code: 'CSGR / A / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Logic before syntax.' },
        { code: 'CSGR / A / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Programs that run in a browser.' }
      ] },
      { num: 'II', h3: 'The credit years', sub: 'Grades 9 to 12', courses: [
        { code: 'CSGR / B / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The core of most CS courses.' },
        { code: 'CSGR / B / 02', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP CS Principles', blurb: 'Broad CS and the Create task.' },
        { code: 'CSGR / B / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Tables, charts and first models.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Strong students', courses: [
        { code: 'CSGR / C / 01', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP CS A', blurb: 'Java, objects and the exam.' },
        { code: 'CSGR / C / 02', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Defensive skills, safely taught.' },
        { code: 'CSGR / C / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'How models learn from data.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Classes that sit beside a school CS course',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school in Eastern, Central, Mountain or Pacific time.' },
      { time: 'Weekends', l: 'Useful for catching up before a unit test.' },
      { time: '1-on-1', l: 'Paced to the school syllabus, week by week.' }
    ],
    cells: [
      { h3: 'Same teacher', p: 'One teacher follows the student all term.' },
      { h3: 'School-aware', p: 'Lessons track the course the school uses.' },
      { h3: 'Real programs', p: 'Every concept ends in code that runs.' },
      { h3: 'Concepts, not answers', p: 'We teach the idea so graded work stays theirs.' },
      { h3: 'Any state', p: 'Live online from anywhere in the US.' },
      { h3: 'Group or private', p: 'Fifteen to twenty learners, or one to one.' }
    ]
  },

  projectsH2: 'Programs our students have built',
  projectsLede: 'Real work from our learners, from first scripts to full apps. See more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents wrote on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Classes are billed month by month in US dollars. A student can join for one semester of support alongside a school CS course and stop when it ends.',
    free: ['A free first lesson', 'A quick level check', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Paced to the school course', 'Your own schedule']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'CS graduation requirements: common questions',
    items: [
      { q: 'How many states require computer science to graduate?', a: 'Twelve, according to Code.org (2025), 2025 State of AI + CS Education: Alabama, Arkansas, Indiana, Louisiana, Nebraska, Nevada, North Carolina, North Dakota, Rhode Island, South Carolina, Tennessee and West Virginia. The data were finalized on December 1, 2025.' },
      { q: 'Does any state require an AI course to graduate?', a: 'Not in the 2025 report, which counts zero of 50 states with an AI plus computer science graduation requirement. West Virginia plans to let a CS course that includes AI count toward its new requirement.' },
      { q: 'When does the North Carolina requirement start?', a: 'The NC Department of Public Instruction says it applies to all students entering high school in the 2026-27 school year.' },
      { q: 'When does the West Virginia requirement start?', a: 'House Bill 2411, as enrolled in 2025, applies beginning with the entering ninth grade class in the 2027-2028 school year. The credit can be earned in grades 8 through 12.' },
      { q: 'Can computer science count as a math or science credit?', a: 'Often, but it depends on the state. North Dakota lets the required unit satisfy one of its three science requirements, and West Virginia lets it substitute for one math credit or one personalized education plan credit. Ask your school counselor for your state\'s rule.' },
      { q: 'Does a keyboarding or office software class count?', a: 'Usually not. West Virginia\'s law, for example, says computer science does not include the study of everyday uses of computers and computer applications, such as keyboarding. Check the state\'s list of qualifying courses.' },
      { q: 'My state has no requirement. Should my child take CS anyway?', a: 'It is worth it for most students. Ask whether a CS course can stand in for another subject in your state, and remember that the programming and data skills carry into science, math and many college majors.' },
      { q: 'Is this table up to date?', a: 'It reflects the 2025 report, with data finalized on December 1, 2025. Laws passed since then will not appear, so confirm with your state education department or school counselor before planning around it.' },
      { q: 'What times are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We teach US students in every time zone.' },
      { q: 'Can you help with a school CS assignment?', a: 'We teach the concepts behind the assignment so the student can solve it themselves. We do not write graded work for students.' },
      { q: 'Is Modern Age Coders connected with Code.org or any state?', a: 'No. We are an independent online school. This page reports their published information and links to it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US students and families working through high school computer science.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every page we have for US families.' },
      { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina', p: 'One requirement state in depth.' },
      { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles', p: 'The course many students take for credit.' },
      { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A', p: 'Java for the next step.' },
      { href: '/homeschool-coding-curriculum', label: 'Homeschool coding', p: 'Planning CS at home.' },
      { href: '/computer-science-extracurriculars', label: 'CS extracurriculars', p: 'Beyond the one required course.' },
      { href: '/computer-science-standards-by-state', label: 'CS standards by state', p: 'Which states have K-12 computer science standards, and which include AI.' },
      { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state', p: 'High school computer science access and enrollment in every US state, 2025 data.' },
      { href: '/ai-guidance-for-schools-by-state', label: 'AI guidance for schools by state', p: 'State AI guidance for schools, all 50 states and DC, from the 2025 Code.org report.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us your state, your student&rsquo;s grade and the CS course the school offers. The teacher will check where the student stands and suggest a pace for the semester.',
    readFirst: 'You can read <a class="ag-inline-link" href="/how-we-teach">how our lessons work</a> first, or browse the <a class="ag-inline-link" href="/courses">course syllabuses</a>.',
    note: 'Our teachers work live over video from India, and plan around US school calendars and time zones. WhatsApp reaches us fastest.',
    formNote: 'The first lesson is free and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'High school CS', links: [
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A' },
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
        { href: '/coding-classes-in-texas', label: 'Texas' },
        { href: '/coding-classes-in-california', label: 'California' }
      ] }
    ],
    bottomRight: 'Twelve states, one course'
  },

  personalityCss: `
.ag-root.ag-csgr .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-csgr .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-csgr .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-csgr .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-csgr .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-csgr .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'Code.org (2025), 2025 State of AI + CS Education, read raw 17 October 2026: twelve CS graduation requirement states; 0 of 50 with AI + CS graduation requirement; access 76% vs 58% and participation 10.4% vs 5.3% in 2024-25 for requirement vs other states; data finalized Dec. 1, 2025; national 60% access and 6.1% enrollment; per-state graduation requirement toggles, 12 yes, matching the published total. State sources: Arkansas memo (9th grade class of 2022-2023, one full credit); NC DPI (entering high school 2026-27); ND DPI HB 1398 breakdown (after July 31, 2025, CS or cybersecurity, science credit, waiver); WV HB 2411 enrolled (entering ninth grade 2027-2028, grades 8 to 12, math or PEP substitution, keyboarding excluded); CS4RI (0.5 credits, middle or high school).',
    localProject: 'Our Python tally of the 51-row table with csv.DictReader and Counter: 12 of 51 require a CS course (matching the report), sorted list Alabama to West Virginia; five of the twelve confirmed at a state source. Our grade 8 to 12 checklist. Lesson family: counting and filtering a table.',
    requiredMentions: ['beginning with the 9th grade class of 2022-2023', 'entering ninth grade class in the 2027-2028 school year', 'at minimum, 0.5 credits of computer science', 'entering high school in the 2026-27 school year', 'computer science and cybersecurity graduation requirement', '0 out of 50', 'December 1, 2025', '10.4%', 'such as keyboarding', 'Alabama, Arkansas, Indiana ... West Virginia', 'Confirmed: ninth graders from 2022 to 2023', 'csv.DictReader'],
    sources: [
      { claim: '2025 State of AI + CS Education report: state policy pages, totals, graduation requirement comparison.', url: 'https://advocacy.code.org/stateofdigitalfluency/' },
      { claim: 'Code.org raw data: national access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'Arkansas: one full CS credit from the 9th grade class of 2022-2023.', url: 'https://adecm.ade.arkansas.gov/ViewApprovedMemo.aspx?Id=4716' },
      { claim: 'North Dakota: HB 1398 bill breakdown.', url: 'https://www.nd.gov/dpi/sites/www/files/documents/SAO/Credentials/GENERALBill%20BreakdownHB1398.pdf' },
      { claim: 'West Virginia: HB 2411 enrolled.', url: 'https://www.wvlegislature.gov/Bill_Text_HTML/2025_SESSIONS/RS/bills/hb2411%20sub1%20enr.pdf' },
      { claim: 'Rhode Island: CS proficiency as a graduation requirement.', url: 'https://www.cs4ri.org/cs-proficiency' },
      { claim: 'North Carolina: House Bill 8 release, students entering high school in 2026-27.', url: 'https://www.dpi.nc.gov/news/press-releases/2023/10/02/nc-students-gain-computer-science-skills-passage-house-bill-8' }
    ],
    rejectedClaims: [
      'Start years for Alabama, Indiana, Louisiana, Nebraska, Nevada, South Carolina and Tennessee: state hosts did not resolve, did not connect, refused (403) or held no readable text on 17 October 2026, so the page says not confirmed rather than repeating search summaries.',
      'Senior-class CS participation figures printed on the report state pages: they come from the Graduation tabs, which this cluster does not use.',
      'Gender, race, rural and school-size lines from the report: not used.',
      'The AI professional development funding column: our toggle reading found six states against a published total of five, so the column is left out.',
      'Per-state "CS can count toward a core credit" and "every high school must offer CS" statuses: read only from toggles with no published total to check against, so not printed.',
      'That a graduation rule causes higher access: the report compares states; the page says it cannot prove cause.',
      'Any affiliation with Code.org (CodeAI) or any state agency: none, and the page says so.'
    ]
  }
};
