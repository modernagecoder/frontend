'use strict';
// Vlaardingen: the haringstad, rights confirmed in 1273, 77,480 residents.
// Spine (modest, per the Phase 5 method): the encyclopaedia says Vlaardingen
// probably had town rights before 1273, because the rights granted that year
// were written as an extension of earlier ones. A surviving record points at
// one that is not there. Databases, websites and AI citations all contain
// references like that, and checking that every reference resolves is a
// basic, often skipped, part of building software.

module.exports = {
  slug: 'coding-classes-in-vlaardingen',
  code: 'vld',
  accent: '#244624',
  accentRationale: 'Vlaardingen: a deep sea-net green for the herring town, placed by the solver more than thirty units from every page it links to, the Schiedam juniper and the Rotterdam teal among them, with an unlinked district as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Vlaardingen',
    eyebrow: 'Vlaardingen, Zuid-Holland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Zuid-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Vlaardingen, Netherlands',
  title: 'Coding Classes in Vlaardingen | Modern Age Coders',
  description: 'Coding, Python, AI and app lessons live online for Vlaardingen, ages 6 to 67, from Holy-Noord and Westwijk to the Broekpolder. The first lesson is free.',
  ogDescription: 'Live online coding, Python, AI and mathematics in the herring town, on a page about records that point to other records which are no longer there.',
  twitterDescription: 'Vlaardingen classes for ages 6 to 67, live online, and the first lesson is on us.',
  ogImageCourse: 'complete-app-development-masterclass-for-teens',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Vlaardingen Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Vlaardingen, taught in English.'
  },

  h1: 'Coding classes in Vlaardingen, the herring town whose charter points to an older one',
  capsuleQ: 'What are the best coding classes in Vlaardingen?',
  capsule: 'Vlaardingen had 77,480 residents on 1 January 2026, according to the national statistics. It is best known as the haringstad, although, as the encyclopaedia puts it, the fishing is now a thing of the past. Its town rights have a curious history: in 1273 Count Floris V granted rights that were written as an extension of rights given earlier, so the town probably had a charter before 1273, and that earlier grant is not what survives. A record that points to another record which is not there is one of the commonest faults in software, from databases and web links to the sources an AI model cites. Modern Age Coders teaches live, online and in English from age 6 to 67; the first lesson is free, and after that a group costs USD 100 a month and one-to-one lessons USD 150.',
  lead: 'The document of 1273 is a pointer. By describing the rights it granted as an extension of earlier ones, it refers to something older, and the encyclopaedia draws the careful conclusion: Vlaardingen probably had town rights before 1273. The earlier grant itself is not the record that has come down. Historians are used to this, and they treat the pointer as evidence while saying plainly that the thing it points to is missing. Software is full of the same situation and is far less careful about it. An order refers to a customer who has been deleted. A web page links to a page that no longer exists. A program loads a file that someone moved. An AI answer cites an article that was never written. In each case the reference looks exactly like a good one until somebody follows it.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Vlaardingen.',

  picks: {
    eyebrow: 'Course picks for Vlaardingen',
    h2: 'Four courses for the haringstad',
    intro: 'A child in the Westwijk who wants to build a quiz with pictures, a teenager in Holy-Noord making an app with users and orders, a student in the Centrum whose project cites a dozen sources, and an adult in the Broekpolder whose team keeps records in several linked spreadsheets. None of them pays for the first lesson.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Games that load pictures and sounds from files, where a child learns what happens when a file is renamed and how to make the game notice.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'Apps with a real database, where every link from one table to another is protected so nothing can point at a missing record.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python tools that check links, references and citations automatically, including the sources an AI model claims to have used.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Linked spreadsheets and reports tested for lookups that return nothing because the row they point to has gone.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Vlaardingen today',
      h2: 'Herring, soap, and a street with a long claim',
      intro: 'The statistics office divides Vlaardingen into eight wijken and 40 buurten: the Centrum, the Westwijk, the Oostwijk, Holy-Noord, Holy-Zuid, the Broekpolder, Vlaardinger Ambacht and the Vettenoordse Polder. The town covers 2,336 hectares of land and 333 of water, at a published density of 3,307 residents to the square kilometre.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The haringstad', p: 'Vlaardingen is best known as the herring town, but fishing for herring, anchovy and cod is now in the past, the encyclopaedia says. Herring fishing was an important economic activity for Vlaardingen certainly from the eighteenth century, and the herring lugger VL92 Balder can be seen in the Oude Haven.' },
          { h3: 'Soap and industry', p: 'In the twentieth century Levers Zeepmaatschappij, the company that later became Unilever, established itself in Vlaardingen, according to the encyclopaedia entry for the town.' },
          { h3: 'The Hoogstraat', p: 'In 2020 the town archaeologist Tim de Ridder argued that the Hoogstraat in Vlaardingen must be the oldest continuously inhabited street in the Netherlands. The page reports the claim as his and does not test it.' }
        ] },
        { kind: 'spec', title: 'A charter that refers to an earlier one', p: 'Vlaardingen probably obtained town rights before 1273, the encyclopaedia records, since the rights Count Floris V granted in 1273 indicated that they were an extension of rights granted earlier. The Grote Kerk stands on the Markt in the old centre.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Dangling references',
      h2: 'When a record points at something that is not there',
      intro: 'A reference is a promise that something exists somewhere else. The table shows how the same broken promise looks in a charter and in four kinds of software.',
      body: [
        { kind: 'table', caption: 'References that outlive what they refer to', head: ['Where', 'The reference', 'What it points to', 'What happens when that is missing'], rows: [
          ['The 1273 charter', 'rights described as an extension', 'an earlier grant', 'historians say probably, and name the gap'],
          ['A database', 'an order holding a customer number', 'a customer record', 'reports that crash, or quietly leave the order out'],
          ['A website', 'a link', 'another page', 'a visitor lands on page not found'],
          ['A program', 'a file path or a package name', 'a file or a library', 'the program fails, sometimes only on one machine'],
          ['An AI answer', 'a citation', 'an article or a book', 'a source that looks real and was never written']
        ] },
        { kind: 'p', text: 'The historians\' reading of the charter is the model to copy. They treat the 1273 wording as real evidence that something came before, and they say probably, because the earlier grant is not in front of them. Software usually does neither. A database without protection lets an order keep a customer number after the customer has been deleted, and every report that joins the two tables silently loses the order or fails outright. A website keeps linking to a page that moved years ago. A language model, asked for sources, can produce a reference in perfect format to a paper that does not exist, because it has learned what references look like, not which ones are real. The habit that protects against all of these is simple to state: follow every reference and check that something is there.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Vlaardingen, figure by figure',
      intro: 'Numbers as the national statistics publish them for the municipality, with years; then the history from the encyclopaedia; then the calculations this page makes.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A population that fell and recovered', p: 'The count was 73,992 in 1995, 70,905 in 2013, 77,260 in 2025 and 77,480 on 1 January 2026. The page does not explain the dip. In 2025 there were 37,695 men and 39,565 women.' },
          { h3: 'Ages, 2026', p: 'Under fifteen: 12,520. Fifteen to twenty-five: 8,369. Twenty-five to forty-five: 21,353. Forty-five to sixty-five: 19,122. Sixty-five and older: 16,116.' },
          { h3: 'Households', p: '36,592 households in 2025, averaging 2.08 people: 15,121 of a single person and 12,098 with children.' },
          { h3: 'Homes, income, poverty', p: '37,117 dwellings in 2025, 17,445 owned and 19,672 rented, so a little more than half are rented; estimated average value 303,000 euro. Income averaged 31,900 euro per resident and 39,400 per income recipient in 2024, and 4.3 percent of residents were in poverty.' },
          { h3: 'Schools and origin', p: '23 primary establishments teach 6,562 pupils, around 285 each, and 9 secondary establishments teach 5,079, around 564 each, with 965 MBO students at institutions in the town. In 2025, 60,625 residents were born in the Netherlands; 9,302 were of European and 20,743 of non-European origin.' },
          { h3: 'The working', p: '77,480 minus 73,992 is 3,488, and 77,480 minus 70,905 is 6,575. 6,562 over 23 is about 285 and 5,079 over 9 about 564. The age groups, the two tenure groups and the men and women were each added up only to confirm the totals.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is not connected with the municipality of Vlaardingen, Unilever, the Oude Haven or any school in the town, and nothing here says otherwise. The statistics are those published for Vlaardingen in the years stated. The herring history, VL92 Balder, the charter, Levers Zeepmaatschappij, the Grote Kerk, the Hoogstraat claim and the wijken come from the encyclopaedia entry for Vlaardingen, which gives 77,462 residents for 1 January 2026; that figure is from a different source and is not combined with the statistics.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Follow every pointer before you trust it',
      intro: 'Broken references are rarely spotted where they are made. They are found later, by someone who follows them. The fix is to follow them first, automatically and often.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Make the database refuse', p: 'Declare every link between tables as a foreign key, so the database will not store an order for a customer who does not exist, and decide in advance what deleting a customer should do to their orders.' },
          { h3: '2. Check links on a schedule', p: 'Run a link checker over a website, a codebase or a set of documents every week. A broken reference found by a script is a small job; one found by a customer is a lost customer.' },
          { h3: '3. Verify every citation', p: 'When an AI tool cites a source, open it. Check that it exists, that it says what the answer claims, and that it is the source rather than a lookalike. Keep only what survives.' }
        ] },
        { kind: 'table', caption: 'Broken references and the check that finds them', head: ['The broken reference', 'How it usually arises', 'Who finds it without a check', 'The check that finds it first'], rows: [
          ['An order for a deleted customer', 'a delete with no rule for related records', 'the accountant at year end', 'a foreign key with a delete rule'],
          ['A link to a moved page', 'a site reorganised without redirects', 'a visitor from a search engine', 'a link checker and a redirect for every move'],
          ['An import of a renamed file', 'a folder tidied by a colleague', 'the next person to run the program', 'a startup check that every file exists'],
          ['A package that was withdrawn', 'a dependency deleted upstream', 'the build server, at the worst time', 'pinned versions and a local mirror'],
          ['A citation to a paper that does not exist', 'a model imitating the form of a reference', 'a reader who tries to find it', 'opening every cited source before use']
        ] },
        { kind: 'callout', h3: 'Why AI citations need the historian\'s care', p: 'Language models have read a great many references and know exactly what one looks like: the authors, the year, the title in the right style, a journal name, sometimes a page number. Asked for sources, they can produce references that look entirely genuine and point to nothing at all, or to a real paper that says something different. Tools that search the web before answering reduce the problem without removing it, because the model can still misattribute what it found. The defence is the one historians apply to the Vlaardingen charter: treat a reference as a claim that something exists, follow it, and write probably, or nothing, when the thing it points to cannot be found. In a database the same discipline is enforced by the software, which refuses to store a pointer to a missing record. For AI output there is no such enforcement yet, so the checking falls to the person who uses the answer.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for anything built from references',
      intro: 'For databases, websites, codebases, reports and AI-assisted writing. Taught in the town whose surviving charter points back to an earlier one.',
      body: [
        { kind: 'table', caption: 'Keeping references whole', head: ['Habit', 'What to do', 'What it prevents', 'The result'], rows: [
          ['Declare the links', 'Use foreign keys and required fields for every reference', 'Pointers to records that never existed', 'A database that refuses bad links'],
          ['Decide what deletion does', 'For each link, choose block, cascade or keep-with-a-marker', 'Orphaned records after a delete', 'Deletes with known consequences'],
          ['Redirect when moving', 'Leave a forwarding address whenever a page or file moves', 'Links that die with a reorganisation', 'References that survive change'],
          ['Check on a schedule', 'Run a link and reference checker regularly', 'Breakage discovered by users', 'Problems found first by you'],
          ['Open every source', 'Follow each citation in AI output before relying on it', 'Invented or misread sources', 'Claims you can stand behind']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A picture quiz whose images are loaded from a folder. The child renames one picture, sees the gap appear, and adds a message that says which picture is missing instead of showing nothing.' },
          { h3: 'For teenagers', p: 'A small shop database with customers and orders. The teenager deletes a customer, finds the orphaned orders, then adds a foreign key and chooses what a delete should do.' },
          { h3: 'For adults', p: 'An AI-drafted report with its cited sources checked one by one. Adults are often surprised how many references need correcting, and how convincing the broken ones looked.' }
        ] },
        { kind: 'p', text: 'This section uses the encyclopaedia\'s account of the 1273 charter as its example and standard practice in databases and software maintenance for the rest. It makes no claim about the content or date of any earlier Vlaardingen charter.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a missing quiz picture to an AI citation checked by hand',
    intro: 'The level each learner starts at comes from the free lesson, watching them handle a real task. Neither age nor wijk settles it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'The missing picture', p: 'Children see what a program does when a file it expects has gone.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Lookups that fail', p: 'Learners build a small lookup and test it with names that are not there.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Foreign keys', p: 'Teenagers protect a database so orders cannot point to missing customers.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Checked sources', p: 'Adults verify the references in AI-drafted work before using it.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can give you ten sources in a second. Why should a teenager in Vlaardingen open every one?',
    intro: 'Because a reference is only a promise that something exists, and the town\'s own charter shows how a promise can outlive what it points to.',
    p1: 'Ask an AI assistant to back up its answer and it will usually oblige with sources, formatted neatly, often with authors and years. Some are exactly right. Some are real works that say something else. Some do not exist at all, assembled from the patterns of thousands of genuine references. The assistant is not lying in any ordinary sense; it has learned the shape of a citation and produces that shape. Nothing in the text marks which references are good, so they all look equally trustworthy until someone follows them.',
    p2: 'A learner who has deleted a customer from a practice database and watched the orders turn into orphans, and then written a checker that finds every broken link in a project, carries the habit into everything they read. Following each reference, marking what cannot be found and refusing to rely on it are small acts of discipline that no model performs on its own behalf. The assistant can list the sources. Checking that they are there is a human job.',
    closer: 'So the case for a child in Vlaardingen learning to code in 2026 is not the herring or the harbour. It is that someone who follows every pointer before trusting it will be needed wherever AI produces answers full of references that look perfect.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'One class for every wijk of Vlaardingen',
    intro: 'From the Oude Haven to Holy and the Broekpolder, the town is close-knit but busy, and a lesson that starts at the kitchen table removes the journey altogether.',
    cells: [
      { h3: 'At home, on time', p: 'A learner in Vlaardinger Ambacht and a learner in Holy-Zuid start at the same moment, each from home. No cycling across town in the dark and no waiting at a door afterwards.' },
      { h3: 'Dutch words kept Dutch', p: 'Groep, brugklas, vmbo, havo, vwo and profielkeuze are said in Dutch in every lesson, as a Vlaardingen school uses them, and the teaching around them is in English.' },
      { h3: 'The first hour teaches', p: 'The free session is a real lesson with a real task. At the end the teacher proposes a level, a course and a weekly time, and nothing is paid or promised.' },
      { h3: 'Groups made to measure', p: 'Five to ten learners at one stage of one subject. Vlaardingen has 12,520 residents under fifteen, but five who match on subject, level and hour are hard to find in one town, so groups may include learners from abroad.' },
      { h3: 'Regio Midden weeks off', p: 'Two lessons a week, roughly eight a month, at the same time, pausing for the regio Midden school holidays that Zuid-Holland keeps.' },
      { h3: 'Teachers ahead of the clock', p: 'The teachers are in India, three and a half hours ahead of Vlaardingen in summer and four and a half in winter, so after school, evenings and weekend mornings all work.' }
    ],
    spec: { title: 'Thirty-two schools, eight wijken, and a group from further afield', p: 'Vlaardingen has 23 primary establishments teaching 6,562 pupils and 9 secondary establishments teaching 5,079. Five learners who match on subject, stage and hour are much easier to bring together across every age from 6 to 67 and many countries than within one town.' }
  },

  fees: {
    h2: 'What classes cost in Vlaardingen',
    intro: 'The whole price, in three lines.',
    first: 'A real lesson on a real task, finishing with a level and the course that suits it.',
    group: 'Per month, normally eight lessons, five to ten learners at one level.',
    private: 'Per month, normally eight lessons, one teacher for one learner.',
    closer: 'There is a single dollar price for every country and no euro list beside it, so a family in the Westwijk pays what a family in Holy-Noord pays. Nothing is charged until the free lesson has settled a course and a time, and payment is arranged over WhatsApp afterwards. The pricing page covers pauses, changes of format and missed lessons.'
  },

  reviewsH2: 'Six Google reviews, as their authors wrote them',

  book: {
    h2: 'Where is the learner up to?',
    intro: 'The first task might be a picture quiz that notices a missing file, a lookup tested with names that are not there, or a small database protected against orphaned orders.',
    success: 'Thank you. Your Vlaardingen class request has been sent.'
  },

  faq: {
    h2: 'Vlaardingen coding class questions',
    intro: 'The herring town, its charter, its figures, and the lessons.',
    items: [
      { q: 'Which wijken does Vlaardingen have?', a: 'The statistics office lists eight: the Centrum, the Westwijk, the Oostwijk, Holy-Noord, Holy-Zuid, the Broekpolder, Vlaardinger Ambacht and the Vettenoordse Polder, with 40 buurten between them.' },
      { q: 'How many people live in Vlaardingen?', a: 'The national count was 77,480 on 1 January 2026, in 36,592 households in 2025. It was 73,992 in 1995 and 70,905 in 2013.' },
      { q: 'Why is Vlaardingen called the haringstad?', a: 'Because herring fishing was an important part of its economy, certainly from the eighteenth century, according to the encyclopaedia, which adds that fishing for herring, anchovy and cod is now a thing of the past. The herring lugger VL92 Balder can be seen in the Oude Haven.' },
      { q: 'When did Vlaardingen get town rights?', a: 'Probably before 1273, the encyclopaedia says, because the rights Count Floris V granted in 1273 indicated that they extended rights granted earlier.' },
      { q: 'What does Unilever have to do with Vlaardingen?', a: 'Levers Zeepmaatschappij, the company that later became Unilever, established itself in Vlaardingen in the twentieth century, according to the encyclopaedia.' },
      { q: 'How many schools does Vlaardingen have?', a: 'The statistics count 23 primary establishments with 6,562 pupils and 9 secondary establishments with 5,079, plus 965 MBO students at institutions in the town. This page does not rate any school.' },
      { q: 'What language are the lessons in, and when are they?', a: 'The lessons are in English, with school words such as vmbo, havo and brugklas kept in Dutch. The teachers work from India, three and a half hours ahead of Vlaardingen in summer and four and a half in winter, so afternoon, evening and weekend slots are easy to arrange. The time is agreed in the free lesson, and the regio Midden holidays are kept.' },
      { q: 'Is there a Modern Age Coders classroom in Vlaardingen?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Vlaardingen coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Rijnmond and beyond',
    h2: 'Next door to Schiedam, into Rotterdam, and out to the province',
    html: 'Vlaardingen\'s eastern neighbour has a page at <a class="cg-inline-link" href="/coding-classes-in-schiedam">coding classes in Schiedam</a>, and beyond it <a class="cg-inline-link" href="/coding-classes-in-rotterdam">Rotterdam</a> leads to its district pages, among them <a class="cg-inline-link" href="/coding-classes-in-delfshaven">Delfshaven</a>. Every town and city in the province with a page is listed on <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. For machine learning straight away there is the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the complete series is on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Ask us on WhatsApp'
  },

  footerHeading: 'Vlaardingen, Zuid-Holland and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-schiedam', label: 'Schiedam' },
    { href: '/coding-classes-in-zuid-holland', label: 'Zuid-Holland' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-vld .cg-hero-grid { align-items: end; gap: clamp(1.2rem, 3.2vw, 2.5rem); }
.cg-root.cg-vld .cg-hero h1 { font-weight: 660; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-vld .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-vld .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-vld .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.016em; }
.cg-root.cg-vld .cg-grid-3 { gap: clamp(0.95rem, 2.2vw, 1.75rem); }
.cg-root.cg-vld .cg-card { border-radius: 3px; border-top: 3px solid var(--cg-accent-soft); }
.cg-root.cg-vld .cg-table caption { letter-spacing: 0.04em; font-weight: 700; }
.cg-root.cg-vld .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-vld .cg-table td:nth-child(3) { font-weight: 600; }
.cg-root.cg-vld .cg-ladder-col { border-bottom: 2px solid var(--cg-accent-soft); padding-bottom: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Vlaardingen, Zuid-Holland: 77,480 residents (statistics, 1 January 2026), 77,260 (2025), 70,905 (2013), 73,992 (1995); 37,695 men and 39,565 women (2025); ages (2026) 12,520 under fifteen, 8,369 fifteen to twenty-five, 21,353 twenty-five to forty-five, 19,122 forty-five to sixty-five, 16,116 sixty-five or over; 36,592 households (2025) averaging 2.08, 15,121 one-person, 12,098 with children; 2,669 hectares, 2,336 land, 333 water, published density 3,307; 37,117 dwellings (2025), 17,445 owner-occupied at 47 percent, 19,672 rented at 53 percent; estimated average value 303,000 euro; income 31,900 euro per resident and 39,400 per recipient (2024); 4.3 percent in poverty; 60,625 born in the Netherlands, 9,302 of European and 20,743 of non-European origin (2025); 8 wijken (Holy Noord, Holy Zuid, Broekpolder, Vlaardinger Ambacht, Westwijk, Centrum, Oostwijk, Vettenoordse Polder), 40 buurten; 23 primary establishments with 6,562 pupils, 9 secondary with 5,079, 965 MBO students at institutions. Encyclopaedia: Vlaardingen is best known as the haringstad; the fishing for herring, anchovy and cod is now in the past; herring fishing was an important economic activity certainly from the eighteenth century; the herring lugger VL92 Balder at the Oude Haven; town rights probably before 1273, since the rights granted by Count Floris V in 1273 indicated an extension of earlier rights; Levers Zeepmaatschappij, later Unilever, established in Vlaardingen in the twentieth century; in 2020 the town archaeologist Tim de Ridder held that the Hoogstraat must be the oldest continuously inhabited street in the Netherlands; the Grote Kerk on the Markt; infobox 77,462 on 1 January 2026 and 26.69 square kilometres, not combined with the statistics. Regio Midden holidays. The city page teaches dangling references and referential integrity.',
    localProject: 'Follow every pointer before you trust it. The encyclopaedia infers that Vlaardingen probably had town rights before 1273, because the 1273 grant by Floris V was worded as an extension of earlier rights: a surviving record points at one that is not the record that survives, and the historians treat the pointer as evidence while naming the gap. The programming form is the dangling reference: orders holding the number of a deleted customer, links to moved pages, file paths and package names that no longer resolve, and AI citations to sources that were never written or say something else. The defences are foreign keys with a chosen delete rule, redirects whenever a page or file moves, scheduled link and reference checks, pinned dependencies, and opening every cited source in AI output before relying on it. Chosen after a case-sensitive check found no page using foreign key, referential, dangling or orphan. Distinct from Helmond, where a value filled by a rule cannot confirm the rule (the missing date is imputed), since this page fills nothing and asks only whether references resolve; from Uithoorn, which asks which layer an absence is in; and from Den Bosch, which validates relationships between fields inside one record.',
    requiredMentions: [
      '73,992',
      '70,905',
      '36,592',
      '15,121',
      '12,098',
      '37,117',
      '17,445',
      '19,672',
      '6,562',
      '5,079',
      '16,116',
      'Balder',
      'Vettenoordse Polder',
      'Vlaardinger Ambacht'
    ],
    sources: [
      { claim: 'Gemeente Vlaardingen: 77,480 inwoners (2026), 77,260 (2025), 70,905 (2013), 73,992 (1995); mannen 37,695, vrouwen 39,565 (2025); 36,592 huishoudens, 15,121 eenpersoons (41 percent), 12,098 met kinderen (33 percent), gemiddeld 2.08 (2025); ages 0-15 12,520, 15-25 8,369, 25-45 21,353, 45-65 19,122, 65+ 16,116 (2026); 2,669 hectare, land 2,336, water 333; bevolkingsdichtheid 3,307; woningvoorraad 37,117, koop 17,445 (47 percent), huur 19,672 (53 percent) (2025); gemiddelde WOZ 303,000 euro; gemiddeld inkomen per inwoner 31,900 and per inkomensontvanger 39,400 euro (2024); personen in armoede 4.3 percent; basisonderwijs 23 vestigingen 6,562 leerlingen, voortgezet onderwijs 9 vestigingen 5,079 leerlingen, MBO 965; geboren in Nederland 60,625, herkomst Europa 9,302, buiten Europa 20,743 (2025); 8 wijken: Holy Noord, Holy Zuid, Broekpolder, Vlaardinger Ambacht, Westwijk, Centrum, Oostwijk, Vettenoordse Polder; 40 buurten.', url: 'https://allecijfers.nl/gemeente/vlaardingen/' },
      { claim: 'Vlaardingen (encyclopaedia): Vlaardingen is vooral bekend als haringstad. De visserij (op haring, ansjovis en kabeljauw) is echter verleden tijd. De haringvisserij was voor Vlaardingen zeker vanaf de achttiende eeuw een belangrijke economische activiteit. VL92 Balder at the Oude Haven. Vlaardingen verkreeg waarschijnlijk al voor 1273 stadsrechten, aangezien in 1273 Graaf Floris V stadsrechten verleende die erop wezen dat ze een uitbreiding waren van eerder verleende rechten. In 2020 meende stadsarcheoloog Tim de Ridder dat de Hoogstraat in Vlaardingen de oudste continu bewoond gebleven straat van Nederland moet zijn. Levers Zeepmaatschappij (het latere Unilever). Grote Kerk on the Markt. Infobox: 77.462 inwoners (1 januari 2026), 26,69 km2. Wijken: Centrum, Westwijk, Vettenoordse Polder, Oostwijk, Vlaardinger Ambacht/Babberspolder, Holy-Zuid, Holy-Noord, Broekpolder.', url: 'https://nl.wikipedia.org/wiki/Vlaardingen' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any date or content for an earlier Vlaardingen charter. The source infers one only from the wording of 1273.',
      'That VL92 Balder is the last herring lugger. The source read places it in the Oude Haven without that claim.',
      'Any test of the Hoogstraat claim. It is reported as the town archaeologist\'s view, and superlatives are the Zwolle and Nijmegen argument.',
      'Any cause for the fall in population to 2013 and the rise after. Not in the sources read.',
      'A Dutch-origin count derived by subtraction. Not published in the row read.',
      'Any comparison of the encyclopaedia figure of 77,462 with the statistics figure of 77,480. Two sources that disagree is the Breda argument.',
      'Anything the Schiedam, Rotterdam, Delfshaven and Zuid-Holland pages own, including their figures and arguments.'
    ]
  }
};
