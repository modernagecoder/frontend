'use strict';
// Ede: ten places on the western Veluwe, 318 square kilometres of land and
// almost no water. Spine: the national park inside it lies mostly in Ede and
// partly in Arnhem, and no source says how the area splits, so any database
// with one municipality field for the park is either wrong or lossy.

module.exports = {
  slug: 'coding-classes-in-ede',
  code: 'ede',
  accent: '#494C83',
  accentRationale: 'Ede: a heather blue-violet for the Veluwe in late summer, set by the solver apart from Amersfoort\'s survey navy and Breda\'s Nassau violet',
  pageType: 'city',
  place: {
    name: 'Ede',
    eyebrow: 'Ede, Gelderland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Gelderland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Ede, Netherlands',
  title: 'Coding Classes in Ede | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Ede for ages 6 to 67, in Bennekom, Lunteren, Otterlo, Harskamp and Wekerom. First lesson free, then one flat fee.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families across the ten places of Ede, built on a national park that belongs to two municipalities at once.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'game-development-masterclass-for-kids',
  verifiedOn: '8 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Ede Learners',
    description: 'Ability-placed online coding, Python, AI and mathematics for children, teenagers and adults in Ede, Bennekom, Lunteren, Otterlo, Harskamp, Wekerom and Ederveen, taught in English.'
  },

  h1: 'Coding classes in Ede, where the national park belongs to two municipalities and no source says in what proportion',
  capsuleQ: 'What are the best coding classes in Ede?',
  capsule: 'Coding classes in Ede serve 125,331 people (Statistics Netherlands, 1 January 2026) across ten places on 318 square kilometres of land, of which barely half a square kilometre is water. Its best-known feature, the national park, lies mostly in Ede and partly in Arnhem, and the sources that say so give no split. Any record with one municipality field for that park is therefore either incomplete or wrong, and the choice is a design decision rather than a fact. All ten places are taught by Modern Age Coders over a live connection, in English, to learners anywhere between 6 and 67 years old. The opening lesson carries no charge; the months that follow cost USD 100 in a group of five to ten and USD 150 for private tuition.',
  lead: 'Where is the Hoge Veluwe national park? Mostly in Ede and, in the words of its own entry, for a small part in the municipality of Arnhem. Every database that stores a location wants one answer to that question, and the honest answer is two, in a proportion nobody has published. Fill the field with Ede and Arnhem loses a piece of itself; fill it with both and every total that adds up municipalities counts the same heathland twice. A child who has met that once will look at every location column differently.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Ede.',

  picks: {
    eyebrow: 'Course picks for Ede',
    h2: 'Four courses for ten villages on the edge of the heath',
    intro: 'A groep 5 child in Lunteren who wants to make the game rather than play it, a teenager in Bennekom aiming at a technical profile, an adult in Ederveen retraining, and a parent in Otterlo whose records have to belong to two places at once: four doors into a very wide municipality.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Ages 7 to 12', note: 'Scratch, Roblox and Minecraft into real games, in English, for the groep 4 to 8 child in Harskamp or Wekerom as much as in the town.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Two years from a blank file to real projects, for the teenager whose school offers no timetabled route into programming.' },
      { course: 'mysql-database-complete-masterclass-college', band: 'College and adult', note: 'Design, keys and relationships done properly, for anyone who has had to force a many-to-many fact into a single column.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Excel, Sheets and Power BI with AI, for the working parent whose totals double-count whenever a record belongs to two categories.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Ede today',
      h2: 'The most children of any city in this series, and almost no water',
      intro: 'The national register held 125,331 people on 1 January 2026, in 53,071 households averaging 2.3 people, on 318.15 square kilometres of land inside 318.62 of territory. Barely half a square kilometre of the municipality is water, a share of about 0.15 percent, which is remarkable in this country. In 1995 the count was 99,158, so Ede has gained 26,173 people in thirty-one years, a rise of 26 percent.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Seventeen percent under fifteen', p: '21,832 residents are under fifteen, the highest share of any city in this series, and 15,787 are between fifteen and twenty-five; 32,335 are between twenty-five and forty-five, 30,364 between forty-five and sixty-five, and 25,013 are sixty-five or over. Only 19,056 households hold one person, 36 percent, among the lowest here.' },
          { h3: 'Fifty-six primary schools, nine secondary', p: '56 primary establishments teach 11,913 pupils, about 213 each, while 9 secondary establishments teach 5,401, about 600 each. Ten separate places need primary schools in most of them; the teenagers concentrate into a handful of buildings and a good many travel out of the municipality altogether.' },
          { h3: 'Wide, dry and thinly settled', p: 'The published density is 390 to the square kilometre on the national figures and 394 on the municipal entry, because much of the 318 square kilometres is Veluwe rather than housing: heath, forest, former military ground and the national park.' }
        ] },
        { kind: 'spec', title: 'Seven barracks, closed in one year', p: 'Seven barracks were built in Ede between 1904 and 1940 and grouped into Ede-West and Ede-Oost; all of them closed in 2010. The ground has been redeveloped under the name Veluwse Poort, and in early 2019 the municipality and the province agreed to build the World Food Center there. A municipality that lost an entire industry in a single year is a good place to argue for a skill that is still being invented.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Ten places, from a town of 79,435 to a hamlet of 490',
      intro: 'The statistics office counts 10 woonplaatsen, 17 wijken and 71 buurten. The municipal entry publishes 2023 populations for eight of the ten, and this page lists exactly those eight.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Ede, 79,435 in 2023', p: 'The town itself, with the station, the old barracks ground now being rebuilt, and most of the nine secondary establishments. Roughly two thirds of the municipality lives here.' },
          { h3: 'Bennekom, 15,380 in 2023', p: 'South towards Wageningen, the second place by a wide margin, with its own centre and schools and a population that would make it a substantial town in a smaller province.' },
          { h3: 'Lunteren, 13,875 in 2023', p: 'North-west on the edge of the heath, the third place, big enough to have its own everything and far enough from the town that it never thinks of itself as a district.' },
          { h3: 'Harskamp, 3,955, and Wekerom, 2,885', p: 'North on the Veluwe proper, in 2023. Village primary schools, a bus for secondary, and no realistic prospect of a coding club forming from the local children alone.' },
          { h3: 'Ederveen, 3,750, and De Klomp, 490', p: 'West towards Veenendaal, in 2023. De Klomp is the smallest of the eight published places and sits by the railway line rather than around a square.' },
          { h3: 'Otterlo, 2,180 in 2023', p: 'East, at the edge of the national park, with the Kröller-Müller Museum inside the park nearby. The place that makes the point of this page: what is at Otterlo is partly not in Ede at all.' }
        ] },
        { kind: 'p', text: 'All ten places get the same class at the same hour and the same fee, and what a learner can already do decides which group they join.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure and its source, and the sentence that splits a park in two',
      intro: 'The national count, the municipal entry, the park, the barracks, and the two areas the park itself is given.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands, 1 January 2026: 125,331 residents; 53,071 households averaging 2.3 people, 19,056 of them single-person, 36 percent; 21,832 under fifteen; 15,787 aged fifteen to twenty-five; 32,335 aged twenty-five to forty-five; 30,364 aged forty-five to sixty-five; 25,013 aged sixty-five and over; 56 primary establishments with 11,913 pupils and 9 secondary with 5,401; 4,466 students at institutions here; 2,960 residents in applied higher education and 1,450 at university level; total area 31,862 hectares, land 31,815; density 390; 10 woonplaatsen, 17 wijken and 71 buurten; 99,158 residents in 1995, a rise of 26,173.' },
          { h3: 'The municipality, described', p: 'Its own entry: 125,303 residents on 1 January 2026, 28 fewer than the national figure for the same date, both kept; 318.62 square kilometres, 318.18 of land and 0.44 of water, against 318.15 of land nationally, both kept; a density of 394 against the national source\'s 390, both kept; mayor René Verhulst; 2023 populations Ede 79,435, Bennekom 15,380, Lunteren 13,875, Harskamp 3,955, Ederveen 3,750, Wekerom 2,885, Otterlo 2,180 and De Klomp 490.' },
          { h3: 'The park, in its own entry\'s words', p: 'The Hoge Veluwe national park lies for the greater part on the territory of the municipality of Ede and for a small part in the municipality of Arnhem. No figure is given anywhere in that entry for how the area divides between them, and none is invented here.' },
          { h3: 'The park, measured twice', p: 'The same entry gives the park as approximately 5,400 hectares and separately as 55 square kilometres within the fencing, which is 5,500 hectares. Those are two different boundaries of the same object and this page keeps both rather than choosing one.' },
          { h3: 'What that implies for Ede', p: 'If the whole park were inside Ede it would occupy between 17.0 and 17.3 percent of the municipality\'s 31,815 hectares of land, depending on which of the two park areas is used. Since part of it is in Arnhem, those figures are upper bounds and this page states them as bounds.' },
          { h3: 'The park, and the barracks', p: 'The park was founded in 1935 and is held by the Stichting Het Nationale Park De Hoge Veluwe; it recorded 629,439 visitors in 2019 and 498,238 in 2020. The Kröller-Müller Museum stands inside the park. Seven barracks were built in Ede between 1904 and 1940 and all closed in 2010, with the ground redeveloped under the name Veluwse Poort and the World Food Center agreed in early 2019.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, the park, the museum or any school named here and claims none. The two visitor figures span a year in which travel was widely restricted, and this page quotes them without computing a change between them.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which municipality is the park in? Build the schema that can hold two answers',
      intro: 'One park, two municipalities, no published split, and a location field that can only take one value.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Try the single field', p: 'Give the park a municipality column and there is exactly one sensible entry: Ede, because most of it is there. The record now says something false by omission, and every query that asks what lies in Arnhem will miss a piece of heathland the size of a small town.' },
          { h3: '2. Try putting both in', p: 'List the park under Ede and again under Arnhem, and the record is now true. But any report that sums an attribute of parks by municipality counts this one twice, so the national park area of the two municipalities together comes out at up to 11,000 hectares when the park has at most 5,500.' },
          { h3: '3. Model the relationship, not the field', p: 'The fix is a separate table linking parks to municipalities, with a share column, and a policy for what to do when the share is unknown. Here it is unknown, so the honest entries are a majority share for Ede and a minority share for Arnhem, both unquantified, and every total built on them has to be reported as a range.' }
        ] },
        { kind: 'table', caption: 'One park, four ways to record it', head: ['Design', 'What the record says', 'What breaks', 'Totals it supports'], rows: [
          ['One field, set to Ede', 'the park is in Ede', 'Arnhem loses its share entirely', 'wrong for Arnhem'],
          ['One field, set to both', 'the park is in Ede and Arnhem', 'sums over municipalities double-count', 'up to 11,000 ha from a 5,500 ha park'],
          ['Link table, equal shares assumed', 'half in each', 'the assumption is not in any source', 'precise and unfounded'],
          ['Link table, shares unknown', 'most in Ede, some in Arnhem, split unpublished', 'nothing, but no exact total is possible', 'bounds only, which is the truth']
        ] },
        { kind: 'callout', h3: 'A field holds one value; the world often holds several', p: 'The commonest structural error in working data is forcing a relationship that is genuinely many-to-many into a column that can hold one thing. It happens because the single column is easier to build, easier to sort and easier to explain, and because the awkward cases are a minority. Then somebody sums by that column and either loses the minority entirely or counts it twice, and no error message appears either way. The remedy is old and dull and works: when one thing can belong to several others, give the relationship its own table, put the share in it if a share exists, and when it does not exist say so in the data rather than assuming halves. The bounds above use the two park areas and the land area published in the entries named; the split between the two municipalities is not published anywhere read here and is not estimated on this page.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for records that belong to more than one thing',
      intro: 'A customer with two addresses, a product in three categories, an employee on two teams, a building on a boundary, a transaction spanning two months: the single column is always tempting and usually wrong. Practised on a park with a foot in two municipalities.',
      body: [
        { kind: 'table', caption: 'When one row belongs to several groups', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Test the cardinality', 'Ask whether one record can belong to more than one group, ever', 'A many-to-many fact in a single column', 'The right shape before any data arrives'],
          ['Give it a table', 'Model the relationship separately rather than in a field', 'A choice between losing and duplicating', 'Room for the awkward cases'],
          ['Carry the share', 'Where a proportion exists, store it; where it does not, record that', 'Halves assumed because they look neutral', 'Totals that can be defended'],
          ['Guard the sum', 'Make any aggregation state whether it may double-count', 'Eleven thousand hectares from five and a half', 'Reports that admit their limits'],
          ['Report bounds', 'When the split is unknown, publish the range rather than a point', 'A precise number nobody can support', 'An answer that survives the next source']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A hoop drawn across a line on the playground and a bag of counters inside it. Two children each claim the counters for their side. They agree it has to be shared, discover nobody wrote down how many are on each side, and settle on saying most and some rather than inventing a number.' },
          { h3: 'For teenagers', p: 'Two table designs in Python or SQL, one with a municipality column and one with a link table, the park inserted into both, and a query that totals park area by municipality. The stretch: make the second design refuse to return a single number when a share is missing, and return a range instead.' },
          { h3: 'For adults', p: 'The same audit on a table at work where one row can belong to two groups: regions, cost centres, product lines, accounts. Adults nearly always find a report whose category totals exceed the whole, and a colleague who has learned to ignore it.' }
        ] },
        { kind: 'p', text: 'The population, household, area, school, park and barracks figures come from the offices and entries named beside them. The shares of 17.0 and 17.3 percent are this page dividing the two published park areas by the published land area of the municipality, and they are stated as upper bounds because part of the park lies outside it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a hoop across a line to a link table that reports a range',
    intro: 'The starting rung is decided in the free hour, and which of the ten places a learner lives in is not an input.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Whose counters are these?', p: 'Children share an object across a line and learn to say most and some.', courses: ['kids-coding-blocks-masterclass', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'One thing, two owners', p: 'Learners meet a record that will not fit in one column and design around it.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Link tables and honest totals', p: 'Teenagers build both designs, break the sum, and make the query return a range.', courses: ['python-complete-masterclass-teens', 'mysql-mastery-for-teens'] },
      { band: 'Ages 18 to 67', h3: 'Double counting at work', p: 'Adults find a report whose category totals exceed the whole and rebuild the relationship.', courses: ['mysql-database-complete-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell you the Hoge Veluwe is in Ede. Why should a child here learn that the answer is longer than that?',
    intro: 'Because it is mostly true, which is the most dangerous kind of true a database can hold.',
    p1: 'Ask a tool which municipality the park is in and Ede is a perfectly reasonable answer, since most of it is. The entry itself adds that a small part lies in Arnhem, and that clause is exactly the sort of thing that disappears when prose is turned into a row. Nothing in the shortened answer is a lie and nothing in it warns you that a second municipality has a claim, or that nobody has published how the ground divides.',
    p2: 'So the learner builds both schemas and runs the totals through each. This is not advanced work, and that is rather the point: the error is structural rather than clever, it is made early, and it becomes invisible the moment somebody starts querying. A twelve-year-old in Otterlo who has watched a park be counted twice will ask, at twenty-two, whether a report\'s categories overlap before believing its totals. Tools will keep giving the single most likely answer. Deciding whether the question can have one answer is where the work is.',
    closer: 'The case for a child in Ede learning to code in 2026 is therefore nothing to do with heathland. It is that the shape you choose for your data decides which truths you can express, that the single column is chosen for convenience and then defended as if it were reality, and that a park with a foot in two municipalities is the cheapest possible way to see it.',
    blogAnchor: 'the argument for a child writing code in an age of AI'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes across 318 square kilometres of heath, forest and villages',
    intro: 'Harskamp to Bennekom crosses most of the municipality, and Otterlo sits at the edge of a national park. On a November evening none of those journeys happens, and the class arrives anyway.',
    cells: [
      { h3: 'The Veluwe roads stay empty', p: 'The lesson runs at the kitchen table in Wekerom, Ederveen or the town at one fixed hour a week, whatever the weather on the heath.' },
      { h3: 'English for the lesson, Dutch for the school words', p: 'Teaching is in English. Groep, havo, vwo and profielkeuze stay Dutch, because those are the words a child meets on a timetable, and nothing is translated in either direction.' },
      { h3: 'What the first hour produces', p: 'Evidence of the real level, a course chosen from it, and a weekly slot, arranged without any payment details.' },
      { h3: 'Stage sets the group', p: 'A learner in Lunteren and a learner in Bennekom work together when they are at the same point, and separately when they are not.' },
      { h3: 'Twice weekly, on the middle calendar', p: 'Two lessons a week at one repeating slot, eight in most months. Ede lies in the northern part of Gelderland, which takes its holidays with regio Midden, and weeks away go into the plan before the slot is agreed.' },
      { h3: 'A seasonal offset of three and a half or four and a half hours', p: 'Summer time here shortens the distance to the teacher; winter time lengthens it, since nothing on the Indian side ever shifts. Whatever the month, the hours between the school bell and mid-evening line up, and weekends line up completely.' }
    ],
    spec: { title: 'More children than any other city in this series', p: '21,832 residents are under fifteen, 17.4 percent, and they are spread across ten separate places with nine secondary establishments between them. A group of five to ten formed on ability rather than on postcode is a different proposition from whatever a village of 2,885 can assemble locally.' }
  },

  fees: {
    h2: 'The fee, in dollars, in all ten places',
    intro: 'Set out here rather than kept for a phone call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'The rate is the same everywhere outside India and it is a dollar figure; no euro list is kept, which is why De Klomp and the town see identical numbers. Nothing is invoiced in advance: a course and a time come first, out of the free lesson, and the payment afterwards goes through WhatsApp. Pauses, plan changes and missed weeks each have their own paragraph on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, printed as their authors typed them',

  book: {
    h2: 'Send the level; the village can wait',
    intro: 'The first task might be a hoop drawn across a line with counters inside it, two table designs that disagree about a park, or a report at work whose categories add up to more than the whole.',
    success: 'Thank you. Your Ede class request has been sent.'
  },

  faq: {
    h2: 'Ede coding class questions',
    intro: 'The municipality, its villages, its park, the teaching and the terms.',
    items: [
      { q: 'Is the Hoge Veluwe in Ede or not?', a: 'Mostly. Its own entry says the park lies for the greater part on the territory of the municipality of Ede and for a small part in the municipality of Arnhem, and gives no figure for the split. That is why this page uses it: a location field can hold one value, the world here holds two, and choosing either loses something. Working out how to record that honestly is the project on this page.' },
      { q: 'How much of Ede is national park?', a: 'At most between 17.0 and 17.3 percent of its land, depending on whether the park is taken as approximately 5,400 hectares or as the 55 square kilometres inside the fencing, both of which its entry gives. Those are upper bounds, because part of the park is in Arnhem and no source read here says how much.' },
      { q: 'Which places does the class reach?', a: 'All ten woonplaatsen. The municipal entry publishes 2023 populations for eight of them: Ede 79,435, Bennekom 15,380, Lunteren 13,875, Harskamp 3,955, Ederveen 3,750, Wekerom 2,885, Otterlo 2,180 and De Klomp 490. The class and the fee are the same in every one.' },
      { q: 'Is any of this taught in Dutch?', a: 'No. Every lesson runs in English. The Dutch school words are kept as the school uses them, so groep, havo, vwo and profielkeuze are spoken as a child hears them, but there is no Dutch-language version of the course.' },
      { q: 'What time are classes for a family in Ede?', a: 'Under summer time the offset is three and a half hours and under winter time four and a half, the whole of the variation coming from the Dutch side. That leaves the stretch between the end of school and mid-evening as the practical window on weekdays, with Saturday and Sunday wide open. One recurring time gets agreed at the free lesson and is then left alone.' },
      { q: 'Why does Ede have so few secondary schools for so many children?', a: 'Nine secondary establishments teach 5,401 pupils, about 600 each, while 21,832 residents are under fifteen. Ede has more children as a share than any other city in this series and a good many of its teenagers travel out of the municipality for school, which is one more reason a class that arrives at the house is worth considering.' },
      { q: 'What is in the free lesson?', a: 'Work begins wherever the learner\'s current ability runs out, with one task placed just past that line. Sharing a hoop of counters across a boundary suits a young child, who ends up saying most and some rather than inventing a number. A teenager builds two competing table designs and watches a total break. An adult arrives with a report whose categories overlap. What the hour leaves behind is a named course, a rung, a fixed weekly time and a price in dollars, with nothing paid.' },
      { q: 'Is there a Modern Age Coders classroom in Ede?', a: 'No, and none is claimed at the Veluwse Poort, in Bennekom or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Ede coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in an Ede group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or village. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'South to the other half of the park, out to the province, and up to the country',
    html: 'The rest of the national park is in <a class="cg-inline-link" href="/coding-classes-in-arnhem">Arnhem</a>, whose page is about categories that must not be added; north across the heath is <a class="cg-inline-link" href="/coding-classes-in-apeldoorn">Apeldoorn</a>, and all three sit inside <a class="cg-inline-link" href="/coding-classes-in-gelderland">Gelderland</a>. Everything in this series answers to the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>. Two further pages exist for learners whose interest turns out to be models rather than programs: <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> and the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-gelderland', label: 'Gelderland' },
    { href: '/coding-classes-in-arnhem', label: 'Arnhem' }
  ],

  personalityCss: `
.cg-root.cg-ede .cg-hero-grid { align-items: start; gap: clamp(1.8rem, 4.15vw, 3.2rem); }
.cg-root.cg-ede .cg-hero h1 { font-weight: 500; letter-spacing: -0.0075em; line-height: 1.13; }
.cg-root.cg-ede .cg-capsule { border-left-width: 3px; border-left-style: solid; border-top: 3px solid var(--cg-accent-soft); padding-left: 1.5rem; padding-top: 0.7rem; }
.cg-root.cg-ede .cg-eyebrow { letter-spacing: 0.13em; font-weight: 600; }
.cg-root.cg-ede .cg-section-head h2 { max-width: 36ch; }
.cg-root.cg-ede .cg-grid-3 { gap: clamp(1.2rem, 2.5vw, 1.95rem); }
.cg-root.cg-ede .cg-ladder-col { border-top: 4px dotted var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-ede .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ede .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Municipality of Ede, Gelderland: 125,331 residents (CBS 1 January 2026) across 10 woonplaatsen on 318.15 km2 of land with about 0.15 percent water; 56 primary establishments (11,913 pupils) and 9 secondary (5,401); the highest under-15 share in this series at 17.4 percent. Seven barracks built 1904 to 1940 and closed in 2010. Regio Midden holidays with the northern part of Gelderland. The city page argues from many-to-many relationships; the province page owns the two-calendar split and Arnhem owns the overlapping-categories problem.',
    localProject: 'A field holds one value; the world often holds several. The Hoge Veluwe national park lies for the greater part in the municipality of Ede and for a small part in the municipality of Arnhem, and no source read publishes the split. A single municipality column set to Ede erases Arnhem\'s share; set to both, any sum over municipalities double-counts, giving up to 11,000 hectares from a park of at most 5,500; assuming equal shares invents a figure. The learner models the relationship as a link table with an optional share and makes totals report bounds when the share is unknown. The park is published both as approximately 5,400 hectares and as 55 square kilometres within the fencing, so the share of Ede it could occupy is bounded at 17.0 to 17.3 percent of the municipality\'s land. Distinct from the overlapping-tallies trap (Arnhem, where categories of people overlapped in an addition) and from the part-to-whole trap (Bandar Seri Begawan): here the fault is structural, a many-to-many relationship forced into a one-to-many field, and it is fixed by schema rather than by arithmetic.',
    requiredMentions: [
      '125,331',
      '53,071',
      '19,056',
      '99,158',
      '11,913',
      '5,401',
      'Bennekom',
      'Lunteren',
      'Otterlo',
      'Harskamp',
      'Ederveen',
      'Wekerom',
      'René Verhulst',
      'Veluwse Poort'
    ],
    sources: [
      { claim: 'Ede 125,331 residents on 1 January 2026 (CBS); 53,071 households averaging 2.3, 19,056 single-person (36 percent); 21,832 aged 0 to 15; 15,787 aged 15 to 25; 32,335 aged 25 to 45; 30,364 aged 45 to 65; 25,013 aged 65 and over; total area 31,862 ha, land 31,815 ha; density 390; 56 primary establishments (11,913 pupils) and 9 secondary (5,401); 4,466 students at institutions in the municipality; HBO 2,960 and WO 1,450; 10 woonplaatsen, 17 wijken and 71 buurten; 99,158 in 1995, a rise of 26,173 (26 percent).', url: 'https://allecijfers.nl/gemeente/ede/' },
      { claim: 'Ede 125,303 residents on 1 January 2026; 318.62 km2 (318.18 land, 0.44 water); density 394; mayor René Verhulst (CDA); kernen with 2023 populations Ede 79,435, Bennekom 15,380, Lunteren 13,875, Harskamp 3,955, Ederveen 3,750, Wekerom 2,885, Otterlo 2,180, De Klomp 490; the Hoge Veluwe and the Kröller-Müller Museum at Otterlo.', url: 'https://nl.wikipedia.org/wiki/Ede_(gemeente)' },
      { claim: 'Nationaal Park De Hoge Veluwe: approximately 5,400 hectares, and 55 km2 within the fencing; it lies for the greater part on the territory of the municipality of Ede and for a small part in the municipality of Arnhem, with no split published; founded 1935; held by the Stichting Het Nationale Park De Hoge Veluwe; 629,439 visitors in 2019 and 498,238 in 2020; the Kröller-Müller Museum is inside the park.', url: 'https://nl.wikipedia.org/wiki/Nationaal_Park_De_Hoge_Veluwe' },
      { claim: 'Seven barracks were built in Ede between 1904 and 1940, grouped as Ede-West (Prins Maurits, Johan Willem Friso, Van Essen, Arthur Kool, P.L. Bergansius) and Ede-Oost (Elias Beeckman, Simon Stevin); in 2010 all the barracks were closed; the ground is being redeveloped under the name Veluwse Poort, and in early 2019 the municipality of Ede and the province of Gelderland decided to build the World Food Center there.', url: 'https://nl.wikipedia.org/wiki/Ede_(Nederland)' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any figure for how the park divides between Ede and Arnhem. No source read publishes one, and the page reports bounds instead.',
      'A single area for the park. Approximately 5,400 hectares and 55 square kilometres within the fencing are both published and both kept.',
      'A change between the 2019 and 2020 visitor figures. The second falls in a year of widespread travel restriction and the page quotes both without differencing them.',
      'Populations for the two woonplaatsen the entry does not size. Only the eight published places are listed.',
      'Which municipality the Kröller-Müller Museum stands in. The entry places it inside the park and does not name a municipality for it.',
      'Anything the Gelderland page owns: the two holiday regions and the 51 municipalities. Anything the Arnhem page owns: the September 1944 tallies and the Veluwezoom figures.'
    ]
  }
};
