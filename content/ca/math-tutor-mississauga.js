'use strict';
// Math tutor, Mississauga (cg- city page, Canada cluster Wave 2, row 160). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md (section "Province, city and math-tutor city pages").
// Spine: the Ontario functions sequence (MPM2D, MCR3U, MHF4U) as a Mississauga student meets it, then one exponential
// lesson, a constant yearly rate of change and the logarithm that solves for time, built on Region of Peel traffic counts
// inside the Mississauga boundary, a Fryer, Galois and Hypatia contest slice, and a price explainer.
// Sources, read raw on 22 October 2026 (curriculum and contest facts from keyword-research-2026-09/ca/facts-schools-contests.md
// with saved raw files in ca/src/; geography from ca/facts-geo.md; Peel files in ca/src-pilots/math-tutor-mississauga/):
//  - Ontario DCP API: MPM2D "Principles of Mathematics" (2005, Grade 10 Academic); MCR3U "Functions" (2007), prerequisite
//    "Principles of Mathematics, Grade 10, Academic"; MHF4U "Advanced Functions", prerequisite "Functions, Grade 11,
//    University Preparation, or Mathematics for College Technology, Grade 12, College Preparation"; MCV4U with MHF4U
//    "prior to or concurrently"; MTH1W (2021). EQAO Grade 9 "January 12 - February 5, 2027" (en dash in source).
//  - CEMC FGH: "Students in Grade 9 are eligible to write the Fryer Contest." (Galois Grade 10, Hypatia Grade 11);
//    "4 questions; a mix of final answer-only and full-solution."; "Time allowed for completion is 75 minutes.";
//    "North and South America: Wednesday, April 7, 2027"; through-a-school rule.
//  - facts-geo.md: Mississauga is in the Toronto CMA; 905 belt overlay 289/365/742/905, Mississauga exchanges such as
//    Cooksville, Streetsville, Malton and Clarkson; Ontario UTC-5 from 1 November 2026, UTC-4 from 14 March 2027.
//  - Region of Peel Open Data, "Traffic Count Stations" (item 844846e93de64ddd910c2b6e964105f1, saved): snippet "traffic
//    counts from 1996 to the last full year"; description "Average Annual Daily Traffic (AADT) is the total volume of
//    vehicles on a roadway for a 24-hour period"; tubes "installed on the road for at least one day but can be down for up
//    to seven consecutive days"; NE/SW direction rule; "Years with a 0 or no value as their count reflect that no count was
//    taken for that year." Layer JSON (529 stations) and Peel "Municipal Boundary" GeoJSON downloaded 22 October 2026.
//    Licence: "Open Data Licence for The Regional Municipality of Peel (Version 1.0)", "exploit the Information
//    commercially", attribution statement "Contains public sector Information made available under The Regional
//    Municipality of Peel's Open Data Licence - Version 1.0." The City of Mississauga's own (revocable) terms are not used.
// Our own calculations (traffic_growth.py, page_snippet.py, page_numbers.py, python -I): 124 of 529 stations fall inside
// the Mississauga polygon; year columns 1996 to 2019 then 2022 to 2024 (no 2020 or 2021 column); 59 Mississauga stations
// have a 2024 count; 36 direction series have both 2004 and 2024 counts; median constant yearly change -0.98%, 5 of 36
// grew; station 00100100 (Erin Mills Parkway, 0.1 km north of QEW) northbound 28,568 (2004) to 17,758 (2024), factor
// 0.97651 a year (-2.35%), halving time 29.2 years at that rate; 27,408 (2011) to 18,481 (2012) is -32.6% in one step;
// -0.59% a year from 2004 to 2011 and -0.33% a year from 2012 to 2024; southbound 8,452 in 2023 and 30,137 in 2024;
// highest 2024 direction value 33,469 (Airport Road, 0.4 km north of Thamesgate Rd., northbound). No totals of the file.
// Lesson family: exponential models, the constant-rate assumption, and logarithms to solve for time.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CODE = [
  'import json, statistics',
  '',
  'def annual_rate(first, last, years):',
  '    return (last / first) ** (1 / years) - 1',
  '',
  'def inside(x, y, ring):',
  '    hit = False',
  '    for (x1, y1), (x2, y2) in zip(ring, ring[1:] + ring[:1]):',
  '        if (y1 > y) != (y2 > y) and x < (x2 - x1) * (y - y1) / (y2 - y1) + x1:',
  '            hit = not hit',
  '    return hit',
  '',
  'towns = json.load(open("peel-municipal-boundary.geojson"))["features"]',
  'city = next(t for t in towns if t["properties"]["MUN_NAME"] == "Mississauga")["geometry"]',
  'parts = city["coordinates"] if city["type"] == "MultiPolygon" else [city["coordinates"]]',
  '',
  'rates = []',
  'for feature in json.load(open("peel-traffic-count-stations.json"))["features"]:',
  '    s = feature["attributes"]',
  '    if not s["LONG"] or not any(inside(s["LONG"], s["LAT"], p[0]) for p in parts):',
  '        continue',
  '    for side in ("NE", "SW"):',
  '        start, end = s[f"Y_2004_{side}"], s[f"Y_2024_{side}"]',
  '        if start and end:',
  '            rates.append(annual_rate(start, end, 20))',
  '',
  'print("series:", len(rates))',
  'print("median yearly change, %:", round(100 * statistics.median(rates), 2))',
  'print("series that grew:", sum(r > 0 for r in rates))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'MISSISSAUGA MATH', label: 'Math tutor in Mississauga', blurb: 'Math help for Mississauga students through the Ontario functions courses, with a Region of Peel traffic data lesson on exponential rates and the Fryer, Galois and Hypatia contests.' },
  market: CA,
  slug: 'math-tutor-mississauga',
  code: 'matu',
  accent: '#6B2D34',
  accentRationale: 'Mississauga math: a muted lakeshore claret, #6B2D34, allocated for this row; the nearest other Canada accent is #662B25, 15.9 RGB units away (Euclidean); contrast 9.66 on the paper #FBF8F2 (9.09 and 8.31 on the two paper tints)',
  pageType: 'city',
  place: {
    name: 'Mississauga',
    eyebrow: 'Math tutor, Mississauga, Ontario',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Ontario' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-ontario', name: 'Ontario' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Math in Canada', href: '/online-math-tutor-canada' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Math tutor in Mississauga',
  title: 'Math Tutor Mississauga | Online, Grade 1 to Advanced Functions',
  description: 'Live online math tutoring for Mississauga students: the Ontario functions courses in order, a Peel traffic lesson on growth rates, and the 2027 Waterloo contests.',
  ogDescription: 'One Mississauga road lost a third of its northbound traffic count in a single year. A math tutor page that turns that into a lesson on exponential rates.',
  twitterDescription: 'Math tutoring for Mississauga students, live online, from Grade 1 to MHF4U and MCV4U.',
  ogImageCourse: 'ontario-grade-12-university-math-mhf4u-mcv4u-course',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Math Tutoring for Mississauga Students',
    description: 'Live online math lessons for Mississauga students from Grade 1 to Grade 12, following the Ontario courses from MTH1W to MCR3U, MHF4U and MCV4U, with Waterloo contest preparation.'
  },

  h1: 'Math tutor for Mississauga students',
  capsuleQ: 'How does a Mississauga student get live help with math?',
  capsule: 'Modern Age Coders teaches math live online to Mississauga students from Grade 1 to Grade 12, in a class of fifteen to twenty at one level or one to one. Teenagers usually choose between Waterloo Math Contests: Gauss to Euclid and our Ontario Grade 12 University Math course for MHF4U and MCV4U; children join an age-matched maths course. The first lesson costs nothing.',
  lead: 'Most of the math a Mississauga teenager struggles with in Grade 12 is really one idea seen three times: the function. It appears in Grade 10 as a relationship on a grid, returns in Grade 11 as MCR3U Functions, and comes back with logarithms and rates of change in MHF4U. A student who treats each course as a fresh list of procedures hits a wall around Grade 11; one who sees the thread finds each year easier than the last. This page follows that thread through the Ontario courses, points you to our detailed page for each code, and then teaches one lesson from it with real data: the Region of Peel&rsquo;s traffic counts for roads inside Mississauga, and the exponential arithmetic that turns twenty years of counts into a single yearly rate.',
  wa: 'Hello Modern Age Coders, I would like a free math class for a student in Mississauga.',

  picks: {
    eyebrow: 'Math course picks for Mississauga',
    h2: 'Four courses Mississauga students take with us',
    intro: 'Matched to the Ontario course sequence, then checked in a free lesson before anything is booked.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', band: 'Grades 1 to 5', note: 'Early number, multiplication and fractions taught with reasons, so later algebra has something solid to stand on.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Grades 9 and 10', note: 'Linear relations, quadratics and the Grade 10 algebra that MCR3U assumes on its first day.' },
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', band: 'Grades 11 and 12', note: 'Advanced Functions and Calculus and Vectors beside the school course. It does not grant an Ontario credit; the school does.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', band: 'Grades 7 to 12, contest-minded', note: 'Written-solution practice for the Fryer, Galois and Hypatia papers and the rest of the CEMC ladder, with problems we write.' }
    ]
  },

  sections: [
    {
      id: 'functions', tint: '', eyebrow: 'The Ontario functions thread',
      h2: 'From Grade 9 relations to MHF4U: the course sequence a Mississauga student follows',
      intro: 'Mississauga public schools teach the Ontario curriculum. The table follows one idea, the function, through the high school courses and links each code to our page about it.',
      body: [
        { kind: 'table', caption: 'How the function idea grows through Ontario high school math. Course titles and prerequisites from the Ontario curriculum service; the middle column is our summary', head: ['Stage and code', 'What changes about functions', 'Our page'], rows: [
          ['Grade 9, MTH1W', 'Linear relations, rate of change as slope, and code that models a relationship', '<a class="cg-inline-link" href="/mth1w-grade-9-math-explained">MTH1W</a>, <a class="cg-inline-link" href="/eqao-grade-9-math-practice">EQAO Grade 9</a>'],
          ['Grade 10, MPM2D', 'Quadratics and the algebra of factoring; listed as the prerequisite for MCR3U', '<a class="cg-inline-link" href="/canada-high-school-math-courses-compared">Courses compared</a>'],
          ['Grade 11, MCR3U', 'Function notation, inverses, transformations, exponential functions, sinusoids', '<a class="cg-inline-link" href="/mcr3u-functions-tutor">MCR3U</a>, <a class="cg-inline-link" href="/mcf3m-vs-mcr3u">MCF3M or MCR3U</a>'],
          ['Grade 12, MHF4U', 'Polynomial, rational, logarithmic and trigonometric functions, and average and instantaneous rates of change', '<a class="cg-inline-link" href="/mhf4u-advanced-functions-tutor">MHF4U</a>'],
          ['Grade 12, MCV4U', 'Derivatives as the limit of a rate of change, plus vectors; MHF4U comes first or alongside', '<a class="cg-inline-link" href="/mcv4u-calculus-and-vectors-tutor">MCV4U</a>']
        ] },
        { kind: 'p', text: 'The prerequisite chain is strict. The ministry lists Grade 10 academic math as the entry to MCR3U, and MCR3U (or the Grade 12 college technology course) as the entry to MHF4U. In practice this means the Grade 10 year decides more of a Mississauga student&rsquo;s options than families expect: a shaky term with quadratics becomes a shaky term with transformations in Grade 11, and the effect lands in Grade 12 just as university applications open.' },
        { kind: 'p', text: 'Younger children are not left out of the thread. A Grade 4 or 5 student who can describe a growing pattern in words, then in a table, is already doing the thinking a function needs. For those grades the EQAO pages for <a class="cg-inline-link" href="/eqao-grade-3-math-practice">Grade 3</a> and <a class="cg-inline-link" href="/eqao-grade-6-math-practice">Grade 6</a> are the place to start, and both assessments are listed by EQAO for 4 May to 8 June 2027.' },
        { kind: 'callout', h3: 'Alongside school, not instead of it', p: 'Our lessons run beside the school course and we do not grant Ontario credits. Every mark and credit for MCR3U, MHF4U or MCV4U comes from the student&rsquo;s school. We are not connected with the Ontario Ministry of Education, EQAO or the Mississauga school boards.' }
      ]
    },
    {
      id: 'traffic', tint: 'deep', eyebrow: 'Mississauga data lesson',
      h2: 'Twenty years of traffic counts on Mississauga roads, as an exponential function',
      intro: 'The Region of Peel publishes counts from the traffic stations on its regional roads. We kept the stations inside Peel&rsquo;s own Mississauga boundary and asked a Grade 11 question: what constant yearly rate turns the 2004 count into the 2024 count? Every rate below is our calculation.',
      body: [
        { kind: 'p', text: 'Peel&rsquo;s layer, Traffic Count Stations, holds Average Annual Daily Traffic for each station and direction. In Peel&rsquo;s words, AADT is the total volume of vehicles on a roadway for a 24-hour period, measured with road tubes that are installed on the road for at least one day but can be down for up to seven consecutive days. Peel also warns that years with a 0 or no value as their count reflect that no count was taken for that year, which matters the moment a student starts dividing.' },
        { kind: 'table', caption: 'Our results from the Region of Peel Traffic Count Stations layer and Peel Municipal Boundary file, both downloaded 22 October 2026', head: ['What we measured', 'Our result'], rows: [
          ['Stations in the Peel layer', '529'],
          ['Stations whose position falls inside the Mississauga polygon', '124'],
          ['Year columns in the layer', '1996 to 2019, then 2022 to 2024 (no 2020 or 2021 column)'],
          ['Mississauga stations with a 2024 count in either direction', '59'],
          ['Direction series with counts in both 2004 and 2024', '36'],
          ['Median constant yearly change across those 36 series', '&minus;0.98 percent a year'],
          ['Series with a positive yearly rate', '5 of 36'],
          ['Highest 2024 direction value inside Mississauga', '33,469, Airport Road 0.4 km north of Thamesgate, northbound']
        ] },
        { kind: 'p', text: 'The model behind the table is the one MCR3U teaches: a quantity that changes by the same factor each year follows A = A<sub>0</sub> &times; b<sup>t</sup>. If a road carried A<sub>0</sub> vehicles a day in 2004 and A in 2024, the yearly factor is b = (A &divide; A<sub>0</sub>)<sup>1/20</sup>, and the yearly rate is b &minus; 1. The program below applies that to every Mississauga series, after testing each station&rsquo;s position against the city boundary with a ray-casting check:<code class="cg-mt-2">' + CODE + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Read the median, not the extremes', p: 'Our 36 rates ran from a fall of about 17 percent a year to a rise of about 3 percent a year. The median, close to a one percent fall, is a fairer single summary than either end.' },
          { h3: 'Respect the zeros', p: 'Because Peel records a missing count as 0 or blank, the program only keeps a series when both years hold a real number. Dividing by a zero that means &ldquo;not counted&rdquo; would invent an answer.' },
          { h3: 'Two directions, two stories', p: 'Each station reports NE and SW separately; on a north-south road NE means northbound. One direction can rise while the other falls, so we never average them into a single road figure.' }
        ] },
        { kind: 'callout', h3: 'Licence and attribution', p: 'Contains public sector Information made available under The Regional Municipality of Peel&rsquo;s Open Data Licence - Version 1.0 (<a class="cg-inline-link" href="https://data.peelregion.ca/pages/license">licence</a>). The rates, counts of stations and conclusions are ours. The Region of Peel does not endorse this page or our classes, and its traffic counts are used here only as numbers to model.' }
      ]
    },
    {
      id: 'worked', tint: '', eyebrow: 'A worked problem, ours',
      h2: 'Erin Mills Parkway: one station, one rate, and a logarithm',
      intro: 'Station 00100100 sits on Erin Mills Parkway, 0.1 km north of the QEW. Its northbound counts make a clean MHF4U problem with a twist that MCR3U students should learn to spot. The question and working are ours.',
      body: [
        { kind: 'table', caption: 'Northbound AADT at station 00100100 in selected years, from the Region of Peel layer (downloaded 22 October 2026)', head: ['Year', '2004', '2009', '2011', '2012', '2016', '2024'], rows: [
          ['Northbound count', '28,568', '28,071', '27,408', '18,481', '20,113', '17,758']
        ] },
        { kind: 'p', text: '<strong>Part (a).</strong> Find the constant yearly factor that takes 28,568 in 2004 to 17,758 in 2024. Solve 28,568 &times; b<sup>20</sup> = 17,758, so b<sup>20</sup> = 17,758 &divide; 28,568 &asymp; 0.6216 and b &asymp; 0.6216<sup>1/20</sup> &asymp; 0.9765. The count fell by about 2.35 percent a year on average.' },
        { kind: 'p', text: '<strong>Part (b).</strong> At that rate, how many years does it take for the count to halve? Solve b<sup>t</sup> = 0.5 with logarithms: t = log 0.5 &divide; log 0.9765 &asymp; 29.2 years. This is the MHF4U move, using a logarithm to bring the unknown down from the exponent.' },
        { kind: 'p', text: '<strong>Part (c), the twist.</strong> Look at 2011 and 2012: 27,408 then 18,481, a drop of about 32.6 percent in a single year. From 2004 to 2011 the yearly rate was only about &minus;0.59 percent, and from 2012 to 2024 about &minus;0.33 percent. Almost all of the twenty-year decline happened in one step, so the answer to part (a) describes no actual year on this road. The Peel file does not say why the step happened, and a good answer says so rather than guessing.' },
        { kind: 'p', text: '<strong>Try it yourself.</strong> The southbound count at the same station was 8,452 in 2023 and 30,137 in 2024. Compute the one-year growth factor, then write two sentences on whether you would trust it in a model, and what you would check first.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Waterloo contests in Mississauga',
      h2: 'Fryer, Galois and Hypatia: the contests where the working is marked',
      intro: 'Most Waterloo contests are multiple choice. The April papers are different, and that difference is why we recommend them to Mississauga students who want to get better at writing mathematics, not only at finding answers.',
      body: [
        { kind: 'table', caption: 'The CEMC April full-solution contests for 2027, as CEMC describes them (read 22 October 2026)', head: ['Contest', 'Grade CEMC names', 'What the paper looks like', 'Date CEMC lists'], rows: [
          ['Fryer', 'Grade 9', '4 questions, a mix of final answer only and full solution, 75 minutes', 'Wednesday 7 April 2027'],
          ['Galois', 'Grade 10', 'The same structure, set for Grade 10', 'Wednesday 7 April 2027'],
          ['Hypatia', 'Grade 11', 'The same structure, set for Grade 11', 'Wednesday 7 April 2027']
        ] },
        { kind: 'p', text: 'Four questions in seventy-five minutes sounds gentle until a student meets the last part of each one, where a full written argument is expected. The habit that wins marks here is the same one in part (c) above: state what you assumed, show why the step follows, and stop when the evidence stops. Our <a class="cg-inline-link" href="/fryer-galois-hypatia-contests-guide">Fryer, Galois and Hypatia guide</a> covers the papers in more depth, and the <a class="cg-inline-link" href="/how-to-register-for-waterloo-contests">registration page</a> explains how a school enters students.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Write it at school', p: 'CEMC does not accept individual entries. A Mississauga student writes through their own school, or, if that school is not taking part, through another local school that agrees to host them.' },
          { h3: 'Free past papers', p: 'Ten years of past CEMC contests are free to download with no account. Students practise on those at home; in class we work through original problems of the same style.' },
          { h3: 'Earlier in the year', p: 'For multiple-choice practice first, the Pascal, Cayley and Fermat sitting comes in February 2027. Our <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contests page</a> lays out every grade.' }
        ] },
        { kind: 'callout', h3: 'Not connected with CEMC', p: 'CEMC&rsquo;s rule is that &ldquo;all students must participate through their school&rdquo;. We are not connected with CEMC or the University of Waterloo, and we never copy their problems or solutions. Every contest problem we teach with is our own and labelled as ours.' }
      ]
    },
    {
      id: 'price', tint: '', eyebrow: 'Math tutor price in Mississauga',
      h2: 'Comparing math tutor prices in Mississauga without comparing the wrong things',
      intro: 'The fee for each of our formats is shown in the fees section below, in the currency for your location. This section is about what sits behind a price.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A live online class', p: 'Fifteen to twenty Mississauga and other Ontario students at the same level, one teacher, eight live lessons a month for one monthly fee. Questions are asked out loud and answered on the shared board.' },
          { h3: 'One to one online', p: 'A teacher for one student, at times the family picks, for a higher monthly fee. Worth it for a specific gap in MHF4U, a far-ahead student, or exam weeks.' },
          { h3: 'A tutor who comes to the house', p: 'Usually priced by the hour at that tutor&rsquo;s own rate, with travel time folded in. The right choice for a family that wants a person physically at the table.' }
        ] },
        { kind: 'p', text: 'When you compare quotes in Mississauga, convert each one to the same unit first: live teaching time per month, not price per visit. Then ask what is included. Does the tutor set and mark practice between sessions? Do they teach to the Ontario course code, or from a generic book? Can they explain why a step works, or only show it? A cheaper hour that leaves the student copying methods is the expensive option by June.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'Patterns in Grade 2, logarithms by Grade 12',
    intro: 'A rough map by grade. The free lesson decides where a student really begins, based on what they can do and explain.',
    cols: [
      { band: 'Grades 1 to 3', h3: 'Counting and patterns', p: 'Place value, addition and growing patterns, described aloud before they are written down.', courses: ['early-math-foundations', 'elementary-mathematics-complete-masterclass'] },
      { band: 'Grades 4 to 8', h3: 'Fractions to first algebra', p: 'Fractions, ratio and integers, then equations, with contest puzzles for keen students.', courses: ['comprehensive-middle-school-mathematics-mastery', 'middle-school-math-competitions-course'] },
      { band: 'Grades 9 and 10', h3: 'Relations and quadratics', p: 'MTH1W linear relations and the Grade 10 algebra MCR3U is built on.', courses: ['complete-high-school-mathematics-mastery', 'algebra-foundations-masterclass'] },
      { band: 'Grades 11 and 12', h3: 'Functions to calculus', p: 'MCR3U, MHF4U and MCV4U, plus written-solution contest work.', courses: ['ontario-grade-12-university-math-mhf4u-mcv4u-course', 'waterloo-math-contests-gauss-to-euclid-course'] }
    ]
  },

  ai: {
    eyebrow: 'Math and AI',
    h2: 'Can a Mississauga student let AI do the algebra?',
    intro: 'It can do the arithmetic. It cannot decide whether the model was the right one to use.',
    p1: 'An AI tool will compute 0.6216 to the power 1/20 instantly and report a tidy yearly rate. It will not notice, unless asked, that the decline on Erin Mills Parkway happened in one year, or that a zero in Peel&rsquo;s file means &ldquo;not counted&rdquo;. Spotting those things is the mathematics.',
    p2: 'So our teachers keep the reasoning with the student: predict the shape before graphing, write the equation by hand, then use technology to check. Marked school work stays the student&rsquo;s own work.',
    closer: 'The Ontario courses ask students to model, reason and communicate. A tool can help with the first draft of a calculation; the judgement remains a human job.',
    blogAnchor: 'why learning to think still matters when software can calculate'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online math for Mississauga, from Port Credit to Meadowvale',
    intro: 'No commute on Hurontario or the 403: the lesson comes to the student&rsquo;s desk.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Ontario time', p: 'Mississauga moves from UTC-4 to UTC-5 on 1 November 2026 and back on 14 March 2027. Class times are written in Eastern time, and we check them again around each change.' },
      { h3: 'Working you can see', p: 'Students solve on a shared board, so a teacher catches the line where a sign flips or a log rule is misused, instead of only seeing a wrong final answer.' },
      { h3: 'Planned from the course code', p: 'Lessons follow the Ontario course the student is enrolled in, MTH1W, MCR3U, MHF4U or MCV4U, and the school&rsquo;s own pace through it.' },
      { h3: 'Phone numbers', p: 'Mississauga numbers on 905, 289, 365 or 742 are accepted. Enter ten digits; the country code is added for you.' },
      { h3: 'The first lesson', p: 'A genuine lesson at the student&rsquo;s level, ending with a placement suggestion. No payment details are taken.' }
    ],
    spec: { title: 'No Mississauga centre', p: 'Modern Age Coders has no tutoring centre in Mississauga and claims none. Every lesson is live and online, taught from India; a student needs a computer, a microphone and a reliable connection.' }
  },

  fees: {
    h2: 'Math tutoring fees for Mississauga',
    intro: 'Three options, each shown in your own currency.',
    first: 'A full live math lesson, free, ending with a suggested course and level.',
    group: 'The monthly fee for a live class of fifteen to twenty students at one level.',
    private: 'The monthly fee for a teacher working with one student at times you pick.',
    closer: 'The fee does not change by city: Mississauga pays what every other Canadian family pays. Billing begins only after the free lesson and once a course and time are agreed.'
  },

  reviewsH2: 'Google reviews from families and students',

  book: {
    h2: 'Book a free math lesson for a Mississauga student',
    intro: 'Give us the grade and, for high school, the course code. A Grade 5 child might start with a pattern puzzle; a Grade 11 student might start with the Erin Mills Parkway question.',
    success: 'Thank you. The team will contact you soon about a math class for Mississauga.'
  },

  faq: {
    h2: 'Mississauga math tutoring questions',
    intro: 'The questions Mississauga families send us most.',
    items: [
      { q: 'Is there a Modern Age Coders math tutor in Mississauga?', a: 'Our tutoring is online, so there is no Mississauga building. Students join live from home and are taught by a real teacher, in a class of fifteen to twenty or one to one.' },
      { q: 'How much is a math tutor in Mississauga with you?', a: 'See the fees section of this page: a free first lesson, then a monthly fee for a live class or a higher monthly fee for one-to-one, shown in your own currency. No figures are quoted in this answer on purpose.' },
      { q: 'Why choose a live online class over a home tutor?', a: 'A home tutor is usually paid by the hour and has to travel. With us, one monthly fee covers live lessons in a class of fifteen to twenty, or a higher monthly fee buys individual teaching online, and nobody drives across Mississauga.' },
      { q: 'Can you help my teen with MCR3U Functions?', a: 'Yes. Grade 11 Functions is where many students first struggle, and we teach it beside the school course, with the Grade 10 algebra it relies on.' },
      { q: 'Will your MHF4U lessons count as an Ontario credit?', a: 'No. We do not grant Ontario credits. The student earns the credit and mark at school, and our lessons support that course.' },
      { q: 'Do you teach logarithms and exponential functions?', a: 'Yes, in MCR3U and MHF4U lessons. The traffic lesson on this page shows the approach: build the model, solve with logarithms, then question the assumption.' },
      { q: 'Can a Mississauga student prepare for the Hypatia or Galois contest?', a: 'Yes. CEMC lists Fryer, Galois and Hypatia for Wednesday 7 April 2027. The student enters through a school, and we practise with original full-solution problems.' },
      { q: 'What are your class times for Mississauga?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are given in Eastern time.' },
      { q: 'Does my child need to be good at math already?', a: 'No. The free lesson finds the right starting level, whether that is Grade 3 fractions or Grade 12 rational functions.' },
      { q: 'Do younger Mississauga children take math with you?', a: 'Yes, from about age 6. Primary lessons focus on number sense and explaining each step, the foundation for the Grade 3 and Grade 6 assessments.' }
    ]
  },

  next: {
    eyebrow: 'More for Mississauga and Canada',
    h2: 'Related math pages',
    html: 'Our <a class="cg-inline-link" href="/online-math-tutor-canada">online math tutor page for Canada</a> covers every province. For single courses, see <a class="cg-inline-link" href="/mcr3u-functions-tutor">MCR3U Functions</a>, <a class="cg-inline-link" href="/mhf4u-advanced-functions-tutor">MHF4U Advanced Functions</a> and <a class="cg-inline-link" href="/mcv4u-calculus-and-vectors-tutor">MCV4U Calculus and Vectors</a>. For the wider province, read <a class="cg-inline-link" href="/coding-classes-in-ontario">our Ontario page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Mississauga math and Canada',
  footerPlaces: [
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
    { href: '/mhf4u-advanced-functions-tutor', label: 'MHF4U help' },
    { href: '/fryer-galois-hypatia-contests-guide', label: 'Fryer, Galois, Hypatia' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' }
  ],

  personalityCss: `
.cg-root.cg-matu .cg-hero h1 { font-weight: 680; letter-spacing: -0.015em; line-height: 1.08; }
.cg-root.cg-matu .cg-capsule { border-top: 2px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-matu .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.01em; }
.cg-root.cg-matu .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-matu .cg-table caption { text-align: left; font-style: italic; }
.cg-root.cg-matu #traffic code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.55; padding: 1rem; border-left: 4px solid var(--cg-accent); }
.cg-root.cg-matu #worked strong { color: var(--cg-accent); font-weight: 700; }
.cg-root.cg-matu .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 0.8rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: MTH1W (2021), MPM2D (2005, Grade 10 Academic), MCR3U (2007, prerequisite Grade 10 academic), MHF4U (prerequisite MCR3U or MCT4C), MCV4U with MHF4U prior or concurrent; EQAO 2026-27 windows. CEMC Fryer, Galois and Hypatia eligibility, format and 7 April 2027 date, and the through-a-school rule. Mississauga area codes and Eastern time offsets from facts-geo.md.',
    localProject: 'Region of Peel Open Data, Traffic Count Stations and Municipal Boundary (Open Data Licence for The Regional Municipality of Peel, Version 1.0), downloaded 22 October 2026. Our analysis: 124 of 529 stations inside the Mississauga polygon; 36 direction series with 2004 and 2024 counts; median constant yearly change -0.98 percent, 5 of 36 positive; Erin Mills Parkway station 00100100 northbound 28,568 to 17,758, about -2.35 percent a year, halving time about 29.2 years, with a 32.6 percent one-year drop from 2011 to 2012. Labelled as ours. Lesson family: exponential models and logarithms.',
    requiredMentions: [
      'Traffic Count Stations',
      'station 00100100',
      '28,568',
      '17,758',
      '29.2 years',
      'Thamesgate',
      'no 2020 or 2021 column',
      'can be down for up to seven consecutive days',
      'Highest 2024 direction value inside Mississauga',
      'Four questions in seventy-five minutes sounds gentle'
    ],
    sources: [
      { claim: 'Region of Peel Open Data: Traffic Count Stations (AADT definition, count method, direction rule, zero means not counted).', url: 'https://services6.arcgis.com/ONZht79c8QWuX759/arcgis/rest/services/Traffic_Count_Stations/FeatureServer' },
      { claim: 'Region of Peel: Open Data Licence Version 1.0 (commercial use, attribution statement, non-endorsement).', url: 'https://data.peelregion.ca/pages/license' },
      { claim: 'Region of Peel ArcGIS item record for Traffic Count Stations.', url: 'https://www.arcgis.com/sharing/rest/content/items/844846e93de64ddd910c2b6e964105f1?f=json' },
      { claim: 'Ontario curriculum content API: senior math course records and prerequisites.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code%5Bin%5D=MCR3U,MHF4U,MCV4U,MDM4U,MPM2D,MTH1W,MCF3M,MAP4C,MEL4E&depth=0' },
      { claim: 'EQAO: 2026-27 assessment windows.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'CEMC: Fryer, Galois and Hypatia contests (eligibility, format, 2027 date).', url: 'https://cemc.uwaterloo.ca/contests/fgh' },
      { claim: 'CEMC: how contests work (entry through a school).', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets for 2026-27.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Mississauga or Peel population figure: StatCan was not reachable live.',
      'Why the Erin Mills Parkway count fell in 2012: the Peel file does not say, so no cause is given.',
      'A total of traffic across stations or directions: not computed; directions are never added or averaged.',
      'Use of the City of Mississauga terms of use: not relied on (revocable licence); only Region of Peel data and licence are used.',
      'Other tutors\' rates in Mississauga: not sourced, so not printed.',
      'Any fee figure or currency in the copy: fees render from the template only.',
      'That our lessons earn an Ontario credit: refused; we do not grant Ontario credits.',
      'CEMC contest fees: omitted on purpose (currency-neutral page).',
      'Names of Mississauga schools, boards or private people: not used.',
      'Any affiliation with the Region of Peel, the City of Mississauga, the Ontario Ministry of Education, EQAO, CEMC or the University of Waterloo.'
    ]
  }
};
