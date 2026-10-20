'use strict';
// High school computer science access by state (ag- state data door; US cluster Phase 3, row 54).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources read raw on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/high-school-computer-science-access-by-state/):
//  - Code.org (2025). 2025 State of AI + CS Education, raw data sheet (sheet.xlsx), tabs used: Access Percent over the Years,
//    Most Recent Access Data, Participation Percent over the Years, Most Recent Participation Data. Geography, Size, Gender,
//    Race, Other Student Groups, Graduation and Demographics tabs NOT used. Values quoted as published; percentages
//    rounded to one decimal by us from the published ratio (e.g. 351 / 382 = 91.9%).
//    National: 14,805 of 24,405 high schools (60%, "Combined Years"); 871,490 of 14,364,449 students (6.07%); national
//    access by year 45% (2018-19, "only from 39 states"), 47%, 51%, 53%, 57.7%, 60%, 60%; national participation 5.1%,
//    6.2%, 6.4%, 6.4%, 6.1% (2020-21 to 2024-25). Participation tab note: total students from "NCES Digest of Education
//    Statistics Table 203.04 Fall 2022". Sheet note: North Dakota figures include cybersecurity.
//  - Code.org report-data page: "Suggested Citation: Code.org (2025). 2025 State of AI + CS Education."; underlying data
//    contributed by CSTA, the College Board and "many state education agencies". Report PDF summary: participation chart
//    based on 37 to 42 states; North Dakota under the national definition: "53% of high schools offered CS, and 7.4% of high
//    school students took a CS course in the 2023-2024 school year"; Alaska: "We encountered some challenges collecting data
//    for Alaska this year". Licence on the report page: CC BY-NC-SA 4.0.
// Our own calculations, labelled on the page: one-decimal shares; percentage-point changes from 2019-20 to each state's most
// recent year (from rounded whole percents); high schools without CS = total minus offering (Texas 2,160 - 1,036 = 1,124;
// California 2,282 - 1,325 = 957; national 24,405 - 14,805 = 9,600, both national figures published); the Python sort
// example and its output.
// Lesson family: ratios, percentage format and sorting with a key function.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const ACCESS_ROWS = [
  ["Alabama", "2024 to 2025", "351 of 382", "91.9%"],
  ["Alaska", "2024 to 2025", "89 of 260", "34.2%"],
  ["Arizona", "2023 to 2024", "278 of 643", "43.2%"],
  ["Arkansas", "2024 to 2025", "301 of 301", "100.0%"],
  ["California", "2023 to 2024", "1,325 of 2,282", "58.1%"],
  ["Colorado", "2023 to 2024", "344 of 519", "66.3%"],
  ["Connecticut", "2023 to 2024", "173 of 207", "83.6%"],
  ["Delaware", "2024 to 2025", "36 of 57", "63.2%"],
  ["District of Columbia", "2024 to 2025", "27 of 45", "60.0%"],
  ["Florida", "2023 to 2024", "463 of 1,192", "38.8%"],
  ["Georgia", "2024 to 2025", "399 of 495", "80.6%"],
  ["Hawaii", "2024 to 2025", "46 of 69", "66.7%"],
  ["Idaho", "2024 to 2025", "117 of 266", "44.0%"],
  ["Illinois", "2023 to 2024", "418 of 721", "58.0%"],
  ["Indiana", "2023 to 2024", "368 of 414", "88.9%"],
  ["Iowa", "2024 to 2025", "306 of 355", "86.2%"],
  ["Kansas", "2023 to 2024", "153 of 404", "37.9%"],
  ["Kentucky", "2024 to 2025", "270 of 358", "75.4%"],
  ["Louisiana", "2024 to 2025", "144 of 366", "39.3%"],
  ["Maine", "2024 to 2025", "72 of 123", "58.5%"],
  ["Maryland", "2024 to 2025", "219 of 219", "100.0%"],
  ["Massachusetts", "2023 to 2024", "325 of 400", "81.2%"],
  ["Michigan", "2023 to 2024", "674 of 1,228", "54.9%"],
  ["Minnesota", "2023 to 2024", "275 of 799", "34.4%"],
  ["Mississippi", "2024 to 2025", "204 of 234", "87.2%"],
  ["Missouri", "2023 to 2024", "310 of 551", "56.3%"],
  ["Montana", "2024 to 2025", "66 of 172", "38.4%"],
  ["Nebraska", "2023 to 2024", "141 of 276", "51.1%"],
  ["Nevada", "2023 to 2024", "143 of 146", "97.9%"],
  ["New Hampshire", "2024 to 2025", "89 of 95", "93.7%"],
  ["New Jersey", "2023 to 2024", "377 of 437", "86.3%"],
  ["New Mexico", "2023 to 2024", "126 of 235", "53.6%"],
  ["New York", "2023 to 2024", "674 of 1,360", "49.6%"],
  ["North Carolina", "2024 to 2025", "513 of 735", "69.8%"],
  ["North Dakota", "2023 to 2024", "148 of 176", "84.1%"],
  ["Ohio", "2023 to 2024", "635 of 1,045", "60.8%"],
  ["Oklahoma", "2023 to 2024", "334 of 467", "71.5%"],
  ["Oregon", "2023 to 2024", "195 of 347", "56.2%"],
  ["Pennsylvania", "2023 to 2024", "530 of 684", "77.5%"],
  ["Rhode Island", "2023 to 2024", "50 of 63", "79.4%"],
  ["South Carolina", "2024 to 2025", "276 of 300", "92.0%"],
  ["South Dakota", "2023 to 2024", "97 of 178", "54.5%"],
  ["Tennessee", "2024 to 2025", "384 of 464", "82.8%"],
  ["Texas", "2023 to 2024", "1,036 of 2,160", "48.0%"],
  ["Utah", "2024 to 2025", "175 of 213", "82.2%"],
  ["Vermont", "2023 to 2024", "33 of 55", "60.0%"],
  ["Virginia", "2023 to 2024", "229 of 335", "68.4%"],
  ["Washington", "2024 to 2025", "396 of 774", "51.2%"],
  ["West Virginia", "2024 to 2025", "94 of 121", "77.7%"],
  ["Wisconsin", "2023 to 2024", "318 of 585", "54.4%"],
  ["Wyoming", "2024 to 2025", "59 of 92", "64.1%"]
];

const PART_ROWS = [
  ["Alabama", "17,488 of 222,089", "7.9%"],
  ["Alaska", "Not reported", "Not reported"],
  ["Arizona", "14,180 of 368,829", "3.8%"],
  ["Arkansas", "37,330 of 148,457", "25.1%"],
  ["California", "103,362 of 1,936,526", "5.3%"],
  ["Colorado", "Not reported", "Not reported"],
  ["Connecticut", "12,411 of 164,921", "7.5%"],
  ["Delaware", "Not reported", "Not reported"],
  ["District of Columbia", "Not reported", "Not reported"],
  ["Florida", "20,233 of 894,064", "2.3%"],
  ["Georgia", "43,559 of 545,924", "8.0%"],
  ["Hawaii", "1,317 of 51,961", "2.5%"],
  ["Idaho", "1,751 of 99,336", "1.8%"],
  ["Illinois", "35,902 of 595,765", "6.0%"],
  ["Indiana", "18,146 of 325,663", "5.6%"],
  ["Iowa", "8,124 of 156,342", "5.2%"],
  ["Kansas", "3,654 of 146,266", "2.5%"],
  ["Kentucky", "17,236 of 201,095", "8.6%"],
  ["Louisiana", "5,494 of 212,772", "2.6%"],
  ["Maine", "Not reported", "Not reported"],
  ["Maryland", "46,157 of 276,484", "16.7%"],
  ["Massachusetts", "23,127 of 292,428", "7.9%"],
  ["Michigan", "Not reported", "Not reported"],
  ["Minnesota", "5,152 of 280,848", "1.8%"],
  ["Mississippi", "14,211 of 130,037", "10.9%"],
  ["Missouri", "7,804 of 273,338", "2.9%"],
  ["Montana", "1,655 of 45,378", "3.6%"],
  ["Nebraska", "4,451 of 98,972", "4.5%"],
  ["Nevada", "Not reported", "Not reported"],
  ["New Hampshire", "Not reported", "Not reported"],
  ["New Jersey", "35,941 of 408,963", "8.8%"],
  ["New Mexico", "3,335 of 101,654", "3.3%"],
  ["New York", "24,454 of 783,223", "3.1%"],
  ["North Carolina", "27,384 of 481,741", "5.7%"],
  ["North Dakota", "5,492 of 34,185", "16.1%"],
  ["Ohio", "15,883 of 535,556", "3.0%"],
  ["Oklahoma", "15,486 of 204,594", "7.6%"],
  ["Oregon", "12,717 of 183,221", "6.9%"],
  ["Pennsylvania", "19,506 of 551,996", "3.5%"],
  ["Rhode Island", "8,172 of 44,533", "18.4%"],
  ["South Carolina", "61,733 of 240,463", "25.7%"],
  ["South Dakota", "Not reported", "Not reported"],
  ["Tennessee", "39,819 of 300,911", "13.2%"],
  ["Texas", "85,625 of 1,668,741", "5.1%"],
  ["Utah", "24,445 of 214,800", "11.4%"],
  ["Vermont", "766 of 24,384", "3.1%"],
  ["Virginia", "19,801 of 400,497", "4.9%"],
  ["Washington", "15,821 of 348,814", "4.5%"],
  ["West Virginia", "2,051 of 76,900", "2.7%"],
  ["Wisconsin", "8,377 of 262,627", "3.2%"],
  ["Wyoming", "1,938 of 29,151", "6.6%"]
];

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'STATE DATA', blurb: 'The share of high schools offering computer science in every state and DC, with student enrollment, from the 2025 Code.org data.' },
  slug: 'high-school-computer-science-access-by-state',
  code: 'hscs',
  accent: '#52261B',
  accentRationale: 'High school CS access by state: a burnt umber, #52261B as allocated, earthy and distinct from the cluster blues, high contrast on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'High school CS access by state',
  title: 'High School Computer Science Access by State, 2025 Data',
  description: 'What share of high schools offer computer science in each US state and DC, how many students take it, and how access changed since 2019, from Code.org 2025 data.',
  ogDescription: 'Sixty percent of US public high schools offer foundational computer science, but only about 6% of students take it. Every state and DC, with counts, shares and the change since 2019.',
  twitterDescription: 'High school computer science access and enrollment in every US state, 2025 data.',
  pageName: 'High School Computer Science Access by State',
  webPageDescription: 'A state-by-state data page on US high school computer science access and participation, quoted from the Code.org 2025 State of AI + CS Education raw data, with our own change calculations clearly labelled.',
  courseDescription: 'Live online computer science classes for US high school students whose school offers little or no CS, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'High school CS access by state',
  navLinks: [
    { href: '#access', label: 'Access table' },
    { href: '#trend', label: 'Change since 2019' },
    { href: '#students', label: 'Enrollment' },
    { href: '#gap', label: 'Schools without CS' },
    { href: '#sort', label: 'Python sort' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Public high schools &middot; Code.org 2025 data',
  h1: 'High school computer science access by state',
  lede: 'Can a high school student in your state take a computer science class at their own school? The answer depends heavily on where they live. In the latest national figures, 60% of public high schools offer foundational computer science, ranging from every high school in Arkansas and Maryland to about a third in Alaska and Minnesota. This page gives every state&rsquo;s count, the share of students who actually enroll, and how access has moved since 2019, with every figure tied to its source year.',
  secondaryCta: { href: '#access', label: 'Find your state' },
  wa: 'Hello Modern Age Coders, my child&rsquo;s US high school has no computer science class. Could we book a free first lesson?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students &middot; CS for students whose school has none',
  spec: [
    ['National access', '60% of high schools'],
    ['National enrollment', 'About 6.1% of students'],
    ['Full access', 'Arkansas and Maryland'],
    ['Source', 'Code.org (2025)'],
    ['Our classes', 'Live online, any state'],
    ['Formats', 'Batch or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'In Code.org (2025), 2025 State of AI + CS Education, 14,805 of 24,405 US public high schools, or 60%, offer foundational computer science, but only 871,490 of 14,364,449 high school students, about 6.1%, were enrolled, a figure based on the states that report participation (42 in 2024 to 2025). Arkansas (301 of 301) and Maryland (219 of 219) report every high school offering CS; Alaska (34.2%) and Minnesota (34.4%) report the lowest shares.',

  picks: {
    eyebrow: 'If your school has no CS class',
    h2: 'Three ways to learn computer science outside school',
    lede: 'Chosen for students in the four in ten high schools without a foundational CS course.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'HSCS / 01', title: 'Python for teens', note: 'Ages 13 to 18. The language most first CS courses use.' },
      { course: 'ap-computer-science-principles-exam-prep-course', code: 'HSCS / 02', title: 'AP CS Principles', note: 'Grades 9 to 12. The AP course content, even without a school class.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', code: 'HSCS / 03', title: 'AP Computer Science A', note: 'High school. Java and the AP exam, taught live.' }
    ]
  },

  sections: [
    {
      id: 'access', tint: 'tint', eyebrow: 'Every state and DC',
      h2: 'Share of public high schools offering computer science',
      lede: 'Each state&rsquo;s most recent year in the 2025 data. Some states last reported for 2023 to 2024, others for 2024 to 2025, so the year column matters when you compare two states.',
      body: [
        { kind: 'table', caption: 'Public high schools offering foundational computer science, by state, most recent year (Code.org, 2025)', head: ['State', 'School year', 'High schools offering CS', 'Share'], numCols: [2, 3], rows: ACCESS_ROWS },
        { kind: 'source', html: 'Suggested citation: Code.org (2025). 2025 State of AI + CS Education. Figures from the <a class="ag-inline-link" href="https://advocacy.code.org/report-data/" rel="noopener" target="_blank">raw data</a>, Most Recent Access Data tab; shares rounded to one decimal by us from the published counts. North Dakota&rsquo;s row includes cybersecurity courses; under the national definition the report puts it at 53% for 2023 to 2024. The data come largely from state education agencies, with course catalogs and teacher surveys where a state does not report. We are not connected with Code.org, now called CodeAI.' },
        { kind: 'two', mt: true,
          leftH3: 'The top of the table',
          left: [
            'Arkansas and Maryland report all of their high schools offering a foundational CS course. Nevada (143 of 146), New Hampshire (89 of 95), South Carolina (276 of 300) and Alabama (351 of 382) are all above 90%.',
            'Four of those six, Alabama, Arkansas, Nevada and South Carolina, are also listed in the same report as states with a CS graduation requirement.'
          ],
          rightH3: 'The bottom of the table',
          right: [
            'Alaska (34.2%), Minnesota (34.4%), Kansas (37.9%), Montana (38.4%), Florida (38.8%) and Louisiana (39.3%) all report fewer than four in ten high schools offering CS.',
            'The report flags Alaska specifically: Code.org says it "encountered some challenges collecting data for Alaska this year", so treat its drop with care.'
          ] }
      ]
    },
    {
      id: 'trend', tint: 'deep', eyebrow: 'Change since 2019',
      h2: 'Which states have expanded access fastest',
      lede: 'Our arithmetic on the Access Percent over the Years tab: each state&rsquo;s whole-number share for 2019 to 2020 against its most recent year. These are percentage points, not percent growth.',
      body: [
        { kind: 'table', caption: 'Largest increases in high school CS access, 2019 to 2020 vs most recent year (our calculation from Code.org, 2025)', head: ['State', '2019 to 2020', 'Most recent', 'Change (points)'], numCols: [1, 2, 3], rows: [
          ['Mississippi', '48%', '87% (2024 to 2025)', '+39'],
          ['Alabama', '57%', '92% (2024 to 2025)', '+35'],
          ['Oklahoma', '37%', '72% (2023 to 2024)', '+35'],
          ['Tennessee', '50%', '83% (2024 to 2025)', '+33'],
          ['Kentucky', '45%', '75% (2024 to 2025)', '+30'],
          ['New Hampshire', '67%', '94% (2024 to 2025)', '+27'],
          ['Georgia', '55%', '81% (2024 to 2025)', '+26'],
          ['Wyoming', '41%', '64% (2024 to 2025)', '+23'],
          ['New Mexico', '32%', '54% (2023 to 2024)', '+22'],
          ['Nevada', '77%', '98% (2023 to 2024)', '+21']
        ] },
        { kind: 'table', mt: true, caption: 'States where the most recent share is below 2019 to 2020 (our calculation from Code.org, 2025)', head: ['State', '2019 to 2020', 'Most recent', 'Change (points)'], numCols: [1, 2, 3], rows: [
          ['Rhode Island', '86%', '79% (2023 to 2024)', '-7'],
          ['Delaware', '68%', '63% (2024 to 2025)', '-5'],
          ['Virginia', '73%', '68% (2023 to 2024)', '-5'],
          ['Massachusetts', '82%', '81% (2023 to 2024)', '-1'],
          ['Texas', '49%', '48% (2023 to 2024)', '-1']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The national line',
          left: [
            'Nationally, the sheet shows 47% of high schools offering CS in 2019 to 2020, rising to 51%, 53%, 57.7% and then 60% in both 2023 to 2024 and 2024 to 2025. An earlier 45% for 2018 to 2019 rests on only 39 states.',
            'The flat last two years are why the report describes access as having plateaued, except in states with a graduation requirement.'
          ],
          rightH3: 'Reading a decline',
          right: [
            'A falling share does not always mean courses were cut. If a state opens new high schools, or counts schools differently from one year to the next, the share can move without any class disappearing.',
            'Where a figure surprises you, compare the counts as well as the percentage. The access table above gives both.'
          ] }
      ]
    },
    {
      id: 'students', tint: 'tint', eyebrow: 'Who actually enrolls',
      h2: 'Share of high school students taking computer science',
      lede: 'Access means a course exists. Participation means students take it. The second number is far smaller everywhere, and nine places did not report it.',
      body: [
        { kind: 'table', caption: 'High school students enrolled in foundational CS, most recent year each state reported (Code.org, 2025)', head: ['State', 'Students in CS', 'Share'], numCols: [1, 2], rows: PART_ROWS },
        { kind: 'source', html: 'Source: Code.org (2025). 2025 State of AI + CS Education, Most Recent Participation Data tab. The sheet notes that total student numbers come from the NCES Digest of Education Statistics, Table 203.04, Fall 2022, so the denominator is not always the same year as the enrollment count. Shares are rounded by us.' },
        { kind: 'two', mt: true,
          leftH3: 'Highest and lowest',
          left: [
            'South Carolina (25.7%) and Arkansas (25.1%) report about one high school student in four enrolled in CS. Rhode Island (18.4%), Maryland (16.7%) and North Dakota (16.1%, including cybersecurity) follow.',
            'At the other end, Idaho and Minnesota each report 1.8%, and Florida 2.3%.'
          ],
          rightH3: 'Why access and enrollment differ',
          right: [
            'A single elective section in a school of 2,000 students counts that school as offering CS, yet only a few dozen students may take it. Maryland shows the gap clearly: every high school offers CS, while 16.7% of students are enrolled.',
            'For families, the lesson is that "my school offers CS" is the start of the question. Ask how many sections run, at what level, and whether they fit around other required classes.'
          ] }
      ]
    },
    {
      id: 'gap', tint: 'deep', eyebrow: 'Schools without CS',
      h2: 'How many high schools still have no CS course',
      lede: 'Our subtraction of the published counts: total high schools minus those offering CS. It turns a percentage into a number of buildings.',
      body: [
        { kind: 'table', caption: 'High schools without a foundational CS course, largest counts (our subtraction from Code.org, 2025)', head: ['Place', 'Year', 'High schools without CS'], numCols: [2], rows: [
          ['United States (national row)', 'Combined years', '9,600'],
          ['Texas', '2023 to 2024', '1,124'],
          ['California', '2023 to 2024', '957'],
          ['Florida', '2023 to 2024', '729'],
          ['New York', '2023 to 2024', '686'],
          ['Michigan', '2023 to 2024', '554'],
          ['Minnesota', '2023 to 2024', '524']
        ] },
        { kind: 'p', mt: true, html: 'How we worked it: Texas reports 1,036 of 2,160 high schools offering CS, so 2,160 - 1,036 = 1,124 do not. The national figure is 24,405 - 14,805 = 9,600, using the published national row rather than adding up states, because states report different years. Large states dominate the count even when their share looks middling.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ask the counselor', p: 'Find out whether an online or dual enrollment CS course is approved for credit in your state.' },
          { h3: 'Ask about AP', p: 'Ask the school&rsquo;s AP coordinator whether a student can sit an AP CS exam without taking the course there.' },
          { h3: 'Learn live elsewhere', p: 'Outside classes build the skill even when they cannot give school credit. A portfolio of projects speaks for itself.' }
        ] }
      ]
    },
    {
      id: 'sort', tint: 'tint', eyebrow: 'Check the numbers',
      h2: 'Recompute and rank the shares in Python',
      lede: 'Our example for a first data lesson: start from counts, compute each share, and sort. It shows why a published percentage is only as good as the two numbers behind it.',
      body: [
        { kind: 'code', label: 'rank_access.py (our example)', lang: 'Python 3', code: '# offering, total: five rows typed from the access table (Code.org, 2025)\naccess = {\n    "Alabama": (351, 382),\n    "Florida": (463, 1192),\n    "Maryland": (219, 219),\n    "Minnesota": (275, 799),\n    "Texas": (1036, 2160),\n}\n\nshares = {state: offering / total\n          for state, (offering, total) in access.items()}\n\nfor state, share in sorted(shares.items(), key=lambda kv: kv[1], reverse=True):\n    print(f"{state:<10} {share:6.1%}")', note: 'Output, highest first: Maryland 100.0%, Alabama 91.9%, Texas 48.0%, Florida 38.8%, Minnesota 34.4%. Each matches the table, which is the check: 1036 / 2160 = 0.4796, shown as 48.0%.' },
        { kind: 'ol', mt: true, items: [
          '<b>Store pairs, not percentages.</b> Keeping offering and total lets you recompute and catch typing errors.',
          '<b>Use a dictionary comprehension</b> to turn each pair into a share in one line.',
          '<b>Sort with a key.</b> <code>key=lambda kv: kv[1]</code> sorts by the share, not the state name.',
          '<b>Format as a percentage.</b> The <code>:6.1%</code> format multiplies by 100 and adds the percent sign.',
          '<b>Extend it.</b> Add the year as a third value and print it, so no one compares 2023 to 2024 with 2024 to 2025 by accident.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where students start',
    h2: 'Four starting points for students without school CS',
    lede: 'What we usually see when a student comes to us from a high school with little or no computer science.',
    table: { caption: 'Starting points (ours)', head: ['Starting point', 'What it looks like'], rows: [
      ['1. Never coded', 'Curious, but no course has been available'],
      ['2. Self-taught basics', 'Some videos or block coding, no feedback'],
      ['3. One language', 'Comfortable with Python or JavaScript basics'],
      ['4. Exam-bound', 'Ready to prepare for an AP CS exam independently']
    ] },
    left: { h3: 'For parents', ps: [
      'A school without CS does not close the door. Students can still learn, build projects and, where the school allows it, sit an AP exam.',
      'What they miss is a teacher and a timetable. That is what live classes replace.'
    ] },
    right: { h3: 'For students', ps: [
      'Start with one language and one project. Breadth comes later.',
      'Keep your work in one folder or repository; it becomes your evidence when a school course is not on the transcript.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for students whose school has no CS',
    lede: 'Live lessons with one teacher across the course, available as a group class or one to one.',
    bands: [
      { num: 'I', h3: 'Beginners', sub: 'Ages 13 and up', courses: [
        { code: 'HSCS / I / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The usual first language.' },
        { code: 'HSCS / I / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Code that runs in a browser.' },
        { code: 'HSCS / I / 03', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Build and publish web pages.' }
      ] },
      { num: 'II', h3: 'Exam routes', sub: 'Grades 9 to 12', courses: [
        { code: 'HSCS / II / 01', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP CS Principles', blurb: 'Create task and exam.' },
        { code: 'HSCS / II / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP CS A', blurb: 'Java and free-response practice.' },
        { code: 'HSCS / II / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Foundations before AP CS A.' }
      ] },
      { num: 'III', h3: 'Projects', sub: 'Build a portfolio', courses: [
        { code: 'HSCS / III / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Real datasets, real charts.' },
        { code: 'HSCS / III / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web', blurb: 'An app with a database.' },
        { code: 'HSCS / III / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub', blurb: 'Show your work properly.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'A computer science class when school does not have one',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After the school day, in your own time zone.' },
      { time: 'Weekends', l: 'Longer blocks for project work.' },
      { time: '1-on-1', l: 'Paced toward an AP exam date if wanted.' }
    ],
    cells: [
      { h3: 'A real teacher', p: 'Live feedback on every program.' },
      { h3: 'A syllabus', p: 'Structured units, not random videos.' },
      { h3: 'Portfolio work', p: 'Projects worth showing colleges.' },
      { h3: 'Exam support', p: 'AP practice when the student is ready.' },
      { h3: 'Anywhere', p: 'Rural or urban, any state.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Student projects from our classes',
  projectsLede: 'Work by learners who started from scratch. Browse more on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, quoted unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly fee in US dollars, no annual commitment. Students without a school CS course often join for a full school year and stop after an exam.',
    free: ['A free first lesson', 'A level check', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Built around your goals', 'Flexible scheduling']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'High school CS access: common questions',
    items: [
      { q: 'What share of US high schools offer computer science?', a: 'About 60%: 14,805 of 24,405 public high schools, according to Code.org (2025), 2025 State of AI + CS Education. The national figure combines each state\'s most recent year.' },
      { q: 'Which states have the highest access?', a: 'Arkansas and Maryland report every high school offering CS. Nevada, New Hampshire, South Carolina and Alabama are each above 90% in their most recent year.' },
      { q: 'Which states have the lowest access?', a: 'Alaska (34.2%) and Minnesota (34.4%) report the lowest shares, followed by Kansas, Montana, Florida and Louisiana, all under 40%.' },
      { q: 'How many students actually take computer science?', a: 'Nationally, 871,490 of 14,364,449 high school students, about 6.1%, counting the states that report participation. State shares range from 25.7% in South Carolina to 1.8% in Idaho and Minnesota.' },
      { q: 'Why do some states show no enrollment figure?', a: 'Alaska, Colorado, Delaware, DC, Maine, Michigan, Nevada, New Hampshire and South Dakota had no participation figure in the most recent data. Not reported does not mean zero.' },
      { q: 'Has access improved over time?', a: 'Yes, from 47% in 2019 to 2020 to 60% in the latest two years nationally. Mississippi gained the most in our calculation, 39 percentage points.' },
      { q: 'My child\'s school has no CS class. What can we do?', a: 'Ask the counselor about state-approved online or dual enrollment courses, ask whether an AP exam can be taken without the school course, and learn live outside school. We teach students in exactly this situation.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Can I reuse these figures?', a: 'Cite the original: Code.org (2025). 2025 State of AI + CS Education. Code.org publishes the raw data and states the report licence on its site.' },
      { q: 'Are you part of Code.org?', a: 'No. Modern Age Coders is a separate online school. We quote Code.org\'s published data and link to it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US students finding computer science beyond their school.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'All our US pages in one place.' },
      { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A online', p: 'When there is no school AP class.' },
      { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles coaching', p: 'The broad AP CS course.' },
      { href: '/online-coding-classes-for-kids-usa', label: 'Online coding classes, USA', p: 'For younger students too.' },
      { href: '/computer-science-extracurriculars', label: 'CS extracurriculars', p: 'Clubs and competitions outside class.' },
      { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina', p: 'One state&rsquo;s numbers, in depth.' },
      { href: '/ai-guidance-for-schools-by-state', label: 'AI guidance for schools by state', p: 'State AI guidance for schools, all 50 states and DC, from the 2025 Code.org report.' },
      { href: '/common-core-math-vs-traditional-math', label: 'Common Core math vs traditional math', p: 'Common Core and traditional math compared from the standards, with a worked example.' },
      { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state', p: 'Computer science graduation requirements in all 50 states and DC, with state sources.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Let us know whether your school offers any computer science, and what your student has tried on their own. We will suggest a starting course and a weekly rhythm.',
    readFirst: 'Before booking, see <a class="ag-inline-link" href="/how-we-teach">the way we teach</a> or scan the <a class="ag-inline-link" href="/courses">complete catalogue</a>.',
    note: 'There is no campus to visit: classes run live online from India, timed for American evenings and weekends. WhatsApp gets the quickest answer.',
    formNote: 'No payment details needed for the free lesson.'
  },

  footer: {
    cols: [
      { h4: 'Learn CS anywhere', links: [
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online coding classes, USA' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/coding-classes-in-texas', label: 'Texas' },
        { href: '/coding-classes-in-california', label: 'California' },
        { href: '/coding-classes-in-new-york', label: 'New York' }
      ] }
    ],
    bottomRight: 'Sixty percent and counting'
  },

  personalityCss: `
.ag-root.ag-hscs .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-hscs .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-hscs .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-hscs .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-hscs .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-hscs .ag-slots { gap: 1.25rem; }
`,

  dossier: {
    curriculumAuthority: 'Code.org (2025), 2025 State of AI + CS Education raw data, Access and Participation tabs only, read 17 October 2026: national 14,805 of 24,405 high schools (60%) and 871,490 of 14,364,449 students (about 6.1%); per-state counts and years; national access 47% (2019-20) to 60%; 2018-19 from 39 states; participation denominators from NCES Table 203.04 Fall 2022; North Dakota includes cybersecurity (53% under the national definition); Alaska data collection caveat. Suggested citation from the report-data page.',
    localProject: 'Our percentage-point change table (Mississippi +39 down to Rhode Island -7), our subtraction of schools without CS (Texas 1,124; national 9,600), and our Python ranking script with its output (Maryland 100.0% to Minnesota 34.4%). Lesson family: ratios, percentage formatting and sorting with a key.',
    requiredMentions: ['14,805 of 24,405', '871,490 of 14,364,449', '301 of 301', '219 of 219', 'Table 203.04, Fall 2022', 'encountered some challenges collecting data for Alaska this year', 'rests on only 39 states', '2,160 - 1,036 = 1,124', '24,405 - 14,805 = 9,600', 'Mississippi', '+39', 'key=lambda kv: kv[1]'],
    sources: [
      { claim: 'Code.org raw data and suggested citation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: '2025 State of AI + CS Education report: Alaska and North Dakota notes, licence.', url: 'https://advocacy.code.org/stateofdigitalfluency/' },
      { claim: 'NCES Digest Table 203.04, named in the sheet as the source of student totals.', url: 'https://nces.ed.gov/programs/digest/' }
    ],
    rejectedClaims: [
      'Urban, suburban, rural and school-size access figures: from the Geography and Size tabs, which this cluster does not use.',
      'Gender, race and other student-group participation: not used.',
      'A year column for participation: the years tab and the most-recent tab disagree slightly for Florida and Mississippi, so the page gives counts and shares without a year per state and says the years vary.',
      'Summing state counts into a national total: refused; the page uses the published national row.',
      'That outside classes earn school credit: refused; the page says only approved courses do.',
      'Any affiliation with Code.org (CodeAI): none.'
    ]
  }
};
