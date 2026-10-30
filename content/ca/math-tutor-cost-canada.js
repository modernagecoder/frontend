'use strict';
// How much a math tutor costs in Canada (ag- cost door; Canada cluster Plan 2, row 83).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md (row 83, C19); brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Owner 2026-10-24 (CAD live): a cost page may print other providers' published fees, as published, in Canadian dollars,
// only inside <span data-market-price data-no-price-swap>$N CAD</span> (marketPrices: true). Our own fees are data-price anchors.
// Sources, fetched raw with curl -sL -A "Mozilla/5.0" on 31 October 2026 (copies and SOURCES.txt in
// keyword-research-2026-09/ca/src-pilots/math-tutor-cost-canada/):
//  - TVO Learn Mathify one-pager (TVO's own PDF, outreach.tvolearn.com/wp-content/uploads/2025/09/TVO-Learn-Mathify_Digital-One-Pager.pdf):
//    "Grade 4-12 students in Ontario"; "FREE 1:1 on demand math tutoring with Ontario Certified Math Teachers"; "recorded sessions,
//    and ability to choose preferred tutors"; "Monday to Friday: 9am - 9pm ET"; "Saturday and Sunday: 3pm - 9pm ET"; "Students require an OEN."
//    mathify.tvolearn.com itself returned 403, so we stopped there.
//  - Sault Ste. Marie Public Library, ssmpl.ca/kids/homework-help/: "free one-on-one, online afterschool math tutoring. Transform where
//    and how Grade 4-12 students in Ontario learn math."
//  - A TDSB secondary school resources page (school not named on our page): "Make sure you have your OEN (Ontario Education Number) to register."
//  - Alloprof, alloprof.qc.ca/en/pages/about-us: "Since 1996, Alloprof has been developing professional services and digital academic
//    support resources and making them available free of charge to all Quebec students and their parents."; "over 200 employees, including teachers".
//  - University of Calgary Students' Union, su.ucalgary.ca/?p=20371: "Rates for a Basic Tutor": by education "Undergraduate Student:
//    $15 – $25 / hour", "Master’s Student: $20 – $30 / hour", "Doctoral Student: $25 – $35 / hour"; by subject "Elementary School-level:
//    $8 – $15 / hour", "High School-level: $10 – $20 / hour", "University-level: $20 – $35 / hour"; "The tutor has the ability to choose
//    the price of their tutorial."; "There is often room to negotiate"; tutors "are not employees, contractors or agents".
//  - University of Alberta Students' Union Tutor Registry, www2.su.ualberta.ca/services/infolink/tutor/: "There are currently 825 active
//    tutors in our database."; profiles show "hourly rate"; tutors "are not employees of the U of A Students’ Union or the University of
//    Alberta". High School Math listing (browse/239): 238 profiles, 192 with a numeric "Rate: $" (46 read "$None"); lowest $15.00 (3),
//    highest $80.00 (2), $30.00 on 41 profiles. The counts and the middle value (30) are ours. No tutor named.
//  - TutorLyft, tutorlyft.com: "Each tutor sets their own rate, and you’ll see it on their profile before you book. Most of our tutors
//    charge between $40 and $75 an hour."
//  - Prep Academy Tutors, prepacademytutors.com: "we do not have one “standard rate” for tutoring services. Instead, hourly tutoring prices
//    have a range, based on teacher qualifications, experience and the amount of time the tutor has been with Prep Academy."; "you never
//    pre-pay for our tuition services".
//  - StudyPug Canada pricing, studypug.com/ca/pricing (self-paced lessons, not tutoring): "Monthly C$17.99 a month"; "C$95 every 6 months";
//    "C$145 a year"; "Curriculum-aligned lessons from Canadian certified teachers".
//  - Sylvan Learning pricing (US site): "pricing varies by location"; its figures carry no currency and are not printed.
//  - Job Bank, Tutor - Secondary School Subjects (NOC 43109), jobbank.gc.ca/marketreport/wages-occupation/24624/{ca,ON,BC,AB}: "These wages
//    were updated on November 19, 2025."; low / median / high per hour: Canada 15.00 20.00 31.50; Ontario 17.95 20.00 35.00; Toronto Region
//    17.95 20.62 32.53; British Columbia 18.25 21.67 33.50; Lower Mainland-Southwest Region 18.25 20.00 30.77; Alberta 15.57 21.16 34.07;
//    Calgary Region 15.72 21.75 32.48; Edmonton Region 16.41 22.02 35.30; Quebec 16.60 20.00 28.50; non-wage benefit "Canada: 34.9%".
//  - Blocked (403 or bot wall, not retried): mathnasium.ca, oxfordlearning.com, kumon.com/ca-en, tutordoctor.ca, mathify.tvolearn.com,
//    vpl.ca, surreylibraries.ca, superprof.ca, math.toronto.edu, UBC physsoc. No figure from any of them is printed or guessed.
// Our own material, labelled on the page: per-hour anchors (monthly fee / eight one-hour classes, data-price-derive="perHour"); the registry
// counts; the six-step real-hourly-cost method; the worked example (three invented quotes in plain numbers, no currency); the attention-minutes
// table; the four-tier ladder.
// Lesson family: unit rates (turn every quote into the same unit before comparing).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

// Other providers' published figures, as found, in Canadian dollars. Never converted by the pricing script.
const M = s => `<span data-market-price data-no-price-swap>${s} CAD</span>`;
// Our own fees: anchors only, rewritten for each visitor's region.
const CUR = ' <span class="fee-cur" data-price-currency>CAD</span>';
const G = '<span data-price="maths.canada.group">$140</span>' + CUR;
const P = '<span data-price="maths.canada.personal">$210</span>' + CUR;
const GH = '<span data-price="maths.canada.group" data-price-derive="perHour">$17.50</span>' + CUR;
const PH = '<span data-price="maths.canada.personal" data-price-derive="perHour">$26.25</span>' + CUR;

const L = (href, text) => `<a class="ag-inline-link" href="${href}" rel="noopener" target="_blank">${text}</a>`;
const SRC_TVO = L('https://outreach.tvolearn.com/wp-content/uploads/2025/09/TVO-Learn-Mathify_Digital-One-Pager.pdf', 'TVO Learn Mathify one-pager');
const SRC_ALLO = L('https://www.alloprof.qc.ca/en/pages/about-us', 'Alloprof, About us');
const SRC_UC = L('https://su.ucalgary.ca/?p=20371', 'University of Calgary Students&rsquo; Union, Tutors');
const SRC_UA = L('https://www2.su.ualberta.ca/services/infolink/tutor/registry/browse/239/', 'University of Alberta Students&rsquo; Union Tutor Registry, High School Math');
const SRC_TL = L('https://www.tutorlyft.com/', 'TutorLyft');
const SRC_PA = L('https://www.prepacademytutors.com/', 'Prep Academy Tutors');
const SRC_SP = L('https://www.studypug.com/ca/pricing', 'StudyPug Canada pricing');
const SRC_JB = L('https://www.jobbank.gc.ca/marketreport/wages-occupation/24624/ca', 'Job Bank, Tutor - Secondary School Subjects');

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'MATH TUTOR COST', blurb: 'What math tutoring costs in Canada, from free provincial services to student registries and tutoring firms, with a method for finding the real hourly price.' },
  slug: 'math-tutor-cost-canada',
  code: 'mtca',
  accent: '#6B4960',
  accentRationale: 'Math tutor cost, Canada: a muted plum, #6B4960, allocated for this row; at least 6 RGB units from every site accent and 14 from every other Canada accent; contrast 7.21 on the paper #FBF8F2 and 6.20 on the deepest tint #EDE7DA',
  pageType: 'market',
  market: CA,
  marketPrices: true,
  priceSubject: 'maths',
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'online-math-tutor-canada', name: 'Online math tutor' }],
  routeLabel: 'Math tutor cost in Canada',
  title: 'Math Tutor Cost in Canada: Hourly Rates, Free Options, Real Price',
  description: 'What a math tutor costs per hour in Canada: free provincial services, university registry rates, tutoring firms, tutor wages, and how to find the real price.',
  ogDescription: 'Published math tutoring figures from Ontario, Alberta and Quebec, checked 31 October 2026: free services, student registries, a marketplace, and what employed tutors are paid. Plus a six-step method for the real hourly cost.',
  twitterDescription: 'What math tutoring costs in Canada, from free services to private tutors, with the sources named.',
  pageName: 'Math Tutor Cost in Canada',
  webPageDescription: 'A guide for Canadian parents and students to what math tutoring costs per hour, built from published rates and Government of Canada wage data, with a method for comparing quotes and a worked example.',
  courseDescription: 'Live online math classes for Canadian students from the early grades to Grade 12, taught in a batch of 15 to 20 or one to one, eight one-hour classes a month.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Online math tutor', href: '/online-math-tutor-canada' }],
  crumbLabel: 'Math tutor cost',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#costs', label: 'Hourly costs' },
    { href: '#free', label: 'Free options' },
    { href: '#wages', label: 'Tutor wages' },
    { href: '#steps', label: 'Real hourly cost' },
    { href: '#worked', label: 'Worked example' }
  ],
  eyebrow: 'Canada &middot; Math tutoring &middot; What it costs',
  h1: 'How much a math tutor costs in Canada',
  lede: 'Price questions about tutoring usually get one vague answer: it depends. This page replaces that with figures that someone actually published, each one named and dated, from Ontario, Alberta and Quebec. It covers the free services first, then student tutors, tutoring firms, what tutors are paid, and a method for turning any quote into a true hourly figure.',
  secondaryCta: { href: '#costs', label: 'See the cost table' },
  wa: 'Hello Modern Age Coders, I am comparing math tutoring options in Canada for my child and would like to understand your live online classes. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; Every figure on this page names its source',
  spec: [
    ['Free options', 'Mathify (Ontario), Alloprof (Quebec)'],
    ['Student tutors', 'Registry rates, set by each tutor'],
    ['Firms', 'Many do not publish a rate'],
    ['Tutor wages', 'Job Bank, updated November 2025'],
    ['Checked', '31 October 2026'],
    ['Our formats', 'Batch of 15 to 20, or 1-on-1'],
    ['Our classes', 'Eight live hours a month'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'A math tutor in Canada costs nothing through TVO Learn Mathify (Ontario) or Alloprof (Quebec); student tutors on one Alberta registry list ' + M('$15 to $80') + ' an hour; one marketplace says most of its tutors charge ' + M('$40 to $75') + '. Grade, course (MHF4U, Math 30-1), credentials and format move the price. Modern Age Coders teaches live online math: ' + G + ' a month in a batch, ' + P + ' one to one.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three math courses Canadian families start with',
    lede: 'All three are taught live on video by one regular teacher, either to a group of fifteen to twenty or to your child alone.',
    items: [
      { course: 'complete-high-school-mathematics-mastery', code: 'MTCA / 01', title: 'High school math, Grades 9 to 12', note: 'Algebra through to the edge of calculus, paced to whichever province your teen studies in.' },
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', code: 'MTCA / 02', title: 'Ontario Grade 12 University Math', note: 'Advanced Functions and Calculus and Vectors, the two courses families most often pay a tutor for.' },
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', code: 'MTCA / 03', title: 'Pre-calculus 12 and Math 30-1', note: 'For British Columbia and Alberta students facing the senior course that admission offices read first.' }
    ]
  },

  sections: [
    {
      id: 'costs', tint: 'tint', eyebrow: 'The figures',
      h2: 'What math tutoring costs per hour in Canada, by option',
      lede: 'We read each provider&rsquo;s own page on 31 October 2026 and copied the figure exactly as printed. Where a provider prints no figure, the table says so rather than filling the gap. Our own rows sit at the bottom, worked out per hour of live teaching so they line up with the rest.',
      body: [
        { kind: 'table', caption: 'Math tutoring in Canada: published figures by option, as printed on each provider&rsquo;s site (checked 31 October 2026)', head: ['Option', 'Figure as published', 'Unit', 'What the figure covers'], rows: [
          ['TVO Learn Mathify, Ontario', 'Free', 'On demand', 'One-to-one online help with Ontario Certified Teachers for Grade 4 to 12 students in Ontario; an OEN is needed to register'],
          ['Alloprof, Quebec', 'Free of charge', 'Per question or session', 'Academic support for all Quebec students and their parents, offered since 1996'],
          ['University of Calgary Students&rsquo; Union registry, guideline for high school level', M('$10 to $20'), 'Per hour', 'A suggested band; each registry tutor sets their own price'],
          ['Same registry, guideline for an undergraduate tutor', M('$15 to $25'), 'Per hour', 'Rate by the tutor&rsquo;s own education, not by the subject'],
          ['Same registry, guideline for a doctoral student tutor', M('$25 to $35'), 'Per hour', 'The top of the registry&rsquo;s published bands'],
          ['University of Alberta Students&rsquo; Union registry, High School Math listing', M('$15 to $80'), 'Per hour, as each tutor lists it', 'Lowest and highest of 192 stated rates; 41 profiles list ' + M('$30') + ' (our count)'],
          ['TutorLyft, a Canadian tutor marketplace', M('$40 to $75'), 'Per hour', 'The range the firm says most of its tutors charge'],
          ['Prep Academy Tutors', 'No standard rate published', 'Hourly, invoiced monthly', 'Varies with the teacher&rsquo;s qualifications and experience; ask the local office'],
          ['StudyPug Canada, self-paced lessons', M('$17.99'), 'Per month, monthly plan', 'Video lessons and practice, not a live tutor'],
          ['Modern Age Coders, live online batch of 15 to 20', GH, 'Per hour of live class (ours: monthly fee &divide; 8)', G + ' a month for eight one-hour classes'],
          ['Modern Age Coders, live online 1-on-1', PH, 'Per hour of live class (ours: monthly fee &divide; 8)', P + ' a month for eight one-hour classes']
        ] },
        { kind: 'source', html: 'Sources, read 31 October 2026: ' + SRC_TVO + '; ' + SRC_ALLO + '; ' + SRC_UC + '; ' + SRC_UA + '; ' + SRC_TL + ' (home page questions); ' + SRC_PA + ' (home page questions); ' + SRC_SP + '. The Calgary page prints no currency sign beside its bands; it is a Calgary students&rsquo; union, so we treat them as local figures. The Alberta counts are ours, made from the listing that day; tutors edit their profiles, so the listing changes. None of these organisations has any connection with us.' },
        { kind: 'two', mt: true,
          leftH3: 'How to read the spread',
          left: [
            'The table runs from nothing at all to four times the low end of the private market, and every row is honest. The difference is mostly about who is teaching and how much of the hour belongs to your child. A free provincial service answers the question in front of the student tonight. A registry tutor is usually a university student who did well in the course. A firm adds matching, scheduling and a manager to call when something goes wrong.',
            'The rows also price different things. Mathify and Alloprof are help when a student is stuck. A tutor or a class is a plan that runs week after week. A self-paced subscription is a library of lessons with nobody watching the work. Comparing their figures directly is like comparing a bus fare with a car lease.'
          ],
          rightH3: 'Why the registry range is so wide',
          right: [
            'On the Alberta listing, the cheapest high school math tutors list ' + M('$15') + ' and the dearest ' + M('$80') + ' an hour. Of the 238 profiles under High School Math that day, 46 gave no figure at all, and the most common stated rate, on 41 profiles, was ' + M('$30') + '. The middle of the 192 numbers also fell at that figure. Those counts are ours, made from the page as it stood.',
            'The Calgary students&rsquo; union takes a different approach and publishes a guideline instead of a list. Its high school band is lower than most Alberta listings, which tells you something useful: a guideline is a floor for negotiation, not a quote. Calgary says so itself, noting that the tutor chooses the price and that there is often room to negotiate.'
          ] }
      ]
    },
    {
      id: 'free', tint: 'deep', eyebrow: 'Before you pay anything',
      h2: 'Free math help in Canada, and what free covers',
      lede: 'Two provinces fund a free service large enough to matter. If your child lives in Ontario or Quebec, try these first: a week of free help tells you a great deal about what kind of paid help, if any, is worth buying.',
      body: [
        { kind: 'two',
          leftH3: 'Ontario: TVO Learn Mathify',
          left: [
            'TVO&rsquo;s own one-pager describes &ldquo;FREE 1:1 on demand math tutoring with Ontario Certified Math Teachers&rdquo; for &ldquo;Grade 4-12 students in Ontario&rdquo;. Sessions happen on a shared whiteboard with audio and text, and the leaflet lists &ldquo;recorded sessions, and ability to choose preferred tutors&rdquo;.',
            'The hours printed on it are &ldquo;Monday to Friday: 9am - 9pm ET&rdquo; and &ldquo;Saturday and Sunday: 3pm - 9pm ET&rdquo;. Registration has one condition worth knowing before a crisis evening: &ldquo;Students require an OEN.&rdquo; That is the Ontario Education Number on the report card, and a Toronto District School Board secondary school reminds its students that it is not the board student number.'
          ],
          rightH3: 'Quebec: Alloprof',
          right: [
            'Alloprof&rsquo;s About page says that &ldquo;Since 1996, Alloprof has been developing professional services and digital academic support resources and making them available free of charge to all Quebec students and their parents.&rdquo; Its team, the same page says, numbers &ldquo;over 200 employees, including teachers&rdquo;.',
            'Its site lists help from Grade 1 to Secondary 5, which covers the whole of Quebec&rsquo;s school math, including the Secondary 4 and 5 sequences families worry about most. An English version of the site exists; check which services run in English before relying on it.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'What free help does well',
          left: [
            'On-demand help is excellent at one thing: getting a student unstuck on a specific question while the homework is still open. A certified teacher on a whiteboard for fifteen minutes can save an evening of frustration, and it costs the family nothing but the time to log in.',
            'Free help also gives you evidence. If your child uses Mathify three times in a week on the same kind of question, you have learned which idea is shaky. Bring that list to any paid tutor and the first session starts in the right place.'
          ],
          rightH3: 'What free help is not designed to do',
          right: [
            'An on-demand service sees a different student every few minutes. It cannot follow one child from September to June, notice that fractions are the real problem behind a Grade 9 algebra mark, or build a plan for an MHF4U final. Nobody on the other end knows what last week looked like.',
            'Outside Ontario and Quebec, we could not confirm a province-wide free one-to-one math service on official pages that would load for us on 31 October 2026. Ask your school about extra-help periods and your public library about homework help; many libraries list it, and the details differ by city.'
          ] },
        { kind: 'source', html: 'Sources, read 31 October 2026: ' + SRC_TVO + ' (TVO&rsquo;s own PDF; the Mathify site itself refused our automated request, so we read TVO&rsquo;s leaflet instead); ' + L('https://ssmpl.ca/kids/homework-help/', 'Sault Ste. Marie Public Library, Homework Help') + ', which describes Mathify as &ldquo;free one-on-one, online afterschool math tutoring&rdquo;; ' + SRC_ALLO + '. Check eligibility on each service&rsquo;s own site before relying on it.' }
      ]
    },
    {
      id: 'wages', tint: 'tint', eyebrow: 'What tutors are paid',
      h2: 'Tutor wages in Canada, from Job Bank',
      lede: 'A family pays a fee; an employed tutor earns a wage. The Government of Canada&rsquo;s Job Bank publishes wages for the job title &ldquo;tutor - secondary school subjects&rdquo;, which sits in occupation group NOC 43109. The figures below are per hour, as printed, and were last updated on November 19, 2025.',
      body: [
        { kind: 'table', caption: 'Hourly wages for &ldquo;Tutor - Secondary School Subjects&rdquo; (NOC 43109), Job Bank, updated November 19, 2025 (read 31 October 2026)', head: ['Area', 'Low', 'Median', 'High', 'Reference period'], rows: [
          ['Canada', M('$15.00'), M('$20.00'), M('$31.50'), '2023 to 2024, Labour Force Survey'],
          ['Ontario', M('$17.95'), M('$20.00'), M('$35.00'), '2023 to 2024, Labour Force Survey'],
          ['Toronto Region', M('$17.95'), M('$20.62'), M('$32.53'), '2024, Small Area Estimation'],
          ['British Columbia', M('$18.25'), M('$21.67'), M('$33.50'), '2023 to 2024, Labour Force Survey'],
          ['Lower Mainland and Southwest Region, BC', M('$18.25'), M('$20.00'), M('$30.77'), '2023 to 2024, Labour Force Survey'],
          ['Alberta', M('$15.57'), M('$21.16'), M('$34.07'), '2024, Small Area Estimation'],
          ['Calgary Region', M('$15.72'), M('$21.75'), M('$32.48'), '2024, Small Area Estimation'],
          ['Edmonton Region', M('$16.41'), M('$22.02'), M('$35.30'), '2024, Small Area Estimation'],
          ['Quebec', M('$16.60'), M('$20.00'), M('$28.50'), '2023 to 2024, Labour Force Survey']
        ] },
        { kind: 'source', html: 'Source: ' + SRC_JB + ', national page and the Ontario, British Columbia and Alberta pages, read 31 October 2026. Job Bank credits the figures to Statistics Canada&rsquo;s Labour Force Survey or its Small Area Estimation model, as marked. The same page reports that 34.9% of workers in NOC 43109 across Canada receive at least one non-wage benefit.' },
        { kind: 'two', mt: true,
          leftH3: 'A wage is not a fee',
          left: [
            'These are the hourly earnings of people employed as tutors, not the price a parent pays. When a centre or an agency employs the tutor, the fee also has to cover the room, the manager, the scheduling, the advertising and the hours the tutor is paid but not teaching. That is why a firm&rsquo;s hourly price normally sits well above the wage of the person in the chair.',
            'A self-employed tutor keeps the whole fee, but carries the unpaid time: travel, preparation, marking and the empty slot when a family cancels. So the gap between the wage table and the marketplace range is not profit alone. Much of it is the cost of an hour of teaching that someone has to absorb.'
          ],
          rightH3: 'Why the median barely moves between cities',
          right: [
            'Searches like &ldquo;math tutor Toronto price&rdquo; and &ldquo;private tutor cost Vancouver&rdquo; assume the big cities cost far more. On the wage side, Job Bank&rsquo;s medians sit close together: the Toronto Region median is ' + M('$20.62') + ' an hour, the Lower Mainland and Southwest region of BC ' + M('$20.00') + ', the Edmonton Region ' + M('$22.02') + '. The gap between low and high inside one city is far wider than the gap between cities.',
            'City still matters for in-person tutoring, because rent and travel time differ, but the person teaching is paid on a similar scale across the country. When a quote in one city is double another, ask what is different about the teacher, the format or the extras, rather than putting it down to the postcode.'
          ] }
      ]
    },
    {
      id: 'drivers', tint: 'deep', eyebrow: 'What moves the price',
      h2: 'Five things that push a math tutor&rsquo;s price up or down',
      lede: 'Every figure in the first table is shaped by the same handful of choices. Knowing which one is driving a quote lets you decide whether it is worth paying for.',
      body: [
        { kind: 'table', caption: 'What moves the hourly price of math tutoring, with the published evidence (sources as above; the reading in the last column is ours)', head: ['Factor', 'What a published source shows', 'What it means when you compare'], rows: [
          ['Grade and level', 'The Calgary guideline climbs from ' + M('$8 to $15') + ' at elementary level to ' + M('$10 to $20') + ' for high school and ' + M('$20 to $35') + ' at university level', 'Expect each step up in level to narrow the pool of tutors who can teach it well'],
          ['The specific course', 'Senior courses such as MHF4U, MCV4U, Math 30-1 and Pre-calculus 12 feed university admission', 'A tutor who knows the provincial outline for that course is scarcer than a general helper, and charges like it'],
          ['The tutor&rsquo;s training', 'Calgary sets bands by the tutor&rsquo;s own education; Prep Academy prices by &ldquo;teacher qualifications, experience&rdquo;', 'A certified teacher and a strong first-year student can both help; they solve different problems'],
          ['Format', 'Mathify is one to one and on demand; StudyPug is self-paced with no live teacher', 'One-to-one, a group class and recorded lessons are three products with three price levels'],
          ['Where the hour happens', 'Job Bank medians are close across regions; travel only exists in person', 'For in-home tutoring, the tutor&rsquo;s travel time is part of what you are paying for']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Course codes and exam seasons',
          left: [
            'Families do not usually search for a tutor in October of Grade 9. They search the week after an Advanced Functions unit test, in the run-up to the Alberta Math 30-1 diploma exam, or when a Quebec Secondary 5 student is choosing between sequences. Demand bunches around those moments, and so does the tutor&rsquo;s calendar.',
            'If your child is heading into a senior course, booking help at the start of the semester is cheaper in every sense. A tutor found in September can work at a normal pace; one found the week before a final has to compress a term into a few sessions, and the family pays for every one of them.'
          ],
          rightH3: 'Credentials you can check',
          right: [
            'TVO describes Mathify&rsquo;s tutors as Ontario Certified Teachers, which is the standard a public service can set. For a private tutor, ask what training they have and how many students they have taught in the exact course. A student tutor who scored well in MCV4U last year may explain it more clearly than someone who has not touched calculus in a decade.',
            'University registries do not vet teaching quality in the way an employer might. Alberta&rsquo;s registry lists graduates of its own tutor training program, while Calgary&rsquo;s states plainly that registry tutors are not its employees, contractors or agents. Both are honest about what a listing is: an introduction, not a guarantee.'
          ] }
      ]
    },
    {
      id: 'steps', tint: 'tint', eyebrow: 'A method, ours',
      h2: 'How to work out a tutor&rsquo;s real hourly cost',
      lede: 'Quotes arrive in different units: per session, per hour, per month, per term, sometimes with a one-off fee in front. These six steps turn any of them into one comparable figure. The method is ours; it is the unit-rate idea from Grade 7 math, applied to a family decision.',
      body: [
        { kind: 'ol', items: [
          '<b>Write down the unit of the quote.</b> Is the figure for a session, an hour, a month or a package? A &ldquo;session&rdquo; may be 45 minutes, 60 or 90. Ask, and write the length in minutes beside the figure.',
          '<b>List every one-off charge.</b> Assessment, registration, materials, a deposit. Ask for the full fee schedule in writing before the first session, not after it.',
          '<b>Decide how long you expect to stay.</b> Choose a realistic number of weeks, such as one school term. Spread the one-off charges across that period rather than ignoring them.',
          '<b>Total the cost for the period.</b> Session fee times number of sessions, plus the one-off charges. This total is your own calculation for your own plan, not a published price.',
          '<b>Total the live teaching minutes.</b> Session length times number of sessions. Leave out anything that is not a teacher working with your child: travel, setup, the minutes spent waiting for a login to work.',
          '<b>Divide the cost by the hours.</b> Cost for the period divided by teaching minutes, times 60, gives the real hourly figure. For a group, also divide the teaching minutes by the number of students to see how much attention each child can expect.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What to ask before you agree',
          left: [
            'What happens if we cancel the day before? Is there a minimum number of sessions or months? Who is the teacher, and will it be the same person each week? How will you report progress, and how often? A good tutor or firm answers these in one email.',
            'Prep Academy, for one, states on its own site that families &ldquo;never pre-pay&rdquo; and are invoiced at the end of each month for the hours attended. Billing style is a fair thing to compare: paying in arrears, paying monthly ahead, and buying a package all carry different risks if the fit turns out to be wrong.'
          ],
          rightH3: 'Why per hour is still not the whole story',
          right: [
            'Two tutors with the same hourly figure can deliver very different value. One spends the hour working last night&rsquo;s homework for the student; another makes the student do the thinking and finds the gap underneath. The second hour is worth more, and no calculator will show it.',
            'So use the real hourly figure to rule options in or out, then judge what remains on teaching. Ask for a trial session and watch who holds the pencil. If the tutor talks for most of it, the student is paying to watch someone else do math.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked example, ours',
      h2: 'A worked example: three quotes for a Grade 12 student',
      lede: 'This example is ours and every number in it is invented. Money is written as plain numbers with no currency, so the arithmetic is the point, not the prices. Imagine an Ontario student taking MHF4U who wants help once a week for a ten-week stretch before the final.',
      body: [
        { kind: 'p', html: '<b>The three quotes (invented).</b> Quote A charges 48 per 45-minute session, plus a one-off assessment of 120. Quote B charges 55 per 60-minute session, with nothing else. Quote C is a monthly plan of 150 for four 60-minute sessions, sold in whole months, so ten weeks means paying for three months and attending ten of the twelve sessions.' },
        { kind: 'ol', items: [
          '<b>Units first.</b> A is per 45 minutes, B per 60 minutes, C per month of four sessions. Nothing can be compared yet.',
          '<b>One-off charges.</b> Only A has one: the assessment of 120. It belongs inside the total.',
          '<b>The period.</b> Ten weeks, one session a week, so ten sessions for A and B. For C, ten weeks spans three billed months.',
          '<b>Totals for the period.</b> A: 10 &times; 48 + 120 = 600. B: 10 &times; 55 = 550. C: 3 &times; 150 = 450.',
          '<b>Teaching hours.</b> A: 10 &times; 45 minutes = 450 minutes, which is 7.5 hours. B: 10 &times; 60 = 600 minutes, 10 hours. C: the student attends 10 sessions of 60 minutes, so 10 hours, although 12 were paid for.',
          '<b>Real hourly figure.</b> A: 600 &divide; 7.5 = 80. B: 550 &divide; 10 = 55. C: 450 &divide; 10 = 45, or 37.5 if all twelve paid sessions are used.'
        ] },
        { kind: 'table', mt: true, caption: 'The three invented quotes, converted to the same unit (ours; plain numbers, no currency)', head: ['Quote', 'Headline figure', 'Total for 10 weeks', 'Hours taught', 'Real cost per hour'], numCols: [2, 3, 4], rows: [
          ['A', '48 a session', '600', '7.5', '80'],
          ['B', '55 a session', '550', '10', '55'],
          ['C', '150 a month', '450', '10 (12 if every paid session is used)', '45 (37.5 with all 12)']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the example shows',
          left: [
            'Quote A looked cheapest per session and turned out dearest per hour. Two things did it: the shorter session and the assessment charge. Neither is unfair, but neither is visible in the headline figure, which is why step one and step two come before any division.',
            'Quote C looked like the largest number on the page and is the lowest per hour, provided the family actually uses the sessions it buys. A plan sold in whole months rewards steady attendance and penalises a family that drifts. That is worth knowing about yourselves before signing.'
          ],
          rightH3: 'Try it with your own quotes',
          right: [
            'Take the quotes you have, apply the same six steps, and set out a table like the one above. Then add one more column that no calculation fills in: what each tutor said they would do in the first session. The figure in the last column decides which options are affordable; that extra column decides which one to choose.',
            'A version of this is a fair Grade 7 or 8 practice problem, too. Ask your child to work out the three hourly figures without looking at our answers. Unit rates are on every provincial curriculum, and a real decision makes them stick.'
          ] }
      ]
    },
    {
      id: 'centres', tint: 'tint', eyebrow: 'Centres and firms',
      h2: 'Tutoring centres and firms: what is published and what is not',
      lede: 'Searches such as &ldquo;Mathnasium prices Canada&rdquo; are common, so we tried to read the large brands&rsquo; own Canadian pages on 31 October 2026. Here is exactly what we found, without guesses or figures from third-party reports.',
      body: [
        { kind: 'table', caption: 'What tutoring centres and firms showed on their own sites (checked 31 October 2026)', head: ['Provider', 'What we could read', 'Fee figure printed here'], rows: [
          ['Mathnasium, Kumon, Oxford Learning, Tutor Doctor', 'Their Canadian sites refused our automated request', 'None: we did not see one'],
          ['Sylvan Learning', 'The main pricing page is for the United States and says &ldquo;pricing varies by location&rdquo;', 'None: no Canadian figure'],
          ['Prep Academy Tutors', 'No &ldquo;standard rate&rdquo;; hourly prices &ldquo;have a range&rdquo; set by teacher qualifications, experience and time with the firm', 'None: the firm asks families to contact a local director'],
          ['TutorLyft', '&ldquo;Each tutor sets their own rate&rdquo;, shown on each profile before booking', M('$40 to $75') + ' an hour for most of its tutors'],
          ['StudyPug Canada', 'Self-paced lessons from &ldquo;Canadian certified teachers&rdquo;, with plan prices on the page', M('$17.99') + ' monthly; ' + M('$95') + ' every 6 months; ' + M('$145') + ' a year']
        ] },
        { kind: 'source', html: 'Sources, read 31 October 2026: ' + L('https://www.sylvanlearning.com/pricing', 'Sylvan Learning, pricing') + '; ' + SRC_PA + '; ' + SRC_TL + '; ' + SRC_SP + '. A site that refused our request may well publish a price; we simply could not read it, and we do not quote figures from articles about a brand. Ask the local centre for its fee schedule in writing.' },
        { kind: 'two', mt: true,
          leftH3: 'Why many centres do not print a price',
          left: [
            'Where centres are locally run, as Sylvan&rsquo;s own page explains for its locations, one national figure cannot be true in every city, so the website sends families to a local centre or an assessment instead. That is a reasonable reason, but it does mean the family learns the price late, often after an assessment visit.',
            'When you do get a quote, run it through the six steps. Ask how long each visit lasts, how many students one instructor supervises at a time, and whether there is a minimum term. Those three answers turn a monthly figure into something you can compare with a private tutor.'
          ],
          rightH3: 'Questions specific to centres',
          right: [
            'Does the child work on the school course, or on the centre&rsquo;s own sequence? Some centres follow their own curriculum, which can be good for foundations and less helpful the week before an MHF4U test. Ask which it is.',
            'How many students share one instructor? A centre session may be two hours long with one adult moving between several students. That can be good value per hour of practice and less so per minute of teaching. Both measures are worth having before you decide.'
          ] }
      ]
    },
    {
      id: 'ours', tint: '', eyebrow: 'Our classes',
      h2: 'What Modern Age Coders charges, and what the hour contains',
      lede: 'We teach live online math to students across Canada, from the early grades to Grade 12, with a regular teacher who follows your child&rsquo;s own provincial course. The fee is printed before any call, and it shows in your own currency.',
      body: [
        { kind: 'two',
          leftH3: 'Two formats, one teacher each week',
          left: [
            'In a batch, fifteen to twenty students learn together at a fixed time with the same teacher every week, for ' + G + ' a month. One to one, your child works alone with a teacher at times you choose, for ' + P + ' a month. Both run eight live one-hour classes a month, which works out at ' + GH + ' and ' + PH + ' per hour of teaching, by our own division.',
            'There is no assessment charge, no registration fee and nothing to cancel in writing: a family can end it at the close of any month. Families who pay six months at once take a quarter off the monthly fee. The opening class costs nothing, and booking it needs no payment details.'
          ],
          rightH3: 'What a batch hour is, honestly',
          right: [
            'In a group of fifteen, an hour shared evenly is four minutes of individual attention each. A batch is not a cheaper version of one-to-one; it is a class, built around explanation, worked examples and practice, with questions answered for everyone. Many students learn well that way, and the price reflects it.',
            'If your child needs someone to sit with their own test paper, find the exact misunderstanding and rebuild it, choose one to one. If they need steady teaching and practice alongside the school course, a batch is often enough. We will say which we think fits after the free class.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'What we teach, and what we do not',
          left: [
            'We teach students to think through a problem, not to copy an answer, whether that answer comes from a tutor, a solutions site or an AI tool. In practice that means the student holds the pen, explains each step, and checks the result by substitution or estimate before calling it done.',
            'We teach alongside school. For senior courses such as MHF4U, MCV4U or Math 30-1 we follow the school&rsquo;s own outline and unit order, and we do not grant Ontario credits, or any other province&rsquo;s: the credit and the mark stay with the school.'
          ],
          rightH3: 'Times that fit a Canadian evening',
          right: [
            'Our teachers work from India, so families never pay for a tutor&rsquo;s travel and nobody comes to the house. We fix class times in your own province&rsquo;s clock, whether that is Eastern time in most of Ontario and Quebec or the clocks of British Columbia and Alberta.',
            'Clocks change soon. Ontario and Quebec move back to UTC-5 on 1 November 2026 and forward again on 14 March 2027; British Columbia stays on UTC-7 all year; Alberta and Saskatchewan stay on UTC-6. We confirm every class time with each family in the week the clocks move.'
          ] },
        { kind: 'source', html: 'Our fees come from our own pricing and render for each visitor&rsquo;s region; the per-hour figures are the monthly fee divided by eight one-hour classes. Time-zone rules: the 2026 time-zone database. We have no connection with any provider named on this page.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Which kind of help',
    h2: 'Four kinds of math help, from free to one to one',
    lede: 'Our own way of sorting the options by what a student needs, not by price. Most families move between them as the school year changes.',
    table: { caption: 'Kinds of math help and when each fits (ours)', head: ['Kind of help', 'When it fits'], rows: [
      ['1. Free on-demand help', 'One question is blocking tonight&rsquo;s homework, and the student can say exactly which one'],
      ['2. Self-paced lessons', 'A motivated student wants to revisit a topic alone, with videos and practice'],
      ['3. A regular live class', 'The student needs steady teaching beside the school course, week after week'],
      ['4. One-to-one tutoring', 'Marks have dropped, a gap from an earlier grade is showing, or a senior exam is close']
    ] },
    left: { h3: 'For parents', ps: [
      'Before paying anyone, ask your child to show you one question they could not do this week and explain where they got stuck. The answer tells you which row of the ladder you are on.',
      'Moving down the ladder is a good sign, not a failure. A student who needed one-to-one in October and copes in a class by February has learned something worth more than the fees.'
    ] },
    right: { h3: 'For students', ps: [
      'Use the free help first and keep a list of what you asked about. If the same topic appears three times, that is the topic to take to a teacher.',
      'Whatever kind of help you use, do the last step yourself. Check your answer with a number, a sketch or a quick estimate before you hand it in.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more math courses for Canadian students',
    lede: 'Each is taught live by a teacher who stays with the group or the student, and each costs the same per month as the three above.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Early grades to Grade 8', courses: [
        { code: 'MTCA / F / 01', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'Counting, shapes and number sense with objects before symbols.' },
        { code: 'MTCA / F / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math for kids', blurb: 'Quick, accurate arithmetic built on understanding, not tricks.' },
        { code: 'MTCA / F / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The bridge from arithmetic to equations, for Grades 7 to 9.' }
      ] },
      { num: 'II', h3: 'Senior math', sub: 'Grades 11 and 12', courses: [
        { code: 'MTCA / S / 01', slug: 'ap-precalculus-exam-prep-course', title: 'Precalculus', blurb: 'Functions in depth before a calculus course begins.' },
        { code: 'MTCA / S / 02', slug: 'ap-calculus-exam-prep', title: 'Calculus', blurb: 'Limits, derivatives and integrals, explained before they are drilled.' },
        { code: 'MTCA / S / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For data management courses and anyone reading graphs critically.' }
      ] },
      { num: 'III', h3: 'Contests and depth', sub: 'Grades 5 to 12', courses: [
        { code: 'MTCA / C / 01', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'Gauss through Euclid, with problems we write ourselves.' },
        { code: 'MTCA / C / 02', slug: 'middle-school-math-competitions-course', title: 'Middle school competitions', blurb: 'Math Kangaroo and similar contests for younger problem solvers.' },
        { code: 'MTCA / C / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'Proof and problem solving well beyond the provincial course.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live math classes on Canadian time',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school in your own province&rsquo;s time, fixed once a batch is chosen.' },
      { time: 'Weekends', l: 'Mornings in your local time, often chosen before a unit test.' },
      { time: '1-on-1', l: 'Arranged around your family calendar and the school&rsquo;s test dates.' }
    ],
    cells: [
      { h3: 'One teacher all year', p: 'The same face each week, who remembers last week.' },
      { h3: 'School course first', p: 'We follow the outline your child is actually given.' },
      { h3: 'Student holds the pen', p: 'Thinking is the student&rsquo;s job; guidance is ours.' },
      { h3: 'Shared whiteboard', p: 'Each step written where both of you can see it.' },
      { h3: 'Short practice sets', p: 'Marked with a reason, not only a tick.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty together, or one student alone.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Some of our math students also learn to code, and their projects lean on the same habits: estimate first, test the result. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What families say on Google, quoted as written.',

  fees: {
    h2: 'Fees',
    lede: 'Book the free first class before deciding anything. If it suits, you pay month by month for eight live one-hour classes, with the currency shown next to each amount and no contract to break.',
    free: ['A free first class', 'Bring a recent test or worksheet', 'No card details needed'],
    group: ['A batch of fifteen to twenty', 'One teacher, every week', 'Choose the batch time', 'Paid monthly'],
    one: ['Your child and one teacher', 'Times that suit your family', 'Planned around their own course']
  },

  faq: {
    eyebrow: 'Questions from Canadian families',
    h2: 'Math tutor cost in Canada: common questions',
    items: [
      { q: 'How much does a math tutor cost per hour in Canada?', a: 'It ranges from free to the upper end of the private market. Ontario and Quebec fund free services, TVO Learn Mathify and Alloprof. Student tutors on university registries in Alberta set their own hourly rates, and one Canadian marketplace publishes the range most of its tutors charge. The table near the top of this page gives each published figure with its source and the date we checked it.' },
      { q: 'How much does a tutor cost per hour in Ontario?', a: 'Ontario students in Grades 4 to 12 can use TVO Learn Mathify free, with an Ontario Education Number. For paid tutoring, prices depend on the tutor\'s training, the course and the format. Job Bank also publishes what employed tutors in Ontario earn, which sits below what families are usually charged because a fee also covers the provider\'s overheads.' },
      { q: 'Is a math tutor more expensive in Toronto or Vancouver?', a: 'Not by as much as people expect, on the wage side. Job Bank\'s median hourly wage for secondary school tutors in the Toronto Region and in the Lower Mainland and Southwest region of BC are close to each other and to the national median. In-person tutoring in a large city can cost more because of travel and rent, so compare quotes using the real hourly method on this page.' },
      { q: 'How much does Mathnasium cost in Canada?', a: 'We could not read Mathnasium\'s Canadian site when we checked on 31 October 2026, so we do not print a figure and we do not repeat figures from articles about the brand. Fees at tutoring centres often differ from one location to the next. Ask the nearest centre for its fee schedule in writing, including any assessment charge and minimum commitment.' },
      { q: 'Is there free math tutoring in Canada?', a: 'Yes, in some provinces. TVO Learn Mathify offers free one-to-one online help with Ontario Certified Teachers to Ontario students in Grades 4 to 12. Alloprof has offered free academic support to Quebec students and their parents since 1996. Elsewhere, start with your school\'s extra-help periods and your public library\'s homework help pages.' },
      { q: 'Why does an MHF4U or Math 30-1 tutor cost more?', a: 'Senior courses that count towards university admission need a tutor who knows that exact course outline, and fewer tutors can teach them well. Demand also bunches before unit tests and finals. Booking help at the start of the semester lets the work run at a normal pace instead of being squeezed into the last few weeks.' },
      { q: 'How do I compare tutoring quotes fairly?', a: 'Convert every quote to the same unit. Note the session length, add any one-off charges, choose a realistic period such as a term, total the cost and the teaching hours, then divide. A cheap-looking session can turn out to be expensive per hour once a short session and an assessment charge are included. Our worked example shows the steps.' },
      { q: 'What do Modern Age Coders math classes cost?', a: 'Nothing is charged for the opening class. Ongoing classes are billed once a month for eight live hours, in a batch of fifteen to twenty or one to one, with no registration fee and no contract. Six months paid at once takes a quarter off. The current monthly amounts for both formats, and the per-hour figures, are in the fees section and the cost table on this page.' },
      { q: 'Do you grant credits for Ontario or Alberta math courses?', a: 'No. Our lessons sit beside the course the school runs, and we do not grant Ontario credits or any other province\'s credits. The school that teaches and evaluates the course awards the credit and the mark; our classes are the teaching and practice around it.' },
      { q: 'When do your math classes run for Canadian students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We fix each time in your own province\'s clock and check it again them in the weeks of 1 November 2026 and 14 March 2027, when Ontario and Quebec change their clocks.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian families weighing up math help.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Every page we have written for Canadian families.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor for Canada', p: 'Math help by grade and province, start to finish.' },
      { href: '/best-online-math-tutoring-in-canada', label: 'Choosing an online math tutor', p: 'Seven checks to run on any provider before paying.' },
      { href: '/math-tutor-toronto', label: 'Math tutor in Toronto', p: 'Ontario courses and contests for Toronto students.' },
      { href: '/math-tutor-vancouver', label: 'Math tutor in Vancouver', p: 'British Columbia courses for Vancouver families.' },
      { href: '/math-tutor-calgary', label: 'Math tutor in Calgary', p: 'Alberta math, from the PATs to Math 30-1.' },
      { href: '/mhf4u-advanced-functions-tutor', label: 'MHF4U Advanced Functions', p: 'The Ontario Grade 12 course, strand by strand.' },
      { href: '/math-30-1-tutor-alberta', label: 'Math 30-1 in Alberta', p: 'The diploma course and how it is assessed.' },
      { href: '/modern-age-coders-vs-oxford-learning', label: 'Us and Oxford Learning compared', p: 'Two different ways of running tutoring, side by side.' }
    ]
  },

  start: {
    h2: 'Try a free first class',
    lede: 'Tell us your child&rsquo;s grade, province and course, and send a recent test if you have one. The first class works from that, and you will know afterwards which format fits.',
    readFirst: 'Still comparing? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows a single lesson from the first minute to the last, and <a class="ag-inline-link" href="/online-math-tutor-canada">our Canada math page</a> sets out the courses by grade.',
    note: 'Classes are live on video with a teacher in India, so there is no travel on either side. From anywhere in Canada, WhatsApp reaches us fastest.',
    formNote: 'The free class needs no payment details. We confirm the time in your local clock.'
  },

  footer: {
    cols: [
      { h4: 'Math courses', links: [
        { href: '/courses/complete-high-school-mathematics-mastery', label: 'High school math' },
        { href: '/courses/ontario-grade-12-university-math-mhf4u-mcv4u-course', label: 'Ontario Grade 12 math' },
        { href: '/courses/western-canada-grade-12-math-pre-calculus-12-math-30-1-course', label: 'Pre-calculus 12 and Math 30-1' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
        { href: '/best-online-math-tutoring-in-canada', label: 'Choosing a math tutor' },
        { href: '/canada-time-zones-2026-online-class-times', label: 'Canadian class times' }
      ] }
    ],
    bottomRight: 'Same unit first, then compare'
  },

  personalityCss: `
.ag-root.ag-mtca .ag-hero h1 { letter-spacing: -0.01em; max-width: 19ch; }
.ag-root.ag-mtca .ag-capsule { border-left-width: 5px; }
.ag-root.ag-mtca .ag-table caption { text-align: left; }
.ag-root.ag-mtca .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-mtca .ag-steps li { margin-bottom: 0.55rem; line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'Cost sources read raw on 31 October 2026: TVO Learn Mathify one-pager (TVO PDF); Alloprof About us; University of Calgary Students\' Union tutor guideline rates; University of Alberta Students\' Union Tutor Registry (home and High School Math listing, counted by us); TutorLyft and Prep Academy Tutors home page questions; StudyPug Canada pricing; Sylvan pricing (US, no figure used); Job Bank wages for Tutor - Secondary School Subjects (NOC 43109), Canada, Ontario, BC and Alberta pages, updated November 19, 2025.',
    localProject: 'Our six-step method for a tutor\'s real hourly cost, and a worked example converting three invented quotes (48 per 45 minutes plus a 120 assessment; 55 per hour; 150 a month for four sessions over ten weeks) to 80, 55 and 45 per hour; our count of the Alberta registry\'s High School Math listing (238 profiles, 192 rates, 41 at the most common figure); the attention-minutes reading of a batch of fifteen; the four-kind help ladder. Lesson family: unit rates.',
    requiredMentions: ['FREE 1:1 on demand math tutoring with Ontario Certified Math Teachers', 'Saturday and Sunday: 3pm - 9pm ET', 'over 200 employees, including teachers', 'Lowest and highest of 192 stated rates', 'tutor - secondary school subjects', 'Lower Mainland and Southwest Region, BC', 'Edmonton Region', 'A: 10 &times; 48 + 120 = 600', 'four minutes of individual attention each', 'Same unit first, then compare'],
    sources: [
      { claim: 'Mathify: free one-to-one math help for Ontario Grade 4 to 12 students with Ontario Certified Teachers, hours, OEN requirement.', url: 'https://outreach.tvolearn.com/wp-content/uploads/2025/09/TVO-Learn-Mathify_Digital-One-Pager.pdf' },
      { claim: 'Alloprof: free of charge to all Quebec students and parents since 1996; over 200 employees including teachers.', url: 'https://www.alloprof.qc.ca/en/pages/about-us' },
      { claim: 'University of Calgary Students\' Union guideline tutor rates by education and by subject level; tutor chooses the price.', url: 'https://su.ucalgary.ca/?p=20371' },
      { claim: 'University of Alberta Students\' Union Tutor Registry: 825 active tutors; High School Math listing rates as each tutor states them.', url: 'https://www2.su.ualberta.ca/services/infolink/tutor/registry/browse/239/' },
      { claim: 'TutorLyft: most of its tutors charge between 40 and 75 an hour; each tutor sets their own rate.', url: 'https://www.tutorlyft.com/' },
      { claim: 'Prep Academy Tutors: no standard rate; hourly range by qualifications and experience; invoiced monthly, never pre-paid.', url: 'https://www.prepacademytutors.com/' },
      { claim: 'StudyPug Canada plan prices for self-paced lessons.', url: 'https://www.studypug.com/ca/pricing' },
      { claim: 'Job Bank hourly wages for Tutor - Secondary School Subjects (NOC 43109), Canada and provinces, updated November 19, 2025.', url: 'https://www.jobbank.gc.ca/marketreport/wages-occupation/24624/ca' }
    ],
    rejectedClaims: [
      'Any fee for Mathnasium, Kumon, Oxford Learning or Tutor Doctor: their Canadian sites refused our request, and figures from articles about them are third-party reports, so none is printed or estimated.',
      'Sylvan\'s figures: the pricing page is for the United States and prints no currency, so no figure is used; only its own words that pricing varies by location.',
      'An average or typical Canadian tutoring rate: no primary source publishes one; the page gives each source\'s own range and labels our registry counts as ours.',
      'Marketplace blog ranges (including TutorLyft\'s own blog articles): market reports, not the firm\'s own price; only its home page statement about its tutors is used.',
      'Individual tutor names or profiles from the registries: private persons, so only counts and the range are given.',
      'A free province-wide tutoring service outside Ontario and Quebec: none confirmed on official pages we could load, so the page says so.',
      'A school board free tutoring programme found on a board page: it ended on March 31, 2023, so it is not cited.',
      'Totals built from published figures: the only totals are in the invented worked example, in plain numbers with no currency.',
      'Any claim that our classes raise marks, or that a batch equals one-to-one attention: the page states the four-minute arithmetic instead.'
    ]
  }
};
