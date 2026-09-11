'use strict';
// Hilversum: the largest place in het Gooi, the mediastad, 94,595 residents.
// Spine (modest, per the Phase 5 method): Dudok gave the town hall a brick of
// its own size, the Hilversummertje, and Beeld en Geluid at the Mediapark
// keeps more than a million hours of sound and image. A record lasts only as
// long as something can still read it, so data should be saved in forms that
// outlive the program that wrote them.

module.exports = {
  slug: 'coding-classes-in-hilversum',
  code: 'hvs',
  accent: '#1E4900',
  accentRationale: 'Hilversum: a deep garden-town green placed by the solver more than twenty-seven units from every page it links to, with an unlinked province as its nearest neighbour in colour space',
  pageType: 'city',
  place: {
    name: 'Hilversum',
    eyebrow: 'Hilversum, Noord-Holland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Noord-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Hilversum, Netherlands',
  title: 'Coding Classes in Hilversum | Modern Age Coders',
  description: 'Live online coding, Python, AI and app lessons in Hilversum for ages 6 to 67, from the Hilversumse Meent to Zuidoost, taught in English. First lesson free.',
  ogDescription: 'Live online coding, Python, AI and mathematics in the mediastad, on a page about saving work so that it can still be opened decades later.',
  twitterDescription: 'Classes in Hilversum for ages 6 to 67, taught live online, with a free first lesson.',
  ogImageCourse: 'complete-app-development-masterclass-for-teens',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Hilversum Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Hilversum, taught in English.'
  },

  h1: 'Coding classes in Hilversum, where the town hall has a brick of its own size',
  capsuleQ: 'What are the best coding classes in Hilversum?',
  capsule: 'Coding classes in Hilversum serve 94,595 people (statistics office, 1 January 2026) in the largest place in het Gooi, a town the encyclopaedia calls the mediastad. Its town hall, built between 1928 and 1931, is faced with a yellow brick of a deviating size that Dudok designed for it, the Hilversummertje, and at the Mediapark the institute Beeld en Geluid keeps more than a million hours of audiovisual material. Both make the same point about computing: anything recorded lasts only as long as something can still read it. Modern Age Coders teaches live online in English across all nine wijken, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'A brick of a standard size can be replaced from any builder\'s yard. A brick designed for one building has to be made again, to the same measure, whenever the wall needs repair, and in Hilversum the town hall is faced with exactly such a brick. Files behave the same way. A recording on a tape needs a machine that still plays that tape, a document in a private format needs the program that wrote it, and a saved model often needs the exact library version that produced it. Hilversum, which has been making and keeping broadcasts since the experimental radio of the years after 1918, is a good place to learn the habit of saving work in a form that someone, in some other decade, will still be able to open.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Hilversum.',

  picks: {
    eyebrow: 'Course picks for Hilversum',
    h2: 'Four courses for the mediastad',
    intro: 'A child in Hilversum-Oost who wants to make a cartoon that moves, a teenager in Noordwest with an app idea for the local radio club, a student saving a year of Python notebooks, and an adult whose team keeps its work in files nobody has tried to open for a decade. Each of them starts with a full lesson and pays nothing for it.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Animations and small games, saved and reopened every week, so that a child learns early that work has to survive the next session.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'A real app whose data is stored in a documented format that another program could read without it.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python projects with pinned library versions, plain-text data and saved models that can be rebuilt from scratch.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reports and dashboards whose underlying data stays readable after the tool that made them is gone.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Hilversum today',
      h2: 'The largest place in het Gooi, and the town of the omroepen',
      intro: 'The statistics office counted 94,595 residents on 1 January 2026, on 4,561 hectares of land within a municipality of 4,636, a published 2,070 people to the square kilometre. The row gives 83,849 for 1995, and the site itself computes the rise to 2026 as 10,746 people, or 13 percent. The office divides Hilversum into nine wijken and 43 buurten.',
      body: [
        { kind: 'spec', title: 'Radio, then television, then the Mediapark', p: 'In 1918 the Nederlandsche Seintoestellen Fabriek began its work in Hilversum, and after it the experimental radio broadcasts began. Television first went to Bussum, but the building of the Mediapark in Hilversum-Noord brought all the broadcasting functions back to Hilversum, which houses many national broadcasting companies and is also known as the mediastad. At the Mediapark stands the building of Beeld en Geluid, designed by Willem Jan Neutelings and Michiel Riedijk and completed in 2005.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Carpets and the railway', p: 'In 1752 the making of cow-hair carpet began in Hilversum, the start of the local carpet industry. After the town was connected to the railway network in 1874, wealthy families began to settle there.' },
          { h3: 'Dudok\'s town', p: 'In total 75 designs by Willem Dudok were built in Hilversum. The best known is the town hall of 1928 to 1931, for whose outer walls he designed a separate yellow brick of a deviating size, known as the Hilversummertje.' },
          { h3: 'Zonnestraal', p: 'In the Loosdrechtse Bos lies the sanatorium Zonnestraal, founded in 1924 for diamond cutters who had contracted tuberculosis. Its main building, by Jan Duiker with Bernard Bijvoet and Jan Gerko Wiebenga, opened on 12 June 1928. It is a national monument and was restored to its original state by May 2004.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'A brick and an archive',
      h2: 'What it takes to read something again',
      intro: 'Two things in Hilversum depend on the same condition. The facts come from the encyclopaedia; what they have in common is this page\'s observation.',
      body: [
        { kind: 'table', caption: 'Made to be kept, and what keeping them requires', head: ['Thing', 'What the encyclopaedia says', 'What keeping it needs', 'The computing version'], rows: [
          ['The Hilversummertje', 'a separate yellow brick of a deviating size, designed by Dudok for the town hall of 1928 to 1931', 'the same brick, made to the same measure, whenever the wall is repaired', 'a private file format that only one program ever wrote'],
          ['The archive at the Mediapark', 'Beeld en Geluid manages more than a million hours of audiovisual material', 'something that can still play or decode every carrier and format in it', 'years of data saved by software that may not exist later'],
          ['Beelden voor de Toekomst', 'a national digitisation programme that has run since 2007', 'moving the material into formats that current machines can read', 'converting files to open formats while a reader still exists'],
          ['Zonnestraal', 'restored to its original condition by May 2004', 'drawings and knowledge of how it was first built', 'documentation written down while the builders still remember']
        ] },
        { kind: 'p', text: 'None of this says anything about the condition of any collection in Hilversum, and the page makes no claim about it. The point is simpler. A recording, a document or a dataset is not really kept until there is a way to read it, and the way to read it is usually the part that disappears first. The brick on the town hall can be matched because someone knows its measure. A file can be opened in 2050 only if someone then knows its format, and the surest way to arrange that is to choose a format that many programs already read and to write down what everything in it means.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Hilversum by the numbers, with every sum shown',
      intro: 'The statistics office row for the municipality, each figure with its year, then schools and origin, then the history. Where this page adds or divides, it says so.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Residents', p: '94,595 in 2026, 94,393 in 2025, 86,017 in 2013 and 83,849 in 1995; 46,556 men and 47,837 women in 2025. Ages in 2026: 15,389 under fifteen, 10,157 fifteen to twenty-five, 25,757 twenty-five to forty-five, 25,147 forty-five to sixty-five and 18,145 sixty-five or over. The five groups add to the 2026 total.' },
          { h3: 'Households', p: '44,879 households in 2025, averaging 2.07 people: 19,184 of one person, 43 percent, and 25,695 of more than one. 14,654 households, 33 percent, have children at home.' },
          { h3: 'Homes and income', p: '43,894 dwellings in 2025, 23,703 owner-occupied at 54 percent and 19,752 rented at 45; the two add to 43,455, so 439 dwellings sit in neither published group. Estimated average value 477,000 euro (2025); income 39,700 euro per resident and 49,300 per income recipient (2024); 3.9 percent of residents in poverty.' },
          { h3: 'Schools', p: '36 primary establishments teach 9,111 pupils, about 253 each, and 16 secondary establishments teach 8,781, about 549 each. The office records 6,306 MBO students at institutions in the municipality.' },
          { h3: 'Origin and wijken', p: 'In 2025, 61,032 residents were of Dutch origin, 11,514 of European and 21,847 of non-European origin, adding to the 2025 total; 73,780 were born in the Netherlands. The nine wijken are Centrum, Oost, Zuidoost, Zuid, Zuidwest, Noordwest, Noordoost, the Hilversumse Meent and the Landelijk Gebied.' },
          { h3: 'Every calculation', p: '9,111 pupils over 36 establishments is about 253, and 8,781 over 16 is about 549. 23,703 plus 19,752 is 43,455, which is 439 short of 43,894. The age groups and the origin groups were added only to confirm they are complete. The 13 percent rise from 1995 is the site\'s own figure. Nothing else was calculated.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with the municipality of Hilversum, any broadcaster, Beeld en Geluid, Zonnestraal or any school in the town, and nothing here implies one. The municipal figures are the statistics office row for Hilversum at the years given. The broadcasting history, the railway, the carpet industry, Dudok and the Hilversummertje come from the encyclopaedia entry for Hilversum, and the details of Beeld en Geluid and of Zonnestraal from the entries for each. The encyclopaedia gives its own figures for population and area, which are not combined with the office row here.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Save it so that 2050 can open it',
      intro: 'Every program eventually stops being maintained. The files it wrote are only as useful afterwards as their format allows.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Prefer formats others read', p: 'Plain text in UTF-8, CSV for tables, JSON for structured data, PNG for images. Each is documented in public and read by hundreds of programs, so the loss of any one of them does not lock the data away.' },
          { h3: '2. Write down what it means', p: 'A column called v3 is readable today by the person who named it and by nobody later. A short data dictionary, one line per field with its unit, turns a file that opens into a file that can be understood.' },
          { h3: '3. Try to open old work', p: 'Once a year, open something saved long ago on a machine that did not make it. If it fails, convert it while a working reader still exists. Finding that out after the last reader is gone is too late.' }
        ] },
        { kind: 'table', caption: 'Saved today, opened in twenty years', head: ['What was saved', 'The fragile way', 'The durable way', 'Why it matters'], rows: [
          ['A table of results', 'a file only one spreadsheet program understands', 'CSV in UTF-8, with a note of what each column means', 'any language or tool can read it'],
          ['A trained model', 'a Python pickle tied to one version of one library', 'the training code, pinned versions and a documented export format', 'the model can be rebuilt or reloaded'],
          ['A notebook of analysis', 'cells run in an order nobody recorded', 'a script that runs top to bottom, with a list of the exact packages', 'someone else can get the same answer'],
          ['A drawing or photograph', 'a format tied to one paid application', 'PNG, or a widely read open format beside the working file', 'the image survives the subscription'],
          ['The town hall wall', 'a brick nobody else makes', 'the measure of the Hilversummertje, written down', 'a repair can match it']
        ] },
        { kind: 'callout', h3: 'Why programmers inherit this problem first', p: 'Most people meet file formats only when something refuses to open. Programmers meet them constantly, because every program that saves anything has chosen a format, and the easiest choice is usually the most fragile. Python makes it very simple to save any object with pickle, and a pickle is tied to the code that defined the object: rename a class or upgrade a library and the file may no longer load. Machine learning makes the problem sharper still. A trained model is often saved in a form that only its original framework and version understand, and datasets are shared without any record of what their columns mean. The habits that prevent this are cheap: write data as text in formats others read, keep a list of exact package versions, record the meaning of every field, and check now and then that old work still opens. Hilversum shows the stakes on a larger scale. Its archive holds more than a million hours of audiovisual material, and all of it is only as useful as the means of playing it back.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits that keep work readable',
      intro: 'For every project that saves data, a model, a recording or a document. Learned in the town whose best-known building has a brick nobody else uses.',
      body: [
        { kind: 'table', caption: 'From saving a file to keeping it', head: ['Habit', 'What it means', 'What it prevents', 'What it gives'], rows: [
          ['Open formats', 'Save in text-based, publicly documented formats wherever possible', 'Data locked inside one program', 'Files any tool can open'],
          ['A data dictionary', 'One line per field: name, meaning, unit', 'Columns nobody can interpret later', 'Files that can be understood as well as opened'],
          ['Pinned versions', 'Record the exact version of every library a project used', 'Code that no longer runs after upgrades', 'Results that can be reproduced'],
          ['Rebuild from source', 'Keep the code and raw data that produced every output', 'Outputs that cannot be made again', 'Models and charts that can be regenerated'],
          ['An annual test', 'Open old work on a machine that did not create it', 'Discovering the loss too late', 'Time to convert while a reader exists']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A secret picture drawn in a code the child invents, handed to a friend without the key, and then again with a written key. The child sees that the key is what makes the picture last.' },
          { h3: 'For teenagers', p: 'A Python object saved twice, once with pickle and once as JSON. The teenager renames the class, tries to load both, and writes down which one survived and why.' },
          { h3: 'For adults', p: 'An inventory of the files a team depends on, sorted by whether they need one particular program to open. Adults often find the most important records are in the most fragile formats.' }
        ] },
        { kind: 'p', text: 'This section draws only on what the encyclopaedia says about the Hilversummertje and Beeld en Geluid, and on standard practice in programming. It makes no claim about how any institution in Hilversum stores or preserves its material.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From saving a game to saving a model that still loads',
    intro: 'Placement happens in the free lesson, by watching the learner work on something real. Neither their wijk nor their age alone decides it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Save and reopen', p: 'Children learn that work only counts once it opens again next week.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Write the key', p: 'Learners store game data as text and describe every field.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Pickle or JSON', p: 'Teenagers find out which saved file survives a change to the code.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Rebuildable work', p: 'Adults pin versions and keep the code that makes every output.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can write the code. Why should a teenager near the Mediapark ask whether its files will open in twenty years?',
    intro: 'Because the town already keeps more than a million hours of material that is only as good as the means of reading it.',
    p1: 'Ask an AI assistant to save some results and it will usually reach for whatever is quickest: a pickle, a binary file from one library, a notebook whose cells ran in an order nobody wrote down. The code works today, and the assistant has no reason to care whether it works in 2040. Models themselves are saved in formats tied to the framework and version that trained them, and the datasets that feed them are passed around without any record of what each column means. The result is a growing pile of work that is correct and unreadable at the same time.',
    p2: 'A learner who has watched a pickled object refuse to load after renaming one class, and a JSON file open without complaint, understands the difference in a way no warning can teach. Choosing open formats, pinning versions and writing down what the data means are decisions a person makes before the assistant writes a line. They decide whether the work outlives the tool, and they remain a human responsibility.',
    closer: 'The case for a child in Hilversum learning to code in 2026 is therefore not the broadcasters on the Mediapark. It is that someone who knows how to save work so that it can be read again will be needed wherever AI produces more files than anyone has yet tried to open.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live lessons for Hilversum, from the Meent to the woods',
    intro: 'Hilversum runs from the Hilversumse Meent in the north to the Landelijk Gebied of heath and woodland, and a family anywhere in it can join the same lesson from home.',
    cells: [
      { h3: 'At home, at the set hour', p: 'The class opens on a laptop in the living room, so a learner in Zuidoost or the Meent is exactly as close to the teacher as one in the Centrum. No lift to arrange, and no waiting outside afterwards.' },
      { h3: 'School words in Dutch', p: 'Groep, brugklas, havo, vwo and profielkeuze stay in Dutch during lessons, as a Hilversum school writes them. The teacher knows the system and fits the lessons around it.' },
      { h3: 'A first lesson that teaches', p: 'The free hour is a real lesson on a real task, during which the teacher sees how the learner works. It closes with a level, a named course and a suggested regular time, and nothing is asked for in return.' },
      { h3: 'Groups from many countries', p: 'Five to ten learners at the same stage of the same subject. Hilversum has 15,389 residents under fifteen, but five at one exact stage free at one exact hour are seldom found in any single town, so groups draw on a worldwide pool.' },
      { h3: 'Regio Noord holidays', p: 'Two lessons a week, around eight a month, at a fixed hour. Noord-Holland schools follow regio Noord holidays, and the teaching calendar follows them too.' },
      { h3: 'The clock difference', p: 'India is three and a half hours ahead in summer and four and a half in winter. That leaves after-school hours, early evenings and weekend mornings open through the whole year.' }
    ],
    spec: { title: 'Thirty-six primary schools, sixteen secondary, and one group', p: 'Hilversum has 36 primary establishments teaching 9,111 pupils and 16 secondary establishments teaching 8,781. A coding group still needs five learners at one stage of one subject at one hour, which a pool across all ages from 6 to 67 and many countries can supply and a single town seldom can.' }
  },

  fees: {
    h2: 'The cost of classes in Hilversum',
    intro: 'Three prices, stated in full before anyone books.',
    first: 'A full lesson on a real task, finishing with a level and a course name.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'The dollar fee is the same in Hilversum as in every other country, with no euro list beside it, so a family in Noordoost and a family in Zuid pay exactly the same. Nothing is charged until the free lesson has fixed a course and a time, and payment is then arranged over WhatsApp. Pauses, format changes and missed lessons are covered on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, word for word',

  book: {
    h2: 'Tell us how far the learner has come',
    intro: 'The first task might be a secret picture with a written key, a saved game stored as text, or a Python object saved two ways and tested after a change.',
    success: 'Thank you. Your Hilversum class request has been sent.'
  },

  faq: {
    h2: 'Hilversum coding class questions',
    intro: 'The town, its broadcasting, two buildings and one brick, then the lessons.',
    items: [
      { q: 'What does Hilversum include?', a: 'The statistics office divides the municipality into nine wijken: Centrum, Oost, Zuidoost, Zuid, Zuidwest, Noordwest, Noordoost, the Hilversumse Meent and the Landelijk Gebied, with 43 buurten between them. The encyclopaedia describes Hilversum as the largest place in het Gooi.' },
      { q: 'How many people live in Hilversum?', a: 'The statistics office counted 94,595 residents on 1 January 2026, in 44,879 households in 2025. The row gives 83,849 for 1995, and the site computes the rise as 13 percent.' },
      { q: 'Why is Hilversum called the mediastad?', a: 'According to the encyclopaedia it houses many national broadcasting companies. Experimental radio broadcasts followed the start of the Nederlandsche Seintoestellen Fabriek in 1918, and the building of the Mediapark in Hilversum-Noord brought all broadcasting functions together in the town.' },
      { q: 'What is the Hilversummertje?', a: 'A separate yellow brick of a deviating size that Willem Dudok designed for the outer walls of the Hilversum town hall, built between 1928 and 1931. Dudok had 75 of his designs built in the town.' },
      { q: 'What is Zonnestraal?', a: 'A sanatorium in the Loosdrechtse Bos, founded in 1924 for diamond cutters who had contracted tuberculosis. Its main building, designed by Jan Duiker with Bernard Bijvoet and Jan Gerko Wiebenga, opened on 12 June 1928. It is a national monument and was restored to its original condition by May 2004.' },
      { q: 'How many schools are there in Hilversum?', a: 'The statistics office counts 36 primary establishments teaching 9,111 pupils and 16 secondary establishments teaching 8,781, with 6,306 MBO students at institutions in the municipality. This page rates no school.' },
      { q: 'What language are lessons in, and at what time?', a: 'English, with Dutch school terms such as groep, havo and vwo kept in Dutch. India is three and a half hours ahead in summer and four and a half in winter, so after-school, early-evening and weekend slots all work. A weekly time is fixed at the free lesson and holidays follow regio Noord.' },
      { q: 'Is there a Modern Age Coders classroom in Hilversum?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Hilversum coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore het Gooi and beyond',
    h2: 'To the capital, across the provincial line, and back to the hub',
    html: 'Westward, <a class="cg-inline-link" href="/coding-classes-in-amsterdam">coding classes in Amsterdam</a> leads to eight district pages, and <a class="cg-inline-link" href="/coding-classes-in-almere">Almere</a> lies across the water in Flevoland. To the south and east the nearest pages are <a class="cg-inline-link" href="/coding-classes-in-utrecht">Utrecht</a> and <a class="cg-inline-link" href="/coding-classes-in-amersfoort">Amersfoort</a>, both in the province of Utrecht. Every city in this province with a page, from Haarlem to Purmerend, is listed on <a class="cg-inline-link" href="/coding-classes-in-noord-holland">Noord-Holland</a>. A learner who wants to begin with machine learning can go straight to the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the whole series is on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Continue on WhatsApp'
  },

  footerHeading: 'Hilversum, Noord-Holland and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-amsterdam', label: 'Amsterdam' },
    { href: '/coding-classes-in-noord-holland', label: 'Noord-Holland' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-hvs .cg-hero-grid { grid-template-columns: 1.1fr 0.9fr; align-items: start; gap: clamp(1.2rem, 3.2vw, 2.5rem); }
.cg-root.cg-hvs .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.04; }
.cg-root.cg-hvs .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-hvs .cg-eyebrow { letter-spacing: 0.21em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-hvs .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.02em; }
.cg-root.cg-hvs .cg-grid-3 { gap: clamp(1.1rem, 2.4vw, 1.9rem); }
.cg-root.cg-hvs .cg-card { border-radius: 2px; border-bottom: 3px solid var(--cg-accent-soft); }
.cg-root.cg-hvs .cg-table caption { letter-spacing: 0.06em; font-weight: 700; }
.cg-root.cg-hvs .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hvs .cg-table td:nth-child(3) { font-weight: 600; }
.cg-root.cg-hvs .cg-ladder-col { border-left: 3px solid var(--cg-accent-soft); padding-left: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Hilversum, Noord-Holland: 94,595 residents (statistics office, 1 January 2026), 94,393 (2025), 86,017 (2013), 83,849 (1995), the site computing the rise 1995 to 2026 as 10,746 or 13 percent; 46,556 men and 47,837 women (2025); 44,879 households (2025) averaging 2.07, 19,184 one-person (43 percent), 25,695 multi-person, 14,654 with children (33 percent); ages (2026) 15,389 under fifteen, 10,157 fifteen to twenty-five, 25,757 twenty-five to forty-five, 25,147 forty-five to sixty-five, 18,145 sixty-five or over; 4,636 hectares, 4,561 land, 75 water, published density 2,070; 43,894 dwellings (2025), 23,703 owner-occupied at 54 percent, 19,752 rented at 45 percent, 439 in neither published group; estimated average value 477,000 euro; income 39,700 euro per resident and 49,300 per recipient (2024); 3.9 percent in poverty; origin (2025) 61,032 Dutch, 11,514 European, 21,847 non-European, 73,780 born in the Netherlands; 9 wijken (Hilversumse Meent, Noordoost, Noordwest, Oost, Centrum, Landelijk Gebied, Zuidwest, Zuid, Zuidoost) and 43 buurten; 36 primary establishments with 9,111 pupils, 16 secondary with 8,781, 6,306 MBO students at institutions. Encyclopaedia: the largest place in het Gooi; many national broadcasting companies, known as the mediastad; NSF began in 1918 followed by experimental radio broadcasts; television first in Bussum, the Mediapark in Hilversum-Noord gathered all broadcasting functions; railway connection 1874, after which wealthy families settled; cow-hair carpet making from 1752; Dudok, 75 designs built; town hall built 1928 to 1931 with a separate yellow brick of deviating size, the Hilversummertje; population 94,601 on 1 January 2026 and area 46.19 square kilometres in the encyclopaedia infobox, not combined with the office row. Beeld en Geluid: Mediapark Hilversum, Media Parkboulevard 1; building 2005 by Willem Jan Neutelings and Michiel Riedijk; more than a million hours of audiovisual material; more than 20,000 museum objects; Beelden voor de Toekomst digitisation since 2007. Zonnestraal: founded 1924 for diamond cutters with tuberculosis under the Algemeene Nederlandsche Diamantbewerkersbond; main building by Jan Duiker with Bernard Bijvoet and Jan Gerko Wiebenga, opened 12 June 1928; rijksmonument; UNESCO candidate 2010 to 2018 then withdrawn; restored by May 2004; Loosdrechtse Bos 7. Regio Noord holidays. The city page observes that a record lasts only as long as something can still read it.',
    localProject: 'A record lasts only as long as something can still read it. Dudok faced the Hilversum town hall of 1928 to 1931 with a separate yellow brick of deviating size, the Hilversummertje, so every repair needs that brick made to that measure; Beeld en Geluid at the Mediapark manages more than a million hours of audiovisual material, usable only as long as its carriers and formats can be played or decoded, and a national digitisation programme has run since 2007. The programming form is format durability: private and binary formats, Python pickles tied to class definitions and library versions, framework-specific model files and datasets shared without a data dictionary all become unreadable when their one reader goes. The defences are open text-based formats (UTF-8 text, CSV, JSON, PNG), a data dictionary with one line per field and unit, pinned package versions, keeping the code and raw data that rebuild every output, and an annual test of opening old work on another machine. Kept modest under the Phase 5 method and deliberately not a statistical fallacy. Distinct from sampling rate (Leidschenveen-Ypenburg), from epochs and boundary changes in a series (Amersfoort, Alkmaar), from provenance of imputed values (Loosduinen) and from the date that belongs to an event (Tongelre). Makes no claim about how any institution in Hilversum preserves its material.',
    requiredMentions: [
      '83,849',
      '44,879',
      '19,184',
      '14,654',
      '43,894',
      '9,111',
      '8,781',
      '6,306',
      'Hilversummertje',
      'Zonnestraal',
      'Beeld en Geluid',
      'Mediapark',
      'Seintoestellen',
      'Hilversumse Meent'
    ],
    sources: [
      { claim: 'Gemeente Hilversum: 94,595 inwoners (2026), 94,393 (2025), 86,017 (2013), 83,849 (1995), groei 1995 to 2026 plus 10,746 (13 percent); mannen 46,556, vrouwen 47,837 (2025); 44,879 huishoudens (2025), 19,184 eenpersoonshuishoudens (43 percent), 25,695 meerpersoons, 14,654 met kinderen (33 percent), gemiddeld 2.07; ages 0-15 15,389, 15-25 10,157, 25-45 25,757, 45-65 25,147, 65+ 18,145 (2026); 4,636 hectare, land 4,561, water 75; bevolkingsdichtheid 2,070; woningvoorraad 43,894, koopwoningen 23,703 (54 percent), huurwoningen 19,752 (45 percent) (2025); gemiddelde WOZ 477,000 euro (2025); gemiddeld inkomen per inwoner 39,700 and per inkomensontvanger 49,300 euro (2024); personen in armoede 3.9 percent; basisonderwijs 36 vestigingen 9,111 leerlingen, voortgezet onderwijs 16 vestigingen 8,781 leerlingen, MBO 6,306 studenten; herkomst Nederland 61,032, Europa 11,514, buiten Europa 21,847, geboren in Nederland 73,780 (2025); 9 wijken: Hilversumse Meent, Noordoost, Noordwest, Oost, Centrum, Landelijk Gebied, Zuidwest, Zuid, Zuidoost; 43 buurten.', url: 'https://allecijfers.nl/gemeente/hilversum/' },
      { claim: 'Hilversum (encyclopaedia): Hilversum is een stad en gemeente in de Nederlandse provincie Noord-Holland en de grootste plaats in de landstreek het Gooi. Hilversum huisvest veel landelijke omroepbedrijven en wordt ook wel aangeduid als de mediastad. In 1918 startte de Nederlandsche Seintoestellen Fabriek (NSF) haar activiteiten en daarna begonnen ook de experimentele radio-uitzendingen. De televisie kwam aanvankelijk in Bussum terecht, maar de bouw van het Mediapark in Hilversum-Noord verzamelde alle omroepfuncties weer in Hilversum. Het raadhuis werd gebouwd tussen 1928 en 1931, waarbij Dudok voor de buitengevel een aparte gele steen met een afwijkende maat ontwierp (het zogenaamde Hilversummertje). Van hem zijn in totaal 75 ontwerpen uitgevoerd. Na de aansluiting op het spoorwegnet in 1874; de aanleg van bovengenoemde spoorweg bewerkstelligde dat vermogende families zich in Hilversum gingen vestigen. In 1752 werd het fabriceren van Koehaartapijt aangevat, waaruit de Hilversumse tapijtindustrie ontstond. De gemeente Hilversum heeft 94.601 inwoners (1 januari 2026); 46,19 km2.', url: 'https://nl.wikipedia.org/wiki/Hilversum' },
      { claim: 'Nederlands Instituut voor Beeld en Geluid: Mediapark Hilversum, Media Parkboulevard 1; gebouwd 2005, architecten Willem Jan Neutelings en Michiel Riedijk; ruim 1 miljoen uur aan audiovisueel materiaal; ruim 20.000 objecten in de museumcollectie; digitalisering in het project Beelden voor de Toekomst sinds 2007.', url: 'https://nl.wikipedia.org/wiki/Nederlands_Instituut_voor_Beeld_en_Geluid' },
      { claim: 'Sanatorium Zonnestraal: opgericht 1924; het hoofdgebouw werd geopend op 12 juni 1928; ontworpen door Jan Duiker met Bernard Bijvoet en Jan Gerko Wiebenga; oorspronkelijk bestemd voor diamantslijpers die tuberculose hadden opgelopen, Algemeene Nederlandsche Diamantbewerkersbond; rijksmonument 46771; van 2010 tot 2018 officiele kandidaat voor de UNESCO werelderfgoedlijst, maar van de lijst afgevoerd; hoofdgebouw in mei 2004 in oorspronkelijke staat hersteld; Loosdrechtse Bos 7, Hilversum.', url: 'https://nl.wikipedia.org/wiki/Sanatorium_Zonnestraal' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland and Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any statement about the physical condition of the Beeld en Geluid collection, how much of it is digitised, or how it is stored. Not in the sources read; the page says only that the collection exceeds a million hours and that digitisation has run since 2007.',
      'Any comparison of the encyclopaedia population of 94,601 and area of 46.19 square kilometres with the office figures of 94,595 and 4,636 hectares. Two vintages of two sources, not combined.',
      'Any comment on the absence of higher-education students in the office row. Reading the next column is the Westland argument.',
      'Any claim about where secondary pupils live. The office counts pupils at establishments in the municipality, not pupils resident in it.',
      'Any statement about which broadcasters are based in Hilversum today, or their audience figures.',
      'The Zonnestraal UNESCO history beyond the source sentence, and any claim about its present use.',
      'Anything the Amsterdam and Utrecht pages own, including their districts and arguments.'
    ]
  }
};
