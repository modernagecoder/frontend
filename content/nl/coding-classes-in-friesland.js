'use strict';
// Friesland: the province page. One province, two official names, and a
// statistics website whose old address for it now says the page does not
// exist. Spine: a name is not an identifier. Join two tables on the name and
// the province with 665,208 people disappears between 1996 and 1997.

module.exports = {
  slug: 'coding-classes-in-friesland',
  code: 'frl',
  accent: '#0D6332',
  accentRationale: 'Friesland: a deep meadow green the solver placed clear of Noord-Holland\'s and Gelderland\'s greens',
  pageType: 'governorate',
  place: {
    name: 'Friesland',
    eyebrow: 'Province of Friesland (Fryslân)',
    schemaType: 'AdministrativeArea',
    chain: [{ type: 'Country', name: 'Netherlands' }]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Friesland, Netherlands',
  title: 'Coding Classes in Friesland (Fryslân) | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across Friesland, ages 6 to 67: Leeuwarden, Drachten, Sneek, Heerenveen, the Wadden islands and all 18 municipalities.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in all 18 municipalities of Friesland, the province with two official names, built on the join that loses it.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'mysql-database-complete-masterclass-college',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Friesland Learners',
    description: 'Ability-placed online coding, Python, SQL, AI and mathematics for children, teenagers and adults across the 18 municipalities of the province of Friesland (Fryslân), taught in English.'
  },

  h1: 'Coding classes in Friesland, the province a program loses the moment it joins on the name',
  capsuleQ: 'What are the best coding classes in Friesland?',
  capsule: 'Coding classes in Friesland cover 665,208 people in 18 municipalities (Statistics Netherlands, 1 January 2026), on the largest territory of any province and a coast with four inhabited islands. Since 1 January 1997 the province\'s official name has been Fryslân, its capital is Leeuwarden in Dutch and Ljouwert in Frisian, and six of its 18 municipalities carry Frisian names in the national register. A program that matches the 1995 count to the 2026 count by name finds nothing on either side, which is the reason this page has a join in it. Modern Age Coders teaches one live online class in English across all 18, for ages 6 to 67, with the first lesson free and then USD 100 a month in a group of five to ten or USD 150 with a teacher alone.',
  lead: 'Ask the national statistics website for Friesland at its old address and it replies that the address no longer exists, and sends you to Fryslân. The province did not move and nobody left. The key changed. A program that joins last decade\'s table to this year\'s on the name reports that a province of 665,208 people vanished, and a child in Sneek who has written that join and watched it happen has learned the difference between a name and an identifier, which most working databases never do.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Friesland.',

  picks: {
    eyebrow: 'Course picks for Friesland',
    h2: 'Four courses for a province with two names and eighteen town halls',
    intro: 'A groep 5 child on Terschelling who wants a game, a Drachten teenager who wants a model that predicts, a Leeuwarden student who needs SQL to mean something, and a parent in Heerenveen whose whole job is two spreadsheets that will not line up: four doors, one province.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Ages 7 to 12', note: 'Scratch, Roblox and Minecraft into real games, in English, for the groep 4 to 8 child anywhere from Schiermonnikoog to Wolvega.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Python to a first trained model, for the teenager in Drachten or Sneek who wants to know what the machine actually learned.' },
      { course: 'mysql-database-complete-masterclass-college', band: 'College and adult', note: 'SQL, database design and the joins that lose provinces, for the NHL Stenden or Van Hall student who wants the query to be right, not just to run.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Excel, SQL, Python and BI for the parent whose reports in Leeuwarden or Heerenveen depend on two tables agreeing about what things are called.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Friesland today',
      h2: 'The largest province by territory, the sixth by people, with a capital that holds one in five',
      intro: 'Statistics Netherlands counted 665,208 residents on 1 January 2026 in 306,801 households, 97,103 of them under fifteen and 80,237 aged fifteen to twenty-five, on 3,340.11 square kilometres of land inside 5,753.27 of territory, the rest being the Wadden Sea, the IJsselmeer and the lakes. That is 199 to the square kilometre of land, and a rise of 9.1 percent from 609,579 in 1995.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Leeuwarden and the rest', p: 'Leeuwarden, Ljouwert in Frisian, holds 130,162 people as a municipality, 19.6 percent of the province, and is the capital. Súdwest-Fryslân, which has no Dutch name at all, is second at 90,521 and includes Sneek and Bolsward. Smallingerland, which is Drachten, is third at 57,188.' },
          { h3: 'The schools', p: '348 primary establishments teach 53,420 pupils and 89 secondary establishments 34,500. Frisian is an official language alongside Dutch, taught in the province\'s primary schools, which is one more reason the vocabulary on this page is handled with care.' },
          { h3: 'Two names, one province', p: 'On 1 January 1997 the provincial council made Fryslân the official name. The Dutch name survives in daily use, on this page\'s address and in most of the country. Six of the 18 municipalities appear in the national register under Frisian names: Súdwest-Fryslân, De Fryske Marren, Waadhoeke, Noardeast-Fryslân, Tytsjerksteradiel and Dantumadiel.' }
        ] },
        { kind: 'spec', title: 'Water on three sides and inside', p: 'The Wadden Sea to the north with Vlieland, Terschelling, Ameland and Schiermonnikoog in it; the IJsselmeer to the west; the lakes of the south-west where the eleven cities of the Elfstedentocht sit. Land is 58 percent of the province\'s territory, the lowest share of any province on this site.' }
      ]
    },
    {
      id: 'spread', tint: 'tint', eyebrow: 'The spread',
      h2: 'From Leeuwarden to Schiermonnikoog: all 18 municipalities, by population',
      intro: 'Six parts, the municipalities in each, and the register count for every one on 1 January 2026, down to Schiermonnikoog at 972.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The capital and the north-west', p: '<a class="cg-inline-link" href="/coding-classes-in-leeuwarden">Leeuwarden</a> 130,162, the capital, with its own page; Waadhoeke 47,158, which is Franeker and the coast towards Harlingen; Harlingen 16,270, the ferry port for two of the islands.' },
          { h3: 'The south-west and the lakes', p: 'Súdwest-Fryslân 90,521, the largest municipality by area in the country, holding Sneek, Bolsward, Workum, Hindeloopen and Stavoren; De Fryske Marren 52,248, the lakes and Joure and Lemmer.' },
          { h3: 'Drachten and the east', p: 'Smallingerland 57,188, which is Drachten, the second town of the province and a page to come; Opsterland 30,068; Achtkarspelen 28,254; Tytsjerksteradiel 32,874. The Frisian Woods, where the language is strongest.' },
          { h3: 'Heerenveen and the south', p: 'Heerenveen 51,955, the skating town, a page to come; Weststellingwerf 26,622 and Ooststellingwerf 25,898, the two Stellingwerven on the Drenthe border where Stellingwerfs is spoken rather than Frisian.' },
          { h3: 'The north-east', p: 'Noardeast-Fryslân 45,935, which is Dokkum and the coast to the Lauwersmeer; Dantumadiel 19,231. The last stretch of mainland before Groningen.' },
          { h3: 'The islands', p: 'Terschelling 4,834; Ameland 3,816; Vlieland 1,202; Schiermonnikoog 972, the smallest municipality in the country. Four Wadden islands, four ferries, and the only classrooms in the province that a mainland teacher cannot drive to.' }
        ] },
        { kind: 'p', text: 'Eighteen, and all eighteen are above. Leeuwarden, Drachten and Heerenveen will each get a page that goes close; this one stays at the scale where an island of 972 people and a capital of 130,162 are both in the frame.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'The offices behind every number, and the address that no longer exists',
      intro: 'The national count, the 18 registers, the province\'s own entry, and the redirect this page walked into while checking them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The provincial count', p: 'Counted by Statistics Netherlands, provisional figures for 1 January 2026: 665,208 residents in 18 municipalities; 306,801 households; 97,103 under fifteen; 80,237 aged fifteen to twenty-five; 348 primary establishments with 53,420 pupils and 89 secondary with 34,500; land 334,011 hectares, territory 575,327; density 199; 609,579 residents in 1995.' },
          { h3: 'The eighteen', p: 'Every municipality with its 1 January 2026 register count, from Leeuwarden at 130,162 to Schiermonnikoog at 972. The 18 figures add to 665,208 exactly, which the class confirms before it writes a single join.' },
          { h3: 'The province, described', p: 'Official name Fryslân since 1 January 1997 by decision of the provincial council; capital Leeuwarden, Ljouwert; Commissaris van de Koning Arno Brok; 18 municipalities since 1 January 2019; 5,748.77 square kilometres in total, 3,335.62 of land and 2,413.15 of water, the largest province by total area; 665,276 residents at the end of 2025; Frisian an official language alongside Dutch; the islands Vlieland, Terschelling, Ameland and Schiermonnikoog; the eleven cities of the Elfstedentocht.' },
          { h3: 'The redirect', p: 'The statistics website\'s page for the province was requested at its Dutch-named address. The reply was that the address does not exist, or no longer does, and a pointer to the same page under the Frisian name. The ranking page for the municipalities behaved the same way. Both are quoted on this page as the worked example.' },
          { h3: 'Two counts, sixty-eight people apart', p: 'The national count gives 665,208 on 1 January 2026 and the province\'s entry gives 665,276 at the end of 2025; the land area is 3,340.11 square kilometres in one and 3,335.62 in the other. Both are kept, with their dates, and neither is corrected to the other.' },
          { h3: 'The holiday region', p: 'Friesland takes its school holidays with regio Noord, alongside Groningen, Drenthe, Overijssel, Flevoland and Noord-Holland, under the Rijksoverheid\'s division.' }
        ] },
        { kind: 'p', text: 'There is no tie, stated or implied, between Modern Age Coders and the province, its 18 municipalities, its islands or any school in them. They are named because a page that claims Friesland ought to know both of the province\'s names.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Friesland 1995, Fryslân 2026: build the join that loses the province, then the one that keeps it',
      intro: 'Two tables, one province, two keys, and a growth figure that comes out as minus one hundred percent until the learner stops matching on the name.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Build the two tables', p: 'A 1995 table with twelve provinces and their populations, keyed the way a 1996 document would key them: Friesland, 609,579. A 2026 table keyed the way the register keys them now: Fryslân, 665,208. The learner types both, with the accent, exactly as published.' },
          { h3: '2. Join on the name and watch', p: 'An inner join on the name matches eleven provinces and drops the twelfth from both sides. Growth for the country comes out short by a province. A left join from 1995 keeps Friesland with an empty 2026 column and reports its growth as minus one hundred percent. Neither is a bug in the join; both are the join doing what it was told.' },
          { h3: '3. Strip the accent and make it worse', p: 'The learner tries the obvious fix, lowercasing and removing accents so that Fryslân becomes fryslan. Now the two spellings of the Frisian name match each other, and Friesland still matches nothing, because the problem was never the circumflex. It was that the same thing had been given a new name, and only a key that does not change with the name can survive that.' }
        ] },
        { kind: 'table', caption: 'One province, four keys, and what a join reports', head: ['Key used', '1995 row', '2026 row', 'Match', 'Growth reported'], rows: [
          ['The name as written in 1996: Friesland', '609,579', 'not found', 'none', 'minus 100 percent, or the province dropped'],
          ['The name as written in 2026: Fryslân', 'not found', '665,208', 'none', 'undefined, or a province from nowhere'],
          ['The name with accents stripped: fryslan', 'not found', '665,208', 'none', 'still nothing on the 1995 side'],
          ['A stable code that does not change with the name', '609,579', '665,208', 'one row', 'plus 9.1 percent, which is the truth']
        ] },
        { kind: 'callout', h3: 'A name is a label; an identifier is a promise', p: 'Names are given to be read by people, and people rename things: provinces, streets, companies, products, countries. An identifier is given so that a machine can find the same thing again after the name has changed, and the difference is invisible until the day the two diverge. The statistics office keys every province and municipality with a code precisely so that its own tables survive its own renamings, and a learner who has watched a province vanish from a join on the name will reach for the code first for the rest of their working life. The table was worked through before this paragraph was written; both population figures and both names are quoted from the sources named above, and every verdict in it is what a join on that key returns and nothing else.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any two tables that are supposed to describe the same things',
      intro: 'Customer lists, product catalogues, school rolls, country tables where Czechia used to be the Czech Republic: every one of them joins on something, and the something is usually a name. Rehearsed first on the province that renamed itself.',
      body: [
        { kind: 'table', caption: 'When the key is a name', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Find the identifier', 'Ask whether the source publishes a code that outlives the name; use it', 'Friesland matched to nothing', 'A join that survives a renaming'],
          ['Count the unmatched', 'After every join, count rows lost from each side and print them', 'A province silently dropped', 'A list of exactly what fell through'],
          ['Keep the accent', 'Normalise for comparison only; never overwrite the published spelling', 'Fryslân stored as fryslan forever', 'Data that still reads as its owner wrote it'],
          ['Date the name', 'Record when a name was valid from and until', 'A 1996 name applied to a 2026 row', 'A table that knows Friesland became Fryslân on 1 January 1997'],
          ['Map the aliases', 'One thing, many names: keep a table of them and join through it', 'Leeuwarden and Ljouwert counted twice', 'One row per thing, however it is spelt']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Two lists: the register at school, with full names, and the birthday list at home, with nicknames. The child tries to match them and finds that Sytske and Sys are the same person and the lists disagree, then invents a number for each friend and matches on that. Ten minutes, no screen, and the child has designed a primary key.' },
          { h3: 'For teenagers', p: 'The two province tables in Python, an inner join and a left join on the name, a count of what each one loses, then the same joins on a code column. The stretch: build an alias table for Leeuwarden and Ljouwert, Sneek and Snits, Friesland and Fryslân, and join through it so that any spelling finds the row.' },
          { h3: 'For adults', p: 'The same exercise on two tables from work that are supposed to agree and do not: a supplier list that renamed itself, a product that changed its label, a customer who merged with another. Adults usually find the join their reports depend on has been dropping rows for years, and that nobody counted them.' }
        ] },
        { kind: 'p', text: 'The provincial totals, the 18 municipal counts, the areas, the name-change date and the redirect are published by the offices and the entry named in the sentences that use them. The verdicts in the table are what each join returns on the published names, shown as exactly that; the statistics office\'s code values themselves are not quoted here, because the page did not read them at source.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From two birthday lists to a join through an alias table',
    intro: 'The rung is found in the free lesson; the island or the town the laptop sits on is not one of the inputs.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Same friend, two names', p: 'Children match two lists that disagree and invent a number for each person.', courses: ['kids-coding-blocks-masterclass', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'A join in Python', p: 'Learners match two small tables on a name and count what falls through.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Keys, codes and aliases', p: 'Teenagers rebuild the join on a code, then through an alias table, and print the unmatched rows every time.', courses: ['mysql-mastery-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Two tables from work', p: 'Adults find the join their reports rest on and count what it has been losing.', courses: ['mysql-database-complete-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI knows Friesland and Fryslân are one place. Why should a child in Sneek learn what happens when a program does not?',
    intro: 'Because the assistant reads names the way a person does, and the databases the child will spend a career inside do not.',
    p1: 'Ask a tool whether Friesland and Fryslân are the same province and it will say yes without hesitation, and it will be right. Ask it to write a join between a 1995 table and a 2026 table and it will match on the name, because that is what the columns are called, and it will not count what fell through unless told to. The knowledge that the two names are one thing lives in the assistant; the join it wrote does not have it. The person who notices the missing province is the one who has watched one vanish before.',
    p2: 'Which is what the learner is here to become. The tool can produce the join, the alias table and the code column on request; what it will not supply is the habit of asking, of any two tables, what they are keyed on and what happens when the key changes. A thirteen-year-old in Drachten who has lost Friesland once will count the unmatched rows in every merge she runs at twenty-three, and will be the one who asks why the supplier list is short by one. The tools will change their names many times before then. The difference between a name and a key will not.',
    closer: 'A Frisian parent weighing coding in 2026, then, is not weighing a career in database administration. What is on the scale is whether the child should own the idea that names are labels and keys are promises, and whether the surest way to own it is to write the join that loses their own province and then the one that keeps it. The class says yes to both.',
    blogAnchor: 'whether coding is still worth learning in a year when AI writes so much of it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a province with four ferries in it',
    intro: 'A family on Ameland is a boat and a bus from anything on the mainland, and a family in Ooststellingwerf is closer to Drenthe than to Leeuwarden. A class that arrives through the router does not care which.',
    cells: [
      { h3: 'No ferry timetable', p: 'The lesson is at home on Terschelling, in Dokkum or in Wolvega at a fixed weekly hour, and the last boat never comes into it.' },
      { h3: 'English, with the school\'s Dutch and Frisian left alone', p: 'The lesson runs in English. Groep, havo and vwo are said as the school says them, and a child who does part of the school day in Frisian is not asked to translate anything.' },
      { h3: 'The first hour and its outcome', p: 'A real task at the learner\'s level, a course named from it and a rung to begin on, with no card requested to set it up.' },
      { h3: 'The group is set by ability', p: 'What the learner can do and wants next decides the group; the island, the woods or the capital does not.' },
      { h3: 'Twice a week, on regio Noord\'s year', p: 'Eight lessons a month at one recurring time. Friesland breaks up with regio Noord, and the summer fortnight is agreed before the hour is fixed.' },
      { h3: 'One clock that moves, one that stays', p: 'India keeps a single time all year and the Dutch clock jumps in March and October, so a Frisian afternoon sits three and a half hours behind the teacher in summer and four and a half in winter. After school, the early evening and the weekend fall inside both days.' }
    ],
    spec: { title: 'Schiermonnikoog has 972 people and the same class as Leeuwarden', p: 'No island in the province could support a coding classroom, and most of the mainland towns do not have one either. A weekly class at home is the same class the capital gets, and for the islands it is the only version that does not begin at the ferry terminal.' }
  },

  fees: {
    h2: 'Eighteen municipalities, one tariff in dollars, and the first hour free',
    intro: 'Stated in full before any details of yours are asked for.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'The same US dollar figure applies everywhere outside India, with no euro list, and Vlieland pays what Leeuwarden pays. The free lesson fixes the course and the hour; the first payment follows it, over WhatsApp. The pricing page sets out what happens on a pause, a change of plan or a missed lesson.'
  },

  reviewsH2: 'Six reviews from Google, as their authors wrote them',

  book: {
    h2: 'Tell us the level; the name of the town, in either language, is optional',
    intro: 'The first task might be two birthday lists that disagree, a join in Python that loses a province, or two tables from work that have never agreed about what a customer is called.',
    success: 'Thank you. Your Friesland class request has been sent.'
  },

  faq: {
    h2: 'Friesland coding class questions',
    intro: 'The province, its names, its towns, the teaching and the terms.',
    items: [
      { q: 'Is it Friesland or Fryslân?', a: 'Both, and that is the point of this page. Fryslân has been the official name since 1 January 1997 by decision of the provincial council; Friesland is what most of the country still says and what this page\'s address uses. The statistics website now answers the Dutch-named address with a notice that it does not exist and a pointer to the Frisian one. A program that joins a 1995 table to a 2026 table on the name loses the province entirely, and building the join that keeps it is the project on this page.' },
      { q: 'Which Frisian towns get their own page, and which are covered here?', a: 'Leeuwarden, Drachten and Heerenveen follow in this series. The other fifteen municipalities, from Súdwest-Fryslân with Sneek and Bolsward down to Schiermonnikoog, are listed above with their populations and served from this page.' },
      { q: 'We live on one of the islands. Does that work?', a: 'It works better than almost anywhere. A child on Ameland or Terschelling sits in one group with one from Leeuwarden at one fixed hour, and the ferry timetable has nothing to do with it. Any stable connection is enough; the islands\' are.' },
      { q: 'Does the teacher speak Dutch or Frisian?', a: 'The lesson is in English. The school\'s Dutch terms, groep, havo, vwo and profielkeuze, are used as the school uses them, and a child who is schooled partly in Frisian is not asked to translate. Classes are not offered in Dutch and not in Frisian.' },
      { q: 'What time are classes for a family in Friesland?', a: 'India keeps one clock and the Netherlands keeps two, so a Frisian afternoon is three and a half hours behind the teacher in summer and four and a half in winter. After-school, early-evening and weekend hours suit both ends, and the fixed weekly hour is settled during the free lesson.' },
      { q: 'Is Leeuwarden the largest city as well as the capital?', a: 'Yes, as a municipality: 130,162 people on 1 January 2026, 19.6 percent of the province. Súdwest-Fryslân is second at 90,521 but is a merger of many towns, of which Sneek is the largest. Drachten, in the municipality of Smallingerland, is the second town.' },
      { q: 'What happens in the free lesson?', a: 'We look for what the learner already does well and set one task at that edge. A child matches two lists of friends with different names. A teenager writes the join that loses Friesland and then the one that keeps it. An adult brings two tables from work that do not agree. By the end there is a named course, a rung, a fixed hour and the dollar figure, and nothing has been paid.' },
      { q: 'Is there a Modern Age Coders classroom anywhere in Friesland?', a: 'No, and none is claimed in Leeuwarden, in Drachten or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Friesland coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Friesland group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or municipality. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'East along the coast, south across the dam, and up to the country',
    html: 'East of the Lauwersmeer is the <a class="cg-inline-link" href="/coding-classes-in-groningen-province">province of Groningen</a>, with the earthquake scale nobody reads correctly; across the Afsluitdijk is <a class="cg-inline-link" href="/coding-classes-in-noord-holland">Noord-Holland</a>, and south of the lakes <a class="cg-inline-link" href="/coding-classes-in-overijssel">Overijssel</a>. All of them belong to the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner who wants a model that learns rather than a program that runs should open <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>. Leeuwarden, Drachten and Heerenveen follow.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-groningen-province', label: 'Province of Groningen' },
    { href: '/coding-classes-in-noord-holland', label: 'Noord-Holland' }
  ],

  personalityCss: `
.cg-root.cg-frl .cg-hero-grid { align-items: start; gap: clamp(2rem, 5vw, 4rem); }
.cg-root.cg-frl .cg-hero h1 { font-weight: 500; letter-spacing: -0.004em; line-height: 1.14; }
.cg-root.cg-frl .cg-capsule { border-left-width: 4px; border-left-style: solid; padding-left: 1.5rem; padding-bottom: 0.5rem; }
.cg-root.cg-frl .cg-eyebrow { letter-spacing: 0.09em; font-weight: 600; }
.cg-root.cg-frl .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-frl .cg-grid-3 { gap: clamp(1.3rem, 2.6vw, 2rem); }
.cg-root.cg-frl .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1.2rem; }
.cg-root.cg-frl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-frl .cg-callout { border-left-width: 5px; border-left-style: dashed; }
`,

  dossier: {
    curriculumAuthority: 'Province of Friesland (officially Fryslân since 1 January 1997): 18 municipalities, 665,208 residents (CBS 1 January 2026), 348 primary establishments (53,420 pupils) and 89 secondary (34,500). Capital and largest municipality Leeuwarden/Ljouwert (130,162, 19.6 percent). Frisian an official language alongside Dutch. Four inhabited Wadden islands. Largest province by total area, 58 percent water. Regio Noord holidays. A province page is about the spread; the hub owns the national curriculum.',
    localProject: 'A name is not an identifier (one entity, two keys; the join that drops it). Friesland became Fryslân officially on 1 January 1997; the statistics website now answers the Dutch-named address with a does-not-exist notice and a redirect to the Frisian one. The learner joins a 1995 table keyed Friesland (609,579) to a 2026 table keyed Fryslân (665,208): an inner join drops the province, a left join reports minus 100 percent growth, stripping accents changes nothing, and only a stable code returns plus 9.1 percent. Distinct from the Lumut trap (Kuala Belait: one name shared by several things, so a join merges too much) and from the numbers-as-text trap: here one thing carries two names, so a join on the name matches too little. Worked through before writing; the office\'s code values are not quoted because they were not read at source.',
    requiredMentions: [
      '665,208',
      '18 municipalities',
      'Fryslân',
      'Leeuwarden',
      'Ljouwert',
      'Súdwest-Fryslân',
      'Smallingerland',
      'Heerenveen',
      'Waadhoeke',
      'Noardeast-Fryslân',
      'Schiermonnikoog',
      '1 January 1997',
      '609,579',
      'Elfstedentocht'
    ],
    sources: [
      { claim: 'Fryslân 665,208 residents on 1 January 2026 (CBS provisional); 18 municipalities; total area 575,327 ha, land 334,011 ha; density 199; 306,801 households; 97,103 under 15; 80,237 aged 15 to 25; 348 primary establishments (53,420 pupils); 89 secondary (34,500); 609,579 in 1995, a rise of 55,629 (9.1 percent). The Dutch-named address for this page returns a notice that it does not exist (or no longer does) and points to the Frisian-named address.', url: 'https://allecijfers.nl/provincie/fryslan/' },
      { claim: 'All 18 municipalities on 1 January 2026: Leeuwarden 130,162; Súdwest-Fryslân 90,521; Smallingerland 57,188; De Fryske Marren 52,248; Heerenveen 51,955; Waadhoeke 47,158; Noardeast-Fryslân 45,935; Tytsjerksteradiel 32,874; Opsterland 30,068; Achtkarspelen 28,254; Weststellingwerf 26,622; Ooststellingwerf 25,898; Dantumadiel 19,231; Harlingen 16,270; Terschelling 4,834; Ameland 3,816; Vlieland 1,202; Schiermonnikoog 972. The Dutch-named ranking address redirects to this one.', url: 'https://allecijfers.nl/ranglijst/grootste-en-kleinste-gemeenten-in-inwoners-in-de-provincie-fryslan/' },
      { claim: 'Official name changed from Friesland to Fryslân on 1 January 1997 by decision of the Provinciale Staten; capital Leeuwarden (Frisian Ljouwert), about 95,890 residents in the city in 2023; 18 municipalities since 1 January 2019; 5,748.77 km2 total, 3,335.62 land, 2,413.15 water, the largest province by total area; about 665,276 residents end 2025; Frisian an official language alongside Dutch; the Wadden islands Vlieland, Terschelling, Ameland and Schiermonnikoog; the eleven cities of the Elfstedentocht; Commissaris van de Koning Arno Brok.', url: 'https://nl.wikipedia.org/wiki/Friesland' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'The statistics office\'s numeric codes for the province and its municipalities. The page says such codes exist and are the right key; it does not quote values it did not read.',
      'The dates on which individual municipalities adopted Frisian names (Dantumadiel, De Fryske Marren, Tytsjerksteradiel). Not read at source; the page says only that six appear under Frisian names in the 2026 register list.',
      'Súdwest-Fryslân as the largest municipality in the country by area. Widely stated; not confirmed at a source this page read, so it stands as a description in the spread and not in the evidence cells.',
      'The year Frisian gained official status (1956 in the province\'s entry, in an administrative sense). The page says only that it is an official language alongside Dutch.',
      'Anything the Netherlands hub or the Groningen page owns: the SLO core objectives, the earthquake scale.'
    ]
  }
};
