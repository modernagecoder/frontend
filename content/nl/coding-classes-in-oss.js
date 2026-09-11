'use strict';
// Oss: margarine town, Organon town, 95,549 residents across a town and
// twenty-two villages. Stadsrechten 1399.
// Spine (modest, per the Phase 5 method): Organon was founded in 1923 to make
// use of the slaughter waste of the Zwanenberg works. Most data used today is
// the same kind of material, the by-product of a process built for something
// else, and it is only as reliable as the fields that process depended on.

module.exports = {
  slug: 'coding-classes-in-oss',
  code: 'oss',
  accent: '#6C0C4A',
  accentRationale: 'Oss: a deep plum chosen by the solver, more than twenty units from every page it links to, the Den Bosch green and the Helmond rose among them, with its nearest neighbour an unlinked province',
  pageType: 'city',
  place: {
    name: 'Oss',
    eyebrow: 'Oss, Noord-Brabant',
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
  routeLabel: 'Oss, Netherlands',
  title: 'Coding Classes in Oss | Modern Age Coders',
  description: 'Oss families can book live online coding, Python, AI and app classes for ages 6 to 67, in Ruwaard, Schadewijk, Berghem, Lith or Ravenstein. First lesson free.',
  ogDescription: 'Live online coding, Python, AI and mathematics for Oss and its villages, on a page about data that was made for something else.',
  twitterDescription: 'Classes in Oss for ages 6 to 67, taught live online, one USD fee and a free first lesson.',
  ogImageCourse: 'python-ai-automation-masterclass-college',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Oss Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Oss and its villages, taught in English.'
  },

  h1: 'Coding classes in Oss, a town that built an industry from what another one threw away',
  capsuleQ: 'What are the best coding classes in Oss?',
  capsule: 'Coding classes in Oss serve a municipality of 95,549 people (statistics office, 1 January 2026): the town that received its charter in 1399, grew rich on margarine, and in 1923 saw Organon founded to put the slaughter waste of the Zwanenberg works to use. From the pancreas of slaughtered pigs came insulin on an industrial scale; decades later the company brought the pill to the Dutch market. Most data used in computing today is made the same way, as the by-product of a process built for something else, and it is only as trustworthy as the fields that process depended on. Modern Age Coders teaches live online in English from Ruwaard to Ravenstein, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'The Zwanenberg works in Oss existed to sell meat. Whatever was left over was, in the encyclopaedia\'s words, something the company wished to use to good purpose, and in 1923 it founded Organon to do so. The pancreas was never the point of the slaughterhouse, and Organon could only take what the slaughter produced. Data works like that far more often than it is designed. Till receipts exist to charge customers, server logs to deliver pages, billing codes to get a hospital paid, and web pages to be read by their own audience, yet all of them end up as the raw material of analysis and machine learning. The useful habit is to ask what the original process needed to get right, because those are the only fields anyone had a reason to check.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Oss.',

  picks: {
    eyebrow: 'Course picks for Oss',
    h2: 'Four courses for a town of factories and villages',
    intro: 'A child in Berghem who wants to make a game, a teenager in Schadewijk building an app for a sports club, a student in Ruwaard analysing records that some other system produced, and an adult whose work runs on exports from software built for a different job. Each of them starts with one full lesson that costs nothing.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Games built from scratch, with a score table the child designs, so they know exactly what every column means.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'An app with a real data model, where every stored field is one the app actually uses and therefore keeps correct.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python on exported and scraped data, starting each project by finding out what system produced it and why.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reports built on data from other systems, with a clear note of which fields those systems relied on.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Oss today',
      h2: 'A charter town of 1399, twenty-two villages, and 95,549 residents',
      intro: 'The statistics office recorded 95,549 residents on 1 January 2026 in a municipality of 17,093 hectares, 16,201 of them land and 892 water, with a published density of 588 to the square kilometre. The office divides it into 23 wijken and 106 buurten. Beyond the town itself the encyclopaedia names twenty-two villages and hamlets, from Berghem, Geffen and Herpen to Lith, Megen and Ravenstein.',
      body: [
        { kind: 'table', caption: 'Oss in the statistics office row, each figure with its year', head: ['Measure', 'Figure', 'Year'], rows: [
          ['Residents', '95,549', '2026'],
          ['Households, of which one-person and with children', '43,459; 15,812 and 14,505', '2025'],
          ['Average household', '2.17 people', '2025'],
          ['Under fifteen, and sixty-five or over', '13,636 and 20,697', '2026'],
          ['Dwellings, owner-occupied and rented', '42,395; 26,709 (63 percent) and 15,686', '2025'],
          ['Estimated average home value', '383,000 euro', '2025'],
          ['Income per resident and per income recipient', '33,900 and 40,500 euro', '2024'],
          ['Residents in poverty', '2.5 percent', 'as published']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The charter and the church', p: 'In 1399 Oss received town rights from Johanna van Brabant. The neo-Gothic Grote Kerk dates from 1859 and is dedicated to Onze Lieve Vrouw Onbevlekt Ontvangen; its rich interior was paid for by gifts from Catholic industrialists of Oss, Anton Jurgens among them.' },
          { h3: 'Margarine and the railway', p: 'In 1881 Oss gained its own railway station, which the encyclopaedia calls of great importance for the industry already there. The margarine works of Anton Jurgens commissioned the office building known as the Groene Engel, designed in 1912 and taken into use by Philips in 1930.' },
          { h3: 'A villa, a museum, a grave', p: 'Villa Constance, a neoclassical house, was built in 1888 for the margarine manufacturer Arnold van den Bergh. From 1921 to 1974 it served as the town hall and it now houses Museum Jan Cunen. Outside the town, the Vorstengraf is a reconstruction of a princely grave from the seventh century before Christ, on the spot where archaeologists found an iron sword.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Waste into medicine',
      h2: 'What the slaughterhouse left, and what Organon made of it',
      intro: 'Every step below is taken from the encyclopaedia entry for Organon. The page adds no dates the entry does not give and draws no line between the steps that the entry does not draw.',
      body: [
        { kind: 'table', caption: 'Organon, from slaughter waste to the pill', head: ['Step', 'What the entry says', 'When'], rows: [
          ['The motive', 'Zwanenberg wished to put the slaughter waste of its factories to good use', 'before 1923'],
          ['The company', 'Saal van Zwanenberg founded Organon as a subsidiary of Zwanenberg', '1923'],
          ['The first method', 'with the chemists Ernst Laqueur and Jacques van Oss, a way was found to extract insulin on an industrial scale from the pancreas of slaughtered pigs', 'no year given'],
          ['The pill', 'Organon brought the contraceptive pill to the Dutch market, with great success', '1962'],
          ['The owners', 'part of AKZO from 1969, taken over by Schering-Plough in 2007, inside the Merck and MSD merger from 2009, independent and listed again', '2021'],
          ['Today', 'described as the producer of the most prescribed contraceptive pill in the world, with 4,500 of its 5,000 employees in Oss', 'no year given']
        ] },
        { kind: 'p', text: 'The slaughterhouse chose nothing for Organon. It killed the animals its meat trade required, and the pancreases came with them: as many as the trade produced, from the animals it happened to process. The input to a new and very valuable product was fixed by an old process with different goals. That is the ordinary condition of data in computing. A company reusing its sales records, a researcher mining hospital claims and an AI lab collecting web text all start from material that some other process made for its own purposes, and the first question in every case is what that process needed, because it shaped everything that was kept.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Oss in figures, the few calculations, and what stays unsaid',
      intro: 'The statistics office row for the municipality comes first, then schools and origin, then the history from the encyclopaedia. Where this page divides or adds, it says so.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'People', p: '95,549 residents (2026) and 95,239 (2025), 48,060 men and 47,179 women in 2025. Ages in 2026: 13,636 under fifteen, 10,674 fifteen to twenty-five, 24,502 twenty-five to forty-five, 26,040 forty-five to sixty-five and 20,697 sixty-five or over. The five age groups add up to the 2026 total exactly.' },
          { h3: 'Origin', p: 'In 2025, 72,755 residents were of Dutch origin, 9,296 of European and 13,188 of non-European origin; 81,841 were born in the Netherlands and 13,398 abroad. Each pair adds to the 2025 total of 95,239, so both splits cover everyone.' },
          { h3: 'Schools', p: '38 primary establishments teach 7,732 pupils, about 203 each, and 7 secondary establishments teach 5,566, about 795 each. The office records 2,302 MBO, 1,910 higher professional and 590 university students at institutions in the municipality.' },
          { h3: 'Homes and land', p: '42,395 dwellings in 2025, 26,709 owner-occupied and 15,686 rented, which together make the total; an estimated average value of 383,000 euro; 17,093 hectares, 16,201 land and 892 water; 23 wijken and 106 buurten, among them Centrum, Schadewijk, Oss-Zuid, Krinkelhoek, Ruwaard and Ussen.' },
          { h3: 'Every calculation', p: '7,732 pupils over 38 establishments is about 203, and 5,566 over 7 is about 795. The age groups, the two origin splits and the owner and rental counts were added only to confirm that each is complete. Nothing else was calculated, and no figure from one year is combined with a figure from another.' },
          { h3: 'What the page leaves out', p: 'It compares no population across years, because the municipality has taken in villages several times and the office series is not described here as recalculated. It sets the town population of 59,740 in 2023 against nothing. It tells no stories of the Bende van Oss, beyond the encyclopaedia\'s word that the gang was notorious and feared, and it describes no current Organon site or product.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with the municipality of Oss, Organon, Philips, Museum Jan Cunen or any school in the area, and nothing here suggests one. The municipal figures are the statistics office row for Oss at the years stated. The charter, the station, the church, Villa Constance, the Groene Engel, the Vorstengraf, the villages and the town population come from the encyclopaedia entry for Oss, and the Organon history from the entry for the company.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Accuracy follows use',
      intro: 'In a dataset built for one purpose and reused for another, the fields the first purpose depended on are usually right, because someone would have noticed if they were not. The rest were written down and never checked.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Name the first job', p: 'Before any analysis, write one sentence on what the data was collected to do. Charge a customer, deliver a web page, pay a hospital, sell meat. If nobody can write the sentence, that is the first finding.' },
          { h3: '2. Sort the fields', p: 'Mark every column as needed by the first job or merely recorded. On a till receipt the total is needed, since the customer pays it and complains if it is wrong. The birthday on a loyalty card is merely recorded, and nobody at the till will ever check it.' },
          { h3: '3. Ask the new question', p: 'Check whether the new question rests on needed fields or recorded ones. An analysis of spending built on till totals stands on firm ground. An analysis of customers by age, built on loyalty-card birthdays, stands on whatever people chose to type.' }
        ] },
        { kind: 'table', caption: 'Data made for one job, reused for another', head: ['Data', 'Its first job', 'Kept accurate by use', 'Recorded but unchecked'], rows: [
          ['Till receipts', 'charging the customer', 'prices, totals, the items scanned', 'loyalty-card details such as age and postcode'],
          ['Hospital billing records', 'getting treatment paid for', 'the treatments that were billed', 'how ill the patient was, beyond what payment needed'],
          ['Web server logs', 'delivering pages', 'which address asked for which page', 'whether a person or a program asked, and whether anyone read it'],
          ['Web text used to train AI', 'being read by the writer\'s own audience', 'the way people write for each other', 'the obvious things writers never bother to state'],
          ['The Zwanenberg slaughter in 1923', 'selling meat', 'the animals the meat trade required', 'nothing at all about what Organon would later need']
        ] },
        { kind: 'callout', h3: 'Why reused data goes quietly wrong', p: 'A field stays accurate when an error in it costs somebody something. The price on a receipt is right because the customer checks it; the amount on a hospital bill is right because an insurer checks it; the page in a server log is right because the page was actually delivered. Every other field in the same record is only as good as the care of whoever typed it, on a day when it mattered to nobody. When the data is reused, both kinds of field arrive in the same table, in the same font, with no mark to tell them apart, and the new analysis often rests on exactly the columns the old process never needed. Language models meet a version of this at enormous scale. They learn from text people wrote for one another, which is accurate about the things writers cared to get right and nearly silent about what everyone already knows, so a model can be fluent about the unusual and oddly unsure about the obvious. Organon had it easier: a pancreas is a pancreas, whatever the slaughterhouse was thinking. A column of data carries the priorities of the process that filled it.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five checks before reusing data somebody else collected',
      intro: 'For exports, scraped pages, logs, receipts, registers and every other record that came from a process with its own goals. Taught in Oss, where the most famous product in town began as a way to use up waste.',
      body: [
        { kind: 'table', caption: 'Reusing data without inheriting its blind spots', head: ['Check', 'What to do', 'What it catches', 'What you end up with'], rows: [
          ['First purpose', 'Write down what the data was collected to do', 'Analysis of a question nobody was asking', 'A clear statement of scope'],
          ['The form', 'Look at the screen, form or code that produced each field', 'Guessed meanings', 'Definitions taken from the source'],
          ['Needed or recorded', 'Mark which fields the first process depended on', 'Conclusions built on unchecked columns', 'A list of the trustworthy fields'],
          ['What was never kept', 'List what the first process had no reason to record', 'Silence read as absence', 'An honest account of the gaps'],
          ['Say it was reused', 'Report the origin of the data with the result', 'Readers assuming it was designed for the study', 'A result that can be weighed properly']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A game score table the child designs, then a second game that reuses it. The child finds out which columns the new game needs and which ones the old game never filled in properly.' },
          { h3: 'For teenagers', p: 'A Python notebook on an exported dataset, with the fields split into needed and recorded before a single chart is drawn, and a short note on what the first system never kept.' },
          { h3: 'For adults', p: 'A report from work rebuilt on the fields its source system relied on. Adults are often surprised how much of an existing report rests on columns nobody has ever checked.' }
        ] },
        { kind: 'p', text: 'This section rests on the encyclopaedia account of why Organon was founded and what it first made, and on an ordinary observation about data that anyone can test on a till receipt. It makes no claim about the quality of any record held in Oss today.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a score table of their own to data somebody else made',
    intro: 'The free lesson places each learner by watching them work on a real task. A home address in Oss-Zuid or Megen plays no part, and neither does age on its own.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'My own table', p: 'Children design a score table and learn what each column is for.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Borrowed data', p: 'Learners reuse a table built for another game and find its gaps.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Needed or recorded', p: 'Teenagers sort the fields of a real export before drawing anything.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Whose system?', p: 'Adults trace a work report back to the process that filled its columns.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI learned from text that nobody wrote for it. Why should a teenager in Ruwaard ask what that text was for?',
    intro: 'Because Oss already knows what it means to build something valuable out of another process\'s leftovers.',
    p1: 'The text a language model learns from was written by people for their own readers: to explain, argue, sell, complain or joke. None of it was written to teach a machine, and it carries the priorities of its writers. What people care to get right is there in detail; what everyone already knows is barely written down, because no reader needed it. A model trained on it inherits that shape, and it can be confident about rare facts and strangely weak on plain ones. Businesses doing their own AI work repeat the pattern with logs, receipts and exports, each made by a system that needed only some of its fields to be true.',
    p2: 'A learner who has sorted the columns of a real dataset into needed and merely recorded, and then watched an analysis fall apart on the second kind, does not forget it. The question it teaches, what was this data for, cannot be answered by the model itself, which only ever sees the data. It has to be asked by someone who knows where the data came from, and in most organisations that person is whoever thought to ask.',
    closer: 'The case for a child in Oss learning to code in 2026 is therefore not that the town has famous factories. It is that a person who can ask what a dataset was first made to do will be needed wherever AI is built on data made for something else.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live lessons for the town and every village around it',
    intro: 'Oss spreads over 16,201 hectares of land, and a family in Lith, Megen or Herpen lives a long way from anything a town-centre course could offer on a weekday evening.',
    cells: [
      { h3: 'From any village', p: 'The class comes to the laptop, so a learner in Ravenstein or Geffen is as close to the teacher as one in the Centrum. Nobody has to be driven into town and collected again after dark.' },
      { h3: 'Dutch school words stay', p: 'Groep, brugklas, havo, vwo and profielkeuze are left in Dutch, just as a school in Oss writes them. The teacher knows what each one means and never asks a family to translate them.' },
      { h3: 'The first hour is a lesson', p: 'A real task, taught properly, while the teacher watches how the learner thinks. It ends with a level, a named course and a proposed weekly time. No payment details, no follow-up sales call.' },
      { h3: 'Groups made across the world', p: 'Five to ten learners who have reached the same point in the same subject. Oss has 13,636 residents under fifteen, but five at an identical stage free at one identical hour is a rare thing anywhere, so groups are drawn from every country the teachers serve.' },
      { h3: 'Regio Zuid holidays', p: 'Two lessons a week, about eight a month, at a fixed hour. Noord-Brabant schools take regio Zuid holidays, so the southern holiday dates are built into the timetable from the start.' },
      { h3: 'A four-hour gap, give or take', p: 'India runs three and a half hours ahead of Oss in summer and four and a half in winter. After-school hours, early evenings and weekend mornings all stay open through the year.' }
    ],
    spec: { title: 'Thirty-eight primary schools, seven secondary, and one kind of group', p: 'Oss has 38 primary establishments teaching 7,732 pupils and 7 secondary establishments teaching 5,566. A coding group needs five learners at one stage of one subject at one hour, and even a town with that many schools rarely produces them together; a pool across all ages from 6 to 67 and many countries does.' }
  },

  fees: {
    h2: 'What classes in Oss cost',
    intro: 'All three prices sit here in plain view before anyone books.',
    first: 'A full lesson on a real task that ends with a level and a course name.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner and one teacher.',
    closer: 'The same dollar fee applies in Oss as in every other country, with no separate euro list, so a family in the Centrum and a family in Maren-Kessel pay alike. Nothing is due until the free lesson has settled a course and an hour, and payment is then arranged on WhatsApp. The pricing page covers pauses, format changes and missed lessons.'
  },

  reviewsH2: 'Six Google reviews, exactly as their writers left them',

  book: {
    h2: 'Tell us where the learner is now',
    intro: 'The first task could be a score table the child designs, a borrowed table from another game, or a real export sorted into needed and recorded fields.',
    success: 'Thank you. Your Oss class request has been sent.'
  },

  faq: {
    h2: 'Oss coding class questions',
    intro: 'The town, its villages, its factories, and how lessons work.',
    items: [
      { q: 'What does the municipality of Oss include?', a: 'The town of Oss and, according to the encyclopaedia, twenty-two villages and hamlets, among them Berghem, Geffen, Herpen, Lith, Lithoijen, Maren-Kessel, Megen and Ravenstein. The statistics office divides the municipality into 23 wijken and 106 buurten.' },
      { q: 'How many people live in Oss?', a: 'The statistics office counted 95,549 residents in the municipality on 1 January 2026, living in 43,459 households in 2025. The encyclopaedia gives 59,740 for the town itself in 2023.' },
      { q: 'What is Oss known for?', a: 'It received town rights from Johanna van Brabant in 1399 and grew into an industrial town around margarine, with the Jurgens and Van den Bergh firms, and later pharmaceuticals through Organon. Its railway station opened in 1881.' },
      { q: 'How did Organon begin?', a: 'According to the encyclopaedia, Saal van Zwanenberg founded Organon in 1923 as a subsidiary of Zwanenberg, which wished to put the slaughter waste of its factories to good use. With the chemists Ernst Laqueur and Jacques van Oss it found a way to extract insulin from the pancreas of slaughtered pigs on an industrial scale.' },
      { q: 'Where is Museum Jan Cunen?', a: 'In Villa Constance, a neoclassical house built in 1888 for the margarine manufacturer Arnold van den Bergh. It served as the town hall of Oss from 1921 to 1974 and now houses the museum.' },
      { q: 'How many schools are there in Oss?', a: 'The statistics office counts 38 primary establishments teaching 7,732 pupils and 7 secondary establishments teaching 5,566, with 2,302 MBO, 1,910 higher professional and 590 university students at institutions in the municipality. This page rates no school.' },
      { q: 'What language are lessons in, and at what time?', a: 'English, with Dutch school terms such as groep, havo and vwo kept in Dutch. India is three and a half hours ahead in summer and four and a half in winter, so after-school, early-evening and weekend times all work. The weekly hour is agreed at the free lesson and holidays follow regio Zuid.' },
      { q: 'Is there a Modern Age Coders classroom in Oss?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Oss coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Noord-Brabant and beyond',
    h2: 'To the provincial capital, across the river, and up to the hub',
    html: 'The provincial capital has its own page at <a class="cg-inline-link" href="/coding-classes-in-den-bosch">coding classes in Den Bosch</a>, and on the Gelderland side <a class="cg-inline-link" href="/coding-classes-in-nijmegen">Nijmegen</a> has one too. <a class="cg-inline-link" href="/coding-classes-in-helmond">Helmond</a>, another Brabant town that grew with its factories, is written about separately, and every town and city with a page in the province is gathered on <a class="cg-inline-link" href="/coding-classes-in-noord-brabant">Noord-Brabant</a>. For a learner heading straight into machine learning there is the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the whole series sits on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Ask on WhatsApp'
  },

  footerHeading: 'Oss, Noord-Brabant and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-den-bosch', label: 'Den Bosch' },
    { href: '/coding-classes-in-noord-brabant', label: 'Noord-Brabant' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-oss .cg-hero-grid { grid-template-columns: 1fr 0.95fr; align-items: center; gap: clamp(1.1rem, 2.8vw, 2.2rem); }
.cg-root.cg-oss .cg-hero h1 { font-weight: 650; letter-spacing: -0.021em; line-height: 1.06; }
.cg-root.cg-oss .cg-capsule { border-top: 2px solid var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-oss .cg-eyebrow { letter-spacing: 0.13em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-oss .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.012em; }
.cg-root.cg-oss .cg-grid-3 { gap: clamp(0.9rem, 1.9vw, 1.5rem); }
.cg-root.cg-oss .cg-card { border-radius: 10px; border-left: 3px solid var(--cg-accent-soft); }
.cg-root.cg-oss .cg-table caption { letter-spacing: 0.02em; font-weight: 600; }
.cg-root.cg-oss .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-oss .cg-table td:first-child { font-weight: 700; }
.cg-root.cg-oss .cg-ladder-col { border-top: 2px solid var(--cg-accent-soft); padding-top: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Oss, Noord-Brabant: 95,549 residents (statistics office, 1 January 2026), 95,239 (2025), with earlier counts 89,799 (2015), 84,861 (2013) and 77,271 (1995) not used because the municipality absorbed villages in 1994, 2003 and 2011 and the page does not establish that the series is recalculated; 48,060 men and 47,179 women (2025); 43,459 households (2025) averaging 2.17, 15,812 one-person, 14,505 with children; ages (2026) 13,636 under fifteen, 10,674 fifteen to twenty-five, 24,502 twenty-five to forty-five, 26,040 forty-five to sixty-five, 20,697 sixty-five or over; 17,093 hectares, 16,201 land, 892 water, published density 588; 42,395 dwellings (2025), 26,709 owner-occupied at 63 percent, 15,686 rented; estimated average value 383,000 euro; income 33,900 euro per resident and 40,500 per recipient (2024); 2.5 percent in poverty; origin (2025) 72,755 Dutch, 9,296 European, 13,188 non-European, 81,841 born in the Netherlands and 13,398 abroad; 23 wijken and 106 buurten including Centrum, Schadewijk, Oss-Zuid, Krinkelhoek, Ruwaard, Ussen; 38 primary establishments with 7,732 pupils, 7 secondary with 5,566, 2,302 MBO, 1,910 HBO and 590 WO students at institutions (2026). Encyclopaedia: town rights 1399 from Johanna van Brabant; railway station 1881, of great importance for industry; Grote Kerk 1859, neo-Gothic, Onze Lieve Vrouw Onbevlekt Ontvangen, interior funded by Catholic industrialists including Anton Jurgens; Villa Constance 1888 for margarine manufacturer Arnold van den Bergh, town hall 1921 to 1974, now Museum Jan Cunen; Groene Engel office of the Jurgens margarine works designed 1912, used by Philips from 1930; Vorstengraf reconstruction of a seventh-century BCE princely grave where an iron sword was found; the Bende van Oss notorious and feared; town 59,740 on 1 January 2023 on 34.47 square kilometres; twenty-two kernen from Berghem to Ravenstein. Organon: founded 1923 by Saal van Zwanenberg as a Zwanenberg subsidiary to use slaughter waste; insulin extracted industrially from pig pancreas with Ernst Laqueur and Jacques van Oss; pill on the Dutch market 1962; AKZO 1969, Schering-Plough 2007, Merck and MSD 2009, independent 2021; producer of the most prescribed contraceptive pill in the world; 4,500 of 5,000 employees in Oss. Regio Zuid holidays. The city page observes that reused data is only as reliable as the fields its first process depended on.',
    localProject: 'Accuracy follows use. Organon was founded in 1923 to put the slaughter waste of the Zwanenberg works to use, so the supply of its first raw material was set by a meat trade with other goals. Most data used in computing is the same kind of by-product: till receipts, hospital billing records, web server logs and the web text used to train language models were each produced by a process that needed only some of its fields to be right. Fields an error would cost somebody something (a till total, a billed amount, a delivered page) are kept accurate by use; everything else (a loyalty-card birthday, severity beyond what payment needed, whether a log line was a person) is recorded but unchecked, and reused data mixes the two in one table with no mark. For language models the same shape appears as text accurate on what writers cared about and nearly silent on the obvious. The defences are to name the first purpose, read the form or code that produced each field, mark fields as needed or merely recorded, list what the first process never kept, and report the reuse with the result. Kept modest under the Phase 5 method. Distinct from self-selection (Amsterdam-Oost) and non-response (Purmerend), which concern who is in the data rather than which fields were checked; from imputation provenance (Loosduinen), which concerns filled values; from event timestamps (Tongelre); from residence versus presence (Leidschenveen-Ypenburg), which concerns what one register counts; and from the empty charter field (Maastricht). Town against municipality (Zeeland) and growth across mergers (Alkmaar, Zaanstad) are deliberately not argued.',
    requiredMentions: [
      '43,459',
      '14,505',
      '7,732',
      '5,566',
      '17,093',
      '42,395',
      '15,686',
      'Zwanenberg',
      'Organon',
      'Villa Constance',
      'Jan Cunen',
      'Vorstengraf',
      'Schadewijk',
      'Laqueur'
    ],
    sources: [
      { claim: 'Gemeente Oss: 95,549 inwoners (2026), 95,239 (2025), 89,799 (2015), 84,861 (2013), 77,271 (1995); mannen 48,060, vrouwen 47,179; 43,459 huishoudens (2025), 15,812 eenpersoonshuishoudens, 14,505 met kinderen, gemiddeld 2.17; ages 0-15 13,636, 15-25 10,674, 25-45 24,502, 45-65 26,040, 65+ 20,697 (2026); 17,093 hectare, land 16,201, water 892; bevolkingsdichtheid 588; woningvoorraad 42,395, koopwoningen 26,709 (63 percent), huurwoningen 15,686 (2025); gemiddelde WOZ 383,000 euro; gemiddeld inkomen per inwoner 33,900 and per inkomensontvanger 40,500 euro (2024); personen in armoede 2.5 percent; basisonderwijs 38 vestigingen 7,732 leerlingen, voortgezet onderwijs 7 vestigingen 5,566 leerlingen, MBO 2,302, HBO 1,910, WO 590 studenten (2026); herkomst Nederland 72,755, Europa 9,296, buiten Europa 13,188, geboren in Nederland 81,841, buiten Nederland 13,398 (2025); 23 wijken and 106 buurten including Centrum, Schadewijk, Oss-Zuid, Krinkelhoek, Ruwaard, Ussen; mergers with Berghem and Megen (1994), Ravenstein (2003) and Lith (2011).', url: 'https://allecijfers.nl/gemeente/oss/' },
      { claim: 'Oss (encyclopaedia): In 1399 kreeg Oss stadsrechten van Johanna van Brabant. In 1881 kreeg Oss een eigen spoorwegstation, wat van groot belang was voor de aanwezige industrie. De neogotische Grote Kerk, uit 1859, gewijd aan Onze Lieve Vrouw Onbevlekt Ontvangen; het rijke interieur werd mogelijk gemaakt door giften van katholieke Osse industrielen, waaronder Anton Jurgens. Villa Constance, een neoclassicistische woonvilla, in 1888 in opdracht van margarinefabrikant Arnold van den Bergh gebouwd; van 1921 tot 1974 deed het pand dienst als stadhuis; op dit moment is het in gebruik als museum (Museum Jan Cunen). Het kantoorpand de \'Groene Engel\' van Anton Jurgens\' Margarinefabrieken, in 1912 ontworpen, in 1930 in gebruik genomen door Philips. Reconstructie van een vorstengraf uit de zevende eeuw voor Christus op de plek waar door archeologen een ijzeren zwaard werd gevonden. De zogenaamde Bende van Oss was berucht en gevreesd. Infobox: 59.740 inwoners (2023-01-01), 34,47 km2. Kernen: Berghem, Demen, Dennenburg, Deursen, Dieden, Geffen, Haren, Herpen, Huisseling, Macharen, Kessel, Lith, Lithoijen, Maren, Maren-Kessel, Neerlangel, Neerloon, Oijen, Overlangel, Teeffelen, Megen, Ravenstein.', url: 'https://nl.wikipedia.org/wiki/Oss' },
      { claim: 'Organon (encyclopaedia): Bij Zwanenberg bestond de wens om het slachtafval uit de Zwanenberg-fabrieken nuttig te gebruiken. Saal van Zwanenberg richtte in 1923 Organon op als dochtermaatschappij van Zwanenberg. In samenwerking met de chemici Ernst Laqueur en Jacques van Oss werd een manier gevonden om uit de alvleesklier van geslachte varkens het middel insuline te extraheren op industriele schaal. Organon bracht deze pil in 1962 op de Nederlandse markt en had daarmee veel succes. In 1969 ging Koninklijke Zout Organon op in het AKZO-concern; overname door Schering-Plough november 2007; in 2009 gefuseerd met Merck and Co; in 2021 werd Organon opnieuw zelfstandig en een beursgenoteerde onderneming. Vestigingen in Oss, Schaijk, Apeldoorn en Boxtel, met in totaal 5000 medewerkers, van wie 4500 in Oss. Organon is producent van de meest voorgeschreven anticonceptiepil ter wereld.', url: 'https://nl.wikipedia.org/wiki/Organon_(bedrijf)' },
      { claim: 'School holiday regions: regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any population growth across years. The municipality absorbed Berghem and Megen in 1994, Ravenstein in 2003 and Lith in 2011, and growth across mergers is the Alkmaar and Zaanstad argument.',
      'Any comparison of the town population of 59,740 with the municipal count. Town against municipality is the Zeeland argument.',
      'Any date for the insulin work or for the employee figure. The Organon entry gives neither, so neither is dated here.',
      'Any causal line from insulin to the pill. The entry describes both but the page does not connect them.',
      'Any claim about Unox, Hartog or meat products made in Oss today. Not in the sources read for this page.',
      'Any account of the crimes of the Bende van Oss beyond the encyclopaedia description.',
      'Any claim about the quality of data held by the municipality, Organon or any business in Oss.',
      'Anything the Den Bosch and Helmond pages own, including their own figures and arguments.'
    ]
  }
};
