'use strict';
// Maastricht: two thousand years of continuous habitation, and no city rights.
// Spine: every other page in this cluster quotes a city-rights year, and the
// one city that plainly is a city never received a charter. A field that is
// filled in everywhere else is not therefore the definition of the category.

module.exports = {
  slug: 'coding-classes-in-maastricht',
  code: 'mst',
  accent: '#015636',
  accentRationale: 'Maastricht: a deep river green for the Maas and the Sint-Pietersberg, set by the solver apart from Utrecht\'s and Eindhoven\'s greens',
  pageType: 'city',
  place: {
    name: 'Maastricht',
    eyebrow: 'Maastricht, Limburg',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Limburg' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Maastricht, Netherlands',
  title: 'Coding Classes in Maastricht | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Maastricht for ages 6 to 67, in the city and in Borgharen and Itteren. First lesson free, then one flat monthly fee.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in Maastricht, a city that never received city rights, built on what a definition can and cannot decide.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'complete-typescript-programming-masterclass-college',
  verifiedOn: '8 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Maastricht Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Maastricht, Borgharen and Itteren, taught in English.'
  },

  h1: 'Coding classes in Maastricht, a city that never received city rights',
  capsuleQ: 'What are the best coding classes in Maastricht?',
  capsule: 'Coding classes in Maastricht serve 126,026 people (Statistics Netherlands, 1 January 2026), of whom only 10.1 percent are under fifteen and 20.9 percent are between fifteen and twenty-five, the shape of a place where a university sits inside a small old town. Its history entry states plainly that Maastricht never held city rights in the sense of a charter, which is awkward, because every other city page in this series quotes a year for exactly that. A field that is filled in everywhere else is not the definition of anything. Modern Age Coders teaches live online in English here and in Borgharen and Itteren, ages 6 to 67, free first lesson, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Nearly every Dutch city can name the year it was granted its rights, and this cluster has quoted a dozen of them. Maastricht cannot, because it never received a charter at all: what 1229 records is a duke\'s permission to build a stone wall. Nobody doubts that Maastricht is a city, so the field that every other record has filled in turns out not to be what makes a city a city. Build a classifier on it and the oldest continuously inhabited place in the country comes back false.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Maastricht.',

  picks: {
    eyebrow: 'Course picks for Maastricht',
    h2: 'Four courses for a small city with a large international university',
    intro: 'A groep 5 child in Wyck, a teenager in Heer who wants typed code before the profielkeuze closes, a university student whose programme assumes data skills, and an adult in Borgharen returning to work: four doors into a compact city.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python, turtle drawings and a first program that learns a rule, in English, for the groep 5 to 8 child anywhere in the municipality.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Two years from a blank file to real projects, for the teenager whose school offers no route into programming.' },
      { course: 'complete-typescript-programming-masterclass-college', band: 'College and adult', note: 'Typed JavaScript, React and Node, for the student in an international programme who wants code that fails at compile time rather than in front of a marker.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Excel, SQL, Python and BI, for the working parent whose categories never quite fit the records they are applied to.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Maastricht today',
      h2: 'The fewest children of any city in this series, and the most students per resident but one',
      intro: 'The national register held 126,026 people on 1 January 2026, in 73,352 households averaging 1.68 people, on 55.79 square kilometres of land inside 60.12 of territory: a published 2,251 residents to the square kilometre. In 1995 the count was 118,454, so the city has gained 7,572 people in thirty-one years, a rise of 6.4 percent, the smallest in this series.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Ten percent under fifteen', p: 'Only 12,719 residents are under fifteen, while 26,390 are between fifteen and twenty-five and 28,459 are sixty-five or over. 42,398 households hold one person, 58 percent, the highest share on this site. A university city inside a small old town produces exactly this shape.' },
          { h3: 'Thirty-two primary schools, ten secondary', p: '32 primary establishments teach 7,556 pupils and 10 secondary establishments teach 6,252. The municipality counts 27,768 students at institutions here, and separately 4,490 residents in applied higher education and 11,600 at university level, which are different measures and are never added on this page.' },
          { h3: 'An international student body', p: 'The university reports 23,324 students and 4,654 full-time-equivalent staff for 2024, with 61 percent of students coming from abroad. Its own founding year is given as 1974 in one entry and 1976 in another, and both are printed here rather than reconciled.' }
        ] },
        { kind: 'spec', title: 'Two thousand years of habitation, and no charter', p: 'The city\'s history entry states that Maastricht never had city rights in the sense of a charter. What 1229 records is ducal permission to build a stone wall, which is not the same instrument. Archaeological evidence supports twenty centuries of continuous habitation, and the Sint-Servaasbrug, built between 1280 and 1298, is regarded as the oldest bridge in the country.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'One city, two villages, seven wijken and a river through the middle',
      intro: 'The statistics office counts a single woonplaats divided into 7 wijken and 44 buurten. The municipal entry names three places: the city itself at 122,013, Borgharen at 1,725 and Itteren at 935, on a date it does not give.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The old centre, west of the Maas', p: 'The Vrijthof, the churches, the shopping streets and the university buildings scattered among them. Dense, walkable and holding a large share of the 42,398 single-person households.' },
          { h3: 'Wyck and the east bank', p: 'Across the Sint-Servaasbrug, the station quarter and the nineteenth-century streets around it, the side most visitors arrive on and the side the trains from Germany and Belgium reach first.' },
          { h3: 'Heer, Amby and the eastern districts', p: 'The residential districts out towards the Belgian border, where most of the 12,719 under-fifteens live and where the primary schools are fullest.' },
          { h3: 'The southern side and the Sint-Pietersberg', p: 'The slopes towards the plateau, with its hundreds of kilometres of tunnel systems in the marl beneath. Quiet residential ground and the edge of the built city.' },
          { h3: 'Borgharen, 1,725', p: 'North along the Maas, a village inside the municipality with its own school and its own name, and a genuine journey into the centre on a winter evening.' },
          { h3: 'Itteren, 935', p: 'The smaller of the two villages, further north between the river and the canal. A place where a coding club will not form locally and where the class arrives through the connection instead.' }
        ] },
        { kind: 'p', text: 'The class reaches the city and both villages at one hour and one fee, and stage rather than address decides which group a learner joins.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure and its source, including the sentence that undoes a category',
      intro: 'The national count, the municipal entry, the history entry, the university, the bridge and the treaty.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands, 1 January 2026: 126,026 residents; 73,352 households averaging 1.68 people, 42,398 of them single-person, 58 percent; 12,719 under fifteen; 26,390 aged fifteen to twenty-five; 31,074 aged twenty-five to forty-five; 27,384 aged forty-five to sixty-five; 28,459 aged sixty-five and over; 32 primary establishments with 7,556 pupils and 10 secondary with 6,252; 27,768 students at institutions here; 4,490 residents in applied higher education and 11,600 at university level; total area 6,012 hectares, land 5,579; density 2,251; one woonplaats, 7 wijken and 44 buurten; 118,454 residents in 1995, a rise of 7,572.' },
          { h3: 'The municipality, described', p: 'Its own entry: 126,017 residents on 1 January 2026, nine fewer than the national figure for the same date, both kept; 60.12 square kilometres, 55.99 of land and 4.13 of water, against 55.79 of land nationally, both kept; mayor Wim Hillenaar since 2023; in Limburg, on both banks of the Maas; places Maastricht 122,013, Borgharen 1,725 and Itteren 935, with no date given for those three.' },
          { h3: 'The sentence about city rights', p: 'The history entry states that Maastricht never had city rights in the sense of a charter. It records 1229 as ducal permission to build a stone wall, which is a different instrument. A year of 1284 circulates in connection with a joint-governance treaty; that attribution was not confirmed at a source read here and is not asserted on this page.' },
          { h3: 'The claim to age', p: 'The municipal entry says Maastricht is among the places that call themselves the oldest city in the Netherlands, on the basis that archaeological excavation shows the city has been continuously inhabited for twenty centuries. The competing claims of other towns are argued on another page in this series and are not re-argued here.' },
          { h3: 'The university and the bridge', p: 'The university reports 23,324 students and 4,654 full-time-equivalent staff for 2024, with 61 percent of students from abroad; one entry says the institution started in 1974 and another gives 1976. The Sint-Servaasbrug was built between 1280 and 1298, had nine arches and has had seven since works in 1932 to 1934, and is regarded as the oldest bridge in the Netherlands.' },
          { h3: 'The treaty', p: 'The Treaty of Maastricht was signed on 7 February 1992 in the Statenzaal of the Gouvernement aan de Maas by twelve signatories and entered into force on 1 November 1993.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, the university or any school named here and claims none. The two founding years for the university are both printed because two sources give two answers, and choosing between them is not this page\'s job.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Build the classifier that calls Maastricht not a city, then work out what went wrong',
      intro: 'One field, a dozen records that have it, one record that does not, and a category that was never defined by the field in the first place.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Use the field you have', p: 'Every other city page in this cluster carries a year of city rights: 1185, 1230, 1233, 1245, 1246, 1254, 1259, 1266, 1343, 1809 and more. The obvious classifier writes itself: a place is a city if it has a year in that column. It is simple, it is fast, and on this dataset it is almost always right.' },
          { h3: '2. Run it on the awkward case', p: 'Maastricht has no year, because it never received a charter. The classifier returns false for a place with 126,026 residents, two thousand years of continuous habitation, a university and the oldest bridge in the country. The code has done exactly what it was told, and what it was told was wrong.' },
          { h3: '3. Separate the correlate from the definition', p: 'City rights are strongly associated with being a city, which is why the field looks definitional and why it works on almost every row. Association is not definition: a charter is one historical route into the category and not the category itself. The learner rewrites the rule so that the field becomes evidence rather than the test, and immediately has to decide what the test actually is.' }
        ] },
        { kind: 'table', caption: 'What the field says, and what is true', head: ['Place', 'City rights year in the record', 'Classifier verdict', 'A city?'], rows: [
          ['Most cities in this cluster', 'present, from 1185 onward', 'city', 'yes, correctly'],
          ['Maastricht', 'none, no charter was ever issued', 'not a city', 'yes, incorrectly rejected'],
          ['A large village with no charter', 'none', 'not a city', 'correct, but for the wrong reason'],
          ['A tiny place granted rights and long since shrunk', 'present', 'city', 'the same rule failing the other way']
        ] },
        { kind: 'callout', h3: 'A column that is almost always filled in looks like a definition and is not', p: 'This is how most classification goes wrong in practice. Somebody needs to sort records into a category, the data offers a field that correlates strongly with it, and the field becomes the rule because it is there. Accuracy on the available rows is high, which is precisely what stops anybody from questioning it, and the failures land on the cases that are unusual for reasons the field cannot see. Two habits prevent it. Ask what the category actually means before choosing a feature to represent it, and write down the answer, even when it is awkward. Then hunt deliberately for a member of the category that lacks the feature, because one such case tells you more about a rule than a thousand that fit. Maastricht is that case, sitting inside a cluster of pages that had been quoting the field for weeks. The rows above use the years published on the pages of this series and the history entry named in the evidence for this one.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for turning a category into a rule',
      intro: 'Active customer, qualified lead, senior employee, at-risk pupil, eligible household: every one of these gets operationalised as whatever column happens to exist. Practised on a city with no charter.',
      body: [
        { kind: 'table', caption: 'When a field is about to become a definition', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Define before you measure', 'Write the category in words before choosing a field for it', 'A rule chosen because the data was handy', 'Something to test the field against'],
          ['Name the correlate', 'Say out loud that the field stands in for the concept', 'A proxy quietly promoted to a definition', 'A rule you can argue about'],
          ['Hunt the counter-example', 'Look for a clear member of the category that lacks the feature', 'High accuracy hiding a broken rule', 'The failure mode, before production finds it'],
          ['Check both directions', 'Also look for a non-member that has the feature', 'A one-sided test', 'The full picture of where the rule fails'],
          ['Keep the field as evidence', 'Let the column inform the decision rather than make it', 'Automated rejection of the awkward case', 'A rule that can handle an exception']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A rule that says a bird is anything that flies. The class tests it: a bat flies and is not a bird, a penguin is a bird and does not fly. Two counter-examples, one in each direction, and the children have learned more about definitions than a lesson on definitions would teach.' },
          { h3: 'For teenagers', p: 'The city-rights classifier in Python over the records in this series, an accuracy score that looks excellent, and then the one row that breaks it. The stretch: propose three alternative rules, test each against the same awkward case, and say what data you would need to settle it.' },
          { h3: 'For adults', p: 'The same audit on a rule at work: who counts as active, senior, at risk or eligible. Adults almost always find a definition that began as a convenient column and has since been quoted in decisions nobody revisits.' }
        ] },
        { kind: 'p', text: 'The population, household, area, school, university, bridge and treaty figures come from the offices and entries named beside them. The city-rights years used in the classifier are those published on the other pages of this series, and the statement that Maastricht never received a charter is quoted from the history entry rather than inferred from the absence of a date.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From bats and penguins to a rule that keeps its evidence separate from its test',
    intro: 'The starting rung is decided in the free hour, and neither the wijk nor the village enters into it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Is a bat a bird?', p: 'Children break a rule from both sides and see why definitions need care.', courses: ['kids-coding-blocks-masterclass', 'python-ai-kids-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Rules with exceptions', p: 'Learners write a test, find a case it gets wrong, and decide what to change.', courses: ['maths-through-coding', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 14 to 18', h3: 'Features against concepts', p: 'Teenagers build the classifier, score it, break it deliberately and propose alternatives.', courses: ['python-complete-masterclass-teens', 'complete-typescript-programming-masterclass-college'] },
      { band: 'Ages 18 to 67', h3: 'Definitions at work', p: 'Adults trace a working rule back to the column it was built on and test it from both sides.', courses: ['data-analysis-mastery-course-college', 'ai-ml-masterclass-complete-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will give you a city-rights year for almost anywhere. Why should a child in Maastricht learn what an empty field means?',
    intro: 'Because a model trained on records where the field is nearly always present will treat its absence as a defect rather than as information.',
    p1: 'Ask a tool for the year Maastricht received city rights and you may well get a date, because dates like 1229 and 1284 sit near the question in the sources and one of them will look like an answer. The history entry says something more specific and less convenient: no charter was ever issued. That is not a gap in the record, it is the record, and the difference between a missing value and a value of none is exactly the sort of distinction that gets flattened when text becomes a table.',
    p2: 'So the learner builds the classifier and then goes hunting for the row that breaks it. That is the whole exercise, and it is closer to what professional work actually consists of than any amount of syntax: choosing how to represent a concept, discovering the representation is wrong at the edges, and deciding what to do about it. A fourteen-year-old in Wyck who has seen a rule reject their own city will look for the awkward case in every rule they meet afterwards. Tools will keep filling fields confidently. Deciding what a category means is not a thing they can be asked to do for you.',
    closer: 'The case for a Maastricht child learning to code in 2026 is therefore not about medieval charters. It is that categories get turned into rules by whatever column is available, that the rules are usually right and fail on the interesting cases, and that a city with two thousand years of habitation and no city rights is the best possible place to learn it.',
    blogAnchor: 'why writing code still repays a child in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a small city with two villages and three borders nearby',
    intro: 'Maastricht is compact and Belgium is minutes away, but Itteren and Borgharen are still a drive on a dark evening and the city\'s own schools are spread across both banks. The lesson removes the journey entirely.',
    cells: [
      { h3: 'No bridge and no border', p: 'The class runs at the kitchen table in Heer, Wyck or Borgharen at one fixed hour a week, whatever the Maas is doing.' },
      { h3: 'English throughout, Dutch school words kept', p: 'Teaching is in English, which the 61 percent of students from abroad already work in. Groep, havo, vwo and profielkeuze stay Dutch because those are the words on the timetable.' },
      { h3: 'What comes out of the first hour', p: 'Evidence of the real level, a course chosen on that evidence, and a slot in the week, arranged without payment details.' },
      { h3: 'Ability sets the group', p: 'A learner in Itteren and a learner in the centre work together when they are at the same stage, and separately when they are not.' },
      { h3: 'Twice weekly, on the southern calendar', p: 'Two lessons a week at one repeating slot, eight in most months. Maastricht takes its holidays with regio Zuid along with the rest of Limburg, and weeks away are written in before the slot is fixed.' },
      { h3: 'Three and a half hours, or four and a half', p: 'The Dutch clock changes twice a year and the Indian one does not, so the gap to the teacher depends on the season. Late afternoon, early evening and the whole weekend suit both ends.' }
    ],
    spec: { title: 'The fewest children of any city on this site', p: 'Only 12,719 residents are under fifteen, 10.1 percent, against 26,390 aged fifteen to twenty-five. A child here is in a smaller cohort than almost anywhere in the country, and a group of five to ten drawn from across the world rather than from one street is a different proposition from whatever the local school can assemble.' }
  },

  fees: {
    h2: 'The fee, in dollars, in the city and both villages',
    intro: 'On the page rather than kept for a phone call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'A single international rate applies, quoted in dollars and never in euros, so Itteren is charged exactly what the Vrijthof is. Payment follows the free lesson rather than preceding it and goes over WhatsApp once a course and a time are agreed. Pausing, changing plan and missing a week are set out on the pricing page.'
  },

  reviewsH2: 'Six families, in the words they left on Google',

  book: {
    h2: 'Send the level; the wijk can wait',
    intro: 'The first task might be a rule that says a bird is anything that flies, a classifier that rejects your own city, or a definition at work that began as whichever column happened to exist.',
    success: 'Thank you. Your Maastricht class request has been sent.'
  },

  faq: {
    h2: 'Maastricht coding class questions',
    intro: 'The city, its villages, its record, the teaching and the terms.',
    items: [
      { q: 'Did Maastricht really never get city rights?', a: 'That is what its history entry says: Maastricht never had city rights in the sense of a charter. The year 1229 records a duke\'s permission to build a stone wall, which is a different instrument, and a year of 1284 circulates in connection with a joint-governance treaty without being confirmed at any source read here. Since nobody disputes that Maastricht is a city, the field that almost every other city record carries turns out not to define the category, and building the classifier that gets this wrong is the project on this page.' },
      { q: 'Is Maastricht the oldest city in the Netherlands?', a: 'Its entry says the city is among those that make the claim, on the basis of archaeological evidence for twenty centuries of continuous habitation. Other towns claim the title on other grounds, and that argument is set out in full on the Nijmegen page in this series rather than repeated here.' },
      { q: 'Which places does the class cover?', a: 'The whole municipality: the city itself, given as 122,013 in its entry, plus Borgharen at 1,725 and Itteren at 935. The statistics office treats the municipality as a single woonplaats with 7 wijken and 44 buurten.' },
      { q: 'Is any of this taught in Dutch?', a: 'No. Every lesson runs in English, which suits a city where 61 percent of the university\'s students come from abroad. The Dutch school words are kept as they are, so groep, havo, vwo and profielkeuze are spoken as a child hears them, but no Dutch-language version of the course exists.' },
      { q: 'What time are classes for a family in Maastricht?', a: 'The teacher is three and a half hours ahead under Dutch summer time and four and a half in winter, because the Indian clock does not change. The workable window runs from the end of the school day to mid-evening, with both weekend days open, and one repeating slot is agreed in the free lesson.' },
      { q: 'When was the university founded?', a: 'Two sources give two answers. One entry says the institution started in 1974 and another gives a founding year of 1976. This page prints both rather than choosing. For 2024 the university reports 23,324 students and 4,654 full-time-equivalent staff, with 61 percent of students from abroad.' },
      { q: 'What is in the free lesson?', a: 'The teacher finds the edge of what the learner can already do and sets a single task just past it. A child might test the rule that a bird is anything that flies. A teenager builds a classifier and hunts for the row that breaks it. An adult brings a working definition from their own organisation. The hour ends with a course, a rung, a weekly time and a dollar figure, and nothing has been charged.' },
      { q: 'Is there a Modern Age Coders classroom in Maastricht?', a: 'No, and none is claimed near the Vrijthof, in Wyck or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Maastricht coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Maastricht group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or wijk. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'North up the Maas, out to the province, and up to the country',
    html: 'Maastricht sits in <a class="cg-inline-link" href="/coding-classes-in-limburg">Limburg</a>, whose page is about a highest point that depends on what you count as the country; north up the Maas is <a class="cg-inline-link" href="/coding-classes-in-nijmegen">Nijmegen</a>, where the argument about the oldest city is set out in full. The parent of the whole series is the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and for machine learning rather than software there are <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> and the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-limburg', label: 'Limburg' },
    { href: '/coding-classes-in-nijmegen', label: 'Nijmegen' }
  ],

  personalityCss: `
.cg-root.cg-mst .cg-hero-grid { align-items: center; gap: clamp(1.7rem, 4.05vw, 3.1rem); }
.cg-root.cg-mst .cg-hero h1 { font-weight: 500; letter-spacing: -0.008em; line-height: 1.14; }
.cg-root.cg-mst .cg-capsule { border-left-width: 4px; border-left-style: solid; border-bottom: 2px solid var(--cg-accent-soft); padding-left: 1.45rem; padding-bottom: 0.55rem; }
.cg-root.cg-mst .cg-eyebrow { letter-spacing: 0.125em; font-weight: 600; }
.cg-root.cg-mst .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-mst .cg-grid-3 { gap: clamp(1.2rem, 2.45vw, 1.9rem); }
.cg-root.cg-mst .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1.15rem; }
.cg-root.cg-mst .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mst .cg-callout { border-left-width: 5px; border-left-style: double; }
`,

  dossier: {
    curriculumAuthority: 'City and municipality of Maastricht, Limburg: 126,026 residents (CBS 1 January 2026), the slowest-growing in this series at 6.4 percent since 1995; 32 primary establishments (7,556 pupils) and 10 secondary (6,252); 27,768 students at institutions here. Lowest under-15 share in this series at 10.1 percent and highest single-person household share at 58 percent. Places: the city, Borgharen, Itteren. Regio Zuid holidays with the rest of Limburg. The city page argues from category definition; the province page owns the highest-point scope question and Nijmegen owns the oldest-city criterion table.',
    localProject: 'A column that is almost always filled in looks like a definition and is not. Every other city page in this cluster carries a city-rights year, but the history entry for Maastricht states that the city never had city rights in the sense of a charter: 1229 records ducal permission to build a stone wall, a different instrument. A classifier that treats the presence of a city-rights year as the test therefore rejects a place with 126,026 residents, twenty centuries of continuous habitation and the oldest bridge in the country. The learner scores the rule, finds the counter-example, and separates a strong correlate from a definition, then hunts a failure in the other direction as well. Distinct from the label-versus-contents trap (Den Bosch, where a field held a value its name did not describe) and from the criterion trap (Nijmegen, where several tests each returned an answer): here the field is filled correctly wherever it exists and the error is inferring category membership from its presence. The absence of a charter is quoted from the source, not inferred from a missing date.',
    requiredMentions: [
      '126,026',
      '73,352',
      '42,398',
      '118,454',
      '7,556',
      '6,252',
      '27,768',
      'Borgharen',
      'Itteren',
      'Sint-Servaasbrug',
      'Hillenaar',
      '7 February 1992',
      'Sint-Pietersberg',
      '23,324'
    ],
    sources: [
      { claim: 'Maastricht 126,026 residents on 1 January 2026 (CBS); 73,352 households averaging 1.68, 42,398 single-person (58 percent); 12,719 aged 0 to 15; 26,390 aged 15 to 25; 31,074 aged 25 to 45; 27,384 aged 45 to 65; 28,459 aged 65 and over; total area 6,012 ha, land 5,579 ha; density 2,251; 32 primary establishments (7,556 pupils) and 10 secondary (6,252); 27,768 students at institutions in the municipality; HBO 4,490 and WO 11,600; one woonplaats, 7 wijken and 44 buurten; 118,454 in 1995, a rise of 7,572 (6.4 percent).', url: 'https://allecijfers.nl/gemeente/maastricht/' },
      { claim: 'Maastricht 126,017 residents on 1 January 2026; 60.12 km2 (55.99 land, 4.13 water); mayor Wim Hillenaar (CDA) since 2023; in Limburg on both banks of the Maas; places Maastricht 122,013, Borgharen 1,725 and Itteren 935; Maastricht is among the cities that call themselves the oldest city of the Netherlands, on the basis that archaeological excavation shows twenty centuries of continuous habitation; the Sint-Pietersberg holds tunnel systems hundreds of kilometres long; the university started in 1974 as the Rijksuniversiteit Limburg.', url: 'https://nl.wikipedia.org/wiki/Maastricht' },
      { claim: 'Maastricht never had city rights in the sense of a charter; 1229 records ducal permission to build a stone wall rather than a grant of city rights.', url: 'https://nl.wikipedia.org/wiki/Geschiedenis_van_Maastricht' },
      { claim: 'Maastricht University: founding year 1976; 23,324 students and 4,654 fte staff in 2024; 61 percent of students from abroad.', url: 'https://nl.wikipedia.org/wiki/Universiteit_Maastricht' },
      { claim: 'The Sint-Servaasbrug was built between 1280 and 1298, had nine arches and has had seven since works in 1932 to 1934, and is regarded as the oldest bridge in the Netherlands.', url: 'https://nl.wikipedia.org/wiki/Sint-Servaasbrug' },
      { claim: 'The Treaty of Maastricht was signed on 7 February 1992 in the Statenzaal of the Gouvernement aan de Maas by twelve signatories and entered into force on 1 November 1993.', url: 'https://nl.wikipedia.org/wiki/Verdrag_van_Maastricht_(1992)' },
      { claim: 'School holiday regions: regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'A city-rights year of 1284 for Maastricht. The attribution to a joint-governance treaty was not confirmed at any source read here and is explicitly not asserted.',
      'A single founding year for the university. One entry gives 1974 and another 1976; both are printed.',
      'A date for the three place populations of 122,013, 1,725 and 935. The entry gives none and the page says so.',
      'A verdict on which Dutch town is oldest. That argument belongs to the Nijmegen page and is referred to rather than repeated.',
      'A length for the Sint-Pietersberg tunnel systems. The source says hundreds of kilometres and the page keeps the vagueness rather than inventing a figure.',
      'Anything the Limburg page owns: the Vaalserberg, the 31 municipalities and the flat population since 1995 for the province.'
    ]
  }
};
