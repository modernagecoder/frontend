'use strict';
// Tongelre: the eastern stadsdeel of Eindhoven, three CBS wijken, all three
// read, Oud-Tongelre, De Laak and Doornakkers.
// Spine: the farmhouse at 't Hofke 13 has beams of 1583, an enlargement of
// 1600, an eighteenth-century face and a restoration of 2007/2008, and no
// date for the house itself. A date belongs to an event, and "how old" has
// no answer until the event is named.

module.exports = {
  slug: 'coding-classes-in-tongelre',
  code: 'tgl',
  accent: '#594D00',
  accentRationale: 'Tongelre: a dark ochre of old oak beams, apart from the violet of Stratum to the south, the rose of Eindhoven Centrum to the west and the Dommel teal of the Eindhoven city page, and nearest to Haarlemmermeer, which it does not link to',
  pageType: 'district',
  place: {
    name: 'Tongelre',
    eyebrow: 'Tongelre, Eindhoven',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'City', name: 'Eindhoven' },
      { type: 'AdministrativeArea', name: 'Noord-Brabant' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-netherlands', name: 'Netherlands' },
    { slug: 'coding-classes-in-eindhoven', name: 'Eindhoven' }
  ],
  nav: [
    { label: 'Eindhoven', href: '/coding-classes-in-eindhoven' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Tongelre, Eindhoven, Netherlands',
  title: 'Coding Classes in Tongelre, Eindhoven | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Tongelre, Eindhoven for ages 6 to 67, in Oud-Tongelre, De Laak and Doornakkers. The first lesson is free.',
  ogDescription: 'Live online coding, Python and AI in Tongelre, on a page about a farmhouse with five dates and no age.',
  twitterDescription: 'Classes in Tongelre for ages 6 to 67, a USD fee printed in full and a free first lesson.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Tongelre Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Oud-Tongelre, De Laak and Doornakkers, taught in English.'
  },

  h1: 'Coding classes in Tongelre, where one farmhouse has five dates and no age',
  capsuleQ: 'What are the best coding classes in Tongelre, Eindhoven?',
  capsule: 'Coding classes in Tongelre reach a stadsdeel of three statistics office wijken, Oud-Tongelre, De Laak and Doornakkers, all three read, with 23,660 residents in January 2026. On \'t Hofke stands one of the oldest houses in Eindhoven. Its beams date from 1583, it was enlarged in 1600, its present appearance is eighteenth-century and its outside was restored in 2007/2008. The encyclopaedia gives no date for the house itself. So how old is it: 443 years, 426, about two or three centuries, or 18? Each is true of a different event, and none is true of the house. Modern Age Coders teaches live online in English from Urkhoven to the Villapark, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Ask how old a thing is and the question sounds complete. It is not. The farmhouse at \'t Hofke 13 in the old heart of Tongelre has a timber frame from 1583, grew in 1600, took on its present face in the eighteenth century and had its outside restored early this century, and every one of those is a correct answer to how old it is, because each dates a different event. The same thing happens to every record a program touches: a file has one date for when it was created and another for when it was changed, a database row copied into a new system gets a fresh creation date, a line of code carries its own date inside a repository that is older than it. A date without its event is half a fact, and the half that is missing is the one that decides whether the number means anything.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Tongelre, Eindhoven.',

  picks: {
    eyebrow: 'Course picks for Tongelre',
    h2: 'Four courses for the east of Eindhoven',
    intro: 'A groep 6 child in Doornakkers who keeps asking how old things are, a teenager in Oud-Tongelre planning an app that will need to know when each record was made and when it was changed, a student in De Laak whose data pipeline stamps everything with the day it ran, and an adult near \'t Hofke who has inherited a spreadsheet full of dates with no labels. The first lesson for any of them is taught in full and costs nothing.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python where a child builds a timeline of one object, a date for every event, and learns to say which event a date belongs to.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'A complete app, first screen to working build, whose records store when they were created and when they were last changed as two separate fields.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python pipelines that keep the reference date of the data apart from the date the job happened to run.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reading any dated figure by asking what happened on that date, for anybody whose reports say as of without saying as of what.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Tongelre today',
      h2: 'A village until 1920, and three wijken now',
      intro: 'Tongelre was an independent municipality in Noord-Brabant until 1920, when it was one of the villages joined to Eindhoven. The statistics office now divides it into three wijken, Oud-Tongelre, De Laak and Doornakkers, and ten buurten, which is also the count the encyclopaedia gives. Their areas add to 946 hectares, 920 of land and 27 of water, matching the 9.46 square kilometres of the encyclopaedia entry, so the three wijken are all of Tongelre. Their 2026 counts add to 23,660 residents, a sum of three published rows rather than a published total.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Oud-Tongelre, the old village and its green edge', p: '9,216 residents on 649 hectares of land, with a published density of 1,379, far the lowest of the three. Five buurten: Koudenhoven, Karpen, \'t Hofke, Muschberg Geestenberg and Urkhoven. One secondary establishment here teaches 1,200 pupils and two primary establishments 657.' },
          { h3: 'De Laak, the Villapark and Lakerlopen', p: '5,661 residents on 103 hectares in two buurten, the Villapark and Lakerlopen. The highest average income of the three, 42,400 euro per resident, and the highest estimated dwelling value, 449,000 euro. 55 percent of the 2,830 dwellings are rented.' },
          { h3: 'Doornakkers, a wijk of families', p: '8,783 residents on 168 hectares, in Doornakkers-West, Doornakkers-Oost and the Tongelresche Akkers. 1,490 residents are under fifteen and 1,305 of the 4,385 households have children. The single primary establishment teaches 420 pupils.' }
        ] },
        { kind: 'spec', title: 'Around \'t Hofke: a church, a town hall and a cigar factory', p: 'The encyclopaedia entry puts the heart of the old village at \'t Hofke, around which all the important buildings, such as the church and the town hall, are grouped. The Sint-Martinuskerk, a neo-gothic cruciform basilica with three aisles, was consecrated in 1891 to a design by E. Corbey. The old town hall on \'t Hofke dates from 1911 and is now a community centre. The Apollohuis at Tongelresestraat 81 is the former cigar factory of the firm Boelaars and Sons, built in 1919. The Collse Watermolen is listed among the landmarks, and the DAF Museum has occupied a building of several earlier uses since 1993. The page repeats these lines and goes no further.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'One house, five dates',
      h2: 'How old is the farmhouse at \'t Hofke 13?',
      intro: 'The encyclopaedia calls it one of the oldest houses in the municipality of Eindhoven and gives the dates below. Each row is an event with its year, and the age is simply 2026 minus that year. The last row is the one that matters.',
      body: [
        { kind: 'table', caption: 'The farmhouse at \'t Hofke 13, dated by event', head: ['Event', 'Year', 'Age of that event in 2026', 'What the date belongs to'], rows: [
          ['The timber frame', '1583', '443 years', 'the beams'],
          ['Enlarged, from a three-aisled hallenhuis, a hall house', '1600', '426 years', 'the enlargement'],
          ['Present appearance', 'the eighteenth century', 'between 227 and 326 years', 'the face you see'],
          ['Outside restored', '2007/2008', '18 or 19 years', 'the restoration'],
          ['The house as a whole', 'not given', 'no answer', 'nothing: the question has no event']
        ] },
        { kind: 'p', text: 'Every figure in the third column is correct, and they run from eighteen years to four hundred and forty-three. The farmhouse is not uncertain about its age; it simply has no single age, because a building is not one event but a series of them, and the source is careful to date the beams, the enlargement and the appearance rather than the house. Saying it was built in 1583 would quietly promote the date of the oldest part to the date of the whole, which is the kind of claim that survives in brochures precisely because nobody asks which event it records. The same care applies across the square: the church was consecrated in 1891, which dates a ceremony, and the town hall dates from 1911, which left an independent Tongelre at most nine years of using it before the merger of 1920.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'The three wijken of Tongelre, with a year on every figure',
      intro: 'Each wijk as published, and each figure labelled with the year the office gives it, because the rows themselves are a small lesson in the same idea. Then the sums, then the refusals.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Wijk Oud-Tongelre', p: '9,216 residents (2026), 8,950 (2025) and 8,685 (2013); 4,690 men and 4,260 women (2025); 4,650 households averaging 1.9, 2,270 single-person, 1,270 with children (2025); 1,275 under fifteen, 1,380 aged fifteen to twenty-five, 2,505 aged twenty-five to forty-five, 2,215 aged forty-five to sixty-five, 1,805 over sixty-five (2026); 671 hectares, 649 land and 23 water; published density 1,379 (2025); 4,329 dwellings, 1,991 owner-occupied and 2,338 rented (2025); estimated 395,000 euro (2025); income 34,700 euro per resident and 41,400 per recipient (2024); 2 primary establishments with 657 pupils, 1 secondary with 1,200.' },
          { h3: 'Wijk De Laak', p: '5,661 residents (2026), 5,695 (2025) and 5,265 (2013); 3,035 men and 2,660 women (2025); 3,165 households averaging 1.8, 1,745 single-person, 675 with children (2025); 635 under fifteen, 830 aged fifteen to twenty-five, 2,010 aged twenty-five to forty-five, 1,355 aged forty-five to sixty-five, 815 over sixty-five (2026); 105 hectares, 103 land and 2 water; published density 5,529 (2025); 2,830 dwellings, 1,274 owner-occupied and 1,556 rented (2025); estimated 449,000 euro (2025); income 42,400 euro per resident and 49,900 per recipient (2024); 1 primary establishment with 966 pupils and no secondary.' },
          { h3: 'Wijk Doornakkers', p: '8,783 residents (2026), 8,785 (2025) and 7,170 (2013); 4,600 men and 4,185 women (2025); 4,385 households averaging 2.0, 2,065 single-person, 1,305 with children (2025); 1,490 under fifteen, 1,160 aged fifteen to twenty-five, 2,900 aged twenty-five to forty-five, 2,020 aged forty-five to sixty-five, 1,210 over sixty-five (2026); 170 hectares, 168 land and 2 water; published density 5,229 (2025); 4,056 dwellings, 1,704 owner-occupied and 2,352 rented (2025); estimated 364,000 euro (2025); income 32,000 euro per resident and 39,700 per recipient (2024); 1 primary establishment with 420 pupils and no secondary.' },
          { h3: 'One row, five years', p: 'Read any card above and count the years inside it: residents are counted at the start of 2026, households, dwellings and values belong to 2025, income to 2024, and the older resident counts to 2013. A row labelled Oud-Tongelre 2026 would be dating the whole row by its newest field, exactly the move the farmhouse invites. The page never labels a row with one year and never combines figures across the years.' },
          { h3: 'The sums', p: 'Residents 9,216 plus 5,661 plus 8,783 is 23,660 (2026). Land 920 hectares of 946. Households 12,200 and dwellings 11,215 (2025), of them 4,969 owner-occupied. Under fifteen 3,400 (2026), from 1,275, 635 and 1,490. Primary establishments 4 teaching 2,043 pupils; secondary 1 teaching 1,200.' },
          { h3: 'What the page does not say', p: 'It does not say when the farmhouse was built, since the source does not; it does not claim the church was built in 1891, only consecrated then; and it does not read the growth of Doornakkers from 7,170 in 2013 to 8,783 now as a rate, since base years are the argument of other pages. It draws no conclusion from the dates of any landmark about the age of the village around it.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no link with Tongelre, with Eindhoven, with the DAF Museum or with any school, church or landmark named here, and nothing on this page implies one. The three wijk rows are taken from their own statistics office pages with the year of each figure preserved as published. The farmhouse, the church, the town hall, the cigar factory and the 1920 date are copied from the encyclopaedia entry for Tongelre, which dates the parts and events of \'t Hofke 13 and gives no date for the house as a whole.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Every date belongs to an event, so store the event with it',
      intro: 'A timestamp answers when did what happen. Leave out the what and the number can be attached to the wrong thing without anybody noticing.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Ask which event a date records', p: '1583 is the beams. 1600 is the enlargement. The eighteenth century is the appearance. 2007/2008 is the restoration. Before any date is used, write down what happened on it, and the four stop competing to be the age of the house.' },
          { h3: '2. Keep several dates, each named', p: 'A record that can be created, changed, copied and restored needs a field for each of those, not one field called date. Once two events share one field, the later one overwrites the earlier and the history is gone for good.' },
          { h3: '3. Refuse to promote a part to the whole', p: 'The oldest beam does not date the house, the newest field does not date the row, and the first commit does not date every line of a program. When the question is about the whole, say that it has no single date, as the source does.' }
        ] },
        { kind: 'table', caption: 'The same question, in five other places', head: ['The object', 'Its different dates', 'The date that usually gets shown', 'What goes wrong'], rows: [
          ['A file on a computer', 'created, last modified, last opened', 'last modified', 'a plain copy gets a new creation date and looks brand new'],
          ['A database row moved to a new system', 'first recorded, imported, last updated', 'the import date', 'a ten-year-old customer appears to have joined last week'],
          ['A program in version control', 'first commit, and a separate date for every line', 'the date of the latest release', 'code written years ago is treated as freshly reviewed'],
          ['A published dataset', 'reference date, publication date, download date', 'the download date', 'figures for 2023 are presented as current'],
          ['The farmhouse at \'t Hofke 13', 'beams 1583, enlarged 1600, face 18th century, restored 2007/2008', 'whichever sounds best', 'the oldest part is sold as the age of the whole']
        ] },
        { kind: 'callout', h3: 'created_at and updated_at are the smallest version of a large idea', p: 'Almost every application framework adds two timestamps to every record, one for when it was created and one for when it was last changed, because a single date cannot answer both questions and the difference between them is often the most useful thing in the table. The discipline goes further than those two fields. A migration that copies rows into a new database tends to set their creation time to the day of the migration, unless somebody carries the original across on purpose, and afterwards nothing distinguishes a customer of ten years from one of ten days. Version control solves the same problem at a finer grain: a repository has a first commit, but every line in it carries the date of the change that last touched it, and asking how old the code is only makes sense line by line. Data pipelines add a third kind, the date the job ran, which is often mistaken for the date the data describes. The statistics rows on this page show the pattern in miniature, with residents counted at the start of 2026, homes in 2025 and income in 2024 inside a single row. The remedy everywhere is the same as for the farmhouse: name the event beside the date, keep a separate date for each event that matters, and when someone asks for the date of the whole, be willing to say that there is not one.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for dates that mean what they say',
      intro: 'File times, record timestamps, commit dates, release dates, reference dates and as-of labels all attach a number to an event, and all go wrong when the event is dropped. Practised on a farmhouse whose source dates every part except the whole.',
      body: [
        { kind: 'table', caption: 'Keeping every date attached to its event', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Name the event', 'Store what happened next to every date', 'A number attached to the wrong occurrence', 'Dates a reader can interpret'],
          ['One field per event', 'Keep created, changed and copied as separate fields', 'A later event overwriting an earlier one', 'History that survives edits'],
          ['Carry originals across', 'When migrating, bring the original timestamps with the data', 'Old records reborn on import day', 'A migration that keeps its past'],
          ['Separate run date from data date', 'Label the reference date of the data apart from the processing date', '2023 figures sold as current', 'Honest as-of labels'],
          ['Never promote a part', 'Refuse to date a whole by its oldest or newest component', 'A beam sold as a house', 'Claims that match the source']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A favourite toy described as a timeline: when it was bought, when it was mended, when it got a new wheel. The class discovers that the question how old is your toy has several right answers, and learns to ask which one.' },
          { h3: 'For teenagers', p: 'A tiny notes app in Python whose notes keep a created and an updated time. Then a copy function that accidentally resets the created time, a test that catches it, and a fix that carries the original across.' },
          { h3: 'For adults', p: 'A report from work with an as-of date on it. Adults find out which event that date really records, the data, the extraction or the printing, and frequently discover that a monthly figure was a quarter old.' }
        ] },
        { kind: 'p', text: 'The farmhouse is dated here only by the events the encyclopaedia names, and the house is left undated because the source leaves it undated. The three wijk rows keep the year of every figure exactly as the statistics office gives it, which is the practical form of the same habit. Every age in the table on this page is a single subtraction from 2026, and the eighteenth century is kept as a range rather than rounded into a year that nobody recorded.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a toy with three birthdays to records that keep every date they need',
    intro: 'The starting point is decided in the free lesson by how the learner handles a real piece of work. The wijk they live in and their age make no difference to it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Which birthday?', p: 'Children give one object several dates and say what happened on each.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'A timeline in code', p: 'Learners store events with their dates and sort them into a history.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Created and updated', p: 'Teenagers build records that keep two timestamps and a copy that keeps both.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'As of what?', p: 'Adults trace the event behind every as-of date in a real report.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an AI when the farmhouse on \'t Hofke was built and it will give a year. Why should a teenager in Doornakkers ask which part?',
    intro: 'Because the source dates the beams, the enlargement, the face and the restoration, and never the house.',
    p1: 'A language model asked when the farmhouse at \'t Hofke 13 was built will very likely say 1583, since that is the earliest year beside the building in the text it has seen, and a question about when something was built seems to want the earliest year. The answer is fluent and specific, and it quietly changes the claim: the source says the beams are from 1583, not the house. Nothing in the reply reveals the change, because the number is correct; only the event it has been attached to is wrong, and a reader who does not know there were several events has no way to notice.',
    p2: 'The learner who has written a copy function that reset every creation date, and watched a table of old records suddenly look new, recognises the pattern at once: a date is only as good as the event written next to it. Machine learning runs into this constantly, since training data carries collection dates, labelling dates and snapshot dates, and a model evaluated on data dated after its training period looks brilliant for the wrong reason. Models will keep picking one date and presenting it as the date. Asking what happened on that date remains a human habit.',
    closer: 'The case for a child in Tongelre learning to code in 2026 is therefore not about the future at all. It is that anyone who has built a record with a created and an updated field learns to ask which event a date belongs to, and that question works on farmhouses, reports and machine answers alike.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for Oud-Tongelre, De Laak and Doornakkers',
    intro: 'Tongelre runs from the Villapark and Lakerlopen out past \'t Hofke to Urkhoven and Koudenhoven, and wherever a family lives in it, the hard part of a weekly class is the evening rather than the route.',
    cells: [
      { h3: 'From Urkhoven, no journey at all', p: 'From Urkhoven or Koudenhoven, any classroom in the city means a ride in and a ride home twice a week. Online, the learner opens a laptop at the agreed time and the journey is simply not part of the plan.' },
      { h3: 'Dutch words for Dutch school', p: 'Groep, havo, vwo and profielkeuze stay in Dutch in every lesson, because they are the terms on every Tongelre school letter. The teacher meets the school vocabulary where it is rather than translating it away.' },
      { h3: 'A lesson that is a lesson', p: 'The free hour is spent on a real task while the teacher watches how the learner works. It ends with a level, a course and a weekly time, and at no point does it ask for payment details or lead to a sales call.' },
      { h3: 'Groups by stage, drawn widely', p: 'Five to ten learners who are at the same point in the same subject. Tongelre has 3,400 residents under fifteen, and five of them at one exact stage wanting one exact hour is rare, so groups are drawn from a worldwide pool.' },
      { h3: 'Regio Zuid school holidays', p: 'Two lessons a week, about eight a month, at a fixed hour. Noord-Brabant follows regio Zuid holidays, on dates that differ from the western provinces, and the teaching calendar keeps to them from the first month.' },
      { h3: 'The clock that moves is Dutch', p: 'India sits three and a half hours ahead in summer and four and a half in winter, and only the Dutch clock ever changes. After school, the early evening and weekend mornings remain available the whole year.' }
    ],
    spec: { title: 'Four primary schools, one secondary, and a group from much further away', p: 'Tongelre has four primary establishments teaching 2,043 pupils and a single secondary establishment in Oud-Tongelre teaching 1,200. That is a modest amount of schooling for three wijken, and it makes no difference to how a coding group forms: five learners at the same stage of the same subject free at the same hour are found only in a pool that spans every age from 6 to 67 and every country the teachers serve.' }
  },

  fees: {
    h2: 'The Tongelre fee, printed in dollars',
    intro: 'Set out fully here, so the number is known before anyone talks to us.',
    first: 'A whole taught lesson that ends with a level and a named course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One dollar rate for every country and no euro list, so a house in the Villapark and a flat in Doornakkers are quoted the same. Nothing is paid until the free lesson has decided a course and a weekly hour, and payment is then arranged over WhatsApp. Pausing, changing format and missing a lesson are all covered on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, left exactly as they were written',

  book: {
    h2: 'Tell us the stage the learner is at now',
    intro: 'The first task might be a toy with three birthdays, a notes app that keeps its created and updated times through a copy, or a report whose as-of date is traced to the event behind it.',
    success: 'Thank you. Your Tongelre class request has been sent.'
  },

  faq: {
    h2: 'Tongelre coding class questions',
    intro: 'The stadsdeel, its three wijken, one farmhouse with many dates, the lessons and the terms.',
    items: [
      { q: 'What does Tongelre include?', a: 'Three statistics office wijken: Oud-Tongelre, De Laak and Doornakkers, with ten buurten from Koudenhoven, Karpen and Urkhoven to the Villapark, Lakerlopen and the Tongelresche Akkers. Together they cover 946 hectares, 920 of them land, and held 23,660 residents in January 2026 by adding the three published counts.' },
      { q: 'How old is the farmhouse at \'t Hofke 13?', a: 'It depends on which event is meant, and the source gives several. The beams date from 1583, the house was enlarged in 1600, its present appearance is from the eighteenth century and its outside was restored in 2007/2008. The encyclopaedia calls it one of the oldest houses in Eindhoven but gives no date for the house as a whole, so neither does this page.' },
      { q: 'Why does it matter which event a date belongs to?', a: 'Because the same object can honestly be given dates centuries apart. Saying the farmhouse was built in 1583 promotes the date of the beams to the date of the building. Programs meet the same problem with files, database rows and code, which is why records usually keep separate created and updated times.' },
      { q: 'Was Tongelre once a separate municipality?', a: 'Yes. Tongelre was an independent municipality in Noord-Brabant until 1920, when it joined Eindhoven. Its old town hall on \'t Hofke dates from 1911 and is now a community centre, and the Sint-Martinuskerk nearby was consecrated in 1891 to a design by E. Corbey.' },
      { q: 'What is the Apollohuis?', a: 'The former cigar factory of the firm Boelaars and Sons at Tongelresestraat 81, built in 1919, according to the encyclopaedia entry for Tongelre. The same entry notes that the DAF Museum has been housed since 1993 in a building that had several uses before it.' },
      { q: 'How many schools and children are in Tongelre?', a: 'Adding the three wijk rows: four primary establishments teaching 2,043 pupils and one secondary establishment, in Oud-Tongelre, teaching 1,200. The published under-fifteen counts, 1,275, 635 and 1,490, add to 3,400. The page makes no claim about the quality or results of any school.' },
      { q: 'What language are lessons in, and when?', a: 'English, with Dutch school words such as groep, havo and vwo kept in Dutch. India is three and a half hours ahead in summer and four and a half in winter, so after-school, early-evening and weekend slots all fit. One weekly time is agreed at the free lesson, and holidays follow regio Zuid.' },
      { q: 'Is there a Modern Age Coders classroom in Tongelre?', a: 'No, and none is claimed here, elsewhere in Eindhoven or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Tongelre coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Eindhoven and beyond',
    h2: 'West to the old town, south to Stratum, and on across Brabant',
    html: 'Brainport, the international schools and the figures for the whole city are on <a class="cg-inline-link" href="/coding-classes-in-eindhoven">coding classes in Eindhoven</a>, which now links all seven stadsdeel pages. West of Tongelre is the old town, on <a class="cg-inline-link" href="/coding-classes-in-eindhoven-centrum">Eindhoven Centrum</a>, and just south is <a class="cg-inline-link" href="/coding-classes-in-stratum">Stratum</a>, where three correct densities average to a wrong one. The province around the city is <a class="cg-inline-link" href="/coding-classes-in-noord-brabant">Noord-Brabant</a>, with its other towns to follow in this series. A learner who wants machine learning above all can go straight to the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a> holds every page together.',
    waLabel: 'Take it to WhatsApp'
  },

  footerHeading: 'Tongelre, Eindhoven and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-eindhoven', label: 'Eindhoven' },
    { href: '/coding-classes-in-stratum', label: 'Stratum' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-tgl .cg-hero-grid { grid-template-columns: 0.95fr 1.1fr; align-items: center; gap: clamp(1.3rem, 3.3vw, 2.55rem); }
.cg-root.cg-tgl .cg-hero h1 { font-weight: 600; letter-spacing: -0.021em; line-height: 1.06; }
.cg-root.cg-tgl .cg-capsule { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding-block: 0.95rem; }
.cg-root.cg-tgl .cg-eyebrow { letter-spacing: 0.16em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-tgl .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.014em; }
.cg-root.cg-tgl .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.75rem); }
.cg-root.cg-tgl .cg-card { border-radius: 5px; border-top: 3px solid var(--cg-accent-soft); }
.cg-root.cg-tgl .cg-table caption { letter-spacing: 0.045em; font-weight: 600; }
.cg-root.cg-tgl .cg-table td { font-variant-numeric: tabular-nums oldstyle-nums; }
.cg-root.cg-tgl .cg-table td:nth-child(2) { font-weight: 700; }
.cg-root.cg-tgl .cg-ladder-col { border-bottom: 3px solid var(--cg-accent-soft); padding-bottom: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'Stadsdeel Tongelre, Eindhoven, Noord-Brabant: an independent municipality until 1920; three statistics office wijken, Oud-Tongelre, De Laak and Doornakkers, and ten buurten, the same count as the encyclopaedia, whose areas add to 946 hectares, 920 land and 27 water, matching the encyclopaedia 9.46 square kilometres. Complete-set 2026 sum 23,660 residents, flagged as arithmetic. Oud-Tongelre 9,216 residents (2026), 8,950 (2025), 8,685 (2013) on 649 hectares of land, published density 1,379 (2025), 4,650 households averaging 1.9, 4,329 dwellings with 1,991 owner-occupied, estimated 395,000 euro, income 34,700 euro per resident (2024), buurten Koudenhoven, Karpen, t Hofke, Muschberg Geestenberg and Urkhoven, 2 primary with 657 pupils, 1 secondary with 1,200. De Laak 5,661 on 103 hectares, 3,165 households, 2,830 dwellings with 1,556 rented, estimated 449,000 euro, income 42,400 euro per resident, buurten Villapark and Lakerlopen, 1 primary with 966 pupils. Doornakkers 8,783 (2026) and 7,170 (2013) on 168 hectares, 4,385 households with 1,305 with children, 4,056 dwellings, estimated 364,000 euro, income 32,000 euro per resident, buurten Doornakkers-West, Doornakkers-Oost and Tongelresche Akkers, 1 primary with 420 pupils. Sums: 12,200 households, 11,215 dwellings, 4,969 owner-occupied, 3,400 under fifteen, 4 primary with 2,043 pupils. Landmarks from the encyclopaedia: t Hofke as the heart of the old village; t Hofke 13, one of the oldest houses in the municipality, beams of 1583, originally a three-aisled hall house enlarged in 1600, present appearance eighteenth-century, exterior restored 2007/2008, squatted 5 May 2010 after standing empty; the Sint-Martinuskerk, consecrated 1891, architect E. Corbey; the old town hall of 1911, now a community centre; the Apollohuis at Tongelresestraat 81, the former cigar factory of Boelaars and Sons, built 1919; the Collse Watermolen; the DAF Museum since 1993. Regio Zuid holidays. The district page argues that a date belongs to an event and that a whole with several dated events has no single date.',
    localProject: 'A date belongs to an event, so how old has no answer until the event is named, and a whole made of dated parts may have no date at all. The encyclopaedia entry for Tongelre calls the farmhouse at t Hofke 13 one of the oldest houses in the municipality of Eindhoven and dates its events, not the house: the beams are from 1583, the original three-aisled hall house was enlarged in 1600, the present appearance is eighteenth-century, the exterior was restored in 2007/2008. Measured from 2026 the ages are 443, 426, between 227 and 326, and 18 or 19 years, all correct and none of them the age of the house, which the source leaves undated and the page leaves undated. Saying it was built in 1583 promotes the date of the oldest part to the date of the whole. Nearby dates repeat the point: the Sint-Martinuskerk was consecrated in 1891, a ceremony not a construction, and the town hall dates from 1911, leaving an independent Tongelre at most nine years with it before 1920. Each statistics office row carries the same structure in miniature, with residents at 2026, households and dwellings at 2025, income at 2024 and older counts at 2013, so a row labelled with one year is dated by its newest field; the page keeps every year on every figure and never combines across them. The programming form is created_at against updated_at; file creation and modification times, with a plain copy getting a new creation time; migrations that stamp old rows with the import date unless the originals are carried across; version control, where a repository has a first commit but every line has its own date; and datasets with a reference date, a publication date and a download date, where the run date is mistaken for the data date, and models evaluated on data dated after training look better than they are. The remedy is to store the event with the date, keep a field per event, carry originals through migrations, and refuse to date a whole by a part. Distinct from mixing vintages in arithmetic (Apeldoorn), since nothing is combined here and the question is what one date may be attached to; from provenance lost in storage and the estimate read as a count (Loosduinen); from a name outliving its referent (Scheveningen); from epochs and offsets (Amersfoort); and from base-year choice (Flevoland, Emmen).',
    requiredMentions: [
      '9,216',
      '8,783',
      '23,660',
      '12,200',
      '11,215',
      '4,056',
      '1583',
      'hallenhuis',
      'Sint-Martinuskerk',
      'Corbey',
      'Apollohuis',
      'Boelaars',
      'Tongelresestraat',
      'Urkhoven'
    ],
    sources: [
      { claim: 'Tongelre (encyclopaedia): Tongelre was tot 1920 een zelfstandige gemeente in Noord-Brabant. Infobox: 23.105 inwoners (2023, 2.442 inw./km2); 11.073 woningen; oppervlakte 9,46 km2, land 9,2, water 0,27. Tongelre kent 3 wijken en 10 buurten: Oud-Tongelre, De Laak, Doornakkers. De kom van Tongelre wordt gevormd door t Hofke, waaromheen alle belangrijke gebouwen, zoals de kerk en het gemeentehuis, zijn gegroepeerd. t Hofke 13 is een der oudste woonhuizen van de gemeente Eindhoven; de balkenconstructie is uit 1583. Het was oorspronkelijk een driebeukig hallenhuis dat in 1600 werd vergroot. Het huidige uiterlijk stamt uit de 18e eeuw. In 2007/2008 is dit rijksmonument aan de buitenkant gerestaureerd; na leegstand is op 5 mei 2010 de boerderij gekraakt. Oude raadhuis uit 1911, aan t Hofke; tegenwoordig is het een buurthuis. Sint-Martinuskerk: deze neogotische driebeukige kruisbasiliek werd ingewijd in 1891; architect van de kerk was E. Corbey. Het Apollohuis aan de Tongelresestraat 81: de voormalige sigarenfabriek van de Fa. Boelaars en Zn., gebouwd in 1919. Collse Watermolen. Sedertdien had het gebouw meerdere bestemmingen; sinds 1993 is hier het DAF Museum gevestigd.', url: 'https://nl.wikipedia.org/wiki/Tongelre' },
      { claim: 'Wijk Oud-Tongelre, Eindhoven: 9,216 inwoners (2026), 8,950 (2025), 8,685 (2013); mannen 4,690, vrouwen 4,260 (2025); bevolkingsdichtheid 1,379 per km2 (2025); 671 hectare, 649 land, 23 water (2025); 4,650 huishoudens, 2,270 eenpersoonshuishoudens, 1,110 zonder kinderen, 1,270 met kinderen, gemiddelde huishoudensgrootte 1.9 (2025); ages 1,275, 1,380, 2,505, 2,215, 1,805 (2026); woningvoorraad 4,329, 1,991 koopwoningen, 2,338 huurwoningen (2025); gemiddelde WOZ 395,000 euro (2025); gemiddeld inkomen per inwoner 34,700 and per inkomensontvanger 41,400 euro (2024); buurten Koudenhoven, Karpen, t Hofke, Muschberg Geestenberg, Urkhoven; 2 vestigingen basisonderwijs with 657 leerlingen, 1 voortgezet onderwijs with 1,200.', url: 'https://allecijfers.nl/wijk/oud-tongelre-eindhoven/' },
      { claim: 'Wijk De Laak, Eindhoven: 5,661 inwoners (2026), 5,695 (2025), 5,265 (2013); mannen 3,035, vrouwen 2,660 (2025); bevolkingsdichtheid 5,529 per km2 (2025); 105 hectare, 103 land, 2 water; 3,165 huishoudens, 1,745 eenpersoonshuishoudens, 745 zonder kinderen, 675 met kinderen, gemiddelde huishoudensgrootte 1.8 (2025); ages 635, 830, 2,010, 1,355, 815 (2026); woningvoorraad 2,830, 1,274 koopwoningen, 1,556 huurwoningen (2025); gemiddelde WOZ 449,000 euro (2025); gemiddeld inkomen per inwoner 42,400 and per inkomensontvanger 49,900 euro (2024); buurten Villapark, Lakerlopen; 1 vestiging basisonderwijs with 966 leerlingen, 0 voortgezet onderwijs.', url: 'https://allecijfers.nl/wijk/de-laak-eindhoven/' },
      { claim: 'Wijk Doornakkers, Eindhoven: 8,783 inwoners (2026), 8,785 (2025), 7,170 (2013); mannen 4,600, vrouwen 4,185 (2025); bevolkingsdichtheid 5,229 per km2 (2025); 170 hectare, 168 land, 2 water; 4,385 huishoudens, 2,065 eenpersoonshuishoudens, 1,005 zonder kinderen, 1,305 met kinderen, gemiddelde huishoudensgrootte 2.0 (2025); ages 1,490, 1,160, 2,900, 2,020, 1,210 (2026); woningvoorraad 4,056, 1,704 koopwoningen, 2,352 huurwoningen (2025); gemiddelde WOZ 364,000 euro (2025); gemiddeld inkomen per inwoner 32,000 and per inkomensontvanger 39,700 euro (2024); buurten Doornakkers-West, Doornakkers-Oost, Tongelresche Akkers; 1 vestiging basisonderwijs with 420 leerlingen.', url: 'https://allecijfers.nl/wijk/doornakkers-eindhoven/' },
      { claim: 'Groot-Eindhoven: the annexation of the five randgemeenten Strijp, Gestel en Blaarthem, Stratum, Tongelre and Woensel on 1 January 1920.', url: 'https://nl.wikipedia.org/wiki/Geschiedenis_van_Eindhoven' },
      { claim: 'School holiday regions: regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'That the farmhouse at t Hofke 13 was built in 1583. The source dates its beams to 1583 and gives no date for the house as a whole.',
      'That the Sint-Martinuskerk was built in 1891. It was consecrated in 1891; the construction dates are not given here.',
      'That the DAF Museum building was built for the museum, or any statement about its earlier uses beyond the sentence that it had several.',
      'Any growth rate for Doornakkers from 7,170 in 2013 to 8,783 in 2026. Base-year choice is the Flevoland and Emmen argument.',
      'Any figure combining years, such as a 2026 per-dwelling ratio built from 2026 residents and 2025 dwellings. Mixing vintages is the Apeldoorn argument.',
      'Any use of the Tongelre poverty figures to rank the wijken. Reading a threshold ladder as a curve is the Woensel-Noord argument.',
      'A name outliving the thing it named, as with the building now called the Apollohuis. That is the Scheveningen argument; this page concerns dates only.',
      'Anything about DAF itself, its plant or its history beyond the museum sentence.',
      'Anything the Eindhoven city page owns, including the named secondary schools and their addresses, the High Tech Campus and the Indian-origin figures.'
    ]
  }
};
