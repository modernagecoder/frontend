'use strict';
// Michigan (cg- state page, US cluster Phase 4, row 82). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: what the published numbers say about computer science in Michigan high schools, read honestly (two tabs that
// disagree, no participation figure), plus Michigan's two time zones and a binning project on DNR campground data.
// Sources read raw on 17 and 18 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-michigan/):
//  - michigan.gov/mde returned HTTP 403 for the computer science standards page, the academic standards page and the
//    sitemap; legislature.mi.gov returned 403 for MCL 380.1278a (mde-403.txt). Not retried around. So this page prints
//    no Michigan Department of Education policy wording at all.
//  - Code.org (2025), 2025 State of AI + CS Education raw sheet (codeorg-cb-extract.txt): MI access trend tab: no
//    2018-19 value, 37% (2019-20), 44%, 46%, 55% (2022-23), 0.5367 (2023-24), no 2024-25 value. Most Recent Access tab:
//    2023-2024, 674 of 1,228 high schools, 0.5489, source "State Education Agency and School Catalogs". The two
//    2023-24 values disagree (53.7% vs 54.9%): both printed with their tab. Participation tabs: no Michigan values.
//  - College Board, School Report of AP Exams by State 2023-24: MI schools with AP exams 737 (2023), 752 (2024);
//    public 623 and 649; non-public 114 and 103.
//  - IANA zone.tab: "America/Detroit Eastern - MI (most areas)"; "America/Menominee Central - MI (Wisconsin border)";
//    northamerica Rule US 2007 max Mar Sun>=8 / Nov Sun>=1, so November 1, 2026 and March 14, 2027.
//  - Michigan DNR, DNRRecreationSearchPointsOPENDATA feature service, downloaded 17 October 2026, licence text: "This
//    dataset is a public record and, as more fully described below, there are no restrictions on the use, reproduction,
//    or distribution of this dataset." and provided "AS IS". 863 records; tag counts: Nonmotorized trail 332, State park
//    campground 292, State forest campground 141, State park 115 (tags overlap). Our filter: 433 campground records;
//    latitude 41.82 to 47.47; our whole-degree bins 41: 9, 42: 86, 43: 28, 44: 119, 45: 91, 46: 92, 47: 8; overnight tags
//    on campgrounds: Rustic sites 220, Electrical service 174, Modern campground 89.
// Lesson family: histograms and binning (and how bin width changes the story).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'MICHIGAN', label: 'Michigan', blurb: 'Coding and AI for Michigan students: the published high school CS figures read carefully, two time zones, and a DNR campground histogram project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-michigan',
  code: 'aimi',
  accent: '#2D1E8F',
  accentRationale: 'Michigan: #2D1E8F, a deep Great Lakes indigo from the allocation table, distinct from the North Carolina green and the neighbouring US accents, with comfortable text contrast on the paper',
  pageType: 'city',
  place: {
    name: 'Michigan',
    eyebrow: 'Michigan, United States',
    schemaType: 'State',
    chain: [
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Michigan',
  title: 'Coding and AI Classes in Michigan | Live Online',
  description: 'Live online coding and AI classes for Michigan students: what the published high school CS figures show, Eastern and Central time, and a DNR campground data project.',
  ogDescription: 'About half of Michigan high schools offer computer science in the latest published count. What the figures say, what they leave out, and live classes for Michigan students.',
  twitterDescription: 'Michigan coding and AI classes, live online, with a Python project on DNR campground data.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Michigan Students',
    description: 'Scratch, Python, Java, AP Computer Science and AI for Michigan students from elementary through high school, taught live online in level-matched batches or one to one.'
  },

  h1: 'Coding and AI classes in Michigan',
  capsuleQ: 'How many Michigan high schools offer computer science?',
  capsule: 'Roughly half. The Code.org 2025 data counts 674 of 1,228 Michigan high schools offering computer science in 2023 to 2024, up from 37% in 2019 to 2020, and it publishes no Michigan figure for how many students take it. Modern Age Coders fills that gap with live online classes for Michigan students, from Scratch in elementary school to AP Computer Science A.',
  lead: 'Michigan has more high schools than most states, more than twelve hundred in the latest count, and computer science has been spreading through them quickly: from just over a third of schools in 2019 to 2020 to about half by 2023 to 2024. That still leaves a Michigan teenager with roughly even odds of finding a computer science course on the timetable, depending on the school. This page reads the published numbers closely, including a place where two tables in the same dataset disagree and a place where the data is simply missing. It explains why the state needs two time zones, and it ends with a Python project on Department of Natural Resources campground data that teaches one of the most useful ideas in data science: how you group numbers changes what they appear to say.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Michigan.',

  picks: {
    eyebrow: 'Course picks for Michigan',
    h2: 'Four courses for Michigan students, by grade',
    intro: 'Each one starts at the student&rsquo;s real level, set during a free first class.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Grades 2 to 5', note: 'Zero to finished Scratch games in three months: loops, events and variables in a form a nine-year-old can explain.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'Python from first print statement to data projects, including the DNR campground histogram on this page.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', band: 'Grades 10 to 12', note: 'Java and the full AP Computer Science A syllabus, for students whose school lists the course and those whose school does not.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 9 to 12', note: 'Reading, filtering and charting public data, then a first machine learning model, with every step justified.' }
    ]
  },

  sections: [
    {
      id: 'access', tint: '', eyebrow: 'The published figures',
      h2: 'Computer science in Michigan high schools, year by year',
      intro: 'Code.org&rsquo;s 2025 data sheet has two tabs that report Michigan access. They are printed separately below, because for 2023 to 2024 they do not quite agree.',
      body: [
        { kind: 'table', caption: 'Share of Michigan high schools offering computer science, from the access-over-the-years tab (Code.org, 2025)', head: ['School year', 'Share offering CS'], rows: [
          ['2018 to 2019', 'No value published'],
          ['2019 to 2020', '37%'],
          ['2020 to 2021', '44%'],
          ['2021 to 2022', '46%'],
          ['2022 to 2023', '55%'],
          ['2023 to 2024', '53.7%'],
          ['2024 to 2025', 'No value published']
        ] },
        { kind: 'table', mt: true, caption: 'Michigan counts from the most-recent tabs and the College Board', head: ['Measure', 'Michigan', 'Source and note'], rows: [
          ['High schools offering CS, 2023 to 2024', '674 of 1,228, which works out to 54.9%', 'Code.org (2025), most recent access tab; primary source listed as State Education Agency and School Catalogs'],
          ['High school students enrolled in CS', 'Not published for Michigan', 'Code.org (2025), participation tabs show no Michigan value'],
          ['Schools with AP exams, 2023', '737 (623 public, 114 non-public)', 'College Board, School Report of AP Exams by State'],
          ['Schools with AP exams, 2024', '752 (649 public, 103 non-public)', 'College Board, School Report of AP Exams by State']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Two numbers for one year', p: 'The trend tab says 53.7% for 2023 to 2024; the count tab gives 674 of 1,228, which is 54.9%. We print both, each with its tab, rather than choosing one. The sheet does not explain the gap, so neither do we.' },
          { h3: 'A dip that may not be real', p: 'The trend shows 55% in 2022 to 2023 and 53.7% a year later. With the count tab disagreeing, a one-year fall of about a point is within the noise, so we would not call it a decline.' },
          { h3: 'The missing half', p: 'Access says whether a school lists a course. Participation says whether students take it. For Michigan the sheet has no participation figures, so nobody reading it can say how many Michigan teenagers actually study computer science.' }
        ] },
        { kind: 'callout', h3: 'Source line', p: 'Michigan access figures: Code.org (2025). 2025 State of AI + CS Education, published data sheet, Michigan rows only. AP school counts: College Board, School Report of AP Exams by State, 2023 to 2024. We quote values and do not republish either dataset.' }
      ]
    },
    {
      id: 'policy', tint: 'deep', eyebrow: 'State policy',
      h2: 'What this page does not tell you about Michigan rules, and why',
      intro: 'A state page should quote its education department. For Michigan, we could not read it on 17 October 2026.',
      body: [
        { kind: 'p', text: 'The Michigan Department of Education site refused our automated requests for its computer science standards page, its academic standards index and its sitemap, each returning an access-denied response. The state legislature&rsquo;s law pages did the same. Our rule is not to work around a refusal and not to repeat claims we have not read at the source, so this page states nothing about Michigan graduation requirements, standards adoption dates or required course offerings. You may read summaries elsewhere; we have simply not verified them.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Ask the school counselor', p: 'Whether a computer science course counts toward a Michigan diploma, and in which subject column, is set by state and district rules. The counselor at your student&rsquo;s high school can say exactly how it is recorded there.' },
          { h3: 'Check the course catalog', p: 'Code.org lists school catalogs among its Michigan sources, which is a hint worth taking: the school&rsquo;s own catalog shows which computer science courses run and in which grades.' },
          { h3: 'Use AP as a fixed point', p: 'AP Computer Science Principles and AP Computer Science A follow the same College Board framework in every state. Where a school offers neither, our classes cover the same course content, and the family can ask the school about exam arrangements.' }
        ] },
        { kind: 'callout', h3: 'What our classes are, and are not', p: 'Our classes are tuition outside school. They do not award Michigan credit and they do not replace a school course. They give a student more practice, larger projects and a teacher who can go faster or slower than a full classroom can.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'Signature project',
      h2: 'How far north do Michigan&rsquo;s campgrounds go? A histogram on DNR open data',
      intro: 'The Michigan Department of Natural Resources publishes its recreation points as open data. Students download them, filter to campgrounds, and bin them by latitude.',
      body: [
        { kind: 'table', caption: 'Michigan DNR state park and state forest campgrounds by whole degree of latitude (our binning of the DNR recreation points, downloaded 17 October 2026)', head: ['Latitude band', 'Campground records', 'Bar'], rows: [
          ['41 to 42 degrees N', '9', '#'],
          ['42 to 43 degrees N', '86', '#########'],
          ['43 to 44 degrees N', '28', '###'],
          ['44 to 45 degrees N', '119', '############'],
          ['45 to 46 degrees N', '91', '#########'],
          ['46 to 47 degrees N', '92', '#########'],
          ['47 to 48 degrees N', '8', '#']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Filter first', p: 'The service held 863 records on the day we read it. Its tags include 332 non-motorized trails, 292 state park campgrounds, 141 state forest campgrounds and 115 state parks. Keeping only the two campground tags leaves 433 records.' },
          { h3: '2. Choose a bin width', p: 'Latitudes run from 41.82 to 47.47 degrees north. One-degree bins give seven bars. Students then try half-degree bins and watch the band at 43 degrees, already thin, split into two even thinner bars.' },
          { h3: '3. Ask what the shape means', p: 'Is the low bar at 43 degrees a real gap in campgrounds, or an accident of where the bin edges fall? Moving the edges by half a degree is the quickest test, and a good habit for any chart.' }
        ] },
        { kind: 'spec', title: 'Why the tag totals do not add up', p: 'Add the tag counts and you get more than 863, because one record can carry two tags, a state park that also has a campground, for instance. Spotting that a sum overshoots its total is a small moment that teaches students to distrust a tidy-looking spreadsheet.' },
        { kind: 'callout', h3: 'Our bins, DNR data', p: 'The bins and bar lengths above are ours, from one download on 17 October 2026. The DNR describes the dataset as a public record with no restrictions on use, reproduction or distribution, provided as is and without warranty. Among the campground records, 220 carry a rustic-sites tag and 174 an electrical-service tag; the DNR did not check any of our counts.' }
      ]
    },
    {
      id: 'zones', tint: 'deep', eyebrow: 'Class times',
      h2: 'Michigan has two time zones, and our timetable handles both',
      intro: 'Most of Michigan keeps Eastern Time, but a strip along the Wisconsin border keeps Central. The IANA time zone database gives each its own entry.',
      body: [
        { kind: 'table', caption: 'Michigan in the IANA time zone database (zone.tab, read 17 October 2026)', head: ['IANA zone', 'IANA description', 'Gap to India in winter'], rows: [
          ['America/Detroit', 'Eastern, Michigan (most areas)', '10 hours 30 minutes'],
          ['America/Menominee', 'Central, Michigan (Wisconsin border)', '11 hours 30 minutes']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Same switch dates', p: 'Both zones follow the US rule: clocks fall back on November 1, 2026 and spring forward on March 14, 2027. In summer each gap to India shrinks by an hour.' },
          { h3: 'Tell us your zone', p: 'A family near the Wisconsin line reads a 4 pm Eastern class as 3 pm. When you book, say which zone you keep and we confirm every time in that zone.' },
          { h3: 'A bug students can find', p: 'Software that assumes all of Michigan is Eastern will schedule a Menominee student an hour wrong. Looking up America/Menominee instead of hard-coding an offset is a real programming lesson.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first loops to machine learning',
    intro: 'Grades are a starting guess; the first lesson decides.',
    cols: [
      { band: 'Grades K to 5', h3: 'Blocks and play', p: 'Block coding and small games, then simple ideas about how AI tools make guesses.', courses: ['kids-coding-blocks-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 6 to 8', h3: 'From blocks to text', p: 'Python with games and drawings, or a Minecraft route into real code for students who already love the game.', courses: ['python-ai-kids-masterclass', 'minecraft-coding-for-kids-course'] },
      { band: 'Grades 9 to 10', h3: 'Depth and craft', p: 'Python or JavaScript at full depth, with projects on public data and the browser.', courses: ['python-complete-masterclass-teens', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'Grades 11 to 12', h3: 'AP and models', p: 'AP Computer Science Principles, and machine learning built from the data up.', courses: ['ap-computer-science-principles-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Would an AI chatbot have caught the disagreement in the Michigan data?',
    intro: 'Probably not, unless someone asked it to. That is the case for learning to code.',
    p1: 'Ask an AI tool for the share of Michigan high schools teaching computer science and it will return one confident number. It will not usually mention that the same dataset holds two different values for the same year, or that the participation column for Michigan is empty. Those details are visible only to someone who opens the file and checks.',
    p2: 'Students who have written their own filters and histograms know that every number has an owner, a definition and a date. They can use AI assistants to speed up the routine parts of a project while keeping the judgement for themselves, which is where the real learning happens.',
    closer: 'The useful skill is not producing a number; it is knowing which number to trust and saying why.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Detroit to the Keweenaw, one live class',
    intro: 'Michigan stretches across two peninsulas and two time zones; online classes reach every part of it on the same terms.',
    cells: [
      { h3: 'Both peninsulas', p: 'A student in Grand Rapids and one in Marquette can sit in the same batch, each from home, with no drive through winter weather to reach a class.' },
      { h3: 'Michigan school calendar', p: 'Teachers use US grades and plan around the school year, exams and breaks. Graded school work always remains the student&rsquo;s own.' },
      { h3: 'Batches at one level', p: 'Fifteen to twenty students working at the same stage, from Michigan and the rest of the country.' },
      { h3: 'Private when needed', p: 'One teacher, one student, for AP preparation, a competition or a project that needs a faster pace.' },
      { h3: 'Flexible timing', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Begin free', p: 'A complete first lesson with a real teacher, then a suggested level and time. No payment details are requested for it.' }
    ],
    spec: { title: 'Online, from India', p: 'There is no Modern Age Coders building in Michigan and we do not claim one. Teaching is live online from India; a student needs a computer with sound and a steady internet connection.' }
  },

  fees: {
    h2: 'What classes cost for Michigan families',
    intro: 'Shown up front, with nothing added later.',
    first: 'A first lesson in full, free, with a recommended course and slot at the end.',
    group: 'Monthly classes in a batch of fifteen to twenty students at the same level.',
    private: 'Monthly classes with a teacher working one to one.',
    closer: 'Families in Michigan pay the single US rate in US dollars, the same in Ann Arbor as in Sault Ste. Marie. Billing begins only after the free lesson, once course and time are settled; the pricing page explains holidays and missed sessions.'
  },

  reviewsH2: 'What families say about us on Google',

  book: {
    h2: 'Request a free class for a Michigan student',
    intro: 'Tell us the grade and what your student enjoys. A fourth grader might begin with a Scratch game, an eighth grader with Python turtle art, a junior with the DNR histogram.',
    success: 'Thank you. We will be in touch soon about a class for your Michigan student.'
  },

  faq: {
    h2: 'Michigan coding and AI questions',
    intro: 'Short answers, with the source named in each.',
    items: [
      { q: 'What share of Michigan high schools offer computer science?', a: 'The Code.org 2025 data counts 674 of 1,228 Michigan high schools, or 54.9%, for 2023 to 2024. Its trend tab gives 53.7% for the same year, so both are shown with their tab.' },
      { q: 'Has access grown in Michigan?', a: 'Yes. The Code.org trend tab moves from 37% in 2019 to 2020 to 55% in 2022 to 2023, then 53.7% in 2023 to 2024. No 2024 to 2025 Michigan value is published.' },
      { q: 'How many Michigan students take computer science?', a: 'The Code.org 2025 sheet publishes no participation figures for Michigan, so that number is not available from this source.' },
      { q: 'Is computer science a graduation requirement in Michigan?', a: 'We could not verify it. The Michigan Department of Education site returned access-denied responses to our requests on 17 October 2026, so we make no claim. Your high school counselor can confirm the current rule.' },
      { q: 'How many Michigan schools give AP exams?', a: 'The College Board counts 737 Michigan schools with AP exams in 2023 and 752 in 2024, of which 649 were public schools in 2024.' },
      { q: 'Which time zone are Michigan classes in?', a: 'Most of Michigan is Eastern (America/Detroit), and the Wisconsin border area is Central (America/Menominee). Tell us which you keep and every class time is confirmed in it.' },
      { q: 'When are classes held for Michigan students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience. US clocks change on November 1, 2026 and March 14, 2027, and we adjust on our side.' },
      { q: 'Can a Michigan student take AP Computer Science A with you?', a: 'Yes. We teach the College Board course content and exam skills in Java. Exam registration is arranged by the family with a school, not through us.' },
      { q: 'Does the DNR campground project need special software?', a: 'No. It runs in standard Python on a laptop. Students download the public DNR recreation points, filter 433 campground records out of 863, and bin them by latitude.' },
      { q: 'Do you have a center in Michigan?', a: 'No. We have no premises in Michigan or anywhere in the US; all classes are live online from India.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More reading for Michigan students',
    html: 'Exam-bound students can look at <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a> or <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a>. Teens who want to build outside school can read about <a class="cg-inline-link" href="/hackathons-for-high-school-students">hackathons for high school students</a> and <a class="cg-inline-link" href="/ai-projects-for-high-school-students">AI projects for high schoolers</a>. Every state is linked from the <a class="cg-inline-link" href="/coding-classes-in-united-states">United States hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Michigan and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/hackathons-for-high-school-students', label: 'High school hackathons' },
    { href: '/ap-computer-science-a-online-classes', label: 'AP CS A classes' }
  ],

  personalityCss: `
.cg-root.cg-aimi .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.8vw, 2.3rem); }
.cg-root.cg-aimi .cg-hero h1 { font-weight: 780; letter-spacing: -0.024em; line-height: 1.04; }
.cg-root.cg-aimi .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-aimi .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-aimi .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.014em; }
.cg-root.cg-aimi .cg-grid-3 { gap: clamp(0.8rem, 1.8vw, 1.5rem); }
.cg-root.cg-aimi .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-aimi .cg-table td { font-variant-numeric: tabular-nums; white-space: normal; }
.cg-root.cg-aimi .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-aimi .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Michigan, read raw 17 October 2026: michigan.gov/mde returned 403 (CS standards, academic standards, sitemap) and legislature.mi.gov returned 403 (MCL 380.1278a); no MDE policy wording printed. Code.org (2025): access trend 37% (2019-20), 44%, 46%, 55%, 53.7% (2023-24); most recent tab 674 of 1,228 (54.9%), source State Education Agency and School Catalogs; no participation values. College Board AP schools 737 (2023) and 752 (2024), public 623 and 649. IANA America/Detroit and America/Menominee; US DST rule.',
    localProject: 'Michigan DNR DNRRecreationSearchPointsOPENDATA (public record, no restrictions on use, as is), downloaded 17 October 2026: 863 records; tags trail 332, state park campground 292, state forest campground 141, state park 115; our filter 433 campgrounds; latitude 41.82 to 47.47; our one-degree bins 9, 86, 28, 119, 91, 92, 8; rustic 220, electrical 174. Lesson family: histograms and binning, bin width and bin edges.',
    requiredMentions: [
      '674 of 1,228',
      '53.7%',
      'State Education Agency and School Catalogs',
      '737 (623 public, 114 non-public)',
      '752 (649 public, 103 non-public)',
      'America/Menominee',
      'America/Detroit',
      '433 records',
      '41.82 to 47.47'],
    sources: [
      { claim: 'Code.org (2025), State of AI + CS Education data: Michigan access tabs; no participation values.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'IANA tzdb zone.tab and northamerica: America/Detroit, America/Menominee, US DST rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' },
      { claim: 'Michigan DNR: DNR Recreation Search points open data (licence text read).', url: 'https://services3.arcgis.com/Jdnp1TjADvSDxMAX/arcgis/rest/services/DNRRecreationSearchPointsOPENDATA/FeatureServer' },
      { claim: 'Michigan Department of Education computer science page (403 on 17 October 2026, recorded, not used).', url: 'https://www.michigan.gov/mde/services/academic-standards/computer-science' }
    ],
    rejectedClaims: [
      'Any Michigan graduation requirement, CS standards adoption date or required offering: not printed; michigan.gov/mde and legislature.mi.gov returned 403 and were not retried around.',
      'Choosing one 2023-24 access value: refused; trend tab 53.7% and count tab 54.9% both printed with their tab.',
      'A Michigan CS participation rate: none published in the Code.org sheet; not estimated.',
      'A decline from 2022-23 to 2023-24: not claimed; within the disagreement between tabs.',
      'Code.org urban, rural, size, gender and race breakdowns: not used.',
      'Upper and Lower Peninsula campground counts: not computed; latitude bands only, labelled as ours.',
      'That our classes earn Michigan school credit: refused.',
      'Any affiliation with the Michigan Department of Education, the Michigan DNR, Code.org or the College Board.'
    ]
  }
};
