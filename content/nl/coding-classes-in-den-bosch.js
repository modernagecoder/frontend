'use strict';
// 's-Hertogenbosch: capital of Noord-Brabant, fourth city of the province, and
// the birthplace and burial place of Jheronimus Bosch. Spine: one encyclopaedia
// records him as buried on 8 August 1516 and dead on 9 August 1516, which no
// single-field check can catch, because the fault is between the fields.

module.exports = {
  slug: 'coding-classes-in-den-bosch',
  code: 'dbo',
  accent: '#335A00',
  accentRationale: 'Den Bosch: a deep Brabant green for the wooded ducal domain the city is named after, placed by the solver clear of Amstelveen\'s green and Nijmegen\'s olive',
  pageType: 'city',
  place: {
    name: '’s-Hertogenbosch',
    eyebrow: '’s-Hertogenbosch, Noord-Brabant',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Noord-Brabant' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: '’s-Hertogenbosch, Netherlands',
  title: 'Coding Classes in Den Bosch | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Den Bosch for ages 6 to 67, in Rosmalen, Empel, Nuland and Vinkel. First lesson free, then one flat monthly fee.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in Den Bosch, capital of Noord-Brabant, built on a record that has a painter buried the day before he died.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Den Bosch Learners',
    description: 'Ability-placed online coding, Python, AI and mathematics for children, teenagers and adults in ’s-Hertogenbosch, Rosmalen, Nuland and Vinkel, taught in English.'
  },

  h1: 'Coding classes in Den Bosch, where the record has a painter buried the day before he died',
  capsuleQ: 'What are the best coding classes in Den Bosch?',
  capsule: 'Coding classes in Den Bosch serve 162,295 people (Statistics Netherlands, 1 January 2026), the capital of Noord-Brabant and its fourth city, in a municipality that also holds Rosmalen, Nuland and Vinkel. The city\'s most famous son, Jheronimus Bosch, appears in one encyclopaedia with a death date of 9 August 1516 and a burial date of 8 August 1516, which is impossible, and no check on either field alone would ever notice. Modern Age Coders teaches live online in English across the municipality for anyone aged 6 to 67, giving the first lesson free and then charging USD 100 a month for a group of five to ten or USD 150 for one-to-one.',
  lead: 'Two dates sit in one record about a painter from this city. He died on 9 August 1516. He was buried on 8 August 1516. Both are real dates, both are correctly formatted, and every validator that checks fields one at a time will pass them. The fault lies in the relationship, and the reason is worth more than the error: the day of his death was never written down, only the day of his funeral, so somebody put the funeral into the field marked died. A child who has seen that once will check the relationships between columns for the rest of their working life.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Den Bosch.',

  picks: {
    eyebrow: 'Course picks for Den Bosch',
    h2: 'Four courses for the capital of the province with the most town halls',
    intro: 'A groep 5 child in Rosmalen, a teenager in Empel who wants two years of Python rather than one term of it, a student at one of the applied academies here, and a parent in Nuland whose systems disagree with each other: four doors into one city.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python, turtle drawings and a first program that learns a rule, in English, for the groep 5 to 8 child in Vinkel or Engelen.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Two years from a blank file to real projects, for the teenager whose school lists informatica in the prospectus and not on the timetable.' },
      { course: 'mysql-database-complete-masterclass-college', band: 'College and adult', note: 'Design, keys and constraints done properly, for the student or working adult who has inherited a schema that lets impossible rows in.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Excel, Sheets and Power BI with AI, for the parent whose weekly figures come from two systems that describe the same thing differently.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Den Bosch today',
      h2: 'The provincial capital, fourth by size, and nine very large secondary schools',
      intro: 'The national register held 162,295 people on 1 January 2026, in 77,843 households averaging 2.04 people, on 109.48 square kilometres of land inside 117.81 of territory: a published 1,475 residents to the square kilometre. In 1995 the count was 135,156, so the municipality has gained 27,139 people in thirty-one years, a rise of 20 percent.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'An evenly spread population', p: '23,314 residents are under fifteen and 18,345 are between fifteen and twenty-five; 46,129 are between twenty-five and forty-five, 42,007 between forty-five and sixty-five, and 32,500 are sixty-five or over. 32,360 households hold one person, 42 percent. The five age bands published for this municipality account for the whole of it, which is unusual enough to be worth saying.' },
          { h3: 'Nine secondary schools of a thousand each', p: '47 primary establishments teach 13,246 pupils, about 282 each, while 9 secondary establishments teach 9,112, about 1,012 each. That is the largest average secondary establishment of any city in this series, and it means a teenager here is one of a thousand rather than one of three hundred.' },
          { h3: 'Capital, but fourth', p: '’s-Hertogenbosch is the seat of Noord-Brabant and only its fourth city, behind Eindhoven, Tilburg and Breda. The municipality counts 17,559 students in higher education for 2026, alongside 4,260 residents in applied higher education and 1,530 at university level for 2025, which are different measures and are not added together here.' }
        ] },
        { kind: 'spec', title: 'A city named for a duke’s wood, chartered in 1185', p: 'City rights were granted in 1185 by Godfried the Third of Leuven. The Sint-Janskathedraal was built between about 1370 and about 1530, became a cathedral in 1559 and a basilica on 22 June 1929; its west tower stands at 73 metres and its crossing tower at 63. Under the streets runs the Binnendieze, once about twelve kilometres of watercourse and now 3,630 metres, of which 1,290 metres are still vaulted over.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Four woonplaatsen, fourteen wijken, and a city that grew by absorbing',
      intro: 'The statistics office counts 4 woonplaatsen, 14 wijken and 110 buurten. The municipality reached its present shape through mergers in 1933, 1971, 1996 and 2015, and the places that joined still carry their own names and their own schools.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '’s-Hertogenbosch, 112,850 in 2023', p: 'The city itself: the cathedral, the market, the station and the districts around them. Rather more than two thirds of the municipality lives here, and this is where the nine large secondary schools are.' },
          { h3: 'Rosmalen, 38,450 in 2023', p: 'East of the city and a separate municipality until 1996, now the second largest place by a distance. It has its own centre, its own primary schools and a population that would make it a substantial town anywhere else.' },
          { h3: 'Nuland, 4,660 in 2023', p: 'Further east on the road towards Oss, which joined in 2015 when the municipality of Maasdonk was dissolved. Village primary schools and a bus for everything after them.' },
          { h3: 'Vinkel, 2,795 in 2023', p: 'The other half of that 2015 arrival, south of Nuland. The smallest of the four woonplaatsen and the place where an after-school club of any kind is hardest to fill.' },
          { h3: 'Empel, Engelen and Bokhoven', p: 'North of the Maas and joined in 1971, these keep their village names inside the city. Engelen and Bokhoven sit right on the water, and the river is between them and the centre.' },
          { h3: 'Hintham, Maliskamp and Orthen', p: 'The smaller named districts around the edges of the city, some of them older than the streets that now surround them. None of these boundaries has ever decided which group a learner joins.' }
        ] },
        { kind: 'p', text: 'The lesson reaches all four woonplaatsen at one hour and one fee, and stage is the only thing that determines placement.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its office, and the two entries that disagree about a painter',
      intro: 'The national count, the municipal entry, the cathedral, the watercourse, and the record the project below rests on, quoted exactly.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands, provisional, 1 January 2026: 162,295 residents; 77,843 households for 2025 averaging 2.04 people, 32,360 of them single-person, 42 percent; 23,314 under fifteen; 18,345 aged fifteen to twenty-five; 46,129 aged twenty-five to forty-five; 42,007 aged forty-five to sixty-five; 32,500 aged sixty-five and over; 47 primary establishments with 13,246 pupils and 9 secondary with 9,112, both 2025; 17,559 students in higher education for 2026; 4,260 residents in applied higher education and 1,530 at university level for 2025; total area 11,781 hectares, land 10,948; density 1,475; 4 woonplaatsen, 14 wijken and 110 buurten; 135,156 residents in 1995, a rise of 27,139.' },
          { h3: 'The municipality, described', p: 'Its own entry: 162,272 residents on 1 January 2026, 23 fewer than the national figure for the same date, both kept; 117.81 square kilometres, 109.99 of land and 7.82 of water, against 109.48 of land nationally, both kept; mayor Jack Mikkers; capital of Noord-Brabant; woonplaatsen with 2023 populations ’s-Hertogenbosch 112,850, Rosmalen 38,450, Nuland 4,660 and Vinkel 2,795; mergers in 1933, 1971, 1996 and 2015; city rights in 1185 from Godfried the Third of Leuven.' },
          { h3: 'The painter, in the Dutch entry', p: 'Its infobox gives Jheronimus Bosch as born in ’s-Hertogenbosch in 1450 on the Julian calendar, died in ’s-Hertogenbosch on 9 August 1516, and with a burial or cremation date of 8 August 1516 on the Julian calendar. Its body text says that on 9 August of that year a funeral mass, an exequie, was held in his honour, and that he was buried in the part of the Sint-Janskerkhof where the rich lay.' },
          { h3: 'The painter, in the English entry', p: 'The same person, born circa 1450 with the exact date not determined, is recorded there as buried on 9 August 1516 at the age of 65 or 66, and its body text says a memorial funeral mass was held in the church of Saint John on 9 August of that year. The two entries therefore place the same documented event, the funeral mass, in two differently named fields.' },
          { h3: 'The cathedral', p: 'The Sint-Janskathedraal was built from about 1370 to about 1530 in Brabantine Gothic; it became a cathedral in 1559 and a basilica on 22 June 1929. The west tower is 73 metres and the crossing tower 63 metres.' },
          { h3: 'The Binnendieze', p: 'The collective name for the watercourses of the inner city. Originally about twelve kilometres, it now runs to 3,630 metres, of which 1,290 metres remain vaulted over. A restoration plan was adopted in 1971 and the work ran from about 1973 to 1998.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, the cathedral or any school named here and claims none. The Bosch dates are quoted exactly as the two entries give them, and this page does not decide which is right.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Buried before he died: build the checks that no single field can fail',
      intro: 'Three dates in one record, each of them valid, and a relationship between two of them that cannot be true.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Validate each field and pass', p: 'Born about 1450. Died 9 August 1516. Buried 8 August 1516. The learner writes the ordinary checks first: is each one a real date, is the year plausible, is the month between one and twelve. All three pass, and a great many production systems stop here.' },
          { h3: '2. Validate the relationships and fail', p: 'Then one line that compares fields rather than inspecting them: burial must not precede death. It fails by a single day. The learner adds the others that follow from the same idea: death must not precede birth, and an age at death must be non-negative. None of these can be expressed as a rule about one column.' },
          { h3: '3. Find why the impossible row exists', p: 'The reason is not carelessness. No source records the day Bosch died; what is recorded is the funeral mass held on 9 August 1516. One encyclopaedia put that date in the field named died and something else in the field named buried; the other put it in the field named buried and left died empty. The value migrated between labels, and only the relationship between fields shows it.' }
        ] },
        { kind: 'table', caption: 'One painter, two entries, and what each field claims', head: ['Field', 'Dutch entry', 'English entry', 'What the sources actually record'], rows: [
          ['Born', '1450, Julian', 'circa 1450, exact date not determined', 'a year, approximate in both'],
          ['Died', '9 August 1516', 'not given as a death date', 'no source read gives a day of death'],
          ['Buried', '8 August 1516, Julian', '9 August 1516', 'a funeral mass on 9 August 1516'],
          ['Age at death', 'not stated', '65 or 66', 'a range, because the birth year is approximate'],
          ['Burial before death?', 'yes, by one day', 'no, because died is absent', 'impossible in the first, avoided in the second']
        ] },
        { kind: 'callout', h3: 'A column name is a promise, and a missing value is where promises get broken', p: 'Every dataset has fields whose contents drifted away from their labels, and it almost always begins the same way: the value that was wanted did not exist, something close to it did, and a person put the close thing in rather than leave a blank. That is a defensible decision on the day and an invisible landmine afterwards, because the label keeps making the original promise to everybody who reads the column later. Two defences work. State a constraint between fields, not just within them, so that an impossible combination is rejected even when every part of it is valid. And when a proxy is used, record that it is one, in the data rather than in somebody\'s memory. A learner who has met the painter buried before he died will write the cross-field check into the next thing they build. The five rows above are quoted from the two entries as they stand, and this page takes no position on which of them is correct.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for records whose fields have to agree with each other',
      intro: 'Start and end dates, order and delivery, admission and discharge, contract and renewal, birth and death: the interesting errors in real data live between the columns rather than inside them. Practised on a record about a man from this city.',
      body: [
        { kind: 'table', caption: 'When each field is fine and the row is not', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Check the pairs', 'Write down every ordering that must hold between two fields', 'A burial dated before a death', 'Errors that single-field checks cannot see'],
          ['Reject, do not repair', 'Refuse the impossible row rather than quietly adjusting a date', 'A silent correction nobody knows about', 'A row somebody has to look at'],
          ['Allow a genuine blank', 'Let unknown be a value, so a proxy is never needed', 'A funeral date living in a death field', 'Fields that still mean what they say'],
          ['Mark every proxy', 'When a stand-in is used, record that fact beside it', 'A substitution that survives everyone who remembers it', 'A column a stranger can trust'],
          ['Re-check on import', 'Run the pair rules again whenever data arrives from elsewhere', 'Another system\'s conventions adopted wholesale', 'Two sources you can actually compare']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A card with three boxes: got up, ate breakfast, went to school. The children fill them in with times, then swap cards and hunt for anybody whose breakfast came before they got up. Each time on its own is a perfectly good time. Only the order is wrong, and finding it takes comparing two boxes rather than reading one.' },
          { h3: 'For teenagers', p: 'The record in Python with three date fields and a validator that reports which rule failed rather than just refusing. Then the harder part: add a genuine unknown that is not a date at all, make the checks handle it without crashing, and decide what the age at death should return when the birth year is approximate.' },
          { h3: 'For adults', p: 'The same pair rules on a table from work: order date against dispatch date, start against end, opened against closed. Adults very often find rows that passed every field check for years and are impossible on their face, and at least one column whose name no longer describes what is in it.' }
        ] },
        { kind: 'p', text: 'The population, household, area, school, cathedral and watercourse figures come from the offices and entries named beside them. The Bosch dates are quoted verbatim from the two encyclopaedia entries, the table sets them side by side without adjustment, and no date on this page has been corrected, averaged or inferred.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From breakfast before waking up to a validator that names the broken rule',
    intro: 'The starting rung is worked out in the free hour, and the woonplaats on the address has no bearing on it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Which came first?', p: 'Children hunt for an order that cannot be, using two boxes rather than one.', courses: ['kids-coding-blocks-masterclass', 'python-ai-kids-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Rules between fields', p: 'Learners write a comparison that catches what a field check misses.', courses: ['maths-through-coding', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 14 to 18', h3: 'Unknowns and constraints', p: 'Teenagers make unknown a real value and build a validator that says which rule broke.', courses: ['python-complete-masterclass-teens', 'mysql-mastery-for-teens'] },
      { band: 'Ages 18 to 67', h3: 'Pair rules at work', p: 'Adults apply ordering constraints to a live table and find the rows nobody has questioned.', courses: ['mysql-database-complete-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will read out both dates without blinking. Why should a child in Den Bosch learn to notice they cannot both be right?',
    intro: 'Because each date is valid on its own, and the contradiction only exists in the space between two fields.',
    p1: 'Ask a tool when Bosch died and when he was buried and it will tell you, sourced, and it may well give the ninth and the eighth without remarking on the order. Nothing about either value is wrong in isolation, and a model reading text is not running an ordering constraint over a schema. The check that catches this is not knowledge, it is a rule somebody decided to write, and rules like that get written by people who have once been caught out.',
    p2: 'That is what the learner practises. Writing the constraint is three lines; knowing to write it is the thing being taught, along with the habit of asking why an impossible row exists rather than just deleting it. In this case the reason is worth more than the fix: a value nobody recorded got filled in with the nearest thing available, and the field label went on making its original promise. A twelve-year-old in Rosmalen who has traced that will ask, at twenty-two, what a column actually contains rather than what it is called. Tools will keep getting better at retrieving values. Deciding which combinations of values are allowed stays a design decision.',
    closer: 'The case for a Den Bosch child learning to code in 2026 is therefore nothing to do with art history. It is that the costly errors in real records are relationships rather than values, that no amount of checking one column at a time will find them, and that a painter buried the day before he died is the clearest possible demonstration on the doorstep.',
    blogAnchor: 'the case for teaching a child to code while AI writes it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a city, a large town and two villages',
    intro: 'Rosmalen is a town in its own right, Nuland and Vinkel are out towards Oss, and Engelen and Bokhoven are on the far side of the water. Each of those is an evening journey the lesson does away with.',
    cells: [
      { h3: 'Nothing to travel to', p: 'The class runs at the kitchen table in Vinkel, Rosmalen or the centre at one fixed hour a week, in the dark months exactly as in the light ones.' },
      { h3: 'One language for teaching, another for school terms', p: 'The lesson is in English. Groep, havo, vwo and profielkeuze stay Dutch because a child has to recognise them on a timetable, and nothing is converted between the two.' },
      { h3: 'What the free hour settles', p: 'A piece of work that shows the true level, a course named from how it goes, and a weekly slot, none of which needs payment details.' },
      { h3: 'Stage sets the group', p: 'Two learners at the same point work together whether one is in Nuland and the other in the centre, and two at different points do not, however near they live.' },
      { h3: 'Twice weekly, on the southern calendar', p: 'Two lessons a week at a fixed time, eight in most months. School holidays here follow regio Zuid with the rest of Brabant, Limburg and Zeeland, and weeks away are written in before a slot is agreed.' },
      { h3: 'A gap that grows in winter', p: 'Only the Dutch clock moves, so the teacher is three and a half hours ahead across the summer months and four and a half across the winter ones. The window runs from the end of school into mid-evening, and both weekend days are open.' }
    ],
    spec: { title: 'Nine secondary schools, about a thousand pupils each', p: 'A teenager in this municipality is likely to be one of roughly a thousand in their building, which is the largest average of any city in this series. A group of five to ten at a fixed hour is a different proposition from a class of thirty, and for some learners that difference is the whole point.' }
  },

  fees: {
    h2: 'The fee, in dollars, for all four woonplaatsen',
    intro: 'Printed here so that nobody has to ask for it.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'A single international rate applies and it is quoted in dollars, never in euros, so a family in Vinkel is charged exactly what one in the centre is charged. Money is collected only after the free lesson has produced a course and a time, and it goes over WhatsApp. Pausing, changing plan and missing a week are set out on the pricing page.'
  },

  reviewsH2: 'Six families, in the words they left on Google',

  book: {
    h2: 'Give us the level; the woonplaats is optional',
    intro: 'The first task might be a card of three times with one of them out of order, a record in Python whose fields have to agree with each other, or a table at work where an order was dispatched before it was placed.',
    success: 'Thank you. Your Den Bosch class request has been sent.'
  },

  faq: {
    h2: 'Den Bosch coding class questions',
    intro: 'The city, its villages, its records, the teaching and the terms.',
    items: [
      { q: 'Why does this page say a painter was buried before he died?', a: 'Because that is what one encyclopaedia entry states. Its infobox gives Jheronimus Bosch a death date of 9 August 1516 and a burial date of 8 August 1516, and its body text says the funeral mass was held on 9 August. The English entry records the same event under a different label, giving 9 August 1516 as the burial and no death date at all. No source read here records the day he actually died. Building the check that catches an impossible pair of dates, and understanding why the row exists, is the project on this page.' },
      { q: 'Is it Den Bosch or ’s-Hertogenbosch?', a: 'Both. The formal name is ’s-Hertogenbosch and everybody says Den Bosch. This page uses the formal name for the municipality and the short one where it reads more naturally, and the address of the page uses the short one because that is what people search for.' },
      { q: 'Which places does the class cover?', a: 'The whole municipality: the city itself, Rosmalen, Nuland and Vinkel as the four woonplaatsen, plus Empel, Engelen, Bokhoven, Hintham, Maliskamp and Orthen. The statistics office counts 14 wijken and 110 buurten across all of it.' },
      { q: 'Is Den Bosch the largest city in Noord-Brabant?', a: 'No, the fourth. It is the provincial capital, with 162,295 residents on 1 January 2026, behind Eindhoven, Tilburg and Breda. Being the seat of a province and being its biggest city are separate things.' },
      { q: 'Is any of this taught in Dutch?', a: 'No. Every lesson runs in English. The Dutch words a school actually uses are left alone, so groep, havo, vwo and profielkeuze are spoken as the child hears them, but there is no Dutch-language version of the course.' },
      { q: 'What time are classes for a family in Den Bosch?', a: 'The Dutch clock changes twice a year and the Indian one never does, which puts the teacher three and a half hours ahead in the summer months and four and a half in the winter ones. The usable window runs from the end of the school day to mid-evening, with both weekend days open, and one repeating slot is fixed in the free lesson.' },
      { q: 'We live in Nuland or Vinkel. Does the class reach that far?', a: 'It reaches every address in the municipality at the same hour and the same fee. Nuland and Vinkel joined in 2015 and are small enough that an after-school club would struggle to fill, which is exactly the gap a live online class closes.' },
      { q: 'Is there a Modern Age Coders classroom in Den Bosch?', a: 'No, and none is claimed near the cathedral, in Rosmalen or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Den Bosch coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Den Bosch group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or woonplaats. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'South to the big three, out to the province, and up to the country',
    html: 'The three cities ahead of the capital all have pages: <a class="cg-inline-link" href="/coding-classes-in-eindhoven">Eindhoven</a>, <a class="cg-inline-link" href="/coding-classes-in-tilburg">Tilburg</a> and <a class="cg-inline-link" href="/coding-classes-in-breda">Breda</a>, and all four sit inside <a class="cg-inline-link" href="/coding-classes-in-noord-brabant">Noord-Brabant</a>, whose page counts the rings around a garden in Baarle. Above them is the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and for models rather than programs the doors are <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> and the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-noord-brabant', label: 'Noord-Brabant' },
    { href: '/coding-classes-in-tilburg', label: 'Tilburg' }
  ],

  personalityCss: `
.cg-root.cg-dbo .cg-hero-grid { align-items: center; gap: clamp(1.7rem, 4.1vw, 3.15rem); }
.cg-root.cg-dbo .cg-hero h1 { font-weight: 500; letter-spacing: -0.0095em; line-height: 1.12; }
.cg-root.cg-dbo .cg-capsule { border-left-width: 4px; border-left-style: solid; border-bottom: 3px solid var(--cg-accent-soft); padding-left: 1.5rem; padding-bottom: 0.5rem; }
.cg-root.cg-dbo .cg-eyebrow { letter-spacing: 0.115em; font-weight: 700; }
.cg-root.cg-dbo .cg-section-head h2 { max-width: 33ch; }
.cg-root.cg-dbo .cg-grid-3 { gap: clamp(1.2rem, 2.45vw, 1.9rem); }
.cg-root.cg-dbo .cg-ladder-col { border-top: 3px double var(--cg-accent); padding-top: 1.15rem; }
.cg-root.cg-dbo .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dbo .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'City and municipality of ’s-Hertogenbosch, capital of Noord-Brabant and its fourth city: 162,295 residents (CBS 1 January 2026); 47 primary establishments (13,246 pupils) and 9 secondary (9,112), both 2025, the largest average secondary establishment in this series at about 1,012; 17,559 students in higher education (2026). Four woonplaatsen: the city, Rosmalen, Nuland, Vinkel. City rights 1185. Regio Zuid holidays. The city page argues from cross-field validation in a historical record; the province page owns Baarle and Tilburg owns the wijk zoning.',
    localProject: 'A column name is a promise, and a missing value is where promises get broken. The Dutch encyclopaedia entry for Jheronimus Bosch gives a death date of 9 August 1516 and a burial date of 8 August 1516, so burial precedes death, while its body says the funeral mass was held on 9 August; the English entry records 9 August 1516 as the burial and gives no death date, with age at death as 65 or 66 because the birth year is approximate. No source read gives the day of death. Each field is individually valid, so only a constraint between fields catches the impossibility, and the underlying cause is a proxy value entered under a label that kept its original promise. Distinct from the transposed-coordinates trap (Masirah, where a single field is well formed but wrong) and from the range-and-calendar trap (Drenthe): here every value is correct in isolation and the fault is purely relational. Both entries are quoted verbatim and the page takes no position on which is right.',
    requiredMentions: [
      '162,295',
      '77,843',
      '32,360',
      '135,156',
      '13,246',
      '9,112',
      '17,559',
      'Rosmalen',
      'Nuland',
      'Vinkel',
      'Binnendieze',
      'Jack Mikkers',
      'Jheronimus Bosch',
      '9 August 1516'
    ],
    sources: [
      { claim: '’s-Hertogenbosch 162,295 residents on 1 January 2026 (CBS provisional); 77,843 households (2025) averaging 2.04, 32,360 single-person (42 percent); 23,314 aged 0 to 15; 18,345 aged 15 to 25; 46,129 aged 25 to 45; 42,007 aged 45 to 65; 32,500 aged 65 and over; total area 11,781 ha, land 10,948 ha; density 1,475; 47 primary establishments (13,246 pupils) and 9 secondary (9,112), both 2025; 17,559 students in higher education (2026); HBO 4,260 and WO 1,530 (2025); 4 woonplaatsen, 14 wijken and 110 buurten; 135,156 in 1995, a rise of 27,139 (20 percent).', url: 'https://allecijfers.nl/gemeente/den-bosch/' },
      { claim: '’s-Hertogenbosch 162,272 residents on 1 January 2026; 117.81 km2 (109.99 land, 7.82 water); density 1,475; mayor Jack Mikkers (VVD); provincial capital of Noord-Brabant; woonplaatsen with 2023 populations ’s-Hertogenbosch 112,850, Rosmalen 38,450, Nuland 4,660, Vinkel 2,795, plus Bokhoven, Empel, Engelen, Gewande, Hintham, Maliskamp and Orthen; mergers 1933 Cromvoirt and Deuteren, 1971 Empel en Meerwijk and Engelen, 1996 Rosmalen, 2015 Nuland and Vinkel from the former Maasdonk; city rights 1185 from Godfried III van Leuven.', url: 'https://nl.wikipedia.org/wiki/%27s-Hertogenbosch_(gemeente)' },
      { claim: 'Dutch entry for Jheronimus Bosch: infobox born ’s-Hertogenbosch 1450 (Julian); died ’s-Hertogenbosch 9 August 1516; burial or cremation date 8 August 1516 (Julian). Body text: on 9 August of that year an exequie, a funeral mass, was held in his honour, and he was buried in the part of the Sint-Janskerkhof where the rich lay.', url: 'https://nl.wikipedia.org/wiki/Jheronimus_Bosch' },
      { claim: 'English entry for Hieronymus Bosch: born circa 1450, the exact birth date not determined; recorded as buried on 9 August 1516, aged 65 to 66; a memorial funeral mass was held in the church of Saint John on 9 August of that year.', url: 'https://en.wikipedia.org/wiki/Hieronymus_Bosch' },
      { claim: 'Sint-Janskathedraal, ’s-Hertogenbosch: west tower 73 m, crossing tower 63 m; built about 1370 to about 1530 in Brabantine Gothic; cathedral from 1559; basilica from 22 June 1929.', url: 'https://nl.wikipedia.org/wiki/Sint-Janskathedraal_(%27s-Hertogenbosch)' },
      { claim: 'The Binnendieze is the collective name for the watercourses of the inner city of ’s-Hertogenbosch; originally about 12 km, now 3,630 m, of which 1,290 m remain vaulted over; a restoration plan was adopted in 1971 and the work ran from about 1973 to 1998; boat tours run on three routes.', url: 'https://nl.wikipedia.org/wiki/Binnendieze' },
      { claim: 'School holiday regions: regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'A verdict on the correct death or burial date for Jheronimus Bosch. Both entries are quoted as they stand and neither is corrected.',
      'A day of death for Bosch. No source read gives one; the page says so explicitly.',
      'An exact age at death. The English entry gives 65 or 66 and the page repeats the range rather than picking a number, because the birth year is approximate in both entries.',
      'Any reconciliation of the four 2023 woonplaats figures with the 2026 municipal total. The dates differ and no residual is computed.',
      'Anything the Noord-Brabant page owns: the Baarle enclaves and the 56 municipalities. Anything the Tilburg, Breda or Eindhoven pages own.'
    ]
  }
};
