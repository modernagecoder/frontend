'use strict';
// UK selective school maths tests guide (ag- pillar/index page for the hub "UK selective school maths tests: 7+,
// 11+, 13+ and 16+" in content/exam-cluster-groups.json; UK and US exams cluster, index pages 2026-11-01).
// Every figure below was re-read raw with curl on 1 November 2026 (copies under keyword-research-2026-09/uk-us-gap/
// src/uk-selective-school-maths-tests-guide/) or re-grepped in the member pages' own raw copies under
// uk-us-gap/src/<member-slug>/ (read 31 October 2026). Hosts that returned 403 today and were NOT retried:
// hbschool.org.uk, cchs.co.uk, tiffingirls.org, herschel.slough.sch.uk, trafford.gov.uk. kent.gov.uk was already
// recorded as 403 by the Kent page; nothing from it is printed here, so the Kent row says "see the council's page".
// Area rows (2026 sitting, entry September 2027):
//  - Barnet, QE FAQ: "multiple-choice format papers in English and Mathematics sat in a single session"; tests
//    "usually held in September over two days". St Michael's: entrance tests "will be held on Friday 11 September
//    2026"; "The English test is a written paper, not multiple choice". HBS: 403.
//  - Bexley council: test "assesses verbal ability and English comprehension, numerical reasoning, and non-verbal
//    reasoning"; "Quest Assessments is the Bexley Selection Test provider"; 50% verbal, 25% numerical, 25% non-verbal;
//    register page: "Between 2 and 10 September 2026"; results "Email from 4pm on Friday 2 October 2026".
//  - Birmingham council: "There is one entry test for all of Birmingham's grammar schools and for grammar schools
//    outside Birmingham that are part of the West Midlands Grammar Schools group". KE VI Foundation: "The test is
//    provided by GL Assessment"; "Saturday 12 th September 2026". WMGS: sections English Comprehension, Verbal
//    Reasoning, Mathematics, Non-Verbal/Spatial; "25% for mathematics".
//  - BCP, Bournemouth School: entrance tests 26 September 2026; maths "Time allowed: 50 minutes"; provider "change ...
//    to Quest Assessments after September 2027"; 2028 maths "excluding work covered in Year 6. Time allowed: 40
//    minutes". Quest Dorset page: "Exam date: September 2027"; "Each paper lasts 40 minutes. Paper one Mathematics".
//  - Bromley (raw in 11-plus-maths-tuition-bromley/): St Olave's SET "English, Logic (both Verbal and Non-Verbal
//    Reasoning) and Mathematics"; Newstead Wood "We do not test on any other subjects".
//  - Bucks: council (gl raw bucks-stt) "The Secondary Transfer Test is produced by GL Assessment"; council page "10
//    September 2026"; TBGS FAQ: second paper "non-verbal, spatial reasoning and maths skills questions"; "The
//    mathematical and non-verbal sections each have a weighting of 25%"; qualification score 121.
//  - Calderdale, Crossley Heath: FSCE adopted; "skills in English and Maths as well as exploring imaginative flair
//    through Creative Writing"; "All written elements will be tested on one day in September."
//  - Enfield, Latymer PDF: "multiple-choice format set by GL Assessment ... (30 minutes Mathematics & 30 minutes Verbal
//    Reasoning)"; 2027 page: "3 rd , 4 th and 5 th September 2026: assessment test days"; 2028 page: "proposing to use
//    Quest Assessments", "three sections: Mathematics, English Comprehension and English Writing", "subject to formal
//    consultation"; Quest Latymer page: "Paper one Mathematics", test date September 2027.
//  - CSSE (Essex and Southend): "The Mathematics paper will last sixty minutes"; "Registration for 2028 Entry will
//    open in May 2027"; "Important dates will be published by Easter 2027". CCHS: 403.
//  - Gloucestershire council: test "took place on Saturday 12 September 2026"; "The grammar schools are planning for
//    the Entrance Test to take place on Saturday 3 July 2027"; FSCE. Pate's 2027: "will be GL Assessment"; 2028:
//    "Adventure Paper: English and Maths, with Multiple Choice Answer options"; "Beacon Paper"; Year 5 must take it.
//  - Herts, SWHerts FAQ: "Mathematics and Verbal Reasoning tests, provided by GL Assessment"; calendar "Key Testing
//    Dates 2026 for Secondary Transfer 2027 ... Academic Test Saturday 5th September". Dame Alice Owen's: "Part II -
//    English and Mathematics"; "Mathematics - A one-hour paper (written internally)"; "top 325"; first test "early
//    September".
//  - Kingston, Tiffin School: "We work in partnership with Quest"; "2nd October 2026 Stage One"; "12th November 2026
//    Stage Two"; English and Maths tests. TGS: 403.
//  - Lancashire (raw in member folder): LRGS "three tests: Verbal Reasoning, Mathematics and English. We do not use
//    Non-Verbal Reasoning", 26 September 2026; LGGS "will test only Maths and English on Saturday 26th September
//    2026"; CRGS FSCE papers in English and Mathematics.
//  - Lincolnshire (raw in member folder): "a Verbal Reasoning Test and a Non-Verbal Reasoning Test"; GL; "Fri 11 or Sat
//    12 September 2026 First 11+ Test", "Fri 18 or Sat 19 September 2026 Second"; 220 qualifying total.
//  - Medway council: "The Medway Test is made up of 3 papers: English Mathematics Reasoning"; "These tests are written
//    specifically for Medway Council. Our test provider is GL Assessment."; Mathematics 50 minutes, "The whole test
//    must be completed in the 50 minutes." (test dates on a separate council page: not printed).
//  - North Yorkshire (raw in member folder): Ripon test "Saturday 12 September 2026"; "the mathematics section has
//    approximately 25 questions (25 minutes). There are no practice questions for this section."; Ermysted's
//    "Future Stories Community Enterprise Ltd (FSCE)", "Main Entrance Test Date on Saturday, 26 September 2026".
//  - Plymouth, PHSG: "provided by Quest Assessments"; "Maths: 40 minutes, 60 questions"; "No content beyond Year 5";
//    timeline "19 September 2026 - Saturday ... Quest Assessment Maths".
//  - Reading, Kendrick: two papers "covering a combination of verbal and non-verbal reasoning, English and
//    mathematics", "marking and standardisation will be carried out by GL Assessment", Friday 18th September 2026.
//    Reading School: FSCE; "Testing date for Day and Boarding applicants: Thursday 16th July"; 2027 entry registration
//    closed 17 May 2026.
//  - Redbridge: "provided by GL Assessment"; "Mathematics and Non-Verbal Reasoning"; "Test Date: Friday 18 September
//    2026".
//  - Slough council: "overseen by the Slough Consortium of Grammar Schools and is entirely independent from Slough
//    Borough Council" (Herschel 403: provider and date not printed).
//  - Sutton, SGS FAQ: "Tuesday 15 September 2026"; "a multiple-choice Maths paper and a multiple-choice English paper.
//    The tests do not include verbal reasoning or non-verbal reasoning."; second stage "not multiple choice"; "It is
//    the total score that determines whether your child has passed".
//  - Torbay council: "All selective schools in Torbay use the same test results."; TBGS: "Saturday 19 September 2026";
//    "two tests (approx. 50 minutes each), one for English and one for Maths"; TGGS: "external assessment authority
//    (GL) in English and Maths".
//  - Trafford, Sale Grammar School: partnership with GL Assessment; "two tests, each approximately one hour in length,
//    containing questions that assess verbal, non-verbal and mathematics skills"; "Monday 14th September 2026".
//  - Warwickshire council: "four sections: English, Verbal Reasoning, Non-Verbal Reasoning and Mathematics";
//    "multiple-choice format"; shared test with Birmingham, Walsall, Wolverhampton and Shropshire; registration from
//    7 May 2026; testing "in September, when they have just started in Year 6".
//  - Wiltshire (raw in member folder): "Paper 2: Maths and Non-Verbal Problem Solving"; Quest; test 26 September 2026;
//    2028 entry "Saturday 25 September 2027". School not named (member page policy kept).
//  - Wirral council: "provided by Quest Assessments. It will take place on Tuesday 15 September 2026"; Quest page:
//    "Paper two Mathematics and Non-verbal reasoning", about 50 minutes each.
//  - Wolverhampton and Walsall, QMGS: "The test provider for 2027 entry is GL Assessment"; papers assess "Verbal
//    Reasoning, Non-Verbal Reasoning and Numerical Reasoning"; QMHS "Saturday 12th September 2026".
// Providers and entry points (member raw folders): GL shop "11+ tests vary from area to area"; Quest "Every school will
// use different papers", "For ages 7+ to 16+", "Trusted by 130+ schools"; Cambridge Insight history "2025 Cambridge
// CEM becomes Cambridge Insight", Select Insight "Suitable for entry into Years 7, 8, 9 and 10", "Avg Duration: 60
// minutes", parents "can only be purchased by schools and Local Education Authorities", "We strongly advise against
// practising"; FSCE "written by Grammar Schools, for Grammar Schools"; ISEB "a series of four online, adaptive and
// shared entrance assessments", "Often taken in Year 6 or Year 7", "2 hours 15 minutes"; UKiset "an adaptive online
// entry test in English", "aged between 9.5 and 18", maths "Working with numbers, value, and sequences"; London 11+
// Consortium "This test is 100 minutes in total", "20 minutes for Maths", "we do not test anything on the Year 6
// curriculum", dates 27 November, 1 or 3 December 2026; ISEB CASE "two CASE sessions each year, in February and
// May", CASE maths "One paper 100 90 minutes"; CE "three compulsory papers; English, mathematics and science",
// sessions "November, January and May/June"; DfE Admissions Code: "school sixth forms" may select by ability,
// "academic entry criteria for their sixth forms"; DfE GCSE factsheet grade 4 "standard pass"; DfE national
// curriculum "number bonds to 20" by end of Year 2.
// Northern Ireland (seagni.co.uk, re-read 1 November 2026): "all 63 of the post-primary schools"; Paper 1 "Saturday,
// 14th November 2026", Paper 2 "Saturday, 21st November 2026"; outcomes "Saturday, 23rd January 2027"; "56 Maths
// questions in Papers 1 and 2"; "The Total SAS range will be 138-282 with a mean (or average) of 200"; Maths SAS
// "69-141 with a mean (or average) of 100"; GL Assessment sets and marks; "Around 13,000 pupils".
// Our own, labelled on the page: the seconds-per-question arithmetic, the maths-time comparison, the reading of the
// table, the step list and the timeline. Spine: there is no "the 11 plus". Over 29 areas the same name covers tests
// from four providers and from schools themselves, and maths runs from absent (Lincolnshire, Newstead Wood) to a
// paper of its own (CSSE, Medway, Plymouth). Lesson family: a pillar page that sorts tests before teaching any maths.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

const SRC = (href, label) => `<a class="ag-inline-link" href="${href}" rel="noopener" target="_blank">${label}</a>`;
const L = (slug, label) => `<a class="ag-inline-link" href="/${slug}">${label}</a>`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'SELECTIVE TESTS GUIDE', label: 'UK selective school maths tests: 7+, 11+, 13+ and 16+', blurb: 'Which 11 plus test each area uses, who writes it and whether it has any maths, in one table, with the 7+, 13+, 16+ and Northern Ireland transfer test beside it.' },
  slug: 'uk-selective-school-maths-tests-guide',
  code: 'ukss',
  accent: '#2F5A6B',
  accentRationale: 'Selective tests guide: a deep harbour slate (#2F5A6B), 7.09:1 on #FBF8F2, 6.66:1 on #F5F1E8 and 6.10:1 on #EDE7DA; cooler than the provider pages\' olives and browns so the index reads as the map, not one more door',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'UK selective school maths tests guide',
  title: '11 Plus Exams Explained by Area and Provider | UK Guide',
  description: '11 plus exams explained by area and provider: which test 29 English areas use, who writes it, whether maths is tested and when, plus the 7+, 13+ and 16+.',
  ogDescription: 'There is no single 11 plus. One table shows the test each area uses, its provider, whether there is any maths and when it was sat in 2026.',
  twitterDescription: 'Which 11 plus test does my area use? GL, Quest, FSCE or the school itself, maths or no maths, and the month, for 29 areas, plus NI and independent entry.',
  pageName: '11 Plus Exams Explained by Area and Provider',
  webPageDescription: 'A pillar guide to UK selective school tests: an area-by-area table of 11 plus providers, maths content and 2026 test dates, built from councils\' and consortia\'s own pages, with the 7+, 13+, 16+, independent school and Northern Ireland routes.',
  courseDescription: 'Live online maths lessons for children preparing for a UK selective school test, matched to the test their area or school actually sets, in a group of 15 to 20 or 1-on-1.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Selective school tests guide',
  navLinks: [
    { href: '#map', label: 'Area table' },
    { href: '#providers', label: 'Providers' },
    { href: '#areas', label: 'By area' },
    { href: '#ni', label: 'Northern Ireland' },
    { href: '#choose', label: 'Find your test' }
  ],
  eyebrow: 'England and Northern Ireland &middot; 7+, 11+, 13+, 16+ &middot; 29 areas compared',
  h1: '11 plus exams explained by area and provider',
  lede: 'Ask ten parents in ten counties what the 11 plus is and you will hear ten different tests. Some are written by GL Assessment, some by Quest Assessments or FSCE, some by the grammar school itself; a few have no maths in them at all. This guide puts every area we cover into one table, from the councils\' and consortia\'s own pages, then explains each provider and each entry point from age 6 to 16. Modern Age Coders teaches the maths behind these tests live online, as a class or 1-on-1, and says so plainly when a test has none.',
  secondaryCta: { href: '#map', label: 'Find your area in the table' },
  wa: 'Hello Modern Age Coders, I would like help working out which selective test my child will sit, and a free maths lesson.',
  heroNote: 'From councils\', consortia\'s, schools\' and providers\' own pages, re-read 1 November 2026 &middot; Not connected with any council, school, consortium or test provider',
  spec: [
    ['Areas in the table', '29 English 11 plus areas'],
    ['Providers met', 'GL, Quest, FSCE, Cambridge Insight, schools'],
    ['Areas with no maths paper', 'Lincolnshire; one Bromley school'],
    ['Usual test month', 'September of Year 6'],
    ['Early exceptions', 'July of Year 5 in two places'],
    ['Northern Ireland', 'SEAG, two Saturdays in November'],
    ['Other entry points', '7+, ISEB, UKiset, 13+, 16+'],
    ['We teach', 'The maths each test actually sets']
  ],
  capsuleQ: 'Which 11 plus test does my area use?',
  capsule: 'It depends on where you live and which schools you want. In 2026 Buckinghamshire, Birmingham, Redbridge, Medway, Trafford and Lincolnshire used GL Assessment papers; Bexley, Plymouth and the Wirral used Quest Assessments; Calderdale and two Lancashire schools used FSCE; Bromley\'s and Barnet\'s schools set their own. Lincolnshire\'s test has no maths paper. Most children sit in September of Year 6. Modern Age Coders teaches that maths live online, 1-on-1 or in a group, through our 11 plus maths preparation course.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses, matched to the entry point',
    lede: 'Choose by age, not by brand of test. The first card covers the area and independent 11 plus papers in the table below; the second suits the youngest entrants and the reasoning-only areas; the third carries a child on to 13+ and 16+ papers.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'UKSS / 01', title: 'Our 11 plus maths course', note: 'Years 5 and 6: upper primary maths taught deeply, then shaped to the paper your area or school sets, whether multiple choice or written.' },
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'UKSS / 02', title: 'Reasoning and readiness, ages 6 to 9', note: 'Pattern, spatial and number puzzles for 7 plus children and younger siblings, taught as thinking, never as test drilling.' },
      { course: 'gcse-mathematics-mastery', code: 'UKSS / 03', title: 'GCSE maths, Foundation and Higher', note: 'For 13 plus scholarship candidates who need early algebra, and Year 11 students facing a sixth form entrance paper.' }
    ]
  },

  sections: [
    {
      id: 'map', tint: 'tint', eyebrow: 'The master table',
      h2: 'Which 11 plus test does each area use, and is there maths in it?',
      lede: 'Twenty-nine areas, one row each. The third column answers the question parents most often get wrong: whether the test has any maths at all. Dates are the 2026 sitting, for children starting Year 7 in September 2027, unless a row says otherwise.',
      body: [
        { kind: 'table', caption: 'English 11 plus areas: who runs the test, the provider, the maths, and when it was sat (from each council\'s, consortium\'s or school\'s own page, re-read 1 November 2026)', head: ['Area', 'Who runs it, and the provider', 'Maths in the test?', 'Sat for 2027 entry', 'Already announced for 2028 entry'], rows: [
          ['Barnet', 'Each school runs its own; Queen Elizabeth\'s School, The Henrietta Barnett School, St Michael\'s Catholic Grammar School', 'Queen Elizabeth\'s: yes, a multiple-choice Mathematics paper; the other two: see each school\'s page', 'Queen Elizabeth\'s: usually two days in September; St Michael\'s: Friday 11 September 2026', 'See the schools\' pages'],
          ['Bexley', 'London Borough of Bexley; Quest Assessments', 'Yes, called numerical reasoning, 25% of the weighted total', 'Between 2 and 10 September 2026', 'See the council\'s page'],
          ['Birmingham', 'King Edward VI Foundation, inside the West Midlands Grammar Schools group; GL Assessment', 'Yes, a timed Mathematics section, weighted 25%', 'Saturday 12 September 2026', 'See the Foundation\'s page'],
          ['Bournemouth, Christchurch and Poole', 'Dorset Consortium of four grammar schools; GL Assessment', 'Yes, a 50-minute maths paper', 'Saturday 26 September 2026', 'Quest Assessments: maths is Paper one, 40 minutes, no Year 6 content'],
          ['Bromley', 'Each school runs its own; the council runs neither', 'St Olave\'s: yes, in both stages; Newstead Wood: no maths', 'St Olave\'s: 18 September and 13 November 2026; Newstead Wood: 25 and 26 September 2026', 'St Olave\'s Stage 1: 17 September 2027'],
          ['Buckinghamshire', 'The Buckinghamshire Grammar Schools (13 schools); GL Assessment', 'Yes, inside the second paper, weighted 25%', 'Thursday 10 September 2026', 'See the council\'s 2028 timeline'],
          ['Calderdale', 'The two Halifax grammar schools jointly; FSCE', 'Yes, English and maths papers, marked before the writing', 'One day in September 2026', 'See the schools\' pages'],
          ['Enfield', 'The Latymer School; GL Assessment for maths and verbal reasoning', 'Yes, a 30-minute multiple-choice maths booklet', '3, 4 and 5 September 2026', 'Proposed switch to Quest, subject to consultation; Mathematics as Paper one'],
          ['Essex', 'Consortium of Selective Schools in Essex (CSSE) for its schools outside Southend; one Chelmsford girls\' school sets its own', 'CSSE: yes, a 60-minute Mathematics paper', 'See CSSE\'s page', 'CSSE registration opens May 2027; dates by Easter 2027'],
          ['Gloucestershire', 'The county\'s grammar schools jointly; GL Assessment', 'Yes; from 2028 entry, maths runs through two of three FSCE papers', 'Saturday 12 September 2026', 'FSCE, on Saturday 3 July 2027, in Year 5'],
          ['Hertfordshire', 'South West Herts Schools Consortium (GL Assessment); Dame Alice Owen\'s School sets its own', 'SW Herts: yes, a Mathematics test; Dame Alice Owen\'s: a one-hour maths paper in Part II', 'SW Herts: Saturday 5 September 2026; Dame Alice Owen\'s Part I: early September', 'See the consortium\'s page'],
          ['Kent', 'Kent County Council', 'See the council\'s page', 'See the council\'s page', 'See the council\'s page'],
          ['Kingston upon Thames', 'Tiffin School with Quest; The Tiffin Girls\' School sets its own', 'Tiffin School: yes, English and maths tests at both stages', 'Tiffin School: 2 October and 12 November 2026', 'See the schools\' pages'],
          ['Lancashire', 'Each school runs its own; Lancaster Girls\' and Clitheroe use FSCE', 'Yes at all three schools we read; Lancaster Royal Grammar sets Mathematics as its own test', 'Saturday 26 September 2026', 'See the schools\' pages'],
          ['Lincolnshire', 'Lincolnshire Consortium of Grammar Schools; GL Assessment', 'No maths paper: verbal and non-verbal reasoning tests only', '11 or 12, then 18 or 19 September 2026', 'See the consortium\'s page'],
          ['Medway', 'Medway Council; GL Assessment, written for Medway', 'Yes, a 50-minute Mathematics paper of its own', 'See the council\'s dates page', 'See the council\'s page'],
          ['North Yorkshire', 'The council runs the Ripon test (GL Assessment); Ermysted\'s uses FSCE; Skipton Girls\' High sets its own', 'Ripon: a maths section of about 25 questions in 25 minutes, new in 2026; Ermysted\'s: yes', 'Ripon: Saturday 12 September 2026; Ermysted\'s: Saturday 26 September 2026', 'See the council\'s page'],
          ['Plymouth', 'The three grammar schools; Quest Assessments', 'Yes, a 40-minute maths paper of 60 questions', 'Maths on Saturday 19 September 2026', 'See the schools\' pages'],
          ['Reading', 'Each school runs its own: Kendrick (marked by GL Assessment), Reading School (FSCE)', 'Kendrick: yes, mixed into two papers; Reading School: FSCE English and maths papers', 'Kendrick: Friday 18 September 2026; Reading School: Thursday 16 July 2026', 'See the schools\' pages'],
          ['Redbridge', 'London Borough of Redbridge; GL Assessment', 'Yes, a Mathematics and Non-Verbal Reasoning paper', 'Friday 18 September 2026', 'See the council\'s page'],
          ['Slough', 'Slough Consortium of Grammar Schools, independent of the council', 'See the consortium\'s page', 'See the consortium\'s page', 'See the consortium\'s page'],
          ['Southend-on-Sea', 'CSSE, the same test as the Essex row', 'Yes, a 60-minute Mathematics paper', 'See CSSE\'s page', 'CSSE registration opens May 2027'],
          ['Sutton', 'Several schools share a Selective Eligibility Test, then run second stages', 'Yes: a multiple-choice Maths paper, then written maths at the second stage', 'SET: Tuesday 15 September 2026', 'See the schools\' pages'],
          ['Torbay', 'All Torbay selective schools share one result; GL Assessment', 'Yes: English and Maths only, about 50 minutes each', 'Saturday 19 September 2026', 'See the council\'s page'],
          ['Trafford', 'Trafford Consortium of five grammar schools; GL Assessment', 'Yes, mixed into two tests of about an hour', 'Monday 14 September 2026', 'See the consortium schools\' pages'],
          ['Warwickshire', 'The West Midlands Grammar Schools shared test; GL Assessment', 'Yes, a Mathematics section among four', 'September 2026, at the start of Year 6', 'Registration opens 7 May each year'],
          ['Wiltshire (Salisbury boys\')', 'The school sets its own; Quest Assessments', 'Yes, a Maths and Non-Verbal Problem Solving paper', 'Saturday 26 September 2026', 'Saturday 25 September 2027'],
          ['Wirral', 'Wirral Council for four grammar schools; Quest Assessments', 'Yes, Paper two is mathematics with non-verbal reasoning', 'Tuesday 15 September 2026', 'See the council\'s page'],
          ['Wolverhampton and Walsall', 'The Shropshire, Walsall and Wolverhampton consortium inside the West Midlands group; GL Assessment', 'Yes, called numerical reasoning by one Walsall school', 'Saturday 12 September 2026', 'See the schools\' pages']
        ] },
        { kind: 'source', html: 'Sources, all re-read 1 November 2026 unless noted: ' + SRC('https://www.bexley.gov.uk/services/schools-and-education/selection-tests/about-test', 'Bexley Council') + '; ' + SRC('https://kingedwardvifoundation.co.uk/the-test/', 'King Edward VI Foundation') + ' and ' + SRC('https://westmidlandsgrammarschools.co.uk/the-entrance-test', 'West Midlands Grammar Schools') + '; ' + SRC('https://www.bournemouth-school.org/admissions-2/joining-year-7-in-september/', 'Bournemouth School') + '; ' + SRC('https://www.thebucksgrammarschools.org/faqs', 'TBGS') + '; ' + SRC('https://www.crossleyheath.org.uk/school-information/admissions', 'Crossley Heath') + '; ' + SRC('https://www.latymer.co.uk/2028admissionsyear7', 'Latymer') + '; ' + SRC('https://csse.org.uk/', 'CSSE') + '; ' + SRC('https://www.gloucestershire.gov.uk/schooladmissions/grammar-schools/', 'Gloucestershire County Council') + '; ' + SRC('https://www.swhertsschools.org.uk/academic-ability-test/', 'SW Herts Consortium') + '; ' + SRC('https://www.tiffinschool.co.uk/admissions/year-7-admissions/', 'Tiffin School') + '; ' + SRC('https://grammarschools.lincs.sch.uk/the-11-plus/testing-arrangements/', 'Lincolnshire consortium') + '; ' + SRC('https://www.medway.gov.uk/info/200137/schools_and_learning/1049/medway_test_11', 'Medway Council') + '; ' + SRC('https://www.northyorks.gov.uk/education-and-learning/school-admissions/selective-schools', 'North Yorkshire Council') + '; ' + SRC('https://www.phsg.org/page/?title=The+11+Plus+Examination+Process&amp;pid=418', 'Plymouth High School for Girls') + '; ' + SRC('https://www.redbridge.gov.uk/schools/school-admissions/redbridge-11-plus', 'Redbridge Council') + '; ' + SRC('https://www.suttongrammar.sutton.sch.uk/admissions/faqs/', 'Sutton Grammar School') + '; ' + SRC('https://www.tbgs.co.uk/join-us/apply-to-join-us/', 'Torquay Boys\' Grammar') + '; ' + SRC('https://www.salegrammar.co.uk/6731/september-2027-entry', 'Sale Grammar School') + '; ' + SRC('https://www.warwickshire.gov.uk/grammar-schools-11-test/11-test', 'Warwickshire County Council') + '; ' + SRC('https://www.wirral.gov.uk/schools-and-learning/school-admissions/step-by-step/apply-secondary-school-place/assessment-grammar', 'Wirral Council') + '; ' + SRC('https://www.qmgs.walsall.sch.uk/September-2027-Entry/', 'Queen Mary\'s Grammar School') + '. Bromley, Lancashire and Wiltshire rows rest on the schools\' pages read 31 October 2026 for our area pages. Where a host refused our request (Kent, Slough and three schools) we print "see the page" rather than guess. We are not connected with any of these bodies.' },
        { kind: 'p', mt: true, html: 'Read the table for three things. One area name can hide several tests: in Barnet, Bromley, Reading or Lancashire, schools a few miles apart set different subjects on different dates, so the real question is which school. Providers are changing: Bournemouth, Christchurch and Poole moves to Quest and Gloucestershire to FSCE, and Latymer has proposed Quest, so last year\'s practice books there describe a test that has gone. And the maths ranges from none at all, in Lincolnshire and at Newstead Wood, to a timed paper of its own in the CSSE schools, Medway and Plymouth; where it is one section of a mixed paper, as in Buckinghamshire, Birmingham, Trafford or the Wirral, a child must switch subject at speed.' }
      ]
    },
    {
      id: 'providers', tint: 'deep', eyebrow: 'Tests by provider and entry point',
      h2: 'Who writes the 7 plus, 11 plus, 13 plus and 16 plus, and how do they differ?',
      lede: 'Four organisations write most of the 11 plus papers in England, and two more set the independent school pre-tests. Each sells to councils or schools, not to parents, and each builds a different paper for each customer. The entry points either side of 11, at 7, 13 and 16, have their own setters again.',
      body: [
        { kind: 'table', caption: 'Selective entry points and their setters, from each provider\'s own pages (re-read for this guide)', head: ['Entry point or provider', 'Who buys or sets it', 'Format the provider describes', 'Maths content it states'], rows: [
          ['GL Assessment 11 plus', 'Councils and consortia in many areas', 'Built per area; GL says "11+ tests vary from area to area"', 'Set to each area\'s order; none in Lincolnshire'],
          ['Quest Assessments', 'Councils, consortia and independent schools; "Trusted by 130+ schools"', 'Paper and online, "For ages 7+ to 16+"', 'Each school\'s paper is unique to it'],
          ['FSCE', 'Grammar schools, "written by Grammar Schools, for Grammar Schools"', 'Multiple choice and short written answers', 'English and maths, to the end of Year 5'],
          ['Cambridge Insight (formerly CEM)', 'Schools and local authorities only', 'Cambridge Select Insight, digital, about 60 minutes', 'A numerical section; entry to Years 7 to 10'],
          ['ISEB Common Pre-Tests', 'Independent senior schools', 'Four online adaptive tests, 2 hours 15 minutes in all', 'National Curriculum to the end of Year 5'],
          ['UKiset', 'Independent and British curriculum schools, for pupils aged 9.5 to 18', 'Adaptive, online, in English', 'Working with numbers, value and sequences'],
          ['London 11+ Consortium', 'A group of London independent schools; Quest as provider', 'One online sitting of 100 minutes', '20 minutes of adaptive maths, Year 5 content'],
          ['7 plus', 'Each school, sometimes with a provider', 'Varies school by school', 'Key stage 1, up to number bonds to 20 by end of Year 2'],
          ['13 plus (ISEB CE and CASE)', 'CE: the prep school enters pupils; CASE: senior schools enter and mark', 'CE sessions in November, January and May/June; CASE in February and May', 'CASE maths: one paper, 100 marks, 90 minutes'],
          ['16 plus sixth form', 'School sixth forms and independent schools', 'GCSE-grade criteria, or a school\'s own paper', 'GCSE level; grade 4 is the DfE\'s "standard pass"']
        ] },
        { kind: 'source', html: 'Sources: GL Assessment\'s 11+ shop, ' + SRC('https://www.questassessments.com/admissions', 'Quest Admissions') + ', FSCE\'s home page, ' + SRC('https://www.cem.org/entrance-assessments', 'Cambridge Insight entrance assessments') + ', ' + SRC('https://www.iseb.co.uk/', 'ISEB') + ', ' + SRC('https://www.ukiset.com/about-ukiset', 'UKiset') + ', the London 11+ Consortium, the DfE national curriculum and GCSE factsheet, read 31 October 2026 for our provider pages and re-checked for this guide.' },
        { kind: 'p', mt: true, html: 'Start with the publishers. ' + L('gl-assessment-11-plus-maths-practice', 'Our GL Assessment 11 plus maths page') + ' is for families in the many areas that buy GL papers, and it shows why a GL booklet from one county can look nothing like the next. ' + L('cem-11-plus-maths-practice', 'The CEM page') + ' explains a brand in transition: Cambridge Insight\'s own timeline records "2025 Cambridge CEM becomes Cambridge Insight", and its entrance test, Cambridge Select Insight, is a short digital assessment that "can only be purchased by schools and Local Education Authorities". ' + L('quest-assessments-11-plus-maths-practice', 'The Quest Assessments page') + ' is the one to read in Bexley, Plymouth, Wirral, Kingston or Salisbury, or anywhere moving to Quest, because Quest itself says "Every school will use different papers".' },
        { kind: 'p', html: 'Independent schools mostly sit outside that system. ' + L('iseb-common-pre-test-maths-practice', 'Our ISEB Common Pre-Test page') + ' covers the screen-based pre-test that many senior schools ask for in Year 6 or Year 7, where a child cannot go back once an answer is in. ' + L('ukiset-maths-reasoning-practice', 'The UKiset page') + ' is written for families abroad, since UKiset describes itself as "an adaptive online entry test in English" and the hardest part of its maths for many pupils is the English. ' + L('independent-school-11-plus-maths-london', 'The London independent school page') + ' unpacks the London 11+ Consortium sitting, where maths comes first and lasts 20 minutes of a 100-minute test.' },
        { kind: 'p', html: 'The other entry points each have one page. ' + L('7-plus-maths-preparation', 'Seven plus preparation') + ' is for parents of six-year-olds, and argues for calm talk over worksheets because no board sets a 7 plus at all. ' + L('13-plus-scholarship-maths-preparation', 'The 13 plus scholarship page') + ' deals with ISEB\'s CASE paper, which allows 90 minutes for 100 marks and expects proof-style working. ' + L('16-plus-sixth-form-entrance-maths', 'Sixth form entrance maths') + ' separates the two routes into Year 12: GCSE-grade criteria at state sixth forms, which the School Admissions Code allows, and the papers independent schools set in Year 11. For a general overview of grammar school preparation in one place, ' + L('11-plus-maths-tuition', 'our 11 plus maths tuition page') + ' is the starting door.' }
      ]
    },
    {
      id: 'areas', tint: '', eyebrow: '11 plus by area',
      h2: 'How does the 11 plus change from one county or borough to the next?',
      lede: 'Each area page below takes one row of the table and goes deep: the papers, the dates, the scoring and one maths topic that the local format makes worth teaching. Here is what sets each one apart, grouped by region.',
      body: [
        { kind: 'p', html: '<strong>London boroughs.</strong> In north London, ' + L('11-plus-maths-tuition-barnet', 'Barnet') + ' has three selective state schools whose maths arrives at three different moments, and ' + L('11-plus-maths-tuition-enfield', 'Enfield') + ' is about one school whose test is changing shape for today\'s Year 5. East of the City, ' + L('11-plus-maths-tuition-redbridge', 'Redbridge') + ' carries a warning from its own council that free practice material might not match the real test. In the south-east, ' + L('11-plus-maths-tuition-bexley', 'Bexley') + ' registers children in March of Year 5, earlier than almost anywhere, and ' + L('11-plus-maths-tuition-bromley', 'Bromley') + ' has two grammar schools that give opposite answers on maths. South-west of the centre, ' + L('11-plus-maths-tuition-sutton', 'Sutton') + ' asks the same maths twice, once with options and once without, while ' + L('11-plus-maths-tuition-kingston', 'Kingston') + ' teaches answers written into digit columns rather than chosen from a list.' },
        { kind: 'p', html: '<strong>South East and the Home Counties.</strong> ' + L('11-plus-maths-tuition-kent', 'Kent') + ' has its own page, built from the council\'s leaflet because the council\'s website would not answer our requests. Its neighbour ' + L('11-plus-maths-tuition-medway', 'Medway') + ' runs a separate test and gives maths an unbroken 50-minute paper. ' + L('11-plus-maths-tuition-buckinghamshire', 'Buckinghamshire') + ' enters state primary pupils automatically and paces the room with an audio file. ' + L('11-plus-maths-tuition-hertfordshire', 'Hertfordshire') + ' has a consortium of schools in the south-west of the county and, separately, Dame Alice Owen\'s School, each running its own test. ' + L('11-plus-maths-tuition-slough', 'Slough') + ' turns the clock on the exam room wall into its maths topic, and ' + L('11-plus-maths-tuition-reading', 'Reading') + ' runs two tests on two calendars, one of them in July of Year 5. In Essex, ' + L('11-plus-maths-tuition-essex', 'the Essex page') + ' covers the CSSE schools around Colchester and Chelmsford, and ' + L('11-plus-maths-tuition-southend', 'the Southend page') + ' the Southend schools on the same test, where maths gets a full hour.' },
        { kind: 'p', html: '<strong>South West.</strong> ' + L('11-plus-maths-tuition-gloucestershire', 'Gloucestershire') + ' is moving its test from September of Year 6 to Saturday 3 July 2027 and adding a paper answered in short written form. ' + L('11-plus-maths-tuition-bournemouth-christchurch-and-poole', 'Bournemouth, Christchurch and Poole') + ' shortens its maths paper and caps it at Year 5 when Quest takes over. ' + L('11-plus-maths-tuition-wiltshire', 'Wiltshire') + ' focuses on the Salisbury boys\' grammar school, whose 2028 leaflet is already published. Further west, ' + L('11-plus-maths-tuition-plymouth', 'Plymouth') + ' sets maths on a Saturday of its own, and ' + L('11-plus-maths-tuition-torbay', 'Torbay') + ' tests English and maths only, with one set of results shared by every selective school in the bay.' },
        { kind: 'p', html: '<strong>Midlands.</strong> Three pages share one regional test from the West Midlands Grammar Schools group, each from a different angle. ' + L('11-plus-maths-tuition-birmingham', 'The Birmingham page') + ' builds the angle facts that need no measuring instrument; ' + L('11-plus-maths-tuition-warwickshire', 'the Warwickshire page') + ' takes the council at its word that the difficulty may go beyond end-of-key-stage expectations; and ' + L('11-plus-maths-tuition-wolverhampton-and-walsall', 'Wolverhampton and Walsall') + ' explains why one school calls the same section numerical reasoning and sets its pass mark only after results. To the east, ' + L('11-plus-maths-tuition-lincolnshire', 'Lincolnshire') + ' is the honest exception: two reasoning tests, no maths paper, and a page that says so first.' },
        { kind: 'p', html: '<strong>North of England.</strong> ' + L('11-plus-maths-tuition-trafford', 'Trafford') + ' names four maths areas in its consortium test, and statistics is the one families tend to skip. Across the Mersey, ' + L('11-plus-maths-tuition-wirral', 'the Wirral') + ' puts maths in Paper two with non-verbal reasoning, in a Quest assessment sat on a Tuesday. ' + L('11-plus-maths-tuition-lancashire', 'Lancashire') + ' had three schools testing on one Saturday with two styles of paper. ' + L('11-plus-maths-tuition-calderdale', 'Calderdale') + ', for the Halifax schools, marks English and maths first and reads creative writing only for children who clear that bar. ' + L('11-plus-maths-tuition-north-yorkshire', 'North Yorkshire') + ' added a maths section to the Ripon test for the first time in 2026, while Skipton\'s schools set something different.' }
      ]
    },
    {
      id: 'ni', tint: 'deep', eyebrow: 'Northern Ireland transfer test',
      h2: 'How does the Northern Ireland transfer test work, and how much of it is maths?',
      lede: 'Northern Ireland has one common test, run by the Schools\' Entrance Assessment Group (SEAG) for post-primary schools that select. It is sat in P7 over two Saturdays in November, and maths is exactly half of the result.',
      body: [
        { kind: 'table', caption: 'The SEAG Entrance Assessment for entry to Year 8 in September 2027, from seagni.co.uk (re-read 1 November 2026)', head: ['Point', 'What SEAG publishes'], rows: [
          ['Who it is for', '"all 63 of the post-primary schools in N. Ireland which use academic selection"'],
          ['Who sets and marks it', 'GL Assessment, for SEAG'],
          ['Paper 1', 'Saturday 14 November 2026'],
          ['Paper 2', 'Saturday 21 November 2026'],
          ['Maths questions', '56 across Papers 1 and 2'],
          ['Maths score', 'A Maths SAS from 69 to 141, mean 100'],
          ['Total score', 'English SAS plus Maths SAS, range 138 to 282, mean 200'],
          ['Outcomes issued', 'Saturday 23 January 2027'],
          ['How many sit it', 'Around 13,000 pupils each year']
        ] },
        { kind: 'source', html: 'Sources: ' + SRC('https://www.seagni.co.uk/guidance/faqs', 'SEAG FAQs') + ' and ' + SRC('https://www.seagni.co.uk/guidance/key-dates', 'SEAG key dates') + ', re-read 1 November 2026. SEAG says it is a private company, not under the control of the Department of Education or the Education Authority. We are not connected with SEAG or any school.' },
        { kind: 'p', mt: true, html: 'Two pages cover it. ' + L('transfer-test-maths-practice-northern-ireland', 'Transfer test maths practice for Northern Ireland') + ' is the format page: the shared hour, the order a child chooses, the multiple-choice and free-response questions and the content list. ' + L('transfer-test-maths-tuition-belfast', 'Transfer test maths tuition in Belfast') + ' is the local page, for a city with the densest cluster of SEAG schools, and it focuses on what happens after the test, because each school decides for itself how to use the score.' },
        { kind: 'p', html: 'One difference from England is worth spelling out. An English area test is usually sat in September and results arrive in October, before the national application deadline. The SEAG outcome comes in late January, and the application process for Northern Ireland, run by the Education Authority rather than SEAG, follows it. So a Northern Ireland family meets the test later, in P7, and decides on schools with the score already in hand.' }
      ]
    },
    {
      id: 'choose', tint: 'tint', eyebrow: 'Find your test',
      h2: 'How do I find out exactly which test my child will sit?',
      lede: 'Work from the schools back to the test, not from the test brand forward. These steps take an evening, and they save a year of preparing for the wrong paper.',
      body: [
        { kind: 'ol', items: [
          'List every selective school you might name on the application, including any just over a county or borough line. Selection follows the school, not your postcode.',
          'For each school, open its own admissions page and find the test for your child\'s entry year. Check the year printed on the page: several areas are changing provider for 2028 entry.',
          'Write down who runs the test (council, consortium or school), who writes it (GL, Quest, FSCE, Cambridge Insight or the school), and whether one registration covers several schools.',
          'Find the paper list. Note whether maths is a paper of its own, a section inside a mixed paper, or absent; and whether answers are multiple choice, written into digit boxes, or worked in full.',
          'Note the registration window. In 2026 Bexley\'s ran in March of Year 5, Buckinghamshire\'s in May and June, Tiffin School\'s closed on 1 September; missing it usually means no test.',
          'Download only the familiarisation material the test\'s own provider or council offers. Several of them say plainly that commercial packs may not match the real paper.',
          'Then match the maths preparation to the paper: depth across the Year 5 curriculum for most English tests, key stage 1 for a 7 plus, GCSE algebra for 16 plus.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Worked example (ours): pace', p: 'Plymouth\'s 2026 maths paper was 60 questions in 40 minutes. Our arithmetic: 40 times 60 is 2,400 seconds, divided by 60 questions is 40 seconds a question. Ripon\'s new section is about 25 questions in 25 minutes, so about 60 seconds each. Same age, half as much time again per question in one place as the other.' },
          { h3: 'Worked example (ours): share', p: 'In Buckinghamshire maths carries 25% of the weighting, and in Bexley numerical reasoning also carries 25%. In the London 11+ Consortium sitting, maths takes 20 of 100 minutes, which our sum makes one fifth of the time. In Lincolnshire, by contrast, the maths share is nil, so a maths tutor cannot raise the score.' },
          { h3: 'Worked example (ours): format', p: 'A child at Sutton sees a multiple-choice maths paper in the SET, then a second-stage maths paper that is "not multiple choice". The same skill, choosing the method, is tested two ways within a few weeks. We teach checking by estimation for the first and full working for the second.' }
        ] },
        { kind: 'table', mt: true, caption: 'Our own comparison: how long the maths element lasts in some areas, from the figures in the master table (our reading)', head: ['Test', 'Maths time', 'How it sits in the test'], rows: [
          ['London 11+ Consortium', '20 minutes', 'First section of six, adaptive, on screen'],
          ['North Yorkshire, Ripon', 'About 25 minutes', 'A section after non-verbal reasoning, no practice questions'],
          ['Latymer, Enfield (2026)', '30 minutes', 'A booklet paired with verbal reasoning'],
          ['Bournemouth, Christchurch and Poole (2028)', '40 minutes', 'Paper one of three, Quest'],
          ['Plymouth', '40 minutes', 'Its own Saturday, 60 questions'],
          ['Medway', '50 minutes', 'A paper of its own, no timed sections'],
          ['CSSE, Essex and Southend', '60 minutes', 'A paper of its own'],
          ['Dame Alice Owen\'s', 'One hour', 'Written by the school, Part II only'],
          ['Lincolnshire', 'None', 'Two reasoning tests']
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The year at a glance',
    h2: 'When do selective tests happen, from Year 4 to Year 11?',
    lede: 'Most English 11 plus tests follow one calendar, but the exceptions are large. This is our own summary of the dates in the tables above; always check your school\'s page for the year your child applies.',
    table: { caption: 'A typical selective test calendar and its exceptions (our summary of the 2026 and 2027 dates above)', head: ['When', 'What usually happens', 'Notable exceptions'], rows: [
      ['Year 4 and early Year 5', 'Secure the Year 4 and Year 5 maths, no test practice', 'A 7 plus is sat in Year 2, far earlier'],
      ['Spring of Year 5', 'Registration windows begin to open', 'Bexley registered in March 2026; Reading School closed 17 May 2026'],
      ['Summer term of Year 5', 'Most registrations close; familiarisation papers arrive', 'Gloucestershire\'s test moves to Saturday 3 July 2027; Reading School tested on 16 July 2026'],
      ['September of Year 6', 'The main sitting in most areas', 'Kingston\'s Tiffin School tested on 2 October and 12 November 2026'],
      ['November of Year 6 or P7', 'Independent and NI tests', 'London 11+ Consortium late November or early December 2026; SEAG 14 and 21 November 2026'],
      ['Year 8 to Year 11', 'ISEB CE and CASE at 13 plus; sixth form tests in Year 11', 'CASE sessions in February and May']
    ] },
    left: { h3: 'If your area tests in July', ps: [
      'Work back a full term. A Gloucestershire child now in Year 5 sits in the summer, so the Year 5 curriculum has to be secure by Easter, not by September.',
      'We plan lessons to the date on the school\'s page, not to a generic 11 plus calendar.'
    ] },
    right: { h3: 'If your area tests no maths', ps: [
      'For Lincolnshire, or for Newstead Wood, our maths lessons serve school and Year 7, not the test. We will tell you so in the first conversation.',
      'For young children who enjoy puzzles, the ' + L('courses/reasoning-and-readiness-course-for-young-thinkers', 'reasoning and readiness course') + ' builds pattern and spatial thinking without drilling items.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Maths courses for every selective entry point',
    lede: 'Grouped by the age at which a child meets the test. Each card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Ages 6 to 9', sub: '7 plus and early reasoning', courses: [
        { code: 'UK / SS / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and readiness', blurb: 'Puzzles in pattern, shape and number.' },
        { code: 'UK / SS / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'The curriculum in order, taught live.' },
        { code: 'UK / SS / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Quick, accurate number sense.' }
      ] },
      { num: 'II', h3: 'Ages 9 to 11', sub: 'Area and independent 11 plus', courses: [
        { code: 'UK / SS / 04', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'Year 5 depth, shaped to your paper.' },
        { code: 'UK / SS / 05', slug: 'ks2-sats-maths-course', title: 'KS2 SATs maths', blurb: 'Arithmetic and reasoning for Year 6.' }
      ] },
      { num: 'III', h3: 'Ages 11 to 16', sub: '13 plus and sixth form entry', courses: [
        { code: 'UK / SS / 06', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Early secondary maths', blurb: 'Ratio, algebra and geometry for Years 7 and 8.' },
        { code: 'UK / SS / 07', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'Foundation and Higher, for 16 plus papers.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons, planned around your child\'s actual test',
    lede: TIMING + ' Our teachers work from India, five and a half hours ahead of UK time in winter and four and a half in summer, and every time we send you is already in UK time.',
    slots: [
      { time: 'After school', l: 'Short weekday slots for Years 5 and 6.' },
      { time: 'Weekend morning', l: 'Longer sessions before a test month.' },
      { time: 'School holidays', l: 'A steady summer for July or September tests.' }
    ],
    cells: [
      { h3: 'Test first', p: 'We read your school\'s page with you before planning a single lesson.' },
      { h3: 'Curriculum depth', p: 'Year 5 maths taught to understanding, which every English paper rests on.' },
      { h3: 'Format practice', p: 'Multiple choice, digit boxes or full working, as your paper needs.' },
      { h3: 'Original questions', p: 'Every practice problem is written by us; no paper is copied.' },
      { h3: 'Group or private', p: 'A class of 15 to 20, or a teacher for your child alone.' },
      { h3: 'Honest advice', p: 'If your test has no maths, we say so before you pay anything.' }
    ]
  },

  projectsH2: 'Work by students at Modern Age Coders',
  projectsLede: 'Maths and coding projects by students who kept learning after their entrance year. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' words from our Google profile, unedited.',

  fees: {
    h2: 'Fees for selective test maths lessons',
    lede: 'One monthly fee whichever test your child sits, shown in the currency we use for UK families. The first lesson costs nothing and needs no card.',
    free: ['A first lesson matched to your child\'s test', 'A short written note on what we found', 'Just a phone number to book'],
    group: ['A class of 15 to 20 at the same stage', 'One regular teacher', 'Original practice in your paper\'s format', 'Easy to pause around school events'],
    one: ['A teacher for your child alone', 'A plan dated to your test day', 'Extra time on one weak topic']
  },

  faq: {
    eyebrow: 'Selective test questions',
    h2: 'What parents ask about UK selective school tests',
    items: [
      { q: 'Is the 11 plus the same test everywhere?', a: 'No. Each council, consortium or school chooses its own test and provider, so the papers, subjects, timing and dates differ by area and sometimes by school within an area. Our master table shows 29 areas side by side.' },
      { q: 'Which 11 plus test does my area use?', a: 'Find your area in our table, then confirm on the admissions page of every school you are considering. In 2026, GL Assessment, Quest Assessments and FSCE each supplied several areas, and some schools set their own papers.' },
      { q: 'Does every 11 plus include maths?', a: 'No. Lincolnshire\'s consortium tests only verbal and non-verbal reasoning, and Newstead Wood School in Bromley says it tests no subject other than reasoning. Most other areas include maths, either as its own paper or as a section of a mixed paper.' },
      { q: 'Is CEM still used for the 11 plus?', a: 'CEM is now Cambridge Insight; its own timeline says the change came in 2025. Its entrance test, Cambridge Select Insight, is sold only to schools and local authorities, and in the grammar areas we checked the paper tests have moved to other providers.' },
      { q: 'When is the 11 plus taken?', a: 'In most English areas, in September of Year 6, with registration in the summer term of Year 5. The exceptions include Reading School, which tested on 16 July 2026, and Gloucestershire, whose schools plan to test on Saturday 3 July 2027.' },
      { q: 'What is the difference between GL, Quest and FSCE?', a: 'They are separate companies that each write bespoke papers for the schools or councils that buy them. GL and Quest papers are usually multiple choice on an answer sheet; FSCE papers mix multiple choice with short written answers.' },
      { q: 'How is the Northern Ireland transfer test different?', a: 'It is one SEAG test for the whole of Northern Ireland, sat in P7 on two Saturdays in November, with 56 maths questions across the two papers. Outcomes arrive in late January, and each school decides how to use the score.' },
      { q: 'What about independent schools and the 13 plus?', a: 'Many independent schools use the ISEB Common Pre-Tests in Year 6 or 7, UKiset for pupils from abroad, a consortium sitting such as the London 11+ Consortium, or their own test. At 13 plus, ISEB\'s Common Entrance and CASE scholarship papers apply.' },
      { q: 'When are your lessons?', a: TIMING + ' Every time we give you is in UK time.' },
      { q: 'Can you guarantee a grammar school place?', a: 'No. Places depend on scores, rules and preferences that councils and schools set. We teach the maths a child\'s actual test sets, in its format, and tell you honestly what we see.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Beyond the selective tests',
    lede: 'Other doors for the same years.',
    items: [
      { href: '/ks2-sats-maths-papers-explained', label: 'KS2 SATs maths papers', p: 'The national Year 6 tests every child in England sits, selective or not.' },
      { href: '/year-5-maths-tutor-online', label: 'Year 5 maths tutor', p: 'The year whose curriculum most 11 plus papers stop at.' },
      { href: '/year-6-maths-tutor-online', label: 'Year 6 maths tutor', p: 'For the year after the test, whatever the result.' },
      { href: '/common-entrance-maths-tuition', label: 'Common Entrance maths', p: 'The ISEB route into independent senior schools.' },
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'Where 16 plus entry criteria are set.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All UK pages', p: 'Every UK course and guide on our site.' }
    ]
  },

  start: {
    h2: 'Book a free lesson, with your test in mind',
    lede: 'Tell us your child\'s school year, your area and the schools you are considering. Before we teach, we will check which test those schools set, then give a short lesson aimed at it and a plain note on what we saw.',
    readFirst: 'Prefer to read first? The <a class="ag-inline-link" href="/courses/11-plus-maths-preparation-course-uk">11 plus maths course</a> lists the full syllabus, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our method.',
    note: 'WhatsApp is quickest and free from a UK mobile. Our team answers from India, on a number starting +91.',
    formNote: 'Nothing to pay at this stage. We get in touch once to fix a time.'
  },

  footer: {
    cols: [
      { h4: 'Selective entry', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths' },
        { href: '/common-entrance-maths-tuition', label: 'Common Entrance' },
        { href: '/ks2-sats-maths-papers-explained', label: 'KS2 SATs papers' },
        { href: '/year-5-maths-tutor-online', label: 'Year 5 maths' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Twenty-nine areas, one table, then the maths'
  },

  personalityCss: `
.ag-root.ag-ukss .ag-hero h1 { letter-spacing: -0.015em; max-width: 20ch; }
.ag-root.ag-ukss .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-ukss .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ukss .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ukss .ag-table th:first-child { width: 16%; }
.ag-root.ag-ukss .ag-table td { font-size: 0.95em; }
`,

  dossier: {
    curriculumAuthority: 'Councils\', consortia\'s and schools\' own 11 plus pages for 29 English areas (Bexley, Birmingham and the King Edward VI Foundation, West Midlands Grammar Schools, Bournemouth School, TBGS and Buckinghamshire Council, Crossley Heath, Latymer, CSSE, Gloucestershire County Council and Pate\'s, SW Herts and Dame Alice Owen\'s, Tiffin School, Lincolnshire consortium, Medway, North Yorkshire and Ermysted\'s, Plymouth High School for Girls, Kendrick and Reading School, Redbridge, Slough, Sutton Grammar, Torbay and its schools, Sale Grammar, Warwickshire, Wirral and Quest, Queen Mary\'s schools), re-read 1 November 2026; providers\' own pages (GL 11+ shop, Quest, FSCE, Cambridge Insight, ISEB, UKiset, London 11+ Consortium); SEAG for Northern Ireland; DfE for the national curriculum, GCSE grades and the School Admissions Code.',
    localProject: 'The pillar page for the UK selective school maths tests hub. It answers "which 11 plus test does my area use" with a 29-row master table (who runs it, provider, whether maths is tested, the 2026 date, and what is announced for 2028), a provider and entry-point table from 7+ to 16+, a regional walk through every area page, a SEAG table for Northern Ireland, seven numbered steps for finding the real test, three labelled worked examples on pace, share and format, a maths-time comparison and a Year 4 to Year 11 calendar. Lesson family: sorting tests before teaching any maths.',
    requiredMentions: [
      'Which 11 plus test does each area use, and is there maths in it?',
      'No maths paper: verbal and non-verbal reasoning tests only',
      'Proposed switch to Quest, subject to consultation',
      'Quest Assessments: maths is Paper one, 40 minutes, no Year 6 content',
      'FSCE, on Saturday 3 July 2027, in Year 5',
      'Ripon: a maths section of about 25 questions in 25 minutes, new in 2026',
      'A Maths SAS from 69 to 141, mean 100',
      'English SAS plus Maths SAS, range 138 to 282, mean 200',
      'divided by 60 questions is 40 seconds a question',
      'Work from the schools back to the test, not from the test brand forward'
    ],
    sources: [
      { claim: 'Bexley: Quest provider, numerical reasoning, 25% weighting, test between 2 and 10 September 2026.', url: 'https://www.bexley.gov.uk/services/schools-and-education/selection-tests/about-test' },
      { claim: 'Birmingham and the West Midlands: one shared GL test, Saturday 12 September 2026, mathematics 25%.', url: 'https://kingedwardvifoundation.co.uk/the-test/' },
      { claim: 'Bournemouth, Christchurch and Poole: GL in 2026, 50-minute maths; Quest for 2028 entry, 40-minute maths with no Year 6 content.', url: 'https://www.bournemouth-school.org/admissions-2/joining-year-7-in-september/' },
      { claim: 'Gloucestershire: test on 12 September 2026; FSCE and Saturday 3 July 2027 for 2028 entry.', url: 'https://www.gloucestershire.gov.uk/schooladmissions/grammar-schools/' },
      { claim: 'Lincolnshire: a verbal reasoning test and a non-verbal reasoning test, GL Assessment, September 2026 dates.', url: 'https://grammarschools.lincs.sch.uk/the-11-plus/testing-arrangements/' },
      { claim: 'Medway: three papers including a 50-minute Mathematics paper, written for Medway by GL Assessment.', url: 'https://www.medway.gov.uk/info/200137/schools_and_learning/1049/medway_test_11' },
      { claim: 'Plymouth: Quest, maths 40 minutes and 60 questions, maths on Saturday 19 September 2026.', url: 'https://www.phsg.org/page/?title=The+11+Plus+Examination+Process&pid=418' },
      { claim: 'Northern Ireland: SEAG Papers on 14 and 21 November 2026, 56 maths questions, SAS ranges, outcomes 23 January 2027.', url: 'https://www.seagni.co.uk/guidance/faqs' },
      { claim: 'Cambridge Insight (formerly CEM): 2025 rename, Select Insight for Years 7 to 10, about 60 minutes, sold only to schools and local authorities.', url: 'https://www.cem.org/entrance-assessments' },
      { claim: 'Quest Admissions: ages 7+ to 16+, trusted by 130+ schools; every school uses different papers.', url: 'https://www.questassessments.com/admissions' }
    ],
    rejectedClaims: [
      'Kent Test provider, format and 2026 dates: kent.gov.uk returns 403 and the leaflet mirror our Kent page used has no raw copy here, so the row says "see the council\'s page".',
      'Slough provider and 2026 date: herschel.slough.sch.uk returned 403 on 1 November 2026 and the consortium briefing was not re-read; not printed.',
      'The Henrietta Barnett School, The Tiffin Girls\' School and Chelmsford County High School for Girls test details: their hosts returned 403 on 1 November 2026; not retried, not printed in the table.',
      'Trafford Council\'s page returned 403; the Trafford row rests on Sale Grammar School\'s page for the consortium.',
      'Medway\'s test dates and weighting formula sit on council pages not re-read for this guide; not printed.',
      'CSSE\'s 2026 test date and 50% weighting appear only in the 2027 Information Guide, not re-read today; the rows say "see CSSE\'s page".',
      'Qualifying scores and cut-offs (121, 205, 220, 303, 334 and others) are admissions details that change each year: left to the area pages.',
      'Any claim about pass rates, success rates or places; any provider\'s prices; any reproduced paper or sample question.'
    ]
  }
};
