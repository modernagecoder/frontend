'use strict';
// Fredericton, New Brunswick (cg- city page, Canada cluster Wave 2, row 129: ai-and-python-classes-for-teens-in-<city>).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: Fredericton is New Brunswick's capital in an officially bilingual province; NB's high school Computer Science 110
// names artificial intelligence and "AI-assisted debugging tools" while the CCC bans AI in the editor; Atlantic time against
// India; and a bilingual naive Bayes text classifier on the City of Fredericton's recreation amenity descriptions, in English
// and in French. No claims about local schools.
// Sources, read raw on 22 October 2026:
//  - NB curriculum (facts-schools-contests.md, ca/src/other-provinces/nb-computer-science-110.html): Computer Science 110
//    "Learners will gain a strong foundation in coding while demonstrating operational skills, using computational thinking";
//    "Computer science also encompasses topics such as computer architecture, programming languages, artificial intelligence,
//    and human-computer interaction."; achievement indicator "Create repeatable steps that takes input data and produces a
//    consistent and repeatable output by testing and refining algorithms using coding environments or AI-assisted debugging
//    tools" (the source uses a non-breaking hyphen in "AI-assisted", reproduced). Subcluster list (nb-digital-production-120.html):
//    "Computer Science 110", "Computer Science 120", "Cybersecurity 120", "Cybersecurity and Technical Support 110",
//    "Technology 9".
//  - Constitution Act, 1982, s.16(2) (facts-geo.md): "English and French are the official languages of New Brunswick and have
//    equality of status"; Constitution Act, 1867 s.68 names "of New Brunswick, the City of Fredericton" as the seat of
//    government. facts-geo.md: Fredericton CMA; area codes 428/506; America/Moncton, UTC-3 until 1 November 2026, UTC-4 to
//    14 March 2027. No populations used.
//  - CEMC (ca/src/cemc/): CCC "Wednesday, February 17, 2027"; ordering deadline "Thursday, February 11, 2027"; "each
//    participant can choose the best level for them, regardless of their grade."; "This contest is available in English and
//    French."; "all students must participate through their school." CCC Online Grader rules: "However, AI-based tools within
//    an IDE cannot be used."; "generative AI such as CoPilot or ChatGPT".
//  - OpenAI Terms of Use, effective January 1, 2026: "You must be at least 13 years old or the minimum age required in your
//    country to consent to use the Services"; "If you are under 18 you must have your parent or legal guardian's permission to
//    use the Services." Anthropic Consumer Terms, Oct 8, 2025: "You must be at least 18 years old".
//  - City of Fredericton open data (src-pilots/ai-and-python-classes-for-teens-in-fredericton/): Recreation Amenities Public
//    View, item 0dcaf00b5ef14eb780903ce767204f0e, in the hub group "Fredericton Open Data" (item_groups.json), layer
//    services2.arcgis.com/iLWAxhpxafhOza2U/.../Recreation_Amenities_view/FeatureServer/0 (295 rows; fields AmenityType,
//    Description, DescriptionFR, Season, Free). Licence: hub page item 814c4f293308411aba1d6f035e08683b "Open Data License"
//    (licence-page.txt): "The Information Provider grants you a worldwide, royalty-free, perpetual, non-exclusive license to
//    use the Information, including for commercial purposes"; "The Open Government License - City of Fredericton is based on
//    the Open Government Licence - Canada"; "This is version 1.0"; non-endorsement clause.
// Our own calculations (fredericton_bayes.py run live with python -I, fredericton_bayes.out.txt; fredericton_explore.out.txt):
// 283 amenities tagged Summer (130) or Year-Round (153), 11 Winter and 1 blank left out; always "Year-Round" 54.1%; naive
// Bayes with leave-one-out on English descriptions 88.7%, on French descriptions 85.2%; English model 32 mistakes, most on
// Parking (7 summer, 4 year-round) and Community School Gym (6); words seen only with Summer include "diamond" (25), "ball"
// (25), "drop" (31, from "drop-in"); "playground" 57 year-round against 2 summer; Parking rows 28 year-round, 11 summer.
// Lesson family: text classification, naive Bayes with add-one smoothing, leave-one-out evaluation, comparing languages.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import json, math, re, urllib.request',
  'from collections import Counter',
  '',
  'URL = ("https://services2.arcgis.com/iLWAxhpxafhOza2U/arcgis/rest/services/"',
  '       "Recreation_Amenities_view/FeatureServer/0/query?where=1%3D1"',
  '       "&outFields=Description,DescriptionFR,Season&returnGeometry=false&f=json")',
  'rows = [f["attributes"] for f in json.load(urllib.request.urlopen(URL))["features"]]',
  'rows = [r for r in rows if r["Season"] in ("Summer", "Year-Round")]',
  '',
  'def words(text):',
  '    return set(re.findall(r"\\w+", (text or "").lower()))',
  '',
  'def train_and_guess(train, sample):',
  '    seasons = Counter(season for _, season in train)',
  '    counts = {s: Counter() for s in seasons}',
  '    for bag, season in train:',
  '        counts[season].update(bag)',
  '    vocab = set().union(*(bag for bag, _ in train))',
  '    def score(s):',
  '        total = sum(counts[s].values())',
  '        return math.log(seasons[s] / len(train)) + sum(',
  '            math.log((counts[s][w] + 1) / (total + len(vocab))) for w in sample if w in vocab)',
  '    return max(seasons, key=score)',
  '',
  'def leave_one_out(field):',
  '    data = [(words(r[field]), r["Season"]) for r in rows]',
  '    right = sum(train_and_guess(data[:i] + data[i + 1:], bag) == season',
  '                for i, (bag, season) in enumerate(data))',
  '    return round(100 * right / len(data), 1)',
  '',
  'top = Counter(r["Season"] for r in rows).most_common(1)[0]',
  'print(len(rows), "amenities; always", repr(top[0]), "is right",',
  '      round(100 * top[1] / len(rows), 1), "% of the time")',
  'print("naive Bayes on English descriptions:", leave_one_out("Description"), "%")',
  'print("naive Bayes on French descriptions:", leave_one_out("DescriptionFR"), "%")'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'FREDERICTON', label: 'Fredericton', blurb: 'Python and AI for Fredericton teenagers: New Brunswick Computer Science 110 and its AI-assisted debugging line, Atlantic time, the CCC, and a bilingual text classifier on City of Fredericton data.' },
  market: CA,
  slug: 'ai-and-python-classes-for-teens-in-fredericton',
  code: 'aptf',
  accent: '#165C1A',
  accentRationale: 'Fredericton: a deep river-valley green, #165C1A, allocated for this row and kept at least 14 RGB units from the other Canada accents and 6 from every site accent; contrast 7.68 on the paper #FBF8F2, 7.22 and 6.61 on the two darker paper tints',
  pageType: 'city',
  place: {
    name: 'Fredericton',
    eyebrow: 'Fredericton, New Brunswick',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New Brunswick' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Curriculum by province', href: '/canada-coding-curriculum-by-province' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Fredericton',
  title: 'AI and Python Classes for Teens in Fredericton, NB | Online',
  description: 'Live online Python and AI for Fredericton teens aged 13 to 18: NB Computer Science 110 and 120, Atlantic time, CCC practice, AI age rules and a bilingual text model.',
  ogDescription: 'New Brunswick\'s Computer Science 110 now mentions AI-assisted debugging; the CCC bans AI in the editor. Here is how a Fredericton teen handles both, plus a bilingual classifier on City of Fredericton data.',
  twitterDescription: 'Python and AI for Fredericton teens, live online, with an English and French text classifier on City of Fredericton data.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Python and AI Classes for Teens in Fredericton, New Brunswick',
    description: 'Python, machine learning, data science and contest programming for Fredericton students aged 13 to 18, taught live online in a group or one to one, on Atlantic time, alongside New Brunswick high school computer science.'
  },

  h1: 'AI and Python classes for teens in Fredericton',
  capsuleQ: 'How can a Fredericton teenager learn Python and AI with a live teacher, around a New Brunswick timetable?',
  capsule: 'Modern Age Coders teaches Python and AI to Fredericton teenagers between 13 and 18 in live online classes, in a group of fifteen to twenty or one to one. Students normally begin with Python for Teens, then take AI and Machine Learning for Teens, Data Science for Teens or CCC preparation. Every class is booked on Atlantic time, and the first lesson is free.',
  lead: 'Fredericton is New Brunswick&rsquo;s capital and sits in Canada&rsquo;s only officially bilingual province, so a teenager here often moves between English and French in a single day. New Brunswick&rsquo;s high school computer science course now mentions artificial intelligence directly, and even lists AI-assisted debugging tools as one way to test and refine an algorithm. At the same time, the national programming contest bans AI inside the editor. A Fredericton student therefore needs both habits: using AI tools carefully where they are allowed, and thinking without them where they are not. This page quotes New Brunswick&rsquo;s curriculum and CEMC&rsquo;s rules, explains the age limits on AI tools for younger teens, and walks through a text classifier our students build on the City of Fredericton&rsquo;s bilingual list of recreation amenities.',
  wa: 'Hello Modern Age Coders, I would like a free Python or AI class for a teenager in Fredericton, New Brunswick.',

  picks: {
    eyebrow: 'Course picks for Fredericton teens',
    h2: 'Four courses that suit a Fredericton student from Grade 8 upward',
    intro: 'Python is the base for all four. The free class tells us whether a student starts there or one step later.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Starting out', note: 'Full Python from first statements to functions, sets and dictionaries, which is all the bilingual text model on this page needs.' },
      { course: 'ai-ml-masterclass-teens', band: 'Models', note: 'Classifiers built by hand and tested fairly, including naive Bayes for text, before any library does the work for the student.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Data', note: 'Reading, cleaning and summarising public data, with municipal files from Atlantic Canada among the exercises.' },
      { course: 'ccc-junior-and-senior-preparation-course', band: 'Contest year', note: 'Problems of our own in the CCC format, sat under the three-hour limit with every AI helper switched off.' }
    ]
  },

  sections: [
    {
      id: 'nb', tint: '', eyebrow: 'New Brunswick computer science',
      h2: 'What New Brunswick&rsquo;s Computer Science 110 says about coding and AI',
      intro: 'The quoted lines are from curriculum.nbed.ca, the New Brunswick curriculum site, as read on 22 October 2026. Comments in the right-hand column are ours.',
      body: [
        { kind: 'table', caption: 'New Brunswick high school computing courses and what Computer Science 110 says (curriculum.nbed.ca, read 22 October 2026; comments are ours)', head: ['Item', 'New Brunswick wording', 'Our comment'], rows: [
          ['Courses in the subcluster', '&ldquo;Computer Science 110&rdquo;, &ldquo;Computer Science 120&rdquo;, &ldquo;Cybersecurity 120&rdquo;, &ldquo;Cybersecurity and Technical Support 110&rdquo; and &ldquo;Technology 9&rdquo;', 'Two computer science courses and two cybersecurity courses after a Grade 9 technology course'],
          ['CS 110 aim', '&ldquo;Learners will gain a strong foundation in coding while demonstrating operational skills, using computational thinking&rdquo;', 'Coding first, with problem solving and teamwork alongside'],
          ['CS 110 scope', '&ldquo;Computer science also encompasses topics such as computer architecture, programming languages, artificial intelligence, and human-computer interaction.&rdquo;', 'AI is named as part of the field, not a separate subject'],
          ['CS 110 achievement indicator', 'Testing and refining algorithms &ldquo;using coding environments or AI‑assisted debugging tools&rdquo;', 'AI help is allowed in this school task, which makes the contest rule below a contrast worth teaching']
        ] },
        { kind: 'p', text: 'That last row is unusual. Most curriculum documents we read in 2026 mention artificial intelligence as a topic; New Brunswick&rsquo;s Computer Science 110 also lists AI-assisted debugging tools as an accepted way to refine an algorithm. For a Fredericton teen this is a reasonable rule for school work, and it sits beside a stricter rule elsewhere: in the CCC, AI help inside the editor is banned. We teach students to handle both. In practice that means writing and testing code by hand until they can find their own bugs, then learning how an AI debugger can speed up that work without replacing it, and how to check what it suggests. A student who can only debug with an assistant is stuck in February; one who can debug alone uses an assistant far better.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Technology 9 and before', p: 'Younger teens start with complete Python programs and the habit of predicting output, so that Computer Science 110 builds on code they already trust.' },
          { h3: 'Computer Science 110 and 120', p: 'We work alongside both courses with extra practice, explanations and project feedback, and with algorithm work that goes beyond a single school project.' },
          { h3: 'The cybersecurity pair', p: 'Students drawn to Cybersecurity 120 benefit from strong programming first. The <a class="cg-inline-link" href="/canada-coding-curriculum-by-province">coding curriculum by province</a> page compares New Brunswick with other provinces.' }
        ] },
        { kind: 'callout', h3: 'New Brunswick credits stay with the school', p: 'We teach beside a student&rsquo;s courses and no provincial credit is granted by us; Computer Science 110 and 120 credits come only from the school. We are independent of New Brunswick&rsquo;s education department or any Fredericton-area school district.' }
      ]
    },
    {
      id: 'ccc', tint: 'tint', eyebrow: 'The CCC from Atlantic Canada',
      h2: 'Entering the CCC from Fredericton, in English or French',
      intro: 'CEMC at the University of Waterloo runs the Canadian Computing Competition. These details are CEMC&rsquo;s, read on 22 October 2026; the advice is ours.',
      body: [
        { kind: 'table', caption: 'CCC 2027 details for a Fredericton student (CEMC CCC and contests pages, read 22 October 2026)', head: ['Detail', 'CEMC says', 'What to do'], rows: [
          ['Contest date', 'Wednesday 17 February 2027', 'Plan practice backwards from that date, on Atlantic time'],
          ['School ordering deadline', 'Thursday 11 February 2027', 'Ask a teacher well before then; the school places the order'],
          ['Who can enter', '&ldquo;all students must participate through their school.&rdquo;', 'There is no individual entry, so the school route is the only one'],
          ['Choosing a level', '&ldquo;each participant can choose the best level for them, regardless of their grade.&rdquo;', 'Junior for most first-time writers, whatever their grade'],
          ['Language', 'CEMC offers the paper in both official languages', 'A Fredericton student in French immersion can write the paper in French']
        ] },
        { kind: 'p', text: 'For a bilingual city that last line matters. A student who learns Python with us in English can still read the CCC paper in French if that is the language they think in at school; the code itself is identical in both. The ordering deadline is the detail families most often miss. CEMC lists it for Thursday 11 February 2027, only six days before the contest, and a school that has not entered before needs time to set up. We suggest raising it with a teacher before the winter break. In class we prepare students with problems we write ourselves; CEMC&rsquo;s past papers and solutions stay in CEMC&rsquo;s free archive, where students read them independently.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'AI off for the contest', p: 'The grader rules rule out AI features inside the coding editor as well as chatbots. We run every contest session in a plain editor, so the school habit of AI debugging does not follow a student into the CCC.' },
          { h3: 'Python is fine', p: 'Python is one of the accepted CCC languages and the one we start with. Students heading for the hardest Senior questions later add C++.' },
          { h3: 'Further reading', p: 'The <a class="cg-inline-link" href="/ccc-senior-guide">CCC Senior guide</a> covers the harder paper, and the <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation</a> page describes how our course runs.' }
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'City of Fredericton data project',
      h2: 'Can a computer tell from a description, in English or French, whether a Fredericton amenity is open all year?',
      intro: 'The City of Fredericton lists its recreation amenities, from playgrounds and ball diamonds to dog parks, with a description in English, a description in French and a season. Our students hide the season and train a naive Bayes classifier on the words. All accuracy figures here are our own results; the descriptions and seasons are the City&rsquo;s.',
      body: [
        { kind: 'table', caption: 'Our naive Bayes results on City of Fredericton Recreation Amenities (283 amenities tagged Summer or Year-Round, fetched 22 October 2026; each one tested while the other 282 are used for training)', head: ['Model', 'What it reads', 'Share of amenities whose season it guesses right'], rows: [
          ['Baseline', 'Nothing: always says Year-Round, the commoner season', '54.1%'],
          ['Naive Bayes, English', 'The words of the English description', '88.7%'],
          ['Naive Bayes, French', 'The words of the French description', '85.2%']
        ] },
        { kind: 'p', text: 'This is the complete program, using only Python&rsquo;s standard library. It downloads the amenity list, turns each description into a set of lower-case words, and for every amenity in turn trains on all the others and guesses the left-out one, a method called leave-one-out that suits a small dataset. The add-one in the formula keeps a word the model has never seen with a season from zeroing out the whole calculation. Its output on 22 October 2026 is the three-row table above:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Words as evidence', p: 'Naive Bayes treats each word as a small piece of evidence. In the English descriptions, &ldquo;diamond&rdquo; and &ldquo;ball&rdquo; appear 25 times each, always on summer amenities, while &ldquo;playground&rdquo; appears 57 times on year-round amenities and only twice on summer ones.' },
          { h3: '2. Surprising clues', p: 'The word &ldquo;drop&rdquo;, from &ldquo;drop-in&rdquo;, appears 31 times, every time on a summer amenity. The model has no idea what drop-in means; it only learned that the word travels with summer. That is the strength and the weakness of statistical learning.' },
          { h3: '3. English or French?', p: 'The French descriptions give 85.2 per cent against 88.7 in English. Students investigate why: French joins words with apostrophes, uses more forms of each word, and spreads the same evidence over more spellings. Handling that is real natural language processing.' }
        ] },
        { kind: 'callout', h3: 'Where the model fails, and why that is useful', p: 'The English model makes 32 mistakes. Seven are summer parking areas called year-round and four are year-round parking areas called summer: a parking description says little about the season, and the City lists 28 parking rows as year-round and 11 as summer. Six more are community school gyms. When a model fails on one category again and again, the honest conclusion is that the text does not contain the answer, not that a cleverer model is needed.' },
        { kind: 'p', text: 'A few notes on the data. Of the 295 amenities in the layer, 11 are tagged Winter and one has no season, so the model compares only Summer (130) and Year-Round (153). The descriptions were written by people, not generated, which is why identical amenities often share a template sentence and why the model does well on them. The dataset sits in the City&rsquo;s Fredericton Open Data catalogue, published under the Open Government License - City of Fredericton, version 1.0, which the City says is based on the Open Government Licence - Canada and whose grant extends to use &ldquo;including for commercial purposes&rdquo;. Source: City of Fredericton, Recreation Amenities, <a class="cg-inline-link" href="https://data-fredericton.opendata.arcgis.com/">City of Fredericton open data</a>. Nothing here carries the City&rsquo;s endorsement.' }
      ]
    },
    {
      id: 'tools', tint: '', eyebrow: 'AI tools for under-18s',
      h2: 'Which AI tools a Fredericton teenager may use, and when to switch them off',
      intro: 'Minimum ages are set in company terms and contest limits in organiser rules; we checked each original on 22 October 2026 and describe our own practice alongside.',
      body: [
        { kind: 'table', caption: 'Rules on AI tools that affect a teenager in Fredericton (source texts checked 22 October 2026)', head: ['Where it applies', 'Published rule', 'How our classes handle it'], rows: [
          ['ChatGPT, under OpenAI&rsquo;s January 1, 2026 terms', '&ldquo;You must be at least 13 years old or the minimum age required in your country to consent to use the Services&rdquo;, plus a parent&rsquo;s or guardian&rsquo;s yes below 18', 'Allowed once a parent agrees, and then as a checker, never as the author'],
          ['Claude, under Anthropic&rsquo;s consumer terms dated Oct 8, 2025', 'Adults only: users &ldquo;must be at least 18 years old&rdquo;', 'Kept out of every class for under-18s'],
          ['AI debugging in NB Computer Science 110', 'Testing algorithms &ldquo;using coding environments or AI‑assisted debugging tools&rdquo;', 'Taught only after a student can debug unaided, and only with tools the student may legally use'],
          ['The CCC, per its online grader rules', 'Chatbots and editor AI are both prohibited during the contest', 'Mock contests run in a plain editor']
        ] },
        { kind: 'p', text: 'The bilingual classifier shows what a student learns by building rather than asking. A chatbot asked to predict the season of Fredericton&rsquo;s amenities would likely give a confident answer. It would not tell the student that the parking descriptions carry no seasonal signal, that &ldquo;drop&rdquo; is a clue only by accident, or that the French model does slightly worse for reasons rooted in how French is written. Those findings come from reading output line by line. Where a parent allows ChatGPT, it enters our lessons late, as something to test against the student&rsquo;s own reasoning, which is also what New Brunswick&rsquo;s debugging indicator implies: the student refines the algorithm, and the tool assists.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Permission from a parent', p: 'Below 18 the choice belongs to the family under OpenAI&rsquo;s terms. Any lesson that might use the tool is named beforehand, and none needs it.' },
          { h3: 'Adult tools are for adults', p: 'Claude carries an 18-plus rule, so teen lessons never touch it, and our agentic coding course, written for adults, does not take teenagers.' },
          { h3: 'School work is theirs', p: 'We explain, question and give practice. We never complete graded assignments, and we say so plainly when a piece of code looks pasted.' }
        ] }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Atlantic time',
      h2: 'Fredericton and India clocks through the 2026 to 2027 school year',
      intro: 'Fredericton moves its clocks on 1 November 2026 and 14 March 2027, the same days as Ontario, so it stays one hour ahead of Eastern time all year. India never changes. The hours below are examples, not a fixed timetable.',
      body: [
        { kind: 'table', caption: 'Fredericton (zone America/Moncton) next to the India clock; UTC offsets from IANA release 2026e, conversions worked out by us', head: ['Dates', 'Fredericton', 'India ahead by', 'Saturday 9:30 to 11 am in Fredericton', 'Weekday 6:30 to 8 pm in Fredericton'], rows: [
          ['Up to 1 November 2026', 'UTC-3', 'eight and a half hours', 'India: 6 to 7:30 pm', 'India: 3 to 4:30 am the following day'],
          ['Winter, 1 November 2026 to 14 March 2027', 'UTC-4', 'nine and a half hours', 'India: 7 to 8:30 pm', 'India: 4 to 5:30 am the following day'],
          ['Spring 2027 onward, after 14 March', 'UTC-3', 'eight and a half hours', 'India: 6 to 7:30 pm', 'India: 3 to 4:30 am the following day']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Atlantic, always stated', p: 'Each confirmation gives the Fredericton time. Families hear from us before each change in November and March, with every class time restated.' },
          { h3: 'One hour ahead of Eastern', p: 'National webinars and contest briefings are often set in Eastern time; in Fredericton they start an hour later on the clock, all year.' },
          { h3: 'Fredericton numbers', p: 'New Brunswick numbers use the 506 area code and its overlay 428. Enter all ten digits in the booking form; skip the country code.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first Python program at 13 to a text model a Fredericton student can explain at 18',
    intro: 'The stages are a guide. We place each student by the code they can write today, which the free class checks.',
    cols: [
      { band: 'Around Technology 9', h3: 'Working programs', p: 'Whole Python programs, from reading input to writing functions, with every output guessed before it appears.', courses: ['python-complete-masterclass-teens'] },
      { band: 'Before Computer Science 110', h3: 'Algorithms and a first contest', p: 'Searching and sorting drills, careful counting, then a first CCC Junior sitting if the student wishes.', courses: ['problem-solving-dsa-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Alongside CS 110 and 120', h3: 'Data and text', p: 'Real public data in English and French, cleaned and modelled, from counts to word-based classifiers.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Final year', h3: 'A model of their own', p: 'A larger machine learning project, and C++ for students aiming at the top of CCC Senior.', courses: ['ai-ml-masterclass-teens', 'cpp-programming-masterclass-for-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Debug before you delegate',
    h2: 'Why a Fredericton teen should learn to debug alone before using AI to debug',
    intro: 'Because New Brunswick allows the tool in class, the CCC forbids it, and only a student who can do both is ready for either.',
    p1: 'An AI debugger is useful in the hands of someone who knows what a correct program should do. In the hands of someone who does not, it just moves errors around. A teen who has found a dozen bugs by reading their own output knows what to ask a tool, and knows when its answer is wrong.',
    p2: 'So we keep a fixed order. Understand the problem, write the steps, predict the output, run it, find the mistakes, and only then, within the age rules, try a tool and compare its suggestion with your own. Students taught this way get more from AI, not less.',
    closer: 'In the CCC the order is enforced for everyone: no AI in the editor, so every fix has to come from the student.',
    blogAnchor: 'a fuller case for coding in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for Fredericton, Oromocto and the river valley',
    intro: 'Classes are online, so a teen on the north side of the Saint John River and another in Oromocto or New Maryland share the same lesson.',
    cells: [
      { h3: 'When', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Nearby communities', p: 'Students from Oromocto, New Maryland and the wider valley join the same groups, all on Atlantic time.' },
      { h3: 'Group or one to one', p: 'Join a class of fifteen to twenty peers, or book a private teacher when a date is fixed, for example the CCC or a Computer Science 120 submission.' },
      { h3: 'In English, with French terms', p: 'Teaching happens in English; key terms come with their French names, which helps immersion students connect class and school.' },
      { h3: 'Equipment', p: 'Any computer that runs Python 3, plus a headset and decent internet. If Python is missing, setting it up is part of lesson one.' },
      { h3: 'Free first lesson', p: 'A complete class with no charge and no card details, finishing with a recommended course and level.' }
    ],
    spec: { title: 'No Fredericton centre', p: 'Modern Age Coders has no office or classroom in Fredericton and claims none. Lessons are live on the internet, given by our teachers in India and timed to Fredericton&rsquo;s clock.' }
  },

  fees: {
    h2: 'Fees for Fredericton families',
    intro: 'Fees are displayed in your own currency, each marked with its currency code.',
    first: 'A full live class free of charge, finishing with a placement and a suggested course.',
    group: 'Eight live group sessions each month, among fifteen to twenty teens of similar level, for one monthly fee.',
    private: 'A single monthly fee for a private teacher at times that suit the family.',
    closer: 'Fredericton is charged the same fee as every other Canadian city. Payment only begins after the free class, when the family has settled on a course and times. Rules on missed sessions and holidays are on our pricing page.'
  },

  reviewsH2: 'Reviews on Google from parents and students',

  book: {
    h2: 'Reserve a free first lesson for a Fredericton teenager',
    intro: 'Let us know the grade, any French immersion, and what the student has coded so far. Beginners finish the first lesson with a working program; experienced students may start on the Fredericton amenity list or a timed contest problem we wrote.',
    success: 'Thank you. We will contact you shortly about a class for Fredericton.'
  },

  faq: {
    h2: 'Questions from Fredericton families',
    intro: 'What parents and teenagers in Fredericton ask us most.',
    items: [
      { q: 'Are your Fredericton classes online or in person?', a: 'Online and live. There is no Fredericton centre; teens join from home, in a group of fifteen to twenty or with a private teacher.' },
      { q: 'Are lessons in English or French?', a: 'English, with French vocabulary given for the main ideas. The CCC paper itself can be written in French, which CEMC allows.' },
      { q: 'Do your courses count as New Brunswick Computer Science 110?', a: 'No. We teach alongside school and do not grant provincial credits; Computer Science 110 and 120 credits come from the school.' },
      { q: 'Computer Science 110 mentions AI debugging tools. Do you teach them?', a: 'Yes, once a student can debug without them, and only using tools the student may legally use at their age. Contest practice stays AI-free.' },
      { q: 'Is my 14 year old allowed to use ChatGPT?', a: 'Fourteen is above OpenAI\'s minimum of 13, but until 18 a parent or guardian has to give permission. We involve it only after that yes.' },
      { q: 'Do teenagers use Claude in your classes?', a: 'No. Claude is restricted to adults of 18 and over by Anthropic\'s terms, so teen lessons leave it out.' },
      { q: 'When must a school order the CCC?', a: 'CEMC lists the ordering deadline as Thursday 11 February 2027, for a contest on Wednesday 17 February 2027. Students enter only through a school.' },
      { q: 'Is Fredericton one hour ahead of Toronto all year?', a: 'Yes. Both change clocks on the same dates, 1 November 2026 and 14 March 2027, so Atlantic time stays one hour ahead of Eastern.' },
      { q: 'When are classes for Fredericton students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Atlantic time.' },
      { q: 'Is the amenity data project real?', a: 'Yes. The amenity list comes straight from the City of Fredericton\'s open data, in both languages, under its open government licence, and students write the classifier on their own. No City endorsement is implied.' }
    ]
  },

  next: {
    eyebrow: 'More for Atlantic Canada',
    h2: 'Other pages for Fredericton students',
    html: 'For timing, read the <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones guide</a>. For university plans, see <a class="cg-inline-link" href="/computer-science-prerequisites-canadian-universities">computer science prerequisites at Canadian universities</a>. For contests, the <a class="cg-inline-link" href="/ccc-junior-guide">CCC Junior guide</a>, and the national <a class="cg-inline-link" href="/coding-classes-in-canada">Canada page</a> for the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Fredericton and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/canada-coding-curriculum-by-province', label: 'Curriculum by province' },
    { href: '/canada-math-and-coding-contest-calendar', label: 'Contest calendar' },
    { href: '/ai-and-machine-learning-classes-in-canada', label: 'AI and ML in Canada' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canada time zones' }
  ],

  personalityCss: `
.cg-root.cg-aptf .cg-hero h1 { font-weight: 650; letter-spacing: -0.02em; line-height: 1.08; }
.cg-root.cg-aptf .cg-capsule { border-left: 3px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent); padding: 0.6rem 0.9rem; }
.cg-root.cg-aptf .cg-eyebrow { letter-spacing: 0.09em; font-size: 0.76rem; text-transform: uppercase; font-weight: 600; }
.cg-root.cg-aptf .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-aptf .cg-table caption { text-align: left; font-weight: 600; font-style: italic; }
.cg-root.cg-aptf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aptf #project code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.78rem; line-height: 1.5; padding: 0.9rem 1rem; border-left: 4px double var(--cg-accent); }
.cg-root.cg-aptf .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-aptf .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'curriculum.nbed.ca: Computer Science 110 (coding aim, AI in the field, AI-assisted debugging indicator) and the digital and information technology subcluster list (Computer Science 110 and 120, Cybersecurity 120, Cybersecurity and Technical Support 110, Technology 9); Constitution Act, 1982 s.16(2) and Constitution Act, 1867 s.68 via facts-geo.md; CEMC CCC (2027 date, ordering deadline, level choice, English and French, school-based entry); CCC Online Grader rules on AI in the IDE; OpenAI Terms of Use (January 1, 2026); Anthropic Consumer Terms (Oct 8, 2025); facts-geo.md for 428/506 and Atlantic time (IANA tzdb 2026e).',
    localProject: 'City of Fredericton open data, Recreation Amenities Public View (Open Government License - City of Fredericton, version 1.0, commercial use allowed), 295 rows fetched with urllib on 22 October 2026, 283 tagged Summer (130) or Year-Round (153); our fredericton_bayes.py (python -I): leave-one-out naive Bayes with add-one smoothing; always Year-Round 54.1%; English descriptions 88.7%; French descriptions 85.2%; 32 English mistakes, mostly parking (7 and 4) and community school gyms (6); diamond and ball 25 each only on summer amenities, drop 31 only on summer, playground 57 year-round against 2 summer. Labelled as ours. Lesson family: text classification, naive Bayes, leave-one-out, comparing languages.',
    requiredMentions: [
      'Recreation Amenities',
      'Open Government License - City of Fredericton',
      'diamond&rdquo; and &ldquo;ball&rdquo; appear 25 times each, always on summer amenities',
      'Seven are summer parking areas called year-round',
      'The French descriptions give 85.2 per cent against 88.7 in English',
      'The English model makes 32 mistakes',
      'appears 31 times, every time on a summer amenity',
      'Cybersecurity and Technical Support 110',
      'AI‑assisted debugging tools',
      'New Brunswick numbers use the 506 area code and its overlay 428',
      'Thursday 11 February 2027'
    ],
    sources: [
      { claim: 'NB curriculum: Computer Science 110 description, AI scope and AI-assisted debugging indicator.', url: 'https://curriculum.nbed.ca/learning-areas/high-school-block/career-connected-learning/digital-and-information-technology/computer-science-110/' },
      { claim: 'NB curriculum: digital and information technology subcluster course list.', url: 'https://curriculum.nbed.ca/learning-areas/high-school-block/career-connected-learning/digital-and-information-technology/digital-production-120' },
      { claim: 'Constitution Act, 1982 s.16(2): New Brunswick official languages.', url: 'https://laws-lois.justice.gc.ca/eng/const/page-12.html' },
      { claim: 'Constitution Act, 1867 s.68: Fredericton as seat of government of New Brunswick.', url: 'https://laws-lois.justice.gc.ca/eng/const/page-2.html' },
      { claim: 'CEMC CCC page: 2027 date, ordering deadline, level choice.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'CEMC contests: CCC available in English and French.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'CEMC how contests work: participation through a school.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'CCC Online Grader rules: generative AI and AI tools in an IDE forbidden.', url: 'https://cccgrader.com/rules.pdf' },
      { claim: 'OpenAI Terms of Use: minimum age 13 and parent or guardian permission under 18.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Anthropic Consumer Terms: users must be at least 18.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'City of Fredericton: Recreation Amenities Public View item.', url: 'https://www.arcgis.com/home/item.html?id=0dcaf00b5ef14eb780903ce767204f0e' },
      { claim: 'City of Fredericton Open Government License, version 1.0 (hub page item): commercial use, based on OGL Canada, non-endorsement.', url: 'https://www.arcgis.com/sharing/rest/content/items/814c4f293308411aba1d6f035e08683b/data?f=json' },
      { claim: 'IANA tzdb northamerica: America/Moncton and America/Toronto offsets.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any claim about Fredericton schools, school districts or their results: none made, by the row instruction.',
      'Any Fredericton population or language statistics: StatCan not reachable live, so none printed.',
      'Grade levels for Computer Science 110 and 120: not asserted; the pages read do not state them.',
      'That every New Brunswick school offers these courses: not claimed.',
      'Crime, income and flood-sensor layers on the City portal: not used, by the brief.',
      'Street addresses from the amenity layer: not reproduced.',
      'That the model understands what drop-in means: refused; it only counts words.',
      'That our courses earn New Brunswick credits: refused; we do not grant provincial credits.',
      'Recommending Claude or any 18+ tool to a teenager: refused under Anthropic\'s terms.',
      'Any affiliation with CEMC, the New Brunswick education department, the City of Fredericton or any school district.',
      'CEMC contest fees: left out of the copy (currency-neutral page).'
    ]
  }
};
