'use strict';
// Math tutor, Waterloo, Ontario (cg- city page, Canada cluster Wave 2, row 167). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md (section "Province, city and math-tutor city pages").
// Spine: the Ontario math sequence a Waterloo student walks through, routed to the live Ontario spokes; a geometry and
// modelling lesson (volume of a cylinder, scale factors, a power function and its inverse) on the City of Waterloo's
// Water Distribution Mains layer; the CEMC contests and the University of Waterloo admission facts that make contest math
// matter more in this city than in most; and what a family is comparing when it asks about price.
// Sources, read raw on 22 October 2026 (curriculum and contest facts from keyword-research-2026-09/ca/facts-schools-contests.md,
// each with its saved raw file in ca/src/; geography from ca/facts-geo.md; the mains layer, item record and licence page in
// ca/src-pilots/math-tutor-waterloo-ontario/):
//  - Ontario DCP API: MTH1W (2021, de-streamed) "Students will use mathematical processes, mathematical modelling, and
//    coding to make sense of the mathematics they are learning"; MPM2D "Principles of Mathematics" (2005); MCR3U "Functions",
//    prerequisite "Principles of Mathematics, Grade 10, Academic"; MHF4U "Advanced Functions", prerequisite "Functions,
//    Grade 11, University Preparation, or Mathematics for College Technology, Grade 12, College Preparation"; MCV4U
//    "Calculus and Vectors", MHF4U "must be taken prior to or concurrently with" MCV4U; MDM4U "Mathematics of Data Management".
//  - EQAO: Grade 3 and Grade 6 "May 4 - June 8, 2027" (en dash in source); Grade 9 "January 12 - February 5, 2027"; Grade 9
//    "an online assessment that includes two sessions (Session A and Session B), totalling 54 questions"; "multi-stage
//    computer adaptive testing model"; results "to be included as part of a student's final course mark".
//  - ontario.ca OSSD page: "3 credits in mathematics (Grade 9, Grade 10 and 1 credit in Grade 11 or 12)" (Grade 9 in 2024 or later).
//  - uwaterloo.ca Computer Science: "Six Grade 12 U and/or M courses including" Advanced Functions, Calculus and Vectors;
//    contests "not required for admission, but writing one of these contests is required for some scholarships offered by
//    the Faculty of Mathematics" (CSMC and/or Euclid); AIF "asks about any Waterloo mathematics contests you've participated
//    in", deadline "February 15, 2027".
//  - CEMC: Gauss "Monday, May 10, 2027 to Friday, May 21, 2027", 25 questions, 60 minutes; Pascal/Cayley/Fermat "Tuesday,
//    February 23, 2027 and Wednesday, February 24, 2027"; Fryer/Galois/Hypatia "Wednesday, April 7, 2027", "4 questions; a mix
//    of final answer-only and full-solution", 75 minutes; Euclid "Tuesday, April 6, 2027", "10 questions", "2.5 hours";
//    CIMC/CSMC "Wednesday, November 18, 2026", ordering deadline "Thursday, October 22, 2026", "9 questions; 6 are answer only
//    and 3 are full-solution", 2 hours; CTMC "Teams of six", at UWaterloo "Tuesday, April 13, 2027"; "all students must
//    participate through their school"; POTW "Grades 3 to 12", "New problems are sent every Thursday"; past contests "from the
//    last 10 years"; "Our contests are not tests or exams. There is no passing or failing score."
//  - facts-geo.md: SW Ontario overlay 226/382/519/548; Waterloo in the Kitchener - Cambridge - Waterloo CMA; Ontario UTC-4
//    until 1 November 2026, UTC-5 to 14 March 2027 (IANA tzdb 2026e). No populations used.
//  - City of Waterloo open data (data.waterloo.ca), "Water Distribution Mains", ArcGIS item cd14a354eaaa4fccb83a5269173879ac
//    (item_mains.json), layer "Watermains" (layer_mains.json): description "Represents the pipeline system that conveys
//    municipal drinking water through a network of distribution mains within the City of Waterloo."; caveat "these records are
//    based upon available information, compiled from a variety of sources, some of which has not been verified." Queried with
//    curl on 22 October 2026 at 15:59 UTC, nine pages of up to 1,000 records (mains_0.json to mains_8000.json), attributes only.
//    Licence: data.waterloo.ca/pages/open-data-licence, page item 8844e3b457d2436cb1029e7470b2be8c (licence-page-data.json,
//    fetched by this writer): "Waterloo Open Data User Licence"; "use the Information commercially"; "does not use the
//    Information in a way that suggests any official status or that the Information Provider endorses you"; optional credit
//    text "Contains information provided by the City of Waterloo under licence".
// Our own calculations (count_mains.py and worked.py, python -I; outputs count_mains.out.txt and worked.out.txt): 8,118 rows,
// 8,118 distinct OBJECTID; CLASS Distribution 7,914, Transmission 156, Dual-Arterial 34, Facility 14; OWNER City of Waterloo
// 7,765, Region of Waterloo 194, Shared with Region 159; MATERIAL Polyvinyl Chloride 4,871, Cast Iron 1,922, Ductile Iron 1,174,
// Concrete 74, Unknown 31 (one further label is deliberately not printed); POSITION Estimated/Unknown 3,168; one row (OBJECTID
// 1015) has DIAMETER 999 and is excluded; 47 rows carry the install year 1850 and no other year before 1908, 10 of them PVC;
// rows by diameter and our sums of LENGTH_M (km) and pi r^2 L volume (cubic metres, diameters read as millimetres, an
// assumption the file does not state): 50: 78, 3.74, 7; 100: 385, 17.05, 134; 150: 3,207, 190.18, 3,361; 200: 1,912, 94.30, 2,962;
// 250: 208, 10.17, 499; 300: 2,008, 122.03, 8,626; 350: 5, 0.16, 16; 400: 125, 10.26, 1,289; 450: 85, 6.50, 1,034; 600: 94, 20.75,
// 5,868; 750: 10, 5.39, 2,383; whole-file sums 480.55 km and 26,180 cubic metres (about 26.2 million litres); 150 mm mains 39.6%
// of length but 12.8% of modelled volume; 300, 600 and 750 mm together 64.5% of volume; 303 rows under 1 m; Shape__Length is in
// degrees (wkid 4326), never used. Worked problem: 300 mm by 100 m holds 7.0686 cubic metres (7,069 L); halving the diameter
// quarters it; 1 cubic metre per 10 m needs d = 0.3568 m; 16 km of 150 mm main equals 1 km of 600 mm.
// Lesson family: volume of a cylinder as a model, scale factors on area, a power function and its inverse.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const MAINS = [
  'import json, math',
  'from collections import defaultdict',
  '',
  'length_by_size = defaultdict(float)',
  'for offset in range(0, 9000, 1000):',
  '    with open(f"mains_{offset}.json", encoding="utf-8") as page:',
  '        for feature in json.load(page)["features"]:',
  '            pipe = feature["attributes"]',
  '            if pipe["DIAMETER"] == 999:',
  '                continue  # a placeholder, not a size',
  '            length_by_size[pipe["DIAMETER"]] += pipe["LENGTH_M"]',
  '',
  'total = 0',
  'for size, metres in sorted(length_by_size.items()):',
  '    radius = size / 2000  # millimetres to metres, then halved',
  '    volume = math.pi * radius ** 2 * metres',
  '    total += volume',
  '    print(size, round(metres / 1000, 2), "km", round(volume), "m3")',
  'print("modelled volume:", round(total), "cubic metres")'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'WATERLOO MATH', label: 'Math tutor in Waterloo', blurb: 'Math help for Waterloo, Ontario students from Grade 1 to MCV4U, with the Ontario courses in order, a water mains geometry lesson and the CEMC contests next door.' },
  market: CA,
  slug: 'math-tutor-waterloo-ontario',
  code: 'mtwo',
  accent: '#9E4026',
  accentRationale: 'Waterloo math: a fired-brick rust, #9E4026, allocated for this row and kept at least 14 RGB units from every other Canada accent; contrast 6.4 on the paper #FBF8F2 and above 4.5 on both paper tints (checked by the build gate)',
  pageType: 'city',
  place: {
    name: 'Waterloo',
    eyebrow: 'Math tutor, Waterloo, Ontario',
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
  routeLabel: 'Math tutor in Waterloo',
  title: 'Math Tutor Waterloo, Ontario | Live Online, Grade 1 to MCV4U',
  description: 'Live online math tutoring for Waterloo, Ontario students: the Ontario courses from EQAO to MCV4U, a city water mains geometry lesson and CEMC contest dates.',
  ogDescription: 'Waterloo has 480 km of water mains in its open data. Here is the geometry a student learns from them, plus the Ontario math path and the CEMC contests.',
  twitterDescription: 'Math tutoring for Waterloo, Ontario students, live online, from early number sense to Calculus and Vectors.',
  ogImageCourse: 'ontario-grade-12-university-math-mhf4u-mcv4u-course',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Math Tutoring for Waterloo, Ontario Students',
    description: 'Live online math for Waterloo students from Grade 1 to Grade 12: number sense, MTH1W algebra and modelling, MCR3U, MHF4U, MCV4U and MDM4U support, and CEMC contest problem solving, in a class of fifteen to twenty or one to one.'
  },

  h1: 'Math tutor in Waterloo, Ontario',
  capsuleQ: 'Who teaches math to Waterloo students live, with a real teacher?',
  capsule: 'Modern Age Coders tutors Waterloo, Ontario students in math live online, from Grade 1 through MCV4U, in a group of fifteen to twenty or one to one. Senior students usually take our Ontario Grade 12 University Math course for MHF4U and MCV4U, and contest-minded students join Waterloo Math Contests: Gauss to Euclid. The first lesson is free.',
  lead: 'Waterloo is a city where math is unusually visible. The University of Waterloo lists Advanced Functions and Calculus and Vectors among the six Grade 12 courses it wants for Computer Science, and its Centre for Education in Mathematics and Computing writes contests that, by its own count, educators order for over 300,000 students worldwide. A Waterloo teenager hears about Euclid early. Yet the student who needs help is rarely stuck on a contest problem; more often a gap opened years before, in fractions, in slope, in what a variable means. This page walks through the Ontario sequence the way a Waterloo student meets it, then teaches one real lesson on the City of Waterloo&rsquo;s own water mains file, works a problem from it step by step, and sets out the contests and what a family is paying for.',
  wa: 'Hello Modern Age Coders, I would like a free math lesson for a student in Waterloo, Ontario.',

  picks: {
    eyebrow: 'Math course picks for Waterloo',
    h2: 'Four math courses Waterloo families begin with',
    intro: 'Each pick matches a stage of the Ontario sequence. A free first lesson confirms it, because the teacher hears how the student reasons before anything is booked.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', band: 'Grades 6 to 8', note: 'Proportional reasoning, negative numbers, first equations, plus the surface area and volume work behind the water mains lesson on this page, taught so the Grade 9 course starts on solid ground.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Grades 9 and 10', note: 'MTH1W modelling and linear relations, then the Grade 10 algebra that MCR3U lists as its prerequisite. Every step is written out, never just the answer.' },
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', band: 'Grades 11 and 12', note: 'MHF4U and MCV4U support that follows the school&rsquo;s unit order. The school, not this course, awards the Ontario credit.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', band: 'Grades 7 to 12, contest-minded', note: 'Original problems in the style of Gauss, Pascal, Cayley, Fermat and Euclid, plus the free CEMC archive, for students who like the hard question at the end.' }
    ]
  },

  sections: [
    {
      id: 'ontario', tint: '', eyebrow: 'Ontario math in Waterloo',
      h2: 'The Ontario math sequence, as a Waterloo student meets it',
      intro: 'Every public school in Waterloo teaches the Ontario curriculum. Course names below come from the ministry&rsquo;s curriculum service and the assessment windows from EQAO, both read on 22 October 2026. Each row links to our page for that stage.',
      body: [
        { kind: 'table', caption: 'Waterloo students move through these Ontario stages. Titles are the ministry&rsquo;s, assessment dates are EQAO&rsquo;s for the 2026 to 2027 school year, and the third column links our page on each', head: ['Stage', 'What the student takes or writes', 'Our page for it'], rows: [
          ['Grade 3', 'Elementary math; EQAO Grade 3 assessment, window 4 May to 8 June 2027', '<a class="cg-inline-link" href="/eqao-grade-3-math-practice">EQAO Grade 3 math practice</a>'],
          ['Grade 6', 'Elementary math with coding; EQAO Grade 6 assessment, same window', '<a class="cg-inline-link" href="/eqao-grade-6-math-practice">EQAO Grade 6 math practice</a>'],
          ['Grade 9', 'MTH1W (issued 2021, one course for every Grade 9 student) plus EQAO&rsquo;s Grade 9 math, written 12 January to 5 February 2027', '<a class="cg-inline-link" href="/mth1w-grade-9-math-explained">MTH1W explained</a> and <a class="cg-inline-link" href="/eqao-grade-9-math-practice">Grade 9 practice</a>'],
          ['Grade 11', 'Functions (MCR3U) for university routes, or Functions and Applications (MCF3M)', '<a class="cg-inline-link" href="/mcr3u-functions-tutor">MCR3U tutor</a> and <a class="cg-inline-link" href="/mcf3m-vs-mcr3u">MCF3M or MCR3U</a>'],
          ['Grade 12', 'Advanced Functions (MHF4U) and Calculus and Vectors (MCV4U), often in the same year', '<a class="cg-inline-link" href="/mhf4u-advanced-functions-tutor">MHF4U tutor</a> and <a class="cg-inline-link" href="/mcv4u-calculus-and-vectors-tutor">MCV4U tutor</a>'],
          ['Grade 12', 'MDM4U Mathematics of Data Management', '<a class="cg-inline-link" href="/mdm4u-data-management-tutor">MDM4U tutor</a>']
        ] },
        { kind: 'p', text: 'The links in that table carry the detail, so this page does not repeat it. What matters for a Waterloo family is how the stages lock together. MCR3U names Principles of Mathematics, Grade 10, Academic, as its prerequisite. MHF4U names Functions, Grade 11, University Preparation, or a Grade 12 college technology course. And the ministry&rsquo;s own wording is that MHF4U must be taken prior to or concurrently with MCV4U. Read in order, those three lines describe a chain in which a soft spot in Grade 10 algebra is still costing marks in Grade 12 calculus.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Grade 9 is a modelling course', p: 'The ministry describes MTH1W as a course in which students use mathematical processes, mathematical modelling, and coding to make sense of the mathematics they are learning. The water mains lesson below is that sentence in practice: a formula from geometry, fitted to real data, then questioned.' },
          { h3: 'EQAO Grade 9 counts', p: 'EQAO says its Grade 9 math assessment is online, in two sessions totalling 54 questions, and uses a multi-stage computer adaptive testing model. Results are to be included as part of a student&rsquo;s final course mark, so the January to February 2027 window is not a practice run.' },
          { h3: 'Three math credits, at least', p: 'For students who began Grade 9 in 2024 or later, the province requires 3 credits in mathematics: Grade 9, Grade 10 and 1 credit in Grade 11 or 12. Most students aiming at university programs in math, science or engineering take far more than that minimum.' }
        ] },
        { kind: 'p', text: 'There is a Waterloo detail worth knowing. The University of Waterloo&rsquo;s Computer Science page asks Ontario applicants for six Grade 12 U and/or M courses, including Advanced Functions and Calculus and Vectors. The same page says the CEMC contests are not required for admission, but that writing one of these contests is required for some scholarships offered by the Faculty of Mathematics. Our <a class="cg-inline-link" href="/waterloo-computer-science-admission-requirements">Waterloo Computer Science admission page</a> covers the rest, including the Admission Information Form due 15 February 2027.' },
        { kind: 'callout', h3: 'Beside school, never instead of it', p: 'Our lessons run next to the course a student is enrolled in at school. We do not grant Ontario credits: every mark and credit, from MTH1W to MCV4U and MDM4U, is awarded by the school alone. Nor are we connected with the Ontario Ministry of Education, EQAO, the University of Waterloo or any Waterloo school board.' }
      ]
    },
    {
      id: 'mains', tint: 'deep', eyebrow: 'Waterloo data lesson',
      h2: 'How much water fits inside Waterloo&rsquo;s water mains? A geometry lesson on city data',
      intro: 'The City of Waterloo publishes the pipes that carry its drinking water as open data. Students read the file, model each pipe as a cylinder and then argue about what the model leaves out. Every count, sum and volume below is ours, not the City&rsquo;s.',
      body: [
        { kind: 'p', text: 'The dataset is called Water Distribution Mains. The City&rsquo;s description says it represents the pipeline system that conveys municipal drinking water through a network of distribution mains within the City of Waterloo, and it adds a caution that teachers should read aloud: these records are based upon available information, compiled from a variety of sources, some of which has not been verified. We queried the layer on 22 October 2026 and received 8,118 rows, each one a length of pipe with a diameter, a length in metres, a material, an install date and an owner.' },
        { kind: 'table', caption: 'Water Distribution Mains by diameter: our counts, our sums of the LENGTH_M column, and our cylinder model of the volume each size holds when full. City of Waterloo open data, downloaded 22 October 2026. Diameters are read as millimetres, which the file does not state', head: ['Diameter', 'Rows', 'Length (km)', 'Modelled volume (cubic metres)'], rows: [
          ['50', '78', '3.74', '7'],
          ['100', '385', '17.05', '134'],
          ['150', '3,207', '190.18', '3,361'],
          ['200', '1,912', '94.30', '2,962'],
          ['250', '208', '10.17', '499'],
          ['300', '2,008', '122.03', '8,626'],
          ['350', '5', '0.16', '16'],
          ['400', '125', '10.26', '1,289'],
          ['450', '85', '6.50', '1,034'],
          ['600', '94', '20.75', '5,868'],
          ['750', '10', '5.39', '2,383']
        ] },
        { kind: 'p', text: 'Across the eleven sizes our sums come to 480.55 km of pipe and a modelled 26,180 cubic metres, about 26.2 million litres. Those two totals are ours, built row by row from the City&rsquo;s file; the City publishes neither. The surprise in the table is the 150 mm row. Pipes of that size make up 39.6 percent of the length but only 12.8 percent of the volume, while the 300, 600 and 750 mm pipes together hold 64.5 percent of it. Volume grows with the square of the diameter, and a table makes a Grade 8 student feel that in a way a formula on its own rarely does.' },
        { kind: 'p', text: 'The Python that produces the table reads the nine downloaded pages, skips one placeholder row and adds up length by size before applying the cylinder formula. It uses only the standard library:<code class="cg-mt-2">' + MAINS + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Name the model', p: 'A main is treated as a cylinder, so its volume is pi times the radius squared times the length. Students write down what that assumes: a perfectly round pipe, full of water, with an inside width equal to the diameter in the file.' },
          { h3: '2. Fix the units first', p: 'The file gives lengths in metres and diameters in what are almost certainly millimetres, since 150, 200 and 300 match standard pipe sizes. Dividing by 2,000 turns a diameter in millimetres into a radius in metres in one step, and students must explain why it is 2,000.' },
          { h3: '3. Distrust the extremes', p: 'Sort the file and odd values appear. 303 rows are shorter than one metre, the longest is over 2.5 km, and each oddity is a question for the student, not a number to quietly delete.' }
        ] },
        { kind: 'callout', h3: 'Three things in the file that are not what they seem', p: 'One row, OBJECTID 1015, gives a diameter of 999, a value no other pipe shares and almost certainly a placeholder, so we leave it out and say so. 47 rows carry an install year of 1850 and no row has any year from 1851 to 1907; 10 of those 47 are listed as PVC, so the date column for those rows needs checking before anyone draws a history from it. And the Shape__Length column is measured in degrees of latitude and longitude, not metres, so only LENGTH_M is used. Finding those three is the real lesson.' },
        { kind: 'p', text: 'Other columns support a second session. The City is listed as the owner of 7,765 rows, the Region of Waterloo of 194, and 159 are shared. By material, the file lists 4,871 rows of polyvinyl chloride, 1,922 of cast iron and 1,174 of ductile iron. Grouping install years by decade shows cast iron dominating the 1950s and 1960s and PVC taking over from the 1980s, a neat two-way table for MDM4U students. Contains information provided by the City of Waterloo under licence. The file is used under the Waterloo Open Data User Licence, which allows commercial use (<a class="cg-inline-link" href="https://data.waterloo.ca/pages/open-data-licence">licence</a>, <a class="cg-inline-link" href="https://data.waterloo.ca/datasets/cd14a354eaaa4fccb83a5269173879ac_0">dataset page</a>). The City of Waterloo does not endorse this page or our classes.' }
      ]
    },
    {
      id: 'worked', tint: '', eyebrow: 'A worked problem, ours',
      h2: 'Worked problem: scale factors and a power function from one pipe',
      intro: 'Written by us for Grade 9 to Grade 12 students, using sizes that appear in the Waterloo file. It starts with arithmetic and ends in the language of MHF4U.',
      body: [
        { kind: 'p', text: '<strong>Question.</strong> A 100 m length of 300 mm main is modelled as a full cylinder. (a) How much water does it hold? (b) How much would a 150 mm main of the same length hold, and why is the answer not half? (c) Write the volume of a 10 m section as a function of its diameter and find the diameter that holds exactly 1 cubic metre.' },
        { kind: 'p', text: '<strong>Step 1, convert before you calculate.</strong> A diameter of 300 mm is 0.3 m, so the radius is 0.15 m. The volume is pi times 0.15 squared times 100, which is 7.0686 cubic metres. One cubic metre is 1,000 litres, so the pipe holds about 7,069 litres.' },
        { kind: 'p', text: '<strong>Step 2, reason with the scale factor.</strong> Halving the diameter halves the radius, and the radius is squared, so the cross-section shrinks by a factor of one quarter. The 150 mm main holds 1.7671 cubic metres, exactly a quarter of 7.0686. A student who answers &ldquo;half&rdquo; has used a linear rule on a quadratic relationship, the single most common error we see in Grade 9 measurement.' },
        { kind: 'p', text: '<strong>Step 3, build the function.</strong> For a 10 m section, V(d) equals pi over 4 times d squared times 10, with d in metres. It is a power function of degree 2, defined here only for positive d. Setting V(d) equal to 1 and solving gives d squared equals 4 divided by 10 pi, so d is about 0.3568 m, or roughly 357 mm. That diameter is not in the file, and noticing that is part of the answer: real pipes come in set sizes, so an engineer would choose the next size up.' },
        { kind: 'p', text: '<strong>Step 4, check the claim in the data.</strong> If volume grows with the square of the diameter, one kilometre of 600 mm pipe should hold as much as sixteen kilometres of 150 mm pipe, because 600 divided by 150 is 4 and 4 squared is 16. Our table agrees in spirit: 20.75 km of 600 mm pipe hold 5,868 cubic metres, far more than the 190.18 km of 150 mm pipe at 3,361.' },
        { kind: 'p', text: '<strong>Try it yourself.</strong> (1) Find the volume of the longest single row in the file, 2,545 m of 750 mm pipe. (2) Write the inverse of V(d) for a 10 m section, so that it gives the diameter for any volume, and state its domain. (3) In one sentence, explain why the modelled total is probably larger than the water really inside the pipes. Answers are discussed in the free lesson.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests near home',
      h2: 'CEMC contests for Waterloo students in 2026 to 2027',
      intro: 'The Centre for Education in Mathematics and Computing is part of the University of Waterloo, and its contests are written by students across Canada through their schools. Dates are CEMC&rsquo;s North and South America dates, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'CEMC mathematics contests by grade for 2026 to 2027, with the format CEMC publishes for each', head: ['Grade', 'Contest', 'Format, as CEMC states it', 'CEMC date'], rows: [
          ['Grades 7 and 8', 'Gauss', '25 multiple-choice questions in 60 minutes', '10 to 21 May 2027'],
          ['Grades 9, 10, 11', 'Pascal, Cayley, Fermat', '25 multiple-choice questions in 60 minutes', '23 and 24 February 2027'],
          ['Grades 9, 10, 11', 'Fryer, Galois, Hypatia', '4 questions, a mix of final answer-only and full-solution, in 75 minutes', '7 April 2027'],
          ['Grades 9 and 10', 'CIMC', '9 questions, 6 answer only and 3 full-solution, in 2 hours', '18 November 2026'],
          ['Grades 11 and 12', 'CSMC', 'Same format as the CIMC', '18 November 2026'],
          ['Final year of high school', 'Euclid', '10 questions, a mix of final answer only and full-solution, in 2.5 hours', '6 April 2027']
        ] },
        { kind: 'p', text: 'Two lines in that table deserve a Waterloo note. CEMC&rsquo;s ordering deadline for the November CIMC and CSMC was Thursday 22 October 2026, so a student who has not been signed up by a school for 2026 should plan for the February and April contests instead. And the Euclid and the CSMC are the contests the University of Waterloo names when it says writing one is required for some Faculty of Mathematics scholarships. The Admission Information Form also asks about any Waterloo mathematics contests a student has written.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Only through a school', p: 'CEMC says all students must participate through their school. A student cannot register alone; where a school does not take part, CEMC suggests finding another local school that will allow the student to join as a participant.' },
          { h3: 'Free practice, every week', p: 'CEMC&rsquo;s Problem of the Week is sent to educators for students from Grades 3 to 12, with new problems every Thursday, and ten years of past contests sit in <a class="cg-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests">the free CEMC archive</a>.' },
          { h3: 'A team day in April', p: 'The Canadian Team Mathematics Contest is for teams of six secondary students; CEMC lists the in-person day at the University of Waterloo for Tuesday 13 April 2027, with in-school writing from 14 April.' }
        ] },
        { kind: 'p', text: 'CEMC stresses that nobody passes or fails one of its contests; they are not exams. We teach them in the same spirit: as a place to meet problems that school math does not have time for, with original problems we write and label as ours, never by copying CEMC&rsquo;s papers. Our <a class="cg-inline-link" href="/euclid-contest-preparation">Euclid preparation page</a> and <a class="cg-inline-link" href="/cimc-and-csmc-contest-guide">CIMC and CSMC guide</a> go further. We are not connected with CEMC or the University of Waterloo.' }
      ]
    },
    {
      id: 'price', tint: '', eyebrow: 'Math tutor price in Waterloo',
      h2: 'How to compare math tutoring prices in Waterloo without a calculator trap',
      intro: 'Our fees appear in the fees section below, in the currency of the country you are browsing from, so this text carries no figures. The useful question is what a fee buys per month.',
      body: [
        { kind: 'table', caption: 'Questions to put to any tutoring option in Waterloo. The answers in the first column are ours; we do not publish other providers&rsquo; rates', head: ['Question', 'Our answer', 'Why it changes the real price'], rows: [
          ['How many live sessions in a month?', 'Eight live classes a month', 'A low hourly rate twice a month can cost more per lesson actually taught than a monthly fee'],
          ['Who is in the session?', 'A group of fifteen to twenty at one level, or one student alone', 'Group work buys structure and other students&rsquo; questions; one to one buys speed on one gap'],
          ['Is travel part of it?', 'No; lessons happen on a home computer', 'Travel time for a tutor or a parent is a cost even when no one invoices it'],
          ['Which Ontario course is it taught to?', 'The student&rsquo;s own course code, from MTH1W to MCV4U', 'Generic worksheets can miss what the school test actually asks'],
          ['Is the first lesson free?', 'Yes, a full live lesson', 'You see the teaching before you pay anything']
        ] },
        { kind: 'p', text: 'Here is the arithmetic we encourage parents to do, with whatever figures they are given. Divide the monthly cost by the number of sessions you will really attend, not the number advertised, then ask how much of each session the student spends solving rather than watching. A cheap session where the tutor does the problems is expensive; a dearer one where the student does them may not be. In a Waterloo household with a Grade 12 student taking MHF4U and MCV4U in the same year, the real question is often whether one to one is worth it for one term, then a group class after.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting to calculus, one Ontario stage at a time',
    intro: 'The grades are guides, not gates. Where a Waterloo student starts is set in the free lesson by what they can already explain.',
    cols: [
      { band: 'Grades 1 to 3', h3: 'Number sense first', p: 'Place value, addition and subtraction strategies, early patterns and measurement, with the child explaining each step.', courses: ['early-math-foundations', 'mental-maths-mastery-kids'] },
      { band: 'Grades 4 to 8', h3: 'Fractions, ratio, volume', p: 'Fractions and ratio, integers, first equations and the area and volume formulas the mains lesson uses, plus Gauss problems for keen students.', courses: ['elementary-mathematics-complete-masterclass', 'comprehensive-middle-school-mathematics-mastery'] },
      { band: 'Grades 9 and 10', h3: 'Modelling and algebra', p: 'MTH1W linear relations and modelling, then the Grade 10 academic course that MCR3U names as its prerequisite.', courses: ['complete-high-school-mathematics-mastery', 'maths-through-coding'] },
      { band: 'Grades 11 and 12', h3: 'Toward MCV4U', p: 'MCR3U, then MHF4U and MCV4U side by side, with contest problems for students eyeing Euclid.', courses: ['ontario-grade-12-university-math-mhf4u-mcv4u-course', 'waterloo-math-contests-gauss-to-euclid-course'] }
    ]
  },

  ai: {
    eyebrow: 'Math and AI',
    h2: 'Can a Waterloo student just ask an AI to do the math?',
    intro: 'It can produce an answer. It cannot tell the student whether the answer means anything.',
    p1: 'Hand an AI assistant the mains file and ask how much water the pipes hold, and it will multiply happily. It will not notice that 999 is a placeholder, that one column is in degrees, or that a diameter in millimetres must be converted before it is squared. Each of those slips changes the answer by orders of magnitude, and only a student who understands the formula sees the problem.',
    p2: 'So our teachers ask for a prediction before every calculation and an explanation after it. Older students meet AI tools under the age rules we follow, and use them to check work they have already done, never to do the work. Marked school assignments always stay the student&rsquo;s own.',
    closer: 'The point of Grade 9 modelling, and of every contest CEMC writes, is judgment about whether a number makes sense.',
    blogAnchor: 'our case for learning to think before using AI'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How live online math lessons work for Waterloo',
    intro: 'Lessons run on a laptop or desktop at home, so a student near Uptown Waterloo and one out in Kitchener or Cambridge can share one teacher.',
    cells: [
      { h3: 'Timing', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Ontario clocks', p: 'Waterloo clocks fall back on 1 November 2026 (UTC-4 becomes UTC-5) and spring forward on 14 March 2027. Our teachers work on India time, which never shifts, so each invitation is written in Eastern time.' },
      { h3: 'The working on screen', p: 'Students write on a shared whiteboard while the teacher watches, so the line where a mistake begins is caught, not just the wrong final answer.' },
      { h3: 'Taught to the course code', p: 'Lessons follow the student&rsquo;s Ontario course, so a Grade 11 student in MCR3U and one in MCF3M are taught to different expectations.' },
      { h3: 'Local numbers', p: 'Waterloo mobiles on 519, 226, 548 or 382 work in the form. Type all ten digits; the country code is already filled in.' },
      { h3: 'Try a lesson first', p: 'Your first lesson costs nothing and is taught like any other. At the end the teacher suggests a course, a level and a time, and no card details are taken.' }
    ],
    spec: { title: 'No Waterloo centre', p: 'There is no Modern Age Coders building in Waterloo, and we do not pretend otherwise. Teachers work from India over a live video lesson; a Waterloo student needs a laptop or desktop, a headset or microphone, and a steady internet line.' }
  },

  fees: {
    h2: 'Math tutoring fees for Waterloo families',
    intro: 'Three lines, each shown in the currency for where you are.',
    first: 'A complete live lesson at no cost, closing with a suggested course, level and time.',
    group: 'The monthly fee for eight live classes in a group of fifteen to twenty at one level.',
    private: 'The monthly fee for one teacher with one student, scheduled around your week.',
    closer: 'Waterloo families pay the same as families elsewhere in Canada. Nothing is charged until after the free lesson and an agreed course and time; the pricing page explains holidays and missed classes.'
  },

  reviewsH2: 'Google reviews from the families we teach',

  book: {
    h2: 'Book a free math lesson for your Waterloo student',
    intro: 'Share the grade and, from Grade 9, the course code. A Grade 3 child may begin by measuring things around the house; a Grade 12 student may begin with a derivative, or with the water mains table above.',
    success: 'Thank you. The team will be in touch soon about a math lesson for Waterloo.'
  },

  faq: {
    h2: 'Waterloo math tutoring questions',
    intro: 'Short answers to what Waterloo parents and students ask us most.',
    items: [
      { q: 'Do you have a math tutor in Waterloo, Ontario?', a: 'Yes, online. There is no Waterloo office. Students join from home and a teacher teaches them live, either in a group of fifteen to twenty at one level or one to one.' },
      { q: 'What does a math tutor in Waterloo cost with you?', a: 'The fees section of this page lists the free first lesson, the monthly group fee and the monthly one-to-one fee in your currency. Nothing is billed until after the free lesson.' },
      { q: 'Is online math tutoring as good as in person for a Waterloo teen?', a: 'For most teens it works well, because the teacher sees every line of working on a shared screen. It suits less well a young child who cannot yet sit at a computer for a lesson; we tell families honestly if that is the case.' },
      { q: 'Can you help with MHF4U and MCV4U at the same time?', a: 'Yes. Many Waterloo students take them together, since the ministry allows MHF4U before or alongside MCV4U. We teach both beside the school courses and do not grant Ontario credits.' },
      { q: 'Does the University of Waterloo require contest results?', a: 'Its Computer Science page says the contests are not required for admission, but that writing the Euclid or the CSMC is required for some Faculty of Mathematics scholarships.' },
      { q: 'How do I enter my child in a CEMC contest?', a: 'Through the school. CEMC says students cannot register on their own; if the school does not take part, it suggests asking another local school to host the student.' },
      { q: 'My child is in Grade 9. What should we focus on?', a: 'MTH1W modelling and linear relations, plus fluency with fractions and integers. The provincial Grade 9 math assessment runs from 12 January to 5 February 2027, according to EQAO, and its result feeds into the course mark.' },
      { q: 'Is MDM4U covered as well?', a: 'It is, one to one or inside our statistics course. Sorting the Waterloo mains file by decade and material produces exactly the two-way tables that data management students learn to read.' },
      { q: 'When are lessons for Waterloo students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Eastern time.' },
      { q: 'Do you teach students in Kitchener and Cambridge too?', a: 'Yes. Kitchener, Cambridge and Waterloo share one metropolitan area and one clock, and students from all three join the same online classes.' }
    ]
  },

  next: {
    eyebrow: 'More for Waterloo and Canada',
    h2: 'Other math pages for Waterloo students',
    html: 'For the country as a whole, read <a class="cg-inline-link" href="/online-math-tutor-canada">our online math tutor page for Canada</a>, and for the province, <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a>. Contest students can start with <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contest preparation</a>, and teens who want Python next to their math can read <a class="cg-inline-link" href="/ai-and-python-classes-for-teens-in-waterloo-ontario">AI and Python classes for teens in Waterloo</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Waterloo math and Canada',
  footerPlaces: [
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo contests' },
    { href: '/ai-and-python-classes-for-teens-in-waterloo-ontario', label: 'Python in Waterloo' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' }
  ],

  personalityCss: `
.cg-root.cg-mtwo .cg-hero h1 { font-weight: 690; letter-spacing: -0.015em; line-height: 1.08; }
.cg-root.cg-mtwo .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-mtwo .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-mtwo .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mtwo .cg-table caption { text-align: left; font-weight: 600; font-size: 0.9rem; }
.cg-root.cg-mtwo #mains code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.55; padding: 0.85rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-mtwo #worked strong { color: var(--cg-accent); font-weight: 700; }
.cg-root.cg-mtwo .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.7rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: MTH1W (2021, de-streamed) course description; MPM2D, MCR3U, MCF3M, MHF4U, MCV4U, MDM4U records and prerequisites (MCR3U after Grade 10 academic; MHF4U after MCR3U or a college technology course; MHF4U before or with MCV4U); EQAO 2026-27 windows (Grades 3 and 6 4 May to 8 June 2027; Grade 9 12 January to 5 February 2027; 54 questions, adaptive, counts in the course mark); OSSD 3 math credits for 2024+ starters; University of Waterloo CS requirements, scholarship contest note and AIF (15 February 2027); CEMC 2026-27 dates and formats (Gauss, PCF, FGH, CIMC/CSMC with the 22 October 2026 ordering deadline, Euclid, CTMC) and the through-a-school rule; SW Ontario area codes and Eastern time offsets from facts-geo.md (IANA tzdb 2026e).',
    localProject: 'City of Waterloo open data, Water Distribution Mains (Waterloo Open Data User Licence, commercial use allowed), layer queried with curl on 22 October 2026 in nine pages and analysed with our scripts count_mains.py and worked.py (python -I): 8,118 rows; rows, km of LENGTH_M and modelled cylinder volume by diameter (150 mm 3,207 rows, 190.18 km, 3,361 cubic metres; 300 mm 2,008, 122.03, 8,626; 600 mm 94, 20.75, 5,868); totals 480.55 km and 26,180 cubic metres (our sums); 150 mm 39.6% of length, 12.8% of volume; OBJECTID 1015 diameter 999 excluded; 47 rows dated 1850, 10 PVC; Shape__Length in degrees, unused; owners and materials counted. Labelled as ours. Lesson family: cylinder volume as a model, scale factors, a power function and its inverse.',
    requiredMentions: [
      'Water Distribution Mains',
      '480.55 km of pipe',
      '26,180 cubic metres',
      'OBJECTID 1015',
      '47 rows carry an install year of 1850',
      '39.6 percent of the length',
      'roughly 357 mm',
      '7,069 litres',
      'Shape__Length column is measured in degrees',
      '1.7671 cubic metres'
    ],
    sources: [
      { claim: 'City of Waterloo open data: Water Distribution Mains dataset page (layer description and data caveat).', url: 'https://data.waterloo.ca/datasets/cd14a354eaaa4fccb83a5269173879ac_0' },
      { claim: 'City of Waterloo: Waterloo Open Data User Licence (commercial use, credit text, no implied endorsement).', url: 'https://data.waterloo.ca/pages/open-data-licence' },
      { claim: 'Ontario curriculum content API: MTH1W and senior math course records and prerequisites.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code%5Bin%5D=MCR3U,MHF4U,MCV4U,MDM4U,MPM2D,MTH1W,MCF3M,MAP4C,MEL4E&depth=0' },
      { claim: 'EQAO: 2026-27 windows; Grade 9 format and the course-mark rule.', url: 'https://www.eqao.com/the-assessments/grade-9-math/' },
      { claim: 'Ontario: high school graduation requirements (math credits).', url: 'https://www.ontario.ca/page/high-school-graduation-requirements' },
      { claim: 'University of Waterloo: Computer Science admission requirements and the contest scholarship note.', url: 'https://uwaterloo.ca/future-students/programs/computer-science' },
      { claim: 'CEMC: contest dates and ordering deadlines for 2026/27.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'CEMC: how contests work (through a school).', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Waterloo or Kitchener-Cambridge-Waterloo population figure: StatCan was not reachable live.',
      'That the modelled 26,180 cubic metres is the water actually in the system: refused; it is a full-cylinder model using nominal diameters.',
      'Why 47 rows carry the year 1850: no source explains it, so the page only says the column needs checking.',
      'That DIAMETER is in millimetres as a stated fact: the file gives no unit; the page labels it an assumption.',
      'Any figure about water main breaks, water quality or health: deliberately left out.',
      'One material label in the file with a health association: counted but not printed.',
      'That our classes earn an Ontario credit or help admission to the University of Waterloo: refused.',
      'CEMC fees and the parent page\'s typed hourly tutor rates: left out (currency-neutral page).',
      'Names of Waterloo schools, school board results or private people: not used.',
      'Any affiliation with the City of Waterloo, the Region of Waterloo, the Ontario Ministry of Education, EQAO, CEMC or the University of Waterloo.'
    ]
  }
};
