'use strict';
// Zeeland: the province page. Thirteen municipalities on what used to be
// islands, a capital that is the largest town but not the largest
// municipality, and a municipality that is the largest by count and only the
// fourth town. Spine: the unit of observation decides the ranking, and the
// same name can label two different units.

module.exports = {
  slug: 'coding-classes-in-zeeland',
  code: 'zld',
  accent: '#4F2C5D',
  accentRationale: 'Zeeland: a dark mussel-shell violet the solver found furthest from the accents this page links to',
  pageType: 'governorate',
  place: {
    name: 'Zeeland',
    eyebrow: 'Province of Zeeland',
    schemaType: 'AdministrativeArea',
    chain: [{ type: 'Country', name: 'Netherlands' }]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Zeeland, Netherlands',
  title: 'Coding Classes in Zeeland | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across Zeeland, ages 6 to 67: Middelburg, Vlissingen, Goes, Terneuzen, Zeeuws-Vlaanderen and all 13 municipalities.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in all 13 municipalities of Zeeland, the province of former islands, built on the question of what counts as the largest place.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'cybersecurity-course-for-teens-ethical-defensive',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Zeeland Learners',
    description: 'Ability-placed online coding, Python, cybersecurity, app development and mathematics for children, teenagers and adults across the 13 municipalities of the province of Zeeland, taught in English.'
  },

  h1: 'Coding classes in Zeeland, where the largest place has two different names depending on what you count',
  capsuleQ: 'What are the best coding classes in Zeeland?',
  capsule: 'Coding classes in Zeeland serve 394,538 people in 13 municipalities (Statistics Netherlands, 1 January 2026), spread over what were islands until the Delta Works joined them, with a quarter of residents over sixty-five and 39 percent of the province under water. Terneuzen is the largest municipality, at 55,955, and only the fourth town; Middelburg is the largest town, at 43,165 in 2023, and only the second municipality. The same name labels two different things, and the ranking flips between them. Modern Age Coders runs one live online class in English across all 13, for anyone from 6 to 67; the first lesson is free, and after it a group of five to ten is USD 100 a month and a private teacher USD 150.',
  lead: 'Ask what the largest place in Zeeland is and a child gets two right answers that contradict each other. By municipality it is Terneuzen; by town it is Middelburg, and Terneuzen the town is fourth. Nothing is wrong with either table. They count different things under the same names, and a program that joins them, or ranks one with the other\'s numbers, will be confidently wrong. A child who has built the ranking twice and watched it flip has learned to ask, of any table, what one row actually is.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Zeeland.',

  picks: {
    eyebrow: 'Course picks for Zeeland',
    h2: 'Four courses for thirteen municipalities that used to be islands',
    intro: 'A groep 5 child in Goes who lives in Minecraft, a teenager in Vlissingen who wants to know how the bad actors get in and how to keep them out, a HZ student in Middelburg who wants an app on both phones, and a parent in Terneuzen whose port job runs on spreadsheets nobody explained: four doors into a province with a lot of bridges.',
    items: [
      { course: 'minecraft-coding-for-kids-course', band: 'Ages 8 to 12', note: 'From blocks to real code inside the game a groep 5 to 8 child already plays, in English, anywhere from Zierikzee to Hulst.' },
      { course: 'cybersecurity-course-for-teens-ethical-defensive', band: 'Ages 13 to 18', note: 'Online safety and white-hat defence, for the teenager in Vlissingen or Goes who wants the technical side of the news, legally.' },
      { course: 'complete-flutter-app-development-masterclass-college', band: 'College and adult', note: 'Dart and Flutter to a real cross-platform app, for the HZ student or the adult who wants one codebase on both phones.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Excel, Sheets and Power BI with AI for the parent in Terneuzen or Middelburg whose reports would be right if the tables agreed on what a row is.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Zeeland today',
      h2: 'Thirteen municipalities, a quarter over sixty-five, and more water than most provinces have land',
      intro: 'Statistics Netherlands counted 394,538 residents on 1 January 2026 in 183,267 households, 57,240 of them under fifteen, 41,744 aged fifteen to twenty-five and 100,648 aged sixty-five or more, on 1,779.89 square kilometres of land inside 2,933.45 of territory. That is 221 to the square kilometre of land, and a rise of 7.8 percent from 365,846 in 1995.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The two largest, by two measures', p: 'Terneuzen is the largest municipality, 55,955 people and 14.2 percent of the province, across the Westerschelde in Zeeuws-Vlaanderen. Middelburg, 50,439 as a municipality, is the capital and, at 43,165 in its town alone in 2023, the largest town, and by the province\'s own entry the smallest provincial capital in the country. Vlissingen at 45,878 and Goes at 40,387 follow.' },
          { h3: 'The schools, and the age of the province', p: '215 primary establishments teach 30,786 pupils and 41 secondary establishments 17,922, the smallest secondary count in this series after Drenthe. The under-fifteens are 14.5 percent of the province and the over-sixty-fives 25.5 percent, one in four, which is the shape of a province people retire to and leave for university.' },
          { h3: 'Islands that stopped being islands', p: 'Walcheren, Noord-Beveland, Zuid-Beveland, Schouwen-Duiveland, Tholen and Sint Philipsland were islands or near enough until the dams and bridges of the Delta Works joined them; Zeeuws-Vlaanderen never was one and is reached from the rest of the province only by the Westerscheldetunnel or through Belgium.' }
        ] },
        { kind: 'spec', title: 'The night of 31 January 1953', p: 'In the night of Saturday 31 January to Sunday 1 February 1953 a north-westerly storm met a spring tide and the dikes broke in about 150 places. The flood killed 1,836 people in the Netherlands, 864 of them in Zeeland, put more than 150,000 hectares under water and drove 72,000 people from their homes. The Deltaplan and the Delta Works, the Oosterscheldekering among them, are the country\'s answer, and every dam in the province is a date.' }
      ]
    },
    {
      id: 'spread', tint: 'tint', eyebrow: 'The spread',
      h2: 'From Terneuzen to Noord-Beveland: all 13 municipalities, by population',
      intro: 'The former islands and the one mainland, the municipalities on each, and the figure the register held for every one on 1 January 2026, the smallest being Noord-Beveland at 8,067.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Walcheren', p: 'Middelburg 50,439, the capital, a page to come; Vlissingen 45,878, the port and the naval town, a page to come; Veere 22,037, the coast from Domburg to the Veerse Meer. The old island where the province is governed.' },
          { h3: 'Zuid-Beveland', p: 'Goes 40,387, the market town in the middle of the province, a page to come; Reimerswaal 23,388, which is Yerseke and the oyster beds; Borsele 23,186, the villages around the nuclear plant and the tunnel mouth at Ellewoutsdijk; Kapelle 13,186.' },
          { h3: 'Zeeuws-Vlaanderen', p: 'Terneuzen 55,955, the largest municipality and the canal port to Ghent, a page to come; Hulst 27,376, the walled town on the Belgian line; Sluis 23,199, which is the coast from Breskens to Cadzand and the Belgian border the whole way round.' },
          { h3: 'Schouwen-Duiveland', p: 'Schouwen-Duiveland 34,409, one municipality for the whole island, with Zierikzee, the Brouwersdam and the eastern end of the Oosterscheldekering.' },
          { h3: 'Tholen and Sint Philipsland', p: 'Tholen 27,031, the two former islands in the north-east that look to Bergen op Zoom across the water rather than to Middelburg.' },
          { h3: 'Noord-Beveland', p: 'Noord-Beveland 8,067, the smallest, a former island of six villages between the Oosterschelde and the Veerse Meer, reached by the Zeelandbrug from the north and a dam from the south.' }
        ] },
        { kind: 'p', text: 'Thirteen, all present. Middelburg, Vlissingen, Goes and Terneuzen will each get a page of their own; this one holds the whole delta, from the tunnel to the Brouwersdam, in one view.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure and its source, including two counts for one town and two for one municipality',
      intro: 'The national count, the 13 registers, the province\'s entry, the entries for two towns and one municipality, the tunnel and the flood.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'From the national office', p: 'Statistics Netherlands, provisional, 1 January 2026: 394,538 residents in 13 municipalities; 183,267 households; 57,240 under fifteen; 41,744 aged fifteen to twenty-five; 100,648 aged sixty-five and over; 215 primary establishments with 30,786 pupils and 41 secondary with 17,922; land 177,989 hectares, territory 293,345; density 221; 365,846 residents in 1995.' },
          { h3: 'The thirteen', p: 'Terneuzen 55,955; Middelburg 50,439; Vlissingen 45,878; Goes 40,387; Schouwen-Duiveland 34,409; Hulst 27,376; Tholen 27,031; Reimerswaal 23,388; Sluis 23,199; Borsele 23,186; Veere 22,037; Kapelle 13,186; Noord-Beveland 8,067. The thirteen sum to 394,538 exactly, checked before the ranking was built either way.' },
          { h3: 'The province, described', p: 'Capital Middelburg; Commissaris van de Koning Hugo de Jonge; 394,514 residents at the end of 2025 across 13 municipalities; 2,933.44 square kilometres in total, 1,782.12 of land and 1,151.32 of water; the former islands Walcheren, Noord-Beveland, Zuid-Beveland, Schouwen-Duiveland, Tholen and Sint Philipsland, and Zeeuws-Vlaanderen; town figures of about 34,000 for Vlissingen, 29,226 for Goes and 25,511 for Terneuzen, dates unstated; the Westerscheldetunnel and the Oosterscheldekering.' },
          { h3: 'Two towns, one municipality', p: 'The entry for the town of Middelburg: 43,165 residents on 1 January 2023, the largest town in Zeeland and the smallest provincial capital in the country; 50,438 for the municipality on 1 January 2026, one short of the register list. The entry for the town of Terneuzen: 26,080 in 2023, the fourth town of Zeeland and the largest in Zeeuws-Vlaanderen, against 25,511 in the province\'s entry. The entry for the municipality of Terneuzen: 55,942 on 1 January 2026, thirteen short of the register list; 317.76 square kilometres; thirteen towns and villages; the largest municipality in Zeeland by residents. Every pair is kept.' },
          { h3: 'The tunnel', p: 'The Westerscheldetunnel opened on 14 March 2003, 6.6 kilometres long and the longest road tunnel in the country, 60 metres below the water at its deepest, between Ellewoutsdijk and Terneuzen. It replaced the Kruiningen to Perkpolder car ferry and reduced Breskens to Vlissingen to a foot and bicycle ferry. Cars and motorcycles have crossed toll-free since 30 December 2024 at three in the afternoon; other vehicles pay until 2033.' },
          { h3: 'The flood, and the holiday region', p: 'The entry on the 1953 flood: the night of 31 January to 1 February; 1,836 dead in the Netherlands, 864 in Zeeland and 677 in Zuid-Holland; over 150,000 hectares flooded; about 150 breaches; about 100,000 people lost their homes; 72,000 evacuated; the Deltaplan followed. Zeeland takes its school holidays with regio Zuid, alongside Noord-Brabant, Limburg and the south of Gelderland.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no link to the province, its 13 municipalities, the tunnel company or any school named here, and claims none. They are on the page because a page that says Zeeland ought to know which Zeeland it means.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'What is the largest place in Zeeland? Build the ranking twice and find out why the answer changes',
      intro: 'Four names, two kinds of row, two rankings that disagree, and a lesson about what a row is that every dataset a child will ever meet depends on.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Rank the municipalities', p: 'The learner loads the 13 register counts and sorts them. Terneuzen first at 55,955, Middelburg second at 50,439, Vlissingen third at 45,878, Goes fourth at 40,387. Clean, sourced, and the answer to one question: which municipality is largest.' },
          { h3: '2. Rank the towns', p: 'Then the town counts, from the entries that give them: Middelburg 43,165, Vlissingen about 34,000, Goes 29,226, Terneuzen 26,080. Sorted, the order is Middelburg, Vlissingen, Goes, Terneuzen. First has become fourth and second has become first, and every number is still right.' },
          { h3: '3. Find what a row is', p: 'The learner asks why, and finds it in the areas: the municipality of Terneuzen is 317.76 square kilometres and thirteen separate places, of which the town is one. A row in the first table is an administrative area; a row in the second is a settlement. Same names, different things, and any program that mixes them will rank a district against a village and call it a city.' }
        ] },
        { kind: 'table', caption: 'Four names, two units, two rankings', head: ['Name', 'As a municipality, 1 January 2026', 'Rank', 'As a town, 2023 or undated', 'Rank'], rows: [
          ['Terneuzen', '55,955', '1', '26,080', '4'],
          ['Middelburg', '50,439', '2', '43,165', '1'],
          ['Vlissingen', '45,878', '3', 'about 34,000', '2'],
          ['Goes', '40,387', '4', '29,226', '3']
        ] },
        { kind: 'callout', h3: 'The unit of observation is part of every number', p: 'A count is a count of something, and the something is chosen before the counting starts: a municipality, a town, a postcode, a household, a person. Two tables can carry the same names and the same column heading and still be counting different things, and the difference does not show up as an error. It shows up as Terneuzen being both the biggest and the fourth. A learner who has built both rankings will ask of every table what one row is before they trust a single sort on it, and will refuse to join a table of districts to a table of villages on the strength of a shared name. The rankings were built before this paragraph was written; every count is quoted from the entry that gives it, with its date where the entry gives one, and the ranks are what sorting returns.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any two tables that share their names',
      intro: 'School and school board, shop and chain, account and customer, ward and town: every dataset has levels, and the levels share names. Rehearsed first on the province where the largest place depends on the level.',
      body: [
        { kind: 'table', caption: 'When one name labels two kinds of row', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Say what a row is', 'Write the unit into the table\'s name: municipalities, not places', 'Terneuzen the district ranked against Middelburg the town', 'Rankings that compare like with like'],
          ['Keep the levels apart', 'One table per unit; never mix settlement rows into an administrative table', 'A 55,955 beside a 43,165 that measure different things', 'Columns that mean one thing'],
          ['Date every count', 'A 2023 town figure and a 2026 municipal figure are not the same year', 'Middelburg 43,165 read as current', 'Comparisons at one date'],
          ['Join only within a level', 'A shared name is not a key across levels; a town is inside a municipality, not equal to it', 'Terneuzen 26,080 overwritten by Terneuzen 55,955', 'A hierarchy, not a collision'],
          ['Answer the question asked', '"Largest place" needs the unit stated before it can be answered', 'Two right answers that contradict each other', 'One answer, with its unit attached']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A box of building blocks sorted two ways: by the size of each block, and by the size of the tower each block belongs to. The tallest tower can be made of small blocks. The child finds that "biggest" needs a second word, block or tower, before it means anything, and says so before the teacher does.' },
          { h3: 'For teenagers', p: 'Both tables in Python, both sorts, a printed pair of rankings, and then the deliberate mistake: join them on the name and see Terneuzen get two populations. The fix is a third column, the municipality each town sits inside, and a join that respects it. The stretch: what share of each municipality lives in its main town, and which one is most a town and which most a district?' },
          { h3: 'For adults', p: 'The same discipline on a pair of tables from work that share names across levels: branch and region, product and range, account and customer. Adults usually find that a report they trust ranks one level with the other level\'s numbers, and has done for years.' }
        ] },
        { kind: 'p', text: 'The provincial totals, the 13 municipal counts, the areas, the town figures, the tunnel and the flood are all quoted from the sources named beside them. The ranks are what a sort returns on those figures, shown as exactly that, and every place where two sources give two numbers for one thing is shown as two numbers.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From blocks and towers to a join that respects the level',
    intro: 'The first free hour decides the rung, and which former island the family lives on is not one of the things it looks at.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Biggest block, biggest tower', p: 'Children sort the same blocks two ways and discover that biggest needs a second word.', courses: ['kids-coding-blocks-masterclass', 'minecraft-coding-for-kids-course'] },
      { band: 'Ages 11 to 13', h3: 'Two sorts, two answers', p: 'Learners sort two small tables and explain why the first place changes.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Levels, keys and the join that breaks', p: 'Teenagers join across levels on purpose, watch Terneuzen double, and fix it with a hierarchy column.', courses: ['cybersecurity-course-for-teens-ethical-defensive', 'mysql-mastery-for-teens'] },
      { band: 'Ages 18 to 67', h3: 'Levels at work', p: 'Adults find the report that ranks one level with the other\'s numbers and rebuild it.', courses: ['complete-flutter-app-development-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will name the largest city in Zeeland without asking what you mean by city. Why should a child in Goes learn to ask?',
    intro: 'Because the assistant picks a unit silently, and a silent unit is the difference between Terneuzen first and Terneuzen fourth.',
    p1: 'Ask a tool for the largest city in Zeeland and it will say Middelburg or Terneuzen, and either is defensible, and it will not say which table it read. It is not wrong. It has answered a question with a hidden word in it and left the word hidden. The person who spots the gap is the one who has sorted both tables and watched the first row change, and who therefore hears "largest" and asks, before anything else, largest what.',
    p2: 'That is the reflex the class installs, and the reason the learner still builds the two rankings rather than asking for one. The tool will write the sort, the join and the fix in seconds. What it will not do unasked is stop and say that these two tables count different things. A thirteen-year-old in Vlissingen who has seen Terneuzen get two populations will ask what a row is of a school league table at sixteen and a sales dashboard at twenty-six, and will be the one who catches a region ranked against a branch. The tools will be renamed several times before then. The question of what a row is will not go away.',
    closer: 'For a Zeeland parent, then, coding in 2026 is not about a career in statistics. It is about whether the child should carry the habit of naming the unit before trusting the number, and whether the quickest way to build that habit is to rank their own province two ways and see the answer flip. This class was built on the belief that it is.',
    blogAnchor: 'why coding is still worth learning when AI does most of the typing'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a province where the next town is across the water',
    intro: 'Zeeuws-Vlaanderen reaches the capital through a tunnel with a toll for half its vehicles, Tholen looks to Brabant, and Schouwen-Duiveland is a bridge and a dam from anywhere. A class that comes through the cable does not cross any of it.',
    cells: [
      { h3: 'No tunnel, no bridge, no dam', p: 'The lesson happens at home in Hulst, Zierikzee or Yerseke at the same hour every week, and the Westerschelde stays where it is.' },
      { h3: 'English, with the school\'s words untouched', p: 'The teaching is in English. Groep, havo, vwo and profielkeuze are said as the school says them and left in Dutch, and Zeeuws stays in the playground.' },
      { h3: 'What the free hour produces', p: 'A task at the learner\'s real level, a course chosen from how it went and a rung to start on, and no card is asked for to arrange it.' },
      { h3: 'Grouped by level, not by island', p: 'Level and aim put a learner in a group; Walcheren, Tholen and Zeeuws-Vlaanderen sit in the same one.' },
      { h3: 'Twice a week, on regio Zuid\'s calendar', p: 'Two fixed lessons a week, usually eight in a month. Zeeland\'s summer break follows regio Zuid, with Brabant and Limburg, and the family\'s weeks away are settled before the slot.' },
      { h3: 'The time difference', p: 'Zeeland is three and a half hours behind the teacher while Dutch summer time runs and four and a half hours behind in winter, because India keeps one clock. Late afternoon, early evening and the weekend suit both sides.' }
    ],
    spec: { title: 'One in four residents is over sixty-five, and the class runs to sixty-seven', p: 'Zeeland is, with Drenthe, the oldest province on this site by share of retired people, and the adult end of the age range this class serves is not a footnote. The adult pipeline on this page is written for a sixty-year-old in Veere as much as for a nine-year-old in Goes, and the first free hour is the same for both.' }
  },

  fees: {
    h2: 'Thirteen municipalities, one price in dollars, and a free hour before it',
    intro: 'Set out here before anyone asks for a name.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'Everyone outside India sees the same figure in US dollars and never a euro one, so Noord-Beveland is charged what Middelburg is. The free lesson decides the course and the hour first, and payment comes afterwards over WhatsApp; the pricing page explains pausing, changing plan and missed lessons.'
  },

  reviewsH2: 'Six Google reviews, in the reviewers\' own words',

  book: {
    h2: 'Tell us the level; the island is optional',
    intro: 'The first task might be a box of blocks sorted two ways, two tables in Python that share their names, or a report from work that ranks regions with branch numbers.',
    success: 'Thank you. Your Zeeland class request has been sent.'
  },

  faq: {
    h2: 'Zeeland coding class questions',
    intro: 'The province, its towns, the ranking, the teaching and the terms.',
    items: [
      { q: 'What is the largest place in Zeeland?', a: 'It depends on what a place is, which is the project on this page. Terneuzen is the largest municipality, with 55,955 residents on 1 January 2026, but the town of Terneuzen had 26,080 in 2023 and is the fourth town. Middelburg is the largest town, at 43,165 in 2023, and the second municipality at 50,439. Both rankings are right; they count different things under the same names.' },
      { q: 'Do Middelburg, Vlissingen, Goes and Terneuzen get pages of their own?', a: 'They will, later in this series. The other nine municipalities, from Schouwen-Duiveland and Hulst to Noord-Beveland, are listed above with their populations, and this is their page.' },
      { q: 'We live in Zeeuws-Vlaanderen, on the far side of the tunnel. Is that a problem?', a: 'Not for a class that arrives through the router. A learner in Hulst or Terneuzen is in one group with one from Middelburg at one fixed hour, and the tunnel, its toll and the border with Belgium have nothing to do with it.' },
      { q: 'Does the teacher speak Dutch?', a: 'Teaching is in English. The school\'s words, groep, havo, vwo and profielkeuze, are kept exactly as the school uses them, but a Dutch-language class is not offered, and neither is one in Zeeuws.' },
      { q: 'What time are classes for a family in Zeeland?', a: 'While Dutch summer time runs, a Zeeland afternoon is three and a half hours behind the teacher; in winter it is four and a half, because India keeps a single clock. Late afternoon, early evening and weekend hours are open on both sides, and the fixed weekly one is agreed at the free lesson.' },
      { q: 'Is Middelburg the smallest provincial capital in the country?', a: 'By the province\'s own entry, yes: the town of Middelburg had 43,165 residents on 1 January 2023, the largest town in Zeeland and the smallest capital of any Dutch province. The municipality, which includes Arnemuiden and Nieuw- en Sint Joosland, had 50,439 on 1 January 2026.' },
      { q: 'What happens in the free lesson?', a: 'The teacher finds what the learner can already do and sets one task just past it. A child sorts blocks by block and by tower. A teenager sorts two tables and joins them wrongly on purpose. An adult brings a report that ranks one level with another\'s numbers. It ends with a course, a starting rung, a weekly hour and the price in dollars, and nothing has been charged.' },
      { q: 'Is there a Modern Age Coders classroom anywhere in Zeeland?', a: 'No, and none is claimed in Middelburg, in Terneuzen or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Zeeland coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Zeeland group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or municipality. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'East into Brabant, north across the delta, and up to the country',
    html: 'East along the A58 is <a class="cg-inline-link" href="/coding-classes-in-noord-brabant">Noord-Brabant</a>, with the border that has holes in it; north across the Haringvliet is <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a> and its region with no boundary. Both, and this page, descend from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>; a learner after models rather than programs should go to <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>. Middelburg, Vlissingen, Goes and Terneuzen follow.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-noord-brabant', label: 'Noord-Brabant' },
    { href: '/coding-classes-in-zuid-holland', label: 'Zuid-Holland' }
  ],

  personalityCss: `
.cg-root.cg-zld .cg-hero-grid { align-items: center; gap: clamp(1.75rem, 4.5vw, 3.5rem); }
.cg-root.cg-zld .cg-hero h1 { font-weight: 500; letter-spacing: -0.009em; line-height: 1.11; }
.cg-root.cg-zld .cg-capsule { border-left-width: 2px; border-left-style: solid; border-top: 2px solid var(--cg-accent-soft); padding-left: 1.4rem; padding-top: 0.8rem; }
.cg-root.cg-zld .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; }
.cg-root.cg-zld .cg-section-head h2 { max-width: 35ch; }
.cg-root.cg-zld .cg-grid-3 { gap: clamp(1.1rem, 2.4vw, 1.8rem) clamp(1.5rem, 3.2vw, 2.4rem); }
.cg-root.cg-zld .cg-ladder-col { border-top: 3px double var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-zld .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-zld .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Province of Zeeland: 13 municipalities, 394,538 residents (CBS 1 January 2026), 215 primary establishments (30,786 pupils) and 41 secondary (17,922). Capital Middelburg (largest town, 43,165 in 2023; second municipality, 50,439). Largest municipality Terneuzen (55,955; town 26,080 in 2023, fourth). Former islands joined by the Delta Works after the 1953 flood (1,836 dead, 864 in Zeeland). Westerscheldetunnel 2003. Over-65 share 25.5 percent. Regio Zuid holidays. A province page is about the spread; the hub owns the national curriculum.',
    localProject: 'The unit of observation decides the ranking (one name, two kinds of row). Municipal counts: Terneuzen 55,955, Middelburg 50,439, Vlissingen 45,878, Goes 40,387. Town counts: Middelburg 43,165 (2023), Vlissingen about 34,000, Goes 29,226, Terneuzen 26,080 (2023). Sorted, first becomes fourth and second becomes first. The learner builds both rankings, joins them on the name to see Terneuzen get two populations, and fixes it with a hierarchy column. Distinct from the part-to-whole trap (Bandar Seri Begawan: adding a town to its municipality), from the Lumut trap (several settlements sharing one name) and from the scope trap (Limburg: which set): the flaw here is ranking rows of one level with figures from another because the labels match. Built before writing; every pair of differing counts is kept.',
    requiredMentions: [
      '394,538',
      '13 municipalities',
      'Terneuzen',
      'Middelburg',
      'Vlissingen',
      'Goes',
      'Zeeuws-Vlaanderen',
      'Walcheren',
      'Schouwen-Duiveland',
      'Noord-Beveland',
      'Westerscheldetunnel',
      '43,165',
      '26,080',
      '365,846'
    ],
    sources: [
      { claim: 'Zeeland 394,538 residents on 1 January 2026 (CBS provisional); 13 municipalities; total area 293,345 ha, land 177,989 ha, water 115,355 ha; density 221; 183,267 households; 57,240 under 15; 41,744 aged 15 to 25; 100,648 aged 65 and over; 215 primary establishments (30,786 pupils); 41 secondary (17,922); 365,846 in 1995, a rise of 28,692 (7.8 percent).', url: 'https://allecijfers.nl/provincie/zeeland/' },
      { claim: 'All 13 municipalities on 1 January 2026: Terneuzen 55,955; Middelburg 50,439; Vlissingen 45,878; Goes 40,387; Schouwen-Duiveland 34,409; Hulst 27,376; Tholen 27,031; Reimerswaal 23,388; Sluis 23,199; Borsele 23,186; Veere 22,037; Kapelle 13,186; Noord-Beveland 8,067.', url: 'https://allecijfers.nl/ranglijst/grootste-en-kleinste-gemeenten-in-inwoners-in-de-provincie-zeeland/' },
      { claim: 'Capital Middelburg; Commissaris van de Koning Hugo de Jonge; 394,514 residents end 2025 across 13 municipalities; 2,933.44 km2 total, 1,782.12 land, 1,151.32 water; former islands and peninsulas Walcheren, Noord-Beveland, Zuid-Beveland, Schouwen-Duiveland, Tholen, Sint Philipsland, and Zeeuws-Vlaanderen; town figures Vlissingen about 34,000, Goes 29,226, Terneuzen 25,511; the Westerscheldetunnel, 6.6 km, opened 2003; the Oosterscheldekering as part of the Deltawerken after the 1953 flood.', url: 'https://nl.wikipedia.org/wiki/Zeeland_(provincie)' },
      { claim: 'The town of Middelburg had 43,165 residents on 1 January 2023 and is the largest town of Zeeland and the smallest provincial capital in the country; the municipality had 50,438 on 1 January 2026.', url: 'https://nl.wikipedia.org/wiki/Middelburg_(Zeeland)' },
      { claim: 'The town of Terneuzen had 26,080 residents in 2023, the fourth town of Zeeland and the largest in Zeeuws-Vlaanderen.', url: 'https://nl.wikipedia.org/wiki/Terneuzen_(stad)' },
      { claim: 'The municipality of Terneuzen had 55,942 residents on 1 January 2026, the largest municipality of Zeeland by residents; 317.76 km2 (250.38 land, 67.38 water); 13 towns and villages plus hamlets.', url: 'https://nl.wikipedia.org/wiki/Terneuzen_(gemeente)' },
      { claim: 'Westerscheldetunnel opened 14 March 2003; 6.6 km, the longest road tunnel in the Netherlands; deepest point 60 m below water level at the Pas van Terneuzen; connects Ellewoutsdijk (Zuid-Beveland) with Terneuzen; replaced the Kruiningen to Perkpolder car ferry and reduced Breskens to Vlissingen to a bicycle and foot ferry; toll-free for cars and motorcycles from 30 December 2024 at 15:00; other vehicles tolled until 2033.', url: 'https://nl.wikipedia.org/wiki/Westerscheldetunnel' },
      { claim: 'The flood of the night of 31 January to 1 February 1953: 1,836 dead in the Netherlands, 864 in Zeeland and 677 in Zuid-Holland; over 150,000 ha inundated; about 150 dike breaches; about 100,000 people lost their homes; 72,000 evacuated; it led to the Deltaplan and the Deltawerken.', url: 'https://nl.wikipedia.org/wiki/Watersnoodramp_van_1953' },
      { claim: 'School holiday regions: regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'The dates of the town figures in the province\'s entry (Vlissingen about 34,000, Goes 29,226, Terneuzen 25,511). Undated there; the table says so and uses the dated Terneuzen figure from the town\'s own entry.',
      'Which villages belong to the municipality of Middelburg. Arnemuiden and Nieuw- en Sint Joosland are named in a FAQ from general knowledge, with no figures attached.',
      'The nuclear plant at Borssele, the oyster beds at Yerseke and the canal to Ghent. Named as landmarks in the spread only.',
      'That Zeeland and Drenthe are the two oldest provinces in the country by over-65 share. Only the provinces on this site were compared, and the page says so.',
      'Anything the Netherlands hub, Noord-Brabant or Zuid-Holland owns: the SLO core objectives, the Baarle enclaves, the Randstad.'
    ]
  }
};
