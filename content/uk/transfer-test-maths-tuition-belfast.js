'use strict';
// Transfer test maths tuition, Belfast (ag- elevenplus door, Northern Ireland; UK and US exams cluster Phase 2, row
// UK046). Sources, read raw on 31 October 2026 (seagni.co.uk via curl; raw copies in keyword-research-2026-09/
// uk-us-gap/src/transfer-test-maths-tuition-belfast/):
//  - SEAG, FAQs (seagni.co.uk/guidance/faqs). Verbatim: "The Schools' Entrance Assessment Group (SEAG) is a not for
//    profit, private limited company, open to all 63 of the post-primary schools in N. Ireland which use academic
//    selection for all or part of their Year 8 intake."; "As a private company SEAG is not under the control of the
//    Department of Education, the Education Authority or any public body"; "SEAG includes Controlled and Voluntary
//    Grammar Schools and Integrated Schools in its membership."; "Children born between 2nd July 2015 and 1st July 2016,
//    who will be transferring from primary to Year 8 post- primary education in September 2027"; "it has no role or
//    involvement in decisions as to how each SEAG school uses those Outcomes"; "whether to use Total Standardised Age
//    Score, Band, a combination of both or by some other method are entirely a matter for the Board of Governors of each
//    SEAG school"; "These Criteria are published in the 2026-27 school year before Parents/Guardians begin the Post
//    Primary Transfer Application Process."; "There is no connection between where a pupil sits the SEAG Entrance
//    Assessment and the Post Primary Admissions Process. The Post Primary Admissions Process is run by the Education
//    Authority – SEAG has no role in this."; "you may apply for a Year 8 place in any of the SEAG schools"; "The Total
//    SAS range will be 138-282 with a mean (or average) of 200."; bands 1 to 6 by cohort percentile (60% or higher;
//    50-59%; 40-49%; 30-39%; 20-29%; less than 20%); "Bands 2-5 will each contain 10% of the total cohort."; "Post Primary
//    Transfer Application Process which begins around February 2027 and is run by the Education Authority, not SEAG";
//    "Special Circumstances"; "This process is completely outside the remit of SEAG."; "It is up to the Parent/Guardian
//    to read and familiarise themselves with the Year 8 Post Primary Schools Admissions Criteria for any schools which
//    they are considering for their child."; "No, SEAG do not sell any practice papers."; "There is no alternative date
//    for individual pupils who have missed one of the two Papers."
//  - SEAG, What we do (seagni.co.uk/about-us/what-we-do): "Around 13,000 pupils sit the Entrance Assessment in our
//    Assessment Centres each year."; "For 14 years, prior to the formation of SEAG, P7 pupils ... needed to sit two
//    different types of Entrance Assessment on four consecutive Saturdays to cover all 63 potential schools."; "By the
//    end of 2025, SEAG had provided around 40,000 pupils with the SEAG Entrance Assessment"; GL Assessment sets and
//    marks the Entrance Assessment.
//  - SEAG, Member Schools (seagni.co.uk/about-us/member-schools): 63 Assessment Centres; our count of postal towns on
//    the list: Belfast 18, Newry 4, Derry 3 plus Londonderry 1, Lisburn 2. No school is named on our page.
//  - SEAG, Key dates (seagni.co.uk/guidance/key-dates): registration closes Tuesday 20 October 2026; Paper 1 Saturday
//    14 November 2026; Paper 2 Saturday 21 November 2026; outcomes Saturday 23 January 2027; re-mark closes Wednesday 3
//    February 2027.
//  - SEAG, Practice materials: Practice Papers 1 to 4 with answer sheets, English and Gaeilge, and a Parents' Guide
//    (Revised Sept 2026), free.
//  - Education Authority (eani.org.uk) returned 403 twice: not retried, not quoted.
// Our own: the "same test, local decision" framing, the postcode count, the fortnight plan, the four worked examples,
// the practice set and the after-the-test timeline wording. Spine: the test is identical across Northern Ireland; what
// the score means is decided school by school, and the Belfast area has the densest cluster of SEAG schools. Lesson
// family: an area transfer test door, distinct from the NI-wide format page (transfer-test-maths-practice-northern-
// ireland), which covers the papers, the shared hour and the content list.

const T = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'TRANSFER TEST BELFAST', blurb: 'One SEAG test for all of Northern Ireland, 18 member schools with a Belfast address, and each one decides how to use the score.' },
  slug: 'transfer-test-maths-tuition-belfast',
  code: 'ttt',
  accent: '#675300',
  accentRationale: 'Transfer test Belfast: a dark mustard bronze (#675300, 7.04:1 on #FBF8F2), warmer than the NI-wide transfer page accent and clear of the Scottish greens',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Transfer test maths tuition Belfast',
  title: 'Transfer Test Maths Tuition Belfast | SEAG 2026, P7 Online',
  description: 'Transfer test maths tuition for Belfast P7 children: how SEAG outcomes are used by local grammar schools, the last fortnight before 14 November 2026, and live help.',
  ogDescription: 'The SEAG test is the same across Northern Ireland. In Belfast, Lisburn, Newry and Derry, each school decides what the score means. What parents should know.',
  twitterDescription: 'Transfer test maths for P7 in Belfast: the SEAG outcome, how admissions criteria use it, worked examples, and live online lessons.',
  pageName: 'Transfer Test Maths Tuition Belfast',
  webPageDescription: 'Live online transfer test maths lessons for P7 children in Belfast and nearby areas, built from SEAG\'s published guidance on the 2026 Entrance Assessment and how outcomes are used.',
  courseDescription: 'Live online maths for the SEAG Entrance Assessment: Northern Ireland Key Stage 2 number, fractions, measures, shape, data and probability, five-option multiple choice and free response, at P7 pace.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Transfer test maths, Belfast',
  navLinks: [
    { href: '#area', label: 'Belfast and area' },
    { href: '#outcome', label: 'What the score means' },
    { href: '#fortnight', label: 'The last fortnight' },
    { href: '#examples', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Northern Ireland &middot; Belfast, Lisburn, Newry, Derry &middot; P7 transfer',
  h1: 'Transfer test maths tuition in Belfast',
  lede: 'A P7 child in Belfast sits exactly the same transfer test as a child in Enniskillen or Coleraine: the SEAG Entrance Assessment, two papers on two Saturdays in November, set and marked by GL Assessment. What differs by area is what happens next. SEAG says plainly that it has no say in how its outcomes are used; each grammar school\'s Board of Governors writes its own Year 8 admissions criteria, and the application itself goes through the Education Authority in the spring. Belfast has more SEAG schools than anywhere else in Northern Ireland, so Belfast parents face more sets of criteria to read. This page explains the outcome, how schools may use it, what to do with the fortnight left before Paper 1, and how our lessons help.',
  secondaryCta: { href: '#outcome', label: 'What the score means' },
  wa: 'Hello Modern Age Coders, I would like a free first lesson in transfer test maths for my P7 child in Belfast.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from SEAG\'s 2026 guidance and member list',
  spec: [
    ['Test', 'SEAG Entrance Assessment'],
    ['Paper 1', 'Saturday 14 November 2026'],
    ['Paper 2', 'Saturday 21 November 2026'],
    ['Outcomes', 'Saturday 23 January 2027'],
    ['Belfast-address SEAG schools', '18 of 63'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['First lesson', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'The transfer test in Belfast is the SEAG Entrance Assessment, which every academically selective post-primary school in Northern Ireland accepts: 63 schools in all, 18 of them at a Belfast address. In 2026 the papers are on Saturday 14 and Saturday 21 November, with outcomes on Saturday 23 January 2027, and each school\'s governors decide how its admissions criteria use the score. Modern Age Coders gives transfer test maths tuition live online to P7 children in Belfast and nearby, either 1-on-1 or in a batch of 15 to 20, through its 11 Plus Maths course adapted to SEAG content. The first lesson is free; we are not connected with SEAG, GL Assessment, the Education Authority or any school.',

  picks: {
    eyebrow: 'Courses for P7 transfer',
    h2: 'Three courses for transfer test maths',
    lede: 'The 11 Plus Maths course is the main route, taught to SEAG\'s Key Stage 2 content. Elementary Maths fills gaps from earlier years, and Mental Maths builds the speed a shared hour demands.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'TB / 01', title: '11 Plus Maths', note: 'Selective-test problem solving, re-ordered around the Northern Ireland Key Stage 2 content SEAG lists.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'TB / 02', title: 'Elementary Maths', note: 'Place value, fractions, measures and data from the start, for a child with gaps below P7.' },
      { course: 'mental-maths-mastery-kids', code: 'TB / 03', title: 'Mental Maths for Kids', note: 'Quick, accurate recall so that more of the hour goes on reasoning.' }
    ]
  },

  sections: [
    {
      id: 'area', tint: 'tint', eyebrow: 'Belfast and area',
      h2: 'How many grammar schools in Belfast use the SEAG transfer test?',
      lede: 'On SEAG\'s published list of 63 member schools, 18 give a Belfast postal address, more than any other town. Lisburn has two, Newry four, and Derry or Londonderry four. Every one of them uses the same SEAG outcome, but not necessarily in the same way.',
      body: [
        { kind: 'table', caption: 'SEAG member schools by postal town, selected areas (our count from SEAG\'s member list, read 31 October 2026)', head: ['Area', 'SEAG member schools on the list', 'What that means for a P7 family'], rows: [
          ['Belfast', '18', 'The widest choice, and the most admissions criteria to compare'],
          ['Lisburn', '2', 'A short list nearby, with Belfast schools also within reach for many families'],
          ['Newry', '4', 'A cluster of its own in the south'],
          ['Derry or Londonderry', '4', 'The north-west cluster'],
          ['All of Northern Ireland', '63', 'Every SEAG school accepts the same outcome']
        ] },
        { kind: 'p', html: 'SEAG describes itself as "a not for profit, private limited company, open to all 63 of the post-primary schools in N. Ireland which use academic selection for all or part of their Year 8 intake", and adds that "SEAG includes Controlled and Voluntary Grammar Schools and Integrated Schools in its membership." We deliberately name none of the schools here. The list, with addresses, is on SEAG\'s own site, and what matters for a family is each school\'s published criteria, not a league table.' },
        { kind: 'two', mt: true,
          leftH3: 'Where your child sits the test does not matter',
          left: [
            'Parents choose an Assessment Centre from the 63 when they register. SEAG is emphatic that the choice has no bearing on admissions: "There is no connection between where a pupil sits the SEAG Entrance Assessment and the Post Primary Admissions Process."',
            'A Belfast child can sit the test in one school and apply to any SEAG school afterwards.'
          ],
          rightH3: 'One test where there used to be two',
          right: [
            'For 14 years before SEAG, SEAG says, P7 children needed "two different types of Entrance Assessment on four consecutive Saturdays to cover all 63 potential schools". Parents still search for the old names, AQE and PPTC.',
            'Now there is one assessment over two Saturdays. By the end of 2025, SEAG says, around 40,000 pupils had sat it.'
          ] },
        { kind: 'source', html: 'Sources: SEAG, <a class="ag-inline-link" href="https://seagni.co.uk/about-us/member-schools" rel="noopener" target="_blank">Member Schools</a>, <a class="ag-inline-link" href="https://seagni.co.uk/about-us/what-we-do" rel="noopener" target="_blank">What we do</a> and <a class="ag-inline-link" href="https://seagni.co.uk/guidance/faqs" rel="noopener" target="_blank">FAQs</a>, read on 31 October 2026. The town counts are our own tally of postal addresses on the member list and may shift if the list changes.' }
      ]
    },
    {
      id: 'outcome', tint: 'deep', eyebrow: 'What the score means',
      h2: 'What transfer test score is needed for a Belfast grammar school?',
      lede: 'There is no single answer, and SEAG does not publish one. Each school\'s Board of Governors decides whether its criteria use the total score, the band, both, or another method, and publishes those criteria during the 2026 to 2027 school year, before the application window opens.',
      body: [
        { kind: 'p', html: 'SEAG\'s words leave no room for doubt: it provides the test and the Statement of Outcomes, but "it has no role or involvement in decisions as to how each SEAG school uses those Outcomes." The choice of "whether to use Total Standardised Age Score, Band, a combination of both or by some other method" is "entirely a matter for the Board of Governors of each SEAG school". Any figure a parent hears at the school gate about a required score is, at best, about one school in one year.' },
        { kind: 'table', mt: true, caption: 'The SEAG outcomes most likely to be used in admissions (SEAG FAQs, 2026 Entrance Assessment)', head: ['Outcome', 'How SEAG defines it'], rows: [
          ['Total Standardised Age Score (TSAS)', 'English (or Gaeilge) SAS plus Maths SAS, across both papers; range 138 to 282, mean 200'],
          ['Band 1', 'Cohort percentile 60 and above, so the highest-scoring two fifths of the year\'s cohort'],
          ['Band 2', 'Cohort percentile 50 to 59'],
          ['Band 3', 'Cohort percentile 40 to 49'],
          ['Band 4', 'Cohort percentile 30 to 39'],
          ['Band 5', 'Cohort percentile 20 to 29'],
          ['Band 6', 'Cohort percentile below 20']
        ] },
        { kind: 'p', html: 'Two consequences follow for maths. First, the Maths SAS is half of the total, on a scale from 69 to 141 with a mean of 100, so the maths section carries exactly the same weight as the English. Second, the bands are relative: SEAG says "Bands 2-5 will each contain 10% of the total cohort", and the cohort is around 13,000 children a year. A band describes where a child stands among those who sat that year\'s test, not a fixed standard of maths.' },
        { kind: 'two', mt: true,
          leftH3: 'Reading a school\'s criteria',
          left: [
            'Look for which outcome is used (TSAS, band or both), how ties are broken, and whether criteria such as siblings or feeder primaries come before or after the score.',
            'SEAG\'s own advice: "It is up to the Parent/Guardian to read and familiarise themselves with the Year 8 Post Primary Schools Admissions Criteria for any schools which they are considering for their child."'
          ],
          rightH3: 'Special circumstances',
          right: [
            'If a child is unwell on a test day, SEAG cannot change the marking. Instead, schools\' criteria usually include "Special Circumstances", claimed with evidence during the transfer application, which SEAG says begins around February 2027 and is run by the Education Authority.',
            'In SEAG\'s words, "This process is completely outside the remit of SEAG."'
          ] },
        { kind: 'source', html: 'Source: SEAG, <a class="ag-inline-link" href="https://seagni.co.uk/guidance/faqs" rel="noopener" target="_blank">FAQs</a>, read on 31 October 2026. We could not read the Education Authority\'s admissions pages for this build (the site refused automated access), so the page quotes only what SEAG says about the EA process.' }
      ]
    },
    {
      id: 'fortnight', tint: '', eyebrow: 'The last fortnight',
      h2: 'How should a P7 child prepare in the last two weeks before the transfer test?',
      lede: 'With familiar material, not new topics. On 31 October 2026 there are two weeks until Paper 1 on 14 November, and the most useful work now is two timed runs of SEAG\'s own free practice papers, short daily number practice, and calm routines for the day.',
      body: [
        { kind: 'ol', items: [
          '<strong>Use the official papers.</strong> SEAG publishes four practice papers with answer sheets, in English and in Gaeilge, plus a Parents\' Guide with answer keys revised in September 2026, all free. SEAG adds: "No, SEAG do not sell any practice papers." Anything sold under that name is someone else\'s material.',
          '<strong>One full timed paper a week.</strong> Two runs before 14 November is plenty. Afterwards, go through the maths questions the child got wrong and sort them: slip, misread, or genuinely unknown.',
          '<strong>Ten minutes of number a day.</strong> Times tables, fractions of amounts, decimals and percentages. Short, daily and finished while the child still feels good about it.',
          '<strong>Fix only what is quick to fix.</strong> Reading a scale, converting units, or answer-sheet slips can improve in days. A large topic gap is better left than crammed now.',
          '<strong>Plan the two Saturdays.</strong> SEAG notes there is "no alternative date for individual pupils who have missed one of the two Papers", so treat both days as fixed: a normal breakfast, an early arrival, nothing new the night before.'
        ] },
        { kind: 'p', mt: true, html: 'Children in P6 have more time. For them, the NI-wide page on <a class="ag-inline-link" href="/transfer-test-maths-practice-northern-ireland">transfer test maths practice</a> sets out SEAG\'s content list, the three sections of each paper and the shared hour in detail; this page does not repeat it. Families elsewhere in the UK comparing systems can see <a class="ag-inline-link" href="/11-plus-maths-tuition">11 plus maths tuition</a> for England\'s tests.' },
        { kind: 'table', mt: true, caption: 'The weeks after the test, from SEAG\'s 2026 to 2027 key dates and FAQs', head: ['When', 'What happens', 'Who runs it'], rows: [
          ['Saturday 14 November 2026', 'Paper 1', 'SEAG, at the chosen Assessment Centre'],
          ['Saturday 21 November 2026', 'Paper 2', 'SEAG'],
          ['Saturday 23 January 2027', 'Statements of Outcomes released', 'SEAG'],
          ['Until Wednesday 3 February 2027', 'Re-mark requests', 'SEAG'],
          ['From around February 2027', 'Post-primary transfer application, including any special circumstances', 'Education Authority'],
          ['September 2027', 'Year 8 entry', 'The school']
        ] }
      ]
    },
    {
      id: 'examples', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Four transfer test style maths examples, worked through',
      lede: 'Written by us at P7 level, not taken from any SEAG paper. The first three are five-option multiple choice, where ruling out wrong answers is a skill in itself; the last is free response.',
      body: [
        { kind: 'two',
          leftH3: '1. Estimate, then eliminate',
          left: [
            '<strong>Question (ours).</strong> 398 &times; 21 = ? (A) 2786 (B) 6358 (C) 8358 (D) 8538 (E) 83 580',
            '<strong>Estimate.</strong> About 400 &times; 20 = 8000, so A, B and E are far out.',
            '<strong>Last digit.</strong> 8 &times; 1 ends in 8, which C and D both do, so be exact: 398 &times; 20 = 7960, plus 398 = 8358.',
            '<strong>Answer.</strong> C. Estimating removed three options in seconds.'
          ],
          rightH3: '2. A function machine backwards',
          right: [
            '<strong>Question (ours).</strong> A machine multiplies by 4 and then subtracts 7. The output is 45. What was the input? (A) 9 (B) 11 (C) 13 (D) 15 (E) 173',
            '<strong>Undo in reverse.</strong> Add 7: 45 + 7 = 52. Divide by 4: 52 &divide; 4 = 13.',
            '<strong>Check.</strong> 13 &times; 4 = 52, and 52 &minus; 7 = 45.',
            '<strong>Answer.</strong> C. Option E is what you get by running the machine forwards on 45, a common trap.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '3. Fractions, decimals and percentages',
          left: [
            '<strong>Question (ours).</strong> Which is largest? (A) 3/5 (B) 0.58 (C) 62% (D) 0.6 (E) 7/12',
            '<strong>Make them alike.</strong> As percentages: A is 60, B is 58, C is 62, D is 60, E is a little over 58 (7 &divide; 12 = 0.583&hellip;).',
            '<strong>Answer.</strong> C. Converting everything to one form is faster than comparing pairs.'
          ],
          rightH3: '4. Free response: a measures problem',
          right: [
            '<strong>Question (ours).</strong> A jug holds 1.5 litres. Ciara pours out 4 glasses of 250 ml. How many millilitres are left?',
            '<strong>Same units.</strong> 1.5 litres is 1500 ml.',
            '<strong>Poured.</strong> 4 &times; 250 = 1000 ml.',
            '<strong>Answer.</strong> 1500 &minus; 1000 = 500 ml. In free response there are no options to check against, so the unit conversion has to be right first time.'
          ] },
        { kind: 'p', mt: true, html: '<strong>A short practice set (ours, with answers).</strong> (1) What is 15 per cent of 80? (2) A dice is rolled once. What is the probability of a number greater than 4? (3) The first four terms of a sequence are 3, 7, 11, 15. What is the 10th term? (4) A rectangle has perimeter 30 cm and length 9 cm. What is its area? (5) Round 4.648 to one decimal place. (6) A film starts at 18:40 and lasts 1 hour 35 minutes. When does it end? <strong>Answers:</strong> (1) 12; (2) 2/6, which is 1/3; (3) 39; (4) width 6 cm, so 54 square centimetres; (5) 4.6; (6) 20:15.' }
      ]
    },
    {
      id: 'classes', tint: '', eyebrow: 'Our lessons',
      h2: 'How do your online transfer test maths lessons work for Belfast families?',
      lede: 'Live, in small steps, built on the Key Stage 2 content SEAG tests, with official practice papers used for timing rather than as the syllabus. Families anywhere in the Belfast area join from home.',
      body: [
        { kind: 'ol', items: [
          '<strong>A free first lesson.</strong> A handful of number, fraction and measures questions in both formats, so the teacher can see accuracy, speed and how the child handles five options.',
          '<strong>Content first.</strong> In P6 and early P7 we work through the Key Stage 2 areas SEAG lists, slowest areas first.',
          '<strong>Format next.</strong> Multiple choice with elimination, free response with checking, and answer-sheet accuracy.',
          '<strong>Timed practice last.</strong> Official SEAG papers under the real timing in the final weeks, then calm, short sessions in the gap between the two Saturdays.',
          '<strong>After the outcome.</strong> Lessons continue into Year 8 for families who want them, with no link to any admissions decision.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Batch or single-pupil lessons?',
          left: [
            'A batch of 15 to 20 P7 children suits steady weekly practice and a sense of pace from working alongside others.',
            'One-to-one teaching helps where there is a specific gap, or a child who freezes under timing and needs to build confidence quietly.'
          ],
          rightH3: 'Promises we never make',
          right: [
            'That lessons secure any band, score or place. Bands depend on the whole cohort, and each school decides how to use them.',
            'Any connection with SEAG, GL Assessment, the Education Authority or any school. We are an independent online school.'
          ] },
        { kind: 'p', mt: true, html: 'For older children in Belfast, <a class="ag-inline-link" href="/maths-tuition-in-belfast">maths tuition in Belfast</a> covers CCEA GCSE and A level, and <a class="ag-inline-link" href="/ccea-gcse-maths-help">CCEA GCSE Maths</a> explains the GCSE itself. The wider picture is on <a class="ag-inline-link" href="/coding-and-ai-classes-in-northern-ireland">our Northern Ireland page</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four rungs from P6 to Year 8',
    lede: 'Skills a child should manage without help, listed in our teaching order.',
    table: { caption: 'Our progression for transfer test maths', head: ['Rung', 'When', 'What a child can show'], rows: [
      ['1. Number secure', 'P6', 'Tables, written methods and fraction, decimal and percentage conversions without slips'],
      ['2. Every area covered', 'P6 into P7', 'Measures, shape, data, probability and sequences all met and practised'],
      ['3. Both formats', 'Early P7', 'Elimination in multiple choice and careful checking in free response'],
      ['4. Calm on the day', 'October and November of P7', 'Official papers under timing, a set routine, and steady nerves']
    ] },
    left: { h3: 'Rung one never stops', ps: [
      'Ten minutes of number a day matters right up to the second Saturday.',
      'For puzzle-lovers there is also <a class="ag-inline-link" href="/primary-maths-challenge-practice">a national primary challenge</a> each year.'
    ] },
    right: { h3: 'The final rung takes weeks', ps: [
      'It takes weeks, not months, once the content is there.',
      'After 21 November, lessons pause or move on to Year 8 maths, as families prefer.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for P6 and P7',
    lede: 'Grouped by purpose. The free lesson sets the starting point.',
    bands: [
      { num: 'I', h3: 'Transfer test maths', sub: 'SEAG content', courses: [
        { code: 'UK / TB1 / 01', slug: '11-plus-maths-preparation-course-uk', title: '11 Plus Maths', blurb: 'Selective-test maths adapted to Key Stage 2 in Northern Ireland.' },
        { code: 'UK / TB1 / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary Maths', blurb: 'Primary maths from the beginning, placed by level.' },
        { code: 'UK / TB1 / 03', slug: 'mental-maths-mastery-kids', title: 'Mental Maths', blurb: 'Faster sums that still make sense.' }
      ] },
      { num: 'II', h3: 'Number confidence', sub: 'For slower starters', courses: [
        { code: 'UK / TB2 / 01', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'A visual route into calculation.' },
        { code: 'UK / TB2 / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'For younger brothers and sisters aged 6 to 9.' },
        { code: 'UK / TB2 / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Turning wordy questions into small, checkable steps.' }
      ] },
      { num: 'III', h3: 'Beyond the test', sub: 'For after November', courses: [
        { code: 'UK / TB3 / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle School Mathematics', blurb: 'A head start on Year 8 maths.' },
        { code: 'UK / TB3 / 02', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Making games once the papers are done.' },
        { code: 'UK / TB3 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Number ideas tested in Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'When transfer test lessons run',
    lede: T + ' The teaching team is in India; every time we offer a Belfast family is written in UK time.',
    slots: [
      { time: 'After school', l: 'A short lesson before homework.' },
      { time: 'Early evening', l: 'After clubs and sport.' },
      { time: 'Weekend morning', l: 'Saturday practice mirrors the test-day clock.' }
    ],
    cells: [
      { h3: 'SEAG content', p: 'Key Stage 2 areas from SEAG\'s list, slowest first.' },
      { h3: 'Two formats', p: 'Five-option elimination and free response, practised separately.' },
      { h3: 'Official papers', p: 'SEAG\'s four free papers for timing, never sold or copied.' },
      { h3: 'Daily number', p: 'Ten minutes of tables, fractions and percentages between lessons.' },
      { h3: 'Calm routines', p: 'Arrival, breakfast and pacing planned for both Saturdays.' },
      { h3: 'Batch or 1-on-1', p: '15 to 20 children, or one child with one teacher.' }
    ]
  },

  projectsH2: 'Made by children in our classes',
  projectsLede: 'Projects from everyday lessons, none of them marked. <a class="ag-inline-link" href="/student-labs">Student labs</a> shows more.',
  reviewsLede: 'Google reviews from parents, reproduced unchanged.',

  fees: {
    h2: 'Fees for transfer test maths in Belfast',
    lede: 'The first lesson is free. Afterwards there is a single monthly fee, lower for a group place than for 1-on-1, which starts only when a course and a weekly time are agreed. No deposit and nothing to sign.',
    free: ['Number and measures in both formats', 'A frank view with two weeks to go', 'Booked with a phone number'],
    group: ['15 to 20 P7 children', 'One teacher to the end of November', 'Official papers under timing', 'Daily number tasks'],
    one: ['One teacher, one child', 'Gaps chosen for the time left', 'Suits a nervous or late starter']
  },

  faq: {
    eyebrow: 'Transfer test questions',
    h2: 'What Belfast parents ask about the transfer test',
    items: [
      { q: 'Which transfer test do Belfast grammar schools use?', a: 'The SEAG Entrance Assessment. SEAG is open to all 63 post-primary schools in Northern Ireland that use academic selection, and 18 of those on its member list have a Belfast address.' },
      { q: 'What score do you need for a grammar school in Belfast?', a: 'No single score exists. SEAG says each school\'s Board of Governors decides whether to use the total score, the band, both or another method, and publishes its criteria during the 2026 to 2027 school year.' },
      { q: 'When is the transfer test in 2026?', a: 'SEAG\'s key dates put the first paper on Saturday 14 November 2026 and the second a week later, on Saturday 21 November. Statements of Outcomes follow on Saturday 23 January 2027.' },
      { q: 'Does the test centre my child chooses affect which school they get?', a: 'No. SEAG says there is no connection between where a pupil sits the test and the admissions process, and a child may apply to any SEAG school.' },
      { q: 'What do the transfer test bands mean?', a: 'They are cohort percentile groups. Band 1 covers percentile 60 upwards, roughly two children in five; Bands 2 to 5 each hold a tenth of the cohort; Band 6 lies below the 20th percentile.' },
      { q: 'Is the AQE or PPTC test still used?', a: 'Not as separate tests. SEAG says that for 14 years before it was formed, children sat two different assessments on four Saturdays; now one SEAG assessment over two Saturdays serves all 63 schools.' },
      { q: 'Where can I get free transfer test practice papers?', a: 'SEAG publishes four practice papers with answer sheets, in English and Gaeilge, and a Parents\' Guide with answer keys, free on its website. It does not sell any papers.' },
      { q: 'What if my child is ill on the day?', a: 'There is no alternative date. Schools\' criteria usually allow a claim for special circumstances, made with evidence during the transfer application that the Education Authority runs from around February 2027.' },
      { q: 'When are lessons?', a: T + ' Every time is quoted in UK time.' },
      { q: 'Are you connected with SEAG or any Belfast school?', a: 'No. We teach independently online and have no tie to SEAG, GL Assessment, the Education Authority or any Belfast school.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More for Northern Ireland',
    h2: 'Related pages for NI families',
    lede: 'The NI-wide test guide, and maths after transfer.',
    items: [
      { href: '/transfer-test-maths-practice-northern-ireland', label: 'Transfer test maths practice, NI', p: 'The papers, the shared hour and SEAG\'s content list.' },
      { href: '/maths-tuition-in-belfast', label: 'Maths tuition in Belfast', p: 'CCEA GCSE and A level maths for older students.' },
      { href: '/ccea-gcse-maths-help', label: 'CCEA GCSE Maths', p: 'The GCSE most Northern Ireland pupils take.' },
      { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Coding and AI in Northern Ireland', p: 'The NI system, and coding for every age.' },
      { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge', p: 'Puzzles for keen upper-primary children.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free transfer test maths lesson',
    lede: 'Send us a phone number and a teacher calls back at whatever UK time you name. With the papers this close, the lesson is practical: a few questions in both formats and a clear plan for the days that are left.',
    readFirst: 'Prefer to read first? The <a class="ag-inline-link" href="/courses/11-plus-maths-preparation-course-uk">11 Plus Maths syllabus</a> lists every topic, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson for ten-year-olds.',
    note: 'WhatsApp is the fastest way in and free from a UK phone. Our reply comes from India, on a +91 number.',
    formNote: 'No payment and no sign-up beyond this form; we send back a time.'
  },

  footer: {
    cols: [
      { h4: 'Northern Ireland', links: [
        { href: '/transfer-test-maths-practice-northern-ireland', label: 'Transfer test practice' },
        { href: '/maths-tuition-in-belfast', label: 'Maths in Belfast' },
        { href: '/ccea-gcse-maths-help', label: 'CCEA GCSE Maths' },
        { href: '/coding-and-ai-classes-in-northern-ireland', label: 'The NI system' }
      ] },
      { h4: 'Elsewhere', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Transfer test maths for Belfast, live in UK time'
  },

  personalityCss: `
.ag-root.ag-ttt .ag-hero h1 { letter-spacing: -0.018em; font-weight: 715; }
.ag-root.ag-ttt .ag-capsule { border-left-width: 7px; border-radius: 2px; }
.ag-root.ag-ttt .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-ttt .ag-table caption { text-align: left; font-weight: 655; }
.ag-root.ag-ttt .ag-table td:first-child { font-weight: 645; }
.ag-root.ag-ttt .ag-steps li { margin-bottom: 12px; line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'Northern Ireland, post-primary transfer, SEAG Entrance Assessment 2026 (for Year 8 entry September 2027): SEAG FAQs (not for profit private company of 63 selective schools; not controlled by DE or EA; Controlled, Voluntary Grammar and Integrated members; eligibility 2 July 2015 to 1 July 2016; no role in how outcomes are used; Boards of Governors decide TSAS, band, both or other; criteria published in 2026-27; test centre has no connection with admissions; EA runs admissions; TSAS 138 to 282 mean 200; Maths SAS 69 to 141 mean 100; bands by cohort percentile; Bands 2 to 5 each 10 per cent; special circumstances via EA process from around February 2027; no practice papers sold; no alternative date). SEAG What we do (around 13,000 pupils a year; 14 years of two tests on four Saturdays before SEAG; around 40,000 pupils by end of 2025; GL Assessment sets and marks). SEAG member list (our postal-town tally: Belfast 18, Newry 4, Derry or Londonderry 4, Lisburn 2). SEAG key dates (14 and 21 November 2026; outcomes 23 January 2027; re-mark to 3 February 2027). SEAG practice materials (four papers, English and Gaeilge, Parents\' Guide revised September 2026).',
    localProject: 'The test is identical across Northern Ireland; what the score means is decided school by school, and Belfast has the densest cluster of SEAG schools. A Belfast-area transfer test door: our postal-town tally of SEAG member schools (Belfast, Lisburn, Newry, Derry or Londonderry) without naming any school, SEAG\'s statement that governors decide how outcomes are used, the TSAS and band definitions, how to read a school\'s criteria and the special circumstances route, a two-week plan written for 31 October 2026, the post-test timeline to Year 8, four original worked examples (estimate and eliminate, a function machine in reverse, comparing fraction, decimal and percentage forms, a millilitre free response) and an original practice set. Lesson family: an area transfer test door.',
    requiredMentions: [
      'it has no role or involvement in decisions as to how each SEAG school uses those Outcomes',
      'entirely a matter for the Board of Governors of each SEAG school',
      'There is no connection between where a pupil sits the SEAG Entrance Assessment and the Post Primary Admissions Process.',
      'two different types of Entrance Assessment on four consecutive Saturdays to cover all 63 potential schools',
      'Bands 2-5 will each contain 10% of the total cohort',
      'It is up to the Parent/Guardian to read and familiarise themselves with the Year 8 Post Primary Schools Admissions Criteria for any schools which they are considering for their child.',
      'This process is completely outside the remit of SEAG.',
      'No, SEAG do not sell any practice papers.',
      'Belfast-address SEAG schools'
    ],
    sources: [
      { claim: 'SEAG FAQs: SEAG status and membership, eligibility, use of outcomes by governors, test centre and admissions, TSAS, SAS and bands, special circumstances, practice papers, no alternative date.', url: 'https://seagni.co.uk/guidance/faqs' },
      { claim: 'SEAG What we do: around 13,000 pupils a year, the previous two-test arrangements, around 40,000 pupils by end of 2025.', url: 'https://seagni.co.uk/about-us/what-we-do' },
      { claim: 'SEAG Member Schools: the 63 Assessment Centres and their addresses (our postal-town tally).', url: 'https://seagni.co.uk/about-us/member-schools' },
      { claim: 'SEAG Key dates 2026 to 2027: papers, outcomes, re-mark window.', url: 'https://seagni.co.uk/guidance/key-dates' },
      { claim: 'SEAG Practice materials: four free practice papers and the Parents\' Guide.', url: 'https://seagni.co.uk/guidance/practice-materials' }
    ],
    rejectedClaims: [
      'Education Authority admissions pages and dates: eani.org.uk returned 403; not retried, and only SEAG\'s description of the EA process is used.',
      'Any school\'s name, cut-off score or past admissions figures: not given, under the rule against naming schools and because SEAG publishes none.',
      'Reproducing SEAG practice questions: never; the page links to the free papers and uses only our own examples.',
      'That marks are lost for wrong answers: SEAG documents do not say so, and this page makes no claim about it.',
      'Any promise of a band, score or place: declined.'
    ]
  }
};
