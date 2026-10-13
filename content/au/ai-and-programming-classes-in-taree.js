'use strict';
// Taree (cg- city page, Australia cluster Phase 7, row 181). Shaped page: AI and programming, leading with
// teenagers and adults; younger learners are covered by the kids pages and the national hub.
// Spine: what happens when a model must learn a rare class, and what does inventing extra examples cost? Data:
// NSW Department of Education, "Master dataset: NSW government school locations and student enrolment numbers"
// (data.nsw.gov.au, Creative Commons Attribution), master_dataset.csv downloaded 7 October 2026, Date_extracted
// 2026-10-02. Rows with LGA "Mid-Coast": 42 schools (34 Primary School, 7 Secondary School, 1 Central/Community
// School). Label: does the school teach secondary years (Secondary or Central/Community) = 8 of 42. Features:
// first-teacher year, latitude and longitude, each scaled. Our calculation (scratchpad au/r6/py/tar_smote.py),
// leave-one-out evaluation with a 3-nearest-neighbour classifier: plain kNN finds 3 of the 8 (recall 37.5%),
// accuracy 32 of 42 (76.2%), 5 false alarms; always answering "primary" scores 34 of 42 (81.0%) and finds none.
// With SMOTE (synthetic minority oversampling, 3 neighbours, minority grown to match the majority inside each
// training fold), averaged over 20 random seeds: recall 75.6% (lowest 62.5%, highest 87.5%), accuracy 74.8%,
// precision 41.3%; seed 0 gives 6 found, 2 missed, 9 false alarms, 25 correct rejections. Oldest Date_1st_teacher
// 1857-07-01 (Cundletown Public School); newest 2003-01-29 (Great Lakes College Tuncurry Campus and Senior Campus, a tie). Town_suburb:
// Taree 6, Tuncurry 3, Wingham 3, Forster 2, Gloucester 2.
// Lesson family: SMOTE synthetic minority oversampling versus a plain k-nearest-neighbour classifier on an
// imbalanced class; screened free site-wide on 9 October 2026 ("SMOTE": 0 page hits; claimed by AU-R6).
// Place facts read raw on 9 October 2026: ABS Census 2021 QuickStats, Taree Significant Urban Area (1033): 26,519
// people; median age 46 (NSW 39, Australia 38); 6,858 families; 11,774 private dwellings; 2.3 people per
// household; separate house 8,690 (83.4%; NSW 65.6%; Australia 72.3%); flat or apartment 725 (7.0%; NSW 21.7%);
// Technicians and Trades Workers 1,235 (13.4%; NSW 11.9%); aged 10 to 14 1,703 (6.4%); aged 15 to 19 1,482
// (5.6%). NSW Department of Education, 2027 term dates, Eastern division. IANA tz: Australia/Sydney daylight
// saving Sunday 4 October 2026 to Sunday 4 April 2027; Asia/Kolkata UTC+5:30.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health, and
// the dataset's ICSEA, Indigenous and LBOTE columns.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'TAREE', label: 'Taree', blurb: 'AI and programming for Taree teens and adults, and a project on teaching a model to spot something rare without inventing nonsense.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-taree',
  code: 'tar',
  accent: '#5C3D37',
  accentRationale: 'Taree: a dark river-clay brown (HSV saturation 0.40, value 0.36, hue 9), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, and 7.8:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Taree',
    eyebrow: 'Taree, New South Wales, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Taree, New South Wales',
  title: 'AI and Programming Classes in Taree | Live Online Teacher',
  description: 'Live online AI, machine learning and programming classes for Taree and Mid-Coast teens and adults, with a real teacher, in groups or one to one. First lesson free.',
  ogDescription: 'AI and programming classes for Taree teens and adults, with a project that doubles a model\'s recall by inventing examples, and counts the false alarms that come with it.',
  twitterDescription: 'AI and programming classes in Taree, live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '9 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Taree Learners',
    description: 'Level-matched online classes in machine learning, Python and data for teenagers and adults in Taree and across the Mid-Coast council area, taught live in English.'
  },

  h1: 'AI and programming classes in Taree',
  capsuleQ: 'What are the best AI and programming classes in Taree?',
  capsule: 'Online lessons in which a Taree teenager or adult learns how machine learning really behaves, coding models in Python with a teacher and testing them on open New South Wales data. The 2021 Census counted 26,519 people in the Taree urban area, with a median age of 46. Every class runs live over video, either private or with a few learners at a similar stage, and the opening session is free.',
  lead: 'Among the 42 public schools in the Mid-Coast council area, only 8 teach secondary years. Train a simple model to pick those 8 from their location and founding year and it scores 76% accuracy, which sounds fine until you notice that answering "primary" every time scores 81%, and that the model finds only 3 of the 8. A popular fix, SMOTE, invents extra secondary schools between real ones so the model sees more of them. Recall doubles to about 76%. The price is a crop of false alarms. Our Taree project builds both models in Python and weighs that trade honestly.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Taree.',

  picks: {
    eyebrow: 'Course picks for Taree',
    h2: 'Courses that teach how models really behave',
    intro: 'Each course builds towards the imbalance project on this page. The free first lesson recommends one, and we do not ask for a card.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning from the ground up: data, simple models, fair testing and honest results.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Python for real datasets, from loading and cleaning to measuring what a model gets wrong.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'A complete machine learning course, including imbalanced data, resampling and evaluation metrics.' },
      { course: 'data-science-complete-masterclass-college', band: 'University and adult', note: 'The full path from raw data to models whose numbers survive scrutiny.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Taree in the Census',
      h2: 'A river town where four in five homes are houses',
      intro: 'Counts for the Taree Significant Urban Area as QuickStats printed them after the 2021 count, set beside the state and national figures.',
      body: [
        { kind: 'table', caption: 'Taree urban area, 2021 Census QuickStats', head: ['Total', 'Taree'], rows: [
          ['Residents', '26,519'],
          ['Families', '6,858'],
          ['Private dwellings', '11,774'],
          ['People per household on average', '2.3']
        ] },
        { kind: 'table', mt: true, caption: 'Taree compared with the state and the nation', head: ['Measure', 'Taree', 'NSW', 'Australia'], rows: [
          ['Median age', '46', '39', '38'],
          ['Occupied homes that are separate houses', '83.4% (8,690)', '65.6%', '72.3%'],
          ['Occupied homes in a flat or apartment block', '7.0% (725)', '21.7%', '14.2%'],
          ['Workers employed as technicians or in a trade', '13.4% (1,235)', '11.9%', '12.9%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Seven years older', p: 'Taree\'s median age of 46 is seven years above the New South Wales median of 39.' },
          { h3: 'Houses first', p: '8,690 occupied homes, 83.4%, were separate houses, well above the state share of 65.6%.' },
          { h3: 'Teenagers', p: 'The Census recorded 1,703 Taree residents aged 10 to 14 and 1,482 aged 15 to 19.' }
        ] },
        { kind: 'p', text: 'How to read the tables: small random changes are applied to census counts to stop individuals being identified, so a table\'s parts can miss its total by a little. Totals and percentages appear here exactly as the bureau published them, and we never add parts together to make a total.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Can a model learn to spot a rare kind of school?',
      intro: 'The NSW Department of Education lists every government school with its level, founding date and coordinates. For the 42 schools in the Mid-Coast council area we asked a nearest-neighbour model which ones teach secondary years, judged it fairly by leaving each school out in turn, and then tried the SMOTE fix.',
      body: [
        { kind: 'table', caption: 'Three ways to answer "does this school teach secondary years?" (leave-one-out, our calculation)', head: ['Method', 'Accuracy', 'Secondary schools found', 'False alarms'], rows: [
          ['Always answer "primary"', '81.0%', '0 of 8', '0'],
          ['3-nearest-neighbour model', '76.2%', '3 of 8', '5'],
          ['Same model trained with SMOTE, average of 20 runs', '74.8%', 'about 6 of 8 (75.6%)', 'about 9']
        ] },
        { kind: 'table', mt: true, caption: 'How much SMOTE results move between random seeds (our calculation, 20 seeds)', head: ['Measure', 'Lowest', 'Average', 'Highest'], rows: [
          ['Recall, share of the 8 found', '62.5%', '75.6%', '87.5%'],
          ['Precision, share of alarms that were right', '35.3%', '41.3%', '50.0%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Frame the question', p: 'Turn each school into three numbers, its first-teacher year and its latitude and longitude, scaled so no one number dominates. The label is whether it teaches Years 7 and above.' },
          { h3: '2. Test fairly', p: 'Leave one school out, train on the other 41, predict the missing one, and repeat 42 times. Accuracy alone hides the problem: the model misses most secondary schools.' },
          { h3: '3. Oversample', p: 'SMOTE picks a secondary school, picks one of its nearest secondary neighbours, and creates a new point somewhere on the line between them. The model now sees a balanced picture.' }
        ] },
        { kind: 'callout', h3: 'Invented examples are not real ones', p: 'Every synthetic point SMOTE creates is a school that does not exist, with a made-up founding year and a location somewhere between two real towns. That is why it can help a model notice the rare class, and also why it raises false alarms: the model has learned from places that are not there. In the Taree runs recall roughly doubled while precision sat near 41%, so most alarms were wrong. Whether that trade is worth it depends entirely on what a missed case costs compared with a false one.' },
        { kind: 'p', text: 'We ran every score above ourselves, in Python, on that open list. Treat the task as practice in imbalanced classification: the model sees founding years and coordinates only, so it can say nothing about how good, big or busy any school is. Synthetic points exist only inside the training code and never describe a real place.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Honest evaluation',
      h2: 'What the Taree project teaches about every AI result',
      intro: 'Rare cases are where AI matters most and where it is easiest to fool yourself. The same habits apply from a 42-school exercise to a system screening millions of records.',
      body: [
        { kind: 'table', caption: 'Evaluation lessons from the Mid-Coast schools', head: ['Question', 'In the Taree project', 'Wider lesson'], rows: [
          ['Does high accuracy mean a good model?', 'Doing nothing scored 81%', 'Always compare with a trivial baseline'],
          ['Which errors matter?', '5 misses before SMOTE, about 9 false alarms after', 'Report recall and precision, not just accuracy'],
          ['Does the result depend on chance?', 'Recall ranged from 62.5% to 87.5% across seeds', 'Repeat runs and report the spread'],
          ['Was the test fair?', 'Synthetic points made only from training data', 'Never let invented or test data leak into training']
        ] },
        { kind: 'p', text: 'An AI assistant asked to "fix class imbalance" will often apply SMOTE to the whole dataset before splitting it, which lets synthetic copies of test schools leak into training and makes the results look better than they are. Learners who have built the Taree evaluation fold by fold know to look for that mistake, and to ask what a false alarm actually costs.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Code a nearest-neighbour classifier, evaluate it by leaving one out, then write SMOTE by hand and compare.' },
          { h3: 'University students', p: 'Imbalanced learning, resampling, cost-sensitive methods and evaluation that holds up to scrutiny.' },
          { h3: 'Adults', p: 'Judging AI tools that flag rare events at work, from fraud alerts to fault detection, by their errors as well as their accuracy.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no tie to MidCoast Council, the NSW education department or the ABS. Those bodies own the raw rows; the classifiers, the invented training points and each percentage quoted here were produced by scripts we wrote.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Taree',
      h2: 'Schools from 1857 to 2003 across the Mid-Coast',
      intro: 'A few more details from the department\'s list and the NSW calendar.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The oldest', p: 'Cundletown Public School records a first teacher in July 1857, the earliest date among the 42 Mid-Coast schools.' },
          { h3: 'The newest', p: 'Two campuses in Tuncurry share the latest first-teacher date, 29 January 2003: Great Lakes College Tuncurry Campus and the Great Lakes College Senior Campus.' },
          { h3: 'Terms in 2027', p: 'NSW Eastern division schools begin Term 1 for students on Wednesday 3 February 2027.' }
        ] },
        { kind: 'spec', title: 'Spread across the council area', p: 'Taree has six schools in the file and Tuncurry and Wingham three each, with Forster and Gloucester two each. The 8 schools teaching secondary years are listed in Taree and Tuncurry (two each), Forster, Wingham, Gloucester and Bulahdelah. Location gives the model something to learn from, yet every one of those towns except Bulahdelah also has a primary school in the file, which is exactly why neighbours alone get confused.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first models to evaluation you can defend',
    intro: 'The ages are suggestions only; the free trial decides where each learner starts.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Data and patterns', p: 'Python that reads a real file, groups and counts, and draws points on a simple chart.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'First classifiers', p: 'Nearest neighbours, fair testing and measuring what a model misses, on the Mid-Coast schools and other open data.', courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'University', h3: 'Machine learning in depth', p: 'Imbalanced data, resampling, metrics and the statistics behind a fair comparison.', courses: ['ai-ml-masterclass-complete-college', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'AI you can judge', p: 'Questioning the models and dashboards that appear at work by their false alarms and misses.', courses: ['data-science-complete-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why should a Taree learner care about a model\'s false alarms?',
    intro: 'Because the most useful AI systems hunt for rare things, and that is exactly where impressive-sounding numbers mislead.',
    p1: 'Much of practical AI is about finding needles: unusual transactions, faulty parts, rare conditions. A model can be accurate on paper while missing most of them, as ours did by finding 3 secondary schools out of 8 while scoring 76%. Fixes such as SMOTE help it find more, but by learning from invented examples, which brings false alarms.',
    p2: 'We teach learners to see all of that: to compare against doing nothing, to count misses and false alarms separately, to rerun with different seeds, and to keep synthetic data away from the test set. Those habits are what separate a model someone can trust from one that only looks good in a demonstration.',
    closer: 'In 2026 anyone can train a model in minutes, and a Taree learner who knows how to read its mistakes is the one people will trust with real decisions.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Taree, Wingham or Forster, the same live class',
    intro: 'The schools in our project lie in towns spread across the Mid-Coast council area, and a lesson on video joins them all together.',
    cells: [
      { h3: 'Town to town', p: 'A teenager in Wingham and an adult in Forster can work on the same model in the same lesson, with nobody on the road.' },
      { h3: 'Built around NSW school', p: 'Lesson plans track the stage a learner is in and the NSW term calendar, and Year 11 or 12 students can link their AI work to whichever computing or mathematics courses they have chosen.' },
      { h3: 'A first lesson that counts', p: 'The trial is a full class with real code, after which we suggest a level, course and weekly time; no card details are requested.' },
      { h3: 'Same-stage groups', p: 'Fifteen to twenty learners at one level, from the Mid-Coast and beyond, so groups are always large enough.' },
      { h3: 'Twice a week', p: 'A regular pair of weekly sessions, roughly eight per month, with gaps for exams and school holidays agreed well ahead.' },
      { h3: 'Teachers in India', p: 'A 5:30pm Taree lesson in winter starts at 1pm in India; when daylight saving begins in New South Wales, it starts at 12pm there.' }
    ],
    spec: { title: 'One clock change each way', p: 'New South Wales moves its clocks forward on Sunday 4 October 2026 and back on Sunday 4 April 2027, while India keeps the same time. Lesson times are always set in Taree time, so families never need to work out the difference themselves.' }
  },

  fees: {
    h2: 'Fees for Taree learners',
    intro: 'Three clear figures.',
    first: 'One complete lesson at no charge, with a recommended level, course and time to follow.',
    group: 'About eight lessons a month alongside fifteen to twenty learners at the same level.',
    private: 'About eight lessons a month with a teacher, one to one.',
    closer: 'Families outside India are billed in US dollars, which means Tuncurry, Wingham and central Taree all see one identical figure. No payment is taken before the trial settles a course and a weekly slot; holidays, missed classes and switching between group and private are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from our families',

  book: {
    h2: 'What would the learner like to try?',
    intro: 'An age and an interest are enough for a first plan. A Year 9 student might begin by plotting the Mid-Coast schools in Python; an adult might move straight to the full imbalance experiment.',
    success: 'Thank you. Our team will contact you shortly about a Taree class.'
  },

  faq: {
    h2: 'Taree AI and programming questions',
    intro: 'What Taree learners and families tend to ask us first.',
    items: [
      { q: 'How many people live in Taree?', a: 'The Taree Significant Urban Area had 26,519 residents at the 2021 Census, according to QuickStats, with a median age of 46 compared with 39 for New South Wales.' },
      { q: 'What is SMOTE?', a: 'SMOTE stands for Synthetic Minority Oversampling Technique. It creates new, invented examples of a rare class by placing points between real examples and their nearest neighbours of the same class, so a model sees the rare class more often during training.' },
      { q: 'What is the Taree schools project?', a: 'Learners train a nearest-neighbour model to pick out the 8 Mid-Coast public schools that teach secondary years from the 42 in the council area. The plain model finds 3 of the 8; with SMOTE it finds about 6, at the cost of many more false alarms.' },
      { q: 'Does the project judge the schools?', a: 'No. The model uses only founding years and coordinates, as an exercise in imbalanced classification. We draw no conclusion about how well any of the 42 schools teaches, or about who attends them.' },
      { q: 'Do you teach HSC students?', a: 'Yes. Year 11 and 12 students studying computing or maths in New South Wales have lessons aligned to their stage and terms. Teachers explain techniques and check understanding, while anything submitted for marks stays entirely the learner\'s work.' },
      { q: 'What time are lessons?', a: 'Times are agreed at the trial and quoted in Taree time, usually after school or at the weekend. India is 4.5 hours behind Taree in winter and 5.5 hours behind during NSW daylight saving.' },
      { q: 'Can younger children join?', a: 'Yes, from age six. Younger children begin with Scratch and visual projects; the machine learning project on this page is for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Taree?', a: 'No, and none is claimed. All lessons are live and online and we have no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection; the contact number shown is Indian.', boiler: true },
      { q: 'What do Taree AI and programming classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are settled before any payment.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, grouped by level, pace and goals rather than by age or postcode. When no group suits the time a learner needs, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Taree and Mid North Coast learners',
    html: 'Nearby pages include <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-port-macquarie">vibe coding and AI agents classes in Port Macquarie</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-nelson-bay">online coding and Python classes in Nelson Bay</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">New South Wales page</a> covers the state, and every other place and topic is listed on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Taree and Australia',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-port-macquarie', label: 'Port Macquarie' },
    { href: '/online-coding-and-python-classes-in-nelson-bay', label: 'Nelson Bay' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-tar .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.9vw, 2.4rem); }
.cg-root.cg-tar .cg-hero h1 { font-weight: 760; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-tar .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.55rem 0 0.55rem 1rem; }
.cg-root.cg-tar .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-tar .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-tar .cg-grid-3 { gap: clamp(0.9rem, 2.5vw, 1.9rem); }
.cg-root.cg-tar .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-tar .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-tar .cg-ladder-col { border-top: 3px double var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-tar .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Taree, ABS Census 2021 QuickStats, Significant Urban Area 1033 (read 9 October 2026): 26,519 people; median age 46 (New South Wales 39, Australia 38); 6,858 families; 11,774 private dwellings; average 2.3 people per household; dwelling structure, occupied private dwellings: separate house 8,690 (83.4 percent; NSW 65.6; Australia 72.3), semi-detached, row or terrace house, townhouse 912 (8.7 percent), flat or apartment 725 (7.0 percent; NSW 21.7; Australia 14.2); occupation: Professionals 1,390 (15.0 percent; NSW 25.8), Technicians and Trades Workers 1,235 (13.4 percent; NSW 11.9; Australia 12.9); aged 10 to 14 1,703 (6.4 percent); aged 15 to 19 1,482 (5.6 percent). NSW Department of Education, 2027 term dates, Eastern division: Term 1 Wednesday 3 February to Friday 9 April. IANA tz database: Australia/Sydney, daylight saving Sunday 4 October 2026 to Sunday 4 April 2027; Asia/Kolkata UTC+5:30.',
    localProject: 'SMOTE versus a plain k-nearest-neighbour classifier on an imbalanced class. NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (data.nsw.gov.au, Creative Commons Attribution), master_dataset.csv downloaded 7 October 2026, Date_extracted 2026-10-02. Rows with LGA = Mid-Coast: 42 (Primary School 34, Secondary School 7, Central/Community School 1). Label 1 if Level_of_schooling is Secondary School or Central/Community School: 8 of 42. Features: (year of Date_1st_teacher - 1900) / 50, (Latitude + 32) / 0.5, (Longitude - 152) / 0.5. Leave-one-out, Euclidean 3-NN majority vote: TP 3, FP 5, FN 5, TN 29; accuracy 76.2 percent, recall 37.5 percent. Majority baseline: accuracy 81.0 percent, recall 0. SMOTE inside each training fold (k = 3 minority neighbours, minority oversampled to the majority count), 20 seeds: mean accuracy 74.8 percent, mean recall 75.6 percent (minimum 62.5, maximum 87.5), mean precision 41.3 percent (minimum 35.3, maximum 50.0); seed 0 TP 6, FP 9, FN 2, TN 25. Oldest Date_1st_teacher 1857-07-01 Cundletown Public School; newest 2003-01-29, shared by Great Lakes College Tuncurry Campus and Great Lakes College Senior Campus (both Tuncurry). Town_suburb (title case): Taree 6, Tuncurry 3, Wingham 3, Forster 2, Gloucester 2.',
    requiredMentions: [
      '26,519',
      '6,858',
      '11,774',
      '8,690',
      'Cundletown Public School',
      'Great Lakes College Tuncurry Campus',
      'Synthetic Minority Oversampling Technique',
      '62.5% to 87.5%',
      '41.3%'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Taree Significant Urban Area (1033): people, median age, families, private dwellings, dwelling structure, occupation, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1033' },
      { claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).', url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset' },
      { claim: 'Chawla, Bowyer, Hall and Kegelmeyer (2002), SMOTE: Synthetic Minority Over-sampling Technique, Journal of Artificial Intelligence Research 16.', url: 'https://doi.org/10.1613/jair.953' },
      { claim: 'NSW Department of Education, 2027 term dates, Eastern division.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'That the 42 schools all lie in the Taree urban area: they are the Mid-Coast council area, which also includes Forster, Tuncurry, Gloucester and other towns, and the page says so.',
      'Any prediction about real schools or students: the model is an exercise and its synthetic points describe no real place.',
      'Enrolment, ICSEA, Indigenous and LBOTE figures from the master dataset: excluded by the cluster rules or not needed.',
      'Bureau of Meteorology station facts: the Bureau\'s pages returned 403 and were not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the NSW Department of Education, MidCoast Council or the ABS.'
    ]
  }
};
